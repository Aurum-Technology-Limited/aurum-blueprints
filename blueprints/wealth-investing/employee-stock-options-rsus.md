---
id: wealth-investing.employee-stock-options-rsus
name: Employee Stock Options & RSUs
description: "Every grant documented and in the calendar, vest-day and tax routines, the skills to read plans and exercise options, sell, hold and exercise decisions, and plans for leaving, listings, takeovers and concentration risk."
category: personal
version: 1.0.0
tags: [wealth-investing, employee-stock-options-rsus, knowledge-worker, engineer, founder, rsus, stock-options, espp]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - risk-register
    - meeting-notes
    - compliance-control
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Employee Stock Options & RSUs
          description: "Understanding equity compensation, vesting schedules, exercise decisions, concentration risk and tax on stock options and RSUs."
          projects:
            - name: Equity grant paperwork inventory
              description: |-
                ## Purpose
                Equity is governed by documents most people click through once: the plan rules, each grant agreement, exercise notices and any amendments. Gathering every one into a single folder, before a deadline forces the search, means each later decision in this area starts from what you actually signed rather than what you remember from the offer call.

                ## Milestones
                1. Every grant agreement you have accepted saved as a PDF in one folder.
                2. The company's equity plan document and any plan summary or prospectus saved beside them.
                3. Exercise, vest and share purchase confirmations downloaded for every year you have held shares.
                4. A short index listing each document, its date and where the original lives.

                ## Notes
                Download copies now. Portal access often ends on your last day, and former employees routinely have to request documents by email and wait weeks.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One folder holds the plan document, every accepted grant agreement and all exercise, vest and purchase confirmations, with a dated index."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create one folder for equity paperwork in your document store"
                - "Download every accepted grant agreement from the plan portal"
                - "Save the equity plan document and any plan summary beside the grants"
                - "Write an index of each document with its date and grant number"
            - name: One-page equity summary sheet
              description: |-
                ## Purpose
                Ask most employees how many options they hold, at what strike and when they expire, and the answer is a guess. A single sheet with one row per grant, showing type, share count, strike or grant price, vesting pattern, vested to date and expiry, becomes the source every tax estimate, sale plan and job decision reads from.

                ## Milestones
                1. One row per grant with type, grant date, share count, strike price and expiry date.
                2. Vested, unvested and already exercised or sold quantities shown separately.
                3. Totals checked against the plan portal, with any difference explained.
                4. The sheet's location noted in your household finance records so a partner can find it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A summary sheet lists every grant with its type, strike, vesting status and expiry, reconciled to the plan portal within the last month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every grant number shown in the plan portal"
                - "Copy type, share count, strike and expiry for each grant into the sheet"
                - "Split each grant into vested, unvested and already exercised or sold"
                - "Reconcile the sheet totals with the portal and note any gap"
            - name: Vesting dates in your calendar
              description: |-
                ## Purpose
                Each vest date creates taxable income for RSUs, adds shares you are free to sell and raises the amount you would forfeit by leaving. Putting every remaining cliff and vest date into your calendar, with the share count beside it, turns a schedule buried in a grant letter into something you see coming two weeks ahead.

                ## Milestones
                1. Every remaining vest date for every grant in the calendar with the expected share count.
                2. A reminder set two weeks before each vest.
                3. Any cliff still ahead marked as a separate event.
                4. The final vest date of each grant noted, so refresh grants can be compared against it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All remaining vest dates for every grant appear in your calendar with share counts and a two-week reminder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Export or copy the vesting schedule for each grant from the portal"
                - "Add each future vest date to the calendar with its share count"
                - "Set a reminder two weeks before every vest date"
                - "Mark the final vest date of each grant as its own event"
            - name: Knowing which kind of equity you hold
              description: |-
                ## Purpose
                Restricted stock units, incentive and non-qualified options, share purchase plans and country schemes such as the UK's EMI options look alike on a payslip but are exercised and taxed in completely different ways. Identifying the exact type of each grant from the agreement, not a recruiter's description, is the first fact every other decision depends on.

                ## Milestones
                1. Each grant labelled with its exact legal type as written in the agreement.
                2. A one-line plain description of how each type turns into shares you own.
                3. The taxable events for each type, such as vest, exercise and sale, listed in order.
                4. Any grant whose type is unclear confirmed in writing by the equity or payroll team.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every grant on the summary sheet carries its exact type from the agreement and a list of the events that trigger tax for that type."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the grant type wording in each grant agreement"
                - "Write one line on how each type becomes shares you own"
                - "List the taxable events for each type using the plan summary"
                - "Email the equity team about any grant whose type is unclear"
            - name: Plan administrator account set-up
              description: |-
                ## Purpose
                Shares from vesting and exercises land in an account at the company's chosen plan administrator, and many people never log in until something goes wrong. Securing that account, adding beneficiaries where allowed, filing the right tax residency form and checking your address now prevents frozen shares, lost statements and excess withholding later.

                ## Milestones
                1. Login working with two-factor authentication switched on.
                2. Contact details, address and tax residency form current.
                3. Beneficiary or transfer-on-death details completed where the account offers them.
                4. The bank account for sale proceeds linked and verified.

                ## Notes
                If the administrator also offers a brokerage account, settle where proceeds will go before the first sale, so cash does not sit idle there for months.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The plan administrator account has two-factor login, a current tax form, beneficiaries where offered and a verified bank account for proceeds."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Log in to the plan administrator account and switch on two-factor login"
                - "Check the address and tax residency form held on file"
                - "Add beneficiaries if the account offers them"
                - "Link and verify the bank account that will receive sale proceeds"
            - name: After-tax value of your equity
              description: |-
                ## Purpose
                The number in the portal is a gross figure: it ignores the strike price you must pay, the tax due on vest or exercise, and for private companies the fact that nobody may be able to buy the shares for years. Working out an honest after-tax, after-cost value for vested and unvested equity stops a paper fortune being treated as money in the bank.

                ## Milestones
                1. Gross value of vested and unvested equity at today's price or latest valuation.
                2. Strike costs and estimated tax subtracted to give a net figure for each grant.
                3. Private company equity shown separately and marked as illiquid.
                4. Low, central and high price scenarios showing the net range.

                ## Notes
                Use your marginal rate as a rough estimate and label it as one. A tax adviser can refine it later; the point here is scale, not precision.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table shows gross and estimated net value for each grant under three price scenarios, with illiquid equity flagged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the current share price or latest private valuation"
                - "Subtract strike costs from the gross value of each option grant"
                - "Apply an estimated tax rate to get a net figure per grant"
                - "Build low, central and high price scenarios for the total"
            - name: Withholding gap check on RSU vests
              description: |-
                ## Purpose
                Employers often withhold tax on vesting shares at a flat supplemental rate that can sit well below a higher earner's real marginal rate, so a big vest year can end with a surprise bill. Comparing what was withheld on last year's vests with what was actually owed shows the size of the gap and whether money needs setting aside or paying in advance.

                ## Milestones
                1. Total vest income and tax withheld for the last full year pulled from payslips or vest confirmations.
                2. Tax actually due on that income estimated, or taken from last year's return.
                3. The shortfall per vest written down.
                4. A plan chosen for covering the gap: extra withholding, a savings pot or advance payments.

                ## Notes
                Rules differ by country. In some, withholding on equity settles the tax; in others it is only a down payment. Check which applies before acting on the gap.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The difference between tax withheld and tax owed on last year's vests is calculated, with a written plan for covering it this year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Total last year's vest income and the tax withheld on it"
                - "Estimate the tax actually owed on that income at your marginal rate"
                - "Work out the shortfall per vest"
                - "Choose how this year's shortfall will be covered and write it down"
            - name: Cost basis records for every share lot
              description: |-
                ## Purpose
                When vested or purchased shares are sold, the broker's tax form often reports a cost of zero or only the cash paid, even though the value at vest was already taxed as salary. Keeping your own record of the correct basis for every lot is what stops the same income being taxed twice when you sell.

                ## Milestones
                1. A lot list with acquisition date, quantity and value at vest, exercise or purchase.
                2. Income already reported through payroll noted against each lot.
                3. Every lot sold so far matched to the broker's reported basis, with differences flagged.
                4. The adjustment method for your tax return confirmed with your preparer.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every share lot has a recorded acquisition date and correct basis, and every past sale is reconciled to the broker's reported figure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the supplemental cost basis report from the plan administrator"
                - "Build a lot list with dates, quantities and value at acquisition"
                - "Compare past sale reports with your own basis figures"
                - "Ask your tax preparer how they want basis adjustments shown"
            - name: Standing rule for newly vested shares
              description: |-
                ## Purpose
                Deciding what to do with shares on every vest date invites hesitation, and hesitation usually means holding by default. Writing one standing rule in advance, such as a fixed share of each vest sold and a named destination for the money, removes the recurring temptation to wait for a better price.

                ## Milestones
                1. Your reasons for holding or selling employer stock written in three sentences.
                2. A rule stating what share of each vest is kept and what is sold.
                3. A destination named for proceeds, such as an emergency fund, debt or a diversified account.
                4. Exceptions, such as closed trading windows or a pending large purchase, written beside the rule.

                ## Notes
                A useful test: if this vest arrived as a cash bonus, would you spend all of it buying your employer's shares? Agree the rule with a professional if the sums are large.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rule states the share of each vest to keep, the share to sell and where the proceeds go."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three sentences on why you would hold employer stock"
                - "Choose the share of each vest you will keep and sell"
                - "Name the account that receives sale proceeds"
                - "Record the exceptions that would pause the rule"
            - name: Vest-day routine
              description: |-
                ## Purpose
                Shares arrive, tax is taken, and sell-to-cover sometimes leaves odd fractions or cash sitting idle in the plan account. A fixed ten-minute routine after each vest confirms the right number of shares landed, the withholding matches the payslip and your standing rule has actually been carried out.

                ## Milestones
                1. A written checklist of steps to run within a week of each vest.
                2. Shares received and tax withheld checked against the vest confirmation every time.
                3. The standing rule applied at each vest and the action logged.
                4. Four consecutive vests handled through the checklist.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive vests each have a logged check of shares, withholding and the action taken under your standing rule."
                cadence: rolling
              tasks:
                - "Write the vest-day checklist in your notes"
                - "Check the shares delivered and tax withheld after each vest @recurring(quarterly)"
                - "Log the action taken under your standing rule after each vest"
                - "Move any idle cash in the plan account to its destination"
            - name: Monthly equity position snapshot
              description: |-
                ## Purpose
                Share prices move enough in a month to change both your tax exposure and how concentrated your wealth is. A monthly snapshot of units held, price and net value, kept in one log, shows the trend without the stress of watching the ticker every day.

                ## Milestones
                1. A log with columns for date, units held, share price and estimated net value.
                2. One entry made on a fixed day each month.
                3. Months with a vest, sale or new grant annotated.
                4. Twelve entries charted at the end of the year.

                ## Notes
                Start from the **Metrics log** template. Record the figure on a fixed day rather than when the price is in the news.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly entries record units held, share price and estimated net value of all employer equity."
                cadence: rolling
              tasks:
                - "Set up a log with columns for date, units, price and net value"
                - "Record units held, price and net value in the log @recurring(monthly:12)"
                - "Annotate any month with a vest, sale or new grant"
                - "Chart the last twelve entries at the end of the year"
            - name: Trading windows and blackout calendar
              description: |-
                ## Purpose
                Employees of listed companies can usually sell only while a trading window is open, and some roles need pre-clearance for every trade. Knowing the year's windows, and who must approve a sale, prevents a planned diversification sale being blocked at the last moment or, worse, made in breach of policy.

                ## Milestones
                1. The insider trading policy read and your designation, if any, noted.
                2. This year's expected window opening and closing dates in the calendar.
                3. The pre-clearance process and contact written down where it applies.
                4. Every planned sale scheduled inside an open window.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "This year's trading windows are in your calendar and every planned sale is scheduled inside one, with pre-clearance noted where required."
                cadence: rolling
              tasks:
                - "Read the insider trading policy and note whether you are a designated insider"
                - "Add this year's expected trading window dates to the calendar"
                - "Write down the pre-clearance steps and the contact who approves them"
                - "Check the window status before any planned sale @recurring(quarterly)"
            - name: Advance tax payments on equity income
              description: |-
                ## Purpose
                Large vests, exercises and sales can leave tax that payroll never collected, and many tax authorities charge interest or penalties when it is paid late in one lump. A quarterly routine of estimating equity income so far and paying in advance, where your system allows it, spreads the year's bill and keeps it predictable.

                ## Milestones
                1. Your country's rules for advance or estimated payments confirmed.
                2. A running total of equity income and tax withheld for the year.
                3. Each quarterly estimate calculated and any payment made on time.
                4. No penalty or interest charged for the year.

                ## Notes
                The US calls these quarterly estimated payments; other countries use payments on account or provisional tax. Ask your preparer whether a minimum payment rule protects you from penalties.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every advance payment due for the year is calculated and paid on time, with no penalty charged for underpayment."
                cadence: cyclic
              tasks:
                - "Confirm the advance payment rules and dates with your tax preparer"
                - "Keep a running total of equity income and tax withheld this year"
                - "Calculate and pay the quarterly estimate on equity income @recurring(quarterly)"
                - "File each payment receipt with the year's equity paperwork"
            - name: Employer stock concentration limit
              description: |-
                ## Purpose
                Holding a large slice of your wealth in the company that also pays your salary doubles the damage if it struggles: the job and the savings fall together. Setting a written ceiling for employer stock as a share of net worth, and checking it every quarter, turns concentration risk from a vague worry into a number with a trigger.

                ## Milestones
                1. Employer stock as a percentage of net worth calculated, with unvested shares shown separately.
                2. A written ceiling and the action that follows when it is exceeded.
                3. Job risk and stock risk recorded together in a risk register.
                4. Four quarterly checks recorded.

                ## Notes
                Start from the **Risk register** template. Planners often quote a ceiling of 10 to 15 percent of net worth, but the right figure for you is one to agree with an adviser.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written concentration ceiling exists and four consecutive quarterly checks record the percentage and any action taken."
                cadence: rolling
              tasks:
                - "Calculate employer stock as a share of your net worth"
                - "Write a ceiling and the action that follows a breach"
                - "Recalculate the concentration percentage against the ceiling @recurring(quarterly)"
                - "Add the combined job and stock risk to a risk register"
            - name: ESPP enrolment and purchase cycle
              description: |-
                ## Purpose
                An employee share purchase plan with a discount and a lookback can be one of the better deals in a pay packet, but only if you enrol, set a contribution you can afford and decide in advance what happens after each purchase. Running it as a cycle, with enrolment and purchase dates known, keeps the discount without letting shares pile up unplanned.

                ## Milestones
                1. The plan's discount, lookback, offering period and purchase dates written down.
                2. A contribution percentage chosen that the household budget can carry.
                3. A sell or hold rule for purchased shares, including any holding period for better tax treatment.
                4. Two purchase periods completed with the rule applied.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "You are enrolled at a chosen contribution rate, and two purchase periods have been completed with your sell or hold rule applied."
                cadence: cyclic
              tasks:
                - "Write down the ESPP discount, lookback and purchase dates"
                - "Choose a contribution percentage the budget can carry"
                - "Decide what happens to shares after each purchase"
                - "Review your contribution rate at each enrolment window @recurring(yearly)"
            - name: Option expiry and exercise deadline watchlist
              description: |-
                ## Purpose
                Options that pass their expiry date unexercised are simply gone, and so are vested options when a post-employment window closes. A watchlist of every expiry and deadline, scanned monthly, is cheap insurance against losing real value to a forgotten date.

                ## Milestones
                1. Every grant's expiry date and the post-employment exercise window listed.
                2. Options within two years of expiry flagged on the summary sheet.
                3. Calendar alerts set twelve, six and three months before each expiry.
                4. Six monthly scans logged.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A watchlist shows every option expiry and exercise window, with alerts set and six monthly scans logged."
                cadence: rolling
              tasks:
                - "List every option expiry date and the post-employment exercise window"
                - "Set alerts twelve, six and three months before each expiry"
                - "Flag options within two years of expiry on the summary sheet"
                - "Scan the watchlist for dates within six months @recurring(monthly:3)"
            - name: Annual refresh grant review
              description: |-
                ## Purpose
                Refresh grants, promotion grants and retention awards arrive with their own vesting and terms, and they are easy to accept without reading. Reviewing each year's new grants, adding them to your records and comparing total unvested equity with last year shows whether your pay is still competitive and what you would leave behind by moving.

                ## Milestones
                1. Each new grant accepted only after its agreement has been read.
                2. New grants added to the summary sheet and vesting calendar.
                3. Total unvested equity compared with the same point last year.
                4. A note of what leaving now would forfeit.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every grant received this year is on the summary sheet and calendar, and a year-on-year comparison of unvested equity is written."
                cadence: cyclic
              tasks:
                - "Read the agreement for any new grant before accepting it"
                - "Add the new grant to the summary sheet and vesting calendar"
                - "Compare total unvested equity with the same point last year @recurring(yearly)"
                - "Write down what you would forfeit by leaving this month"
            - name: Year-end equity statements archive
              description: |-
                ## Purpose
                Every year produces vest confirmations, purchase statements, broker tax forms and payroll summaries that you may need a decade later, when shares acquired today are finally sold. Filing them in one folder per tax year, as soon as they are issued, is far easier than rebuilding a lot's history from old emails.

                ## Milestones
                1. A folder per tax year holding every equity statement and tax form.
                2. Broker tax forms and payroll year-end summaries saved as soon as they are issued.
                3. The cost basis lot list updated for the year's new lots and sales.
                4. A backup copy kept outside the employer's systems.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complete folder for last tax year holds every equity statement, tax form and an updated lot list, with a backup elsewhere."
                cadence: cyclic
              tasks:
                - "Create this year's folder inside the equity paperwork store"
                - "Save the broker tax forms and payroll year-end summary @recurring(yearly)"
                - "Update the lot list with this year's new lots and sales"
                - "Copy the folder to a backup outside work systems"
            - name: How vesting schedules, cliffs and acceleration work
              description: |-
                ## Purpose
                A four-year schedule with a one-year cliff, monthly or quarterly vesting, back-weighted schedules and single or double trigger acceleration all change what you own and when. Understanding these terms for your own grants makes offer comparisons and leaving decisions far less of a guess.

                ## Milestones
                1. The cliff, vesting frequency and schedule shape of each grant explained in your own words.
                2. Any acceleration clause found and its trigger described.
                3. The effect of a leave of absence or part-time change on vesting checked in the plan.
                4. A worked example showing shares owned at three future dates.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note explains the cliff, frequency, shape and any acceleration for each grant, with shares owned at three future dates worked out."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the vesting and acceleration clauses in each grant agreement"
                - "Describe the cliff and vesting frequency of each grant in your own words"
                - "Look up how single and double trigger acceleration differ"
                - "Work out shares owned at three future dates"
            - name: Strike, spread and option exercise methods
              description: |-
                ## Purpose
                Exercising means paying the strike price to turn an option into a share, and the gap between strike and market value, the spread, is where both the gain and the tax come from. Learning the methods your plan offers, such as paying cash, selling to cover or a cashless same-day sale, shows what each costs and which ones leave you holding shares.

                ## Milestones
                1. Spread per share and total spread worked out for each option grant.
                2. The exercise methods your plan allows listed with their fees.
                3. A worked example of each method for a small batch of options.
                4. The tax event each method triggers noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example for each available exercise method shows cash needed, shares kept, fees and the tax event triggered."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Calculate the current spread per share for each option grant"
                - "List the exercise methods and fees shown in the plan portal"
                - "Work through one example of each method for 100 options"
                - "Note which tax event each exercise method triggers"
            - name: Equity tax rules where you live
              description: |-
                ## Purpose
                The same grant can be taxed at vest, at exercise, at sale or at all three, depending on its type and your country, and income and gains are often taxed at different rates. A short written summary of the rules that apply to you, checked by a qualified preparer, prevents expensive surprises and makes every conversation with an adviser faster.

                ## Milestones
                1. Taxable events for each grant type you hold listed under your country's rules.
                2. The rates or bands that apply at each event noted.
                3. Holding periods that change the treatment of a sale written down.
                4. The summary checked by a tax professional, with their corrections recorded.

                ## Notes
                This summary organises questions for a professional. It does not replace their advice, especially in a year with large exercises or sales.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page tax summary for your grant types, reviewed by a tax professional, is filed with your equity paperwork."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the tax authority's published guidance on employee share schemes"
                - "List the taxable events for each grant type you hold"
                - "Note the holding periods that change how a sale is taxed"
                - "Ask a tax professional to review and correct the summary"
            - name: Reading your company's equity plan document
              description: |-
                ## Purpose
                The plan document, not the grant letter, usually decides what happens on resignation, dismissal, death, disability or a takeover, including clawback and company repurchase rights. Reading it once, carefully, answers the awkward questions before they become urgent ones.

                ## Milestones
                1. Clauses on termination, death and disability located and summarised.
                2. Change of control and plan termination provisions summarised.
                3. Repurchase, right of first refusal and clawback terms noted.
                4. Open questions sent to the equity team and the answers saved.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of termination, change of control, repurchase and clawback terms exists, with open questions answered in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the full plan document, not only the summary"
                - "Summarise the termination, death and disability clauses"
                - "Note any repurchase, first refusal or clawback terms"
                - "Send your open questions to the equity team"
            - name: Private company share valuations explained
              description: |-
                ## Purpose
                Private company equity has no market price, only a fair market value set for tax purposes, such as a 409A valuation in the US, and a preferred share price from the last funding round that is usually much higher. Knowing which number drives your strike, your tax and your realistic payout stops you quoting the flattering one.

                ## Milestones
                1. The current fair market value and its date obtained from the company.
                2. The last preferred round price noted and the gap explained.
                3. How often the company refreshes its valuation written down.
                4. The effect of a new valuation on future grants and exercises understood.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note records the current fair market value, the last preferred price and how each affects your strike, tax and likely payout."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the equity team for the current fair market value and its date"
                - "Write down the last funding round's preferred share price"
                - "Find out how often the company updates its valuation"
                - "Explain in two sentences why the two figures differ"
            - name: Liquidation preferences, dilution and your exit payout
              description: |-
                ## Purpose
                Common shares and options sit behind investors' preferred shares, so a sale at an impressive headline price can return far less per employee share than the announcement suggests. A simple exit model with your share count, the preferences ahead of you and likely future dilution gives a realistic range for what your equity might pay.

                ## Milestones
                1. Your fully diluted ownership percentage calculated or obtained from the company.
                2. Total liquidation preferences ahead of common shares noted.
                3. Your payout modelled at three exit values.
                4. Dilution from one more funding round included.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A simple exit model shows your payout at three sale values after preferences and one further round of dilution."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask for the total fully diluted share count"
                - "Find out the total liquidation preference ahead of common shares"
                - "Ask the agent to build a three-scenario exit payout table from your figures"
                - "Add one more round of dilution to the model"
            - name: Exercise tax traps such as AMT
              description: |-
                ## Purpose
                Some exercises create a tax bill even though nothing was sold, such as the alternative minimum tax on incentive stock options in the US, or income tax on the spread for many other options. Learning how the trap is triggered for your grants, and estimating it before exercising, is the difference between a planned exercise and a bill paid out of savings.

                ## Milestones
                1. The tax that can arise on exercise identified for each of your option types.
                2. A rough estimate of the tax on exercising 25, 50 and 100 percent of vested options.
                3. Any credit or carry-forward that can recover the tax later noted.
                4. Questions for a preparer listed before any exercise.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Estimated exercise tax at three exercise sizes is written down, with questions ready for a tax preparer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Identify the tax that applies on exercise for each option type you hold"
                - "Estimate the exercise tax at three different exercise sizes"
                - "Note any credit that can recover the tax in later years"
                - "List questions for a tax preparer before exercising"
            - name: Insider trading rules and pre-arranged trading plans
              description: |-
                ## Purpose
                Holding inside information, even without realising it, can make an ordinary sale unlawful, and senior staff often face extra restrictions. Pre-arranged plans, such as 10b5-1 plans in the US, let insiders schedule sales in advance and sell through blackouts, but they carry cooling-off periods and strict rules on changes.

                ## Milestones
                1. What counts as material non-public information under your policy written down.
                2. Whether a pre-arranged trading plan is available at your company confirmed.
                3. Cooling-off periods and modification rules noted.
                4. A decision recorded on whether a plan suits your situation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note summarises your insider obligations and whether a pre-arranged trading plan is available, with a recorded decision on using one."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what your policy treats as inside information"
                - "Ask the legal or equity team whether pre-arranged plans are offered"
                - "Note the cooling-off period and the rules on changing a plan"
                - "Record whether a pre-arranged plan suits you and why"
            - name: Sell or hold review of RSUs already held
              description: |-
                ## Purpose
                Many people end up with years of vested shares simply because nobody ever decided to sell them. Reviewing the shares already held, lot by lot, with their gain, the tax on sale and their role in your plan, gives a clear keep or sell answer for each block instead of a vague intention to deal with it later.

                ## Milestones
                1. All held lots listed with basis, current value and unrealised gain.
                2. The tax cost of selling each lot estimated.
                3. A keep or sell decision recorded for each lot with a reason.
                4. Sales carried out or scheduled for the next open window.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every held lot has a recorded keep or sell decision with its estimated sale tax, and the sales are done or scheduled."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every held lot with its basis and current value"
                - "Estimate the tax on selling each lot"
                - "Write keep or sell beside each lot with one reason"
                - "Schedule the chosen sales for the next open trading window"
            - name: Early exercise and 83(b) election decision
              description: |-
                ## Purpose
                Some private companies let you exercise options before they vest, and in the US an 83(b) election then fixes the taxable value at today's low price, but only if it is filed within 30 days of exercise. It can save a great deal if the company succeeds and lose the cash paid if it fails, so the choice deserves a written decision before any money moves.

                ## Milestones
                1. Whether your plan allows early exercise, and on what terms, confirmed.
                2. Cash needed and tax due now compared with the expected tax later.
                3. The downside written down: the money lost if the company fails or you leave before vesting.
                4. A decision recorded and, if exercising, the election filed with proof of filing saved.

                ## Notes
                The 30-day window cannot be extended. Send the election by a tracked method and keep the receipt with your equity paperwork. Other countries have different mechanisms, so ask a local adviser.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on early exercise exists, and if you exercised, the election was filed within 30 days with proof saved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the equity team whether early exercise is allowed"
                - "Calculate the cash and tax needed to exercise now"
                - "Write down how much you could lose if the company fails"
                - "Book a session with a tax adviser before deciding"
                - "Send any election by tracked post within 30 days and file the receipt"
            - name: Spreading option exercises across tax years
              description: |-
                ## Purpose
                Exercising every option in one year can push income into the top band or trigger a large exercise tax, while waiting risks a rising price or options expiring. Laying out a schedule that spreads exercises over several tax years, each sized to stay under a chosen threshold, balances those risks on paper before any cash is committed.

                ## Milestones
                1. Vested and soon-to-vest options listed in order of expiry.
                2. A yearly tax threshold chosen with your preparer.
                3. A schedule showing how many options to exercise in each of the next three years.
                4. The first year's exercise carried out or scheduled.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A three-year exercise schedule sized to a chosen yearly tax threshold is written, and the first year's exercise is done or booked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List vested and soon-to-vest options in order of expiry"
                - "Agree a yearly tax threshold with your preparer"
                - "Draft how many options to exercise in each of three years"
                - "Put the first year's exercise date in the calendar"
            - name: Staged diversification sale plan
              description: |-
                ## Purpose
                Selling a large concentrated holding in one go crystallises a big tax bill and invites regret if the price rises the next month. A staged plan that sells fixed tranches each quarter until the position is back under your ceiling spreads both tax and timing risk and takes the decision out of each individual day.

                ## Milestones
                1. The number of shares above your concentration ceiling worked out.
                2. A tranche size and quarterly schedule set, with the order of lots to sell chosen.
                3. Tax for each tranche estimated.
                4. Each tranche sold on schedule until the position is under the ceiling.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Quarterly tranches have been sold on schedule until employer stock is under the written concentration ceiling."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Work out how many shares sit above your concentration ceiling"
                - "Split the excess into equal quarterly tranches"
                - "Choose which lots to sell first and estimate their tax"
                - "Sell the next tranche while the trading window is open @recurring(quarterly)"
            - name: Destination plan for equity sale proceeds
              description: |-
                ## Purpose
                Cash from a vest or a sale tends to sit in the plan account or a current account and drift into everyday spending. Naming in advance where each future sum goes, and in what order, ties your equity directly to goals such as unpaid tax, the emergency fund, debt, a house deposit and long-term investments.

                ## Milestones
                1. An ordered list of destinations with target amounts.
                2. An account open and linked for each destination.
                3. A tax set-aside at the top of the list.
                4. The latest sale's proceeds moved in the planned order within a week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written priority list of destinations exists, and the latest sale's proceeds were moved within a week in that order."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the goals equity proceeds should fund, in priority order"
                - "Put a tax set-aside at the top of the list"
                - "Open or link an account for each destination"
                - "Move the next sale's proceeds within a week of settlement"
            - name: Funding an option exercise without overreaching
              description: |-
                ## Purpose
                Exercising private company options can demand tens of thousands in strike price and tax before a single share can be sold. Comparing the ways to fund it, from savings to a loan, a specialist exercise financing firm or a partial secondary sale, on real cost and risk prevents borrowing against an asset that may never become sellable.

                ## Milestones
                1. Total cash needed for strike and tax calculated.
                2. Three funding routes compared on cost, risk and what you give up.
                3. The worst case, shares worth nothing, tested against each route.
                4. A funding decision recorded, or a decision not to exercise.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three funding routes are compared in writing against a zero-value scenario, and a funding or no-exercise decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate total strike and tax for the exercise you are considering"
                - "Compare savings, a loan and an exercise financing firm on cost"
                - "Test each route against the shares becoming worthless"
                - "Record the funding decision and the reason for it"
            - name: Comparing equity in competing job offers
              description: |-
                ## Purpose
                Offers quote equity as a headline figure, often at the last preferred price, spread over four years, with different vesting, refresh policies and liquidity. Putting two or three offers onto the same basis, an annual expected value after tax with a discount for illiquidity, shows which one actually pays more.

                ## Milestones
                1. Each offer's equity converted to an annual value on the same pricing basis.
                2. Vesting shape, cliff, refresh policy and exercise window compared side by side.
                3. A discount applied to private company equity for risk and illiquidity.
                4. Questions put to each employer, with answers recorded before deciding.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side table converts each offer's equity to comparable annual value, and the questions put to each employer are answered in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each employer for share count, strike and the valuation used"
                - "Convert each offer's equity to an annual value on one basis"
                - "Compare vesting shape, refresh policy and exercise window side by side"
                - "Apply a risk discount to any private company equity"
            - name: ESPP holding period decision
              description: |-
                ## Purpose
                Some share purchase plans give better tax treatment if shares are held past a set period, such as qualifying dispositions in the US, but holding means carrying price risk for a year or two to save tax. Comparing the tax saved with how far the price could fall makes that trade-off explicit for every purchase.

                ## Milestones
                1. The holding period and tax difference for your plan written down.
                2. Tax saved by holding estimated for the latest purchase.
                3. The price fall that would wipe out the saving calculated.
                4. A sell or hold choice recorded for each purchase lot.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "For the latest ESPP purchase, the tax saved by holding and the break-even price fall are calculated and a choice is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the holding period and tax rules for ESPP shares"
                - "Estimate the tax saved by holding the latest purchase"
                - "Calculate the price fall that would cancel the saving"
                - "Record sell or hold for each purchase lot"
            - name: Leaving a job with unvested and unexercised equity
              description: |-
                ## Purpose
                On the last day, unvested shares are usually forfeited, and vested options often have a short post-employment window, commonly 90 days, after which they lapse. Planning the leaving date around vest dates, and deciding before resigning which options to exercise, is where people most often lose money they had already earned.

                ## Milestones
                1. Shares forfeited at each possible leaving date compared.
                2. The post-employment exercise window and its exact end date confirmed in writing.
                3. An exercise decision made and the cash to fund it in place before the last day.
                4. All documents downloaded and a personal email address set on the plan account.

                ## Notes
                Start from the **Operational checklist** template. Check whether options convert to a different type after a set period, which can change how they are taxed.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the last working day, the exercise window end date is confirmed in writing, exercise decisions are made and documents are saved."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Compare shares forfeited at three possible leaving dates"
                - "Get the post-employment exercise deadline confirmed in writing"
                - "Decide which vested options to exercise before the window closes"
                - "Switch the plan account to a personal email address"
            - name: Preparing for your employer's IPO
              description: |-
                ## Purpose
                A listing turns illiquid equity into tradable shares, usually after a lock-up of around six months, and often brings a jump in tax and a flood of opinions from friends. Preparing before the listing date, with your share count, the lock-up terms and the tax on settlement understood while things are calm, keeps the first trading day from becoming a scramble.

                ## Milestones
                1. Your share count, grant types and post-listing lock-up terms confirmed.
                2. Any RSUs waiting on a liquidity event, and when they settle, understood.
                3. A tax estimate for settlement prepared.
                4. A first outline of what you will do when the lock-up ends.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the listing, a written note covers share count, lock-up terms, a settlement tax estimate and an outline plan for the lock-up's end."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Save the company's employee briefing on the listing"
                - "Confirm the lock-up length and any early release terms"
                - "Estimate the tax due when double-trigger RSUs settle"
                - "Draft an outline of what you will do when the lock-up ends"
            - name: Lock-up expiry day plan
              description: |-
                ## Purpose
                When a lock-up ends, thousands of employees can sell at once and the price often moves sharply. Writing down the exact orders you will place, their sizes and price limits, a week before release stops the day being decided by headlines and the office group chat.

                ## Milestones
                1. Release date, trading window status and any staggered release confirmed.
                2. Order types, sizes and price limits written down.
                3. Tax set-aside for the planned sale calculated.
                4. Orders placed as written and the results logged.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Orders for the lock-up release were written a week ahead and placed as written, with results logged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the release date and whether it is staggered"
                - "Write the order types, sizes and limit prices you will use"
                - "Calculate the tax set-aside for the planned sale"
                - "Log the orders placed and the prices achieved"
            - name: When your employer is acquired
              description: |-
                ## Purpose
                An acquisition can convert your grants into the buyer's shares, cash them out, accelerate them or cancel options priced above the deal, and the details arrive in dense letters with short deadlines. Working through the treatment of each grant quickly shows what you will receive, when, and which choices are yours to make.

                ## Milestones
                1. The deal treatment of each grant type summarised from the official notice.
                2. Cash, new shares and new vesting dates calculated for each grant.
                3. Every election and its deadline in the calendar.
                4. Any retention grant or new agreement read before signing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written summary shows what each grant becomes in the deal, with every election submitted before its deadline."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Save the official equity treatment notice from the deal"
                - "Calculate what each grant converts into"
                - "Add every election deadline to the calendar"
                - "Read any new retention agreement before signing it"
            - name: Tender offer or secondary sale decision
              description: |-
                ## Purpose
                Private companies sometimes let employees sell a slice of their shares to investors in a tender offer, with a short window and a cap on how much each person can sell. Deciding how much to sell, given concentration, tax and how long until the next chance, needs a quick but deliberate process before the window closes.

                ## Milestones
                1. Price, cap, eligibility and closing date of the offer written down.
                2. Tax on selling vested shares, or exercising and selling, estimated.
                3. A target amount chosen against your concentration ceiling.
                4. The tender submitted or declined before the deadline, with the reason recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A tender participation decision, with amount and reason, is recorded and submitted before the offer closes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the tender price, cap and closing date"
                - "Estimate the tax on each way of taking part"
                - "Choose how many shares to offer against your concentration ceiling"
                - "Submit or decline the tender and note why"
            - name: Equity year tax return pack
              description: |-
                ## Purpose
                A year with vests, exercises and sales produces several forms that rarely agree with each other at first glance. Assembling a pack for your preparer, with income already on payroll forms, broker reports and your basis adjustments explained, cuts preparation fees and catches the double counting that inflates many returns.

                ## Milestones
                1. Payroll year-end forms, broker tax forms and supplemental basis reports collected.
                2. Every sale matched to a lot with the correct basis.
                3. A one-page cover note listing vests, exercises, sales and adjustments.
                4. The pack handed to your preparer before their client deadline.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete equity tax pack with a cover note is handed to your preparer before their client deadline each year."
                cadence: cyclic
              tasks:
                - "Gather the year's equity forms into a preparer pack"
                - "Match every sale to a lot with its correct basis"
                - "Ask the agent to draft a cover note summarising vests, exercises and sales"
                - "Send the pack to your preparer before their client deadline @recurring(yearly)"
            - name: Startup engineer's equity plan
              description: |-
                ## Purpose
                Joining an early-stage company usually means trading salary for options in a business that may never sell, may sell for less than its preferences or may take ten years to get there. Treating the options as a high-risk bet rather than a pension, with rent, savings and retirement funded from salary alone, lets you enjoy the upside without depending on it.

                ## Milestones
                1. Personal finances checked to work on salary alone, with no equity counted.
                2. Questions about share count, preferences and cash runway asked and answered.
                3. A limit set on cash you would ever spend exercising.
                4. Equity value updated each year from the latest valuation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written plan shows your finances work on salary alone, with an exercise spending limit and answers to the standard equity questions on file."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Rebuild your budget assuming the equity is worth nothing"
                - "Ask for total shares outstanding, preferences and cash runway"
                - "Set a ceiling on cash you would ever spend exercising"
                - "Update the equity value from the latest valuation @recurring(yearly)"
            - name: Large RSU income at a listed tech company
              description: |-
                ## Purpose
                For many engineers and managers at large listed companies, RSUs make up a third or more of pay and vest monthly or quarterly into one stock. Treating each vest as salary paid in shares, with the tax covered and proceeds moved on a schedule, keeps a high income from quietly becoming a single-stock bet.

                ## Milestones
                1. The share of total pay coming from RSUs calculated.
                2. A monthly transfer of vest proceeds to their planned destination running.
                3. The tax gap from flat withholding covered automatically.
                4. Six months of vests handled without unplanned shares building up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months of vests show proceeds moved on schedule, tax covered and no build-up of unplanned shares."
                cadence: rolling
              tasks:
                - "Calculate RSUs as a share of your total pay"
                - "Transfer the month's vest proceeds to their destination @recurring(monthly:20)"
                - "Raise withholding or a savings transfer to cover the tax gap"
                - "Check held shares for any build-up after six months"
            - name: Founder share vesting and early tax elections
              description: |-
                ## Purpose
                Founders often hold restricted shares under reverse vesting set by investors, and in some countries an early tax election on those shares must be filed within weeks. Getting the vesting terms, any acceleration and the election right at the start protects what is often the largest asset a founder will ever own.

                ## Milestones
                1. Your share purchase agreement and vesting terms saved and summarised.
                2. Any early tax election filed within its deadline, with proof saved.
                3. Acceleration terms on a sale or removal from the company written down.
                4. Founder holdings checked against the cap table once a year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Founder vesting terms are summarised, any early election is filed with proof, and holdings are reconciled to the cap table each year."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Save the share purchase agreement and summarise the vesting terms"
                - "Confirm with the company lawyer whether an early tax election applies"
                - "Write down acceleration terms on a sale or removal"
                - "Reconcile your holdings with the cap table @recurring(yearly)"
            - name: Two-employee household equity plan
              description: |-
                ## Purpose
                When both partners hold equity, often in the same industry and sometimes the same company, the household's concentration and tax are higher than either person's sheet suggests. Putting both partners' grants on one view, with a joint ceiling and agreed sale rules, stops one person's diversification being cancelled out by the other's holding.

                ## Milestones
                1. Both partners' grants on one combined summary.
                2. Combined exposure to one company and one sector calculated.
                3. A joint ceiling and sale rules agreed.
                4. A yearly joint review held.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A combined equity summary and an agreed household concentration ceiling exist, with a joint review held in the last year."
                cadence: cyclic
              tasks:
                - "Merge both partners' grants onto one summary"
                - "Calculate combined exposure to one company and one sector"
                - "Agree a joint ceiling and sale rules"
                - "Hold a joint equity review @recurring(yearly)"
            - name: Relocating abroad with unvested equity
              description: |-
                ## Purpose
                Moving countries while shares are still vesting can mean two tax authorities each claiming part of the same vest, usually apportioned by the days you worked in each place. Planning the move with your employer's mobility team and a cross-border adviser, and keeping a workday record, avoids paying tax twice on the same shares.

                ## Milestones
                1. Both countries' treatment of unvested grants summarised with an adviser.
                2. A day count of where you worked kept from the start of each open grant.
                3. Payroll and withholding set correctly in both places.
                4. Relief for double tax claimed on the first vest after the move.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cross-border equity summary from an adviser exists, a workday log covers every open grant and the first vest after the move is taxed once."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the mobility team how they handle equity for people moving abroad"
                - "Start a log of workdays by country for each open grant"
                - "Book a cross-border tax adviser before the move date"
                - "Check the first vest after the move for double withholding"
            - name: Parental leave, sabbatical and vesting
              description: |-
                ## Purpose
                Many plans pause or slow vesting during unpaid or long leave, and some change exercise windows if you move to part-time hours. Checking the policy before a parental leave, sabbatical or reduced week lets you time the leave around vest dates rather than discovering a shifted schedule afterwards.

                ## Milestones
                1. The leave of absence and part-time clauses found in the plan.
                2. The effect of your planned leave on each vest date calculated.
                3. The answer confirmed in writing by HR or the equity team.
                4. The vesting calendar updated for any new dates.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The effect of your planned leave on each grant is confirmed in writing by HR and reflected in the vesting calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the leave of absence and part-time clauses in the plan"
                - "Calculate how the planned leave shifts each vest date"
                - "Get the answer confirmed in writing by HR"
                - "Update the vesting calendar with any shifted dates"
            - name: Annual equity planning session with a tax adviser
              description: |-
                ## Purpose
                Once equity is a large part of your wealth, an annual meeting with a tax adviser before year end usually pays for itself, because exercise sizing, sale timing, advance payments and next year's vests all interact. Sending the summary sheet, lot list and questions ahead turns an expensive hour into a decision meeting.

                ## Milestones
                1. An adviser chosen who regularly works with equity compensation.
                2. A pre-read sent a week ahead with grants, lots, income so far and questions.
                3. Decisions for the rest of this year and next year recorded with owners and dates.
                4. The meeting held at least six weeks before the tax year ends.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A pre-read was sent and decisions recorded at an adviser meeting held at least six weeks before the tax year ends."
                cadence: cyclic
              tasks:
                - "Shortlist advisers who regularly work with equity compensation"
                - "Send the summary sheet, lot list and questions a week ahead"
                - "Record decisions, owners and dates in the meeting notes"
                - "Book the year's session well before the tax year ends @recurring(yearly)"
            - name: Hedging and exchange fund options for a large position
              description: |-
                ## Purpose
                Holders of very large positions, often with big unrealised gains, sometimes use collars, prepaid forwards or exchange funds to cut risk without an immediate taxable sale. These tools carry costs, lock-ups and policy limits, since many employers ban hedging their own stock, so they belong in a researched decision with a specialist rather than a sales pitch.

                ## Milestones
                1. Your employer's hedging and pledging policy checked.
                2. Minimums, fees and lock-up terms of each tool listed.
                3. A comparison with a staged sale plan prepared.
                4. A decision recorded with a specialist's input.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of hedging tools against a staged sale, checked against company policy, ends in a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the company policy on hedging and pledging shares"
                - "List minimums, fees and lock-ups for collars and exchange funds"
                - "Compare each tool with a staged sale plan"
                - "Record the decision after speaking with a specialist"
            - name: Holding periods for startup share tax reliefs
              description: |-
                ## Purpose
                Several countries reward holding qualifying startup shares for a set period, such as the US qualified small business stock exclusion or the UK's EMI relief rules, but only if conditions are met from the day of acquisition. Tracking the start date, the holding period and the company's continuing eligibility for each lot keeps a potentially large relief from being lost to a missing letter.

                ## Milestones
                1. Lots that may qualify for a relief listed with acquisition dates.
                2. The holding period end date for each lot in the calendar.
                3. Written confirmation of company eligibility requested and saved.
                4. Eligibility evidence filed with the lot records.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every potentially qualifying lot has its holding period end date in the calendar and eligibility evidence on file."
                cadence: rolling
              tasks:
                - "List lots that might qualify for a startup share relief"
                - "Add each lot's holding period end date to the calendar"
                - "Request written confirmation of eligibility from the company"
                - "Check the eligibility file for gaps @recurring(yearly)"
            - name: Executive share ownership and disclosure duties
              description: |-
                ## Purpose
                Senior leaders at listed companies often face share ownership guidelines, public disclosure of their trades and expectations to sell only through pre-arranged plans. Keeping a yearly record of holdings against the guideline, every filing made on time and the sale plan in force protects both reputation and the ability to diversify.

                ## Milestones
                1. The ownership guideline and the deadline to meet it written down.
                2. Holdings counted against the guideline each year.
                3. Disclosure deadlines for trades known and assigned to someone.
                4. A pre-arranged sale plan in place, or a decision not to use one recorded.

                ## Notes
                Start from the **Compliance control** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly record shows holdings against the ownership guideline, every trade disclosed on time and the status of a sale plan."
                cadence: cyclic
              tasks:
                - "Write down your ownership guideline and its deadline"
                - "Count holdings that qualify toward the guideline @recurring(yearly)"
                - "Agree who files trade disclosures and by when"
                - "Decide with counsel whether to adopt a pre-arranged sale plan"
---

# Employee Stock Options & RSUs

This area is for engineers, knowledge workers and founders paid partly in shares, options or a share purchase plan, who want to understand what they hold and decide on purpose rather than by default. It starts with the foundations (paperwork, a summary sheet, vest dates, grant types, the plan account, after-tax value, withholding, cost basis and a standing rule for new vests), then the routines that run alongside vesting, the skills of reading plans and exercising options, the sell, hold and exercise decisions, dated events such as leaving, a listing or a takeover, situations for startup engineers, big-company RSU holders, founders, couples and people moving abroad, and finally specialist work on hedging, share reliefs and executive duties.

What repeats is a check after every vest, a monthly position snapshot, quarterly checks of trading windows, concentration and advance tax, a monthly scan for expiring options, and yearly rhythms for refresh grants, the paperwork archive, the tax pack and an adviser session. The Operational checklist, Metrics log, Risk register, Meeting notes and Compliance control templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
