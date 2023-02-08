# Shakespeare

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Description

- плюсы: генерация страниц на основе json, использование библиотеки fabric.js, NgRx стэйт, вынесена бизнес логика из компонентов
- минусы: отсутствуют типы параметров во многих методах, нет e2e тестов, не реализован высплывающий контрол-бар для страницы canvas, не реализовано изменение прозрачности, использована библиотека fabric.js вместо чистого canvas, возможное добавление других типов аннотаций не предсматривает маштабирование согласно принципу Open/Close, пэйлоад объектов для загрузки на сервер излишен
- known issues: реализовать маштабируемую архитектуру используя полиморфизм дженериков, принципы SOLID, e2e тестрирование
