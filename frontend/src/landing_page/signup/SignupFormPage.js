import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SignupForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [isAgreed, setIsAgreed] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isAgreed) {
            alert("Please agree to Terms & Conditions");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/signup",
                formData,
            );
            console.log(response.data);
        } catch (e) {
            console.log(e.response?.data);
        }
        window.location.href = "http://localhost:3001";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <section className="container p-5">
            <div className="row align-items-center">
                <div className="col-6 p-5">
                    <img
                        src="/media/images/signup.png"
                        alt="signup image"
                        className="img-fluid"
                    />
                </div>

                <div className="col-6 p-5">
                    <h4>Signup Now</h4>
                    <p>Or track your existing application</p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label for="inputEmail" class="form-label">
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
                            <div id="emailHelp" class="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>

                        <div class="mb-3">
                            <label for="inputName" class="form-label">
                                Enter Your Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputName"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div class="mb-3">
                            <label for="inputPassword" class="form-label">
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

                        <div class="mb-3 form-check">
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
                        </div>

                        <button type="submit" className="btn btn-primary px-5">
                            SingUp
                        </button>

                        <div className="pt-3">
                            <p>Already have an account?{" "}
                                <Link to="/login">Login here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
