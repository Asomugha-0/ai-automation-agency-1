# Nova Automations Website

Production-ready React + Vite + Tailwind site with blog, SEO, chatbot, forms, and CI/CD to Vercel.

## Quickstart
```bash
npm install
npm run dev
```
Visit http://localhost:5173

## Configure
- **Chatbot**: `src/components/Chatbot.jsx` → replace `YOUR_PUBLIC_KEY`
- **Contact Form**: `src/components/Contact.jsx` → replace `YOUR_FORM_ID` (Formspree)
- **Newsletter**: `App.jsx` footer → replace `YOUR_MAILCHIMP_URL`
- **Analytics**: `index.html` → replace `G-XXXXXXX`
- **Domain/Sitemap**: set env `SITE_DOMAIN` in Vercel (e.g. https://nova-automations.com)

## Deploy
Push to `main`. GitHub Actions deploys to Vercel using secrets:
`VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.

## Blogging
Add `.md` files to `/content/blog/`. Frontmatter:
```
---
title: "Post Title"
date: "2025-09-09"
description: "Short SEO summary."
---
Content in Markdown...
```
