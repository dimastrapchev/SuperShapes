const multiplyContent = (element, multiplier) => {
  const newContent = new Array(multiplier).fill(element.innerHTML).join('');
  element.innerHTML = newContent;
}

multiplyContent(document.querySelector('#crosses'), 10);

anime({
  targets: '#tunnel circle',
  scale: 1.1,
  direction: 'alternate',
  duration: 250,
  easing: 'easeInOutSine',
  loop: true,
  delay: (el, index) => index * 50,
});

anime({
  targets: '#conveyor',
  translateX: '-50%',
  duration: 1500,
  easing: 'linear',
  loop: true
});

const zigZagPath = document.querySelector('#zigzag path');
const zigZagOffset = anime.setDashoffset(zigZagPath);
zigZagPath.setAttribute('stroke-dashoffset', zigZagOffset);

anime({
    targets: zigZagPath,
    strokeDashoffset: [zigZagOffset, 0],
    duration: 3000,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine'
});

const wavePath = document.querySelector("#wave path");
const waveOffset = anime.setDashoffset(wavePath);
wavePath.setAttribute('stroke-dashoffset', waveOffset);

anime({
  targets: wavePath,
  strokeDashoffset: [0, waveOffset],
  duration: 2000,
  loop: true,
  direction: 'alternate',
  easing: 'easeInOutSine'
});

anime({
  targets: '#crosses svg',
  direction: 'alternate',
  rotate: '1turn',
  duration: 1000,
  easing: 'easeInOutSine',
  loop: true,
  delay: (el, index) => index * 50
});

multiplyContent(document.querySelector('#squares'), 40);

const squares = document.querySelectorAll('.square');
squares.forEach(cross => {
  anime({
    targets: cross,
    direction: 'alternate',
    rotate: anime.random(90,180),
    duration: anime.random(250,1000),
    easing: 'easeInOutSine',
    loop: true
  });
})

multiplyContent(document.querySelector('#dots'), 20);

anime({
  targets: '.dot',
  scale: [0, 1.2],
  direction: 'alternate',
  duration: 150,
  delay: (el, i) => i * 100,
  easing: 'easeInOutSine',
  loop: true
});

anime({
  targets: '#flashes .flash',
  backgroundColor: (el, i) => ['#ffcc10', '#ff5010', '#10a0c0', '#b060c0'][i],
  direction: 'alternate',
  duration: 500,
  easing: 'linear',
  loop: true
});

anime({
  targets: '#square_tunnel rect',
  translateX: ['-50%', '-50%'],
  translateY: ['-50%', '-50%'],
  rotate: [45, 0, -45],
  direction: 'alternate',
  delay: (el, i) => i * 50,
  duration: 1500,
  easing: 'easeInOutSine',
  loop: true
});
