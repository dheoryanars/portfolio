# WORKLOG — Dheoryan Portfolio

## 2026-07-13 16:29 - [Codex] Deployed the KitaLabel Business OS product-system story

**Done:** Committed the approved KitaLabel Business OS narrative as `38a7d15` (`Add KitaLabel Business OS product story`) and pushed `main` from `5debf49` to `38a7d15` on `origin`. The release adds the product-system story, operational workflow, missing-order recovery path, data-trust rules, permission model, Business OS scope explanation, 17-screen metric, and complete responsive rendering for desktop, tablet, and mobile. Vercel production auto-deployment was triggered by the GitHub push.

**Found:** The production Vite build and responsive browser checks passed before the release. The existing large-chunk advisory remains expected for the current portfolio bundle. Local dev logs and helper files remain untracked and were deliberately excluded from the release.

**Next:** Confirm the Vercel deployment finishes and smoke-test `https://dheoryan.vercel.app/#/work/kitalabel-bos` once the production build is live.

## 2026-07-13 16:20 - [Codex] Added the missing product-system story to KitaLabel Business OS

**Done:** Added an interactive KitaLabel Business OS narrative before the 17-screen gallery: the WooCommerce-to-event-queue-to-CRM-to-action-surface lifecycle, a four-step missing-order recovery path, internal-test-data exclusion rules, role-aware interface permissions, and a concise explanation of why the product is a Business OS rather than only a CRM. Updated the gallery metric from 16 to 17 screens and renumbered the following case-study sections. Reused the same story in the tablet/mobile article path so no new content disappears below 1024px.

**Found:** The prior responsive architecture renders a separate mobile article and hides imported desktop case studies, so inserting the new story only in the imported file initially made it desktop-only. The shared conditional rendering now keeps the complete story available at 1440px, 768px, and 390px. Browser checks found no horizontal overflow, interactive flow and permission states work, and the new responsive body copy stays at 15px or larger. The production Vite build passes; the existing large main-chunk advisory remains (`1,168.83 kB`, `248.41 kB` gzip).

**Next:** Review the new sections at `http://127.0.0.1:5175/#/work/kitalabel-bos`. The changes are complete locally but remain uncommitted and undeployed until the user requests the production push. Real operational outcome metrics were deliberately not invented and can be added later when verified data is available.

## 2026-07-13 16:10 - [Codex] Audited the KitaLabel Business OS Figma documentation against the case study

**Done:** Inspected the complete Figma file structure and the detailed Data Flow Map, Operational Workflows, Navigation Architecture, Entity Relationship Map, Metric Dictionary, Permission Model, State and Exception Catalog, Security guidance, and Business OS Scope Boundary. Compared those product-system artifacts with the current portfolio narrative and 17-screen gallery in `src/imports/CaseStudyKitalabelBos-1/index.tsx`. No source code or production UI was changed.

**Found:** The case study demonstrates screen breadth but omits the strongest product-thinking evidence: the WooCommerce-to-CRM data lifecycle, internal-test-data exclusion, missing-order recovery, role-driven UI rendering, and the rationale for the Business OS scope. The current `16 Screens designed` metric is stale against the 17 unique screens now shown. Figma documentation also mixes version labels `1.1`, `1.8.4`, and `2.4.0`, so public-facing version claims should be normalized or omitted.

**Next:** Add a concise interactive system-flow section, one representative operational workflow, a data-integrity decision, and a compact role-visibility explanation before the current screen gallery. Update the screen count to 17 and replace deliverable-only outcomes with verified operational impact once real measurements are available. These are recommendations only and remain unimplemented pending user direction.

## 2026-07-13 15:14 - [Codex] Deployed the complete July 13 case-study update to production

