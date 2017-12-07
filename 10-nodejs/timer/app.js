var timer =
{
  seconds: 0,
  timerId: null,
  elems:
  {
    displayH1: document.querySelector('#display'),
    startButton: document.querySelector('#start'),
    stopButton: document.querySelector('#stop'),
    resetButton: document.querySelector('#reset')
  },

  init: function()
  {
    this.elems.displayH1.textContent = this.seconds;
    this.elems.startButton.addEventListener('click', this.startTimer.bind(this))
    this.elems.stopButton.addEventListener('click', this.stopTimer.bind(this))
    this.elems.resetButton.addEventListener('click', this.resetTimer.bind(this))
  },

  startTimer: function()
  {
    this.timerId = setInterval(() =>
    {
      // this is now the timer object
      this.seconds++
      this.elems.displayH1.textContent = this.seconds
    }, 1000)
  },

  stopTimer: function()
  {8
    clearInterval(this.timerId)
  },

  resetTimer: function()
  {
    this.seconds = 0
    this.elems.displayH1.textContent = this.seconds
  }
};

timer.init(timer);
