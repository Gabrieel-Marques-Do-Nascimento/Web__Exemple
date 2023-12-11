// codigos nos textarea no paragrafo  -------------------------------------------------------------------------------------------------------------------
corpo = document.body;
texthtml = document.querySelector("textarea#htmlt");
textcss = document.querySelector("textarea#csst");
textjs = document.querySelector("textarea#js");
web1 = document.querySelector(".web1");


// modo 1 e modo 2  button ----------------------------------------------------------------------------------------------------------------------------------------

// buttons  -----------------------------------------------------------------------------------------------------------------------------------------------
divhtml = document.querySelector(".html_");
divcss = document.querySelector(".css");
divjs = document.querySelector(".js");

var x =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

function button(tipo) {
      if (x > 992) {
            divjs.style.display = "block";
            divcss.style.display = "block";

            divhtml.style.display = "block";
      }

      if (x < 768) {
            divcss.style.display = "none";
            divjs.style.display = "none";

            divhtml.style.display = "block";

            if (tipo == "html") {
                  divcss.style.display = "none";
                  divjs.style.display = "none";

                  divhtml.style.display = "block";
            } else if (tipo == "css") {
                  divcss.style.display = "block";
                  divjs.style.display = "none";

                  divhtml.style.display = "none";
            } else if (tipo == "javascript") {
                  divjs.style.display = "block";
                  divcss.style.display = "none";

                  divhtml.style.display = "none";
            }
      }

      if (x > 768 && x < 992) {
            divcss.style.display = "block";
            divjs.style.display = "none";
            divhtml.style.display = "block";

            if (tipo == "css") {
                  divcss.style.display = "block";
                  divjs.style.display = "none";

                  divhtml.style.display = "block";
            } else if (tipo == "javascript") {
                  divjs.style.display = "block";
                  divcss.style.display = "none";

                  divhtml.style.display = "block";
            }
      }
}
//----------------------------------------------------------------------------------------------------------------------------------------------

// window.onresize = function () {
//       var x =
//             window.innerWidth ||
//             document.documentElement.clientWidth ||
//             document.body.clientWidth;
//       if (w < 800) {
//             //executar o código aqui dentro
//       }
// };

// ------------------------------- RECARREGAR PAGINA----------------------------------

// divhtmlload = document.querySelector(".html_");
// divcssload = document.querySelector(".css");
// divjsload = document.querySelector(".js");

largura =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

function recarregar() {
      history.go();

}
