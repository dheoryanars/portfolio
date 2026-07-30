import React, { useState, useEffect, useRef } from "react";
import { useHeroParallax, useAboutParallax, useContactParallax, useProcessParallax, useCaseStudyParallax } from "./components/parallax";
import VirtualPet from "./components/VirtualPet";
import HeroSystemField from "./components/HeroSystemField";
import HyperspaceField from "./components/HyperspaceField";
import {
  motion,
  useInView,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import {
  ArrowUpRight,
  Instagram,
  Layers,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";
import svgPaths from "@/imports/PortfolioDheoryan-1/svg-t4dtk4ouv6";
import CaseStudySonar from "@/imports/CaseStudySonar-1/index";
import CaseStudyDesignSystem from "@/imports/CaseStudyDesignSystem-1/index";
import CaseStudyMailtargetWeb from "@/imports/CaseStudyMailtargetWeb-1/index";
import CaseStudyReadsee from "@/imports/CaseStudyReadsee-1/index";
import CaseStudyReadseeDashboard from "@/imports/CaseStudyReadseeDashboard-1/index";
import CaseStudyCmisSuiteImport from "@/imports/CaseStudyCmisSuite/index";
import CaseStudyMailtargetApp from "@/imports/CaseStudyMailtargetApp-1/index";
import CaseStudyKitalabel from "@/imports/CaseStudyKitalabel-1/index";
import CaseStudyKitalabelBos from "@/imports/CaseStudyKitalabelBos-1/index";
import KitalabelBosStory from "./components/KitalabelBosStory";

// ── Data ──────────────────────────────────────────────────────────────────────

type WorkItem = {
  num: string;
  title: string;
  category: string;
  year: string;
  slug: string | null;
  thumb: string;
};

const WORKS: WorkItem[] = [
  { num: "01", title: "KitaLabel Business OS",      category: "B2B Admin Panel · AI-Assisted Development",           year: "2026",      slug: "kitalabel-bos",    thumb: "/thumbnails/kitalabel-bos.png" },
  { num: "02", title: "KitaLabel Price Calculator", category: "Web Plugin · AI-Assisted Development",                year: "2025",      slug: "kitalabel",        thumb: "/thumbnails/kitalabel.png" },
  { num: "03", title: "Read/See",                   category: "SaaS · CDP Product Design",                          year: "2022–2023", slug: "readsee-dashboard", thumb: "/thumbnails/readsee-dashboard.png" },
  { num: "04", title: "CMIS — Workflow Improvements", category: "Enterprise · DMS Phase 2, PR Revamp & Invoice Delivery", year: "2024–2025", slug: "cmis-suite", thumb: "/thumbnails/cmis-suite.png" },
  { num: "05", title: "Universal Design System",    category: "Design System · Component Library",                   year: "2023–2024", slug: "design-system",    thumb: "/thumbnails/design-system.png" },
  { num: "06", title: "Mailtarget App",             category: "SaaS · Email API",                                    year: "2023–2024", slug: "mailtarget-app",   thumb: "/thumbnails/mailtarget-app.png" },
  { num: "07", title: "SONAR",                      category: "Chrome Extension · Deliberately Small Product",       year: "2024",      slug: "sonar",            thumb: "/thumbnails/sonar.png" },
];

// Marketing-site cases merged into their product siblings (2026-07 restructure):
// readsee-website → readsee-dashboard, mailtarget-web → mailtarget-app.
// Their imported desktop visuals render below the sibling case via MERGED_PUBLIC_STORY.

const CASE_STUDIES: Record<string, React.ComponentType> = {
  "kitalabel-bos":     CaseStudyKitalabelBos,
  "design-system":     CaseStudyDesignSystem,
  "readsee-dashboard": CaseStudyReadseeDashboard,
  "cmis-suite":        CaseStudyCmisSuiteImport,
  "mailtarget-app":    CaseStudyMailtargetApp,
  kitalabel:           CaseStudyKitalabel,
  sonar:               CaseStudySonar,
};

// Desktop visuals of the merged marketing-site cases, appended to the
// bottom of their product sibling's case page as "The public story".
const MERGED_PUBLIC_STORY: Record<
  string,
  { component: React.ComponentType; kicker: string; title: string; blurb: string; proofs?: string[] }
> = {
  "readsee-dashboard": {
    component: CaseStudyReadsee,
    kicker: "Part two — The public story",
    title: "The same product, told to buyers",
    blurb:
      "The dashboard needed a public face. I designed Read/See's marketing site around the Connect → Collect → Activate model — custom illustrations, full responsive states, the product story translated for enterprise buyers.",
  },
  "mailtarget-app": {
    component: CaseStudyMailtargetWeb,
    kicker: "Part two — The public story",
    title: "The product, explained before sign-up.",
    blurb:
      "The redesigned platform needed marketing that matched. I designed Mailtarget's public site around the jobs buyers need to understand first, while giving developers and business teams distinct reasons to continue.",
    proofs: [
      "Deliver email reliably",
      "Create relevant messages",
      "Optimize sending",
    ],
  },
};

// Problem + Outcome copy for each case study
const CASE_META: Record<string, { problem: string; outcome: string }> = {
  "kitalabel-bos": {
    problem: "KitaLabel's internal operations ran across disconnected tools — no unified view of orders, pricing, customers, or production status. Staff context-switched between spreadsheets, WhatsApp, and ad-hoc dashboards to do basic work.",
    outcome: "Unified operations into a single B2B OS — replacing 4 disconnected tools. Delivered as an AI-assisted development project in 2026; 6+ staff across sales, finance, production, and admin now run their day in it.",
  },
  "design-system": {
    problem: "The product team was designing the same components repeatedly across products — buttons, inputs, modals — each slightly different, none documented. Every new screen re-answered questions the team had already answered.",
    outcome: "Component decisions now happen once, in the system — not per screen. Built as a team effort where I owned the design side, the foundation carried real products: Read/See's 700+ screen CDP and Mailtarget App's core flows both run on it.",
  },
  "readsee-dashboard": {
    problem: "Read/See needed a full CDP product from zero — no design system, no established patterns, and a scope running from authentication to campaign activation. Treating each of 700+ screens as a new design problem would have sunk the project.",
    outcome: "The product shipped across 4 phases because the patterns did the heavy lifting — core surfaces designed once, reused across every module. I owned the design side within the Read/See team; stakeholders reviewed clickable prototypes, not static mockups. I also designed the public marketing site that tells the same story to buyers.",
  },
  "cmis-suite": {
    problem: "Three live CMIS workflows still created operational friction: document control needed a stronger Phase 2 lifecycle, Purchase Request needed a clearer working surface, and invoice delivery needed traceable handover from finance to courier and customer.",
    outcome: "I improved those three existing workflows as part of the CMIS project team: DMS Improvement Phase 2, the Purchase Request revamp, and Invoice Delivery / TTI. The result made document validity, request status, and invoice handover easier to see and act on.",
  },
  "mailtarget-app": {
    problem: "Mailtarget's platform had grown feature by feature without a system — campaign builder, contacts, and automation each looked and behaved like different products, and users paid the relearning cost on every switch.",
    outcome: "One component language now runs all three core flows, shipped through 2023–2024. Learn the campaign builder and you already know contacts and automation. I owned the design within the Mailtarget team, and also designed the marketing site that positions the API publicly.",
  },
  kitalabel: {
    problem: "Sales collected each customer's label specifications, then handed the request to the Estimator PIC for pricing. Every quote entered that estimator's daily workload queue, so response time depended on how many estimates were already waiting.",
    outcome: "Live on kitalabel.com since 2025: standard label pricing is self-serve and available 24/7, without waiting for a sales-to-estimator handoff.",
  },
  sonar: {
    problem: "Solo outreach users had one question — did my email land? — but the only way to answer it was adopting a full ESP platform. The real design challenge wasn't adding capability; it was refusing it.",
    outcome: "Shipped in 2024 as a Chrome extension plus a one-scroll landing page. Every feature request had to defend itself against the product's one job: fast visibility into opened, forwarded, or ignored. Small stayed small on purpose.",
  },
};

type CaseHeroDetail = {
  eyebrow: string;
  headline: string;
  liveUrl?: string;
  summary: string;
  previewLabel: string;
  previewCaption: string;
  tags: string[];
  stats: { value: string; label: string }[];
};

const CASE_HERO_DETAILS: Record<string, CaseHeroDetail> = {
  "kitalabel-bos": {
    eyebrow: "KitaLabel Business OS",
    headline: "A single operating layer for custom label production.",
    summary:
      "A custom internal OS that brings orders, pricing, customers, and production visibility into one working surface.",
    previewLabel: "Operations overview",
    previewCaption: "Orders, pricing, customers, and production status in one admin surface",
    tags: ["Admin OS", "AI-assisted", "Operations"],
    stats: [
      { value: "4", label: "tools replaced" },
      { value: "2026", label: "delivery" },
      { value: "6+", label: "staff run their day in it" },
    ],
  },
  kitalabel: {
    eyebrow: "KitaLabel Price Calculator",
    liveUrl: "https://www.kitalabel.com/",
    headline: "A self-serve pricing flow for custom label orders.",
    summary:
      "A customer-facing plugin that turns the sales-to-estimator queue into guided configuration, immediate standard pricing, and checkout.",
    previewLabel: "Pricing flow",
    previewCaption: "From label specs to price visibility, upload, cart, and checkout",
    tags: ["Web plugin", "WooCommerce", "Pricing"],
    stats: [
      { value: "24/7", label: "pricing access" },
      { value: "5", label: "quote tiers" },
      { value: "0", label: "estimator handoff for standard jobs" },
    ],
  },
  "readsee-dashboard": {
    eyebrow: "Read/See",
    headline: "700 screens didn't need 700 designs.",
    summary:
      "A CDP built from zero across 4 phases — the pattern system carried the scale, from authentication to campaign activation. Product and public marketing site, one story.",
    previewLabel: "Product dashboard",
    previewCaption: "A modular CDP workspace for connecting, collecting, and activating data",
    tags: ["SaaS", "CDP", "0 → 1", "Product + marketing"],
    stats: [
      { value: "700+", label: "screens shipped" },
      { value: "4", label: "delivery phases" },
      { value: "1", label: "pattern system behind it all" },
    ],
  },
  "cmis-suite": {
    eyebrow: "CMIS Workflow Improvements",
    headline: "Improving the workflows people already relied on.",
    summary:
      "A focused improvement project across DMS Phase 2, the Purchase Request revamp, and Invoice Delivery tracking inside the existing CMIS platform.",
    previewLabel: "Improvement scope",
    previewCaption: "DMS Phase 2, Purchase Request, and Invoice Delivery within CMIS",
    tags: ["DMS Phase 2", "PR revamp", "Invoice delivery", "Enterprise"],
    stats: [
      { value: "3", label: "workflow improvements" },
      { value: "1", label: "existing platform" },
      { value: "4", label: "procurement tracks" },
    ],
  },
  sonar: {
    eyebrow: "SONAR",
    headline: "Deliberately small.",
    summary:
      "One question — did my email land? — answered by a Chrome extension instead of a platform. The discipline of this project was everything it refused to become.",
    previewLabel: "Extension story",
    previewCaption: "Tracking signals made small enough for everyday outreach",
    tags: ["Chrome extension", "Scoping", "Web"],
    stats: [
      { value: "1", label: "job: know if your email landed" },
      { value: "3", label: "pricing tiers" },
      { value: "2024", label: "shipped" },
    ],
  },
  "design-system": {
    eyebrow: "Universal Design System",
    headline: "Design it once, or redesign it forever.",
    summary:
      "The foundation under the other case studies on this site — tokens, components, patterns, and governance rules that carried Mailtarget, SONAR, and Read/See.",
    previewLabel: "System overview",
    previewCaption: "Single source of truth",
    tags: ["Foundations", "Components", "Patterns", "Tools"],
    stats: [
      { value: "8+", label: "color palettes" },
      { value: "20+", label: "type tokens" },
      { value: "3+", label: "products" },
    ],
  },
  "mailtarget-app": {
    eyebrow: "Mailtarget App",
    headline: "Three products' worth of UI, unified into one.",
    summary:
      "Campaign builder, contacts, and automation had drifted apart. I unified the application, then designed the public site that explains its value from first evaluation to daily operations.",
    previewLabel: "SaaS workspace",
    previewCaption: "Shared patterns for delivery, business controls, and daily account management",
    tags: ["Product redesign", "Email API", "Design system", "Public website"],
    stats: [
      { value: "3", label: "core flows unified" },
      { value: "2", label: "environments (sandbox → production)" },
      { value: "2023–24", label: "shipped through" },
    ],
  },
};

type CaseMobileDetail = {
  summary: string;
  focus: string[];
  sections: {
    kicker: string;
    title: string;
    body: string;
  }[];
  proof: string[];
};

const CASE_MOBILE_DETAILS: Record<string, CaseMobileDetail> = {
  "kitalabel-bos": {
    summary:
      "A custom internal operating system for orders, pricing, customers, and production visibility.",
    focus: [
      "Merged disconnected operational tools into one admin surface.",
      "Made order status, pricing, and production context easier to scan.",
      "Used AI-assisted development to move faster from product logic to shipped UI.",
    ],
    sections: [
      {
        kicker: "00 — The Problem",
        title: "Every answer lived somewhere else",
        body: "Orders sat in spreadsheets, pricing in another sheet, customers in chat history. Basic questions — what's in production, who hasn't reordered, what did we quote last time — meant reconstructing context by hand, every time.",
      },
      {
        kicker: "01 — Overview",
        title: "Six surfaces, one operating layer",
        body: "Dashboard, internal calculator, order detail, customer list, pricing settings, team members — each surface exists because the old tools made that specific job slow. Nothing made it in just because dashboards usually have it.",
      },
      {
        kicker: "02 — Before this OS",
        title: "The team was flying blind",
        body: "Four blind spots drove the design: buyers who quote but never convert, customers overdue to reorder, production workload invisible until it jammed, and customer knowledge trapped in individual chat histories.",
      },
      {
        kicker: "03 — Key Screens",
        title: "From dashboard to team roles",
        body: "Each screen backs a daily routine: sales starts in the calculator, finance lives in order detail, production reads its workload off the dashboard, and admin controls pricing rules and team roles. The screens follow the jobs, not the org chart.",
      },
      {
        kicker: "04 — Key Design Decisions",
        title: "Why it works the way it does",
        body: "Business pulse over raw data — the dashboard leads with what needs attention, not everything it knows. Sales insight lives inside the calculator, at the moment of quoting. And segmentation is the default customer view, because 'who should we call today?' is the real question.",
      },
      {
        kicker: "05 — Outcomes",
        title: "One source of truth",
        body: "Shipped with documentation pages, business rules, role structure, and an engineering-ready spec — and 6+ staff across sales, finance, production, and admin now run their day in it.",
      },
    ],
    proof: [
      "6+ staff run daily operations in it — sales, finance, production, admin.",
      "Replaced 4 disconnected tools with one working surface.",
    ],
  },
  kitalabel: {
    summary:
      "A customer-facing web plugin that turns custom label quoting into a clearer guided flow.",
    focus: [
      "Translated complex pricing rules into step-by-step configuration.",
      "Removed the Estimator PIC queue from standard label quotes.",
      "Designed the flow for WordPress and WooCommerce usage.",
    ],
    sections: [
      {
        kicker: "00 — The Problem",
        title: "Every variable changes the price",
        body: "Material, shape, size, finishing, quantity, and artwork all move the final number. Sales had to collect those specifications, hand them to the Estimator PIC, then wait behind that estimator's other requests. The buyer could not explore a price independently.",
      },
      {
        kicker: "01 — Context",
        title: "What is KitaLabel?",
        body: "A custom label printing business where no two orders are identical. Buyers wanted the price before the conversation; sales wanted fewer 'just checking the price' chats. Both sides needed the same thing: self-serve pricing.",
      },
      {
        kicker: "02 — The Challenge",
        title: "Standard labels should not need a sales conversation",
        body: "A normal order used to leave the website, move through WhatsApp, pass from sales to the Estimator PIC, wait in the day's estimate queue, then return to checkout. The plugin turns standard work into three self-service steps while special designs still receive expert review.",
      },
      {
        kicker: "03 — The Solution",
        title: "A guided flow, not a form dump",
        body: "The plugin walks the buyer through configuration step by step, repricing live at every change — and it runs inside WordPress and WooCommerce, where the store already lived, instead of demanding a new platform.",
      },
      {
        kicker: "04 — Beyond Design",
        title: "Designed it. Built it.",
        body: "I designed the flow, then built the frontend myself with AI-assisted development. One person owning both pixels and implementation kept every decision honest — nothing got designed that couldn't ship.",
      },
      {
        kicker: "05 — Key Design Decisions",
        title: "Why it works the way it does",
        body: "The price updates on every change instead of hiding behind a 'get quote' button — exploration is the point. Artwork upload, promo codes, and checkout each follow the same rule: keep the buyer moving, never make them ask permission.",
      },
      {
        kicker: "06 — The Complete Flow",
        title: "From configuration to checkout",
        body: "Configure the label and check the real price first. Values above IDR 5,000,000 route to RFQ at the calculator; eligible orders continue through design upload, cart, promo, and payment without a sales call.",
      },
      {
        kicker: "07 — Outcomes",
        title: "Self-serve quoting, live",
        body: "Live on kitalabel.com since 2025 — standard label pricing is available 24/7 without waiting for sales to request an estimate. Special designs can still be reviewed with a complete brief.",
      },
    ],
    proof: [
      "Live in production on kitalabel.com — standard pricing without the Estimator PIC queue.",
      "Designed and built by one person, AI-assisted, from flow to frontend.",
    ],
  },
  "readsee-dashboard": {
    summary:
      "A team-built CDP where I owned the design — the pattern system that kept 700+ screens consistent.",
    focus: [
      "My role: product designer on the Read/See team — patterns, screens, prototypes.",
      "Designed the patterns first, then let them generate the screens.",
      "Designed the public marketing site as part two of the same story.",
    ],
    sections: [
      {
        kicker: "00 — The Problem",
        title: "Scope that sinks designers",
        body: "Read/See had no design system, no patterns, no screen language — and needed a full CDP from authentication to campaign activation. Treating each screen as a new design problem was the fastest way to fail.",
      },
      {
        kicker: "01 — The Strategy",
        title: "Design the patterns, not the screens",
        body: "I didn't design 700 screens. I designed the core surfaces — tables, forms, detail views, empty states — once, then applied them module by module. The screens multiplied; the design decisions didn't.",
      },
      {
        kicker: "02 — Design Process",
        title: "Lo-fi sign-off before hi-fi pixels",
        body: "Every module ran the same route: low-fidelity structure first, stakeholder sign-off, then high-fidelity screens and a clickable prototype. Feedback landed while changes were still cheap.",
      },
      {
        kicker: "03 — Key Screens",
        title: "Learn one module, know them all",
        body: "Dashboards, customer profiles, segmentation, and activation each got a dedicated surface — but they share one layout grammar. A user who learns the first module has already learned the rest.",
      },
      {
        kicker: "04 — Onboarding Experience",
        title: "First value means connected data",
        body: "A CDP is empty until data flows in, so onboarding pushes hard toward the first source connection: profile completion, product tour, source and destination guidance, and a knowledge base for the gaps.",
      },
      {
        kicker: "05 — Full Scope",
        title: "Four phases, one system",
        body: "The four delivery phases took the product from sign-up to campaign activation — 700+ screens, every CDP module, held together by a single pattern system rather than 700 separate decisions.",
      },
      {
        kicker: "06 — The Public Story",
        title: "The same product, told to buyers",
        body: "The product needed a public face, so I designed the marketing site too — the Connect → Collect → Activate model explained with custom illustrations and full responsive states. One story, two audiences.",
      },
      {
        kicker: "07 — Outcomes",
        title: "Shipped, prototyped, reusable",
        body: "The product shipped hi-fi with a wireframe foundation and stakeholder-reviewed prototypes. The pattern thinking outlived the project — it fed the Universal Design System used across later products.",
      },
    ],
    proof: [
      "700+ screens shipped from one reusable pattern system.",
      "Stakeholders reviewed clickable prototypes, not static mockups.",
      "Product and marketing site designed as one continuous story.",
    ],
  },
  "cmis-suite": {
    summary:
      "Three targeted improvements inside CMIS: DMS Improvement Phase 2, a Purchase Request revamp, and traceable Invoice Delivery.",
    focus: [
      "My role: product designer on the CMIS project team.",
      "Improved the existing DMS lifecycle through its numbered Phase 2 scope.",
      "Revamped Purchase Request and designed the Invoice Delivery / TTI workflow.",
    ],
    sections: [
      {
        kicker: "00 — The Problem",
        title: "Existing workflows had visible gaps",
        body: "CMIS was already in use, but document lifecycle control, purchase requests, and invoice delivery still created ambiguity around status, ownership, and the next action. This was improvement work on a live platform, not a greenfield suite design.",
      },
      {
        kicker: "01 — The Scope",
        title: "Three improvement streams",
        body: "My project scope covered DMS Improvement Phase 2, the Purchase Request revamp, and Invoice Delivery / TTI. Each stream addressed a different operational gap within the existing CMIS platform.",
      },
      {
        kicker: "02 — Deep Dive · DMS",
        title: "A dedicated workflow for document forms",
        body: "DMS Improvement Phase 2 focused on Upload & Approval Form Dokumen. Staff can create a request by uploading a file or filling it manually, save and revise the draft, then submit it into a visible approval process.",
      },
      {
        kicker: "03 — Approver Configuration",
        title: "The route is configured before review begins",
        body: "QMS administrators can set, update, or remove approvers for each form. That turns an informal handoff into an explicit sequence and makes it clear who receives the request next.",
      },
      {
        kicker: "04 — Submission & Review",
        title: "Every decision leaves a visible state",
        body: "Requesters can see Draft, In Approval, Approved, or Rejected directly in the list. Reviewers inspect the document and prior decisions before approving or rejecting, while the expanded row shows where the request is waiting.",
      },
      {
        kicker: "05 — History, Recap & Migration",
        title: "The workflow stays useful after approval",
        body: "Document history preserves the decision trail, recap and export support operational reporting, and a dedicated migration flow brings existing effective documents into the same controlled library.",
      },
      {
        kicker: "06 — Purchase Request Revamp",
        title: "Redesigning a system already in use",
        body: "Procurement wasn't born digital — a Procurement Menu v1 was live and straining. One dense table carried every action, destructive red buttons stacked on every row, status hid in colored text, and seeing a request's detail meant leaving the list. Redesigning a system people already depend on is a different job from designing a new one.",
      },
      {
        kicker: "07 — The Redesign",
        title: "Four tracks, one calmer grammar",
        body: "I redesigned all four tracks — materials, tools, equipment, and non-tool — on one interaction model: tabbed views with search and filters, rows that expand to show a request's full detail in place, batch selection, and one primary action per screen. Status became visible chips instead of buried text.",
      },
      {
        kicker: "08 — The Iteration",
        title: "Versioned in the open",
        body: "Nothing shipped as one big reveal. Procurement went v1.1 then v1.1.2; DMS got a numbered Improvement Phase 2 plus a tooltip tour to onboard staff — and meeting notes live beside the flows in the design file. Every improvement traces back to a discussion the team actually had.",
      },
      {
        kicker: "09 — Invoice Delivery · TTI",
        title: "Map the handover before redesigning it",
        body: "The discovery flow followed an invoice from CERM search to a printed TTI, a courier Surat Jalan, customer handover, and the courier's return. It exposed three gaps: disconnected records, no shared delivery state, and no visible route for returned invoices.",
      },
      {
        kicker: "10 — The Delivery Model",
        title: "Proof of handover, not hope of handover",
        body: "Finance selects invoices, groups them into a customer TTI, assigns that TTI to a courier trip, then reconciles what was received or returned. The printed sheet supports the physical handoff while CMIS keeps ownership and status visible end to end.",
      },
      {
        kicker: "11 — Outcomes",
        title: "Clearer status across three workflows",
        body: "The improvements made document validity, purchase-request progress, and invoice handover easier to inspect without reconstructing the process from separate conversations or paper records.",
      },
    ],
    proof: [
      "DMS Improvement Phase 2 strengthened document lifecycle control.",
      "Purchase Request was revamped around an existing live workflow.",
      "Invoice Delivery / TTI made courier handover traceable.",
    ],
  },
  sonar: {
    summary:
      "A deliberately small product: one job, one extension, one scroll of marketing — and the discipline to keep it that way.",
    focus: [
      "Scoped the product to one job: know if your email landed.",
      "Chose an extension over a platform — and defended that choice.",
      "Designed the web story to be understood in a single scroll.",
    ],
    sections: [
      {
        kicker: "00 — The Problem",
        title: "One question, buried in platforms",
        body: "Solo outreach users wanted to know one thing — opened, forwarded, or ignored? The existing answers were full ESP platforms: heavy, expensive, and built for teams running campaigns, not a person sending emails.",
      },
      {
        kicker: "01 — The Scope Decision",
        title: "The feature list is the design",
        body: "The core decision wasn't what to build — it was what to refuse. No campaign builder, no contact database, no analytics suite. A Chrome extension that answers its one question fast beats a platform the solo user will never open.",
      },
      {
        kicker: "02 — The Extension",
        title: "Signals, not dashboards",
        body: "The extension UI centers on the three signals that matter — opened, forwarded, ignored — surfaced where the user already works instead of in a separate tool they'd have to remember to check.",
      },
      {
        kicker: "03 — The Web Story",
        title: "Understood in one scroll",
        body: "A product this small earns a marketing site this small: one responsive landing page where the hero places the extension inside a familiar inbox, so visitors get it before they finish scrolling.",
      },
      {
        kicker: "04 — Pricing Architecture",
        title: "Three tiers, one clear path",
        body: "Free, pro, and advanced — a trial-to-power path that monetizes without bloating the product. The pricing page sells the one job harder, not more jobs.",
      },
      {
        kicker: "05 — Outcomes",
        title: "Small stayed small",
        body: "Shipped in 2024: extension plus landing page. The result proves a scoping skill — knowing what a product is by being explicit about what it isn't.",
      },
    ],
    proof: [
      "One-job scope survived from concept to ship — no feature creep.",
      "Extension UI + one-scroll landing page shipped as a complete product story.",
    ],
  },
  "design-system": {
    summary:
      "The shared foundation under this site's product cases — built so component decisions happen once, not per screen.",
    focus: [
      "My role: product designer on the team that built the system.",
      "Turned repeated component decisions into documented tokens and patterns.",
      "One foundation now underpins Mailtarget, SONAR, and Read/See surfaces.",
    ],
    sections: [
      {
        kicker: "00 — The Problem",
        title: "Solved problems, re-solved daily",
        body: "Buttons, inputs, and modals existed in slightly different versions across products — none documented. Every new screen re-answered questions the team had already answered somewhere else.",
      },
      {
        kicker: "01 — The System",
        title: "One source of truth",
        body: "Tokens, components, patterns, and governance rules make reuse the default. The question on every new screen changed from 'how should this look?' to 'which pattern is this?'",
      },
      {
        kicker: "02 — Foundation",
        title: "The tokens underneath",
        body: "8+ color palettes and 20+ type tokens sit under everything, with spacing and radius to match. Color and type stopped being per-screen choices — components inherit consistency instead of imitating it.",
      },
      {
        kicker: "03 — Component Library",
        title: "Assembly, not invention",
        body: "Buttons, inputs, modals, and tables compose into full screen patterns. Designing a new screen became assembling known parts — the creative effort moved to the problems that actually needed it.",
      },
      {
        kicker: "04 — Methodology",
        title: "Built on atomic design",
        body: "Atoms build molecules, molecules build organisms, organisms build templates. The payoff is maintenance: fix an atom once and every screen that uses it inherits the fix.",
      },
      {
        kicker: "05 — Where It Paid Off",
        title: "Measured in products, not components",
        body: "This foundation carried real products: Read/See's 700+ screen CDP stayed consistent through it, Mailtarget App's three core flows share its components, and SONAR reused its language. A system is proven by the products it survives.",
      },
    ],
    proof: [
      "Read/See's 700+ screens and Mailtarget's core flows run on this foundation.",
      "New screens assemble from patterns instead of re-inventing components.",
    ],
  },
  "mailtarget-app": {
    summary:
      "An email platform that had drifted into three different products — I led the redesign's design side within the Mailtarget team.",
    focus: [
      "My role: product designer on the Mailtarget team.",
      "Unified campaign builder, contacts, and automation under one component language.",
      "Designed the public site as the next chapter: a clear product story for evaluation and purchase.",
    ],
    sections: [
      {
        kicker: "00 — The Problem",
        title: "Three products wearing one logo",
        body: "The app grew feature by feature without a system. Campaign builder, contacts, and automation each looked and behaved differently — users paid a relearning cost every time they switched.",
      },
      {
        kicker: "01 — Context",
        title: "The people behind the same account",
        body: "Mailtarget lets Indonesian businesses send password resets, order confirmations, and account notifications through API, SDK, or SMTP. Developers need integration and delivery evidence; operations teams need usage, billing, and team control.",
      },
      {
        kicker: "02 — UX Model",
        title: "How does a test email become safe to send?",
        body: "Start by sending only to your own team. Prove who owns the sending address, then unlock real customer delivery. The riskiest action becomes a clear, controlled graduation.",
      },
      {
        kicker: "03 — Research",
        title: "What competitors got right and wrong",
        body: "Before redesigning, I audited the common email-product patterns — the team kept what users already understood from competitors, and fixed the patterns competitors consistently got wrong.",
      },
      {
        kicker: "04 — Decisions",
        title: "Three moments the product had to get right",
        body: "Sandbox makes a first integration safe, activity records make a delivery issue traceable, and account controls let operations teams manage access and usage. Different jobs, one shared product language.",
      },
      {
        kicker: "05 — The Public Story",
        title: "Positioning the product in public",
        body: "The redesigned platform needed marketing that matched. I translated the product into three clear jobs — deliver email, create messages, and optimize sending — with an obvious next step for self-serve Sandbox users and sales-led teams.",
      },
      {
        kicker: "06 — Outcomes",
        title: "One product story, end to end",
        body: "One component language now runs all three core flows, shipped through 2023–2024. The public site carries the same clarity into evaluation, so the product feels consistent before and after sign-up.",
      },
    ],
    proof: [
      "Three fragmented core flows unified under one component language.",
      "Product redesign and public marketing site shipped as one story.",
    ],
  },
};

type MobileCaseArtifact = {
  src: string;
  title: string;
  detail: string;
};

const CASE_MOBILE_ARTIFACTS: Record<string, MobileCaseArtifact[]> = {
  "kitalabel-bos": [
    { src: "/case-studies/kitalabel-bos/main-dashboard.png", title: "Business dashboard", detail: "Revenue, customer health, and operational alerts in one view." },
    { src: "/case-studies/kitalabel-bos/crm-orders.png", title: "Order queue", detail: "Orders, payment, and production status stay connected." },
    { src: "/case-studies/kitalabel-bos/internal-calculator.png", title: "Internal calculator", detail: "Pricing work stays inside the operating workflow." },
  ],
  kitalabel: [
    { src: "/case-studies/kitalabel/image-01.png", title: "Configure specs", detail: "Customers build a label specification before pricing." },
    { src: "/case-studies/kitalabel/image-02.png", title: "Check price", detail: "A deliberate action returns a production-aware price." },
    { src: "/case-studies/kitalabel/image-03.png", title: "Upload files", detail: "Design requirements stay next to the order action." },
  ],
  "readsee-dashboard": [
    { src: "/case-studies/readsee-dashboard/image-01.png", title: "Customer dashboard", detail: "The product starts with a readable customer-data overview." },
    { src: "/case-studies/readsee-dashboard/image-02.png", title: "Audience workspace", detail: "Customer groups and their signals can be inspected in context." },
    { src: "/case-studies/readsee-dashboard/image-03.png", title: "Activation flow", detail: "Data moves from insight into an actionable customer workflow." },
  ],
  "cmis-suite": [
    { src: "/case-studies/cmis-suite/image-01.png", title: "Document-form workspace", detail: "Upload, approval, and recap views keep each request and its current state easy to find." },
    { src: "/case-studies/cmis-suite/image-03.png", title: "Approval progress", detail: "The expanded row shows completed decisions and the remaining reviewer in context." },
    { src: "/case-studies/cmis-suite/image-02.png", title: "Effective-document library", detail: "Approved and migrated records resolve into the controlled DMS library." },
    { src: "/case-studies/cmis-suite/image-26.png", title: "Invoice handover workspace", detail: "TTI links selected invoices, courier departure, customer receipt, and returned documents in one visible flow." },
  ],
  "design-system": [
    { src: "/case-studies/design-system/image-01.png", title: "System overview", detail: "A shared foundation turns one-off interface decisions into reusable rules." },
    { src: "/case-studies/design-system/image-02.png", title: "Foundations", detail: "Tokens and visual primitives create a stable starting point." },
    { src: "/case-studies/design-system/image-03.png", title: "Components", detail: "Reusable patterns make product work faster and more consistent." },
  ],
  "mailtarget-app": [
    { src: "/case-studies/mailtarget-app/image-01.png", title: "Delivery analytics", detail: "Email activity is made visible before a team has to debug blind." },
    { src: "/case-studies/mailtarget-app/image-03.png", title: "Activity log", detail: "A specific message can be traced from the event record." },
    { src: "/case-studies/mailtarget-app/image-04.png", title: "Sandbox configuration", detail: "Developers can test an integration safely before Production." },
  ],
  sonar: [
    { src: "/case-studies/sonar/image-02.png", title: "SONAR landing page", detail: "The product value is explained in one clear entry point." },
    { src: "/case-studies/sonar/image-03.png", title: "Pricing architecture", detail: "Plan choice is communicated as a compact decision model." },
    { src: "/case-studies/sonar/image-04.png", title: "FAQ section", detail: "Questions are handled where a visitor needs reassurance." },
  ],
};

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discover",
    body: "Interviews, audits and data digging until the real problem surfaces — not the one in the brief.",
  },
  {
    num: "02",
    title: "Define",
    body: "Sharp problem statements, flows and success metrics. Align everyone before a pixel moves.",
  },
  {
    num: "03",
    title: "Design",
    body: "Systems first. Wireframes to polished UI, prototyped and refined through versioned review cycles.",
  },
  {
    num: "04",
    title: "Deliver",
    body: "Tight handoff, documented components, and partnership with engineering through ship.",
  },
];

