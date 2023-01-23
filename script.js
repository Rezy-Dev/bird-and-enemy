
document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/954362869493923870/1067091567749382154/sky_lol.png')";

document.body.style.backgroundSize = "cover";
var bird = document.createElement('img');
bird.src = 'https://cdn.discordapp.com/attachments/954362869493923870/1067091567241871380/bird.png';
bird.style.position = 'absolute';
bird.style.top = '0px';
bird.style.left = '0px';
document.body.appendChild(bird);

bird.style.width = '15%';

bird.style.pointerEvents = 'none';

document.addEventListener('keydown', function(event) {
  if (event.keyCode == 38) {
    bird.style.top = parseInt(bird.style.top) - 10 + 'px';
  } else if (event.keyCode == 40) {
    bird.style.top = parseInt(bird.style.top) + 10 + 'px';
  }
});

document.addEventListener('mousemove', function(event) {
  bird.style.left = event.clientX + 'px';
  bird.style.top = event.clientY + 'px';
});

document.body.style.overflow = 'hidden';

var enemy = document.createElement('img');
enemy.src = 'https://cdn.discordapp.com/attachments/954362869493923870/1067052707438936124/enemy.png';
enemy.style.position = 'absolute';
enemy.style.top = '0px';
enemy.style.left = '0px';
document.body.appendChild(enemy);

setInterval(function() {
  enemy.style.left = Math.random() * window.innerWidth + 'px';
  enemy.style.top = Math.random() * window.innerHeight + 'px';
}, 10000);

var enemies = [];
setInterval(function() {
  var enemy = document.createElement('img');
  enemy.src = 'https://cdn.discordapp.com/attachments/954362869493923870/1067052707438936124/enemy.png';
  enemy.style.position = 'absolute';
  enemy.style.top = Math.random() * window.innerHeight + 'px';
  enemy.style.left = Math.random() * window.innerWidth + 'px';
  document.body.appendChild(enemy);
  enemies.push(enemy);
}, 5000);

var score = 0;
var scoreLabel = document.createElement('div');
scoreLabel.innerHTML = 'Score: ' + score;
scoreLabel.style.position = 'absolute';
scoreLabel.style.top = '0px';
scoreLabel.style.left = '0px';
document.body.appendChild(scoreLabel);

setInterval(function() {
  for (var i = 0; i < enemies.length; i++) {
    var enemy = enemies[i];
    if (Math.abs(parseInt(enemy.style.left) - parseInt(bird.style.left)) < 50 && Math.abs(parseInt(enemy.style.top) - parseInt(bird.style.top)) < 50) {
      document.body.removeChild(enemy);
      enemies.splice(i, 1);
      i--;
      score++;
      scoreLabel.innerHTML = 'Score: ' + score;
    }
  }
}, 50);

scoreLabel.style.fontWeight = 'bold';

scoreLabel.style.fontSize = '2.5em';

document.body.style.cursor = 'none';

document.body.style.userSelect = 'none';
