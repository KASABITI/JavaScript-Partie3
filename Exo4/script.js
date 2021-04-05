function getSamePass(){
    var inputVall=document.getElementById('password1').value;
    var inputVal1=document.getElementById ('password2').value
if(inputVall===inputVal1){document.getElementById("password1").style.border="4px solid green";
document.getElementById("password2").style.border="4px solid green";
}
 else{
    document.getElementById("password1").style.border="4px solid red";
    document.getElementById("password2").style.border="4px solid red";
}
}
