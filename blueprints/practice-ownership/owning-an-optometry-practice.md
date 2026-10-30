---
id: practice-ownership.owning-an-optometry-practice
name: Owning an Optometry Practice
description: "Eye exams and recalls, frame and lens stock, lab accounts and remakes, retail margins, clinical equipment and the services that keep an independent optometry practice busy and inspection-ready."
category: business
version: 1.0.0
tags: [practice-ownership, owning-an-optometry-practice, small-business, founder, optometry, optical-retail, eyewear, patient-recalls]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - vendor
    - purchase-decision
    - compliance-control
    - risk-register
    - onboarding-30-60-90
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Owning an Optometry Practice
          description: "Running an optometry practice: eye exams, frame and lens stock, lab relationships, retail sales, clinical equipment and patient recalls."
          projects:
            - name: Optometry practice owner's fact sheet
              description: |-
                ## Purpose
                Most owners carry the practice's key facts in their head: registration numbers, contract references, landlord, bank, insurers, lab account numbers and the alarm code holder. Putting them on one page means a locum, a new manager or your family can keep the doors open on a day you are not there, and every renewal starts from the same source.

                ## Milestones
                1. One page listing the legal entity, registration and contract numbers, premises and lease contacts, bank, insurers and accountant.
                2. Lab, frame and contact lens supplier account numbers added with their order contacts.
                3. The page stored where your practice manager and one trusted person can reach it.
                4. A review date set for the page each year.

                ## Notes
                Keep passwords out of the sheet. Point to the password manager instead and name who holds the master access.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page fact sheet with every registration, contract, supplier and adviser contact exists and two named people know where it is."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the legal entity name, company number and practice contract references"
                - "Add lab, frame and contact lens supplier account numbers and order contacts"
                - "Tell your practice manager and one trusted person where the sheet is kept"
                - "Update the fact sheet with any changed contacts or numbers @recurring(yearly)"
            - name: Practice and optometrist registration check
              description: |-
                ## Purpose
                Every optometrist, dispensing optician and contact lens practitioner who sees patients must hold a current registration, and in many countries the practice or business itself must also be registered or listed for public eye care work. One lapsed entry can void insurance cover and make claims for those appointments unpayable, so a single register of who holds what, and when it expires, is the cheapest protection you have.

                ## Milestones
                1. Each clinician's registration number, category and expiry date checked on the regulator's public register.
                2. The practice's own business registration, premises listing and any public contract status confirmed.
                3. Any student, pre-registration or trainee supervision arrangements written down with the supervisor named.
                4. A renewal calendar showing every expiry date for the next twelve months.

                ## Notes
                Start from the **Compliance control** template. Check the public register yourself rather than relying on a certificate on the wall.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register showing every clinician's and the practice's current registration and expiry date, each verified against the official public register."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up each clinician on the optical regulator's public register"
                - "Record registration numbers, categories and expiry dates in one register"
                - "Confirm the practice's own registration and public contract status"
                - "Check every registration on the public register before renewal season @recurring(yearly)"
            - name: Clinical equipment and instrument register
              description: |-
                ## Purpose
                Slit lamps, tonometers, autorefractors, focimeters, fundus cameras, OCT and visual field analysers make up most of the asset value in a consulting room, and each has its own service interval and calibration rule. A register with serial numbers, ages, warranty dates and service history tells you what to budget for, what to insure and what an inspector or buyer will ask to see.

                ## Milestones
                1. Every clinical instrument listed with make, model, serial number, room and purchase date.
                2. Warranty end dates, service contracts and last calibration dates added.
                3. Replacement value estimated for each item and shared with the insurer.
                4. Instruments older than their expected life flagged for the capital plan.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An instrument register covering every consulting and pre-test room, with serial numbers, service dates and replacement values filled in."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Walk each consulting and pre-test room and list every instrument with its serial number"
                - "Find the purchase invoices, warranties and service reports for each item"
                - "Estimate replacement values and send the list to your insurer"
                - "Flag instruments past their expected life for the capital plan"
            - name: Frame and lens stock baseline count
              description: |-
                ## Purpose
                Frames on the wall are cash you have already spent, and many independents hold two or three years of sales on display without knowing it. A full count by supplier, brand, price band and age shows how much money is sitting in stock, which lines sell and which have not moved in eighteen months.

                ## Milestones
                1. Every frame on display and in drawers counted and matched to the practice system.
                2. Stock valued at cost and grouped by supplier, brand and price band.
                3. Frames older than twelve and twenty-four months identified.
                4. Stock turn for the last year worked out from cost of frames sold and average stock.

                ## Notes
                Count contact lens trial sets, ready readers and sunglasses separately so they do not blur the frame figures.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated stock count with value at cost, an age breakdown and a stock turn figure for frames is recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the current frame stock list from the practice system"
                - "Count the display and drawers and correct the system for missing or extra frames"
                - "Group the stock by supplier, price band and months since delivery"
                - "Work out last year's frame stock turn and write it at the top of the count"
            - name: Eye examination and dispensing price list
              description: |-
                ## Purpose
                Patients compare exam fees, lens packages and contact lens plans with the chain down the road, and staff who quote from memory give different prices on different days. A written list covering private exams, extra tests, lens types, coatings, repairs and contact lens fittings makes quoting consistent and gives you a base to review each year.

                ## Milestones
                1. Exam fees listed for adults, children, contact lens checks and any extra imaging or tests.
                2. Lens prices set out by type and coating, with any package or second-pair offers.
                3. Repair, adjustment and replacement charges written down.
                4. The list loaded into the practice system and shared with every member of staff.

                ## Notes
                Where a public scheme or vision plan sets the fee for an exam or voucher, list it separately so staff know which prices you control.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One price list covering exams, lenses, coatings, repairs and contact lens fees is loaded in the practice system and used by all staff."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather every fee currently charged from the till system and staff"
                - "Set lens prices by type and coating with any package rules"
                - "Add repair and adjustment charges to the list"
                - "Load the list into the practice system and brief the team on it"
            - name: Active patient base and recall baseline
              description: |-
                ## Purpose
                Recalls are the engine of an optometry practice, because most patients return only when invited. Knowing how many patients have been seen in the last two years, how many are overdue and how many recalls turn into booked exams tells you whether the book is growing or quietly shrinking.

                ## Milestones
                1. Active patients counted, defined as those examined in the last 24 months.
                2. Overdue recalls counted by age group and recall interval.
                3. The share of last year's recalls that turned into a booked exam worked out.
                4. Contact details checked for a sample of 50 records to estimate how many are out of date.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Active patient count, overdue recall count and recall conversion rate are recorded with the date they were measured."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run a report of patients examined in the last 24 months"
                - "Count overdue recalls and split them by age group"
                - "Work out how many of last year's recalls led to a booked exam"
                - "Check contact details on a sample of 50 patient records"
            - name: Optometry profit and loss by income stream
              description: |-
                ## Purpose
                Eye exams, spectacles, contact lenses, enhanced services and retail sundries each carry very different margins, and a single turnover figure hides which ones pay the rent. Splitting last year's accounts into those streams, with the cost of goods and clinical time against each, shows where profit really comes from.

                ## Milestones
                1. Last year's income split into exams, spectacles, contact lenses, public or plan fees and other services.
                2. Cost of frames, lenses and contact lenses matched to each stream.
                3. Clinician and dispensing staff time allocated roughly across the streams.
                4. A one-page summary of gross margin by stream agreed with your accountant.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary showing income and gross margin for each income stream, reviewed with the practice accountant."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your accountant for last year's income and cost detail by nominal code"
                - "Split income into exams, spectacles, contact lenses and services"
                - "Match lab, frame and lens costs to the right stream"
                - "Ask the agent to draft a one-page margin summary from the figures"
            - name: Optical practice insurance schedule
              description: |-
                ## Purpose
                Optometrists usually need their own professional indemnity, while the business needs cover for stock, instruments, premises, public liability, employers' liability and business interruption. Holding one schedule of every policy, its limit and its renewal date shows the gaps, such as stock left uninsured overnight or a locum without their own indemnity.

                ## Milestones
                1. Every policy listed with insurer, limit, excess and renewal date.
                2. Each clinician's professional indemnity confirmed, including locums.
                3. Stock and instrument values in the policy checked against the registers.
                4. Gaps or overlaps raised with the broker and a decision recorded for each.

                ## Notes
                Start from the **Risk register** template to log each gap and its owner. Ask the broker in writing whether stock in transit to and from labs is covered.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An insurance schedule listing every policy and clinician indemnity, with each identified gap resolved or accepted in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect every current policy document into one folder"
                - "List insurer, limit, excess and renewal date for each policy"
                - "Ask each clinician and locum for proof of their own indemnity"
                - "Review the schedule with your broker before the main renewal @recurring(yearly)"
            - name: Supplier and lab account map
              description: |-
                ## Purpose
                A typical independent buys from one or two lens labs, a dozen frame suppliers, two contact lens companies and perhaps a buying group, each with its own terms, rebates and minimum orders. Mapping who you buy from, on what terms and how much each account is worth a year shows where you have negotiating power and where you are paying list price out of habit.

                ## Milestones
                1. Every lab, frame, contact lens and consumables supplier listed with annual spend.
                2. Payment terms, rebate or discount levels and returns rules recorded for each.
                3. Buying group membership terms and the savings it actually delivers checked.
                4. The three accounts with the most room to renegotiate identified.

                ## Notes
                Start from the **Vendor** template for each of your largest five suppliers.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A supplier map with annual spend, terms and rebates for every account, and three named accounts chosen for renegotiation."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull last year's spend by supplier from the accounts"
                - "Record terms, rebates and returns rules for each supplier"
                - "Check what the buying group membership saved against its fee"
                - "Pick three accounts to renegotiate and note what you will ask for"
            - name: Daily clinic opening and closing checklist
              description: |-
                ## Purpose
                The small checks at the start and end of the day decide whether the first patient waits: test charts and instruments switched on, diary printed, jobs for collection checked, till floated, and at night the display secured and stock locked. A written checklist lets any trained member of staff open or close properly, not just the person who has always done it.

                ## Milestones
                1. Opening and closing steps written as two short lists, each under fifteen items.
                2. The list printed by the staff door and loaded into the practice app if you use one.
                3. Two additional staff trained to open and close without help.
                4. The checklist completed every day for a month with gaps fixed.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Opening and closing checklists completed and initialled on every trading day for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Write the opening and closing steps from a normal day"
                - "Print the checklist and post it by the staff entrance"
                - "Train two more staff to open and close using the list"
                - "Complete and initial the opening and closing checklist @recurring(daily)"
            - name: Weekly recall list and booking routine
              description: |-
                ## Purpose
                Recall letters and texts go out automatically in most systems, but the patients who ignore the first reminder are where bookings are lost. A fixed weekly slot to work the overdue list, by phone for older patients and children and by text for the rest, turns reminders into appointments and fills quiet days ahead of time.

                ## Milestones
                1. First, second and final recall messages written and set up in the practice system.
                2. A weekly overdue recall list produced and given to a named person.
                3. Phone calls prioritised for patients over 60, children and those with clinical recall reasons.
                4. Recall conversion measured monthly and compared with the baseline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The overdue recall list is worked every week for three months and recall conversion is higher than the recorded baseline."
                cadence: rolling
              tasks:
                - "Check the wording and timing of each automated recall message"
                - "Name the person who owns the overdue list each week"
                - "Work the overdue recall list by phone and text @recurring(weekly:mon)"
                - "Compare recall conversion with the baseline at the end of each month"
            - name: Spectacle job tracking from order to collection
              description: |-
                ## Purpose
                Spectacles that arrive late, wrong or sit uncollected in a drawer cost goodwill and cash, and lost jobs are one of the commonest complaints in optical practice. Tracking every job from order to lab, delivery, checking, collection and payment, with a weekly review of anything overdue, catches problems before the patient phones.

                ## Milestones
                1. Every job status visible in one place: ordered, at lab, received, checked, collected.
                2. A rule for chasing the lab when a job passes its expected date.
                3. Uncollected jobs older than 30 days contacted and balances due followed up.
                4. Overdue jobs reviewed every week, with average turnaround recorded monthly.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No job is more than five working days past its expected date without a recorded chase, measured over three months."
                cadence: rolling
              tasks:
                - "Set up job statuses in the practice system or a shared tracker"
                - "Agree expected turnaround times with each lab for each lens type"
                - "Review overdue and uncollected jobs and chase each one @recurring(weekly:wed)"
                - "Phone patients whose glasses have waited more than 30 days for collection"
            - name: Monthly lab invoice and remake reconciliation
              description: |-
                ## Purpose
                Lens lab statements mix new jobs, remakes, warranty claims, credits and surcharges, and few practices check them line by line. Matching each month's invoices against your own job list, and coding every remake by cause (prescribing, dispensing, measuring or lab error), recovers money owed and shows where mistakes start.

                ## Milestones
                1. Each lab statement matched to the practice job list every month.
                2. Credits for lab errors and warranty claims requested and received.
                3. Every remake coded by cause with the clinician or dispenser involved.
                4. Remake rate tracked monthly as a share of total jobs.

                ## Notes
                A remake rate is only useful if causes are coded honestly. Treat it as learning for the team, not blame.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reconciliations completed, with every remake coded by cause and all lab credits claimed."
                cadence: rolling
              tasks:
                - "Ask each lab for statements in a format you can match against jobs"
                - "Match the month's lab invoices and claim credits for lab errors @recurring(monthly:8)"
                - "Code each remake by cause and person involved"
                - "Share the remake rate and main causes at the team meeting"
            - name: Frame stock reorder and aged stock review
              description: |-
                ## Purpose
                Stock decisions made by sales reps on visit days tend to add frames, not remove them. A monthly reorder based on what actually sold, plus a quarterly look at frames older than a year for returns, swaps or clearance, keeps the display fresh and the cash in the bank instead of on the wall.

                ## Milestones
                1. Monthly sales by frame line compared with what is on display.
                2. Reorders placed only for lines that sold, within a set monthly budget.
                3. Frames older than twelve months listed each quarter with an action for each.
                4. Returns and swap allowances used with each supplier that offers them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Frame stock value at cost stays within the agreed budget and the share of frames older than twelve months falls over two quarters."
                cadence: rolling
              tasks:
                - "Set a monthly frame buying budget based on last year's frame sales"
                - "Reorder frames that sold last month within the budget @recurring(monthly:15)"
                - "List frames older than twelve months and choose return, swap or clearance @recurring(quarterly)"
                - "Ask each supplier what returns or swap allowance their terms include"
            - name: Contact lens aftercare and supply schedule
              description: |-
                ## Purpose
                Contact lens wearers need regular aftercare checks, and in many places lenses should only be supplied while a valid specification is in date. Patients drift away when supply lapses or they buy online, so a monthly list of overdue aftercares and expiring direct debit or supply plans keeps wearers safe and keeps the revenue.

                ## Milestones
                1. All contact lens wearers listed with their last aftercare date and supply arrangement.
                2. A monthly overdue aftercare list sent to a named person to call.
                3. Supply plans checked so lenses are not dispatched on an expired specification.
                4. Lapsed wearers counted each quarter and contacted with a clear offer.

                ## Notes
                Check your regulator's and your country's rules on supplying contact lenses and releasing specifications before setting the policy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every wearer has an aftercare date on record and the overdue aftercare list is worked each month for six months."
                cadence: rolling
              tasks:
                - "Run a report of contact lens wearers with last aftercare and supply method"
                - "Check the rules for supplying lenses on an expired specification"
                - "Work the overdue aftercare and expiring supply plan list @recurring(monthly:20)"
                - "Write a short script staff use when calling lapsed wearers"
            - name: Monthly optometry practice numbers review
              description: |-
                ## Purpose
                Five numbers explain most of an optical practice's month: exams done, conversion from exam to spectacle sale, average dispensing value, remake rate and cash in the bank. Looking at them on the same day each month, against last month and last year, shows a slipping conversion or falling dispense value while there is still time to act.

                ## Milestones
                1. A one-page monthly sheet with exams, conversion, average dispense value, remakes and cash.
                2. Figures pulled from the practice system on a fixed day.
                3. Each month compared with last month and the same month last year.
                4. One action agreed each month from what the numbers show.

                ## Notes
                Start from the **Metrics log** template. Count conversion per clinician as well as for the practice, but share it with care.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews logged, each with the five figures, comparisons and one recorded action."
                cadence: rolling
              tasks:
                - "Create a monthly sheet with the five figures from the metrics log template"
                - "Pull the five figures and compare them with last month and last year @recurring(monthly:5)"
                - "Write down one action for the month from the review"
            - name: Equipment calibration and servicing calendar
              description: |-
                ## Purpose
                An uncalibrated tonometer or a drifting focimeter gives wrong readings without any sign of fault, and fields analysers and OCTs need software updates and periodic servicing to stay reliable. A calendar drawn from the instrument register, with each check booked before it falls due, protects clinical decisions and the warranty.

                ## Milestones
                1. Calibration and service intervals for each instrument taken from the manufacturer's guidance.
                2. Every check and service date entered in a shared calendar.
                3. In-house checks, such as tonometer verification and focimeter checks, assigned to named staff.
                4. Service reports filed against each instrument in the register.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every instrument on the register has its last and next calibration or service date recorded, with none overdue."
                cadence: rolling
              tasks:
                - "Find each manufacturer's recommended calibration and service interval"
                - "Book the next service dates for every instrument in the calendar"
                - "Run the in-house instrument checks and file the results @recurring(quarterly)"
                - "File each service report against its instrument in the register"
            - name: Referral and urgent eye case log
              description: |-
                ## Purpose
                Referrals to ophthalmology, the hospital eye service or the patient's doctor are where clinical risk sits, because a referral that was never received or never acted on can mean lost sight. A log of every referral with its urgency, method and outcome, checked weekly, closes the loop and gives you evidence if a case is ever questioned.

                ## Milestones
                1. A referral log with patient reference, reason, urgency, date sent, method and outcome.
                2. Urgency categories and same-day routes written for flashes and floaters, sudden vision loss and red painful eyes.
                3. Every referral older than its expected response time followed up.
                4. Outcomes added to the patient record and discussed at clinical meetings.

                ## Notes
                Agree the urgency categories with your local eye care pathway or clinical adviser. The log organises referrals; clinical judgement stays with the optometrist.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every referral in the last three months has a recorded outcome or a documented follow-up within its expected response time."
                cadence: rolling
              tasks:
                - "Set up a referral log with urgency, date, method and outcome columns"
                - "Write the same-day routes for urgent eye presentations and post them at reception"
                - "Follow up referrals with no response past their expected time @recurring(weekly:fri)"
                - "Add referral outcomes to the patient record"
            - name: Eye care claims and vision plan submission routine
              description: |-
                ## Purpose
                Public sight test fees, spectacle vouchers and vision plan or insurer claims are paid only when submitted correctly and on time, and rejected claims are rarely resubmitted unless someone owns them. A weekly claims run with a rejection list protects income that the practice has already earned.

                ## Milestones
                1. Every scheme and plan the practice bills listed with its submission deadline and rules.
                2. Claims submitted in a weekly batch by a named person.
                3. Rejected or queried claims logged with reason and resubmitted.
                4. Monthly totals of claims submitted, paid and outstanding recorded.

                ## Notes
                In the UK, for example, this covers General Ophthalmic Services forms; elsewhere it may be national schemes or private vision plans.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Claims are submitted every week and no rejected claim stays unresolved for more than 30 days, measured over three months."
                cadence: rolling
              tasks:
                - "List each scheme and plan with its deadlines and evidence rules"
                - "Submit the week's claims and log any rejections @recurring(weekly:tue)"
                - "Resubmit rejected claims with the missing evidence"
                - "Record claims submitted, paid and outstanding each month"
            - name: Morning huddle and monthly team meeting
              description: |-
                ## Purpose
                Short daily huddles catch the day's problems early: a patient with a complaint coming in, a job not back from the lab, a clinician running late. A monthly meeting gives room for numbers, remakes, training and ideas from front-of-house staff who see what patients say on the way out.

                ## Milestones
                1. A five-minute huddle format agreed: diary, jobs due, patients to watch.
                2. A monthly team meeting fixed in the diary with a standing agenda.
                3. Actions from each meeting recorded with an owner.
                4. Huddles running on most days for a month.

                ## Notes
                Start the monthly meeting from the remake rate and one patient story, good or bad.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly team meetings held for three months with written actions, and huddles held on most trading days."
                cadence: rolling
              tasks:
                - "Write a three-line huddle agenda and pin it at the front desk"
                - "Block the monthly meeting before clinic opens"
                - "Hold the monthly team meeting and record actions with owners @recurring(monthly:12)"
            - name: Reading optical retail margins and gross profit
              description: |-
                ## Purpose
                Optical owners often trained as clinicians and learned retail on the job, so mark-up, gross margin, stock turn and average dispensing value get confused. Learning how these fit together, using your own accounts, makes supplier negotiations, pricing and stock decisions far less of a guess.

                ## Milestones
                1. Mark-up and gross margin explained in your own words with an example from your price list.
                2. Gross margin on spectacles, contact lenses and sundries calculated from last year's accounts.
                3. The effect of a 5 percent change in average dispensing value on profit worked out.
                4. Three questions answered by your accountant on how your accounts treat stock.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written gross margin figures for each product stream and a worked example of a pricing change, checked with the accountant."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work out the mark-up and margin on your best-selling lens package"
                - "Calculate last year's gross margin on spectacles and contact lenses"
                - "Model the profit effect of a 5 percent rise in average dispensing value"
                - "Ask your accountant how stock and write-downs appear in your accounts"
            - name: Dispensing quality and spectacle checking standards
              description: |-
                ## Purpose
                When spectacles leave the practice with the wrong centration, axis or fitting height, the patient blames the eye exam. A written checking standard, drawn from the recognised tolerances for mounted lenses, and a sign-off on every pair before collection, cuts remakes and non-tolerance complaints.

                ## Milestones
                1. The recognised tolerance standard for mounted spectacle lenses obtained and summarised on one page.
                2. A checking sheet for every job: prescription, centration, heights, coatings and frame fit.
                3. Every pair checked and signed off by a named person before collection.
                4. Non-tolerance cases tracked for three months and causes reviewed.

                ## Notes
                The relevant ISO standard for mounted spectacle lenses sets the tolerances most labs work to. Check which edition your labs use.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every spectacle job for three months has a signed checking sheet and non-tolerance cases are logged with causes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Get a copy of the mounted lens tolerance standard your labs work to"
                - "Write a one-page checking sheet for every finished job"
                - "Train every dispenser and assistant on the checking sheet"
                - "Log non-tolerance cases with cause for three months"
            - name: Lens portfolio training for the dispensing team
              description: |-
                ## Purpose
                Staff who cannot explain the difference between a standard and a personalised progressive, or why a coating matters, default to the cheapest option or oversell. Short training on your actual lens portfolio, using the lab's materials and real patient cases, makes recommendations clearer and more honest.

                ## Milestones
                1. The practice's lens portfolio reduced to three or four tiers per lens type.
                2. One training session per tier held with the lab representative or senior dispenser.
                3. A plain-language explanation of each tier written for use with patients.
                4. Every dispensing staff member observed explaining the tiers once.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written lens tier guide is in use and every dispensing staff member has been observed explaining it to a patient."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Reduce the lens range to three or four tiers per lens type"
                - "Book a training session with your main lab's representative"
                - "Write a short patient-friendly explanation of each tier"
                - "Observe each dispenser explaining the tiers and give feedback"
            - name: Eye care insurers, vision plans and public schemes
              description: |-
                ## Purpose
                Insurers, employer vision plans and public eye care schemes each set their own eligibility rules, fees, allowances and paperwork, and a practice that misunderstands them loses money or turns away patients it could serve. Learning each scheme you take, and the ones you do not, helps decide which to join and how to explain them at the desk.

                ## Milestones
                1. Every scheme the practice takes listed with eligibility, fee or allowance and paperwork.
                2. A one-page desk guide written for reception staff.
                3. Schemes you do not take reviewed for whether joining would pay.
                4. Contract or participation terms read and any obligations noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A desk guide covering every scheme the practice takes is in use and a written decision exists on schemes not yet taken."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every scheme and plan the practice currently accepts"
                - "Read the participation terms for each and note obligations"
                - "Write a one-page desk guide on eligibility and paperwork"
                - "Review two schemes you do not take and decide whether to join"
            - name: Optometric clinical record standards
              description: |-
                ## Purpose
                Clinical records are what an inspector, a complaint panel or a court looks at first, and gaps in history, ophthalmoscopy findings or advice given are the commonest criticism. Agreeing what a complete record looks like in your practice, and auditing a sample against it, protects patients and clinicians.

                ## Milestones
                1. A record standard written for sight tests, contact lens checks and urgent appointments.
                2. Templates in the practice system updated to prompt the required fields.
                3. Twenty records per clinician audited against the standard.
                4. Findings discussed one to one and a repeat audit date set.

                ## Notes
                Use your regulator's and professional body's published guidance on record keeping as the base for the standard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written record standard exists and twenty records per clinician have been audited against it with feedback given."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read your professional body's guidance on optometric record keeping"
                - "Write a record standard for each appointment type"
                - "Audit twenty records per clinician against the standard"
                - "Give each clinician their audit findings in a one-to-one"
            - name: Prescription release and patient choice rules
              description: |-
                ## Purpose
                Many countries require practices to hand over a spectacle prescription, and sometimes a contact lens specification, whether or not the patient buys from you. Staff who hesitate or attach conditions can trigger a complaint or a regulator finding, so knowing the rules where you practise and putting them into the process is basic protection.

                ## Milestones
                1. The rules on releasing spectacle prescriptions and contact lens specifications in your country confirmed.
                2. The practice process written to match, including timing and format.
                3. Reception and dispensing staff briefed on what to say and what not to say.
                4. The patient information leaflet or website updated to state the policy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written prescription release policy matching local rules is in place and every patient-facing staff member has been briefed on it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your regulator's rules on releasing prescriptions and specifications"
                - "Write the practice process for handing them over"
                - "Brief reception and dispensing staff on the wording to use"
                - "Update patient information to state the policy clearly"
            - name: Frame styling and handover skills for retail staff
              description: |-
                ## Purpose
                Good dispensing feels like help, not selling: asking about work, screens, hobbies and driving, then showing a few frames that suit, and handing over the finished pair with care. Practising these conversations lifts average dispensing value and satisfaction without the pressure tactics patients dislike.

                ## Milestones
                1. A short lifestyle question set agreed for every dispensing conversation.
                2. Role-play sessions held for frame selection and the collection handover.
                3. A collection handover routine written: fit, adjustment, care and what to expect.
                4. Average dispensing value and complaints compared before and after three months.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every dispensing staff member has completed two role-play sessions and the handover routine is used on every collection for three months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write five lifestyle questions to open each dispensing conversation"
                - "Run a role-play session on frame selection with the team"
                - "Write the collection handover routine and practise it"
                - "Compare average dispensing value before and after three months"
            - name: OCT and retinal imaging investment decision
              description: |-
                ## Purpose
                OCT and widefield imaging can improve detection, support enhanced services and justify a premium exam, but they cost as much as a year's profit in some practices and only pay back if they are used and charged for. Comparing models, finance options and a realistic uptake rate before signing avoids an expensive machine gathering dust.

                ## Milestones
                1. The clinical and commercial reasons for imaging written down.
                2. Three devices shortlisted with price, service costs and software fees.
                3. A payback estimate built from realistic uptake and fee assumptions.
                4. A decision recorded with the chosen device or the reason for waiting.

                ## Notes
                Start from the **Purchase decision** template. Ask suppliers for the names of two practices of your size already using the device.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on imaging, backed by a three-device comparison and a payback estimate, is recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write why the practice would add imaging and who it would serve"
                - "Get quotes for three devices including service and software costs"
                - "Estimate monthly uptake and payback from your own exam numbers"
                - "Visit or call two practices already using the shortlisted device"
            - name: Choosing a primary lens laboratory
              description: |-
                ## Purpose
                Your main lab decides turnaround, remake rates, lens quality and a large share of your cost of sales, yet many practices stay with one lab out of habit. Scoring two or three labs on the same criteria, with a trial batch of jobs, gives you a firm basis to switch or to renegotiate.

                ## Milestones
                1. Criteria set: price, turnaround, remake handling, lens range, ordering system and support.
                2. Two alternative labs asked for terms on your real annual volume.
                3. A trial batch of twenty jobs sent to the strongest alternative.
                4. A decision recorded to stay, switch or split volume.

                ## Notes
                Start from the **Vendor** template for each lab you assess.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three labs scored against the same criteria, a trial batch completed and a written decision on the primary lab."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the criteria you will score each lab against"
                - "Ask two alternative labs for terms based on your annual volume"
                - "Send a trial batch of twenty jobs to the strongest alternative"
                - "Record whether you stay, switch or split volume and why"
            - name: In-house edging and glazing decision
              description: |-
                ## Purpose
                Glazing single vision lenses on site can cut turnaround to the same day and improve margin, but it needs an edger, space, trained staff and a steady volume to pay back. Working out how many jobs would qualify, and what it would really cost, settles a question many owners debate for years.

                ## Milestones
                1. The number of single vision jobs per month that could be glazed in house counted.
                2. Edger, tracer and blank stock costs quoted with service terms.
                3. Staff time and training needs estimated.
                4. A written decision with payback period or the reason to stay with the lab.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on in-house glazing exists, based on counted job volumes, quoted costs and a payback estimate."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count last year's single vision jobs that could be glazed on site"
                - "Get quotes for an edger, tracer and starter blank stock"
                - "Estimate staff time per job and the training needed"
                - "Write the decision with the payback period"
            - name: Frame buying strategy for brands and own label
              description: |-
                ## Purpose
                Which frames you carry shapes who walks in: designer brands draw some patients but carry lower margins and minimum orders, while own-label or independent brands can set you apart from the chains. Deciding the mix on purpose, along with any consignment or sale-or-return deals, keeps the display consistent and the margin healthy.

                ## Milestones
                1. Current frames grouped into designer, independent, own-label and value ranges with sales and margin for each.
                2. A target mix written for the display, with a price ladder at each level.
                3. Brand contracts and minimum orders reviewed for renewal or exit.
                4. One new independent or own-label range trialled on a set number of frames.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written frame mix with target shares by range, and a decision on each brand contract up for renewal."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Group current frames into ranges with sales and margin for each"
                - "Write a target display mix and price ladder"
                - "Review each brand contract's minimum order and renewal date"
                - "Trial one new independent range on a fixed number of frames"
            - name: Workplace screen and safety eyewear accounts
              description: |-
                ## Purpose
                Employers often have to provide eye tests for screen users and prescription safety eyewear for some jobs, and a few local employer accounts bring steady volume on weekdays. Setting up a simple offer, voucher process and invoicing route makes the practice the easy choice for local businesses.

                ## Milestones
                1. A written offer for screen user eye tests and prescription safety eyewear.
                2. A voucher or authorisation process and invoicing route agreed.
                3. Safety frame and lens suppliers chosen with their certification details.
                4. Three local employers approached and at least one account opened.

                ## Notes
                Safety eyewear must meet the relevant protective eyewear standard. Keep certificates from the supplier on file for each order.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A workplace eyewear offer, voucher process and certified supplier are in place and at least one employer account is open."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-page offer for screen user tests and safety eyewear"
                - "Choose a safety eyewear supplier and file their certification"
                - "Set up a voucher and invoicing process for employers"
                - "Approach three local employers with the offer"
            - name: Adding a second consulting room business case
              description: |-
                ## Purpose
                Once a single testing room is booked solid for weeks ahead, patients go elsewhere and the dispensing area sits idle while they wait. A business case covering the fit-out, equipment, an extra clinician's cost and the realistic new exam volume shows whether a second room pays and how fast.

                ## Milestones
                1. Current booking lead time and turned-away patients measured for a month.
                2. Fit-out and equipment costs quoted for a second room.
                3. Clinician cost and expected exam and dispensing income modelled.
                4. A go or wait decision recorded with the payback period.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written business case with measured demand, quoted costs and a payback period, and a recorded go or wait decision."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Track booking lead time and patients turned away for one month"
                - "Get quotes for fitting out and equipping a second room"
                - "Model clinician cost against extra exams and dispensing income"
                - "Record the decision and its payback period"
            - name: Regulator and contract inspection preparation
              description: |-
                ## Purpose
                Inspectors and contract managers look at registrations, equipment records, clinical records, infection control, complaints handling, safeguarding and claims evidence. Preparing a file in advance, rather than in the week a letter arrives, turns an inspection into a review of documents you already keep.

                ## Milestones
                1. The current inspection criteria for your regulator or contract obtained.
                2. An evidence file assembled against each criterion.
                3. A mock inspection run by someone outside the daily team.
                4. Gaps closed and the file updated within an agreed time.

                ## Notes
                Start from the **Compliance control** template for each criterion.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An evidence file covering every inspection criterion is complete and a mock inspection has been run with gaps closed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Download the current inspection criteria for your regulator or contract"
                - "Build an evidence folder with one section per criterion"
                - "Ask a colleague from another practice to run a mock inspection"
                - "Close every gap the mock inspection found"
            - name: Annual stocktake and frame write-down
              description: |-
                ## Purpose
                Year-end accounts need a stock figure, and frames that will never sell at full price should not be valued as if they will. A planned stocktake with an agreed write-down policy gives your accountant a reliable figure and forces the clearance decisions that monthly reviews put off.

                ## Milestones
                1. Stocktake date set before the financial year end with staff assigned.
                2. Frames, lenses held in stock, contact lenses and sundries counted and valued.
                3. A write-down policy for aged and discontinued frames agreed with the accountant.
                4. The final stock figure and written-down list sent to the accountant.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A counted, valued stock list with written-down items is delivered to the accountant before the year-end deadline."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Agree a write-down policy for aged frames with your accountant"
                - "Book the stocktake date and assign counting teams @recurring(yearly)"
                - "Count and value all optical stock on the day"
                - "Send the stock figure and write-down list to the accountant"
            - name: Annual optical fee and price review
              description: |-
                ## Purpose
                Fees left unchanged for three years fall behind wages, rent and lab price rises while patients barely notice small annual changes. A yearly review of exam fees, lens prices and packages, set against costs and local competitors, keeps prices fair and the margin intact.

                ## Milestones
                1. Lab, frame and staff cost increases for the year gathered.
                2. Local competitors' published exam fees and package prices noted.
                3. New prices agreed and the date they take effect set.
                4. Price changes loaded and staff briefed on how to explain them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated fee review, with costs and competitor prices considered, is recorded each year and new prices are loaded in the system."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Gather this year's lab and frame supplier price increases"
                - "Note local competitors' published exam and package prices"
                - "Agree new prices and load them with an effective date @recurring(yearly)"
                - "Brief staff on how to explain the changes to patients"
            - name: Year-end with the optical practice accountant
              description: |-
                ## Purpose
                Optical accounts have quirks: stock valuation, scheme income received months late, lab credits and staff commissions. Sending your accountant a tidy year-end pack on time cuts fees, avoids late filing penalties and gives you accounts you can actually use to plan.

                ## Milestones
                1. A year-end checklist agreed with the accountant.
                2. Stock figure, debtors for scheme income and outstanding lab credits listed.
                3. Bank, card and finance statements gathered for the full year.
                4. Accounts reviewed with the accountant and three points for next year noted.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The year-end pack reaches the accountant by the agreed date and the accounts are reviewed in a meeting with notes kept."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Ask your accountant for their year-end checklist and deadline"
                - "List scheme income owed and lab credits outstanding at year end"
                - "Send the year-end pack to the accountant by the agreed date @recurring(yearly)"
                - "Book a meeting to review the accounts once drafted"
            - name: Seasonal sunglasses and back-to-school campaigns
              description: |-
                ## Purpose
                Prescription sunglasses before summer and children's eye exams before the school year are two of the most predictable peaks in optical retail. Planning stock, displays and recall messages for each a few weeks ahead turns them into reliable income instead of a scramble.

                ## Milestones
                1. The two campaign windows fixed in the practice calendar.
                2. Sun lens and children's frame stock ordered in time.
                3. Recall and reminder messages written within your professional advertising rules.
                4. Results of each campaign recorded against the same period last year.

                ## Notes
                Keep every message within your regulator's advertising rules, especially any offer on eye examinations for children.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Both seasonal campaigns run with stock in place and results recorded against the same period last year."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Mark the sunglasses and back-to-school windows in the calendar"
                - "Order sun lens samples and children's frames six weeks ahead"
                - "Plan the next seasonal campaign stock and messages @recurring(yearly)"
                - "Record campaign sales against the same weeks last year"
            - name: First year as an optometry practice owner
              description: |-
                ## Purpose
                The first twelve months after buying or opening a practice set the tone with staff, patients and suppliers, and most new owners try to change too much at once while still testing full days. A phased plan for listening, then fixing the essentials, then improving gives the year a shape and protects your own clinical work.

                ## Milestones
                1. First 30 days spent meeting every staff member, key supplier and adviser.
                2. Registrations, insurance, equipment and stock records in order by month three.
                3. Three priority improvements chosen and delivered by month nine.
                4. A first-year review written with figures against the purchase or opening plan.

                ## Notes
                Start from the **Onboarding 30/60/90** template for the first quarter.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written first-year review exists, comparing results with the original plan and listing the improvements delivered."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Book a one-to-one with every staff member in the first two weeks"
                - "Meet your main lab and frame suppliers to review terms"
                - "Choose three improvements for the year and tell the team"
                - "Write the first-year review against your original plan"
            - name: Building the patient list in a new optometry practice
              description: |-
                ## Purpose
                New optical practices start with no recall base, so the first two years depend on walk-ins, referrals and local presence. A plan for the first nine months, covering local doctors and schools, opening offers within professional rules and a booking system ready from day one, builds the list that later recalls will run on.

                ## Milestones
                1. Local doctors, pharmacies and schools introduced to the practice.
                2. Online booking and an opening offer in place on the first day.
                3. New patients counted weekly with the source of each recorded.
                4. Five hundred patients examined, or your own target, within nine months.

                ## Notes
                Check your regulator's advertising rules before any offer on eye examinations.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The practice reaches its written new-patient target within nine months, with the source of every new patient recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Set a nine-month new patient target and write it down"
                - "List local doctors, pharmacies and schools to introduce yourself to"
                - "Record the source of every new patient from day one"
                - "Review new patient numbers and sources at the end of each month"
            - name: Leaving a franchise or joint venture for independence
              description: |-
                ## Purpose
                Owners in an optical franchise or joint venture arrangement sometimes reach a point where the fees, brand rules or buying restrictions outweigh the support. Going independent means replacing systems, suppliers, branding and sometimes premises, so understanding the agreement's exit terms and the real cost of each replacement comes first.

                ## Milestones
                1. The franchise or joint venture agreement's exit, notice and restrictive terms summarised with a solicitor.
                2. Replacement systems, suppliers and branding costed.
                3. A cash forecast for the first year as an independent prepared.
                4. A decision recorded to stay, renegotiate or leave, with a timeline if leaving.

                ## Notes
                Never tell staff or patients about a planned exit before your solicitor has reviewed the agreement.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to stay, renegotiate or leave, supported by a solicitor's summary of the agreement and a first-year cash forecast."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask a solicitor to summarise the agreement's exit and restrictive terms"
                - "Cost replacement systems, suppliers and branding"
                - "Prepare a first-year cash forecast as an independent"
                - "Record the decision and, if leaving, the timeline"
            - name: Taking on the first employed optometrist
              description: |-
                ## Purpose
                Hiring the first optometrist beyond yourself changes the practice from a personal clinic into a business, and it needs clear pay, clinical standards and a diary that can fill two rooms or two sets of days. Planning the role, the induction and the first three months makes it more likely the new clinician stays and patients notice no drop in care.

                ## Milestones
                1. The role written with days, appointment times, pay basis and clinical expectations.
                2. A recruitment plan covering pre-registration graduates and experienced optometrists.
                3. An induction plan covering systems, record standards and referral routes.
                4. A three-month review held with feedback on records, conversion and patient comments.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An optometrist is employed with a written role, completed induction and a three-month review on file."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the role with days, appointment lengths and pay basis"
                - "Check market pay for optometrists in your area"
                - "Prepare an induction plan covering systems, records and referrals"
                - "Book the three-month review before the start date"
            - name: Cutting the owner's testing days
              description: |-
                ## Purpose
                Testing five days a week while also running stock, staff and finances is how many optometry owners burn out. Moving one day a week from the testing room to management, covered by an employed clinician or locum, gives time for the work only the owner can do and shows whether the practice can run without you in the chair.

                ## Milestones
                1. The owner's current week mapped between testing, dispensing and management.
                2. One testing day covered by another clinician.
                3. A management day agenda written and kept for three months.
                4. Exam numbers and conversion compared on covered days and owner days.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One testing day a week is covered by another clinician for three months and the management day agenda is kept."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map a typical week between testing, dispensing and management"
                - "Arrange cover for one testing day a week"
                - "Write the agenda for the weekly management day"
                - "Compare conversion on covered days with owner testing days after three months"
            - name: Owner absence and continuity plan
              description: |-
                ## Purpose
                If the owner is the only optometrist and falls ill, the practice can lose a month of exams, claims and recalls in a few weeks. A plan naming locum cover, who can authorise spending, who handles patients with pending referrals and what happens to booked appointments keeps the practice running while you recover.

                ## Milestones
                1. Two locum optometrists or agencies identified with rates and availability.
                2. A named person authorised to run the business side, with access agreed.
                3. A procedure written for booked patients, pending referrals and uncollected jobs.
                4. Income protection and key person cover reviewed with the broker.

                ## Notes
                Start from the **Risk register** template to list what fails first in an absence. Agree access to systems and bank in writing, not by sharing your passwords.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written continuity plan names locum cover, a business deputy and the procedure for booked patients, and has been shared with both."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Contact two locums or agencies and record their rates and availability"
                - "Name the person who will run the business side in your absence"
                - "Write the procedure for booked patients and pending referrals"
                - "Ask your broker about income protection and key person cover"
            - name: Myopia management service set-up
              description: |-
                ## Purpose
                Myopia control spectacle lenses, contact lenses and other options for children are a growing area, but they need clear protocols, consent, measured progression and parents who understand the commitment and cost. Building the service on written protocols and outcome tracking makes it credible to parents and defensible to your regulator.

                ## Milestones
                1. Clinicians trained in current myopia management evidence and options.
                2. Protocols written for assessment, options offered, follow-up intervals and consent.
                3. Axial length or refraction measurement method chosen and recorded at each visit.
                4. Fees and a parent information leaflet agreed.
                5. Outcomes reviewed across all enrolled children.

                ## Notes
                Clinical choices belong to the treating optometrist and the evidence; this project organises the service around them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written myopia management protocol, fee structure and parent leaflet are in use, with progression recorded for every enrolled child."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Book a recognised myopia management course for each clinician involved"
                - "Write the protocol for assessment, options, follow-up and consent"
                - "Draft the parent leaflet and fee structure"
                - "Review progression across all enrolled children @recurring(quarterly)"
            - name: Dry eye clinic service
              description: |-
                ## Purpose
                Dry eye is among the most common reasons people visit an optometrist outside a routine test, and a structured clinic with longer appointments, a standard assessment and follow-ups can fill quieter diary slots. Setting up the service with clear fees, assessment tools and retail products avoids giving free advice in squeezed sight test time.

                ## Milestones
                1. A standard dry eye assessment and questionnaire chosen.
                2. Appointment length, fee and follow-up intervals set.
                3. Any equipment or treatment products costed and chosen.
                4. Twenty patients seen and their outcomes reviewed.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A dry eye clinic runs with a standard assessment, a published fee and outcomes reviewed after twenty patients."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose a standard dry eye questionnaire and assessment routine"
                - "Set the appointment length, fee and follow-up interval"
                - "Cost any equipment and products you plan to use"
                - "Review outcomes after the first twenty patients"
            - name: Domiciliary eye care service decision
              description: |-
                ## Purpose
                Housebound patients and care home residents often go years without an eye test, and domiciliary work can be a steady service line, but it brings portable equipment, travel time, safeguarding duties and in some places separate contract rules. Assessing local demand and the true cost per visit settles whether to offer it yourself, partner or decline.

                ## Milestones
                1. Local demand estimated from care homes and existing patients who can no longer visit.
                2. Portable equipment, travel and staff costs per visit worked out.
                3. Contract, notification and safeguarding requirements checked.
                4. A decision recorded to offer, partner with a domiciliary provider or decline.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on domiciliary eye care, with demand, cost per visit and regulatory requirements documented."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Count existing patients who can no longer visit the practice"
                - "Contact three local care homes about their eye care arrangements"
                - "Cost portable equipment, travel and staff time per visit"
                - "Check the contract and safeguarding rules for home visits"
            - name: Low vision and specialist contact lens services
              description: |-
                ## Purpose
                Low vision assessments and specialist lenses, such as rigid lenses for keratoconus or scleral lenses, serve patients the chains often refer away, and they build a reputation that brings referrals from other practitioners. Each needs extra training, fitting sets and longer appointments, so deciding which to offer and how to price them comes before advertising either.

                ## Milestones
                1. Local demand checked with ophthalmology contacts and other practices.
                2. Training needs and fitting set or magnifier costs listed.
                3. Fees and appointment lengths set for each service offered.
                4. A referral route to other practitioners and agencies written for cases you will not take.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written scope for low vision and specialist lens services with fees, training completed and a referral route for other cases."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask local ophthalmologists where they currently send these patients"
                - "List training courses and fitting set costs for each service"
                - "Set fees and appointment lengths for the services you will offer"
                - "Write where you will refer patients outside your scope"
            - name: Enhanced and community eye care service contracts
              description: |-
                ## Purpose
                Enhanced services such as minor eye conditions, glaucoma referral refinement, cataract follow-up or monitoring stable patients are increasingly commissioned from community optometrists. They bring fee income and clinical interest, but each comes with accreditation, equipment and audit duties that must be costed before you sign.

                ## Milestones
                1. Services commissioned in your area listed with fees and requirements.
                2. Accreditation and training needs for each clinician identified.
                3. Equipment, appointment time and audit duties costed per service.
                4. One service applied for and delivered, with its audit returns submitted.

                ## Notes
                Requirements vary widely by country and region; your local eye care commissioner or health authority holds the current details.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least one enhanced eye care service is contracted and delivered, with accreditation in place and the first audit return submitted."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Ask your local commissioner which enhanced eye services are on offer"
                - "List accreditation and training each clinician would need"
                - "Cost appointment time, equipment and audit work for each service"
                - "Apply for the service that best fits your equipment and team"
            - name: Benchmarking with other independent optometry owners
              description: |-
                ## Purpose
                Independent owners rarely see each other's numbers, so it is hard to know whether a 60 percent conversion rate or a given remake rate is good. A small group of non-competing owners sharing a few agreed figures once a year, through a buying group or professional network, gives context no supplier report can.

                ## Milestones
                1. Three to five non-competing owners agreed to share a small set of figures.
                2. The figures and definitions agreed, such as conversion, average dispense value, remake rate and exams per clinician day.
                3. One annual exchange completed with anonymised results.
                4. Two changes chosen from what the comparison shows.

                ## Notes
                Share only agreed, non-confidential figures and never patient data. Avoid sharing prices with nearby competitors.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One annual benchmarking exchange with at least three other owners completed, with two changes recorded from it."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Invite three to five non-competing owners to a figures exchange"
                - "Agree the figures and their definitions in writing"
                - "Run the annual figures exchange with the group @recurring(yearly)"
                - "Choose two changes from the comparison"
---

# Owning an Optometry Practice

This area is for the optometrist or optical entrepreneur who owns the practice as well as working in it, whether you bought an established independent, left a franchise or opened a new shop front. It starts with the foundations (registrations, the equipment and stock registers, the patient base, prices and the real numbers), moves through the daily and weekly machinery of recalls, spectacle jobs, lab bills, contact lens aftercare and referrals, then the skills an owner needs, the decisions on imaging, labs, glazing and frame buying, the dated events such as inspections and stocktake, the situations founders and growing owners face, and finally specialist services such as myopia management, dry eye and low vision.

What repeats is the daily opening checklist, a weekly recall list, overdue job review, claims run and referral follow-up, monthly lab reconciliation, frame reorder, aftercare list, numbers review and team meeting, quarterly equipment checks and aged stock reviews, and yearly stocktake, fee, insurance and registration checks. The Operational checklist, Metrics log, Vendor, Purchase decision, Compliance control and Risk register templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