**Done:** Ran the production Vite build successfully (`2020 modules transformed`), committed all intended source changes and case-study assets as `5c1c086` (`Improve case studies and add product screens`), and pushed `main` from `1cf7f2a` to `5c1c086` on `origin`. This push includes the Mailtarget UX model, KitaLabel pricing and complete-flow corrections, the full KitaLabel Business OS screen gallery, shared full-width thumbnails and preview behavior, readable case-study copy, CMIS layout and caption fixes, refreshed KitaLabel images, six named flow images, and 17 Business OS screenshots. Vercel production auto-deployment was triggered by the GitHub push.

**Found:** The sandboxed build initially failed because esbuild could not spawn (`EPERM`); the approved production build outside the sandbox completed in 14.38 seconds. The bundle emitted the existing large-chunk advisory (`1,141.51 kB` main JS, `241.91 kB` gzip) but no build error. Local development logs and `push.bat` remain untracked and were deliberately excluded from the release.

**Next:** Confirm the Vercel deployment finishes and smoke-test `https://dheoryan.vercel.app/`. The production source and assets are pushed; only local log/helper files remain untracked.

## 2026-07-13 15:05 - [Codex] Standardized caption-safe heights across all CMIS screen cards

**Done:** Added CMIS-specific card-height rules in `src/app/App.tsx` after auditing every repeated screenshot-card family in `src/imports/CaseStudyCmisSuite/index.tsx`. All three-column `c3`, `c3b`, and `c3p` cards now render at 460px, while two-column `lc`, `dlc`, `c2`, `c2t`, `old`, and `new` cards render at 420px. These heights work with the existing 14px body-copy floor and natural paragraph height to retain clear space below every description.

**Found:** The clipped Procurement descriptions were one instance of a repeated generated-card constraint: CMIS contained 26 fixed-height image cards ranging from 360px to 420px. Enlarging body copy exposed the undersized caption areas across several modules. A root-scoped CMIS rule fixes the complete family without changing card dimensions in other case studies. The local Vite server compiled the update, `App.tsx` retains its complete default export, and `git diff --check` passes.

**Next:** Review each CMIS screen-card section locally from DMS through Finance. Changes remain uncommitted and undeployed.

## 2026-07-13 14:59 - [Codex] Reflowed the CMIS purchase-request workflow into two rows

**Done:** Changed the six-step `From request to order` workflow in `src/imports/CaseStudyCmisSuite/index.tsx` from one six-column flex strip to a three-column grid. Steps 01–03 now form the first row and 04–06 the second. Each description now uses its full grid-column width, the 10px fixed text-height constraints were removed, and the cards use the same balanced 240px height as the document-lifecycle grid.

**Found:** This workflow repeated the same legacy narrow-column pattern as the document lifecycle. The remaining `wfRow` later in the file is a separate four-step finance workflow and was intentionally left unchanged. The local Vite server compiled the update, `App.tsx` retains its complete default export, and `git diff --check` passes.

**Next:** Review the CMIS purchase-request grid locally. Changes remain uncommitted and undeployed.

## 2026-07-13 14:55 - [Codex] Reflowed the CMIS document lifecycle into two rows

**Done:** Changed the six-step Document Lifecycle strip in `src/imports/CaseStudyCmisSuite/index.tsx` from one six-column flex row to a three-column grid. Steps 01–03 now form the first row and 04–06 form the second. Each card uses the full grid-column width for its description, the obsolete 10px text-height constraints were removed, and card height was set to 240px to retain balanced spacing with the shared 14px body-copy floor.

**Found:** The previous 151px-wide copy columns made the workflow unnecessarily tall and difficult to scan even before responsive scaling. The 3-by-2 structure preserves sequence while making each explanation substantially easier to read. The local Vite server compiled the update, `App.tsx` retains its complete default export, and `git diff --check` passes.

**Next:** Review the CMIS lifecycle grid locally. Changes remain uncommitted and undeployed.

## 2026-07-13 14:32 - [Codex] Established readable case-study body copy and safer card spacing

