import React from "react";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const history = useHistory();

  const handleReg = (e) => {
    e.preventDefault();
    console.log("email: ", e.target.email.value);
    console.log("password: ", e.target.password.value);
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (email && username && password) {
      const url = "http://localhost:8080/users";
      const other = {
        headers: {
          "content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
        method: "POST",
      };
      fetch(url, other).then((res) => {
        console.log(res);
        if (res.status === 200) {
          history.push("/login");
        }
      });
    } else {
      alert("All the fields are mandatory");
    }
  };

  return (
    <div className="base-container">
      <div className="header">Register</div>
      <form className="form" onSubmit={handleReg}>
        <div className="content">
          <div className="formm">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email"></input>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username"></input>
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
          Register
        </button>
      </form>
      <div className="footer">
        <button
          type="button"
          className="btn"
          onClick={() => history.push("/login")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
