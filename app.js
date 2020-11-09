// 1. function invisible(){
//     document.getElementById('para').style.visibility="hidden"
// }
//2.  function ReplaceCity()
// {
//     var x= document.getElementById("ThisOne")
      
//      x.innerHTML="sydney"
// }

// function ADD(){
   
//     var tag1 = document.createElement("p");
//    var textCity = document.createTextNode("newyork");
//    tag1.appendChild(textCity);
//    var element1 = document.getElementById("city");
//    element1.appendChild(tag1);

//     var tag2 = document.createElement("p")
//     var textCountry = document.createTextNode("USA");
//     tag2.appendChild(textCountry);
//     var element2 = document.getElementById("country");
//     element2.appendChild(tag2);
// }

// function gfg_Run() { 
//     document.addEventListener('contextmenu',(e) => e.preventDefault()); 
   
// }          
function validation() {
    var x = document.forms["Form"]["name"].value;
    var y = document.forms["Form"]["age"].value;
    var z = document.forms["Form"]["cnic"].value;
    if (x == "" && y=="" && z=="") {
      alert(" must be filled out");
      return false;
    }
    else{
        alert("good")
    }
  }