var JUNGLE_SERVICE = (function () {
  document.addEventListener("DOMContentLoaded", function () {
    // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥 // // The Firebase SDK is initialized and available here! // // firebase.auth().onAuthStateChanged(user => {}); // firebase // .database() // .ref('/contacts') // .on('value', snapshot => {}); // firebase.firestore().collection('contacts'); // firebase.messaging().requestPermission().then(() => { }); // firebase.storage().ref('/path/to/ref').getDownloadURL().then(() => { }); // // // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    try {
      let app = firebase.app();
      let features = ["auth", "database", "messaging", "storage"].filter(
        (feature) => typeof app[feature] === "function"
      );
      document.getElementById("load");
    } catch (e) {
      console.error(e);
    }
  });

  var _db;

  var _initFirebase = function () {
    firebase
      .auth()
      .signInAnonymously()
      .then(function (result) {
        console.log("connected");
        _db = firebase.firestore();
        _addContact();
      });
  };

  return {
    initFirebase: _initFirebase,
  };
})();
