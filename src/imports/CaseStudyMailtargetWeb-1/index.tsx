const imgIc = "/case-studies/mailtarget-web/image-01.png";
const imgIc1 = "/case-studies/mailtarget-web/image-02.png";
const imgIc2 = "/case-studies/mailtarget-web/image-03.png";
const imgIc3 = "/case-studies/mailtarget-web/image-04.png";
const imgIc4 = "/case-studies/mailtarget-web/image-05.png";
const imgIc5 = "/case-studies/mailtarget-web/image-06.png";
const imgIc6 = "/case-studies/mailtarget-web/image-07.png";
const imgIc7 = "/case-studies/mailtarget-web/image-08.png";

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
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">UI / Web Designer</p>
    </div>
  );
}

function Mc1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">CLIENT</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">Mailtarget</p>
    </div>
  );
}

function Mc2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">YEAR</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">2023</p>
    </div>
  );
}

function Mc3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">TYPE</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">Marketing Website</p>
    </div>
  );
}

function Mc4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">SCOPE</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">Desktop · Tablet · Mobile</p>
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
    <div className="h-[420px] pointer-events-none relative rounded-[8px] shrink-0 w-[1152px]" data-name="ic">
      <div className="absolute inset-0 overflow-hidden rounded-[8px]">
        <img alt="" className="absolute h-[1448.01%] left-0 max-w-none top-[0.1%] w-full" src={imgIc} />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.08)] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[28px] items-start overflow-clip pb-[80px] pt-[120px] px-[64px] relative shrink-0 w-[1280px]" data-name="hero">
      <div className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#f2f1ec] text-[82px] tracking-[-2.46px] w-[1152px]">
        <p className="leading-[80px] mb-0">Mailtarget</p>
        <p className="leading-[80px]">Website</p>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cc6ef8] text-[22px] whitespace-nowrap">End-to-end marketing website for a transactional email API service</p>
      <Meta />
      <Ic />
    </div>
  );
}

function OvG() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[60px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="ovG">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[46px] relative shrink-0 text-[#f2f1ec] text-[40px] tracking-[-0.8px] w-[280px]">The problem</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9a9a93] text-[17px] w-[812px]">Mailtarget needed a marketing site that clearly positioned its email API for developer buyers while remaining accessible to non-technical marketing decision makers.</p>
    </div>
  );
}

function P() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Marketing Website</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P1() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">15+ Pages</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P2() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">3 Breakpoints</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P3() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Discovery Research</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P4() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Implementation Checking</p>
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
        <p className="leading-[46px]">challenge</p>
      </div>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9a9a93] text-[17px] w-[812px]">Mailtarget needed a complete marketing website communicating its transactional email API to four distinct audiences — developers, startups, e-commerce, and enterprises. The challenge: consistent visual language across 15+ unique pages with audience-specific messaging, delivered as a responsive, implementation-ready design.</p>
    </div>
  );
}

function P5() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Marketing Website</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P6() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">15+ Pages</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P7() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">3 Breakpoints</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P8() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Discovery Research</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P9() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Implementation Checking</p>
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
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[17px] whitespace-nowrap">Homepage</p>
    </div>
  );
}

function Sc() {
  return (
    <div className="bg-[#141414] relative rounded-[8px] shrink-0 w-[564px]" data-name="sc">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <T />
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#9a9a93] text-[13px] w-[508px]">Full-page hero, feature highlights (Email API, SMTP Relay, SDK), code snippet, programming languages, FAQ, and footer.</p>
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
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[17px] whitespace-nowrap">12 Feature Pages</p>
    </div>
  );
}

function Sc1() {
  return (
    <div className="bg-[#141414] relative rounded-[8px] shrink-0 w-[564px]" data-name="sc">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <T1 />
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#9a9a93] text-[13px] w-[508px]">Deep-dive pages for Email API, SMTP Relay, SDK, A/B Testing, Analytics, Design, List Management, Monitoring, Send Time Optimisation, Template, Testing, and Validation.</p>
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
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[17px] whitespace-nowrap">5 Solution Pages</p>
    </div>
  );
}

