import "../App.css";

function Register() {
  return (
    <div>
      <div>
        <div className="bg-overlay1 d-flex flex-column justify-content-center align-items-center">
          <div className="login-box">
            <div className="form-div">
              <form>
                <label style={{ fontSize: "2rem", fontWeight: "bolder" }}>
                  Register
                </label>
                <div class="input-con">
                  <input
                    className="input-text"
                    type="text"
                    placeholder="Username"
                  />
                </div>
                <div class="input-con">
                  <input
                    className="input-text"
                    type="password"
                    placeholder="Password"
                  />
                </div>
                <div class="input-con">
                  <input
                    className="input-text"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </div>
                <div class="input-con">
                  <input
                    style={{ width: "85%" }}
                    className="btn btn-success"
                    type="submit"
                    placeholder="Password"
                    value="Login"
                  />
                </div>
              </form>
              <p style={{ fontSize: "1rem" }}>
                Already have and account?{" "}
                <span>
                  <a href="/register">Login</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
