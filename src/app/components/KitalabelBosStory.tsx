import { useState, type ComponentType, type CSSProperties } from "react";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Calculator,
  Check,
  CircleAlert,
  Database,
  Eye,
  EyeOff,
  FileSearch,
  LockKeyhole,
  MessageSquare,
  RefreshCcw,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  UsersRound,
  Webhook,
} from "lucide-react";

type SystemStage = {
  label: string;
  eyebrow: string;
  description: string;
  result: string;
  color: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

const systemStages: SystemStage[] = [
  {
    label: "WooCommerce",
    eyebrow: "Customer action",
    description: "A customer registers, updates their details, or places an order in the storefront.",
    result: "The event starts with real customer behaviour, not a manually copied spreadsheet row.",
    color: "#ff8a00",
    icon: ShoppingCart,
  },
  {
    label: "Event queue",
    eyebrow: "Integration layer",
    description: "Incoming webhooks are logged before processing so every event can be traced and retried.",
    result: "Operations can tell whether an order arrived, failed during processing, or never left the store.",
    color: "#f4b740",
    icon: Webhook,
  },
  {
    label: "CRM core",
    eyebrow: "Operating model",
    description: "Orders and customers are enriched with status, owner, reorder signals, and computed metrics.",
    result: "Raw commerce data becomes a shared operational record the whole team can work from.",
    color: "#5bb8ff",
    icon: Database,
  },
  {
    label: "Action surfaces",
    eyebrow: "Decision layer",
    description: "Dashboards surface priorities while Lark notifications keep urgent changes close to the team.",
    result: "The flow ends with a decision or action, not another passive data table.",
    color: "#68e39b",
    icon: BarChart3,
  },
];

const recoverySteps = [
  {
    label: "Check the event",
    description: "Look for the latest WooCommerce webhook in the event log.",
    signal: "Confirms whether the store successfully sent the order.",
    icon: Search,
  },
  {
    label: "Inspect processing",
    description: "If the event arrived, inspect Sync Logs for a transformation failure.",
    signal: "Separates an integration failure from an order-entry problem.",
    icon: FileSearch,
  },
  {
    label: "Verify configuration",
    description: "If no event exists, check the WooCommerce webhook URL and secret.",
    signal: "Makes the broken connection visible instead of silently losing work.",
    icon: Settings,
  },
  {
    label: "Recover safely",
    description: "Run a permitted manual sync or escalate with the diagnostic trail attached.",
    signal: "Restores the order without creating duplicates or guessing what failed.",
    icon: RefreshCcw,
  },
] as const;

const roleCapabilities = {
  "Sales rep": [
    ["Dashboard", "Visible"],
    ["Orders & customers", "Visible"],
    ["Internal calculator", "Visible"],
    ["Sales intelligence", "Role controlled"],
    ["System settings", "Hidden"],
    ["Team roles", "Hidden"],
  ],
  "Sales manager": [
    ["Dashboard", "Visible"],
    ["Orders & customers", "Visible"],
    ["Internal calculator", "Visible"],
    ["Sales intelligence", "Visible"],
    ["System settings", "Role controlled"],
    ["Team roles", "Hidden"],
  ],
  Admin: [
    ["Dashboard", "Visible"],
    ["Orders & customers", "Visible"],
    ["Internal calculator", "Visible"],
    ["Sales intelligence", "Visible"],
    ["System settings", "Visible"],
    ["Team roles", "Visible"],
  ],
} as const;

type RoleName = keyof typeof roleCapabilities;

const operatingScope = [
  ["Order operations", ShoppingCart],
  ["Customer intelligence", UsersRound],
  ["Pricing decisions", Calculator],
  ["Team access", ShieldCheck],
  ["Integration health", Webhook],
  ["Business signals", BarChart3],
] as const;

function SectionHeading({ index, label, title, body }: { index: string; label: string; title: string; body: string }) {
  return (
    <div className="bos-story-heading">
      <div>
        <p className="bos-kicker">{index} — {label}</p>
        <h2>{title}</h2>
      </div>
      <p className="bos-heading-copy">{body}</p>
    </div>
  );
}

function SystemFlowSection() {
  const [activeStage, setActiveStage] = useState(0);
  const active = systemStages[activeStage];
  const ActiveIcon = active.icon;

  return (
    <section className="bos-story-section" data-name="bos-system-logic">
      <SectionHeading
        index="03"
        label="System logic"
        title="One order becomes an operating signal."
        body="The value is not the dashboard alone. It is the traceable path that turns a storefront action into work the team can understand and act on."
      />

      <div className="bos-flow-canvas">
        <div className="bos-system-flow" aria-label="KitaLabel Business OS data lifecycle">
          {systemStages.map((stage, index) => {
            const Icon = stage.icon;
            const isActive = activeStage === index;
            return (
              <div className="bos-flow-group" key={stage.label}>
                <button
                  type="button"
                  className="bos-flow-node"
                  aria-pressed={isActive}
                  onClick={() => setActiveStage(index)}
                    style={{ "--stage-color": stage.color } as CSSProperties}
                >
                  <span className="bos-flow-icon"><Icon size={20} strokeWidth={1.8} /></span>
                  <span>
                    <span className="bos-flow-eyebrow">{stage.eyebrow}</span>
                    <strong>{stage.label}</strong>
                  </span>
                </button>
                {index < systemStages.length - 1 && (
                  <span className="bos-flow-arrow" aria-hidden><ArrowRight size={18} /><ArrowDown size={18} /></span>
                )}
              </div>
            );
          })}
        </div>

        <div className="bos-flow-detail" aria-live="polite">
          <div className="bos-detail-title">
            <span className="bos-detail-icon" style={{ color: active.color }}><ActiveIcon size={22} strokeWidth={1.8} /></span>
            <div>
              <span>Stage {String(activeStage + 1).padStart(2, "0")}</span>
              <h3>{active.label}</h3>
            </div>
          </div>
          <p>{active.description}</p>
          <div className="bos-stage-result">
            <span>Why it matters</span>
            <p>{active.result}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RecoverySection() {
  const [activeStep, setActiveStep] = useState(0);
  const active = recoverySteps[activeStep];

  return (
    <section className="bos-story-section bos-story-section-muted" data-name="bos-operational-recovery">
      <SectionHeading
        index="04"
        label="Operational recovery"
        title="A missing order is a traceable state, not a mystery."
        body="Instead of asking engineering to hunt blindly, the interface gives operations a short diagnostic path and preserves the evidence at every step."
      />

      <div className="bos-recovery-layout">
        <div className="bos-recovery-steps" role="list" aria-label="Missing order recovery steps">
          {recoverySteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            return (
              <button
                type="button"
                className="bos-recovery-step"
                aria-pressed={isActive}
                onClick={() => setActiveStep(index)}
                key={step.label}
              >
                <span className="bos-step-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="bos-step-icon"><Icon size={19} strokeWidth={1.8} /></span>
                <span className="bos-step-copy">
                  <strong>{step.label}</strong>
                  <span>{step.description}</span>
                </span>
                <ArrowRight className="bos-step-arrow" size={18} />
              </button>
            );
          })}
        </div>

        <aside className="bos-recovery-result" aria-live="polite">
          <div className="bos-result-status">
            <span className="bos-status-dot" />
            Diagnostic {activeStep + 1} of {recoverySteps.length}
          </div>
          <CircleAlert size={30} strokeWidth={1.6} />
          <h3>{active.label}</h3>
          <p>{active.signal}</p>
          <div className="bos-recovery-progress" aria-hidden>
            {recoverySteps.map((step, index) => <span className={index <= activeStep ? "is-complete" : ""} key={step.label} />)}
          </div>
          <span className="bos-result-footnote">Each check narrows the failure before anyone retries the order.</span>
        </aside>
      </div>
    </section>
  );
}

function TrustSection() {
  const [dataMode, setDataMode] = useState<"customer" | "internal">("internal");
  const [role, setRole] = useState<RoleName>("Sales rep");
  const internal = dataMode === "internal";

  return (
    <section className="bos-story-section" data-name="bos-trust-access">
      <SectionHeading
        index="05"
        label="Trust and access"
        title="Clean numbers. Only the right controls."
        body="The operating system protects decision quality in two ways: test activity cannot distort business metrics, and sensitive tools only appear for permitted roles."
      />

      <div className="bos-trust-grid">
        <article className="bos-trust-module">
          <div className="bos-module-heading">
            <div>
              <span className="bos-module-kicker">Data integrity</span>
              <h3>Keep testing out of the business pulse</h3>
            </div>
            <ShieldCheck size={24} strokeWidth={1.6} />
          </div>
          <p className="bos-module-copy">Records using a <strong>@kitalabel.com</strong> address stay available for testing but are excluded from financial and customer aggregates.</p>

          <div className="bos-segmented" aria-label="Data record type">
            <button type="button" aria-pressed={!internal} onClick={() => setDataMode("customer")}>Customer record</button>
            <button type="button" aria-pressed={internal} onClick={() => setDataMode("internal")}>Internal test</button>
          </div>

          <div className="bos-metric-list" aria-live="polite">
            {["Paid revenue", "Paid orders", "Average order value", "Customer count"].map((metric) => (
              <div key={metric}>
                <span>{metric}</span>
                <span className={internal ? "is-excluded" : "is-included"}>
                  {internal ? <EyeOff size={15} /> : <Eye size={15} />}
                  {internal ? "Excluded" : "Included"}
                </span>
              </div>
            ))}
          </div>
        </article>

        <article className="bos-trust-module">
          <div className="bos-module-heading">
            <div>
              <span className="bos-module-kicker">Role-aware UI</span>
              <h3>The interface reflects responsibility</h3>
            </div>
            <LockKeyhole size={24} strokeWidth={1.6} />
          </div>
          <p className="bos-module-copy">Restricted menus and actions are removed from the working surface, keeping each role focused while protecting system configuration.</p>

          <div className="bos-role-tabs" aria-label="Team role">
            {(Object.keys(roleCapabilities) as RoleName[]).map((roleName) => (
              <button type="button" aria-pressed={role === roleName} onClick={() => setRole(roleName)} key={roleName}>{roleName}</button>
            ))}
          </div>

          <div className="bos-permission-list" aria-live="polite">
            {roleCapabilities[role].map(([capability, status]) => (
              <div key={capability}>
                <span>{capability}</span>
                <span className={status === "Visible" ? "is-visible" : status === "Hidden" ? "is-hidden" : "is-controlled"}>
                  {status === "Visible" ? <Check size={15} /> : status === "Hidden" ? <EyeOff size={15} /> : <Settings size={15} />}
                  {status}
                </span>
              </div>
            ))}
          </div>
        </article>
      </div>

      <div className="bos-scope-band">
        <div className="bos-scope-copy">
          <span className="bos-kicker">Why Business OS, not CRM?</span>
          <h3>One operational layer across the business.</h3>
          <p>The product grew beyond customer records into pricing, team access, integration health, and daily operating signals.</p>
        </div>
        <div className="bos-scope-list">
          {operatingScope.map(([label, Icon]) => (
            <span key={label}><Icon size={16} strokeWidth={1.7} />{label}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

const adoptionSignals = [
  { value: "12", label: "Registered accounts", detail: "Across sales, admin, manager, and marketing" },
  { value: "6", label: "Reusable roles", detail: "Permissions mapped to daily responsibilities" },
  { value: "1,800+", label: "Customer records", detail: "WooCommerce customers in the operating model" },
  { value: "240+", label: "Documented monthly orders", detail: "Operating volume that shaped the system scope" },
] as const;

const adoptionEvidence = [
  {
    src: "/case-studies/kitalabel-bos/adoption-log.png",
    label: "Team member snapshot",
    title: "The operating layer has real users",
    body: "The production member log shows 12 registered accounts across four operational groups. Names are redacted in the portfolio asset.",
  },
  {
    src: "/case-studies/kitalabel-bos/roles-log.png",
    label: "Role configuration snapshot",
    title: "Access reflects how the team works",
    body: "Six reusable roles govern the 12 accounts, including seven Sales accounts and three Admin accounts, with explicit dashboard permissions.",
  },
] as const;

function AdoptionSection() {
  return (
    <section className="bos-story-section bos-story-section-muted" data-name="bos-adoption-evidence">
      <SectionHeading
        index="06"
        label="Adoption evidence"
        title="The product moved beyond the design file."
        body="The account and role records are visible in production. Customer and order volumes document the operating scale that shaped the system."
      />

      <div className="bos-adoption-stats" aria-label="KitaLabel Business OS adoption signals">
        {adoptionSignals.map((signal) => (
          <article key={signal.label}>
            <strong>{signal.value}</strong>
            <span>{signal.label}</span>
            <p>{signal.detail}</p>
          </article>
        ))}
      </div>

      <div className="bos-adoption-evidence">
        {adoptionEvidence.map((evidence) => (
          <button
            type="button"
            className="bos-evidence-card"
            data-preview-src={evidence.src}
            data-preview-title={`KitaLabel Business OS - ${evidence.label}`}
            aria-label={`Preview ${evidence.label}`}
            key={evidence.src}
          >
            <span className="bos-evidence-image">
              <img src={evidence.src} alt={`${evidence.label} from the deployed KitaLabel Business OS`} />
            </span>
            <span className="bos-evidence-copy">
              <span className="bos-module-kicker">{evidence.label}</span>
              <strong>{evidence.title}</strong>
              <span>{evidence.body}</span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default function KitalabelBosStory() {
  return (
    <div className="bos-story" data-name="kitalabel-bos-product-story">
      <SystemFlowSection />
      <RecoverySection />
      <TrustSection />
      <AdoptionSection />
      <style>{`
        .bos-story { width: 100%; color: #f2f1ec; }
        .bos-story-section { width: 100%; padding: 100px 64px; border-top: 1px solid rgba(242,241,236,.08); }
        .bos-story-section-muted { background: #0d0d0d; }
        .bos-story-heading { width: 100%; max-width: 1152px; margin: 0 auto 64px; display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(280px, .7fr); gap: 72px; align-items: end; }
        .bos-kicker, .bos-module-kicker { display: block; margin: 0 0 22px; color: #cc6ef8; font-family: 'Space Mono', monospace; font-size: 12px; line-height: 1.4; letter-spacing: .12em; text-transform: uppercase; }
        .bos-story-heading h2 { max-width: 760px; margin: 0; color: #f2f1ec; font-family: 'Space Grotesk', sans-serif; font-size: 46px; font-weight: 500; line-height: 1.02; letter-spacing: 0; }
        .bos-heading-copy { margin: 0; color: #9a9a93; font-family: 'Space Grotesk', sans-serif; font-size: 17px; line-height: 1.6; }

        .bos-flow-canvas { width: 100%; max-width: 1152px; margin: 0 auto; border: 1px solid rgba(242,241,236,.12); border-radius: 6px; overflow: hidden; }
        .bos-system-flow { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-bottom: 1px solid rgba(242,241,236,.1); }
        .bos-flow-group { position: relative; min-width: 0; }
        .bos-flow-node { --stage-color: #cc6ef8; position: relative; width: 100%; min-height: 126px; display: flex; gap: 16px; align-items: center; padding: 24px; border: 0; border-right: 1px solid rgba(242,241,236,.08); background: #111; color: #f2f1ec; text-align: left; cursor: pointer; transition: background .2s ease, box-shadow .2s ease; }
        .bos-flow-group:last-child .bos-flow-node { border-right: 0; }
        .bos-flow-node:hover, .bos-flow-node[aria-pressed='true'] { background: #171717; box-shadow: inset 0 -3px 0 var(--stage-color); }
        .bos-flow-icon { flex: 0 0 42px; width: 42px; height: 42px; display: grid; place-items: center; border: 1px solid color-mix(in srgb, var(--stage-color) 55%, transparent); border-radius: 4px; color: var(--stage-color); background: color-mix(in srgb, var(--stage-color) 10%, transparent); }
        .bos-flow-node > span:last-child { min-width: 0; display: flex; flex-direction: column; gap: 5px; }
        .bos-flow-node strong { font-family: 'Space Grotesk', sans-serif; font-size: 16px; font-weight: 600; line-height: 1.2; }
        .bos-flow-eyebrow { color: #777770; font-family: 'Space Mono', monospace; font-size: 9px; line-height: 1.4; letter-spacing: .08em; text-transform: uppercase; }
        .bos-flow-arrow { position: absolute; z-index: 2; top: 50%; right: -9px; transform: translateY(-50%); width: 20px; height: 20px; display: grid; place-items: center; border-radius: 50%; background: #0a0a0a; color: #777770; }
        .bos-flow-arrow svg:last-child { display: none; }
        .bos-flow-detail { min-height: 244px; display: grid; grid-template-columns: 260px minmax(0, 1fr) minmax(300px, .8fr); gap: 48px; align-items: center; padding: 40px; background: #0a0a0a; }
        .bos-detail-title { display: flex; gap: 14px; align-items: center; }
        .bos-detail-icon { width: 44px; height: 44px; display: grid; place-items: center; border: 1px solid currentColor; border-radius: 50%; }
        .bos-detail-title span:not(.bos-detail-icon) { color: #777770; font-family: 'Space Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: .08em; }
        .bos-detail-title h3, .bos-recovery-result h3, .bos-module-heading h3, .bos-scope-copy h3 { margin: 5px 0 0; color: #f2f1ec; font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 600; line-height: 1.2; }
        .bos-flow-detail > p, .bos-stage-result p { margin: 0; color: #9a9a93; font-family: 'Space Grotesk', sans-serif; font-size: 15px; line-height: 1.6; }
        .bos-stage-result { padding-left: 24px; border-left: 1px solid rgba(204,110,248,.45); }
        .bos-stage-result > span { display: block; margin-bottom: 9px; color: #cc6ef8; font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: .08em; text-transform: uppercase; }

        .bos-recovery-layout { width: 100%; max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(320px, .55fr); gap: 24px; }
        .bos-recovery-steps { border-top: 1px solid rgba(242,241,236,.12); }
        .bos-recovery-step { width: 100%; min-height: 116px; display: grid; grid-template-columns: 44px 42px minmax(0, 1fr) 24px; gap: 18px; align-items: center; padding: 22px 18px; border: 0; border-bottom: 1px solid rgba(242,241,236,.12); background: transparent; color: #f2f1ec; text-align: left; cursor: pointer; transition: background .2s ease; }
        .bos-recovery-step:hover, .bos-recovery-step[aria-pressed='true'] { background: rgba(204,110,248,.075); }
        .bos-step-number { color: #cc6ef8; font-family: 'Space Mono', monospace; font-size: 11px; }
        .bos-step-icon { width: 42px; height: 42px; display: grid; place-items: center; border: 1px solid rgba(242,241,236,.12); border-radius: 50%; color: #9a9a93; }
        .bos-recovery-step[aria-pressed='true'] .bos-step-icon { border-color: rgba(204,110,248,.55); color: #cc6ef8; }
        .bos-step-copy { display: flex; flex-direction: column; gap: 6px; }
        .bos-step-copy strong { font-family: 'Space Grotesk', sans-serif; font-size: 17px; font-weight: 600; }
        .bos-step-copy > span { color: #9a9a93; font-family: 'Space Grotesk', sans-serif; font-size: 14px; line-height: 1.5; }
        .bos-step-arrow { color: #66665f; }
        .bos-recovery-result { min-height: 100%; display: flex; flex-direction: column; align-items: flex-start; padding: 30px; border: 1px solid rgba(204,110,248,.32); border-radius: 6px; background: #15101a; color: #cc6ef8; }
        .bos-result-status { display: flex; align-items: center; gap: 9px; margin-bottom: auto; color: #9a9a93; font-family: 'Space Mono', monospace; font-size: 10px; letter-spacing: .08em; text-transform: uppercase; }
        .bos-status-dot { width: 7px; height: 7px; border-radius: 50%; background: #68e39b; box-shadow: 0 0 12px rgba(104,227,155,.55); }
        .bos-recovery-result > svg { margin-top: 64px; }
        .bos-recovery-result h3 { margin-top: 18px; font-size: 26px; }
        .bos-recovery-result > p { margin: 14px 0 28px; color: #b8b8b0; font-family: 'Space Grotesk', sans-serif; font-size: 16px; line-height: 1.6; }
        .bos-recovery-progress { width: 100%; display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; }
        .bos-recovery-progress span { height: 3px; background: rgba(242,241,236,.12); }
        .bos-recovery-progress .is-complete { background: #cc6ef8; }
        .bos-result-footnote { margin-top: 18px; color: #777770; font-family: 'Space Mono', monospace; font-size: 10px; line-height: 1.5; }

        .bos-trust-grid { width: 100%; max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
        .bos-trust-module { min-width: 0; padding: 32px; border: 1px solid rgba(242,241,236,.12); border-radius: 6px; background: #101010; }
        .bos-module-heading { min-height: 62px; display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; color: #cc6ef8; }
        .bos-module-heading h3 { max-width: 360px; margin-top: 0; font-size: 24px; }
        .bos-module-kicker { margin-bottom: 10px; font-size: 10px; }
        .bos-module-copy { min-height: 72px; margin: 18px 0 24px; color: #9a9a93; font-family: 'Space Grotesk', sans-serif; font-size: 15px; line-height: 1.55; }
        .bos-module-copy strong { color: #f2f1ec; font-weight: 500; }
        .bos-segmented, .bos-role-tabs { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px; padding: 4px; border: 1px solid rgba(242,241,236,.08); background: #090909; }
        .bos-role-tabs { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        .bos-segmented button, .bos-role-tabs button { min-height: 38px; padding: 7px 10px; border: 0; border-radius: 2px; background: transparent; color: #777770; font-family: 'Space Mono', monospace; font-size: 10px; line-height: 1.3; cursor: pointer; }
        .bos-segmented button[aria-pressed='true'], .bos-role-tabs button[aria-pressed='true'] { background: #26152f; color: #e6a7ff; }
        .bos-metric-list, .bos-permission-list { margin-top: 18px; border-top: 1px solid rgba(242,241,236,.1); }
        .bos-metric-list > div, .bos-permission-list > div { min-height: 48px; display: flex; align-items: center; justify-content: space-between; gap: 16px; border-bottom: 1px solid rgba(242,241,236,.08); color: #c8c8c1; font-family: 'Space Grotesk', sans-serif; font-size: 14px; }
        .bos-metric-list > div > span:last-child, .bos-permission-list > div > span:last-child { display: inline-flex; gap: 7px; align-items: center; font-family: 'Space Mono', monospace; font-size: 9px; letter-spacing: .04em; text-transform: uppercase; }
        .is-excluded, .is-hidden { color: #ff7777; }
        .is-included, .is-visible { color: #68e39b; }
        .is-controlled { color: #f4b740; }
        .bos-scope-band { width: 100%; max-width: 1152px; margin: 64px auto 0; padding: 42px 0 0; display: grid; grid-template-columns: minmax(280px, .72fr) minmax(0, 1.28fr); gap: 72px; border-top: 1px solid rgba(242,241,236,.12); }
        .bos-scope-copy h3 { margin: 0; font-size: 28px; }
        .bos-scope-copy p { max-width: 460px; margin: 14px 0 0; color: #9a9a93; font-family: 'Space Grotesk', sans-serif; font-size: 15px; line-height: 1.6; }
        .bos-scope-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 32px; border-top: 1px solid rgba(242,241,236,.1); }
        .bos-scope-list span { min-height: 52px; display: flex; gap: 10px; align-items: center; border-bottom: 1px solid rgba(242,241,236,.1); color: #c8c8c1; font-family: 'Space Grotesk', sans-serif; font-size: 14px; }
        .bos-scope-list svg { color: #cc6ef8; }

        .bos-adoption-stats { width: 100%; max-width: 1152px; margin: 0 auto 24px; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border: 1px solid rgba(242,241,236,.12); border-radius: 6px; overflow: hidden; }
        .bos-adoption-stats article { min-height: 178px; display: flex; flex-direction: column; justify-content: center; padding: 24px; border-right: 1px solid rgba(242,241,236,.1); background: #101010; }
        .bos-adoption-stats article:last-child { border-right: 0; }
        .bos-adoption-stats strong { color: #cc6ef8; font-family: 'Space Grotesk', sans-serif; font-size: 38px; font-weight: 600; line-height: 1; }
        .bos-adoption-stats span { margin-top: 12px; color: #f2f1ec; font-family: 'Space Grotesk', sans-serif; font-size: 15px; font-weight: 600; }
        .bos-adoption-stats p { margin: 7px 0 0; color: #777770; font-family: 'Space Grotesk', sans-serif; font-size: 12px; line-height: 1.5; }
        .bos-adoption-evidence { width: 100%; max-width: 1152px; margin: 0 auto; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
        .bos-evidence-card { min-width: 0; padding: 0; overflow: hidden; border: 1px solid rgba(242,241,236,.12); border-radius: 6px; background: #101010; color: #f2f1ec; text-align: left; cursor: zoom-in; transition: border-color .2s ease, background .2s ease; }
        .bos-evidence-card:hover { border-color: rgba(204,110,248,.65); background: #141414; }
        .bos-evidence-image { display: block; width: 100%; aspect-ratio: 16 / 9; overflow: hidden; border-bottom: 1px solid rgba(242,241,236,.1); background: #090909; }
        .bos-evidence-image img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: top; }
        .bos-evidence-copy { display: flex; flex-direction: column; padding: 24px; }
        .bos-evidence-copy .bos-module-kicker { margin-bottom: 9px; }
        .bos-evidence-copy > strong { font-family: 'Space Grotesk', sans-serif; font-size: 19px; font-weight: 600; line-height: 1.3; }
        .bos-evidence-copy > span:last-child { margin-top: 9px; color: #9a9a93; font-family: 'Space Grotesk', sans-serif; font-size: 14px; font-weight: 400; line-height: 1.55; }

        @media (max-width: 1023px) {
          .bos-story-section { padding: clamp(64px, 10vw, 88px) clamp(18px, 5vw, 40px); }
          .bos-story-heading { grid-template-columns: 1fr; gap: 24px; margin-bottom: 44px; }
          .bos-story-heading h2 { font-size: clamp(32px, 7vw, 44px); line-height: 1.08; }
          .bos-system-flow { grid-template-columns: 1fr; }
          .bos-flow-node { min-height: 104px; border-right: 0; border-bottom: 1px solid rgba(242,241,236,.08); }
          .bos-flow-group:last-child .bos-flow-node { border-bottom: 0; }
          .bos-flow-arrow { top: auto; right: 24px; bottom: -10px; transform: none; }
          .bos-flow-arrow svg:first-child { display: none; }
          .bos-flow-arrow svg:last-child { display: block; }
          .bos-flow-detail { grid-template-columns: 1fr; gap: 24px; padding: 28px; }
          .bos-stage-result { padding: 20px 0 0; border-left: 0; border-top: 1px solid rgba(204,110,248,.35); }
          .bos-recovery-layout, .bos-trust-grid, .bos-scope-band, .bos-adoption-evidence { grid-template-columns: 1fr; }
          .bos-adoption-stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .bos-adoption-stats article:nth-child(2) { border-right: 0; }
          .bos-adoption-stats article:nth-child(-n+2) { border-bottom: 1px solid rgba(242,241,236,.1); }
          .bos-recovery-result { min-height: 380px; }
          .bos-result-status { margin-bottom: 0; }
          .bos-scope-band { gap: 36px; }
        }

        @media (max-width: 639px) {
          .bos-story-section { padding-left: 18px; padding-right: 18px; }
          .bos-kicker { margin-bottom: 16px; }
          .bos-heading-copy { font-size: 16px; }
          .bos-flow-node { padding: 20px; }
          .bos-flow-detail { padding: 24px 20px; }
          .bos-recovery-step { grid-template-columns: 30px 38px minmax(0, 1fr); gap: 12px; padding: 18px 10px; }
          .bos-step-arrow { display: none; }
          .bos-step-copy strong { font-size: 16px; }
          .bos-step-copy > span { font-size: 14px; }
          .bos-recovery-result, .bos-trust-module { padding: 24px 20px; }
          .bos-recovery-result { min-height: 340px; }
          .bos-recovery-result > svg { margin-top: 42px; }
          .bos-role-tabs { grid-template-columns: 1fr; }
          .bos-module-copy { min-height: 0; }
          .bos-scope-list { grid-template-columns: 1fr; }
          .bos-adoption-stats { grid-template-columns: 1fr; }
          .bos-adoption-stats article, .bos-adoption-stats article:nth-child(2) { min-height: 0; border-right: 0; border-bottom: 1px solid rgba(242,241,236,.1); }
          .bos-adoption-stats article:last-child { border-bottom: 0; }
          .bos-metric-list > div, .bos-permission-list > div { align-items: flex-start; padding: 14px 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .bos-flow-node, .bos-recovery-step { transition: none; }
        }
      `}</style>
    </div>
  );
}