const EXPERIENCE = [
  {
    period: "2024 — Now",
    role: "Product Designer (UI/UX) · AI-Assisted Development",
    company: "Cahaya Jakarta Group",
  },
  {
    period: "2022 — 2024",
    role: "Product Designer (UI/UX)",
    company: "mailtarget.co",
  },
  {
    period: "2022 (9 Month)",
    role: "Graphic Designer",
    company: "MTARGET.CO",
  },
  {
    period: "2021 — 2022",
    role: "Customer Experience",
    company: "MTARGET.CO",
  },
];

const MARQUEE_ITEMS = [
  "Product Design",
  "✳",
  "AI-Assisted Development",
  "✳",
  "Design Systems",
  "✳",
  "SaaS Platforms",
  "✳",
  "Internal Tools",
  "✳",
  "AI Workflows",
  "✳",
  "B2B Systems",
  "✳",
  "Prototyping",
  "✳",
];

// ── Hooks ─────────────────────────────────────────────────────────────────────

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const h = () => setY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  return y;
}

function useCountUp(
  target: number,
  active: boolean,
  duration = 1400,
) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setV(Math.round(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [active, target, duration]);
  return v;
}

// ── Motion presets ────────────────────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function scrollTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth" });
}

const PURPLE = "#cc6ef8";
const FG = "#f2f1ec";
const MUTED = "#9a9a93";
const DIM = "#8a8a83";
const BG = "#0a0a0a";
const BG2 = "#0c0c0b";

