# WORKLOG — Dheoryan Portfolio

## 2026-08-08 22:21 — [Codex] Released the KitaLabel evidence and narrative corrections

**Done:** Prepared the reviewed KitaLabel Price Calculator and KitaLabel Business OS improvements for production: production-state validation, restored Calculator Outcomes, the continuous Business OS mobile `00–09` story, adoption evidence without duplicate screenshots, and more precise evidence language. The release includes only the six tracked portfolio files involved in this work; local browser logs, build output, and unrelated untracked files remain excluded.

**Verified:** The production Vite build passes with 2023 modules transformed and only the existing bundle-size advisory. Desktop and `390x844` browser QA found no broken images, horizontal overflow, console warnings, or console errors. Vercel remains connected to GitHub `main` and will auto-deploy this release from the push.

**Next:** Smoke-test the two live routes at `https://dheoryan.vercel.app/#/work/kitalabel` and `https://dheoryan.vercel.app/#/work/kitalabel-bos` after Vercel finishes building.

## 2026-08-08 21:16 — [Codex] Closed the remaining KitaLabel case-study evidence gaps

**Done:** Restored the KitaLabel Price Calculator's imported desktop Outcomes section with a case-specific CSS override, while retaining the global removal of duplicate imported footers. Reordered the KitaLabel Business OS mobile narrative into one continuous `00–09` sequence by placing System Logic, Operational Recovery, Trust and Access, and Adoption Evidence between the existing context and key-screen sections. Removed the repeated member and role screenshots from the desktop screen gallery, relabeled static captures as snapshots, removed time-sensitive activity wording, and distinguished production account evidence from documented customer and monthly-order scale. Also changed Calculator wording from real-time to on-demand calculation, qualified self-service as applying to eligible standard labels, and replaced the unsupported wrong-shape reduction claim with a directly observable verification benefit.

**Verified:** `npm run build` passes with 2023 modules transformed and only the existing bundle-size advisory. Browser QA passed at `1440x1000` and `390x844`: Calculator Outcomes computes to `display: flex`; Business OS reads `00, 01, 02, 03, 04, 05, 06, 07, 08, 09`; adoption and role screenshots render once per viewport; no old live/recency labels remain; both cases have no broken images, horizontal overflow, or browser warnings/errors.

**Next:** Review the revised KitaLabel flagship stories locally. Add further research or outcome metrics only when a source, date, and measurement method are available. No commit or production deployment was made in this entry.

## 2026-08-08 20:22 — [Codex] Re-reviewed the updated KitaLabel flagship cases

**Done:** Audited the updated KitaLabel Price Calculator and KitaLabel Business OS stories again across source copy, desktop rendering, and `390x844` mobile rendering. Confirmed that the new Calculator production-state model and Business OS adoption evidence materially improve credibility, but found four remaining presentation and evidence issues: Calculator Outcomes is hidden on desktop by the global `[data-name="out"]` rule; the Business OS mobile article reaches Outcomes before restarting at System Logic; the adoption and roles screenshots appear twice in the desktop story; and several labels or claims remain time-sensitive or stronger than the visible evidence.

**Verified:** Browser inspection confirmed Calculator's `production-validation` and flow sections are visible while its imported Outcomes section computes to `display: none`. On Business OS mobile, the visible Full Case Flow runs from `00 — The Problem` through `06 — Outcomes`, followed by the custom story restarting at `03 — System logic` through `06 — Adoption evidence`. On desktop, both `adoption-log.png` and `roles-log.png` render twice. The production member screenshot has redacted names, but wording such as `live` and `within the last seven hours` is tied to a static capture. No product code was changed during this review.

**Next:** Restore a visible Calculator desktop Outcomes close, integrate the Business OS custom story into the mobile sequence before Outcomes, remove the repeated adoption screenshots from Key Screens, rename static evidence as a dated production snapshot, and soften unsupported causal wording such as `Reduces wrong-shape orders`. Confirm the capture date and source for `240+ monthly orders` before presenting it as current.

## 2026-08-08 19:25 — [Codex] Added production validation to KitaLabel Calculator and Business OS

**Done:** Corrected the KitaLabel Calculator narrative so every viewport now matches the shipped interaction: `Cek Harga` is deliberate, changing a priced specification invalidates the old result, checkout requires a current calculated price, and prices at or above IDR 5,000,000 (or jobs flagged by the pricing service) enter RFQ. Added a desktop Production Validation state model, updated the mobile evidence card, shifted the flow/outcome numbering, clarified that self-service applies to eligible standard jobs, and replaced vanity output counts with product-behaviour facts. For KitaLabel Business OS, added a responsive Adoption Evidence section with production screenshots, 12 registered accounts, 6 reusable roles, 1,800+ customer records, and 240+ monthly orders; aligned the hero, mobile story, proof list, key-screen numbering, and outcomes with those facts. The two adoption screenshots open through the shared case-study preview modal.

**Verified:** The Calculator behavior was checked against the production WordPress plugin implementation: explicit `Cek Harga`, stale-price reset and `Perbarui Harga`, cart gating, and the IDR 5,000,000 RFQ threshold are present in code. `npm run build` passes with 2023 modules transformed and only the existing bundle-size advisory. Browser QA passed at desktop and `390x844`: both validation stories render, no images fail, no route introduces horizontal overflow, the Business OS evidence modal opens correctly, and no browser console errors were reported.

**Next:** Review the two updated flagship cases locally. The next evidence pass should add only source-backed research or outcome material (for example interview findings, baseline timing, quote turnaround, conversion, or task-success evidence) supplied by Dheoryan; do not infer those metrics from the UI. No commit or production deployment was made in this entry.

## 2026-08-08 18:38 — [Codex] Audited evidence gaps across all seven case studies

**Done:** Reviewed the narrative, scope, role framing, decisions, proof, and outcomes of KitaLabel Business OS, KitaLabel Price Calculator, Read/See, CMIS Workflow Improvements, Universal Design System, Mailtarget App, and SONAR. Identified portfolio-wide gaps in research evidence, team and ownership context, decision trade-offs, measurable outcomes, strategic influence, accessibility, and annotated visual proof. Also found a factual contradiction in the KitaLabel Calculator story: the current copy says pricing updates on every change even though the designed behavior uses an explicit `Cek Harga` action.

**Verified:** The audit was performed against the current `CASE_META`, `CASE_HERO_DETAILS`, and `CASE_MOBILE_DETAILS` content. The strongest current narratives are KitaLabel Calculator for a clear before/after workflow, CMIS for enterprise complexity, Read/See for systems thinking at scale, and Universal Design System for cross-product leverage. Their principal weakness is evidence quality rather than visual polish. No website code or production content was changed.

**Next:** Correct the KitaLabel pricing-behavior contradiction first. Then strengthen two or three flagship cases with truthful baselines and outcomes, research findings, team structure, rejected alternatives, constraints, validation, and examples of influence. Keep the remaining cases shorter so the portfolio does not trade depth for quantity.

## 2026-08-08 18:35 — [Codex] Assessed portfolio against Senior Product Designer expectations

**Done:** Audited the portfolio's seven case studies, role history, case-study framing, and outcome claims against current Senior Product Designer expectations from GitLab and Atlassian. The portfolio demonstrates senior-level systems thinking, complex B2B workflow work, end-to-end shipping, design-system practice, and useful technical fluency. Its current evidence is best described as senior-ready or senior-leaning rather than unambiguously senior because roadmap influence, research synthesis, measurable user/business impact, cross-functional influence, and mentoring are under-documented.

**Verified:** The assessment is grounded in the current portfolio copy and current official hiring criteria. GitLab emphasizes strategic roadmap influence, comprehensive research connected to outcomes, experience vision, data-backed quality advocacy, cross-boundary collaboration, systems contribution, and mentoring; its case-study guidance asks for role/team context, research synthesis, collaboration, and impact on key metrics. A current Atlassian Senior Product Designer listing asks for 5+ years plus concept-to-execution leadership, data and user-feedback iteration, scalable patterns, and enterprise customer engagement. No website code or production content was changed.

**Next:** Strengthen one or two flagship case studies with truthful before/after outcome measures, research evidence, rejected alternatives and trade-offs, team structure, roadmap influence, and examples of raising other people's design quality. Position applications as Senior Product Designer for startup/SME, B2B systems, internal tools, and AI-assisted delivery roles; expect stronger proof requirements from mature global product organizations.

## 2026-08-08 16:54 — [Codex] Released corrected mobile case-study thumbnails to production

**Done:** Committed and pushed the explicit mobile Full Case Flow thumbnail mappings for all seven case studies, including the corrected KitaLabel calculator Problem card and Read/See source/destination labels. GitHub `main` now contains release commit `697a0ac`, which triggered the connected Vercel production deployment.

**Verified:** GitHub accepted `c5ab661..697a0ac` on `main`. Before release, the production Vite build passed with `2023 modules transformed`, all mapped images decoded at `390x844`, every mobile flow card used the available `333px` content width, and no case-study route introduced horizontal overflow.

**Next:** Smoke-test the corrected Full Case Flow cards at `https://dheoryan.vercel.app/` after Vercel finishes building.

## 2026-08-08 14:39 — [Codex] Corrected mobile story thumbnails across every case study

**Done:** Replaced the modulo-based mobile Full Case Flow image rotation with explicit section-to-artifact mappings for KitaLabel Business OS, KitaLabel Price Calculator, Read/See, CMIS Workflow Improvements, Universal Design System, Mailtarget App, and SONAR. Each mobile story card now uses evidence that matches its section instead of recycling a short generic thumbnail list. Also corrected the Read/See Visual Index labels so the Sources and Destinations screens are identified accurately.

**Verified:** The production Vite build passes (`2023 modules transformed`) with only the existing bundle-size advisory, and `git diff --check` reports no whitespace errors beyond existing line-ending notices. At `390x844`, all seven routes render the expected number of Full Case Flow thumbnails (6, 8, 8, 12, 6, 7, and 6 respectively), every image decodes at its natural dimensions after lazy loading, every card spans the available `333px` content width, and no route introduces horizontal overflow. Visual review of the CMIS mobile flow confirmed the corrected evidence remains legible in the card treatment.

**Next:** Review the corrected mobile stories locally at `http://127.0.0.1:5174/`. Commit and push together with the earlier KitaLabel calculator correction when approved so Vercel can deploy them.

## 2026-08-08 11:54 — [Codex] Corrected KitaLabel calculator mobile story thumbnails

