//domCollapse script from http://www.onlinetools.org/tools/domcollapse.php

function domCollapse(which){
if (document.getElementById && document.createTextNode){
if (which=="dispall") {domCollapseAll(1);}
else if (which=="hideall") {domCollapseAll(0);}
else {
m=document.getElementById("menu");
trig=m.getElementsByTagName("div").item(which).style.display;
t=m.getElementsByTagName("h2").item(which);
h=t.getElementsByTagName("a").item(0).firstChild;
if (trig=="block") trig="none";
else if (trig=="" || trig=="none") trig="block";
m.getElementsByTagName("div").item(which).style.display=trig;
}}} 

function domCollapseAll(show){
if (document.getElementById && document.createTextNode){
m=document.getElementById("menu");
for (i=0;i<m.getElementsByTagName("div").length;i++){
t=m.getElementsByTagName("h2").item(i);
h=t.getElementsByTagName("a").item(0).firstChild;
if (show==1){
m.getElementsByTagName("div").item(i).style.display="block";
}
else {
m.getElementsByTagName("div").item(i).style.display="none";
}}}}

if (document.getElementById && document.createTextNode){
document.write('<style type="text/css">#menu div,#nav{display:none;}#button{display:block;}</style>')
}

//JAR install script from http://texturizer.net/phoenix/

function installTheme() {
var remote = document.getElementById('url');
var file = "";

file = remote.value;

InstallTrigger.installChrome(InstallTrigger.SKIN, file, getName(file));
}


function getName(raw) {
try {
var nojar = raw.split(".");
if ( nojar.length > 1 ) {

var num = nojar.length - 2;
var slash  = nojar[num].lastIndexOf("/") + 1;
var backslash = nojar[num].lastIndexOf("\\") + 1;
var start = ( slash > backslash ) ? slash : backslash;
return unescape(nojar[num].substr( start ));
}
} catch(e) {}
return "Misc. Theme";
}

function installThemeNow(file) {

InstallTrigger.installChrome(InstallTrigger.SKIN, file, getName(file));
return true;
}