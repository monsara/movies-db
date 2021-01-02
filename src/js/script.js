/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const adv = document.querySelectorAll('.promo__adv img');
const poster = document.querySelector('.promo__bg');
const genre = poster.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list');

// 1) Удалить все рекламные блоки со страницы(правая часть сайта)
adv.forEach(item => {
    item.remove();
});

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
genre.textContent = 'Драмма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img. 
// Реализовать только при помощи JS
poster.style.background = 'url("images/bg.jpg")';

console.log(poster);

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту
movieList.innerHTML = '';

movieDB.movies.sort();

// 5) Добавить нумерацию выведенных фильмов 
let moviesHTML = '';

movieDB.movies.forEach((film, i) => {
    moviesHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;

    // movieList.innerHTML += `
    //     <li class="promo__interactive-item">${i + 1} ${film}
    //         <div class="delete"></div>
    //     </li>
    // `;
});

movieList.insertAdjacentHTML('afterbegin', moviesHTML);