**Done:** Added a shared body-copy floor in `src/app/App.tsx` for imported case studies: Space Grotesk explanatory text previously rendered at 10–13px now renders at 14px with 1.5 line height and natural height. The rule covers paragraphs, spans, and inherited text containers while leaving compact Space Mono metadata and UI labels at their intentional scale. Increased the CMIS legacy-versus-modern comparison cards from 380px to 420px so their descriptions retain clear bottom padding. Expanded compact KitaLabel Business OS gallery captions from 112px to 128px and the primary caption from 108px to 112px so the readability increase does not clip text.

**Found:** Small generated copy was a portfolio-wide legacy-export issue rather than a single CMIS card problem: 137 imported Space Grotesk body-copy instances used 10–13px sizes. A shared scoped rule keeps the correction consistent across all use cases without enlarging metadata or text embedded inside screenshot assets. The local Vite server compiled all updates, `App.tsx` retains its complete default export, and `git diff --check` passes.

**Next:** Review the CMIS comparison row and representative dense cards across the case studies locally. Changes remain uncommitted and undeployed.

## 2026-07-13 14:02 - [Codex] Fixed clipped CMIS captions and audited SONAR thumbnails

**Done:** Fixed both Procurement Tool screen cards in `src/imports/CaseStudyCmisSuite/index.tsx`. Removed the accidental 10px fixed height from the List Purchase Tool and success-confirmation descriptions, and increased both cards from 360px to 380px so their complete captions fit beneath the full-width thumbnails.

**Found:** The CMIS issue was caption clipping, not an image-width regression: both description paragraphs were constrained to a single 10px-high box. SONAR has one imported product image and it already uses full-frame `object-cover`; its shared case hero and mobile walkthrough also inherit the standardized full-width thumbnail treatment from `src/app/App.tsx`. No SONAR-specific change was required. The local Vite server compiled the CMIS update, `App.tsx` retains its complete default export, and `git diff --check` passes.

**Next:** Review the CMIS Procurement Tool row locally. Changes remain uncommitted and undeployed.

## 2026-07-13 13:57 - [Codex] Standardized full-width thumbnails across every case study

**Done:** Updated the shared case-study presentation rules in `src/app/App.tsx`. Legacy imported screenshots using `object-contain` now fill their thumbnail frames edge to edge with a top-centered crop across all desktop case-study pages. Product-logo containers are explicitly excluded and retain contained proportions. The mobile walkthrough hero and visual-index thumbnails now use the same full-frame behavior. Shared case-study heroes and the full-width, scrollable image-preview modal remain consistent with the rule.

**Found:** The remaining visible gutters came from legacy Figma-exported `object-contain` image classes spread across CMIS, KitaLabel, Mailtarget, Read/See, and dashboard imports. A scoped shared rule fixes those screenshot thumbnails without mechanically rewriting every generated import or affecting images outside case-study pages. The modal continues to display the complete source image at full width, so thumbnail cropping does not hide detail during inspection. The local Vite server compiled the update, `App.tsx` retains its complete default export, and `git diff --check` passes.

**Next:** Review representative landscape and portrait thumbnails across the case studies locally. Changes remain uncommitted and undeployed.

## 2026-07-13 13:52 - [Codex] Changed the CMIS DMS primary screens to a two-column layout

**Done:** Updated the `The DMS in detail` section in `src/imports/CaseStudyCmisSuite/index.tsx`. The Login and Document List primary screen cards now sit side by side in two equal 564px columns with a 24px gap, while their captions and descriptions were resized to fit the new card width without clipping. The supporting three-column screen rows remain unchanged.

**Found:** The existing CMIS section used two consecutive 1152px full-width cards, which made the primary screens visually oversized and lengthened the section. The new grid uses the same 1152px content boundary as the surrounding case-study layout. The local Vite server compiled the update, `App.tsx` retains its complete default export, and `git diff --check` passes.

**Next:** Review the CMIS DMS primary-screen row locally at desktop and responsive sizes. Changes remain uncommitted and undeployed.

