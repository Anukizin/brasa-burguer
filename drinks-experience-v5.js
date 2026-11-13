/* BRASA V5 — premium closed-can carousel, preserving original smash builder. */
(() => {
  'use strict';
  const root = document.getElementById('combo');
  const launcher = document.getElementById('brChooseDrink');
  if (!root || !launcher || document.getElementById('brV4Stage')) return;

  const options = [
    { key: 'cola', label: 'Cola', color: '#f24a26', accent: '#ffb04e', dark: '#400506', image: '/assets/brasa_lata_fechada_cola.webp' },
    { key: 'laranja', label: 'Laranja', color: '#fa931b', accent: '#ffe072', dark: '#6a1806', image: '/assets/brasa_lata_fechada_laranja.webp' },
    { key: 'uva', label: 'Uva', color: '#9138bd', accent: '#eb9bfa', dark: '#28083d', image: '/assets/brasa_lata_fechada_uva.webp' },
    { key: 'limao', label: 'Limão', color: '#63bc29', accent: '#d6ef82', dark: '#153b12', image: '/assets/brasa_lata_fechada_limao.webp' }
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
  #brV4Stage .br-v4-title{font:italic 900 clamp(59px,4.8vw,82px)/.88 'Barlow Condensed',Impact,'Arial Narrow',sans-serif;text-transform:uppercase;letter-spacing:-.028em;margin:20px 0 23px;text-shadow:0 7px 24px #1c030455}
  #brV4Stage .br-v4-title span{display:block;color:#ffc64e}
  #brV4Stage .br-v4-title .br-v4-title-first{color:#fff1d7;white-space:nowrap}
  #brV4Stage .br-v4-title .br-v4-title-last{color:#ffbf4c}
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
  @media(max-width:760px){#brV4Stage .br-v4-shell{width:calc(100% - 32px);padding:24px 0 35px}#brV4Stage .br-v4-brand{font-size:27px}#brV4Stage .br-v4-back{font-size:10px}#brV4Stage .br-v4-columns{display:flex;flex-direction:column;min-height:0}#brV4Stage .br-v4-left{padding:36px 0 0}#brV4Stage .br-v4-title{font-size:clamp(56px,12vw,82px);margin:15px 0}#brV4Stage .br-v4-title .br-v4-title-first{white-space:normal}#brV4Stage .br-v4-lead{font-size:16px;max-width:340px;margin:20px 0 0}#brV4Stage .br-v4-tray{display:none}#brV4Stage .br-v4-tray-caption{display:none}#brV4Stage .br-v4-right{padding-top:0}#brV4Stage .br-v4-display{height:min(100vw,510px);min-height:360px}#brV4Stage .br-v4-can{width:min(44vw,255px);height:95%;top:49%}#brV4Stage .br-v4-prev{left:0}#brV4Stage .br-v4-next{right:0}#brV4Stage .br-v4-flavors{margin-top:-2px;gap:7px}#brV4Stage .br-v4-pill{padding:10px 11px;font-size:12px}#brV4Stage .br-v4-pill::before{width:10px;height:10px}#brV4Stage .br-v4-footer{margin-top:26px}#brV4Stage .br-v4-confirm{padding-left:24px;min-height:62px}#brV4Stage .br-v4-confirm i{width:44px;height:44px}}
  @media(max-width:425px){#brV4Stage .br-v4-display{height:372px;min-height:372px}#brV4Stage .br-v4-title{font-size:clamp(54px,11.8vw,74px)}#brV4Stage .br-v4-pill{flex:1 1 41%;font-size:12px}#brV4Stage .br-v4-arrow{width:36px;height:36px}#brV4Stage .br-v4-can{width:52vw;height:97%}#brV4Stage .br-v4-swipe{margin-top:7px}}
  @media(prefers-reduced-motion:reduce){#brV4Stage *,#brV4Stage::before,#brV4Stage::after{animation:none!important;transition:none!important}}
  /* V5 • Premium beverage selector: closed cans, no redundant pills/duplicate logo */
  .br-combo.is-drink-stage #brV4Stage{background:#230506!important;min-height:790px}
  #brV4Stage{--v5-accent:#ffaf5a;scroll-margin-top:0}
  #brV4Stage::before{display:none}
  #brV4Stage::after{opacity:.55;filter:blur(22px);border-width:2px;left:37%;width:90%;bottom:-19%}
  #brV4Stage .br-v5-washes{position:absolute;z-index:-3;inset:0;pointer-events:none;overflow:hidden}
  #brV4Stage .br-v5-wash{position:absolute;inset:0;opacity:0;transition:opacity .9s cubic-bezier(.22,.68,0,1);pointer-events:none}
  #brV4Stage .br-v5-wash--cola{background:radial-gradient(ellipse 58% 70% at 78% 38%,#ad281d 0%,transparent 72%),linear-gradient(112deg,#260303 1%,#490807 55%,#3c0708 100%)}
  #brV4Stage .br-v5-wash--laranja{background:radial-gradient(ellipse 58% 66% at 76% 44%,#e87822b5 0%,transparent 71%),linear-gradient(112deg,#2e0905 0%,#75300e 60%,#7d320e 100%)}
  #brV4Stage .br-v5-wash--uva{background:radial-gradient(ellipse 60% 70% at 80% 43%,#9c43c38a 0%,transparent 67%),linear-gradient(112deg,#1f061f 0%,#321042 60%,#441353 100%)}
  #brV4Stage .br-v5-wash--limao{background:radial-gradient(ellipse 60% 68% at 76% 41%,#92c65173 0%,transparent 74%),linear-gradient(112deg,#0e1d0e 0%,#193a1d 58%,#336a31 100%)}
  #brV4Stage[data-flavor="cola"] .br-v5-wash--cola,#brV4Stage[data-flavor="laranja"] .br-v5-wash--laranja,#brV4Stage[data-flavor="uva"] .br-v5-wash--uva,#brV4Stage[data-flavor="limao"] .br-v5-wash--limao{opacity:1}
  #brV4Stage .br-v4-glow{left:53%;top:12%;width:51%;height:70%;opacity:.32;filter:blur(72px)}
  #brV4Stage .br-v4-shell{width:min(calc(100% - 9vw),1480px);padding:24px 0 38px}
  #brV4Stage .br-v4-top{display:flex;align-items:center;justify-content:space-between;gap:20px;border-bottom:1px solid #ffdfab29;padding-bottom:17px;min-height:49px}
  #brV4Stage .br-v4-brand,#brV4Stage .br-v4-flavors{display:none!important}
  #brV4Stage .br-v5-step{display:flex;align-items:center;gap:12px;font:850 12px/1.4 Inter,Arial,sans-serif;color:#ffdfa6;letter-spacing:.115em}
  #brV4Stage .br-v5-step-number{width:36px;height:36px;display:grid;place-items:center;background:#ffc36b;color:#45170c;border-radius:50%;font:900 15px/1 Inter,Arial,sans-serif;box-shadow:0 0 19px #fa913c5c}
  #brV4Stage .br-v5-step-progress{font-size:11px;color:#ffdaae8c;letter-spacing:.1em}
  #brV4Stage .br-v4-back{padding:12px 20px;font-size:11px;border-color:#ffdea661;background:#35100b66;backdrop-filter:blur(10px)}
  #brV4Stage .br-v4-columns{grid-template-columns:minmax(0,.45fr) minmax(0,.55fr);min-height:580px;gap:12px;align-items:start}
  #brV4Stage .br-v4-left{padding:55px 0 0}
  #brV4Stage .br-v4-eyebrow{font:850 11px/1.2 Inter,Arial,sans-serif;letter-spacing:.24em;color:#ffcb84}
  #brV4Stage .br-v4-title{font:italic 900 clamp(70px,5.4vw,99px)/.87 'Barlow Condensed',Impact,Arial Narrow,sans-serif;letter-spacing:-.036em;margin:22px 0 23px;text-transform:uppercase}
  #brV4Stage .br-v4-title .br-v4-title-first{white-space:nowrap;color:#fff3df}
  #brV4Stage .br-v4-title .br-v4-title-last{color:#ffc04e}
  #brV4Stage .br-v4-underline{width:61%;height:5px;border-top:3px solid var(--v4-accent);margin-top:10px;filter:drop-shadow(0 0 10px var(--v4-accent))}
  #brV4Stage .br-v4-lead{max-width:420px;font:520 clamp(17px,1.5vw,21px)/1.5 Inter,Arial,sans-serif;margin:17px 0 15px;color:#f8e9d5}
  #brV4Stage .br-v4-lead strong{color:#ffd37c}
  #brV4Stage .br-v4-tray{width:min(111%,690px);height:337px;transform:translateX(-20px);margin-top:7px}
  #brV4Stage .br-v4-tray-caption{color:#ffdfa0;font-size:10px;letter-spacing:.075em;margin-top:-10px;opacity:.9}
  #brV4Stage .br-v4-right{padding:0;justify-content:flex-start}
  #brV4Stage .br-v4-display{height:555px;flex:none;width:100%;max-width:850px;cursor:grab}
  #brV4Stage .br-v4-display::before{left:25%;bottom:55px;width:62%;height:38px;filter:blur(17px);opacity:.8}
  #brV4Stage .br-v4-display::after{left:33%;bottom:46px;width:45%;height:14px;border-color:var(--v4-accent);box-shadow:0 0 18px var(--v4-accent);opacity:.85}
  #brV4Stage .br-v4-can{appearance:none;background:none;border:0;padding:0;top:49%;height:485px;width:clamp(170px,20vw,350px);pointer-events:auto;cursor:pointer;touch-action:pan-y;filter:drop-shadow(0 20px 11px #140306a3)!important;transform:translate(-50%,-50%) scale(var(--scale)) rotate(var(--tilt));opacity:var(--opacity);transition:left .84s cubic-bezier(.18,.84,.19,1),transform .84s cubic-bezier(.18,.84,.19,1),opacity .75s ease,filter .75s ease}
  #brV4Stage .br-v4-can img{width:100%;height:100%;object-fit:contain;filter:none!important;pointer-events:none}
  #brV4Stage .br-v4-can.is-active img{filter:drop-shadow(0 0 2px #ffe0aa20)!important}
  #brV4Stage .br-v4-can:focus-visible{outline:2px solid #ffe2a8;border-radius:15px;outline-offset:6px}
  #brV4Stage .br-v4-can:not(.is-active):hover{filter:drop-shadow(0 15px 12px #140306a3) brightness(1.15)!important}
  #brV4Stage .br-v4-arrow{height:51px;width:51px;top:48%;border-color:#ffe0a6a9;background:#1805058c;box-shadow:0 7px 18px #1801048a;font-size:24px;backdrop-filter:blur(6px)}
  #brV4Stage .br-v4-prev{left:-1%}#brV4Stage .br-v4-next{right:0%}
  #brV4Stage .br-v5-flavor-bar{display:flex;align-items:center;justify-content:center;gap:16px;margin-top:-20px;color:#ffedd4}
  #brV4Stage .br-v5-current{font:900 12px/1.2 Inter,Arial,sans-serif;letter-spacing:.16em}
  #brV4Stage .br-v5-counter{font:750 12px/1.2 Inter,Arial,sans-serif;color:#ffd8a0a9;letter-spacing:.12em}
  #brV4Stage .br-v4-dots{display:flex;justify-content:center;gap:11px;margin:0}
  #brV4Stage .br-v4-dot{background:#ffe3bf64;height:7px;width:7px;transition:width .3s,background .3s,box-shadow .3s}
  #brV4Stage .br-v4-dot[aria-current=true]{width:31px;background:#ffd27b;box-shadow:0 0 10px #ffc87869}
  #brV4Stage .br-v4-swipe{margin-top:18px;font:600 12px/1.5 Inter,Arial,sans-serif;color:#ffdbb7ae}
  #brV4Stage .br-v4-footer{margin-top:-4px;position:relative;z-index:10}
  #brV4Stage .br-v4-confirm{min-width:420px;width:min(440px,100%);min-height:65px;padding:7px 8px 7px 33px;box-shadow:0 16px 35px #19060780;transition:transform .3s,filter .3s}
  #brV4Stage .br-v4-confirm:hover{filter:brightness(1.05)}
  #brV4Stage .br-v4-status{position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip-path:inset(50%);border:0;padding:0;margin:-1px}
  @media(max-width:1180px){#brV4Stage .br-v4-shell{width:calc(100% - 48px)}#brV4Stage .br-v4-columns{grid-template-columns:minmax(0,.44fr) minmax(0,.56fr)}#brV4Stage .br-v4-title{font-size:clamp(62px,5.2vw,82px)}#brV4Stage .br-v4-tray{height:290px}#brV4Stage .br-v4-display{height:485px}#brV4Stage .br-v4-can{height:415px;width:clamp(155px,20vw,290px)}}
  @media(max-width:760px){#brV4Stage{min-height:auto!important}#brV4Stage .br-v4-shell{width:calc(100% - 32px);padding:18px 0 38px}#brV4Stage .br-v4-top{padding-bottom:13px}#brV4Stage .br-v5-step{font-size:10px;gap:7px;letter-spacing:.05em}#brV4Stage .br-v5-step-number{width:32px;height:32px}#brV4Stage .br-v4-back{padding:10px 12px;font-size:9px}#brV4Stage .br-v4-columns{display:flex;flex-direction:column;min-height:0}#brV4Stage .br-v4-left{padding:34px 0 0;width:100%}#brV4Stage .br-v4-title{font-size:clamp(60px,11vw,78px);margin:15px 0 18px}#brV4Stage .br-v4-title .br-v4-title-first{white-space:normal}#brV4Stage .br-v4-lead{font-size:15px;margin:10px 0 10px}#brV4Stage .br-v4-tray{display:none}#brV4Stage .br-v4-tray-caption{display:none}#brV4Stage .br-v4-right{width:100%}#brV4Stage .br-v4-display{height:min(96vw,480px);min-height:370px}#brV4Stage .br-v4-can{height:95%;width:min(43vw,290px);top:47%}#brV4Stage .br-v4-display::before{bottom:20px}#brV4Stage .br-v4-display::after{bottom:19px}#brV4Stage .br-v4-arrow{height:39px;width:39px;top:49%}#brV4Stage .br-v5-flavor-bar{margin-top:-11px}#brV4Stage .br-v4-footer{margin-top:18px}#brV4Stage .br-v4-confirm{min-width:0;width:100%;min-height:60px}#brV4Stage .br-v4-swipe{margin-top:11px}}
  @media(max-width:440px){#brV4Stage .br-v5-step span:last-child{display:none}#brV4Stage .br-v4-title{font-size:clamp(44px,11.7vw,54px)}#brV4Stage .br-v4-display{height:390px;min-height:390px}#brV4Stage .br-v4-can{width:53vw;height:95%}#brV4Stage .br-v4-arrow{width:35px;height:35px}#brV4Stage .br-v5-flavor-bar{gap:12px}}

  `;
  const style = document.createElement('style');
  style.id = 'brasa-beverage-v4-style';
  style.textContent = styles;
  document.head.appendChild(style);

  root.insertAdjacentHTML('afterend', `
  <section id="brV4Stage" aria-label="Escolhe a tua bebida" data-flavor="cola">
    <div class="br-v5-washes" aria-hidden="true">${options.map(drink=>`<span class="br-v5-wash br-v5-wash--${drink.key}"></span>`).join('')}</div>
    <div class="br-v4-glow" aria-hidden="true"></div>
    <div class="br-v4-shell">
      <div class="br-v4-top">
        <div class="br-v5-step" aria-label="Terceira etapa de três: escolher bebida"><b class="br-v5-step-number">3</b><strong>ÚLTIMO PASSO — BEBIDA</strong><span class="br-v5-step-progress">/ 03</span></div>
        <button type="button" class="br-v4-back" id="brV4Back">← VOLTAR AOS ITENS</button>
      </div>
      <div class="br-v4-columns">
        <div class="br-v4-left">
          <span class="br-v4-eyebrow">QUASE LÁ!</span>
          <h2 class="br-v4-title"><span class="br-v4-title-first">ESCOLHE A TUA</span><span class="br-v4-title-last">BEBIDA.</span><i class="br-v4-underline" aria-hidden="true"></i></h2>
          <p class="br-v4-lead">Escolhe o teu sabor. A lata ganha vida e o cenário acompanha <strong>o teu combo.</strong></p>
          <div class="br-v4-tray" id="brV4Tray" aria-label="O teu combo com o smash e os acompanhamentos"></div>
          <div class="br-v4-tray-caption" id="brV4TrayCaption">O TEU COMBO, DO TEU JEITO.</div>
        </div>
        <div class="br-v4-right">
          <div class="br-v4-display" id="brV4Display" tabindex="0" role="group" aria-label="Carrossel de refrigerantes: arrasta para mudar de sabor">
            ${options.map(drink => `<button type="button" class="br-v4-can" data-can="${drink.key}" aria-label="Escolher ${drink.label}" aria-pressed="false"><img src="${drink.image}" alt="" draggable="false" decoding="async"></button>`).join('')}
            <button class="br-v4-arrow br-v4-prev" id="brV4Prev" type="button" aria-label="Bebida anterior">‹</button>
            <button class="br-v4-arrow br-v4-next" id="brV4Next" type="button" aria-label="Próxima bebida">›</button>
          </div>
          <div class="br-v5-flavor-bar"><span class="br-v5-current" id="brV5Current" aria-live="off">COLA</span><div class="br-v4-dots" role="group" aria-label="Selecionar bebida">${options.map((drink, index) => `<button type="button" class="br-v4-dot" data-flavor="${drink.key}" aria-label="${drink.label}, bebida ${index+1} de 4" aria-current="false"></button>`).join('')}</div><span class="br-v5-counter" id="brV5Counter">01 / 04</span></div>
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
  const currentLabel = stage.querySelector('#brV5Current');
  const currentCounter = stage.querySelector('#brV5Counter');
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
        {pos:'54%',scale:'1.12',tilt:'4deg',opacity:'1',blur:'0px',layer:'5'},
        {pos:'86%',scale:'.62',tilt:'-6deg',opacity:'.64',blur:'0px',layer:'2'},
        {pos:'11%',scale:'.48',tilt:'6deg',opacity:'.40',blur:'0px',layer:'1'},
        {pos:'25%',scale:'.72',tilt:'-5deg',opacity:'.72',blur:'0px',layer:'3'}
      ][distance];
      Object.entries({ '--pos':slot.pos,'--scale':slot.scale,'--tilt':slot.tilt,'--opacity':slot.opacity,'--blur':slot.blur,'--layer':slot.layer }).forEach(([k,v])=>can.style.setProperty(k,v));
      can.classList.toggle('is-active',distance===0);
    });
    pills.forEach(btn => btn.setAttribute('aria-pressed',String(btn.dataset.flavor===chosen.key)));
    cans.forEach(can => can.setAttribute('aria-pressed',String(can.dataset.can===chosen.key)));
    if (currentLabel) currentLabel.textContent=chosen.label.toUpperCase();
    if (currentCounter) currentCounter.textContent=String(selectedIndex+1).padStart(2,'0')+' / 04';
    dots.forEach(btn => btn.setAttribute('aria-current',String(btn.dataset.flavor===chosen.key)));
    confirmed = false;
    confirmation.querySelector('span').textContent = 'CONFIRMAR BEBIDA';
    status.textContent = `${chosen.label.toUpperCase()} SELECIONADA · DESLIZA OU CLICA PARA TROCAR`;
    // Preserve selection state even if the user navigates back to accompaniments.
  }

  pills.forEach(btn=>btn.addEventListener('click',()=>select(options.findIndex(x=>x.key===btn.dataset.flavor))));
  let suppressCanClick=false;
  cans.forEach(can=>can.addEventListener('click', event=>{if(suppressCanClick){event.preventDefault();return;}select(options.findIndex(x=>x.key===can.dataset.can));}));
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
    root.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'start'});
  });
  // Pointer events cover touch and mouse drags; the swipe threshold prevents accidental changes.
  let startX=null, startY=null;
  display.addEventListener('pointerdown',(event)=>{
    if(event.target.closest('.br-v4-arrow'))return;
    startX=event.clientX;startY=event.clientY;
  });
  display.addEventListener('pointerup',(event)=>{
    if(startX===null)return;
    const dx=event.clientX-startX,dy=event.clientY-startY;
    startX=null;startY=null;
    if(Math.abs(dx)>44 && Math.abs(dx)>Math.abs(dy)*1.15){suppressCanClick=true;select(selectedIndex+(dx<0?1:-1));window.setTimeout(()=>{suppressCanClick=false;},0);}
  });
  display.addEventListener('pointercancel',()=>{startX=null;startY=null});
  display.addEventListener('keydown',(event)=>{
    if(event.key==='ArrowRight'||event.key==='ArrowLeft') {event.preventDefault();select(selectedIndex+(event.key==='ArrowRight'?1:-1));}
  });
  // The beverage experience is a separate section below the combo, not an overlay.
  updateTray();
  select(0);
})();