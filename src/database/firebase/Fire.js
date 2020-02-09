import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBNf7UtdTwIKT2GXSF9KcmI3Nmzb3oIOXM",
    authDomain: "hackathon-a3f1d.firebaseapp.com",
    databaseURL: "https://hackathon-a3f1d.firebaseio.com",
    projectId: "hackathon-a3f1d",
    storageBucket: "hackathon-a3f1d.appspot.com",
    messagingSenderId: "1043812226615",
    appId: "1:1043812226615:web:993759e0a4403769ef11b2",
    measurementId: "G-JGF0T96SL0"
  };

  
  // Initialize Firebase
  const fire =  firebase.initializeApp(firebaseConfig);

  export default fire;