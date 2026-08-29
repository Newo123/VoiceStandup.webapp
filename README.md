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
  <a href="https://github.com/Newo123/VoiceStandup.webapp/stargazers">
    <img src="https://img.shields.io/github/stars/Newo123/VoiceStandup.webapp?style=for-the-badge&logo=github" alt="GitHub stars">
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

**Voice Standup** — это интеллектуальная система, которая превращает хаотичные голосовые сообщения и текстовые заметки в **структурированные stand‑up отчёты**. Больше никаких «что‑то поделал» — только чёткие списки **Сделано**, **В планах** и **Препятствия**.

> 🚧 Проект в активной разработке. MVP готов, бэкенд и голосовое распознавание подключаются.

---

## 📱 Интерфейс

<div align="center">

<style>
.phone-slider {
  position: relative;
  max-width: 320px;
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  background: #000;
}

.phone-slider-wrapper {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  width: 900%;
}

.phone-slide {
  width: 11.11%;
  flex-shrink: 0;
}

.phone-slide img {
  width: 100%;
  display: block;
}

.phone-slider-nav {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
  background: rgba(0,0,0,0.5);
  padding: 6px 14px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.phone-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.phone-dot:hover {
  background: rgba(255,255,255,0.6);
}

.phone-input {
  display: none;
}

.phone-input:nth-child(1):checked ~ .phone-slider-wrapper { transform: translateX(0%); }
.phone-input:nth-child(2):checked ~ .phone-slider-wrapper { transform: translateX(-11.11%); }
.phone-input:nth-child(3):checked ~ .phone-slider-wrapper { transform: translateX(-22.22%); }
.phone-input:nth-child(4):checked ~ .phone-slider-wrapper { transform: translateX(-33.33%); }
.phone-input:nth-child(5):checked ~ .phone-slider-wrapper { transform: translateX(-44.44%); }
.phone-input:nth-child(6):checked ~ .phone-slider-wrapper { transform: translateX(-55.55%); }
.phone-input:nth-child(7):checked ~ .phone-slider-wrapper { transform: translateX(-66.66%); }
.phone-input:nth-child(8):checked ~ .phone-slider-wrapper { transform: translateX(-77.77%); }
.phone-input:nth-child(9):checked ~ .phone-slider-wrapper { transform: translateX(-88.88%); }

.phone-input:nth-child(1):checked ~ .phone-slider-nav label:nth-child(1) { background: #e94560; transform: scale(1.3); }
.phone-input:nth-child(2):checked ~ .phone-slider-nav label:nth-child(2) { background: #e94560; transform: scale(1.3); }
.phone-input:nth-child(3):checked ~ .phone-slider-nav label:nth-child(3) { background: #e94560; transform: scale(1.3); }
.phone-input:nth-child(4):checked ~ .phone-slider-nav label:nth-child(4) { background: #e94560; transform: scale(1.3); }
.phone-input:nth-child(5):checked ~ .phone-slider-nav label:nth-child(5) { background: #e94560; transform: scale(1.3); }
.phone-input:nth-child(6):checked ~ .phone-slider-nav label:nth-child(6) { background: #e94560; transform: scale(1.3); }
.phone-input:nth-child(7):checked ~ .phone-slider-nav label:nth-child(7) { background: #e94560; transform: scale(1.3); }
.phone-input:nth-child(8):checked ~ .phone-slider-nav label:nth-child(8) { background: #e94560; transform: scale(1.3); }
.phone-input:nth-child(9):checked ~ .phone-slider-nav label:nth-child(9) { background: #e94560; transform: scale(1.3); }

.phone-label {
  position: absolute;
  bottom: 64px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background: rgba(0,0,0,0.6);
  padding: 4px 14px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  z-index: 5;
  white-space: nowrap;
}

.phone-counter {
  position: absolute;
  top: 12px;
  right: 12px;
  color: white;
  background: rgba(0,0,0,0.5);
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 11px;
  backdrop-filter: blur(10px);
  z-index: 5;
  border: 1px solid rgba(255,255,255,0.1);
}

@media (max-width: 480px) {
  .phone-label {
    font-size: 10px;
    padding: 3px 10px;
    bottom: 58px;
  }
  .phone-slider-nav {
    gap: 6px;
    padding: 4px 10px;
    bottom: 12px;
  }
  .phone-dot {
    width: 6px;
    height: 6px;
  }
}
</style>

<div class="phone-slider">
  <input type="radio" name="phone" class="phone-input" checked>
  <input type="radio" name="phone" class="phone-input">
  <input type="radio" name="phone" class="phone-input">
  <input type="radio" name="phone" class="phone-input">
  <input type="radio" name="phone" class="phone-input">
  <input type="radio" name="phone" class="phone-input">
  <input type="radio" name="phone" class="phone-input">
  <input type="radio" name="phone" class="phone-input">
  <input type="radio" name="phone" class="phone-input">

  <div class="phone-counter">1 / 9</div>

  <div class="phone-slider-wrapper">
    <div class="phone-slide">
      <img src="./docs/screenshots/teams.jpg" alt="Мои команды">
      <div class="phone-label">📋 Мои команды</div>
    </div>
    <div class="phone-slide">
      <img src="./docs/screenshots/users.jpg" alt="Участники">
      <div class="phone-label">👥 Участники</div>
    </div>
    <div class="phone-slide">
      <img src="./docs/screenshots/team.jpg" alt="Состав команды">
      <div class="phone-label">👤 Состав команды</div>
    </div>
    <div class="phone-slide">
      <img src="./docs/screenshots/reports.jpg" alt="Лента отчётов">
      <div class="phone-label">📊 Лента отчётов</div>
    </div>
    <div class="phone-slide">
      <img src="./docs/screenshots/profile.jpg" alt="Профиль">
      <div class="phone-label">👤 Профиль</div>
    </div>
    <div class="phone-slide">
      <img src="./docs/screenshots/report-detail.jpg" alt="Детали отчёта">
      <div class="phone-label">📄 Детали отчёта</div>
    </div>
    <div class="phone-slide">
      <img src="./docs/screenshots/invite.jpg" alt="Приглашение">
      <div class="phone-label">📨 Приглашение</div>
    </div>
    <div class="phone-slide">
      <img src="./docs/screenshots/create-team.jpg" alt="Создание команды">
      <div class="phone-label">✏️ Создание команды</div>
    </div>
    <div class="phone-slide">
      <img src="./docs/screenshots/light-theme.jpg" alt="Светлая тема">
      <div class="phone-label">🌙 Светлая тема</div>
    </div>
  </div>

  <div class="phone-slider-nav">
    <label class="phone-dot"></label>
    <label class="phone-dot"></label>
    <label class="phone-dot"></label>
    <label class="phone-dot"></label>
    <label class="phone-dot"></label>
    <label class="phone-dot"></label>
    <label class="phone-dot"></label>
    <label class="phone-dot"></label>
    <label class="phone-dot"></label>
  </div>
</div>

<br>
<em>💡 Кликай на точки, чтобы переключать экраны</em>

</div>

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
