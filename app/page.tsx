const metrics = [
  { value: "$2,250+", label: "Projected Monthly Revenue by Day 90" },
  { value: "3", label: "Primary Income Streams (Service, Micro-Product, Affiliate)" },
  { value: "40%", label: "Time Allocated to Promotion & Audience Growth" }
];

const guidingPrinciples = [
  "AI stack: Lean on free tiers of ChatGPT, Claude, Perplexity, Notion, Canva, Poe.com bots, Mixo, Gamma, Tome, Google Sheets, Airtable, and Make/Zapier free plans.",
  "Value ladder: Start with a done-for-you micro-service, then build a productized template bundle, and finally layer on affiliate/lead-gen content.",
  "Distribution first: Every deliverable includes a promotion playbook, keyword set, and engagement loop to drive traffic without paid ads.",
  "Compoundable assets: Repurpose all research into content, freebies, and evergreen lead magnets."
];

const phases = [
  {
    title: "Phase 1 (Days 1-14): Research, Positioning & Offer Definition",
    bullets: [
      "Use Perplexity/ChatGPT to audit Reddit, Indie Hackers, and LinkedIn for underserved niches needing rapid content ops or lead-gen.",
      "Pick a narrow niche (e.g., boutique fitness studios, local realtors, Shopify drop-shippers) and craft a $197 “AI-powered content sprint” offer.",
      "Build a Notion dashboard with ICP profiles, problem statements, and outcome promises.",
      "Assemble portfolio samples using Canva templates + GPT-generated copy to showcase before/after scenarios.",
      "Deliverable: Landing page (Mixo/Tally + Notion embed) plus discovery call script."
    ],
    highlight: "KPI: 25 qualified leads identified, 10 outreach messages sent/day starting Day 7.\nTools: Perplexity, Google Sheets, Notion, Canva, Gamma."
  },
  {
    title: "Phase 2 (Days 15-30): Client Acquisition Sprint",
    bullets: [
      "Use Apollo free tier + manual LinkedIn search + PhantomBuster trial for contact enrichment, store targets in Airtable.",
      "Craft 3-step outreach sequences (Icebreaker, Value Drop, CTA) with ChatGPT, personalize with Loom video generated scripts.",
      "Host 3 live Twitter/X Spaces or LinkedIn Lives discussing “How to ship 30 days of content with free AI tools” to attract leads.",
      "Close 3 clients at $197-$297 each; deliver 30-day content packs using Copy.ai / GPT-prompts, schedule via Buffer free plan.",
      "Capture testimonials, package deliverables as anonymized case studies for Phase 3 funnel."
    ],
    highlight: "KPI: 60 discovery conversations, 20 scheduled calls, 3 paying clients ($750+).\nTools: ChatGPT, Perplexity, Loom, Airtable, Buffer, Typefully."
  },
  {
    title: "Phase 3 (Days 31-60): Productized Templates & Authority Engine",
    bullets: [
      "Convert service SOPs into a template bundle (Notion workspace, Canva designs, prompt library) priced at $49-$79.",
      "Build a lead magnet (“AI Content Command Center”) using Notion + Canva, gate with Gumroad free plan.",
      "Launch weekly newsletter via Beehiiv/ConvertKit free tier; repurpose into YouTube shorts with CapCut auto-edits.",
      "Host live build-in-public sessions with Tally forms capturing waitlist for templates.",
      "Set up Make.com automations to send onboarding emails + deliver digital goods automatically."
    ],
    highlight: "KPI: 200 subscribers, 40 template sales ($2K gross cumulative).\nTools: Gumroad, Notion, Canva, CapCut, Beehiiv, Make."
  },
  {
    title: "Phase 4 (Days 61-90): Scale with Affiliate & Community Plays",
    bullets: [
      "Publish SEO-focused pillar posts (4k words each) targeting “best free AI tools for [niche]” using Outranking/NeuronWriter trials + GPT editing.",
      "Joining affiliate programs of relevant tools (Zapier, Canva, Beehiiv, Copy.ai, Descript) and insert contextual CTAs across all content.",
      "Launch a free community (Circle free trial → move to Discord) with weekly co-working sessions and upsell mastermind tiers.",
      "Host monthly challenge (“Ship 30 AI posts”) with leaderboards using Airtable + Softr, driving viral referrals.",
      "Introduce micro-cohorts ($149) teaching the template system live; cap at 15 seats."
    ],
    highlight:
      "KPI: $2,250 MRR blended (Service retainers $900, template sales $750, affiliates $300, cohort upsell $300).\nTools: Notion, Discord, Airtable, Softr, Beehiiv, ChatGPT."
  }
];