## 2026-07-13 13:42 - [Codex] Moved KitaLabel promo-code copy to Step 5

**Done:** Updated the six-step complete-flow copy and the older supporting checkout artifact in `src/imports/CaseStudyKitalabel-1/index.tsx`. Step 5 now covers billing details, attached files, promo-code application, courier selection, and final-total review. Step 6 now covers only final payment summary, payment-method selection, and placing the order.

**Found:** Promo application occurs during checkout in Step 5, before the payment action in Step 6. The older supporting card also mixed promo and payment, so it was renamed and corrected for consistency. The local Vite server compiled the update, `App.tsx` retains its complete default export, and `git diff --check` passes.

**Next:** Review Steps 5 and 6 locally, then add the pending replacement images. Changes remain uncommitted and undeployed.

## 2026-07-13 13:36 - [Codex] Corrected KitaLabel Step 6 to payment-only and moved RFQ to the calculator

**Done:** Updated Step 2 and Step 6 copy in `src/imports/CaseStudyKitalabel-1/index.tsx` plus the matching complete-flow summary in `src/app/App.tsx`. Step 2 now explains that calculated values above IDR 5,000,000 branch into RFQ before cart and checkout. Step 6 is now titled `Customer completes payment` and covers promo, payment method, summary, and final order action only.

**Found:** RFQ was incorrectly presented as an option at checkout. In the real flow, the calculator handles that decision up front based on the IDR 5,000,000 threshold. Searches confirm the stale `pays or requests`, `Buat Penawaran`, and checkout-level quote language are absent. The local Vite server compiled both files, `App.tsx` retains its complete default export, and `git diff --check` passes.

**Next:** Review Step 2 and Step 6 locally, then add the pending `step-01.png` through `step-06.png` assets. Changes remain uncommitted and undeployed.

## 2026-07-13 13:10 - [Codex] Prepared six named image slots for the KitaLabel complete flow

**Done:** Updated the six cards in `completeFlowSteps` within `src/imports/CaseStudyKitalabel-1/index.tsx` to load `/case-studies/kitalabel/step-01.png` through `step-06.png`. Added a per-card fallback to the current `image-03.png` through `image-08.png` assets so the page remains intact until the replacement files are uploaded, and added descriptive image alt text.

**Found:** No `step-01.png` to `step-06.png` files are present yet. Once they are placed in `public/case-studies/kitalabel`, the browser will use them automatically without another code change. The local Vite server compiled the update, `App.tsx` retains its complete default export, and `git diff --check` passes.

**Next:** User will upload the six replacement PNG files to `public/case-studies/kitalabel`; then verify their crops and remove the fallback assets only if storage cleanup is desired. Changes remain uncommitted and undeployed.

## 2026-07-13 12:02 - [Codex] Corrected the KitaLabel pricing bottleneck to the Estimator PIC workflow

**Done:** Rewrote the KitaLabel Price Calculator problem, outcome, hero summary/stat, mobile walkthrough, proof copy, desktop problem/context cards, and before-workflow steps across `src/app/App.tsx` and `src/imports/CaseStudyKitalabel-1/index.tsx`. The case now shows the real sequence: sales collects specifications, formats and forwards the request to the Estimator PIC, the quote waits in that estimator's daily workload queue, and pricing returns to the customer through sales.

**Found:** The previous copy incorrectly credited sales with calculating prices in spreadsheets. The actual delay came from the sales-to-estimator handoff and queue depth. Standard self-service pricing is now framed as removing that handoff, while special designs retain expert review. Searches confirm the old manual-sales-calculation claims are absent. The local Vite server compiled both files, `App.tsx` retains its complete default export, and `git diff --check` passes.

**Next:** Review the updated problem and before/after workflow locally. Changes remain uncommitted and undeployed.

## 2026-07-13 11:52 - [Codex] Made case-study hero thumbnails fill their preview frames

