---
id: founding-startups.early-unit-economics-modelling
name: Early Unit Economics Modelling
description: "A unit economics model a founder can defend: one agreed unit, honest CAC, contribution margin and payback, cohort-based lifetime value, monthly refreshes against actuals and the thresholds that decide when to scale spend."
category: business
version: 1.0.0
tags: [founding-startups, early-unit-economics-modelling, founder, unit-economics, cac, ltv, contribution-margin, payback]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - reading-queue
    - meeting-notes
    - board-meeting
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Early Unit Economics Modelling
          description: "Modelling customer acquisition cost, lifetime value and margins at the earliest stage to check the business can work at scale."
          projects:
            - name: Defining the unit your business sells
              description: |-
                ## Purpose
                Unit economics only mean something once you know what one unit is: a customer account, a seat, an order, a booking or a device. Founders who switch between these mid-model end up comparing a per-order cost with a per-customer revenue and never notice. Picking the unit first, in writing, makes every later number comparable.

                ## Milestones
                1. Candidate units listed, with how revenue and cost attach to each.
                2. One primary unit chosen, with a sentence explaining why it matches how customers pay.
                3. A secondary unit noted where it matters, such as orders per customer.
                4. The chosen unit written at the top of the model and agreed with any co-founder.

                ## Notes
                If customers pay per account but costs scale per user, keep the account as the unit and carry users per account as an input rather than changing the unit.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One primary unit is written at the top of the model with a one-sentence rationale, and every co-founder has agreed it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every way revenue arrives today or is expected to arrive"
                - "Write which costs rise with each candidate unit"
                - "Choose the primary unit and write why in one sentence"
                - "Agree the unit with your co-founder before building the model"
            - name: Fixed formulas for CAC, LTV and margin
              description: |-
                ## Purpose
                CAC, lifetime value, gross margin, contribution margin and payback each have several common definitions, and investors will ask which one you used. Writing one formula for each, with what is included and excluded, stops the numbers quietly changing shape from month to month.

                ## Milestones
                1. A one-page glossary with a formula for CAC, LTV, gross margin, contribution margin and payback.
                2. Inclusions and exclusions listed under each formula, such as whether CAC carries salaries.
                3. Blended and paid CAC defined separately.
                4. The glossary linked from the model's first tab.

                ## Notes
                Write LTV on gross margin, not revenue. A revenue-based LTV flatters every ratio built on it and is the first thing an experienced investor will correct.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written glossary defines five metrics with explicit inclusions and exclusions, and the model links to it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a draft formula for each of the five core metrics"
                - "List what each formula includes and what it leaves out"
                - "Define blended CAC and paid CAC as separate lines"
                - "Link the glossary from the first tab of the model"
            - name: Napkin unit economics in one page
              description: |-
                ## Purpose
                Before any spreadsheet, a founder should be able to say roughly what a customer pays, what it costs to serve them, how long they stay and what it takes to win one. Ten minutes of arithmetic often reveals that a plan needs ten times the retention or half the CAC to work, which is better known now than after a year of building.

                ## Milestones
                1. Price, variable cost, expected lifetime and cost to acquire written as single best guesses.
                2. A rough contribution per customer and LTV to CAC ratio worked out.
                3. The single input that would break the business if wrong circled.
                4. The page dated and kept as the first version to compare against later.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated one-page calculation shows contribution per customer, an LTV to CAC ratio and the most fragile input."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your best guess for price, variable cost, lifetime and CAC"
                - "Work out contribution per customer and the LTV to CAC ratio"
                - "Circle the input that breaks the business if it is wrong"
                - "Date the page and file it as version one of the model"
            - name: Model workbook with inputs apart from outputs
              description: |-
                ## Purpose
                Spreadsheets where assumptions are typed into formulas become impossible to audit within weeks. A workbook with one inputs tab, one calculations tab and one outputs tab lets anyone change an assumption in one cell and see every downstream number move, which is what an investor or co-founder will try first.

                ## Milestones
                1. Inputs, calculations and outputs on separate tabs, with inputs coloured differently.
                2. No hard-coded numbers inside formulas on the calculations tab.
                3. A checks row that flags negative margins or impossible retention.
                4. The workbook opened by a second person who changed one input and followed the effect.

                ## Notes
                Keep it to a size one person can understand. A three-tab model you trust beats a thirty-tab model nobody can explain.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-tab workbook exists with no hard-coded numbers in formulas, and a second person has traced one input change through it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create inputs, calculations and outputs tabs in a new workbook"
                - "Move every assumption from the napkin page onto the inputs tab"
                - "Add a checks row that flags impossible values"
                - "Ask a co-founder or adviser to change one input and trace it"
            - name: Variable cost inventory for one customer
              description: |-
                ## Purpose
                Early founders usually underestimate cost to serve because the costs are scattered: hosting, payment processing fees, third-party APIs, support time, onboarding calls, shipping, refunds. Listing every cost that rises with one more customer is the only way to get a gross margin that will survive due diligence.

                ## Milestones
                1. Every invoice and subscription from the last three months sorted into fixed or variable.
                2. Variable costs expressed per unit, such as hosting per active account or fees per transaction.
                3. Human time per customer for onboarding and support estimated in hours and priced.
                4. A cost to serve line in the model built from these items, not a guessed percentage.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A list of every variable cost per unit, sourced from real invoices, feeds a cost to serve line in the model."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the last three months of card and bank transactions"
                - "Mark each cost as fixed or variable with the customer count"
                - "Estimate onboarding and support hours for a typical customer"
                - "Replace any guessed margin percentage with the itemised cost to serve"
            - name: Source map for every model input
              description: |-
                ## Purpose
                When a number in the model is questioned, you need to say where it came from in one breath: the billing system, the ad account, the bank feed or a guess. Mapping each input to its source and owner also shows which numbers will be painful to refresh every month, so you can fix the plumbing before the routine starts.

                ## Milestones
                1. Every input listed beside its source system and the report or export that produces it.
                2. Each input marked as automatic, manual export or estimate.
                3. Inputs with no reliable source flagged for a fix or a proxy.
                4. The source map saved as a tab in the model.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A source map tab names the system, export and owner for every input in the model, with unsourced inputs flagged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every input on the model's inputs tab"
                - "Write the system and report each one comes from"
                - "Mark each input as automatic, manual or estimated"
                - "Flag inputs with no source and choose a proxy for each"
            - name: Assumption register with confidence ratings
              description: |-
                ## Purpose
                At the earliest stage most inputs are guesses, and the danger is forgetting which ones. Rating each assumption as measured, benchmarked or guessed, with the evidence behind it, turns the model from a sales document into a list of things to learn, and tells you which experiment is worth running next.

                ## Milestones
                1. Every input rated measured, benchmarked or guessed.
                2. The evidence or source for each rating written in one line.
                3. The three guessed inputs with the biggest effect on contribution identified.
                4. A plan to turn each of those three into a measured number.

                ## Notes
                Start from the **Metrics log** template to keep the measured values beside the register as they arrive.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every model input carries a confidence rating and evidence line, and the three most influential guesses each have a plan to measure them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a confidence column to the inputs tab"
                - "Rate each input measured, benchmarked or guessed"
                - "Rank the guessed inputs by their effect on contribution margin"
                - "Write how you will measure the top three guesses"
            - name: Fully loaded CAC including founder time
              description: |-
                ## Purpose
                Founder-led sales makes CAC look tiny because the most expensive salesperson in the company is unpaid. Pricing the hours founders spend on outreach, demos and follow-up at a market rate shows the CAC a hired team would face, which is the number that matters when you plan to scale.

                ## Milestones
                1. Founder hours on acquisition tracked for at least four weeks.
                2. Those hours priced at the market cost of a salesperson or marketer.
                3. Tools, events, travel and content costs added to paid spend.
                4. Both a cash CAC and a fully loaded CAC shown side by side in the model.

                ## Notes
                Keep both numbers. Cash CAC tells you about runway today; fully loaded CAC tells you whether the motion survives being handed to a hire.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The model shows cash CAC and fully loaded CAC side by side, built from four weeks of tracked founder hours."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Start a simple log of hours spent on sales and marketing"
                - "Find a fair market salary for a first sales or growth hire"
                - "Add tools, events and content costs to the acquisition total"
                - "Show cash CAC and fully loaded CAC as two lines in the model"
            - name: Proxy inputs before the first paying customer
              description: |-
                ## Purpose
                Pre-revenue founders still need a model, but every input has to come from somewhere other than their own customers. Interview answers, smoke test conversion, competitor pricing pages and public filings of similar companies can each stand in for a measured number, as long as the model says plainly that they are proxies.

                ## Milestones
                1. A proxy chosen for each input, such as smoke test conversion for top-of-funnel rate.
                2. The source of each proxy recorded, with how similar the comparison really is.
                3. A discount applied to optimistic proxies, with the reason written down.
                4. A date set to replace each proxy with real data after the first customers arrive.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every input in a pre-revenue model is marked as a proxy with its source and a target date for replacement."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather conversion numbers from any smoke tests or waitlists you ran"
                - "Collect public pricing and retention figures from three similar companies"
                - "Mark each proxy input and note how close the comparison is"
                - "Set a date to swap each proxy for measured data"
            - name: Monthly unit economics refresh
              description: |-
                ## Purpose
                Built once and never updated, a model becomes a story the founder tells rather than a tool. Refreshing the inputs on a fixed day each month, from the sources already mapped, keeps CAC, margin and payback current and makes trends visible before they become surprises.

                ## Milestones
                1. A fixed refresh day agreed and in the calendar.
                2. A refresh checklist covering every source in order.
                3. Three consecutive months refreshed on time.
                4. A one-paragraph summary of what moved written after each refresh.

                ## Notes
                Start from the **Metrics log** template so each month's headline numbers sit in one table you can scan.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The model has been refreshed on the agreed day for three consecutive months, each with a written summary of what moved."
                cadence: rolling
              tasks:
                - "Pick the refresh day, a few days after the books close"
                - "Write the refresh checklist in source order"
                - "Refresh every model input from its source @recurring(monthly:5)"
                - "Write a short summary of what moved and why @recurring(monthly:6)"
            - name: Monthly customer cohort retention table
              description: |-
                ## Purpose
                Lifetime value rests on retention, and a single blended churn rate hides whether newer customers stay longer or leave faster than early ones. A cohort table by signup month shows the shape of retention, the point where it flattens and whether product changes are working.

                ## Milestones
                1. Customers grouped by the month they first paid.
                2. Retention shown for each cohort at month one, three, six and twelve.
                3. Revenue retention shown beside logo retention.
                4. The table updated monthly for at least six months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A cohort table by first-payment month, showing logo and revenue retention, has been updated for six consecutive months."
                cadence: rolling
              tasks:
                - "Export customers with first payment date and cancellation date"
                - "Build the cohort grid with signup months down the side"
                - "Add the newest month to the cohort table @recurring(monthly:8)"
                - "Mark the month where each cohort's retention flattens"
            - name: Channel-level CAC tracking
              description: |-
                ## Purpose
                Blended CAC averages a cheap referral channel with an expensive paid one and tells you nothing about where to put the next pound or dollar. Tracking spend, leads and new customers per channel each month shows which channels earn their keep and which are kept alive by habit.

                ## Milestones
                1. Every acquisition channel named, including referrals, content, outbound and paid.
                2. Spend and new customers attributed to each channel with a stated rule.
                3. Monthly CAC per channel recorded for at least three months.
                4. Channels ranked by CAC and by payback.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly CAC is recorded for every named channel under a written attribution rule for three consecutive months."
                cadence: rolling
              tasks:
                - "Ask new customers how they heard about you at signup"
                - "Write a one-line attribution rule for every channel"
                - "Record spend and new customers per channel @recurring(monthly:12)"
                - "Rank channels by CAC after the third month"
            - name: Gross margin per customer review
              description: |-
                ## Purpose
                Margins drift as usage grows, suppliers change prices and support load creeps up, and the drift is invisible in a top-line revenue chart. Checking gross margin per customer each month, and looking at the ten heaviest users, shows whether some customers cost more to serve than they pay.

                ## Milestones
                1. Gross margin per customer calculated from the cost to serve line.
                2. The ten highest-cost customers identified with their revenue beside them.
                3. Any customers with negative gross margin listed.
                4. A decision recorded for each negative-margin customer: reprice, change usage or accept.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Gross margin per customer is reviewed monthly and every negative-margin customer has a recorded decision."
                cadence: rolling
              tasks:
                - "Pull usage and revenue for every active customer"
                - "Calculate gross margin per customer @recurring(monthly:15)"
                - "List the ten customers who cost most to serve"
                - "Record a decision for each customer with negative margin"
            - name: CAC payback period tracker
              description: |-
                ## Purpose
                Payback, the months of gross margin needed to earn back the cost of winning a customer, decides how much cash growth consumes. A startup with good LTV but an eighteen-month payback can run out of money while growing well. Tracking payback each month links unit economics to the runway conversation.

                ## Milestones
                1. Payback calculated on gross margin, not revenue.
                2. Payback shown by channel and by customer segment where the data allows.
                3. A monthly payback figure recorded for six months.
                4. A target payback agreed with your co-founder and noted in the model.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly payback on gross margin is recorded for six months, with a target written in the model."
                cadence: rolling
              tasks:
                - "Add a payback formula on gross margin to the calculations tab"
                - "Split payback by channel where attribution allows"
                - "Record this month's payback period @recurring(monthly:18)"
                - "Agree a target payback with your co-founder"
            - name: Model versus actuals variance review
              description: |-
                ## Purpose
                A model is only useful if you learn from the gap between what it predicted and what happened. Comparing last quarter's forecast CAC, retention and margin with actuals, and writing down why each one missed, sharpens the assumptions and tells you how much to trust the next forecast.

                ## Milestones
                1. Forecast values saved before each quarter starts.
                2. Actuals set beside forecasts for CAC, retention, margin and payback.
                3. Each variance over an agreed size explained in a sentence.
                4. Assumptions changed where the variance showed they were wrong.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter has a saved forecast, an actuals comparison and a written explanation for every variance above the agreed size."
                cadence: cyclic
              tasks:
                - "Save a frozen copy of the forecast for the coming quarter"
                - "Note any month where actuals miss forecast by a wide margin @recurring(monthly:22)"
                - "Compare forecast and actuals for the quarter @recurring(quarterly)"
                - "Change the assumptions that the variances proved wrong"
            - name: Assumption register upkeep
              description: |-
                ## Purpose
                Confidence ratings go stale: a guess becomes a measurement, a benchmark turns out not to apply, a supplier changes price. Revisiting the register every quarter keeps the model honest about what is known and points the next round of experiments at the inputs that still rest on guesses.

                ## Milestones
                1. Every rating checked against the latest data.
                2. Inputs upgraded from guessed to measured where evidence now exists.
                3. Newly fragile assumptions added, such as a supplier price change.
                4. The top three remaining guesses carried into the next quarter's plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The assumption register has been reviewed each quarter, with upgraded ratings and a carried-forward list of the three biggest guesses."
                cadence: cyclic
              tasks:
                - "Review every confidence rating in the register @recurring(quarterly)"
                - "Upgrade inputs that now have measured evidence"
                - "Add any assumption that new events have made fragile"
                - "Carry the three biggest guesses into the next quarter's plan"
            - name: Model change log and version history
              description: |-
                ## Purpose
                Investors and co-founders lose trust fast when last month's LTV quietly differs from this month's for reasons nobody can name. A short change log recording each structural change, formula fix or definition change, with a saved version, lets you explain any number's history in a minute.

                ## Milestones
                1. A change log tab with date, change, reason and effect on headline numbers.
                2. A dated copy of the model saved after each structural change.
                3. Every past restatement of LTV or CAC explained in the log.
                4. The log reviewed monthly for unexplained jumps.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every structural change to the model since the log began has a dated entry with its reason and effect."
                cadence: rolling
              tasks:
                - "Add a change log tab with date, change, reason and effect"
                - "Save a dated copy of the model as the first baseline"
                - "Check the log against headline numbers for unexplained jumps @recurring(monthly:26)"
                - "Write up any past restatement you can still remember"
            - name: Quarterly unit economics review with a co-founder
              description: |-
                ## Purpose
                Founders who own the spreadsheet alone tend to defend it rather than question it. A quarterly hour with a co-founder or adviser, walking through cohorts, channel CAC, margin and payback, turns the model into shared knowledge and catches optimistic assumptions before an investor does.

                ## Milestones
                1. A standing quarterly review in both calendars.
                2. A one-page pack sent two days before, with the four headline charts.
                3. Decisions and open questions recorded at each review.
                4. Actions from the last review checked at the start of the next.

                ## Notes
                Start from the **Meeting notes** template so decisions and actions from each review are easy to find next quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews have been held with a written pack and recorded decisions, and each opened by checking the last review's actions."
                cadence: cyclic
              tasks:
                - "Book a standing quarterly review with your co-founder or adviser"
                - "Send the one-page review pack two days ahead @recurring(quarterly)"
                - "Record decisions and open questions during the review"
                - "Open each review by checking last quarter's actions"
            - name: LTV formulas and the traps in each
              description: |-
                ## Purpose
                Lifetime value is the most abused number in startup decks: revenue instead of margin, churn from a month of data, lifetimes stretched past ten years. Working through the common formulas on your own data, and seeing how far apart they land, teaches you which one to trust and how to explain your choice.

                ## Milestones
                1. Three LTV methods calculated on the same data: simple churn, cohort-based and capped lifetime.
                2. The spread between the methods written down.
                3. A cap on lifetime chosen, such as three or five years, with the reason.
                4. A short explanation of your chosen method that a non-finance founder could follow.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three LTV methods have been calculated on your own data and a capped method chosen, with a plain-language explanation written."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Calculate LTV with the simple margin over churn formula"
                - "Calculate LTV from your cohort retention curves"
                - "Apply a lifetime cap and compare the three answers"
                - "Write a paragraph explaining which method you use and why"
            - name: Building a cohort analysis by hand
              description: |-
                ## Purpose
                Analytics tools produce cohort charts in one click, but founders who have never built one cannot tell when the tool is counting wrongly. Building a cohort table from a raw export once, cell by cell, teaches what reactivations, upgrades and refunds do to the numbers.

                ## Milestones
                1. A raw export of customers and payments loaded into a blank sheet.
                2. A logo retention cohort table built with formulas, not a pivot tool.
                3. A revenue retention version built alongside it.
                4. Results compared with the analytics tool and any difference explained.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand-built cohort table matches the analytics tool, or every difference between them has a written explanation."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export raw customer and payment records to a blank sheet"
                - "Build a logo retention table using only formulas"
                - "Add a revenue retention table beside it"
                - "Compare with your analytics tool and explain any gap"
            - name: Contribution margin versus gross margin
              description: |-
                ## Purpose
                Gross margin covers the cost of delivering the product; contribution margin also takes out costs such as payment fees, variable support and fulfilment that accounting may place elsewhere. Knowing the difference, and where your own costs sit, stops you claiming a software-like margin for a business that is mostly service.

                ## Milestones
                1. Both margins defined in your own words with an example from your costs.
                2. Each variable cost assigned to gross margin or contribution margin.
                3. Both margins calculated for the last full month.
                4. The gap between them explained in a sentence in the model's notes.

                ## Notes
                How costs are classed in statutory accounts is a question for your accountant. The model can use its own management view as long as it says so.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Gross and contribution margin are both calculated for the last month, with every variable cost assigned to one of them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write both definitions with an example from your own costs"
                - "Assign every variable cost to gross or contribution margin"
                - "Calculate both margins for the last full month"
                - "Explain the gap between them in the model's notes"
            - name: Sensitivity analysis with a tornado chart
              description: |-
                ## Purpose
                Every model has two or three inputs that decide everything and a dozen that barely matter. Moving each input up and down by a fixed amount and charting the effect on contribution and payback shows where to spend effort, and gives you a ready answer when an investor asks what happens if churn doubles.

                ## Milestones
                1. Each key input flexed by the same percentage up and down.
                2. The effect on LTV to CAC and payback recorded for each.
                3. A tornado chart ranking inputs by effect.
                4. The top three inputs named in the model summary.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A tornado chart ranks every key input by its effect on LTV to CAC, and the top three are named in the model summary."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick the eight to ten inputs to flex"
                - "Move each input up and down by the same percentage"
                - "Record the effect on LTV to CAC and payback"
                - "Draw a tornado chart and name the top three inputs"
            - name: Base, downside and upside scenarios
              description: |-
                ## Purpose
                Single-line forecasts invite false confidence, while twenty scenarios invite paralysis. Three named cases with written assumptions, a base you expect, a downside you could survive and an upside you are working towards, give the team a shared vocabulary and make spending decisions faster.

                ## Milestones
                1. Three scenarios defined by a handful of named inputs, not every cell.
                2. The assumptions behind each scenario written in a sentence.
                3. Contribution, payback and cash need shown for each case.
                4. The downside case checked against the cash you actually have.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "The model switches between three written scenarios and shows contribution, payback and cash need for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose the five inputs that define each scenario"
                - "Write one sentence of reasoning for each case"
                - "Add a scenario switch to the inputs tab"
                - "Check the downside case against cash in the bank"
            - name: Spreadsheet modelling discipline for founders
              description: |-
                ## Purpose
                Most broken models fail on mechanics rather than thinking: mixed units, circular references, a sum that misses a row. A few hours learning standard modelling conventions, such as one formula per row, colour-coded inputs and error checks, saves days of debugging and makes the model readable to anyone who opens it.

                ## Milestones
                1. A short list of modelling conventions written down from a reputable guide.
                2. The existing model audited against the list.
                3. Every breach fixed or noted with a reason.
                4. A second person able to find any input in under a minute.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The model has been audited against a written list of conventions, every breach is fixed or explained, and a second person finds inputs quickly."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read one financial modelling standards guide"
                - "Write the ten conventions you will follow"
                - "Audit the current model against the list"
                - "Fix each breach or note why it stays"
            - name: Case studies of startups with broken unit economics
              description: |-
                ## Purpose
                Some of the best-known startup failures grew fast while losing money on every order, and their public post-mortems and filings show exactly how. Reading a handful with your own model open teaches you what warning signs looked like from the inside and which of them your business shares.

                ## Milestones
                1. A reading list of five post-mortems, filings or long-form analyses.
                2. For each, the unit economics flaw summarised in two sentences.
                3. Warning signs that apply to your business listed.
                4. Any matching risk added to the assumption register.

                ## Notes
                Start from the **Reading queue** template to keep the list, notes and status together.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five case studies are summarised in two sentences each, and every warning sign that applies to your business is in the assumption register."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a reading list of five unit economics post-mortems"
                - "Read one case and summarise the flaw @recurring(monthly:20)"
                - "List the warning signs your business shares"
                - "Add any matching risk to the assumption register"
            - name: Reading benchmark claims critically
              description: |-
                ## Purpose
                Pitch advice often says LTV should be three times CAC and payback under twelve months, as if those numbers applied to every business. Learning where common benchmarks come from, what kind of company they describe and what stage, lets you use them as context rather than as targets.

                ## Milestones
                1. Three commonly quoted benchmarks traced to their original source.
                2. The sample behind each, such as stage, sector and year, noted.
                3. A view written on which benchmarks fit your business and which do not.
                4. The fitting benchmarks added to the model as reference lines, labelled as such.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three benchmarks are traced to their sources with their samples noted, and only those that fit are shown in the model as labelled references."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the benchmarks you have heard quoted for your sector"
                - "Trace three of them to the report or survey behind them"
                - "Note the stage, sector and year of each sample"
                - "Add only the fitting ones to the model as labelled references"
            - name: Infrastructure and third-party cost per unit reduction
              description: |-
                ## Purpose
                Cloud bills, API calls and software seats often grow faster than revenue because nobody set them up with cost in mind. Taking the three largest variable cost lines and working each one down, through tier changes, caching, renegotiation or a different supplier, moves gross margin directly.

                ## Milestones
                1. The three largest variable cost lines per unit identified.
                2. At least two options to reduce each one priced.
                3. One change made per line and its effect measured over a month.
                4. The new cost per unit fed back into the model.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Cost per unit on each of the three largest variable lines has been reduced and the measured change is in the model."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Rank variable cost lines by cost per unit"
                - "Price two reduction options for each of the top three"
                - "Make one change per line and measure it for a month"
                - "Update cost per unit in the model with the measured result"
            - name: Onboarding and support hours per customer
              description: |-
                ## Purpose
                In early B2B and service-heavy products, human time is often the largest cost to serve and the least measured. Timing onboarding calls, setup work and support tickets for a month shows which customers absorb the hours, and what self-serve guides or product fixes would cut them.

                ## Milestones
                1. Onboarding and support time logged per customer for four weeks.
                2. Hours per customer priced and added to cost to serve.
                3. The three biggest sources of support time named.
                4. One fix shipped for the biggest source and its effect measured.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Four weeks of per-customer onboarding and support hours are priced into cost to serve, and one fix has measurably cut the largest source."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Start logging onboarding and support minutes per customer"
                - "Price the hours and add them to cost to serve"
                - "Name the three biggest sources of support time"
                - "Ship one fix for the biggest source and measure the change"
            - name: Channel mix decision from CAC and payback
              description: |-
                ## Purpose
                Once three months of channel data exist, the question becomes where the next round of spend goes. Comparing channels on CAC, payback and the retention of the customers each brings in, rather than on lead volume, often shows that the cheapest channel brings the customers who leave first.

                ## Milestones
                1. Each channel scored on CAC, payback and twelve-week retention of its customers.
                2. Channels sorted into scale, hold and cut.
                3. A spend shift for the next quarter written with expected effect on blended CAC.
                4. A date set to check whether the shift worked.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every channel is classed scale, hold or cut on CAC, payback and retention, and a dated spend shift is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add twelve-week retention by acquisition channel to the model"
                - "Score each channel on CAC, payback and retention"
                - "Sort channels into scale, hold and cut"
                - "Write the spend shift and a date to check it"
            - name: Discount leakage in the margin model
              description: |-
                ## Purpose
                Founders give launch discounts, annual deals and friend prices, then model at list price. Measuring the price customers actually pay after every discount, credit and free month shows the real revenue per unit, and often explains why margins in the bank look worse than margins in the spreadsheet.

                ## Milestones
                1. Every active customer's effective price after discounts and credits calculated.
                2. The gap between list and effective price shown as a percentage.
                3. The model switched to effective price.
                4. Discounts that cost most in lifetime margin listed for review.

                ## Notes
                Testing new prices or tiers belongs with pricing experiments. This project only measures what current discounts do to the model.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The model uses effective price after discounts, and the list to effective gap is recorded as a percentage."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export every active customer's invoiced amount for last month"
                - "Calculate effective price after discounts and credits"
                - "Replace list price with effective price in the model"
                - "List the discounts that cost most in lifetime margin"
            - name: Annual versus monthly billing and cash payback
              description: |-
                ## Purpose
                The same customer can be a cash drain or cash positive depending on whether they pay monthly or a year upfront. Modelling the cash timing of each billing option, separately from the accounting view, shows how much faster growth could be funded and what discount, if any, an upfront payment justifies.

                ## Milestones
                1. Cash payback modelled separately for monthly and annual billing.
                2. The share of customers on each option recorded.
                3. The cash effect of moving a share of customers to annual estimated.
                4. A recommendation on billing options written for the founding team.

                ## Notes
                How upfront payments are recognised as revenue is a matter for your accountant; this model is about cash timing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The model shows cash payback for monthly and annual billing, and a written recommendation on billing options exists."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Model cash payback for a monthly-billed customer"
                - "Model cash payback for an annual upfront customer"
                - "Estimate the cash effect of shifting a share to annual"
                - "Write a short recommendation for the founding team"
            - name: Customer segment profitability comparison
              description: |-
                ## Purpose
                Early customer bases mix segments by accident: small teams and large ones, hobbyists and professionals, one region and another. Splitting CAC, margin and retention by segment usually shows one group carrying the business and another quietly losing money, which is the most useful input a focus decision can have.

                ## Milestones
                1. Two to four segments defined with rules any customer can be sorted by.
                2. CAC, gross margin and retention calculated for each segment.
                3. LTV to CAC and payback shown per segment.
                4. A decision recorded on which segment to prioritise and which to stop chasing.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Unit economics are calculated for two to four defined segments and a written decision names the segment to prioritise."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write sorting rules for two to four customer segments"
                - "Tag every customer with a segment"
                - "Calculate CAC, margin and retention per segment"
                - "Record which segment to prioritise and which to stop chasing"
            - name: Expansion revenue and net revenue retention model
              description: |-
                ## Purpose
                Where customers can add seats, usage or products, the best cohorts grow in revenue even as some customers leave. Modelling expansion separately from new sales shows whether net revenue retention is above or below one hundred percent, which changes what LTV means and how much CAC the business can afford.

                ## Milestones
                1. Expansion, contraction and churned revenue separated for each cohort.
                2. Net revenue retention calculated at twelve months.
                3. LTV recalculated with expansion included, alongside the version without.
                4. The two or three behaviours that predict expansion noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Twelve-month net revenue retention is calculated per cohort and LTV is shown with and without expansion."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Split cohort revenue into expansion, contraction and churn"
                - "Calculate net revenue retention at twelve months"
                - "Show LTV with and without expansion revenue"
                - "Update net revenue retention for the latest cohort @recurring(quarterly)"
            - name: Thresholds that gate spending on growth
              description: |-
                ## Purpose
                Pouring money into acquisition before the unit economics work only makes losses grow faster. Agreeing in advance the numbers that must be met before paid spend is raised, such as a payback ceiling, a retention floor and a minimum contribution margin, turns a heated argument into a check against a written rule.

                ## Milestones
                1. Three to five gating thresholds agreed and written down.
                2. Each threshold tied to a metric already in the model.
                3. Current values set against each threshold.
                4. The rule for raising spend signed off by every founder.

                ## Notes
                Set thresholds from your own cash position and stage, using benchmarks only as context. Your accountant or a finance adviser can sanity-check them.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rule with three to five thresholds tied to model metrics is agreed by every founder before paid spend is raised."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft three to five thresholds for scaling spend"
                - "Link each threshold to a metric in the model"
                - "Compare current values against each threshold"
                - "Get every founder to agree the written rule"
            - name: Unit economics slide for the investor pitch
              description: |-
                ## Purpose
                Investors at seed stage know the numbers are early; what they test is whether the founder understands them. A single slide showing CAC, contribution margin, payback and retention, with how each was measured and what is still a guess, signals more competence than a hockey-stick chart.

                ## Milestones
                1. Four headline metrics chosen and calculated from the latest refresh.
                2. Each metric labelled with its definition and sample size.
                3. Guessed inputs marked honestly on the slide or in the appendix.
                4. The slide tested on two people who then explained it back.

                ## Notes
                Expect to be asked how each number was calculated. Bring the glossary and model to every meeting.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A pitch slide shows four labelled metrics with sample sizes, and two people have explained it back correctly."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose the four metrics for the slide"
                - "Label each with its definition and sample size"
                - "Mark which inputs are still guesses"
                - "Test the slide on two people and ask them to explain it"
            - name: Unit economics pack for investor due diligence
              description: |-
                ## Purpose
                When a term sheet arrives, diligence moves fast and investors will rebuild your numbers from raw data. Preparing the exports, cohort tables, cost breakdowns and model in a tidy folder before the request, with every figure reconcilable to the bank and billing records, keeps the round on schedule.

                ## Milestones
                1. Raw exports of customers, payments and spend saved in a dated folder.
                2. Cohort tables, CAC by channel and cost to serve reconciled to source.
                3. The model and glossary included with the change log.
                4. A note answering the ten questions you expect investors to ask.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A diligence folder holds raw exports, reconciled cohort and CAC tables, the model with its change log and a written note answering ten expected questions."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Create a dated diligence folder with raw data exports"
                - "Reconcile cohort and CAC tables to billing and bank records"
                - "Add the model, glossary and change log"
                - "Ask the agent to draft answers to ten likely investor questions"
            - name: Unit economics section of the investor update
              description: |-
                ## Purpose
                Investors and advisers who see unit economics only at fundraising time cannot help with them. A short, consistent section in each quarterly update, with the same four metrics and a sentence on what moved, builds trust and often draws useful introductions from people who have seen the pattern before.

                ## Milestones
                1. A fixed format chosen: four metrics, trend arrows and one sentence each.
                2. The section included in a quarterly update without changing definitions.
                3. Bad news reported in the same format as good news.
                4. Replies and offers of help logged after each update.

                ## Notes
                Start from the **Board meeting** template if you hold formal board meetings; the same section works as the unit economics agenda item.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Four consecutive quarterly updates contain the same unit economics section in the same format, with replies logged."
                cadence: cyclic
              tasks:
                - "Choose the four metrics and the fixed format"
                - "Write the unit economics section of the update @recurring(quarterly)"
                - "Report a worsening metric in the same format as an improving one"
                - "Log replies and offers of help after each update"
            - name: Gate review before raising paid acquisition budget
              description: |-
                ## Purpose
                The moment a founder wants to double ad spend or hire a second salesperson is the moment the spending thresholds are most likely to be ignored. A dated review, with the current numbers checked against the agreed rule, makes the decision deliberate and on the record.

                ## Milestones
                1. Current values for every threshold calculated from the latest refresh.
                2. Each threshold marked met or missed.
                3. The decision recorded: raise spend, raise it in a limited test or wait.
                4. A date set to recheck after any increase.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A dated record shows each threshold marked met or missed and the resulting spend decision, with a recheck date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Refresh the model before the review"
                - "Mark each threshold met or missed"
                - "Record the spend decision and its reasoning"
                - "Set a date to recheck the numbers after any increase"
            - name: Annual unit economics model reset
              description: |-
                ## Purpose
                Once a year the business has usually changed enough that the model's structure no longer fits: a new product line, a new channel, a different main unit. A yearly reset rebuilds the structure, retires dead assumptions and sets the baseline for the coming year, rather than patching an old model indefinitely.

                ## Milestones
                1. The model's unit, formulas and tabs reviewed against how the business now works.
                2. Dead assumptions and unused tabs removed.
                3. A fresh baseline saved for the new year.
                4. The glossary and source map updated to match.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each year a reset model with an updated glossary and source map is saved as the new baseline."
                cadence: cyclic
              tasks:
                - "Book a half day for the annual model reset @recurring(yearly)"
                - "Check the unit and formulas still match how customers pay"
                - "Remove dead assumptions and unused tabs"
                - "Save the new baseline and update the glossary"
            - name: B2B SaaS seat and contract economics
              description: |-
                ## Purpose
                For founders selling software to teams, the unit is usually the account, but revenue depends on seats, contract length and expansion, and CAC includes long sales cycles. A model built around accounts, seats per account and contract terms answers the questions B2B investors actually ask.

                ## Milestones
                1. Accounts as the unit, with seats per account and price per seat as inputs.
                2. Sales cycle length and founder time per closed deal recorded.
                3. Contract length and renewal rate modelled.
                4. Payback calculated for small, mid and larger accounts separately.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model calculates payback by account size using seats, contract length and sales cycle inputs."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set accounts as the unit with seats per account as an input"
                - "Record sales cycle length for every closed deal"
                - "Model contract length and renewal rate"
                - "Show payback separately for small, mid and larger accounts"
            - name: Consumer subscription app economics
              description: |-
                ## Purpose
                Consumer apps live and die on trial conversion, app store fees, refund rates and month-two retention, with CAC set by paid installs. Founders who model only price and churn miss the store's cut and the trial funnel, and overstate margin by a wide margin.

                ## Milestones
                1. Install to trial to paid conversion modelled as separate steps.
                2. App store and payment fees taken off revenue at the correct rate for each platform.
                3. Refunds and chargebacks included.
                4. Cost per install translated into cost per paying subscriber.

                ## Notes
                Check the current fee rates on each store's developer pages; they differ by programme and change over time.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model turns cost per install into cost per paying subscriber and takes store fees and refunds off revenue."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Model install, trial and paid conversion as separate steps"
                - "Check current store fee rates on each developer site"
                - "Add refunds and chargebacks to cost to serve"
                - "Convert cost per install into cost per paying subscriber"
            - name: Marketplace take rate and two-sided CAC
              description: |-
                ## Purpose
                Marketplaces earn a take rate on transactions but pay to acquire both buyers and sellers, so a single CAC hides half the cost. Modelling the transaction as the unit, with CAC on each side and repeat rates for both, shows whether the take rate covers the cost of bringing two parties together.

                ## Milestones
                1. The transaction defined as the unit, with average order value and take rate.
                2. Separate CAC for supply and demand.
                3. Repeat transactions per buyer and per seller modelled.
                4. Contribution per transaction after payment, trust and support costs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model shows contribution per transaction with separate supply and demand CAC and repeat rates for both sides."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set the transaction as the unit with order value and take rate"
                - "Split CAC into supply-side and demand-side lines"
                - "Model repeat transactions for buyers and sellers"
                - "Deduct payment, trust and support costs per transaction"
            - name: Physical product landed cost and contribution
              description: |-
                ## Purpose
                Physical goods are often priced from the factory quote alone, leaving out freight, duties, warehousing, returns and breakage. Building a landed cost per unit, then contribution after fulfilment and acquisition, shows the real margin at the first order quantity and how it changes at larger runs.

                ## Milestones
                1. Landed cost per unit built from factory price, freight, duties and insurance.
                2. Fulfilment, packaging, returns and breakage added per unit.
                3. Contribution after CAC calculated at the first order quantity.
                4. Margin shown at two larger order quantities.

                ## Notes
                Duty rates and import rules depend on product codes and countries; confirm them with a customs broker or the customs authority.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model shows landed cost and contribution per unit at the first order quantity and at two larger runs."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect factory, freight and insurance quotes per unit"
                - "Confirm likely duty rates with a customs broker"
                - "Add fulfilment, returns and breakage costs per unit"
                - "Show contribution at three order quantities"
            - name: AI product inference cost per active user
              description: |-
                ## Purpose
                Products built on large language models carry a variable cost per request that software founders are not used to, and heavy users can cost many times what light ones do. Measuring inference cost per active user, split by usage band, shows whether flat pricing survives your heaviest customers.

                ## Milestones
                1. Model and API spend attributed to each active user for a month.
                2. Users grouped into usage bands with cost per band.
                3. Gross margin calculated for each band at current prices.
                4. A monthly check on cost per active user in place.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Inference cost per active user is measured by usage band, and gross margin per band is in the model."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Tag model API calls with a user identifier"
                - "Group users into light, typical and heavy usage bands"
                - "Calculate gross margin for each band at current prices"
                - "Check inference cost per active user @recurring(monthly:10)"
            - name: Service-heavy startup gross margin
              description: |-
                ## Purpose
                Many early startups deliver part of the product by hand: setup, data cleaning, managed services, human review. Investors value these businesses very differently from software, so separating the manual work, pricing it honestly and planning which parts to automate keeps the margin story credible.

                ## Milestones
                1. Every manual step in delivery listed with hours per customer.
                2. Gross margin calculated with and without the manual work.
                3. Steps ranked by hours saved if automated.
                4. A margin target for twelve months out tied to the automation plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Gross margin is shown with and without manual delivery work, and a twelve-month margin target is tied to a ranked automation list."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every manual step in delivering the product"
                - "Record hours per customer for each step"
                - "Calculate gross margin with and without manual work"
                - "Rank steps by hours saved if automated"
            - name: Lightweight model for a solo founder
              description: |-
                ## Purpose
                A solo founder has no finance person and no co-founder to check the numbers, and a large model will simply not get updated. A one-page version with six inputs and four outputs, refreshed in under thirty minutes a month, is enough to see whether the business is heading in the right direction.

                ## Milestones
                1. Six inputs and four outputs chosen for a one-page model.
                2. The page refreshed in under thirty minutes.
                3. Three months of refreshes completed.
                4. An outside person, such as a peer founder, reviewing the page once a quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page model has been refreshed for three months in under thirty minutes each time, with one outside review."
                cadence: rolling
              tasks:
                - "Choose the six inputs and four outputs for one page"
                - "Time your first refresh and trim anything slow"
                - "Refresh the one-page model @recurring(monthly:3)"
                - "Ask a peer founder to review the page once a quarter"
            - name: Cohort LTV with confidence ranges
              description: |-
                ## Purpose
                Young cohorts give only a few months of retention data, so a single LTV figure hides how uncertain it is. Fitting curves to early cohorts and showing a low, central and high LTV, or running a simple simulation over retention and margin, lets you say honestly how wide the range is and what more data would narrow it.

                ## Milestones
                1. Retention curves fitted to each cohort with at least three months of data.
                2. A low, central and high LTV calculated from the spread.
                3. Optionally, a simple simulation run over retention and margin ranges.
                4. The range, not a single number, shown in the model outputs.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The model shows LTV as a low, central and high range derived from fitted cohort retention curves."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Fit a retention curve to each cohort with three months of data"
                - "Calculate low, central and high LTV from the curve spread"
                - "Run a simple simulation over retention and margin ranges"
                - "Replace the single LTV output with the range"
            - name: Marginal CAC and channel saturation curves
              description: |-
                ## Purpose
                Average CAC hides the fact that the next customer from a channel usually costs more than the last, as the easiest audiences are used up. Plotting spend against new customers for each paid channel, and estimating marginal CAC at higher budgets, shows where scaling stops paying back.

                ## Milestones
                1. Weekly spend and new customers per paid channel collected over at least two months.
                2. A saturation curve plotted for each channel.
                3. Marginal CAC estimated at one and a half and two times current spend.
                4. The spend level where marginal payback breaks the threshold noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each paid channel has a saturation curve and an estimated marginal CAC at higher spend, with the breaking spend level noted."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect weekly spend and new customers for each paid channel"
                - "Plot a saturation curve per channel"
                - "Estimate marginal CAC at higher spend levels"
                - "Refresh the saturation curves with new data @recurring(quarterly)"
            - name: Path to positive contribution at scale
              description: |-
                ## Purpose
                Some businesses lose money per customer today but expect volume discounts, automation or higher prices to turn it around. Writing the specific mechanisms, the volumes at which they arrive and the evidence for each, separates a credible path from a hope, and gives investors a plan they can test.

                ## Milestones
                1. Each mechanism that improves contribution with scale named.
                2. The volume or date at which each takes effect estimated, with evidence.
                3. Contribution modelled at three volume levels.
                4. The mechanisms with no evidence flagged as risks in the register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Contribution is modelled at three volumes, each improving mechanism has evidence or a risk flag, and the path is written on one page."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every mechanism you expect to improve contribution"
                - "Estimate the volume at which each one takes effect"
                - "Model contribution at three volume levels"
                - "Flag unevidenced mechanisms in the assumption register"
            - name: Independent review by an experienced operator
              description: |-
                ## Purpose
                Nobody spots the blind spots in a model they built themselves. An hour with a finance lead, fractional CFO or founder who has scaled a similar business, given the model and glossary in advance, usually finds one structural flaw and several optimistic inputs, and is worth doing before a raise or a big spend decision.

                ## Milestones
                1. A reviewer with relevant experience agreed.
                2. The model, glossary and assumption register sent a week ahead.
                3. Their findings recorded and ranked by effect.
                4. Each finding fixed, accepted with a reason or scheduled.

                ## Notes
                Start from the **Meeting notes** template only if you do not already keep review notes elsewhere; the point is that findings are written down and closed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An experienced reviewer has examined the model and every finding is fixed, accepted with a reason or scheduled."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List three people who have scaled a similar business"
                - "Ask one to review the model for an hour"
                - "Send the model, glossary and register a week ahead"
                - "Close every finding with a fix, a reason or a date"
---

# Early Unit Economics Modelling

This area is for founders who need to know, early and honestly, whether each customer makes or loses money once acquisition and serving costs are counted. It starts with foundations (the unit you are counting, fixed formulas, a first napkin model, every variable cost and a fully loaded CAC), then the monthly machinery of cohorts, channel CAC, margin and payback, the modelling skills that keep the numbers honest, the decisions they feed, dated moments such as the pitch slide and the data room, variants for SaaS, consumer, marketplace, hardware, AI and services founders, and finally specialist work on ranges, saturation and scale.

What repeats is a monthly refresh on staggered days for the model, cohorts, channel CAC, margin and payback, a quarterly variance and assumption review, and a yearly reset of the whole model. The **Metrics log**, **Reading queue**, **Meeting notes** and **Board meeting** templates pair with the monthly numbers, the case study reading, the quarterly review and the investor update. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
