import { useState } from "react";
import { ArrowRight, Check, LockKeyhole, Mail, Send, ShieldCheck, UserCheck, Users } from "lucide-react";

const imgHeroImg = "/case-studies/mailtarget-app/image-01.png";
const imgRectangle = "/case-studies/mailtarget-app/image-02.png";
const imgRectangle1 = "/case-studies/mailtarget-app/image-03.png";
const imgRectangle2 = "/case-studies/mailtarget-app/image-04.png";
const imgRectangle3 = "/case-studies/mailtarget-app/image-05.png";
const imgRectangle4 = "/case-studies/mailtarget-app/image-06.png";
const imgRectangle5 = "/case-studies/mailtarget-app/image-07.png";
const imgRectangle6 = "/case-studies/mailtarget-app/image-08.png";

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #CC6EF8)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f1ec] text-[15px] whitespace-nowrap">Dheoryan Putra Arsi</p>
    </div>
  );
}

function Nt() {
  return (
    <div className="h-[34px] relative rounded-[40px] shrink-0 w-[106px]" data-name="nt">
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[40px]" />
      <p className="[word-break:break-word] absolute font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] left-[16px] text-[#cc6ef8] text-[12px] top-[8px] whitespace-nowrap">{`Let's talk`}</p>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between px-[64px] py-[32px] relative shrink-0 w-[1280px]" data-name="nav">
      <Frame />
      <Nt />
    </div>
  );
}

function Frame1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-none min-w-full relative shrink-0 text-[#f2f1ec] text-[82px] w-[min-content]">Mailtarget App</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cc6ef8] text-[22px] w-[877px]">A unified workspace for transactional email operations</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#a0a09a] text-[12px] uppercase">Role</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[16px]">Product Designer</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#a0a09a] text-[12px] uppercase">Product</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[16px]">Mailtarget App</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#a0a09a] text-[12px] uppercase">Year</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[16px]">2023–2024</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#a0a09a] text-[12px] uppercase">Type</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[16px]">B2B SaaS</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#a0a09a] text-[12px] uppercase">Scope</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[16px]">Product + Marketing</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[32px] items-start pt-[32px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start pb-[80px] pt-[120px] px-[64px] relative shrink-0 w-[1280px]" data-name="hero">
      <Frame1 />
      <Frame2 />
      <div className="h-[380px] relative rounded-[12px] shrink-0 w-[1152px]" data-name="hero-img">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <img alt="" className="absolute h-[342.11%] left-0 max-w-none top-[-0.03%] w-full" src={imgHeroImg} />
        </div>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="section-header">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">00 — The Problem</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.1] min-w-full relative shrink-0 text-[#f2f1ec] text-[46px] w-[min-content]">One product, three conflicting patterns</p>
    </div>
  );
}

function TagPill() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag-pill">
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">Campaign builder</p>
    </div>
  );
}

function TagPill1() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag-pill">
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">Contacts</p>
    </div>
  );
}

function TagPill2() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag-pill">
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">Automation</p>
    </div>
  );
}

function TagPill3() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag-pill">
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">Developer + operations</p>
    </div>
  );
}

function TagPill4() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag-pill">
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">Shared patterns</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <TagPill />
      <TagPill1 />
      <TagPill2 />
      <TagPill3 />
      <TagPill4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f2f1ec] text-[18px] w-full">Mailtarget had grown flow by flow: campaign builder, contacts, and automation each carried their own interaction patterns. Switching between them meant relearning the product. My work was to give the application one shared language, so a familiar action, state, and navigation pattern stayed familiar wherever a team member worked.</p>
      <Frame9 />
    </div>
  );
}

function Component01Context() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="01-context">
      <SectionHeader />
      <Frame8 />
      <FragmentedToUnified />
    </div>
  );
}

function FragmentedToUnified() {
  const before = [
    ["Campaign builder", "Different action hierarchy"],
    ["Contacts", "Different statuses and table behavior"],
    ["Automation", "Different navigation and patterns"],
  ];
  const after = [
    "Shared navigation and page anatomy",
    "Consistent actions, states, and feedback",
    "One language for developers and operations teams",
  ];

  return (
    <section className="grid grid-cols-[1fr_80px_1fr] items-stretch w-full" data-name="mailtarget-before-after">
      <div className="bg-[#101010] border border-[rgba(255,255,255,0.1)] p-[32px] rounded-[12px]">
        <p className="font-['Space_Mono:Regular',sans-serif] text-[#cc6ef8] text-[12px] tracking-[1.7px] uppercase">Before redesign</p>
        <h3 className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.12] mt-[14px] text-[#f2f1ec] text-[28px]">Switch a task, relearn the product.</h3>
        <div className="mt-[28px] space-y-[10px]">
          {before.map(([title, detail]) => (
            <div className="border border-[rgba(255,255,255,0.09)] flex items-center justify-between px-[16px] py-[14px]" key={title}>
              <span className="font-['Space_Grotesk:Medium',sans-serif] text-[#f2f1ec] text-[15px]">{title}</span>
              <span className="font-['Space_Mono:Regular',sans-serif] text-[#8d8d87] text-[10px]">{detail}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center relative">
        <div className="absolute bg-[#cc6ef8] h-px left-0 right-0 top-1/2" />
        <span aria-label="From fragmented to unified" className="bg-[#0a0a0a] border border-[#cc6ef8] flex items-center justify-center relative rounded-full size-[42px] text-[#cc6ef8]">
          <ArrowRight aria-hidden size={17} strokeWidth={1.8} />
        </span>
      </div>
      <div className="bg-[rgba(204,110,248,0.07)] border border-[rgba(204,110,248,0.35)] p-[32px] rounded-[12px]">
        <p className="font-['Space_Mono:Regular',sans-serif] text-[#cc6ef8] text-[12px] tracking-[1.7px] uppercase">After redesign</p>
        <h3 className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.12] mt-[14px] text-[#f2f1ec] text-[28px]">One working language across the account.</h3>
        <div className="mt-[28px] space-y-[10px]">
          {after.map((detail, index) => (
            <div className="border border-[rgba(204,110,248,0.35)] flex gap-[12px] items-center px-[16px] py-[14px]" key={detail}>
              <span className="font-['Space_Mono:Regular',sans-serif] text-[#cc6ef8] text-[11px]">0{index + 1}</span>
              <span className="font-['Space_Grotesk:Medium',sans-serif] text-[#f2f1ec] text-[15px]">{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="section-header">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">01 — Context</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.1] min-w-full relative shrink-0 text-[#f2f1ec] text-[46px] w-[min-content]">The people behind the same account</p>
    </div>
  );
}

function TagPill5() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag-pill">
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">Transactional Email API</p>
    </div>
  );
}

function TagPill6() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag-pill">
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">Developer + Admin Dual Audience</p>
    </div>
  );
}

function TagPill7() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag-pill">
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">Sandbox and Production Model</p>
    </div>
  );
}

function TagPill8() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag-pill">
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">480+ Screens</p>
    </div>
  );
}

