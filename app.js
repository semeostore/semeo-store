const P=[
{id:'LW001',cat:'ladies',sub:'watches',name:'EAGLE TIME',price:599,colors:['Pink','White','Black','Blue','Gold','Green'],images:6},
{id:'LW002',cat:'ladies',sub:'watches',name:'Daniel Wellington',price:899,offer:799,colors:['Green','Blue','Black','White','Black with Black Strap'],images:5,desc:'Premium ladies collection. Saifhar chain available and ready to ship. 24-hour timing, metal chain, high-quality machine and battery-operated quartz movement.'},
{id:'LS001',cat:'ladies',sub:'shoes',name:'Puma Speed Cat',price:2899,offer:2499,sizes:['6','7','8','9','10'],images:4,desc:'Premium Quality. Please do not compare this Premium Quality Puma Speed Cat with the ₹1,599 Speed Cat.'},
{id:'LB001',cat:'ladies',sub:'bags',name:'Side Bag',price:799,images:4},
{id:'BS001',cat:'men',sub:'shoes',name:'ZARA CHELSEA BOOTS',price:1899,offer:1499,sizes:['6','7','8','9','10'],images:6,desc:'ZARA Chelsea Boots. Zip and Elastic Available.'},
{id:'BW001',cat:'men',sub:'watches',name:'Fossil',price:1399,offer:1299,colors:['Orange Red + Silver Chain','Orange Red + Black Chain','Blue'],images:3},
{id:'BW002',cat:'men',sub:'watches',name:'Tissot PRX',price:999,colors:['Silver Green','White','Black'],images:3,desc:'Model: PRX. Movement: Quartz. Clasp Type: Tissot. Date working.'},
{id:'BB001',cat:'men',sub:'bags',name:'Bags',price:999,colors:['Yellow','Red','Grey'],images:3},
{id:'BG001',cat:'men',sub:'gadgets',name:'Boat Wireless Earbuds',price:749,colors:['Black','Blue','Off White'],images:6}
];
const root='assets/products/';
function money(n){return '₹'+n.toLocaleString('en-IN')}
function card(p){return `<a class="product-card" href="product.html?id=${p.id}"><img src="${root+p.id}/1.jpeg" alt="${p.name}"><div><h3>${p.name}</h3><small>${p.id}</small><p>${p.offer?`<s>${money(p.price)}</s> <b>${money(p.offer)}</b>`:money(p.price)}</p></div></a>`}
function renderHome(){document.querySelector('#trending')?.insertAdjacentHTML('beforeend',P.slice(0,5).map(card).join(''));document.querySelector('#deals')?.insertAdjacentHTML('beforeend',P.filter(x=>x.offer).concat(P.filter(x=>!x.offer)).slice(0,5).map(card).join(''))}
function search(){const q=(document.querySelector('#searchInput')?.value||'').toLowerCase().trim(),out=document.querySelector('#searchResults');if(!out)return;out.innerHTML=q?P.filter(p=>(p.name+' '+p.id+' '+p.cat+' '+p.sub).toLowerCase().includes(q)).map(card).join(''):'<p class="muted">Type a product name or code.</p>'}
function init(){renderHome();document.querySelector('#menuToggle')?.addEventListener('click',()=>document.querySelector('#drawer').classList.toggle('open'));document.querySelector('#searchToggle')?.addEventListener('click',()=>{document.querySelector('#searchPanel').classList.toggle('open');document.querySelector('#searchInput')?.focus()});document.querySelector('#searchInput')?.addEventListener('input',search)}init();