**Done:** Changed the shared case-study hero image in `src/app/App.tsx` from `object-fit: contain` to centered `object-fit: cover`. Hero thumbnails now fill the full `16:9` preview frame edge-to-edge without black side gutters.

**Found:** The source thumbnails use a slightly taller aspect ratio than the hero preview, so containment introduced visible pillarboxing. Covering the shared frame removes the gutters consistently across all use cases while retaining the existing scrim, copy overlay, and modal behavior. The local Vite server compiled the update, `App.tsx` retains its complete default export, and `git diff --check` passes.

**Next:** Review hero-thumbnail crops across the case studies locally. Changes remain uncommitted and undeployed.

## 2026-07-13 11:46 - [Codex] Confirmed shared preview behavior across all case studies

**Done:** Audited the preview flow in `src/app/App.tsx` and confirmed that every use-case page renders through the common `CaseStudyPage`, opens images through the shared `openPreview` state path, and uses the single `CaseImagePreview` component.

**Found:** The width-first image rendering and internal vertical scrolling added to `CaseImagePreview` already apply globally; no case-specific modal implementation or override needs updating.

**Next:** Review representative landscape and tall screenshots across the other case studies locally. No additional code change was required; existing changes remain uncommitted and undeployed.

## 2026-07-13 11:42 - [Codex] Made case-study image previews full-width and internally scrollable

**Done:** Updated `CaseImagePreview` in `src/app/App.tsx` to use up to `96vw`/`1600px` of horizontal space. Images now render at the full popup width with automatic height, while the image frame is capped at `82vh` and scrolls vertically inside the modal for tall product screenshots.

**Found:** The previous `maxHeight: 82vh` plus `objectFit: contain` scaled tall screens down until their UI became unreadable. Width-first rendering preserves screen detail and moves overflow into an intentional internal scroll area. The close control remains outside the scrolling image frame. The local Vite server compiled the update, `App.tsx` retains its complete default export, and `git diff --check` passes.

**Next:** Review a tall KitaLabel dashboard screenshot in the modal locally. Changes remain uncommitted and undeployed.

## 2026-07-13 11:36 - [Codex] Increased KitaLabel gallery caption readability

**Done:** Increased compact screen-card titles from `12px` to `14px` and descriptions from `10px` to `12px` in `src/imports/CaseStudyKitalabelBos-1/index.tsx`. Expanded each compact caption area from `86px` to `112px` with slightly more padding and line spacing so the larger copy remains aligned and unclipped.

**Found:** The previous `10px` description size was visually too quiet and difficult to read at normal desktop viewing distance. The local Vite server compiled the update, `App.tsx` retains its complete default export, and `git diff --check` passes.

**Next:** Review the improved card copy locally. Changes remain uncommitted and undeployed.

## 2026-07-13 11:30 - [Codex] Promoted the KitaLabel dashboard as the primary screen

**Done:** Updated `ProductScreenGallery` in `src/imports/CaseStudyKitalabelBos-1/index.tsx` so the Dashboard card spans all four gallery columns with a 420px-tall lead image, stronger purple border, larger title and description, and a `Primary screen` marker. It retains the same direct modal-preview interaction as every other screen.

**Found:** Equal-sized cards flattened the hierarchy even though the dashboard is the clearest overview of the Business OS. Promoting it inside the grid makes it the entry point without restoring the removed selected-preview state. The local Vite server compiled the update, `App.tsx` retains its complete default export, and `git diff --check` passes.

**Next:** Review the dashboard hierarchy locally. Changes remain uncommitted and undeployed.

## 2026-07-13 11:24 - [Codex] Simplified KitaLabel screen gallery to modal-only previews

**Done:** Removed the selected-screen state and large main-preview panel from `ProductScreenGallery` in `src/imports/CaseStudyKitalabelBos-1/index.tsx`. Every screen card now carries its preview source/title and opens that image directly through the existing case-study modal handler in `src/app/App.tsx`; clicking the image, title, or description produces the same single action.