function TagPill9() {
  return (
    <div className="content-stretch flex items-start px-[12px] py-[6px] relative rounded-[100px] shrink-0" data-name="tag-pill">
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">Competitive Research</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <TagPill5 />
      <TagPill6 />
      <TagPill7 />
      <TagPill8 />
      <TagPill9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f2f1ec] text-[18px] w-full">Mailtarget helps Indonesian businesses send password resets, order confirmations, and account notifications through an API, SDK, or SMTP. The developer needs keys, endpoints, and delivery evidence; the operations teammate needs usage, billing, and team control. The redesign had to make both jobs feel native to one product, without forcing either person through the other&apos;s workflow.</p>
      <Frame11 />
    </div>
  );
}

function Component01Context1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="01-context">
      <SectionHeader1 />
      <Frame10 />
    </div>
  );
}

function SectionHeader2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="section-header">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">02 — UX Model</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.1] min-w-full relative shrink-0 text-[#f2f1ec] text-[46px] w-[min-content]">How does a test email become safe to send?</p>
    </div>
  );
}

const sandboxProductionSteps = [
  {
    number: "01",
    title: "Sign Up",
    detail: "Email or Google OAuth starts the account without blocking exploration.",
    environment: "Entry",
    gate: "No verification yet",
    sandboxState: "Open",
    productionState: "Locked",
    metric: "0 risk emails",
    insight: "Reduce entry friction before users understand the product.",
  },
  {
    number: "02",
    title: "Sandbox Config",
    detail: "API key, Base URL, and 300 emails/day limit let developers integrate safely.",
    environment: "Sandbox",
    gate: "Authorized recipients only",
    sandboxState: "Active",
    productionState: "Locked",
    metric: "300/day limit",
    insight: "Testing is useful, but real recipients stay protected.",
  },
  {
    number: "03",
    title: "Data Completion",
    detail: "User and business details turn an anonymous test account into a known sender.",
    environment: "Verification",
    gate: "Identity check",
    sandboxState: "Active",
    productionState: "Preparing",
    metric: "2-step form",
    insight: "Ask for trust signals after value is already clear.",
  },
  {
    number: "04",
    title: "Domain Authentication",
    detail: "CNAME/TXT records prove ownership before Mailtarget allows real sending.",
    environment: "Verification",
    gate: "DNS ownership",
    sandboxState: "Active",
    productionState: "Reviewing",
    metric: "CNAME + TXT",
    insight: "Protect deliverability before traffic reaches real inboxes.",
  },
  {
    number: "05",
    title: "Production Unlocked",
    detail: "Verified users move to unlimited recipients with billing activated.",
    environment: "Production",
    gate: "Trusted sender",
    sandboxState: "Available",
    productionState: "Live",
    metric: "Real delivery",
    insight: "The user graduates only after the system can trust the sender.",
  },
];

