---
id: private-equity-vc.portfolio-company-board-work
name: Portfolio Company Board Work
description: "The governance papers read, a board pack and KPI set agreed, routines for meetings, minutes, approvals and the CEO relationship, and clear rules for when an investor director steps in."
category: business
version: 1.0.0
tags: [private-equity-vc, portfolio-company-board-work, knowledge-worker, investor-director, board-packs, governance, reserved-matters, ceo-relationship]
author: Aurum Technology
starter_structure:
  templates:
    - board-meeting
    - skills-matrix
    - meeting-notes
    - one-on-one
    - risk-register
    - purchase-decision
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Portfolio Company Board Work
          description: "Serving on a portfolio company board as an investor: board packs, KPI reviews, the management relationship, approvals and knowing when to step in."
          projects:
            - name: Board seat brief for a new portfolio company
              description: |-
                ## Purpose
                Taking a board seat the week after closing, most investor directors know the deal model in detail and the board itself hardly at all. A two-page brief covering who sits on the board, who appointed each director, the committee structure, the meeting rhythm and the open items carried from the deal gives you a working picture before the first pack lands.

                ## Milestones
                1. A list of every director and observer, with who appointed them and their term.
                2. The committees, their members and terms of reference noted in one place.
                3. Open items from the deal (conditions, post-closing undertakings, lender requests) listed with owners.
                4. The brief saved in the deal folder and shared with the partner who also sits on the board.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page board brief listing directors, appointing shareholders, committees and open deal items exists and has been shared with the co-director."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the company secretary for the current register of directors"
                - "List each director, their appointing shareholder and committee seats"
                - "Pull open post-closing items from the closing checklist"
                - "Write the two-page brief and send it to your co-director"
            - name: Articles and shareholders' agreement read as a director
              description: |-
                ## Purpose
                Board powers in a buyout sit mostly in two documents the deal lawyers negotiated and few directors reread: the articles and the shareholders' or investment agreement. Reading them with a director's questions in mind (quorum, casting votes, written resolutions, consent rights, information rights, leaver mechanics) means you will not discover in a tense meeting that a decision needed investor consent.

                ## Milestones
                1. Quorum, notice periods, written resolution rules and any casting vote noted.
                2. Investor consent matters listed separately from board matters.
                3. Information rights and the deadlines for monthly and annual accounts recorded.
                4. Questions on unclear clauses answered by company counsel in writing.

                ## Notes
                Keep the summary as a reading aid only. Where the summary and the documents disagree, the documents win, so cite clause numbers beside every line.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A clause-referenced summary of board procedure, consent matters and information rights, with counsel's answers to open questions attached."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download the signed articles and shareholders' agreement from the closing set"
                - "Note quorum, notice and written resolution rules with clause numbers"
                - "List every investor consent matter in a separate table"
                - "Send unclear clauses to company counsel as numbered questions"
            - name: Nominee director duties and conflicts briefing
              description: |-
                ## Purpose
                Appointed by a fund or not, a director owes duties to the company, not to the fund that put them there, and the gap between the two shows up in add-ons, refinancings, management equity and exits. An hour with company counsel on how duties and conflicts work in the company's jurisdiction, written up in your own words, gives you a rule you can apply quickly when a conflict appears mid-meeting.

                ## Milestones
                1. A briefing held with company counsel on directors' duties in the company's jurisdiction.
                2. The firm's own policy for nominee directors read and reconciled with counsel's view.
                3. A short list of the situations where you would declare a conflict or step out of a vote.
                4. Your interests declared to the board and entered in the company's conflicts register.

                ## Notes
                This is preparation for advice, not a substitute for it. When a live conflict arises, ask counsel before the vote, not after.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written one-page note of counsel's duties briefing exists and your interests are entered in the company's conflicts register."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask company counsel for a one-hour directors' duties briefing"
                - "Read your firm's policy on nominee directors before the call"
                - "Write the situations where you would step out of a vote"
                - "Renew your declaration of interests with the company secretary @recurring(yearly)"
            - name: D&O insurance and indemnity check
              description: |-
                ## Purpose
                Directors' and officers' cover is usually bought by the company in a hurry around closing, and investor directors often assume it covers them without ever seeing the policy. Checking the limit, the exclusions, run-off arrangements and any deed of indemnity, alongside the fund's own management liability policy, tells you where you are exposed before a claim or an insolvency makes it urgent.

                ## Milestones
                1. The company's D&O policy schedule and wording received and read.
                2. Your deed of indemnity from the company located or requested.
                3. Overlap with the fund's own management liability cover confirmed with the firm's insurance contact.
                4. Gaps raised with the CFO and the broker, with a renewal date recorded.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The D&O limit, key exclusions, renewal date and indemnity position are recorded, and any gap has been raised with the broker in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the CFO for the D&O schedule, wording and broker contact"
                - "Check whether you hold a signed deed of indemnity from the company"
                - "Compare cover with the fund's management liability policy"
                - "Review D&O cover and limits a month before renewal @recurring(yearly)"
            - name: Reserved matters and delegated authority matrix
              description: |-
                ## Purpose
                Without a clear matrix, management either brings every purchase order to the board or signs a five-year lease without asking. A single table showing what management can decide alone, what needs board approval and what needs investor consent, with money thresholds, ends that guesswork and gives the CFO something to check against before contracts are signed.

                ## Milestones
                1. Every reserved matter from the legal documents listed in one table.
                2. Money thresholds set for spending, contracts, hires and borrowing.
                3. Each line marked as management, board, or investor consent.
                4. The matrix approved by board resolution and circulated to the leadership team.

                ## Notes
                Keep thresholds high enough that the board sees decisions, not paperwork. A matrix that routes fifty items a month to the board will be ignored within a quarter.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A delegated authority matrix with thresholds and approval levels has been approved by board resolution and sent to the leadership team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Extract every reserved and consent matter into a single table"
                - "Propose money thresholds with the CFO for each category"
                - "Mark each line as management, board or investor consent"
                - "Table the matrix for approval at the next board meeting"
            - name: Annual board calendar and agenda plan
              description: |-
                ## Purpose
                Boards that plan only one meeting ahead end up approving the budget in January and discussing strategy whenever there is a spare half hour. Setting the year's dates and assigning the fixed items (budget, audit, strategy, risk, people review, insurance renewal) to particular meetings means nothing important lands as a surprise and directors can protect the time.

                ## Milestones
                1. Twelve months of board and committee dates agreed and in every director's diary.
                2. Each fixed annual item assigned to a named meeting.
                3. A standing agenda for routine meetings agreed with the chair and CEO.
                4. The calendar saved with the company secretary and reviewed at the year-end meeting.

                ## Notes
                Start from the **Board meeting** template for each meeting on the calendar.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month board calendar with dates and assigned annual items is agreed by the chair and in every director's diary."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Propose twelve months of board and committee dates to the chair"
                - "Assign budget, audit, strategy and people items to meetings"
                - "Agree a standing agenda for routine meetings with the CEO"
                - "Send diary holds to every director and observer"
            - name: Board pack standard agreed with the CFO
              description: |-
                ## Purpose
                Packs that arrive the night before, run to 140 pages and bury the cash position on page 90 waste every director's preparation. Agreeing a standard with the CFO (contents, order, page limits, a one-page summary and a delivery deadline of five working days before the meeting) produces packs you can read properly and gives management a clear bar to hit.

                ## Milestones
                1. A contents list agreed: CEO letter, financials, KPIs, cash, risks, decisions needed.
                2. A one-page summary required at the front of every pack.
                3. A delivery deadline set and written into the board calendar.
                4. The first pack under the new standard received on time and reviewed with the CFO.

                ## Notes
                Decision papers go at the front, information at the back. Directors read the first twenty pages most carefully.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written board pack standard covering contents, page limits and delivery deadline is agreed, and the next pack follows it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark up the last board pack with what to cut and what is missing"
                - "Draft a contents list and page limits for the CFO"
                - "Agree the delivery deadline before each meeting"
                - "Review the first pack under the standard with the CFO"
            - name: Board KPI set of ten measures
              description: |-
                ## Purpose
                Management dashboards often carry forty metrics, and a board that looks at all of them discusses none. Choosing about ten measures that track the investment thesis and the value creation plan (revenue quality, margin, cash conversion, customer retention, headcount against plan) and agreeing their definitions gives every board meeting the same front page.

                ## Milestones
                1. Ten measures chosen, each tied to a line of the investment thesis.
                2. A written definition and data source for each measure.
                3. Targets or budget values set beside each measure for the year.
                4. The KPI page live at the front of the board pack.

                ## Notes
                This is the board's front page, not the full monitoring dashboard your firm keeps. Resist adding measures; swap one out when you add one.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page board KPI view with ten defined measures and targets appears at the front of the board pack."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the five thesis points the board must be able to track"
                - "Pick two measures per thesis point and write their definitions"
                - "Agree data sources and budget values with the CFO"
                - "Ask the CFO to place the KPI page at the front of the next pack"
            - name: Board composition and skills map
              description: |-
                ## Purpose
                Buyout boards often end up as the CEO, the CFO and two people from the fund, which leaves gaps in sector depth, technology, audit and people leadership. Mapping the skills the next three years need against the directors you have shows whether to recruit an independent, invite a specialist to committee, or simply bring in outside expertise for particular meetings.

                ## Milestones
                1. The skills the plan needs over the hold listed, eight at most.
                2. Each director scored against those skills.
                3. The two largest gaps named with options for filling each.
                4. A recommendation discussed with the chair and your partner.

                ## Notes
                Start from the **Skills matrix** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A skills map scoring each director against up to eight needed skills, with the two largest gaps and a recommendation recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the skills the value creation plan needs from the board"
                - "Score each director against those skills"
                - "Name the two largest gaps and options for each"
                - "Discuss the recommendation with the chair"
            - name: Information flow rules for an investor director
              description: |-
                ## Purpose
                Sitting on the board and on the fund's deal team means you hear things in both rooms, and not everything said in one can go to the other. Writing down what you may share with the fund, what stays in the boardroom, how you handle inside information if the company has listed debt, and where board papers are stored keeps you clear of a breach and the company comfortable talking openly.

                ## Milestones
                1. The confidentiality and information rights clauses that govern sharing identified.
                2. A short note of what may be shared with the fund and in what form.
                3. Rules agreed for handling price-sensitive information and other portfolio companies.
                4. Board papers stored only in the approved location, with old copies removed from email.

                ## Notes
                Ask your compliance team and company counsel to confirm the rules once. Revisit them if the company issues bonds or starts a sale.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written note of information sharing rules between board and fund has been checked by compliance and is followed for every pack."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the confidentiality and information rights clauses"
                - "Draft what may pass from board to fund and in what form"
                - "Ask compliance to confirm the rules in writing"
                - "Move board papers out of email into the approved folder"
            - name: Board pack reading routine
              description: |-
                ## Purpose
                Skimming the pack in the car to the meeting is how investor directors end up asking questions page four already answered. A fixed three-hour slot within two days of receipt, a habit of reading the summary and the cash section first and a list of no more than five questions turns each pack into a short, sharp agenda for the discussion.

                ## Milestones
                1. A reading slot booked within two days of every pack's delivery date.
                2. A consistent order of reading: summary, cash, KPIs, decisions, then the rest.
                3. Five questions or fewer written before each meeting.
                4. Questions that management can answer in writing sent ahead of the meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six consecutive meetings, the pack was read in a booked slot and a written list of five or fewer questions existed beforehand."
                cadence: rolling
              tasks:
                - "Block three hours to read the board pack after it arrives @recurring(monthly:20)"
                - "Read the summary and cash pages before anything else"
                - "Write your top five questions for the meeting @recurring(monthly:21)"
                - "Send factual questions to the CFO ahead of the meeting"
            - name: Pre-board call with the CEO
              description: |-
                ## Purpose
                Surprises in the boardroom damage trust in both directions: the CEO feels ambushed and the board feels managed. A thirty-minute call a few days before each meeting to preview the hard topics, hear what the CEO wants from the board and flag your own concerns means the meeting itself can spend its time on decisions.

                ## Milestones
                1. A standing thirty-minute call booked before each board meeting.
                2. The CEO asked each time what they need the board to decide or advise on.
                3. Your main concerns flagged privately before they are raised in the room.
                4. A two-line note kept of what was previewed, for your own record.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pre-board call with the CEO has taken place before each of the last four board meetings, with a short note of topics previewed."
                cadence: rolling
              tasks:
                - "Book a standing thirty-minute pre-board call with the CEO"
                - "Hold the pre-board call and note the hard topics @recurring(monthly:22)"
                - "Ask the CEO what the board should decide this time"
                - "Tell the chair which concerns you raised in advance"
            - name: Board minutes and action log follow-up
              description: |-
                ## Purpose
                Minutes are the company's legal record of what the board decided and considered, and an action log is the only way to know whether last month's requests happened. Checking draft minutes within a week, making sure decisions and the reasons for them are recorded, and keeping an action log with owners and dates stops the same issue returning meeting after meeting.

                ## Milestones
                1. Draft minutes reviewed and returned with comments within a week of each meeting.
                2. Every decision recorded with the reasons and any conflicts declared.
                3. An action log with owner and due meeting for every request.
                4. Open actions reviewed as the first item of each meeting.

                ## Notes
                Start from the **Meeting notes** template for your own notes, but treat the company secretary's minutes as the record. Minutes should show the board considered the issue, not transcribe the debate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For each board meeting this year, minutes were reviewed within a week and every action has an owner and a target meeting in the log."
                cadence: rolling
              tasks:
                - "Ask the company secretary to send draft minutes within five days"
                - "Review draft minutes and the action log after each meeting @recurring(monthly:27)"
                - "Check each decision records the reasons the board relied on"
                - "Put open actions as the first agenda item"
            - name: Monthly CEO one-on-one outside the boardroom
              description: |-
                ## Purpose
                CEOs who only meet the investor director in front of the whole board will tell you what the board wants to hear. A monthly hour away from the pack, about the CEO's own priorities, their team and what keeps them awake, builds the relationship that makes the hard conversations possible when they come.

                ## Milestones
                1. A monthly hour in the diary, separate from board preparation.
                2. A running note of the CEO's priorities, worries and requests for help.
                3. Help you promised tracked and delivered or explicitly dropped.
                4. The CEO's view of the relationship asked for directly every six months.

                ## Notes
                Start from the **1:1** template. Keep it a conversation, not a second board meeting: no slides.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten of the last twelve months show a CEO one-on-one held, with a running note of priorities and help delivered."
                cadence: rolling
              tasks:
                - "Book a monthly hour with the CEO with no board papers"
                - "Hold the CEO one-on-one and update the running note @recurring(monthly:8)"
                - "Track each piece of help you offered until it is done"
                - "Ask the CEO how the relationship could work better"
            - name: Quarterly focus session rotation
              description: |-
                ## Purpose
                Routine meetings drift into reviewing last month's numbers, and the board never spends an hour on pricing, the sales engine, technology or talent. Rotating one focus topic per quarter, led by the executive who owns it, gives the board real understanding of the business and gives the next layer of management time in front of the board.

                ## Milestones
                1. Four focus topics chosen for the year, linked to the value creation plan.
                2. An executive owner and a short brief agreed for each session.
                3. Sixty minutes protected on the agenda for each focus session.
                4. One decision or follow-up recorded from each session.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four focus sessions held in a year, each led by an executive and each ending with a recorded decision or follow-up."
                cadence: cyclic
              tasks:
                - "Pick four focus topics for the year with the CEO"
                - "Brief the executive leading the next focus session @recurring(quarterly)"
                - "Protect sixty minutes on the agenda for the session"
                - "Record the decision or follow-up the session produced"
            - name: Board approvals and consent tracker
              description: |-
                ## Purpose
                Approvals given by email between meetings, written resolutions and investor consents are easy to lose, and missing ones surface painfully in exit diligence. A single log of every approval, with the date, the document, who signed and where it is filed, keeps the company's governance record clean and saves weeks when a buyer's lawyers ask.

                ## Milestones
                1. A log created with date, matter, approval route, signatories and file location.
                2. Approvals from the last twelve months back-filled from minutes and email.
                3. Any approval missing a signed record fixed by ratification at the next meeting.
                4. The log checked against the delegated authority matrix each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An approvals log covering the last twelve months is complete, and any unratified approval has been ratified at a board meeting."
                cadence: rolling
              tasks:
                - "Set up the approvals log with the company secretary"
                - "Back-fill approvals from the last twelve months of minutes"
                - "Check new approvals against the authority matrix @recurring(monthly:3)"
                - "List any approvals that need ratifying at the next meeting"
            - name: Board readout to the deal team
              description: |-
                ## Purpose
                Partners who do not sit on the board still carry the investment, and they learn about problems from the quarterly valuation if nobody tells them sooner. A one-page readout within two days of each meeting (what was decided, what changed, what worries you) keeps the fund side informed within the information rules you agreed.

                ## Milestones
                1. A one-page readout format agreed with your partner.
                2. A readout sent within two days of every board meeting.
                3. Concerns stated plainly with what you are doing about them.
                4. Readouts filed in the deal folder as a history of the hold.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-page readout has gone to the deal team within two days of each of the last four board meetings."
                cadence: rolling
              tasks:
                - "Agree a one-page readout format with your partner"
                - "Send the board readout to the deal team @recurring(monthly:24)"
                - "Name your top concern and the action you are taking"
                - "File each readout in the deal folder"
            - name: Conflicts and related-party register upkeep
              description: |-
                ## Purpose
                Investor directors collect conflicts quickly: fees charged to the company, other portfolio companies as suppliers or customers, co-investors, management loans. Keeping the company's register current and checking each board agenda against it means conflicts are declared before the item is discussed, which is what counsel and future buyers will look for.

                ## Milestones
                1. The company's conflicts and related-party register reviewed for completeness.
                2. Every fund relationship with the company (fees, other portfolio links) listed.
                3. Each agenda checked against the register before the meeting.
                4. Declarations recorded in the minutes whenever an item touches a conflict.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The conflicts register is reviewed each quarter and every board meeting this year shows conflicts declared where an item touched one."
                cadence: rolling
              tasks:
                - "Ask the company secretary for the current conflicts register"
                - "List every fund and portfolio link with the company"
                - "Review the conflicts register against upcoming agendas @recurring(quarterly)"
                - "Check the minutes record each declaration made"
            - name: Audit and remuneration committee rhythm
              description: |-
                ## Purpose
                Committees exist so the full board does not spend its time on audit scope or salary bands, but only if they meet on a rhythm and report back properly. Setting terms of reference, a yearly plan and a short written report to the board after each committee makes the audit and remuneration work visible and gives auditors a proper counterpart.

                ## Milestones
                1. Terms of reference for each committee approved by the board.
                2. A yearly committee plan tied to audit timing and pay review dates.
                3. A short written committee report to the next board after each meeting.
                4. Auditors met by the audit committee without management at least once a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Both committees have approved terms of reference and a yearly plan, and each committee meeting this year produced a written report to the board."
                cadence: cyclic
              tasks:
                - "Check whether each committee has approved terms of reference"
                - "Draft a yearly committee plan around audit and pay dates"
                - "Prepare the committee report for the next board meeting @recurring(quarterly)"
                - "Book a session with the auditors without management present"
            - name: Annual board effectiveness review
              description: |-
                ## Purpose
                Boards rarely ask whether they are any good, and portfolio boards almost never. A short yearly questionnaire to every director and the leadership team about preparation, discussion quality, use of time and the relationship with management, followed by three agreed changes, keeps the board improving across a five-year hold.

                ## Milestones
                1. A ten-question survey sent to directors, observers and senior executives.
                2. Responses summarised without attributing comments to individuals.
                3. Three changes agreed by the board from the results.
                4. Progress on last year's changes reported in the next review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly effectiveness survey has been run, results summarised anonymously and three changes recorded in the board minutes."
                cadence: cyclic
              tasks:
                - "Draft ten survey questions on preparation and discussion quality"
                - "Run the board effectiveness survey and summarise results @recurring(yearly)"
                - "Agree three changes at the next board meeting"
                - "Report on last year's changes before the new survey"
            - name: Reading management accounts like a director
              description: |-
                ## Purpose
                Deal professionals read models fluently but management accounts less so: accrual reversals, one-off items, deferred revenue and cash movements hide in the detail. Practising on three months of real packs (reconciling profit to cash, spotting changes in accounting treatment, checking the balance sheet against prior months) turns the finance section into something you test rather than trust.

                ## Milestones
                1. Profit reconciled to operating cash flow for three monthly packs.
                2. Balance sheet movements over a threshold explained for each month.
                3. Any change in accounting treatment noted and explained by the CFO.
                4. A personal checklist of ten questions for every finance section.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three monthly packs reconciled from profit to cash, with a personal ten-question finance checklist written from the exercise."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Take the last three management packs and reconcile profit to cash"
                - "List balance sheet movements above your threshold"
                - "Ask the CFO to explain each change in accounting treatment"
                - "Write your ten-question finance checklist"
            - name: Asking better board questions
              description: |-
                ## Purpose
                Too many investor questions show off the model, interrogate detail management should own, or arrive as statements with a question mark. Practising open questions, follow-ups that test evidence and questions about what management would do differently produces discussions that improve decisions, and a CEO who stops dreading the meeting.

                ## Milestones
                1. Your questions from the last two meetings reviewed and sorted by type.
                2. A short bank of open and follow-up questions written for recurring topics.
                3. One meeting where you asked only open questions, with the result noted.
                4. Feedback asked from the chair on your contribution.

                ## Notes
                A useful test: would the answer change a decision? If not, ask it outside the meeting.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A question bank for recurring board topics exists and the chair has given feedback on your questions after a meeting."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Sort your questions from the last two meetings by type"
                - "Write open questions for pricing, hiring and cash topics"
                - "Ask only open questions in one meeting and note the effect"
                - "Ask the chair for feedback on your questions"
            - name: Challenging a budget without rewriting it
              description: |-
                ## Purpose
                The budget is management's commitment, and a board that rewrites it removes the ownership it needs from the people who must deliver it. Learning to test assumptions (price, volume, hiring timing, cash conversion) against history and the investment case, and to ask for a downside, lets you push hard while leaving the numbers management's own.

                ## Milestones
                1. Each major budget assumption compared with the last three years of actuals.
                2. Gaps between the budget and the investment case listed and explained.
                3. A downside case requested and its cash consequences understood.
                4. Your challenges written as questions to the CEO and CFO before the budget meeting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Before the budget meeting, a written list of assumption challenges and a downside case request has gone to the CEO and CFO."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare each budget assumption with three years of actuals"
                - "List differences between the budget and the investment case"
                - "Request a downside case with cash and covenant impact"
                - "Send your challenges as questions before the budget meeting"
            - name: Solvency and going concern awareness for directors
              description: |-
                ## Purpose
                When a geared company starts to struggle, directors' duties in many jurisdictions shift towards creditors, and decisions that were routine become risky for the individuals who take them. Understanding the warning signs, what counsel will want to see recorded and when to bring in restructuring advice, before it is needed, means you act early rather than learning the rules in a crisis.

                ## Milestones
                1. A briefing from counsel on how duties change near insolvency in the company's jurisdiction.
                2. The warning signs that should trigger advice written in a short list.
                3. An understanding of how the board should record its reasoning in a stressed period.
                4. The name of a restructuring adviser your firm would call, noted in advance.

                ## Notes
                Organisational preparation only. Any live solvency question goes straight to company counsel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note of counsel's briefing on duties near insolvency and a written list of warning signs that trigger advice are in your board file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask counsel for a short briefing on duties near insolvency"
                - "Write the warning signs that would make you call for advice"
                - "Note how the board should minute decisions in a stressed period"
                - "Ask your partner which restructuring adviser the firm uses"
            - name: Chairing a portfolio board meeting
              description: |-
                ## Purpose
                Chairing is often handed to an investor director until an independent arrives, and it is a different job from contributing. Learning to run time against the agenda, draw out quieter directors, close each item with a clear decision and keep the CEO's voice central makes meetings shorter and decisions clearer.

                ## Milestones
                1. Timings set for each agenda item and kept within ten minutes overall.
                2. Each item closed with a stated decision, action or note that no decision was needed.
                3. Every director invited to speak on the main decision items.
                4. A short self-review written after each of your first three chaired meetings.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three chaired meetings finished within ten minutes of the planned time, each with a written self-review of what to change."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Put timings beside every item on the next agenda"
                - "Close each item by stating the decision aloud"
                - "Invite each director to speak on the main decision"
                - "Write a self-review within a day of chairing"
            - name: Board-level risk oversight
              description: |-
                ## Purpose
                Risk registers in portfolio companies are often a spreadsheet the CFO updates for the auditors and nobody reads. Learning what a board should actually ask of risk (the top ten, who owns each, the appetite for each, the leading indicators) and reviewing the register quarterly turns it into a tool for deciding where management attention goes.

                ## Milestones
                1. The company's current risk register read and the top ten risks agreed.
                2. An owner and a leading indicator named for each top risk.
                3. A statement of risk appetite for the main categories discussed at board.
                4. Risk reviewed at board each quarter, with changes recorded.

                ## Notes
                Start from the **Risk register** template if the company has no usable one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A top ten risk list with owners and indicators is agreed and has been reviewed at board in each quarter of the year."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the current risk register and mark the ten that matter"
                - "Agree an owner and indicator for each top risk"
                - "Draft a short risk appetite statement for discussion"
                - "Check the top risks are on the board agenda @recurring(quarterly)"
            - name: Giving a CEO hard feedback well
              description: |-
                ## Purpose
                Someone has to tell a CEO that a hire failed, a forecast lost credibility or the board is losing patience, and it is usually the investor director. Practising specific, evidence-based feedback, delivered privately and early with a clear request, protects the relationship while making sure the message actually lands.

                ## Milestones
                1. One piece of feedback prepared with the evidence, the impact and the request.
                2. The feedback delivered privately within a week of the issue.
                3. The CEO's response and agreed next step written down.
                4. A follow-up check booked to see whether anything changed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One piece of hard feedback has been prepared in writing, delivered privately and followed up within a month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the evidence, impact and request for one issue"
                - "Deliver the feedback privately within a week"
                - "Note the CEO's response and agreed next step"
                - "Book a follow-up check in the diary"
            - name: Fixing a late or bloated board pack
              description: |-
                ## Purpose
                Packs that keep arriving late or run past 120 pages even after a standard is agreed usually have an upstream cause: month-end closing slowly, too many contributors, or a CEO who uses length as cover. Diagnosing the cause with the CFO and fixing it (an earlier close, a pack owner, a single editor, ruthless appendices) restores preparation time for every director.

                ## Milestones
                1. The last three packs measured for delivery date and length.
                2. The main cause agreed with the CFO, in writing.
                3. One owner named to edit and deliver the pack.
                4. Two consecutive packs delivered on time and within the page limit.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two consecutive board packs delivered by the agreed deadline and within the agreed page limit."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record delivery dates and page counts for the last three packs"
                - "Agree the main cause of delay with the CFO"
                - "Name a single pack owner and editor"
                - "Move supporting detail into appendices"
            - name: Appointing an independent chair
              description: |-
                ## Purpose
                Many sponsors bring in an independent chair, often an experienced operator from the sector, to steady the CEO relationship and add judgement the fund cannot. Defining the role, the time commitment and the fee, then running a proper search with the CEO involved, gives you a chair who fits rather than a friend of the fund.

                ## Milestones
                1. A role brief with expected days per month, committee duties and fee range.
                2. A longlist from the firm's network and one search firm, if used.
                3. Three candidates interviewed by the CEO and two directors.
                4. An appointment approved by the board and announced to the leadership team.

                ## Notes
                Agree with the CEO early that they will meet every finalist. A chair the CEO did not choose rarely becomes a confidant.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An independent chair appointed by board resolution after interviews with at least three candidates, including meetings with the CEO."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write a chair role brief with days, duties and fee range"
                - "Build a longlist from the firm's operator network"
                - "Arrange CEO meetings with each finalist"
                - "Table the appointment for board approval"
            - name: Adding an independent non-executive director
              description: |-
                ## Purpose
                Gaps in technology, regulation or a new market are often better filled by one independent director than by advisers who appear once a year. Deciding whether the gap justifies a seat, and what success looks like after a year, keeps the board small and every seat earning its place.

                ## Milestones
                1. The gap the seat would fill tied to a specific part of the value creation plan.
                2. Options compared: a board seat, a committee role, or an adviser on retainer.
                3. A decision recorded with the fee and the term.
                4. Objectives for the first year agreed with the new director, if appointed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on whether to add an independent director, with the gap, the options considered and first-year objectives if appointed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Link the skills gap to a part of the value creation plan"
                - "Compare a seat, a committee role and an adviser option"
                - "Record the decision with fee and term"
                - "Agree first-year objectives with the appointee"
            - name: Decision paper standard for board approvals
              description: |-
                ## Purpose
                Approval requests buried in a CEO letter (a new site, a price rise, a large contract) are hard to decide and harder to defend later. A two-page decision paper format stating the request, options considered, money involved, risks and the recommendation makes approvals faster and leaves a clear record of what the board relied on.

                ## Milestones
                1. A two-page decision paper template agreed with the CEO and CFO.
                2. Every matter needing approval presented in that format.
                3. Each paper states options considered and the money at stake.
                4. Approved papers filed with the minutes and the approvals log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page decision paper template is in use and every approval at the last three meetings was supported by one."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a two-page decision paper template"
                - "Agree the template with the CEO and CFO"
                - "Ask management to use it for every approval item"
                - "File approved papers with the minutes"
            - name: Shifting board time from reporting to strategy
              description: |-
                ## Purpose
                If the board spends ninety minutes walking through last month's results, it has little time left for the questions that move the investment. Measuring how the last few meetings used their time, then moving reporting into the pack and taken as read, frees an hour for strategy, people and capital decisions.

                ## Milestones
                1. Time spent on reporting, decisions and strategy measured across three meetings.
                2. A rule agreed that the pack is taken as read.
                3. At least half of meeting time given to decisions and strategy.
                4. The new split checked again after three further meetings.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three consecutive board meetings spent at least half their time on decisions and strategy, measured against the agenda."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Estimate how the last three meetings split their time"
                - "Agree with the chair that the pack is taken as read"
                - "Restructure the agenda with strategy items first"
                - "Measure the split again after three meetings"
            - name: Board portal and document security choice
              description: |-
                ## Purpose
                Board packs sent as email attachments end up on personal devices, forwarded and impossible to recall. Choosing a board portal or secure shared space, with access controls, version history and a retention rule, protects sensitive material and makes it easy to produce the governance record at exit.

                ## Milestones
                1. Requirements listed: access control, offline reading, annotation, retention, cost.
                2. Two or three options compared, including the company's existing tools.
                3. A choice made with the CFO and company secretary.
                4. All directors using the portal and email circulation of packs stopped.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board portal or secure space is chosen, all directors use it and the last pack was not sent by email."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List requirements for storing and sharing board papers"
                - "Compare two or three options including existing tools"
                - "Agree the choice with the CFO and company secretary"
                - "Move the next pack onto the portal"
            - name: CEO objectives and annual performance review
              description: |-
                ## Purpose
                Most portfolio CEOs are reviewed informally by whoever they talk to most at the fund, which leaves them unsure what the board wants. A yearly review against five agreed objectives, with input from every director and a written outcome, gives the CEO clarity and gives the board a record if the relationship later changes.

                ## Milestones
                1. Five objectives for the year agreed with the CEO and approved by the board.
                2. Input collected from every director before the review.
                3. A written review shared with the CEO and discussed in person.
                4. Next year's objectives agreed in the same conversation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written annual CEO review against five board-approved objectives has been delivered, with next year's objectives agreed."
                cadence: cyclic
              tasks:
                - "Agree five objectives for the year with the CEO"
                - "Collect director input for the CEO review @recurring(yearly)"
                - "Write the review and discuss it in person"
                - "Agree next year's objectives in the same meeting"
            - name: First board meeting after closing
              description: |-
                ## Purpose
                The first meeting sets the tone for the hold: whether the board is a partner or an audience, and whether management sees governance as help or overhead. Planning it carefully (formal appointments, adopting the matrix and calendar, introducing the KPI page, and leaving real time for the CEO's view of the first months) gives everyone the same starting point.

                ## Milestones
                1. Formal appointments, bank mandates and committee memberships approved.
                2. The authority matrix, board calendar and pack standard tabled.
                3. The CEO's view of the business presented in their own words.
                4. An action log started and sent out within two days.

                ## Notes
                Start from the **Board meeting** template. Keep the deal team's victory lap short; the CEO should do most of the talking.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first post-closing board meeting held with appointments approved, governance documents tabled and an action log circulated within two days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the first meeting agenda with the chair and CEO"
                - "Ask counsel for the formal appointment resolutions"
                - "Give the CEO a protected slot for their view of the business"
                - "Send the action log within two days of the meeting"
            - name: Annual strategy day with the board
              description: |-
                ## Purpose
                Once a year, a day away from routine business, with management presenting their view of the market, the plan and the risks, is where boards decide what to change rather than what to note. Preparing questions, pre-reading and a short list of decisions to leave with makes the day more than a pleasant dinner.

                ## Milestones
                1. A date, venue and agenda agreed six weeks ahead.
                2. Pre-reading sent a week before, under thirty pages.
                3. Three strategic questions the day must answer agreed with the CEO.
                4. A written note of decisions and owners sent within a week.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A board strategy day held with pre-reading circulated, three agreed questions addressed and a decisions note sent within a week."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree the date and three strategic questions with the CEO"
                - "Book a venue away from the office"
                - "Ask management for pre-reading under thirty pages"
                - "Send the decisions note within a week"
            - name: Budget approval meeting
              description: |-
                ## Purpose
                Numbers fixed at the budget meeting are the ones management bonuses, lender forecasts and fund valuations will be measured against for a year. Preparing for it, with the challenges sent early, the downside case understood and the link to the value creation plan clear, means the board approves a budget it believes rather than one it tolerates.

                ## Milestones
                1. A draft budget received at least two weeks before the meeting.
                2. Your written challenges answered by management before the meeting.
                3. The budget reconciled to the value creation plan and the lender forecast.
                4. The approved budget minuted with any conditions.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The annual budget approved at a board meeting, with written challenges answered beforehand and the approval minuted."
                cadence: cyclic
              tasks:
                - "Ask the CFO for the draft budget two weeks before the meeting"
                - "Check the budget against the value creation plan"
                - "Confirm the budget fits the lender forecast and covenants"
                - "Check the approval and any conditions are minuted"
            - name: Year-end audit and accounts sign-off
              description: |-
                ## Purpose
                Approving the annual accounts is one of the few things directors personally sign, and auditors' findings often reveal more about finance controls than any monthly pack. Reading the audit findings, meeting the auditors and checking management's responses before the accounts are approved gives the board an honest view of its finance function.

                ## Milestones
                1. The audit plan and timetable agreed early in the year.
                2. The auditors' findings and management letter read before sign-off.
                3. Management's responses to each finding recorded with owners and dates.
                4. Accounts approved and signed by the deadline, with representations understood.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The annual accounts approved by the deadline, with every audit finding carrying a management response, owner and date."
                cadence: cyclic
              tasks:
                - "Ask the CFO for the audit plan and timetable"
                - "Read the auditors' findings and management letter"
                - "Check each finding has a response, owner and date"
                - "Understand the representation letter before approving the accounts"
            - name: Approving a major contract or capital project
              description: |-
                ## Purpose
                Large customer contracts, new sites or systems replacements can carry more risk than a year of trading. Treating the approval as a small investment decision (the case, the options, the downside, the exit if it goes wrong) and checking it against the lender's documents protects the company and gives management a clear answer.

                ## Milestones
                1. A decision paper received with the business case and options.
                2. Key terms reviewed: liability caps, termination, change of control.
                3. Lender consent needs checked against the facility agreement.
                4. A decision minuted with conditions and a post-completion review date.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The approval is minuted with the decision paper, any lender consent confirmed and a post-completion review date set."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask management for a decision paper with options"
                - "Check liability, termination and change of control terms"
                - "Confirm with the CFO whether lender consent is needed"
                - "Set a date to review the project after completion"
            - name: Handover when leaving a board seat
              description: |-
                ## Purpose
                Investor directors move funds, get promoted or rotate seats, and an unplanned exit leaves the replacement guessing about history, relationships and live issues. A written handover, an introduction meeting with the CEO and a formal resignation and appointment protect the company's governance and the fund's relationship.

                ## Milestones
                1. A handover note covering history, open issues, relationships and approvals.
                2. Your successor introduced to the CEO, chair and CFO in person.
                3. Formal resignation and appointment filed by the company secretary.
                4. Board papers and access removed from your devices and accounts.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written handover note delivered, successor introduced to the CEO and formal resignation filed within thirty days."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a handover note with history and open issues"
                - "Introduce your successor to the CEO, chair and CFO"
                - "Ask the company secretary to file the resignation and appointment"
                - "Remove board papers and portal access from your devices"
            - name: Stepping in when results miss plan
              description: |-
                ## Purpose
                Two quarters behind plan is where boards most often wait too long, hoping the next month recovers. Agreeing in advance what triggers board involvement (size of miss, cash, covenant, key loss) and what stepping in means (more frequent meetings, an outside review, a revised plan) lets you act firmly without panicking or undermining the CEO.

                ## Milestones
                1. Written triggers agreed for when the board moves from oversight to intervention.
                2. A diagnosis of the miss from management, separating market, execution and plan errors.
                3. A recovery plan with milestones approved by the board.
                4. A meeting rhythm for the recovery period agreed, with a date to step back.

                ## Notes
                The aim is to change the cadence and quality of oversight, not to run the business. If you find yourself managing the sales team, something has gone wrong.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Intervention triggers are written and agreed, and any miss beyond them led to a board-approved recovery plan within six weeks."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Draft triggers for board intervention with your partner"
                - "Ask management to diagnose the miss in writing"
                - "Agree a recovery plan with milestones at board"
                - "Set the meeting rhythm and a date to step back"
            - name: Replacing a CEO through the board
              description: |-
                ## Purpose
                Changing a portfolio CEO is among the highest-stakes decisions a board makes, and it fails most often through poor process: leaks, unclear grounds, a vacuum while the search runs. Running it deliberately, with counsel involved early, an interim plan, a search brief and communications prepared, protects the company, the employees and the individual leaving.

                ## Milestones
                1. The case for change recorded with evidence against the CEO's objectives.
                2. Employment counsel's advice on process and contract terms received.
                3. An interim leadership plan and a search brief agreed by the board.
                4. Communications to staff, customers and lenders drafted and timed.
                5. A new CEO appointed and an onboarding plan in place.

                ## Notes
                Keep the circle small and the record clean. Employment terms and leaver provisions are for counsel, not for the board to interpret.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A board-minuted decision with counsel's advice on file, an interim plan in place and a new CEO appointed within the search timetable."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the case for change against the CEO's objectives"
                - "Brief employment counsel before any conversation"
                - "Agree an interim leadership plan and search brief"
                - "Draft communications for staff, customers and lenders"
            - name: Board work in a founder-led company after a buyout
              description: |-
                ## Purpose
                Founders who sold a majority stake but stayed as CEO have never reported to a board, and often read every question as distrust. Explaining what the board is for, agreeing the information it needs and how decisions will be made, and giving the founder early wins in the boardroom builds a governance habit without breaking the person the deal relied on.

                ## Milestones
                1. A conversation held with the founder on how the board will work and why.
                2. The first three meetings kept short and focused on a few decisions.
                3. A finance lead strengthened or hired so the founder is not writing the pack.
                4. The founder's view of the board asked after six months.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "After six months, the founder has given direct feedback on the board and packs arrive on time without the founder writing them."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Explain to the founder how the board will work and why"
                - "Keep the first three agendas to a few decisions"
                - "Agree with the founder who will prepare the board pack"
                - "Ask the founder for feedback on the board after six months"
            - name: Holding a minority investor board seat
              description: |-
                ## Purpose
                With a minority stake, your influence comes from consent rights, information rights and the quality of your contribution, not from votes. Knowing exactly which rights you hold, using them sparingly and building a relationship with the controlling shareholder lets you protect the investment without becoming the obstacle every agenda routes around.

                ## Milestones
                1. Your consent and information rights summarised with clause references.
                2. The controlling shareholder's priorities understood from a direct conversation.
                3. Rights you would actually use listed against realistic scenarios.
                4. One instance of a consent request handled promptly and on record.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A clause-referenced summary of minority rights exists and every consent request in the year was answered within the agreed period."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Summarise your consent and information rights with clause numbers"
                - "Meet the controlling shareholder to hear their priorities"
                - "List the scenarios in which you would use each right"
                - "Agree a turnaround time for consent requests"
            - name: Managing several portfolio boards at once
              description: |-
                ## Purpose
                Four board seats and two live deals leave a vice president less time per company than any single CEO assumes. Mapping the time each seat needs, staggering meetings across the month and agreeing with your partner which company gets more attention this quarter keeps you prepared for every meeting instead of good at one.

                ## Milestones
                1. Every board and committee date for all seats on one calendar.
                2. Hours per month estimated for each seat and checked against your capacity.
                3. Meetings staggered so no two packs land in the same week where possible.
                4. Attention priorities for the quarter agreed with your partner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All board dates sit on one calendar with hours per seat estimated, and quarterly priorities across seats are agreed with your partner."
                cadence: rolling
              tasks:
                - "Put every board and committee date on one calendar"
                - "Estimate monthly hours for each seat"
                - "Ask company secretaries to stagger clashing meetings"
                - "Agree quarterly attention priorities across seats @recurring(quarterly)"
            - name: First board seat as a junior investor
              description: |-
                ## Purpose
                An associate or vice president taking a first seat, or sitting as an observer, has to learn the room while the partner is still watching. Clarifying the role, preparing more than seems necessary and agreeing with the partner when to speak and when to raise points afterwards builds credibility with management and the fund at the same time.

                ## Milestones
                1. The role (director or observer) and its limits confirmed with your partner.
                2. Two meetings attended with written preparation notes for each.
                3. One agenda item led by you, agreed in advance.
                4. Feedback from your partner and the CEO received after three meetings.

                ## Notes
                Observers usually have no vote and may be asked to leave for some items. Ask the partner which items those are before the meeting.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "After three meetings, you have led one agenda item and received written or spoken feedback from both your partner and the CEO."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Confirm with your partner whether you are director or observer"
                - "Write preparation notes before each of your first meetings"
                - "Agree one agenda item you will lead"
                - "Ask your partner and the CEO for feedback after three meetings"
            - name: Board conduct during a lender waiver or reset
              description: |-
                ## Purpose
                Covenants close to breach bring lenders asking for information fast, and the board's process comes under scrutiny. Agreeing who speaks to lenders, how the board reviews every submission, what counsel needs to see minuted and how the equity's position is kept separate from the company's keeps the board orderly through a waiver or reset.

                ## Milestones
                1. One spokesperson for lender communication agreed by the board.
                2. Every lender submission reviewed by the board or a committee before it is sent.
                3. Counsel's guidance on board process and minuting received.
                4. Fund-level discussions about new equity kept separate from company board meetings.

                ## Notes
                The fund and the company may want different things in a waiver. Counsel will help the board keep the two positions apart.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "During the waiver, every lender submission was board-reviewed, counsel's process guidance is on file and the outcome is minuted."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree a single spokesperson for lender communication"
                - "Set up a committee to review lender submissions quickly"
                - "Ask counsel for guidance on board process and minuting"
                - "Keep fund equity discussions out of company board meetings"
            - name: Crisis board protocol for serious incidents
              description: |-
                ## Purpose
                Cyber attacks, serious safety incidents and discovered frauds give the board hours, not weeks, and boards that improvise lose time on who calls whom. A one-page protocol naming who convenes the board, the advisers on call, the decision rights in the first day and the communication rules lets the board act quickly and leaves a defensible record.

                ## Milestones
                1. A one-page protocol listing triggers, who convenes the board and how fast.
                2. Contacts for counsel, insurers, forensic and communications advisers confirmed.
                3. Decision rights for the first twenty-four hours agreed.
                4. The protocol tested once in a short tabletop exercise with management.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board-approved one-page crisis protocol with confirmed adviser contacts has been tested in a tabletop exercise."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a one-page crisis protocol with triggers and contacts"
                - "Confirm insurer notification requirements with the broker"
                - "Agree first-day decision rights with the CEO and chair"
                - "Run a one-hour tabletop exercise with management"
            - name: Whistleblowing and investigation oversight
              description: |-
                ## Purpose
                When a complaint about a senior executive or finance practices reaches the board, investor directors often want to fix it quickly and informally, which is exactly what makes it worse. Making sure the company has a working reporting channel, and that the board knows how it would oversee an independent investigation, protects the people who speak up and the company's value.

                ## Milestones
                1. The company's whistleblowing channel tested and its reporting route to the board confirmed.
                2. A board member or committee named to receive serious reports.
                3. A process agreed for appointing independent investigators when needed.
                4. Reports and outcomes reviewed by the audit committee each year.

                ## Notes
                Never investigate yourself. The board's role is to make sure an independent investigation happens and is acted on, with counsel guiding it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested reporting channel, a named board recipient and an agreed investigation process are recorded in the audit committee papers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the CFO how the whistleblowing channel reaches the board"
                - "Name the director or committee who receives serious reports"
                - "Agree with counsel how independent investigators are appointed"
                - "Add a yearly review of reports to the audit committee plan"
            - name: Personal board practice playbook
              description: |-
                ## Purpose
                After a few seats, experienced investor directors have hard-won rules: what to ask in the first meeting, when to escalate, how to handle a difficult chair. Writing them into a short personal playbook, and asking the agent to turn your past board readouts into a list of lessons, keeps your practice improving and gives junior colleagues something better than anecdotes.

                ## Milestones
                1. Lessons from past seats collected from readouts and notes.
                2. A playbook of no more than ten pages covering preparation, meetings, relationships and escalation.
                3. The playbook reviewed by a partner or experienced chair.
                4. A yearly update made after reviewing the year's board work.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A personal board playbook of ten pages or fewer exists, has been reviewed by a senior colleague and carries a dated yearly update."
                cadence: cyclic
              tasks:
                - "Ask the agent to summarise lessons from your past board readouts"
                - "Write the playbook sections on preparation and escalation"
                - "Ask an experienced chair to review the draft"
                - "Update the playbook with the year's lessons @recurring(yearly)"
---

# Portfolio Company Board Work

This area is for the deal professional who takes a seat on a portfolio company board and has to be useful in the room without running the business from it. It starts with the foundations (the articles and shareholders' agreement, your duties as a nominee, insurance, the approvals matrix, the board calendar, the pack and the KPI set), then the routines around each meeting, the director skills that make your questions worth answering, decisions about the chair, independents and the shape of the agenda, the dated moments such as the first meeting, the budget, the audit and your handover, the situations that test a board (missed plans, a CEO change, founders, minority seats, lender waivers) and finally crisis protocols and your own board playbook.

What repeats is the read of each board pack, a pre-board call with the CEO, a monthly one-on-one outside the boardroom, the action log and approvals log after every meeting, a readout to your deal team, quarterly committee and focus sessions, and yearly reviews of conflicts, insurance, board effectiveness and the CEO's objectives. The Board meeting, Skills matrix, Meeting notes, 1:1, Risk register and Purchase decision templates pair with the projects that name them. Duties, conflicts and insolvency questions are for company counsel, so this area prepares you to ask them well rather than answering them for you. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
