
function next_page(){
    var user_name = document.getElementById("email_input").value;
    localStorage.setItem("loginName",user_name);
    window.location = "screen2.html"
}