const weeklySchedule = [
  {
    day: "Mon",
    focus: "Research & Offer Iteration",
    workflows: "Perplexity briefs, Notion database updates",
    outputs: "2 ICP insights, 1 offer tweak"
  },
  {
    day: "Tue",
    focus: "Content Production",
    workflows: "ChatGPT prompt chains, Canva templates",
    outputs: "7 social posts, 1 long-form article outline"
  },
  {
    day: "Wed",
    focus: "Outbound & Calls",
    workflows: "GPT-personalized emails, Loom scripts",
    outputs: "25 messages, 4 booked calls"
  },
  {
    day: "Thu",
    focus: "Delivery & Automation",
    workflows: "Make.com zaps, Notion dashboards",
    outputs: "Client deliverables, updated SOPs"
  },
  {
    day: "Fri",
    focus: "Audience Growth",
    workflows: "CapCut edits, Beehiiv newsletter",
    outputs: "1 newsletter, 2 video clips, 1 live event"
  },
  {
    day: "Sat",
    focus: "Lead Magnet & Product",
    workflows: "Gamma decks, Gumroad offers",
    outputs: "1 asset refresh, 10 funnel signups"
  },
  {
    day: "Sun",
    focus: "Analysis & Planning",
    workflows: "Google Sheets dashboards, Notion retro",
    outputs: "Updated KPIs, next-week sprint plan"
  }
];

const toolStack = [
  {
    category: "Research & Ideation",
    tools: "Perplexity, Poe, ChatGPT free, Google Trends",
    use: "Trend scanning, pain point analysis, keyword plans"
  },
  {
    category: "Content Creation",
    tools: "Canva, Gamma, Tome, CapCut, ElevenLabs free tier",
    use: "Visuals, decks, video edits, voiceovers"
  },
  {
    category: "Automation",
    tools: "Make (free), Zapier (free), Airtable, Notion",
    use: "Lead intake, delivery automations, CRM light"
  },
  {
    category: "Distribution",
    tools: "Beehiiv, ConvertKit, Buffer, Typefully, Hypefury (trial)",
    use: "Scheduling, newsletters, post repurposing"
  },
  {
    category: "Analytics",
    tools: "Google Sheets, Plausible trial, Notion dashboards",
    use: "Revenue tracking, funnel metrics, content performance"
  },
  {
    category: "Sales & Delivery",
    tools: "Gumroad, Tally, Mixo, Calendly free, Discord",
    use: "Checkout, lead capture, booking, community"
  }
];

const financialModel = [
  {
    stream: "AI Content Sprints",
    pricing: "$297 × 3 clients",
    revenue: "$891",
    kpi: "60 booked calls/mo, 5 closed, 60% fulfillment capacity"
  },
  {
    stream: "Template Bundle",
    pricing: "$69 × 15 sales",
    revenue: "$1,035",
    kpi: "2.5% tripwire conversion, 400 monthly visitors, AOV tracking"
  },
  {
    stream: "Affiliate & Cohorts",
    pricing: "$25 avg commission × 8 + $149 × 2 seats",
    revenue: "$374",
    kpi: "Monthly webinar (50 RSVP), 15% affiliate click-to-buy rate"
  },
  {
    stream: "Total Goal",
    pricing: "—",
    revenue: "$2,300",
    kpi: "Maintain 30-day pipeline ≥ $3,500 qualified revenue",
    bold: true
  }
];

