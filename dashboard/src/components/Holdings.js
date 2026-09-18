import { useState, useEffect, useContext } from "react";
import React from "react";

import axios from "axios";
import GeneralContext from "./GeneralContext";

import { VerticalChart } from "./VerticalChart";

// import { holdings } from "../data/data";

const Holdings = () => {
  const generalContext = useContext(GeneralContext);
  // console.log("HOLDINGS RENDER:", generalContext.dataRefresh);
  const [allHoldings, setAllHoldings] = useState([]);


  useEffect(() => {

    const HostUrl = process.env.REACT_APP_HOST_URL;
    const token = localStorage.getItem("token");

    console.log("HOLDINGS EFFECT RUNNING");
    // console.log("REFRESH VALUE:", generalContext.holdingsRefresh);

    axios.get(`${HostUrl}/allHoldings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
      .then((res) => {
        // console.log(res.data);
        setAllHoldings(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [generalContext.dataRefresh]);

  const totalInvestment = allHoldings.reduce(
    (total, stock) => total + stock.avg * stock.qty,
    0
  );

  const currValue = allHoldings.reduce((total, stock) =>
    total + stock.price * stock.qty, 0
  );

  const totalPnl = currValue - totalInvestment;

  const totalPnlPercentage =
    totalInvestment > 0
      ? (totalPnl / totalInvestment) * 100
      : 0;

  // const totalPnlClass = totalPnl >= 0 ? "profit" : "loss";

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              {/* <th>Net chg.</th> */}
              {/* <th>Day chg.</th> */}
              {/* <th>Net PnL</th> */}
            </tr>
          </thead>

          <tbody>
            {
              allHoldings.map((stock, index) => {
                // console.log("HOLDING:", stock);
                const currVal = stock.price * stock.qty;
                const netPnl = currVal - stock.avg * stock.qty;
                const isProfit = netPnl >= 0.0;
                const profClass = isProfit ? "profit" : "loss";
                // const dayClass = stock.isLoss ? "loss" : "profit";

                return (
                  <tr key={stock._id || index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{currVal.toFixed(2)}</td>
                    <td className={profClass}>{(currVal - stock.avg * stock.qty).toFixed(2)}</td>
                    {/* <td className={profClass}>{stock.net}</td> */}
                    {/* <td className={profClass}>{netPnl.toFixed(2)}</td> */}
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {totalInvestment.toFixed(2)}{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            {currValue.toFixed(2)}{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>{totalPnl.toFixed(2)} ({totalPnlPercentage.toFixed(2)} %)</h5>
          <p> P&L</p>
        </div>
      </div>

      <br></br>
      <br></br>
      <VerticalChart data={data} />

    </>
  );
};

export default Holdings;
