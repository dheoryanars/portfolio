const imgIc = "/case-studies/readsee-dashboard/image-01.png";
const imgIc1 = "/case-studies/readsee-dashboard/image-02.png";
const imgIc2 = "/case-studies/readsee-dashboard/image-03.png";
const imgIc3 = "/case-studies/readsee-dashboard/image-04.png";
const imgIc4 = "/case-studies/readsee-dashboard/image-05.png";
const imgIc5 = "/case-studies/readsee-dashboard/image-06.png";
const imgIc6 = "/case-studies/readsee-dashboard/image-07.png";
const imgIc7 = "/case-studies/readsee-dashboard/image-08.png";
const imgIc8 = "/case-studies/readsee-dashboard/image-09.png";
const imgIc9 = "/case-studies/readsee-dashboard/image-10.png";

function Nl() {
  return (
    <div className="content-stretch flex gap-[11px] items-center overflow-clip relative shrink-0" data-name="nl">
      <div className="relative shrink-0 size-[9px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #CC6EF8)" id="Ellipse" r="4.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px] whitespace-nowrap">Dheoryan Putra Arsi</p>
    </div>
  );
}

function Nt() {
  return (
    <div className="relative rounded-[40px] shrink-0" data-name="nt">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] whitespace-nowrap">{`Let's talk`}</p>
      </div>
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between overflow-clip px-[64px] relative shrink-0 w-[1280px]" data-name="nav">
      <Nl />
      <Nt />
    </div>
  );
}

function Mc() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">ROLE</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">Product Designer</p>
    </div>
  );
}

function Mc1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">PRODUCT</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">Read/See</p>
    </div>
  );
}

function Mc2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">YEAR</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">2022–2023</p>
    </div>
  );
}

function Mc3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">TYPE</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">SaaS Dashboard</p>
    </div>
  );
}

function Mc4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">SCOPE</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">700+ Screens · 4 Phases</p>
    </div>
  );
}

function Meta() {
  return (
    <div className="[word-break:break-word] content-stretch flex h-[56px] items-center justify-between leading-[normal] overflow-clip relative shrink-0 w-[1152px] whitespace-nowrap" data-name="meta">
      <Mc />
      <Mc1 />
      <Mc2 />
      <Mc3 />
      <Mc4 />
    </div>
  );
}

function Ic() {
  return (
    <div className="h-[400px] pointer-events-none relative rounded-[8px] shrink-0 w-[1152px]" data-name="ic">
      <div className="absolute inset-0 overflow-hidden rounded-[8px]">
        <img alt="" className="absolute h-[318.37%] left-0 max-w-none top-[0.08%] w-full" src={imgIc} />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.08)] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[28px] items-start overflow-clip pb-[80px] pt-[120px] px-[64px] relative shrink-0 w-[1280px]" data-name="hero">
      <div className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#f2f1ec] text-[82px] tracking-[-2.46px] w-[1152px]">
        <p className="leading-[80px] mb-0">Read/See</p>
        <p className="leading-[80px]">Dashboard</p>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cc6ef8] text-[22px] whitespace-nowrap">Full product design for a Customer Data Platform — 700+ screens across all modules</p>
      <Meta />
      <Ic />
    </div>
  );
}

function OvG() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[60px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="ovG">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[46px] relative shrink-0 text-[#f2f1ec] text-[40px] tracking-[-0.8px] w-[280px]">The problem</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9a9a93] text-[17px] w-[812px]">Read/See needed a full CDP product from zero — no existing design system, no established patterns, and a scope covering authentication through campaign activation across 700+ screens in 4 phases.</p>
    </div>
  );
}

function P() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Customer Data Platform</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P1() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">700+ Screens</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P2() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Green Brand System</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P3() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Lo-Fi + Hi-Fi</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P4() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Onboarding Flow</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function Pills() {
  return (
    <div className="content-start flex flex-wrap gap-[10px_12px] items-start overflow-clip relative shrink-0" data-name="pills">
      <P />
      <P1 />
      <P2 />
      <P3 />
      <P4 />
    </div>
  );
}

function Ov() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[36px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="ov">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">00 — The Problem</p>
      <OvG />
      <Pills />
    </div>
  );
}