function Sc2() {
  return (
    <div className="bg-[#141414] relative rounded-[8px] shrink-0 w-[564px]" data-name="sc">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <T2 />
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#9a9a93] text-[13px] w-[508px]">Audience-targeted pages for Startups, Enterprises, E-Commerce, High Volume Senders, and Developers.</p>
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
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[17px] whitespace-nowrap">{`Discovery & Research`}</p>
    </div>
  );
}

function Sc3() {
  return (
    <div className="bg-[#141414] relative rounded-[8px] shrink-0 w-[564px]" data-name="sc">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <T3 />
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#9a9a93] text-[13px] w-[508px]">Competitor audit of Mailchimp, SendGrid, and Mailjet. Feature inventory across 10+ capabilities structured as file artefacts.</p>
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
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[17px] whitespace-nowrap">3-Breakpoint Responsive</p>
    </div>
  );
}

function Sc4() {
  return (
    <div className="bg-[#141414] relative rounded-[8px] shrink-0 w-[564px]" data-name="sc">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <T4 />
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#9a9a93] text-[13px] w-[508px]">All pages at Desktop 1280px, Tablet 768px, and Mobile 360px — 28 desktop, 14 tablet, 20 mobile artboards.</p>
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
      <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[17px] whitespace-nowrap">Implementation Checking</p>
    </div>
  );
}

function Sc5() {
  return (
    <div className="bg-[#141414] relative rounded-[8px] shrink-0 w-[564px]" data-name="sc">
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <T5 />
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#9a9a93] text-[13px] w-[508px]">Side-by-side design vs. live frontend comparison — dedicated page tracking fidelity and flagging deviations.</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Sg() {
  return (
    <div className="content-start flex flex-wrap gap-[20px_24px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="sg">
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
    <div className="bg-[#0c0c0b] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="scope">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">02 — Scope of Work</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[46px] tracking-[-0.92px] whitespace-nowrap">What was designed</p>
      <Sg />
    </div>
  );
}

function Ic1() {
  return (
    <div className="h-[340px] relative shrink-0 w-[1152px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc} />
    </div>
  );
}

function L() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="l">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px] whitespace-nowrap">Homepage</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9a9a93] text-[13px] w-[860px]">{`"Fast, reliable, and effortless transactional email API service" — hero, features, code preview, FAQ`}</p>
    </div>
  );
}

function R1I() {
  return (
    <div className="[word-break:break-word] content-stretch flex h-[120px] items-center justify-between overflow-clip p-[24px] relative shrink-0 w-[1152px]" data-name="r1i">
      <L />
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6f6f68] text-[12px] whitespace-nowrap">Desktop · 6769px</p>
    </div>
  );
}

function R() {
  return (
    <div className="bg-[#141414] h-[460px] relative rounded-[8px] shrink-0 w-[1152px]" data-name="r1">
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
    <div className="h-[320px] relative shrink-0 w-[368px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc1} />
    </div>
  );
}

function I() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative shrink-0 w-[368px]" data-name="i">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[16px] whitespace-nowrap">Email API</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#9a9a93] text-[12px] w-[328px]">Everything developers need — code samples, multiple language tabs, deliverability features, security</p>
    </div>
  );
}

function C() {
  return (
    <div className="bg-[#141414] h-[460px] relative rounded-[8px] shrink-0 w-[368px]" data-name="c">
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
    <div className="h-[320px] relative shrink-0 w-[368px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc2} />
    </div>
  );
}

function I1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative shrink-0 w-[368px]" data-name="i">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[16px] whitespace-nowrap">Email Analytics</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#9a9a93] text-[12px] w-[328px]">Monitor in real time, understand customer behaviour, identify and improve campaigns</p>
    </div>
  );
}

function C1() {
  return (
    <div className="bg-[#141414] h-[460px] relative rounded-[8px] shrink-0 w-[368px]" data-name="c">
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
    <div className="h-[320px] relative shrink-0 w-[368px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc3} />
    </div>
  );
}

