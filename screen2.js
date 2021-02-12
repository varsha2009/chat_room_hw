var firebaseConfig = {
  apiKey: "AIzaSyC4lKcjwp3D_zZZvNuXvsU_s7xkJ3X8-FY",
  authDomain: "kwitter-hw-2.firebaseapp.com",
  databaseURL: "https://kwitter-hw-2-default-rtdb.firebaseio.com",
  projectId: "kwitter-hw-2",
  storageBucket: "kwitter-hw-2.appspot.com",
  messagingSenderId: "340229070308",
  appId: "1:340229070308:web:d07945cdb92a8af7dcbbf1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log(Room_names);
   var row = "<div id='"+Room_names+"' class='room_name' onclick='redirectToRoomname(this.id)'>"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}

getData();

var getName = localStorage.getItem("loginName");
document.getElementById("welcomeTag").innerHTML = "Welcome " + getName;

function redirectToRoomname(){
  window.location = "screen3.html"
}

function add_user(){
      console.log("inside add room")
      var room_name = document.getElementById("add_room_input").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "add room name"
     });
      localStorage.setItem("Room_name",room_name);
      window.location = "screen3.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "screen1.html";
}
