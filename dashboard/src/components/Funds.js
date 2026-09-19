import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import GeneralContext from "./GeneralContext";

const Funds = () => {
  const [funds, setFunds] = useState(null);
  const generalContext = useContext(GeneralContext);
  const token = localStorage.getItem("token");

  useEffect(() => {

    const fetchFunds = async () => {
      try {

        const response = await axios.get(`${process.env.REACT_APP_HOST_URL}/funds`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFunds(response.data);
        // console.log(response.data);
      }
      catch (e) {
        console.log(e);
      }
    }
    fetchFunds();
  }, [generalContext.dataRefresh]);

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className="btn btn-green">Add funds</Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row">
        {token ?
          (<div className="col">
            <span>
              <p>Equity :</p>
            </span>

            <div className="table">
              <div className="data">
                <p>Available Cash: </p>
                <p className="imp colored"> ₹{(funds?.balance || 0).toFixed(2)}</p>
              </div>
              <div className="data">
                <p>Used margin : </p>
                <p className="imp">₹{(funds?.usedMargin || 0).toFixed(2)}</p>
              </div>
              <hr />
              <div className="data">
                <p>Opening Balance</p>
                <p>₹10000.00</p>
              </div>
              {/* <div className="data">
              <p>Opening Balance</p>
              <p>3736.40</p>
            </div> */}
              {/* <div className="data">
              <p>Payin</p>
              <p>4064.00</p>
            </div> */}
              {/* <hr /> */}
            </div>
          </div>

          ) : (<div className="col">
            <div className="commodity">
              <p>You don't have a commodity account</p>
              <Link to={`${process.env.REACT_APP_FRONTEND_URL}/login`} className="btn btn-blue">Open Account</Link>
            </div>
          </div>
          )}
      </div>
    </>
  );
};

export default Funds;
