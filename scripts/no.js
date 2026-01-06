function o(){document.querySelectorAll("*").forEach(e=>{[...e.classList].filter(s=>s.endsWith("--nojs")).forEach(s=>e.classList.remove(s))})}export{o as removeNojsClasses};
