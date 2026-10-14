---
id: wealth-investing.state-pension-social-security
name: State Pension & Social Security
description: "An official forecast you understand, a contribution record checked year by year with gaps fixed or knowingly left, a claiming age chosen on paper, and the payments, credits and survivor rights kept right once the pension starts."
category: personal
version: 1.0.0
tags: [wealth-investing, state-pension-social-security, everyone, retiree, social-security, national-insurance, contribution-record, claiming-age]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - meeting-notes
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: State Pension & Social Security
          description: "Forecasting state pension or social security entitlement, filling gaps in contribution records and choosing when to claim."
          projects:
            - name: Online account with your state pension agency
              description: |-
                ## Purpose
                Almost every pension or social security agency now shows your record, forecast and letters through a personal online account, and setting one up early also stops a fraudster from creating one in your name. It usually takes under an hour with the government's identity check, and every other project in this area starts from it.

                ## Milestones
                1. The official agency website found by typing its address, not by following an advert or email link.
                2. Your identity verified and a personal account created with a strong unique password and two-step sign-in.
                3. The record, forecast and messages sections each opened once to confirm they load.
                4. Login method and recovery details recorded in your password manager.

                ## Notes
                Use the agency's official site only. In the US this is the my Social Security account; in the UK the State Pension and National Insurance services sit behind the government sign-in. Never pay a third party to set this up.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working personal account with the pension agency, protected by two-step sign-in, with recovery details saved in a password manager."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find your pension agency's official website by typing its address"
                - "Complete the identity check and create your personal account"
                - "Turn on two-step sign-in and save the recovery codes"
                - "Sign in once to confirm the account still works and the details are current @recurring(yearly)"
            - name: First official state pension forecast
              description: |-
                ## Purpose
                A forecast is the agency's own estimate of what you would receive at pension age if your record carries on as it is, and most people have never read theirs. Downloading it and writing the key figures in plain words replaces guesses from colleagues and calculators with the one number the agency will actually stand behind.

                ## Milestones
                1. The current forecast downloaded or requested in writing and saved as a dated file.
                2. The weekly, monthly or yearly amount noted, with whether it is in today's money.
                3. The amount you have earned so far and the most you could still reach written down separately.
                4. Any assumption in the forecast, such as continuing to work until pension age, listed in a sentence each.

                ## Notes
                Forecasts in most countries are shown in today's money, so they are not the cash figure you will see in thirty years. Write down which basis yours uses before comparing it with anything else.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated copy of the official forecast is saved, with the current amount, the maximum reachable and the forecast's assumptions written in one note."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download your state pension forecast from your online account"
                - "Note the forecast amount and whether it is shown in today's money"
                - "Write down the amount earned so far and the most you could still reach"
                - "List the assumptions printed in the forecast's small print"
            - name: Your state pension age and earliest claim date
              description: |-
                ## Purpose
                Pension age has moved in many countries and now depends on your exact date of birth, and some schemes add an earliest claim age with a permanent reduction. Writing down the precise dates that apply to you prevents the common mistake of planning around the age a parent or older colleague retired at.

                ## Milestones
                1. Your state pension age confirmed from the agency's official checker, to the exact date.
                2. The earliest age you could claim, and any reduction for claiming then, noted if your scheme allows it.
                3. The latest age to which deferring still increases the payment written down.
                4. All three dates added to your calendar and to the front of your pension folder.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your exact state pension age, earliest claim date and last useful deferral date are recorded from the agency's own checker."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Enter your date of birth in the agency's official pension age checker"
                - "Note whether early claiming exists in your scheme and what it costs"
                - "Find the age after which delaying no longer raises the payment"
                - "Add the three dates to your calendar with a reminder a year ahead of each"
            - name: Work and residence timeline since leaving school
              description: |-
                ## Purpose
                Your contribution record can only be checked against something, and memory is unreliable about which year a job started or how long a stint abroad lasted. A simple timeline of every job, period of self-employment, study, unemployment, caring and country of residence becomes the reference you test the official record against.

                ## Milestones
                1. Every employer listed with start and end years, from the first job to now.
                2. Self-employment, study, unemployment, illness and caring periods added in their place.
                3. Every country you lived or worked in marked with dates.
                4. Supporting documents such as payslips, tax summaries or contracts noted against the years they cover.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A year-by-year timeline covers every year since leaving school, with work type, country and any supporting document noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every employer you can remember with approximate start and end years"
                - "Add periods of study, self-employment, caring and unemployment"
                - "Mark each year with the country you lived in"
                - "Search old tax returns and payslips to fix uncertain dates"
            - name: Year-by-year contribution record check
              description: |-
                ## Purpose
                Your record is the list the agency will pay from, and mistakes in it are common: an employer that never reported, a year of self-employment missing, a name change that split your history. Checking each year against your own timeline while evidence still exists is far easier than arguing about it a decade later.

                ## Milestones
                1. The full contribution or earnings record downloaded from your account.
                2. Every year marked as full, partial or missing beside your own timeline.
                3. Each year where the record and the timeline disagree flagged with the reason you suspect.
                4. A short summary written: years counted so far, years still needed and years in question.

                ## Notes
                In the US, compare the yearly earnings figures with your old wage statements; in the UK, look at whether each year is shown as a qualifying year; in National Insurance Schemes in the Caribbean, ask for a contribution statement listing weeks paid by each employer.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every year of the official record is marked as matching or disputed against your own timeline, with a written count of years counted and years still needed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download your full contribution or earnings record"
                - "Set the record beside your work and residence timeline"
                - "Mark each year as full, partial, missing or disputed"
                - "Write a one-paragraph summary of years counted and years needed"
            - name: Gap list with a reason for every missing year
              description: |-
                ## Purpose
                Not every gap is a problem: some years will fill themselves as you keep working, some can be credited, some can be bought and some are worth leaving. Writing down why each missing or partial year is missing turns a worrying list into a short set of specific actions.

                ## Milestones
                1. Every missing or partial year listed with what you were doing at the time.
                2. Each gap labelled as an error, a credit you may have been owed, a year you could pay for, or a year to leave.
                3. Gaps that will fill themselves before pension age identified.
                4. One next action written against every gap that is not being left.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each gap in the record has a written cause and one of four labels, with a named next action for every gap that will be pursued."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy every missing or partial year onto a separate gap list"
                - "Write what you were doing in each of those years"
                - "Label each gap as error, possible credit, buyable or leave"
                - "Count how many years you can still add through work before pension age"
            - name: Personal details and identity number accuracy check
              description: |-
                ## Purpose
                One wrong digit in an identity number, a misspelt surname or a date of birth entered wrongly can send contributions to the wrong record or stall a claim for months. Checking what the agency holds against your documents, and fixing it now, removes a slow and stressful problem from the year you want to retire.

                ## Milestones
                1. Name, date of birth, address and identity number on the agency record checked against your passport or birth certificate.
                2. Previous names, such as a maiden name, confirmed as linked to the same record.
                3. Any mismatch reported through the official route with the reference number kept.
                4. A corrected record confirmed in writing or on screen.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The agency record shows the correct name, date of birth, address and identity number, with former names linked and any correction confirmed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare the details on your agency account with your passport"
                - "Check that any previous surname is linked to the same record"
                - "Report any mismatch through the agency's official channel"
                - "Save the reference number and the confirmation of the correction"
            - name: State pension paperwork folder
              description: |-
                ## Purpose
                Letters from pension agencies arrive rarely and matter enormously, which is exactly why they get lost. One folder, paper or digital, holding your identity number, forecasts, record printouts, correspondence and claim papers means the evidence is to hand when a decision or a dispute needs it.

                ## Milestones
                1. One labelled folder, with a matching digital copy, set up for state pension papers.
                2. Your identity number card or letter, latest forecast and record printout filed in it.
                3. Old letters from the agency gathered from drawers and email and added in date order.
                4. A one-page contents sheet at the front naming what is in the folder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A paper and digital folder holds your identity number, latest forecast, record and all agency letters in date order, with a contents sheet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Label one folder and one cloud folder for state pension papers"
                - "Search your email for messages from the pension agency and save them"
                - "File the forecast, record printout and identity number letter"
                - "Scan and file any new pension agency letters @recurring(quarterly)"
            - name: Pension scam and impostor contact rules
              description: |-
                ## Purpose
                Fraudsters copy pension agency letters, texts and phone calls to steal identity numbers and bank details, and people nearing pension age are a favourite target. A short set of household rules about how the real agency contacts you, and what it never asks for, makes a fake approach easy to spot and refuse.

                ## Milestones
                1. The ways your real agency contacts people, and what it never asks for, written down from its official site.
                2. The official phone number and website saved in your contacts.
                3. A household rule agreed: no details given on an incoming call, always ring back on the saved number.
                4. The agency's official route for reporting impostor contact noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of how the real agency contacts you, its official number and a ring-back rule is kept by the phone and known to the household."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the agency's own page on scams and impostor contact"
                - "Save the official phone number and website in your contacts"
                - "Agree a ring-back rule with everyone you live with"
                - "Note how to report a suspicious call, text or letter"
            - name: Yearly forecast refresh and change log
              description: |-
                ## Purpose
                Forecasts change every year as another year is added, rules are updated and rates rise, and a quiet drop can signal a missing year. Downloading a fresh forecast at the same time each year and logging the figure against last year's shows the trend and catches a problem while it is still recent.

                ## Milestones
                1. A log with one row per year: date, forecast amount, years counted and any comment.
                2. This year's forecast downloaded and logged.
                3. Any fall or unexpected rise traced to its cause.
                4. Three consecutive yearly rows completed.

                ## Notes
                Start from the **Metrics log** template. Pick a month when you are not busy with tax returns, so the refresh actually happens.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive yearly forecasts are logged with amount and years counted, and every change is explained in a comment."
                cadence: cyclic
              tasks:
                - "Create a forecast log from the metrics log template"
                - "Download the new forecast and add a row to the log @recurring(yearly)"
                - "Investigate any forecast that is lower than last year's"
                - "Note the number of qualifying years shown each time"
            - name: Tax-year earnings reconciliation against your record
              description: |-
                ## Purpose
                Employers occasionally report earnings late, under the wrong number or not at all, and agencies often limit how far back an error can easily be fixed. Comparing each finished tax year's payslips or tax summary with the year shown on your record takes twenty minutes and keeps every year correct while proof is in hand.

                ## Milestones
                1. The month when the previous tax year should appear on your record identified.
                2. The year-end pay or tax summary from each employer saved in the pension folder.
                3. Earnings or contributions on the record compared with those summaries.
                4. Any shortfall reported with copies of the summaries attached.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The last two completed tax years on your record have been checked against year-end pay summaries, with any shortfall reported."
                cadence: cyclic
              tasks:
                - "Find out when a finished tax year normally shows on your record"
                - "Save each employer's year-end pay summary to the pension folder"
                - "Compare last tax year's record entry with your pay summaries @recurring(yearly)"
                - "Report any missing earnings with the summary as evidence"
            - name: Pension agency correspondence log
              description: |-
                ## Purpose
                Calls to pension agencies often involve long queues, different staff each time and promises of a letter that never comes. A running log of every contact, with date, name, reference number and what was promised, turns your word against theirs into a record that a complaint or appeal can rely on.

                ## Milestones
                1. A log set up with columns for date, channel, staff name, reference, what was said and follow-up due.
                2. Every call, message and letter since the start of this area entered.
                3. Follow-up dates set for anything promised.
                4. The log used to chase at least one overdue reply.

                ## Notes
                Start from the **Meeting notes** template for any phone call or appointment, then copy the outcome into the log.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every contact with the pension agency over six months is logged with date, reference number and promised follow-up."
                cadence: rolling
              tasks:
                - "Set up a contact log with date, name, reference and promise columns"
                - "Write up each agency call within a day using meeting notes"
                - "Check the agency inbox and post for anything unanswered @recurring(monthly:12)"
            - name: Self-employed contributions paid in full each year
              description: |-
                ## Purpose
                Self-employed people usually pay state pension contributions through their tax return, and a year with low profit, a late return or an unregistered business can quietly leave a gap. A yearly routine that confirms the contributions were assessed, paid and credited protects the record that an employee would have had protected automatically.

                ## Milestones
                1. Registration as self-employed with the tax or social security authority confirmed.
                2. The contribution line on each tax return identified and checked.
                3. A monthly transfer into a tax pot that covers contributions as well as income tax.
                4. Each self-employed year shown as counted on the record after payment.

                ## Notes
                If profits were below the level that triggers contributions, ask whether you can pay voluntarily at the self-employed rate, which in some countries is far cheaper than the general voluntary rate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The last two self-employed years show contributions assessed on the tax return, paid and counted on the pension record."
                cadence: cyclic
              tasks:
                - "Confirm you are registered as self-employed for contributions"
                - "Move the month's estimated tax and contributions into the tax pot @recurring(monthly:25)"
                - "Check last year's return shows contributions assessed and paid @recurring(yearly)"
                - "Ask about voluntary payment for any low-profit year"
            - name: Household credits check each year
              description: |-
                ## Purpose
                Credits are contribution years given without paying, for things like raising young children, caring, illness or looking for work, and many are only awarded if a linked benefit is claimed or an application is made. A yearly check for every adult in the household catches the partner at home whose credit was never switched on.

                ## Milestones
                1. Each adult in the household listed with their situation this year: working, caring, at home with children, studying or unwell.
                2. The credits that could apply to each situation identified from the agency's guidance.
                3. Each adult's record checked for the credits they should have.
                4. Any missing credit applied for or queried.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every adult in the household has had their record checked for the credits their situation allows, with missing ones applied for, in each of two years."
                cadence: cyclic
              tasks:
                - "List each adult at home with their main situation this year"
                - "Read the agency's list of situations that earn credits"
                - "Check each adult's record for the credits their year allows @recurring(yearly)"
            - name: Monthly pension payment check
              description: |-
                ## Purpose
                Once the pension starts it usually runs for decades, and an underpayment, a stopped payment or a wrong deduction can go unnoticed for months. Glancing at each payment on the expected date, against the amount in your latest award letter, means a problem is raised in weeks rather than discovered at tax time.

                ## Milestones
                1. The expected payment date and amount written from the latest award letter.
                2. Each payment checked against it on the day it is due.
                3. A rule written for what to do if a payment is late or different.
                4. Six consecutive months of payments confirmed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive state pension payments are confirmed against the award letter amount, with any difference queried within a week."
                cadence: rolling
              tasks:
                - "Write the expected payment date and amount from your award letter"
                - "Check the pension payment arrived and matches the award @recurring(monthly:8)"
                - "Ring the agency within a week if a payment is missing or different"
            - name: Annual rate increase letter check
              description: |-
                ## Purpose
                Most state pensions rise each year in line with prices, wages or a set formula, and the agency sends a letter or online notice with the new amount. Reading it, checking it against the published rate rise and updating your budget takes a few minutes and catches errors before a year of underpayments builds up.

                ## Milestones
                1. This year's published rate increase for your scheme found on the official site.
                2. The new amount on your letter compared with last year's amount plus that increase.
                3. Any difference queried with the agency.
                4. The new amount written into your household budget.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The yearly increase notice has been checked against the published rate rise for two consecutive years, with the budget updated each time."
                cadence: cyclic
              tasks:
                - "Find this year's published state pension increase on the official site"
                - "Compare the new amount on your notice with last year's plus the increase @recurring(yearly)"
                - "Update the household budget with the new monthly figure"
            - name: Life certificate returns for pensions paid abroad
              description: |-
                ## Purpose
                Pensions paid to people living overseas, and some National Insurance Scheme pensions in the Caribbean, are suspended if a life certificate or proof-of-life form is not returned on time. Knowing when it is due, who may witness it and how to return it keeps the payments flowing without a gap of several months.

                ## Milestones
                1. The month your life certificate is usually due, and how often, confirmed with each paying agency.
                2. The people allowed to witness or certify the form in your country listed.
                3. The return method chosen, with tracked post or an online upload where offered.
                4. Two consecutive certificates returned before the deadline.

                ## Notes
                If you receive pensions from more than one country, each agency may send its own form at a different time of year. Keep one line per pension.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every life certificate requested by a paying agency is returned before its deadline for two consecutive cycles, with tracked proof of sending kept."
                cadence: cyclic
              tasks:
                - "Ask each paying agency when its life certificate is due and how often"
                - "List the officials who can certify the form where you live"
                - "Return the life certificate by tracked post or upload when it arrives @recurring(yearly)"
            - name: Change of circumstances reporting routine
              description: |-
                ## Purpose
                Moving house, changing bank, marrying, separating, going into hospital for a long stay or moving abroad can all change what you are paid, and agencies usually expect to be told promptly. A short checklist reviewed every quarter means no change slips through and turns into an overpayment the agency later claws back.

                ## Milestones
                1. The agency's list of changes you must report, and how quickly, copied into a checklist.
                2. Every change in the last year checked against it.
                3. Any unreported change reported, with the reference number logged.
                4. The checklist reviewed each quarter for a year.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A change-of-circumstances checklist has been reviewed in four consecutive quarters, with every reportable change reported and logged."
                cadence: rolling
              tasks:
                - "Copy the agency's list of reportable changes into a checklist"
                - "Check whether anything on the list changed in the last year"
                - "Run through the checklist for any new change to report @recurring(quarterly)"
            - name: Tax on your state pension each year
              description: |-
                ## Purpose
                State pensions are taxable in many countries, but tax is often not deducted at source, so the bill turns up later through a tax code change or a tax return. Knowing how your pension is taxed, checking the yearly benefit statement and setting aside or withholding enough avoids a surprise bill in the first year of retirement.

                ## Milestones
                1. How your state pension is taxed, and whether tax is withheld, confirmed from the tax authority's guidance.
                2. The yearly benefit statement for tax filed in the pension folder.
                3. Tax withholding or a set-aside amount arranged to cover the bill.
                4. The pension correctly entered on the tax return or tax code for one full year.

                ## Notes
                Ask a tax adviser or the tax authority how your other income affects the tax on your pension. This project records and checks; it does not decide the right withholding for you.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The state pension appeared correctly on the last tax return or tax code, with withholding or a set-aside in place that covered the tax due."
                cadence: cyclic
              tasks:
                - "Read the tax authority's guidance on how state pensions are taxed"
                - "File the yearly benefit statement and check its total @recurring(yearly)"
                - "Decide with a tax adviser whether to have tax withheld or set money aside"
            - name: How your state pension is calculated
              description: |-
                ## Purpose
                Each country builds its state pension differently: a count of qualifying years, an average of your highest earning years, weeks of contributions, or a residence test, and the formula decides which actions actually move your number. An hour with the official guide gives you the formula in your own words and stops effort being spent on things that change nothing.

                ## Milestones
                1. The official explanation of how the pension is calculated read in full.
                2. The formula written in three or four plain sentences in your own words.
                3. The minimum needed for any pension and the amount needed for a full pension noted.
                4. One worked example using your own record checked against your forecast.

                ## Notes
                In the US the benefit is based on your highest 35 years of indexed earnings; in the UK on the number of qualifying years; in many Caribbean schemes on contribution weeks and average insurable earnings. Use your own scheme's guide.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language note explains your scheme's formula, minimum and full entitlement, with one worked example that roughly matches your forecast."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the official guide to how your state pension is worked out"
                - "Write the formula in three or four plain sentences"
                - "Note the minimum years or weeks for any pension and for a full one"
                - "Ask the agent to check your worked example against the official guide"
            - name: Reading the codes on a contribution record
              description: |-
                ## Purpose
                Contribution records use codes, abbreviations and columns that are not obvious: a year marked as not full, credits shown differently from paid contributions, earnings capped at a maximum. Learning what each mark on your own record means prevents both false alarms and missed gaps.

                ## Milestones
                1. The agency's explanation of every code or column on your record found.
                2. Each code that appears on your own record written next to its meaning.
                3. Credited years distinguished from paid years on your record.
                4. Any code you still cannot interpret listed as a question for the agency.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every code or marking on your own contribution record has a written meaning, with credited and paid years told apart."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the agency's key to the codes on a contribution record"
                - "Write the meaning next to each code that appears on your record"
                - "Mark which years were credited and which were paid"
                - "List any remaining codes as questions for the agency"
            - name: Early, full and delayed claiming rules
              description: |-
                ## Purpose
                The age you claim can change your monthly payment for the rest of your life, and the rules differ widely: some schemes reduce early claims permanently, some reward deferral with an increase, some have no early option at all. Learning your scheme's exact rules before you are close to pension age means the decision is made calmly rather than at the counter.

                ## Milestones
                1. Your scheme's rules for claiming early, at pension age and after it written down.
                2. The reduction for each year early and the increase for each year late noted from official figures.
                3. Any effect of your claiming age on a spouse's or survivor's payment noted.
                4. The rules checked against the agency's own calculator for two or three ages.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note records the official reduction for early claiming, the increase for deferral and any survivor effect, confirmed with the agency calculator for at least two ages."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the official rules for claiming before, at and after pension age"
                - "Note the yearly reduction for early claims and increase for deferral"
                - "Run the agency's calculator for three different claiming ages"
                - "Find out whether your claiming age affects a partner's payments"
            - name: Spouse, survivor and divorced-spouse benefit rules
              description: |-
                ## Purpose
                Benefits based on a partner's record can matter as much as your own: a spouse's addition, a survivor's pension, or a payment based on an ex-spouse's record after a long marriage. Knowing the rules in your scheme, and the conditions such as length of marriage or age, means nobody misses an entitlement they would never have thought to ask about.

                ## Milestones
                1. The spouse, survivor and former-spouse rules for your scheme written in plain words.
                2. The conditions that apply, such as length of marriage, age or remarriage, listed.
                3. Which of these could apply to you or your partner now or later noted.
                4. Questions the rules leave open written down for the agency.

                ## Notes
                In the US, for example, a marriage that lasted ten years or more can give a divorced spouse rights on the former partner's record. Rules for civil partners and cohabiting couples vary a lot between countries, so check yours.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of spouse, survivor and former-spouse rules for your scheme names which could apply to your household and under what conditions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the agency's guidance on spouse and survivor benefits"
                - "Note any former-spouse rights and the marriage length they need"
                - "Mark which rules could apply to you or your partner"
                - "Write the open questions down for your next agency contact"
            - name: Earnings tests when working past pension age
              description: |-
                ## Purpose
                Carrying on working after you start claiming affects the pension differently by country: some schemes hold back part of the payment above an earnings limit before full retirement age, while others ignore earnings but stop charging contributions. Understanding your scheme's rule before taking a part-time job or consultancy avoids an unexpected clawback.

                ## Milestones
                1. Whether your scheme applies an earnings test, and up to what age, confirmed.
                2. The current earnings limit and how excess earnings reduce payments noted from official figures.
                3. Whether contributions continue or stop after pension age noted.
                4. Your expected earnings compared with the limit for the coming year.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note records whether an earnings test applies, its current limit and effect, and how your expected earnings compare with it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your scheme reduces payments for earnings before a set age"
                - "Write down this year's official earnings limit"
                - "Find out whether contributions stop once you reach pension age"
                - "Estimate next year's earnings and compare them with the limit"
            - name: Means-tested top-ups available at pension age
              description: |-
                ## Purpose
                Millions of pensioners on low incomes are entitled to a means-tested top-up and never claim it, and in some countries that top-up opens the door to help with housing costs, local taxes or health costs. Checking eligibility for yourself, or for an older relative, is one of the highest-value hours in this area.

                ## Milestones
                1. The name of your country's pension-age top-up and its basic rules found on the official site.
                2. An official or charity benefits calculator run with real figures.
                3. Any linked help that a successful claim unlocks listed.
                4. A claim made, or a written note of why you are not eligible.

                ## Notes
                Examples include Pension Credit in the UK, Supplemental Security Income in the US and the Guaranteed Income Supplement in Canada. Many schemes allow a claim to be backdated only a short way, so check promptly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "An eligibility check for the pension-age top-up has been run with real figures, and either a claim is submitted or the reason for not claiming is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the name of your country's means-tested pension top-up"
                - "Run an official or charity benefits calculator with real figures"
                - "List the extra help a successful claim would also give"
                - "Submit a claim or record why you are not eligible"
            - name: How state pensions rise with prices and wages
              description: |-
                ## Purpose
                Uprating rules decide whether your pension keeps its buying power over a twenty or thirty year retirement, and they can be changed by government. Understanding the rule your scheme uses now, and whether it has been changed before, tells you how much weight to put on the state pension's real value in later decades.

                ## Milestones
                1. The current uprating rule for your scheme written down.
                2. The last five years of increases listed beside the inflation figure for each year.
                3. Any recent or proposed change to the rule noted.
                4. Whether the rule still applies if you live abroad checked.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note records your scheme's uprating rule, five years of increases compared with inflation and whether the rule applies if you move abroad."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up how your state pension is increased each year"
                - "List the last five yearly increases next to inflation for those years"
                - "Note any proposed change to the uprating rule"
            - name: Voluntary contributions for missing years
              description: |-
                ## Purpose
                Paying voluntary contributions can be one of the cheapest ways to add guaranteed, inflation-linked income in retirement, but only some years are worth buying and only within a time limit. Getting the agency to confirm what each missing year would add, and comparing that with the cost and how long you expect to draw the pension, gives a clear decision on which years to buy, if any.

                ## Milestones
                1. The years that can still be paid for, and the deadline for each, confirmed with the agency.
                2. Written confirmation that each year would actually raise your pension, and by how much.
                3. Cost and extra yearly pension set side by side, with the years needed to recover the cost.
                4. A decision recorded, and any payment made using the agency's own reference.

                ## Notes
                Always ask the agency to confirm a year will increase your pension before paying: some years make no difference because of how your record or a past reform works. Never pay through a third party that contacts you first.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each buyable gap has a cost, a confirmed increase and a payback period recorded, and a buy or leave decision is written for every one."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agency which missing years can still be paid for and by when"
                - "Request written confirmation of what each year would add"
                - "Work out how many years of pension each payment takes to recover"
                - "Record a buy or leave decision for every eligible year"
            - name: Applying for credits you were owed
              description: |-
                ## Purpose
                Some credits are awarded automatically, but others need a form, a linked benefit claim or evidence, and missing ones can sometimes be backdated if you ask. Matching your gap list against the credits your past situations qualified for can recover whole years without paying anything.

                ## Milestones
                1. Each gap year matched against the credit types that might have applied that year.
                2. The evidence each credit needs gathered, such as child benefit letters or caring records.
                3. Applications submitted for every credit that looks likely.
                4. Outcomes recorded and the record checked after each award.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An application has been made for every gap year that plausibly qualified for a credit, with each outcome recorded against the record."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Match each gap year with credits that could have applied then"
                - "Gather the letters and records that prove each situation"
                - "Submit a credit application for each likely year"
                - "Check your record after each decision letter arrives"
            - name: Evidence pack to restore a missing contribution year
              description: |-
                ## Purpose
                When a year you worked shows as missing, the agency will usually only fix it with proof: payslips, year-end tax summaries, an employer letter or bank statements showing wages. Building a tidy evidence pack for each disputed year makes the correction request easy to approve and hard to lose.

                ## Milestones
                1. Each disputed year listed with the employer, dates and approximate earnings.
                2. At least one document per year found from your files, the tax authority or the former employer.
                3. A cover letter written stating the year, the identity number and what is missing.
                4. The pack sent by a tracked method, with copies kept and a follow-up date set.

                ## Notes
                If the employer has closed, the tax authority may still hold its returns. Ask for your own tax records for the year as a starting point.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An evidence pack with a cover letter and at least one supporting document per disputed year has been sent, tracked and logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each disputed year with employer, dates and rough earnings"
                - "Request your tax records for those years from the tax authority"
                - "Ask the agent to draft a cover letter naming each disputed year"
                - "Send the pack by tracked post and log the follow-up date"
            - name: Formal review and appeal of a record decision
              description: |-
                ## Purpose
                Agencies do get decisions wrong, and most offer a formal reconsideration followed by an independent appeal, each with a strict time limit. Knowing the route and preparing the case in writing, rather than repeating the same phone call, is what turns a refusal into a corrected record.

                ## Milestones
                1. The decision letter read and the time limit for challenging it written down.
                2. The agency's formal review route and the independent appeal stage after it identified.
                3. A written request for review sent, quoting the decision and enclosing evidence.
                4. The outcome recorded, and an appeal lodged within the limit if the review fails.

                ## Notes
                Free advice services for benefits and pensions exist in most countries and can help with appeal letters. A legal adviser can say whether a case is worth pursuing.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written review request was sent within the time limit, and its outcome, plus any appeal, is recorded in the pension folder."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the time limit printed on the decision letter"
                - "Find the agency's formal review and appeal routes"
                - "Contact a free benefits advice service about the case"
                - "Send a written review request with the evidence attached"
            - name: Choosing your state pension claiming age
              description: |-
                ## Purpose
                Claiming early, at pension age or later trades a smaller pension for longer against a bigger one for less time, and the right answer depends on health, other income, a partner's survivor rights and how long you need the money to last. Setting the options out on one page, with the agency's figures and your own circumstances, turns a guess into a recorded decision you can explain.

                ## Milestones
                1. The monthly amount at three or four possible claiming ages taken from the agency's calculator.
                2. The age at which waiting would pay back, set against your family health history and any partner's survivor needs.
                3. How you would cover living costs until a later claim written down.
                4. A preferred claiming age chosen, with the reasons recorded, and reviewed with a partner or adviser.

                ## Notes
                This is a personal decision with no single right answer. A regulated adviser or free government guidance service can help you check the reasoning; this project gathers the facts and records the choice.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page comparison of at least three claiming ages is complete, and a chosen age with written reasons has been reviewed with a partner or adviser."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Run the agency calculator for three or four claiming ages"
                - "Work out the break-even age between claiming early and waiting"
                - "Write down how you would pay the bills until a later claim"
                - "Discuss the comparison with your partner or an adviser"
                - "Record the chosen claiming age and the reasons"
            - name: Bank account and payment frequency for your pension
              description: |-
                ## Purpose
                Where your pension is paid, how often and in which currency are small choices that affect fees, budgeting and what happens if you become unwell or move. Deciding them deliberately before the claim, rather than ticking the first box on the form, saves foreign exchange charges and awkward changes later.

                ## Milestones
                1. The payment options your agency offers, such as frequency and paying abroad, listed.
                2. The account that will receive the pension chosen, with any fees or currency costs noted.
                3. Whether a joint account or a trusted person's access is needed considered.
                4. The choice written into your claim checklist.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The receiving account, payment frequency and currency are chosen and written into the claim checklist, with any fees noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the payment frequency and account options your agency allows"
                - "Check fees or exchange charges on the account you plan to use"
                - "Write the chosen account and frequency into your claim checklist"
            - name: Ten-year countdown record review
              description: |-
                ## Purpose
                Ten years before pension age is the last comfortable point to fix the record: most gaps can still be filled by working, credited or bought, and evidence from your forties is still findable. A dedicated review at this milestone, with a fresh forecast and a list of what must happen in the next decade, prevents the scramble many people face at sixty.

                ## Milestones
                1. A fresh forecast and full record downloaded at the ten-year mark.
                2. Years still needed for a full pension compared with working years left.
                3. Every remaining gap given an action and a target year.
                4. The review repeated at the five-year mark, with a reminder already in the calendar.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A record review held around ten years before pension age produced a written plan for every remaining gap and a reminder for a five-year review."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put a reminder in the calendar for ten years before your pension age"
                - "Compare years still needed with the working years you have left"
                - "Give every remaining gap an action and a target year"
                - "Book a second review for five years before pension age"
            - name: Pension claim application ahead of pension age
              description: |-
                ## Purpose
                In many countries the state pension is not paid automatically: you have to claim, often within a set window before pension age, and a late or incomplete claim can delay the first payment for weeks. Preparing documents, dates and choices in advance means the claim goes in once, complete, at the earliest sensible moment.

                ## Milestones
                1. The claim window and method confirmed with the agency: online, phone or form.
                2. Documents gathered: identity, bank details, marriage or divorce papers and records from other countries.
                3. The chosen claiming age and payment details written onto the checklist.
                4. The claim submitted and the acknowledgement and reference saved.

                ## Notes
                Start from the **Operational checklist** template. Check whether an invitation letter is sent; if it has not arrived by the start of the window, claim anyway.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A complete claim was submitted inside the agency's claim window, with the acknowledgement and reference number filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find out how early before pension age the agency accepts a claim"
                - "Build a claim checklist of documents, dates and choices"
                - "Gather the identity, bank and marriage documents the claim needs"
                - "Submit the claim and save the acknowledgement"
            - name: First year of state pension payments
              description: |-
                ## Purpose
                The first year of payments brings a run of paperwork: an award letter, the first part-payment, a tax code or withholding change and possibly a review of linked benefits. Checking each one as it arrives sets the pattern correctly for the decades that follow.

                ## Milestones
                1. The award letter checked against your forecast and claiming age.
                2. The first payment, often a part-period, reconciled to the letter.
                3. Tax treatment of the new income confirmed for the first year.
                4. Any change to other benefits or allowances caused by the pension recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The award letter, first payment and first-year tax treatment have each been checked, and any effect on other benefits recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare the award letter with your last forecast"
                - "Reconcile the first part-payment with the dates on the letter"
                - "Check the tax code or withholding on your new income"
                - "Ask whether the pension changes any other benefit you receive"
            - name: After a partner dies, reporting and survivor claims
              description: |-
                ## Purpose
                After a death the pension agency must be told, overpayments stopped and any survivor, bereavement or inherited entitlement claimed, all at a time when nobody has the energy for forms. Knowing the steps in advance, and keeping a simple checklist with the household papers, protects the surviving partner's income.

                ## Milestones
                1. The agency's bereavement process and any tell-once service in your country noted.
                2. The surviving partner's possible entitlements listed from the official rules.
                3. The documents a survivor claim needs identified and stored with the household papers.
                4. After a death, the agency told, payments stopped and every survivor claim submitted.

                ## Notes
                Some survivor payments must be claimed within months, and some inherited amounts depend on the deceased partner's record. Ask the agency directly what can be inherited.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A bereavement checklist with the agency's process, survivor entitlements and needed documents is stored with the household papers and known to both partners."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up how your agency is told about a death"
                - "List the survivor and bereavement payments your scheme offers"
                - "Store a copy of the checklist with your will and household papers"
                - "Show your partner where the checklist is kept"
            - name: Moving abroad with a state pension
              description: |-
                ## Purpose
                Moving abroad can change whether your pension is paid, whether it still rises each year and whether you can keep adding to your record, and some countries freeze pensions paid to residents of certain other countries. Checking these rules before the move, rather than after, can be worth thousands over a retirement.

                ## Milestones
                1. Whether your pension is payable in the new country, and whether it is still increased there, confirmed.
                2. Any social security agreement between the two countries found and its effect noted.
                3. Whether voluntary contributions can continue from abroad checked.
                4. The agency told of the move, with the new address and payment account set up.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the move, the payability, yearly increases and contribution options abroad are confirmed in writing, and the agency is notified of the new address."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check whether your pension is increased each year in the destination country"
                - "Find any social security agreement between the two countries"
                - "Ask whether you can keep paying voluntary contributions from abroad"
                - "Tell the agency your new address and overseas bank details"
            - name: Divorce and your state pension rights
              description: |-
                ## Purpose
                Divorce can change state pension rights in ways that never appear in the settlement: some schemes let a former spouse claim on your record, some split earnings credits, and some reverse a married couple's addition. Recording the rules before the settlement is agreed lets your solicitor or mediator take them into account.

                ## Milestones
                1. Both spouses' latest forecasts obtained.
                2. Rules on former-spouse benefits, credit splitting or sharing in your scheme noted.
                3. Questions about state pension rights given to the solicitor or mediator in writing.
                4. After the divorce, the agency notified and any former-spouse entitlement recorded with its conditions.

                ## Notes
                In Canada, for example, Canada Pension Plan credits can be split between former spouses on application. Your solicitor can tell you how your scheme interacts with the settlement.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Both forecasts and the scheme's former-spouse rules were given to the solicitor or mediator before settlement, and the agency was notified afterwards."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download your latest forecast and ask your spouse for theirs"
                - "Read your scheme's rules for former spouses and split credits"
                - "Send your state pension questions to the solicitor in writing"
                - "Notify the agency once the divorce is final"
            - name: Career break for young children and your record
              description: |-
                ## Purpose
                Parents who step out of paid work or drop to low hours to raise young children can lose years from their record unless the right credit is in place, and the parent at home is often not the one whose name is on the linked benefit. Setting up the credit at the start of the break protects years that are otherwise hard to recover.

                ## Milestones
                1. The credit available to a parent at home with young children identified.
                2. The linked benefit or application claimed in the name of the parent taking the break.
                3. The credit seen on that parent's record after the first year.
                4. A plan written for the record once the youngest child passes the qualifying age.

                ## Notes
                In the UK, for example, the child benefit claim decides who receives the National Insurance credit, so claiming it in the name of the non-earning parent matters even if the benefit itself is withdrawn because of income.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The parent taking the break has the childcare credit appearing on their own record for every year of the break."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the credit for a parent at home with young children"
                - "Check whose name the linked benefit or credit claim is in"
                - "Move the claim to the parent taking the break if needed"
                - "Note the child's age when the credit stops and plan for after"
            - name: Unpaid carers protecting their record
              description: |-
                ## Purpose
                Unpaid carers looking after a disabled or elderly relative for many hours a week often reduce paid work, and the years can vanish from their record without a carer's credit or benefit. Claiming the right credit, and keeping it in place as hours change, keeps caring years counting toward the carer's own pension.

                ## Milestones
                1. The carer's credit or benefit in your scheme and its hours test identified.
                2. Evidence of the caring role gathered, such as the cared-for person's disability award.
                3. The credit claimed and seen on the carer's record.
                4. The claim reconfirmed each year while caring continues.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A carer's credit or benefit is in place and appears on the carer's record for each year of caring."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find your scheme's carer credit and its weekly hours test"
                - "Gather proof of the caring role and the cared-for person's award"
                - "Apply for the carer's credit in your own name"
                - "Reconfirm the carer credit is still on your record @recurring(yearly)"
            - name: Part-time and low-paid work below the threshold
              description: |-
                ## Purpose
                Part-time workers, people with several small jobs and those on low pay can earn too little in each job for the year to count, even when total earnings across jobs would have been enough. Knowing the threshold, and whether any credit or voluntary option fills the gap, stops years of work from leaving nothing on the record.

                ## Milestones
                1. The earnings threshold for a year or week to count in your scheme noted.
                2. Each job's earnings compared with the threshold separately.
                3. Any credit or low-cost voluntary option for low earners identified.
                4. A decision recorded on hours, a credit or a voluntary payment.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each job's earnings have been checked against the threshold, and a written decision covers how any shortfall year will be handled."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Look up the earnings threshold for a year to count"
                - "Compare the pay in each of your jobs with the threshold"
                - "Check whether any credit covers low earners in your situation"
                - "Record how you will handle years that fall short"
            - name: Credits during unemployment and job search
              description: |-
                ## Purpose
                Losing a job can leave a gap in the record, but many schemes credit contributions while you are registered as looking for work or receiving an unemployment benefit, even when the benefit itself is small. Registering promptly keeps the year counting while you look for the next role.

                ## Milestones
                1. The credit for jobseekers in your scheme and how to receive it identified.
                2. Registration made in the first weeks out of work.
                3. Any requirement to keep the credit, such as regular sign-ins, noted.
                4. The year checked on the record once it closes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Registration for the jobseeker credit was made within a month of losing work, and the year shows as credited on the record."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your scheme credits contributions while job seeking"
                - "Register with the employment service in the first weeks out of work"
                - "Note what you must do each month to keep the credit"
                - "Check the credited year on your record once it ends"
            - name: Contributions in more than one country
              description: |-
                ## Purpose
                Working lives that span the Caribbean, the UK, the US or Canada leave records in several schemes, and social security agreements can let years in one country count towards the minimum in another. Getting a statement from each scheme and understanding how they combine stops you losing small pensions that each fall short of their own minimum.

                ## Milestones
                1. Every country you contributed in listed with dates and your identity number there.
                2. A contribution statement obtained from each scheme.
                3. Any social security agreement between those countries identified and its totalising rules noted.
                4. A plan written for claiming each pension, including where to apply.

                ## Notes
                Agreements usually let years count towards eligibility but each country still pays only for its own years. A separate claim may be needed in each country.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A statement from every scheme you paid into is on file, with applicable agreements noted and a claiming plan for each pension."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each country you worked in with dates and identity numbers"
                - "Request a contribution statement from each scheme"
                - "Find the social security agreements between those countries"
                - "Ask each scheme for an updated statement @recurring(yearly)"
            - name: Retirees' entitlement health check
              description: |-
                ## Purpose
                Retirees who claimed years ago may have missed rule changes, an inherited amount, a spouse's addition, an increase from late claiming or a means-tested top-up. A structured check of what you receive against what your record and circumstances allow sometimes uncovers arrears, and at worst confirms the award is right.

                ## Milestones
                1. Your current award letter set beside your record and the scheme's rules today.
                2. Every possible addition listed: spouse, inherited, deferral, top-up, disability-related.
                3. Each one confirmed as received, not applicable, or queried with the agency.
                4. The check repeated each year, with the outcome logged.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every possible addition to your state pension has been marked as received, not applicable or queried, and the check has been logged for the current year."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Put your current award letter beside your contribution record"
                - "List every addition the scheme offers pensioners today"
                - "Ask the agency about any addition you might be missing"
                - "Repeat the entitlement check and log the outcome @recurring(yearly)"
            - name: Illness or disability before pension age
              description: |-
                ## Purpose
                Serious illness or disability before pension age can stop contributions just when they matter, but most schemes credit years while you receive sickness or disability benefits, and some have their own disability pension that converts at pension age. Knowing the rules protects the record and avoids a gap during an already difficult time.

                ## Milestones
                1. The sickness and disability credits in your scheme identified.
                2. Any disability pension and how it interacts with the retirement pension noted.
                3. The credit seen on the record for each year of illness.
                4. The switch at pension age understood, with any claim that must be made noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Sickness or disability credits appear on the record for every year off work, and the conversion at pension age is written down."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the credits your scheme gives during sickness or disability"
                - "Check whether a disability pension converts at pension age"
                - "Confirm credits appear for each year you were unable to work"
                - "Note any claim you must make when you reach pension age"
            - name: Helping an elderly parent manage their state pension
              description: |-
                ## Purpose
                Older parents can struggle with agency phone lines, online accounts and letters, and a missed form can stop their only reliable income. Becoming formally authorised to act, through an appointee arrangement, a representative payee or a power of attorney, lets you help without borrowing their passwords.

                ## Milestones
                1. The formal ways to act for someone with the agency listed.
                2. The right arrangement agreed with your parent and set up.
                3. Their payments, letters and life certificates on a shared monthly check.
                4. A note of what you did, kept for transparency with siblings or other family.

                ## Notes
                Never use a parent's login as if you were them. Agencies treat that as impersonation even when well meant; use the official authorisation route.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A formal authority to act with the pension agency is in place, and a monthly check of the parent's payments and post has run for three months."
                cadence: rolling
              tasks:
                - "Ask the agency how a family member can be authorised to help"
                - "Agree the arrangement with your parent and complete the forms"
                - "Check your parent's pension payment and post together @recurring(monthly:15)"
                - "Keep a short note of every action you take for them"
            - name: Public-sector and contracted-out years
              description: |-
                ## Purpose
                Years spent in some public-sector schemes, or contracted out of the state scheme through a workplace pension, can reduce or change the state pension in ways a basic forecast explains poorly. Understanding how those years are treated in your scheme avoids counting the same money twice in retirement planning.

                ## Milestones
                1. Every year in a public-sector or contracted-out arrangement identified on your timeline.
                2. How your scheme treats those years, including any deduction or offset, written down.
                3. The effect on your forecast confirmed with the agency.
                4. Any recent rule change affecting these years checked.

                ## Notes
                Offset rules for public pensions have changed in several countries in recent years. Check the current position with the agency instead of relying on older articles.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note records which years were public-sector or contracted-out and how they affect the forecast, confirmed with the agency."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark public-sector and contracted-out years on your timeline"
                - "Read how your scheme treats those years today"
                - "Ask the agency to confirm the effect on your forecast"
                - "Check for any recent change to offset or deduction rules"
            - name: Transitional rules after a pension reform
              description: |-
                ## Purpose
                Reforms rarely apply cleanly to everyone: people with years under the old system often get a starting amount, protected rights or a different number of years needed. Working out which transitional rules apply to you explains odd features of your forecast and shows whether extra years would still raise it.

                ## Milestones
                1. The reforms that affect people of your age identified from official sources.
                2. Any starting amount, protected amount or special rule on your record noted.
                3. Whether further years can still increase your pension confirmed.
                4. A short note explaining your forecast under the transitional rules filed.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A filed note explains which transitional rules apply to your record and whether extra years would still increase the forecast."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the pension reforms that applied during your working life"
                - "Find any starting or protected amount shown on your record"
                - "Ask the agency whether more years would still raise your pension"
                - "Write a short note explaining your forecast under the reform"
            - name: Withdrawing or suspending a claim after starting
              description: |-
                ## Purpose
                Starting a claim is not always final: some schemes let you withdraw a claim within a short window by repaying what was received, and some let you suspend payments to earn deferral increases. Knowing whether these options exist, and their limits, matters if circumstances change soon after claiming, such as a new job or an inheritance.

                ## Milestones
                1. Whether your scheme allows withdrawal or suspension, and the time limits, confirmed.
                2. What must be repaid and how any linked benefits are affected noted.
                3. The effect on a partner's or survivor's payments checked.
                4. A decision recorded if the question arises, with the agency's written confirmation.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The scheme's withdrawal and suspension rules, time limits and repayment terms are recorded, with any decision confirmed by the agency in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your scheme allows a claim to be withdrawn or paused"
                - "Note the time limit and what would have to be repaid"
                - "Ask how a pause would affect your partner's entitlement"
                - "Get the agency's confirmation in writing before acting"
            - name: Pension age and rule change watch
              description: |-
                ## Purpose
                Governments change pension ages, formulas, uprating rules and voluntary contribution deadlines, usually with years of notice but little publicity. A quarterly look at official announcements and a yearly note of anything that affects you means plans are adjusted while there is still time to act.

                ## Milestones
                1. Official sources for pension announcements chosen, such as the agency's news page.
                2. A quarterly check scheduled.
                3. Every announced change affecting you noted with its start date.
                4. The forecast, claiming age note and gap plan updated after any relevant change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly checks of official pension announcements have been logged, with any change that affects you reflected in your plans."
                cadence: rolling
              tasks:
                - "Bookmark the agency's news page and official consultation pages"
                - "Scan official sources for announced pension rule changes @recurring(quarterly)"
                - "Update your claiming age note after any change that affects you"
---

# State Pension & Social Security

This area is for anyone who will one day rely on a state pension or social security payment, and for retirees already drawing one, whether the scheme is a UK National Insurance record, US Social Security, the Canada Pension Plan or a Caribbean National Insurance Scheme. It starts with the foundations (an online account, an official forecast, your pension age and a record checked year by year), then the routines that keep the record and later the payments correct, the rules worth learning before any decision, the decisions about voluntary contributions, missing credits and claiming age, the dated events such as the claim itself, a bereavement or a move abroad, the situations of parents, carers, part-time workers and people with records in several countries, and finally specialist cases such as public-sector years and pension reforms.

What repeats is a yearly forecast refresh and earnings check, yearly credit, tax and rate-increase checks, a monthly look at agency post and, once claiming, a monthly payment check, plus quarterly reviews of circumstances and rule changes. The Metrics log, Operational checklist and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
