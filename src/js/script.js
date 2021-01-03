/* Задания на урок. Часть 1:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок. Часть 2:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ],
        add(film) {
            this.movies.push(film);
        },
        delete(index, film) {
            this.movies = this.movies.filter(movie => movie !== film);

            // Statment below delete the film by index
            // this.movies = this.movies.filter(movie => movie !== this.movies[index]);

            console.log(`Film "${film}" deleted`);
            console.log('movieDB.movies после удаления:', movieDB.movies);
        }
    };

    const refs = {
        adv: document.querySelectorAll('.promo__adv img'),
        poster: document.querySelector('.promo__bg'),
        genre: document.querySelector('.promo__genre'),
        movieList: document.querySelector('.promo__interactive-list'),
        addForm: document.querySelector('.add'),
        addInput: document.addForm.elements['film_name'],
        checkbox: document.addForm.elements.favorite,
    };

    console.log('movieDB.movies до изменений:', movieDB.movies);

    refs.addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = refs.addInput.value;
        const favorite = refs.checkbox.checked;

        if (newFilm) {
            newFilm = (newFilm.length > 21) ? `${newFilm.slice(0, 22)}...` : newFilm;

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.add(newFilm);
            sortArray(movieDB.movies);

            const moviesListHTML = createMovieListMarkup(movieDB, refs.movieList);
            renderMoviesList(refs.movieList, moviesListHTML);

            console.log('movieDB.movies после добавления:', movieDB.movies);
        }

        event.target.reset();
    });

    deleteAdvertisement(refs.adv);

    makeChanges();

    const moviesListHTML = createMovieListMarkup(movieDB, refs.movieList);

    renderMoviesList(refs.movieList, moviesListHTML);

    function renderMoviesList(parentRef, markup) {
        parentRef.insertAdjacentHTML('afterbegin', markup);

        document.querySelectorAll('.delete').forEach((btn, index) => {
            btn.addEventListener('click', (event) => {
                handleDeleteBtnClick(event, index);
            });
        });
    }

    function createMovieListMarkup({
        movies: films
    }, parent) {
        parent.innerHTML = '';
        sortArray(movieDB.movies);

        return films.reduce((markup, film, index) => markup + createMovieItemMarkup(film, index), '');

        // The same wtith array.map()
        // return movies
        //     .map((movie, index) => createMovieItemMarkup(movie, index))
        //     .join('');
    }

    function createMovieItemMarkup(film, index) {
        return `<li class="promo__interactive-item">${index + 1} ${film}
                    <div class="delete"></div>
                </li>`;
    }

    function deleteAdvertisement(array) {
        array.forEach(item => {
            item.remove();
        });
    }

    function makeChanges() {
        refs.genre.textContent = 'Драмма';
        refs.poster.style.background = 'url("images/bg.jpg")';
    }

    function sortArray(array) {
        array.sort();
    }

    function handleDeleteBtnClick(event, index) {
        const target = event.target;
        const parentNodeText = target.parentNode.textContent;
        const filmToDelete = parentNodeText.slice(parentNodeText.indexOf(' ')).trim();

        movieDB.delete(index, filmToDelete);
        target.parentNode.remove();

        const moviesListHTML = createMovieListMarkup(movieDB, refs.movieList);
        renderMoviesList(refs.movieList, moviesListHTML);
    }
});
