(function(){
var labels={batata:'Batata frita',nuggets:'Nuggets',onion:'Onion rings'},keys=Object.keys(labels),selected=new Set();
var cards=Array.from(document.querySelectorAll('[data-combo]')),count=document.getElementById('comboCount'),title=document.getElementById('comboSummaryTitle'),detail=document.getElementById('comboSummaryText'),status=document.getElementById('comboStatus'),finish=document.getElementById('comboFinish');
if(!cards.length||!finish)return;
function render(){
cards.forEach(function(card){var k=card.dataset.combo,on=k==='all'?selected.size===3:selected.has(k);card.setAttribute('aria-pressed',String(on));card.querySelector('.combo-plus').textContent=on?'×':'+';});
var n=selected.size;count.innerHTML=String(n).padStart(2,'0')+'<span>/03</span>';
title.innerHTML=n===0?'E AGORA?<br>ESCOLHE O TEU.':n===3?'COMBO<br>COMPLETÃO.':n===1?'BOA<br>ESCOLHA.':'DOSE<br>DUPLA.';
detail.textContent=n===0?'Toca nos acompanhamentos que queres adicionar. Podes combinar à vontade.':keys.filter(function(k){return selected.has(k)}).map(function(k){return labels[k]}).join(' + ')+'. Está tudo no teu combo!';
finish.disabled=n===0;finish.querySelector('span').textContent='CONFIRMAR O MEU COMBO';status.textContent=n===0?'ESCOLHE PELO MENOS UMA OPÇÃO.':'PRONTO PARA CONFIRMAR AS TUAS ESCOLHAS.';
}
cards.forEach(function(card){card.addEventListener('click',function(){var k=card.dataset.combo;if(k==='all'){if(selected.size===3)selected.clear();else keys.forEach(function(x){selected.add(x)})}else{if(selected.has(k))selected.delete(k);else selected.add(k)}render()})});
finish.addEventListener('click',function(){if(!selected.size)return;finish.querySelector('span').textContent='COMBO ADICIONADO ✓';status.textContent='ESCOLHAS CONFIRMADAS!';detail.textContent='Adicionaste: '+keys.filter(function(k){return selected.has(k)}).map(function(k){return labels[k]}).join(' + ')+'.'});
render();
})();