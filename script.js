
    $(document).ready(function(){
      $('.heroimg').slick({
    autoplay:true,
    slidesToShow: 1,
     slidesToScroll: 1,
   
     
     speed:100,
     dots:true,
      });
    });


    $(document).ready(function(){
      $('.fulbox').slick({
    autoplay:true,
    slidesToShow: 1,
     slidesToScroll: 1,
   
     
     speed:100,
     dots:true,
      });
    });
          
document.querySelector(".topbar-item").addEventListener("click", function() {
   const check = document.querySelector("header").classList.contains("jubair123");
  if(check===false){
     console.log(document.querySelector("header").classList.add("jubair123"));
   
  }else{
     console.log(document.querySelector("header").classList.remove("jubair123"));
  }
});
document.querySelector(".qualitybox")?.addEventListener("click",function() {
console.log(document.querySelector(".qualitybox").classList.add("scrollbox"));
});

window.addEventListener("scroll", function() {
   if(window.pageYOffset>1700){
      document.querySelector(".qualitybox").classList.add("scrollbox");
   }else{
      document.querySelector(".qualitybox")?.classList.remove("scrollbox");
   }
});




window.addEventListener("scroll",function(){
   if(window.pageYOffset>790){
      document.querySelector(".financeimg")?.classList.add("rightscrolling");
   }else{
      document.querySelector(".financeimg")?.classList.remove("rightscrolling");
   }
});


window.addEventListener("scroll", function(){
   if(window.pageYOffset>790){
      document.querySelector(".financetitle")?.classList.add("leftscrolling");
   }
});

window.addEventListener("scroll", function(){
   if(window.pageYOffset>1600){
      document.querySelector(".quality-decs")?.classList.add("quality-anime")
   }else{document.querySelector(".quality-decs")?.classList.remove("quality-anime")

   }
});


    

    
                        //for loop



 window.addEventListener("scroll", function ()  {
   if(window.pageYOffset > 200) {
      document.querySelector("header").classList.add("fixheader");
   }
});
window.addEventListener("scroll", function()  {
  if(window.pageYOffset <= 0) {
     document.querySelector("header").classList.remove("fixheader");
  }
});     
window.addEventListener("scroll", function(){
   console.log(window.pageYOffset);
});
   document.querySelector(".topbar-item").addEventListener("click", function(){
      const check= document.querySelector("header").classList.contains("takbir12");
      
     if(check===false){
        document.querySelector("header").classList.add("takbir12");
        document.querySelector('header').setAttribute("style","color:blue");
     }else{
   document.querySelector("header").classList.remove("takbir12");
   document.querySelector('header').removeAttribute("style","color:blue");
     }
   });
   console.log(Math.random());

                                         
                                                 //i create
                  function adderrormgs(nextdivterget, message,Uniquename){
                  if(document.querySelectorAll("."+Uniquename).length){
                     document.querySelectorAll("."+Uniquename).forEach((item) => {
                              item?.remove();
                                 });
                              }
   
       const mydiv = document.createElement("div");
       mydiv.innerText=message;
       mydiv.classList.add("errortext",Uniquename);
       document.querySelector(nextdivterget).before(mydiv);

       document.querySelector(nextdivterget).setAttribute("style","outline-color:red;")
      
}



function removeerrormgs(nextdivterget,Uniquename){
   if(document.querySelectorAll(Uniquename).length){
      document.querySelectorAll(Uniquename).forEach((item) => {
         item?.remove();
      });
   }
   document.querySelector(nextdivterget).removeAttribute("style");
  
}
                                 //fname
document.querySelector("#fname")?.addEventListener("keyup", function() {
   const fnametext = document.querySelector("#fname").value;
   if (fnametext.length > 10) {
       adderrormgs("#fname","first name must be in 10 carrecter", "Fnameerror");
   } else {
       removeerrormgs("#fname",".Fnameerror");
   }
});
                     //lname

document.querySelector("#lname")?.addEventListener("keyup", function() {
   const fnametext = document.querySelector("#lname")?.value;
   if (fnametext.length > 10) {
       adderrormgs("#lname","last name must be in 10 carrecter","Lnameerror");
   } else {
       removeerrormgs("#lname",".Lnameerror");
   }
});

                     //email

document.querySelector("#email")?.addEventListener("keyup",function(){
   const enametext =document.querySelector("#email").value;
   if(enametext . length>10){
      adderrormgs("#email","invalid email address","enameerror");
   }else{
      removeerrormgs('#email',".enameerror")
   }
})
                  //phone

