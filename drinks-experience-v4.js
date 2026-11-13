/* BRASA — Cinematic interactive beverage experience, preserving original combo builder. */
(() => {
  'use strict';
  const root = document.getElementById('combo');
  const launcher = document.getElementById('brChooseDrink');
  if (!root || !launcher || document.getElementById('brV4Stage')) return;

  const options = [
    { key: 'cola', label: 'Cola', color: '#f24a26', accent: '#ffb04e', dark: '#400506', image: '/assets/brasa_refrigerante_cola.webp' },
    { key: 'laranja', label: 'Laranja', color: '#fa931b', accent: '#ffe072', dark: '#6a1806', image: '/assets/brasa_refrigerante_laranja.webp' },
    { key: 'uva', label: 'Uva', color: '#9138bd', accent: '#eb9bfa', dark: '#28083d', image: '/assets/brasa_refrigerante_uva.webp' },
    { key: 'limao', label: 'Limão', color: '#63bc29', accent: '#d6ef82', dark: '#153b12', image: '/assets/brasa_refrigerante_limao.webp' }
  ];
  const styles = `
  .br-combo #brV4Stage{display:none}
  .br-combo.is-drink-stage>.br-combo-wrap{display:none!important}
  .br-combo.is-drink-stage>.br-drink-washes{opacity:0!important}
  .br-combo.is-drink-stage{background:#3c0606!important}
  .br-combo.is-drink-stage #brV4Stage{display:block}
  #brV4Stage{--v4-red:#e33421;--v4-accent:#ffb249;--v4-dark:#400505;position:relative;isolation:isolate;overflow:hidden;min-height:850px;color:#fff3d3;background:var(--v4-dark);transition:background 850ms ease}
  #brV4Stage::before{content:'';position:absolute;inset:0;z-index:-3;background:radial-gradient(ellipse 46% 63% at 75% 46%,var(--v4-red),transparent 78%),radial-gradient(ellipse 60% 56% at 3% 74%,#c12713a3,transparent 80%),linear-gradient(110deg,#230403,var(--v4-dark) 62%,#1e0204);transition:background 750ms ease;pointer-events:none}
  #brV4Stage::after{content:'';position:absolute;z-index:-2;pointer-events:none;left:22%;bottom:-18%;width:120%;height:38%;border-radius:50%;border-top:3px solid var(--v4-accent);background:radial-gradient(ellipse at 50% 0%,var(--v4-red),transparent 64%);filter:blur(13px);transform:rotate(-11deg);opacity:.83;transition:background 800ms ease,border-color 800ms ease}
  #brV4Stage .br-v4-glow{position:absolute;z-index:-1;pointer-events:none;left:49%;top:16%;width:62%;height:70%;background:radial-gradient(ellipse, var(--v4-red) 0%,transparent 70%);filter:blur(65px);opacity:.48;animation:br-v4-breathe 6s ease-in-out infinite alternate}
  @keyframes br-v4-breathe{from{transform:scale(.9);opacity:.42}to{transform:scale(1.1);opacity:.7}}
  #brV4Stage .br-v4-shell{width:min(100% - 6.5vw,1530px);margin:auto;position:relative;padding:34px 0 36px;z-index:1}
  #brV4Stage .br-v4-top{display:flex;align-items:center;justify-content:space-between;gap:22px;position:relative;z-index:15}
  #brV4Stage .br-v4-brand{display:flex;align-items:center;gap:9px;font:900 32px/.86 'Barlow Condensed',Impact,sans-serif;letter-spacing:-.02em;color:#fff2d8}
  #brV4Stage .br-v4-brand strong{font-weight:900}
  #brV4Stage .br-v4-brand small{display:block;font:800 9px/1.2 Inter,Arial,sans-serif;letter-spacing:.33em;margin-top:6px;text-align:center}
  #brV4Stage .br-v4-flame{font:800 35px/1 Arial,sans-serif;color:#fb7426}
  #brV4Stage .br-v4-progress{display:flex;align-items:center;gap:clamp(15px,2vw,36px);font:700 11px/1.4 Inter,Arial,sans-serif;color:#fcebd0}
  #brV4Stage .br-v4-progress span{display:inline-flex;align-items:center;gap:9px;white-space:nowrap}
  #brV4Stage .br-v4-progress i{font:800 14px/1 Inter,Arial,sans-serif;font-style:normal;display:grid;place-items:center;width:27px;height:27px;flex:none;border:1px solid #ffe2a3;border-radius:50%;background:#fff4d515;color:#ffe5af}
  #brV4Stage .br-v4-progress .is-current i{background:#ffd16c;color:#4a170c;border-color:#ffcf5e;box-shadow:0 0 24px #f77f2a79}
  #brV4Stage .br-v4-back{color:#fff1d0;border:1.4px solid #ffdfaa96;border-radius:99px;background:#2b070350;padding:11px 19px;font:900 11px/1.2 Inter,Arial,sans-serif;letter-spacing:.055em;cursor:pointer;transition:background .25s,transform .25s}
  #brV4Stage .br-v4-back:hover{background:#6d1d0f;transform:translateY(-2px)}
  #brV4Stage .br-v4-columns{display:grid;grid-template-columns:minmax(0,.44fr) minmax(0,.56fr);align-items:stretch;gap:0;position:relative;min-height:640px}
  #brV4Stage .br-v4-left{padding:75px 0 0;min-width:0;position:relative;z-index:7}
  #brV4Stage .br-v4-eyebrow{color:#ffc65c;letter-spacing:.37em;font:900 13px/1.4 Inter,Arial,sans-serif}
  #brV4Stage .br-v4-title{font:italic 900 clamp(72px,7.4vw,120px)/.78 'Barlow Condensed',Impact,'Arial Narrow',sans-serif;text-transform:uppercase;letter-spacing:-.028em;margin:20px 0 23px;text-shadow:0 7px 24px #1c030455}
  #brV4Stage .br-v4-title span{display:block;color:#ffc64e}
  #brV4Stage .br-v4-underline{display:block;height:6px;width:52%;margin-top:5px;border-top:4px solid #ffac33;border-radius:50%;transform:rotate(-3deg)}
  #brV4Stage .br-v4-lead{font:500 clamp(17px,1.5vw,23px)/1.4 Inter,Arial,sans-serif;max-width:450px;color:#f6e7d3;margin:23px 0 10px}
  #brV4Stage .br-v4-tray{position:relative;width:min(100%,640px);height:305px;margin:10px 0 0;transform:translateX(-25px);isolation:isolate}
  #brV4Stage .br-v4-tray::before{content:'';position:absolute;z-index:-1;inset:15% 0 0 7%;border-radius:50%;background:radial-gradient(ellipse,#ff721d70,transparent 68%);filter:blur(32px)}
  #brV4Stage .br-v4-tray-base{position:absolute;left:0;bottom:1%;width:100%;height:45%;object-fit:contain;filter:drop-shadow(0 22px 12px #160308a5)}
  #brV4Stage .br-v4-burger{position:absolute;left:50%;bottom:4%;z-index:5;width:440px;height:560px;transform:translateX(-50%) scale(.46);transform-origin:50% 100%;pointer-events:none}
  #brV4Stage .br-v4-burger img{position:absolute;left:50%;transform:translateX(-50%);object-fit:fill;filter:drop-shadow(0 5px 5px #1b03065a)}
  #brV4Stage .br-v4-food{position:absolute;object-fit:contain;filter:drop-shadow(0 14px 8px #1c0205a0);pointer-events:none;z-index:5}
  #brV4Stage .br-v4-food--batata{width:29%;height:55%;left:2%;bottom:12%}
  #brV4Stage .br-v4-food--nuggets{width:28%;height:31%;right:3%;bottom:17%}
  #brV4Stage .br-v4-food--onion{width:27%;height:24%;right:4%;bottom:6%;z-index:7}
  #brV4Stage .br-v4-tray-lip{position:absolute;left:0;bottom:1%;width:100%;height:45%;object-fit:contain;clip-path:inset(81% 0 0 0);z-index:8;pointer-events:none}
  #brV4Stage .br-v4-tray-caption{font:850 11px/1.4 Inter,Arial,sans-serif;color:#ffc66a;letter-spacing:.08em;white-space:normal;margin:0 0 4px}
  #brV4Stage .br-v4-right{position:relative;min-width:0;z-index:3;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:8px 0 0}
  #brV4Stage .br-v4-display{position:relative;width:100%;height:515px;flex:none;touch-action:pan-y;user-select:none;cursor:grab;isolation:isolate;outline-offset:-3px}
  #brV4Stage .br-v4-display:active{cursor:grabbing}
  #brV4Stage .br-v4-display::before{content:'';position:absolute;left:24%;bottom:12px;width:55%;height:27px;border-radius:50%;background:radial-gradient(ellipse,var(--v4-accent) 0%,var(--v4-red) 25%,transparent 74%);filter:blur(13px);opacity:.96}
  #brV4Stage .br-v4-display::after{content:'';position:absolute;left:37%;bottom:0;width:31%;height:20px;border:3px solid var(--v4-accent);border-radius:50%;box-shadow:0 0 16px var(--v4-accent),inset 0 0 12px var(--v4-accent);opacity:.95;transition:border-color .7s,box-shadow .7s}
  #brV4Stage .br-v4-can{position:absolute;left:var(--pos);top:51%;width:clamp(170px,21vw,340px);height:490px;z-index:var(--layer);transform:translate(-50%,-50%) scale(var(--scale)) rotate(var(--tilt));opacity:var(--opacity);filter:blur(var(--blur)) drop-shadow(0 18px 10px #1d02068b);transition:left .82s cubic-bezier(.2,.9,.2,1),transform .82s cubic-bezier(.2,.9,.2,1),opacity .7s ease,filter .7s ease;pointer-events:none;will-change:transform,left}
  #brV4Stage .br-v4-can img{width:100%;height:100%;object-fit:contain;display:block;filter:saturate(1.09) contrast(1.06)}
  #brV4Stage .br-v4-can.is-active img{filter:saturate(1.18) contrast(1.08) drop-shadow(0 0 12px #ffc86b33)}
  #brV4Stage .br-v4-can.is-active{animation:br-v4-hover 4s ease-in-out infinite alternate}
  @keyframes br-v4-hover{0%,100%{translate:0 0}50%{translate:0 -9px}}
  #brV4Stage .br-v4-arrow{position:absolute;z-index:12;top:47%;transform:translateY(-50%);width:46px;height:46px;display:grid;place-items:center;border:1.5px solid #ffca77;border-radius:50%;background:#350703c2;color:#fff2d4;cursor:pointer;font-size:22px;transition:background .24s,transform .24s,box-shadow .24s}
  #brV4Stage .br-v4-arrow:hover{background:#e44b19;box-shadow:0 0 25px #ff9a436e;transform:translateY(-50%) scale(1.12)}
  #brV4Stage .br-v4-prev{left:2%}#brV4Stage .br-v4-next{right:0}
  #brV4Stage .br-v4-flavors{display:flex;align-items:center;justify-content:center;gap:9px;flex-wrap:wrap;margin:-12px 0 0;position:relative;z-index:14}
  #brV4Stage .br-v4-pill{--pill:#ffad35;display:flex;align-items:center;justify-content:center;gap:10px;min-width:104px;border:1.4px solid var(--pill);background:#2a02065c;color:#ffeecb;border-radius:40px;padding:10px 16px;cursor:pointer;font:900 13px/1.2 Inter,Arial,sans-serif;transition:background .3s,box-shadow .3s,transform .3s,border-color .3s}
  #brV4Stage .br-v4-pill::before{content:'';width:12px;height:12px;flex:none;background:var(--pill);border-radius:50%;box-shadow:0 0 8px var(--pill)}
  #brV4Stage .br-v4-pill[aria-pressed=true]{background:#aa2b1a60;box-shadow:0 0 0 2px var(--pill),0 0 28px var(--pill);transform:translateY(-2px)}
  #brV4Stage .br-v4-pill:hover{transform:translateY(-3px);background:#9b2d1775}
  #brV4Stage .br-v4-dots{display:flex;justify-content:center;gap:12px;align-items:center;margin:16px 0 0;z-index:9;position:relative}
  #brV4Stage .br-v4-dot{appearance:none;border:0;background:#ffffff54;height:8px;width:8px;padding:0;border-radius:99px;cursor:pointer;transition:width .3s,background .3s,box-shadow .3s}
  #brV4Stage .br-v4-dot[aria-current=true]{background:var(--v4-accent);width:25px;box-shadow:0 0 12px var(--v4-accent)}
  #brV4Stage .br-v4-swipe{display:block;text-align:center;font:italic 500 11px/1.4 Inter,Arial,sans-serif;color:#f2cb9f;margin:10px 0 0}
  #brV4Stage .br-v4-footer{display:flex;justify-content:center;align-items:center;margin:7px 0 0;position:relative;z-index:15}
  #brV4Stage .br-v4-confirm{display:flex;align-items:center;justify-content:space-between;gap:22px;min-width:min(520px,90%);min-height:68px;border:1.5px solid #fff0ba;border-radius:80px;background:linear-gradient(108deg,#fff0bd,#ffc969);color:#4b170b;cursor:pointer;padding:8px 9px 8px 42px;box-shadow:0 13px 38px #14010588;font:900 clamp(17px,2vw,26px)/1 'Barlow Condensed',Impact,sans-serif;text-transform:uppercase;letter-spacing:.02em;transition:transform .3s,background .3s}
  #brV4Stage .br-v4-confirm:hover{transform:translateY(-5px);background:#ffedb7}
  #brV4Stage .br-v4-confirm i{width:50px;height:50px;border-radius:50%;background:#591e0e;color:#ffcf68;display:grid;place-items:center;font:400 25px Arial,sans-serif}
  #brV4Stage .br-v4-status{text-align:center;color:#fcd79f;font:700 12px/1.5 Inter,Arial,sans-serif;min-height:18px;margin:13px 0 0}
  @media(max-width:1120px){#brV4Stage .br-v4-progress{display:none}#brV4Stage .br-v4-shell{width:calc(100% - 40px)}#brV4Stage .br-v4-left{padding-top:85px}#brV4Stage .br-v4-tray{height:285px}#brV4Stage .br-v4-display{height:500px}#brV4Stage .br-v4-can{height:450px;width:clamp(150px,23vw,280px)}#brV4Stage .br-v4-pill{min-width:0}}
  @media(max-width:760px){#brV4Stage .br-v4-shell{width:calc(100% - 32px);padding:24px 0 35px}#brV4Stage .br-v4-brand{font-size:27px}#brV4Stage .br-v4-back{font-size:10px}#brV4Stage .br-v4-columns{display:flex;flex-direction:column;min-height:0}#brV4Stage .br-v4-left{padding:36px 0 0}#brV4Stage .br-v4-title{font-size:clamp(72px,17vw,120px);margin:15px 0}#brV4Stage .br-v4-lead{font-size:16px;max-width:340px;margin:20px 0 0}#brV4Stage .br-v4-tray{display:none}#brV4Stage .br-v4-tray-caption{display:none}#brV4Stage .br-v4-right{padding-top:0}#brV4Stage .br-v4-display{height:min(100vw,510px);min-height:360px}#brV4Stage .br-v4-can{width:min(44vw,255px);height:95%;top:49%}#brV4Stage .br-v4-prev{left:0}#brV4Stage .br-v4-next{right:0}#brV4Stage .br-v4-flavors{margin-top:-2px;gap:7px}#brV4Stage .br-v4-pill{padding:10px 11px;font-size:12px}#brV4Stage .br-v4-pill::before{width:10px;height:10px}#brV4Stage .br-v4-footer{margin-top:26px}#brV4Stage .br-v4-confirm{padding-left:24px;min-height:62px}#brV4Stage .br-v4-confirm i{width:44px;height:44px}}
  @media(max-width:425px){#brV4Stage .br-v4-display{height:372px;min-height:372px}#brV4Stage .br-v4-title{font-size:clamp(68px,17vw,85px)}#brV4Stage .br-v4-pill{flex:1 1 41%;font-size:12px}#brV4Stage .br-v4-arrow{width:36px;height:36px}#brV4Stage .br-v4-can{width:52vw;height:97%}#brV4Stage .br-v4-swipe{margin-top:7px}}
  @media(prefers-reduced-motion:reduce){#brV4Stage *,#brV4Stage::before,#brV4Stage::after{animation:none!important;transition:none!important}}
  `;
  const style = document.createElement('style');
  style.id = 'brasa-beverage-v4-style';
  style.textContent = styles;
  document.head.appendChild(style);

  root.insertAdjacentHTML('beforeend', `
  <section id="brV4Stage" aria-label="Escolhe a tua bebida" data-flavor="cola">
    <div class="br-v4-glow" aria-hidden="true"></div>
    <div class="br-v4-shell">
      <div class="br-v4-top">
        <div class="br-v4-brand"><span class="br-v4-flame" aria-hidden="true">♨</span><div><strong>BRASA.</strong><small>— BURGER —</small></div></div>
        <div class="br-v4-progress" aria-label="Etapa 3 de 3"><span><i>✓</i> Monta o teu smash</span><span><i>✓</i> Escolhe acompanhamentos</span><span class="is-current"><i>3</i> Escolhe a bebida</span></div>
        <button type="button" class="br-v4-back" id="brV4Back">← VOLTAR AOS ITENS</button>
      </div>
      <div class="br-v4-columns">
        <div class="br-v4-left">
          <span class="br-v4-eyebrow">QUASE LÁ!</span>
          <h2 class="br-v4-title">ESCOLHE A TUA <span>BEBIDA.</span><i class="br-v4-underline" aria-hidden="true"></i></h2>
          <p class="br-v4-lead">Quatro sabores. Escolhe o que combina melhor com <strong>o teu smash.</strong></p>
          <div class="br-v4-tray" id="brV4Tray" aria-label="O teu combo com o smash e os acompanhamentos"></div>
          <div class="br-v4-tray-caption" id="brV4TrayCaption">O TEU COMBO, DO TEU JEITO.</div>
        </div>
        <div class="br-v4-right">
          <div class="br-v4-display" id="brV4Display" tabindex="0" role="group" aria-label="Carrossel de refrigerantes: arrasta para mudar de sabor">
            ${options.map(drink => `<div class="br-v4-can" data-can="${drink.key}" aria-hidden="true"><img src="${drink.image}" alt="" draggable="false" decoding="async"></div>`).join('')}
            <button class="br-v4-arrow br-v4-prev" id="brV4Prev" type="button" aria-label="Bebida anterior">‹</button>
            <button class="br-v4-arrow br-v4-next" id="brV4Next" type="button" aria-label="Próxima bebida">›</button>
          </div>
          <div class="br-v4-flavors" role="group" aria-label="Sabores disponíveis">${options.map(drink => `<button type="button" class="br-v4-pill" style="--pill:${drink.accent}" data-flavor="${drink.key}" aria-pressed="false">${drink.label}</button>`).join('')}</div>
          <div class="br-v4-dots" role="group" aria-label="Selecionar bebida">${options.map((drink, index) => `<button type="button" class="br-v4-dot" data-flavor="${drink.key}" aria-label="${drink.label}, bebida ${index+1} de 4" aria-current="false"></button>`).join('')}</div>
          <div class="br-v4-swipe">← Desliza para descobrir os sabores →</div>
        </div>
      </div>
      <div class="br-v4-footer"><button type="button" id="brV4Confirm" class="br-v4-confirm"><span>CONFIRMAR BEBIDA</span><i aria-hidden="true">↗</i></button></div>
      <p class="br-v4-status" id="brV4Status" role="status" aria-live="polite">COLA SELECIONADA · DESLIZA OU CLICA PARA TROCAR</p>
    </div>
  </section>`);

  const stage = document.getElementById('brV4Stage');
  const display = document.getElementById('brV4Display');
  const confirmation = document.getElementById('brV4Confirm');
  const status = document.getElementById('brV4Status');
  const pills = [...stage.querySelectorAll('.br-v4-pill')];
  const dots = [...stage.querySelectorAll('.br-v4-dot')];
  const cans = [...stage.querySelectorAll('.br-v4-can')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion:reduce)').matches;
  let selectedIndex = 0;
  let confirmed = false;
  const mod = (a,n) => ((a % n) + n) % n;
  const oldTray = document.getElementById('brTrayBurger');
  const oldTrayPanel = document.getElementById('brTrayVisual');
  const foodLabels = { batata:'Batata frita', nuggets:'Nuggets', onion:'Onion rings' };
  const foodSources = { batata:'/assets/brasa_batata_frita.webp', nuggets:'/assets/brasa_nuggets.webp', onion:'/assets/brasa_onion_rings.webp' };

  function updateTray() {
    const tray = document.getElementById('brV4Tray');
    const present = Object.keys(foodLabels).filter(k => oldTrayPanel.querySelector(`.br-tray-food--${k}`)?.classList.contains('is-selected'));
    tray.innerHTML = `<img class="br-v4-tray-base" src="/assets/brasa_bandeja_vazia.webp" alt="Bandeja vermelha BRASA" decoding="async">
      <div class="br-v4-burger" aria-hidden="true">${oldTray?.innerHTML || ''}</div>
      ${present.map(k => `<img class="br-v4-food br-v4-food--${k}" src="${foodSources[k]}" alt="" decoding="async">`).join('')}
      <img class="br-v4-tray-lip" src="/assets/brasa_bandeja_vazia.webp" alt="" aria-hidden="true">`;
    document.getElementById('brV4TrayCaption').textContent = present.length
      ? `SMASH + ${present.map(k=>foodLabels[k]).join(' · ').toUpperCase()}`
      : 'O TEU SMASH JÁ ESTÁ NA BANDEJA.';
  }

  function select(index) {
    selectedIndex = mod(index, options.length);
    const chosen = options[selectedIndex];
    stage.dataset.flavor = chosen.key;
    stage.style.setProperty('--v4-red',chosen.color);
    stage.style.setProperty('--v4-accent',chosen.accent);
    stage.style.setProperty('--v4-dark',chosen.dark);
    // Hero can moves to the foreground; the other three rotate through depth positions.
    cans.forEach((can,i) => {
      const distance = mod(i-selectedIndex, options.length);
      // Main can occupies right foreground; other flavors sit behind it on a depth arc.
      const slot = [
        {pos:'57%',scale:'1.0',tilt:'5deg',opacity:'1',blur:'0px',layer:'5'},
        {pos:'91%',scale:'.57',tilt:'-7deg',opacity:'.71',blur:'1.2px',layer:'2'},
        {pos:'10%',scale:'.46',tilt:'7deg',opacity:'.53',blur:'2px',layer:'1'},
        {pos:'27%',scale:'.67',tilt:'-7deg',opacity:'.78',blur:'.8px',layer:'3'}
      ][distance];
      Object.entries({ '--pos':slot.pos,'--scale':slot.scale,'--tilt':slot.tilt,'--opacity':slot.opacity,'--blur':slot.blur,'--layer':slot.layer }).forEach(([k,v])=>can.style.setProperty(k,v));
      can.classList.toggle('is-active',distance===0);
    });
    pills.forEach(btn => btn.setAttribute('aria-pressed',String(btn.dataset.flavor===chosen.key)));
    dots.forEach(btn => btn.setAttribute('aria-current',String(btn.dataset.flavor===chosen.key)));
    confirmed = false;
    confirmation.querySelector('span').textContent = 'CONFIRMAR BEBIDA';
    status.textContent = `${chosen.label.toUpperCase()} SELECIONADA · DESLIZA OU CLICA PARA TROCAR`;
    // Preserve selection state even if the user navigates back to accompaniments.
  }

  pills.forEach(btn=>btn.addEventListener('click',()=>select(options.findIndex(x=>x.key===btn.dataset.flavor))));
  dots.forEach(btn=>btn.addEventListener('click',()=>select(options.findIndex(x=>x.key===btn.dataset.flavor))));
  stage.querySelector('#brV4Prev').addEventListener('click',()=>select(selectedIndex-1));
  stage.querySelector('#brV4Next').addEventListener('click',()=>select(selectedIndex+1));
  confirmation.addEventListener('click',()=>{
    const drink = options[selectedIndex];
    const originalButton = root.querySelector(`.br-drink-card[data-drink="${drink.key}"]`);
    originalButton?.click();
    confirmed = true;
    confirmation.querySelector('span').textContent = 'BEBIDA CONFIRMADA ✓';
    status.textContent = `${drink.label.toUpperCase()} ADICIONADA AO TEU COMBO. PODES TROCAR DE SABOR.`;
  });
  stage.querySelector('#brV4Back').addEventListener('click',()=>{
    document.getElementById('brBackToExtras')?.click();
    root.classList.remove('is-drink-stage');
  });
  // Pointer events cover touch and mouse drags; the swipe threshold prevents accidental changes.
  let startX=null, startY=null;
  display.addEventListener('pointerdown',(event)=>{
    if(event.target.closest('button'))return;
    startX=event.clientX;startY=event.clientY;
  });
  display.addEventListener('pointerup',(event)=>{
    if(startX===null)return;
    const dx=event.clientX-startX,dy=event.clientY-startY;
    startX=null;startY=null;
    if(Math.abs(dx)>44 && Math.abs(dx)>Math.abs(dy)*1.15) select(selectedIndex+(dx<0?1:-1));
  });
  display.addEventListener('pointercancel',()=>{startX=null;startY=null});
  display.addEventListener('keydown',(event)=>{
    if(event.key==='ArrowRight'||event.key==='ArrowLeft') {event.preventDefault();select(selectedIndex+(event.key==='ArrowRight'?1:-1));}
  });
  launcher.addEventListener('click',()=>{
    updateTray();
    const already = root.querySelector('.br-drink-card[aria-pressed="true"]')?.dataset.drink;
    const found = options.findIndex(x=>x.key===already);
    select(found<0 ? selectedIndex : found);
    root.classList.add('is-drink-stage');
    root.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'start'});
  });
  select(0);
})();