import svgPaths from "./svg-jhm7sf8zhm";
const imgLogo = "/case-studies/kitalabel-bos/image-01.png";
const imgRectangle = "/case-studies/kitalabel-bos/image-02.png";
const imgRectangle1 = "/case-studies/kitalabel-bos/image-03.png";

const productScreens = [
  { src: "/case-studies/kitalabel-bos/main-dashboard.png", label: "Dashboard", caption: "Revenue, customer health, reorder risk, and operational alerts in one working view." },
  { src: "/case-studies/kitalabel-bos/crm-orders.png", label: "Orders", caption: "A unified order queue for reviewing status, payment, customer, and production progress." },
  { src: "/case-studies/kitalabel-bos/order-detail.png", label: "Order detail", caption: "The complete order context, customer history, pricing, and fulfilment information." },
  { src: "/case-studies/kitalabel-bos/woo-customers.png", label: "Customers", caption: "Customer segments make repeat buyers, inactive accounts, and missing data visible." },
  { src: "/case-studies/kitalabel-bos/customer-detail.png", label: "Customer detail", caption: "Order history, spend, and reorder-cycle signals collected around one customer." },
  { src: "/case-studies/kitalabel-bos/reorder-cycle.png", label: "Reorder cycle", caption: "A focused view for identifying customers who are approaching or missing a repeat order." },
  { src: "/case-studies/kitalabel-bos/internal-calculator.png", label: "Calculator", caption: "Internal pricing tools stay close to the operational workflow instead of a separate spreadsheet." },
  { src: "/case-studies/kitalabel-bos/team-members.png", label: "Team members", caption: "People, roles, and account status managed from the same administrative surface." },
  { src: "/case-studies/kitalabel-bos/team-roles.png", label: "Team roles", caption: "Reusable roles make access rules easier to understand and maintain." },
  { src: "/case-studies/kitalabel-bos/team-role-edit.png", label: "Role permissions", caption: "Permission editing exposes exactly what each operational role can see and change." },
  { src: "/case-studies/kitalabel-bos/crm-settings.png", label: "CRM settings", caption: "Business rules and CRM behaviour are configured without leaving the system." },
  { src: "/case-studies/kitalabel-bos/external-mappings.png", label: "External mappings", caption: "External WooCommerce data is mapped into a stable internal operating model." },
  { src: "/case-studies/kitalabel-bos/webhook-events.png", label: "Webhook events", caption: "Incoming commerce events are visible and traceable when integrations need attention." },
  { src: "/case-studies/kitalabel-bos/sync-logs.png", label: "Sync logs", caption: "Sync history gives the team a readable record of successful and failed data movement." },
  { src: "/case-studies/kitalabel-bos/production-behavior-specs.png", label: "Behaviour specs", caption: "Production behaviour is documented alongside the product surfaces it governs." },
  { src: "/case-studies/kitalabel-bos/profile-page.png", label: "Profile", caption: "Personal account details and security controls use the same system language." },
  { src: "/case-studies/kitalabel-bos/login-page.png", label: "Login", caption: "A restrained entry point establishes the Business OS identity before the work begins." },
] as const;

function ProductScreenGallery() {
  return (
    <div className="w-[1152px]">
      <div className="grid grid-cols-4 gap-[12px]" aria-label="KitaLabel Business OS product screens">
        {productScreens.map((screen, index) => {
          const isPrimary = index === 0;
          return (
            <button
              key={screen.src}
              type="button"
              data-preview-src={screen.src}
              data-preview-title={`KitaLabel Business OS - ${screen.label}`}
              aria-label={`Preview ${screen.label}`}
              className={`group overflow-hidden rounded-[5px] border bg-[#111] text-left transition-colors hover:border-[#cc6ef8] ${isPrimary ? "col-span-4 border-[rgba(204,110,248,0.55)]" : "border-[rgba(242,241,236,0.12)]"}`}
            >
              <span className={`block overflow-hidden bg-[#09090b] ${isPrimary ? "h-[420px]" : "h-[124px]"}`}>
                <img
                  src={screen.src}
                  alt={`${screen.label} screen from KitaLabel Business OS`}
                  className="block h-full w-full object-cover object-top opacity-80 transition-opacity group-hover:opacity-100"
                />
              </span>
              <span className={`block overflow-hidden border-t border-[rgba(242,241,236,0.08)] ${isPrimary ? "h-[112px] px-[20px] py-[16px]" : "h-[128px] px-[14px] py-[12px]"}`}>
                <span className="flex items-center justify-between gap-[8px]">
                  <span className="flex items-center gap-[12px]">
                    <span className={`font-['Space_Grotesk:Medium',sans-serif] font-medium text-[#f2f1ec] ${isPrimary ? "text-[18px]" : "text-[14px]"}`}>{screen.label}</span>
                    {isPrimary && (
                      <span className="font-['Space_Mono:Regular',sans-serif] text-[9px] uppercase tracking-[0.12em] text-[#cc6ef8]">Primary screen</span>
                    )}
                  </span>
                  <span className={`font-['Space_Mono:Regular',sans-serif] text-[#9a9a93] ${isPrimary ? "text-[11px]" : "text-[9px]"}`}>{String(index + 1).padStart(2, "0")}</span>
                </span>
                <span
                  className={`block overflow-hidden font-['Space_Grotesk:Regular',sans-serif] leading-[1.45] text-[#9a9a93] ${isPrimary ? "mt-[10px] max-w-[760px] text-[13px]" : "mt-[9px] text-[12px]"}`}
                  style={{ display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 3 }}
                >
                  {screen.caption}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[9px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #CC6EF8)" id="Ellipse" r="4.5" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px] whitespace-nowrap">Dheoryan Putra Arsi</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start px-[20px] py-[8px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#f2f1ec] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[13px] whitespace-nowrap">{`Let's talk`}</p>
    </div>
  );
}

function Nav() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="nav">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[64px] relative size-full">
          <Frame />
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px] uppercase">Role</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">Product Designer</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px] uppercase">Client</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">KitaLabel</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px] uppercase">Year</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">2026</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px] uppercase">Type</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">B2B Admin Panel</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px] uppercase">Stack</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[13px]">Laravel · Filament · Tailwind</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] relative shrink-0 w-[1152px] whitespace-nowrap" data-name="Frame">
      <Frame5 />
      <Frame6 />
      <Frame7 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame4 />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[40px] relative shrink-0 w-[140px]" data-name="logo">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo} />
    </div>
  );
}

function Grid2X() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="grid-2x2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="grid-2x2">
          <path d={svgPaths.p2d8e0280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function NavDashboard() {
  return (
    <div className="bg-[#ff8a00] relative rounded-[6.4px] shrink-0 w-full" data-name="nav-Dashboard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center px-[9.6px] py-[6.4px] relative size-full">
          <Grid2X />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[11.2px] text-white">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[8.8px] uppercase whitespace-nowrap">Main</p>
      <NavDashboard />
    </div>
  );
}

function ShoppingBag() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="shopping-bag">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="shopping-bag">
          <path d={svgPaths.p21a75b00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#27272a] content-stretch flex items-start px-[4.8px] py-[1.6px] relative rounded-[3.2px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8.8px] whitespace-nowrap">47</p>
    </div>
  );
}

function NavOrders() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[6.4px] shrink-0 w-full" data-name="nav-Orders">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center px-[9.6px] py-[6.4px] relative size-full">
          <ShoppingBag />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[11.2px]">Orders</p>
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Users() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="users">
          <path d={svgPaths.p4b0ba00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function NavWooCustomers() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[6.4px] shrink-0 w-full" data-name="nav-Woo Customers">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center px-[9.6px] py-[6.4px] relative size-full">
          <Users />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[11.2px]">Woo Customers</p>
        </div>
      </div>
    </div>
  );
}

function RefreshCcw() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="refresh-ccw">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="refresh-ccw">
          <path d={svgPaths.peb8e600} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function NavReorderCycle() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[6.4px] shrink-0 w-full" data-name="nav-Reorder Cycle">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center px-[9.6px] py-[6.4px] relative size-full">
          <RefreshCcw />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[11.2px]">Reorder Cycle</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[8.8px] uppercase whitespace-nowrap">CRM</p>
      <NavOrders />
      <NavWooCustomers />
      <NavReorderCycle />
    </div>
  );
}

function Calculator() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="calculator">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="calculator">
          <path d={svgPaths.p3e3d2b00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function NavInternalCalculator() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[6.4px] shrink-0 w-full" data-name="nav-Internal Calculator">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center px-[9.6px] py-[6.4px] relative size-full">
          <Calculator />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[11.2px]">Internal Calculator</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[8.8px] uppercase whitespace-nowrap">Tools</p>
      <NavInternalCalculator />
    </div>
  );
}

function Users1() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="users">
          <path d={svgPaths.p1b346000} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function NavMembers() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[6.4px] shrink-0 w-full" data-name="nav-Members">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center px-[9.6px] py-[6.4px] relative size-full">
          <Users1 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#a1a1aa] text-[11.2px]">Team Members</p>
        </div>
      </div>
    </div>
  );
}

function ShieldCheck() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g clipPath="url(#clip0_1_5341)" id="shield-check">
          <path d={svgPaths.pe0b7f00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_1_5341">
            <rect fill="white" height="14.4" width="14.4" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavRoles() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[6.4px] shrink-0 w-full" data-name="nav-Roles">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center px-[9.6px] py-[6.4px] relative size-full">
          <ShieldCheck />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#a1a1aa] text-[11.2px]">Team Roles</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[8.8px] uppercase whitespace-nowrap">Team</p>
      <NavMembers />
      <NavRoles />
    </div>
  );
}

function NavGroups() {
  return (
    <div className="content-stretch flex flex-col gap-[19.2px] items-start relative shrink-0 w-full" data-name="nav-groups">
      <Frame10 />
      <Frame11 />
      <Frame13 />
      <Frame14 />
    </div>
  );
}

function Frame15() {
  return <div className="h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame16() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[1.6px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[10.4px] text-white">Adit Pratama</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[8.8px]">Super Administrator</p>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="relative rounded-[6.4px] shrink-0 w-full" data-name="user-profile">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center p-[9.6px] relative size-full">
          <div className="relative rounded-[6.4px] shrink-0 size-[25.6px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6.4px] size-full" src={imgRectangle} />
          </div>
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function SidebarFooter() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="sidebar-footer">
      <Frame15 />
      <UserProfile />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-[#18181b] content-stretch flex flex-col gap-[25.6px] h-[1654.4px] items-start p-[12.8px] relative shrink-0 w-[204.8px]" data-name="sidebar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
      <Logo />
      <NavGroups />
      <SidebarFooter />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[11.2px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
        <g id="chevron-right">
          <path d={svgPaths.p1fe30498} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0" data-name="breadcrumb">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[11.2px] whitespace-nowrap">Business OS</p>
      <ChevronRight />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[11.2px] text-white whitespace-nowrap">Dashboard</p>
    </div>
  );
}

function Search1() {
  return (
    <div className="relative shrink-0 size-[12.8px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 12.8">
        <g id="search">
          <path d={svgPaths.p19efa570} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="bg-[#09090b] content-stretch flex gap-[9.6px] items-center px-[9.6px] py-[6.4px] relative rounded-[6.4px] shrink-0 w-[320px]" data-name="search">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <Search1 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[11.2px] whitespace-nowrap">Search everything...</p>
    </div>
  );
}

function Bell() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bell">
          <path d={svgPaths.p2fcffc00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[11.2px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
        <g id="chevron-down">
          <path d={svgPaths.p1b442600} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[10.4px] text-white whitespace-nowrap">Adit P.</p>
      <ChevronDown />
    </div>
  );
}

function TopbarActions() {
  return (
    <div className="content-stretch flex gap-[12.8px] items-center relative shrink-0" data-name="topbar-actions">
      <Bell />
      <Frame17 />
    </div>
  );
}

function Topbar() {
  return (
    <div className="bg-[#18181b] h-[44.8px] relative shrink-0 w-full" data-name="topbar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[19.2px] relative size-full">
          <Breadcrumb />
          <Search />
          <TopbarActions />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[19.2px] text-white">Good morning, Adit</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a1a1aa] text-[11.2px]">Tuesday, June 25, 2025 • 09:12 AM (GMT+7)</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[1.6px] items-end leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[11.2px] text-white">Jakarta, ID</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a1a1aa] text-[9.6px]">Partly Cloudy • 29°C</p>
    </div>
  );
}

function CloudSun() {
  return (
    <div className="relative shrink-0 size-[25.6px]" data-name="cloud-sun">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6 25.6">
        <g id="cloud-sun">
          <path d={svgPaths.p3f5efe00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[12.8px] items-center relative shrink-0" data-name="Frame">
      <Frame20 />
      <CloudSun />
    </div>
  );
}

function GreetingBanner() {
  return (
    <div className="bg-[#18181b] relative rounded-[6.4px] shrink-0 w-full" data-name="greeting-banner">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[19.2px] relative size-full">
          <Frame18 />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function FilterTabAlltime() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0" data-name="filter-tab-alltime">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">All Time</p>
    </div>
  );
}

function FilterTabToday() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0 w-[46.4px]" data-name="filter-tab-today">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">Today</p>
    </div>
  );
}

function FilterTabWtd() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0" data-name="filter-tab-wtd">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">WTD</p>
    </div>
  );
}

function FilterTabMtd() {
  return (
    <div className="bg-[#ff8a00] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0" data-name="filter-tab-mtd">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[9.6px] text-white whitespace-nowrap">MTD</p>
    </div>
  );
}

function FilterTabYtd() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0 w-[37.6px]" data-name="filter-tab-ytd">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">YTD</p>
    </div>
  );
}

function FilterTabYesterday() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0" data-name="filter-tab-yesterday">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">Yesterday</p>
    </div>
  );
}

function FilterTabLastweek() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0" data-name="filter-tab-lastweek">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">Last Week</p>
    </div>
  );
}

function FilterTabLastmonth() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0" data-name="filter-tab-lastmonth">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">Last Month</p>
    </div>
  );
}

function FilterTabLastyear() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0" data-name="filter-tab-lastyear">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">Last Year</p>
    </div>
  );
}

function FilterTabCustom() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0" data-name="filter-tab-custom">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">Custom</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-[#09090b] content-stretch flex gap-[3.2px] items-start p-[3.2px] relative rounded-[6.4px] shrink-0 w-[572.8px]" data-name="Frame">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <FilterTabAlltime />
      <FilterTabToday />
      <FilterTabWtd />
      <FilterTabMtd />
      <FilterTabYtd />
      <FilterTabYesterday />
      <FilterTabLastweek />
      <FilterTabLastmonth />
      <FilterTabLastyear />
      <FilterTabCustom />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-center flex flex-wrap gap-[16px_12.8px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame23 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold h-[13.6px] leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8.8px] w-[297.6px]">Month to date (Jun 1 - 26, 2026) · vs May 1 - 26, 2026</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[9.6px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[8px] text-white uppercase whitespace-nowrap">FILTER BY PERIOD</p>
      <Frame22 />
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] left-[75.2px] text-[#ff8a00] text-[8px] top-0 whitespace-nowrap">TO DATE</p>
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] left-[269.6px] text-[#ff8a00] text-[8px] top-0 whitespace-nowrap">LAST PERIOD</p>
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] left-[565.6px] text-[#ff8a00] text-[8px] top-0 whitespace-nowrap">CUSTOM</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.2px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20.8px] text-white">Rp 352,441,770</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">Paid revenue (MTD)</p>
    </div>
  );
}

function StatCardRevMtd() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="stat-card-rev-mtd">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame26 />
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.2px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#10b981] text-[20.8px]">Rp 349,028,270</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">Revenue active from reorder customers</p>
    </div>
  );
}

function StatCardAovMtd() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="stat-card-aov-mtd">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame27 />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.2px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#ff8a00] text-[20.8px]">20</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">Paid orders (MTD)</p>
    </div>
  );
}

function StatCardOrdersMtd() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="stat-card-orders-mtd">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame28 />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[12.8px] items-start relative shrink-0 w-full" data-name="Frame">
      <StatCardRevMtd />
      <StatCardAovMtd />
      <StatCardOrdersMtd />
    </div>
  );
}

function Frame30() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.2px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20.8px] text-white">4</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">New paying customers (MTD)</p>
    </div>
  );
}

function StatCardRevFiltered() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="stat-card-rev-filtered">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame30 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.2px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#ff8a00] text-[20.8px]">Rp 17,622,089</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">Paid avg order value (MTD)</p>
    </div>
  );
}

function StatCardOrdersTop() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="stat-card-orders-top">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame31 />
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[12.8px] items-start relative shrink-0 w-full" data-name="Frame">
      <StatCardRevFiltered />
      <StatCardOrdersTop />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[12.8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12.8px] text-white whitespace-nowrap">Business Pulse</p>
      <Frame25 />
      <Frame29 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-col gap-[3.2px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[22.4px] text-white">1,024</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">Woo accounts first seen in MTD</p>
    </div>
  );
}

function StatCard() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="stat-card">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[9.6px] items-start leading-[normal] p-[16px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[9.6px] uppercase">NEW REGISTERED USERS</p>
        <Frame34 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[3.2px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#1bbc9c] text-[22.4px]">40%</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">412 of 1,024 registered users bought</p>
    </div>
  );
}

function StatCard1() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="stat-card">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[9.6px] items-start leading-[normal] p-[16px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[9.6px] uppercase">REGISTERED BUYER CONVERSION</p>
        <Frame35 />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[3.2px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[22.4px] text-white">412</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">Customers whose first paid order is MTD</p>
    </div>
  );
}

function StatCard2() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="stat-card">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[9.6px] items-start leading-[normal] p-[16px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[9.6px] uppercase">FIRST PAID ORDER USERS</p>
        <Frame36 />
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[12.8px] items-start relative shrink-0 w-full" data-name="Frame">
      <StatCard />
      <StatCard1 />
      <StatCard2 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[3.2px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#ff8a00] text-[22.4px]">314</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">Repeat buyers active in this window</p>
    </div>
  );
}

function StatCardExistingUsers() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] h-[100px] min-w-px relative rounded-[6.4px]" data-name="stat-card-existing-users">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[9.6px] items-start leading-[normal] p-[16px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[9.6px] uppercase">EXISTING USERS</p>
        <Frame37 />
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[3.2px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#ff4b4b] text-[22.4px]">83</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">Needs cleanup among selected users</p>
    </div>
  );
}

function StatCardMissingContactData() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] h-[100px] min-w-px relative rounded-[6.4px]" data-name="stat-card-missing-contact-data">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[9.6px] items-start leading-[normal] p-[16px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[9.6px] uppercase">MISSING CONTACT DATA</p>
        <Frame38 />
      </div>
    </div>
  );
}

function CustomerPulseRow() {
  return (
    <div className="content-stretch flex gap-[12.8px] h-[100px] items-start overflow-clip relative shrink-0 w-[883.2px]" data-name="customer-pulse-row-2">
      <StatCardExistingUsers />
      <StatCardMissingContactData />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[12.8px] h-[242.4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12.8px] text-white whitespace-nowrap">Customer Pulse</p>
      <Frame33 />
      <CustomerPulseRow />
    </div>
  );
}

