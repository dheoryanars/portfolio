# Portfolio Update Brief — Dheoryan Putra Arsi
**For use with Figma Agents (figma-use + figma-generate-design) and Figma Make AI**

---

## Context

You are updating a live portfolio site built in Figma Make, published at `https://dijon-quill-78567576.figma.site`. The source file is a Figma Make project. All changes must be made inside the Figma Make design file, then republished.

This brief is based on a full UX audit. Execute every phase in order. Validate visually with `get_screenshot` after each phase. Do not batch phases — complete one fully before starting the next.

---

## Pre-flight: Inspect Before Touching

Before any edits, run these inspection calls:

```js
// 1. List all pages
return figma.root.children.map(p => ({ name: p.name, id: p.id, childCount: p.children.length }));
```

```js
// 2. On the main Home page, list all top-level frames
const home = figma.root.children.find(p => p.name.toLowerCase().includes('home') || p.name === figma.root.children[0].name);
await figma.setCurrentPageAsync(home);
return home.children.map(n => ({ name: n.name, type: n.type, id: n.id }));
```

Map the page and frame structure before writing anything. Confirm which page contains: (a) the hero section, (b) the work list, (c) each case study.

---

## PHASE 1 — Critical Text Fixes (Typos & Factual Errors)

**Priority: Fix these before anything else. They are live errors on a public portfolio.**

### Fix 1.1 — Typo: "Bussiness" → "Business"

Find every text node containing "Bussiness" (the misspelling) and correct it to "Business".

```js
// Find and fix the typo across all pages
const pages = figma.root.children;
const fixed = [];

for (const page of pages) {
  await figma.setCurrentPageAsync(page);
  const textNodes = page.findAll(n => n.type === 'TEXT' && n.characters.includes('Bussiness'));

  for (const node of textNodes) {
    const segments = node.getStyledTextSegments(['fontName']);
    for (const seg of segments) {
      await figma.loadFontAsync(seg.fontName);
    }
    node.characters = node.characters.replace(/Bussiness/g, 'Business');
    fixed.push({ page: page.name, nodeId: node.id, newText: node.characters });
  }
}

return { fixedCount: fixed.length, nodes: fixed };
```

### Fix 1.2 — Factual Error: "A decade of products" → "4 years of products"

Find the subtitle copy in the work section and correct the timeframe.

```js
await figma.setCurrentPageAsync(figma.root.children[0]);
const textNodes = figma.currentPage.findAll(n =>
  n.type === 'TEXT' && n.characters.toLowerCase().includes('decade')
);

for (const node of textNodes) {
  const segments = node.getStyledTextSegments(['fontName']);
  for (const seg of segments) await figma.loadFontAsync(seg.fontName);
  node.characters = node.characters.replace(/A decade of products/gi, '4 years of products');
}

return textNodes.map(n => ({ id: n.id, text: n.characters }));
```

### Fix 1.3 — Tagline: Add subtitle to SONAR work list item

Find the SONAR work list row and add a descriptive subtitle below the title: **"Email tracker Chrome extension — web design & landing page"**

> Implementation note: Locate the SONAR text node inside the work list. If it has a subtitle slot, populate it. If not, add a new text node below it in the same row frame using the same style as other work item subtitles.

---

## PHASE 2 — Work List Reordering

**Rationale: Most recent and strongest work must lead. Currently the list buries the best items.**

### Target Order (new → old, strongest first)

| New # | Project Title | Original # |
|---|---|---|
| 01 | KitaLabel Business OS | 11 |
| 02 | Universal Design System | 05 |
| 03 | Read/See Dashboard | 01 |
| 04 | CMIS Suite *(merged from 07+08+09)* | 07–09 |
| 05 | Mailtarget App | 04 |
| 06 | KitaLabel Price Calculator | 10 |
| 07 | Read/See Website | 02 |
| 08 | Mailtarget Website | 03 |
| 09 | SONAR | 06 |

### Implementation

```js
// Step 1: Inspect the work list container to understand current structure
await figma.setCurrentPageAsync(figma.root.children[0]);
const workSection = figma.currentPage.findOne(n => 
  n.name.toLowerCase().includes('work') || n.name.toLowerCase().includes('selected')
);
if (!workSection) return 'Work section not found — inspect page structure manually';

// List all direct children (work item rows)
return workSection.children.map((n, i) => ({
  index: i,
  name: n.name,
  id: n.id,
  type: n.type
}));
```

After inspecting, reorder children to match the target order above using `insertChild`:

