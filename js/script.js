(function(){
  var root=document.documentElement;
  try{var s=localStorage.getItem('theme');if(s)root.setAttribute('data-theme',s)}catch(e){}
  var tb=document.getElementById('theme');
  function dark(){var t=root.getAttribute('data-theme');return t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches}
  function lab(){tb.textContent=dark()?'Mode clair':'Mode sombre'}
  tb.addEventListener('click',function(){var n=dark()?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}lab()});
  lab();

  var cp=document.getElementById('copy'),mail=document.getElementById('mail');
  cp.addEventListener('click',function(){
    var done=function(m){cp.textContent=m;setTimeout(function(){cp.textContent='Copier l’adresse'},2000)};
    try{navigator.clipboard.writeText(mail.textContent).then(function(){done('Copié\u00a0!')},function(){done('Copie impossible ici')})}
    catch(e){done('Copie impossible ici')}
  });

  var fr=document.getElementById('frame'),pic=document.getElementById('pic'),im=document.getElementById('pimg');
  function show(u){im.src=u;fr.classList.add('has')}
  try{var sp=localStorage.getItem('portrait');if(sp)show(sp)}catch(e){}
  var pf=new Image();pf.onload=function(){show('assets/portrait.jpg')};pf.src='assets/portrait.jpg';
  fr.addEventListener('click',function(){pic.click()});
  pic.addEventListener('change',function(){
    var f=pic.files&&pic.files[0];if(!f)return;
    var rd=new FileReader();
    rd.onload=function(){
      var t=new Image();
      t.onload=function(){
        var W=640,H=800,c=document.createElement('canvas');c.width=W;c.height=H;
        var k=Math.max(W/t.width,H/t.height),w=t.width*k,h=t.height*k;
        c.getContext('2d').drawImage(t,(W-w)/2,(H-h)/2,w,h);
        var d=c.toDataURL('image/jpeg',0.85);show(d);
        try{localStorage.setItem('portrait',d)}catch(e){}
      };
      t.src=rd.result;
    };
    rd.readAsDataURL(f);
  });

  var L=[],i=0;
  document.querySelectorAll('#name .ln').forEach(function(ln){
    var t=ln.textContent;ln.textContent='';
    for(var k=0;k<t.length;k++){var sp=document.createElement('span');sp.textContent=t[k];sp.setAttribute('aria-hidden','true');sp.style.setProperty('--i',i++);ln.appendChild(sp);L.push(sp)}
  });
  if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var px=-9999,py=-9999,raf=0,cur=L.map(function(){return 0});
  function tick(){
    var busy=false,tg=L.map(function(s){var r=s.getBoundingClientRect();return Math.max(0,1-Math.hypot(px-(r.left+r.width/2),py-(r.top+r.height/2))/240)});
    L.forEach(function(s,n){
      cur[n]+=(tg[n]-cur[n])*0.18;
      if(Math.abs(tg[n]-cur[n])>0.002)busy=true;
      s.style.fontVariationSettings='"wght" '+Math.round(300+500*cur[n]);
      s.style.setProperty('--t',cur[n].toFixed(3));
    });
    raf=busy?requestAnimationFrame(tick):0;
  }
  function go(){if(!raf)raf=requestAnimationFrame(tick)}
  window.addEventListener('pointermove',function(e){px=e.clientX;py=e.clientY;go()});
  document.addEventListener('pointerleave',function(){px=py=-9999;go()});
})();