function AlertTriangle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="alert-triangle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="alert-triangle">
          <path d={svgPaths.p1088f180} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="Frame">
      <div aria-hidden className="absolute border-[#f59e0b] border-b-[0.8px] border-l-[3.2px] border-r-[0.8px] border-solid border-t-[0.8px] inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center p-[12.8px] relative size-full">
          <AlertTriangle />
          <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[11.2px] text-white whitespace-nowrap">
            <span className="leading-[normal]">{`Pending Orders — `}</span>
            <span className="leading-[normal] text-[#a1a1aa]">5 orders awaiting fulfillment from yesterday.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function FireExtinguisher() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fire-extinguisher">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="fire-extinguisher">
          <path d={svgPaths.p3ebbf280} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="Frame">
      <div aria-hidden className="absolute border-[#ef4444] border-b-[0.8px] border-l-[3.2px] border-r-[0.8px] border-solid border-t-[0.8px] inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center p-[12.8px] relative size-full">
          <FireExtinguisher />
          <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[11.2px] text-white whitespace-nowrap">
            <span className="leading-[normal]">{`Low Reorder Risk — `}</span>
            <span className="leading-[normal] text-[#a1a1aa]">8 loyal customers are past their typical reorder cycle.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[12.8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[12.8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12.8px] text-white whitespace-nowrap">Operational Alerts</p>
      <Frame40 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#27272a] content-stretch flex items-start px-[6.4px] py-[2.4px] relative rounded-[3.2px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8.8px] whitespace-nowrap">MTD</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[11.2px] text-white">{`Revenue & paid orders`}</p>
      <Frame44 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[128px] items-end justify-between leading-[normal] relative shrink-0 text-[#52525b] text-[8px] w-[48px] whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0">350M</p>
      <p className="relative shrink-0">262M</p>
      <p className="relative shrink-0">175M</p>
      <p className="relative shrink-0">87M</p>
      <p className="relative shrink-0">0</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="h-[112px] overflow-clip relative shrink-0 w-full" data-name="Frame">
      <div className="absolute bg-[rgba(255,255,255,0.04)] h-[0.8px] left-0 right-0 top-0" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.04)] h-[0.8px] left-0 right-0 top-[28px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.04)] h-[0.8px] left-0 right-0 top-[56px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.04)] h-[0.8px] left-0 right-0 top-[84px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.04)] h-[0.8px] left-0 right-0 top-[111.2px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[32px] left-0 top-[80px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[40px] left-[24px] top-[72px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[56px] left-[48px] top-[56px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[48px] left-[72px] top-[64px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[64px] left-[96px] top-[48px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[72px] left-[120px] top-[40px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[88px] left-[144px] top-[24px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[80px] left-[168px] top-[32px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[96px] left-[192px] top-[16px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[84px] left-[216px] top-[28px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[104px] left-[240px] top-[8px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[92px] left-[264px] top-[20px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-0 top-[79.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[24px] top-[71.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[48px] top-[55.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[72px] top-[63.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[96px] top-[47.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[120px] top-[39.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[144px] top-[23.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[168px] top-[31.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[192px] top-[15.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[216px] top-[27.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[240px] top-[7.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[264px] top-[19.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute left-[10.4px] size-[4px] top-[88px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[34.4px] size-[4px] top-[80px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[58.4px] size-[4px] top-[64px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[82.4px] size-[4px] top-[72px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[106.4px] size-[4px] top-[56px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[130.4px] size-[4px] top-[48px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[154.4px] size-[4px] top-[32px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[178.4px] size-[4px] top-[40px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[202.4px] size-[4px] top-[24px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[226.4px] size-[4px] top-[36px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[250.4px] size-[4px] top-[16px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[274.4px] size-[4px] top-[28px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular',sans-serif] font-normal items-start justify-between leading-[normal] pt-[3.2px] relative shrink-0 text-[#52525b] text-[7.2px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0">Jun 1</p>
      <p className="relative shrink-0">Jun 5</p>
      <p className="relative shrink-0">Jun 10</p>
      <p className="relative shrink-0">Jun 15</p>
      <p className="relative shrink-0">Jun 20</p>
      <p className="relative shrink-0">Jun 25</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[128px] items-start min-w-px relative" data-name="Frame">
      <Frame48 />
      <Frame49 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[128px] items-start justify-between leading-[normal] relative shrink-0 text-[#52525b] text-[8px] w-[22.4px] whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0">20</p>
      <p className="relative shrink-0">15</p>
      <p className="relative shrink-0">10</p>
      <p className="relative shrink-0">5</p>
      <p className="relative shrink-0">0</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6.4px] items-end min-h-px relative w-full" data-name="Frame">
      <Frame46 />
      <Frame47 />
      <Frame50 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[4.8px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-[#ff8a00] relative rounded-[1.6px] shrink-0 size-[8px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8.8px] whitespace-nowrap">Paid Revenue</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[4.8px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-white relative rounded-[1.6px] shrink-0 size-[8px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8.8px] whitespace-nowrap">Paid Orders</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[12.8px] items-center relative shrink-0" data-name="Frame">
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function TooltipRowPaidRevenueRp() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-start overflow-clip relative shrink-0" data-name="tooltip-row-paid-revenue-rp-352-441-770">
      <div className="bg-[#ff8a00] relative rounded-[1.6px] shrink-0 size-[6.4px]" data-name="series-marker" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[9.6px] text-white whitespace-nowrap">Paid revenue: Rp 352.441.770</p>
    </div>
  );
}

function TooltipRowPaidOrders() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-start overflow-clip relative shrink-0" data-name="tooltip-row-paid-orders-20">
      <div className="bg-[#626563] relative rounded-[1.6px] shrink-0 size-[6.4px]" data-name="series-marker" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[9.6px] text-white whitespace-nowrap">Paid orders: 20</p>
    </div>
  );
}

function ChartTooltipHoverSample() {
  return (
    <div className="absolute bg-[#0c0c0f] h-[73.6px] left-[285.6px] rounded-[6.4px] top-[80px] w-[196.8px]" data-name="chart-tooltip-hover-sample">
      <div className="content-stretch flex flex-col gap-[6.4px] items-start overflow-clip px-[9.6px] py-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">Jun 8</p>
        <TooltipRowPaidRevenueRp />
        <TooltipRowPaidOrders />
      </div>
      <div aria-hidden className="absolute border-[#3a3a40] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6.4px] shadow-[0px_9.6px_17.6px_-6.4px_rgba(0,0,0,0.45)]" />
    </div>
  );
}

function ChartRevenueOrders() {
  return (
    <div className="bg-[#18181b] h-[208px] relative rounded-[6.4px] shrink-0 w-full" data-name="chart-revenue-orders">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col gap-[9.6px] items-start p-[12.8px] relative size-full">
        <Frame43 />
        <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[8.8px] whitespace-nowrap">Real revenue data with paid orders count line - MTD</p>
        <Frame45 />
        <Frame51 />
        <ChartTooltipHoverSample />
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[#27272a] content-stretch flex items-start px-[6.4px] py-[2.4px] relative rounded-[3.2px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8.8px] whitespace-nowrap">MTD</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[11.2px] text-white">Customer funnel</p>
      <Frame56 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[9.6px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#ff8a00] h-[9.6px] relative rounded-[1.6px] shrink-0 w-[160px]" data-name="Rectangle" />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[72px]">Registered users</p>
      <Frame59 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[25.6px]">1,024</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[9.6px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#ff8a00] h-[9.6px] relative rounded-[1.6px] shrink-0 w-[64px]" data-name="Rectangle" />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[72px]">New customers</p>
      <Frame61 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[25.6px]">412</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[9.6px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#f59e0b] h-[9.6px] relative rounded-[1.6px] shrink-0 w-[48px]" data-name="Rectangle" />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[72px]">Returning</p>
      <Frame63 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[25.6px]">314</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[9.6px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#ef4444] h-[9.6px] relative rounded-[1.6px] shrink-0 w-[12.8px]" data-name="Rectangle" />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[72px]">At risk</p>
      <Frame65 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[25.6px]">83</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[9.6px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#52525b] h-[9.6px] relative rounded-[1.6px] shrink-0 w-[8px]" data-name="Rectangle" />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[72px]">Inactive</p>
      <Frame67 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[25.6px]">51</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular',sans-serif] font-normal items-start justify-between leading-[normal] pl-[72px] pr-[25.6px] pt-[3.2px] relative size-full text-[#52525b] text-[7.2px] whitespace-nowrap">
        <p className="relative shrink-0">0</p>
        <p className="relative shrink-0">200</p>
        <p className="relative shrink-0">400</p>
        <p className="relative shrink-0">600</p>
        <p className="relative shrink-0">800</p>
        <p className="relative shrink-0">1000</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6.4px] items-start min-h-px relative w-full" data-name="Frame">
      <Frame58 />
      <Frame60 />
      <Frame62 />
      <Frame64 />
      <Frame66 />
      <Frame68 />
    </div>
  );
}

function ChartCustomerFunnel() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] h-[192px] min-w-px relative rounded-[6.4px]" data-name="chart-customer-funnel">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col gap-[9.6px] items-start p-[12.8px] relative size-full">
        <Frame55 />
        <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[8.8px] whitespace-nowrap">Customer progression and cleanup pressure - MTD</p>
        <Frame57 />
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[11.2px] text-white">Reorder risk exposure</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[1.6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[7.2px] whitespace-nowrap">45</p>
      <div className="bg-[#ff8a00] h-[72px] relative rounded-[1.6px] shrink-0 w-[14.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col gap-[1.6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[7.2px] whitespace-nowrap">2.1M</p>
      <div className="bg-[#f59e0b] h-[48px] relative rounded-[1.6px] shrink-0 w-[14.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[3.2px] items-end relative shrink-0" data-name="Frame">
      <Frame73 />
      <Frame74 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col gap-[3.2px] items-center relative shrink-0" data-name="Frame">
      <Frame72 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[8px] whitespace-nowrap">High</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex flex-col gap-[1.6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[7.2px] whitespace-nowrap">78</p>
      <div className="bg-[#ff8a00] h-[96px] relative rounded-[1.6px] shrink-0 w-[14.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[1.6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[7.2px] whitespace-nowrap">1.4M</p>
      <div className="bg-[#f59e0b] h-[32px] relative rounded-[1.6px] shrink-0 w-[14.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[3.2px] items-end relative shrink-0" data-name="Frame">
      <Frame77 />
      <Frame78 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[3.2px] items-center relative shrink-0" data-name="Frame">
      <Frame76 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[8px] whitespace-nowrap">Medium</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[1.6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[7.2px] whitespace-nowrap">23</p>
      <div className="bg-[#ff8a00] h-[36px] relative rounded-[1.6px] shrink-0 w-[14.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[1.6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[7.2px] whitespace-nowrap">0.5M</p>
      <div className="bg-[#f59e0b] relative rounded-[1.6px] shrink-0 size-[14.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[3.2px] items-end relative shrink-0" data-name="Frame">
      <Frame81 />
      <Frame82 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[3.2px] items-center relative shrink-0" data-name="Frame">
      <Frame80 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[8px] whitespace-nowrap">Low</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end justify-between min-h-px relative w-full" data-name="Frame">
      <Frame71 />
      <Frame75 />
      <Frame79 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[4.8px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-[#ff8a00] relative rounded-[1.6px] shrink-0 size-[8px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8.8px] whitespace-nowrap">Customers</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[4.8px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-[#f59e0b] relative rounded-[1.6px] shrink-0 size-[8px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8.8px] whitespace-nowrap">AOV Exposure</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[9.6px] items-center relative shrink-0" data-name="Frame">
      <Frame84 />
      <Frame85 />
    </div>
  );
}

function ChartReorderRisk() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] h-[192px] min-w-px relative rounded-[6.4px]" data-name="chart-reorder-risk">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col gap-[9.6px] items-start p-[12.8px] relative size-full">
        <Frame69 />
        <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[8.8px] whitespace-nowrap">Customer count and AOV-weighted exposure by reorder status</p>
        <Frame70 />
        <Frame83 />
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[12.8px] items-start relative shrink-0 w-full" data-name="Frame">
      <ChartCustomerFunnel />
      <ChartReorderRisk />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[11.2px] text-white">Operational workload</p>
    </div>
  );
}

function Frame89() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#ff8a00] h-[8px] relative rounded-[1.6px] shrink-0 w-[208px]" data-name="Rectangle" />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[80px]">Customer health</p>
      <Frame89 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[16px]">28</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#f59e0b] h-[8px] relative rounded-[1.6px] shrink-0 w-[148px]" data-name="Rectangle" />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[80px]">Design issues</p>
      <Frame91 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[16px]">20</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#f59e0b] h-[8px] relative rounded-[1.6px] shrink-0 w-[118.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[80px]">Unpaid orders</p>
      <Frame93 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[16px]">16</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#52525b] h-[8px] relative rounded-[1.6px] shrink-0 w-[66.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[80px]">Missing phone</p>
      <Frame95 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[16px]">9</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#ef4444] h-[8px] relative rounded-[1.6px] shrink-0 w-[22.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[80px]">Sync failures</p>
      <Frame97 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[16px]">3</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular',sans-serif] font-normal items-start justify-between leading-[normal] pl-[80px] pr-[16px] pt-[1.6px] relative size-full text-[#52525b] text-[7.2px] whitespace-nowrap">
        <p className="relative shrink-0">0</p>
        <p className="relative shrink-0">5</p>
        <p className="relative shrink-0">10</p>
        <p className="relative shrink-0">15</p>
        <p className="relative shrink-0">20</p>
        <p className="relative shrink-0">25</p>
        <p className="relative shrink-0">30</p>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame88 />
      <Frame90 />
      <Frame92 />
      <Frame94 />
      <Frame96 />
      <Frame98 />
    </div>
  );
}

function ChartOperationalWorkload() {
  return (
    <div className="bg-[#18181b] relative rounded-[6.4px] shrink-0 w-full" data-name="chart-operational-workload">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col gap-[9.6px] items-start p-[12.8px] relative size-full">
        <Frame86 />
        <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[8.8px] whitespace-nowrap">Open issues grouped by operational area</p>
        <Frame87 />
      </div>
    </div>
  );
}

function ChartsSection() {
  return (
    <div className="content-stretch flex flex-col gap-[12.8px] items-start relative shrink-0 w-full" data-name="charts-section">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[12.8px] text-white whitespace-nowrap">{`Revenue & paid orders`}</p>
      <ChartRevenueOrders />
      <Frame54 />
      <ChartOperationalWorkload />
    </div>
  );
}

function Viewport() {
  return (
    <div className="h-[1609.6px] relative shrink-0 w-full" data-name="viewport">
      <div className="content-stretch flex flex-col gap-[19.2px] items-start p-[19.2px] relative size-full">
        <GreetingBanner />
        <Frame21 />
        <Frame24 />
        <Frame32 />
        <Frame39 />
        <ChartsSection />
      </div>
    </div>
  );
}

function MainArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[1654.4px] items-start min-w-px relative" data-name="main-area">
      <Topbar />
      <Viewport />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[12.8px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 12.8">
        <g id="chevron-left">
          <path d={svgPaths.p2329ce80} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Frame99() {
  return <div className="flex-[1_0_0] min-h-px relative w-[80px]" data-name="Frame" />;
}

function Frame100() {
  return (
    <div className="flex h-[74px] items-center justify-center relative shrink-0 w-[11px]">
      <div className="-rotate-90 flex-none">
        <div className="content-stretch flex items-start relative" data-name="Frame">
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#71717a] text-[8.8px] uppercase whitespace-nowrap">Team Presence</p>
        </div>
      </div>
    </div>
  );
}

function TeamPresencePanel() {
  return (
    <div className="bg-[#18181b] h-full relative shrink-0 w-[25.6px]" data-name="team-presence-panel">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-l-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[19.2px] relative size-full">
          <ChevronLeft />
          <Frame99 />
          <Frame100 />
        </div>
      </div>
    </div>
  );
}

function MainDashboard() {
  return (
    <div className="bg-[#09090b] content-stretch flex h-[1654.4px] items-start relative shrink-0" data-name="main-dashboard">
      <Sidebar />
      <MainArea />
      <TeamPresencePanel />
    </div>
  );
}

function HeroImageContainer() {
  return (
    <div className="bg-[#3f3f46] content-stretch flex h-[380px] items-start overflow-clip relative rounded-[4px] shrink-0 w-[1152px]" data-name="hero-image-container">
      <MainDashboard />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start pt-[32px] relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#f2f1ec] text-[82px] tracking-[-2.46px] w-[min-content]">
        <p className="leading-[72px] mb-0">KitaLabel</p>
        <p className="leading-[72px]">Business OS</p>
      </div>
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#cc6ef8] text-[20px] w-[952px]">{`Unified admin platform for Indonesia's label printing operations — order management, customer intelligence, and internal pricing in one system.`}</p>
      <Frame3 />
      <HeroImageContainer />
    </div>
  );
}

function Hero() {
  return (
    <div className="h-[940px] relative shrink-0 w-full" data-name="Hero">
      <div className="content-stretch flex flex-col items-start pt-[120px] px-[64px] relative size-full">
        <Frame2 />
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[466px]" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-none min-w-px relative text-[#f2f1ec] text-[46px]">The problem</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9a9a93] text-[14px] whitespace-nowrap">WooCommerce CRM</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9a9a93] text-[14px] whitespace-nowrap">Customer Segmentation</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9a9a93] text-[14px] whitespace-nowrap">Design Documentation</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9a9a93] text-[14px] whitespace-nowrap">Internal Tooling</p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame105 />
      <Frame106 />
      <Frame107 />
      <Frame108 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[564px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f2f1ec] text-[17px] w-full">{`KitaLabel's internal operations ran across disconnected tools — no unified view of orders, pricing, customers, or production status. Staff context-switched between spreadsheets, WhatsApp, and ad-hoc dashboards to do basic work.`}</p>
      <Frame104 />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-start justify-between pt-[40px] relative shrink-0 w-[1152px]" data-name="Frame">
      <Frame102 />
      <Frame103 />
    </div>
  );
}

function Section1() {
  return (
    <div className="h-[490px] relative shrink-0 w-full" data-name="Section 01">
      <div className="content-stretch flex flex-col items-start pt-[100px] px-[64px] relative size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">00 — The Problem</p>
        <Frame101 />
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[466px]" data-name="Frame">
      <div className="[word-break:break-word] flex-[1_0_0] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[0] min-w-px relative text-[#f2f1ec] text-[46px]">
        <p className="leading-none mb-0">The</p>
        <p className="leading-none">challenge</p>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9a9a93] text-[14px] whitespace-nowrap">WooCommerce CRM</p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9a9a93] text-[14px] whitespace-nowrap">Customer Segmentation</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9a9a93] text-[14px] whitespace-nowrap">Design Documentation</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex items-start px-[16px] py-[8px] relative rounded-[99px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[99px]" />
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9a9a93] text-[14px] whitespace-nowrap">Internal Tooling</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame113 />
      <Frame114 />
      <Frame115 />
      <Frame116 />
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[564px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#f2f1ec] text-[17px] w-full">{`KitaLabel is Indonesia's first online label printing platform, serving SMB food, beverage, cosmetics, and pharmaceutical businesses needing custom-printed labels door to door. As the company scaled to 1,800+ WooCommerce customers and 240+ monthly orders, the team hit a hard ceiling — WooCommerce native admin gave no business intelligence, no customer segmentation, and no operational visibility. This project was a full design of KitaLabel's internal Business OS: a purpose-built admin panel that centralises order management, customer analytics, internal pricing, and team access into one coherent product.`}</p>
      <Frame112 />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex items-start justify-between pt-[40px] relative shrink-0 w-[1152px]" data-name="Frame">
      <Frame110 />
      <Frame111 />
    </div>
  );
}

function Section() {
  return (
    <div className="h-[490px] relative shrink-0 w-full" data-name="Section 01">
      <div className="content-stretch flex flex-col items-start pt-[100px] px-[64px] relative size-full">
        <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">01 — Overview</p>
        <Frame109 />
      </div>
    </div>
  );
}

function Frame117() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">02 — Before this OS</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-none min-w-full relative shrink-0 text-[#f2f1ec] text-[46px] w-[min-content]">The team was flying blind</p>
    </div>
  );
}

// ── Pain-point mini diagrams (Section 02) ─────────────────────────────────────
// Hand-built SVG illustrations in the site's visual language: Space Mono
// labels, thin strokes, red for the pain signal. viewBox 484x96 = card width.

const vizStroke = "rgba(242,241,236,0.28)";
const vizText = "#9a9a93";
const vizRed = "#e5484d";
const vizFont = { fontFamily: "'Space Mono', monospace", fontSize: 9 } as const;

function PainViz1() {
  // Four disconnected tools, dashed lines that never reach a (missing) hub.
  return (
    <svg className="w-full h-auto shrink-0" viewBox="0 0 484 96" fill="none">
      {[
        { x: 8, y: 8, label: "Sheets" },
        { x: 8, y: 62, label: "Ledger" },
        { x: 384, y: 8, label: "WhatsApp" },
        { x: 384, y: 62, label: "Woo Store" },
      ].map((b) => (
        <g key={b.label}>
          <rect x={b.x} y={b.y} width="92" height="26" rx="3" stroke={vizStroke} />
          <text x={b.x + 46} y={b.y + 17} textAnchor="middle" fill={vizText} style={vizFont}>{b.label}</text>
        </g>
      ))}
      <line x1="104" y1="24" x2="200" y2="42" stroke={vizStroke} strokeDasharray="3 6" />
      <line x1="104" y1="72" x2="200" y2="54" stroke={vizStroke} strokeDasharray="3 6" />
      <line x1="380" y1="24" x2="284" y2="42" stroke={vizStroke} strokeDasharray="3 6" />
      <line x1="380" y1="72" x2="284" y2="54" stroke={vizStroke} strokeDasharray="3 6" />
      <circle cx="242" cy="48" r="21" stroke={vizRed} strokeDasharray="4 4" opacity="0.85" />
      <text x="242" y="53" textAnchor="middle" fill={vizRed} style={{ ...vizFont, fontSize: 13 }}>?</text>
    </svg>
  );
}

function PainViz2() {
  // 1,847 anonymous dots; a high-value buyer and a lapsed one render identically.
  return (
    <svg className="w-full h-auto shrink-0" viewBox="0 0 484 96" fill="none">
      {Array.from({ length: 44 }).map((_, i) => (
        <circle key={i} cx={20 + (i % 22) * 21} cy={i < 22 ? 10 : 22} r="2.2" fill={vizText} opacity="0.18" />
      ))}
      <g>
        <circle cx="170" cy="52" r="11" stroke={vizText} />
        <path d="M152 78 a18 14 0 0 1 36 0" stroke={vizText} />
        <text x="170" y="92" textAnchor="middle" fill={vizText} style={vizFont}>high-value</text>
      </g>
      <text x="242" y="66" textAnchor="middle" fill={vizRed} style={{ ...vizFont, fontSize: 20 }}>=</text>
      <g>
        <circle cx="314" cy="52" r="11" stroke={vizText} />
        <path d="M296 78 a18 14 0 0 1 36 0" stroke={vizText} />
        <text x="314" y="92" textAnchor="middle" fill={vizText} style={vizFont}>lapsed</text>
      </g>
    </svg>
  );
}

function PainViz3() {
  // Two price tags for the same label order that disagree.
  return (
    <svg className="w-full h-auto shrink-0" viewBox="0 0 484 96" fill="none">
      <g>
        <rect x="52" y="20" width="156" height="56" rx="3" stroke={vizStroke} />
        <text x="66" y="40" fill={vizText} style={vizFont}>Internal quote</text>
        <rect x="66" y="52" width="64" height="7" rx="2" fill={vizText} opacity="0.55" />
        <text x="138" y="60" fill={vizText} style={vizFont} opacity="0.7">Rp</text>
      </g>
      <text x="242" y="56" textAnchor="middle" fill={vizRed} style={{ ...vizFont, fontSize: 18 }}>≠</text>
      <g>
        <rect x="276" y="20" width="156" height="56" rx="3" stroke={vizStroke} />
        <text x="290" y="40" fill={vizText} style={vizFont}>Storefront calc</text>
        <rect x="290" y="52" width="104" height="7" rx="2" fill={vizText} opacity="0.55" />
        <text x="402" y="60" fill={vizText} style={vizFont} opacity="0.7">Rp</text>
      </g>
    </svg>
  );
}

function PainViz4() {
  // Three roles, one identical unfiltered screen for everyone.
  return (
    <svg className="w-full h-auto shrink-0" viewBox="0 0 484 96" fill="none">
      {[
        { y: 20, label: "Manager" },
        { y: 48, label: "Rep" },
        { y: 76, label: "Finance" },
      ].map((r) => (
        <g key={r.label}>
          <text x="24" y={r.y + 3} fill={vizText} style={vizFont}>{r.label}</text>
          <line x1="92" y1={r.y} x2="236" y2="48" stroke={vizStroke} />
        </g>
      ))}
      <path d="M236 48 l-7 -4 v8 z" fill={vizText} opacity="0.7" />
      <rect x="248" y="16" width="184" height="64" rx="3" stroke={vizStroke} />
      {[30, 42, 54].map((y) => (
        <rect key={y} x="260" y={y} width="128" height="5" rx="2" fill={vizText} opacity="0.3" />
      ))}
      <circle cx="410" cy="32" r="7" stroke={vizRed} />
      <circle cx="410" cy="32" r="2.4" fill={vizRed} />
      <text x="260" y="72" fill={vizRed} style={{ ...vizFont, fontSize: 8 }}>one unfiltered view for everyone</text>
    </svg>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px] whitespace-nowrap">No unified metrics view</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#9a9a93] text-[13px] w-[min-content]">Revenue, orders, customer counts, and operational alerts existed in separate tools. The team had no single morning dashboard to run the business from.</p>
    </div>
  );
}

function Frame120() {
  return (
    <div className="relative rounded-[1px] self-stretch shrink-0 w-[564px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[1px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start p-[40px] relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[14px] whitespace-nowrap">01</p>
        <PainViz1 />
        <Frame121 />
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px] whitespace-nowrap">Customer data was invisible</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#9a9a93] text-[13px] w-[min-content]">1,847 WooCommerce customers with zero segmentation, no reorder risk tracking, and no churn signals. High-value buyers looked the same as lapsed ones.</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="relative rounded-[1px] self-stretch shrink-0 w-[564px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[1px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start p-[40px] relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[14px] whitespace-nowrap">02</p>
        <PainViz2 />
        <Frame123 />
      </div>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex gap-[24px] items-stretch relative shrink-0 w-full" data-name="Frame">
      <Frame120 />
      <Frame122 />
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px] whitespace-nowrap">Pricing was inconsistent</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#9a9a93] text-[13px] w-[min-content]">{`Internal sales quotes didn't match the storefront calculator. Reps estimated margins without cost data, eroding trust in numbers.`}</p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="relative rounded-[1px] self-stretch shrink-0 w-[564px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[1px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start p-[40px] relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[14px] whitespace-nowrap">03</p>
        <PainViz3 />
        <Frame126 />
      </div>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px] whitespace-nowrap">No role-based access control</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] min-w-full relative shrink-0 text-[#9a9a93] text-[13px] w-[min-content]">Sales managers, reps, and finance teams all saw the same unfiltered interface — sensitive data, irrelevant actions, and noise by default.</p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="relative rounded-[1px] self-stretch shrink-0 w-[564px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[1px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-start p-[40px] relative size-full">
        <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[14px] whitespace-nowrap">04</p>
        <PainViz4 />
        <Frame128 />
      </div>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex gap-[24px] items-stretch relative shrink-0 w-full" data-name="Frame">
      <Frame125 />
      <Frame127 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1152px]" data-name="Frame">
      <Frame119 />
      <Frame124 />
    </div>
  );
}

function Section2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section 02">
      <div className="content-stretch flex flex-col gap-[64px] items-start px-[64px] py-[100px] relative size-full">
        <Frame117 />
        <Frame118 />
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">03 — Key Screens</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-none min-w-full relative shrink-0 text-[#f2f1ec] text-[46px] w-[min-content]">The system, screen by screen</p>
    </div>
  );
}

function Logo1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[140px]" data-name="logo">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo} />
    </div>
  );
}

function Grid2X1() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="grid-2x2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="grid-2x2">
          <path d={svgPaths.p2d8e0280} id="Vector" stroke="var(--stroke-0, #F2F1EC)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function NavDashboard1() {
  return (
    <div className="bg-[#ff8a00] relative rounded-[6.4px] shrink-0 w-full" data-name="nav-Dashboard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center px-[9.6px] py-[6.4px] relative size-full">
          <Grid2X1 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#f2f1ec] text-[11.2px]">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#9a9a93] text-[8.8px] uppercase whitespace-nowrap">Main</p>
      <NavDashboard1 />
    </div>
  );
}

function ShoppingBag1() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="shopping-bag">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="shopping-bag">
          <path d={svgPaths.p21a75b00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Frame134() {
  return (
    <div className="bg-[#27272a] content-stretch flex items-start px-[4.8px] py-[1.6px] relative rounded-[3.2px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8.8px] whitespace-nowrap">47</p>
    </div>
  );
}

function NavOrders1() {
  return (
    <div className="bg-[rgba(10,10,10,0)] relative rounded-[6.4px] shrink-0 w-full" data-name="nav-Orders">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center px-[9.6px] py-[6.4px] relative size-full">
          <ShoppingBag1 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[11.2px]">Orders</p>
          <Frame134 />
        </div>
      </div>
    </div>
  );
}

function Users2() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="users">
          <path d={svgPaths.p4b0ba00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function NavWooCustomers1() {
  return (
    <div className="bg-[rgba(10,10,10,0)] relative rounded-[6.4px] shrink-0 w-full" data-name="nav-Woo Customers">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center px-[9.6px] py-[6.4px] relative size-full">
          <Users2 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[11.2px]">Woo Customers</p>
        </div>
      </div>
    </div>
  );
}

function RefreshCcw1() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="refresh-ccw">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="refresh-ccw">
          <path d={svgPaths.peb8e600} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function NavReorderCycle1() {
  return (
    <div className="bg-[rgba(10,10,10,0)] relative rounded-[6.4px] shrink-0 w-full" data-name="nav-Reorder Cycle">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center px-[9.6px] py-[6.4px] relative size-full">
          <RefreshCcw1 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[11.2px]">Reorder Cycle</p>
        </div>
      </div>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#9a9a93] text-[8.8px] uppercase whitespace-nowrap">CRM</p>
      <NavOrders1 />
      <NavWooCustomers1 />
      <NavReorderCycle1 />
    </div>
  );
}

function Calculator1() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="calculator">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="calculator">
          <path d={svgPaths.p3e3d2b00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function NavInternalCalculator1() {
  return (
    <div className="bg-[rgba(10,10,10,0)] relative rounded-[6.4px] shrink-0 w-full" data-name="nav-Internal Calculator">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center px-[9.6px] py-[6.4px] relative size-full">
          <Calculator1 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[11.2px]">Internal Calculator</p>
        </div>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#9a9a93] text-[8.8px] uppercase whitespace-nowrap">Tools</p>
      <NavInternalCalculator1 />
    </div>
  );
}

function Users3() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g id="users">
          <path d={svgPaths.p1b346000} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function NavMembers1() {
  return (
    <div className="bg-[rgba(10,10,10,0)] relative rounded-[6.4px] shrink-0 w-full" data-name="nav-Members">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center px-[9.6px] py-[6.4px] relative size-full">
          <Users3 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#a1a1aa] text-[11.2px]">Team Members</p>
        </div>
      </div>
    </div>
  );
}

function ShieldCheck1() {
  return (
    <div className="relative shrink-0 size-[14.4px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4 14.4">
        <g clipPath="url(#clip0_1_5341)" id="shield-check">
          <path d={svgPaths.pe0b7f00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
        <defs>
          <clipPath id="clip0_1_5341">
            <rect fill="white" height="14.4" width="14.4" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavRoles1() {
  return (
    <div className="bg-[rgba(10,10,10,0)] relative rounded-[6.4px] shrink-0 w-full" data-name="nav-Roles">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center px-[9.6px] py-[6.4px] relative size-full">
          <ShieldCheck1 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#a1a1aa] text-[11.2px]">Team Roles</p>
        </div>
      </div>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex flex-col gap-[6.4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#9a9a93] text-[8.8px] uppercase whitespace-nowrap">Team</p>
      <NavMembers1 />
      <NavRoles1 />
    </div>
  );
}

function NavGroups1() {
  return (
    <div className="content-stretch flex flex-col gap-[19.2px] items-start relative shrink-0 w-full" data-name="nav-groups">
      <Frame132 />
      <Frame133 />
      <Frame135 />
      <Frame136 />
    </div>
  );
}

function Frame137() {
  return <div className="h-[80px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame138() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[1.6px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#f2f1ec] text-[10.4px]">Adit Pratama</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#9a9a93] text-[8.8px]">Super Administrator</p>
    </div>
  );
}

function UserProfile1() {
  return (
    <div className="relative rounded-[6.4px] shrink-0 w-full" data-name="user-profile">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center p-[9.6px] relative size-full">
          <div className="relative rounded-[6.4px] shrink-0 size-[25.6px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6.4px] size-full" src={imgRectangle} />
          </div>
          <Frame138 />
        </div>
      </div>
    </div>
  );
}

function SidebarFooter1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="sidebar-footer">
      <Frame137 />
      <UserProfile1 />
    </div>
  );
}

function Sidebar1() {
  return (
    <div className="bg-[#141414] content-stretch flex flex-col gap-[25.6px] h-[1654.4px] items-start p-[12.8px] relative shrink-0 w-[204.8px]" data-name="sidebar">
      <div aria-hidden className="absolute border-[rgba(242,241,236,0.08)] border-r-[0.8px] border-solid inset-0 pointer-events-none" />
      <Logo1 />
      <NavGroups1 />
      <SidebarFooter1 />
    </div>
  );
}

function ChevronRight1() {
  return (
    <div className="relative shrink-0 size-[11.2px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
        <g id="chevron-right">
          <path d={svgPaths.p1fe30498} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Breadcrumb1() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0" data-name="breadcrumb">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[11.2px] whitespace-nowrap">Business OS</p>
      <ChevronRight1 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[11.2px] whitespace-nowrap">Dashboard</p>
    </div>
  );
}

function Search3() {
  return (
    <div className="relative shrink-0 size-[12.8px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 12.8">
        <g id="search">
          <path d={svgPaths.p19efa570} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Search2() {
  return (
    <div className="bg-[#09090b] content-stretch flex gap-[9.6px] items-center px-[9.6px] py-[6.4px] relative rounded-[6.4px] shrink-0 w-[320px]" data-name="search">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <Search3 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9a9a93] text-[11.2px] whitespace-nowrap">Search everything...</p>
    </div>
  );
}

function Bell1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bell">
          <path d={svgPaths.p2fcffc00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[11.2px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 11.2">
        <g id="chevron-down">
          <path d={svgPaths.p1b442600} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[10.4px] whitespace-nowrap">Adit P.</p>
      <ChevronDown1 />
    </div>
  );
}

function TopbarActions1() {
  return (
    <div className="content-stretch flex gap-[12.8px] items-center relative shrink-0" data-name="topbar-actions">
      <Bell1 />
      <Frame139 />
    </div>
  );
}

function Topbar1() {
  return (
    <div className="bg-[#141414] h-[44.8px] relative shrink-0 w-full" data-name="topbar">
      <div aria-hidden className="absolute border-[rgba(242,241,236,0.08)] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[19.2px] relative size-full">
          <Breadcrumb1 />
          <Search2 />
          <TopbarActions1 />
        </div>
      </div>
    </div>
  );
}

function Frame140() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.2px] items-start leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#f2f1ec] text-[19.2px]">Good morning, Adit</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a1a1aa] text-[11.2px]">Tuesday, June 25, 2025 • 09:12 AM (GMT+7)</p>
    </div>
  );
}

function Frame142() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[1.6px] items-end leading-[normal] relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#f2f1ec] text-[11.2px]">Jakarta, ID</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a1a1aa] text-[9.6px]">Partly Cloudy • 29°C</p>
    </div>
  );
}

function CloudSun1() {
  return (
    <div className="relative shrink-0 size-[25.6px]" data-name="cloud-sun">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6 25.6">
        <g id="cloud-sun">
          <path d={svgPaths.p3f5efe00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex gap-[12.8px] items-center relative shrink-0" data-name="Frame">
      <Frame142 />
      <CloudSun1 />
    </div>
  );
}

function GreetingBanner1() {
  return (
    <div className="bg-[#141414] relative rounded-[6.4px] shrink-0 w-full" data-name="greeting-banner">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[19.2px] relative size-full">
          <Frame140 />
          <Frame141 />
        </div>
      </div>
    </div>
  );
}

function FilterTabAlltime1() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0" data-name="filter-tab-alltime">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">All Time</p>
    </div>
  );
}

function FilterTabToday1() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0 w-[46.4px]" data-name="filter-tab-today">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">Today</p>
    </div>
  );
}

function FilterTabWtd1() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0" data-name="filter-tab-wtd">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">WTD</p>
    </div>
  );
}

function FilterTabMtd1() {
  return (
    <div className="bg-[#ff8a00] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0" data-name="filter-tab-mtd">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[9.6px] text-white whitespace-nowrap">MTD</p>
    </div>
  );
}

function FilterTabYtd1() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0 w-[37.6px]" data-name="filter-tab-ytd">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">YTD</p>
    </div>
  );
}

function FilterTabYesterday1() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0" data-name="filter-tab-yesterday">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">Yesterday</p>
    </div>
  );
}

function FilterTabLastweek1() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0" data-name="filter-tab-lastweek">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">Last Week</p>
    </div>
  );
}

function FilterTabLastmonth1() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0" data-name="filter-tab-lastmonth">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">Last Month</p>
    </div>
  );
}

function FilterTabLastyear1() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0" data-name="filter-tab-lastyear">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">Last Year</p>
    </div>
  );
}

function FilterTabCustom1() {
  return (
    <div className="bg-[rgba(10,10,10,0)] content-stretch flex items-start px-[9.6px] py-[4.8px] relative rounded-[4.8px] shrink-0" data-name="filter-tab-custom">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[4.8px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">Custom</p>
    </div>
  );
}

function Frame145() {
  return (
    <div className="bg-[#09090b] content-stretch flex gap-[3.2px] items-start p-[3.2px] relative rounded-[6.4px] shrink-0 w-[572.8px]" data-name="Frame">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <FilterTabAlltime1 />
      <FilterTabToday1 />
      <FilterTabWtd1 />
      <FilterTabMtd1 />
      <FilterTabYtd1 />
      <FilterTabYesterday1 />
      <FilterTabLastweek1 />
      <FilterTabLastmonth1 />
      <FilterTabLastyear1 />
      <FilterTabCustom1 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-center flex flex-wrap gap-[16px_12.8px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame145 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold h-[13.6px] leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8.8px] w-[297.6px]">Month to date (Jun 1 - 26, 2026) · vs May 1 - 26, 2026</p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex flex-col gap-[9.6px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[8px] uppercase whitespace-nowrap">FILTER BY PERIOD</p>
      <Frame144 />
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] left-[75.2px] text-[#ff8a00] text-[8px] top-0 whitespace-nowrap">TO DATE</p>
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] left-[269.6px] text-[#ff8a00] text-[8px] top-0 whitespace-nowrap">LAST PERIOD</p>
      <p className="[word-break:break-word] absolute font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] left-[565.6px] text-[#ff8a00] text-[8px] top-0 whitespace-nowrap">CUSTOM</p>
    </div>
  );
}

function Frame148() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.2px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20.8px] text-white">Rp 352,441,770</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">Paid revenue (MTD)</p>
    </div>
  );
}

