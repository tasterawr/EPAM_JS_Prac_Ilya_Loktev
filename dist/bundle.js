(()=>{"use strict";const e=document.getElementById("all_voices"),t=document.getElementById("microphone"),n=document.getElementById("stream"),c=document.getElementById("main_text"),o="#7f34ad";function l(){const c="dimgray";e.style.color=c,t.style.color=c,n.style.color=c}e.addEventListener("click",(function(){c.innerText="Active: All voices mode",l(),e.style.color=o})),t.addEventListener("click",(function(){c.innerText="Active: Speaker mode",l(),t.style.color=o})),n.addEventListener("click",(function(){c.innerText="Active: Stream mode",l(),n.style.color=o}))})();