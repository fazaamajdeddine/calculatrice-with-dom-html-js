window.addEventListener("DOMContentLoaded",init); // star hetha 3malt bih appelle lil page html mte3i bil "domcontenloaded"
   const opts = ["*","/","+","-","9","8","7","6","5","4","3","2","1","0","."];//declaration des contenus de mon calculatrice à partir d'un tableau
   const spec=["*","/","+","-"]; //declaration de boutton mathematiques

   

///ajouter des option sur mon code html



function init(){
       document.title="calculatrice with dom";//star hetha jbedet bih title mta3 page html mte3i w 3titou esm jdid
       console.log("ready");
       const container = document.createElement("div"); //pour ajouter une div dans notre html
       container.classList.add("container");//donner un class à notre div
       container.style.maxWidth="600px";//donner un style à notre div
       container.style.margin="auto";//donner un style à notre div
       document.body.appendChild(container);//pour ajouter le div et son class à mon code html
       const output = document.createElement("input"); //pour crée un elemnt input
       output.setAttribute("type","text");//pour donner des attribut a mon element input
       output.classList.add("output");//pour donner un class 
       output.style.width="100%";////donner un style à notre div
       output.style.lineheight="50px";//donner un style à notre div
       output.style.fontsize="3em";//donner un style à notre div
       output.style.textAlign = "right";//donner un style à notre div
       container.appendChild(output);//pour ajouter la class output à mon dic container
       const main =document.createElement("div");
       main.classList.add("main");
       main.style.width="100%";
       container.appendChild(main);
      
      
      
       //ajouter les keys à mon calculatrice

       opts.forEach(function(val){
           //console.log(val);
           btnMarker(val,addOutput);

})
btnMarker("=",evaloutput);
btnMarker("c",clroutput);

function evaloutput(){
    console.log("=");
    if(output.value===""){
        output.style.border="red 1px solid";
    }else{
        output.value=eval(output.value);
    }

}
function clroutput(){
    output.value="" ;
}





function btnMarker(txt,myfunction){
    let btn=document.createElement("button");
    btn.setAttribute("type","buttom");
    btn.style.width = "23%";
    btn.style.lineheight="50px";
    btn.style.margin="1%";
    btn.style.fontsize="2em";
    btn.val=txt;
    btn.textContent=txt;
    btn.addEventListener("click" , myfunction);
    main.appendChild(btn);

}

function addOutput(e){
    output.style.border="black 1px solid";
    console.log(e.target.val);
    let char=e.target.val;
    output.value+=char;
}






}


  