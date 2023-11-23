// modo_1 = document.querySelector('li#tudo').style.display="none";
  modo_2 = document.querySelector('li#um').style="display:block";

function modo_01(){
  
  
  
// modo_1.style="background-color:blue;";
// modo_2.style.display="block";


}





function web(){
  let site = document.querySelector('.web1');
  let javascr = document.querySelector('script#js').innerHTML="function all(){alert('hackeado')}";

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


