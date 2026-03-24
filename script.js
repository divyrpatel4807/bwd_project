function switchTab(tabName) {
  let contents = document.querySelectorAll('.tab-content');
  contents.forEach(c => c.classList.add('hidden'));

  document.getElementById(tabName).classList.remove('hidden');

  let tabs = document.querySelectorAll('.tab');
  tabs.forEach(t => t.classList.remove('active'));

  event.target.classList.add('active');
}

function search() {
  alert("Search feature coming soon!");
}