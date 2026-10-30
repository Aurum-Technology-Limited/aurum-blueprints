---
id: fundraising-investors.growth-equity-rounds
name: Growth Equity Rounds
description: "Run a Series B or later growth round with confidence: investor-grade metrics, a planned process, deeper diligence handled calmly and complex terms understood before anyone signs."
category: business
version: 1.0.0
tags: [fundraising-investors, growth-equity-rounds, founder, enterprise, manager, series-b, growth-equity, due-diligence]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - meeting-notes
    - board-meeting
    - vendor
    - remediation-plan
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Growth Equity Rounds
          description: "Raising Series B and later growth rounds with larger funds, deeper diligence and more complex terms, for scaling companies."
          projects:
            - name: Series B readiness scorecard
              description: |-
                ## Purpose
                Growth funds underwrite a business, not a story, and most will ask early whether you look like the companies they already backed at this stage. Scoring yourself honestly against the measures they use, such as revenue scale, growth rate, net revenue retention, gross margin and burn multiple, shows whether to launch now or spend two more quarters fixing the weakest line. A clear answer prevents a failed process, which is far harder to recover from than a delayed one.

                ## Milestones
                1. Eight to ten measures that growth investors in your sector use, each with a written definition.
                2. Your trailing twelve months scored against ranges supplied by advisers or existing investors.
                3. The two weakest measures named, with what it would take to move each one.
                4. A launch, wait or fix decision recorded with the board's agreement.

                ## Notes
                Benchmark ranges move with the market. Ask two growth investors you already know, or your existing board members, what they expect to see this year rather than relying on an old report.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored readiness sheet covering at least eight measures, with a launch, wait or fix decision agreed by the board."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the measures your existing investors say growth funds test first"
                - "Pull trailing twelve-month figures for each measure from the finance system"
                - "Score each measure against the ranges your advisers supply"
                - "Write a one-paragraph launch, wait or fix recommendation for the board"
            - name: Growth round size and runway case
              description: |-
                ## Purpose
                Raising too little at Series B means fundraising again within a year, while raising too much at the wrong price costs dilution and sets a bar the next round must clear. A written case linking the amount to named milestones and roughly 24 to 36 months of runway gives investors a number they can test and gives the board a number it can defend.

                ## Milestones
                1. Three funding scenarios, minimum, target and stretch, each with months of runway under the base plan.
                2. The milestones each scenario reaches before the next raise, named and dated.
                3. A target amount chosen and explained in two sentences.
                4. Board sign-off on the target range recorded in the minutes.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page round size case with three scenarios, runway for each and a target range approved by the board."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the finance lead for current monthly net burn and cash on hand"
                - "Model runway for the minimum, target and stretch amounts"
                - "Name the milestones each amount reaches before the next round"
                - "Take the target range to the board for sign-off"
                - "Update the runway figure against actual cash in the bank @recurring(monthly:24)"
            - name: Investor-grade KPI definitions pack
              description: |-
                ## Purpose
                Diligence teams at growth funds recalculate net revenue retention, CAC payback and gross margin from raw data, and a number whose definition changes between the deck and the data room costs credibility fast. Fixing one written definition for every headline metric, with the exact calculation and data source, means every document in the round tells the same story.

                ## Milestones
                1. A list of every metric that appears in the deck, the model and the board pack.
                2. One written definition per metric, with formula, data source and treatment of edge cases such as downgrades and multi-year deals.
                3. The last eight quarters recalculated under those definitions, with any restated figure flagged.
                4. The pack signed off by the finance lead and the CEO.

                ## Notes
                Write down how you treat contraction, the timing of churn, one-off services revenue and currency. These are the edge cases diligence teams probe first.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off definitions pack covering every headline metric, with eight quarters recalculated and restatements noted."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every metric that appears in the current deck and board pack"
                - "Write the formula and data source for each metric"
                - "Recalculate the last eight quarters under the written definitions"
                - "Explain any figure that moves by more than a few percent on restatement"
                - "Review the definitions pack against new reporting needs @recurring(yearly)"
            - name: Customer cohort and retention analysis
              description: |-
                ## Purpose
                Cohort charts get more attention from growth investors than almost any other exhibit, because they show whether revenue compounds or leaks over time. Building revenue and logo cohorts by segment before a fund asks for them lets you explain a weak cohort on your own terms instead of discovering it on a diligence call.

                ## Milestones
                1. Revenue and logo cohorts built by quarter of first purchase for at least three years, or since launch.
                2. Gross and net revenue retention shown by segment, such as enterprise, mid-market and self-serve.
                3. Each unusual cohort explained in one sentence, such as a pricing change or a lost channel partner.
                4. Cohort totals that reconcile to reported revenue within a small, stated tolerance.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Revenue and logo cohort charts by segment that reconcile to reported revenue, with every outlier cohort explained in writing."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Export customer-level revenue by month from billing for the full history"
                - "Build revenue and logo cohorts by quarter of first purchase"
                - "Split retention by customer segment and contract size"
                - "Write a one-line explanation beside each unusual cohort"
                - "Add the latest quarter to the cohort charts @recurring(quarterly)"
            - name: Audit and revenue recognition readiness
              description: |-
                ## Purpose
                Many companies reach Series B with management accounts only, or with an audit a year behind, and growth funds increasingly make audited accounts a condition of closing. Confirming that the latest year is audited, that revenue is recognised under the applicable accounting standard and that deferred revenue ties to contracts removes one of the most common reasons a round slows after the term sheet.

                ## Milestones
                1. The audit status of the last two financial years confirmed, with any gap and its expected completion date.
                2. A revenue recognition memo covering multi-year contracts, implementation fees and usage pricing, reviewed by your accountants.
                3. Deferred revenue reconciled to signed contracts at the last year end.
                4. Any expected audit adjustments listed and disclosed to the board.

                ## Notes
                Recognition rules are a professional call. Have your auditors or accounting advisers review the memo rather than relying on internal judgement.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Audited accounts for the latest year, or a dated audit plan, plus a revenue recognition memo reviewed by external accountants."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm with the auditors where the latest year's audit stands"
                - "Draft a revenue recognition memo for each contract type you sell"
                - "Send the memo to your accountants for review"
                - "Reconcile deferred revenue to signed contracts at year end"
                - "Book next year's audit before the financial year closes @recurring(yearly)"
            - name: Round deal team and time budget
              description: |-
                ## Purpose
                A growth round usually takes three to six months and can absorb half of a CEO's week and most of a CFO's, while the business still has to hit its plan. Naming who runs the process, who answers diligence, who keeps operations moving and how many hours each can give stops the round from quietly stalling the company.

                ## Milestones
                1. A named process lead, diligence lead and operations cover, each confirmed in writing.
                2. An hours-per-week budget for the CEO, CFO and functional heads during the raise.
                3. A short list of decisions the CEO keeps and those delegated while raising.
                4. The deal team plan shared with the board chair.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written deal team plan naming the process lead, diligence lead and operations cover, with weekly hour budgets shared with the board."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down who will lead the process, diligence and operations"
                - "Estimate the weekly hours the CEO and CFO can give without missing plan"
                - "List the decisions the CEO hands to the leadership team while raising"
                - "Share the deal team plan with the board chair"
            - name: Existing investor and board alignment
              description: |-
                ## Purpose
                Before a single new fund is approached, existing investors need to say whether they will take their pro rata, whether any want to lead, and which consents the shareholders' agreement requires for a new senior class of shares. Surprises from insiders late in a growth round, such as a withheld consent or a sudden wish to lead, are a common cause of failed or repriced deals.

                ## Milestones
                1. Each existing investor's pro rata intention and appetite to lead recorded with the date it was given.
                2. Consents, pre-emption rights and vetoes in the current agreements listed with the threshold needed for each.
                3. Agreement at board level on whether insiders will set or influence price.
                4. Any investor with a conflicting interest identified, with how that will be handled.

                ## Notes
                Ask counsel to read the current shareholders' agreement and articles for the consent list. Do not rely on memory of what was agreed at Series A.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of every consent the round needs, plus each existing investor's stated pro rata and lead intentions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask counsel to list the consents and pre-emption rights in current agreements"
                - "Call each existing investor about pro rata and appetite to lead"
                - "Record each answer and the date it was given"
                - "Agree with the board how insiders will take part in pricing"
            - name: Mapping growth, crossover and late-stage funds
              description: |-
                ## Purpose
                At Series B and beyond the investor field changes shape: multi-stage venture firms with growth funds, dedicated growth equity firms, crossover funds that also buy listed shares, private equity growth teams and sovereign or pension investors. Each type has different cheque sizes, return targets, governance habits and time horizons, so knowing which types suit your company shapes the whole process.

                ## Milestones
                1. A short profile of each investor type, with typical cheque range and governance style, built from conversations with advisers or peers.
                2. The two or three types that suit your growth rate, profitability and exit horizon chosen.
                3. Fifteen to thirty named funds in those types, each with the partner most relevant to your sector.
                4. Funds that recently backed a direct competitor marked.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A map of investor types with reasons for fit, and fifteen to thirty named growth funds and partners in the chosen types."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask two founders who raised a Series B or C which fund types they met"
                - "Write a short profile of each investor type and its usual terms"
                - "Choose the investor types that fit your growth and exit horizon"
                - "Name fifteen to thirty funds and the relevant partner at each"
                - "Refresh the fund map for new funds and partner moves @recurring(yearly)"
            - name: Growth round process timeline
              description: |-
                ## Purpose
                Well-run growth rounds compress first meetings into two or three weeks so that term sheets arrive close together, which is where competitive tension comes from. A dated plan from preparation through first meetings, management presentations, term sheets, confirmatory diligence and completion makes the pace deliberate and shows the board when cash should land.

                ## Milestones
                1. A week-by-week timeline from preparation to expected completion, typically twelve to twenty weeks.
                2. A first-meeting window of two to three weeks fixed in the calendar.
                3. Dates to avoid, such as quarter end, holidays and audit fieldwork, marked.
                4. The main risks to the timeline written down with an owner for each.

                ## Notes
                Start from the **Risk register** template for the timeline risks. Launching soon after a strong quarter closes gives investors fresh numbers to work from.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated week-by-week round timeline with a fixed first-meeting window and a risk list with owners, agreed by the deal team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark quarter ends, holidays and audit dates on a twenty-week calendar"
                - "Set a two to three week window for first investor meetings"
                - "Draft the week-by-week plan from preparation to completion"
                - "List the top risks to the timeline and give each an owner"
            - name: Monthly investor-grade metrics close
              description: |-
                ## Purpose
                Once a growth process starts, funds ask for last month's numbers within days of month end and compare them with what you said before. A monthly close that produces the headline metrics on fixed definitions by a set working day keeps every conversation current and shows the finance discipline growth investors are paying for.

                ## Milestones
                1. A close calendar that produces headline metrics by a fixed working day each month.
                2. A metrics sheet on the signed-off definitions, holding the last twelve months.
                3. A named reviewer who checks the sheet before anything leaves the company.
                4. Three consecutive months closed on time.

                ## Notes
                Start from the **Metrics log** template. Keep the monthly sheet separate from the board pack so it can be shared with funds without editing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Headline metrics closed by the agreed working day for three months running, on the signed-off definitions."
                cadence: rolling
              tasks:
                - "Agree with finance the working day headline metrics will be ready"
                - "Set up the monthly metrics sheet from the metrics log template"
                - "Close and review headline metrics for the previous month @recurring(monthly:5)"
                - "Note a reason beside any metric that moved above the agreed threshold"
            - name: Pre-round relationships with growth partners
              description: |-
                ## Purpose
                Partners who lead growth rounds like to have watched a company for a year or more before investing, and the one who leads yours is often someone you met long before you needed money. A light, regular cadence of catch-ups with a shortlist of partners means that at launch they already know the numbers, the team and how reliably you hit plan.

                ## Milestones
                1. Eight to twelve growth partners on a relationship shortlist.
                2. A first meeting held with at least half of them, with no ask attached.
                3. A short note after each meeting on what they asked and what they would need to see.
                4. A record showing each partner heard from you at least twice before launch.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least eight growth partners met before launch, each with dated notes of what they would need to see."
                cadence: rolling
              tasks:
                - "Choose eight to twelve growth partners to build relationships with"
                - "Offer each a short catch-up with no ask attached"
                - "Write down what each partner asks and would need to see"
                - "Send each shortlisted partner a brief progress note @recurring(quarterly)"
            - name: Weekly round process stand-up
              description: |-
                ## Purpose
                During a live process, momentum leaks away in small ways: a fund waiting two days for a model, a diligence call nobody scheduled, a partner meeting that slipped a week. A thirty-minute weekly stand-up of the deal team that reviews every fund's stage, open requests and next steps keeps the round at the pace the timeline set.

                ## Milestones
                1. A fixed weekly slot with the deal team and a standing agenda.
                2. Every active fund reviewed each week with its next step and owner.
                3. Open diligence requests older than three working days raised and reassigned.
                4. Notes from each stand-up saved in one place.

                ## Notes
                Start from the **Meeting notes** template for the stand-up record.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly stand-up held throughout the live process, with saved notes listing each fund's next step and owner."
                cadence: rolling
              tasks:
                - "Book a thirty-minute weekly slot for the deal team"
                - "Write the standing agenda covering funds, requests and next steps"
                - "Run the round stand-up and record next steps @recurring(weekly:mon)"
                - "Escalate any request older than three working days to its owner"
            - name: Growth investor pipeline tracker
              description: |-
                ## Purpose
                With twenty or more funds in play, each at a different stage and each with a partner, a principal and an associate involved, memory is not enough. A single tracker showing stage, people, last contact, open questions and likelihood lets the CEO see where tension exists and where a fund has quietly gone cold.

                ## Milestones
                1. A tracker with stages from first meeting to term sheet, with entry criteria for each stage.
                2. Every fund contacted entered with partner, associate and last contact date.
                3. Each fund's open questions and stated concerns recorded.
                4. A weekly count of how many funds sit at each stage.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker holding every fund in the process, with stage counts recorded each week of the live round."
                cadence: rolling
              tasks:
                - "Set up the tracker with stages and entry criteria for each"
                - "Enter every fund contacted with partner, associate and last contact date"
                - "Update the stage and open questions after each investor contact"
                - "Record the count of funds at each stage @recurring(weekly:thu)"
            - name: Diligence request log and response standard
              description: |-
                ## Purpose
                Hundreds of diligence questions arrive in a growth round from several funds and their advisers, often overlapping and often marked urgent. A single request log with an owner, due date and answer for each question, plus a standard turnaround such as two working days, stops duplicate work and makes the company look as organised as its numbers.

                ## Milestones
                1. One log for every diligence request across all funds and advisers.
                2. An agreed turnaround standard for routine and for complex requests.
                3. Repeated questions answered once and the answer reused.
                4. Turnaround measured each week and shared with the deal team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A single diligence log in which every request has an owner and due date, with weekly turnaround reported against the agreed standard."
                cadence: rolling
              tasks:
                - "Create a request log with columns for fund, question, owner, due date and answer"
                - "Agree a turnaround standard for routine and complex requests"
                - "Ask the agent to group duplicate questions in the log"
                - "Review overdue requests and turnaround with the deal team @recurring(weekly:wed)"
            - name: Public and private comparables refresh
              description: |-
                ## Purpose
                Public companies in your sector and recent private rounds together set the range growth investors price from, and the gap between them moves every quarter. Keeping a short comparables sheet current means you can discuss valuation with evidence and recognise when an offer is out of line in either direction.

                ## Milestones
                1. Eight to fifteen listed peers chosen, with a reason for each.
                2. Revenue multiples and growth rates for those peers updated from public filings or a data provider.
                3. Recent private rounds in your sector noted where figures are public.
                4. A one-paragraph note on what moved since last quarter.

                ## Notes
                This is context for discussion with your advisers, not a valuation. A formal valuation is a professional's job.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparables sheet of eight to fifteen listed peers and recent private rounds, refreshed each quarter with a written note on changes."
                cadence: rolling
              tasks:
                - "Choose eight to fifteen listed peers and note why each is comparable"
                - "Record each peer's revenue multiple and growth rate from recent filings"
                - "Note recent private rounds in your sector where figures are public"
                - "Refresh the comparables sheet and write what moved @recurring(quarterly)"
            - name: Plan versus actual during the raise
              description: |-
                ## Purpose
                Funds watch the months that pass during a process more closely than any history, because those months show whether the plan in the model is real. Tracking actuals against plan for each month of the raise, and briefing investors on a miss before they find it, protects valuation better than any argument made after the fact.

                ## Milestones
                1. The plan months that fall within the process timeline identified.
                2. Each month's actual revenue, burn and pipeline compared with plan within a week of month end.
                3. A short explanation prepared for any variance above an agreed threshold.
                4. Active funds briefed on material variances by the CEO or CFO.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Actuals compared with plan for every month of the raise within a week of month end, with material variances briefed to active funds."
                cadence: rolling
              tasks:
                - "Mark which plan months fall inside the process timeline"
                - "Agree the variance threshold that triggers an investor briefing"
                - "Compare revenue, burn and pipeline with plan @recurring(monthly:12)"
                - "Draft a short variance note for any miss before investors ask"
            - name: Quarterly growth readiness board review
              description: |-
                ## Purpose
                Boards often discuss the next round only when cash is short, which leaves no time to fix what investors will test. A standing quarterly item where the board reviews the readiness scorecard, runway and partner relationships keeps the decision to launch planned rather than forced.

                ## Milestones
                1. A standing readiness item on the quarterly board agenda.
                2. The scorecard, runway and relationship shortlist included in each board pack.
                3. One agreed action per quarter on the weakest readiness measure.
                4. The launch window reconfirmed or moved at each review.

                ## Notes
                Start from the **Board meeting** template for the agenda item.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive board meetings each include the readiness item, with one recorded action and a confirmed launch window."
                cadence: cyclic
              tasks:
                - "Ask the board chair to add a standing readiness item"
                - "Prepare a one-page readiness update for the board pack @recurring(quarterly)"
                - "Record one action on the weakest measure after each review"
                - "Note whether the launch window holds or moves"
            - name: Growth funding market watch
              description: |-
                ## Purpose
                The supply of growth capital swings sharply: in some years funds compete to pre-empt, in others they demand profitability and structure. A fifteen-minute monthly read of deal volumes, valuation trends and fund closings tells you whether the window is opening or closing before you commit to a launch date.

                ## Milestones
                1. Three or four reliable sources of growth funding data chosen.
                2. A monthly note of deal volume, typical multiples and notable rounds in your sector.
                3. An open, neutral or tight judgement recorded each month.
                4. The latest judgement shared with the board before any launch decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Twelve monthly market notes, each ending in an open, neutral or tight judgement, shared with the board before the launch decision."
                cadence: rolling
              tasks:
                - "Pick three or four sources of growth funding data"
                - "Write a short market note ending in an open, neutral or tight call @recurring(monthly:20)"
                - "Note which growth funds have closed new funds recently"
                - "Share the latest market note with the board before a launch decision"
            - name: Learning growth-stage preference and protection terms
              description: |-
                ## Purpose
                Senior or participating liquidation preferences, IPO ratchets, redemption rights, anti-dilution formulas and wider consent rights all appear more often in growth term sheets than at seed or Series A. Understanding how each works, and seeing what each would pay out in a modest exit, means you can talk to counsel and investors as a peer instead of discovering the cost later.

                ## Milestones
                1. A plain-language note on each common growth term and what it does.
                2. Each term's payout shown in three exit scenarios: below, at and above the round price.
                3. Questions for counsel listed for any term still unclear.
                4. A walk-through of the note held with counsel.

                ## Notes
                This builds understanding. Whether a specific term is acceptable for your company is a judgement for your counsel and board.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note explaining at least eight growth terms, each with a three-scenario payout example, reviewed with counsel."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the growth terms you have heard of but could not explain"
                - "Write a plain-language note on each term"
                - "Work out each term's payout below, at and above the round price"
                - "Walk through the note with counsel and record their corrections"
            - name: How growth investors value a company
              description: |-
                ## Purpose
                Most growth funds work backwards from an exit: a target return over a holding period, an assumed exit multiple and your forecast together set the price they can pay today. Learning that arithmetic explains why two funds looking at the same numbers offer very different valuations, and shows which of your numbers actually move the price.

                ## Milestones
                1. The return-based method worked through on your own plan with a sample target multiple and holding period.
                2. The effect on price of changing growth, margin and exit multiple shown in a small table.
                3. The two or three inputs that move your price most named.
                4. A short note on how revenue multiples and the rule of 40 are used in your sector.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked return-based valuation of your own plan with a sensitivity table naming the inputs that move price most."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read how a target return and holding period set a growth price"
                - "Work the method through on your plan with a sample target multiple"
                - "Build a sensitivity table for growth, margin and exit multiple"
                - "Write down which inputs move your price most"
            - name: Reading a quality of earnings report
              description: |-
                ## Purpose
                Many growth investors commission an accounting firm to produce a quality of earnings report, which adjusts reported figures for one-off items, revenue timing and working capital. Knowing how these reports are built, and running a light version on yourself first, means fewer surprises in confirmatory diligence and better answers when adjustments are proposed.

                ## Milestones
                1. The usual sections understood: adjusted earnings, net debt, working capital and revenue analysis.
                2. A self-review listing likely adjustments, such as one-off costs, capitalised development and related-party items.
                3. An explanation ready for each likely adjustment.
                4. Your accountants asked whether a company-commissioned review would be worthwhile.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A self-review listing every likely quality of earnings adjustment with a prepared explanation, discussed with your accountants."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your accountants for a redacted sample quality of earnings report"
                - "List the adjustments a reviewer would likely make to your figures"
                - "Prepare a short explanation for each likely adjustment"
                - "Ask whether a company-commissioned review is worth the fee"
            - name: Management presentation rehearsal
              description: |-
                ## Purpose
                Expect a two to four hour management presentation in which each functional head presents their area and takes questions from the fund's team. Rehearsing it twice with a tough panel, ideally a friendly investor and a board member, turns a set of separate talks into one consistent account of how the company grows.

                ## Milestones
                1. An agenda with timings and a presenter for each section.
                2. Each functional head's section drafted against the shared definitions and plan.
                3. Two full rehearsals held with outside questioners.
                4. The ten hardest questions from rehearsal answered in writing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "Two full rehearsals held with outside questioners, and written answers to the ten hardest questions raised."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Draft the presentation agenda with timings and presenters"
                - "Ask each functional head to draft their section against the shared plan"
                - "Book a friendly investor and a board member as the rehearsal panel"
                - "Write answers to the ten hardest questions from rehearsal"
            - name: Preparing functional leaders for diligence interviews
              description: |-
                ## Purpose
                In a growth round, investors and their advisers interview the heads of sales, product, engineering and people directly, and inconsistent answers between them get noticed. A short briefing for each leader on what will be asked, which numbers to use and what stays confidential gives them confidence and protects the company.

                ## Milestones
                1. Each leader briefed on the likely questions for their function.
                2. A one-page fact sheet per function using the signed-off metrics.
                3. A clear rule on what may and may not be shared, agreed with counsel.
                4. One practice interview held with each leader.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every functional head has a fact sheet, a confidentiality briefing and one completed practice interview before diligence calls start."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the functional heads investors are likely to interview"
                - "Prepare a one-page fact sheet for each function"
                - "Agree with counsel what leaders may share in interviews"
                - "Run one practice interview with each leader"
            - name: Inside a growth fund's investment committee
              description: |-
                ## Purpose
                A partner who likes your company still has to win an investment committee, usually with a written memo covering market, competition, risks and returns. Understanding what goes into that memo, and asking your lead partner what the committee will worry about, lets you hand over the evidence they need before the meeting rather than after it.

                ## Milestones
                1. The stages from first meeting to final committee written down for each fund in late stages.
                2. Each lead partner asked what their committee is likely to challenge.
                3. Evidence for each likely challenge supplied ahead of committee.
                4. The outcome and any conditions from each committee recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "For each fund reaching committee, its likely challenges are recorded and evidence for each was sent before the meeting."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask each late-stage fund to explain its committee stages"
                - "Ask the lead partner what the committee will challenge first"
                - "Send evidence for each likely challenge before the meeting"
                - "Record each committee outcome and any conditions attached"
            - name: Customer reference and expert call programme
              description: |-
                ## Purpose
                Customers will get calls from growth investors, and many funds also commission calls through expert networks with former employees, competitors and customers you did not choose. Preparing a reference list across segments, briefing those customers and anticipating what independent calls will hear keeps reference checks from becoming the weakest part of diligence.

                ## Milestones
                1. Eight to twelve customers across segments agreed to act as references.
                2. Each reference briefed on timing and given a named contact at the company.
                3. A limit on how many calls each reference takes agreed and tracked.
                4. Likely themes from independent expert calls anticipated and answered.

                ## Notes
                Never script what a customer says. Brief them on timing and context only; coached references are easy to spot.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least eight briefed customer references across segments, with a call limit per reference and prepared answers to likely expert call themes."
                cadence: rolling
              tasks:
                - "Ask account managers to suggest twelve happy customers across segments"
                - "Request permission from each customer to act as a reference"
                - "Log each reference call and thank the customer afterwards"
                - "Remove churned or unhappy accounts from the reference list @recurring(quarterly)"
            - name: Deciding whether to hire a growth round adviser
              description: |-
                ## Purpose
                Some companies run growth rounds themselves through existing relationships, while others hire an investment bank or specialist adviser to widen the field, manage tension and handle structure, usually for a success fee. Comparing the two routes for your situation, and interviewing advisers if needed, is a decision to make before the first fund meeting is booked.

                ## Milestones
                1. A written case for running the round directly versus with an adviser.
                2. Three advisers interviewed if the adviser route is chosen, each with recent comparable mandates.
                3. Fee structure, tail period and exclusivity compared side by side.
                4. A decision recorded and, if hiring, an engagement letter reviewed by counsel.

                ## Notes
                Start from the **Vendor** template. Read the tail clause carefully: it decides whether a fee is owed on investors you introduced yourself.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on running the round directly or with an adviser, with three advisers compared on fees, tail and exclusivity if hiring."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the case for running the round with and without an adviser"
                - "Ask two founders which advisers ran their growth rounds"
                - "Interview three advisers about recent comparable mandates"
                - "Compare fees, tail periods and exclusivity side by side"
                - "Have counsel review any engagement letter before signing"
            - name: Choosing deal counsel for a growth round
              description: |-
                ## Purpose
                Counsel who mainly handles early rounds can be slow or out of depth once a round brings new share classes, side letters, regulatory filings and cross-border investors. Choosing a firm with recent growth deals in your jurisdiction, on an agreed fee estimate or cap, matters more at this stage than at any earlier round.

                ## Milestones
                1. Three firms asked for recent growth round experience in your jurisdiction.
                2. Fee estimates or caps compared for a standard and a complex scenario.
                3. The partner and associate who will do the work met in person or on video.
                4. A firm appointed with an engagement letter on file.

                ## Notes
                Start from the **Vendor** template. Ask how the firm handles the lead investor's legal costs, which the company is often asked to cover up to a cap.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Deal counsel appointed after comparing three firms on growth experience and fee estimates, with an engagement letter on file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask three firms for their recent growth round deals"
                - "Request fee estimates for a standard and a complex round"
                - "Meet the partner and associate who would do the work"
                - "Sign the engagement letter with the chosen firm"
            - name: Primary and secondary mix in the round
              description: |-
                ## Purpose
                Some growth investors want to buy more than the company needs to raise, and offer to buy existing shares from founders, early employees or seed investors as part of the round. Deciding in advance how much secondary the board will allow, at what price relative to the new shares and who may sell, prevents a rushed allocation that upsets the team or the incoming investor.

                ## Milestones
                1. The board's position on including a secondary component recorded.
                2. A cap on secondary as a share of the total round agreed.
                3. Eligibility rules for sellers written down, such as minimum tenure.
                4. Tax and pricing questions sent to advisers before any offer is accepted.

                ## Notes
                Running a tender or a wider secondary programme is separate work. The aim here is only the policy for this round.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A board-approved policy covering whether secondary is allowed in the round, its cap and seller eligibility, with adviser questions sent."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the board whether a secondary component is acceptable in principle"
                - "Propose a cap on secondary as a share of the round"
                - "Write eligibility rules for who may sell"
                - "Send tax and pricing questions to your advisers"
            - name: Headline valuation versus clean terms
              description: |-
                ## Purpose
                Higher headline prices often come with structure attached, such as a senior preference, a ratchet or a minimum return, which can leave ordinary shareholders worse off in all but the best outcomes. Agreeing with the board beforehand how you will compare a high price with heavy structure against a lower price with clean terms means the choice is made on payouts, not press headlines.

                ## Milestones
                1. A comparison method agreed: payouts to ordinary shares and to each preferred class at several exit values.
                2. A line drawn on which structural terms the board will consider at all.
                3. Each serious offer run through the comparison.
                4. The decision and its reasoning recorded in board minutes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every serious offer compared on payouts at several exit values, with the chosen offer and reasoning recorded in board minutes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree with the board to compare offers on payouts, not headline price"
                - "Set the exit values to test, from modest to strong"
                - "Run each serious offer through the payout comparison"
                - "Record the chosen offer and reasoning in the board minutes"
            - name: Pre-emptive offer response plan
              description: |-
                ## Purpose
                Strong scale-ups often receive pre-emptive offers from growth funds months before they planned to raise, with a short deadline and a price that looks generous. A plan written in advance, setting out who decides, what the floor is and which two or three funds would get a call for a quick market check, stops a good company accepting the first number out of flattery or fear.

                ## Milestones
                1. A decision group and response time agreed with the board.
                2. A minimum price and a list of unacceptable terms set in advance.
                3. Two or three funds named who would get a call if an offer arrives.
                4. Any pre-emptive offer received logged with date, terms and response.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A board-approved pre-emptive offer plan naming the decision group, floor terms and the funds to call for a quick market check."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree with the board who decides on a pre-emptive offer"
                - "Set the minimum price and unacceptable terms in advance"
                - "Name two or three funds you would call for a quick check"
                - "Log any pre-emptive offer received with its terms and response"
            - name: Lead investor selection scorecard
              description: |-
                ## Purpose
                At growth stage the lead investor's fund matters as much as the partner: its size, its age, its reserves for follow-on rounds, its record taking companies to listing or sale, and how it behaves when a company misses plan. Scoring finalists on the same criteria, with founder references weighted heavily, makes the choice explainable to the board and the team.

                ## Milestones
                1. Six to eight criteria agreed, such as partner fit, fund vintage, reserves, follow-on record and board behaviour.
                2. Each finalist scored, with evidence for each score.
                3. Findings from founders the fund backed folded into the scores.
                4. The selected lead and the reasons recorded.

                ## Notes
                Ask each fund how much of the current fund is still uninvested and what it reserves for follow-on. A fund late in its life may push for an earlier exit than you want.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every finalist scored on six to eight agreed criteria with evidence, and the selected lead and reasons recorded for the board."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree six to eight lead selection criteria with the board"
                - "Ask each finalist about fund vintage, reserves and follow-on record"
                - "Score each finalist with evidence for each criterion"
                - "Record the chosen lead and the reasons for the board"
            - name: Diligence red flag remediation
              description: |-
                ## Purpose
                Unassigned intellectual property from early contractors, customer contracts with change-of-control clauses, data protection gaps, unregistered sales taxes abroad and open employment disputes all surface in growth diligence, which reaches much further than earlier rounds. Finding and fixing them before launch is cheaper and calmer than fixing them under a signing deadline with a fund's counsel watching.

                ## Milestones
                1. A self-diligence sweep across corporate records, contracts, intellectual property, data, tax and employment.
                2. Every issue logged with severity, owner and fix date.
                3. High-severity issues fixed, or explained in an agreed note, before launch.
                4. A short disclosure note drafted for issues that cannot be fixed in time.

                ## Notes
                Start from the **Remediation plan** template. Ask counsel which issues need formal disclosure against the warranties rather than a quiet fix.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A self-diligence log with every issue owned and dated, and all high-severity issues fixed or explained before launch."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Ask counsel for a growth-round self-diligence checklist"
                - "Check every contractor and employee signed an intellectual property assignment"
                - "List customer contracts with change-of-control or assignment clauses"
                - "Log every issue with severity, owner and fix date"
                - "Draft a disclosure note for issues that cannot be fixed in time"
            - name: Three-year value creation plan
              description: |-
                ## Purpose
                Every growth investor underwrites a specific plan: which markets, products, hires and perhaps acquisitions turn today's revenue into the figure that justifies their price. Writing that plan as a short document, with the investments the round pays for and the measures that show it working, gives investors something concrete to back and gives the board a yardstick after completion.

                ## Milestones
                1. Three to five growth levers named, such as a new region, a new product line or a move upmarket.
                2. The investment each lever needs and the revenue it should add, with assumptions stated.
                3. Quarterly measures that show whether each lever is working.
                4. The plan reviewed by the board and used in the management presentation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board-reviewed three-year plan naming three to five growth levers, their investment, expected impact and quarterly measures."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Name the three to five growth levers the round will pay for"
                - "Estimate the investment and expected revenue for each lever"
                - "Choose quarterly measures that show each lever working"
                - "Ask the agent to draft a two-page summary of the plan"
                - "Review the plan with the board before launch"
            - name: Management presentation day
              description: |-
                ## Purpose
                The day a growth fund's team spends with your leadership is often where interest becomes conviction or fades. Treating it as an event, with the room, materials, product demonstrations, data access and follow-up all planned, lets the team perform at its best with nothing practical distracting from the content.

                ## Milestones
                1. Date, venue or video set-up, attendees and agenda confirmed with the fund.
                2. Materials, demonstrations and data access tested the day before.
                3. Every question asked logged with an owner.
                4. Follow-up answers sent within the promised time.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The management presentation delivered to plan, with every question logged and all follow-ups sent within the promised time."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm date, attendees and agenda with the fund"
                - "Test the room, video link, demonstrations and data access the day before"
                - "Assign a note-taker to log every question and its owner"
                - "Send all follow-up answers within the promised time"
            - name: Launch fortnight of first meetings
              description: |-
                ## Purpose
                The first two to three weeks of a growth process largely decide its outcome, because funds that meet you in the same window move at a similar pace and end up competing. Planning the launch fortnight like an event, with meetings clustered, materials sent ahead and the CEO's diary cleared, gives the round its best chance of producing several term sheets together.

                ## Milestones
                1. Fifteen to twenty-five first meetings booked inside the launch window.
                2. Pre-read materials sent to each fund at least two days ahead.
                3. The CEO's and CFO's diaries cleared of non-essential commitments for the window.
                4. A same-day note after each meeting with next step and level of interest.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Fifteen or more first meetings held inside a two to three week window, each with a same-day note of next step and interest."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Choose the start date of the launch window"
                - "Book first meetings so they cluster within the window"
                - "Clear non-essential commitments from the CEO's and CFO's diaries"
                - "Send pre-read materials at least two days before each meeting"
                - "Write a same-day note after each first meeting"
            - name: Confirmatory diligence sprint
              description: |-
                ## Purpose
                After a term sheet is signed, the lead fund usually commissions financial, legal, commercial, technology and sometimes cyber or insurance reviews over four to eight weeks. Running this as a planned sprint, with a calendar of workstreams, named company contacts and a weekly issues list, keeps exclusivity from expiring with diligence unfinished.

                ## Milestones
                1. A workstream calendar agreed with the lead fund and its advisers.
                2. A company contact named for each workstream.
                3. A weekly issues list shared and worked down with the lead.
                4. All workstreams closed with no open item that blocks signing.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All confirmatory workstreams closed inside the exclusivity period, with a final issues list showing nothing that blocks signing."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the lead fund for its list of confirmatory workstreams and advisers"
                - "Name a company contact for each workstream"
                - "Agree a weekly issues call with the lead fund"
                - "Track every open item to closure before exclusivity ends"
            - name: Regulatory clearances for a large investment
              description: |-
                ## Purpose
                Large growth investments can trigger merger control filings or foreign investment screening, particularly when the investor is foreign, takes a large stake or gains board rights, or when the company works in sensitive sectors such as defence, data or critical infrastructure. Finding out early whether a filing is needed protects the timeline, since some reviews take weeks or months and can block completion.

                ## Milestones
                1. Counsel's view recorded on whether merger control or investment screening applies.
                2. The jurisdictions where a filing may be needed listed.
                3. The information the investor and the company must supply gathered.
                4. Expected review periods built into the round timeline.

                ## Notes
                Thresholds and sensitive-sector rules differ by country and change often. Rely on counsel's current view, not on what applied in a past round.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written counsel view on required filings, with jurisdictions listed and expected review periods added to the round timeline."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask counsel whether the investment could trigger any filing"
                - "List each country where the company or investor has a filing link"
                - "Gather the information each filing would need"
                - "Add expected review periods to the round timeline"
            - name: Round announcement and press plan
              description: |-
                ## Purpose
                Announcing a growth round is a recruiting and sales moment as much as a finance one, but announcing too early, with the wrong figure, or before customers and staff hear it causes real problems. A plan agreeing what will be said, by whom, when and with which investor quotes, timed after completion, makes the announcement work for the business.

                ## Milestones
                1. Agreement with the lead investor on what may be disclosed, including amount and valuation.
                2. A press release and quotes approved by the company and investors.
                3. Customers, partners and staff told before the public announcement.
                4. Coverage and inbound recruiting interest recorded in the two weeks after.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The round announced after completion with investor-approved wording, staff and key customers told first, and coverage recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree with the lead investor what may be disclosed publicly"
                - "Draft the press release and gather investor quotes"
                - "Plan who tells staff, customers and partners before the release"
                - "Record coverage and recruiting interest for two weeks after"
            - name: Telling the team about the growth round
              description: |-
                ## Purpose
                Employees hear about a large round through rumours, press or a sudden change in hiring pace, and many will wonder what it means for their options. An all-hands and a written note, timed with completion, explaining why the company raised, what the money funds and what changes for staff builds confidence and heads off misunderstanding about share value.

                ## Milestones
                1. An all-hands date set for shortly after completion.
                2. A short written note on why the company raised and what the money funds.
                3. A prepared answer on what the round means for employee options, reviewed by counsel.
                4. Questions from staff collected and answered within a week.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An all-hands held after completion, with a written note sent and every staff question answered within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set the all-hands date for shortly after completion"
                - "Ask the agent to draft the staff note on why the company raised"
                - "Prepare a counsel-reviewed answer on what the round means for options"
                - "Collect staff questions and answer them within a week"
            - name: First outside round for a profitable bootstrapped company
              description: |-
                ## Purpose
                Founders who have built a profitable company without venture capital are often approached by growth funds offering a large minority investment. The trade-offs differ from a typical Series B: the founder shares control rights for the first time, and board seats, consent rights and exit timelines need careful thought before any conversation goes far.

                ## Milestones
                1. A written answer to why outside money makes sense now and what it would fund.
                2. A list of rights the founder is and is not willing to share.
                3. Conversations held with two founders who took a first growth investment after bootstrapping.
                4. A decision to proceed, wait or decline recorded.

                ## Notes
                Many of these founders also want some personal liquidity. Be clear with yourself how much of the interest is about the company and how much about de-risking your own position.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded proceed, wait or decline decision, with the reasons, the rights the founder will share and two peer conversations noted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down why outside money would help now and what it would fund"
                - "List the rights you would and would not share with an investor"
                - "Speak to two founders who took growth money after bootstrapping"
                - "Record a proceed, wait or decline decision"
            - name: Growth equity for a corporate carve-out or spin-out
              description: |-
                ## Purpose
                Enterprise teams sometimes spin a division into a separate company with a growth investor alongside the parent. These deals add work an independent scale-up never faces: transitional services from the parent, separating contracts, staff and intellectual property, and agreeing how the parent and the new investor share governance.

                ## Milestones
                1. A separation list covering contracts, staff, systems and intellectual property.
                2. A transitional services outline with the parent, with durations and costs.
                3. Governance between parent and new investor described, including board seats and consent rights.
                4. Stand-alone financials prepared for the carved-out business.

                ## Notes
                Separation accounting and tax structuring are specialist work. Bring in advisers with carve-out experience early.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A separation list, a transitional services outline and stand-alone financials ready to share with growth investors."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List the contracts, staff, systems and intellectual property that must separate"
                - "Outline the transitional services the parent will provide and for how long"
                - "Describe how the parent and a new investor would share governance"
                - "Ask finance to prepare stand-alone financials for the business"
            - name: First growth round as CFO
              description: |-
                ## Purpose
                Plenty of finance leaders run their first growth round only after joining a scale-up, and the role shifts sharply: the CFO becomes the main counterpart for diligence teams, owns the model and often negotiates detail alongside counsel. A short plan for the CFO's own preparation, with a mentor who has done it and a clear split with the CEO, keeps the finance function from becoming the bottleneck.

                ## Milestones
                1. A clear split of responsibilities between CEO and CFO written down.
                2. A mentor CFO who has run at least one growth round agreed.
                3. Gaps in the finance team covered for the duration of the raise.
                4. A personal checklist of the CFO's deliverables, with dates.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written CEO and CFO split, a mentor arranged and a dated checklist of CFO deliverables for the round."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree with the CEO who owns which parts of the round"
                - "Ask a CFO who has run a growth round to mentor you"
                - "Arrange cover for the finance team during the raise"
                - "Talk through the process with your mentor CFO @recurring(monthly:8)"
            - name: Protecting the business while the CEO raises
              description: |-
                ## Purpose
                Founder-CEOs often find during a growth round that the plan slips because they are away from the business, which then weakens the round itself. Agreeing who runs weekly operations, which metrics the CEO still checks and a short weekly hand-over keeps the company on plan while the CEO is in investor meetings.

                ## Milestones
                1. A named leader running weekly operations during the raise.
                2. Five metrics the CEO checks each week regardless of meetings.
                3. A weekly thirty-minute hand-over between the CEO and the operations lead.
                4. The plan met for every month of the process.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly hand-overs held throughout the raise, with the five agreed metrics checked and the plan met each month of the process."
                cadence: rolling
              tasks:
                - "Name the leader who will run weekly operations during the raise"
                - "Choose the five metrics you will check each week"
                - "Hold the operations hand-over with your stand-in @recurring(weekly:fri)"
                - "Note any decision the stand-in escalated and how it was resolved"
            - name: Taking investment from sovereign or international funds
              description: |-
                ## Purpose
                Larger growth rounds increasingly include sovereign wealth funds, pension funds or foreign growth investors, which bring longer horizons but also extra process: identity checks in both directions, sanctions screening, side letters and sometimes requests for a local presence. Planning for these early stops a late surprise from delaying completion.

                ## Milestones
                1. Each international investor's own approval steps and timing noted.
                2. Identity and sanctions checks on the investor completed with counsel.
                3. Side letter requests listed and reviewed by counsel.
                4. Any request for a local presence, local hiring or extra information rights assessed by the board.

                ## Notes
                Ask counsel to screen any foreign investor for sanctions and investment screening rules before the term sheet, not after.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each international investor screened with counsel, its approval steps noted and every side letter request reviewed before signing."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask each international investor to describe its approval steps"
                - "Ask counsel to run identity and sanctions checks on the investor"
                - "List every side letter request with counsel's view"
                - "Take any local presence or extra information requests to the board"
            - name: Tranched growth round tied to milestones
              description: |-
                ## Purpose
                Capital-intensive companies, such as hardware, life sciences or infrastructure businesses, sometimes raise a growth round in tranches, with later money released when named milestones are met. Milestones that are measurable, within the company's control and sensibly dated protect the company from losing the second tranche over a definition dispute.

                ## Milestones
                1. Each milestone written with a measure, a deadline and who confirms it.
                2. What happens if a milestone is missed or partly met written in plain language.
                3. The cash plan tested for the case where the later tranche is delayed.
                4. Counsel's review of the milestone wording completed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every tranche milestone written with a measure, deadline and confirmer, and the cash plan tested for a delayed tranche."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write each proposed milestone with a measure and deadline"
                - "Name who confirms each milestone has been met"
                - "Test the cash plan if the later tranche arrives six months late"
                - "Ask counsel to review the milestone wording"
            - name: Crossover round before a listing
              description: |-
                ## Purpose
                In the last private round before an initial public offering, crossover funds that also invest in listed shares may lead, often aiming to build a position they keep after listing. Understanding what they look for, such as public-company reporting quality and a credible route to market, and what they ask in return, such as IPO ratchets, helps the board decide whether such a round fits its listing plan.

                ## Milestones
                1. The listing horizon the board is considering written down.
                2. Crossover investors' expectations on reporting and governance noted from conversations.
                3. Terms commonly requested in pre-listing rounds listed for counsel to explain.
                4. A decision on whether to approach crossover funds recorded.

                ## Notes
                The wider listing programme, from governance to advisers, is separate work. Keep this project to the round itself.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded board decision on approaching crossover funds, based on their stated expectations and the terms they commonly seek."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down the listing horizon the board is considering"
                - "Meet two crossover funds to hear what they expect"
                - "List pre-listing terms such as IPO ratchets for counsel to explain"
                - "Meet a public-market investor who follows your sector @recurring(quarterly)"
                - "Record the board's decision on approaching crossover funds"
            - name: Structured growth equity review
              description: |-
                ## Purpose
                When markets are tight, some growth investors offer structured equity: a minimum return multiple, accruing dividends, redemption after a set period or warrants alongside the preferred shares. These features can bridge a valuation gap, but their cost compounds with time, so each one needs modelling across several exit values and holding periods before the board considers it.

                ## Milestones
                1. Each structural feature in the offer described in plain language.
                2. Payouts modelled at several exit values and at three, five and seven years.
                3. The effective cost compared with a straight preferred offer.
                4. Counsel's and the board's views recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every structured offer modelled across exit values and holding periods, compared with a straight offer, with counsel and board views recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Describe each structural feature in the offer in plain language"
                - "Model payouts at several exit values over three, five and seven years"
                - "Compare the effective cost with a straight preferred offer"
                - "Record counsel's and the board's views on the structure"
            - name: Co-lead and syndicate coordination
              description: |-
                ## Purpose
                Big growth rounds are often split between two co-leads or filled out by a syndicate of smaller funds and strategic investors, each with their own counsel, timelines and information demands. Agreeing allocations, who negotiates the documents and a single diligence channel prevents the round from moving at the pace of its slowest investor.

                ## Milestones
                1. Allocations between co-leads and syndicate members agreed in writing.
                2. One investor named to negotiate the documents for the group.
                3. A single channel for diligence requests across all investors.
                4. Every investor's internal approval date on one calendar.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Written allocations, a single negotiating investor, a shared diligence channel and every investor's approval date on one calendar."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree allocations between co-leads and syndicate members"
                - "Ask the investors to nominate one negotiator for the documents"
                - "Set up a single channel for diligence requests"
                - "Put every investor's approval date on one calendar"
            - name: First 100 days with the growth investor
              description: |-
                ## Purpose
                New growth investors arrive with expectations about reporting, senior hiring and the value creation plan, and the first quarter sets the tone of the relationship. Agreeing the reporting content, the senior hires the round pays for and a quarterly plan review within the first hundred days turns the investment into shared work rather than a surprise at the first board meeting.

                ## Milestones
                1. Reporting content and timing agreed with the new investor.
                2. Senior hires funded by the round prioritised, with a brief written for each.
                3. Value creation plan measures agreed as the shared yardstick.
                4. A first quarterly plan review held with the investor partner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Reporting, senior hiring priorities and plan measures agreed with the new investor, and the first quarterly plan review held within 100 days."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree reporting content and timing with the new investor"
                - "Write briefs for the senior hires the round funds"
                - "Confirm the value creation plan measures with the investor partner"
                - "Review value creation plan progress with the investor partner @recurring(quarterly)"
            - name: Growth round retrospective
              description: |-
                ## Purpose
                Within a few weeks of completion the details fade: which funds moved fastest, which questions caught the team out, where the timeline slipped. Writing a short retrospective while it is fresh, including the funds that passed and why, gives the next round, often only eighteen to thirty months away, a real head start.

                ## Milestones
                1. The round as it actually ran compared with the planned timeline.
                2. The reasons each declining fund gave, recorded.
                3. The five hardest diligence questions written down with better answers.
                4. Three changes for the next round agreed with the board.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written retrospective with actual versus planned timeline, reasons from declining funds and three agreed changes for the next round."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare the actual round timeline with the plan"
                - "Record the reasons each declining fund gave"
                - "Write better answers to the five hardest diligence questions"
                - "Agree three changes for the next round with the board"
---

# Growth Equity Rounds

This area is for founders, CFOs and leadership teams raising a Series B or later growth round, and for enterprise teams taking growth investment into a carved-out business. It starts with the foundations (readiness, round size, metric definitions, cohorts, audited numbers, the deal team and insider alignment), then the operating rhythm of a live process, the skills that growth terms and diligence demand, the decisions on advisers, structure and the lead investor, the dated events from the launch fortnight to the announcement, situations such as a first round after bootstrapping or a carve-out, and finally specialist work on crossover rounds, structured terms, syndicates and the first hundred days.

What repeats is a monthly metrics close and plan check, a weekly stand-up, pipeline count and diligence review while the round is live, quarterly comparables, relationship notes and a board readiness item, and a yearly audit booking. The Risk register, Metrics log, Meeting notes, Board meeting, Vendor and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