function StatCardRevMtd1() {
  return (
    <div className="bg-[#141414] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="stat-card-rev-mtd">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame148 />
      </div>
    </div>
  );
}

function Frame149() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.2px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#10b981] text-[20.8px]">Rp 349,028,270</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">Revenue active from reorder customers</p>
    </div>
  );
}

function StatCardAovMtd1() {
  return (
    <div className="bg-[#141414] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="stat-card-aov-mtd">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame149 />
      </div>
    </div>
  );
}

function Frame150() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.2px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#ff8a00] text-[20.8px]">20</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">Paid orders (MTD)</p>
    </div>
  );
}

function StatCardOrdersMtd1() {
  return (
    <div className="bg-[#141414] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="stat-card-orders-mtd">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame150 />
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex gap-[12.8px] items-start relative shrink-0 w-full" data-name="Frame">
      <StatCardRevMtd1 />
      <StatCardAovMtd1 />
      <StatCardOrdersMtd1 />
    </div>
  );
}

function Frame152() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.2px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[20.8px] text-white">4</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">New paying customers (MTD)</p>
    </div>
  );
}

function StatCardRevFiltered1() {
  return (
    <div className="bg-[#141414] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="stat-card-rev-filtered">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame152 />
      </div>
    </div>
  );
}

function Frame153() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.2px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#ff8a00] text-[20.8px]">Rp 17,622,089</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">Paid avg order value (MTD)</p>
    </div>
  );
}

function StatCardOrdersTop1() {
  return (
    <div className="bg-[#141414] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="stat-card-orders-top">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col items-start p-[16px] relative size-full">
        <Frame153 />
      </div>
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex gap-[12.8px] items-start relative shrink-0 w-full" data-name="Frame">
      <StatCardRevFiltered1 />
      <StatCardOrdersTop1 />
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex flex-col gap-[12.8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[12.8px] whitespace-nowrap">Business Pulse</p>
      <Frame147 />
      <Frame151 />
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex flex-col gap-[3.2px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[22.4px] text-white">1,024</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">Woo accounts first seen in MTD</p>
    </div>
  );
}

function StatCard3() {
  return (
    <div className="bg-[#141414] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="stat-card">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[9.6px] items-start leading-[normal] p-[16px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[9.6px] uppercase">NEW REGISTERED USERS</p>
        <Frame156 />
      </div>
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex flex-col gap-[3.2px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#1bbc9c] text-[22.4px]">40%</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">412 of 1,024 registered users bought</p>
    </div>
  );
}

function StatCard4() {
  return (
    <div className="bg-[#141414] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="stat-card">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[9.6px] items-start leading-[normal] p-[16px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[9.6px] uppercase">REGISTERED BUYER CONVERSION</p>
        <Frame157 />
      </div>
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex flex-col gap-[3.2px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[22.4px] text-white">412</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">Customers whose first paid order is MTD</p>
    </div>
  );
}

function StatCard5() {
  return (
    <div className="bg-[#141414] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="stat-card">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[9.6px] items-start leading-[normal] p-[16px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[9.6px] uppercase">FIRST PAID ORDER USERS</p>
        <Frame158 />
      </div>
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex gap-[12.8px] items-start relative shrink-0 w-full" data-name="Frame">
      <StatCard3 />
      <StatCard4 />
      <StatCard5 />
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex flex-col gap-[3.2px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#ff8a00] text-[22.4px]">314</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">Repeat buyers active in this window</p>
    </div>
  );
}

function StatCardExistingUsers1() {
  return (
    <div className="bg-[#141414] flex-[1_0_0] h-[100px] min-w-px relative rounded-[6.4px]" data-name="stat-card-existing-users">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[9.6px] items-start leading-[normal] p-[16px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[9.6px] uppercase">EXISTING USERS</p>
        <Frame159 />
      </div>
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex flex-col gap-[3.2px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#ff4b4b] text-[22.4px]">83</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[9.6px]">Needs cleanup among selected users</p>
    </div>
  );
}

function StatCardMissingContactData1() {
  return (
    <div className="bg-[#141414] flex-[1_0_0] h-[100px] min-w-px relative rounded-[6.4px]" data-name="stat-card-missing-contact-data">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[9.6px] items-start leading-[normal] p-[16px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[9.6px] uppercase">MISSING CONTACT DATA</p>
        <Frame160 />
      </div>
    </div>
  );
}

function CustomerPulseRow1() {
  return (
    <div className="content-stretch flex gap-[12.8px] h-[100px] items-start overflow-clip relative shrink-0 w-[883.2px]" data-name="customer-pulse-row-2">
      <StatCardExistingUsers1 />
      <StatCardMissingContactData1 />
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex flex-col gap-[12.8px] h-[242.4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[12.8px] whitespace-nowrap">Customer Pulse</p>
      <Frame155 />
      <CustomerPulseRow1 />
    </div>
  );
}

function AlertTriangle1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="alert-triangle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="alert-triangle">
          <path d={svgPaths.p1088f180} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Frame163() {
  return (
    <div className="bg-[#141414] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="Frame">
      <div aria-hidden className="absolute border-[#f59e0b] border-b-[0.8px] border-l-[3.2px] border-r-[0.8px] border-solid border-t-[0.8px] inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center p-[12.8px] relative size-full">
          <AlertTriangle1 />
          <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[11.2px] text-white whitespace-nowrap">
            <span className="leading-[normal]">{`Pending Orders — `}</span>
            <span className="leading-[normal] text-[#a1a1aa]">5 orders awaiting fulfillment from yesterday.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function FireExtinguisher1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="fire-extinguisher">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="fire-extinguisher">
          <path d={svgPaths.p3ebbf280} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Frame164() {
  return (
    <div className="bg-[#141414] flex-[1_0_0] min-w-px relative rounded-[6.4px]" data-name="Frame">
      <div aria-hidden className="absolute border-[#ef4444] border-b-[0.8px] border-l-[3.2px] border-r-[0.8px] border-solid border-t-[0.8px] inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[9.6px] items-center p-[12.8px] relative size-full">
          <FireExtinguisher1 />
          <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[11.2px] text-white whitespace-nowrap">
            <span className="leading-[normal]">{`Low Reorder Risk — `}</span>
            <span className="leading-[normal] text-[#a1a1aa]">8 loyal customers are past their typical reorder cycle.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex gap-[12.8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame163 />
      <Frame164 />
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex flex-col gap-[12.8px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[12.8px] whitespace-nowrap">Operational Alerts</p>
      <Frame162 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="bg-[#27272a] content-stretch flex items-start px-[6.4px] py-[2.4px] relative rounded-[3.2px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8.8px] whitespace-nowrap">MTD</p>
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#f2f1ec] text-[11.2px]">{`Revenue & paid orders`}</p>
      <Frame166 />
    </div>
  );
}

function Frame168() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[128px] items-end justify-between leading-[normal] relative shrink-0 text-[#52525b] text-[8px] w-[48px] whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0">350M</p>
      <p className="relative shrink-0">262M</p>
      <p className="relative shrink-0">175M</p>
      <p className="relative shrink-0">87M</p>
      <p className="relative shrink-0">0</p>
    </div>
  );
}

function Frame170() {
  return (
    <div className="h-[112px] overflow-clip relative shrink-0 w-full" data-name="Frame">
      <div className="absolute bg-[rgba(255,255,255,0.04)] h-[0.8px] left-0 right-0 top-0" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.04)] h-[0.8px] left-0 right-0 top-[28px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.04)] h-[0.8px] left-0 right-0 top-[56px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.04)] h-[0.8px] left-0 right-0 top-[84px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,255,255,0.04)] h-[0.8px] left-0 right-0 top-[111.2px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[32px] left-0 top-[80px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[40px] left-[24px] top-[72px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[56px] left-[48px] top-[56px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[48px] left-[72px] top-[64px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[64px] left-[96px] top-[48px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[72px] left-[120px] top-[40px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[88px] left-[144px] top-[24px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[80px] left-[168px] top-[32px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[96px] left-[192px] top-[16px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[84px] left-[216px] top-[28px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[104px] left-[240px] top-[8px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[rgba(255,138,0,0.15)] h-[92px] left-[264px] top-[20px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-0 top-[79.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[24px] top-[71.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[48px] top-[55.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[72px] top-[63.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[96px] top-[47.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[120px] top-[39.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[144px] top-[23.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[168px] top-[31.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[192px] top-[15.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[216px] top-[27.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[240px] top-[7.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute bg-[#ff8a00] h-[1.6px] left-[264px] top-[19.2px] w-[22.4px]" data-name="Rectangle" />
      <div className="absolute left-[10.4px] size-[4px] top-[88px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[34.4px] size-[4px] top-[80px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[58.4px] size-[4px] top-[64px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[82.4px] size-[4px] top-[72px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[106.4px] size-[4px] top-[56px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[130.4px] size-[4px] top-[48px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[154.4px] size-[4px] top-[32px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[178.4px] size-[4px] top-[40px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[202.4px] size-[4px] top-[24px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[226.4px] size-[4px] top-[36px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[250.4px] size-[4px] top-[16px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
      <div className="absolute left-[274.4px] size-[4px] top-[28px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, white)" id="Ellipse" r="2" />
        </svg>
      </div>
    </div>
  );
}

function Frame171() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular',sans-serif] font-normal items-start justify-between leading-[normal] pt-[3.2px] relative shrink-0 text-[#52525b] text-[7.2px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0">Jun 1</p>
      <p className="relative shrink-0">Jun 5</p>
      <p className="relative shrink-0">Jun 10</p>
      <p className="relative shrink-0">Jun 15</p>
      <p className="relative shrink-0">Jun 20</p>
      <p className="relative shrink-0">Jun 25</p>
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[128px] items-start min-w-px relative" data-name="Frame">
      <Frame170 />
      <Frame171 />
    </div>
  );
}

function Frame172() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal h-[128px] items-start justify-between leading-[normal] relative shrink-0 text-[#52525b] text-[8px] w-[22.4px] whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0">20</p>
      <p className="relative shrink-0">15</p>
      <p className="relative shrink-0">10</p>
      <p className="relative shrink-0">5</p>
      <p className="relative shrink-0">0</p>
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6.4px] items-end min-h-px relative w-full" data-name="Frame">
      <Frame168 />
      <Frame169 />
      <Frame172 />
    </div>
  );
}

function Frame174() {
  return (
    <div className="content-stretch flex gap-[4.8px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-[#ff8a00] relative rounded-[1.6px] shrink-0 size-[8px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8.8px] whitespace-nowrap">Paid Revenue</p>
    </div>
  );
}

function Frame175() {
  return (
    <div className="content-stretch flex gap-[4.8px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-white relative rounded-[1.6px] shrink-0 size-[8px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8.8px] whitespace-nowrap">Paid Orders</p>
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex gap-[12.8px] items-center relative shrink-0" data-name="Frame">
      <Frame174 />
      <Frame175 />
    </div>
  );
}

function TooltipRowPaidRevenueRp1() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-start overflow-clip relative shrink-0" data-name="tooltip-row-paid-revenue-rp-352-441-770">
      <div className="bg-[#ff8a00] relative rounded-[1.6px] shrink-0 size-[6.4px]" data-name="series-marker" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[9.6px] text-white whitespace-nowrap">Paid revenue: Rp 352.441.770</p>
    </div>
  );
}

function TooltipRowPaidOrders1() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-start overflow-clip relative shrink-0" data-name="tooltip-row-paid-orders-20">
      <div className="bg-[#626563] relative rounded-[1.6px] shrink-0 size-[6.4px]" data-name="series-marker" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[9.6px] text-white whitespace-nowrap">Paid orders: 20</p>
    </div>
  );
}

function ChartTooltipHoverSample1() {
  return (
    <div className="absolute bg-[#0c0c0f] h-[73.6px] left-[285.6px] rounded-[6.4px] top-[80px] w-[196.8px]" data-name="chart-tooltip-hover-sample">
      <div className="content-stretch flex flex-col gap-[6.4px] items-start overflow-clip px-[9.6px] py-[8px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[9.6px] whitespace-nowrap">Jun 8</p>
        <TooltipRowPaidRevenueRp1 />
        <TooltipRowPaidOrders1 />
      </div>
      <div aria-hidden className="absolute border-[#3a3a40] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[6.4px] shadow-[0px_9.6px_17.6px_-6.4px_rgba(0,0,0,0.45)]" />
    </div>
  );
}

function ChartRevenueOrders1() {
  return (
    <div className="bg-[#141414] h-[208px] relative rounded-[6.4px] shrink-0 w-full" data-name="chart-revenue-orders">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col gap-[9.6px] items-start p-[12.8px] relative size-full">
        <Frame165 />
        <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9a9a93] text-[8.8px] whitespace-nowrap">Real revenue data with paid orders count line - MTD</p>
        <Frame167 />
        <Frame173 />
        <ChartTooltipHoverSample1 />
      </div>
    </div>
  );
}

function Frame178() {
  return (
    <div className="bg-[#27272a] content-stretch flex items-start px-[6.4px] py-[2.4px] relative rounded-[3.2px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8.8px] whitespace-nowrap">MTD</p>
    </div>
  );
}

function Frame177() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[11.2px] text-white">Customer funnel</p>
      <Frame178 />
    </div>
  );
}

function Frame181() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[9.6px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#ff8a00] h-[9.6px] relative rounded-[1.6px] shrink-0 w-[160px]" data-name="Rectangle" />
    </div>
  );
}

function Frame180() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[72px]">Registered users</p>
      <Frame181 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[25.6px]">1,024</p>
    </div>
  );
}

function Frame183() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[9.6px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#ff8a00] h-[9.6px] relative rounded-[1.6px] shrink-0 w-[64px]" data-name="Rectangle" />
    </div>
  );
}

function Frame182() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[72px]">New customers</p>
      <Frame183 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[25.6px]">412</p>
    </div>
  );
}

function Frame185() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[9.6px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#f59e0b] h-[9.6px] relative rounded-[1.6px] shrink-0 w-[48px]" data-name="Rectangle" />
    </div>
  );
}

function Frame184() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[72px]">Returning</p>
      <Frame185 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[25.6px]">314</p>
    </div>
  );
}

function Frame187() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[9.6px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#ef4444] h-[9.6px] relative rounded-[1.6px] shrink-0 w-[12.8px]" data-name="Rectangle" />
    </div>
  );
}

function Frame186() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[72px]">At risk</p>
      <Frame187 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[25.6px]">83</p>
    </div>
  );
}

function Frame189() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[9.6px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#52525b] h-[9.6px] relative rounded-[1.6px] shrink-0 w-[8px]" data-name="Rectangle" />
    </div>
  );
}

function Frame188() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[72px]">Inactive</p>
      <Frame189 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[25.6px]">51</p>
    </div>
  );
}

function Frame190() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular',sans-serif] font-normal items-start justify-between leading-[normal] pl-[72px] pr-[25.6px] pt-[3.2px] relative size-full text-[#52525b] text-[7.2px] whitespace-nowrap">
        <p className="relative shrink-0">0</p>
        <p className="relative shrink-0">200</p>
        <p className="relative shrink-0">400</p>
        <p className="relative shrink-0">600</p>
        <p className="relative shrink-0">800</p>
        <p className="relative shrink-0">1000</p>
      </div>
    </div>
  );
}

function Frame179() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6.4px] items-start min-h-px relative w-full" data-name="Frame">
      <Frame180 />
      <Frame182 />
      <Frame184 />
      <Frame186 />
      <Frame188 />
      <Frame190 />
    </div>
  );
}

function ChartCustomerFunnel1() {
  return (
    <div className="bg-[#141414] flex-[1_0_0] h-[192px] min-w-px relative rounded-[6.4px]" data-name="chart-customer-funnel">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col gap-[9.6px] items-start p-[12.8px] relative size-full">
        <Frame177 />
        <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9a9a93] text-[8.8px] whitespace-nowrap">Customer progression and cleanup pressure - MTD</p>
        <Frame179 />
      </div>
    </div>
  );
}

function Frame191() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[11.2px] text-white">Reorder risk exposure</p>
    </div>
  );
}

function Frame195() {
  return (
    <div className="content-stretch flex flex-col gap-[1.6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[7.2px] whitespace-nowrap">45</p>
      <div className="bg-[#ff8a00] h-[72px] relative rounded-[1.6px] shrink-0 w-[14.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame196() {
  return (
    <div className="content-stretch flex flex-col gap-[1.6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[7.2px] whitespace-nowrap">2.1M</p>
      <div className="bg-[#f59e0b] h-[48px] relative rounded-[1.6px] shrink-0 w-[14.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame194() {
  return (
    <div className="content-stretch flex gap-[3.2px] items-end relative shrink-0" data-name="Frame">
      <Frame195 />
      <Frame196 />
    </div>
  );
}

function Frame193() {
  return (
    <div className="content-stretch flex flex-col gap-[3.2px] items-center relative shrink-0" data-name="Frame">
      <Frame194 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[8px] whitespace-nowrap">High</p>
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex flex-col gap-[1.6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[7.2px] whitespace-nowrap">78</p>
      <div className="bg-[#ff8a00] h-[96px] relative rounded-[1.6px] shrink-0 w-[14.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame200() {
  return (
    <div className="content-stretch flex flex-col gap-[1.6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[7.2px] whitespace-nowrap">1.4M</p>
      <div className="bg-[#f59e0b] h-[32px] relative rounded-[1.6px] shrink-0 w-[14.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame198() {
  return (
    <div className="content-stretch flex gap-[3.2px] items-end relative shrink-0" data-name="Frame">
      <Frame199 />
      <Frame200 />
    </div>
  );
}

function Frame197() {
  return (
    <div className="content-stretch flex flex-col gap-[3.2px] items-center relative shrink-0" data-name="Frame">
      <Frame198 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[8px] whitespace-nowrap">Medium</p>
    </div>
  );
}

function Frame203() {
  return (
    <div className="content-stretch flex flex-col gap-[1.6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[7.2px] whitespace-nowrap">23</p>
      <div className="bg-[#ff8a00] h-[36px] relative rounded-[1.6px] shrink-0 w-[14.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame204() {
  return (
    <div className="content-stretch flex flex-col gap-[1.6px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[7.2px] whitespace-nowrap">0.5M</p>
      <div className="bg-[#f59e0b] relative rounded-[1.6px] shrink-0 size-[14.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame202() {
  return (
    <div className="content-stretch flex gap-[3.2px] items-end relative shrink-0" data-name="Frame">
      <Frame203 />
      <Frame204 />
    </div>
  );
}

function Frame201() {
  return (
    <div className="content-stretch flex flex-col gap-[3.2px] items-center relative shrink-0" data-name="Frame">
      <Frame202 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[8px] whitespace-nowrap">Low</p>
    </div>
  );
}

function Frame192() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-end justify-between min-h-px relative w-full" data-name="Frame">
      <Frame193 />
      <Frame197 />
      <Frame201 />
    </div>
  );
}

function Frame206() {
  return (
    <div className="content-stretch flex gap-[4.8px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-[#ff8a00] relative rounded-[1.6px] shrink-0 size-[8px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8.8px] whitespace-nowrap">Customers</p>
    </div>
  );
}

function Frame207() {
  return (
    <div className="content-stretch flex gap-[4.8px] items-center relative shrink-0" data-name="Frame">
      <div className="bg-[#f59e0b] relative rounded-[1.6px] shrink-0 size-[8px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8.8px] whitespace-nowrap">AOV Exposure</p>
    </div>
  );
}

function Frame205() {
  return (
    <div className="content-stretch flex gap-[9.6px] items-center relative shrink-0" data-name="Frame">
      <Frame206 />
      <Frame207 />
    </div>
  );
}

function ChartReorderRisk1() {
  return (
    <div className="bg-[#141414] flex-[1_0_0] h-[192px] min-w-px relative rounded-[6.4px]" data-name="chart-reorder-risk">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col gap-[9.6px] items-start p-[12.8px] relative size-full">
        <Frame191 />
        <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9a9a93] text-[8.8px] whitespace-nowrap">Customer count and AOV-weighted exposure by reorder status</p>
        <Frame192 />
        <Frame205 />
      </div>
    </div>
  );
}

function Frame176() {
  return (
    <div className="content-stretch flex gap-[12.8px] items-start relative shrink-0 w-full" data-name="Frame">
      <ChartCustomerFunnel1 />
      <ChartReorderRisk1 />
    </div>
  );
}

function Frame208() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#f2f1ec] text-[11.2px]">Operational workload</p>
    </div>
  );
}

function Frame211() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#ff8a00] h-[8px] relative rounded-[1.6px] shrink-0 w-[208px]" data-name="Rectangle" />
    </div>
  );
}

function Frame210() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[80px]">Customer health</p>
      <Frame211 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[16px]">28</p>
    </div>
  );
}

function Frame213() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#f59e0b] h-[8px] relative rounded-[1.6px] shrink-0 w-[148px]" data-name="Rectangle" />
    </div>
  );
}

function Frame212() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[80px]">Design issues</p>
      <Frame213 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[16px]">20</p>
    </div>
  );
}

function Frame215() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#f59e0b] h-[8px] relative rounded-[1.6px] shrink-0 w-[118.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame214() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[80px]">Unpaid orders</p>
      <Frame215 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[16px]">16</p>
    </div>
  );
}

function Frame217() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#52525b] h-[8px] relative rounded-[1.6px] shrink-0 w-[66.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame216() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[80px]">Missing phone</p>
      <Frame217 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[16px]">9</p>
    </div>
  );
}

function Frame219() {
  return (
    <div className="bg-[#27272a] content-stretch flex flex-[1_0_0] h-[8px] items-start min-w-px relative rounded-[1.6px]" data-name="Frame">
      <div className="bg-[#ef4444] h-[8px] relative rounded-[1.6px] shrink-0 w-[22.4px]" data-name="Rectangle" />
    </div>
  );
}

function Frame218() {
  return (
    <div className="content-stretch flex gap-[6.4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[80px]">Sync failures</p>
      <Frame219 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[8px] w-[16px]">3</p>
    </div>
  );
}

function Frame220() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="[word-break:break-word] content-stretch flex font-['Geist:Regular',sans-serif] font-normal items-start justify-between leading-[normal] pl-[80px] pr-[16px] pt-[1.6px] relative size-full text-[#52525b] text-[7.2px] whitespace-nowrap">
        <p className="relative shrink-0">0</p>
        <p className="relative shrink-0">5</p>
        <p className="relative shrink-0">10</p>
        <p className="relative shrink-0">15</p>
        <p className="relative shrink-0">20</p>
        <p className="relative shrink-0">25</p>
        <p className="relative shrink-0">30</p>
      </div>
    </div>
  );
}

function Frame209() {
  return (
    <div className="content-stretch flex flex-col gap-[4.8px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame210 />
      <Frame212 />
      <Frame214 />
      <Frame216 />
      <Frame218 />
      <Frame220 />
    </div>
  );
}

function ChartOperationalWorkload1() {
  return (
    <div className="bg-[#141414] relative rounded-[6.4px] shrink-0 w-full" data-name="chart-operational-workload">
      <div aria-hidden className="absolute border-[0.8px] border-[rgba(242,241,236,0.08)] border-solid inset-0 pointer-events-none rounded-[6.4px]" />
      <div className="content-stretch flex flex-col gap-[9.6px] items-start p-[12.8px] relative size-full">
        <Frame208 />
        <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9a9a93] text-[8.8px] whitespace-nowrap">Open issues grouped by operational area</p>
        <Frame209 />
      </div>
    </div>
  );
}

function ChartsSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[12.8px] items-start relative shrink-0 w-full" data-name="charts-section">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#f2f1ec] text-[12.8px] whitespace-nowrap">{`Revenue & paid orders`}</p>
      <ChartRevenueOrders1 />
      <Frame176 />
      <ChartOperationalWorkload1 />
    </div>
  );
}

function Viewport1() {
  return (
    <div className="h-[1609.6px] relative shrink-0 w-full" data-name="viewport">
      <div className="content-stretch flex flex-col gap-[19.2px] items-start p-[19.2px] relative size-full">
        <GreetingBanner1 />
        <Frame143 />
        <Frame146 />
        <Frame154 />
        <Frame161 />
        <ChartsSection1 />
      </div>
    </div>
  );
}

function MainArea1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-[1654.4px] items-start min-w-px relative" data-name="main-area">
      <Topbar1 />
      <Viewport1 />
    </div>
  );
}

function ChevronLeft1() {
  return (
    <div className="relative shrink-0 size-[12.8px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.8 12.8">
        <g id="chevron-left">
          <path d={svgPaths.p2329ce80} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="1.6" />
        </g>
      </svg>
    </div>
  );
}

function Frame221() {
  return <div className="flex-[1_0_0] min-h-px relative w-[80px]" data-name="Frame" />;
}

function Frame222() {
  return (
    <div className="flex h-[74px] items-center justify-center relative shrink-0 w-[11px]">
      <div className="-rotate-90 flex-none">
        <div className="content-stretch flex items-start relative" data-name="Frame">
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#9a9a93] text-[8.8px] uppercase whitespace-nowrap">Team Presence</p>
        </div>
      </div>
    </div>
  );
}

function TeamPresencePanel1() {
  return (
    <div className="bg-[#141414] h-full relative shrink-0 w-[25.6px]" data-name="team-presence-panel">
      <div aria-hidden className="absolute border-[rgba(242,241,236,0.08)] border-l-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[19.2px] relative size-full">
          <ChevronLeft1 />
          <Frame221 />
          <Frame222 />
        </div>
      </div>
    </div>
  );
}

function MainDashboard1() {
  return (
    <div className="absolute bg-[#09090b] content-stretch flex h-[1654.4px] items-start left-0 top-0" data-name="main-dashboard">
      <Sidebar1 />
      <MainArea1 />
      <TeamPresencePanel1 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="bg-[#3f3f46] h-[480px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <MainDashboard1 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1152px]" data-name="Frame">
      <Frame131 />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[12px] whitespace-nowrap">Dashboard — Business Pulse: Rp 352M MTD revenue, 20 paid orders, 40% buyer conversion, plus operational alerts and revenue trend chart.</p>
    </div>
  );
}

function Logo2() {
  return (
    <div className="h-[12.778px] relative shrink-0 w-[44.722px]" data-name="logo">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo} />
    </div>
  );
}

