function talk(){
    var know = {
        "who are you" : "Hello, I'm AALI",
        "how are you" : "Good :)",
        "what can i do for you" : "Be with me frvr",
        "ok" : "Thank you so much",
        "bye" : "ok",
    }
    var user = document.querySelector("input").value;
    console.log(user)
    document.getElementById("chatlog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatlog").innerHTML = know[user] + "<br>" ;
    }
    else {
        document.getElementById("chatlog").innerHTML="Sorry,I didn't understand <br>" ;
    }
    
}