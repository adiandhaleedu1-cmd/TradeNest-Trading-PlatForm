// import { Opacity } from "@mui/icons-material";
import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const Summary = () => {
  const [user, setUser] = useState(null);
  const [funds, setFunds] = useState(null);
  const [holdings, setHoldings] = useState([]);
  const generalContext = useContext(GeneralContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const fetchData = async () => {
      try {
        const profileResponse = await axios.get(`${process.env.REACT_APP_HOST_URL}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setUser(profileResponse.data);
        // console.log(profileResponse.data);

        const fundsResponse = await axios.get(`${process.env.REACT_APP_HOST_URL}/funds`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setFunds(fundsResponse.data);
        // console.log(fundsResponse.data);

        const holdingResponse = await axios.get(`${process.env.REACT_APP_HOST_URL}/allholdings`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setHoldings(holdingResponse.data);
        // console.log(holdingResponse.data);

      }
      catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, [generalContext.dataRefresh]);

  const totalInvestment = holdings.reduce(
    (total, stock) => total + stock.avg * stock.qty,
    0
  );

  const currValue = holdings.reduce((total, stock) =>
    total + stock.price * stock.qty, 0
  );

  const totalPnl = currValue - totalInvestment;

  const totalPnlPercentage =
    totalInvestment > 0
      ? (totalPnl / totalInvestment) * 100
      : 0;

  const handleLogin = () => {
    window.location.href = `${process.env.REACT_APP_FRONTEND_URL}/login`;
  }

  return (
    <>
      <div className="username">
        <h6>Hi, {user?.name || "User"}!</h6>
        <hr className="divider" />
      </div>

      {user ?
        (<>
          <div className="section">
            <span>
              <p>Equity</p>
            </span>

            <div className="data">
              <div className="first">
                <h3>₹{(funds?.balance || 0).toFixed(2)}</h3>
                <p>Margin available</p>
              </div>
              <hr />

              <div className="second">
                <p>
                  Margins used <span>₹{(funds?.usedMargin || 0).toFixed(2)}</span>{" "}
                </p>
                <p>
                  Opening balance <span>₹100000.00</span>{" "}
                </p>
              </div>
            </div>
            {/* <div>
          <h3 className="opacity-50">Currently dynamic data is not available...</h3>
        </div> */}
            <hr className="divider" />
          </div>

          <div className="section">
            <span>
              <p>Holdings ({holdings.length})</p>
            </span>

            <div className="data">
              <div className="first">
                <h3 className={totalPnl >= 0 ? "profit" : "loss"}>
                  ₹{totalPnl.toFixed(2)} <small>{totalPnlPercentage.toFixed(2)}%</small>{" "}
                </h3>
                <p>P&L</p>
              </div>
              <hr />

              <div className="second">
                <p>
                  Current Value <span>₹{currValue.toFixed(2)}</span>{" "}
                </p>
                <p>
                  Investment <span>₹{totalInvestment.toFixed(2)}</span>{" "}
                </p>
              </div>
            </div>
            <hr className="divider" />
          </div>
        </>) : (<>
          <p>Login to access trading features.</p>
          <button type="button" className="logout-btn" onClick={handleLogin}>
            Login
          </button>
        </>)}
    </>
  );
};

export default Summary;
