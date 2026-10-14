---
id: sales-revenue.sales-compensation-plan-design
name: Sales Compensation Plan Design
description: "A written pay philosophy, pay mix and measures by role, payout curves, crediting and clawback rules, a counsel-checked plan document and the yearly cycle that keeps sales incentives fair and affordable."
category: business
version: 1.0.0
tags: [sales-revenue, sales-compensation-plan-design, manager, founder, enterprise, commission, accelerators, incentive-pay]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - meeting-notes
    - metrics-log
    - risk-register
    - reading-queue
    - board-meeting
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales Compensation Plan Design
          description: "Designing commission rates, accelerators, clawbacks and base-to-variable splits that reward the behaviour the business needs without overpaying for easy wins."
          projects:
            - name: Sales compensation philosophy statement
              description: |-
                ## Purpose
                Before anyone argues about a commission rate, the business needs to say in writing what the plan is for: which behaviour it pays for, where it wants to sit against the market and how much of a seller's pay should be at risk. A one-page philosophy turns every later design argument into a check against agreed principles, and it is the document you reach for when a senior seller asks why the plan changed.

                ## Milestones
                1. A one-page statement covering purpose, market position, pay at risk and what the plan will never reward.
                2. Three to five design principles, such as simplicity, fairness between territories and alignment with margin.
                3. The statement signed off by the chief executive and the finance lead.
                4. The statement filed where every future plan document can refer to it.

                ## Notes
                Keep it short enough to read aloud in two minutes. A philosophy that tries to cover every case becomes a plan document in disguise.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page compensation philosophy, approved by the chief executive and finance lead, is filed and dated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the three behaviours the business most needs sellers to change this year"
                - "Decide whether pay should sit below, at or above the middle of the market"
                - "Draft the one-page statement and circulate it to finance and the sales leader"
                - "Reread the philosophy before each annual plan cycle starts @recurring(yearly)"
            - name: Inventory of current sales roles and pay plans
              description: |-
                ## Purpose
                Most companies that set out to redesign their plan discover they are running more plans than they thought: side letters, legacy rates for early hires and guarantees nobody wrote down. Listing every quota-carrying and supporting role with its actual pay terms gives you the true starting point and exposes the promises the new design has to honour or retire.

                ## Milestones
                1. A table of every sales role with headcount, base salary range, target incentive and current measures.
                2. Every side letter, guarantee and grandfathered rate found and listed against a named person.
                3. Roles with no written plan flagged.
                4. The inventory reconciled with payroll's list of variable pay recipients.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every person receiving variable sales pay appears in one inventory that matches the payroll list, with all side agreements recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export everyone paid commission or sales bonus in the last twelve months from payroll"
                - "Collect the current plan document or offer letter for each role"
                - "Ask each sales manager for any verbal promises or side letters in their team"
                - "Record every exception against the person's name with its end date"
            - name: Cost of sales budget for variable pay
              description: |-
                ## Purpose
                A plan can feel generous to sellers and still be affordable, but only if someone has decided in advance how much of each unit of revenue the business can spend on selling it. Setting a target incentive cost of sales with finance gives every later rate and accelerator a ceiling to be modelled against, instead of a number discovered at year end.

                ## Milestones
                1. Last year's total variable sales pay calculated as a percentage of the revenue it was paid on.
                2. A target range for incentive cost as a share of new and renewal revenue agreed with finance.
                3. The budget split by role family.
                4. The figure written into the compensation philosophy as a design constraint.

                ## Notes
                Compare against your own history before external surveys. A business with long contracts and high margins can carry a different ratio from one with thin margins and monthly churn.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target incentive cost of sales, expressed as a percentage of revenue by role family, is agreed in writing with finance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull last year's total commission and sales bonus spend from the general ledger"
                - "Divide it by the bookings or revenue it was earned on, for each role family"
                - "Agree a target range with the finance lead"
                - "Add the agreed ceiling to the philosophy statement"
            - name: Market pay benchmarking for sales roles
              description: |-
                ## Purpose
                Sellers know what competitors pay, often to the nearest thousand, and a plan that sits well under market will lose your best people to the first recruiter who calls. Matching each role to survey data or reliable peer information shows where base salary, target incentive and total on-target earnings sit today, and how far each role is from the position your philosophy chose.

                ## Milestones
                1. Each internal role matched to a comparable survey job by scope, deal size and seniority.
                2. Market base and on-target earnings recorded at the lower quartile, median and upper quartile.
                3. A gap figure for each role between current pay and the chosen market position.
                4. Sources and survey dates noted so the comparison can be refreshed.

                ## Notes
                Match on the job, not the title. An account executive selling six-figure contracts to large enterprises is not doing the same job as one closing monthly subscriptions.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A benchmark table shows market base and on-target earnings for every sales role, with sources dated and gaps calculated."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the pay survey providers or peer groups you can get credible data from"
                - "Match each internal role to a survey job using deal size and buyer level"
                - "Record market base and on-target earnings at three points of the range"
                - "Refresh the benchmark table with the latest survey data @recurring(yearly)"
            - name: On-target earnings and pay mix by role
              description: |-
                ## Purpose
                The split between base salary and target incentive decides how much of a seller's income depends on closing, and it should follow how much influence the role has over the sale. A hunter closing short-cycle deals can carry a 50:50 split, while a technical specialist on a nine-month cycle rarely should. Setting the figure and the mix role by role, with a reason for each, is the backbone of the whole plan.

                ## Milestones
                1. Each role given an on-target earnings figure linked to the benchmark position.
                2. A base-to-variable split chosen per role, with one sentence on why.
                3. The upside expected for a top performer stated as a multiple of target incentive.
                4. The splits checked against the cost of sales budget.

                ## Notes
                Common ranges run from about 50:50 for new business closers to 70:30 or 80:20 for account management and specialists, but your sales cycle and the seller's influence matter more than any convention.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every sales role has a recorded on-target earnings figure and pay mix, each with a written rationale and checked against the cost budget."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Score each role on how much the seller personally influences the buying decision"
                - "Propose a pay mix per role and note the reason in one sentence"
                - "Set the top-performer upside as a multiple of target incentive"
                - "Check the total against the cost of sales ceiling"
            - name: Choosing the plan measures for each role
              description: |-
                ## Purpose
                Plans that pay on five measures teach sellers to ignore three of them, so the discipline is picking one to three things each role can directly affect and the company truly needs. Choosing measures role by role, with a weight for each and a system that can produce the number, is where strategy actually reaches the seller's payslip.

                ## Milestones
                1. A shortlist of candidate measures, such as new annual recurring revenue, gross margin, renewals or multi-product deals.
                2. No more than three measures per role, each with a weight.
                3. A data source confirmed for every measure, so it can be calculated without manual work.
                4. Each measure tested against the question: can this seller move it this quarter?
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each role has at most three weighted measures, each with a named system of record and a reason it was chosen."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every metric leadership wants the plan to drive this year"
                - "Cut the list to three measures or fewer per role"
                - "Name the system each measure will be calculated from"
                - "Ask the agent to draft one plain-English sentence explaining each measure to sellers"
            - name: Plan year design calendar
              description: |-
                ## Purpose
                Plans designed in December and announced in late January cost a month of selling to confusion and resentment. Working back from the first day of the plan year to fix dates for data pulls, modelling, approvals, legal review and rollout means sellers can sign their plans before the year begins.

                ## Milestones
                1. A dated calendar from data extract to signed plan letters, working back from the plan year start.
                2. Owners named for modelling, approval, legal review and communication.
                3. Approval meetings booked with the chief executive, finance and, where needed, the board.
                4. The calendar shared with everyone who owns a step.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated design calendar with named owners for each step is shared and ends with plan letters signed before the plan year starts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark the plan year start date and count back twelve weeks"
                - "Assign an owner to data, modelling, approval, legal review and rollout"
                - "Book the approval meetings with everyone who must sign off"
                - "Open next year's design calendar twelve weeks before the plan year ends @recurring(yearly)"
            - name: Crediting rules for what counts as a sale
              description: |-
                ## Purpose
                Most commission arguments are not about the rate but about whether a deal counts: signed or invoiced, paid or booked, the first year or the whole contract, and who gets it when two people touched it. Writing crediting rules before the plan year starts settles those questions once, in daylight, rather than deal by deal at quarter end.

                ## Milestones
                1. The crediting event defined, such as signature, invoice or cash receipt.
                2. Rules written for multi-year contracts, renewals, upgrades, downgrades and cancellations.
                3. A rule for deals that arrive through partners or marketplaces.
                4. Ten real deals from last year run through the rules with no ambiguity left.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written crediting rule set is tested against ten real deals from last year and every one resolves to a single, agreed credit amount."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect the ten most argued-over deals from last year"
                - "Write the crediting event and the rules for contract length and changes"
                - "Run each of the ten deals through the draft rules"
                - "Rewrite any rule that gave two possible answers"
            - name: Written plan document and acknowledgement
              description: |-
                ## Purpose
                In many countries a commission promise can be enforceable even if it only ever existed in an email, and unclear terms are often read in the employee's favour. A single plan document with definitions, crediting, payment timing, leaver terms and the company's right to amend, acknowledged by each seller, protects both sides and ends the habit of explaining the plan from memory.

                ## Milestones
                1. A plan document template with definitions, measures, rates, crediting, timing, clawbacks, leavers and amendment rights.
                2. An individual schedule format for each seller's target, territory and rates.
                3. The template reviewed by employment counsel in each country where you employ sellers.
                4. A signature and acknowledgement step built into the rollout.

                ## Notes
                Start from the **Compliance control** template. Some jurisdictions require commission terms in writing and set rules on when earned commission must be paid, so have counsel confirm the wording before it is used.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A counsel-reviewed plan document template and individual schedule exist, with a signature step defined for every seller."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Gather the existing plan documents and offer letters into one folder"
                - "Draft the template sections from definitions through to amendment rights"
                - "Send the draft to employment counsel with the list of countries where sellers work"
                - "Review the plan document wording with counsel before each plan year @recurring(yearly)"
            - name: Compensation committee and approval cadence
              description: |-
                ## Purpose
                When the sales leader designs the plan, approves the exceptions and settles the arguments alone, sellers stop trusting it and finance stops trusting the cost. A small committee of sales, finance and people leads, meeting on a fixed cadence with written decisions, gives the plan owners who are not judging their own pay.

                ## Milestones
                1. Committee membership and written terms of reference covering design, exceptions and changes.
                2. A quarterly meeting in the calendar with a standing agenda.
                3. Decisions recorded with the reasoning and circulated within two working days.
                4. A rule for which decisions need the chief executive or board.

                ## Notes
                Start from the **Meeting notes** template so every ruling can be found when the same question returns next year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The committee has met at least four times in a year, with written decisions circulated after each meeting."
                cadence: rolling
              tasks:
                - "Name the sales, finance and people leads who will sit on the committee"
                - "Write a one-page terms of reference with decision rights"
                - "Hold the committee meeting and circulate written decisions @recurring(quarterly)"
                - "Agree which decisions must go to the chief executive or board"
            - name: Monthly incentive cost tracking
              description: |-
                ## Purpose
                Accelerators that looked affordable in the model can run hot when one seller lands an outsized deal or a whole segment beats plan. Comparing accrued incentive cost with the budget every month shows early whether the plan is paying for performance or for windfalls, while there is still time to act.

                ## Milestones
                1. A monthly report of accrued variable pay against budget, by role family.
                2. Incentive cost as a percentage of credited revenue tracked month by month.
                3. A threshold agreed with finance that triggers a committee review.
                4. A projected year-end cost updated each quarter.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly entries compare accrued incentive cost with budget, and any breach of the agreed threshold went to the committee."
                cadence: rolling
              tasks:
                - "Agree with finance which accrual figure the monthly report will use"
                - "Log accrued incentive cost against budget by role family @recurring(monthly:12)"
                - "Project the year-end incentive cost from the run rate @recurring(quarterly)"
                - "Raise any breach of the agreed threshold with the committee"
            - name: Quarterly attainment distribution check
              description: |-
                ## Purpose
                If almost nobody hits target the plan is demotivating, and if almost everybody does the targets or rates are wrong. Plotting attainment across every seller each quarter, rather than looking only at the team total, is the quickest health signal a plan gives you.

                ## Milestones
                1. A chart of each seller's attainment against target, banded in ten-point steps.
                2. The share of sellers at or above target recorded each quarter.
                3. Outliers at both ends explained by territory, tenure or one-off deals.
                4. A finding written for the committee when the distribution drifts from the design intent.

                ## Notes
                Many designers aim for a majority of tenured sellers, often quoted as around 60 to 70 percent, reaching target. Exclude ramping new hires or the picture will look worse than it is.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly attainment distributions are on file, each with a note on outliers and any finding sent to the committee."
                cadence: rolling
              tasks:
                - "Pull attainment for every tenured seller at quarter close @recurring(quarterly)"
                - "Band the results in ten-point steps and chart them"
                - "Explain each seller below 50 percent or above 150 percent in one line"
                - "Send the chart and findings to the committee"
            - name: Plan interpretation rulings register
              description: |-
                ## Purpose
                Every plan meets cases its authors never imagined: a deal signed by a seller who left the next week, a renewal that doubled in size, a customer that moved region. Recording each interpretation as a precedent, with the reasoning, keeps rulings consistent between managers and hands next year's design a list of gaps to close.

                ## Milestones
                1. A register with the case, the rule it tested, the ruling and who made it.
                2. Every ruling since the plan year began entered.
                3. Repeated cases grouped as candidate rule changes.
                4. The register reviewed before each annual redesign.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every plan interpretation in the year appears in the register with its reasoning, and recurring cases are listed as proposed rule changes."
                cadence: rolling
              tasks:
                - "Set up the register with columns for case, rule, ruling, reason and decision maker"
                - "Enter the rulings already made this plan year from email and chat"
                - "Review new rulings and group repeat cases @recurring(monthly:22)"
                - "Hand the list of repeat cases to the annual redesign"
            - name: Annual plan redesign cycle
              description: |-
                ## Purpose
                Strategy moves every year: a new product, a shift from new logos to expansion, a price change. Treating the plan as a yearly cycle of review, model, approve and launch keeps it current without the temptation to rewrite it every quarter, which is the fastest way to lose sellers' trust.

                ## Milestones
                1. A review of last year's plan against its objectives completed.
                2. Design changes limited to the few the strategy actually requires.
                3. New rates and measures modelled on last year's real deals.
                4. The revised plan approved before the design calendar deadline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each year's plan is approved before its start date, with a written list of what changed and why."
                cadence: cyclic
              tasks:
                - "Write the three strategic shifts for next year that the plan must reflect @recurring(yearly)"
                - "Limit proposed changes to those linked to a stated shift"
                - "Model the proposed plan on last year's closed deals"
                - "Publish a one-page list of what changed and why @recurring(yearly)"
            - name: Mid-year plan health check
              description: |-
                ## Purpose
                Six months in is the last sensible point to fix a plan that is misfiring without rewriting it in the final quarter. A structured mid-year check of cost, attainment, seller feedback and gaming signals shows whether to hold steady, adjust one element or carry the lesson into next year.

                ## Milestones
                1. Cost, attainment spread and top disputes summarised on one page.
                2. Signs of gaming checked, such as deals pushed across periods or contracts split to clear thresholds.
                3. A decision recorded: no change, a targeted fix or a lesson for next year.
                4. Any mid-year change cleared with counsel before it is announced.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A one-page mid-year review with a recorded hold, fix or defer decision is filed by the end of month seven of the plan year."
                cadence: cyclic
              tasks:
                - "Book the mid-year review for the first week of month seven @recurring(yearly)"
                - "Compare close dates against period ends to spot deals being timed"
                - "Summarise cost, attainment and disputes on one page"
                - "Record the hold, fix or defer decision with reasons"
            - name: Seller plan understanding survey
              description: |-
                ## Purpose
                A plan only shapes behaviour if sellers can predict what a deal will pay them, and many cannot. A short annual survey that asks sellers to work out the payout on two sample deals, plus three opinion questions, measures understanding instead of guessing at it.

                ## Milestones
                1. A five-question survey with two worked deal examples and three opinion questions.
                2. Responses collected from at least three-quarters of sellers.
                3. The share who calculated both examples correctly recorded.
                4. The two most confusing plan features named for simplification.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least 75 percent of sellers answer the survey, and the correct-calculation rate is recorded with two named simplifications."
                cadence: cyclic
              tasks:
                - "Write two sample deals that test the plan's trickiest rules"
                - "Run the anonymous survey three months into the plan year @recurring(yearly)"
                - "Score how many sellers got both payouts right"
                - "Name the two features that confused people most"
            - name: Variable pay equity review
              description: |-
                ## Purpose
                Differences in territory quality, inherited accounts and manager discretion can produce pay gaps between groups of sellers even when the plan reads as neutral. An annual review of on-target earnings, quota assignment and actual payout by gender and other protected groups, run with HR, catches structural gaps before they become complaints or claims.

                ## Milestones
                1. On-target earnings, quota and actual payout compiled for each seller in the same role and level.
                2. Gaps between groups calculated, with an explanation for each.
                3. Inherited accounts and territory changes checked as a cause.
                4. Corrective actions agreed with HR and recorded.

                ## Notes
                Run this with HR and, where pay gap reporting is a legal duty, with counsel. Keep individual data restricted to the people doing the review.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An annual equity review compares pay and quota by group within each role, with every unexplained gap given an agreed action."
                cadence: cyclic
              tasks:
                - "Agree with HR which groups and data fields the review will cover"
                - "Compile on-target earnings, quota and payout for each seller in a role"
                - "Run the gap analysis and explain each difference @recurring(yearly)"
                - "Agree corrective actions with HR and set dates for each"
            - name: Compensation plan risk register
              description: |-
                ## Purpose
                Plan risks are easy to name and rarely written down: one seller's windfall, a clause counsel never saw, a quiet incentive to discount, a measure the CRM cannot produce. Keeping them in one register with an owner and a mitigation lets the committee see its exposure at a glance.

                ## Milestones
                1. At least ten plan risks listed with likelihood and impact.
                2. An owner and a mitigation for each high-rated risk.
                3. Windfall and large deal protections tested in the payout model.
                4. The register reviewed at every committee meeting.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register of at least ten plan risks, each with an owner, is reviewed at every committee meeting."
                cadence: rolling
              tasks:
                - "List ten ways this plan could overpay, underpay or be gamed"
                - "Rate each risk for likelihood and impact"
                - "Name an owner and a mitigation for each high risk"
                - "Update the risk ratings before the committee meets @recurring(quarterly)"
            - name: Incentive compensation fundamentals reading
              description: |-
                ## Purpose
                Few founders or sales managers have been taught how incentive plans work: why pay mix varies, what a payout curve does, how thresholds and caps change behaviour. Working through two or three recognised books or courses on sales compensation, with notes on what applies to your business, gives you the vocabulary to discuss design with consultants and finance on equal terms.

                ## Milestones
                1. Two or three books or courses on sales compensation chosen.
                2. Notes kept on pay mix, measures, payout curves and governance.
                3. A list of five ideas that apply to your plan, and three that do not.
                4. One conversation held with a peer who has designed a plan.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two sources on sales compensation are finished, with notes and a list of five ideas applied to your own plan."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose two books or courses on sales compensation design"
                - "Read one chapter a week and note what applies to your plan"
                - "Write five ideas you will use and three you will not"
                - "Book a call with a peer who has run a plan redesign"
            - name: Building a payout model in a spreadsheet
              description: |-
                ## Purpose
                Every design choice in this area eventually becomes a formula, and a manager who can build the model can test an idea in minutes instead of waiting a week for finance. Learning to model a tiered payout curve with a threshold, accelerators and a cap, on real attainment data, is the single most useful skill in plan design.

                ## Milestones
                1. A spreadsheet that calculates payout from attainment with a threshold, two accelerator tiers and an optional cap.
                2. The model checked by hand against three worked examples.
                3. Last year's actual attainment run through it, with total cost compared with what was paid.
                4. A sensitivity table showing cost at 80, 100 and 120 percent of plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A working payout model reproduces three hand-calculated examples exactly and produces a cost sensitivity table at three attainment levels."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Work out three payout examples by hand at different attainment levels"
                - "Build the tiered payout formula and check it against the examples"
                - "Load last year's attainment and compare modelled cost with actual cost"
                - "Add a sensitivity table for 80, 100 and 120 percent of plan"
            - name: Common ways sellers game a plan
              description: |-
                ## Purpose
                Sellers respond rationally to whatever the plan pays, and some of those responses cost the company money: holding deals into the next period, splitting contracts to stay under a threshold, front-loading discounts to close early. Knowing the common patterns, and checking your own data for them, lets your design close the loopholes before they are found.

                ## Milestones
                1. A list of at least eight known gaming patterns, each with the plan feature that invites it.
                2. Last year's deal data checked for timing spikes at period boundaries.
                3. Each pattern matched to a design defence, such as longer measurement periods or minimum deal sizes.
                4. Findings shared with the committee without naming individuals.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of eight gaming patterns, each with evidence checked in your data and a matched design defence, is shared with the committee."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the gaming patterns you have heard of or seen in your own team"
                - "Chart closed deals by day to look for spikes at month and quarter end"
                - "Match each pattern to a plan feature that would discourage it"
                - "Present the findings to the committee with individuals anonymised"
            - name: Behavioural science of sales incentives
              description: |-
                ## Purpose
                Research on motivation suggests sellers respond more to the next visible step than to a distant annual target, feel losses more sharply than equal gains, and push harder as a goal comes within reach. Studying these effects helps you settle practical questions such as how long a measurement period should be, how often to pay and whether a threshold will motivate or discourage.

                ## Milestones
                1. Notes on loss aversion, the goal gradient and the effect of payment frequency.
                2. Each idea linked to a decision in your plan, such as quarterly versus annual targets.
                3. One change proposed for next year with the reasoning written down.
                4. The proposal costed in the payout model.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note links three behavioural findings to specific plan decisions and proposes one costed change for next year."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find two accessible summaries of research on sales incentive behaviour"
                - "Note how each finding bears on period length, thresholds and pay frequency"
                - "Write one proposed plan change with its reasoning"
                - "Cost the proposed change in the payout model"
            - name: Commission accounting basics with finance
              description: |-
                ## Purpose
                Under current revenue accounting standards, such as IFRS 15 and ASC 340-40, commissions on multi-year contracts are often capitalised and spread over the contract or customer life rather than expensed when paid. Understanding how your design choices feed those calculations prevents surprises in the accounts and helps you talk with finance about the real cost of a change.

                ## Milestones
                1. A briefing from finance on how commissions are currently treated in the accounts.
                2. Plan features that affect the accounting, such as renewal rates and multi-year credit, listed.
                3. A note of what finance needs from each new plan to update its calculations.
                4. A handover step added to the annual design calendar.

                ## Notes
                This is about understanding the conversation, not doing the accounting. The treatment is for finance and the auditor to decide.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note agreed with finance lists the plan features that affect commission accounting and the information finance needs each year."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask finance for a thirty-minute briefing on how commissions reach the accounts"
                - "List the plan features that change the accounting treatment"
                - "Write down what finance needs from you each plan year"
                - "Send finance the approved plan terms for its commission accounting @recurring(yearly)"
            - name: Employment law questions for commission plans
              description: |-
                ## Purpose
                Commission rules sit inside employment law: when commission counts as earned wages, whether it can be withheld after someone leaves, whether a plan can be changed mid-year and how holiday pay or minimum wage interacts with variable pay. Preparing a precise list of questions for counsel in each place you employ sellers gets clear answers for less money and fewer surprises.

                ## Milestones
                1. A list of every country, and where relevant state or province, where sellers are employed.
                2. A question list covering earned status, leavers, amendment, holiday pay and written terms.
                3. Counsel's answers recorded for each jurisdiction.
                4. Plan document wording updated to match the answers.

                ## Notes
                Nothing here replaces advice. Record counsel's answers as given and date them, because the rules change.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Counsel's dated answers to a standard question list are recorded for every jurisdiction where sellers are employed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each jurisdiction where you employ or contract sellers"
                - "Write the question list on earned commission, leavers, changes and holiday pay"
                - "Send the list to employment counsel and book a review call"
                - "Record counsel's answers with the date beside each"
            - name: Accelerator and decelerator curve design
              description: |-
                ## Purpose
                The slope of the payout curve above and below target is where a plan shows what it really values. Choosing a threshold, a rate below target and one or two accelerator tiers above it, modelled on real attainment, decides whether top sellers keep pushing after target and whether weak quarters are paid for generously.

                ## Milestones
                1. A threshold below which no incentive is paid, or a written reason for having none.
                2. A decelerated rate below target and accelerated rates above it, with tier boundaries.
                3. The curve modelled on last year's attainment to show total cost and top-earner pay.
                4. The curve drawn on one chart for the plan document.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A payout curve with threshold, tiers and rates is modelled on last year's attainment and approved with its projected cost."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Plot last year's attainment for every tenured seller"
                - "Draft a threshold, a below-target rate and two accelerator tiers"
                - "Model total cost and the top earner's pay under the draft curve"
                - "Draw the final curve as one chart for sellers"
            - name: Cap or no cap decision
              description: |-
                ## Purpose
                Caps protect the company from windfalls but tell your best sellers to stop selling once they reach them, and sellers remember a cap long after the deal that triggered it. Deciding between a hard cap, a soft cap that slows payout, a large deal review clause or no cap, with the trade-offs written down, settles a question that otherwise returns every year.

                ## Milestones
                1. The four options described with their effect on cost and behaviour.
                2. The largest deals of the past three years run through each option.
                3. A decision recorded with the reason and approved by the committee.
                4. Wording for the chosen option drafted for the plan document.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The committee has approved a recorded decision on caps or large deal review, with wording ready for the plan document."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the five largest deals of the last three years and what each paid"
                - "Model each deal under a hard cap, a soft cap, a review clause and no cap"
                - "Recommend one option with its cost and behaviour trade-off"
                - "Draft the clause for the plan document"
            - name: Earning point, payment timing and clawbacks
              description: |-
                ## Purpose
                Paying on signature motivates closing but pays out on customers who never settle their first invoice; paying on cash collection is safer but delays the reward for months. Deciding when commission is earned, when it is paid and what is recovered if a customer cancels early protects the business without making sellers feel they are lending it money.

                ## Milestones
                1. The earning event and payment schedule defined, such as half on signature and half on first payment.
                2. A clawback rule with a time window, such as cancellations within the first 90 or 180 days.
                3. A rule for recovering clawbacks after the seller has left, cleared with counsel.
                4. The rules tested on last year's cancelled and non-paying customers.

                ## Notes
                Where local law limits deductions from pay, recovery after departure may not be possible. Get counsel's view before writing a recovery clause.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The earning event, payment schedule and clawback window are written into the plan, cleared by counsel and tested on last year's cancellations."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List last year's customers who cancelled or never paid within six months"
                - "Draft the earning event, payment schedule and clawback window"
                - "Ask counsel whether clawbacks can be recovered from a leaver's final pay"
                - "Check how often the clawback rule fired and whether the window still fits @recurring(quarterly)"
            - name: Multi-year and prepaid contract crediting
              description: |-
                ## Purpose
                A three-year contract paid upfront is worth far more to the business than three one-year renewals, but paying full commission on all three years at once can create a windfall and a clawback headache. Setting how much credit multi-year terms, prepayment and ramped contracts earn rewards the deals finance wants without overpaying for length.

                ## Milestones
                1. Finance's view of the value of a multi-year term and of prepayment recorded.
                2. A credit rule for years two and three, such as a reduced rate or a kicker for prepayment.
                3. A rule for ramped contracts where the price steps up each year.
                4. Five recent multi-year deals run through the rules.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written credit rules for multi-year, prepaid and ramped contracts are tested on five real deals and approved by finance."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask finance how much a prepaid multi-year term is worth compared with annual billing"
                - "Draft credit rules for later contract years and for prepayment"
                - "Add a rule for contracts with annual price steps"
                - "Run five recent multi-year deals through the rules"
            - name: New business versus renewal and expansion rates
              description: |-
                ## Purpose
                Paying the same rate on a renewal as on a new logo overpays for revenue that was largely coming anyway, while paying nothing invites neglect and churn. Setting different rates for new customers, expansion and renewal, matched to the effort each takes, points selling time where the strategy needs it.

                ## Milestones
                1. Win rates and effort for new, expansion and renewal revenue compared from your CRM.
                2. A rate or credit weighting for each revenue type.
                3. A rule for net expansion, so downgrades offset upgrades.
                4. The weighted plan modelled against last year's revenue mix.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Distinct rates for new, expansion and renewal revenue are modelled on last year's mix and approved by the committee."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Split last year's bookings into new, expansion and renewal"
                - "Compare the time sellers spent on each type from activity data"
                - "Propose a rate or weighting for each type"
                - "Model the weighted rates on last year's mix and check total cost"
            - name: Split credit and team selling rules
              description: |-
                ## Purpose
                As soon as two sellers, a partner manager or a specialist touch the same deal, the plan has to say who is credited and how much. Clear split and overlay rules, decided before the deals exist, stop quarter-end lobbying and let people collaborate without worrying about losing credit.

                ## Milestones
                1. A list of the roles that can claim credit on a deal.
                2. Default splits for common situations, such as two territories or a handoff mid-cycle.
                3. A rule for when overlay roles receive full credit alongside the core seller.
                4. An approval route for splits outside the defaults.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A split credit policy covers every common team selling situation, with default splits and a named approver for exceptions."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the situations last year where more than one person claimed a deal"
                - "Write default splits for each recurring situation"
                - "Decide which overlay roles get full credit alongside the core seller"
                - "Name who approves non-standard splits and how quickly they must answer"
            - name: Joiner, leaver and transfer rules
              description: |-
                ## Purpose
                People join mid-quarter, move territory in June and resign with deals in late stage, and each case changes what they are owed. Writing proration, transfer and leaver rules into the plan in advance avoids negotiating them with someone who is already upset or on the way out.

                ## Milestones
                1. Proration rules for targets and on-target earnings when someone joins or changes role mid-period.
                2. A rule for open pipeline when a seller transfers territory.
                3. A leaver rule for deals signed after the last working day, cleared with counsel.
                4. Three past cases checked against the new rules.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Joiner, transfer and leaver rules are written into the plan, cleared by counsel and tested on three past cases."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect three recent joiner, transfer or leaver cases that caused disagreement"
                - "Draft proration rules for mid-period starts and role changes"
                - "Draft the pipeline and post-departure rules and send them to counsel"
                - "Test the rules against the three collected cases"
            - name: Linking payout to price discipline
              description: |-
                ## Purpose
                When commission is paid on bookings alone, a seller loses little by giving away 20 percent to close a week earlier. Tying part of the payout to price realisation or gross margin, through a multiplier or a measure, makes discounting a shared cost rather than a free tool, without turning sellers into accountants.

                ## Milestones
                1. Average discount by seller and segment over the last year.
                2. A chosen mechanism, such as a payout multiplier tied to discount bands or a margin measure.
                3. The mechanism modelled to show its effect on the heaviest and lightest discounters.
                4. A one-paragraph explanation sellers can follow.

                ## Notes
                Show the payout effect on the quote itself, so a seller sees what a discount costs them before offering it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A price discipline mechanism is modelled against last year's discounts and described in one paragraph in the plan document."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull average discount by seller and segment for the last year"
                - "Choose between a discount band multiplier and a margin measure"
                - "Model the effect on the five heaviest and five lightest discounters"
                - "Write the one-paragraph explanation for the plan document"
            - name: Draws and guarantees for new sellers
              description: |-
                ## Purpose
                New account executives may take six months to close a first deal, and few can live on base salary alone while they ramp. Deciding whether to offer a recoverable draw, a non-recoverable guarantee or a reduced ramp target, and for how long, makes hiring offers consistent and stops the business paying indefinitely for a ramp that is not working.

                ## Milestones
                1. Average time to first deal and to full productivity from your own hiring history.
                2. A chosen mechanism and duration for each closing role.
                3. Rules for what happens if the seller leaves during the draw period, cleared with counsel.
                4. Standard offer letter wording for the chosen terms.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each closing role has a standard ramp pay mechanism with a fixed duration, counsel-cleared wording and a basis in your own ramp data."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate average time to first deal for sellers hired in the last two years"
                - "Compare a recoverable draw, a guarantee and a reduced ramp target"
                - "Set the duration and leaver terms for the chosen mechanism"
                - "Write standard offer letter wording for it"
            - name: Annual plan rollout and launch sessions
              description: |-
                ## Purpose
                Explained badly, even a well-designed plan is experienced as a pay cut. Launch sessions where each team sees the reasons for change, worked examples at their own attainment levels and a calculator, followed by a one-to-one with their manager, decide whether the plan is trusted from the first week.

                ## Milestones
                1. A launch deck covering what changed, why, and three worked examples per role.
                2. A payout calculator sellers can use on their own deals.
                3. Managers briefed a week before sellers, with an answer sheet for likely questions.
                4. Every seller through a launch session and a one-to-one before the plan year starts.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every seller has attended a launch session and a manager one-to-one before the plan year starts, with the calculator shared."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draft the launch deck with what changed, why, and worked examples"
                - "Build a simple payout calculator for each role"
                - "Brief managers a week before the seller sessions"
                - "Ask the agent to draft an answer sheet for the twenty likeliest seller questions"
            - name: Individual plan letters signed before the plan year
              description: |-
                ## Purpose
                Sellers who start the year without a signed plan are working on trust, and some plan terms are hard to rely on until they have been accepted. Issuing each seller's individual schedule, with their target, territory, rates and effective dates, and chasing every signature before the first day closes that gap.

                ## Milestones
                1. An individual schedule generated for every seller from the approved plan.
                2. Each schedule checked by the seller's manager and by finance.
                3. Letters issued with a signature deadline before the plan year starts.
                4. Signed copies filed and unsigned ones escalated.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every seller has a signed individual plan schedule on file by the first day of the plan year."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Generate an individual schedule for each seller from the approved plan"
                - "Have each manager and finance check the schedules for their people"
                - "Send the schedules with a signature deadline a week before the year starts"
                - "Escalate any unsigned schedule to the sales leader"
            - name: Board approval of the sales compensation plan
              description: |-
                ## Purpose
                In larger or investor-backed companies the board or its remuneration committee often expects to approve total sales incentive cost and the plans of senior sales leaders. Preparing a short paper with cost, rationale, risks and a comparison with last year gets approval in one meeting instead of three.

                ## Milestones
                1. A board paper of no more than four pages covering cost, design changes, risks and benchmarks.
                2. The paper reviewed by the chief executive and the finance lead.
                3. Likely board questions listed with answers prepared.
                4. The approval recorded in the board minutes.

                ## Notes
                Start from the **Board meeting** template.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The board or its committee has approved the plan, with the approval minuted before plan letters are issued."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm with the company secretary which plan decisions need board approval"
                - "Draft a four-page paper on cost, changes, risks and benchmarks"
                - "Review the paper with the chief executive and finance lead"
                - "File the minuted approval with the plan documents"
            - name: Year-end plan retrospective
              description: |-
                ## Purpose
                The end of the plan year is when the evidence is complete and memories are fresh, and it is usually skipped because everyone is busy closing. A two-hour retrospective with sales, finance and people leads on what the plan rewarded, what it cost and what it got wrong feeds the next design with facts instead of anecdotes.

                ## Milestones
                1. Final cost, attainment spread and top-earner analysis compiled.
                2. The top three complaints from sellers and managers gathered.
                3. A list of keep, change and drop items agreed.
                4. The list handed to the next redesign cycle.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A keep, change and drop list from a year-end retrospective is agreed and handed to the next design cycle."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a two-hour retrospective for the month after year end"
                - "Compile final cost, attainment spread and the top ten earners' results"
                - "Gather the top three complaints from managers and a sample of sellers"
                - "Agree and publish the keep, change and drop list"
            - name: Managing a mid-year plan change
              description: |-
                ## Purpose
                Sometimes a plan must change mid-year: an acquisition, a pricing overhaul or a measure that has stopped working. Handling the change with legal review, a clear effective date, protection for commission already earned and individual conversations keeps trust intact when the rules move under people.

                ## Milestones
                1. Counsel's confirmation that the plan's amendment clause covers the change.
                2. An effective date set, with commission earned up to that date protected.
                3. Revised schedules issued and signed.
                4. Each affected seller spoken to by their manager before the written notice.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A mid-year change is made with counsel's sign-off, a stated effective date, protected earned commission and signed revised schedules."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the reason for the change in two sentences"
                - "Check the amendment clause with counsel before announcing anything"
                - "Calculate commission earned to the effective date for every affected seller"
                - "Brief managers to speak to each seller before the written notice goes out"
            - name: First commission plan for a founder's first sales hire
              description: |-
                ## Purpose
                Founders hiring their first seller often copy a plan from a friend's company or promise a percentage of everything, then spend a year unwinding it. A simple one-page plan, with an on-target figure, one measure, a clear crediting rule and a review date, gives the hire certainty and keeps your options open while the company learns what sells.

                ## Milestones
                1. On-target earnings and pay mix set from a quick market check.
                2. One measure chosen, usually new annual contract value.
                3. A crediting rule for deals the founder sourced or was already working.
                4. A review date six months in, stated in the plan.

                ## Notes
                Be explicit about founder-sourced deals already in the pipeline. It is the most common early dispute.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed one-page plan for the first sales hire states on-target earnings, one measure, rules for existing pipeline and a six-month review date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask two founders at a similar stage what they pay their first seller"
                - "List the deals already in the pipeline and decide how each will be credited"
                - "Write the one-page plan with a six-month review date"
                - "Have the plan checked by counsel before the offer goes out"
            - name: Equity and cash mix for early sellers
              description: |-
                ## Purpose
                Early-stage companies often offer equity to sellers in place of some cash, but most sellers value commission they can spend far above options they cannot sell. Deciding how equity fits early sales packages, and explaining its value honestly, avoids hiring people who later feel misled.

                ## Milestones
                1. Your board's or lead investor's guidance on equity for non-founding hires.
                2. A standard equity range for each early sales role.
                3. A plain explanation of vesting and what the equity could be worth in three scenarios.
                4. Cash on-target earnings kept within reach of market despite the equity.

                ## Notes
                Equity terms and their tax treatment vary by country. Have counsel and an accountant review the wording before it goes in an offer.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A standard equity range for each early sales role is approved, with a written explanation reviewed by counsel."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your board or lead investor for equity pool guidance for early hires"
                - "Set an equity range for each sales role"
                - "Write a plain explanation of vesting with three value scenarios"
                - "Check that cash on-target earnings still reach the market lower quartile"
            - name: Front-line manager compensation plan
              description: |-
                ## Purpose
                Sales managers paid on their own deals will compete with their team, and those paid only on the team total may carry a weak seller too long. Designing the manager plan around team attainment, with a measure for how many sellers reach target, aligns the manager with the whole team's results rather than a few big deals.

                ## Milestones
                1. Manager on-target earnings and pay mix set against benchmarks.
                2. Team attainment chosen as the primary measure, with any secondary measure weighted.
                3. A rule on whether managers can carry personal deals and how they are credited.
                4. The plan modelled for a strong team, an average team and a weak team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A manager plan based on team attainment is modelled across three team performance scenarios and approved."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Benchmark front-line manager on-target earnings for your segment"
                - "Decide the primary team measure and any secondary measure"
                - "Write the rule on personal deals carried by managers"
                - "Model the plan for a strong, an average and a weak team"
            - name: Sales development rep plan
              description: |-
                ## Purpose
                Prospecting reps are judged on meetings and pipeline, but paying per meeting booked quickly fills calendars with prospects who never show or never fit. A plan that pays on qualified, held meetings or on pipeline value accepted by account executives, with a small kicker on closed revenue, rewards quality as well as volume.

                ## Milestones
                1. A definition of a qualified, held meeting agreed with the closing team.
                2. A primary measure and target, measured monthly rather than quarterly.
                3. A kicker on revenue closed from the rep's sourced pipeline.
                4. A rule for disputed meetings, with the account executive's acceptance as the test.

                ## Notes
                Monthly measurement suits a role with short feedback loops. Coordinate with whoever sets the team's activity goals so the plan and the targets point the same way.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A development rep plan pays on accepted meetings or pipeline with a revenue kicker, and the meeting definition is signed off by the closing team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree with closing team leads what counts as a qualified, held meeting"
                - "Choose between paying on meetings accepted and on pipeline value"
                - "Set a kicker on revenue closed from sourced pipeline"
                - "Write the rule for disputed meetings"
            - name: Account manager plan for retention and expansion
              description: |-
                ## Purpose
                Account managers hold the revenue base, and a plan that pays only on expansion can push upgrades that later churn. Combining a retention measure, such as gross or net revenue retention, with an expansion measure, and a larger base share than new business roles, rewards keeping customers as well as growing them.

                ## Milestones
                1. Retention and expansion measures defined with their data sources.
                2. A weighting between the two measures.
                3. A pay mix with a larger base share than new business roles.
                4. Downgrades and churn deducted in the measure, with the rule written down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An account manager plan with weighted retention and expansion measures and a written churn rule is modelled and approved."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull gross and net revenue retention for each account manager's book"
                - "Choose and weight the retention and expansion measures"
                - "Set the pay mix against the account management benchmark"
                - "Write how downgrades and churn reduce credit"
            - name: Sales engineer and specialist overlay plan
              description: |-
                ## Purpose
                Pre-sales engineers and product specialists influence many deals each but close none, so paying them on individual deals invites cherry-picking. A plan with a modest variable share paid on team or regional results keeps them working on the deals that most need them, not the ones that pay them most.

                ## Milestones
                1. The specialist roles in scope listed with their typical deal involvement.
                2. A pay mix with a lower variable share than closing roles.
                3. A measure based on team, regional or segment results.
                4. A rule that keeps deal assignment separate from the specialist's payout.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An overlay plan for each specialist role pays on pooled results with a lower variable share than closing roles, approved by the committee."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each specialist role and how many deals each person supports"
                - "Set a pay mix with a smaller variable share than closers"
                - "Choose a pooled team or regional measure"
                - "Write a deal assignment rule so payout does not drive which deals they take"
            - name: Harmonising plans after an acquisition
              description: |-
                ## Purpose
                An acquisition brings a second sales team with its own rates, caps and promises, and sellers on both sides compare notes within a week. Mapping the two plans, agreeing a transition period and moving everyone to one plan, with protection where pay would fall, keeps the best people from both companies.

                ## Milestones
                1. Both plans mapped side by side by role, rate, measure and crediting.
                2. Sellers who would lose pay under the combined plan identified, with the size of the gap.
                3. A transition period and any protection for affected sellers agreed.
                4. One combined plan issued by an agreed date.

                ## Notes
                Contracts and local law inherited with the acquired company may restrict changes. Involve counsel from the start.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All sellers from both companies are on one signed plan by the agreed date, with any pay protection documented."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Lay both plans side by side role by role"
                - "Model each acquired seller's pay under your plan"
                - "Agree a transition period and protection terms with HR and counsel"
                - "Set the date by which everyone moves to one plan"
            - name: Global plan with country variations
              description: |-
                ## Purpose
                Selling in several countries means different pay levels, currencies, tax rules and employment law, and a single global plan rarely fits all of them unchanged. A core design with defined local variations, such as pay mix, currency conversion and statutory terms, keeps the plan coherent while respecting each market.

                ## Milestones
                1. The global design elements that never vary listed.
                2. Allowed local variations defined, such as pay mix, currency and payment timing.
                3. A currency rule for targets and payouts, with the exchange rate source and fixing date set.
                4. Each country's plan document checked by local counsel.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A core global plan with a written list of local variations and a fixed currency rule is reviewed by counsel in every selling country."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List the design elements that apply in every country"
                - "Define the local variations each country may have"
                - "Choose the exchange rate source for targets and payouts"
                - "Fix the plan exchange rates for the new year from that source @recurring(yearly)"
                - "Send each country's plan to local counsel for review"
            - name: Plan simulation on historical deal data
              description: |-
                ## Purpose
                Averages hide what a plan will do to individuals: one seller can double their pay while another loses a third on the same team total. Running each proposed design against two years of deal-level history, seller by seller, shows the winners, the losers and the total cost before anyone sees the plan.

                ## Milestones
                1. Two years of closed deals with seller, date, value, type and discount in one dataset.
                2. Current and proposed plans calculated deal by deal for every seller.
                3. A winners and losers table showing pay change per seller.
                4. A range of total cost under a strong, an expected and a weak year.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each proposed plan is simulated on two years of deal history, with a per-seller winners and losers table and a three-scenario cost range."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Export two years of closed deals with seller, date, value, type and discount"
                - "Calculate current and proposed payouts deal by deal"
                - "Build a table of pay change per seller"
                - "Run the totals for a strong, an expected and a weak year"
            - name: Incentive spend effectiveness analysis
              description: |-
                ## Purpose
                Every unit of currency spent on incentives should buy revenue the business would not otherwise have had, and most companies never check. Comparing incentive cost per unit of revenue by role, segment and seller over several years shows where the plan is efficient and where it pays for revenue that would have arrived anyway.

                ## Milestones
                1. Incentive cost per unit of credited revenue calculated by role and segment.
                2. Three years of the figure trended.
                3. Segments where cost rose without productivity rising identified.
                4. Recommendations for the next design cycle written.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An annual analysis of incentive cost per unit of revenue by role and segment, with a three-year trend and recommendations, is delivered to the committee."
                cadence: cyclic
              tasks:
                - "Calculate incentive cost divided by credited revenue for each role"
                - "Split the figure by segment and trend it over three years"
                - "Flag segments where cost rose and productivity did not"
                - "Present the findings to the committee before the redesign @recurring(yearly)"
            - name: Compensation for usage and consumption revenue
              description: |-
                ## Purpose
                When customers pay for what they use rather than a fixed subscription, the signed contract says little about the revenue that will follow. Designing credit around committed spend, actual consumption over a period or a blend of the two stops sellers being paid for commitments that never turn into usage.

                ## Milestones
                1. How revenue is recognised for consumption contracts confirmed with finance.
                2. A choice between crediting committed spend, actual usage or a blend.
                3. A measurement window for usage credit, such as the first twelve months.
                4. Payment timing that does not leave sellers waiting a year for every payout.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A crediting approach for consumption revenue, with a measurement window and payment schedule, is modelled and approved."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask finance how consumption contracts are recognised and forecast"
                - "Compare crediting commitment, actual usage and a blend on recent deals"
                - "Set the usage measurement window"
                - "Design interim payments so sellers are not waiting a full year"
            - name: Senior sales leader incentive plan
              description: |-
                ## Purpose
                Chief revenue officers and sales vice presidents shape the plan everyone else is on, so their own incentive needs company-level measures and closer board oversight. Linking their variable pay to total revenue, margin or retention, over a longer measurement period, aligns them with the company rather than with a single quarter.

                ## Milestones
                1. Company-level measures chosen, such as total new revenue, net retention and margin.
                2. An annual or half-yearly measurement period, with quarterly advances if needed.
                3. The plan reviewed by the board or remuneration committee.
                4. A rule on how plan changes affecting the leader's own team are approved.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The senior sales leader's plan, with company-level measures and a stated measurement period, is approved by the board or its committee."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the company measures the board cares about most this year"
                - "Choose two or three for the senior leader's plan and weight them"
                - "Set the measurement period and any quarterly advances"
                - "Submit the plan to the board or remuneration committee for approval"
---

# Sales Compensation Plan Design

This area is for founders, sales managers and enterprise revenue leaders who decide how sellers are paid and want a plan that rewards the behaviour the business needs at a cost it can carry. It begins with the foundations (a written philosophy, an inventory of current plans, a cost budget, benchmarks, pay mix, measures, crediting rules and a plan document), moves through the committee, cost and attainment routines that keep a plan honest, the modelling and legal knowledge worth building, the design decisions on curves, caps, clawbacks and team credit, the yearly rollout events and plans for founders, managers and specific roles, and finishes with simulation, effectiveness analysis and plans for consumption revenue and senior leaders.

What repeats is a monthly cost check on the 12th, a monthly review of plan rulings, quarterly committee meetings, attainment charts and risk updates, and a yearly cycle of philosophy reread, benchmarks, counsel review, redesign, mid-year check, seller survey, equity review and exchange rates. The Compliance control, Meeting notes, Metrics log, Risk register, Reading queue and Board meeting templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
