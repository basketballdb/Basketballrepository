const searchBox = document.getElementById('searchBox');
const gameList = document.getElementById('gameList');
const games = [
  { name: 'Poland vs. Finland (2025)', link: 'games/game1.html' },
  { name: 'Serbia vs. USA (2024)', link: 'games/game2.html' }
];

searchBox.addEventListener('keyup', function() {
  let query = searchBox.value.toLowerCase();
  gameList.innerHTML = '';
  let filtered = games.filter(g => g.name.toLowerCase().includes(query));
  filtered.forEach(g => {
    let li = document.createElement('li');
    li.innerHTML = `<a href="${g.link}">${g.name}</a>`;
    gameList.appendChild(li);
  });
})
