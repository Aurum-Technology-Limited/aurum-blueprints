---
id: sales-revenue.sales-contests-spiffs
name: Sales Contests & SPIFFs
description: "Short sales contests and SPIFFs that change one behaviour at a time, with a written policy, an agreed budget, fair rules, prizes paid on time and an honest look at what each incentive bought."
category: business
version: 1.0.0
tags: [sales-revenue, sales-contests-spiffs, manager, team, incentives, spiffs, sales-contests, recognition]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - feedback-themes
    - reading-queue
    - purchase-decision
    - operational-checklist
    - risk-register
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales Contests & SPIFFs
          description: "Designing short-term sales incentives and competitions that push a specific product, behaviour or quarter-end result without distorting the rest of the pipeline."
          projects:
            - name: Contest and SPIFF policy one-pager
              description: |-
                ## Purpose
                Sales teams that run incentives without a written policy end up arguing about each one: who qualifies, which deals count, when prizes are paid and who can approve a new SPIFF on a Thursday afternoon. A single page agreed by sales leadership, finance and HR settles those questions once, so every later contest only has to define its goal, its metric and its prize.

                ## Milestones
                1. A one-page policy covering eligibility, crediting, approval, payout timing and disputes.
                2. Written sign-off from the sales leader, a finance owner and an HR or people contact.
                3. The policy saved where every seller can find it and linked from the team channel.
                4. A named owner and a yearly review date written at the top.

                ## Notes
                Keep it to one page. Detail for a specific contest belongs in that contest's rules sheet, not in the policy.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page incentive policy signed off by sales, finance and HR is published to the team with a named owner and review date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the questions the last three contests caused arguments about"
                - "Draft the one-page policy covering eligibility, crediting, approval and payout"
                - "Get written sign-off from the sales leader, finance and HR"
                - "Publish the policy and pin it in the team channel"
                - "Review the incentive policy with finance and HR @recurring(yearly)"
            - name: Annual incentive budget agreed with finance
              description: |-
                ## Purpose
                Contests funded from whatever is left in the quarter get cancelled the moment costs are squeezed, and sellers remember the cancelled ones far longer than the prizes. Agreeing a yearly pot with finance, split by quarter with a reserve for surprises, lets you promise prizes with confidence and plan contests ahead instead of asking for money each time.

                ## Milestones
                1. Last year's spend on contests, SPIFFs and prizes totalled from expense and payroll records.
                2. A yearly incentive budget agreed with finance and split across four quarters.
                3. A reserve held back for unplanned launch or competitive SPIFFs.
                4. The budget owner and the approval limit for each level written into the policy.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A yearly incentive budget, split by quarter with a reserve and named approval limits, is agreed in writing with finance."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull last year's contest, SPIFF and prize spend from expenses and payroll"
                - "Propose a yearly incentive pot split by quarter with a reserve"
                - "Agree the budget and approval limits with the finance owner"
                - "Set next year's incentive budget with finance before planning closes @recurring(yearly)"
            - name: Inventory of every live sales incentive
              description: |-
                ## Purpose
                Incentives pile up: a product SPIFF from March, a regional contest a director started, a standing bonus for multi-year deals that nobody remembers approving. Listing every live one in a single table shows where a seller can be paid twice for the same deal and which incentives quietly pull sellers in opposite directions.

                ## Milestones
                1. A table of every live contest, SPIFF and kicker with owner, rule, prize and end date.
                2. Each incentive checked against the commission plan for double payment on one deal.
                3. Conflicting or orphaned incentives flagged with a proposed fix.
                4. The table shared with finance and whoever administers commission.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single table lists every live sales incentive with owner and end date, and every overlap with the commission plan is flagged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each sales leader to name every incentive their team is running"
                - "Record owner, rule, prize and end date for each in one table"
                - "Check each incentive against the commission plan for double pay"
                - "Refresh the live incentive table and close anything past its end date @recurring(quarterly)"
            - name: Baseline of the target behaviour before a contest
              description: |-
                ## Purpose
                Without a before number, any contest looks like it worked, because some deals always close during it. Recording eight to twelve weeks of the exact metric you plan to move, per seller and for the team, gives you the line the contest has to beat and stops a seasonal bump being mistaken for a result.

                ## Milestones
                1. The metric defined in one sentence with its source report named.
                2. Eight to twelve weeks of history captured per seller and for the team.
                3. Seasonal patterns from the same weeks last year noted beside it.
                4. The baseline figure written into the contest rules sheet before launch.

                ## Notes
                Start from the **Metrics log** template.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A weekly baseline of the target metric covering at least eight weeks, per seller and for the team, is recorded before the contest starts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-sentence definition of the metric the contest should move"
                - "Export eight to twelve weeks of that metric per seller from the CRM"
                - "Compare the same weeks last year to spot seasonal swings"
                - "Record the baseline in the contest results log"
            - name: One behaviour each contest should change
              description: |-
                ## Purpose
                Contests that simply reward more revenue mostly pay people for deals they would have closed anyway. Naming one specific behaviour, such as first meetings in a new segment or attaching a support package, along with the commercial problem behind it, gives the contest a reason to exist and a way to tell afterwards whether it earned its cost.

                ## Milestones
                1. The commercial problem written in two sentences with the number that shows it.
                2. One target behaviour chosen that sellers control directly.
                3. A check that the behaviour cannot be met by moving deals between periods.
                4. The behaviour agreed with the sales leader before any prize is discussed.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written problem statement and a single, seller-controlled target behaviour are agreed before the next contest is designed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the commercial problem the next contest should fix in two sentences"
                - "List three behaviours that would fix it and that sellers control"
                - "Pick one and check it cannot be met by shifting deal dates"
                - "Agree the chosen behaviour with the sales leader"
            - name: Eligibility and deal crediting rules
              description: |-
                ## Purpose
                Disputes in contests rarely come from the prize itself; they come from who gets credit for a split deal, whether a rep on leave can win, or whether a manager's own deal counts. Writing the crediting rules before launch, using the same deal fields the commission plan uses, takes the heat out of the final week.

                ## Milestones
                1. Eligible roles listed, including what happens to new starters, leavers and people on leave.
                2. Credit rules for split, transferred and partner-sourced deals written down.
                3. The CRM fields and close-date rule that decide credit named.
                4. Five tricky past deals run through the rules to test them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A crediting rules sheet covering eligibility, splits and transfers is tested on five past deals and attached to the policy."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every role that could take part and decide who is eligible"
                - "Write credit rules for split, transferred and partner-sourced deals"
                - "Name the CRM fields that decide which deals count"
                - "Test the rules on five awkward deals from last quarter"
            - name: Approval route for new SPIFFs
              description: |-
                ## Purpose
                When any director can launch a SPIFF by message, finance learns about it at payout and the commission team scrambles to calculate it. A short approval route with a request form, a named approver at each spend level and a two working day turnaround keeps launches quick without letting them arrive as surprises.

                ## Milestones
                1. A request form asking for goal, metric, eligible group, prize, cost cap and dates.
                2. Approvers named for each spend level, with finance always copied.
                3. A turnaround promise of two working days written into the policy.
                4. The first new SPIFF taken through the route end to end.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A request form and named approvers by spend level are in use, and the next SPIFF launched has gone through them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a SPIFF request form with goal, metric, prize, cost cap and dates"
                - "Agree approvers for each spend level with finance"
                - "Add the two working day turnaround to the incentive policy"
                - "Ask the agent to turn the request form into a shared online form"
            - name: Prize menu with cash and non-cash options
              description: |-
                ## Purpose
                Cash is easy to give but disappears into payslips, while experiences and items are remembered and talked about, and different sellers value them differently. A short prize menu at three value levels, priced and checked with finance, lets each contest pick prizes quickly and lets winners choose what actually matters to them.

                ## Milestones
                1. Six to ten sellers asked what prizes they would genuinely value.
                2. A menu at three value levels mixing cash, experiences, time off and items.
                3. Each option priced at its real cost, including delivery and any tax costs finance requires.
                4. The menu approved by finance and stored with the policy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-level prize menu, priced including tax and delivery costs, is approved by finance and used by the next contest."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask six sellers which prizes they would value and which they would not"
                - "Draft a three-level menu mixing cash, time off, experiences and items"
                - "Price each option including delivery and any tax costs"
                - "Get the prize menu approved by finance"
            - name: Tax and payroll treatment of prizes
              description: |-
                ## Purpose
                In many countries a gift card, a holiday or a laptop given as a sales prize counts as taxable income for the winner, and the employer may have reporting or withholding duties. Confirming how your payroll team and tax adviser want each prize type handled prevents winners getting an unexpected tax bill and the business getting a penalty.

                ## Milestones
                1. Each prize type on the menu listed for the payroll team.
                2. Written guidance from payroll or a tax adviser on how each type is treated and reported.
                3. A decision, agreed with finance, on whether the business covers the tax for winners.
                4. A line in every contest rules sheet telling winners how prizes are taxed.

                ## Notes
                This organises the question; it does not answer it. Rules differ by country and change, so take the answer from your payroll provider or tax adviser.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written payroll or tax adviser guidance covers every prize type on the menu, and contest rules tell winners how prizes are taxed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Send the prize menu to the payroll team with a list of prize types"
                - "Ask payroll or a tax adviser how each type must be reported"
                - "Agree with finance whether the business covers winners' tax"
                - "Recheck prize tax treatment with payroll before the new tax year @recurring(yearly)"
            - name: Twelve-month contest calendar
              description: |-
                ## Purpose
                Contests stacked on the last two weeks of every quarter train sellers to hold deals until a prize appears. A yearly calendar that spreads incentives across quiet months, product launches and the start of quarters, with gaps between them, keeps the pipeline steady and stops any one contest feeling permanent.

                ## Milestones
                1. A twelve-month view with planned contests, launches, holidays and quarter ends marked.
                2. No more than one team-wide contest running at any time.
                3. At least two quiet weeks between consecutive contests.
                4. Next quarter's contests confirmed against the calendar and budget each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A twelve-month contest calendar exists with gaps between contests, and next quarter's plan is confirmed every quarter."
                cadence: cyclic
              tasks:
                - "Mark quarter ends, launches and holiday periods on a yearly calendar"
                - "Place planned contests with at least two quiet weeks between each"
                - "Share the calendar with sales leaders and finance"
                - "Confirm next quarter's contests against the calendar and budget @recurring(quarterly)"
            - name: Live contest leaderboard from the CRM
              description: |-
                ## Purpose
                Sellers lose interest in a contest they cannot see, and a leaderboard that is three days stale invites people to keep their own counts and argue. A leaderboard drawn from the CRM, refreshed on a fixed day and showing progress against personal targets as well as rank, keeps the contest visible and trusted.

                ## Milestones
                1. A leaderboard built from a saved CRM report, not typed by hand.
                2. Personal progress against target shown alongside the ranking.
                3. A fixed refresh day and time announced to the team.
                4. Three consecutive weeks refreshed on time with no data disputes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The leaderboard is refreshed from the CRM on the announced day for every week of the contest, with no unresolved data disputes."
                cadence: rolling
              tasks:
                - "Build a saved CRM report that feeds the leaderboard"
                - "Add each seller's progress against personal target next to rank"
                - "Refresh and post the leaderboard to the team channel @recurring(weekly:fri)"
                - "Log any data dispute and its fix beside the leaderboard"
            - name: Weekly contest moment in the team meeting
              description: |-
                ## Purpose
                Energy from a launch email fades within days unless someone keeps the contest alive. Five minutes in the Monday team meeting, naming who moved, sharing one story of a deal that fits the behaviour and saying how many days are left, keeps attention on the behaviour without turning the meeting into a prize show.

                ## Milestones
                1. A standing five-minute slot in the weekly team meeting agenda.
                2. A short script covering movers, one story and days remaining.
                3. A different seller sharing the story each week.
                4. The slot dropped from the agenda whenever no contest is running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every week of every contest includes a five-minute update in the team meeting with a story told by a seller."
                cadence: rolling
              tasks:
                - "Add a five-minute contest slot to the weekly team meeting agenda"
                - "Write a three-line script for movers, one story and days left"
                - "Run the contest update in the Monday team meeting @recurring(weekly:mon)"
                - "Ask a different seller to share the story each week"
            - name: Mid-contest check of credited deals
              description: |-
                ## Purpose
                Gaming usually shows up in the middle of a contest, not at the end: deals created and closed the same day, close dates pulled in, one customer order split into three. A weekly look at the deals counting towards the contest catches these while a quiet word is still enough, instead of a painful disqualification at the prize announcement.

                ## Milestones
                1. A short list of warning signs agreed with sales operations.
                2. A saved report flagging credited deals that match any sign.
                3. Each flagged deal checked and either confirmed or corrected within the week.
                4. A log of checks and outcomes kept for the post-contest review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every contest week has a recorded check of credited deals, with each flagged deal confirmed or corrected within seven days."
                cadence: rolling
              tasks:
                - "Agree five warning signs of gamed deals with sales operations"
                - "Build a report that flags credited deals matching any sign"
                - "Review flagged contest deals and record the outcome @recurring(weekly:wed)"
                - "Raise confirmed problems privately with the seller and their manager"
            - name: Prize fulfilment within thirty days
              description: |-
                ## Purpose
                Nothing kills the next contest faster than winners still waiting for the last prize. A simple tracker from winner confirmation to prize received, with a thirty day promise and a named person doing the ordering, protects the credibility every future incentive depends on.

                ## Milestones
                1. A fulfilment tracker with winner, prize, ordered date, delivered date and owner.
                2. A thirty day fulfilment promise written into the policy.
                3. Every winner from the last contest confirmed as having received their prize.
                4. No prize older than thirty days unfulfilled at any monthly check.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every contest prize is recorded in the tracker and received by the winner within thirty days of the contest ending."
                cadence: rolling
              tasks:
                - "Set up a fulfilment tracker with winner, prize, dates and owner"
                - "Name the person who orders and delivers prizes"
                - "Chase any prize still unfulfilled after thirty days @recurring(monthly:12)"
                - "Ask each winner to confirm their prize arrived"
            - name: Post-contest results review
              description: |-
                ## Purpose
                A contest that ends with a winner announcement and no review teaches nothing for the next one. Comparing the result against the baseline, the cost against the extra margin and the weeks after the contest against normal weeks shows whether the contest moved the behaviour or just moved the timing.

                ## Milestones
                1. The contest result set against the pre-contest baseline.
                2. Total cost, including prizes, tax and admin time, compared with extra gross margin.
                3. The four weeks after the contest checked for a dip below normal.
                4. A one-page review with a keep, change or drop recommendation.

                ## Notes
                Start from the **Metrics log** template so results sit beside the baseline.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each finished contest has a one-page review comparing result to baseline and cost to extra margin, with a keep, change or drop call."
                cadence: rolling
              tasks:
                - "Compare the contest result with the baseline recorded before launch"
                - "Total the full cost including prizes, tax and admin hours"
                - "Check the four weeks after the contest for a drop below normal"
                - "Write the review for any contest that ended this month @recurring(monthly:28)"
            - name: Incentive spend tracked against budget
              description: |-
                ## Purpose
                Prizes, SPIFF payouts and tax costs land in different ledgers, so nobody sees the total until finance asks in month eleven. A monthly line comparing committed and paid incentive spend with the budget shows early when a quarter is overcommitted and leaves room to move money to a better contest.

                ## Milestones
                1. Every incentive cost line identified in the expense and payroll codes.
                2. A monthly tracker of committed versus paid spend against the quarterly budget.
                3. A rule for what happens when a quarter goes over its share.
                4. Six consecutive monthly updates shared with finance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Committed and paid incentive spend is compared with budget every month for six months, with any overspend handled by the agreed rule."
                cadence: rolling
              tasks:
                - "Find every expense and payroll code that incentive spend lands in"
                - "Set up a tracker for committed and paid spend against budget"
                - "Update incentive spend against budget and send it to finance @recurring(monthly:20)"
                - "Agree with finance what happens when a quarter overspends"
            - name: Clawback watch on SPIFF-paid deals
              description: |-
                ## Purpose
                A SPIFF paid on a deal that cancels in month two is money paid for nothing, and a pattern of them is a sign the incentive was gamed. Checking SPIFF-paid deals for cancellations, downgrades and unpaid invoices each month, under a clawback rule stated in the policy, keeps incentives honest without punishing genuine bad luck.

                ## Milestones
                1. A clawback rule for SPIFFs and prizes written into the policy and acknowledged by sellers.
                2. A monthly report of SPIFF-paid deals that cancelled, downgraded or went unpaid.
                3. Each case decided under the rule and the outcome recorded.
                4. Patterns by seller or contest shared with the sales leader each quarter.

                ## Notes
                Check any clawback wording with HR or employment counsel first: what can be recovered from pay differs between countries.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "SPIFF-paid deals are checked monthly for cancellations and non-payment, and every case is decided under the written clawback rule."
                cadence: rolling
              tasks:
                - "Draft a SPIFF clawback rule and check it with HR"
                - "Build a report of SPIFF-paid deals that cancelled or went unpaid"
                - "Review cancelled and unpaid SPIFF deals and record each decision @recurring(monthly:25)"
                - "Share repeat patterns by seller or contest with the sales leader"
            - name: Quarterly seller pulse on incentives
              description: |-
                ## Purpose
                Managers tend to judge contests by the leaderboard, while sellers judge them by whether they felt winnable and fair. A five-question pulse each quarter, anonymous and short, shows which formats people found motivating, which felt rigged towards the top two and which prizes nobody wanted.

                ## Milestones
                1. A five-question anonymous survey on fairness, winnability, prizes and timing.
                2. A response rate above sixty percent in the first round.
                3. Themes grouped and shared back to the team within two weeks.
                4. One change made to the next contest because of the feedback.

                ## Notes
                Start from the **Feedback themes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A quarterly anonymous pulse reaches at least sixty percent of sellers and leads to one recorded change in the next contest."
                cadence: cyclic
              tasks:
                - "Write five anonymous questions on fairness, winnability, prizes and timing"
                - "Send the incentive pulse to every eligible seller @recurring(quarterly)"
                - "Group the answers into themes and share them with the team"
                - "Pick one change for the next contest from the feedback"
            - name: How short incentives change seller behaviour
              description: |-
                ## Purpose
                Short incentives work through mechanisms that are well studied: people push harder as a goal comes into reach, fear losing ground more than they enjoy gaining it, and give up when a prize looks out of reach. Reading a handful of sources on goal gradients, tournament effects and crowding out turns contest design from guesswork into a set of choices you can explain to your team.

                ## Milestones
                1. Four sources read on motivation, goal setting and sales incentives.
                2. A one-page summary of five mechanisms with an example of each from your own team.
                3. Two past contests explained in terms of those mechanisms.
                4. Three design rules written down for future contests.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of five incentive mechanisms, each tied to a real team example, and three design rules are written."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick four sources on goal setting, motivation and sales incentives"
                - "Note five mechanisms that explain how short incentives work"
                - "Explain two past contests using those mechanisms"
                - "Write three design rules for future contests"
            - name: SPIFF, contest and kicker mechanics primer
              description: |-
                ## Purpose
                Terms like SPIFF, kicker, accelerator, threshold contest and stack rank get used loosely, and the confusion shows up as incentives that duplicate the commission plan. Learning what each mechanism does, what it costs and when it fits gives managers a shared vocabulary and makes request forms far easier to judge.

                ## Milestones
                1. A glossary of eight incentive mechanisms with a one-line definition each.
                2. Typical uses and failure modes listed for each mechanism.
                3. Three past incentives labelled with the correct mechanism.
                4. The glossary shared with every manager who can request a SPIFF.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary of eight incentive mechanisms with uses and failure modes is shared with every manager who can request a SPIFF."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the incentive terms your managers use in requests"
                - "Write a one-line definition and a typical use for each"
                - "Add the most common failure mode beside each mechanism"
                - "Share the glossary with every manager who can request a SPIFF"
            - name: Calculating the return on a SPIFF
              description: |-
                ## Purpose
                A SPIFF that pays a flat amount per unit on a thin-margin product can lose money on every sale it encourages. Learning to work out the incremental volume, the extra gross margin and the full cost, including deals that would have closed anyway, lets you say before launch whether a SPIFF can pay for itself.

                ## Milestones
                1. A written method for estimating incremental units, extra margin and full cost.
                2. A reusable sheet that calculates break-even uplift from those inputs.
                3. One past SPIFF run through the sheet with real numbers.
                4. A break-even field added to the SPIFF request form.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A reusable return sheet shows break-even uplift and has been applied to one past SPIFF using real figures."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write down how to estimate the deals that would have closed anyway"
                - "Build a sheet that calculates break-even uplift for a SPIFF"
                - "Run last quarter's SPIFF through the sheet with real figures"
                - "Add a break-even uplift field to the SPIFF request form"
            - name: Contest rules sheet that cannot be misread
              description: |-
                ## Purpose
                Most disputed contest results trace back to one ambiguous line: closed by Friday in whose time zone, booked or invoiced, net of discount or at list price. Practising a standard rules sheet, and testing each draft by asking two sellers to find loopholes, produces rules that survive the final week.

                ## Milestones
                1. A rules sheet layout covering goal, eligibility, metric, period, crediting, prizes, ties and disputes.
                2. Time zone, deal date and deal value definitions spelled out.
                3. A draft tested by two sellers asked to find loopholes.
                4. The layout used for two contests in a row without a dispute about meaning.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Two consecutive contests run on the standard rules sheet with no dispute about what the rules meant."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft a standard rules sheet layout with ties and disputes sections"
                - "Define deal date, deal value and time zone in one line each"
                - "Ask two sellers to find loopholes in the draft"
                - "Ask the agent to rewrite the rules sheet in plain language"
            - name: Choosing the right contest format
              description: |-
                ## Purpose
                Stack-ranked races for first place excite the top three and switch off everyone else, while a threshold contest where anyone who hits a target wins can lift the whole middle of the team. Comparing ranking, threshold, tiered, team and prize draw formats against your goal and team size helps you pick the one that moves the people you need to move.

                ## Milestones
                1. Five formats compared on who they motivate, cost predictability and gaming risk.
                2. A one-page decision guide matching formats to goals and team sizes.
                3. The guide checked against the results of two past contests.
                4. The guide attached to the SPIFF request form.

                ## Notes
                Prize draws can fall under lottery or gaming rules in some countries. Check before running one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page format guide compares five formats on motivation, cost and gaming risk and is attached to the SPIFF request form."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List ranking, threshold, tiered, team and prize draw formats"
                - "Score each format on who it motivates, cost and gaming risk"
                - "Check the guide against the outcome of two past contests"
                - "Attach the format guide to the SPIFF request form"
            - name: Running a team-versus-team competition
              description: |-
                ## Purpose
                Pitting pods or regions against each other builds peer pressure and shared effort, but it can also sour handoffs between teams that need to cooperate. Learning how to set balanced teams, pick a metric that rewards helping colleagues and keep the rivalry friendly gives you a format that works when individual contests have gone stale.

                ## Milestones
                1. Teams balanced on tenure, territory size and baseline performance.
                2. A per-head team metric chosen that counts shared effort, such as pipeline created.
                3. Rules in place that stop teams poaching leads or refusing handoffs.
                4. One team competition run and its effect on handoffs reviewed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One team competition runs with balanced teams and a per-head metric, and any handoff problems are reviewed afterwards."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Group sellers into teams balanced on tenure and baseline"
                - "Choose a per-head team metric that rewards helping colleagues"
                - "Add a rule banning lead poaching between teams"
                - "Ask other functions whether handoffs suffered during the contest"
            - name: Contest kickoff that sellers understand
              description: |-
                ## Purpose
                Sellers decide in the first two days whether a contest is worth their effort, usually based on whether they understood it and believed they could win. A ten-minute kickoff that explains the goal, shows the leaderboard, names the prizes and answers questions live does more than a week of follow-up emails.

                ## Milestones
                1. A ten-minute kickoff outline covering why, how to win, prizes and dates.
                2. The rules sheet and leaderboard live before the kickoff.
                3. A recorded version available for anyone absent.
                4. Every question from the kickoff answered in writing within a day.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The next contest opens with a ten-minute kickoff, a recording and written answers to every question within one day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a ten-minute kickoff outline covering why, how to win and prizes"
                - "Have the rules sheet and leaderboard live before the kickoff"
                - "Record the kickoff for anyone who missed it"
                - "Post written answers to every kickoff question within a day"
            - name: SPIFF or a change to the commission plan
              description: |-
                ## Purpose
                Some problems keep coming back: the new product never sells without a SPIFF, or multi-year deals only appear when there is a prize. When an incentive has run three times in a year, it usually means the commission plan is paying for the wrong thing. A short decision note sends those cases to the plan owner instead of renewing the SPIFF forever.

                ## Milestones
                1. Every incentive run more than twice in twelve months listed.
                2. For each, a note on whether the behaviour should be paid through the plan instead.
                3. A recommendation sent to whoever owns the commission plan.
                4. A recorded decision to keep the SPIFF, fold it into the plan or drop it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every incentive run more than twice in a year has a recorded decision to keep it, move it into the commission plan or drop it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every incentive that ran more than twice in the last year"
                - "Note for each whether the commission plan should pay for it instead"
                - "Send the recommendation to the commission plan owner"
                - "Record the decision for each recurring incentive"
            - name: Incentive platform or spreadsheet decision
              description: |-
                ## Purpose
                Small teams run contests perfectly well from a CRM report and a shared sheet, but once there are several teams, partner SPIFFs and a prize catalogue, a gamification or incentive platform can save hours. Comparing two or three options with the spreadsheet you already have, on cost, CRM connection and admin time, gives a clear yes or no.

                ## Milestones
                1. Admin hours per contest measured on the current set-up.
                2. Two or three platforms shortlisted against the same five criteria.
                3. A demo or trial of the top option using real CRM data.
                4. A recorded decision to buy, wait or stay with the spreadsheet.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A buy, wait or keep decision is recorded after comparing at least two platforms with the current spreadsheet on cost and admin time."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Log the admin hours the last contest took"
                - "Shortlist two or three incentive platforms against five criteria"
                - "Run a demo of the top option with real CRM data"
                - "Record the decision and the reason in the purchase decision page"
            - name: Contests the middle of the team can win
              description: |-
                ## Purpose
                When the same two sellers win every contest, the other eight stop trying by week two, and the business pays the top two for what they would have done anyway. Switching to personal-best targets, thresholds or most-improved prizes keeps the middle sixty percent in play, which is usually where most of the extra revenue sits.

                ## Milestones
                1. Winners of the last six contests listed to see how concentrated they were.
                2. A contest designed around improvement on each seller's own baseline.
                3. A prize structure under which at least a third of the team can realistically win something.
                4. Participation and improvement in the middle group compared with past contests.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A contest based on personal improvement runs with at least a third of the team winning a prize, and middle-group results are compared with past contests."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the winners of the last six contests"
                - "Set each seller's target as an improvement on their own baseline"
                - "Structure prizes so a third of the team can realistically win"
                - "Compare middle-group results with the previous contest"
            - name: Retiring standing SPIFFs that became salary
              description: |-
                ## Purpose
                Once a SPIFF has run every quarter for two years, it is no longer an incentive; sellers count on it as part of pay and resent its removal. Reviewing standing SPIFFs, giving proper notice and replacing the useful ones with something time-limited protects the budget and the meaning of the next short incentive.

                ## Milestones
                1. Standing SPIFFs that have run four or more periods in a row identified.
                2. An end date and notice period for each agreed with HR and finance.
                3. A message to sellers explaining the change and what replaces it.
                4. The retired SPIFFs removed from the live incentive table.

                ## Notes
                Check notice requirements with HR. Where a SPIFF has become a contractual expectation, removing it may need consultation.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every SPIFF that ran four or more periods in a row has an agreed end date, and the explanation has been sent to sellers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find SPIFFs that have run four or more periods in a row"
                - "Agree an end date and notice period with HR and finance"
                - "Write the message explaining the change to sellers"
                - "Check for SPIFFs drifting into permanent pay @recurring(yearly)"
            - name: Fixing the quarter-end pull-forward
              description: |-
                ## Purpose
                Quarter-end contests often look brilliant and are followed by a hollow first month, because deals were pulled in with discounts or held back to land inside the window. Measuring the dip after past contests and changing the rules, for example by also counting pipeline created or early-quarter bookings, removes the reason to shuffle dates.

                ## Milestones
                1. First-month bookings after the last four quarter-end contests compared with normal months.
                2. Discount levels on contest-period deals compared with the rest of the quarter.
                3. A rule change that rewards pipeline or early-quarter results as well.
                4. The next quarter's first month measured against the old pattern.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The post-contest dip and discount levels are measured for four past quarters, and a rule change is tested in the next quarter."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare first-month bookings after four past quarter-end contests"
                - "Check discount levels on deals closed inside contest windows"
                - "Change the rules to count early-quarter or pipeline results too"
                - "Measure next quarter's first month against the old pattern"
            - name: Recognition that costs nothing
              description: |-
                ## Purpose
                Plenty of sellers care more about being seen by people they respect than about a voucher. A weekly habit of specific public thanks, a monthly peer-nominated award and a note from a senior leader to the winner cost little and keep good behaviour visible between paid contests.

                ## Milestones
                1. A weekly slot for specific public thanks in the team channel.
                2. A monthly peer-nominated award with a short nomination form.
                3. A senior leader agreed to write a personal note to each monthly winner.
                4. Three months of weekly thanks and monthly awards completed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of weekly public thanks and monthly peer awards are completed, with each winner receiving a note from a senior leader."
                cadence: rolling
              tasks:
                - "Set up a short peer nomination form for a monthly award"
                - "Post specific thanks for one behaviour you want repeated @recurring(weekly:thu)"
                - "Ask a senior leader to write to each monthly winner"
            - name: Controlled pilot of a SPIFF
              description: |-
                ## Purpose
                Nobody knows how much of a contest result would have happened anyway unless something is held back for comparison. Running the SPIFF in one region or pod while a similar group carries on as normal, then comparing the two, gives the first honest number for what the incentive bought.

                ## Milestones
                1. Two comparable groups chosen and matched on baseline and segment.
                2. The SPIFF run in one group only, with both groups told openly about the pilot.
                3. Results compared across both groups for the period and the four weeks after.
                4. A written finding on true uplift and whether to roll it out.

                ## Notes
                Tell the comparison group openly that a pilot is running and when they will get access. Secret tests damage trust.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A SPIFF pilot with a matched comparison group ends with a written estimate of true uplift and a roll-out decision."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick two groups matched on baseline, segment and tenure"
                - "Explain the pilot openly to both groups before it starts"
                - "Compare both groups for the period and the four weeks after"
                - "Write up the uplift and the roll-out decision"
            - name: Quarter-end close sprint
              description: |-
                ## Purpose
                The last three weeks of a quarter are when a well-aimed contest can help finish deals that are genuinely ready, and when a badly aimed one rewards discounting. A short close sprint that only counts deals already in commit at its start, with a discount ceiling, focuses effort on finishing real work rather than inventing it.

                ## Milestones
                1. The list of deals in commit frozen on the sprint's first day.
                2. A rule that only those deals count, and only at or below the normal discount ceiling.
                3. Daily progress shared for the three weeks.
                4. Winners paid and a review comparing the next quarter's first month.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A three-week close sprint counts only deals in commit at its start and within the discount ceiling, and its review covers the next quarter's first month."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Freeze the list of commit deals on the sprint's first day"
                - "Set the discount ceiling that contest deals must respect"
                - "Share sprint progress at the end of each day"
                - "Review the next quarter's first month against the sprint"
            - name: New product launch SPIFF
              description: |-
                ## Purpose
                Sellers stick with what they already know how to sell, so a new product can sit unsold for a quarter even when it fits customers well. A launch SPIFF that pays for the first qualified opportunities and first closed deals, not just revenue, rewards people for learning the new pitch while the product team is still listening.

                ## Milestones
                1. The launch goal set as first opportunities and first deals, with a cost cap.
                2. Eligibility tied to completing the product training.
                3. The SPIFF running for a fixed six to eight weeks from launch day.
                4. Lessons from the first deals passed to product marketing.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A launch SPIFF runs for a fixed period with training as an entry condition, and lessons from the first deals reach product marketing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the launch goal in first opportunities and first deals"
                - "Make completing product training a condition of eligibility"
                - "Set a fixed end date six to eight weeks after launch"
                - "Send lessons from the first closed deals to product marketing"
            - name: Year-end push campaign
              description: |-
                ## Purpose
                The final quarter of the financial year carries the most pressure and the highest risk of deals being forced in at any price. A year-end push planned two months ahead, with a theme, a mix of individual and team prizes and a clear end on the last working day, adds energy while normal deal approvals keep terms in line.

                ## Milestones
                1. The campaign theme, goal and prizes agreed two months before year end.
                2. Individual and team prizes balanced so support roles share in the success.
                3. Confirmation from finance that contest deals still pass normal approval.
                4. A celebration and prize handover within two weeks of year end.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A year-end campaign is agreed two months ahead and closes with prizes handed over within two weeks of year end."
                cadence: cyclic
              tasks:
                - "Start planning the year-end push two months before year end @recurring(yearly)"
                - "Choose a theme and a mix of individual and team prizes"
                - "Confirm with finance that contest deals still need normal approval"
                - "Book the celebration for the first fortnight after year end"
            - name: Slow-season activity blitz
              description: |-
                ## Purpose
                Holiday months and the weeks after a big close often see activity drop sharply, and the pipeline gap shows up a quarter later. A two-week blitz rewarding calls, first meetings or pipeline created during the quiet spell keeps the next quarter fed at a time when closing contests would make no sense.

                ## Milestones
                1. The quiet period identified from last year's activity data.
                2. An activity or pipeline target set for two weeks, with quality rules for what counts.
                3. Small weekly prizes chosen to keep energy over the short window.
                4. Pipeline created during the blitz tracked to see how much converts.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two-week activity blitz runs during the quiet period with quality rules, and the pipeline it created is tracked for conversion."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the quietest weeks in last year's activity data"
                - "Set a two-week target with rules for what counts as a real meeting"
                - "Pick small prizes for each week of the blitz"
                - "Track how much blitz pipeline converts over the next quarter"
            - name: Prepaid and multi-year deal SPIFF
              description: |-
                ## Purpose
                When cash flow or retention matters this quarter, a SPIFF for annual prepayment or multi-year terms can shift contract shape without touching the price list. Running it for one quarter, with finance setting the value of each term and a cap on extra discount, shows whether customers will accept the terms and what they really cost.

                ## Milestones
                1. Finance's view of the value of prepayment and multi-year terms written down.
                2. A SPIFF paid per qualifying contract, capped and tied to a discount limit.
                3. The SPIFF run for one quarter with a fixed end date.
                4. Uptake and discount given compared with the previous quarter.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-quarter SPIFF for prepaid or multi-year terms ends with uptake and discount compared against the previous quarter."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask finance what prepayment and multi-year terms are worth"
                - "Set a per-contract SPIFF with a cap and a discount limit"
                - "Announce the SPIFF with a fixed end date one quarter away"
                - "Compare uptake and discount with the previous quarter"
            - name: Closing a contest and announcing winners
              description: |-
                ## Purpose
                The final day of a contest is where trust is won or lost: late deals, disputed credits and a winner announced before the data is checked. A closing routine with a data freeze, a forty-eight hour dispute window and an announcement that thanks everyone who moved makes results final and fair.

                ## Milestones
                1. A data freeze time announced a week before the end.
                2. A forty-eight hour dispute window held after the freeze.
                3. Results confirmed by someone outside the competing team.
                4. Winners announced with specific thanks, and prizes logged for fulfilment.

                ## Notes
                Start from the **Operational checklist** template so every contest closes the same way.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The next contest closes with a data freeze, a two-day dispute window and results checked by someone outside the team before announcement."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Announce the data freeze time a week before the contest ends"
                - "Open a forty-eight hour window for credit disputes"
                - "Ask sales operations to confirm the final results"
                - "Announce winners with specific thanks and log their prizes"
            - name: First contest as a new sales manager
              description: |-
                ## Purpose
                New managers often reach for a contest in their first month to build energy, before they know the team's baseline or what the previous manager promised. Waiting until you have six weeks of data, asking the team what has worked before and starting with a small, short, winnable contest avoids an expensive first impression.

                ## Milestones
                1. Previous contests and any open promises found out from the team and your predecessor.
                2. Six weeks of baseline data on the behaviour you want to move.
                3. A two-week contest run with a modest prize and simple rules.
                4. A short debrief held with the team on what to try next.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first two-week contest is run after six weeks of baseline data, and a team debrief records what to try next."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your predecessor and the team which contests have run before"
                - "Check for any prize or SPIFF that was promised and not paid"
                - "Collect six weeks of baseline on one behaviour"
                - "Run a short debrief with the team after the first contest"
            - name: Contests for a team of three to five sellers
              description: |-
                ## Purpose
                With three sellers, a ranking contest has one winner, one runner-up and one person who feels singled out, and a single large deal decides everything. Small teams do better with shared targets, personal-best goals and modest monthly challenges where everyone can win or the team wins together.

                ## Milestones
                1. A shared team target with a group reward such as a team meal or day out.
                2. A personal-best goal agreed with each seller instead of a ranking.
                3. A monthly challenge chosen by a different seller each time.
                4. Six months of challenges run with no seller shut out of every reward.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly challenges run for the small team with shared or personal-best rewards, and no seller is shut out of every reward."
                cadence: rolling
              tasks:
                - "Set a shared team target with a group reward"
                - "Agree a personal-best goal with each seller"
                - "Let a different seller choose the monthly challenge @recurring(monthly:15)"
            - name: Contests for remote and multi time zone teams
              description: |-
                ## Purpose
                Deadlines set in head office time end at lunch for one region and after midnight for another, and a leaderboard shown in a morning meeting that half the team never attends is invisible. Setting deadlines in each seller's local time, posting updates in writing and choosing prizes that can be delivered anywhere keeps a distributed team in the same race.

                ## Milestones
                1. Contest deadlines stated in each seller's local time.
                2. Leaderboard updates posted in writing at a time that suits every region.
                3. Prizes chosen that can be delivered or redeemed in every country involved.
                4. A check after the contest that no region felt disadvantaged.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A contest runs with local-time deadlines, written updates and prizes deliverable in every country, and each region confirms it felt fair."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every time zone and country your sellers work in"
                - "Write deadlines in each seller's local time"
                - "Choose prizes that can be delivered in every country"
                - "Ask one seller per region whether the contest felt fair"
            - name: Partner and channel SPIFFs
              description: |-
                ## Purpose
                Resellers and their sales staff juggle many vendors, and a well-timed SPIFF can move your product up their list. Partner SPIFFs need extra care: the partner's own rules on staff incentives, a claims process with proof of sale, and checks that paying another company's staff is allowed where the partner operates.

                ## Milestones
                1. Written consent from each partner company to incentives for its staff.
                2. A claims process requiring proof of a registered and closed deal.
                3. Local rules on paying another company's staff checked with legal.
                4. Claims reconciled monthly against registered deals.

                ## Notes
                Some partners forbid direct payments to their staff, and in some countries such payments raise bribery concerns. Agree the route in writing first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Partner SPIFFs run only with written partner consent and legal sign-off, and every claim is reconciled against a registered deal each month."
                cadence: rolling
              tasks:
                - "Ask each partner for written consent to incentives for their staff"
                - "Check with legal how paying partner staff is treated in each country"
                - "Set up a claims form that needs a registered deal number"
                - "Reconcile partner SPIFF claims against registered deals @recurring(monthly:5)"
            - name: Incentives for prospecting reps
              description: |-
                ## Purpose
                Rewarding meetings booked teaches prospecting reps to book anyone who will accept an invite, and the account executives pay for it in wasted calls. Contests for sales development reps work better when they count meetings held and accepted as qualified by the receiving seller, with a small bonus for meetings that turn into pipeline.

                ## Milestones
                1. A qualified meeting definition agreed with the account executives.
                2. Contest credit given only after the meeting is held and accepted.
                3. A bonus element for meetings that become a pipeline opportunity within thirty days.
                4. No-show and rejection rates compared with the previous contest.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A prospecting contest credits only held and accepted meetings, and its no-show and rejection rates are compared with the previous contest."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree a qualified meeting definition with the account executives"
                - "Credit meetings only once held and accepted by the receiving seller"
                - "Add a bonus for meetings that become pipeline within thirty days"
                - "Compare no-show and rejection rates with the last contest"
            - name: Taking part in a contest without hollowing your pipeline
              description: |-
                ## Purpose
                As a seller, it is tempting to drop everything outside the contest for six weeks and pay for it next quarter. Sorting which deals genuinely fit the contest, protecting a fixed share of each week for the rest of the pipeline and refusing to pull deals in with discounts means you can win without a hollow month afterwards.

                ## Milestones
                1. Your open deals sorted into those that fit the contest and those that do not.
                2. A fixed share of each week protected for non-contest pipeline work.
                3. No deal pulled into the contest window with an extra discount.
                4. Your pipeline coverage for next quarter checked at the contest's end.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "You finish the contest with next quarter's pipeline coverage at or above where it started and no deal pulled in with extra discount."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Sort your open deals into contest and non-contest lists"
                - "Block a fixed share of each week for non-contest pipeline"
                - "Check your next-quarter pipeline coverage at the contest's end"
                - "Note which contest deals you would have closed anyway"
            - name: Sharing contest rewards with supporting roles
              description: |-
                ## Purpose
                Deals that win contests often depend on a solutions engineer's demo or a customer success manager's renewal call, yet the prize goes only to the account executive. Deciding how supporting roles share in contest rewards, through team prizes or a nominated assist award, keeps their help coming when it matters most.

                ## Milestones
                1. The supporting roles on the last ten contest-credited deals listed.
                2. A sharing method chosen, such as team prizes or an assist award.
                3. The method agreed with the managers of those roles.
                4. The next contest's rules showing how supporting roles can win.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The next contest's rules show how sales engineers and customer success staff can win, agreed with their managers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List who supported the last ten contest-credited deals"
                - "Choose between team prizes and a nominated assist award"
                - "Agree the method with the managers of supporting roles"
                - "Write the sharing rule into the next contest's rules sheet"
            - name: Incentive programme lift analysis
              description: |-
                ## Purpose
                After a year of contests you have enough history to see which formats and prizes really moved behaviour and which only rewarded timing. Pulling every contest's baseline, result, cost and post-contest dip into one dataset, and comparing like with like, turns a pile of one-off reviews into evidence for next year's design.

                ## Milestones
                1. One dataset holding baseline, result, cost and dip for every contest of the year.
                2. Contests grouped by format, prize type and goal.
                3. Lift and cost per unit of lift compared across the groups.
                4. Three evidence-backed design rules for next year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dataset covering every contest of the year compares lift and cost by format and yields three design rules for next year."
                cadence: cyclic
              tasks:
                - "Gather baseline, result, cost and dip for every contest this year"
                - "Group contests by format, prize type and goal"
                - "Ask the agent to compare lift and cost per unit across the groups"
                - "Add the quarter's finished contests to the lift dataset @recurring(quarterly)"
            - name: Contest liability accrual with finance
              description: |-
                ## Purpose
                Prizes and SPIFFs earned in one month are often paid in the next, and a large year-end campaign can leave a liability that finance never booked. Agreeing how contest liabilities are estimated and reported each month keeps the books accurate and stops a surprise cost landing in the wrong period.

                ## Milestones
                1. The finance contact for incentive accruals named.
                2. A monthly estimate of prizes and SPIFFs earned but not yet paid.
                3. Non-cash prize costs included at their full delivered value.
                4. Six consecutive monthly estimates within an agreed tolerance of actual payouts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Finance receives a monthly estimate of earned but unpaid contest costs, and six months of estimates land within the agreed tolerance."
                cadence: rolling
              tasks:
                - "Ask finance who books incentive accruals and in what format"
                - "Estimate earned but unpaid prizes and SPIFFs for finance @recurring(monthly:3)"
                - "Include non-cash prizes at their full delivered cost"
                - "Compare last month's estimate with what was actually paid"
            - name: Anti-gaming controls built into every contest
              description: |-
                ## Purpose
                Experienced sellers find the weak point in any incentive within days: splitting orders, booking deals that cancel after payout, parking deals until the window opens. Designing controls up front, such as minimum deal sizes, a holding period before payout, a ban on deals created inside the window and a data flag for each, means gaming is prevented rather than argued about.

                ## Milestones
                1. Common gaming patterns from past contests listed with an example of each.
                2. A matching control for each pattern added to the standard rules sheet.
                3. CRM flags or reports that detect each pattern automatically.
                4. A holding period before payout for any incentive above a set value.

                ## Notes
                Start from the **Risk register** template to keep patterns, controls and owners in one place.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The standard rules sheet carries a control for every known gaming pattern, each backed by a CRM flag, with a holding period on larger payouts."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the gaming patterns seen in past contests with an example each"
                - "Write a control for each pattern into the standard rules sheet"
                - "Ask sales operations to build a CRM flag for each pattern"
                - "Set a holding period before payout on larger incentives"
            - name: Running contests across several countries
              description: |-
                ## Purpose
                Simple contests at home can break rules elsewhere: prize draws treated as lotteries, gifts above a threshold taxed differently, labour rules that require consultation on pay-related schemes. Checking each country's requirements with local HR, payroll and legal before launch keeps a global contest from turning into a compliance problem.

                ## Milestones
                1. Every country with eligible sellers listed.
                2. Local HR, payroll and legal contacts asked about prize, tax and consultation rules.
                3. A country rules table showing what is allowed, taxed or needs approval.
                4. The next global contest adjusted country by country before launch.

                ## Notes
                Organise the questions here and take the answers from local professionals; rules vary and change.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A country rules table, filled in from local HR, payroll and legal answers, is used to adjust the next global contest before launch."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every country where eligible sellers work"
                - "Ask local HR, payroll and legal about prize, tax and consultation rules"
                - "Build a country rules table from their answers"
                - "Adjust the next global contest country by country before launch"
            - name: Annual incentive programme report to leadership
              description: |-
                ## Purpose
                Leadership approves next year's incentive budget faster when it can see what this year's bought. A short yearly report covering spend, lift, gaming cases, seller feedback and the contests you would stop gives a clear case for next year and shows the programme is managed, not improvised.

                ## Milestones
                1. Spend for the year compared with budget.
                2. Lift, cost per unit of lift and gaming cases summarised for each major contest.
                3. Seller pulse themes from the year included.
                4. A recommendation for next year's budget, formats and contests to drop.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A yearly report covering spend, lift, gaming cases and seller feedback is presented to leadership with a recommendation for next year."
                cadence: cyclic
              tasks:
                - "Pull the year's incentive spend and compare it with budget"
                - "Summarise lift, cost and gaming cases for each major contest"
                - "Add the year's seller pulse themes to the report"
                - "Present the incentive programme report to leadership @recurring(yearly)"
---

# Sales Contests & SPIFFs

This area is for the sales managers who run short incentives and the sellers who take part in them. It starts with the foundations (a written policy, a budget agreed with finance, a baseline and one clear behaviour per contest), moves through the routines that keep contests fair, visible and paid, the skills of choosing formats and writing rules, then improvements and decisions, dated events such as a quarter-end sprint or a launch SPIFF, situations from a first-time manager to partner and remote teams, and ends with specialist work on lift analysis, gaming controls and contests across several countries.

What repeats is a weekly leaderboard refresh, team meeting update, credited deal check and thank-you post while contests run, monthly prize fulfilment, spend, clawback, accrual and results reviews, quarterly calendar planning and seller pulses, and a yearly budget, policy and prize tax check ending in a report to leadership. The Metrics log, Feedback themes, Reading queue, Purchase decision, Operational checklist and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