// ── Navbar ────────────────────────────────────────────────────────────────────

function Navbar({ onHome }: { onHome: () => void }) {
  const sy = useScrollY();
  const scrolled = sy > 50;
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-50"
      style={{
        background: scrolled
          ? "rgba(10,10,10,0.94)"
          : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        transition:
          "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
      }}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease }}
    >
      <div className="flex items-center justify-between px-6 md:px-10 lg:px-16 py-6">
        <button
          onClick={onHome}
          className="flex items-center gap-2.5"
        >
          <motion.span
            className="inline-block size-[10px] rounded-full"
            style={{ background: PURPLE }}
            animate={{
              boxShadow: [
                `0 0 0 0 ${PURPLE}99`,
                `0 0 0 9px ${PURPLE}00`,
                `0 0 0 0 ${PURPLE}00`,
              ],
            }}
            transition={{ duration: 2.4, repeat: Infinity }}
          />
          <span className="flex flex-col items-start leading-none">
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "0.14em",
                color: FG,
              }}
            >
              DHEORY
            </span>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 400,
                fontSize: 12,
                color: MUTED,
                marginTop: 3,
              }}
            >
              Dheoryan Putra Arsi
            </span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-12">
          {["Work", "Process", "About"].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s.toLowerCase())}
              className="transition-colors duration-200"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                textTransform: "uppercase",
                color: MUTED,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = FG)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = MUTED)
              }
            >
              {s}
            </button>
          ))}
          <motion.button
            onClick={() => scrollTo("contact")}
            whileHover={{ backgroundColor: PURPLE, color: BG }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.18 }}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              color: PURPLE,
              border: `1px solid ${PURPLE}`,
              borderRadius: 20,
              padding: "8px 20px",
              backgroundColor: "rgba(0,0,0,0)",
            }}
          >
            {"Let's talk"}
          </motion.button>
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] w-6 p-1 -mr-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block h-px origin-center"
              style={{ background: FG }}
              animate={
                open
                  ? i === 0
                    ? { rotate: 45, y: 6 }
                    : i === 1
                      ? { opacity: 0 }
                      : { rotate: -45, y: -6 }
                  : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.22 }}
            />
          ))}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26 }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(10,10,10,0.98)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              {["Work", "Process", "About", "Contact"].map(
                (s) => (
                  <button
                    key={s}
                    onClick={() => {
                      scrollTo(s.toLowerCase());
                      setOpen(false);
                    }}
                    className="text-left transition-colors duration-200"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 12,
                      textTransform: "uppercase",
                      color: MUTED,
                    }}
                  >
                    {s}
                  </button>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function HeroDigitalTexture() {
  return <HeroSystemField />;
}

function HeroSection() {
  const { headlineRef, metaRef, scrollRef } = useHeroParallax();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden px-6 md:px-10 lg:px-16 pt-32 pb-14 sm:pt-36 sm:pb-16"
      style={{ background: BG, isolation: "isolate" }}
    >
      <HeroDigitalTexture />

      <motion.div
        ref={metaRef}
        className="relative z-10 flex w-full items-center justify-center gap-4 sm:gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <span
          aria-hidden
          className="hidden h-px flex-1 sm:block"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(204,110,248,0.2))",
          }}
        />

        <div
          className="flex max-w-[920px] flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            color: "rgba(242,241,236,0.56)",
            lineHeight: 1.5,
          }}
        >
          <span className="flex basis-full items-center justify-center gap-2 sm:basis-auto">
            <motion.span
              className="inline-block size-2 rounded-full"
              style={{
                background: "#22C55E",
                boxShadow: "0 0 10px rgba(34,197,94,0.42)",
              }}
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            Available for work — 2026
          </span>

          <span
            aria-hidden
            className="hidden h-3 w-px sm:block"
            style={{
              background: "rgba(204,110,248,0.42)",
            }}
          />

          <span style={{ color: "rgba(242,241,236,0.78)" }}>
            Product Designer
          </span>

          <span
            aria-hidden
            className="hidden h-3 w-px sm:block"
            style={{ background: "rgba(204,110,248,0.42)" }}
          />

          <span>Web Apps &amp; Design Systems</span>

          <span
            aria-hidden
            className="hidden h-3 w-px sm:block"
            style={{ background: "rgba(204,110,248,0.42)" }}
          />

          <span>Bekasi, Indonesia</span>
        </div>

        <span
          aria-hidden
          className="hidden h-px flex-1 sm:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(204,110,248,0.2), transparent)",
          }}
        />
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-[1420px] flex-col items-center gap-8 text-center sm:gap-10"
      >
        <motion.h1
          ref={headlineRef}
          variants={fadeUp}
          className="max-w-[1380px] text-center"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(48px, 7.4vw, 112px)",
            lineHeight: 0.95,
            color: FG,
            letterSpacing: 0,
          }}
        >
          {"Crafting "}
          <em
            className="hero-glitch-word"
            data-text="clarity"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: PURPLE,
            }}
          >
            clarity
          </em>
          {" for"}
          <br className="hidden md:block" />
          {" complex software."}
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="flex max-w-[640px] flex-col items-center gap-6 text-center"
        >
          <p
            className="max-w-[640px] text-center"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(16px,1.35vw,20px)",
              lineHeight: 1.5,
              color: MUTED,
            }}
          >
            {
              "I'm Dheoryan — a product designer specializing in "
            }
            <strong style={{ fontWeight: 500, color: FG }}>
              SaaS platforms
            </strong>
            {" and "}
            <strong style={{ fontWeight: 500, color: FG }}>
              scalable design systems
            </strong>
            {
              ". I turn dense, ambiguous problems into interfaces that feel obvious."
            }
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <motion.button
              onClick={() => scrollTo("work")}
              whileHover={{
                scale: 1.04,
                backgroundColor: "#d88fff",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.18 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                background: PURPLE,
                color: BG,
                borderRadius: 32,
                padding: "12px 24px",
                border: "none",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              View selected work →
            </motion.button>
            <motion.button
              onClick={() => scrollTo("contact")}
              whileHover={{
                scale: 1.04,
                backgroundColor: "rgba(204,110,248,0.08)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.18 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                background: "transparent",
                color: PURPLE,
                borderRadius: 32,
                padding: "12px 24px",
                border: `1px solid ${PURPLE}`,
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
            >
              Get in touch
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        ref={scrollRef}
        className="relative z-10 flex items-center justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
      >
        <div
          className="w-px h-10"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />
        <motion.span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: DIM,
          }}
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Scroll to explore
        </motion.span>
      </motion.div>
    </section>
  );
}