**Found:** Maintaining both a gallery selection model and a modal preview model duplicated the same inspection task. The modal-only gallery is clearer, shorter, and keeps all 17 screens equally available. The local Vite server compiled both files, the obsolete `selectedIndex` and gallery-selector logic are absent, `App.tsx` retains its complete default export, and `git diff --check` passes.

**Next:** Review the simplified gallery locally. Changes remain uncommitted and undeployed.

## 2026-07-13 11:18 - [Codex] Separated KitaLabel gallery selection from modal preview

**Done:** Marked the KitaLabel Business OS thumbnail buttons with `data-gallery-selector` in `src/imports/CaseStudyKitalabelBos-1/index.tsx` and updated the delegated case-study image handler in `src/app/App.tsx` to ignore those selector clicks. Thumbnail images now use a pointer cursor, while the large selected image retains the zoom cursor and modal behavior.

**Found:** Thumbnail clicks previously bubbled into the page-level handler that opens every case-study image in the lightbox, so one click both changed the gallery selection and opened the modal. The explicit selector boundary removes that double action. The local Vite server compiled both modified files, `App.tsx` still contains its complete default export, and `git diff --check` passes.

**Next:** Confirm locally that thumbnail clicks only swap the main preview and clicking the large preview opens the modal. Changes remain uncommitted and undeployed.

## 2026-07-13 11:12 - [Codex] Added visible purposes to every KitaLabel BOS screen

**Done:** Updated the real-screen gallery in `src/imports/CaseStudyKitalabelBos-1/index.tsx` so every thumbnail displays its screen name, index, and a concise purpose statement before selection. Kept the fuller description in the lead-image caption and constrained each thumbnail description to a stable three-line, fixed-height area so the four-column grid stays aligned.

**Found:** Screen names alone made the gallery read like an asset index. Showing each purpose directly on the thumbnail lets visitors understand the operational scope without opening all 17 screens. The local Vite server accepted the update; browser re-verification was unavailable because the current browser policy blocked reopening the local URL.

**Next:** Review the descriptions locally at `http://127.0.0.1:5174/#/work/kitalabel-bos`. Changes remain uncommitted and undeployed.

## 2026-07-13 11:04 - [Codex] Replaced KitaLabel BOS placeholder mockups with real product screens

**Done:** Added an interactive product-screen gallery to `src/imports/CaseStudyKitalabelBos-1/index.tsx` and replaced the rendered Figma-generated dashboard/mini-mockup block in Section 03. The gallery uses `main-dashboard.png` as its default lead image and exposes all 17 uploaded KitaLabel Business OS screens as selectable thumbnails with screen-specific captions and accessible pressed states.

**Found:** The previous section was still drawing reconstructed dashboard surfaces in code, including placeholder profile imagery, even though final product screenshots were now available. The local Vite server compiled the update, all 17 gallery controls rendered, selecting `Orders` updated the lead image and caption, and the browser console remained clean. `git diff --check` passes. A standalone production build could not be rerun because the sandbox blocked Vite/esbuild process spawning and the approval service could not review the elevated retry.

**Next:** Review the real-screen gallery locally at `http://127.0.0.1:5174/#/work/kitalabel-bos`. Changes and the new image files remain uncommitted and undeployed.

## 2026-07-13 09:57 - [Codex] Increased header brand lockup

**Done:** Increased the homepage header's `DHEORY` wordmark from `13px` to `15px`, the supporting name from `11px` to `12px`, and the purple brand dot from `9px` to `10px` in `src/app/App.tsx`.

**Found:** The previous lockup read too quietly beside the navigation. The modest size increase improves brand presence without changing header height or spacing. Production build passes.

**Next:** Review locally at `http://127.0.0.1:5174/#/`. Changes remain uncommitted and undeployed.

## 2026-07-13 09:52 - [Codex] Fixed About portrait crop on iPad Mini