**Done:** Separated KitaLabel's eight mobile Full Case Flow section images from its three-item Visual Index instead of cycling the same generic artifacts through the story. The Problem card now uses the pricing configurator, Context uses the storefront, Challenge uses the check-price action, and the remaining sections use relevant configuration, file-guidance, cart, and payment evidence. Corrected the Visual Index titles so they describe the images they actually reference.

**Verified:** The production Vite build passes (`2023 modules transformed`) with only the existing bundle-size advisory. At `390x844`, the Problem card now renders `/case-studies/kitalabel/image-02.png` at its full `2304x1040` natural size rather than the homepage. All eight Full Case Flow images load successfully, the storefront appears only in the KitaLabel context card, and browser review confirmed the corrected image remains legible behind the mobile card overlay.

**Next:** Review locally at `http://127.0.0.1:5174/#/work/kitalabel`. Commit and push when this correction is approved so Vercel can deploy it.

## 2026-08-08 11:20 — [Codex] Audited production thumbnail parity on mobile

**Done:** Compared the live Vercel portfolio at `1440x1000` and `390x844` across all seven case-study routes: KitaLabel Business OS, KitaLabel Price Calculator, Read/See, CMIS Workflow Improvements, Universal Design System, Mailtarget App, and SONAR. Also measured the homepage Selected Work thumbnail framing at both breakpoints.

**Verified:** Every case-detail hero uses the same deployed source at both breakpoints, loads successfully at its `648x405` natural size, retains a centered `cover` treatment, and shows the same `16:9` crop on desktop and mobile. No image-loading warnings or browser errors were reported. Homepage cards are not crop-equivalent: desktop featured cards render at `586x200` and expose about 54.6% of each image's height, while mobile cards render at `285x200`, expose the full height, and crop about 10.9% from the width. Universal Design System, Mailtarget App, and SONAR have mobile cards but remain text-only archive rows on wide desktop, so there is no visible desktop homepage thumbnail counterpart for those three.

**Next:** If homepage thumbnail parity is required, replace the fixed `200px` media height in `WorkCard` with a stable shared aspect ratio such as `16 / 9`; use `object-fit: contain` instead only if the requirement is to reveal every pixel without cropping.

## 2026-08-06 00:00 — [Codex] Matched CV certification typography to the source design

**Done:** Created `output/pdf/2026_Dheoryan_Product-Designer_CV_final_matched.pdf` using Space Grotesk for education/certification titles and Space Mono for the labels and footer, matching the fonts used by the original CV. Restored the compact panel's title and metadata scale to harmonize with Earlier Roles.

**Verified:** Rendered the complete one-page A4 PDF at final resolution. The matching font treatment, full-width footer rule, clear certification spacing, and intact Earlier Roles content all pass visual inspection; required text remains selectable.

**Next:** Use the new `_final_matched` PDF as the final CV version.

## 2026-08-06 00:00 — [Codex] Issued cache-safe final CV PDF

**Done:** Created `output/pdf/2026_Dheoryan_Product-Designer_CV_final.pdf` as a fresh final-file name to avoid stale PDF viewer caching.

**Verified:** Rendered this exact file and checked the complete page: the footer contains one uninterrupted full-width rule, with no partial line above it; all certification and Earlier Roles text remains intact.

**Next:** Use the new `_final` PDF file rather than the previously opened copy.

## 2026-08-06 00:00 — [Codex] Corrected CV certification and footer layout

**Done:** Rebuilt the bottom panel in `output/pdf/2026_Dheoryan_Product-Designer_CV.pdf` from the original CV, preserving all education, certification, and Earlier Roles text. Moved the footer lower and redrew it once, which gives the EF SET entry clear separation and removes the duplicated footer fragment.

**Verified:** Rendered and visually inspected the complete A4 page. The certification stack is fully readable, the `Customer Experience` role remains intact, the footer clears every credential, and the final PDF has one page with selectable required text.

**Next:** Use the corrected CV for applications. No portfolio-site content was changed.

## 2026-08-06 00:00 — [Codex] Added Google Cloud Agentic AI certification to CV

**Done:** Created `output/pdf/2026_Dheoryan_Product-Designer_CV.pdf` from the supplied CV. The compacted education and certification panel retains the degree, Product-Led Growth, and EF SET entries, and adds `Cloud Technical Series - Agentic AI Edition` with `Google Cloud · 22-23 Jul 2026`.

**Verified:** Rendered the complete one-page A4 PDF and visually checked the updated panel for legibility, spacing, and footer clearance. Reopened the file successfully; the new certification text is selectable and the final PDF contains one unencrypted A4 page.

**Next:** Use the updated PDF for applications. No portfolio-site content was changed.

## 2026-08-04 — [Codex] Prepared Petrolink product-designer interview guidance

**Done:** Researched Petrolink's public product positioning and prepared role-specific interview guidance for Dheoryan. The guidance focuses on their real-time oilfield data products, especially PetroVue dashboards, alerts, collaboration, and high-consequence operational decision-making.

**Verified:** Petrolink's current public site describes a web-based visualization platform used by drilling engineers, geologists, and subsurface teams for remote well monitoring, customizable dashboards, alerts, and collaboration across rig and office teams.

**Next:** Use the guidance to rehearse two concise portfolio case studies, a product-design process narrative, and questions for the prospective manager or design team.

## 2026-08-03 09:24 — [Codex] Audited Cloudflare Web Analytics in production

**Done:** Checked the repository markup and the live Vercel DOM for the Cloudflare Web Analytics beacon. Production serves `https://static.cloudflareinsights.com/beacon.min.js` as a module with token `2ec8375a6da84140aad0f156ac86fe06`; the deployed configuration also retains `"spa":false`.

**Verified:** `https://dheoryan.vercel.app/` loaded to completion with the beacon present in the live document, the expected portfolio title, and no browser console warnings, CSP violations, or script-loading errors. The repository remains synchronized with `origin/main`; only existing untracked local helper and log files are present.

**Next:** Initial production visits should continue to register. Hash-route transitions such as `#/work/...` are not separate page views while `spa:false` is enabled; add explicit route-level tracking only if per-case-study navigation metrics are required. Also verify the Cloudflare dashboard hostname/date filter and test once with privacy blockers disabled if recent traffic still appears absent.

## 2026-07-30 13:45 — [Codex] Released the optimized contact cockpit to production

**Done:** Committed and pushed the complete Let's Talk refinement to `main`, triggering the linked Vercel production deployment. The release removes the animation bottlenecks, smooths cursor steering, reduces HUD copy, replaces text-heavy readouts with design-context diagrams, and includes the final connector and hierarchy-detail corrections. Local logs, screenshots, generated output, and helper files were excluded.

**Verified:** The final production Vite build passes (`2023 modules transformed`) with only the existing bundle-size advisory. `git diff --check` reports no whitespace errors beyond existing line-ending notices, and GitHub accepted commit `641afab` on `main` for Vercel auto-deployment.

**Next:** Smoke-test the contact cockpit, cursor response, email CTA, and responsive layout at `https://dheoryan.vercel.app/` after Vercel finishes building.

## 2026-07-30 13:41 — [Codex] Refined the cockpit design diagrams

**Done:** Rebuilt the left design-flow graphic with a clean orthogonal connector, three precise junction nodes, and aligned cursor, workflow, and interface stages. Expanded the right hierarchy from generic stacked boxes into three recognizable levels: token primitives, a component with state and status, and a composed product screen with navigation, content modules, and a small chart. Straight vertical connectors now join each level without the stray diagonal line.

**Verified:** The production Vite build passes (`2023 modules transformed`) with only the existing bundle-size advisory. Desktop browser review confirmed both diagrams render at the intended scale, their connectors terminate cleanly, the added internal detail remains subordinate to the CTA, horizontal overflow remains zero, and no console warnings or errors were introduced. `git diff --check` reports no whitespace errors beyond existing line-ending notices.

**Next:** Review the refined diagrams locally at `http://127.0.0.1:5174/`. Commit and deploy them with the pending Let's Talk performance and simplification updates after approval.

## 2026-07-30 13:36 — [Codex] Simplified the contact cockpit into design graphics

**Done:** Reduced the spaceship dashboard's textual HUD to three useful signals: `04 / Contact`, a visual route marker, and `Open / 2026`. Replaced the left project-mode list with a cursor-to-flow-to-interface diagram and replaced the right signal-status list with a compact token/component/screen hierarchy graphic. Removed the decorative “Transmission ready” label and condensed the supporting copy to one direct sentence: “Complex product problem? Let’s make it clear, usable, and ready to ship.”

**Verified:** The production Vite build passes (`2023 modules transformed`) with only the existing bundle-size advisory. Desktop and 390x844 browser checks confirmed the graphics frame the CTA without competing with it, the shorter copy remains readable, the desktop-only diagrams disappear cleanly on mobile, horizontal overflow remains zero, and no console warnings or errors were introduced. `git diff --check` reports no whitespace errors beyond existing line-ending notices.

**Next:** Review the simplified contact cockpit locally at `http://127.0.0.1:5174/`. Commit and deploy it together with the pending Let's Talk performance patch after approval.

## 2026-07-30 13:27 — [Codex] Smoothed hyperspace cursor steering

**Done:** Removed the remaining cursor-movement bottleneck from the Let's Talk hyperspace field. Pointer events now use cached section bounds instead of forcing `getBoundingClientRect()` on every mouse update, stop doing work while the section is offscreen, and only refresh geometry once per animation frame during scrolling. Added a short 36 FPS interaction window and faster time-based vanishing-point damping while the visitor is actively steering; the field returns to its lower-cost 24 FPS idle cadence immediately afterward.

**Verified:** The production Vite build passes (`2023 modules transformed`) with only the existing bundle-size advisory. A live desktop test moved the cursor through a 21-point circular steering path across the cockpit; the star field followed cleanly, retained the intended depth response, and produced no console warnings or errors. `git diff --check` reports no whitespace errors beyond existing line-ending notices.

**Next:** Review the optimized cursor response locally at `http://127.0.0.1:5174/`. Commit and deploy the complete Let's Talk performance patch after approval.

## 2026-07-30 13:19 — [Codex] Removed the Let's Talk animation bottleneck

**Done:** Preserved the cockpit composition and cursor-steered hyperspace behavior while removing the expensive full-width backdrop filters that forced the browser to re-blur the moving canvas on every frame. Removed the separate GSAP contact parallax transform so Motion is now the section's only content animation owner. Reduced the hyperspace field to 68 desktop / 38 coarse-pointer stars, capped its internal render scale below CSS resolution, and limited rendering to 24 FPS on desktop and 20 FPS on coarse-pointer devices.

