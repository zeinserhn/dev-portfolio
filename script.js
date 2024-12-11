document.getElementById('contactForm').addEventListener('submit',function(e){
    e.preventDefault();
    const name=document.getElementById('name').value='';
    const email=document.getElementById('email').value='';
    const message=document.getElementById('message').value='';
    let isValid=true;

    if(!name){
        document.getElementById('nameerror]').innerText='Name is required';
        isValid=false;
    }
    if(!email){
        document.getElementById('emailerror').innerText='Valid email is required';
        isValid=false;
    }
    if(!message){
        document.getElementById('messgeerror').innerText='Message is required';
        isValid=false;
    }
    if(isValid){
        const subject=encodeURIComponent('New Contact Form Submission');
        const body=encodeURIComponent(`name:${name}\nemail:${email}\nmessage:${message}`);
        const mailtoLink=`mailto:zeinserhn@gmail.com?subject=${subject}&body=${body}`;
        window.location.href=mailtoLink;
        document.getElementById("contactForm").reset();
    }

})
const menuButton = document.getElementById("menuButton");
const navBar = document.getElementById("navbar");


menuButton.addEventListener("click", () => {
    if(navBar.style.display==="none"){
        navBar.style.display = "flex";
    }
   else{
    navBar.style.display = "none";
   }})
