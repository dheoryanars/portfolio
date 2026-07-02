import svgPaths from "./svg-t4dtk4ouv6";
import imgThumbnail from "./43b0ce12d21a60eb9993e06d77a00cd1268f2008.png";
import imgThumbnail1 from "./5afa8b14b3d4b89cc94f7f4d27af1b446345d65c.png";
import imgThumbnail2 from "./5a423e25c3bf151b49fdebbcd4f8bca1ce4158c1.png";
import imgThumbnail3 from "./c5a8d734c74e5bb1faed601daf6b25204a007425.png";
import imgThumbnail4 from "./6ae195432613bb0670429b2419f2e152f15f03ce.png";
import imgThumbnail5 from "./52ec9a81c233b1ed8c2f248435b4ffac8fa78eba.png";
import imgThumbnail6 from "./6f0259f83281b2b8a8b3723dc90a1a73f92347a8.png";
import imgThumbnail7 from "./7ac6762698247e2cc7db8f3a0ebbacda97a5e747.png";
import imgThumbnail8 from "./413bc02e22083b9f7ab13cd8e136d095b0b976cd.png";
import imgImage1 from "./08a05053109e2493be9aa0d54fd1ffcbdad0afa1.png";

function Brand() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="brand">
      <div className="relative shrink-0 size-[9px]" data-name="Ellipse">
        <div className="absolute inset-[-88.89%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
            <g filter="url(#filter0_d_1_2176)" id="Ellipse">
              <circle cx="12.5" cy="12.5" fill="var(--fill-0, #CC6EF8)" r="4.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="25" id="filter0_d_1_2176" width="25" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.784314 0 0 0 0 1 0 0 0 0 0.301961 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_2176" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2176" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px] whitespace-nowrap">Dheoryan Putra Arsi</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start px-[20px] py-[8px] relative rounded-[20px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="[word-break:break-word] font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] whitespace-nowrap">{`Let's talk`}</p>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="links">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] uppercase whitespace-nowrap">Work</p>
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] uppercase whitespace-nowrap">Process</p>
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] uppercase whitespace-nowrap">About</p>
      <Frame />
    </div>
  );
}

function Navbar() {
  return (
    <div className="absolute backdrop-blur-[8px] bg-[rgba(10,10,10,0.9)] content-stretch flex items-center justify-between left-0 px-[64px] py-[24px] top-0 w-[1280px]" data-name="navbar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <Brand />
      <Links />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex gap-[6px] items-center px-[10px] py-[6px] relative rounded-[100px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(34,197,94,0.3)] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="relative shrink-0 size-[8px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <circle cx="4" cy="4" fill="var(--fill-0, #22C55E)" id="Ellipse" r="4" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f1ec] text-[12px] whitespace-nowrap">Available for work — 2026</p>
    </div>
  );
}

function MetaRow() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="meta-row">
      <Frame1 />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8a8a83] text-[12px] whitespace-nowrap">{`Product Designer · Web Apps & Design Systems · Based in Jakarta, Indonesia`}</p>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#cc6ef8] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[32px] shrink-0" data-name="button">
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#0a0a0a] text-[14px] whitespace-nowrap">View selected work →</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[32px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#cc6ef8] text-[14px] whitespace-nowrap">Get in touch</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Frame">
      <Button />
      <Button1 />
    </div>
  );
}

function HeroFooter() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="hero-footer">
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9a9a93] text-[20px] w-[580px]">
        <span className="leading-[1.5]">{`I'm Dheoryan — a product designer specializing in `}</span>
        <span className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.5] text-[#f2f1ec]">SaaS platforms</span>
        <span className="leading-[1.5]">{` and `}</span>
        <span className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.5] text-[#f2f1ec]">scalable design systems</span>
        <span className="leading-[1.5]">. I turn dense, ambiguous problems into interfaces that feel obvious.</span>
      </p>
      <Frame2 />
    </div>
  );
}

function HeadlineContent() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="headline-content">
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#f2f1ec] text-[120px] w-[1000px]">
        <span className="leading-[0.9]">{`Crafting `}</span>
        <span className="font-['Instrument_Serif:Italic',sans-serif] italic leading-[0.9] text-[#cc6ef8]">clarity</span>
        <span className="leading-[0.9]">{` for complex software.`}</span>
      </p>
      <HeroFooter />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[40px] relative shrink-0 w-px" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-l border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="scroll-indicator">
      <Frame3 />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8a8a83] text-[10px] uppercase whitespace-nowrap">Scroll to explore</p>
    </div>
  );
}