**Verified:** The production Vite build passes (`2023 modules transformed`) with only the existing bundle-size advisory. Local desktop and 390x844 browser checks confirmed the cockpit canvas remains active, the CTA and communication controls stay crisp, responsive canvas sizing remains correct, and no console errors or horizontal clipping were introduced. `git diff --check` reports no whitespace errors beyond existing line-ending notices.

**Next:** Review the lighter Let's Talk animation locally at `http://127.0.0.1:5174/`. Commit and deploy the performance patch after approval.

## 2026-07-30 12:07 — [Codex] Released the cockpit contact experience to production

**Done:** Committed and pushed the approved cockpit-style Let's Talk section, reusable hyperspace field, and system-grid footer to `main`, triggering the linked Vercel production deployment. The release includes the background swap, responsive communication deck, desktop HUD instruments, mobile control stack, cursor-steered hyperspace view, reduced-motion behavior, and offscreen canvas pausing. Local logs, screenshots, and helper artifacts were excluded.

**Verified:** The production Vite build passes (`2023 modules transformed`) with only the existing bundle-size advisory. `git diff --check` reports no whitespace errors beyond existing line-ending notices, and GitHub accepted commit `87d6c65` on `main` for Vercel auto-deployment.

**Next:** Smoke-test the cockpit CTA, contact links, and grid footer at `https://dheoryan.vercel.app/` after Vercel finishes building.

## 2026-07-30 12:02 — [Codex] Swapped the footer and contact worlds into a cockpit CTA

**Done:** Moved the lightweight hyperspace canvas from the DHEORY footer into the Let's Talk section and renamed it to the reusable `HyperspaceField`. Rebuilt the contact composition as a first-person communications deck: a three-part status rail, animated forward viewport, targeting rings and crosshairs, desktop project/signal instruments, a centered transmission CTA, and a lower cockpit console containing the primary email channel plus LinkedIn, WhatsApp, and Instagram controls. The footer now uses the former contact section's restrained system grid and cursor illumination behind the interactive DHEORY word. Mobile removes the side instrumentation, preserves the forward-view composition, stacks the console controls, and uses a fitted single-line email address.

**Verified:** A clean local browser session reports no console errors. Desktop checks confirmed the hyperspace field reads as the cockpit exterior view, the HUD and console stay legible, and the grid footer provides a calmer landing. A 390x844 check confirmed the complete CTA and controls remain readable with no horizontal overflow; the contact section contains the only hyperspace canvas and the footer contains none. `git diff --check` passes with only existing line-ending warnings.

**Next:** Review the cockpit pacing, terminology, and density locally at `http://127.0.0.1:5174/`. Commit and deploy the cockpit, background swap, and pending footer work after approval.

## 2026-07-30 11:53 — [Codex] Reframed Let's Talk as an interactive contact beacon

**Done:** Rebuilt the homepage contact section around one clear conversion path. The giant “Let's talk” headline is now the primary email action with a responsive arrow treatment, followed by short project-fit copy and a prominent direct-email row. Replaced the generic channel pills with purposeful LinkedIn, WhatsApp, and Instagram rows using Lucide icons, concise context labels, and restrained directional hover feedback. Added a centered availability signal, a faint system grid, a slow traveling pulse, and a requestAnimationFrame-throttled cursor glow that connects the section visually to the hyperspace footer without obscuring text. Reduced-motion visitors receive the complete layout without looping or hover movement.

**Verified:** The local Vite app renders the redesign without browser console errors. Desktop checks confirmed the new content hierarchy, readable email CTA, channel-row alignment, and a clean transition into the animated footer. A 390x844 check confirmed the headline, supporting copy, email address, and all three channel rows stack without clipping or horizontal overflow. `git diff --check` passes with only existing line-ending warnings.

**Next:** Review the local contact experience at `http://127.0.0.1:5174/`, especially the copy tone and cursor response. Commit and deploy it together with the pending hyperspace footer after approval.

## 2026-07-30 11:48 — [Codex] Added a responsive hyperspace footer

**Done:** Added a lightweight canvas hyperspace field behind the interactive DHEORY footer word. The field accelerates briefly when the footer enters view, settles into a slower forward drift, and lets desktop cursor movement gently steer its damped vanishing point without replacing the existing letter-depth interaction. Violet streaks, restrained warm signals, a dark contrast veil, and capped opacity preserve the footer copy and brand readability. Coarse-pointer devices render fewer stars, offscreen animation pauses through IntersectionObserver, render density is capped at 1.25 DPR, and reduced-motion visitors receive a static field.

**Verified:** Local Vite runtime checks found the footer canvas at the correct responsive dimensions with no console errors. Two captured desktop frames differed, confirming live motion; desktop and 390x844 visual checks confirmed readable footer content, visible hyperspace motion, and no new horizontal overflow. `git diff --check` passes with only the existing line-ending warning. The standalone production build could not be rerun because the managed sandbox denied Vite's esbuild child process, while the already-running local Vite compiler accepted and rendered the update.

**Next:** Review the footer acceleration and settled drift locally at `http://127.0.0.1:5174/`. Commit and deploy after Dheoryan approves the feel.

## 2026-07-30 11:22 — [Codex] Deployed the scroll-performance and marquee patch

**Done:** Committed and pushed the approved hero-to-work performance fix and slower capability marquee to `main`, triggering the linked Vercel production deployment. The release removes competing card transforms, reduces and pauses the hero canvas workload during the transition, and changes the marquee loop from 32 seconds to 44 seconds. Local QA logs and helper artifacts were excluded.

**Verified:** The final production build passes (`2022 modules transformed`), `git diff --check` reports no whitespace errors, and GitHub accepted the updated `main` branch for Vercel auto-deployment.

**Next:** Smoke-test the hero-to-work scroll transition and marquee pacing at `https://dheoryan.vercel.app/` after Vercel finishes building.

## 2026-07-30 11:21 — [Codex] Slowed the capability marquee

**Done:** Reduced the marquee pace beneath the hero by extending its linear loop from 32 seconds to 44 seconds. The content, spacing, hover-to-pause behavior, and visual hierarchy remain unchanged.

**Verified:** The live local track reports a `44s` animation duration and retains its continuous loop. Production build passes (`2022 modules transformed`), and `git diff --check` reports no whitespace errors.

**Next:** Review the calmer marquee together with the pending hero-to-work performance patch at `http://127.0.0.1:5174/`, then deploy both after approval.

## 2026-07-30 11:19 — [Codex] Removed the hero-to-work scroll bottleneck

**Done:** Fixed the production lag reported while scrolling from the hero into “Things I’ve shipped.” The featured cards no longer let GSAP and Motion compete over the same transform; they now use one lightweight Motion entrance. Reduced the hero canvas from 60 FPS to 30 FPS on pointer devices and 24 FPS on coarse-pointer devices, capped render density at 1.25 DPR, moved the static gradient out of the frame loop, limited expensive node glow rendering, and pause the canvas once less than 28% of the hero remains visible.

**Verified:** Production profiling showed the previous transition kept the canvas active at 8% hero visibility while the first cards carried GSAP `matrix3d` transforms. Local verification at the same scroll position now shows the canvas below its pause threshold and both visible cards settled at `transform: none` with a single animation owner. The transition renders cleanly with no browser console errors. Production build passes (`2022 modules transformed`), and `git diff --check` reports no whitespace errors.

**Next:** Review the optimized local transition at `http://127.0.0.1:5174/`. Commit and deploy the performance patch after Dheoryan approves the feel.

## 2026-07-30 11:11 — [Codex] Deployed the animated hero and Equinox refinements

**Done:** Committed and pushed the approved hero and Equinox update to `main`, triggering the linked Vercel production deployment. The release includes the centered hero context rail, independently animated Equinox System canvas, smoother local cursor response, readable Equinox glass surfaces, and circular cursor-petting reactions. Local QA logs, screenshots, generated output, and helper scripts were intentionally excluded from the commit.

**Verified:** The final production build passes (`2022 modules transformed`), `git diff --check` reports no whitespace errors, and GitHub accepted the updated `main` branch for Vercel auto-deployment.

**Next:** Smoke-test the deployed hero and Equinox interactions at `https://dheoryan.vercel.app/` after Vercel finishes building.

## 2026-07-30 11:06 — [Codex] Smoothed the hero's circular cursor response

**Done:** Removed the broad cursor translation that dragged complete canvas layers and made circular movement feel clunky. The structural rails now remain anchored while a local magnetic-lens response gently displaces only nearby boxes, nodes, matrices, orbits, and connections. Replaced frame-dependent pointer interpolation with time-based damping, added eased influence on pointer enter/leave, tightened the interaction radius, and reduced node repulsion.

**Verified:** Production build passes (`2022 modules transformed`). Live desktop testing covered an eight-point circular cursor path across the hero; the headline and structural grid remained fixed while nearby geometry responded without visible snapping. The clean preview reported no browser console errors, and `git diff --check` passes with only existing line-ending warnings.

**Next:** Review the smoother hover locally at `http://127.0.0.1:5174/`. Commit and deploy it with the pending Equinox and hero updates only after Dheoryan approves the feel.

## 2026-07-30 10:54 — [Codex] Rebuilt the hero artwork as a fully animated system field

**Done:** Replaced the flattened hero bitmap treatment with a deterministic canvas scene built from the reference artwork's visual language. Boxes now drift at separate depths, horizontal and vertical rails travel independently, orbit arcs rotate with moving satellites, signal nodes pulse, dot matrices shimmer, and curved connections continuously redraw. Cursor proximity adds restrained local parallax without moving the hero copy. Added a capped device-pixel ratio, off-screen animation pausing, touch-pointer exclusion, and a reduced-motion static frame. Removed the obsolete 228 KB hero bitmap because the new field is generated directly in the browser.

**Verified:** Production build passes (`2022 modules transformed`). Desktop and 390x844 checks confirmed the full field remains readable behind the hero, individual animation frames differ over time, and the mobile composition retains the complete artwork without horizontal overflow. No new runtime errors appeared after the final reload; older console entries were from the replaced hot-reload implementation. `git diff --check` passes with only existing line-ending warnings.

**Next:** Review the independently animated hero locally at `http://127.0.0.1:5174/`. Commit and deploy it together with the approved local Equinox and hero-context updates only after Dheoryan approves the behavior.

## 2026-07-30 10:46 — [Codex] Replaced the hero background with the animated Equinox System field

