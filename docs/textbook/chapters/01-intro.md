# Глава 1. Как выполняются скрипты

## 1.1. Что такое скрипт Affinity

Скрипт — синхронный JavaScript, который выполняется **внутри** Affinity
(Designer / Photo / Publisher). Вы отправляете код через MCP-инструмент
`affinity_execute_script`, Affinity выполняет его и возвращает текст из `console.log()`.

Три следствия:

1. **Нет `return`.** Результат — только `console.log()`.
2. **Нет `module.exports`.** Файл должен выполняться сразу, сверху вниз.
3. **Первая строка — `"use strict"`.**

## 1.2. Самый маленький скрипт

```js
"use strict";
console.log('Hello from Affinity!');
```

Выполните его через `affinity_execute_script` — в ответ придёт строка `Hello from Affinity!`.

## 1.3. MCP-сервер

Сервер работает на `http://localhost:6767` (конфиг `.mimocode/config.json`).
Инструменты: выполнение, чтение документации SDK, библиотека скриптов,
рендер спреда/выделения, поиск подсказок. Полный список — в `guides/mcp-tools.md`.

Обязательное начало работы:

```
affinity_read_sdk_documentation_topic(filename="preamble")
affinity_search_sdk_hints(prompt="ваша задача")
```

## 1.4. Ограничения среды

- Файловая система — **только рабочий стол** (`app.userDesktopPath`).
- Рендер результата — JPEG не больше 1024px.
- Если команда вернула `NOT_ALLOWED` — пользователь запретил AI/файлы/сеть
  в настройках Affinity. Это не баг скрипта.
- Скрипты синхронные: `*Async`-варианты методов SDK вам не нужны.

## Упражнения

1. Выполните hello-скрипт и найдите его вывод в ответе инструмента.
2. Прочитайте `preamble` через `affinity_read_sdk_documentation_topic`.
3. Выполните `affinity_list_sdk_documentation` и найдите темы `document.js` и `dialog.js`.
