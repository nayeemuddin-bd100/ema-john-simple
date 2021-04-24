import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFrameWork = () => {
  //when 'Firebase app name [DEFAULT]' error happend, then it would be fixed by using this condition as below
  //     if (firebase.app.length === 0) {
  //         firebase.initializeApp(firebaseConfig);
  //    }
  firebase.initializeApp(firebaseConfig);
};

export const handleEmailSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((results) => {
      const { displayName, email, photoURL } = results.user;
      const sighInUser = {
        signIn: true,
        name: displayName,
        email: email,
        photoURL: photoURL,
      };
      return sighInUser;
    })
    .catch((error) => {
      
      // var errorCode = error.code;
      // var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      // ...
    });
};

export const handleFbSignIn = () => {
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  return firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      const { displayName, email, photoURL } = result.user;
      const sighInUser = {
        signIn: true,
        name: displayName,
        email: email,
        photoURL: photoURL,
      };
      return sighInUser;
    })
    .catch((error) => {
      console.log(error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;

      // ...
    });
};

export const handleFbSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      const signOutUser = {
        signIn: false,
        name: "",
        email: "",
        passsword: "",
        photoURL: "",
        error: "",
        success: false,
      };
      return signOutUser;
    })
    .catch((error) => {
      // An error happened.
      console.log("Sign-out failed" + error);
    });
};

export const handleEmailSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      const signOutUser = {
        signIn: false,
        name: "",
        email: "",
        passsword: "",
        photoURL: "",
        error: "",
        success: false,
      };
      return signOutUser;
    });
};