// ── Marquee ───────────────────────────────────────────────────────────────────

function MarqueeSection() {
  return (
    <div
      className="relative overflow-hidden flex items-center"
      style={{
        height: 100,
        background: BG2,
        boxShadow:
          "0 -1px 0 rgba(255,255,255,0.08), 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      <style>{`
        @keyframes dpa-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .dpa-track { animation: dpa-marquee 44s linear infinite; }
        .dpa-track:hover { animation-play-state: paused; }
      `}</style>
      <div
        className="dpa-track flex items-center gap-12 whitespace-nowrap w-max select-none"
        style={{ paddingRight: 48 }}
      >
        {[
          ...MARQUEE_ITEMS,
          ...MARQUEE_ITEMS,
          ...MARQUEE_ITEMS,
          ...MARQUEE_ITEMS,
        ].map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 60,
              lineHeight: 1,
              color:
                item === "✳"
                  ? PURPLE
                  : "rgba(255,255,255,0.18)",
              WebkitTextStroke: item === "✳" ? "0px" : "0px",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Work Row ──────────────────────────────────────────────────────────────────

function WorkCard({ item, index, onNavigate }: { item: WorkItem; index: number; onNavigate: (slug: string) => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => item.slug && onNavigate(item.slug)}
      style={{
        background: hovered ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.04)",
        borderRadius: 16,
        border: "1px solid rgba(255,255,255,0.08)",
        cursor: item.slug ? "pointer" : "default",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: 20,
        transition: "background 0.25s, border-color 0.25s",
        borderColor: hovered ? "rgba(204,110,248,0.2)" : "rgba(255,255,255,0.08)",
      }}
    >
      {/* Thumbnail */}
      <div style={{ height: 200, borderRadius: 12, overflow: "hidden", position: "relative", flexShrink: 0 }}>
        <img src={item.thumb} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: hovered ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.25)", transition: "background 0.25s" }} />
      </div>

      {/* Number */}
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 14, color: DIM }}>{item.num}</span>

      {/* Title */}
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: 28, lineHeight: 1.2, color: FG, flex: 1 }}>
        {item.title}
      </span>

      {/* Category */}
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, lineHeight: 1.5, color: DIM }}>
        {item.category}
      </span>

      {/* Footer: year + arrow */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 14, color: FG }}>{item.year}</span>
        {item.slug && (
          <motion.div
            animate={{
              borderColor: hovered ? PURPLE : "rgba(255,255,255,0.08)",
              backgroundColor: hovered ? "rgba(204,110,248,0.12)" : "rgba(0,0,0,0)",
            }}
            transition={{ duration: 0.22 }}
            style={{ width: 32, height: 32, borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <motion.svg width="14" height="14" viewBox="0 0 14 14" fill="none"
              animate={{ x: hovered ? 2 : 0, y: hovered ? -2 : 0 }}
              transition={{ duration: 0.22 }}
            >
              <path d={svgPaths.p1908cf00} stroke={hovered ? PURPLE : FG} strokeLinecap="round" strokeWidth="2" style={{ transition: "stroke 0.22s" }} />
            </motion.svg>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// ── Work Section ──────────────────────────────────────────────────────────────

function WorkSection({ onNavigate }: { onNavigate: (slug: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="work" className="px-6 md:px-10 lg:px-16 py-24 lg:py-32" style={{ background: BG }}>
      <div className="mx-auto max-w-[1280px]">
        <motion.div ref={ref} variants={stagger} initial="hidden" animate={inView ? "show" : "hidden"} className="mb-12">
          <motion.div variants={fadeUp} className="flex gap-3 items-start mb-10">
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: PURPLE }}>01</span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: MUTED, textTransform: "uppercase" }}>Selected Work</span>
          </motion.div>
          <motion.div variants={fadeUp} className="flex flex-wrap items-end justify-between gap-4">
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500, fontSize: "clamp(32px,4.5vw,60px)", lineHeight: 1.1, color: FG }}>
              {"Things I've "}
              <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: PURPLE }}>shipped</em>
            </h2>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: DIM }}>
              4 years of products — 2022 to 2026. Click to view.
            </span>
          </motion.div>
        </motion.div>

        {/* Featured: the four strongest cases, 2x2 so each gets weight */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {WORKS.slice(0, 4).map((item, i) => (
            <WorkCard key={item.num} item={item} index={i} onNavigate={onNavigate} />
          ))}
        </div>

        {/* Keep all project thumbnails visible on mobile and tablet. */}
        {WORKS.length > 4 && (
          <div className="mt-12 lg:hidden">
            <div className="flex gap-3 items-start mb-6">
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: PURPLE }}>+</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: MUTED, textTransform: "uppercase" }}>More work</span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {WORKS.slice(4).map((item, i) => (
                <WorkCard key={item.num} item={item} index={i + 4} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        )}

        {/* Archive: supporting work stays compact on wide desktop layouts. */}
        {WORKS.length > 4 && (
          <div className="mt-16 hidden lg:block">
            <div className="flex gap-3 items-start mb-6">
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: PURPLE }}>+</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: MUTED, textTransform: "uppercase" }}>More work</span>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              {WORKS.slice(4).map((item, i) => (
                <ArchiveRow key={item.num} item={item} index={i} onNavigate={onNavigate} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ArchiveRow({ item, index, onNavigate }: { item: WorkItem; index: number; onNavigate: (slug: string) => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => item.slug && onNavigate(item.slug)}
      className="flex flex-wrap items-baseline gap-x-6 gap-y-1 py-5"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        cursor: item.slug ? "pointer" : "default",
        background: hovered ? "rgba(255,255,255,0.03)" : "transparent",
        transition: "background 0.25s",
        paddingLeft: hovered ? 12 : 0,
        paddingRight: 12,
      }}
    >
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: DIM, width: 28 }}>{item.num}</span>
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 500,
          fontSize: "clamp(18px, 2.2vw, 24px)",
          color: hovered ? PURPLE : FG,
          transition: "color 0.25s",
        }}
      >
        {item.title}
      </span>
      <span className="hidden md:inline" style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: DIM, flex: 1 }}>
        {item.category}
      </span>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, color: MUTED, marginLeft: "auto" }}>
        {item.year} {item.slug ? "→" : ""}
      </span>
    </motion.div>
  );
}

// ── Process Section ───────────────────────────────────────────────────────────

function ProcessStepCard({
  step,
  active,
  done,
  onClick,
}: {
  step: (typeof PROCESS_STEPS)[0];
  active: boolean;
  done: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="flex flex-1 cursor-pointer flex-col gap-6 p-7 lg:p-8"
      style={{
        background: active ? "rgba(19,19,21,0.97)" : "transparent",
        boxShadow: active
          ? "inset 0 0 0 1px rgba(204,110,248,0.35)"
          : "inset 0 0 0 1px rgba(255,255,255,0.08)",
        opacity: active ? 1 : 0.72,
        transition: "opacity 0.35s, box-shadow 0.35s, background 0.35s",
      }}
    >
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 13,
          color: active || done ? PURPLE : DIM,
          transition: "color 0.35s",
        }}
      >
        {step.num}
      </span>
      <div className="flex flex-col gap-4">
        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 500,
            fontSize: "clamp(20px,2vw,26px)",
            color: FG,
          }}
        >
          {step.title}
        </h3>
        <p
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 15,
            lineHeight: 1.65,
            color: MUTED,
          }}
        >
          {step.body}
        </p>
      </div>
    </div>
  );
}

function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  // ── Directed pipeline ───────────────────────────────────────────────────────
  // A process needs sequence, direction, and overview: all four steps stay
  // visible, the track fills forward as the active step advances, and an
  // explicit return arc closes the loop (deliver feeds the next discover).
  const [active, setActive] = useState(0);
  const [userDrove, setUserDrove] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const trackInView = useInView(trackRef, { margin: "-15%" });

  useEffect(() => {
    if (!trackInView || userDrove) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % PROCESS_STEPS.length),
      3400,
    );
    return () => clearInterval(id);
  }, [trackInView, userDrove]);

  const pick = (i: number) => {
    setUserDrove(true);
    setActive(i);
  };
  const wrap = active === 0;

  return (
    <section
      id="process"
      className="px-6 md:px-10 lg:px-16 py-24 lg:py-32"
      style={{
        background: BG2,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div
            variants={fadeUp}
            className="flex gap-3 items-start mb-4"
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                color: PURPLE,
              }}
            >
              02
            </span>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                color: MUTED,
                textTransform: "uppercase",
              }}
            >
              How I work
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mb-16"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(32px,4.5vw,60px)",
              lineHeight: 1.1,
              color: FG,
            }}
          >
            {"A process built for "}
            <em
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                color: PURPLE,
              }}
            >
              ambiguity
            </em>
          </motion.h2>
        </motion.div>

        <div ref={trackRef}>
          {/* Return path: the explicit loop from Deliver back to Discover.
              Drawn as a CSS bracket anchored with the same calc() as the node
              centers, so it stays aligned at any width (stretched SVG didn't). */}
          <div className="relative hidden sm:block" style={{ height: 48 }}>
            <div
              className="absolute"
              style={{
                top: 14,
                bottom: -6,
                left: "calc(12.5% + 6px)",
                right: "calc(12.5% + 6px)",
                borderTop: `1px dashed ${wrap ? PURPLE : "rgba(255,255,255,0.18)"}`,
                borderLeft: `1px dashed ${wrap ? PURPLE : "rgba(255,255,255,0.18)"}`,
                borderRight: `1px dashed ${wrap ? PURPLE : "rgba(255,255,255,0.18)"}`,
                borderBottom: "none",
                borderRadius: "22px 22px 0 0",
                transition: "border-color 0.5s",
              }}
            />
            <span
              className="absolute"
              style={{
                left: "calc(12.5% + 6px)",
                bottom: -13,
                transform: "translateX(-50%)",
                fontSize: 9,
                lineHeight: 1,
                color: wrap ? PURPLE : "rgba(255,255,255,0.4)",
                transition: "color 0.5s",
              }}
            >
              ▼
            </span>
            <span
              className="absolute left-1/2 -translate-x-1/2"
              style={{
                top: 8,
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.12em",
                color: wrap ? PURPLE : DIM,
                background: BG2,
                padding: "0 12px",
                transition: "color 0.5s",
              }}
            >
              ↺ the loop — deliver feeds the next discover
            </span>
          </div>

          {/* Progress track: nodes + forward-filling segments */}
          <div className="mb-10 hidden items-center sm:flex" style={{ padding: "0 12.5%" }}>
            {PROCESS_STEPS.map((step, i) => (
              <React.Fragment key={step.num}>
                <button
                  aria-label={`Step ${step.num}: ${step.title}`}
                  onClick={() => pick(i)}
                  className="relative shrink-0"
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 999,
                    border: `1px solid ${i <= active ? PURPLE : "rgba(255,255,255,0.25)"}`,
                    background: i <= active ? PURPLE : "transparent",
                    cursor: "pointer",
                    transition: "background 0.35s, border-color 0.35s",
                  }}
                />
                {i < PROCESS_STEPS.length - 1 && (
                  <div
                    className="relative h-px flex-1"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                  >
                    <motion.div
                      className="absolute inset-y-0 left-0 w-full"
                      style={{ background: PURPLE, transformOrigin: "left" }}
                      animate={{ scaleX: i < active ? 1 : 0 }}
                      transition={{ duration: 0.5, ease }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* All four steps, always visible, in order */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
          {PROCESS_STEPS.map((step, i) => (
            <React.Fragment key={step.title}>
              <ProcessStepCard
                step={step}
                active={i === active}
                done={i < active}
                onClick={() => pick(i)}
              />
              {i < PROCESS_STEPS.length - 1 && (
                <div
                  className="flex items-center justify-center sm:hidden"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 14,
                    color: DIM,
                  }}
                >
                  ↓
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <p
          className="mt-6 text-center sm:hidden"
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            color: DIM,
            letterSpacing: "0.08em",
          }}
        >
          ↺ then back to discover
        </p>
      </div>
    </section>
  );
}

// ── About ─────────────────────────────────────────────────────────────────────

function StatItem({
  num,
  suffix,
  label,
  active,
}: {
  num: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const v = useCountUp(num, active);
  return (
    <div className="flex flex-col gap-2">
      <span
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 500,
          fontSize: "clamp(36px,3.5vw,48px)",
          lineHeight: 1,
          color: PURPLE,
        }}
      >
        {v}
        {suffix}
      </span>
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: 11,
          textTransform: "uppercase",
          color: DIM,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const statsInView = useInView(ref, { once: true });
  const { portraitRef, contentRef, statsRef } = useAboutParallax();
  const [portraitOk, setPortraitOk] = useState(true);

  return (
    <section
      id="about"
      className="px-6 md:px-10 lg:px-16 py-24 lg:py-32"
      style={{
        background: BG,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex gap-3 items-start mb-14"
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              color: PURPLE,
            }}
          >
            03
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              color: MUTED,
              textTransform: "uppercase",
            }}
          >
            About
          </span>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">
          <motion.div
            ref={portraitRef}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex-shrink-0 w-full max-w-[440px] mx-auto lg:mx-0 lg:w-[440px] lg:max-w-none rounded overflow-hidden"
            style={{
              // Match the portrait's native 4:5 shape so mobile doesn't crop
              // to a landscape strip; maxHeight keeps tablets/desktop in check
              // (440px lg width × 550px cap = the same 4:5).
              aspectRatio: "4 / 5",
              maxHeight: 550,
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {portraitOk ? (
              <img
                src="/portrait.jpg"
                alt="Portrait of Dheoryan Putra Arsi"
                onError={() => setPortraitOk(false)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  borderRadius: 8,
                  display: "block",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(135deg, #1a1a2e 0%, #2d1b69 50%, #0f0f1a 100%)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    color: "rgba(255,255,255,0.15)",
                    fontSize: 14,
                    fontFamily: "'Space Mono', monospace",
                    letterSpacing: "0.1em",
                  }}
                >
                  DHEORYAN
                </span>
              </div>
            )}
          </motion.div>

          <motion.div
            ref={contentRef}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-14 flex-1"
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(16px,2.2vw,28px)",
                lineHeight: 1.45,
                color: MUTED,
              }}
            >
              {"I've spent "}
              <em
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  color: PURPLE,
                }}
              >
                four years
              </em>
              {
                " designing the unglamorous, high-stakes parts of software — dashboards, data tables, settings, flows nobody notices until they break. I care about systems that "
              }
              <span style={{ color: FG }}>scale</span>
              {" and details that "}
              <span style={{ color: FG }}>earn trust</span>
              {"."}
            </p>

            <div
              ref={statsRef}
              className="flex flex-wrap items-start justify-between gap-8"
            >
              {[
                {
                  num: 4,
                  suffix: "+",
                  label: "Years designing",
                },
                {
                  num: 9,
                  suffix: "+",
                  label: "Projects shipped",
                },
                {
                  num: 2,
                  suffix: "",
                  label: "Design systems built",
                },
              ].map((s) => (
                <StatItem
                  key={s.label}
                  {...s}
                  active={statsInView}
                />
              ))}
            </div>

            <div className="flex flex-col">
              {EXPERIENCE.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -14 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.35 + i * 0.09,
                  }}
                  className="flex gap-6 lg:gap-10 py-6"
                  style={{
                    borderBottom:
                      "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 12,
                      color: DIM,
                      width: 110,
                      flexShrink: 0,
                      paddingTop: 2,
                    }}
                  >
                    {exp.period}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span
                      style={{
                        fontFamily:
                          "'Space Grotesk', sans-serif",
                        fontWeight: 500,
                        fontSize: 15,
                        color: FG,
                      }}
                    >
                      {exp.role}
                    </span>
                    <span
                      style={{
                        fontFamily:
                          "'Space Grotesk', sans-serif",
                        fontSize: 14,
                        color: MUTED,
                      }}
                    >
                      {exp.company}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Contact ───────────────────────────────────────────────────────────────────

function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const { headlineRef: contactHeadlineRef, buttonsRef } =
    useContactParallax();

  const channels = [
    {
      label: "LinkedIn",
      detail: "Experience and professional context",
      href: "https://www.linkedin.com/in/dheoryanars/",
      icon: Linkedin,
    },
    {
      label: "WhatsApp",
      detail: "A quick, direct conversation",
      href: "https://wa.me/6281234567890",
      icon: MessageCircle,
    },
    {
      label: "Instagram",
      detail: "Process, experiments, and work in progress",
      href: "https://www.instagram.com/dheeory/",
      icon: Instagram,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative isolate min-h-[900px] overflow-hidden px-4 py-20 md:px-8 md:py-24 lg:min-h-[980px] lg:px-12"
      style={{
        background: BG,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <HyperspaceField />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 44%, rgba(8,8,12,0.08) 0%, rgba(8,8,12,0.28) 42%, rgba(8,8,10,0.78) 83%, rgba(8,8,10,0.96) 100%), linear-gradient(180deg, rgba(8,8,10,0.66) 0%, transparent 24%, transparent 58%, rgba(8,8,10,0.84) 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-[43%] z-[2] h-px bg-white/[0.07]">
        <motion.div
          className="absolute -top-[3px] h-[7px] w-16"
          style={{
            left: "8%",
            background:
              "linear-gradient(90deg, transparent, rgba(204,110,248,0.9), transparent)",
            filter: "drop-shadow(0 0 10px rgba(204,110,248,0.65))",
          }}
          animate={
            reduceMotion
              ? undefined
              : { left: ["5%", "91%", "5%"], opacity: [0.25, 0.9, 0.25] }
          }
          transition={{
            duration: 8.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1480px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-16 left-0 hidden w-20 border-r border-white/[0.09] bg-black/20 lg:block"
          style={{
            clipPath: "polygon(0 0, 100% 8%, 100% 92%, 0 100%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-16 right-0 hidden w-20 border-l border-white/[0.09] bg-black/20 lg:block"
          style={{
            clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 92%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative flex flex-col gap-5 border-y border-white/[0.1] bg-black/20 px-5 py-4 backdrop-blur-[5px] md:grid md:grid-cols-3 md:items-center md:px-8"
        >
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: PURPLE,
            }}
          >
            {"04 / Communication deck"}
          </p>
          <span
            className="hidden text-center md:block"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              color: DIM,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Forward channel / Bekasi
          </span>
          <div
            className="flex items-center gap-3 md:justify-self-end"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: MUTED,
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "#2fbf71",
                boxShadow: "0 0 14px rgba(47,191,113,0.6)",
              }}
            />
            Available for selected 2026 projects
          </div>
        </motion.div>

        <div className="relative min-h-[500px] overflow-hidden border-x border-white/[0.08] md:min-h-[560px] lg:mx-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[46%] h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300/[0.12]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[46%] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300/[0.16]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[46%] h-px w-[min(840px,86%)] -translate-x-1/2 bg-purple-300/[0.14]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[46%] h-[min(440px,76%)] w-px -translate-x-1/2 -translate-y-1/2 bg-purple-300/[0.1]"
          />

          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="absolute left-6 top-12 hidden w-44 border-l border-purple-300/30 pl-4 lg:block"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              lineHeight: 1.8,
              color: DIM,
            }}
          >
            <span className="block text-purple-300">PROJECT MODE</span>
            <span className="mt-3 block text-white/75">PRODUCT DESIGN</span>
            <span className="block">DESIGN SYSTEMS</span>
            <span className="block">PROTOTYPING</span>
            <span className="mt-3 block text-purple-300/70">VECTOR 03 / 03</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="absolute right-6 top-12 hidden w-44 border-r border-purple-300/30 pr-4 text-right lg:block"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              lineHeight: 1.8,
              color: DIM,
            }}
          >
            <span className="block text-purple-300">SIGNAL STATUS</span>
            <span className="mt-3 block text-white/75">CHANNEL OPEN</span>
            <span className="block">LOCAL / GMT+7</span>
            <span className="block">RESPONSE READY</span>
            <span className="mt-3 block text-[#2fbf71]">LINK STABLE / 100%</span>
          </motion.div>

          <div className="relative flex min-h-[500px] flex-col items-center justify-center px-5 pb-20 pt-16 text-center md:min-h-[560px] md:px-16">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="mb-7"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: PURPLE,
              }}
            >
              Transmission ready
            </motion.span>

            <motion.h2
              ref={contactHeadlineRef}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <motion.a
                href="mailto:dheoryanputra@gmail.com"
                className="group inline-flex items-center justify-center gap-[0.13em]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(62px, 9vw, 142px)",
                  lineHeight: 0.9,
                  color: FG,
                  textDecoration: "none",
                  letterSpacing: 0,
                }}
                whileHover={reduceMotion ? undefined : "hover"}
              >
                <span>{"Let's "}</span>
                <em
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    color: PURPLE,
                  }}
                >
                  talk
                </em>
                <motion.span
                  className="flex h-[0.58em] w-[0.58em] shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/20 backdrop-blur-sm"
                  variants={{
                    hover: {
                      x: 10,
                      rotate: 45,
                      borderColor: "rgba(204,110,248,0.82)",
                      backgroundColor: "rgba(204,110,248,0.16)",
                    },
                  }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                >
                  <ArrowUpRight
                    aria-hidden="true"
                    size="0.34em"
                    strokeWidth={1.45}
                  />
                </motion.span>
              </motion.a>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.22 }}
              className="mt-9 max-w-[660px]"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(17px, 1.4vw, 22px)",
                lineHeight: 1.55,
                color: "#b3b3ad",
              }}
            >
              Bring the messy workflow, the growing design system, or the
              product idea that needs shape. I help turn complexity into
              something clear, usable, and ready to ship.
            </motion.p>
          </div>
        </div>

        <motion.div
          ref={buttonsRef}
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative border border-white/[0.12] bg-[rgba(7,7,10,0.78)] shadow-[0_-24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl lg:mx-20"
          style={{
            clipPath:
              "polygon(0 14px, 26px 14px, 38px 0, calc(100% - 38px) 0, calc(100% - 26px) 14px, 100% 14px, 100% 100%, 0 100%)",
          }}
        >
          <motion.a
            href="mailto:dheoryanputra@gmail.com"
            className="group flex min-w-0 items-center justify-between gap-3 border-b border-white/[0.1] px-5 py-6 md:gap-5 md:px-8"
            style={{ color: FG, textDecoration: "none" }}
            whileHover={
              reduceMotion
                ? undefined
                : { backgroundColor: "rgba(204,110,248,0.07)" }
            }
          >
            <span className="flex min-w-0 items-center gap-3 md:gap-4">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{
                  color: PURPLE,
                  background: "rgba(204,110,248,0.12)",
                  boxShadow: "0 0 24px rgba(204,110,248,0.12)",
                }}
              >
                <Mail aria-hidden="true" size={19} strokeWidth={1.7} />
              </span>
              <span className="min-w-0">
                <span
                  className="block"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 10,
                    color: PURPLE,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  Primary transmission
                </span>
                <span
                  className="mt-1 block whitespace-nowrap"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "clamp(13px, 3.7vw, 21px)",
                    fontWeight: 500,
                  }}
                >
                  dheoryanputra@gmail.com
                </span>
              </span>
            </span>
            <span className="flex shrink-0 items-center gap-3">
              <span
                className="hidden md:block"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 9,
                  color: "#2fbf71",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Channel ready
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
                size={21}
                strokeWidth={1.5}
              />
            </span>
          </motion.a>

          <div className="grid md:grid-cols-3">
            {channels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <motion.a
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between gap-5 border-b border-white/[0.08] px-5 py-5 md:border-b-0 md:px-7 ${
                    index < channels.length - 1 ? "md:border-r" : ""
                  }`}
                  style={{ color: FG, textDecoration: "none" }}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          backgroundColor: "rgba(204,110,248,0.055)",
                        }
                  }
                >
                  <span className="flex min-w-0 items-center gap-4">
                    <Icon
                      aria-hidden="true"
                      className="shrink-0"
                      size={18}
                      strokeWidth={1.6}
                      color={PURPLE}
                    />
                    <span className="min-w-0">
                      <span
                        className="block"
                        style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontWeight: 500,
                          fontSize: 16,
                        }}
                      >
                        {channel.label}
                      </span>
                      <span
                        className="mt-1 block"
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 9,
                          lineHeight: 1.5,
                          color: DIM,
                        }}
                      >
                        {channel.detail}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="shrink-0 opacity-45 transition-all duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                    size={18}
                    strokeWidth={1.5}
                  />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function DeprecatedFooterSection() {
  const slabRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 50, y: 50, tx: 0, ty: 0 });

  const commitPointer = () => {
    const slab = slabRef.current;
    if (!slab) return;
    slab.style.setProperty("--mx", `${pointerRef.current.x}%`);
    slab.style.setProperty("--my", `${pointerRef.current.y}%`);
    slab.style.setProperty("--tx", `${pointerRef.current.tx}px`);
    slab.style.setProperty("--ty", `${pointerRef.current.ty}px`);
    frameRef.current = null;
  };

  const schedulePointer = () => {
    if (frameRef.current !== null) return;
    frameRef.current = window.requestAnimationFrame(commitPointer);
  };

  const handleBrandPointerMove = (
    event: React.PointerEvent<HTMLElement>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    pointerRef.current = {
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
      tx: (x - 50) * 0.16,
      ty: (y - 50) * 0.11,
    };
    schedulePointer();
  };

  const handleBrandPointerLeave = () => {
    pointerRef.current = { x: 50, y: 50, tx: 0, ty: 0 };
    schedulePointer();
  };

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <footer
      className="overflow-hidden"
      style={{
        background: BG,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="px-6 md:px-10 lg:px-16 py-12">
        <div className="mx-auto max-w-[1280px] grid gap-10 md:grid-cols-[1fr_auto_auto] md:items-start md:justify-between">
          <div className="flex flex-col gap-4">
            <motion.div
              className="flex items-center justify-center"
              style={{
                width: 28,
                height: 20,
                border: `2px solid ${FG}`,
                color: FG,
              }}
              animate={{ opacity: [0.72, 1, 0.72] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 11,
                  lineHeight: 1,
                }}
              >
                ++
              </span>
            </motion.div>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: "#6f6f68",
              }}
            >
              © 2026 Dheoryan Putra Arsi
            </span>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            {[
              {
                title: "Work",
                links: ["Selected cases", "Process", "About"],
              },
              {
                title: "Connect",
                links: ["LinkedIn", "Email", "Instagram"],
              },
              {
                title: "Status",
                links: ["Bekasi", "Available", "Design systems"],
              },
            ].map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 11,
                    color: DIM,
                  }}
                >
                  {group.title}
                </span>
                {group.links.map((link) => (
                  <span
                    key={link}
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 500,
                      fontSize: 14,
                      color: FG,
                    }}
                  >
                    {link}
                  </span>
                ))}
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="flex items-center gap-2 justify-self-start md:justify-self-end"
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: "#9aa4bc",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = FG)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#9aa4bc")
              }
            >
              Back to top
            </span>
            <motion.svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d={svgPaths.pa06ac80}
                stroke="#9AA4BC"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </motion.svg>
          </button>
        </div>
      </div>

      <section
        ref={slabRef}
        onPointerMove={handleBrandPointerMove}
        onPointerLeave={handleBrandPointerLeave}
        className="relative isolate overflow-hidden select-none"
        style={
          {
            "--mx": "50%",
            "--my": "50%",
            "--tx": "0px",
            "--ty": "0px",
            minHeight: "clamp(220px, 30vw, 420px)",
            background: "#2ff08a",
            cursor: "crosshair",
          } as React.CSSProperties
        }
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.52) 0%, rgba(255,255,255,0.16) 13%, transparent 27%), linear-gradient(135deg, rgba(255,255,255,0.14), transparent 34%)",
            mixBlendMode: "soft-light",
            transition: "opacity 0.2s",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at var(--mx) var(--my), rgba(10,10,10,0.98) 0 56px, transparent 58px)",
            mixBlendMode: "normal",
            opacity: 0.9,
          }}
        />
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />
        <div
          className="absolute left-1/2 top-[clamp(24px,3vw,58px)] z-10 whitespace-nowrap"
          style={{
            transform:
              "translate(calc(-50% + var(--tx)), var(--ty))",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(112px, 20vw, 420px)",
            lineHeight: 0.72,
            color: BG,
            letterSpacing: 0,
            pointerEvents: "none",
            transition:
              "transform 0.16s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          DHEORY
        </div>
      </section>
    </footer>
  );
}

