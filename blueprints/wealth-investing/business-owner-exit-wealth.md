---
id: wealth-investing.business-owner-exit-wealth
name: Business Owner Exit Wealth Plan
description: "A personal balance sheet and net number before the sale, safe landing for the money, earn-out and tax routines, choosing who manages it, and plans for co-owners, buyouts, serial founders and family wealth."
category: personal
version: 1.0.0
tags: [wealth-investing, business-owner-exit-wealth, founder, small-business, business-sale, earn-out, liquidity-event, sudden-wealth]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - metrics-log
    - meeting-notes
    - risk-register
    - vendor
    - operational-checklist
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Business Owner Exit Wealth Plan
          description: "Turning the proceeds from selling a business into a diversified long-term wealth plan with tax and income in mind."
          projects:
            - name: Personal balance sheet before the sale
              description: |-
                ## Purpose
                Most owners know the business's numbers to the pound and their own only roughly, because the company has been the savings account, the pension and the plan. Listing everything you own and owe outside the business, before a buyer appears, shows how concentrated you really are and what the sale has to fix. It also gives every adviser you hire later the same starting picture.

                ## Milestones
                1. Every personal account, pension, property and debt listed with a current value and the date it was checked.
                2. The business shown as a separate line, valued only as a range until there is an offer.
                3. The share of total wealth tied to the business worked out as a percentage.
                4. The balance sheet saved where your accountant and partner can both see it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated personal balance sheet lists every asset and debt outside the business and states the percentage of net worth tied to the company."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every bank, savings and investment account in your own name"
                - "Download current pension statements and note each value"
                - "Write down mortgage, personal loan and director's loan account balances"
                - "Calculate the business share of your total net worth"
            - name: Net sale proceeds you actually need
              description: |-
                ## Purpose
                Founders often negotiate on headline price while having no idea what figure, after tax and fees, would let them stop. Working out the net sum that funds your household for life, plus the goals you care about, turns every offer into a yes or no against a number. It also tells you early whether a sale alone gets you there or whether you will still need some earned income.

                ## Milestones
                1. Annual spending for the life you want after the sale written down, split into essential and optional.
                2. One-off goals listed with costs: a home, children's education, a new venture, gifts.
                3. A required net sum calculated with your adviser using a withdrawal assumption you both accept.
                4. A walk-away figure recorded: the lowest net proceeds you would accept.

                ## Notes
                Keep the number private from the deal team on the other side. A buyer who learns your floor will find it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written required net proceeds figure and a lower walk-away figure exist, each with the spending and goal assumptions behind it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the yearly cost of the life you want once the sale completes"
                - "List one-off goals with an estimated cost against each"
                - "Ask your adviser which withdrawal assumption to use for the calculation"
                - "Record your required net figure and your walk-away figure"
            - name: Headline price to net cash waterfall
              description: |-
                ## Purpose
                Between the price in the press release and the money in your account sit debt repayment, transaction fees, working capital adjustments, escrow, deferred payments and tax. Building the waterfall for your own deal, line by line, shows how much arrives on completion day and how much is only promised. Sellers are regularly surprised by how far apart the two numbers are.

                ## Milestones
                1. A spreadsheet running from enterprise value down to cash received by you personally.
                2. Each deduction labelled with its source: adviser fees, debt, adjustments, tax.
                3. Amounts split into cash at completion, deferred, contingent and paid in shares.
                4. The waterfall checked by your corporate accountant against the current offer.

                ## Notes
                Rebuild it each time the offer changes. A higher price with more earn-out can be worth less than a lower clean price.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A waterfall spreadsheet, reviewed by your accountant, shows the cash you receive at completion separately from deferred, contingent and share consideration."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy the headline price and structure from the latest offer letter"
                - "Ask your corporate finance adviser for an estimate of their total fees"
                - "Estimate the tax on the sale with your accountant"
                - "Split the result into cash now, deferred, contingent and shares"
            - name: Household spending without the business
              description: |-
                ## Purpose
                Owner household spending is hard to see because the company quietly pays for some of it, and salary, dividends and drawings arrive irregularly. Twelve months of personal bank and card statements, sorted into categories, give the real annual figure the whole exit plan rests on. Without it, every income projection is a guess.

                ## Milestones
                1. Twelve months of personal bank and card transactions exported.
                2. Spending sorted into essential, lifestyle and one-off.
                3. An annual total and a monthly average recorded.
                4. Costs currently paid through the business added as a separate line.

                ## Notes
                Start from the **Monthly budget and bills** template.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month spending summary with an annual total, a monthly average and a separate line for costs the business currently pays."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export twelve months of statements from every personal account"
                - "Sort the transactions into essential, lifestyle and one-off"
                - "Add up the annual total and the monthly average"
                - "Ask the agent to flag recurring payments you had forgotten"
            - name: Replacing perks the company pays for
              description: |-
                ## Purpose
                Cars, phones, private health cover, life insurance, pension contributions and sometimes the home broadband all stop the day you leave the payroll. Listing each one with its personal replacement cost shows how much the post-exit budget has to grow, and gives you time to arrange cover before the company policy ends rather than after.

                ## Milestones
                1. Every benefit the business provides you listed with its annual cost.
                2. A personal replacement quoted for each one you want to keep.
                3. End dates for company policies confirmed with the buyer or your payroll provider.
                4. Replacement costs added to the household spending figure.

                ## Notes
                Health and life cover can be harder or dearer to buy later, especially with a medical history. Arrange personal cover before the company scheme ends.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of every company-paid benefit shows its personal replacement cost and the date cover moves across, with totals added to the spending figure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every benefit and cost the company pays on your behalf"
                - "Ask whether any group policy can be converted to a personal one"
                - "Get personal quotes for the health and life cover you want to keep"
                - "Add the replacement costs to your household spending total"
            - name: Exit advisory team and who leads it
              description: |-
                ## Purpose
                Selling a company pulls in a corporate finance adviser, a deal lawyer, a corporate accountant and often a personal tax adviser and a wealth planner, and each assumes someone else is looking after your personal position. Naming the team, their fees and one person who coordinates the personal side stops expensive gaps, like a tax point nobody raised until after signing.

                ## Milestones
                1. A one-page list of every adviser with role, firm, fee basis and contact.
                2. A named lead for your personal tax and wealth position, separate from the deal team.
                3. Engagement letters filed, with fee estimates.
                4. A shared timetable so advisers know when personal decisions are due.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page adviser map names every firm, its fee basis and one lead for your personal position, with engagement letters filed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every adviser already involved in the sale and what each is paid"
                - "Ask your accountant who will advise on your personal tax, not the company's"
                - "Name one person to coordinate the personal side of the exit"
                - "File each engagement letter with its fee estimate"
            - name: Sale timeline mapped to personal money decisions
              description: |-
                ## Purpose
                Several personal decisions have to be made at particular points of a deal: tax structuring before heads of terms, pension contributions before completion, landing accounts before the money moves. Laying the deal timetable beside a list of those decisions shows which ones are urgent now and which can safely wait until after completion.

                ## Milestones
                1. The expected deal stages written out with rough dates: offer, heads of terms, due diligence, signing, completion.
                2. Each personal decision placed against the stage by which it must be made.
                3. Decisions that become impossible after a given stage marked as last-chance items.
                4. The timeline shared with your lead adviser and corrected.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page timeline puts every personal money decision against the deal stage by which it must be made, with last-chance items marked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the deal stages with the dates your adviser expects"
                - "List the personal decisions that depend on deal timing"
                - "Mark the decisions that cannot be made after signing"
                - "Send the timeline to your lead adviser for corrections"
            - name: Landing accounts for the completion money
              description: |-
                ## Purpose
                Completion can put more money in one account than most people have ever held, and deposit protection schemes usually cover only a fixed amount per person per banking licence. Opening the right accounts weeks ahead, with identity and source of funds checks done, means the money lands safely and starts earning interest instead of sitting in a current account while you queue for compliance.

                ## Milestones
                1. The deposit protection limit in your country confirmed, with which brands share a licence.
                2. Accounts opened at enough separate institutions to keep each balance within protection, or a deliberate choice recorded to exceed it.
                3. Source of funds paperwork prepared for each bank: sale agreement extract and completion statement.
                4. Account details given to the deal lawyer for the completion funds flow.

                ## Notes
                Banks often ask for evidence of where large sums come from and can hold a deposit while they check. Ask each one what it needs before the money arrives.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Accounts at named institutions are open and verified before completion, with source of funds evidence ready and details given to the deal lawyer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up the deposit protection limit and which bank brands share a licence"
                - "Choose three or more institutions to receive the funds"
                - "Ask each bank what source of funds evidence it needs for a large deposit"
                - "Give the deal lawyer the account details for the funds flow"
            - name: Exit deal document archive
              description: |-
                ## Purpose
                Years after completion you may need the sale agreement for a warranty claim, the completion statement for a tax enquiry or the share register for a deferred payment dispute. Keeping one well-indexed archive of the deal and personal tax papers, with copies outside an inbox the buyer may soon control, saves weeks of searching later.

                ## Milestones
                1. The signed sale agreement, disclosure letter and ancillary documents saved as PDFs.
                2. Completion statement, funds flow and bank confirmations filed.
                3. Tax clearances, relief claims and advisers' tax letters filed.
                4. An index with dates, and a copy held outside any company system.

                ## Notes
                If your email account belongs to the company, it goes with the sale. Move personal deal correspondence out before completion.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An indexed archive outside company systems holds the signed sale agreement, completion statement, funds flow and every tax letter about the sale."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a personal deal archive outside your company email and drive"
                - "Ask the deal lawyer for the full signed bible of documents"
                - "Save the completion statement and funds flow beside it"
                - "Write an index of every document with its date"
            - name: Cash ladder for the first year after completion
              description: |-
                ## Purpose
                Proceeds usually sit in cash for months while decisions are made, and idle cash in an instant-access account loses value to inflation. Spreading the money across fixed-term deposits and short government bills that mature as you need cash keeps it protected and earning while the long-term plan is built.

                ## Milestones
                1. Cash needs for the next twelve months listed by month: tax bills, living costs, planned investments.
                2. Deposits and bills arranged to mature ahead of each need.
                3. Every holding recorded with institution, rate, maturity date and protection status.
                4. Maturity instructions set so nothing rolls over by default at a poor rate.

                ## Notes
                Interest on large deposits is usually taxable. Add the expected interest to the tax calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ladder sheet lists every deposit and bill with rate and maturity, and each upcoming cash need has a holding maturing ahead of it."
                cadence: rolling
              tasks:
                - "List each cash need for the next twelve months by month"
                - "Ask your banks for fixed-term rates from three to twelve months"
                - "Record each holding with rate, maturity and protection status"
                - "Check maturities due next month and set instructions @recurring(monthly:12)"
            - name: Monthly paycheque from the proceeds
              description: |-
                ## Purpose
                Anyone used to drawing what the business could spare tends to either spend freely after a sale or feel unable to spend anything. Setting a fixed monthly transfer from the wealth accounts to the household account, sized from the spending baseline, recreates a salary and makes overspending visible within weeks.

                ## Milestones
                1. A monthly amount agreed from the spending baseline and the income plan.
                2. A standing order running from the wealth account to the household account.
                3. Actual spending compared with the paycheque every month.
                4. The amount reviewed and reset once a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A standing monthly transfer funds the household, and spending is compared with it every month with any overspend noted."
                cadence: rolling
              tasks:
                - "Agree the monthly amount from your spending baseline"
                - "Set up a standing order to the household account"
                - "Compare last month's spending with the paycheque @recurring(monthly:4)"
                - "Reset the paycheque amount for inflation and plans @recurring(yearly)"
            - name: Earn-out performance tracker
              description: |-
                ## Purpose
                An earn-out is part of your price that depends on how the business performs under someone else's control, measured by definitions in the sale agreement. Tracking the exact metric monthly, against the targets and the measurement rules, tells you early whether the payment is on course and gives you evidence if the calculation is disputed.

                ## Milestones
                1. Earn-out metrics, targets, periods and accounting rules copied from the sale agreement into a tracker.
                2. Monthly figures recorded from the management accounts you are entitled to see.
                3. A forecast of each earn-out payment updated every quarter.
                4. Any disagreement with the buyer's figures raised in writing within the agreement's deadline.

                ## Notes
                Start from the **Metrics log** template. Plan your spending as if the earn-out were zero until it is paid.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker holds the earn-out definitions and a monthly figure for each metric, with a quarterly forecast of every payment."
                cadence: rolling
              tasks:
                - "Copy the earn-out definitions and targets from the sale agreement"
                - "Record the earn-out metric from the monthly accounts @recurring(monthly:18)"
                - "Update the forecast of each earn-out payment @recurring(quarterly)"
                - "Note the deadline for disputing the buyer's earn-out statement"
            - name: Deferred consideration and loan note collection
              description: |-
                ## Purpose
                Deferred payments and loan notes are money the buyer owes you, often unsecured, so they behave more like a loan to the buyer than like cash. A collection log with dates, amounts, interest and any security tells you within days if a payment is late, and a quarterly look at the buyer's health warns you before a missed payment does.

                ## Milestones
                1. Every deferred payment and loan note listed with due date, amount, interest and security.
                2. Each receipt matched against the schedule.
                3. A quarterly note on the buyer's financial health from accounts or filings.
                4. A written plan, agreed with your lawyer, for what happens if a payment is missed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A collection log matches every deferred payment against its due date, with a quarterly note on the buyer's finances and a missed payment plan."
                cadence: rolling
              tasks:
                - "List each deferred payment with due date, amount and interest"
                - "Confirm the scheduled buyer payment has arrived @recurring(monthly:8)"
                - "Read the buyer's latest filed accounts or results @recurring(quarterly)"
                - "Ask your lawyer what steps apply if a payment is missed"
            - name: Tax payment calendar for the sale years
              description: |-
                ## Purpose
                A large gain can bring tax due dates you have never faced personally: a big balancing payment, advance payments on account or quarterly estimates based on the sale year. Putting every date and estimated amount into one calendar, with the money set aside in the cash ladder, prevents the classic mistake of investing cash that is owed to the tax authority.

                ## Milestones
                1. Every personal tax due date for the sale year and the next listed with estimated amounts.
                2. The tax money held in cash or short deposits maturing before each date.
                3. Payments made and receipts filed.
                4. Any request to reduce advance payments, where next year's income will be lower, discussed with your accountant.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A calendar lists every personal tax payment for the sale year and the next with amounts, and each one is matched to cash set aside."
                cadence: rolling
              tasks:
                - "Ask your accountant for every tax due date for the sale year and the next"
                - "Set aside the estimated tax in deposits that mature in time"
                - "Check tax payments due in the next sixty days @recurring(monthly:20)"
                - "File each payment receipt in the deal archive"
            - name: Quarterly household wealth meeting
              description: |-
                ## Purpose
                After a sale the money decisions stop being one person's job, yet many founders keep running them like a business decision they make alone. A quarterly meeting with your partner, with a short agenda and notes, keeps both of you informed, gives the quieter voice a regular slot and catches disagreements before they turn into resentment.

                ## Milestones
                1. A standing quarterly date in both diaries.
                2. A fixed agenda covering cash, investments, spending, upcoming decisions and worries.
                3. Notes and decisions recorded after each meeting.
                4. Both partners able to describe the plan and where the money sits.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four meetings a year happen with written notes, and both partners can say where the money is held and what decisions are pending."
                cadence: cyclic
              tasks:
                - "Agree a quarterly date that suits you both"
                - "Write a five-item agenda for the meeting"
                - "Hold the household wealth meeting and record decisions @recurring(quarterly)"
                - "Keep the notes in a shared folder you can both open"
            - name: Acquirer share lock-up and sell-down log
              description: |-
                ## Purpose
                Being paid partly in the buyer's shares swaps one concentrated position for another, usually with a lock-up that stops you selling for a period. Logging the lock-up dates, trading windows, holding value and a pre-agreed sell-down plan means the decision about those shares is made calmly in advance, not on the day the lock-up ends and the price moves.

                ## Milestones
                1. Lock-up end dates, trading windows and any insider dealing restrictions recorded.
                2. Holding value logged monthly with its share of your net worth.
                3. A written sell-down plan with amounts and dates agreed with your adviser.
                4. Sales made under the plan recorded with tax notes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log records lock-up and window dates, a monthly holding value and a written sell-down plan, with every sale noted."
                cadence: rolling
              tasks:
                - "Record the lock-up end date and trading windows from the agreement"
                - "Log the holding value and its share of net worth @recurring(monthly:27)"
                - "Write a sell-down plan with amounts and dates"
                - "Check restrictions with the buyer's company secretary before each sale"
            - name: Consolidated quarterly wealth report
              description: |-
                ## Purpose
                Money from a sale tends to end up spread across banks, a wealth manager, a platform and illiquid holdings, each with its own statement and format. One quarterly page pulling them together shows total wealth, allocation, income received and costs, so you judge the plan as a whole rather than whichever statement arrived last.

                ## Milestones
                1. A single template with every holding, value, allocation and cost.
                2. Quarterly values entered from each provider's statement.
                3. Income received and fees paid totalled for the quarter.
                4. An annual summary comparing the year against the plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page report each quarter shows total wealth, allocation, income and fees across every provider, with an annual comparison against the plan."
                cadence: rolling
              tasks:
                - "Build a one-page template listing every account and holding"
                - "Enter quarter-end values from each statement @recurring(quarterly)"
                - "Total income received and fees paid for the quarter"
                - "Compare the year against the exit plan @recurring(yearly)"
            - name: Reading the sale agreement for money terms
              description: |-
                ## Purpose
                The sale agreement decides how much of the price you keep: completion accounts, escrow, warranties, indemnities, caps and claim periods. Learning to read those clauses yourself, with your lawyer explaining the ones that matter, means you know your real exposure after completion and can plan the money around it.

                ## Milestones
                1. The clauses on price, adjustments, deferred payments, escrow and warranties located and summarised in plain words.
                2. Your maximum liability under warranties and indemnities written down with the claim periods.
                3. Questions on unclear clauses answered by your lawyer in writing.
                4. A one-page money terms summary kept in the deal archive.

                ## Notes
                Start from the **Risk register** template for the warranty and indemnity exposure.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page plain-words summary lists every money term in the sale agreement with your maximum liability and claim periods, checked by your lawyer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your lawyer for the draft agreement and a clause index"
                - "Summarise the price, adjustment and deferred payment clauses"
                - "Write down the warranty cap and each claim period"
                - "Send your questions on unclear clauses to the lawyer"
            - name: Completion accounts and locked box basics
              description: |-
                ## Purpose
                Whether the price is adjusted after completion or fixed in advance changes when you know your final number. With completion accounts, working capital and net debt are measured after the deal and the price moves; with a locked box, the price is fixed from an earlier balance sheet and leakage rules apply. Knowing which you have tells you how much of the proceeds to treat as provisional.

                ## Milestones
                1. The mechanism in your deal identified and explained in a paragraph.
                2. Key terms defined: working capital target, net debt, leakage, permitted leakage.
                3. An estimate from your accountant of how far the price could move.
                4. The provisional amount kept in cash until the adjustment is settled.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note names your deal's price mechanism, defines its key terms and records the possible price movement held back in cash."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the price adjustment section in the sale agreement"
                - "Write definitions of working capital target, net debt and leakage"
                - "Ask your accountant how far the final price could move"
                - "Keep that amount aside until the adjustment is agreed"
            - name: Exit tax reliefs in your country
              description: |-
                ## Purpose
                Many countries offer reliefs for selling a trading business, with conditions on holding periods, roles and share classes, for example business asset disposal relief in the UK or the qualified small business stock exclusion in the US. Learning what exists where you live, and which conditions you already meet or could still meet, gives you the right questions for your tax adviser well before the deal fixes the facts.

                ## Milestones
                1. A list of reliefs that may apply to a business sale where you are tax resident.
                2. The conditions for each written out, with whether you appear to meet them.
                3. Questions for your tax adviser prepared.
                4. Your adviser's written view on which reliefs apply and what you must do to claim them.

                ## Notes
                Conditions are strict and often tested over the years before the sale. This is preparation for advice, not a substitute for it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of potentially relevant reliefs with their conditions, plus your tax adviser's written view of which apply and how to claim them."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Search the tax authority's guidance on selling a business"
                - "List each relief with its holding period and conditions"
                - "Note which conditions you meet and which are unclear"
                - "Book a session with your tax adviser to go through the list"
            - name: Rollover equity and second bite economics
              description: |-
                ## Purpose
                Private equity buyers often ask founders to reinvest part of the proceeds in the new holding company, promising a second bite when they sell again. That stake usually sits below debt and preferred instruments, so learning how the capital structure, ratchets and leaver terms work tells you what the rollover is really worth and how much of your plan should depend on it.

                ## Milestones
                1. The new capital structure drawn out from senior debt to ordinary shares.
                2. Your rollover percentage and the instruments you will hold described.
                3. Good and bad leaver terms understood and written down.
                4. Second bite outcomes at low, middle and high exit values modelled with your adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note sets out the capital structure, your rollover instruments, leaver terms and three modelled second bite outcomes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the buyer's team for the post-deal capitalisation table"
                - "Draw the structure from senior debt down to ordinary shares"
                - "Read the leaver clauses and summarise them in plain words"
                - "Model the second bite at three exit values with your adviser"
            - name: Investing as a former operator
              description: |-
                ## Purpose
                Running a business teaches you to back yourself, act fast and fix problems directly, and almost none of that transfers to a diversified portfolio where returns come from the market, patience and low costs. Studying how long-term investing works, and why former owners often lose money chasing control, prepares you to judge advice and not mistake activity for progress.

                ## Milestones
                1. Three well-regarded introductory books or courses on long-term investing finished.
                2. Notes written on diversification, costs, risk and time horizon.
                3. A list of your own operator instincts that could hurt you as an investor.
                4. A short written statement of what kind of investor you intend to be.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three introductory investing sources studied, with written notes and a one-page statement of the investor you intend to be."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Pick three well-regarded introductory books on long-term investing"
                - "Write a page of notes after finishing each book"
                - "List the operator instincts that could cost you as an investor"
                - "Write a short statement of how you intend to invest"
            - name: Bucketing the proceeds by purpose and horizon
              description: |-
                ## Purpose
                Treating the proceeds as one large pot invites both overspending and over-caution. Splitting the money into named buckets, such as tax owed, two years of living costs, near-term goals, long-term growth and a capped amount for adventures, gives each pound a job and a sensible level of risk.

                ## Milestones
                1. Buckets named with a purpose and time horizon for each.
                2. An amount allocated to each bucket from the net proceeds waterfall.
                3. A risk level and type of holding agreed for each bucket with your adviser.
                4. The buckets set up as separate accounts or clearly labelled sub-accounts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written bucket plan allocates the full net proceeds to named buckets, each with a horizon, a risk level and an account."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Name the buckets your money needs, from tax owed to long-term growth"
                - "Allocate an amount to each bucket from the waterfall"
                - "Agree a risk level for each bucket with your adviser"
                - "Open or label an account for each bucket"
            - name: Pre-sale personal tax structuring review
              description: |-
                ## Purpose
                Some of the most valuable tax decisions in an exit have to be made before heads of terms are signed: who holds the shares, whether a holding company sits in between, residency plans and the timing of dividends or pension contributions. A structured review with a personal tax adviser at that stage, recorded in writing, avoids discovering later that the window closed.

                ## Milestones
                1. Current shareholding, structure and residency position documented.
                2. Options raised by your tax adviser listed with costs, risks and deadlines.
                3. Decisions taken and recorded, with the adviser's written advice filed.
                4. Agreed actions completed before the deal reaches heads of terms.

                ## Notes
                Steps taken purely to avoid tax, or taken too late, can be challenged. Rely on written advice from a qualified professional.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written tax structuring review is filed, with each option decided and any agreed actions completed before heads of terms."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a summary of who owns which shares and where you are tax resident"
                - "Book a personal tax review before heads of terms"
                - "Record each option the adviser raises with its deadline"
                - "Complete agreed actions and file the written advice"
            - name: Cash, shares or loan notes consideration mix
              description: |-
                ## Purpose
                Buyers offer different mixes of cash at completion, shares in the acquirer, loan notes and earn-out, and the same headline price can carry very different risk. Comparing offers on certainty, timing, tax and concentration, rather than price alone, lets you negotiate for the mix your wealth plan actually needs.

                ## Milestones
                1. Each offer broken into cash, shares, notes and contingent payments.
                2. A risk-adjusted value for each part agreed with your adviser.
                3. The tax timing of each type of payment checked.
                4. A preferred mix recorded and given to your corporate finance adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison table values each offer's cash, share, note and contingent parts on a risk-adjusted basis, with a preferred mix recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Split each offer into cash, shares, loan notes and earn-out"
                - "Discount the uncertain parts with your adviser's help"
                - "Ask your tax adviser when each type of payment is taxed"
                - "Tell your corporate finance adviser the mix you prefer"
            - name: Lump sum or phased investment decision
              description: |-
                ## Purpose
                Investing a life-changing sum in one go feels reckless to many sellers, while waiting for the right moment can leave it in cash for years. Deciding in advance between a lump sum and a fixed schedule of tranches, and writing down the dates, removes the temptation to time the market with the most important money you will ever have.

                ## Milestones
                1. Lump sum and phased approaches compared with your adviser, including the regret each might cause.
                2. An approach chosen and the reasons written down.
                3. A schedule of tranche dates and amounts set, if phasing.
                4. Each tranche invested on its date, whatever the news.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision chooses lump sum or a dated tranche schedule, and every tranche is invested on its scheduled date."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your adviser to compare lump sum and phased entry for your amount"
                - "Write down which approach you chose and why"
                - "Put the tranche dates and amounts in your calendar"
                - "Invest the next tranche on its scheduled date @recurring(monthly:6)"
            - name: Deciding who manages the proceeds
              description: |-
                ## Purpose
                Three models exist for running the proceeds: you on a low-cost platform, an adviser who recommends while you approve, or a discretionary manager who decides. Each suits a different amount of time, interest and trust, and the fee gap compounds over twenty years into a meaningful share of the pot. Choosing the model before talking to firms stops a persuasive pitch from choosing it for you.

                ## Milestones
                1. Your time, interest and skill for running the money yourself honestly assessed.
                2. The three models compared on cost, control and accountability.
                3. A model chosen, or a split such as a self-run core and a managed part.
                4. The decision written down before any firm is approached.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the management model, or split, for the proceeds, made before any wealth manager was approached."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write how many hours a month you want to spend on investing"
                - "Compare all-in yearly fees for each model on your amount"
                - "Choose a model or a split between models"
                - "Record the decision before booking any firm meetings"
            - name: Wealth manager pitch with a written brief
              description: |-
                ## Purpose
                Once word of a sale spreads, private banks and wealth managers will approach you, each with their own framing. Writing a brief of your amount, goals, income need, constraints and fee expectations, and asking three firms to respond to the same brief, turns sales meetings into a comparison you control.

                ## Milestones
                1. A two-page brief written from the bucket plan and spending baseline.
                2. Three firms invited to respond to the same brief.
                3. Proposals compared on total cost, approach, reporting and conflicts.
                4. A firm chosen, or none, with reasons recorded.

                ## Notes
                Start from the **Vendor** template. Ask for the all-in yearly cost in money, not just percentages.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three firms have answered the same written brief, their proposals are compared on total cost and approach, and a recorded choice is made."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write a two-page brief describing the money and your goals"
                - "Send the brief to three firms with a reply date"
                - "Compare proposals on all-in cost, approach and reporting"
                - "Record the firm chosen and the reasons"
            - name: Pension contributions around the sale
              description: |-
                ## Purpose
                Owners who never paid much into a pension sometimes have a final chance to make company contributions before the business changes hands, and annual limits or carry-forward rules may allow more than expected. Reviewing this with your accountant before completion, and again after, can rebuild retirement savings that the business was meant to provide.

                ## Milestones
                1. Current pension holdings and contribution history gathered.
                2. Available allowances, including any carry-forward, calculated by your adviser.
                3. A decision recorded on contributions before completion.
                4. A plan for personal contributions after the sale noted.

                ## Notes
                Contribution limits and tax treatment vary by country and change often. Get written figures from your adviser before any payment.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on pension contributions before and after completion exists, based on allowances calculated by your adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather contribution statements for every pension you hold"
                - "Ask your accountant to calculate the allowances available this year"
                - "Decide with your adviser whether to contribute before completion"
                - "Note the personal contribution plan for the year after the sale"
            - name: Family and friends money request policy
              description: |-
                ## Purpose
                News of a sale brings requests: a sibling's business idea, a friend's house deposit, a cousin's debts. Deciding with your partner, ahead of time, how much you will give or lend in total, on what terms and how you will say no, protects relationships as well as the money.

                ## Milestones
                1. A total amount set aside for family gifts and loans, if any.
                2. Rules agreed for gifts versus loans, with loans documented.
                3. A short, kind wording for declining requests written down.
                4. Every gift or loan recorded with date, amount and terms.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written policy sets a total for gifts and loans, rules for each and a decline wording, and every request handled is logged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree with your partner the total you will give or lend"
                - "Write rules for when money is a gift and when it is a loan"
                - "Draft a kind sentence for declining a request"
                - "Log each gift or loan with date, amount and terms"
            - name: Insurance reset after the exit
              description: |-
                ## Purpose
                Selling the business changes what can go wrong: key person and directors' cover end, new wealth makes liability claims more attractive, and new possessions may outgrow home insurance limits. Reviewing every policy against the new picture closes the gaps that open the day the company's cover stops.

                ## Milestones
                1. Every personal and company policy covering you listed with end dates.
                2. Run-off cover for directors' liability confirmed in the sale agreement or bought.
                3. Home, contents and liability limits checked against new values.
                4. Life and income cover levels reviewed for the new household plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every policy is listed with its new limit, directors' run-off cover is confirmed, and gaps found in the review are closed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every policy covering you personally and through the company"
                - "Ask the deal lawyer whether directors' run-off cover is in place"
                - "Check home and liability limits against your new assets"
                - "Review all personal cover with an insurance broker @recurring(yearly)"
            - name: Deciding the future of premises you own
              description: |-
                ## Purpose
                Plenty of owners hold the business premises personally or in a pension and let them to the company, so the sale forces a choice: sell to the buyer, keep them as an investment with a new lease, or sell on the open market. Each option changes your income, concentration and tax position, so deciding before the deal terms are set strengthens your hand.

                ## Milestones
                1. Current valuation, rent and lease terms documented.
                2. Options compared: sale to the buyer, a new lease, or open market sale.
                3. Tax consequences of each option checked with your adviser.
                4. A decision recorded and passed into the deal negotiations.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of selling, re-letting and open market sale of the premises exists, with tax checked and a decision passed to the deal team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather the premises valuation, lease and rent details"
                - "Ask a surveyor what rent and lease length a buyer would accept"
                - "Check the tax on each option with your adviser"
                - "Tell the deal team which option you want"
            - name: Decision-free period after completion
              description: |-
                ## Purpose
                Sudden wealth after years of work brings pressure to decide everything at once: a house, a boat, a new company, a pitch from every bank. Committing in writing to six to twelve months with no large irreversible decisions, apart from tax and safe cash, gives you time to rest and to learn what you actually want.

                ## Milestones
                1. A written commitment naming the length of the period and the decisions it covers.
                2. Exceptions listed: tax payments, the cash ladder, agreed tranches.
                3. A parked ideas list kept for everything tempting.
                4. A review at the end deciding which parked ideas go ahead.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written decision-free period with listed exceptions is kept, and a parked ideas list is reviewed at its end with outcomes recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the length of your decision-free period and what it covers"
                - "List the exceptions that may go ahead during it"
                - "Read through the parked ideas list with your partner @recurring(monthly:15)"
                - "Decide which parked ideas go ahead when the period ends"
            - name: Heads of terms personal finance checkpoint
              description: |-
                ## Purpose
                Heads of terms are usually non-binding, yet they fix the price structure, exclusivity and timetable that everything else follows. Pausing before signing to rerun the net proceeds waterfall, check it against your required number and confirm the personal tax steps are done makes this the last easy moment to change course.

                ## Milestones
                1. The waterfall rerun on the heads of terms structure.
                2. Net proceeds compared with your required and walk-away figures.
                3. Personal tax structuring actions confirmed complete.
                4. A decision to sign or decline recorded with reasons.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Before signing heads of terms, the waterfall is rerun, compared with your required figure, and a decision with reasons is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rerun the waterfall on the heads of terms structure"
                - "Compare the net figure with your required and walk-away amounts"
                - "Confirm with your tax adviser that pre-signing actions are done"
                - "Record your decision to sign or not, with reasons"
            - name: Completion day money checklist
              description: |-
                ## Purpose
                Completion day moves the largest sum of your life through a funds flow that several firms have touched, and fraudsters target exactly these transfers. A checklist covering account details confirmed by phone, the completion statement, receipts at each landing account and the first transfers keeps the day calm and the money safe.

                ## Milestones
                1. Landing account details confirmed verbally with the lawyer on a known number.
                2. The final completion statement checked against the waterfall.
                3. Each expected receipt confirmed in the landing accounts.
                4. Tax set-aside and cash ladder transfers made within a week.

                ## Notes
                Start from the **Operational checklist** template. Never act on emailed changes to bank details; call a number you already hold.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every expected completion receipt is confirmed in the landing accounts and matched to the completion statement, with tax set aside within a week."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Call the deal lawyer on a known number to confirm account details"
                - "Check the final completion statement against your waterfall"
                - "Confirm each receipt in the landing accounts on the day"
                - "Move the tax set-aside into its own account within a week"
            - name: First hundred days after the sale
              description: |-
                ## Purpose
                The first months after completion are crowded with handover duties, tax bills, offers and a sudden lack of structure, which is when rushed decisions happen. A hundred-day plan with a few fixed outcomes, such as the cash ladder running, the tax set aside, the team in place and real time off taken, gives that period a shape without forcing big choices.

                ## Milestones
                1. A hundred-day plan written with five or fewer outcomes.
                2. Cash ladder and tax set-aside running by day thirty.
                3. Handover duties under the sale agreement listed and met.
                4. A day-hundred review written with what comes next.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A hundred-day plan with five or fewer outcomes is written, and a review at day one hundred records which were met."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a hundred-day plan with no more than five outcomes"
                - "List your handover duties and their dates from the agreement"
                - "Block real time off in the first month"
                - "Write a day-hundred review of what is done and what is next"
            - name: Escrow and retention release
              description: |-
                ## Purpose
                Part of the price is often held in escrow or retained for one to three years against warranty claims, and its release is rarely automatic. Knowing the release date, the conditions and the steps to claim it, and deciding where the money goes before it lands, turns a forgotten sum into a planned tranche.

                ## Milestones
                1. Escrow amount, release dates and conditions noted from the agreement.
                2. Any open claims against the escrow tracked.
                3. Release requested in the required form on time.
                4. The released money allocated to a bucket in advance.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Escrow release dates and conditions are recorded, release is requested on time, and the money is allocated to a bucket on arrival."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the escrow amount, release date and conditions"
                - "Ask the escrow agent what paperwork release requires"
                - "Decide which bucket the released money will join"
                - "Request the release on the first permitted date"
            - name: Tax return for the year of the sale
              description: |-
                ## Purpose
                Your return covering the sale is likely the most complicated you will ever file, with the gain, any reliefs, deferred and contingent payments and new investment income all in play. Starting early, with documents assembled and a clear brief for your accountant, avoids late filing penalties and missed claims that can cost far more than the fee.

                ## Milestones
                1. All documents for the gain gathered: agreement, completion statement, costs and relief evidence.
                2. Treatment of deferred and contingent payments agreed with your accountant.
                3. The draft return reviewed by you before filing.
                4. Return filed and tax paid by the deadlines.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The sale year return is filed on time with all reliefs claimed, deferred payments treated as your accountant advised, and tax paid."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather the sale documents and costs your accountant will need"
                - "Ask how deferred and earn-out payments will be treated"
                - "Review the draft return line by line before filing"
                - "File the return and pay the balance by the deadline"
            - name: First anniversary review of the exit plan
              description: |-
                ## Purpose
                One year after completion is the right moment to check the plan against reality: what you spent, how the money is invested, whether the earn-out is on course and how you feel about life after the business. Writing a short review with your partner and adviser sets the plan for the next year and catches drift before it compounds.

                ## Milestones
                1. Actual spending compared with the paycheque and the baseline.
                2. Investments, costs and buckets compared with the plan.
                3. Deferred and earn-out progress summarised.
                4. Changes for year two agreed and written down.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written first anniversary review compares spending, investments and deferred payments with the plan and records changes for year two."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a review meeting for the first anniversary of completion"
                - "Pull a year of spending and investment figures"
                - "Summarise earn-out and deferred payment progress"
                - "Write the changes agreed for the second year"
            - name: Exit plan for a co-owning couple
              description: |-
                ## Purpose
                When both partners own shares or worked in the business, the sale ends a shared job as well as a shared asset, and each may want different things from the money. Building the plan together, with each partner's tax position, pension and future work considered separately, stops one person's assumptions becoming the household plan.

                ## Milestones
                1. Each partner's shares, tax position and pensions documented.
                2. Each partner's hopes for life after the sale written separately.
                3. Differences discussed and a joint plan agreed.
                4. Ownership of the main accounts set up in a way both understand.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each partner's position and hopes are written down separately, and a joint plan both have agreed is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each partner's shares, pensions and tax position"
                - "Write your hopes for life after the sale separately, then swap"
                - "Discuss the differences in a dedicated meeting"
                - "Record the joint plan you both agree"
            - name: Selling to managers or employees on deferred terms
              description: |-
                ## Purpose
                Management buyouts and employee ownership sales often pay the owner over five or more years out of future profits, so your retirement income depends on a business you no longer run. Planning for that means sizing spending to the guaranteed parts, holding security where possible and watching the business's results closely.

                ## Milestones
                1. Payment schedule, security and default terms documented.
                2. A household income plan built assuming only the guaranteed payments.
                3. Access to quarterly management accounts written into the documents.
                4. A fallback plan written for a payment shortfall.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An income plan relies only on guaranteed payments, the buyer's accounts arrive each quarter, and a written fallback covers a shortfall."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Summarise the payment schedule and security from the documents"
                - "Build the income plan on guaranteed payments only"
                - "Review the business's quarterly management accounts @recurring(quarterly)"
                - "Write what you would do if a payment fell short"
            - name: Selling a trade or shop business
              description: |-
                ## Purpose
                For a plumber, salon owner, shopkeeper or small agency founder, the proceeds may be modest, and often the business was meant to be the pension. Turning that sum into lasting income needs simple, low-cost choices: clear the tax first, protect an emergency fund, top up pensions where allowed and avoid products sold on commission.

                ## Milestones
                1. Net proceeds after tax and fees confirmed.
                2. An emergency fund of several months' spending set aside.
                3. Pension top-up options checked with an adviser.
                4. A simple long-term holding chosen for the rest, with its yearly fee recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Net proceeds are split into an emergency fund, any pension top-up and a low-cost long-term holding, each recorded with its cost."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Confirm net proceeds after tax and fees with your accountant"
                - "Set aside several months of spending as an emergency fund"
                - "Ask a fee-only adviser about pension top-ups"
                - "Choose a low-cost long-term holding and record its yearly fee"
            - name: Serial founder ring-fence for the next venture
              description: |-
                ## Purpose
                Founders who plan to start again risk pouring the proceeds back into one new company, rebuilding the concentration they just escaped. Ring-fencing a fixed amount for the next venture and angel cheques, with the rest locked into the long-term plan, lets you build boldly without betting the household.

                ## Milestones
                1. A maximum amount for the next venture and private deals written down.
                2. That amount held in a separate account.
                3. The rest committed to the long-term buckets.
                4. A rule recorded for what happens if the venture needs more.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written cap for new ventures is held in a separate account, the rest is in the long-term plan, and a rule covers requests for more."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide the most you will put into new ventures and private deals"
                - "Open a separate account for that amount"
                - "Write a rule for when the venture asks for more money"
                - "Share the cap with your partner and adviser"
            - name: Working for the buyer after the sale
              description: |-
                ## Purpose
                Many sellers stay on for one to three years with a salary, earn-out targets and a non-compete, which changes both income and freedom. Planning the money for that period, including tax on the salary, leaver terms that can cost you deferred payments and the date you can leave cleanly, keeps the terms from trapping you.

                ## Milestones
                1. Service agreement terms summarised: salary, notice, restrictive covenants.
                2. Leaver terms and their effect on deferred and earn-out payments written down.
                3. A household budget that does not depend on the new salary continuing.
                4. The earliest clean exit date recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A summary of the service agreement, leaver terms and earliest clean exit date exists, and the household budget works without the new salary."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Summarise your service agreement in plain words"
                - "Note how good and bad leaver terms affect deferred payments"
                - "Check the household budget works without the new salary"
                - "Write down the earliest date you can leave cleanly"
            - name: Selling up and moving country
              description: |-
                ## Purpose
                Relocating and selling the business are often planned together, and the order matters: residency on the date of sale can decide which country taxes the gain and whether exit or departure charges apply. Planning the move and the sale on one timeline, with advisers in both countries, prevents a costly mismatch of dates.

                ## Milestones
                1. Residency rules in both countries summarised by your advisers.
                2. The sale and the move placed on one timeline.
                3. Tax on the gain estimated under each order of events.
                4. Bank, investment and pension accounts checked for whether they can follow you.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One timeline places the sale and the move, with tax on the gain estimated in each order and written advice from both countries filed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask advisers in both countries how residency affects tax on the sale"
                - "Put the sale and move dates on one timeline"
                - "Compare the estimated tax under each order of events"
                - "Check which accounts can stay open after you move"
            - name: Proceeds that fall short of your number
              description: |-
                ## Purpose
                Some exits pay less than planned: a distressed sale, a failed earn-out, a sale of assets after a hard few years. Re-planning calmly with the real figures, deciding what work, spending or timing has to change, is far better than spending as if the original number had arrived.

                ## Milestones
                1. Actual net proceeds set against the required number.
                2. The gap expressed in years of spending or income needed.
                3. Options listed: more work, lower spending, later retirement, property changes.
                4. A revised plan agreed with your partner and adviser.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A revised written plan sets the actual proceeds against the required number and records the changes agreed to close the gap."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set the actual net proceeds against your required figure"
                - "Express the gap as years of income or spending"
                - "List the changes that could close the gap"
                - "Agree a revised plan with your partner and adviser"
            - name: Holding company for the proceeds
              description: |-
                ## Purpose
                In some countries owners can keep proceeds inside a holding or investment company and draw income over time, which may change the tax paid and how money passes to the family. The structure adds accounts, filings and running costs, so it needs a clear-eyed comparison with holding the money personally.

                ## Milestones
                1. Personal and company holding compared on tax, cost and flexibility by your adviser.
                2. Running costs and filing duties listed.
                3. A decision recorded with the written advice.
                4. If chosen, the company set up and its bank and investment accounts opened.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of personal and holding company ownership of the proceeds is filed, with a recorded decision and any company set up."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your adviser to compare personal and company ownership of the proceeds"
                - "List the yearly running costs and filings of a holding company"
                - "Record your decision with the written advice"
                - "Open company bank and investment accounts if you go ahead"
            - name: Private market commitments and capital calls
              description: |-
                ## Purpose
                Newly liquid founders are offered private equity funds, venture funds and co-investments with high minimums, ten-year lock-ups and capital calls that arrive at short notice. Setting a ceiling for private markets, tracking commitments against cash and forecasting calls keeps illiquid holdings from crowding out the cash you need.

                ## Milestones
                1. A maximum share of wealth for private markets set and written down.
                2. Every commitment recorded with amount, called so far and expected calls.
                3. A cash reserve sized to cover the next year of calls.
                4. Fund reports and distributions logged.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A commitment log tracks every private fund with called and uncalled amounts, and cash covers the next twelve months of forecast calls."
                cadence: rolling
              tasks:
                - "Write the most you will commit to private markets"
                - "Log each commitment with amount, called and uncalled"
                - "Update the capital call forecast from fund reports @recurring(quarterly)"
                - "Keep cash for a year of expected calls in the ladder"
            - name: Hedging a concentrated acquirer shareholding
              description: |-
                ## Purpose
                Large holdings of a listed acquirer's shares can sometimes be protected with collars, prepaid forwards or exchange funds, depending on your country and the restrictions you signed. These tools have costs, tax effects and approval requirements, so understanding them with a specialist lets you compare them fairly with simply selling over time.

                ## Milestones
                1. Hedging tools available where you live listed with costs and restrictions.
                2. Approval rules from the acquirer's dealing policy confirmed.
                3. Hedging compared with a staged sell-down on cost, tax and risk.
                4. A decision recorded with the specialist's written analysis.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of hedging tools and a staged sell-down is filed, with the acquirer's approval rules confirmed and a decision recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask a specialist which hedging tools apply to your holding"
                - "Check the acquirer's dealing policy for hedging restrictions"
                - "Compare hedging with a staged sell-down on cost and tax"
                - "Record the decision with the written analysis"
            - name: Family investment committee for large proceeds
              description: |-
                ## Purpose
                Where proceeds are large enough to support several generations, informal decisions start to strain: who decides, how adult children are involved and how advisers are held to account. A small investment committee with written terms of reference, a quarterly meeting and minutes brings the discipline of a board to the family's money.

                ## Milestones
                1. Members, roles and voting rules written in terms of reference.
                2. An investment policy adopted by the committee.
                3. Quarterly meetings held with minutes.
                4. Advisers reporting to the committee against agreed measures.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written terms of reference and an investment policy exist, and the committee meets quarterly with minutes and adviser reports."
                cadence: cyclic
              tasks:
                - "Draft terms of reference naming members, roles and voting"
                - "Adopt a written investment policy for the committee"
                - "Hold the committee meeting with minutes @recurring(quarterly)"
                - "Ask the agent to draft an adviser reporting template"
---

# Business Owner Exit Wealth Plan

This area is for founders and small business owners turning the sale of a company into money that has to last, whether the proceeds are modest or life-changing. It starts with the foundations before the deal (a personal balance sheet, the net number you need, the price-to-cash waterfall, spending, advisers and landing accounts), then the routines that run after completion, the deal terms worth learning, decisions on tax, consideration, investing and family requests, dated events from heads of terms to the first anniversary, situations such as co-owning couples, buyouts and staying on with the buyer, and finally specialist work on holding companies, private markets, hedging and family governance.

What repeats is a monthly cash ladder check, a monthly paycheque comparison, earn-out and deferred payment tracking, a monthly tax calendar check, quarterly household and committee meetings, a quarterly wealth report and yearly resets of insurance and the paycheque. The Monthly budget and bills, Metrics log, Meeting notes, Risk register, Vendor and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
