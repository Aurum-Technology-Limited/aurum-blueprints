---
id: fundraising-investors.share-valuations-409a
name: Share Valuations & 409A
description: "Independent share valuations commissioned on time, adopted by the board and kept current, so every option exercise price holds up with the tax authority, the auditor and a future buyer."
category: business
version: 1.0.0
tags: [fundraising-investors, share-valuations-409a, founder, manager, 409a, option-pricing, fair-market-value, emi-valuation]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - compliance-control
    - remediation-plan
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Share Valuations & 409A
          description: "Commissioning independent share valuations for option pricing and tax purposes, and keeping them current as the company changes."
          projects:
            - name: Mapping which share valuation rules apply
              description: |-
                ## Purpose
                Which valuation rules bind you depends on where the company is incorporated and where each option holder pays tax, not where the founders live. A US company granting options needs a fair market value that meets section 409A, a UK company using EMI options will usually want the value agreed with the tax authority, and a team spread across several countries can face both at once. A one-page map of entities, option holders by country and the rule that applies to each tells you which valuations to commission and when.

                ## Milestones
                1. Every company entity listed with its country of incorporation and whether it grants options.
                2. Current and planned option holders counted by country of tax residence.
                3. The valuation rule or scheme that applies in each country confirmed with a tax adviser.
                4. A dated one-page rules map saved in the valuation file.

                ## Notes
                Treat the map as the question list for your tax adviser, not the answer. Rules change, and the adviser confirms which apply to you.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page map lists each entity and each country with option holders, with the valuation rule a tax adviser has confirmed for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each company entity with its country of incorporation"
                - "Count current and planned option holders by country of tax residence"
                - "Send the draft map to your tax adviser with three specific questions"
                - "Save the confirmed rules map in the valuation file with today's date"
            - name: Valuation history file from incorporation onwards
              description: |-
                ## Purpose
                Acquirers, auditors and listing counsel all ask the same thing: show every value the company has used for option grants and the evidence behind it. Gathering each past report, engagement letter, board minute and the grants made under it into one indexed file means the history can be handed over in a day, and gaps surface while the people who signed are still around.

                ## Milestones
                1. Every past valuation report saved as the final signed version.
                2. Each report paired with its engagement letter and the board minute that adopted it.
                3. A table showing each valuation date, value per common share, expiry and the grants made under it.
                4. Gaps such as missing reports or grants with no valuation in force listed, each with an owner.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An indexed file holds every past report with its adopting minute, and a summary table links each option grant to the valuation in force on its grant date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a valuation history folder with one sub-folder per valuation date"
                - "Ask the company's lawyer for every board minute that set an exercise price"
                - "Build a table of valuation date, value per share, expiry and grants made"
                - "Flag any grant made when no current valuation was in force"
            - name: Valuation owner and board approval route
              description: |-
                ## Purpose
                Valuations lapse when everyone assumes someone else ordered the renewal. Naming one owner, usually the finance lead or a founder, and writing down the route from commissioning to board adoption gives the process a home. It also makes the board's role explicit: directors adopt the value after reviewing an independent report, they do not invent it.

                ## Milestones
                1. One named owner for commissioning, inputs and renewal, with a deputy.
                2. The steps from engagement letter to board adoption written on one page.
                3. Who reviews the draft report and who signs the board resolution agreed.
                4. The route shared with the board chair and the company's lawyer.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page approval route names the valuation owner and deputy and has been acknowledged by the board chair in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name the valuation owner and a deputy in writing"
                - "Draft the route from engagement letter to board resolution on one page"
                - "Send the route to the board chair for agreement"
                - "Reconfirm the owner and deputy at the first board meeting of the year @recurring(yearly)"
            - name: Material event list that triggers a new valuation
              description: |-
                ## Purpose
                Even a three-month-old valuation stops being reliable as soon as something important changes. Agreeing in advance what counts as a material event for your company, such as a signed term sheet, a large customer won or lost, a secondary sale or an acquisition approach, means nobody grants options on a stale price by accident.

                ## Milestones
                1. A draft list of trigger events written with your valuation provider.
                2. Thresholds set where a trigger needs a number, such as revenue moving well away from plan.
                3. The list approved by the valuation owner and noted at a board meeting.
                4. A rule that grants pause while a possible trigger is being assessed.

                ## Notes
                Your provider and adviser judge whether an event is material for the valuation. The list makes sure they are asked in time.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written trigger list with thresholds, noted in board minutes, sits in the valuation file alongside a pause-grants rule."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your valuation provider which events usually require a new valuation"
                - "Draft a trigger list with a threshold beside each item"
                - "Add a pause-grants rule for when a trigger is under review"
                - "Table the list at the next board meeting for noting"
            - name: Independent valuation provider selection
              description: |-
                ## Purpose
                Providers range from software-led services that turn a report round in two weeks to valuation firms that defend their work in audits and listing filings, and the cheapest choice can cost more when an auditor rejects it. Comparing three providers on independence, credentials, turnaround, refresh pricing and willingness to speak to your auditor gives you one you can keep for several years.

                ## Milestones
                1. Three providers shortlisted, at least one recommended by your auditor or lawyer.
                2. Each scored on the same criteria: qualifications, audit acceptance, turnaround, fees and refresh terms.
                3. References taken from two companies at a similar stage.
                4. A provider chosen and the reason written in the decision record.

                ## Notes
                Start from the **Purchase decision** template. Ask each provider directly whether an auditor has ever challenged one of its reports and what happened next.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider is chosen from three scored on the same criteria, with two references taken and the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your auditor and lawyer which valuation providers they see accepted"
                - "Request scope, fee and turnaround from three providers"
                - "Call two founders or finance leads who used each finalist"
                - "Record the chosen provider and the reasons in the decision record"
            - name: Engagement letter and scope for the valuation
              description: |-
                ## Purpose
                An engagement letter that only names a common stock valuation leaves open the valuation date, the standard of value, which share classes and entities are covered and what a mid-year refresh costs. Agreeing those points in writing before work starts avoids a second invoice when the board needs an update after a material event, and gives the auditor a clear statement of purpose.

                ## Milestones
                1. The valuation date and purpose, option pricing, accounts or both, stated in the letter.
                2. Share classes, entities and any other instruments in scope listed.
                3. Fees for the full valuation, refreshes and auditor queries agreed.
                4. Delivery dates for the draft and final report written in.
                5. The signed letter filed in the valuation history file.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed engagement letter states the valuation date, purpose, scope, refresh and query fees, and draft and final delivery dates."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the provider's draft engagement letter against your rules map"
                - "Ask for refresh and auditor query fees to be written into the letter"
                - "Agree draft and final report dates that suit the board calendar"
                - "File the signed letter in the valuation history folder"
            - name: Information pack for the valuation provider
              description: |-
                ## Purpose
                Most delays in a valuation come from the company, not the valuer: the forecast is out of date, the cap table does not match the register, or nobody can find the last round's documents. Assembling a standard pack once, with financial statements, the board-approved forecast, cap table, articles and round documents, cuts turnaround and means every later refresh starts from the same folder.

                ## Milestones
                1. Latest annual and year-to-date financial statements in the pack.
                2. The board-approved forecast with its key assumptions written out.
                3. A cap table reconciled to the register, showing every share class and convertible.
                4. Articles, shareholders' agreement and recent round documents included.
                5. A short company narrative covering product, customers, competitors and risks.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete information pack matching the provider's request list is delivered within two weeks of signing the engagement letter."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Get the provider's information request list and save it in the pack folder"
                - "Export the latest financial statements and year-to-date figures"
                - "Write a two-page narrative on product, customers, competitors and risks"
                - "Ask the agent to check the pack against the request list and list the gaps"
            - name: First independent 409A valuation for option grants
              description: |-
                ## Purpose
                A US company should have a defensible fair market value before it grants its first options, because an exercise price below that value can bring heavy tax consequences for the employee, not only the company. Commissioning an independent valuation before the first grant, rather than guessing a price or reusing the last round price, puts the company in the strongest position the rules allow.

                ## Milestones
                1. Provider engaged and the information pack delivered.
                2. Draft report received and reviewed by the valuation owner.
                3. Questions on the draft answered and the final report issued.
                4. Fair market value per common share and the valuation date recorded.
                5. No options granted until the board has adopted the value.

                ## Notes
                Outside the US the same steps apply under your own country's rules; the rules map tells you which. Your tax adviser confirms whether the valuation meets the conditions those rules set.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A final independent valuation report stating a value per common share is in the valuation file before any option is granted."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm with your lawyer that no options have been promised at a set price"
                - "Send the engagement letter and information pack to the provider"
                - "Book a call with the valuer to walk through the forecast"
                - "Record the final value per share and valuation date in the history table"
            - name: Board resolution adopting the fair market value
              description: |-
                ## Purpose
                Boards, not valuers, set the exercise price, and the minute is what auditors and acquirers read first. A resolution that records the report reviewed, the value adopted, the valuation date and the directors' view that nothing material has changed since gives the price its footing and makes later grants simple to approve.

                ## Milestones
                1. The final report circulated to directors before the meeting.
                2. A resolution drafted with the valuation date, value per share and report reference.
                3. Directors' confirmation that no material event has occurred since the valuation date minuted.
                4. The signed minute filed next to the report.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Signed board minutes adopt the value per common share, cite the report and record that no material event has occurred since its date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the company's lawyer for a standard resolution adopting a valuation"
                - "Circulate the final report to directors a week before the meeting"
                - "Minute the directors' confirmation that nothing material has changed"
                - "File the signed minute next to the report in the history folder"
            - name: Grant freeze rule when a valuation lapses
              description: |-
                ## Purpose
                Offer letters keep promising options while the valuation quietly expires, and grants approved a week later are priced on a value nobody can defend. A written rule that freezes grants from a set date before expiry, or while a material event is assessed, protects new hires as much as the company, because they are the ones who carry the tax risk.

                ## Milestones
                1. A freeze start date agreed, such as 30 days before expiry.
                2. Hiring managers and the people team told how the freeze affects offer letters.
                3. Offer letter wording changed to promise options subject to board approval at the price then in force.
                4. The rule written into the valuation approval route.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written grant freeze rule exists, and the offer letter template promises options only at the price in force on the board grant date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree how many days before expiry new grants stop"
                - "Rewrite the offer letter option clause with the company's lawyer"
                - "Brief hiring managers and the people team on the freeze rule"
                - "Add the freeze rule to the valuation approval route"
            - name: Valuation validity and renewal calendar
              description: |-
                ## Purpose
                Valuations are usually relied on for up to twelve months unless something material happens first, and a renewal needs six to eight weeks from engagement to board adoption. A calendar holding the expiry date, the date to start the pack and the board meeting that will adopt the new value keeps grants flowing without a gap.

                ## Milestones
                1. The current valuation date and expiry written in one shared calendar.
                2. A renewal start date set at least eight weeks before expiry.
                3. The board meeting that will adopt the new value identified.
                4. A monthly check in place on days left and grants pending.

                ## Notes
                Confirm the reliance period with your adviser. Twelve months is a common outer limit under the US rules, not a guarantee.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The calendar shows the current expiry, the renewal start date and the adopting board meeting, and no month passes without the check."
                cadence: rolling
              tasks:
                - "Enter the current valuation date and expiry in the shared calendar"
                - "Set the renewal start date eight weeks before expiry"
                - "Pencil in the board meeting that will adopt the new value"
                - "Check days left on the current valuation and grants pending @recurring(monthly:9)"
            - name: Quarterly material event review
              description: |-
                ## Purpose
                Material events rarely announce themselves: a big contract signed in sales, a founder selling shares privately, an inbound acquisition email. A short quarterly check against the trigger list, with the founders and the finance lead, catches them before the next grant round rather than during an audit.

                ## Milestones
                1. A five-question checklist built from the trigger list.
                2. Founders, the finance lead and the sales lead asked the questions every quarter.
                3. Answers and any trigger found recorded in the decisions log.
                4. The provider contacted within a week whenever a trigger is found.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter has a dated review in the decisions log, and every trigger found was raised with the provider within a week."
                cadence: rolling
              tasks:
                - "Turn the trigger list into five yes or no questions"
                - "Ask founders whether any shareholder has sold or plans to sell shares"
                - "Record the quarter's answers in the valuation decisions log"
                - "Run the material event questions with founders and finance @recurring(quarterly)"
            - name: Annual valuation refresh cycle
              description: |-
                ## Purpose
                Even with no material event the value goes stale after a year, and a refresh done in a rush the week before grants is the one that gets questioned. Running the same cycle every year, pack refreshed, provider briefed, draft reviewed and board adoption, turns renewal into a routine six-week job with no gap in cover.

                ## Milestones
                1. The information pack refreshed with the latest year's figures and forecast.
                2. Changes since the last valuation summarised for the provider.
                3. The draft report compared with last year's for movements in method and inputs.
                4. The new value adopted by the board before the old one expires.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year a new valuation is adopted by the board before the previous one expires, with no grants priced on an expired value."
                cadence: cyclic
              tasks:
                - "Write a one-page note of what changed since the last valuation"
                - "Refresh the information pack with this year's accounts and forecast"
                - "Compare the draft with last year's report section by section"
                - "Start the annual refresh eight weeks before expiry @recurring(yearly)"
            - name: Exercise price check before every option grant
              description: |-
                ## Purpose
                Grants are the moment the valuation matters, and errors there are expensive to undo: a price copied from an old minute, a grant date after expiry, a value from the wrong entity. A three-point check before each board approval, value in force, grant date inside the window and no open trigger, stops the error at the cheapest point.

                ## Milestones
                1. A three-point check written and added to the grant approval paperwork.
                2. Every proposed grant list checked against the current valuation before circulation.
                3. The check signed off by the valuation owner each time.
                4. Grants approved each month reconciled to the valuation in force.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every grant approved in the last twelve months carries a signed price check and matches the valuation in force on its grant date."
                cadence: rolling
              tasks:
                - "Write the three-point price check on one page"
                - "Add the check to the board grant approval pack"
                - "Sign off the check before each grant list goes to the board"
                - "Reconcile grants approved this month to the valuation in force @recurring(monthly:5)"
            - name: Valuation inputs folder kept current
              description: |-
                ## Purpose
                Each valuation draws on the same inputs: monthly accounts, the latest forecast, the cap table, the sales pipeline and round documents. Dropping each month's final versions into one folder as they are finished means a refresh or a triggered valuation can start the same week, not a month later while finance chases files.

                ## Milestones
                1. A folder with fixed sub-folders for accounts, forecast, cap table, contracts and rounds.
                2. Each month's final management accounts filed by a set day.
                3. The cap table export refreshed whenever shares or options are issued.
                4. A running note of large contracts signed or lost kept alongside.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The inputs folder holds the last twelve months of accounts and a cap table export no older than the latest share or option issue."
                cadence: rolling
              tasks:
                - "Create the inputs folder with five fixed sub-folders"
                - "Agree with the accountant a day each month for final accounts"
                - "File the month's accounts, forecast and cap table export @recurring(monthly:23)"
                - "Add a line to the contracts note when a large customer signs or leaves"
            - name: Draft valuation report review checklist
              description: |-
                ## Purpose
                A draft report arrives with sixty pages and a deadline, and many founders read the conclusion and sign off. A standard checklist covering company facts, the cap table, the forecast used, method weightings and discounts means errors are corrected while still in draft, and the board adopts a report it can rely on.

                ## Milestones
                1. A review checklist of 10 to 15 points saved for reuse.
                2. Factual errors and outdated figures listed and sent to the provider.
                3. Method choices and discounts the owner does not understand raised as questions.
                4. Written answers from the provider filed with the final report.

                ## Notes
                Start from the **Operational checklist** template. Correcting facts is the company's job; judgments on method and discount stay with the independent valuer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each draft report has a completed checklist and a filed list of questions and answers before the board adopts the final value."
                cadence: rolling
              tasks:
                - "Build a review checklist of 10 to 15 points from the template"
                - "Check the report's cap table against your reconciled cap table"
                - "Send factual corrections and questions to the provider in one email"
                - "File the completed checklist with the final report"
            - name: Share-based payment expense inputs for the accounts
              description: |-
                ## Purpose
                Under US GAAP (ASC 718) or IFRS 2 the accounts carry an expense for options granted, and the calculation starts from the common share value on each grant date. Getting the valuer's figures and clean grant data to the accountant every quarter keeps the expense right and avoids a painful rebuild at year end.

                ## Milestones
                1. The accounting standard that applies and who calculates the expense confirmed.
                2. A grant data export agreed with dates, numbers, exercise prices and vesting terms.
                3. The common share value for each grant date supplied from the valuation file.
                4. Quarterly expense figures reviewed and filed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter the accountant receives grant data and grant-date share values, and the expense is booked before that quarter's accounts close."
                cadence: cyclic
              tasks:
                - "Ask the accountant which standard and expense method they use"
                - "Agree the grant data export fields with the accountant"
                - "Send the quarter's grant data and share values to the accountant @recurring(quarterly)"
                - "File each expense calculation next to the valuation it used"
            - name: Exercise records and values for employee tax reporting
              description: |-
                ## Purpose
                When an employee exercises options, many tax systems tax the gap between the exercise price and the share value on that day, and the company may have to report it or withhold tax. Recording the value in force on each exercise date, and sending it to payroll the same month, saves corrections, penalties and unhappy employees.

                ## Milestones
                1. The reporting duties on exercise confirmed with payroll or a tax adviser for each country.
                2. An exercise log kept with date, holder, shares, exercise price and value per share.
                3. Each month's exercises sent to payroll with the values used.
                4. Year-end employee tax forms checked against the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every exercise in the year appears in the log with the value used, and year-end employee tax forms match the log."
                cadence: rolling
              tasks:
                - "Ask payroll what it needs from you when an employee exercises"
                - "Set up an exercise log with date, holder, shares, price and value"
                - "Send the month's exercises and values to payroll @recurring(monthly:28)"
                - "Check year-end employee tax forms against the exercise log"
            - name: Valuation decisions and assumptions log
              description: |-
                ## Purpose
                Three years from now someone will ask why the board accepted a large marketability discount, or why no refresh followed a big contract. A running log of every valuation decision, who made it and the evidence behind it answers in minutes what would otherwise depend on memory and old email threads.

                ## Milestones
                1. A log with columns for date, decision, reason, decided by and evidence.
                2. Past decisions reconstructed from minutes and emails as far back as practical.
                3. Every trigger review, refresh choice and challenged assumption entered when it happens.
                4. The log reviewed each quarter for open questions.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The decisions log holds a dated entry for every valuation, refresh choice and trigger review since it was started."
                cadence: rolling
              tasks:
                - "Set up the decisions log with five columns"
                - "Reconstruct entries for past valuations from board minutes"
                - "Enter each valuation decision in the log within a week of making it"
                - "Review the log for open questions and unanswered items @recurring(quarterly)"
            - name: Annual valuation provider performance review
              description: |-
                ## Purpose
                What suited the company at seed can be wrong at Series B, when the auditor starts testing the work and a listing is on the horizon. A short yearly review of turnaround, quality of answers, auditor acceptance and fees tells you whether to stay, renegotiate or move before the next renewal starts.

                ## Milestones
                1. Turnaround, fees and audit queries for the year gathered.
                2. The provider scored against the original selection criteria.
                3. A stay, renegotiate or move decision recorded.
                4. Any change agreed in time for the next refresh.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A yearly review scores the provider against the selection criteria and records a stay, renegotiate or move decision before renewal."
                cadence: cyclic
              tasks:
                - "List the year's reports, turnaround times and fees"
                - "Ask the auditor whether they had any concerns with the provider's work"
                - "Score the provider against the original selection criteria"
                - "Hold the provider review two months before renewal @recurring(yearly)"
            - name: How independent share valuations work
              description: |-
                ## Purpose
                Founders often meet their first valuation report without knowing what question it answers: what a willing buyer would pay for one common share today, given everything that ranks ahead of it. An evening spent on the three approaches, how value is split between share classes and where the discounts come from makes every later conversation with the valuer shorter and sharper.

                ## Milestones
                1. The difference between company value and common share value explained in your own words.
                2. The income, market and asset approaches each summarised in two sentences.
                3. How preferences and allocation methods affect the common share value understood.
                4. Five questions for your valuer written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains the three approaches and allocation in plain words and lists five questions for the valuer."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a plain-language guide to private company share valuation"
                - "Write a two-sentence summary of each valuation approach"
                - "Ask the agent to quiz you on company value versus common share value"
                - "List five questions to ask your valuer on the next call"
            - name: Why common shares are priced below preferred
              description: |-
                ## Purpose
                New employees see a round at a high price per share and an option price far lower, and they ask whether something is wrong. Understanding why common shares are worth less, through liquidation preferences, lack of control and no market to sell into, lets founders and managers explain the gap honestly without promising what the shares will one day be worth.

                ## Milestones
                1. The preference stack in your own articles summarised.
                2. The main reasons for the gap in your latest report identified.
                3. A short plain-language explanation drafted for hiring managers.
                4. The explanation checked by the company's lawyer before use.

                ## Notes
                Never tell an employee what their options will be worth. Explain how the price was set and point them to their own tax adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lawyer-checked one-paragraph explanation of the gap between common and preferred prices is in use by hiring managers."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the liquidation preference terms in your articles"
                - "Highlight where your latest report explains the gap to preferred"
                - "Draft a one-paragraph explanation for hiring managers"
                - "Send the paragraph to the company's lawyer for checking"
            - name: Backsolve from the last round price
              description: |-
                ## Purpose
                After a recent priced round, valuers often start from that price and work backwards to a value for the whole company, then down to the common shares. Knowing how the backsolve works, and which round terms move it, lets you check that the valuer used the right round, the right preferences and the right share count.

                ## Milestones
                1. The logic of a backsolve set down in a short worked example.
                2. The round terms that affect it, such as preference multiple and participation, listed for your last round.
                3. The share count and round price in your report checked against the closing documents.
                4. Questions on any mismatch sent to the valuer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked backsolve example and a check of the report's round inputs against the closing documents are filed with the valuation."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the backsolve section of your latest valuation report"
                - "List the preference, participation and share count from the round documents"
                - "Check each round input in the report against the closing documents"
                - "Send the valuer any mismatch you find"
            - name: Discounted cash flow inputs a valuer will test
              description: |-
                ## Purpose
                Where a company has a forecast that means something, valuers give weight to an income approach, and a forecast built to impress investors can produce a higher common value than expected. Learning what drives a discounted cash flow, growth, margins, the discount rate and the terminal value, shows why the forecast handed to the valuer must be the one the board actually approved.

                ## Milestones
                1. The four main drivers of a discounted cash flow explained in a note.
                2. How your forecast's growth and margins flow into the value traced in the report.
                3. The discount rate the valuer used and its stated basis noted.
                4. A rule agreed that only the board-approved forecast goes to the valuer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note traces how the board-approved forecast drives the income approach in the latest report and records the basis of the discount rate."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read an introduction to discounted cash flow valuation"
                - "Trace your forecast's revenue growth through the report's income approach"
                - "Note the discount rate the valuer used and how it was built"
                - "Agree with the finance lead that only the board-approved forecast is sent"
            - name: Comparable companies and transactions in a valuation
              description: |-
                ## Purpose
                The market approach values the company against listed peers and recent deals, and the peer set chosen can swing the result more than almost any other input. Knowing how valuers pick comparables and multiples lets you point out peers that do not fit your business model, a factual correction you are entitled to make.

                ## Milestones
                1. The peer companies and transactions in your latest report listed.
                2. Each peer's business model compared with yours in a sentence.
                3. The multiple used, such as revenue or earnings, and the reason noted.
                4. Any peer that does not fit raised with the valuer, with reasons.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note compares each peer in the report with the company's model, and any poor fit has been raised with the valuer in writing."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Copy the list of comparable companies from your latest report"
                - "Write one sentence on how each peer's model differs from yours"
                - "Note which multiple the valuer applied and the reason given"
                - "Email the valuer about any peer that does not fit"
            - name: OPM, PWERM and hybrid allocation methods
              description: |-
                ## Purpose
                Once the company value is set, the valuer must divide it between share classes, and the method chosen, an option pricing model, a probability-weighted scenario model or a hybrid of the two, can move the common value a long way. Founders and finance leads who understand all three can check that the exit scenarios and timing in the report reflect the company's real plans.

                ## Milestones
                1. Each allocation method described in two sentences in your own words.
                2. The method in your latest report and the reason given identified.
                3. Exit scenarios, probabilities and time to exit in the report compared with the board's view.
                4. Any scenario that no longer reflects plans raised with the valuer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note names the allocation method used, compares its exit assumptions with the board's view and records any points raised with the valuer."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a plain guide to option pricing and scenario allocation methods"
                - "Find which allocation method your latest report used"
                - "Compare the report's time to exit with the board's current view"
                - "Raise outdated scenarios with the valuer before the next refresh"
            - name: Discount for lack of marketability explained
              description: |-
                ## Purpose
                The discount for lack of marketability reflects that a private common share cannot be sold quickly, and it is often one of the largest single adjustments in a report. Understanding how valuers estimate it, and what changes it, such as an active secondary market or an exit coming closer, explains why it usually shrinks as a company matures.

                ## Milestones
                1. The purpose of the discount explained in a short note.
                2. The discount in each past report listed with the method used.
                3. Company events that would justify a smaller discount listed.
                4. Questions on any large change between reports answered by the valuer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table shows the marketability discount and method from each past report, with the valuer's explanation for any large change."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the marketability discount in each past valuation report"
                - "Tabulate the discount and method used each time"
                - "List company events that would shorten the expected time to sale"
                - "Ask the valuer to explain the largest change between reports"
            - name: Reading a valuation report end to end
              description: |-
                ## Purpose
                Valuation reports follow a standard order: purpose and standard of value, company and industry, methods and weightings, allocation, discounts, conclusion and limiting conditions. Reading one properly once, pen in hand, makes every future report a one-hour review and shows you which sections auditors read first.

                ## Milestones
                1. Each section of your latest report summarised in one line.
                2. The standard of value and valuation date identified.
                3. The limiting conditions and reliance statements read and noted.
                4. A one-page summary filed with the report for directors.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page section-by-section summary of the latest report is filed with it and has been circulated to directors."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set aside two hours to read the full latest report"
                - "Write a one-line summary of each section"
                - "Note the standard of value and the limiting conditions"
                - "Ask the agent to turn your notes into a one-page summary for directors"
            - name: Timing a valuation around a priced round
              description: |-
                ## Purpose
                Granting options just before a round closes, on a value set months earlier, is one of the most common problems found in diligence, while granting just after can mean a much higher price for the hires you are trying to attract. Deciding the timing with your provider before the term sheet is signed lets you plan grants, the valuation date and the board meeting together.

                ## Milestones
                1. The expected round timeline set against the current valuation expiry.
                2. The provider's view on when a new valuation is needed recorded.
                3. A decision made on pending grants, either before the term sheet or after the new value.
                4. The plan noted in the decisions log and shared with hiring managers.

                ## Notes
                Once a term sheet is signed, most valuers treat it as a material event. Ask before you grant, not after.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision sets when pending grants will be made relative to the round and the new valuation date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set the round timeline beside the valuation expiry date"
                - "Ask your provider when a new valuation would be needed"
                - "Decide whether pending grants go before the term sheet or after the new value"
                - "Record the timing decision in the valuation decisions log"
            - name: Full valuation or bring-down refresh decision
              description: |-
                ## Purpose
                Providers usually offer a full valuation and a cheaper refresh that updates an existing report for recent results or a single event. Knowing when a refresh is enough, and when a new round, a pivot or an acquisition approach needs a full valuation, saves fees without weakening the file an auditor will later test.

                ## Milestones
                1. The provider's definitions and prices for full and refresh work recorded.
                2. Criteria agreed for when a refresh is acceptable.
                3. The type of the next valuation chosen against those criteria.
                4. The reasoning recorded in the decisions log.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written criteria decide between full and refresh work, and the next valuation's type is chosen and logged against them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your provider what a refresh covers and what it costs"
                - "Write three criteria that require a full valuation"
                - "Choose the type for the next valuation against the criteria"
                - "Log the choice and the reasoning"
            - name: Challenging an assumption in a draft valuation
              description: |-
                ## Purpose
                Companies are entitled to correct facts and question reasoning in a draft, but pushing a valuer towards a lower number undermines the independence that gives the report its weight. Raising a challenge properly, in writing, with evidence and on facts rather than the answer you want, keeps the report defensible whichever way the valuer decides.

                ## Milestones
                1. The assumption in question identified with its page reference.
                2. Evidence gathered, such as signed contracts, an updated pipeline or a peer that does not fit.
                3. A written query sent to the valuer, framed as a question with evidence.
                4. The valuer's response and any change filed with the final report.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written challenge with supporting evidence and the valuer's written reply are filed with the final report."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the assumption you question with its page number"
                - "Gather the documents that show the facts are different"
                - "Send the valuer a written question with the evidence attached"
                - "File the valuer's reply with the final report"
            - name: Benchmarking common to preferred price ratios
              description: |-
                ## Purpose
                Auditors and investors often compare the common value with the last preferred price, and a ratio far from companies at a similar stage invites questions. Asking your provider for anonymised ranges at your stage, and tracking your own ratio across valuations, shows whether your numbers will look ordinary or need explaining.

                ## Milestones
                1. Your common to preferred ratio calculated for each past valuation.
                2. Stage-matched ranges obtained from your provider or a published survey.
                3. Any unusual ratio explained in a sentence with the valuer's reasoning.
                4. The ratio trend added to the valuation history table.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The history table shows the common to preferred ratio for each valuation beside a stage-matched range, with a note on any outlier."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Calculate the common to preferred ratio for each past valuation"
                - "Ask your provider for typical ranges at your stage"
                - "Note the valuer's reason for any ratio outside the range"
                - "Add a ratio column to the valuation history table"
            - name: Repricing underwater options after a valuation fall
              description: |-
                ## Purpose
                When a new valuation comes in below the exercise price of earlier grants, those options stop motivating anyone. Repricing or exchanging them is possible in many systems but carries tax, accounting and shareholder approval consequences, so the decision needs advisers, a costed comparison and a clear message to employees.

                ## Milestones
                1. Underwater grants listed with holders, prices and vesting status.
                2. Choices such as repricing, an exchange or new top-up grants set out with advisers.
                3. The accounting charge and tax effect of each choice estimated by the accountant and adviser.
                4. A board decision recorded and employees told what it means for them.

                ## Notes
                This is a board and adviser decision. Some option schemes and tax regimes limit or penalise repricing, so check before promising anything.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board decision on underwater options is minuted with adviser input on tax and accounting, and affected employees have been told the outcome."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every grant priced above the new value with its holder"
                - "Ask advisers to set out the repricing and exchange choices"
                - "Get the accountant's estimate of the accounting charge"
                - "Draft the employee message once the board decides"
            - name: Written share valuation policy
              description: |-
                ## Purpose
                Pulling the owner, approval route, trigger list, freeze rule and renewal cycle into one short document the board adopts gives the process a single reference. It is the first thing an auditor or acquirer asks for, and it outlasts the finance lead who wrote it.

                ## Milestones
                1. A policy of two to three pages drafted from the existing rules.
                2. The draft reviewed by the company's lawyer and auditor.
                3. The policy adopted by the board and minuted.
                4. An annual review date set in the calendar.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board-adopted valuation policy covering owner, approval, triggers, freeze and renewal is in the valuation file with an annual review date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the owner, route, trigger and freeze rules into one draft"
                - "Send the draft to the company's lawyer and auditor for comment"
                - "Table the policy for board adoption"
                - "Review the policy against the year's events @recurring(yearly)"
            - name: Valuation budget and frequency decision
              description: |-
                ## Purpose
                Fees grow with company complexity, and a company hiring every month may need valuations quarterly rather than yearly. Setting a budget and a frequency from the hiring plan, round timing and audit needs avoids paying for valuations nobody uses and leaving new hires waiting months for a price.

                ## Milestones
                1. Planned grant dates for the year mapped from the hiring plan.
                2. Expected material events, such as a round, added to the same timeline.
                3. A frequency chosen, yearly, half-yearly or quarterly, with its cost.
                4. The valuation line agreed in the annual budget.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The annual budget carries a valuation line based on a chosen frequency that matches planned grant dates and expected events."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Map the year's planned grant dates from the hiring plan"
                - "Add the expected round and other likely triggers to the timeline"
                - "Get the provider's prices for yearly, half-yearly and quarterly cover"
                - "Agree the valuation budget line with the finance lead"
            - name: Early exercise elections and the value on record
              description: |-
                ## Purpose
                Where options can be exercised before they vest, or founders receive restricted shares, the holder may make a tax election that fixes tax on today's value, and that value must come from the valuation in force. In the US this is the 83(b) election, with a 30-day filing window. Keeping the value, the paperwork and proof of filing for each holder avoids painful questions at exit.

                ## Milestones
                1. Holders with early exercised options or restricted shares listed.
                2. The value per share used for each election matched to the valuation in force.
                3. A copy of each election and proof of filing held, where the holder shares them.
                4. New early exercisers reminded to speak to their own tax adviser at once.

                ## Notes
                The election is the holder's own decision and filing. The company supplies the value and keeps records; it does not advise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every early exercise or restricted share issue has its value per share recorded and matched to the valuation in force, with election copies held where shared."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List holders who exercised early or received restricted shares"
                - "Match each issue's value per share to the valuation then in force"
                - "Ask holders for a copy of their election and proof of filing"
                - "Check for new early exercises or restricted share issues @recurring(quarterly)"
            - name: New valuation after a priced round closes
              description: |-
                ## Purpose
                Closing a priced round almost always makes the old value unusable, and the hires the round pays for are waiting for their options. Commissioning the new valuation the week the round closes, with the closing documents and the new cap table, gets grants out in weeks rather than months.

                ## Milestones
                1. Grants frozen from the day the term sheet was signed.
                2. Closing documents and the post-closing cap table sent to the provider.
                3. The new valuation delivered and adopted by the board.
                4. The backlog of promised grants approved at the new price.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A new valuation is adopted within eight weeks of closing and every promised grant is approved at that value."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm grants have been frozen since the term sheet was signed"
                - "Send the closing documents and new cap table to the provider"
                - "Book the board meeting to adopt the value and approve grants"
                - "List every promised grant waiting for the new price"
            - name: Valuation after an acquisition approach
              description: |-
                ## Purpose
                An inbound offer or serious acquisition talks can change what a common share is worth overnight, even if no deal follows. Pausing grants, telling the valuer in confidence and deciding with advisers whether a new valuation is needed stops the board granting options at a price a buyer's lawyers will later question.

                ## Milestones
                1. Grants paused from the date talks became serious.
                2. The provider told in confidence and asked whether a new valuation is needed.
                3. A board decision on revaluing recorded in the decisions log.
                4. Grants resumed only on a value that takes the approach into account.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Grants were paused within a week of serious acquisition talks and resumed only on a value the board adopted after considering them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pause pending grants and tell the valuation owner why"
                - "Brief the provider in confidence under the engagement terms"
                - "Ask the board to decide whether a new valuation is needed"
                - "Record the decision and its date in the decisions log"
            - name: Secondary sale price and the common share value
              description: |-
                ## Purpose
                When founders or early employees sell shares to an investor, the price paid is evidence of value, and valuers and tax authorities may treat it that way even when it was a one-off. Telling the valuer about every secondary sale, with price, volume and buyer, and agreeing how much weight it carries keeps the common value defensible.

                ## Milestones
                1. Every secondary sale in the last two years listed with price, number of shares and buyer type.
                2. The documents for each sale shared with the provider.
                3. The provider's view on the weight each sale carries recorded.
                4. A rule in place that planned secondary sales are flagged to the valuation owner in advance.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "All secondary sales are listed and shared with the provider, its view on their weight is recorded, and an advance-notice rule is in place."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List secondary sales from the last two years with price and volume"
                - "Send the sale documents to the valuation provider"
                - "Record how much weight the provider gives each sale"
                - "Remind shareholders to flag planned share sales to the valuation owner @recurring(yearly)"
            - name: Year-end audit questions on the valuation
              description: |-
                ## Purpose
                Once a company is audited, the auditor will test the share values behind the share-based payment expense, often with its own valuation specialists. Preparing the reports, minutes, grant list and provider contact before fieldwork starts turns a week of back and forth into a single meeting.

                ## Milestones
                1. The year's valuation reports and their adopting minutes ready to send.
                2. A grant list tied to the valuation in force on each grant date.
                3. The provider briefed and available to the auditor's specialists.
                4. Audit questions and answers filed in the valuation file.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before fieldwork the auditor receives every report, minute and the tied grant list, and all valuation queries are closed before sign-off."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Ask the auditor what valuation evidence they will want this year"
                - "Tie the year's grants to the valuation in force on each date"
                - "Tell the provider when the auditor's specialists may call"
                - "Send the auditor the year's reports and minutes before fieldwork @recurring(yearly)"
            - name: Valuation history for acquirer due diligence
              description: |-
                ## Purpose
                Buyers' lawyers check whether every option was granted at fair market value, because mispriced grants become the buyer's problem and can be priced into the deal. Having the history file, price check records and any remediation ready before diligence opens keeps the conversation short and the purchase price intact.

                ## Milestones
                1. The valuation history file brought up to date and indexed.
                2. Each grant shown against the valuation in force, with its board minute.
                3. Any known gaps or corrections explained in a short memo from counsel.
                4. The pack placed in the equity section of the data room.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A diligence-ready pack ties every grant to an adopted valuation, with counsel's memo on any gaps, and is loaded before buyer diligence opens."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Update the valuation history file and its index"
                - "Produce a grant-by-grant table with the valuation and minute for each"
                - "Ask counsel to write a short memo on any known gaps"
                - "Load the pack into the equity section of the data room"
            - name: Cheap stock review before a listing
              description: |-
                ## Purpose
                In the year or two before a listing, regulators and auditors look hard at options granted at values well below the expected offer price, a question known as cheap stock. Reviewing past valuations with the listing accountants early, and explaining each step up in value with a business event, avoids restated accounts or a delayed filing.

                ## Milestones
                1. Valuations and grants from the last two years laid out on one timeline.
                2. Each step up in value linked to a business event or a change in exit assumptions.
                3. The listing accountants' view on any gap recorded.
                4. Extra valuation work or disclosure agreed where the story does not hold.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A two-year timeline links each change in common value to an event, and the listing accountants have recorded their view on every gap."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Lay out the last two years of valuations and grants on one timeline"
                - "Write the business event behind each step up in value"
                - "Book a session with the listing accountants to walk through the timeline"
                - "Agree any extra valuation work they ask for"
            - name: Valuation for a bootstrapped company with no priced round
              description: |-
                ## Purpose
                Bootstrapped and profitable companies granting options for the first time have no recent round for a valuer to work back from, so the result rests on earnings, forecasts and comparable businesses. Preparing clean accounts, a forecast the founders will stand behind and a clear explanation of owner pay, which often distorts profit, gives the valuer something solid and the founders fewer surprises.

                ## Milestones
                1. Two to three years of accounts with owner pay and one-off items explained.
                2. A forecast the founders and board have approved.
                3. A list of businesses the founders regard as genuine peers, with reasons.
                4. The first value adopted and the method explained to directors.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first valuation based on adjusted accounts and an approved forecast is adopted by the board, with the method explained in the minute."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the last three years of accounts into the information pack"
                - "List owner pay and one-off items that distort profit"
                - "Write down the businesses the founders see as real peers"
                - "Ask the valuer to explain which methods carried most weight"
            - name: Finance lead inheriting the valuation process
              description: |-
                ## Purpose
                Finance managers joining a startup often find the valuation history in a founder's inbox, with a report that expired months ago and grants promised since. A first-month review of what exists, what has lapsed and what was granted when lets you fix the gaps before anyone else finds them, and own the process from then on.

                ## Milestones
                1. Every past report, engagement letter and adopting minute located.
                2. The current valuation status and expiry confirmed with the provider.
                3. Grants made since the last valuation checked against its dates and any trigger.
                4. A short handover note to the chief executive listing gaps and the fix for each.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within the first month a handover note lists the valuation status, every lapsed or unsupported grant and a named fix for each."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the founders where every past valuation report is saved"
                - "Confirm the current valuation date and expiry with the provider"
                - "Check grants made since the last valuation against its dates"
                - "Write a one-page handover note of gaps for the chief executive"
            - name: Valuations for option holders in several countries
              description: |-
                ## Purpose
                Once a company hires abroad, one valuation may not satisfy every country: the US expects a section 409A value, the UK has its own scheme rules and market value tests, and other countries set their own methods or require a particular kind of valuer. Planning which valuations are needed, and whether one provider can cover them, stops local employees receiving grants mispriced for their own tax system.

                ## Milestones
                1. Option holders listed by country with the plan or scheme they hold under.
                2. The valuation requirement in each country confirmed with a local adviser.
                3. A plan for which valuations are commissioned, by whom and how often.
                4. Local grant paperwork referencing the right value for each country.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A country-by-country plan lists the valuation each holder's country requires, confirmed by a local adviser, with a named provider for each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List option holders by country and the scheme each holds under"
                - "Ask a local adviser in each country what valuation it requires"
                - "Check whether your provider can cover each country's requirement"
                - "Recheck the country list against new hires abroad @recurring(yearly)"
            - name: Agreeing EMI option values with the tax authority
              description: |-
                ## Purpose
                UK companies granting Enterprise Management Incentive options usually ask the tax authority's valuation team to agree the share value before granting, and the agreement only holds for the period stated in its letter. Preparing the submission, timing it so grants are made inside that window and keeping the letter with the minutes protects the scheme's tax advantages for employees.

                ## Milestones
                1. The company's continuing EMI eligibility checked with an adviser.
                2. A valuation submission prepared with the proposed actual and unrestricted market values.
                3. The tax authority's agreement letter received and its expiry noted.
                4. Grants made and notified inside the agreed window.

                ## Notes
                Your adviser or scheme administrator usually prepares the submission. Grant notification has its own deadline; put it in the calendar the day you grant.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An agreed valuation letter from the tax authority is on file and every EMI grant was made and notified inside its window."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your adviser to confirm the company still qualifies for EMI"
                - "Prepare the valuation submission with proposed market values"
                - "Note the expiry date on the agreement letter in the calendar"
                - "Schedule the grants and their notification inside the agreed window"
            - name: Valuation during a cash squeeze or going concern doubt
              description: |-
                ## Purpose
                Short runway or going concern doubts from the auditor can push the value of common shares down sharply, and options granted at the old value end up underwater. Keeping the provider informed, deciding whether a fresh valuation would help retain key people and being honest with employees about what the price means keeps the file accurate through a hard period.

                ## Milestones
                1. The provider told about the financing position and likely outcomes.
                2. A decision on a fresh valuation recorded with the reasons.
                3. Retention grants, if any, priced on a current value.
                4. Employee messages about options checked by the company's lawyer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on revaluing during the squeeze is recorded, and any retention grants carry a value adopted after the squeeze began."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Brief the provider on runway and the financing options in play"
                - "Decide with the board whether a fresh valuation is worth commissioning"
                - "Price any retention grants on a value adopted after the squeeze began"
                - "Send the provider a short update while the squeeze lasts @recurring(monthly:16)"
            - name: Safe harbour conditions test for the valuation file
              description: |-
                ## Purpose
                In the US, an independent appraisal that meets set conditions puts the burden on the tax authority to show the value was grossly unreasonable, and some young illiquid companies have other routes to the same protection. Testing each valuation against those conditions with your tax adviser once a year shows whether the file actually earns the protection you assume it has.

                ## Milestones
                1. The conditions that apply to your company listed by your tax adviser.
                2. Each current valuation tested against each condition, with evidence.
                3. Any condition not met recorded with a fix and an owner.
                4. The test repeated each year and filed.

                ## Notes
                Start from the **Compliance control** template. The adviser decides whether a condition is met; the project gathers the evidence they need.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly test prepared with the tax adviser records each safe harbour condition, the evidence it is met and a fix for any gap."
                cadence: cyclic
              tasks:
                - "Ask your tax adviser to list the conditions that apply to you"
                - "Gather evidence for each condition from the valuation file"
                - "Record any condition not met with a named fix"
                - "Repeat the safe harbour test with your adviser @recurring(yearly)"
            - name: Fair values for warrants, SAFEs and preferred shares
              description: |-
                ## Purpose
                As companies grow, the auditor may need fair values for more than common shares: warrants issued to lenders, SAFEs or notes carried as liabilities, and sometimes the preferred shares themselves. Scoping these with the same provider and the accountant, in the same cycle as the common valuation, keeps the numbers consistent and the audit shorter.

                ## Milestones
                1. Every instrument needing a fair value listed with the accountant.
                2. Scope and fee for each agreed with the provider.
                3. Values delivered on the same valuation date as the common shares.
                4. The accountant's sign-off on the values filed.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every instrument the accountant needs fair valued has a value at the common valuation date, with the accountant's sign-off filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the accountant which instruments need a fair value this year"
                - "Add those instruments to the provider's engagement scope"
                - "Align their valuation date with the common share valuation"
                - "File the accountant's sign-off with the values"
            - name: Correcting options granted below fair market value
              description: |-
                ## Purpose
                Finding grants priced on an expired valuation, or made before any valuation, is common and often fixable, but the fix depends on timing, the tax rules and whether the options have been exercised. A remediation plan agreed with counsel, covering a retrospective valuation, amended grants or other corrections, closes the gap before diligence or an audit turns it into a deal issue.

                ## Milestones
                1. Every affected grant identified with dates, prices and holders.
                2. A retrospective valuation or other evidence of value at each grant date obtained, if counsel advises it.
                3. A correction route chosen with counsel and the tax adviser for each grant.
                4. Affected holders told and amended documents signed.
                5. The remediation recorded in the valuation history file.

                ## Notes
                Start from the **Remediation plan** template. Some corrections only work within a set time, so act soon after finding the problem.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every grant priced below fair market value has a counsel-agreed correction completed and recorded in the valuation history file."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every grant made without a current valuation in force"
                - "Ask counsel which correction routes apply and their time limits"
                - "Commission a retrospective valuation if counsel advises one"
                - "Tell affected holders the plan once counsel and the board agree"
---

# Share Valuations & 409A

This area is for founders and finance managers who need a defensible price for every option the company grants, whether that is a section 409A valuation in the US, an EMI value agreed with the UK tax authority or the equivalent somewhere else. It starts with the foundations (which rules apply, a history file, an owner, the trigger list, a provider, the first valuation and board adoption), then the routines that keep the value current, the knowledge to read and question a report, decisions on timing, refreshes and repricing, the events that force a new value, situations for particular companies and roles, and finally specialist work on safe harbour tests, other instruments and fixing mispriced grants.

What repeats is a monthly check on days left and grants pending, a monthly reconciliation of grants to the value in force, monthly inputs and exercise records, a quarterly material event review and expense handover, and a yearly refresh, provider review, policy review, audit pack and safe harbour test. The Purchase decision, Operational checklist, Compliance control and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
