//require('index')
  function openCity(cityName,elmnt,color) {

    var onckick = docuent.getElementById('onckick')
    function btnover() { 
      onckick.play(); 
      } 

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(cityName).style.display = "block";
    elmnt.style.backgroundColor = color;
  
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
//submits(document.getElementById('ques').innerHTML,document.getElementById('ans1').value,document.getElementById('ans2').value,document.getElementById('ans3').value,document.getElementById('ans4').value)

  function submits(success){
document.getElementById('btntxt').innerHTML = success
var data = document.getElementById('ques').value
document.getElementById('checking').innerHTML = data

module.exports = {
question:document.getElementById('ques').value,
ans1:document.getElementById('ans1').value,
ans2:document.getElementById('ans2').value,
ans3:document.getElementById('ans3').value,
ans4:document.getElementById('ans4').value
}

  }

  function btnover(){

var ckickover = docuent.getElementById('ckickover')
function btnover() { 
  ckickover.play(); 
  } 

}