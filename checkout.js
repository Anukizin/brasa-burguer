/* BRASA checkout and live order summary. */
(() => {
  'use strict';

  const beverage = document.getElementById('brV4Stage');
  const combo = document.getElementById('combo');
  const beverageTray = document.getElementById('brV4Tray');
  const comboTray = document.getElementById('brTrayVisual');
  if (!beverage || !combo || !beverageTray || !comboTray) return;

  const paths = {
    person: '<circle cx="12" cy="7" r="3"/><path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>',
    phone: '<path d="M6 3h3l2 5-3 2a14 14 0 0 0 6 6l2-3 5 2v3a3 3 0 0 1-3 3A17 17 0 0 1 3 6a3 3 0 0 1 3-3Z"/>',
    pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    bag: '<path d="M5 8h14l2 13H3L5 8Zm4 3V6a3 3 0 1 1 6 0v5"/>',
    card: '<rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M3 9h18M6 15h4"/>',
    pix: '<path d="m12 3 4 4-4 4-4-4 4-4Zm5 5 4 4-4 4-4-4 4-4Zm-10 0 4 4-4 4-4-4 4-4Zm5 5 4 4-4 4-4-4 4-4Z"/>',
    cash: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M2 10a4 4 0 0 0 4-4m12 0a4 4 0 0 0 4 4M2 14a4 4 0 0 1 4 4m12 0a4 4 0 0 1 4-4"/>',
    note: '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H4l1.7-4.1A8.5 8.5 0 1 1 21 11.5Z"/>',
    arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>'
  };
  const icon = name => `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</svg>`;
  const field = (label, name, glyph, attributes) => `
    <label class="br-checkout-field" for="br-checkout-${name}">
      <span>${label}</span>
      <span class="br-checkout-input">${icon(glyph)}<input id="br-checkout-${name}" name="${name}" ${attributes} required></span>
    </label>`;
  const payments = [['Cartão', 'card'], ['Pix', 'pix'], ['Dinheiro', 'cash']];

  beverage.insertAdjacentHTML('afterend', `
    <section class="br-checkout" id="finalizar" aria-labelledby="br-checkout-title">
      <form class="br-checkout-grid" id="br-checkout-form">
        <div class="br-checkout-heading">
          <h2 id="br-checkout-title">Finaliza o teu <em>pedido.</em></h2>
          <p>Confirma os teus dados, revê o pedido e escolhe a forma de pagamento.</p>
        </div>
        <div id="brCheckoutTray" class="br-checkout-tray" aria-hidden="true"></div>
        <div class="br-checkout-panel br-checkout-details">
          <div class="br-checkout-panel-heading">
            <span class="br-checkout-panel-icon">${icon('person')}</span>
            <div><h3>Os teus dados</h3><p>Preenche as informações para finalizar o pedido.</p></div>
          </div>
          ${field('Nome', 'nome', 'person', 'autocomplete="name" placeholder="Ex.: João Silva" maxlength="100"')}
          ${field('E-mail', 'email', 'mail', 'type="email" autocomplete="email" placeholder="Ex.: joao@email.com" maxlength="254"')}
          ${field('Número de celular', 'celular', 'phone', 'type="tel" autocomplete="tel" inputmode="tel" placeholder="Ex.: (11) 99999-9999" maxlength="24"')}
          ${field('Localização', 'endereco', 'pin', 'autocomplete="street-address" placeholder="Rua, número, bairro e cidade" maxlength="250"')}
          <fieldset class="br-checkout-payments">
            <legend>${icon('card')} Métodos de pagamento</legend>
            <div>
              ${payments.map(([label, glyph], i) => `<label><input type="radio" name="pagamento" value="${label}" ${i === 0 ? 'checked' : ''}><span>${icon(glyph)}${label}</span></label>`).join('')}
            </div>
          </fieldset>
        </div>
        <aside class="br-checkout-panel br-checkout-summary" aria-labelledby="br-checkout-summary-title">
          <div class="br-checkout-panel-heading">
            <span class="br-checkout-panel-icon">${icon('bag')}</span>
            <div><h3 id="br-checkout-summary-title">O teu pedido</h3><p>Confere os itens e os valores escolhidos.</p></div>
          </div>
          <ul class="br-checkout-items"></ul>
          <div class="br-checkout-total"><span>Total estimado</span><output id="br-checkout-total" aria-live="polite"></output></div>
          <label class="br-checkout-note" for="br-checkout-note">${icon('note')} Observações</label>
          <div class="br-checkout-note-box">
            <textarea id="br-checkout-note" name="observacoes" maxlength="200" placeholder="Ex.: Sem cebola, ponto da carne, etc."></textarea>
            <span aria-hidden="true" id="br-checkout-count">0 / 200</span>
          </div>
        </aside>
        <div class="br-checkout-action">
          <button class="br-checkout-submit" type="submit">Finalizar pedido <span>${icon('arrow')}</span></button>
          <p class="br-checkout-status" role="status" hidden></p>
        </div>
      </form>
    </section>`);

  const section = document.getElementById('finalizar');
  const form = section.querySelector('form');
  const dock = document.getElementById('brCheckoutTray');
  const list = section.querySelector('.br-checkout-items');
  const total = document.getElementById('br-checkout-total');
  const note = document.getElementById('br-checkout-note');
  const counter = document.getElementById('br-checkout-count');
  const feedback = section.querySelector('.br-checkout-status');
  const phone = document.getElementById('br-checkout-celular');
  const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

  // Demo catalogue prices in centavos, taken from the checkout reference.
  const extras = {
    batata: ['Batata frita', 890, '/assets/brasa_batata_frita.webp'],
    nuggets: ['Nuggets', 1090, '/assets/brasa_nuggets.webp'],
    onion: ['Onion rings', 890, '/assets/brasa_onion_rings.webp']
  };
  const flavours = { cola: 'Cola', laranja: 'Laranja', uva: 'Uva', limao: 'Limão' };
  let itemSignature;
  function render() {
    const composition = beverageTray.firstElementChild;
    const flavour = beverageTray.dataset.confirmedDrink;
    if (composition) {
      const copy = composition.cloneNode(true);
      copy.removeAttribute('id');
      dock.replaceChildren(copy);
    }
    const hasDrink = Object.hasOwn(flavours, flavour);
    dock.classList.toggle('has-drink', hasDrink);

    const ingredients = [...comboTray.querySelectorAll('[data-burger-layer]')];
    const custom = ingredients.length > 0 && ingredients.length < 8;
    const items = [[custom ? 'Smash personalizado' : 'Smash', 2990, ingredients]];
    Object.entries(extras).forEach(([key, item]) => {
      if (combo.querySelector(`[data-combo="${key}"][aria-pressed="true"]`)) items.push(item);
    });
    if (hasDrink) items.push([`Bebida (${flavours[flavour]})`, 690, `/assets/brasa_lata_fechada_${flavour}.webp`]);

    const signature = JSON.stringify([items.map(item => item[0]), ingredients.map(img => img.dataset.burgerLayer)]);
    if (signature === itemSignature) return;
    itemSignature = signature;
    list.replaceChildren(...items.map(([label, price, photo]) => {
      const row = document.createElement('li');
      const thumb = document.createElement('span');
      thumb.className = 'br-checkout-thumb';
      thumb.setAttribute('aria-hidden', 'true');
      if (typeof photo === 'string') {
        const img = new Image();
        img.alt = '';
        img.src = photo;
        thumb.append(img);
      } else {
        const stack = document.createElement('span');
        photo.forEach(img => {
          const piece = img.cloneNode();
          piece.style.removeProperty('filter');
          stack.append(piece);
        });
        thumb.classList.add('br-checkout-thumb-smash');
        thumb.append(stack);
      }
      const name = document.createElement('span');
      name.textContent = label;
      const amount = document.createElement('strong');
      amount.textContent = currency.format(price / 100);
      row.append(thumb, name, amount);
      return row;
    }));
    total.value = currency.format(items.reduce((sum, item) => sum + item[1], 0) / 100);
    feedback.hidden = true;
  }

  new MutationObserver(render).observe(beverageTray, {
    childList: true, attributes: true, attributeFilter: ['data-confirmed-drink']
  });
  render();

  const next = document.createElement('a');
  next.className = 'br-checkout-next';
  next.href = '#finalizar';
  next.innerHTML = `Rever pedido ${icon('arrow')}`;
  beverage.querySelector('.br-v4-footer').append(next);

  form.addEventListener('input', () => { feedback.hidden = true; });
  note.addEventListener('input', () => { counter.textContent = `${note.value.length} / 200`; });
  phone.addEventListener('input', () => {
    const digits = phone.value.replace(/\D/g, '');
    phone.setCustomValidity(!digits || (digits.length >= 10 && digits.length <= 13) ? '' : 'Confere o número de celular com o DDD.');
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    feedback.textContent = 'Dados conferidos. O envio do pedido e o pagamento online ainda não estão disponíveis.';
    feedback.hidden = false;
  });
})();
