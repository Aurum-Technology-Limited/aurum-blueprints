---
id: fundraising-investors.investor-board-reporting
name: Investor Board Reporting
description: "A board pack that arrives on time and reads in an hour, KPIs with written definitions, minutes and approvals on record, and the investor reports your agreements require."
category: business
version: 1.0.0
tags: [fundraising-investors, investor-board-reporting, founder, manager, board-pack, kpis, governance, management-accounts]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - board-meeting
    - metrics-log
    - risk-register
    - purchase-decision
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Investor Board Reporting
          description: "Preparing board packs and investor reports with financials, KPIs and key decisions for boards that include investor directors."
          projects:
            - name: Board reporting obligations inventory
              description: |-
                ## Purpose
                Most companies that have raised a priced round owe investors more than a board meeting: monthly or quarterly management accounts within a set number of days, an annual budget before the year starts and audited accounts within a few months of year end. Those duties sit scattered across the shareholders' agreement, the investor rights agreement, the articles and any side letters, and a missed one is a breach an investor can raise at the worst moment. One table listing every obligation, who it is owed to and when it falls due is the base everything else in this area is built on.

                ## Milestones
                1. Every signed investment document with reporting terms gathered in one folder.
                2. A table listing each obligation, the investors entitled to it, the deadline and the format required.
                3. Thresholds noted, such as the shareholding an investor needs to keep information rights.
                4. The table checked by the company's lawyer and saved where the board pack is produced.

                ## Notes
                Read the definitions section of each agreement, not just the clause headings. Information rights often fall away below a holding threshold, and some apply only to a named major investor.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of every board and investor reporting obligation, with its source clause, recipients and deadline, reviewed by the company's lawyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect the shareholders' agreement, investor rights agreement, articles and side letters"
                - "Search each document for information rights, budget approval and accounts delivery clauses"
                - "List every obligation with its recipients, deadline and source clause in one table"
                - "Send the table to the company's lawyer and ask what is missing"
            - name: Annual board calendar with pack deadlines
              description: |-
                ## Purpose
                Investor directors sit on several boards and their diaries fill a quarter ahead, so meetings fixed a fortnight out lose attendance and get moved twice. Setting the year's meeting dates in one go, each with a pack send date, a contributor deadline and the standing items for that meeting (budget, accounts, strategy), turns board reporting into a planned cycle rather than a scramble.

                ## Milestones
                1. Four to six meeting dates for the financial year agreed with every director and observer.
                2. A pack send date fixed for each meeting, typically five working days before.
                3. Standing annual items placed against the right meeting: budget, year-end accounts, strategy, option pool review.
                4. Calendar invitations sent and accepted by every director.

                ## Notes
                Put the budget approval meeting before the financial year starts, and the accounts approval meeting after the auditors expect to finish, not before.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written board calendar for the year with meeting dates, pack send dates and annual items, accepted in every director's diary."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each director for dates they cannot make in the next twelve months"
                - "Propose meeting dates around the financial year end and budget season"
                - "Set the pack send and contributor deadlines for each meeting"
                - "Send calendar invitations for every meeting and pre-read date"
                - "Agree the following year's board dates with all directors @recurring(yearly)"
            - name: Standard board pack contents and order
              description: |-
                ## Purpose
                Directors read faster when every pack follows the same order, because they know where to find the cash position and where the decisions are. A fixed contents list (CEO letter, KPI dashboard, financials, functional updates, decisions requested, appendix) also tells contributors exactly what to write and stops the pack growing every quarter.

                ## Milestones
                1. A one-page contents list with the purpose and page limit of each section.
                2. A CEO letter format agreed: what went well, what did not, what the board is asked to decide.
                3. A decisions section that lists each resolution sought, separate from the updates.
                4. The structure shown to the chair or lead investor director and their changes made.

                ## Notes
                Put the decisions requested near the front. A board that reaches them on page forty after an hour of updates gives them ten minutes.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written pack contents list with section owners and page limits, agreed with the chair or lead investor director."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the last two board packs and list the sections each contained"
                - "Draft a contents list with a purpose and page limit for each section"
                - "Write a one-page CEO letter outline with the three headings"
                - "Ask the lead investor director what they want earlier or shorter"
            - name: Board KPI set with written definitions
              description: |-
                ## Purpose
                When annual recurring revenue means one thing in the board pack, another in the investor update and a third in the data room, directors stop trusting any of it. Choosing eight to twelve KPIs and writing a definition, formula, data source and owner for each fixes the numbers before anyone argues about them, and makes quarter-to-quarter comparisons honest.

                ## Milestones
                1. Eight to twelve KPIs chosen that match the business model and what directors ask about.
                2. A definition sheet giving each KPI's formula, data source, owner and treatment of edge cases.
                3. Historical values recalculated on the new definitions for at least four quarters.
                4. The definitions agreed at a board meeting and recorded in the minutes.

                ## Notes
                Write down the awkward cases: how churn treats a downgrade, whether a signed but unlaunched contract counts as revenue, which currency rate is used. That is where definitions drift.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A KPI definition sheet covering eight to twelve metrics with formulas and sources, approved by the board and minuted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every metric that appeared in the last four board packs"
                - "Pick the eight to twelve that the board actually discusses"
                - "Write a formula, source, owner and edge-case rule for each one"
                - "Recalculate four quarters of history on the agreed definitions"
                - "Review the definitions for metrics that no longer fit the business @recurring(yearly)"
            - name: Board financial statements section
              description: |-
                ## Purpose
                Investor directors usually turn to the financials first, and a pack that shows only a revenue chart and burn hides the balance sheet risks they are paid to spot. A standard financial section with the profit and loss against budget, the balance sheet, the cash flow, headcount and a short commentary gives them the full picture in four or five pages, every time in the same layout.

                ## Milestones
                1. Profit and loss for the month, quarter and year to date against budget and prior year.
                2. Balance sheet and cash flow statement in a consistent layout.
                3. Headcount actual against plan, by team.
                4. A half-page commentary explaining the three largest variances.
                5. The layout agreed with the finance lead or external accountant who produces it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A financial section layout covering profit and loss, balance sheet, cash flow, headcount and commentary, used in at least one board pack."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export last quarter's profit and loss, balance sheet and cash flow from the accounts"
                - "Lay out each statement with budget and prior year columns"
                - "Add a headcount table showing actual against plan by team"
                - "Ask the accountant to confirm the layout matches the ledger"
                - "Write the variance commentary for the first pack in the new layout"
            - name: Pack contributor roles and internal timeline
              description: |-
                ## Purpose
                Any pack due on Friday that depends on four executives finishing their sections on Thursday night will be late, long and inconsistent. Naming an owner for every section and working back from the send date (numbers locked ten days out, drafts seven, CEO review five) means the pack is finished a day early instead of an hour late.

                ## Milestones
                1. Every pack section assigned to a named owner with a backup.
                2. A timeline working back from the send date with dates for numbers, drafts, review and sign-off.
                3. One person named as the pack editor with authority to cut and return sections.
                4. The timeline shared with all contributors and used for the next pack.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written pack timeline and owner list used to produce the next board pack, which went out on its send date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write each pack section beside the person who should own it"
                - "Count back from the send date to set the numbers, draft and review dates"
                - "Name the pack editor and tell contributors they can return sections"
                - "Send the owner list and timeline to every contributor"
            - name: Board pack access list and confidentiality rules
              description: |-
                ## Purpose
                Packs forwarded to a fund's whole investment team, or left in a shared folder an ex-employee can still open, are a common and avoidable leak of pricing, salaries and deal plans. Writing down who receives the pack, in what form, and which sections observers or particular investors must not see keeps sensitive material where the agreements say it belongs.

                ## Milestones
                1. A list of every director, observer and adviser who receives the pack, with the agreement giving them access.
                2. Rules for sections withheld from observers or conflicted directors, written down.
                3. One secure location for packs, with access removed for anyone no longer entitled.
                4. A confidentiality line added to the front page of every pack.

                ## Notes
                Observer rights usually let the company exclude an observer from privileged or conflicted discussions. Check the wording with the company's lawyer before relying on it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written access list and confidentiality rules for board packs, with access to the pack location matching the list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List everyone who received the last board pack and how"
                - "Match each recipient to the agreement or role that entitles them"
                - "Remove folder access for anyone not on the list"
                - "Write the rules for withholding sections from observers"
            - name: Board minutes and action log format
              description: |-
                ## Purpose
                Minutes are the company's legal record that directors considered and approved something, and investors, auditors and future buyers will read them in diligence. A standard minute format that records attendance, quorum, declarations of interest, decisions and actions, plus a running action log, makes each set quick to write and hard to dispute.

                ## Milestones
                1. A minute format covering attendance, quorum, interests declared, papers noted, resolutions passed and actions.
                2. A named minute-taker for every meeting, usually the company secretary or a chief of staff.
                3. An action log listing each action, owner, due date and status.
                4. Minutes from the last meeting written in the new format and approved at the next.

                ## Notes
                Start from the **Meeting notes** template. Record decisions and the reasons in summary, not a transcript of the debate, and have the company's lawyer review the format once.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A minute format and action log adopted, with one set of minutes in that format approved by the board."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect the minutes of the last three board meetings"
                - "Draft a minute format with sections for interests, resolutions and actions"
                - "Ask the agent to turn the minute-taker's rough notes into draft minutes"
                - "Set up an action log with owner, due date and status columns"
            - name: Board resolutions and approvals register
              description: |-
                ## Purpose
                Option grants, bank mandates, new share issues and senior hires often need a board resolution, and many are passed by written consent between meetings, then never filed in one place. A register of every resolution with its date, method, wording and signed copy means the next diligence request takes ten minutes instead of a week of searching emails.

                ## Milestones
                1. Every board resolution since incorporation listed with date, method and subject.
                2. Signed copies of each resolution or the minutes that record it saved beside the register.
                3. Gaps identified where an action was taken without a recorded approval.
                4. Gaps raised with the company's lawyer for ratification where needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register of board resolutions since incorporation with signed copies attached and every gap logged with the lawyer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search email and e-signature records for board consents and resolutions"
                - "Enter each resolution in a register with date, method and subject"
                - "Save the signed copy of each resolution beside its register entry"
                - "Reconcile new resolutions and signed copies into the register @recurring(quarterly)"
            - name: Investor consent matters map
              description: |-
                ## Purpose
                Investment agreements usually list reserved matters that need investor or investor director consent as well as a board vote: new borrowing above a limit, a new share class, selling assets, changing the budget by more than a set percentage. Founders who do not know the list find out when a lender or acquirer asks for evidence of consent. Mapping each reserved matter to its threshold and the consent route needed lets the team ask in time.

                ## Milestones
                1. Every reserved matter and protective provision across the agreements listed with its threshold.
                2. For each one, whether board approval, investor majority consent or a named investor's consent is required.
                3. A short request format for seeking consent by email or written resolution.
                4. The map shared with the finance lead and anyone who signs contracts or borrowing.

                ## Notes
                This is an organising tool, not a legal opinion. Ask the company's lawyer to confirm the map and to say how to evidence each consent.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A consent matters map listing each reserved matter, threshold and consent route, confirmed by the company's lawyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the reserved matters and protective provisions clauses in each agreement"
                - "List each matter with its threshold and who must consent"
                - "Draft a one-paragraph consent request format"
                - "Ask the company's lawyer to confirm the map is complete"
            - name: Monthly management accounts for investors
              description: |-
                ## Purpose
                Where investors hold information rights, monthly management accounts are often due within a fixed number of days after month end, and late or inconsistent accounts are the quickest way to lose a board's confidence. A steady monthly routine of closing the books, producing the same statements and a one-page commentary, and sending them on the same day each month makes the quarterly pack mostly assembly.

                ## Milestones
                1. A fixed send day each month that meets the deadline in the agreements.
                2. The same set of statements produced each month from the closed ledger.
                3. A one-page commentary with each month's accounts covering cash, revenue and the largest variance.
                4. Three consecutive months sent on time to every investor entitled to them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Management accounts and commentary sent to every entitled investor on the fixed send day for three months running."
                cadence: rolling
              tasks:
                - "Check the agreements for the monthly accounts deadline and recipients"
                - "Agree the monthly close date with the bookkeeper or accountant"
                - "Draft the one-page commentary on the month's accounts @recurring(monthly:13)"
                - "Send the management accounts to investors with information rights @recurring(monthly:15)"
            - name: Quarterly board pack production cycle
              description: |-
                ## Purpose
                Every pack that is built from scratch eats a week of the CEO's time and comes out different from the last one. Running each quarter's pack as a repeatable cycle, starting from the previous pack, sending contributor requests on a fixed date and holding an internal review before it goes out, cuts production to a few focused days and keeps quality steady.

                ## Milestones
                1. A pack master file that carries forward from one quarter to the next.
                2. Contributor requests sent on the same day of the cycle each quarter.
                3. An internal review meeting held before every pack is sent.
                4. Two consecutive packs sent on their send date with no late sections.

                ## Notes
                Start from the **Board meeting** template for each meeting, and keep the pack master file separate so the structure survives.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two consecutive quarterly packs produced from the master file and sent on their scheduled send dates."
                cadence: rolling
              tasks:
                - "Copy the last pack into a master file and clear the numbers"
                - "Book a one-hour internal review two days before each send date"
                - "Send section requests to contributors three weeks before the meeting @recurring(quarterly)"
                - "Check every page against the KPI definitions before sending"
            - name: Monthly KPI dashboard refresh
              description: |-
                ## Purpose
                Of everything in the pack, the one-page dashboard showing each agreed KPI by month, against plan and with a trend line, is the page most directors read twice. Refreshing it every month, not just before board meetings, catches a data error or a worrying trend while there is still time to explain it, and makes the quarterly pack a matter of copying in the latest version.

                ## Milestones
                1. A dashboard with every agreed KPI, actual against plan, for the trailing twelve months.
                2. Each figure traceable to the source named in the KPI definition sheet.
                3. A red, amber or green status rule written for each metric.
                4. The dashboard refreshed in the first week of each month for a full quarter.

                ## Notes
                Start from the **Metrics log** template. When a number moves sharply, check the data before writing the explanation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A KPI dashboard refreshed within the first week of the month for three consecutive months, each figure traceable to its source."
                cadence: rolling
              tasks:
                - "Build the dashboard with twelve months of history for each KPI"
                - "Write a red, amber or green rule for each metric"
                - "Refresh the KPI dashboard from source systems @recurring(monthly:6)"
                - "Note any metric that moved more than its usual range"
            - name: Board action tracker follow-through
              description: |-
                ## Purpose
                Actions agreed at a board meeting and never mentioned again are what make investor directors feel the meeting was theatre. Reviewing the action log between meetings and reporting on it as the first page of the next pack shows the board its requests are taken seriously, and closes old actions rather than letting them pile up.

                ## Milestones
                1. Every action from the last two meetings in the log with an owner and due date.
                2. A monthly check that chases overdue actions with their owners.
                3. An action status page at the front of every pack.
                4. No action older than two meetings left open without a reason recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An action status page in every pack, with no action older than two meetings open without a recorded reason."
                cadence: rolling
              tasks:
                - "Copy the actions from the last two sets of minutes into the log"
                - "Give every action a single owner and a due date"
                - "Chase owners of overdue board actions @recurring(monthly:20)"
                - "Add the action status page to the front of the next pack"
            - name: Pre-meeting calls with each director
              description: |-
                ## Purpose
                Nothing unsettles investor directors more than a surprise in the room, and a big decision dropped on them in the pack invites a defensive debate. A short call with each director in the week before the meeting, previewing the hard topics and hearing their concerns, lets the meeting itself spend its time deciding.

                ## Milestones
                1. A fifteen to thirty minute call booked with each director before every meeting.
                2. A short note of each director's concerns, kept with the meeting papers.
                3. Pack or agenda changes made where a concern showed something was missing.
                4. Calls held before two consecutive meetings.

                ## Notes
                Use the calls to preview, not to decide. Decisions belong in the meeting and the minutes, with every director having heard the same information.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pre-meeting call held with every director before two consecutive board meetings, with each director's concerns noted."
                cadence: rolling
              tasks:
                - "List the two or three topics each director will care most about"
                - "Book a call with each director in the week before the meeting @recurring(quarterly)"
                - "Write down each director's concerns after the call"
                - "Adjust the agenda where a concern shows a gap in the papers"
            - name: Quarterly information rights report
              description: |-
                ## Purpose
                Investors with information rights but no board seat, such as smaller funds and larger angels, are often owed quarterly financial statements and a summary of performance, and they are easy to forget because they never attend a meeting. A standard quarterly report built from the board pack, with the confidential sections removed, meets the obligation without extra writing.

                ## Milestones
                1. A list of non-board investors entitled to quarterly reporting, from the obligations inventory.
                2. A report format drawn from the pack: financial statements, KPI dashboard and a short narrative.
                3. A rule for which pack sections are never included.
                4. Two consecutive quarterly reports sent on time to every entitled investor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Quarterly reports sent on time for two consecutive quarters to every non-board investor entitled to them."
                cadence: rolling
              tasks:
                - "List the non-board investors who hold information rights"
                - "Draft a report format from the board pack sections"
                - "Write the rule for which sections are always removed"
                - "Send the quarterly report to non-board investors with information rights @recurring(quarterly)"
            - name: Fund portfolio reporting response kit
              description: |-
                ## Purpose
                Venture funds report to their own investors every quarter, so they send portfolio companies questionnaires asking for revenue, cash, headcount, runway and data for valuing their stake. Each fund uses a different form and a different deadline. Keeping a response kit with the standard answers, definitions and supporting files lets the finance lead answer each request in an hour, consistently with the board pack.

                ## Milestones
                1. A list of each fund investor's reporting contact, portal and usual deadline.
                2. A response sheet holding the figures funds ask for most, tied to the board pack.
                3. Supporting files kept ready: latest accounts, cap table summary, KPI definitions.
                4. A quarter of fund requests answered from the kit, all on time.

                ## Notes
                Give funds the same numbers the board saw. If a fund's definition differs from yours, answer on theirs and note the difference.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every fund reporting request in one quarter answered from the response kit by its deadline, with figures matching the board pack."
                cadence: rolling
              tasks:
                - "Collect last year's fund questionnaires and list the questions they share"
                - "Build a response sheet with the common figures and their sources"
                - "Ask the agent to fill each new fund questionnaire from the response sheet"
                - "Check which fund reporting requests fall due this quarter @recurring(quarterly)"
            - name: Board risk register upkeep
              description: |-
                ## Purpose
                Directors have a duty to understand the main risks to the company, and a register reviewed only when an auditor asks will not show them. Keeping a short register of the top ten to fifteen risks, each with an owner, likelihood, impact and mitigation, and bringing it to the board each quarter makes risk a standing agenda item rather than a crisis topic.

                ## Milestones
                1. A register of the ten to fifteen most serious risks, each with an owner.
                2. Likelihood, impact and current mitigation recorded for each risk.
                3. The register included as an appendix in every board pack.
                4. At least one risk discussed in depth at each board meeting.

                ## Notes
                Start from the **Risk register** template. Include the uncomfortable ones: key person dependence, a single large customer, runway.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A risk register of ten to fifteen owned risks included in every pack, with one risk discussed in depth at each meeting."
                cadence: rolling
              tasks:
                - "Ask each executive for the three risks that worry them most"
                - "Score each risk for likelihood and impact and name an owner"
                - "Review and update the risk register with risk owners @recurring(quarterly)"
                - "Pick one risk to discuss in depth at the next meeting"
            - name: Cash and runway statement for every board
              description: |-
                ## Purpose
                Cash in the bank and months of runway are the two numbers every investor director checks first, and the one thing they never forgive is learning late that runway has shortened. A standard cash statement with opening and closing cash, net burn, runway on current plan and the date by which new funding is needed keeps that conversation early and calm.

                ## Milestones
                1. A cash statement showing opening cash, receipts, payments, closing cash and net burn.
                2. Runway calculated on a written method and on the current plan.
                3. A funding-needed-by date shown, allowing for the months a raise usually takes.
                4. The statement updated monthly and placed on page one of the financials.

                ## Notes
                State the runway method in a footnote, for example average net burn over three months. Directors compare it with the last pack and will notice a quiet change of method.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A cash and runway statement with a written method updated every month and shown at the start of the financials in every pack."
                cadence: rolling
              tasks:
                - "Write the runway calculation method in one sentence"
                - "Build the cash statement from the bank and the ledger"
                - "Update the cash and runway statement after the month closes @recurring(monthly:8)"
                - "Add the funding-needed-by date beneath the runway figure"
            - name: Post-meeting pack feedback loop
              description: |-
                ## Purpose
                Packs drift towards what management likes to write rather than what directors need to read, and nobody says so until a director starts skipping sections. Asking each director two or three short questions after every meeting, and changing one thing in the next pack as a result, keeps the pack shaped by its readers.

                ## Milestones
                1. A three-question feedback note: what was most useful, what was missing, what could go.
                2. Feedback collected from every director after a meeting.
                3. One change to the pack made from each round of feedback.
                4. The changes listed in a short log kept with the pack master file.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Feedback gathered from every director after two meetings, with at least one pack change made and logged each time."
                cadence: rolling
              tasks:
                - "Write the three feedback questions for directors"
                - "Send the feedback questions to directors after each meeting @recurring(quarterly)"
                - "Pick one change to make in the next pack"
                - "Record each change in the pack feedback log"
            - name: Reading the three financial statements as a founder
              description: |-
                ## Purpose
                Founders from product or sales backgrounds often present financials prepared by someone else and freeze when a director asks why cash fell while profit improved. Learning how the profit and loss, balance sheet and cash flow statement connect, using the company's own accounts, lets a founder answer that question in the room rather than promising to come back.

                ## Milestones
                1. The company's last year-end accounts read through with the accountant or finance lead.
                2. A one-page note explaining how profit, working capital and cash connect in this business.
                3. Five likely director questions on the financials answered in writing.
                4. One board meeting where the founder presented the financial section.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note linking the three statements for this company and written answers to five likely director questions on the financials."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Book an hour with the accountant to walk through last year's accounts"
                - "Write a note on why profit and cash differ in this business"
                - "List five questions directors have asked about the numbers"
                - "Write an answer to each question in plain language"
            - name: Writing a board paper that asks for a decision
              description: |-
                ## Purpose
                Decisions buried in a ten-slide update get deferred, while a two-page paper that states the recommendation, the options considered, the cost, the risks and the exact resolution sought gets decided. Learning that format, and writing one for the next real decision, is the single change that most improves what a board meeting achieves.

                ## Milestones
                1. A decision paper template with recommendation, background, options, risks, cost and resolution wording.
                2. A paper written in that format for a real decision on the next agenda.
                3. The paper circulated with the pack and the decision taken at the meeting.
                4. The resolution wording copied into the minutes unchanged.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A decision paper in the agreed format written for a real decision, circulated with the pack and resolved at the meeting."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find a decision the board deferred in the last year and note why"
                - "Write a decision paper outline with the six standard headings"
                - "Draft a paper for a decision on the next board agenda"
                - "Ask the chair to read the draft before the pack goes out"
            - name: Variance commentary that explains the numbers
              description: |-
                ## Purpose
                Commentary that says revenue was below budget restates the table. Useful commentary says why, whether the cause is timing or a trend, what it means for the year and what management is doing about it. Practising that format on the last quarter's numbers turns the most-skipped part of the pack into the part directors quote back.

                ## Milestones
                1. A variance threshold agreed, for example any line more than ten percent or a set amount from budget.
                2. Each variance over the threshold explained as timing, one-off or trend.
                3. The full-year effect of each trend variance estimated.
                4. Last quarter's commentary rewritten in the new format and compared with the original.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A rewritten variance commentary for one quarter classifying every material variance as timing, one-off or trend with its full-year effect."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree a variance threshold with the finance lead"
                - "List last quarter's variances above the threshold"
                - "Label each variance as timing, one-off or trend"
                - "Rewrite the commentary with the full-year effect of each trend"
            - name: Unit economics metrics investor directors compare
              description: |-
                ## Purpose
                Investor directors see dozens of companies and instinctively compare your gross margin, payback period and retention with the rest of their portfolio. Understanding how those metrics are usually calculated in your sector, and where your definitions differ, lets you present them without being caught out by a comparison you did not know was being made.

                ## Milestones
                1. The standard sector metrics listed, such as gross margin, customer acquisition payback, net revenue retention and burn multiple.
                2. The usual calculation for each written next to the company's own.
                3. Each difference between the two explained in a sentence.
                4. Two published benchmark sources noted for the sector, with their sample and date.

                ## Notes
                Benchmarks vary with stage, sector and the year they were collected. Present them as context for discussion, never as a target the company has committed to.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note comparing the company's calculation of five sector metrics with the usual method, with two dated benchmark sources."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask an investor director which metrics they compare across the portfolio"
                - "Write the usual formula for each metric beside the company's"
                - "Explain each difference in one sentence"
                - "Note two benchmark reports for the sector with their date and sample"
            - name: Cohort and retention charts for the board
              description: |-
                ## Purpose
                One churn percentage hides whether newer customers stay longer than older ones, which is often the question a board most wants answered. Learning to build and read cohort charts, by month or quarter of acquisition, shows the board whether product and onboarding changes are working and gives a much better basis for the forecast.

                ## Milestones
                1. Customer or revenue data extracted by acquisition month with monthly activity or revenue.
                2. A cohort chart showing retention for each cohort over time.
                3. Three observations written about what the cohorts show.
                4. The chart and observations included in a board pack appendix.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A cohort retention chart with three written observations included in a board pack appendix."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Export customers with their start month and monthly revenue"
                - "Build a cohort table of retained revenue by month since start"
                - "Turn the table into a chart with one line per cohort"
                - "Write three observations about what the cohorts show"
            - name: Delivering bad news to the board early
              description: |-
                ## Purpose
                Reporting a lost major customer, a key resignation or a slipped launch at the next scheduled meeting, six weeks late, damages trust more than the event itself. Practising a short format for bad news (what happened, the impact, what you are doing, what you need from the board) and agreeing a threshold for when news cannot wait makes it easier to pick up the phone the same week.

                ## Milestones
                1. A threshold written for events the board hears about within days, not at the next meeting.
                2. A four-part format for bad news notes: what, impact, response, ask.
                3. A practice note written for a past setback using the format.
                4. The threshold shared with the chair or lead investor director.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written threshold for out-of-cycle board notice and a four-part bad news format, shared with the chair or lead investor director."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the setbacks from the last year and when the board heard of each"
                - "Write the threshold for news that cannot wait for a meeting"
                - "Draft a practice note for one past setback in the four-part format"
                - "Agree the threshold with the chair or lead investor director"
            - name: Running a board meeting to time
              description: |-
                ## Purpose
                Meetings that run an hour over usually spent the first ninety minutes re-presenting a pack directors had already read. Learning to run the agenda to time, taking the pack as read, spending most of the meeting on two or three discussion items and closing each item with a clear outcome, gets more decided in less time and earns more useful input from directors.

                ## Milestones
                1. An agenda with a time allocation for every item and the pack taken as read.
                2. More than half the meeting time given to discussion and decision items.
                3. Each item closed with the outcome stated aloud for the minutes.
                4. Two meetings in a row finished within their scheduled time.

                ## Notes
                Where the company has an independent chair, agree with them who runs which part. A CEO presenting and chairing at once tends to overrun.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Two consecutive board meetings finished on time with more than half the time spent on discussion and decisions."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Time how the last meeting's minutes were actually spent"
                - "Write the next agenda with minutes allocated to each item"
                - "Tell directors the pack will be taken as read"
                - "State the outcome of each item aloud before moving on"
            - name: Roles of directors, observers and investors in the room
              description: |-
                ## Purpose
                Boards with two investor directors, an observer and a founder can blur who votes, who may attend which items and whose interests each person represents. Understanding the difference between a director's duties to the company, an observer's contractual rights and an investor's interests as a shareholder helps the CEO and the company secretary run meetings properly, especially on conflicted topics.

                ## Milestones
                1. A one-page note on who is a director, who is an observer and what each may do.
                2. The note checked against the articles and investment agreements by the company's lawyer.
                3. A rule for handling items where an investor director has a conflict.
                4. The note shared with whoever minutes the meetings.

                ## Notes
                Directors' duties differ by country. Ask the company's lawyer to explain the position where the company is incorporated rather than relying on general reading.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note on board roles and a conflict handling rule, reviewed by the company's lawyer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every person who attends board meetings and their formal role"
                - "Read the board and observer clauses in the articles and agreements"
                - "Draft the one-page roles note with a conflict handling rule"
                - "Ask the company's lawyer to review the note"
            - name: Cutting the board pack to a 20-page core
              description: |-
                ## Purpose
                Packs swell to eighty pages because every executive adds and nobody removes, and directors respond by skimming or reading only the financials. Cutting the main pack to about twenty pages, with supporting detail moved to an appendix, gets it read properly and forces management to decide what matters this quarter.

                ## Milestones
                1. The current pack's page count by section recorded.
                2. Each section cut to its page limit, with the detail moved to an appendix.
                3. A core pack of about twenty pages sent for one meeting.
                4. Director feedback on the shorter pack collected and acted on.

                ## Notes
                Ask each section owner what a director would miss if the page were gone. If the answer is nothing, it goes.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board pack with a core of no more than about twenty pages and a separate appendix, sent for one meeting with feedback recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count the pages in each section of the last pack"
                - "Set a page limit for each section with its owner"
                - "Move supporting tables and detail into an appendix"
                - "Ask directors whether anything they needed was lost"
            - name: Strategic discussion slot on every agenda
              description: |-
                ## Purpose
                Boards with experienced investor directors are wasted on reviewing the past quarter, yet many agendas leave no time for anything else. Reserving a fixed slot of forty-five minutes or more at each meeting for one strategic question, framed in a short paper with options, gets real advice on pricing, hiring, markets or the next raise from people who have seen it many times.

                ## Milestones
                1. A list of strategic questions for the year, agreed with the chair or lead investor director.
                2. A fixed discussion slot of at least forty-five minutes on every agenda.
                3. A two-page framing paper for each discussion, sent with the pack.
                4. The main points and any follow-up recorded in the minutes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two consecutive board meetings each held a strategic discussion of at least forty-five minutes with a framing paper and minuted outcome."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List five strategic questions the company faces this year"
                - "Agree the order of topics with the chair or lead investor director"
                - "Write a two-page framing paper for the first topic"
                - "Move routine updates to the appendix to make room in the agenda"
            - name: Automating KPI data pulls into the pack
              description: |-
                ## Purpose
                Copying numbers from the accounting system, the CRM and the product database into slides by hand takes a finance lead two days a quarter and introduces errors every time. Connecting those sources to a reporting sheet or business intelligence tool so the dashboard refreshes itself saves the time and removes the transcription mistakes directors eventually find.

                ## Milestones
                1. Each KPI mapped to the system and field it comes from.
                2. An automated extract or connector set up for the three largest data sources.
                3. The dashboard refreshed automatically and checked against a manual calculation.
                4. Hours spent on pack numbers recorded before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The KPI dashboard refreshes from its three largest data sources automatically and matches a manual check for one quarter."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map each KPI to the system and field it is taken from"
                - "Record how many hours the last pack's numbers took"
                - "Set up an extract or connector for the accounting system first"
                - "Compare the automated figures with a manual calculation"
            - name: Choosing a board portal
              description: |-
                ## Purpose
                Once a board has five or more members, observers and committees, emailed PDFs create version confusion and confidentiality risk. A board portal gives one current version of each pack, access control by person and section, annotations and an archive. Comparing two or three options on security, cost and how directors will actually use them prevents paying for features nobody opens.

                ## Milestones
                1. Requirements written: number of users, committees, access control, e-signature, archive.
                2. Two or three portals or secure document tools compared against the requirements.
                3. Directors asked which tools they already use on other boards.
                4. A choice made and recorded with cost and the reasons.

                ## Notes
                Start from the **Purchase decision** template. A well-controlled shared folder is a sound choice for a small board; a portal earns its cost with committees and many users.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the board portal or secure folder, comparing at least two options on security, cost and director use."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the board's requirements for a pack distribution tool"
                - "Ask each director which portals they use on other boards"
                - "Compare two or three options on security, cost and ease of use"
                - "Record the decision and the reasons"
            - name: Reconciling board numbers to the statutory accounts
              description: |-
                ## Purpose
                Board packs are prepared from management accounts during the year, and the audited accounts can tell a different story once accruals, revenue recognition and year-end adjustments land. Reconciling the full-year board figures to the statutory accounts, and explaining every difference, protects the credibility of the pack and avoids an awkward question in the next round's diligence.

                ## Milestones
                1. The year's board pack totals for revenue, gross margin, operating costs and cash listed.
                2. The same lines taken from the statutory accounts.
                3. Every difference above a set threshold explained.
                4. A note on any change to management reporting needed to avoid the gap recurring.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A reconciliation of the year's board figures to the statutory accounts with every material difference explained, presented to the board."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the full-year board pack figures for the main lines"
                - "Take the same lines from the statutory accounts"
                - "Explain each difference above the agreed threshold"
                - "Present the reconciliation to the board with any reporting change"
            - name: Mid-year reforecast for board approval
              description: |-
                ## Purpose
                When actual results drift well away from the approved budget, a pack that keeps reporting against the stale plan makes every variance look alarming or meaningless. Preparing a reforecast for the rest of the year, with the assumptions that changed and the effect on cash and runway, gives the board a current plan to approve and a fair basis for the next two packs.

                ## Milestones
                1. A trigger agreed for reforecasting, such as revenue or burn off plan by a set percentage.
                2. A reforecast for the remaining months with each changed assumption listed.
                3. The effect on year-end cash, runway and the funding-needed-by date shown.
                4. The reforecast approved by the board and the pack reporting against it.

                ## Notes
                Keep the original budget column. Directors want to see performance against both the approved plan and the reforecast.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A reforecast with listed assumption changes and cash effect approved by the board and minuted."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Agree the reforecast trigger with the finance lead"
                - "List every budget assumption that has changed"
                - "Rebuild the remaining months and the cash position"
                - "Write the board paper seeking approval of the reforecast"
            - name: Benchmark comparison page for the board
              description: |-
                ## Purpose
                Directors already compare your numbers with their other companies, so showing your own comparison with published sector benchmarks moves the discussion from impressions to evidence. A single page placing five or six KPIs against a dated benchmark range, with the source and sample stated, helps the board judge whether a number is genuinely good, typical or a problem.

                ## Milestones
                1. Five or six KPIs chosen that have reliable published benchmarks for the stage and sector.
                2. A benchmark range recorded for each with source, sample and date.
                3. A one-page comparison designed for the pack appendix.
                4. The page reviewed with one investor director for fairness.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page benchmark comparison of five or six KPIs with sourced, dated ranges included in a board pack appendix."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose five KPIs that have published benchmarks for the stage"
                - "Find a benchmark range for each with its source and date"
                - "Lay out the comparison on a single appendix page"
                - "Ask an investor director whether the comparison is fair"
            - name: Annual budget approval meeting
              description: |-
                ## Purpose
                Many investment agreements require the board, or the investor directors, to approve the annual budget before the financial year begins, and a budget approved late leaves the team spending without authority. Preparing the budget pack, with the plan, headcount, cash and runway, the key assumptions and a downside case, and booking the approval meeting well ahead, makes the first quarter start on an agreed plan.

                ## Milestones
                1. The budget deadline in the agreements confirmed and the approval meeting booked before it.
                2. A budget pack with revenue, costs, headcount, cash, runway and assumptions.
                3. A downside case showing what changes if revenue comes in lower.
                4. The budget approved by board resolution and minuted before the year starts.

                ## Notes
                Send a draft to investor directors two weeks before the meeting. Budgets rarely survive first contact, and changes are easier before the formal paper.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The annual budget approved by board resolution before the financial year starts, with a downside case included in the pack."
                cadence: cyclic
                effort_hours_estimate: "25"
              tasks:
                - "Check the agreements for the budget approval deadline and who must approve"
                - "Book the budget approval meeting before the deadline"
                - "Send the draft budget to investor directors two weeks before the meeting"
                - "Start the next year's budget pack three months before year end @recurring(yearly)"
            - name: Year-end accounts approval with the auditors
              description: |-
                ## Purpose
                Approving the statutory accounts is one of the board's formal annual duties, and investors usually have a deadline for receiving them. Planning the meeting with the auditors, so directors receive the draft accounts and the auditor's findings in time to ask questions, avoids rushed sign-off and makes sure the management letter points are tracked rather than filed.

                ## Milestones
                1. The audit timetable agreed with a date for draft accounts and the approval meeting.
                2. Draft accounts and the auditor's findings sent to directors before the meeting.
                3. The auditor invited to present and take questions without management for part of the meeting.
                4. Accounts approved, signed and sent to investors by the agreed deadline.
                5. Management letter points logged with owners and due dates.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Statutory accounts approved at a minuted board meeting and sent to entitled investors by their deadline, with management letter points logged."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Agree the audit timetable and approval meeting date with the auditors"
                - "Send the draft accounts and auditor's findings with the pack"
                - "Log each management letter point with an owner"
                - "Book the accounts approval meeting with the auditors @recurring(yearly)"
            - name: Annual strategy session with the board
              description: |-
                ## Purpose
                Quarterly meetings rarely leave room to step back on market, product direction and the next financing, and boards that never do so end up approving plans they had no hand in shaping. A half-day or full-day session once a year, separate from the formal meeting and prepared with a short pre-read, gives directors a proper say before the budget is built.

                ## Milestones
                1. A date set for the session two to three months before budget season.
                2. Three or four strategic questions agreed with the chair or lead investor director.
                3. A pre-read of no more than fifteen pages sent a week before.
                4. Agreed conclusions written up and used as inputs to the budget.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual strategy session held with a pre-read and written conclusions that feed the following budget."
                cadence: cyclic
                effort_hours_estimate: "20"
              tasks:
                - "Agree three or four strategic questions with the chair"
                - "Write and send the pre-read a week before the session"
                - "Write up the conclusions and send them to all directors"
                - "Book the annual board strategy session before budget season @recurring(yearly)"
            - name: Board paper for an acquisition or major contract
              description: |-
                ## Purpose
                Buying a small company, signing a multi-year contract that commits a large share of revenue, or taking on significant borrowing usually needs board approval and often investor consent. A decision paper with the rationale, the numbers, the risks, the alternatives and the exact resolution, circulated with enough time for questions, protects directors and gets the deal approved without a second meeting.

                ## Milestones
                1. The approvals needed confirmed against the consent matters map.
                2. A decision paper with rationale, financial effect, risks and alternatives.
                3. Legal and financial adviser views summarised in the paper where advisers are involved.
                4. The resolution passed and any investor consent obtained before signing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A board resolution, and any investor consent required, obtained on a written decision paper before the transaction is signed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Check the consent matters map for the approvals this deal needs"
                - "Draft the decision paper with rationale, numbers, risks and alternatives"
                - "Brief each investor director before the paper is circulated"
                - "Record the resolution and any consent before anything is signed"
            - name: Board reporting during an active fundraise
              description: |-
                ## Purpose
                While a round is running, the board needs regular news on the pipeline and terms, but some directors' funds may be investing and so have a conflict on price. A short weekly or fortnightly fundraise note, with a rule for which details go to conflicted directors, keeps the board informed and the process clean through to the decision to accept a term sheet.

                ## Milestones
                1. Directors with a conflict in the round identified and the handling agreed with the lawyer.
                2. A short fundraise status note format: pipeline stage, interest, terms seen, next steps.
                3. Notes sent on a fixed rhythm through the process.
                4. The term sheet decision taken by the board with conflicts recorded in the minutes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Fundraise notes sent on a fixed rhythm through the round, and the term sheet approval minuted with conflicts declared."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the lawyer how to handle directors whose funds may invest"
                - "Draft the fundraise status note format"
                - "Agree the rhythm for fundraise notes with the chair"
                - "Prepare the term sheet decision paper with conflicts listed"
            - name: Special board meeting at short notice
              description: |-
                ## Purpose
                A takeover approach, a large customer default or an urgent financing can need a board decision within days. Knowing in advance how the articles require such a meeting to be called, the notice period, the quorum and whether a call or written resolution will do means the decision is valid when the lawyers check it later.

                ## Milestones
                1. The notice, quorum and remote attendance rules from the articles noted in one place.
                2. A short-notice meeting checklist covering notice, papers, attendance and minutes.
                3. Contact details for every director, including an out-of-hours number.
                4. The checklist reviewed by the company's lawyer.

                ## Notes
                If directors are asked to waive the notice period, record each waiver in the minutes.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A short-notice board meeting checklist with notice, quorum and attendance rules from the articles, reviewed by the company's lawyer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the board meeting notice and quorum rules in the articles"
                - "Write a one-page short-notice meeting checklist"
                - "Collect an out-of-hours number for every director"
                - "Ask the company's lawyer to review the checklist"
            - name: First board pack as a seed-stage founder
              description: |-
                ## Purpose
                A founder who has just closed a seed round with a lead investor taking a board seat often has no finance team and no example to copy. Producing a lean first pack (a two-page CEO letter, a KPI page, simple financials from the bookkeeper and one decision) sets the habits for the years ahead without taking a week away from building the company.

                ## Milestones
                1. The lead investor director asked what they expect in a seed-stage pack.
                2. A pack of no more than twelve pages with CEO letter, KPIs, financials and one decision.
                3. Financials prepared with the bookkeeper or a fractional finance lead.
                4. The pack sent five working days before the first meeting.

                ## Notes
                Ask the lead investor for an anonymised pack from another seed company in their portfolio. Most have one they recommend.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first board pack of twelve pages or fewer sent five working days before the meeting."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the lead investor what a good seed-stage pack contains"
                - "Ask the bookkeeper for the quarter's profit and loss and cash figures"
                - "Write a two-page CEO letter covering progress, problems and the ask"
                - "Pick one decision for the board to take at the first meeting"
            - name: Finance manager taking over the board pack
              description: |-
                ## Purpose
                Taking the pack over from the CEO or a departing fractional CFO, a newly hired finance manager or controller often finds that much of how it was put together lives in someone's head. A structured handover over two pack cycles, with the sources, adjustments and director preferences written down, keeps the numbers consistent and avoids a pack that suddenly looks different to the board.

                ## Milestones
                1. The last four packs and their working files collected.
                2. Every source, manual adjustment and recurring correction written down.
                3. Director preferences and past sensitive questions noted from the previous owner.
                4. One pack produced jointly and the next produced by the new owner alone.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written pack production guide covering sources and adjustments, with the new owner producing a pack alone within two cycles."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Collect the last four packs and every working spreadsheet behind them"
                - "Sit with the previous owner and write down each manual adjustment"
                - "Ask the CEO which questions directors raise every quarter"
                - "Write the pack production guide from the notes"
            - name: Chief of staff as board secretary
              description: |-
                ## Purpose
                In companies without a company secretary, a chief of staff or operations manager often ends up running the board process: scheduling, chasing contributors, assembling the pack, taking minutes and filing resolutions. Setting the role out on one page, with what they own and where the CEO, finance lead and lawyer step in, lets them do it well without making legal calls that are not theirs to make.

                ## Milestones
                1. A one-page role note listing what the board secretary owns.
                2. Handoffs defined: what goes to the CEO, the finance lead and the lawyer.
                3. A board admin calendar holding every recurring task in the cycle.
                4. One full meeting cycle run by the board secretary with no missed step.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A board secretary role note and admin calendar, with one complete meeting cycle run from them without a missed step."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every board admin task done in the last meeting cycle"
                - "Mark which tasks need the CEO, finance lead or lawyer"
                - "Write the one-page board secretary role note"
                - "Put every cycle task into a board admin calendar"
            - name: Reporting through a quarter that missed plan
              description: |-
                ## Purpose
                When revenue comes in a third below plan, the temptation is to bury it in caveats or lead with the good news. Boards take a miss better when the pack opens with it, explains the cause plainly, separates what was in management's control from what was not, and comes with a revised plan. Preparing that pack carefully protects the credibility the next raise will depend on.

                ## Milestones
                1. The miss stated in the first paragraph of the CEO letter with the numbers.
                2. Causes split into those management controlled and those it did not.
                3. A revised plan with what changes, its cost and how progress will be shown.
                4. Each investor director briefed by phone before the pack arrives.

                ## Notes
                Do not change KPI definitions or the runway method in the same quarter as a miss. It will look like moving the goalposts even when it is not.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A pack that states the miss in its first paragraph, analyses the causes and proposes a revised plan, with directors briefed before it arrives."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the miss and its size in the first paragraph of the CEO letter"
                - "Separate the causes into controllable and not controllable"
                - "Draft the revised plan with its cost and milestones"
                - "Call each investor director before the pack goes out"
            - name: Board reporting when runway drops below twelve months
              description: |-
                ## Purpose
                Once runway falls under twelve months, the board's attention moves to cash, and directors may need to think about their own duties if the company is heading towards insolvency. Weekly cash reporting, a clear options paper (raise, bridge, cut, sell) and early advice from the company's lawyer on what directors must consider make sure decisions are taken in time and properly recorded.

                ## Milestones
                1. A weekly thirteen-week cash forecast sent to the board.
                2. An options paper covering a new raise, a bridge, cost reductions and a sale, with timings.
                3. Advice taken from the company's lawyer on directors' duties in this position.
                4. The board's chosen course of action minuted with the reasons.

                ## Notes
                This project organises the reporting. It is not a judgement on solvency, which is for the directors with professional advice.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Weekly thirteen-week cash forecasts sent to the board and a minuted decision on an options paper, with legal advice on directors' duties recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Build a thirteen-week cash forecast from the bank and payables"
                - "Send the thirteen-week cash forecast to the board @recurring(weekly:mon)"
                - "Draft the options paper covering raise, bridge, cuts and sale"
                - "Book a call with the company's lawyer on directors' duties"
            - name: Reporting to a board with a corporate investor director
              description: |-
                ## Purpose
                A director appointed by a corporate investor may work for a company that is a customer, partner or competitor, so pricing, pipeline and product plans in the pack can create real conflicts. Agreeing in advance which sections that director receives in full, which are summarised and when they leave the room keeps the relationship useful without exposing commercially sensitive material.

                ## Milestones
                1. The information rights and confidentiality terms for the corporate investor reviewed with the lawyer.
                2. A list of pack sections that are redacted or summarised for that director.
                3. A procedure for recusal on conflicted agenda items, recorded in the minutes.
                4. The approach explained to the director and agreed in writing.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written redaction and recusal approach for the corporate investor director, reviewed by the lawyer and agreed with that director."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the corporate investor's information and confidentiality terms"
                - "List the pack sections that touch the investor's commercial interests"
                - "Write the redaction and recusal procedure"
                - "Agree the procedure with the corporate investor director"
            - name: Audit committee reporting pack
              description: |-
                ## Purpose
                As a company grows, often after Series B or ahead of a listing, the board forms an audit committee to oversee financial reporting, controls, the auditor and risk. That committee needs its own short pack, separate from the main board pack, covering accounting judgements, control issues, the audit plan and any whistleblowing or fraud reports.

                ## Milestones
                1. The committee's remit and membership confirmed from its written terms of reference.
                2. An annual committee calendar covering the audit plan, accounts, controls and auditor review.
                3. A standard committee pack covering judgements, control issues and auditor matters.
                4. A committee report to the main board after each meeting.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An audit committee pack produced for each committee meeting and a written committee report given to the full board afterwards."
                cadence: rolling
              tasks:
                - "Read the audit committee's terms of reference"
                - "Map the committee's annual items onto its meeting dates"
                - "Draft the audit committee pack format"
                - "Prepare the audit committee pack and report to the board @recurring(quarterly)"
            - name: Remuneration committee papers
              description: |-
                ## Purpose
                Founder and executive pay, bonus plans and large option grants are decisions where management has an interest, so boards with investor directors often hand them to a remuneration committee. Preparing clear papers with market data, the proposal, the cost and dilution, and the approval needed lets the committee decide fairly and documents why.

                ## Milestones
                1. The committee's remit and who may attend for each item written down.
                2. Annual pay review papers with market data sources named.
                3. Bonus and option proposals showing total cost and dilution.
                4. Decisions minuted with the conflicted executives recorded as absent.

                ## Notes
                Executives should not prepare or attend the discussion of their own pay. The finance lead or an adviser usually prepares those papers.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Annual remuneration committee papers with market data, cost and dilution, and minutes recording the decisions and absences."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Write down the committee's remit and attendance rules"
                - "Collect two market pay data sources for the main roles"
                - "Show the cost and dilution of each bonus and option proposal"
                - "Prepare the annual pay review papers for the committee @recurring(yearly)"
            - name: Annual board effectiveness review
              description: |-
                ## Purpose
                Boards rarely ask whether they themselves work: whether the pack helps, whether time goes on the right topics, whether the mix of directors still fits the company. A short annual review, through a confidential questionnaire and a discussion led by the chair or an independent director, produces two or three changes for the coming year.

                ## Milestones
                1. A confidential questionnaire covering papers, meetings, composition and relationships.
                2. Responses collected from every director and regular attendee.
                3. Results summarised and discussed at a board meeting.
                4. Two or three agreed changes recorded and checked a year later.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An annual board review completed with responses from every director and two or three agreed changes minuted."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Draft a twelve-question confidential board questionnaire"
                - "Ask the chair or an independent director to lead the review"
                - "Summarise the responses into themes and proposed changes"
                - "Run the confidential board effectiveness questionnaire @recurring(yearly)"
---

# Investor Board Reporting

This area is for founders and the finance managers, chiefs of staff and company secretaries who prepare what a board with investor directors reads: the pack, the numbers, the decision papers and the reports investors are owed under their agreements. It starts with the foundations (what you are obliged to send, a calendar, a standard pack, defined KPIs and a financial section), then the routines that produce each pack and report, the skills of writing for a board, improvements and decisions about the pack itself, the annual and one-off meetings, the situations founders and managers find themselves in, and finally the committee work and board review of a maturing company.

What repeats is the monthly management accounts and KPI refresh, a monthly cash and runway line and action chase, the quarterly pack cycle with pre-meeting director calls, information rights reports, fund questionnaires and a risk register review, and the yearly calendar, budget, accounts, strategy and effectiveness meetings. The Board meeting, Meeting notes, Metrics log, Risk register and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
