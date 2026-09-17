import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./profile.css";

const Menu = () => {

  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    const feachProfile = async () => {
      try {

        const response = await axios.get(`${process.env.REACT_APP_HOST_URL}/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        setProfile(response.data);
      } catch (e) {
        console.log("Profile: ", e.response?.data || e.message);
      }
    }
    feachProfile();
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = async () => {
    setIsProfileDropdownOpen((prev) => !prev);

    // if (!profile) {
    //   try {
    //     const token = localStorage.getItem("token");

    //     const response = await axios.get(`${process.env.REACT_APP_HOST_URL}/profile`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       }
    //     });

    //     // console.log("profile:", response.data);
    //     setProfile(response.data);
    //   }
    //   catch (e) {
    //     console.log("Profile:", e.response?.data || e.message);
    //   }
    // }
  };

  const handleLogout = async () => {
    localStorage.removeItem("token");
    setProfile(null);
    setIsProfileDropdownOpen(false)
    // window.location.href = "http://localhost:3000/login";

    console.log("TOKEN AFTER LOGOUT:", localStorage.getItem("token"));
  };

  const handleLogin = () => {
    // localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/login";
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logoIMG" />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/"
              onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders"
              onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Order</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings"
              onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions"
              onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds"
              onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps"
              onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        {profile ? (
          <div className="profile d-flex align-items-center" onClick={handleProfileClick}>
            <div className="avatar"><i className="fa-solid fa-circle-user fs-2"></i></div>
            <div>
              <p className="username">{profile?.name}</p>
            </div>
          </div>
        ) : (
          <button type="button" className="logout-btn" onClick={handleLogin}>
            Login
          </button>
        )}

        {isProfileDropdownOpen && (
          <div className="profile-popup">
            <div >
              <p>Name : {profile?.name}</p>
              <p>Email : {profile?.email}</p>
              <p>Account Status : Active</p>
              <button type="button" className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
              <button
                className="close-btn"
                onClick={(e) => { e.stopPropagation(); setIsProfileDropdownOpen(false) }}
              >×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
