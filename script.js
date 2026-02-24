/* this nav bar */
fetch("nav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
    
    typeWriter()
  });
let txt="Pushpraj."
let speed=100;
let i=0;
function typeWriter()
{
  if(i<txt.length)
    {
      document.getElementById("demo").innerHTML+=txt.charAt(i)
      i++
      setTimeout(typeWriter,speed)
    }
}


/* index page js*/
let text=`Hi, I'm Pushpraj I build modern web experiences`
 let index=0;
  let lenght=50;
function typeWriterr()
{
  if(index<text.length)
    {
      document.getElementById("dm").innerHTML+=text.charAt(index)
      index++
      setTimeout(typeWriterr,lenght)
    }
}
document.getElementById('dm').style.color='orange'
document.getElementById('dm').style.padding="40px"
typeWriterr()



var modal=document.getElementById('myModal')

var img=document.getElementById('myImg')
var modalImg=document.getElementById("img01")
var captiontext=document.getElementById("caption")

img.onclick=function()
{
    modal.style.display='block'
    modalImg.src=this.src;
    captiontext.innerHTML=this.alt;
}

var span=document.getElementsByClassName('close')[0];

span.onclick=function()
{
    modal.style.display='none'
}

let tools=document.querySelectorAll('.tools')

tools.forEach(function(element) {
element.addEventListener('click',function()
{
  let vs = this.nextElementSibling;
  if(vs.style.display==='block')
    {
      vs.style.display='none'
      this.innerHTML=`<i class="fa-solid fa-chevron-down"></i>`
    }
    else
      {
        vs.style.display='block'
        this.innerHTML='<i class="fa-solid fa-angle-up"></i>'
      }
})
})

 let btn=document.getElementById("message")

 btn.addEventListener('click',function()
 {
    let name=document.getElementById('tex').value.trim()
    let email=document.getElementById("em").value.trim()
    let textarea=document.getElementById('sub').value.trim()

       let namePattern = /^[A-Za-z\s]{2,30}$/;
    if(!namePattern.test(name))
    {
        alert("please enter the valid name")
        return;
    }
    else if(email==="")
    {
      alert("enter your email")
      return
    }
    
    if(textarea==="")
    {
        alert("please enter valid password")
        return
    }
    
 })

/* the form part of the website*/
let button=document.getElementById('submit')
button.addEventListener('click',function()
{
    let name=document.getElementById('name').value.trim()
    let email=document.getElementById("mail").value.trim()
    let password=document.getElementById('password').value.trim()
    let namePattern = /^[A-Za-z\s]{2,30}$/;
    if(!namePattern.test(name))
    {
        alert("please enter the valid name")
        return;
    }
    else if(email==="")
    {
      alert("enter your email")
      return
    }
    
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    if(!passwordPattern.test(password))
    {
        alert("please enter valid password")
        return
    }
    
    alert('details have submited succesfull !')
})
