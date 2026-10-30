---
id: wealth-investing.tax-advantaged-investment-accounts
name: Tax-Advantaged Investment Accounts
description: "Every tax-free and tax-deferred wrapper you hold listed, this year's limits and deadlines known, a written funding order, and the routines that use each allowance fully and correctly."
category: personal
version: 1.0.0
tags: [wealth-investing, tax-advantaged-investment-accounts, everyone, isa, roth-ira, contribution-limits, tax-wrappers, health-savings-account]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
    - savings-goal
    - remediation-plan
    - risk-register
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Tax-Advantaged Investment Accounts
          description: "Using tax-free and tax-deferred wrappers such as ISAs, Roth IRAs and similar accounts fully and in the right order."
          projects:
            - name: Inventory of your tax-advantaged accounts
              description: |-
                ## Purpose
                Most people who have saved for a few years hold wrappers they only half remember: an old cash ISA, an IRA opened for a previous job, a health savings account set up through an employer plan. Listing every tax-free and tax-deferred account in one place, with provider, type, tax treatment and current value, is the starting point for every allowance and funding decision in this area.

                ## Milestones
                1. Every tax-advantaged account you and your household hold listed with provider, account type and owner.
                2. Each account labelled tax-free, tax-deferred or both, using the provider's own description.
                3. Current values and the date each was checked recorded beside every account.
                4. Any account you cannot fully identify flagged for a call to the provider.

                ## Notes
                Include cash wrappers as well as invested ones. Workplace pensions belong on the list for completeness, even though getting the most from them is covered in its own area.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single list names every tax-advantaged account in the household with provider, type, tax treatment and a dated value."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your email for statements from any savings or investment provider"
                - "List each wrapper with its provider, type, owner and current value"
                - "Mark every account as tax-free, tax-deferred or both"
                - "Call the provider about any account you cannot identify"
            - name: This year's contribution limits sheet
              description: |-
                ## Purpose
                Each wrapper has its own annual limit, and some share one: in the UK all ISAs draw on a single allowance, while in the US traditional and Roth IRAs share one cap. Writing this tax year's limits, shared caps and any age-based extras on one page, taken from the tax authority's own published figures, stops you overfunding one account or leaving another empty.

                ## Milestones
                1. This tax year's limit for every wrapper type you use written down with its source.
                2. Limits that are shared between accounts grouped together so the combined cap is clear.
                3. Any age-based or income-based extra allowance that applies to you noted.
                4. The date the figures were checked recorded so you know when to refresh them.

                ## Notes
                Use the tax authority's website or the provider's current help page, not an article from a previous year. Limits change, sometimes at short notice.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page sheet lists this tax year's limits for every wrapper you use, shared caps grouped, each with an official source and check date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the tax authority's page listing this year's wrapper allowances"
                - "Write each limit next to the accounts in your inventory it applies to"
                - "Group any accounts that share one combined allowance"
                - "Note any catch-up or bonus allowance your age makes available"
            - name: Eligibility check for each wrapper
              description: |-
                ## Purpose
                Being allowed to contribute is not automatic. Income ceilings, residency, age bands and linked conditions all apply: a Roth IRA phases out above certain incomes, a Lifetime ISA can only be opened before 40, and a US health savings account needs a qualifying high-deductible health plan. Checking eligibility before money goes in is far easier than unwinding a contribution you were never entitled to make.

                ## Milestones
                1. Every wrapper you use or plan to use checked against its income, age, residency and linked-plan rules.
                2. Your expected income for this year compared with any phase-out range.
                3. Any wrapper you are not eligible for crossed off, with the reason noted.
                4. Borderline cases written up as questions for a tax adviser.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each wrapper on your list is marked eligible, ineligible or borderline for this tax year, with the rule that decided it written beside it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the eligibility rules for each wrapper on your inventory"
                - "Estimate this year's income against any income phase-out ranges"
                - "Confirm your residency status meets each wrapper's requirements"
                - "List borderline cases as questions for a tax adviser"
            - name: Written funding order for your accounts
              description: |-
                ## Purpose
                When more than one wrapper is on offer, the order in which you fill them often matters more than which fund you pick. A common pattern is employer match first, then tax-free accounts, then tax-deferred, then a taxable account, but your own tax rate, access needs and goals may change that. Writing your order down with one line of reasoning each turns every payday and bonus into a quick lookup instead of a fresh debate.

                ## Milestones
                1. Every account you can contribute to ranked in the order you intend to fill it.
                2. One sentence of reasoning written beside each position in the order.
                3. The point at which each account counts as full defined, usually its annual limit.
                4. The order checked with a fee-only adviser or against reputable official guidance if you are unsure.

                ## Notes
                The order is a personal rule, not a universal one. Anyone needing the money within a few years may rank an easy-access wrapper above a locked one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written funding order ranks every available account, with a reason for each and a clear definition of full, dated this tax year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every account you can pay into this year, including any employer match"
                - "Rank the accounts in the order you intend to fill them"
                - "Write one line explaining each position in the order"
                - "Ask the agent to turn the order into a one-page payday checklist"
            - name: Choosing a provider for a tax-free investment account
              description: |-
                ## Purpose
                Providers differ on which wrappers they offer, whether they accept transfers in, the investments available inside the wrapper, minimum contributions and how painless the tax-year paperwork is. Comparing three providers against the same criteria before opening an account saves a transfer later, which can take weeks and leave money sitting out of the market.

                ## Milestones
                1. Three providers shortlisted that offer the wrapper you need.
                2. Each scored on the same criteria: wrapper types, transfers in, investment range, minimums, charges and flexibility.
                3. One provider chosen and the reason recorded.
                4. The account opened and the first contribution confirmed as received in the correct tax year.

                ## Notes
                Start from the **Purchase decision** template. Check whether the provider's version of the wrapper is flexible, since not all are.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider has been chosen from a scored shortlist of three and the account is open with its first contribution confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Shortlist three providers that offer the wrapper you need"
                - "Score each provider against the same six criteria in one table"
                - "Check whether each provider accepts transfers in from elsewhere"
                - "Open the account with the chosen provider and make the first contribution"
            - name: Tax-year deadline calendar for wrapper contributions
              description: |-
                ## Purpose
                Contribution deadlines rarely line up with the calendar year. A UK ISA year ends on 5 April, US IRA contributions for a year can usually be made until the filing deadline the following spring, and payroll-funded accounts close with the last pay run. Putting every relevant deadline into your calendar with a reminder six weeks ahead is what turns unused allowance into used allowance.

                ## Milestones
                1. The tax-year end and contribution deadline for every wrapper you hold confirmed.
                2. Each deadline in your calendar with a reminder six weeks before.
                3. Payroll cut-off dates for any account funded through salary noted separately.
                4. Next year's deadlines added as soon as they are published.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every wrapper you hold has its contribution deadline in your calendar with a six-week reminder, for the current and next tax year."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Confirm the contribution deadline for each wrapper you hold"
                - "Add each deadline to your calendar with a six-week reminder"
                - "Note payroll cut-off dates for any salary-funded account"
                - "Add next tax year's wrapper deadlines to the calendar @recurring(yearly)"
            - name: Beneficiary nominations on every wrapper
              description: |-
                ## Purpose
                Many tax-advantaged accounts pass according to the nomination form held by the provider rather than your will, and an out-of-date form can send money to a former partner or down a slower, more heavily taxed route. Checking each wrapper's nomination, or confirming it passes through your estate where no nomination is possible, takes an afternoon and protects the tax treatment your heirs may be able to keep.

                ## Milestones
                1. Each wrapper checked for whether it accepts a beneficiary nomination.
                2. Current nominations confirmed or updated with the provider in writing.
                3. Wrappers with no nomination option noted as passing under your will.
                4. A copy of every confirmation stored in your wrapper document folder.

                ## Notes
                How an inherited wrapper is treated varies by country and by the heir's relationship to you. A solicitor or estate planner can confirm what fits your wider plans.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every wrapper has a confirmed, current beneficiary nomination or a note that it passes under the will, with written confirmations filed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Log in to each provider and find the beneficiary section"
                - "Update any nomination that no longer matches your wishes"
                - "File the written confirmation from each provider"
                - "Recheck beneficiary nominations on every wrapper @recurring(yearly)"
            - name: Uninvested cash check inside your wrappers
              description: |-
                ## Purpose
                Money paid into an investment wrapper often sits as cash until you tell the provider what to buy, and it is common to find a year or more of contributions earning little or nothing. Checking the cash balance in every investment wrapper, and switching on automatic investing where the provider offers it, means the shelter is protecting growth rather than idle cash.

                ## Milestones
                1. The cash balance in every investment wrapper recorded.
                2. Any cash beyond a small buffer invested according to your existing plan.
                3. Automatic investment of new contributions switched on where available.
                4. A quarterly reminder set to recheck cash balances.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "No investment wrapper holds more than a small agreed cash buffer, and automatic investing is on wherever the provider offers it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the cash balance in each investment wrapper today"
                - "Invest surplus cash in line with your existing investment plan"
                - "Switch on automatic investing for new contributions where offered"
                - "Check the cash balance in every investment wrapper @recurring(quarterly)"
            - name: Wrapper document and access folder
              description: |-
                ## Purpose
                Account numbers, contribution confirmations, transfer forms and annual statements are needed at awkward moments: during a transfer, at filing time, or by someone dealing with your affairs. One organised folder, digital or paper, with access details kept somewhere secure, saves hours each year and a great deal of stress for whoever might need it later.

                ## Milestones
                1. One folder section per wrapper holding account details, statements and contribution confirmations.
                2. A secure record of how to access each account, kept in a password manager.
                3. A short index page listing every wrapper and where its papers live.
                4. Someone you trust told where the index is kept.

                ## Notes
                Never store passwords in a plain document. Record the provider, account number and how to reach them, and keep credentials in a password manager.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A wrapper folder with an index page exists, every account has its own section, and a trusted person knows where to find it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a folder with one section for each wrapper"
                - "Download the latest statement and contribution confirmation for each"
                - "Write an index page listing every wrapper and its provider contact"
                - "Tell a trusted person where the index is kept"
            - name: Automatic monthly contribution into your tax-free account
              description: |-
                ## Purpose
                Contributions that depend on remembering tend to bunch up at the year end or not happen at all. A standing payment a day or two after payday fills the allowance steadily, spreads purchases across the year and removes the decision from your month. Raising the amount once a year, when pay or costs change, keeps it in step with your life.

                ## Milestones
                1. A monthly amount chosen that fits your budget and the annual limit.
                2. A standing payment set up for the first few days after payday.
                3. Twelve consecutive contributions received by the provider.
                4. The amount reviewed and adjusted once in the year.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly contributions have landed in the tax-free account, with the amount reviewed at least once in the year."
                cadence: rolling
              tasks:
                - "Divide your target annual contribution by twelve to set the monthly amount"
                - "Set up a standing payment to the provider two days after payday"
                - "Confirm this month's contribution landed and was invested @recurring(monthly:3)"
                - "Review and raise the monthly contribution amount @recurring(yearly)"
            - name: Running contribution tally against the annual limit
              description: |-
                ## Purpose
                Exceeding a limit can bring penalty charges or force a refund, and it is easy to do when money arrives from several places: a standing payment, a payroll deduction, a one-off top-up and a partner paying in for you. A running tally of contributions against each limit, updated once a month, shows exactly how much allowance is left and catches an overpayment before the year closes.

                ## Milestones
                1. A tally with one row per contribution, showing date, account, amount and tax year.
                2. Remaining allowance for each limit calculated automatically.
                3. The tally updated every month for a full tax year.
                4. The final tally checked against each provider's year-end statement.

                ## Notes
                Start from the **Metrics log** template. Record transfers in a separate column, since a proper transfer usually does not use new allowance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full tax year of monthly tally updates exists and its total matches the providers' year-end figures exactly."
                cadence: rolling
              tasks:
                - "Create the tally with columns for date, account, amount and tax year"
                - "Enter every contribution made so far this tax year"
                - "Update the tally and remaining allowance from your statements @recurring(monthly:12)"
                - "Compare the year-end total with each provider's annual statement"
            - name: Year-end allowance top-up window
              description: |-
                ## Purpose
                Unused allowance in many wrappers is lost when the tax year ends, and the last fortnight is when providers get busy and payments get stuck. Setting aside a window about eight weeks before the deadline to check what is left, decide on a top-up and pay it in early gives every contribution time to clear in the right tax year.

                ## Milestones
                1. Remaining allowance for every wrapper confirmed eight weeks before the deadline.
                2. A top-up amount decided for each wrapper based on cash available.
                3. Top-ups paid in at least two weeks before the deadline.
                4. Provider confirmation that each top-up counted for the intended tax year.

                ## Notes
                Start from the **Operational checklist** template. Where unused room carries forward, as with Canada's TFSA, the deadline matters less but the check is still worth doing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Each year's top-ups are paid at least two weeks before the deadline and confirmed against the intended tax year by every provider."
                cadence: cyclic
              tasks:
                - "Check remaining allowance eight weeks before the tax year ends @recurring(yearly)"
                - "Decide a top-up amount for each wrapper from available savings"
                - "Pay top-ups at least two weeks before the deadline"
                - "Save each provider's confirmation of the tax year credited"
            - name: New tax year contribution reset
              description: |-
                ## Purpose
                The first week of a new tax year is the natural moment to reset: allowances refresh, standing payments may need re-authorising, and anyone planning a lump sum can invest it early. Treating it as a short fixed routine stops the new year's allowance drifting unused for months.

                ## Milestones
                1. Standing payments confirmed as still running into the new tax year.
                2. Any wrapper that requires a fresh application each year re-applied for.
                3. A decision recorded on whether to pay in a lump sum early in the year.
                4. The contribution tally started fresh for the new year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Within two weeks of each new tax year, standing payments are confirmed, the tally restarted and a lump-sum decision written down."
                cadence: cyclic
              tasks:
                - "Confirm standing payments continue into the new tax year @recurring(yearly)"
                - "Start a fresh tab in the contribution tally"
                - "Decide whether any lump sum goes in during the first month"
                - "Re-apply for any wrapper that needs a new subscription each year"
            - name: Quarterly wrapper statement reconciliation
              description: |-
                ## Purpose
                Providers occasionally credit contributions to the wrong tax year, miss a payment or apply a government bonus late. Comparing each quarter's statement with your own records takes twenty minutes and finds these errors while they are still easy to fix.

                ## Milestones
                1. Each wrapper's quarterly statement downloaded and filed.
                2. Contributions on the statement matched line by line to your tally.
                3. Any missing, duplicated or misdated item raised with the provider.
                4. Four quarterly reconciliations completed in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reconciliations completed in a year, with every discrepancy raised and its resolution recorded."
                cadence: rolling
              tasks:
                - "Download every wrapper's latest statement into its folder"
                - "Match each contribution on the statements to your tally @recurring(quarterly)"
                - "Raise any missing or misdated contribution with the provider in writing"
                - "Record how each discrepancy was resolved"
            - name: Wrapper tax forms each filing season
              description: |-
                ## Purpose
                Even tax-free accounts can generate paperwork: US IRA and health savings account providers issue forms reporting contributions and withdrawals, and some countries expect certain wrappers to be declared or claimed on the return. Gathering every wrapper-related form before you or your accountant start the return prevents late amendments and missed relief on tax-deferred contributions.

                ## Milestones
                1. A list of the forms or statements each wrapper provider issues and when.
                2. All of this year's wrapper forms collected in one place.
                3. Deductible contributions and any taxable withdrawals flagged for the return.
                4. The forms handed to your accountant or entered in your own return.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every wrapper form for the tax year is collected and passed to the return before the filing deadline, with deductions and taxable items flagged."
                cadence: cyclic
              tasks:
                - "List which tax forms each wrapper provider sends and when"
                - "Collect this year's wrapper tax forms into one folder @recurring(yearly)"
                - "Flag deductible contributions and any taxable withdrawals"
                - "Pass the forms to your accountant or enter them in your return"
            - name: Health savings account receipts file
              description: |-
                ## Purpose
                Where a health savings account allows tax-free reimbursement of qualifying medical costs years after they were paid, the receipt is what makes the later withdrawal tax-free. Saving each receipt as it arrives, with the date and amount paid out of pocket, keeps that option open for decades and removes any need to reconstruct records later.

                ## Milestones
                1. A dedicated folder for medical receipts eligible for reimbursement.
                2. Each receipt saved with date, provider, amount and how it was paid.
                3. A running total of unreimbursed qualifying expenses.
                4. A full year of receipts filed without gaps.

                ## Notes
                Check with the plan administrator or the tax authority which expenses qualify before relying on them.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A year of qualifying medical receipts is filed with a running total of unreimbursed expenses that matches the receipts."
                cadence: rolling
              tasks:
                - "Create a receipts folder with a running total sheet"
                - "Confirm with the plan administrator which costs qualify"
                - "File this month's medical receipts and update the total @recurring(monthly:20)"
                - "Keep card statements that show each out-of-pocket payment"
            - name: Yearly check for allowance and rule changes
              description: |-
                ## Purpose
                Governments adjust wrapper limits, eligibility and tax treatment in annual budgets, sometimes with only weeks of notice. Reading the official summary once a year and updating your limits sheet and funding order means you act on the current rules rather than the ones you learned years ago.

                ## Milestones
                1. The annual budget or tax announcement date noted in your calendar.
                2. Changes affecting your wrappers summarised in a few lines.
                3. Your limits sheet and funding order updated where the rules changed.
                4. Any change with a deadline added to the wrapper calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Within a month of each annual tax announcement, the limits sheet and funding order reflect every change that affects your wrappers."
                cadence: cyclic
              tasks:
                - "Note the date of the next budget or tax announcement"
                - "Read the official summary of wrapper changes after each budget @recurring(yearly)"
                - "Ask the agent to summarise how each change affects your accounts"
                - "Update your limits sheet and funding order"
            - name: Annual move of taxable holdings into wrappers
              description: |-
                ## Purpose
                Investments held in an ordinary taxable account can often be moved into a wrapper by selling and rebuying inside it, a process known in the UK as Bed and ISA. Doing this each year, up to the allowance, gradually shifts your portfolio under shelter, although the sale itself may realise a taxable gain that needs recording.

                ## Milestones
                1. Taxable holdings eligible for moving listed with their current gain or loss.
                2. The amount to move this year set within the remaining allowance.
                3. The sale and repurchase completed inside the wrapper, ideally on the same day.
                4. The disposal recorded for your capital gains records.

                ## Notes
                Check the gain position with your capital gains records before selling. Some providers offer a combined service that limits time out of the market.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each year a planned amount of taxable holdings is moved into a wrapper, with the disposal recorded and no allowance exceeded."
                cadence: cyclic
              tasks:
                - "List taxable holdings with their current gain or loss"
                - "Decide how much to move within this year's remaining allowance"
                - "Move taxable holdings into the wrapper using the provider's service @recurring(yearly)"
                - "Record the disposal details for your capital gains file"
            - name: Tax-free, tax-deferred and triple-tax accounts compared
              description: |-
                ## Purpose
                Wrappers fall into a few families. Tax-free accounts take taxed money and pay out free of tax, tax-deferred accounts give relief now and tax withdrawals later, and a few, such as US health savings accounts, can avoid tax on the way in, during growth and on the way out for qualifying uses. Knowing which family each of your accounts belongs to makes every later decision in this area easier to reason through.

                ## Milestones
                1. Each wrapper family explained in your own words with one example from your country.
                2. Every account in your inventory assigned to its family.
                3. The tax point for each family noted: on the way in, during growth, or on the way out.
                4. One question you still have written down for a tax adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains each wrapper family in your own words and assigns every account you hold to one of them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the tax authority's guide to the wrappers available to you"
                - "Write a short explanation of each wrapper family in your own words"
                - "Assign every account in your inventory to a family"
                - "Note one open question for a tax adviser"
            - name: Withdrawal rules and penalties by wrapper
              description: |-
                ## Purpose
                Access rules differ more than the tax rules do. A Lifetime ISA charges 25 percent on most early withdrawals, Roth IRA earnings face a five-year rule and an age test, and tax-deferred accounts usually add income tax and sometimes a penalty before a set age. Knowing these rules before you need the money stops an emergency becoming an expensive one.

                ## Milestones
                1. The earliest penalty-free access age or condition written down for each wrapper.
                2. The penalty or charge for early withdrawal noted for each.
                3. Exceptions that could apply to you, such as a first home or serious illness, listed.
                4. Your emergency fund confirmed as sitting outside any penalty-bearing wrapper.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table shows the access age, early withdrawal cost and relevant exceptions for every wrapper you hold."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find each wrapper's official withdrawal rules"
                - "Record the access age and early withdrawal charge for each"
                - "List exceptions that could apply to your situation"
                - "Check that your emergency fund sits outside penalty-bearing wrappers"
            - name: Transfers versus withdrawals and keeping tax status
              description: |-
                ## Purpose
                Taking money out of a wrapper to move it to another provider usually ends its sheltered status and can use up fresh allowance when you pay it back in. A formal transfer, requested through the receiving provider, keeps the money inside the shelter throughout. Learning the difference once prevents one of the most common and least reversible mistakes in this area.

                ## Milestones
                1. The difference between a transfer and a withdrawal understood for each wrapper type you hold.
                2. The receiving provider's transfer process located for one of your accounts.
                3. Rules on transferring current-year contributions noted.
                4. A personal rule written down: never withdraw cash to switch providers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note explains how to transfer each of your wrapper types without losing tax status, including current-year contribution rules."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read how transfers work for each wrapper type you hold"
                - "Find the transfer-in form on your preferred provider's site"
                - "Note any special rule for moving this year's contributions"
                - "Write the rule never to withdraw cash to switch providers"
            - name: Flexible tax-free accounts and replacing withdrawals
              description: |-
                ## Purpose
                Some tax-free accounts let you take money out and put it back in the same tax year without using fresh allowance; others treat every payment in as new. Knowing whether your accounts are flexible changes how comfortably you can use them as a backstop and how you plan any temporary withdrawal.

                ## Milestones
                1. Each tax-free account's flexibility confirmed with the provider.
                2. The time limit for replacing a withdrawal noted for flexible accounts.
                3. A rule recorded for how you would use a flexible account in an emergency.
                4. Any non-flexible account marked so withdrawals are treated as final.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every tax-free account you hold is marked flexible or not, with the replacement window recorded for each flexible one."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask each provider whether their tax-free account is flexible"
                - "Note the deadline for replacing any withdrawal"
                - "Mark non-flexible accounts clearly on your inventory"
                - "Write how you would use a flexible account in an emergency"
            - name: Estimating your marginal tax rate now and in retirement
              description: |-
                ## Purpose
                Choosing between relief now and tax-free withdrawals later is mostly a bet on your tax rate then compared with now. A rough estimate of today's marginal rate and a plausible retirement rate, based on expected pensions and other income, gives the tax-free versus tax-deferred decision a real number to work from instead of a hunch.

                ## Milestones
                1. Your current marginal income tax rate identified from this year's figures.
                2. Expected retirement income sources listed with rough amounts.
                3. A plausible retirement marginal rate estimated, with high and low cases.
                4. The estimates written into your funding order notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Current and estimated retirement marginal rates are written down with a high and low case, and referenced in the funding order."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your current marginal rate from this year's tax bands"
                - "List expected retirement income sources with rough annual amounts"
                - "Estimate a high and a low retirement marginal rate"
                - "Add both estimates to your funding order notes"
            - name: Dividends, interest and gains inside each wrapper
              description: |-
                ## Purpose
                Not every wrapper protects every kind of return. Some shelter dividends, interest and gains fully, some still suffer foreign withholding tax on overseas dividends, and some only permit certain asset types. Knowing what each account actually protects tells you which holdings benefit most from being inside it.

                ## Milestones
                1. The treatment of dividends, interest and gains recorded for each wrapper.
                2. Any foreign withholding tax that still applies inside a wrapper noted.
                3. Asset types not permitted in each wrapper listed.
                4. A short summary written of which holdings gain most from shelter.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table records how dividends, interest, gains and foreign withholding are treated inside each wrapper you hold."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up how each wrapper treats dividends, interest and gains"
                - "Check whether overseas dividends suffer withholding tax inside each wrapper"
                - "List asset types each wrapper does not permit"
                - "Summarise which of your holdings benefit most from shelter"
            - name: Tax-free or tax-deferred split for new contributions
              description: |-
                ## Purpose
                Where both options exist, such as Roth and traditional IRAs, or an ISA alongside a personal pension, the split between them shapes your tax bill for decades. Deciding a deliberate split from your marginal rate estimates, access needs and existing balances, and recording why, avoids defaulting to whichever account happened to be opened first.

                ## Milestones
                1. Your current and estimated retirement tax rates gathered from earlier work.
                2. Existing balances by tax treatment totalled.
                3. A percentage split for new contributions chosen and written down with reasons.
                4. Standing payments changed to match the split.

                ## Notes
                This is a planning decision, not a prediction. A fee-only adviser can sanity check the reasoning if the amounts are large.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written split between tax-free and tax-deferred contributions, with reasons, is in place and standing payments match it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total your current balances by tax treatment"
                - "Compare current and expected retirement tax rates side by side"
                - "Write a contribution split with three reasons for it"
                - "Change standing payments to match the chosen split"
            - name: Consolidating scattered tax-free accounts by transfer
              description: |-
                ## Purpose
                Three or four small tax-free accounts with different providers mean more statements, more logins and more chances of a misallocated contribution. Bringing them together by formal transfer, after checking for exit charges or lost bonuses, simplifies tracking without giving up any tax status.

                ## Milestones
                1. Every tax-free account rated keep, merge or close with a reason.
                2. Exit charges and any lost features checked for each account to be moved.
                3. Transfers requested through the receiving provider.
                4. Each transfer confirmed complete with the full value arriving inside the wrapper.

                ## Notes
                Transfers can take several weeks. Avoid starting one in the last month of the tax year if current-year contributions are involved.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Scattered tax-free accounts have been reduced to the number you chose, every move made by formal transfer with no loss of tax status."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Mark each tax-free account keep, merge or close"
                - "Ask each provider to confirm any exit charges in writing"
                - "Request transfers through the receiving provider"
                - "Check the full value arrived inside the new wrapper"
            - name: First-home savings wrapper decision
              description: |-
                ## Purpose
                Several countries offer accounts that add a bonus or tax relief for first-time buyers, such as the Lifetime ISA in the UK or the First Home Savings Account in Canada, each with property price caps, age limits and penalties if the money is used otherwise. Deciding whether one fits your timeline and likely purchase price, before you start saving the deposit elsewhere, can add a meaningful sum to that deposit.

                ## Milestones
                1. The first-home wrappers available to you identified with their conditions.
                2. Your likely purchase price and timeline compared with the account's caps and waiting periods.
                3. A decision recorded to open one, not to, or to wait.
                4. If opening, a monthly deposit amount set against the account's limit.

                ## Notes
                Start from the **Savings goal** template. Check how the penalty works if you end up not buying, since it can cost more than the bonus gave.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated decision on whether to use a first-home wrapper, with the price cap, timeline and penalty checked, is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the first-home wrappers available in your country"
                - "Compare your target price and timeline with each account's limits"
                - "Work out the cost if you withdraw for another purpose"
                - "Record your decision and set a monthly amount if opening"
            - name: Cash or invested tax-free account for each goal
              description: |-
                ## Purpose
                Many tax-free wrappers come in cash and investment versions, and the right one depends on when the money is needed. Matching each savings goal to a version, typically cash for money needed within a few years and investments for longer horizons, keeps short-term savings safe and long-term savings growing.

                ## Milestones
                1. Each savings goal listed with its target date.
                2. Every goal matched to a cash or investment wrapper with a reason.
                3. Any mismatch, such as long-term money sitting in cash, flagged.
                4. Contributions redirected to match the plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every savings goal is matched to a cash or invested wrapper by time horizon, with any mismatch corrected."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each savings goal with its target date"
                - "Match every goal to a cash or investment wrapper"
                - "Flag long-term money held in cash or short-term money invested"
                - "Redirect contributions to fix each mismatch"
            - name: Lump sum or monthly funding of the allowance
              description: |-
                ## Purpose
                Paying the full allowance at the start of the tax year gives money more time inside the shelter, while monthly payments suit people funding from salary and soften the sting of investing just before a fall. Choosing deliberately, based on where the money comes from and how you would feel about a bad first month, settles a question that otherwise gets reopened every year.

                ## Milestones
                1. The source of each year's contributions identified: salary, savings or windfalls.
                2. Both approaches written up with their trade-offs for your situation.
                3. A method chosen and recorded, including any split between the two.
                4. The method applied for a full tax year.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded funding method for the annual allowance, with its reasoning, has been followed for one full tax year."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Identify where this year's contributions will come from"
                - "Write the trade-offs of lump sum and monthly funding for you"
                - "Choose a funding method and record why"
                - "Set up payments to match the chosen method"
            - name: Bonus and windfall routing plan
              description: |-
                ## Purpose
                Bonuses, tax refunds, inheritances and gifts arrive irregularly and are easy to spend before a decision is made. A short written rule for how much of any windfall goes to wrappers, and in which order, means the money reaches shelter within days rather than lingering in a current account.

                ## Milestones
                1. A percentage or amount of any windfall earmarked for wrappers.
                2. The wrapper order for windfalls linked to your funding order.
                3. The remaining allowance checked before each windfall is paid in.
                4. The rule applied to the next windfall within a week of it arriving.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written windfall rule exists and the next windfall reached the chosen wrappers within seven days."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the share of any windfall that goes to wrappers"
                - "Link the windfall rule to your written funding order"
                - "Check remaining allowance before paying a windfall in"
                - "Pay the next windfall into wrappers within a week"
            - name: Health savings account spend or invest decision
              description: |-
                ## Purpose
                A health savings account can be used as a spending account for this year's medical bills, or invested and left to grow with costs paid from other money and reimbursed later if needed. Choosing between the two, based on your cash flow and expected medical costs, decides whether the account is a convenience or one of the most tax-efficient places you can save.

                ## Milestones
                1. Expected medical costs for the year estimated.
                2. Your ability to pay those costs from ordinary cash flow checked.
                3. A decision recorded on how much stays in cash and how much is invested.
                4. The account's investment option set up if you chose to invest.

                ## Notes
                Only available where you meet the qualifying health plan rules. Check the plan's minimum cash balance before investing and what the investment option costs.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded split between cash and invested funds in the health savings account, based on estimated costs, is set up with the provider."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Estimate this year's out-of-pocket medical costs"
                - "Check whether you can pay those costs from normal cash flow"
                - "Decide how much stays in cash and how much is invested"
                - "Set up the investment option with the account provider"
            - name: Moving a cash wrapper to a better rate by transfer
              description: |-
                ## Purpose
                Cash wrappers often start on a good rate and quietly drop once a bonus period ends. Comparing your current rate with the best available once a year, and moving by transfer rather than withdrawal, keeps the interest worth having without losing any tax-free status.

                ## Milestones
                1. The current rate and any bonus end date recorded for each cash wrapper.
                2. Three alternatives compared, all accepting transfers in.
                3. A transfer requested if a better rate justifies it.
                4. The new rate and next review date recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every cash wrapper's rate is compared with three alternatives once a year, and any move is made by formal transfer."
                cadence: cyclic
              tasks:
                - "Write down each cash wrapper's rate and bonus end date"
                - "Compare your cash wrapper rate with three alternatives @recurring(yearly)"
                - "Request a transfer through the new provider if worthwhile"
                - "Record the new rate and the next review date"
            - name: Prior-year contribution before the filing deadline
              description: |-
                ## Purpose
                Some wrappers let you contribute for the previous tax year until the filing deadline, as US IRAs and health savings accounts do until mid-April. Using that window deliberately, and making sure the provider codes the payment to the right year, can rescue an allowance that would otherwise be gone.

                ## Milestones
                1. Whether your wrappers allow prior-year contributions confirmed.
                2. Remaining prior-year allowance calculated from your tally.
                3. The contribution made and clearly designated for the prior year.
                4. The provider's confirmation saved and the tally updated.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Any remaining prior-year allowance has been used or deliberately declined before the filing deadline, with the tax year confirmed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check whether your wrappers accept prior-year contributions"
                - "Calculate last year's unused allowance from your tally"
                - "Make the payment and select the prior tax year on the form"
                - "Save the confirmation showing which year was credited"
            - name: Contribution step-up after a pay rise
              description: |-
                ## Purpose
                A pay rise is the easiest moment to save more, because you never get used to the extra money. Deciding before the first larger payslip to send part of the increase to your wrappers raises contributions without cutting anything you already spend on.

                ## Milestones
                1. The net monthly increase from the pay rise calculated.
                2. A share of it, such as half, assigned to wrapper contributions.
                3. Standing payments or payroll deductions increased before the first larger payday.
                4. The new amount checked against the annual limit.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within one pay cycle of a pay rise, wrapper contributions rose by a recorded share of the net increase, within the annual limit."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Work out the net monthly increase from your new salary"
                - "Decide what share of the increase goes to wrappers"
                - "Raise standing payments before the first larger payday"
                - "Check the new annual total stays within the limit"
            - name: Correcting an excess contribution
              description: |-
                ## Purpose
                Paying in more than a limit allows, or into a wrapper you were not eligible for, can trigger a penalty that repeats each year until fixed, as with the six percent annual excise tax on excess US IRA contributions. Spotting it early and following the provider's correction process before the deadline usually limits the cost to some paperwork.

                ## Milestones
                1. The size and cause of the excess confirmed from your tally and statements.
                2. The provider's correction or removal process identified.
                3. The excess and any related earnings removed or corrected before the deadline.
                4. The correction reported correctly on the tax return.

                ## Notes
                Start from the **Remediation plan** template. Speak to the provider and a tax adviser before acting, since the right fix depends on the account and the timing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Any excess contribution is removed or corrected before the deadline, with the provider's confirmation and the tax return treatment recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the excess amount and its cause from your tally"
                - "Ask the provider for their excess contribution correction process"
                - "Book a call with a tax adviser before acting"
                - "File the correction confirmation with your tax papers"
            - name: Using a first-home wrapper at house completion
              description: |-
                ## Purpose
                Withdrawing from a first-home wrapper usually has to go through the conveyancer or meet strict timing rules, and missing a step can turn a bonus into a penalty. Planning the withdrawal months before completion, with the provider's process and the solicitor's requirements side by side, makes sure the money arrives on time and keeps its tax treatment.

                ## Milestones
                1. The provider's first-home withdrawal process and lead times written down.
                2. Your conveyancer or solicitor briefed on the account and its paperwork.
                3. The withdrawal request submitted within the permitted window.
                4. The funds confirmed as received for completion without a penalty.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first-home wrapper funds reached the conveyancer before completion through the approved route, with no withdrawal charge applied."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Download the provider's first-home withdrawal guide"
                - "Send the account details to your conveyancer"
                - "Submit the withdrawal request inside the permitted window"
                - "Confirm with the conveyancer that the funds arrived"
            - name: Planning access at a wrapper's age milestone
              description: |-
                ## Purpose
                Several wrappers change character at a set age: a Lifetime ISA becomes freely accessible at 60, a US health savings account loses its non-medical withdrawal penalty at 65, and Roth IRA earnings become accessible after 59 and a half once the five-year rule is met. Noting these dates now and what changes at each one lets you build them into wider retirement plans.

                ## Milestones
                1. Every age milestone for each wrapper you hold listed with the date you reach it.
                2. What changes at each milestone written in a sentence.
                3. Any condition, such as an account holding period, confirmed as on track.
                4. Each milestone added to your long-range calendar.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "Each age milestone for your wrappers is dated in your calendar, with what changes and any condition confirmed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the age milestones for each wrapper you hold"
                - "Work out the date you reach each milestone"
                - "Check account holding-period rules are on track"
                - "Add each milestone to your long-range calendar"
            - name: Couples using both partners' allowances
              description: |-
                ## Purpose
                Each adult usually has their own allowances, so a household where only one partner saves into wrappers may be leaving half the shelter unused. Planning contributions across both partners, including gifting money to the lower earner where the rules allow, or a spousal IRA for a US partner without earnings, can double the tax-free room.

                ## Milestones
                1. Both partners' wrappers and remaining allowances listed side by side.
                2. A household contribution plan agreed that uses both sets of allowances.
                3. Any rule on gifting money between partners or spousal contributions checked.
                4. Contributions for both partners running as agreed.

                ## Notes
                Money given to a partner becomes theirs. Talk through what that means for both of you before moving large sums.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A household plan uses both partners' allowances, is agreed by both, and contributions for each partner are running."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List both partners' wrappers and remaining allowances together"
                - "Agree a household split of contributions across both partners"
                - "Check the rules on gifting between partners and spousal accounts"
                - "Review both partners' allowance use together @recurring(yearly)"
            - name: Inheriting a tax-advantaged account
              description: |-
                ## Purpose
                Inheriting a wrapper comes with rules that differ by country and by your relationship to the person who died: a surviving spouse may receive an extra allowance, such as the UK's additional permitted subscription, while many US non-spouse heirs must empty an inherited IRA within ten years. Learning the options before moving any money avoids losing tax status that cannot be regained.

                ## Milestones
                1. The type of inherited account and your beneficiary status confirmed with the provider.
                2. Every option available to you listed with its deadline.
                3. A decision on the account recorded after speaking to a tax adviser or the estate's solicitor.
                4. Any required withdrawals or transfers diaried and completed on time.

                ## Notes
                Do not withdraw from or close an inherited wrapper before checking your options. Some choices are irreversible.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your inherited account options are documented, a decision is recorded after professional advice, and every deadline is in the calendar."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the provider what type of inherited account this is"
                - "List every option open to you and its deadline"
                - "Book an appointment with a tax adviser or the estate's solicitor"
                - "Add each required withdrawal or transfer date to your calendar"
            - name: Career break and parental leave contributions
              description: |-
                ## Purpose
                Lower income during parental leave, study or a sabbatical changes the picture: some wrappers require earned income, while a low-tax year can be the cheapest time to pay into tax-free accounts or convert from tax-deferred ones. Planning contributions for the break before it starts keeps saving steady and may turn the quieter year into an opportunity.

                ## Milestones
                1. Expected income during the break estimated month by month.
                2. Each wrapper's earned-income or eligibility rule checked for the break year.
                3. A reduced but steady contribution plan written for the break.
                4. Any low-tax-year opportunity noted for discussion with a tax adviser.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written contribution plan covers the break year, with eligibility checked and any low-income opportunity noted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Estimate your monthly income during the break"
                - "Check each wrapper's earned-income rules for the break year"
                - "Write a reduced contribution plan you can keep up"
                - "Note any low-tax-year opportunity to raise with a tax adviser"
            - name: High earners near wrapper income limits
              description: |-
                ## Purpose
                Crossing an income threshold can quietly remove eligibility for a wrapper or reduce an allowance, as with Roth IRA phase-outs or tapered pension allowances. Projecting income early in the year, including bonuses and investment income, lets you choose a different route before a contribution is made rather than unwinding it afterwards.

                ## Milestones
                1. Every income threshold affecting your wrappers listed with this year's figures.
                2. Projected income for the year including bonuses and investment income.
                3. Contributions planned around any threshold you may cross.
                4. The projection updated mid-year when actual income is clearer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each year starts with an income projection against every wrapper threshold, updated mid-year, and contributions follow it."
                cadence: cyclic
              tasks:
                - "List every income threshold that affects your wrappers"
                - "Project this year's income including bonuses and dividends"
                - "Plan contributions around any threshold you may cross"
                - "Update your income projection against wrapper thresholds @recurring(yearly)"
            - name: First wrapper on a small budget
              description: |-
                ## Purpose
                Starting with a small monthly amount beats waiting for a round number, and many providers accept contributions of a few pounds or dollars a month. Opening one simple tax-free account and setting a modest automatic payment builds both the habit and the account, so increases later are just a number change.

                ## Milestones
                1. One tax-free account chosen with a low minimum contribution.
                2. A monthly amount set that you can keep up even in a tight month.
                3. Six consecutive months of contributions made.
                4. The first increase made after a pay rise or a cost cut.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tax-free account has received six consecutive monthly contributions and the amount has been raised at least once."
                cadence: rolling
              tasks:
                - "Pick a tax-free account with a low minimum monthly payment"
                - "Set a monthly amount you could keep paying in a tight month"
                - "Add any money left at month end to the account @recurring(monthly:28)"
                - "Raise the amount after your next pay rise"
            - name: Splitting wrappers in a separation or divorce
              description: |-
                ## Purpose
                Tax-advantaged accounts are often among the larger assets in a separation, and how they are divided matters: a court-ordered or approved transfer can keep tax status, while cashing out to split the money can trigger tax and penalties. Getting values and the correct transfer route into the settlement discussion protects both people's tax position.

                ## Milestones
                1. Every wrapper held by either partner listed with a current value.
                2. The tax-preserving transfer routes for each wrapper type identified.
                3. The settlement's wording on wrappers checked by a solicitor or tax adviser.
                4. Transfers completed through the approved route after the settlement.

                ## Notes
                Follow your solicitor's guidance on how the settlement should describe each account. Wording mistakes can make a transfer taxable.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every wrapper covered by the settlement has been transferred through a tax-preserving route, with the wording checked by a professional."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every wrapper held by either partner with current values"
                - "Ask each provider how a separation transfer works"
                - "Share the list with your solicitor before settlement talks"
                - "Confirm each transfer completed through the approved route"
            - name: Age-based catch-up contributions after 50
              description: |-
                ## Purpose
                Some wrapper systems raise limits for older savers, such as the extra amount US IRA holders can add from 50 and health savings account holders from 55. Checking which catch-up allowances you qualify for, and building them into the monthly amount the year you become eligible, makes good use of the decade when many people have the most spare income.

                ## Milestones
                1. Every catch-up allowance you qualify for and its start age confirmed.
                2. The year you become eligible for each marked in the wrapper calendar.
                3. Monthly contributions recalculated to include the catch-up amount.
                4. The first catch-up year completed with the extra amount paid in.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every catch-up allowance you qualify for is in the calendar and the first eligible year's catch-up amount was paid in full."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Check which catch-up allowances apply at your age"
                - "Mark the year each catch-up starts in your wrapper calendar"
                - "Recalculate monthly contributions to include the catch-up"
                - "Confirm the extra amount was paid by the year end"
            - name: After-tax contribution routes for high earners
              description: |-
                ## Purpose
                Once income rises above direct contribution limits, some systems still allow indirect routes, such as the US backdoor Roth, where a non-deductible contribution is converted to a Roth account. These routes hinge on details like the pro-rata rule and plan features, so researching them carefully and reviewing them with a tax professional matters more than the headline idea.

                ## Milestones
                1. The indirect routes allowed in your country described with their official rules.
                2. Existing pre-tax balances that could trigger pro-rata or aggregation rules checked.
                3. Your employer plan's after-tax and conversion features confirmed if relevant.
                4. A decision recorded after review with a tax professional.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written assessment of indirect contribution routes, with pro-rata exposure checked, ends in a decision reviewed by a tax professional."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the official rules for indirect contribution routes"
                - "Total any pre-tax balances that pro-rata rules would count"
                - "Check whether your employer plan allows after-tax contributions"
                - "Book a review with a tax professional before acting"
            - name: Conversions to tax-free in low-income years
              description: |-
                ## Purpose
                Moving money from a tax-deferred account to a tax-free one, as a Roth conversion does in the US, means paying tax now to avoid it later. Doing it in years when income is unusually low, such as early retirement or a sabbatical, and only up to the top of a chosen tax band, can reduce lifetime tax considerably.

                ## Milestones
                1. Years with unusually low expected income identified.
                2. The headroom up to your chosen tax band estimated for each such year.
                3. A conversion amount and the cash to pay its tax set aside.
                4. Each conversion recorded with its tax year and amount.

                ## Notes
                Conversions are usually irreversible and can affect benefits or other means-tested items. Model them with a tax professional first.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A multi-year conversion plan names target amounts by year, has the tax cash identified, and each completed conversion is recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the years when your income is likely to be unusually low"
                - "Estimate the headroom up to your chosen tax band in each year"
                - "Set aside cash for the tax on any conversion"
                - "Ask the agent to draft a year-by-year conversion table for your adviser"
            - name: Asset location across wrapper types
              description: |-
                ## Purpose
                With money in tax-free, tax-deferred and taxable accounts, where each holding sits can matter almost as much as what you hold. Placing the investments with the highest expected tax drag, such as bond interest or high-yield funds, in the most sheltered accounts while keeping the overall mix unchanged can raise after-tax returns without adding risk.

                ## Milestones
                1. Every holding listed by account and expected type of return.
                2. A location rule written for which asset types belong in which wrapper.
                3. Moves planned that keep your overall allocation the same.
                4. The location reviewed yearly as balances change.

                ## Notes
                Your target asset mix comes first. Location only decides where each part of that mix lives.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written location rule is applied across all accounts, with the overall allocation unchanged and a yearly review on record."
                cadence: cyclic
              tasks:
                - "List every holding by account and type of return"
                - "Write a rule for which asset types go in which wrapper"
                - "Plan moves that keep the overall allocation unchanged"
                - "Review asset location across all wrappers @recurring(yearly)"
            - name: After-tax basis and conversion records
              description: |-
                ## Purpose
                Non-deductible contributions and conversions create a tax basis that must be tracked for decades, as with the US Form 8606 for IRAs, or the same money can be taxed twice when it comes out. Keeping a single running record of basis, conversions and their tax years, with copies of every filed form, is dull work that pays off at withdrawal.

                ## Milestones
                1. Every non-deductible contribution and conversion listed with its year and amount.
                2. Copies of the related tax forms filed with the record.
                3. A running basis total calculated for each account.
                4. The record updated after each tax return is filed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A basis record lists every non-deductible contribution and conversion with filed forms, and its total was updated after the latest return."
                cadence: cyclic
              tasks:
                - "Gather past returns showing any non-deductible contributions"
                - "List each contribution and conversion with year and amount"
                - "Calculate a running basis total for each account"
                - "Update the basis record after filing your return @recurring(yearly)"
            - name: Ten-year contribution map across all wrappers
              description: |-
                ## Purpose
                Allowances are use-it-or-lose-it in many countries, so a long view helps. Mapping expected contributions across all wrappers for the next ten years, against life events such as a home purchase, children or a planned career break, shows where allowances will go unused and lets you front-load in the years you can.

                ## Milestones
                1. Expected life events over ten years listed with rough dates.
                2. Contributions to each wrapper projected year by year.
                3. Years with unused allowance highlighted.
                4. The map refreshed each year after the year-end top-up.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ten-year map shows planned contributions by wrapper and year, with gaps highlighted, refreshed within the last twelve months."
                cadence: cyclic
              tasks:
                - "List life events expected over the next ten years"
                - "Project contributions to each wrapper year by year"
                - "Highlight years where allowance is likely to go unused"
                - "Refresh the ten-year contribution map @recurring(yearly)"
            - name: Tax diversification against rule changes
              description: |-
                ## Purpose
                Tax rules change over decades, so relying entirely on one type of account is a bet on today's rules lasting. Holding a deliberate mix across tax-free, tax-deferred and taxable accounts gives flexibility to draw from whichever is cheapest in a given year and cushions the effect of any single change.

                ## Milestones
                1. Current balances split by tax-free, tax-deferred and taxable.
                2. A target range for each type written with reasons.
                3. Major rule-change risks for each type listed in a risk register.
                4. Future contributions steered toward the target ranges.

                ## Notes
                Start from the **Risk register** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written target mix across the three tax treatments, with a risk register of rule changes, guides where new contributions go."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total balances by tax-free, tax-deferred and taxable"
                - "Write a target range for each tax treatment"
                - "Record rule-change risks for each type in a risk register"
                - "Steer new contributions toward the target ranges"
---

# Tax-Advantaged Investment Accounts

This area is for anyone with access to tax-free or tax-deferred wrappers, such as ISAs, Roth and traditional IRAs, TFSAs or health savings accounts, who wants each allowance used fully and in a sensible order. It starts with the foundations (an inventory, this year's limits, eligibility, a written funding order, a provider, deadlines and nominations), then the routines that keep contributions flowing and correctly recorded, the rules worth understanding, the decisions about splits, transfers and windfalls, the dated moments such as a pay rise or a house completion, situations from a small first budget to inheritance and separation, and finally specialist work on conversions, asset location and tax diversification.

What repeats is a monthly contribution check and tally update, a quarterly statement reconciliation and cash check, and yearly fixtures for the year-end top-up, the new tax year reset, rule changes, beneficiaries, tax forms and the ten-year map. The Purchase decision, Metrics log, Operational checklist, Savings goal, Remediation plan and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
