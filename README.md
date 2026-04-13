# 🧮 Africa Soroban Championship (ASC)

A continent-wide educational initiative transforming numeracy education across Africa through competitive mental math.

## 🗂 Project Structure

```
├── src/                  # Next.js frontend
│   ├── app/
│   │   ├── page.tsx          # Landing page
│   │   ├── about/            # About ASC
│   │   ├── compete/          # Competition levels
│   │   ├── register/         # Registration form
│   │   ├── partners/         # Partnership tiers
│   │   └── contact/          # Contact form
│   ├── components/           # Shared UI components
│   └── lib/api.ts            # API client
│
└── backend/              # Express.js REST API
    └── src/
        ├── server.js
        └── routes/
            ├── registrations.js
            ├── competitions.js
            ├── partners.js
            └── contact.js
```

## 🚀 Getting Started

### Frontend (Next.js)

```bash
# Install dependencies
npm install

# Copy env file
cp .env.example .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Backend (Express)

```bash
cd backend

# Install dependencies
npm install

# Copy env file
cp .env.example .env

# Run dev server
npm run dev
```

API runs on [http://localhost:5000](http://localhost:5000)

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/registrations` | List all registrations |
| POST | `/api/registrations` | Submit registration |
| GET | `/api/competitions` | List competition levels |
| GET | `/api/competitions/:level` | Get specific level |
| GET | `/api/partners/tiers` | List partnership tiers |
| POST | `/api/partners/inquire` | Submit partner inquiry |
| POST | `/api/contact` | Send contact message |

## 🎨 Brand Colors

| Color | Hex |
|-------|-----|
| Green | `#006B3F` |
| Gold  | `#FCD116` |
| Red   | `#CE1126` |

## 📄 License

© Africa Soroban Championship. All rights reserved.
