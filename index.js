class CountdownTimer {
  constructor({
    selector,
    targetDate
  }) {
    this.targetDate = new Date(targetDate);
    this.daysSpan = document.querySelector(`${selector} .value[data-value="days"]`);
    this.hoursSpan = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.minutesSpan = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.secondsSpan = document.querySelector(`${selector} .value[data-value="secs"]`);

  }
  
  _create(value) {
    return value < 10 ? `0${value}` : value;
  }
  _countDowm() {
    const currentTime = new Date();
    this._createSpanValue(currentTime);
  }

  showTime() {
    setInterval(() => this._countDowm(), 1000);
  }

  _createSpanValue(currentTime) {
    const time = this.targetDate - currentTime;
    this.daysSpan.textContent = this._create(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.hoursSpan.textContent = this._create(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.minutesSpan.textContent = this._create(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.secondsSpan.textContent = this._create(Math.floor((time % (1000 * 60)) / 1000));

  }
}
const timer = new CountdownTimer({
   selector: "#timer-1",
   targetDate: "2025,1,1",
 });

 const startBtn = document.querySelector("button[data-action-start]");
 startBtn.addEventListener("click", startTimer);

 function startTimer() {
   startBtn.setAttribute('disabled', '')
   timer.showTime();
 }