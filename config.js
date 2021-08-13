import * as firebase from "firebase";

var firebaseConfig = {
    // Put your database config
    apiKey: "AIzaSyAxnEyaEgUwEWjfxKnJbi5hRMAxGmsbfQo",
    authDomain: "c60-project-student-attendance.firebaseapp.com",
    databaseURL: "https://c60-project-student-attendance-default-rtdb.firebaseio.com",
    projectId: "c60-project-student-attendance",
    storageBucket: "c60-project-student-attendance.appspot.com",
    messagingSenderId: "316425965586",
    appId: "1:316425965586:web:3ede803ef6e422c2efc8cb"
  };


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();

 