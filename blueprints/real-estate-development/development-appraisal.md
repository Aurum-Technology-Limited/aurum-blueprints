---
id: real-estate-development.development-appraisal
name: Development Appraisal
description: "A repeatable appraisal you trust: evidenced GDV, build and fee costs, finance, profit on cost, residual land value and the sensitivities that decide whether to bid, renegotiate or walk away."
category: business
version: 1.0.0
tags: [real-estate-development, development-appraisal, founder, small-business, knowledge-worker, residual-land-value, gdv, profit-on-cost, sensitivity-analysis]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - risk-register
    - board-meeting
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Development Appraisal
          description: "Appraising a development: gross development value, build and fee costs, finance, profit on cost, residual land value and the sensitivities that change the decision."
          projects:
            - name: Standard appraisal layout for every site
              description: |-
                ## Purpose
                Appraisals built from scratch for each site use different headings, forget the same costs in different places and cannot be compared with each other. A single layout, with GDV at the top, costs in a fixed order, finance, profit and residual land value at the bottom, makes every site comparable at a glance and makes omissions obvious. Set it up before the next site lands, not during the rush to bid on it.

                ## Milestones
                1. A one-sheet layout with fixed sections for revenue, acquisition, build, fees, finance, sales costs, profit and land value.
                2. Every input cell marked by colour and separated from every formula cell.
                3. A summary block showing GDV, total cost, profit on cost, profit on GDV and residual land value.
                4. The layout tested on one past or current site and the results checked by hand.

                ## Notes
                Keep inputs on one sheet and calculations on another. Most appraisal errors come from someone typing over a formula.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved appraisal layout with fixed cost headings and a summary block, tested on one real site with hand-checked totals."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the cost headings your last three appraisals used and merge them into one order"
                - "Build the input sheet with colour-coded input cells"
                - "Build the summary block for GDV, cost, profit and land value"
                - "Run one known site through the layout and check totals with a calculator"
            - name: Appraisal terms and formula sheet
              description: |-
                ## Purpose
                Lenders, agents and valuers use GDV, profit on cost, profit on GDV, net to gross, residual and margin as if everyone defines them the same way, and they do not. A one-page sheet of the definitions and formulas you use, with a worked example, stops arguments that are really about definitions and helps a new partner or analyst read your numbers correctly.

                ## Milestones
                1. Definitions written for GDV, net development value, total development cost, profit on cost, profit on GDV and residual land value.
                2. Each formula shown with a small worked example.
                3. The difference between profit on cost and profit on GDV explained with the same scheme in both.
                4. The sheet saved beside the appraisal layout and shared with anyone who reviews your numbers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page definitions and formula sheet with worked examples, stored with the appraisal layout and shared with reviewers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your definition of GDV and of total development cost in one sentence each"
                - "Work one scheme through to profit on cost and profit on GDV"
                - "Add the residual land value formula with the same scheme"
                - "Share the sheet with your partner or reviewer and note any definitions they use differently"
            - name: Minimum return hurdles by scheme type
              description: |-
                ## Purpose
                Without a written hurdle, every marginal site looks worth a stretch, and the decision gets made by enthusiasm. Setting a minimum profit on cost or on GDV for each kind of scheme you do, with a higher bar for riskier ones such as speculative sales or heavy refurbishment, gives you a line to bid against and a reason to walk away. Check lender expectations so your hurdle is not below what funders will accept.

                ## Milestones
                1. Your scheme types listed, for example small new-build sales, conversions and pre-sold or forward-funded schemes.
                2. A minimum profit on cost or on GDV agreed for each type, with a sentence on why.
                3. Lender and equity partner minimum margins checked and noted beside your own.
                4. The hurdles written into the appraisal summary so every result shows pass or fail.

                ## Notes
                A hurdle is a business decision, not a market fact. Revisit it when your costs of capital or risk appetite change.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written table of minimum profit hurdles for each scheme type, checked against lender expectations and built into the appraisal summary."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the three or four scheme types you realistically pursue"
                - "Ask one lender and one equity contact what minimum margin they fund at"
                - "Write a hurdle and a one-line reason for each scheme type"
                - "Add a pass or fail flag against the hurdle in the appraisal summary"
                - "Revisit the hurdle table against your current cost of capital @recurring(yearly)"
            - name: Assumption source log for every input
              description: |-
                ## Purpose
                An appraisal is only as good as the weakest number in it, and six months later nobody remembers where the build cost or sales rate came from. A source log beside each appraisal records who or what supplied every material input, on what date and with what confidence, so reviewers can challenge the right numbers and you can refresh the stale ones.

                ## Milestones
                1. A source column added to the appraisal inputs, covering source, date and confidence.
                2. Every input above a set value threshold given a named source.
                3. Inputs older than six months flagged automatically.
                4. One live appraisal fully sourced as the worked example.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A live appraisal where every material input shows its source, date and a confidence rating, with stale inputs flagged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add source, date and confidence columns beside the input cells"
                - "Set the value threshold above which an input needs a named source"
                - "Fill the sources for one live appraisal"
                - "Add a flag for any input dated more than six months ago"
                - "Review the stale input flags across live appraisals @recurring(monthly:12)"
            - name: One-page back-of-envelope appraisal for a live site
              description: |-
                ## Purpose
                Most sites should be rejected in fifteen minutes, not after a week of modelling. A short screening appraisal using GDV per square metre, a benchmark build rate, a percentage for fees and finance, and your hurdle tells you whether a site deserves the full appraisal or a polite no. Run it on a real site this week so the method is tested before you need it in a hurry.

                ## Milestones
                1. A screening version of the layout with no more than fifteen inputs.
                2. One live site screened, with GDV, total cost and residual land value shown.
                3. The screening result compared with the asking price for the land.
                4. A decision recorded to proceed to a full appraisal or to decline.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A screening appraisal of one real site against its asking price, with a written proceed or decline decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick one site you are looking at now and note its asking price"
                - "Estimate the saleable area and a GDV per square metre for it"
                - "Apply a benchmark build rate and percentages for fees, finance and sales costs"
                - "Write whether the residual beats the asking price and what you will do next"
            - name: GDV evidence pack from comparable sales
              description: |-
                ## Purpose
                Gross development value is the biggest number in the appraisal and the one most often inflated by optimism or an agent's headline price. An evidence pack of achieved sales, not asking prices, adjusted for size, specification, age and location, turns GDV from a hope into a defensible figure that a valuer and a lender will recognise.

                ## Milestones
                1. At least eight comparable achieved sales gathered within a sensible radius and time window.
                2. Each comparable recorded with price, size, price per square metre, date and a note on how it differs.
                3. Adjustments made and explained for size, specification and new-build premium.
                4. A GDV per unit and in total, with a low and a high figure, tied to the evidence.

                ## Notes
                Start from the **Metrics log** template to keep comparables in one dated record. Asking prices and agent opinions belong in a separate column from achieved sales.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A comparables pack of at least eight achieved sales with stated adjustments, supporting a GDV range for one scheme."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull achieved sale prices from the public land registry or sales data source for the area"
                - "Record size and price per square metre for each comparable"
                - "Ask two local agents what new-build premium they see over second-hand stock"
                - "Write the GDV range and the three comparables that matter most"
            - name: Accommodation schedule with net and gross areas
              description: |-
                ## Purpose
                Revenue is earned on net saleable area while build cost is paid on gross internal area, and appraisals that mix the two overstate profit. A clear accommodation schedule listing each unit's net area, the gross area of the building and the net to gross ratio keeps revenue and cost on the right base and flags designs that waste floor space.

                ## Milestones
                1. Every unit listed with type, bedrooms and net saleable area.
                2. Gross internal area of the building recorded from the drawings or an estimate.
                3. The net to gross ratio calculated and compared with typical ratios for the building type.
                4. Revenue lines linked to net area and build cost lines linked to gross area in the appraisal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An accommodation schedule with net and gross areas and a net to gross ratio, linked into the appraisal for one scheme."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the architect for unit areas and the gross internal area in a spreadsheet"
                - "Calculate the net to gross ratio for the scheme"
                - "Link revenue to net area and build cost to gross area in the appraisal"
                - "Flag any ratio well below typical for the building type to the architect"
            - name: Build cost benchmark library per square metre
              description: |-
                ## Purpose
                Small developers often price build cost from one builder's quick number, which can be a fraction of the real outturn. A small library of cost per square metre by building type, drawn from published cost data, quantity surveyor estimates and your own past tenders, gives you a cross-check on every quote and a starting rate for screening.

                ## Milestones
                1. Benchmark rates recorded for the three or four building types you appraise.
                2. Each rate tagged with source, date, location and whether it includes externals and preliminaries.
                3. Your own past tender or outturn costs added where you have them.
                4. A default screening rate chosen for each building type.

                ## Notes
                Start from the **Metrics log** template. Always note whether a rate includes external works, demolition, preliminaries and contractor overheads, because benchmarks rarely match on scope.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated library of build cost rates per square metre for each building type you appraise, with scope notes and a default screening rate."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect published build cost rates for your building types and region"
                - "Ask a quantity surveyor for current rates on one typical scheme"
                - "Add your own past tender figures with what they included"
                - "Choose and record a screening rate for each building type"
            - name: Professional fees and statutory costs checklist
              description: |-
                ## Purpose
                Fees and statutory charges are where appraisals quietly lose several percent of GDV: planning fees, building control, warranties, utility connections, surveys, infrastructure levies and planning obligations. A checklist of every fee and statutory cost line, with a typical range, means none is forgotten on a rushed appraisal.

                ## Milestones
                1. A checklist covering design team, surveys, planning, building control, warranties, utilities and infrastructure charges.
                2. A typical range for each line, as a percentage of build cost or a fixed sum.
                3. Lines marked as fixed early costs or as costs that move with scheme size.
                4. The checklist linked to the appraisal layout so each line appears even when zero.

                ## Notes
                Planning obligations and infrastructure levies vary by authority. Check the local authority's published charging schedule or policy rather than using last scheme's figure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fee and statutory cost checklist with typical ranges, built into the appraisal so every line shows a value or a deliberate zero."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every fee and statutory charge on your last two schemes"
                - "Add the lines you did not have but a peer or QS says are common"
                - "Write a typical range against each line"
                - "Make every checklist line a fixed row in the appraisal layout"
            - name: Land acquisition costs line
              description: |-
                ## Purpose
                Buying land costs more than the land price: transfer tax or stamp duty, legal fees, agent fees, surveys and searches can add a meaningful percentage, and they affect the residual you can bid. Building them into a separate acquisition costs line, calculated from the land price, means your maximum bid already allows for them.

                ## Milestones
                1. Acquisition cost items listed, including transfer tax, legal fees, agent fees and pre-purchase surveys.
                2. Each item calculated as a rate or fixed sum from the land price.
                3. The residual land value shown both gross and net of acquisition costs.
                4. The tax rate checked with your solicitor or tax adviser for the jurisdiction and buyer type.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An appraisal that shows residual land value gross and net of acquisition costs, with the transfer tax basis confirmed by an adviser."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every cost you paid on top of the price when you last bought land"
                - "Ask your solicitor which transfer tax rates apply to a company buyer"
                - "Build the acquisition costs line as a function of land price"
                - "Show the net residual land value beside the gross figure"
            - name: Residual land value method in practice
              description: |-
                ## Purpose
                The residual method works backwards from what the finished scheme is worth to what you can afford to pay for the land, and small changes at the top produce large swings at the bottom. Working three schemes through by hand, then in the spreadsheet, builds the intuition that stops you being surprised when a two percent GDV fall wipes out a third of the land value.

                ## Milestones
                1. The residual calculation written out by hand for one simple scheme.
                2. The same scheme run in the spreadsheet with matching results.
                3. Two further schemes of different size worked through.
                4. A written note of how much land value moves for a one percent change in GDV and build cost on each scheme.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three schemes worked through by the residual method, with the land value gearing to GDV and build cost written down for each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Work one small scheme to a residual land value on paper"
                - "Rebuild the same scheme in the spreadsheet and reconcile any difference"
                - "Repeat for a larger scheme and a conversion"
                - "Write down how much land value moves for one percent changes in GDV and cost"
            - name: Profit on cost, profit on GDV and IRR compared
              description: |-
                ## Purpose
                Two schemes with the same profit on cost can be very different investments if one takes eighteen months and the other four years. Understanding when each measure matters, and how lenders, equity partners and landowners read them, lets you present a scheme in the terms its audience uses without hiding the time it takes.

                ## Milestones
                1. Profit on cost, profit on GDV and an equity IRR calculated for one scheme.
                2. The same scheme re-run with the programme stretched by six months.
                3. A note of how each measure moved and which audience cares about which.
                4. A standard summary line chosen that always shows all three.

                ## Notes
                IRR depends heavily on timing assumptions and on how much equity is in the deal. Show it alongside profit, never instead of it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One scheme shown on all three measures at two programme lengths, with a written note on which measure each audience relies on."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate profit on cost and on GDV for one live scheme"
                - "Lay out simple quarterly equity flows and calculate the IRR"
                - "Stretch the programme by six months and recalculate all three"
                - "Write which measure your lender, partner and landowner each look at"
            - name: Finance cost assumptions in the appraisal
              description: |-
                ## Purpose
                Finance is often entered as a flat percentage of cost, which can understate interest badly on a slow-selling scheme. Learning how interest builds up on a drawdown curve, how arrangement and exit fees are charged, and how sales receipts repay debt lets you choose a finance assumption that matches how the loan will actually behave.

                ## Milestones
                1. Simple, half-cost and S-curve methods for calculating interest compared on one scheme.
                2. Arrangement, exit and monitoring fees added as separate lines.
                3. Interest recalculated with a slower sales rate.
                4. A default method chosen for screening and another for full appraisals.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One scheme with interest calculated three ways, fees itemised, and a default finance method recorded for screening and full appraisals."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Calculate interest on one scheme as a flat rate on half the build cost"
                - "Recalculate it on an S-curve drawdown over the programme"
                - "Add arrangement, exit and monitoring fees as separate lines"
                - "Record which method you will use for screening and for full appraisals"
            - name: Reading a valuer's development appraisal
              description: |-
                ## Purpose
                Lenders rely on a registered valuer's report, and the valuer's GDV, costs and residual will often differ from yours. Knowing where to look in a valuation report, which assumptions the valuer has made and what was left out turns a disappointing valuation into a specific conversation instead of a lost loan.

                ## Milestones
                1. One past valuation report read with its key assumptions extracted.
                2. Each valuer assumption set beside the matching line in your own appraisal.
                3. The three largest differences explained in writing.
                4. A short list of evidence you would send a valuer next time to support your figures.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A side-by-side table of one valuer's assumptions against your appraisal, with the three biggest gaps explained."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a past valuation report or ask your lender for a redacted sample"
                - "Extract the valuer's GDV, build cost, fees, finance and profit assumptions"
                - "Put them beside your appraisal for the same scheme"
                - "Write the evidence you would supply to close each gap"
            - name: Choosing appraisal software or staying in a spreadsheet
              description: |-
                ## Purpose
                Dedicated appraisal software produces the format lenders and valuers recognise and handles cash flows and sensitivities quickly, but costs money and can hide its workings. A short comparison against your own spreadsheet, on the same scheme, settles whether the cost is worth it for the number of sites you appraise each year.

                ## Milestones
                1. Two or three software options shortlisted with annual cost and trial availability.
                2. The same scheme run in each trial and in your spreadsheet.
                3. Results, time taken and output quality compared.
                4. A decision recorded with a date to revisit it.

                ## Notes
                Start from the **Purchase decision** template. Ask your main lender which output format their credit team prefers before you buy.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on appraisal software after running one scheme through at least two options and your spreadsheet."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count how many sites you appraised in the last twelve months"
                - "Shortlist two appraisal software options with trial access"
                - "Run the same scheme through each trial and your spreadsheet"
                - "Record the choice and the date you will review it"
            - name: Sales rate and absorption assumptions
              description: |-
                ## Purpose
                How fast units sell drives finance cost, sales incentives and when profit is released, yet many appraisals assume every unit sells at completion. Grounding the sales rate in what comparable schemes actually achieved, and in how many buyers the local market has at your price point, keeps the programme honest.

                ## Milestones
                1. Sales rates found for at least three comparable new-build schemes nearby.
                2. Local agents asked how many units per month a scheme of your size typically sells.
                3. A base, slow and fast sales rate written down.
                4. The appraisal programme updated so finance reflects the base rate.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Base, slow and fast sales rates supported by at least three comparable schemes, built into the appraisal programme."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Identify three recent new-build schemes near your site"
                - "Ask agents or sales teams how long each took to sell out"
                - "Write base, slow and fast units-per-month rates"
                - "Rebuild the sales period in the appraisal from the base rate"
            - name: Contingency and risk allowance setting
              description: |-
                ## Purpose
                Five percent contingency on every scheme is a habit, not an assessment. Matching contingency to the actual risks in the scheme, such as unknown ground, an old building, a tight site or an untested contractor, gives you an allowance you can defend to a lender and a list of risks to close down before you commit.

                ## Milestones
                1. The scheme's top ten cost risks listed with likelihood and rough cost.
                2. Contingency set for design, construction and abnormal risks separately.
                3. The total compared with the flat rate you would otherwise have used.
                4. Actions recorded to reduce the three largest risks before purchase.

                ## Notes
                Start from the **Risk register** template. Contingency for a refurbishment or conversion usually needs to be higher than for a clean new-build site.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scheme risk list with separate design, construction and abnormal contingencies, and actions for the three largest risks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the ten cost risks you would worry about most on this scheme"
                - "Put a likelihood and a rough cost against each"
                - "Set separate design, construction and abnormal contingencies"
                - "Agree one action to reduce each of the three largest risks"
            - name: Comparable sales evidence refresh
              description: |-
                ## Purpose
                Sales evidence goes stale within months, and an appraisal that was right in spring can be wrong by autumn. A monthly half hour adding new achieved sales and noting price movement keeps GDV current on every live appraisal and gives early warning when a market is turning.

                ## Milestones
                1. New achieved sales added to the comparables record each month.
                2. Average price per square metre tracked for each target postcode or district.
                3. Any movement over a set threshold flagged against live appraisals.
                4. A quarterly line written on whether GDV assumptions still hold.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A comparables record with new sales added every month for twelve months and a quarterly GDV note."
                cadence: rolling
              tasks:
                - "Choose the districts and unit types you will track"
                - "Add new achieved sales to the comparables record @recurring(monthly:9)"
                - "Write a short note on whether live GDV assumptions still hold @recurring(quarterly)"
                - "Set the price movement threshold that triggers a reappraisal"
            - name: Build cost benchmark update
              description: |-
                ## Purpose
                Construction prices move with materials, labour and how busy contractors are, and a benchmark from last year can be well out. Updating the benchmark library each quarter from published cost indices, recent tenders and QS conversations keeps screening appraisals close to what the market will quote.

                ## Milestones
                1. A published construction cost or tender price index chosen and recorded each quarter.
                2. Benchmark rates uplifted or adjusted with the index and recent tenders.
                3. Live appraisals more than three months old checked against the new rates.
                4. One QS or contractor conversation logged each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Build cost benchmarks updated every quarter for a year, each update dated with its index value and source."
                cadence: rolling
              tasks:
                - "Pick a published tender price or construction cost index to follow"
                - "Update benchmark rates from the index and recent tenders @recurring(quarterly)"
                - "Call one quantity surveyor or contractor about current pricing @recurring(monthly:24)"
                - "Recheck build cost on any live appraisal older than three months"
            - name: Live pipeline appraisal register
              description: |-
                ## Purpose
                When several sites are in play, it is easy to lose track of which appraisal is current, which offer is out and which site has gone cold. A register listing each site with its latest residual, the asking price, your bid, the status and the next action gives a weekly picture of the pipeline in one place.

                ## Milestones
                1. Every site under consideration listed with appraisal date, residual, asking price and status.
                2. A next action and owner recorded for each site.
                3. Sites with no movement for six weeks closed or deliberately kept open.
                4. A weekly review that takes under twenty minutes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pipeline register reviewed weekly for three months, with every site showing a current appraisal date and a next action."
                cadence: rolling
              tasks:
                - "List every site you are appraising or have bid on"
                - "Review the register and update statuses and next actions @recurring(weekly:mon)"
                - "Close or deliberately keep open any site idle for six weeks @recurring(monthly:28)"
                - "Add the appraisal file link against each site"
            - name: Appraisal version control and change log
              description: |-
                ## Purpose
                An appraisal changes a dozen times between first look and exchange, and the version a lender saw may not be the one the board approved. A naming rule, a frozen copy at each decision point and a change log of what moved and why make it possible to explain any number later and to see how a scheme drifted.

                ## Milestones
                1. A file naming rule with site, date and version number.
                2. A frozen copy saved at each decision point: screening, offer, lender submission and exchange.
                3. A change log listing what changed, by how much and why, at each version.
                4. Old versions kept read-only in an archive folder.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live appraisal follows the naming rule and has a change log entry for each saved version."
                cadence: rolling
              tasks:
                - "Write the file naming rule and save it in the appraisal folder"
                - "Add a change log tab to the appraisal layout"
                - "Save a frozen copy each time an appraisal supports a decision"
                - "Check every live appraisal has an up-to-date change log @recurring(monthly:16)"
            - name: Second-person review before any offer
              description: |-
                ## Purpose
                Spreadsheet errors are routine, and the person who built the appraisal is the worst placed to find them. A short checklist review by a second person, partner, analyst or trusted peer, before any offer is made catches broken formulas, double counting and optimistic inputs while there is still time to change the bid.

                ## Milestones
                1. A review checklist covering formulas, areas, GDV evidence, costs, finance, profit and land value.
                2. A named reviewer agreed for each type of scheme.
                3. Every offer in the period preceded by a signed-off review.
                4. Errors found recorded so the checklist improves.

                ## Notes
                A good reviewer checks the totals by an independent route, for example GDV per square metre times area, rather than re-reading your formulas.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every land offer made over six months has a dated second-person review against the checklist, with errors logged."
                cadence: rolling
              tasks:
                - "Write a one-page appraisal review checklist"
                - "Agree who reviews your appraisals and how quickly they can turn one round"
                - "Record the errors each review found in a running list"
                - "Update the checklist from the errors list @recurring(quarterly)"
            - name: Completed scheme lookback against the appraisal
              description: |-
                ## Purpose
                The only way to learn whether your appraisals are any good is to compare them with what actually happened. A yearly lookback on every completed scheme, setting appraised GDV, cost, programme and profit beside the outturn, shows which assumptions you consistently get wrong and by how much.

                ## Milestones
                1. Each scheme completed in the year listed with its offer-stage appraisal and its final figures.
                2. Variances calculated for GDV, build cost, fees, finance, programme and profit.
                3. Patterns written down, for example build cost always ten percent over.
                4. Benchmarks, contingency or hurdles adjusted in response.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly variance table for every completed scheme against its offer-stage appraisal, with at least one assumption changed as a result."
                cadence: cyclic
              tasks:
                - "Find the offer-stage appraisal for each scheme completed this year"
                - "Hold the yearly appraisal lookback and write up the variances @recurring(yearly)"
                - "List the two assumptions you most consistently got wrong"
                - "Change the benchmark or contingency that the lookback points to"
            - name: Market input watch for rates and prices
              description: |-
                ## Purpose
                Interest rates, mortgage availability for buyers, investment yields and house price indices all feed the appraisal, and a move in any of them can turn a marginal site negative. A monthly note of the handful of market figures your appraisals depend on keeps you from bidding on last quarter's assumptions.

                ## Milestones
                1. Five to eight market indicators chosen, such as policy rate, swap rates, a house price index and buyer mortgage rates.
                2. Each indicator recorded monthly in one table.
                3. A trigger set for each indicator that prompts a reappraisal of live sites.
                4. Twelve months of readings kept for comparison.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A table of five to eight market indicators updated monthly for a year, with reappraisal triggers written beside each."
                cadence: rolling
              tasks:
                - "Choose the market indicators your appraisals depend on most"
                - "Record the month's market indicator readings @recurring(monthly:3)"
                - "Set the movement on each indicator that triggers a reappraisal"
                - "Reappraise any live site whose trigger has been hit"
                - "Send a one-paragraph market note to your partner or lender @recurring(quarterly)"
            - name: Agent and valuer soundings on values
              description: |-
                ## Purpose
                Published data lags the market by months, while the agents selling new homes and the valuers signing them off know where prices are this week. A regular call to two or three local agents and an occasional conversation with a valuer gives early sight of incentives, buyer appetite and down-valuations before they show in the data.

                ## Milestones
                1. Two or three agents and one valuer identified in each target area.
                2. A short standard set of questions on prices, incentives, buyer types and time to sell.
                3. Answers logged with the date and person after every call.
                4. Any difference from published data noted against live appraisals.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log of at least one agent or valuer sounding every month for six months, each with date, name and key answers."
                cadence: rolling
              tasks:
                - "Name the agents and valuer you will call in each target area"
                - "Write five standard questions on prices, incentives and time to sell"
                - "Call one agent or valuer and log the answers @recurring(monthly:19)"
                - "Compare the soundings with your published data @recurring(quarterly)"
            - name: Finance terms tracker for appraisal inputs
              description: |-
                ## Purpose
                Appraisals often carry a finance rate and loan-to-cost assumption from a quote that is long expired. Keeping a short table of current indicative terms from a few lenders, rate margin, fees, loan to cost and loan to GDV, means the finance line in each appraisal matches what you could actually raise today.

                ## Milestones
                1. Three or more lenders' indicative terms recorded with date and scheme type.
                2. Default finance inputs for appraisals set from the current table.
                3. Terms refreshed each quarter.
                4. Live appraisals updated when default inputs change.

                ## Notes
                Raising and managing the loan itself belongs with construction finance work. This tracker only keeps the appraisal inputs honest.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A finance terms table refreshed every quarter, with appraisal default inputs dated and traceable to it."
                cadence: rolling
              tasks:
                - "List three lenders or brokers who will give indicative terms"
                - "Refresh indicative terms from lenders or a broker @recurring(quarterly)"
                - "Set the appraisal default rate, fees and loan to cost from the table"
                - "Update the finance line in any appraisal using superseded defaults"
            - name: Sensitivity table for sales price and build cost
              description: |-
                ## Purpose
                A single profit figure hides how fragile it is. A two-way table showing profit and land value as sales prices and build costs move by five and ten percent in each direction shows at a glance how much room the scheme has, and it is the first thing a lender or partner will ask for.

                ## Milestones
                1. A two-way sensitivity grid of GDV against build cost built into the appraisal.
                2. Each cell showing profit on cost, with cells below the hurdle highlighted.
                3. A one-way table for sales rate and finance rate added.
                4. The break-even GDV and break-even build cost written in the summary.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An appraisal with a GDV against build cost grid, one-way tables for sales rate and finance rate, and break-even figures in the summary."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build a grid of GDV against build cost at five and ten percent steps"
                - "Highlight every cell that falls below your profit hurdle"
                - "Add one-way tables for sales rate and finance rate"
                - "Write the break-even GDV and build cost into the summary block"
            - name: Base, downside and upside scenario appraisals
              description: |-
                ## Purpose
                Sensitivities move one or two inputs, but real downturns move several at once: prices fall, sales slow, finance costs rise and the programme slips. Three named scenarios, each a coherent story, show what the scheme looks like if the market turns and whether you could still repay the debt.

                ## Milestones
                1. Base, downside and upside scenarios defined in a sentence each.
                2. Each scenario's inputs set together, including GDV, sales rate, build cost, finance and programme.
                3. Profit, peak debt and equity at risk shown for each scenario.
                4. A written view on whether the downside is survivable.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three named scenario appraisals for one scheme, each with profit, peak debt and equity at risk, and a written view on the downside."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write one sentence describing each of the three scenarios"
                - "Set the inputs for each scenario together, not one at a time"
                - "Show profit, peak debt and equity at risk for each"
                - "Write whether you could survive the downside and how"
            - name: Unit mix testing for value
              description: |-
                ## Purpose
                Within the same building envelope, a different mix of studios, one-beds and family homes can change GDV and sales speed noticeably. Testing two or three mixes in the appraisal, with the architect confirming each fits, shows which mix maximises land value while matching what local buyers actually want.

                ## Milestones
                1. Two or three alternative unit mixes drawn up with the architect within the same envelope.
                2. GDV, build cost and sales rate estimated for each mix.
                3. Residual land value compared across the mixes.
                4. A preferred mix chosen with reasons and planning policy checked.

                ## Notes
                Local planning policy often sets a required housing mix. Check it before favouring a mix that will not be approved.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Residual land values compared for at least two unit mixes in the same envelope, with a chosen mix and the planning policy check recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the architect for two alternative unit mixes in the same envelope"
                - "Ask local agents which unit types sell fastest at your price point"
                - "Run each mix through the appraisal"
                - "Check the local housing mix policy before choosing"
            - name: Maximum bid and walk-away price decision
              description: |-
                ## Purpose
                Negotiations for land are where discipline breaks down, because each small increase looks affordable on its own. Writing down an opening offer, a target and a walk-away price, each tied to the appraisal and the hurdle, before talking to the seller keeps the final price inside the numbers.

                ## Milestones
                1. Residual land value at your hurdle calculated net of acquisition costs.
                2. Opening offer, target and walk-away prices written down with the reasoning.
                3. Conditions you would trade for price listed, such as subject to planning or deferred payment.
                4. The final agreed price recorded against the walk-away figure.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written opening, target and walk-away price for one site set before negotiation, and the outcome recorded against them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Calculate the residual at your hurdle net of acquisition costs"
                - "Write opening, target and walk-away prices before contacting the seller"
                - "List the conditions you would accept in exchange for a higher price"
                - "Record the final price against your walk-away figure"
            - name: Abnormal costs allowance for site conditions
              description: |-
                ## Purpose
                Abnormal costs, such as poor ground, contamination, demolition, retaining walls, flood mitigation or diverting services, are the classic reason a site that looked cheap was cheap. Putting a reasoned allowance for each in the appraisal, based on desktop reports and early surveys, stops them arriving as a surprise after purchase.

                ## Milestones
                1. Desktop ground, flood and utilities information obtained for the site.
                2. Each likely abnormal listed with a cost range from a QS or engineer.
                3. Abnormals entered as separate lines, not hidden in contingency.
                4. The surveys needed before exchange identified and priced.

                ## Notes
                Ask the seller for any existing site investigation reports before paying for new ones. Many sites have been surveyed before.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An appraisal with each likely abnormal cost on its own line with a range, and a priced list of surveys needed before exchange."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the seller or agent for any existing ground or contamination reports"
                - "Order desktop ground, flood and utilities searches for the site"
                - "Get a cost range for each likely abnormal from a QS or engineer"
                - "Enter abnormals as separate appraisal lines"
            - name: Planning obligations and levies in land value
              description: |-
                ## Purpose
                Affordable housing requirements, infrastructure levies and site-specific planning contributions can take a large slice out of land value, and they are set by the local authority, not by the market. Modelling them explicitly, with the policy source noted, shows how much of the land value goes to the community and gives you a basis for any viability discussion.

                ## Milestones
                1. The local authority's affordable housing and contributions policy identified and summarised.
                2. Each obligation costed and entered as a separate line or as a revenue reduction.
                3. Residual land value shown with and without the obligations.
                4. A note on whether a viability case might be needed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An appraisal showing residual land value with and without planning obligations, each obligation costed and its policy source recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the local authority's affordable housing and contributions policies"
                - "Cost each obligation that would apply to your scheme"
                - "Show residual land value with and without the obligations"
                - "Ask your planning consultant whether the obligations look negotiable"
            - name: Sell on completion or hold and refinance appraisal
              description: |-
                ## Purpose
                Some schemes earn more as a let investment than as individual sales, and some only work if sold. Appraising the completed scheme both ways, sales GDV against an investment value from rent and yield, with the debt and tax position checked by an adviser, tells you which exit the land price should be based on.

                ## Milestones
                1. Sales GDV and investment value calculated for the same completed scheme.
                2. Holding costs, management and voids estimated for the hold case.
                3. Profit, cash returned and capital left in shown for each exit.
                4. Tax treatment of each exit checked with an adviser and a preferred exit recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One scheme appraised on both a sale and a hold exit, with cash returned, capital left in and an adviser's tax view recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask a letting agent for achievable rents on each unit type"
                - "Calculate an investment value using a yield from recent investment sales"
                - "Compare cash returned and capital left in under each exit"
                - "Ask your tax adviser how each exit would be taxed for your company"
            - name: Programme length assumptions check
              description: |-
                ## Purpose
                Every month added to a programme adds interest, overheads and market risk, and appraisals routinely assume the fastest possible route. Checking the pre-construction, build and sales periods against what similar schemes took, including planning and discharge of conditions, gives a programme that finance and profit can rely on.

                ## Milestones
                1. Pre-construction, construction and sales periods each set with a source.
                2. Planning and condition discharge time checked against the authority's recent record.
                3. Build period checked with a contractor or QS for the building type.
                4. The appraisal re-run with the checked programme and the change in profit noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An appraisal programme where each period has a named source, re-run with the profit change recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the pre-construction, build and sales periods you currently assume"
                - "Check how long the local authority recently took on similar applications"
                - "Ask a contractor how long the build would take for your building type"
                - "Re-run the appraisal and note how profit changed"
            - name: Appraisal for a land bid deadline
              description: |-
                ## Purpose
                Land offered by informal tender or with a best and final date gives you days, not weeks, to appraise. Running a structured sprint, evidence, costs, review and bid letter, against the deadline means the bid is based on a checked appraisal rather than a number written at midnight.

                ## Milestones
                1. A day-by-day plan from receiving the pack to the bid deadline.
                2. GDV evidence, build cost and abnormals assumptions completed by the halfway point.
                3. A second-person review completed at least a day before the deadline.
                4. The bid submitted with conditions stated and the appraisal version frozen.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A bid submitted before the deadline, backed by a reviewed and frozen appraisal with its conditions stated in writing."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Write the day-by-day plan from today to the bid deadline"
                - "Book the reviewer's time for the day before the deadline"
                - "Complete GDV, cost and abnormal assumptions by the halfway point"
                - "Freeze the appraisal version and submit the bid with conditions"
            - name: Appraisal pack for a lender credit submission
              description: |-
                ## Purpose
                Lenders decide on a summary of the appraisal, the evidence behind it and the sponsor's track record, and an untidy pack slows or shrinks the offer. A clean pack with the appraisal, comparables, cost plan, programme, sensitivities and your experience shows the credit team you understand the scheme's risks.

                ## Milestones
                1. A summary appraisal in a format the lender recognises.
                2. Comparables, cost plan and programme attached as supporting evidence.
                3. Sensitivities and a downside scenario included.
                4. A one-page sponsor track record and a schedule of the equity you are putting in.

                ## Notes
                Negotiating and drawing the loan sits with construction finance work. This pack is about presenting the appraisal well.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A lender-ready appraisal pack with summary, evidence, sensitivities and sponsor track record, submitted to at least one lender."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the lender for their preferred appraisal summary format"
                - "Gather comparables, cost plan and programme into one folder"
                - "Add sensitivities and the downside scenario"
                - "Ask the agent to draft a one-page sponsor track record for you to edit"
            - name: Investment committee or partner appraisal presentation
              description: |-
                ## Purpose
                Whether the committee is a formal board, a JV partner or two co-founders around a table, a scheme should be approved on a written appraisal paper, not on enthusiasm. A short paper and a presentation covering the numbers, the evidence, the risks and the ask leaves a record of what was approved and on which assumptions.

                ## Milestones
                1. A paper of no more than four pages covering scheme, appraisal summary, risks and the decision sought.
                2. Sensitivities and scenarios in an appendix.
                3. The meeting held with questions and answers minuted.
                4. The decision and any conditions recorded against the frozen appraisal version.

                ## Notes
                Start from the **Board meeting** template to keep the agenda, paper and minutes together.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An approval meeting held on a written appraisal paper, with minutes recording the decision, conditions and appraisal version."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the committee or partner meeting date"
                - "Write the four-page appraisal paper and appendix"
                - "Circulate the paper at least three days before the meeting"
                - "Minute the decision and link it to the frozen appraisal"
            - name: Viability assessment for a planning application
              description: |-
                ## Purpose
                Where policy obligations would make a scheme unviable, many planning authorities accept a viability assessment arguing for a reduced contribution, and they will have it independently checked. A clear, evidenced submission prepared with a viability consultant, using the authority's own method and benchmark land value approach, gives the best chance of a fair outcome.

                ## Milestones
                1. The authority's viability guidance and required format identified.
                2. A viability consultant appointed or the in-house author agreed.
                3. An assessment prepared with evidence for every input and a benchmark land value.
                4. The assessment submitted and the authority's reviewer's questions answered.

                ## Notes
                Viability assessments are often published. Write every assumption as if a resident and the council's reviewer will both read it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A viability assessment in the authority's required format submitted with the application, and reviewer questions answered in writing."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Download the planning authority's viability guidance"
                - "Get two fee quotes from viability consultants"
                - "Agree the benchmark land value approach with your consultant"
                - "Log each question from the authority's reviewer and your answer"
            - name: Appraisal refresh before exchange of contracts
              description: |-
                ## Purpose
                Weeks or months pass between agreeing a price and exchanging contracts, and survey results, cost quotes and market moves arrive in between. A full refresh just before exchange, with every input re-sourced, is the last point at which you can renegotiate or withdraw without losing a deposit.

                ## Milestones
                1. Every input re-checked and dated within the last month.
                2. Survey and due diligence findings reflected in costs and contingency.
                3. Profit compared with the offer-stage appraisal and the gap explained.
                4. A written proceed, renegotiate or withdraw decision made before exchange.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A refreshed appraisal dated within a month of exchange, with variances to the offer stage explained and a written decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every input in the offer-stage appraisal older than one month"
                - "Add the survey and due diligence findings to costs and contingency"
                - "Compare the refreshed profit with the offer-stage figure"
                - "Write and share the proceed, renegotiate or withdraw decision"
            - name: Reappraisal when planning consent arrives
              description: |-
                ## Purpose
                The consent that comes back is rarely the scheme that went in: units are lost, conditions are added and obligations are fixed in a legal agreement. Reappraising on the consented scheme, before buying on a subject-to-planning deal or starting on site, shows whether the price or the plan still works.

                ## Milestones
                1. The decision notice, conditions and any planning agreement read and summarised.
                2. Unit numbers, areas and obligations updated in the appraisal.
                3. The cost of discharging each condition estimated.
                4. Profit and land value on the consented scheme compared with the application scheme.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A reappraisal on the consented scheme with condition costs and obligations included, compared in writing with the application scheme."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the decision notice and every condition in a table"
                - "Update units, areas and obligations to the consented scheme"
                - "Estimate the cost and time to discharge each condition"
                - "Compare the new profit and land value with the application scheme"
            - name: First small scheme appraisal for a new developer
              description: |-
                ## Purpose
                Founders moving from buy-to-let or a day job into a first two-to-six unit scheme usually underestimate fees, finance, sales costs and their own time. Appraising a first small scheme with a mentor or experienced developer checking each line builds the habits that larger schemes depend on and avoids a first deal that wipes out the savings.

                ## Milestones
                1. A full appraisal of one small scheme using the standard layout.
                2. Every cost heading checked by an experienced developer or QS.
                3. Your own time and overheads included as a cost.
                4. A go or no-go decision written with the profit and equity at risk.

                ## Notes
                Small schemes carry the same fixed fees as larger ones. A margin that looks healthy on paper can disappear once warranties, connections and finance fees are counted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A first small scheme appraisal checked line by line by an experienced developer, with a written go or no-go decision."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask an experienced developer to review your first appraisal"
                - "Appraise one small scheme using the standard layout"
                - "Add your own time and company overheads as a cost line"
                - "Write the go or no-go decision with the equity you would risk"
            - name: Builder's move into own-account development appraisal
              description: |-
                ## Purpose
                Contractors appraising their own scheme know build costs well but often price them at cost, forget the contractor margin they are giving up and underestimate sales and finance. Appraising with the build priced at full market rate, then showing the contracting margin separately, gives a true picture of whether development adds anything over simply building for others.

                ## Milestones
                1. Build cost priced at market rate as if tendered.
                2. Your contracting margin shown separately from development profit.
                3. Sales, marketing, finance and warranty costs included in full.
                4. A comparison of development profit with what the same build would earn as a contract.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An appraisal for one scheme with market-rate build cost and contracting margin shown separately, compared with the contract-only return."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Price the build as if tendering it to a third-party client"
                - "Show your contracting margin as a separate line"
                - "Add sales, marketing, finance and warranty costs at market rates"
                - "Compare development profit with the contract-only margin"
            - name: Appraisal portfolio for an analyst career
              description: |-
                ## Purpose
                Analysts aiming for roles at developers, lenders or advisory firms are often asked to appraise a site in an interview or case study. A portfolio of five appraisals across scheme types, each with evidence, sensitivities and a one-page recommendation, shows the skill directly and gives you practice under the time pressure an assessment brings.

                ## Milestones
                1. Five scheme types chosen, such as small new-build, conversion, flats, mixed-use and a commercial element.
                2. Each appraised using public information only, with sources noted.
                3. A one-page recommendation written for each.
                4. One appraisal completed against a timed two-hour case study limit.

                ## Notes
                Use only public information. Never put a current or former employer's deal data in a personal portfolio.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Five public-information appraisals with one-page recommendations, including one completed within a timed two-hour limit."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose five sites with public planning applications to appraise"
                - "Appraise the first site using only public sources"
                - "Write a one-page recommendation for each completed appraisal"
                - "Run one appraisal as a timed two-hour case study"
            - name: Landowner appraisal of develop, sell or partner
              description: |-
                ## Purpose
                A business or family that owns land can sell it as it is, sell with planning, develop it alone or partner with a developer, and each option has very different risk and reward. Appraising the land on each route, with time, capital needed and the risk taken shown alongside value, makes the choice a deliberate one.

                ## Milestones
                1. Current land value and value with planning estimated with a valuer or agent.
                2. A development appraisal showing profit and capital needed if you build it yourself.
                3. An indicative partner or JV return sketched from typical market splits.
                4. A comparison table of value, time, capital and risk for each route, and a chosen route.

                ## Notes
                Tax on each route can differ greatly. Agree the position with a tax adviser before choosing.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table comparing value, time, capital and risk for selling, selling with planning, developing and partnering, with a chosen route recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask an agent for the land value today and with planning"
                - "Appraise the scheme as if you developed it yourself"
                - "Sketch an indicative partner return from typical splits"
                - "Book a tax adviser to review the options before deciding"
            - name: Conversion and change of use appraisal
              description: |-
                ## Purpose
                Converting an office, shop or barn to homes looks cheap per unit until the building reveals its problems: structure, fire separation, sound insulation, daylight and services. Appraising a conversion with a measured survey, a structural view and a higher contingency gives a figure that survives the strip-out.

                ## Milestones
                1. A measured survey or reliable floor plans obtained for the building.
                2. Net saleable area worked out from the existing structure and stair cores.
                3. Structural, fire and acoustic upgrade costs estimated by a surveyor or engineer.
                4. A conversion-specific contingency set and the residual compared with the asking price.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A conversion appraisal based on a measured survey with upgrade costs and a conversion contingency, compared with the asking price."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the seller for existing floor plans or order a measured survey"
                - "Work out net saleable area around the existing cores"
                - "Get structural, fire and acoustic upgrade estimates"
                - "Set a conversion contingency and compare the residual with the price"
            - name: Phased scheme appraisal with staged land payments
              description: |-
                ## Purpose
                Larger sites are built and sold in phases, and appraising them as one block hides the cash flow advantage of recycling early sales into later phases. Appraising phase by phase, with land paid in tranches and infrastructure front-loaded, shows peak debt, when profit is released and whether a later phase can be dropped if the market turns.

                ## Milestones
                1. The scheme split into phases with units, areas and timing for each.
                2. Shared infrastructure costs allocated and timed, usually ahead of phase one.
                3. Land payments set in tranches linked to phases.
                4. Peak debt, profit per phase and whole-scheme return shown.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A phase-by-phase appraisal with infrastructure timing, staged land payments, peak debt and profit per phase."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Split the scheme into phases with the architect"
                - "Allocate and time the shared infrastructure costs"
                - "Model land payments in tranches tied to each phase"
                - "Show peak debt and profit for each phase and in total"
            - name: Overage and deferred land payment appraisal
              description: |-
                ## Purpose
                Sellers often accept a lower upfront price in exchange for overage, a share of uplift if planning or sales beat expectations, or a deferred payment on completion. Appraising these structures properly, including how overage is triggered and measured, shows what they truly cost and protects you from paying overage on value you created yourself.

                ## Milestones
                1. The proposed overage or deferred payment terms summarised in plain words.
                2. The payment calculated under base, upside and downside scenarios.
                3. Total land cost with overage compared with a straight price.
                4. Wording points for the solicitor listed, such as the definition of uplift and allowable costs.

                ## Notes
                Overage drafting is a legal matter. Use the appraisal to show your solicitor what each clause would cost, and let them draft it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An appraisal of overage or deferred payments under three scenarios, compared with a straight price, with wording points sent to the solicitor."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Summarise the seller's proposed overage or deferred terms in plain words"
                - "Calculate the payment under base, upside and downside scenarios"
                - "Compare total land cost with overage against a straight price"
                - "Send the solicitor the definitions that most affect the payment"
            - name: Commercial element valued from rent and yield
              description: |-
                ## Purpose
                Ground-floor shops, workspace or a small commercial building are valued not per square metre of sales but as rent capitalised at a yield, with rent-free periods, letting fees and voids deducted. Appraising this part correctly stops an optimistic yield or a missing void period inflating GDV on an otherwise residential scheme.

                ## Milestones
                1. Achievable rent for the commercial space evidenced by local lettings.
                2. An investment yield evidenced by recent sales of similar let space.
                3. Void period, rent-free incentive and letting costs deducted.
                4. The commercial GDV shown let and unlet, with the difference noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A commercial element valued from evidenced rent and yield, net of voids and incentives, shown both let and unlet."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask a commercial agent for achievable rents and typical incentives"
                - "Find two or three recent sales of similar let space and their yields"
                - "Deduct voids, rent-free periods and letting costs"
                - "Show the commercial value let and unlet in the appraisal"
            - name: Probabilistic appraisal with input ranges
              description: |-
                ## Purpose
                Experienced appraisers know that a single figure for each input is false precision. Giving the five most sensitive inputs a range and running a simple simulation shows the spread of likely profit and the chance of falling below the hurdle, which is a far better basis for deciding how much to bid than one point estimate.

                ## Milestones
                1. The five most sensitive inputs identified from the sensitivity tables.
                2. A low, likely and high value set for each, with sources.
                3. A simulation of at least a thousand runs built in the spreadsheet or an add-in.
                4. The chance of profit falling below the hurdle written in the summary.

                ## Notes
                Ranges are only as good as their evidence. Correlated inputs, such as sales price and sales rate, should move together or the result looks safer than it is.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A simulation of at least a thousand runs over five evidenced input ranges, with the probability of missing the hurdle stated."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the five inputs that move profit most in your sensitivity tables"
                - "Set a low, likely and high value for each with a source"
                - "Build a simple simulation and run at least a thousand trials"
                - "Write the chance of falling below the hurdle in the summary"
            - name: Challenging a third-party viability assessment
              description: |-
                ## Purpose
                Developers, landowners and advisers sometimes need to test someone else's appraisal: a council's reviewer, a competing bidder's case or a JV partner's figures. A structured line-by-line challenge, separating evidence from opinion and quantifying each disagreement, produces a response that moves the other side rather than one that simply disagrees.

                ## Milestones
                1. The other appraisal's assumptions extracted into a table beside your own.
                2. Each difference classed as evidence-backed, judgement or error.
                3. The value effect of each difference calculated.
                4. A written response covering the largest differences with your evidence attached.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written response to a third-party appraisal that quantifies each disagreement and attaches evidence for the largest ones."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Extract every assumption from the other appraisal into a table"
                - "Class each difference as evidence, judgement or error"
                - "Calculate how much each difference moves land value"
                - "Ask the agent to draft the response letter from your table, then edit it"
---

# Development Appraisal

Development appraisal is the arithmetic that sits behind every land offer: what the finished scheme is worth, what it costs to build, fund and sell, and what is left over for profit or for the land. This area is for founders and small developers appraising their own sites, builders moving into own-account schemes, and analysts who appraise for a living. It starts with a fixed appraisal layout, return hurdles and the evidence behind each input, moves through the methods and the recurring machinery that keeps assumptions fresh, then covers sensitivities and bid decisions, the dated moments when an appraisal goes in front of a lender, a partner or a planning authority, situations for different kinds of appraiser, and the specialist work of phased schemes, overage, probabilistic ranges and challenging someone else's viability case.

The rhythms are a monthly refresh of sales evidence and market inputs, a quarterly update of build cost benchmarks and finance terms, a weekly look at the live pipeline register, a second-person review before any offer leaves the building, and a yearly lookback comparing completed schemes with what the appraisal promised. The Metrics log template suits the evidence and benchmark records, Purchase decision suits choosing appraisal software, Risk register suits the contingency work and Board meeting suits an investment committee presentation. None of this is valuation or investment advice: agree values with a registered valuer and tax, legal and planning positions with the right professionals. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
