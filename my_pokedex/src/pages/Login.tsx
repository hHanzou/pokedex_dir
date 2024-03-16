import React from "react";
import loginMethod from "../controller/login";

const LoginPage: React.FC = ({}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const values: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      values[key] = value as string;
    });
    console.log(values);
    loginMethod(values);
  };
  return (
    <main>
      <div className="div-link">
        <a href="/register">register</a>
      </div>
      <div className="reglog-container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>email:</label>
            <input type="text" name="email" id="email" />
          </div>
          <div>
            <label>password:</label>
            <input type="text" name="password" id="password" />
          </div>
          <div>
            <button type="submit">login</button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;
