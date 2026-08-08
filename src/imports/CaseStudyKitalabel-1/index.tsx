import { useState } from "react";
import { ArrowRight, Calculator, Check, MessageCircle, ShoppingCart, Upload, UserRoundCheck } from "lucide-react";

const imgIc = "/case-studies/kitalabel/image-01.png";
const imgIc1 = "/case-studies/kitalabel/image-02.png";
const imgIc2 = "/case-studies/kitalabel/image-03.png";
const imgIc3 = "/case-studies/kitalabel/image-04.png";
const imgIc4 = "/case-studies/kitalabel/image-05.png";
const imgIc5 = "/case-studies/kitalabel/image-06.png";
const imgIc6 = "/case-studies/kitalabel/image-07.png";
const imgIc7 = "/case-studies/kitalabel/image-08.png";

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
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">Designer + FE Engineer</p>
    </div>
  );
}

function Mc1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">PLATFORM</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">kitalabel.com</p>
    </div>
  );
}

function Mc2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">YEAR</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">2025</p>
    </div>
  );
}

function Mc3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">TYPE</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">Web Plugin</p>
    </div>
  );
}

function Mc4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0" data-name="mc">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[11px] tracking-[1.1px]">STACK</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">WordPress · WooCommerce</p>
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
    <div className="h-[380px] pointer-events-none relative rounded-[8px] shrink-0 w-[1152px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain rounded-[8px] size-full" src={imgIc} />
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.08)] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[28px] items-start overflow-clip pb-[80px] pt-[120px] px-[64px] relative shrink-0 w-[1280px]" data-name="hero">
      <div className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#f2f1ec] text-[82px] tracking-[-2.46px] w-[1152px]">
        <p className="leading-[72px] mb-0">KitaLabel</p>
        <p className="leading-[72px]">Price Calculator</p>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#cc6ef8] text-[20px] whitespace-nowrap">Custom WordPress plugin for self-service label pricing on kitalabel.com</p>
      <Meta />
      <Ic />
    </div>
  );
}

function Ctx() {
  return (
    <div className="[word-break:break-word] bg-[#0a0a0a] content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="ctx">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">00 — The Problem</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[46px] tracking-[-0.92px] whitespace-nowrap">The problem</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#9a9a93] text-[17px] w-[1152px]">Sales collected the requested label specifications, handed them to the Estimator PIC, then waited for the quote to move through that estimator's daily queue. Customers had no immediate price visibility, and response time depended on the estimator's workload.</p>
    </div>
  );
}

function Ctx1() {
  return (
    <div className="[word-break:break-word] bg-[#0a0a0a] content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="ctx">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">01 — Context</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[46px] tracking-[-0.92px] whitespace-nowrap">What is KitaLabel?</p>
      <div className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9a9a93] text-[17px] w-[1152px] whitespace-pre-wrap">
        <p className="leading-[30px] mb-0">{`KitaLabel is Indonesia's first online label printing platform — "Platform Cetak Label Online Pertama di Indonesia". It serves small-to-medium product businesses (food, beverage, cosmetics, pharmaceuticals) who need custom-printed product labels delivered to their door.`}</p>
        <p className="leading-[30px] mb-0">​</p>
        <p className="leading-[30px] mb-0">{`The platform's ambition was to be fully self-service: browse, configure, pay, and receive — without ever talking to a salesperson.`}</p>
        <p className="leading-[30px] mb-0">​</p>
        <p className="leading-[30px]">This project was a milestone on two levels: it was the first project where I integrated AI into the product feature set, and I was involved not just as a designer but also built the frontend implementation as a Front-end Engineer — working directly in WordPress with custom JavaScript and WooCommerce hooks.</p>
      </div>
    </div>
  );
}

function It() {
  return (
    <div className="bg-[#141414] relative rounded-[8px] shrink-0 w-[564px]" data-name="it">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px] whitespace-nowrap">High drop-off rate</p>
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[524px]">{`Customers who had to "contact us for a quote" often left and ordered from competitors who showed upfront pricing.`}</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function It1() {
  return (
    <div className="bg-[#141414] relative rounded-[8px] shrink-0 w-[564px]" data-name="it">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px] whitespace-nowrap">Estimator queue bottleneck</p>
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[524px]">Sales had to repackage every request for the Estimator PIC, and each quote waited behind the estimates already assigned that day.</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function It2() {
  return (
    <div className="bg-[#141414] relative rounded-[8px] shrink-0 w-[564px]" data-name="it">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start overflow-clip p-[20px] relative rounded-[inherit] size-full">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px] whitespace-nowrap">No late-night orders</p>
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[524px]">{`Indonesian SME owners browse at night. Without self-service, they couldn't order outside business hours.`}</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Pl() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start overflow-clip relative shrink-0 w-[564px]" data-name="pl">
      <div className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9a9a93] text-[17px] w-[564px] whitespace-pre-wrap">
        <p className="leading-[28px] mb-0">{`Before this feature, every customer who wanted a label quote had to contact KitaLabel's sales team by WhatsApp or phone. Sales collected the specifications and requested the price from the Estimator PIC, where the job entered a daily queue based on the estimator's workload.`}</p>
        <p className="leading-[28px] mb-0">​</p>
        <p className="leading-[28px]">This created three critical problems:</p>
      </div>
      <It />
      <It1 />
      <It2 />
    </div>
  );
}

function Rv() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip py-[4px] relative shrink-0" data-name="rv">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #CC6EF8)" fillOpacity="0.5" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9a9a93] text-[13px] w-[544px]">
        <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[20px]">Shape</span>
        <span className="leading-[20px]">{` — Circle, Oval, Rectangle, Square, or Irregular — each has different die-cut costs`}</span>
      </p>
    </div>
  );
}

function Rv1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip py-[4px] relative shrink-0" data-name="rv">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #CC6EF8)" fillOpacity="0.5" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9a9a93] text-[13px] w-[544px]">
        <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[20px]">Material</span>
        <span className="leading-[20px]">{` — Paper White, Film White, Film Silver, Film Transparan, and more — different substrate costs`}</span>
      </p>
    </div>
  );
}

function Rv2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip py-[4px] relative shrink-0" data-name="rv">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #CC6EF8)" fillOpacity="0.5" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9a9a93] text-[13px] w-[544px]">
        <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[20px]">Lamination</span>
        <span className="leading-[20px]">{` — Glossy vs Matte — affects surface finish and unit price`}</span>
      </p>
    </div>
  );
}

