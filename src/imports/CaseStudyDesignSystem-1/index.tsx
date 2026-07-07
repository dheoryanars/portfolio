import { useState, type ReactNode } from "react";
import { AlertTriangle, ArrowRight, Check, HelpCircle, Info, Layers, Sparkles, X } from "lucide-react";

const imgHeroCover = "/case-studies/design-system/image-01.png";
const imgIaAtoms = "/case-studies/design-system/image-02.png";
const imgIaMolecules = "/case-studies/design-system/image-03.png";

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
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">DS Architect</p>
    </div>
  );
}

function Mc1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">TYPE</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">Component Library</p>
    </div>
  );
}

function Mc2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">METHOD</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">Atomic Design</p>
    </div>
  );
}

function Mc3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">YEAR</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">2023–2024</p>
    </div>
  );
}

function Mc4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">USED IN</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">Mailtarget · SONAR</p>
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

function HeroCover() {
  return (
    <div className="h-[380px] pointer-events-none relative rounded-[8px] shrink-0 w-[1152px]" data-name="hero-cover">
      <img alt="" className="absolute inset-0 max-w-none object-contain rounded-[8px] size-full" src={imgHeroCover} />
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[28px] items-start overflow-clip pb-[80px] pt-[120px] px-[64px] relative shrink-0 w-[1280px]" data-name="hero">
      <div className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#f2f1ec] text-[82px] tracking-[-2.46px] w-[1152px]">
        <p className="leading-[80px] mb-0">Universal</p>
        <p className="leading-[80px]">Design System</p>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cc6ef8] text-[22px] whitespace-nowrap">Token-based component library — built for scalability</p>
      <Meta />
      <HeroCover />
    </div>
  );
}

function OvG() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[60px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="ovG">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[46px] relative shrink-0 text-[#f2f1ec] text-[40px] tracking-[-0.8px] w-[280px]">The problem</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9a9a93] text-[17px] w-[812px]">The product team was designing the same components repeatedly across products — buttons, inputs, modals — each slightly different, none documented. Every new screen required re-inventing solved problems.</p>
    </div>
  );
}

function P() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Token-Based</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P1() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Atomic Design</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P2() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Light / Dark Mode</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P3() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">WCAG Accessible</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P4() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Figma Variables</p>
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
        <p className="leading-[46px]">system</p>
      </div>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9a9a93] text-[17px] w-[812px]">{`A personal token-based library powering Dheoryan's products — Mailtarget, SONAR, and Unify Account. Every colour, typeface, spacing step, border radius, and elevation is documented as a reusable token following atomic design principles.`}</p>
    </div>
  );
}

function P5() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Token-Based</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P6() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Atomic Design</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P7() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Light / Dark Mode</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P8() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">WCAG Accessible</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

function P9() {
  return (
    <div className="bg-[#141414] relative rounded-[40px] shrink-0" data-name="p">
      <div className="content-stretch flex items-center overflow-clip px-[14px] py-[7px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Figma Variables</p>
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

function IaColors() {
  return <div className="bg-[#141414] h-[220px] relative shrink-0 w-[564px]" data-name="ia-Colors" />;
}

function IColors() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative shrink-0 w-[564px] whitespace-nowrap" data-name="i-Colors">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[17px]">Colors</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9a9a93] text-[13px]">8 palettes × 10 shades — Primary, Semantic, Neutral</p>
    </div>
  );
}

function CColors() {
  return (
    <div className="bg-[#141414] h-[340px] relative rounded-[8px] shrink-0 w-[564px]" data-name="c-Colors">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <IaColors />
        <IColors />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IaTypography() {
  return <div className="bg-[#141414] h-[220px] relative shrink-0 w-[564px]" data-name="ia-Typography" />;
}

function ITypography() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative shrink-0 w-[564px] whitespace-nowrap" data-name="i-Typography">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[17px]">Typography</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9a9a93] text-[13px]">Display 48px → Caption 11px — 5 scales, 4 weights</p>
    </div>
  );
}

function CTypography() {
  return (
    <div className="bg-[#141414] h-[340px] relative rounded-[8px] shrink-0 w-[564px]" data-name="c-Typography">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <IaTypography />
        <ITypography />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IaSpacing() {
  return <div className="bg-[#141414] h-[220px] relative shrink-0 w-[564px]" data-name="ia-Spacing" />;
}

function ISpacing() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative shrink-0 w-[564px] whitespace-nowrap" data-name="i-Spacing">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[17px]">Spacing</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9a9a93] text-[13px]">$space-0 → $space-110 — 16 steps, 0–96 px</p>
    </div>
  );
}

function CSpacing() {
  return (
    <div className="bg-[#141414] h-[340px] relative rounded-[8px] shrink-0 w-[564px]" data-name="c-Spacing">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <IaSpacing />
        <ISpacing />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IaBorderRadius() {
  return <div className="bg-[#141414] h-[220px] relative shrink-0 w-[564px]" data-name="ia-Border & Radius" />;
}

function IBorderRadius() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative shrink-0 w-[564px] whitespace-nowrap" data-name="i-Border & Radius">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[17px]">{`Border & Radius`}</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9a9a93] text-[13px]">none → full — 9 radius steps, token-documented</p>
    </div>
  );
}

function CBorderRadius() {
  return (
    <div className="bg-[#141414] h-[340px] relative rounded-[8px] shrink-0 w-[564px]" data-name="c-Border & Radius">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <IaBorderRadius />
        <IBorderRadius />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FGrid() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="fGrid">
      <CColors />
      <CTypography />
      <CSpacing />
      <CBorderRadius />
    </div>
  );
}

function Foundation() {
  return (
    <div className="bg-[#0c0c0b] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="foundation">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">02 — Foundation</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[46px] tracking-[-0.92px] whitespace-nowrap">The tokens underneath</p>
      <FGrid />
    </div>
  );
}

function IaAtoms() {
  return (
    <div className="h-[360px] relative shrink-0 w-[564px]" data-name="ia-Atoms">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIaAtoms} />
    </div>
  );
}

function IAtoms() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[24px] relative shrink-0 w-[564px]" data-name="i-Atoms">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px] whitespace-nowrap">Atoms</p>
      <div className="font-['Space_Grotesk:Regular',sans-serif] font-normal h-[10px] leading-[0] relative shrink-0 text-[#9a9a93] text-[13px] w-[516px]">
        <p className="leading-[20px] mb-0">{`Text · Color · Effects · Grid & Spacing`}</p>
        <p className="leading-[20px]">{`Border & Radius · Logo · Icon`}</p>
      </div>
    </div>
  );
}

function CAtoms() {
  return (
    <div className="bg-[#141414] h-[500px] relative rounded-[8px] shrink-0 w-[564px]" data-name="c-Atoms">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <IaAtoms />
        <IAtoms />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IaMolecules() {
  return (
    <div className="h-[360px] relative shrink-0 w-[564px]" data-name="ia-Molecules">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIaMolecules} />
    </div>
  );
}

function IMolecules() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[24px] relative shrink-0 w-[564px]" data-name="i-Molecules">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px] whitespace-nowrap">Molecules</p>
      <div className="font-['Space_Grotesk:Regular',sans-serif] font-normal h-[10px] leading-[0] relative shrink-0 text-[#9a9a93] text-[13px] w-[516px]">
        <p className="leading-[20px] mb-0">Button · Input · Select · Checkbox · Radio</p>
        <p className="leading-[20px]">Label · Tab · Card · Avatar · Pagination</p>
      </div>
    </div>
  );
}

function CMolecules() {
  return (
    <div className="bg-[#141414] h-[500px] relative rounded-[8px] shrink-0 w-[564px]" data-name="c-Molecules">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <IaMolecules />
        <IMolecules />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function CompRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="compRow">
      <CAtoms />
      <CMolecules />
    </div>
  );
}

function IaButtons() {
  return <div className="bg-[#141414] h-[180px] relative shrink-0 w-[1152px]" data-name="ia-buttons" />;
}

function BL() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[5px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="bL">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#f2f1ec] text-[18px]">Button Component</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#9a9a93] text-[13px]">Primary · Secondary · Tertiary · Success · Danger</p>
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[12px]">Default · Hover · Pressed · Focused · Loading · Disabled · Skeleton</p>
    </div>
  );
}

function IButtons() {
  return (
    <div className="content-stretch flex h-[120px] items-center overflow-clip p-[24px] relative shrink-0 w-[1152px]" data-name="i-buttons">
      <BL />
    </div>
  );
}

