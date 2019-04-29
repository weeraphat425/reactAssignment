import * as firebase from 'firebase';

//insert config from firebase
const config = {
    apiKey: "AIzaSyDYI0B1Z9F5_w4hyc2P_Fa3P6AXuHiLXw0",
    authDomain: "weeraphat-assignment1.firebaseapp.com",
    databaseURL: "https://weeraphat-assignment1.firebaseio.com",
    projectId: "weeraphat-assignment1",
    storageBucket: "weeraphat-assignment1.appspot.com",
    messagingSenderId: "794268851105"
  };
firebase.initializeApp(config);

export default firebase;