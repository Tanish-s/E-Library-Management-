var mainApp = {};
(function () {
  var firebase = app_fireBase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      uid = user.uid;
      // User is signed in.
    } else {
      //redirect to login page
      uid = null;
      window.location.replace("index.html");
    }
  });
  function logOut() {
    firebase.auth().signOut();
  }
  mainApp.logOut = logOut;
})();
