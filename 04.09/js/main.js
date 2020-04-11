

// var salam = document.getElementsByClassName("salam")[0];


// var salam = document.querySelector(".salam");

// // salam.onclick = function(){

// //     alert("salam divine kliklendi")
// // }


// salam.addEventListener("click",function(){

//     alert("salam divine kliklendi")


// })


// var mynav = document.querySelector(".mynav");


// window.onscroll = function()
// {

// if(window.scrollY > 1234){

//     mynav.classList.add("sticky")
//     mynav.style.top = "0px";

// }
// else{
//     mynav.classList.remove("sticky")

// }

  
// }


// var message = document.querySelector("#message");

// var text = document.querySelector("#text");

// var btn = document.querySelector("#btn");



// btn.addEventListener("click", function(){



//     var mesaj = message.value;


//      text.append(mesaj);

//      message.value = " ";



// })




// var message = document.querySelector("#message");

//  var btn = document.querySelector("#btn");

//  var ul = document.querySelector(".ulholder");


//  var danger = document.querySelector("#dangerbtn");


//  var warning = document.querySelector("#warning");

//  var activeArray = [];
//  btn.onclick = function(){


//     var mesaj = message.value;


//     //yeni li yaradiriq ama hec yerde deyil
//     var newLi = document.createElement("li");

//     newLi.classList.add("newli");



//     //YENI I YARADAQ

//     var icon = document.createElement("i");

//     icon.classList.add("fas", "fa-times");


//     newLi.onclick = function(){

//         this.classList.add("active");

//         activeArray.push(this);

        
//        SelectedListItems();
//     }
  
//     icon.onclick = function(){

//     this.parentElement.remove();
//  }
//     //  newLi.innerHTML = mesaj + '<i class="fas fa-times"></i>';



// //mesaji lnin icine atiriq
//     newLi.append(mesaj);
//     newLi.append(icon);
// // li ni  ul in icine atiriq
//     ul.append(newLi);


  
//     CheckedInArray();

//     danger.onclick = function(){

        
//        ul.innerHTML = "";

//     }

//     warning.onclick = function(){
      
//         for(let i =0; i < activeArray.length; i++){

//             activeArray[i].remove();

//       }

        
       
//     }

//  }


//  function CheckedInArray(){

//   var listItems = document.querySelectorAll(".newli");

//   if(listItems.length > 0){

//     danger.classList.remove("d-none");

//   }
//   else{
//     danger.classList.add("d-none");

//   }


//  }

//  function SelectedListItems(){

//   var activeListItems = document.querySelectorAll(".active");



//   if(activeListItems.length > 0){

//     warning.classList.remove("d-none");

//   }
//   else{
//     warning.classList.add("d-none");

//   }
//  }