**Done:** Replaced the procedural gradient/grid hero texture with the approved Equinox System artwork as a full-bleed image-led background. Added spring-smoothed cursor parallax, a cursor-following violet illumination field, a slow depth-breathing scale, and a restrained signal sweep. Added center and edge contrast overlays to protect the headline, metadata, body copy, and actions. Touch movement is ignored to avoid mobile scroll jitter, and reduced-motion visitors receive a static composition without the sweep or cursor response. Optimized the supplied 2.44 MB PNG into a visually equivalent 228 KB JPEG and removed the duplicate source asset.

**Verified:** Production build passes (`2021 modules transformed`). Browser checks confirmed clean desktop and 390x844 crops, stable full-viewport coverage, readable hero copy, and a measurable cursor-linked transform change. A clean-tab console check reported no errors. `git diff --check` passes with only existing line-ending warnings.

**Next:** Review the combined local hero and Equinox updates at `http://127.0.0.1:5174/`. Commit and deploy only after Dheoryan approves the new background behavior.

## 2026-07-30 10:38 — [Codex] Visualized the Equinox System identity pattern

**Done:** Created a preview-only visual exploration of the proposed “Equinox System” pattern: an asymmetric deep-plum/black field of fine grids, offset modular geometry, orbital paths, luminous violet markers, and rare amber signals. The concept expresses structured systems thinking with restrained human warmth. No portfolio files or production assets were changed.

**Next:** If Dheoryan approves the direction, turn the exploration into a repeatable portfolio surface or a set of controlled implementation-ready variants.

## 2026-07-30 10:36 — [Codex] Rebalanced the hero context metadata

**Done:** Replaced the hero's disconnected left/right metadata with one centered context rail. Availability, role, specialty, and Bekasi location now read as a single hierarchy, separated by restrained purple ticks and faint balancing lines on desktop. Mobile gives availability its own row and wraps the remaining context beneath it with slightly stronger contrast.

**Verified:** Production build passes (`2021 modules transformed`). Browser checks confirmed the rail stays centered and single-line at desktop width, forms a clean three-line stack at 390x844, leaves the headline dominant, and introduces no overlap or clipping. No browser console errors were observed, and `git diff --check` passes with only existing line-ending warnings.

**Next:** Review the full local update at `http://127.0.0.1:5174/`. Commit and deploy the hero rail together with the approved Equinox glass and petting updates.

## 2026-07-30 10:30 — [Codex] Added cursor-petting reactions to Equinox

**Done:** Added an intentional cursor-petting gesture to Equinox. Circular rubs or repeated short strokes across the face now create a shy leaning animation, brighter responsive glow, happy sparkles, a small energy reward, and one of six cute speech-bubble responses. A movement threshold, slow-gesture tolerance, and five-second cooldown prevent normal pointer passes from causing chatter. Touch pointers are excluded, and reduced-motion visitors still receive the response without the added motion.

**Verified:** Production build passes (`2021 modules transformed`). Browser cursor-path testing confirmed a single pass does not trigger a response while a deliberate circle does; the tested response rendered clearly in the existing glass bubble. No browser console errors were observed, and `git diff --check` passes with only the existing line-ending warnings.

**Next:** Review the petting interaction locally at `http://127.0.0.1:5174/`. Commit and deploy the combined Equinox glass and petting updates only after Dheoryan approves them.

## 2026-07-30 10:23 — [Codex] Added readable glassmorphism to Equinox

**Done:** Restyled the expanded Equinox guide and its speech bubble with a restrained purple-black glass material: layered translucent gradients, stronger backdrop blur and saturation, inner edge highlights, softer glow, and glass control surfaces. Added a darker reading surface behind long responses and raised secondary-text contrast so page imagery cannot compete with the copy.

**Verified:** Production build passes (`2021 modules transformed`). Browser checks at 390x844 and desktop confirmed the settled panel remains readable over both portrait and text-heavy backgrounds, fits the mobile viewport without internal overflow, and retains its full interaction layout. No browser console errors were observed, and `git diff --check` passes with only the existing line-ending warning.

**Next:** Review the glass treatment locally at `http://127.0.0.1:5174/`. Commit and deploy only after Dheoryan approves it.

## 2026-07-30 10:14 — [Codex] Deployed the Equinox portfolio guide upgrade

**Done:** Committed the approved Equinox guide upgrade and simplified floating visual as `174599d` (`Upgrade Equinox portfolio guide`) and pushed `main` to GitHub. The push triggered the linked Vercel production deployment.

**Verified:** The final production build passed (`2021 modules transformed`) before deployment, and GitHub accepted `main` from `9b93afb` through `174599d`. Unrelated local QA, server-log, and utility artifacts remained untracked.

**Next:** Smoke-test Equinox on `https://dheoryan.vercel.app/` after Vercel finishes building. Replace the existing placeholder WhatsApp route when the real number is confirmed.

## 2026-07-30 10:07 — [Codex] Simplified Equinox's floating visual

**Done:** Removed the visible glass click-target box and rotating square orbit from Equinox. The companion now renders as one mouthless face with a restrained glow, status light, and energy line while preserving the original large pointer/touch target and adding a visible keyboard focus outline.

**Verified:** Production build passes (`2021 modules transformed`). Playwright at 390x844 confirmed the simplified pet is clear, unobstructed, and correctly anchored without the stacked-box appearance. `git diff --check` passes with only line-ending warnings. No deployment was made.

**Next:** Continue reviewing the upgraded guide locally at `http://127.0.0.1:5174/`, then confirm the WhatsApp number before committing and deploying.

## 2026-07-30 10:01 — [Codex] Upgraded Equinox into a persistent portfolio guide

**Done:** Rebuilt `VirtualPet.tsx` in five progressive layers. Added persisted mute/minimize controls and reduced-motion support; slower persistent energy, return-visit memory, explored-case memory, idle states, and richer mouthless animation; project recommendations, recruiter summary, home-section navigation, and contact routes; case-aware preset answers for problem, outcome, summary, and Dheoryan's role; and a typed local question field that uses portfolio-aware keyword matching without an external AI service or visitor-data collection. `App.tsx` now passes all current case metadata and navigation handlers into Equinox.

**Verified:** Production build passes (`2021 modules transformed`). Playwright desktop and 390x844 mobile checks covered open/close, mute and minimize persistence, restore, contact links, home and case guide states, unread-case recommendations and navigation, case memory, preset Q&A, typed Q&A, message readability, and mobile fit. No horizontal page overflow or clipped Equinox content was observed. Local console errors are limited to the expected Cloudflare beacon CORS rejection on `127.0.0.1` and the existing missing `favicon.ico`. `git diff --check` passes with only line-ending warnings.

**Next:** Review the local experience at `http://127.0.0.1:5174/`. Confirm the real WhatsApp number before production because the existing portfolio contact route remains `+62 812-3456-7890`. Commit and deploy only after Dheoryan approves the new guide behavior.

## 2026-07-29 11:28 — [Codex] Added Modal and a real Dark confirmation workflow to DRP

**Done:** Added native `Modal` (node `296:418`) to `02 Components`. It has `Size=Sm|Md`, editable Title and Body, a `Show secondary` boolean, nested DRP Button instances for Cancel/Create, token-bound surface/radius/elevation/border styling, and an Assets description covering focus trap, focus restoration, and action labeling. Added the missing semantic token `Background/Overlay` with explicit Light/Dark alpha values. Created `Desktop / Report creation modal` (node `297:510`) on `03 Patterns & Templates`, a Dark-mode workflow that uses the Modal instance over a semantic overlay, with native Button and Card instances behind it.

**Verified:** Rendered the Modal size grid in Light mode and the full report-creation workflow in Dark mode. The overlay establishes hierarchy without obscuring the dialog; the new modal border maintains clear separation in Dark mode. Nested secondary and primary Button instances remain intact in the Modal component.

**Next:** Add an Empty State pattern and Pagination only when a real list/table workflow requires them. Before publishing, document implementation-level keyboard/ARIA requirements in code documentation, decide ownership/versioning/release process, and perform a human final review in Figma. The library remains an evolving v0.1, not a publish-ready universal system.

## 2026-07-29 11:14 — [Codex] Completed the DRP Light/Dark component audit

**Done:** Added `Theme validation / Core components` (node `292:475`) to `03 Patterns & Templates`. It presents identical native Button, Checkbox, Badge, Tab, Toast, and Card instances in explicit Light and Dark semantic-mode containers. The existing mobile form remains the Light layout proof, while the operations dashboard remains the Dark layout proof for form, feedback, table, and navigation components.

**Verified:** Rendered the side-by-side validation frame and visually checked semantic inheritance. Canvas, surfaces, text, borders, status colors, focus treatment, elevations, and action controls resolve coherently in both modes. Together with the existing component grids, Light mobile form, and Dark dashboard, every current DRP primitive has a visual Light and/or Dark validation path and no theme issue was found.

**Next:** Do not add a Modal until a focused confirmation/task workflow requires it. Before publishing, add implementation-level keyboard/ARIA notes in code documentation, decide a library owner/versioning and release process, then perform a human final review in Figma. The library remains an evolving v0.1, not a publish-ready universal system.

## 2026-07-29 11:11 — [Codex] Completed the DRP component documentation audit

**Done:** Audited all 12 native Assets components on `02 Components`, then added or strengthened their Figma descriptions. Every component now explains intended use, editable properties, variants, and the relevant accessibility/interaction caveat. The newly documented assets are Toast, Card, Table Header, and Table Row; Button, inputs, feedback, selection, and navigation descriptions were tightened for consistent guidance.

**Verified:** Programmatically confirmed zero undocumented assets. The library uses a coherent exposed-property convention: editable content first (Label, Title, Message, etc.), followed by capitalized variant properties such as State, Size, Tone, Variant, or Density. Checkbox and Switch retain distinct semantic properties (`Checked` and `On`) because they represent different interaction models.

**Next:** Add a Modal only when a focused confirmation/task workflow needs one. Before publishing, finish the final Light/Dark audit across components and templates, then document implementation-level keyboard/ARIA requirements in the guide or connected code documentation. The library remains an evolving v0.1, not a publish-ready universal system.

## 2026-07-29 11:09 — [Codex] Turned the DRP Start Here page into an operating guide

**Done:** Extended `DRP Design System — Start Here` (node `232:400`) with a token-bound `Component use & accessibility` section. It now documents instance discipline, the feedback decision model (Alert vs Toast vs Badge), and release-level accessibility checks: logical keyboard order, visible focus, text alongside status color, and 44px touch targets for touch-first flows. The guide footer also sets the system-governance rule: a workaround repeated three times becomes a documented component or pattern.

**Verified:** Rendered the new section and the entire 1440×1780 guide in Dark mode. Existing foundation, token architecture, usage steps, and new operating rules form a coherent, readable in-file onboarding guide.

