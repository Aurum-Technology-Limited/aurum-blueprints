---
id: real-estate-development.development-cost-control
name: Development Cost Control
description: "Build costs you can see and steer: a locked budget and cost codes, a monthly QS report and final cost forecast, variations under change control, contingency spent on purpose, value engineering and a final account settled on time."
category: business
version: 1.0.0
tags: [real-estate-development, development-cost-control, founder, small-business, quantity-surveying, cost-plan, variations, final-account]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - remediation-plan
    - risk-register
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Development Cost Control
          description: "Controlling build costs: cost plans, quantity surveyor reports, variations, contingency use, value engineering and settling the final account."
          projects:
            - name: Cost authority and approval matrix
              description: |-
                ## Purpose
                Overruns often begin with someone on site agreeing an extra that nobody with budget authority ever saw. A one-page matrix saying who may instruct a change, who may commit spend at each value band and who signs off contingency closes that gap before the first instruction is issued.

                ## Milestones
                1. Every person who can instruct the contractor named, with the contract role they hold.
                2. Spending limits set in three or four value bands, with the approver for each band.
                3. Contingency release reserved to the developer, in writing.
                4. The matrix issued to the design team, contractor and quantity surveyor and acknowledged.

                ## Notes
                Under most building contracts only the named contract administrator or employer's agent can issue a valid instruction. Make sure your matrix matches the contract, not the other way round.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed approval matrix with named approvers and value bands, acknowledged in writing by the contractor and every consultant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List everyone who currently gives instructions on site or by email"
                - "Check which roles the building contract allows to issue instructions"
                - "Set value bands and an approver for each band"
                - "Issue the matrix and ask each party to confirm receipt"
                - "Recheck the matrix against current staff and roles @recurring(quarterly)"
            - name: Locked construction budget from the approved appraisal
              description: |-
                ## Purpose
                Budgets that drift every time a new figure arrives cannot be controlled, because there is nothing fixed to measure against. Freezing the build, fee and contingency lines from the appraisal that went to the funder or board gives one baseline, dated and versioned, that every later report compares with.

                ## Milestones
                1. Build cost, professional fees, statutory costs and contingency lifted from the approved appraisal.
                2. Each line tied to its source: cost plan, fee quote or allowance.
                3. Budget version 1 dated and saved as read only.
                4. A rule written for when and how a rebaselined budget may be issued.

                ## Notes
                Keep the original baseline even after you rebaseline. Lenders and partners will ask how far the scheme moved from the first approved number.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated, read-only budget version 1 matching the approved appraisal line for line, with a written rebaseline rule."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the appraisal version the funder or partners actually approved"
                - "Copy build, fees, statutory costs and contingency into a budget sheet"
                - "Note the source document beside every budget line"
                - "Save the sheet as budget version 1 and lock it from editing"
            - name: Elemental cost codes for the scheme
              description: |-
                ## Purpose
                Costs only become comparable when every invoice, variation and forecast lands in the same bucket each time. Setting cost codes by element, such as substructure, frame, envelope, services and externals, lets you see which part of the building is moving and benchmark it against the next scheme.

                ## Milestones
                1. A code list of fifteen to thirty elements agreed with the quantity surveyor.
                2. Separate codes for preliminaries, fees, statutory costs and contingency.
                3. The code list matched to the layout of the cost plan and the contract sum analysis.
                4. Every budget line in version 1 carrying a cost code.

                ## Notes
                Borrow the element structure your quantity surveyor already uses, often based on a published measurement standard, rather than inventing your own.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every line of the locked budget carries one of an agreed set of elemental cost codes that also matches the contract sum analysis."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the quantity surveyor which element structure their cost plans use"
                - "Draft a code list covering build, prelims, fees and contingency"
                - "Map each line of the contract sum analysis to a code"
                - "Tag every budget line with its cost code"
            - name: Quantity surveyor cost reporting brief
              description: |-
                ## Purpose
                Monthly cost reports vary wildly between firms, and a vague brief produces a report that shows what was paid but not what the job will finally cost. Writing down exactly what you want each month, in what format and by which date, gets a report you can act on from the first issue.

                ## Milestones
                1. Report contents listed: budget, committed, anticipated final cost, variations, risks and contingency.
                2. A reporting date each month agreed, tied to the contractor's valuation date.
                3. A one-page summary format agreed for partners and lenders.
                4. The brief added to the quantity surveyor's appointment or confirmed by email.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written reporting brief confirmed by the quantity surveyor, with fixed contents, format and a monthly issue date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect two sample cost reports the surveyor has issued before"
                - "Mark up the sections you need and the ones you do not"
                - "Agree a monthly issue date a few days after each valuation"
                - "Confirm the brief in writing and file it with the appointment"
            - name: Contingency structure and release rules
              description: |-
                ## Purpose
                One lump of contingency gets spent on the first problem that appears, leaving nothing for the ground or the services clashes later in the job. Splitting it into design, construction and client contingency, each with a sum and a release rule, makes every spend a deliberate decision rather than a habit.

                ## Milestones
                1. Total contingency split into design, construction and client pots with amounts.
                2. A release rule written for each pot naming who approves and on what evidence.
                3. A minimum balance set for each stage of the build.
                4. The rules shared with the quantity surveyor and reflected in the cost report layout.

                ## Notes
                Contingency held inside the contractor's price is not yours to control. Know how much of the total sits on your side of the contract.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written contingency policy with three named pots, amounts, approvers and minimum balances, mirrored in the monthly cost report."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find how much contingency sits in the budget and in the contract sum"
                - "Split your contingency into design, construction and client pots"
                - "Write a release rule and approver for each pot"
                - "Set a minimum balance for each build stage"
            - name: Cost control vocabulary for developers
              description: |-
                ## Purpose
                Quantity surveyors, contractors and lenders use terms such as provisional sum, prime cost, dayworks and anticipated final cost precisely, and mixing them up in a meeting costs credibility and sometimes money. A personal glossary of thirty terms, each with an example from your own scheme, makes cost meetings shorter and sharper.

                ## Milestones
                1. Thirty cost terms listed with a plain definition each.
                2. An example from your own budget or contract beside at least fifteen of them.
                3. The difference between committed cost, paid cost and anticipated final cost explained in your own words.
                4. The glossary checked by your quantity surveyor.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A thirty-term glossary with scheme examples, reviewed and corrected by your quantity surveyor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Highlight every unfamiliar term in your last cost report"
                - "Write a one-line definition for each term"
                - "Add an example from your own contract beside each one you can"
                - "Ask the quantity surveyor to correct anything that is wrong"
            - name: Change control procedure and request form
              description: |-
                ## Purpose
                Variations are the single biggest source of cost growth on most schemes, and the expensive ones are usually agreed verbally and priced after the work is done. A short procedure that requires a written request, a priced estimate and an approval before work starts turns change from a surprise into a choice.

                ## Milestones
                1. A one-page change request form with description, reason, cost, time and approver fields.
                2. A rule that no change proceeds without an approved form, except genuine safety emergencies.
                3. A numbering system that links each request to the variation register.
                4. The procedure briefed to the contractor and design team at a progress meeting.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written change procedure and numbered request form in use, with the contractor and consultants briefed and minutes recording it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page change request form with cost and time fields"
                - "Write the rule for emergency changes made for safety"
                - "Set a numbering format that matches the variation register"
                - "Brief the procedure at the next progress meeting and minute it"
            - name: Development cost tracker with committed and forecast columns
              description: |-
                ## Purpose
                Developers who only track what has been paid find out about an overrun when the money runs short. A tracker that shows, for every cost code, the budget, the committed sum, the paid sum and the anticipated final cost reveals the gap months earlier, while there is still room to act.

                ## Milestones
                1. One row per cost code with budget, committed, paid and forecast columns.
                2. Variance to budget calculated in money and percentage for every line.
                3. Fees, statutory costs and client direct costs included, not just the build contract.
                4. The tracker reconciled once to the latest quantity surveyor report.

                ## Notes
                Start from the **Metrics log** template. Keep one total at the bottom that matches the appraisal build cost line exactly.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tracker covering every cost code with budget, committed, paid and forecast columns, reconciled to the latest cost report within a small rounding difference."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set up columns for budget, committed, paid and forecast by cost code"
                - "Load the locked budget and every signed order or appointment"
                - "Add fees, statutory charges and client direct costs"
                - "Reconcile the totals to the quantity surveyor's latest report"
            - name: Contract sum analysis and pricing document review
              description: |-
                ## Purpose
                The priced documents behind the contract sum decide how every future variation will be valued, so gaps or lump-sum items with no breakdown store up arguments for later. Reviewing the contract sum analysis with the quantity surveyor before signing, or as soon as possible after, shows where rates exist and where they do not.

                ## Milestones
                1. The contract sum analysis or priced bill obtained and filed.
                2. Items priced as a single lump sum with no breakdown identified.
                3. Rates for common trades extracted into a short reference list.
                4. Gaps raised with the contractor and a breakdown requested where needed.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of priced rates and unbroken lump sums from the contract documents, with breakdowns requested for every significant gap."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the priced contract documents in the signed contract set"
                - "List every item priced as a lump sum with no breakdown"
                - "Extract rates for the ten most common trades into a reference sheet"
                - "Ask the contractor for breakdowns on the largest lump sums"
            - name: Monthly cost report meeting with the QS
              description: |-
                ## Purpose
                A cost report read alone gets skimmed; a cost report discussed for forty minutes with the person who wrote it gets acted on. Holding a fixed monthly meeting a few days after each report, with the same agenda every time, keeps decisions, owners and dates attached to every movement in the numbers.

                ## Milestones
                1. A standing monthly slot booked with the quantity surveyor for the life of the build.
                2. A fixed agenda covering forecast movement, variations, risks and contingency.
                3. Actions from each meeting recorded with owner and date.
                4. Last month's actions reviewed at the start of each meeting.

                ## Notes
                Start from the **Meeting notes** template. Ask for the report two working days before the meeting so you can read it first.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A cost report meeting held every month of the build with minutes and an action list, and every action closed or carried with a reason."
                cadence: rolling
              tasks:
                - "Book a recurring monthly slot with the quantity surveyor"
                - "Read the cost report and note three questions before the meeting @recurring(monthly:12)"
                - "Record decisions and actions with owners and dates"
                - "Open each meeting by checking last month's actions"
            - name: Anticipated final cost forecast each month
              description: |-
                ## Purpose
                What matters is not what has been spent but what the job will cost when it is finished, including variations not yet priced and risks not yet landed. Updating the anticipated final cost line by line each month, and explaining every movement over a set threshold, gives you and your funder an honest view of margin.

                ## Milestones
                1. Anticipated final cost updated for every cost code after each cost report.
                2. Every movement above an agreed threshold explained in one sentence.
                3. Forecast profit on cost recalculated from the new total.
                4. A rolling chart of anticipated final cost against budget kept for the whole build.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly anticipated final cost with explained movements and updated profit on cost, recorded for every month from start on site to final account."
                cadence: rolling
              tasks:
                - "Set the movement threshold that needs a written explanation"
                - "Update the forecast for every cost code from the latest report @recurring(monthly:20)"
                - "Recalculate profit on cost from the new forecast total"
                - "Add the month's figure to the forecast against budget chart"
            - name: Variation register and weekly change review
              description: |-
                ## Purpose
                Variations pile up quietly: instructed, then priced, then disputed, with dozens open at once on a busy site. A register showing every variation's status, estimate, agreed value and approval, reviewed weekly, stops small items being forgotten until they reappear in the final account at a higher price.

                ## Milestones
                1. A register with number, description, cause, status, estimate and agreed value for every change.
                2. Causes tagged as client change, design development, unforeseen or contractor proposal.
                3. Open items over thirty days old flagged for pricing or decision.
                4. Register totals matching the variations section of the cost report.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A variation register reviewed every week, matching the cost report each month, with no open item older than sixty days without a recorded reason."
                cadence: rolling
              tasks:
                - "Set up the register with status, cause, estimate and agreed value"
                - "Review open variations and chase unpriced items @recurring(weekly:tue)"
                - "Tag each variation by cause so client changes stand out"
                - "Reconcile the register total to the cost report @recurring(monthly:14)"
            - name: Contingency drawdown log
              description: |-
                ## Purpose
                Contingency rarely disappears in one go; it is nibbled away by small approvals that each looked reasonable. A log that records every release, its pot, its reason and the balance left, checked monthly against the stage of the build, shows early whether you are spending it faster than the work is progressing.

                ## Milestones
                1. Every contingency release logged with date, pot, amount, reason and approver.
                2. Remaining balance of each pot shown after every entry.
                3. Balance compared each month with the minimum set for that build stage.
                4. Any pot below its minimum reported to partners or the funder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A contingency log with every release recorded and a monthly comparison of each pot's balance against its stage minimum."
                cadence: rolling
              tasks:
                - "Create the log with pot, amount, reason, approver and balance columns"
                - "Enter every contingency release approved so far"
                - "Compare each pot's balance with its stage minimum @recurring(monthly:16)"
                - "Write a short note to partners when any pot falls below its minimum"
            - name: Interim valuation and payment notice check
              description: |-
                ## Purpose
                Each month the contractor applies for payment and you, or your contract administrator, must respond within the contract's time limits with the right notices. Checking the valuation against work actually in place and issuing notices on time protects you from overpaying early and from losing the right to dispute an amount later.

                ## Milestones
                1. The contract's application, notice and payment dates written into a calendar for the whole build.
                2. Each valuation compared with progress photos and the programme.
                3. Payment and any pay less notices issued within the contract periods.
                4. A cumulative valuation total reconciled to the cost tracker each month.

                ## Notes
                Payment notice rules and time limits vary by contract and country. Confirm them with your contract administrator or solicitor and do not miss a date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every monthly valuation checked against work in place, with all required notices issued inside the contract periods for the whole build."
                cadence: rolling
              tasks:
                - "Write the contract's payment and notice dates into a calendar"
                - "Check the valuation against site photos and the programme @recurring(monthly:25)"
                - "Confirm notices were issued on time and file copies"
                - "Reconcile cumulative valuations to the cost tracker"
            - name: Early warning and notice log
              description: |-
                ## Purpose
                Most modern contracts reward whoever raises a problem first and penalise late notices, and a missed early warning or late response can turn a manageable issue into a claim. A weekly log of every notice sent and received, with the response date it triggers, keeps you inside the contract's clock.

                ## Milestones
                1. Every early warning, claim notice and instruction logged with date received and response due.
                2. Responses issued before their due dates.
                3. Cost and time effects of each notice estimated and linked to the risk or variation register.
                4. Overdue responses reported at the progress meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A notice log with every item answered by its due date, reviewed every week and linked to the variation register."
                cadence: rolling
              tasks:
                - "List every notice sent or received since start on site"
                - "Note the response deadline each notice triggers under the contract"
                - "Review open notices and due responses @recurring(weekly:fri)"
                - "Link notices with a cost effect to the variation register"
            - name: Provisional sums and allowances tracker
              description: |-
                ## Purpose
                Provisional sums and prime cost allowances are placeholders in the contract sum, and they are often set low to make a tender look affordable. Tracking each one until it is replaced by a firm price shows how much of the contract sum is still a guess and where the real exposure sits.

                ## Milestones
                1. Every provisional sum and allowance listed with its contract value.
                2. A firm price or instructed value recorded against each as it is spent.
                3. The difference between allowance and actual carried into the forecast.
                4. The share of the contract sum still held in provisional sums reported monthly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker listing every provisional sum with allowance and actual, updated monthly, with the unresolved share of the contract sum reported each time."
                cadence: rolling
              tasks:
                - "Extract every provisional sum and allowance from the contract"
                - "Record the instructed value against each one as it is spent"
                - "Update the unresolved share of the contract sum @recurring(monthly:8)"
                - "Ask the quantity surveyor to price the largest open sum early"
            - name: Client direct costs and fees tracker
              description: |-
                ## Purpose
                Consultant fees, utility connections, statutory charges, surveys and insurances sit outside the build contract, so the quantity surveyor's report often leaves them out. Tracking them yourself each month catches the fee overruns and late connection bills that quietly eat a small developer's margin.

                ## Milestones
                1. Every appointment, quote and statutory charge outside the build contract listed with its budget.
                2. Additional fee claims from consultants logged with status.
                3. Invoices matched to appointments before payment.
                4. Client direct totals added to the anticipated final cost each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All costs outside the build contract tracked against budget each month and included in the anticipated final cost."
                cadence: rolling
              tasks:
                - "List every consultant appointment and statutory charge with its budget"
                - "Match this month's invoices to their appointments @recurring(monthly:5)"
                - "Log any additional fee claims with status and reason"
                - "Pass the client direct total to whoever updates the forecast"
            - name: Materials price and inflation watch
              description: |-
                ## Purpose
                Steel, concrete, timber, copper and imported fittings can swing sharply within a single build, and contracts with fluctuation clauses or unlet packages pass that swing straight to you. A monthly look at a handful of price indices and supplier quotes tells you whether to buy early, rebudget or hold.

                ## Milestones
                1. Five to eight materials that drive the scheme's cost chosen.
                2. A published index or supplier quote identified for each.
                3. Monthly prices recorded with the change since budget.
                4. Packages exposed to price change identified from the contract terms.

                ## Notes
                Start from the **Metrics log** template. A building cost index from your country's statistics office or a cost consultancy is a fair starting point.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly price record for at least five key materials, with exposed packages listed and any move over the budget allowance reported."
                cadence: rolling
              tasks:
                - "Choose the five to eight materials that drive this scheme's cost"
                - "Find a published index or regular supplier quote for each"
                - "Record this month's prices against the budget allowance @recurring(monthly:3)"
                - "List packages whose price is not yet fixed"
            - name: Monthly site cost walk
              description: |-
                ## Purpose
                Numbers on a report mean more when you have seen the work they describe. Walking the site once a month with the cost report in hand, checking that claimed work is installed, that variations match what was approved and that no unrecorded extras are appearing, keeps the paper and the building in step.

                ## Milestones
                1. A monthly walk booked with the site manager or quantity surveyor.
                2. Claimed work in the latest valuation compared with what is installed.
                3. Unapproved work or materials noted and raised through change control.
                4. Photos filed by date and cost code.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A site cost walk held every month of the build, with photos filed and every unrecorded extra raised through change control."
                cadence: rolling
              tasks:
                - "Book the walk with the site manager after each valuation @recurring(monthly:27)"
                - "Carry the valuation and variation register on the walk"
                - "Photograph work claimed and anything that looks like an extra"
                - "Raise unapproved work through change control within a week"
            - name: Quarterly cost review with partners
              description: |-
                ## Purpose
                Equity partners, landowners in a joint venture and funders rarely want the full monthly report, but they need to know early if margin is moving. A quarterly two-page cost review, showing budget, forecast, contingency left and the three biggest risks, keeps them informed and avoids a difficult surprise at completion.

                ## Milestones
                1. A two-page summary format agreed with partners.
                2. Budget against anticipated final cost shown with the movement since last quarter.
                3. Contingency remaining and top three cost risks stated plainly.
                4. Partner questions and decisions recorded after each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A two-page cost review issued to partners every quarter of the build, with their questions and decisions recorded."
                cadence: cyclic
              tasks:
                - "Agree the two-page format with your partners"
                - "Draft the quarter's cost review from the latest forecast @recurring(quarterly)"
                - "Ask the agent to summarise the quarter's variations in plain language"
                - "Record partner questions and decisions after the review"
            - name: Reading a cost plan at each design stage
              description: |-
                ## Purpose
                Cost plans move from a rate per square metre at concept to a measured elemental plan before tender, and each stage carries different assumptions and allowances. Learning what each version contains and what it leaves out lets you challenge the right lines rather than accepting a total.

                ## Milestones
                1. The difference between an order of cost estimate and an elemental cost plan explained in your notes.
                2. Design, construction and inflation allowances found in your latest cost plan.
                3. Exclusions listed and checked against your budget.
                4. Three questions about the plan answered by the quantity surveyor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Annotated notes on your scheme's latest cost plan listing its allowances and exclusions, with three questions answered by the quantity surveyor."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Collect every cost plan issued for this scheme so far"
                - "Mark the allowances and exclusions in the latest one"
                - "Compare how the total moved between stages and why"
                - "Put three questions to the quantity surveyor"
            - name: Reading a bill of quantities
              description: |-
                ## Purpose
                A bill of quantities or priced schedule is where the contractor's price meets the drawings, and it is the main tool for valuing changes. Learning to follow an item from drawing to quantity to rate means you can sense check a variation yourself before it reaches the quantity surveyor.

                ## Milestones
                1. The structure of the bill, its preliminaries, measured work and provisional sums understood.
                2. Three items traced from the drawings to their measured quantity.
                3. Units of measurement for the main trades noted.
                4. One recent variation checked against bill rates.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three bill items traced from drawing to quantity and one variation checked against bill rates, with notes kept."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the preambles and preliminaries section of the bill"
                - "Trace three items from the drawings to their quantities"
                - "Note the unit used for each main trade"
                - "Check one variation against the bill rates"
            - name: Cost per square metre benchmarks
              description: |-
                ## Purpose
                A cost plan only looks expensive or cheap against something, and gut feel is a poor comparator. Building a small set of benchmarks, by element and in cost per square metre of gross internal area, from your own past schemes and published sources lets you spot an outlier element at the first cost plan.

                ## Milestones
                1. Gross internal area measured the same way for every scheme compared.
                2. Elemental cost per square metre recorded for at least three comparable schemes.
                3. Location, date and specification noted for each benchmark.
                4. The current scheme's cost plan compared element by element.

                ## Notes
                Rebase older benchmarks to today's prices with a building cost index, and to your location if they come from elsewhere.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A benchmark table of at least three comparable schemes by element per square metre, with the current cost plan compared line by line."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather final costs and floor areas for past or comparable schemes"
                - "Convert each to elemental cost per square metre of gross internal area"
                - "Rebase older figures to today with a cost index"
                - "Compare the current cost plan and flag elements far from the range"
            - name: How variations are valued
              description: |-
                ## Purpose
                Contracts set an order for valuing changes, typically starting from contract rates, then fair rates derived from them, then dayworks, and contractors often price at the most generous end. Knowing the rules in your own contract lets you ask the right question when a quote looks high.

                ## Milestones
                1. The valuation rules in your contract summarised in plain words.
                2. The difference between bill rates, star rates and dayworks explained in your notes.
                3. Daywork sheets checked for signed time and labour rates on one variation.
                4. One disputed valuation discussed with the quantity surveyor using the contract rules.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page plain summary of your contract's variation valuation rules, used to review at least one live variation with the quantity surveyor."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the variation valuation clause in your building contract"
                - "Summarise the valuation order in five plain sentences"
                - "Check signatures and rates on one set of daywork sheets"
                - "Review a live variation quote with the quantity surveyor"
            - name: Preliminaries and time-related costs
              description: |-
                ## Purpose
                Preliminaries, the cost of running the site, from cranes and welfare to the site manager's salary, can be fifteen percent or more of the build cost and grow every week the job runs late. Understanding which prelims are fixed and which are time-related shows what delay really costs and why extensions of time matter.

                ## Milestones
                1. Preliminaries in the contract split into fixed and time-related items.
                2. A weekly cost of time-related prelims calculated.
                3. Prelims as a share of the build cost compared with your benchmarks.
                4. The weekly figure added to the cost tracker notes for use in delay discussions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A weekly cost of time-related preliminaries calculated from the contract and recorded beside the cost tracker."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the preliminaries breakdown in the contract documents"
                - "Split each item into fixed or time-related"
                - "Work out the weekly cost of the time-related items"
                - "Note the weekly figure where delay discussions will use it"
            - name: Fluctuation and price adjustment clauses
              description: |-
                ## Purpose
                Whether a contract is fixed price or allows prices to move with an index decides who carries inflation, and the wording often surprises developers late in a long build. Reading the clause in your contract and modelling a plausible price rise shows your real exposure before it arrives in a valuation.

                ## Milestones
                1. The contract's fluctuation position identified: fixed, full, or limited to named items or an index.
                2. The packages and materials covered listed.
                3. A five or ten percent price rise modelled on those packages.
                4. The exposure carried into the cost risk list.

                ## Notes
                Interpretation of a fluctuation clause is a contractual question. Confirm your reading with your quantity surveyor or solicitor.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The contract's fluctuation position written down, with a modelled price rise on covered packages carried into the cost risk list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the fluctuation or price adjustment clause in the contract"
                - "List the materials or packages it covers"
                - "Model a five and a ten percent rise on those packages"
                - "Add the exposure to the cost risk list"
            - name: Delay and disruption claims basics
              description: |-
                ## Purpose
                Claims for extra time and money, called loss and expense or compensation events depending on the contract, can add more to a final account than all the variations combined. Understanding how a claim is built, what evidence supports it and what records you need on your side helps you respond calmly rather than settle under pressure.

                ## Milestones
                1. The claim mechanism in your contract summarised in plain words.
                2. The records that support or rebut a claim listed: programme, diaries, instructions, photos.
                3. Those records checked as being kept on your current site.
                4. A sensible route for professional support agreed if a large claim arrives.

                ## Notes
                Claims are contractual and sometimes legal matters. Use a claims consultant, quantity surveyor or solicitor for any significant claim.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain summary of your contract's claim mechanism and a checked list of the site records needed to assess a claim."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the claims and extension of time clauses in your contract"
                - "List the site records that would support or rebut a claim"
                - "Check with the site team that each record is being kept"
                - "Agree which adviser you would call for a large claim"
            - name: Value engineering workshop before tender
              description: |-
                ## Purpose
                Value engineering done well removes cost without removing value, and done badly it strips out the features buyers or tenants pay for. A structured half-day workshop with the design team and quantity surveyor, run before tender while changes are cheap, produces a list of priced options with their effect on value, programme and planning.

                ## Milestones
                1. The ten highest-cost elements identified from the cost plan.
                2. Options generated for each with cost saving, value effect and planning risk.
                3. Options ranked and accepted, rejected or parked with reasons.
                4. Accepted options instructed to the design team with a revised cost plan date.

                ## Notes
                Check any change to materials, windows or appearance against the planning consent conditions before accepting it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ranked value engineering log with saving, value effect and decision for each option, and accepted options reflected in a revised cost plan."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the ten highest-cost elements from the latest cost plan"
                - "Book a half-day workshop with the design team and quantity surveyor"
                - "Score each option for saving, value effect and planning risk"
                - "Instruct accepted options and diary the revised cost plan"
            - name: Cost check gate at each design sign-off
              description: |-
                ## Purpose
                Design development adds cost in small steps that nobody notices until the tender comes back high. Making a cost check a condition of signing off each design stage, with the quantity surveyor confirming the design still fits the budget, catches the drift while it can still be designed out.

                ## Milestones
                1. Design stages that need sign-off listed with their target dates.
                2. A rule that no stage is signed off without an updated cost check.
                3. Each cost check compared with the locked budget and the previous stage.
                4. Overruns at a gate resolved by design change or a recorded decision to accept.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every design stage signed off only after a cost check, with each check and its decision recorded against the locked budget."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the remaining design stages and their sign-off dates"
                - "Write the cost check requirement into the design programme"
                - "Compare each stage's cost check with the budget and previous stage"
                - "Record the decision taken at each gate"
            - name: Early buying of long-lead and volatile packages
              description: |-
                ## Purpose
                Lifts, windows, structural steel and plant often have long lead times and volatile prices, and leaving them to the main contractor's normal buying can cost both time and money. Deciding early which packages to buy or fix in price ahead of the main build is a trade between certainty and the cash and risk of committing early.

                ## Milestones
                1. Packages with long lead times or volatile prices listed.
                2. For each, the cost and programme risk of buying early or late compared.
                3. A decision recorded per package with the mechanism, such as an early order or a fixed price option.
                4. Early commitments added to the cost tracker as committed cost.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded buy-early or buy-late decision for each long-lead package, with early commitments shown as committed cost."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the contractor and design team for current lead times"
                - "List packages with long lead times or volatile prices"
                - "Compare the cost and programme effect of buying early or late"
                - "Record the decision and the mechanism for each package"
            - name: Pricing policy for buyer upgrades and extras
              description: |-
                ## Purpose
                Buyers and tenants who ask for upgrades, layout changes or extra sockets can turn a standard specification into dozens of one-off variations, each priced late and below cost. A fixed menu of priced options, with a cut-off date tied to the build programme, keeps customer choice profitable and the site predictable.

                ## Milestones
                1. A menu of permitted upgrades priced with the contractor, including margin.
                2. A cut-off date for each option tied to the programme.
                3. A rule that anything off the menu is refused or priced as a formal variation.
                4. Upgrade income and cost tracked separately from the base build.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A priced upgrade menu with cut-off dates in use, and upgrade income and cost tracked separately from the base build."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the upgrades buyers most often ask for"
                - "Get contractor prices for each and add your margin"
                - "Set a cut-off date for each option from the programme"
                - "Brief the sales team on what is and is not on the menu"
            - name: Below-ground cost risk decision
              description: |-
                ## Purpose
                Ground conditions, obstructions, contamination and services diversions are where most unforeseen costs come from, and contracts allocate that risk in very different ways. Deciding with your quantity surveyor whether to pay to transfer ground risk, keep it with provisional quantities or investigate further first is one of the biggest cost decisions on any scheme.

                ## Milestones
                1. Existing ground investigation, contamination and services information gathered.
                2. Known gaps in that information listed.
                3. Options compared: further investigation, provisional quantities, or a fixed price with risk transferred.
                4. A decision recorded with the contingency it needs.

                ## Notes
                Extra investigation usually costs far less than one surprise in the ground. Ask the engineer what one more round of trial pits would tell you.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on how ground risk is carried, with the matching contingency or price premium shown in the budget."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the site investigation, contamination and utility records"
                - "List what the investigations did not cover"
                - "Compare investigating further, provisional quantities and a fixed price"
                - "Record the decision and adjust contingency to match"
            - name: Reviewing contractor-proposed savings
              description: |-
                ## Purpose
                Contractors often offer alternative products or methods that save money, and some genuinely do while others shift risk, cut quality or breach planning conditions. A short assessment for each proposal, covering saving, quality, warranty, programme and who shares the saving, means you accept the good ones fast and the poor ones never.

                ## Milestones
                1. A one-page assessment format for contractor proposals.
                2. Each proposal checked by the relevant designer for performance and compliance.
                3. Saving share agreed in writing where the contract allows it.
                4. Accepted proposals recorded in the variation register as savings.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every contractor proposal assessed on a standard sheet, with designer sign-off and accepted savings recorded in the variation register."
                cadence: rolling
              tasks:
                - "Draft a one-page assessment sheet for contractor proposals"
                - "Send each proposal to the relevant designer for a compliance check"
                - "Agree the saving share in writing before accepting"
                - "Record accepted proposals as negative variations"
            - name: Construction cost S-curve against programme
              description: |-
                ## Purpose
                Spending that runs well ahead of the programme can mean overpayment, and spending well behind can mean a slipping site. Plotting the expected monthly build spend as an S-curve from the programme and laying actual valuations over it shows both at a glance and gives a funder a clear picture.

                ## Milestones
                1. Expected monthly spend profiled from the contract sum and programme.
                2. Cumulative actual valuations plotted against the curve each month.
                3. Gaps over an agreed threshold explained in the cost report meeting.
                4. The curve rebased when the programme is formally revised.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An S-curve of planned and actual cumulative spend, updated every month of the build, with gaps over the threshold explained."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the quantity surveyor for a monthly spend profile"
                - "Plot the planned cumulative curve from that profile"
                - "Add each month's valuation to the chart after it is certified @recurring(monthly:28)"
                - "Agree the gap that triggers an explanation"
            - name: Contract sum reconciliation to the appraisal
              description: |-
                ## Purpose
                The moment the build contract is signed, the biggest number in the appraisal becomes real, and any gap between the tender and the budget has to be found somewhere. Reconciling the contract sum, provisional sums and exclusions to the budget before signing tells you whether the scheme still works and what contingency truly remains.

                ## Milestones
                1. Contract sum split by cost code and compared with the locked budget.
                2. Exclusions and qualifications in the tender priced as client risks.
                3. Remaining contingency recalculated after the reconciliation.
                4. Profit on cost restated and the result shared with partners or the funder before signing.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A signed-off reconciliation of the contract sum to the budget, with priced exclusions and a restated profit on cost, completed before contract signature."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get the final tender breakdown and list of qualifications"
                - "Map the contract sum to cost codes and compare with the budget"
                - "Price each exclusion as a client risk"
                - "Restate profit on cost and share it before signing"
            - name: Cost overrun recovery plan
              description: |-
                ## Purpose
                When the anticipated final cost breaks the budget by more than contingency can absorb, waiting for things to improve rarely works. A written recovery plan, with priced savings, revised sales or rent assumptions, extra funding options and a clear decision date, gives partners and the funder something to approve rather than something to worry about.

                ## Milestones
                1. The overrun quantified by cost code with its causes.
                2. Savings options listed with value and effect on the product.
                3. Revenue, funding and programme options assessed with the right advisers.
                4. A recovery plan approved by partners and shared with the funder.

                ## Notes
                Start from the **Remediation plan** template. Tell your funder early; lenders are usually more flexible when they hear about a problem from you first.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "An approved recovery plan that closes the forecast overrun with priced actions, owners and dates, shared with partners and the funder."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Break the overrun down by cost code and cause"
                - "List savings options with value and product effect"
                - "Assess revenue and funding options with your advisers"
                - "Present the plan to partners and the funder for approval"
            - name: Final account preparation and agreement
              description: |-
                ## Purpose
                The final account settles every variation, provisional sum, claim and adjustment into one agreed figure, and on small schemes it often drags on for a year, holding up profit and retention. Preparing your side early, from the variation register and notice log, and setting a target date to agree it gets the scheme closed and the money released.

                ## Milestones
                1. A target date for agreeing the final account set at practical completion.
                2. Every variation, provisional sum and claim listed with its agreed or disputed value.
                3. Disputed items narrowed to a short list with evidence for each.
                4. The final account agreed in writing and the forecast closed.

                ## Notes
                Start pulling final account items together three months before completion, not after it.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A final account agreed in writing with the contractor, with every item reconciled to the variation register, by the target date set at completion."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Set a target date for final account agreement"
                - "Reconcile the variation register to the contractor's draft account"
                - "Narrow disputed items to a short list with evidence"
                - "Sign the agreed final account and close the cost tracker"
            - name: Disputed final account readiness
              description: |-
                ## Purpose
                Some final accounts cannot be agreed by negotiation, and the side with organised records does better in mediation or adjudication. Assembling the evidence for each disputed item, and knowing the dispute routes your contract allows, puts you in a position to settle on fair terms or escalate with confidence.

                ## Milestones
                1. Disputed items listed with value, each side's position and supporting documents.
                2. Dispute routes in the contract identified, such as negotiation, mediation or adjudication.
                3. A specialist quantity surveyor or solicitor engaged for any large item.
                4. A settlement range agreed with partners before any formal process.

                ## Notes
                Formal dispute processes have strict timetables. Take legal advice before starting or responding to one.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An evidence bundle for each disputed item and a partner-approved settlement range, prepared before any formal dispute step."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List each disputed item with value and both positions"
                - "Gather instructions, notices and photos for each item"
                - "Identify the dispute routes the contract allows"
                - "Agree a settlement range with partners"
            - name: Post-completion cost review and benchmark capture
              description: |-
                ## Purpose
                Real costs from a finished scheme are the best data a developer owns, and most small developers never record it properly. A short review comparing the final cost by element with the first cost plan and the locked budget, with the reasons for each gap, makes the next appraisal more accurate and the next contingency better judged.

                ## Milestones
                1. Final cost by element compared with the first cost plan and the locked budget.
                2. The five largest gaps explained with their causes.
                3. Final cost per square metre added to your benchmark table.
                4. Three lessons written into your appraisal and cost control checklists.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A post-completion review explaining the five largest cost gaps, with final rates added to the benchmark table and three lessons recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Lay the final account beside the first cost plan and the budget"
                - "Explain the five largest gaps and their causes"
                - "Add final cost per square metre by element to your benchmarks"
                - "Ask the agent to draft three lessons for your appraisal checklist"
            - name: Contractor insolvency cost exposure check
              description: |-
                ## Purpose
                When a contractor fails mid-build, the cost of finishing with a replacement is usually far higher than the unpaid balance of the original contract. Checking your exposure now, from bonds, retentions held, overpayment against work in place and subcontractor dependence, shows what you would be left carrying and what to tighten while the job is healthy.

                ## Milestones
                1. Value certified compared with work actually in place to check for overpayment.
                2. Performance bond, guarantees and retention balances listed with their limits.
                3. Key subcontractors and suppliers identified with any direct warranties or step-in rights.
                4. A rough cost to complete with a replacement contractor estimated.

                ## Notes
                Watch for early signs: late payment to subcontractors, staff leaving, slower progress or requests for advance payments. Take legal advice before acting on any of them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page exposure note showing overpayment position, bond and retention cover and an estimated replacement cost to complete."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare certified value with work in place on the next site walk"
                - "List bonds, guarantees and retention balances with their limits"
                - "Identify the subcontractors you could not easily replace"
                - "Estimate a replacement cost to complete with the quantity surveyor"
            - name: First small scheme cost control without a full QS
              description: |-
                ## Purpose
                Founders building their first four to ten units often cannot justify a full monthly quantity surveying service, yet need the same discipline. A lean set-up, with a QS for the initial cost plan, contract sum check and final account and your own monthly tracker in between, keeps control without paying for a full appointment.

                ## Milestones
                1. The few points where a QS is essential identified and priced.
                2. A simple tracker run by you with budget, committed and forecast columns.
                3. Change control and a variation list in place from day one.
                4. A QS health check booked at the halfway point of the build.

                ## Notes
                The cheapest place to save is fewer changes, not fewer checks. Lenders may require a monitoring surveyor regardless; that role reports to them, not you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lean cost control set-up running from start on site, with defined QS checkpoints booked and a monthly tracker maintained by you."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Get a quote for a QS on cost plan, contract check and final account only"
                - "Set up your own monthly tracker for budget, committed and forecast"
                - "Start a variation list on the first day on site"
                - "Book a QS health check for the build's halfway point"
            - name: In-house cost control for builder-developers
              description: |-
                ## Purpose
                Builders who develop on their own account carry labour, plant and materials directly, so there is no contract sum to hide behind and overruns show up as lost profit. Costing labour hours and materials against each element, the way a contractor would cost a job for a client, shows which trades earn money and which lose it.

                ## Milestones
                1. Labour timesheets coded to elements, not just to the job.
                2. Materials orders and deliveries coded the same way.
                3. Monthly actual cost per element compared with the budget.
                4. Overhead and your own time allocated to the scheme at a fair rate.

                ## Notes
                Include your own time at a market rate. Schemes that only make money because the owner works for nothing are not profitable.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Labour and materials coded to elements on every timesheet and order, with a monthly element-by-element comparison against budget."
                cadence: rolling
              tasks:
                - "Add cost codes to the labour timesheet"
                - "Require a cost code on every materials order"
                - "Compare actual cost by element with budget @recurring(monthly:22)"
                - "Set a rate for your own time and overheads"
            - name: Cost control for trade package procurement
              description: |-
                ## Purpose
                Developers who let separate trade packages, under construction management or self-managed routes, take on the coordination risk a main contractor would carry, along with gaps and overlaps between packages. Tracking every package's scope, award value and interfaces stops costs falling between packages and landing on you.

                ## Milestones
                1. A package list covering the whole scheme with no unassigned scope.
                2. Award value against budget recorded for each package.
                3. Interfaces between packages listed with who is responsible for each.
                4. Packages still to be let carried at budget plus a risk allowance.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A package register covering all scope with award values against budget and a responsibility for every interface."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every package and check the scope covers the whole building"
                - "Record award value against budget for each let package"
                - "Map interfaces between packages and assign responsibility"
                - "Add a risk allowance to every package not yet let"
            - name: Refurbishment and conversion cost control
              description: |-
                ## Purpose
                Converting offices to homes or refurbishing an old building means pricing work behind walls and under floors that nobody has seen, so cost growth during strip-out is normal. Higher contingency, a staged strip-out survey and a list of the usual surprises, such as asbestos, structure and drainage, keep a conversion budget honest.

                ## Milestones
                1. A refurbishment contingency set higher than for a new build, with the reason recorded.
                2. Intrusive surveys and asbestos surveys commissioned before pricing where access allows.
                3. A strip-out stage with a cost review before main works are committed.
                4. Hidden-condition finds logged with cost and decision.

                ## Notes
                Asbestos surveys before refurbishment are a legal requirement in many countries. Check with a licensed surveyor and never disturb suspect material.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A conversion budget with a recorded refurbishment contingency, a cost review after strip-out and every hidden-condition find logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Commission an intrusive survey and an asbestos survey"
                - "Set a refurbishment contingency and note why"
                - "Plan a cost review between strip-out and main works"
                - "Log each hidden-condition find with its cost and decision"
            - name: Imported materials costs in the Caribbean
              description: |-
                ## Purpose
                Building in the Caribbean often means importing steel, fittings and finishes, so freight, port charges, duties, exchange rates and shipping delays can move costs as much as the price of the goods. Building these into the budget per package, and tracking them on each shipment, removes one of the commonest sources of island overruns.

                ## Milestones
                1. Imported packages listed with origin, supplier and expected shipping route.
                2. Freight, insurance, duties, port and clearance costs budgeted per package.
                3. Exchange rate assumption written down and the exposure calculated.
                4. Landed cost of each shipment compared with budget on arrival.

                ## Notes
                Duty rates and any development concessions change and differ by island. Confirm them with a customs broker and the relevant government agency before relying on them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A landed cost budget for every imported package with a stated exchange rate, and each shipment's actual landed cost compared on arrival."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List imported packages with supplier and shipping route"
                - "Get freight, duty and clearance estimates from a customs broker"
                - "Record your exchange rate assumption and the cost of a ten percent move"
                - "Compare landed cost with budget for each shipment on arrival"
            - name: Cost risk quantification for contingency
              description: |-
                ## Purpose
                Contingency set as a flat percentage ignores how risky this particular scheme is. Listing cost risks with a range and likelihood, then running a simple simulation or weighted sum, shows a P50 and P80 cost and whether your contingency is a reasonable cover or a hope.

                ## Milestones
                1. Twenty to forty cost risks listed with a low, likely and high cost.
                2. Likelihood assigned to each with the quantity surveyor.
                3. A P50 and P80 risk allowance calculated by simulation or weighted sum.
                4. Contingency compared with the result and the gap reported to partners.

                ## Notes
                Start from the **Risk register** template. The numbers are only as good as the ranges; get the engineers to challenge them.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quantified cost risk register producing P50 and P80 allowances, compared with contingency and reported to partners."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List cost risks with low, likely and high costs"
                - "Agree likelihoods with the quantity surveyor and engineers"
                - "Calculate P50 and P80 allowances with a simple simulation"
                - "Compare the result with contingency and report the gap"
            - name: Earned value tracking on a development
              description: |-
                ## Purpose
                Earned value combines cost and progress in one picture, showing whether the job is over or under cost for the work actually done, not just against the calendar. On larger or phased schemes it gives an early, objective signal that a programme or cost problem is building.

                ## Milestones
                1. Planned value profiled from the programme and budget by month.
                2. Earned value measured from the percentage complete of each element.
                3. Cost and schedule performance indices calculated each month.
                4. Thresholds set that trigger a cost review.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Monthly cost and schedule performance indices calculated for at least three months, with review thresholds agreed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a short guide to earned value measurement"
                - "Profile planned value by month from the programme and budget"
                - "Measure percentage complete for each element with the site team"
                - "Calculate cost and schedule performance indices for the month"
            - name: Multi-phase cost carry-forward and rebudgeting
              description: |-
                ## Purpose
                On a phased scheme the first phase's actual costs are the best evidence for the next, but they are often filed away rather than used. Carrying forward actual rates, savings and lessons into each later phase's budget before it is tendered sharpens the price and reduces contingency where risk has been retired.

                ## Milestones
                1. Phase one final cost by element compared with phase two's budget.
                2. Rates and lessons carried forward into the next phase's cost plan.
                3. Contingency reduced only where a risk has genuinely been retired.
                4. A revised whole-scheme forecast issued to partners.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The next phase's budget revised from earlier phases' actual costs, with contingency changes justified and a whole-scheme forecast reissued."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Compare the last phase's final cost with the next phase's budget"
                - "Carry actual rates into the next phase's cost plan"
                - "Justify any contingency reduction against a retired risk"
                - "Reissue the whole-scheme forecast to partners"
            - name: Whole-life cost checks on key specification choices
              description: |-
                ## Purpose
                Choosing the cheapest roof, plant or facade option at tender can prove the most expensive over twenty years, and for schemes you hold or sell to an investor, that matters to value. Comparing whole-life cost for a few big specification choices stops value engineering from saving capital today at the cost of a weaker asset.

                ## Milestones
                1. Four to six specification choices with high running or replacement costs identified.
                2. Capital, maintenance, energy and replacement costs estimated over an agreed period.
                3. Options compared on a discounted whole-life basis.
                4. Decisions recorded with the effect on build cost and value.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Whole-life cost comparisons for at least four specification choices, with decisions recorded and their build cost effect shown."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the specification choices with the highest running costs"
                - "Get maintenance and replacement estimates from the engineers"
                - "Compare options over an agreed period with a discount rate"
                - "Record each decision and its effect on build cost"
            - name: Personal cost control playbook across schemes
              description: |-
                ## Purpose
                Experienced developers carry the same cost control set-up from scheme to scheme, refined each time, rather than rebuilding it from scratch. Writing your own playbook, with your matrix, tracker, change form, report brief and lessons, makes the next scheme faster to start and easier to hand to a project manager.

                ## Milestones
                1. Standard documents gathered into one playbook folder.
                2. Lessons from the post-completion review written into the relevant documents.
                3. A one-page start-up checklist for the first month of a new scheme.
                4. The playbook reviewed and updated once a year.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A playbook folder with standard documents and a start-up checklist, reviewed at least once a year."
                cadence: cyclic
              tasks:
                - "Copy your matrix, tracker, change form and report brief into one folder"
                - "Write a one-page checklist for the first month of a scheme"
                - "Fold lessons from the latest completed scheme into the documents"
                - "Review and update the playbook @recurring(yearly)"
---

# Development Cost Control

Development cost control is the discipline that keeps the build budget in the appraisal true from the first cost plan to the agreed final account, so the profit you modelled is still there when the last invoice is paid. It is written for founders and small developers running their own schemes and for builders taking on own-account work. It starts with the foundations of authority, a locked budget, cost codes, contingency rules and change control, moves into the monthly machinery of cost reports, forecasts, variations and valuations, then covers the skills of reading cost plans, bills and claims, the decisions on value engineering and early buying, the dated moments from contract sum reconciliation to final account, situations for different kinds of developer and the specialist work of cost risk and earned value.

The rhythms are a weekly change review and notice log, a monthly cost report meeting with the quantity surveyor, monthly updates to the anticipated final cost, contingency, provisional sums, valuations, client direct costs and materials prices, a monthly cost walk on site and a quarterly cost review with partners. Metrics log suits the cost tracker and price watch, Meeting notes suits the cost report meeting, Remediation plan suits an overrun recovery and Risk register suits cost risk quantification. Contract and claims points are organisational here: take the legal and contractual calls to your quantity surveyor, contract administrator or solicitor. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
