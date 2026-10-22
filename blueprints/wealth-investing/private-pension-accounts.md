---
id: wealth-investing.private-pension-accounts
name: Private Pension Accounts
description: "A self-directed pension or IRA chosen on purpose: the right type and provider, contributions and tax relief that actually arrive, sensible funds, and yearly checks on limits, charges and beneficiaries."
category: personal
version: 1.0.0
tags: [wealth-investing, private-pension-accounts, everyone, freelancer, personal-pension, ira, tax-relief, contributions]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Private Pension Accounts
          description: "Opening and managing self-directed pensions or IRAs, choosing a provider, funds and contribution levels alongside any workplace scheme."
          projects:
            - name: Purpose of a private pension beside your workplace scheme
              description: |-
                ## Purpose
                Most people open a private pension for one of four reasons: they have no employer scheme, they have outgrown its fund range, they want somewhere for contributions above the employer match, or they are self-employed and this is the main retirement account. Writing down which reason is yours decides almost everything after it, from the type of account to how much effort the fund choice deserves.

                ## Milestones
                1. Every existing pension you hold listed with its provider and rough value.
                2. The main reason for a private pension written in one or two sentences.
                3. A rough monthly or yearly amount you intend to contribute, with where it comes from.
                4. A decision recorded on whether the private pension is your main or a secondary retirement account.

                ## Notes
                If you are employed and not yet taking the full employer match, close that gap first; free employer money usually beats anything a private account can offer.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page note naming every existing pension, the reason for the private one, and the intended contribution amount."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every pension you hold today with its provider and last known value"
                - "Check whether you are already receiving the full employer match at work"
                - "Write one sentence on what the private pension is for"
                - "Decide a starting contribution and the account it will be paid from"
            - name: Contribution eligibility and limit check
              description: |-
                ## Purpose
                Before any money goes in, confirm you are allowed to contribute and how much will attract tax relief. Limits depend on earnings, age and income: in the UK, for example, relief on personal contributions is capped at your relevant earnings within the annual allowance, while US IRAs have a yearly dollar limit and income bands for deductions and Roth eligibility.

                ## Milestones
                1. This year's contribution limits for your country and account type written down from the tax authority's own guidance.
                2. Your relevant earnings or taxable compensation for the year estimated.
                3. Contributions already made elsewhere this tax year, including employer ones, totalled.
                4. A maximum personal contribution for this year recorded with the date you checked it.

                ## Notes
                Limits change most years. Note the source and date beside every figure so you know when it needs checking again.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written figure for this year's maximum personal contribution, with its source, the date checked and the earnings it is based on."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the tax authority's current page on pension or IRA contribution limits"
                - "Estimate your relevant earnings for this tax year"
                - "Total every pension contribution already made this tax year"
                - "Record your maximum personal contribution with the source and date"
            - name: Choosing the type of personal pension or IRA
              description: |-
                ## Purpose
                Private pensions come in several shapes: a ready-made personal or stakeholder pension with a short fund list, a self-invested pension with thousands of funds and shares, or in the US a traditional or Roth IRA. The right one depends on how hands-on you want to be, how large the pot will be, and whether paying tax now or later suits your situation.

                ## Milestones
                1. The account types available where you live listed with one line on each.
                2. A note on whether you want a short curated fund list or a wide self-select range.
                3. For IRAs, the tax-now versus tax-later trade-off written out for your expected income in retirement.
                4. One account type chosen, with the reason recorded.

                ## Notes
                Tax treatment decisions are worth a short session with a qualified adviser or tax professional if your income is near a threshold.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One account type chosen and written down with two or three reasons, including how hands-on you intend to be."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the private pension or IRA types available in your country"
                - "Decide whether you want a curated fund list or full self-select"
                - "Compare paying tax on contributions now against tax on withdrawals later"
                - "Record the chosen account type and the reasons in your pension note"
            - name: Provider shortlist scored on charges and fund range
              description: |-
                ## Purpose
                Two providers holding identical funds can differ by several hundred pounds or dollars a year in platform fees, dealing charges and exit costs. Scoring three or four providers against the same criteria, using your own pot size and contribution pattern, turns marketing pages into a comparison you can defend.

                ## Milestones
                1. Five criteria chosen, such as platform fee, fund charges, dealing costs, fund range and app quality.
                2. Three or four providers scored against every criterion using their published charges pages.
                3. Total yearly cost estimated for each at your current pot and planned contributions.
                4. One provider chosen and the runner-up noted in case the first refuses the application.

                ## Notes
                Start from the **Purchase decision** template. Check the provider is authorised by your country's financial regulator before going further.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored table of at least three regulated providers with a yearly cost estimate for each and one provider chosen."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick five criteria that matter for how you will use the pension"
                - "Download the charges page for four regulated providers"
                - "Score each provider and estimate its total yearly cost for your pot"
                - "Confirm the chosen provider on the regulator's public register"
                - "Ask the agent to summarise the scored table into a short decision note"
            - name: Flat fee versus percentage fee break-even
              description: |-
                ## Purpose
                A percentage platform fee is cheap on a small pot and expensive on a large one, while a flat fee works the other way round. Working out the pot size where the two cross, and when your own pot will reach it, tells you whether today's cheapest provider will still be cheapest in ten years.

                ## Milestones
                1. One percentage-fee and one flat-fee provider's charges written side by side.
                2. The break-even pot size calculated, including any caps on the percentage fee.
                3. A rough projection of when your pot passes that figure at your contribution rate.
                4. A note recording whether a provider switch is likely later and roughly when.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A break-even pot size between flat and percentage charging recorded, with the year your pot is expected to reach it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy the platform fee structure of one flat and one percentage provider"
                - "Calculate the pot size where their yearly costs are equal"
                - "Estimate the year your pot reaches that size at current contributions"
                - "Note in your pension file whether a later switch looks likely"
            - name: Opening the private pension account
              description: |-
                ## Purpose
                Opening the account takes about half an hour online, but the choices made on the form linger: the tax relief declaration, the bank account linked for contributions, and where uninvested cash sits. Doing it in one sitting with documents to hand avoids a half-open account that quietly never receives money.

                ## Milestones
                1. Identity documents, tax reference number and bank details gathered before starting.
                2. The application submitted and identity checks passed.
                3. The tax relief or eligibility declaration completed accurately.
                4. Account number, login and provider contact details saved in your pension file.

                ## Notes
                Read the declaration you sign about eligibility for tax relief; it is your statement, not the provider's, and the tax authority can claw back relief wrongly claimed.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An open private pension or IRA in your name, with the account number and provider contact details stored in your pension file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather your identity documents, tax reference and bank details in one place"
                - "Complete the online application with the chosen provider"
                - "Read the tax relief declaration before you sign it"
                - "Save the account number and provider phone number in your pension file"
            - name: Beneficiary nomination on the new pension
              description: |-
                ## Purpose
                Pensions usually sit outside your will, so the provider or scheme administrator decides who receives the pot, guided by the nomination you lodge with them. An account opened without a nomination can leave a partner or children waiting months while the provider investigates, so complete it in the first weeks.

                ## Milestones
                1. The provider's nomination or expression of wishes form located.
                2. Beneficiaries named with full names, dates of birth and percentage shares.
                3. A contingent beneficiary added in case the first one dies before you.
                4. Confirmation from the provider that the nomination is on file, saved with your will papers.

                ## Notes
                In some countries the nomination is binding and in others it is only a wish the administrator considers. Check which applies and mention the pension when you next review your will.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A beneficiary nomination naming primary and contingent beneficiaries is confirmed on file with the provider."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the beneficiary nomination form in the provider's account area"
                - "Name primary and contingent beneficiaries with their percentage shares"
                - "Submit the nomination and download the confirmation"
                - "File a copy of the confirmation with your will papers"
            - name: Pension login security and document folder
              description: |-
                ## Purpose
                Pension accounts are a favourite target for fraud because they hold large sums and owners rarely log in. Strong unique credentials, two-step sign-in and one folder holding every key document mean you, or someone acting for you, can reach the account quickly and nobody else can.

                ## Milestones
                1. A unique password stored in a password manager and two-step sign-in switched on.
                2. Provider phone number and account number recorded somewhere a trusted person can find.
                3. One digital folder holding the welcome pack, terms, key features and nomination confirmation.
                4. Paper statements switched to online with email alerts for logins and withdrawals, if offered.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two-step sign-in is active on the pension account and one folder holds its welcome pack, terms and nomination confirmation."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Switch on two-step sign-in in the pension account settings"
                - "Create a pension folder for the welcome pack, terms and key features"
                - "Turn on email alerts for logins, transfers and withdrawals"
                - "Tell a trusted person where the pension folder lives"
            - name: First contribution and tax relief confirmation
              description: |-
                ## Purpose
                Your first payment is the test of the whole set-up: whether the money arrives, whether relief is added and whether it gets invested. Under relief at source, as in the UK, the provider claims basic-rate relief from the tax authority and it typically lands six to eleven weeks later, so the check has to be diarised rather than assumed.

                ## Milestones
                1. The first contribution sent and shown as received on the account.
                2. The expected relief amount worked out and written down.
                3. The relief seen on the account, or a query raised with the provider if it is late.
                4. The contribution and relief both invested rather than sitting as cash.

                ## Notes
                For a US IRA there is no relief added to the account; the equivalent check is that the contribution is recorded against the correct tax year.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The first contribution and its tax relief, or its correct tax-year coding, are both visible and invested in the account."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Send the first contribution and save the receipt"
                - "Work out the relief you expect to see and when"
                - "Put a reminder in the calendar twelve weeks after the payment"
                - "Raise a query with the provider if the relief has not appeared by then"
            - name: Default ready-made portfolio versus choosing your own funds
              description: |-
                ## Purpose
                Every provider offers a ready-made option, usually a multi-asset fund at a few risk levels, and the full fund list for people who want to choose. Comparing the default's cost, holdings and risk level against a simple self-chosen mix shows whether choosing your own funds is worth the extra decisions over the decades ahead.

                ## Milestones
                1. The provider's ready-made options listed with their charges and risk grades.
                2. The holdings and share-to-bond split of the most suitable ready-made option noted.
                3. A simple self-chosen alternative priced on the same basis.
                4. A decision recorded on ready-made or self-chosen, with the reason.

                ## Notes
                The best fund choice is one you will leave alone through a market fall. Simplicity counts in its favour.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of one ready-made option and one self-chosen mix, with costs, and a decision on which the pension will hold."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the provider's ready-made options with charges and risk grades"
                - "Read the factsheet of the ready-made option nearest your risk level"
                - "Price a simple self-chosen alternative on the same basis"
                - "Record whether the pension will hold ready-made or self-chosen funds"
            - name: Monthly direct debit into the private pension
              description: |-
                ## Purpose
                Regular monthly payments remove the need to decide each month and spread purchases across market highs and lows. A direct debit set a few days after payday, with a quick monthly glance to confirm it collected and the relief followed, keeps contributions flowing without becoming another chore.

                ## Milestones
                1. A direct debit set up for the agreed amount on a date just after payday.
                2. The first three collections confirmed on the account.
                3. A rule written for what happens if a collection fails.
                4. Twelve consecutive months of contributions recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly contributions collected, each confirmed on the account along with any tax relief due."
                cadence: rolling
              tasks:
                - "Set up the direct debit for a date two or three days after payday"
                - "Write down what you will do if a collection bounces"
                - "Check this month's contribution and its tax relief both arrived @recurring(monthly:9)"
            - name: Automatic investment of new contributions
              description: |-
                ## Purpose
                Money that lands in a pension does not invest itself on most self-invested platforms; it sits in the cash account earning little until you buy something. Setting a standing instruction to invest each contribution and relief payment into chosen funds, then checking the cash balance each quarter, stops years of quiet cash drag.

                ## Milestones
                1. The provider's regular investment or auto-invest feature found and understood.
                2. A standing instruction set that splits each contribution across your chosen funds.
                3. A target cash balance written down, enough for fees and nothing more.
                4. Four quarterly cash checks completed in a year.

                ## Notes
                Some providers deduct fees from cash. Keep a small buffer, or they may sell holdings to cover charges.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A standing investment instruction is active and four quarterly checks show the cash balance within your target."
                cadence: rolling
              tasks:
                - "Find the regular investment setting in your pension account"
                - "Set the fund split for each new contribution and relief payment"
                - "Decide how much cash to keep for fees"
                - "Invest any cash above your buffer after checking the balance @recurring(quarterly)"
            - name: Annual allowance tracker across every scheme
              description: |-
                ## Purpose
                Contribution limits usually count everything paid into all your pensions in the year, including employer payments into a workplace scheme you never think about. A simple tracker adding up every contribution as it happens shows how much room is left before you make a bonus payment, rather than discovering an excess charge on a tax return.

                ## Milestones
                1. A tracker with one row per scheme and columns for personal, employer and tax relief amounts.
                2. This tax year's limit and the date you checked it written at the top.
                3. All contributions made so far this year entered.
                4. A year-end total compared with the limit and saved with your tax records.

                ## Notes
                Start from the **Metrics log** template. In the UK the annual allowance counts the gross amount, so include basic-rate relief added to personal payments.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A tracker holding every contribution to every pension this tax year, with a year-end total compared against the limit."
                cadence: rolling
              tasks:
                - "Create a contribution tracker from the metrics log template"
                - "Add a row for each pension that receives money this year"
                - "Enter contributions from payslips and pension statements @recurring(quarterly)"
                - "Compare the tax year's total with the allowance and save the result @recurring(yearly)"
            - name: Claiming extra tax relief on your tax return
              description: |-
                ## Purpose
                Higher and additional rate taxpayers using a relief-at-source pension only get basic-rate relief automatically; the rest has to be claimed through the tax return or by contacting the tax authority. Missing the claim leaves real money behind every year, and in the UK unclaimed relief can usually only be recovered for the previous four tax years.

                ## Milestones
                1. Whether you pay tax above the basic rate confirmed for this year.
                2. The gross contributions paid in the year totalled from provider statements.
                3. The claim made on the tax return or with the tax authority.
                4. The resulting refund or tax code change checked and recorded.

                ## Notes
                For a US traditional IRA, the equivalent step is making sure a deductible contribution is reported on the return for the right year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every year's gross personal pension contributions are reported on the tax return or to the tax authority, with the refund or code change recorded."
                cadence: cyclic
              tasks:
                - "Check whether your income reaches the higher rate band this year"
                - "Ask the provider for a statement of gross contributions for the tax year"
                - "Report gross pension contributions on your tax return @recurring(yearly)"
                - "Look back four years for any relief you never claimed"
            - name: Quarterly pension statement review
              description: |-
                ## Purpose
                Four times a year is often enough to notice a stopped contribution, an odd fee or a fund that has drifted without the temptation to react to every market move. A fifteen-minute review with three fixed questions keeps you aware of the account without turning it into a hobby.

                ## Milestones
                1. Three fixed review questions written down: money in, money out, anything unexpected.
                2. A quarterly calendar slot booked.
                3. Each quarter's value, contributions and charges noted in one line.
                4. Four consecutive quarterly reviews completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly reviews logged, each recording value, contributions and charges and any action taken."
                cadence: rolling
              tasks:
                - "Write the three questions you will ask at every review"
                - "Download the quarter's statement and note value, contributions and charges @recurring(quarterly)"
                - "Write one line on anything that needs following up"
            - name: Yearly charges and provider health check
              description: |-
                ## Purpose
                Charges creep as providers restructure fees, and a provider that suited a small pot may not suit a larger one. Once a year, reading the annual costs disclosure and asking a few set questions about service and fees tells you whether to stay put or start a switch.

                ## Milestones
                1. The provider's yearly costs and charges statement downloaded.
                2. Total charges for the year compared with your estimate when you chose the provider.
                3. Any fee changes announced during the year noted.
                4. A stay or switch decision recorded for the coming year.

                ## Notes
                Start from the **Operational checklist** template so the same questions are asked every year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly note comparing actual charges with your original estimate and recording a stay or switch decision."
                cadence: cyclic
              tasks:
                - "Build a yearly provider checklist from the operational checklist template"
                - "Download the annual costs and charges statement"
                - "Compare total charges with what you expected to pay"
                - "Run the provider checklist and record a stay or switch decision @recurring(yearly)"
            - name: Pension paperwork filing routine
              description: |-
                ## Purpose
                Contribution confirmations, relief notices, contract notes and annual statements arrive by email and in the secure inbox, and the one you need for a tax return or a dispute is always the one that went missing. A short monthly filing slot keeps the record complete for the tax authority, an adviser or whoever handles your affairs one day.

                ## Milestones
                1. A folder structure by tax year for the pension file.
                2. Last year's documents downloaded from the provider's secure inbox.
                3. A naming pattern used for every document, such as date, provider and type.
                4. Six consecutive months filed on schedule.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pension document from the last twelve months is filed by tax year under a consistent naming pattern."
                cadence: rolling
              tasks:
                - "Create one folder per tax year inside the pension file"
                - "Download last year's documents from the provider's secure inbox"
                - "Choose a file naming pattern and rename what you have"
                - "File this month's pension documents and confirmations @recurring(monthly:27)"
            - name: Beneficiary review after life events
              description: |-
                ## Purpose
                Marriage, divorce, a new child or a death in the family can make an old nomination wrong overnight, and a former partner left on the form can end up receiving the pot. Reviewing nominations once a year, and straight away after any big change, keeps the paperwork in line with what you actually want.

                ## Milestones
                1. A list of the life events that should trigger an immediate review.
                2. Every pension's current nomination checked against your wishes.
                3. Any out-of-date nomination replaced and confirmation saved.
                4. The yearly review date set in the calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Nominations on every pension match your current wishes, confirmed within the last twelve months."
                cadence: cyclic
              tasks:
                - "Write down the life events that should trigger a nomination update"
                - "Check the nomination on every pension you hold"
                - "Replace any nomination that no longer reflects your wishes"
                - "Confirm every pension nomination still matches your wishes @recurring(yearly)"
            - name: Fund change notices and closures check
              description: |-
                ## Purpose
                Funds inside your pension change underneath you: managers leave, charges move, funds merge or close and their money is moved to something you did not pick. Reading provider and fund notices each quarter, and acting on the few that matter, avoids finding out from an annual statement that your holdings changed months ago.

                ## Milestones
                1. A list of the funds you hold with their current charges.
                2. Fund notices routed to a folder or label you actually read.
                3. Each notice sorted into ignore, watch or act.
                4. Any fund marked act reviewed against a replacement within a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fund change notice received in the year was read, sorted into ignore, watch or act, and acted on where needed."
                cadence: rolling
              tasks:
                - "List your funds with their current ongoing charges"
                - "Set an email rule that labels fund and provider notices"
                - "Sort the quarter's fund notices into ignore, watch or act @recurring(quarterly)"
                - "Compare a replacement fund for any notice marked act"
            - name: Contribution step-up after each pay rise
              description: |-
                ## Purpose
                Raising contributions when income rises is the least painful way to save more, because the money was never part of your spending. Tying a set share of each pay rise or price increase to the pension, decided in advance, turns a vague intention into an automatic yearly step.

                ## Milestones
                1. A rule chosen, such as half of every pay rise goes to the pension.
                2. The current contribution and the rule written in your pension note.
                3. The direct debit increased after the most recent pay rise.
                4. Three yearly step-ups recorded with the new amount each time.

                ## Notes
                Freelancers can use a rise in day rate or a better year's profit as the trigger instead of a pay review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written step-up rule exists and the contribution has been raised in line with it after each pay rise or rate increase."
                cadence: cyclic
              tasks:
                - "Choose what share of each pay rise goes to the pension"
                - "Write the rule beside your current contribution in the pension note"
                - "Raise the pension direct debit in line with your step-up rule @recurring(yearly)"
            - name: How pension tax relief reaches your account
              description: |-
                ## Purpose
                Tax relief arrives in different ways depending on the scheme: relief at source tops up a net payment, net pay takes contributions before tax, salary sacrifice swaps salary for an employer payment, and some accounts give a deduction on the tax return instead. Understanding which applies to each of your accounts explains your payslip, your statements and what you still need to claim.

                ## Milestones
                1. The four main relief methods written out in your own words.
                2. Each of your pensions labelled with the method it uses.
                3. A worked example of one contribution, from your pay to the amount invested.
                4. Any relief you are not receiving automatically identified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each of your pensions is labelled with its tax relief method and one contribution is traced from pay to amount invested."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the tax authority's guidance on how pension relief is given"
                - "Label each of your pensions with the relief method it uses"
                - "Trace one contribution from your payslip to the amount invested"
                - "Note any relief that needs claiming rather than arriving by itself"
            - name: Reading a pension fund factsheet
              description: |-
                ## Purpose
                Fund factsheets carry everything needed to judge a fund in two pages, but the figures that matter are easy to miss among the marketing. Learning to read ongoing charges, transaction costs, holdings, benchmark and fund size lets you assess a fund in ten minutes rather than trusting a star rating.

                ## Milestones
                1. Factsheets for two funds you hold or are considering downloaded.
                2. The ongoing charge, transaction costs and fund size found on each.
                3. Top ten holdings and country split compared with the benchmark.
                4. A short checklist of factsheet questions saved for future fund choices.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved factsheet checklist, tested on two real funds with their charges, holdings and benchmark recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Download the factsheet and key information document for two funds"
                - "Find the ongoing charge and transaction costs on each"
                - "Compare each fund's holdings and returns with its stated benchmark"
                - "Write a six-question checklist for reading any future factsheet"
            - name: Pension access age and early withdrawal rules
              description: |-
                ## Purpose
                Money in a private pension is locked until a minimum age, and taking it earlier usually means penalties or heavy tax. Knowing your own earliest access date, including announced rises such as the UK move from 55 to 57 in 2028 or the US 59 and a half rule and its exceptions, stops you counting on money you cannot reach.

                ## Milestones
                1. The minimum access age that applies to you, with any announced changes, written down.
                2. The penalties or tax charges for early access noted from official guidance.
                3. Any exceptions, such as serious ill health, listed.
                4. The earliest date you could access each pension added to your pension note.

                ## Notes
                Anyone offering to release a pension before the minimum age outside the official exceptions is almost certainly running a scam.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your earliest legal access date for every pension is recorded, with the early access penalties and exceptions noted from official guidance."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look up the minimum pension access age where you live"
                - "Check for any announced change to that age that affects you"
                - "Note the tax or penalty for early access and the exceptions"
                - "Add the earliest access date for each pension to your pension note"
            - name: Lifestyling and target date funds explained
              description: |-
                ## Purpose
                Many ready-made pension funds change their mix automatically as you approach a chosen retirement date, moving from shares into bonds and cash. That suits someone buying an annuity at a fixed age but can be too cautious for someone planning to keep the pot invested for decades, so it pays to know what yours is doing.

                ## Milestones
                1. Whether any of your funds is lifestyled or target-dated confirmed.
                2. The glide path, meaning the planned mix at each age, found in the fund documents.
                3. The retirement date the fund assumes checked against your own plans.
                4. A note on whether the glide path still fits how you expect to take your money.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The glide path of every lifestyled or target date fund you hold is recorded with the retirement date it assumes."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Check whether each fund you hold changes its mix with age"
                - "Find the glide path chart in the fund's documents"
                - "Compare the assumed retirement date with your own plans"
                - "Write whether the glide path still fits how you will take the money"
            - name: Spotting pension scams and unregulated investments
              description: |-
                ## Purpose
                Cold calls offering a free pension review, guaranteed high returns, overseas investments or early access before the minimum age are the classic signs of a pension scam, and money transferred out is rarely recovered. Learning the warning signs and your regulator's checks before anyone calls is the cheapest protection a pension owner has.

                ## Milestones
                1. Your regulator's published list of scam warning signs read.
                2. The way to check a firm on the regulator's register practised once.
                3. A household rule written: no transfer or new investment from an unsolicited contact.
                4. Older relatives with pensions told about the same warning signs.

                ## Notes
                In many countries unsolicited pension cold calls are banned outright, so any such call is a red flag on its own.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written no-transfer-from-cold-contact rule exists and you have checked one firm on the regulator's register yourself."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your financial regulator's pension scam warning page"
                - "Practise checking a firm on the regulator's public register"
                - "Write the household rule about unsolicited pension offers"
                - "Share the warning signs with an older relative who has a pension"
            - name: Carry forward of unused pension allowance
              description: |-
                ## Purpose
                In some countries, including the UK, unused annual allowance from the previous three tax years can be carried forward, letting a good year or a business sale fund a much larger contribution with relief. The rules are fiddly: you need to have been a scheme member in those years, and personal contributions are still limited by this year's earnings.

                ## Milestones
                1. Whether carry forward exists where you live confirmed from official guidance.
                2. Total contributions for each of the last three years gathered from statements.
                3. Unused allowance for each year calculated.
                4. The maximum contribution available this year recorded, with any earnings limit noted.

                ## Notes
                Calculations here are worth checking with a tax adviser before a large payment; an excess triggers a tax charge.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Unused allowance for each of the last three years is calculated from statements, giving a maximum available contribution for this year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm whether carry forward of pension allowance exists in your country"
                - "Gather total pension contributions for each of the last three years"
                - "Calculate the unused allowance for each year"
                - "Write down this year's maximum contribution including carry forward"
            - name: Money purchase annual allowance after flexible access
              description: |-
                ## Purpose
                Taking taxable income flexibly from any defined contribution pot can permanently cut how much you may pay into pensions with relief; in the UK the limit drops to 10,000 pounds a year. People who dip into an old pot in their fifties and keep contributing to a private pension are the ones caught out.

                ## Milestones
                1. The events that trigger the reduced allowance listed from official guidance.
                2. Each of your pensions checked for whether any trigger has already happened.
                3. The reduced limit and its effect on your planned contributions written down.
                4. A rule recorded to check this before taking any money from any pension.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of the triggers for the reduced allowance, with each of your pensions confirmed as triggered or not."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the official guidance on the reduced allowance after flexible access"
                - "List which withdrawals trigger it and which do not"
                - "Check whether any of your pensions has already triggered it"
                - "Note the rule to check before taking money from any pension"
            - name: Backdoor and conversion routes for high earners
              description: |-
                ## Purpose
                Where income limits block direct contributions to a tax-free retirement account, some systems allow a contribution to a taxable account followed by a conversion, as with the US backdoor Roth IRA. The mechanics are simple, but rules such as the US pro-rata calculation can create an unexpected tax bill if other pre-tax balances exist.

                ## Milestones
                1. Whether an income limit applies to you this year confirmed.
                2. The conversion route and its pro-rata or aggregation rules written out.
                3. Existing pre-tax balances that could affect the calculation listed.
                4. A decision recorded, ideally after checking with a tax professional.

                ## Notes
                Keep the tax form or statement for every conversion; it is the evidence of what was already taxed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A recorded decision on whether to use a conversion route this year, with pre-tax balances and the tax consequence noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check this year's income limit for direct tax-free contributions"
                - "Read the official rules on conversions and the pro-rata calculation"
                - "List every pre-tax retirement balance you hold"
                - "Book a short session with a tax professional before converting"
            - name: How inherited pensions are taxed
              description: |-
                ## Purpose
                What your heirs receive from a pension depends on your age at death, who inherits and how they take it, and the rules are changing in several countries. The US ten-year rule for most non-spouse IRA heirs and the UK plan to bring unused pensions into inheritance tax from 2027 are two examples that change how a pension fits an estate.

                ## Milestones
                1. The current rules for inherited pensions where you live summarised in plain words.
                2. Any announced changes and their start dates noted.
                3. The likely treatment for each of your named beneficiaries written down.
                4. Questions for your estate planner or will writer listed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of inherited pension tax rules where you live, applied to each named beneficiary, with open questions listed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the official guidance on how inherited pensions are taxed"
                - "Note any announced rule changes and when they start"
                - "Write how the rules apply to each of your beneficiaries"
                - "List questions to raise at your next will or estate review"
            - name: Extra contributions through work or a private pension
              description: |-
                ## Purpose
                If your employer offers salary sacrifice, an extra pound paid through work can save national insurance or payroll tax as well as income tax, which a private pension cannot match. Comparing the after-tax cost of the same contribution both ways, alongside fund choice and charges, settles where extra money should go.

                ## Milestones
                1. The after-tax cost of a set extra contribution through salary sacrifice calculated.
                2. The after-tax cost of the same contribution into the private pension calculated.
                3. Fund range and charges of the two schemes compared.
                4. A decision recorded on where extra contributions go, with a review date.

                ## Notes
                Salary sacrifice reduces your contractual salary, which can affect mortgage applications and some state benefits. Check before switching.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of the after-tax cost of the same extra contribution through work and privately, with a decision recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask payroll whether salary sacrifice is available and how it works"
                - "Work out the after-tax cost of a set amount through salary sacrifice"
                - "Work out the after-tax cost of the same amount paid privately"
                - "Record where extra contributions will go and when to revisit it"
            - name: Switching to a cheaper private pension provider
              description: |-
                ## Purpose
                Once a pot reaches the size where another provider's charging structure is clearly cheaper, switching can save hundreds a year. The risks are exit fees, time out of the market during a cash transfer and losing any special terms, so the switch is planned rather than clicked through.

                ## Milestones
                1. The yearly saving from switching calculated at your current pot size.
                2. Exit fees and any special terms on the current account confirmed in writing.
                3. In specie or cash transfer chosen, with the expected time out of the market noted.
                4. The transfer completed and the full value checked on arrival.

                ## Notes
                Start from the **Purchase decision** template. Start the transfer from the receiving provider, not the old one.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A completed provider switch with the yearly saving, exit fees and transferred value all recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Calculate the yearly saving from switching at your current pot"
                - "Ask your current provider in writing for any exit fees"
                - "Check whether the new provider accepts your funds in specie"
                - "Start the transfer from the new provider's website"
                - "Compare the value received with the value sent"
            - name: Moving from the default fund to a chosen portfolio
              description: |-
                ## Purpose
                Switching funds inside a pension costs nothing in tax, but it does mean selling and buying on different days, and choosing badly is easy when markets have just moved. A written plan for the target funds, the switch date and the order of trades turns a nervous click into a routine job.

                ## Milestones
                1. Target funds and percentages written down before any trade.
                2. Dealing charges and any minimum investments checked.
                3. The switch carried out on a single planned date.
                4. The new holdings checked against the written target.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The pension holds the target funds in the written percentages, within a few points, after a switch done on one planned date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the target funds and percentages before trading"
                - "Check dealing charges and minimum investments for each fund"
                - "Place the sell and buy orders on your planned switch date"
                - "Compare the new holdings with your written target"
            - name: Lump sum contribution from a bonus or windfall
              description: |-
                ## Purpose
                A bonus, inheritance or good business year can fund a large one-off contribution, but the relief, the annual limit and timing all need checking first. Getting it wrong means an excess charge or relief refused; getting it right can mean an extra 20 to 45 percent on top of the payment, depending on your tax band.

                ## Milestones
                1. Room left in this year's allowance confirmed from your tracker.
                2. Your relevant earnings for the year checked against the planned amount.
                3. The contribution paid and invested before the tax year deadline.
                4. Extra relief claimed on the tax return where it is not added automatically.

                ## Notes
                Bonus sacrifice through payroll may beat a private contribution. Ask before the bonus is paid, not after.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A lump sum within this year's limit paid and invested, with any extra relief claimed and recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the room left in this year's allowance using your tracker"
                - "Ask payroll whether the bonus can be sacrificed into the workplace scheme"
                - "Pay the lump sum and invest it in your chosen funds"
                - "Add the payment to your list of relief to claim"
            - name: Provider failure and investor protection check
              description: |-
                ## Purpose
                Your money in a pension is usually held in trust or in segregated client accounts, separate from the provider's own balance sheet, but compensation limits and cash held with banks are worth understanding before a pot gets large. Knowing what protects your assets, and up to what amount, tells you whether a second provider makes sense.

                ## Milestones
                1. How the provider holds your assets confirmed from its terms.
                2. The compensation scheme and its limits where you live noted.
                3. Cash held in the pension compared with any deposit protection limit.
                4. A decision recorded on whether to split assets across two providers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note stating how your pension assets are held, the compensation limits that apply, and whether you will split across providers."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the section of the provider's terms on how client assets are held"
                - "Look up your country's investor compensation scheme limits"
                - "Compare the pension's cash balance with deposit protection limits"
                - "Record whether a second provider is worth it at your pot size"
            - name: Private contributions reset after a job change
              description: |-
                ## Purpose
                Changing jobs often changes how much the employer pays in, whether salary sacrifice is offered and how much room is left in the yearly limit. Revisiting the private pension contribution in the first month of a new role keeps the combined total on target instead of drifting up or down by accident.

                ## Milestones
                1. The new employer's pension contribution and matching rules written down.
                2. Combined workplace and private contributions recalculated for the year.
                3. The private direct debit adjusted to keep the total on target.
                4. Your allowance tracker updated with the new scheme.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Within a month of starting a new role, the private contribution is adjusted so the combined yearly total matches your target."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the new employer for its pension contribution and matching rules"
                - "Recalculate combined workplace and private contributions for the year"
                - "Adjust the private pension direct debit to the new figure"
                - "Add the new workplace scheme to your allowance tracker"
            - name: Tax year end pension top-up
              description: |-
                ## Purpose
                The last few weeks of the tax year are the final chance to use this year's allowance, and in the US prior-year IRA contributions run until the filing deadline in April. Planning the top-up a month ahead, with the tracker total and cash ready, avoids a rushed payment that misses the cut-off because a provider processes it late.

                ## Milestones
                1. This year's contributions so far totalled from the tracker.
                2. A top-up amount chosen within the remaining allowance and earnings limit.
                3. The payment made at least two weeks before the provider's deadline.
                4. The receipt showing the correct tax year saved.

                ## Notes
                Providers often set their own cut-off several days before the official tax year end for debit card and bank payments.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A top-up within the remaining allowance is paid and credited to the correct tax year before the provider's cut-off."
                cadence: cyclic
              tasks:
                - "Find your provider's own cut-off date for the current tax year"
                - "Plan the tax year end top-up from your tracker total @recurring(yearly)"
                - "Pay the top-up at least two weeks before the cut-off"
                - "Save the receipt showing which tax year the payment counts for"
            - name: First anniversary review of your private pension
              description: |-
                ## Purpose
                Twelve months after opening, there is enough history to judge whether the set-up works: whether contributions and relief arrived every time, what it really cost and whether the funds still fit. One deliberate review now fixes small problems before they compound for decades.

                ## Milestones
                1. Contributions and relief for the year totalled and checked against the plan.
                2. Total charges for the year compared with the estimate at the start.
                3. Fund returns compared with their benchmarks.
                4. Up to three changes for year two written down, or a note that none are needed.
              priority: medium
              deadlineOffsetDays: 380
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first-year review note recording contributions, relief, charges and fund returns, with up to three changes for year two."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a two-hour slot near the account's first anniversary"
                - "Total the year's contributions and relief from statements"
                - "Compare actual charges and fund returns with what you expected"
                - "Write up to three changes for the second year"
            - name: Pension check-up at fifty
              description: |-
                ## Purpose
                At fifty, the access age is in sight and the decisions that follow it, from lifestyling to how the money will be taken, start to matter. A structured check of every private pension's value, access date, fund mix and contribution level gives you seven to ten years to adjust rather than three.

                ## Milestones
                1. Every private pension's value and earliest access date listed.
                2. Fund mix and any automatic lifestyling checked for each.
                3. Contribution level compared with the target from your retirement planning.
                4. A list of questions for a guidance appointment or adviser written.

                ## Notes
                In some countries extra catch-up contribution limits start at fifty, which makes this a good year to check them.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written check-up covering value, access date, fund mix and contribution level for every private pension, with questions listed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every private pension with its value and earliest access date"
                - "Check each fund for automatic lifestyling"
                - "Check whether catch-up contribution limits now apply to you"
                - "Write questions for a guidance appointment or adviser"
            - name: Guidance appointment before first access
              description: |-
                ## Purpose
                Free, impartial pension guidance is available in several countries, such as the UK government's Pension Wise service, and providers often ask whether you have used it before releasing money. Preparing for the appointment with values, access dates and questions turns a general talk into one about your own pensions.

                ## Milestones
                1. The free guidance service where you live identified.
                2. An appointment booked a few months before planned first access.
                3. Statements, access dates and questions gathered beforehand.
                4. Notes from the appointment saved, with follow-up actions listed.

                ## Notes
                Guidance explains options; it does not recommend. If you want a recommendation, that is regulated advice from a qualified adviser.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A guidance appointment attended before first access, with notes and follow-up actions saved in the pension file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the free pension guidance service where you live"
                - "Book an appointment a few months before you plan to access money"
                - "Gather statements, access dates and your questions"
                - "Save your notes and follow-up actions in the pension file"
            - name: Five-year run-up to first pension access
              description: |-
                ## Purpose
                The five years before you first take money are when a large fall in value does the most damage and when paperwork gaps surface. Working through access dates, fund risk, nominations and the order you expect to use each pot, a stage at a time, means the private pension is ready when the planning for income begins.

                ## Milestones
                1. Every private pension's access date, value and charges confirmed in one table.
                2. Fund risk reviewed against how and when the money will be taken.
                3. Nominations and contact details on every account confirmed current.
                4. A handover note prepared for your retirement income planning.

                ## Notes
                Choosing how to draw an income is its own piece of work; this project only gets the private pension ready for it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A table of every private pension's value, access date and charges, plus a handover note for retirement income planning."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build one table of every private pension's value, access date and charges"
                - "Review each pension's fund risk against when the money is needed"
                - "Confirm nominations and contact details on every account"
                - "Update the run-up table with current values and access dates @recurring(yearly)"
            - name: Freelancer contributions measured against net profit
              description: |-
                ## Purpose
                Self-employed people often assume they can pay in as much as they like, but relief on personal contributions is usually limited by relevant earnings, which for a sole trader means taxable profit rather than turnover. Checking the year's profit before the final contribution avoids paying in more than qualifies for relief.

                ## Milestones
                1. How relevant earnings are defined for the self-employed where you live confirmed.
                2. This year's expected taxable profit estimated from your books.
                3. Contributions planned so they stay within that profit and the annual limit.
                4. The year's final contribution made after the profit figure is reasonably firm.

                ## Notes
                If profit is low in a bad year, the non-earner minimum may still apply, so the pension need not stop entirely.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year's personal contributions are recorded against an estimate of taxable profit and stay within it and the annual limit."
                cadence: cyclic
              tasks:
                - "Confirm how relevant earnings are defined for the self-employed"
                - "Estimate this year's taxable profit from your bookkeeping"
                - "Recheck taxable profit before the year's final pension payment @recurring(yearly)"
                - "Note the contribution and profit figures together in the pension file"
            - name: Company director contributions from your limited company
              description: |-
                ## Purpose
                Directors of their own limited company can often have the company pay into a private pension as an employer contribution, which is not capped by salary and may be deductible for the company. The payment has to be justifiable as a business expense and made from the company account, so the paperwork matters as much as the amount.

                ## Milestones
                1. The private pension confirmed as accepting employer contributions.
                2. The amount agreed with your accountant against company profits and the annual limit.
                3. The payment made from the company bank account and coded as a pension cost.
                4. A board minute or note recording the decision, filed with company records.

                ## Notes
                Discuss the amount with your accountant before paying; the deductibility of large contributions depends on the circumstances.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each employer contribution is paid from the company account, coded correctly and supported by a filed note of the decision."
                cadence: cyclic
              tasks:
                - "Ask your provider for its employer contribution form"
                - "Agree the contribution amount with your accountant"
                - "Pay from the company account and code it as a pension cost"
                - "Plan the company pension contribution before the accounting year end @recurring(yearly)"
            - name: Pension contributions during a career break
              description: |-
                ## Purpose
                A year out for parental leave, caring or study often stops pension saving entirely, yet many systems still allow small contributions with relief; in the UK, for example, a non-earner can pay in up to 2,880 pounds a year and receive relief on top. Deciding before the break what, if anything, continues keeps the gap smaller.

                ## Milestones
                1. The contribution rules for non-earners or low earners where you live checked.
                2. A realistic contribution for the break agreed within the household budget.
                3. The direct debit adjusted for the break, not cancelled by default.
                4. A date set to restore full contributions when work resumes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written decision on contributions during the break, with the direct debit adjusted and a restart date set."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the contribution limit for non-earners where you live"
                - "Agree an affordable contribution for the break with your household"
                - "Adjust the direct debit rather than cancelling it"
                - "Set a calendar reminder to restore contributions when work resumes"
            - name: Contributing to a non-earning partner's pension
              description: |-
                ## Purpose
                Partners who stay at home to raise children or care for a relative can end up with very little retirement savings of their own. Many systems let a working partner pay into the other's pension, such as the US spousal IRA or a UK personal pension for a non-earner, so both have their own pot and their own beneficiary nomination.

                ## Milestones
                1. Eligibility for contributions on behalf of a non-earning partner confirmed.
                2. An account opened in the partner's own name, with their own nomination.
                3. A yearly amount agreed between you both.
                4. The first contribution made and recorded in both your files.

                ## Notes
                The account belongs to the partner, not the person paying. Agree that openly before the first payment.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A pension in the non-earning partner's name receives an agreed yearly contribution, with its own beneficiary nomination."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check the rules for paying into a non-earning partner's pension"
                - "Open an account in your partner's own name with their nomination"
                - "Agree a yearly contribution together"
                - "Pay this year's contribution into your partner's pension @recurring(yearly)"
            - name: Starting a private pension in your fifties
              description: |-
                ## Purpose
                Starting late is common, especially after self-employment, divorce or years abroad, and a decade of contributions with relief can still add a meaningful sum. The priorities differ from a young saver's: use any catch-up limits, keep charges low, and make sure the fund risk matches a shorter horizon.

                ## Milestones
                1. Any catch-up contribution limits available at your age confirmed.
                2. A contribution level set that you can sustain until access age.
                3. Fund risk chosen with the shorter time horizon written beside it.
                4. Ten years of planned contributions projected in a simple table.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A late-start plan records catch-up limits, a sustainable contribution, fund risk and a ten-year contribution table."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check whether catch-up contribution limits apply at your age"
                - "Choose a contribution you can keep up until access age"
                - "Match fund risk to the years left before you need the money"
                - "Raise the contribution to the new catch-up limit if one applies @recurring(yearly)"
            - name: Permitted and prohibited pension investments
              description: |-
                ## Purpose
                Self-directed pensions can hold far more than funds, but not everything: residential property and personal-use assets attract heavy tax charges in some systems, and US IRAs cannot hold collectibles such as art or most coins. Knowing the boundaries before buying anything unusual prevents a purchase that costs more in tax than it could ever earn.

                ## Milestones
                1. Your provider's list of permitted investments downloaded.
                2. The tax authority's rules on prohibited or taxable assets summarised.
                3. Any unusual asset you are considering checked against both lists.
                4. A written rule to check both lists before buying anything outside mainstream funds and shares.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note of permitted and prohibited assets for your pension, from the provider and the tax authority, saved in the pension file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download your provider's list of permitted investments"
                - "Read the tax authority's rules on prohibited pension assets"
                - "Check any unusual asset you are considering against both"
                - "Save the summary note in your pension file"
            - name: Commercial property held inside a self-invested pension
              description: |-
                ## Purpose
                Business owners sometimes buy their trading premises through a self-invested pension, with the business paying a market rent into the pension. It can work well but is slow, needs a specialist provider, a formal lease, an independent valuation and insurance, and concentrates retirement money in one building.

                ## Milestones
                1. A provider that accepts commercial property identified, with its property fees.
                2. An independent valuation and survey of the building completed.
                3. A formal lease at market rent agreed between the business and the pension.
                4. Rent collection, insurance and a review schedule set up.

                ## Notes
                This is a specialist arrangement. Use a solicitor and an adviser experienced in pension property purchases.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The property is owned by the pension with a valuation, a market-rent lease and insurance on file, and rent arriving each quarter."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask two providers whether they accept commercial property and at what fees"
                - "Instruct an independent valuation and survey of the building"
                - "Agree a formal lease at market rent between the business and pension"
                - "Confirm the tenant's rent reached the pension bank account @recurring(quarterly)"
            - name: Self-directed IRA with a specialist custodian
              description: |-
                ## Purpose
                Standard IRA providers only offer listed investments; holding private loans, real estate or private company shares needs a specialist self-directed custodian. The rules on prohibited transactions and disqualified persons, such as you or close family using or dealing with the asset, are strict, and a breach can disqualify the whole account.

                ## Milestones
                1. Two specialist custodians compared on fees and the assets they accept.
                2. The prohibited transaction and disqualified person rules read and summarised.
                3. Any proposed investment checked for personal use or family involvement.
                4. A yearly fair market value reporting process agreed with the custodian.

                ## Notes
                Be wary of promoters who bundle the custodian with the investment itself. Use independent professional advice.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on using a self-directed custodian, with prohibited transaction rules summarised and yearly valuation reporting agreed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compare two specialist custodians on fees and accepted assets"
                - "Summarise the prohibited transaction and disqualified person rules"
                - "Check any proposed investment for personal or family involvement"
                - "Send the custodian a fair market value for each private asset @recurring(yearly)"
            - name: Tapered annual allowance for high earners
              description: |-
                ## Purpose
                High earners can find their annual allowance cut sharply by a taper; in the UK it reduces once adjusted income passes 260,000 pounds, down to a 10,000 pound minimum. The calculation includes employer contributions and some income people forget, so a mistake can produce a large surprise tax charge.

                ## Milestones
                1. Threshold and adjusted income definitions written down from official guidance.
                2. This year's threshold and adjusted income estimated.
                3. Your tapered allowance calculated and added to the allowance tracker.
                4. The figures reviewed with your accountant or tax adviser.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A tapered allowance calculation for this year, using threshold and adjusted income, recorded and checked with a tax professional."
                cadence: cyclic
              tasks:
                - "Read the official definitions of threshold and adjusted income"
                - "Estimate both figures for this tax year"
                - "Recalculate your tapered allowance before planning contributions @recurring(yearly)"
                - "Review the calculation with your accountant or tax adviser"
            - name: Protection certificates and lump sum allowance records
              description: |-
                ## Purpose
                People who applied for lifetime allowance protection in the UK, or built up large pots before 2024, may be entitled to a higher tax-free lump sum than the standard allowance. Those rights depend on certificates and reference numbers that are easily lost, and providers will ask for them when benefits are first taken.

                ## Milestones
                1. Any protection certificates or reference numbers found and copied.
                2. Each provider confirmed as holding a record of the protection.
                3. Your tax-free lump sum entitlement written down from official guidance.
                4. Copies stored in the pension file and somewhere your executors can find them.

                ## Notes
                If a certificate is lost, the tax authority can usually confirm protection details on request. Ask before you need them.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every protection certificate is copied into the pension file and each provider has confirmed it holds the protection reference."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search your papers for any pension protection certificate"
                - "Ask each provider whether it holds your protection reference"
                - "Write down your tax-free lump sum entitlement from official guidance"
                - "Store copies where your executors will find them"
---

# Private Pension Accounts

This area is for anyone running a pension they chose themselves rather than one an employer picked: a self-invested or personal pension, an IRA, or a freelancer's only retirement account sitting beside whatever workplace scheme exists. It starts with what the account is for, which type and provider to pick and getting the first contribution and its tax relief in, then moves through the routines that keep it running, the rules worth learning properly, the decisions and dated reviews, situations for freelancers, company directors, career breaks and late starters, and finally specialist corners such as commercial property, specialist custodians and tapered allowances.

What repeats is a monthly check that the contribution and its relief arrived, a monthly filing session, a quarterly statement and cash review, and a yearly round of allowance totals, relief claims, charge checks, beneficiary reviews and the tax year end top-up. The Purchase decision, Metrics log and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
