var user = document .getElementById('user');
var menu = document .getElementById('menu');
var nav1 = document.getElementById("nav1");
var nav2 = document.getElementById("nav2");
var nav3 = document.getElementById("nav3");
var nav4 = document.getElementById("nav4");
var nav5 = document.getElementById("nav5");
var smallNav = document.getElementById('small_nav');
var back = document.getElementById('back')


// menu.onclick = function(){
//   if (user.classList == ""){
//     user.classList.add("open");
//   }else{
//     user.classList.remove("open");
//   }
// }

menu.addEventListener('click', ()=>{
  if (smallNav.classList == 'close'){
    smallNav.classList.remove('close');
    smallNav.classList.add('open');
  }else{
    smallNav.classList.remove('open');  
    smallNav.classList.add('close');
  }
  
})

back.addEventListener('click', ()=>{
  smallNav.classList.remove('open');
  smallNav.classList.add('close');
})


// const removeFunct = nav =>{
//   //console.log(nav);
//   nav.addEventListener('click', ()=>{
//     console.log('clicked');
//     // smallNav.classList.remove('open');
//     // smallNav.classList.add('close');
//   }) 
// }

// for(var i = 1; i<=5; i++){
//   removeFunct("nav" + i);
// }

nav1.onclick = function(){
  smallNav.classList.remove('open');
  smallNav.classList.add('close');
}
nav2.onclick = function(){
  smallNav.classList.remove('open');
  smallNav.classList.add('close');
}
nav3.onclick = function(){
  smallNav.classList.remove('open');
  smallNav.classList.add('close');
}
nav4.onclick = function(){
smallNav.classList.remove('open');
smallNav.classList.add('close');
}
nav5.onclick = function(){
  smallNav.classList.remove('open');
  smallNav.classList.add('close');
}