**Next:** Audit component descriptions and property naming across the full library, then add a Modal only when a focused confirmation/task workflow needs one. Before publishing, add keyboard/ARIA implementation notes alongside each component's Figma usage guidance and run a final Light/Dark audit. The library remains an evolving v0.1, not a publish-ready universal system.

## 2026-07-29 11:00 — [Codex] Added table primitives and applied them in the DRP dashboard

**Done:** Added native `Table Header` (node `283:400`) and `Table Row` (node `283:463`) components on `02 Components`. Table Header exposes editable column labels; Table Row has editable Name/Owner/Status/Updated cells plus `Density=Comfortable|Compact` and `State=Default|Hover|Selected`. Replaced the prior one-off Recent activity panel in `Desktop / Operations dashboard` (node `271:401`) with a token-bound `Project updates / Table` panel composed from one Table Header and three Table Row instances. Added a native Card instance for a system-coverage insight.

**Verified:** Visually rendered the six Row variants, then the composed dark-mode table section and the whole dashboard. Header/row content, compact/comfortable density, selected-state focus treatment, Card, and all inherited Dark semantic tokens render cleanly. The dashboard now demonstrates real instances of Table Header, Table Row, and Card rather than only specimen grids.

**Next:** Add a Modal only when a focused confirmation/task flow is needed; otherwise expand data-display capabilities with pagination, sortable column affordances, or an Empty State when a real app requirement calls for them. Before publishing, add component usage notes and accessibility guidance for all primitives, then audit naming and component-property consistency. The library remains an evolving v0.1, not a publish-ready universal system.

## 2026-07-29 10:55 — [Codex] Added Toast and Card foundations to DRP

**Done:** Added two native component sets to `02 Components`. `Toast` (node `280:448`) provides an ephemeral, elevated feedback message with semantic Info/Success/Warning/Danger tones, Standard (440px) and Compact (320px) sizes, editable `Title` and `Message`, plus a `Dismissible` boolean control. `Card` (node `282:412`) provides a token-bound content container with Elevated/Outlined variants and Standard (360px)/Compact (320px) sizes, plus editable `Title` and `Body`.

**Verified:** Rendered and visually checked each complete grid. Toast uses the existing surface, text, border, feedback, icon, and Elevation/2 tokens; it has a clear tone rail and close affordance without becoming a persistent Alert. Card uses semantic surface/text/border variables plus spacing and radius tokens; Elevated and Outlined treatments are visibly distinct and both compact variants remain legible.

**Next:** Add a Table/data-display primitive (including density and row state), then use Card and Table instances to replace selected one-off containers in the desktop dashboard. Add a Modal only once a real workflow needs confirmation or focused task completion. The library remains an evolving v0.1, not a publish-ready universal system.

## 2026-07-29 10:50 — [Codex] Added responsive Alert sizing to DRP

**Done:** Extended the native `Alert` component set (node `265:412`) with a `Size` variant property. It now has the complete `Tone` × `Size` matrix: Info, Success, Warning, and Danger in Standard (480px) and Compact (320px) sizes. Compact alerts reduce padding, spacing, and corner radius while retaining the existing editable `Title` and `Message` properties and all semantic color-token bindings.

**Verified:** Rendered the full eight-variant grid from Figma and visually checked the result. The Compact variants are clean at a 320px content width and fit safely inside the existing 390px mobile layout convention. During implementation, Figma initially placed cloned variants outside the component set; this was corrected and the final schema confirms both `Size=Standard` and `Size=Compact` are native options of the same Alert set.

**Next:** Add a Toast feedback primitive, then introduce a reusable Card and Table/data-display primitive. Use them to expand the desktop pattern only where those primitives improve a real workflow. The library remains an evolving v0.1, not a publish-ready universal system.

## 2026-07-29 10:47 — [Codex] Proved DRP components in Light and Dark templates

**Done:** Created `03 Patterns & Templates` in the shared DRP Figma file. Added `Desktop / Operations dashboard` (node `271:401`) in Dark mode and `Mobile / Project setup form` (node `273:425`) in Light mode. The desktop composition uses native Button, Tab, Alert, Text Field, Select, Badge, and Switch instances alongside token-bound layout frames. The mobile form uses native Text Field, Select, Checkbox, Switch, and Button instances.

**Verified:** Rendered and visually checked both templates from Figma. The dashboard has a coherent Dark-mode operations view with filters, status, metrics, availability, and activity; the mobile form is clean, readable, and safely fits a 390px-wide screen. Component instances inherit their parent semantic Light/Dark modes, proving the system can compose consistently across themes and layouts.

**Found:** Alert currently has a fixed 480px composition, so it is not suitable for narrow mobile screens until it receives a compact or responsive variant. It was deliberately excluded from the mobile proof.

**Next:** Add responsive sizing to Alert (and optionally Text Field/Select), then add Toast/Modal and card/table primitives as product needs dictate. Do not publish the library as a universal system until those higher-level patterns are mature.

## 2026-07-29 10:38 — [Codex] Added DRP select, switch, and tab primitives

**Done:** Extended `02 Components` in the shared DRP Figma file with three native component sets: `Select` (node `267:424`, Default/Focus/Error/Disabled and editable Label, Value, Helper); `Switch` (node `268:419`, On/Off × Default/Disabled with editable Label); and `Tab` (node `269:412`, Active/Default/Disabled with editable Label). Added the semantic color tokens `Icon/Default`, `Icon/Disabled`, and `Icon/On action`, each with Light/Dark values and appropriate text/shape scopes, so control thumbs and future icons stay token-driven.

**Verified:** Select, Switch, and Tab were each rendered from Figma and visually checked. Select preserves the Text Field grammar while adding a clear non-editable chevron; Switch distinguishes immediate settings from Checkbox form choices in its component description; Tab has an active indicator and clear disabled treatment. All components follow the existing `State=...` / capitalized variant convention.

**Next:** Create `03 Patterns & Templates` and use only existing instances to compose a desktop dashboard and a mobile settings/form template. Add navigation primitives (top navigation and side navigation) as the system needs them during that proof step. Do not publish the library until templates verify the components work together in Light and Dark modes.

## 2026-07-29 10:33 — [Codex] Extended DRP with core form and feedback components

**Done:** Continued the shared DRP Figma library on page `02 Components`. Added four native, documented component sets: `Text Field` (node `258:420`, Default/Focus/Error/Disabled with editable Label, Value, and Helper); `Checkbox` (node `260:414`, checked/unchecked and default/disabled with editable Label); `Badge` (node `261:408`, Info/Success/Warning/Danger with editable Label); and `Alert` (node `265:412`, Info/Success/Warning/Danger with editable Title and Message). Extended the four semantic feedback-color variables to include `STROKE_COLOR`, allowing the same status tokens to drive component borders as well as text and fills.

**Verified:** Each new component set was checked for correct variant layout and visually rendered from Figma. Text Field exposes its three intended editable text properties plus State. Checkbox, Badge, and Alert render their semantic status/disabled states correctly. The systems currently show in Figma's default Light mode in their component grids and remain token-bound so screen-level Light/Dark mode wrappers can resolve them contextually.

**Next:** Build Select and Switch next, then establish navigation primitives (Tabs and top/side navigation). Afterwards create the `03 Patterns & Templates` page and prove the library by composing a dashboard and a mobile form from instances only. The library is still v0.1, not yet ready to be published as a complete universal system.

## 2026-07-28 16:41 — [Codex] Began the native DRP Figma design-system library

**Done:** Built the first real design-system layer directly in the shared DRP Figma file (`o5UL8n01EFgPLh7p4ozU4H`). The formerly blank `01 Introducing Design System` page now contains a token-bound, visually verified `DRP Design System — Start Here` guide (node `232:400`). Created 56 variables: hidden primitive neutrals/brand/feedback colors; semantic color tokens with Light and Dark modes; spacing; and radius. Added 10 reusable Inter text styles plus two elevation styles. Created a dedicated `02 Components` page and a native `Button` component set (node `237:424`) with 12 variants: Primary/Secondary × Sm/Md × Default/Hover/Disabled, editable `Label` text, token-bound colors, and component usage descriptions.

**Found:** The chosen `01 Introducing Design System` page was intentionally empty, so it is safe to use as the system’s guide/foundation surface. Figma gives every new Frame a white default fill and `resize()` can disable text auto-sizing; both were caught through screenshots and corrected. The guide has been visually verified in Dark mode, and the Button component’s variant grid and editable-property schema were verified.

**Next:** Build the remaining component families incrementally on `02 Components`: Text Field, Select, Checkbox/Switch, Badge, Alert/Toast, then cards/navigation. Add a `03 Patterns & Templates` page only after the core components are stable. The system is a working v0.1 foundation, not yet a complete Atlassian-scale library.

## 2026-07-20 17:27 — [Codex] Deployed Cloudflare Web Analytics to production

**Done:** Committed the Cloudflare Web Analytics integration as `a0faf60` (`Add Cloudflare web analytics`) and pushed `main` to GitHub. The push advanced `origin/main` from `cdbdfeb` to `a0faf60`, triggering the linked Vercel production deployment.

**Verified:** GitHub `origin/main` resolved to full commit `a0faf6003d985760e35ca6f5a34d73fbb1bde075`, matching the local deployment commit. Unrelated local logs and helper artifacts were left untracked.

**Next:** Allow Vercel a short time to finish deployment, then confirm visitor activity in the Cloudflare Web Analytics dashboard after opening the production portfolio.

## 2026-07-20 17:24 — [Codex] Connected the supplied Cloudflare Web Analytics token

**Done:** Embedded Cloudflare's official Web Analytics beacon in `index.html` with site token `2ec8375a6da84140aad0f156ac86fe06`. Removed the temporary environment-variable loader from `src/main.tsx` and deleted `.env.example`, so the tracker now works without a Vercel environment variable. Kept `spa: false` because this portfolio uses hash routes and Cloudflare does not support automatic hash-route page views; initial visits remain tracked correctly.

**Verified:** Production build passes (`2021 modules transformed`), `git diff --check` reports only repository-wide line-ending warnings, and the token appears exactly once in both source `index.html` and built `dist/index.html`. No deployment was made.

**Next:** Commit and push these changes to `main` when the user is ready; Vercel will auto-deploy and Cloudflare will begin receiving production visits.

## 2026-07-20 17:17 — [Codex] Replaced paid Vercel Analytics with free Cloudflare Web Analytics

