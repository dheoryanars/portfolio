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

export default function CaseStudyDesignSystem() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start relative size-full" data-name="case-study-design-system">
      <Nav />
      <Hero />
      <Ov />
      <Ov1 />
      <Foundation />
      <Components />
      <Meth />
      <Out />
      <NextWork />
      <FootWrap />
    </div>
  );
}