function CButtons() {
  return (
    <div className="bg-[#141414] h-[300px] relative rounded-[8px] shrink-0 w-[1152px]" data-name="c-buttons">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <IaButtons />
        <IButtons />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Components() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="components">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">03 — Component Library</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[46px] tracking-[-0.92px] whitespace-nowrap">Atoms to Organisms</p>
      <CompRow />
      <CButtons />
    </div>
  );
}

function MAtoms() {
  return (
    <div className="bg-[#141414] content-stretch flex flex-col gap-[16px] h-[280px] items-start overflow-clip px-[28px] py-[32px] relative shrink-0" data-name="m-Atoms">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[13px] whitespace-nowrap">01</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[20px] whitespace-nowrap">Atoms</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal h-[10px] leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[231.25px]">The smallest tokens — colours, type scales, spacing steps, border radii, elevation, icons.</p>
    </div>
  );
}

function MMolecules() {
  return (
    <div className="bg-[#0c0c0b] content-stretch flex flex-col gap-[16px] h-[280px] items-start overflow-clip px-[28px] py-[32px] relative shrink-0" data-name="m-Molecules">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[13px] whitespace-nowrap">02</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[20px] whitespace-nowrap">Molecules</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal h-[10px] leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[231.25px]">Functional components built from atoms — buttons, inputs, labels, cards, tooltips, alerts.</p>
    </div>
  );
}

function MOrganisms() {
  return (
    <div className="bg-[#141414] content-stretch flex flex-col gap-[16px] h-[280px] items-start overflow-clip px-[28px] py-[32px] relative shrink-0" data-name="m-Organisms">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[13px] whitespace-nowrap">03</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[20px] whitespace-nowrap">Organisms</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal h-[10px] leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[231.25px]">Complex UI patterns from molecules — navigation, tables, forms, dashboards, page sections.</p>
    </div>
  );
}

function MTemplates() {
  return (
    <div className="bg-[#0c0c0b] content-stretch flex flex-col gap-[16px] h-[280px] items-start overflow-clip px-[28px] py-[32px] relative shrink-0" data-name="m-Templates">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[13px] whitespace-nowrap">04</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[20px] whitespace-nowrap">Templates</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal h-[10px] leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[231.25px]">Full page layouts from organisms — structural skeleton consistent across all product surfaces.</p>
    </div>
  );
}

function MRow() {
  return (
    <div className="bg-[rgba(242,241,236,0.08)] content-stretch flex gap-px h-[280px] items-start overflow-clip relative rounded-[8px] shrink-0 w-[1152px]" data-name="mRow">
      <MAtoms />
      <MMolecules />
      <MOrganisms />
      <MTemplates />
    </div>
  );
}

function Meth() {
  return (
    <div className="[word-break:break-word] bg-[#0c0c0b] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="meth">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">04 — Methodology</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[46px] tracking-[-0.92px] whitespace-nowrap">Built on atomic design</p>
      <MRow />
    </div>
  );
}

function SColorPalettes() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s-Color palettes">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">8+</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Color palettes</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function STypeTokens() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s-Type tokens">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">20+</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Type tokens</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SSpacingSteps() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s-Spacing steps">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">16</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Spacing steps</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SAtomicLayers() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s-Atomic layers">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">4</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Atomic layers</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SProducts() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s-Products">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">3+</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Products</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SRow() {
  return (
    <div className="content-stretch flex gap-[20px] h-[130px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="sRow">
      <SColorPalettes />
      <STypeTokens />
      <SSpacingSteps />
      <SAtomicLayers />
      <SProducts />
    </div>
  );
}

function Out() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="out">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">05 — Outcomes</p>
      <SRow />
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9a9a93] text-[17px] w-[1152px]">The Universal Design System is the single source of truth across all design work — ensuring consistency and enabling faster iteration across Mailtarget, SONAR, and Unify Account.</p>
    </div>
  );
}

function NL() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="nL">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[12px] tracking-[0.72px]">← Back to portfolio</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[44px] tracking-[-0.88px]">View all work</p>
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

