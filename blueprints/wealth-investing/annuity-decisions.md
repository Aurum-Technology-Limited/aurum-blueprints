---
id: wealth-investing.annuity-decisions
name: Annuity Decisions
description: "A considered annuity decision: your essential income gap, old policy guarantees, whole-of-market and enhanced quotes, single or joint life, and the checks that keep a lifetime income paid correctly."
category: personal
version: 1.0.0
tags: [wealth-investing, annuity-decisions, retiree, annuities, guaranteed-income, retirement-income, pensions]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - operational-checklist
    - purchase-decision
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Annuity Decisions
          description: "Deciding whether, when and how much to annuitise for guaranteed lifetime income, comparing rates and features."
          projects:
            - name: Essential spending gap that guaranteed income must cover
              description: |-
                ## Purpose
                Before comparing a single quote, it helps to know what an annuity would actually be for. Most retirees who annuitise do it to cover essential bills, so adding up housing, food, energy, insurance and property tax, then subtracting state pension and any defined benefit income, shows the yearly gap a guaranteed income would need to fill. A gap of zero is a perfectly good answer and may mean no annuity is needed at all.

                ## Milestones
                1. A list of essential yearly spending, each bill based on the last twelve months of statements.
                2. Every guaranteed income you already have or will receive listed with its start age and yearly amount.
                3. The yearly gap between the two written down in today's money.
                4. A note on whether the gap starts now or opens later, for example when a partner's pension begins.

                ## Notes
                Keep essential and discretionary spending apart. Holidays and gifts can flex in a bad year; the electricity bill cannot.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page sheet showing essential yearly spending, guaranteed income by source and the resulting gap in today's money."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the last twelve months of bank statements into one folder"
                - "Total the essential bills by category for a full year"
                - "List each guaranteed income with its start age and yearly amount"
                - "Write the yearly gap at the top of the annuity decision folder"
            - name: Inventory of pension pots that could buy an annuity
              description: |-
                ## Purpose
                Annuities are usually bought with defined contribution money, and many retirees hold three or four pots from different jobs, each with its own rules, charges and selected retirement date. Listing every pot with its current value, retirement age and any special terms shows how much could be annuitised and which policies need a closer look before anything is moved.

                ## Milestones
                1. Every defined contribution pot listed with provider, policy number and latest value.
                2. The selected retirement age on each policy noted.
                3. Special terms flagged, such as a guaranteed annuity rate, protected tax-free cash or exit charges.
                4. A combined total that could be used for an annuity written down.

                ## Notes
                Tracing pensions you have lost touch with is its own job. Note any you suspect exist and come back to them once the known pots are listed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated list of every pension pot with value, retirement age and special terms, plus a combined total."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every employer you worked for long enough to join a pension"
                - "Find the latest statement for each known pension pot"
                - "Ask each provider in writing whether the policy has special terms"
                - "Refresh the pot values on the inventory each spring @recurring(yearly)"
            - name: Guaranteed annuity rate check on older policies
              description: |-
                ## Purpose
                Some personal pensions and retirement annuity contracts sold before the early 2000s promised a guaranteed annuity rate far above anything on the open market today. These guarantees often apply only if the income is taken in a specific form at a specific age, and transferring the pot or buying elsewhere can throw them away for good. A written answer from each older provider is worth more than any comparison table.

                ## Milestones
                1. Every policy started before about 2005 identified from the pot inventory.
                2. A written answer from each of those providers on whether a guaranteed annuity rate applies.
                3. The conditions attached to each guarantee recorded: age, income shape, spouse's benefit and deadline.
                4. Any guaranteed rate compared with the best open market quote for the same shape of income.

                ## Notes
                Never agree a transfer of an older policy until this check is complete. A guarantee lost by mistake cannot be bought back.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written response from every pre-2005 provider stating whether a guaranteed annuity rate applies and on what conditions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark every policy on the inventory that started before 2005"
                - "Write to each of those providers asking about guaranteed annuity rates"
                - "Record the age, income shape and deadline each guarantee requires"
                - "Compare each guaranteed rate with an open market quote of the same shape"
            - name: Free pension guidance session before choosing
              description: |-
                ## Purpose
                Many countries run a free, impartial guidance service for people deciding what to do with a defined contribution pension, such as Pension Wise in the UK. One appointment covers the main options, the tax rules and the scams to watch for, and some providers expect you to have had it, or to waive it, before they pay out. Going in with your pot inventory and income gap turns a general talk into a useful one.

                ## Milestones
                1. The free guidance service for your country found and an appointment booked.
                2. The pot inventory and income gap sheet ready to bring to the session.
                3. Notes written within a day covering the options discussed and any rules that surprised you.
                4. A list of follow-up questions for a regulated adviser or provider.

                ## Notes
                Start from the **Meeting notes** template. Guidance explains options; it does not recommend a product. The real service does not cold call, so treat any caller claiming to be from it with suspicion.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A guidance appointment attended, with written notes and a list of follow-up questions saved in the decision folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the free pension guidance service that covers your country"
                - "Book a guidance appointment by phone or online"
                - "Bring the pot inventory and income gap sheet to the session"
                - "Write up the session notes within a day"
            - name: Annuity terms and options primer
              description: |-
                ## Purpose
                Quotes and brochures assume you already know what a guarantee period, value protection, escalation and a joint life percentage mean, and all of these choices land on a single application form. Learning the dozen terms that change the income, and writing each in your own words with an example, makes every later comparison faster and protects against ticking a default you did not intend.

                ## Milestones
                1. A one-page glossary covering lifetime, fixed-term, level, escalating, single life, joint life, guarantee period, value protection and enhanced annuities.
                2. Each term written in your own words with a one-line example.
                3. The terms that apply to your situation marked for later decisions.
                4. Three questions about terms you are still unsure of sent to a guidance service or adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page glossary of at least ten annuity terms in your own words, with the ones relevant to you marked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read one plain-language guide to annuities from an official guidance site"
                - "Write each annuity term in your own words with an example"
                - "Mark the options that apply to your own situation"
                - "Send the remaining questions to a guidance service or adviser"
            - name: Health and lifestyle record for enhanced annuity quotes
              description: |-
                ## Purpose
                Smokers, people with conditions such as diabetes, high blood pressure or heart disease, and those on regular medicines often qualify for an enhanced annuity that pays noticeably more each year. Insurers can only price that in if the details go accurately onto a common health questionnaire, so gathering diagnoses, medicines, measurements and dates in one place is quick to do and easy to underplay.

                ## Milestones
                1. A list of diagnosed conditions with the year each was diagnosed.
                2. Current medicines with doses copied from the prescription.
                3. Recent height, weight, blood pressure and any cholesterol readings recorded.
                4. Smoking and drinking history written down honestly.
                5. A partner's details added if a joint life annuity is likely.

                ## Notes
                Underplaying a condition can cost income for life; overstating one can invalidate the policy. Copy figures from records rather than memory.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A health and lifestyle record covering conditions, medicines, measurements and smoking history, ready to copy into a questionnaire."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download your medicines list from the pharmacy or patient portal"
                - "Note each diagnosed condition with its year of diagnosis"
                - "Record your latest height, weight and blood pressure readings"
                - "Ask your partner to complete the same record if joint life is likely"
            - name: Annuity decision folder for quotes and letters
              description: |-
                ## Purpose
                An annuity decision generates a surprising amount of paper: retirement packs, quotes that expire within weeks, health questionnaires, illustrations and, eventually, a policy that pays for decades. One folder, paper or digital, with a fixed structure means a quote can be found when a broker calls back and an heir can find the policy twenty years later.

                ## Milestones
                1. A folder created with sections for pots, guidance, quotes, applications and the final policy.
                2. Existing statements and letters filed in the right sections.
                3. A one-line index at the front listing what each section holds.
                4. A trusted person told where the folder is kept.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder with five labelled sections, an index page and existing documents filed, whose location a trusted person knows."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the folder with five labelled sections"
                - "File every pension statement and letter you already hold"
                - "Write a one-line index for the front of the folder"
                - "Tell a trusted person where the folder lives"
            - name: Insurer financial strength and compensation limits
              description: |-
                ## Purpose
                A lifetime annuity is a promise that can run for thirty years, so the insurer behind it matters as much as the rate. Compensation schemes protect annuity holders in many countries, but the limits differ widely, from full cover in some to capped amounts per insurer in others, such as the state guaranty associations in the US. Knowing your scheme's limit decides whether a large purchase should be split between insurers.

                ## Milestones
                1. The compensation scheme that covers annuities in your country identified and its limit recorded.
                2. Financial strength ratings or published solvency reports noted for each insurer on your shortlist.
                3. A rule written down for when a purchase should be split between two insurers.
                4. Any insurer you would not buy from crossed off with a reason.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note recording the compensation limit, each shortlisted insurer's strength rating and a written rule on splitting purchases."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the compensation scheme that protects annuities where you live"
                - "Write down the protection limit per person and per insurer"
                - "Note the financial strength rating of each shortlisted insurer"
                - "Decide the purchase size above which you would split between insurers"
            - name: How annuity income is taxed where you live
              description: |-
                ## Purpose
                Pension annuity income is usually taxed as income each year, while an annuity bought with savings may have part of each payment treated as a return of your own capital. The first payment is often taxed on a temporary code or a default withholding rate until the tax authority catches up. Understanding the rules before buying avoids an unpleasant first payslip and lets you compare options on after-tax income.

                ## Milestones
                1. The way pension annuity income is taxed in your country summarised in a paragraph.
                2. The different treatment of annuities bought with non-pension savings noted.
                3. An estimate of after-tax yearly income from a typical quote worked out.
                4. Questions for an accountant or the tax authority listed where your situation is unusual.

                ## Notes
                This is a summary for your own planning, not tax advice. Check anything that affects a large sum with a qualified adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of annuity taxation where you live, with an after-tax estimate for one sample quote."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the tax authority's page on how pension income is taxed"
                - "Note how annuities bought with savings are treated differently"
                - "Estimate after-tax yearly income for one sample quote"
                - "List questions for an accountant on anything unusual in your case"
            - name: Monthly annuity rate watch log
              description: |-
                ## Purpose
                Rates move with long-term government bond yields, and the difference between a good year and a poor one can be more than a tenth of your income for life. Recording an indicative rate for your age and shape of annuity once a month, beside the ten or fifteen-year government bond yield, shows the trend and stops a single headline deciding when you buy.

                ## Milestones
                1. A log with columns for date, age, annuity shape, indicative rate and bond yield.
                2. One published rate source chosen and used every month for consistency.
                3. Twelve monthly entries completed.
                4. A line each quarter on the direction rates have moved.

                ## Notes
                Start from the **Metrics log** template. Indicative rates assume standard health; personal quotes will differ.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rate log with at least twelve monthly entries from the same source, each beside the matching bond yield."
                cadence: rolling
              tasks:
                - "Choose one published annuity rate table to use every month"
                - "Set up the log with date, age, shape, rate and bond yield columns"
                - "Record this month's indicative rate and bond yield @recurring(monthly:12)"
                - "Write one line on the trend in annuity rates @recurring(quarterly)"
            - name: Quarterly personal quote refresh in the buying year
              description: |-
                ## Purpose
                Indicative tables show the market, but only a personal quote using your age, health and postcode shows what you would actually receive. Asking a broker for refreshed quotes every quarter in the year before you plan to buy keeps the decision grounded in real numbers and shows whether waiting is gaining or losing income.

                ## Milestones
                1. A broker or comparison service agreed to provide repeat quotes without obligation.
                2. A first personal quote recorded with its date and assumptions.
                3. Quotes refreshed each quarter on the same assumptions.
                4. A note after four quotes on whether waiting has helped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly personal quotes on identical assumptions recorded, with a written note on whether waiting raised or lowered income."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask a broker whether they will provide repeat quotes without obligation"
                - "Record the first quote with its date, health details and options"
                - "Request a fresh quote on identical assumptions @recurring(quarterly)"
                - "Write a note comparing the four quotes once the year is done"
            - name: Monthly annuity payment arrival check
              description: |-
                ## Purpose
                Once an annuity is in payment it usually arrives on the same date each month for the rest of your life, and errors are rare but slow to fix if nobody notices. A two-minute check that the right net amount landed on the right day catches a missed payment, a wrong tax code or a bank change problem within weeks rather than at the end of the tax year.

                ## Milestones
                1. The expected gross and net monthly amount written at the top of a payment log.
                2. The payment date and receiving account noted.
                3. Each monthly payment ticked off against the expected amount.
                4. Any shortfall raised with the provider within a week of noticing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive months of annuity payments ticked against the expected net amount, with any discrepancy raised in writing."
                cadence: rolling
              tasks:
                - "Write the expected gross and net monthly amount on a payment log"
                - "Check this month's annuity payment arrived in full @recurring(monthly:3)"
                - "Raise any shortfall with the provider in writing within a week"
            - name: Annual escalation and policy statement check
              description: |-
                ## Purpose
                Escalating annuities should rise on a set date each year by a fixed percentage or by an inflation index, often with a cap. Checking the new amount against the policy schedule once a year confirms the increase was applied correctly and keeps the latest annual statement filed where your household can find it.

                ## Milestones
                1. The escalation rule, any cap and the anniversary date copied from the policy schedule.
                2. The expected new payment worked out before each anniversary.
                3. The actual new payment compared with the expected figure.
                4. The annual statement filed in the decision folder.

                ## Notes
                Level annuities do not rise, but the statement is still worth filing for the household sheet and the executor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For each policy anniversary, the expected and actual new payment are recorded side by side and the statement is filed."
                cadence: cyclic
              tasks:
                - "Copy the escalation rule and anniversary date from the policy schedule"
                - "Work out the expected payment before each anniversary @recurring(yearly)"
                - "Compare the first payment after the anniversary with the expected figure"
                - "File the annual statement in the decision folder"
            - name: Yearly tax check on annuity income
              description: |-
                ## Purpose
                Providers deduct tax using the code or withholding instruction the tax authority gives them, and that code can go wrong when other pensions, a state pension or part-time earnings start or stop. Reviewing the year-end tax certificate and next year's code each spring avoids a surprise bill or a refund that takes months to arrive.

                ## Milestones
                1. The year-end income certificate from each annuity provider filed.
                2. Tax deducted compared with what you expected for the year.
                3. The new tax code or withholding instruction checked against your total income.
                4. Any error reported to the tax authority with the supporting figures.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each spring, every annuity's year-end certificate is filed and the new code checked, with any error reported in writing."
                cadence: cyclic
              tasks:
                - "Find last year's tax certificate from each annuity provider"
                - "Check the tax deducted against your expected total income @recurring(yearly)"
                - "Report any wrong code to the tax authority with your figures"
            - name: Yearly floor review for a further annuity purchase
              description: |-
                ## Purpose
                Spending, health and rates all change after the first purchase, and many retirees find the gap between essential bills and guaranteed income has widened or closed within a few years. An annual review of that gap, beside a fresh indicative quote, answers one question cleanly: is it time to buy another slice of guaranteed income, or not yet.

                ## Milestones
                1. Essential spending updated from the last twelve months of bills.
                2. Guaranteed income updated, including any annuity escalations.
                3. The current gap compared with last year's.
                4. A written yes, no or not yet on buying another annuity tranche, with the reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual note recording the updated gap and a yes, no or not-yet decision on a further annuity purchase."
                cadence: cyclic
              tasks:
                - "Update essential spending from the last twelve months of statements"
                - "Add up guaranteed income including this year's escalations"
                - "Record a yes, no or not-yet decision on buying another tranche @recurring(yearly)"
            - name: Household annuity information sheet
              description: |-
                ## Purpose
                Partners and executors often have no idea which insurer pays an annuity, whether a guarantee period is still running or who to call when payments should stop or switch to a survivor. A single sheet listing every policy, its death benefits and the contact numbers saves a grieving household weeks of searching and prevents overpayments that later have to be repaid from the estate.

                ## Milestones
                1. Every annuity listed with insurer, policy number and contact details.
                2. Death benefits recorded for each: survivor pension, guarantee end date or value protection.
                3. The sheet stored with your will and the decision folder.
                4. Your partner or executor walked through the sheet.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A one-page sheet listing every annuity and its death benefits, kept with the will and reviewed with a partner or executor."
                cadence: rolling
              tasks:
                - "List each annuity with insurer, policy number and phone number"
                - "Write the death benefit and guarantee end date for each policy"
                - "Walk your partner or executor through the sheet"
                - "Review the sheet and update contact details @recurring(yearly)"
            - name: Annual proof of life and bank detail confirmation
              description: |-
                ## Purpose
                Insurers stop annuity payments if they believe a policyholder has died or moved without telling them, and some send an existence or life certificate form every year, especially to people living overseas. Returning it promptly, and confirming address and bank details at the same time, keeps the income flowing without a frozen month.

                ## Milestones
                1. Each provider's process for confirming you are alive and where you live noted.
                2. The annual form returned within two weeks of arriving.
                3. Address, phone and bank details confirmed with every provider.
                4. A dated note of each confirmation kept in the decision folder.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every annuity provider holds confirmed address and bank details, with any life certificate returned within two weeks each year."
                cadence: cyclic
              tasks:
                - "Ask each provider whether they need a yearly life certificate"
                - "Confirm address and bank details with every provider @recurring(yearly)"
                - "Return any life certificate form within two weeks of receiving it"
            - name: Scam and cold call guard for pension money
              description: |-
                ## Purpose
                People approaching or in retirement are the main target of pension scams: cold calls offering free reviews, unusual investments promising guaranteed returns, or pressure to move money before a deadline. A short household rule, plus a habit of checking any firm on the regulator's register, blocks the most common approaches before money leaves the account.

                ## Milestones
                1. A written household rule: no pension or annuity decision on a cold call, email or text.
                2. The financial regulator's register and scam warning list bookmarked.
                3. Every firm involved in your annuity checked on the register.
                4. Your partner and any attorney briefed on the rule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written household rule against acting on unsolicited pension contact, with every firm you deal with checked on the regulator's register."
                cadence: rolling
              tasks:
                - "Write the household rule on unsolicited pension contact"
                - "Bookmark the regulator's firm register and scam warning list"
                - "Check every firm in your annuity file against the register"
                - "Read the regulator's latest scam warnings @recurring(quarterly)"
            - name: How interest rates, age and health set annuity prices
              description: |-
                ## Purpose
                Three things set most of an annuity's price: long-term bond yields, your age and your expected lifespan. Insurers back annuities mainly with long-dated bonds, so income rises and falls with yields, and it climbs with age because fewer payments are expected. Understanding these drivers explains why quotes jumped after rate rises and what waiting a year really gains.

                ## Milestones
                1. Indicative rates for your age gathered from two dates with different bond yields.
                2. The extra income from buying one, three and five years later noted from published tables.
                3. A short note on how a health condition changes the rate.
                4. One page summarising the three drivers in your own words.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of how yields, age and health move annuity rates, with figures from at least two published rate tables."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find a published annuity rate table from a few years ago and one from today"
                - "Note the long-term bond yield on each of those two dates"
                - "Compare rates for your age now and five years older"
                - "Write a one-page summary of the three price drivers"
            - name: Level versus escalating income break-even workings
              description: |-
                ## Purpose
                An escalating annuity starts lower than a level one, often by a third or more for full inflation linking, and only overtakes it in total income after many years. Working out the year your cumulative income catches up, and setting it beside your life expectancy, turns an abstract choice about inflation into a number you can weigh.

                ## Milestones
                1. Level, fixed 3 percent and inflation-linked quotes gathered on the same assumptions.
                2. A simple spreadsheet showing cumulative income for each over 30 years.
                3. The crossover age for each escalating option identified.
                4. The crossover ages compared with a life expectancy estimate from an official calculator.

                ## Notes
                Inflation-linked figures depend on future inflation, so run the sheet with two or three inflation rates rather than one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A spreadsheet showing cumulative income for three income shapes over 30 years, with each crossover age marked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Request level, fixed 3 percent and inflation-linked quotes together"
                - "Build a sheet of cumulative income for each shape over 30 years"
                - "Mark the age at which each escalating option overtakes level"
                - "Check your life expectancy with an official online calculator"
            - name: Guarantee periods and value protection compared
              description: |-
                ## Purpose
                A plain lifetime annuity stops at death, which is why many people fear dying early and losing the money. Guarantee periods keep payments going for a fixed number of years, and value protection returns part of the unpaid purchase price, each for a modest cut in income. Pricing both against a plain quote shows exactly what that peace of mind costs.

                ## Milestones
                1. Quotes with no guarantee, a ten-year guarantee and full value protection obtained on the same day.
                2. The yearly income cost of each feature worked out.
                3. Who would receive each death benefit noted.
                4. A preference written down with the reason.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three same-day quotes compared, with the yearly cost of each death benefit and a written preference."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask for quotes with no guarantee, ten years and value protection"
                - "Work out the yearly income each feature costs"
                - "Note who would receive each death benefit"
                - "Write your preferred option and the reason"
            - name: Reading an annuity quote line by line
              description: |-
                ## Purpose
                Quotes pack a lot into two pages: gross yearly income, payment frequency, whether paid in advance or in arrears, escalation, guarantee, spouse's percentage, the health basis used and an expiry date often just weeks away. Learning to read each line stops you comparing two quotes that are not actually alike.

                ## Milestones
                1. A real or sample quote annotated line by line.
                2. A checklist of ten items to compare across any two quotes.
                3. Two quotes compared using the checklist with differences highlighted.
                4. The expiry date and guarantee terms of each quote noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ten-item quote comparison checklist, tested on two quotes with every difference marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Annotate a sample quote with what each line means"
                - "Write a ten-item checklist for comparing quotes"
                - "Compare two quotes using the checklist"
                - "Note each quote's expiry date in the decision folder"
            - name: Fixed-term annuities and their maturity values
              description: |-
                ## Purpose
                Fixed-term annuities pay a set income for a chosen number of years, often five or ten, then return a guaranteed maturity amount to be used again. They suit people who want certainty now but expect to buy a lifetime annuity later, when older age or poorer health may raise rates. The trade between income paid and maturity value is the thing to understand before using one.

                ## Milestones
                1. Fixed-term quotes for five and ten years obtained with different maturity values.
                2. The relationship between income paid and maturity value set out in a table.
                3. Tax on the income and on any maturity amount summarised.
                4. A note on how a fixed term could fit your own plan, or why it does not.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table comparing at least two fixed-term options by income and maturity value, with a note on fit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a broker for five and ten-year fixed-term annuity quotes"
                - "Tabulate income paid against guaranteed maturity value"
                - "Check how the income and the maturity amount are taxed"
                - "Write a note on whether a fixed term fits your plan"
            - name: Income, deferred, fixed and indexed annuity families
              description: |-
                ## Purpose
                Outside the classic lifetime annuity sit several product families, especially in the US market: immediate income annuities, deferred income annuities, multi-year guaranteed annuities, fixed indexed annuities and variable annuities. They differ hugely in cost, complexity and how income is guaranteed, and the complex ones are more often sold than bought. Mapping the families available where you live helps sort a sales pitch from a genuine fit.

                ## Milestones
                1. The annuity families available in your country listed.
                2. For each, the guarantee, typical costs and surrender rules summarised in a line.
                3. The families that match your income goal marked.
                4. Any product you have been offered placed in the right family.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page map of annuity families available where you live, with guarantees, costs and surrender rules noted for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the annuity product families sold in your country"
                - "Summarise each family's guarantee, costs and surrender rules"
                - "Mark the families that match your income goal"
                - "Place any product you have been offered into its family"
            - name: Surrender charges, riders and commission in annuity contracts
              description: |-
                ## Purpose
                Deferred, indexed and variable annuities often carry surrender charges for seven to ten years, optional riders with yearly fees, and sales commission that is not always obvious. Knowing where to find each in the contract and disclosure documents is the best defence against a product that looked generous and costs far more than expected.

                ## Milestones
                1. The surrender charge schedule located in a sample contract.
                2. Every rider and its yearly fee listed.
                3. Commission or adviser remuneration identified from the disclosure.
                4. A total yearly cost worked out as a percentage of the amount invested.

                ## Notes
                If a seller cannot state the total yearly cost in writing, treat that as your answer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written breakdown of surrender charges, rider fees and commission for one contract, with the total yearly cost as a percentage."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the surrender charge table in the contract or disclosure"
                - "List each optional rider with its yearly fee"
                - "Ask the seller in writing what commission they receive"
                - "Work out the total yearly cost as a percentage"
            - name: Whether to annuitise any of your pension
              description: |-
                ## Purpose
                Buying a lifetime annuity is usually irreversible, so the first real decision is whether you want one at all. The case for is income that lasts however long you live and needs no managing; the case against is lost flexibility, little left for heirs without extra features, and locking in today's rate. Writing the arguments for your own situation, with the income gap beside them, produces a choice you can explain to your family.

                ## Milestones
                1. Reasons for and against an annuity written down for your own situation.
                2. The income gap and other guaranteed income set beside them.
                3. Any partner's view recorded.
                4. A decision recorded as yes, no or partly, with a date to revisit if no.

                ## Notes
                A regulated adviser can test this decision. The project is about preparing the question well, not replacing advice.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated decision note stating yes, no or partly to annuitising, with the reasons and any partner's view."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List your own reasons for and against a lifetime annuity"
                - "Set the income gap sheet beside the list"
                - "Talk the list through with your partner or a trusted person"
                - "Record the decision and the date to revisit it"
            - name: How much of the pot to annuitise
              description: |-
                ## Purpose
                Few people need to annuitise everything. A common approach is to buy enough guaranteed income to cover essential bills alongside state and other pensions, and keep the rest invested for flexibility, emergencies and later purchases. Settling the amount, and what the remainder is for, avoids both spending the whole pot on income you cannot reverse and leaving essential bills exposed to markets.

                ## Milestones
                1. Quotes for annuitising a quarter, half and all of the pot compared.
                2. The purchase needed to close the essential income gap worked out.
                3. A purpose written for the money not annuitised.
                4. The amount to annuitise agreed and recorded.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the amount to annuitise, linked to the income gap and with a written purpose for the remainder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Request quotes for a quarter, half and all of the pot"
                - "Work out the purchase needed to close the essential income gap"
                - "Write what the money not annuitised is for"
                - "Record the amount to annuitise in the decision folder"
            - name: Single life or joint life with survivor percentage
              description: |-
                ## Purpose
                A single life annuity pays the most but stops when you die; a joint life annuity carries on to a partner at a chosen percentage, usually 50, 66 or 100 percent, for a lower starting income. For couples where one partner relies on the other's pension, this is often the most important box on the form, and it cannot be changed later.

                ## Milestones
                1. Quotes for single life and joint life at 50, 66 and 100 percent obtained.
                2. Each partner's total income worked out if the other died first.
                3. The surviving partner's essential bills compared with that income.
                4. A choice agreed by both partners and recorded.

                ## Notes
                Check whether your pension rules or local law require a partner's consent to choose single life.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A survivor percentage chosen and recorded by both partners, based on the surviving partner's income under each option."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Request single life and three joint life quotes together"
                - "Work out each partner's income if the other died first"
                - "Compare survivor income with the survivor's essential bills"
                - "Record the option you have agreed together"
            - name: Level, fixed escalation or inflation-linked income
              description: |-
                ## Purpose
                Prices roughly double over 25 years even at modest inflation, so a level annuity that feels comfortable at 66 can feel thin at 90. Choosing between level, a fixed yearly increase and full inflation linking is a trade between more money now and protected spending power later, and it depends on how much of your other income already rises with prices.

                ## Milestones
                1. Other income listed by whether it rises with inflation, such as a state pension.
                2. The break-even workings for level and escalating income reviewed.
                3. The share of essential spending protected under each option at age 85 estimated.
                4. An income shape chosen and recorded with the reason.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An income shape chosen and recorded, with the share of essential spending protected against inflation stated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark which of your other incomes rise with inflation"
                - "Revisit the break-even sheet for level and escalating income"
                - "Estimate how much essential spending each option covers at age 85"
                - "Record the income shape you chose and why"
            - name: Whole-of-market quotes through an annuity broker
              description: |-
                ## Purpose
                Taking the annuity offered by your own pension provider is the commonest and most expensive mistake in this area, often costing a meaningful slice of income every year for life. A broker or comparison service can search the whole market, apply your health details and handle the transfer. Comparing at least five insurers on identical terms is the single step most likely to raise your income.

                ## Milestones
                1. Two brokers or comparison services shortlisted, with their fee or commission noted.
                2. Health and lifestyle details submitted for underwritten quotes.
                3. At least five insurers' quotes compared on identical terms, including your own provider's.
                4. The best quote chosen and its expiry date recorded.

                ## Notes
                Start from the **Purchase decision** template. Ask how the broker is paid; commission usually comes out of the purchase price.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least five insurers compared on identical terms, with the chosen quote and its expiry date recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Shortlist two annuity brokers and note how each is paid"
                - "Submit your health record for underwritten quotes"
                - "Compare at least five quotes on identical terms"
                - "Record the chosen quote and its expiry date"
            - name: Tax-free lump sum timing before buying an annuity
              description: |-
                ## Purpose
                In many pension systems a share of the pot can be taken tax free, often a quarter in the UK, and it usually has to be taken when the annuity is bought or is lost for that portion. Deciding in advance whether to take it, and what it is for, stops it being taken by default and left idle in a current account, or forgone when it would have cleared a mortgage.

                ## Milestones
                1. The tax-free amount available on each pot confirmed by the provider.
                2. Any protected or higher tax-free cash on older policies identified.
                3. Quotes with and without the lump sum compared.
                4. A use for the lump sum written down, or a reason to leave it in.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on taking the tax-free lump sum, with the amount, its purpose and the effect on annuity income."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each provider the tax-free amount available on your pot"
                - "Check older policies for protected tax-free cash"
                - "Compare annuity quotes with and without the lump sum"
                - "Write down what the lump sum would be used for"
            - name: Buying now, later or in staged tranches
              description: |-
                ## Purpose
                Rates rise with age, so waiting buys more income per pound, but every year waited is a year of payments not received and of market risk on the pot. Splitting the purchase into tranches at, say, 67, 72 and 77 spreads rate risk and lets later tranches benefit from age and any change in health. Laying the three timings side by side settles which suits you.

                ## Milestones
                1. Indicative income now and at five and ten years older recorded.
                2. Income forgone while waiting added up.
                3. A staged plan sketched with ages and amounts.
                4. A timing choice recorded with the reason.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded timing decision comparing buying now, later and in stages, with the income forgone while waiting added up."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record indicative rates for your age now and five and ten years on"
                - "Add up the income forgone in each waiting period"
                - "Sketch a three-tranche plan with ages and amounts"
                - "Record the timing you chose and the reason"
            - name: Responding to the provider's retirement options pack
              description: |-
                ## Purpose
                Pension providers send a retirement options pack a few months before your selected retirement date, often with their own annuity quote attached and a reply-by date. Treating it as a trigger to shop around, rather than a form to sign, keeps the default from deciding for you and leaves time for the open market search.

                ## Milestones
                1. The pack's reply-by date written in the calendar.
                2. The provider's own quote filed for comparison.
                3. A request sent to move the selected retirement date if more time is needed.
                4. A reply sent before the deadline stating your chosen option.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A reply to the retirement options pack sent before its deadline, with the provider's quote filed for comparison."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the pack's reply-by date in your calendar"
                - "File the provider's own annuity quote for comparison"
                - "Ask the provider to move the retirement date if you need time"
                - "Send your chosen option before the deadline"
            - name: Annuity application and medical questionnaire week
              description: |-
                ## Purpose
                Once a quote is chosen the clock starts: most quotes are guaranteed for only a few weeks, and the application, health questionnaire, identity checks and transfer request to the old provider all need to be done before it expires. Blocking one week for the paperwork avoids losing a good rate to a missing signature.

                ## Milestones
                1. The quote's guarantee expiry date confirmed.
                2. The application and health questionnaire completed from the health record.
                3. Identity documents and bank details supplied.
                4. The transfer instruction to the old provider signed and sent.
                5. Written confirmation received that the application is in progress.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A complete application, questionnaire and transfer instruction submitted before the quote's guarantee expires, with written acknowledgement."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the date your chosen quote's guarantee expires"
                - "Complete the health questionnaire from your health record"
                - "Send identity documents and bank details to the insurer"
                - "Sign and send the transfer instruction to the old provider"
            - name: Cooling-off period document check
              description: |-
                ## Purpose
                Most annuity purchases come with a short cancellation window, often 30 days, after the policy documents arrive. Checking the schedule against the quote you accepted, line by line, inside that window is the last chance to fix a wrong income, survivor percentage, guarantee or escalation before it is set for life.

                ## Milestones
                1. The cancellation deadline written down on the day the documents arrive.
                2. Income, start date, frequency, escalation, guarantee and survivor terms checked against the accepted quote.
                3. Names, dates of birth and bank details checked.
                4. Any error raised in writing before the deadline.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every term in the policy schedule checked against the accepted quote within the cancellation window, with any error raised in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the cancellation deadline the day the documents arrive"
                - "Check every term in the schedule against the accepted quote"
                - "Check names, dates of birth and bank details on the schedule"
                - "Raise any error in writing before the deadline"
            - name: First annuity payment and emergency tax check
              description: |-
                ## Purpose
                The first payment is often taxed on a temporary basis because the tax authority has not yet linked the new income to your record, so it can look alarmingly low or oddly high. Checking the first few payslips, and contacting the tax authority if needed, settles the right code within a couple of months instead of waiting for a year-end refund.

                ## Milestones
                1. The first payment compared with the gross amount quoted.
                2. The tax code or withholding rate on the first payslip noted.
                3. The tax authority contacted if the code looks temporary or wrong.
                4. The third payment confirmed as taxed correctly.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "By the third payment, the annuity is taxed on the correct code, confirmed against the payslip."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare the first payment with the gross amount quoted"
                - "Note the tax code shown on the first payslip"
                - "Call the tax authority if the code looks temporary"
                - "Confirm the third payment is taxed correctly"
            - name: Fixed-term annuity maturity decision
              description: |-
                ## Purpose
                At the end of a fixed term the maturity amount has to go somewhere: a new fixed term, a lifetime annuity, drawdown or cash. Providers write a few months ahead, and their default option may not be what you want. Starting six months before maturity, with fresh quotes and an updated health record, makes the second decision as considered as the first.

                ## Milestones
                1. The maturity date and guaranteed amount confirmed with the provider.
                2. The health record refreshed for new quotes.
                3. Quotes obtained for a new fixed term and a lifetime annuity.
                4. An instruction sent to the provider before the deadline.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "An instruction for the maturity amount sent before the provider's deadline, based on at least two fresh quotes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the maturity date and guaranteed amount with the provider"
                - "Refresh your health record six months before maturity"
                - "Request quotes for a new fixed term and a lifetime annuity"
                - "Send your instruction before the provider's deadline"
            - name: Guarantee period and survivor claims after a death
              description: |-
                ## Purpose
                When an annuitant dies, the insurer needs to be told quickly so any survivor pension, remaining guarantee payments or value protection lump sum can be paid, and so overpayments do not have to be clawed back from the estate. A clear claim checklist helps whoever is handling the affairs, often a partner or adult child, at a hard time.

                ## Milestones
                1. Each insurer informed with the policy number and death certificate.
                2. Death benefits confirmed: survivor pension, guarantee payments or lump sum.
                3. Claim forms completed and returned.
                4. Survivor payments or lump sum received and their tax treatment noted.

                ## Notes
                Many countries offer a tell-once service for government bodies, but private insurers usually need to be told separately.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Every annuity insurer notified and each death benefit claimed and received, with the dates recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the household annuity information sheet"
                - "Tell each insurer of the death and give the policy number"
                - "Return the claim forms with a certified death certificate"
                - "Record each benefit received and its tax treatment"
            - name: Joint annuity planning when partners differ greatly in age
              description: |-
                ## Purpose
                Couples with ten or more years between them face very different joint life prices: a much younger partner makes survivor income expensive, while a single life annuity on the older partner can leave the younger one exposed for decades. Modelling how long the younger partner may live alone, and on what income, needs to come before the choice.

                ## Milestones
                1. Life expectancy for each partner checked with an official calculator.
                2. Joint life quotes at several survivor percentages obtained.
                3. The younger partner's likely years alone and income under each option worked out.
                4. Alternatives such as the younger partner's own pension or a later purchase considered.
                5. A choice recorded by both partners.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice by both partners, based on the younger partner's projected income and years alone under each option."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check each partner's life expectancy with an official calculator"
                - "Request joint life quotes at three survivor percentages"
                - "Estimate the younger partner's years and income alone"
                - "Record the choice you make together"
            - name: Annuitising after a serious diagnosis
              description: |-
                ## Purpose
                Impaired life annuities can pay substantially more after a serious diagnosis, but the same diagnosis also changes whether an annuity is the right tool at all, and how much guarantees and death benefits matter to the people you leave. Taking the decision slowly, with medical evidence and a regulated adviser, protects both your income and your family.

                ## Milestones
                1. Medical details gathered, including consultant letters and the treatment plan.
                2. Impaired life quotes obtained through a specialist broker.
                3. Guarantee and value protection options priced for the family.
                4. A regulated adviser consulted before any purchase.
                5. A decision recorded, including if the answer is not to buy.

                ## Notes
                Ask your clinical team only for the factual records insurers need; the decision itself belongs with you, your family and an adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on annuitising, based on impaired life quotes and adviser input, with death benefits priced."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather consultant letters and your current treatment plan"
                - "Ask a specialist broker for impaired life quotes"
                - "Price guarantee and value protection options for your family"
                - "Book a meeting with a regulated adviser before buying"
            - name: Annuity choices for a single retiree with no dependants
              description: |-
                ## Purpose
                Without a partner or dependants relying on your income, a single life annuity with no guarantee pays the most, and death benefits matter only if you want something to pass to a niece, a friend or a charity. Making that choice deliberately, rather than accepting a standard ten-year guarantee, can add useful income for life.

                ## Milestones
                1. A decision recorded on whether anyone should receive a death benefit.
                2. Quotes with and without guarantees compared.
                3. Beneficiary details recorded if a guarantee or value protection is chosen.
                4. The final option noted with the reason.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of death benefit, or none, with the income difference against a standard guarantee stated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide whether anyone should receive a death benefit"
                - "Compare quotes with no guarantee and a standard guarantee"
                - "Record beneficiary details if you choose a death benefit"
                - "Note the final option and the income difference"
            - name: Receiving annuity income while living abroad
              description: |-
                ## Purpose
                Retiring overseas raises annuity questions that rarely appear in brochures: whether the insurer will pay into a foreign bank account, which country taxes the income under the relevant tax treaty, how currency movements change its real value, and what proof of life is needed. Settling these before a move avoids frozen payments and double taxation.

                ## Milestones
                1. Each insurer's rules on paying overseas confirmed in writing.
                2. The tax treaty position for annuity income summarised with an adviser.
                3. A method for currency conversion chosen with its costs known.
                4. Proof of life arrangements agreed with each insurer.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written confirmation from each insurer on overseas payment, plus a note on tax treaty treatment and currency conversion."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each insurer in writing whether it pays into foreign accounts"
                - "Book a session with a cross-border tax adviser"
                - "Compare currency transfer costs for monthly payments"
                - "Note how currency moves changed the income in local terms @recurring(yearly)"
            - name: Arranging an annuity for a parent under power of attorney
              description: |-
                ## Purpose
                Adult children acting as attorney for a parent who can no longer manage money may need to decide what to do with a pension pot on their behalf. Attorneys must act in the parent's best interests, keep records and avoid conflicts, which matters when an annuity reduces what might later be inherited. A careful, documented process protects both the parent and the attorney.

                ## Milestones
                1. The power of attorney registered and accepted by the pension provider.
                2. The parent's income needs, care costs and known wishes written down.
                3. Quotes obtained and, where needed, a regulated adviser consulted.
                4. The reasoning for the decision recorded in an attorney's note.
                5. Payments set up into the parent's own account, not the attorney's.

                ## Notes
                Rules on what attorneys may do with pensions vary by country. Check with the body that supervises attorneys before acting.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An attorney's note recording the parent's needs, the options considered and the decision, with income paid into the parent's account."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Send the registered power of attorney to the pension provider"
                - "Write down your parent's income needs, care costs and known wishes"
                - "Record the reasoning for the decision in an attorney's note"
                - "Check the annuity has reached your parent's account @recurring(monthly:8)"
            - name: Small pension pots taken as cash or annuitised
              description: |-
                ## Purpose
                Pots of a few thousand buy only a tiny annuity, and some insurers will not quote for very small amounts at all. Many pension systems let small pots be taken as a lump sum, partly taxed, instead. Checking the rules for each small pot avoids a lifelong payment so small it costs more to administer than it is worth.

                ## Milestones
                1. Pots below the small pot limit in your country identified.
                2. Annuity quotes for the small pots obtained where available.
                3. The tax on taking each small pot as cash estimated.
                4. A decision recorded for each small pot.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision recorded for every small pot, comparing its annuity income with the after-tax cash value."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the small pot lump sum rules where you live"
                - "Mark which of your pots fall below the limit"
                - "Estimate the tax on taking each small pot as cash"
                - "Record a decision for each small pot"
            - name: Annuity staircase across ages 65 to 80
              description: |-
                ## Purpose
                Buying smaller annuities every few years, rather than one large one, is sometimes called an annuity staircase or ladder. Each step buys at an older age, usually at a better rate, and keeps the unspent pot available for emergencies. Running it well needs a written schedule and a clear rule for when to skip a step.

                ## Milestones
                1. A schedule of purchase ages and target amounts written.
                2. A rule set for skipping or delaying a step, such as unusually low rates.
                3. The first step bought or scheduled.
                4. Each later step reviewed against the schedule when it falls due.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written staircase schedule with purchase ages, amounts and a skip rule, with each step reviewed as it falls due."
                cadence: cyclic
              tasks:
                - "Write the purchase age and target amount for each step"
                - "Set a rule for when to skip or delay a step"
                - "Check whether the next staircase step is due this year @recurring(yearly)"
                - "Request whole-of-market quotes in the year a step falls due"
            - name: Moving from drawdown to an annuity in later life
              description: |-
                ## Purpose
                Plenty of retirees start in drawdown and switch some or all of the remaining pot to an annuity in their mid seventies or eighties, when rates are higher and managing investments has become a burden. Deciding in advance what would trigger that switch, such as an age, a health change or a wish to simplify, means it happens by plan rather than by crisis.

                ## Milestones
                1. Triggers for switching written down: age, health, managing load or a family change.
                2. An indicative quote at your current age recorded each year.
                3. The person who would help with the switch named.
                4. A decision recorded when a trigger is met.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written list of switch triggers, with a yearly indicative quote and a decision recorded when a trigger is met."
                cadence: rolling
              tasks:
                - "Write the triggers that would prompt a switch to an annuity"
                - "Name the person who would help you with the switch"
                - "Record an indicative annuity quote for your current age @recurring(yearly)"
            - name: Deferred annuity as longevity insurance
              description: |-
                ## Purpose
                Deferred annuities bought in your sixties but paying from 80 or 85 act as insurance against a very long life, for a fraction of the cost of an immediate annuity. In some countries, such as the US with qualifying longevity annuity contracts, they carry tax advantages too. Pricing one shows how much more freely the rest of the pot could be spent in the earlier years.

                ## Milestones
                1. Availability of deferred annuities in your country checked.
                2. Quotes for income starting at 80 and at 85 obtained.
                3. The number of years the remaining pot must then last worked out.
                4. A decision recorded on whether to buy one.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision recorded on a deferred annuity, based on quotes for two start ages and the effect on the remaining pot."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check whether deferred income annuities are sold where you live"
                - "Request quotes for income starting at 80 and at 85"
                - "Work out how long the remaining pot then needs to last"
                - "Record whether you will buy one and why"
            - name: Purchased life annuity from non-pension savings
              description: |-
                ## Purpose
                Annuities can also be bought with ordinary savings, not only pension money. In several countries part of each payment from such a purchased life annuity is treated as a return of capital and not taxed, which can make the after-tax income compare well with savings interest for older buyers. They are niche and quotes are scarcer, so they deserve a careful look rather than a quick yes.

                ## Milestones
                1. The tax treatment of purchased life annuities where you live confirmed.
                2. Quotes from at least two insurers obtained.
                3. After-tax income compared with keeping the savings.
                4. A decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on a purchased life annuity, based on two quotes and an after-tax comparison with keeping the savings."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm how purchased life annuities are taxed where you live"
                - "Request purchased life annuity quotes from at least two insurers"
                - "Compare after-tax income with keeping the savings"
                - "If bought, check the tax-free capital element on each certificate @recurring(yearly)"
            - name: Single life annuity plus life cover instead of joint life
              description: |-
                ## Purpose
                Some couples consider buying a higher single life annuity and using part of the extra income to pay for life insurance that would support the surviving partner. It can work when the insured partner is healthy and cover is cheap, and it fails badly if premiums stop or the policy lapses. A careful side-by-side comparison, ideally with an adviser, comes before giving up a joint life option.

                ## Milestones
                1. Single and joint life quotes obtained on the same day.
                2. Life cover quotes for the survivor income gap obtained.
                3. Survivor income compared under both approaches across a range of ages at death.
                4. Risks such as lapse and premium rises written down.
                5. A decision agreed by both partners.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side comparison of joint life against single life plus cover, with lapse risks noted and a joint decision recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Request single and joint life annuity quotes on the same day"
                - "Get life cover quotes for the survivor income gap"
                - "Compare survivor income at several ages of death"
                - "Discuss the comparison with a regulated adviser"
            - name: Review of an existing investment-linked or variable annuity
              description: |-
                ## Purpose
                Investment-linked, unit-linked and variable annuities bought years ago may carry high charges, valuable living or death benefit guarantees, or both. Reviewing what you own, what it costs and what it guarantees comes before any switch or surrender, since an exchange can restart surrender charges and lose a guarantee that cannot be replaced.

                ## Milestones
                1. The contract, latest statement and any rider documents gathered.
                2. Yearly charges added up as a percentage.
                3. Each guarantee and its current value listed.
                4. Surrender value and charges confirmed in writing.
                5. A keep, change or surrender decision recorded after advice.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written review of the contract's charges, guarantees and surrender value, with a decision recorded after advice."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Gather the contract, latest statement and rider documents"
                - "Add up every yearly charge on the contract as a percentage"
                - "Ask the insurer to confirm the surrender value in writing"
                - "Check charges and guarantee values on each yearly statement @recurring(yearly)"
---

# Annuity Decisions

This area is for retirees, and people a few years from retiring, who are weighing whether to turn some or all of a pension pot into a guaranteed income for life. It starts with the groundwork: the essential income gap, an inventory of pots, a hunt for old guaranteed annuity rates, free guidance and a health record for enhanced quotes. It then moves through the routines that watch rates and check payments, the terms and product families worth learning properly, the big choices on whether, how much, single or joint life and income shape, the dated events from the retirement pack to the cooling-off window, situations for couples, carers, expats and people with a serious diagnosis, and finally specialist tools such as staircases, deferred annuities and reviews of older investment-linked contracts.

What repeats is a monthly rate log before buying and a monthly payment check after, a quarterly quote refresh and scam check, and a yearly round of escalation, tax code, proof of life, household sheet and floor reviews. The Meeting notes, Metrics log, Operational checklist and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
