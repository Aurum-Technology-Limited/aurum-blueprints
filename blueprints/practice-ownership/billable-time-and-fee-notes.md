---
id: practice-ownership.billable-time-and-fee-notes
name: Billable Time and Fee Notes
description: "A written time policy, daily capture habits, narratives clients accept, monthly pro formas and fee notes, controlled write-offs and realisation figures for law, accounting and engineering firms."
category: business
version: 1.0.0
tags: [practice-ownership, billable-time-and-fee-notes, small-business, team, timekeeping, fee-notes, realisation, write-offs]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - one-on-one
    - remediation-plan
    - onboarding-plan
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Billable Time and Fee Notes
          description: "Recording time and billing in law, accounting and engineering firms: time capture habits, narratives, fee notes, write-offs and realisation rates."
          projects:
            - name: Written time recording and billing policy
              description: |-
                ## Purpose
                Most small firms run on unwritten habits, so one partner records every six minutes while another reconstructs a week from memory on Friday afternoon. A two-page policy covering what counts as chargeable, when time must be entered, how narratives are written and who can write off what gives every fee earner the same rules and gives clients consistent bills.

                ## Milestones
                1. A two-page policy covering time units, entry deadlines, narrative standards, non-chargeable categories and write-off authority.
                2. Every partner's comments collected and resolved in one revised draft.
                3. The policy adopted at a partners' meeting and dated.
                4. Every fee earner and billing staff member confirmed as having read it.

                ## Notes
                Keep the policy short enough to read in ten minutes. The detail belongs in the activity code list and the narrative guide, which the policy can point to.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated, partner-approved time and billing policy exists and every fee earner has confirmed reading it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the time and billing rules each partner follows today"
                - "Ask the agent to draft a two-page policy from the list of current rules"
                - "Circulate the draft to partners with a one-week comment deadline"
                - "Adopt the final policy at the next partners' meeting"
                - "Collect a read confirmation from every fee earner"
            - name: Time leakage baseline over two weeks
              description: |-
                ## Purpose
                Fee earners who enter time at the end of the week routinely lose 10 to 20 percent of what they actually worked, mostly short calls and emails. Comparing two weeks of contemporaneous recording against the previous two weeks of normal habits shows the firm how much chargeable time it is losing before anyone argues about rates.

                ## Milestones
                1. Two volunteer fee earners from different teams record time as they work for ten working days.
                2. Their recorded hours compared with their previous ten working days.
                3. The gap expressed as hours and as fee value at standard rates.
                4. A one-page finding shared with partners, naming the types of work most often lost.

                ## Notes
                Pick one careful recorder and one who usually catches up late. The contrast makes the finding credible to the rest of the firm.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note gives the firm's measured time leakage in hours and fee value, based on two weeks of contemporaneous recording."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask two fee earners to record time as they work for ten days"
                - "Export their recorded hours for the previous ten working days"
                - "Calculate the gap in hours and at standard rates"
                - "Write a one-page finding listing the work most often lost"
            - name: Activity and task code list
              description: |-
                ## Purpose
                Free-text time entries make it impossible to see where hours go, while fifty codes guarantee nobody uses them properly. A list of twelve to twenty activity codes, matched to industry code sets where large clients demand them, lets the firm report on drafting, meetings, travel and research without slowing anyone down.

                ## Milestones
                1. Six months of time entries sampled to find the work people actually do.
                2. A list of twelve to twenty activity codes with one-line definitions.
                3. Any client-required code sets, such as task-based billing codes, mapped to the firm's list.
                4. The codes loaded into the time system and the old free-text option closed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No more than twenty activity codes with definitions are live in the time system and used on new entries."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export a sample of six months of time entries"
                - "Group the narratives into the activities that recur most"
                - "Write a one-line definition for each code"
                - "Load the codes into the time system and retire free-text entries"
            - name: Matter opening billing terms checklist
              description: |-
                ## Purpose
                Billing disputes usually trace back to a matter opened without the agreed rate, cap, billing frequency or client billing guidelines recorded anywhere a biller can see. A short checklist at matter opening puts those terms on the matter record so the first fee note matches what the engagement letter promised.

                ## Milestones
                1. A checklist naming the fields every new matter needs: fee basis, rates, cap or estimate, billing frequency, billing contact and any client guidelines.
                2. The checklist built into the matter opening form or workflow.
                3. Twenty open matters checked and their missing billing terms filled in.
                4. Matter opening staff trained to refuse a matter with blank billing fields.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every matter opened after the checklist goes live has fee basis, billing frequency and billing contact recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the last five billing disputes and note which term was missing"
                - "Draft the matter opening billing checklist"
                - "Add the required fields to the matter opening form"
                - "Fill in missing billing terms on twenty current matters"
            - name: Non-chargeable time categories
              description: |-
                ## Purpose
                When business development, training, supervision and internal admin all go under one code called 'office', the firm cannot tell whether a fee earner with low chargeable hours is idle or doing exactly the work partners asked for. Five to eight non-chargeable categories make the rest of the working week visible and defensible.

                ## Milestones
                1. Five to eight non-chargeable categories defined, such as business development, supervision, training, pro bono, firm management and admin.
                2. Each category given an expected share of the week for each role.
                3. The categories loaded into the time system.
                4. Fee earners told that recording non-chargeable time is expected, not optional.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The time system holds five to eight defined non-chargeable categories and every fee earner records against them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List what fee earners do when they are not on client work"
                - "Group the list into five to eight categories with definitions"
                - "Agree an expected weekly share for each role"
                - "Load the categories into the time system"
            - name: Rate tables and matter rate overrides
              description: |-
                ## Purpose
                A fee earner promoted in March but still charged at last year's grade, or a client discount that was agreed by email and never entered, quietly erodes every bill. Auditing the rate tables and every matter-level override in the time system makes the starting value of recorded time correct before anyone looks at write-offs.

                ## Milestones
                1. Every fee earner's standard rate in the system checked against the approved rate card.
                2. A list of every matter with a special rate, discount or cap, and who approved it.
                3. Overrides with no written approval either documented or removed.
                4. A rule that only one named person can change rates in the system.

                ## Notes
                Setting the rates themselves belongs to your fee schedule work. This project is about making sure the system charges what was agreed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every standard rate and matter override in the time system matches a written approval, and rate changes are restricted to one named person."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export standard rates for every fee earner from the time system"
                - "Compare each rate with the approved rate card"
                - "List every matter override and find its written approval"
                - "Restrict rate edit permissions to one named person"
            - name: Time unit, rounding and minimum entry rules
              description: |-
                ## Purpose
                Six-minute units, minimum entries for calls and how a two-minute email is recorded are small rules that clients notice when they are applied unevenly. Agreeing them once, and checking them against what engagement letters and client guidelines allow, stops both padding and under-recording.

                ## Milestones
                1. The firm's time unit agreed, commonly six minutes.
                2. A rule for short items, such as grouping several brief emails into one entry.
                3. Client guidelines that forbid minimum charges identified and flagged on those matters.
                4. The rules added to the time recording policy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rule on time units, rounding and short items is in the policy, and matters with stricter client rules are flagged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check what time unit the system and engagement letters currently use"
                - "Write a rule for grouping short emails and calls"
                - "Flag matters whose client guidelines forbid minimum charges"
                - "Add the agreed rules to the time recording policy"
            - name: Chargeable hours targets by role
              description: |-
                ## Purpose
                Targets copied from a large firm, such as 1,800 chargeable hours for everyone, set juniors up to pad and partners up to ignore them. Building targets from available hours, holidays, training and each role's non-chargeable duties gives every fee earner a number that is achievable and honest.

                ## Milestones
                1. Available working hours per year calculated after leave, public holidays and training.
                2. Expected non-chargeable time for each role subtracted.
                3. A chargeable hours target set for each role and written into the policy.
                4. Each fee earner told their target in a conversation, not just an email.

                ## Notes
                Targets drive behaviour. A target that is too high produces padded narratives and later write-offs, which cost more than the hours were worth.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each role has a written annual chargeable hours target derived from available hours, and every fee earner has discussed theirs."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate available hours per year for a full-time fee earner"
                - "Estimate non-chargeable hours for each role"
                - "Set and record a chargeable target for each role"
                - "Discuss each target with the fee earner concerned"
            - name: Agreed definitions of utilisation, realisation and recovery
              description: |-
                ## Purpose
                Partners often argue about performance using the same word for different numbers: one means billed over recorded, another means collected over standard value. Writing down how the firm calculates utilisation, billing realisation, collection realisation and recovery, with a worked example, makes every later report comparable.

                ## Milestones
                1. One formula written for each measure: utilisation, billing realisation, collection realisation and overall recovery.
                2. A worked example using a real matter from last year.
                3. The time system's own report definitions checked against the firm's formulas.
                4. The definitions sheet adopted by partners and filed with the policy.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page definitions sheet with formulas and a worked example is adopted by partners and matches the time system's reports."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each partner how they currently calculate realisation"
                - "Write one formula for each of the four measures"
                - "Work through one real matter using all four formulas"
                - "Check the time system's report settings use the same formulas"
            - name: Fee note layout and standard wording
              description: |-
                ## Purpose
                A fee note that shows a total and a single line saying 'professional services' invites a query, while one with forty pages of six-minute entries invites a fight. Settling one clear layout with a summary, a work description, fee earner hours, disbursements and payment details makes bills easier to approve inside the client's own business.

                ## Milestones
                1. Three fee notes from clients who paid without query collected as examples.
                2. One layout agreed with summary, description of work, hours by fee earner, disbursements, tax and payment terms.
                3. Two levels of detail set up: summary only and full time entries.
                4. The layout built as the default in the billing system.

                ## Notes
                Check what your regulator or tax authority requires on a fee note, such as registration numbers or tax breakdowns, before finalising the layout.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One fee note layout with summary and detailed versions is the default in the billing system."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect three recent fee notes that were paid without query"
                - "Check the fee note details required by your tax authority"
                - "Draft the summary and detailed versions of the layout"
                - "Set the agreed layout as the billing system default"
            - name: Daily time entry before leaving
              description: |-
                ## Purpose
                Time recorded the same day is more complete and better described than time rebuilt from a calendar at the end of the week. A firm-wide habit of entering the day's time before leaving, with a short Monday check of who missed days, is the single change that most improves billable hours.

                ## Milestones
                1. Every fee earner entering time daily, with the expectation set in the policy.
                2. A Monday report showing who has days with no time entered.
                3. Late entries falling to fewer than one day a week per fee earner within three months.
                4. Partners visibly following the same rule.

                ## Notes
                Partners are usually the worst offenders. The habit does not stick in the team until the partners keep it themselves.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months, every fee earner averages fewer than one day a week with time entered late."
                cadence: rolling
              tasks:
                - "Set a recurring 15-minute end-of-day block in your calendar for time entry"
                - "Enter today's time before leaving the office @recurring(daily)"
                - "Run the missing time report and message anyone with blank days @recurring(weekly:mon)"
                - "Report the firm's late entry rate at the partners' meeting"
            - name: Friday sweep of draft and unreleased time
              description: |-
                ## Purpose
                Many time systems hold entries as drafts until the fee earner releases them, and drafts never reach a pro forma. A Friday sweep that releases or corrects every draft entry keeps the week's work billable and catches entries on closed or wrong matters.

                ## Milestones
                1. A saved report listing all draft or unreleased time by fee earner.
                2. Every draft entry released, corrected or deleted by Friday close.
                3. Entries posted to closed or wrong matters moved to the right ones.
                4. The value of draft time older than a week tracked over a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Draft time older than seven days stays below one hour per fee earner for a full quarter."
                cadence: rolling
              tasks:
                - "Save a report of draft and unreleased time by fee earner"
                - "Release or correct your own draft entries @recurring(weekly:fri)"
                - "Move entries posted to closed matters to the correct ones"
                - "Note the value of week-old draft time at month end"
            - name: Monthly pro forma review by matter partner
              description: |-
                ## Purpose
                The pro forma, or pre-bill, is the last point where a partner can fix a vague narrative, remove a duplicate entry or decide a fair write-down before the client sees it. A fixed monthly window with a three-day turnaround keeps bills going out on time and makes every adjustment a recorded decision.

                ## Milestones
                1. Pro formas produced for every billable matter on a fixed day each month.
                2. Each matter partner returning edits within three working days.
                3. Every change to value recorded with a reason code.
                4. Pro forma turnaround measured and reported each month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six consecutive months, at least 90 percent of pro formas are returned within three working days with every value change reason-coded."
                cadence: rolling
              tasks:
                - "Fix the day each month when pro formas are produced"
                - "Review and return your pro formas within three working days @recurring(monthly:20)"
                - "Record a reason code for every change to billed value"
                - "Chase any partner whose pro formas are more than three days late"
            - name: Monthly billing run
              description: |-
                ## Purpose
                Fee notes that go out whenever someone remembers arrive irregularly, and irregular bills are paid irregularly. A monthly billing run on a fixed date, with a checklist from approved pro forma to sent fee note, makes billing a routine the support team can run without the partners chasing it.

                ## Milestones
                1. A billing run date fixed and published to the whole firm.
                2. A checklist covering approval, tax, disbursements, layout, delivery and system posting.
                3. Every approved pro forma turned into a sent fee note within two working days of approval.
                4. A one-line summary of fees billed sent to partners after each run.

                ## Notes
                Start from the **Operational checklist** template. Run it once alongside the billing coordinator and fix the steps that were not written down.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fee notes are issued on the fixed billing run date in at least eleven months of the year, with a summary sent to partners each time."
                cadence: rolling
              tasks:
                - "Choose and publish the monthly billing run date"
                - "Write the billing run checklist from approval to delivery"
                - "Issue all approved fee notes on billing run day @recurring(monthly:25)"
                - "Send partners a summary of fees billed after each run"
            - name: Write-off and write-down approval log
              description: |-
                ## Purpose
                Write-offs happen in pro formas, at billing, after a client complains and when old work in progress is cleared, and most firms only see the total at year end. Logging every write-off with the amount, matter, fee earner, stage and reason, and requiring a second partner above a set amount, turns lost fees into information.

                ## Milestones
                1. A log with amount, matter, fee earner, stage and reason code for each write-off.
                2. An approval threshold above which a second partner must agree.
                3. Every write-off for the past three months entered.
                4. A monthly total by reason shared with partners.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every write-off above the agreed threshold has a second partner approval and a reason code in the log for six consecutive months."
                cadence: rolling
              tasks:
                - "Set up the write-off log with five to eight reason codes"
                - "Agree the amount above which a second partner must approve"
                - "Back-fill write-offs from the last three months"
                - "Total last month's write-offs by reason for partners @recurring(monthly:3)"
            - name: Monthly realisation report
              description: |-
                ## Purpose
                Realisation, the share of recorded time value that is billed and then collected, tells partners more about the health of the firm than fees alone. A one-page monthly report by fee earner, partner and practice area shows where value is lost early enough to change something.

                ## Milestones
                1. A one-page report showing recorded value, billed value and collected value by fee earner and practice area.
                2. Twelve-month rolling figures alongside the month.
                3. The three biggest drops in realisation each month explained in a sentence.
                4. The report discussed at every monthly partners' meeting.

                ## Notes
                Start from the **Metrics log** template. Use the definitions the partners agreed so the numbers mean the same thing every month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A realisation report using the agreed definitions is produced and discussed at partners' meetings for twelve consecutive months."
                cadence: rolling
              tasks:
                - "Build the one-page realisation report layout"
                - "Produce the realisation report for the previous month @recurring(monthly:8)"
                - "Write one sentence explaining each of the three largest drops"
                - "Review the rolling twelve-month trend each quarter @recurring(quarterly)"
            - name: Budget alerts on fixed and capped fee matters
              description: |-
                ## Purpose
                On a fixed or capped fee, every hour over budget is a write-off waiting to happen, and the partner usually discovers it only at billing. Weekly alerts when recorded time passes 50, 75 and 90 percent of the budget give time to warn the client about scope or change how the work is staffed.

                ## Milestones
                1. Every fixed, capped and estimated matter has a budget entered in the system.
                2. Alerts set at 50, 75 and 90 percent of budget.
                3. A weekly list of matters over 75 percent sent to matter partners.
                4. Each alert answered with a recorded action: carry on, re-staff, or raise scope with the client.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fixed or capped fee matter has a budget in the system and every 75 percent alert has a recorded action within one week."
                cadence: rolling
              tasks:
                - "List every matter on a fixed, capped or estimated fee"
                - "Enter the budget for each matter in the time system"
                - "Send matter partners the list of matters past 75 percent @recurring(weekly:wed)"
                - "Record the action taken on each alert"
            - name: Disbursement and expense recovery check
              description: |-
                ## Purpose
                Court fees, search fees, couriers, travel and expert costs paid on a client's behalf are easily left off a fee note, and once a matter closes they are rarely recovered. A monthly check that every posted disbursement has reached a bill closes a leak that costs some firms several percent of fees.

                ## Milestones
                1. A report of disbursements paid but not yet billed, by matter.
                2. A rule for which costs are recharged and which are absorbed as overhead.
                3. Unbilled disbursements older than 60 days cleared or written off with approval.
                4. Monthly unbilled disbursements reported with the realisation figures.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No disbursement older than 60 days sits unbilled without a recorded decision, for six consecutive months."
                cadence: rolling
              tasks:
                - "Run a report of paid disbursements not yet billed"
                - "Write the rule for recharged and absorbed costs"
                - "Bill or approve the write-off of disbursements older than 60 days @recurring(monthly:12)"
                - "Add unbilled disbursements to the monthly realisation report"
            - name: Quarterly sample audit of time entries
              description: |-
                ## Purpose
                Duplicate entries, time on the wrong matter, vague narratives and work charged that the client agreed not to pay for all survive unnoticed until a client's own auditor finds them. Sampling twenty entries per fee earner each quarter against the policy shows whether the rules are working and who needs help.

                ## Milestones
                1. A sampling method: twenty random entries per fee earner per quarter.
                2. A short scoring sheet covering matter, code, narrative, duration and client rules.
                3. Results shared privately with each fee earner.
                4. Firm-wide error rate tracked quarter on quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly audits completed in a year, each scoring twenty entries per fee earner, with the firm error rate recorded each time."
                cadence: cyclic
              tasks:
                - "Write a five-point scoring sheet for time entries"
                - "Sample and score twenty entries per fee earner @recurring(quarterly)"
                - "Share each fee earner's results with them privately"
                - "Record the firm-wide error rate for the quarter"
            - name: Monthly time and billing one-to-ones
              description: |-
                ## Purpose
                Numbers on a dashboard rarely change behaviour, while ten minutes with a supervisor discussing hours, late entries and write-offs on one person's matters often do. A short monthly one-to-one for each fee earner makes time a supported part of the job rather than a source of anxiety.

                ## Milestones
                1. Each fee earner paired with one supervising partner for time and billing.
                2. A one-page monthly sheet with hours against target, late days and write-offs.
                3. Ten-minute conversations held every month and one action agreed each time.
                4. Repeated issues escalated into a training plan, not a disciplinary note.

                ## Notes
                Start from the **1:1** template. Ask what got in the way of recording before discussing the number.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fee earner has a monthly time and billing one-to-one with one action recorded, for six consecutive months."
                cadence: rolling
              tasks:
                - "Pair each fee earner with a supervising partner"
                - "Prepare a one-page time sheet for each fee earner"
                - "Hold ten-minute time and billing one-to-ones @recurring(monthly:15)"
                - "Record one agreed action from each conversation"
            - name: Writing billing narratives clients accept
              description: |-
                ## Purpose
                Narratives such as 'review', 'attention to file' or 'work on matter' are the most common reason clients query or cut a bill. Learning to write each entry as a verb, an object and a purpose, such as 'Drafted clause 12 indemnity for supplier contract following client call', gets bills approved by the client's finance team without a phone call.

                ## Milestones
                1. A one-page narrative guide with ten weak entries and their rewritten versions.
                2. A list of banned narratives, such as 'attention to', 'review' alone and 'various'.
                3. Every fee earner rewriting five of their own recent entries in a short session.
                4. Narrative queries from clients counted before and three months after.

                ## Notes
                Never describe internal inefficiency in a narrative. 'Re-reviewed after trainee's error' tells the client why they should not pay.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A narrative guide is issued, every fee earner has completed a rewrite exercise, and narrative queries are measured before and after."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick ten weak narratives from last month's bills"
                - "Rewrite each as verb, object and purpose"
                - "Run a 30-minute rewrite session with the fee earners"
                - "Count client narrative queries now and in three months"
            - name: Time recording induction for new joiners
              description: |-
                ## Purpose
                New fee earners bring the habits of their last firm, and the first month decides whether they learn this firm's codes, units and narrative style or carry on their own way. A one-hour induction, a buddy and a review of their first two weeks of entries fix that early, when it costs least.

                ## Milestones
                1. A one-hour induction covering the policy, codes, units, narratives and the time system.
                2. A billing buddy named for every new joiner.
                3. The joiner's first two weeks of entries reviewed and feedback given.
                4. The induction included in the standard onboarding for every role.

                ## Notes
                Start from the **Onboarding plan** template, adding the time recording steps to the first week.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Every fee earner who joins after launch completes the induction and has their first two weeks of entries reviewed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the one-hour time recording induction outline"
                - "Choose a billing buddy for the next new joiner"
                - "Review the joiner's first two weeks of entries"
                - "Add the induction to the firm's onboarding steps"
            - name: Reading client billing guidelines
              description: |-
                ## Purpose
                Corporate clients, insurers and public bodies often issue billing guidelines that refuse to pay for internal conferences, more than one attendee at meetings, research by juniors or travel time. Learning to read these documents and turning each into a one-page summary on the matter stops work being done that will never be paid for.

                ## Milestones
                1. Every client with written billing guidelines identified.
                2. A one-page summary for each, listing what is not payable, caps and submission rules.
                3. Each summary attached to the client's matters where fee earners will see it.
                4. Fee earners on those matters briefed on the main restrictions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every client with billing guidelines has a one-page summary attached to its matters and the fee earners on those matters have been briefed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every client that has sent written billing guidelines"
                - "Ask the agent to summarise one guideline document into what is not payable"
                - "Attach each summary to the client's matters"
                - "Brief the fee earners working on those matters"
            - name: Estimating matters from past time data
              description: |-
                ## Purpose
                Most fee estimates are a partner's guess, and guesses run low because they forget the emails, calls and revisions. Learning to pull the recorded hours from five similar past matters, broken down by stage and fee earner, produces estimates that hold and fixed fees that do not turn into write-offs.

                ## Milestones
                1. Five completed matters of a common type chosen and their time exported.
                2. Hours broken down by stage and by grade of fee earner.
                3. A range, not a single figure, for a typical matter of that type.
                4. The next estimate for that matter type built from the range and compared with the outcome.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One common matter type has a time-based estimating range by stage, used for at least one new estimate and checked against the outcome."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick a matter type the firm handles at least ten times a year"
                - "Export time from five completed matters of that type"
                - "Split the hours by stage and fee earner grade"
                - "Use the range for the next estimate and record the outcome"
            - name: Handling a client query about a fee note
              description: |-
                ## Purpose
                Partners often respond to a bill query by cutting the fee on the spot, which teaches the client that querying works. Practising a calm sequence (listen, check the record, explain the work, then decide) protects both the relationship and the firm's realisation.

                ## Milestones
                1. A short script covering acknowledgement, checking the time record and explaining the work.
                2. A rule that no reduction is offered on the first call.
                3. Two partners role-playing a query using a real past dispute.
                4. Every query and its outcome recorded in the write-off log.

                ## Notes
                If a query turns into a formal complaint, follow your complaints procedure and your regulator's rules on fee disputes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written query script is agreed, two partners have rehearsed it, and every bill query in the next quarter is logged with its outcome."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the four-step script for responding to a bill query"
                - "Choose a past dispute to role-play"
                - "Run a 30-minute role-play with another partner"
                - "Log each bill query and its outcome for a quarter"
            - name: Recording time on fixed fee work
              description: |-
                ## Purpose
                Fee earners on fixed fees often stop recording time because the client will not see it, and the firm loses the only evidence of whether the price was right. Learning why and how to record fixed fee time, with lighter narratives, keeps the data that future pricing and staffing depend on.

                ## Milestones
                1. The policy states that time is recorded on all matters, whatever the fee basis.
                2. A lighter narrative standard agreed for fixed fee entries.
                3. Fixed fee matters with no recorded time listed and followed up.
                4. Time on fixed fee matters compared with the price at matter close.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every fixed fee matter closed in the next six months has recorded time compared with the agreed price."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add a fixed fee time rule to the policy"
                - "Agree a lighter narrative standard for fixed fee entries"
                - "List fixed fee matters with no time recorded"
                - "Compare time value with price at each fixed fee matter close"
            - name: Contemporaneous capture techniques
              description: |-
                ## Purpose
                People who record time well rarely have better memories; they use timers, calendar entries, sent email folders and phone logs as prompts. Trying three capture methods for a week each lets every fee earner find the one that fits how they work, instead of being told to try harder.

                ## Milestones
                1. Three methods tried for a week each: a running timer, calendar-based capture and an end-of-day sweep of sent items and calls.
                2. Hours captured under each method compared with the leakage baseline.
                3. Each fee earner choosing one method and writing it down.
                4. The methods shared in a short guide for the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each fee earner has tried three capture methods and recorded the one they will use, with captured hours compared against the baseline."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Use a running timer for every task for one week"
                - "Record time from calendar entries for the following week"
                - "Try an end-of-day sweep of sent emails and call logs for a third week"
                - "Write down which method captured the most time"
            - name: Partner pro forma editing skills
              description: |-
                ## Purpose
                Partners under pressure tend to cut a round percentage off a bill they feel is high, without asking which entries caused the problem. Practising line-by-line editing, moving work to the right grade, merging duplicates and fixing narratives before reducing value keeps write-downs targeted and teaches the team.

                ## Milestones
                1. A checklist for pro forma review: duplicates, wrong matter, wrong grade, narrative, client rules, then value.
                2. Three past pro formas edited by two partners independently and compared.
                3. Feedback to the fee earner given for each entry written down.
                4. Round-percentage write-downs falling as a share of all write-downs over six months.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pro forma editing checklist is in use and the share of round-percentage write-downs is lower after six months than before."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a six-step pro forma review checklist"
                - "Edit three past pro formas with another partner and compare"
                - "Give written feedback on each entry you change"
                - "Track round-percentage write-downs for six months"
            - name: Choosing a time capture add-on
              description: |-
                ## Purpose
                Some firms find their main practice system adequate for billing but poor for capturing time on a phone, from email or automatically from activity. Comparing two or three capture add-ons against the leakage baseline, with a two-week trial, shows whether a tool will recover enough time to justify its cost.

                ## Milestones
                1. The capture problems from the leakage baseline listed as requirements.
                2. Two or three add-ons shortlisted that integrate with the existing time system.
                3. A two-week trial by three fee earners with hours captured compared.
                4. A decision recorded: buy, wait or keep current methods.

                ## Notes
                Start from the **Purchase decision** template. Check what each tool collects about staff activity and how it stores client information before trialling it.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a time capture add-on, supported by a two-week trial comparing captured hours."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Turn the leakage baseline findings into a requirements list"
                - "Shortlist three add-ons that link to your time system"
                - "Run a two-week trial with three fee earners"
                - "Record the buy, wait or keep decision with reasons"
            - name: Moving matters from quarterly to monthly billing
              description: |-
                ## Purpose
                Clients receiving a large bill every three months are more likely to query it, and the work is less fresh in everyone's mind. Deciding which matters move to monthly billing, and telling clients in advance, produces smaller, clearer fee notes and fewer write-downs.

                ## Milestones
                1. All matters billed less often than monthly listed with typical bill size.
                2. Criteria agreed for which matters move, such as fees above a set monthly amount.
                3. Clients on moving matters told in writing, consistent with their engagement letters.
                4. Write-offs on moved matters compared before and after six months.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Matters meeting the agreed criteria are billed monthly, clients have been told in writing, and write-offs are compared after six months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List matters billed quarterly or less often"
                - "Agree the criteria for moving a matter to monthly billing"
                - "Write to the affected clients about the change"
                - "Compare write-offs on those matters after six months"
            - name: Write-off root cause review
              description: |-
                ## Purpose
                Twelve months of write-off logs usually show that a handful of causes, such as over-staffing, scope creep on fixed fees or one client's guidelines, account for most of the lost value. Analysing the log once and fixing the top three causes recovers more than any rate increase.

                ## Milestones
                1. Twelve months of write-offs grouped by reason, practice area, partner and client.
                2. The three causes accounting for the most value identified.
                3. A fix agreed and owned for each of the three causes.
                4. The value written off for those causes compared six months later.

                ## Notes
                Start from the **Remediation plan** template, one row per cause.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The three largest write-off causes are named, each has an owned fix, and their value is remeasured after six months."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export twelve months of the write-off log"
                - "Group write-offs by reason, area, partner and client"
                - "Name the three causes with the most value"
                - "Assign an owner and a fix to each cause"
            - name: Interim billing on long-running matters
              description: |-
                ## Purpose
                Litigation, large audits and design projects can run for a year or more, and billing only at the end means a single huge fee note and months of unpaid work. Agreeing interim billing points by stage or by month, written into the engagement terms, keeps fees flowing and the client used to paying.

                ## Milestones
                1. Matters expected to run longer than six months identified.
                2. Interim billing points agreed for each: monthly, by stage or by amount of work in progress.
                3. Engagement terms updated where they did not allow interim bills.
                4. Every long matter issuing at least one interim fee note in the next quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every matter expected to run over six months has written interim billing points and has issued at least one interim fee note."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List matters expected to run longer than six months"
                - "Agree interim billing points with each matter partner"
                - "Update engagement terms that do not allow interim bills"
                - "Issue the first interim fee note on each long matter"
            - name: Electronic fee notes and client e-billing portals
              description: |-
                ## Purpose
                Larger clients increasingly require fee notes submitted through their own e-billing portal in a fixed electronic format with task codes, and a rejected submission simply delays payment. Setting up electronic delivery for everyone and portal submission for the clients who demand it removes a quiet cause of late payment.

                ## Milestones
                1. Every client requiring portal submission or a set electronic format listed.
                2. The firm's billing system set up to produce the required format.
                3. One test submission accepted for each portal client.
                4. All other clients receiving fee notes by email from the billing system.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every portal client has had a fee note accepted through its portal and all other clients receive fee notes electronically."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List clients who require portal or electronic format billing"
                - "Check which formats the billing system can produce"
                - "Make one test submission to each client portal"
                - "Switch all other clients to emailed fee notes"
            - name: Ending block billing
              description: |-
                ## Purpose
                Block billing, one entry of six hours saying 'drafting, calls and research', is refused outright by many corporate clients and makes any bill hard to defend. Deciding to require separate entries per task, and checking compliance for three months, makes every fee note easier to approve and easier to audit.

                ## Milestones
                1. Last quarter's block-billed entries counted by fee earner.
                2. A rule that each task gets its own entry, added to the policy.
                3. Fee earners with the most block entries given a short coaching session.
                4. Block-billed entries falling below 5 percent of all entries within three months.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Block-billed entries make up less than 5 percent of all time entries three months after the rule is adopted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count block-billed entries from last quarter by fee earner"
                - "Add a one-task-per-entry rule to the policy"
                - "Coach the three fee earners with the most block entries"
                - "Recount block-billed entries after three months"
            - name: Value adjustment rules
              description: |-
                ## Purpose
                Some work is worth more than the hours, such as an urgent completion or a creative solution, and some is worth less, such as a junior learning on the client's time. Writing down when a partner may bill above or below recorded value, and how it is recorded, stops adjustments being arbitrary and keeps realisation figures honest.

                ## Milestones
                1. Situations listed where billing above time is allowed, within what the engagement terms permit.
                2. Situations listed where billing below time is expected, such as training time.
                3. A reason code for each adjustment type in the billing system.
                4. The rules agreed by partners and added to the policy.

                ## Notes
                Billing above recorded time must be consistent with the engagement letter and your professional rules. Check with your regulator's guidance before adopting a premium.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written value adjustment rules with reason codes are in the policy and every adjustment in the next quarter carries a code."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the times partners have billed above or below time last year"
                - "Draft rules for each adjustment type"
                - "Create a reason code for each type in the billing system"
                - "Agree the rules at a partners' meeting"
            - name: Work clients should never be charged for
              description: |-
                ## Purpose
                Opening a file, fixing a billing error, internal training and duplicated partner review are common examples of time clients refuse to pay, and recording them as chargeable only creates write-offs later. A short list of never-billable work, with codes to record it, keeps the bill clean and the time still visible.

                ## Milestones
                1. A list of work that is always non-chargeable, agreed by partners.
                2. A non-chargeable code for each item so the time is still recorded.
                3. Time system prompts or checks for common items, such as billing queries.
                4. The list attached to the narrative guide.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A partner-agreed list of never-billable work with matching non-chargeable codes is in the narrative guide and the time system."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pull last year's write-offs for work clients refused to pay"
                - "Draft the never-billable list from them"
                - "Create non-chargeable codes for each item"
                - "Add the list to the narrative guide"
            - name: Year-end time and billing clean-up
              description: |-
                ## Purpose
                Before the financial year closes, unbilled time, unreleased drafts, old disbursements and matters that should have closed all distort the year's figures and the tax position. A dated clean-up in the last month of the year leaves the books, the work in progress figure and the next year's targets resting on real numbers.

                ## Milestones
                1. All draft time released and all approved pro formas billed before year end.
                2. Old unbilled time reviewed and either billed or written off with approval.
                3. Matters with no activity for six months closed or justified.
                4. The year's realisation and write-off totals passed to the accountant.

                ## Notes
                Ask your accountant how work in progress is valued for your firm's accounts and tax, since the clean-up affects that figure.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each year before year end, all draft time is released, old unbilled time has a recorded decision, and totals are passed to the accountant."
                cadence: cyclic
              tasks:
                - "Put the year-end clean-up dates in the firm calendar"
                - "Run the year-end time and billing clean-up @recurring(yearly)"
                - "Close or justify matters with six months of no activity"
                - "Send the year's realisation and write-off totals to the accountant"
            - name: Annual rate rollover in the time system
              description: |-
                ## Purpose
                When new rates take effect, they need to be loaded on the right date, applied only where engagement letters allow, and announced to clients with the notice their terms require. A planned rollover avoids both missed increases and surprised clients querying the first bill at new rates.

                ## Milestones
                1. Matters with frozen, capped or contractually fixed rates identified before rollover.
                2. Client notices sent with the notice period their terms require.
                3. New rates loaded and effective from the agreed date.
                4. A test pro forma checked on five matters after the rollover.

                ## Notes
                The rates themselves are set in your fee schedule work. This project is about applying them cleanly.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each year new rates are live on the agreed date, frozen matters are untouched, and five test pro formas confirm the result."
                cadence: cyclic
              tasks:
                - "List matters whose rates are frozen or fixed by contract"
                - "Send rate notices to clients with the required notice period"
                - "Load and check the new rates on the effective date @recurring(yearly)"
                - "Check five test pro formas after the rollover"
            - name: Responding to a client bill audit
              description: |-
                ## Purpose
                Large clients and their insurers sometimes send a firm's bills to an external legal bill auditor or cost consultant, who returns a list of challenged entries. Preparing a calm, entry-by-entry response with the time records, guidelines and correspondence recovers far more than conceding the total.

                ## Milestones
                1. The auditor's challenge list logged entry by entry.
                2. Each challenged entry matched to its time record, narrative and any client instruction.
                3. A written response accepting, defending or partly accepting each item.
                4. The outcome recorded and lessons added to the narrative guide.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written entry-by-entry response is sent within the client's deadline and the outcome is recorded in the write-off log."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Log every challenged entry from the audit report"
                - "Match each entry to its time record and instructions"
                - "Draft an accept, defend or partial response for each item"
                - "Record the outcome and update the narrative guide"
            - name: Final fee note on a major matter
              description: |-
                ## Purpose
                The final bill on a large matter is where unbilled time, unpaid disbursements, cap overruns and promised discounts all collide. Reconciling everything recorded against everything billed and agreed, before the final fee note goes out, avoids a second bill after the client thinks the matter is closed.

                ## Milestones
                1. All time and disbursements reconciled against previous interim bills.
                2. The fee agreed in the engagement terms checked against the total.
                3. Any write-off agreed and approved before the final note is issued.
                4. The final fee note sent with a short covering summary of the work.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A final fee note reconciled against all interim bills and the agreed terms is issued, with no further bill on the matter afterwards."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull all time, disbursements and interim bills on the matter"
                - "Check the total against the agreed fee terms"
                - "Approve any final write-off with a second partner"
                - "Send the final fee note with a covering summary"
            - name: Preparing time records for a costs assessment
              description: |-
                ## Purpose
                In litigation and some regulated work, a court, tribunal or regulator may assess what fees are reasonable, and the time record is the evidence. Preparing records, narratives and a chronology in the form the assessing body expects makes the difference between recovering most of the costs and losing a large share.

                ## Milestones
                1. The assessing body's requirements for the costs bill or schedule confirmed.
                2. Time entries grouped by phase and task in the required format.
                3. Weak or block-billed entries identified and supported with file evidence.
                4. A costs schedule filed or handed to the costs specialist on time.

                ## Notes
                Costs assessment rules vary by country and court. Work with a costs specialist or your litigation partner on the format and deadlines.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A costs schedule in the assessing body's required format, supported by grouped time records, is filed or delivered by its deadline."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the assessing body's format and deadline for costs"
                - "Group time entries by phase and task"
                - "Find file evidence for weak or block-billed entries"
                - "Deliver the costs schedule to the costs specialist"
            - name: Departing fee earner time handover
              description: |-
                ## Purpose
                Leavers who go with draft time, unbilled hours and half-written narratives take the firm's evidence with them. A two-week handover ensures every hour is released, every matter has a new owner for billing, and nothing is left for a partner to reconstruct after they have left.

                ## Milestones
                1. All draft time released and narratives completed before the last day.
                2. Unbilled time on each of their matters listed with a new billing owner.
                3. Pending pro formas approved or reassigned.
                4. System access closed and time entry blocked from the leaving date.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "On the leaving date, the departing fee earner has no draft time and every matter with unbilled time has a named new billing owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the leaver to release all draft time this week"
                - "List their matters with unbilled time and assign new owners"
                - "Approve or reassign their pending pro formas"
                - "Close their time system access on the leaving date"
            - name: Sole practitioner time and billing routine
              description: |-
                ## Purpose
                A sole practitioner is fee earner, partner and billing clerk at once, so time slips first when the week gets busy. A light routine of daily capture, one billing afternoon a month and a simple write-off note keeps fees coming in without needing support staff.

                ## Milestones
                1. One capture method chosen and used every working day.
                2. A fixed billing afternoon each month blocked in the diary.
                3. A simple spreadsheet or system field noting every write-off and why.
                4. Three months of bills issued on the fixed day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A sole practitioner issues bills on a fixed monthly afternoon for three consecutive months and records every write-off."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose one time capture method you will use every day"
                - "Block a fixed billing afternoon each month in your diary"
                - "Check the week's time is complete before you finish @recurring(weekly:fri)"
                - "Note every write-off and its reason in one place"
            - name: Engagement budgets for accounting compliance work
              description: |-
                ## Purpose
                Year-end accounts, tax returns and payroll engagements are often billed at a fixed annual fee, so time over budget comes straight off profit and clients rarely see it. Setting an hours budget per engagement and reviewing actual against budget after each one shows which clients are priced below their real workload.

                ## Milestones
                1. An hours budget by stage set for each recurring compliance engagement.
                2. Time recorded against engagement stages, such as records chasing, preparation and review.
                3. Actual against budget reviewed when each engagement is signed off.
                4. Clients over budget for two years in a row flagged for a fee conversation.

                ## Notes
                Records chasing is the most common overrun. Recording it as its own stage makes the cost of late client paperwork visible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every recurring compliance engagement has an hours budget, and actual against budget is reviewed at each sign-off."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set an hours budget by stage for each recurring engagement"
                - "Add a records chasing stage to the time codes"
                - "Review actual against budget for engagements signed off this month @recurring(monthly:28)"
                - "Flag clients over budget two years running"
            - name: Engineering timesheets by stage and change order
              description: |-
                ## Purpose
                Engineering consultancies are often paid by stage or percentage complete, while clients add scope through emails and site meetings. Recording time against stages and against separate change order codes from day one gives the evidence to bill variations and stops extra work disappearing into the base fee.

                ## Milestones
                1. Timesheet codes for each project stage and a separate code per approved or pending change.
                2. Engineers recording any out-of-scope request under a pending change code the same day.
                3. Pending change time reviewed with the project lead each month.
                4. Variations billed or written off with a recorded decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active project has stage and change order codes, and pending change time is reviewed monthly with a recorded decision."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Create stage codes and a pending change code for each project"
                - "Brief engineers on recording out-of-scope requests the same day"
                - "Review pending change time with each project lead @recurring(monthly:18)"
                - "Bill or write off each variation with a recorded decision"
            - name: Trainee and junior time standards
              description: |-
                ## Purpose
                Junior staff often under-record because they feel slow, or over-record learning time that a partner then writes off. Clear standards on how to record time spent learning, being supervised or redoing work, and a weekly check by their supervisor, protect both the junior and the client.

                ## Milestones
                1. A written rule for recording learning time and rework, with the codes to use.
                2. Each junior's time checked weekly by a named supervisor for their first six months.
                3. Juniors told that recording all time is expected even when it will be written down.
                4. Write-downs on junior time tracked separately from other write-offs.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every junior has a named supervisor checking their time weekly for six months, and junior write-downs are tracked separately."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the rule for recording learning time and rework"
                - "Name a supervisor for each trainee or junior"
                - "Check your junior's time entries for the week @recurring(weekly:thu)"
                - "Track write-downs on junior time separately"
            - name: Billing coordinator role and handbook
              description: |-
                ## Purpose
                When partners produce their own bills, billing waits for the busiest people in the firm. Giving one support staff member the role of billing coordinator, with a handbook and authority to chase pro formas, moves the routine work to someone who can keep it on schedule.

                ## Milestones
                1. A written role covering pro forma production, chasing, fee note issue and portal submissions.
                2. A billing handbook with step-by-step instructions and screenshots.
                3. The coordinator given authority, agreed by partners, to escalate late pro formas.
                4. A deputy trained to cover leave and sickness.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named billing coordinator works from a written handbook, has partner-agreed escalation authority and has a trained deputy."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the billing coordinator role in one page"
                - "Ask the agent to turn the billing run checklist into a handbook outline"
                - "Agree the coordinator's escalation authority with partners"
                - "Train a deputy to cover the billing run @recurring(monthly:26)"
            - name: Realisation analysis by client, work type and partner
              description: |-
                ## Purpose
                Firm-wide realisation hides the detail that matters: one client at 60 percent, one work type that is always written down, one partner who discounts everything. A once-a-quarter analysis across those three views shows where to reprice, restaff or have a direct conversation.

                ## Milestones
                1. Twelve months of recorded, billed and collected value split by client, work type and partner.
                2. The bottom ten clients and bottom three work types by realisation listed.
                3. A short explanation and proposed action for each.
                4. Actions reviewed at the next quarter's analysis.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four quarterly realisation analyses are completed in a year, each listing the bottom clients and work types with actions."
                cadence: cyclic
              tasks:
                - "Export twelve months of recorded, billed and collected value"
                - "Rank clients and work types by realisation @recurring(quarterly)"
                - "Write an explanation and action for the bottom ten clients"
                - "Review last quarter's actions before setting new ones"
            - name: Cost rates and matter profitability
              description: |-
                ## Purpose
                Realisation shows how much of the charge-out value is billed, but not whether a matter made money. Calculating a cost rate per fee earner from salary, overheads and expected chargeable hours lets the firm compare billed fees with the true cost of the time recorded on each matter.

                ## Milestones
                1. A cost rate per fee earner from salary, benefits, share of overheads and target chargeable hours.
                2. Ten closed matters costed using recorded time and cost rates.
                3. Margin per matter compared with realisation per matter.
                4. Cost rates refreshed whenever salaries or overheads change significantly.

                ## Notes
                Agree the overhead allocation method with your accountant so cost rates are consistent from year to year.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every fee earner has a documented cost rate and ten closed matters have a calculated margin alongside their realisation."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Gather salary and overhead figures for the last full year"
                - "Calculate a cost rate for each fee earner"
                - "Cost ten closed matters from their recorded time"
                - "Refresh the cost rates against current salaries @recurring(quarterly)"
            - name: Fixed fee outcome reviews
              description: |-
                ## Purpose
                Without looking back, a firm cannot tell whether its fixed and capped fees are winning work at a profit or quietly losing money on every third matter. Reviewing each closed fixed fee matter against its recorded time, and feeding the results back to whoever prices the next one, closes the loop between time data and quotes.

                ## Milestones
                1. Every fixed or capped fee matter closed in the last year listed with price and recorded time value.
                2. Over-runs and under-runs calculated and grouped by matter type.
                3. The main causes of over-run noted, such as scope creep or staffing.
                4. A short note sent to whoever sets fixed fees, for each matter type.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every fixed or capped fee matter closed in the year has a recorded outcome, and a summary by matter type reaches whoever prices fixed fees."
                cadence: cyclic
              tasks:
                - "List fixed and capped fee matters closed in the last year"
                - "Compare each price with its recorded time value"
                - "Group over-runs and under-runs by matter type"
                - "Send a summary by matter type to whoever sets fixed fees @recurring(yearly)"
---

# Billable Time and Fee Notes

This area is for the owner or partner of a law, accounting or engineering firm whose income depends on hours being recorded honestly, described clearly and turned into fee notes that clients pay without argument. It starts with the foundations (a written time policy, a baseline of how much time leaks, activity codes, rate tables, targets and agreed definitions of realisation), then the routines that keep time flowing into bills, the skills of capture and narrative writing, the decisions about billing frequency, block billing and tools, the dated events such as year-end and rate rollover, variants for sole practitioners, accounting and engineering teams, and finally the specialist analysis of realisation, cost rates and fixed fee outcomes.

What repeats is a daily time entry habit, a Friday sweep of unreleased time, a monthly cycle of pro formas, the billing run, the write-off log and the realisation report, a quarterly audit of time entries and a yearly rate rollover and clean-up. The Purchase decision, Operational checklist, Metrics log, 1:1, Remediation plan and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