function Rv3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip py-[4px] relative shrink-0" data-name="rv">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #CC6EF8)" fillOpacity="0.5" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9a9a93] text-[13px] w-[544px]">
        <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[20px]">Size</span>
        <span className="leading-[20px]">{` — Custom W × H in mm — larger labels cost more per unit`}</span>
      </p>
    </div>
  );
}

function Rv4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip py-[4px] relative shrink-0" data-name="rv">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #CC6EF8)" fillOpacity="0.5" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9a9a93] text-[13px] w-[544px]">
        <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[20px]">Print Direction</span>
        <span className="leading-[20px]">{` — 4 arah cetak (roll orientations) — affects run efficiency on press`}</span>
      </p>
    </div>
  );
}

function Rv5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip py-[4px] relative shrink-0" data-name="rv">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #CC6EF8)" fillOpacity="0.5" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9a9a93] text-[13px] w-[544px]">
        <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[20px]">Output Type</span>
        <span className="leading-[20px]">{` — Roll vs Sheet — different finishing costs`}</span>
      </p>
    </div>
  );
}

function Rv6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip py-[4px] relative shrink-0" data-name="rv">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #CC6EF8)" fillOpacity="0.5" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9a9a93] text-[13px] w-[544px]">
        <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[20px]">Design Variants</span>
        <span className="leading-[20px]">{` — 1 to N design artworks — more variants = more setup cost`}</span>
      </p>
    </div>
  );
}

function Rv7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center overflow-clip py-[4px] relative shrink-0" data-name="rv">
      <div className="relative shrink-0 size-[5px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <circle cx="2.5" cy="2.5" fill="var(--fill-0, #CC6EF8)" fillOpacity="0.5" id="Ellipse" r="2.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9a9a93] text-[13px] w-[544px]">
        <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[20px]">Quantity</span>
        <span className="leading-[20px]">{` — Tiered pricing: 1,000 / 2,000 / 3,000 / 5,000 / custom — non-linear scale`}</span>
      </p>
    </div>
  );
}

const pricingInputs = [
  {
    label: "Shape",
    detail: "Die-cut setup",
    tone: "#cc6ef8",
    impact: "Circle, oval, rectangle, square, and irregular shapes each need different cutting assumptions.",
    formula: "shape cost",
  },
  {
    label: "Material",
    detail: "Substrate cost",
    tone: "#64c8ff",
    impact: "Paper, white film, silver film, and transparent film all change the base material cost.",
    formula: "material base",
  },
  {
    label: "Lamination",
    detail: "Finish cost",
    tone: "#f8c46e",
    impact: "Glossy and matte finishes change both the surface treatment and the final unit price.",
    formula: "finish add-on",
  },
  {
    label: "Size",
    detail: "Area per label",
    tone: "#7cf0a1",
    impact: "Custom width and height affect material usage, label yield, and price per unit.",
    formula: "Lebar Desain x Tinggi Desain",
  },
  {
    label: "Print Direction",
    detail: "Press efficiency",
    tone: "#ff8dff",
    impact: "Roll orientation affects how efficiently the job can run on press.",
    formula: "roll direction",
  },
  {
    label: "Output Type",
    detail: "Finishing cost",
    tone: "#a7a7ff",
    impact: "Roll and sheet outputs require different finishing work after printing.",
    formula: "roll / sheet",
  },
  {
    label: "Design Variants",
    detail: "Setup effort",
    tone: "#f87171",
    impact: "More artwork variants increase prepress setup and checking time before production.",
    formula: "variant count",
  },
  {
    label: "Quantity",
    detail: "Tiered pricing",
    tone: "#cc6ef8",
    impact: "The price scale is non-linear because 1,000, 2,000, 3,000, 5,000, and custom tiers behave differently.",
    formula: "tier scale",
  },
];

function PricingVariableCard({
  label,
  detail,
  tone,
  active,
  onActivate,
}: {
  label: string;
  detail: string;
  tone: string;
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <button
      className="min-h-[74px] relative rounded-[10px] shrink-0 text-left transition-all duration-200 w-[136px]"
      data-name="pricing-variable"
      onClick={onActivate}
      onFocus={onActivate}
      onMouseEnter={onActivate}
      style={{
        background: active ? "rgba(204,110,248,0.12)" : "#141414",
        border: `1px solid ${active ? tone : "rgba(242,241,236,0.1)"}`,
        boxShadow: active ? `0 0 0 1px ${tone}33, 0 12px 30px rgba(0,0,0,0.24)` : "none",
        cursor: "pointer",
        padding: 0,
      }}
      type="button"
    >
      <div className="content-stretch flex flex-col gap-[8px] h-full items-start justify-between overflow-clip px-[12px] py-[11px] relative rounded-[inherit]">
        <div className="flex gap-[6px] items-center relative shrink-0">
          <span className="block rounded-full shrink-0 size-[7px]" style={{ background: tone }} />
          <p
            className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] tracking-[0.8px] whitespace-nowrap"
            style={{ color: active ? tone : "#6f6f68" }}
          >
            INPUT
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0">
          <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[13px] whitespace-nowrap">{label}</p>
          <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#9a9a93] text-[11px] w-[112px]">{detail}</p>
        </div>
      </div>
    </button>
  );
}

function PricingComplexityMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = pricingInputs[activeIndex];
  const connectorPaths = [
    "M28 34 C76 36 84 72 113 93",
    "M28 80 C74 82 86 92 113 100",
    "M28 126 C74 123 86 112 113 107",
    "M28 172 C76 158 84 126 113 115",
    "M202 34 C154 36 146 72 117 93",
    "M202 80 C156 82 144 92 117 100",
    "M202 126 C156 123 144 112 117 107",
    "M202 172 C154 158 146 126 117 115",
  ];

  return (
    <div className="bg-[#10100f] relative rounded-[16px] shrink-0 w-[564px]" data-name="pricingComplexityMap">
      <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[318px]">
            <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px]">Why is label pricing hard to self-serve?</p>
            <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#9a9a93] text-[13px] w-[318px]">A quote is not one formula. It is a chain of specs, production rules, and tier logic that all change the final price.</p>
          </div>
          <div className="bg-[rgba(204,110,248,0.1)] relative rounded-[28px] shrink-0">
            <div className="content-stretch flex items-center justify-center overflow-clip px-[12px] py-[7px] relative rounded-[inherit]">
              <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[11px] whitespace-nowrap">8 variables</p>
            </div>
            <div aria-hidden className="absolute border border-[rgba(204,110,248,0.35)] border-solid inset-0 pointer-events-none rounded-[28px]" />
          </div>
        </div>

        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0">
            {pricingInputs.slice(0, 4).map((item, index) => (
              <PricingVariableCard
                active={activeIndex === index}
                key={item.label}
                onActivate={() => setActiveIndex(index)}
                {...item}
              />
            ))}
          </div>

          <div className="content-stretch flex flex-col gap-[14px] items-center justify-center relative shrink-0 w-[200px]">
            <div className="relative h-[190px] shrink-0 w-[230px]">
            <div className="absolute bg-[rgba(204,110,248,0.08)] h-[190px] left-[20px] rounded-full top-0 w-[190px]" />
            <div className="absolute bg-[rgba(100,200,255,0.07)] h-[126px] left-[52px] rounded-full top-[32px] w-[126px]" />
            <svg className="absolute h-[190px] left-0 top-0 w-[230px]" fill="none" viewBox="0 0 230 190">
              {connectorPaths.map((path, index) => (
                <path
                  d={path}
                  key={path}
                  stroke={pricingInputs[index].tone}
                  strokeLinecap="round"
                  strokeOpacity={activeIndex === index ? 0.9 : 0.16}
                  strokeWidth={activeIndex === index ? 1.8 : 1}
                />
              ))}
            </svg>

            <div className="absolute bg-[#0a0a0a] h-[132px] left-[49px] rounded-full top-[29px] w-[132px]">
              <div className="absolute blur-[16px] h-[84px] left-[24px] rounded-full top-[24px] w-[84px]" style={{ background: `${active.tone}33` }} />
              <div className="absolute content-stretch flex flex-col gap-[7px] h-full items-center justify-center left-0 top-0 w-full">
                <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6f6f68] text-[9px] tracking-[1px] whitespace-nowrap">PRICE ENGINE</p>
                <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[28px] whitespace-nowrap">Rp ?</p>
                <p
                  className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[12px] not-italic relative shrink-0 text-[9px] text-center w-[92px]"
                  style={{ color: active.tone }}
                >
                  {active.formula}
                </p>
              </div>
              <div aria-hidden className="absolute border border-solid inset-0 pointer-events-none rounded-full" style={{ borderColor: `${active.tone}88` }} />
            </div>
            </div>

            <div className="bg-[#141414] min-h-[108px] relative rounded-[12px] shrink-0 w-[196px]">
              <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[14px] relative rounded-[inherit]">
                <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] tracking-[0.9px] whitespace-nowrap" style={{ color: active.tone }}>ACTIVE VARIABLE</p>
                <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px] whitespace-nowrap">{active.label}</p>
                <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[17px] relative shrink-0 text-[#9a9a93] text-[12px] w-[168px]">{active.impact}</p>
              </div>
              <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            </div>
          </div>

          <div className="content-stretch flex flex-col gap-[9px] items-start relative shrink-0">
            {pricingInputs.slice(4).map((item, index) => (
              <PricingVariableCard
                active={activeIndex === index + 4}
                key={item.label}
                onActivate={() => setActiveIndex(index + 4)}
                {...item}
              />
            ))}
          </div>
        </div>

        <div className="content-stretch flex gap-[8px] items-stretch relative shrink-0 w-full">
          <div className="bg-[#141414] min-h-[76px] relative rounded-[10px] shrink-0 w-[166px]">
            <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip p-[14px] relative rounded-[inherit]">
              <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[10px] tracking-[0.8px] whitespace-nowrap">CUSTOMER SEES</p>
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[17px] relative shrink-0 text-[#f2f1ec] text-[13px] w-[136px]">No instant answer</p>
            </div>
          </div>
          <div className="bg-[#141414] min-h-[76px] relative rounded-[10px] shrink-0 w-[166px]">
            <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip p-[14px] relative rounded-[inherit]">
              <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64c8ff] text-[10px] tracking-[0.8px] whitespace-nowrap">SALES DOES</p>
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[17px] relative shrink-0 text-[#f2f1ec] text-[13px] w-[136px]">Request estimator pricing</p>
            </div>
          </div>
          <div className="bg-[#141414] min-h-[76px] relative rounded-[10px] shrink-0 w-[166px]">
            <div className="content-stretch flex flex-col gap-[7px] items-start overflow-clip p-[14px] relative rounded-[inherit]">
              <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#f8c46e] text-[10px] tracking-[0.8px] whitespace-nowrap">BUSINESS RISK</p>
              <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[17px] relative shrink-0 text-[#f2f1ec] text-[13px] w-[136px]">Drop-off before checkout</p>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Pr() {
  return (
    <PricingComplexityMap />
  );
}

const assistedQuoteSteps = [
  "Send requirements on WhatsApp",
  "Sales checks and formats the specifications",
  "Sales sends the request to the Estimator PIC",
  "Wait in the estimator's daily quote queue",
  "Receive the price and return to order",
];

const standardPluginSteps = [
  { icon: Calculator, title: "Choose label specifications", detail: "Shape, material, finish, size, and quantity" },
  { icon: Check, title: "See the price immediately", detail: "Production rules calculate the standard job" },
  { icon: ShoppingCart, title: "Upload and checkout", detail: "Continue without leaving the product page" },
];

const specialPluginSteps = [
  { icon: Calculator, title: "Choose the known specifications", detail: "Capture the basics once in a structured form" },
  { icon: Upload, title: "Upload the special design", detail: "Artwork and requirements stay attached to the request" },
  { icon: UserRoundCheck, title: "Send a complete brief to sales", detail: "An expert reviews what cannot be priced automatically" },
];

function QuoteWorkflowComparison() {
  const [mode, setMode] = useState<"standard" | "special">("standard");
  const isStandard = mode === "standard";
  const pluginSteps = isStandard ? standardPluginSteps : specialPluginSteps;

  return (
    <div className="bg-[#10100f] relative rounded-[16px] shrink-0 w-[1152px]" data-name="quoteWorkflowComparison">
      <div className="content-stretch flex flex-col gap-[26px] items-start overflow-clip p-[28px] relative rounded-[inherit] size-full">
        <div className="flex items-start justify-between gap-[32px] w-full">
          <div className="flex flex-col gap-[7px] max-w-[580px]">
            <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] text-[#f2f1ec] text-[20px]">What the custom plugin removes</p>
            <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[21px] text-[#9a9a93] text-[13px]">
              Standard label jobs use known production rules. They should not need a salesperson to translate specifications into a price.
            </p>
          </div>

          <div className="bg-[#0a0a0a] flex gap-[4px] p-[4px] rounded-[10px]" aria-label="Label design type">
            <button
              aria-pressed={isStandard}
              className="font-['Space_Mono:Regular',sans-serif] px-[14px] py-[9px] rounded-[7px] text-[10px] tracking-[0.5px] transition-colors"
              onClick={() => setMode("standard")}
              style={{ background: isStandard ? "#cc6ef8" : "transparent", color: isStandard ? "#0a0a0a" : "#8b8b84" }}
              type="button"
            >
              STANDARD LABEL
            </button>
            <button
              aria-pressed={!isStandard}
              className="font-['Space_Mono:Regular',sans-serif] px-[14px] py-[9px] rounded-[7px] text-[10px] tracking-[0.5px] transition-colors"
              onClick={() => setMode("special")}
              style={{ background: !isStandard ? "#cc6ef8" : "transparent", color: !isStandard ? "#0a0a0a" : "#8b8b84" }}
              type="button"
            >
              SPECIAL DESIGN
            </button>
          </div>
        </div>

        <div className="grid grid-cols-[1fr_112px_1fr] gap-[12px] items-stretch w-full">
          <div className="bg-[#0a0a0a] rounded-[14px] p-[22px] flex flex-col gap-[18px] border border-[rgba(242,241,236,0.09)]">
            <div className="flex items-center justify-between gap-[12px]">
              <div className="flex items-center gap-[10px] text-[#8b8b84]"><MessageCircle aria-hidden size={18} /><p className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[#f2f1ec] text-[15px]">Before: assisted quote</p></div>
              <p className="font-['Space_Mono:Regular',sans-serif] text-[#6f6f68] text-[9px] tracking-[0.8px]">5 TOUCHPOINTS</p>
            </div>
            <div className="flex flex-col">
              {assistedQuoteSteps.map((step, index) => (
                <div className="flex gap-[12px] items-center py-[11px] border-t border-[rgba(242,241,236,0.07)] first:border-t-0" key={step}>
                  <span className="font-['Space_Mono:Regular',sans-serif] text-[#5f5f59] text-[10px] w-[18px]">0{index + 1}</span>
                  <p className="font-['Space_Grotesk:Regular',sans-serif] text-[#8f8f88] text-[13px] leading-[18px]">{step}</p>
                </div>
              ))}
            </div>
            <p className="font-['Space_Mono:Regular',sans-serif] text-[#f87171] text-[10px] leading-[16px] tracking-[0.4px]">The customer leaves the buying flow and waits.</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-[14px] min-w-0">
            <div className="h-px bg-[rgba(242,241,236,0.12)] w-full relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[40px] rounded-full bg-[#1a111f] text-[#cc6ef8] flex items-center justify-center"><ArrowRight aria-hidden size={18} /></div>
            </div>
            <p className="font-['Space_Mono:Regular',sans-serif] text-[#cc6ef8] text-[9px] text-center leading-[15px] tracking-[0.4px] whitespace-pre-line w-full">
              {isStandard ? "NO SALES\nHANDOFF" : "LESS BACK\nAND FORTH"}
            </p>
          </div>

          <div className="rounded-[14px] p-[22px] flex flex-col gap-[18px] border transition-colors duration-300" style={{ background: isStandard ? "rgba(204,110,248,0.08)" : "rgba(100,200,255,0.06)", borderColor: isStandard ? "rgba(204,110,248,0.42)" : "rgba(100,200,255,0.34)" }}>
            <div className="flex items-center justify-between gap-[12px]">
              <div className="flex items-center gap-[10px] text-[#cc6ef8]"><Calculator aria-hidden size={18} /><p className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[#f2f1ec] text-[15px]">With the custom plugin</p></div>
              <p className="font-['Space_Mono:Regular',sans-serif] text-[#cc6ef8] text-[9px] tracking-[0.8px]">3 STEPS</p>
            </div>
            <div className="flex flex-col gap-[8px]">
              {pluginSteps.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <div className="bg-[rgba(10,10,10,0.72)] rounded-[10px] px-[14px] py-[13px] flex gap-[12px] items-start" key={step.title}>
                    <div className="size-[30px] rounded-full bg-[rgba(204,110,248,0.14)] text-[#cc6ef8] flex items-center justify-center shrink-0"><StepIcon aria-hidden size={14} /></div>
                    <div className="flex flex-col gap-[3px]">
                      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[#f2f1ec] text-[13px] leading-[17px]">{index + 1}. {step.title}</p>
                      <p className="font-['Space_Grotesk:Regular',sans-serif] text-[#8f8f88] text-[11px] leading-[16px]">{step.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="font-['Space_Mono:Regular',sans-serif] text-[10px] leading-[16px] tracking-[0.4px]" style={{ color: isStandard ? "#7cf0a1" : "#64c8ff" }}>
              {isStandard ? "Instant price for standard work. Checkout stays self-service." : "Expert review stays for work that genuinely needs it."}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-[24px] pt-[2px] w-full">
          <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium text-[#f2f1ec] text-[15px]">
            {isStandard ? "The plugin automates the repeatable decision, not the craft." : "Special designs still reach a specialist—with a complete brief attached."}
          </p>
          <p className="font-['Space_Mono:Regular',sans-serif] text-[#6f6f68] text-[9px] tracking-[0.7px] whitespace-nowrap">WORDPRESS · CUSTOM JAVASCRIPT · WOOCOMMERCE</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function ProbGrid() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-[1152px]" data-name="probGrid">
      <QuoteWorkflowComparison />
    </div>
  );
}

function Prob() {
  return (
    <div className="bg-[#0c0c0b] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="prob">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">02 — The Challenge</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[46px] tracking-[-0.92px] whitespace-nowrap">Standard labels should not need a sales conversation</p>
      <ProbGrid />
    </div>
  );
}

function Ic1() {
  return (
    <div className="absolute h-[520px] left-0 pointer-events-none rounded-[8px] top-0 w-[1152px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain rounded-[8px] size-full" src={imgIc1} />
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.08)] border-solid inset-0 rounded-[8px]" />
    </div>
  );
}

function Thmbnail() {
  return (
    <div className="bg-white h-[520px] relative rounded-[24px] shrink-0 w-[1152px]" data-name="thmbnail">
      <Ic1 />
    </div>
  );
}

function Pan() {
  return (
    <div className="bg-[#141414] relative rounded-[8px] shrink-0 w-[564px]" data-name="pan">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#cc6ef8] text-[15px] whitespace-nowrap">Left Panel — Specification Builder</p>
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[516px]">The customer configures every label variable here: shape (with icon picker), custom size in mm, material, lamination, number of design variants, packing format, and print direction.</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Pan1() {
  return (
    <div className="bg-[#141414] relative rounded-[8px] shrink-0 w-[564px]" data-name="pan">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#64c8ff] text-[15px] whitespace-nowrap">{`Right Panel — Pricing & Upload`}</p>
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#9a9a93] text-[14px] w-[516px]">{`Quantity tiers display price per batch. The customer uploads their design file here. "Ketentuan File Desain" modal educates them on file requirements before upload to reduce print quality issues.`}</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PanelRow() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="panelRow">
      <Pan />
      <Pan1 />
    </div>
  );
}

function Sol() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="sol">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">03 — The Solution</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#f2f1ec] text-[46px] tracking-[-0.92px] w-[min-content]">A self-service pricing plugin, built for WordPress + WooCommerce</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9a9a93] text-[17px] w-[1152px]">{`The answer was a custom WordPress plugin embedded directly on kitalabel.com. When a customer clicks "Pesan Label", they land on a full-page pricing interface — no contact form, no waiting. They configure their specs, check the price, upload their design file, and add to cart. The entire flow lives inside the existing WordPress/WooCommerce stack, which means orders, payments, and shipping all work out of the box.`}</p>
      <Thmbnail />
      <PanelRow />
    </div>
  );
}

function Aib() {
  return (
    <div className="bg-[rgba(204,110,248,0.08)] relative rounded-[20px] shrink-0" data-name="aib">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular','Noto_Sans:Regular','Noto_Sans_Math:Regular','Noto_Sans_Symbols:Regular','Noto_Sans_Symbols2:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#cc6ef8] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"wght" 400' }}>
          ✦ AI-Assisted Development
        </p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(204,110,248,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Ai() {
  return (
    <div className="bg-[#141414] relative rounded-[8px] shrink-0 w-[564px]" data-name="ai">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[32px] relative rounded-[inherit] size-full">
        <Aib />
        <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[24px] whitespace-nowrap">AI as a Coding Tool</p>
        <div className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9a9a93] text-[15px] w-[500px] whitespace-pre-wrap">
          <p className="leading-[26px] mb-0">This was the first project where I used AI as a development tool as a coding assistant to help me build and ship the plugin as a Front-end Engineer.</p>
          <p className="leading-[26px] mb-0">​</p>
          <p className="leading-[26px] mb-0">I used AI to accelerate the parts of frontend development I was less familiar with: generating WordPress plugin boilerplate, writing WooCommerce hook integrations, debugging JavaScript pricing logic, and structuring PHP templates. It let me move fast without compromising the design intent I had as the designer.</p>
          <p className="leading-[26px] mb-0">​</p>
          <p className="leading-[26px]">Using AI in this way changed how I think about the designer-developer boundary — when AI lowers the implementation barrier, the designer has less excuse not to build what they design.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Feb() {
  return (
    <div className="bg-[rgba(100,160,255,0.08)] relative rounded-[20px] shrink-0" data-name="feb">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[5px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#8cbeff] text-[12px] whitespace-nowrap">⚙ Frontend Engineer</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(100,160,255,0.3)] border-solid inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Fe() {
  return (
    <div className="bg-[#141414] relative rounded-[8px] shrink-0 w-[564px]" data-name="fe">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[32px] relative rounded-[inherit] size-full">
        <Feb />
        <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[24px] whitespace-nowrap">Designed it. Built it.</p>
        <div className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#9a9a93] text-[15px] w-[500px] whitespace-pre-wrap">
          <p className="leading-[26px] mb-0">{`I didn't hand this off — I built it. After finishing the design, I implemented the entire plugin as a Front-end Engineer:`}</p>
          <p className="leading-[26px] mb-0">​</p>
          <p className="leading-[26px] mb-0">· Custom WordPress plugin (PHP + JavaScript)</p>
          <p className="leading-[26px] mb-0">· WooCommerce integration — cart, checkout, order hooks</p>
          <p className="leading-[26px] mb-0">· On-demand price calculation logic in JS, connected to the backend pricing API</p>
          <p className="leading-[26px] mb-0">· File upload handling with client-side validation</p>
          <p className="leading-[26px] mb-0">{`· "Ketentuan File Desain" modal built from the design spec I made`}</p>
          <p className="leading-[26px] mb-0">· Responsive adaptation for mobile 430px</p>
          <p className="leading-[26px] mb-0">​</p>
          <p className="leading-[26px]">Working in both roles taught me where design decisions break down in implementation — and made me a much sharper designer for it.</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="row">
      <Ai />
      <Fe />
    </div>
  );
}

function AiFe() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="ai-fe">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">04 — Beyond Design</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[#f2f1ec] text-[46px] tracking-[-0.92px] w-[min-content]">AI-assisted development. First time as Frontend Engineer.</p>
      <Row />
    </div>
  );
}

function Ic2() {
  return (
    <div className="h-[200px] relative shrink-0 w-[320px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc2} />
    </div>
  );
}

function B() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[320px]" data-name="b1">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[11px] whitespace-nowrap">The Problem</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9a9a93] text-[13px] w-[320px]">If prices auto-updated on every field change, customers would see hundreds of confusing intermediate states mid-configuration.</p>
    </div>
  );
}

function B1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[320px]" data-name="b2">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64dc82] text-[11px] whitespace-nowrap">The Decision</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9a9a93] text-[13px] w-[320px]">{`"Cek Harga" (Check Price) is a deliberate action. Prices only calculate when the customer is ready, showing real values only when all specs are set. "Tambah ke Keranjang" activates only after this step.`}</p>
    </div>
  );
}

function Dc() {
  return (
    <div className="bg-[#141414] relative rounded-[8px] shrink-0 w-[368px]" data-name="dc">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Ic2 />
        <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[16px] whitespace-nowrap">{`"Cek Harga" on demand`}</p>
        <B />
        <B1 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Ic3() {
  return (
    <div className="h-[200px] relative shrink-0 w-[320px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc3} />
    </div>
  );
}

function B2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[320px]" data-name="b1">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[11px] whitespace-nowrap">The Problem</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9a9a93] text-[13px] w-[320px]">Five label shapes (Circle, Oval, Rectangle, Square, Irregular) mean very different products. A text dropdown makes them feel interchangeable.</p>
    </div>
  );
}

function B3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[320px]" data-name="b2">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64dc82] text-[11px] whitespace-nowrap">The Decision</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9a9a93] text-[13px] w-[320px]">{`Shape selector uses visual icons. Customers instantly see what shape they're ordering — the icon maps directly to what they'll receive in the box. This makes the selected product easier to verify before calculation.`}</p>
    </div>
  );
}