function EnvironmentPanel({
  title,
  state,
  tone,
  active,
  items,
}: {
  title: string;
  state: string;
  tone: string;
  active: boolean;
  items: string[];
}) {
  return (
    <div
      className="relative rounded-[16px] shrink-0 w-full"
      style={{
        background: active ? `${tone}14` : "#10100f",
        boxShadow: active ? `0 0 36px ${tone}1f` : "none",
      }}
    >
      <div className="content-stretch flex flex-col gap-[18px] min-h-[220px] overflow-clip p-[22px] relative rounded-[inherit]">
        <div className="content-stretch flex items-start justify-between gap-[16px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0">
            <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[11px] tracking-[1.1px] uppercase" style={{ color: tone }}>{title}</p>
            <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[22px] whitespace-nowrap">{state}</p>
          </div>
          <div className="rounded-full shrink-0 size-[12px]" style={{ background: tone, boxShadow: `0 0 18px ${tone}` }} />
        </div>

        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
          {items.map((item) => (
            <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" key={item}>
              <span className="block rounded-full shrink-0 size-[6px] mt-[8px]" style={{ background: tone }} />
              <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#a0a09a] text-[13px] w-full">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div aria-hidden className="absolute border border-solid inset-0 pointer-events-none rounded-[16px]" style={{ borderColor: active ? `${tone}66` : "rgba(242,241,236,0.1)" }} />
    </div>
  );
}

function LegacySandboxProductionModel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const active = sandboxProductionSteps[activeIndex];
  const progress = `${(activeIndex / (sandboxProductionSteps.length - 1)) * 100}%`;
  const isSandbox = active.environment === "Sandbox" || active.environment === "Entry";
  const isProduction = active.environment === "Production";

  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-name="sandbox-production-model">
      <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1fr] gap-[36px] relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
          <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#f2f1ec] text-[20px] w-full">
            Transactional email is trust-sensitive: one bad setup can send test mail to real customers or damage domain reputation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-[10px] relative shrink-0 w-full">
            <div className="bg-[#141414] relative rounded-[12px] shrink-0">
              <div className="content-stretch flex flex-col gap-[8px] overflow-clip p-[16px] relative rounded-[inherit]">
                <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#cc6ef8] text-[10px] tracking-[1px] uppercase">Problem</p>
                <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] text-[#f2f1ec] text-[13px]">Testing can harm real users</p>
              </div>
            </div>
            <div className="bg-[#141414] relative rounded-[12px] shrink-0">
              <div className="content-stretch flex flex-col gap-[8px] overflow-clip p-[16px] relative rounded-[inherit]">
                <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#ff9f43] text-[10px] tracking-[1px] uppercase">Decision</p>
                <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] text-[#f2f1ec] text-[13px]">Start safe in Sandbox</p>
              </div>
            </div>
            <div className="bg-[#141414] relative rounded-[12px] shrink-0">
              <div className="content-stretch flex flex-col gap-[8px] overflow-clip p-[16px] relative rounded-[inherit]">
                <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#6aa8ff] text-[10px] tracking-[1px] uppercase">Outcome</p>
                <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] text-[#f2f1ec] text-[13px]">Unlock Production after trust</p>
              </div>
            </div>
          </div>

          <div className="bg-[#10100f] relative rounded-[18px] shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[18px] overflow-clip p-[22px] relative rounded-[inherit]">
              <div className="content-stretch flex items-center justify-between gap-[16px] relative shrink-0 w-full">
                <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#6f6f68] text-[11px] tracking-[1.1px] uppercase">Current state</p>
                <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#cc6ef8] text-[11px] whitespace-nowrap">{active.number} / 05</p>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] relative shrink-0 w-full">
                <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] text-[#f2f1ec] text-[24px]">{active.title}</p>
                <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[24px] text-[#a0a09a] text-[15px] w-full">{active.detail}</p>
              </div>
              <div className="grid grid-cols-2 gap-[10px] relative shrink-0 w-full">
                <div className="rounded-[10px] bg-[#0a0a0a] p-[14px]">
                  <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#6f6f68] text-[10px] tracking-[1px] uppercase">Gate</p>
                  <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] mt-[6px] text-[#f2f1ec] text-[13px]">{active.gate}</p>
                </div>
                <div className="rounded-[10px] bg-[#0a0a0a] p-[14px]">
                  <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#6f6f68] text-[10px] tracking-[1px] uppercase">Signal</p>
                  <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] mt-[6px] text-[#f2f1ec] text-[13px]">{active.metric}</p>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[18px] not-italic text-[#cc6ef8] text-[11px] w-full">{active.insight}</p>
            </div>
            <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[18px]" />
          </div>
        </div>

        <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_92px_1fr] gap-[14px] items-stretch relative shrink-0 w-full">
            <EnvironmentPanel
              active={isSandbox}
              items={["300 emails/day limit", "Authorized recipients only", "Visible Sandbox badge"]}
              state={active.sandboxState}
              title="Sandbox"
              tone="#ff9f43"
            />

            <div className="bg-[#141414] min-h-[180px] relative rounded-[16px] shrink-0">
              <div className="content-stretch flex md:flex-col gap-[10px] h-full items-center justify-center overflow-clip p-[14px] relative rounded-[inherit]">
                <div className="rounded-full size-[44px] flex items-center justify-center" style={{ background: active.environment === "Verification" ? "rgba(204,110,248,0.18)" : "rgba(242,241,236,0.06)" }}>
                  <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic text-[#cc6ef8] text-[14px]">↔</p>
                </div>
                <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[16px] not-italic text-[#a0a09a] text-[10px] text-center tracking-[0.8px] uppercase">Verification gate</p>
              </div>
              <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
            </div>

            <EnvironmentPanel
              active={isProduction}
              items={["Domain authenticated", "Real recipient sending", "Billing and reputation controls"]}
              state={active.productionState}
              title="Production"
              tone="#6aa8ff"
            />
          </div>

          <div className="bg-[#10100f] relative rounded-[18px] shrink-0 w-full">
            <div className="content-stretch flex flex-col gap-[18px] overflow-clip p-[18px] relative rounded-[inherit]">
              <div className="h-[6px] bg-[rgba(242,241,236,0.08)] overflow-clip relative rounded-full shrink-0 w-full">
                <div className="absolute bg-[#cc6ef8] h-full left-0 top-0 rounded-full transition-all duration-300" style={{ width: progress }} />
              </div>
              <div className="content-stretch flex flex-col gap-[10px] relative shrink-0 w-full">
                {sandboxProductionSteps.map((step, index) => {
                  const selected = activeIndex === index;
                  return (
                    <button
                      className="group relative rounded-[12px] shrink-0 text-left transition-all duration-200 w-full"
                      key={step.number}
                      onClick={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onMouseEnter={() => setActiveIndex(index)}
                      style={{
                        background: selected ? "rgba(204,110,248,0.12)" : "#0a0a0a",
                        border: `1px solid ${selected ? "rgba(204,110,248,0.62)" : "rgba(242,241,236,0.08)"}`,
                        cursor: "pointer",
                        padding: 0,
                      }}
                      type="button"
                    >
                      <div className="content-stretch flex gap-[14px] items-center overflow-clip p-[14px] relative rounded-[inherit]">
                        <div className="content-stretch flex items-center justify-center rounded-full shrink-0 size-[34px]" style={{ background: selected ? "#cc6ef8" : "rgba(204,110,248,0.18)" }}>
                          <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic text-[#f2f1ec] text-[12px] whitespace-nowrap">{step.number}</p>
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
                          <div className="content-stretch flex items-center justify-between gap-[12px] relative shrink-0 w-full">
                            <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px]">{step.title}</p>
                            <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6f6f68] text-[10px] uppercase whitespace-nowrap">{step.environment}</p>
                          </div>
                          <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#a0a09a] text-[12px] w-full">{step.detail}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

const uxModelStages = [
  {
    number: "01",
    title: "Practice safely",
    environment: "Sandbox",
    detail: "Connect the product and send test emails only to people you approve.",
    technical: "300 emails/day · approved recipients only",
    takeaway: "Learn with real emails, without reaching a real customer.",
    tone: "#ff9f43",
  },
  {
    number: "02",
    title: "Prove ownership",
    environment: "Trust check",
    detail: "Confirm the business and show that the sending domain belongs to you.",
    technical: "Business details · domain authentication",
    takeaway: "Mailtarget checks the sender before opening access to customers.",
    tone: "#cc6ef8",
  },
  {
    number: "03",
    title: "Send to customers",
    environment: "Production",
    detail: "Unlock real delivery only after the sender has earned the system's trust.",
    technical: "Real recipients · reputation controls",
    takeaway: "The same setup is now ready for live transactional email.",
    tone: "#6aa8ff",
  },
];

function SandboxProductionModel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = uxModelStages[activeIndex];
  const StageIcon = activeIndex === 0 ? Mail : activeIndex === 1 ? ShieldCheck : Send;

  return (
    <div className="content-stretch flex flex-col gap-[26px] items-start relative shrink-0 w-full" data-name="sandbox-production-model">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[18px] w-full">
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[30px] text-[#f2f1ec] text-[20px] max-w-[590px]">
          Think of Sandbox as a private rehearsal. Test the whole email experience with your team before a single message can reach a customer.
        </p>
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[18px] text-[#6f6f68] text-[10px] tracking-[1px] uppercase max-w-[260px] lg:text-right">
          Select a stage to see who can receive the email
        </p>
      </div>

      <div className="bg-[#10100f] overflow-hidden relative rounded-[18px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] min-h-[520px] relative">
          <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-[rgba(242,241,236,0.1)] p-[14px] gap-[8px]">
            {uxModelStages.map((step, index) => {
              const selected = activeIndex === index;
              return (
                <button
                  aria-pressed={selected}
                  className="flex lg:flex-1 items-center lg:items-start gap-[14px] p-[15px] lg:p-[18px] rounded-[12px] text-left transition-all duration-300 w-full"
                  key={step.number}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    background: selected ? `${step.tone}12` : "transparent",
                    border: `1px solid ${selected ? `${step.tone}66` : "transparent"}`,
                  }}
                  type="button"
                >
                  <span className="font-['Space_Mono:Bold',sans-serif] text-[11px] mt-[2px]" style={{ color: selected ? step.tone : "#6f6f68" }}>{step.number}</span>
                  <span className="flex flex-col gap-[5px] min-w-0">
                    <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[20px] text-[#f2f1ec] text-[15px]">{step.title}</span>
                    <span className="hidden lg:block font-['Space_Grotesk:Regular',sans-serif] leading-[18px] text-[#777770] text-[12px]">{step.detail}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col p-[20px] sm:p-[28px] lg:p-[36px] gap-[28px] min-w-0">
            <div className="flex items-start justify-between gap-[18px]">
              <div className="flex flex-col gap-[6px]">
                <p className="font-['Space_Mono:Regular',sans-serif] text-[10px] tracking-[1.2px] uppercase" style={{ color: active.tone }}>{active.environment}</p>
                <h3 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[#f2f1ec] text-[26px] sm:text-[32px] leading-[1.1]">{active.title}</h3>
              </div>
              <div className="flex items-center justify-center rounded-full size-[46px] shrink-0" style={{ background: `${active.tone}18`, color: active.tone }}>
                <StageIcon aria-hidden size={21} strokeWidth={1.8} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_74px_1fr] items-stretch gap-[12px] md:gap-[16px] flex-1">
              <div className="bg-[#0a0a0a] rounded-[14px] p-[20px] sm:p-[24px] flex flex-col justify-between gap-[28px] border border-[rgba(242,241,236,0.09)]">
                <div className="flex items-center gap-[12px]">
                  <div className="size-[42px] rounded-full bg-[rgba(204,110,248,0.14)] text-[#cc6ef8] flex items-center justify-center"><Send aria-hidden size={18} /></div>
                  <div>
                    <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[#f2f1ec] text-[15px]">Your product</p>
                    <p className="font-['Space_Grotesk:Regular',sans-serif] text-[#777770] text-[12px] mt-[2px]">Order confirmation ready</p>
                  </div>
                </div>
                <div className="rounded-[10px] bg-[#141414] px-[14px] py-[12px] flex items-center gap-[10px]">
                  <Mail aria-hidden size={16} style={{ color: active.tone }} />
                  <span className="font-['Space_Mono:Regular',sans-serif] text-[#a0a09a] text-[10px]">Your order is confirmed</span>
                </div>
              </div>

              <div className="relative min-h-[64px] md:min-h-0 flex items-center justify-center overflow-hidden">
                <div className="absolute h-full md:h-px w-px md:w-full bg-[rgba(242,241,236,0.12)]" />
                <div className="relative size-[42px] rounded-full bg-[#181817] flex items-center justify-center transition-colors duration-300" style={{ color: active.tone, boxShadow: `0 0 24px ${active.tone}22` }}>
                  {activeIndex === 1 ? <ShieldCheck aria-hidden size={18} /> : <Send aria-hidden className="rotate-90 md:rotate-0" size={17} />}
                </div>
              </div>

              <div className="bg-[#0a0a0a] rounded-[14px] p-[20px] sm:p-[24px] flex flex-col gap-[18px] border border-[rgba(242,241,236,0.09)]">
                <div className="flex items-center justify-between gap-[10px]">
                  <p className="font-['Space_Mono:Regular',sans-serif] text-[#6f6f68] text-[10px] tracking-[1px] uppercase">Who receives it?</p>
                  {activeIndex < 2 && <LockKeyhole aria-label="Customer delivery locked" size={15} className="text-[#6f6f68]" />}
                </div>

                {activeIndex === 0 && (
                  <div className="flex flex-col gap-[14px]">
                    <div className="flex items-center gap-[12px] text-[#ff9f43]"><UserCheck aria-hidden size={24} /><div><p className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[#f2f1ec] text-[15px]">You and your team</p><p className="text-[#777770] text-[12px] mt-[2px]">Approved test inboxes only</p></div></div>
                    <div className="opacity-35 flex items-center gap-[12px]"><Users aria-hidden size={24} /><div><p className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[#a0a09a] text-[15px]">Customers</p><p className="text-[#777770] text-[12px] mt-[2px]">Protected from test messages</p></div></div>
                  </div>
                )}
                {activeIndex === 1 && (
                  <div className="flex flex-col items-start gap-[13px]">
                    <div className="size-[44px] rounded-full bg-[rgba(204,110,248,0.14)] text-[#cc6ef8] flex items-center justify-center"><ShieldCheck aria-hidden size={22} /></div>
                    <div><p className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[#f2f1ec] text-[15px]">Mailtarget checks the sender</p><p className="text-[#777770] text-[12px] leading-[18px] mt-[4px]">The business and its sending address must match before access opens.</p></div>
                  </div>
                )}
                {activeIndex === 2 && (
                  <div className="flex flex-col gap-[14px]">
                    <div className="flex items-center gap-[12px] text-[#6aa8ff]"><Users aria-hidden size={24} /><div><p className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[#f2f1ec] text-[15px]">Real customers</p><p className="text-[#777770] text-[12px] mt-[2px]">Live transactional delivery</p></div></div>
                    <div className="flex items-center gap-[8px] text-[#68d391] text-[12px]"><Check aria-hidden size={15} /><span>Sender verified and ready</span></div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[10px] pt-[18px] border-t border-[rgba(242,241,236,0.09)]">
              <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium text-[#f2f1ec] text-[14px] leading-[20px]">{active.takeaway}</p>
              <p className="font-['Space_Mono:Regular',sans-serif] text-[#6f6f68] text-[9px] tracking-[0.6px] uppercase shrink-0">{active.technical}</p>
            </div>
          </div>
        </div>
        <div aria-hidden className="absolute border border-[rgba(242,241,236,0.12)] inset-0 pointer-events-none rounded-[18px]" />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <div className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#f2f1ec] text-[18px] w-full whitespace-pre-wrap">
        <p className="leading-[1.6] mb-0">The Problem: Transactional email is trust-sensitive. Misconfiguration can flood real users with test emails or get the domain flagged as spam. Competitors like SendGrid gate users behind domain verification before sending anything, creating friction before users understand the product.</p>
        <p className="leading-[1.6] mb-0">​</p>
        <p className="leading-[1.6]">The Decision: Mailtarget uses a two-environment model. Every new user starts in Sandbox — safe, limited (300 emails/day, authorized recipients only) — where they can fully integrate and test without risk. Upgrading to Production requires identity verification and domain authentication, but users already understand the product by then. This lowers the barrier to entry while protecting deliverability. The environment badge (Sandbox orange / Production blue) is permanently visible in the top-right corner.</p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#cc6ef8] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">01</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px] whitespace-nowrap">Sign Up</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#a0a09a] text-[14px] w-[min-content]">Email or Google OAuth</p>
    </div>
  );
}

function StepCard() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[8px] shrink-0 w-full" data-name="step-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative size-full">
          <Frame15 />
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#cc6ef8] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">02</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px] whitespace-nowrap">Sandbox Config</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#a0a09a] text-[14px] w-[min-content]">API key plus Base URL, 300 emails/day limit</p>
    </div>
  );
}

function StepCard1() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[8px] shrink-0 w-full" data-name="step-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative size-full">
          <Frame17 />
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#cc6ef8] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">03</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px] whitespace-nowrap">Data Completion</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#a0a09a] text-[14px] w-[min-content]">2-step form Your Details and Your Business</p>
    </div>
  );
}

function StepCard2() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[8px] shrink-0 w-full" data-name="step-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative size-full">
          <Frame19 />
          <Frame20 />
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#cc6ef8] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">04</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px] whitespace-nowrap">Domain Authentication</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#a0a09a] text-[14px] w-[min-content]">Configure CNAME/TXT DNS records</p>
    </div>
  );
}

function StepCard3() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[8px] shrink-0 w-full" data-name="step-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative size-full">
          <Frame21 />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#cc6ef8] content-stretch flex items-center justify-center relative rounded-[100px] shrink-0 size-[32px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">05</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px] whitespace-nowrap">Production Unlocked</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#a0a09a] text-[14px] w-[min-content]">Unlimited recipients, billing activated</p>
    </div>
  );
}

function StepCard4() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[8px] shrink-0 w-full" data-name="step-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[20px] relative size-full">
          <Frame23 />
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px relative" data-name="Frame">
      <StepCard />
      <StepCard1 />
      <StepCard2 />
      <StepCard3 />
      <StepCard4 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Component02UxModel() {
  return (
    <div className="bg-[#0c0c0b] content-stretch flex flex-col gap-[48px] items-start px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="02-ux-model">
      <SectionHeader2 />
      <SandboxProductionModel />
    </div>
  );
}

function SectionHeader3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="section-header">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">03 — Research</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.1] min-w-full relative shrink-0 text-[#f2f1ec] text-[46px] w-[min-content]">What competitors got right and wrong</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-[#0c0c0b] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start p-[20px] relative size-full">
        <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[14px] whitespace-nowrap">MailerSend</p>
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#f2f1ec] text-[15px] w-[min-content]">Anti-Spam Policy modal on first login builds trust before any sending happens. Adopted a similar onboarding notice in Sandbox welcome flow.</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#0c0c0b] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start p-[20px] relative size-full">
        <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[14px] whitespace-nowrap">SendGrid/Mailchimp</p>
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#f2f1ec] text-[15px] w-[min-content]">Both require domain verification before sending anything, creating friction. Mailtarget resolves this by letting users send limited first.</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#0c0c0b] relative rounded-[12px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start p-[20px] relative size-full">
        <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[14px] whitespace-nowrap">Common gap</p>
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#f2f1ec] text-[15px] w-[min-content]">None clearly communicate the developer/admin split in navigation. Mailtarget top-nav (Analytics/Activity/Configuration) serves both audiences without a role-switch.</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Frame">
      <Frame27 />
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[64px] items-center relative shrink-0 w-full" data-name="Frame">
      <div className="h-[280px] relative rounded-[12px] shrink-0 w-[544px]" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <img alt="" className="absolute h-[104.33%] left-0 max-w-none top-[0.02%] w-full" src={imgRectangle} />
        </div>
      </div>
      <Frame26 />
    </div>
  );
}

function Component03Research() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="03-research">
      <SectionHeader3 />
      <Frame25 />
    </div>
  );
}

function SectionHeader4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="section-header">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">04 — Decisions</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.1] min-w-full relative shrink-0 text-[#f2f1ec] text-[46px] w-[min-content]">Three moments the product had to get right</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <SectionHeader4 />
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a0a09a] text-[18px] w-full">Each surface resolves either a developer task or an operations control, using the same visual language. Below: the question, the decision, and the screen evidence.</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">The Problem</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#f2f1ec] text-[15px] w-[min-content]">Developers need to know are my emails actually being delivered — without visibility into injection, delivery, opens and clicks they are debugging blind.</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">The Design Decision</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#f2f1ec] text-[15px] w-[min-content]">Analytics shows 5 real-time metrics — Injected/Sent/Opened/Clicked/Bounced — in a multi-line time-series chart. Developers filter by time range, IP Pool, and status. Real numbers: 28.7k injected, 27.2k sent, 16.3k opened, 8.1k clicked, 492 bounced.</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame32 />
      <div className="h-[260px] relative rounded-[12px] shrink-0 w-full" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[12px] size-full" src={imgHeroImg} />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">Activity Log</p>
      <div className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#f2f1ec] text-[15px] w-[min-content]">
        <p className="leading-[1.5] mb-0">Problem: When an email fails, developers need to trace exactly what happened to a specific message — not just aggregate stats.</p>
        <p className="leading-[1.5]">Decision: Activity is an event-level log with Recipient Email, Status, Subject, Sender, Date. Filterable by time range and status. Each row clickable for detailed trace. 14-day history.</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Frame">
      <Frame37 />
      <div className="h-[220px] relative rounded-[12px] shrink-0 w-full" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[12px] size-full" src={imgRectangle1} />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">Sandbox API Config</p>
      <div className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#f2f1ec] text-[15px] w-[min-content]">
        <p className="leading-[1.5] mb-0">Problem: Developers need to get their first email out as fast as possible. Documentation must be copy-pasteable with real values, not placeholders.</p>
        <p className="leading-[1.5]">Decision: The Configuration screen shows the actual API Key and Base URL with one-click Copy buttons. API Instructions shown in 8+ language tabs.</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative" data-name="Frame">
      <Frame39 />
      <div className="h-[220px] relative rounded-[12px] shrink-0 w-full" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[12px] size-full" src={imgRectangle2} />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame36 />
      <Frame38 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">Sending Domain</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#f2f1ec] text-[15px] w-[min-content]">Users add their own domain and authenticate via DNS records. Status badges (Valid/Invalid/Pending) make state clear.</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative" data-name="Frame">
      <Frame42 />
      <div className="h-[180px] relative rounded-[12px] shrink-0 w-full" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[12px] size-full" src={imgRectangle3} />
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">Webhook</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#f2f1ec] text-[15px] w-[min-content]">Webhooks push email events to any endpoint. Detail view shows Target URL, event selection, and a Test tab to fire payloads.</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative" data-name="Frame">
      <Frame44 />
      <div className="h-[180px] relative rounded-[12px] shrink-0 w-full" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[12px] size-full" src={imgRectangle4} />
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">Billing</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#f2f1ec] text-[15px] w-[min-content]">Shows current plan, exact usage as progress bar, Upcoming Bill calculation, and usage chart. Advanced 50K: IDR 2.8M/year.</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px relative" data-name="Frame">
      <Frame46 />
      <div className="h-[180px] relative rounded-[12px] shrink-0 w-full" data-name="Rectangle">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[12px] size-full" src={imgRectangle5} />
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame41 />
      <Frame43 />
      <Frame45 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">The Problem</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#f2f1ec] text-[15px] w-[min-content]">A single Mailtarget account is used by multiple people — developers, support, finance. All need access but with different permissions.</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">The Design Decision</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#f2f1ec] text-[15px] w-[min-content]">User Management table shows Email, Role, Status, and Invitation date. Below it is a Users Activities audit log showing Login/Logout events with timestamps for compliance.</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame48 />
      <div className="h-[737px] relative rounded-[12px] shrink-0 w-full" data-name="Rectangle">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
          <img alt="" className="absolute h-[145.14%] left-0 max-w-none top-0 w-full" src={imgRectangle6} />
        </div>
      </div>
    </div>
  );
}

function Component04Decisions() {
  return (
    <div className="bg-[#0c0c0b] content-stretch flex flex-col gap-[80px] items-start px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="04-decisions">
      <Frame30 />
      <ProductStories />
      <MoreProductSurfaces />
    </div>
  );
}

const productStories = [
  {
    id: "safe-send",
    number: "01",
    label: "Start safely",
    title: "Give developers a real first send without putting customers at risk.",
    problem: "Asking for full verification before a team can test creates friction. Letting an unverified account email real recipients creates a trust risk.",
    decision: "Sandbox ships with usable API credentials, copyable code samples, a 300-email daily limit, and authorized recipients only.",
    payoff: "Teams can prove the integration works first, then graduate to Production when the sender is trusted.",
    image: imgRectangle2,
    alt: "Mailtarget Sandbox API configuration",
  },
  {
    id: "trace-delivery",
    number: "02",
    label: "Trace delivery",
    title: "Move from aggregate email metrics to a message someone can actually investigate.",
    problem: "A delivery chart tells a team that something changed, but not what happened to a specific recipient or notification.",
    decision: "Activity records the recipient, status, subject, sender, and time. Filters narrow the search and each row can lead to a detailed trace.",
    payoff: "Support and developers can answer a delivery question without reconstructing an event from partial signals.",
    image: imgRectangle1,
    alt: "Mailtarget Activity log",
  },
  {
    id: "run-account",
    number: "03",
    label: "Run the account",
    title: "Let one account serve developers, support, and finance without losing control.",
    problem: "A shared email platform needs more than API tools: teams must know who can access it, what they changed, and how usage is managed.",
    decision: "Account settings combine team members, roles, invitation state, and a user-activity audit trail in one operational surface.",
    payoff: "Daily account control stays legible for operations teams while developers keep moving through the integration work.",
    image: imgRectangle6,
    alt: "Mailtarget account settings and user activity",
  },
];

function ProductStories() {
  const [activeId, setActiveId] = useState(productStories[0].id);
  const active = productStories.find((story) => story.id === activeId) ?? productStories[0];

  return (
    <section className="border border-[rgba(255,255,255,0.1)] rounded-[12px] w-full" data-name="mailtarget-product-stories">
      <div className="border-b border-[rgba(255,255,255,0.1)] flex items-center justify-between px-[32px] py-[24px]">
        <div>
          <p className="font-['Space_Mono:Regular',sans-serif] text-[#cc6ef8] text-[12px] tracking-[1.7px] uppercase">Three product stories</p>
          <p className="font-['Space_Grotesk:Regular',sans-serif] mt-[8px] text-[#a0a09a] text-[16px]">Choose a moment to inspect the reasoning and the screen that carries it.</p>
        </div>
        <span className="font-['Space_Mono:Regular',sans-serif] text-[#73736d] text-[11px]">{active.number} / 03</span>
      </div>
      <div className="flex gap-[32px] p-[32px]">
        <div aria-label="Product stories" className="flex flex-col gap-[8px] shrink-0 w-[286px]" role="tablist">
          {productStories.map((story) => {
            const isActive = story.id === active.id;
            return (
              <button
                aria-controls={`mailtarget-story-${story.id}`}
                aria-selected={isActive}
                className={`border cursor-pointer flex flex-col gap-[8px] items-start p-[18px] text-left transition-colors w-full ${isActive ? "bg-[rgba(204,110,248,0.1)] border-[#cc6ef8]" : "bg-transparent border-[rgba(255,255,255,0.1)] hover:border-[rgba(204,110,248,0.55)]"}`}
                key={story.id}
                onClick={() => setActiveId(story.id)}
                role="tab"
                type="button"
              >
                <span className="font-['Space_Mono:Regular',sans-serif] text-[#cc6ef8] text-[11px]">{story.number}</span>
                <span className="font-['Space_Grotesk:Medium',sans-serif] text-[#f2f1ec] text-[17px]">{story.label}</span>
              </button>
            );
          })}
        </div>
        <div className="min-w-0" id={`mailtarget-story-${active.id}`} role="tabpanel">
          <p className="font-['Space_Mono:Regular',sans-serif] text-[#cc6ef8] text-[12px] tracking-[1.7px] uppercase">{active.label}</p>
          <h3 className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.1] mt-[12px] text-[#f2f1ec] text-[32px]">{active.title}</h3>
          <div className="grid grid-cols-2 gap-[16px] mt-[24px]">
            <div className="border border-[rgba(255,255,255,0.1)] p-[18px]">
              <p className="font-['Space_Mono:Regular',sans-serif] text-[#9a9a93] text-[11px] tracking-[1.4px] uppercase">The problem</p>
              <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[1.5] mt-[10px] text-[#f2f1ec] text-[15px]">{active.problem}</p>
            </div>
            <div className="border border-[rgba(204,110,248,0.34)] p-[18px]">
              <p className="font-['Space_Mono:Regular',sans-serif] text-[#cc6ef8] text-[11px] tracking-[1.4px] uppercase">The design response</p>
              <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[1.5] mt-[10px] text-[#f2f1ec] text-[15px]">{active.decision}</p>
            </div>
          </div>
          <div className="border-l-2 border-[#cc6ef8] mt-[18px] pl-[14px]">
            <p className="font-['Space_Grotesk:Medium',sans-serif] leading-[1.45] text-[#d9d5dc] text-[16px]">{active.payoff}</p>
          </div>
          <div className="bg-[#f2f5f8] cursor-zoom-in h-[350px] mt-[24px] overflow-hidden rounded-[8px]" data-preview-src={active.image} data-preview-title={active.alt}>
            <img alt={active.alt} className="block cursor-zoom-in h-full object-contain w-full" src={active.image} />
          </div>
        </div>
      </div>
    </section>
  );
}

function MoreProductSurfaces() {
  const surfaces = [
    { image: imgRectangle3, title: "Sending domains", detail: "Status makes authentication legible." },
    { image: imgRectangle4, title: "Webhooks", detail: "Events can be tested before they reach a team's endpoint." },
    { image: imgRectangle5, title: "Billing", detail: "Usage and upcoming cost stay visible before a surprise bill." },
  ];

  return (
    <section className="w-full" data-name="mailtarget-more-surfaces">
      <div className="flex items-end justify-between mb-[24px]">
        <div>
          <p className="font-['Space_Mono:Regular',sans-serif] text-[#cc6ef8] text-[12px] tracking-[1.7px] uppercase">More product surfaces</p>
          <h3 className="font-['Space_Grotesk:Medium',sans-serif] font-medium mt-[10px] text-[#f2f1ec] text-[28px]">Supporting controls, kept in context.</h3>
        </div>
        <p className="font-['Space_Mono:Regular',sans-serif] text-[#73736d] text-[11px]">Click a screen to inspect it</p>
      </div>
      <div className="grid grid-cols-3 gap-[20px]">
        {surfaces.map((surface) => (
          <div className="border border-[rgba(255,255,255,0.1)] overflow-hidden rounded-[8px]" key={surface.title}>
            <div className="bg-[#f2f5f8] cursor-zoom-in h-[190px] overflow-hidden" data-preview-src={surface.image} data-preview-title={surface.title}>
              <img alt={surface.title} className="block cursor-zoom-in h-full object-contain w-full" src={surface.image} />
            </div>
            <div className="p-[18px]">
              <p className="font-['Space_Grotesk:Medium',sans-serif] text-[#f2f1ec] text-[17px]">{surface.title}</p>
              <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[1.45] mt-[7px] text-[#9a9a93] text-[14px]">{surface.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Frame52() {
  return (
    <div className="bg-[#0c0c0b] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col items-center leading-[normal] p-[24px] relative size-full whitespace-nowrap">
          <p className="font-['Space_Mono:Bold',sans-serif] not-italic relative shrink-0 text-[#cc6ef8] text-[38px]">480+</p>
          <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#a0a09a] text-[14px]">screens in redesign scope</p>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[#0c0c0b] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col items-center leading-[normal] p-[24px] relative size-full whitespace-nowrap">
          <p className="font-['Space_Mono:Bold',sans-serif] not-italic relative shrink-0 text-[#cc6ef8] text-[38px]">3</p>
          <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#a0a09a] text-[14px]">core flows aligned</p>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#0c0c0b] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col items-center leading-[normal] p-[24px] relative size-full whitespace-nowrap">
          <p className="font-['Space_Mono:Bold',sans-serif] not-italic relative shrink-0 text-[#cc6ef8] text-[38px]">2</p>
          <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#a0a09a] text-[14px]">release environments</p>
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#0c0c0b] flex-[1_0_0] min-w-px relative rounded-[12px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-col items-center size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col items-center leading-[normal] p-[24px] relative size-full whitespace-nowrap">
          <p className="font-['Space_Mono:Bold',sans-serif] not-italic relative shrink-0 text-[#cc6ef8] text-[38px]">18+</p>
          <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#a0a09a] text-[14px]">public site pages designed</p>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame52 />
      <Frame53 />
      <Frame54 />
      <Frame55 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#f2f1ec] text-[28px] w-full">Internally, one component language aligned campaign builder, contacts, and automation. Externally, the marketing site translated the same product into plain choices: deliver email reliably, create relevant messages, and optimize sending. Developers could start safely in Sandbox; teams with bigger needs could talk to sales. One product story, from first evaluation to daily operations.</p>
    </div>
  );
}

function Component05Outcomes() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="05-outcomes">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">05 — One Product, Publicly Explained</p>
      <Frame51 />
      <Frame57 />
    </div>
  );
}

function NL() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="nL">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[12px] tracking-[0.72px]">Next project →</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[40px] tracking-[-0.8px]">Read/See Website</p>
    </div>
  );
}

function Arr() {
  return (
    <div className="bg-[#0a0a0a] relative rounded-[22px] shrink-0 size-[44px]" data-name="arr">
      <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cc6ef8] text-[18px] whitespace-nowrap">↗</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[22px]" />
    </div>
  );
}

function NRow() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip py-[56px] relative shrink-0 w-[1152px]" data-name="nRow">
      <NL />
      <Arr />
    </div>
  );
}

function Foot() {
  return (
    <div className="bg-[#0a0a0a] h-[56px] relative shrink-0 w-full" data-name="foot">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex font-['Space_Mono:Regular',sans-serif] items-center justify-between leading-[normal] not-italic px-[64px] py-[16px] relative size-full text-[11px] whitespace-nowrap">
          <p className="relative shrink-0 text-[#6f6f68]">© 2026 Dheoryan Putra Arsi</p>
          <p className="relative shrink-0 text-[#6f6f68]">{`Designed & built with intent`}</p>
          <p className="relative shrink-0 text-[#9a9a93]">Back to top ↑</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(242,241,236,0.08)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0a0a0a] relative shrink-0 w-[1280px]" data-name="footer">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[64px] relative rounded-[inherit] size-full">
        <NRow />
        <Foot />
      </div>
      <div aria-hidden className="absolute border-[rgba(242,241,236,0.08)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

export default function CaseStudyMailtargetApp() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start relative size-full" data-name="case-study-mailtarget-app">
      <Nav />
      <Hero />
      <Component01Context />
      <Component01Context1 />
      <Component02UxModel />
      <Component03Research />
      <Component04Decisions />
      <Component05Outcomes />
      <Footer />
    </div>
  );
}
