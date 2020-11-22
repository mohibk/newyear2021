const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('mins')
const seconds = document.getElementById('secs')

const newYear = new Date('January 1 2021 00:00:00').getTime();

const ticker = () => {
  const currentTime = new Date().getTime();
  const diff = newYear - currentTime;
  
  const d = Math.round(diff / 1000 / 60 / 60 / 24);
  const h = Math.round(diff / 1000 / 60 / 60) % 24;
  const m = Math.round(diff / 1000 / 60) % 60;
  const s = Math.round(diff / 1000) % 60;

  console.log(d, h, m, s,  currentTime, newYear)

  days.innerText = d < 10 ? '0' + d : d;
  hours.innerText = h < 10 ? '0' + h : h;
  minutes.innerText = m < 10 ? '0' + m : m;
  seconds.innerText = s < 10 ? '0' + s : s;

}
//  ticker();
 setInterval(ticker, 1000)