**Done:** Removed `@vercel/analytics` and its React component. Added a dependency-free Cloudflare Web Analytics beacon loader in `src/main.tsx`, configured through `VITE_CLOUDFLARE_ANALYTICS_TOKEN`, plus `.env.example` documenting the setting. The beacon uses `spa: false` because Cloudflare does not support hash-based routers; it will accurately count initial visits but will not treat `/#/...` case-study transitions as separate pages.

**Why:** Cloudflare Web Analytics is free and privacy-first, works on a Vercel-hosted site without DNS or hosting changes, and does not use visitors' personal data. The integration remains inactive until a Cloudflare Web Analytics site token is added to the Vercel environment.

**Verified:** Production build passes (`2021 modules transformed`), `git diff --check` passes with only existing line-ending warnings, and `npm audit --omit=dev` reports zero vulnerabilities. No deployment was made.

**Next:** In Cloudflare Web Analytics, add `dheoryan.vercel.app`, copy the site token, and set it in Vercel as `VITE_CLOUDFLARE_ANALYTICS_TOKEN` for Production before deploying.

## 2026-07-20 17:09 — [Codex] Installed Vercel Web Analytics

**Done:** Installed `@vercel/analytics@2.0.1` and mounted its React `<Analytics />` component once in `src/main.tsx`, beside the root portfolio application. Updated `package.json` and `package-lock.json` through npm.

**Verified:** Production build passes (`2022 modules transformed`), the package resolves from the project dependency tree, and `git diff --check` passes with only the repository's existing line-ending warnings.

**Next:** Enable Web Analytics from the Vercel project dashboard, then deploy these changes. Data collection begins after the enabled integration reaches production. npm also reports two high-severity advisories elsewhere in the dependency tree; no forced audit fix was applied because it may introduce breaking upgrades.

## 2026-07-20 17:05 — [Codex] Recommended a visitor-analytics approach

**Recommendation:** Use Vercel Web Analytics first because the portfolio is already deployed on Vercel. It covers visitor and page-view totals, referrers, countries, devices, and browsers without requiring a separate analytics server. The current Hobby allowance is suitable for a portfolio, while GA4 is only worth adding if deeper event funnels and long-term behavioral analysis become necessary.

**Caveat:** The portfolio uses hash-based `/#/...` case-study routes. Total visitor tracking is straightforward, but accurate per-case reporting may require explicit case-view tracking or a future move to path-based routing.

**Next:** No analytics package or dashboard setting has been changed yet. The recommended implementation is enabling Web Analytics in Vercel and adding `@vercel/analytics` to the React root.

## 2026-07-20 16:11 — [Codex] Warmed the Mandiri Utama Finance application letter

**Done:** Rewrote the application letter in a warmer, more conversational Indonesian voice while preserving the verified experience and professional positioning.

**Found:** The shorter, personal opening and simpler closing fit a JobStreet application better than a highly ceremonial business-letter style.

**Next:** No project changes are needed; the letter is ready to paste into the application document.

## 2026-07-20 16:10 — [Codex] Drafted application letter for Mandiri Utama Finance

**Done:** Prepared a tailored Indonesian application letter for the Digital Product Design Staff position at PT Mandiri Utama Finance. The draft uses verified portfolio context: 4+ years in product design, SaaS and enterprise workflow experience, design-system work, and current AI-assisted development exposure. No portfolio code or content was changed.

**Found:** The job-description details and recruiter name were not provided, so the letter avoids unsupported role-specific requirements and uses a general HR addressee.

**Next:** User can replace the date and personal contact placeholders if the application form requires a conventional letterhead.

## 2026-07-15 — [Claude] Live BOS gallery replacement — CANCELLED by user; keep only the two done swaps

**Decision:** User rolled back the plan to replace the remaining BOS gallery mockups with live screenshots. capture.bat + stale live-cap-*.png deleted. The gallery KEEPS its two live captures — adoption-log (a3838f2) and roles-log (ce3a8a2) — everything else stays as designed mockups. Do NOT resume live capture unless the user asks again. (Recon knowledge if ever needed: admin pages are /admin/crm-orders, crm-reorder-cycles, crm-woo-customers, internal-calculator, crm-external-mappings, crm-settings, crm-sync-logs, crm-webhook-events; orders/reorder/customers pages carry customer PII + Rp figures — heavy redaction mandatory.)

**Shipped today:** BOS live evidence (adoption-log a3838f2, roles-log ce3a8a2), kitalabel.com liveUrl pill + process-claim softening (041c50b), CMIS review commit (46e47cb). Commits awaiting push.

## 2026-07-15 — [Claude] BOS live-adoption evidence (a3838f2) + validation-gap plan

**Done:** User supplied a live BOS Team Members capture (12 registered accounts; sales active within 7h). Redacted names/emails via pixelation (kept roles/status/timestamps + "12 results" footer), verified redaction visually, swapped it for the team-members MOCKUP in the 17-screen gallery (count unchanged) with caption "Not a mockup: the deployed product's own member log...". First piece of observable adoption evidence on the site.

**Agreed validation-gap plan (user executing):** 1) mine existing evidence — CMIS MOM v1.1→v1.1.2 change example, Read/See prototype-review change; 2) collect — calculator order/quote counts from WooCommerce admin, estimator before/after quote time, 2 colleague quotes (CMIS stakeholder + BOS user); 3) habit — 20-min observed session with a BOS staff user, document 3 frictions, fix 1. Claude writes each into cases as evidence arrives. PENDING Claude: soften process-section claim "pressure-tested with real users" until cases back it; make kitalabel.com a clickable link in Calculator case. Audit note: image-01/image-02 in sonar are byte-identical (hero duplicated in Landing Page Desktop card) — ask user for distinct landing screenshot or confirm intentional.

## 2026-07-15 — [Claude] Reviewed + committed Codex's 5 CMIS/mobile sessions (56ab6ad)

**Done:** Verified in browser at 1920px: new honest hero ("Improving the workflows people already relied on"), Superior/Approval Review labels, TTI process map, no inflated claims. Review fixes applied before commit: section kickers renumbered (05 was missing, 15 duplicated), hero stat "4 watermark states" → "4 procurement tracks" (watermark chapter no longer renders; watermark survives as evidence caption in DMS — correct per Phase 2 scope), Equinox CMIS intro updated to new framing, 11 CMIS images flattened (transparent corners again). Tree clean.

**Next:** push (user runs push.bat) → verify prod /#/work/cmis-suite. SONAR image slots (image-02..06) still awaiting user screenshots. NOTE for Codex: when adding/removing numbered sections, renumber the whole kicker sequence; when changing a case's framing, sweep hero stats + VirtualPet messages for stale claims.

## 2026-07-15 14:42 - [Codex] Corrected Purchase Request review language and strengthened the TTI story

**Done:** Replaced the outdated Purchase Request labels `Approval Atasan` and `Approval Modal` with `Superior Review` and `Approval Review`. The case now describes approval as a dedicated review surface where the request, commercial context, decision, and notes remain visible instead of implying that the current workflow uses a modal. The Tool-module references were updated to use the same terminology.

**TTI enhancement:** Audited the exact Figma TTI canvas at node `9136:6495`. Added a new process-mapping section that turns its discovery notes and legacy flow into a visitor-readable story: Finance selects CERM invoices, creates a customer TTI, assigns it to a courier trip through Surat Jalan, records the customer handover, then reconciles delivered and returned invoices. The section explicitly surfaces the three documented gaps: disconnected records, no shared delivery state, and an invisible return path.

**Clarity:** Rewrote the four-step TTI workflow and key-screen captions around user purpose rather than table columns and button inventory. Removed the clipped `h-[10px]` description containers, increased caption text size, and added the invoice-handover screen to the responsive visual evidence. The mobile narrative now preserves both the discovery map and the final delivery model.

**Verified:** Production build passes (`2021 modules transformed`), `git diff --check` passes with only existing line-ending warnings, and a local headless-browser render confirms the new process map and corrected review labels are present at `http://127.0.0.1:5174/#/work/cmis-suite`. No commit or deployment was made.

## 2026-07-15 12:42 - [Codex] Aligned the DMS chapter to the exact Phase 2 canvas

**Done:** Rebuilt the CMIS case study's DMS chapter around Figma node `10259:117202`, which is exclusively the `DMS Improvement Phase 2 - Upload & Approval Form Dokumen` work. Replaced the generic create/distribute/train/obsolete lifecycle with the verified operator flow: create a document-form request through upload or manual entry, save/update/delete a draft, configure approvers, submit into workflow, approve or reject at the assigned levels, then use history, recap/export, and effective-document migration. Purchase Request and Invoice Delivery remain separate CMIS chapters.

**Evidence:** Reframed the desktop previews as Document-form Request Workspace, Effective-document Library, Approval Progress in the List, Decision History beside the File, and Review the Actual Document. Removed the unrelated standalone watermark chapter from the rendered case flow. Updated the responsive narrative and mobile visual-index artifacts to tell the same Phase 2 story.

**Source:** Audited the exact Figma canvas at `https://www.figma.com/design/i4syXClCF1uumbUVAHGDGA/Cahaya-Management-Information-System?node-id=10259-117202`. Figma structured context and metadata timed out because the node is a 40,919 × 24,350 canvas, so the 4,096px canvas screenshot was used to verify its labeled flows and screen groups.

**Verified:** Production build passes (`2021 modules transformed`), `git diff --check` passes, and local browser review confirms the corrected desktop workflow/evidence sections render without clipped copy. The 390px responsive case contains the updated DMS form, approver, review, and migration chapters. No commit or deployment was made.

## 2026-07-15 10:50 - [Codex] Reframed the CMIS visual previews around DMS Phase 2

**Done:** Corrected the desktop and mobile preview evidence for the CMIS case. Renamed `The DMS in detail` to `What changed in the DMS`, added explicit DMS Improvement Phase 2 context, and replaced field-inventory captions with explanations of the product decisions shown. The login is now labeled as existing-platform context, while the document workspace is positioned as the Phase 2 core surface. Updated supporting cards for approval history, revision identity, visible document validity, role-aware review, uncontrolled copies, and training status. Mobile visual-index assets now use the DMS workspace, approval detail, and controlled-document preview instead of mislabeling the login as Phase 2.

**Clean-up:** Removed unsupported `355 screen variants` and `87 screen variants` labels. Reframed the TTI preview as an invoice-handover workspace with purpose-led copy.

**Verified:** Production build passes (`2021 modules transformed`), `git diff --check` passes, and the revised DMS Phase 2 preview was reviewed at 1440px with no clipped captions. No commit or deployment was made.

## 2026-07-15 10:22 - [Codex] Corrected the CMIS case to the actual improvement scope