// ── Portfolio Page ────────────────────────────────────────────────────────────

function FooterSection() {
  const slabRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({
    x: 50,
    y: 50,
    tx: 0,
    ty: 0,
    rx: 0,
    ry: 0,
    depth: 0,
    active: 0,
  });

  const commitPointer = () => {
    const slab = slabRef.current;
    if (!slab) return;
    slab.style.setProperty("--mx", `${pointerRef.current.x}%`);
    slab.style.setProperty("--my", `${pointerRef.current.y}%`);
    slab.style.setProperty("--tx", `${pointerRef.current.tx}px`);
    slab.style.setProperty("--ty", `${pointerRef.current.ty}px`);
    slab.style.setProperty("--rx", `${pointerRef.current.rx}deg`);
    slab.style.setProperty("--ry", `${pointerRef.current.ry}deg`);
    slab.style.setProperty("--depth", `${pointerRef.current.depth}px`);
    slab.style.setProperty("--active", `${pointerRef.current.active}`);
    frameRef.current = null;
  };

  const schedulePointer = () => {
    if (frameRef.current !== null) return;
    frameRef.current = window.requestAnimationFrame(commitPointer);
  };

  const handleBrandPointerMove = (
    event: React.PointerEvent<HTMLElement>,
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    pointerRef.current = {
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
      tx: (x - 50) * 0.22,
      ty: (y - 50) * 0.14,
      rx: (50 - y) * 0.13,
      ry: (x - 50) * 0.11,
      depth: 36,
      active: 1,
    };
    schedulePointer();
  };

  const handleBrandPointerLeave = () => {
    pointerRef.current = {
      x: 50,
      y: 50,
      tx: 0,
      ty: 0,
      rx: 0,
      ry: 0,
      depth: 0,
      active: 0,
    };
    schedulePointer();
  };

  useEffect(() => {
    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <footer
      className="overflow-hidden"
      style={{
        background: BG,
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="px-6 md:px-10 lg:px-16 py-12">
        <div className="mx-auto max-w-[1280px] flex flex-wrap items-center justify-between gap-6">
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: "#6f6f68",
            }}
          >
            © 2026 Dheoryan Putra Arsi
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: "#6f6f68",
            }}
          >
            Designed &amp; built with intent
          </span>
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="flex items-center gap-2 group"
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: "#6f6f68",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = MUTED)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#6f6f68")
              }
            >
              Back to top
            </span>
            <motion.svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d={svgPaths.pa06ac80}
                stroke="#6F6F68"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </motion.svg>
          </button>
        </div>
      </div>

      <section
        ref={slabRef}
        onPointerMove={handleBrandPointerMove}
        onPointerLeave={handleBrandPointerLeave}
        className="relative isolate overflow-hidden select-none"
        style={
          {
            "--mx": "50%",
            "--my": "50%",
            "--tx": "0px",
            "--ty": "0px",
            "--rx": "0deg",
            "--ry": "0deg",
            "--depth": "0px",
            "--active": "0",
            minHeight: "clamp(220px, 30vw, 420px)",
            background: BG2,
            cursor: "none",
            perspective: "900px",
          } as React.CSSProperties
        }
      >
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: [
              "radial-gradient(circle 320px at var(--mx) var(--my), rgba(204,110,248,0.11) 0%, rgba(204,110,248,0.035) 38%, transparent 72%)",
              "linear-gradient(rgba(204,110,248,0.035) 1px, transparent 1px)",
              "linear-gradient(90deg, rgba(204,110,248,0.035) 1px, transparent 1px)",
            ].join(","),
            backgroundSize: "auto, 76px 76px, 76px 76px",
            transition: "opacity 0.2s",
          }}
        />
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              "radial-gradient(circle at var(--mx) var(--my), rgba(204,110,248,0.16) 0 52px, rgba(204,110,248,0.06) 54px, transparent 72px)",
            opacity: "calc(0.2 + (var(--active) * 0.72))",
            transition: "opacity 0.22s ease",
          }}
        />
        <div
          className="absolute z-20 rounded-full"
          style={{
            left: "var(--mx)",
            top: "var(--my)",
            width: "clamp(86px, 8vw, 128px)",
            height: "clamp(86px, 8vw, 128px)",
            border: "1px solid rgba(204,110,248,0.35)",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.06) inset, 0 18px 48px rgba(10,10,10,0.2)",
            transform:
              "translate(-50%, -50%) scale(calc(0.72 + (var(--active) * 0.28)))",
            opacity: "calc(var(--active) * 0.95)",
            pointerEvents: "none",
            transition:
              "opacity 0.22s ease, transform 0.16s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
        <div
          className="absolute inset-x-0 top-0 z-[3] h-px"
          style={{ background: "rgba(255,255,255,0.08)" }}
        />
        <div
          aria-label="DHEORY"
          className="absolute left-1/2 top-[clamp(24px,3vw,58px)] z-10 flex whitespace-nowrap"
          style={{
            transform:
              "translate3d(calc(-50% + var(--tx)), var(--ty), 0) rotateX(var(--rx)) rotateY(var(--ry))",
            transformStyle: "preserve-3d",
            transformOrigin: "50% 58%",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(112px, 20vw, 420px)",
            lineHeight: 0.72,
            color: "rgba(204,110,248,0.13)",
            letterSpacing: 0,
            pointerEvents: "none",
            transition:
              "transform 0.16s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {"DHEORY".split("").map((letter, index) => {
            const offset = index - 2.5;
            return (
              <span
                key={letter + index}
                aria-hidden="true"
                style={
                  {
                    display: "inline-block",
                    textShadow:
                      "calc(var(--tx) * -0.08) calc(var(--ty) * -0.08) 0 rgba(204,110,248,0.06)",
                    transform:
                      `translate3d(calc(var(--tx) * ${offset * 0.018}), calc(var(--ty) * ${Math.abs(offset) * 0.012}), calc(var(--depth) * ${1 - Math.abs(offset) * 0.09})) rotateZ(${offset * 0.55}deg)`,
                    transition:
                      `transform 0.22s cubic-bezier(0.22, 1, 0.36, 1) ${index * 12}ms, text-shadow 0.22s ease`,
                    willChange: "transform",
                  } as React.CSSProperties
                }
              >
                {letter}
              </span>
            );
          })}
        </div>
      </section>
    </footer>
  );
}

