const rightSide = document.querySelector('.right-side')
const leftSide = document.querySelector('.left-side')
const pics = document.querySelectorAll('.pic')
const upBtns = document.querySelectorAll('.uparrow')
const downBtns = document.querySelectorAll('.downarrow')
let x =0;
upBtns.forEach((btn)=>{
    btn.addEventListener('click', moveUp)
})
downBtns.forEach((btn2)=>{
    btn2.addEventListener('click', moveDown)
})

function moveUp(){
    if(x< pics.length-1){
        x++
        console.log(x);
        
        rightSide.style.transform=  `translateY(-${x*100}vh)`
        leftSide.style.transform=  `translateY(-${(3-x)*100}vh)`
    }else if(x= pics.length-1){
        x=0
        rightSide.style.transform=  `translateY(-${0}vh)`
        leftSide.style.transform=  `translateY(-${300}vh)`
    }
    
    
}
function moveDown(){
    if(x==0){
        x= pics.length-1
        rightSide.style.transform=  `translateY(-${300}vh)`
        leftSide.style.transform=  `translateY(${0}vh)`
       
    }
    else if(0<x){
        x--
        console.log(x);
        rightSide.style.transform=  `translateY(-${x*100}vh)`
        leftSide.style.transform=  `translateY(-${(3-x)*100}vh)`
    }
// else if(x==0||x< pics.length){
//     x++
//     console.log(x);
//     rightSide.style.transform=  `translateY(-${0}vh)`
//     leftSide.style.transform=  `translateY(-${(3-x)*100}vh)`
// }
    
    
 

}