*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  height: 100vh;
  width: 100vw;
  background: linear-gradient(78deg, #000109 1%,#04093B);
}

header,footer, .center
{
display: flex;
align-items: center;
justify-content: center;
  
  
}


header{
  background: BLACK;
  color: white;

  height: 4%;
  width: 100%;
}
nav{
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  padding: 2px;
  background: grey;
}
ul{
  background: black;
> li{
  font-size: 17px;
  font-family: serif;
  text-transform:uppercase;
  border: 1px solid white;
  padding: 1px;

}
}
   li:hover{
     background: white;
     color:grey;
     transition: 1.5s;
}
li#tudo{
  display: none;
}



.editor{
  width: 100%;
  height: 93% ;
}
.web{display: inline-block;
position: relative;
background: linear-gradient(78deg, #FBFCFF 1%, #BEBFC5,#88888A);
padding: 10px;
  width: 100%;
  height: 38%;
}
div{
  position: relative;
}
#text{
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: .1;
  transform: translate(-50%,-50%)
}
.code{
  width: 100%;
  height: 60vh;
}
.css_js{
  display:flex;
  flex-direction: row;
  
}
textarea{
  border-radius: 25px 0 ;
  word-break: break-all;
  overflow-y: none;
  outline: none;
  color: black;
  padding: 5px ;
  font-weight: 700;
  font-size: 18px;
  text-align: start;
  word-wrap: wrap;
}
 .css, .js{
   border: 1px solid black;
  position: relative;
  width: 50%;
  height: 28vh;
}
 .css > #css , .js > #js{
  position: relative;
  
  width: 100%;
  height: 100%;
}
#html{
  width: 100%;
  height: 29vh;
}
footer{
  color: white;
  position: relative;
  text-align: center;
  height: 2.5%;
  border:1px  black dotted;
}





.a1{
  width: 100%;
  height: 50%;
}
.text{
  width: 100%;
  height: 50%;
}
#html{
  width: 100%;
}

#css{
  width: 48.5%;
}
#js{
  width: 48.5%;
}



/* modo 2*/


textarea{
  border-radius: 25px 0 ;
  word-break: break-all;
  overflow-y: none;
  outline: none;
  color: black;
  padding: 5px ;
  font-weight: 700;
  font-size: 18px;
  text-align: start;
  word-wrap: wrap;
}
 .css.modo2, .js.modo2{
   border: 1px solid black;
  position: relative;
  width: 100%;
  height: 28vh;
}
 .css > #css , .js > #js{
  position: relative;
  
  width: 100%;
  height: 100%;
}
#html.modo2{
  width: 100%;
  height: 57vh;
}