function PortfolioPage({
  onNavigate,
}: {
  onNavigate: (slug: string) => void;
}) {
  return (
    <div style={{ background: BG, minHeight: "100vh" }}>
      <Navbar
        onHome={() =>
          window.scrollTo({ top: 0, behavior: "smooth" })
        }
      />
      <HeroSection />
      <MarqueeSection />
      <WorkSection onNavigate={onNavigate} />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

// ── Case Study Wrapper ────────────────────────────────────────────────────────

function CaseStudyOutro({
  nextWork,
  onBack,
  onNavigate,
}: {
  nextWork: WorkItem | null;
  onBack: () => void;
  onNavigate: (slug: string) => void;
}) {
  return (
    <section
      className="px-6 md:px-10 lg:px-16"
      style={{
        background: BG,
        borderTop: "1px solid rgba(242,241,236,0.08)",
        borderBottom: "1px solid rgba(242,241,236,0.08)",
      }}
    >
      <div className="mx-auto max-w-[1152px] py-14 md:py-16 lg:py-20">
        {nextWork?.slug && (
          <motion.button
            onClick={() => onNavigate(nextWork.slug!)}
            className="group flex w-full items-start justify-between gap-8 text-left"
            style={{
              background: "transparent",
              border: 0,
              borderBottom: "1px solid rgba(242,241,236,0.08)",
              cursor: "pointer",
              padding: "0 0 clamp(56px, 8vw, 112px)",
            }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
          >
            <span className="flex min-w-0 flex-col gap-5">
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  color: DIM,
                  letterSpacing: "0.06em",
                }}
              >
                Next project
              </span>
              <span
                className="max-w-[860px]"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(34px, 5vw, 64px)",
                  lineHeight: 1,
                  color: FG,
                  letterSpacing: 0,
                }}
              >
                {nextWork.title}
              </span>
            </span>
            <motion.span
              className="mt-1 flex shrink-0 items-center justify-center rounded-full"
              style={{
                width: 44,
                height: 44,
                border: "1px solid rgba(242,241,236,0.1)",
                background: BG2,
                color: PURPLE,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 20,
              }}
              animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ↗
            </motion.span>
          </motion.button>
        )}

        <motion.button
          onClick={onBack}
          className="group mt-14 flex w-full items-end justify-between gap-8 text-left md:mt-16"
          style={{
            background: "transparent",
            border: 0,
            cursor: "pointer",
            padding: 0,
          }}
          whileHover={{ x: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
        >
          <span className="flex min-w-0 flex-col gap-3">
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                color: PURPLE,
              }}
            >
              ← Back to portfolio
            </span>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(34px, 4.8vw, 56px)",
                lineHeight: 1,
                color: FG,
                letterSpacing: 0,
              }}
            >
              View all work
            </span>
          </span>
          <span
            className="hidden shrink-0 text-right sm:block"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: DIM,
              letterSpacing: "0.04em",
            }}
          >
            Selected cases
          </span>
        </motion.button>
      </div>
    </section>
  );
}

