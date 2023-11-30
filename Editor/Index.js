
// codigos nos textarea no paragrafo  -------------------------------------------------------------------------------------------------------------------

let site = document.querySelector(".web1");
function web() {
 
      html = document.querySelector("#htmlt").value;
      css = document.querySelector("#csst").value;
      js = document.querySelector("textarea#js").value;
    
            let scriipt = document.createElement("script");
            
        document.body.appendChild(scriipt);
      scriipt.innerHTML=js;

      site.innerHTML =
            '<!DOCTYPE html> <html lang="pt-br"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Document</title></head><body>' +
            html +
            " <style> .web1 { >" +
            css +
            " }</style> </body> </html>";


  
}




// modo 1 e modo 2 ----------------------------------------------------------------------------------------------------------------------------------------


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

// todo textearea ---------
      html5.style.display="block";
      css3.style.display="block";
  javascript3.style.display="block";

});











// buttons  -----------------------------------------------------------------------------------------------------------------------------------------------

  let html5 =document.querySelector(`.html_`);
      let css3 = document.querySelector(`.css`);
      let javascript3 = document.querySelector(`div.js`);
let button = (tipo) => {
    
  
      btm = document.querySelector(`#${tipo}`);
      
//btm.style.color = "blue";
      if(tipo == "javascript") {
        
           
            html5.style.display="none";
            css3.style.display="none";
        javascript3.style.display="block";
         //   alert("javascript");
            
      }
      else{
           
   
      }
      if(tipo == "html") {
        
            javascript3.style.display="none";
            html5.style.display="block";
            css3.style.display="none";
       
          //  alert("html");
            
      }
      else{
          
  
      }
      
      if(tipo == "css") {
        
            javascript3.style.display="none";
        html5.style.display="none";
        css3.style.display="block";
          //  alert("css");
            
      }
      else{
            
 
      }
      
};
