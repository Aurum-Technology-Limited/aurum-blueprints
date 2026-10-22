---
id: wealth-investing.self-employed-retirement-saving
name: Self-Employed Retirement Saving
description: "A retirement system for the self-employed: the right plan for your profit, a written contribution rule that scales with uneven income, automatic sweeps from every payment and a yearly round of top-ups and tax relief."
category: personal
version: 1.0.0
tags: [wealth-investing, self-employed-retirement-saving, freelancer, small-business, variable-income, pension-contributions, sole-trader]
author: Aurum Technology
starter_structure:
  templates:
    - savings-goal
    - purchase-decision
    - metrics-log
    - vendor
    - compliance-control
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Self-Employed Retirement Saving
          description: "Building retirement savings without an employer scheme, with automatic contributions from variable self-employed income."
          projects:
            - name: Self-employed retirement savings snapshot
              description: |-
                ## Purpose
                Most people who leave employment carry fragments with them: an old workplace pot, a personal pension opened years ago, some savings and a state record with gaps. One page listing every retirement asset, its value and who holds it shows what you are building on before you set a contribution rule for the business. It takes an evening and makes every later decision in this area faster.

                ## Milestones
                1. Every pension, retirement account and long-term savings pot listed with provider, value and date.
                2. Your total retirement savings written as one figure with the date it was taken.
                3. Contributions made in the last twelve months, from any source, added up.
                4. The snapshot saved where you will find it at next year's review.

                ## Notes
                If you suspect an old pot is missing, trace it as a separate piece of work. This page records only what you can already see.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated one-page snapshot lists every retirement pot with provider and value, plus a single total and last year's contributions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every pension and retirement account you hold, with provider names"
                - "Log in or ring each provider for a current value"
                - "Add up what went into retirement savings over the last twelve months"
                - "Refresh the snapshot values before your annual review @recurring(yearly)"
            - name: Twelve months of income mapped for saving
              description: |-
                ## Purpose
                Contribution rules fail when they are built on an average month that never actually happens. Laying out the last twelve months of money received, with the lowest, the typical and the best month marked, shows what a realistic contribution looks like and how big the swings are. Start from bank statements if your bookkeeping is behind.

                ## Milestones
                1. Money received from clients or sales listed month by month for the last twelve months.
                2. Business costs and tax set aside subtracted to give a monthly figure you could actually spend or save.
                3. The lowest, middle and highest months marked.
                4. The gap between the lowest and middle month written as a figure, ready to size your buffer.

                ## Notes
                Use money received, not invoices sent. Late payers are part of the pattern you are planning around.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A twelve-month table of income after costs and tax exists, with the lowest, middle and highest months identified."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export twelve months of business bank statements"
                - "Total the money received in each month"
                - "Subtract each month's business costs and tax set-aside"
                - "Mark the lowest, middle and highest months in the table"
            - name: State scheme contributions check for self-employed years
              description: |-
                ## Purpose
                Self-employed people pay into the state pension or social security system differently from employees, usually through the annual tax return or a separate self-employed contribution, and low-profit years can leave gaps. Examples include National Insurance in the UK, self-employment tax in the US and NIS contributions in many Caribbean countries. Checking that your self-employed years are actually credited protects the one retirement income you cannot replace privately.

                ## Milestones
                1. Your state contribution record downloaded or requested from the official service.
                2. Each self-employed year checked as credited, with any gaps listed.
                3. The likely reason for each gap noted: low profit, late filing or missing registration.
                4. Gaps passed to your state pension planning or your accountant, with a date to resolve them.

                ## Notes
                Filling gaps and choosing when to claim belong to your state pension plans. This project only makes sure self-employment is being recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every self-employed year on your state contribution record is checked, with any gaps listed and passed on for action."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Request your state contribution record from the official online service"
                - "Mark each year you were self-employed on the record"
                - "List any self-employed year that shows as incomplete"
                - "Check the latest year has been credited after your return is filed @recurring(yearly)"
            - name: Three-account split for business, tax and retirement
              description: |-
                ## Purpose
                When client payments, the tax bill and retirement money share one account, the tax bill wins every time and the pension gets whatever is left, which is usually nothing. Separate accounts for running costs, tax and retirement contributions let you see at a glance what is genuinely yours to save. Most banks let you open extra pots or linked savings accounts free.

                ## Milestones
                1. A business account receiving all client payments.
                2. A separate pot holding the tax set-aside, named so it is not touched.
                3. A third pot named for retirement contributions waiting to be paid into the plan.
                4. Every account and pot listed with its purpose in your money notes.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three named accounts or pots exist for business running, tax and retirement, and client payments land only in the business account."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your bank offers free pots or linked savings accounts"
                - "Open a tax pot and a retirement pot beside the business account"
                - "Rename each pot so its purpose is obvious in the banking app"
                - "Update the payment details on your invoice template to the business account"
            - name: Starter buffer before steady contributions
              description: |-
                ## Purpose
                A contribution habit dies the first time a slow month forces you to stop it, so the self-employed need a cushion before they need a pension. Building a buffer of one to three lean months of personal spending, kept apart from the tax pot, means contributions can carry on through a quiet spell. It also stops you wanting to raid a pension that may be locked until your late fifties.

                ## Milestones
                1. A buffer target set from the gap between your lowest and typical months.
                2. A savings pot holding the buffer, separate from tax and retirement.
                3. Half the target reached, with contributions already running at a small rate.
                4. The full buffer in place and the contribution rate raised to your written rule.

                ## Notes
                Start from the **Savings goal** template. Do not wait for the full buffer before contributing anything: a small contribution keeps the habit alive while the buffer grows.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A separate buffer equal to at least one lean month of personal spending is in place, with contributions running alongside it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Work out the gap between your lowest and typical monthly income"
                - "Set a buffer target of one to three times that gap"
                - "Open or rename a pot used only for the buffer"
                - "Move a fixed share of each good month into the buffer until it is full"
            - name: Choosing a retirement plan built for the self-employed
              description: |-
                ## Purpose
                Without an employer scheme you pick the wrapper yourself, and the options differ a great deal in contribution room, admin and flexibility. Examples include a personal pension or SIPP in the UK, a SEP IRA or solo 401(k) in the US, an RRSP in Canada and approved personal retirement schemes in parts of the Caribbean. Comparing two or three on the same criteria, with your profit level in mind, avoids opening the wrong one and moving later.

                ## Milestones
                1. The plan types open to self-employed people in your country listed from the tax authority's guidance.
                2. Each type scored on contribution room at your profit level, charges, admin and whether future staff must be included.
                3. A shortlist of two providers for the preferred type.
                4. A decision recorded with the reason, and checked with your accountant if you have one.

                ## Notes
                Start from the **Purchase decision** template. A plan that must cover future employees can become expensive the day you hire, so note that rule for each option.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A plan type and provider are chosen against written criteria covering contribution room, charges, admin and staff rules, with the reason recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the tax authority's page on retirement plans for the self-employed"
                - "List each plan type with its contribution room and staff rules"
                - "Compare charges and admin for two providers of your preferred type"
                - "Record your choice and the main reason for it"
            - name: Contribution ceiling worked out from net profit
              description: |-
                ## Purpose
                Self-employed limits are usually calculated from net profit or net earnings from self-employment rather than turnover, and some plans apply a reduced percentage after deducting part of your own self-employment tax. Working the figure out once with last year's accounts tells you the real maximum, so you neither leave room unused nor overpay and face a correction. Ask your accountant or the provider's calculator to confirm it.

                ## Milestones
                1. Last year's net profit figure taken from your accounts or tax return.
                2. The calculation method for your plan type found in official guidance.
                3. This year's maximum contribution worked out and confirmed by an accountant or provider calculator.
                4. The figure written in your contribution ledger with the tax year it applies to.

                ## Notes
                If profit swings a lot, recalculate once this year's figures are clearer rather than relying on last year's.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "This year's maximum contribution is calculated from net profit, confirmed by an accountant or provider tool, and recorded in the ledger."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find last year's net profit on your accounts or tax return"
                - "Read the official calculation method for your plan type"
                - "Work out this year's maximum using the provider's calculator"
                - "Ask your accountant to confirm the figure"
            - name: Written contribution rule for variable income
              description: |-
                ## Purpose
                Fixed monthly amounts suit salaries; uneven income needs a rule that scales. A one-line rule such as a set percentage of every payment received, with a floor for lean months and a cap you will not exceed, removes the monthly decision and is the heart of saving automatically when income moves. Write it down so the rule, not your mood that week, decides.

                ## Milestones
                1. A percentage of each payment chosen for retirement, sized from your twelve-month income map.
                2. A monthly floor set that you will contribute even in a lean month.
                3. A cap set at your contribution ceiling.
                4. The rule written as one sentence and kept where you do your banking.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-sentence contribution rule with a percentage, a monthly floor and a ceiling is written down and dated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a starting percentage of each payment to save for retirement"
                - "Set a monthly floor you could manage in your lowest month"
                - "Write the percentage, floor and ceiling as a single sentence"
                - "Pin the rule inside your banking or bookkeeping app notes"
            - name: Opening the self-employed retirement account
              description: |-
                ## Purpose
                Once the plan type is chosen, the application is where people stall, usually over identity checks, a missing tax reference or a beneficiary form left for later. Doing it in one sitting with the documents to hand gets the account live and ready for the first transfer. Name your beneficiaries while you apply; it is the step most often skipped.

                ## Milestones
                1. Identity documents, tax reference and business details gathered before starting.
                2. The account opened and the welcome confirmation saved.
                3. A beneficiary nomination completed.
                4. The account linked to your retirement pot for transfers.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The chosen retirement account is open, linked to the retirement pot and has a beneficiary nomination on file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather your ID, tax reference and business registration details"
                - "Complete the provider's application in one sitting"
                - "Fill in the beneficiary nomination before closing the application"
                - "Link the account to your retirement pot for transfers"
            - name: First contribution and investment check
              description: |-
                ## Purpose
                Money paid into some self-employed plans sits in cash until you choose an investment, and plenty of savers discover years later that their pension never left the cash account. Checking that the first contribution arrived, was invested as you intended and, where relevant, received tax relief closes that gap at the start.

                ## Milestones
                1. The first contribution visible in the account with the date it arrived.
                2. The money shown as invested in your chosen fund rather than held as cash.
                3. Any tax relief added by the provider confirmed, where your country works that way.
                4. A note of how new contributions will be invested from now on.

                ## Notes
                If the provider lets you set a default investment for every new contribution, set it now.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The first contribution is confirmed as invested in the chosen fund, with any relief received and a default set for future money."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Make the first transfer from the retirement pot into the plan"
                - "Check the money has moved from cash into your chosen fund"
                - "Set a default investment for all future contributions if offered"
                - "Look for uninvested cash sitting in the plan @recurring(quarterly)"
            - name: Payment-day retirement sweep
              description: |-
                ## Purpose
                The most reliable way to save from uneven income is to move the retirement share at the moment money arrives, before it blends into the business balance. A short weekly session that sweeps your chosen percentage of every payment received that week into the retirement pot makes saving proportional to what you earned. A busy week means a bigger transfer and a quiet week a small one, but either way it happens.

                ## Milestones
                1. A weekly slot fixed for checking payments received.
                2. The percentage from your contribution rule applied to every payment that week.
                3. The transfer to the retirement pot made in the same session.
                4. Twelve consecutive weekly sweeps completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weeks in which the agreed percentage of every payment received was moved to the retirement pot."
                cadence: rolling
              tasks:
                - "Choose a fixed weekly time for the sweep"
                - "Sweep the agreed share of this week's payments into the retirement pot @recurring(weekly:fri)"
                - "Note each sweep amount in the contribution ledger"
            - name: Fixed monthly pay from a business holding account
              description: |-
                ## Purpose
                Paying yourself a steady monthly amount from a holding account, rather than spending whatever comes in, turns lumpy income into something close to a salary. Once your pay is steady, a fixed retirement contribution alongside it becomes as easy as an employee's. The holding account absorbs good and bad months, and your household sees the same figure each time.

                ## Milestones
                1. A monthly pay figure set below your typical month's income after costs and tax.
                2. The pay transferred on the same date each month.
                3. Surpluses left in the holding account rather than spent.
                4. Six months of identical pay transfers completed.

                ## Notes
                If the holding account falls below one month's pay, cut the pay figure before you touch the floor contribution.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months in which the same pay amount moved from the holding account on the same date."
                cadence: rolling
              tasks:
                - "Set a monthly pay figure below your typical month after costs and tax"
                - "Pay yourself the fixed monthly amount from the holding account @recurring(monthly:2)"
                - "Check the holding account balance still covers at least one month's pay"
            - name: Minimum monthly contribution floor
              description: |-
                ## Purpose
                Percentage rules work beautifully until a month with almost no income produces almost no saving. A small fixed direct debit straight into the plan, set at a level you could pay in your worst month, guarantees something goes in every month and keeps the account active. The percentage sweep then adds to it in good months.

                ## Milestones
                1. A floor amount chosen that your lowest month could cover.
                2. A direct debit or standing order set up from the retirement pot or business account.
                3. The collection checked each month for the first quarter.
                4. Twelve months with no missed collection.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fixed monthly contribution has been collected for twelve consecutive months with no missed payment."
                cadence: rolling
              tasks:
                - "Choose a floor amount your lowest month could still pay"
                - "Set up the monthly direct debit with the plan provider"
                - "Confirm this month's floor contribution was collected @recurring(monthly:8)"
            - name: Quarterly profit check and contribution top-up
              description: |-
                ## Purpose
                Every quarter is a natural point to compare what you have saved against what the business actually made, especially if you already pay estimated tax on a quarterly cycle. Looking at profit to date, contributions to date and the gap to your target percentage lets you top up in one transfer rather than finding a shortfall at year end. It also shows early whether this year's contributions will lower your tax bill.

                ## Milestones
                1. Profit to date taken from your bookkeeping each quarter.
                2. Contributions to date compared with your target percentage of that profit.
                3. A top-up transfer made if you are behind and the buffer allows it.
                4. Your next estimated tax figure updated for contributions made, with your accountant's help if needed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly checks are completed in a year, each recording profit to date, contributions to date and any top-up made."
                cadence: cyclic
              tasks:
                - "Pull profit to date from your bookkeeping software"
                - "Compare profit to date with contributions and top up any shortfall @recurring(quarterly)"
                - "Tell your accountant the year's contributions before the next estimated tax payment"
            - name: Good-month surplus rule
              description: |-
                ## Purpose
                Big months are where self-employed retirement savings are won or lost, because the extra money is so easy to absorb into spending. A rule that sends a share of anything above your typical month straight to the pension, once the buffer is full, captures the upside without making lean months harder. Decide the split now, while no windfall is tempting you.

                ## Milestones
                1. Your typical month figure taken from the income map.
                2. A split written for anything above it, for example half to retirement and half to buffer or spending.
                3. The rule applied at the end of every month that beats the typical figure.
                4. The extra contributions totalled at the annual review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written surplus split exists and has been applied to every above-typical month for six months, with the extra contributions totalled."
                cadence: rolling
              tasks:
                - "Write down your typical month figure from the income map"
                - "Decide how you will split income above that figure"
                - "Apply the surplus split if this month beat the typical figure @recurring(monthly:28)"
            - name: Lean-month pause and restart protocol
              description: |-
                ## Purpose
                Late payers, a lost client or illness will at some point make contributions impossible, and an unplanned stop often turns into a two-year gap. A written protocol saying what triggers a pause, what keeps running and the exact condition for restarting turns a bad patch into a short interruption. The floor contribution is usually the last thing to stop.

                ## Milestones
                1. The trigger for pausing written down, such as the buffer falling below one month.
                2. The order of cuts listed: surplus rule first, then percentage sweep, floor last.
                3. A restart condition written, such as two normal months or the buffer refilled.
                4. Any pause and restart dated in the contribution ledger.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A one-page pause protocol with a trigger, an order of cuts and a restart condition is written and stored with your contribution rule."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the condition that would trigger a contribution pause"
                - "List the order in which contributions would be cut"
                - "Write the condition that restarts full contributions"
                - "Store the protocol beside your contribution rule"
            - name: Contribution ledger by tax year
              description: |-
                ## Purpose
                Contributions arrive from several places, weekly sweeps, a floor debit and year-end top-ups, and providers report them in different formats. A single ledger with date, amount, source and tax year lets you prove contributions to the tax authority, stay under the ceiling and see your real saving rate.

                ## Milestones
                1. A ledger with columns for date, amount, source, tax year and relief.
                2. Every contribution since the account opened entered.
                3. A running total kept against this year's ceiling.
                4. The ledger matched to the provider's transactions once a month.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ledger records every contribution with date, source and tax year, and matches the provider's transactions each month."
                cadence: rolling
              tasks:
                - "Create a contribution ledger from the metrics log template"
                - "Enter every contribution made since the account opened"
                - "Match the ledger to the provider's latest transactions @recurring(monthly:20)"
            - name: Year-end contribution decision before the deadline
              description: |-
                ## Purpose
                Each country sets its own cut-off for counting a contribution against a tax year: the UK needs it paid within the tax year, while some US plans accept contributions up to the filing deadline. Fixing a date a month before your cut-off to decide the final top-up, using your best profit estimate, lets you use spare room without a last-week scramble.

                ## Milestones
                1. Your plan's contribution deadline for the tax year confirmed from official guidance.
                2. A decision date set a month before it.
                3. The year's profit estimate, contributions so far and remaining ceiling compared.
                4. A final top-up made, or a written decision not to make one.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A year-end decision is recorded before the contribution deadline, showing the profit estimate, contributions so far and top-up amount."
                cadence: cyclic
              tasks:
                - "Confirm the last date a contribution counts for this tax year"
                - "Set a decision date one month before that deadline @recurring(yearly)"
                - "Compare estimated profit, contributions made and remaining room"
                - "Make the final top-up or record why you are not"
            - name: Tax relief claim on your annual return
              description: |-
                ## Purpose
                Part of the tax benefit on self-employed contributions often has to be claimed on the annual return rather than arriving automatically, and the box is easy to miss. Making the contribution total a fixed line on your tax return checklist, with the provider's annual statement attached, means you collect the full relief or deduction every year.

                ## Milestones
                1. How relief works for your plan confirmed: at source, on the return, or both.
                2. The provider's annual contribution statement downloaded.
                3. The total entered in the right section of the return.
                4. The relief shown on the tax calculation checked against your ledger.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year's return includes the full contribution total, matched to the provider statement and the ledger, with the relief visible on the calculation."
                cadence: cyclic
              tasks:
                - "Find out whether your plan gives relief at source, on the return or both"
                - "Download the provider's annual contribution statement @recurring(yearly)"
                - "Add the contribution total to your tax return checklist"
                - "Check the relief on your tax calculation matches the ledger"
            - name: Annual contribution rate review
              description: |-
                ## Purpose
                Your contribution rule was set on last year's numbers, and a business that has grown, shrunk or changed shape needs a fresh one. Once a year, comparing the share of profit you actually saved with your target and adjusting the percentage, floor and ceiling keeps the plan matched to the business you now run.

                ## Milestones
                1. The year's total contributions divided by the year's net profit to give your actual saving rate.
                2. The actual rate compared with the rate in your written rule.
                3. A new percentage, floor and ceiling set for the coming year.
                4. The rule rewritten and dated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual review records the actual saving rate as a share of profit and a dated contribution rule for the year ahead."
                cadence: cyclic
              tasks:
                - "Divide the year's contributions by the year's net profit"
                - "Review the contribution percentage, floor and ceiling @recurring(yearly)"
                - "Rewrite and date the contribution rule"
            - name: How self-employed retirement contributions are taxed
              description: |-
                ## Purpose
                Contributions can reduce income tax, and in some countries other social contributions too, but the mechanics differ: relief added by the provider, a deduction on the return, or a deduction through a company. Understanding which applies to you explains why the same contribution costs different people different amounts, and when timing matters. Learn it from official guidance, then check your reading with an accountant.

                ## Milestones
                1. The relief or deduction method for your plan written in two sentences.
                2. Whether contributions reduce income tax only, or other contributions too, noted.
                3. How withdrawals are taxed in retirement noted, so the trade-off is clear.
                4. Your summary checked with an accountant or a tax authority helpline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written summary of how your contributions are relieved now and taxed later has been checked by an accountant or official helpline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the tax authority's guidance on pensions for the self-employed"
                - "Write two sentences on how your contributions get tax relief"
                - "Note how withdrawals from the plan are taxed in retirement"
                - "Ask an accountant whether your summary is right"
            - name: Reading your accounts for retirement planning
              description: |-
                ## Purpose
                Turnover, gross profit, net profit, drawings and taxable profit are different figures, and contribution limits, relief and affordability each hang on a different one. Learning to find each figure in your own accounts or tax return means you can answer the provider's questions, check your ceiling and set a rule without guessing. One sitting with last year's accounts is enough.

                ## Milestones
                1. Turnover, net profit and drawings found in last year's accounts.
                2. The figure your plan uses for its limit identified.
                3. The difference between drawings and profit understood using your own numbers.
                4. A crib note kept with the figures and where to find them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A crib note names your turnover, net profit and drawings from last year and which figure sets your contribution limit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open last year's accounts or tax return summary"
                - "Find turnover, net profit and drawings and write each one down"
                - "Mark which figure your plan uses to set the contribution limit"
                - "Ask the agent to explain any line in the accounts you do not follow"
            - name: Two hats in a one-person plan
              description: |-
                ## Purpose
                Some plans for the self-employed treat you as both employer and employee, with separate contribution types and separate limits for each role. The solo 401(k) in the US is a common example, and limited company directors elsewhere face a similar split between personal and company contributions. Knowing which hat each contribution wears decides how much you can put in and how it is relieved.

                ## Milestones
                1. Whether your plan or business structure has separate employer and employee contributions confirmed.
                2. The limit and tax treatment of each type noted.
                3. Each existing contribution in your ledger tagged with its type.
                4. Any question about the split answered by the provider or your accountant.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each contribution type available to you is written down with its limit and tax treatment, and the ledger tags every contribution by type."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your plan allows employer and employee contributions"
                - "Note the limit and tax treatment of each contribution type"
                - "Add a contribution type column to your ledger"
                - "Ask the provider how to label each contribution when you pay it"
            - name: Why the business is not your pension
              description: |-
                ## Purpose
                Many owners plan to retire on the sale of the business, yet small businesses often sell for less than hoped or not at all, especially when the owner is the business. Understanding how firms like yours are valued, and how much of the value walks out with you, makes a separate retirement pot look far less optional. Treat any future sale as a bonus on top of the plan, not the plan.

                ## Milestones
                1. How businesses like yours are usually valued noted from a broker's or accountant's guide.
                2. How much the business depends on you personally assessed honestly.
                3. A cautious sale value range written with its assumptions.
                4. A decision recorded on how much of retirement the pension must fund on its own.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note gives a cautious sale value range with assumptions, and records how much retirement income must come from the pension instead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a broker's or accountant's guide to valuing small businesses"
                - "List what in the business would leave if you left"
                - "Write a cautious sale value range with your assumptions"
                - "Decide what share of retirement the pension must cover on its own"
            - name: Contribution deadlines and payment timing
              description: |-
                ## Purpose
                A contribution that arrives a day after the cut-off can count for the wrong year, and some plans need you to say which year a payment is for when you make it. Learning the timing rules, including how long a transfer takes to clear and how the provider dates contributions, prevents expensive mix-ups at year end.

                ## Milestones
                1. The tax year cut-off and any grace period for your plan written down.
                2. Whether you must designate the tax year when paying confirmed.
                3. The provider's processing time for transfers noted.
                4. A latest safe payment date worked out for this year.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The cut-off, designation rule, processing time and a latest safe payment date for this tax year are written in your ledger notes."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up the contribution cut-off for your plan's tax year"
                - "Ask the provider whether you must say which year a payment is for"
                - "Note how many working days the provider takes to apply a transfer"
                - "Write this year's latest safe payment date in the ledger"
            - name: What each contribution really costs after tax
              description: |-
                ## Purpose
                Tax relief means a contribution costs less than its face value, and seeing the real figure on your own numbers is often what persuades people to save more. Working through one example with your marginal rate, and any effect on other contributions, gives you a ratio to use every time you decide a top-up.

                ## Milestones
                1. Your marginal income tax rate for this year identified.
                2. One example contribution worked through to its after-relief cost.
                3. Any effect on other contributions or benefits noted.
                4. A simple ratio written down: every 100 put into the plan costs you this much.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example on your own figures shows the after-relief cost of a contribution, with a ratio recorded for future top-up decisions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your marginal tax rate for this year"
                - "Work out the after-relief cost of a contribution of 100"
                - "Ask the agent to check the arithmetic and list any assumptions"
                - "Write the cost ratio at the top of your contribution ledger"
            - name: Default fund choice for a hands-off account
              description: |-
                ## Purpose
                Busy owners check their pensions rarely, so the investment needs to be something that can be left alone for years. Learning what the provider's ready-made funds hold, what they charge and how they change as you age lets you pick one sensible option instead of a dozen funds you will never review. Detailed fund selection belongs with the rest of your investing.

                ## Milestones
                1. The provider's ready-made or default funds listed with their charges.
                2. What each holds, and how it changes as you near retirement, noted.
                3. One fund chosen for all contributions, with the reason recorded.
                4. The choice set as the default for new money.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "One ready-made fund is chosen with its charge and approach written down, and set as the default for every new contribution."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the provider's ready-made funds and their yearly charges"
                - "Read the factsheet for the two most likely candidates"
                - "Choose one fund and write the reason in a sentence"
                - "Set that fund as the default for new contributions"
            - name: Pricing your rate to fund retirement
              description: |-
                ## Purpose
                Employees get pension contributions on top of salary; freelancers and small business owners only get them if the price covers them. Adding your target contribution into the day rate, project fee or product margin, alongside tax, holidays and unbilled time, shows whether your current pricing can pay for a retirement at all. Raise prices for new clients first if it cannot.

                ## Milestones
                1. Your effective hourly or daily rate calculated from last year's income and billable time.
                2. Retirement contributions added as a cost line beside tax, holidays and admin time.
                3. The rate needed to fund your target contribution worked out.
                4. A decision recorded: raise prices, add billable time, or accept a lower contribution.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pricing sheet shows the rate needed to fund your target contribution, with a recorded decision on prices for new work."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate last year's effective rate from income and billable hours"
                - "Add retirement contributions as a cost line in your pricing sheet"
                - "Work out the rate that would fund your target contribution"
                - "Revisit your rates against the retirement cost line @recurring(yearly)"
            - name: Automating the sweep with bank rules
              description: |-
                ## Purpose
                Manual sweeps work, but automation is what keeps them going in a hectic month. Many business banks and bookkeeping apps can move a fixed percentage of every incoming payment into a named pot without you, and the plan provider can then collect from that pot. Setting this up turns your written rule into something that simply happens.

                ## Milestones
                1. Your bank's or app's automatic transfer rules checked for percentage-based options.
                2. A rule moving your chosen percentage of incoming payments to the retirement pot.
                3. The rule tested on the next three payments.
                4. The weekly manual sweep reduced to a quick check.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An automatic rule moves the agreed percentage of incoming payments to the retirement pot and has worked correctly on three consecutive payments."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your bank or bookkeeping app offers percentage transfer rules"
                - "Create a rule that moves your contribution share of each payment"
                - "Confirm the rule fired correctly on the next three payments"
                - "Shorten the weekly sweep to checking that the rule ran"
            - name: Pre-tax or tax-free contributions by profit level
              description: |-
                ## Purpose
                Where both tax-deferred and tax-free retirement contributions exist, such as the traditional and Roth options in US plans, the better choice can flip with each year's profit. Lean years with a low tax rate often favour paying tax now, while strong years often favour the deduction. Setting a simple profit threshold for switching, agreed with your accountant, turns a yearly puzzle into a rule.

                ## Milestones
                1. Whether your plan offers both contribution types confirmed.
                2. The profit level at which your marginal rate changes noted.
                3. A threshold rule written for which type to use each year.
                4. The rule confirmed with your accountant and applied this year.

                ## Notes
                If your country or plan offers only one type, archive this project.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written profit threshold decides each year whether contributions go in tax-deferred or tax-free, confirmed with an accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether your plan offers both pre-tax and after-tax contributions"
                - "Find the profit level where your marginal tax rate changes"
                - "Write a threshold rule for which type to use"
                - "Agree the rule with your accountant before this year's contributions"
            - name: Business structure and retirement contributions comparison
              description: |-
                ## Purpose
                Trading as a sole trader, partnership or company changes how contributions are paid and relieved: company contributions may count as a business expense, while sole traders usually contribute personally from profit. As profits grow, comparing structures on retirement contributions alongside tax, admin and liability, with an accountant, can change how much reaches the pension each year. The decision is bigger than pensions, so treat this as one input.

                ## Milestones
                1. Your current structure and how contributions work under it written down.
                2. How contributions would work under the alternative structure noted.
                3. An accountant's comparison at your profit level obtained.
                4. A decision recorded to stay or change, with a date to revisit.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An accountant's comparison of retirement contributions under your current and alternative structures is on file, with a stay or change decision recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down how contributions work under your current structure"
                - "List your questions about contributions under a company structure"
                - "Book an accountant to compare the structures at your profit level"
                - "Record the decision and a date to revisit it"
            - name: Moving to a plan with more contribution room
              description: |-
                ## Purpose
                Plans chosen when profits were small can cap what you put in once the business grows. If the ceiling, rather than your cash flow, now limits contributions, comparing plans with more room at your profit level, and the cost of running two plans or moving, may raise what you can shelter each year. Check exit charges and any rules on holding two plans at once.

                ## Milestones
                1. Evidence that the ceiling, not cash, has limited contributions for at least a year.
                2. Two alternative plan types compared on room at your profit level.
                3. Exit charges and rules on holding two plans checked.
                4. A decision to move, add a plan or stay, with the reason.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of two alternative plans at your profit level is recorded, with exit charges checked and a move, add or stay decision written."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check how close last year's contributions came to the ceiling"
                - "Compare contribution room under two other plan types"
                - "Ask your current provider about exit charges"
                - "Record whether you will move, add a plan or stay"
            - name: Briefing your accountant on the contribution plan
              description: |-
                ## Purpose
                Accountants are often told about pension contributions after the year has closed, when nothing can be changed. A short brief early in the year, covering your plan, contribution rule and expected profit, lets them flag limits, timing and structure issues while you can still act. It also makes year-end preparation quicker and cheaper.

                ## Milestones
                1. A one-page brief with plan type, rule, contributions so far and expected profit.
                2. The brief sent and a short meeting held.
                3. Their advice on limits, timing and structure noted.
                4. Fee, contact details and the next check-in date recorded.

                ## Notes
                Start from the **Vendor** template to keep the accountant's details, fee and meeting notes together.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written brief is sent to your accountant each year before the main contributions are made, with their advice recorded."
                cadence: cyclic
              tasks:
                - "Write a one-page brief on your plan, rule and expected profit"
                - "Send the brief and book a short call with your accountant @recurring(yearly)"
                - "Note their advice on limits, timing and structure"
                - "Record the fee and the next check-in date"
            - name: Expensive business debt or contributions first
              description: |-
                ## Purpose
                Owners carrying business credit cards or overdrafts at high interest face a real trade-off between paying them down and contributing. Comparing each interest rate with the after-relief cost of contributing, and setting a rule such as keeping the floor contribution while clearing the dearest debt first, settles it with numbers rather than guilt.

                ## Milestones
                1. Every business debt listed with balance and interest rate.
                2. The after-relief cost of contributing set beside each rate.
                3. A written order for surplus money: which debt first, then contributions.
                4. The order reviewed each time a debt is cleared.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated written order for surplus money between each business debt and retirement contributions, based on listed rates, is in use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every business debt with its balance and interest rate"
                - "Set the after-relief cost of contributing beside each rate"
                - "Write the order in which surplus money will go"
                - "Rewrite the order once the most expensive debt is cleared"
            - name: Pension handover when leaving a job for self-employment
              description: |-
                ## Purpose
                The month you leave employment is when the employer contribution stops, and nothing replaces it unless you act. Recording what happens to the old workplace pension, keeping its details current, and getting your own plan running within the first quarter of trading stops a gap of years from opening up.

                ## Milestones
                1. The old workplace pension's provider, value and charges recorded after leaving.
                2. Its beneficiary nomination and contact address updated.
                3. A decision noted to leave it where it is or review a transfer later.
                4. Your own plan open and receiving contributions within three months of starting to trade.

                ## Notes
                Do not transfer an old pension in a hurry. Check for guarantees or exit fees first and treat any consolidation as a separate decision.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within three months of leaving employment, the old pension is recorded with current details and your own plan is receiving contributions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the final statement from your old workplace pension"
                - "Update the address and beneficiary on the old pension"
                - "Note whether the old scheme has any guarantees or exit fees"
                - "Set a date three months after starting to trade to have your own plan running"
            - name: Large contract or windfall contribution
              description: |-
                ## Purpose
                One large invoice, a back-payment or a strong final quarter can carry more retirement value than a year of small sweeps, if it is planned before the money lands. Deciding in advance how much goes to tax, buffer and pension, checking the ceiling and paying the contribution in the right tax year turns the windfall into lasting savings.

                ## Milestones
                1. The expected amount and date of payment recorded.
                2. The tax share set aside first.
                3. The pension share agreed after checking the remaining ceiling.
                4. The contribution paid and logged in the correct tax year.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The windfall's tax share, pension share and remaining ceiling are recorded, and the pension share is paid and logged in the correct tax year."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the amount and expected date of the large payment"
                - "Move the tax share to the tax pot as soon as it lands"
                - "Check remaining contribution room before deciding the pension share"
                - "Pay the pension share and record it in the ledger"
            - name: Plan review before hiring your first employee
              description: |-
                ## Purpose
                Some self-employed plans must cover eligible employees on the same terms as the owner, and many countries add automatic enrolment duties for any staff. Reviewing your plan before the first hire avoids a plan that suddenly costs far more than expected, or a missed legal duty. The answer may be a separate workplace scheme for staff.

                ## Milestones
                1. Your plan's rules on covering employees read in the plan documents.
                2. Your country's employer pension duties for new staff listed.
                3. The cost of covering a first employee under your plan estimated.
                4. A decision made before the start date: keep your plan, add a staff scheme or change plan.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Before the first employee starts, a written decision covers your plan's employee rules, your legal pension duties and the cost of each option."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your plan's rules on covering employees"
                - "Look up your country's pension duties for new employers"
                - "Estimate the cost of covering one employee under your plan"
                - "Decide on the staff pension approach before the start date"
            - name: Returning to employment with a workplace scheme
              description: |-
                ## Purpose
                Taking a job, full or part time, brings an employer scheme back, and the self-employed plan either keeps going alongside it or quietly goes dormant. Checking how limits are shared between the two, whether any freelance income still allows contributions and what the old plan should do now avoids both over-contribution and a forgotten account.

                ## Milestones
                1. The employer scheme's contribution rates and match noted.
                2. How contribution limits are shared between the two plans checked.
                3. A decision recorded on continuing, pausing or stopping self-employed contributions.
                4. The self-employed plan's beneficiary and address confirmed current.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Within two months of starting the job, a written decision on the self-employed plan is recorded, with shared limits checked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the new employer scheme's contribution rates and match"
                - "Check how the annual limit is shared across both plans"
                - "Decide whether to continue, pause or stop your own contributions"
                - "Confirm your self-employed plan has your current address"
            - name: Final contributions when closing the business
              description: |-
                ## Purpose
                Closing a freelance practice or small business, whether to retire, take a job or move abroad, leaves a final year of profit that can still fund contributions if they are timed before the books close. Planning final contributions alongside the last accounts, and deciding what happens to the plan afterwards, stops the closing year from being the year saving quietly ends.

                ## Milestones
                1. The expected final year profit estimated with your accountant.
                2. The remaining contribution room for the final year worked out.
                3. Final contributions paid before the cut-off.
                4. A note on what happens to the plan after closing: kept, combined later or left to grow.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Final-year contributions are paid within the remaining room before the cut-off, and the plan's future after closing is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your accountant for an estimate of final year profit"
                - "Work out the contribution room left for the final year"
                - "Pay final contributions before the tax year cut-off"
                - "Write down what will happen to the plan after closing"
            - name: Gig and platform workers saving in small amounts
              description: |-
                ## Purpose
                Drivers, couriers and task-app workers are paid in many small weekly amounts, often with no paperwork that looks like an invoice. A weekly habit of moving a small fixed share of each platform payout into the retirement pot, with platform statements kept for the tax return, builds savings that feel invisible week to week and look real after a year.

                ## Milestones
                1. Every platform you earn through listed with its payout day.
                2. A share of each payout chosen, even a small one.
                3. The share moved to the retirement pot on payout day for eight weeks running.
                4. Platform annual statements saved for the tax return.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks of platform payouts each have a share moved to the retirement pot, with annual statements saved."
                cadence: rolling
              tasks:
                - "List each platform you earn through and its payout day"
                - "Choose a share of every payout to save for retirement"
                - "Move the share of this week's platform payouts to the retirement pot @recurring(weekly:mon)"
                - "Download each platform's annual earnings statement for your return"
            - name: Seasonal business saving in peak months
              description: |-
                ## Purpose
                Tourism businesses, landscapers, event suppliers and others who earn most of the year's income in a few months cannot spread contributions evenly. Front-loading contributions during the season, after the off-season is covered, works better than a monthly figure that becomes impossible in the quiet months. Think of the whole year as one long pay cycle.

                ## Milestones
                1. Peak and quiet months marked from last year's income.
                2. Off-season costs and personal spending totalled and set aside first.
                3. A peak-month contribution share set to reach the yearly target.
                4. A full season completed with the yearly target reached.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full season is completed in which peak-month contributions reached the yearly target while the off-season stayed fully funded."
                cadence: cyclic
              tasks:
                - "Mark peak and quiet months from last year's income"
                - "Total off-season costs and personal spending"
                - "Set a peak-month contribution share that reaches the yearly target"
                - "Make the season contribution if this is a peak month @recurring(monthly:10)"
            - name: Project-based creatives with long gaps between fees
              description: |-
                ## Purpose
                Writers, musicians, film crew and designers can earn a large fee and then nothing for months, with royalties arriving at odd times. Saving a percentage of every fee and royalty statement, with a minimum contribution even in empty months, matches saving to the real shape of creative income. Keep the buffer larger than a typical freelancer's.

                ## Milestones
                1. Every income type listed: fees, royalties, grants and residuals.
                2. A contribution share set for each type.
                3. A buffer target based on your longest gap between fees.
                4. A year of fees and royalty statements each followed by a contribution.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fee and royalty statement over a year has a matching contribution logged, and the buffer covers your longest recent gap."
                cadence: rolling
              tasks:
                - "List every type of creative income you received last year"
                - "Set a contribution share for fees, royalties and grants"
                - "Size your buffer on the longest gap between fees in recent years"
                - "Log a contribution against each fee or royalty statement you receive"
            - name: Owner with staff putting their own pension on payroll
              description: |-
                ## Purpose
                Small business owners with a team often pay everyone else's pension contributions on time and their own last, if at all. Treating your own contribution as a fixed payroll line, paid on the same run as staff wages, puts your retirement on the same footing as theirs. Your accountant can tell you how to pay it through the business correctly.

                ## Milestones
                1. Your own contribution agreed as a fixed monthly figure.
                2. The payment set up to go out with each payroll run.
                3. The tax treatment confirmed with your accountant.
                4. Six payroll runs completed with your contribution included.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your own retirement contribution has gone out with six consecutive payroll runs, with its tax treatment confirmed."
                cadence: rolling
              tasks:
                - "Agree a fixed monthly figure for your own contribution"
                - "Ask your accountant how to pay it through the business"
                - "Add your contribution as a line on the payroll run"
                - "Check your contribution went out with this month's payroll @recurring(monthly:25)"
            - name: Spouse or partner working in the business
              description: |-
                ## Purpose
                When a spouse or partner does real work in the business, paying them a proper wage for it can let them build their own retirement savings and contribution record. Doing it properly means a fair wage for documented work, the right payroll registration and a plan for their contributions, with your accountant confirming the rules where you live.

                ## Milestones
                1. The partner's actual work and hours written down.
                2. A fair wage for that work agreed and paid through payroll correctly.
                3. A retirement plan open in the partner's name with contributions running.
                4. The arrangement reviewed with your accountant each year.

                ## Notes
                Tax authorities look closely at wages paid to family members. Pay only for real work at a market rate and keep the records.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The partner's work is documented, they are paid a fair wage through payroll, and contributions into a plan in their name are running."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write down the work your partner does and the hours"
                - "Ask your accountant how to pay a family member correctly"
                - "Open a retirement plan in your partner's name"
                - "Review the partner's wage and contributions with your accountant @recurring(yearly)"
            - name: Side business alongside an employer pension
              description: |-
                ## Purpose
                People with a job and a side business can often contribute from both, but limits may be shared and the side profit may be small and irregular. Deciding whether side income goes into the workplace scheme, a separate self-employed plan or neither, after checking combined limits, gets value from the extra income without breaching a cap.

                ## Milestones
                1. Side business profit for the last year worked out.
                2. Combined contribution limits across job and side business checked.
                3. A decision recorded on where side income contributions go.
                4. A share of each side business payment saved under that decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on where side business contributions go is made after checking combined limits, with a saving share set."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out last year's side business profit"
                - "Check how limits combine across your job and side business"
                - "Decide whether side income goes into the workplace plan or a separate one"
                - "Set a share of each side business payment to save"
            - name: Late start for self-employed savers over fifty
              description: |-
                ## Purpose
                Plenty of people reach fifty after years of self-employment with little saved, and the time left still matters more than it feels. Using any extra contribution room for older savers, sending more of each strong year into the plan and moving the planned stopping age back a little where the work allows can make a large difference over ten or fifteen years.

                ## Milestones
                1. Current savings and expected state income written on one page.
                2. Any extra contribution room for savers over fifty in your country confirmed.
                3. A higher contribution percentage set and started.
                4. A realistic stopping age written, with the work you could do in the years before it.

                ## Notes
                Talk to a regulated adviser before committing large lump sums. This project organises the plan; it does not choose investments.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page late-start plan records current savings, catch-up room, a raised contribution rate and a target stopping age."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Put your current savings and state pension forecast on one page"
                - "Check whether your country allows catch-up contributions after fifty"
                - "Raise your contribution percentage and update the written rule"
                - "Write the age you now plan to stop full-time work"
            - name: Five-year contribution plan for a lumpy income
              description: |-
                ## Purpose
                Experienced self-employed savers stop thinking in single years once they see how profits cluster: two strong years, a quiet one, then a big contract. A five-year sketch of expected profit, contribution room and any rules that let unused room carry forward helps place large contributions in the years where they save the most tax. Revisit it every year as reality replaces the estimate.

                ## Milestones
                1. Expected profit for each of the next five years sketched with low and high cases.
                2. Contribution room for each year noted, including any carry-forward rules.
                3. Years marked where extra contributions would save the most tax.
                4. The plan checked with an accountant and rolled forward each year.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A five-year table of expected profit, contribution room and planned contributions exists, checked with an accountant and updated each year."
                cadence: cyclic
              tasks:
                - "Sketch low and high profit cases for the next five years"
                - "Note contribution room for each year, including any carry forward"
                - "Mark the years where extra contributions save the most tax"
                - "Roll the plan forward one year once your accounts are finished"
            - name: Pension contributions and income-tested support
              description: |-
                ## Purpose
                Self-employed people on income-tested benefits, tax credits or subsidised health cover may find that contributions lower the income those programmes assess, and the rules vary widely. Checking how your contributions are treated before making a large one can protect or increase support, and avoids being caught out by a programme that treats them differently.

                ## Milestones
                1. Every income-tested benefit, credit or subsidy you receive listed.
                2. How each one treats pension contributions confirmed from official guidance.
                3. The effect of a planned large contribution estimated.
                4. The contribution timed or sized with that effect in mind.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each income-tested programme you rely on is listed with how it treats pension contributions, confirmed from official guidance."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every income-tested benefit, credit or subsidy you receive"
                - "Find how each programme treats pension contributions"
                - "Estimate the effect of your next large contribution on each"
                - "Ask a benefits adviser if the guidance is unclear"
            - name: Owner-run occupational scheme assessment
              description: |-
                ## Purpose
                Higher-earning owners sometimes outgrow individual plans and look at schemes the business runs itself, such as small self-administered schemes in the UK or defined benefit and cash balance plans in the US, which can allow larger contributions or more investment control. They also bring trustee duties, actuarial or admin fees and real liability. Assessing one with a specialist adviser before anyone sells you one keeps the decision yours.

                ## Milestones
                1. The reasons for considering an owner-run scheme written down.
                2. Set-up and yearly running costs obtained from two specialist providers.
                3. Trustee or plan sponsor duties listed in plain language.
                4. A decision recorded with a specialist adviser's input.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written assessment of an owner-run scheme lists costs from two providers and the duties involved, with a decision made using specialist input."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down why an individual plan no longer fits"
                - "Ask two specialist providers for set-up and yearly costs"
                - "List the trustee or sponsor duties you would take on"
                - "Book a specialist adviser to review the decision"
            - name: Annual filings for a self-administered plan
              description: |-
                ## Purpose
                Owner plans can carry their own reporting duties once assets pass a threshold or because the owner acts as administrator, for example an annual return to the tax or pensions authority. Missing a filing can bring penalties far larger than the plan's fees. A yearly filing calendar, with the provider or administrator named for each duty, keeps the plan compliant.

                ## Milestones
                1. Every filing duty for your plan listed from the plan documents and official guidance.
                2. The deadline and who files each one recorded.
                3. The current year's filings completed and confirmations saved.
                4. Thresholds that would add new filings noted.

                ## Notes
                Start from the **Compliance control** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every filing duty for the plan is listed with its deadline and filer, and this year's filings are confirmed and saved."
                cadence: cyclic
              tasks:
                - "List every filing duty for your plan with its threshold"
                - "Note the deadline and who files each one"
                - "Complete this year's plan filings and save confirmations @recurring(yearly)"
---

# Self-Employed Retirement Saving

This area is for freelancers, sole traders, contractors and small business owners who have no employer paying into a pension for them and whose income arrives in uneven lumps. It starts with the foundations (a snapshot of what you already have, a map of your real income, separate pots, a buffer, the right plan and a written contribution rule), then the routines that move money from every payment, the knowledge that makes limits and tax relief make sense, decisions about pricing, structure and debt, the events that change the picture, versions for gig workers, seasonal businesses, creatives, employers and late starters, and finally the specialist work of experienced owners.

What repeats is a weekly sweep of each payment's retirement share, a fixed monthly pay transfer and a minimum direct debit, a monthly ledger check and surplus decision, a quarterly profit check, and a yearly round of the year-end top-up, the tax relief claim and the contribution rate review. The Savings goal, Purchase decision, Metrics log, Vendor and Compliance control templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
