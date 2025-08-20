const counter = document.querySelector(".counter");
let count = 0;
setInterval(() => {
 if(count == 51) {
  clearInterval(count);
 }else {
  count+=1;
  counter.textContent = count + "%";
 }
}, 42);