function OvG1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[60px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="ovG">
      <div className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#f2f1ec] text-[40px] tracking-[-0.8px] w-[280px]">
        <p className="leading-[46px] mb-0">The</p>
        <p className="leading-[46px]">product</p>
      </div>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9a9a93] text-[17px] w-[812px]">Read/See is a Customer Data Platform (CDP) that enables businesses to connect data sources, build unified customer profiles, track events, and activate personalised campaigns. The project covered the full product design — from Lo-Fi wireframes through Hi-Fi execution to a refined final brand — encompassing 700+ screens across authentication, onboarding, dashboard, profiles, connections, events, and activation.</p>
    </div>
  );
}

function P5() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Customer Data Platform</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P6() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">700+ Screens</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P7() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Green Brand System</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P8() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Lo-Fi + Hi-Fi</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P9() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Onboarding Flow</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function Pills1() {
  return (
    <div className="content-start flex flex-wrap gap-[10px_12px] items-start overflow-clip relative shrink-0" data-name="pills">
      <P5 />
      <P6 />
      <P7 />
      <P8 />
      <P9 />
    </div>
  );
}

function Ov1() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[36px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="ov">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">01 — Overview</p>
      <OvG1 />
      <Pills1 />
    </div>
  );
}

function Col() {
  return (
    <div className="bg-[#141414] content-stretch flex flex-col gap-[14px] h-[280px] items-start overflow-clip px-[28px] py-[32px] relative shrink-0" data-name="col-01">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[13px] whitespace-nowrap">01</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[20px] whitespace-nowrap">Lo-Fi Wireframes</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal h-[10px] leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[231.25px]">291 structural wireframes defining the product layout, navigation hierarchy, content zones, and interaction states before visual direction.</p>
    </div>
  );
}

function Col1() {
  return (
    <div className="bg-[#0c0c0b] content-stretch flex flex-col gap-[14px] h-[280px] items-start overflow-clip px-[28px] py-[32px] relative shrink-0" data-name="col-02">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[13px] whitespace-nowrap">02</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[20px] whitespace-nowrap">Hi-Fi Design</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal h-[10px] leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[231.25px]">First hi-fi pass establishing the green brand identity — typography, component library, spacing system, and visual language across all modules.</p>
    </div>
  );
}

function Col2() {
  return (
    <div className="bg-[#141414] content-stretch flex flex-col gap-[14px] h-[280px] items-start overflow-clip px-[28px] py-[32px] relative shrink-0" data-name="col-03">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[13px] whitespace-nowrap">03</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[20px] whitespace-nowrap">New Brand</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal h-[10px] leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[231.25px]">Refined and expanded brand iteration — 430+ screens covering every state, edge case, empty state, error, tooltip, and onboarding step.</p>
    </div>
  );
}

function Col3() {
  return (
    <div className="bg-[#0c0c0b] content-stretch flex flex-col gap-[14px] h-[280px] items-start overflow-clip px-[28px] py-[32px] relative shrink-0" data-name="col-04">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[13px] whitespace-nowrap">04</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[20px] whitespace-nowrap">{`Onboarding & Review`}</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal h-[10px] leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[231.25px]">Dedicated onboarding flow (67 screens), interactive prototype for stakeholder review, and implementation-checking against the live product.</p>
    </div>
  );
}

function PRow() {
  return (
    <div className="bg-[rgba(242,241,236,0.08)] content-stretch flex gap-px h-[280px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[1152px]" data-name="pRow">
      <Col />
      <Col1 />
      <Col2 />
      <Col3 />
    </div>
  );
}

function Process() {
  return (
    <div className="[word-break:break-word] bg-[#0c0c0b] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="process">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">02 — Design Process</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[46px] tracking-[-0.92px] whitespace-nowrap">How the product was built</p>
      <PRow />
    </div>
  );
}

function Ic1() {
  return (
    <div className="h-[280px] relative shrink-0 w-[1152px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc} />
    </div>
  );
}

function L() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="l">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px] whitespace-nowrap">Dashboard — Insights</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9a9a93] text-[13px] w-[682px]">{`Customer analytics: line chart (transactions), donut (best-selling products), value metrics (events/profiles), bar chart — all with "Activate" CTA per insight`}</p>
    </div>
  );
}

function R1I() {
  return (
    <div className="[word-break:break-word] content-stretch flex h-[120px] items-center justify-between overflow-clip px-[24px] py-[20px] relative shrink-0 w-[1152px]" data-name="r1i">
      <L />
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6f6f68] text-[12px] whitespace-nowrap">1280 × 760px</p>
    </div>
  );
}

