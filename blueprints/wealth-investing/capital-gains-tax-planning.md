---
id: wealth-investing.capital-gains-tax-planning
name: Capital Gains Tax Planning
description: "A complete cost record for every taxable holding, a running total of realised gains, year-end allowance and loss decisions, and property and share sales reported and paid on time."
category: personal
version: 1.0.0
tags: [wealth-investing, capital-gains-tax-planning, everyone, capital-gains, cost-basis, tax-loss-harvesting, allowances, property-sale]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - operational-checklist
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Capital Gains Tax Planning
          description: "Using allowances, timing sales and tax-loss harvesting to manage capital gains tax on investments and property."
          projects:
            - name: Taxable holdings inventory for capital gains
              description: |-
                ## Purpose
                Capital gains tax only reaches assets held outside tax shelters, so the first job is knowing exactly which holdings sit in ordinary investment accounts, which properties are not your main home, and what you hold directly in your own name. One inventory, with each holding's account, quantity and purchase years, shows where gains can arise and which accounts every later project needs to cover.

                ## Milestones
                1. Every general investment account, share certificate, directly held fund and second property listed in one place.
                2. Each holding marked with its account, quantity and the year or years it was bought.
                3. Holdings already inside tax-free or tax-deferred accounts marked as out of scope.
                4. A rough current value beside each taxable holding.

                ## Notes
                Include paper share certificates and old employee share plan accounts. They are the holdings most often forgotten until the day they are sold.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single inventory lists every taxable holding with account, quantity, purchase year and current value, with sheltered accounts excluded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every account that is not a pension or tax-free wrapper"
                - "Search the house for paper share certificates and old plan statements"
                - "Record quantity and purchase year for each taxable holding"
                - "Add a current value from the latest statement for each line"
            - name: Cost basis reconstruction for older holdings
              description: |-
                ## Purpose
                Without the original purchase price a gain cannot be worked out, and a tax authority may treat an unproven cost as zero. Holdings bought years ago, moved between brokers or built up through monthly savings plans are where the gaps usually sit, and closing them now is far easier than in the fortnight before a sale.

                ## Milestones
                1. Every taxable holding has a recorded acquisition cost or a note explaining how it was estimated.
                2. Contract notes, old statements or broker transfer records requested for each gap.
                3. Regular monthly purchases added up into one pooled cost per holding where your rules use pooling.
                4. Any estimated cost marked as such, with the method and source written beside it.

                ## Notes
                Brokers often lose cost history when an account is transferred. Ask the old broker for a full transaction history before you lose access to it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each taxable holding in the inventory shows an acquisition cost with its source, and no holding is left with an unknown cost."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Mark each holding in the inventory where the purchase cost is unknown"
                - "Request full transaction histories from current and former brokers"
                - "Add up regular savings plan purchases into one cost per holding"
                - "Write the source of each cost figure beside it"
            - name: Capital gains rules summary for where you pay tax
              description: |-
                ## Purpose
                Rates, the yearly tax-free allowance, holding period rules and reporting thresholds vary widely between countries and change with budgets, so plans built on half-remembered rules go wrong. A one-page summary in your own words, checked against the tax authority's guidance, gives every later decision in this area a fixed reference point.

                ## Milestones
                1. The current rates for gains on shares and on property written down for your income band.
                2. The annual tax-free allowance or exemption and the rules for using losses noted.
                3. Any holding period that changes the rate, and any rule about buying back the same asset, recorded.
                4. Reporting and payment deadlines for gains copied from official guidance.
                5. The summary dated, with the source pages listed.

                ## Notes
                Use the tax authority's own pages rather than forums. Rules for property, shares and cryptoassets can differ within the same country.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A dated one-page summary of rates, allowance, holding periods, repurchase rules and deadlines exists, each with an official source."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the tax authority's main guidance page on capital gains"
                - "Write the rates for shares and property in your income band"
                - "Note the annual allowance, loss rules and any holding period rule"
                - "Recheck the summary after each budget or tax announcement @recurring(yearly)"
            - name: Unrealised gains and losses snapshot
              description: |-
                ## Purpose
                Most people know what their portfolio is worth but not how much of it is taxable gain, which is the number that decides whether a sale is cheap or expensive. Setting today's value against the recorded cost of each holding shows where the large gains are concentrated, which positions are below cost, and how much of the allowance a sale would use.

                ## Milestones
                1. Each taxable holding shows cost, current value and the gain or loss in money and as a percentage.
                2. The total unrealised gain and total unrealised loss across all taxable accounts calculated.
                3. The three largest gains and every position below cost highlighted.
                4. The snapshot saved with today's date for comparison next year.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated snapshot shows cost, value and unrealised gain or loss for each taxable holding, with totals for gains and losses."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add a current value column beside each cost in the inventory"
                - "Calculate the gain or loss on every taxable holding"
                - "Highlight the three largest gains and every holding below cost"
                - "Save the snapshot with today's date in the file name"
            - name: Capital loss carry-forward register
              description: |-
                ## Purpose
                Losses from earlier years can often reduce future gains, but many tax systems only let you use them if they were reported or claimed within a time limit, sometimes as short as four years. A register of every past loss, the year it arose and whether it has been claimed stops a valuable offset from expiring unused.

                ## Milestones
                1. Losses from recent tax years identified from returns and broker reports.
                2. Each loss recorded with the asset, tax year, amount and claim status.
                3. Unclaimed losses still inside the claim window listed with their deadline.
                4. Any late claim submitted or raised with an adviser.

                ## Notes
                Some systems make you set losses against gains before the annual allowance is applied. Check the order your rules use before planning around a loss.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every capital loss from recent years with tax year, amount and claim status, and no claimable loss is past its deadline."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pull the capital gains pages from your last four tax returns"
                - "Record each loss with asset, year, amount and whether it was claimed"
                - "Submit claims for any losses still inside the time limit"
                - "Add the year's new realised losses to the register @recurring(yearly)"
            - name: Contract notes and disposal records archive
              description: |-
                ## Purpose
                Tax authorities can usually ask about a gain for several years after the return, and the evidence they want is the purchase contract note, the sale contract note and anything that changed the cost in between. One folder per holding means any sale can be proved in minutes instead of reconstructed from memory.

                ## Milestones
                1. One folder per taxable holding, holding its purchase and sale contract notes.
                2. Corporate action letters and dividend reinvestment statements filed with the holding they affect.
                3. Records for holdings sold in recent years kept for the retention period your tax authority sets.
                4. A backup copy stored somewhere other than your main computer.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every taxable holding has a folder with its purchase records, and sold holdings keep their records for the official retention period, with a backup."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create one folder per taxable holding in your document storage"
                - "Download contract notes from each broker's document area"
                - "Check how long your tax authority expects records to be kept"
                - "Copy the whole archive to a second location"
            - name: Income band check before realising gains
              description: |-
                ## Purpose
                In many systems the rate on a gain depends on your other income that year, so a sale in a year with a bonus, a pension lump sum or a property sale can land at a higher rate than the same sale a year later. Estimating this year's taxable income early shows how much room is left in a lower band before gains spill into a higher one.

                ## Milestones
                1. This tax year's expected salary, self-employment, rental and investment income estimated.
                2. The lower-band room remaining for gains worked out, where your system has bands.
                3. The estimate written beside the realised gains running total.
                4. Any expected change in income noted, with the date to revisit the estimate.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated estimate of this year's taxable income and the remaining lower-rate room for gains is kept with the gains records."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up this year's expected income from every source"
                - "Compare the total with the band thresholds in your rules summary"
                - "Write down how much gain fits within the lower band this year"
                - "Note any bonus, lump sum or property sale that could change the picture"
            - name: Tax adviser review of your gains position
              description: |-
                ## Purpose
                Straightforward share sales can be handled alone, but property disposals, large one-off gains, residency changes and losses from failed investments benefit from an hour with a qualified adviser before the sale rather than after it. Arriving with the inventory, the snapshot and the year's planned sales makes that hour cheap and specific.

                ## Milestones
                1. A decision recorded on whether your situation needs an adviser this year.
                2. A tax adviser with personal capital gains experience identified and their fee confirmed.
                3. The inventory, snapshot and planned sales sent ahead of the meeting.
                4. The adviser's recommendations written up and acted on.

                ## Notes
                Start from the **Meeting notes** template. Ask for any recommendation that matters to be confirmed in writing.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A meeting with a qualified tax adviser is held before the year's major sales, with written notes of what was agreed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the sales and situations you are unsure how to handle"
                - "Find two advisers who handle personal capital gains and compare fees"
                - "Send your inventory and planned sales before the meeting"
                - "Book a review before any large planned sale @recurring(yearly)"
            - name: Tax year calendar for gains and reporting
              description: |-
                ## Purpose
                Three dates do most of the work in this area: the day the tax year ends, the date gains must be reported and the date the tax must be paid, plus any short deadline that applies to property sales. Putting them in the calendar with reminders a few weeks ahead turns year-end planning into a routine instead of a scramble.

                ## Milestones
                1. The tax year end, reporting deadline and payment deadline entered in your calendar.
                2. Any special short deadline for property disposals noted.
                3. Reminders set six weeks before the tax year ends and a month before each deadline.
                4. Every entry set to repeat each year.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Repeating calendar entries with reminders exist for tax year end, the gains reporting deadline, the payment deadline and any property sale deadline."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your tax year end and the gains reporting deadline"
                - "Find the payment deadline and any short property sale deadline"
                - "Add each date to your calendar with a reminder a month ahead"
                - "Add a reminder six weeks before the tax year ends"
            - name: Disposal log kept as sales happen
              description: |-
                ## Purpose
                Every sale, switch between funds, gift of shares and transfer of property counts as a disposal, and fund switches inside a taxable account are the ones people forget. Logging each disposal within days, with date, quantity, proceeds, costs and the matched cost, means the year's total is always known and the return takes an evening rather than a weekend.

                ## Milestones
                1. A log with columns for date, asset, quantity, proceeds, costs, matched cost and gain.
                2. Every disposal this tax year entered, including fund switches and gifts.
                3. Each entry linked to its contract note in the archive.
                4. The log checked monthly against broker activity for missing sales.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every disposal in the current tax year appears in the log within a month of the sale, with its gain calculated."
                cadence: rolling
              tasks:
                - "Set up the disposal log with the columns listed in the milestones"
                - "Enter every disposal made so far this tax year"
                - "Check broker activity for sales missing from the log @recurring(monthly:12)"
            - name: Quarterly realised gains running total
              description: |-
                ## Purpose
                Gains build up quietly across accounts, and finding out at year end that the allowance was used in the spring leaves no room to plan. A quarterly total of realised gains and losses, set against the allowance and any carried-forward losses, shows how much room is left while there is still time to act on it.

                ## Milestones
                1. A running total of realised gains and losses for the tax year, updated every quarter.
                2. The remaining allowance shown after each update.
                3. Carried-forward losses available shown alongside.
                4. Four quarterly updates completed in one tax year.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly totals of realised gains and losses are recorded in one tax year, each showing the allowance remaining."
                cadence: rolling
              tasks:
                - "Create the running total log from the metrics log template"
                - "Total the quarter's realised gains and losses from the disposal log @recurring(quarterly)"
                - "Write the remaining allowance beside each quarterly total"
            - name: Year-end allowance and loss decisions
              description: |-
                ## Purpose
                The last six weeks of the tax year are when unused allowances can still be captured and losses crystallised, and in most systems both vanish at midnight on the final day. Working through a fixed checklist each year, using the running total and the snapshot, turns a rushed guess into three or four deliberate trades or a considered decision to do nothing.

                ## Milestones
                1. Realised gains and losses to date confirmed from the running total.
                2. Unused allowance and available losses calculated.
                3. Any harvesting sales chosen, with repurchase rules checked, and placed before the deadline.
                4. The year's decisions and their reasoning written down.

                ## Notes
                Start from the **Operational checklist** template. Trades take time to settle, so check whether your system counts the trade date or the settlement date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A completed year-end checklist is dated before the tax year closes, with each harvesting trade or decision not to trade recorded."
                cadence: cyclic
              tasks:
                - "Build the year-end checklist from the operational checklist template"
                - "Work through the checklist six weeks before the tax year ends @recurring(yearly)"
                - "Confirm whether the trade date or settlement date decides the tax year"
                - "Write down each year-end decision and the reason for it"
            - name: Reinvested dividends and fund distributions in cost basis
              description: |-
                ## Purpose
                Dividends reinvested into more shares, and the income credited to accumulation fund units, usually add to your cost for gains purposes, yet broker reports often leave them out. Missing them overstates every future gain, so each reinvestment and accumulation statement needs adding to the cost record as it arrives.

                ## Milestones
                1. Holdings that reinvest dividends or hold accumulation units identified.
                2. Each reinvestment added to the holding's quantity and cost.
                3. Annual accumulation statements from fund managers collected and added.
                4. Cost records reconciled with broker quantities once a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every reinvested dividend and accumulated distribution for the current year is added to its holding's cost record."
                cadence: rolling
              tasks:
                - "Mark which holdings reinvest dividends or are accumulation units"
                - "Add the quarter's reinvested dividends to quantity and cost @recurring(quarterly)"
                - "Download annual fund manager statements showing accumulated income"
            - name: Annual capital gains return and payment
              description: |-
                ## Purpose
                Reporting gains is often a separate section of the tax return or its own form, and it needs every disposal, its computation and any loss claims ready before the deadline. Preparing the figures well ahead, and fixing the payment date in the calendar, avoids late filing penalties and interest on unpaid tax.

                ## Milestones
                1. The disposal log closed for the tax year and its totals checked.
                2. A computation for each disposal attached or kept ready to send if asked.
                3. Gains and loss claims entered on the return and submitted before the deadline.
                4. The tax due paid on time and the payment reference saved.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "The capital gains section of the return is submitted and the tax paid before both deadlines, with copies filed."
                cadence: cyclic
              tasks:
                - "Close the disposal log for the tax year and check the totals @recurring(yearly)"
                - "Enter the gains and any loss claims on the tax return"
                - "Pay the tax due and save the payment reference"
                - "File a copy of the submitted return with the year's records"
            - name: Broker tax statement reconciliation
              description: |-
                ## Purpose
                Broker gains reports are a helpful starting point but are often wrong: they miss transferred-in cost, ignore repurchase matching rules or use a cost method your tax authority does not accept. Comparing the broker's figures with your own log each year catches the differences before they reach the return.

                ## Milestones
                1. Annual tax statements downloaded from every broker.
                2. Each disposal compared between the broker statement and your log.
                3. Every difference explained and the correct figure chosen.
                4. Recurring errors reported to the broker for correction.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each broker's annual statement is reconciled against the disposal log, with every difference explained in writing."
                cadence: cyclic
              tasks:
                - "Download the annual tax statement from each broker @recurring(yearly)"
                - "Compare every disposal with the matching line in your log"
                - "Write a one-line explanation for each difference"
                - "Ask the broker to correct missing cost history on transferred holdings"
            - name: Corporate actions and cost basis adjustments
              description: |-
                ## Purpose
                Share splits, consolidations, mergers paid in shares and cash, spin-offs and rights issues all change the cost or quantity of what you hold, and some create a small disposal of their own. Recording each one when the notice arrives, with how the cost was split, saves hours of detective work when the holding is finally sold.

                ## Milestones
                1. A corporate actions page in each affected holding's folder.
                2. Each split, merger, spin-off or rights issue recorded with date and terms.
                3. Cost reallocated between old and new holdings using the company's published apportionment where one exists.
                4. Any cash received on a corporate action treated correctly, with the treatment noted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every corporate action affecting a taxable holding in the past year is recorded with its effect on cost and quantity."
                cadence: rolling
              tasks:
                - "Check broker messages for corporate action notices @recurring(monthly:3)"
                - "Record the terms of each action in the holding's folder"
                - "Find the company's published cost apportionment for any spin-off"
                - "Adjust quantity and cost in the inventory after each action"
            - name: Tax reserve set aside from each sale
              description: |-
                ## Purpose
                Gains tax is often due many months after the sale, by which time the proceeds have been reinvested or spent. Moving an estimated share of every taxable gain into a separate savings account on the day of the sale means the bill is already covered when the payment date arrives.

                ## Milestones
                1. A separate savings account chosen for gains tax.
                2. A set-aside rate agreed for gains above the allowance, based on your expected rate.
                3. Money moved to the reserve after each sale with a taxable gain.
                4. The reserve balance checked against estimated tax every month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The gains tax reserve holds at least the estimated tax on all gains realised so far this tax year."
                cadence: rolling
              tasks:
                - "Open or label a savings account for the gains tax reserve"
                - "Pick a set-aside rate from your expected gains tax rate"
                - "Move the set-aside amount on the day of any sale with a gain"
                - "Compare the reserve with the estimated tax due @recurring(monthly:20)"
            - name: Repurchase rule check before buying back
              description: |-
                ## Purpose
                Selling at a loss and buying the same thing straight back often does not create a usable loss, because many systems match the sale to a repurchase made within roughly 30 days. A short check before any buy-back, against a list of assets sold in the last month, keeps harvesting trades from quietly undoing themselves.

                ## Milestones
                1. The repurchase or matching rule for your system written down, with the period it covers.
                2. A list of assets sold in the last month kept beside the disposal log.
                3. Purchases in other accounts, and a partner's accounts where your rules include them, checked as well.
                4. A list of similar but not identical replacements for your main holdings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No purchase in the past year was matched by a repurchase rule against a recent loss sale without that being intended."
                cadence: rolling
              tasks:
                - "Write down the repurchase matching period for your tax system"
                - "Keep a list of assets sold in the last 30 days"
                - "Check the list before every purchase in any account"
                - "Ask whether a partner's purchases count under your rules"
            - name: Property improvement cost file
              description: |-
                ## Purpose
                For a second home or rental property, money spent on lasting improvements such as an extension or a new kitchen can usually be added to the cost, while repairs and maintenance cannot. Keeping invoices and a running list from the day of purchase avoids hunting for a builder's receipt from fifteen years ago when the property is finally sold.

                ## Milestones
                1. Purchase costs such as legal fees and transfer taxes recorded for each property.
                2. Every improvement invoice filed with a one-line description.
                3. Each spend marked as improvement or repair, with uncertain ones flagged for an adviser.
                4. A running total of allowable improvement costs kept.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A file for each property that is not your main home holds purchase costs and improvement invoices, with a running total of allowable costs."
                cadence: rolling
              tasks:
                - "Find the purchase completion statement for each property"
                - "Scan improvement invoices into the property's folder"
                - "Mark each spend as an improvement or a repair"
                - "Add the year's improvement spend to the running total @recurring(yearly)"
            - name: Share matching and pooling rules
              description: |-
                ## Purpose
                When you sell part of a holding bought at different times, the rules decide which purchase the sale is matched against, and that can swing the gain substantially. Some systems pool all purchases at an average cost, others let you pick specific lots or default to first in, first out. Learning your system's order with a worked example from your own holdings makes every later computation trustworthy.

                ## Milestones
                1. Your system's matching order written down in plain words.
                2. A worked example completed using a holding bought in several purchases.
                3. The difference between your system's method and the broker's default understood.
                4. The method recorded at the top of the disposal log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written explanation of your matching rules exists with one worked example from your own holdings, checked against official guidance."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the tax authority's guidance on matching and pooling shares"
                - "Choose a holding bought in at least three separate purchases"
                - "Work out the cost of a partial sale using your system's rules"
                - "Write the matching method at the top of the disposal log"
            - name: Lot selection method set at each broker
              description: |-
                ## Purpose
                Where your tax system lets you choose which shares you sold, the broker's default method decides for you unless you change it, and the default is rarely the one that suits you. Setting the method deliberately in each account, and knowing how to pick specific lots when selling, puts the size of each gain in your hands.

                ## Milestones
                1. The cost methods each broker offers listed.
                2. A default method chosen and set in each account's tax settings.
                3. The steps for choosing specific lots on a sale written down per broker.
                4. The choice confirmed as allowed under your tax rules.

                ## Notes
                In pooled systems such as the UK's, lot selection does not apply, and the broker's reporting method should simply match the pooling rules.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each taxable account has a deliberately chosen cost method set, recorded alongside the steps to select lots on a sale."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the cost method setting in each broker account"
                - "Check which cost methods your tax rules allow"
                - "Set the chosen default method in each account"
                - "Write down how to select specific lots when placing a sale"
            - name: Reading a broker realised gains report
              description: |-
                ## Purpose
                Realised gains reports are dense, mix short and long holding periods, and often show lots with missing cost as zero. Learning to read one line by line, with a recent statement in front of you, turns it from a figure you copy onto the return into one you can check.

                ## Milestones
                1. Each column on your broker's report understood and labelled.
                2. Lines with missing or adjusted cost identified.
                3. Holding period categories matched to your rules summary.
                4. Five lines traced back to their contract notes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One realised gains report has been traced back to contract notes for at least five lines, with any errors listed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Download last year's realised gains report from your main broker"
                - "Label every column in your own words"
                - "Trace five lines back to their purchase and sale contract notes"
                - "List any lines with missing cost or unexpected adjustments"
            - name: Currency conversion in gain calculations
              description: |-
                ## Purpose
                Shares bought and sold in a foreign currency usually have to be converted at the exchange rate on each date, so a gain in dollars can be a loss in your home currency, or the reverse. Working two real examples shows how much currency moves affect your taxable figures and which rate source your tax authority accepts.

                ## Milestones
                1. The exchange rate source your tax authority accepts identified.
                2. Cost and proceeds of one foreign holding converted at the rate on each date.
                3. The gain in your home currency compared with the gain in the foreign currency.
                4. A conversion column added to the disposal log for foreign holdings.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two foreign currency disposals are converted at the correct dated rates, with the method recorded in the disposal log."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find which exchange rate source your tax authority accepts"
                - "Convert the cost of one foreign holding at the purchase date rate"
                - "Convert its sale proceeds at the sale date rate"
                - "Add a currency conversion column to the disposal log"
            - name: Three practice gain computations from past sales
              description: |-
                ## Purpose
                Reading rules is not the same as applying them, and your first real computation should not be the one going on the return. Working three past sales through by hand, one simple, one with several purchases and one at a loss, builds the skill and shows where your records are thin.

                ## Milestones
                1. A simple single-purchase sale computed from its contract notes.
                2. A sale from a holding built over several purchases computed with your matching rules.
                3. A loss-making sale computed and its use against gains shown.
                4. Gaps in records found during the exercise listed and fixed.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three computations are completed by hand, each matching the broker's figure or with the difference explained."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick three past sales: one simple, one multi-purchase, one at a loss"
                - "Compute the simple sale from its two contract notes"
                - "Work the multi-purchase sale using your matching rules"
                - "Compare each answer with the broker's figure"
            - name: Allowable costs that reduce a gain
              description: |-
                ## Purpose
                Dealing commission, transfer taxes, legal fees on property and the cost of lasting improvements can usually be deducted, while platform fees, interest and repairs often cannot. Knowing the difference stops you overpaying on a property sale and claiming deductions that will not survive a question from the tax authority.

                ## Milestones
                1. A list of costs your system allows against gains on shares.
                2. A separate list for property disposals.
                3. Costs commonly mistaken as allowable noted.
                4. Missed allowable costs added to past entries in the disposal log.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two written lists of allowable costs, one for shares and one for property, each sourced from official guidance."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read official guidance on costs allowed against gains"
                - "List allowable costs for shares and for property separately"
                - "Note fees and expenses that are not allowed"
                - "Add missed dealing costs to past entries in the disposal log"
            - name: Tax-loss harvesting review
              description: |-
                ## Purpose
                Holdings below their cost can be sold to realise a loss that offsets gains this year or later, with the money reinvested in something similar so the portfolio's shape barely changes. A structured review, with repurchase rules checked and a replacement chosen in advance, captures the loss without sitting in cash through a rebound.

                ## Milestones
                1. Positions trading below cost listed with the size of each loss.
                2. A similar but not identical replacement chosen for each candidate.
                3. Sales and replacement purchases placed on the same day where your rules allow.
                4. Harvested losses added to the disposal log and the loss register.

                ## Notes
                A harvested loss is only worth having if you expect gains to use it against. Small losses on a portfolio with no gains planned may not justify the dealing costs.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every position below cost has been reviewed, and each harvesting sale is recorded with its replacement and loss amount."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every taxable holding currently below its cost"
                - "Choose a similar but not identical replacement for each candidate"
                - "Check the repurchase rule before placing any harvesting trade"
                - "Scan for new positions below cost @recurring(quarterly)"
            - name: Annual gain harvesting within the allowance
              description: |-
                ## Purpose
                Where a yearly tax-free allowance exists, any part left unused is usually lost for good. Selling enough of a holding with gains to use it, then rebuying after the matching period or inside a tax shelter, raises your recorded cost and shrinks the gain that will eventually be taxed.

                ## Milestones
                1. The unused allowance for the year calculated from the running total.
                2. Holdings with gains chosen to fill it, leaving a small margin for error.
                3. The sale placed before year end and the rebuy timed to fall outside the matching rule.
                4. The new, higher cost recorded in the inventory.

                ## Notes
                Allowances have been cut sharply in some countries, so check this year's figure before planning around it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The year's allowance is used to within a small margin, with the higher cost of the rebought holding recorded."
                cadence: cyclic
              tasks:
                - "Work out how much allowance is unused this year @recurring(yearly)"
                - "Pick the holdings whose gains will fill it"
                - "Place the sale and diarise the earliest safe rebuy date"
                - "Update the inventory with the new cost after rebuying"
            - name: Staged move of taxable holdings into tax shelters
              description: |-
                ## Purpose
                Moving investments from an ordinary account into a tax-free or tax-deferred account usually means selling and rebuying, which is itself a disposal. Spreading the move over several years, each year inside the allowance and the shelter's contribution limit, shifts a portfolio out of reach of future gains tax without a large bill in any single year.

                ## Milestones
                1. Taxable holdings ranked by unrealised gain as a share of their value, lowest first.
                2. A year-by-year schedule fitted to the allowance and the shelter's limit.
                3. This year's tranche sold and rebought inside the shelter.
                4. Progress recorded against the schedule.

                ## Notes
                Some platforms offer a combined sell and rebuy into the shelter, which shortens the time out of the market.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A multi-year transfer schedule exists and this year's tranche has been moved within the allowance and the shelter limit."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Rank taxable holdings by gain relative to their value"
                - "Draft a year-by-year schedule within the allowance and shelter limit"
                - "Move this year's tranche into the shelter @recurring(yearly)"
            - name: Large gain spread across tax years
              description: |-
                ## Purpose
                Selling a large holding in one go can push the whole gain into a higher band and waste the allowances of the years around it. Splitting the sale either side of the tax year end, or over three or four years, can lower the total tax noticeably, provided the market risk of holding on is accepted and written down.

                ## Milestones
                1. The total gain and the tax on a single sale estimated.
                2. Two or three spread schedules estimated for comparison.
                3. The market risk of holding the unsold part acknowledged and limited.
                4. A schedule chosen and the first tranche sold.

                ## Notes
                Do not let tax keep you in a risky position you would otherwise sell. The saving is rarely worth a large fall in price.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of a single sale against at least two spread schedules exists, with the chosen schedule and first sale recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Estimate the tax if the whole holding were sold this year"
                - "Model the tax on a sale split either side of the tax year end"
                - "Model a three-year split and note the extra market risk"
                - "Record the chosen schedule and diarise each tranche"
            - name: Partner transfers to use both allowances
              description: |-
                ## Purpose
                Many tax systems let spouses or civil partners move assets between them without a gain arising, so two allowances, and possibly a lower band, can be used on the same holding. Checking whether that applies to you, and how ownership would really change, can sharply cut the tax on a planned sale for a couple.

                ## Milestones
                1. Whether transfers between partners are free of gains in your system confirmed.
                2. The tax on a planned sale compared with and without a transfer.
                3. Both partners' agreement recorded, since the transfer is a real gift.
                4. The transfer completed and the receiving partner's cost recorded.

                ## Notes
                A transfer generally has to be outright and unconditional. Unmarried partners are often treated as unconnected people for gains purposes.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of the tax with and without a partner transfer is written down, with the decision and any completed transfer recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether transfers between partners are free of gains where you live"
                - "Compare tax on a planned sale with and without a transfer"
                - "Agree with your partner that the transfer is an outright gift"
                - "Record the transferred cost in the receiving partner's inventory"
            - name: Concentrated holding sell-down with a tax budget
              description: |-
                ## Purpose
                A single share that has grown to a large slice of the portfolio, whether inherited, bought early or left from a former employer, carries a risk that a tax bill should not be the only reason to keep. Setting a yearly tax budget, and selling down to a target weight within it, reduces the concentration on a schedule you can live with.

                ## Milestones
                1. The holding's share of total wealth and its unrealised gain recorded.
                2. A target maximum weight for any single holding agreed.
                3. A yearly tax budget set for selling it down.
                4. Sales placed each year until the target weight is reached.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A target weight and yearly tax budget are written down, and the holding's weight falls each year until the target is met."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Calculate the holding's share of your total investments"
                - "Set a target maximum weight for any single holding"
                - "Choose the yearly tax you are willing to pay to reduce it"
                - "Sell this year's tranche within the tax budget @recurring(yearly)"
            - name: Which holdings to sell when you need cash
              description: |-
                ## Purpose
                When a car, a deposit or a large bill has to be funded from investments, the instinct is to sell whatever has risen most, which is usually the most expensive choice for tax. A written rule for the order of sales, losses first, then low-gain lots, then lots that fit the allowance, settles the question before the need arises.

                ## Milestones
                1. A sale order rule written in three or four lines.
                2. The rule tested against a cash need of a realistic size.
                3. Cash held outside the portfolio for short-term needs considered first.
                4. The rule kept at the top of the disposal log.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written sale order rule exists and has been applied to at least one real or tested withdrawal."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the order in which you would sell holdings to raise cash"
                - "Test the rule on a withdrawal of a realistic size"
                - "Estimate the gain each step of the rule would realise"
                - "Keep the rule with the disposal log for the next cash need"
            - name: Tax-aware rebalancing using new money first
              description: |-
                ## Purpose
                Rebalancing by selling winners crystallises gains every year, while directing new contributions and dividends to the underweight parts often does the same job at no tax cost. Agreeing a method that uses cash flow first, sheltered accounts second and taxable sales last keeps the target mix without an avoidable bill.

                ## Milestones
                1. New contributions and dividend cash directed to underweight holdings by default.
                2. Rebalancing inside sheltered accounts used before selling in taxable accounts.
                3. A drift threshold set for when a taxable sale is still worth making.
                4. The method written into your rebalancing notes.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rebalancing method uses new money and sheltered accounts first, with a stated threshold for taxable sales."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Point new contributions at the most underweight holding"
                - "Take dividends as cash where reinvesting would worsen the drift"
                - "Rebalance inside sheltered accounts before touching taxable ones"
                - "Set the drift threshold that justifies a taxable sale"
            - name: Accumulation or income units in taxable accounts
              description: |-
                ## Purpose
                Accumulation units reinvest income inside the fund, which is convenient but leaves a yearly figure to add to your cost that is easy to miss. Income units pay cash out, which is simpler to track and can be reinvested or used for rebalancing. Choosing deliberately for taxable accounts cuts record-keeping errors for decades.

                ## Milestones
                1. Each taxable fund holding marked as accumulation or income units.
                2. The record-keeping each unit type needs written down.
                3. A choice made for new purchases in taxable accounts.
                4. Whether a switch between unit types counts as a disposal checked.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every taxable fund holding is labelled by unit type, and a written choice for future taxable purchases is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Label each taxable fund holding as accumulation or income units"
                - "Check how your tax system treats accumulated income for cost purposes"
                - "Choose the unit type for future purchases in taxable accounts"
                - "Ask the platform whether switching unit types is a disposal"
            - name: Selling a second home or rental property
              description: |-
                ## Purpose
                A property sale is usually the largest single gain people ever report, and some countries now require it to be reported and the tax paid within weeks of completion, not at the normal year end. Preparing the computation before exchange, with purchase costs, improvements and any reliefs gathered, avoids penalties and a rushed estimate.

                ## Milestones
                1. Purchase price, buying costs and improvement costs totalled from the property file.
                2. Selling costs estimated and the expected gain computed before exchange.
                3. Any short reporting deadline after completion confirmed and in the calendar.
                4. The return filed and the tax paid within the deadline.

                ## Notes
                Have a tax adviser check the computation on any property sale. Periods when you lived in the property can change the result a great deal.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The gain on the property is computed before exchange, then reported and paid within the deadline that applies, with records kept."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the purchase, buying cost and improvement figures from the property file"
                - "Estimate the gain before agreeing a sale price"
                - "Confirm the reporting deadline that starts on completion"
                - "Book a tax adviser to check the computation before exchange"
                - "Report and pay the tax within the deadline after completion"
            - name: Main home relief check before selling
              description: |-
                ## Purpose
                Gains on the home you live in are often exempt, but the relief can shrink because of periods spent living elsewhere, part of the home being let or used for business, or grounds above a certain size. Checking your history before the sale shows whether any of the gain is taxable while there is still time to plan around it.

                ## Milestones
                1. The dates you lived in the home, and any periods away, listed.
                2. Any letting, lodgers or business use recorded with dates.
                3. Grounds and outbuildings compared with your system's limits.
                4. A conclusion on whether any gain is taxable, confirmed by an adviser where in doubt.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written occupation history and a confirmed view on whether any part of the gain on your home is taxable are ready before the sale."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the dates you lived in the home and any periods away"
                - "Record any letting, lodgers or business use with dates"
                - "Check the size of the grounds against your system's limit"
                - "Ask an adviser to confirm the relief if anything is unusual"
            - name: Market fall loss harvesting playbook
              description: |-
                ## Purpose
                Sharp market falls are when the largest harvestable losses appear, and also when people find it hardest to think calmly. A playbook written in advance, with trigger levels, candidate holdings, replacements and the repurchase rule noted, lets you act within an hour instead of freezing or selling in a panic.

                ## Milestones
                1. A trigger set, such as a holding falling a fixed percentage below cost.
                2. Candidate holdings and their replacements listed in advance.
                3. The steps written in order on one page, including the repurchase check.
                4. The playbook used or reviewed after the next significant fall.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page loss harvesting playbook with triggers, candidates and replacements exists and is reviewed after each significant market fall."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set a loss trigger for each main taxable holding"
                - "Pair each candidate holding with its replacement"
                - "Write the playbook steps in order on one page"
                - "Review the playbook after the next market fall of ten percent or more"
            - name: First tax return with capital gains
              description: |-
                ## Purpose
                The first year gains pass the reporting threshold may also be the first year you need to file a return at all, which can mean registering with the tax authority by an earlier deadline. Starting months ahead, with the disposal log ready, leaves time to fill gaps in the records or ask for help.

                ## Milestones
                1. Whether you must report this year confirmed from the proceeds and gains thresholds.
                2. Registration with the tax authority completed if required.
                3. A computation prepared for each disposal.
                4. The return submitted and a copy filed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first return including gains is submitted before the deadline, with any registration done in time."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check the reporting thresholds for proceeds and gains this year"
                - "Register to file a return if your tax authority requires it"
                - "Prepare a computation for each disposal from the log"
                - "Submit the return and save the confirmation"
            - name: Responding to a tax authority question on a gain
              description: |-
                ## Purpose
                Letters asking about a reported gain usually want evidence of cost, dates and calculations, and they come with a reply deadline. Knowing what to gather, and when to bring in an adviser, keeps a routine check from turning into a costly dispute.

                ## Milestones
                1. The question and deadline in the letter understood and logged.
                2. Contract notes, the computation and past correspondence assembled for the disposal.
                3. A clear written reply sent before the deadline, or an adviser instructed.
                4. The outcome and any adjustment recorded.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Any tax authority question on a gain is answered in writing before its deadline, with the outcome filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note the deadline and the exact question in the letter"
                - "Gather the contract notes and computation for the disposal"
                - "Decide whether to reply yourself or instruct an adviser"
                - "Send the reply and keep proof of the date sent"
            - name: Raising a house deposit from taxable investments
              description: |-
                ## Purpose
                Funding a deposit from an investment account means selling a lot at once, often on a timetable set by the purchase rather than by tax. Planning the sales across the months before, and possibly across two tax years, keeps the gains bill predictable and avoids a forced sale in a bad week.

                ## Milestones
                1. The deposit amount and the date it is needed confirmed.
                2. Holdings to sell chosen using your cash sale order rule.
                3. Sales spread across the months before, and across tax years where helpful.
                4. Tax on the sales set aside in the reserve.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The deposit is raised by the date needed, with the gains tax on the sales estimated and set aside in advance."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the deposit amount and the date it is needed"
                - "Pick the holdings to sell using your sale order rule"
                - "Schedule the sales across the months before the purchase"
                - "Move the estimated tax into the reserve after each sale"
            - name: Inherited investments and their starting cost
              description: |-
                ## Purpose
                In many countries inherited assets take their value at the date of death as their cost, which can wipe out decades of gain, but only if you can prove that value later. Recording the estate valuation for each inherited holding now stops you paying tax on growth that happened before it was yours.

                ## Milestones
                1. The estate valuation for each inherited holding obtained from the executor.
                2. Those values entered as cost in your inventory, with the valuation date.
                3. Any sales by the executors before transfer noted separately.
                4. The valuation document stored in each holding's folder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every inherited holding has its estate valuation recorded as cost, with the supporting document filed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the executor for the valuation of each inherited holding"
                - "Check whether your system uses date of death value or original cost"
                - "Enter the valuation date and value as cost in your inventory"
                - "File the valuation document in each holding's folder"
            - name: Separation and dividing investments
              description: |-
                ## Purpose
                Assets moved between partners during a separation can be free of gains only within a set window in many systems, after which transfers may be taxed as if sold at market value. Knowing the deadline and each asset's unrealised gain helps both sides judge a fair split, because two holdings of equal value can carry very different tax.

                ## Milestones
                1. The window for gain-free transfers on separation confirmed.
                2. Each asset's value and unrealised gain listed.
                3. The after-tax value of each proposed split compared.
                4. Transfers completed within the window, or the tax on later transfers estimated.

                ## Notes
                Share this work with your solicitor or mediator. The tax position is one input to the settlement, not the whole of it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of assets with values and unrealised gains is shared with your solicitor, with the transfer deadline recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Confirm the deadline for gain-free transfers after separating"
                - "List every jointly held or transferable asset with its unrealised gain"
                - "Compare the after-tax value of each proposed split"
                - "Send the list to your solicitor or mediator"
            - name: Gains before and after moving country
              description: |-
                ## Purpose
                Becoming or ceasing to be tax resident can change which country taxes a gain and at what rate, and some countries tax unrealised gains on departure or reach back to gains made soon after leaving. Mapping your holdings against the move date, with advice covering both countries, avoids selling on the wrong side of the line.

                ## Milestones
                1. The expected date of the residency change and the gains rules in both countries noted.
                2. Holdings with large gains and losses listed against that date.
                3. Any exit charge or temporary non-residence rule identified.
                4. A sale timing plan agreed with an adviser who covers both countries.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A sale timing plan around the residency change is written down and checked by an adviser covering both countries."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Note the date you expect your tax residency to change"
                - "List holdings with large unrealised gains or losses"
                - "Ask about exit charges and temporary non-residence rules"
                - "Book an adviser who covers both countries"
            - name: Low-income year gain realisation
              description: |-
                ## Purpose
                A sabbatical, parental leave, a career break or the years between stopping work and drawing pensions can leave income unusually low, and where gains rates are banded that is a chance to realise gains at a lower rate or none. Spotting the year in advance lets you plan the sales instead of noticing the opportunity afterwards.

                ## Milestones
                1. The low-income year identified and its expected income estimated.
                2. The lower-band room for gains in that year calculated.
                3. Holdings with gains chosen to fill that room.
                4. Sales placed in the right tax year and the higher costs recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Gains realised in the low-income year fill the lower-band room to within a set margin, with the sales and new costs recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark the tax year when your income is expected to drop"
                - "Estimate how much gain fits in the lower band that year"
                - "Choose holdings whose gains will use that room"
                - "Place the sales inside the right tax year"
            - name: Retiree sale plan from a taxable portfolio
              description: |-
                ## Purpose
                Retirees drawing income from an ordinary investment account sell something every year, and the choice of what to sell decides how much tax goes with it. A yearly plan that uses losses, the allowance and the lowest-gain lots first, set alongside pension income, keeps the tax on retirement spending steady and low.

                ## Milestones
                1. This year's cash need from the taxable account set.
                2. Lots chosen to meet it with the smallest taxable gain.
                3. Pension and other income for the year checked so gains land in the lowest band available.
                4. Sales spread through the year and recorded in the disposal log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly sale plan for the taxable account is written before the tax year starts and followed, with each sale logged."
                cadence: cyclic
              tasks:
                - "Set this year's cash need from the taxable account"
                - "Choose lots that meet it with the smallest gain @recurring(yearly)"
                - "Check pension income so gains fall in the lowest band available"
                - "Spread the sales over the year to reduce timing risk"
            - name: Gains timing for variable self-employed income
              description: |-
                ## Purpose
                Freelancers and business owners often know by midyear whether this is a strong or a weak year, and in banded systems that changes the rate on any gains. Deciding planned sales in light of the year's likely profit, rather than in isolation, can move gains into the cheaper year.

                ## Milestones
                1. A midyear estimate of this year's profit.
                2. A comparison with expected profit next year.
                3. Planned sales moved toward the lower-income year where markets and needs allow.
                4. The decision recorded beside the profit estimate.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A midyear profit estimate and a written decision on which tax year planned sales will fall in are both recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Estimate this year's profit at the half-year point"
                - "Compare it with the profit you expect next year"
                - "Move planned sales toward the lower-income year if markets allow"
                - "Write the decision beside the profit estimate"
            - name: Offshore fund reporting status and equalisation
              description: |-
                ## Purpose
                Funds domiciled abroad may be taxed differently depending on whether they hold a reporting status with your tax authority, and the wrong kind can turn a gain into income taxed at a higher rate. Equalisation in a fund's first distribution after you buy, and yearly reported income, also adjust your cost. Checking each fund once and noting its treatment prevents an unpleasant surprise on sale.

                ## Milestones
                1. The domicile of every taxable fund holding recorded.
                2. Reporting status checked on the tax authority's published list where one exists.
                3. Reported income and equalisation figures collected for each year held.
                4. Cost adjusted for these figures in the inventory.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each taxable fund holding has its domicile, reporting status and income adjustments recorded and applied to cost."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Note the country each taxable fund is domiciled in"
                - "Check each overseas fund against the published reporting fund list"
                - "Download annual reported income figures from each fund's website"
                - "Adjust the cost in the inventory for reported income and equalisation"
            - name: Deferral and reinvestment reliefs explained
              description: |-
                ## Purpose
                Some tax systems let a gain be deferred or reduced when proceeds are reinvested in qualifying assets, such as small company schemes, business assets or a like-for-like property exchange. These reliefs carry strict conditions and clawbacks, so understanding which exist where you live, and their traps, is a matter for study and an adviser rather than a quick decision.

                ## Milestones
                1. The deferral or reinvestment reliefs available in your system listed.
                2. The conditions, time limits and clawback rules for each written down.
                3. Whether any fits your planned sales discussed with an adviser.
                4. A decision recorded to use or not use each relief.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of available deferral reliefs with conditions and clawbacks exists, with a recorded decision on each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the deferral and reinvestment reliefs your tax system offers"
                - "Write the conditions and clawback rules for each relief"
                - "Bring the list to your adviser along with your planned sales"
                - "Record whether you will use each relief and why"
            - name: Negligible value and worthless holding claims
              description: |-
                ## Purpose
                Shares in a company that has collapsed or been delisted, or a failed private investment, can often be treated as a loss even though nothing was sold, but only if a claim is made. Finding these holdings and claiming within the time limit turns a dead investment into a loss that offsets other gains.

                ## Milestones
                1. Holdings that are delisted, in administration or written off identified.
                2. Evidence that each has become of negligible value gathered.
                3. Claims made on the return within the time limit.
                4. Each loss added to the carry-forward register.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every worthless holding has a loss claim made or a written reason why not, with each loss entered in the register."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List holdings that are delisted, in administration or written off"
                - "Check the tax authority's list of shares already accepted as negligible"
                - "Gather evidence of value for any holding not on the list"
                - "Look for newly worthless holdings before each return @recurring(yearly)"
            - name: Five-year capital gains plan
              description: |-
                ## Purpose
                Experienced investors look beyond the current tax year: which gains to realise when, how losses and allowances line up with withdrawals, rebalancing and life events, and what happens if the rules change. A rolling five-year plan, refreshed each year, ties the separate projects in this area into one view of the tax on your gains.

                ## Milestones
                1. Unrealised gains, losses and allowances projected for five tax years.
                2. Planned sales, transfers and harvesting placed in specific years.
                3. One scenario run for a cut in the allowance or a rise in rates.
                4. The plan reviewed and rolled forward each year.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A five-year gains plan with planned realisations by year and one rule-change scenario has been refreshed within the last twelve months."
                cadence: cyclic
              tasks:
                - "Project unrealised gains and allowances over the next five tax years"
                - "Place planned sales, harvesting and transfers in specific years"
                - "Run one scenario with a smaller allowance or a higher rate"
                - "Ask the agent to summarise the plan's assumptions on one page"
                - "Roll the plan forward by one year @recurring(yearly)"
---

# Capital Gains Tax Planning

This area is for anyone holding investments or property outside tax shelters who wants to pay the gains tax that is due and no more, legally and on time. It starts with foundations (an inventory of taxable holdings, reconstructed costs, a rules summary, a loss register and the key dates), then the routines that keep the disposal log and running total current, the skills behind matching rules and computations, the decisions on harvesting, spreading and transferring gains, the events of selling property or filing a first return, situations such as an inheritance, a separation, a move abroad or retirement, and finally the specialist work on reliefs and multi-year planning.

What repeats is a monthly check of the disposal log and corporate actions, a quarterly running total and loss scan, and a yearly round of year-end decisions, broker reconciliation, the return and payment, and a refresh of the five-year plan. The Metrics log, Operational checklist and Meeting notes templates pair with the projects that name them, and every tax conclusion belongs to your tax authority's guidance or a qualified adviser where you live. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
