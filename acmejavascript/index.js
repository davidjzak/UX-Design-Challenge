/* coded by David Zak */


window.onload = function(){
    checkWidth();
}

/* error function big screen */
function errorMessage(error){
    
    var x = document.getElementById("errors");
    x.innerHTML += error;
    
}

/* error function for small screen */
function errorMessage2(error){
    
    var x = document.getElementById("errors2");
    x.innerHTML += error;
    
}

/* check if username is valid if not send to error function*/

function checkUser( element ){

var x = document.getElementById(element).value;
if (x.length > 24 || x.length < 8){
    if(this.innerWidth > 550){
    errorMessage("username must be between 8 and 24 characters<br>")}
    else{
        errorMessage2("username must be between 8 and 24 characters<br>")
    }
    // document.getElementById(element).style.border = '2px solid red';
    $("#" + element).addClass("errorred");
    return false;
}
return true;
}

/* check if password is valid if not send to error function*/
function checkPass( element ){
    var x = document.getElementById(element).value;
    
    if (x.length > 24 || x.length < 8){
        if(this.innerWidth > 550){
        errorMessage("password must be between 8 and 24 characters<br>");
        } else{
            errorMessage2("password must be between 8 and 24 characters<br>");
        }
    
     $("#" + element).addClass("errorred");
        return false;
    }
    return true
}

/* removes error messages and red border */
function reseterr(err){
	var x = document.getElementById(err);
    x.innerHTML = "";
    $( "input" ).removeClass( "errorred" )
}

function switchbutton(str1, str2){
    
    var s = document.getElementById(str2);
    s.style.display = str1;
    
}

/* validate function for desktop form */
function validate(){
    
    /* removes  old errors before adding new ones */
    reseterr("errors");
    /* changes submit button to loading icon and back after timeout */
  switchbutton("none", "submit1");
  switchbutton("inline-block", "buttonload");
   setTimeout(function(){ switchbutton("none", "buttonload");
   switchbutton("inline-block", "submit1");}, 1000);
   

/* if there are no errors change layout to congratulations page */
if(checkUser("username") && checkPass("pass")){
    switchbutton("block", "congrats1");
    document.getElementById("rightt").style.cssFloat = "right";
    switchbutton("none", "leftt");
    
   
    // return false because true refreshes page and we wanna display congratulation
    // if there were seperate pages I would return true to submit the form
    return false;
}
// return false to stop page refresh and display errors
return false;
}

/* validate function for mobile form */
    function validate2(){
        reseterr("errors2");
        switchbutton("none", "invisadefault");
        switchbutton("inline-block", "buttonload1");
         setTimeout(function(){ switchbutton("none", "buttonload1");
         switchbutton("inline-block", "invisadefault");}, 1000);
         
      
      /* if there are no errors change layout to congratulations page */
      if(checkUser("username1") && checkPass("pass1")){
          switchbutton("block", "congrats2"); 
          switchbutton("none", "leftt");
          switchbutton("none", "invisaform");
          document.getElementById("rightt").style.height = "100vh";
          return false;}

          return  false;
}



/* Applies layout changes based on screen size that can not easily be done with css */	
function checkWidth(){
    
var width;
    width = this.innerWidth;
   if (width < 550){
       /* make logo the top element in the mobile layout */
    x = $("#rightt").detach();
			  $("body").prepend(x);
            
            /* if desktop congratulations screen is visible switch to mobile, hide form from mobile */ 
            if($("#congrats1").is(":visible")){
                
                document.getElementById("rightt").style.height = "100vh";
                document.getElementById("congrats2").style.display = "block";
                document.getElementById("congrats1").style.display = "none";
                document.getElementById("invisaform").style.display = "none";
                
     }
        }
			else{
			/* make  login div the first element in desktop view */
			 x = $("#leftt").detach();
			  $("body").prepend(x);
            
        
           /* if mobile congratulation form is showing switch to desktop */
                if(width >551){
                    if($("#congrats2").is(":visible")){
                        
                        document.getElementById("rightt").style.display = "none";
                        document.getElementById("congrats1").style.display = "block";
                        document.getElementById("congrats2").style.display = "none";
                        document.getElementById("invisaform").style.display = "none";
                        document.getElementById("rightt").style.display = "block";
                        /* makes congratulation screen show up on the correct side of the page */
                        y = $("#congrats1").detach();
			            $("body").prepend(y);
                        
    }
    }
        
    }
			
     }