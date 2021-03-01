//var decrease = document.getElementById("decr");
//var reset = document.getElementById("reset");
//var value = document.getElementById("value");
var num =0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");


// 1st method
btns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const styl = e.currentTarget.classList;
    if(styl.contains("decr")){
      num--;
    }
    else if(styl.contains("incr")){
      num++;
    }
    else{
      num=0;
    }
    if(num < 0){
         value.style.color = "red";
      }
      if(num > 0){
           value.style.color = "green";
        }
        if(num === 0){
             value.style.color = "#222";
          }
    value.textContent =num;
    console.log(num);
  });
});












// 2nd method

// decrease.addEventListener("click", function(){
//   num-- ;
//   value.textContent = num;
//   if(num < 0){
//      value.style.color = "red";
//   }
// });
// reset.addEventListener("click", function(){
//   num  = 0;
//   value.textContent = num;
//   if(num===0){value.style.color = "#222";}
// });
// increase.addEventListener("click", function(){
//   num++;
//   value.textContent = num;
//   if(num > 0){
//     value.style.color = "green";
//   }//console.log("3t "+num);
// });