function Hero() {
  return (
    <div className="content-stretch flex flex-col h-[900px] items-start justify-between pb-[64px] pt-[180px] px-[64px] relative shrink-0 w-[1280px]" data-name="hero">
      <MetaRow />
      <HeadlineContent />
      <ScrollIndicator />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Frame">
      <p className="relative shrink-0 text-[#0a0a0a]">Product Design</p>
      <p className="relative shrink-0 text-[#cc6ef8]">✳</p>
      <p className="relative shrink-0 text-[#cc6ef8]">Design Systems</p>
      <p className="relative shrink-0 text-[#cc6ef8]">✳</p>
      <p className="relative shrink-0 text-[#0a0a0a]">SaaS Platforms</p>
      <p className="relative shrink-0 text-[#cc6ef8]">✳</p>
      <p className="relative shrink-0 text-[#cc6ef8]">Prototyping</p>
      <p className="relative shrink-0 text-[#cc6ef8]">✳</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Frame">
      <p className="relative shrink-0 text-[#0a0a0a]">Product Design</p>
      <p className="relative shrink-0 text-[#cc6ef8]">✳</p>
      <p className="relative shrink-0 text-[#cc6ef8]">Design Systems</p>
      <p className="relative shrink-0 text-[#cc6ef8]">✳</p>
      <p className="relative shrink-0 text-[#0a0a0a]">SaaS Platforms</p>
      <p className="relative shrink-0 text-[#cc6ef8]">✳</p>
      <p className="relative shrink-0 text-[#cc6ef8]">Prototyping</p>
      <p className="relative shrink-0 text-[#cc6ef8]">✳</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[48px] items-center relative shrink-0" data-name="Frame">
      <p className="relative shrink-0 text-[#0a0a0a]">Product Design</p>
      <p className="relative shrink-0 text-[#cc6ef8]">✳</p>
      <p className="relative shrink-0 text-[#cc6ef8]">Design Systems</p>
      <p className="relative shrink-0 text-[#cc6ef8]">✳</p>
      <p className="relative shrink-0 text-[#0a0a0a]">SaaS Platforms</p>
      <p className="relative shrink-0 text-[#cc6ef8]">✳</p>
      <p className="relative shrink-0 text-[#cc6ef8]">Prototyping</p>
      <p className="relative shrink-0 text-[#cc6ef8]">✳</p>
    </div>
  );
}

function Marquee() {
  return (
    <div className="bg-[#0c0c0b] h-[100px] relative shrink-0 w-[1280px]" data-name="marquee">
      <div className="[word-break:break-word] content-stretch flex font-['Space_Grotesk:Bold',sans-serif] font-bold gap-[48px] items-center justify-center leading-[normal] overflow-clip relative rounded-[inherit] size-full text-[60px] whitespace-nowrap">
        <Frame4 />
        <Frame5 />
        <Frame6 />
      </div>
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function SectionLabel() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Space_Mono:Regular',sans-serif] gap-[12px] items-start leading-[normal] not-italic pb-[40px] relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="section-label">
      <p className="relative shrink-0 text-[#cc6ef8]">01</p>
      <p className="relative shrink-0 text-[#9a9a93] uppercase">Selected Work</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-end justify-between pb-[64px] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#f2f1ec] text-[60px]">
        <span className="leading-[normal]">{`Things I've `}</span>
        <span className="font-['Instrument_Serif:Italic',sans-serif] italic leading-[normal] text-[#cc6ef8]">shipped</span>
      </p>
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8a8a83] text-[12px] text-right">4 years of products - 2022 to 2026. Hover to preview.</p>
    </div>
  );
}

function Thumbnail() {
  return (
    <div className="h-[200px] relative rounded-[12px] shrink-0 w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgThumbnail} />
        <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0 rounded-[12px]" />
      </div>
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-up-right">
          <path d={svgPaths.p1908cf00} id="Vector" stroke="var(--stroke-0, #F2F1EC)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ArrowUpRight />
    </div>
  );
}

function CardFooter() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-footer">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">2026</p>
      <Frame8 />
    </div>
  );
}

