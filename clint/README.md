# alexkim.dev — React + Vite + Express Portfolio

Multi-page developer portfolio with a **live contact form** that emails you when someone reaches out.

**Stack:** React 18 · Vite 5 · Express 4 · Nodemailer

---

## Quick Start

```bash
# 1. Install frontend deps
npm install

# 2. Install backend deps
npm run server:install

# 3. Configure email
cp server/.env.example server/.env
#    ↳ edit server/.env with your SMTP credentials (see below)

# 4. Start both frontend + backend
npm run dev
#    Frontend → http://localhost:5173
#    Backend  → http://localhost:4000
```

---

## Email Setup — Gmail (5 min)

1. Enable **2-Step Verification** on your Google Account.
2. Go to **Google Account → Security → App Passwords**.
3. Generate an App Password — select "Mail" + "Other".
4. Copy the 16-character password.

Edit `server/.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your.gmail@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx

MAIL_TO=your.gmail@gmail.com
MAIL_FROM="alexkim.dev Contact Form <your.gmail@gmail.com>"
MAIL_REPLY_FROM="Alex Kim <your.gmail@gmail.com>"

CORS_ORIGIN=http://localhost:5173
PORT=4000
```

Other providers: Outlook (`smtp.office365.com:587`), Mailgun (`smtp.mailgun.org:587`), SendGrid (`smtp.sendgrid.net:587`).

---

## What Happens When Someone Submits

1. Frontend validates fields (name, valid email, message ≥ 10 chars).
2. `POST /api/contact` is called — server re-validates + rate-limits (5/15 min per IP).
3. **You** receive a styled HTML email with sender details and a one-click Reply button.
4. **Visitor** receives a friendly auto-reply confirming their message landed.

---

## Project Structure

```
alexkim-portfolio/
├── index.html
├── vite.config.js          ← Proxies /api → localhost:4000 in dev
├── package.json
├── .gitignore
├── public/favicon.svg
│
├── server/
│   ├── index.js            ← Express entry (CORS, routes, health check)
│   ├── package.json
│   ├── .env.example
│   ├── routes/contact.js   ← POST /api/contact (validate + rate-limit + send)
│   └── utils/mailer.js     ← Nodemailer + HTML email templates
│
└── src/
    ├── main.jsx
    ├── App.jsx              ← Router shell
    ├── styles/globals.css
    ├── data/index.js        ← All static content
    ├── components/
    │   ├── GrainOverlay.jsx
    │   ├── SculptureCanvas.jsx
    │   ├── Nav.jsx
    │   ├── Footer.jsx
    │   ├── DeviceFrame.jsx
    │   ├── SkillBar.jsx
    │   └── SectionDivider.jsx
    └── pages/
        ├── HomePage.jsx
        ├── WorkPage.jsx
        ├── AboutPage.jsx
        ├── SkillsPage.jsx
        ├── BlogPage.jsx
        └── ContactPage.jsx  ← Calls API, handles loading/error/success
```

---

## API

`POST /api/contact`  
Body: `{ name, email, budget?, message }`  
200 → `{ ok: true, message: "..." }`  
422 → `{ ok: false, errors: { field: "msg" } }`  
429 → rate limited  
`GET /api/health` → `{ ok: true, time: "..." }`

---

## Customise

| What | Where |
|------|-------|
| Projects, skills, blog, timeline | `src/data/index.js` |
| Colour palette | `src/styles/globals.css` `:root` |
| Email HTML templates | `server/utils/mailer.js` |
| Rate limit | `server/routes/contact.js` |

---

## Production

Build frontend: `npm run build` → deploy `dist/` to Vercel/Netlify.  
Deploy `server/` as a Node service on Railway/Render/Fly.io — set all `SMTP_*`, `MAIL_*`, and `CORS_ORIGIN` env vars in your hosting dashboard.

---

MIT License
