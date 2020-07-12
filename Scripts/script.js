 // Event listeners
form.addEventListener('submit', function(e) { 
  e.preventDefault();
});

 
var i=1;

function addsub (){

  html= ' <div class="row justify-content-center"><div class="col-4"><select class="select-css" id="%theory%"><option value="-1">Grade</option><option value="10">S</option><option value="9">A</option><option value="8">B</option><option value="7">C</option><option value="6">D</option><option value="5">E</option><option value="0">F</option><option value="0">I</option><option value="0">MP</option></select></div><div class="col-4"><select class="select-css" id="%credit%"><option value="-1">Credits</option><option value="1">1 credit</option><option value="1.5">1.5 credits</option><option value="2">2 credits</option><option value="2.5">2.5 credits</option><option value="3" selected>3 credits</option><option value="3.5">3.5 credits</option><option value="4">4 credits</option></select></div></div>';
  html1 = html.replace('%theory%',"th"+i);
  htmlf = html1.replace('%credit%',"cr"+i);
  var h = document.getElementById("replace");
  
  h.insertAdjacentHTML("beforeend", htmlf);
  i=i+1;
 
}

function myfunction() {

var gpaf=0 , crx =0;

let menu = document.getElementById('replace');
let children = menu.children;

for(j=1;j<=children.length;j++)
{
 
  var g= parseFloat(document.getElementById("th"+j).value);
  var cr= parseFloat(document.getElementById("cr"+j).value);
  crx=crx+cr;
  gpaf=gpaf + (g*cr);
}

  var gpax=gpaf/crx;
  document.getElementById("gpae").innerHTML=gpax.toFixed(2);
 
}