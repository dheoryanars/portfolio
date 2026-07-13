# WORKLOG — Dheoryan Portfolio

## 2026-07-13 08:45 - [Codex] Updated thumbnails deployed to production

**Done:** Validated five replacement PNG thumbnails at a consistent `648x405` size, committed only `public/thumbnails/cmis-suite.png`, `kitalabel-bos.png`, `kitalabel.png`, `mailtarget-app.png`, and `sonar.png` as `8817161`, then pushed `main` to GitHub (`73c5a02..8817161`). Vercel production auto-deployment was triggered by the push.

**Found:** The replacement images are substantially smaller than the previous files while preserving a consistent thumbnail aspect ratio. Local untracked development logs and `push.bat` were excluded.

**Next:** Allow Vercel to finish building, then visually confirm the updated work-grid thumbnails at `https://dheoryan.vercel.app/`.

## 2026-07-09 11:15 - [Codex] Production push succeeded

**Done:** Read `AGENTS.md` and `WORKLOG.md`, checked Git state, committed the tracked local deploy-relevant changes (`AGENTS.md`, `WORKLOG.md`, `src/styles/theme.css`) as `6707d10`, and pushed `main` to `origin`. GitHub accepted the push (`8e1bddb..6707d10 main -> main`), so Vercel should auto-deploy production from `origin/main`.

**Found:** Git for Windows is installed at `C:\Program Files\Git\cmd\git.exe` but not on PATH. Untracked local server/log files remain excluded from the commit.

**Next:** Verify the Vercel production deployment at `https://dheoryan.vercel.app/` after Vercel finishes building.

## 2026-07-08 11:21 - [Codex] Push attempt failed

**Done:** Read `AGENTS.md` and latest `WORKLOG.md` entry before acting. Did not rebase, amend, commit, or modify project files/history. Attempted to push final `main` to GitHub.

**Found:** `git` is not available on PATH, and the default Git-for-Windows locations used by `push.bat` do not exist (`C:\Program Files\Git\cmd\git.exe`, `%LOCALAPPDATA%\Programs\Git\cmd\git.exe`). Sandbox WSL status check returned access denied. Escalated fallback command `wsl git -C "/mnt/d/Porto/Dheoryan ars" push origin main` timed out after about 124 seconds with no success output, likely waiting on WSL/network/auth.

**Next:** Push still needs to be completed from an environment with working Git/GitHub auth, then Vercel should auto-deploy from `origin/main`.
## 2026-07-08 — [Claude] QA pass + both known bugs fixed (commit 897f1c4)

