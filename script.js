/* make this background: https://cdn.discordapp.com/attachments/954362869493923870/1067091567749382154/sky_lol.png */
document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/954362869493923870/1067091567749382154/sky_lol.png')";
/* make it fit the screen */
document.body.style.backgroundSize = "cover";
/* add this bird: https://cdn.discordapp.com/attachments/954362869493923870/1067091567241871380/bird.png */
var bird = document.createElement('img');
bird.src = 'https://cdn.discordapp.com/attachments/954362869493923870/1067091567241871380/bird.png';
bird.style.position = 'absolute';
bird.style.top = '0px';
bird.style.left = '0px';
document.body.appendChild(bird);
/* make it's size 15% */
bird.style.width = '15%';
/* make it movable with my cursor */
bird.style.pointerEvents = 'none';
/* make it move up and down with keyboard */
document.addEventListener('keydown', function(event) {
  if (event.keyCode == 38) {
    bird.style.top = parseInt(bird.style.top) - 10 + 'px';
  } else if (event.keyCode == 40) {
    bird.style.top = parseInt(bird.style.top) + 10 + 'px';
  }
});
/* make it move along the cursor */
document.addEventListener('mousemove', function(event) {
  bird.style.left = event.clientX + 'px';
  bird.style.top = event.clientY + 'px';
});
/* disable the scroll */
document.body.style.overflow = 'hidden';
/* Make the character: https://cdn.discordapp.com/attachments/954362869493923870/1067052707438936124/enemy.png */
var enemy = document.createElement('img');
enemy.src = 'https://cdn.discordapp.com/attachments/954362869493923870/1067052707438936124/enemy.png';
enemy.style.position = 'absolute';
enemy.style.top = '0px';
enemy.style.left = '0px';
document.body.appendChild(enemy);
/* Make the enemy deploy randomly every 5 second */
setInterval(function() {
  enemy.style.left = Math.random() * window.innerWidth + 'px';
  enemy.style.top = Math.random() * window.innerHeight + 'px';
}, 10000);
/* make it so that multiple enemy deploys */
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
/* Make score system in the game, whenever I touch the enemy, the enemy image gets deleted and score is increased by one and displayed by the label: Score: */
var score = 0;
var scoreLabel = document.createElement('div');
scoreLabel.innerHTML = 'Score: ' + score;
scoreLabel.style.position = 'absolute';
scoreLabel.style.top = '0px';
scoreLabel.style.left = '0px';
document.body.appendChild(scoreLabel);
/* Increase the score by 1 everytime I touch the enemy */
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
/* Make the score label bold */
scoreLabel.style.fontWeight = 'bold';
/* increase the score label by 2.5x */
scoreLabel.style.fontSize = '2.5em';
/* make the curser hidden */
document.body.style.cursor = 'none';
/* disable image selection permission too */
document.body.style.userSelect = 'none';