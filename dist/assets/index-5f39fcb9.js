(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();document.querySelector("#app").innerHTML=`
  <div>
    <header class='p-5'>
      <h1 class='font-bold text-2xl'>Challenge book</h1>
      </header>
      <div class='px-5'>
        <h6 class='my-2 ml-3 font-bold'>Febrero UI-Tailwind</h6>
        <ol>
          <li class='ml-6'><a class='hover:underline' href=''>↪ 027|MusicPlayer-UI</a></li>
        </ol>
      </div>
  </div>
`;
