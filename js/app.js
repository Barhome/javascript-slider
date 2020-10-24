var itemImg=document.getElementsByClassName("item-img");
var mainSlide = document.querySelector(".main-slide");
var slideContent = document.querySelector(".slide-content");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var windowClose = document.getElementById("window-close");
var imgArray=[];
var imgIndex=0;



for (var i= 0; i<itemImg.length;i++){


    imgArray.push(itemImg[i]);
    itemImg[i].addEventListener("click",function(e){
        mainSlide.classList.add("show");
        var imgSource=e.target.src;
        slideContent.style.backgroundImage="url("+imgSource+")";
        imgIndex=imgArray.indexOf(e.target);
        console.log(imgIndex);
        
       
    })
   
}


prev.addEventListener("click",function(){
    
    moveBack()
   
})


next.addEventListener("click",function(){
    
   moveAhead();

   
})


windowClose.addEventListener("click",function(){

    mainSlide.classList.remove("show");

})


mainSlide.addEventListener("click",function(e){
    if(e.target==this){

        mainSlide.classList.remove("show");


    }

})

function moveBack(){

    imgIndex--;
    if(imgIndex<0){
        imgIndex=imgArray.length-1
    }

    slideContent.style.backgroundImage="url("+imgArray[imgIndex].src+")";

}


function moveAhead(){

    imgIndex++;
    if(imgIndex>imgArray.length-1){
        imgIndex=0
    }

    slideContent.style.backgroundImage="url("+imgArray[imgIndex].src+")";
}


document.addEventListener("keydown",function(e){

    if(e.keyCode==27) //esc
    {
        mainSlide.classList.remove("show");

    }
    else if(e.keyCode==37){

        moveBack();

    }

    else if(e.keyCode==39){
        moveAhead();

    }
})