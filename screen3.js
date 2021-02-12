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

  user_name = localStorage.getItem("loginName");
  room_name = localStorage.getItem("Room_name");

function send1(){
  console.log(room_name);
  console.log(user_name);
    var msg = document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
      user_name : user_name,
      message : msg,
      like : 0
  });
     document.getElementById("msg").value = "";
}
  console.log(user_name,room_name);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;

 console.log("message id = "+firebase_message_id);
 console.log("msg data : "+message_data);
 var name = message_data['user_name'];
 var message = message_data['message'];
 var like = message_data['like'];

 var n = "<h4>"+name+"<img src='user_icon.png' class='user_tick'></h4>";
 var m = "<h4 class='message_h4'>"+message+"</h4>";
 var l = "<button value="+like+" id='"+firebase_message_id+"' class='btn btn-warning' onclick='update_like(this.id)'><span class='glyphicon glyphicon-thumbs-up'></span>like : "+like+"</button><hr>";
 var row = n+m+l;
 document.getElementById("output").innerHTML += row;
 } });  }); }
 getData();
 
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "screen1.html";
}
function update_like(message_id){
  var button_id = message_id;
  var likes = document.getElementById(button_id).value;
  var update_likes = Number(likes) + 1;
  firebase.database().ref(room_name).child(button_id).update({
        like : update_likes 
  });
}
