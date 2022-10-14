[![Tests for sprint 13](https://github.com/evgboch/express-mesto-gha/actions/workflows/tests-13-sprint.yml/badge.svg)](https://github.com/evgboch/express-mesto-gha/actions/workflows/tests-13-sprint.yml) [![Tests for sprint 14](https://github.com/evgboch/express-mesto-gha/actions/workflows/tests-14-sprint.yml/badge.svg)](https://github.com/evgboch/express-mesto-gha/actions/workflows/tests-14-sprint.yml)
# Проект Mesto фронтенд + бэкенд



## Описание
Привет! Данный проект является бэкэндом для проекта Mesto.

* Серверная часть написана на node js с использованием фреймворка express. 
* База данных развернута на основе MongoDB. Для работы с БД используется Mongoose. 
* Защита реализована посредством использования Helmet.
* Входящие данные валидируются на уровне запросов при помощи Joi, celebrate.
* Пароли пользователей в БД хранятся в виде хеша, для их шифрования используется bcryptjs.
* За авторизацию отвечает jsonwebtoken.




## Директории

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки   
`/models` — папка с файлами описания схем пользователя и карточки  
  

## Запуск проекта

`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload


## Ссылка на репозиторий проекта

https://github.com/evgboch/express-mesto-gha
