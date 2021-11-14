
const firebaseConfig = {
      apiKey: "AIzaSyA91tMIa37hC1yWVzAJZ6a9kOU3s2sf5vI",
      authDomain: "projectletschat-405e2.firebaseapp.com",
      databaseURL: "https://projectletschat-405e2-default-rtdb.firebaseio.com",
      projectId: "projectletschat-405e2",
      storageBucket: "projectletschat-405e2.appspot.com",
      messagingSenderId: "777773710889",
      appId: "1:777773710889:web:96bf288a9c9f4acaaae638"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
