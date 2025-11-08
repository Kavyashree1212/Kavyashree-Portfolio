// Mobile menu, filters, and current year
const $ = (s, r=document)=>r.querySelector(s);
const $$ = (s, r=document)=>Array.from(r.querySelectorAll(s));
$("#menu")?.addEventListener("click",()=>$("#nav").classList.toggle("open"));
$$(".nav a").forEach(a=>a.addEventListener("click",()=>$("#nav").classList.remove("open")));
const y=document.querySelector("#year"); if(y) y.textContent=new Date().getFullYear();

const btns=$$(".filter"), cards=$$(".project");
btns.forEach(b=>b.addEventListener("click",()=>{
  btns.forEach(x=>x.classList.remove("active")); b.classList.add("active");
  const t=b.dataset.filter;
  cards.forEach(c => { c.style.display = (t==="all" || c.dataset.tags.includes(t)) ? "" : "none"; });
}));
