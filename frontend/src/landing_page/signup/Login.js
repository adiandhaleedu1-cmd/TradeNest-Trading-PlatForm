import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // const [isAgreed, setIsAgreed] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // if (!isAgreed) {
        //     alert("Please agree to Terms & Conditions");
        //     return;
        // }

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_HOST_URL}/login`,
                formData,
            );
            console.log(response.data);

            if (response.status === 200 && response.data.token) {
                localStorage.setItem("token", response.data.token);
                window.location.href = `http://localhost:3001?token=${response.data.token}`;
            }

        } catch (e) {
            console.log(e.response?.data);
            if (e.response) {
                alert(e.response.data.message);
            } else {
                alert("Something went wrong. Please try again.")
            }
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    return (
        <section className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 p-5">
                    <h4>Login Now</h4>
                    <p>Or track your existing application</p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* <div className="mb-3">
                    <label htmlFor="inputName" className="form-label">
                        Enter Your Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputName"
                        name="name"
                        // value={formData.name}
                        // onChange={handleChange}
                        required
                    />
                </div> */}

                        <div className="mb-3">
                            <label htmlFor="inputPassword" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword"
                                name="password"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="check"
                                checked={isAgreed}
                                onChange={(e) => setIsAgreed(e.target.checked)}
                            />
                            <label className="form-check-label" htmlFor="check">
                                I agree to *Terms & Conditions
                            </label>
                        </div> */}

                        <button type="submit" className="btn btn-primary px-5">
                            Login
                        </button>
                        <div className="pt-3">
                            <p> Don't have an account?{" "}
                                <Link to="/signup">Signup here</Link></p>
                        </div>
                    </form>
                </div>
                <div className="col-3"></div>
            </div>
        </section>
    );
}