function I2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative shrink-0 w-[368px]" data-name="i">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[16px] whitespace-nowrap">Email Design</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#9a9a93] text-[12px] w-[328px]">Drag-and-drop interface, customisable templates, responsive design, AI personalisation</p>
    </div>
  );
}

function C2() {
  return (
    <div className="bg-[#141414] h-[460px] relative rounded-[8px] shrink-0 w-[368px]" data-name="c">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic4 />
        <I2 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="fRow">
      <C />
      <C1 />
      <C2 />
    </div>
  );
}

function Ic5() {
  return (
    <div className="h-[260px] relative shrink-0 w-[368px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc4} />
    </div>
  );
}

function I3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative shrink-0 w-[368px]" data-name="i2">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[16px] whitespace-nowrap">E-Commerce Solutions</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#9a9a93] text-[12px] w-[328px]">Email API for e-commerce — abandoned carts, high-volume transactional email, customer retention</p>
    </div>
  );
}

function C3() {
  return (
    <div className="bg-[#141414] h-[380px] relative rounded-[8px] shrink-0 w-[368px]" data-name="c2">
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
    <div className="h-[260px] relative shrink-0 w-[368px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc5} />
    </div>
  );
}

function I4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative shrink-0 w-[368px]" data-name="i2">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[16px] whitespace-nowrap">Developers Solutions</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#9a9a93] text-[12px] w-[328px]">99.9% uptime SLA, PCI compliant, TLS encryption, multi-language SDKs, 24/7 support</p>
    </div>
  );
}

function C4() {
  return (
    <div className="bg-[#141414] h-[380px] relative rounded-[8px] shrink-0 w-[368px]" data-name="c2">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic6 />
        <I4 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Ic7() {
  return (
    <div className="h-[260px] relative shrink-0 w-[368px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIc6} />
    </div>
  );
}

function I5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative shrink-0 w-[368px]" data-name="i2">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[16px] whitespace-nowrap">404 Page</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#9a9a93] text-[12px] w-[328px]">{`"Page not available but mailtarget is :)" — playful, on-brand empty state with helpful navigation`}</p>
    </div>
  );
}

function C5() {
  return (
    <div className="bg-[#141414] h-[380px] relative rounded-[8px] shrink-0 w-[368px]" data-name="c2">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic7 />
        <I5 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="sRow">
      <C3 />
      <C4 />
      <C5 />
    </div>
  );
}

function Ic8() {
  return (
    <div className="h-[320px] relative shrink-0 w-[220px]" data-name="ic">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[1062.19%] left-0 max-w-none top-[0.11%] w-full" src={imgIc7} />
      </div>
    </div>
  );
}

function P10() {
  return (
    <div className="bg-[rgba(204,110,248,0.08)] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[20px] shrink-0" data-name="p3">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[11px] whitespace-nowrap">28 desktop</p>
    </div>
  );
}

function P11() {
  return (
    <div className="bg-[rgba(204,110,248,0.08)] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[20px] shrink-0" data-name="p3">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[11px] whitespace-nowrap">14 tablet</p>
    </div>
  );
}

function P12() {
  return (
    <div className="bg-[rgba(204,110,248,0.08)] content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[20px] shrink-0" data-name="p3">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[11px] whitespace-nowrap">20 mobile</p>
    </div>
  );
}

function Bp() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-name="bp">
      <P10 />
      <P11 />
      <P12 />
    </div>
  );
}

function Minfo() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[320px] items-start overflow-clip px-[40px] py-[36px] relative shrink-0" data-name="minfo">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[0.72px] whitespace-nowrap">Mobile — 360px</p>
      <div className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#f2f1ec] text-[30px] tracking-[-0.6px] w-[259px]">
        <p className="leading-[36px] mb-0">Responsive across</p>
        <p className="leading-[36px]">all breakpoints</p>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal h-[10px] leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[852px]">Every page designed at Desktop 1280px, Tablet 768px, and Mobile 360px — 62 total artboards.</p>
      <Bp />
    </div>
  );
}

