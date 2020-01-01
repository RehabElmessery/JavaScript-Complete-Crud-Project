var myImages = Array.from(document.querySelectorAll(".item-img"));
var lightBoxContainer =document.querySelector(".lightBoxContainer");
var close = document.getElementById("close");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var currentImgIndex = 0;

for (var i=0; i<myImages.length ; i++)
{
    myImages[i].addEventListener("click",showLightBox)
}


function showLightBox(e)
{
    lightBoxContainer.style.transform = "scale(1,1)";
    lightBoxContainer.firstElementChild.style.transform = "scale(1,1)";

    var imgSrc = e.target.src ;
    currentImgIndex = myImages.indexOf(e.target)

    lightBoxContainer.firstElementChild.style.backgroundImage ="url("+imgSrc+")";
}
function hiddeLightBox()
{
    lightBoxContainer.style.transform ="scale(0,0)"
}

close.addEventListener("click",hiddeLightBox)
next.addEventListener("click",gonext)
prev.addEventListener("click",goprev)


function gonext()
{
    currentImgIndex++;
    if(currentImgIndex == myImages.length)
    {
        currentImgIndex = 0;
    }
    lightBoxContainer.firstElementChild.style.backgroundImage ="url("+myImages[currentImgIndex].src+")";

}

function goprev()
{
    currentImgIndex--;
    if(currentImgIndex<0)
    {
        currentImgIndex=myImages.length-1;
    }
    lightBoxContainer.firstElementChild.style.backgroundImage ="url("+myImages[currentImgIndex].src+")";

}

document.addEventListener("keydown" , function(e){

    if(e.keyCode == 39)
    {
         gonext();
    }
    else if(e.keyCode == 37)
    {
         goprev();
    }
else if(e.keyCode == 27)
{
    hiddeLightBox();
}

})