function R() {
  return (
    <div className="bg-[#141414] h-[400px] relative rounded-[8px] shrink-0 w-[1152px]" data-name="r1">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic1 />
        <R1I />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Ic2() {
  return (
    <div className="h-[240px] relative shrink-0 w-[368px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc1} />
    </div>
  );
}

function I() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative shrink-0 w-[368px]" data-name="i">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px] whitespace-nowrap">Connection — Sources</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#9a9a93] text-[12px] w-[328px]">{`Connect Sources — empty state with "Add Sources" CTA and product tour tooltip guiding first-time users`}</p>
    </div>
  );
}

function C() {
  return (
    <div className="bg-[#141414] h-[360px] relative rounded-[8px] shrink-0 w-[368px]" data-name="c">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic2 />
        <I />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Ic3() {
  return (
    <div className="h-[240px] relative shrink-0 w-[368px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc2} />
    </div>
  );
}

function I1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative shrink-0 w-[368px]" data-name="i">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px] whitespace-nowrap">Connection — Destinations</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#9a9a93] text-[12px] w-[328px]">{`Connect Destinations — empty state with guided tooltip, "Add Destinations" CTA for activation channel setup`}</p>
    </div>
  );
}

function C1() {
  return (
    <div className="bg-[#141414] h-[360px] relative rounded-[8px] shrink-0 w-[368px]" data-name="c">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic3 />
        <I1 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Ic4() {
  return (
    <div className="h-[240px] relative shrink-0 w-[368px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc3} />
    </div>
  );
}

function I2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative shrink-0 w-[368px]" data-name="i">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px] whitespace-nowrap">Connection — Data Entity</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#9a9a93] text-[12px] w-[328px]">Custom Events table — event name, description, status (Visible), volume (43.93K), and query count</p>
    </div>
  );
}

function C2() {
  return (
    <div className="bg-[#141414] h-[360px] relative rounded-[8px] shrink-0 w-[368px]" data-name="c">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic4 />
        <I2 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ConRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="conRow">
      <C />
      <C1 />
      <C2 />
    </div>
  );
}

function Ic5() {
  return (
    <div className="h-[260px] relative shrink-0 w-[564px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc4} />
    </div>
  );
}

function I3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative shrink-0 w-[564px]" data-name="i2">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px] whitespace-nowrap">Profiles — List View</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#9a9a93] text-[12px] w-[524px]">All Profiles list: Name, Email Address, Updated at, Country, Region — with segment, property, and filter controls</p>
    </div>
  );
}

function C3() {
  return (
    <div className="bg-[#141414] h-[380px] relative rounded-[8px] shrink-0 w-[564px]" data-name="c2">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic5 />
        <I3 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Ic6() {
  return (
    <div className="h-[260px] relative shrink-0 w-[564px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc5} />
    </div>
  );
}

function I4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative shrink-0 w-[564px]" data-name="i2">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px] whitespace-nowrap">Single Customer View</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#9a9a93] text-[12px] w-[524px]">Detailed profile for Sesilia — Activity timeline (Visit Product Page, Buy, Add to Cart) with full event properties: Product, Amount, Channel, Color, Size</p>
    </div>
  );
}

function C4() {
  return (
    <div className="bg-[#141414] h-[380px] relative rounded-[8px] shrink-0 w-[564px]" data-name="c2">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic6 />
        <I4 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ProfRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="profRow">
      <C3 />
      <C4 />
    </div>
  );
}

function Screens() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="screens">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">03 — Key Screens</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[46px] tracking-[-0.92px] whitespace-nowrap">The core product surfaces</p>
      <R />
      <ConRow />
      <ProfRow />
    </div>
  );
}

function Ic7() {
  return (
    <div className="h-[300px] relative shrink-0 w-[564px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc6} />
    </div>
  );
}

function I5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start p-[24px] relative shrink-0 w-[564px]" data-name="i3">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">Sign Up</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9a9a93] text-[11px] w-[230px]">{`Email + Google OAuth — "Create your Free Account". Clean, minimal auth with Terms link`}</p>
    </div>
  );
}

function C5() {
  return (
    <div className="bg-[#141414] h-[360px] relative rounded-[8px] shrink-0 w-[270px]" data-name="c3">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic7 />
        <I5 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Ic8() {
  return (
    <div className="h-[300px] relative shrink-0 w-[564px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc7} />
    </div>
  );
}

function I6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start p-[24px] relative shrink-0 w-[564px]" data-name="i3">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">Complete Profile</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9a9a93] text-[11px] w-[230px]">Company profile form (Step 2/2) — Company Name, Website, Industry, Country, City, Address, Postal Code</p>
    </div>
  );
}