document.querySelector("#phone")?.addEventListener("keyup",function(){
   const enametext =document.querySelector("#phone").value;
   if(enametext . length>11){
      adderrormgs("#phone","invalid phone number","phonenameerror");
   }else{
      removeerrormgs('#phone',".phonenameerror")
   }
});

                        //gender

document.querySelector("#Gender")?.addEventListener("change",function(){
   const gender = document.querySelector("#Gender").value;
   if(gender==="others"){
      adderrormgs("#Gender","others are not allowed","gendererror");
   }else{
      removeerrormgs("#Gender",".gendererror")
   }
})

                     //country

document.querySelector("#country")?.addEventListener("change",function(){
   const countries = document.querySelector("#country").value;
   if(countries==="3"){
      adderrormgs("#country","this is not allowed","countryerror");
   }else{
      removeerrormgs("#country",".countryerror")
   }
})
                     //password
   document.querySelector("#pass")?.addEventListener("keyup", function() {
 const ptext = document.querySelector("#pass").value;
   if (ptext.length < 6 || ptext.length > 15 ) {
  adderrormgs("#pass","password must be in 6-15 carrecter","pnameerror");
 } else {
 removeerrormgs("#pass",".pnameerror");
 }
});                                        

document.querySelector("#Cpass")?.addEventListener("keyup", function() {
   const Cptext = document.querySelector("#Cpass").value;
   
     if (Cptext.length < 6 || Cptext.length > 15 ) {
    adderrormgs("#Cpass","Cpassword must be in 6-15 carrecter","Cpnameerror");
   }
   
   else {
  removeerrormgs("#Cpass",".Cpnameerror")
   const Cptext = document.querySelector("#Cpass").value;
   const ptext = document.querySelector("#pass").value;
   if(ptext!==Cptext){
      adderrormgs("#Cpass","Cpassword does not match","Cpnameerror2"); 
   }else{
      removeerrormgs("#Cpass",".Cpnameerror2")
   }
   }
  });


               //valid email
 
               
//  const e ="jubair178@gmail.com";
//  const part1 = e.split('@')[0];
//  const part2 = e.split("@")[1];
//  if(e.split("@").length !== 2){
//     console.log("invalid email");
//  }else if(part2?.includes(".") === false){
//     console.log("invalid email");
//  }else if(part2?.endsWith(".com")===false ||
//   part2?.endsWith(".org")===false ||
//   part2?.endsWith(".net")===false){
//      console.log("invalid email");
//   }else if(part2?.split(".")[0].length<2){
//      console.log("invalid email");
//   }else if(part1.length !==3){
//      console.log("invalid email");
//   }
//   else{
//      console.log("valid email");
//   }
 
//   const e = "1@gmai.net";
//   const part1 = e.split("@")[0];
//   const part2 = e.split("@")[1];
  
//   // Check if '@' is included and only one '@' exists
//   if (e.split("@").length !== 2) {
//       console.log("invalid email");
//   } else if (!part2 || part2.startsWith(".") || part2.includes("..") || 
//              !(part2.endsWith(".com") || part2.endsWith(".org") || part2.endsWith(".net"))) {
//       console.log("invalid email");
//   } else if (part2.split(".").length < 2) {
//       console.log("invalid email");
//   } else {
//       console.log("valid email");
//   }
  
let userEmail = "freelancernasim";

if (!userEmail .includes("@")){
   console.log("invalid");
}else if(userEmail.startsWith("@")){
   console.log(invalid);
}
else{
   console.log("valid");
}
 
//add



// function addErrortext(nextdivterget, message,Uniquename){
//    if(document.querySelectorAll("."+Uniquename).length){
//       document.querySelectorAll("."+Uniquename).forEach((item) => {
//          item?.remove();
//       });
//    }


//    const mydiv=document.createElement("div");
//       mydiv.classList.add("errortext", Uniquename);
//       mydiv.innerText=message;
//       document.querySelector(nextdivterget).before(mydiv);

//       document.querySelector(nextdivterget).setAttribute("style","outline-color:red;")
// }



//                                          //remove


// function removeErrortext(nextdivterget,Uniquename){
//    if(document.querySelectorAll(Uniquename).length){
//       document.querySelectorAll(Uniquename).forEach((item) => {
//          item?.remove();
//       });