function Mob() {
  return (
    <div className="bg-[#141414] h-[320px] relative rounded-[8px] shrink-0 w-[1152px]" data-name="mob">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic8 />
        <Minfo />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Screens() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="screens">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">03 — Key Screens</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[46px] tracking-[-0.92px] whitespace-nowrap">Designing for every audience</p>
      <R />
      <FRow />
      <SRow />
      <Mob />
    </div>
  );
}

function P13() {
  return (
    <div className="bg-[#141414] content-stretch flex flex-col gap-[14px] h-[280px] items-start overflow-clip px-[28px] py-[32px] relative shrink-0" data-name="p">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[13px] whitespace-nowrap">01</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[20px] whitespace-nowrap">Discovery</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal h-[10px] leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[231.25px]">Competitor audit of Mailchimp, SendGrid, and Mailjet. Feature inventory mapping 10+ capabilities.</p>
    </div>
  );
}

function P14() {
  return (
    <div className="bg-[#0c0c0b] content-stretch flex flex-col gap-[14px] h-[280px] items-start overflow-clip px-[28px] py-[32px] relative shrink-0" data-name="p">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[13px] whitespace-nowrap">02</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[20px] whitespace-nowrap">Architecture</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal h-[10px] leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[231.25px]">Page structure defined: Homepage, 12 Feature pages, 5 Solution pages, Contact, 404. Navigation and content hierarchy.</p>
    </div>
  );
}

function P15() {
  return (
    <div className="bg-[#141414] content-stretch flex flex-col gap-[14px] h-[280px] items-start overflow-clip px-[28px] py-[32px] relative shrink-0" data-name="p">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[13px] whitespace-nowrap">03</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[20px] whitespace-nowrap">Hi-Fi Design</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal h-[10px] leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[231.25px]">Desktop-first hi-fi across all pages — teal primary, dark hero sections, white body, product illustrations.</p>
    </div>
  );
}

function P16() {
  return (
    <div className="bg-[#0c0c0b] content-stretch flex flex-col gap-[14px] h-[280px] items-start overflow-clip px-[28px] py-[32px] relative shrink-0" data-name="p">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[13px] whitespace-nowrap">04</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[20px] whitespace-nowrap">Responsive</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal h-[10px] leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[231.25px]">Tablet and Mobile adaptation — 14 tablet and 20 mobile artboards maintaining layout and content parity.</p>
    </div>
  );
}

function PRow() {
  return (
    <div className="bg-[rgba(242,241,236,0.08)] content-stretch flex gap-px h-[280px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[1152px]" data-name="pRow">
      <P13 />
      <P14 />
      <P15 />
      <P16 />
    </div>
  );
}

function Proc() {
  return (
    <div className="[word-break:break-word] bg-[#0c0c0b] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="proc">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">04 — Process</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[46px] tracking-[-0.92px] whitespace-nowrap">From discovery to delivery</p>
      <PRow />
    </div>
  );
}

function S() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">15+</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Pages designed</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function S1() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">62</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Total artboards</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function S2() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">3</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Breakpoints</p>
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
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Audience segments</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function S4() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">10+</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Feature pages</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SRow1() {
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
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="out">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">05 — Outcomes</p>
      <SRow1 />
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9a9a93] text-[17px] w-[1152px]">The Mailtarget website shipped as the primary marketing surface for the product — covering every audience segment, every core feature, and every device. The implementation checking phase ensured the frontend team delivered at full design fidelity.</p>
    </div>
  );
}

function NL() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="nL">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[12px] tracking-[0.72px]">Next project →</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[40px] tracking-[-0.8px]">KitaLabel Business OS</p>
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

export default function CaseStudyMailtargetWeb() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start relative size-full" data-name="case-study-mailtarget-web">
      <Nav />
      <Hero />
      <Ov />
      <Ov1 />
      <Scope />
      <Screens />
      <Proc />
      <Out />
      <Fw />
    </div>
  );
}