function C6() {
  return (
    <div className="bg-[#141414] h-[360px] relative rounded-[8px] shrink-0 w-[270px]" data-name="c3">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic8 />
        <I6 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Ic9() {
  return (
    <div className="h-[300px] relative shrink-0 w-[564px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc8} />
    </div>
  );
}

function I7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start p-[24px] relative shrink-0 w-[564px]" data-name="i3">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">Dashboard — First Login</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9a9a93] text-[11px] w-[230px]">{`Welcome state: "Complete your profile" task card, Knowledge Base with video, rewards checklist (Complete Profile / Product Tour / All Tasks)`}</p>
    </div>
  );
}

function C7() {
  return (
    <div className="bg-[#141414] h-[360px] relative rounded-[8px] shrink-0 w-[270px]" data-name="c3">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic9 />
        <I7 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Ic10() {
  return (
    <div className="h-[300px] relative shrink-0 w-[564px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc9} />
    </div>
  );
}

function I8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start p-[24px] relative shrink-0 w-[564px]" data-name="i3">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">Connection Sources — Tour</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9a9a93] text-[11px] w-[230px]">{`Product tour in progress: "Documentation" tooltip → "Destination" — step-by-step tooltip-guided feature introduction`}</p>
    </div>
  );
}

function C8() {
  return (
    <div className="bg-[#141414] h-[360px] relative rounded-[8px] shrink-0 w-[270px]" data-name="c3">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic10 />
        <I8 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ObRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="obRow">
      <C5 />
      <C6 />
      <C7 />
      <C8 />
    </div>
  );
}

function Onboard() {
  return (
    <div className="bg-[#0c0c0b] content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="onboard">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">04 — Onboarding Experience</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[46px] tracking-[-0.92px] whitespace-nowrap">Getting users to first value</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9a9a93] text-[17px] w-[1152px]">A guided onboarding flow taking new users from sign-up through company profile completion to their first connection — with tooltip-driven product tours on Sources and Destinations, a Knowledge Base panel, and a gamified reward system (Get an X Reward) to drive feature adoption.</p>
      <ObRow />
      <style>{`
        [data-name="onboard"] [data-name="obRow"] {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          overflow: visible;
        }

        [data-name="onboard"] [data-name="c3"] {
          width: 564px;
          height: 460px;
        }

        [data-name="onboard"] [data-name="ic"] {
          width: 564px;
          height: 300px;
        }

        [data-name="onboard"] [data-name="i3"] {
          width: 564px;
          padding: 24px;
          gap: 8px;
          overflow: visible;
        }

        [data-name="onboard"] [data-name="i3"] p:first-child {
          font-size: 18px;
          line-height: 1.25;
        }

        [data-name="onboard"] [data-name="i3"] p:last-child {
          width: 500px;
          font-size: 14px;
          line-height: 22px;
        }
      `}</style>
    </div>
  );
}

function N() {
  return (
    <div className="bg-[rgba(204,110,248,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[28px]" data-name="n">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[10px] whitespace-nowrap">01</p>
    </div>
  );
}

function T() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="t">
      <N />
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[16px] whitespace-nowrap">Authentication</p>
    </div>
  );
}

function Sc() {
  return (
    <div className="bg-[#141414] h-[160px] relative rounded-[8px] shrink-0 w-[370px]" data-name="sc">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <T />
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#9a9a93] text-[13px] w-[314px]">Sign-up (email, Google, error states), Login (default, password-only, Google picker), Email verification, Loading page.</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function N1() {
  return (
    <div className="bg-[rgba(204,110,248,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[28px]" data-name="n">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[10px] whitespace-nowrap">02</p>
    </div>
  );
}

function T1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="t">
      <N1 />
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[16px] whitespace-nowrap">Onboarding</p>
    </div>
  );
}

function Sc1() {
  return (
    <div className="bg-[#141414] h-[160px] relative rounded-[8px] shrink-0 w-[370px]" data-name="sc">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <T1 />
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#9a9a93] text-[13px] w-[314px]">Company profile form, Welcome modal, Product tour (Sources + Destinations tooltips), Knowledge Base panel, Gamified reward checklist.</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function N2() {
  return (
    <div className="bg-[rgba(204,110,248,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[28px]" data-name="n">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[10px] whitespace-nowrap">03</p>
    </div>
  );
}

function T2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="t">
      <N2 />
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[16px] whitespace-nowrap">Dashboard</p>
    </div>
  );
}