function WorkCard() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="work-card">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Thumbnail />
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8a8a83] text-[14px] whitespace-nowrap">01</p>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-full relative text-[#f2f1ec] text-[28px] w-[min-content]">KitaLabel Business OS</p>
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#8a8a83] text-[13px] w-[min-content]">B2B Admin Panel · AI-Assisted Development</p>
        <CardFooter />
      </div>
    </div>
  );
}

function Thumbnail1() {
  return (
    <div className="h-[200px] relative rounded-[12px] shrink-0 w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgThumbnail1} />
        <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0 rounded-[12px]" />
      </div>
    </div>
  );
}

function ArrowUpRight1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-up-right">
          <path d={svgPaths.p1908cf00} id="Vector" stroke="var(--stroke-0, #F2F1EC)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ArrowUpRight1 />
    </div>
  );
}

function CardFooter1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-footer">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">2025</p>
      <Frame9 />
    </div>
  );
}

function WorkCard1() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="work-card">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Thumbnail1 />
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8a8a83] text-[14px] whitespace-nowrap">02</p>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-full relative text-[#f2f1ec] text-[28px] w-[min-content]">KitaLabel Price Calculator</p>
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#8a8a83] text-[13px] w-[min-content]">Web Plugin · AI-Assisted Development</p>
        <CardFooter1 />
      </div>
    </div>
  );
}

function Thumbnail2() {
  return (
    <div className="h-[200px] relative rounded-[12px] shrink-0 w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgThumbnail2} />
        <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0 rounded-[12px]" />
      </div>
    </div>
  );
}

function ArrowUpRight2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-up-right">
          <path d={svgPaths.p1908cf00} id="Vector" stroke="var(--stroke-0, #F2F1EC)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ArrowUpRight2 />
    </div>
  );
}

function CardFooter2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-footer">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">2024-2025</p>
      <Frame10 />
    </div>
  );
}

function WorkCard2() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="work-card">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Thumbnail2 />
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8a8a83] text-[14px] whitespace-nowrap">03</p>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-full relative text-[#f2f1ec] text-[28px] w-[min-content]">CMIS - Enterprise Suite</p>
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#8a8a83] text-[13px] w-[min-content]">{`Enterprise · Document, Invoice & Purchase Flows`}</p>
        <CardFooter2 />
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] h-[429px] items-start relative shrink-0 w-full" data-name="row-1">
      <WorkCard />
      <WorkCard1 />
      <WorkCard2 />
    </div>
  );
}

function Thumbnail3() {
  return (
    <div className="h-[200px] relative rounded-[12px] shrink-0 w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgThumbnail3} />
        <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0 rounded-[12px]" />
      </div>
    </div>
  );
}

function ArrowUpRight3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-up-right">
          <path d={svgPaths.p1908cf00} id="Vector" stroke="var(--stroke-0, #F2F1EC)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ArrowUpRight3 />
    </div>
  );
}

function CardFooter3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-footer">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">2024</p>
      <Frame11 />
    </div>
  );
}

function WorkCard3() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="work-card">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Thumbnail3 />
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8a8a83] text-[14px] whitespace-nowrap">04</p>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-full relative text-[#f2f1ec] text-[28px] w-[min-content]">SONAR</p>
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#8a8a83] text-[13px] w-[min-content]">{`Email tracker Chrome extension - web design & landing page`}</p>
        <CardFooter3 />
      </div>
    </div>
  );
}

function Thumbnail4() {
  return (
    <div className="h-[200px] relative rounded-[12px] shrink-0 w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgThumbnail4} />
        <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0 rounded-[12px]" />
      </div>
    </div>
  );
}

function ArrowUpRight4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-up-right">
          <path d={svgPaths.p1908cf00} id="Vector" stroke="var(--stroke-0, #F2F1EC)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ArrowUpRight4 />
    </div>
  );
}

function CardFooter4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-footer">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">2023-2024</p>
      <Frame12 />
    </div>
  );
}

function WorkCard4() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="work-card">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Thumbnail4 />
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8a8a83] text-[14px] whitespace-nowrap">05</p>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-full relative text-[#f2f1ec] text-[28px] w-[min-content]">Universal Design System</p>
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#8a8a83] text-[13px] w-[min-content]">Design System · Component Library</p>
        <CardFooter4 />
      </div>
    </div>
  );
}

function Thumbnail5() {
  return (
    <div className="h-[200px] relative rounded-[12px] shrink-0 w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgThumbnail5} />
        <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0 rounded-[12px]" />
      </div>
    </div>
  );
}