const contingency = [
  "Lead flow dips: Launch “AI teardown” YouTube live series; offer free audits to drive inbound leads.",
  "Fulfillment overload: Create SOPs to outsource to vetted Upwork freelancers, manage quality with Loom walkthroughs.",
  "Tool limits reached: Rotate between freemium AI tools (WriteSonic, Jasper trial, Koala.sh) and leverage community shared prompts.",
  "Cash flow gaps: Introduce “Express VIP Day” ($497) once per month capped at two seats.",
  "Audience fatigue: Alternate between case studies, tutorial threads, and behind-the-scenes retrospectives to maintain engagement."
];

const commitments = [
  "Ship one flagship asset weekly (case study, guide, or live workshop).",
  "Log every interaction and deal stage in Airtable to monitor revenue velocity.",
  "Review KPIs each Sunday and reset offers/pricing based on closing ratios.",
  "Refine prompts and templates every client project; compound improvements into the bundle."
];

export default function Home() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <span className="badge">Challenge Blueprint</span>
          <h1>$2K/Month with 100% Free AI Tools</h1>
          <p className="subtitle">
            Follow this 90-day, execution-focused roadmap to build diversified income streams
            powered exclusively by zero-cost AI platforms. Each stage is packed with deliverables,
            metrics, and weekly cadences so you can operate like a lean solo founder.
          </p>
        </div>
      </header>

      <main className="container main">
        <section className="metrics">
          {metrics.map((metric) => (
            <article key={metric.label} className="card metric-card">
              <div className="metric">{metric.value}</div>
              <div className="metric-label">{metric.label}</div>
            </article>
          ))}
        </section>

        <section className="card">
          <h2>Guiding Principles</h2>
          <ul className="list">
            {guidingPrinciples.map((item) => {
              const [bold, ...rest] = item.split(": ");
              return (
                <li key={item}>
                  <strong>{bold}:</strong> {rest.join(": ")}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="card">
          <h2>90-Day Execution Timeline</h2>
          <div className="timeline">
            {phases.map((phase) => (
              <div key={phase.title} className="timeline-item">
                <h3>{phase.title}</h3>
                <ul className="list">
                  {phase.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="highlight">
                  {phase.highlight.split("\n").map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="two-column">
          <article className="card">
            <h2>Weekly Operating Schedule</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Focus</th>
                    <th>AI Workflows</th>
                    <th>Output Targets</th>
                  </tr>
                </thead>
                <tbody>
                  {weeklySchedule.map((row) => (
                    <tr key={row.day}>
                      <td>{row.day}</td>
                      <td>{row.focus}</td>
                      <td>{row.workflows}</td>
                      <td>{row.outputs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="card">
            <h2>Key Free AI Tool Stack</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Tools</th>
                    <th>Primary Use</th>
                  </tr>
                </thead>
                <tbody>
                  {toolStack.map((row) => (
                    <tr key={row.category}>
                      <td>{row.category}</td>
                      <td>{row.tools}</td>
                      <td>{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </section>

        <section className="card">
          <h2>Financial Model & KPI Targets</h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Stream</th>
                  <th>Pricing & Volume</th>
                  <th>Monthly Revenue</th>
                  <th>Critical KPIs</th>
                </tr>
              </thead>
              <tbody>
                {financialModel.map((row) => (
                  <tr key={row.stream} className={row.bold ? "table-bold" : undefined}>
                    <td>{row.bold ? <strong>{row.stream}</strong> : row.stream}</td>
                    <td>{row.pricing}</td>
                    <td>{row.bold ? <strong>{row.revenue}</strong> : row.revenue}</td>
                    <td>{row.kpi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="card">
          <h2>Risk Mitigation & Contingency Plays</h2>
          <ul className="list">
            {contingency.map((item) => {
              const [bold, ...rest] = item.split(": ");
              return (
                <li key={item}>
                  <strong>{bold}:</strong> {rest.join(": ")}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="cta card">
          <h2>90-Day Commitments</h2>
          <p>
            Keep this cadence to stay on track. Miss a milestone? Reallocate Sunday planning to catch
            up within 48 hours.
          </p>
          <ul>
            {commitments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="page-footer">
        Operate like a media-first solo founder: capture everything you learn, publish relentlessly,
        and let free AI tools multiply your output.
      </footer>
    </>
  );
}