// }
// document.querySelector(nextdivterget).removeAttribute("style");

// }
   


//                                                    //fname
   
   
//    document.querySelector("#fname").addEventListener("keyup", function () {
//       const fnametext = document.querySelector("#fname").value;
//    if(fnametext.length > 10){
//       addErrortext("#fname","first name must be in ten carecter","Fnameerror")
      
//    }
   
//    else{
//       removeErrortext("#fname",".Fnameerror");
//    }
 
//    });
// //                                                     //lname

//    document.querySelector("#lname").addEventListener("keyup", function () {
//       const fnametext = document.querySelector("#lname").value;
//    if(fnametext.length > 10){
//       addErrortext("#lname","last name must be in ten carracter","lnameerror");
//    }else{
//       removeErrortext("#lname",".lnameerror");
//    }
 
//    });
//                                                       //email


//    document.querySelector("#email").addEventListener("keyup", function () {
//       const fnametext = document.querySelector("#email").value;
//    if(fnametext.length > 10){
//       addErrortext("#email","email name must be in 20 carracter","emailnameerror");
//    }else{
//       removeErrortext("#email",".emailnameerror");
//    }
 
//    });
  
// function removeerrormgs(nextdivterget){
    //    document.querySelector(nextdivterget).removeAttribute("style");
    // }
    
    // function adderrormgs(nextdivterget,message,uniquename){
    //    if(document.querySelectorAll(uniquename).length){
    //       document.querySelectorAll(uniquename).forEach((item) =>{
    //          item?.remove();
    //       });   
    //    }
    //    const mydiv = document.createElement("div");
    //    mydiv.innerText = message;
    //    mydiv.classList.add(".errortext",uniquename);
    //    document.querySelector(nextdivterget).before(mydiv);
    //    document.querySelector(nextdivterget).setAttribute("style","outline-color:red")
    // }
    
    //  function removeerrormgs(nextdivterget,uniquename){
    //     if (document.querySelectorAll(uniquename).length){
    //        document.querySelectorAll(uniquename).forEach((item) =>{
    //           item?.remove();
    //        })
    //     }
    //     document.querySelector(nextdivterget).removeAttribute("style");
    //  }
    
    //  document.querySelector("#fname").addEventListener("keyup", function() {
    //    const fnametext = document.querySelector("#fname").value;
    //    if (fnametext.length > 10) {
    //        adderrormgs("#fname", "first name must be in 10 charecter",".fnameerror");
    //    } else {
    //        removeerrormgs("#fname",".fnameerror");
    //    }
    // });
    
    // document.querySelector('#lname').addEventListener("keyup",function(){
    //    const lnametext = document.querySelector("#lname").value;
    //    if (lnametext.length > 10){
    //       adderrormgs("#lname","last name must be in 10 charecter",'.lnameerror');
    //    }else{
    //       removeerrormgs("#lname",".lnameerror");
    //    }
    // });
    
    
    
    
    
    // function adderrormgs(nextdivterget, message, uniquename) {
    
    //    if (document.querySelectorAll("." + uniquename).length) {
          
    //        document.querySelectorAll("." + uniquename).forEach((item) => {
    //            item?.remove();
    //        });
    //    }
    //    const mydiv = document.createElement("div");
    //    mydiv.innerText = message;
    //    mydiv.classList.add(".errortext",uniquename);
    //    document.querySelector(nextdivterget).before(mydiv);
    //    document.querySelector(nextdivterget).setAttribute("style","outline-color:red")
    // }
    
    
    // function addErrorMsgs(nextdivtarget, message, uniquename) {
    //    // Remove any existing error messages with the same class
    //    if (document.querySelectorAll("." + uniquename).length) {
    //        document.querySelectorAll("." + uniquename).forEach((item) => {
    //            item.remove();
    //        });
    //    }
    
    //    const mydiv = document.createElement("div");
    //    mydiv.innerText = message;
    //    mydiv.classList.add("errortext", uniquename);
    //    document.querySelector(nextdivtarget).before(mydiv);
    // }
    
    
    
    
    //  function removeerrormgs(nextdivterget,uniquename){
    //     if (document.querySelectorAll(uniquename).length){
    //        document.querySelectorAll(uniquename).forEach((item) =>{
    //           item?.remove();
    //        })
    //     }
    //     document.querySelector(nextdivterget).removeAttribute("style");
    //  }
    
    
    
    //  document.querySelector("#fname").addEventListener("keyup", function() {
        //    const fnametext = document.querySelector("#fname").value;
        //    if (fnametext.length > 10) {
        //        addErrorMsgs("#fname", "first name must be in 10 charecter",".fnameerror");
        //    } else {
        //        removeerrormgs("#fname",".fnameerror");
        //    }
        // });
        
        // document.querySelector('#lname').addEventListener("keyup",function(){
        //    const lnametext = document.querySelector("#lname").value;
        //    if (lnametext.length > 10){
        //       addErrorMsgs("#lname","last name must be in 10 charecter",'.lnameerror');
        //    }else{
        //       removeerrormsgs("#lname",".lnameerror");
        //    }
        // })
        console.log(document.querySelectorAll('.errortext'));  // .innerText = "hello this is error";

        document.querySelectorAll(".errortext")[0].innerText="hello error";
        document.querySelectorAll(".errortext")[1].innerText="ladkjsfjd";
    
        const div = document.querySelectorAll(".errortext").length;

        for(let counter=0; counter<div; counter++){
           console.log(document.querySelectorAll(".errortext")[counter]);
        }
        document.querySelectorAll(".errortext").forEach((item, index)=>{
        item.innerHTML="alkdjfdjfgjhdg"
           });
               
        const tata=document.createElement("div").innerHTML = "my name is jubair";
        document.querySelector("#fname").before(tata);
        document.querySelector("#fname").addEventListener("keyup", function () {
            console.log("Keyup event triggered");
            const fnametext = document.querySelector("#fname").value;
            console.log(fnametext); 
         
            if (fnametext.length > 10) {
                document.querySelector(".errortext").innerText = "Above 10 words, it’s not working";
                document.querySelector("#fname").setAttribute("style", "outline-color:red;");
            } else {
                document.querySelector(".errortext").innerText = "";
                document.querySelector("#fname").removeAttribute("style");
            }
         });
         
         document.querySelector("#lname").addEventListener("keyup", function(){
            const lnametext = ducument.querySelector("#lname").value;
            if (lnametext . length >10){
               document.querySelector("#lname").innerText="it's error";
               document.querySelector("#lname").setAttribute("style", "outline-color:red;");
            }else{
               document.querySelector("#lname").innerText="";
               document.querySelector("#lname").removeAttribute("style");
            }
         });
         //for each loop batter//



         //     document.querySelectorAll(".errortext").forEach((divitem, index) => {
         //        console.log(divitem, index);
         //     });
         // document.querySelectorAll(".errortext").forEach((item,index) => {
         //   item.innerHTML="kjyiuy";
         // });
                                          



         //old fname

         // document.querySelector("#fname").addEventListener("keyup",function(){
         //    const fnametext =document.querySelector("#fname").value;
            
         //    if(fnametext.length>10){
         // if(document.querySelectorAll('.errortext').length){
         //    document.querySelectorAll(".errortext").forEach((item)=>{
         //       item.remove();
         //    })
         // }
         
         //     const mydiv=document.createElement("div");
         //     mydiv.innerHTML="first name is must be in 10 carracter";
         //     mydiv.classList.add("errortext")
         //     document.querySelector('#fname').setAttribute("style","outline-color:red;")
         
         
         //     document.querySelector('#fname').before(mydiv);
            
         
         //    }else{
         //       document.querySelector("#fname")?.removeAttribute("style");
         //       document.querySelector('.errortext')?.remove();
         //    }
         // })
         
         
         // //                //old lname
         
         
         
         
         //                document.querySelector("#lname").addEventListener("keyup",function(){
         //                   const fnametext =document.querySelector("#lname").value;
                          
         //                   if(fnametext.length>10){
         //                if(document.querySelectorAll('.errortext').length){
         //                   document.querySelectorAll(".errortext").forEach((item)=>{
         //                      item.remove();
         //                   })
         //                }
                        
         //                    const mydiv=document.createElement("div");
         //                    mydiv.innerHTML="last name must be 10 carracter";
         //                    mydiv.classList.add("errortext",'.lnameerror')
         //                    document.querySelector('#lname').before(mydiv);
         //                    document.querySelector('#lname').setAttribute("style","outline-color:red;")
                        
         //                   }else{
         //                      document.querySelector("#lname")?.removeAttribute("style");
         //                      document.querySelector('.errortext')?.remove();
         //                   }
         //                });
         
