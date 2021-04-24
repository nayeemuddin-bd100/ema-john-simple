import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { userContext } from "../../App";
import { handleEmailSignIn, handleEmailSignOut, handleFbSignIn, handleFbSignOut, initializeLoginFrameWork } from "./LoginManager";

initializeLoginFrameWork();

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [info, setInfo] = useState({
    signIn: false,
    name: "",
    email: "",
    passsword: "",
    photoURL: "",
    error: "",
    success: false,
  });

  const [signOutMsg, setSignOutMsg] = useState("");
  const [logedInUser, setLogedInUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  // login with facebook
  const fbLogin = () => {
    handleFbSignIn().then((res) => {
      setInfo(res);
      setLogedInUser(res);
    });
  };

  //logout Facebook
  const fbLogOut = () => {
    handleFbSignOut().then((res) => {
      setInfo(res);
      setLogedInUser(res);
      history.replace(from);
    });
  };

  // login with Email

  const emailSignIn = () => {
    handleEmailSignIn().then((res) => {
      setInfo(res);
      setLogedInUser(res);
      history.replace(from);
    });
  };
  //logout Email

  const emailLogOut = () => {
    handleEmailSignOut().then((res) => {
      setInfo(res);
      setLogedInUser(res);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newUser && info.email && info.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(info.email, info.password)
        .then((res) => {
          const newUserInfo = { ...info };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setInfo(newUserInfo);
           setLogedInUser(newUserInfo);
           history.replace(from);

          updateUserName(info.name);
        })
        .catch((error) => {
          let newUserInfo = { ...info };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setInfo(newUserInfo);
        });
    }
    if (!newUser && info.email && info.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(info.email, info.password)
        .then((res) => {
          const newUserInfo = { ...info };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setInfo(newUserInfo);

          setLogedInUser(newUserInfo);
          history.replace(from);

          console.log("Sign User  " + res);
        })
        .catch((error) => {
          let newUserInfo = { ...info };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setInfo(newUserInfo);
        });
    }
  };


const updateUserName = (name) => {
  var user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: name,
    })
    .then(function () {
      console.log("Name Updated Succesfully");
    })
    .catch(function (error) {
      console.log(error);
    });
};






  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      isFieldValid = e.target.value.length > 5;
    }
    if (isFieldValid) {
      const newUserInfo = { ...info };
      newUserInfo[e.target.name] = e.target.value;
      setInfo(newUserInfo);

      // It can refactor this way too!
      // setInfo({[e.target.name]: e.target.value});
    }
  };

  //updateUserName

  const btnStyles = { padding: "10px", marginTop: "50px" };
  return (
    <div className="App">
      {/*
       * login with email popup and logout
       */}
      <h3 className="display-5 lead" style={{ marginTop: "30px" }}>
        Sign in With Google/Facebook
      </h3>
      {info.signIn ? (
        <button
          class="btn btn-outline-warning mx-3"
          onClick={emailLogOut}
          style={btnStyles}
        >
          Sign Out
        </button>
      ) : (
        <button
          class="btn btn-outline-warning mx-3"
          onClick={emailSignIn}
          style={btnStyles}
        >
         Sign In With Google
        </button>
        )}
     

      {/***Login and logout with Facebook******/}
      {info.signIn ? (
        <button
          class="btn btn-outline-primary"
          onClick={fbLogOut}
          style={btnStyles}
        >
          Sign Out
        </button>
      ) : (
        <button
          class="btn btn-outline-primary"
          onClick={fbLogin}
          style={btnStyles}
        >
        Sign In With Facebook
        </button>
      )}

      {/* Information Ui */}

      {info.signIn ? (
        <div>
          <h2> Name: {info.name}</h2>
          <p>Email: {info.email}</p>
          <img src={`${info.photoURL}`} alt="emails" />
        </div>
      ) : (
        <p> {signOutMsg} </p>
      )}

      {/* ****************** */}

      {/* Sign Up with form  */}
      <h2 className="lead">Our Own Authentication</h2>

      {info.error && <p style={{ color: "red" }}>{info.error}</p>}
      {info.success && (
        <p style={{ color: "green" }}>
          {newUser ? "Created" : "Login"} successfully
        </p>
      )}

      <div style={{ width: "400px", margin: "0 auto" }}>
        <input
          type="checkbox"
          onChange={() => setNewUser(!newUser)}
          name="newUser"
          id=""
        />
        <label className="lead mx-2 my-3" htmlFor="newUser">
          {" "}
          New User Sign Up{" "}
        </label>

        <form onSubmit={handleSubmit}>
          {newUser && (
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Your name"
              onBlur={handleBlur}
            />
          )}
          <br />
          <input
            className="form-control "
            type="text"
            name="email"
            placeholder="Your Email"
            onBlur={handleBlur}
            required
          />
          <br />
          <input
            className="form-control"
            type="password"
            onBlur={handleBlur}
            name="password"
            placeholder="Your Password"
            required
          />
          <br />
          <input
            className="btn btn-success mt-1"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