```js
// Reorder items — replace ITEM_IDs with actual IDs from inspection
// Example pattern (adapt IDs from inspection output):
const container = await figma.getNodeByIdAsync('WORK_LIST_CONTAINER_ID');
const items = [...container.children]; // snapshot current order

// Map items by their title text to find them reliably
const findItemByTitle = (title) => items.find(item => {
  const textNode = item.findOne && item.findOne(n => n.type === 'TEXT' && n.characters.includes(title));
  return !!textNode;
});

const newOrder = [
  findItemByTitle('KitaLabel Business OS'),
  findItemByTitle('Universal Design System'),
  findItemByTitle('Read/See Dashboard'),
  // NOTE: CMIS items — insert merged entry here after Phase 3
  findItemByTitle('Mailtarget App'),
  findItemByTitle('KitaLabel Price Calculator'),
  findItemByTitle('Read/See Website'),
  findItemByTitle('Mailtarget Website'),
  findItemByTitle('SONAR'),
].filter(Boolean);

// Reinsert in new order
newOrder.forEach((item, i) => container.insertChild(i, item));

// Update index numbers on each row (01, 02, 03...)
newOrder.forEach((item, i) => {
  const numberNode = item.findOne && item.findOne(n =>
    n.type === 'TEXT' && /^0\d$/.test(n.characters.trim())
  );
  if (numberNode) {
    const num = String(i + 1).padStart(2, '0');
    figma.loadFontAsync(numberNode.fontName).then(() => {
      numberNode.characters = num;
    });
  }
});

return { reordered: newOrder.map(n => n?.name) };
```

### Merge CMIS items (07+08+09 → single entry)

Find the three CMIS work list rows. Keep only CMIS — Document Management (the strongest, most comprehensive module). Delete the Invoice Receipt and Purchase Request rows. Update the merged row:

- **Title:** `CMIS — Enterprise Suite`
- **Tags:** `Enterprise · Document, Invoice & Purchase Flows`
- **Year:** `2024–2025`
- **Number:** Assign the correct position number per new order above

```js
// Find and hide/delete redundant CMIS items
await figma.setCurrentPageAsync(figma.root.children[0]);
const toRemove = ['Invoice Receipt', 'Purchase Request'];

for (const keyword of toRemove) {
  const row = figma.currentPage.findOne(n =>
    n.type !== 'TEXT' &&
    n.findOne && n.findOne(child =>
      child.type === 'TEXT' && child.characters.includes(keyword)
    )
  );
  if (row) {
    row.visible = false; // hide first; delete only after visual validation
  }
}

// Update the remaining CMIS row title and metadata
const cmisRow = figma.currentPage.findOne(n =>
  n.findOne && n.findOne(child =>
    child.type === 'TEXT' && child.characters.includes('Document Management')
  )
);

if (cmisRow) {
  const titleNode = cmisRow.findOne(n =>
    n.type === 'TEXT' && n.characters.includes('Document Management')
  );
  if (titleNode) {
    const segs = titleNode.getStyledTextSegments(['fontName']);
    for (const s of segs) await figma.loadFontAsync(s.fontName);
    titleNode.characters = 'CMIS — Enterprise Suite';
  }
  return { updated: cmisRow.id };
}

return 'CMIS row not found';
```

---

## PHASE 3 — Homepage Section Updates

### Fix 3.1 — Contact CTA Hierarchy

Currently: WhatsApp (filled/primary) → LinkedIn → Email → Instagram

**Change to:** LinkedIn (filled/primary) → Email (outlined) → WhatsApp (outlined) → Instagram (outlined)

```js
// Find the contact button group and swap fill states
await figma.setCurrentPageAsync(figma.root.children[0]);

// Find the button container in the CTA / contact section
const contactSection = figma.currentPage.findOne(n =>
  n.findOne && n.findOne(child =>
    child.type === 'TEXT' && child.characters === 'WhatsApp'
  )
);

if (!contactSection) return 'Contact section not found';

// List all buttons and their fill states
const buttons = contactSection.findAll(n =>
  n.type === 'TEXT' && ['WhatsApp','LinkedIn','Email','Instagram'].includes(n.characters)
).map(textNode => ({
  label: textNode.characters,
  parentId: textNode.parent?.id,
  parentName: textNode.parent?.name
}));

return buttons;
// After inspecting — swap fills:
// LinkedIn parent → filled/accent fill (same as WhatsApp currently has)
// WhatsApp parent → outlined/stroke only
```

### Fix 3.2 — Add Location to Hero

Find the small metadata text area (top-right, "Product Designer · Web Apps & Design Systems") and add location context.

**New copy:** `Product Designer · Web Apps & Design Systems · Based in Jakarta, Indonesia`

```js
await figma.setCurrentPageAsync(figma.root.children[0]);
const metaText = figma.currentPage.findOne(n =>
  n.type === 'TEXT' && n.characters.includes('Web Apps & Design Systems')
);

if (metaText) {
  const segs = metaText.getStyledTextSegments(['fontName']);
  for (const s of segs) await figma.loadFontAsync(s.fontName);
  metaText.characters = 'Product Designer · Web Apps & Design Systems · Based in Jakarta, Indonesia';
  return { updated: metaText.id, newText: metaText.characters };
}
return 'Meta text not found';
```

