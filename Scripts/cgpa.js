 // Event listeners
form.addEventListener('submit', function(e) { 
  e.preventDefault();
});

 
var i=1;


function myfunction() {

var gpaf=0 , crx =0;

let menu = document.getElementById('replace');
let children = menu.children;

var batch= parseFloat(document.getElementById("batch").value);
var branch= document.getElementById("branch").value;

var regnumber = document.getElementById("fname").value;

var path = "./result/rank/"+batch+"_"+branch+"_"+"rank.json";
if(i >1)
{
  var myobj = document.getElementById("gpae2");
  myobj.remove();
  i--; 
}
var h = document.getElementById("gap");
var htmlf = '<div id="gpae2" name="gapen">Rank - CGPA</div>';
h.insertAdjacentHTML("afterend", htmlf);
i++;

$.getJSON(path,function(data){
  var a = data[regnumber][0];
  var b = data[regnumber][1];
  var c = data[regnumber][2];
  document.getElementById("gpae").innerHTML=b;
  document.getElementById("gpae2").innerHTML= a +" - "+c;
});




 
}