function CaseImagePreview({
  image,
  onClose,
}: {
  image: { src: string; title: string; isMobile?: boolean } | null;
  onClose: () => void;
}) {
  const isMobileCapture = Boolean(
    image && (image.isMobile || /\bmobile\b/i.test(image.title)),
  );

  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8"
          style={{
            background: "rgba(5,5,5,0.88)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${image.title} preview`}
            className="relative flex max-h-[92vh] flex-col gap-3"
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28, ease }}
            onClick={(event) => event.stopPropagation()}
            style={{
              width: isMobileCapture ? "min(92vw, 420px)" : "96vw",
              maxWidth: isMobileCapture ? 420 : 1600,
            }}
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 flex size-10 items-center justify-center rounded-full"
              style={{
                border: "1px solid rgba(242,241,236,0.14)",
                background: "rgba(10,10,10,0.72)",
                color: FG,
                cursor: "pointer",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 20,
              }}
            >
              ×
            </button>
            <div
              className="max-h-[82vh] overflow-x-hidden overflow-y-auto overscroll-contain rounded"
              style={{
                border: "1px solid rgba(242,241,236,0.1)",
                background: BG2,
                boxShadow: "0 28px 90px rgba(0,0,0,0.55)",
              }}
            >
              <img
                src={image.src}
                alt={image.title}
                style={{
                  display: "block",
                  width: isMobileCapture ? "min(360px, 100%)" : "100%",
                  height: "auto",
                  margin: "0 auto",
                }}
              />
            </div>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                color: DIM,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {image.title}
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MobileCaseStudyArticle({
  work,
  meta,
  detail,
  onPreview,
}: {
  work: WorkItem | null;
  meta: { problem: string; outcome: string } | null;
  detail: CaseMobileDetail | null;
  onPreview: (src: string, title: string) => void;
}) {
  if (!work || !meta || !detail) return null;

  const artifacts = CASE_MOBILE_ARTIFACTS[work.slug] ?? [
    {
      src: work.thumb,
      title: work.title,
      detail: "Project overview and product atmosphere.",
    },
  ];
  const firstArtifact = artifacts[0];
  const visualIndex = [
    { label: "Product overview", artifact: firstArtifact },
    { label: "Key screens", artifact: artifacts[1] ?? firstArtifact },
    { label: "Design evidence", artifact: artifacts[2] ?? firstArtifact },
  ];

  return (
    <section
      className="px-5 pb-16 pt-14 md:px-8 lg:hidden"
      style={{
        background: BG,
        borderBottom: "1px solid rgba(242,241,236,0.08)",
      }}
    >
      <motion.div
        className="mx-auto flex max-w-[520px] flex-col gap-10 md:max-w-[760px]"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
      >
        <header className="flex flex-col gap-5">
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              color: PURPLE,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {work.num} / {work.year}
          </span>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(34px, 10vw, 52px)",
              fontWeight: 500,
              lineHeight: 1,
              color: FG,
              letterSpacing: 0,
            }}
          >
            Case study walkthrough
          </h1>
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              color: DIM,
              lineHeight: 1.6,
            }}
          >
            {work.category}
          </p>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 20,
              lineHeight: 1.45,
              color: MUTED,
              letterSpacing: 0,
            }}
          >
            {detail.summary}
          </p>
        </header>

        <button
          type="button"
          aria-label={`Preview ${work.title}`}
          onClick={() => onPreview(work.thumb, work.title)}
          className="group overflow-hidden rounded text-left"
          style={{
            border: "1px solid rgba(242,241,236,0.08)",
            background: BG2,
            boxShadow: "0 24px 70px rgba(0,0,0,0.28)",
            cursor: "zoom-in",
            padding: 0,
          }}
        >
          <span className="relative block">
            <img
              src={work.thumb}
              alt={`${work.title} preview`}
              style={{
                display: "block",
                width: "100%",
                aspectRatio: "16 / 10",
                objectFit: "cover",
                objectPosition: "top center",
                background: "#070707",
              }}
            />
            <span
              className="absolute right-3 top-3 flex size-9 items-center justify-center rounded-full"
              style={{
                border: "1px solid rgba(242,241,236,0.14)",
                background: "rgba(10,10,10,0.62)",
                color: PURPLE,
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 18,
              }}
            >
              ↗
            </span>
          </span>
        </button>

        <section
          className="grid gap-4 border-t pt-7"
          style={{ borderColor: "rgba(242,241,236,0.1)" }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 28,
              fontWeight: 500,
              lineHeight: 1.05,
              color: FG,
              letterSpacing: 0,
            }}
          >
            Visual index
          </h2>
          <div className="grid gap-3">
            {visualIndex.map(({ label, artifact }, index) => (
              <button
                type="button"
                onClick={() =>
                  onPreview(artifact.src, `${work.title} · ${artifact.title}`)
                }
                aria-label={`Preview ${artifact.title}`}
                key={label}
                className="grid grid-cols-[92px_1fr] gap-4 overflow-hidden rounded text-left"
                style={{
                  border: "1px solid rgba(242,241,236,0.08)",
                  background: "rgba(242,241,236,0.035)",
                  cursor: "zoom-in",
                  padding: 0,
                }}
              >
                <div
                  className="relative min-h-[92px] overflow-hidden"
                  style={{ background: BG2 }}
                >
                  <img
                    src={artifact.src}
                    alt={artifact.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      background: "#070707",
                    }}
                  />
                  <span
                    className="absolute bottom-2 left-2"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 10,
                      color: PURPLE,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col justify-center gap-2 py-4 pr-4">
                  <span
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 10,
                      color: DIM,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </span>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 17,
                      fontWeight: 500,
                      lineHeight: 1.15,
                      color: FG,
                    }}
                  >
                    {artifact.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 14,
                      lineHeight: 1.45,
                      color: MUTED,
                    }}
                  >
                    {artifact.detail}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <div className="grid gap-9">
          {[
            ["Problem", meta.problem],
            ["Outcome", meta.outcome],
          ].map(([label, body]) => (
            <section
              key={label}
              className="grid gap-4 border-t pt-6"
              style={{ borderColor: "rgba(242,241,236,0.1)" }}
            >
              <h2
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  color: DIM,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {label}
              </h2>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 20,
                  color: FG,
                  lineHeight: 1.5,
                  letterSpacing: 0,
                }}
              >
                {body}
              </p>
            </section>
          ))}
        </div>

        <section
          className="grid gap-5 border-t pt-7"
          style={{ borderColor: "rgba(242,241,236,0.1)" }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 28,
              fontWeight: 500,
              lineHeight: 1.05,
              color: FG,
              letterSpacing: 0,
            }}
          >
            What changed
          </h2>
          <div className="grid gap-5">
            {detail.focus.map((item, index) => (
              <div
                key={item}
                className="grid grid-cols-[32px_1fr] gap-4 border-t pt-5"
                style={{ borderColor: "rgba(242,241,236,0.08)" }}
              >
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 12,
                    color: PURPLE,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 18,
                    lineHeight: 1.5,
                    color: MUTED,
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="grid gap-5 border-t pt-7"
          style={{ borderColor: "rgba(242,241,236,0.1)" }}
        >
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 28,
              fontWeight: 500,
              lineHeight: 1.05,
              color: FG,
              letterSpacing: 0,
            }}
          >
            Full case flow
          </h2>
          <div className="grid gap-6">
            {detail.sections.map((section, index) => {
              const artifact = artifacts[index % artifacts.length];

              return (
                <button
                type="button"
                onClick={() =>
                  onPreview(artifact.src, `${work.title} · ${artifact.title}`)
                }
                aria-label={`Preview ${section.title}`}
                key={`${section.kicker}-${section.title}`}
                className="grid gap-4 overflow-hidden rounded text-left"
                style={{
                  border: "1px solid rgba(242,241,236,0.08)",
                  background: "rgba(242,241,236,0.03)",
                  cursor: "zoom-in",
                  padding: 0,
                }}
              >
                <div
                  className="relative min-h-[132px] overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(204,110,248,0.16), rgba(242,241,236,0.025))",
                  }}
                >
                  <img
                    src={artifact.src}
                    alt=""
                    aria-hidden
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top center",
                      opacity: 0.5,
                      filter: "saturate(0.8) contrast(1.05)",
                    }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(10,10,10,0.05), rgba(10,10,10,0.72))",
                    }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 11,
                        color: PURPLE,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {section.kicker}
                    </span>
                    <span
                      className="flex size-8 items-center justify-center rounded-full"
                      style={{
                        border: "1px solid rgba(242,241,236,0.12)",
                        background: "rgba(10,10,10,0.5)",
                        color: PURPLE,
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 10,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <div className="grid gap-3 px-4 pb-5">
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 22,
                      fontWeight: 500,
                      lineHeight: 1.15,
                      color: FG,
                      letterSpacing: 0,
                    }}
                  >
                    {section.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 17,
                      lineHeight: 1.55,
                      color: MUTED,
                      letterSpacing: 0,
                    }}
                  >
                    {section.body}
                  </p>
                </div>
                </button>
              );
            })}
          </div>
        </section>

        <section
          className="grid gap-4 border-t pt-7"
          style={{ borderColor: "rgba(242,241,236,0.1)" }}
        >
          <h2
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              color: DIM,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Proof points
          </h2>
          <div className="grid gap-3">
            {detail.proof.map((item) => (
              <p
                key={item}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 18,
                  lineHeight: 1.5,
                  color: FG,
                  letterSpacing: 0,
                }}
              >
                {item}
              </p>
            ))}
          </div>
        </section>
      </motion.div>
    </section>
  );
}