function Grid2X2() {
  return (
    <div className="relative shrink-0 size-[4.6px]" data-name="grid-2x2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
        <g clipPath="url(#clip0_1_5291)" id="grid-2x2">
          <path d={svgPaths.p245ebd80} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5291">
            <rect fill="white" height="4.6" width="4.6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavDashboard2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[2.044px] shrink-0 w-full" data-name="nav-Dashboard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <Grid2X2 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Frame225() {
  return (
    <div className="content-stretch flex flex-col gap-[2.044px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[2.811px] uppercase whitespace-nowrap">Main</p>
      <NavDashboard2 />
    </div>
  );
}

function ShoppingBag2() {
  return (
    <div className="relative shrink-0 size-[4.6px]" data-name="shopping-bag">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
        <g clipPath="url(#clip0_1_5421)" id="shopping-bag">
          <path d={svgPaths.pf66e5d0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5421">
            <rect fill="white" height="4.6" width="4.6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame227() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] content-stretch flex items-start px-[1.533px] py-[0.511px] relative rounded-[1.022px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[2.811px] text-white whitespace-nowrap">47</p>
    </div>
  );
}

function NavOrders2() {
  return (
    <div className="bg-[#ff8a00] relative rounded-[2.044px] shrink-0 w-full" data-name="nav-Orders">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <ShoppingBag2 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[3.578px] text-white">Orders</p>
          <Frame227 />
        </div>
      </div>
    </div>
  );
}

function Users4() {
  return (
    <div className="relative shrink-0 size-[4.6px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
        <g clipPath="url(#clip0_1_5326)" id="users">
          <path d={svgPaths.peb60d00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5326">
            <rect fill="white" height="4.6" width="4.6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavWooCustomers2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[2.044px] shrink-0 w-full" data-name="nav-Woo Customers">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <Users4 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Woo Customers</p>
        </div>
      </div>
    </div>
  );
}

function RefreshCcw2() {
  return (
    <div className="relative shrink-0 size-[4.6px]" data-name="refresh-ccw">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
        <g clipPath="url(#clip0_1_5255)" id="refresh-ccw">
          <path d={svgPaths.p38fe0bc0} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5255">
            <rect fill="white" height="4.6" width="4.6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavReorderCycle2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[2.044px] shrink-0 w-full" data-name="nav-Reorder Cycle">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <RefreshCcw2 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Reorder Cycle</p>
        </div>
      </div>
    </div>
  );
}

function Frame226() {
  return (
    <div className="content-stretch flex flex-col gap-[2.044px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[2.811px] uppercase whitespace-nowrap">CRM</p>
      <NavOrders2 />
      <NavWooCustomers2 />
      <NavReorderCycle2 />
    </div>
  );
}

function Calculator2() {
  return (
    <div className="relative shrink-0 size-[4.6px]" data-name="calculator">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
        <g clipPath="url(#clip0_1_5409)" id="calculator">
          <path d={svgPaths.pc0a42f2} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5409">
            <rect fill="white" height="4.6" width="4.6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavInternalCalculator2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[2.044px] shrink-0 w-full" data-name="nav-Internal Calculator">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <Calculator2 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Internal Calculator</p>
        </div>
      </div>
    </div>
  );
}

function Frame228() {
  return (
    <div className="content-stretch flex flex-col gap-[2.044px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[2.811px] uppercase whitespace-nowrap">Tools</p>
      <NavInternalCalculator2 />
    </div>
  );
}

function Users5() {
  return (
    <div className="relative shrink-0 size-[4.6px]" data-name="users">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
        <g clipPath="url(#clip0_1_5397)" id="users">
          <path d={svgPaths.p3f803800} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5397">
            <rect fill="white" height="4.6" width="4.6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavMembers2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[2.044px] shrink-0 w-full" data-name="nav-Members">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <Users5 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Team Members</p>
        </div>
      </div>
    </div>
  );
}

function ShieldCheck2() {
  return (
    <div className="relative shrink-0 size-[4.6px]" data-name="shield-check">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
        <g clipPath="url(#clip0_1_5391)" id="shield-check">
          <path d={svgPaths.p124b1840} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5391">
            <rect fill="white" height="4.6" width="4.6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavRoles2() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[2.044px] shrink-0 w-full" data-name="nav-Roles">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <ShieldCheck2 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Team Roles</p>
        </div>
      </div>
    </div>
  );
}

function Frame229() {
  return (
    <div className="content-stretch flex flex-col gap-[2.044px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[2.811px] uppercase whitespace-nowrap">Team</p>
      <NavMembers2 />
      <NavRoles2 />
    </div>
  );
}

function NavGroups2() {
  return (
    <div className="content-stretch flex flex-col gap-[6.133px] items-start relative shrink-0 w-full" data-name="nav-groups">
      <Frame225 />
      <Frame226 />
      <Frame228 />
      <Frame229 />
    </div>
  );
}

function Frame230() {
  return <div className="h-[25.556px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame231() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[0.511px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[3.322px] text-white">Adit Pratama</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[2.811px]">Super Administrator</p>
    </div>
  );
}

function UserProfile2() {
  return (
    <div className="relative rounded-[2.044px] shrink-0 w-full" data-name="user-profile">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center p-[3.067px] relative size-full">
          <div className="relative rounded-[2.044px] shrink-0 size-[8.178px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2.044px] size-full" src={imgRectangle1} />
          </div>
          <Frame231 />
        </div>
      </div>
    </div>
  );
}

function SidebarFooter2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="sidebar-footer">
      <Frame230 />
      <UserProfile2 />
    </div>
  );
}

function Sidebar2() {
  return (
    <div className="bg-[#18181b] relative self-stretch shrink-0 w-[65.422px]" data-name="sidebar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-r-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8.178px] items-start p-[4.089px] relative size-full">
        <Logo2 />
        <NavGroups2 />
        <SidebarFooter2 />
      </div>
    </div>
  );
}

function ChevronRight2() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g id="chevron-right">
          <path d={svgPaths.p2a85c700} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
      </svg>
    </div>
  );
}

function Breadcrumb2() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-center relative shrink-0" data-name="breadcrumb">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.578px] whitespace-nowrap">Business OS</p>
      <ChevronRight2 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.578px] text-white whitespace-nowrap">Orders</p>
    </div>
  );
}

function Search5() {
  return (
    <div className="relative shrink-0 size-[4.089px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.08889 4.08889">
        <g id="search">
          <path d={svgPaths.p3ddf7f80} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
      </svg>
    </div>
  );
}

function Search4() {
  return (
    <div className="bg-[#09090b] content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative rounded-[2.044px] shrink-0 w-[102.222px]" data-name="search">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <Search5 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[3.578px] whitespace-nowrap">Search everything...</p>
    </div>
  );
}

function Bell2() {
  return (
    <div className="relative shrink-0 size-[5.111px]" data-name="bell">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.11111 5.11111">
        <g id="bell">
          <path d={svgPaths.p13289e70} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g id="chevron-down">
          <path d={svgPaths.p23942fc0} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
      </svg>
    </div>
  );
}

function Frame232() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[3.322px] text-white whitespace-nowrap">Adit P.</p>
      <ChevronDown2 />
    </div>
  );
}

function TopbarActions2() {
  return (
    <div className="content-stretch flex gap-[4.089px] items-center relative shrink-0" data-name="topbar-actions">
      <Bell2 />
      <Frame232 />
    </div>
  );
}

function Topbar2() {
  return (
    <div className="bg-[#18181b] h-[14.311px] relative shrink-0 w-full" data-name="topbar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[6.133px] relative size-full">
          <Breadcrumb2 />
          <Search4 />
          <TopbarActions2 />
        </div>
      </div>
    </div>
  );
}

function TabToday() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[2.556px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-today">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.067px] whitespace-nowrap">Today</p>
    </div>
  );
}

function TabWtd() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[2.556px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-wtd">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.067px] whitespace-nowrap">WTD</p>
    </div>
  );
}

function TabMtdActive() {
  return (
    <div className="bg-[#ff8a00] content-stretch flex items-start px-[2.556px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-mtd-active">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.067px] text-white whitespace-nowrap">MTD</p>
    </div>
  );
}

function TabYtd() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[2.556px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-ytd">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.067px] whitespace-nowrap">YTD</p>
    </div>
  );
}

function GroupToDate() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-center relative shrink-0" data-name="group-to-date">
      <TabToday />
      <TabWtd />
      <TabMtdActive />
      <TabYtd />
    </div>
  );
}

function TabYesterday() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[2.556px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-yesterday">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.067px] whitespace-nowrap">Yesterday</p>
    </div>
  );
}

function TabLastWeek() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[2.556px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-last-week">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.067px] whitespace-nowrap">Last Week</p>
    </div>
  );
}

function TabLastMonth() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[2.556px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-last-month">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.067px] whitespace-nowrap">Last Month</p>
    </div>
  );
}

function TabLastYear() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[2.556px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-last-year">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.067px] whitespace-nowrap">Last Year</p>
    </div>
  );
}

function TabCustom() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex items-start px-[2.556px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-custom">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.067px] whitespace-nowrap">Custom</p>
    </div>
  );
}

function GroupLastPeriod() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-center relative shrink-0" data-name="group-last-period">
      <TabYesterday />
      <TabLastWeek />
      <TabLastMonth />
      <TabLastYear />
      <TabCustom />
    </div>
  );
}

function PeriodControls() {
  return (
    <div className="content-stretch flex gap-[4.089px] items-center relative shrink-0" data-name="period-controls">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[2.811px] uppercase whitespace-nowrap">Filter By Period</p>
      <GroupToDate />
      <GroupLastPeriod />
    </div>
  );
}

function FilterByPeriod() {
  return (
    <div className="bg-[#18181b] h-[10.222px] relative rounded-[2.044px] shrink-0 w-full" data-name="filter-by-period">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4.089px] relative size-full">
          <PeriodControls />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#71717a] text-[3.067px] text-right whitespace-pre-wrap">{`Month to Date (Jun 1 – Jun 25, 2025)  |  vs. Previous period (May 1 – May 25, 2025)`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame233() {
  return (
    <div className="bg-[#18181b] content-stretch flex gap-[2.044px] items-center px-[4.089px] py-[2.556px] relative rounded-[2.044px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#71717a] text-[3.067px] uppercase whitespace-nowrap">Orders</p>
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.578px] text-white whitespace-nowrap">47</p>
    </div>
  );
}

function Frame234() {
  return (
    <div className="bg-[#18181b] content-stretch flex gap-[2.044px] items-center px-[4.089px] py-[2.556px] relative rounded-[2.044px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#71717a] text-[3.067px] uppercase whitespace-nowrap">Revenue</p>
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.578px] text-white whitespace-nowrap">Rp 12.4M</p>
    </div>
  );
}

function Frame235() {
  return (
    <div className="bg-[#18181b] content-stretch flex gap-[2.044px] items-center px-[4.089px] py-[2.556px] relative rounded-[2.044px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#71717a] text-[3.067px] uppercase whitespace-nowrap">MTD</p>
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.578px] text-white whitespace-nowrap">Rp 287M</p>
    </div>
  );
}

function Frame236() {
  return (
    <div className="bg-[#18181b] content-stretch flex gap-[2.044px] items-center px-[4.089px] py-[2.556px] relative rounded-[2.044px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#71717a] text-[3.067px] uppercase whitespace-nowrap">AOV</p>
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.578px] text-white whitespace-nowrap">Rp 264K</p>
    </div>
  );
}

function Frame237() {
  return (
    <div className="bg-[#18181b] content-stretch flex gap-[2.044px] items-center px-[4.089px] py-[2.556px] relative rounded-[2.044px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#71717a] text-[3.067px] uppercase whitespace-nowrap">Internal</p>
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.578px] text-white whitespace-nowrap">3</p>
    </div>
  );
}

function HeaderStats() {
  return (
    <div className="content-stretch flex gap-[3.067px] items-start relative shrink-0 w-full" data-name="header-stats">
      <Frame233 />
      <Frame234 />
      <Frame235 />
      <Frame236 />
      <Frame237 />
    </div>
  );
}

function Search6() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="search">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5350)" id="search">
          <path d={svgPaths.p169fa200} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5350">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame240() {
  return (
    <div className="bg-[#18181b] content-stretch flex gap-[2.556px] items-center px-[3.067px] py-[2.044px] relative rounded-[2.044px] shrink-0 w-[61.333px]" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <Search6 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[3.322px] whitespace-nowrap">Search orders...</p>
    </div>
  );
}

function Funnel() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="funnel">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5415)" id="funnel">
          <path d={svgPaths.p315f0440} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5415">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame241() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-center px-[3.067px] py-[2.044px] relative rounded-[2.044px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <Funnel />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[3.322px] text-white whitespace-nowrap">Filters</p>
    </div>
  );
}

function XCircle() {
  return (
    <div className="relative shrink-0 size-[3.067px]" data-name="x-circle">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.06667 3.06667">
        <g clipPath="url(#clip0_1_5403)" id="x-circle">
          <path d={svgPaths.p12290200} id="Vector" stroke="var(--stroke-0, #FF8A00)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5403">
            <rect fill="white" height="3.06667" width="3.06667" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame242() {
  return (
    <div className="bg-[rgba(255,138,0,0.1)] content-stretch flex gap-[2.044px] items-center px-[2.556px] py-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#ff8a00] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff8a00] text-[3.067px] whitespace-nowrap">Status: Paid</p>
      <XCircle />
    </div>
  );
}

function Frame239() {
  return (
    <div className="content-stretch flex gap-[3.067px] items-center relative shrink-0" data-name="Frame">
      <Frame240 />
      <Frame241 />
      <Frame242 />
    </div>
  );
}

function Upload() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="upload">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5190)" id="upload">
          <path d={svgPaths.p30b5c100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5190">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame243() {
  return (
    <div className="bg-[#27272a] content-stretch flex gap-[2.044px] items-center px-[4.089px] py-[2.044px] relative rounded-[2.044px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <Upload />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white whitespace-nowrap">Export</p>
    </div>
  );
}

function Frame238() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame239 />
      <Frame243 />
    </div>
  );
}

function Frame245() {
  return (
    <div className="bg-[#09090b] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex font-['Geist:ExtraBold',sans-serif] font-extrabold gap-[3.067px] items-start leading-[normal] px-[4.089px] py-[3.067px] relative size-full text-[#71717a] text-[2.811px] uppercase">
        <p className="relative shrink-0 w-[20.444px]"># ID</p>
        <p className="flex-[1_0_0] min-w-px relative">Customer</p>
        <p className="relative shrink-0 w-[46px]">Contact Info</p>
        <p className="relative shrink-0 w-[30.667px]">Status</p>
        <p className="relative shrink-0 w-[20.444px]">Items</p>
        <p className="relative shrink-0 text-right w-[25.556px]">Total</p>
        <p className="relative shrink-0 text-right w-[30.667px]">Actions</p>
      </div>
    </div>
  );
}

function Frame247() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.578px] text-white whitespace-nowrap">Budi Santoso</p>
    </div>
  );
}

function Frame248() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[0.511px] items-start leading-[normal] relative shrink-0 w-[46px] whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#a1a1aa] text-[3.067px]">budi@email.com</p>
      <p className="relative shrink-0 text-[#71717a] text-[2.811px]">+62812 •••• ••••</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#22c55e] text-[2.811px] uppercase whitespace-nowrap">Paid</p>
    </div>
  );
}

function Frame249() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[30.667px]" data-name="Frame">
      <Badge />
    </div>
  );
}

function Eye() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="eye">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5338)" id="eye">
          <path d={svgPaths.p29bbb880} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5338">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame251() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Eye />
    </div>
  );
}

function Pencil() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5294)" id="pencil">
          <path d={svgPaths.p117f8800} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5294">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame252() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Pencil />
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="trash">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5205)" id="trash">
          <path d={svgPaths.p7dbb600} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeOpacity="0.5" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5205">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame253() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Trash />
    </div>
  );
}

function Frame250() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start justify-end relative shrink-0 w-[30.667px]" data-name="Frame">
      <Frame251 />
      <Frame252 />
      <Frame253 />
    </div>
  );
}

function Frame246() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[20.444px]">ORD-1042</p>
          <Frame247 />
          <Frame248 />
          <Frame249 />
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[20.444px]">3 items</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.578px] text-right text-white w-[25.556px]">Rp 285K</p>
          <Frame250 />
        </div>
      </div>
    </div>
  );
}

function Frame255() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.578px] text-white whitespace-nowrap">Sari Dewi</p>
    </div>
  );
}

function Frame256() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[0.511px] items-start leading-[normal] relative shrink-0 w-[46px] whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#a1a1aa] text-[3.067px]">sari@email.com</p>
      <p className="relative shrink-0 text-[#71717a] text-[2.811px]">+62812 •••• ••••</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#22c55e] text-[2.811px] uppercase whitespace-nowrap">Paid</p>
    </div>
  );
}

function Frame257() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[30.667px]" data-name="Frame">
      <Badge1 />
    </div>
  );
}

function Eye1() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="eye">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5208)" id="eye">
          <path d={svgPaths.p4a19300} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5208">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame259() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Eye1 />
    </div>
  );
}

function Pencil1() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5480)" id="pencil">
          <path d={svgPaths.p189cda80} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5480">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame260() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Pencil1 />
    </div>
  );
}

function Trash1() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="trash">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5382)" id="trash">
          <path d={svgPaths.p29a7c100} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeOpacity="0.5" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5382">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame261() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Trash1 />
    </div>
  );
}

function Frame258() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start justify-end relative shrink-0 w-[30.667px]" data-name="Frame">
      <Frame259 />
      <Frame260 />
      <Frame261 />
    </div>
  );
}

function Frame254() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[20.444px]">ORD-1041</p>
          <Frame255 />
          <Frame256 />
          <Frame257 />
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[20.444px]">1 items</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.578px] text-right text-white w-[25.556px]">Rp 120K</p>
          <Frame258 />
        </div>
      </div>
    </div>
  );
}

function Frame263() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.578px] text-white whitespace-nowrap">Ahmad R.</p>
    </div>
  );
}

function Frame264() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[0.511px] items-start leading-[normal] relative shrink-0 w-[46px] whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#a1a1aa] text-[3.067px]">ahmad@email.com</p>
      <p className="relative shrink-0 text-[#71717a] text-[2.811px]">+62812 •••• ••••</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[rgba(245,158,11,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#f59e0b] text-[2.811px] uppercase whitespace-nowrap">Processing</p>
    </div>
  );
}

function Frame265() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[30.667px]" data-name="Frame">
      <Badge2 />
    </div>
  );
}

function Eye2() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="eye">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5373)" id="eye">
          <path d={svgPaths.p6d93900} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5373">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame267() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Eye2 />
    </div>
  );
}

function Pencil2() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5475)" id="pencil">
          <path d={svgPaths.p1be2b980} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5475">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame268() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Pencil2 />
    </div>
  );
}

function Trash2() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="trash">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5323)" id="trash">
          <path d={svgPaths.p1b1e1fc0} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeOpacity="0.5" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5323">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame269() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Trash2 />
    </div>
  );
}

function Frame266() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start justify-end relative shrink-0 w-[30.667px]" data-name="Frame">
      <Frame267 />
      <Frame268 />
      <Frame269 />
    </div>
  );
}

function Frame262() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[20.444px]">ORD-1040</p>
          <Frame263 />
          <Frame264 />
          <Frame265 />
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[20.444px]">2 items</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.578px] text-right text-white w-[25.556px]">Rp 450K</p>
          <Frame266 />
        </div>
      </div>
    </div>
  );
}

function Frame271() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.578px] text-white whitespace-nowrap">Indah Putri</p>
    </div>
  );
}

function Frame272() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[0.511px] items-start leading-[normal] relative shrink-0 w-[46px] whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#a1a1aa] text-[3.067px]">indah@email.com</p>
      <p className="relative shrink-0 text-[#71717a] text-[2.811px]">+62812 •••• ••••</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-[rgba(161,161,170,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[2.811px] uppercase whitespace-nowrap">Pending</p>
    </div>
  );
}

function Frame273() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[30.667px]" data-name="Frame">
      <Badge3 />
    </div>
  );
}

function Eye3() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="eye">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5338)" id="eye">
          <path d={svgPaths.p29bbb880} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5338">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame275() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Eye3 />
    </div>
  );
}

function Pencil3() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5294)" id="pencil">
          <path d={svgPaths.p117f8800} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5294">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame276() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Pencil3 />
    </div>
  );
}

function Trash3() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="trash">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5205)" id="trash">
          <path d={svgPaths.p7dbb600} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeOpacity="0.5" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5205">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame277() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Trash3 />
    </div>
  );
}

function Frame274() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start justify-end relative shrink-0 w-[30.667px]" data-name="Frame">
      <Frame275 />
      <Frame276 />
      <Frame277 />
    </div>
  );
}

function Frame270() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[20.444px]">ORD-1039</p>
          <Frame271 />
          <Frame272 />
          <Frame273 />
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[20.444px]">4 items</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.578px] text-right text-white w-[25.556px]">Rp 610K</p>
          <Frame274 />
        </div>
      </div>
    </div>
  );
}

function Frame279() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.578px] text-white whitespace-nowrap">Yusuf K.</p>
    </div>
  );
}

function Frame280() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[0.511px] items-start leading-[normal] relative shrink-0 w-[46px] whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#a1a1aa] text-[3.067px]">yusuf@email.com</p>
      <p className="relative shrink-0 text-[#71717a] text-[2.811px]">+62812 •••• ••••</p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-[rgba(239,68,68,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ef4444] text-[2.811px] uppercase whitespace-nowrap">Cancelled</p>
    </div>
  );
}

function Frame281() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[30.667px]" data-name="Frame">
      <Badge4 />
    </div>
  );
}

function Eye4() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="eye">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5365)" id="eye">
          <path d={svgPaths.p32b37b00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5365">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame283() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Eye4 />
    </div>
  );
}

function Pencil4() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5429)" id="pencil">
          <path d={svgPaths.p2a853300} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5429">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame284() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Pencil4 />
    </div>
  );
}

function Trash4() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="trash">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5332)" id="trash">
          <path d={svgPaths.p20141700} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeOpacity="0.5" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5332">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame285() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Trash4 />
    </div>
  );
}

function Frame282() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start justify-end relative shrink-0 w-[30.667px]" data-name="Frame">
      <Frame283 />
      <Frame284 />
      <Frame285 />
    </div>
  );
}

function Frame278() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[20.444px]">ORD-1038</p>
          <Frame279 />
          <Frame280 />
          <Frame281 />
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[20.444px]">1 items</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.578px] text-right text-white w-[25.556px]">Rp 85K</p>
          <Frame282 />
        </div>
      </div>
    </div>
  );
}

function Frame287() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.578px] text-white whitespace-nowrap">Dina M.</p>
    </div>
  );
}

function Frame288() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Geist:Regular',sans-serif] font-normal gap-[0.511px] items-start leading-[normal] relative shrink-0 w-[46px] whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#a1a1aa] text-[3.067px]">dina@email.com</p>
      <p className="relative shrink-0 text-[#71717a] text-[2.811px]">+62812 •••• ••••</p>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="badge">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#22c55e] text-[2.811px] uppercase whitespace-nowrap">Paid</p>
    </div>
  );
}

function Frame289() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[30.667px]" data-name="Frame">
      <Badge5 />
    </div>
  );
}

function Eye5() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="eye">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5317)" id="eye">
          <path d={svgPaths.p3771d280} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5317">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame291() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Eye5 />
    </div>
  );
}

function Pencil5() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5458)" id="pencil">
          <path d={svgPaths.p9d05900} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5458">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame292() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Pencil5 />
    </div>
  );
}

function Trash5() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="trash">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5314)" id="trash">
          <path d={svgPaths.p12de5a80} id="Vector" stroke="var(--stroke-0, #EF4444)" strokeLinecap="round" strokeOpacity="0.5" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5314">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame293() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <Trash5 />
    </div>
  );
}

function Frame290() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start justify-end relative shrink-0 w-[30.667px]" data-name="Frame">
      <Frame291 />
      <Frame292 />
      <Frame293 />
    </div>
  );
}

function Frame286() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[20.444px]">ORD-1037</p>
          <Frame287 />
          <Frame288 />
          <Frame289 />
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[20.444px]">2 items</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.578px] text-right text-white w-[25.556px]">Rp 190K</p>
          <Frame290 />
        </div>
      </div>
    </div>
  );
}

function Frame296() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start px-[3.067px] py-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white whitespace-nowrap">Previous</p>
    </div>
  );
}

function Frame297() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start px-[3.067px] py-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white whitespace-nowrap">Next</p>
    </div>
  );
}

function Frame295() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start relative shrink-0" data-name="Frame">
      <Frame296 />
      <Frame297 />
    </div>
  );
}

function Frame294() {
  return (
    <div className="bg-[#18181b] relative shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[4.089px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#71717a] text-[3.322px] whitespace-nowrap">
            <span className="leading-[normal]">{`Showing `}</span>
            <span className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] text-white">1–10</span>
            <span className="leading-[normal]">{` of 247 results`}</span>
          </p>
          <Frame295 />
        </div>
      </div>
    </div>
  );
}

function Frame244() {
  return (
    <div className="bg-[#18181b] relative rounded-[2.044px] shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame245 />
        <Frame246 />
        <Frame254 />
        <Frame262 />
        <Frame270 />
        <Frame278 />
        <Frame286 />
        <Frame294 />
      </div>
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
    </div>
  );
}

function Viewport2() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="viewport">
      <div className="content-stretch flex flex-col gap-[6.133px] items-start p-[6.133px] relative size-full">
        <FilterByPeriod />
        <HeaderStats />
        <Frame238 />
        <Frame244 />
      </div>
    </div>
  );
}

function MainArea2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="main-area">
      <Topbar2 />
      <Viewport2 />
    </div>
  );
}

function ChevronLeft2() {
  return (
    <div className="relative shrink-0 size-[4.089px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.08889 4.08889">
        <g id="chevron-left">
          <path d={svgPaths.p3e884380} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
      </svg>
    </div>
  );
}

function Frame298() {
  return <div className="flex-[1_0_0] min-h-px relative w-[25.556px]" data-name="Frame" />;
}

function Frame299() {
  return (
    <div className="flex h-[24px] items-center justify-center relative shrink-0 w-[4px]">
      <div className="-rotate-90 flex-none">
        <div className="content-stretch flex items-start relative" data-name="Frame">
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#71717a] text-[2.811px] uppercase whitespace-nowrap">Team Presence</p>
        </div>
      </div>
    </div>
  );
}

function TeamPresencePanel2() {
  return (
    <div className="bg-[#18181b] relative self-stretch shrink-0 w-[8.178px]" data-name="team-presence-panel">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-l-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[6.133px] relative size-full">
          <ChevronLeft2 />
          <Frame298 />
          <Frame299 />
        </div>
      </div>
    </div>
  );
}

function CrmOrders() {
  return (
    <div className="absolute bg-[#09090b] content-stretch flex h-[271.911px] items-start left-0 min-h-[271.9111328125px] top-0 w-[368px]" data-name="crm-orders">
      <Sidebar2 />
      <MainArea2 />
      <TeamPresencePanel2 />
    </div>
  );
}

function ScreenClip() {
  return (
    <div className="h-[280px] overflow-clip relative shrink-0 w-[368px]" data-name="screen-clip">
      <CrmOrders />
    </div>
  );
}

function Frame300() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px] whitespace-nowrap">CRM Orders</p>
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#9a9a93] text-[12px] w-[min-content]">CRM Orders — 47 MTD orders with live status badges (Paid, Processing, Pending, Cancelled) and WooCommerce sync.</p>
    </div>
  );
}

function Frame224() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[368px]" data-name="Frame">
      <ScreenClip />
      <Frame300 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="h-[12.778px] relative shrink-0 w-[44.722px]" data-name="logo">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo} />
    </div>
  );
}

