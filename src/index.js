import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

function App() {
  const [currentForm, setCurrentForm] = useState("Login");
  const loginLinkText = ["در دینویکس عضو نیستید؟", "ثبت نام کنید"];
  const signupLinkText = ["در دینویکس عضو هستید؟", "وارد شوید"];

  return (
    <div className="background">
      <div className="flex-container">
        <div className="nav">
          <div />
          <a>خانه</a>
          <a>بازارها</a>
          <a>قوانین</a>
          <a>بلاگ</a>
          <a>درباره ما</a>
          <a>سوالات متداول</a>
        </div>

        <div className="form">
          <p className="top-text">
            {currentForm == "Login" ? "ورود" : "ثبت نام"}
          </p>

          <hr />

          <input type="text" className="text-input" placeholder="ایمیل" />
          <input type="text" className="text-input" placeholder="رمز عبور" />

          {currentForm == "Login" ? (
            <p className="forgotPassowrd">فراموشی رمز عبور</p>
          ) : (
            <div className="confirmation">
              <input type="checkbox" />
              قوانین و شرایط صرافی دینویکس را مطالعه کرده و می‌پذیرم.
            </div>
          )}

          <button
            onClick={() =>
              setCurrentForm(currentForm == "Login" ? "Signup" : "Login")
            }
          >
            {currentForm == "Login" ? "ورود" : "ثبت نام"}
          </button>

          <div className="google-signup">
            <img src="./assets/google.png" height="22" width="22" />
            ثبت نام با گوگل
          </div>

          <div className="link">
            {currentForm == "Login" ? loginLinkText[0] : signupLinkText[0]}{" "}
            &nbsp;
            <a>
              {currentForm == "Login" ? loginLinkText[1] : signupLinkText[1]}
            </a>
          </div>
        </div>

        <div className="footer">
          <div />
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
