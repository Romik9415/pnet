( function() {
       var speedModifier = 3;// parallax speed modifier
       window.onscroll = function() {
         document.getElementById("parallax-bgi").style.backgroundPosition = "0px -" + ( 100 + window.pageYOffset / speedModifier ) + "px";
      }
   })();

// function Scroll() {
//   if (!document.querySelector(".expert_text")) return;
//   obj=document.querySelector(".expert_text");
//   obj.style.top =-70+"px";
// }
// function textBack(){
//   obj=document.querySelector(".expert_text");
//   obj.style.top =100+"px";
//   window.setTimeout("Scroll();",30);
//   console.log('Gopa'); 
// }
// var pos=100;
// function Scroll() {
//   if (!document.querySelector(".expert_text")) return;
//   obj=document.querySelector(".expert_text");
//   pos -=1;
//   if (pos < 0-obj.offsetHeight+110) return;
//   obj.style.top=pos+"px";  
//   window.setTimeout("Scroll();",10);
// }
var pos=100;
function Scroll() {
  if (!document.querySelector(".expert_text")) return;
  obj=document.querySelector(".expert_text");
  console.log(obj);
  console.log(pos>0-obj.offsetHeight+110);
  if(!obj)return;//stop all together
  console.log(pos);
  if(pos>=0){
  	pos=-94;
  	obj.style.top=pos+"px"; 
  }
  else{
  	pos=0;
  	window.setTimeout("Scroll();",8000);
  }
  obj.style.top=pos+"px"; 
 
}