function Frame303() {
  return (
    <div className="relative shrink-0 size-[4.6px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
        <g clipPath="url(#clip0_1_5303)" id="Frame">
          <path d={svgPaths.pe053f00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5303">
            <rect fill="white" height="4.6" width="4.6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavDashboard3() {
  return (
    <div className="relative rounded-[2.044px] shrink-0 w-full" data-name="nav-Dashboard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <Frame303 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Frame302() {
  return (
    <div className="content-stretch flex flex-col gap-[2.044px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[2.811px] uppercase whitespace-nowrap">Main</p>
      <NavDashboard3 />
    </div>
  );
}

function Frame305() {
  return (
    <div className="relative shrink-0 size-[4.6px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
        <g clipPath="url(#clip0_1_5184)" id="Frame">
          <path d={svgPaths.p1560e000} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5184">
            <rect fill="white" height="4.6" width="4.6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame306() {
  return (
    <div className="bg-[#27272a] content-stretch flex items-start px-[1.533px] py-[0.511px] relative rounded-[1.022px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[2.811px] whitespace-nowrap">47</p>
    </div>
  );
}

function NavOrders3() {
  return (
    <div className="relative rounded-[2.044px] shrink-0 w-full" data-name="nav-Orders">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <Frame305 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Orders</p>
          <Frame306 />
        </div>
      </div>
    </div>
  );
}

function Frame307() {
  return (
    <div className="relative shrink-0 size-[4.6px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
        <g clipPath="url(#clip0_1_5300)" id="Frame">
          <path d={svgPaths.p35094b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5300">
            <rect fill="white" height="4.6" width="4.6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavWooCustomers3() {
  return (
    <div className="bg-[#ff8a00] relative rounded-[2.044px] shrink-0 w-full" data-name="nav-Woo Customers">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <Frame307 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[3.578px] text-white">Woo Customers</p>
        </div>
      </div>
    </div>
  );
}

function Frame308() {
  return (
    <div className="relative shrink-0 size-[4.6px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
        <g clipPath="url(#clip0_1_5297)" id="Frame">
          <path d={svgPaths.p3b20dbc0} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5297">
            <rect fill="white" height="4.6" width="4.6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavReorderCycle3() {
  return (
    <div className="relative rounded-[2.044px] shrink-0 w-full" data-name="nav-Reorder Cycle">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <Frame308 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Reorder Cycle</p>
        </div>
      </div>
    </div>
  );
}

function Frame304() {
  return (
    <div className="content-stretch flex flex-col gap-[2.044px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[2.811px] uppercase whitespace-nowrap">CRM</p>
      <NavOrders3 />
      <NavWooCustomers3 />
      <NavReorderCycle3 />
    </div>
  );
}

function Frame310() {
  return (
    <div className="relative shrink-0 size-[4.6px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
        <g clipPath="url(#clip0_1_5418)" id="Frame">
          <path d={svgPaths.p39ac6b00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5418">
            <rect fill="white" height="4.6" width="4.6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavInternalCalculator3() {
  return (
    <div className="relative rounded-[2.044px] shrink-0 w-full" data-name="nav-Internal Calculator">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <Frame310 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Internal Calculator</p>
        </div>
      </div>
    </div>
  );
}

function Frame309() {
  return (
    <div className="content-stretch flex flex-col gap-[2.044px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[2.811px] uppercase whitespace-nowrap">Tools</p>
      <NavInternalCalculator3 />
    </div>
  );
}

function Frame312() {
  return (
    <div className="relative shrink-0 size-[4.6px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
        <g clipPath="url(#clip0_1_5438)" id="Frame">
          <path d={svgPaths.p45c700} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5438">
            <rect fill="white" height="4.6" width="4.6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavMembers3() {
  return (
    <div className="relative rounded-[2.044px] shrink-0 w-full" data-name="nav-Members">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <Frame312 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Team Members</p>
        </div>
      </div>
    </div>
  );
}

function Frame313() {
  return (
    <div className="relative shrink-0 size-[4.6px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
        <g clipPath="url(#clip0_1_5288)" id="Frame">
          <path d={svgPaths.p16a242f0} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
        <defs>
          <clipPath id="clip0_1_5288">
            <rect fill="white" height="4.6" width="4.6" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavRoles3() {
  return (
    <div className="relative rounded-[2.044px] shrink-0 w-full" data-name="nav-Roles">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <Frame313 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Team Roles</p>
        </div>
      </div>
    </div>
  );
}

function Frame311() {
  return (
    <div className="content-stretch flex flex-col gap-[2.044px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[2.811px] uppercase whitespace-nowrap">Team</p>
      <NavMembers3 />
      <NavRoles3 />
    </div>
  );
}

function NavGroups3() {
  return (
    <div className="content-stretch flex flex-col gap-[6.133px] items-start relative shrink-0 w-full" data-name="nav-groups">
      <Frame302 />
      <Frame304 />
      <Frame309 />
      <Frame311 />
    </div>
  );
}

function Frame314() {
  return <div className="h-[25.556px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame315() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[0.511px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[3.322px] text-white">Adit Pratama</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[2.811px]">Super Administrator</p>
    </div>
  );
}

function UserProfile3() {
  return (
    <div className="relative rounded-[2.044px] shrink-0 w-full" data-name="user-profile">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center p-[3.067px] relative size-full">
          <div className="relative rounded-[2.044px] shrink-0 size-[8.178px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2.044px] size-full" src={imgRectangle} />
          </div>
          <Frame315 />
        </div>
      </div>
    </div>
  );
}

function SidebarFooter3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="sidebar-footer">
      <Frame314 />
      <UserProfile3 />
    </div>
  );
}

function Sidebar3() {
  return (
    <div className="bg-[#18181b] relative self-stretch shrink-0 w-[65.422px]" data-name="sidebar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-r-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8.178px] items-start p-[4.089px] relative size-full">
        <Logo3 />
        <NavGroups3 />
        <SidebarFooter3 />
      </div>
    </div>
  );
}

function ChevronRight3() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5282)" id="chevron-right">
          <path d={svgPaths.p2162c980} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.298148" />
        </g>
        <defs>
          <clipPath id="clip0_1_5282">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Breadcrumb3() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-center relative shrink-0" data-name="breadcrumb">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.578px] whitespace-nowrap">Business OS</p>
      <ChevronRight3 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.578px] text-white whitespace-nowrap">Woo Customers</p>
    </div>
  );
}

function Search7() {
  return (
    <div className="bg-[#09090b] content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative rounded-[2.044px] shrink-0 w-[102.222px]" data-name="search">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <div className="relative shrink-0 size-[4.089px]" data-name="Vector">
        <div className="absolute inset-[0_11.11%_11.11%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.63454 3.63454">
            <path d={svgPaths.p12e18ff1} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[3.578px] whitespace-nowrap">Search everything...</p>
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5269)" id="chevron-down">
          <path d={svgPaths.p16ba2700} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.298148" />
        </g>
        <defs>
          <clipPath id="clip0_1_5269">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame317() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[3.322px] text-white whitespace-nowrap">Adit P.</p>
      <ChevronDown3 />
    </div>
  );
}

function TopbarActions3() {
  return (
    <div className="content-stretch flex gap-[4.089px] items-center relative shrink-0" data-name="topbar-actions">
      <div className="relative shrink-0 size-[5.111px]" data-name="Vector">
        <div className="absolute bottom-1/4 left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.11111 3.83335">
            <path d={svgPaths.p3fca3800} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.511111" />
          </svg>
        </div>
      </div>
      <Frame317 />
    </div>
  );
}

function Topbar3() {
  return (
    <div className="bg-[#18181b] h-[14.311px] relative shrink-0 w-full" data-name="topbar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[6.133px] relative size-full">
          <Breadcrumb3 />
          <Search7 />
          <TopbarActions3 />
        </div>
      </div>
    </div>
  );
}

function Frame318() {
  return (
    <div className="content-stretch flex flex-col gap-[1.022px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[7.156px] text-white">1,847</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[3.067px]">Lifetime</p>
    </div>
  );
}

function StatCard6() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[2.044px]" data-name="stat-card">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.067px] items-start leading-[normal] p-[5.111px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[3.322px] uppercase">Total Woo Customers</p>
        <Frame318 />
      </div>
    </div>
  );
}

function Frame319() {
  return (
    <div className="content-stretch flex flex-col gap-[1.022px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#f59e0b] text-[7.156px]">23</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[3.067px]">Churn Risk</p>
    </div>
  );
}

function StatCard7() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[2.044px]" data-name="stat-card">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.067px] items-start leading-[normal] p-[5.111px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[3.322px] uppercase">Needs Attention</p>
        <Frame319 />
      </div>
    </div>
  );
}

function Frame320() {
  return (
    <div className="content-stretch flex flex-col gap-[1.022px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#ff8a00] text-[7.156px]">312</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[3.067px]">Last 30 Days</p>
    </div>
  );
}

function StatCard8() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[2.044px]" data-name="stat-card">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.067px] items-start leading-[normal] p-[5.111px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[3.322px] uppercase">Repeat Buyers</p>
        <Frame320 />
      </div>
    </div>
  );
}

function Frame321() {
  return (
    <div className="content-stretch flex flex-col gap-[1.022px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[7.156px] text-white">Rp 1.24B</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[3.067px]">YTD</p>
    </div>
  );
}

function StatCard9() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[2.044px]" data-name="stat-card">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.067px] items-start leading-[normal] p-[5.111px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[3.322px] uppercase">Paid Revenue</p>
        <Frame321 />
      </div>
    </div>
  );
}

function MetricsRow() {
  return (
    <div className="content-stretch flex gap-[4.089px] items-start relative shrink-0 w-full" data-name="metrics-row">
      <StatCard6 />
      <StatCard7 />
      <StatCard8 />
      <StatCard9 />
    </div>
  );
}

function TabAll() {
  return (
    <div className="bg-[#ff8a00] content-stretch flex items-start px-[3.067px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-all">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.322px] text-white whitespace-nowrap">All</p>
    </div>
  );
}

function TabNeedsAttention() {
  return (
    <div className="content-stretch flex items-start px-[3.067px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-needs-attention">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] whitespace-nowrap">Needs Attention</p>
    </div>
  );
}

function TabVip() {
  return (
    <div className="content-stretch flex items-start px-[3.067px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-vip">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] whitespace-nowrap">VIP</p>
    </div>
  );
}

function TabInactive() {
  return (
    <div className="content-stretch flex items-start px-[3.067px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-inactive">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] whitespace-nowrap">Inactive</p>
    </div>
  );
}

function TabMissingPhone() {
  return (
    <div className="content-stretch flex items-start px-[3.067px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-missing-phone">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] whitespace-nowrap">Missing Phone</p>
    </div>
  );
}

function TabUnpaidOrders() {
  return (
    <div className="content-stretch flex items-start px-[3.067px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-unpaid-orders">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] whitespace-nowrap">Unpaid Orders</p>
    </div>
  );
}

function TabDesignIssues() {
  return (
    <div className="content-stretch flex items-start px-[3.067px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-design-issues">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] whitespace-nowrap">Design Issues</p>
    </div>
  );
}

function TabNewUsers() {
  return (
    <div className="content-stretch flex items-start px-[3.067px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-new-users">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] whitespace-nowrap">New Users</p>
    </div>
  );
}

function TabExistingUsers() {
  return (
    <div className="content-stretch flex items-start px-[3.067px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-existing-users">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] whitespace-nowrap">Existing Users</p>
    </div>
  );
}

function TabRegisteredWoo() {
  return (
    <div className="content-stretch flex items-start px-[3.067px] py-[1.533px] relative rounded-[2.044px] shrink-0" data-name="tab-registered-woo">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] whitespace-nowrap">Registered Woo</p>
    </div>
  );
}

function FilterTabs() {
  return (
    <div className="bg-[#18181b] relative rounded-[2.044px] shrink-0 w-full" data-name="filter-tabs">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[2.044px] items-start p-[1.022px] relative size-full">
          <TabAll />
          <TabNeedsAttention />
          <TabVip />
          <TabInactive />
          <TabMissingPhone />
          <TabUnpaidOrders />
          <TabDesignIssues />
          <TabNewUsers />
          <TabExistingUsers />
          <TabRegisteredWoo />
        </div>
      </div>
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
    </div>
  );
}

function ChevronDown4() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5266)" id="chevron-down">
          <path d={svgPaths.p295ab200} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.298148" />
        </g>
        <defs>
          <clipPath id="clip0_1_5266">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame323() {
  return (
    <div className="bg-[#18181b] content-stretch flex gap-[2.556px] items-start px-[3.067px] py-[2.044px] relative rounded-[2.044px] shrink-0 w-[61.333px]" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <ChevronDown4 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[3.322px] whitespace-nowrap">Search customers...</p>
    </div>
  );
}

function ChevronDown5() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5388)" id="chevron-down">
          <path d={svgPaths.pffa2ee0} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.298148" />
        </g>
        <defs>
          <clipPath id="clip0_1_5388">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame324() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start px-[3.067px] py-[2.044px] relative rounded-[2.044px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[3.322px] text-white whitespace-nowrap">Status</p>
      <ChevronDown5 />
    </div>
  );
}

function ChevronDown6() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5266)" id="chevron-down">
          <path d={svgPaths.p295ab200} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.298148" />
        </g>
        <defs>
          <clipPath id="clip0_1_5266">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame325() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start px-[3.067px] py-[2.044px] relative rounded-[2.044px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[3.322px] text-white whitespace-nowrap">Country</p>
      <ChevronDown6 />
    </div>
  );
}

function ChevronDown7() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5261)" id="chevron-down">
          <path d={svgPaths.p3715b280} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.298148" />
        </g>
        <defs>
          <clipPath id="clip0_1_5261">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame326() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start px-[3.067px] py-[2.044px] relative rounded-[2.044px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[3.322px] text-white whitespace-nowrap">Sort by</p>
      <ChevronDown7 />
    </div>
  );
}

function Frame322() {
  return (
    <div className="content-stretch flex gap-[3.067px] items-start relative shrink-0" data-name="Frame">
      <Frame323 />
      <Frame324 />
      <Frame325 />
      <Frame326 />
    </div>
  );
}

function ChevronDown8() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5175)" id="chevron-down">
          <path d={svgPaths.p3715b280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.298148" />
        </g>
        <defs>
          <clipPath id="clip0_1_5175">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame327() {
  return (
    <div className="bg-[#27272a] content-stretch flex gap-[2.044px] items-start px-[4.089px] py-[2.044px] relative rounded-[2.044px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <ChevronDown8 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white whitespace-nowrap">Export</p>
    </div>
  );
}

function Toolbar() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="toolbar">
      <Frame322 />
      <Frame327 />
    </div>
  );
}

function Filters() {
  return (
    <div className="content-stretch flex flex-col gap-[3.067px] items-start relative shrink-0 w-full" data-name="filters">
      <FilterTabs />
      <Toolbar />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#09090b] relative shrink-0 w-full" data-name="header">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex font-['Geist:ExtraBold',sans-serif] font-extrabold gap-[3.067px] items-start leading-[normal] px-[4.089px] py-[3.067px] relative size-full text-[#71717a] text-[2.811px] uppercase">
        <p className="relative shrink-0 w-[10.222px]">#</p>
        <p className="flex-[1_0_0] min-w-px relative">Customer Name</p>
        <p className="relative shrink-0 w-[46px]">Email</p>
        <p className="relative shrink-0 w-[30.667px]">Phone</p>
        <p className="relative shrink-0 w-[25.556px]">Orders</p>
        <p className="relative shrink-0 w-[30.667px]">Total Spent</p>
        <p className="relative shrink-0 w-[25.556px]">Last Order</p>
        <p className="relative shrink-0 w-[25.556px]">Status</p>
        <p className="relative shrink-0 text-right w-[30.667px]">Actions</p>
      </div>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border-[#22c55e] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#22c55e] text-[2.811px] uppercase whitespace-nowrap">Active</p>
    </div>
  );
}

function Frame329() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[25.556px]" data-name="Frame">
      <Badge6 />
    </div>
  );
}

function Frame331() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.p6aeac80} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame332() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.pbdca240} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame333() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.pac03b40} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame330() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start justify-end relative shrink-0 w-[30.667px]" data-name="Frame">
      <Frame331 />
      <Frame332 />
      <Frame333 />
    </div>
  );
}

function Frame328() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[3.322px] w-[10.222px]">1</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[3.578px] text-white">Budi Santoso</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[46px]">budi@email.com</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[30.667px]">+6281234</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[3.322px] text-white w-[25.556px]">8 orders</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[30.667px]">Rp 2.1M</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[25.556px]">Jun 24</p>
          <Frame329 />
          <Frame330 />
        </div>
      </div>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-[rgba(245,158,11,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border-[#f59e0b] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#f59e0b] text-[2.811px] uppercase whitespace-nowrap">Attention</p>
    </div>
  );
}

function Frame335() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[25.556px]" data-name="Frame">
      <Badge7 />
    </div>
  );
}

function Frame337() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.p3a26c900} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame338() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.p331bf700} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame339() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.p173da400} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame336() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start justify-end relative shrink-0 w-[30.667px]" data-name="Frame">
      <Frame337 />
      <Frame338 />
      <Frame339 />
    </div>
  );
}

function Frame334() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[3.322px] w-[10.222px]">2</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[3.578px] text-white">Sari Dewi</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[46px]">sari@gmail.com</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[30.667px]">+6285678</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[3.322px] text-white w-[25.556px]">3 orders</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[30.667px]">Rp 640K</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[25.556px]">Jun 20</p>
          <Frame335 />
          <Frame336 />
        </div>
      </div>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-[rgba(255,138,0,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border-[#ff8a00] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff8a00] text-[2.811px] uppercase whitespace-nowrap">Repeat Buyer</p>
    </div>
  );
}

function Frame341() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[25.556px]" data-name="Frame">
      <Badge8 />
    </div>
  );
}

function Frame343() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.p25add880} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame344() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.p340e0070} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame345() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.p1aaafc00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame342() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start justify-end relative shrink-0 w-[30.667px]" data-name="Frame">
      <Frame343 />
      <Frame344 />
      <Frame345 />
    </div>
  );
}

function Frame340() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[3.322px] w-[10.222px]">3</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[3.578px] text-white">Ahmad Ramli</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[46px]">ahmad@email.com</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[30.667px]">+6281111</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[3.322px] text-white w-[25.556px]">12 orders</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[30.667px]">Rp 3.8M</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[25.556px]">Jun 25</p>
          <Frame341 />
          <Frame342 />
        </div>
      </div>
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border-[#22c55e] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#22c55e] text-[2.811px] uppercase whitespace-nowrap">Active</p>
    </div>
  );
}

function Frame347() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[25.556px]" data-name="Frame">
      <Badge9 />
    </div>
  );
}

function Frame349() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.p53b6b00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame350() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.ped5b00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame351() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.p3645ea70} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame348() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start justify-end relative shrink-0 w-[30.667px]" data-name="Frame">
      <Frame349 />
      <Frame350 />
      <Frame351 />
    </div>
  );
}

function Frame346() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[3.322px] w-[10.222px]">4</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[3.578px] text-white">Indah Putri</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[46px]">indah@email.com</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[30.667px]">+6281233</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[3.322px] text-white w-[25.556px]">2 orders</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[30.667px]">Rp 180K</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[25.556px]">Jun 18</p>
          <Frame347 />
          <Frame348 />
        </div>
      </div>
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-[rgba(245,158,11,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border-[#f59e0b] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#f59e0b] text-[2.811px] uppercase whitespace-nowrap">Attention</p>
    </div>
  );
}

function Frame353() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[25.556px]" data-name="Frame">
      <Badge10 />
    </div>
  );
}

function Frame355() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.p2bcd3e00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame356() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.p769b8b0} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame357() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.pedc7a00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame354() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start justify-end relative shrink-0 w-[30.667px]" data-name="Frame">
      <Frame355 />
      <Frame356 />
      <Frame357 />
    </div>
  );
}

function Frame352() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[3.322px] w-[10.222px]">5</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[3.578px] text-white">Dina Mahendra</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[46px]">dina@email.com</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[30.667px]">+6281244</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[3.322px] text-white w-[25.556px]">1 order</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[30.667px]">Rp 85K</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[25.556px]">Jun 15</p>
          <Frame353 />
          <Frame354 />
        </div>
      </div>
    </div>
  );
}

function Badge11() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="badge">
      <div aria-hidden className="absolute border-[#22c55e] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#22c55e] text-[2.811px] uppercase whitespace-nowrap">Active</p>
    </div>
  );
}

function Frame359() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[25.556px]" data-name="Frame">
      <Badge11 />
    </div>
  );
}

function Frame361() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.p17204680} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame362() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.p24764e80} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame363() {
  return (
    <div className="relative shrink-0 size-[6.644px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.64444 6.64444">
        <g id="Frame">
          <rect fill="var(--fill-0, #09090B)" height="6.64444" rx="1.53333" width="6.64444" />
          <rect height="6.38889" rx="1.40556" stroke="var(--stroke-0, white)" strokeOpacity="0.0784314" strokeWidth="0.255556" width="6.38889" x="0.127778" y="0.127778" />
          <path d={svgPaths.p19101c00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.255556" />
        </g>
      </svg>
    </div>
  );
}

function Frame360() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start justify-end relative shrink-0 w-[30.667px]" data-name="Frame">
      <Frame361 />
      <Frame362 />
      <Frame363 />
    </div>
  );
}

function Frame358() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[3.322px] w-[10.222px]">6</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[3.578px] text-white">Rian Ardiansyah</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[46px]">rian@email.com</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[30.667px]">+6281255</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[3.322px] text-white w-[25.556px]">5 orders</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[30.667px]">Rp 1.1M</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[25.556px]">Jun 22</p>
          <Frame359 />
          <Frame360 />
        </div>
      </div>
    </div>
  );
}

function Frame366() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start px-[3.067px] py-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white whitespace-nowrap">Previous</p>
    </div>
  );
}

function Frame367() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start px-[3.067px] py-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[1.533px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white whitespace-nowrap">Next</p>
    </div>
  );
}

function Frame365() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start relative shrink-0" data-name="Frame">
      <Frame366 />
      <Frame367 />
    </div>
  );
}

function Frame364() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex items-start justify-between p-[4.089px] relative size-full">
        <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#71717a] text-[3.322px] whitespace-nowrap">
          <span className="leading-[normal]">{`Showing `}</span>
          <span className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] text-white">1-10</span>
          <span className="leading-[normal]">{` of 1,847 results`}</span>
        </p>
        <Frame365 />
      </div>
    </div>
  );
}

function TableContainer() {
  return (
    <div className="bg-[#18181b] relative rounded-[2.044px] shrink-0 w-full" data-name="table-container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header />
        <Frame328 />
        <Frame334 />
        <Frame340 />
        <Frame346 />
        <Frame352 />
        <Frame358 />
        <Frame364 />
      </div>
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
    </div>
  );
}

function Viewport3() {
  return (
    <div className="relative shrink-0 w-full" data-name="viewport">
      <div className="content-stretch flex flex-col gap-[6.133px] items-start p-[6.133px] relative size-full">
        <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[6.133px] text-white whitespace-nowrap">Woo Customers</p>
        <MetricsRow />
        <Filters />
        <TableContainer />
      </div>
    </div>
  );
}

function Frame316() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Frame">
      <Topbar3 />
      <Viewport3 />
    </div>
  );
}

function ChevronLeft3() {
  return (
    <div className="relative shrink-0 size-[4.089px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.08889 4.08889">
        <g id="chevron-left">
          <path d={svgPaths.p26bc3100} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.340741" />
        </g>
      </svg>
    </div>
  );
}

function Frame368() {
  return <div className="flex-[1_0_0] min-h-px relative w-[25.556px]" data-name="Frame" />;
}

function Frame369() {
  return (
    <div className="flex h-[24px] items-center justify-center relative shrink-0 w-[4px]">
      <div className="-rotate-90 flex-none">
        <div className="content-stretch flex items-start relative" data-name="Frame">
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#71717a] text-[2.811px] uppercase whitespace-nowrap">Team Presence</p>
        </div>
      </div>
    </div>
  );
}

function TeamPresencePanel3() {
  return (
    <div className="bg-[#18181b] relative self-stretch shrink-0 w-[8.178px]" data-name="team-presence-panel">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-l-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[6.133px] relative size-full">
          <ChevronLeft3 />
          <Frame368 />
          <Frame369 />
        </div>
      </div>
    </div>
  );
}

function WooCustomers() {
  return (
    <div className="absolute bg-[#09090b] content-stretch flex h-[261.689px] items-start left-0 min-h-[261.68890380859375px] top-0 w-[368px]" data-name="woo-customers">
      <Sidebar3 />
      <Frame316 />
      <TeamPresencePanel3 />
    </div>
  );
}

function ScreenClip1() {
  return (
    <div className="h-[280px] overflow-clip relative shrink-0 w-[368px]" data-name="screen-clip">
      <WooCustomers />
    </div>
  );
}

function Frame370() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px] whitespace-nowrap">Woo Customers</p>
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#9a9a93] text-[12px] w-[min-content]">Woo Customers — 1,847 accounts across segment tabs: Needs Attention, VIP, Inactive, Missing Phone, Repeat Buyers.</p>
    </div>
  );
}

function Frame301() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[368px]" data-name="Frame">
      <ScreenClip1 />
      <Frame370 />
    </div>
  );
}

function Logo4() {
  return (
    <div className="h-[12.778px] relative shrink-0 w-[44.722px]" data-name="logo">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo} />
    </div>
  );
}

function Frame374() {
  return (
    <div className="relative rounded-[2.044px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <div className="relative shrink-0 size-[4.6px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
              <path d={svgPaths.p36b3da00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.511111" />
            </svg>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Frame373() {
  return (
    <div className="content-stretch flex flex-col gap-[2.044px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[2.811px] uppercase whitespace-nowrap">Main</p>
      <Frame374 />
    </div>
  );
}

function Frame377() {
  return (
    <div className="bg-[#27272a] content-stretch flex items-start px-[1.533px] py-[0.511px] relative rounded-[1.022px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[2.811px] whitespace-nowrap">47</p>
    </div>
  );
}

function Frame376() {
  return (
    <div className="relative rounded-[2.044px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <div className="relative shrink-0 size-[4.6px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
              <path d={svgPaths.p3a593200} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.511111" />
            </svg>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Orders</p>
          <Frame377 />
        </div>
      </div>
    </div>
  );
}

function Frame378() {
  return (
    <div className="bg-[#ff8a00] relative rounded-[2.044px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <div className="relative shrink-0 size-[4.6px]" data-name="Vector">
            <div className="absolute inset-[0_45%_55.56%_15%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.84 2.04444">
                <path d={svgPaths.p312a6700} id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.511111" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[3.578px] text-white">Woo Customers</p>
        </div>
      </div>
    </div>
  );
}

function Frame379() {
  return (
    <div className="relative rounded-[2.044px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <div className="relative shrink-0 size-[4.6px]" data-name="Vector">
            <div className="absolute inset-[-5.56%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.11111 5.11111">
                <path d={svgPaths.p91f8f60} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.511111" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Reorder Cycle</p>
        </div>
      </div>
    </div>
  );
}

function Frame375() {
  return (
    <div className="content-stretch flex flex-col gap-[2.044px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[2.811px] uppercase whitespace-nowrap">CRM</p>
      <Frame376 />
      <Frame378 />
      <Frame379 />
    </div>
  );
}

function Frame381() {
  return (
    <div className="relative rounded-[2.044px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <div className="relative shrink-0 size-[4.6px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
              <path d={svgPaths.p2a08ea80} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.511111" />
            </svg>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Internal Calculator</p>
        </div>
      </div>
    </div>
  );
}

function Frame380() {
  return (
    <div className="content-stretch flex flex-col gap-[2.044px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[2.811px] uppercase whitespace-nowrap">Tools</p>
      <Frame381 />
    </div>
  );
}

function Frame383() {
  return (
    <div className="relative rounded-[2.044px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <div className="relative shrink-0 size-[4.6px]" data-name="Vector">
            <div className="absolute inset-[0_45%_55.56%_15%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.84 2.04444">
                <path d={svgPaths.p312a6700} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.511111" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Team Members</p>
        </div>
      </div>
    </div>
  );
}

function Frame384() {
  return (
    <div className="relative rounded-[2.044px] shrink-0 w-full" data-name="Frame">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative size-full">
          <div className="relative shrink-0 size-[4.6px]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.6 4.6">
              <path d={svgPaths.p196d8480} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.511111" />
            </svg>
          </div>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#a1a1aa] text-[3.578px]">Team Roles</p>
        </div>
      </div>
    </div>
  );
}

function Frame382() {
  return (
    <div className="content-stretch flex flex-col gap-[2.044px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[2.811px] uppercase whitespace-nowrap">Team</p>
      <Frame383 />
      <Frame384 />
    </div>
  );
}

function NavGroups4() {
  return (
    <div className="content-stretch flex flex-col gap-[6.133px] items-start relative shrink-0 w-full" data-name="nav-groups">
      <Frame373 />
      <Frame375 />
      <Frame380 />
      <Frame382 />
    </div>
  );
}

function Frame385() {
  return <div className="h-[25.556px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame386() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[0.511px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[3.322px] text-white">Adit Pratama</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[2.811px]">Super Administrator</p>
    </div>
  );
}

function UserProfile4() {
  return (
    <div className="relative rounded-[2.044px] shrink-0 w-full" data-name="user-profile">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center p-[3.067px] relative size-full">
          <div className="relative rounded-[2.044px] shrink-0 size-[8.178px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[2.044px] size-full" src={imgRectangle} />
          </div>
          <Frame386 />
        </div>
      </div>
    </div>
  );
}

function SidebarFooter4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="sidebar-footer">
      <Frame385 />
      <UserProfile4 />
    </div>
  );
}

function Sidebar4() {
  return (
    <div className="bg-[#18181b] h-full relative shrink-0 w-[65.422px]" data-name="sidebar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-r-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[8.178px] items-start p-[4.089px] relative size-full">
        <Logo4 />
        <NavGroups4 />
        <SidebarFooter4 />
      </div>
    </div>
  );
}

function ChevronRight4() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5329)" id="chevron-right">
          <path d={svgPaths.p21f50b40} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.298148" />
        </g>
        <defs>
          <clipPath id="clip0_1_5329">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame387() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-center relative shrink-0" data-name="Frame">
      <ChevronRight4 />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.578px] whitespace-nowrap">Woo Customers</p>
    </div>
  );
}

function ChevronRight5() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5252)" id="chevron-right">
          <path d={svgPaths.p1bd53b80} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.298148" />
        </g>
        <defs>
          <clipPath id="clip0_1_5252">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame388() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-center relative shrink-0" data-name="Frame">
      <ChevronRight5 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.578px] text-white whitespace-nowrap">Budi Santoso</p>
    </div>
  );
}

function Breadcrumb4() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-center relative shrink-0" data-name="breadcrumb">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.578px] whitespace-nowrap">Business OS</p>
      <Frame387 />
      <Frame388 />
    </div>
  );
}

function Search8() {
  return (
    <div className="bg-[#09090b] content-stretch flex gap-[3.067px] items-center px-[3.067px] py-[2.044px] relative rounded-[2.044px] shrink-0 w-[102.222px]" data-name="search">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <div className="relative shrink-0 size-[4.089px]" data-name="Vector">
        <div className="absolute inset-[0_11.11%_11.11%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.63454 3.63454">
            <path d={svgPaths.p12e18ff1} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.511111" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[3.578px] whitespace-nowrap">Search everything...</p>
    </div>
  );
}

function ChevronDown9() {
  return (
    <div className="relative shrink-0 size-[3.578px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.57778 3.57778">
        <g clipPath="url(#clip0_1_5159)" id="chevron-down">
          <path d={svgPaths.p14390200} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.298148" />
        </g>
        <defs>
          <clipPath id="clip0_1_5159">
            <rect fill="white" height="3.57778" width="3.57778" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame389() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[3.322px] text-white whitespace-nowrap">Adit P.</p>
      <ChevronDown9 />
    </div>
  );
}

function TopbarActions4() {
  return (
    <div className="content-stretch flex gap-[4.089px] items-center relative shrink-0" data-name="topbar-actions">
      <div className="relative shrink-0 size-[5.111px]" data-name="Vector">
        <div className="absolute bottom-1/4 left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.11111 3.83335">
            <path d={svgPaths.p3fca3800} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.511111" />
          </svg>
        </div>
      </div>
      <Frame389 />
    </div>
  );
}

