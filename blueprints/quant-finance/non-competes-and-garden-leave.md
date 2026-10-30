---
id: quant-finance.non-competes-and-garden-leave
name: Non-Competes and Garden Leave
description: "Your covenants mapped and dated, a lawyer's view on record, deferred pay and runway planned, clean IP boundaries, and a restricted period used well before the next quant job starts."
category: business
version: 1.0.0
tags: [quant-finance, non-competes-and-garden-leave, knowledge-worker, researcher, restrictive-covenants, garden-leave, employment-contracts, job-moves]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - monthly-budget-bills
    - habit-tracker
    - portfolio-piece
    - onboarding-30-60-90
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Non-Competes and Garden Leave
          description: "Handling non-compete and garden leave periods between quant jobs: reading the contract, what you can and cannot do, IP boundaries and using the time well."
          projects:
            - name: Restrictive covenant inventory from your contract pack
              description: |-
                ## Purpose
                Quant contracts spread their restrictions across several documents: the employment contract, the staff handbook, the bonus and deferral plan rules, any equity or co-investment agreement and the confidentiality undertaking signed on day one. Pulling every clause into one table, with its length, scope and the document it lives in, is the first step before any conversation with a lawyer or a new employer.

                ## Milestones
                1. Every signed document that could hold a restriction collected in one private folder.
                2. A table listing each clause: non-compete, non-solicit of staff, non-dealing, confidentiality, IP assignment, notice and garden leave.
                3. Each row noting duration, geography, the definition of competitor and the source page.
                4. Gaps flagged wherever the signed version cannot be found.

                ## Notes
                Start from the **Risk register** template. Use only copies you were given or can request from HR through the normal channel, and never forward internal documents to a personal account.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single table lists every restrictive clause across your signed documents, with duration, scope and source page for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every document you signed on joining and at each promotion"
                - "Request missing signed copies from HR through the normal channel"
                - "Copy each restrictive clause into the covenant table with its page reference"
                - "Mark clauses whose wording you do not understand for the lawyer"
                - "Re-read the covenant table after any contract change or promotion @recurring(yearly)"
            - name: Notice, garden leave and non-compete date map
              description: |-
                ## Purpose
                The dates interact in ways that are easy to get wrong: some contracts offset garden leave against the non-compete, others run them back to back, and deferred awards often vest or lapse somewhere in the middle. A single dated timeline shows exactly when you could start elsewhere under each scenario, which is the first thing every recruiter and hiring firm will ask.

                ## Milestones
                1. A timeline running from the resignation date through notice, garden leave and each covenant end date.
                2. Two scenarios drawn: resigning this month and resigning after the next bonus payment.
                3. Whether garden leave counts against the non-compete noted, with the clause it comes from.
                4. The earliest realistic start date for a new role written in one line.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated timeline shows notice, garden leave and covenant end dates under at least two resignation scenarios, with the earliest start date stated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the notice period and garden leave terms from the covenant table"
                - "Check whether the contract offsets garden leave against the non-compete"
                - "Draw the timeline for resigning this month and after the next bonus date"
                - "Note the earliest start date under each scenario"
            - name: Employment lawyer review of your covenants
              description: |-
                ## Purpose
                Whether a restriction would actually be enforced depends on the governing law, how it was drafted and your own circumstances, and only a qualified employment lawyer can give you that view. Going in with the covenant table, the date map and a short list of questions turns an expensive hour into a clear written opinion you can plan around.

                ## Milestones
                1. Two or three employment lawyers with finance sector clients shortlisted, with fee basis noted.
                2. A question list sent ahead covering enforceability, what counts as competing, release options and the risks of the planned move.
                3. One consultation held and notes taken during it.
                4. The lawyer's view summarised in plain words and filed with the date.

                ## Notes
                Start from the **Meeting notes** template. Some hiring firms will pay for this advice, so ask before you book. A recruiter's or former colleague's reading of a clause is not legal advice.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written summary of a qualified employment lawyer's view on your covenants is filed, dated and linked to the covenant table."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask two trusted contacts for employment lawyers who act for finance professionals"
                - "Confirm the fee basis and whether the hiring firm will cover it"
                - "Send the covenant table and question list before the call"
                - "Write a plain summary of the advice within a day of the meeting"
            - name: Deferred pay and forfeiture exposure schedule
              description: |-
                ## Purpose
                For many quants the real cost of leaving sits in deferred bonuses, fund co-investment, retention awards and clawback terms rather than in the non-compete itself. Listing every unvested amount with the date it vests and its leaver treatment shows what you would walk away from, and becomes the schedule a hiring firm needs before it can buy any of it out.

                ## Milestones
                1. Every deferred or unvested award listed with grant date, vesting date and approximate value.
                2. The leaver treatment for each award noted from the plan rules: kept, forfeited or held to a condition.
                3. Clawback and malus terms that survive departure recorded.
                4. A total forfeiture figure calculated under each resignation scenario from the date map.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A schedule of every unvested award shows vesting dates, leaver treatment and a total forfeiture figure for each resignation scenario."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download your latest deferred award statement from the plan portal"
                - "Look up the leaver rules for each award in the plan documents"
                - "Calculate what is forfeited if you resign before each vesting date"
                - "Ask the agent to turn the award list into a dated forfeiture schedule"
            - name: Runway budget for the restricted months
              description: |-
                ## Purpose
                Garden leave is usually paid, but a non-compete that follows it may not be, and the whole gap can stretch to a year or more in some markets. A budget built on your real spending, with the months of income you can count on and the months you cannot, tells you how long you can wait without being pushed into a poor deal.

                ## Milestones
                1. Three months of actual spending summarised by category.
                2. Expected income for each month of the restricted period, paid and unpaid, written down.
                3. The number of months your cash covers at current spending stated.
                4. Two cuts agreed in advance in case the gap runs longer than planned.

                ## Notes
                Start from the **Monthly budget and bills** template. Leave a margin for health cover and pension contributions that stop when employment ends.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A month-by-month budget covers the whole restricted period, states the months of runway and lists two pre-agreed cuts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export three months of bank and card spending"
                - "Group the spending into fixed and flexible costs"
                - "Mark which months of the restricted period are paid and which are not"
                - "Work out how many months your savings cover"
            - name: Returning employer property and a clean exit record
              description: |-
                ## Purpose
                Departing quants are most exposed through files, not clauses: a notebook synced to a personal cloud, a parameter file in old email, a laptop never handed back. Checking personal devices and accounts before you resign, and returning anything that belongs to the firm through the proper route, protects you if questions are asked later.

                ## Milestones
                1. Personal laptops, phones, cloud drives and email searched for anything belonging to the employer.
                2. Anything found handled as HR or your lawyer directs, with a note of what and when.
                3. Every employer device, pass and access token returned with a receipt.
                4. A short dated record kept of the checks and their results.

                ## Notes
                Ask your lawyer before removing anything you find: sometimes the right step is to hand it over untouched. Never take code, signals, data or research notes, even ones you wrote yourself.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every employer device is returned with a receipt and a dated record shows your personal devices and accounts were checked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every personal device and cloud account you have used for work"
                - "Search them for employer code, data, research notes and documents"
                - "Ask your lawyer how to handle anything you find"
                - "Get a written receipt for every device and pass returned"
            - name: Record of your own prior work and ideas
              description: |-
                ## Purpose
                The line between general skill you carry with you and employer property gets argued over most when a new strategy looks like an old one. A dated record of what you brought to the job, such as thesis code, published papers, open source contributions and ideas documented before you joined, makes that line easier to draw honestly.

                ## Milestones
                1. A list of pre-employment work: theses, papers, public repositories and talks, each with a date and link.
                2. Any prior inventions schedule attached to your original contract found or noted as missing.
                3. Techniques learned from textbooks and public papers separated from anything learned only inside the firm.
                4. The record stored with the covenant documents.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A dated list of your pre-employment work and publicly sourced knowledge is filed alongside the covenant documents."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your thesis, papers and public repositories with their dates"
                - "Check whether your contract has a prior inventions schedule"
                - "List the textbook and public-paper methods you rely on most"
                - "File the record with your covenant documents"
            - name: Resignation timing around bonus and vesting dates
              description: |-
                ## Purpose
                Resigning a week before the bonus is paid, or the day after an award lapses, can cost more than the garden leave itself. Choosing the date from the date map and the forfeiture schedule, and planning what you will say, makes the hardest conversation of the move short and calm.

                ## Milestones
                1. A resignation date chosen, with the reason for it written down.
                2. A short resignation letter drafted that states the date and nothing contentious.
                3. The first conversation with your manager planned in three or four sentences.
                4. Personal contacts and documents you are entitled to keep gathered before the date.

                ## Notes
                Check the plan rules on whether being on notice on the payment date affects the bonus. Ask the lawyer before putting anything about your next employer in writing.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A resignation date is chosen against the forfeiture schedule and a short resignation letter is ready to hand over."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare candidate resignation dates against the forfeiture schedule"
                - "Check whether being on notice affects the next bonus payment"
                - "Draft a two-line resignation letter stating the date"
                - "Write the three sentences you will say to your manager"
            - name: Agreed lines for colleagues, counterparties and recruiters
              description: |-
                ## Purpose
                Once you resign, everything you say about where you are going can be read against the non-solicit and confidentiality clauses. Writing a few agreed lines in advance, checked with your lawyer, saves you improvising in corridors, on desk calls and in recruiter messages.

                ## Milestones
                1. One line for colleagues on why you are leaving and what you can say about next steps.
                2. One line for recruiters that confirms your availability date without detail.
                3. One line for counterparties and vendors who ask where you are going.
                4. All three lines checked against the covenant table.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three written lines for colleagues, recruiters and counterparties are checked against your covenants and kept on your phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-sentence answer to why you are leaving"
                - "Write a one-sentence availability line for recruiters"
                - "Write a one-sentence note for counterparties and vendors"
                - "Check all three lines against the non-solicit and confidentiality clauses"
            - name: Regulatory registration and reference check
              description: |-
                ## Purpose
                Where quant and trading roles are registered or certified with a financial regulator, leaving triggers notifications and a regulatory reference from the old firm to the new one. Knowing what will be reported and when your status lapses avoids a surprise that delays a start date by weeks.

                ## Milestones
                1. Your current registration or certification status, if any, confirmed with compliance.
                2. What happens to that status during garden leave and after leaving noted.
                3. The reference process between firms understood, including what it covers.
                4. Any steps the hiring firm needs to take before your start date listed.

                ## Notes
                Rules differ by country and by role, and many researcher roles need no registration at all. Compliance at either firm can confirm what applies to you.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your registration status and the regulatory reference steps for the move are written down and confirmed with a compliance team."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask compliance whether your role is registered or certified"
                - "Find out what the firm reports to the regulator when you leave"
                - "Ask the hiring firm what it needs from you for the reference"
                - "Note any dates that could delay your start"
            - name: Weekly garden leave planning routine
              description: |-
                ## Purpose
                Months without a desk, a market open or a manager can drift into late starts and scattered reading. A short planning session each Monday, with fixed blocks for study, health, family and admin, gives the weeks a shape you can look back on with some satisfaction.

                ## Milestones
                1. A default week drawn with study, exercise, family and admin blocks.
                2. A Monday planning slot kept for the length of the restricted period.
                3. A Friday note written on what got done against the plan.
                4. The default week adjusted after the first month based on what actually happened.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly plan is written every Monday and reviewed every Friday for the whole restricted period, with at most two weeks missed."
                cadence: rolling
              tasks:
                - "Sketch a default week with study, exercise, family and admin blocks"
                - "Plan the coming week in thirty minutes @recurring(weekly:mon)"
                - "Write a five-line note on what got done this week @recurring(weekly:fri)"
                - "Adjust the default week after the first month"
            - name: Monthly covenant compliance self-check
              description: |-
                ## Purpose
                Restrictions are usually breached by small drift: a call with an old counterparty, a former analyst sounded out, a consulting favour for a friend. Fifteen minutes a month reading your own activity against the covenant table keeps you honest and leaves a record if anyone asks.

                ## Milestones
                1. A checklist built from the covenant table, one question per clause.
                2. A monthly check completed and dated for each month of the restriction.
                3. Any doubtful contact or activity raised with the lawyer the same week.
                4. The completed checks filed with the separation documents.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated compliance check against every clause is completed each month of the restricted period, with doubtful items raised with the lawyer."
                cadence: rolling
              tasks:
                - "Turn each covenant clause into a yes or no question"
                - "Run the compliance checklist against the past month @recurring(monthly:7)"
                - "Email the lawyer about any doubtful item within the week"
                - "File each completed checklist in the separation vault"
            - name: Contact log for recruiters and former colleagues
              description: |-
                ## Purpose
                If a former employer later alleges solicitation, a log written at the time showing who contacted whom, when and about what is far more convincing than memory. Logging contacts as they happen takes a minute and costs nothing.

                ## Milestones
                1. A log set up with date, person, who initiated, channel and topic.
                2. Every recruiter and former colleague contact entered within a week.
                3. Contacts that touched on staff, clients or strategies flagged.
                4. The log kept until the last restriction ends.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated log records every recruiter and former colleague contact during the restriction, with who initiated each one."
                cadence: rolling
              tasks:
                - "Set up the contact log with date, person, initiator, channel and topic"
                - "Back-fill every contact since you resigned"
                - "Bring the contact log up to date @recurring(weekly:thu)"
                - "Flag any contact that touched on staff, clients or strategies"
            - name: Monthly runway review
              description: |-
                ## Purpose
                A budget written in month one is a guess by month six. Comparing actual spending and cash with the runway budget each month shows early whether the gap is affordable or whether a cut, a negotiated release or an earlier permitted move needs planning.

                ## Milestones
                1. Actual spending compared with the budget each month.
                2. Remaining months of runway recalculated after each review.
                3. A trigger level written down at which you revisit the whole plan.
                4. Any trigger hit discussed with your partner or adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month of the restricted period has a recorded runway figure, compared against a written trigger level."
                cadence: rolling
              tasks:
                - "Write the runway trigger level that makes you revisit the plan"
                - "Compare last month's spending with the budget @recurring(monthly:3)"
                - "Recalculate the months of runway left"
                - "Raise any trigger hit with your partner or adviser"
            - name: Garden leave payslip and benefits check
              description: |-
                ## Purpose
                During garden leave you remain an employee, so salary, pension contributions, health cover and any agreed allowances should keep arriving. Payroll errors are common when someone is off site, and a monthly check catches them while HR still answers your emails quickly.

                ## Milestones
                1. A list of what should arrive each month: net pay, pension, insurance and allowances.
                2. Each payslip checked against that list.
                3. Any difference raised with HR in writing.
                4. Final pay and holiday settlement checked on the leaving date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every garden leave payslip is checked against an expected list and every difference is raised with HR in writing."
                cadence: rolling
              tasks:
                - "List what should be paid or covered each month"
                - "Check the payslip and pension statement against the list @recurring(monthly:26)"
                - "Email HR about any difference with the payslip attached"
                - "Check final pay and holiday settlement on the leaving date"
            - name: Weekly coding and maths practice during the gap
              description: |-
                ## Purpose
                Six to twelve months away from a codebase dulls the fast, practical skills that interviews and first weeks lean on. A weekly practice block on public problems and your own tools keeps them sharp without touching anything that belonged to the old firm.

                ## Milestones
                1. A practice list of public coding and maths problems in the areas you use.
                2. One practice block a week completed and logged.
                3. A personal toolkit repository kept, built only from public sources.
                4. A short note written at the end of the period on what improved.

                ## Notes
                Keep this in a fresh repository whose history starts after you resigned. Do not reconstruct anything you built at the old firm, even from memory.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly practice block is logged for each week of the restriction, in a fresh repository built only from public material."
                cadence: rolling
              tasks:
                - "Create a fresh repository with today's date in the first commit"
                - "Pick a list of public practice problems for the areas you use"
                - "Complete one practice block and log it @recurring(weekly:wed)"
                - "Write a note on what improved at the end of the period"
            - name: Sleep, exercise and a daily start time
              description: |-
                ## Purpose
                Traders and researchers coming off years of market hours often find sleep and fitness slip in the first month of leave. A fixed start time, a daily walk or workout and a simple tracker make the restricted period a reset rather than a slide.

                ## Milestones
                1. A wake time and a daily movement goal chosen.
                2. A habit tracker running from the first week.
                3. Four weeks completed with the goal kept on at least five days a week.
                4. A health check booked if you have been putting one off.

                ## Notes
                Start from the **Habit tracker** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A habit tracker shows the wake time and daily movement goal kept on at least five days a week for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Choose a wake time and a daily movement goal"
                - "Tick off the wake time and movement goal @recurring(daily)"
                - "Book the health check you have been putting off"
                - "Review the tracker after four weeks"
            - name: Quarterly restriction countdown review
              description: |-
                ## Purpose
                Each covenant ends on its own date, and plans set at resignation often need adjusting as offers, family needs or the lawyer's view change. A quarterly look at the date map, with the remaining restrictions and the next decisions, keeps the endgame planned instead of rushed.

                ## Milestones
                1. The date map updated with any agreed changes.
                2. Remaining restrictions listed with days left.
                3. Decisions needed before the next quarter named with a date.
                4. A short note filed after each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated review of the remaining restrictions and decisions due is filed each quarter until the last covenant ends."
                cadence: cyclic
              tasks:
                - "Update the date map with any agreed changes"
                - "Review remaining restrictions and decisions due @recurring(quarterly)"
                - "Put each decision due next quarter in your calendar"
                - "File a short note after each review"
            - name: Network upkeep within the covenants
              description: |-
                ## Purpose
                Disappearing for a year costs relationships, but contacting the wrong people can look like solicitation. A monthly coffee or call with people the covenants do not touch, such as academics, people at non-competing firms and friends from your course, keeps the network warm safely.

                ## Milestones
                1. A list of contacts clearly outside the non-solicit and non-dealing clauses.
                2. One conversation a month held and logged.
                3. A rule written for the topics you will not discuss with anyone.
                4. Two or three relationships deepened by the end of the period.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of safe contacts exists and one logged conversation a month is held with someone outside the covenants."
                cadence: rolling
              tasks:
                - "List twenty contacts clearly outside your restrictive clauses"
                - "Write the topics you will not discuss with anyone"
                - "Arrange one coffee or call with a safe contact @recurring(monthly:19)"
                - "Log each conversation in the contact log"
            - name: Separation document vault
              description: |-
                ## Purpose
                Letters from HR, settlement drafts, payslips, lawyer's notes and emails with recruiters arrive over many months and are needed all at once if a dispute starts. One private, backed-up folder with a simple naming rule means nothing important lives only in an inbox.

                ## Milestones
                1. A private folder with sub-folders for contract, correspondence, pay, legal and the new employer.
                2. A naming rule that puts the date first.
                3. Every document received since resigning filed.
                4. A backup copy kept in a second place.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All separation documents since resignation are filed by date in one backed-up private folder."
                cadence: rolling
              tasks:
                - "Create the folder with five sub-folders"
                - "Write the date-first naming rule in a note at the top level"
                - "File every letter and email received this month @recurring(monthly:28)"
                - "Set up a second backup copy"
            - name: How non-competes are treated where you work
              description: |-
                ## Purpose
                Treatment varies widely: some jurisdictions largely refuse to enforce non-competes, some require the employer to pay during the restriction, and others enforce reasonable terms through the courts. A general picture of where your governing law sits helps you ask the lawyer sharper questions, though it never replaces their view.

                ## Milestones
                1. The governing law clause in your contract identified.
                2. Two or three reputable general guides read, such as a law society or government summary.
                3. Recent or pending changes in that jurisdiction noted with sources.
                4. New questions for the lawyer added to the list.

                ## Notes
                Treat this as background for a conversation with a lawyer, not a conclusion. Law in this area has changed several times in recent years in different countries.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note summarises the general treatment of non-competes under your governing law, with sources and questions for the lawyer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the governing law clause in your contract"
                - "Read two general guides from official or professional bodies"
                - "Note recent or pending changes with their source"
                - "Check for changes in non-compete law where you work @recurring(quarterly)"
            - name: Reading covenant clauses in plain words
              description: |-
                ## Purpose
                Covenants hide their reach in definitions: what counts as a competitor, which business units count as the business, whether the restriction covers any role or only similar ones, and how far back the client list goes. Learning to read those definitions closely shows where a clause is narrow and where it is broad.

                ## Milestones
                1. Each defined term in your covenants written out in plain words.
                2. Differences between garden leave, non-compete, non-solicit and non-dealing clauses noted.
                3. The broadest and the narrowest clause identified.
                4. Ambiguous wording added to the lawyer's question list.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every defined term in your covenants is rewritten in plain words, with the broadest clause and ambiguous wording identified."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every defined term the covenants rely on"
                - "Rewrite each defined term in one plain sentence"
                - "Mark which clause reaches furthest and why"
                - "Add ambiguous wording to the lawyer's questions"
            - name: Confidential information boundaries for quant work
              description: |-
                ## Purpose
                Quant knowledge is unusually hard to separate: general skill in statistics and coding goes with you, while signal definitions, parameters, data vendor terms, execution logic and performance figures usually do not. Working through concrete examples from your own role makes the boundary clear before you build anything new.

                ## Milestones
                1. A two-column list of what you consider general skill and what is firm-specific.
                2. Grey areas, such as data cleaning tricks or published methods you adapted, noted.
                3. The list reviewed in the light of the lawyer's advice.
                4. A personal rule written for grey areas: when in doubt, leave it out.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reviewed two-column list separates general skill from firm-specific information for your role, with a written rule for grey areas."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write ten things you know that are general skill"
                - "Write ten things you know that are specific to the firm"
                - "List the grey areas between the two columns"
                - "Write your rule for grey areas in one sentence"
            - name: Your duties while on garden leave
              description: |-
                ## Purpose
                On garden leave you are still employed, so duties of good faith, confidentiality and availability usually continue, and the firm may be able to call you back to help with a handover. Knowing what is expected, such as staying reachable, not starting other work and asking before long trips, avoids an accidental breach in the first weeks.

                ## Milestones
                1. The garden leave clause and any HR letter read for specific instructions.
                2. A list written of what you must do, may do and must not do.
                3. Questions on travel, study, volunteering and side projects sent to HR or the lawyer.
                4. Answers recorded with their dates.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A must, may and must-not list for garden leave is written, with answers to questions on travel, study and side projects recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the garden leave clause and any HR letter for instructions"
                - "Write the must, may and must-not list"
                - "Send questions about travel, study and side projects in writing"
                - "Record each answer with its date"
            - name: Public-data research project for the gap
              description: |-
                ## Purpose
                A well-documented project on public data shows a future employer how you think, without touching anything confidential. Choosing a topic deliberately far from your old firm's strategies, and recording that choice, gives the restricted months a visible result.

                ## Milestones
                1. A topic chosen that is clearly unrelated to the old firm's strategies, with the reason written down.
                2. Only public data and public papers used, each source listed.
                3. A write-up of method, results and limits completed.
                4. The piece checked against the confidentiality boundary list before anyone sees it.

                ## Notes
                Start from the **Portfolio piece** template. Say plainly in the write-up that it is research, not a recommendation, and that most backtested strategies fail out of sample.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A finished write-up built only on listed public sources, with a recorded boundary check, is ready to show."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write three candidate topics far from your old firm's strategies"
                - "Choose one and record why it is clearly unrelated"
                - "Work on the project for half a day @recurring(weekly:sat)"
                - "Check the write-up against the boundary list before sharing it"
            - name: Tax questions on garden leave and leaving payments
              description: |-
                ## Purpose
                Garden leave pay, payments in lieu of notice, settlement sums, bought-out awards and sign-on bonuses can be taxed differently, and timing across tax years matters. Taking a written list of questions and your documents to an accountant gets you answers before you agree the numbers, not after.

                ## Milestones
                1. Every expected payment listed with its likely date.
                2. A question on treatment and timing written for each payment.
                3. An accountant or tax adviser consulted.
                4. Their answers recorded and any actions dated.

                ## Notes
                This is a list to take to a professional. Treatment depends on where you are tax resident and how each payment is documented.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each expected payment is listed with an accountant's recorded answer on its treatment and timing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every payment you expect with its likely date"
                - "Write one question about treatment and timing for each"
                - "Book an accountant or tax adviser"
                - "Record the answers and date any actions"
            - name: Adjacent field study for the restricted months
              description: |-
                ## Purpose
                A long non-compete is a rare chance to learn something your old desk never allowed time for, such as a different asset class, a new modelling family or a production language. A twelve-week plan with a deliverable makes the time count at the next interview, and choosing a field outside the old firm's business keeps it clean.

                ## Milestones
                1. One adjacent field chosen and checked against the covenant scope.
                2. A twelve-week plan written with one topic a week.
                3. Two study sessions a week logged.
                4. A short written summary or small build showing what you learned.
              priority: low
              deadlineOffsetDays: 100
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A twelve-week study plan in an adjacent field is completed, ending with a written summary or small build."
                cadence: phased
                effort_hours_estimate: "36"
              tasks:
                - "Write three adjacent fields and check each against the covenant scope"
                - "Draft a twelve-week plan with one topic a week"
                - "Study the week's topic for ninety minutes @recurring(weekly:tue)"
                - "Write the end-of-plan summary"
            - name: Asking for a shorter non-compete or early release
              description: |-
                ## Purpose
                Firms sometimes agree to shorten garden leave or release part of a non-compete, especially if the new role does not compete directly or the firm would rather stop paying. A short, polite written request with a specific proposal, prepared with the lawyer, is worth making before the restricted period settles into place.

                ## Milestones
                1. The lawyer's view on whether and when to ask recorded.
                2. A specific proposal written: a shorter period, a narrower scope or a named permitted role.
                3. The request sent and the reply filed.
                4. Any agreed change recorded in a signed letter.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written request for a shorter or narrower restriction has been sent and the employer's reply, or a signed variation, is filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the lawyer whether and when to request a release"
                - "Write one specific proposal for a shorter or narrower restriction"
                - "Send the request through the channel the lawyer suggests"
                - "File the reply and any signed variation"
            - name: Hiring firm buyout of forfeited awards
              description: |-
                ## Purpose
                Hiring firms often replace forfeited deferred pay and sometimes cover unpaid restricted months, but only for amounts you can document. Presenting the forfeiture schedule cleanly, with statements behind each figure, turns a vague request into a negotiation about numbers.

                ## Milestones
                1. The forfeiture schedule updated with current values and statements attached.
                2. The request written: buyout of awards, cover for unpaid months and legal fees.
                3. The offer letter checked for how the buyout vests and what clawback applies.
                4. The agreed terms recorded in the signed offer.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The signed offer records the agreed buyout of forfeited awards and any cover for unpaid months, backed by the forfeiture schedule."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Update the forfeiture schedule with current statements"
                - "Write the buyout request as a short list of figures"
                - "Check how the buyout vests and whether it can be clawed back"
                - "Confirm the agreed terms appear in the signed offer"
            - name: Reviewing the next employer's covenants before signing
              description: |-
                ## Purpose
                The best moment to shape your next non-compete is before you sign the offer. Putting the new contract's covenants through the same table and lawyer review, and asking for paid garden leave or a shorter term where the market allows, protects the move after this one.

                ## Milestones
                1. The new contract's restrictive clauses entered in a fresh covenant table.
                2. Terms compared with the current contract on length, payment and scope.
                3. The lawyer's comments on the new clauses recorded.
                4. Any requested changes sent and the outcome noted before signing.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The new contract's covenants are tabled, reviewed by a lawyer and any requested changes resolved before you sign."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask for the full draft contract and handbook before accepting"
                - "Enter each restrictive clause in a new covenant table"
                - "Send the new clauses to the lawyer for comment"
                - "Record the outcome of any requested changes"
            - name: Mapping roles outside your non-compete
              description: |-
                ## Purpose
                Non-competes usually bite on specific businesses and roles, which can leave real options open during the restriction: academic posts, risk or technology roles at non-competing firms, or a different asset class. Mapping those options with the lawyer shows whether waiting out the full term is the only choice.

                ## Milestones
                1. The competitor and role definitions summarised from the covenant table.
                2. A list of role types and firms that appear to fall outside them.
                3. Each option checked with the lawyer before you apply.
                4. A decision recorded: wait out the term or pursue a permitted role.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of permitted role types is checked with the lawyer and a written decision on waiting or moving is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Summarise the competitor and role definitions in two lines"
                - "List role types and firms that appear outside them"
                - "Ask the lawyer to check the shortlist"
                - "Write down the decision and the reason for it"
            - name: Aligning the start date with the covenant end
              description: |-
                ## Purpose
                Recruiters and hiring firms sometimes push for a start date inside a restriction, hoping it will not be enforced. Agreeing a start date on or after the date your lawyer confirms, and writing it into the offer, keeps that risk off you.

                ## Milestones
                1. The earliest safe start date confirmed from the date map and the lawyer's view.
                2. The date proposed to the hiring firm in writing.
                3. Any pressure to start early declined in writing.
                4. The start date written into the signed offer.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The signed offer carries a start date on or after the confirmed end of every relevant restriction."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the earliest safe start date with the lawyer"
                - "Propose that date to the hiring firm in writing"
                - "Decline any early start request in writing"
                - "Check the start date in the signed offer"
            - name: Consulting, teaching or side projects in the gap
              description: |-
                ## Purpose
                Paid consulting, a teaching post, a startup idea or a personal trading account can each breach garden leave duties or a non-compete, depending on the wording. Listing what you would like to do and getting each one cleared in writing turns tempting offers into safe decisions.

                ## Milestones
                1. A list of activities you are considering, with who would pay you for each.
                2. Each checked against the must-not list and the covenant table.
                3. Written permission sought from the employer where the lawyer advises it.
                4. A yes or no recorded for each activity.

                ## Notes
                Personal trading during garden leave may still fall under the firm's personal account dealing rules. Check with compliance before placing any trade.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every activity considered during the gap has a recorded yes or no, with written permission where it was needed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every activity you are considering during the gap"
                - "Check each against the must-not list and the covenant table"
                - "Ask compliance whether personal account dealing rules still apply"
                - "Request written permission where the lawyer advises it"
            - name: Health cover and pension through the gap
              description: |-
                ## Purpose
                Employer health insurance, life cover and pension contributions usually continue through garden leave and stop on the leaving date, which can leave months uncovered before the next employer's schemes begin. Checking the dates and arranging cover in advance avoids a gap at the worst moment.

                ## Milestones
                1. End dates of each employer benefit confirmed.
                2. Start dates and waiting periods at the hiring firm noted.
                3. Options for bridging cover priced.
                4. A decision recorded for each gap.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every benefit gap between the leaving date and the new start date has a recorded decision on bridging cover."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask HR for the end date of each benefit"
                - "Ask the hiring firm for scheme start dates and waiting periods"
                - "Price bridging health and life cover"
                - "Record a decision for each gap"
            - name: Agreed reference and role description
              description: |-
                ## Purpose
                Quants cannot take P&L reports or strategy statistics to the next firm, yet interviewers ask what they achieved. Agreeing a reference with the old firm, and writing a description of your role that contains no performance figures or strategy detail, avoids disclosure problems in every later interview.

                ## Milestones
                1. A reference request made, with draft wording if the firm allows it.
                2. A description of your role written without performance figures or strategy detail.
                3. The wording checked against the confidentiality clauses.
                4. Interview answers on past work practised using only that wording.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An agreed reference and a checked role description without confidential figures are filed and used in interviews."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask HR how references are given and whether wording can be agreed"
                - "Write a role description with no performance figures or strategy detail"
                - "Check the description against the confidentiality clauses"
                - "Practise describing past work using only that description"
            - name: Resignation day logistics
              description: |-
                ## Purpose
                Many trading firms cut system access within minutes of a resignation and some walk people out the same hour. Preparing the day in advance, with personal contacts saved, personal items already home and the letter ready, means you leave with dignity and nothing you should not have.

                ## Milestones
                1. Personal contacts and personal documents you are entitled to keep saved before the day.
                2. The letter printed and a copy in your private folder.
                3. A plan for handing over devices and passes.
                4. A note written that evening of what was said and agreed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The resignation is delivered on the chosen date and a same-day note records what was said, agreed and returned."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save personal contacts you are entitled to keep before the day"
                - "Print the letter and put a copy in your private folder"
                - "Take personal items home in the week before"
                - "Write a note that evening of what was said and agreed"
            - name: Exit letter and undertakings response
              description: |-
                ## Purpose
                Firms often send a leaving letter restating your covenants, asking you to confirm you hold no confidential material, or offering terms for an early release. Reading it calmly, filing it and agreeing the reply with your lawyer before signing anything keeps you from accepting wider obligations by accident.

                ## Milestones
                1. The letter filed in the separation vault the day it arrives.
                2. Every obligation in it compared with the original contract.
                3. A reply agreed with the lawyer.
                4. The signed or answered letter filed with the date.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exit letter is compared with the original covenants and answered only after the lawyer has agreed the reply."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "File the exit letter in the vault the day it arrives"
                - "Compare each obligation with the original contract"
                - "Send the letter to the lawyer before signing anything"
                - "File the reply with its date"
            - name: Re-entry plan for the end of garden leave
              description: |-
                ## Purpose
                After months away, the first weeks at a new firm are packed with set-up, compliance training and pressure to show early progress. Planning the last month of leave and the first ninety days of the new role makes the return focused instead of frantic.

                ## Milestones
                1. A last-month checklist covering equipment, commute, childcare and paperwork.
                2. A first ninety days plan with goals at thirty, sixty and ninety days.
                3. Questions for your new manager sent in advance.
                4. A working-day routine restarted a fortnight before the start date.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A last-month checklist and a 30, 60 and 90 day plan are written before the start date."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the last-month checklist"
                - "Draft goals for days thirty, sixty and ninety"
                - "Send your new manager three questions in advance"
                - "Restart a working-day routine two weeks before the start"
            - name: First-day clean start declaration
              description: |-
                ## Purpose
                Careful hiring firms ask new joiners to confirm in writing that they bring no former employer information and will not use it. Treating that declaration seriously, and asking how the firm keeps your early work away from your old firm's territory, protects both you and the new desk.

                ## Milestones
                1. The hiring firm's declaration read before you sign it.
                2. Your confirmation backed by the returned property record.
                3. Questions on how early projects will be scoped asked of your manager or compliance.
                4. A copy of the signed declaration filed.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed declaration that you bring no former employer information is filed, backed by your returned property record."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask HR for the declaration before your first day"
                - "Check it against your returned property record"
                - "Ask compliance how early projects avoid your old firm's areas"
                - "File a copy of the signed declaration"
            - name: Covenant expiry confirmation
              description: |-
                ## Purpose
                When the last restriction lapses, write it down: the date, what is now permitted and what still continues, since confidentiality usually never ends. A short note and updated profiles close the chapter cleanly.

                ## Milestones
                1. Each covenant's end date confirmed as passed.
                2. Obligations that continue indefinitely, usually confidentiality, listed.
                3. Professional profiles updated if you held them back.
                4. The separation vault archived.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dated note records the end of each restriction and the confidentiality obligations that continue."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Confirm the end date of each covenant has passed"
                - "List the obligations that continue after the restrictions end"
                - "Update professional profiles you held back"
                - "Archive the separation vault"
            - name: Garden leave with a young family
              description: |-
                ## Purpose
                For a parent, a paid restricted period can be the most time at home since a child was born, but it can also blur into constant childcare and no study at all. Agreeing with your partner how the weeks will be split, and what has to be ready before the new job starts, makes it work for the whole household.

                ## Milestones
                1. A conversation held with your partner on time split and expectations.
                2. Childcare for the new job agreed and booked.
                3. Protected study and exercise time written into the week.
                4. A family break planned within the rules on travel.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A household plan agreed with your partner covers time split, protected study time and childcare booked for the new start."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Talk with your partner about how the weeks will be split"
                - "Book childcare for the new job's start date"
                - "Agree the week's family and study time @recurring(weekly:sun)"
                - "Plan one family break within the travel rules"
            - name: Moving country during a restricted period
              description: |-
                ## Purpose
                Moving to another financial centre does not necessarily escape a non-compete, since the governing law, the geography of the clause and where the hiring firm operates all matter. Getting advice that covers both countries before relocating avoids moving a family on an assumption.

                ## Milestones
                1. Governing law and geographic scope of each clause noted.
                2. Advice obtained on how the restriction applies in the destination.
                3. Visa and work authorisation timing checked against the earliest start date.
                4. A relocation timeline agreed with the hiring firm.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written advice covers how your restrictions apply in the destination country and a relocation timeline is agreed with the hiring firm."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Note the governing law and geography of each clause"
                - "Ask the lawyer whether advice from the destination country is also needed"
                - "Check visa timing against the earliest start date"
                - "Agree the relocation timeline with the hiring firm"
            - name: Unexpected garden leave after a restructure
              description: |-
                ## Purpose
                Being sent home on garden leave without having resigned is common after desk closures and restructures, and often comes with a settlement agreement and a deadline to sign. Slowing the process down, getting the agreement reviewed and checking how covenants change when the firm ends the employment protects your position.

                ## Milestones
                1. Everything received from the firm filed the same day.
                2. A lawyer's review of any settlement agreement completed before signing.
                3. Whether the covenants still apply after termination by the firm noted from the advice.
                4. Negotiable points such as covenant release, reference and timing raised.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Any settlement agreement is reviewed by a lawyer before signing and the advice on whether covenants still apply is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "File every letter and email from the firm the same day"
                - "Ask for the signing deadline in writing"
                - "Book a lawyer to review the settlement agreement"
                - "List the points to raise: covenant release, reference and timing"
            - name: Leaving to start your own trading or research business
              description: |-
                ## Purpose
                Founders face the widest restrictions: non-competes often name self-employment, non-solicits cover staff you would hire and non-dealing clauses can cover investors or counterparties. Planning the new venture around the covenant dates, with advice, keeps the launch from inviting a dispute.

                ## Milestones
                1. Each clause checked for self-employment, staff and investor restrictions.
                2. A launch timeline drawn that respects every end date.
                3. A list of what you may prepare during the restriction, such as entity set-up or public research, confirmed with the lawyer.
                4. A rule written for approaching former colleagues only after the non-solicit ends.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A launch timeline respecting every covenant end date and a lawyer-confirmed list of permitted preparation are written."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check each clause for self-employment, staff and investor wording"
                - "Draw the launch timeline against the covenant end dates"
                - "Ask the lawyer what preparation is permitted during the restriction"
                - "Write your rule on approaching former colleagues"
            - name: Moving into academia under ongoing confidentiality
              description: |-
                ## Purpose
                Researchers moving to a university or research institute often find a non-compete does not reach them, but confidentiality still governs what can be published, taught or released as code. Agreeing a publication check, and knowing which topics are off limits for now, lets the academic work start without risk.

                ## Milestones
                1. Whether the non-compete covers academic roles confirmed with the lawyer.
                2. Topics close to the old firm's business listed as off limits for now.
                3. A personal check written for papers, talks and code releases.
                4. Any required employer review of publications identified from the contract.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written publication check and an off-limits topic list are in place before the first paper, talk or code release."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the lawyer whether the non-compete covers academic roles"
                - "List topics close to the old firm's business"
                - "Write a three-question check for papers, talks and code"
                - "Check the contract for any publication review clause"
            - name: When colleagues want to follow you
              description: |-
                ## Purpose
                Team moves are where firms most often go to court, because non-solicit clauses usually cover staff as well as clients. Knowing how to respond when a former colleague asks to join you, and leaving recruiting decisions to the hiring firm's own process, avoids the classic team-lift dispute.

                ## Milestones
                1. The staff non-solicit wording and duration noted from the covenant table.
                2. A written reply ready for colleagues who approach you.
                3. An agreement with the hiring firm that you take no part in hiring former colleagues during the restriction.
                4. Every such approach logged.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written reply for approaching colleagues is used and every approach is logged during the staff non-solicit period."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the staff non-solicit wording and end date"
                - "Write your reply for a colleague who wants to follow"
                - "Agree with the hiring firm that you stay out of those hires"
                - "Log every approach in the contact log"
            - name: Clean-room log for your next research build
              description: |-
                ## Purpose
                When you start building signals at the new firm, the strongest protection is evidence that the work was developed independently: dated notes, public sources cited and design choices explained. A weekly research log kept from the first day makes independent development provable rather than a claim.

                ## Milestones
                1. Areas close to your old firm's work agreed with compliance before starting.
                2. A research log with dated entries, sources and design decisions.
                3. Every public paper or dataset used cited in the log.
                4. Version control history preserved from the first commit.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated research log with sources and design decisions is kept weekly from the first day at the new firm."
                cadence: rolling
              tasks:
                - "Agree with compliance which areas to avoid at first"
                - "Start the log with today's date and a scope note"
                - "Add dated entries with sources and design decisions @recurring(weekly:fri)"
                - "Keep version control history from the first commit"
            - name: Bringing in a hire who is under restrictions
              description: |-
                ## Purpose
                Senior researchers end up on the other side: hiring someone who is on garden leave or under a non-compete. Setting clear rules for the candidate and the team, with no discussion of the old firm's strategies, a start date on or after their confirmed end date and compliance in the loop, protects the hire, the team and you.

                ## Milestones
                1. HR and compliance involved before the offer, with the candidate's restriction dates known.
                2. A written note to the team on what not to ask the new hire.
                3. The new hire's first projects scoped away from their old firm's areas.
                4. Contact with the candidate during their restriction limited to logistics.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written team briefing and a first project scope away from the hire's old firm are agreed with compliance before the start date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask HR and compliance for their process for restricted hires"
                - "Write a short note to the team on what not to ask"
                - "Scope the first projects away from the hire's old firm areas"
                - "Limit contact during the restriction to logistics"
            - name: Responding to a letter from your former employer's lawyers
              description: |-
                ## Purpose
                If a firm suspects a breach it will usually write before it sues, often with a short deadline and requests to hand over devices or sign undertakings. Having a plan ready, which is to preserve everything, send nothing in writing yourself and call your lawyer the same day, prevents the panicked reply that makes things worse.

                ## Milestones
                1. A one-page plan written with your lawyer's contact details.
                2. A rule recorded never to delete or alter anything once a letter arrives.
                3. Who you will tell, and who you will not, written down.
                4. The plan stored where you can find it within a minute.

                ## Notes
                Deleting files after a dispute starts can be far more damaging than the original issue. Do not contact the firm directly once lawyers are involved unless your lawyer agrees.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page plan with the lawyer's details and a preservation rule is filed and findable within a minute."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the one-page plan with the lawyer's contact details"
                - "Write the preservation rule at the top of the plan"
                - "List who you will tell and who you will not"
                - "Store the plan in the separation vault and on your phone"
            - name: Personal covenant terms playbook for future moves
              description: |-
                ## Purpose
                Experienced quants move several times in a career, and each contract sets the terms of the next exit. A personal playbook of what you will accept, such as the most unpaid months you can carry, paid garden leave, a narrow competitor definition and no self-employment ban, makes every future negotiation faster.

                ## Milestones
                1. Lessons from this move written down while fresh.
                2. Your acceptable range for each covenant term set.
                3. Points to ask for in every offer listed in order of importance.
                4. The playbook reviewed each year against what you see in the market.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written playbook sets your acceptable range for each covenant term and is reviewed once a year."
                cadence: cyclic
              tasks:
                - "Write five lessons from this move while they are fresh"
                - "Set your acceptable range for each covenant term"
                - "Order the points to ask for by importance"
                - "Review the playbook against market practice @recurring(yearly)"
---

# Non-Competes and Garden Leave

This area is for quant researchers, traders and other finance professionals moving between firms with a notice period, garden leave or a non-compete in the way. It starts with the foundations (a covenant table, a date map, a lawyer's view, the deferred pay at stake, a runway budget and a clean exit), then the routines that keep the restricted months compliant and well used, the knowledge that makes the clauses readable, the decisions about releases, buyouts and the next contract, the dated moments from resignation day to the first day at the new firm, situations such as a young family, a move abroad or a new venture, and finally the specialist work of clean-room research and hiring people who are restricted themselves.

What repeats is a weekly plan and Friday note, a weekly contact log and practice block, monthly checks of compliance, runway, payslips and the document vault, a quarterly countdown review and a yearly look at your covenant playbook. The Risk register, Meeting notes, Monthly budget and bills, Habit tracker, Portfolio piece and Onboarding 30/60/90 templates pair with the projects that name them. Nothing here is legal or tax advice: the lawyer and the accountant make those calls, and this area makes sure you arrive prepared. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
