"use strict";var movieDB={movies:["Логан","Лига справедливости","Ла-ла лэнд","Одержимость","Скотт Пилигрим против..."]},adv=document.querySelectorAll(".promo__adv img"),poster=document.querySelector(".promo__bg"),genre=poster.querySelector(".promo__genre"),movieList=document.querySelector(".promo__interactive-list");adv.forEach(function(e){e.remove()}),genre.textContent="Драмма",poster.style.backgrounImage='url("../images/bg.jpg")',movieList.innerHTML="",movieDB.movies.sort();var moviesHTML="";movieDB.movies.forEach(function(e,o){moviesHTML+='\n        <li class="promo__interactive-item">'.concat(o+1," ").concat(e,'\n            <div class="delete"></div>\n        </li>\n    ')}),movieList.insertAdjacentHTML("afterbegin",moviesHTML);