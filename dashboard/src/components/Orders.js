import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import GeneralContext from "./GeneralContext";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const generalContext = useContext(GeneralContext);


  const HostUrl = process.env.REACT_APP_HOST_URL;
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${HostUrl}/allOrders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("ORDERS RESPONSE:", res);
        console.log("ORDERS:", res.data);

        setAllOrders(res.data);
      })
      .catch((e) => {
        console.log("order err: ", e);
        console.log("ORDER ERROR:", e.response?.data || e.message);
      });
  }, [generalContext.dataRefresh]);

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({allOrders.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Stock</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              </thead>

              <tbody>
                {allOrders.map((order, index) => {
                  const profClass = order.mode === "Buy" ? "profit" : "loss";

                  return (<tr key={order._id || index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>
                    <td>₹ {order.price}</td>
                    <td className={profClass} style={{ fontSize: "0.9rem" }}>{order.mode}</td>
                  </tr>)
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
