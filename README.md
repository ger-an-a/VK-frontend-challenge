# Проект "Кошачий пинтерест" (тестовое задание)

## Смотреть здесь: 

- Проект написан на React + TypeScript. Собран с помощью Vite.

## Что сделано:
- при попытке перейти на любой роут кроме "/saved-cats" происходит редирект на главную страницу.
- на главной странице реализована бесконечная прокрутка. Карточки загружаются по 15 штук.
- по нажатию на кнопку лайка карточку можно добавить в "любимые" и убрать из "любимых".
- данные о "любимых" котиках хранятся в localStorage в виде JSON строки.
- на вкладке "любимые котики" отображаются добавленные в "любимые" котики.
- корректное отображение на ширине от 320px.

## Текст задания:

Необходимо реализовать интерфейс для просмотра котиков используя API https://thecatapi.com

Дизайн лежит тут - https://bit.ly/3utxaL2

- по умолчанию должна открываться вкладка "все котики"
- у котика должна быть возможность добавить в "любимые" и убрать из "любимых"
- данные о "любимых" котиках должны хранится на клиенте
- на вкладке "любимые котики" должны отображаться добавленные в "любимые" котики
- реализация адаптивности будет плюсом, но не обязательна
- бесконечная прокрутка будет плюсом, но не обязательна
- можно использовать любой фреймворк включая vanilla.js
