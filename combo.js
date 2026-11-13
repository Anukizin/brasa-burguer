/* BRASA — Real-product combo tray. Uses the original site's burger layers. */
(function () {
  'use strict';
  const root = document.getElementById('combo');
  if (!root) return;

  const styles = `
  .combo-section.br-combo{background:linear-gradient(135deg,#ffe16a 0%,#ffc641 45%,#ff941e 100%);isolation:isolate;position:relative;overflow:hidden;color:#4b1b0a}
  .combo-section.br-combo::before{content:"";position:absolute;inset:-10px -5% auto;z-index:0;height:clamp(190px,25vw,360px);background:linear-gradient(180deg,#ab1631 0%,rgba(196,31,45,.86) 17%,rgba(239,84,39,.50) 49%,transparent 99%);filter:blur(30px);pointer-events:none}
  .combo-section.br-combo::after{content:"";position:absolute;z-index:0;inset:0;pointer-events:none;background:radial-gradient(ellipse at 90% 35%,rgba(255,239,152,.34),transparent 40%)}
  .br-combo-wrap{position:relative;z-index:1;width:min(calc(100% - 8vw),1440px);margin:0 auto;padding:clamp(140px,19vw,248px) 0 54px}
  .br-combo-heading{display:flex;gap:35px;justify-content:space-between;align-items:end;margin-bottom:40px}
  .br-combo-title-area{max-width:920px}
  .br-combo-eyebrow{display:inline-flex;gap:11px;align-items:center;font:900 12px/1.4 'Inter',Arial,sans-serif;letter-spacing:.19em;text-transform:uppercase;color:#742508}
  .br-combo-eyebrow::before{content:"";height:8px;width:8px;border-radius:50%;background:#80250b;box-shadow:0 0 0 5px #8e301c22}
  .br-combo-heading h2{font:900 clamp(76px,9.7vw,150px)/.78 'Barlow Condensed',Impact,sans-serif;letter-spacing:-.035em;text-transform:uppercase;margin:24px 0 0;color:#582008}
  .br-combo-heading h2 span{color:#fff3bd;text-shadow:0 4px 1px #812b1d27;-webkit-text-stroke:1px #87370d50}
  .br-combo-heading p{margin:0 0 5px;max-width:300px;color:#704021;font-size:17px;line-height:1.6;font-weight:650}
  .br-combo-heading p strong{color:#51200c}
  .br-combo-main{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(385px,1fr);gap:18px;align-items:stretch}
  .br-combo-choices{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
  .br-combo-choice{appearance:none;position:relative;isolation:isolate;display:flex;flex-direction:column;justify-content:space-between;text-align:left;cursor:pointer;color:#54200b;background:linear-gradient(140deg,#fff0b2,#ffcf61 75%,#ffad36);border:1.5px solid rgba(255,247,198,.9);border-radius:20px;padding:22px 22px 21px;min-height:292px;overflow:hidden;box-shadow:0 11px 0 #b75d171f,0 18px 30px #ab5b1a23;transition:transform .32s cubic-bezier(.2,1,.3,1),border-color .3s,box-shadow .3s}
  .br-combo-choice:hover{transform:translateY(-6px);box-shadow:0 14px 0 #b75d171b,0 26px 42px #8f451d2e}
  .br-combo-choice:focus-visible,.br-tray-button:focus-visible{outline:3px solid #62210a;outline-offset:4px}
  .br-combo-choice[aria-pressed=true]{border-color:#68260c;box-shadow:inset 0 0 0 3px #6c2a10,0 15px 27px #9947182b}
  .br-combo-category{position:relative;z-index:3;font:900 10px/1.2 'Inter',Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase}
  .br-combo-card-photo{position:absolute;z-index:1;display:block;object-fit:contain;pointer-events:none;filter:drop-shadow(0 16px 12px #803d122b);transition:transform .38s cubic-bezier(.2,1,.3,1)}
  .br-combo-choice:hover .br-combo-card-photo{transform:translateY(-7px) rotate(-2deg) scale(1.045)}
  .br-combo-choice[data-combo=batata] .br-combo-card-photo{width:55%;height:66%;right:4%;top:10%}
  .br-combo-choice[data-combo=nuggets] .br-combo-card-photo{width:73%;height:61%;right:-5%;top:10%}
  .br-combo-choice[data-combo=onion] .br-combo-card-photo{width:75%;height:60%;right:-6%;top:13%}
  .br-combo-choice-copy{position:relative;z-index:3;display:flex;align-items:end;justify-content:space-between;gap:12px;margin-top:auto}
  .br-combo-choice-copy strong{display:block;font:900 clamp(31px,3.45vw,56px)/.83 'Barlow Condensed',Impact,sans-serif;letter-spacing:-.02em}
  .br-combo-choice-copy small{display:block;font:650 11px/1.35 'Inter',Arial,sans-serif;margin-top:11px;color:#865126}
  .br-combo-plus{height:43px;width:43px;flex:none;display:grid;place-items:center;border-radius:50%;background:#5c1d0c;color:#ffcc58;font:400 26px/1 sans-serif;transition:transform .3s,background .3s}
  .br-combo-choice[aria-pressed=true] .br-combo-plus{background:#fff0b7;color:#5a1e0c;transform:rotate(45deg)}
  .br-combo-choice-all{background:linear-gradient(135deg,#7b2610,#45140c 90%);color:#ffdc77;border-color:#9b561e}
  .br-combo-choice-all .br-combo-choice-copy small{color:#efb889}
  .br-combo-all-images{position:absolute;inset:12% 2% 22%;pointer-events:none}
  .br-combo-all-images img{position:absolute;width:52%;height:92%;object-fit:contain;filter:drop-shadow(0 10px 9px #1e080a4d);transition:transform .3s}
  .br-combo-all-images img:nth-child(1){left:8%;top:-6%;transform:rotate(-11deg)}
  .br-combo-all-images img:nth-child(2){right:1%;top:10%;transform:rotate(9deg)}
  .br-combo-all-images img:nth-child(3){left:40%;top:32%;width:47%;height:68%;transform:rotate(-5deg)}
  .br-combo-choice-all:hover .br-combo-all-images img:nth-child(1){transform:rotate(-15deg) translateY(-7px)}
  .br-combo-choice-all:hover .br-combo-all-images img:nth-child(2){transform:rotate(15deg) translateY(-7px)}
  .br-combo-choice-all:hover .br-combo-all-images img:nth-child(3){transform:rotate(0deg) translateY(-8px)}
  .br-combo-choice-all .br-combo-plus{background:#ffce57;color:#5a1e0c}
  .br-combo-choice-all[aria-pressed=true]{border-color:#ffd36d;box-shadow:inset 0 0 0 3px #ffcf5d,0 15px 27px #64280a50}
  .br-tray-panel{position:relative;isolation:isolate;overflow:hidden;border-radius:22px;padding:25px 24px 26px;display:flex;flex-direction:column;min-width:0;min-height:600px;color:#ffe4a3;background:radial-gradient(ellipse at 50% 57%,#8e3615 0%,#5d1d0e 48%,#36100b 100%);box-shadow:0 19px 42px #8431084d}
  .br-tray-panel::before{content:"";position:absolute;z-index:-1;inset:0;background:radial-gradient(ellipse at 52% 58%,#ee7a2020,transparent 52%);pointer-events:none}
  .br-tray-top{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:2px 0 18px;border-bottom:1px solid #ffdc8b4b;font:900 12px/1.3 'Inter',Arial,sans-serif;letter-spacing:.17em}
  .br-tray-subtop{display:flex;flex-wrap:wrap;align-items:center;gap:10px;margin-top:16px;min-height:28px;font:800 10px/1.3 'Inter',Arial,sans-serif;letter-spacing:.1em;color:#ebae70}
  .br-tray-chip{border:1px solid #fed68c5b;color:#fbd18e;border-radius:30px;padding:7px 9px;font:800 10px/1 'Inter',Arial,sans-serif;letter-spacing:0;background:#43160d94}
  .br-tray-visual{height:340px;position:relative;isolation:isolate;margin:12px -10px 12px;min-width:0;overflow:visible}
  .br-tray-light{position:absolute;z-index:-1;left:8%;right:8%;bottom:8%;height:65%;background:radial-gradient(ellipse at center,#ff942a45,transparent 65%);filter:blur(20px)}
  .br-tray-surface{position:absolute;z-index:1;bottom:5%;left:0;width:100%;height:auto;max-height:43%;object-fit:contain;filter:drop-shadow(0 20px 15px #180607ad)}
  .br-tray-placeholder{position:absolute;z-index:2;left:50%;bottom:34%;width:65%;transform:translateX(-50%);text-align:center;font:800 12px/1.6 'Inter',Arial,sans-serif;letter-spacing:.1em;color:#ffe5b17d;transition:opacity .35s}
  .br-tray-placeholder::before{content:"+";display:grid;place-items:center;width:58px;height:58px;margin:0 auto 14px;border-radius:50%;border:1px dashed #ffdb9c99;font-size:30px;font-weight:400}
  .br-tray-visual.is-filled .br-tray-placeholder{opacity:0;pointer-events:none}
  .br-tray-burger{position:absolute;z-index:4;width:440px;height:560px;left:50%;bottom:8%;transform:translateX(-50%) scale(.51);transform-origin:50% 100%;pointer-events:none;opacity:0;transition:opacity .4s ease}
  .br-tray-visual.is-filled .br-tray-burger{opacity:1;animation:br-tray-land .65s cubic-bezier(.19,1,.22,1) both}
  .br-tray-burger img{position:absolute;left:50%;transform:translateX(-50%);object-fit:fill;filter:drop-shadow(0 8px 7px #250a0b6e)}
  .br-tray-food{position:absolute;z-index:5;object-fit:contain;pointer-events:none;opacity:0;transform:translateY(-20px) scale(.85);filter:drop-shadow(0 12px 8px #2c0c0aa9);transition:opacity .38s ease,transform .55s cubic-bezier(.2,1,.3,1)}
  .br-tray-visual.is-filled .br-tray-food.is-selected{opacity:1;transform:translateY(0) scale(1)}
  .br-tray-food--batata{width:30%;height:59%;bottom:18%;left:-1%}
  .br-tray-food--nuggets{width:33%;height:39%;bottom:19%;right:-1%}
  .br-tray-food--onion{width:31%;height:32%;bottom:11%;right:5%;z-index:6}
  .br-tray-button{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;min-height:62px;margin-top:auto;padding:8px 9px 8px 20px;border:1px solid #ffe69b;border-radius:100px;background:linear-gradient(105deg,#ffe190,#e4a33e);color:#541a0b;cursor:pointer;font:900 13px/1.3 'Inter',Arial,sans-serif;letter-spacing:.01em;text-align:left;box-shadow:0 7px 0 #1d06043b;transition:transform .3s,color .3s,background .3s}
  .br-tray-button:hover{transform:translateY(-4px);background:#50200f;color:#ffd465}
  .br-tray-button i{display:grid;place-items:center;width:44px;height:44px;flex:none;border-radius:50%;background:#591f0f;color:#ffce55;font:400 22px/1 sans-serif;transition:background .3s,color .3s}
  .br-tray-button:hover i{background:#ffcf56;color:#55200d}
  .br-tray-status{text-align:center;min-height:17px;margin-top:17px;font:800 10px/1.4 'Inter',Arial,sans-serif;letter-spacing:.11em;color:#f6c688}
  .br-combo-footer{display:flex;justify-content:space-between;gap:16px;align-items:center;margin-top:51px;padding-top:23px;border-top:1px solid #6429164c;font:850 11px/1.3 'Inter',Arial,sans-serif;letter-spacing:.11em}
  .br-combo-footer a{color:inherit;text-decoration:none}.br-combo-footer a:hover{text-decoration:underline}
  @keyframes br-tray-land{from{opacity:0;transform:translateX(-50%) translateY(-60px) scale(.43)}to{opacity:1;transform:translateX(-50%) translateY(0) scale(.51)}}
  @media(max-width:1130px){.br-combo-main{grid-template-columns:minmax(0,1.15fr) minmax(335px,.85fr)}.br-tray-visual{height:315px}.br-tray-burger{transform:translateX(-50%) scale(.46)}@keyframes br-tray-land{from{opacity:0;transform:translateX(-50%) translateY(-55px) scale(.37)}to{opacity:1;transform:translateX(-50%) scale(.46)}}.br-combo-choice{min-height:270px}.br-combo-heading h2{font-size:clamp(72px,9vw,125px)}}
  @media(max-width:860px){.br-combo-main{grid-template-columns:1fr}.br-combo-choices{grid-template-columns:repeat(2,minmax(0,1fr))}.br-tray-panel{min-height:550px}.br-tray-visual{width:min(100%,600px);margin:20px auto;height:360px}.br-tray-burger{transform:translateX(-50%) scale(.56)}@keyframes br-tray-land{from{opacity:0;transform:translateX(-50%) translateY(-55px) scale(.45)}to{opacity:1;transform:translateX(-50%) scale(.56)}}}
  @media(max-width:620px){.br-combo-wrap{width:calc(100% - 30px);padding:170px 0 30px}.br-combo-heading{display:block;margin-bottom:28px}.br-combo-heading h2{font-size:clamp(66px,14vw,102px);margin:20px 0 22px}.br-combo-heading p{max-width:430px;font-size:16px}.br-combo-eyebrow{font-size:10px}.br-combo-choices{gap:10px}.br-combo-choice{min-height:226px;padding:15px 13px 16px;border-radius:16px}.br-combo-category{font-size:9px}.br-combo-choice-copy strong{font-size:clamp(30px,7vw,45px)}.br-combo-choice-copy small{font-size:10px;margin-top:7px}.br-combo-plus{width:31px;height:31px;font-size:23px}.br-combo-choice[data-combo=batata] .br-combo-card-photo{width:67%;right:-2%;top:10%;height:62%}.br-combo-choice[data-combo=nuggets] .br-combo-card-photo,.br-combo-choice[data-combo=onion] .br-combo-card-photo{width:82%;right:-7%}.br-combo-all-images{inset:9% -6% 20%}.br-tray-panel{padding:21px 17px 22px;border-radius:18px;min-height:510px}.br-tray-visual{height:310px;margin:10px -8px}.br-tray-burger{transform:translateX(-50%) scale(.44)}@keyframes br-tray-land{from{opacity:0;transform:translateX(-50%) translateY(-42px) scale(.34)}to{opacity:1;transform:translateX(-50%) scale(.44)}}.br-tray-food--batata{left:-4%;width:34%}.br-tray-food--nuggets{width:34%;right:-2%}.br-tray-food--onion{width:33%;right:3%}.br-combo-footer{font-size:9px}}
  @media(prefers-reduced-motion:reduce){.br-tray-visual.is-filled .br-tray-burger{animation:none}.br-tray-food,.br-combo-choice,.br-tray-button{transition:none!important}}

  /* Beverage step: real isolated product photography, animated flavour-based backdrop. */
  .br-combo .br-drink-washes{position:absolute;inset:0;overflow:hidden;pointer-events:none;z-index:0;opacity:0;transition:opacity .52s ease}
  .br-combo.is-drink-stage .br-drink-washes{opacity:1}
  .br-combo .br-drink-wash{position:absolute;inset:-3%;opacity:0;transition:opacity .7s ease,transform 1.1s cubic-bezier(.25,1,.4,1);transform:scale(1.04);filter:saturate(1.1)}
  .br-combo .br-drink-wash.is-active{opacity:1;transform:scale(1)}
  .br-drink-wash--cola{background:radial-gradient(ellipse at 88% 40%,rgba(255,160,66,.58),transparent 42%),linear-gradient(110deg,#ffbd41,#f07125 42%,#c12514 79%,#6a160d)}
  .br-drink-wash--laranja{background:radial-gradient(ellipse at 83% 25%,rgba(255,245,111,.75),transparent 39%),linear-gradient(120deg,#ffe05b 0%,#ffae21 45%,#ed6d15 81%,#8a3210)}
  .br-drink-wash--uva{background:radial-gradient(ellipse at 87% 20%,rgba(238,170,255,.66),transparent 39%),linear-gradient(110deg,#d58ce0 0%,#9656c7 40%,#622690 80%,#311044)}
  .br-drink-wash--limao{background:radial-gradient(ellipse at 75% 25%,rgba(255,247,123,.77),transparent 43%),linear-gradient(113deg,#f2f18a 0%,#a8d648 46%,#5bb435 82%,#244f1b)}
  .br-combo.is-drink-stage{transition:background .65s ease;background:#5e210d}
  .br-combo.is-drink-stage::before{opacity:.08}
  .br-combo.is-drink-stage::after{opacity:.05}
  .br-combo.is-drink-stage .br-combo-main{grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr);align-items:start;gap:22px}
  .br-combo.is-drink-stage .br-combo-choices{display:none}
  .br-combo.is-drink-stage .br-tray-panel{grid-column:1;min-height:600px;animation:br-card-enter .62s cubic-bezier(.2,1,.3,1) both}
  .br-combo.is-drink-stage .br-combo-heading h2{font-size:clamp(74px,8.1vw,130px)}
  .br-combo.is-drink-stage .br-combo-heading p{color:#461c10}
  .br-combo.is-drink-stage .br-combo-eyebrow{color:#562012}
  .br-drinks-panel{display:none;min-width:0;overflow:hidden;padding:26px 25px 28px;border-radius:23px;min-height:600px;background:linear-gradient(160deg,rgba(68,17,10,.96),rgba(57,14,13,.98));border:1px solid #ffc56d69;box-shadow:0 19px 42px #5b190e58;color:#ffe6b4}
  .br-combo.is-drink-stage .br-drinks-panel{display:flex;flex-direction:column;animation:br-card-enter .7s .08s cubic-bezier(.2,1,.3,1) both}
  @keyframes br-card-enter{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:translateY(0)}}
  .br-drinks-top{display:flex;align-items:center;justify-content:space-between;gap:10px;border-bottom:1px solid #ffd68254;padding-bottom:20px}
  .br-drinks-top span{font:900 12px/1.4 'Inter',Arial,sans-serif;letter-spacing:.17em}
  .br-drinks-back{cursor:pointer;color:#ffcf7a;background:#fff0c014;border:1px solid #ffde9b69;border-radius:100px;padding:9px 14px;font:800 10px/1.3 'Inter',Arial,sans-serif;letter-spacing:.05em;transition:background .25s,color .25s}
  .br-drinks-back:hover{background:#ffd266;color:#4b180c}
  .br-drinks-intro{font:650 14px/1.5 'Inter',Arial,sans-serif;margin:22px 0 19px;color:#f5b879}
  .br-drinks-options{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;flex:1}
  .br-drink-card{position:relative;min-height:325px;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:10px;border-radius:16px;padding:12px 6px 18px;overflow:hidden;cursor:pointer;color:#fff1cb;background:linear-gradient(165deg,rgba(255,224,166,.11),rgba(60,15,12,.5));border:1.5px solid #ffc87256;box-shadow:inset 0 1px #ffefba24;transition:transform .3s cubic-bezier(.2,1,.3,1),border-color .3s,background .3s,box-shadow .3s}
  .br-drink-card::before{content:"";position:absolute;left:10%;right:10%;top:9%;height:68%;z-index:0;border-radius:50%;background:radial-gradient(circle,var(--br-accent-soft),transparent 69%);filter:blur(16px);opacity:.8;pointer-events:none}
  .br-drink-card:hover{transform:translateY(-6px);border-color:#ffe5a8;box-shadow:0 17px 26px #26090778,inset 0 1px #fff5c15f}
  .br-drink-card:focus-visible,.br-drinks-back:focus-visible,.br-pick-drink:focus-visible{outline:3px solid #ffe89a;outline-offset:4px}
  .br-drink-card[aria-pressed=true]{background:linear-gradient(170deg,rgba(255,222,157,.27),rgba(75,16,10,.55));border:2px solid #fff0bc;box-shadow:inset 0 0 0 2px var(--br-accent-soft),0 13px 28px #220807aa}
  .br-drink-card img{position:relative;z-index:1;width:100%;max-width:150px;height:228px;object-fit:contain;filter:drop-shadow(0 14px 12px #1307079c);transform:rotate(-2deg);transition:transform .35s cubic-bezier(.2,1,.3,1)}
  .br-drink-card:hover img,.br-drink-card[aria-pressed=true] img{transform:translateY(-10px) rotate(2deg) scale(1.05)}
  .br-drink-card strong{position:relative;z-index:1;font:900 clamp(15px,1.4vw,22px)/1 'Barlow Condensed',Impact,sans-serif;letter-spacing:.04em;white-space:nowrap}
  .br-drink-check{position:absolute;z-index:2;right:9px;top:10px;width:26px;height:26px;display:grid;place-items:center;border-radius:50%;background:var(--br-accent);color:#48150c;font:900 16px Arial,sans-serif;opacity:0;transform:scale(.6);transition:opacity .25s,transform .25s}
  .br-drink-card[aria-pressed=true] .br-drink-check{opacity:1;transform:scale(1)}
  .br-drink-result{display:flex;align-items:center;justify-content:space-between;gap:15px;min-height:55px;margin-top:22px;padding:13px 16px;border-radius:13px;background:#23090467;border:1px solid #ffca8e36;font:800 11px/1.5 'Inter',Arial,sans-serif;letter-spacing:.08em}
  .br-drink-result strong{font-size:13px;color:#ffe089}
  .br-pick-drink{display:none;align-items:center;justify-content:space-between;gap:12px;width:100%;min-height:59px;margin:12px 0 0;padding:8px 9px 8px 20px;border:1px solid #ffedaf;border-radius:100px;background:linear-gradient(110deg,#ffd97d,#f5a742);color:#511b0a;cursor:pointer;font:900 13px 'Inter',Arial,sans-serif;box-shadow:0 8px 0 #290d0737;transition:transform .3s,background .3s}
  .br-pick-drink:hover{transform:translateY(-3px);background:#ffe8a8}
  .br-pick-drink i{width:42px;height:42px;flex:none;display:grid;place-items:center;border-radius:50%;font:normal 22px Arial,sans-serif;background:#5d1d0e;color:#ffe099}
  .br-pick-drink.is-visible{display:flex}
  .br-combo.is-drink-stage .br-tray-button{display:none}
  .br-combo.is-drink-stage .br-pick-drink{display:none}
  .br-drink-tray-choice{display:none;padding:10px 0;color:#ffdc83;font:900 11px 'Inter',Arial,sans-serif;letter-spacing:.1em}
  .br-drink-tray-choice.is-visible{display:block}
  @media(max-width:1180px){.br-combo.is-drink-stage .br-combo-main{grid-template-columns:minmax(0,.85fr) minmax(0,1.15fr)}.br-drinks-panel{padding:22px 16px}.br-drinks-options{grid-template-columns:repeat(2,minmax(0,1fr))}.br-drink-card{min-height:225px}.br-drink-card img{height:165px}}
  @media(max-width:900px){.br-combo.is-drink-stage .br-combo-main{grid-template-columns:1fr}.br-combo.is-drink-stage .br-tray-panel{grid-column:auto;min-height:540px}.br-combo.is-drink-stage .br-drinks-panel{min-height:0}.br-drinks-options{grid-template-columns:repeat(4,minmax(0,1fr))}.br-drink-card{min-height:260px}.br-drink-card img{height:195px}}
  @media(max-width:620px){.br-combo.is-drink-stage .br-combo-heading h2{font-size:clamp(65px,13vw,94px)}.br-combo.is-drink-stage .br-tray-panel{min-height:485px}.br-drinks-options{grid-template-columns:repeat(2,minmax(0,1fr))}.br-drink-card{min-height:230px}.br-drink-card img{height:167px}.br-drinks-back{font-size:9px;padding:8px 9px}.br-drinks-panel{padding:19px 13px}.br-drink-result{font-size:10px}}
  @media(prefers-reduced-motion:reduce){.br-combo .br-drink-wash,.br-drink-card,.br-drink-card img,.br-combo.is-drink-stage .br-tray-panel,.br-combo.is-drink-stage .br-drinks-panel{transition:none!important;animation:none!important}}

  /* BRASA / visual polish v3 — drinks without cards, tray with grounded items */
  .br-combo.is-drink-stage{background:linear-gradient(120deg,#ffd45e,#ffaf31 53%,#e97021);transition:background 1s ease}
  .br-combo .br-drink-washes{inset:0;z-index:0;opacity:0;transition:opacity .75s ease}
  .br-combo.is-drink-stage .br-drink-washes{opacity:1}
  .br-combo .br-drink-wash{inset:-1%;will-change:opacity;transition:opacity .85s cubic-bezier(.25,.1,.25,1)}
  .br-drink-wash--cola{background:radial-gradient(ellipse at 72% 26%,#ffac68 0%,transparent 49%),linear-gradient(120deg,#ffd05c 0%,#f36b2a 43%,#aa1e20 76%,#541024 100%)}
  .br-drink-wash--laranja{background:radial-gradient(ellipse at 73% 23%,#ffefa0 0%,transparent 50%),linear-gradient(115deg,#ffe368 0%,#ffb22c 44%,#fa7b1c 79%,#b13d13 100%)}
  .br-drink-wash--uva{background:radial-gradient(ellipse at 77% 19%,#dc9bff 0%,transparent 52%),linear-gradient(112deg,#e2a0df 0%,#af67c2 36%,#652782 76%,#311146 100%)}
  .br-drink-wash--limao{background:radial-gradient(ellipse at 72% 24%,#f4f8ab 0%,transparent 47%),linear-gradient(116deg,#e3ea8b 0%,#acd24b 42%,#66b336 78%,#27601f 100%)}
  .br-combo.is-drink-stage .br-drinks-panel{background:transparent!important;border:0!important;box-shadow:none!important;border-radius:0!important;overflow:visible!important;min-height:530px;padding:18px 0 8px;animation:br-drinks-appear .6s .07s both}
  @keyframes br-drinks-appear{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
  .br-drinks-top{border-bottom:1px solid #59201850;padding:0 0 20px;color:#4e1e0d}
  .br-drinks-top span{letter-spacing:.16em}
  .br-drinks-back{background:#62210e1b;color:#4d1e0b;border-color:#67331f67;backdrop-filter:blur(8px)}
  .br-drinks-back:hover{background:#4f190f;color:#ffde8a}
  .br-drinks-intro{color:#542712;font-size:15px;margin:20px 0 10px}
  .br-drinks-options{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;align-items:end;gap:10px;min-height:348px;overflow:visible;flex:1}
  .br-drink-card{appearance:none;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:8px;min-height:338px;padding:9px 2px 21px;overflow:visible!important;cursor:pointer;color:#4a170f;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important;isolation:isolate;opacity:1;transform:none}
  .br-combo.is-drink-stage .br-drink-card{animation:br-drink-rise .86s cubic-bezier(.16,1,.3,1) both;animation-delay:calc(.12s + var(--br-sequence)*.15s)}
  @keyframes br-drink-rise{0%{opacity:0;translate:0 92px;filter:blur(4px)}55%{opacity:1;filter:blur(0)}100%{opacity:1;translate:0 0;filter:none}}
  .br-drink-card::before{content:"";position:absolute;z-index:-1;left:-14%;right:-14%;top:17%;height:69%;background:radial-gradient(ellipse at 50% 57%,var(--br-accent) 0%,var(--br-accent-soft) 28%,transparent 69%);filter:blur(17px);opacity:.12;transform:scale(.72);border-radius:50%;transition:opacity .46s ease,transform .48s cubic-bezier(.18,1,.3,1);pointer-events:none}
  .br-drink-card::after{content:"";position:absolute;z-index:-1;left:15%;right:15%;bottom:60px;height:12px;border-radius:50%;background:#3d130c4b;filter:blur(9px)}
  .br-drink-card:hover::before,.br-drink-card:focus-visible::before,.br-drink-card[aria-pressed=true]::before{opacity:.92;transform:scale(1.19)}
  .br-drink-card[aria-pressed=true]{border:0!important;background:none!important;box-shadow:none!important;color:#2d130c}
  .br-drink-card img{display:block;position:relative;z-index:1;width:min(100%,180px)!important;max-width:180px!important;height:270px!important;object-fit:contain;filter:drop-shadow(0 13px 10px #3913077a);transform:translateY(0) rotate(-1deg) scale(1);transition:transform .52s cubic-bezier(.16,1,.3,1),filter .48s ease;will-change:transform}
  .br-drink-card:hover img,.br-drink-card:focus-visible img,.br-drink-card[aria-pressed=true] img{transform:translateY(-24px) rotate(1deg) scale(1.14);filter:drop-shadow(0 24px 14px #2e0b0780) brightness(1.1) saturate(1.12)}
  .br-drink-card[data-drink=laranja] img{-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 3%,#000 94%,transparent 100%);mask-image:linear-gradient(90deg,transparent 0%,#000 3%,#000 94%,transparent 100%)}
  .br-drink-card[data-drink=limao] img{-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 4%,#000 94%,transparent 100%);mask-image:linear-gradient(90deg,transparent 0%,#000 4%,#000 94%,transparent 100%)}
  .br-drink-card[data-drink=uva] img{-webkit-mask-image:linear-gradient(90deg,transparent 0%,#000 2%,#000 95%,transparent 100%);mask-image:linear-gradient(90deg,transparent 0%,#000 2%,#000 95%,transparent 100%)}
  .br-drink-card strong{display:block;position:relative;z-index:3;margin-top:4px;font:900 clamp(20px,1.8vw,27px)/1 'Barlow Condensed',Impact,sans-serif;letter-spacing:.06em;text-shadow:0 1px 1px #fff3b252;transition:transform .35s,color .35s}
  .br-drink-card:hover strong{transform:translateY(-3px)}
  .br-drink-check{top:15px;right:12px;background:#fff0aa;color:#4b1c10;border:2px solid #5c280d22;box-shadow:0 5px 12px #31120b55}
  .br-drink-result{border:0;border-top:1px solid #6228145c;border-radius:0;background:none!important;padding:17px 0 0;margin-top:17px;color:#4e200f}
  .br-drink-result strong{color:#4a190e;font-size:15px}
  .br-combo.is-drink-stage[data-br-wash=uva] .br-drinks-top,.br-combo.is-drink-stage[data-br-wash=uva] .br-drinks-intro,.br-combo.is-drink-stage[data-br-wash=uva] .br-drink-card,.br-combo.is-drink-stage[data-br-wash=uva] .br-drink-result{color:#fff0da}
  .br-combo.is-drink-stage[data-br-wash=uva] .br-drinks-back{color:#fff1cf;border-color:#ffdca088}
  .br-combo.is-drink-stage[data-br-wash=uva] .br-combo-heading h2{color:#fff1d7}
  .br-combo.is-drink-stage[data-br-wash=uva] .br-combo-heading p,.br-combo.is-drink-stage[data-br-wash=uva] .br-combo-eyebrow{color:#fff1cf}
  .br-combo.is-drink-stage[data-br-wash=uva] .br-drink-result strong{color:#fff1d7}
  .br-combo.is-drink-stage .br-combo-main{grid-template-columns:minmax(0,.92fr) minmax(0,1.08fr);gap:clamp(18px,3vw,40px)}
  .br-tray-visual{height:350px;margin:5px -10px 12px}
  .br-tray-surface{bottom:2%;max-height:41%;width:100%}
  .br-tray-burger{bottom:-1%;z-index:4}
  .br-tray-food--batata{left:5%;bottom:13%;width:25%;height:49%;z-index:5}
  .br-tray-food--nuggets{right:3%;bottom:16%;width:28%;height:28%;z-index:5}
  .br-tray-food--onion{right:5%;bottom:7%;width:28%;height:22%;z-index:6}
  .br-tray-front{position:absolute;z-index:8;pointer-events:none;bottom:2%;left:0;width:100%;height:auto;max-height:41%;object-fit:contain;clip-path:inset(81% 0 0 0);filter:drop-shadow(0 4px 3px #24080b77)}
  .br-tray-visual.is-filled .br-tray-food.is-selected{animation:br-food-settle .5s cubic-bezier(.18,1,.3,1) both}
  @keyframes br-food-settle{from{opacity:0;translate:0 -26px}to{opacity:1;translate:0 0}}
  @media(max-width:1180px){
    .br-combo.is-drink-stage .br-combo-main{grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr)}
    .br-drinks-options{grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:5px}
    .br-drink-card{min-height:280px}
    .br-drink-card img{height:230px!important}
    .br-drinks-panel{padding:10px 0}
  }
  @media(max-width:900px){
    .br-combo.is-drink-stage .br-combo-main{grid-template-columns:1fr}
    .br-combo.is-drink-stage .br-drinks-panel{min-height:350px}
    .br-drinks-options{grid-template-columns:repeat(4,minmax(0,1fr))!important;min-height:290px}
    .br-drink-card{min-height:270px}
    .br-drink-card img{height:222px!important}
    .br-tray-food--batata{width:26%;left:5%}
  }
  @media(max-width:620px){
    .br-tray-visual{height:305px}
    .br-tray-burger{bottom:0}
    .br-tray-food--batata{width:28%;height:44%;bottom:12%;left:2%}
    .br-tray-food--nuggets{width:29%;height:27%;bottom:13%;right:1%}
    .br-tray-food--onion{width:29%;height:22%;bottom:7%;right:3%}
    .br-drinks-options{grid-template-columns:repeat(4,minmax(0,1fr))!important;min-height:230px;gap:0}
    .br-drink-card{min-height:205px;padding:4px 0 13px}
    .br-drink-card img{height:172px!important;max-width:100%!important}
    .br-drink-card strong{font-size:17px}
    .br-drink-check{width:20px;height:20px;font-size:12px;top:2px;right:0}
    .br-drinks-intro{font-size:13px}
    .br-combo.is-drink-stage .br-drinks-panel{padding:0;min-height:290px}
    .br-tray-front{bottom:2%}
  }
  @media(prefers-reduced-motion:reduce){
    .br-combo.is-drink-stage .br-drink-card,.br-drink-card img,.br-drink-wash,.br-tray-food{animation:none!important;transition:none!important}
  }

  `;
  const style = document.createElement('style');
  style.id = 'brasa-combo-tray-style';
  style.textContent = styles;
  document.head.appendChild(style);

  const asset = {
    batata: '/assets/brasa_batata_frita.webp',
    nuggets: '/assets/brasa_nuggets.webp',
    onion: '/assets/brasa_onion_rings.webp',
    tray: '/assets/brasa_bandeja_vazia.webp'
  };
  const cards = [
    {key: 'batata', category: 'CLÁSSICO', title: 'BATATA<br>FRITA.', description: 'Douradinha e crocante.'},
    {key: 'nuggets', category: 'CROCANTE', title: 'NUGGETS.', description: 'Crocantes e suculentos.'},
    {key: 'onion', category: 'IRRESISTÍVEL', title: 'ONION<br>RINGS.', description: 'Empanadas no capricho.'}
  ];
  const photo = (src, cls, alt = '') => `<img class="${cls}" src="${src}" alt="${alt}" loading="lazy" decoding="async">`;
  const cardsHtml = cards.map(item => `<button type="button" class="br-combo-choice" data-combo="${item.key}" aria-pressed="false" aria-label="Adicionar ${item.key === 'batata' ? 'batata frita' : item.key === 'onion' ? 'onion rings' : 'nuggets'} ao combo"><span class="br-combo-category">${item.category}</span>${photo(asset[item.key],'br-combo-card-photo')}<span class="br-combo-choice-copy"><span><strong>${item.title}</strong><small>${item.description}</small></span><span class="br-combo-plus" aria-hidden="true">+</span></span></button>`).join('');
  const drinkNames = { cola: 'COLA', laranja: 'LARANJA', uva: 'UVA', limao: 'LIMÃO' };
  const drinkColors = { cola: '#ffaf5c', laranja: '#ffc454', uva: '#d9a0ff', limao: '#c0f371' };
  const drinkKeys = Object.keys(drinkNames);
  const drinkCardsHtml = drinkKeys.map((key,index) => `<button type="button" class="br-drink-card" data-drink="${key}" style="--br-sequence:${index}" aria-pressed="false" aria-label="Escolher refrigerante de ${drinkNames[key]}"><img src="/assets/brasa_refrigerante_${key}.webp" alt="Refrigerante ${drinkNames[key]}, lata BRASA com splash e gelo" loading="lazy" decoding="async"><strong>${drinkNames[key]}</strong><span class="br-drink-check" aria-hidden="true">✓</span></button>`).join('');
  root.className = 'combo-section br-combo';
  root.innerHTML = `
    <div class="br-combo-wrap">
      <header class="br-combo-heading">
        <div class="br-combo-title-area"><span class="br-combo-eyebrow">O TOQUE FINAL DO TEU SMASH</span><h2>COMPLETA<br><span>O TEU</span> COMBO.</h2></div>
        <p>O teu smash já está no ponto. Escolhe as tuas companhias favoritas e <strong>põe tudo na bandeja.</strong></p>
      </header>
      <div class="br-combo-main">
        <div class="br-combo-choices" role="group" aria-label="Selecionar acompanhamentos">
          ${cardsHtml}
          <button type="button" class="br-combo-choice br-combo-choice-all" data-combo="all" aria-pressed="false" aria-label="Selecionar os três acompanhamentos">
            <span class="br-combo-category">SEM LIMITES</span>
            <span class="br-combo-all-images" aria-hidden="true">${photo(asset.batata,'')}${photo(asset.nuggets,'')}${photo(asset.onion,'')}</span>
            <span class="br-combo-choice-copy"><span><strong>TUDO<br>JUNTO.</strong><small>Batata, nuggets e onion rings.</small></span><span class="br-combo-plus" aria-hidden="true">+</span></span>
          </button>
        </div>
        <aside class="br-tray-panel" aria-label="Bandeja do teu combo">
          <div class="br-tray-top"><span>A TUA BANDEJA</span><span aria-hidden="true">✳</span></div>
          <div class="br-tray-subtop" id="brTrayChoices"><span>ESCOLHE ACOMPANHAMENTOS E MONTA A BANDEJA</span></div>
          <div class="br-tray-visual" id="brTrayVisual" aria-label="Bandeja vazia. Coloca o teu hambúrguer para começar.">
            <span class="br-tray-light" aria-hidden="true"></span>
            ${photo(asset.tray,'br-tray-surface','Bandeja vermelha com papel BRASA')}
            <div class="br-tray-placeholder" id="brTrayPlaceholder" aria-hidden="true">O TEU SMASH<br>MERECE UMA BANDEJA À ALTURA.</div>
            <div class="br-tray-burger" id="brTrayBurger" aria-hidden="true"></div>
            ${cards.map(c => photo(asset[c.key],`br-tray-food br-tray-food--${c.key}`)).join('')}
            ${photo(asset.tray,'br-tray-front')}
          </div>
          <button type="button" class="br-tray-button" id="brTrayButton"><span>COLOCAR OS MEUS ITENS</span><i aria-hidden="true">↗</i></button>
          <button type="button" class="br-pick-drink" id="brChooseDrink"><span>ESCOLHER BEBIDA</span><i aria-hidden="true">↗</i></button>
          <div class="br-drink-tray-choice" id="brDrinkTrayChoice" aria-live="polite"></div>
          <div class="br-tray-status" id="brTrayStatus" role="status" aria-live="polite">O HAMBÚRGUER ORIGINAL DA BRASA ENTRA AQUI.</div>
        </aside>
        <section class="br-drinks-panel" id="brDrinksPanel" aria-label="Escolher o refrigerante do combo">
          <div class="br-drinks-top"><span>ESCOLHE A TUA BEBIDA</span><button type="button" class="br-drinks-back" id="brBackToExtras">↖ VOLTAR AOS ITENS</button></div>
          <p class="br-drinks-intro">Quatro sabores. Escolhe o que combina melhor com o teu smash.</p>
          <div class="br-drinks-options" role="group" aria-label="Sabores de refrigerante">${drinkCardsHtml}</div>
          <div class="br-drink-result" role="status" aria-live="polite"><span>O TEU REFRIGERANTE</span><strong id="brSelectedDrink">ESCOLHE O SABOR</strong></div>
        </section>
      </div>
      <div class="br-combo-footer"><span>FEITO COM FOGO. FEITO À TUA MANEIRA.</span><a href="#inicio">↖ VOLTAR AO SMASH</a></div>
    </div>`;

  root.insertAdjacentHTML('afterbegin', `<div class="br-drink-washes" aria-hidden="true">${drinkKeys.map(key=>`<span class="br-drink-wash br-drink-wash--${key}" data-wash="${key}"></span>`).join('')}</div>`);
  const labels = { batata: 'Batata frita', nuggets: 'Nuggets', onion: 'Onion rings' };
  const options = Object.keys(labels);
  const selected = new Set();
  let placed = false;
  const buttons = [...root.querySelectorAll('[data-combo]')];
  const trayVisual = document.getElementById('brTrayVisual');
  const trayBurger = document.getElementById('brTrayBurger');
  const trayButton = document.getElementById('brTrayButton');
  const trayChoices = document.getElementById('brTrayChoices');
  const trayStatus = document.getElementById('brTrayStatus');
  const chooseDrinkButton = document.getElementById('brChooseDrink');
  const backToExtrasButton = document.getElementById('brBackToExtras');
  const selectedDrinkResult = document.getElementById('brSelectedDrink');
  const drinkTrayChoice = document.getElementById('brDrinkTrayChoice');
  const drinkButtons = [...root.querySelectorAll('[data-drink]')];
  const drinkWashes = [...root.querySelectorAll('[data-wash]')];
  const comboTitle = root.querySelector('.br-combo-heading h2');
  const comboEyebrow = root.querySelector('.br-combo-eyebrow');
  const comboDescription = root.querySelector('.br-combo-heading p');
  const originalHeading = { title: comboTitle.innerHTML, eyebrow: comboEyebrow.textContent, description: comboDescription.innerHTML };
  let chosenDrink = null;

  const layerOrder = [
    ['base',345,132,44], ['patty',357,170,63], ['cheddar',352,142,31],
    ['bacon',359,147,37], ['onion',353,123,28], ['tomato',360,169,40],
    ['lettuce',365,138,38], ['top',379,184,70]
  ];
  const preferredOrder = layerOrder.map(layer => layer[0]);

  function putBurgerOnTray() {
    // Reuse the same 8 images that assemble the original interactive BRASA burger.
    const custom = [...document.querySelectorAll('#burgerPieces .piece.is-in')]
      .map(img => img.dataset.key).filter(key => preferredOrder.includes(key));
    const chosen = custom.includes('base') && custom.includes('patty') && custom.includes('top')
      ? new Set(custom) : new Set(preferredOrder);
    const sourceMap = window.__ASSET_URLS || {};
    let baseBottom = 103;
    const fragments = [];
    layerOrder.forEach(([key,w,h,advance],index) => {
      if (!chosen.has(key)) return;
      const fromIngredient = document.querySelector(`#ingredientGrid [data-key="${key}"] img`);
      const src = sourceMap[key] || (fromIngredient && fromIngredient.src);
      if (src) {
        const img = document.createElement('img');
        img.src = src; img.alt = ''; img.decoding = 'async';
        img.dataset.burgerLayer = key;
        Object.assign(img.style, { width: `${w / 440 * 100}%`, height: `${h / 560 * 100}%`, bottom: `${baseBottom / 560 * 100}%`, zIndex: String(index + 3) });
        fragments.push(img);
      }
      baseBottom += advance;
    });
    trayBurger.replaceChildren(...fragments);
    return fragments.length > 0;
  }

  function render() {
    buttons.forEach(button => {
      const key = button.dataset.combo;
      const active = key === 'all' ? selected.size === options.length : selected.has(key);
      button.setAttribute('aria-pressed', String(active));
      button.querySelector('.br-combo-plus').textContent = active ? '×' : '+';
    });
    trayChoices.replaceChildren();
    if (!selected.size) {
      const label = document.createElement('span');
      label.textContent = placed ? 'O SMASH JÁ ESTÁ NA BANDEJA.' : 'SELECIONA OS ACOMPANHAMENTOS.';
      trayChoices.append(label);
    } else {
      options.filter(key => selected.has(key)).forEach(key => {
        const pill = document.createElement('span');pill.className = 'br-tray-chip';pill.textContent = labels[key];trayChoices.append(pill);
      });
    }
    options.forEach(key => {
      const el = trayVisual.querySelector(`.br-tray-food--${key}`);
      if (el) el.classList.toggle('is-selected',selected.has(key));
    });
    if (placed) {
      chooseDrinkButton.classList.add('is-visible');
      trayStatus.textContent = selected.size ? 'A TUA BANDEJA ESTÁ PRONTA. PODES CONTINUAR A ESCOLHER.' : 'O TEU SMASH ESTÁ NA BANDEJA. ESCOLHE OS EXTRAS.';
      trayVisual.setAttribute('aria-label',`Smash da BRASA na bandeja${selected.size ? ' com '+options.filter(key=>selected.has(key)).map(key=>labels[key]).join(', ') : ''}.`);
    }
  }
  buttons.forEach(button => button.addEventListener('click',() => {
    const key = button.dataset.combo;
    if (key === 'all') {
      if (selected.size === options.length) selected.clear();
      else options.forEach(k => selected.add(k));
    } else if (selected.has(key)) selected.delete(key);
    else selected.add(key);
    render();
  }));
  trayButton.addEventListener('click',() => {
    if (!putBurgerOnTray()) { trayStatus.textContent='NÃO FOI POSSÍVEL CARREGAR O SMASH. ATUALIZA A PÁGINA.';return; }
    placed = true;
    trayVisual.classList.add('is-filled');
    render();
    trayButton.querySelector('span').textContent = 'ATUALIZAR A MINHA BANDEJA';
    trayStatus.textContent = selected.size ? 'SMASH E ACOMPANHAMENTOS COLOCADOS NA BANDEJA!' : 'SMASH COLOCADO! ESCOLHE AGORA OS ACOMPANHAMENTOS.';
  });
  function showDrinkStage() {
    if (!placed) {
      if (!putBurgerOnTray()) { trayStatus.textContent='NÃO FOI POSSÍVEL CARREGAR O SMASH. ATUALIZA A PÁGINA.'; return; }
      placed=true;trayVisual.classList.add('is-filled');
    }
    root.classList.add('is-drink-stage');
    comboEyebrow.textContent='REFRESCA O TEU COMBO';
    comboTitle.innerHTML='ESCOLHE <span>A TUA</span><br>BEBIDA.';
    comboDescription.innerHTML='O teu smash e os acompanhamentos ficam na bandeja. <strong>Agora escolhe o refrigerante.</strong>';
    setDrinkBackdrop(chosenDrink);
    trayStatus.textContent='O TEU SMASH E OS ACOMPANHAMENTOS ESTÃO NA BANDEJA.';
    root.querySelector('#brDrinksPanel').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});
  }
  function setDrinkBackdrop(key) {
    root.dataset.brWash=key || 'neutral';
    drinkWashes.forEach(wash => wash.classList.toggle('is-active', wash.dataset.wash === key));
  }
  function selectDrink(key) {
    chosenDrink=key;
    setDrinkBackdrop(key);
    drinkButtons.forEach(button => {
      const active=button.dataset.drink===key;
      button.setAttribute('aria-pressed',String(active));
      button.style.setProperty('--br-accent',drinkColors[button.dataset.drink]);
      button.style.setProperty('--br-accent-soft',drinkColors[button.dataset.drink]+'6b');
    });
    selectedDrinkResult.textContent=drinkNames[key]+' ✓';
    drinkTrayChoice.textContent='BEBIDA: '+drinkNames[key];
    drinkTrayChoice.classList.add('is-visible');
    trayStatus.textContent='COMBO COMPLETO COM '+drinkNames[key]+'. PODES TROCAR DE SABOR.';
  }
  chooseDrinkButton.addEventListener('click',showDrinkStage);
  backToExtrasButton.addEventListener('click',() => {
    root.classList.remove('is-drink-stage');
    comboTitle.innerHTML=originalHeading.title;
    comboEyebrow.textContent=originalHeading.eyebrow;
    comboDescription.innerHTML=originalHeading.description;
    render();
    trayStatus.textContent='OS ITENS CONTINUAM NA BANDEJA. ESCOLHE A TUA BEBIDA QUANDO QUISERES.';
  });
  drinkButtons.forEach(button=>button.addEventListener('click',()=>selectDrink(button.dataset.drink)));
  // Preview the full-section colour during hover or keyboard focus; preserve the selected flavor.
  drinkButtons.forEach(button => {
    const preview=() => { if(root.classList.contains('is-drink-stage')) setDrinkBackdrop(button.dataset.drink); };
    const restore=() => { if(root.classList.contains('is-drink-stage')) setDrinkBackdrop(chosenDrink); };
    button.addEventListener('pointerenter',preview);
    button.addEventListener('pointerleave',restore);
    button.addEventListener('focus',preview);
    button.addEventListener('blur',restore);
  });
  drinkButtons.forEach(button => {
    button.style.setProperty('--br-accent',drinkColors[button.dataset.drink]);
    button.style.setProperty('--br-accent-soft',drinkColors[button.dataset.drink]+'6b');
  });
  render();
})();