function Topbar4() {
  return (
    <div className="bg-[#18181b] h-[14.311px] relative shrink-0 w-full" data-name="topbar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[6.133px] relative size-full">
          <Breadcrumb4 />
          <Search8 />
          <TopbarActions4 />
        </div>
      </div>
    </div>
  );
}

function ArrowLeft() {
  return (
    <div className="relative shrink-0 size-[5.111px]" data-name="arrow-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.11111 5.11111">
        <g id="arrow-left">
          <path d={svgPaths.p14232780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="0.511111" />
        </g>
      </svg>
    </div>
  );
}

function Frame392() {
  return (
    <div className="bg-[#27272a] content-stretch flex items-start p-[2.044px] relative rounded-[2.044px] shrink-0" data-name="Frame">
      <ArrowLeft />
    </div>
  );
}

function Frame394() {
  return (
    <div className="bg-[rgba(255,138,0,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#ff8a00] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff8a00] text-[2.811px] uppercase whitespace-nowrap">Repeat Buyer</p>
    </div>
  );
}

function Frame395() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#22c55e] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#22c55e] text-[2.811px] uppercase whitespace-nowrap">Active</p>
    </div>
  );
}

function Frame393() {
  return (
    <div className="content-stretch flex gap-[2.044px] items-start relative shrink-0" data-name="Frame">
      <Frame394 />
      <Frame395 />
    </div>
  );
}

function Frame391() {
  return (
    <div className="content-stretch flex gap-[4.089px] items-center relative shrink-0" data-name="Frame">
      <Frame392 />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[6.133px] text-white whitespace-nowrap">Budi Santoso</p>
      <Frame393 />
    </div>
  );
}

function Frame390() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame391 />
    </div>
  );
}

function Frame401() {
  return (
    <div className="bg-[#ff8a00] content-stretch flex items-center justify-center relative rounded-[8.178px] shrink-0 size-[16.356px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[6.133px] text-white whitespace-nowrap">BS</p>
    </div>
  );
}

function Frame402() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[1.022px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[4.6px] text-white">Budi Santoso</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a1a1aa] text-[3.322px]">budi@email.com</p>
    </div>
  );
}

function Frame400() {
  return (
    <div className="content-stretch flex gap-[4.089px] items-center relative shrink-0 w-full" data-name="Frame">
      <Frame401 />
      <Frame402 />
    </div>
  );
}

function Frame404() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="relative shrink-0 text-[#71717a]">Phone</p>
      <p className="relative shrink-0 text-[#a1a1aa]">+6281234567890</p>
    </div>
  );
}

function Frame405() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="relative shrink-0 text-[#71717a]">Joined</p>
      <p className="relative shrink-0 text-[#a1a1aa]">Jan 15, 2024</p>
    </div>
  );
}

function Frame406() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-[#71717a] w-full" data-name="Frame">
      <p className="relative shrink-0">WC ID</p>
      <p className="relative shrink-0">#1042</p>
    </div>
  );
}

function Frame403() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[3.067px] items-start leading-[normal] not-italic relative shrink-0 text-[3.322px] w-full whitespace-nowrap" data-name="Frame">
      <Frame404 />
      <Frame405 />
      <Frame406 />
    </div>
  );
}

function Frame407() {
  return (
    <div className="content-stretch flex items-start px-[5.111px] py-[2.556px] relative rounded-[2.044px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#71717a] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] whitespace-nowrap">Edit Customer</p>
    </div>
  );
}

function Frame399() {
  return (
    <div className="content-stretch flex flex-col gap-[4.089px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame400 />
      <Frame403 />
      <Frame407 />
    </div>
  );
}

function Frame398() {
  return (
    <div className="bg-[#18181b] relative rounded-[2.044px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <div className="content-stretch flex flex-col items-start p-[5.111px] relative size-full">
        <Frame399 />
      </div>
    </div>
  );
}

function Frame409() {
  return (
    <div className="content-stretch flex items-start pb-[3.067px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.578px] text-white uppercase whitespace-nowrap">Purchase Summary</p>
    </div>
  );
}

function Frame412() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[3.322px]">Total Orders</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#ff8a00] text-[4.6px]">8</p>
    </div>
  );
}

function Frame413() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[3.322px]">Total Spent</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[4.6px] text-white">Rp 2.1M</p>
    </div>
  );
}

function Frame414() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between relative shrink-0 text-[3.322px] w-full" data-name="Frame">
      <p className="relative shrink-0 text-[#71717a]">Avg Order Value</p>
      <p className="relative shrink-0 text-[#a1a1aa]">Rp 262K</p>
    </div>
  );
}

function Frame415() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between relative shrink-0 text-[3.322px] w-full" data-name="Frame">
      <p className="relative shrink-0 text-[#71717a]">Last Order</p>
      <p className="relative shrink-0 text-[#a1a1aa]">Jun 24, 2025</p>
    </div>
  );
}

function Frame416() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between relative shrink-0 text-[3.322px] w-full" data-name="Frame">
      <p className="relative shrink-0 text-[#71717a]">First Order</p>
      <p className="relative shrink-0 text-[#a1a1aa]">Jan 20, 2024</p>
    </div>
  );
}

function Frame411() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4.089px] items-start leading-[normal] not-italic relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <Frame412 />
      <Frame413 />
      <Frame414 />
      <Frame415 />
      <Frame416 />
    </div>
  );
}

function Frame410() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame411 />
    </div>
  );
}

function Frame408() {
  return (
    <div className="bg-[#18181b] relative rounded-[2.044px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <div className="content-stretch flex flex-col gap-[5.111px] items-start p-[5.111px] relative size-full">
        <Frame409 />
        <Frame410 />
      </div>
    </div>
  );
}

function Frame418() {
  return (
    <div className="content-stretch flex items-start pb-[3.067px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.578px] text-white uppercase whitespace-nowrap">Reorder Status</p>
    </div>
  );
}

function Frame422() {
  return (
    <div className="bg-[rgba(239,68,68,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#ef4444] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ef4444] text-[2.811px] uppercase whitespace-nowrap">High</p>
    </div>
  );
}

function Frame421() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#71717a] text-[3.322px] whitespace-nowrap">Priority</p>
      <Frame422 />
    </div>
  );
}

function Frame424() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#22c55e] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#22c55e] text-[2.811px] uppercase whitespace-nowrap">Active</p>
    </div>
  );
}

function Frame423() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#71717a] text-[3.322px] whitespace-nowrap">Status</p>
      <Frame424 />
    </div>
  );
}

function Frame425() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[normal] not-italic relative shrink-0 text-[3.322px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#71717a]">Cycle Days</p>
      <p className="relative shrink-0 text-[#a1a1aa]">30 days</p>
    </div>
  );
}

function Frame426() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-start justify-between leading-[normal] not-italic relative shrink-0 text-[3.322px] w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a]">Revenue Active</p>
      <p className="font-['Inter:Bold',sans-serif] font-bold relative shrink-0 text-[#22c55e]">Rp 2.1M</p>
    </div>
  );
}

function Frame427() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Inter:Regular',sans-serif] font-normal items-start justify-between leading-[normal] not-italic relative shrink-0 text-[3.322px] w-full whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#71717a]">PIC</p>
      <p className="relative shrink-0 text-[#a1a1aa]">Rina Sari</p>
    </div>
  );
}

function Frame420() {
  return (
    <div className="content-stretch flex flex-col gap-[3.067px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame421 />
      <Frame423 />
      <Frame425 />
      <Frame426 />
      <Frame427 />
    </div>
  );
}

function Frame419() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <Frame420 />
    </div>
  );
}

function Frame417() {
  return (
    <div className="bg-[#18181b] relative rounded-[2.044px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <div className="content-stretch flex flex-col gap-[5.111px] items-start p-[5.111px] relative size-full">
        <Frame418 />
        <Frame419 />
      </div>
    </div>
  );
}

function Frame397() {
  return (
    <div className="content-stretch flex flex-col gap-[6.133px] items-start relative shrink-0 w-[97.111px]" data-name="Frame">
      <Frame398 />
      <Frame408 />
      <Frame417 />
    </div>
  );
}

function Frame429() {
  return (
    <div className="bg-[#ff8a00] content-stretch flex items-start px-[4.089px] py-[1.533px] relative rounded-[1.533px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[3.578px] text-white whitespace-nowrap">Orders History</p>
    </div>
  );
}

function Frame430() {
  return (
    <div className="content-stretch flex items-start px-[4.089px] py-[1.533px] relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#a1a1aa] text-[3.578px] whitespace-nowrap">Notes</p>
    </div>
  );
}

function Frame431() {
  return (
    <div className="content-stretch flex items-start px-[4.089px] py-[1.533px] relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#a1a1aa] text-[3.578px] whitespace-nowrap">Activity</p>
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-[#18181b] content-stretch flex gap-[1.022px] items-start p-[1.022px] relative rounded-[2.044px] shrink-0" data-name="tabs">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
      <Frame429 />
      <Frame430 />
      <Frame431 />
    </div>
  );
}

function Header1() {
  return (
    <div className="bg-[#09090b] relative shrink-0 w-full" data-name="header">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex font-['Geist:ExtraBold',sans-serif] font-extrabold gap-[3.067px] items-start leading-[normal] px-[4.089px] py-[3.067px] relative size-full text-[#71717a] text-[2.811px] uppercase">
        <p className="relative shrink-0 w-[25.556px]">Order ID</p>
        <p className="relative shrink-0 w-[20.444px]">Date</p>
        <p className="relative shrink-0 w-[25.556px]">Items</p>
        <p className="relative shrink-0 w-[30.667px]">Total</p>
        <p className="flex-[1_0_0] min-w-px relative">Status</p>
        <p className="relative shrink-0 text-right w-[20.444px]">Actions</p>
      </div>
    </div>
  );
}

function Frame434() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#22c55e] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#22c55e] text-[2.811px] uppercase whitespace-nowrap">Paid</p>
    </div>
  );
}

function Frame433() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <Frame434 />
    </div>
  );
}

function Frame435() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[20.444px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff8a00] text-[3.322px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame432() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[25.556px]">ORD-1042</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[20.444px]">Jun 24</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[25.556px]">3 items</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[30.667px]">Rp 285K</p>
          <Frame433 />
          <Frame435 />
        </div>
      </div>
    </div>
  );
}

function Frame438() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#22c55e] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#22c55e] text-[2.811px] uppercase whitespace-nowrap">Paid</p>
    </div>
  );
}

function Frame437() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <Frame438 />
    </div>
  );
}

function Frame439() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[20.444px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff8a00] text-[3.322px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame436() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[25.556px]">ORD-0998</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[20.444px]">Jun 10</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[25.556px]">1 item</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[30.667px]">Rp 120K</p>
          <Frame437 />
          <Frame439 />
        </div>
      </div>
    </div>
  );
}

function Frame442() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#22c55e] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#22c55e] text-[2.811px] uppercase whitespace-nowrap">Paid</p>
    </div>
  );
}

function Frame441() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <Frame442 />
    </div>
  );
}

function Frame443() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[20.444px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff8a00] text-[3.322px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame440() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[25.556px]">ORD-0954</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[20.444px]">May 28</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[25.556px]">2 items</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[30.667px]">Rp 450K</p>
          <Frame441 />
          <Frame443 />
        </div>
      </div>
    </div>
  );
}

function Frame446() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#22c55e] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#22c55e] text-[2.811px] uppercase whitespace-nowrap">Paid</p>
    </div>
  );
}

function Frame445() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <Frame446 />
    </div>
  );
}

function Frame447() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[20.444px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff8a00] text-[3.322px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame444() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[25.556px]">ORD-0921</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[20.444px]">May 12</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[25.556px]">5 items</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[30.667px]">Rp 1.2M</p>
          <Frame445 />
          <Frame447 />
        </div>
      </div>
    </div>
  );
}

function Frame450() {
  return (
    <div className="bg-[#27272a] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[2.811px] uppercase whitespace-nowrap">Refunded</p>
    </div>
  );
}

function Frame449() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <Frame450 />
    </div>
  );
}

function Frame451() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[20.444px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff8a00] text-[3.322px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame448() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[25.556px]">ORD-0887</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[20.444px]">Apr 30</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[25.556px]">1 item</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[30.667px]">Rp 95K</p>
          <Frame449 />
          <Frame451 />
        </div>
      </div>
    </div>
  );
}

function Frame454() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#22c55e] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#22c55e] text-[2.811px] uppercase whitespace-nowrap">Paid</p>
    </div>
  );
}

function Frame453() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <Frame454 />
    </div>
  );
}

function Frame455() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[20.444px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff8a00] text-[3.322px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame452() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[25.556px]">ORD-0852</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[20.444px]">Apr 15</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[25.556px]">3 items</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[30.667px]">Rp 275K</p>
          <Frame453 />
          <Frame455 />
        </div>
      </div>
    </div>
  );
}

function Frame458() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#22c55e] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#22c55e] text-[2.811px] uppercase whitespace-nowrap">Paid</p>
    </div>
  );
}

function Frame457() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <Frame458 />
    </div>
  );
}

function Frame459() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[20.444px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff8a00] text-[3.322px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame456() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[25.556px]">ORD-0821</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[20.444px]">Mar 28</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[25.556px]">2 items</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[30.667px]">Rp 180K</p>
          <Frame457 />
          <Frame459 />
        </div>
      </div>
    </div>
  );
}

function Frame462() {
  return (
    <div className="bg-[rgba(34,197,94,0.1)] content-stretch flex items-start px-[2.044px] py-[0.511px] relative rounded-[25.3px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#22c55e] border-[0.256px] border-solid inset-0 pointer-events-none rounded-[25.3px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#22c55e] text-[2.811px] uppercase whitespace-nowrap">Paid</p>
    </div>
  );
}

function Frame461() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative" data-name="Frame">
      <Frame462 />
    </div>
  );
}

function Frame463() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0 w-[20.444px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff8a00] text-[3.322px] whitespace-nowrap">View</p>
    </div>
  );
}

function Frame460() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[3.067px] items-center px-[4.089px] py-[3.578px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[25.556px]">ORD-0790</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[20.444px]">Mar 10</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[3.322px] w-[25.556px]">1 item</p>
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[3.322px] text-white w-[30.667px]">Rp 110K</p>
          <Frame461 />
          <Frame463 />
        </div>
      </div>
    </div>
  );
}

function Frame464() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex items-start p-[4.089px] relative size-full">
        <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[3.322px] whitespace-nowrap">1–8 of 8 orders</p>
      </div>
    </div>
  );
}

function TableContainer1() {
  return (
    <div className="bg-[#18181b] relative rounded-[2.044px] shrink-0 w-full" data-name="table-container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Header1 />
        <Frame432 />
        <Frame436 />
        <Frame440 />
        <Frame444 />
        <Frame448 />
        <Frame452 />
        <Frame456 />
        <Frame460 />
        <Frame464 />
      </div>
      <div aria-hidden className="absolute border-[0.256px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.044px]" />
    </div>
  );
}

function Frame428() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4.089px] items-start min-w-px relative" data-name="Frame">
      <Tabs />
      <TableContainer1 />
    </div>
  );
}

function Frame396() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6.133px] items-start min-h-px relative w-full" data-name="Frame">
      <Frame397 />
      <Frame428 />
    </div>
  );
}

function Viewport4() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="viewport">
      <div className="content-stretch flex flex-col gap-[6.133px] items-start p-[6.133px] relative size-full">
        <Frame390 />
        <Frame396 />
      </div>
    </div>
  );
}

function MainArea3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative" data-name="main-area">
      <Topbar4 />
      <Viewport4 />
    </div>
  );
}

function ChevronLeft4() {
  return (
    <div className="relative shrink-0 size-[4.089px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.08889 4.08889">
        <g id="chevron-left">
          <path d={svgPaths.p362e2be0} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.340741" />
        </g>
      </svg>
    </div>
  );
}

function Frame465() {
  return <div className="flex-[1_0_0] min-h-px relative w-[25.556px]" data-name="Frame" />;
}

function Frame466() {
  return (
    <div className="flex h-[24px] items-center justify-center relative shrink-0 w-[4px]">
      <div className="-rotate-90 flex-none">
        <div className="content-stretch flex items-start relative" data-name="Frame">
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#71717a] text-[2.811px] uppercase whitespace-nowrap">Team Presence</p>
        </div>
      </div>
    </div>
  );
}

function TeamPresencePanel4() {
  return (
    <div className="bg-[#18181b] h-full relative shrink-0 w-[8.178px]" data-name="team-presence-panel">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-l-[0.256px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[6.133px] relative size-full">
          <ChevronLeft4 />
          <Frame465 />
          <Frame466 />
        </div>
      </div>
    </div>
  );
}

function Frame372() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-w-px relative self-stretch" data-name="Frame">
      <Sidebar4 />
      <MainArea3 />
      <TeamPresencePanel4 />
    </div>
  );
}

function CustomerDetail() {
  return (
    <div className="absolute bg-[#09090b] content-stretch flex h-[281.111px] items-start left-0 min-h-[281.1111145019531px] top-0 w-[368px]" data-name="customer-detail">
      <Frame372 />
    </div>
  );
}

function ScreenClip2() {
  return (
    <div className="h-[280px] overflow-clip relative shrink-0 w-[368px]" data-name="screen-clip">
      <CustomerDetail />
    </div>
  );
}

function Frame467() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[15px] whitespace-nowrap">Customer Detail</p>
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#9a9a93] text-[12px] w-[min-content]">Customer Detail — Full order history, reorder cycle status (Priority: HIGH), Rp 2.1M total spend for Budi Santoso.</p>
    </div>
  );
}

function Frame371() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[368px]" data-name="Frame">
      <ScreenClip2 />
      <Frame467 />
    </div>
  );
}

function Frame223() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1152px]" data-name="Frame">
      <Frame224 />
      <Frame301 />
      <Frame371 />
    </div>
  );
}

function Logo5() {
  return (
    <div className="h-[19.583px] relative shrink-0 w-[68.542px]" data-name="logo">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo} />
    </div>
  );
}

function Frame471() {
  return (
    <div className="relative shrink-0 size-[7.05px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05 7.05">
        <g id="Frame">
          <path d={svgPaths.p8a2b100} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
      </svg>
    </div>
  );
}

function NavDashboard4() {
  return (
    <div className="relative rounded-[3.133px] shrink-0 w-full" data-name="nav-Dashboard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[4.7px] py-[3.133px] relative size-full">
          <Frame471 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[5.483px]">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Frame470() {
  return (
    <div className="content-stretch flex flex-col gap-[3.133px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[4.308px] uppercase whitespace-nowrap">Main</p>
      <NavDashboard4 />
    </div>
  );
}

function Frame473() {
  return (
    <div className="relative shrink-0 size-[7.05px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05 7.05">
        <g id="Frame">
          <path d={svgPaths.p1f369500} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
      </svg>
    </div>
  );
}

function Frame474() {
  return (
    <div className="bg-[#27272a] content-stretch flex items-start px-[2.35px] py-[0.783px] relative rounded-[1.567px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[4.308px] whitespace-nowrap">47</p>
    </div>
  );
}

function NavOrders4() {
  return (
    <div className="relative rounded-[3.133px] shrink-0 w-full" data-name="nav-Orders">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[4.7px] py-[3.133px] relative size-full">
          <Frame473 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[5.483px]">Orders</p>
          <Frame474 />
        </div>
      </div>
    </div>
  );
}

function Frame475() {
  return (
    <div className="relative shrink-0 size-[7.05px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05 7.05">
        <g id="Frame">
          <path d={svgPaths.p9fdd6c0} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
      </svg>
    </div>
  );
}

function NavWooCustomers4() {
  return (
    <div className="relative rounded-[3.133px] shrink-0 w-full" data-name="nav-Woo Customers">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[4.7px] py-[3.133px] relative size-full">
          <Frame475 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[5.483px]">Woo Customers</p>
        </div>
      </div>
    </div>
  );
}

function Frame476() {
  return (
    <div className="relative shrink-0 size-[7.05px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05 7.05">
        <g id="Frame">
          <path d={svgPaths.p3e660800} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
      </svg>
    </div>
  );
}

function NavReorderCycle4() {
  return (
    <div className="relative rounded-[3.133px] shrink-0 w-full" data-name="nav-Reorder Cycle">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[4.7px] py-[3.133px] relative size-full">
          <Frame476 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[5.483px]">Reorder Cycle</p>
        </div>
      </div>
    </div>
  );
}

function Frame472() {
  return (
    <div className="content-stretch flex flex-col gap-[3.133px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[4.308px] uppercase whitespace-nowrap">CRM</p>
      <NavOrders4 />
      <NavWooCustomers4 />
      <NavReorderCycle4 />
    </div>
  );
}

function Frame478() {
  return (
    <div className="relative shrink-0 size-[7.05px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05 7.05">
        <g id="Frame">
          <path d={svgPaths.p8e2a780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
      </svg>
    </div>
  );
}

function NavInternalCalculator4() {
  return (
    <div className="bg-[#ff8a00] relative rounded-[3.133px] shrink-0 w-full" data-name="nav-Internal Calculator">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[4.7px] py-[3.133px] relative size-full">
          <Frame478 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[5.483px] text-white">Internal Calculator</p>
        </div>
      </div>
    </div>
  );
}

function Frame477() {
  return (
    <div className="content-stretch flex flex-col gap-[3.133px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[4.308px] uppercase whitespace-nowrap">Tools</p>
      <NavInternalCalculator4 />
    </div>
  );
}

function Frame480() {
  return (
    <div className="relative shrink-0 size-[7.05px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05 7.05">
        <g id="Frame">
          <path d={svgPaths.p36574d00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
      </svg>
    </div>
  );
}

function NavMembers4() {
  return (
    <div className="relative rounded-[3.133px] shrink-0 w-full" data-name="nav-Members">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[4.7px] py-[3.133px] relative size-full">
          <Frame480 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#a1a1aa] text-[5.483px]">Team Members</p>
        </div>
      </div>
    </div>
  );
}

function Frame481() {
  return (
    <div className="relative shrink-0 size-[7.05px]" data-name="Frame">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05 7.05">
        <g id="Frame">
          <path d={svgPaths.p2bb2d00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
      </svg>
    </div>
  );
}

function NavRoles4() {
  return (
    <div className="relative rounded-[3.133px] shrink-0 w-full" data-name="nav-Roles">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[4.7px] py-[3.133px] relative size-full">
          <Frame481 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#a1a1aa] text-[5.483px]">Team Roles</p>
        </div>
      </div>
    </div>
  );
}

function Frame479() {
  return (
    <div className="content-stretch flex flex-col gap-[3.133px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[4.308px] uppercase whitespace-nowrap">Team</p>
      <NavMembers4 />
      <NavRoles4 />
    </div>
  );
}

function NavGroups5() {
  return (
    <div className="content-stretch flex flex-col gap-[9.4px] items-start relative shrink-0 w-full" data-name="nav-groups">
      <Frame470 />
      <Frame472 />
      <Frame477 />
      <Frame479 />
    </div>
  );
}

function Frame482() {
  return <div className="h-[39.167px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame483() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[0.783px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[5.092px] text-white">Adit Pratama</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[4.308px]">Super Administrator</p>
    </div>
  );
}

function UserProfile5() {
  return (
    <div className="relative rounded-[3.133px] shrink-0 w-full" data-name="user-profile">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center p-[4.7px] relative size-full">
          <div className="relative rounded-[3.133px] shrink-0 size-[12.533px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[3.133px] size-full" src={imgRectangle} />
          </div>
          <Frame483 />
        </div>
      </div>
    </div>
  );
}

function SidebarFooter5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="sidebar-footer">
      <Frame482 />
      <UserProfile5 />
    </div>
  );
}

function Sidebar5() {
  return (
    <div className="bg-[#18181b] relative self-stretch shrink-0 w-[100.267px]" data-name="sidebar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-r-[0.392px] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12.533px] items-start p-[6.267px] relative size-full">
        <Logo5 />
        <NavGroups5 />
        <SidebarFooter5 />
      </div>
    </div>
  );
}

function ChevronRight6() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g id="chevron-right">
          <path d={svgPaths.p1ea4bb00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.456944" />
        </g>
      </svg>
    </div>
  );
}

function Breadcrumb5() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0" data-name="breadcrumb">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.483px] whitespace-nowrap">Business OS</p>
      <ChevronRight6 />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.483px] text-white whitespace-nowrap">Internal Calculator</p>
    </div>
  );
}

function Search9() {
  return (
    <div className="bg-[#09090b] content-stretch flex gap-[4.7px] items-center px-[4.7px] py-[3.133px] relative rounded-[3.133px] shrink-0 w-[156.667px]" data-name="search">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="relative shrink-0 size-[6.267px]" data-name="Vector">
        <div className="absolute inset-[0_11.11%_11.11%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.57032 5.57032">
            <path d={svgPaths.p15defc00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[5.483px] whitespace-nowrap">Search everything...</p>
    </div>
  );
}

function ChevronDown10() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g id="chevron-down">
          <path d={svgPaths.p8f20dc0} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.456944" />
        </g>
      </svg>
    </div>
  );
}

function Frame485() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Adit P.</p>
      <ChevronDown10 />
    </div>
  );
}

function TopbarActions5() {
  return (
    <div className="content-stretch flex gap-[6.267px] items-center relative shrink-0" data-name="topbar-actions">
      <div className="relative shrink-0 size-[7.833px]" data-name="Vector">
        <div className="absolute bottom-1/4 left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.83333 5.87503">
            <path d={svgPaths.p290a8d00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
          </svg>
        </div>
      </div>
      <Frame485 />
    </div>
  );
}

function Topbar5() {
  return (
    <div className="bg-[#18181b] h-[21.933px] relative shrink-0 w-full" data-name="topbar">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-b-[0.392px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[9.4px] relative size-full">
          <Breadcrumb5 />
          <Search9 />
          <TopbarActions5 />
        </div>
      </div>
    </div>
  );
}

function Frame486() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[1.567px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[9.4px] text-white">Internal Calculator</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#a1a1aa] text-[5.483px]">Quote pricing with storefront parity, sales context, and approval-ready totals</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="title">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[5.483px] text-white whitespace-nowrap">Customer</p>
    </div>
  );
}

function ProdUiTabWoo() {
  return (
    <div className="bg-[#ff8c05] content-stretch flex flex-[1_0_0] h-[10.183px] items-center justify-center min-w-px relative rounded-[1.567px]" data-name="prod-ui-tab-woo">
      <div aria-hidden className="absolute border-[#ff8c05] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[1.567px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[4.112px] text-white whitespace-nowrap">Woo customer</p>
    </div>
  );
}

function ProdUiTabNew() {
  return (
    <div className="bg-[#131316] content-stretch flex flex-[1_0_0] h-[10.183px] items-center justify-center min-w-px relative rounded-[1.567px]" data-name="prod-ui-tab-new">
      <div aria-hidden className="absolute border-[#131316] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[1.567px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#b0b8cc] text-[4.112px] whitespace-nowrap">New customer</p>
    </div>
  );
}

function ProdUiCustomerModeTabs() {
  return (
    <div className="bg-[#29292e] h-[13.317px] relative rounded-[3.133px] shrink-0 w-full" data-name="prod-ui-customer-mode-tabs">
      <div aria-hidden className="absolute border-[#3b3b45] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[1.567px] items-center px-[1.567px] relative size-full">
          <ProdUiTabWoo />
          <ProdUiTabNew />
        </div>
      </div>
    </div>
  );
}

function Frame491() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Account</p>
    </div>
  );
}

function ChevronDown11() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g id="chevron-down">
          <path d={svgPaths.p3db6c100} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.456944" />
        </g>
      </svg>
    </div>
  );
}

function Frame492() {
  return (
    <div className="bg-[#27272a] relative rounded-[3.133px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center p-[4.7px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#71717a] text-[5.483px]">Select or type customer account</p>
          <ChevronDown11 />
        </div>
      </div>
    </div>
  );
}

function Frame490() {
  return (
    <div className="content-stretch flex flex-col gap-[3.133px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame491 />
      <Frame492 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="title">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[5.483px] text-white whitespace-nowrap">Label specification</p>
    </div>
  );
}

function Frame494() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Shape</p>
    </div>
  );
}

function ChevronDown12() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g id="chevron-down">
          <path d={svgPaths.p1a5b3d60} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.456944" />
        </g>
      </svg>
    </div>
  );
}

function Frame495() {
  return (
    <div className="bg-[#27272a] relative rounded-[3.133px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center p-[4.7px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[5.483px] text-white">Rectangle</p>
          <ChevronDown12 />
        </div>
      </div>
    </div>
  );
}

function Frame493() {
  return (
    <div className="content-stretch flex flex-col gap-[3.133px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame494 />
      <Frame495 />
    </div>
  );
}

function Frame498() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Lebar Desain</p>
    </div>
  );
}

function Frame500() {
  return (
    <div className="bg-[#18181b] content-stretch flex items-start px-[2.35px] py-[0.783px] relative rounded-[1.567px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[4.308px] whitespace-nowrap">mm</p>
    </div>
  );
}

