---
id: fundraising-investors.option-pool-sizing
name: Option Pool Sizing
description: "A pool sized from your real hiring plan and grant bands, a reasoned answer when the lead investor names a percentage, and routines that warn you months before the reserve runs out."
category: business
version: 1.0.0
tags: [fundraising-investors, option-pool-sizing, founder, employee-options, equity-compensation, hiring-plan, dilution]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - board-meeting
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Option Pool Sizing
          description: "Sizing the employee option pool before a round so hiring plans are covered without giving away more dilution than needed."
          projects:
            - name: Current option pool position snapshot
              description: |-
                ## Purpose
                Before anyone argues about how big the pool should be, you need to know what the existing one holds: options granted, vested, exercised, cancelled and still unallocated. A one-page snapshot built from signed grant records, not from memory or an old spreadsheet, is the starting point for every pool conversation with your board and your next lead investor.

                ## Milestones
                1. The plan's total share reserve confirmed from the board and shareholder approvals that set it.
                2. Granted, exercised, cancelled and unallocated options counted from signed grant documents.
                3. Promised but ungranted equity, such as offer letters awaiting board approval, listed separately.
                4. A dated one-page snapshot shared with your co-founders.

                ## Notes
                Promised grants are the commonest gap. An offer letter that mentions options is a claim on the pool even before the board approves it.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page snapshot showing reserve, granted, exercised, cancelled, promised and unallocated options, reconciled to signed documents."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the board and shareholder approvals that set the plan's share reserve"
                - "Count granted, exercised and cancelled options from the signed grant documents"
                - "List every offer letter that promises options not yet approved by the board"
                - "Write the one-page pool snapshot and date it"
            - name: Equity plan share reserve and return rules
              description: |-
                ## Purpose
                Your equity incentive plan decides how many shares the pool holds, whether forfeited options go back into it, and what approvals an increase needs. Founders often sign the plan at incorporation and never read it again, then discover mid-round that a top-up needs a shareholder vote nobody had scheduled.

                ## Milestones
                1. The current plan document and every amendment located.
                2. The share reserve, return rules and increase approvals summarised in a short note.
                3. Any country-specific sub-plans or schedules identified.
                4. Questions about the plan sent to company counsel and answered in writing.

                ## Notes
                Your lawyer interprets the plan. This project is about knowing what it says and what to ask.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of the plan's reserve, return rules and increase approvals, checked by company counsel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Locate the signed equity incentive plan and every amendment to it"
                - "Note the share reserve and what happens to forfeited and expired options"
                - "Write down which board and shareholder approvals a reserve increase needs"
                - "Send your open questions about the plan to company counsel"
            - name: Eighteen-month hiring plan by role and start quarter
              description: |-
                ## Purpose
                The pool exists to pay for hires, so its size can only be as good as the hiring plan behind it. Investors usually expect the pool to cover hiring until the next round, often 18 to 24 months away, and a role-by-role plan with start quarters is what turns a percentage pulled from a blog post into a number you can defend.

                ## Milestones
                1. Every planned hire listed with role, level and expected start quarter for the next 18 months.
                2. The plan tied to the operating budget so headcount and salary cost agree.
                3. Each role marked as committed, likely or stretch.
                4. The plan agreed in writing by the co-founders and any finance lead.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A role-by-role hiring plan covering 18 months, with level, start quarter and confidence for each role, agreed by the founders."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every hire you expect in the next 18 months with role and level"
                - "Add a start quarter and a committed, likely or stretch label to each role"
                - "Check the headcount matches the salary lines in the operating budget"
                - "Update the hiring plan with offers made and roles dropped @recurring(monthly:24)"
            - name: Grant size bands by role and level
              description: |-
                ## Purpose
                Until you know roughly what each hire will receive, the pool cannot be sized. Grant bands, a range for each level from junior engineer to vice president, give every future offer a reference point and let you price the whole hiring plan in shares.

                ## Milestones
                1. Levels defined for the roles in the hiring plan.
                2. A grant range set for each level, shown as a value and as a share count at today's price.
                3. Bands sense-checked against at least one benchmark data source.
                4. Bands approved by the board or recorded as the founders' working policy.

                ## Notes
                Set bands as a value first and convert to shares at the current price. A share count fixed early can look very different after the next round reprices the company.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A table of grant ranges for every level in the hiring plan, each shown as a value and a share count, with the benchmark source noted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Define the levels the roles in your hiring plan will sit at"
                - "Draft a grant range for each level as a value and a share count"
                - "Compare the draft ranges with your chosen benchmark data"
                - "Record the bands as working policy or take them to the board"
            - name: Bottom-up pool requirement from the hiring plan
              description: |-
                ## Purpose
                Multiplying each planned hire by the midpoint of its grant band, then adding refresh grants and a buffer, gives the number of options you actually need. That figure, set against the unallocated balance in your snapshot, is the core of every pool discussion that follows, and it is often smaller than the round number investors open with.

                ## Milestones
                1. Each role in the hiring plan priced at the midpoint of its band.
                2. Refresh, promotion and advisor allowances added as separate lines.
                3. A buffer for unplanned hires chosen and stated as a figure.
                4. Total need compared with unallocated options to show the top-up required.
                5. The result expressed as a share count and as a percentage of post-round fully diluted capital.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A worksheet showing options needed by role, allowances and buffer, and the resulting top-up as shares and as a percentage post-round."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Price every planned hire at the midpoint of its grant band"
                - "Add separate lines for refresh grants, promotions and advisors"
                - "Choose a buffer for unplanned hires and write down why"
                - "Subtract the unallocated balance to get the top-up required"
            - name: Agreeing how long the pool should last
              description: |-
                ## Purpose
                Pools meant to last until the next round and pools meant to last three years are very different sizes. Agreeing the coverage period with your board, and writing it down, stops the size question being reopened at every board meeting and links the pool to the fundraising timetable.

                ## Milestones
                1. A proposed coverage period, tied to the expected timing of the next round.
                2. The proposal discussed with the board and any lead investor.
                3. The agreed period recorded in the board minutes.
                4. The coverage period written at the top of the pool worksheet.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A board minute recording how many months of hiring the pool is meant to cover, copied into the pool worksheet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-paragraph proposal for how many months the pool should cover"
                - "Put the coverage period on the next board agenda"
                - "Record the agreed period in the minutes and the pool worksheet"
                - "Reconfirm the coverage period at the first board meeting of the year @recurring(yearly)"
            - name: Pre-money and post-money pool worked example
              description: |-
                ## Purpose
                Whether the new pool is carved out before or after the investment changes who pays for it. When a term sheet asks for a 10 percent post-money pool created in the pre-money, existing shareholders absorb the whole top-up and the new investor none of it. Working one example by hand with your own numbers makes the difference stick.

                ## Milestones
                1. A simple cap table with founders, existing pool and a hypothetical investor set up.
                2. The same round calculated with the top-up in the pre-money and in the post-money.
                3. Founder ownership and price per share compared across the two cases.
                4. A short explanation of the difference written in your own words.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example showing founder ownership and price per share under a pre-money and a post-money top-up, with a written explanation."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a small cap table with founders, current pool and a new investor"
                - "Calculate the round with the pool top-up included in the pre-money"
                - "Recalculate with the top-up added after the investment"
                - "Write three sentences on who bears the top-up in each case"
            - name: Choosing a compensation benchmark source
              description: |-
                ## Purpose
                Grant bands built on anecdotes drift high or low depending on who you last spoke to. Compensation data products, investor-published surveys and peer founder groups each cover different stages, regions and roles, and choosing one deliberately gives your bands and your pool request a source you can cite.

                ## Milestones
                1. Three possible sources listed with their stage, region and role coverage.
                2. Cost and data freshness noted for each.
                3. One source chosen and access set up.
                4. The source and its data date recorded beside your grant bands.

                ## Notes
                Start from the **Purchase decision** template. Check the data covers companies at your stage and in the countries where you hire.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One benchmark source chosen from at least three compared, with access in place and the source recorded beside the grant bands."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List three compensation benchmark sources you could use"
                - "Check each one's stage, region and role coverage"
                - "Choose a source and set up access"
                - "Check the benchmark subscription and data date before renewal @recurring(yearly)"
            - name: Pool sizing brief for counsel and finance
              description: |-
                ## Purpose
                Pool work touches company counsel, whoever keeps the cap table and often a tax adviser. A short brief setting out your hiring plan, the top-up you need and the questions for each person saves paying three advisers to rediscover the same facts in the middle of a busy round.

                ## Milestones
                1. Each adviser's role in the pool decision listed.
                2. A two-page brief written with the snapshot, hiring plan summary and proposed top-up.
                3. Specific questions for counsel, the cap table owner and the tax adviser included.
                4. Written answers filed with the pool worksheet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A pool brief sent to counsel, the cap table owner and the tax adviser, with each one's written answers filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List who advises you on the plan, the cap table and equity tax"
                - "Ask the agent to draft a two-page pool brief from your snapshot and worksheet"
                - "Add specific questions for each adviser to the brief"
                - "File each adviser's written answers with the pool worksheet"
            - name: Monthly pool usage and runway log
              description: |-
                ## Purpose
                Once the pool is set, the useful question each month is how many options went out, how many came back and how many months of hiring the remainder covers. A short monthly log answers that in a few minutes and gives you months of warning before the pool runs dry in the middle of a key hire.

                ## Milestones
                1. A log with columns for opening balance, grants, returns, closing balance and months of coverage.
                2. Six months of history backfilled from grant records.
                3. Months of coverage worked out from the hiring plan each month.
                4. Twelve consecutive monthly entries recorded.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly log entries showing balance movements and months of coverage remaining."
                cadence: rolling
              tasks:
                - "Create a pool usage log from the metrics log template"
                - "Backfill six months of grants and returns from the grant records"
                - "Record the month's grants, returns and closing balance @recurring(monthly:8)"
                - "Work out how many months of planned hiring the balance covers"
            - name: Quarterly hiring plan and pool reconciliation
              description: |-
                ## Purpose
                Hiring plans change: roles get cut, levels go up, a senior hire arrives a year early. Checking each quarter that the pool still matches the current plan catches the drift while it is a small adjustment rather than an emergency top-up.

                ## Milestones
                1. Last quarter's actual hires compared with the plan, by role and level.
                2. Grant sizes actually given compared with the bands.
                3. The remaining pool need recalculated from the updated plan.
                4. Any gap larger than one quarter's hiring raised with the board.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reconciliations completed in a year, each recording hires and grants against plan and the updated pool need."
                cadence: rolling
              tasks:
                - "Compare last quarter's hires and grants with the plan and bands @recurring(quarterly)"
                - "Recalculate the remaining pool need from the updated hiring plan"
                - "Note every grant made above its band and the reason for it"
                - "Raise any shortfall bigger than one quarter's hiring with the board"
            - name: Returned options tracking
              description: |-
                ## Purpose
                Unvested options forfeited by leavers, and vested options not exercised before the window closes, usually return to the pool, but only if someone records them. Counting returns each month can add back a meaningful slice of the reserve and sometimes delays a top-up altogether.

                ## Milestones
                1. The plan's rules on forfeited and expired options confirmed.
                2. Every leaver from the last two years checked for options that returned.
                3. Exercise window end dates for current leavers listed.
                4. Returned options added to the pool balance in the monthly log.

                ## Notes
                Returns follow the plan rules and the cap table record, so confirm with whoever keeps the cap table before counting them.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every forfeited or expired option from the last two years is reflected in the pool balance, with monthly returns logged since."
                cadence: rolling
              tasks:
                - "Check how the plan treats forfeited and expired options"
                - "Review leavers from the last two years for options that should have returned"
                - "List the exercise window end date for each recent leaver"
                - "Add the month's forfeited and expired options back to the pool balance @recurring(monthly:19)"
            - name: Pre-offer pool availability check
              description: |-
                ## Purpose
                Offers go out fast in a hiring push, and it is easy to promise more options than the pool holds when several candidates are in play at once. A quick check before each offer, counting outstanding offers as well as signed grants, keeps you from making promises the board cannot approve.

                ## Milestones
                1. A written rule that no offer with equity goes out without a pool check.
                2. Outstanding offers tracked alongside the unallocated balance.
                3. A weekly look at the offers planned for the coming days.
                4. A full quarter with no offer exceeding the remaining balance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarter of hiring in which every equity offer was checked against the unallocated balance before it was sent."
                cadence: rolling
              tasks:
                - "Write the rule that every equity offer needs a pool check first"
                - "Add a column for outstanding offers next to the unallocated balance"
                - "Check the week's planned offers against the unallocated balance @recurring(weekly:mon)"
                - "Tell hiring managers who to ask before quoting options to a candidate"
            - name: Annual grant band refresh
              description: |-
                ## Purpose
                After a priced round the share price moves and the market for talent shifts, so last year's bands can be far too rich or far too thin. Refreshing them once a year, before the main hiring season, keeps offers competitive without silently draining the pool.

                ## Milestones
                1. Bands re-expressed in shares at the latest price per share.
                2. Benchmark data refreshed for each level.
                3. Proposed changes and their effect on pool need summarised.
                4. Updated bands approved and dated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Grant bands reviewed and dated within the last twelve months, with the effect on pool need recorded."
                cadence: cyclic
              tasks:
                - "Convert each band to shares at the latest price per share"
                - "Pull current benchmark ranges for every level"
                - "Work out how the new bands change total pool need"
                - "Refresh the grant bands before the main hiring season @recurring(yearly)"
            - name: Quarterly pool slide for the board
              description: |-
                ## Purpose
                Boards approve grants one at a time but rarely see the pool as a whole. A single slide each quarter showing balance, grants, returns and months of coverage lets directors spot a coming top-up early and makes the eventual request feel routine rather than sudden.

                ## Milestones
                1. A one-slide format agreed with the chair or lead investor director.
                2. The slide included in every board pack.
                3. Months of coverage and the top-up trigger shown on it.
                4. Four consecutive quarters reported.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pool slide appears in four consecutive quarterly board packs with balance, movements and months of coverage."
                cadence: rolling
              tasks:
                - "Draft a one-slide layout for pool balance, movements and coverage"
                - "Agree the layout with the chair or investor director"
                - "Add the updated pool slide to the board pack @recurring(quarterly)"
            - name: Annual pool health review
              description: |-
                ## Purpose
                Once a year it is worth standing back from the monthly numbers. How much of the pool went to the ten largest grants, are grants concentrated in one team, how much is vested but unexercised, and is the reserve still sized for the plan? A short review answers those questions and sets the agenda for the year.

                ## Milestones
                1. Grant concentration by person, team and level summarised.
                2. Vested, unvested and unexercised options shown separately.
                3. Pool size compared with the coverage period agreed with the board.
                4. Three actions agreed for the coming year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual review note covering concentration, vesting status and coverage, with three agreed actions, completed each year."
                cadence: cyclic
              tasks:
                - "Summarise grants by person, team and level for the past year"
                - "Split outstanding options into vested, unvested and unexercised"
                - "Hold the annual pool review with your co-founders @recurring(yearly)"
                - "Write three actions for the pool for the coming year"
            - name: Refresh grant budget for existing staff
              description: |-
                ## Purpose
                Early employees vest out of their first grant after a few years and, without a refresh, have little unvested equity left to keep them. Budgeting refresh grants as their own line in the pool means retention does not compete with new hiring for the same options.

                ## Milestones
                1. Staff reaching the late stage of their vesting in the next 24 months listed.
                2. A refresh policy drafted: who qualifies, typical size and timing.
                3. The refresh budget added to the pool need.
                4. Refresh grants approved in an annual cycle.

                ## Notes
                Vesting schedules vary. Four years with a one-year cliff is common, but check the terms of your own grants.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written refresh policy and budget line, with one annual refresh round approved by the board."
                cadence: cyclic
              tasks:
                - "List staff who will be mostly vested within 24 months"
                - "Draft a refresh policy covering eligibility, size and timing"
                - "Add the refresh budget as its own line in the pool worksheet"
                - "Run the annual refresh grant round with the board @recurring(yearly)"
            - name: Pool top-up trigger and early warning
              description: |-
                ## Purpose
                A top-up needs board and often shareholder approval, which takes weeks, so the warning has to come early. Setting a trigger, such as fewer than six months of planned hires left in the pool, and checking it each quarter gives you time to run the approvals without freezing offers.

                ## Milestones
                1. A trigger set in months of planned hiring and agreed with the board.
                2. The approval steps and their usual lead time listed.
                3. The trigger checked each quarter against the usage log.
                4. Any top-up started before the trigger is passed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A board-agreed trigger in months of hiring, checked every quarter, with any top-up started before the trigger was reached."
                cadence: rolling
              tasks:
                - "Choose a trigger in months of planned hiring and agree it with the board"
                - "List the approval steps for a top-up and how long each usually takes"
                - "Compare months of coverage left with the trigger @recurring(quarterly)"
            - name: How a term sheet pool clause works
              description: |-
                ## Purpose
                Lead investors usually ask for the pool to reach a target percentage of post-money capital, created before their money goes in. Learning to read that clause, and to see how much of the requested pool is new versus already unallocated, is the skill that turns a headline percentage into a number you can question.

                ## Milestones
                1. Pool clauses read in at least two published model term sheets.
                2. The parts of the clause identified: target size, measurement basis and timing.
                3. Your current unallocated options set against an example request.
                4. Questions to ask your lawyer about the clause written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A marked-up copy of a model pool clause showing target, basis and timing, with your own example top-up calculated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the pool clause in two published model term sheets"
                - "Mark the target size, the measurement basis and when the pool is created"
                - "Work out how much of an example request your unallocated pool already covers"
                - "Write the questions you would ask counsel about the clause"
            - name: Measurement basis for the pool percentage
              description: |-
                ## Purpose
                Fully diluted capital can include or exclude the unallocated pool, outstanding SAFEs, warrants and promised grants, and each choice moves the percentage the pool is measured against. Knowing which items your lawyers and investors count stops a 10 percent pool meaning two different share counts to two people at the table.

                ## Milestones
                1. The items that could appear in fully diluted capital listed.
                2. The definition in your current financing documents found and noted.
                3. Your pool expressed as a percentage under two different definitions.
                4. The basis to quote in pool discussions agreed with counsel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your pool percentage calculated under two definitions of fully diluted capital, with the agreed basis for discussions noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List what could be counted in fully diluted capital for your company"
                - "Find the definition used in your latest financing documents"
                - "Calculate the pool percentage under two different definitions"
                - "Agree with counsel which basis to quote in pool discussions"
            - name: Reading market pool size ranges critically
              description: |-
                ## Purpose
                Published surveys report typical pool sizes at seed and Series A, and investors quote them freely. Those figures mix companies with very different hiring plans, so learning what each survey measured, and when, keeps a market median from replacing your own bottom-up number.

                ## Milestones
                1. Two or three recent pool size surveys found.
                2. Each survey's sample, stage, region and measurement basis noted.
                3. Your bottom-up figure placed against the survey ranges.
                4. A sentence explaining any gap written for your board.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note comparing your bottom-up pool with at least two surveys, stating each survey's sample and basis."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find two or three recent surveys of pool size by stage"
                - "Note each survey's sample size, region and measurement basis"
                - "Place your bottom-up pool figure against the survey ranges"
                - "Check for an updated edition of each survey @recurring(yearly)"
            - name: Vesting, cliffs and returns to the pool
              description: |-
                ## Purpose
                How options vest decides how many come back when people leave and how long a grant keeps someone. Understanding cliffs, monthly vesting, acceleration and post-termination exercise windows lets you estimate returns realistically instead of assuming none.

                ## Milestones
                1. The vesting terms in your standard grant written in plain words.
                2. Expected yearly staff turnover estimated from your own history.
                3. Likely returns per year estimated from turnover and vesting.
                4. The estimate added as a separate line in the pool worksheet.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language summary of your vesting terms and a yearly returns estimate entered in the pool worksheet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your standard vesting terms in three plain sentences"
                - "Estimate yearly staff turnover from the last two years of leavers"
                - "Estimate how many unvested options a typical year returns"
                - "Add expected returns as a line in the pool worksheet"
            - name: Tax-favoured option scheme limits
              description: |-
                ## Purpose
                Tax-favoured employee option schemes in many countries carry limits, such as caps on the value granted per person or per company, that shape how the pool can be used. Learning which schemes apply in your home country, and their headline limits, comes before deciding how much of the pool can use them. Your tax adviser confirms what applies to you.

                ## Milestones
                1. The tax-favoured schemes available in your home country listed from official guidance.
                2. Headline per-person and per-company limits noted with the source and date.
                3. Questions on eligibility and limits sent to a tax adviser.
                4. The pool worksheet split by option type where limits apply.

                ## Notes
                Examples include incentive stock options in the United States and EMI options in the United Kingdom. Rules change, so check official guidance and your adviser before relying on any limit.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note of the schemes and headline limits that apply to your company, confirmed by a tax adviser, reflected in the pool worksheet."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the tax-favoured option schemes in your home country from official guidance"
                - "Note each scheme's headline limits with the source and date"
                - "Send eligibility and limit questions to a tax adviser"
                - "Split the pool worksheet by option type where limits apply"
            - name: Building a pool model in a spreadsheet
              description: |-
                ## Purpose
                Nobody on the board or on an investor's team can check a pool model that lives in one founder's head. A small spreadsheet with clear inputs (hiring plan, bands, price, returns, buffer), one calculation sheet and built-in checks lets anyone follow the number and change an assumption in seconds.

                ## Milestones
                1. Inputs separated from calculations on their own sheet.
                2. The bottom-up requirement and top-up calculated from those inputs.
                3. Check cells that flag when totals do not reconcile with the cap table.
                4. The model reviewed by someone who did not build it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pool model with a separate inputs sheet and reconciliation checks, reviewed by a second person with no unresolved errors."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set up an inputs sheet for hiring plan, bands, price, returns and buffer"
                - "Build the calculation that turns inputs into a top-up figure"
                - "Add check cells that compare totals with the cap table"
                - "Ask a finance-minded adviser to review the model"
            - name: Effective pre-money valuation after the pool
              description: |-
                ## Purpose
                Two offers with the same headline pre-money can be worth different amounts. One that includes a large new pool is worth less to existing shareholders than the same figure with the pool added afterwards. Calculating the effective pre-money, the headline less the value of the new pool, lets you compare term sheets with different pool requests on a like-for-like basis.

                ## Milestones
                1. The effective pre-money calculation written down and understood.
                2. The calculation run on one real or sample term sheet.
                3. Two offers with different pool sizes compared on effective pre-money.
                4. The method saved in the pool model for the next round.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two sample or real offers compared on effective pre-money valuation, with the method saved in the pool model."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down how to calculate effective pre-money valuation"
                - "Run the calculation on a sample term sheet"
                - "Compare two offers with different pool requests on the same basis"
                - "Save the method in your pool model for the next round"
            - name: Counter-proposal to the lead investor's pool request
              description: |-
                ## Purpose
                When a term sheet asks for a pool larger than your hiring plan needs, the strongest reply is the plan itself: roles, bands, timing and the resulting share count. A short written counter-proposal, reviewed by counsel, often moves the request closer to the real need and keeps the conversation on hires rather than percentages.

                ## Milestones
                1. The investor's requested pool converted into shares and a top-up figure.
                2. Your bottom-up number and the gap between the two set out.
                3. A one-page counter-proposal drafted with the hiring plan attached.
                4. The counter-proposal reviewed by counsel and sent.
                5. The agreed pool size recorded with the reasoning.

                ## Notes
                Keep the case grounded in hires. A pool smaller than the plan really needs simply comes back as a top-up before the next round.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written counter-proposal backed by the hiring plan sent to the lead investor, and the agreed pool size recorded with its reasoning."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Convert the requested pool percentage into shares and a top-up figure"
                - "Set your bottom-up number beside the request and note the gap"
                - "Ask the agent to draft a one-page counter-proposal from the hiring plan"
                - "Have counsel review the counter-proposal before it goes to the investor"
            - name: Top-up before or after the new money
              description: |-
                ## Purpose
                Whether the pool increase sits in the pre-money or the post-money is negotiable in some rounds and fixed by market habit in others, and it decides whether new investors share the dilution. Settling your position before the term sheet arrives, with the numbers for each case, means you are not working it out on a call.

                ## Milestones
                1. Founder dilution calculated for a pre-money and a post-money top-up using your real figures.
                2. The difference shown in shares and in percentage points.
                3. A preferred position and a fallback agreed between the founders.
                4. The position noted in the round preparation file.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded founder position on pre-money or post-money top-up, with a fallback and the dilution difference in shares."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Run your real round figures with the top-up before and after the new money"
                - "Show the ownership difference in shares and in percentage points"
                - "Agree a preferred position and a fallback with your co-founders"
                - "Note the position in the round preparation file"
            - name: Top-up now or at the next round
              description: |-
                ## Purpose
                If the pool is running low a year before the next raise, you can top it up now with a board and shareholder vote, or stretch it until the round and let the new pool clause cover it. Each path has a cost: dilution now that later investors will not share, or hires delayed and offers weakened. Comparing them explicitly avoids drifting into the worst of both.

                ## Milestones
                1. Months of coverage left and the expected round date set side by side.
                2. Hires at risk if the pool is not topped up listed.
                3. Dilution from a top-up now compared with one at the round.
                4. A decision recorded with the board.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board-minuted decision to top up now or wait, with coverage, hires at risk and dilution for both paths set out."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set months of coverage left beside the expected date of the next round"
                - "List the hires that would be delayed or weakened without a top-up"
                - "Compare founder dilution from a top-up now with one at the round"
                - "Take the recommendation to the board and minute the decision"
            - name: Advisor and non-executive grants within the pool
              description: |-
                ## Purpose
                Advisor and non-executive director grants come out of the same pool as employee grants and are easy to agree generously over coffee. A short policy on who qualifies, the usual range and vesting tied to real contribution stops these grants eating a hire's worth of options each.

                ## Milestones
                1. Current advisor and non-executive grants listed with size and vesting.
                2. A policy drafted for eligibility, size range and vesting.
                3. An allowance for future advisor grants added to the pool worksheet.
                4. Each advisor's contribution reviewed against their grant.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written advisor grant policy, an advisor allowance in the pool worksheet and a recorded contribution review for every advisor."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every advisor and non-executive grant with its size and vesting"
                - "Draft a short policy on advisor eligibility, grant range and vesting"
                - "Add an advisor allowance line to the pool worksheet"
                - "Review each advisor's contribution against their grant @recurring(quarterly)"
            - name: Separate reserve for one key senior hire
              description: |-
                ## Purpose
                A chief technology officer, a new chief executive or another pivotal hire can need a grant bigger than a year of normal hiring. Investors sometimes agree a specific increase for that one role rather than holding it in the general pool, and deciding the approach before the search starts sets both the pool request and the offer range.

                ## Milestones
                1. The pivotal role and its expected grant range identified from benchmark data.
                2. Options listed: hold it in the pool, earmark a reserve, or increase at hire.
                3. The dilution effect of each approach compared.
                4. The chosen approach agreed with the board before the search begins.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board-agreed approach for funding the key hire's grant, chosen from three compared options before the search began."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name the pivotal role and when you expect to hire for it"
                - "Estimate its grant range from benchmark data"
                - "Compare holding the grant in the pool with a separate increase at hire"
                - "Agree the approach with the board before the search starts"
            - name: Promotion grant policy and its pool cost
              description: |-
                ## Purpose
                Promotions are a common reason to grant more options, and without a rule each one becomes a negotiation that quietly drains the reserve. Setting the top-up rule for each level change, and budgeting it, makes promotion grants predictable for staff and for the pool.

                ## Milestones
                1. Promotions expected in the next year estimated by level.
                2. A rule for promotion grants set, such as the gap between the old and new band.
                3. The yearly cost added to the pool worksheet.
                4. The rule written into the grant guidelines.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A promotion grant rule written into the grant guidelines, with the expected yearly cost in the pool worksheet."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Estimate how many promotions you expect next year, by level"
                - "Set a rule for the size of a promotion grant"
                - "Add the yearly promotion cost to the pool worksheet"
                - "Check the promotion grant rule after the annual review cycle @recurring(yearly)"
            - name: Salary and equity mix for early hires
              description: |-
                ## Purpose
                Offering candidates a choice between more salary and more equity changes how quickly the pool is used. Deciding whether to offer a choice, and how the two trade against each other, sets expectations with candidates and lets you model pool use at different take-up rates.

                ## Milestones
                1. A decision on whether candidates may choose between salary and equity.
                2. If they may, two or three fixed packages per level defined.
                3. Pool use modelled at low and high equity take-up.
                4. The approach written into the grant guidelines.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on salary and equity choice, with pool use modelled at two take-up rates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide whether to offer candidates a salary and equity choice"
                - "Define two or three fixed packages per level if you offer one"
                - "Model pool use at low and high equity take-up"
                - "Write the approach into the grant guidelines"
            - name: Reducing an oversized unallocated reserve
              description: |-
                ## Purpose
                Some companies close a round with a pool far larger than they will use before the next raise, and the unused shares still count in every percentage. Whether a reduction is possible or worthwhile depends on the plan, the investors' rights and the round documents, so the work is getting the numbers and the right advice, then deciding.

                ## Milestones
                1. Unallocated options compared with need over the agreed coverage period.
                2. Any surplus expressed in shares and as a percentage.
                3. Counsel's view obtained on what a reduction would require.
                4. A decision to reduce, hold or revisit at the next round recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on any surplus reserve, supported by the surplus calculation and counsel's written view."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare unallocated options with need over the coverage period"
                - "Express any surplus in shares and as a percentage"
                - "Ask counsel what reducing the reserve would require"
                - "Record the decision to reduce, hold or revisit at the next round"
            - name: Pool sizing pack for the next priced round
              description: |-
                ## Purpose
                Investors will ask about the pool in the first serious meeting and again in diligence. A short pack with the snapshot, hiring plan, grant bands, bottom-up requirement and proposed top-up answers those questions once, in your framing, and shortens the term sheet discussion.

                ## Milestones
                1. The pool snapshot refreshed to the current month.
                2. The hiring plan and grant bands summarised on one page each.
                3. The bottom-up requirement and proposed top-up shown with the workings.
                4. The pack read by counsel and a trusted existing investor.
                5. The pack ready to share before the first term sheet arrives.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A pool pack of no more than five pages, reviewed by counsel and one existing investor, ready before the first term sheet."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Refresh the pool snapshot to the current month"
                - "Summarise the hiring plan and grant bands on one page each"
                - "Lay out the bottom-up requirement and proposed top-up with workings"
                - "Ask an existing investor to read the pack before it goes out"
            - name: Board approval of a share reserve increase
              description: |-
                ## Purpose
                An increase to the plan's share reserve normally needs a board resolution and often shareholder consent, with the wording, share count and effective date exactly right. Preparing the paper, resolution and supporting numbers ahead of the meeting stops the increase slipping to the next quarter.

                ## Milestones
                1. The required approvals and notice periods confirmed with counsel.
                2. A board paper written with the snapshot, need and proposed increase.
                3. Resolution wording drafted by counsel.
                4. The resolution passed and minuted.
                5. The new reserve recorded in the cap table and the usage log.

                ## Notes
                Start from the **Board meeting** template.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A minuted board resolution increasing the reserve, with the new figure entered in the cap table and the pool usage log."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Confirm with counsel which approvals and notice periods the increase needs"
                - "Write a board paper with the snapshot, need and proposed increase"
                - "Get the resolution wording from counsel and circulate it with the papers"
                - "Update the cap table and pool usage log once the resolution passes"
            - name: Shareholder consent for the pool increase
              description: |-
                ## Purpose
                Where the plan or the articles require shareholders to approve an increase, the consent can stall on one slow signatory or an investor who wants it tied to other changes. Planning the consent round, with the threshold, the list of signatories and a plain explanation, gets it through in days rather than weeks.

                ## Milestones
                1. The approval threshold and the holders needed to reach it confirmed.
                2. A short plain-language explanation of the increase written for shareholders.
                3. Consent documents sent through an e-signature tool.
                4. The threshold reached and the signed consent filed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Signed shareholder consent reaching the required threshold, filed with the board resolution."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the consent threshold and which holders are needed to reach it"
                - "Ask the agent to draft a plain-language explanation of the increase"
                - "Send the consent for signature and track who has signed"
                - "File the signed consent with the board resolution"
            - name: Post-closing pool true-up check
              description: |-
                ## Purpose
                Round documents sometimes set the pool by a formula, and the final share count can differ from the model after late changes to the investor list or SAFE conversions. Checking after completion that the reserve matches what was agreed avoids a pool that is quietly larger or smaller than the board believes.

                ## Milestones
                1. The agreed pool formula or share count found in the closing documents.
                2. The reserve recalculated from the final closing cap table.
                3. Any difference explained and corrected with counsel.
                4. The confirmed reserve entered as the opening balance in the usage log.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The post-closing reserve matches the agreed formula, or a correction is agreed with counsel, and the figure opens the usage log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the agreed pool size or formula in the closing documents"
                - "Recalculate the reserve from the final closing cap table"
                - "Raise any difference with counsel and agree the correction"
                - "Enter the confirmed reserve as the opening balance in the usage log"
            - name: First grants from the new pool after a round
              description: |-
                ## Purpose
                After a round there is often a queue of promised grants: people hired during the raise, refreshes held back and senior offers made on the strength of the new money. Approving them as one batch, at a current valuation and inside the bands, uses the new pool as planned and avoids grants trickling out over months.

                ## Milestones
                1. All promised and pending grants listed with size and band.
                2. A current share valuation confirmed for pricing where one is needed.
                3. The batch checked against the bands and the new pool balance.
                4. The batch approved by the board and recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every grant promised during the round approved in one board batch, each within its band and the new pool balance."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every grant promised or held back during the round"
                - "Check with your adviser that a current valuation is in place for pricing"
                - "Check each pending grant against its band and the new pool balance"
                - "Put the batch to the board for approval"
            - name: First option pool for a pre-seed company
              description: |-
                ## Purpose
                Founders at pre-seed often set a pool because a template said to, before any hire is planned. Sizing a small first pool against the first five or six hires, with room to grow at the seed round, keeps early dilution in line with what the company will actually use.

                ## Milestones
                1. The first five or six hires named by role and rough timing.
                2. Indicative grant ranges set for those roles.
                3. A first reserve sized from that list plus a modest buffer.
                4. The plan adopted and the reserve approved with counsel's help.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An adopted plan whose first reserve is sized from a named list of early hires, approved with counsel."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Name the first five or six hires you expect to make"
                - "Set an indicative grant range for each early role"
                - "Size the first reserve from that list plus a modest buffer"
                - "Ask counsel to adopt the plan and approve the reserve"
            - name: Introducing options in a bootstrapped company
              description: |-
                ## Purpose
                A profitable company with no outside investors may want an option pool to hire or keep senior people, with no lead investor setting a percentage. The owners decide the size alone, so a pool built from the people it is meant for, and a clear view of how each owner's stake changes, matters more than any market figure.

                ## Milestones
                1. The roles and people the pool is meant to reward listed.
                2. Grant ranges set and the total pool calculated.
                3. Each owner's ownership before and after the pool shown.
                4. An equity adviser briefed to set up the plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pool size agreed by all owners, built from named roles, with before and after ownership shown and an adviser engaged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the roles and people a pool would be for"
                - "Set grant ranges and calculate the total pool needed"
                - "Show each owner's stake before and after the pool"
                - "Brief an equity adviser on setting up the plan"
            - name: Pool for a team spread across several countries
              description: |-
                ## Purpose
                Hiring in several countries means different option rules, tax treatment and local paperwork, and sometimes a phantom or cash-settled alternative where options do not work. Sizing the pool by country, with the local route agreed for each, avoids promising standard options to someone who cannot sensibly hold them.

                ## Milestones
                1. Planned hires grouped by the country they will work from.
                2. The equity route for each country confirmed with an adviser.
                3. Pool need split by country and route, including any cash-settled alternatives.
                4. Country rules rechecked each year with the adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A pool worksheet split by country and equity route, with each route confirmed by an adviser within the last year."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Group planned hires by the country they will work from"
                - "Ask an adviser which equity route works in each country"
                - "Split the pool need by country and route"
                - "Recheck the country rules with your adviser @recurring(yearly)"
            - name: Pool sizing before hiring the leadership team
              description: |-
                ## Purpose
                Around the Series A many founders hire their first heads of sales, engineering and finance within a year, and those grants dwarf everything before them. Sizing the pool around that leadership layer, with a range for each role, prevents the new top-up being used up by three offers.

                ## Milestones
                1. The leadership roles planned for the next 12 to 18 months listed.
                2. Grant ranges for each set from benchmark data.
                3. The leadership share of the pool shown separately from other hires.
                4. The pool request for the round sized to include them.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pool worksheet with a separate leadership line covering every planned head-of role, included in the round's pool request."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the leadership roles planned for the next 12 to 18 months"
                - "Pull benchmark grant ranges for each leadership role"
                - "Show the leadership share of the pool separately in the worksheet"
                - "Check the round's pool request covers the leadership hires"
            - name: Pool pressure after a flat or down round
              description: |-
                ## Purpose
                When a round prices at or below the last one, existing options can sit above the new share price and staff may need fresh grants to stay, all drawn from the pool. Estimating that retention need before the round is agreed lets you ask for a pool that covers both new hires and the people you must keep.

                ## Milestones
                1. Outstanding options compared with the expected new price.
                2. Key staff whose grants have lost most value identified.
                3. A retention grant estimate added to the pool need.
                4. The combined request discussed with counsel before the term sheet is signed.

                ## Notes
                Repricing and option exchange programmes have tax and legal consequences, so take advice before offering one.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pool request that includes a costed retention line for named key staff, reviewed with counsel before signing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Compare each outstanding grant's exercise price with the expected new price"
                - "Identify key staff whose options have lost most of their value"
                - "Estimate a retention grant budget and add it to the pool need"
                - "Discuss the combined pool request with counsel before the term sheet"
            - name: Converting contractors to employees with equity
              description: |-
                ## Purpose
                Early teams often run on contractors promised equity later, and the conversion arrives in a rush when the round closes. Listing every promise, sizing grants against the bands and budgeting them in the pool keeps those people treated fairly and stops informal promises surprising the board.

                ## Milestones
                1. Every contractor equity promise listed, written or verbal.
                2. Each promise sized against the relevant band.
                3. The total added to the pool need.
                4. Conversion grants approved alongside the employment contracts.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every contractor equity promise listed, sized against a band and budgeted in the pool, with grants approved at conversion."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every equity promise made to contractors, written or verbal"
                - "Size each promise against the band for that role"
                - "Add the total to the pool worksheet as its own line"
                - "Approve the conversion grants with the new employment contracts"
            - name: Three-scenario pool model by hiring pace
              description: |-
                ## Purpose
                Hiring rarely follows the plan: a strong quarter speeds it up and a missed target slows it. Modelling the pool under a slow, planned and fast pace shows how many months each buys and when each would trigger a top-up, which gives the board a range rather than false precision.

                ## Milestones
                1. Slow, planned and fast hiring paces defined from the plan.
                2. The month the pool runs out calculated for each.
                3. The top-up needed at the next round shown for each.
                4. Scenarios rerun each quarter with actual hires.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-scenario model showing exhaustion month and next-round top-up for each pace, rerun for at least two quarters."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Define slow, planned and fast hiring paces from the hiring plan"
                - "Calculate the month the pool runs out under each pace"
                - "Show the top-up each scenario would need at the next round"
                - "Rerun the three scenarios with actual hires @recurring(quarterly)"
            - name: Equity for an acqui-hired team
              description: |-
                ## Purpose
                Buying a small company mainly for its people usually involves new grants for the incoming team, sized to keep them through integration. Those grants can take a large slice of the pool at once, so sizing them early, and deciding whether they come from the pool or a separate increase, belongs in the deal plan.

                ## Milestones
                1. The incoming people and their proposed roles and levels listed.
                2. Retention grant ranges set against the bands.
                3. The source agreed: the existing pool or a separate increase.
                4. Board approval planned alongside the acquisition timetable.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Retention grants for every incoming person sized against bands, with the funding source agreed by the board."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the incoming people with their proposed roles and levels"
                - "Set retention grant ranges for them against your bands"
                - "Decide with the board whether grants come from the pool or a new increase"
                - "Put the grant approvals on the acquisition timetable"
            - name: Evergreen reserve and pre-listing pool sizing
              description: |-
                ## Purpose
                Companies preparing to list often adopt a new plan, sometimes with an evergreen clause that adds shares to the reserve each year, subject to shareholder approval and institutional investor guidelines. Sizing that reserve for the years after listing is specialist work done with counsel and compensation advisers, and it starts well before the listing timetable is fixed.

                ## Milestones
                1. Post-listing hiring and retention needs estimated for three years.
                2. Evergreen and fixed-reserve approaches compared with advisers.
                3. Institutional investor and proxy adviser guidelines on plan size noted.
                4. A recommended reserve and mechanism taken to the board.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board paper recommending a post-listing reserve size and mechanism, with three years of need and investor guidelines set out."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Estimate post-listing hiring and retention grant needs for three years"
                - "Compare evergreen and fixed reserve approaches with your advisers"
                - "Note the investor and proxy adviser guidelines on plan size"
                - "Take a recommended reserve and mechanism to the board"
            - name: Retention reserve ahead of a company sale
              description: |-
                ## Purpose
                Buyers often want key people to stay through integration, and a sale process can run for most of a year, during which people may leave. Holding a modest, board-approved reserve for retention grants before the process starts lets you respond quickly when a key person wavers.

                ## Milestones
                1. Key people whose departure would affect the sale identified.
                2. A retention reserve sized and approved by the board.
                3. Rules for using it written: who decides, maximum size and vesting.
                4. Use of the reserve reported at each board meeting during the process.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A board-approved retention reserve with written usage rules, reported at every board meeting during the sale process."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the people whose departure would hurt a sale process"
                - "Size a retention reserve and take it to the board"
                - "Write the rules for who can draw on it and how much"
                - "Report use of the reserve at each board meeting during the process"
            - name: Peer pool benchmarking from public filings
              description: |-
                ## Purpose
                Listed companies, and some later-stage private ones, disclose plan sizes, overhang and annual burn rate in their filings. A small peer set built from those disclosures gives a specialist view of how comparable companies sized and refreshed their pools, beyond headline survey medians.

                ## Milestones
                1. Eight to twelve comparable companies chosen.
                2. Plan size, overhang and annual burn rate recorded for each.
                3. Your own overhang and burn rate calculated on the same basis.
                4. The comparison summarised in one page for the board.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page peer comparison of overhang and burn rate for at least eight companies, with your own figures on the same basis."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose eight to twelve comparable companies with public filings"
                - "Record plan size, overhang and yearly burn rate for each"
                - "Calculate your own overhang and burn rate the same way"
                - "Refresh the peer set when new annual filings appear @recurring(yearly)"
            - name: Pool forecast versus actual after each round
              description: |-
                ## Purpose
                Every pool is a forecast, and the next one is better if you check how the last one did. Comparing what you asked for, what you agreed and what you actually used by the next round shows whether your bands, hiring pace or buffer were off, and gives you evidence for the next negotiation.

                ## Milestones
                1. The pool agreed at the last round and the forecast behind it retrieved.
                2. Actual grants, returns and hires compared with the forecast.
                3. The biggest source of error named: pace, band size, buffer or returns.
                4. Lessons written into the pool model's assumptions.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A forecast versus actual note for the last round naming the largest source of error, with the model's assumptions updated."
                cadence: cyclic
              tasks:
                - "Retrieve the pool forecast and agreed size from the last round"
                - "Compare actual grants, returns and hires with that forecast"
                - "Name the biggest source of error and how large it was"
                - "Write the lessons into the pool model's assumptions"
---

# Option Pool Sizing

This area is for founders deciding how many options to set aside for people they have not hired yet, usually just before a priced round when the lead investor names a pool percentage. It starts with the foundations (an honest snapshot of the current pool, the plan's rules, a hiring plan, grant bands and a bottom-up requirement), then the routines that track usage, the skills behind the term sheet arithmetic, the decisions about where and when to top up, the approvals around a round, the situations that change the need, and finally specialist modelling for later stages.

What repeats is a monthly usage log and hiring plan update, a weekly pool check before offers go out, quarterly reconciliations, board slides and scenario reruns, and yearly reviews of bands, refresh grants and coverage. The Purchase decision, Metrics log and Board meeting templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
