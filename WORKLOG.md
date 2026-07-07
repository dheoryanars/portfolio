# WORKLOG — Dheoryan Portfolio

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

**Phase 2 (same session, all verified