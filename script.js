function myFunction() {
document.getElementById("myDropdown").classlist.toggle ("show");
}


  function fashion() {
  var girly=document.getElementById("girl").selected;
  var tomboy=document.getElementById("tom").selected;
  var sporty=document.getElementById("sport").selected;
  var casual=document.getElementById("cas").selected;


if (girly==true) {
  document.location.href="girly.html"
}
else if (tomboy==true){
  document.location.href="tomboy.html"
}

else if (sporty==true){
  document.location.href="sporty.html"
}

else if (casual==true){
  document.location.href="casual.html"
}
}
