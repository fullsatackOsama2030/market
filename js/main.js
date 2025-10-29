 let logo=document.getElementById('logo');
 let close=document.getElementById('close');
 let nav=document.getElementById('nav');
 let btnscroll=document.getElementById('btnscrolls');
 let imges=document.getElementById('imges');
 let im=document.getElementById('im');
 let black=document.getElementById('black');

 logo.addEventListener('click',function(){
nav.classList.remove('hide');
})

close.onclick=function(){
nav.classList.add('hide');
logo.classList.remove('hide');

}

btnscroll.onclick=function(){
    window.scrollTo(0,0);
}

window.onscroll=function(){
   if(scrollY>=200){
    btnscroll.style.display='block';
   }else{
    btnscroll.style.display='none';

   }
}
window.onload=function(){
    if(scrollY>=200){
    btnscroll.style.display='block';
   }else{
    btnscroll.style.display='none';
   }
}

imges.onclick=function(){
    im.style.backgroundImage='url('+imges.src+')';
}


if(localStorage.length>0){
document.body.style.backgroundColor= localStorage.color;
black.style.backgroundColor= localStorage.backgroundColor;
black.style.position= localStorage.position;
black.style.right= localStorage.right;

}

function setColor(){
if(localStorage.color=='black')
{
localStorage.setItem('color','white');
localStorage.setItem('backgroundColor','black');
localStorage.setItem('position','absolute');
localStorage.setItem('right','60%');

}else if(localStorage.color=='white'){
localStorage.setItem('color','black');
localStorage.setItem('backgroundColor','white');
localStorage.setItem('position','absolute');
localStorage.setItem('right','5px');
}
else{
localStorage.setItem('color','black');
localStorage.setItem('backgroundColor','white');
localStorage.setItem('position','absolute');
localStorage.setItem('right','5px');
}
document.body.style.backgroundColor= localStorage.color;
black.style.backgroundColor=localStorage.backgroundColor;
black.style.position= localStorage.position;
black.style.right= localStorage.right;

}

//  localStorage.clear();