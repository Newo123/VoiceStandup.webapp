<p align="center">
  <img src="./docs/assets/banner.svg" alt="Voice Standup Banner" width="100%">
</p>

<h1 align="center">🎙️ Voice Standup</h1>
<p align="center">
  <strong>Telegram Mini App для stand‑up отчётов с голосом и ИИ</strong>
</p>

<p align="center">
  <a href="https://voice-standup-webapp.vercel.app/">
    <img src="https://img.shields.io/badge/🚀_Демо-Vercel-black?logo=vercel&logoColor=white&style=for-the-badge" alt="Vercel">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/📄_Лицензия-MIT-green?style=for-the-badge" alt="MIT License">
  </a>
  <a href="https://github.com/yourusername/voice-standup/stargazers">
    <img src="https://img.shields.io/github/stars/yourusername/voice-standup?style=for-the-badge&logo=github" alt="GitHub stars">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white&style=flat" alt="TypeScript">
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white&style=flat" alt="Vite">
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white&style=flat" alt="Tailwind">
  <img src="https://img.shields.io/badge/TanStack_Query-5-FF4154?logo=reactquery&logoColor=white&style=flat" alt="TanStack Query">
  <img src="https://img.shields.io/badge/Telegram_Mini_App-26A5E4?logo=telegram&logoColor=white&style=flat" alt="Telegram">
</p>

---

## 💎 Что это?

**Voice Standup** — это не просто очередной трекер задач. Это **интеллектуальная система**, которая превращает хаотичные голосовые сообщения и текстовые заметки в **структурированные stand‑up отчёты**. Больше никаких «что‑то поделал» — только чёткие списки **Сделано**, **В планах** и **Препятствия**.

> 🚧 Проект в активной разработке. MVP готов, бэкенд и голосовое распознавание подключаются.

---

## 📱 Интерфейс

<p align="center">
  <em>⬇️ Скриншоты будут добавлены после завершения MVP ⬇️</em>
</p>

<!--
  🖼️ ЗАМЕНИ МЕСТА ДЛЯ СКРИНШОТОВ НА РЕАЛЬНЫЕ КАРТИНКИ:
  docs/screenshots/teams.png
  docs/screenshots/team.png
  docs/screenshots/reports.png
  docs/screenshots/profile.png
  docs/screenshots/invite.png
  docs/screenshots/report-detail.png
-->

<table align="center">
  <tr>
    <td align="center"><b>Команды</b></td>
    <td align="center"><b>Состав команды</b></td>
    <td align="center"><b>Лента отчётов</b></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/teams.png" width="250" alt="Команды"></td>
    <td><img src="docs/screenshots/team.png" width="250" alt="Команда"></td>
    <td><img src="docs/screenshots/reports.png" width="250" alt="Отчёты"></td>
  </tr>
  <tr>
    <td align="center"><b>Профиль</b></td>
    <td align="center"><b>Приглашение</b></td>
    <td align="center"><b>Детали отчёта</b></td>
  </tr>
  <tr>
    <td><img src="docs/screenshots/profile.png" width="250" alt="Профиль"></td>
    <td><img src="docs/screenshots/invite.png" width="250" alt="Приглашение"></td>
    <td><img src="docs/screenshots/report-detail.png" width="250" alt="Детали отчёта"></td>
  </tr>
</table>

---

## ⚡ Почему Voice Standup?

<table align="center">
  <tr>
    <td align="center" width="33%">
      <h3>🚀 Быстро</h3>
      Отправляй голосовое или текст — мы превратим это в готовый отчёт за секунды.
    </td>
    <td align="center" width="33%">
      <h3>🎯 Структурированно</h3>
      Автоматическое разделение на «Сделано», «В планах», «Препятствия».
    </td>
    <td align="center" width="33%">
      <h3>🤖 С ИИ‑помощником</h3>
      Распознавание речи и интеллектуальное структурирование текста.
    </td>
  </tr>
  <tr>
    <td align="center">
      <h3>👥 Команды</h3>
      Создавай команды, добавляй участников по ссылке-приглашению.
    </td>
    <td align="center">
      <h3>📊 Статистика</h3>
      Отслеживай активность: отчёты, дни активности, уровень и XP.
    </td>
    <td align="center">
      <h3>🔒 Безопасно</h3>
      Авторизация через Telegram — никаких паролей.
    </td>
  </tr>
</table>

---

## 🔄 Как это работает

```mermaid
graph LR
    A[🎤 Голосовое] --> B[🧠 ИИ-распознавание]
    C[📝 Текст] --> D[🔍 ИИ-структурирование]
    B --> D
    D --> E[📋 Структурированный отчёт]
    E --> F[📱 Telegram Mini App]
    F --> G[👥 Команда видит обновления]
    G --> H[⭐ Начисляются XP]

    style A fill:#f9f,stroke:#333,stroke-width:2px
    style C fill:#9cf,stroke:#333,stroke-width:2px
    style D fill:#ff9,stroke:#333,stroke-width:2px
    style E fill:#9f9,stroke:#333,stroke-width:2px
    style F fill:#f96,stroke:#333,stroke-width:2px
```
