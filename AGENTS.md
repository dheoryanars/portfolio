# Agent instructions — Dheoryan Portfolio

This project is worked on by two AI agents — Claude (via Cowork) and Codex — directed by the user.

**Mandatory handoff protocol:**
1. Before doing ANY work: read `WORKLOG.md` (newest entry is on top) to learn current state, pending decisions, and blocked items.
2. Do not implement items marked BLOCKED/PENDING without the user's explicit go-ahead.
3. After finishing work: append a new entry to the top of `WORKLOG.md` using the format documented there. Never edit or delete previous entries.

**Project facts:**
- Personal portfolio of Dheoryan Putra Arsi. React 18 + Vite 6 + Tailwind 4, exported from Figma Make, deployed on Vercel.
- PRODUCTION URL: https://dheoryan.vercel.app/ (repo About-link portfolio-dedsecteam.vercel.app is the same deployment). Repo: https://github.com/dheoryanars/portfolio — Vercel auto-deploys on push to main.
- Dev server: `npm run dev` on port 5174.
- Almost all content lives in `src/app/App.tsx` (~4,100 lines): WORKS, CASE_META, CASE_HERO_DETAILS, CASE_MOBILE_DETAILS, hero/about/process copy, and all sections.
- Case study visual imports: `src/imports/*`. Assets: `public/case-studies/`, `public/thumbnails/`.
- Custom components: `src/app/components/VirtualPet.tsx` (Equinox pet), `parallax.tsx`.
