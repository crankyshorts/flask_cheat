document.addEventListener('DOMContentLoaded', function() {
  const boxes = document.querySelectorAll('.box');

  // Change box colors on click
  boxes.forEach(function(box) {
    box.addEventListener('click', function() {
      changeBoxColor(box);
    });
  });

  // Function to change box color randomly
  function changeBoxColor(box) {
    const primaryColors = ['#f44336', '#3f51b5', '#4caf50'];
    const randomColor = primaryColors[Math.floor(Math.random() * primaryColors.length)];
    box.style.backgroundColor = randomColor;
  }
});
