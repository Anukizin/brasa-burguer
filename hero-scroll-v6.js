/* BRASA V6 — one real tray, two scroll flights: Hero → Combo → Beverage. */
(() => {
  'use strict';
  const hero=document.getElementById('plateWrap');
  const plate=hero?.querySelector('.plate-image');
  const combo=document.getElementById('brTrayVisual');
  const drink=document.getElementById('brV4Tray');
  const trayButton=document.getElementById('brTrayButton');
  if(!hero||!plate||!combo||!drink||!trayButton)return;
  plate.src='/assets/brasa_bandeja_vazia.webp';
  plate.alt='Bandeja vermelha BRASA';
  plate.decoding='async';
  window.__brasaV7MotionActive=true;
  const css="\n/* V6 / BRASA seamless narrative & unified tray */\n#inicio.builder-section{overflow:hidden}\n#plateWrap{width:min(120%,635px)!important;bottom:4px!important;z-index:2!important;transition:opacity .35s ease}\n#plateWrap .plate-image{width:100%!important;height:auto!important;max-height:182px!important;object-fit:contain!important;filter:drop-shadow(0 22px 15px #13060888)!important}\n#scene .burger-pieces{z-index:3}\n#scene .empty-copy{z-index:4}\n#ketchup{isolation:isolate}\n#ketchup::after{content:\"\";position:absolute;left:0;right:0;bottom:-3px;height:clamp(260px,37vw,520px);z-index:12;pointer-events:none;background:linear-gradient(180deg,transparent 0%,#ce4a211a 22%,#e7772f64 48%,#f99c36cf 76%,#ffae3e 100%);mask-image:linear-gradient(180deg,transparent,#000 22%,#000);-webkit-mask-image:linear-gradient(180deg,transparent,#000 22%,#000)}\n#combo.br-combo{margin-top:-3px!important;border:0!important;background:linear-gradient(180deg,#ffae3e 0%,#ffc44e 22%,#ffd365 54%,#ffb445 100%)!important}\n#combo.br-combo::before{inset:0 -5% auto!important;height:clamp(120px,18vw,240px)!important;filter:none!important;background:linear-gradient(180deg,#ffae3e,transparent)!important;opacity:1!important}\n#combo.br-combo .br-combo-wrap{padding-top:clamp(80px,12vw,160px)!important}\n#combo.br-combo .br-combo-eyebrow,#combo.br-combo .br-tray-top,#combo.br-combo .br-tray-subtop{display:none!important}\n#combo.br-combo .br-combo-heading h2{margin-top:0!important}\n#combo.br-combo .br-tray-panel{padding-top:0!important}\n#combo.br-combo .br-tray-panel::after{display:none!important;content:none!important}\n#combo.br-combo .br-tray-visual{margin-top:0!important}\n#combo.br-combo .br-tray-status{color:#713918!important;opacity:.76}\n#brJourneyBridge{height:clamp(250px,32vw,410px)!important;min-height:0!important;margin-top:-3px!important;background:linear-gradient(180deg,#ffb445 0%,#f78c34 17%,#dc542e 47%,#81302a 78%,#290809 100%)!important;overflow:hidden!important}\n#brJourneyBridge::before{background:radial-gradient(ellipse 55% 65% at 55% 38%,#ffcc8042,transparent 80%)!important}\n#brJourneyBridge .br-bridge-inner,#brJourneyBridge .br-bridge-trail{display:none!important}\n#brJourneyBridge::after{content:\"\";position:absolute;bottom:-4px;left:0;right:0;height:60%;background:linear-gradient(180deg,transparent 0%,#4d15183d 40%,#260607 100%);pointer-events:none}\n#brV4Stage{margin-top:-3px!important;border:0!important;scroll-margin-top:0!important;background:#260607!important}\n#brV4Stage .br-v4-top{display:none!important}\n#brV4Stage .br-v4-shell{padding-top:20px!important}\n#brV4Stage .br-v4-left{padding-top:clamp(37px,5vw,72px)!important}\n#brV4Stage .br-v4-columns{margin-top:0}\n.br-journey-ghost{display:none!important}\nhtml.br-journey-flying #brTrayVisual,html.br-journey-flying #brV4Tray{visibility:visible!important}\nhtml.br-flight-from-hero #plateWrap,html.br-flight-from-hero #burgerPieces{visibility:hidden!important}\nhtml.br-flight-from-combo #brTrayVisual,html.br-flight-from-combo #brV4Tray{visibility:hidden!important}\n#brUnifiedTrayGhost{position:fixed;left:0;top:0;z-index:150;visibility:hidden;opacity:0;pointer-events:none;transform-origin:50% 50%;will-change:left,top,width,height,transform,opacity;filter:drop-shadow(0 20px 16px #25070873)}\n#brUnifiedTrayGhost .br-tray-visual{position:relative!important;width:100%!important;height:100%!important;min-width:0!important;min-height:0!important;margin:0!important;overflow:visible!important}\n#brUnifiedTrayGhost .br-tray-placeholder,#brUnifiedTrayGhost [id]{pointer-events:none}\n@media(max-width:900px){#plateWrap{width:min(123%,570px)!important;bottom:8px!important}#plateWrap .plate-image{max-height:145px!important}#combo.br-combo .br-combo-wrap{padding-top:80px!important}#brV4Stage .br-v4-left{padding-top:28px!important}}\n@media(max-width:600px){#plateWrap{width:112%!important;bottom:16px!important}#plateWrap .plate-image{max-height:115px!important}#ketchup::after{height:250px}#combo.br-combo .br-combo-wrap{padding-top:64px!important}#brJourneyBridge{height:270px!important}#brV4Stage .br-v4-shell{padding-top:0!important}}\n@media(prefers-reduced-motion:reduce){#brUnifiedTrayGhost{display:none!important}html.br-flight-from-hero #plateWrap,html.br-flight-from-hero #burgerPieces,html.br-flight-from-combo #brTrayVisual,html.br-flight-from-combo #brV4Tray{visibility:visible!important}}\n";
  const v7Css="\n/* BRASA V7 — unobstructed ketchup route, seamless panels and single-product tray */\n#ketchup .ketchup-action{display:none!important}\n#ketchup::after{height:clamp(350px,45vw,680px)!important;bottom:-3px!important;background:linear-gradient(to bottom,transparent 0%,#ffaf3c03 12%,#fbac4148 38%,#f9a441ab 68%,#ffb343 100%)!important;filter:none!important;mask-image:linear-gradient(to bottom,transparent,#000 17%,#000)!important;pointer-events:none}\n#combo.br-combo{background:linear-gradient(180deg,#ffb343 0%,#ffc54f 23%,#ffd365 56%,#ffb445 100%)!important}\n#brJourneyBridge{height:clamp(175px,20vw,260px)!important;background:linear-gradient(to bottom,#ffb445 0%,#f88d39 21%,#d6582f 49%,#7a2924 72%,#260607 100%)!important;}\n#brJourneyBridge::after{background:linear-gradient(to bottom,transparent,#260607 100%)!important;height:35%!important;bottom:0!important}\n#brV4Stage{background:#260607!important;isolation:isolate}\n#brV4Stage::before{display:block!important;content:\"\";position:absolute;inset:0 0 auto;height:clamp(170px,24vw,320px);z-index:0;pointer-events:none;background:linear-gradient(180deg,#260607 0%,#260607dc 30%,#26060733 73%,transparent 100%);}\n#brV4Stage .br-v5-washes{mask-image:linear-gradient(to bottom,transparent 0%,#0008 16%,#000 37%)!important;-webkit-mask-image:linear-gradient(to bottom,transparent 0%,#0008 16%,#000 37%)!important}\n#brV4Stage .br-v4-shell{position:relative;z-index:1}\nhtml.br-flight-from-hero #plateWrap,html.br-flight-from-hero #burgerPieces{visibility:visible!important}\nhtml.br-flight-from-hero #brTrayVisual{visibility:hidden!important}\n#brUnifiedTrayGhost{z-index:42!important;filter:drop-shadow(0 15px 13px #25060773)!important}\n#brUnifiedTrayGhost .br-tray-food{opacity:0}\n#brUnifiedTrayGhost .br-tray-food.is-selected{opacity:1!important;transform:translateY(0) scale(1)!important}\n#brUnifiedTrayGhost .br-tray-burger{opacity:1!important;animation:none!important}\n#brUnifiedTrayGhost .br-drink-can-on-tray{position:absolute;z-index:8;right:-1%;bottom:13%;width:22%;height:70%;object-fit:contain;filter:drop-shadow(0 12px 10px #1c07085c)}\n@media(max-width:700px){#ketchup::after{height:300px!important}#brJourneyBridge{height:185px!important}#brV4Stage::before{height:190px}#brUnifiedTrayGhost{z-index:38!important}}\n@media(prefers-reduced-motion:reduce){html.br-flight-from-hero #brTrayVisual{visibility:visible!important}}\n";
  document.querySelector('#ketchup .ketchup-action')?.remove();
  const style=document.createElement('style');
  style.id='brasa-full-journey-v6-css';style.textContent=css+v7Css;
  document.head.appendChild(style);

  const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ghost=document.createElement('div');
  ghost.id='brUnifiedTrayGhost';ghost.setAttribute('aria-hidden','true');
  document.body.appendChild(ghost);
  const html=document.documentElement;
  let raf=0,dirty=true,dimensions=null,lastState='';
  const clamp=n=>Math.max(0,Math.min(1,n));
  const lerp=(a,b,t)=>a+(b-a)*t;
  function waypoint(el){
    const r=el.getBoundingClientRect();
    return {x:r.left+window.scrollX,y:r.top+window.scrollY,w:r.width,h:r.height};
  }
  function recalc(){
    const b=waypoint(combo),c=waypoint(drink);
    const ketchup=document.getElementById('ketchup');
    const k=waypoint(ketchup||hero);
    const vh=window.innerHeight||800,vw=window.innerWidth||1400;
    const startingWidth=Math.min(vw<720?vw*.44:vw*.22,vw<720?230:335);
    // Enter at the marked X near the upper-right of the ketchup scene.
    // Stay in the right-hand visual corridor while the photos and copy scroll by.
    const a={
      x:Math.max(8,vw*(vw<720?.60:.79)-startingWidth/2),
      y:k.y+vh*(vw<720?.27:.20),
      w:startingWidth,h:startingWidth*.69
    };
    const firstStart=Math.max(0,k.y-vh*.24);
    const firstEnd=Math.max(firstStart+vh*.75,b.y-vh*.54);
    const secondStart=Math.max(firstEnd+8,b.y+b.h-vh*.64);
    const secondEnd=Math.max(secondStart+vh*.42,c.y-vh*.48);
    dimensions=[
      {from:a,to:b,start:firstStart,end:firstEnd},
      {from:b,to:c,start:secondStart,end:secondEnd}
    ];
  }
  function syncVisual(index){
    const wasEmpty=!combo.classList.contains('is-filled');
    if(wasEmpty)trayButton.click();
    const clone=combo.cloneNode(true);
    clone.removeAttribute('id');
    clone.querySelectorAll('[id]').forEach(el=>el.removeAttribute('id'));
    clone.querySelector('.br-tray-placeholder')?.remove();
    ghost.replaceChildren(clone);
    if(index===1){
      const can=drink.querySelector('.br-drink-can-on-tray');
      if(can)clone.append(can.cloneNode(true));
    }
    dirty=false;
  }
  function hideFlight(){
    html.classList.remove('br-flight-from-hero','br-flight-from-combo');
    ghost.style.visibility='hidden';ghost.style.opacity='0';lastState='';
  }
  function update(){
    if(prefersReduced){hideFlight();return;}
    if(!dimensions)recalc();
    const scroll=window.scrollY;
    let current=null,index=-1,t=0;
    for(let i=0;i<dimensions.length;i++){
      const leg=dimensions[i];
      if(scroll>leg.start&&scroll<leg.end){
        current=leg;index=i;t=clamp((scroll-leg.start)/(leg.end-leg.start));break;
      }
    }
    if(!current||!current.from.w||!current.to.w){hideFlight();return;}
    if(dirty||!ghost.firstElementChild)syncVisual(index);
    const ease=t*t*(3-2*t);
    const swing=Math.sin(2*Math.PI*ease)*Math.sin(Math.PI*ease);
    const a=current.from,b=current.to;
    const w=lerp(a.w,b.w,ease),h=lerp(a.h,b.h,ease);
    const pathProgress=index===0?Math.pow(ease,2.65):ease;
    const centerX=lerp(a.x+a.w/2,b.x+b.w/2,pathProgress)
      +swing*Math.min(window.innerWidth*(index===0?.025:.065),index===0?25:65);
    const top=lerp(a.y,b.y,ease)-scroll-Math.sin(Math.PI*ease)*27;
    const state=index===0?'br-flight-from-hero':'br-flight-from-combo';
    if(state!==lastState){
      html.classList.remove('br-flight-from-hero','br-flight-from-combo');
      html.classList.add(state);lastState=state;
    }
    Object.assign(ghost.style,{
      visibility:'visible',opacity:'1',
      left:(centerX-w/2)+'px',top:top+'px',width:w+'px',height:h+'px',
      transform:'rotate('+(swing*6)+'deg)'
    });
  }
  function queue(){if(raf)return;raf=requestAnimationFrame(()=>{raf=0;update()});}
  window.addEventListener('scroll',queue,{passive:true});
  window.addEventListener('resize',()=>{dimensions=null;queue()},{passive:true});
  window.addEventListener('load',()=>{dimensions=null;queue()},{once:true});
  if(typeof ResizeObserver!=='undefined'){
    const resize=new ResizeObserver(()=>{dimensions=null;queue()});
    resize.observe(hero);resize.observe(combo);resize.observe(drink);
  }
  // Refresh only when the user modifies the burger or accompanying food.
  let mutationFrame=0;
  const observer=new MutationObserver(()=>{
    if(mutationFrame)return;
    mutationFrame=requestAnimationFrame(()=>{
      mutationFrame=0;dirty=true;dimensions=null;
      if(typeof window.__brasaRefreshBeverageTray==='function') window.__brasaRefreshBeverageTray();
      queue();
    });
  });
  observer.observe(combo,{attributes:true,attributeFilter:['class','style','src'],subtree:true,childList:true});
  const beverageObserver=new MutationObserver(()=>{dirty=true;queue()});
  beverageObserver.observe(drink,{attributes:true,attributeFilter:['class','style','src'],subtree:true,childList:true});
  const ingredients=document.getElementById('burgerPieces');
  if(ingredients)observer.observe(ingredients,{attributes:true,attributeFilter:['class','style','src'],subtree:true,childList:true});
  requestAnimationFrame(()=>{recalc();update()});
})();