function Frame499() {
  return (
    <div className="bg-[#27272a] relative rounded-[3.133px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center p-[4.7px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[5.483px] text-white">50</p>
          <Frame500 />
        </div>
      </div>
    </div>
  );
}

function Frame497() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.133px] items-start min-w-px relative" data-name="Frame">
      <Frame498 />
      <Frame499 />
    </div>
  );
}

function Frame502() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Tinggi Desain</p>
    </div>
  );
}

function Frame504() {
  return (
    <div className="bg-[#18181b] content-stretch flex items-start px-[2.35px] py-[0.783px] relative rounded-[1.567px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[4.308px] whitespace-nowrap">mm</p>
    </div>
  );
}

function Frame503() {
  return (
    <div className="bg-[#27272a] relative rounded-[3.133px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center p-[4.7px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[5.483px] text-white">80</p>
          <Frame504 />
        </div>
      </div>
    </div>
  );
}

function Frame501() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.133px] items-start min-w-px relative" data-name="Frame">
      <Frame502 />
      <Frame503 />
    </div>
  );
}

function Frame496() {
  return (
    <div className="content-stretch flex gap-[6.267px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame497 />
      <Frame501 />
    </div>
  );
}

function Frame507() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Material</p>
    </div>
  );
}

function ChevronDown13() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g id="chevron-down">
          <path d={svgPaths.p3add8100} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.456944" />
        </g>
      </svg>
    </div>
  );
}

function Frame508() {
  return (
    <div className="bg-[#27272a] relative rounded-[3.133px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center p-[4.7px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[5.483px] text-white">Paper Glossy</p>
          <ChevronDown13 />
        </div>
      </div>
    </div>
  );
}

function Frame506() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.133px] items-start min-w-px relative" data-name="Frame">
      <Frame507 />
      <Frame508 />
    </div>
  );
}

function Frame510() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Laminasi</p>
    </div>
  );
}

function ChevronDown14() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g id="chevron-down">
          <path d={svgPaths.p28e0bc00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.456944" />
        </g>
      </svg>
    </div>
  );
}

function Frame511() {
  return (
    <div className="bg-[#27272a] relative rounded-[3.133px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center p-[4.7px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[5.483px] text-white">None</p>
          <ChevronDown14 />
        </div>
      </div>
    </div>
  );
}

function Frame509() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.133px] items-start min-w-px relative" data-name="Frame">
      <Frame510 />
      <Frame511 />
    </div>
  );
}

function Frame505() {
  return (
    <div className="content-stretch flex gap-[7.833px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame506 />
      <Frame509 />
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#1f1406] content-stretch flex flex-col items-center justify-center pb-[1.175px] pt-[0.392px] px-[1.958px] relative rounded-[2.742px] shrink-0 size-[5.483px]" data-name="icon">
      <div aria-hidden className="absolute border-[#ff8c05] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[2.742px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold h-[3.917px] leading-[normal] relative shrink-0 text-[#ff8c05] text-[3.525px] text-center w-[1.567px]">i</p>
    </div>
  );
}

function Frame514() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Output</p>
      <Icon />
    </div>
  );
}

function ChevronDown15() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g id="chevron-down">
          <path d={svgPaths.p34b4af1} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.456944" />
        </g>
      </svg>
    </div>
  );
}

function Frame515() {
  return (
    <div className="bg-[#27272a] relative rounded-[3.133px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center p-[4.7px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[5.483px] text-white">Sheet</p>
          <ChevronDown15 />
        </div>
      </div>
    </div>
  );
}

function Frame513() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.133px] items-start min-w-px relative" data-name="Frame">
      <Frame514 />
      <Frame515 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#1f1406] content-stretch flex flex-col items-center justify-center pb-[1.175px] pt-[0.392px] px-[1.958px] relative rounded-[2.742px] shrink-0 size-[5.483px]" data-name="icon">
      <div aria-hidden className="absolute border-[#ff8c05] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[2.742px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold h-[3.917px] leading-[normal] relative shrink-0 text-[#ff8c05] text-[3.525px] text-center w-[1.567px]">i</p>
    </div>
  );
}

function Frame517() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Varian desain</p>
      <Icon1 />
    </div>
  );
}

function ChevronDown16() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g id="chevron-down">
          <path d={svgPaths.p35d30380} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.456944" />
        </g>
      </svg>
    </div>
  );
}

function Frame518() {
  return (
    <div className="bg-[#27272a] relative rounded-[3.133px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center p-[4.7px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[5.483px] text-white">1</p>
          <ChevronDown16 />
        </div>
      </div>
    </div>
  );
}

function Frame516() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[3.133px] items-start min-w-px relative" data-name="Frame">
      <Frame517 />
      <Frame518 />
    </div>
  );
}

function Frame512() {
  return (
    <div className="content-stretch flex gap-[6.267px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame513 />
      <Frame516 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#1f1406] content-stretch flex flex-col items-center justify-center pb-[1.175px] pt-[0.392px] px-[1.958px] relative rounded-[2.742px] shrink-0 size-[5.483px]" data-name="icon">
      <div aria-hidden className="absolute border-[#ff8c05] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[2.742px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold h-[3.917px] leading-[normal] relative shrink-0 text-[#ff8c05] text-[3.525px] text-center w-[1.567px]">i</p>
    </div>
  );
}

function Frame520() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Quantity</p>
      <Icon2 />
    </div>
  );
}

function Frame522() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[6.267px] whitespace-nowrap">−</p>
      <div className="bg-[rgba(255,255,255,0.08)] h-[6.267px] relative shrink-0 w-[0.392px]" data-name="Rectangle" />
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[6.267px] whitespace-nowrap">+</p>
    </div>
  );
}

function Frame521() {
  return (
    <div className="bg-[#27272a] relative rounded-[3.133px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center p-[4.7px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[5.483px] text-white">1000</p>
          <Frame522 />
        </div>
      </div>
    </div>
  );
}

function Frame519() {
  return (
    <div className="content-stretch flex flex-col gap-[3.133px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame520 />
      <Frame521 />
    </div>
  );
}

function Frame489() {
  return (
    <div className="content-stretch flex flex-col gap-[7.833px] items-start relative shrink-0 w-full" data-name="Frame">
      <Title />
      <ProdUiCustomerModeTabs />
      <Frame490 />
      <Title1 />
      <Frame493 />
      <Frame496 />
      <Frame505 />
      <Frame512 />
      <Frame519 />
    </div>
  );
}

function Frame524() {
  return (
    <div className="bg-[rgba(255,138,0,0.1)] content-stretch flex items-start px-[2.35px] py-[0.783px] relative rounded-[1.567px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#ff8a00] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[1.567px]" />
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#ff8a00] text-[3.525px] uppercase whitespace-nowrap">Beta</p>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex gap-[3.917px] items-center justify-center relative shrink-0" data-name="title">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[5.483px] text-white whitespace-nowrap">Sales intelligence</p>
      <Frame524 />
    </div>
  );
}

function Frame527() {
  return (
    <div className="bg-[#1f1406] content-stretch flex flex-col items-center justify-center pb-[1.175px] pt-[0.392px] px-[1.958px] relative rounded-[2.742px] shrink-0 size-[5.483px]">
      <div aria-hidden className="absolute border-[#ff8c05] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[2.742px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold h-[3.917px] leading-[normal] relative shrink-0 text-[#ff8c05] text-[3.525px] text-center w-[1.567px]">i</p>
    </div>
  );
}

function Frame526() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Markup</p>
      <Frame527 />
    </div>
  );
}

function Frame529() {
  return (
    <div className="bg-[#18181b] content-stretch flex items-start px-[2.35px] py-[0.783px] relative rounded-[1.567px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[4.308px] whitespace-nowrap">%</p>
    </div>
  );
}

function Frame528() {
  return (
    <div className="bg-[#27272a] relative rounded-[3.133px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center p-[4.7px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[5.483px] text-white">45</p>
          <Frame529 />
        </div>
      </div>
    </div>
  );
}

function Frame525() {
  return (
    <div className="content-stretch flex flex-col gap-[3.133px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame526 />
      <Frame528 />
    </div>
  );
}

function Frame531() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Competitor price / pcs</p>
    </div>
  );
}

function Frame532() {
  return (
    <div className="bg-[#27272a] relative rounded-[3.133px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[4.7px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[#71717a] text-[5.483px]">Rp 0</p>
        </div>
      </div>
    </div>
  );
}

function Frame530() {
  return (
    <div className="content-stretch flex flex-col gap-[3.133px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame531 />
      <Frame532 />
    </div>
  );
}

function Frame534() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Target sales price / pcs</p>
    </div>
  );
}

function Frame535() {
  return (
    <div className="bg-[#27272a] relative rounded-[3.133px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[4.7px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Regular',sans-serif] font-normal leading-[normal] min-w-px relative text-[5.483px] text-white">Rp 270</p>
        </div>
      </div>
    </div>
  );
}

function Frame533() {
  return (
    <div className="content-stretch flex flex-col gap-[3.133px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame534 />
      <Frame535 />
    </div>
  );
}

function Frame538() {
  return (
    <div className="bg-[#27272a] content-stretch flex gap-[3.133px] items-center px-[4.7px] py-[3.133px] relative rounded-[3.133px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="relative shrink-0 size-[4.7px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.7 4.7">
          <circle cx="2.35" cy="2.35" id="Ellipse" r="1.95833" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.783333" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] whitespace-nowrap">Normal</p>
    </div>
  );
}

function Frame539() {
  return (
    <div className="bg-[rgba(255,138,0,0.1)] content-stretch flex gap-[3.133px] items-center px-[4.7px] py-[3.133px] relative rounded-[3.133px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#ff8a00] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="relative shrink-0 size-[4.7px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.7 4.7">
          <circle cx="2.35" cy="2.35" fill="var(--fill-0, #FF8A00)" id="Ellipse" r="1.95833" stroke="var(--stroke-0, #FF8A00)" strokeWidth="0.783333" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff8a00] text-[5.092px] whitespace-nowrap">Repeat order</p>
    </div>
  );
}

function Frame540() {
  return (
    <div className="bg-[#27272a] content-stretch flex gap-[3.133px] items-center px-[4.7px] py-[3.133px] relative rounded-[3.133px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="relative shrink-0 size-[4.7px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.7 4.7">
          <circle cx="2.35" cy="2.35" id="Ellipse" r="1.95833" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.783333" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] whitespace-nowrap">Strategic</p>
    </div>
  );
}

function Frame541() {
  return (
    <div className="bg-[#27272a] content-stretch flex gap-[3.133px] items-center px-[4.7px] py-[3.133px] relative rounded-[3.133px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="relative shrink-0 size-[4.7px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.7 4.7">
          <circle cx="2.35" cy="2.35" id="Ellipse" r="1.95833" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.783333" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] whitespace-nowrap">Must Win</p>
    </div>
  );
}

function Frame537() {
  return (
    <div className="content-stretch flex gap-[4.7px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame538 />
      <Frame539 />
      <Frame540 />
      <Frame541 />
    </div>
  );
}

function Frame536() {
  return (
    <div className="content-stretch flex flex-col gap-[3.133px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Deal type</p>
      <Frame537 />
    </div>
  );
}

function Frame523() {
  return (
    <div className="content-stretch flex flex-col gap-[7.833px] items-start relative shrink-0 w-full" data-name="Frame">
      <Title2 />
      <Frame525 />
      <Frame530 />
      <Frame533 />
      <Frame536 />
    </div>
  );
}

function Frame542() {
  return (
    <div className="relative rounded-[3.133px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#ff8a00] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[6.267px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#ff8a00] text-[5.483px] whitespace-nowrap">Calculate</p>
        </div>
      </div>
    </div>
  );
}

function Frame488() {
  return (
    <div className="bg-[#18181b] content-stretch flex flex-col gap-[12.533px] items-start p-[9.4px] relative rounded-[3.133px] shrink-0 w-[203.667px]" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <Frame489 />
      <Frame523 />
      <Frame542 />
    </div>
  );
}

function Frame546() {
  return (
    <div className="absolute bg-[#27272a] content-stretch flex flex-col gap-[1.567px] h-[25.067px] items-start left-[102.62px] p-[4.7px] rounded-[3.133px] top-0 w-[97.917px]" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#71717a] text-[4.308px] uppercase">COGS Total</p>
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[6.267px] text-white">Rp 185,000</p>
    </div>
  );
}

function Frame547() {
  return (
    <div className="absolute bg-[#27272a] content-stretch flex flex-col gap-[1.567px] h-[25.067px] items-start left-0 p-[4.7px] rounded-[3.133px] top-0 w-[97.917px]" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#71717a] text-[4.308px] uppercase">COGS/pcs</p>
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[6.267px] text-white">Rp 185</p>
    </div>
  );
}

function Frame548() {
  return (
    <div className="absolute bg-[#27272a] content-stretch flex flex-col gap-[1.567px] h-[25.067px] items-start left-0 p-[4.7px] rounded-[3.133px] top-[28.2px] w-[97.917px]" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#71717a] text-[4.308px] uppercase">Normal Sales Price/PCS</p>
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[6.267px] text-white">Rp 280/pcs</p>
    </div>
  );
}

function Frame549() {
  return (
    <div className="absolute bg-[#27272a] content-stretch flex flex-col gap-[1.567px] h-[25.067px] items-start left-[102.62px] p-[4.7px] rounded-[3.133px] top-[28.2px] w-[97.917px]" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#71717a] text-[4.308px] uppercase">Volume Price/PCS</p>
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[6.267px] text-white">Rp 250/pcs</p>
    </div>
  );
}

function Frame550() {
  return (
    <div className="absolute bg-[#27272a] content-stretch flex flex-col gap-[1.567px] h-[25.067px] items-start left-0 p-[4.7px] rounded-[3.133px] top-[56.4px] w-[97.917px]" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#71717a] text-[4.308px] uppercase">Competitor</p>
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[6.267px] text-white">Rp 300/pcs</p>
    </div>
  );
}

function Frame551() {
  return (
    <div className="absolute bg-[#27272a] content-stretch flex flex-col gap-[1.567px] h-[25.067px] items-start left-[102.62px] p-[4.7px] rounded-[3.133px] top-[56.4px] w-[97.917px]" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#71717a] text-[4.308px] uppercase">Target Price</p>
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[6.267px] text-white">Rp 270/pcs</p>
    </div>
  );
}

function Frame552() {
  return (
    <div className="absolute bg-[#27272a] content-stretch flex flex-col gap-[1.567px] h-[25.067px] items-start left-0 p-[4.7px] rounded-[3.133px] top-[84.6px] w-[97.917px]" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#71717a] text-[4.308px] uppercase">Final Price</p>
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#ff8a00] text-[6.267px]">Rp 265/pcs</p>
    </div>
  );
}

function Frame553() {
  return (
    <div className="absolute bg-[#27272a] content-stretch flex flex-col gap-[1.567px] h-[25.067px] items-start left-[102.62px] p-[4.7px] rounded-[3.133px] top-[84.6px] w-[97.917px]" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#71717a] text-[4.308px] uppercase">Total Sales Price</p>
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#ff8a00] text-[6.267px]">Rp 265,000</p>
    </div>
  );
}

function Frame545() {
  return (
    <div className="[word-break:break-word] h-[109.667px] leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <Frame546 />
      <Frame547 />
      <Frame548 />
      <Frame549 />
      <Frame550 />
      <Frame551 />
      <Frame552 />
      <Frame553 />
    </div>
  );
}

function Frame555() {
  return (
    <div className="[word-break:break-word] content-stretch flex items-end justify-between leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[5.483px]">Margin %</p>
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#ff8a00] text-[12.533px]">42.6%</p>
    </div>
  );
}

function Frame556() {
  return (
    <div className="bg-[#27272a] content-stretch flex h-[3.133px] items-start overflow-clip relative rounded-[38.775px] shrink-0 w-full" data-name="Frame">
      <div className="bg-[#ff8a00] h-full relative rounded-[38.775px] shrink-0 w-[126.9px]" data-name="Rectangle" />
    </div>
  );
}

function Frame554() {
  return (
    <div className="content-stretch flex flex-col gap-[6.267px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame555 />
      <Frame556 />
    </div>
  );
}

function ProdAlignmentSaveQuoteButton() {
  return (
    <div className="bg-[#ff8c05] content-stretch flex flex-[1_0_0] h-[14.883px] items-center justify-center min-w-px relative rounded-[3.133px]" data-name="prod-alignment-save-quote-button">
      <div aria-hidden className="absolute border-[#ff8c05] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[4.7px] text-white whitespace-nowrap">Save Quote</p>
    </div>
  );
}

function ProdAlignmentSideActions() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex gap-[4.7px] h-[21.15px] items-start relative shrink-0 w-full" data-name="prod-alignment-side-actions">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <ProdAlignmentSaveQuoteButton />
    </div>
  );
}

function Frame544() {
  return (
    <div className="bg-[#18181b] relative rounded-[3.133px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="content-stretch flex flex-col gap-[9.4px] items-start p-[9.4px] relative size-full">
        <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[5.483px] text-white whitespace-nowrap">Pricing result</p>
        <Frame545 />
        <Frame554 />
        <ProdAlignmentSideActions />
      </div>
    </div>
  );
}

function Frame558() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[5.483px] text-white whitespace-nowrap">Sales Insight</p>
    </div>
  );
}

function Frame559() {
  return (
    <div className="bg-[#09090b] relative rounded-[3.133px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#ff8a00] border-b-[0.392px] border-l-[1.567px] border-r-[0.392px] border-solid border-t-[0.392px] inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center p-[6.267px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#a1a1aa] text-[0px] text-center whitespace-nowrap">
            <span className="leading-[1.5] text-[4.7px]">{`Based on competitor pricing, recommend `}</span>
            <span className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[1.5] text-[4.7px] text-white">Rp 270/pcs</span>
            <span className="leading-[1.5] text-[4.7px]">{` for 15% margin advantage.`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame557() {
  return (
    <div className="bg-[#18181b] relative rounded-[3.133px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="content-stretch flex flex-col gap-[6.267px] items-start p-[9.4px] relative size-full">
        <Frame558 />
        <Frame559 />
      </div>
    </div>
  );
}

function Frame543() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[9.4px] items-end min-w-px relative" data-name="Frame">
      <Frame544 />
      <Frame557 />
    </div>
  );
}

function Frame487() {
  return (
    <div className="content-stretch flex gap-[9.4px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame488 />
      <Frame543 />
    </div>
  );
}

function Viewport5() {
  return (
    <div className="relative shrink-0 w-full" data-name="viewport">
      <div className="content-stretch flex flex-col gap-[9.4px] items-start p-[9.4px] relative size-full">
        <Frame486 />
        <Frame487 />
      </div>
    </div>
  );
}

function Frame484() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Frame">
      <Topbar5 />
      <Viewport5 />
    </div>
  );
}

function ChevronLeft5() {
  return (
    <div className="relative shrink-0 size-[6.267px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.26667 6.26667">
        <g id="chevron-left">
          <path d={svgPaths.p9a117c0} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.522222" />
        </g>
      </svg>
    </div>
  );
}

function Frame560() {
  return <div className="flex-[1_0_0] min-h-px relative w-[39.167px]" data-name="Frame" />;
}

function Frame561() {
  return (
    <div className="flex h-[37px] items-center justify-center relative shrink-0 w-[6px]">
      <div className="-rotate-90 flex-none">
        <div className="content-stretch flex items-start relative" data-name="Frame">
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#71717a] text-[4.308px] uppercase whitespace-nowrap">Team Presence</p>
        </div>
      </div>
    </div>
  );
}

function TeamPresencePanel5() {
  return (
    <div className="bg-[#18181b] relative self-stretch shrink-0 w-[12.533px]" data-name="team-presence-panel">
      <div aria-hidden className="absolute border-[rgba(255,255,255,0.08)] border-l-[0.392px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[9.4px] relative size-full">
          <ChevronLeft5 />
          <Frame560 />
          <Frame561 />
        </div>
      </div>
    </div>
  );
}

function InternalCalculator() {
  return (
    <div className="absolute bg-[#09090b] content-stretch flex h-[526.75px] items-start left-0 min-h-[401.0666809082031px] top-0 w-[564px]" data-name="internal-calculator">
      <Sidebar5 />
      <Frame484 />
      <TeamPresencePanel5 />
    </div>
  );
}

function ScreenClip3() {
  return (
    <div className="h-[400px] overflow-clip relative shrink-0 w-[564px]" data-name="screen-clip">
      <InternalCalculator />
    </div>
  );
}

function Frame469() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[564px]" data-name="Frame">
      <ScreenClip3 />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#9a9a93] text-[12px] w-[min-content]">Internal Calculator — Label specs + live pricing breakdown. 42.6% margin. Sales Insight AI recommends competitive price.</p>
    </div>
  );
}

function Logo6() {
  return (
    <div className="h-[19.583px] relative shrink-0 w-[68.542px]" data-name="logo">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgLogo} />
    </div>
  );
}

function IconWrap() {
  return (
    <div className="relative shrink-0 size-[7.05px]" data-name="icon-wrap">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05 7.05">
        <g id="icon-wrap">
          <path d={svgPaths.p25792180} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
      </svg>
    </div>
  );
}

function NavDashboard5() {
  return (
    <div className="relative rounded-[3.133px] shrink-0 w-full" data-name="nav-Dashboard">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[4.7px] py-[3.133px] relative size-full">
          <IconWrap />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[5.483px]">Dashboard</p>
        </div>
      </div>
    </div>
  );
}

function Frame564() {
  return (
    <div className="content-stretch flex flex-col gap-[3.133px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[4.308px] uppercase whitespace-nowrap">Main</p>
      <NavDashboard5 />
    </div>
  );
}

function IconWrap1() {
  return (
    <div className="relative shrink-0 size-[7.05px]" data-name="icon-wrap">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05 7.05">
        <g id="icon-wrap">
          <path d={svgPaths.p4f08c00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
      </svg>
    </div>
  );
}

function Frame566() {
  return (
    <div className="bg-[#27272a] content-stretch flex items-start px-[2.35px] py-[0.783px] relative rounded-[1.567px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#a1a1aa] text-[4.308px] whitespace-nowrap">47</p>
    </div>
  );
}

function NavOrders5() {
  return (
    <div className="relative rounded-[3.133px] shrink-0 w-full" data-name="nav-Orders">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[4.7px] py-[3.133px] relative size-full">
          <IconWrap1 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[5.483px]">Orders</p>
          <Frame566 />
        </div>
      </div>
    </div>
  );
}

function IconWrap2() {
  return (
    <div className="relative shrink-0 size-[7.05px]" data-name="icon-wrap">
      <div className="absolute inset-[-5.56%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05 7.44175">
          <g id="icon-wrap">
            <path d={svgPaths.p35541880} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function NavWooCustomers5() {
  return (
    <div className="relative rounded-[3.133px] shrink-0 w-full" data-name="nav-Woo Customers">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[4.7px] py-[3.133px] relative size-full">
          <IconWrap2 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[5.483px]">Woo Customers</p>
        </div>
      </div>
    </div>
  );
}

function IconWrap3() {
  return (
    <div className="relative shrink-0 size-[7.05px]" data-name="icon-wrap">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05 7.05004">
        <g id="icon-wrap">
          <path d={svgPaths.p2f6ba00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
      </svg>
    </div>
  );
}

function NavReorderCycle5() {
  return (
    <div className="relative rounded-[3.133px] shrink-0 w-full" data-name="nav-Reorder Cycle">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[4.7px] py-[3.133px] relative size-full">
          <IconWrap3 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[5.483px]">Reorder Cycle</p>
        </div>
      </div>
    </div>
  );
}

function Frame565() {
  return (
    <div className="content-stretch flex flex-col gap-[3.133px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[4.308px] uppercase whitespace-nowrap">CRM</p>
      <NavOrders5 />
      <NavWooCustomers5 />
      <NavReorderCycle5 />
    </div>
  );
}

function IconWrap4() {
  return (
    <div className="relative shrink-0 size-[7.05px]" data-name="icon-wrap">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05 7.05">
        <g id="icon-wrap">
          <path d={svgPaths.p175e29c0} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
      </svg>
    </div>
  );
}

function NavInternalCalculator5() {
  return (
    <div className="relative rounded-[3.133px] shrink-0 w-full" data-name="nav-Internal Calculator">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[4.7px] py-[3.133px] relative size-full">
          <IconWrap4 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:Medium',sans-serif] font-medium leading-[normal] min-w-px relative text-[#a1a1aa] text-[5.483px]">Internal Calculator</p>
        </div>
      </div>
    </div>
  );
}

function Frame567() {
  return (
    <div className="content-stretch flex flex-col gap-[3.133px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[4.308px] uppercase whitespace-nowrap">Tools</p>
      <NavInternalCalculator5 />
    </div>
  );
}

function IconWrap5() {
  return (
    <div className="relative shrink-0 size-[7.05px]" data-name="icon-wrap">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05 7.05">
        <g id="icon-wrap">
          <path d={svgPaths.p27cec880} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
      </svg>
    </div>
  );
}

function NavMembers5() {
  return (
    <div className="bg-[#ff8a00] relative rounded-[3.133px] shrink-0 w-full" data-name="nav-Members">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[4.7px] py-[3.133px] relative size-full">
          <IconWrap5 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[5.483px] text-white">Team Members</p>
        </div>
      </div>
    </div>
  );
}

function IconWrap6() {
  return (
    <div className="relative shrink-0 size-[7.05px]" data-name="icon-wrap">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05 7.05">
        <g id="icon-wrap">
          <path d={svgPaths.p282af70} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
      </svg>
    </div>
  );
}

function NavRoles5() {
  return (
    <div className="relative rounded-[3.133px] shrink-0 w-full" data-name="nav-Roles">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[4.7px] py-[3.133px] relative size-full">
          <IconWrap6 />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[#a1a1aa] text-[5.483px]">Team Roles</p>
        </div>
      </div>
    </div>
  );
}

function Frame568() {
  return (
    <div className="content-stretch flex flex-col gap-[3.133px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:ExtraBold',sans-serif] font-extrabold leading-[normal] relative shrink-0 text-[#71717a] text-[4.308px] uppercase whitespace-nowrap">Team</p>
      <NavMembers5 />
      <NavRoles5 />
    </div>
  );
}

function NavGroups6() {
  return (
    <div className="content-stretch flex flex-col gap-[9.4px] items-start relative shrink-0 w-full" data-name="nav-groups">
      <Frame564 />
      <Frame565 />
      <Frame567 />
      <Frame568 />
    </div>
  );
}

function Frame569() {
  return <div className="h-[3.917px] relative shrink-0 w-full" data-name="Frame" />;
}

function Frame570() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[0.783px] items-start leading-[normal] min-w-px relative whitespace-nowrap" data-name="Frame">
      <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[5.092px] text-white">Adit Pratama</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[4.308px]">Super Administrator</p>
    </div>
  );
}

function UserProfile6() {
  return (
    <div className="relative rounded-[3.133px] shrink-0 w-full" data-name="user-profile">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center p-[4.7px] relative size-full">
          <div className="relative rounded-[3.133px] shrink-0 size-[12.533px]" data-name="Rectangle">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[3.133px] size-full" src={imgRectangle} />
          </div>
          <Frame570 />
        </div>
      </div>
    </div>
  );
}

function SidebarFooter6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px relative w-full" data-name="sidebar-footer">
      <Frame569 />
      <UserProfile6 />
    </div>
  );
}

function Sidebar6() {
  return (
    <div className="bg-[#18181b] relative self-stretch shrink-0 w-[100.267px]" data-name="sidebar">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[12.533px] items-start p-[6.267px] relative size-full">
        <Logo6 />
        <NavGroups6 />
        <SidebarFooter6 />
      </div>
    </div>
  );
}

function ChevronRight7() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g id="chevron-right">
          <path d={svgPaths.p2610e340} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.456944" />
        </g>
      </svg>
    </div>
  );
}

function Frame571() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.483px] text-white whitespace-nowrap">Team Members</p>
    </div>
  );
}

function Breadcrumb6() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0" data-name="breadcrumb">
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.483px] whitespace-nowrap">Business OS</p>
      <ChevronRight7 />
      <Frame571 />
    </div>
  );
}

function Search10() {
  return (
    <div className="bg-[#09090b] content-stretch flex gap-[4.7px] items-center px-[4.7px] py-[3.133px] relative rounded-[3.133px] shrink-0 w-[156.667px]" data-name="search">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="relative shrink-0 size-[6.267px]" data-name="Vector">
        <div className="absolute inset-[0_11.11%_11.11%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.57032 5.57032">
            <path d={svgPaths.p15defc00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.783333" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[5.483px] whitespace-nowrap">Search everything...</p>
    </div>
  );
}

function ChevronDown17() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g id="chevron-down">
          <path d={svgPaths.p21717b00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.456944" />
        </g>
      </svg>
    </div>
  );
}

function Frame572() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Adit P.</p>
      <ChevronDown17 />
    </div>
  );
}