**Done:** Reframed the CMIS case from whole-suite ownership to three targeted workstreams inside an existing platform: DMS Improvement Phase 2, the Purchase Request revamp, and Invoice Delivery / TTI. Updated the portfolio card, shared hero, problem/outcome copy, mobile narrative, visual-index descriptions, imported desktop hero, overview, section labels, TTI comparison, and final outcomes. Removed inflated claims such as `500+ screens`, `three modules designed end-to-end`, and `workflows digitised`, replacing them with defensible scope evidence and the CMIS project-team role.

**Source:** Reviewed the linked CMIS Figma node `10259:117201`. The canvas shows the three workflow areas inside one existing CMIS platform; structured context retrieval required a selected Figma layer, but the node screenshot was available and used to validate the overall project structure.

**Verified:** Production build passes (`2021 modules transformed`) and `git diff --check` passes. Desktop at 1440px and mobile at 390px both show the corrected framing without clipping. No commit or deployment was made.

## 2026-07-14 17:52 - [Codex] Replaced repeated mobile case thumbnails with real project evidence

**Done:** Reworked the shared mobile case-study article in `src/app/App.tsx`. The visual index no longer repeats the generic homepage thumbnail three times. Each project now supplies three named product artifacts, used by the visual index and cycled through the mobile case-flow cards so the evidence matches the story. Selecting a card opens that exact screen in the shared preview modal.

**Verified:** Read/See reviewed locally at 390px: its visual index now shows and labels Customer dashboard, Audience workspace, and Activation flow. Tapping Customer dashboard opens `Read/See · Customer dashboard` in the modal. All referenced artifact paths exist; production build passes (`2021 modules transformed`) and `git diff --check` passes. No commit or deployment was made.

## 2026-07-14 17:21 - [Codex] Restored responsive thumbnails for every portfolio case

**Done:** Fixed the responsive work-grid mismatch in `src/app/App.tsx`. Mobile and tablet previously showed visual cards only for the first four projects, while Universal Design System, Mailtarget App, and SONAR were reduced to text-only archive rows. Those three cases now use the same thumbnail cards below the featured work on screens below the desktop breakpoint; desktop retains the compact archive treatment.

**Verified:** Local browser review at 390px shows the Universal Design System and Mailtarget App cards with their thumbnail assets, with SONAR next in the visual sequence. Production build passes (`2021 modules transformed`) and `git diff --check` passes. No commit or deployment was made.

## 2026-07-14 16:13 - [Codex] Deployed the approved portfolio updates to production

**Done:** Committed and pushed the approved Mailtarget, Mailtarget Web, SONAR, Read/See, and shared image-preview updates to `origin/main`.

**Deployment:** GitHub accepted commit `89131a9` (`Polish Mailtarget and SONAR case studies`), advancing `main` from `9c31084`. Vercel auto-deploy is triggered from this push.

**Included:** Mailtarget story and outcome refinements, compact mobile-preview detection across use cases, refreshed Mailtarget and SONAR assets, the interactive SONAR pricing study, SONAR key-screen fixes, and the Read/See white-background image asset. Local logs and Playwright artifacts were intentionally excluded.

## 2026-07-14 16:06 - [Codex] Replaced weak Mailtarget outcome metrics with defensible scope evidence

**Done:** Audited the Mailtarget outcome row. Removed the unsupported `4 buyer contexts explained` card and replaced implementation-detail language with clear scope evidence: `480+ screens in redesign scope`, `3 core flows aligned`, `2 release environments`, and `18+ public site pages designed`. The page count is grounded in the documented homepage, 12 feature pages, and 5 solution pages.

**Verified:** Production build passes (`2021 modules transformed`) and `git diff --check` passes. No commit or deployment was made.

## 2026-07-14 15:28 - [Codex] Generalized compact mobile screen previews

**Done:** Updated the shared `CaseImagePreview` flow in `src/app/App.tsx` so mobile evidence opens in the existing compact, vertically scrollable modal treatment from the SONAR case. Previews now identify a mobile capture through an explicit flag, a `mobile` title, or the actual loaded image dimensions (portrait captures up to 480px wide). This covers imported case screenshots whose alt text is blank or generic, including Mailtarget Web's `360x5617` mobile page.

**Verified:** Production build passes (`2021 modules transformed`) and `git diff --check` passes. No commit or deployment was made.

## 2026-07-14 15:20 - [Codex] Cleaned up the Mailtarget before/after panel borders

**Done:** Replaced the single split outer frame with two independent rounded panels, one for the fragmented state and one for the unified state. The purple icon connector now sits in the gap between them, eliminating the awkward divider and mismatched border treatment.

**Verified:** Desktop local review at `http://127.0.0.1:5174/#/work/mailtarget-app` confirms the two panels and connector read cleanly. No commit or deployment was made.

## 2026-07-14 15:12 - [Codex] Replaced Mailtarget before/after text arrow with an icon

**Done:** Replaced the `->` character in the Mailtarget App before/after connector with Lucide's `ArrowRight` icon. It retains the existing purple circular direction cue while reading as an intentional visual control rather than text.

**Verified:** Source change is scoped to `src/imports/CaseStudyMailtargetApp-1/index.tsx`. No commit or deployment was made.

## 2026-07-14 15:10 - [Codex] Completed the Mailtarget App case-study arc

**Done:** Turned the Mailtarget App case from a dense screen inventory into a complete product narrative. Added an operational before/after that explains the fragmented Campaign Builder, Contacts, and Automation experience, then introduced a selectable three-story evidence module for safe first sends in Sandbox, message-level delivery tracing, and shared account control. The supporting screens are now a compact gallery rather than competing with the main explanation, and every newly surfaced Mailtarget screen opens the shared full-size preview modal.

**Public story:** Clarified the merged Mailtarget Web chapter as the public proof of the same redesign, with explicit buyer-facing jobs: deliver email reliably, create relevant messages, and optimize sending. Updated the mobile case summary to carry the same three-moment story.

**Verified:** Desktop local review at `http://127.0.0.1:5174/#/work/mailtarget-app` confirms the story tabs switch content and the Activity Log opens the preview dialog. Production build passes (`2021 modules transformed`) and `git diff --check` passes. No commit or deployment was made.

**Next:** Review the final Mailtarget App case locally. Once approved alongside the existing pending asset changes, stage the intended files and push `main` to trigger Vercel.

## 2026-07-14 15:22 - [Codex] Reframed the Mailtarget case study around one product story

**Done:** Rewrote the Mailtarget App hero, problem, context, decisions introduction, outcome proof, shared portfolio hero copy, and mobile-case summaries. The narrative now distinguishes the fragmented campaign/contacts/automation experience from the transactional-email context, explicitly explains the developer and operations roles, and frames the marketing website as the public explanation of the same product rather than a disconnected add-on.

**Evidence:** The final section now ties the existing evidence together: 480+ screens using shared patterns, three aligned core flows, a Sandbox-to-Production model, 15+ public-site pages, and four buyer contexts. The closing story uses the source site's plain-language product jobs: deliver reliably, create relevant messages, and optimize sending.

**Verified:** Production build passes (`2021 modules transformed`). No commit or deployment was made.

## 2026-07-14 15:05 - [Codex] Corrected Mailtarget App timeline and audited Mailtarget Web source design

**Done:** Updated all visitor-facing Mailtarget App timeline references in `src/app/App.tsx` from `2022-2023` / `2022-23` to `2023-2024` / `2023-24`. This includes the Work list, hero stat, case outcome copy, and mobile-case outcome.

**Found:** Reviewed Figma node `590:30128` in the Mailtarget Web file. The source site organizes the email API story around three plain-language jobs: deliver to the inbox (SMTP relay, testing, SDK/API), create relevant email (templates, A/B testing, design), and optimize sending (list management and monitoring). It also distinguishes self-serve evaluation (`Try our sandbox`) from sales-led evaluation (`Talk to sales`) and supports four audience contexts: developers, startups, e-commerce, and enterprise.

**Recommended next:** Enhance the merged Mailtarget case study with a simple interactive product journey from Sandbox to first successful send, an audience-switcher that changes the proof and primary CTA for the four buyer types, and a compact before/after evidence section showing how the unified app language carries across campaign, contacts, and automation. Keep the existing page gallery, but recast it as supporting evidence rather than the main narrative. No broader Mailtarget layout changes were made in this pass.

**Verified:** `git diff --check` passes.

## 2026-07-14 14:38 - [Codex] Fixed SONAR Pro price visibility and mobile-capture preview scale

**Done:** Fixed the featured SONAR Pro plan card in `src/imports/CaseStudySonar-1/index.tsx` by extending its turquoise pricing band through 58% of the card, keeping the plan price entirely visible before the white feature area begins. Updated the shared `CaseImagePreview` in `src/app/App.tsx` so previews whose titles identify them as mobile captures use a compact `min(92vw, 420px)` dialog and a maximum 360px image width. They retain internal vertical scrolling for long screens rather than being stretched to desktop width.

**Verified:** In the local browser, the Pro annual price (`$12 /year`) is fully visible inside the colored band. Clicking SONAR Homepage Mobile opens a narrow, crisp 360px preview with internal vertical scroll; the close control works. Production build passes (`2021 modules transformed`) and `git diff --check` passes.

**Next:** Review the corrected SONAR page locally at `http://127.0.0.1:5174/#/work/sonar`. No commit or deployment was made.

## 2026-07-14 14:22 - [Codex] Repaired SONAR Key Screens after the pricing-prototype pass

**Done:** Corrected the regression introduced in the previous SONAR pass. The Key Screens row that now stacks the Pricing and FAQ evidence uses `items-stretch`, so both cards inherit the full 1152px study width rather than collapsing into narrow slivers. The FAQ remains a full-width screen capture; the two mobile evidence captures remain compact side-by-side cards, with their 320px rendered image width retained to avoid upscaling the 360px sources.

**Verified:** Local visual review at `http://127.0.0.1:5174/#/work/sonar` now shows the pricing desktop screen full width, the FAQ screen full width, and the two mobile captures centered without blur or collapsed media. Production build passes (`2021 modules transformed`); `git diff --check` passes.

**Next:** User should review this repaired local SONAR layout. Do not deploy until the user approves the SONAR page and its untracked image assets for production.

## 2026-07-14 14:08 - [Codex] Made the SONAR pricing study interactive and corrected screen evidence scale

