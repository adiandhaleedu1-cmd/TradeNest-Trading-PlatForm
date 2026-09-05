import React from "react";

export default function SignupForm() {
    return (
        <section className="container p-5">
            <div className="row align-items-center">
                <div className="col-6 p-5">
                    <img src="/media/images/signup.png" alt="signup image" className="img-fluid" />
                </div>

                <div className="col-6 p-5">
                    <h4>Signup Now</h4>
                    <p>Or track your existing application</p>
                    <form>
                        <div class="mb-3">
                            <label for="InputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" required />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>

                        <div class="mb-3">
                            <label for="inputName" class="form-label">Enter Your Name</label>
                            <input type="text" class="form-control" id="inputName" required />
                        </div>

                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" required />
                        </div>

                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">I agree to *Terms & Conditions</label>
                        </div>

                        <button type="submit" class="btn btn-primary px-5">SingUp</button>
                    </form>
                </div>
            </div>
        </section>
    )
}