
(() => {
  const sky = document.getElementById('sky');
  if (sky) {
    for (let i=0; i<105; i++) {
      const s=document.createElement('i');
      s.className='star';
      s.style.left=Math.random()*100+'%';
      s.style.top=Math.random()*100+'%';
      s.style.setProperty('--dur',(2+Math.random()*5)+'s');
      s.style.animationDelay=(Math.random()*5)+'s';
      sky.appendChild(s);
    }
  }

  const overlay=document.createElement('div');
  overlay.id='transition';
  overlay.innerHTML='<div class="trans-heart">♥</div>';
  document.body.appendChild(overlay);

  document.querySelectorAll('a[href]').forEach(a => {
    const href=a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') ||
        href.startsWith('mailto:') || a.target==='_blank' ||
        a.hasAttribute('download')) return;
    a.addEventListener('click', e => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      e.preventDefault();
      if (document.body.classList.contains('is-leaving')) return;
      document.body.classList.add('is-leaving');
      window.setTimeout(() => { window.location.href=href; }, 720);
    });
  });

  document.querySelectorAll('[data-envelope]').forEach(el => {
    const toggle=() => {
      el.classList.toggle('open');
      const label=document.querySelector('[data-envelope-label]');
      if(label) label.textContent=el.classList.contains('open')?'ПИСЬМО ОТКРЫТО ♥':'НАЖМИ, ЧТОБЫ ОТКРЫТЬ';
    };
    el.addEventListener('click',toggle);
    el.addEventListener('keydown',e => {
      if(e.key==='Enter' || e.key===' '){e.preventDefault();toggle();}
    });
  });

  document.querySelectorAll('[data-sparkles]').forEach(btn => btn.addEventListener('click', () => {
    for(let i=0;i<26;i++){
      const s=document.createElement('span');
      s.className='spark';s.textContent=['✦','♡','♥'][i%3];
      s.style.left=(8+Math.random()*84)+'vw';
      s.style.top=(28+Math.random()*55)+'vh';
      s.style.color=['#ffdce9','#f2d8a4','#ef8eb4'][i%3];
      document.body.appendChild(s);
      setTimeout(()=>s.remove(),1600);
    }
  }));
})();