function Sc2() {
  return (
    <div className="bg-[#141414] h-[160px] relative rounded-[8px] shrink-0 w-[370px]" data-name="sc">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <T2 />
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#9a9a93] text-[13px] w-[314px]">Personalised insight cards — line chart, donut chart, value metrics, bar chart — each with Activate CTA and filter controls.</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function N3() {
  return (
    <div className="bg-[rgba(204,110,248,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[28px]" data-name="n">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[10px] whitespace-nowrap">04</p>
    </div>
  );
}

function T3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="t">
      <N3 />
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[16px] whitespace-nowrap">Profiles</p>
    </div>
  );
}

function Sc3() {
  return (
    <div className="bg-[#141414] h-[160px] relative rounded-[8px] shrink-0 w-[370px]" data-name="sc">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <T3 />
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#9a9a93] text-[13px] w-[314px]">All Profiles list with segment/filter/property controls. Single Customer View with Activity timeline, Activation tab, Notes tab, full event properties.</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function N4() {
  return (
    <div className="bg-[rgba(204,110,248,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[28px]" data-name="n">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[10px] whitespace-nowrap">05</p>
    </div>
  );
}

function T4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="t">
      <N4 />
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[16px] whitespace-nowrap">Connections</p>
    </div>
  );
}

function Sc4() {
  return (
    <div className="bg-[#141414] h-[160px] relative rounded-[8px] shrink-0 w-[370px]" data-name="sc">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <T4 />
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#9a9a93] text-[13px] w-[314px]">Sources (data input), Destinations (activation channels), Data Entity (Custom Events, Default Events, Event Properties, Profile Properties).</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function N5() {
  return (
    <div className="bg-[rgba(204,110,248,0.1)] content-stretch flex items-center justify-center overflow-clip relative rounded-[6px] shrink-0 size-[28px]" data-name="n">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[10px] whitespace-nowrap">06</p>
    </div>
  );
}

function T5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-name="t">
      <N5 />
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[16px] whitespace-nowrap">{`Events & Activate`}</p>
    </div>
  );
}

function Sc5() {
  return (
    <div className="bg-[#141414] h-[160px] relative rounded-[8px] shrink-0 w-[370px]" data-name="sc">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <T5 />
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#9a9a93] text-[13px] w-[314px]">Events tracking surface and Activate campaigns section — completing the Connect → Collect → Activate product loop.</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Sg() {
  return (
    <div className="content-start flex flex-wrap gap-[20px] h-[355px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="sg">
      <Sc />
      <Sc1 />
      <Sc2 />
      <Sc3 />
      <Sc4 />
      <Sc5 />
    </div>
  );
}

function Scope() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="scope">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">05 — Full Scope</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[46px] tracking-[-0.92px] whitespace-nowrap">What was designed</p>
      <Sg />
    </div>
  );
}

function S() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">700+</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Hi-Fi screens</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function S1() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">291</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Lo-Fi frames</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function S2() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">430+</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">New Brand screens</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function S3() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">5</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Core modules</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function S4() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">3</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Design phases</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SRow() {
  return (
    <div className="content-stretch flex gap-[20px] h-[130px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="sRow">
      <S />
      <S1 />
      <S2 />
      <S3 />
      <S4 />
    </div>
  );
}

function Out() {
  return (
    <div className="bg-[#0c0c0b] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="out">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">06 — Outcomes</p>
      <SRow />
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9a9a93] text-[17px] w-[1152px]">The Read/See Dashboard shipped as a complete product — from authentication and onboarding through every core feature surface. Built on a thorough Lo-Fi foundation with 291 wireframes, then executed into 700+ hi-fi screens across a consistent green brand system.</p>
    </div>
  );
}

function NL() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="nL">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[12px] tracking-[0.72px]">Next project →</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[40px] tracking-[-0.8px]">CMIS — Enterprise Suite</p>
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

function Fw() {
  return (
    <div className="bg-[#0a0a0a] relative shrink-0 w-[1280px]" data-name="fw">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[64px] relative rounded-[inherit] size-full">
        <NRow />
        <Foot />
      </div>
      <div aria-hidden className="absolute border-[rgba(242,241,236,0.08)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

export default function CaseStudyReadseeDashboard() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start relative size-full" data-name="case-study-readsee-dashboard">
      <Nav />
      <Hero />
      <Ov />
      <Ov1 />
      <Process />
      <Screens />
      <Onboard />
      <Scope />
      <Out />
      <Fw />
    </div>
  );
}
