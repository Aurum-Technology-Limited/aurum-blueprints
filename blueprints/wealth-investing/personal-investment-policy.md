---
id: wealth-investing.personal-investment-policy
name: Personal Investment Policy
description: "A written investment policy statement covering your goals, risk limits, permitted holdings and buy, sell and rebalancing rules, plus the checks, decision log and annual review that keep you following it."
category: personal
version: 1.0.0
tags: [wealth-investing, personal-investment-policy, everyone, investment-policy-statement, risk-limits, sell-rules, decision-log]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - operational-checklist
    - metrics-log
    - reading-queue
    - meeting-notes
    - risk-register
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Personal Investment Policy
          description: "Writing a personal investment policy statement setting goals, risk limits and rules for when to buy, sell and rebalance."
          projects:
            - name: Scoping your investment policy statement
              description: |-
                ## Purpose
                A policy that tries to cover everything gets abandoned half written, and one that covers too little leaves the biggest pot unruled. Deciding first which accounts it governs, who has to agree to it and how long it should be turns an intimidating document into a short, finishable task. Most households end up with two to four pages covering pensions, tax-free accounts and general investment accounts, with cash savings mentioned only where they set a floor.

                ## Milestones
                1. A list of the accounts the policy will govern, with any deliberately excluded and the reason noted.
                2. The people who must agree to the policy named, including a partner or anyone holding power of attorney.
                3. A one-page outline of the sections the policy will contain.
                4. A target length and a finish date for the first draft written at the top of the outline.

                ## Notes
                Keep the first version short. A two-page policy you actually read beats a twelve-page one filed and forgotten, and later projects in this area add clauses one at a time.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page outline names the accounts covered, the people who must agree, the sections to write and a draft finish date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every investment and pension account in the household with its owner"
                - "Mark which accounts the policy will govern and which it will not"
                - "Write the section headings the policy will use on one page"
                - "Agree a finish date for the first draft with anyone who must sign it"
            - name: Investment goals ranked by date and amount
              description: |-
                ## Purpose
                Every rule in the policy should trace back to a goal, and vague goals such as retiring comfortably cannot tell you how much risk is sensible. Writing each goal with a target amount in today's money, a target date and a rank turns the policy from a list of preferences into a plan that can be checked. It also shows which goals are competing for the same money.

                ## Milestones
                1. Every goal the invested money is meant to serve listed, from house deposit to retirement.
                2. Each goal given a target amount in today's money and a target year.
                3. Goals ranked as essential, important or nice to have.
                4. Each goal matched to the account or accounts expected to fund it.
                5. The ranked list copied into the goals section of the policy draft.

                ## Notes
                Use today's money for every amount and let the projections handle inflation. Mixing future and present amounts is the most common reason goal lists stop adding up.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ranked goals table with amount, year and funding account for every goal sits in the policy draft."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every goal the invested money is meant to pay for"
                - "Put a target amount in today's money and a target year beside each"
                - "Rank each goal as essential, important or nice to have"
                - "Match each goal to the account expected to fund it"
            - name: Time horizon map for each pot of money
              description: |-
                ## Purpose
                Money needed in two years and money needed in twenty should not follow the same rules, yet most portfolios treat them as one pile. Sorting every pot into short, medium and long horizons gives the policy its basic shape, because the horizon decides how much short-term loss each pot can live with. It is also the quickest way to spot a house deposit sitting in a fund built for retirement.

                ## Milestones
                1. Each account or earmarked sum placed in a horizon band: under three years, three to ten years, or over ten.
                2. Any pot whose horizon and current holdings clearly clash flagged for attention.
                3. The horizon bands and their boundaries written into the policy.
                4. A rule recorded for moving money between bands as a goal date approaches.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every governed pot is assigned a horizon band in the policy, with clashes between horizon and holdings flagged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note when the money in each account will first be needed"
                - "Place each pot in the under three, three to ten or over ten year band"
                - "Flag any pot whose holdings look wrong for its horizon"
                - "Write the band boundaries and the moving rule into the policy draft"
            - name: Risk capacity worksheet
              description: |-
                ## Purpose
                Risk capacity is how large a fall your finances can absorb without a goal failing, and it is separate from how a fall would feel. A household with a secure salary, a full emergency fund and no debt can usually carry more than one relying on a single freelance income. Filling in a worksheet with income stability, reserves, dependants and debts gives the policy a ceiling that comes from facts rather than mood.

                ## Milestones
                1. Income sources listed with a note on how secure each one is.
                2. Months of essential spending held in cash calculated.
                3. Dependants, debts and fixed commitments recorded.
                4. A plain statement of the largest fall in currency that would not force a goal to change.
                5. The capacity ceiling copied into the risk section of the policy.

                ## Notes
                Capacity can only be lowered by your feelings, never raised by them. If tolerance comes out higher than capacity in the next project, capacity wins.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A completed worksheet ends in one written figure: the largest portfolio fall the household could absorb without changing a goal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each income source and rate how secure it is"
                - "Work out how many months of essential spending sit in cash"
                - "Record debts, dependants and fixed yearly commitments"
                - "Write the largest affordable fall as an amount in your currency"
            - name: Risk tolerance in pounds, not percentages
              description: |-
                ## Purpose
                A 30 percent fall sounds abstract, but seeing that it means 45,000 off a 150,000 portfolio tells you far more about whether you would hold or sell. Translating risk tolerance into currency, then checking it against how you actually behaved in the last market fall, gives a more honest number than a questionnaire alone. The result becomes the loss limit the policy is built around.

                ## Milestones
                1. One or two standard risk tolerance questionnaires completed and their scores noted.
                2. Typical bad-year and severe-fall percentages converted into currency for your actual portfolio size.
                3. Your behaviour in the most recent market fall written down honestly, including any selling.
                4. A tolerable loss figure agreed and compared with the capacity ceiling.
                5. The lower of tolerance and capacity written into the policy as the loss limit.

                ## Notes
                Use your own currency in place of pounds. If you have never lived through a fall with real money invested, assume your tolerance is lower than the questionnaire says.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The policy states a single loss limit in currency, set at the lower of the tolerance figure and the capacity ceiling."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Complete a risk tolerance questionnaire from your platform or pension provider"
                - "Convert a 20 percent and a 40 percent fall into amounts for your portfolio"
                - "Write down what you did during the last big market fall"
                - "Record the lower of your tolerance and capacity figures as the loss limit"
            - name: Liquidity and cash floor clause
              description: |-
                ## Purpose
                Forced selling during a crash is the most expensive mistake an investor can make, and it almost always starts with too little cash. A clause setting a minimum cash reserve, and banning investment of money needed within a set number of years, protects every other rule in the policy. It also answers the recurring question of whether spare cash should go into the market yet.

                ## Milestones
                1. A cash floor set as a number of months of essential spending.
                2. A rule stating how soon money must be needed before it stays out of investments.
                3. The account where the floor is held named in the clause.
                4. The order of top-up recorded for when the floor has been used.

                ## Notes
                Three to six months is a common starting range for employed households and longer for the self-employed, but set the number from your own risk capacity worksheet.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The policy contains a cash floor in months of spending, a minimum horizon for invested money and the account holding the floor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out one month of essential household spending"
                - "Choose the number of months the cash floor must cover"
                - "Name the savings account that holds the floor"
                - "Write the clause and the top-up order into the policy draft"
            - name: Constraints register for tax, legal and personal limits
              description: |-
                ## Purpose
                Institutional policies always list constraints, and private investors forget theirs until they collide with one: an employer trading window, a contribution limit, a residency rule or a holding you have promised never to sell. Gathering these into one register keeps the policy honest about what is actually possible. It also saves an embarrassing trade that has to be reversed.

                ## Milestones
                1. Tax wrapper limits and withdrawal rules relevant to your accounts listed.
                2. Employer restrictions such as dealing windows or pre-clearance recorded.
                3. Legal or residency limits, such as funds unavailable in your country, noted.
                4. Personal constraints, such as exclusions you hold on principle, written in plain words.
                5. The register summarised in the constraints section of the policy.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A constraints section in the policy lists tax, employer, legal and personal limits, each with its source."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your employer's share dealing rules if you hold or trade company stock"
                - "List the yearly limits and withdrawal rules of each tax wrapper you use"
                - "Note any products your platform says are unavailable where you live"
                - "Write your personal exclusions as one sentence each"
            - name: Required return versus realistic assumptions
              description: |-
                ## Purpose
                Some investors take far more risk than they need because nobody worked out what return their goals actually require. Comparing the return needed to reach the ranked goals with published long-run assumption ranges shows whether the plan is comfortable, tight or impossible. When it is impossible, the answer is usually more saving, later dates or smaller goals, not a riskier portfolio.

                ## Milestones
                1. The return required to meet the essential goals estimated with a projection tool or planner.
                2. Published long-run return assumptions for each asset class gathered from two independent sources.
                3. The gap between required and expected return written down.
                4. A decision recorded on closing any gap through saving, timing or goal changes.
                5. The return assumption the policy will use stated, with its source.

                ## Notes
                Use real returns, after inflation, and take the more cautious of the published ranges. A financial planner can run this properly if the numbers feel uncertain.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The policy states the required real return for essential goals, the assumed return with its source and how any gap will be closed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Enter the essential goals into a projection calculator to find the required return"
                - "Find two published long-run return assumption ranges for shares and bonds"
                - "Write down the gap between the required and expected return"
                - "Decide whether to close the gap with saving, timing or smaller goals"
            - name: First signed draft of the policy
              description: |-
                ## Purpose
                Notes scattered across worksheets do not stop a panicked sale; a signed, dated document you can reread at two in the morning might. Pulling the goals, horizons, risk limits, liquidity clause and constraints into one draft, then signing it, is the moment the policy starts to work. Gaps can be filled by later projects, but the signature date matters.

                ## Milestones
                1. One document containing purpose, scope, goals, horizons, risk limits, liquidity and constraints.
                2. Placeholder headings left for clauses still to be decided.
                3. The draft read aloud once by everyone who must agree to it.
                4. The document signed and dated by each person named in the scope.
                5. A copy stored somewhere you will see it before placing a trade.

                ## Notes
                Ask the agent to assemble your worksheets into a first draft with consistent headings, then edit every sentence into your own words. A policy you did not write is one you will not follow.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed and dated policy document of two to four pages exists and is stored where it is seen before trading."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to combine your worksheets into one draft with consistent headings"
                - "Rewrite each section in your own words"
                - "Read the draft aloud with everyone who must sign it"
                - "Sign, date and store the policy next to your platform login notes"
            - name: Quarterly policy compliance check
              description: |-
                ## Purpose
                Policies drift out of date quietly: a holding grows past its limit, the cash floor gets spent, a new account appears that nobody added to the scope. A fixed quarterly check, clause by clause, catches these while they are small and cheap to fix. Twenty minutes four times a year is the price of the document meaning anything.

                ## Milestones
                1. A checklist with one line per clause of the policy.
                2. The first quarterly check completed and any breaches written down.
                3. Each breach given a fix and a date or a written exception.
                4. Four consecutive quarterly checks recorded.

                ## Notes
                Start from the **Compliance control** template. Treat the check as a yes or no for each clause; explanations belong in the breach record, not the checklist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly checks are recorded, each listing every clause as compliant or in breach with a fix."
                cadence: rolling
              tasks:
                - "Turn each clause of the policy into a yes or no check"
                - "Run the full policy compliance check against your latest balances @recurring(quarterly)"
                - "Record every breach with a fix and a date"
                - "File the completed check with the policy"
            - name: Pre-trade checklist for every buy and sell
              description: |-
                ## Purpose
                Most rule breaking happens in the minute between seeing an idea and pressing the button. A short checklist read before every trade, asking which goal it serves, which clause allows it and whether limits stay intact afterwards, puts the policy in that minute. It also makes the decision log almost write itself.

                ## Milestones
                1. A checklist of six questions or fewer, drawn from the policy.
                2. The checklist saved where it is visible from your trading platform.
                3. Ten consecutive trades placed only after the checklist was completed.
                4. Any question that never changes an answer removed after a year.

                ## Notes
                Start from the **Operational checklist** template. Regular automated contributions do not need the checklist; anything you initiate by hand does.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten consecutive manual trades each have a completed pre-trade checklist recorded in the decision log."
                cadence: rolling
              tasks:
                - "Write six yes or no questions every trade must pass"
                - "Save the checklist where you see it before logging into the platform"
                - "Complete the checklist for your next manual trade"
                - "Remove any question that never changed a decision @recurring(yearly)"
            - name: Investment decision log
              description: |-
                ## Purpose
                Memory rewrites investment decisions: the good ones become skill and the bad ones become bad luck. A log recording each decision with the date, the reason, the clause relied on and what you expected to happen gives the annual review real evidence. Over a few years it becomes the best guide you have to your own habits.

                ## Milestones
                1. A log with columns for date, action, amount, reason, policy clause and expected outcome.
                2. Every manual trade from installation onwards entered.
                3. Decisions not to act, such as resisting a sale in a fall, also recorded.
                4. A twelve-month review of the log noting patterns and repeated mistakes.

                ## Notes
                Write the reason before the trade, not after. A reason written later is a justification.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log holds an entry, written before the trade, for every manual trade over twelve months."
                cadence: rolling
              tasks:
                - "Create a log with date, action, reason, clause and expected outcome columns"
                - "Write the reason for your next trade before you place it"
                - "Record any decision not to act during a sharp market move"
                - "Review the past month's entries against the policy @recurring(monthly:12)"
            - name: Annual policy review and re-signing
              description: |-
                ## Purpose
                Goals, income and family change every year, and a policy signed three years ago may now forbid what is sensible or allow what is dangerous. A fixed yearly review, ending with a fresh signature, keeps the document current and reminds everyone what they agreed. Small yearly edits also avoid the large rewrite that never gets started.

                ## Milestones
                1. A fixed month chosen for the review every year.
                2. Goals, horizons, limits and constraints each checked against the current situation.
                3. Changes written as tracked edits with a one-line reason.
                4. The policy re-signed and the version number raised.
                5. The previous version archived, not deleted.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A re-signed policy with a new version number and a list of changes and reasons exists each year."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Pick a month for the review that avoids tax year end and holidays"
                - "Hold the annual policy review and re-sign the document @recurring(yearly)"
                - "Write a one-line reason beside every change"
                - "Archive the old version with its signature date"
            - name: Contribution rules written into the policy
              description: |-
                ## Purpose
                New money is the easiest way to keep a portfolio on target, but only if the policy says where it goes. A clause fixing the contribution day, the amount or percentage of income, the order of accounts and what to buy with new money removes a monthly decision. It also stops a run of good months tempting you into lump sums the plan never allowed.

                ## Milestones
                1. A contribution amount or percentage of take-home pay agreed.
                2. The order in which accounts are filled written down.
                3. A rule for directing new money to whichever asset class is below target.
                4. Automatic transfers set up to match the clause.

                ## Notes
                Set the transfer a day or two after payday so it never waits on a decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The policy names the contribution amount, account order and day, and automatic transfers matching it have run for three months."
                cadence: rolling
              tasks:
                - "Agree the monthly contribution amount or percentage of pay"
                - "Write the order for filling each account into the policy"
                - "Set up automatic transfers to match the clause"
                - "Confirm this month's contributions landed where the policy says @recurring(monthly:5)"
            - name: Cooling-off rule for unplanned trades
              description: |-
                ## Purpose
                Tips from colleagues, alarming headlines and a sudden urge to sell all feel urgent and almost never are. A clause requiring any trade outside the normal plan to wait a set period, written on a waiting list, filters out most impulses without banning ideas outright. Ideas that still look good after the wait can go through the pre-trade checklist.

                ## Milestones
                1. A waiting period for unplanned trades agreed and written into the policy.
                2. A waiting list created where proposed trades are parked with the date proposed.
                3. Every unplanned idea routed through the list for six months.
                4. A count kept of ideas dropped during the wait.

                ## Notes
                Three to seven days catches most impulses. Trades that the policy itself requires, such as fixing a breach, are exempt.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of unplanned trade ideas sit on the waiting list with dates, and none was placed before the waiting period ended."
                cadence: rolling
              tasks:
                - "Choose the waiting period and write it into the policy"
                - "Start a waiting list with idea, date proposed and reason"
                - "Park your next unplanned trade idea on the list"
                - "Clear the waiting list, acting on or dropping each idea @recurring(monthly:24)"
            - name: Benchmarks for judging each portfolio
              description: |-
                ## Purpose
                Without a benchmark, every year looks either brilliant or terrible depending on the headlines. Choosing in advance a fair comparison for each portfolio, usually a low-cost mix matching your target allocation, lets the review ask the right question: did the decisions add or lose value compared with doing the simple thing. It also exposes funds that have quietly lagged for years.

                ## Milestones
                1. A benchmark chosen for each governed portfolio, matching its target mix.
                2. The benchmarks and the reason for each written into the policy.
                3. A first comparison of each portfolio against its benchmark over the last full year.
                4. A rule recorded for what happens after three years of material underperformance.

                ## Notes
                Compare returns after all fees. A benchmark you would never actually buy is not a fair test.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "The policy names a benchmark for every portfolio, and a yearly comparison after fees is on file."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Choose a simple benchmark mix that matches each portfolio's target"
                - "Write each benchmark and its reason into the policy"
                - "Compare each portfolio with its benchmark after fees @recurring(yearly)"
                - "Agree what three years of lagging the benchmark will trigger"
            - name: Policy breach and exception procedure
              description: |-
                ## Purpose
                Every policy gets breached eventually, by market movement if not by choice. Deciding in advance how breaches are fixed, how quickly, and when a written exception is acceptable stops one breach becoming the excuse to ignore the whole document. Institutional investors do exactly this, and it works just as well at home.

                ## Milestones
                1. Breaches sorted into passive, caused by markets, and active, caused by a decision.
                2. A time limit for fixing each kind of breach written into the policy.
                3. An exception form requiring a reason, an end date and a second signature where there is a partner.
                4. Open exceptions listed at the end of the policy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The policy contains breach time limits and an exception form, and every open exception has a reason and an end date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Define a passive and an active breach in one sentence each"
                - "Set the time allowed to fix each kind"
                - "Draft a one-page exception form with reason and end date"
                - "Add an open exceptions list to the end of the policy"
            - name: Policy limits dashboard
              description: |-
                ## Purpose
                Clauses you cannot see are clauses you will breach without noticing. A single page showing each limit beside its current value, such as largest holding, allocation versus target, cash floor and speculative sleeve, makes the quarterly check quick and the monthly glance meaningful. Colour the cells that are close to a limit.

                ## Milestones
                1. A dashboard listing every numerical limit in the policy.
                2. Current values entered beside each limit with the date.
                3. Cells within ten percent of a limit marked for attention.
                4. Twelve monthly updates recorded.

                ## Notes
                Start from the **Metrics log** template. Keep it to numbers the policy actually limits; this is not a full net worth tracker.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dashboard shows every numerical policy limit beside a current value, updated monthly for twelve months."
                cadence: rolling
              tasks:
                - "List every number the policy sets a limit on"
                - "Build the dashboard with limit, current value and date columns"
                - "Mark any value within ten percent of its limit"
                - "Update the dashboard from your account balances @recurring(monthly:18)"
            - name: Trigger events that force an early review
              description: |-
                ## Purpose
                Waiting for the annual review after a redundancy, an inheritance or a diagnosis means running for months on a policy written for a different life. A short list of trigger events that require a review within a set number of weeks keeps the document honest between annual reviews. It covers market events too, such as a fall that takes the portfolio past the loss limit.

                ## Milestones
                1. A list of personal triggers, such as job change, marriage, separation, birth, inheritance or serious illness.
                2. A list of market triggers, such as a fall beyond the loss limit or an allocation far outside its band.
                3. A time limit for an early review after any trigger.
                4. The trigger list added as a section of the policy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The policy lists personal and market trigger events and the number of weeks allowed before an early review."
                cadence: rolling
              tasks:
                - "Write down the personal events that would change your goals or capacity"
                - "Add market events that take a limit out of range"
                - "Set how many weeks after a trigger the review must happen"
                - "Ask whether any trigger has occurred since the last check @recurring(quarterly)"
            - name: Reading published investment policy statements
              description: |-
                ## Purpose
                Pension funds, university endowments and charities publish their investment policies, and reading two or three shows what a good one contains and what can be left out. The structure, from objectives to governance to monitoring, transfers well to a household. A few evenings of reading saves reinventing sections that professionals refined long ago.

                ## Milestones
                1. Three published policies from different kinds of institution collected.
                2. The section headings of each compared side by side.
                3. Two or three ideas worth borrowing noted for your own policy.
                4. Sections that do not apply to a household noted as deliberately left out.

                ## Notes
                Start from the **Reading queue** template. Charity and local authority pension fund policies are often short and plainly written.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three published policies have been read and a written list of borrowed and rejected sections exists."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find three published investment policy statements from different institutions"
                - "Add them to a reading queue"
                - "Compare their section headings side by side"
                - "Note two ideas to borrow and the sections to leave out"
            - name: Policy vocabulary for volatility, drawdown and real return
              description: |-
                ## Purpose
                Writing clear rules is hard when terms like volatility, drawdown, correlation and real return are fuzzy. Learning a dozen terms well enough to explain each in a sentence makes the policy precise and makes adviser reports and fund documents readable. It also stops a rule meaning one thing when written and another when tested.

                ## Milestones
                1. A glossary of about twelve terms used in the policy, each defined in one sentence.
                2. A worked example for drawdown and real return using your own numbers.
                3. Every term in the policy checked against the glossary.
                4. The glossary attached as an appendix to the policy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary of at least ten terms with one-sentence definitions is attached to the policy and every term used appears in it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the technical terms your draft policy already uses"
                - "Write a one-sentence definition for each from a reliable source"
                - "Work through drawdown and real return using your own portfolio figures"
                - "Attach the glossary as an appendix to the policy"
            - name: Historical market falls and recovery times
              description: |-
                ## Purpose
                Loss limits mean little until you know how deep and how long real falls have been. Studying a handful of major declines, how far diversified portfolios fell, how long recovery took and what happened to bonds alongside shares, gives your loss limit and horizon bands a factual footing. It also prepares you for how long a recovery can feel.

                ## Milestones
                1. Four or five major market falls listed with depth and length.
                2. Recovery times to the previous peak noted for each, after inflation where available.
                3. The behaviour of a mixed share and bond portfolio during each fall recorded.
                4. Your loss limit compared with the worst of these falls.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of at least four historical falls, with depth and recovery time, is filed beside the loss limit in the policy."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick four or five major market falls from the last century"
                - "Note the depth, length and recovery time of each"
                - "Record how a mixed share and bond portfolio fared in each"
                - "Compare your written loss limit with the worst fall"
            - name: Inflation and real return arithmetic
              description: |-
                ## Purpose
                Goals set in today's money and projections run in nominal returns quietly disagree, and the gap widens every decade. Learning to convert between nominal and real figures, and to see what three percent inflation does to a fixed sum over twenty years, makes the goal and return sections of the policy consistent. It takes an evening and corrects a common planning error.

                ## Milestones
                1. The formula for converting nominal to real return understood and written down.
                2. One goal's target recalculated in future money to see the difference.
                3. Every return and amount in the policy labelled as real or nominal.
                4. Any mixed figures in the policy corrected.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every amount and return in the policy is labelled real or nominal, with no mixed figures remaining."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the formula for converting nominal returns to real returns"
                - "Recalculate one goal in future money at three percent inflation"
                - "Label every figure in the policy as real or nominal"
                - "Correct any figures that mix the two"
            - name: Evidence behind rules-based investing
              description: |-
                ## Purpose
                Rules are only worth following if you believe them when they feel wrong. Reading the main research on investor returns versus fund returns, the cost of frequent trading and how rarely market timing works gives you reasons to keep the cooling-off and sell rules when markets lurch. Notes in your own words are more convincing at a bad moment than a link.

                ## Milestones
                1. Three or four summaries of research on investor behaviour and trading costs read.
                2. The key finding of each written in one sentence of your own.
                3. Each finding linked to the policy clause it supports.
                4. The notes saved beside the policy for rereading in a downturn.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note links at least three research findings to the specific policy clauses they support."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find research comparing investor returns with the funds they held"
                - "Read a summary of studies on trading frequency and returns"
                - "Write each finding in one sentence of your own"
                - "Link each finding to the clause it supports"
            - name: Writing testable policy rules
              description: |-
                ## Purpose
                A rule like avoid risky investments cannot be checked; a rule like no single company above five percent of the total portfolio can. Practising the if, then and within form for every clause makes the quarterly check mechanical and stops arguments about what the policy meant. It is the single biggest difference between policies that work and policies that decorate a folder.

                ## Milestones
                1. Every clause in the draft marked as testable or vague.
                2. Each vague clause rewritten with a number, a condition and a time limit.
                3. A second person able to check compliance from the clauses alone.
                4. No clause remaining that depends on judgement in the moment.

                ## Notes
                A useful test: could someone with your account statements and the policy, but no conversation with you, decide whether you complied?
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Every clause in the policy contains a measurable condition, and a second person has checked compliance from the text alone."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark each clause in the draft as testable or vague"
                - "Rewrite each vague clause with a number, condition and time limit"
                - "Ask someone else to check compliance using only the policy and statements"
                - "Fix any clause they could not test"
            - name: How advisers profile risk and suitability
              description: |-
                ## Purpose
                Regulated advisers must assess risk and suitability before recommending anything, and understanding their method helps you write your own policy and read theirs. Learning what their questionnaires measure, where they fall short and how they map scores to portfolios shows where your own judgement needs to fill gaps. It also prepares you to challenge an adviser's profile if it does not match your worksheet.

                ## Milestones
                1. The main stages of an adviser suitability assessment understood and written down.
                2. Two risk profiling questionnaires compared for what they ask and ignore.
                3. Differences between an adviser's profile and your capacity worksheet listed.
                4. Questions to raise with an adviser about your profile noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of two profiling questionnaires and your own worksheet lists at least three questions for an adviser."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your regulator's consumer guide to suitability and advice"
                - "Complete two different risk profiling questionnaires"
                - "Note where their results differ from your capacity worksheet"
                - "Write three questions to ask any adviser about your profile"
            - name: Scenario testing with projection tools
              description: |-
                ## Purpose
                Building a policy on one projection means building it on one guess. Learning to run the same plan through a historical backtest and a range-of-outcomes calculator shows how often the essential goals are met and what the bad cases look like. The output goes into the policy as a short statement of how confident the plan is and what would change it.

                ## Milestones
                1. One historical backtest and one range-of-outcomes tool chosen.
                2. The current plan run through both with the same inputs.
                3. The share of scenarios meeting essential goals recorded.
                4. The worst ten percent of outcomes described in a sentence.
                5. A confidence statement added to the policy.

                ## Notes
                Treat these tools as ways to compare choices, not predictions. Change one input at a time so you know what moved the result.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The policy carries a confidence statement giving the share of tested scenarios that meet the essential goals."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose one backtest tool and one range-of-outcomes calculator"
                - "Run your plan through both with identical inputs"
                - "Record the share of scenarios that meet the essential goals"
                - "Add a two-sentence confidence statement to the policy"
            - name: Permitted and prohibited investments list
              description: |-
                ## Purpose
                Deciding what you will never buy is easier on a quiet afternoon than when a slick pitch arrives. A clause listing permitted investment types, those needing a written exception and those banned outright, such as geared products, unregulated schemes or anything you cannot explain in two sentences, closes the door on the costliest mistakes. It also makes the pre-trade checklist quick.

                ## Milestones
                1. Investment types sorted into permitted, by exception only and prohibited.
                2. A reason written beside each prohibited type.
                3. A rule that any product you cannot explain in two sentences is prohibited.
                4. The list added to the policy and the checklist.

                ## Notes
                This list is about types of investment, not individual picks. Your regulator's warning list of unauthorised firms is worth checking before any new provider.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The policy lists permitted, exception-only and prohibited investment types, each prohibited type with a reason."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every investment type you hold or have been offered"
                - "Sort each into permitted, by exception only or prohibited"
                - "Write a one-line reason for each prohibition"
                - "Add a question about the list to the pre-trade checklist"
            - name: Position size and concentration limits
              description: |-
                ## Purpose
                Single holdings that grow quietly, employer shares that vest every quarter and funds that all own the same few giant companies create concentration without anyone deciding it. Written limits for any single company, fund provider, sector and country give the policy teeth. They also tell you exactly when to trim instead of waiting for a feeling.

                ## Milestones
                1. A maximum percentage for any single company, including employer shares.
                2. A maximum percentage with any single provider or platform.
                3. Limits on sector and country exposure, checked through fund look-through.
                4. Current holdings compared with each limit and any breach listed.
                5. A rule for trimming back to the limit within a set time.

                ## Notes
                Look through funds to their top holdings when checking single-company limits; a tracker plus the same shares held directly can double up.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The policy sets percentage limits for single companies, providers, sectors and countries, and current holdings have been checked against them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find your five largest holdings as a share of the total portfolio"
                - "Set a maximum for any single company including employer shares"
                - "Set limits for single provider, sector and country exposure"
                - "Write the trim rule and its time limit into the policy"
            - name: Sell discipline and written reasons to sell
              description: |-
                ## Purpose
                Most investors have buying rules and no selling rules, so sales happen on fear, boredom or a falling price alone. Writing the short list of valid reasons to sell, such as a goal date arriving, a limit breached, a rebalance due or a fund changing its objective, makes selling a policy decision rather than a reaction. Anything not on the list goes on the waiting list.

                ## Milestones
                1. A list of valid reasons to sell written into the policy.
                2. Reasons that are explicitly not enough on their own, such as a price fall, recorded.
                3. A rule for which holdings to sell first when cash is needed.
                4. The last three sales checked against the new list.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The policy lists valid and invalid reasons to sell and the order of sale, and past sales have been checked against it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the reasons that would justify selling any holding"
                - "List the reasons that are not enough on their own"
                - "Decide which holdings are sold first when cash is needed"
                - "Check your last three sales against the new rules"
            - name: Lump sum and windfall investing rule
              description: |-
                ## Purpose
                Bonuses, inheritances and property sales arrive irregularly and bring their own anxiety about timing. Deciding in advance whether lump sums go in at once or in stages over a fixed number of months, and which accounts they fill first, removes a decision made under pressure. The research and the trade-offs can be weighed now, with no money on the line.

                ## Milestones
                1. The evidence on investing at once versus in stages read and summarised.
                2. A rule chosen for lump sums above a stated size.
                3. The order of accounts for lump sums written down.
                4. A holding place for the money during any phased period named.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The policy states a lump sum size threshold, the chosen entry method, the account order and the holding place for uninvested money."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a summary of research on investing a lump sum at once or in stages"
                - "Choose the size above which the lump sum rule applies"
                - "Decide the entry method and the number of months if phased"
                - "Write the rule and the account order into the policy"
            - name: Rebalancing clause wording
              description: |-
                ## Purpose
                Rebalancing only works if the trigger is decided before markets move, because afterwards selling the winner always feels wrong. Writing the clause, whether calendar based, band based or both, with the band widths and the method of using contributions first, settles it. The mechanics of the trades themselves belong elsewhere; this project decides the rule.

                ## Milestones
                1. Calendar, band or combined rebalancing chosen with the reason.
                2. Band widths for each asset class written as percentages.
                3. A rule to use new contributions and withdrawals before selling.
                4. The clause tested against last year's portfolio values to see when it would have fired.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The policy contains a rebalancing clause with trigger type, band widths and contribution-first rule, tested against last year's values."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose calendar, band or combined rebalancing"
                - "Set a band width for each asset class"
                - "Add a rule to use contributions before selling"
                - "Test the clause against last year's month-end values"
            - name: Maximum cost limits in the policy
              description: |-
                ## Purpose
                Fee creep returns after you have cut it once unless a clause caps the total yearly cost of any fund and of the platform holding it. Setting the ceiling as a percentage, with a lower one for simple tracker funds, makes cost a pass or fail test in the pre-trade checklist. Finding and cutting existing fees is a separate job; this sets the line.

                ## Milestones
                1. A maximum ongoing charge for tracker funds and for any other fund.
                2. A maximum platform or account fee as a percentage or flat amount.
                3. A rule that any adviser fee is stated in currency each year.
                4. The ceilings added to the pre-trade checklist.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The policy sets maximum fund, platform and adviser costs, and the pre-trade checklist tests each new purchase against them."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Set a maximum yearly charge for tracker funds and other funds"
                - "Set a maximum platform fee for each account"
                - "Add the cost ceilings to the pre-trade checklist"
                - "Check every holding's charges against the ceilings @recurring(yearly)"
            - name: Speculative sleeve with a hard cap
              description: |-
                ## Purpose
                Banning all speculation often fails; people break the rule and then stop following the policy altogether. A small, capped sleeve for individual ideas, kept in a separate account and never topped up from the core portfolio after losses, lets curiosity out without risking the goals. The cap and the no top-up rule are what matter.

                ## Milestones
                1. A cap for the speculative sleeve set as a percentage of the total portfolio.
                2. A separate account designated for the sleeve.
                3. A rule that losses are never topped up from the core portfolio.
                4. A rule for skimming gains above the cap back to the core.

                ## Notes
                Many investors set the cap between zero and five percent. Choose a figure you could lose completely without changing any goal.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The policy names the sleeve account, its percentage cap, the no top-up rule and the skimming rule."
                cadence: rolling
              tasks:
                - "Choose a cap you could lose entirely without changing a goal"
                - "Designate a separate account for the sleeve"
                - "Write the no top-up and skimming rules into the policy"
                - "Record the sleeve value against its cap @recurring(monthly:28)"
            - name: Emergency withdrawal order and conditions
              description: |-
                ## Purpose
                When cash is suddenly needed, selling whatever is easiest to reach can wreck a tax wrapper or crystallise a loss in the worst holding. Writing down what counts as an emergency, which sources are used in which order and which accounts are touched last makes a stressful moment procedural. It complements the cash floor by covering what happens once the floor runs out.

                ## Milestones
                1. A definition of a genuine emergency agreed by everyone who signs the policy.
                2. Sources of emergency cash listed in the order they will be used.
                3. Accounts to be touched last, such as pensions or tax-free wrappers, named with reasons.
                4. The rule for rebuilding the cash floor afterwards written down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The policy defines an emergency, lists withdrawal sources in order and names the accounts protected until last."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree in writing what counts as a genuine emergency"
                - "List emergency cash sources in the order you will use them"
                - "Name the accounts to touch last and why"
                - "Write the rule for rebuilding the cash floor afterwards"
            - name: Market fall fire drill against the policy
              description: |-
                ## Purpose
                Untested policies hide their gaps, and it is far better to find them in a drill than in a real crash. Imagining a 35 percent fall in shares, then walking through every clause to see what it tells you to do, exposes contradictions, missing rules and limits you would breach. Repeating the drill each year keeps the answers fresh.

                ## Milestones
                1. A fall scenario written with the new value of each holding.
                2. Every clause checked for what it instructs in that scenario.
                3. Gaps and contradictions listed.
                4. Fixes to the policy drafted for the next review.
                5. The drill notes filed with the policy.

                ## Notes
                Do the drill with your partner if the policy is joint. The point is to find the questions you would argue about before they cost money.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written drill shows what each clause instructs in a 35 percent share fall and lists every gap found."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Calculate each holding's value after a 35 percent fall in shares"
                - "Read each clause and write down what it tells you to do"
                - "List every gap or contradiction the drill exposes"
                - "Repeat the fire drill with the current policy @recurring(yearly)"
            - name: Policy update after a windfall or inheritance
              description: |-
                ## Purpose
                Inheritances, bonuses and sale proceeds can double a portfolio overnight and make every percentage limit, cash floor and goal in the policy out of date. Treating the arrival as a policy event, with the money parked safely while the document is reviewed, prevents rushed decisions in an emotional period. Grief and excitement are both poor investment advisers.

                ## Milestones
                1. The money held in a safe, accessible account while the policy is reviewed.
                2. Goals revisited to see which the sum changes.
                3. Limits and the cash floor recalculated for the new total.
                4. The lump sum rule applied and recorded in the decision log.
                5. A revised policy signed before the money is invested.

                ## Notes
                Many people set a minimum pause of a few months after an inheritance before investing. Professional advice is worth considering for any sum that changes your plans.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A revised, signed policy reflecting the new total exists before any of the windfall is invested."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Move the money to a safe, easy-access account and leave it there"
                - "Revisit each goal to see what the sum changes"
                - "Recalculate limits and the cash floor for the new total"
                - "Sign the revised policy before investing any of the money"
            - name: Adviser meeting to test your policy
              description: |-
                ## Purpose
                An adviser or planner who reads your policy can spot unrealistic assumptions, missed constraints and tax points you could not see. Bringing a written document to the meeting also turns it from a sales conversation into a review of your plan. Even a single fixed-fee session can be enough.

                ## Milestones
                1. An adviser or planner chosen who offers a fixed-fee or hourly review.
                2. The policy and supporting worksheets sent ahead of the meeting.
                3. Three specific questions prepared.
                4. Notes recorded with each recommendation and your decision on it.

                ## Notes
                Start from the **Meeting notes** template. Choosing and vetting the adviser is its own project; here the policy is the agenda.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Notes from an adviser review of the policy record each recommendation and whether you accepted it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to summarise your policy into a one-page brief for the adviser"
                - "Write three specific questions you want answered"
                - "Record each recommendation and your decision in the meeting notes"
                - "Send the current policy to the adviser before each annual meeting @recurring(yearly)"
            - name: Policy check before a large purchase
              description: |-
                ## Purpose
                House deposits, cars and school fees can pull money from investments in a way the policy never planned for. Checking the purchase against the cash floor, horizon bands and withdrawal order before committing shows whether it can be funded without breaking a rule, or whether the policy needs an exception. It turns a spending decision into an investment decision you can stand behind.

                ## Milestones
                1. The purchase amount and date recorded.
                2. The funding sources checked against the withdrawal order and horizon bands.
                3. The effect on the cash floor and every limit calculated.
                4. Either a compliant funding plan or a signed exception recorded.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A funding plan for the purchase is checked against every relevant clause and filed, with an exception form if any limit is breached."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the purchase amount and the date the money is needed"
                - "Choose funding sources following the withdrawal order"
                - "Calculate the effect on the cash floor and each limit"
                - "File the funding plan or a signed exception with the policy"
            - name: Five-year policy rewrite
              description: |-
                ## Purpose
                Annual edits keep a policy current but rarely question its structure. Every five years, starting from a blank page with the old version beside it, asks whether the goals, horizons and rules still describe the life you are living. It is also the natural point to drop clauses nobody has used.

                ## Milestones
                1. The decision log and five years of compliance checks reread.
                2. A fresh draft written from the outline without copying old text.
                3. Old and new versions compared, with every dropped clause justified.
                4. The rewritten policy signed as a new major version.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A new major version of the policy, written from a blank outline, is signed with a list of dropped and added clauses."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Reread five years of decision log entries and compliance checks"
                - "Draft a fresh policy from the outline without copying old text"
                - "Compare the versions and justify every dropped clause"
                - "Sign the rewrite as a new major version"
            - name: One-page policy for a first-time investor
              description: |-
                ## Purpose
                Someone in their twenties with a first workplace pension and a small tax-free account does not need four pages, but writing down a few rules now sets habits that last decades. A one-page policy covering one goal, a cash floor, a contribution rule and a promise not to sell in a fall is enough. It grows as income and accounts do.

                ## Milestones
                1. One long-term goal and one shorter goal written down.
                2. A cash floor of a few months of spending agreed.
                3. A monthly contribution rule and the account it goes to recorded.
                4. A short sell rule promising no sale on price falls alone.
                5. The page signed and saved on your phone.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed one-page policy covers a goal, cash floor, contribution rule and sell rule and is saved on the investor's phone."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write one long-term and one shorter-term goal"
                - "Set a small cash floor before any investing"
                - "Record the monthly contribution and which account it goes to"
                - "Sign the page and save a copy on your phone"
            - name: Joint household policy for couples
              description: |-
                ## Purpose
                Couples often invest with different tolerances, different accounts and one person doing most of the work, which causes trouble when markets fall or the active partner is ill. A joint policy, signed by both, covering whose accounts it governs, how disagreements are settled and what the less involved partner needs to know, protects the plan and the relationship. Separate goals can still sit inside one document.

                ## Milestones
                1. Each partner's risk tolerance recorded separately and the agreed figure noted.
                2. Accounts in each name listed under one policy.
                3. A rule for settling disagreements, such as defaulting to the more cautious view.
                4. The less involved partner able to explain the main rules unaided.
                5. The policy signed by both partners.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A joint policy signed by both partners records both tolerances, a disagreement rule and every account in each name."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Complete a risk questionnaire each, separately"
                - "List the accounts held in each partner's name"
                - "Agree how disagreements will be settled and write it down"
                - "Walk through the policy together and both sign it"
                - "Hold a short joint check on the policy limits @recurring(quarterly)"
            - name: Policy shift for the last decade before retirement
              description: |-
                ## Purpose
                The ten years before retirement are when a large fall does the most lasting damage, because there is less time to recover and contributions matter less than the pot. Revising the policy for this stage means tightening the loss limit, planning when cash and bonds are built up and setting a date to switch from accumulation rules to drawing rules. Agreeing the detail with a planner is wise.

                ## Milestones
                1. A target retirement date and the first year of withdrawals recorded.
                2. The loss limit revisited for the shorter horizon.
                3. A schedule for building cash and lower-risk holdings toward the date written in the policy.
                4. A date set for switching to a retirement version of the policy.

                ## Notes
                Lower risk is a common choice at this stage, not a rule. People with a large guaranteed income from other sources may reasonably keep more in shares.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A revised policy states the retirement date, the new loss limit, the de-risking schedule and the switch date."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down the target retirement date and first year of withdrawals"
                - "Revisit the loss limit for a ten-year horizon"
                - "Draft a year-by-year schedule for building cash and lower-risk holdings"
                - "Book a planner review of the revised policy"
            - name: Retirement version of the policy
              description: |-
                ## Purpose
                Accumulation rules about contributions and holding through falls do not answer the questions of retirement: how much to take, from which account, and what to do in a bad year. Rewriting the policy for the first year of retirement, with a spending rule agreed with a planner, a cash buffer and guardrails for cutting back, keeps decisions calm when there is no salary behind them. It also makes it easy for a partner to take over.

                ## Milestones
                1. Contribution clauses replaced with a withdrawal clause and the spending rule agreed with a planner.
                2. A cash buffer of a set number of months of withdrawals written in.
                3. Guardrails recorded for reducing withdrawals after a poor year.
                4. The order of accounts for withdrawals stated.
                5. The retirement version signed and the accumulation version archived.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed retirement policy contains a spending rule, cash buffer, guardrails and withdrawal order."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Agree a spending rule for withdrawals with your planner"
                - "Set the size of the cash buffer in months of withdrawals"
                - "Write guardrails for cutting back after a poor year"
                - "Check each month's withdrawals against the spending rule @recurring(monthly:2)"
            - name: Policy for money managed for someone else
              description: |-
                ## Purpose
                Managing investments for a parent under a power of attorney, or for a relative as a deputy or trustee, carries legal duties and the need to show your reasoning to others. A written policy for their money, kept separate from your own, records their goals and needs, sets cautious limits and creates a trail family members and authorities can follow. It protects them and you.

                ## Milestones
                1. The legal authority you act under and its limits written at the top.
                2. The person's own needs, income and any wishes they expressed recorded.
                3. A cautious set of limits and permitted investments agreed.
                4. A record-keeping and reporting routine set up for family members.
                5. Professional advice taken where the authority or the sums require it.

                ## Notes
                Rules for attorneys, deputies and trustees differ by country and by document. Check what your authority permits with the relevant public body or a solicitor before changing any investments.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A separate policy for the other person's money states the legal authority, their needs, the limits and a reporting routine."
                cadence: rolling
              tasks:
                - "Reread the power of attorney or trust deed and note what it allows"
                - "Write down the person's income, needs and any wishes they expressed"
                - "Agree cautious limits and permitted investments for their money"
                - "Send a summary of balances and decisions to the family @recurring(quarterly)"
            - name: Interim policy during a career break or redundancy
              description: |-
                ## Purpose
                Losing an income suddenly changes risk capacity overnight, but the written policy still assumes a salary. A short interim policy, pausing contributions, raising the cash floor and freezing any discretionary trades until income resumes, avoids both panic selling and carrying on as if nothing happened. It has a clear end point so normal rules return.

                ## Milestones
                1. Contributions paused or reduced with the new amount recorded.
                2. A higher cash floor set for the break.
                3. Discretionary trades frozen except those needed to fix breaches.
                4. An end condition, such as three months of new income, written in.
                5. The interim policy signed and the normal one reinstated afterwards.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed interim policy records the paused contributions, raised cash floor, trading freeze and end condition."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Decide whether to pause or reduce contributions and by how much"
                - "Raise the cash floor to cover the expected gap in income"
                - "Freeze discretionary trades until the end condition is met"
                - "Reinstate the normal policy once income has resumed"
            - name: Stress testing the policy against past crises
              description: |-
                ## Purpose
                One fire drill tests one fall; experienced investors check their policy against several very different crises. Running the current portfolio through a high inflation decade, a long bear market, a sudden crash and a year when shares and bonds fell together shows which clauses hold up and which fail. Each scenario gets an entry in a risk register with the response the policy gives.

                ## Milestones
                1. Four historical crisis scenarios with very different causes chosen.
                2. The current portfolio's estimated loss and recovery time in each recorded.
                3. Each scenario logged with the policy's response and any weakness.
                4. Policy changes proposed for any scenario where the plan fails.

                ## Notes
                Start from the **Risk register** template. Include at least one scenario where bonds and shares fall together; it is the one most policies miss.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk register holds four crisis scenarios, each with an estimated loss, the policy's response and any proposed change."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Choose four past crises with very different causes"
                - "Estimate your current portfolio's loss in each"
                - "Log each scenario and the policy's response in a risk register"
                - "Rerun the stress test with current holdings @recurring(yearly)"
            - name: Goal-based sub-policies for separate portfolios
              description: |-
                ## Purpose
                One policy for all money forces a compromise between a house deposit due in four years and a pension due in thirty. Writing a short sub-policy for each major goal, with its own horizon, loss limit, allocation range and benchmark, under a master document holding shared rules, lets each pot be run properly. It suits households with three or more distinct goals.

                ## Milestones
                1. Shared rules, such as permitted investments and the cooling-off period, kept in a master policy.
                2. A one-page sub-policy written for each major goal.
                3. Each sub-policy given its own horizon, loss limit and benchmark.
                4. Accounts mapped clearly to one sub-policy each.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A master policy and one sub-policy per major goal exist, with every account mapped to exactly one sub-policy."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Move the rules that apply to every pot into a master policy"
                - "Write a one-page sub-policy for each major goal"
                - "Give each sub-policy its own horizon, loss limit and benchmark"
                - "Map every account to exactly one sub-policy"
            - name: Investment mandate for a discretionary manager
              description: |-
                ## Purpose
                Handing money to a discretionary manager without a written mandate means accepting their idea of your risk. Translating your policy into a formal mandate, with objectives, limits, prohibited investments, benchmarks and reporting requirements, gives the manager clear instructions and you a basis for judging them. Checking each report against the mandate is what keeps it meaningful.

                ## Milestones
                1. A mandate document drawn from the policy and agreed with the manager.
                2. Prohibited investments and limits included in the signed agreement.
                3. Reporting content and frequency specified.
                4. The first quarterly report checked line by line against the mandate.
                5. A rule recorded for what happens after repeated breaches.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed mandate based on the policy is in place, and each manager report is checked against it with breaches recorded."
                cadence: rolling
              tasks:
                - "Draft a mandate from your policy's objectives, limits and prohibitions"
                - "Agree the reporting content and frequency with the manager"
                - "Get the mandate attached to the signed management agreement"
                - "Check the manager's report against the mandate @recurring(quarterly)"
            - name: Three-year policy adherence audit
              description: |-
                ## Purpose
                The real test of a policy is whether you followed it and whether following it helped. Auditing three years of decision log entries, compliance checks and exceptions shows how often rules were broken, which clauses were never used and what deviations cost or saved compared with the benchmark. The findings feed the next rewrite with evidence instead of opinion.

                ## Milestones
                1. Every decision in three years classified as compliant, excepted or in breach.
                2. The result of each breach compared with what the policy would have done.
                3. Clauses never triggered or repeatedly broken listed.
                4. A short audit report with recommended changes filed with the policy.

                ## Notes
                Be as strict about breaches that made money as about those that lost it. A lucky breach is still a breach.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written audit classifies every decision over three years and lists recommended policy changes with the evidence for each."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Classify each logged decision as compliant, excepted or in breach"
                - "Compare each breach with what the policy would have done"
                - "List clauses that were never triggered or often broken"
                - "Write a short audit report with recommended changes @recurring(yearly)"
---

# Personal Investment Policy

This area is for anyone who invests and wants the important decisions made once, calmly and on paper, instead of again every time the market moves or a friend mentions a hot fund. It starts with the foundations of a personal investment policy statement (scope, goals, horizons, risk capacity and tolerance, liquidity, constraints and a first signed draft), then the operating routines that keep you inside it, the knowledge behind good rules, the clauses that need a real decision, the events that test the document, versions for different stages of life, and finally specialist work such as stress testing, goal-based sub-policies, manager mandates and adherence audits.

What repeats is a monthly look at the decision log, the limits dashboard and the waiting list of proposed trades, a quarterly compliance check against every clause, and a yearly review, benchmark comparison, fire drill and re-signing of the policy. The Compliance control, Operational checklist, Metrics log, Reading queue, Meeting notes and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