function ResponsiveCaseStudyFrame({
  children,
  onClick,
  frameRef,
  reflow = false,
}: {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  frameRef: React.RefObject<HTMLDivElement>;
  reflow?: boolean;
}) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({ scale: 1, height: 0, isReflow: false });
  const baseWidth = 1280;

  useEffect(() => {
    const updateLayout = () => {
      const viewportWidth = window.innerWidth;
      const shouldReflow = reflow && viewportWidth < 1024;
      const nextScale = shouldReflow ? 1 : Math.min(1, viewportWidth / baseWidth);
      const contentHeight = innerRef.current?.scrollHeight ?? 0;
      setLayout({
        scale: nextScale,
        height: shouldReflow ? 0 : contentHeight ? contentHeight * nextScale : 0,
        isReflow: shouldReflow,
      });
    };

    updateLayout();

    const observer = new ResizeObserver(updateLayout);
    if (innerRef.current) observer.observe(innerRef.current);

    window.addEventListener("resize", updateLayout);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateLayout);
    };
  }, [reflow]);

  return (
    <div
      ref={frameRef}
      className={layout.isReflow ? "overflow-visible" : "overflow-hidden"}
      style={{ width: "100%" }}
    >
      <div
        style={{
          height: layout.height || undefined,
          minHeight: layout.height ? undefined : "100vh",
          overflow: layout.isReflow ? "visible" : "hidden",
          width: "100%",
        }}
      >
        <div
          ref={innerRef}
          style={{
            minWidth: layout.isReflow ? 0 : baseWidth,
            width: layout.isReflow ? "100%" : baseWidth,
            margin: layout.scale === 1 && !layout.isReflow ? "0 auto" : 0,
            transform:
              layout.scale === 1 || layout.isReflow ? undefined : `scale(${layout.scale})`,
            transformOrigin: "top left",
          }}
          onClick={onClick}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function CaseStudyUnifiedHero({
  work,
  meta,
  mobileDetail,
}: {
  work: WorkItem | null;
  meta: { problem: string; outcome: string } | null;
  mobileDetail: CaseMobileDetail | null;
}) {
  if (!work?.slug) return null;

  const hero = CASE_HERO_DETAILS[work.slug];
  const tags = hero?.tags ?? [work.category];
  const stats =
    hero?.stats ??
    [
      { value: work.year, label: "timeline" },
      { value: "1", label: "case study" },
      { value: "UI", label: "product design" },
    ];

  return (
    <section
      className="block"
      style={{
        background:
          "radial-gradient(circle at 72% 28%, rgba(204,110,248,0.16), transparent 34%), #0a0a0a",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        padding: "clamp(88px, 11vw, 112px) clamp(20px, 4.5vw, 56px) clamp(64px, 9vw, 96px)",
      }}
    >
      <div
        className="mx-auto grid items-center gap-10 lg:gap-16"
        style={{
          maxWidth: 1280,
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: PURPLE,
              marginBottom: 32,
            }}
          >
            {hero?.eyebrow ?? work.title}
          </p>

          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(42px, 8vw, 92px)",
              fontWeight: 500,
              letterSpacing: 0,
              lineHeight: 0.98,
              color: FG,
              maxWidth: 680,
            }}
          >
            {hero?.headline ?? work.title}
          </h1>

          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 21,
              lineHeight: 1.45,
              color: MUTED,
              maxWidth: 600,
              marginTop: 26,
            }}
          >
            {hero?.summary ?? mobileDetail?.summary ?? meta?.outcome ?? work.category}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  color: MUTED,
                  background: "rgba(255,255,255,0.055)",
                  border: "1px solid rgba(255,255,255,0.04)",
                  borderRadius: 999,
                  padding: "9px 16px",
                }}
              >
                {tag}
              </span>
            ))}
            {hero?.liveUrl && (
              <a
                href={hero.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  color: PURPLE,
                  border: "1px solid rgba(204,110,248,0.45)",
                  borderRadius: 999,
                  padding: "9px 16px",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(204,110,248,0.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                Visit live product ↗
              </a>
            )}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          whileHover={{ y: -4 }}
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 16,
            padding: 22,
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.018))",
            boxShadow: "0 32px 90px rgba(0,0,0,0.34)",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Layers size={18} color={PURPLE} strokeWidth={2.2} />
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 13,
                  fontWeight: 700,
                  color: FG,
                  textTransform: "uppercase",
                }}
              >
                {hero?.previewLabel ?? "Case overview"}
              </span>
            </div>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                color: DIM,
              }}
            >
              {work.year}
            </span>
          </div>

          <div
            className="case-hero-preview-stage relative mt-6 overflow-hidden"
            style={{
              borderRadius: 10,
              background:
                "linear-gradient(145deg, rgba(18,20,22,0.96), rgba(9,9,9,0.96))",
            }}
          >
            <div
              className="case-hero-preview-media relative overflow-hidden"
              style={{
                aspectRatio: "16 / 9",
              }}
            >
              <img
                alt={`${work.title} preview`}
                src={work.thumb}
                className="h-full w-full"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                  opacity: 0.9,
                  filter: "saturate(0.86) contrast(1.04)",
                }}
              />
              <div
                className="case-hero-preview-scrim absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,10,10,0.08), rgba(10,10,10,0.82))",
                }}
              />
            </div>
            <div className="case-hero-preview-copy absolute bottom-7 left-7 right-7">
              <p
                className="case-hero-preview-title"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(15px, 1.4vw, 20px)",
                  fontWeight: 700,
                  color: FG,
                  letterSpacing: 0,
                  lineHeight: 1.05,
                  maxWidth: 520,
                }}
              >
                {hero?.previewCaption ?? work.title}
              </p>
              <p
                className="case-hero-preview-category"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  color: PURPLE,
                  letterSpacing: "0.16em",
                  marginTop: 14,
                  textTransform: "uppercase",
                }}
              >
                {work.category}
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {stats.map((stat) => (
              <div
                key={`${stat.value}-${stat.label}`}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: 10,
                  padding: "22px 18px 18px",
                  minHeight: 92,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 30,
                    fontWeight: 700,
                    color: PURPLE,
                    letterSpacing: 0,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 11,
                    color: MUTED,
                    letterSpacing: "0.08em",
                    marginTop: 10,
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

function CaseStudyPage({
  slug,
  onBack,
  onNavigate,
}: {
  slug: string;
  onBack: () => void;
  onNavigate: (slug: string) => void;
}) {
  const Component = CASE_STUDIES[slug];
  const caseStudyParallaxRef = useCaseStudyParallax(slug);
  const [previewImage, setPreviewImage] = useState<{
    src: string;
    title: string;
    isMobile?: boolean;
  } | null>(null);

  // Hide the floating "Back to work" pill while scrolling down so it never
  // sits on top of headings/body copy; bring it back on any upward scroll.
  const [backHidden, setBackHidden] = useState(false);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setBackHidden(y > 120 && y > lastY);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Next project in work-grid order (wraps around at the end)
  const workIndex = WORKS.findIndex((w) => w.slug === slug);
  const currentWork = workIndex >= 0 ? WORKS[workIndex] : null;
  const currentMeta = CASE_META[slug] ?? null;
  const currentMobileDetail = CASE_MOBILE_DETAILS[slug] ?? null;
  const nextWork =
    workIndex >= 0
      ? WORKS[(workIndex + 1) % WORKS.length]
      : null;
  const openPreview = (src: string, title: string, isMobile = false) => {
    setPreviewImage({ src, title, isMobile });
  };

  // The imported case study components are static — delegate clicks
  // on their "Next project" rows and "Back to top" buttons.
  const handleDelegatedClick = (
    e: React.MouseEvent<HTMLDivElement>,
  ) => {
    const target = e.target as HTMLElement;

    const previewCard = target.closest<HTMLElement>("[data-preview-src]");
    if (previewCard?.dataset.previewSrc) {
      openPreview(
        previewCard.dataset.previewSrc,
        previewCard.dataset.previewTitle || currentWork?.title || "Case preview",
        previewCard.dataset.previewMobile === "true",
      );
      return;
    }

    const scopedImages = Array.from(
      e.currentTarget.querySelectorAll("img"),
    ) as HTMLImageElement[];
    const image =
      (target.closest("img") as HTMLImageElement | null) ??
      scopedImages.find((candidate) => {
        const rect = candidate.getBoundingClientRect();
        return (
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom
        );
      });

    if (image?.src) {
      const isMobileCapture =
        image.naturalWidth <= 480 && image.naturalHeight > image.naturalWidth;
      openPreview(
        image.src,
        image.alt || currentWork?.title || "Case preview",
        isMobileCapture,
      );
      return;
    }

    const row = target.closest(
      '[data-name="nRow"], [data-name="top"]',
    );
    if (row) {
      const txt = row.textContent || "";
      if (txt.includes("Next project")) {
        if (nextWork?.slug) onNavigate(nextWork.slug);
      } else if (
        txt.includes("Back to portfolio") ||
        txt.includes("View all work")
      ) {
        onBack();
      }
      return;
    }
    const p = target.closest("p");
    if (p?.textContent?.includes("Back to top")) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (
      p?.textContent?.includes("View all work") ||
      p?.textContent?.includes("Back to portfolio")
    ) {
      onBack();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div style={{ background: BG, minHeight: "100vh", overflowX: "hidden" }}>
      <motion.button
        onClick={onBack}
        className="fixed top-5 left-5 z-50 flex items-center gap-2"
        style={{
          background: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 20,
          padding: "8px 16px",
          cursor: "pointer",
          pointerEvents: backHidden ? "none" : "auto",
        }}
        initial={{ opacity: 0, x: -16 }}
        animate={
          backHidden
            ? { opacity: 0, y: -12, x: 0 }
            : { opacity: 1, y: 0, x: 0 }
        }
        transition={{ duration: 0.25 }}
        whileHover={{
          scale: 1.04,
          borderColor: "rgba(204,110,248,0.4)",
        }}
        whileTap={{ scale: 0.97 }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M10 1.5L3.5 8L10 14.5"
            stroke="#9a9a93"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: 11,
            color: MUTED,
          }}
        >
          Back to work
        </span>
      </motion.button>

      <style>{`
        [data-name="nRow"], [data-name="top"] { cursor: pointer; }
        [data-name="nRow"]:hover p, [data-name="top"]:hover p { color: #cc6ef8; }
        .case-study-preview-scope img { cursor: zoom-in; }
        .case-study-imported-content img.object-contain {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          object-position: top center !important;
        }
        .case-study-imported-content [data-name="logo"] img.object-contain {
          object-fit: contain !important;
          object-position: center !important;
        }
        .case-study-imported-content :is(p, span, div)[class*="Space_Grotesk:Regular"][class*="text-[10px]"],
        .case-study-imported-content :is(p, span, div)[class*="Space_Grotesk:Regular"][class*="text-[11px]"],
        .case-study-imported-content :is(p, span, div)[class*="Space_Grotesk:Regular"][class*="text-[12px]"],
        .case-study-imported-content :is(p, span, div)[class*="Space_Grotesk:Regular"][class*="text-[13px]"] {
          font-size: 14px !important;
          line-height: 1.5 !important;
          height: auto !important;
        }
        .case-study-imported-content [data-name="case-study-cmis-suite"] :is(
          [data-name="c3"],
          [data-name="c3b"],
          [data-name="c3p"]
        ) {
          height: 460px !important;
        }
        .case-study-imported-content [data-name="case-study-cmis-suite"] :is(
          [data-name="lc"],
          [data-name="dlc"],
          [data-name="c2"],
          [data-name="c2t"],
          [data-name="old"],
          [data-name="new"]
        ) {
          height: 420px !important;
        }
        @media (max-width: 639px) {
          .case-hero-preview-stage {
            overflow: visible !important;
          }

          .case-hero-preview-media {
            border-radius: 10px !important;
            border: 1px solid rgba(242,241,236,0.08) !important;
          }

          .case-hero-preview-scrim {
            background: linear-gradient(180deg, rgba(10,10,10,0), rgba(10,10,10,0.28)) !important;
          }

          .case-hero-preview-copy {
            position: static !important;
            padding: 16px 2px 0 !important;
          }

          .case-hero-preview-title {
            font-size: 16px !important;
            line-height: 1.18 !important;
            max-width: 100% !important;
          }

          .case-hero-preview-category {
            font-size: 10px !important;
            letter-spacing: 0.08em !important;
            line-height: 1.45 !important;
            overflow-wrap: anywhere !important;
            margin-top: 10px !important;
          }
        }
        .case-study-preview-scope [data-name="hero"],
        .case-study-preview-scope [data-name="Hero"],
        .case-study-preview-scope [data-name="Hero_Section"],
        .case-study-preview-scope [data-name="HeroSection"],
        .case-study-preview-scope [data-name="design-system-hero"] {
          display: none !important;
        }
        /* Hide the static per-case-study copyright rows — the shared
           FooterSection below provides the real site footer. */
        [data-name="fw"],
        [data-name="nextWork"],
        [data-name="NextProject"],
        [data-name="Footer"],
        [data-name="footer"],
        [data-name="foot"],
        [data-name="foot-wrap"],
        [data-name="foot-wrap"] [data-name="footer"] { display: none; }
        @media (max-width: 1023px) {
          .case-study-imported-content {
            width: 100% !important;
          }

          .case-study-imported-content > [data-name] {
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            align-items: stretch !important;
            overflow: visible !important;
          }

          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[1280px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[1152px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[812px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[760px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[720px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[680px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[640px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[620px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[600px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[564px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[520px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[480px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[420px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[390px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[380px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[368px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[360px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[320px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="w-[280px]"] {
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
          }

          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="px-[64px]"] {
            padding-left: clamp(18px, 5vw, 40px) !important;
            padding-right: clamp(18px, 5vw, 40px) !important;
          }

          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="py-[100px]"] {
            padding-top: clamp(56px, 10vw, 88px) !important;
            padding-bottom: clamp(56px, 10vw, 88px) !important;
          }

          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="overflow-clip"] {
            overflow: visible !important;
          }

          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="grid-cols-"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="grid-cols-["] {
            grid-template-columns: 1fr !important;
          }

          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="flex"][class*="w-[1152px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="flex"][class*="w-[1280px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="flex"][class*="gap-[60px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="flex"][class*="gap-[64px]"] {
            flex-direction: column !important;
            align-items: stretch !important;
          }

          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="text-[82px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="text-[78px]"] {
            font-size: clamp(46px, 13vw, 72px) !important;
            line-height: 1 !important;
            letter-spacing: 0 !important;
          }

          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="text-[56px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="text-[48px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="text-[46px]"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [class*="text-[40px]"] {
            font-size: clamp(30px, 8vw, 44px) !important;
            line-height: 1.08 !important;
            letter-spacing: 0 !important;
            white-space: normal !important;
          }

          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) p {
            max-width: 100% !important;
            white-space: normal !important;
          }

          .case-study-preview-scope [data-name="case-study-design-system"] {
            width: 100% !important;
            max-width: 100% !important;
            align-items: stretch !important;
            overflow: visible !important;
          }

          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] {
            width: 100% !important;
            max-width: 100% !important;
            padding: clamp(56px, 10vw, 88px) clamp(18px, 5vw, 40px) !important;
            overflow: visible !important;
            align-items: stretch !important;
          }

          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] > div,
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] aside,
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] p,
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] div {
            max-width: 100% !important;
          }

          .case-study-preview-scope [data-name="case-study-design-system"] .uds-catalog-grid,
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name="design-system-hub"] > div:nth-of-type(2),
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name="design-system-patterns"] > .grid,
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name="design-system-adoption"] > div {
            grid-template-columns: 1fr !important;
          }

          .case-study-preview-scope [data-name="case-study-design-system"] [data-name="design-system-hub"] > div:first-of-type,
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name="design-system-foundations"] > div:first-of-type,
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name="design-system-components"] > div:first-of-type,
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name="design-system-adoption"] > div {
            align-items: flex-start !important;
            flex-direction: column !important;
            gap: 20px !important;
          }

          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] [class*="text-[48px]"] {
            font-size: clamp(34px, 9vw, 46px) !important;
            line-height: 1.08 !important;
            letter-spacing: 0 !important;
          }

          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] [class*="text-[78px]"] {
            font-size: clamp(46px, 13vw, 72px) !important;
            line-height: 1 !important;
            letter-spacing: 0 !important;
          }

          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] [class*="w-[1152px]"],
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] [class*="w-[760px]"],
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] [class*="w-[710px]"],
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] [class*="w-[680px]"],
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] [class*="w-[640px]"],
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] [class*="w-[620px]"],
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] [class*="w-[520px]"],
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] [class*="w-[420px]"],
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] [class*="w-[390px]"],
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] [class*="w-[380px]"],
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name^="design-system-"] [class*="w-[360px]"] {
            width: 100% !important;
          }

          .case-study-preview-scope [data-name="case-study-design-system"] [data-name="design-system-adoption"] [class*="grid-cols-"] {
            grid-template-columns: 1fr !important;
          }

          .case-study-preview-scope [data-name="case-study-design-system"] [data-name="design-system-adoption"] [class*="text-[48px]"],
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name="design-system-adoption"] [class*="text-[20px]"] {
            white-space: normal !important;
            overflow-wrap: anywhere !important;
          }

          .case-study-preview-scope [data-name="case-study-design-system"] [data-name="design-system-adoption"] [class*="min-h-[92px]"] {
            align-items: flex-start !important;
            flex-direction: column !important;
            gap: 12px !important;
            min-height: auto !important;
            padding: 22px !important;
          }

          .case-study-preview-scope [data-name="case-study-design-system"] [data-name="design-system-adoption"] [class*="text-right"] {
            text-align: left !important;
          }

          .case-study-preview-scope [data-name="case-study-design-system"] [data-name="design-system-adoption"] [class*="justify-between"] {
            justify-content: flex-start !important;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [data-name*="Row"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [data-name*="row"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [data-name*="Grid"],
          .case-study-imported-content > [data-name]:not([data-name="case-study-design-system"]) [data-name*="grid"] {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 18px !important;
          }

          .case-study-preview-scope [data-name="case-study-design-system"] .uds-catalog-grid,
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name="design-system-patterns"] > .grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .case-study-preview-scope [data-name="case-study-design-system"] [data-name="design-system-hub"] > div:nth-of-type(2),
          .case-study-preview-scope [data-name="case-study-design-system"] [data-name="design-system-adoption"] > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <CaseStudyUnifiedHero
        work={currentWork}
        meta={currentMeta}
        mobileDetail={currentMobileDetail}
      />
      <div className="block lg:hidden">
        <MobileCaseStudyArticle
          work={currentWork}
          meta={currentMeta}
          detail={currentMobileDetail}
          onPreview={openPreview}
        />
        {slug === "kitalabel-bos" && <KitalabelBosStory />}
      </div>
      <div className="case-study-preview-scope hidden lg:block">
      <ResponsiveCaseStudyFrame
        frameRef={caseStudyParallaxRef}
        onClick={handleDelegatedClick}
        reflow
      >
        {Component ? (
          <motion.div
            className="case-study-imported-content"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Component />
            {MERGED_PUBLIC_STORY[slug] && (
              <>
                <section
                  style={{
                    background: BG,
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    padding: "clamp(64px, 9vw, 110px) clamp(20px, 4.5vw, 56px)",
                  }}
                >
                  <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                    <p
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 13,
                        letterSpacing: "0.24em",
                        textTransform: "uppercase",
                        color: PURPLE,
                        marginBottom: 24,
                      }}
                    >
                      {MERGED_PUBLIC_STORY[slug].kicker}
                    </p>
                    <h2
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: "clamp(34px, 5vw, 56px)",
                                              fontWeight: 500,
                        lineHeight: 1.05,
                        color: FG,
                        maxWidth: 720,
                      }}
                    >
                      {MERGED_PUBLIC_STORY[slug].title}
                    </h2>
                    <p
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontSize: 19,
                        lineHeight: 1.5,
                        color: MUTED,
                        maxWidth: 640,
                        marginTop: 22,
                      }}
                    >
                      {MERGED_PUBLIC_STORY[slug].blurb}
                    </p>
                    {MERGED_PUBLIC_STORY[slug].proofs && (
                      <ul
                        style={{
                          display: "flex",
                          gap: 28,
                          flexWrap: "wrap",
                          listStyle: "none",
                          padding: 0,
                          margin: "28px 0 0",
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 12,
                          color: FG,
                        }}
                      >
                        {MERGED_PUBLIC_STORY[slug].proofs.map((proof) => (
                          <li key={proof} style={{ display: "flex", gap: 9, alignItems: "center" }}>
                            <span style={{ color: PURPLE }}>+</span>
                            {proof}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>
                {(() => {
                  const Merged = MERGED_PUBLIC_STORY[slug].component;
                  return <Merged />;
                })()}
              </>
            )}
          </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6">
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 14,
                color: DIM,
              }}
            >
              Case study coming soon
            </span>
            <motion.button
              onClick={onBack}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: 14,
                color: PURPLE,
                border: `1px solid ${PURPLE}`,
                borderRadius: 32,
                padding: "12px 24px",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              ← Back to portfolio
            </motion.button>
          </div>
        )}
      </ResponsiveCaseStudyFrame>
      </div>
      <CaseStudyOutro
        nextWork={nextWork}
        onBack={onBack}
        onNavigate={onNavigate}
      />
      <FooterSection />
      <CaseImagePreview
        image={previewImage}
        onClose={() => setPreviewImage(null)}
      />
    </div>
  );
}

// ── App ───────────────────────────────────

export default function App() {
  const pageFromHash = () => {
    const match = window.location.hash.match(/^#\/work\/([^/]+)$/);
    const slug = match?.[1];
    return slug && CASE_STUDIES[slug] ? slug : "home";
  };
  const [page, setPage] = useState<"home" | string>(() => pageFromHash());
  const currentWork =
    page === "home" ? null : WORKS.find((work) => work.slug === page) ?? null;
  const currentMeta = page === "home" ? null : CASE_META[page] ?? null;
  const petCaseStudy =
    currentWork && currentMeta && currentWork.slug
      ? {
          slug: currentWork.slug,
          title: currentWork.title,
          category: currentWork.category,
          year: currentWork.year,
          problem: currentMeta.problem,
          outcome: currentMeta.outcome,
        }
      : null;

  useEffect(() => {
    const handleHashChange = () => {
      setPage(pageFromHash());
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);

  const handleNavigate = (slug: string) => {
    setPage(slug);
    window.history.pushState(null, "", `#/work/${slug}`);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setPage("home");
    window.history.pushState(null, "", "#/");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {page === "home" ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PortfolioPage onNavigate={handleNavigate} />
          </motion.div>
        ) : (
          <motion.div
            key={page}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CaseStudyPage
              slug={page}
              onBack={handleBack}
              onNavigate={handleNavigate}
            />
          </motion.div>
        )}
      </AnimatePresence>
      <VirtualPet
        caseStudy={petCaseStudy}
        portfolioCases={WORKS.flatMap((work) => {
          const meta = work.slug ? CASE_META[work.slug] : null;
          return work.slug && meta
            ? [
                {
                  slug: work.slug,
                  title: work.title,
                  category: work.category,
                  year: work.year,
                  problem: meta.problem,
                  outcome: meta.outcome,
                },
              ]
            : [];
        })}
        onNavigate={handleNavigate}
        onHome={handleBack}
      />
    </>
  );
}
