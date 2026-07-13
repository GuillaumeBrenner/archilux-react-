# ArchiLux

Vitrine web (multilingue FR/EN) pour l'agence d'architecture, d'ingénierie et
d'immobilier **ArchiLux**, basée à Lomé (Togo).

## Stack

- **React 18** + **TypeScript**
- **Vite 5** (build & dev server)
- **React Router v6**
- **i18next** / **react-i18next** (FR / EN, fichiers dans `public/assets/i18n`)
- **AOS** (animations au scroll), **react-slick** (carrousel),
  **react-countup** (compteurs), **yet-another-react-lightbox** (galerie),
  **react-toastify** (notifications)

## Prérequis

- Node.js >= 18

## Installation

```bash
npm install
cp .env.example .env   # puis ajuster VITE_API_URL si besoin
```

## Scripts

| Commande            | Description                                        |
| ------------------- | ------------------------------------------------- |
| `npm run dev`       | Démarre le serveur de développement (port 3000).  |
| `npm run build`     | Vérifie les types puis build de production (`build/`). |
| `npm run preview`   | Sert le build de production localement.           |
| `npm run typecheck` | Vérifie les types sans émettre de fichiers.       |

## Variables d'environnement

Voir `.env.example`. Les variables exposées au client doivent être préfixées
par `VITE_`.

| Variable       | Description                                        | Défaut                  |
| -------------- | -------------------------------------------------- | ----------------------- |
| `VITE_API_URL` | URL de base du backend d'envoi du formulaire mail. | `http://127.0.0.1:8000` |

Le formulaire de contact envoie une requête `POST {VITE_API_URL}/send-mail`.

## Structure

```
src/
├── main.tsx            Point d'entrée (createRoot)
├── App.tsx             Routeur + écran de chargement
├── i18n.ts             Configuration i18next
├── styles/theme.css    Design tokens (couleurs, typo, espacements…)
└── components/
    ├── Navbar, Footer, HeroSection, HomeAbout, HomeServices,
    │   Cards, Slick, Button, LangSelector
    └── pages/          Home, Services, Projects, About, Contact
```

Les couleurs, polices, espacements, ombres et rayons sont centralisés en
variables CSS dans `src/styles/theme.css`.