function ArrowUpRight5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-up-right">
          <path d={svgPaths.p1908cf00} id="Vector" stroke="var(--stroke-0, #F2F1EC)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ArrowUpRight5 />
    </div>
  );
}

function CardFooter5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-footer">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">2023-2024</p>
      <Frame13 />
    </div>
  );
}

function WorkCard5() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="work-card">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Thumbnail5 />
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8a8a83] text-[14px] whitespace-nowrap">06</p>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-full relative text-[#f2f1ec] text-[28px] w-[min-content]">Mailtarget App</p>
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#8a8a83] text-[13px] w-[min-content]">SaaS · Email API</p>
        <CardFooter5 />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] h-[429px] items-start relative shrink-0 w-full" data-name="row-2">
      <WorkCard3 />
      <WorkCard4 />
      <WorkCard5 />
    </div>
  );
}

function Thumbnail6() {
  return (
    <div className="h-[200px] relative rounded-[12px] shrink-0 w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgThumbnail6} />
        <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0 rounded-[12px]" />
      </div>
    </div>
  );
}

function ArrowUpRight6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-up-right">
          <path d={svgPaths.p1908cf00} id="Vector" stroke="var(--stroke-0, #F2F1EC)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ArrowUpRight6 />
    </div>
  );
}

function CardFooter6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-footer">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">2023</p>
      <Frame14 />
    </div>
  );
}

function WorkCard6() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="work-card">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Thumbnail6 />
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8a8a83] text-[14px] whitespace-nowrap">07</p>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-full relative text-[#f2f1ec] text-[28px] w-[min-content]">Read/See Website</p>
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#8a8a83] text-[13px] w-[min-content]">Marketing · Customer Data Platform</p>
        <CardFooter6 />
      </div>
    </div>
  );
}

function Thumbnail7() {
  return (
    <div className="h-[200px] relative rounded-[12px] shrink-0 w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgThumbnail7} />
        <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0 rounded-[12px]" />
      </div>
    </div>
  );
}

function ArrowUpRight7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-up-right">
          <path d={svgPaths.p1908cf00} id="Vector" stroke="var(--stroke-0, #F2F1EC)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ArrowUpRight7 />
    </div>
  );
}

function CardFooter7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-footer">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">2023</p>
      <Frame15 />
    </div>
  );
}

function WorkCard7() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="work-card">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Thumbnail7 />
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8a8a83] text-[14px] whitespace-nowrap">08</p>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-full relative text-[#f2f1ec] text-[28px] w-[min-content]">Mailtarget Website</p>
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#8a8a83] text-[13px] w-[min-content]">Marketing · Email API</p>
        <CardFooter7 />
      </div>
    </div>
  );
}

function Thumbnail8() {
  return (
    <div className="h-[200px] relative rounded-[12px] shrink-0 w-full" data-name="thumbnail">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[12px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[12px] size-full" src={imgThumbnail8} />
        <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0 rounded-[12px]" />
      </div>
    </div>
  );
}

function ArrowUpRight8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-up-right">
          <path d={svgPaths.p1908cf00} id="Vector" stroke="var(--stroke-0, #F2F1EC)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[16px] shrink-0 size-[32px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ArrowUpRight8 />
    </div>
  );
}

function CardFooter8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="card-footer">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">2022-2023</p>
      <Frame16 />
    </div>
  );
}

function WorkCard8() {
  return (
    <div className="bg-[rgba(255,255,255,0.04)] flex-[1_0_0] h-full min-w-px relative rounded-[16px]" data-name="work-card">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[20px] relative size-full">
        <Thumbnail8 />
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8a8a83] text-[14px] whitespace-nowrap">09</p>
        <p className="[word-break:break-word] flex-[1_0_0] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[1.2] min-h-px min-w-full relative text-[#f2f1ec] text-[28px] w-[min-content]">Read/See Dashboard</p>
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#8a8a83] text-[13px] w-[min-content]">SaaS · CDP Product Design</p>
        <CardFooter8 />
      </div>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[24px] h-[395px] items-start relative shrink-0 w-full" data-name="row-3">
      <WorkCard6 />
      <WorkCard7 />
      <WorkCard8 />
    </div>
  );
}

function WorkCardGrid() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="work-card-grid">
      <Row />
      <Row1 />
      <Row2 />
    </div>
  );
}

