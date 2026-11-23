
(() => {
  const sky = document.getElementById('sky');
  if (sky) {
    for (let i=0;i<90;i++) {
      const s=document.createElement('i'); s.className='star';
      s.style.left=Math.random()*100+'%'; s.style.top=Math.random()*100+'%';
      s.style.setProperty('--dur',(2+Math.random()*4)+'s');
      s.style.animationDelay=(Math.random()*4)+'s'; sky.appendChild(s);
    }
  }
  document.querySelectorAll('[data-envelope]').forEach(el => {
    const toggle=()=>{el.classList.toggle('open'); const label=el.querySelector('[data-envelope-label]'); if(label) label.textContent=el.classList.contains('open')?'Письмо открылось ❤️':'Нажми, чтобы открыть';};
    el.addEventListener('click',toggle);
    el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggle();}});
  });
  document.querySelectorAll('[data-sparkles]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      for(let i=0;i<18;i++){
        const s=document.createElement('span');s.className='spark';s.textContent=['✦','♡','♥'][i%3];
        s.style.left=(15+Math.random()*70)+'vw';s.style.top=(35+Math.random()*40)+'vh';
        s.style.color=['#ffdce9','#f2d8a4','#ef8eb4'][i%3];document.body.appendChild(s);
        setTimeout(()=>s.remove(),1600);
      }
    });
  });
})();
