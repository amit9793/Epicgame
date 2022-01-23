import "../login/login.css";
export const Login = () => {
  return (
    <>
      <main>
        <diV id="login">LOGIN</diV>
        <input type="text" id="mobile" placeholder="Enter Mobile Number" />
        <input type="text" id="pass" placeholder="Enter Password" />
        <button onclick="function1()" id="loginbutton">
          click
        </button>

        <h5 id="NEWTODEC">NEW TO DECATHIN ?</h5>
        <h5 id="NEWTODEC">CREATE AN ACCOUNT</h5>
        <h4 id="output"></h4>
      </main>
    </>
  );
};