/* BRASA V8: scroll handwriting and simplified controls. */
(() => {
  const ketchup=document.querySelector('#ketchup .ketchup-screen');
  const section=document.getElementById('ketchup');
  if(!section)return;
  const style=document.createElement('style');
  style.id='brasa-v8-refinements';
  style.textContent="\n/* BRASA — V8 smooth tray handoff, cursive SMASH, brand navigation */\n/* The destination stays empty until the flying tray arrives. */\nhtml.br-flight-from-hero #brTrayVisual,\nhtml.br-flight-from-combo #brV4Tray{visibility:hidden!important;opacity:0!important;pointer-events:none!important}\n#brUnifiedTrayGhost{backface-visibility:hidden;transform-style:preserve-3d;translate:0 0;filter:drop-shadow(0 18px 17px rgba(38,4,8,.36))}\n#brUnifiedTrayGhost .br-tray-burger{opacity:1!important;animation:none!important}\n#brUnifiedTrayGhost .br-tray-food.is-selected{opacity:1!important;animation:none!important;transform:translateY(0) scale(1)!important}\n#cursorTrail,#cursorBurger,.cursor-trail{display:none!important;visibility:hidden!important;opacity:0!important}\n:root{scrollbar-color:#f47b2b #360d0d;scrollbar-width:thin}\n::-webkit-scrollbar{width:11px;height:9px}\n::-webkit-scrollbar-track{background:#350e0d}\n::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#ffca50 0%,#fb791e 50%,#8e2715 100%);border:2px solid #350e0d;border-radius:12px}\n::-webkit-scrollbar-thumb:hover{background:linear-gradient(180deg,#ffe08b,#ff8424,#b8401b)}\nhtml,body{cursor:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='32' viewBox='0 0 28 32'%3E%3Cpath d='M3 2v24l6.7-7 4.9 10 4-1.8-4.8-10.1 10-.8Z' fill='%23ffb62c' stroke='%23451709' stroke-width='2' stroke-linejoin='round'/%3E%3C/svg%3E\") 3 2,auto!important}\na,button,[role=\"button\"],input[type=\"button\"],input[type=\"submit\"],[data-combo],.br-v4-can{cursor:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='32' viewBox='0 0 30 32'%3E%3Ccircle cx='13' cy='13' r='10' fill='%23ffcf52' stroke='%2354210b' stroke-width='2'/%3E%3Cpath d='M13 7v12m-6-6h12' stroke='%2364210b' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E\") 13 13,pointer!important}\n#brV4Stage .br-v4-swipe,#brV4Stage .br-v5-counter,#combo .br-combo-footer{display:none!important}\n#combo .br-combo-wrap{padding-bottom:clamp(30px,5vw,65px)!important}\n#brV4Stage .br-v5-carousel-nav{margin-bottom:0}\n#ketchup .br-scroll-smash{position:absolute;z-index:4;top:9.5%;right:5%;width:max-content;max-width:77%;pointer-events:none;white-space:nowrap;transform:rotate(-6deg);transform-origin:50% 50%;opacity:.9;filter:drop-shadow(0 3px 11px rgba(107,14,30,.24))}\n#ketchup .br-scroll-smash-word{display:block;max-width:100%;font:italic 900 clamp(94px,17vw,276px)/.83 'Brush Script MT','Segoe Script','Barlow Condensed',Impact,cursive;letter-spacing:-.055em;color:rgba(255,205,145,.105);-webkit-text-stroke:clamp(1px,.22vw,3px) rgba(255,227,191,.47);text-shadow:3px 5px 0 rgba(122,9,32,.14);clip-path:inset(0 calc(100% - var(--smash-progress,0%)) 0 0)}\n#ketchup .br-scroll-smash::after{content:\"\";display:block;width:85%;height:clamp(3px,.4vw,7px);margin:12px 0 0 7%;background:linear-gradient(90deg,transparent,rgba(255,215,164,.35),rgba(255,230,184,.57),transparent);border-radius:50%;transform:scaleX(var(--smash-fraction,0));transform-origin:left;opacity:.7}\n@media(max-width:800px){#ketchup .br-scroll-smash{top:13%;right:3%;max-width:87%;transform:rotate(-7deg)}#ketchup .br-scroll-smash-word{font-size:clamp(78px,18vw,155px);-webkit-text-stroke:1.5px rgba(255,227,191,.4)}}\n@media(max-width:600px){#ketchup .br-scroll-smash{top:21%;right:2%;max-width:95%}#ketchup .br-scroll-smash-word{font-size:clamp(66px,21vw,112px)}}\n@media(pointer:coarse){html,body,a,button,[role=\"button\"],input,[data-combo],.br-v4-can{cursor:auto!important}}\n@media(prefers-reduced-motion:reduce){#ketchup .br-scroll-smash-word{clip-path:none!important}#ketchup .br-scroll-smash{--smash-fraction:1!important}}\n";
  document.head.appendChild(style);
  document.querySelector('#combo .br-combo-footer')?.remove();
  document.querySelector('#brV4Stage .br-v4-swipe')?.remove();
  // Keep the counter node for the carousel's screen-reader state, but visually hide it.
  document.querySelector('#brV5Counter')?.setAttribute('aria-hidden','true');
  if(!ketchup)return;
  const word=document.createElement('div');
  word.className='br-scroll-smash';
  word.setAttribute('aria-hidden','true');
  const letters=document.createElement('span');
  letters.className='br-scroll-smash-word';
  letters.textContent='SMASH';
  word.appendChild(letters);
  ketchup.appendChild(word);
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let frame=0;
  function update(){
    frame=0;
    if(reduced){word.style.setProperty('--smash-progress','100%');word.style.setProperty('--smash-fraction','1');return}
    const top=section.getBoundingClientRect().top+window.scrollY;
    const viewport=window.innerHeight||850;
    const progress=Math.max(0,Math.min(1,(window.scrollY-top+viewport*.08)/(viewport*.92)));
    const smooth=progress*progress*(3-2*progress);
    word.style.setProperty('--smash-progress',(smooth*100).toFixed(2)+'%');
    word.style.setProperty('--smash-fraction',String(smooth));
  }
  function schedule(){if(!frame)frame=requestAnimationFrame(update)}
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule,{passive:true});
  update();
})();