### Fix 3.3 — "Available for work" badge prominence

Locate the "Available for work — 2026" indicator. It's currently small monospace top-left. Make it more prominent by:
- Increasing the dot indicator to a badge style (pill with green dot + text)
- The copy stays the same: `● Available for work — 2026`
- If the existing node is already a styled badge, verify contrast is sufficient (green dot should be `#22C55E`)

---

## PHASE 4 — Case Study Structural Improvements

**Apply this template to ALL 9 case studies (after CMIS merge). Each case study needs two new sections.**

### Section A: Add "The Problem" before "The product"

Every case study currently starts with "01 — Overview → The product → [description]".

**Insert before the product description:**

```
00 — The Problem
[Problem statement]
```

Use this copy for each case study:

| Case Study | Problem Statement Copy |
|---|---|
| **KitaLabel Business OS** | KitaLabel's internal operations ran across disconnected tools — no unified view of orders, pricing, customers, or production status. Staff context-switched between spreadsheets, WhatsApp, and ad-hoc dashboards to do basic work. |
| **Universal Design System** | The product team was designing the same components repeatedly across products — buttons, inputs, modals — each slightly different, none documented. Every new screen required re-inventing solved problems. |
| **Read/See Dashboard** | Read/See needed a full CDP product from zero — no existing design system, no established patterns, and a scope covering authentication through campaign activation across 700+ screens in 4 phases. |
| **CMIS Enterprise Suite** | Enterprise staff were processing invoices, documents, and purchase requests through email chains and paper approvals — no audit trail, no status visibility, no structured workflow. |
| **Mailtarget App** | Mailtarget's existing email marketing product lacked a cohesive design system, resulting in inconsistent UI patterns across its campaign builder, contact management, and automation flows. |
| **KitaLabel Price Calculator** | Sales teams were manually calculating custom label pricing using spreadsheets shared over WhatsApp — error-prone, slow, and invisible to customers during the quoting process. |
| **Read/See Website** | Read/See had no marketing website to explain its 3-pillar product model (Connect, Collect, Activate) to enterprise buyers — the product had no public presence to drive inbound leads. |
| **Mailtarget Website** | Mailtarget needed a marketing site that clearly positioned its email API for developer buyers while remaining accessible to non-technical marketing decision makers. |
| **SONAR** | Email marketers had no visibility into whether their outreach emails were opened, forwarded, or ignored — tracking was buried inside full ESP platforms and unavailable as a lightweight browser tool. |

### Implementation pattern for each case study page:

```js
// For each case study page — run this adapted per project
const targetPageName = 'KitaLabel Business OS'; // change per case study
const page = figma.root.children.find(p => p.name.includes(targetPageName));
if (!page) return `Page not found: ${targetPageName}`;

await figma.setCurrentPageAsync(page);

// Find the "01 — Overview" section label
const overviewLabel = page.findOne(n =>
  n.type === 'TEXT' && n.characters.includes('Overview')
);

if (!overviewLabel) return 'Overview section not found';

// Find the section container (parent frame/group)
const overviewSection = overviewLabel.parent;

// Create a new problem section ABOVE the overview
// Using same text style as overview label
const problemLabel = figma.createText();
await figma.loadFontAsync({ family: 'Inter', style: 'Regular' }); // match existing font
problemLabel.characters = '00 — The Problem';
// Apply same styling as overview label (copy font, size, fill, opacity)
// Then create problem body text below it

// Position: insert BEFORE the overview section in parent
const parentContainer = overviewSection.parent;
const overviewIndex = parentContainer.children.indexOf(overviewSection);
parentContainer.insertChild(overviewIndex, problemLabel);

return { inserted: problemLabel.id, beforeSection: overviewSection.id };
```

> **Important:** After inserting the problem label, create a body text node immediately below it using the same typeface and size as the existing "The product" body text. Use the copy from the table above.

---

### Section B: Add "Impact / Outcome" as the final section

After the existing last section of each case study, add:

```
06 — Outcome
[Outcome copy]
```

