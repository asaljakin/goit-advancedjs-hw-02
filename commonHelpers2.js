import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as l,i as h}from"./assets/vendor-651d7991.js";const e={startBtn:document.querySelector("[data-start]"),timeInput:document.querySelector("input#datetime-picker"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]")},f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const r=new Date;if(t[0]<=r){i();return}e.startBtn.removeAttribute("disabled")}};function i(){h.error({position:"topRight",message:"Please choose a date in the future"})}function s(t){return String(t).padStart(2,0)}function p(t){const u=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:u,hours:c,minutes:d,seconds:m}}e.startBtn.setAttribute("disabled","");l("input#datetime-picker",f);e.startBtn.addEventListener("click",y);function y(){const t=new Date(e.timeInput.value),r=new Date;let n=t-r;if(e.startBtn.setAttribute("disabled",""),n<=0){i();return}e.timeInput.setAttribute("disabled","");const a=setInterval(()=>{const o=p(n);e.days.textContent=s(o.days),e.hours.textContent=s(o.hours),e.minutes.textContent=s(o.minutes),e.seconds.textContent=s(o.seconds),n-=1e3,n<=0&&clearInterval(a)},1e3)}
//# sourceMappingURL=commonHelpers2.js.map
