---
id: personal-finance.medical-dental-cost-planning
name: Medical & Dental Cost Planning
description: "A real figure for what teeth, eyes, medicines and private treatment cost your household, the exemptions and benefits you are owed, a health pot to pay the bills, and claims made before allowances reset."
category: personal
version: 1.0.0
tags: [personal-finance, medical-dental-cost-planning, everyone, dental-costs, prescriptions, eyewear, health-cash-plan, private-treatment]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - savings-goal
    - metrics-log
    - purchase-decision
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Medical & Dental Cost Planning
          description: "Planning for healthcare costs such as dental work, prescriptions, glasses and private treatment, including health cash plans."
          projects:
            - name: Twelve-month health spending audit
              description: |-
                ## Purpose
                Most households underestimate what health costs them because the money leaves in small, scattered payments: a hygienist visit here, a prescription there, contact lenses on a card. Adding up the last twelve months from bank and card statements gives a real annual figure to plan around, split by dental, eyes, medicines and other treatment.

                ## Milestones
                1. Twelve months of statements downloaded for every account and card that pays health costs.
                2. Every dental, optician, pharmacy, physio and private clinic payment pulled into one list.
                3. Totals worked out for each category and for the whole year.
                4. The three largest single costs marked, with a note on whether each is likely to recur.

                ## Notes
                Include costs later refunded by a cash plan or insurer, and note the refund beside them, so you see the gross cost as well as what you finally paid.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of every health payment from the last twelve months, totalled by category, with one annual figure written at the top."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the last twelve months of statements for each account and card"
                - "Ask the agent to pull out every pharmacy, dental, optician and clinic payment"
                - "Total the payments by category and for the whole year"
                - "Mark which of the biggest costs will come round again next year"
            - name: Health cost exemptions and help check
              description: |-
                ## Purpose
                Many people pay for prescriptions, dental treatment or eye tests they could have free or at a reduced charge because of age, pregnancy, a medical condition, a low income or a benefit they already receive. One sitting with your health service's eligibility checker settles who in the household qualifies for what, before another charge is paid that did not need to be.

                ## Milestones
                1. Each household member checked against your health service's published exemption rules.
                2. Any certificate or card needed, such as a maternity, medical or low-income exemption, applied for.
                3. A one-page note of who is exempt from which charges, and until when.
                4. Refunds requested for recent charges paid while already entitled, where the scheme allows it.

                ## Notes
                In England, for example, prescriptions are free from age 60 and during pregnancy with a maternity exemption certificate. Rules differ by country and change over time, so use the official checker rather than memory.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every household member's exemptions are recorded on one page with expiry dates, and any certificate someone qualifies for has been applied for."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your health service's official checker for help with health costs"
                - "Run each person in the household through the checker"
                - "Apply for any exemption certificate someone qualifies for"
                - "Write who is exempt from what, with expiry dates, on one page"
                - "Ask about refunds for charges paid while already entitled"
            - name: Employer health benefits inventory
              description: |-
                ## Purpose
                Workplace benefits often include a health cash plan, dental cover, eye test vouchers or private medical insurance that staff never register for or never claim on. Reading the benefits handbook and portal once tells you what is already paid for, which family members can be covered, and what you would be buying twice if you took out your own policy.

                ## Milestones
                1. The benefits handbook or portal read for every working adult in the household.
                2. Each health benefit listed with its cover, annual limit and family options.
                3. Every benefit you are eligible for but not registered on, registered.
                4. Overlaps with policies you pay for yourself flagged for a decision.

                ## Notes
                Some health benefits are taxed as a perk, which can change your tax code. Check the next payslip and tax notice after joining.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of every employer health benefit in the household, with limits and who is covered, and no eligible benefit left unregistered."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Log in to the benefits portal and download the benefits handbook"
                - "List each health benefit with its cover, annual limit and family options"
                - "Register for any eligible benefit you have not yet joined"
                - "Flag any policy you pay for privately that your employer already provides"
            - name: Household dentist, optician and pharmacy list
              description: |-
                ## Purpose
                When a tooth cracks or glasses snap, nobody wants to hunt for numbers and prices. A single list of the practices the household uses, whether each person is seen as a public or private patient, the standard fees and how each takes payment makes every booking and every comparison quicker.

                ## Milestones
                1. Each provider listed with address, phone number and booking method.
                2. Public or private patient status recorded for each person at each practice.
                3. Standard fees written down for a check-up, hygienist visit, eye test and contact lens check.
                4. Accepted payment methods and any membership plan noted.

                ## Notes
                Start from the **Vendor** template, one record per practice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A provider list covers the dentist, optician and pharmacy for every household member, with patient status and standard fees."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every dentist, optician, pharmacy and clinic the household uses"
                - "Check each practice's website or ring for its current standard fees"
                - "Note whether each person is a public or private patient there"
                - "Refresh the fees and patient status on the provider list @recurring(yearly)"
            - name: Public and private prices for routine care
              description: |-
                ## Purpose
                The same filling, eye test or physio session can cost several times more privately than through the public system, and some people pay private rates without knowing a public option exists nearby. Knowing both prices for the ten treatments your household uses most turns every booking into an informed choice rather than a default.

                ## Milestones
                1. The ten treatments the household uses most picked out from the spending audit.
                2. The public charge for each found on your health service's published price list.
                3. Two private prices for each gathered from local providers.
                4. Typical public waiting times noted beside each price gap.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of the household's ten most used treatments shows the public charge and two private prices for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the ten treatments the household paid for most last year"
                - "Look up the public charge for each on your health service's site"
                - "Collect two private prices for each from local providers"
                - "Add typical waiting times beside each public price"
            - name: Twelve-month health cost forecast
              description: |-
                ## Purpose
                Health spending feels random, yet most of it is predictable: check-ups, a hygienist visit, glasses every couple of years, monthly lenses, repeat prescriptions and any course of treatment already planned. Writing out next year's expected costs month by month shows the true annual figure and the expensive months before they arrive.

                ## Milestones
                1. Every routine appointment for each household member placed in the month it is due.
                2. Known treatment, such as a crown or an orthodontic stage, priced from a written estimate.
                3. Repeat prescriptions and lens supplies costed for the year.
                4. A monthly and an annual total, with expected refunds shown separately.

                ## Notes
                Add a contingency line of around a tenth of the total for the lost filling or broken frame nobody planned.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month forecast of household health costs, by month and person, with an annual total and expected refunds shown separately."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every routine appointment due for each person in the next year"
                - "Add prices from the provider list and any written treatment estimates"
                - "Total the forecast by month and for the year"
                - "Rebuild the health cost forecast for the coming year @recurring(yearly)"
            - name: Health costs savings pot
              description: |-
                ## Purpose
                Paying for a crown or new varifocals out of a single month's budget is what pushes people onto a credit card. A separate pot that receives a fixed amount every payday, sized from the forecast, means health bills are paid from money already put aside.

                ## Milestones
                1. A monthly amount worked out by dividing the forecast annual total by twelve.
                2. A separate, easy-access savings pot or account opened and named for health costs.
                3. A standing order running on the day after payday.
                4. A written rule for what the pot pays for and what it does not.

                ## Notes
                Start from the **Savings goal** template.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named health savings pot receives a fixed monthly transfer equal to one twelfth of the forecast annual health costs."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Divide the forecast annual health cost by twelve"
                - "Open or name a separate savings pot for health costs"
                - "Set up a standing order for the day after payday"
                - "Check the transfer landed and the pot covers the next big bill @recurring(monthly:3)"
            - name: Health receipts and claims folder
              description: |-
                ## Purpose
                Cash plans, insurers, employer reimbursement and some tax relief schemes all ask for itemised receipts, and a card statement line is rarely accepted. One folder, paper or digital, with a simple naming rule keeps every receipt, estimate and claim reference findable for as long as it might be needed.

                ## Milestones
                1. A folder created with a section for each person and each year.
                2. A naming rule chosen, such as date, person, provider and amount.
                3. Receipts from the last twelve months gathered in, with missing ones requested.
                4. A note of how long each type of document needs to be kept.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A health receipts folder holds itemised receipts for the past twelve months under one naming rule, with any gaps requested from providers."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a folder with a section for each person and year"
                - "Write a file naming rule at the top of the folder"
                - "Photograph or download receipts from the last twelve months"
                - "Email providers for itemised copies of any missing receipts"
            - name: Finding a dental practice with public places
              description: |-
                ## Purpose
                In many areas public dental places are scarce, and people drift into private fees or a dental plan simply because they could not find a practice taking new public patients. A methodical search, a place on the waiting lists and knowing the urgent care route can cut routine dental costs to a fraction of private rates.

                ## Milestones
                1. Every practice within a reasonable travel distance checked for public patient places.
                2. Your name on every waiting list that exists, with the date added.
                3. The public urgent dental route for your area written down.
                4. A decision recorded: register publicly, stay private, or stay private while waiting.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on public or private dental registration, backed by a check of every practice within travel distance."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your health service's directory for practices taking public patients"
                - "Phone the five nearest practices about places and waiting lists"
                - "Join any waiting list and note the date you joined"
                - "Write down the public urgent dental care number for your area"
            - name: Urgent dental and eye care cost plan
              description: |-
                ## Purpose
                A lost filling on a Saturday or a sudden change in vision tends to be fixed at whatever the first available clinic charges. Knowing in advance where to go out of hours, what it costs publicly and privately, and which pot pays, stops an emergency becoming an expensive guess.

                ## Milestones
                1. Public out-of-hours dental and eye care routes for your area recorded.
                2. Private emergency appointment fees found for two local providers.
                3. What your cash plan or insurance pays towards emergency treatment confirmed.
                4. A short card with the numbers and costs kept where the household can find it.

                ## Notes
                Sudden loss of vision, severe eye pain or facial swelling with a fever need urgent care. Use your health service's urgent route first and deal with the cost afterwards.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "An emergency card lists out-of-hours dental and eye options, their typical costs and what cover pays, and the household knows where it is."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up the out-of-hours dental and eye care routes for your area"
                - "Find the emergency appointment fee at two private practices"
                - "Check what your cash plan or insurance pays for emergency treatment"
                - "Put the numbers and costs on a card everyone can find"
            - name: Monthly health spending log
              description: |-
                ## Purpose
                Once the audit and forecast exist, a monthly entry keeps them honest. Recording each health cost, who it was for, which pot paid and what refund is due shows whether spending is tracking the plan and catches refunds that never arrived.

                ## Milestones
                1. A log with columns for date, person, provider, category, amount paid and refund due.
                2. Every health cost from the current month entered.
                3. Refunds marked as received when they reach the account.
                4. Three consecutive months logged without gaps.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A health spending log holds three consecutive complete months, with each refund marked as due or received."
                cadence: rolling
              tasks:
                - "Create the health spending log with refund columns"
                - "Enter this month's health costs from statements and receipts"
                - "Log the month's health costs and tick off refunds received @recurring(monthly:12)"
                - "Chase any refund still outstanding after six weeks"
            - name: Health cash plan claims routine
              description: |-
                ## Purpose
                Cash plans only pay when you claim, usually within a set number of months of the treatment, and unclaimed allowances simply reset at the end of the plan year. A monthly claims session, with receipts ready, turns the premium into money actually returned.

                ## Milestones
                1. The claim window and annual limit for each benefit category written down.
                2. Every eligible receipt from the last month submitted.
                3. Payments received matched against the claims made.
                4. Remaining allowance per category known at the end of each quarter.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every eligible receipt is claimed within the plan's window, and remaining allowances are recorded each quarter."
                cadence: rolling
              tasks:
                - "Write down the claim window and annual limit for each benefit category"
                - "Submit claims for every eligible receipt from the past month @recurring(monthly:18)"
                - "Match each payment received against the claim it settles"
                - "Record the remaining allowance in each category @recurring(quarterly)"
            - name: Dental check-up and hygienist cycle
              description: |-
                ## Purpose
                Routine dental visits cost far less than the treatment they help avoid, and booking them on a fixed cycle spreads the cost and keeps them inside the cash plan year. Recording the recall interval your dentist recommends for each person, and booking before the reminder arrives, prevents the long gaps that end in fillings.

                ## Milestones
                1. The recall interval the dentist recommends recorded for each person.
                2. Check-ups booked in the months chosen for them.
                3. Hygienist visits booked where recommended and priced in the forecast.
                4. Any likely treatment mentioned at a visit added to the forecast.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every household member has a dental check-up booked at the interval their dentist recommended, with likely treatment added to the forecast."
                cadence: cyclic
              tasks:
                - "Ask the dentist what recall interval each person needs"
                - "Book the spring dental check-ups for the household @recurring(yearly)"
                - "Book the autumn check-ups and hygienist visits @recurring(yearly)"
                - "Ask at each visit whether any treatment is likely in the next year"
            - name: Eye test and eyewear replacement cycle
              description: |-
                ## Purpose
                Eye tests usually fall due every one or two years and new glasses tend to follow, which makes eyewear one of the most predictable costs a household has. Tracking each person's test date and prescription age lets you time purchases, use vouchers and benefits, and avoid new frames when only the lenses needed changing.

                ## Milestones
                1. Each person's last eye test date and recommended interval recorded.
                2. Tests booked in the month they fall due.
                3. A copy of every new prescription filed.
                4. Lens-only replacement considered before any new frames are bought.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each household member's eye test date, interval and latest prescription are recorded, and tests are booked in the month they fall due."
                cadence: cyclic
              tasks:
                - "Find each person's last eye test date and recommended interval"
                - "Ask the optician for a copy of every new prescription"
                - "Check whose eye test falls due this year and book it @recurring(yearly)"
                - "Ask about fitting new lenses into existing frames"
            - name: Written estimate before any treatment
              description: |-
                ## Purpose
                Disputes over health bills almost always start with a verbal quote. Asking for a written, itemised estimate before agreeing to anything beyond a routine check-up, and keeping it with the final invoice, is the single habit that prevents most billing surprises.

                ## Milestones
                1. A short set of cost questions written for any new treatment.
                2. Written estimates on file for every treatment agreed since starting.
                3. Each estimate filed with its matching invoice.
                4. Six months passed with no treatment agreed on a verbal quote alone.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every non-routine treatment over the past six months has a written estimate on file next to its final invoice."
                cadence: rolling
              tasks:
                - "Write a short list of cost questions to ask before any treatment"
                - "Save the list on your phone for use at appointments"
                - "Ask for the next treatment estimate in writing before agreeing"
                - "File each estimate with the invoice that follows it"
            - name: Health bill and insurer statement checks
              description: |-
                ## Purpose
                Health bills are error-prone: duplicate lines, a treatment billed twice, an insurer paying less than its own schedule, or an invoice sent to you for something the insurer already settled. A monthly check of every health invoice and insurer statement against what actually happened catches errors while they are still easy to fix.

                ## Milestones
                1. A list of open health invoices and insurer statements with due dates.
                2. Each invoice checked against the appointment, the estimate and what cover paid.
                3. Errors raised with the provider or insurer in writing.
                4. Nothing paid until it has been checked.

                ## Notes
                Where insurers send a statement of what they paid, such as an explanation of benefits in the United States, compare it line by line with the provider's bill before paying the balance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every health invoice and insurer statement from the last three months was checked before payment, with errors raised in writing."
                cadence: rolling
              tasks:
                - "Gather every unpaid health invoice and insurer statement"
                - "Compare each invoice with the appointment, estimate and cover paid"
                - "Email the provider or insurer about any line that looks wrong"
                - "Check the month's new health bills before paying them @recurring(monthly:20)"
            - name: Quarterly health cost review against forecast
              description: |-
                ## Purpose
                A forecast written in January is wrong by April: the dentist found a cavity, a child needed glasses, a refund came in smaller than expected. A quarterly half hour comparing actual spending with the forecast, and adjusting the monthly transfer, keeps the health pot able to pay the next bill.

                ## Milestones
                1. Actual spending for the quarter totalled from the log.
                2. The difference from the forecast explained in a line per category.
                3. The rest of the year's forecast updated.
                4. The monthly savings transfer raised or lowered if the gap looks lasting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews a year, each recording actual against forecast and any change made to the monthly transfer."
                cadence: rolling
              tasks:
                - "Put this quarter's forecast and actual figures side by side"
                - "Write one line explaining each category's difference"
                - "Run the quarterly health cost review and adjust the transfer if needed @recurring(quarterly)"
                - "Update the rest of the year's forecast"
            - name: Annual health benefits enrolment choices
              description: |-
                ## Purpose
                Most employers let staff change health benefits only once a year or after a life event, and the default is usually to roll last year's choices forward. Reviewing those choices against the coming year's forecast before the window closes decides whether to add family members, change the dental level or drop cover nobody uses.

                ## Milestones
                1. The enrolment window dates noted.
                2. Last year's claims compared with the cost of each benefit.
                3. Choices for the coming year made against the forecast.
                4. Enrolment confirmation saved and the payslip checked for the new deductions.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Health benefit choices are made actively each enrolment window, compared with the year's claims and forecast, and confirmed on the next payslip."
                cadence: cyclic
              tasks:
                - "Find out when your employer's next enrolment window opens"
                - "Compare last year's claims with what each benefit cost"
                - "Make this year's health benefit choices before the window closes @recurring(yearly)"
                - "Check the next payslip shows the new deductions"
            - name: Benefit year end allowance sweep
              description: |-
                ## Purpose
                Cash plan limits, dental cover allowances and some tax-advantaged health accounts reset on a fixed date, and anything unused is lost. Two months before the reset, checking what is left and booking any check-up, eye test or treatment that is genuinely needed uses money you have already paid for.

                ## Milestones
                1. The reset date for each plan or account in the household recorded.
                2. Remaining allowances checked two months before each reset.
                3. Needed appointments booked before the reset date.
                4. All claims submitted before the plan year closes.

                ## Notes
                Only book care that is actually needed. Spending an allowance on things you would not otherwise buy is not a saving.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year, remaining health allowances are checked two months before reset and needed care is booked and claimed before the date."
                cadence: cyclic
              tasks:
                - "Write down the reset date for every health plan and account"
                - "Check remaining allowances two months before the reset @recurring(yearly)"
                - "Book any needed appointment that fits before the reset"
                - "Submit every outstanding claim before the plan year closes"
            - name: Reading a dental treatment plan and estimate
              description: |-
                ## Purpose
                A dental treatment plan lists procedures by name or code, and the difference between filling materials, crown types or a bridge and an implant can run to hundreds. Learning what the common items mean, and which are cosmetic choices rather than clinical needs, lets you ask the right questions before signing.

                ## Milestones
                1. Fillings, crowns, root canal treatment, extractions, bridges and implants understood in plain terms.
                2. The public charge band for each item known, where one exists.
                3. Your current or most recent plan annotated with what each line is for.
                4. Questions written for the dentist about any line that is optional.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your latest dental treatment plan is annotated line by line, with optional items marked and questions written for the dentist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the practice for a copy of your current treatment plan"
                - "Look up each item in plain language on your health service's site"
                - "Mark which lines are clinical needs and which are choices"
                - "Write questions about the optional items for your next visit"
            - name: How your health cash plan pays out
              description: |-
                ## Purpose
                Each cash plan sets its own rules: a percentage back up to an annual limit per category, waiting periods for new members, claim windows and exclusions for existing conditions. Understanding your plan's rules, or those of one you are considering, stops claims being refused and makes any premium comparison honest.

                ## Milestones
                1. The plan's benefit table read, with the percentage and limit per category.
                2. Waiting periods, claim windows and exclusions noted.
                3. A worked example of what last year's costs would have returned.
                4. Any question the documents leave open answered by the provider.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the plan's limits, waiting periods, claim windows and exclusions, with a worked refund example from last year's costs."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download your cash plan's benefit table and policy terms"
                - "Write the percentage back and annual limit for each category"
                - "Work out what last year's costs would have returned"
                - "Send the provider any question the documents leave open"
            - name: Understanding private medical insurance terms
              description: |-
                ## Purpose
                Private medical insurance policies differ in the details that decide what you actually pay: the excess, outpatient limits, how existing conditions are underwritten, which hospitals and specialists are allowed, and options that route you to the public system when its wait is short. Knowing these terms before a renewal or a claim avoids discovering an exclusion in the consultant's waiting room.

                ## Milestones
                1. The difference between moratorium and full medical underwriting understood.
                2. Your policy's excess, outpatient limit and hospital list noted.
                3. Any guided consultant or waiting time option in the policy identified.
                4. The steps to get a claim authorised before treatment written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language summary of your policy's underwriting, excess, outpatient limit, hospital list and claim authorisation steps."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download your policy schedule and full terms"
                - "Note the excess, outpatient limit and hospital list"
                - "Find out how existing conditions are treated under your underwriting"
                - "Write down the steps to get a claim authorised before treatment"
            - name: Lower-cost everyday medicines
              description: |-
                ## Purpose
                Over-the-counter painkillers, allergy tablets and creams are often sold under brand names at several times the price of an identical pharmacy own-brand product. Learning to compare active ingredients, strengths and pack sizes, and asking the pharmacist when unsure, cuts the medicine cabinet bill without changing what anyone takes.

                ## Milestones
                1. The household's regularly bought medicines listed with their active ingredients.
                2. A cheaper equivalent with the same ingredient and strength found for each.
                3. The pharmacist asked to confirm any equivalence you were unsure about.
                4. The cheaper equivalents written onto the shopping list.

                ## Notes
                Never swap a prescribed medicine yourself. Ask the prescriber or pharmacist whether a different version is suitable.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each regularly bought over-the-counter medicine has a confirmed same-ingredient, same-strength cheaper equivalent on the shopping list."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the over-the-counter medicines the household buys regularly"
                - "Read the active ingredient and strength on each box"
                - "Find the own-brand version with the same ingredient and strength"
                - "Ask the pharmacist about any equivalence you are unsure of"
            - name: Questions that reveal the full cost of private treatment
              description: |-
                ## Purpose
                The fee a private consultant quotes is often a fraction of the final bill once the hospital, anaesthetist, scans, follow-up appointments and any complication care are added. Learning the questions that surface every element, and what a fixed-price package does and does not include, lets you compare quotes on the whole cost.

                ## Milestones
                1. A question list covering consultant, anaesthetist, hospital, tests, follow-up and complications.
                2. What fixed-price packages typically leave out understood.
                3. The difference between a quote, an estimate and a package price clear.
                4. The question list tested against one real quote.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written question list covers every element of a private treatment bill and has been tested against at least one real quote."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a list of every fee a private procedure can carry"
                - "Read the terms of one hospital's fixed-price package"
                - "Note what the package excludes, such as follow-ups or complications"
                - "Use the list on one real quote and record the gaps"
            - name: Asking providers for payment plans and discounts
              description: |-
                ## Purpose
                Many dental practices, opticians and private clinics offer interest-free instalments, staged treatment, discounts for paying upfront or membership rates, but rarely mention them unless asked. Practising a short, polite script makes the conversation easy and can spread a large bill without touching a credit card.

                ## Milestones
                1. A short script for asking about instalments, staging and upfront discounts.
                2. The terms of any plan offered read for interest, fees and missed-payment rules.
                3. At least one provider asked, and the answer recorded.
                4. Any instalment plan added to the bills calendar and the health log.

                ## Notes
                Some treatment finance is a credit agreement that shows on your credit file. Check whether a plan is run by the practice itself or is a loan arranged through a lender.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A payment conversation has been held with at least one provider, with the options offered and their full terms recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a three-line script asking about instalments and upfront discounts"
                - "Ask your dentist or optician what payment options they offer"
                - "Read any finance agreement for interest, fees and credit checks"
                - "Record the options offered on the provider list"
            - name: Spotting upsells at the dentist and optician
              description: |-
                ## Purpose
                Lens coatings, designer frames, whitening, premium materials and add-on cleaning are often offered at the moment of decision, when you are least able to compare. Knowing which extras are usually optional, and asking for the price of the standard option first, keeps the clinical part of the bill separate from the choices.

                ## Milestones
                1. A list of the optional extras commonly offered at the dentist and optician.
                2. The standard option's price asked for before any upgrade at the next visit.
                3. Each upgrade judged on its own price and benefit, not bundled.
                4. A note of which extras you chose to pay for, and why.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At the next dental and optical visit the standard option was priced first, and every upgrade was chosen separately with its cost noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the optional extras you were offered at your last visits"
                - "Ask for the price of the standard option before any upgrade"
                - "Decide on each extra separately from the clinical treatment"
                - "Note which extras you paid for and why"
            - name: Join, switch or cancel a health cash plan
              description: |-
                ## Purpose
                Whether a cash plan is worth having depends on one sum: the refunds you can expect against the premiums you pay in. Running your own forecast through two or three plans, including any employer plan, gives a clear answer for your household rather than a sales pitch.

                ## Milestones
                1. Expected annual refunds worked out from your forecast for two or three plans.
                2. Each plan's annual premium set against those refunds.
                3. Waiting periods and exclusions that would hit your known costs noted.
                4. A decision recorded: join, switch, keep or cancel.

                ## Notes
                Start from the **Purchase decision** template. A plan that only just breaks even can still be worth it if it smooths your budget, but say so in the decision.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the household's cash plan, backed by a comparison of premiums against forecast refunds for at least two plans."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist two or three cash plans, including any employer plan"
                - "Work out expected refunds from each using your cost forecast"
                - "Compare each plan's annual premium with its expected refunds"
                - "Record the decision and the numbers behind it"
            - name: Private medical insurance keep, change or cancel
              description: |-
                ## Purpose
                Private medical insurance premiums tend to rise each year with age and claims, and people often renew without checking whether a higher excess, a narrower hospital list or another insurer would keep useful cover for less. A review before renewal, with quotes in hand, turns an automatic payment into a deliberate choice.

                ## Milestones
                1. The renewal date and the new premium known.
                2. Two alternative quotes obtained on the same underwriting basis.
                3. The effect of a higher excess or narrower hospital list priced.
                4. A decision recorded and acted on before the renewal date.

                ## Notes
                Switching insurer can reset underwriting and bring back exclusions for existing conditions. Ask about continued underwriting before you cancel anything.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on private medical insurance is recorded before renewal, comparing the renewal price with two alternatives and at least one excess option."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your renewal date and the new premium"
                - "Ask your insurer to price a higher excess and a narrower hospital list"
                - "Get two alternative quotes on continued underwriting terms"
                - "Record the decision and act on it before the renewal date"
            - name: Dental plan, insurance or pay as you go
              description: |-
                ## Purpose
                Private dental patients usually choose between a monthly practice membership plan, a dental insurance policy and simply paying per visit. Each suits a different pattern of need, so testing them against your own last three years of dental bills shows which costs least for your mouth, not an average one.

                ## Milestones
                1. Dental costs for the last three years totalled per person.
                2. The practice membership plan's monthly fee and inclusions noted.
                3. One dental insurance policy's premium, limits and exclusions noted.
                4. A choice recorded per person, with the expected annual cost of each option.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded dental cover choice for each household member, comparing the expected annual cost of membership, insurance and pay as you go."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Total each person's dental costs for the last three years"
                - "Ask the practice for its membership plan terms and monthly fee"
                - "Get the premium, limits and exclusions of one dental insurance policy"
                - "Record the cheapest option for each person and the reasons"
            - name: Prescription prepayment break-even check
              description: |-
                ## Purpose
                Where prescriptions are charged per item, a prepayment certificate covers all of them for a fixed fee over several months or a year, and it pays for itself after a handful of items. Counting the items you expect and comparing them with the certificate price settles whether to buy one and when to renew it.

                ## Milestones
                1. The number of prescription items expected over the next twelve months counted.
                2. The per-item charge and the certificate prices noted.
                3. The break-even number of items worked out.
                4. A certificate bought if it saves money, with its expiry date in the calendar.

                ## Notes
                Some health services let you pay a yearly certificate in monthly instalments. Check current prices on your health service's own site.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The break-even item count for a prepayment certificate is worked out and the decision recorded, with any certificate's expiry date in the calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count the prescription items each person expects in the next year"
                - "Look up the per-item charge and the certificate prices"
                - "Work out how many items make the certificate cheaper"
                - "Recheck the break-even before the certificate expires @recurring(yearly)"
            - name: Buying glasses without overpaying
              description: |-
                ## Purpose
                The price of glasses is driven mostly by frames and lens extras rather than the prescription, and the same lenses can cost very different amounts on the high street and online. With your prescription and pupillary distance in hand you can compare like for like and spend only on the features that matter to you.

                ## Milestones
                1. A copy of the current prescription and pupillary distance obtained.
                2. Lens type and essential coatings agreed with the optician.
                3. Two or three like-for-like quotes gathered, including one online.
                4. Glasses bought, with the receipt filed for any claim or voucher.

                ## Notes
                Start from the **Purchase decision** template. Varifocals and strong prescriptions often benefit from an in-person fitting, so weigh the saving against that.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "New glasses are bought after comparing at least two like-for-like quotes, with the prescription, pupillary distance and receipt on file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your optician for your prescription and pupillary distance"
                - "Decide which lens type and coatings you actually need"
                - "Get like-for-like quotes from two opticians and one online seller"
                - "File the receipt and claim any voucher or cash plan benefit"
            - name: Contact lens supply cost comparison
              description: |-
                ## Purpose
                Contact lenses are a quiet monthly cost that is easy to overpay: practice subscription schemes, retail boxes and online suppliers can differ widely for the same lens. Comparing the yearly cost of your exact lens, aftercare included, shows whether the convenience of a scheme is worth its price.

                ## Milestones
                1. Your exact lens brand, type and prescription recorded.
                2. The annual cost through your current scheme worked out, aftercare included.
                3. Two other suppliers priced for a year's supply.
                4. A supplier chosen, with aftercare checks still booked whichever route wins.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A year's supply of your exact lenses has been priced from three sources, aftercare included, and the chosen route recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down your lens brand, type and full contact lens prescription"
                - "Work out what a year of lenses costs through your current scheme"
                - "Price a year's supply from two other suppliers"
                - "Book the aftercare check whichever supplier you choose"
            - name: Self-pay or wait decision for a procedure
              description: |-
                ## Purpose
                When the public wait for a cataract operation, a joint replacement, a scan or a specialist appointment runs to months, paying privately becomes a real option. The choice is a money decision as much as a health one: the full private price, lost earnings or paid help while waiting, and what cover or savings could fund it all belong on one page before anyone is paid.

                ## Milestones
                1. The expected public waiting time confirmed with the hospital or your clinician.
                2. An all-inclusive private price obtained, covering every fee and follow-up.
                3. The cost of waiting estimated, such as unpaid time off or paid help at home.
                4. Funding options listed: cover, the health pot or a payment plan.
                5. A decision recorded, with any clinical question taken to your clinician.

                ## Notes
                Before booking, ask whether you can return to the public list after a private consultation and how test results would transfer.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page comparison of waiting and paying privately, showing the full private price and the cost of waiting, ends in a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the hospital or your clinician for the expected waiting time"
                - "Get an all-inclusive private quote using your full cost question list"
                - "Estimate what waiting would cost in lost earnings or paid help"
                - "Write the decision and how it will be funded"
            - name: Hearing aid funding and purchase decision
              description: |-
                ## Purpose
                Hearing aids are provided free by some public health services, while private pairs range from a few hundred to several thousand, often bundled with years of aftercare. Comparing public provision, bundled private prices and unbundled options over five years, with batteries, servicing and loss cover included, shows the real cost over the life of the devices.

                ## Milestones
                1. Public provision and its waiting time checked with your health service.
                2. Two private quotes obtained, with aftercare and warranty priced apart from the devices.
                3. A five-year cost worked out for each option, including batteries or charging, servicing and loss cover.
                4. A decision recorded, with the hearing test results on file.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A five-year cost comparison of public provision and at least two private hearing aid options, with the chosen route recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your doctor about a referral for a public hearing assessment"
                - "Get two private quotes with aftercare priced separately"
                - "Work out a five-year cost for each option"
                - "Record the decision and file the hearing test results"
            - name: Budget for a course of major dental work
              description: |-
                ## Purpose
                Crowns, root canal treatment, implants and bridges can cost more than a month's take-home pay, and dentists often plan them over several visits. Pricing each stage, timing visits across benefit years where that is clinically sensible, and lining up the money before the first appointment turns a shock into a schedule.

                ## Milestones
                1. A written, itemised treatment plan with a price for each stage.
                2. Each stage dated, with cash plan limits per benefit year applied.
                3. A funding source matched to every stage: health pot, plan refund or instalments.
                4. Every stage paid and claimed without new borrowing.

                ## Notes
                Ask your dentist whether it is safe to space treatment out. Never delay clinically urgent work to fit a benefit year.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every stage of the dental course is priced, dated and funded before it starts, and the course is completed without new borrowing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the dentist for an itemised plan with a price per stage"
                - "Ask whether stages can safely span two benefit years"
                - "Match each stage to a funding source"
                - "Claim each stage on your cover as soon as it is paid"
            - name: Paying for a planned private procedure
              description: |-
                ## Purpose
                Once the decision to go private is made, the money still needs managing: deposits, pre-authorisation with an insurer, invoices from three or four different parties and follow-up charges weeks later. Running it as a small project with a cost tracker avoids paying twice or missing an insurer's authorisation step.

                ## Milestones
                1. Insurer pre-authorisation, if used, confirmed in writing with its reference number.
                2. A tracker listing every party that will bill you and the amount expected.
                3. Each invoice checked against the quote and paid on time.
                4. Follow-up costs and any refund settled within three months of the procedure.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every invoice for the procedure is matched to the quote or authorisation and settled, with no unexpected charge open three months later."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Call your insurer for pre-authorisation and note the reference"
                - "List every party who will invoice you and their quoted fee"
                - "Pay the deposit only after receiving written terms"
                - "Close the tracker once every invoice and follow-up is settled"
            - name: Health benefits checklist before leaving a job
              description: |-
                ## Purpose
                Employer health cover usually stops on your last day or at the end of that month, and claims for treatment after that date are refused. In the weeks before you leave, booking needed check-ups, submitting every claim and asking about continuation keeps money that would otherwise be lost.

                ## Milestones
                1. The exact end date of each health benefit confirmed with HR.
                2. Needed check-ups or eye tests booked before that date.
                3. All outstanding claims submitted.
                4. Continuation or individual policy options priced, and a decision made.

                ## Notes
                Some insurers let leavers move to an individual policy without new exclusions if they ask within a set period. Ask before cover ends.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every health benefit's end date is confirmed, all claims are submitted before it, and a continuation decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask HR for the end date of each health benefit"
                - "Book any check-up or eye test that fits before cover ends"
                - "Submit every outstanding claim before your last day"
                - "Ask the insurer about continuing cover as an individual"
            - name: Pregnancy and first-year health costs
              description: |-
                ## Purpose
                Pregnancy often brings free prescriptions and dental care, and babies usually qualify for free care too, yet many families still pay charges because nobody applied for the certificate. Planning the health costs of pregnancy and the first year, from exemptions to cash plan maternity benefits, protects a budget already stretched by parental leave.

                ## Milestones
                1. Pregnancy-related exemptions checked and the certificate applied for.
                2. A dental check-up booked while charges are waived, where that applies.
                3. Cash plan or employer benefits for pregnancy and birth noted and claimed.
                4. The baby added to any family cover within its deadline.

                ## Notes
                In England, for example, a maternity exemption certificate covers prescriptions and dental care during pregnancy and for twelve months after the birth.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Exemption certificates are in place, maternity benefits are claimed and the baby is added to family cover within its deadline."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your midwife or doctor about the maternity exemption form"
                - "Book a dental check-up while charges are waived"
                - "Check what your cash plan pays out for a birth"
                - "Add the baby to any family health cover before its deadline"
            - name: Children's dental, eye and medicine costs
              description: |-
                ## Purpose
                Children often qualify for free dental care, eye tests, glasses vouchers and prescriptions, but the rules change at set ages and when they leave full-time education. Knowing each child's entitlements, and when they end, avoids paying for what is free now and being caught out by charges later.

                ## Milestones
                1. Each child's entitlements to free dental, eye and prescription care recorded.
                2. The age or date each entitlement ends noted.
                3. Glasses vouchers or similar support used for every child who needs glasses.
                4. Sports mouthguards, breakages and spare glasses included in the forecast.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each child's health cost entitlements and end dates are recorded, and a voucher is used for every pair of glasses bought."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each child's entitlements to free dental, eye and prescription care"
                - "Note the age at which each entitlement ends"
                - "Ask the optician about glasses vouchers for any child who needs them"
                - "Check each child's entitlements around their birthday @recurring(yearly)"
            - name: Children's orthodontic treatment budget
              description: |-
                ## Purpose
                Braces can be free for children whose need meets a public threshold, but many families pay privately because the need falls below it, the wait is long or they want a different appliance. Pricing the options early leaves time to save, compare practices or arrange instalments before treatment starts.

                ## Milestones
                1. An orthodontic assessment done and the public eligibility outcome recorded.
                2. Private quotes from two practices, including retainers and replacements.
                3. A funding plan for the total cost, including instalments if used.
                4. Retainer replacement costs added to the long-term forecast.

                ## Notes
                Ask what a lost or broken retainer costs to replace. It is one of the most common surprises in orthodontic budgets.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A funded plan for the child's orthodontic treatment, based on the public eligibility outcome and two private quotes that include retainers."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the dentist for an orthodontic referral and the public eligibility outcome"
                - "Get quotes from two orthodontists that include retainers"
                - "Choose how the total will be paid"
                - "Add retainer replacement costs to the long-term health plan"
            - name: Health cost planning for retirement
              description: |-
                ## Purpose
                Retirement often ends employer health cover just as dental work, glasses, hearing and other treatment become more frequent. Planning the change a year ahead, with age-based exemptions checked and a realistic annual health budget built into retirement income, stops health bills eating into savings meant to last decades.

                ## Milestones
                1. Employer health benefits that end at retirement listed with their end dates.
                2. Age-based exemptions, such as free prescriptions or eye tests, confirmed.
                3. A realistic annual health budget for retirement written, covering teeth, eyes, hearing and medicines.
                4. A decision made between individual cover and self-funding from the health pot.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An annual retirement health budget is written, age-based exemptions are confirmed and a decision on replacing employer cover is recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the health benefits that stop when you retire"
                - "Check which age-based exemptions you will qualify for and when"
                - "Write an annual health budget covering teeth, eyes, hearing and medicines"
                - "Price individual cover against self-funding from the health pot"
            - name: Managing an older relative's health costs
              description: |-
                ## Purpose
                Carers often end up paying for a parent's prescriptions, dental visits, glasses or private physio, and without a record it becomes hard to know what is being spent, what could be free and whose money is paying. A simple shared record and an exemption check protect both the relative's money and your own.

                ## Milestones
                1. The relative's exemptions and help with health costs checked with their consent.
                2. An agreed rule on whose money pays for what.
                3. A separate log of costs paid on their behalf, with receipts.
                4. Their dentist, optician and pharmacy added to the provider list.

                ## Notes
                Act only with the relative's consent or a legal authority to manage their affairs, and keep their money separate from yours.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A cost log for the relative is kept with receipts, their exemptions have been checked, and an agreed rule says whose money pays."
                cadence: rolling
              tasks:
                - "Ask your relative which health costs they want help with"
                - "Run their details through the health cost exemption checker together"
                - "Start a separate log of costs you pay on their behalf"
                - "Go through the log and receipts with them @recurring(quarterly)"
            - name: Long-term condition cost plan
              description: |-
                ## Purpose
                Living with a long-term condition brings steady costs beyond prescriptions: equipment, travel and parking for appointments, special foods, private therapy and repairs to aids. Mapping them for a year, alongside the exemptions and reliefs some countries offer for medicines and disability equipment, shows the true cost and where help can be claimed.

                ## Milestones
                1. Every recurring cost linked to the condition listed for a year.
                2. Exemptions and reliefs for the condition checked, such as free prescriptions or tax relief on equipment.
                3. Concessions that lower costs, such as a prepayment certificate or hospital parking help, applied for.
                4. The condition's annual cost built into the household forecast.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month cost map for the condition exists, every applicable exemption or concession has been applied for, and the total is in the forecast."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every cost linked to the condition over the last three months"
                - "Check exemptions and concessions for the condition with your health service"
                - "Ask the hospital about parking or travel help for regular appointments"
                - "Review condition-related costs and claims @recurring(quarterly)"
            - name: Health cover when self-employed
              description: |-
                ## Purpose
                Freelancers and the self-employed have no employer cash plan or dental cover, and every appointment in working hours costs income as well as fees. Deciding what cover, if any, to buy and setting aside a health amount from each invoice gives the same predictability an employee gets from benefits.

                ## Milestones
                1. Last year's health costs and the working hours lost to appointments estimated.
                2. Individual cash plan and dental cover options priced.
                3. A decision recorded between buying cover and self-funding.
                4. A fixed health amount moved from each paid invoice into the health pot.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on individual health cover, plus a fixed health set-aside from every paid invoice into the health pot."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Estimate last year's health costs and working hours lost to appointments"
                - "Price an individual cash plan and dental cover"
                - "Decide between buying cover and self-funding"
                - "Set a fixed health amount to move from each invoice paid"
            - name: Health costs when leaving home or studying
              description: |-
                ## Purpose
                Leaving home often means leaving the family dentist, a parent's cover and free care tied to age or full-time education, just as money is tight. Registering locally, checking low-income help and knowing what a check-up and glasses cost lets a student or young worker budget for health rather than skip it.

                ## Milestones
                1. A doctor and dentist registered near your term-time or new address.
                2. Eligibility for low-income help with health costs checked.
                3. The end date of any parent's family cover confirmed.
                4. A small monthly health amount added to the student or first-job budget.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A local doctor and dentist are registered, low-income help is checked, and a monthly health amount is in the budget."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Register with a doctor and dentist near your new address"
                - "Check whether you qualify for low-income help with health costs"
                - "Ask your parents when their family cover stops including you"
                - "Add a monthly health amount to your budget"
            - name: Dental and medical treatment abroad cost check
              description: |-
                ## Purpose
                Implants, crowns and some procedures can be far cheaper abroad, but the headline price leaves out flights, accommodation, time off, repeat trips and what happens if something fails once you are home. Costing the whole package, including aftercare at home, gives a fair comparison with treatment locally.

                ## Milestones
                1. A like-for-like treatment plan priced at home and abroad.
                2. Travel, accommodation, time off and the number of trips costed.
                3. Aftercare, guarantees and the cost of fixing problems at home established.
                4. A decision recorded with full totals for both options.

                ## Notes
                Check the clinic's registration with its local regulator, and how you would complain or claim compensation from another country, before paying any deposit.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A total cost comparison of treatment abroad and at home, including travel, time off and aftercare, ends in a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Get an itemised plan for the treatment from a local provider"
                - "Ask an overseas clinic to quote against the same plan"
                - "Add travel, accommodation, time off and repeat trips to the overseas total"
                - "Ask a local dentist what repairing failed overseas work would cost"
            - name: Tax rules on health costs and benefits
              description: |-
                ## Purpose
                Depending on where you live, medical expenses may earn tax relief, a tax-advantaged health account may pay for them, or an employer's health insurance may be taxed as a perk. Learning the rules that apply to you, and keeping the records they require, means you claim what is due and are not surprised by tax on a benefit.

                ## Milestones
                1. The tax authority's guidance on medical expenses and health benefits read.
                2. Any relief or account the household can use identified, with its deadlines.
                3. Records kept in the form the tax authority asks for.
                4. Health benefits taxed as perks checked against your tax code or return.

                ## Notes
                Ireland and Canada, for example, give relief on some medical expenses, and the United States has health savings and flexible spending accounts. Ask a tax professional about anything unclear.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists every health-related tax relief, account or taxable benefit that applies to the household, with deadlines and the records needed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your tax authority's guidance on medical expenses"
                - "Note any relief or tax-advantaged account you can use and its deadline"
                - "Check whether employer health cover appears as a taxable benefit"
                - "Ask the agent to summarise the records each relief requires"
            - name: Challenging a wrong health bill or refused claim
              description: |-
                ## Purpose
                Bills for treatment that was never agreed, charges that should have been exempt and cash plan claims refused on a technicality can often be reversed, but only if challenged in writing and in time. Knowing the complaint route for providers, insurers and the independent ombudsman means a disputed amount is pursued rather than paid out of frustration.

                ## Milestones
                1. The disputed bill or refusal, the estimate and the policy wording gathered.
                2. A written complaint sent to the provider or insurer stating the outcome wanted.
                3. The deadline for escalating to the ombudsman or regulator noted.
                4. The dispute resolved or escalated, with the outcome recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written complaint is sent within the provider's or insurer's time limit, and the dispute is resolved or escalated with the outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather the bill, estimate, receipts and policy wording"
                - "Ask the agent to draft a complaint letter stating the outcome you want"
                - "Send the complaint and note the response deadline"
                - "Escalate to the ombudsman if no fair answer arrives in time"
            - name: Five-year household health cost plan
              description: |-
                ## Purpose
                Some health costs come round less than once a year: hearing aids every few years, a replacement crown, a child's braces, varifocals as eyes change. Laying out five years of expected large costs shows whether the monthly health saving is enough and when the pot needs to be fuller.

                ## Milestones
                1. Known and likely large health costs for each person placed on a five-year timeline.
                2. Each item priced from a quote or a typical fee.
                3. The health pot's projected balance checked against each year's costs.
                4. The monthly transfer adjusted if any year runs short.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A five-year timeline of large household health costs is priced, with the health pot's projected balance shown for each year."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "List every large health cost each person might face in five years"
                - "Price each item from a quote or typical fee"
                - "Project the health pot balance against each year's costs"
                - "Roll the five-year plan forward and reprice it @recurring(yearly)"
            - name: Lifetime cost of replacing a missing tooth
              description: |-
                ## Purpose
                Implants, bridges and dentures differ not only in upfront price but in how long they last, the upkeep they need and what replacing them costs. A twenty-year cost comparison built from your dentist's estimates puts the choice on a fair footing alongside the clinical advice.

                ## Milestones
                1. Your dentist's view on which options suit you recorded.
                2. Upfront price, expected lifespan and upkeep cost noted for each option.
                3. A twenty-year cost worked out for each.
                4. A choice made with your dentist, with the chosen option's upkeep in the forecast.

                ## Notes
                Clinical suitability comes first. Use the cost comparison to choose among the options your dentist says are right for you.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A twenty-year cost comparison of the options your dentist recommends is written, with the chosen option recorded and its upkeep in the forecast."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your dentist which replacement options suit your mouth"
                - "Get the upfront price, lifespan and upkeep cost for each option"
                - "Work out a twenty-year cost for each option"
                - "Add the chosen option's upkeep to the five-year health plan"
---

# Medical & Dental Cost Planning

This area is for anyone who pays for teeth, eyes, medicines or private treatment and wants those bills planned rather than sprung on them. It starts with the foundations (a year of health spending added up, exemptions and employer benefits checked, a forecast and a dedicated health pot), then the routines that keep claims, check-ups and invoices in order, the skills for reading treatment plans and policy terms, decisions about cash plans, insurance, prescriptions and eyewear, dated events such as a course of dental work or leaving a job, the situations of parents, retirees, carers, students and the self-employed, and finally specialist questions like treatment abroad and tax.

What repeats is a payday transfer into the health pot, a monthly log, claims session and invoice check, a quarterly review against the forecast, and yearly rounds of check-ups, eye tests, benefit enrolment and allowance sweeps before plan years reset. The Metrics log, Savings goal, Vendor and Purchase decision templates pair with the log, the pot, the provider list and the bigger buying choices. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
