console.log('JS Recap');
window.addEventListener('load', function() {
  var h1 = document.querySelector('h1');
  console.log(h1.textContent);

  $('h1').on('click', function() {
    console.log('h1 clicked');
  });
});

var sample = function(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
};

var scores = {
  jon: 5,
  fiona: 6
};

_.each(scores, function(score, name, list) {
  console.log('key', name);
  console.log('value', score);
});