**Done:** Updated the About portrait wrapper in `src/app/App.tsx` to stay fluid on phones but cap at `440px` wide and center on tablet layouts, while preserving the existing `440px` left-aligned desktop column.

**Found:** At tablet width the wrapper previously expanded to roughly `688px` while `maxHeight: 550px` forced a shallow frame, defeating the 4:5 aspect ratio and making `object-cover` crop through the face. At the iPad Mini test viewport the fixed container measures approximately `427x534`, closely matching the portrait's native `392x502` ratio. Production build passes and browser console checks are clean.

**Next:** Review locally at `http://127.0.0.1:5174/#/`. Changes remain uncommitted and undeployed.

## 2026-07-13 09:30 - [Codex] Removed false tab affordance from KitaLabel flow

**Done:** Replaced the six static tab-like boxes in `FlowStrip` (`src/imports/CaseStudyKitalabel-1/index.tsx`) with a semantic ordered timeline using connected circular milestones and plain labels.

**Found:** The old alternating rectangular surfaces visually promised click interaction even though none existed. The replacement has zero buttons, no selected state, and reads as a single six-step sequence. Production build passes and browser console checks are clean.

**Next:** Review locally at `http://127.0.0.1:5174/#/work/kitalabel`. Changes remain uncommitted and undeployed.

## 2026-07-13 09:28 - [Codex] Fixed KitaLabel workflow connector overflow

**Done:** Widened the comparison connector column in `src/imports/CaseStudyKitalabel-1/index.tsx`, centered its arrow, and replaced the overflowing annotations with stable two-line labels: `NO SALES / HANDOFF` and `LESS BACK / AND FORTH`.

**Found:** The previous `92px` column could not contain `SALES HANDOFF REMOVED`, causing text clipping and collision with the right-anchored arrow. Both interaction modes now render correctly with no console errors; the production build passes.

**Next:** Review locally at `http://127.0.0.1:5174/#/work/kitalabel`. Changes remain uncommitted and undeployed.

## 2026-07-13 09:23 - [Codex] Reframed KitaLabel plugin as a workflow reduction

**Done:** Replaced the AI-dashboard-like pricing complexity map in `src/imports/CaseStudyKitalabel-1/index.tsx` with an interactive before/after workflow. The section now compares five assisted quoting touchpoints against three plugin steps and lets visitors switch between `Standard label` and `Special design`. Standard work removes the sales handoff and stays in checkout; special work captures a structured brief before expert review. Updated the matching case-study headline and mobile walkthrough copy in `src/app/App.tsx`.

**Found:** The strongest story is not the number of pricing variables; it is that repeatable label jobs no longer leave the buying flow. The special-design branch also prevents the portfolio from implying that automation replaces necessary print expertise. Production build passes, both interaction states render, no console errors were found, and the desktop page has no horizontal overflow.

**Next:** Review locally at `http://127.0.0.1:5174/#/work/kitalabel`. Current Mailtarget and KitaLabel changes remain uncommitted and undeployed.

## 2026-07-13 09:02 - [Codex] Simplified Mailtarget Sandbox-to-Production UX model

**Done:** Rebuilt the interactive UX-model section in `src/imports/CaseStudyMailtargetApp-1/index.tsx` around a plain-language email journey: Practice safely, Prove ownership, and Send to customers. Added a recipient simulation that visibly changes from approved team inboxes to a trust checkpoint and then real customers, using the existing orange/purple/blue environment language and Lucide icons. Updated the matching desktop and mobile section title/copy in `src/app/App.tsx` to ask, "How does a test email become safe to send?"

**Found:** The previous five-step implementation list required readers to understand API and DNS terminology before they could understand the safety model. The new version makes recipient access the primary visual signal and keeps technical constraints as secondary evidence. Production build passes; browser interaction checks pass with no console errors.

**Next:** Review locally at `http://127.0.0.1:5174/#/work/mailtarget-app`. Changes are not committed or deployed yet.

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