function Dc1() {
  return (
    <div className="bg-[#141414] relative rounded-[8px] shrink-0 w-[368px]" data-name="dc">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Ic3 />
        <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[16px] whitespace-nowrap">Shape icons, not a text dropdown</p>
        <B2 />
        <B3 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Ic4() {
  return (
    <div className="h-[200px] relative shrink-0 w-[320px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc4} />
    </div>
  );
}

function B4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[320px]" data-name="b1">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[11px] whitespace-nowrap">The Problem</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9a9a93] text-[13px] w-[320px]">Print shops constantly receive unusable design files — wrong colour mode, low resolution, missing bleed. This creates expensive reprints and delays.</p>
    </div>
  );
}

function B5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip relative shrink-0 w-[320px]" data-name="b2">
      <p className="font-['Space_Mono:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#64dc82] text-[11px] whitespace-nowrap">The Decision</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#9a9a93] text-[13px] w-[320px]">{`A "Ketentuan File Desain" link lives next to the upload field. One click opens a detailed guide: Bleed Line, Cut Line, Clear Line, CMYK format, 300 dpi, Outline fonts. Downloadable AI + PDF guide included.`}</p>
    </div>
  );
}

function Dc2() {
  return (
    <div className="bg-[#141414] relative rounded-[8px] shrink-0 w-[368px]" data-name="dc">
      <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Ic4 />
        <p className="[word-break:break-word] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[16px] whitespace-nowrap">{`"Ketentuan File Desain" in the upload area`}</p>
        <B4 />
        <B5 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function DecGrid() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="decGrid">
      <Dc />
      <Dc1 />
      <Dc2 />
    </div>
  );
}