function Footer() {
  return (
    <div className="bg-[#0a0a0a] h-[56px] relative shrink-0 w-full" data-name="footer">
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

function FootWrap() {
  return (
    <div className="bg-[#0a0a0a] relative shrink-0 w-[1280px]" data-name="foot-wrap">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[64px] relative rounded-[inherit] size-full">
        <NRow />
        <Footer />
      </div>
      <div aria-hidden className="absolute border-[rgba(242,241,236,0.08)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function NextWork() {
  return (
    <div className="bg-[#0a0a0a] relative shrink-0 w-[1280px]" data-name="nextWork">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[64px] relative size-full">
        <div className="content-stretch flex items-center justify-between overflow-clip py-[56px] relative shrink-0 w-[1152px]" data-name="nRow">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="nL">
            <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[12px] tracking-[0.72px]">Next project →</p>
            <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[40px] tracking-[-0.8px]">Mailtarget App</p>
          </div>
          <div className="bg-[#0c0c0b] relative rounded-[22px] shrink-0 size-[44px]" data-name="arr">
            <div className="content-stretch flex items-center justify-center overflow-clip relative rounded-[inherit] size-full">
              <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cc6ef8] text-[18px] whitespace-nowrap">↗</p>
            </div>
            <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[22px]" />
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border-[rgba(242,241,236,0.08)] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

const systemEntries = [
  {
    id: "foundations",
    label: "Foundations",
    title: "Tokens that keep every surface aligned",
    body: "Color, type, spacing, radius, elevation, grid, logo, and icon rules became reusable decisions instead of repeated debates.",
    meta: "Color, type, spacing, radius",
    tone: "#cc6ef8",
  },
  {
    id: "components",
    label: "Components",
    title: "Reusable UI blocks for daily product work",
    body: "Buttons, inputs, cards, tabs, forms, tables, alerts, avatars, and pagination were documented with states and usage rules.",
    meta: "Atoms, molecules, organisms",
    tone: "#64c8ff",
  },
  {
    id: "patterns",
    label: "Patterns",
    title: "Screen recipes for consistent workflows",
    body: "Dashboard, table, form, modal, and navigation patterns gave teams a shared way to assemble product experiences.",
    meta: "Layouts, flows, templates",
    tone: "#7cf0a1",
  },
  {
    id: "tools",
    label: "Tools",
    title: "A Figma library designed for real reuse",
    body: "Variables, variants, component states, and naming conventions made the system easier to maintain across multiple products.",
    meta: "Figma variables, variants",
    tone: "#f8c46e",
  },
  {
    id: "governance",
    label: "Governance",
    title: "Rules for scale, not just a UI kit",
    body: "Atomic design levels and contribution logic helped the system stay understandable as products and teams expanded.",
    meta: "Documentation, adoption, ownership",
    tone: "#ff8dff",
  },
];

const designTokens = [
  ["Color", "8+ palettes", "Primary, neutral, semantic, and product states.", "#cc6ef8"],
  ["Typography", "20+ tokens", "Display through caption styles with reusable weights.", "#64c8ff"],
  ["Spacing", "16 steps", "A documented scale from compact controls to page layout.", "#7cf0a1"],
  ["Radius", "9 steps", "From sharp system surfaces to full pill controls.", "#f8c46e"],
];

const designLayers = [
  {
    name: "Atoms",
    count: "01",
    image: imgIaAtoms,
    items: "Text, color, effect, spacing, radius, logo, icon",
  },
  {
    name: "Molecules",
    count: "02",
    image: imgIaMolecules,
    items: "Button, avatar, label status, sandbox status, alert, empty state",
  },
  {
    name: "Organisms",
    count: "03",
    image: imgHeroCover,
    items: "Profile header, user menu, empty state, status table, alert stack",
  },
];

const componentStates = ["Default", "Hover", "Pressed", "Focused", "Loading", "Disabled", "Skeleton"];
const componentSpecimens: Record<string, string[]> = {
  Atoms: ["Text", "Color", "Spacing", "Radius", "Elevation", "Icon"],
  Molecules: ["Button 105 variants", "Avatar 8 variants", "Label Status 7", "Sandbox Status 2", "Alert 16"],
  Organisms: ["Profile Header", "User Menu", "Empty State", "Status table", "Alert stack"],
};
const buttonTypes = ["Primary", "Secondary", "Tertiary", "Success", "Error"];
const statusLabels = ["Injected", "Open", "Click", "Bounce", "Delivery", "Delay", "List Unsubscribe"];
const alertTypes = [
  ["Error", "#ffe8e4", "#ef5c48"],
  ["Warning", "#fff9e4", "#ffc400"],
  ["Success", "#eef6ee", "#1f8549"],
  ["Info", "#f3fbff", "#1292ee"],
];
const udsButtonVariants = [
  ["Primary", "#005b7d", "#ffffff", "none"],
  ["Secondary", "#ebfbff", "#057fb0", "#005b7d"],
  ["Tertiary", "#bbcadc", "#303540", "#68778d"],
  ["Success", "#0c5126", "#ffffff", "none"],
  ["Error", "#ba2e1b", "#ffffff", "none"],
];
const udsStatusStyles: Record<string, { bg: string; border: string; text: string }> = {
  Injected: { bg: "#f6f7fb", border: "#d8e1ed", text: "#68778d" },
  Open: { bg: "#eef6ee", border: "#1f8549", text: "#1f8549" },
  Click: { bg: "#f3f0ff", border: "#7b64f0", text: "#7b64f0" },
  Bounce: { bg: "#ffe8e4", border: "#ef5c48", text: "#ef5c48" },
  Delivery: { bg: "#f3fbff", border: "#1292ee", text: "#3aacdf" },
  Delay: { bg: "#fff9e4", border: "#ffc400", text: "#8a6b00" },
  "List Unsubscribe": { bg: "#f6f7fb", border: "#68778d", text: "#68778d" },
};

type CatalogItem = {
  title: string;
  meta: string;
  description: string;
  preview: string;
};

const foundationGroups: { title: string; description: string; items: CatalogItem[] }[] = [
  {
    title: "Design tokens",
    description: "Reusable values that make the product UI predictable before a component is drawn.",
    items: [
      {
        title: "Color",
        meta: "8+ palettes",
        description: "Primary, neutral, semantic, and product-status colors for light product surfaces.",
        preview: "color",
      },
      {
        title: "Typography",
        meta: "20+ text tokens",
        description: "Display, heading, body, label, caption, and helper styles for dashboard readability.",
        preview: "type",
      },
      {
        title: "Spacing",
        meta: "16 steps",
        description: "A scale for control padding, layout rhythm, dense tables, and spacious page shells.",
        preview: "spacing",
      },
      {
        title: "Radius",
        meta: "9 steps",
        description: "Standardized corner decisions from system fields to rounded status pills.",
        preview: "radius",
      },
      {
        title: "Elevation",
        meta: "4 surface levels",
        description: "Layer rules for cards, menus, modals, and raised content without visual drift.",
        preview: "elevation",
      },
      {
        title: "Icon",
        meta: "20px set",
        description: "Interface symbols for status, action, navigation, and inline feedback.",
        preview: "icon",
      },
    ],
  },
  {
    title: "Guidelines and library pages",
    description: "The documentation layer that helps teams find, understand, and reuse the system.",
    items: [
      {
        title: "Index",
        meta: "library map",
        description: "A starting page that separates foundations, local components, and product modules.",
        preview: "index",
      },
      {
        title: "Guidelines",
        meta: "usage rules",
        description: "Rules for when to use tokens, how states behave, and how new additions are reviewed.",
        preview: "guidelines",
      },
      {
        title: "Local Components",
        meta: "handoff layer",
        description: "Product-ready component pages with names, variants, and usage context.",
        preview: "local-components",
      },
    ],
  },
];

const componentGroups: { title: string; description: string; items: CatalogItem[] }[] = [
  {
    title: "Actions and input",
    description: "Interactive controls for submitting, choosing, and moving through product tasks.",
    items: [
      {
        title: "Button",
        meta: "105 variants",
        description: "Type, size, state, and semantic variants for primary, secondary, tertiary, success, and error actions.",
        preview: "button",
      },
    ],
  },
  {
    title: "Identity and profile",
    description: "Reusable identity pieces for account surfaces, user menus, and team-facing screens.",
    items: [
      {
        title: "Avatar",
        meta: "8 variants",
        description: "User circles in multiple sizes and fallback styles, tuned for compact dashboard UI.",
        preview: "avatar",
      },
      {
        title: "Profile Header",
        meta: "3 variants",
        description: "A composed organism for profile context, account information, and navigation entry points.",
        preview: "profile-header",
      },
    ],
  },
  {
    title: "Status and feedback",
    description: "Visual language for product state, environment state, and system messages.",
    items: [
      {
        title: "Label Status",
        meta: "7 variants",
        description: "Mail-event labels for injected, open, click, bounce, delivery, delay, and unsubscribe states.",
        preview: "label-status",
      },
      {
        title: "Sandbox Status",
        meta: "2 variants",
        description: "Persistent environment indicator for Sandbox and Production modes.",
        preview: "sandbox-status",
      },
      {
        title: "Alert",
        meta: "16 variants",
        description: "Error, warning, success, and information messages with title, description, icon, and action states.",
        preview: "alert",
      },
      {
        title: "Empty State",
        meta: "guided blank state",
        description: "A reusable blank state pattern that tells users what happened and what to do next.",
        preview: "empty-state",
      },
    ],
  },
  {
    title: "Product structures",
    description: "Larger patterns assembled from the same tokens and smaller components.",
    items: [
      {
        title: "Status Table",
        meta: "data display",
        description: "A repeatable table shape for mail activity, status review, and operational lists.",
        preview: "status-table",
      },
      {
        title: "User Menu",
        meta: "navigation",
        description: "Account controls composed from avatar, profile text, menu rows, and action states.",
        preview: "user-menu",
      },
    ],
  },
];

function DsKicker({ children }: { children: string }) {
  return (
    <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] uppercase">
      {children}
    </p>
  );
}

function UdsPanel({
  title,
  meta,
  children,
}: {
  title: string;
  meta?: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-[#ffffff] relative rounded-[6px] shrink-0">
      <div className="content-stretch flex flex-col gap-[14px] p-[18px] relative">
        <div className="content-stretch flex items-center justify-between relative shrink-0">
          <p className="font-['Inter:Medium',sans-serif] leading-[normal] text-[#303540] text-[14px]">{title}</p>
          {meta && <p className="font-['Inter:Regular',sans-serif] leading-[normal] text-[#68778d] text-[12px]">{meta}</p>}
        </div>
        {children}
      </div>
      <div aria-hidden className="absolute border border-[#d8e1ed] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function PreviewCanvas({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="bg-[#ffffff] h-full overflow-hidden relative rounded-[6px] w-full">
      <div className="content-stretch flex items-center justify-between h-[28px] px-[12px] relative">
        <p className="font-['Inter:Medium',sans-serif] leading-[normal] text-[#303540] text-[10px]">{label}</p>
        <div className="content-stretch flex gap-[4px] items-center">
          {[0, 1, 2].map((dot) => (
            <span className="block bg-[#d8e1ed] rounded-full size-[4px]" key={dot} />
          ))}
        </div>
        <span aria-hidden className="absolute border-[#d8e1ed] border-b border-solid bottom-0 left-0 right-0" />
      </div>
      <div className="h-[122px] overflow-hidden p-[12px] relative">{children}</div>
    </div>
  );
}

function TokenChip({ children }: { children: string }) {
  return (
    <span className="bg-[#f6f7fb] px-[7px] py-[4px] rounded-[4px] font-['Inter:Regular',sans-serif] text-[#68778d] text-[9px]">
      {children}
    </span>
  );
}

function DirectoryPreview({ type }: { type: string }) {
  if (type === "color") {
    return (
      <PreviewCanvas label="Color / semantic palette">
        <div className="grid grid-cols-[1fr_76px] gap-[10px] h-full">
          <div className="grid grid-cols-3 gap-[7px]">
            {[
              ["Primary", "#005b7d"],
              ["Info", "#1292ee"],
              ["Success", "#1f8549"],
              ["Warning", "#ffc400"],
              ["Danger", "#ef5c48"],
              ["Neutral", "#303540"],
            ].map(([label, color]) => (
              <div className="content-stretch flex flex-col gap-[5px]" key={label}>
                <span className="block h-[28px] rounded-[4px]" style={{ background: color }} />
                <span className="font-['Inter:Regular',sans-serif] text-[#68778d] text-[8px]">{label}</span>
              </div>
            ))}
          </div>
          <div className="content-stretch flex flex-col gap-[5px]">
            {["50", "100", "500", "700"].map((step, index) => (
              <div className="content-stretch flex gap-[5px] items-center" key={step}>
                <span className="block h-[10px] rounded-[2px] w-[28px]" style={{ background: ["#ebfbff", "#d8e1ed", "#005b7d", "#303540"][index] }} />
                <span className="font-['Inter:Regular',sans-serif] text-[#68778d] text-[8px]">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "type") {
    return (
      <PreviewCanvas label="Typography / Inter">
        <div className="grid grid-cols-[1fr_96px] gap-[14px]">
          <div className="content-stretch flex flex-col gap-[5px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] text-[#303540] text-[28px]">Display / 34</p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] text-[#303540] text-[18px]">Heading / 22</p>
            <p className="font-['Inter:Regular',sans-serif] leading-[14px] text-[#68778d] text-[10px] w-[184px]">Body copy, helper text, and captions are separated for product UI readability.</p>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] pt-[3px]">
            {["Display", "Heading", "Body", "Caption"].map((style) => (
              <div className="content-stretch flex items-center justify-between" key={style}>
                <span className="font-['Inter:Regular',sans-serif] text-[#68778d] text-[8px]">{style}</span>
                <span className="bg-[#d8e1ed] h-[5px] rounded-full w-[30px]" />
              </div>
            ))}
          </div>
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "spacing") {
    return (
      <PreviewCanvas label="Spacing / scale">
        <div className="grid grid-cols-[1fr_96px] gap-[12px]">
          <div className="content-stretch flex flex-col gap-[7px]">
            {[4, 8, 12, 16, 24, 32].map((space) => (
              <div className="content-stretch flex gap-[8px] items-center" key={space}>
                <span className="block bg-[#005b7d] h-[7px] rounded-full" style={{ width: space * 3 }} />
                <span className="font-['Inter:Regular',sans-serif] text-[#68778d] text-[9px]">{space}px</span>
              </div>
            ))}
          </div>
          <div className="bg-[#f6f7fb] grid grid-cols-4 grid-rows-4 gap-[4px] p-[7px] rounded-[5px]">
            {Array.from({ length: 16 }).map((_, index) => (
              <span className="bg-[#d8e1ed] rounded-[2px]" key={index} />
            ))}
          </div>
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "radius") {
    return (
      <PreviewCanvas label="Radius / corner tokens">
        <div className="content-stretch flex flex-col gap-[10px]">
          <div className="content-stretch flex gap-[10px] items-end">
            {[2, 4, 6, 12].map((radius) => (
              <div className="bg-[#ebfbff] h-[52px] relative shrink-0 w-[52px]" key={radius} style={{ border: "1px solid #005b7d", borderRadius: radius }}>
                <span className="absolute bottom-[7px] left-[7px] font-['Inter:Regular',sans-serif] text-[#057fb0] text-[9px]">{radius}px</span>
              </div>
            ))}
          </div>
          <div className="content-stretch flex gap-[5px]">
            {["none", "sm", "md", "lg", "pill"].map((token) => (
              <TokenChip key={token}>{token}</TokenChip>
            ))}
          </div>
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "elevation") {
    return (
      <PreviewCanvas label="Elevation / surface depth">
        <div className="grid grid-cols-[1fr_94px] gap-[14px] h-full">
          <div className="content-stretch flex gap-[12px] items-end pb-[10px]">
            {[0, 8, 16].map((shadow, index) => (
              <div className="bg-[#ffffff] h-[54px] rounded-[6px] shrink-0 w-[58px]" key={shadow} style={{ border: "1px solid #d8e1ed", boxShadow: `0 ${shadow}px ${shadow + 12}px rgba(48,53,64,0.${index + 10})` }}>
                <p className="font-['Inter:Regular',sans-serif] ml-[8px] mt-[34px] text-[#68778d] text-[9px]">0{index + 1}</p>
              </div>
            ))}
          </div>
          <div className="content-stretch flex flex-col gap-[7px] pt-[8px]">
            {["Card", "Menu", "Modal"].map((item, index) => (
              <div className="content-stretch flex gap-[6px] items-center" key={item}>
                <span className="block bg-[#005b7d] h-[5px] rounded-full" style={{ width: 18 + index * 12 }} />
                <span className="font-['Inter:Regular',sans-serif] text-[#68778d] text-[8px]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "icon") {
    return (
      <PreviewCanvas label="Icon / interface symbols">
        <div className="grid grid-cols-5 gap-[8px]">
          {[
            ["Check", Check],
            ["Help", HelpCircle],
            ["Close", X],
            ["Info", Info],
            ["Alert", AlertTriangle],
          ].map(([label, Icon]) => (
            <div className="content-stretch flex flex-col gap-[7px] items-center" key={label as string}>
              <span className="bg-[#ffffff] content-stretch flex items-center justify-center relative rounded-[6px] size-[38px]">
                <Icon aria-hidden color="#005b7d" size={18} strokeWidth={2.2} />
                <span aria-hidden className="absolute border border-[#d8e1ed] border-solid inset-0 pointer-events-none rounded-[6px]" />
              </span>
              <span className="font-['Inter:Regular',sans-serif] text-[#68778d] text-[8px]">{label as string}</span>
            </div>
          ))}
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "button") {
    return (
      <PreviewCanvas label="Button / type x state matrix">
        <div className="content-stretch flex flex-col gap-[9px]">
          <div className="grid grid-cols-5 gap-[7px]">
            {udsButtonVariants.map(([variant, bg, fg, border]) => (
              <span className="content-stretch flex h-[30px] items-center justify-center relative rounded-[6px]" key={variant} style={{ background: bg, border: border === "none" ? "none" : `1px solid ${border}` }}>
                <span className="font-['Inter:Medium',sans-serif] leading-[normal] text-[10px]" style={{ color: fg }}>{variant}</span>
              </span>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-[6px]">
            {componentStates.slice(0, 8).map((state) => (
              <span className="bg-[#f6f7fb] px-[6px] py-[5px] rounded-[5px] text-center text-[#68778d] text-[8px]" key={state}>{state}</span>
            ))}
          </div>
          <div className="content-stretch flex gap-[7px]">
            {["sm", "md", "lg"].map((size) => (
              <TokenChip key={size}>{size}</TokenChip>
            ))}
          </div>
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "avatar") {
    return (
      <PreviewCanvas label="Avatar / size and fallback">
        <div className="content-stretch flex flex-col gap-[12px]">
          <div className="content-stretch flex gap-[18px] items-end">
            {[
              ["XL", 58, "#005b7d"],
              ["L", 44, "#d8e1ed"],
              ["M", 32, "#005b7d"],
              ["S", 22, "#d8e1ed"],
            ].map(([label, size, color]) => (
              <div className="content-stretch flex flex-col gap-[6px] items-center" key={label as string}>
                <span className="block rounded-full" style={{ background: color as string, height: size as number, width: size as number }} />
                <span className="font-['Inter:Regular',sans-serif] text-[#68778d] text-[8px]">{label as string}</span>
              </div>
            ))}
          </div>
          <div className="content-stretch flex gap-[6px]">
            <TokenChip>image</TokenChip>
            <TokenChip>initial</TokenChip>
            <TokenChip>fallback</TokenChip>
          </div>
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "label-status") {
    return (
      <PreviewCanvas label="Label Status / mail events">
        <div className="content-stretch flex flex-col gap-[9px]">
          <div className="content-start flex flex-wrap gap-[7px]">
            {statusLabels.map((label) => {
              const style = udsStatusStyles[label];
              return (
                <span className="px-[10px] py-[5px] rounded-full text-[10px]" key={label} style={{ background: style.bg, border: `1px solid ${style.border}`, color: style.text }}>{label}</span>
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-[5px]">
            {["default", "hover", "selected"].map((state) => (
              <TokenChip key={state}>{state}</TokenChip>
            ))}
          </div>
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "sandbox-status") {
    return (
      <PreviewCanvas label="Environment Status / mode badge">
        <div className="content-stretch flex flex-col gap-[10px]">
          {[
            ["Sandbox", "#ffc400", "Authorized recipients only"],
            ["Production", "#1f8549", "Live delivery enabled"],
          ].map(([label, color, detail]) => (
            <div className="bg-[#f6f7fb] content-stretch flex items-center justify-between px-[10px] py-[9px] relative rounded-[6px]" key={label}>
              <span className="content-stretch flex gap-[8px] items-center">
                <span className="block rounded-full size-[8px]" style={{ background: color }} />
                <span className="font-['Inter:Medium',sans-serif] text-[#303540] text-[11px]">{label}</span>
              </span>
              <span className="font-['Inter:Regular',sans-serif] text-[#68778d] text-[9px]">{detail}</span>
            </div>
          ))}
          <div className="content-stretch flex gap-[6px]">
            <TokenChip>top bar</TokenChip>
            <TokenChip>persistent</TokenChip>
          </div>
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "alert") {
    return (
      <PreviewCanvas label="Alert / semantic feedback">
        <div className="grid grid-cols-2 gap-[7px]">
          {alertTypes.map(([label, bg, tone]) => (
            <div className="content-stretch flex gap-[7px] items-start px-[9px] py-[8px] rounded-[6px]" key={label} style={{ background: bg }}>
              <span className="block rounded-full size-[12px] mt-[2px]" style={{ background: tone }} />
              <div className="content-stretch flex flex-col gap-[2px]">
                <p className="font-['Inter:Medium',sans-serif] leading-[normal] text-[#303540] text-[10px]">{label}</p>
                <p className="font-['Inter:Regular',sans-serif] leading-[normal] text-[#68778d] text-[8px]">Message and action</p>
              </div>
            </div>
          ))}
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "empty-state") {
    return (
      <PreviewCanvas label="Empty State / blank screen">
        <div className="bg-[#f6f7fb] content-stretch flex flex-col gap-[8px] items-center justify-center h-full rounded-[6px] text-center">
          <span className="bg-[#ebfbff] rounded-full size-[34px]" />
          <p className="font-['Inter:Medium',sans-serif] text-[#303540] text-[12px]">No data yet</p>
          <p className="font-['Inter:Regular',sans-serif] leading-[13px] text-[#68778d] text-[9px] w-[150px]">Create the first item to start tracking activity.</p>
          <span className="bg-[#005b7d] h-[24px] rounded-[6px] w-[78px]" />
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "profile-header") {
    return (
      <PreviewCanvas label="Profile Header / organism">
        <div className="content-stretch flex flex-col gap-[11px]">
          <div className="content-stretch flex items-center justify-between">
            <div className="content-stretch flex gap-[10px] items-center">
              <span className="bg-[#005b7d] rounded-full size-[36px]" />
              <div className="content-stretch flex flex-col gap-[5px]">
                <span className="bg-[#303540] h-[7px] rounded-full w-[96px]" />
                <span className="bg-[#d8e1ed] h-[6px] rounded-full w-[126px]" />
              </div>
            </div>
            <span className="bg-[#ebfbff] rounded-[6px] size-[28px]" />
          </div>
          <div className="content-stretch flex gap-[8px]">
            {["Dashboard", "Campaign", "Settings"].map((item) => (
              <span className="bg-[#f6f7fb] px-[7px] py-[5px] rounded-[4px] font-['Inter:Regular',sans-serif] text-[#68778d] text-[8px]" key={item}>{item}</span>
            ))}
          </div>
          <div className="content-stretch flex gap-[6px]">
            <TokenChip>desktop</TokenChip>
            <TokenChip>compact</TokenChip>
            <TokenChip>menu</TokenChip>
          </div>
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "status-table") {
    return (
      <PreviewCanvas label="Status Table / data display">
        <div className="bg-[#ffffff] overflow-hidden rounded-[6px]">
          <div className="grid grid-cols-[1fr_70px_60px] h-[24px] items-center px-[10px]">
            {["Event", "Status", "Count"].map((head) => (
              <span className="font-['Inter:Medium',sans-serif] text-[#68778d] text-[8px]" key={head}>{head}</span>
            ))}
          </div>
          {["Injected", "Open", "Delivery"].map((item, index) => (
            <div className="grid grid-cols-[1fr_70px_60px] h-[25px] items-center px-[10px] relative" key={item}>
              <p className="font-['Inter:Regular',sans-serif] text-[#303540] text-[9px]">{item}</p>
              <span className="h-[6px] rounded-full w-[44px]" style={{ background: ["#68778d", "#1f8549", "#3aacdf"][index] }} />
              <p className="font-['Inter:Regular',sans-serif] text-[#68778d] text-[9px]">{[128, 74, 52][index]}</p>
              <span aria-hidden className="absolute border-[#d8e1ed] border-b border-solid bottom-0 left-[10px] right-[10px]" />
            </div>
          ))}
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "user-menu") {
    return (
      <PreviewCanvas label="User Menu / account">
        <div className="bg-[#ffffff] content-stretch flex flex-col gap-[9px] p-[10px] rounded-[6px] w-[214px]">
          <div className="content-stretch flex gap-[9px] items-center">
            <span className="bg-[#005b7d] rounded-full size-[30px]" />
            <div className="content-stretch flex flex-col gap-[5px]">
              <span className="bg-[#303540] h-[7px] rounded-full w-[92px]" />
              <span className="bg-[#d8e1ed] h-[6px] rounded-full w-[70px]" />
            </div>
          </div>
          {["Account", "Billing", "Logout"].map((item) => (
            <div className="content-stretch flex items-center justify-between" key={item}>
              <span className="font-['Inter:Regular',sans-serif] text-[#68778d] text-[10px]">{item}</span>
              <span className="bg-[#d8e1ed] rounded-full size-[5px]" />
            </div>
          ))}
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "index") {
    return (
      <PreviewCanvas label="Index / documentation map">
        <div className="grid grid-cols-2 gap-[8px]">
          {["Foundations", "Components", "Patterns", "Tools"].map((item, index) => (
            <div className="bg-[#f6f7fb] h-[40px] px-[9px] py-[8px] rounded-[6px]" key={item}>
              <span className="font-['Inter:Medium',sans-serif] text-[#303540] text-[10px]">{item}</span>
              <span className="block bg-[#d8e1ed] h-[5px] mt-[6px] rounded-full" style={{ width: 36 + index * 8 }} />
            </div>
          ))}
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "guidelines") {
    return (
      <PreviewCanvas label="Guidelines / contribution rules">
        <div className="content-stretch flex flex-col gap-[7px]">
          {["Usage", "States", "Contribution", "Naming"].map((item, index) => (
            <div className="bg-[#f6f7fb] content-stretch flex items-center gap-[9px] h-[27px] px-[9px] rounded-[6px]" key={item}>
              <span className="font-['Inter:Medium',sans-serif] text-[#005b7d] text-[9px]">0{index + 1}</span>
              <span className="font-['Inter:Regular',sans-serif] text-[#303540] text-[10px]">{item}</span>
              <span className="ml-auto bg-[#d8e1ed] h-[5px] rounded-full w-[36px]" />
            </div>
          ))}
        </div>
      </PreviewCanvas>
    );
  }

  if (type === "local-components") {
    return (
      <PreviewCanvas label="Local Components / library">
        <div className="grid grid-cols-[1fr_1fr] gap-[8px]">
          {["Button", "Avatar", "Alert", "Status"].map((item, index) => (
            <div className="bg-[#f6f7fb] h-[47px] p-[8px] rounded-[6px]" key={item}>
              <span className="font-['Inter:Medium',sans-serif] text-[#303540] text-[10px]">{item}</span>
              <div className="content-stretch flex gap-[4px] mt-[8px]">
                {[0, 1, 2].map((variant) => (
                  <span className="block h-[6px] rounded-full" key={variant} style={{ background: ["#005b7d", "#d8e1ed", "#1f8549", "#ffc400"][index], width: 14 + variant * 7 }} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </PreviewCanvas>
    );
  }

  return (
    <PreviewCanvas label="Component / preview">
      <div className="grid grid-cols-2 gap-[8px]">
        <div className="bg-[#f6f7fb] h-[48px] rounded-[6px]" />
        <div className="bg-[#f6f7fb] h-[48px] rounded-[6px]" />
      </div>
    </PreviewCanvas>
  );
}

function DirectoryCard({ item }: { item: CatalogItem }) {
  return (
    <div className="bg-[#10100f] relative rounded-[12px] shrink-0">
      <div className="content-stretch flex flex-col gap-[16px] min-h-[330px] overflow-clip p-[18px] relative rounded-[inherit]">
        <div className="bg-[#f6f7fb] h-[178px] overflow-hidden p-[12px] relative rounded-[8px] shrink-0" style={{ fontFamily: "Inter, sans-serif" }}>
          <DirectoryPreview type={item.preview} />
        </div>
        <div className="content-stretch flex items-start justify-between gap-[16px] relative shrink-0 w-full">
          <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[24px] text-[#f2f1ec] text-[20px]">{item.title}</p>
          <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#cc6ef8] text-[11px] text-right uppercase">{item.meta}</p>
        </div>
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22px] text-[#9a9a93] text-[14px] w-full">{item.description}</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function CatalogGroup({
  group,
  columns = 3,
}: {
  group: { title: string; description: string; items: CatalogItem[] };
  columns?: 2 | 3;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-[1152px]">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[520px]">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[30px] text-[#f2f1ec] text-[26px] tracking-[-0.52px]">{group.title}</p>
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[24px] text-[#9a9a93] text-[15px] w-full">{group.description}</p>
      </div>
      <div className={`uds-catalog-grid grid ${columns === 2 ? "grid-cols-2" : "grid-cols-3"} gap-[18px] relative shrink-0 w-full`}>
        {group.items.map((item) => (
          <DirectoryCard item={item} key={item.title} />
        ))}
      </div>
    </div>
  );
}

function DsAtomsBoard() {
  return (
    <div className="bg-[#f6f7fb] content-stretch flex flex-col gap-[18px] min-h-[640px] overflow-clip p-[22px] relative rounded-[6px] shrink-0 w-full" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="grid grid-cols-5 gap-[12px] relative shrink-0 w-full">
        {[
          ["Primary", "#005b7d"],
          ["Info", "#1292ee"],
          ["Success", "#1f8549"],
          ["Warning", "#ffc400"],
          ["Text", "#303540"],
        ].map(([name, color]) => (
          <div className="h-[88px] relative rounded-[6px] shrink-0" key={name} style={{ background: color }}>
            <p className="absolute bottom-[12px] left-[12px] font-['Inter:Medium',sans-serif] leading-[normal] text-[12px]" style={{ color: name === "Warning" ? "#303540" : "#ffffff" }}>{name}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[1fr_260px] gap-[18px] relative shrink-0 w-full">
        <UdsPanel title="Text styles" meta="Inter">
          <div className="content-stretch flex flex-col gap-[9px] items-start relative">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] text-[#303540] text-[40px]">Display / 40</p>
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] text-[#303540] text-[28px]">Heading / 28</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] text-[#68778d] text-[15px] w-[420px]">Body copy, captions, and helper text are separated into documented type styles for product UI.</p>
          </div>
        </UdsPanel>
        <UdsPanel title="Spacing" meta="16 steps">
          <div className="content-stretch flex flex-col gap-[12px] items-stretch relative">
            {[4, 8, 12, 16, 24, 32].map((space) => (
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0" key={space}>
                <div className="bg-[#005b7d] h-[8px] rounded-[2px] shrink-0" style={{ width: space * 4 }} />
                <p className="font-['Inter:Regular',sans-serif] leading-[normal] text-[#68778d] text-[12px]">{space}px</p>
              </div>
            ))}
          </div>
        </UdsPanel>
      </div>

      <div className="grid grid-cols-3 gap-[18px] relative shrink-0 w-full">
        <UdsPanel title="Radius" meta="9 steps">
          <div className="content-stretch flex gap-[14px] items-end relative">
            {[2, 4, 6, 12].map((radius) => (
              <div className="bg-[#ebfbff] h-[64px] relative shrink-0 w-[64px]" key={radius} style={{ borderRadius: radius, border: "1px solid #005b7d" }}>
                <p className="absolute bottom-[8px] left-[9px] font-['Inter:Regular',sans-serif] text-[#057fb0] text-[11px]">{radius}px</p>
              </div>
            ))}
          </div>
        </UdsPanel>
        <UdsPanel title="Elevation" meta="4 styles">
          <div className="content-stretch flex gap-[12px] items-end relative">
            {[0, 8, 16].map((shadow, index) => (
              <div className="bg-[#ffffff] h-[70px] rounded-[6px] shrink-0 w-[70px]" key={shadow} style={{ boxShadow: `0 ${shadow}px ${shadow + 10}px rgba(48,53,64,0.${index + 10})`, border: "1px solid #d8e1ed" }} />
            ))}
          </div>
        </UdsPanel>
        <UdsPanel title="Icon" meta="20px">
          <div className="content-stretch flex gap-[12px] items-center relative">
            {["v", "?", "x", "i", "!"].map((icon) => (
              <div className="bg-[#f6f7fb] content-stretch flex items-center justify-center rounded-[6px] size-[44px]" key={icon}>
                <p className="font-['Inter:Medium',sans-serif] text-[#005b7d] text-[18px]">{icon}</p>
              </div>
            ))}
          </div>
        </UdsPanel>
      </div>
      <div aria-hidden className="absolute border border-[#d8e1ed] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function DsMoleculesBoard() {
  return (
    <div className="bg-[#f6f7fb] content-stretch flex flex-col gap-[18px] min-h-[720px] overflow-clip p-[22px] relative rounded-[6px] shrink-0 w-full" style={{ fontFamily: "Inter, sans-serif" }}>
      <UdsPanel title="Button" meta="105 variants">
        <div className="content-stretch flex flex-col gap-[14px] relative">
          <div className="content-stretch flex flex-wrap gap-[12px] items-center relative shrink-0">
            {udsButtonVariants.map(([type, bg, fg, border]) => (
              <button
                className="h-[48px] px-[18px] relative rounded-[6px] shrink-0"
                key={type}
                style={{ background: bg, border: border === "none" ? "none" : `1px solid ${border}` }}
                type="button"
              >
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[46px] text-[16px] whitespace-nowrap" style={{ color: fg }}>Button</p>
              </button>
            ))}
          </div>
          <div className="content-stretch flex flex-wrap gap-[8px] items-center relative shrink-0">
            {componentStates.map((state) => (
              <div className="bg-[#f6f7fb] rounded-[6px] shrink-0" key={state}>
                <div className="px-[11px] py-[7px]">
                  <p className="font-['Inter:Regular',sans-serif] leading-[normal] text-[#68778d] text-[12px] whitespace-nowrap">{state}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </UdsPanel>

      <div className="grid grid-cols-[1fr_260px] gap-[18px] relative shrink-0 w-full">
        <UdsPanel title="Label Status" meta="7 variants">
          <div className="content-stretch flex flex-wrap gap-[10px] items-center relative shrink-0">
            {statusLabels.map((label) => {
              const style = udsStatusStyles[label];
              return (
                <div className="relative rounded-full shrink-0" key={label} style={{ background: style.bg }}>
                  <div className="content-stretch flex items-center px-[16px] py-[7px] relative">
                    <p className="font-['Inter:Regular',sans-serif] leading-[normal] text-[12px] whitespace-nowrap" style={{ color: style.text }}>{label}</p>
                  </div>
                  <div aria-hidden className="absolute border border-solid inset-0 pointer-events-none rounded-full" style={{ borderColor: style.border }} />
                </div>
              );
            })}
          </div>
        </UdsPanel>

        <UdsPanel title="Sandbox Status" meta="2 variants">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative">
            {[
              ["Sandbox", "#ffc400"],
              ["Production", "#1f8549"],
            ].map(([label, color]) => (
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" key={label}>
                <span className="block rounded-full size-[12px]" style={{ background: `${color}4d` }}>
                  <span className="block rounded-full size-[6px] translate-x-[3px] translate-y-[3px]" style={{ background: color }} />
                </span>
                <p className="font-['Inter:Light',sans-serif] leading-[normal] text-[#68778d] text-[12px]">{label}</p>
              </div>
            ))}
          </div>
        </UdsPanel>
      </div>

      <div className="grid grid-cols-[250px_1fr] gap-[18px] relative shrink-0 w-full">
        <UdsPanel title="Avatar" meta="8 variants">
          <div className="content-stretch flex gap-[18px] items-end relative">
            {[
              ["XL", 72],
              ["L", 56],
              ["M", 40],
              ["S", 24],
            ].map(([label, size], index) => (
              <div className="content-stretch flex flex-col gap-[8px] items-center relative" key={label}>
                <span className="block rounded-full" style={{ background: index % 2 === 0 ? "#005b7d" : "#d8e1ed", height: size, width: size }} />
                <p className="font-['Inter:Regular',sans-serif] text-[#68778d] text-[11px]">{label}</p>
              </div>
            ))}
          </div>
        </UdsPanel>

        <UdsPanel title="Alert" meta="16 variants">
          <div className="content-stretch flex flex-col gap-[10px] relative">
            {alertTypes.map(([label, bg, tone]) => (
              <div className="content-stretch flex gap-[14px] items-start min-h-[62px] px-[14px] py-[12px] relative rounded-[6px] shrink-0" key={label} style={{ background: bg }}>
                <span className="block rounded-full size-[20px] mt-[2px]" style={{ background: tone }} />
                <div className="content-stretch flex flex-col gap-[3px] items-start relative">
                  <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] text-[#303540] text-[15px]">Main notification title</p>
                  <p className="font-['Inter:Regular',sans-serif] leading-[normal] text-[#68778d] text-[13px]">Description text goes here</p>
                </div>
              </div>
            ))}
          </div>
        </UdsPanel>
      </div>

      <div aria-hidden className="absolute border border-[#d8e1ed] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function DsOrganismsBoard() {
  return (
    <div className="bg-[#f6f7fb] content-stretch flex flex-col gap-[18px] min-h-[640px] overflow-clip p-[22px] relative rounded-[6px] shrink-0 w-full" style={{ fontFamily: "Inter, sans-serif" }}>
      <div className="bg-[#ffffff] content-stretch flex items-center justify-between h-[72px] px-[20px] relative rounded-[6px] shrink-0 w-full">
        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
          <span className="block bg-[#005b7d] rounded-full size-[40px]" />
          <div className="content-stretch flex flex-col gap-[3px] items-start relative">
            <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] text-[#303540] text-[15px]">Profile Header</p>
            <p className="font-['Inter:Regular',sans-serif] leading-[normal] text-[#68778d] text-[12px]">profile@company.id</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
          {["Dashboard", "Campaign", "Settings"].map((item) => (
            <p className="font-['Inter:Regular',sans-serif] leading-[normal] text-[#68778d] text-[12px]" key={item}>{item}</p>
          ))}
        </div>
        <div aria-hidden className="absolute border border-[#d8e1ed] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>

      <div className="grid grid-cols-[1fr_280px] gap-[18px] relative shrink-0 w-full">
        <UdsPanel title="Status table" meta="mail activity">
          <div className="relative h-[190px]">
            {["Pattern", "Source", "Status"].map((head, index) => (
              <p className="absolute top-0 font-['Inter:Medium',sans-serif] leading-[normal] text-[#68778d] text-[12px]" key={head} style={{ left: 0 + index * 150 }}>{head}</p>
            ))}
            {["Profile Header", "Label Status", "Alert block", "Sandbox Status"].map((item, index) => (
              <div className="absolute h-[38px] left-0 right-0" key={item} style={{ top: 34 + index * 38 }}>
                <p className="absolute left-0 top-[10px] font-['Inter:Medium',sans-serif] font-medium leading-[normal] text-[#303540] text-[13px]">{item}</p>
                <p className="absolute left-[150px] top-[10px] font-['Inter:Regular',sans-serif] font-normal leading-[normal] text-[#68778d] text-[13px]">{index % 2 === 0 ? "User surface" : "Mail status"}</p>
                <span className="absolute h-[8px] left-[300px] rounded-full top-[15px] w-[54px]" style={{ background: ["#005b7d", "#1292ee", "#1f8549", "#ffc400"][index] }} />
                {index < 3 && <div aria-hidden className="absolute border-[#d8e1ed] border-b border-solid bottom-0 left-0 right-0" />}
              </div>
            ))}
          </div>
        </UdsPanel>

        <div className="content-stretch flex flex-col gap-[18px] relative">
          <UdsPanel title="Empty State">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative">
              <div className="bg-[#ebfbff] rounded-full size-[38px]" />
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] text-[#303540] text-[15px]">No data yet</p>
              <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] text-[#68778d] text-[12px]">Guide the user to create the first item.</p>
            </div>
          </UdsPanel>
          <UdsPanel title="User Menu">
            <div className="content-stretch flex gap-[10px] items-center relative">
              <span className="bg-[#005b7d] rounded-full size-[32px]" />
              <div className="content-stretch flex flex-col gap-[6px] items-start relative">
                <span className="bg-[#bbcadc] h-[8px] rounded-full w-[110px]" />
                <span className="bg-[#d8e1ed] h-[8px] rounded-full w-[70px]" />
              </div>
            </div>
          </UdsPanel>
        </div>
      </div>

      <UdsPanel title="Alert stack" meta="composed from molecule variants">
        <div className="grid grid-cols-2 gap-[12px] relative shrink-0 w-full">
          {alertTypes.map(([label, bg, tone]) => (
            <div className="content-stretch flex gap-[12px] items-start min-h-[64px] px-[14px] py-[12px] relative rounded-[6px] shrink-0" key={label} style={{ background: bg }}>
              <span className="block rounded-full size-[20px] mt-[2px]" style={{ background: tone }} />
              <div className="content-stretch flex flex-col gap-[3px] items-start relative">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] text-[#303540] text-[14px]">{label} alert</p>
                <p className="font-['Inter:Regular',sans-serif] leading-[normal] text-[#68778d] text-[12px]">Description text goes here</p>
              </div>
            </div>
          ))}
        </div>
      </UdsPanel>

      <div aria-hidden className="absolute border border-[#d8e1ed] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function DsComponentCanvas({ layerName }: { layerName: string }) {
  if (layerName === "Atoms") return <DsAtomsBoard />;
  if (layerName === "Molecules") return <DsMoleculesBoard />;
  return <DsOrganismsBoard />;
}

function DsHero() {
  return (
    <section className="bg-[#0a0a0a] content-stretch flex flex-col gap-[42px] items-start overflow-clip px-[64px] pb-[90px] pt-[120px] relative shrink-0 w-[1280px]" data-name="design-system-hero">
      <div className="grid grid-cols-[0.92fr_1fr] gap-[64px] items-start relative shrink-0 w-[1152px]">
        <div className="content-stretch flex flex-col gap-[30px] items-start relative shrink-0">
          <DsKicker>Universal Design System</DsKicker>
          <div className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[78px] relative shrink-0 text-[#f2f1ec] text-[78px] tracking-[-2.34px] w-[530px]">
            Explore the system behind repeatable product UI.
          </div>
          <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#9a9a93] text-[19px] w-[520px]">
            A reusable design foundation for Mailtarget, SONAR, Read/See, and future products, built from tokens, components, patterns, and governance rules.
          </p>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
            {["Foundations", "Components", "Patterns", "Tools"].map((item) => (
              <div className="bg-[#141414] rounded-full shrink-0" key={item}>
                <div className="px-[14px] py-[8px]">
                  <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#9a9a93] text-[12px] whitespace-nowrap">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative rounded-[18px] shrink-0 w-full">
          <div className="bg-[#10100f] content-stretch flex flex-col gap-[18px] min-h-[476px] overflow-clip p-[22px] relative rounded-[inherit]">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
                <Layers color="#cc6ef8" size={18} />
                <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#f2f1ec] text-[12px] uppercase">System overview</p>
              </div>
              <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#6f6f68] text-[11px] uppercase">2023-2024</p>
            </div>
            <div className="bg-[#0a0a0a] h-[292px] overflow-clip relative rounded-[12px] shrink-0 w-full">
              <img alt="Universal Design System cover" className="absolute inset-0 max-w-none object-cover opacity-85 pointer-events-none size-full" src={imgHeroCover} />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,0.72),rgba(10,10,10,0.18))]" />
              <div className="absolute bottom-[22px] left-[22px]">
                <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] text-[#f2f1ec] text-[28px] tracking-[-0.56px]">Single source of truth</p>
                <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic mt-[7px] text-[#cc6ef8] text-[11px] uppercase">Tokens to components to patterns</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-[10px] relative shrink-0 w-full">
              {[
                ["8+", "Color palettes"],
                ["20+", "Type tokens"],
                ["3+", "Products"],
              ].map(([value, label]) => (
                <div className="bg-[#141414] rounded-[10px] shrink-0" key={label}>
                  <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px]">
                    <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] text-[#cc6ef8] text-[28px] tracking-[-0.56px]">{value}</p>
                    <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#9a9a93] text-[11px] uppercase">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[18px]" />
        </div>
      </div>
    </section>
  );
}

function DsSystemHub() {
  const [activeId, setActiveId] = useState(systemEntries[0].id);
  const activeEntry =
    systemEntries.find((entry) => entry.id === activeId) ??
    systemEntries[0];

  return (
    <section className="bg-[#0c0c0b] content-stretch flex flex-col gap-[36px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="design-system-hub">
      <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1152px]">
        <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0">
          <DsKicker>00 - System map</DsKicker>
          <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[52px] text-[#f2f1ec] text-[48px] tracking-[-0.96px] w-[620px]">Browse the system like a product.</p>
        </div>
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
          <div className="bg-[#141414] relative rounded-full shrink-0">
            <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative">
              <span className="block rounded-full size-[7px] bg-[#7cf0a1]" />
              <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#f2f1ec] text-[12px] uppercase">5 modules</p>
            </div>
            <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-full" />
          </div>
          <div className="bg-[#141414] relative rounded-full shrink-0">
            <div className="content-stretch flex items-center px-[16px] py-[10px] relative">
              <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#9a9a93] text-[12px] uppercase">Hover or click to inspect</p>
            </div>
            <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-full" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_386px] gap-[28px] relative shrink-0 w-[1152px]">
        <div className="grid grid-cols-2 gap-[18px] relative shrink-0">
          {systemEntries.map((entry) => {
            const active = activeEntry.id === entry.id;
            return (
              <button
                className="group relative rounded-[10px] shrink-0 text-left transition-all duration-200 w-full"
                key={entry.id}
                onClick={() => setActiveId(entry.id)}
                onFocus={() => setActiveId(entry.id)}
                onMouseEnter={() => setActiveId(entry.id)}
                style={{
                  background: active ? `${entry.tone}14` : "#141414",
                  border: `1px solid ${active ? `${entry.tone}7a` : "rgba(242,241,236,0.1)"}`,
                  boxShadow: active ? `0 0 36px ${entry.tone}20` : "none",
                  cursor: "pointer",
                  padding: 0,
                }}
                type="button"
              >
                <div className="content-stretch flex flex-col gap-[18px] min-h-[178px] overflow-clip p-[22px] relative rounded-[inherit]">
                  <div className="content-stretch flex items-start justify-between gap-[20px] relative shrink-0 w-full">
                    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
                      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[11px] tracking-[1px] uppercase" style={{ color: entry.tone }}>{entry.label}</p>
                      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[22px] text-[#f2f1ec] text-[18px] w-[250px]">{entry.title}</p>
                    </div>
                    <ArrowRight className="mt-[2px] shrink-0 transition-transform duration-200 group-hover:translate-x-1" color={entry.tone} size={18} />
                  </div>
                  <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22px] text-[#9a9a93] text-[14px] w-full">{entry.body}</p>
                  <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#6f6f68] text-[11px] uppercase">{entry.meta}</p>
                </div>
              </button>
            );
          })}
        </div>

        <aside className="bg-[#10100f] relative rounded-[16px] shrink-0">
          <div className="content-stretch flex flex-col gap-[22px] min-h-[402px] overflow-clip p-[24px] relative rounded-[inherit]">
            <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
              <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[11px] tracking-[1px] uppercase" style={{ color: activeEntry.tone }}>Selected module</p>
              <Sparkles color={activeEntry.tone} size={18} />
            </div>
            <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
              <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[32px] text-[#f2f1ec] text-[28px] tracking-[-0.56px]">{activeEntry.label}</p>
              <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[25px] text-[#9a9a93] text-[15px] w-full">{activeEntry.body}</p>
            </div>
            <div className="bg-[#0a0a0a] rounded-[12px] p-[18px]">
              <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#6f6f68] text-[11px] uppercase">Why it matters</p>
              <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[22px] mt-[9px] text-[#f2f1ec] text-[16px]">Reusable decisions reduce design drift and make new screens faster to assemble.</p>
            </div>
            <div className="h-[8px] bg-[rgba(242,241,236,0.08)] overflow-clip relative rounded-full shrink-0 w-full">
              <div className="absolute h-full left-0 top-0 rounded-full" style={{ background: activeEntry.tone, width: `${(systemEntries.findIndex((entry) => entry.id === activeEntry.id) + 1) * 20}%` }} />
            </div>
          </div>
          <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </aside>
      </div>
    </section>
  );
}

function DsFoundations() {
  return (
    <section className="bg-[#0a0a0a] content-stretch flex flex-col gap-[46px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="design-system-foundations">
      <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1152px]">
        <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0">
          <DsKicker>01 - Foundations</DsKicker>
          <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[52px] text-[#f2f1ec] text-[48px] tracking-[-0.96px] w-[680px]">Foundations documented like a product library.</p>
        </div>
        <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[26px] text-[#9a9a93] text-[16px] w-[390px]">Like a design-system overview page, this section separates tokens, styles, and usage guidance so the viewer can see what the library contains.</p>
      </div>
      <div className="content-stretch flex flex-col gap-[42px] items-start relative shrink-0">
        {foundationGroups.map((group) => (
          <CatalogGroup group={group} key={group.title} />
        ))}
      </div>
    </section>
  );
}

function DsComponents() {
  return (
    <section className="bg-[#0c0c0b] content-stretch flex flex-col gap-[46px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="design-system-components">
      <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1152px]">
        <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0">
          <DsKicker>02 - Components</DsKicker>
          <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[52px] text-[#f2f1ec] text-[48px] tracking-[-0.96px] w-[710px]">Components shown as a browsable system catalog.</p>
        </div>
        <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0">
          <div className="bg-[#141414] relative rounded-full shrink-0">
            <div className="content-stretch flex items-center px-[16px] py-[10px] relative">
              <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#f2f1ec] text-[12px] uppercase">9 documented components</p>
            </div>
            <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-full" />
          </div>
          <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[24px] text-[#9a9a93] text-[14px] text-right w-[360px]">Each entry previews the actual UDS component behavior, variants, and role instead of using the portfolio's newer visual system.</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[42px] items-start relative shrink-0">
        {componentGroups.map((group) => (
          <CatalogGroup columns={group.items.length === 1 ? 2 : 3} group={group} key={group.title} />
        ))}
      </div>
    </section>
  );
}

function DsPatterns() {
  return (
    <section className="bg-[#0a0a0a] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="design-system-patterns">
      <div className="content-stretch flex flex-col gap-[14px] items-start relative shrink-0">
        <DsKicker>03 - Patterns and governance</DsKicker>
        <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[52px] text-[#f2f1ec] text-[48px] tracking-[-0.96px] w-[790px]">The system explains how to build, not only what to use.</p>
      </div>
      <div className="grid grid-cols-3 gap-[18px] relative shrink-0 w-[1152px]">
        {[
          ["Start from foundations", "Use color, type, space, and radius tokens before making a new component."],
          ["Compose with components", "Build screens from documented atoms, molecules, organisms, and templates."],
          ["Govern new additions", "Add only when a pattern repeats, document states, then connect usage back to product context."],
        ].map(([title, body], index) => (
          <div className="bg-[#141414] min-h-[240px] relative rounded-[12px] shrink-0" key={title}>
            <div className="content-stretch flex flex-col gap-[20px] h-full items-start overflow-clip p-[26px] relative rounded-[inherit]">
              <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#cc6ef8] text-[13px]">0{index + 1}</p>
              <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[28px] text-[#f2f1ec] text-[24px] tracking-[-0.48px] w-full">{title}</p>
              <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[24px] text-[#9a9a93] text-[15px] w-full">{body}</p>
            </div>
            <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
          </div>
        ))}
      </div>
    </section>
  );
}

function DsAdoption() {
  return (
    <section className="bg-[#0c0c0b] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="design-system-adoption">
      <div className="grid grid-cols-[0.75fr_1fr] gap-[64px] items-start relative shrink-0 w-[1152px]">
        <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0">
          <DsKicker>04 - Adoption</DsKicker>
          <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[52px] text-[#f2f1ec] text-[48px] tracking-[-0.96px] w-[420px]">Built once, reused across products.</p>
          <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[28px] text-[#9a9a93] text-[17px] w-[430px]">The Universal Design System reduced repeated component work and gave product teams a shared language for interface decisions.</p>
        </div>
        <div className="bg-[#10100f] relative rounded-[16px] shrink-0">
          <div className="content-stretch flex flex-col overflow-clip relative rounded-[inherit]">
            {[
              ["Mailtarget", "Email API product screens and dashboard patterns"],
              ["SONAR", "Extension UI, landing page modules, and component rules"],
              ["Read/See", "CDP dashboard surfaces, campaign flows, and data-product patterns"],
            ].map(([product, usage], index) => (
              <div className="content-stretch flex items-center justify-between min-h-[92px] px-[24px] relative shrink-0" key={product}>
                <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
                  <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic text-[#cc6ef8] text-[12px]">0{index + 1}</p>
                  <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] text-[#f2f1ec] text-[20px]">{product}</p>
                </div>
                <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22px] text-[#9a9a93] text-[14px] text-right w-[360px]">{usage}</p>
                {index < 2 && <div aria-hidden className="absolute border-[rgba(242,241,236,0.08)] border-b border-solid bottom-0 left-[24px] right-[24px]" />}
              </div>
            ))}
          </div>
          <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
        </div>
      </div>
    </section>
  );
}

export default function CaseStudyDesignSystem() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start relative size-full" data-name="case-study-design-system">
      <DsHero />
      <DsSystemHub />
      <DsFoundations />
      <DsComponents />
      <DsPatterns />
      <DsAdoption />
    </div>
  );
}
