class CountdownTimer {
  constructor({
    selector,
    targetDate
  }) {
    this.targetDate = new Date(targetDate);
    this.days = document.querySelector(`${selector} .value[data-value="days"]`);
    this.hours = document.querySelector(`${selector} .value[data-value="hours"]`);
    this.minutes = document.querySelector(`${selector} .value[data-value="mins"]`);
    this.seconds = document.querySelector(`${selector} .value[data-value="secs"]`);
  
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
    const days = this._create(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this._create(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const minutes = this._create(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const seconds = this._create(Math.floor((time % (1000 * 60)) / 1000));


    this.days.textContent = days;
    this.hours.textContent = hours;
    this.minutes.textContent = minutes;
    this.seconds.textContent = seconds;

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