function Dec() {
  return (
    <div className="bg-[#0c0c0b] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="dec">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">05 — Key Design Decisions</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[46px] tracking-[-0.92px] whitespace-nowrap">Why it works the way it does</p>
      <DecGrid />
    </div>
  );
}

function S() {
  return (
    <div className="bg-[#0a0a0a] h-[52px] sm:h-[60px] relative shrink-0 w-full lg:w-[192px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col items-center justify-center leading-[normal] overflow-clip relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#cc6ef8] text-[11px]">1</p>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#f2f1ec] text-[12px]">Configure Specs</p>
      </div>
      <div aria-hidden className="absolute border-[rgba(242,241,236,0.08)] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function S1() {
  return (
    <div className="bg-[#141414] h-[52px] sm:h-[60px] relative shrink-0 w-full lg:w-[192px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col items-center justify-center leading-[normal] overflow-clip relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#cc6ef8] text-[11px]">2</p>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#f2f1ec] text-[12px]">Cek Harga</p>
      </div>
      <div aria-hidden className="absolute border-[rgba(242,241,236,0.08)] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function S2() {
  return (
    <div className="bg-[#141414] h-[52px] sm:h-[60px] relative shrink-0 w-full lg:w-[192px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col items-center justify-center leading-[normal] overflow-clip relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#cc6ef8] text-[11px]">3</p>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#f2f1ec] text-[12px]">Upload File</p>
      </div>
      <div aria-hidden className="absolute border-[rgba(242,241,236,0.08)] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function S3() {
  return (
    <div className="bg-[#141414] h-[52px] sm:h-[60px] relative shrink-0 w-full lg:w-[192px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col items-center justify-center leading-[normal] overflow-clip relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#cc6ef8] text-[11px]">4</p>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#f2f1ec] text-[12px]">Tambah ke Keranjang</p>
      </div>
      <div aria-hidden className="absolute border-[rgba(242,241,236,0.08)] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function S4() {
  return (
    <div className="bg-[#141414] h-[52px] sm:h-[60px] relative shrink-0 w-full lg:w-[192px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col items-center justify-center leading-[normal] overflow-clip relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#cc6ef8] text-[11px]">5</p>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#f2f1ec] text-[12px]">Checkout</p>
      </div>
      <div aria-hidden className="absolute border-[rgba(242,241,236,0.08)] border-r border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function S5() {
  return (
    <div className="[word-break:break-word] bg-[#141414] content-stretch flex flex-col h-[52px] sm:h-[60px] items-center justify-center leading-[normal] overflow-clip relative shrink-0 w-full lg:w-[192px] whitespace-nowrap" data-name="s">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#cc6ef8] text-[11px]">6</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#f2f1ec] text-[12px]">{`Bayar & Pesan`}</p>
    </div>
  );
}

function FlowStrip() {
  const steps = [
    "Configure Specs",
    "Cek Harga",
    "Upload File",
    "Tambah ke Keranjang",
    "Checkout",
    "Bayar & Pesan",
  ];

  return (
    <div className="relative shrink-0 w-full max-w-[1152px] py-[10px]" data-name="flowStrip">
      <div aria-hidden className="absolute bg-[rgba(242,241,236,0.12)] h-px left-[8.33%] right-[8.33%] top-[27px]" />
      <ol aria-label="KitaLabel order flow" className="grid grid-cols-6 relative w-full">
        {steps.map((step, index) => (
          <li className="flex flex-col items-center gap-[10px] min-w-0 px-[8px] text-center" key={step}>
            <span
              className="bg-[#0c0c0b] border border-[rgba(204,110,248,0.5)] flex items-center justify-center rounded-full size-[34px] font-['Space_Mono:Regular',sans-serif] text-[#cc6ef8] text-[10px] relative z-[1]"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[16px] text-[#f2f1ec] text-[12px] max-w-[150px]">
              {step}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

const validationStates = [
  {
    number: "01",
    label: "Specs ready",
    title: "Cek Harga becomes the commitment point",
    body: "The customer can explore eight production variables before asking the system for a real price.",
  },
  {
    number: "02",
    label: "Price current",
    title: "Checkout uses a trusted result",
    body: "Cart actions stay gated until the pricing service returns a valid result for the current specification.",
  },
  {
    number: "03",
    label: "Specs changed",
    title: "The old result becomes stale",
    body: "Changing a priced variable clears the previous state and changes the action to Perbarui Harga.",
  },
];

function Validation() {
  return (
    <section className="bg-[#0a0a0a] content-stretch flex flex-col gap-[36px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="production-validation">
      <div className="flex items-end justify-between gap-[72px] w-full">
        <div className="flex flex-col gap-[22px] max-w-[660px]">
          <p className="font-['Space_Mono:Regular',sans-serif] text-[#cc6ef8] text-[12px] tracking-[1.92px]">06 - Production Validation</p>
          <h2 className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[50px] text-[#f2f1ec] text-[46px] tracking-[-0.92px]">
            The shipped states protect the price.
          </h2>
        </div>
        <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[26px] text-[#9a9a93] text-[16px] w-[390px]">
          This is more than a polished configurator. The production plugin prevents customers from acting on an outdated result and routes each valid price into the right fulfilment path.
        </p>
      </div>

      <div className="border border-[rgba(242,241,236,0.1)] rounded-[8px] overflow-hidden w-full">
        <div className="grid grid-cols-3">
          {validationStates.map((state, index) => (
            <article
              className={`bg-[#10100f] flex flex-col gap-[16px] min-h-[214px] p-[28px] ${index < validationStates.length - 1 ? "border-r border-[rgba(242,241,236,0.1)]" : ""}`}
              key={state.number}
            >
              <div className="flex items-center justify-between">
                <span className="font-['Space_Mono:Regular',sans-serif] text-[#cc6ef8] text-[11px]">{state.number}</span>
                <span className="border border-[rgba(204,110,248,0.3)] rounded-full px-[10px] py-[5px] font-['Space_Mono:Regular',sans-serif] text-[#9a9a93] text-[9px] uppercase">{state.label}</span>
              </div>
              <h3 className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[24px] text-[#f2f1ec] text-[18px]">{state.title}</h3>
              <p className="font-['Space_Grotesk:Regular',sans-serif] leading-[22px] text-[#9a9a93] text-[14px]">{state.body}</p>
            </article>
          ))}
        </div>
        <div className="bg-[#141414] border-t border-[rgba(242,241,236,0.1)] grid grid-cols-2">
          <div className="flex items-center justify-between gap-[20px] p-[24px] border-r border-[rgba(242,241,236,0.1)]">
            <div>
              <p className="font-['Space_Mono:Regular',sans-serif] text-[#64dc82] text-[10px] uppercase">Eligible standard price</p>
              <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold mt-[7px] text-[#f2f1ec] text-[17px]">Continue to cart and checkout</p>
            </div>
            <span className="font-['Space_Mono:Regular',sans-serif] text-[#64dc82] text-[12px]">SELF-SERVE</span>
          </div>
          <div className="flex items-center justify-between gap-[20px] p-[24px]">
            <div>
              <p className="font-['Space_Mono:Regular',sans-serif] text-[#f4c46e] text-[10px] uppercase">IDR 5,000,000+ or flagged job</p>
              <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold mt-[7px] text-[#f2f1ec] text-[17px]">Continue with a structured RFQ</p>
            </div>
            <span className="font-['Space_Mono:Regular',sans-serif] text-[#f4c46e] text-[12px]">EXPERT REVIEW</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const completeFlowSteps = [
  {
    number: "01",
    label: "Configure Specs",
    title: "Customer builds the label spec",
    body: "Shape, material, lamination, size, print direction, output type, design variants, and quantity are configured before any price appears.",
    image: "/case-studies/kitalabel/step-01.png",
    fallbackImage: imgIc2,
  },
  {
    number: "02",
    label: "Cek Harga",
    title: "Customer requests the real price",
    body: "The calculator waits for an explicit check-price action, then calculates all quantity tiers. Values above IDR 5,000,000 branch into RFQ before cart and checkout.",
    image: "/case-studies/kitalabel/step-02.png",
    fallbackImage: imgIc3,
  },
  {
    number: "03",
    label: "Upload File",
    title: "Customer attaches design files",
    body: "The upload area keeps file requirements close to the action so customers understand bleed, cut line, CMYK, DPI, and font outline rules.",
    image: "/case-studies/kitalabel/step-03.png",
    fallbackImage: imgIc4,
  },
  {
    number: "04",
    label: "Tambah ke Keranjang",
    title: "Priced specs become a cart item",
    body: "Once price and files are ready, the configured label order is added to cart with its selected specs, files, and calculated subtotal intact.",
    image: "/case-studies/kitalabel/step-04.png",
    fallbackImage: imgIc5,
  },
  {
    number: "05",
    label: "Checkout",
    title: "Billing and courier details complete the order",
    body: "Checkout collects billing information, shows attached design files, applies the promo code, and lets the customer select courier services with live prices.",
    image: "/case-studies/kitalabel/step-05.png",
    fallbackImage: imgIc6,
  },
  {
    number: "06",
    label: "Bayar & Pesan",
    title: "Customer completes payment",
    body: "The customer reviews the final payment summary, selects a payment method, and places the eligible self-service order. RFQ has already been handled by the calculator threshold.",
    image: "/case-studies/kitalabel/step-06.png",
    fallbackImage: imgIc7,
  },
];

function CompleteFlowCard({
  step,
}: {
  step: {
    number: string;
    label: string;
    title: string;
    body: string;
    image: string;
    fallbackImage: string;
  };
}) {
  return (
    <div className="bg-[#141414] min-h-[372px] relative rounded-[8px] shrink-0 w-full" data-name="complete-flow-card">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="bg-[#f7f4ef] h-[184px] md:h-[204px] lg:h-[184px] relative shrink-0 w-full">
          <img
            alt={`${step.title} screen`}
            className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
            src={step.image}
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = step.fallbackImage;
            }}
          />
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[7px] items-start overflow-clip p-[20px] relative shrink-0 w-full">
          <div className="content-stretch flex items-center justify-between gap-[16px] relative shrink-0 w-full">
            <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[11px] whitespace-nowrap">{`Step ${step.number}`}</p>
            <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink text-[#6f6f68] text-[10px] text-right">{step.label}</p>
          </div>
          <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px] w-full">{step.title}</p>
          <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#9a9a93] text-[12px] w-full">{step.body}</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Ic5() {
  return (
    <div className="h-[240px] relative shrink-0 w-[368px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc5} />
    </div>
  );
}

function Ifo() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip p-[20px] relative shrink-0 w-[368px]" data-name="ifo">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[11px] whitespace-nowrap">Step 3 — Informasi Penagihan</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">Customer fills billing details</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#9a9a93] text-[12px] w-[328px]">Company, Country (Indonesia), Province, Town, Subdistrict, Street Address. Right panel persistently shows Pesanan Anda with all 5 design variant files attached.</p>
    </div>
  );
}

function Cflo() {
  return (
    <div className="bg-[#141414] h-[400px] relative rounded-[8px] shrink-0 w-[368px]" data-name="cflo">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic5 />
        <Ifo />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Ic6() {
  return (
    <div className="h-[240px] relative shrink-0 w-[368px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc6} />
    </div>
  );
}

function Ifo1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip p-[20px] relative shrink-0 w-[368px]" data-name="ifo">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[11px] whitespace-nowrap">Step 4 — Jasa Pengiriman</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">Customer selects courier</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#9a9a93] text-[12px] w-[328px]">5 real couriers with live prices: JNT-EZ, ANTERAJA-ND, ANTERAJA-REG, JNE-REG (selected, Rp 50,000), JNE-YES. Total updates immediately.</p>
    </div>
  );
}

function Cflo1() {
  return (
    <div className="bg-[#141414] h-[400px] relative rounded-[8px] shrink-0 w-[368px]" data-name="cflo">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic6 />
        <Ifo1 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Ic7() {
  return (
    <div className="h-[240px] relative shrink-0 w-[368px]" data-name="ic">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgIc7} />
    </div>
  );
}

function Ifo2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start overflow-clip p-[20px] relative shrink-0 w-[368px]" data-name="ifo">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[11px] whitespace-nowrap">Step 5 — Checkout</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[14px] whitespace-nowrap">Customer applies promo + reviews total</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[19px] relative shrink-0 text-[#9a9a93] text-[12px] w-[328px]">{`Design upload thumbnails are confirmed, Promo Code KITALABEL2025 is applied, and courier pricing updates the final total before payment.`}</p>
    </div>
  );
}

function Cflo2() {
  return (
    <div className="bg-[#141414] h-[400px] relative rounded-[8px] shrink-0 w-[368px]" data-name="cflo">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Ic7 />
        <Ifo2 />
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function FlowRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[24px] relative shrink-0 w-full max-w-[1152px]" data-name="flowRow">
      {completeFlowSteps.map((step) => (
        <CompleteFlowCard key={step.number} step={step} />
      ))}
    </div>
  );
}

function Flow() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[22px] sm:px-[32px] lg:px-[64px] py-[72px] lg:py-[100px] relative shrink-0 w-full lg:w-[1280px]" data-name="flow">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px]">07 — The Complete Flow</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[38px] md:leading-[normal] relative shrink-0 text-[#f2f1ec] text-[34px] md:text-[46px] tracking-[-0.68px] md:tracking-[-0.92px] w-full">From configuration to checkout</p>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[26px] md:leading-[28px] relative shrink-0 text-[#9a9a93] text-[15px] md:text-[17px] w-full max-w-[860px]">The full flow starts before checkout: customers configure production specs and calculate a real price. Values above IDR 5,000,000 route to RFQ; eligible self-service orders continue through file upload, cart, and payment.</p>
      <FlowStrip />
      <FlowRow />
    </div>
  );
}

function S6() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">2</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Fulfilment paths</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function S7() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">8</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Spec variables</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function S8() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">5</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Price tiers</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function S9() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">0</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Standard handoffs</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function S10() {
  return (
    <div className="bg-[#141414] h-[130px] relative rounded-[8px] shrink-0 w-[214.4px]" data-name="s">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-center justify-center leading-[normal] overflow-clip px-[20px] py-[24px] relative rounded-[inherit] size-full whitespace-nowrap">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px] tracking-[-1.14px]">24/7</p>
        <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px]">Pricing access</p>
      </div>
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SRow() {
  return (
    <div className="content-stretch flex gap-[20px] h-[130px] items-start overflow-clip relative shrink-0 w-[1152px]" data-name="sRow">
      <S6 />
      <S7 />
      <S8 />
      <S9 />
      <S10 />
    </div>
  );
}

function Out() {
  return (
    <div className="bg-[#0c0c0b] content-stretch flex flex-col gap-[40px] items-start overflow-clip px-[64px] py-[100px] relative shrink-0 w-[1280px]" data-name="out">
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">08 — Outcomes</p>
      <SRow />
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#9a9a93] text-[17px] w-[1152px]">The calculator removed the required sales handoff for eligible standard orders. Customers can configure, price, upload, and checkout independently — 24/7 — while special designs and high-value jobs still reach expert review through a structured RFQ. This was also the first project where I shipped an AI-powered feature (the Design Editor, which used AI to generate label artwork from a prompt), and the first time I stepped into the Front-end Engineer role — implementing the plugin in WordPress, integrating WooCommerce cart hooks, and shipping the interaction logic in JavaScript.</p>
    </div>
  );
}

function NL() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="nL">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[12px] tracking-[0.72px]">← Back to portfolio</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[40px] tracking-[-0.8px]">View all work</p>
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

function NextWork() {
  return (
    <div className="bg-[#0a0a0a] relative shrink-0 w-[1280px]" data-name="nextWork">
      <div className="content-stretch flex flex-col items-start overflow-clip px-[64px] relative size-full">
        <div className="content-stretch flex items-center justify-between overflow-clip py-[56px] relative shrink-0 w-[1152px]" data-name="nRow">
          <div className="[word-break:break-word] content-stretch flex flex-col gap-[6px] items-start leading-[normal] overflow-clip relative shrink-0 whitespace-nowrap" data-name="nL">
            <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#6f6f68] text-[12px] tracking-[0.72px]">Next project →</p>
            <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[40px] tracking-[-0.8px]">Read/See Dashboard</p>
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

export default function CaseStudyKitalabel() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start relative size-full" data-name="case-study-kitalabel">
      <Nav />
      <Hero />
      <Ctx />
      <Ctx1 />
      <Prob />
      <Sol />
      <AiFe />
      <Dec />
      <Validation />
      <Flow />
      <Out />
      <NextWork />
      <Fw />
    </div>
  );
}
