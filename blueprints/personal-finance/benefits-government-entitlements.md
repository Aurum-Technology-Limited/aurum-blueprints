---
id: personal-finance.benefits-government-entitlements
name: Benefits & Government Entitlements
description: "Every benefit, credit and grant the household may be owed, checked with independent calculators, claimed with evidence in order, paid correctly, kept up to date and challenged when a decision is wrong."
category: personal
version: 1.0.0
tags: [personal-finance, benefits-government-entitlements, everyone, carer, welfare-rights, means-tested-benefits, disability-benefits, appeals]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - remediation-plan
    - meeting-notes
    - operational-checklist
    - person
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Benefits & Government Entitlements
          description: "Checking eligibility for and claiming government benefits, credits and grants, and keeping claims up to date."
          projects:
            - name: Household circumstances sheet for benefit checks
              description: |-
                ## Purpose
                Every benefits calculator and claim form asks the same twenty or so questions: who lives with you, their ages, earnings, savings, rent or mortgage, local property tax, health conditions and caring hours. Gathering those answers once, from documents rather than memory, makes the first entitlement check a thirty-minute job and stops the guesses that later turn into overpayments.

                ## Milestones
                1. Every person in the household listed with age, relationship and any disability or long-term condition.
                2. Each adult's take-home pay and other income for the last three months written down from payslips and statements.
                3. Savings, investments and any property other than the home totalled for each person.
                4. Rent, mortgage, service charges and local property tax recorded at the amounts actually paid.
                5. Weekly caring hours noted for anyone looking after someone inside or outside the household.

                ## Notes
                Use exact figures from documents. Calculators and claim forms are only as accurate as the numbers you give them, and a figure you guessed is a figure you may later have to explain.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One sheet records household members, income, savings, housing costs and caring hours, every figure taken from a document dated within the last three months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List everyone who lives in the household with their ages and relationships"
                - "Copy take-home pay from the last three payslips for each adult"
                - "Total the savings and investments held by each person"
                - "Write down rent, mortgage, service charges and local property tax"
                - "Note weekly caring hours and any health conditions in the household"
            - name: Independent benefits calculator entitlement check
              description: |-
                ## Purpose
                Large sums in benefits go unclaimed every year, often by people who assume they earn too much, own their home or have a little saved. Running an independent online calculator with the facts from your circumstances sheet gives a reasoned estimate of what the household might be owed and which claims are worth making first.

                ## Milestones
                1. Two independent calculators run with the same figures and their results saved side by side.
                2. Each benefit, credit or grant flagged as possibly payable listed with its estimated amount.
                3. Any result that differs sharply between the two calculators written down as a question for an adviser.
                4. A ranked list of claims to make, the largest and most time-limited first.

                ## Notes
                Use calculators run by charities or the government, not commercial sites that ask for contact details first. A calculator gives an estimate; only the paying agency decides entitlement.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Results from two independent calculators are saved with the date run, alongside a ranked list of claims to make and their estimated amounts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find two free benefits calculators run by charities or the government"
                - "Run both calculators using the household circumstances sheet"
                - "Save or print each result with the date it was run"
                - "Rank the flagged benefits by amount and by how soon a claim must be made"
                - "Ask the agent to list the points where the two calculator results disagree"
            - name: Register of every benefit and credit received
              description: |-
                ## Purpose
                Households on several benefits can receive five or six separate payments from different agencies, each with its own reference number, payment day and review date. One register showing what arrives, from whom and when it next needs renewing is the first thing any adviser, helper or stand-in carer will ask for.

                ## Milestones
                1. Every benefit, credit and regular grant listed with claimant, paying agency and reference number.
                2. Amount, frequency and payment day recorded for each one.
                3. Contact number and online account noted for each claim.
                4. Next review or renewal date added to every row.
                5. The register kept with the evidence folder and its location known to one trusted person.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every benefit and credit in the household with reference, amount, payment day, contact route and next review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search three months of bank statements for every payment from a government body"
                - "Record the benefit name, claimant, reference number and amount for each"
                - "Add the payment day, frequency and next review date to each row"
                - "Note the phone number and online account used for each claim"
                - "Check every amount on the register against the latest award letters @recurring(yearly)"
            - name: Benefits evidence folder
              description: |-
                ## Purpose
                Claims stall far more often on missing evidence than on eligibility. A folder, on paper or on a secure drive, holding identity documents, proof of address, tenancy or mortgage papers, bank statements, payslips, medical letters and every award letter means a request for evidence can be answered within days, well inside the usual one-month limit.

                ## Milestones
                1. Identity and residence documents for every claimant copied into the folder.
                2. Housing papers, three months of bank statements and recent payslips filed.
                3. Recent letters from doctors, specialists and support workers gathered.
                4. Sections for identity, housing, income, health and award letters set up and labelled.
                5. Every benefits letter from the last year filed in date order.

                ## Notes
                Send copies, never originals unless specifically asked, and write on each copy what you sent, to whom and on what date.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A labelled folder holds identity, housing, income, health and award documents for every claimant, with the last year of benefits letters in date order."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather passports, birth certificates and residence documents for each claimant"
                - "Scan the latest tenancy agreement or mortgage statement into the folder"
                - "Ask your doctor or specialist for copies of recent letters about any condition"
                - "Create sections for identity, housing, income, health and award letters"
                - "File the month's benefits letters and statements in the folder @recurring(monthly:20)"
            - name: Secure online benefits account access
              description: |-
                ## Purpose
                Most claims are now run through an online account with a journal, statements and uploads, and losing access because of a changed phone number or forgotten password can mean missed messages and stopped payments. Setting up identity checks, two-step sign-in and recovery details properly, and knowing the phone route if an account locks, protects the income that arrives through it.

                ## Milestones
                1. Every online government account the household uses for benefits listed.
                2. Identity verified and two-step sign-in switched on for each account.
                3. Recovery phone numbers and email addresses confirmed as current.
                4. Sign-in details stored in a password manager, with the phone number for locked accounts written in the register.

                ## Notes
                Never share your password with a helper. Most agencies let you give explicit consent for a named person or adviser to discuss the claim instead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each benefits account has verified identity, current recovery details and stored credentials, and the locked-account phone route is in the register."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every online government account the household uses for benefits"
                - "Switch on two-step sign-in wherever the account offers it"
                - "Store each account's sign-in details in a password manager"
                - "Write down the phone number to call if an account locks"
                - "Sign in to each account and confirm the recovery details still work @recurring(quarterly)"
            - name: Savings and capital limits check before claiming
              description: |-
                ## Purpose
                Means-tested benefits usually have a capital limit, and savings between a lower and upper threshold often reduce payments through an assumed income rather than stopping them outright. Knowing how your savings, a second property, shares or money held for others are counted avoids two expensive mistakes: not claiming when you could, and claiming without declaring something that counts.

                ## Milestones
                1. The lower and upper capital limits for each benefit on your claim list written down from official guidance.
                2. Each person's capital listed by type with a current value.
                3. Items the guidance says are ignored, such as the home you live in, marked separately.
                4. A note of whether the household is below, between or above each threshold, with questions for an adviser.

                ## Notes
                What counts as capital differs by country and by benefit, and pension-age benefits often use different limits from working-age ones. Read the official guidance for each benefit you plan to claim.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note shows each benefit's capital limits, the household's countable capital by type, and where the household sits against each threshold."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the capital limits for each benefit on your claim list"
                - "List each person's savings, investments and other property with current values"
                - "Mark which items the official guidance says are disregarded"
                - "Work out whether countable savings fall below, between or above each threshold"
            - name: Shortlist of free welfare rights advice
              description: |-
                ## Purpose
                Independent welfare rights advisers win a large share of the challenges they take on, and their help costs nothing. Finding two or three services before you need them, such as a local advice charity, a disability or carers organisation and a national helpline, means a one-month deadline does not arrive while you are still looking for help.

                ## Milestones
                1. Three free services listed with contact details, opening hours and what each handles.
                2. At least one service that helps fill in forms and one that represents at appeals identified.
                3. First contact made with the most local service and any waiting times noted.
                4. Names and numbers saved at the top of the benefits register.

                ## Notes
                Avoid companies that offer to make claims or appeals for a fee or a share of any arrears. The same help is available free from advice charities.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three free advice services, including one that represents at appeals, are saved in the register with contact details and opening hours."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search for a local advice charity that offers welfare rights help"
                - "Find a carers or disability organisation with a benefits helpline"
                - "Ask each service whether it helps with forms, reconsiderations and appeals"
                - "Save names, numbers and opening hours at the top of the benefits register"
            - name: Making a first means-tested benefit claim
              description: |-
                ## Purpose
                For many means-tested benefits, entitlement runs from the day the claim is made rather than the day you became eligible, so every week of hesitation can be money lost. Making the claim promptly, with evidence ready and any identity appointment booked, fixes the start date and gets the first payment flowing.

                ## Milestones
                1. The claim started, with the claim date and reference written in the register.
                2. Identity verified online or at an appointment.
                3. Every piece of evidence requested supplied before its deadline.
                4. Any advance or interim payment considered and the repayment terms understood before accepting.
                5. The first payment received and checked against the award letter.

                ## Notes
                If you cannot finish a long online form in one sitting, ask how the claim date is fixed. In some systems starting the form or phoning the claim line is enough to protect it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A claim has been made with its date and reference recorded, all requested evidence supplied on time, and the first payment checked against the award."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agency how the start date of your claim is fixed"
                - "Start the online claim or phone the claim line"
                - "Book the identity or interview appointment the claim asks for"
                - "Upload or post the evidence on the claim's to-do list"
                - "Record the claim date and reference number in the benefits register"
            - name: Assessment period and payment date map
              description: |-
                ## Purpose
                Benefits paid monthly in arrears are usually worked out from what happened during a fixed assessment period, so a payslip landing a day early can make one month's payment drop and the next jump. Mapping the assessment periods, the payment day and every household payday shows in advance which months will look odd, so the budget is not caught out.

                ## Milestones
                1. Assessment period start and end dates written down for the next twelve months.
                2. Each earner's paydays plotted against those periods.
                3. Months containing two paydays, or none, flagged.
                4. An estimated payment written beside each flagged month.

                ## Notes
                People paid every four weeks will have one month a year with two paydays. Plan for the lower payment that follows rather than assuming it is a mistake.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A twelve-month map shows assessment periods, paydays, flagged months and an estimated payment for each flagged month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your assessment period dates on your latest payment statement"
                - "Mark each household payday against those dates for the next twelve months"
                - "Flag the months that contain two paydays or none"
                - "Estimate the payment you expect after each flagged month"
            - name: Monthly change of circumstances check
              description: |-
                ## Purpose
                Most overpayments begin with a change nobody reported: a partner moving in, a pay rise, a child leaving school, savings creeping past a limit or a stay in hospital. A short monthly run through a list of reportable changes catches them while they are small, and prompt reporting is usually what protects you if a mistake is found later.

                ## Milestones
                1. Each paying agency's list of reportable changes found and saved.
                2. A one-page checklist of the changes that apply to your household.
                3. The checklist run every month for six months in a row.
                4. Every reported change logged with date, method and the reference given.

                ## Notes
                Report the change to every agency that pays you. Telling one department does not always mean the others are told.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six consecutive months the change checklist has been run and every change reported within a month, with dates and references logged."
                cadence: rolling
              tasks:
                - "Find each agency's published list of changes you must report"
                - "Write a one-page checklist of the changes that apply to your household"
                - "Run the change checklist and report anything new @recurring(monthly:5)"
                - "Log each reported change with the date, method and reference given"
            - name: Monthly payment statement check
              description: |-
                ## Purpose
                Payments can shift without warning when a deduction starts, an element drops off or earnings are misread from payroll data. Comparing each statement with what you expected, line by line, finds an error in the month it happens, while it is still quick to put right.

                ## Milestones
                1. A log with columns for expected amount, actual amount, difference and action.
                2. Every element and deduction on the current statement understood.
                3. Each month's statement saved to the evidence folder.
                4. Any unexplained difference queried in writing within a week and the answer recorded.

                ## Notes
                Start from the **Metrics log** template. Save each statement as a file or screenshot, because some online statements are only shown for a limited time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of statements are logged against expected amounts, and every difference has a written query and a recorded answer."
                cadence: rolling
              tasks:
                - "Create a log with columns for expected amount, actual amount and difference"
                - "Compare this month's statement with the amount you expected @recurring(monthly:12)"
                - "Save a copy of each statement to the evidence folder"
                - "Write to the agency within a week about any difference you cannot explain"
            - name: Twice-weekly online claim journal check
              description: |-
                ## Purpose
                Online claims often run through a journal or message inbox where appointment changes, evidence requests and to-dos appear with no letter at all. Missing one can lead to a reduced payment or a closed claim, so two short checks a week keep every request answered well inside its deadline.

                ## Milestones
                1. Email or text alerts switched on for new journal messages.
                2. The journal and to-do list read twice a week for a full month.
                3. Every deadline from the journal copied into your calendar.
                4. Important messages saved before they scroll out of view.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months, every journal message and to-do has been answered before its deadline, with no missed appointments."
                cadence: rolling
              tasks:
                - "Switch on email or text alerts for new journal messages"
                - "Read the journal and to-do list and reply to anything outstanding @recurring(weekly:mon,thu)"
                - "Copy every deadline from the journal into your calendar"
                - "Save a screenshot of any message that sets a deadline or changes the claim"
            - name: Claim correspondence and call log
              description: |-
                ## Purpose
                When a claim goes wrong, the person with a dated record of who said what is usually believed. A plain log of every call, letter, upload and visit, with names, times and what was agreed, turns a vague grievance into evidence that a reconsideration, complaint or appeal can rely on.

                ## Milestones
                1. A log with date, time, contact method, person, reference and outcome columns.
                2. Every contact since the claim began entered, as far as records allow.
                3. A written summary sent after each phone call that changed the claim.
                4. Copies of the letters the log refers to filed beside it.

                ## Notes
                Ask for the name or staff number of each person you speak to and the call reference. A follow-up message confirming what was said is worth more than any memory of the call.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log holds every call, letter and upload for the claim with names and references, and each claim-changing call has a written follow-up."
                cadence: rolling
              tasks:
                - "Set up a log with date, time, contact method, person and outcome columns"
                - "Add every call, letter and upload to the log on the day it happens"
                - "Send a written summary after any phone call that changes your claim"
                - "Tidy the log and file the letters it refers to @recurring(monthly:26)"
            - name: Review and reassessment date tracker
              description: |-
                ## Purpose
                Awards for disability, housing support and some credits end or come up for review on fixed dates, and the renewal form can arrive with only a few weeks to reply. Tracking each date, and starting fresh evidence three months ahead, avoids a gap in payments and a rushed form filled in from memory.

                ## Milestones
                1. Every award end date and review date taken from the award letters.
                2. Reminders set three months and one month before each date.
                3. An evidence plan written for each upcoming review.
                4. Each review form returned before its deadline, with the date sent recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All award end and review dates are tracked with reminders, and every review form in the year was returned before its deadline."
                cadence: rolling
              tasks:
                - "List every award end date and review date from your award letters"
                - "Set reminders three months and one month before each date"
                - "Check the tracker for anything due in the next ninety days @recurring(monthly:2)"
                - "Start collecting updated evidence when a review is three months away"
            - name: Monthly earnings report for working claimants
              description: |-
                ## Purpose
                Claimants in work have their payments recalculated from earnings each month, from payroll data for employees and from a self-reported figure for the self-employed. A monthly habit of checking the figure used against payslips or business records catches late payroll reports, double counting and missed returns before they cut a payment.

                ## Milestones
                1. The place on the statement that shows the earnings figure used found.
                2. Each month's figure compared with payslips or business records.
                3. Self-employed income and expenses reported before each period's deadline.
                4. Any wrong earnings figure challenged in writing and the correction recorded.

                ## Notes
                Self-employed claimants usually report money actually received and expenses actually paid in the period, not invoices sent. Check the rule for your benefit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six months, the earnings figure on each statement has matched payslips or business records, or been challenged in writing."
                cadence: rolling
              tasks:
                - "Find where your statement shows the earnings figure it used"
                - "Compare the earnings figure with your payslips or business records @recurring(monthly:24)"
                - "Report self-employed income and expenses before the period's deadline"
                - "Challenge any earnings figure that does not match your records"
            - name: Daily living diary for disability claims
              description: |-
                ## Purpose
                Disability benefit decisions rest on how a condition affects ordinary tasks reliably, safely and repeatedly, yet most people describe their better days when asked on the spot. A weekly diary of difficulties, falls, near misses and help needed gives concrete examples for forms, assessments and reviews, and shows how much the condition varies over months.

                ## Milestones
                1. A diary format chosen that the claimant or carer will actually keep.
                2. The daily activities the benefit's assessment asks about listed at the front.
                3. Twelve weeks of entries recorded, including bad days.
                4. A one-page summary of examples grouped by activity.

                ## Notes
                Write what happened, how long it took and who helped. A carer can keep the diary when the claimant cannot.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of diary entries exist, summarised on one page of examples grouped by the activities the assessment uses."
                cadence: rolling
              tasks:
                - "Choose a notebook or document for the diary"
                - "List the daily activities the benefit's assessment asks about"
                - "Write the week's difficulties, falls, help received and bad days @recurring(weekly:sun)"
                - "Summarise the diary into one page of examples before any form or assessment"
            - name: Annual uprating and renewal pack check
              description: |-
                ## Purpose
                Benefit rates usually change once a year, and some credits and discounts must be renewed with a fresh declaration or they simply stop. A yearly check of the new rates letter, any renewal pack and the first payment that follows confirms each claim carried over correctly into the new year.

                ## Milestones
                1. The date your benefits are uprated each year written in the tracker.
                2. A new rates letter received for every claim.
                3. Every renewal declaration returned before its printed deadline.
                4. The first payment at the new rate checked and the register updated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "After this year's uprating, every claim has a new rates letter, every renewal was returned on time, and the register shows the new amounts."
                cadence: cyclic
              tasks:
                - "Find out when your benefits are uprated each year"
                - "Return any renewal declaration before the date printed on it"
                - "Check the first payment after uprating matches the new rate @recurring(yearly)"
                - "Update the amounts in the benefits register"
            - name: Yearly whole-household entitlement re-check
              description: |-
                ## Purpose
                Entitlement shifts as children grow, health changes, earnings fall or someone reaches pension age, so a claim that was impossible two years ago may be worth making now. Re-running a calculator once a year with fresh figures is the cheapest way to find money the household has become entitled to since the last look.

                ## Milestones
                1. The household circumstances sheet updated with this year's figures.
                2. A calculator re-run and the result saved with the date.
                3. The result compared with what the household currently receives.
                4. A claim made for anything new that the check flags.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each year a dated calculator result is compared with current awards, and any newly flagged benefit has a claim made or a recorded reason for not claiming."
                cadence: cyclic
              tasks:
                - "Update the household circumstances sheet with this year's figures"
                - "Re-run an independent benefits calculator @recurring(yearly)"
                - "Compare the result with what the household currently receives"
                - "Make a claim for anything new the calculator flags"
            - name: Means-tested versus contribution-based benefits primer
              description: |-
                ## Purpose
                Two benefits for the same situation can follow completely different rules: one depends on household income and savings, the other on your own contribution record and ignores a partner's earnings. Knowing which type each of your benefits is explains why a partner's new job stops one payment but not another, and which claims can run side by side.

                ## Milestones
                1. Each benefit in the register labelled as means-tested, contribution-based or neither.
                2. The benefits that count as income for other benefits noted.
                3. The rules on claiming two overlapping benefits at once understood.
                4. A short note of what would change if a partner started or stopped work.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every benefit in the register is labelled by type, with a written note of how a partner's work would affect each."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the official overview of each benefit type in your country"
                - "Label each claim in the register by type"
                - "Note which benefits count as income for other benefits"
                - "Write a short note of what would change if a partner started work"
            - name: How the earnings taper changes your payment
              description: |-
                ## Purpose
                Many in-work benefits fall by a fixed share of each extra unit earned once earnings pass an allowance, so a pay rise is worth less than it looks on the payslip. Working through the taper with your own numbers shows what an extra shift, a bonus or a higher pension contribution really does to the household's final income.

                ## Milestones
                1. The current taper rate and any work allowance found from official guidance.
                2. Last month's payment recalculated from earnings to confirm the method.
                3. Three scenarios worked out: an extra weekly shift, a one-off bonus and a raised pension contribution.
                4. The results kept in a simple table for the next pay negotiation.

                ## Notes
                In some systems pension contributions are deducted before the taper applies, which can make workplace pension saving cheaper than usual. Confirm with an adviser before relying on it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table shows the household's net gain from three earnings scenarios after the taper, checked against one real month's payment."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the current taper rate and any work allowance for your benefit"
                - "Recalculate last month's payment from your earnings to test the method"
                - "Work out the effect of an extra weekly shift and of a one-off bonus"
                - "Ask the agent to lay the three scenarios out in a simple table"
            - name: Reading an award letter line by line
              description: |-
                ## Purpose
                Award letters list elements, rates, deductions and the facts the decision was based on, and errors hide in that last part: the wrong number of children, a rent figure from last year, misread earnings or a missing disability element. Learning to read one properly means a wrong fact is spotted the day the letter arrives, while there is still time to ask for it to be looked at again.

                ## Milestones
                1. Each section of the latest award letter understood, including how the total is built up.
                2. Every fact the decision relied on checked against your own records.
                3. Any element you expected but cannot see listed.
                4. The decision date and the deadline to challenge it written on the letter.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The latest award letter has been checked fact by fact against your records, with missing elements listed and the challenge deadline written on it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Lay your latest award letter beside the household circumstances sheet"
                - "Check every fact the decision relied on against your records"
                - "List any element you expected that is missing"
                - "Write the decision date and challenge deadline on the letter"
            - name: How housing support is worked out
              description: |-
                ## Purpose
                Help with rent is often capped by a local rent limit, a size rule that decides how many bedrooms you need and deductions for other adults living with you. Understanding those three things explains the gap between your rent and the help paid, and shows whether an extra bedroom allowance, a discretionary top-up or a different tenancy would close it.

                ## Milestones
                1. The published rent limit for your area and household size found.
                2. The number of bedrooms the rules allow for your household worked out.
                3. Any deduction for other adults living with you identified.
                4. The monthly shortfall between rent and housing support calculated.
                5. Exceptions such as a room for an overnight carer or a disabled child checked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written calculation shows the rent limit, bedroom entitlement, any adult deductions and the monthly shortfall, with exceptions checked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Look up the published rent limit for your area and household size"
                - "Work out the bedrooms the rules allow for your household"
                - "Check whether any adult living with you triggers a deduction"
                - "Ask about extra bedroom allowances for an overnight carer or a disabled child"
            - name: Claimant commitment and sanction rules explained
              description: |-
                ## Purpose
                Work-related benefits come with an agreement setting job search hours, appointments and activities, and breaking it without good reason can reduce payments for weeks. Knowing exactly what you signed, what counts as good reason and how to ask for changes when health or caring limits what you can do keeps the claim safe.

                ## Milestones
                1. A copy of the current commitment saved in the evidence folder.
                2. The required hours, appointments and activities understood.
                3. Examples of what counts as good reason for missing something noted.
                4. Changes requested in writing if health or caring limits are not reflected.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved copy of the commitment is annotated with its requirements and good-reason examples, and any needed changes have been requested in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save a copy of your current commitment or agreement"
                - "Highlight the hours, appointments and activities it requires"
                - "Ask in writing for changes if caring or health limits what you can do"
                - "Reread the commitment and check it still fits your life @recurring(quarterly)"
            - name: Writing disability claim answers about your worst days
              description: |-
                ## Purpose
                Disability forms score how reliably you can do each activity, and a short answer such as 'I manage' can cost points that later have to be won back on appeal. Learning how the activities and descriptors are worded, then answering each question with examples, frequency and the help you need, produces a form that reflects real life rather than a good afternoon.

                ## Milestones
                1. The published activities and descriptors for the benefit read and understood.
                2. Examples from the daily living diary matched to each activity.
                3. A draft answer for every question saying how often, how long and with what help.
                4. The draft read by an adviser or carer and a copy kept before sending.

                ## Notes
                Describe a typical week, not your best day, and say if you can do something only with pain, slowly, unsafely or with someone there. Keep a copy of every page you send.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A completed draft answers every activity with frequency, duration and help needed, has been reviewed by an adviser or carer, and a copy is filed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the published list of activities and descriptors for the benefit"
                - "Match examples from your daily living diary to each activity"
                - "Draft each answer saying how often, how long and what help you need"
                - "Ask an adviser or carer to read the draft before you send it"
                - "Scan the completed form before posting it"
            - name: Passported entitlements sweep after an award
              description: |-
                ## Purpose
                An award of one benefit often opens the door to others: free school meals, health cost exemptions, social tariffs for broadband and water, travel concessions, local tax reductions and one-off grants. Checking the list each time an award arrives picks up help that is rarely offered automatically and can be worth hundreds a year.

                ## Milestones
                1. A list of the help linked to each benefit the household receives.
                2. An application made for every discount or exemption the household qualifies for.
                3. The yearly value of each one written in the register.
                4. A note in the review tracker to repeat the sweep after the next award.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every passported discount linked to the household's current awards has been applied for or ruled out, with yearly values in the register."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the help your council and utilities link to each benefit you receive"
                - "Apply for each discount or exemption the household qualifies for"
                - "Write the yearly saving from each one in the register"
                - "Re-check passported help against your current awards @recurring(yearly)"
            - name: Better-off calculation before more hours or a new job
              description: |-
                ## Purpose
                Taking a job offer or extra hours can lose part of the gain to the earnings taper, travel, care costs and passported help that stops, and occasionally leaves a household worse off for a few months. A better-off calculation before you accept shows the real weekly difference and which support carries on, so the decision rests on figures rather than hope.

                ## Milestones
                1. Gross pay, hours and start date of the offer confirmed in writing.
                2. A better-off calculation run with an adviser or an official calculator.
                3. Passported help that would stop listed with its yearly value.
                4. The net weekly difference and your decision recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written better-off calculation shows the net weekly difference of the offer after benefits and lost help, with the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Get the gross pay, hours and start date of the offer in writing"
                - "Run a better-off calculation with an adviser or official calculator"
                - "List passported help that would stop and its yearly value"
                - "Record the net weekly difference and your decision"
            - name: Backdating request for missed entitlement
              description: |-
                ## Purpose
                If you could have claimed earlier, some benefits can be paid back for a limited period, from a few weeks to a few months, often only when you ask in time or had good reason for the delay. Asking promptly, with your reasons set out in writing, can recover payments that would otherwise be lost for good.

                ## Milestones
                1. The backdating limit and conditions for the benefit found.
                2. Your reasons for not claiming sooner written down with dates.
                3. A written request sent with supporting letters.
                4. The decision and any arrears recorded in the register.

                ## Notes
                Rules vary widely: some benefits backdate on request, some only with good cause and some never before the claim date. Claim first, then ask about backdating.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written backdating request with reasons and evidence has been sent, and the decision and any arrears are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the backdating limit for the benefit you claimed late"
                - "Write down why you did not claim sooner, with dates"
                - "Send the backdating request in writing with any supporting letters"
                - "Record the decision and any arrears paid in the register"
            - name: Mandatory reconsideration of a benefit decision
              description: |-
                ## Purpose
                Benefit decisions are wrong often enough that challenging them is routine, and in many systems you must ask the agency to look again before any independent appeal, usually within one month of the decision. A clear request pointing at each wrong fact, with the evidence that corrects it, gives the best chance of a change without a hearing.

                ## Milestones
                1. The deadline for asking the agency to look again confirmed.
                2. A copy of the assessment report and the evidence the decision used obtained.
                3. A request written that takes each disputed point in turn with supporting evidence.
                4. The request sent by a method that gives proof of delivery.
                5. The reconsideration notice received and filed.

                ## Notes
                Ask for the evidence behind the decision as soon as it arrives. If the deadline is close, send a short request on time and follow it with the detail.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A point-by-point reconsideration request was sent inside the deadline with proof of delivery, and the outcome notice is filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the deadline for asking the agency to look at the decision again"
                - "Request a copy of the assessment report and evidence the decision used"
                - "Write a request that lists each wrong fact and the evidence correcting it"
                - "Send the request by a method that gives proof of delivery"
                - "File the reconsideration notice when it arrives"
            - name: Independent tribunal appeal submission
              description: |-
                ## Purpose
                If a reconsideration leaves the decision unchanged, an independent tribunal can overturn it, and appeals backed by fresh evidence and a clear written submission succeed far more often than people expect. Building the submission around the points you scored too low, with dated evidence for each, keeps the hearing on facts rather than impressions.

                ## Milestones
                1. The appeal lodged with the tribunal service before the deadline.
                2. The agency's response bundle received and every disputed point marked.
                3. New evidence obtained for each disputed point.
                4. A short written submission linking each point to its evidence sent by the tribunal's date.
                5. A representative or supporter arranged for the hearing.

                ## Notes
                Read the agency's response bundle with an adviser before deciding anything. It is written to defend the decision and can make a strong case look weak.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The appeal was lodged on time and a written submission linking each disputed point to evidence reached the tribunal by its deadline."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Lodge the appeal form with the tribunal service before the deadline"
                - "Read the agency's response bundle and mark every point you dispute"
                - "Ask your doctor or support worker for a letter on the disputed points"
                - "Write a short submission linking each disputed point to its evidence"
                - "Send the submission and evidence by the date the tribunal sets"
            - name: Overpayment notice response and repayment plan
              description: |-
                ## Purpose
                An overpayment letter can demand thousands, yet the figure is sometimes wrong, sometimes not recoverable at all and almost always negotiable on the repayment rate. Checking how it arose, challenging it where it came from official error or miscalculation, and agreeing an affordable rate stops deductions that leave too little to live on.

                ## Milestones
                1. A breakdown of the overpayment by period, amount and cause obtained.
                2. A view formed, with an adviser, on whether it was your error, an official error or a miscalculation.
                3. The decision challenged in writing if the cause or figures are wrong.
                4. An affordable repayment rate agreed in writing, based on an income and spending statement.
                5. Deductions on later statements checked against the agreed rate.

                ## Notes
                Start from the **Remediation plan** template. Never ignore the letter: recovery usually starts automatically from ongoing payments.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The overpayment has been checked and either challenged in writing or repaid at a rate agreed in writing, with later deductions matching it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask for a breakdown of the overpayment by period and cause"
                - "Check with an adviser whether it was your error or an official error"
                - "Challenge the decision in writing if the figures or the cause are wrong"
                - "Offer a repayment rate based on a written income and spending statement"
            - name: Complaint about benefit delays or poor service
              description: |-
                ## Purpose
                Lost evidence, unanswered calls and claims stuck for months are service failures, separate from whether the decision itself was right. A formal complaint, escalated to an independent examiner or ombudsman if needed, can move a stuck claim and sometimes brings a payment for the costs and distress the delay caused.

                ## Milestones
                1. The agency's complaints procedure and its stages found.
                2. A first complaint sent with a dated timeline from the call log.
                3. The outcome you want, including any costs caused, stated clearly.
                4. The final response received and escalated to the independent examiner if unresolved.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complaint with a dated timeline and a stated remedy has been through the agency's procedure, and escalated if the final response did not resolve it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the agency's complaints procedure and its stages"
                - "Draft a complaint with a dated timeline taken from your call log"
                - "State the outcome you want, including any costs the delay caused"
                - "Escalate to the independent examiner if the final response does not resolve it"
            - name: Moving from legacy benefits with transitional protection
              description: |-
                ## Purpose
                Where a government replaces older benefits with a single new one, people move across either by choice or after a migration notice with a deadline. Moving by choice can lose a protection that a managed move keeps, so a comparison before acting, and a prompt claim once notified, protects the household's income.

                ## Milestones
                1. Whether a migration notice has arrived confirmed, with its deadline.
                2. Current income compared with an estimate under the new benefit.
                3. Advice taken on whether to wait for a managed move.
                4. The new claim made before any deadline and the protected amount shown on the statement.

                ## Notes
                Get advice before claiming the new benefit voluntarily. In most systems you cannot return to the old benefits once you do.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of old and new benefit income exists, the move decision is recorded, and any notice deadline was met."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check whether you have received a notice to move to the new benefit"
                - "Compare your current income with an estimate under the new benefit"
                - "Ask an adviser whether waiting for a managed move protects you"
                - "Make the new claim before the deadline printed on any notice"
            - name: Functional health assessment preparation
              description: |-
                ## Purpose
                A health or functional assessment, by phone, video or in person, often decides a disability or sickness claim, and the assessor's report carries great weight with the decision maker. Asking for adjustments, bringing a companion and requesting a recording where allowed make the report more likely to match what you actually said.

                ## Milestones
                1. The appointment confirmed, with any adjustments such as a home visit or phone assessment requested.
                2. An audio recording requested in writing ahead of time, where the agency allows it.
                3. A companion arranged who can take notes and add detail.
                4. Notes of what was asked and answered written the same day.

                ## Notes
                Take the one-page diary summary with you. If you need to cancel, ring before the appointment and say why in writing, because a missed assessment can end the claim.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The assessment was attended with a companion and agreed adjustments, and same-day notes of the questions and answers are filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask for reasonable adjustments such as a home visit or phone assessment"
                - "Request an audio recording of the assessment in writing ahead of time"
                - "Arrange a companion who can take notes and add detail"
                - "Write down what was asked and what you said on the same day"
            - name: First work coach appointment preparation
              description: |-
                ## Purpose
                The first appointment after a work-related claim usually sets the claimant commitment, which then governs everything asked of you. Arriving with caring hours, health limits, childcare constraints and realistic job goals written down helps make sure the agreement fits your actual life.

                ## Milestones
                1. Caring, health and childcare limits on your availability written on one page.
                2. The jobs and hours you can realistically do noted.
                3. Every document listed in the invitation gathered.
                4. What was agreed recorded in notes on the day.

                ## Notes
                Start from the **Meeting notes** template. If something agreed does not match your limits, ask for it to be changed before you sign.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The appointment was attended with a written list of limits, and notes of the agreed commitment were saved the same day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a list of caring, health and childcare limits on your availability"
                - "Note the jobs and weekly hours you can realistically do"
                - "Bring the documents listed in the appointment invitation"
                - "Record what was agreed in meeting notes the same day"
            - name: Compliance interview or review visit preparation
              description: |-
                ## Purpose
                Agencies run review interviews and compliance checks to confirm circumstances, and an invitation can be alarming even when nothing is wrong. Gathering the evidence they ask for, rereading what you declared and knowing what kind of interview it is keeps a routine check routine.

                ## Milestones
                1. The type of interview confirmed from the invitation.
                2. Your original declarations and reported changes reread.
                3. The evidence the invitation asks for gathered in one envelope or folder.
                4. An adviser or solicitor contacted first if the interview is under caution.

                ## Notes
                An interview under caution is a different matter from a routine review. Get legal advice before attending one.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The interview was attended with the requested evidence, after rereading your declarations and taking advice if it was under caution."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the invitation to see what kind of interview it is"
                - "Reread what you declared on the claim and any changes reported"
                - "Gather the evidence the invitation asks for"
                - "Contact an adviser or solicitor first if the interview is under caution"
            - name: Tribunal hearing day
              description: |-
                ## Purpose
                Tribunal hearings are less formal than most people expect, often a judge with a doctor or disability specialist asking about daily life for under an hour. Knowing the format, arriving with time to spare and having the bundle, submission and diary summary at hand lets you answer clearly on the day.

                ## Milestones
                1. Format, time and venue or dial-in details confirmed.
                2. Care cover, childcare and travel arranged so you arrive early.
                3. Bundle, submission and diary summary together in one folder.
                4. Representative or companion confirmed.
                5. The decision notice received and filed, with written reasons requested if the appeal fails.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The hearing was attended with the full bundle and a companion or representative, and the decision notice is filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm whether the hearing is in person, by phone or by video"
                - "Arrange care cover and travel so you arrive early"
                - "Put the bundle, submission and diary summary in one folder"
                - "Ask for the written reasons if the appeal is not allowed"
            - name: Moving home with an active benefit claim
              description: |-
                ## Purpose
                Moving house changes housing costs, local property tax, sometimes the council handling part of your support and sometimes the local rent limit, and help with rent can stop or be overpaid if the dates are wrong. Reporting the move date, new rent and new tenancy on time keeps housing support and local discounts flowing.

                ## Milestones
                1. The new tenancy and rent figures held in writing.
                2. The move date and new housing costs reported to every paying agency.
                3. Local tax discounts applied for with the new council.
                4. The first payment after the move checked against the new rent.

                ## Notes
                Start from the **Operational checklist** template so the same steps are ready for any future move.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every paying agency has the move date and new housing costs, and the first payment after the move reflects the new rent."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get the new tenancy agreement and rent figures in writing"
                - "Report the move date and new housing costs to each agency"
                - "Apply for local tax discounts with the new council"
                - "Check the first payment after the move uses the new rent"
            - name: Carer benefit claim for an unpaid carer
              description: |-
                ## Purpose
                Unpaid carers who care for a set minimum number of hours a week, often around 35, for someone receiving a qualifying disability benefit may be entitled to a carer's benefit. Earnings limits and the effect on the cared-for person's own benefits need checking first, so the carer gets paid without reducing income elsewhere in either household.

                ## Milestones
                1. Weekly caring hours written down with a typical week's tasks.
                2. The cared-for person's qualifying disability benefit confirmed.
                3. Advice taken on how the claim affects the cared-for person's benefits.
                4. The carer claim submitted and the award recorded in the register.
                5. Earnings checked monthly against the carer earnings limit.

                ## Notes
                In some systems a carer's claim can remove an extra payment from the person being cared for. Ask an adviser to check both households before claiming.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A carer claim has been made after checking its effect on the cared-for person, and monthly earnings stay under the limit."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down weekly caring hours with a typical week's tasks"
                - "Confirm the person you care for receives a qualifying disability benefit"
                - "Ask an adviser how the claim affects the cared-for person's benefits"
                - "Submit the carer claim with both people's details"
                - "Check your earnings stay under the carer earnings limit @recurring(monthly:8)"
            - name: Protecting your pension record while caring
              description: |-
                ## Purpose
                Years spent caring instead of working can leave gaps in the contribution record that decides a future state pension. Credits are often available for carers, sometimes automatically and sometimes only on application, and checking the record now avoids discovering gaps at retirement when they are harder or costlier to fill.

                ## Milestones
                1. Your contribution or pension record viewed through the government account.
                2. Years spent caring and any gaps marked.
                3. Carer credits applied for in any year they were not given automatically.
                4. Questions about filling remaining gaps written down for an adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The contribution record has been checked, caring years marked, and credits applied for in every eligible year without them."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Download your contribution or pension record from the government account"
                - "Mark the years spent caring and any gaps"
                - "Apply for carer credits for any year they were not given automatically"
                - "Check this year's credits appear on your record @recurring(yearly)"
            - name: Becoming an appointee for someone you care for
              description: |-
                ## Purpose
                When an adult cannot manage their own claims because of dementia, a learning disability or serious illness, an appointee can be authorised to claim, report changes and receive payments for them. Taking the role formally protects both of you, and it brings a duty to keep their money separate and accounted for.

                ## Milestones
                1. An appointee application made to each paying agency and any visit completed.
                2. Written confirmation of the appointment from each agency filed.
                3. Payments going into an account in the person's own name.
                4. A monthly record kept of what their money is spent on.
                5. Changes in their circumstances reported as promptly as your own.

                ## Notes
                Start from the **Person** template to keep their details, claims and contacts together. Appointeeship covers benefits only; savings or property may need a separate legal power, so ask a solicitor or advice service.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "You hold written confirmation as appointee from each paying agency, payments reach the person's own account, and monthly spending records exist."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask each agency paying the person how to apply to act as appointee"
                - "Open or confirm a bank account in the person's own name for their benefits"
                - "Record what the person's money was spent on this month @recurring(monthly:15)"
                - "Report changes in their circumstances as you would your own"
            - name: Disability benefit claim for a child you care for
              description: |-
                ## Purpose
                Children who need noticeably more care or supervision than others of the same age may qualify for disability benefits, and an award can open carer support for the parent too. The form asks how your child's needs differ from a typical child of their age, so evidence from school, therapists and a care diary carries the claim.

                ## Milestones
                1. The claim pack requested and the claim date recorded.
                2. Letters from school, therapists or the child's doctor gathered.
                3. Each answer written comparing your child's needs with a typical child the same age.
                4. Carer support for the parent claimed once the child's award is confirmed.

                ## Notes
                Include night-time needs and supervision, which parents often leave out because they have become normal routine.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A child disability claim with school and therapist evidence has been sent, and carer support claimed once an award is made."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Request the claim pack for a child disability benefit"
                - "Ask school and therapists for letters about your child's needs"
                - "Describe each need compared with a typical child of the same age"
                - "Claim carer support for yourself once the child's award is confirmed"
            - name: Child benefit and staying-in-education notices
              description: |-
                ## Purpose
                Family payments for children usually stop at a set age unless the agency is told the young person is staying in approved education or training, and the notice often has a summer deadline. Claiming promptly after a birth, and confirming each older teenager's plans every year, keeps payments from stopping and the claim in the right parent's name.

                ## Milestones
                1. A claim in place for every eligible child.
                2. The claim held in the name of a parent who is not earning, where that protects their contribution record.
                3. Each older child's education or training plans confirmed to the agency by the deadline.
                4. Any child leaving education, starting work or leaving home reported.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every eligible child has a claim, and each older child's education status was confirmed before this year's deadline."
                cadence: cyclic
              tasks:
                - "Check the household has claimed child benefit for every eligible child"
                - "Ask whether the claim should be in a non-earning parent's name"
                - "Confirm each older child's education plans by the summer deadline @recurring(yearly)"
                - "Report when a child leaves education, starts work or moves out"
            - name: Pension-age entitlement check
              description: |-
                ## Purpose
                Pension-age benefits are among the least claimed, often by people with small private pensions or modest savings who assume they would not qualify. A check when you or a partner reach pension age, and again after a bereavement or a drop in savings, can find a top-up worth thousands a year that also opens help with housing, local tax and health costs.

                ## Milestones
                1. The date you and any partner reach state pension age written down.
                2. A pension-age calculator run with pensions, savings and housing costs.
                3. A claim made for any top-up flagged, asking about backdating.
                4. Other help the award opens identified and applied for.

                ## Notes
                Pension-age benefits often treat savings and earnings differently from working-age ones, so earlier refusals are no guide.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated pension-age calculator result is saved, and any flagged top-up has a claim made or a written reason for not claiming."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the date you or your partner reach state pension age"
                - "Run a pension-age benefits calculator with your pensions and savings"
                - "Claim any top-up flagged and ask how far it can be backdated"
                - "Check what other help the award opens, such as housing support"
            - name: Benefits after a partner dies
              description: |-
                ## Purpose
                When a partner dies, almost every claim in the household changes: some payments stop, joint claims become single ones, and bereavement payments may only be available if claimed within a few months. Working through the claims steadily, ideally with a friend or adviser, prevents overpayments on the partner's benefits and starts any new entitlement on time.

                ## Milestones
                1. The death reported to every agency, through a single notification service where one exists.
                2. Bereavement payments and their claim time limits checked.
                3. Every remaining claim changed to single-person status.
                4. The household's entitlement re-checked as it now is.

                ## Notes
                Many countries offer one service that tells several government departments at once. Use it, then confirm with each paying agency separately.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every agency has been told of the death, bereavement payments have been claimed or ruled out, and remaining claims show single status."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Use the government's single death notification service if one exists"
                - "Ask about bereavement payments and their claim time limits"
                - "Report the change to single-person status on every remaining claim"
                - "Re-run a benefits calculator for the household as it is now"
            - name: Long-term sickness from sick pay to sickness benefit
              description: |-
                ## Purpose
                Employer or statutory sick pay runs out after a set period, and the sickness benefit that follows often needs claiming before the last payslip if there is to be no gap. Planning the handover, with medical certificates kept current and the assessment process understood, keeps money coming in while you recover.

                ## Milestones
                1. The date sick pay ends confirmed with your employer.
                2. The sickness benefit claim started before that date.
                3. Medical certificates kept current with no gaps.
                4. The health questionnaire completed using diary examples and returned on time.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The sickness benefit claim started before sick pay ended, medical certificates have no gaps, and the questionnaire was returned on time."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your employer when your sick pay will end"
                - "Start the sickness benefit claim before the last sick pay date"
                - "Send each new medical certificate before the previous one expires"
                - "Fill in the health questionnaire using examples from your diary"
            - name: Self-employed claims under a minimum income floor
              description: |-
                ## Purpose
                Some in-work benefits assume a self-employed claimant earns at least a set floor after a start-up period, whatever they really earn, which can cut payments sharply in a slow month. Understanding when the floor applies, how the start-up period works and how to show the business is genuine lets a freelancer plan income around it.

                ## Milestones
                1. Whether a floor applies to your claim, and at what level, confirmed.
                2. Business records prepared for the self-employment interview.
                3. The end date of any start-up period written in the tracker.
                4. Actual earnings compared with the floor every quarter.

                ## Notes
                A floor can turn a quiet month into a much smaller payment. Build a buffer in the strong months before the start-up period ends.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The floor level and start-up end date are recorded, and quarterly comparisons of actual earnings with the floor exist."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find out whether a minimum income floor applies to your claim"
                - "Prepare business records for the self-employment interview"
                - "Ask when any start-up period ends and add the date to the tracker"
                - "Compare actual earnings with the floor @recurring(quarterly)"
            - name: Gifting, notional capital and deprivation rules
              description: |-
                ## Purpose
                Giving savings away, paying off a relative's debt or spending heavily before claiming can lead an agency to treat you as still having the money if it decides the aim was to qualify. Knowing how these rules work before making large gifts or purchases avoids a refused claim, and matters most when planning for care costs or a pension-age claim.

                ## Milestones
                1. The official guidance on deprivation of capital read for each relevant benefit.
                2. Large gifts or spending in recent years listed with dates and reasons.
                3. Receipts and reasons for any large purchase kept with the evidence folder.
                4. Advice taken before any significant gift while claiming or about to claim.

                ## Notes
                Agencies judge purpose and timing case by case. Get advice before moving a significant sum if a means-tested claim is likely in the next few years.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated list of large gifts and purchases with reasons and receipts is kept, and advice is recorded before any further large gift."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the official guidance on deprivation of capital for your benefits"
                - "List any large gifts or spending in recent years with dates and reasons"
                - "Keep receipts and reasons for large purchases made before a claim"
                - "Ask an adviser before making any significant gift while claiming"
            - name: Compensation payments and benefit disregards
              description: |-
                ## Purpose
                Lump sums such as a personal injury award, a large payment of benefit arrears or other compensation can push savings over a capital limit overnight. Some of these sums are ignored for a period, or permanently if held in the right way, so getting advice before the money arrives protects ongoing means-tested support.

                ## Milestones
                1. Each expected lump sum listed with its source and likely date.
                2. Whether and for how long each is disregarded confirmed with an adviser.
                3. Arrears kept in a separate account with the award letter that explains them.
                4. The end date of any temporary disregard written in the tracker.

                ## Notes
                Advice on holding a personal injury payment in a trust is best taken before the payment is made. Ask a solicitor or welfare rights adviser.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each expected lump sum has a recorded disregard decision from an adviser, and temporary disregard end dates are in the tracker."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask whether any expected lump sum is disregarded and for how long"
                - "Get advice on holding a personal injury payment in a trust before it is paid"
                - "Keep benefit arrears in a separate account with the award letter"
                - "Add the date any temporary disregard ends to the review tracker"
            - name: Subject access request for your benefits file
              description: |-
                ## Purpose
                Data protection law in many countries lets you ask for the information an agency holds about you, including call notes, assessment reports and internal decision records. Sending a request well before an appeal or complaint gives you the agency's own account to set against yours.

                ## Milestones
                1. The agency's route for data access requests found.
                2. A request sent naming the claim, the dates and the records wanted.
                3. The legal response deadline noted and chased if missed.
                4. The records received compared with your own call log.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The agency's records for the claim have been received under a data access request and compared with your own log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find how the agency accepts data access requests"
                - "Send a request naming the claim, dates and the records you want"
                - "Note the legal response deadline and chase if it passes"
                - "Compare the records received with your own call log"
            - name: Benefit entitlement when moving between countries
              description: |-
                ## Purpose
                Moving abroad, returning home or arriving in a new country brings residence tests, waiting periods and rules on which benefits can be paid overseas. Checking these before the move avoids claims being stopped without warning and finds the pensions or credits that can follow you.

                ## Milestones
                1. Every benefit and pension paid to the household listed.
                2. Each one marked as payable abroad, stopping on departure or uncertain.
                3. Residence tests and waiting periods in the destination country noted.
                4. Each paying agency told the move date in writing before leaving.

                ## Notes
                Agreements between countries can protect pensions and contribution records. Ask each agency which agreements apply before you go.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every household benefit is marked as continuing or stopping after the move, and each agency was told the move date in writing beforehand."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every benefit and pension currently paid to the household"
                - "Check which can be paid abroad and which stop on leaving"
                - "Ask about residence tests and waiting periods in the destination country"
                - "Tell each paying agency the move date in writing before you go"
---

# Benefits & Government Entitlements

This area is for anyone who receives, or might be owed, state benefits, tax credits or government grants, and for the carers who often manage those claims for someone else. It starts with the foundations (a household fact sheet, an independent entitlement check, a register of claims, an evidence folder and a first claim made on time), then the routines that keep claims accurate, the knowledge that makes award letters and assessments readable, the decisions and challenges when something is wrong, the dated appointments and hearings, the situations of carers, parents, people reaching pension age or living with illness, and finally the specialist rules on capital, compensation and moving abroad.

What repeats is a twice-weekly look at the online journal, a weekly daily living diary for disability claims, monthly checks of changes, statements, earnings and review dates, and a yearly re-check of the whole household's entitlement after rates change. The Metrics log, Meeting notes, Operational checklist, Remediation plan and Person templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
