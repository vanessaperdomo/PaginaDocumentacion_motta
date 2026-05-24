function irA(id){
  event.preventDefault();
  document.querySelectorAll('.ra-section').forEach(s => s.classList.remove('activo'));
  document.getElementById('sec-' + id).classList.add('activo');
  document.querySelectorAll('nav.ra-nav a').forEach(a => a.classList.remove('activo'));
  document.getElementById('nav-' + id).classList.add('activo');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

function rfTab(mod, el){
  document.querySelectorAll('.rf-panel').forEach(p => p.classList.remove('on'));
  document.getElementById('rfp-' + mod).classList.add('on');
  document.querySelectorAll('.mod-tab').forEach(t => t.classList.remove('on'));
  if (el) el.classList.add('on');
}