function Work() {
  return (
    <div className="content-stretch flex flex-col items-start px-[64px] py-[120px] relative shrink-0 w-[1280px]" data-name="work">
      <SectionLabel />
      <Frame7 />
      <WorkCardGrid />
    </div>
  );
}

function SectionLabel1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Space_Mono:Regular',sans-serif] gap-[12px] items-start leading-[normal] not-italic pb-[40px] relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="section-label">
      <p className="relative shrink-0 text-[#cc6ef8]">02</p>
      <p className="relative shrink-0 text-[#9a9a93] uppercase">How I work</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[26px] w-full">Discover</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#9a9a93] text-[15px] w-full">Interviews, audits and data digging until the real problem surfaces — not the one in the brief.</p>
    </div>
  );
}

function ProcessCard() {
  return (
    <div className="flex-[1_0_0] min-w-px mr-[-1px] relative self-stretch" data-name="process-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[14px] whitespace-nowrap">01 Discover</p>
        <Frame18 />
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[26px] w-full">Define</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#9a9a93] text-[15px] w-full">Sharp problem statements, flows and success metrics. Align everyone before a pixel moves.</p>
    </div>
  );
}

function ProcessCard1() {
  return (
    <div className="flex-[1_0_0] min-w-px mr-[-1px] relative self-stretch" data-name="process-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[14px] whitespace-nowrap">02 Define</p>
        <Frame19 />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[26px] w-full">Design</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#9a9a93] text-[15px] w-full">Systems first. Wireframes to polished UI, prototyped and pressure-tested with real users.</p>
    </div>
  );
}

function ProcessCard2() {
  return (
    <div className="flex-[1_0_0] min-w-px mr-[-1px] relative self-stretch" data-name="process-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[14px] whitespace-nowrap">03 Design</p>
        <Frame20 />
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[26px] w-full">Deliver</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#9a9a93] text-[15px] w-full">Tight handoff, documented components, and partnership with engineering through ship.</p>
    </div>
  );
}

function ProcessCard3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative self-stretch" data-name="process-card">
      <div aria-hidden className="absolute border border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start p-[40px] relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[14px] whitespace-nowrap">04 Deliver</p>
        <Frame21 />
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex h-[278px] items-start relative shrink-0 w-full" data-name="Frame">
      <ProcessCard />
      <ProcessCard1 />
      <ProcessCard2 />
      <ProcessCard3 />
    </div>
  );
}

function Process() {
  return (
    <div className="bg-[#0c0c0b] content-stretch flex flex-col items-start px-[64px] py-[120px] relative shrink-0 w-[1280px]" data-name="process">
      <SectionLabel1 />
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#f2f1ec] text-[60px] whitespace-nowrap">
        <span className="leading-[normal]">{`A process built for `}</span>
        <span className="font-['Instrument_Serif:Italic',sans-serif] italic leading-[normal] text-[#cc6ef8]">ambiguity</span>
      </p>
      <Frame17 />
    </div>
  );
}

