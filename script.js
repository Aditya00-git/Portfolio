/* PARTICLES */
const canvas=document.getElementById("particles");
const ctx=canvas.getContext("2d");

function resize(){
  canvas.width=innerWidth;
  canvas.height=innerHeight;
}
resize(); addEventListener("resize",resize);

const dots=[];
for(let i=0;i<120;i++){
  dots.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*1.5+.4,
    vx:(Math.random()-.5)*.3,
    vy:(Math.random()-.5)*.3
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  dots.forEach(d=>{
    d.x+=d.vx; d.y+=d.vy;
    if(d.x<0||d.x>canvas.width) d.vx*=-1;
    if(d.y<0||d.y>canvas.height) d.vy*=-1;
    ctx.beginPath();
    ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
    ctx.fillStyle="rgba(255,255,255,.7)";
    ctx.fill();
  });
  requestAnimationFrame(animate);
}
animate();

/* SCROLL ANIMATION */
const reveals=document.querySelectorAll(".reveal");
function reveal(){
  const trigger=innerHeight*0.85;
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top<trigger){
      el.classList.add("active");
    }
  });
}
addEventListener("scroll",reveal);
reveal();
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if (pageYOffset >= top) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
