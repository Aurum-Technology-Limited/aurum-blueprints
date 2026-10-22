---
id: personal-finance.income-tax-optimisation
name: Income Tax Optimisation
description: "Your tax code checked, every allowance and relief you qualify for claimed, payslips and returns reviewed on a steady rhythm, and pay rises, bonuses and side income handled with the tax in view."
category: personal
version: 1.0.0
tags: [personal-finance, income-tax-optimisation, everyone, knowledge-worker, tax-code, allowances, tax-relief, tax-return]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - vendor
    - remediation-plan
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Income Tax Optimisation
          description: "Using allowances, reliefs, tax codes and deductions correctly so you pay the tax you owe and not a penny more."
          projects:
            - name: Tax year calendar with every deadline that applies
              description: |-
                ## Purpose
                The tax year rarely matches the calendar year, and the dates that matter depend on whether you only have a salary or also file a return, pay in advance or claim reliefs. One calendar holding the year start and end, filing deadlines, payment dates and the last day for year-end contributions prevents the penalties that come purely from missing a date. In the UK, for example, the year runs from 6 April to 5 April, with online returns due the following 31 January.

                ## Milestones
                1. The start and end dates of your country's tax year written down.
                2. Every filing, payment and claim deadline that applies to you listed with its date.
                3. Each deadline entered in your calendar with a reminder two weeks before.
                4. The penalty or interest for missing each deadline noted from the tax authority's own guidance.

                ## Notes
                Take dates only from the tax authority's website, not from a blog or last year's memory; they shift when rules change or deadlines fall on public holidays.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar holding every tax deadline that applies to you this year, each with a reminder set two weeks ahead."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up your tax year start and end dates on the tax authority's website"
                - "List every filing, payment and claim deadline that applies to you"
                - "Add each deadline to your calendar with a two-week reminder"
                - "Refresh the calendar with next year's dates when the new tax year starts @recurring(yearly)"
            - name: Online personal tax account set-up
              description: |-
                ## Purpose
                Most tax authorities now run an online account showing your tax code, the income employers and pension providers have reported, and any refund or underpayment. Setting it up once, with identity checks done and two-step sign-in switched on, means you can spot a mistake within weeks rather than when a letter arrives months later.

                ## Milestones
                1. An online account opened with the tax authority and identity verification completed.
                2. Two-step sign-in switched on and recovery details current.
                3. Your taxpayer reference number saved where you can find it again.
                4. Each employer and pension provider shown in the account checked against your own records.

                ## Notes
                Reach the account only by typing the tax authority's address yourself. Texts and emails offering a tax refund by link are one of the commonest scams.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An online tax account you can sign into, with verified identity and every current income source shown correctly."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the official sign-up page for your tax authority's online account"
                - "Complete the identity checks and switch on two-step sign-in"
                - "Save your taxpayer reference number in your password manager notes"
                - "Compare the employers listed in the account with your payslips"
            - name: Income map across every source this tax year
              description: |-
                ## Purpose
                Tax is worked out on all your income together, yet the pieces arrive from different places: salary, a taxable benefit, bank interest, dividends, rent, a side business, a pension. Listing each source with an estimated annual figure shows which band you land in, whether any allowance is at risk and whether anything arrives untaxed and needs reporting.

                ## Milestones
                1. Every income source for this tax year listed, including small ones such as interest.
                2. An estimated annual amount written beside each source.
                3. Each source marked as taxed at source, partly taxed or untaxed.
                4. A total estimated taxable income figure for the year, with the band it falls in.

                ## Notes
                Bank interest is the source people most often forget, especially after savings rates rise. Your banks' annual interest statements give the exact figure.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page list of every income source this tax year with an estimated amount, its tax treatment and a total."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every way money reached you last tax year, however small"
                - "Estimate this year's figure for each source"
                - "Mark which sources already have tax taken before you receive them"
                - "Add up the total and note the tax band it falls in"
            - name: Tax code check against the coding notice
              description: |-
                ## Purpose
                A wrong tax code is the commonest reason employees overpay or underpay, often because an old benefit, a second job or an estimated figure has been carried forward. Checking the code on your payslip against the notice the tax authority issued, and the notice against your real circumstances, takes about an hour and can be worth hundreds a year.

                ## Milestones
                1. The current tax code on your latest payslip noted for each job or pension.
                2. The matching coding notice found in your online account or post.
                3. Every adjustment on the notice, such as benefits or estimated interest, checked against reality.
                4. Any error reported to the tax authority, with the date and reference recorded.

                ## Notes
                Expect the payslip to change one or two pay runs after a correction, not immediately. Payroll applies the code it is sent; the fix comes from the tax authority.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your tax code is confirmed correct, or a correction has been requested with a reference number recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the tax code shown on your latest payslip"
                - "Download the coding notice that explains that code"
                - "Check each allowance and deduction on the notice against your real situation"
                - "Report any wrong figure to the tax authority and log the reference"
            - name: Tax year document folder
              description: |-
                ## Purpose
                Every claim, return and dispute is settled by documents: year-end certificates from employers, payslips, interest statements, pension contribution statements, donation receipts and expense receipts. One folder per tax year, filled as papers arrive, turns a weekend of hunting into twenty minutes and keeps the evidence you need if a claim is ever checked.

                ## Milestones
                1. A folder per tax year, digital or paper, with sections for income, reliefs and correspondence.
                2. Last year's year-end certificate and payslips filed in it.
                3. A short list of documents still expected before this year ends.
                4. The folder backed up somewhere other than your laptop.

                ## Notes
                Keep records for at least as long as your tax authority can reopen a year. Six years is a common default, but check the rule where you live.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder for the current tax year holding every payslip and tax document received so far, with a backup copy."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a folder for this tax year with income, reliefs and letters sections"
                - "Move last year's year-end certificate and payslips into it"
                - "Write a list of statements you expect before the year ends"
                - "File the month's payslip and any tax letters in the folder @recurring(monthly:12)"
            - name: Tax return requirement check
              description: |-
                ## Purpose
                Plenty of salaried people need to file a return without realising it: income above a threshold, untaxed rent or side earnings, a high-income charge on family payments, or foreign income. Working through your tax authority's official checker each year avoids a late filing penalty on a return you did not know you owed.

                ## Milestones
                1. Your tax authority's official guidance on who must file worked through.
                2. Each trigger that applies to you written down with the figure behind it.
                3. A clear yes or no recorded for this year, with the date checked.
                4. Registration for filing completed before the registration deadline, if the answer is yes.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded yes or no on whether you must file a return this year, with registration done if the answer is yes."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Run through the tax authority's official filing checker"
                - "Write down any trigger that applies, such as side income or rent"
                - "Register for filing if the answer is yes"
                - "Note the date you checked and the answer in your tax folder"
            - name: Allowances and reliefs inventory
              description: |-
                ## Purpose
                Governments give money back in many small ways: a personal allowance, tax-free bands for interest and dividends, transferable allowances between partners, and relief on pension contributions, donations and work costs. Few of them are applied automatically. An inventory of which ones fit your situation, and whether each is already being used, becomes the checklist the rest of this area works through.

                ## Milestones
                1. Your tax authority's list of personal allowances and reliefs read through once.
                2. Each one marked as applies, might apply or does not apply to you.
                3. Every applicable one marked as already used, partly used or unused.
                4. The unused ones ranked by likely value, with the top three chosen to tackle first.

                ## Notes
                Thresholds and amounts change most years. Write the tax year beside every figure you record so old numbers are never reused by mistake.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written inventory of allowances and reliefs, each marked used or unused, with three unused ones chosen to claim first."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open the tax authority's page listing allowances and reliefs"
                - "Mark each allowance as applies, might apply or does not apply"
                - "Note whether each applicable one is already being used"
                - "Pick the three unused reliefs most likely to be worth claiming"
            - name: Your marginal rate and band position
              description: |-
                ## Purpose
                The rate on your next pound of income, not your average rate, decides whether a pension contribution, a salary sacrifice or extra overtime is worth it. Working out where you sit in the bands, including any range where an allowance is withdrawn and the effective rate jumps, gives you the number every later decision in this area relies on.

                ## Milestones
                1. This year's income tax bands and rates for your country written down.
                2. Your expected taxable income placed within those bands.
                3. Your marginal rate, including social security contributions, calculated.
                4. Any nearby threshold where an allowance tapers away noted with its distance from your income.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note of your marginal rate including social contributions and the distance to the next threshold that changes it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down this year's income tax bands and rates"
                - "Place your expected taxable income in the right band"
                - "Add social security contributions to get your true marginal rate"
                - "Note how far your income is from the next threshold that changes it"
            - name: Four-year look-back for missed reliefs
              description: |-
                ## Purpose
                Many tax authorities let you claim reliefs you missed in earlier years, often going back four, and the oldest year closes for good at each year end. Checking those years for unclaimed work expenses, transferable allowances, pension relief or overpaid tax on a part year can produce a refund for an afternoon's work.

                ## Milestones
                1. The time limit for backdated claims in your country confirmed.
                2. Each open year checked against your reliefs inventory for anything missed.
                3. Evidence gathered for every missed relief found.
                4. Claims submitted for the open years, oldest first, with references recorded.

                ## Notes
                Use the official claim route. Refund firms often take a sizeable share of the refund for a form you can usually complete yourself for free.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every open earlier year has been checked for missed reliefs, and any claims found have been submitted with references logged."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Confirm how many years back your tax authority accepts claims"
                - "Check each open year for missed expenses, transfers and pension relief"
                - "Gather the payslips and receipts for anything you find"
                - "Submit the claim for the oldest open year first"
            - name: Monthly payslip deductions check
              description: |-
                ## Purpose
                Payroll errors are common and usually small, which is exactly why they run for months: a code not updated, a benefit counted twice, a pension deduction at the wrong rate. A five-minute look at each payslip against the previous one catches a change the month it happens instead of at year end.

                ## Milestones
                1. A short checklist for each payslip covering tax code, gross pay, tax, contributions and pension.
                2. Each month's payslip compared with the previous one.
                3. Any unexplained change raised with payroll within a week.
                4. Twelve consecutive payslips checked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive payslips checked against the previous month, with every unexplained change raised and resolved."
                cadence: rolling
              tasks:
                - "Write a five-line checklist for reading a payslip"
                - "Compare this month's payslip with last month's line by line @recurring(monthly:26)"
                - "Email payroll about any change you cannot explain"
                - "Keep a note of each query and how it was resolved"
            - name: Work expense receipt capture
              description: |-
                ## Purpose
                Employees who pay for professional subscriptions, specialist clothing, tools or business mileage in their own car can usually claim relief, but only with records. Photographing receipts and logging work trips as they happen gives you the evidence for a claim and a figure to check against what your employer already reimburses.

                ## Milestones
                1. A single place, such as an app or spreadsheet, for work receipts and mileage.
                2. Every unreimbursed work cost logged within a week of paying it.
                3. Reimbursed costs marked separately so nothing is claimed twice.
                4. A running total for the tax year visible at a glance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log holding every unreimbursed work expense and business trip this tax year, each backed by a receipt or trip record."
                cadence: rolling
              tasks:
                - "Choose one app or spreadsheet for work receipts and mileage"
                - "Add a column showing whether the employer reimbursed each cost"
                - "Log the month's unreimbursed work costs and trips @recurring(monthly:3)"
                - "Photograph paper receipts on the day you get them"
            - name: Quarterly year-to-date tax estimate
              description: |-
                ## Purpose
                Underpayments catch out people with more than one income, a bonus, untaxed interest or rental profit. Every quarter, adding up income so far and tax already paid, then projecting to year end, shows whether you are heading for a bill, a refund or neither while there is still time to change the outcome.

                ## Milestones
                1. A simple sheet with income, tax paid and projected year-end figures per source.
                2. The first quarterly estimate completed and the expected gap noted.
                3. A threshold set above which a projected bill triggers a code change request.
                4. Four quarterly estimates completed in the tax year.

                ## Notes
                Start from the **Metrics log** template. An estimate within a few hundred is enough; the point is direction, not precision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly estimates completed in one tax year, each recording projected tax due against tax already paid."
                cadence: cyclic
              tasks:
                - "Set up a metrics log with income and tax paid per source"
                - "Project the year-end tax position from the figures so far @recurring(quarterly)"
                - "Note whether you are heading for a bill or a refund"
                - "Ask the tax authority to adjust your code if the gap is large"
            - name: Annual tax return filing routine
              description: |-
                ## Purpose
                Filing in the last week before the deadline is how figures get missed, payments go in late and penalties appear. A fixed routine, started as soon as year-end documents arrive and run from the same checklist each year, makes the return a few evenings of work and leaves time to query anything odd.

                ## Milestones
                1. A filing checklist listing every document and figure your return needs.
                2. All year-end documents gathered by a set date each year.
                3. The return completed and checked at least a month before the deadline.
                4. The submission receipt and tax calculation saved in the year's folder.

                ## Notes
                Start from the **Operational checklist** template. Filing early does not mean paying early; payment usually stays due on the normal date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The tax return filed at least a month before the deadline, with the submission receipt saved, for two consecutive years."
                cadence: cyclic
              tasks:
                - "Ask the agent to turn last year's return into a filing checklist"
                - "Block two evenings to complete the return once documents arrive @recurring(yearly)"
                - "Check each figure against its source document before submitting"
                - "Save the submission receipt and tax calculation in the folder"
            - name: Tax bill and advance payment schedule
              description: |-
                ## Purpose
                If you file a return, the bill may come in two or three instalments, including advance payments towards next year's tax based on this year's figure. Knowing the dates and amounts, and whether you can reduce the advance payments because income has fallen, avoids both late payment interest and handing over more upfront than you need to.

                ## Milestones
                1. Every payment date and amount from your latest tax calculation listed.
                2. A payment or scheduled transfer set up for each date.
                3. A decision recorded on whether advance payments should be reduced.
                4. Each payment checked off against the tax authority's statement.

                ## Notes
                Only apply to reduce advance payments if you genuinely expect lower income. Reducing them too far brings interest on the shortfall.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every tax payment for the year made by its due date and shown as received on the tax authority's statement."
                cadence: cyclic
              tasks:
                - "List each payment date and amount from your latest tax calculation"
                - "Decide whether lower income justifies reducing advance payments"
                - "Pay the balancing payment and first advance payment by their date @recurring(yearly)"
                - "Pay the second advance payment by its due date @recurring(yearly)"
            - name: Pre year-end allowance review
              description: |-
                ## Purpose
                Several allowances are use-it-or-lose-it: a tax-free savings limit, the annual pension allowance, a dividend or gains allowance, relief on gifts to charity. Six weeks before the tax year ends, one review of what is still unused gives time to make contributions or transfers before the door shuts.

                ## Milestones
                1. A list of every allowance that resets at year end.
                2. The amount used so far this year noted against each.
                3. A decision for each unused allowance: use it, partly use it or let it go.
                4. Any contributions or transfers completed at least a week before year end.

                ## Notes
                This review is about using reliefs you already qualify for. Where to invest is a separate question for your investment plans or a regulated adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated note for the tax year recording each resetting allowance, the amount used and the decision made, actioned before year end."
                cadence: cyclic
              tasks:
                - "List the allowances that reset when the tax year ends"
                - "Review used and unused allowances six weeks before year end @recurring(yearly)"
                - "Decide which unused allowances are worth using this year"
                - "Complete any contributions a week before the year closes"
            - name: New coding notice review
              description: |-
                ## Purpose
                Before each new tax year many tax authorities send an updated coding notice built from estimates: last year's interest, a benefit you no longer have, an old underpayment being collected. Reading it when it arrives, rather than discovering the result on the first payslip of the year, lets you correct it before the first wrong deduction.

                ## Milestones
                1. The new coding notice located as soon as it is issued.
                2. Each estimated figure on it compared with your income map.
                3. Any wrong estimate challenged with updated figures.
                4. The first payslip of the new year checked for the expected code.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each year's coding notice is checked within a month of issue and any wrong estimate is corrected before the new year's first payslip."
                cadence: cyclic
              tasks:
                - "Find out when your tax authority usually issues new coding notices"
                - "Check the new notice against your income map @recurring(yearly)"
                - "Send updated figures for any estimate that is wrong"
                - "Confirm the first payslip of the year uses the new code"
            - name: Donation receipts and giving relief log
              description: |-
                ## Purpose
                Giving to charity can carry tax relief, through payroll giving, a charity reclaiming tax on your gift, or extra relief you claim yourself if you pay a higher rate. That relief depends on records: which charity, how much, when, and any declaration you signed. A simple log turns a year of small gifts into a claim you can actually make.

                ## Milestones
                1. Every charity you give to regularly listed with the payment method and any declaration made.
                2. A log of each donation with its date and amount.
                3. Higher-rate relief on the year's gifts estimated, if it applies to you.
                4. The year's total entered on your return or claim form.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complete donations log for the tax year, with any extra relief due claimed on the return or claim form."
                cadence: rolling
              tasks:
                - "List the charities you give to and how you pay them"
                - "Check you have made the tax declaration each charity needs"
                - "Add the quarter's donations and receipts to the log @recurring(quarterly)"
                - "Total the year's gifts when preparing your return"
            - name: Tax authority correspondence log
              description: |-
                ## Purpose
                Disputes with the tax authority are settled on dates and references: when you called, who you spoke to, what was promised. A running log of every letter, message and call, with the outcome and next step, means you never restart an explanation from scratch and can prove exactly when you raised a problem.

                ## Milestones
                1. A log with columns for date, channel, reference, summary and next step.
                2. Tax letters from the last two years entered.
                3. Every new contact logged on the day it happens.
                4. Open items reviewed each month until closed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A correspondence log covering at least twelve months, with every open item carrying a dated next step."
                cadence: rolling
              tasks:
                - "Create a log with date, channel, reference, summary and next step"
                - "Enter the tax letters you have from the last two years"
                - "Check the online tax account for new messages and update the log @recurring(monthly:16)"
                - "Write down the call reference before you hang up on any tax call"
            - name: Reading your tax code letter by letter
              description: |-
                ## Purpose
                A tax code is a compressed instruction to payroll: a number for your tax-free amount and letters for special situations such as a second job, a negative allowance or an emergency basis. Learning what each part of your own code means lets you spot a problem from the payslip alone. The UK codes 1257L, BR, K and 0T are one example of the pattern.

                ## Milestones
                1. The official guide to tax codes for your country read through.
                2. The number and each letter in your own code explained in your own words.
                3. Three codes that would signal a problem written down.
                4. A second code from your household decoded as practice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written explanation of every part of your current tax code, plus three codes that would signal a problem."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read the tax authority's guide to what tax codes mean"
                - "Write a one-line explanation of each part of your code"
                - "List three codes that would mean something has gone wrong"
                - "Decode a partner's or second job's code for practice"
            - name: How payroll works out tax each pay period
              description: |-
                ## Purpose
                Payroll rarely taxes each month in isolation. Many systems run cumulatively, spreading allowances across the year and correcting earlier over or under deductions automatically, while an emergency or non-cumulative basis does not. Understanding the method explains why one payslip suddenly shows a refund or a bigger deduction, and when that is correct.

                ## Milestones
                1. The difference between cumulative and non-cumulative calculation understood.
                2. Your year-to-date pay and tax figures located on your payslip.
                3. One month's tax deduction recalculated by hand from those figures.
                4. The reason for your last unusual deduction explained in a sentence.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One month's tax deduction recalculated by hand to within a pound of the payslip figure."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read how your country's payroll spreads allowances across the year"
                - "Find the year-to-date pay and tax figures on your payslip"
                - "Recalculate one month's tax by hand from those figures"
                - "Explain your last unusual deduction in a sentence"
            - name: Tax on savings interest and dividends
              description: |-
                ## Purpose
                Interest and dividends are often taxed differently from salary, with their own tax-free bands and rates, and banks may no longer deduct tax before paying you. Knowing how your country treats them tells you whether higher savings rates have quietly pushed you over an allowance and whether you need to tell the tax authority.

                ## Milestones
                1. This year's tax-free bands and rates for interest and dividends written down.
                2. Your expected interest and dividends for the year totalled.
                3. A conclusion recorded on whether any tax is due on them.
                4. The way any tax due will be collected identified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note showing this year's expected interest and dividends against their tax-free bands, with any tax due and how it will be collected."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look up the tax-free bands for savings interest and dividends"
                - "Total the interest and dividends you expect this year"
                - "Work out whether any of it is taxable"
                - "Find out whether the tax is collected through your code or a return"
            - name: Benefits in kind and salary sacrifice explained
              description: |-
                ## Purpose
                Knowledge workers often receive part of their pay as benefits: private medical cover, a company car, gym membership, a cycle scheme, an electric car lease or pension sacrifice. Some are taxed as if they were cash, some are tax-free and some cut tax and contributions together. Knowing which is which turns the annual benefits window from guesswork into a decision.

                ## Milestones
                1. Every benefit your employer offers listed from the benefits handbook.
                2. Each one marked as taxable, tax-free or salary sacrifice.
                3. The taxable value of any benefit you receive found on your coding notice or year-end benefits form.
                4. Questions for HR or payroll written down before the next benefits window.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of every employer benefit marked taxable, tax-free or salary sacrifice, with the taxable value of those you receive."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Download your employer's benefits handbook"
                - "Mark each benefit as taxable, tax-free or salary sacrifice"
                - "Find the taxable value of the benefits you already get"
                - "Write your questions for HR before the next benefits window"
            - name: How pension tax relief reaches you
              description: |-
                ## Purpose
                Pension contributions usually attract income tax relief, but it reaches you by different routes: taken before tax through payroll, added by the provider at the basic rate, or partly reclaimed by you through a return. Knowing which route each of your schemes uses tells you whether you already get full relief or are leaving some unclaimed.

                ## Milestones
                1. The relief method of each pension you pay into identified.
                2. The relief shown on a recent pension statement or payslip found.
                3. Whether extra relief is due through a return or claim worked out.
                4. This year's annual limit on relieved contributions noted.

                ## Notes
                Only the tax mechanics belong here. Choosing funds or providers sits with your retirement planning.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For every pension you contribute to, the relief method is recorded and any extra relief due has been identified."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask each pension provider or payroll which relief method they use"
                - "Find the relief on a recent statement or payslip"
                - "Work out whether your tax rate means extra relief is due"
                - "Note this year's annual limit on relieved contributions"
            - name: Rules for claiming employment expenses
              description: |-
                ## Purpose
                Employment expense rules are stricter than most people expect: a cost usually has to be needed for the job itself, not merely useful, and anything your employer reimburses cannot be claimed again. Reading the official rules once, with your own list of costs beside them, saves a rejected claim and the awkward correspondence that follows.

                ## Milestones
                1. The tax authority's guidance on employee expenses read.
                2. Your own work costs sorted into allowable, doubtful and not allowable.
                3. Flat-rate allowances for your occupation or for required home working checked.
                4. A short note of the evidence each allowable cost needs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your work costs sorted into allowable, doubtful and not allowable against official guidance, with the evidence each needs noted."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read the official guidance on employee expenses"
                - "Sort your work costs into allowable, doubtful and not allowable"
                - "Check whether a flat-rate allowance exists for your occupation"
                - "Note what evidence each allowable cost needs"
            - name: Practice tax return with last year's figures
              description: |-
                ## Purpose
                A first tax return feels daunting mostly because the forms are unfamiliar. Filling in a practice version with last year's numbers, using the tax authority's own draft mode or a paper copy, shows which boxes you need and which documents feed them long before a real deadline is close.

                ## Milestones
                1. The return form or online service relevant to you opened in draft.
                2. Last year's figures entered for every section that applies.
                3. The calculated result compared with the tax you actually paid.
                4. A list of the boxes you use and the document behind each one.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed practice return using last year's figures, with a list mapping each box you use to its source document."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Open the return form or a draft in the online service"
                - "Enter last year's figures in each section that applies"
                - "Compare the calculation with the tax you actually paid"
                - "List the boxes you use and the document behind each"
            - name: Claiming relief on work expenses you already pay
              description: |-
                ## Purpose
                Professional body fees, uniform laundering, home working costs where your employer requires it, and business miles in your own car are among the most commonly unclaimed reliefs. Making the claim through the official route turns costs you are paying anyway into a tax code adjustment or a refund.

                ## Milestones
                1. The allowable expenses from your log totalled for the year.
                2. Your professional bodies checked on the tax authority's approved list.
                3. A claim submitted through the official route or on your return.
                4. The resulting code change or refund confirmed in writing.

                ## Notes
                If your employer pays a mileage rate below the tax-free rate, the shortfall can often be claimed too.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A work expenses claim for the latest year submitted, with the code change or refund confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Total the allowable costs from your expense log"
                - "Check your professional body is on the approved list"
                - "Submit the claim through the official online route"
                - "Repeat the claim with the new year's figures @recurring(yearly)"
            - name: Transferring unused allowance to a spouse
              description: |-
                ## Purpose
                Some countries let married couples or civil partners move part of an unused personal allowance from the lower earner to the other, provided neither pays above the basic rate. When one partner earns below the allowance, through part-time work, study or caring, the transfer is quick and can often be backdated.

                ## Milestones
                1. The rules for transferring allowances in your country confirmed.
                2. Both partners' expected incomes checked against the eligibility limits.
                3. A joint decision recorded on whether to transfer.
                4. The transfer applied for, with earlier eligible years claimed too.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on transferring allowance between partners, with the application and any backdated claims submitted if eligible."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your country allows allowance transfers between partners"
                - "Compare both incomes with the eligibility limits"
                - "Apply for the transfer and any backdated years"
                - "Check each year that both incomes still qualify @recurring(yearly)"
            - name: Pension salary sacrifice decision
              description: |-
                ## Purpose
                Swapping salary for an employer pension contribution can save income tax and social security contributions together, and some employers pass on their own savings. It also lowers your contractual pay, which can affect mortgage applications, statutory leave pay and life cover multiples. Comparing both sides before the next enrolment window makes it a deliberate choice.

                ## Milestones
                1. Your employer's salary sacrifice terms read, including any employer savings passed on.
                2. Take-home pay calculated with and without sacrifice.
                3. Effects on borrowing, statutory pay and linked benefits listed.
                4. A decision recorded and, if yes, the form submitted before the window closes.

                ## Notes
                Sacrifice should not take pay below the legal minimum wage where one exists; payroll will usually check this.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated decision on salary sacrifice, with take-home pay compared both ways and the side effects listed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your employer's salary sacrifice policy"
                - "Compare take-home pay with and without sacrifice"
                - "List what lower contractual pay could affect for you"
                - "Submit the election form if you decide to go ahead"
            - name: Claiming extra pension relief at the higher rate
              description: |-
                ## Purpose
                Where a pension adds basic-rate relief automatically, higher and additional rate taxpayers usually have to claim the rest themselves, and many never do. A claim through the return or by letter can be worth hundreds a year and can often be made for earlier open years as well.

                ## Milestones
                1. Gross contributions to relief-at-source schemes totalled for the year.
                2. The extra relief due estimated from your marginal rate.
                3. The claim made on your return or by the route the tax authority sets.
                4. Earlier open years checked and claimed if missed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Extra pension relief for the latest tax year claimed, with earlier open years checked and the outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up the gross contributions to relief-at-source pensions this year"
                - "Estimate the extra relief from your marginal rate"
                - "Claim it on your return or by the official route"
                - "Check whether earlier open years were missed"
            - name: Sheltering savings interest from tax
              description: |-
                ## Purpose
                As interest rates rise, savers who never paid tax on interest can find themselves over their tax-free band. Many countries offer tax-free savings wrappers, such as the UK's ISAs, that keep interest outside income tax altogether. Deciding how much of your savings should sit inside one is a tax decision before it is a product choice.

                ## Milestones
                1. The interest you expect this year compared with your tax-free band.
                2. The tax-free wrappers available in your country and their annual limits listed.
                3. A decision made on how much to hold inside a wrapper this year.
                4. Any move of existing wrapped savings done by the official transfer route.

                ## Notes
                Picking the bank with the best rate belongs with switching your accounts. The question here is only the tax wrapper and its limit.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on how much savings to hold in tax-free wrappers this year, actioned within the annual limit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare this year's expected interest with your tax-free band"
                - "List the tax-free savings wrappers and limits in your country"
                - "Decide how much to move inside a wrapper this year"
                - "Use the official transfer route when moving existing wrapped savings"
            - name: Holding savings in the lower-taxed partner's name
              description: |-
                ## Purpose
                Couples where one partner pays a higher rate can sometimes cut the household's tax on interest, dividends or rent by holding more of those assets in the other partner's name. The catch is that the transfer must be a genuine gift of ownership, which matters if the relationship ends. Thinking it through together, with the tax and the trust both on the table, avoids a decision made for a few hundred pounds that neither of you is comfortable with.

                ## Milestones
                1. Both partners' marginal rates and unused savings allowances compared.
                2. The yearly tax saving from moving specific accounts estimated.
                3. The ownership consequences discussed openly and noted.
                4. A joint decision recorded, with any account changes made in the correct name.

                ## Notes
                Rules on income from jointly owned or gifted assets vary. Check official guidance or a tax adviser before moving anything large.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A jointly agreed, written decision on which savings to hold in which partner's name, with the estimated yearly saving."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare both partners' marginal rates and unused allowances"
                - "Estimate the yearly tax saved by moving specific accounts"
                - "Talk through what genuine ownership means for you both"
                - "Change account names only after you both agree"
            - name: Choosing tax software or an accountant
              description: |-
                ## Purpose
                Once you have rent, a side business, foreign income or share awards, the official online form may stop being enough. Comparing two software options against one or two accountants, on fees, what they check and who answers for errors, gets you help matched to how complicated your affairs really are.

                ## Milestones
                1. Your reasons for wanting help written down in one paragraph.
                2. Two software options and two accountants compared on cost and scope.
                3. Each accountant's professional body membership and insurance checked.
                4. A choice made, with an engagement letter or subscription in place.

                ## Notes
                Start from the **Vendor** template. An accountant prepares the return, but you still sign it and remain responsible for it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Software or an accountant chosen against a written comparison of at least three options, with terms agreed in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a paragraph on what makes your tax affairs complicated"
                - "Compare two software options and two accountants on fees and scope"
                - "Check each accountant's professional body and insurance"
                - "Sign up or return the engagement letter for your choice"
            - name: Correcting an underpayment or claiming a refund
              description: |-
                ## Purpose
                When a calculation says you owe tax or are owed it, acting quickly limits interest and gets money back sooner. Checking the figures before accepting them, choosing how an underpayment is collected and following a refund through to your bank account turns an alarming letter into a closed file.

                ## Milestones
                1. The calculation checked line by line against your own records.
                2. Any error challenged in writing, with the reference logged.
                3. A collection method chosen for any underpayment, such as through your code or a lump sum.
                4. Any refund received in your account and the case recorded as closed.

                ## Notes
                Start from the **Remediation plan** template. If paying in one go would cause hardship, ask about spreading the payment rather than ignoring the letter.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The underpayment or refund is resolved, with the agreed figure, payment or receipt and closing letter filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the calculation line by line against your records"
                - "Challenge any wrong figure in writing and log the reference"
                - "Choose how any underpayment will be collected"
                - "Confirm the refund or final payment has cleared"
            - name: Changing jobs without an emergency tax code
              description: |-
                ## Purpose
                Starting a new job is when most emergency codes appear, because the leaving certificate from the old employer arrives late or never reaches the new payroll. Handing over the right documents in the first week, and checking the first two payslips, avoids months of overpaid tax and a refund chase.

                ## Milestones
                1. The leaving certificate from your old employer received and saved.
                2. The certificate or new starter form given to the new payroll before the first pay run.
                3. The first two payslips checked for the expected code.
                4. Any emergency code corrected through the tax authority within a month.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your first two payslips at the new job show the correct tax code, or a correction is logged within a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your old employer for the leaving certificate before your last day"
                - "Give the new payroll the certificate or starter form in week one"
                - "Check the code on your first two payslips"
                - "Update your employment details in the online tax account"
            - name: Pay rise that crosses a tax threshold
              description: |-
                ## Purpose
                Promotions and new contracts can take you into a higher band or into a range where an allowance is withdrawn, so the effective rate on part of the rise is far above the headline rate. In the UK, for example, income between 100,000 and 125,140 pounds gradually loses the personal allowance. Modelling the rise before it starts lets you decide on pension contributions, sacrifice or timing while those options are still open.

                ## Milestones
                1. Your new taxable income placed in the bands and against every taper threshold.
                2. Take-home pay before and after the rise calculated.
                3. The effective rate on the extra income worked out.
                4. A decision recorded on pension contributions or other steps, with any forms submitted.

                ## Notes
                Thresholds are often frozen while pay rises with inflation, so this can happen without a promotion at all.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The rise's effect on your marginal and effective rates is calculated and a written decision on any response is made before the first new payslip."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put your new pay into the bands and taper thresholds"
                - "Calculate take-home pay before and after the rise"
                - "Work out the effective rate on the extra income"
                - "Decide whether to raise pension contributions in response"
            - name: Bonus or share vesting month tax check
              description: |-
                ## Purpose
                Bonuses and vesting shares are often taxed through payroll in a single month, sometimes at a flat rate that does not match your real marginal rate. Checking the payslip that month, and knowing beforehand whether part of the bonus can go into a pension instead, avoids overpaying or underpaying on the biggest single payment of your year.

                ## Milestones
                1. The bonus or vesting date and gross value noted in advance.
                2. Any option to sacrifice part of the bonus into a pension decided before the deadline.
                3. The tax deducted that month checked against your marginal rate.
                4. Any shortfall or excess added to your quarterly estimate.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The tax on the bonus or vest is checked against your marginal rate and any gap is recorded in your year-to-date estimate."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the date and expected value of your next bonus or vest"
                - "Ask payroll about the deadline for bonus sacrifice"
                - "Check the tax deducted on that month's payslip"
                - "Add any gap to your quarterly tax estimate"
            - name: Second job or side income tax set-up
              description: |-
                ## Purpose
                Second jobs usually get a code that taxes all of their pay at the basic rate or above, while side earnings from selling, tutoring or freelancing may need reporting once they pass a small allowance. Setting up the second income correctly at the start avoids an unexpected bill or an overtaxed second job all year.

                ## Milestones
                1. The code for the second job checked and the allowance split between jobs confirmed.
                2. Side income measured against the tax-free trading allowance or its equivalent.
                3. Registration for filing completed if your side income needs it.
                4. A record of side income and costs running from the first sale.

                ## Notes
                Putting money aside for the tax itself belongs with smoothing irregular income. The aim here is getting the code and reporting right.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The second income is set up with the correct code or registration, and a record of its income and costs is running."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the tax code on the second job's first payslip"
                - "Compare expected side income with the trading allowance"
                - "Register for filing if your side income requires it"
                - "Start a simple record of side income and costs"
            - name: Moving abroad or arriving mid tax year
              description: |-
                ## Purpose
                Leaving or arriving partway through a tax year raises questions about residence, split years, refunds of tax deducted on a full-year basis and which country taxes what. Gathering the documents and dates before the move, and knowing which forms each country expects, avoids paying tax twice or missing a refund.

                ## Milestones
                1. Your departure or arrival date and expected residence status in each country noted.
                2. The forms each tax authority expects from people moving written down.
                3. Final payslip and leaving documents collected from the departing employer.
                4. Any refund claim or new registration submitted within its deadline.

                ## Notes
                Residence rules are complex and differ by country. A short consultation with a cross-border tax adviser is often worth the fee.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Residence status for the move year recorded and every leaving or arrival tax form submitted in both countries."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down your move date and expected residence in each country"
                - "List the leaving and arrival forms each tax authority expects"
                - "Collect your final payslip and leaving documents"
                - "Submit any refund claim or new registration"
            - name: Family benefit clawback for higher earners
              description: |-
                ## Purpose
                In some countries, family payments are clawed back through income tax once a parent's income passes a threshold, and the charge falls on the higher earner even if the other parent receives the money. Deciding whether to keep claiming, opt out or bring taxable income down with pension contributions, and registering to pay any charge, avoids a backdated bill with penalties.

                ## Milestones
                1. The threshold and taper for the charge in your country confirmed.
                2. Both parents' adjusted incomes compared to find who would pay it.
                3. A decision recorded to claim and pay, opt out, or reduce income.
                4. Filing registration done if the charge will apply.

                ## Notes
                Opting out of payment can still leave the claim in place, which in some systems protects contribution credits for a parent at home.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on family payments and the income charge, with filing registration completed if the charge applies."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the income threshold where family payments are clawed back"
                - "Work out which parent has the higher adjusted income"
                - "Decide whether to claim and pay, opt out or reduce income"
                - "Recheck both incomes against the threshold @recurring(yearly)"
            - name: Company car and fuel benefit cost check
              description: |-
                ## Purpose
                Company cars are taxed as a benefit worth a share of their list price that depends on emissions, and free private fuel can cost more in tax than the fuel itself is worth. Running the figures before choosing a car, or before accepting fuel, shows whether the perk beats a cash allowance once the tax is counted.

                ## Milestones
                1. The taxable benefit value of each car option calculated or taken from the employer's tool.
                2. The yearly tax on the car and any fuel benefit worked out at your marginal rate.
                3. A cash allowance alternative costed for comparison.
                4. A choice recorded and given to your employer.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of company car, fuel benefit and cash allowance tax costs, with the chosen option given to your employer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Get the list price and emissions figure for each car option"
                - "Calculate the yearly tax on the car benefit at your rate"
                - "Work out whether free fuel costs more in tax than it saves"
                - "Compare the total with the cash allowance on offer"
            - name: Remote working from another country day log
              description: |-
                ## Purpose
                Knowledge workers who take a laptop abroad for weeks at a time can create a tax presence in another country, or break the conditions of a tax treaty, without noticing. A plain log of where you worked each day, checked against your employer's policy and the day limits that apply, is the evidence that settles the question if anyone asks.

                ## Milestones
                1. Your employer's policy on working abroad read and any approval obtained.
                2. A day-by-day log of the country you worked in for the tax year.
                3. Day counts per country compared with the limits in the policy and official guidance.
                4. Any planned trip that needs advice before booking flagged.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complete log of work days by country for the tax year, with no unapproved stay beyond your employer's limits."
                cadence: rolling
              tasks:
                - "Read your employer's policy on working from abroad"
                - "Start a log of the country you work from each day"
                - "Record this week's work days by country @recurring(weekly:fri)"
                - "Ask HR before any trip that would pass the day limit"
            - name: First year of taking pension income
              description: |-
                ## Purpose
                The first payment from a pension is often taxed on an emergency basis, sometimes as if a one-off lump sum would be repeated every month, and the overpayment can run to thousands. Knowing in advance how the first withdrawal will be taxed, and how to reclaim any excess without waiting for year end, protects the income you planned to live on.

                ## Milestones
                1. The tax treatment of your planned first withdrawal confirmed with the provider.
                2. Any tax-free portion and the taxable amount separated in your plan.
                3. The first payment's tax checked against what you expected.
                4. Any overpaid tax reclaimed through the official form, with a reference logged.

                ## Notes
                How much to withdraw belongs with retirement planning and, where required, regulated advice. The job here is making sure the tax is right.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The tax on the first pension withdrawal is checked and any overpayment has been reclaimed with a reference recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the provider how the first withdrawal will be taxed"
                - "Separate any tax-free portion from the taxable amount in your plan"
                - "Check the tax on the first payment against your estimate"
                - "Reclaim any overpayment with the official form"
            - name: Part-year or seasonal worker refund claim
              description: |-
                ## Purpose
                People who work only part of the year, such as students in summer jobs, seasonal staff or anyone who stops work mid-year, often pay tax as though they earned at that rate all year. A short claim once the work ends, with payslips and the leaving certificate, usually returns the excess without waiting until after year end.

                ## Milestones
                1. Total pay and tax for the period worked added up from payslips.
                2. Expected income for the rest of the tax year estimated.
                3. The refund claim form or online request completed.
                4. The refund received and recorded in the tax folder.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A refund claim submitted for a part year of work, with the outcome and amount recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up the pay and tax on your payslips for the period"
                - "Estimate any other income for the rest of the tax year"
                - "Submit the refund claim with your leaving certificate"
                - "Record the refund amount when it arrives"
            - name: Accidental landlord rental income reporting
              description: |-
                ## Purpose
                Letting out a flat after moving in with a partner, or renting a spare room, makes you a landlord in the tax authority's eyes from the first payment. Knowing which costs are allowable, whether a room or property allowance beats claiming costs, and recording rent month by month keeps the return straightforward.

                ## Milestones
                1. The rental income rules and any property or room allowance in your country noted.
                2. A record of rent received and costs paid started.
                3. A comparison made between claiming actual costs and using an allowance.
                4. The rental income reported on the return or registered for filing.

                ## Notes
                Mortgage interest relief for landlords is restricted in some countries. Check current rules rather than relying on what applied a few years ago.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of rent and allowable costs recorded and the rental profit reported on the return."
                cadence: rolling
              tasks:
                - "Read your tax authority's guide to rental income"
                - "Record rent received and costs paid this month @recurring(monthly:8)"
                - "Compare claiming costs with any flat-rate property allowance"
                - "Register to report rental income if you have not already"
            - name: Tax tidy-up after a partner dies
              description: |-
                ## Purpose
                After a partner dies, the household's tax picture changes quietly: a transferred allowance may stop, joint savings become yours, a pension may pass to you with its own code, and the estate needs a final income tax figure. Working through these at a pace you can manage, with the tax authority's bereavement service, avoids a surprise bill a year later.

                ## Milestones
                1. The tax authority told of the death, through a tell-once service where one exists.
                2. Income now in your name, such as interest and inherited pensions, listed.
                3. Your own tax code checked after the changes take effect.
                4. The deceased's final income tax position passed to the executor or confirmed settled.

                ## Notes
                Ask someone you trust to help with the calls. There is rarely a need to rush; tax authorities expect bereavement matters to take time.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your own tax code reflects the income now in your name, and the deceased's final tax position is with the executor or settled."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find out whether a tell-once service can notify the tax authority"
                - "List the income that has moved into your name"
                - "Check your tax code once the changes take effect"
                - "Give the executor any tax letters addressed to your partner"
            - name: Responding to a tax authority compliance check
              description: |-
                ## Purpose
                Letters opening a check into your return or a specific claim are stressful but usually routine. Reading exactly what is asked, keeping to the deadline, sending only the information requested and keeping copies of everything gives the best chance of a quick close, and shows early when professional help is needed.

                ## Milestones
                1. The scope, deadline and named officer from the letter written down.
                2. The requested documents gathered and copied, with nothing extra volunteered.
                3. A decision made on whether to involve an accountant or tax adviser.
                4. The response sent before the deadline, with proof of sending kept.
                5. The closing letter or outcome filed.

                ## Notes
                Some people hold tax fee protection cover through an accountant, union or professional body; check before paying for advice yourself.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The compliance check is answered by its deadline with full copies kept, and the outcome letter is filed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down exactly what the letter asks for and by when"
                - "Gather and copy only the documents requested"
                - "Decide whether to bring in an accountant before replying"
                - "Send the response with proof of postage or submission"
            - name: Pension carry-forward of unused allowance
              description: |-
                ## Purpose
                Some pension systems let you use unused annual allowance from earlier years, which matters after a large bonus, a business sale or a year of unusually high income. Calculating how much is available, and how much relief you could actually get at your income level, turns a one-off windfall year into a planned contribution rather than a missed chance.

                ## Milestones
                1. Pension input amounts for the last three or four years gathered from statements.
                2. Unused allowance for each year calculated.
                3. Relief available at your income level estimated, including any tapered allowance.
                4. A contribution decision recorded, and checked with a regulated adviser if large.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A carry-forward calculation covering every eligible earlier year, with a recorded decision on this year's contributions."
                cadence: cyclic
              tasks:
                - "Gather pension statements for the last four tax years"
                - "Calculate the unused allowance left in each year"
                - "Check whether a tapered allowance applies at your income"
                - "Update the carry-forward figures before each year end @recurring(yearly)"
            - name: Employee share scheme tax planning
              description: |-
                ## Purpose
                Share options, restricted stock units and tax-advantaged employee schemes are taxed at different points, at grant, vesting, exercise or sale, and partly as income and partly as gains. Mapping every award you hold to when and how it will be taxed shows the cash you will need for tax, and lets you time exercises around your other income.

                ## Milestones
                1. Every award listed with its type, grant date, vesting dates and quantity.
                2. The tax point and treatment of each award recorded from the plan documents.
                3. The expected tax at each upcoming tax point estimated.
                4. A timing plan for exercises written, with questions noted for an adviser.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A schedule of every share award showing its tax points and estimated tax, with a written timing plan for the next twelve months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Download the plan documents for each award you hold"
                - "List every award with its grant and vesting dates"
                - "Record when and how each award is taxed"
                - "Estimate the tax due at each upcoming vest or exercise"
            - name: Foreign income and double taxation relief
              description: |-
                ## Purpose
                Overseas interest, rent from a property abroad or pay for work done in another country may be taxed in both places. Treaties and credit rules usually stop you paying twice, but only if you report the income and claim the credit with proof of the tax paid abroad.

                ## Milestones
                1. Every source of foreign income listed with its country and amount.
                2. The tax already paid abroad on each source documented.
                3. The relevant treaty or credit rule identified for each source.
                4. Foreign income and credit claims entered on the return.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All foreign income reported on the return, with a credit claimed for every amount of foreign tax backed by documentary proof."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List each foreign income source with its country and amount"
                - "Collect certificates or statements showing tax paid abroad"
                - "Find the treaty or credit rule that applies to each source"
                - "Ask the agent to draft a summary table for the return from your notes"
            - name: Five-year effective tax rate review
              description: |-
                ## Purpose
                Looking at one year at a time hides the trends: thresholds frozen while pay rises, an allowance slowly lost, a relief claimed one year and forgotten the next. A table of income, total tax and effective rate across five years shows where your tax bill is heading and which of your changes actually worked.

                ## Milestones
                1. Total income and total tax for the last five years entered in one table.
                2. The effective rate for each year calculated.
                3. The reliefs claimed each year listed beside the figures.
                4. Two or three conclusions written for next year's planning.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A five-year table of income, tax and effective rate, with written conclusions carried into next year's planning."
                cadence: cyclic
              tasks:
                - "Gather your year-end tax figures for the last five years"
                - "Calculate the effective tax rate for each year"
                - "List the reliefs claimed in each year beside the totals"
                - "Add the latest year and update the conclusions @recurring(yearly)"
---

# Income Tax Optimisation

This area is for anyone paid through payroll who suspects they are paying the wrong amount, and for knowledge workers whose bonuses, benefits, share awards and side income make the tax picture harder to read. It starts with the foundations (a deadline calendar, an online tax account, an income map, a checked tax code and an inventory of allowances), then the monthly, quarterly and yearly routines that keep payslips and returns right, the knowledge of how codes, payroll and reliefs work, the claims and decisions that put money back, dated events such as a job change or a pay rise, situations from a second income to bereavement, and finally specialist work on share schemes, foreign income and long-run tax rates.

What repeats is a monthly payslip check, filing of tax papers and logging of work expenses, a quarterly year-to-date tax estimate and giving log, and a yearly cycle of coding notice review, pre year-end allowance review, return filing and tax payments. The Metrics log, Operational checklist, Vendor and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