**Done:**
- QA (dev server on :5173 today, launched via new dev.bat): design-system hero/copy ✓, Read/See + Mailtarget merged "Part two — The public story" sections render seamlessly on desktop ✓, CMIS 10 mobile sections all present (visual index auto-shows "10 case sections") ✓, KitaLabel pages load ✓, no console errors ✓.
- FIXED back-pill overlap: pill hides on scroll-down (>120px), returns on scroll-up; pointer-events disabled while hidden. In CaseStudyPage.
- FIXED white flash (root cause found): html/body used the light --background token while the app paints dark on inner divs — route transitions (AnimatePresence mode="wait" gap) and fast-scroll overdraw exposed white. Pinned html,body to #0a0a0a in src/styles/theme.css. Verified: transitions now fade through dark.
- DS overview card "overlap": caption sits on scrim, fine; residual clutter comes from placeholder thumbnail — revisit when final images land.
- Note: mobile-width visual re-check skipped (user's Chrome window maximized, resize_window ineffective); mobile layout was verified 07-07, only copy changed since.

**DMS Figma mining (same day, commit 65b19ac):** Migrasi DMS page (8128-151485) = admin migration workflow: edit access rights, re-activate obsolete docs, change effective dates, view doc/revision logs, migrate — NOT a bulk import. Improvement Phase 2 page (10259-117201) = numbered improvement clusters (2–9), "Flow discovery" board with PHOTOS of real paper forms + handwritten flows, [FSD] Documentation, Project Execution Approval, Tooltip Tour, Watermarked Document Preview layer. CMIS sections updated: 02 now "Designed from the paper itself" (paper-first discovery), 04 now "The Migration" (replaces key-screens section), 07 iteration now covers DMS Phase 2 + tooltip tour alongside PR versions. Still 10 sections.

**SONAR restored (commit 535d668):** Reworked as deliberate-scoping story — hero "Deliberately small.", sections rebuilt around the one-job scope decision (what it refused to become). Back in WORKS as 07 (archive row), category "Chrome Extension · Deliberately Small Product". Grid = 4 featured + 3 archive. Verified live, no errors.

**Real numbers landed (commit 8969d7e), facts from user:** BOS = 6–15 staff daily (copy says "6+ staff run their day in it"; hero stat "1 source of truth" → "6+ staff"). Calculator = live on kitalabel.com (user did NOT confirm "orders flow through it" or "sales quotes with it" — outcome softened to self-serve/24-7/live, dropped the "removed spreadsheet quoting from sales process" claim). Mailtarget case dates corrected to 2022–2023 everywhere (WORKS year, hero stat, CASE_META, mobile section 06) to match employment.

**Flagship voice pass (commit 1c31bff):** KitaLabel BOS + Calculator mobile walkthroughs rewritten to evidence voice (they were skipped in the original pass by user request; narrator voice is now 0 occurrences sitewide). Eyebrow casing fixed: "Kitalabel" → "KitaLabel". BOS hero eyebrow, stats and pet messages verified live. Proof bullets updated to citable facts (6+ staff / live on kitalabel.com / designed+built solo AI-assisted).

**Side projects (discussed, NOT implemented — user parked them):** Slypnir agency (co-founder) → experience line + contact routing when resumed; gated on whether current employer knows. Moots (moots.lovable.app, "Mutuals") → archive-row candidate: live tribe-based meetup social app with real users (tribes, ventures with slots + chat, Jakarta activity), AI-assisted build. Open facts needed: Slypnir years, Moots role/status sentence.

**BOS "flying blind" section illustrated (commit 3494452):** Added PainViz1–4 inline SVG mini-diagrams to the 4 pain cards in `src/imports/CaseStudyKitalabelBos-1/index.tsx` (inserted before Frame121; wired after each card number; fixed row heights h-[216px]/h-[196px] → items-stretch). Diagrams: disconnected tools + missing hub "?", identical high-value/lapsed avatars with red "=", mismatched price tags "≠", three roles → one unfiltered screen with red eye. NOTE: Edit-tool tail-truncation also affects import files — this file was rebuilt from git HEAD + scripted re-apply; prefer scripted edits on 12k-line imports. Pattern is reusable for other cases' desktop sections if user wants more illustration passes.

**Process section final (commit 1b9aedb):** User correctly critiqued the 3D ring — it didn't represent a process (no sequence/direction/overview). Replaced with directed pipeline: all 4 cards visible, progress track with nodes + forward-filling segments, auto-advance every 3.4s while in view (stops permanently once user clicks), dashed return arc labeled "the loop — deliver feeds the next discover" that turns purple on wrap. Mobile: stacked cards + ↓ separators + loop line. Ring code deleted (pattern noted for possible reuse on testimonials/Lab if ever needed).

**Polish round (commits a184a7f → 799ba62):** hero preview caption shrunk sitewide (22-34px → 15-20px); process kickers de-duplicated ("01 Discover"→"01"); Process section rebuilt as 360° interactive 3D ring (drag/arrows/indicators, 8 slots at 45° with doubled steps so neighbours stay visible, spring snap, "deliver feeds the next discover" hint). ProcessCard + useProcessParallax usage removed. NEEDS: real-phone check of the ring (drag vs scroll behavior; touchAction pan-y is set). Deploy still BLOCKED: machine has no git (Codex confirmed) — user to install Git for Windows, then push.bat → Vercel auto-deploy → verify https://dheoryan.vercel.app/ (17+ commits pending).

**Next:** final thumbnails/screenshots (user) → full visual pass → deploy to Vercel. Also consider: real mobile-device check of new copy lengths.

## 2026-07-08 00:05 — [Claude] Phase 3: work grid featured+archive, Read/See rename, commits

**Done (verified live, committed):**
- Work grid restructured: 2×2 featured (kitalabel-bos, kitalabel, readsee-dashboard, cmis-suite) via `WORKS.slice(0,4)` + new `ArchiveRow` component for the rest under "+ More work" (design-system, mailtarget-app). Featured order = WORKS array order — reorder WORKS to change it.
- "Read/See Dashboard" → "Read/See" (WORKS title + CASE_HERO_DETAILS eyebrow).
- Universal Design System confirmed TEAM project by user — role attribution added (focus bullet + outcome). Team tally final: Read/See, Mailtarget App, CMIS, Design System = team (design was user's); KitaLabel BOS + Calculator = solo AI-assisted.
- Committed: 1f699c6 (pre-session WIP), 28091e6 (restructure), 23259c9 (grid). Working tree clean for tracked files.
- Git locks: sandbox blocks git's lock cleanup — if commit fails with "HEAD.lock exists", `rm -f .git/*.lock` first (file-delete permission enabled for this folder).

**Known issue for next agent:** Edit-tool writes on App.tsx repeatedly truncate the file tail (~5 incidents this session, one null-byte append). ALWAYS run esbuild syntax check after each edit AND verify `export default function App` still exists (a truncation ending inside a comment passes syntax check!). Last-good backup kept at /tmp/App.tsx.claude-backup (sandbox, not persistent).

**Addendum (00:30):** Fixed mobile portrait crop in AboutSection — container was fixed-height landscape on phones; now `aspectRatio: 4/5` + `maxHeight: 550` (commit 517b997). About stats: "5+ design systems" → real number 2 per user, suffix removed (commit d3a14a1). About section otherwise validated: 4+ years ✓, 9+ projects ✓ (career count).

**Addendum (CMIS facts from user, 00:50):** Procurement/Purchase Request module is NOT a from-paper digitization — user REDESIGNED it from an existing "Procurement Menu v1", all four tracks (materials/tools/equipment/non-tool). Watermark system = user's design (digital watermarks triggered by document status in DMS). Interim copy fix shipped (commit 9b2cc55): section 05 now says "Procurement, redesigned from v1". PENDING: user will share the v1 design file — when it arrives, expand procurement into a proper before/after redesign narrative (what v1 got wrong, what was kept vs killed, per-track decisions). Consider whether procurement then deserves 2-3 sections.

**Addendum (Figma evidence session, 01:20):** User shared Figma links (Cahaya CMIS file i4syXClCF1uumbUVAHGDGA): DMS main 4453-247773, DMS physical-docs migration 8128-151485, DMS Improvement Phase 2 10259-117201; PR v1 vs redesigned pairs — Non Tools 3987-37038 / 10977-109923, Procurement 7090-466151 / 14071-117534, Tools 7090-467617 / 14670-115720. Inspected via Chrome (Figma MCP not authed). OBSERVED: v1 = dense flat tables, stacked red row-actions, status as colored text, detail requires leaving list; redesign = tabs+search/filters, expandable in-place row detail, batch selection, one primary action, status chips; process = versioned sections (v1.1, v1.1.2) with "MOM" meeting-note layers beside flows. SHIPPED (commit 784ee5b): CMIS mobile walkthrough now 10 sections — procurement deep-dive is 3 (05 inherited live v1, 06 redesign grammar, 07 versioned iteration); TTI→08, outcomes→09; focus bullet updated. NOT yet mined: DMS migration + Phase 2 pages (could strengthen DMS sections similarly).

**AGREED PLAN (user confirmed, execute in order next session):**
1. Full QA pass — all 6 case pages, desktop + mobile, especially merged "public story" sections (never visually verified) and the "Single source of truth" text overlap in design-system overview card.
2. Fix bugs: back-pill overlap (small), white-flash on fast scroll (debugging session).
3. Mine DMS Figma pages (migration 8128-151485 + Phase 2 10259-117201) → strengthen DMS sections like procurement.
4. BLOCKED on user: real stat numbers (KitaLabel usage, BOS staff count), Mailtarget dates question.
5. SONAR rework (deliberate-scoping story) → restore to archive.
6. Final thumbnails from user → commit, push, deploy to Vercel.

**Still open:** back-pill overlap on mobile; white-flash frames during fast scroll (seen on desktop too, likely parallax/AnimatePresence — real issue, not just screenshot timing); real numbers for stat blocks (user to supply); About "9+ projects shipped" review; Mailtarget dates question (employment 2022–2023 vs case 2023–2024); SONAR restoration when reworked.


Shared handoff log between Claude and Codex.
Protocol: read the latest entry BEFORE starting work. Append a new entry AFTER finishing (never edit old entries). Newest entry on top.

Entry format:

```
## YYYY-MM-DD HH:MM — [Agent] Short title
**Done:** what was actually changed/verified (files touched if any)
**Found:** issues discovered, decisions made, or user feedback
**Next:** concrete next steps, and anything BLOCKED waiting on the user's decision
```

---

## 2026-07-07 23:10 — [Claude] Case-study restructure phase 1: Read/See + Mailtarget rewrites & merges

**Done (all in `src/app/App.tsx`, verified live on :5174):**
- Merged marketing-site cases into product siblings: `readsee-website` → `readsee-dashboard`, `mailtarget-web` → `mailtarget-app`. Removed from `WORKS` (now 7 items, renumbered 01–07), `CASE_STUDIES`, `CASE_META`, `CASE_HERO_DETAILS`, `CASE_MOBILE_DETAILS`.
- New `MERGED_PUBLIC_STORY` map + desktop render block in `CaseStudyPage`: appends a "Part two — The public story" divider section + the merged case's imported Figma component below the sibling's desktop content. Mobile gets the merged story as a rewritten section inside the sibling's `CASE_MOBILE_DETAILS`.
- Rewrote copy in evidence-based voice (recipe: delete narrator → tension → my move → consequence) for `readsee-dashboard` and `mailtarget-app` across CASE_META, CASE_HERO_DETAILS, CASE_MOBILE_DETAILS. New headlines: "700 screens didn't need 700 designs." / "Three products' worth of UI, unified into one."

**Incident (resolved):** App.tsx got truncated at line 3942 during editing (mixed python-write + Edit-tool race). Restored by reconstructing the tail (CaseStudyPage remainder + App component) from session context and the dist bundle. File now 4,101 lines, syntax-checked with esbuild, renders clean. LESSON: never mix scripted writes and editor writes on App.tsx in one session; there were ~600 lines of uncommitted pre-session changes so `git checkout` was NOT safe. RECOMMEND: commit current working state ASAP.

**Addendum (same session):** User corrected facts — Read/See Dashboard and Mailtarget App were TEAM projects; user's role was design only. Copy updated to precise attribution: "My role: product designer on the X team", "I owned the design side within the team". Rule for all agents: "I" only for design work the user personally did; team framing for product/build claims. Do not solo-credit team projects. (File truncated a second time during these edits — repaired; do not mix bash writes and Edit-tool writes on App.tsx.)

**Phase 2 (same session, all verified live):**
- CMIS Suite: 16 mobile sections → 8. DMS + watermark system now the deep-dive; Purchase Request and Invoice TTI summarized to one section each. New hero: "Where is my document? Now the document answers." Stats now real: 3 modules / 4 procurement tracks / 4 watermark states.
- Design System: payoff framing. New hero "Design it once, or redesign it forever." New section 05 "Where It Paid Off" ties it to Read/See's 700+ screens and Mailtarget's flows. CASE_META rewritten.
- "Vibe Code/Vibe Coder" removed sitewide per user (positioning): EXPERIENCE role → "Product Designer (UI/UX) · AI-Assisted Development", MARQUEE item → "AI-Assisted Development". (VirtualPet's playful "vibe budget" line kept — pet personality, not positioning.)
- SONAR hidden per user: removed from WORKS + CASE_STUDIES (grid shows 6 works now, renumbered). Its data blocks + import kept with restore instructions in comments near WORKS. Restore when story is reworked around deliberate scoping.
- Edit-tool writes truncated the file tail TWICE more (and once appended 402 null bytes). Every repair verified with esbuild. Backup of last-good App.tsx at /tmp/App.tsx.claude-backup (sandbox). RULE: after ANY App.tsx edit, run esbuild syntax check before moving on; expect tail damage and repair from the App() return block.

**Addendum 2:** CMIS is also a team project (user's role: design only). CASE_META outcome + focus bullet updated to "product designer on the CMIS project team". Team-project tally so far: Read/See Dashboard, Mailtarget App, CMIS. Solo (AI-assisted design+build): KitaLabel BOS, KitaLabel Calculator. UNCONFIRMED: Universal Design System ownership — ask user before implying solo credit. (Another tail truncation during these edits — repaired, esbuild-verified.)

**Next:**
- Task: work grid → featured + archive layout (featured: kitalabel-bos, kitalabel, readsee-dashboard, cmis-suite; archive: design-system, mailtarget-app). NOT started — needs WorkSection render changes.
- Still open: back-pill overlap on mobile, white flash during fast scroll, KitaLabel vs Kitalabel casing, real numbers for stat blocks (user to supply), About stat "9+ projects shipped" review, Mailtarget dates (employment 2022–2023 vs case 2023–2024 — ask user).
- URGENT: repo has large uncommitted changes; user has not committed despite two truncation incidents. Push for commit.
- User wants teach-along mode: every change explained (what was wrong → what/why → how implemented).

## 2026-07-07 — [Claude] Mobile audit + full case-study content critique (read-only, NO code changes)

**Done:**
- Verified dev server at http://127.0.0.1:5174 renders correctly; walked the `design-system` case study end-to-end at 390px mobile width. Mobile case-study layout (walkthrough / visual index / numbered sections) works well.
- Read all case content in `src/app/App.tsx`: `WORKS`, `CASE_META`, `CASE_HERO_DETAILS`, `CASE_MOBILE_DETAILS`, `PROCESS_STEPS`, `EXPERIENCE`, hero copy.

**Found (bugs):**
1. Sticky "Back to work" pill overlaps headings/body text while scrolling on mobile — needs scrim or hide-on-scroll-down.
2. Occasional full-white viewport flash during fast scroll on mobile (likely parallax transforms) — verify on real device.
3. Copy inconsistency: "KitaLabel" vs "Kitalabel" (e.g. `CASE_HERO_DETAILS` eyebrows).

**Found (content critique — discussed with user, decisions PENDING):**
1. Stat blocks are mostly decorative ("1 source of truth", "100% responsive", "24/7") — replace with real before/after numbers or remove.
2. Section body copy is meta-descriptive ("This section covers...") — should be rewritten first-person, active, specific.
3. No role/team clarity in any case study ("Designed it. Built it." in kitalabel is the model to follow).
4. Case strength ranking: STRONG kitalabel-bos (flagship), kitalabel, readsee-dashboard · MEDIUM cmis-suite (15 sections, too bloated — cut to ~7), design-system (generic, quantify reuse) · WEAK sonar, readsee-website, mailtarget-web (dilute; consider merging marketing sites into product siblings).
5. 9 cases too many — proposal: 4 featured + archive grid.
6. "Vibe Coder" / "Vibe Code" wording undercuts B2B positioning — prefer "AI-assisted development".
7. Thumbnails excluded from critique — user hasn't placed final screenshots yet.

**Next:**
- BLOCKED on user: discussion in progress, do NOT implement critique items yet.
- Bug fixes 1-2 (back-pill overlap, white flash) are safe to pick up anytime.
- After discussion: likely first task = rewrite kitalabel-bos copy as voice template, then featured/archive grid restructure.