**Done:** Reworked the SONAR Pricing Architecture section in `src/imports/CaseStudySonar-1/index.tsx` into a functional pricing prototype. Visitors can switch Monthly, Quarterly, and Yearly billing, see tier prices and billing language update, and select Free, Pro, or Advance with a visible live selection state. The original pricing screenshot is now opened only from a dedicated zoom icon, keeping the prototype controls free to use. Changed the Key Screens layout so the FAQ card occupies the full content width, and reduced the mobile evidence cards from 564px to their 360px source-width context with 320px captures to prevent upscaling blur.

**Verified:** Production build passes (`2021 modules transformed`). In the local browser, switching to Monthly updated the displayed plan prices, selecting Advance updated the selected-plan announcement to `Advance selected · $12 /month · billed monthly`, and the dedicated reference-preview control opened and closed the shared full-width modal. `git diff --check` passes.

**Next:** Review locally at `http://127.0.0.1:5174/#/work/sonar`; after approval, stage the SONAR implementation plus its uploaded image assets and push to `main` for Vercel deployment.

## 2026-07-14 13:36 - [Codex] Corrected SONAR hero illustration and preview targets

**Done:** Fixed the actual SONAR issues the user pointed out in `src/imports/CaseStudySonar-1/index.tsx`: the "Hero Illustration" section now renders `/case-studies/sonar/image-07.png` instead of an empty placeholder frame, the pricing architecture block now has `data-preview-src="/case-studies/sonar/image-03.png"` so clicking it opens the shared preview modal, and the two mobile screen captures now use explicit inline `320px` sizing so they cannot stretch across the 564px card.

**Found:** The previous pass only adjusted crop/sizing classes and missed the empty Hero Illustration placeholder entirely. `image-07.png` is present locally and untracked alongside the other new SONAR assets. The production build passes after rerunning outside the sandbox due the known Windows `esbuild spawn EPERM` issue.

**Next:** User should hard-refresh `http://127.0.0.1:5174/#/work/sonar` and review the Hero Illustration, Pricing architecture click preview, and mobile screen-card sizing before the prod push.

## 2026-07-14 13:26 - [Codex] Fixed SONAR screen-card image sizing

**Done:** Updated `src/imports/CaseStudySonar-1/index.tsx` so the SONAR FAQ screen card crops its captured side gutter more tightly and the two mobile screen previews render as centered phone-width captures instead of being stretched across the full card. This keeps the desktop screen feeling full-width while preventing the 360px-wide mobile assets from looking blurry.

**Found:** All six SONAR assets are now present locally. `image-05.png` and `image-06.png` are 360px-wide long mobile captures, so the previous 564px stretched rendering was the cause of the softness. The production build passes after rerunning outside the sandbox due the known Windows `esbuild spawn EPERM` issue; Chrome screenshot automation was also blocked by local launch permissions.

**Next:** Review `http://127.0.0.1:5174/#/work/sonar` locally around the SONAR key screens, then push/deploy when the new SONAR assets and this sizing fix are approved.

## 2026-07-14 13:09 - [Codex] Inspected Claude's SONAR handoff state

**Done:** Checked the latest WORKLOG, git history, SONAR imports, and SONAR asset directory after the user noted Claude's last development was the SONAR use-case page. No source or asset changes were made.

**Found:** Local `main` is one commit ahead of `origin/main` at `7bef90d` (`SONAR key screens: convert 5 placeholder boxes to standard image cards`). That commit updates `src/imports/CaseStudySonar-1/index.tsx` to use `/case-studies/sonar/image-02.png` through `image-06.png` for key screens. Those five PNGs exist locally but are still untracked. `public/case-studies/sonar/image-01.png` is deleted locally even though `CaseStudySonar-1/index.tsx` still references it as `imgHeroMockup`, so SONAR is not ready to push/deploy until the hero asset decision is resolved.

**Next:** Either restore/replace `image-01.png` for the SONAR hero and stage `image-02.png` through `image-06.png`, or update the hero reference to a new intended asset. After that, run the build and deploy when the user approves.


## 2026-07-14 — [Claude] DEPLOYED: Read/See upgrade live on production

**Done:** User ran push.bat — origin/main now at a36eda6 (7 commits: onboarding grid, single-SVG sitemap matched to user's original Figma architecture, Hi-Fi card beside Lo-Fi, sitemap in shared card style, top-corner rounding both imports, 10 case images flattened onto white). Vercel auto-deployed; smoke-tested https://dheoryan.vercel.app/#/work/readsee-dashboard — new build serving, hero + preview card render clean, no errors.

**Found:** Root cause of the recurring "square corners" report was IN THE PNGs — transparent rounded/feathered corners baked in by the capture tool (top-left alpha=0). Flattened onto white via PIL; also fixed a truncated PNG (image-01). RULE: when a visual bug survives correct CSS fixes, inspect the asset's pixels.

**Next:** User to eyeball prod at full desktop width + on phone. Remaining backlog: final thumbnails for other cases, bento featured grid (agreed, not started), scroll-scrub before/after for CMIS, colophon page, live-status badges, Slypnir/Moots placement (facts pending from user).

## 2026-07-14 — [Claude] Reviewed + committed Codex's Read/See work; APPROVED for deploy

**Done:** Visually reviewed both pending Codex changes at 127.0.0.1:5174/#/work/readsee-dashboard — onboarding 2-col grid (captions fully readable, nothing clipped) and full-width JSX/SVG sitemap (nodes/connectors aligned, brand-green, good caption). User's refreshed case images render well incl. new hero thumbnail. Committed everything as b5678cd.

**Addendum (commit e3d3a5e):** Per user: rebuilt the sitemap as ONE SVG (nodes+connectors+arrowheads in shared coordinates — old version mixed absolute divs with a separate SVG, causing drift/floating dots) and added a "Hi-Fi Design" card (public/case-studies/readsee-website/image-01.png) beside the Lo-Fi card via new lo-pair row. Verified live. RULE for diagrams: never split nodes and connectors across coordinate systems.

**Sitemap corrections (ce226e9, f10bfb8):** User provided the ORIGINAL Figma base diagram — previous implementations (Codex's and Claude's polish) had wrong architecture: missing Privacy policy, invented Contact us, wrong topology. Now faithful: Nav + Footer feed one shared vertical rail fanning to Products/Features (Connect·Collect·Activate), Use cases, Pricing, Privacy policy, Sign up; Terms hangs off Footer. Also wrapped in the shared evidence-card style (full-width, centered via viewBox offset, padded caption) so Design Process = 3 consistent cards. LESSON: case-study diagrams are factual claims — always verify against the user's source design, never draw "plausible" architecture.

**Next:** PUSH 6eaab07 + 71a8f98 + ce226e9 + f10bfb8 to origin (Codex has working git+auth — it pushed 38a7d15 on 7/13). After Vercel deploys, smoke-test https://dheoryan.vercel.app/#/work/readsee-dashboard (sitemap + onboarding) and /#/work/kitalabel-bos (7/13 story, already live). Minor non-blocking: extra whitespace under sitemap caption.

## 2026-07-14 09:50 - [Codex] Made the Read/See sitemap a full-width section

**Done:** Refined `src/imports/CaseStudyReadsee-1/index.tsx` so the Read/See public-story sitemap is no longer presented as a card. The user-flow diagram now spans the full 1152px content width, uses a wider 390px canvas, removes the card background/border treatment, stacks below the Lo-Fi evidence, and has redrawn connector paths/nodes for Home, Navigation, Footer, Terms, Features, Use cases, Pricing, Contact, and Sign up.

**Found:** The previous version still read like a screenshot card because the sitemap lived inside the same rounded `fl` card frame as the thumbnail layout. The production build passes (`2021 modules transformed`); the existing large JS chunk warning remains. Read/See image asset modifications already present in `public/case-studies/readsee-dashboard/` and `public/case-studies/readsee-website/` were left untouched as user asset changes.

**Next:** Review `http://127.0.0.1:5174/#/work/readsee-dashboard` in the appended Read/See public-story “Design Process” area and confirm whether the full-width sitemap should be deployed with the pending image updates.

## 2026-07-14 09:42 - [Codex] Turned the Read/See sitemap into a real section diagram

**Done:** Updated `src/imports/CaseStudyReadsee-1/index.tsx` so the Read/See public-story process section now pairs the Lo-Fi wireframe card with a rendered sitemap diagram instead of using the sitemap as a static image thumbnail. The sitemap is built from live JSX/SVG nodes and green connector paths, and the two-card row is scoped to a balanced 2-column layout with wider cards, taller media areas, and more readable captions.

**Found:** The Read/See marketing-site case is appended to the main Read/See product case via `MERGED_PUBLIC_STORY`, so this change appears under `/#/work/readsee-dashboard` in the “The public story” area. The production build passes (`2021 modules transformed`); the existing large JS chunk warning remains. Several Read/See image assets were already modified or newly added in `public/case-studies/readsee-dashboard/` and `public/case-studies/readsee-website/`; those were left untouched as user asset changes.

**Next:** Review `http://127.0.0.1:5174/#/work/readsee-dashboard` around the appended Read/See public-story “Design Process” section, then decide whether to deploy together with the pending Read/See image updates.

## 2026-07-14 09:27 - [Codex] Fixed the Read/See onboarding card layout

**Done:** Updated the Read/See Dashboard onboarding section in `src/imports/CaseStudyReadseeDashboard-1/index.tsx` so the four “Getting users to first value” cards render as a 2-column grid. Added scoped section overrides for wider 564px cards, taller 460px card frames, 300px image areas, larger caption spacing, 18px card titles, and 14px/22px body copy so the descriptions are no longer clipped.

**Found:** The previous generated layout used a four-column strip of 270px cards with 230px-wide, 11px descriptions, which caused the text to clip. The production build passes after the change (`2021 modules transformed`); the existing large JS chunk warning remains. Browser screenshot verification was limited because the Playwright browser binary is not installed in the repo and sandboxed Chrome launch is blocked, but the local Vite server remains available at `http://127.0.0.1:5174/`. Separate modified image assets under `public/case-studies/readsee-dashboard/` were already present and were left untouched.

**Next:** Review `http://127.0.0.1:5174/#/work/readsee-dashboard` locally around “Getting users to first value”, then decide whether to commit/deploy this fix together with the pending Read/See image asset updates.

## 2026-07-14 08:49 - [Codex] Started the local development server

**Done:** Started the Vite development server for the portfolio on `http://127.0.0.1:5174/`.

**Found:** Ports `5174` and `5175` were not listening at first. The sandboxed launch failed with the known Windows `esbuild` `spawn EPERM` issue, so the server was relaunched with elevated permissions and Vite reported ready in 2658ms. Local dev log files remain untracked.

**Next:** Continue local review or development from `http://127.0.0.1:5174/`.

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
