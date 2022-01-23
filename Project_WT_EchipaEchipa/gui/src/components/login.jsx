import React from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  global.userId = -1;

  async function getUser(email, password) {
    const response = await fetch(
      "http://localhost:8080/users/" + email + "/" + password
    );

    let data = await response.json();

    global.userId = data.id;

    if (response.status === 200) {
      history.push("/myFeedbacks");
    } else if (response.status === 404) {
      alert("Incorrect email or password");
    }
  }

  const Submitt = (e) => {
    e.preventDefault();
    console.log("email: ", e.target.email.value);
    console.log("password: ", e.target.password.value);
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email && password) {
      const url = "http://localhost:8080/users/" + email + "/" + password;
      const other = {
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
        method: "GET",
      };

      getUser(email, password);
      //   fetch(url).then((res) => {

      //     if (res.status === 200) {
      //       history.push("/myFeedback");
      //     } else if (res.status === 404) {
      //       alert("Incorrect email or password");
      //     }
      //   });
    } else {
      alert("Incorrect email or password");
    }
  };

  return (
    <div className="base-container">
      <div className="header">Login</div>
      <form className="form" onSubmit={Submitt}>
        <div className="content">
          <div className="formm">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email"></input>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                placeholder="password"
              ></input>
            </div>
          </div>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
      <div className="footer">
        <button
          type="button"
          className="btn2"
          onClick={() => history.push("/register")}
        >
          Create account
        </button>
      </div>
    </div>
  );
};