| Case Study | Outcome Copy |
|---|---|
| **KitaLabel Business OS** | Unified operations into a single B2B OS — replacing 4 disconnected tools. Delivered as an AI-assisted development project in 2026. Internal adoption ongoing. |
| **Universal Design System** | Component library adopted across product teams. Reduced per-screen design time by eliminating repeated component work. Foundation now used in Mailtarget App and CMIS. |
| **Read/See Dashboard** | Full product shipped across 700+ screens and 4 phases, covering all CDP modules from sign-up through campaign activation. Delivered with interactive prototype for stakeholder review. |
| **CMIS Enterprise Suite** | Three enterprise workflows — invoice, document, and purchase request — digitised and shipped. Replaced email-based approvals with a structured, auditable digital flow. |
| **Mailtarget App** | SaaS email platform redesigned with a unified component system. Consistent UI patterns shipped across campaign builder, contact management, and automation flows 2023–2024. |
| **KitaLabel Price Calculator** | Price calculator deployed as a web plugin in 2025. Removed manual spreadsheet quoting from the sales process and made pricing transparent during customer conversations. |
| **Read/See Website** | Marketing site shipped with Lo-Fi through Hi-Fi execution, full mobile responsive design, and custom illustrations communicating the Connect → Collect → Activate product model. |
| **Mailtarget Website** | Launched marketing site with developer-first positioning and clear API integration messaging. Built with mobile simulation and prototype for stakeholder sign-off. |
| **SONAR** | Email tracking extension shipped as a Chrome plugin in 2024. Designed a lightweight web presence and extension UI for the solo-user outreach tracking use case. |

---

## PHASE 5 — Performance & Reliability Fix

### Fix 5.1 — Loading time feedback

The site currently shows a blank white screen for 8–15 seconds while case study pages render. Add a loading state to case study pages.

**In Figma Make:** On each case study page, add an initial-state overlay or skeleton loader that displays while content hydrates. This can be implemented as a Figma Make interaction:
- On page load: show a skeleton frame (dark background, animated shimmer bars)
- After 500ms transition delay: fade in actual content with `opacity: 0 → 1`

In Figma Make's interaction panel, set the page entry animation to **Fade In, 400ms ease-out** on the main content frame so the blank-white flash is replaced by a smooth dark-to-content transition.

### Fix 5.2 — Add work item preview hover states

Each work list row currently has no visual preview. Add a hover interaction in Figma Make:

For each work item row:
1. Create a variant state: **Default** and **Hovered**
2. Hovered state: row background changes to `rgba(255,255,255,0.04)`, and the arrow icon (↗) animates to `transform: translate(2px, -2px)` with `transition: 150ms ease-out`
3. In Figma Make's prototype panel, connect Default → Hovered on `ON_HOVER` with SMART_ANIMATE, 150ms

---

## PHASE 6 — Copy Polish Pass

Run a final find-and-replace pass on these specific strings:

| Find | Replace | Location |
|---|---|---|
| `A decade of products` | `4 years of products` | Work section subtitle |
| `Bussiness` | `Business` | KitaLabel item everywhere |
| `2022-2023` in Read/See Dashboard metadata | `2022–2024` | Case study header (use en-dash) |
| `Read/See CDP App` (product field) | `Read/See` | Case study metadata |

---

## PHASE 7 — Final Validation Checklist

After all phases are complete, run `get_screenshot` on each of the following and confirm:

```
□ Homepage hero — correct badge, location text, CTA order
□ Work list — 9 items in new order, numbers 01–09, no "Bussiness"
□ Work list — CMIS shows as single "Enterprise Suite" entry
□ Case study: KitaLabel Business OS — has "The Problem" section + "Outcome" section
□ Case study: Universal Design System — has "The Problem" section + "Outcome" section
□ Case study: Read/See Dashboard — has "The Problem" section + "Outcome" section
□ Case study: CMIS Enterprise Suite — single merged page, has both sections
□ Case study: Mailtarget App — has "The Problem" section + "Outcome" section
□ Contact section — LinkedIn is primary (filled), WhatsApp is secondary (outlined)
□ All text — no visible placeholder or broken image nodes
```

---

## Figma Make Publishing Notes

After all edits are complete in the Figma design file:

1. Open the Figma Make editor (`figma.com/make/...`)
2. Click **Preview** to verify all changes render correctly in the live site view
3. Check the **Mobile** breakpoint — confirm reordered work list and new copy display correctly at 375px
4. Click **Publish** → keep the existing domain `dijon-quill-78567576.figma.site`
5. After publish, open the live URL in an incognito window and verify the homepage, at least one case study, and the contact section

---

## Agent Execution Order Summary

```
Phase 1  →  Fix typos and factual errors           (CRITICAL — do first)
Phase 2  →  Reorder work list + merge CMIS         (HIGH)
Phase 3  →  Homepage CTA, location, badge           (HIGH)
Phase 4  →  Add Problem + Outcome to case studies  (HIGH)
Phase 5  →  Loading + hover interactions           (MEDIUM)
Phase 6  →  Final copy polish pass                  (LOW)
Phase 7  →  Screenshot validation checklist        (REQUIRED before publish)
```

**Never skip Phase 7. Always validate visually before publishing.**
