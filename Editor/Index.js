



 let site = document.querySelector('.web1');
function web(){
 
  let javascr = document.querySelector('script.js').innerHTML="function all(){alert('hackeado')}";

html = document.querySelector('#html').value;
css = document.querySelector('#css').value;
js = document.querySelector('#js').value;
let scriipt = document.createElement('script');

/*
htmltx = document.createTextNode(html);
csstx = document.createTextNode(css.value);
jstx = document.createTextNode(js);

scriipt.appendChild(jstx);
site.appendChild(scriipt);
scriipt.src= js;
scriipt.async = true;
*/

  site.innerHTML = '<!DOCTYPE html> <html lang="pt-br"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title></head><body>'+html+ " <style> .web1 { >" +css +" }</style> </body> </html>";
//  javascr.innerHTML = ;
  
  
  
}


um = document.querySelector('#um');
tudo = document.querySelector('#tudo');
code = document.querySelector('div.code');
nav = document.querySelector('nav#modo2');
nav.style.background="black";
function modo_01() {
um.style.display="none";
tudo.style.display="block";
nav.style.display="flex";
code.classList.add("modo2");


}

function modo_02() {

tudo  .style.display="none";
um.style.display="block";

code.classList.remove("modo2");  nav.style.display="none";
}