function TopbarActions6() {
  return (
    <div className="content-stretch flex gap-[6.267px] items-center relative shrink-0" data-name="topbar-actions">
      <div className="relative shrink-0 size-[7.833px]" data-name="Vector">
        <div className="absolute bottom-1/4 left-0 right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.83333 5.87503">
            <path d={svgPaths.p290a8d00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeWidth="0.783333" />
          </svg>
        </div>
      </div>
      <Frame572 />
    </div>
  );
}

function Topbar6() {
  return (
    <div className="bg-[#18181b] h-[21.933px] relative shrink-0 w-full" data-name="topbar">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[9.4px] relative size-full">
          <Breadcrumb6 />
          <Search10 />
          <TopbarActions6 />
        </div>
      </div>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[7.05px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.05 7.05">
        <g id="plus">
          <path d={svgPaths.p203e100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
      </svg>
    </div>
  );
}

function Frame574() {
  return (
    <div className="bg-[#ff8a00] content-stretch flex gap-[3.917px] items-center px-[6.267px] py-[3.917px] relative rounded-[3.133px] shrink-0" data-name="Frame">
      <Plus />
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[5.483px] text-white whitespace-nowrap">New Member</p>
    </div>
  );
}

function Frame573() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[9.4px] text-white whitespace-nowrap">Team Members</p>
      <Frame574 />
    </div>
  );
}

function Frame576() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-baseline relative shrink-0" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[10.967px] text-white">12</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[5.092px]">Registered</p>
    </div>
  );
}

function Frame575() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[3.133px]" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.133px] items-start leading-[normal] p-[6.267px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[5.092px] uppercase">Total Members</p>
        <Frame576 />
      </div>
    </div>
  );
}

function Frame578() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-baseline relative shrink-0" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#22c55e] text-[10.967px]">7</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[5.092px]">Online Now</p>
    </div>
  );
}

function Frame577() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[3.133px]" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.133px] items-start leading-[normal] p-[6.267px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[5.092px] uppercase">Active Today</p>
        <Frame578 />
      </div>
    </div>
  );
}

function Frame580() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-baseline relative shrink-0" data-name="Frame">
      <p className="font-['Geist:Bold',sans-serif] font-bold relative shrink-0 text-[#f59e0b] text-[10.967px]">2</p>
      <p className="font-['Geist:Regular',sans-serif] font-normal relative shrink-0 text-[#71717a] text-[5.092px]">Needs Review</p>
    </div>
  );
}

function Frame579() {
  return (
    <div className="bg-[#18181b] flex-[1_0_0] min-w-px relative rounded-[3.133px]" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[3.133px] items-start leading-[normal] p-[6.267px] relative size-full whitespace-nowrap">
        <p className="font-['Geist:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#a1a1aa] text-[5.092px] uppercase">Inactive 7d</p>
        <Frame580 />
      </div>
    </div>
  );
}

function Metrics() {
  return (
    <div className="content-stretch flex gap-[6.267px] items-start relative shrink-0 w-full" data-name="metrics">
      <Frame575 />
      <Frame577 />
      <Frame579 />
    </div>
  );
}

function Frame581() {
  return (
    <div className="bg-[#09090b] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex font-['Geist:ExtraBold',sans-serif] font-extrabold gap-[4.7px] items-start leading-[normal] px-[6.267px] py-[4.7px] relative size-full text-[#71717a] text-[4.308px] uppercase">
        <p className="relative shrink-0 w-[15.667px]">#</p>
        <p className="flex-[1_0_0] min-w-px relative">Name</p>
        <p className="relative shrink-0 w-[78.333px]">Email</p>
        <p className="relative shrink-0 w-[54.833px]">Role</p>
        <p className="relative shrink-0 w-[39.167px]">Status</p>
        <p className="relative shrink-0 w-[47px]">Last Active</p>
        <p className="relative shrink-0 text-right w-[47px]">Actions</p>
      </div>
    </div>
  );
}

function Frame584() {
  return (
    <div className="bg-[rgba(255,138,0,0.1)] content-stretch flex items-start px-[3.133px] py-[0.783px] relative rounded-[38.775px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#ff8a00] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[38.775px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#ff8a00] text-[4.308px] uppercase whitespace-nowrap">Super Admin</p>
    </div>
  );
}

function Frame583() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[54.833px]" data-name="Frame">
      <Frame584 />
    </div>
  );
}

function Frame586() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[3.133px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.13333 3.13333">
          <circle cx="1.56667" cy="1.56667" fill="var(--fill-0, #22C55E)" id="Ellipse" r="1.56667" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Active</p>
    </div>
  );
}

function Frame585() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[39.167px]" data-name="Frame">
      <Frame586 />
    </div>
  );
}

function Pencil6() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5162)" id="pencil">
          <path d={svgPaths.p2543ba80} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5162">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame588() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Pencil6 />
    </div>
  );
}

function Key() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="key">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5081)" id="key">
          <path d={svgPaths.p3209c700} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5081">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame589() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Key />
    </div>
  );
}

function Power() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="power">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5122)" id="power">
          <path d={svgPaths.p24709700} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5122">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame590() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Power />
    </div>
  );
}

function Frame587() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-start justify-end relative shrink-0 w-[47px]" data-name="Frame">
      <Frame588 />
      <Frame589 />
      <Frame590 />
    </div>
  );
}

function Frame582() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[6.267px] py-[5.483px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[5.092px] w-[15.667px]">1</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[5.483px] text-white">Adit Pratama</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] w-[78.333px]">adit@kitalabel.com</p>
          <Frame583 />
          <Frame585 />
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] w-[47px]">Just now</p>
          <Frame587 />
        </div>
      </div>
    </div>
  );
}

function Frame593() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] content-stretch flex items-start px-[3.133px] py-[0.783px] relative rounded-[38.775px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#3b82f6] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[38.775px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#3b82f6] text-[4.308px] uppercase whitespace-nowrap">Sales Manager</p>
    </div>
  );
}

function Frame592() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[54.833px]" data-name="Frame">
      <Frame593 />
    </div>
  );
}

function Frame595() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[3.133px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.13333 3.13333">
          <circle cx="1.56667" cy="1.56667" fill="var(--fill-0, #22C55E)" id="Ellipse" r="1.56667" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Active</p>
    </div>
  );
}

function Frame594() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[39.167px]" data-name="Frame">
      <Frame595 />
    </div>
  );
}

function Pencil7() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5306)" id="pencil">
          <path d={svgPaths.pc45b440} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5306">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame597() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Pencil7 />
    </div>
  );
}

function Key1() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="key">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5078)" id="key">
          <path d={svgPaths.p17b12500} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5078">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame598() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Key1 />
    </div>
  );
}

function Power1() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="power">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5075)" id="power">
          <path d={svgPaths.p353b8c80} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5075">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame599() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Power1 />
    </div>
  );
}

function Frame596() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-start justify-end relative shrink-0 w-[47px]" data-name="Frame">
      <Frame597 />
      <Frame598 />
      <Frame599 />
    </div>
  );
}

function Frame591() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[6.267px] py-[5.483px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[5.092px] w-[15.667px]">2</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[5.483px] text-white">Rina Sari</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] w-[78.333px]">rina@kitalabel.com</p>
          <Frame592 />
          <Frame594 />
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] w-[47px]">5m ago</p>
          <Frame596 />
        </div>
      </div>
    </div>
  );
}

function Frame602() {
  return (
    <div className="bg-[rgba(139,92,246,0.1)] content-stretch flex items-start px-[3.133px] py-[0.783px] relative rounded-[38.775px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#8b5cf6] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[38.775px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8b5cf6] text-[4.308px] uppercase whitespace-nowrap">Sales Rep</p>
    </div>
  );
}

function Frame601() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[54.833px]" data-name="Frame">
      <Frame602 />
    </div>
  );
}

function Frame604() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[3.133px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.13333 3.13333">
          <circle cx="1.56667" cy="1.56667" fill="var(--fill-0, #22C55E)" id="Ellipse" r="1.56667" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Active</p>
    </div>
  );
}

function Frame603() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[39.167px]" data-name="Frame">
      <Frame604 />
    </div>
  );
}

function Pencil8() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5072)" id="pencil">
          <path d={svgPaths.p13f7b400} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5072">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame606() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Pencil8 />
    </div>
  );
}

function Key2() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="key">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5069)" id="key">
          <path d={svgPaths.p1edd3d80} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5069">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame607() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Key2 />
    </div>
  );
}

function Power2() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="power">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5137)" id="power">
          <path d={svgPaths.p31d5ed60} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5137">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame608() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Power2 />
    </div>
  );
}

function Frame605() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-start justify-end relative shrink-0 w-[47px]" data-name="Frame">
      <Frame606 />
      <Frame607 />
      <Frame608 />
    </div>
  );
}

function Frame600() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[6.267px] py-[5.483px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[5.092px] w-[15.667px]">3</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[5.483px] text-white">Budi H.</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] w-[78.333px]">budi@kitalabel.com</p>
          <Frame601 />
          <Frame603 />
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] w-[47px]">12m ago</p>
          <Frame605 />
        </div>
      </div>
    </div>
  );
}

function Frame611() {
  return (
    <div className="bg-[rgba(20,184,166,0.1)] content-stretch flex items-start px-[3.133px] py-[0.783px] relative rounded-[38.775px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#14b8a6] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[38.775px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#14b8a6] text-[4.308px] uppercase whitespace-nowrap">Finance</p>
    </div>
  );
}

function Frame610() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[54.833px]" data-name="Frame">
      <Frame611 />
    </div>
  );
}

function Frame613() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[3.133px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.13333 3.13333">
          <circle cx="1.56667" cy="1.56667" fill="var(--fill-0, #71717A)" id="Ellipse" r="1.56667" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] whitespace-nowrap">Inactive</p>
    </div>
  );
}

function Frame612() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[39.167px]" data-name="Frame">
      <Frame613 />
    </div>
  );
}

function Pencil9() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5066)" id="pencil">
          <path d={svgPaths.p2137fa00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5066">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame615() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Pencil9 />
    </div>
  );
}

function Key3() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="key">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5444)" id="key">
          <path d={svgPaths.pedbb600} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5444">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame616() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Key3 />
    </div>
  );
}

function Power3() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="power">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5356)" id="power">
          <path d={svgPaths.pb084780} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5356">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame617() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Power3 />
    </div>
  );
}

function Frame614() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-start justify-end relative shrink-0 w-[47px]" data-name="Frame">
      <Frame615 />
      <Frame616 />
      <Frame617 />
    </div>
  );
}

function Frame609() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[6.267px] py-[5.483px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[5.092px] w-[15.667px]">4</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[5.483px] text-white">Siti A.</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] w-[78.333px]">siti@kitalabel.com</p>
          <Frame610 />
          <Frame612 />
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] w-[47px]">2h ago</p>
          <Frame614 />
        </div>
      </div>
    </div>
  );
}

function Frame620() {
  return (
    <div className="bg-[rgba(139,92,246,0.1)] content-stretch flex items-start px-[3.133px] py-[0.783px] relative rounded-[38.775px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#8b5cf6] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[38.775px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8b5cf6] text-[4.308px] uppercase whitespace-nowrap">Sales Rep</p>
    </div>
  );
}

function Frame619() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[54.833px]" data-name="Frame">
      <Frame620 />
    </div>
  );
}

function Frame622() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[3.133px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.13333 3.13333">
          <circle cx="1.56667" cy="1.56667" fill="var(--fill-0, #22C55E)" id="Ellipse" r="1.56667" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Active</p>
    </div>
  );
}

function Frame621() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[39.167px]" data-name="Frame">
      <Frame622 />
    </div>
  );
}

function Pencil10() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5406)" id="pencil">
          <path d={svgPaths.p30213600} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5406">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame624() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Pencil10 />
    </div>
  );
}

function Key4() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="key">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5063)" id="key">
          <path d={svgPaths.p20304d00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5063">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame625() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Key4 />
    </div>
  );
}

function Power4() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="power">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5347)" id="power">
          <path d={svgPaths.p173a5a00} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5347">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame626() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Power4 />
    </div>
  );
}

function Frame623() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-start justify-end relative shrink-0 w-[47px]" data-name="Frame">
      <Frame624 />
      <Frame625 />
      <Frame626 />
    </div>
  );
}

function Frame618() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[6.267px] py-[5.483px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[5.092px] w-[15.667px]">5</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[5.483px] text-white">Hendra K.</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] w-[78.333px]">hendra@kitalabel.com</p>
          <Frame619 />
          <Frame621 />
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] w-[47px]">1d ago</p>
          <Frame623 />
        </div>
      </div>
    </div>
  );
}

function Frame629() {
  return (
    <div className="bg-[rgba(59,130,246,0.1)] content-stretch flex items-start px-[3.133px] py-[0.783px] relative rounded-[38.775px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#3b82f6] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[38.775px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#3b82f6] text-[4.308px] uppercase whitespace-nowrap">Sales Manager</p>
    </div>
  );
}

function Frame628() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[54.833px]" data-name="Frame">
      <Frame629 />
    </div>
  );
}

function Frame631() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[3.133px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.13333 3.13333">
          <circle cx="1.56667" cy="1.56667" fill="var(--fill-0, #22C55E)" id="Ellipse" r="1.56667" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Active</p>
    </div>
  );
}

function Frame630() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[39.167px]" data-name="Frame">
      <Frame631 />
    </div>
  );
}

function Pencil11() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5162)" id="pencil">
          <path d={svgPaths.p2543ba80} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5162">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame633() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Pencil11 />
    </div>
  );
}

function Key5() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="key">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5081)" id="key">
          <path d={svgPaths.p3209c700} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5081">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame634() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Key5 />
    </div>
  );
}

function Power5() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="power">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5122)" id="power">
          <path d={svgPaths.p24709700} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5122">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame635() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Power5 />
    </div>
  );
}

function Frame632() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-start justify-end relative shrink-0 w-[47px]" data-name="Frame">
      <Frame633 />
      <Frame634 />
      <Frame635 />
    </div>
  );
}

function Frame627() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[6.267px] py-[5.483px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[5.092px] w-[15.667px]">6</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[5.483px] text-white">Lia W.</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] w-[78.333px]">lia@kitalabel.com</p>
          <Frame628 />
          <Frame630 />
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] w-[47px]">3h ago</p>
          <Frame632 />
        </div>
      </div>
    </div>
  );
}

function Frame638() {
  return (
    <div className="bg-[rgba(139,92,246,0.1)] content-stretch flex items-start px-[3.133px] py-[0.783px] relative rounded-[38.775px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#8b5cf6] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[38.775px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#8b5cf6] text-[4.308px] uppercase whitespace-nowrap">Sales Rep</p>
    </div>
  );
}

function Frame637() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[54.833px]" data-name="Frame">
      <Frame638 />
    </div>
  );
}

function Frame640() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[3.133px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.13333 3.13333">
          <circle cx="1.56667" cy="1.56667" fill="var(--fill-0, #71717A)" id="Ellipse" r="1.56667" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] whitespace-nowrap">Inactive</p>
    </div>
  );
}

function Frame639() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[39.167px]" data-name="Frame">
      <Frame640 />
    </div>
  );
}

function Pencil12() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5306)" id="pencil">
          <path d={svgPaths.pc45b440} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5306">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame642() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Pencil12 />
    </div>
  );
}

function Key6() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="key">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5078)" id="key">
          <path d={svgPaths.p17b12500} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5078">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame643() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Key6 />
    </div>
  );
}

function Power6() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="power">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5075)" id="power">
          <path d={svgPaths.p353b8c80} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5075">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame644() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Power6 />
    </div>
  );
}

function Frame641() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-start justify-end relative shrink-0 w-[47px]" data-name="Frame">
      <Frame642 />
      <Frame643 />
      <Frame644 />
    </div>
  );
}

function Frame636() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[6.267px] py-[5.483px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[5.092px] w-[15.667px]">7</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[5.483px] text-white">Anton S.</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] w-[78.333px]">anton@kitalabel.com</p>
          <Frame637 />
          <Frame639 />
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] w-[47px]">1w ago</p>
          <Frame641 />
        </div>
      </div>
    </div>
  );
}

function Frame647() {
  return (
    <div className="bg-[rgba(20,184,166,0.1)] content-stretch flex items-start px-[3.133px] py-[0.783px] relative rounded-[38.775px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[#14b8a6] border-[0.392px] border-solid inset-0 pointer-events-none rounded-[38.775px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#14b8a6] text-[4.308px] uppercase whitespace-nowrap">Finance</p>
    </div>
  );
}

function Frame646() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[54.833px]" data-name="Frame">
      <Frame647 />
    </div>
  );
}

function Frame649() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-center relative shrink-0" data-name="Frame">
      <div className="relative shrink-0 size-[3.133px]" data-name="Ellipse">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.13333 3.13333">
          <circle cx="1.56667" cy="1.56667" fill="var(--fill-0, #22C55E)" id="Ellipse" r="1.56667" />
        </svg>
      </div>
      <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Active</p>
    </div>
  );
}

function Frame648() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[39.167px]" data-name="Frame">
      <Frame649 />
    </div>
  );
}

function Pencil13() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="pencil">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5072)" id="pencil">
          <path d={svgPaths.p13f7b400} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5072">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame651() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Pencil13 />
    </div>
  );
}

function Key7() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="key">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5069)" id="key">
          <path d={svgPaths.p1edd3d80} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5069">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame652() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Key7 />
    </div>
  );
}

function Power7() {
  return (
    <div className="relative shrink-0 size-[5.483px]" data-name="power">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.48333 5.48333">
        <g clipPath="url(#clip0_1_5137)" id="power">
          <path d={svgPaths.p31d5ed60} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeWidth="0.783333" />
        </g>
        <defs>
          <clipPath id="clip0_1_5137">
            <rect fill="white" height="5.48333" width="5.48333" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame653() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start p-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <Power7 />
    </div>
  );
}

function Frame650() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-start justify-end relative shrink-0 w-[47px]" data-name="Frame">
      <Frame651 />
      <Frame652 />
      <Frame653 />
    </div>
  );
}

function Frame645() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4.7px] items-center px-[6.267px] py-[5.483px] relative size-full">
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#71717a] text-[5.092px] w-[15.667px]">8</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] min-w-px relative text-[5.483px] text-white">Maya P.</p>
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] w-[78.333px]">maya@kitalabel.com</p>
          <Frame646 />
          <Frame648 />
          <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#a1a1aa] text-[5.092px] w-[47px]">Just now</p>
          <Frame650 />
        </div>
      </div>
    </div>
  );
}

function Frame656() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start px-[4.7px] py-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Previous</p>
    </div>
  );
}

function Frame657() {
  return (
    <div className="bg-[#09090b] content-stretch flex items-start px-[4.7px] py-[2.35px] relative rounded-[2.35px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[2.35px]" />
      <p className="[word-break:break-word] font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[5.092px] text-white whitespace-nowrap">Next</p>
    </div>
  );
}

function Frame655() {
  return (
    <div className="content-stretch flex gap-[3.133px] items-start relative shrink-0" data-name="Frame">
      <Frame656 />
      <Frame657 />
    </div>
  );
}

function Frame654() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex items-start justify-between p-[6.267px] relative size-full">
        <p className="[word-break:break-word] font-['Geist:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#71717a] text-[5.092px] whitespace-nowrap">
          <span className="leading-[normal]">{`Showing `}</span>
          <span className="font-['Geist:SemiBold',sans-serif] font-semibold leading-[normal] text-white">1–10</span>
          <span className="leading-[normal]">{` of 12 results`}</span>
        </p>
        <Frame655 />
      </div>
    </div>
  );
}

function TableContainer2() {
  return (
    <div className="bg-[#18181b] relative rounded-[3.133px] shrink-0 w-full" data-name="table-container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Frame581 />
        <Frame582 />
        <Frame591 />
        <Frame600 />
        <Frame609 />
        <Frame618 />
        <Frame627 />
        <Frame636 />
        <Frame645 />
        <Frame654 />
      </div>
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none rounded-[3.133px]" />
    </div>
  );
}

function Viewport6() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="viewport">
      <div className="content-stretch flex flex-col gap-[9.4px] items-start p-[9.4px] relative size-full">
        <Frame573 />
        <Metrics />
        <TableContainer2 />
      </div>
    </div>
  );
}

function MainArea4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="main-area">
      <Topbar6 />
      <Viewport6 />
    </div>
  );
}

function ChevronLeft6() {
  return (
    <div className="relative shrink-0 size-[6.267px]" data-name="chevron-left">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.26667 6.26667">
        <g id="chevron-left">
          <path d={svgPaths.p34358400} id="Vector" stroke="var(--stroke-0, #A1A1AA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.522222" />
        </g>
      </svg>
    </div>
  );
}

function Frame658() {
  return <div className="flex-[1_0_0] min-h-px relative w-[39.167px]" data-name="Frame" />;
}

function Frame659() {
  return (
    <div className="flex h-[37px] items-center justify-center relative shrink-0 w-[6px]">
      <div className="-rotate-90 flex-none">
        <div className="content-stretch flex items-start relative" data-name="Frame">
          <p className="[word-break:break-word] font-['Geist:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#71717a] text-[4.308px] uppercase whitespace-nowrap">Team Presence</p>
        </div>
      </div>
    </div>
  );
}

function TeamPresencePanel6() {
  return (
    <div className="bg-[#18181b] relative self-stretch shrink-0 w-[12.533px]" data-name="team-presence-panel">
      <div aria-hidden className="absolute border-[0.392px] border-[rgba(255,255,255,0.08)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center py-[9.4px] relative size-full">
          <ChevronLeft6 />
          <Frame658 />
          <Frame659 />
        </div>
      </div>
    </div>
  );
}

function Frame563() {
  return (
    <div className="bg-[#09090b] content-stretch flex h-[352.5px] items-start min-h-[352.5px] relative shrink-0 w-[564px]" data-name="Frame">
      <Sidebar6 />
      <MainArea4 />
      <TeamPresencePanel6 />
    </div>
  );
}

function TeamMembers() {
  return (
    <div className="absolute content-stretch flex h-[352.5px] items-start left-0 overflow-clip top-0 w-[564px]" data-name="team-members">
      <Frame563 />
    </div>
  );
}

function ScreenClip4() {
  return (
    <div className="h-[400px] overflow-clip relative shrink-0 w-[564px]" data-name="screen-clip">
      <TeamMembers />
    </div>
  );
}

function Frame562() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[564px]" data-name="Frame">
      <ScreenClip4 />
      <p className="[word-break:break-word] font-['Space_Mono:Regular',sans-serif] leading-[1.4] min-w-full not-italic relative shrink-0 text-[#9a9a93] text-[12px] w-[min-content]">Team Members — Role roster with SUPER ADMIN, SALES MANAGER, SALES REP, FINANCE badges and live presence status.</p>
    </div>
  );
}

function Frame468() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1152px]" data-name="Frame">
      <Frame469 />
      <Frame562 />
    </div>
  );
}

function Section3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section 03">
      <div className="content-stretch flex flex-col gap-[80px] items-start px-[64px] py-[100px] relative size-full">
        <Frame129 />
        <ProductScreenGallery />
      </div>
    </div>
  );
}

function Frame660() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px] whitespace-nowrap">04 — Key Design Decisions</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-none min-w-full relative shrink-0 text-[#f2f1ec] text-[46px] w-[min-content]">Why it works the way it does</p>
    </div>
  );
}

function Bolt() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bolt">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bolt">
          <path d={svgPaths.pda8b300} id="Vector" stroke="var(--stroke-0, #CC6EF8)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame663() {
  return (
    <div className="bg-[#311847] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Frame">
      <Bolt />
    </div>
  );
}

function Frame664() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px] w-full">Business Pulse over raw data</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#9a9a93] text-[13px] w-full">The dashboard interprets metrics, not just displays them: 40% buyer conversion rate, reorder risk exposure, and operational workload. Signals the team can act on at 9am, not data they need to analyse.</p>
    </div>
  );
}

function Frame662() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start p-[32px] relative rounded-[1px] shrink-0 w-[368px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[1px]" />
      <Frame663 />
      <Frame664 />
    </div>
  );
}

function Bolt1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bolt">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bolt">
          <path d={svgPaths.pda8b300} id="Vector" stroke="var(--stroke-0, #CC6EF8)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame666() {
  return (
    <div className="bg-[#311847] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Frame">
      <Bolt1 />
    </div>
  );
}

function Frame667() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px] w-full">Sales Insight in the Calculator</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#9a9a93] text-[13px] w-full">The Internal Calculator includes a BETA Sales Insight panel that recommends competitive pricing (Rp 270/pcs for 15% margin advantage) based on margin targets and competitor data. A quote becomes a sales decision.</p>
    </div>
  );
}

function Frame665() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start p-[32px] relative rounded-[1px] shrink-0 w-[368px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[1px]" />
      <Frame666 />
      <Frame667 />
    </div>
  );
}

function Bolt2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="bolt">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="bolt">
          <path d={svgPaths.pda8b300} id="Vector" stroke="var(--stroke-0, #CC6EF8)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame669() {
  return (
    <div className="bg-[#311847] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Frame">
      <Bolt2 />
    </div>
  );
}

function Frame670() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Frame">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#f2f1ec] text-[18px] w-full">Segmentation as the default view</p>
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#9a9a93] text-[13px] w-full">The customer list opens to actionable segment tabs (Needs Attention, VIP, Inactive) rather than an unfiltered list of 1,847 rows. The most important work surfaces first.</p>
    </div>
  );
}

function Frame668() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start p-[32px] relative rounded-[1px] shrink-0 w-[368px]" data-name="Frame">
      <div aria-hidden className="absolute border border-[rgba(242,241,236,0.1)] border-solid inset-0 pointer-events-none rounded-[1px]" />
      <Frame669 />
      <Frame670 />
    </div>
  );
}

function Frame661() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-[1152px]" data-name="Frame">
      <Frame662 />
      <Frame665 />
      <Frame668 />
    </div>
  );
}

function Section4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section 04">
      <div className="content-stretch flex flex-col gap-[64px] items-start px-[64px] py-[100px] relative size-full">
        <Frame660 />
        <Frame661 />
      </div>
    </div>
  );
}

function Frame673() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px]">16</p>
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px] uppercase">Screens designed</p>
    </div>
  );
}

function Frame674() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px]">18</p>
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px] uppercase">Documentation pages</p>
    </div>
  );
}

function Frame675() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px]">10</p>
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px] uppercase">Business rules</p>
    </div>
  );
}

function Frame676() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px]">3</p>
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px] uppercase">Team roles</p>
    </div>
  );
}

function Frame677() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative" data-name="Frame">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#cc6ef8] text-[38px]">1</p>
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#9a9a93] text-[11px] uppercase">Unified OS</p>
    </div>
  );
}

function Frame672() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1152px]" data-name="Frame">
      <Frame673 />
      <Frame674 />
      <Frame675 />
      <Frame676 />
      <Frame677 />
    </div>
  );
}

function Frame671() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start leading-[normal] relative shrink-0 w-full whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] not-italic relative shrink-0 text-[#cc6ef8] text-[12px] tracking-[1.92px]">05 — Outcomes</p>
      <Frame672 />
    </div>
  );
}

function Section5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section 05">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[80px] items-start px-[64px] py-[100px] relative size-full">
        <Frame671 />
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#9a9a93] text-[17px] w-[1152px]">The KitaLabel Business OS gave the team one platform to run their entire operation — from seeing revenue and churn risk at a glance, to pricing a quote with a competitor-aware margin calculator, to tracking which customers are overdue for a reorder. The design specification (18 pages, 10 business rules, full token set) gave engineering a complete source of truth to build from.</p>
      </div>
    </div>
  );
}

function Frame679() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="font-['Space_Mono:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#cc6ef8] text-[14px]">← Back to portfolio</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[#f2f1ec] text-[40px]">View all work</p>
    </div>
  );
}

function ArrowUpRight() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="arrow-up-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="arrow-up-right">
          <path d={svgPaths.p15ccb12c} id="Vector" stroke="var(--stroke-0, #F2F1EC)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame678() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-[1152px]" data-name="Frame">
      <Frame679 />
      <ArrowUpRight />
    </div>
  );
}

function Frame681() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Space_Mono:Regular',sans-serif] items-center justify-between leading-[normal] not-italic relative shrink-0 text-[#9a9a93] text-[11px] w-full whitespace-nowrap" data-name="foot">
      <p className="relative shrink-0">© 2026 Dheoryan Putra Arsi</p>
      <p className="relative shrink-0">{`Designed & built with intent`}</p>
      <p className="relative shrink-0">Back to top ↑</p>
    </div>
  );
}

function Frame680() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Frame">
      <div className="h-0 relative shrink-0 w-full" data-name="Line">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1152 1">
            <line id="Line" stroke="var(--stroke-0, #F2F1EC)" strokeOpacity="0.101961" x2="1152" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <Frame681 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0a0a0a] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[80px] items-start pb-[40px] pt-[120px] px-[64px] relative size-full">
        <Frame678 />
        <Frame680 />
      </div>
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
            <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[#f2f1ec] text-[40px] tracking-[-0.8px]">KitaLabel Price Calculator</p>
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

export default function CaseStudyKitalabelBos() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start relative size-full" data-name="case-study-kitalabel-bos">
      <Nav />
      <Hero />
      <Section1 />
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <NextWork />
      <Footer />
    </div>
  );
}
