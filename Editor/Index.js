let site = document.querySelector(".web1");
function web() {
      let javascr = (document.querySelector("script.js").innerHTML =
            "function all(){alert('hackeado')}");

      html = document.querySelector("#htmlt").value;
      css = document.querySelector("#csst").value;
      js = document.querySelector("#js").value;
      let scriipt = document.createElement("script");

      /*
htmltx = document.createTextNode(html);
csstx = document.createTextNode(css.value);
jstx = document.createTextNode(js);

scriipt.appendChild(jstx);
site.appendChild(scriipt);
scriipt.src= js;
scriipt.async = true;
*/

      site.innerHTML =
            '<!DOCTYPE html> <html lang="pt-br"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title></head><body>' +
            html +
            " <style> .web1 { >" +
            css +
            " }</style> </body> </html>";
      //  javascr.innerHTML = ;
}

um = document.querySelector("#um");
tudo = document.querySelector("#tudo");
code = document.querySelector("div.code");
nav = document.querySelector("nav#modo2");
nav.style.background = "black";

um.addEventListener("click", function () {
      um.style.display = "none";
      tudo.style.display = "block";
      nav.style.display = "flex";
      code.classList.add("modo2");
});

tudo.addEventListener("click", function () {
      tudo.style.display = "none";
      um.style.display = "block";

      code.classList.remove("modo2");
      nav.style.display = "none";
});


let button = (tipo) => {
      let html5 =document.querySelector(`#html`);
      let css3 = document.querySelector(`#css`);
      let javascript3 = document.querySelector(`#javascript`);
  
      btm = document.querySelector(`#${tipo}`);
      
btm.style.color = "blue";
      if(tipo == "javascript") {
        
        btm.style.display="block";
            alert("acertou miserav");
            
      }
      else{
            alert('nao e javascript');
      }
      if(tipo == "html") {
        
        btm.style.display="block";
            alert("acertou miserav");
            
      }
      else{
            alert('nao e html');
      }
      
      if(tipo == "css") {
        
        btm.style.display="block";
            alert("acertou miserav");
            
      }
      else{
            alert('nao e css');
      }
      
  /*
      if (button("css")) {
            btm.style.display = "none";
      }
    
 if (button('css')) {
       alert("acertou miserav");
 }

//   else if(button("html")) {
//         alert("html");
//   }

// else if(button("javascript")) {
//         alert("js");
//   }*/
};
