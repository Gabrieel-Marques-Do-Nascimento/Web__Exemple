corpo = document.body;
corpo.style.backgroundColor = "grey"; // em ves de  espaco ou - sinal de menos procima letra cera maiuscula
//h1
h1 = document.createElement("h1");
h1_t = document.createTextNode("java script");
h1.appendChild(h1_t);
corpo.appendChild(h1);

textarea = document.createElement("textarea");
textarea.setAttribute("placeholder", "code");
textarea.style.width = "80%";
corpo.appendChild(textarea);





scripte = document.createElement('script');
corpo.appendChild(scripte);




butao = document.createElement("button");
butao_t = document.createTextNode("ENTER");
butao.style.padding="8px";

butao.appendChild(butao_t);
corpo.appendChild(butao);
butao.addEventListener("click",function(){
 scripte.innerHTML+= textarea.value;
});























