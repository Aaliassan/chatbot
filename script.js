function talk(){
    var know = {
        "Who are you" : "Hello, I'm AALI",
        "How are you" : "Good :)",
        "What can i do for you" : "Be with me frvr",
        "Ok" : "Thank you so much",
        "Bye" : "ok bye",
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