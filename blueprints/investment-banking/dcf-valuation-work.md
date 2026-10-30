---
id: investment-banking.dcf-valuation-work
name: DCF Valuation Work
description: "A banker's DCF from first build to specialist cases: projection choices, WACC inputs, terminal value, sensitivities, football field pages and the routines that keep every version defensible."
category: business
version: 1.0.0
tags: [investment-banking, dcf-valuation-work, knowledge-worker, student, dcf, wacc, terminal-value, valuation]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - reading-queue
    - development-plan
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: DCF Valuation Work
          description: "Building a banker's DCF: projections from management or consensus, WACC, terminal value methods, sensitivity tables and a football field of outcomes."
          projects:
            - name: Unlevered free cash flow built from the three statements
              description: |-
                ## Purpose
                Every banker's DCF rests on one line: EBIT less cash taxes, plus depreciation and amortisation, less capex and the increase in net working capital. Rebuilding that line by hand from a real company's income statement, balance sheet and cash flow statement shows you where each number comes from, so you can defend it when an associate asks why free cash flow jumps in year three.

                ## Milestones
                1. A published annual report chosen and its three statements copied into a blank workbook.
                2. Unlevered free cash flow calculated for three historical years with every input linked, not typed.
                3. The result reconciled to the cash flow statement, with differences such as interest and lease payments explained in a note.
                4. A one-page sheet of the formula and its common traps saved where you can find it.

                ## Notes
                Use a public company, not a live deal. Practice files built from client data belong on the bank's systems, never in personal folders.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A workbook reconciling three years of unlevered free cash flow to a public company's cash flow statement, with each difference explained."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Download the latest annual report of a listed company you know well"
                - "Copy three years of income statement, balance sheet and cash flow lines into a blank sheet"
                - "Build EBIT to unlevered free cash flow with every cell linked"
                - "Reconcile your result to operating cash flow less capex and note the gaps"
                - "Write a one-page formula sheet listing the five traps you hit"
            - name: Learning the firm's DCF template
              description: |-
                ## Purpose
                Most banks and boutiques have a standard DCF template with fixed tabs, colour codes and output pages, and seniors expect yours to look like it. Learning its structure before your first staffing means deal nights go on assumptions, not on hunting for the cell that drives the discount factor.

                ## Milestones
                1. The template's tabs mapped on one page, from inputs through to the football field output.
                2. Every input cell, switch and named range listed with what it controls.
                3. A dummy company run through the template end to end, printing cleanly.
                4. Open questions about the template answered by an associate and noted.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A one-page map of the firm's DCF template exists, plus a dummy company run through it that prints without errors."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your associate or the training team for the current DCF template"
                - "Map each tab and how it feeds the output pages"
                - "List every switch, such as the mid-year convention and the case selector"
                - "Run a dummy company through the template and print the outputs"
                - "Book 20 minutes with an associate to clear your open questions"
            - name: Choosing the projection case for a DCF
              description: |-
                ## Purpose
                Whose numbers sit in the forecast changes the answer more than any discount rate. Management plans tend to be optimistic, broker consensus often covers only two or three years, and a banker's own case has to be justified line by line, so the choice and its source should be written down before the model is built.

                ## Milestones
                1. The available sources listed: management plan, broker consensus, the bank's own research and historicals.
                2. Each source compared on horizon, line-item detail and likely bias.
                3. The base case chosen with the deal team and the reason recorded.
                4. A method agreed for extending the case beyond the source's last year.

                ## Notes
                On sell-side work the client's plan usually drives the base case; on buy-side and fairness work, seniors often want consensus or an adjusted case shown alongside it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note names the base projection case, its source, its horizon and how outer years are extended, agreed with the deal team."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every projection source available for the company"
                - "Compare each source's horizon and line-item detail in a short table"
                - "Flag where management numbers sit above consensus and by how much"
                - "Agree the base case with your associate and record the reason"
            - name: Valuation date, stub period and discounting convention
              description: |-
                ## Purpose
                Discount factors depend on three settings that are easy to leave on the template default: the valuation date, the stub period to the first fiscal year end, and whether cash flows are discounted at mid-year or year end. Fixing them at the start keeps every later version comparable and stops a silent half-year shift in value.

                ## Milestones
                1. The valuation date agreed and entered, usually the expected signing date or the latest balance sheet date.
                2. The stub period fraction calculated and the stub cash flow sized to match.
                3. Mid-year or year-end convention chosen and noted on the assumptions page.
                4. The first two discount factors checked by hand.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The DCF's valuation date, stub fraction and discounting convention are entered, documented on the assumptions page and hand-checked for two periods."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the valuation date with your associate"
                - "Calculate the stub fraction to the first fiscal year end"
                - "Set the discounting convention and note why on the assumptions page"
                - "Check the first two discount factors with a calculator"
            - name: Enterprise value to equity value bridge
              description: |-
                ## Purpose
                A DCF gives enterprise value, but clients and boards talk in price per share, so the bridge between the two is where many errors land. Listing every debt-like and cash-like item from the latest balance sheet, with a page reference for each, makes the bridge auditable and stops double counting with items already in free cash flow.

                ## Milestones
                1. Gross debt, cash and equivalents taken from the latest balance sheet with page references.
                2. Debt-like items decided one by one: leases, pension deficits, minority interests, preferred shares and earn-outs.
                3. Cash-like items such as associates and investments listed with their valuation basis.
                4. The bridge reconciled to the equivalent bridge used in the trading comps.

                ## Notes
                Keep the bridge consistent with free cash flow. If lease payments are deducted in free cash flow, lease liabilities do not also go in net debt.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An enterprise to equity bridge with a sourced line for each item and a written treatment rule for leases, pensions and minorities."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the latest balance sheet and debt notes into the bridge tab"
                - "List every debt-like and cash-like item with its page reference"
                - "Write the treatment rule for leases, pensions and minorities"
                - "Compare the bridge with the one in the trading comps file"
            - name: Fully diluted share count for the DCF
              description: |-
                ## Purpose
                Dividing equity value by the wrong share count can move the implied price by several percent, especially for companies with large option pools or convertibles. A diluted count built from the latest filing, using the treasury stock method at the implied price, is a small piece of work that seniors check every time.

                ## Milestones
                1. Basic shares taken from the latest filing's cover page or share capital note.
                2. Options and restricted stock listed by tranche with exercise prices.
                3. The treasury stock method applied at the DCF implied share price, with the circularity handled.
                4. Convertibles tested for whether they are in the money and treated accordingly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A diluted share count tab sourced to the latest filing, with each option tranche and convertible treated and the circularity resolved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find basic shares outstanding in the latest filing"
                - "List option and restricted stock tranches with strike prices from the notes"
                - "Apply the treasury stock method at the implied DCF price"
                - "Check whether any convertible is in the money at that price"
            - name: Discount rate source file
              description: |-
                ## Purpose
                Risk-free rates, equity risk premiums, betas and credit spreads each come from a data provider or a published study, and two analysts on the same deal can easily pick different ones. One source file with the provider, the date pulled and the reasoning for each input makes the WACC reproducible and saves a scramble when a senior asks where the equity risk premium came from.

                ## Milestones
                1. A risk-free rate source chosen to match the currency and duration of the cash flows.
                2. An equity risk premium source chosen with its publication date noted.
                3. The beta source and measurement window agreed with the team.
                4. A cost of debt basis set: yields on traded bonds, a rating-implied spread or recent borrowing.
                5. All of it saved in one sourced sheet linked into the WACC tab.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A WACC source sheet lists provider, date pulled and rationale for the risk-free rate, equity risk premium, beta and cost of debt."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the data terminals and studies your bank uses for WACC inputs"
                - "Match the risk-free rate tenor and currency to the cash flows"
                - "Record the equity risk premium source with its date"
                - "Agree the beta source and window with your associate"
                - "Link the source sheet into the WACC tab"
            - name: DCF assumptions page that seniors can read
              description: |-
                ## Purpose
                When a VP opens a DCF, the first thing they want is one page listing every assumption with its source, not a hunt through tabs. Building that page as a standard part of every model makes reviews faster and gives the client a clean backup if they ask how the number was reached.

                ## Milestones
                1. A single assumptions page laid out: projection case, horizon, WACC inputs, terminal method and bridge items.
                2. Each assumption shown with its value, source and date.
                3. Changes since the last version flagged in a separate column.
                4. The layout reviewed by an associate and adopted as your default.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every DCF you send includes a one-page assumptions summary with value, source and date for each input, in a layout an associate has approved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch the assumptions page on paper before building it"
                - "Link each line to its driver cell rather than retyping values"
                - "Add a column that flags changes since the last version"
                - "Ask an associate to review the layout and adopt their edits"
            - name: Monthly WACC market data refresh
              description: |-
                ## Purpose
                Rates and spreads move every week, and a WACC built six weeks ago on a live deal may be stale by the time it reaches the client. A fixed monthly refresh of risk-free rates, spreads and peer betas, logged with dates, keeps the discount rate defensible and shows how much value moved because of markets rather than the business.

                ## Milestones
                1. A refresh list covering risk-free rate, credit spread, peer betas and equity risk premium.
                2. A dated log of each input, month by month.
                3. The effect of each refresh on the DCF midpoint recorded.
                4. Large moves flagged to the deal team the same day.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly entries in the WACC input log, each showing inputs, date pulled and the change in DCF midpoint."
                cadence: rolling
              tasks:
                - "Set up the WACC input log with one row per month"
                - "Refresh the risk-free rate, spreads and peer betas @recurring(monthly:3)"
                - "Record the change in the DCF midpoint after each refresh"
                - "Check the equity risk premium source for a new edition @recurring(quarterly)"
            - name: Live assumption log on every DCF
              description: |-
                ## Purpose
                Deal DCFs go through dozens of versions, and three weeks in nobody remembers why the long-term growth rate dropped half a point. A short dated log of every assumption change, who asked for it and why, protects you in reviews and lets the team rebuild the logic if a committee or fairness review asks later.

                ## Milestones
                1. An assumption log tab added to every active DCF.
                2. Each change logged with date, old value, new value, requester and reason.
                3. The log reconciled weekly to the latest version of the model.
                4. A monthly note of lessons from the changes kept for your own development.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each active DCF has an assumption log with dated entries for every change, reconciled to the model every week."
                cadence: rolling
              tasks:
                - "Add an assumption log tab to each active DCF"
                - "Log each change with old value, new value, requester and reason"
                - "Reconcile the assumption log to the latest model version @recurring(weekly:fri)"
                - "Write three lessons from the month's assumption changes @recurring(monthly:27)"
            - name: Snapshot of DCF outputs at every send
              description: |-
                ## Purpose
                Seniors often ask what the DCF showed two turns ago, before the case changed or the WACC moved. Saving a dated snapshot of the summary output, sensitivity tables and key inputs each time a version leaves your desk gives you that answer in seconds, and an audit trail if the valuation is questioned later.

                ## Milestones
                1. A snapshot page designed: midpoint, range, WACC, terminal inputs and implied multiples.
                2. A snapshot saved at every senior or client send, named with date and version.
                3. A running comparison table showing how value moved between snapshots and why.
                4. Superseded working files archived on the deal drive each week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every send of a DCF has a matching dated snapshot, and a comparison table explains each change in midpoint value."
                cadence: rolling
              tasks:
                - "Design a one-page snapshot of DCF outputs and key inputs"
                - "Save a snapshot each time a version goes to a senior or the client"
                - "Add each snapshot to a comparison table with the reason value moved"
                - "Archive superseded DCF working files on the deal drive @recurring(weekly:thu)"
            - name: Implied output sanity checks before sending
              description: |-
                ## Purpose
                A DCF can tie out perfectly and still be wrong in substance: a terminal value that is 90 percent of enterprise value, an implied exit multiple far above the peers, or growth above the nominal economy forever. Running the same short set of implied-output checks before every send catches the results a senior will question first.

                ## Milestones
                1. A checklist of implied outputs: terminal value share of EV, implied exit multiple, implied perpetuity growth and terminal-year return on capital.
                2. Flag thresholds for each check agreed with an associate.
                3. The checklist run and saved for every DCF sent in a month.
                4. Recurring failures traced to their cause in the model.

                ## Notes
                Start from the **Operational checklist** template. This sits alongside general model checks: it asks whether the answer makes sense, not whether the formulas link.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A completed implied-output checklist is saved with every DCF version sent to a senior or a client."
                cadence: rolling
              tasks:
                - "Write the implied-output checklist with flag thresholds"
                - "Agree the thresholds with an associate"
                - "Run the checklist before each send and save it with the snapshot"
                - "Review the month's checklists for recurring failures @recurring(monthly:25)"
            - name: Consensus refresh for coverage shell DCFs
              description: |-
                ## Purpose
                If you keep shell DCFs on the companies your group covers, they are only useful while the consensus case inside them is current. Pulling fresh broker consensus after each results season, and noting where it moved, means a pitch DCF can be ready in an afternoon instead of starting from a stale forecast.

                ## Milestones
                1. A list of the coverage companies that have shell DCFs.
                2. Consensus revenue, EBITDA and capex refreshed after each results season.
                3. Movements in consensus since the last refresh noted company by company.
                4. Shell DCFs re-run and their midpoints logged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each shell DCF on your coverage list carries consensus estimates dated within the last quarter, with movements noted."
                cadence: cyclic
              tasks:
                - "List the coverage companies that have a shell DCF"
                - "Refresh consensus estimates in each shell DCF after results season @recurring(quarterly)"
                - "Note where consensus moved by more than a few percent"
                - "Re-run each shell DCF and log the new midpoint"
            - name: Quarterly peer beta set review
              description: |-
                ## Purpose
                Betas drift as peers are acquired, delist or change their business mix, and a peer set chosen two years ago may no longer describe the target's risk. Reviewing the beta peers each quarter, unlevering each one with current debt and tax rates, keeps the cost of equity grounded in businesses that really are comparable.

                ## Milestones
                1. The beta peer set documented with the reason each company is included.
                2. Raw betas, debt to equity and tax rates refreshed for each peer.
                3. Unlevered betas recalculated and the median and mean compared.
                4. Peers added or removed with the reason recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A beta peer table is updated every quarter with raw, unlevered and relevered betas and a dated note of any peer changes."
                cadence: cyclic
              tasks:
                - "Write down why each peer sits in the beta set"
                - "Refresh raw betas, debt and tax rates for each beta peer @recurring(quarterly)"
                - "Recalculate unlevered betas and compare the median and mean"
                - "Record any peer added or removed and why"
            - name: Weekly blank-sheet DCF drill
              description: |-
                ## Purpose
                Speed with a DCF comes from having built dozens, not from reading about them. A weekly drill, building a simple DCF on a public company from a blank sheet against the clock, keeps the mechanics automatic for students facing modelling tests and for analysts who mostly work inside templates.

                ## Milestones
                1. A drill format fixed: one company, five-year forecast, WACC, two terminal methods and one sensitivity table.
                2. A target time set and every attempt timed.
                3. A log of drill times and errors kept for at least eight weeks.
                4. Drill time cut by a third, with fewer errors per attempt.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A drill log shows at least eight timed blank-sheet DCF builds, with time and error count both falling."
                cadence: rolling
              tasks:
                - "Pick ten public companies to use for drills"
                - "Build a timed blank-sheet DCF on one drill company @recurring(weekly:sat)"
                - "Log the time taken and every error made"
                - "Compare the month's drill times and pick one skill to fix @recurring(monthly:14)"
            - name: Updating the DCF after quarterly results
              description: |-
                ## Purpose
                When a target or client reports, actuals replace forecasts, net debt changes and the stub period shortens, and all three move the DCF. A standard post-results update, done within a few days of the release, keeps live-deal and pitch DCFs consistent with what the market now knows.

                ## Milestones
                1. A results-update checklist covering actuals, net debt, share count, stub period and guidance.
                2. The latest quarter's actuals rolled in and forecasts adjusted where guidance changed.
                3. The bridge and share count updated to the new balance sheet date.
                4. The change in value explained in two or three lines for the team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Within five working days of each results release, the DCF reflects new actuals, net debt and share count, with the value change explained."
                cadence: cyclic
              tasks:
                - "Write the post-results update checklist"
                - "Roll in actuals and new guidance after each results release @recurring(quarterly)"
                - "Update net debt and share count to the new balance sheet date"
                - "Send the team a short note explaining the value change"
            - name: Sector benchmark sheet for DCF drivers
              description: |-
                ## Purpose
                Is capex at 4 percent of sales sensible for this business? The quickest answer comes from what peers actually report and what you used on the last few DCFs in the sector. A running benchmark sheet of capex, working capital days, margins and terminal growth by sector, drawn from public filings, turns that question into a lookup.

                ## Milestones
                1. A benchmark sheet set up by sector with capex to sales, working capital days, D and A to sales and mature margins.
                2. Values drawn from public peer filings, each with a source.
                3. New sector data added after each DCF you build.
                4. The sheet used to challenge at least one assumption on a live model.

                ## Notes
                Use public data only. Do not copy client projections into a personal file.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A sourced sector benchmark sheet for DCF drivers covers at least three sectors and is updated after each new DCF."
                cadence: rolling
              tasks:
                - "Set up the benchmark sheet with the sectors you cover"
                - "Add peer capex, working capital and margin ratios from public filings"
                - "Add public peer ratios from the month's DCFs to the benchmark sheet @recurring(monthly:17)"
                - "Use the sheet to challenge one assumption on your current model"
            - name: WACC built from first principles
              description: |-
                ## Purpose
                Plenty of analysts can fill in a WACC tab without being able to explain why the weights should be target rather than current, or why the cost of debt is taken after tax. Working through CAPM, the cost of debt and the capital structure question properly lets you answer the questions MDs and interviewers ask most often.

                ## Milestones
                1. CAPM and the after-tax cost of debt explained in your own words on one page.
                2. Target versus current capital structure argued both ways, with when each is used.
                3. A WACC calculated by hand for a public company and compared with a published estimate.
                4. Five WACC questions answered aloud without notes.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page WACC explainer and a hand-built WACC for a public company exist, compared with a published estimate."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the cost of capital chapter of a corporate finance textbook"
                - "Write a one-page explainer of CAPM and the after-tax cost of debt"
                - "Build a WACC for a public company by hand"
                - "Compare your answer with a broker or data provider estimate"
                - "Answer five WACC questions aloud and note the weak ones"
            - name: Unlevering and relevering beta
              description: |-
                ## Purpose
                Peer betas carry each peer's own debt, so they have to be stripped of financial risk and rebuilt at the target's capital structure. Practising the standard formulas, and knowing when a debt beta or a cash adjustment matters, stops the cost of equity being quietly distorted by one heavily indebted peer.

                ## Milestones
                1. The Hamada formula and one alternative written out with their assumptions.
                2. A peer set unlevered and relevered by hand at a target structure.
                3. The effect of excluding one outlier peer measured.
                4. A note on when to adjust for cash-rich peers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked sheet unlevers and relevers five peer betas by hand, with the effect of dropping the outlier peer recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write out the Hamada formula and the assumption behind it"
                - "Unlever five peer betas by hand from their filings"
                - "Relever the median beta at the target capital structure"
                - "Rerun without the most indebted peer and note the change"
            - name: Terminal value by growth and by exit multiple
              description: |-
                ## Purpose
                Terminal value is usually more than half of a DCF, and seniors will ask why the perpetuity growth and exit multiple methods disagree. Building both, then checking what growth rate each exit multiple implies and the reverse, teaches you to set a terminal value you can defend from either direction.

                ## Milestones
                1. Gordon growth and exit multiple terminal values built on the same forecast.
                2. Implied perpetuity growth calculated from the exit multiple, and the implied multiple from the growth rate.
                3. The gap explained with reference to terminal-year margins, reinvestment and peer multiples.
                4. A rule of thumb for when each method leads, agreed with an associate.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice model shows both terminal methods with their implied cross-checks and a written explanation of the gap between them."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Build both terminal value methods on one practice model"
                - "Calculate the implied growth rate and implied multiple for each"
                - "Write two paragraphs explaining why the two methods differ"
                - "Ask an associate which method your group usually leads with"
            - name: Steady-state terminal year and reinvestment
              description: |-
                ## Purpose
                Gordon growth assumes the final forecast year can repeat forever, so a terminal year with capex below depreciation or margins at a cyclical peak overstates value. Learning to build a normalised terminal year, where reinvestment matches growth and the return on new capital, fixes one of the most common substantive errors in banker DCFs.

                ## Milestones
                1. The link between growth, return on new capital and reinvestment rate written out.
                2. A normalised terminal-year column added to a practice DCF.
                3. Capex, depreciation, working capital and margins set to steady-state levels with reasons.
                4. Value before and after normalisation compared.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice DCF has a normalised terminal year whose reinvestment is consistent with its growth rate, with the value change recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write out growth equals reinvestment rate times return on new capital"
                - "Add a normalised terminal-year column to a practice DCF"
                - "Set capex, depreciation and working capital to steady-state levels"
                - "Compare value before and after and note the gap"
            - name: Working capital and capex projection drivers
              description: |-
                ## Purpose
                Revenue and EBITDA get most of the attention, yet weak working capital and capex assumptions can swing free cash flow by more than any margin change. Projecting receivables, inventory and payables on days, and splitting capex into maintenance and growth, gives your forecast a cash profile that survives a diligence question.

                ## Milestones
                1. Five years of historical receivable, inventory and payable days calculated.
                2. Forward days set, with a written reason for any change from history.
                3. Capex split into maintenance and growth with a source for the split.
                4. Free cash flow conversion compared with peers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice forecast projects working capital on days and capex in two parts, with cash conversion compared against three peers."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Calculate five years of receivable, inventory and payable days"
                - "Set forward days and write one line on each change"
                - "Split capex into maintenance and growth using filings or guidance"
                - "Compare cash conversion with three peers"
            - name: Cash taxes, tax losses and the tax shield
              description: |-
                ## Purpose
                Using the statutory rate on EBIT is quick, but cash taxes differ through tax losses carried forward, deferred taxes and different rates by country. Knowing how to bring tax losses into a DCF, and where the interest tax shield already sits in the WACC, prevents value being counted twice or missed. The tax position itself is confirmed with the client's tax advisers, never assumed.

                ## Milestones
                1. Statutory, effective and cash tax rates compared for a public company.
                2. Tax losses brought in either through the cash flows or as a separate present value, not both.
                3. The interest tax shield confirmed as sitting only in the after-tax cost of debt.
                4. Questions for the tax advisers listed for any live deal.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A practice DCF treats tax losses one way only, uses a documented cash tax rate and has a list of open questions for tax advisers."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Compare statutory, effective and cash tax rates for a public company"
                - "Model tax losses either in the cash flows or as a separate value"
                - "Check the interest tax shield appears only in the cost of debt"
                - "List the tax questions for the client's advisers on any live deal"
            - name: Stock-based compensation in the DCF
              description: |-
                ## Purpose
                Adding back stock-based compensation as a non-cash charge while ignoring the dilution it creates inflates value, sometimes heavily for technology companies. Settling on one treatment, either as a cash-like cost in free cash flow or through a forward share count, and stating it on the assumptions page, answers a question that buyers and committees now ask routinely.

                ## Milestones
                1. Both treatments set out with their effect on a sample company's value.
                2. The group's house view established with an associate or VP.
                3. The chosen treatment applied and footnoted on the DCF output page.
                4. Consistency checked with how the trading comps treat the same charge.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The group's stock-based compensation treatment is recorded, applied in a DCF and footnoted on its output page."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a public company where stock-based pay exceeds 5 percent of revenue"
                - "Model value with stock-based pay as a cost and then as dilution"
                - "Ask a VP what the group's house view is"
                - "Footnote the treatment on the DCF output page"
            - name: Lease accounting consistency in the DCF
              description: |-
                ## Purpose
                Since IFRS 16 and ASC 842 put most leases on the balance sheet, EBITDA, free cash flow, net debt and WACC weights can each be pre-lease or post-lease, and mixing them is a classic error. Picking one basis and carrying it through every part of the DCF keeps value right for retailers, airlines and other lease-heavy businesses.

                ## Milestones
                1. Pre-lease and post-lease figures set out side by side for a lease-heavy company.
                2. One basis chosen for the DCF and the reason recorded.
                3. Free cash flow, net debt, WACC weights and terminal multiple aligned to that basis.
                4. The company valued both ways and the two results reconciled.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A lease-heavy practice company is valued on both bases, with every DCF component aligned and the two results reconciled."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the lease note of a lease-heavy listed company"
                - "Lay out pre-lease and post-lease figures side by side"
                - "Choose one basis and align cash flow, net debt and WACC to it"
                - "Reconcile the two values and note why they differ"
            - name: Reading broker models to build a consensus case
              description: |-
                ## Purpose
                Consensus figures from a data terminal hide the spread between brokers and how few of them forecast beyond year two. Reading three or four broker models on the company shows where the forecasts disagree, which years are thin, and which assumptions you will need to defend when you extend the case.

                ## Milestones
                1. Three or four recent broker models or notes gathered through approved channels.
                2. Revenue, margin and capex forecasts compared broker by broker.
                3. The number of brokers behind each forecast year noted.
                4. The main disagreements summarised in five bullet points for the team.

                ## Notes
                Start from the **Reading queue** template. Check the compliance rules on research use before sharing it beyond the deal team.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A side-by-side table of three or more broker forecasts exists, with broker counts per year and a five-point summary of disagreements."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Request recent broker research on the company through approved channels"
                - "Lay broker forecasts side by side by year"
                - "Count how many brokers forecast each year"
                - "Ask the agent to summarise where the brokers disagree in five bullets"
                - "Read one new broker initiation on a coverage name @recurring(monthly:9)"
            - name: Standard sensitivity tables for every DCF
              description: |-
                ## Purpose
                Seniors read sensitivity tables before the midpoint, so tables with odd step sizes, an off-centre base case or unreliable data tables slow every review. A standard pair, WACC against terminal growth and WACC against exit multiple, with sensible steps and the base case highlighted, gives each DCF a familiar shape.

                ## Milestones
                1. Two default tables defined with the base case centred and step sizes agreed.
                2. Tables built so they recalculate reliably, with the calculation setting noted.
                3. Formatting set: base case highlighted, units and labels clear.
                4. The standard used on every DCF for a month and adjusted after feedback.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every DCF you build for a month uses the two standard sensitivity tables with a centred base case and agreed steps."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree the default step sizes for WACC, growth and exit multiple"
                - "Build the two standard tables in a reusable block"
                - "Highlight the base case and label units on both tables"
                - "Collect feedback after a month and adjust the standard"
            - name: Choosing the explicit forecast horizon
              description: |-
                ## Purpose
                Five years is the default, but a business still growing fast or holding a long contract book may need ten, while a mature utility may be fine with five. Choosing the horizon deliberately, so the final year really is steady state, stops the terminal value carrying growth the forecast should have shown.

                ## Milestones
                1. Growth and margin profile examined to see when the business reaches steady state.
                2. Five-year and longer horizons compared on value and terminal value share.
                3. The horizon chosen and the reason written on the assumptions page.
                4. A method for extrapolating years beyond management's plan agreed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The assumptions page records the chosen forecast horizon, the reason for it and the extrapolation method for later years."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Plot revenue growth and margin by year to see when they flatten"
                - "Run the DCF with five-year and ten-year horizons"
                - "Compare terminal value as a share of EV under each"
                - "Write the chosen horizon and reason on the assumptions page"
            - name: Long-term growth rate rationale
              description: |-
                ## Purpose
                Perpetuity growth is the assumption seniors push back on most, and an unexplained rate rarely survives a committee. Grounding it in long-run inflation and real growth expectations for the currency of the cash flows, and in the industry's structural outlook, gives a short written rationale you can reuse and refresh each year.

                ## Milestones
                1. Long-run inflation and real growth expectations for the relevant currency gathered from public sources.
                2. The industry's structural outlook noted, including whether it is shrinking.
                3. A perpetuity growth range set with a written rationale.
                4. The rationale reviewed once a year against new data.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated three-line rationale for the perpetuity growth range exists, citing public inflation and growth sources."
                cadence: cyclic
              tasks:
                - "Gather long-run inflation expectations for the cash flow currency"
                - "Note the industry's structural growth outlook from public sources"
                - "Write a three-line rationale for your perpetuity growth range"
                - "Refresh the long-term growth rationale against new data @recurring(yearly)"
            - name: Country risk premium for emerging market targets
              description: |-
                ## Purpose
                Valuing a business whose cash flows come from an emerging or frontier market raises the question of whether and how to add country risk, and different methods can move the WACC by several points. Documenting the approach your bank accepts, with its data source, means the decision is made once and not reargued on every deal.

                ## Milestones
                1. The main approaches listed: sovereign spread, relative volatility and cash flow adjustment.
                2. The bank's preferred method and source confirmed with a VP.
                3. The premium calculated for one example country and applied in a practice DCF.
                4. Double counting checked where the cash flows already reflect country risk.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A note records the bank's accepted country risk method and source, with a worked example for one country."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the country risk premium methods in common use"
                - "Ask a VP which method and data source the bank accepts"
                - "Calculate the premium for one example country"
                - "Check the cash flows do not already carry the same risk"
            - name: Scenario cases with a single selector
              description: |-
                ## Purpose
                Clients and committees rarely accept a single DCF answer; they want a downside and an upside built on stated assumptions. A case selector that drives revenue growth, margins and capex from one switch makes scenarios quick to run and hard to mix up.

                ## Milestones
                1. Downside, base and upside cases defined in words before any numbers.
                2. A selector built so one switch changes every case-driven assumption.
                3. Each case run and its value recorded on the output page.
                4. Case definitions agreed with the deal team and printed with the outputs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The DCF runs three named cases from one selector, with each case's value and written definition on the output page."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one paragraph defining each case before modelling"
                - "Build a case selector that drives growth, margin and capex"
                - "Run all three cases and record each value"
                - "Print the case definitions on the output page"
            - name: DCF bar on the valuation football field
              description: |-
                ## Purpose
                A DCF rarely stands alone in a pitch or board book; it sits as one bar beside trading comps, precedents and other methods. Deciding how the DCF bar is built, which sensitivity range it shows and how it is labelled keeps the football field honest and stops the DCF looking more precise than it is.

                ## Milestones
                1. The DCF range defined from the sensitivity table, with the inputs behind each end stated.
                2. Ranges from the other methods collected from their owners on the same share basis.
                3. The football field drawn with consistent units and dates, and the current price or offer marked.
                4. A footnote written for every bar.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A football field page shows the DCF bar with stated inputs at each end, the current price marked and a footnote on every bar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose which sensitivity range defines the DCF bar"
                - "Collect the other methods' ranges on the same share basis"
                - "Draw the football field with the current price marked"
                - "Write a footnote for every bar"
            - name: Explaining the gap between DCF value and market price
              description: |-
                ## Purpose
                When the DCF says the shares are worth far more or less than they trade at, the first question from a client or MD is why. A short bridge showing which assumptions drive the gap, and what today's price implies about growth or margins, turns an awkward number into a useful discussion.

                ## Milestones
                1. Market-implied assumptions found by solving the DCF for the current price.
                2. The two or three assumptions driving most of the gap identified.
                3. A one-page bridge drafted from market price to DCF value.
                4. The page reviewed by a senior before it goes in a book.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A one-page bridge from market price to DCF value, naming the main driving assumptions, is reviewed by a senior."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Use goal seek to find the growth rate implied by today's price"
                - "Find the margin implied by today's price at base-case growth"
                - "Rank the assumptions that drive most of the gap"
                - "Ask the agent to draft a one-page bridge narrative for your review"
            - name: First live-deal DCF for your associate
              description: |-
                ## Purpose
                Your first DCF on a live mandate is where the associate decides how much to trust your work. Treating it as a dated delivery, with assumptions agreed up front, a self-check before sending and a short debrief afterwards, makes the first one count and sets the pattern for every one after it.

                ## Milestones
                1. Scope, case and deadline agreed with the associate in writing.
                2. The DCF delivered on time with an assumptions page and sensitivities.
                3. The implied-output checklist run and saved before sending.
                4. Feedback captured in a debrief and three fixes noted.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first live-deal DCF is delivered by the agreed time, with a saved checklist and a debrief recording three fixes."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Confirm scope, case and deadline with your associate by email"
                - "Build the DCF from the firm template with an assumptions page"
                - "Run the implied-output checklist before sending"
                - "Ask for a 15-minute debrief and note three fixes"
            - name: Pitch DCF on a 48-hour turnaround
              description: |-
                ## Purpose
                Pitch DCFs often arrive with two days' notice and only public information to work from. Having a fast route ready, a shell model, a consensus pull and default WACC inputs, means the 48 hours go on judgement and the pages rather than set-up.

                ## Milestones
                1. A shell DCF ready, linked to consensus and the WACC source sheet.
                2. Consensus pulled and extended within the first four hours.
                3. A draft DCF and football field bar sent to the associate by the end of day one.
                4. Comments turned and final pages in the book by the deadline.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pitch DCF is delivered within 48 hours of kick-off, with the draft sent by the end of day one."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Set up a shell DCF linked to the WACC source sheet"
                - "Write a 48-hour timeline from kick-off to book deadline"
                - "Pull and extend consensus within four hours of kick-off"
                - "Send the draft DCF to the associate by the end of day one"
            - name: Walking the MD through the DCF
              description: |-
                ## Purpose
                Before a client meeting the MD may want ten minutes on how the DCF works and what drives it, and a fumbled answer is remembered. Preparing a short walk-through, the three numbers that matter most and answers to the obvious challenges, makes those ten minutes an opportunity rather than a risk.

                ## Milestones
                1. A one-page walk-through covering case, WACC, terminal method, midpoint and range.
                2. The three biggest value drivers identified with their sensitivity.
                3. Answers ready for five likely challenges.
                4. The walk-through rehearsed aloud in under ten minutes.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-page DCF walk-through with five prepared answers is rehearsed in under ten minutes before the MD meeting."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the one-page walk-through of the DCF"
                - "List the three drivers with the largest sensitivity"
                - "Draft answers to five likely challenges"
                - "Rehearse the walk-through aloud with a timer"
            - name: DCF pages for a client board discussion
              description: |-
                ## Purpose
                Boards weighing an offer or a sale want valuation pages they can follow without a model, and directors ask about the key assumptions directly. DCF pages written for non-specialists, with plain labels, clear ranges and a backup appendix, support that discussion without overstating precision. Board materials go through the bank's internal review, and legal review where needed, before release.

                ## Milestones
                1. A DCF summary page drafted for a non-specialist reader.
                2. A backup appendix prepared with assumptions, WACC and sensitivities.
                3. Pages cleared by the deal team and the bank's internal review.
                4. Questions asked at the meeting recorded for follow-up.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Board-ready DCF pages with a backup appendix are cleared through internal review before the meeting date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a DCF summary page in plain language for directors"
                - "Build the backup appendix with assumptions and sensitivities"
                - "Send the pages through the bank's review process"
                - "Record board questions on the DCF for follow-up"
            - name: DCF modelling test for recruiting
              description: |-
                ## Purpose
                Many banks and buy-side firms set a timed modelling test, often a DCF from a case pack in a few hours. Practising under the same conditions, with a fixed build order you can follow without thinking, turns the test from a gamble into a routine. Formats vary, so check each firm's with recruiters.

                ## Milestones
                1. Test formats for your target firms noted from recruiters and past candidates.
                2. Three timed practice tests completed from case packs.
                3. A fixed build order written and memorised.
                4. The final practice finished within the time limit with no structural errors.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three timed practice DCF tests are completed, the last one inside the time limit, before the first real test date."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask recruiters or past candidates about each firm's test format"
                - "Find three practice case packs with model answers"
                - "Sit a full timed practice test under exam conditions"
                - "Write your fixed build order and check it against the answers"
            - name: Student DCF on a listed company
              description: |-
                ## Purpose
                Students who can talk through a DCF they built themselves, on a company they chose, stand out in interviews and stock pitch competitions. A complete model with a short write-up, built from public filings only, gives you something concrete to discuss and a base for every technical question.

                ## Milestones
                1. A listed company chosen and its last three annual reports downloaded.
                2. A five-year forecast built with each driver justified in a line.
                3. WACC, terminal value and a sensitivity table completed.
                4. A two-page write-up summarising the value and its key drivers.
                5. The model reviewed by a lecturer, mentor or banker.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A complete DCF on a listed company with a two-page write-up has been reviewed by a lecturer, mentor or banker."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a listed company you can explain in one minute"
                - "Download its last three annual reports"
                - "Build the forecast with one line of reasoning per driver"
                - "Write a two-page summary of the value and drivers"
                - "Update the student model with each new results release @recurring(quarterly)"
            - name: DCF interview question bank
              description: |-
                ## Purpose
                Technical interviews return to the same DCF questions: walk me through a DCF, why unlevered free cash flow, what happens to value if capex rises. A personal question bank with answers in your own words, spoken aloud each week, makes those answers crisp under pressure.

                ## Milestones
                1. Forty common DCF questions collected from guides and alumni.
                2. An answer drafted in your own words for each.
                3. Each answer spoken aloud and kept under two minutes.
                4. Two mock interviews completed with a peer or a banker.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bank of forty DCF questions with written answers exists, and two mock interviews have been completed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect forty DCF interview questions from guides and alumni"
                - "Write each answer in your own words"
                - "Practise ten DCF answers aloud against a timer @recurring(weekly:sun)"
                - "Book two mock interviews with a peer or a banker"
            - name: Summer intern's first DCF on the desk
              description: |-
                ## Purpose
                Interns are often handed a DCF update or a shell model in their first week, with little time to ask questions. Knowing what to ask, where the template and data sources live and how to send work for checking turns a first assignment into a good mention at the end-of-summer review.

                ## Milestones
                1. The template, data sources and a contact for questions found in week one.
                2. The first DCF task completed with an assumptions page.
                3. Feedback on the work collected and acted on.
                4. One DCF piece of work named in the end-of-internship review.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The intern's first DCF task is delivered with an assumptions page, and the feedback and fixes are written down."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your buddy or staffer where the DCF template and data sources live"
                - "Write the scope of your first DCF task in one paragraph"
                - "Send the first draft early and ask for comments"
                - "Note the feedback and the fixes you made"
            - name: New analyst DCF competence in 90 days
              description: |-
                ## Purpose
                In the first three months, analysts are judged on whether seniors can hand them a DCF and trust what comes back. A 90-day plan with the skills to master, models to build and a weekly self-review gets you there faster than waiting for staffings to teach you.

                ## Milestones
                1. A list of DCF skills to master by day 90, agreed with a mentor.
                2. At least three DCFs built on live or pitch work.
                3. A weekly self-review of errors and comments kept.
                4. A day-90 check-in recording which skills are now solid.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "By day 90, three DCFs have been delivered and a mentor check-in records which listed skills are solid."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the DCF skills to master by day 90 with your mentor"
                - "Log every DCF you work on and the comments you received"
                - "Review the week's DCF errors and senior comments @recurring(weekly:wed)"
                - "Book the day-90 check-in with your mentor"
            - name: Associate review routine for analyst DCFs
              description: |-
                ## Purpose
                As an associate, you own the DCF that leaves the team even when an analyst built it. A short, repeatable review that starts with the assumptions page and implied outputs before any cell-level checking catches substantive errors fast and teaches analysts what you look for.

                ## Milestones
                1. A review order written: assumptions, implied outputs, bridge, sensitivities, then formatting.
                2. The routine used on every analyst DCF for a month.
                3. Common analyst errors logged by type and shared in a short note.
                4. Analysts given the checklist so their drafts arrive cleaner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every analyst DCF for a month is reviewed in the written order, and an error log by type is shared with the analysts."
                cadence: rolling
              tasks:
                - "Write your DCF review order on one page"
                - "Review the week's analyst DCFs against the review order @recurring(weekly:mon)"
                - "Log the errors you find by type"
                - "Share the review checklist with your analysts"
            - name: Moving to banker DCF style from another finance role
              description: |-
                ## Purpose
                Joining from audit, corporate finance or equity research, you know valuation theory but not the banker's conventions: the template, the football field, the mid-year convention and how seniors want ranges shown. Learning those conventions deliberately in the first two months lets your experience show rather than the gaps.

                ## Milestones
                1. Differences between your past approach and the bank's written down.
                2. Three completed bank DCFs studied for structure and presentation.
                3. One practice DCF built entirely in the house style.
                4. A senior's confirmation that your output matches group standards.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice DCF built in the house style is confirmed by a senior as matching group standards within 60 days."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List how your previous valuation work differs from the bank's style"
                - "Study three completed bank DCFs for structure and presentation"
                - "Build one practice DCF fully in the house style"
                - "Practise house-style DCF output pages for 30 minutes @recurring(weekly:tue)"
                - "Ask a senior to confirm your output matches group standards"
            - name: Sum-of-the-parts DCF for a multi-division group
              description: |-
                ## Purpose
                Conglomerates and groups with very different divisions are often valued division by division, each with its own WACC, growth and terminal method. A sum-of-the-parts DCF, with corporate costs and holding-level debt handled carefully, shows whether the group trades at a discount and what a break-up might mean.

                ## Milestones
                1. Divisions defined from segment reporting, with revenue, EBIT and capex by segment.
                2. A separate WACC and terminal assumption set for each division.
                3. Unallocated corporate costs valued and deducted.
                4. The sum of the parts compared with the group's market value and the gap explained.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sum-of-the-parts DCF values each division separately, deducts corporate costs and explains the gap to market value."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pull segment revenue, EBIT and capex from the latest annual report"
                - "Set a WACC and terminal method for each division"
                - "Value unallocated corporate costs as a separate negative"
                - "Compare the sum of the parts with market value and note the gap"
            - name: Dividend discount model for banks and insurers
              description: |-
                ## Purpose
                Free cash flow to the firm does not work for banks and insurers, where debt is raw material rather than financing. Valuing them on equity cash flows, with dividends limited by capital requirements and discounted at the cost of equity instead of WACC, is essential for anyone covering financial institutions.

                ## Milestones
                1. A short note on why an enterprise DCF fails for financials.
                2. Distributable cash flows projected from earnings and a target capital ratio.
                3. The model discounted at a sourced cost of equity.
                4. Results compared with price to book and price to earnings for peers.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dividend discount model for a listed bank or insurer exists, with distributions tied to a capital ratio and a peer multiple cross-check."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a short note on why enterprise DCF fails for banks"
                - "Project earnings and capital needs for a listed bank"
                - "Calculate distributable dividends under a target capital ratio"
                - "Discount at the cost of equity and compare with price to book"
            - name: Adjusted present value for changing capital structures
              description: |-
                ## Purpose
                In leveraged buyouts and recapitalisations, debt falls sharply over the forecast, so a single WACC with fixed weights misstates value. Adjusted present value separates the unlevered business value from the value of tax shields and financing effects, giving a clearer answer where the capital structure is not stable.

                ## Milestones
                1. Unlevered value calculated at the unlevered cost of equity.
                2. Interest tax shields projected from the debt schedule and discounted at a stated rate.
                3. APV compared with a WACC-based DCF on the same case.
                4. A note on when your group uses APV.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An APV and a WACC-based DCF on the same leveraged buyout case are compared, with the difference explained in writing."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a debt schedule for a leveraged buyout case"
                - "Value the business at the unlevered cost of equity"
                - "Discount the tax shields at a stated rate"
                - "Compare APV with the WACC DCF and explain the difference"
            - name: Normalised DCF for cyclical and commodity businesses
              description: |-
                ## Purpose
                Miners, chemicals producers and shipping companies swing through the cycle, and a DCF anchored on peak or trough earnings misleads. Mid-cycle margins, a price deck taken from published forward curves or consensus, and a terminal year set at a normalised point keep the valuation from simply echoing today's price.

                ## Milestones
                1. A full cycle of historical margins and prices assembled.
                2. Mid-cycle margin and price assumptions set with sources.
                3. The terminal year set on normalised economics, not the last forecast year.
                4. Value compared under low, mid and high price decks.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cyclical DCF runs on low, mid and high price decks with a normalised terminal year and sourced mid-cycle margins."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Gather ten years of margins and commodity prices for the business"
                - "Set a mid-cycle margin with a written source"
                - "Build low, mid and high price decks from public curves or consensus"
                - "Normalise the terminal year and compare values across decks"
            - name: High-growth DCF with a long fade period
              description: |-
                ## Purpose
                Fast-growing or loss-making companies break the standard five-year DCF, because the business is nowhere near steady state by year five. Extending the forecast with a fade period, where growth slows and margins move toward a mature peer level, gives a defensible value without the terminal value carrying the whole answer.

                ## Milestones
                1. Mature-state margin and growth targets set from established peers.
                2. A fade period of five to ten years built from current to mature levels.
                3. Reinvestment checked against growth in each fade year.
                4. Terminal value share of EV compared with a five-year version.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A high-growth DCF has a documented fade period to peer-based mature levels and a lower terminal value share than its five-year version."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick three mature peers to set target margins"
                - "Build a fade period from current to mature growth and margin"
                - "Check reinvestment supports growth in each fade year"
                - "Compare terminal value share with a five-year version"
            - name: Cross-currency DCF and inflation consistency
              description: |-
                ## Purpose
                Cross-border targets raise a consistency question: local-currency cash flows need a local-currency discount rate, and real cash flows need a real rate. Valuing in local currency and converting at spot, then checking against a valuation in the reporting currency at forward rates, catches the mismatches that quietly add or remove value.

                ## Milestones
                1. The currency of every cash flow and discount rate input stated and matched.
                2. The inflation differential between the two currencies documented from public sources.
                3. Value calculated both ways: local currency at spot and reporting currency at forward rates.
                4. Any gap between the two explained or removed.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cross-border DCF is valued in local and reporting currency, and the two results reconcile or the gap is explained."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "State the currency of every cash flow and every discount rate input"
                - "Document the inflation differential between the two currencies"
                - "Value once in local currency and convert at spot"
                - "Value again in reporting currency at forward rates and reconcile"
---

# DCF Valuation Work

This area is for analysts, associates and students who build discounted cash flow valuations the way banks present them: projections from management or consensus, a sourced WACC, two terminal value methods, sensitivity tables and a DCF bar on the football field. It starts with the foundations (free cash flow, the firm template, the projection case, the bridge to equity value and the WACC source file), then the routines that keep live models current, the technical skills behind each input, the design decisions about horizon, growth and scenarios, dated deliveries from a first live DCF to a board page and a recruiting test, variants for students, interns, new analysts, associates and career switchers, and finally specialist cases such as sum of the parts, financial institutions, APV, cyclicals, high growth and cross-currency work.

What repeats is a monthly refresh of market inputs for the WACC, a weekly reconciliation of the assumption log, a quarterly update after results and a quarterly peer beta review, weekly blank-sheet drills and interview practice, and a yearly look at the long-term growth rationale. The Metrics log, Operational checklist, Reading queue and Development plan templates pair with the projects that name them. Everything here is built on public information or the bank's own systems; client data never goes into personal files. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
