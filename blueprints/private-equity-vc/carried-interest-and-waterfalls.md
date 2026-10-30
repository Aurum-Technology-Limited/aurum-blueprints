---
id: private-equity-vc.carried-interest-and-waterfalls
name: Carried Interest and Waterfalls
description: "Carried interest you can read, model and check: European and American waterfalls, hurdle and catch-up, clawback exposure, a personal carry ledger, team allocation and vesting, from a first award letter to a fund wind-up."
category: business
version: 1.0.0
tags: [private-equity-vc, carried-interest-and-waterfalls, knowledge-worker, founder, carried-interest, distribution-waterfall, clawback, hurdle-rate]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
    - reading-queue
    - remediation-plan
    - meeting-notes
    - savings-goal
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Carried Interest and Waterfalls
          description: "Understanding and modelling carry: European and American waterfalls, hurdle and catch-up, clawback, carry allocation across the team and vesting."
          projects:
            - name: One-page summary of your carry terms from the LPA
              description: |-
                ## Purpose
                Most carry holders have never read the distribution clause of the fund they work for, and rely on a headline of twenty percent over an eight percent hurdle that hides the details that move the cheque. Pulling the real terms out of the limited partnership agreement onto one page tells you which waterfall applies, how the hurdle compounds, how fast the catch-up runs and what clawback looks like.

                ## Milestones
                1. The distribution and clawback clauses of the LPA located and read in full.
                2. Carry rate, hurdle rate, compounding basis and catch-up percentage written on one page.
                3. Whether the waterfall is whole of fund or deal by deal recorded, with the clause reference.
                4. Clawback, escrow and tax distribution provisions summarised in plain words.
                5. Open questions about wording listed for fund counsel or the CFO.

                ## Notes
                Ask for the executed LPA and any amendments, not the marketing summary in the PPM. Side letters can change how fees and expenses enter the waterfall.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page carry terms summary exists with clause references for the waterfall, hurdle, catch-up and clawback, plus a list of open questions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the fund CFO for the executed LPA and every amendment"
                - "Find the distribution, clawback and tax distribution clauses"
                - "Write carry rate, hurdle, compounding and catch-up on one page"
                - "List the wording questions to raise with fund counsel"
            - name: European versus American waterfall side by side
              description: |-
                ## Purpose
                A European, whole of fund waterfall pays no carry until investors have their contributed capital and hurdle back across the whole fund, while an American, deal by deal waterfall can pay carry on the first winning exit. Working the same set of five deals through both structures shows, in numbers you produced yourself, why timing of carry differs by years and why clawback matters far more under the American model.

                ## Milestones
                1. A simple five-deal fund with entry dates, exit dates and proceeds laid out.
                2. The same deals run through a whole of fund waterfall, with carry by year.
                3. The deals run through a deal by deal waterfall, with carry by year.
                4. A short note on where and why the two answers diverge, including clawback risk.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worksheet shows the same five deals under both waterfall types with carry paid by year and a written note explaining the difference."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set up five illustrative deals with dates and proceeds in a spreadsheet"
                - "Run the deals through a whole of fund waterfall"
                - "Run the same deals through a deal by deal waterfall"
                - "Write a paragraph on when the American version pays carry early"
            - name: Hurdle rate and preferred return mechanics
              description: |-
                ## Purpose
                Two funds with the same eight percent hurdle can produce different carry because one compounds annually on contributed capital, another uses an IRR test, and a third counts fees and expenses as contributed. Getting the preferred return arithmetic right on paper is the base every later model and every check of an administrator's numbers rests on.

                ## Milestones
                1. The preferred return calculated by hand for one investor over four years of cash flows.
                2. The difference between simple, annually compounded and IRR-based hurdles shown in one table.
                3. The effect of including fees and expenses in contributed capital quantified.
                4. Your own fund's hurdle method matched to one of the cases, with the clause cited.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked table shows the preferred return under three conventions and identifies which one your fund's LPA uses."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate an eight percent compounded preferred return on one contribution"
                - "Repeat the calculation with an IRR test on irregular cash flows"
                - "Add management fees to contributed capital and note the change"
                - "Match your fund's wording to one of the three methods"
            - name: GP catch-up worked examples at full and partial rates
              description: |-
                ## Purpose
                Once the hurdle is met, the catch-up decides how quickly the GP reaches its full share of profits, and a 100 percent catch-up behaves very differently from an 80 percent one in the middle band of returns. Building the catch-up tier yourself, then sliding total proceeds up and down, shows where carry jumps and where it is flat, which is the zone people misread most.

                ## Milestones
                1. A four-tier waterfall built: return of capital, preferred return, catch-up and split.
                2. Carry plotted against total fund proceeds for a full catch-up.
                3. The same chart produced for a partial catch-up and for no catch-up.
                4. The proceeds range where the catch-up is active marked and explained in one paragraph.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three charts of carry against fund proceeds exist for full, partial and no catch-up, with the active catch-up band labelled."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build the four waterfall tiers in one sheet"
                - "Chart GP carry against total proceeds with a full catch-up"
                - "Change the catch-up to 80 percent and to none and chart both"
                - "Mark the proceeds band where the catch-up is doing the work"
            - name: Clawback and interim distribution provisions mapped
              description: |-
                ## Purpose
                Clawback is the promise to give carry back if later losses mean the GP was overpaid, and it is often measured after tax, capped, guaranteed by individuals or backed by an escrow. Knowing exactly what you personally might owe, when it is tested and whether tax already paid is credited is essential before you spend a single carry receipt.

                ## Milestones
                1. The clawback clause summarised: test date, measure, cap and whether it is net of tax.
                2. Any personal guarantee or several liability of carry holders identified.
                3. Escrow or holdback percentages and release conditions written down.
                4. Interim clawback tests, if any, listed with their trigger points.
                5. Questions about personal exposure sent to your own lawyer.

                ## Notes
                Clawback is a legal obligation; your reading is a summary, not a conclusion. Have your own counsel confirm what you could owe.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written clawback summary covers test date, cap, tax treatment, guarantees and escrow, and your lawyer has answered the open questions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the clawback and GP giveback clauses in the LPA"
                - "Note whether clawback is capped at after-tax carry received"
                - "Find any guarantee you signed in the carry partnership documents"
                - "Send your open questions on personal exposure to your own lawyer"
            - name: Your carry award letter and vesting schedule on one page
              description: |-
                ## Purpose
                Most carry awards are expressed as points or a percentage of the carry pool, vesting over four or five years, with good and bad leaver terms and sometimes an acceleration on a key event. Turning the award letter and the carry partnership agreement into a single page tells you what you hold today, what you would keep if you left next month and what conditions could cancel it.

                ## Milestones
                1. Your points or share of the carry pool, and the pool's share of total carry, written down.
                2. The vesting schedule laid out year by year with any cliff.
                3. Good leaver, bad leaver and forfeiture terms summarised.
                4. Your vested share as of today calculated and dated.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page summary states your carry points, pool share, vesting schedule, leaver terms and today's vested percentage."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your award letter and the carry partnership agreement"
                - "Convert your points into a share of the fund's total carry"
                - "Lay out the vesting schedule year by year"
                - "Calculate the share you would keep as a good leaver today"
            - name: Carry vehicle and GP entity structure diagram
              description: |-
                ## Purpose
                Carry rarely flows straight from the fund to you: it passes through a general partner, a carried interest partnership and sometimes feeder or parallel vehicles in more than one jurisdiction. A single diagram of who holds what, and where each distribution is calculated, helps you read statements, answer an adviser's questions and spot where tax or legal wording sits.

                ## Milestones
                1. Each entity between the fund and you named, with its jurisdiction.
                2. Arrows drawn showing where carry is calculated, where it is allocated and where it is paid.
                3. The documents governing each link listed beside the diagram.
                4. The diagram checked with the fund's finance team for accuracy.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A diagram from fund to individual carry holder exists, checked by the finance team, with the governing document listed for each link."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every entity named in the carry partnership agreement"
                - "Draw the chain from fund to carry partnership to you"
                - "Write the governing document beside each arrow"
                - "Ask the finance team to confirm the diagram is right"
            - name: Choosing a tax adviser who handles carried interest
              description: |-
                ## Purpose
                Tax rules for carry differ across countries and have changed repeatedly in several of them, so general personal tax advice is rarely enough. Picking an adviser with real carried interest clients, and sending them a short brief with your structure diagram, means the first receipt is planned rather than discovered on a tax return.

                ## Milestones
                1. Two or three advisers identified who act for fund professionals on carry.
                2. A short brief sent with your carry summary and structure diagram.
                3. One adviser engaged with a fee agreed in writing.
                4. Their list of questions and documents for your situation filed.

                ## Notes
                Ask the fund whether it already has a preferred adviser for carry holders, but make sure the adviser acts for you personally.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One adviser experienced in carried interest is engaged in writing and has received your carry summary and structure diagram."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask two senior colleagues which adviser they use for carry"
                - "Write a one-page brief with your carry terms and structure"
                - "Hold introductory calls with two or three advisers"
                - "Sign an engagement letter with the adviser you choose"
            - name: First distribution waterfall model in a spreadsheet
              description: |-
                ## Purpose
                Reading about waterfalls only goes so far; a working model that takes fund cash flows and produces distributions to LPs and the GP is what lets you test statements, offers and scenarios. A clean first model, built to your fund's terms with inputs, tiers and checks kept apart, becomes the tool every other project here uses.

                ## Milestones
                1. Inputs separated on their own sheet: commitments, calls, distributions, terms.
                2. The four waterfall tiers calculated with running balances by period.
                3. Check rows showing total distributed equals proceeds, to the cent.
                4. The model reproduces a published worked example within rounding.
                5. A short read-me describing each sheet saved in the file.

                ## Notes
                Keep any real investor data out of a personal copy. Model with illustrative or fund-level totals you are allowed to hold.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A waterfall spreadsheet with separate inputs, tiers and check rows reproduces a known worked example within rounding."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Lay out an inputs sheet for commitments, calls, proceeds and terms"
                - "Build the capital, hurdle, catch-up and split tiers by period"
                - "Add check rows that tie distributions back to proceeds"
                - "Ask the agent to draft a read-me describing each sheet"
            - name: Quarterly carry estimate from the latest NAV
              description: |-
                ## Purpose
                Every quarter the fund reports a NAV, and running it through the waterfall as if the portfolio sold at that value gives a hypothetical carry figure that moves with the portfolio. Recording that estimate each quarter shows whether carry is building, flat or slipping below the hurdle long before any exit, and keeps expectations grounded.

                ## Milestones
                1. The latest quarterly NAV and cash flows entered into the waterfall model.
                2. A hypothetical liquidation carry figure produced for the fund and for your share.
                3. The estimate logged beside previous quarters with a one-line reason for any change.
                4. Your estimate compared with any accrued carry figure in the fund accounts.

                ## Notes
                Start from the **Metrics log** template. A NAV-based figure is an estimate, not a promise; most carry is earned or lost on the last few exits.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A carry estimate is logged every quarter from the reported NAV, with a reason recorded for each change of more than ten percent."
                cadence: rolling
              tasks:
                - "Enter the latest NAV into the waterfall model"
                - "Log the hypothetical carry estimate and the reason it moved @recurring(quarterly)"
                - "Compare your figure with accrued carry in the fund accounts"
                - "Note which three holdings drive most of the change"
            - name: Distribution notice check against your waterfall
              description: |-
                ## Purpose
                Administrators make mistakes in waterfall calculations more often than people expect, usually on fee offsets, expense treatment or the hurdle period. Re-running every distribution notice through your own model within a week of receipt catches errors while the numbers are fresh and before carry has been paid out and spent.

                ## Milestones
                1. A checklist for each notice: proceeds, tier allocations, carry, holdbacks.
                2. Every notice in the current year re-run through your model.
                3. Differences above a set tolerance raised with the fund CFO in writing.
                4. A log of notices checked, differences found and how each was resolved.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every distribution notice is re-run through the model within a week, and every difference above tolerance has a recorded resolution."
                cadence: rolling
              tasks:
                - "Write a one-page checklist for reviewing a distribution notice"
                - "Check for new distribution notices and re-run any through the model @recurring(monthly:12)"
                - "Raise differences above tolerance with the fund CFO in writing"
                - "Log each notice with the outcome of the check"
            - name: Personal carry ledger across every fund
              description: |-
                ## Purpose
                By the time someone has worked across three or four funds they hold carry in different vehicles, at different vesting stages, with different holdbacks, and almost nobody keeps one view of it. A personal ledger listing points, vested share, estimated value, cash received, escrow held and tax set aside makes every career and family decision clearer.

                ## Milestones
                1. One row per fund with points, pool share, vesting and leaver terms.
                2. Cash received, amounts in escrow and tax reserved recorded per fund.
                3. Latest estimated value per fund taken from the quarterly estimate.
                4. Totals for vested value, unvested value and cash at risk of clawback.

                ## Notes
                Start from the **Metrics log** template. Keep it somewhere private; it is personal financial information.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ledger covers every fund you hold carry in, with vested, unvested, received, escrowed and reserved figures updated in the last month."
                cadence: rolling
              tasks:
                - "List every fund in which you hold or were promised carry"
                - "Update cash received, escrow and tax reserve for each fund @recurring(monthly:20)"
                - "Refresh estimated values from the quarterly carry estimate @recurring(quarterly)"
                - "Total vested, unvested and clawback-exposed value"
            - name: Clawback exposure tracker and escrow balance
              description: |-
                ## Purpose
                Under a deal by deal waterfall in particular, carry paid on early winners can become repayable if later deals lose money, and that exposure changes every time a valuation moves. Tracking the gap between carry received and carry that would be due at today's NAV, against escrow held, shows your real repayment risk each quarter.

                ## Milestones
                1. Carry received to date and carry due at current NAV compared for each fund.
                2. The shortfall, if any, set against escrow and any after-tax cap.
                3. Holdings whose write-down would trigger clawback named.
                4. A risk entry kept with the trigger level and your planned response.

                ## Notes
                Start from the **Risk register** template. Under a whole of fund waterfall with full return of capital, exposure is usually smaller but not zero.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter the tracker records carry received, carry due at NAV, escrow held and any shortfall, with trigger holdings named."
                cadence: rolling
              tasks:
                - "Compare carry received with carry due at current NAV"
                - "Review clawback exposure against escrow and the cap @recurring(quarterly)"
                - "Name the holdings whose write-down would create a shortfall"
                - "Record a trigger level and planned response in the risk register"
            - name: Carry plan vesting and leaver event log
              description: |-
                ## Purpose
                For the founder or partner running a carry plan, every hire, departure and promotion changes the pool, and unrecorded changes are how two people end up believing they own the same points. A monthly log of awards, vesting steps, leavers and forfeited points keeps the carry register correct and ready for the administrator and auditor.

                ## Milestones
                1. A carry register listing every holder, points, grant date and vesting schedule.
                2. Each leaver recorded with good or bad leaver status and points forfeited.
                3. Forfeited and unallocated points tracked as a separate reserve line.
                4. The register reconciled to 100 percent of the carry pool after each change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The carry register totals exactly 100 percent of the pool each month and every award, vesting step and leaver has a dated entry."
                cadence: rolling
              tasks:
                - "Set up the carry register with holders, points and grant dates"
                - "Record awards, vesting steps and leavers since last month @recurring(monthly:5)"
                - "Move forfeited points to the unallocated reserve line"
                - "Send the updated register to the fund administrator"
            - name: Annual carry statement reconciliation with the administrator
              description: |-
                ## Purpose
                Once a year the administrator issues capital account and carry statements that feed the audit and your tax return, and small errors there compound across years. Tying the year-end statement to your model and ledger, line by line, closes the year with numbers you trust and gives your tax adviser a clean set.

                ## Milestones
                1. Year-end carry and capital account statements received for every fund.
                2. Each statement tied to the waterfall model and the personal ledger.
                3. Differences explained or raised with the administrator.
                4. A reconciled pack sent to your tax adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every year-end carry statement is reconciled to the model and ledger, differences are resolved, and the pack is with your tax adviser."
                cadence: cyclic
              tasks:
                - "Request year-end carry statements for every fund"
                - "Reconcile each statement to the model and ledger @recurring(yearly)"
                - "Raise unexplained differences with the administrator"
                - "Send the reconciled pack to your tax adviser"
            - name: Waterfall model version control and change log
              description: |-
                ## Purpose
                A waterfall model that has been edited by four people over six years without a record of changes is impossible to defend when an LP or auditor asks how a number was produced. Keeping a dated change log, a locked prior version and a short list of tests run after each edit makes the model trustworthy rather than merely familiar.

                ## Milestones
                1. The current model saved as a dated, locked version.
                2. A change log listing every edit, who made it and why.
                3. Five standard test cases with known answers stored beside the model.
                4. The tests rerun and passing after each change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The model has a dated change log and five stored test cases that are rerun and pass after every edit."
                cadence: rolling
              tasks:
                - "Save today's model as a locked dated version"
                - "Start a change log sheet with date, author and reason"
                - "Store five test cases with their known answers"
                - "Review the change log and rerun the tests @recurring(monthly:27)"
            - name: Tax reserve for carry receipts
              description: |-
                ## Purpose
                Carry tends to arrive in large, irregular amounts, and the tax due on it can fall in a different year from the cash. Setting aside the amount your adviser estimates as soon as each receipt lands, in a separate account, avoids the classic problem of a big tax bill after the money has been spent or reinvested.

                ## Milestones
                1. A separate account opened for carry tax reserves.
                2. Your adviser's estimate of the reserve percentage for each fund recorded.
                3. Each receipt matched with a transfer into the reserve within a week.
                4. The reserve compared with the actual liability once each return is filed.

                ## Notes
                The percentage is for your tax adviser to estimate. Rules on carry differ by country and have changed often.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every carry receipt has a matching reserve transfer at the adviser's estimated rate, and the reserve is checked against each filed return."
                cadence: rolling
              tasks:
                - "Open a separate account for carry tax reserves"
                - "Ask your tax adviser for a reserve rate for each fund"
                - "Check new receipts have a matching reserve transfer @recurring(quarterly)"
                - "Compare the reserve with the actual tax once the return is filed"
            - name: Yearly carry pool allocation review
              description: |-
                ## Purpose
                Founders who set the carry split at first close and never look again find that the people doing the work in year four are not the ones holding the points. A yearly review of contribution, role changes and the unallocated reserve, agreed among the partners, keeps the split defensible and stops resentment building quietly.

                ## Milestones
                1. The current allocation set against each person's role and contribution.
                2. The unallocated reserve and any forfeited points totalled.
                3. Proposed changes agreed by the partners and minuted.
                4. New or revised award letters issued and the register updated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A minuted yearly allocation decision exists, with updated award letters issued and the register reconciled to 100 percent."
                cadence: cyclic
              tasks:
                - "List each carry holder's role and contribution this year"
                - "Hold the partners' carry allocation review @recurring(yearly)"
                - "Minute the agreed changes and reasons"
                - "Issue revised award letters and update the register"
            - name: Deal-by-deal waterfall with loss carryforward
              description: |-
                ## Purpose
                Pure deal by deal carry is rare now; most American waterfalls require the GP to make up prior realised losses, and sometimes write-downs, before taking carry on the next exit. Modelling loss carryforward correctly is the skill that separates a rough estimate from a number that matches the administrator.

                ## Milestones
                1. A deal by deal model with return of capital and fees on realised deals only.
                2. Realised losses carried forward and recovered before carry on later deals.
                3. An option to include unrealised write-downs in the test, switched on and off.
                4. Results compared with a whole of fund answer on the same data.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A deal by deal model handles realised losses and optional write-downs, and its answer is compared with a whole of fund run on the same data."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Extend the model to calculate carry deal by deal"
                - "Add a running balance of realised losses to recover"
                - "Add a switch to include unrealised write-downs"
                - "Compare the result with the whole of fund version"
            - name: Fee offsets and expenses inside the waterfall
              description: |-
                ## Purpose
                Whether management fees, organisational expenses and transaction fee offsets count as contributed capital, earning the hurdle, can shift carry by a meaningful amount over a fund's life. Working through how your fund treats each item, and modelling the difference, is where many disagreements with administrators and LPs actually start.

                ## Milestones
                1. Each fee and expense category listed with how the LPA treats it in the waterfall.
                2. Transaction and monitoring fee offsets traced to the management fee line.
                3. Carry computed with and without fees in contributed capital.
                4. A short note explaining the treatment for the next person who models it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note and model run show how fees, expenses and offsets enter your fund's waterfall and their effect on carry."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List fee and expense categories and the LPA treatment of each"
                - "Trace transaction fee offsets to the management fee line"
                - "Run the model with and without fees in contributed capital"
                - "Write a short note on the treatment for the model file"
            - name: Accrued carry in fund financial statements
              description: |-
                ## Purpose
                Fund accounts usually show accrued carried interest as if the portfolio were sold at reported value, and the figure on your capital account can swing sharply with a single valuation. Understanding how the auditor and administrator produce that accrual explains why it differs from your own estimate and why it is not cash.

                ## Milestones
                1. The accrued carry note in the latest fund accounts read and summarised.
                2. The method used, usually a hypothetical liquidation, identified.
                3. Your own quarterly estimate reconciled to the accrual for one period.
                4. Reasons for any remaining difference written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One reporting period's accrued carry is reconciled to your own estimate, with the method and any residual difference explained in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the accrued carried interest note in the fund accounts"
                - "Identify the method the accounts use for the accrual"
                - "Reconcile one quarter's accrual with your own estimate"
                - "Ask the agent to summarise the differences in plain language"
            - name: Reading list on fund waterfalls and carry
              description: |-
                ## Purpose
                The best explanations of waterfalls sit in LP association guidance, fund formation law firm notes and textbook chapters on private equity fund economics, not in social media threads. A short, curated queue read at one item a week builds an understanding of standard terms, market practice and the questions LPs ask.

                ## Milestones
                1. A queue of eight to twelve sources on waterfalls, hurdles and clawback.
                2. Industry guidance on distribution waterfalls read and summarised.
                3. At least two fund formation law firm notes on carry read.
                4. One page of takeaways that changed how you model or read terms.

                ## Notes
                Start from the **Reading queue** template. The ILPA principles and its waterfall templates are a sensible first item.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least eight sources on waterfalls and carry are read, each with a short summary, and a one-page takeaways note exists."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build a queue of eight to twelve sources on waterfalls and carry"
                - "Read one item from the queue and write three lines on it @recurring(weekly:fri)"
                - "Add ILPA guidance on distribution waterfalls to the top of the queue"
                - "Write one page of takeaways once the queue is finished"
            - name: Recycling and reinvestment effects on carry
              description: |-
                ## Purpose
                Recycling lets a fund reinvest early proceeds or reclaim fees, which raises invested capital but also changes what has been distributed and when carry starts. Modelling recycling limits from your LPA shows how they move both LP returns and the timing of carry, a point people often get backwards.

                ## Milestones
                1. The recycling clause summarised: limits, time window and what can be recycled.
                2. A scenario with recycled proceeds added to the model.
                3. Carry timing and amount compared with and without recycling.
                4. A note on how recycled distributions are treated as returned capital.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The model shows carry with and without recycling under your fund's limits, and a note records how recycled distributions are treated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the recycling limits in your LPA"
                - "Add a recycled proceeds scenario to the model"
                - "Compare carry timing with and without recycling"
                - "Note how recycled amounts count as returned capital"
            - name: Hurdle compounding and day-count conventions
              description: |-
                ## Purpose
                Small conventions, such as compounding annually versus daily, using actual over 365 days or measuring from the call date or the due date, produce differences that look like errors when two models are compared. Testing each convention on the same cash flows lets you explain a mismatch in minutes instead of days.

                ## Milestones
                1. One set of cash flows run with annual, quarterly and daily compounding.
                2. Actual over 365 and 30 over 360 day counts compared.
                3. The effect of call date versus due date measured.
                4. A table of differences kept beside the model for future reconciliations.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table shows the preferred return under three compounding bases, two day counts and two start-date choices on the same cash flows."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Run one investor's cash flows with three compounding bases"
                - "Compare actual over 365 with 30 over 360"
                - "Measure the effect of call date versus due date"
                - "Save the differences table beside the model"
            - name: Scenario stress tests for the waterfall
              description: |-
                ## Purpose
                Edge cases break waterfalls that work on the base case: a fund that returns exactly the hurdle, an early write-off, a late big winner, or a GP removal mid-life. Running a fixed set of stress scenarios shows where your model fails and where carry outcomes are most sensitive.

                ## Milestones
                1. Six named scenarios defined, including returns at exactly the hurdle and a total loss.
                2. Each scenario run with the check rows still balancing.
                3. Carry outcomes per scenario charted on one page.
                4. Model fixes made for any scenario that broke a check.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six stress scenarios run through the model with balancing checks, and their carry outcomes are charted on one page."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Define six stress scenarios including exactly-at-hurdle and total loss"
                - "Run each scenario and confirm the checks balance"
                - "Chart carry outcomes for all six on one page"
                - "Rerun the stress scenarios on the latest model version @recurring(quarterly)"
            - name: Whole-of-fund or deal-by-deal carry for a new fund
              description: |-
                ## Purpose
                Founders raising a first fund face a real choice: deal by deal carry pays the team sooner but most institutional LPs now expect a whole of fund structure, and some will not invest otherwise. Writing down the trade-offs, testing them in the model and taking counsel's and anchor LPs' views turns this into a decision you can explain in a pitch.

                ## Milestones
                1. Carry timing under both structures modelled for the fund's base plan.
                2. Views from fund counsel and at least two prospective LPs recorded.
                3. The effect on team cash flow in years three to six quantified.
                4. A decision memo with the chosen structure and reasons filed.

                ## Notes
                Market practice shifts and varies by strategy and LP base; take fund counsel's view on what your target investors will accept.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision memo records the chosen waterfall structure with modelled carry timing and the views of counsel and two prospective LPs."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Model carry timing for the fund plan under both structures"
                - "Ask fund counsel what target LPs typically accept"
                - "Record two prospective LPs' views on the structure"
                - "Write the decision memo with the chosen structure"
            - name: Carry split between partners and the wider team
              description: |-
                ## Purpose
                How much carry goes to founding partners, how much to the investment team and how much stays unallocated for future hires is one of the most consequential decisions a new manager makes. A written allocation framework, tested against hiring plans and agreed before first close, avoids renegotiating under pressure later.

                ## Milestones
                1. Principles for allocation written: seniority, origination, tenure and reserve.
                2. A draft split showing partner, team and unallocated shares.
                3. The split tested against the hiring plan for the next four years.
                4. The framework agreed and signed by all founding partners.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed allocation framework sets partner, team and reserve shares of carry and has been tested against a four-year hiring plan."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the principles the carry split should follow"
                - "Draft partner, team and reserve shares of the pool"
                - "Test the split against the four-year hiring plan"
                - "Get every founding partner to sign the framework"
            - name: Vesting schedule and leaver terms for the carry plan
              description: |-
                ## Purpose
                Vesting decides what someone who leaves in year two keeps, and badly drafted leaver terms are the most common source of disputes in small managers. Choosing a schedule, cliff, good and bad leaver definitions and what happens to forfeited points, with fund counsel drafting, sets fair expectations from day one.

                ## Milestones
                1. Vesting period, cliff and any back-loading chosen and written down.
                2. Good and bad leaver definitions drafted with counsel.
                3. Treatment of forfeited points, whether reallocated or returned to the reserve, agreed.
                4. Terms reflected in the carry partnership agreement and award letters.

                ## Notes
                This is the fund-level carry plan, separate from equity plans for portfolio company managers.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Vesting, cliff, leaver definitions and forfeiture treatment are agreed and drafted by counsel into the carry partnership agreement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the vesting period and any cliff"
                - "Draft good and bad leaver definitions for counsel to review"
                - "Decide where forfeited points go"
                - "Check the award letters match the agreed terms"
            - name: Carry escrow and holdback design
              description: |-
                ## Purpose
                An escrow or holdback of part of each carry distribution protects against clawback and reassures LPs, but holding back too much starves the team of cash for years. Comparing holdback percentages, release tests and interest treatment against the fund's likely exit pattern produces a level that is safe without being punitive.

                ## Milestones
                1. Three holdback designs described with percentage and release test.
                2. Each design run against a slow and a fast exit scenario.
                3. Cash to the team and clawback cover compared for each.
                4. The chosen design recorded with counsel's input.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three holdback designs are compared under two exit scenarios and the chosen one is recorded with counsel's input."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Describe three escrow designs with percentage and release test"
                - "Run each design against slow and fast exit scenarios"
                - "Compare team cash and clawback cover for each design"
                - "Record the chosen design and counsel's comments"
            - name: Independent rebuild of the waterfall model
              description: |-
                ## Purpose
                A model checked only by the person who built it carries that person's assumptions into every number. Asking a colleague or outside specialist to rebuild the waterfall from the LPA alone, then comparing the two answers, is the most reliable test before figures go to LPs, auditors or the team.

                ## Milestones
                1. A reviewer given the LPA and inputs, without your model.
                2. Their independent result produced for the same cash flows.
                3. Every difference between the two models explained.
                4. Corrections made and the rebuild comparison filed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An independent rebuild matches your model within a stated tolerance, with every difference explained and filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a reviewer who has not seen your model"
                - "Give them the LPA terms and the input cash flows"
                - "Compare their result with yours line by line"
                - "Repeat the independent rebuild after major term changes @recurring(yearly)"
            - name: Resolving a mismatch with the administrator's waterfall
              description: |-
                ## Purpose
                When your number and the administrator's differ, the temptation is to accept theirs, but a persistent gap usually points to a misread clause, a missed fee offset or a wrong date. A structured remediation, from isolating the difference to agreeing the fix in writing, settles it and stops it recurring.

                ## Milestones
                1. The difference isolated to a specific tier, investor or period.
                2. The cause traced to an input, a convention or a reading of the LPA.
                3. The correct treatment agreed in writing with the CFO and administrator.
                4. Both models updated and the next statement checked.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The mismatch is traced to a stated cause, the fix is agreed in writing, and the next statement matches within tolerance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Isolate the difference to a tier, investor or period"
                - "Trace the cause to an input, convention or clause"
                - "Agree the correct treatment in writing with the CFO"
                - "Check the next statement matches after the fix"
            - name: Comparing carry offers when changing firms
              description: |-
                ## Purpose
                Two points in a large fund with a slow deployment can be worth less than one point in a smaller fund that is already above its hurdle, and vesting and leaver terms decide how much you would ever see. Putting competing offers through the same waterfall and probability ranges replaces headline points with an expected value you can compare.

                ## Milestones
                1. Each offer's points, fund size, vintage, terms and vesting written in one table.
                2. Carry for each offer modelled at low, base and high fund outcomes.
                3. Unvested carry you would forfeit at your current firm quantified.
                4. A comparison note covering value, timing and leaver risk.

                ## Notes
                Fund outcomes are assumptions, not forecasts. Keep the comparison about structure and timing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison table models each carry offer at three outcomes, includes forfeited carry, and records your decision."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Put each offer's points, fund size and terms in one table"
                - "Model carry for each at low, base and high outcomes"
                - "Quantify the unvested carry you would leave behind"
                - "Write a comparison note on value, timing and leaver risk"
            - name: Preparing for your first carried interest distribution
              description: |-
                ## Purpose
                The first carry cheque often arrives years after joining and with little warning, alongside paperwork on escrow, tax distributions and clawback acknowledgements. Preparing ahead, with the expected amount checked, the reserve account ready and your adviser briefed, means the cash is handled calmly instead of in a rush.

                ## Milestones
                1. The expected distribution checked against your own model.
                2. Escrow and tax distribution portions identified in the notice.
                3. The tax reserve transfer and any personal plans set out in advance.
                4. The receipt logged in the personal ledger and acknowledged to the fund.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first distribution is received, checked against your model, the reserve transfer made within a week and the receipt logged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the CFO when the first carry distribution is expected"
                - "Check the expected amount against your model"
                - "Brief your tax adviser before the cash arrives"
                - "Log the receipt and the reserve transfer in your ledger"
            - name: Fund wind-up and final clawback true-up
              description: |-
                ## Purpose
                At the end of a fund's life the final waterfall is run, the clawback test applied and escrow released or used, and every carry holder learns the true outcome. Preparing the documents, checking the final calculation and knowing your own giveback position before the meeting avoids surprises that can arrive ten or twelve years after the fund started.

                ## Milestones
                1. The final waterfall calculation received and checked against your model.
                2. The clawback test result and any giveback amount confirmed.
                3. Escrow release or application agreed and documented.
                4. Your personal ledger closed for the fund with final figures.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The final waterfall and clawback test are checked, escrow is settled, and your ledger line for the fund is closed with final figures."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request the draft final waterfall from the fund CFO"
                - "Check the final calculation against your model"
                - "Confirm the clawback test and any giveback with your lawyer"
                - "Close the fund's line in your personal ledger"
            - name: Signing the carry plan at a new fund's first close
              description: |-
                ## Purpose
                Documents for a new fund's carry plan are often signed in a rush around first close, when partners are focused on LPs and the details of the plan get least attention. Running the carry plan as its own small event, with drafts circulated early and a signing checklist, makes sure every holder signs the right version.

                ## Milestones
                1. Draft carry partnership agreement and award letters circulated two weeks before close.
                2. Comments from each holder collected and resolved.
                3. A signing checklist completed for every holder.
                4. Signed documents filed and copies sent to the administrator.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every carry holder has signed the final carry documents by first close and the administrator holds copies."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set the date for carry drafts to go to holders"
                - "Collect and resolve comments from each holder"
                - "Run the signing checklist for every holder"
                - "Send signed copies to the fund administrator"
            - name: Annual carry conversation with your partners
              description: |-
                ## Purpose
                For carry holders, the yearly compensation discussion is where new points, vesting and promotion are decided, and people who arrive without facts tend to accept whatever is offered. Going in with your ledger, contributions and a clear ask, and recording what was said, makes the conversation specific and the outcome traceable.

                ## Milestones
                1. Your deals, origination and portfolio work for the year listed.
                2. Your current carry position summarised from the ledger.
                3. A specific ask written down before the meeting.
                4. Notes of the outcome and agreed next steps filed.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The annual carry discussion is held with a written ask beforehand and notes of the outcome filed afterwards."
                cadence: cyclic
              tasks:
                - "List this year's deals and portfolio contributions"
                - "Summarise your current carry position from the ledger"
                - "Prepare and hold the annual carry conversation @recurring(yearly)"
                - "File notes of the outcome and next steps"
            - name: Year-end audit of accrued carry
              description: |-
                ## Purpose
                Auditors test accrued carry each year, often asking how the waterfall was calculated, which terms applied and how leavers were treated. Having the model, change log, register and term summaries ready before fieldwork starts shortens the audit and avoids late adjustments to the accounts.

                ## Milestones
                1. An audit pack with the model, change log, register and terms summary assembled.
                2. Auditor questions from last year answered in advance.
                3. Accrued carry agreed with the auditor without late adjustment.
                4. Points raised logged for the following year.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The audit pack is delivered before fieldwork and accrued carry is agreed with the auditor without a late adjustment."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather the model, change log, register and terms summary"
                - "Answer last year's auditor questions in advance"
                - "Send the carry audit pack before fieldwork starts @recurring(yearly)"
                - "Log the points the auditor raised"
            - name: First carry allocation as a newly promoted VP
              description: |-
                ## Purpose
                Promotion to VP or principal is often the first time carry appears, together with documents, a capital contribution to the carry vehicle and terms nobody explains. Working through the award in the first months, with clear questions for the CFO and your own adviser, turns a line in a promotion letter into something you understand and can value.

                ## Milestones
                1. The award letter, carry partnership agreement and LPA terms collected.
                2. Points converted into a share of fund carry and an illustrative value.
                3. Any required contribution and its tax questions raised with your adviser.
                4. The award added to your personal ledger.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Within three months of promotion your award is summarised, valued illustratively, discussed with your adviser and logged in the ledger."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the CFO for every document behind your new award"
                - "Convert your points into a share of total fund carry"
                - "Raise any contribution and its tax questions with your adviser"
                - "Add the award to your personal carry ledger"
            - name: Leaving a firm with partly vested carry
              description: |-
                ## Purpose
                Carry is often the largest thing at stake when someone resigns, and the timing of the notice, the leaver category and any non-compete can decide whether years of carry are kept. Mapping your position before you resign, with your own lawyer reading the documents, protects what you have earned and keeps the exit clean.

                ## Milestones
                1. Vested and unvested carry in each fund calculated as of the planned leaving date.
                2. Good leaver conditions and any restrictive covenants summarised.
                3. Your lawyer's view on the leaver position received.
                4. A leaving date chosen with the carry effect understood.
                5. Written confirmation of retained carry received from the firm.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Before resigning you hold a lawyer-reviewed summary of vested carry by fund, and afterwards a written confirmation of what you keep."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Calculate vested and unvested carry at your planned leaving date"
                - "Summarise the leaver and restrictive covenant terms"
                - "Ask your own lawyer to review the leaver position"
                - "Get written confirmation of retained carry after you leave"
            - name: Setting up carry for a first-time fund
              description: |-
                ## Purpose
                Launching a first fund, a founder has to settle the carry vehicle, the waterfall, the team plan and the paperwork while also raising capital. Taking these in stages, with counsel and the administrator involved early, means the carry structure in the LPA and the internal plan match by first close.

                ## Milestones
                1. Waterfall terms chosen and reflected in the draft LPA.
                2. The carried interest partnership set up with counsel.
                3. The team allocation and vesting framework drafted.
                4. The administrator briefed on the waterfall and carry register.
                5. A test calculation run with the administrator before first close.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "By first close the LPA waterfall, carry partnership, team plan and administrator test calculation are all in place and consistent."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree the waterfall terms to go into the draft LPA"
                - "Instruct counsel to form the carried interest partnership"
                - "Brief the administrator on the waterfall and register"
                - "Run a test carry calculation with the administrator"
            - name: Carry in a venture fund with few big winners
              description: |-
                ## Purpose
                Venture carry usually depends on one or two companies returning the fund, arrives late in the fund's life and is highly sensitive to the timing of a single exit. Modelling carry paths that reflect a power-law outcome, rather than a smooth buyout curve, sets honest expectations for a venture team or founder.

                ## Milestones
                1. A portfolio of thirty illustrative companies with a skewed outcome spread.
                2. Carry modelled with and without the single largest winner.
                3. The year carry first arrives estimated under three exit timings.
                4. A note for the team on what drives carry in this fund.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A venture carry model shows outcomes with and without the top winner and first-carry year under three timings, with a team note."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set up thirty illustrative companies with skewed outcomes"
                - "Model carry with and without the largest winner"
                - "Estimate the first carry year under three exit timings"
                - "Review the venture carry path against latest marks @recurring(quarterly)"
            - name: Household plan around lumpy carry income
              description: |-
                ## Purpose
                Families who start treating expected carry as income can end up with a mortgage or school fees that depend on an exit nobody controls. Building the household budget on salary and bonus only, with carry directed to named goals when it actually arrives, keeps life steady whatever the portfolio does.

                ## Milestones
                1. A household budget that balances on salary and bonus alone.
                2. Two or three named goals agreed for carry if and when it arrives.
                3. A rule agreed with your partner on what share of each receipt goes to each goal.
                4. The first receipt directed by the rule and recorded.

                ## Notes
                Start from the **Savings goal** template. For investment choices, speak to a regulated financial planner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The household budget balances without carry, and a written rule directs each carry receipt to named goals."
                cadence: rolling
              tasks:
                - "Rebuild the household budget on salary and bonus only"
                - "Agree two or three goals for carry with your partner"
                - "Write the rule for splitting each receipt across the goals"
                - "Check the budget still balances without carry @recurring(monthly:3)"
            - name: Carry in estate and family arrangements
              description: |-
                ## Purpose
                Unvested and unrealised carry raises awkward questions in a will, a separation or a gift to children, because its value is uncertain and transfer is often restricted by the carry documents. Gathering the facts and taking them to an estate or family lawyer means decisions rest on what the documents actually allow.

                ## Milestones
                1. Transfer restrictions in the carry documents summarised.
                2. What happens to carry on death or incapacity found in the agreement.
                3. An illustrative value range prepared for your lawyer.
                4. Your lawyer's advice recorded and your will or arrangements updated if needed.

                ## Notes
                Keep this organisational. Any valuation or transfer must be agreed with your lawyer and the fund.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your lawyer has reviewed the carry documents' transfer and death provisions, and their advice is recorded with any changes made."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the transfer restrictions in the carry partnership agreement"
                - "Read the death and incapacity provisions"
                - "Prepare an illustrative value range for your lawyer"
                - "Record your lawyer's advice and any changes made"
            - name: Carry crystallisation in a continuation fund
              description: |-
                ## Purpose
                When assets move into a continuation vehicle, carry in the old fund may crystallise at the transfer price, roll into the new vehicle or be split between the two. Understanding the mechanics, the holder's choices and how conflicts are managed lets a carry holder read the election documents and ask the right questions.

                ## Milestones
                1. The carry treatment in the transaction documents summarised.
                2. Crystallised carry at the transfer price calculated in your model.
                3. The rollover option and the new vehicle's carry terms compared.
                4. Your election made with adviser input and recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Crystallised and rolled carry are compared in your model and your election is recorded with your adviser's input."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Summarise the carry treatment in the transaction documents"
                - "Calculate crystallised carry at the transfer price"
                - "Compare rolling over with the new vehicle's terms"
                - "Record your election and your adviser's comments"
            - name: Tiered carry and performance ratchets
              description: |-
                ## Purpose
                Some funds pay a higher carry rate above a second return threshold, for example a higher split once the fund passes a set multiple, which changes behaviour as well as payouts. Modelling tiered carry correctly, including where each tier is measured, prepares you to read such terms or propose them.

                ## Milestones
                1. A second carry tier added to the model with its own threshold.
                2. Whether the threshold is an IRR, a multiple or both clarified.
                3. Carry plotted against outcomes to show the step.
                4. A note on the incentive effects near the threshold.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The model handles a second carry tier with a defined threshold and a chart shows the step in carry against outcomes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add a second carry tier with its own threshold"
                - "Set the threshold as IRR, multiple or both"
                - "Chart carry against outcomes around the threshold"
                - "Note the incentive effects near the step"
            - name: Hybrid waterfall variants LPs propose
              description: |-
                ## Purpose
                Between pure European and pure American sit many hybrids: deal by deal with return of all realised capital and fees first, a fair value test before carry, or interim clawback reviews. Building two or three of these variants lets you assess an LP's proposed changes in numbers rather than in principle.

                ## Milestones
                1. Three hybrid variants described from published guidance or term sheets.
                2. Each variant implemented as a switch in the model.
                3. Carry timing and amount compared across variants on the same data.
                4. A summary of who each variant favours and when.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three hybrid waterfalls run as switches in the model, with a summary of carry timing and amount under each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Describe three hybrid waterfall variants"
                - "Implement each as a switch in the model"
                - "Compare carry timing and amount across the variants"
                - "Write a summary of who each variant favours"
            - name: Valuing a carry interest for transfer or buy-in
              description: |-
                ## Purpose
                Valuations of carry interests are sometimes needed for a buy-in by a new partner, a transfer, an accounting charge or a family arrangement, and the answer depends heavily on assumptions about timing and outcomes. Preparing the inputs and understanding the common approaches lets you work sensibly with the valuation professional who signs the number.

                ## Milestones
                1. The purpose of the valuation and the standard it must meet written down.
                2. Inputs gathered: terms, NAV, expected exits and vesting.
                3. Common approaches, such as scenario models, summarised.
                4. The valuer's report received and its key assumptions noted.

                ## Notes
                A carry valuation for tax or accounting must come from a qualified valuer; your work prepares the inputs.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A valuer has produced a carry valuation from your prepared inputs, and its key assumptions are recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down why the valuation is needed and the standard it must meet"
                - "Gather terms, NAV, expected exits and vesting inputs"
                - "Ask the agent to summarise common carry valuation approaches"
                - "Note the key assumptions in the valuer's report"
            - name: Parallel and multi-currency fund waterfalls
              description: |-
                ## Purpose
                Funds with parallel vehicles, feeders or investors in several currencies may run waterfalls separately or on an aggregated basis, and currency moves can push one vehicle over its hurdle while another lags. Modelling these cases shows why carry can differ between vehicles of the same fund and what the LPA says about aggregation.

                ## Milestones
                1. The aggregation clause for parallel vehicles summarised.
                2. Two vehicles modelled with different currencies and timings.
                3. Carry compared with and without aggregation.
                4. A note on how currency moves affect the hurdle in each vehicle.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two parallel vehicles are modelled in different currencies, and carry is compared with and without aggregation, with a written note."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Summarise the parallel vehicle aggregation clause"
                - "Model two vehicles with different currencies and timings"
                - "Compare carry with and without aggregation"
                - "Write a note on currency effects on each hurdle"
            - name: Waterfall engine in code with automated tests
              description: |-
                ## Purpose
                Spreadsheet waterfalls become fragile once there are many investors, vehicles and term variants. Writing the waterfall as a small code library, with tests built from known worked examples, gives a repeatable engine that can be checked against every administrator statement in seconds.

                ## Milestones
                1. A waterfall function written in Python or a similar language.
                2. Ten tests built from worked examples and past statements.
                3. Term variants handled as configuration rather than code edits.
                4. Results matching the spreadsheet model on three real periods.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A coded waterfall passes ten tests from known examples and matches the spreadsheet model on three periods."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write a waterfall function for the four standard tiers"
                - "Turn ten worked examples into automated tests"
                - "Move term variants into a configuration file"
                - "Run the engine against the latest administrator statement @recurring(monthly:23)"
            - name: House waterfall methodology note
              description: |-
                ## Purpose
                Experienced finance teams write down how they calculate carry: which clauses apply, which conventions they use, how leavers and recycling are handled, and how they reconcile with the administrator. A methodology note makes the calculation transferable to a new CFO, defensible to LPs and auditors, and consistent across funds.

                ## Milestones
                1. Each waterfall step described with the LPA clause it relies on.
                2. Conventions for compounding, day count and fee treatment stated.
                3. The reconciliation process with the administrator written down.
                4. The note reviewed by fund counsel and the CFO and adopted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A methodology note covering steps, conventions and reconciliation is reviewed by counsel and the CFO and formally adopted."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to draft an outline from your model and terms summary"
                - "Describe each step with its LPA clause"
                - "State the compounding, day count and fee conventions"
                - "Review and update the methodology note @recurring(yearly)"
---

# Carried Interest and Waterfalls

This area is for the deal professional who holds carry and wants to know what it is really worth, and for the founder who has to design, model and allocate it across a team. It starts with the foundations (your own carry terms, the two waterfall families, hurdle, catch-up and clawback, the vehicle structure and a first working model), then the routines that keep carry estimates, distribution checks and the personal ledger honest, the skills behind the harder mechanics, the design decisions on structure, splits and vesting, the dated moments from a first carry cheque to a fund wind-up, the situations people actually find themselves in, and ends with tiered carry, parallel funds, crystallisation and a house methodology.

What repeats is a quarterly carry estimate and clawback review, a monthly check of distribution notices and the personal ledger on varied days, a monthly vesting log for the carry plan, and a yearly reconciliation, allocation review and compensation conversation. The Metrics log, Risk register, Reading queue, Remediation plan, Meeting notes and Savings goal templates pair with the projects that name them. Tax and legal questions about carry always go to your own adviser and fund counsel; nothing here is tax, legal or investment advice. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
