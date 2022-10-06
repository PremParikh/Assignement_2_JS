// WEB303 Assignment 2

//Name: Prem Parikh
//Student No :W0794661

$("button").click(function(){

    $("#convert").load("convert.html", function(_responseTxt, statusTxt, xhr)
    {
    
    if(statusTxt == "success")
    
    alert("External content loaded successfully!");
    
    if(statusTxt == "error")
    
    alert("Error: " + xhr.status + ": " + xhr.statusText);
    
    });
    
    });