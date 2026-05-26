var point_clic = 0;
var lvl_Up = 2;
var lvl_Up_Cout = 10;
var lvl = 1;
var nb_usine = 0;
var point_usine = 1;
var usine_cout = 25;
var usine_lvl_cout = 50;

function AugmenteScore()
{
   point_clic=point_clic + lvl;
   document.getElementById("Score").innerHTML = point_clic +" années lumières parcourus";
}

function Amélioration_du_clic ()
{
	if (point_clic >= lvl_Up_Cout) {
	  point_clic=point_clic - lvl_Up_Cout;
	  lvl_Up=lvl_Up+1;
	  lvl_Up_Cout=lvl_Up_Cout * 5;
	  lvl=lvl+1;
	  document.getElementById("LvlUp").innerHTML = "Augmentation de vitesse à "+lvl_Up +" années lumières par clic : "+lvl_Up_Cout+" années lumières";
	  document.getElementById("Lvl").innerHTML = "Vitesse " + lvl + " années lumières par clic";
	  document.getElementById("Score").innerHTML = point_clic +" années lumières parcourus";
}
}
function Enregistrer_la_partie()
{
	document.cookie = "score=" + point_clic; 
	document.cookie = "lvl=" + lvl; 
	document.cookie = "cout=" + lvl_Up_Cout;
	document.cookie = "lvl_Up=" + lvl_Up; 
	document.cookie = "nb_usine=" + nb_usine; 
	document.cookie = "point_usine=" + point_usine; 
	document.cookie = "usine_cout=" + usine_cout;
	document.cookie = "usine_lvl_cout=" + usine_lvl_cout;
}


function Recuperer_Score()
{ 
 if (getCookie("score") != "0" && getCookie("score")!= ""){
  point_clic=Number(getCookie("score"));
  document.getElementById("Score").innerHTML = point_clic +" années lumières parcourus";
 }
 if (getCookie("lvl")!= "0" && getCookie("lvl")!= ""){
	 lvl=Number(getCookie("lvl"));
	 document.getElementById("Lvl").innerHTML = "Vitesse " + lvl + " années lumières par clic";
 }
 if (getCookie("cout")!= "0" && getCookie("cout")!= ""){
  lvl_Up_Cout=Number(getCookie("cout"));
 }
 if (getCookie("lvl_Up")!= "0" && getCookie("lvl_Up")!= ""){
  lvl_Up=Number(getCookie("lvl_Up"));
  document.getElementById("LvlUp").innerHTML = "Augmentation de vitesse à "+lvl_Up +" années lumières par clic : "+lvl_Up_Cout+" années lumières";
 }
 if (getCookie("nb_usine")!= "0" && getCookie("nb_usine")!= ""){
  nb_usine=Number(getCookie("nb_usine"));
  document.getElementById("usine").innerHTML = nb_usine + " Moteurs";
 }
 if (getCookie("point_usine") != "0" && getCookie("point_usine")!= ""){
  point_usine=Number(getCookie("point_usine"));
  document.getElementById("usine_Lvl").innerHTML = "Distance parcouru par moteur chaque seconde = " + point_usine;
 }
 if (getCookie("usine_cout") != "0" && getCookie("usine_cout")!= ""){
  usine_cout=Number(getCookie("usine_cout"));
  document.getElementById("usine_cout").innerHTML = "Creer un moteur = "+ usine_cout+  " clicks";
 }
 if (getCookie("usine_lvl_cout") != "0" && getCookie("usine_lvl_cout")!= ""){
  usine_lvl_cout=Number(getCookie("usine_lvl_cout"));
  document.getElementById("usine_Lvl_cout").innerHTML = "Améliorer un moteur = "+ usine_lvl_cout+ " années lumières";
 }
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
 
 
function Creer_usine() {
	if (point_clic >= usine_cout){
	point_clic=point_clic-usine_cout;
	usine_cout=usine_cout*2;
	nb_usine = nb_usine + 1;
	document.getElementById("usine").innerHTML = nb_usine + " Moteurs";
	document.getElementById("usine_cout").innerHTML = "Creer un moteur = "+ usine_cout+  " années lumières";
	document.getElementById("Score").innerHTML = point_clic +" années lumières parcourus";
}
}

function Amélioration_usine() {
	if (point_clic >= usine_lvl_cout) {
	point_clic=point_clic-usine_lvl_cout;
	usine_lvl_cout=usine_lvl_cout * 2;
	point_usine = point_usine * 5;
	document.getElementById("Score").innerHTML = point_clic +" années lumières parcourus";
	document.getElementById("usine_Lvl").innerHTML = "Distance parcouru par moteur chaque seconde = " + point_usine;
	document.getElementById("usine_Lvl_cout").innerHTML = "Améliorer un moteur = "+ usine_lvl_cout +" années lumières";
}
}

function usine_en_marche() {
	point_clic=point_clic + (nb_usine * point_usine);
	document.getElementById("Score").innerHTML = point_clic +" années lumières parcourus";
}
var usine_var=setInterval(usine_en_marche, 1000);

function arrète_usine() {
	clearInterval(usine_var);
}

function openTab(tabname) {
  var i;
  var x = document.getElementsByClassName("tabs");
  var tablinks;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  document.getElementById(tabname).style.display = "block";
}
}					