function SectionLabel2() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Space_Mono:Regular',sans-serif] gap-[12px] items-start leading-[normal] not-italic pb-[40px] relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="section-label">
      <p className="relative shrink-0 text-[#cc6ef8]">03</p>
      <p className="relative shrink-0 text-[#9a9a93] uppercase">About</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#111] content-stretch flex h-[550px] items-end overflow-clip p-[24px] relative rounded-[24px] shrink-0 w-[440px]" data-name="Frame">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[391px] top-[calc(50%+0.5px)]">
        <div className="absolute inset-[-102.3%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1191 1191">
            <g filter="url(#filter0_f_16_4665)" id="Ellipse 1">
              <circle cx="595.5" cy="595.5" fill="var(--fill-0, #CC6EF8)" r="195.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1191" id="filter0_f_16_4665" width="1191" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_16_4665" stdDeviation="200" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[12px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgImage1} />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#cc6ef8] text-[48px]">5+</p>
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#8a8a83] text-[12px] uppercase">Years designing</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#cc6ef8] text-[48px]">40+</p>
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#8a8a83] text-[12px] uppercase">Products shipped</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#cc6ef8] text-[48px]">12</p>
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#8a8a83] text-[12px] uppercase">Design systems</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <Frame26 />
      <Frame27 />
      <Frame28 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[16px]">{`Product Designer (UI/UX) & Vibe Coder`}</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#9a9a93] text-[14px]">Cahaya Jakarta Group</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[40px] items-start py-[24px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8a8a83] text-[12px] w-[100px]">2024 — Now</p>
      <Frame31 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[16px]">Product Designer (UI/UX)</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#9a9a93] text-[14px]">Mailtarget.co</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[40px] items-start py-[24px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8a8a83] text-[12px] w-[100px]">2022 — 2023</p>
      <Frame33 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[16px]">Graphic Designer</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#9a9a93] text-[14px]">MTARGET.CO</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[40px] items-start py-[24px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#8a8a83] text-[0px] w-[100px]">
        <span className="leading-[normal] text-[12px]">{`2022 `}</span>
        <span className="leading-[normal] text-[10px]">(9 Month)</span>
      </p>
      <Frame35 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[16px]">Email Marketing Specialist</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal relative shrink-0 text-[#9a9a93] text-[14px]">MTAREGT.CO</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[40px] items-start py-[24px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8a8a83] text-[12px] w-[100px]">2021 — 2022</p>
      <Frame37 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame30 />
      <Frame32 />
      <Frame34 />
      <Frame36 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[64px] items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9a9a93] text-[30px] w-full">
        <span className="leading-[1.4]">{`I've spent `}</span>
        <span className="font-['Instrument_Serif:Italic',sans-serif] italic leading-[1.4] text-[#cc6ef8]">six years</span>
        <span className="leading-[1.4]">{` designing the unglamorous, high-stakes parts of software — dashboards, data tables, settings, flows nobody notices until they break. I care about systems that `}</span>
        <span className="leading-[1.4] text-[#f2f1ec]">scale</span>
        <span className="leading-[1.4]">{` and details that `}</span>
        <span className="leading-[1.4] text-[#f2f1ec]">earn trust</span>
        <span className="leading-[1.4]">.</span>
      </p>
      <Frame25 />
      <Frame29 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function About() {
  return (
    <div className="content-stretch flex flex-col items-start px-[64px] py-[120px] relative shrink-0 w-[1280px]" data-name="about">
      <SectionLabel2 />
      <Frame22 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#cc6ef8] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[32px] shrink-0" data-name="button">
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#010101] text-[14px] whitespace-nowrap">Email me</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[32px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#cc6ef8] text-[14px] whitespace-nowrap">Linkedin</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[32px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#cc6ef8] text-[14px] whitespace-nowrap">WhatsApp</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[32px] shrink-0" data-name="button">
      <div aria-hidden className="absolute border border-[#cc6ef8] border-solid inset-0 pointer-events-none rounded-[32px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#cc6ef8] text-[14px] whitespace-nowrap">Instagram</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-name="Frame">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Contact() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center py-[200px] relative shrink-0 w-[1280px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 1280 712' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(0 35.6 -64 0 640 356)'><stop stop-color='rgba(200,255,77,0.10196)' offset='0'/><stop stop-color='rgba(200,255,77,0)' offset='0.8'/></radialGradient></defs></svg>\"), linear-gradient(90deg, rgb(10, 10, 10) 0%, rgb(10, 10, 10) 100%)" }} data-name="contact">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] uppercase whitespace-nowrap">{`04 — Let's build something`}</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#f2f1ec] text-[120px] whitespace-nowrap">
        <span className="leading-[normal]">{`Let's `}</span>
        <span className="font-['Instrument_Serif:Italic',sans-serif] italic leading-[normal] text-[#cc6ef8]">talk</span>
        <span className="leading-[normal]">{` →`}</span>
      </p>
      <Frame38 />
    </div>
  );
}

function ArrowUp() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="arrow-up">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g id="arrow-up">
          <path d={svgPaths.pa06ac80} id="Vector" stroke="var(--stroke-0, #6F6F68)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6f6f68] text-[11px] whitespace-nowrap">Back to top</p>
      <ArrowUp />
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex items-start justify-between px-[64px] py-[48px] relative shrink-0 w-[1280px]" data-name="footer">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-solid border-t inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6f6f68] text-[11px] whitespace-nowrap">© 2026 Dheoryan Putra Arsi</p>
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6f6f68] text-[11px] whitespace-nowrap">{`Designed & built with intent`}</p>
      <Frame39 />
    </div>
  );
}

export default function PortfolioDheoryan() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start relative size-full" data-name="portfolio-dheoryan">
      <Navbar />
      <Hero />
      <Marquee />
      <Work />
      <Process />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}