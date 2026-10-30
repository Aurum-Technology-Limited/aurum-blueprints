---
id: fundraising-investors.shareholder-agm-preparation
name: Shareholder AGM Preparation
description: "Shareholder meetings run to the rules: AGM obligations, notices, proxies and resolutions, routines for filings and registers, and plans for votes on deals, pay and new articles."
category: business
version: 1.0.0
tags: [fundraising-investors, shareholder-agm-preparation, founder, manager, enterprise, company-secretarial, proxy-voting, resolutions]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - meeting-notes
    - vendor
    - purchase-decision
    - operational-checklist
    - risk-register
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Shareholder AGM Preparation
          description: "Preparing annual general meetings and shareholder votes, from notices and proxies to resolutions and minutes."
          projects:
            - name: Annual general meeting obligation check
              description: |-
                ## Purpose
                Whether the company must hold an AGM at all depends on the law where it is incorporated, its articles and any shareholders' agreement, and the answers differ more than founders expect. Some private companies need not hold one unless their articles say so, while public and listed companies almost always must. Settling the question in writing, with counsel, decides whether everything else in this area is a legal duty or a good habit.

                ## Milestones
                1. The country of incorporation and company type confirmed from the certificate of incorporation.
                2. The articles and shareholders' agreement checked for any clause requiring an annual meeting.
                3. Counsel's written view on whether an AGM is required, and by what date each year.
                4. A one-paragraph decision note filed: hold an AGM, use written resolutions, or both.

                ## Notes
                In the UK, for example, a private company need not hold an AGM unless its articles require one, but a public company must. Treat that as an illustration and confirm your own position with counsel.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A filed decision note, backed by counsel's written view, states whether the company must hold an AGM and the latest date each year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the certificate of incorporation and note the company type"
                - "Search the articles for every clause on annual general meetings"
                - "Check the shareholders' agreement for meeting or information obligations"
                - "Ask counsel to confirm in writing whether an AGM is required"
                - "Write and file a decision note on how shareholder approvals will be handled"
            - name: Meeting rules summary from the articles and shareholders' agreement
              description: |-
                ## Purpose
                Notice periods, quorum, who may chair, how proxies are appointed and whether the chair has a casting vote are usually set by the articles, with the shareholders' agreement layering investor rights on top. Most people preparing a meeting have never read those clauses side by side. A two-page summary with clause references means the notice, the proxy form and the chair's script all start from the same rules.

                ## Milestones
                1. Every clause on general meetings in the articles listed with its reference.
                2. Investor consent and veto matters from the shareholders' agreement added in a separate column.
                3. Default rules from company law that fill any gaps marked as such, with counsel's confirmation.
                4. The summary reviewed by counsel and stored with the AGM documents.

                ## Notes
                Where the articles and the shareholders' agreement disagree, ask counsel which prevails rather than guessing. The answer depends on the jurisdiction and the drafting.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A two-page meeting rules summary with clause references for notice, quorum, proxies, voting and chairing, reviewed by counsel."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Download the current filed articles from the company registry"
                - "List every clause on notice, quorum, proxies, voting and chairing"
                - "Add the shareholders' agreement consent matters to the summary"
                - "Send the summary to counsel for a check of gaps and conflicts"
                - "Recheck the summary against the filed articles before each AGM @recurring(yearly)"
            - name: AGM roles for secretary, counsel and registrar
              description: |-
                ## Purpose
                An AGM touches the company secretary, the CFO, counsel, the auditors, the registrar and the chair, and dropped tasks usually sit between two of them. A simple responsibility table, agreed before the first draft notice, makes one named person accountable for every document, deadline and filing.

                ## Milestones
                1. Every AGM task listed from notice drafting to post-meeting filings.
                2. One accountable owner and one reviewer named against each task.
                3. External advisers' scope and fees confirmed in writing.
                4. The table shared with everyone named and signed off by the chair or CEO.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A responsibility table naming an owner and reviewer for every AGM task, signed off by the chair or CEO."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every AGM task from first draft notice to final filing"
                - "Name an owner and a reviewer for each task"
                - "Confirm counsel's and the registrar's scope and fee in writing"
                - "Circulate the responsibility table and get the chair's sign-off"
            - name: Shareholder mailing list for meeting notices
              description: |-
                ## Purpose
                A notice that never reaches a shareholder can put the validity of the meeting in doubt, and private company registers are often full of old addresses, departed employees and holders who have changed names. Building a mailing list from the register of members, with current postal and email addresses, removes the commonest reason a meeting has to be rerun.

                ## Milestones
                1. A mailing list built from the register of members, not from the cap table spreadsheet.
                2. A current postal address, and an email where consent exists, for every registered holder.
                3. Holders with unknown addresses flagged and each tracing attempt recorded.
                4. Joint and corporate holders marked with who receives the notice.

                ## Notes
                Notice goes to the registered holder. If shares sit with a nominee, the nominee receives it, not the person behind it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every registered holder appears on the mailing list with a confirmed address, and every gap has a recorded tracing attempt."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the register of members with every holder's recorded address"
                - "Email each holder to confirm their current postal and email address"
                - "Flag holders with no working address and record each tracing attempt"
                - "Update the mailing list from changes to the register @recurring(quarterly)"
            - name: Electronic communication consents from shareholders
              description: |-
                ## Purpose
                Posting printed notices, annual reports and proxy forms to every holder is slow and expensive, and many company laws allow electronic delivery only where a shareholder has agreed or the articles permit it. Collecting and recording those consents once cuts weeks from the notice timetable and makes a fully electronic AGM possible.

                ## Milestones
                1. Counsel's confirmation of what the law and articles require for electronic notices.
                2. A consent request sent to every holder with a clear option to keep paper.
                3. Each holder's consent, refusal or silence recorded with the date.
                4. Holders who refused or did not answer marked for printed copies.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A consents record shows, for every holder, whether they receive notices electronically or on paper, with the date of their answer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask counsel what consent the law and articles need for electronic notices"
                - "Draft a short consent request with an option to keep printed copies"
                - "Send the consent request to every holder on the mailing list"
                - "Record each reply with its date beside the holder's name"
            - name: AGM date and backward timeline
              description: |-
                ## Purpose
                The meeting date is fixed by everything that must happen before it: audited accounts signed, the board approving the notice, the notice period running and proxies arriving before the cut-off. Choosing the date first and counting backwards shows within an hour whether it is realistic, and which deadline is the true bottleneck.

                ## Milestones
                1. The latest date the AGM can lawfully be held this year confirmed.
                2. A meeting date chosen that clears the accounts sign-off with margin.
                3. A dated timeline working back through notice dispatch, board approval and printing.
                4. The timeline agreed by the auditors, counsel and the registrar.

                ## Notes
                Notice periods are counted in clear days in many jurisdictions, excluding the day of sending and the day of the meeting. Ask counsel how yours is counted and add two working days for post.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated AGM timeline from accounts sign-off to meeting day, agreed in writing by the auditors, counsel and the registrar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask counsel for the latest lawful AGM date this year"
                - "Get the auditors' expected sign-off date for the accounts"
                - "Count back from the meeting date for notice, board approval and printing"
                - "Send the dated timeline to auditors, counsel and the registrar for agreement"
            - name: Ordinary business resolutions for the year
              description: |-
                ## Purpose
                Most AGMs carry the same core items: receiving the accounts, re-electing directors, reappointing the auditors and agreeing their pay, and any final dividend. Listing them early, with the board approval behind each, stops a missing auditor resolution being spotted after the notice has been posted.

                ## Milestones
                1. A draft resolutions list covering accounts, directors, auditors and dividends.
                2. Each resolution marked as ordinary or special, with its voting threshold noted.
                3. The board paper or approval behind each resolution identified.
                4. The list confirmed by counsel before the notice is drafted.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A counsel-confirmed list of this year's standing AGM resolutions, each marked with its type and the board approval behind it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the list of standing AGM resolutions from last year's notice"
                - "Mark each resolution as ordinary or special"
                - "Match every resolution to the board approval it relies on"
                - "Confirm the ordinary business list with counsel @recurring(yearly)"
            - name: Archive of past notices, minutes and vote results
              description: |-
                ## Purpose
                When an investor's lawyer asks during diligence for proof that an old share authority was approved, the answer should take minutes, not days of searching email. Pulling every past notice, minute, proxy count and filed resolution into one archive also shows which precedents to reuse this year.

                ## Milestones
                1. Every general meeting and written resolution since incorporation listed by date.
                2. The notice, minutes, vote result and filing receipt saved for each.
                3. Gaps marked and a plan agreed with counsel for any missing records.
                4. The archive stored where the company secretary and counsel can both reach it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One archive holds the notice, minutes, result and filing receipt for every shareholder decision since incorporation, with gaps listed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search email and shared drives for every past notice of general meeting"
                - "Save each meeting's minutes, results and filing receipt in one folder"
                - "List missing records and ask counsel how to remedy each"
                - "File this year's notice, minutes and results in the archive @recurring(yearly)"
            - name: In-person, hybrid or virtual meeting format decision
              description: |-
                ## Purpose
                Fully virtual meetings are permitted in some places and not others, and many articles written before 2020 assume a physical room. Deciding the format against what the articles allow, what shareholders expect and the budget avoids a notice that has to be withdrawn, or a hybrid meeting nobody at home can hear.

                ## Milestones
                1. Counsel's view on whether the articles permit hybrid or virtual meetings.
                2. Costs compared for a room, a hybrid set-up and a virtual platform.
                3. Shareholder expectations checked, including any investor who insists on attending in person.
                4. The format decided by the board and recorded with the reasons.

                ## Notes
                If the articles do not allow electronic attendance, changing them usually needs a special resolution, which can go on this year's agenda for use next year.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The board has recorded a meeting format decision, with counsel's view on the articles and a cost comparison attached."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask counsel whether the articles allow hybrid or virtual attendance"
                - "Get rough costs for a venue, a hybrid set-up and a virtual platform"
                - "Ask the largest holders which format they prefer"
                - "Record the board's format decision and its reasons"
            - name: Shareholder approval pipeline between meetings
              description: |-
                ## Purpose
                Share allotments, option pool top-ups, changes to the articles and director appointments often need shareholder approval, and each one handled alone means another round of written resolutions or a costly extra meeting. A running pipeline of matters that will need a vote lets the board bundle routine items into the AGM and spot urgent ones early.

                ## Milestones
                1. A pipeline list with each matter, the approval it needs and the date it is needed by.
                2. Each matter tagged as AGM item, written resolution or separate general meeting.
                3. A monthly review held with the CFO or company secretary.
                4. At least two routine approvals bundled into the AGM instead of handled separately.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly pipeline reviews held, with every pending shareholder approval tagged by route and date needed."
                cadence: rolling
              tasks:
                - "List every upcoming matter that needs a shareholder vote"
                - "Ask the CFO and counsel which planned deals need shareholder approval"
                - "Review the shareholder approval pipeline with the company secretary @recurring(monthly:12)"
                - "Move routine items onto the draft AGM agenda as they appear"
            - name: Shareholder resolutions register
              description: |-
                ## Purpose
                Boards keep their own minutes, but shareholder resolutions often live in scattered PDFs, and diligence will ask for every one. A single register of shareholder resolutions, with type, date, method, outcome and filing reference, answers the question of whether something was approved in seconds.

                ## Milestones
                1. A register with columns for date, resolution text, type, method, votes and filing reference.
                2. Every past shareholder resolution from the archive entered.
                3. Each special resolution matched to its registry filing receipt.
                4. The register reconciled every quarter with no unexplained gaps.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A resolutions register holds every shareholder resolution since incorporation and has passed four quarterly reconciliations without unexplained gaps."
                cadence: rolling
              tasks:
                - "Set up the register with date, type, method, votes and filing columns"
                - "Enter every shareholder resolution found in the archive"
                - "Match each special resolution to its filing receipt"
                - "Reconcile the register against minutes and filings @recurring(quarterly)"
            - name: Registry filings after each general meeting
              description: |-
                ## Purpose
                Special resolutions, changed articles and some share authorities must usually be filed with the company registry within a fixed window, in the UK for example 15 days for a special resolution, and late filing can bring penalties. A filing checklist triggered by every meeting and written resolution closes that gap for good.

                ## Milestones
                1. A list of which resolution types need filing and the deadline for each, confirmed by counsel.
                2. A filing checklist used after every meeting and written resolution.
                3. Filing receipts saved against each entry in the resolutions register.
                4. No resolution filed late in the past twelve months.

                ## Notes
                Start from the **Compliance control** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every shareholder resolution needing filing in the last twelve months was filed on time, with its receipt saved in the register."
                cadence: rolling
              tasks:
                - "Ask counsel which resolution types must be filed and by when"
                - "Build a post-meeting filing checklist with each deadline"
                - "Save every filing receipt next to its resolution in the register"
                - "Check the registry record for any outstanding resolution filings @recurring(quarterly)"
            - name: Director retirement and re-election tracker
              description: |-
                ## Purpose
                Articles often require a share of directors to retire by rotation each year, and listed company governance codes may expect every director to stand annually. Tracking who is due, who wants to stand again and who needs a supporting statement prevents the awkward discovery that a director's term lapsed at last year's meeting.

                ## Milestones
                1. Every director listed with appointment date and the date they last stood for election.
                2. The rotation rule in the articles applied to show who must retire this year.
                3. Each retiring director's intention to stand again confirmed in writing.
                4. A short biography and supporting statement drafted for each director standing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Before each notice is drafted, the tracker shows every director due to retire, their written intention and a supporting statement."
                cadence: cyclic
              tasks:
                - "List each director with appointment and last election dates"
                - "Apply the rotation rule in the articles to this year's list"
                - "Ask each retiring director in writing whether they will stand again"
                - "Update the re-election list when the AGM cycle starts @recurring(yearly)"
            - name: Auditor reappointment and fee approval cycle
              description: |-
                ## Purpose
                Where accounts must be audited, shareholders usually appoint or reappoint the auditors and authorise the directors to fix their pay, and a missed resolution can leave the company without a properly appointed auditor. Running reappointment as a yearly cycle, with the audit committee or board view on independence and fees, keeps the resolution routine.

                ## Milestones
                1. The audit requirement and the current auditor's appointment basis confirmed.
                2. The board or audit committee recommendation on reappointment recorded.
                3. Reappointment and fee authority resolutions drafted for the notice.
                4. Any change of auditor handled with the resignation or removal steps counsel advises.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year's notice carries auditor reappointment and fee resolutions backed by a recorded board or audit committee recommendation."
                cadence: cyclic
              tasks:
                - "Confirm whether the company's accounts must be audited this year"
                - "Ask the board or audit committee for its reappointment recommendation"
                - "Draft the reappointment and fee resolutions for the notice"
                - "Start the auditor reappointment review three months before the AGM @recurring(yearly)"
            - name: Shareholder correspondence and query log
              description: |-
                ## Purpose
                Shareholders write in about lost certificates, changes of address, dividends, proxy forms and questions for the board, and unanswered letters become complaints at the meeting. A log with an owner and a response date for every item, reviewed weekly, keeps correspondence moving and gives the chair a list of themes before the AGM.

                ## Milestones
                1. One inbox or address for shareholder correspondence published on the notice.
                2. Every query logged with date, holder, subject, owner and response date.
                3. A weekly review clearing anything older than ten working days.
                4. A summary of recurring themes given to the chair before the AGM.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No shareholder query in the log has waited more than ten working days for a reply over three consecutive months."
                cadence: rolling
              tasks:
                - "Set up one shareholder correspondence address and a query log"
                - "Log each shareholder query with owner and response date"
                - "Review open shareholder queries and chase overdue replies @recurring(weekly:tue)"
                - "Send the chair a short note on themes in shareholder queries @recurring(monthly:26)"
            - name: Proxy receipt and vote count reconciliation
              description: |-
                ## Purpose
                Proxy forms arrive by post, email and online right up to the cut-off, and counting errors, such as a holder voting more shares than they hold or a form without a valid signature, are the commonest source of disputed results. Reconciling every proxy against the register at the cut-off, with written rules for spoilt or late forms, makes the count defensible.

                ## Milestones
                1. Written rules agreed with counsel for late, unsigned, incomplete and duplicate proxies.
                2. Every proxy logged on receipt with holder, shares and voting instructions.
                3. Votes reconciled to each holder's registered shareholding at the cut-off.
                4. A proxy summary per resolution ready for the chair before the meeting opens.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A per-resolution proxy summary, reconciled to the register at the cut-off with every rejected form explained, is in the chair's hands before opening."
                cadence: cyclic
              tasks:
                - "Agree written rules for late, unsigned and duplicate proxy forms with counsel"
                - "Log each proxy on arrival with holder, shares and instructions"
                - "Check each proxy's shares against the register at the cut-off"
                - "Prepare a per-resolution proxy summary for the chair"
            - name: Statutory books update after general meetings
              description: |-
                ## Purpose
                After the meeting, the minute book, the register of directors, the register of members for any allotment and the company's own copy of the articles may all need updating. Doing it within a week, while the decisions are fresh, keeps the statutory books in a state that passes diligence without a scramble.

                ## Milestones
                1. Signed minutes placed in the minute book within a week of the meeting.
                2. Registers of directors and members updated for any change approved.
                3. The company's master copy of the articles replaced if amended.
                4. A quarterly check confirming the books match the public registry.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Within seven days of every general meeting the minute book and registers reflect its decisions, and quarterly checks show no mismatch with the registry."
                cadence: rolling
              tasks:
                - "Place the signed minutes in the minute book"
                - "Update the register of directors for any appointment or retirement"
                - "Replace the master copy of the articles if a change was approved"
                - "Compare the statutory books with the public registry record @recurring(quarterly)"
            - name: Annual AGM debrief and lessons log
              description: |-
                ## Purpose
                Each AGM produces small lessons, such as a proxy form that confused holders, a printer who ran late or a question the board fumbled, and they are forgotten by next year. A thirty-minute debrief within a fortnight of the meeting, written into a lessons log, makes every meeting easier than the last.

                ## Milestones
                1. A debrief held within two weeks with the secretary, CFO and registrar.
                2. What went well, what slipped and what to change written in the lessons log.
                3. Each change assigned to an owner with a date before the next AGM.
                4. Last year's lessons read at the start of this year's planning.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A lessons log entry exists for each of the last two AGMs, with every agreed change marked done or carried forward."
                cadence: cyclic
              tasks:
                - "Book a thirty-minute AGM debrief within two weeks of the meeting"
                - "Write what slipped and what to change in the lessons log"
                - "Give each change an owner and a date before the next AGM"
                - "Read the lessons log when planning the next AGM @recurring(yearly)"
            - name: Ordinary and special resolutions explained
              description: |-
                ## Purpose
                Founders often learn the difference between an ordinary resolution, commonly a simple majority, and a special resolution, commonly 75 percent, only when a vote comes up short. Knowing which matters need which threshold under your law and articles, and how class votes and investor consents add to them, shapes the agenda and tells you who to call before the notice goes out.

                ## Milestones
                1. The thresholds for ordinary and special resolutions under your law written in a one-page note.
                2. A list of common matters needing a special resolution, confirmed by counsel.
                3. Class consents and investor consent rights from the articles added to the note.
                4. The note used to mark each resolution on this year's draft agenda.

                ## Notes
                Thresholds vary by country and by the articles. Treat a simple majority and 75 percent as common examples and confirm yours.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page thresholds note, checked by counsel, has been used to mark the required majority on every resolution in this year's draft agenda."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read your company law's summary of ordinary and special resolutions"
                - "List the matters that need a special resolution under your articles"
                - "Ask counsel which matters also need a class vote or investor consent"
                - "Mark each item on the draft agenda with its required threshold"
            - name: Written resolutions as an alternative to a meeting
              description: |-
                ## Purpose
                Many private companies pass most shareholder decisions by written resolution, circulated and signed rather than voted in a room, but the rules on who must receive it, the threshold and when it lapses are strict. Learning the procedure properly lets a founder with eight shareholders approve an option pool top-up in a week instead of calling a meeting.

                ## Milestones
                1. The written resolution procedure under your law and articles summarised, including what it cannot be used for.
                2. A standard circulation email and signature page prepared.
                3. The lapse rule noted, after which an unsigned resolution fails.
                4. One written resolution run end to end and entered in the resolutions register.

                ## Notes
                In some countries, removing a director or an auditor before the end of their term cannot be done by written resolution. Check the exceptions with counsel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One written resolution has been circulated, passed or lapsed under a documented procedure and recorded with its circulation and result dates."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the written resolution procedure in your company law and articles"
                - "Note which matters cannot be passed by written resolution"
                - "Prepare a standard circulation email and signature page"
                - "Record the circulation date and lapse date for each resolution sent"
            - name: Quorum, proxies, polls and show of hands
              description: |-
                ## Purpose
                Who counts towards a quorum, what a proxy may do and when a poll replaces a show of hands decide whether a vote is valid, yet most chairs meet these rules for the first time on the day. Working through them with an example from your own register makes the meeting script, the proxy form and the count consistent.

                ## Milestones
                1. Quorum rules applied to your register, showing the minimum attendance needed.
                2. Proxy rights noted: whether a proxy can speak, vote on a show of hands and demand a poll.
                3. The circumstances for calling a poll written down, with who may demand one.
                4. A worked example of a poll result calculated from sample proxies.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note covers quorum, proxy rights and poll rules for this company, with a worked poll example the company secretary has checked."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Calculate the quorum the articles require using your current register"
                - "Write down what a proxy may and may not do under your articles"
                - "Note who can demand a poll and when the chair should call one"
                - "Work a sample poll result using last year's proxy numbers"
            - name: Chairing a general meeting with confidence
              description: |-
                ## Purpose
                Opening the meeting, confirming the quorum, putting each resolution, taking questions and closing all fall to the chair, and any procedural slip can be challenged later. A practised script and a short brief on adjournment, disorder and points of order let a founder or non-executive chair run the meeting calmly.

                ## Milestones
                1. A chair's script with wording for opening, each resolution, questions and closing.
                2. Guidance on adjournment, disorderly conduct and late arrivals agreed with counsel.
                3. One full rehearsal of the script with the company secretary.
                4. The chair's annotated script kept for next year.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A counsel-reviewed chair's script has been rehearsed in full once before the meeting and the annotated copy filed afterwards."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to draft a chair's script from this year's notice"
                - "Have counsel review the script's wording on quorum, polls and adjournment"
                - "Rehearse the script once aloud with the company secretary"
                - "Note changes on the script and file it for next year"
            - name: Writing notices and explanatory notes shareholders understand
              description: |-
                ## Purpose
                Every notice must contain the date, time, place, full text of resolutions and whatever proxy statements the law requires, and the explanatory notes are where shareholders actually decide how to vote. Plain notes, one short paragraph per resolution, cut the queries the secretary has to answer and the risk of protest votes born of confusion.

                ## Milestones
                1. A checklist of the content your law requires in a notice, confirmed by counsel.
                2. One plain paragraph per resolution explaining what it does and why the board recommends it.
                3. The notes tested on a reader outside the finance team.
                4. The final notice signed off by counsel and the board.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "This year's notice carries a plain explanatory paragraph for every resolution and was signed off by counsel and the board."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Get counsel's checklist of the contents a notice must include"
                - "Write one plain paragraph explaining each resolution"
                - "Ask a colleague outside finance to read the notes and flag confusion"
                - "Revise the notes and send them to counsel for sign-off"
            - name: Minuting a general meeting
              description: |-
                ## Purpose
                Minutes of a general meeting are evidence of what shareholders decided, and they are read by auditors, buyers' lawyers and sometimes courts. Learning to record attendance, the quorum, each resolution with its result and the substance of questions, without a verbatim transcript, produces minutes the chair can sign the same week.

                ## Milestones
                1. A minutes format with attendance, quorum, resolutions, results and questions.
                2. Draft minutes prepared within three working days of the meeting.
                3. The chair's review and signature obtained.
                4. Signed minutes filed in the minute book and the archive.

                ## Notes
                Start from the **Meeting notes** template for your working notes on the day, then write the formal minutes from them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Signed minutes recording attendance, quorum, every resolution result and the questions raised are filed within a week of the meeting."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set up a minutes format from the meeting notes template"
                - "Take working notes on attendance, quorum, results and questions"
                - "Draft formal minutes within three working days"
                - "Send the draft to the chair for review and signature"
            - name: Record dates, nominees and beneficial owners
              description: |-
                ## Purpose
                When shares are held through nominees, custodians or a central depository, the registered holder who votes is often not the person who owns the economic interest. Understanding record dates and how votes travel down the chain of intermediaries explains why institutional votes arrive late and why some holders are told they cannot vote.

                ## Milestones
                1. The record date or entitlement time rule for your company written down.
                2. A diagram of how votes pass from beneficial owners through intermediaries to the registrar.
                3. The intermediaries holding your largest nominee positions identified.
                4. The registrar's deadlines for votes from intermediaries added to the AGM timeline.

                ## Notes
                In Delaware, for example, the record date for a meeting generally falls between 10 and 60 days before it. Confirm your own rule with counsel.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The AGM timeline shows the record date and every intermediary voting deadline, backed by a one-page diagram of the voting chain."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask counsel or the registrar for your record date rule"
                - "Sketch how votes flow from beneficial owners to the registrar"
                - "Identify which nominees hold the largest blocks on the register"
                - "Add the registrar's intermediary vote deadlines to the AGM timeline"
            - name: Registrar and meeting services provider choice
              description: |-
                ## Purpose
                Once the register passes a few hundred holders, or the company lists, a share registrar or meeting services provider usually handles mailing, proxy collection and counting. Comparing two or three on service levels, online voting and per-holder fees, rather than accepting whoever the lawyers suggest, sets the cost and quality of every AGM for years.

                ## Milestones
                1. Requirements written: holder count, mailing method, online voting, poll counting and reporting.
                2. Three providers asked for proposals against the same requirements.
                3. Proposals scored, with references from two client companies each.
                4. A provider chosen and the agreement signed with service levels.

                ## Notes
                Start from the **Vendor** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A registrar is appointed under a signed agreement with service levels, chosen from three proposals scored on the same criteria."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the registrar requirements for holders, mailing, online voting and counting"
                - "Request proposals from three registrars or meeting services providers"
                - "Call two client references for each shortlisted provider"
                - "Review the registrar's service levels after each AGM @recurring(yearly)"
            - name: Virtual meeting platform selection
              description: |-
                ## Purpose
                Virtual and hybrid AGMs need more than a video call: shareholder authentication, live voting, moderated questions and a record of who attended. Choosing a platform against those needs, and testing it with real holders, prevents the meeting-day failure where a shareholder cannot get in to vote.

                ## Milestones
                1. Requirements set for authentication, live voting, question handling and attendance records.
                2. Two or three platforms demonstrated against the same scenario.
                3. A test meeting run with five shareholders on the preferred platform.
                4. The platform chosen, with a named support contact for the meeting day.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A virtual meeting platform is chosen after a test session with five shareholders, and a named support contact is booked for the day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the must-have features for authentication, voting and questions"
                - "Book demonstrations with two or three meeting platforms"
                - "Run a test session with five shareholders on the preferred platform"
                - "Confirm a named platform support contact for the meeting day"
            - name: Online proxy appointment set-up
              description: |-
                ## Purpose
                Paper proxy forms are slow, easily spoilt and often arrive after the cut-off, while online appointment through the registrar or a secure form lets holders vote in minutes. Setting it up once, with secure holder identification, lifts turnout and shortens the count.

                ## Milestones
                1. An online proxy route chosen, through the registrar or a secure form provider.
                2. A holder identification method agreed, such as a unique code printed on each form.
                3. The online route tested end to end with three internal holders.
                4. Instructions for online voting added to the notice and proxy form.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An online proxy route with unique holder codes has been tested by three holders and is described in this year's notice."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the registrar whether online proxy appointment is included"
                - "Agree how each holder will be identified online"
                - "Test the online route with three internal holders"
                - "Add online voting instructions to the notice and proxy form"
            - name: Reusable AGM notice and proxy form templates
              description: |-
                ## Purpose
                Rewriting the notice and proxy form from last year's PDF invites errors such as stale dates, the wrong auditor's name or a missing statutory statement. A pair of clean templates with marked fields, reviewed by counsel once, turns next year's drafting into an afternoon.

                ## Milestones
                1. A notice template with marked fields for dates, resolutions and venue.
                2. A proxy form template with voting boxes and the statements your law requires.
                3. Both templates reviewed by counsel and stored with the AGM archive.
                4. A yearly check that the templates reflect any change in law or articles.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Counsel-reviewed notice and proxy form templates with marked fields are stored in the archive and were used for this year's meeting."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Strip last year's notice into a template with marked fields"
                - "Build a proxy form template with for, against and withheld boxes"
                - "Ask counsel to review both templates once"
                - "Update the templates for any change in law or articles @recurring(yearly)"
            - name: Annual share authorities to ask shareholders for
              description: |-
                ## Purpose
                Some companies need shareholder authority to allot new shares, to issue them without first offering them to existing holders, or to buy back their own shares, and these authorities are often renewed each year at the AGM. Deciding which to seek, and for how much, ahead of the notice keeps the board able to issue shares or grant options without calling an extra meeting.

                ## Milestones
                1. Counsel's list of the share authorities your law and articles require.
                2. Current authorities checked for their limit, expiry date and how much has been used.
                3. The board's planned share issues for the next year compared with the authority sought.
                4. Proposed authority resolutions agreed by the board for the notice.

                ## Notes
                Listed companies are often held to institutional investor guidelines on the size of these authorities. Check them before fixing the numbers.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The board has approved share authority resolutions sized against a written comparison of current authorities and planned issues."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask counsel which share authorities the company needs"
                - "List current authorities with their limit, expiry and use to date"
                - "Compare planned share issues for the year with the authority sought"
                - "Get the board's agreement on the authority resolutions for the notice"
            - name: Final dividend resolution and record date
              description: |-
                ## Purpose
                Where the board recommends a final dividend, shareholders typically declare it at the AGM, and the record date, payment date and distributable reserves must all line up. Settling them with the finance team and the registrar before the notice is posted avoids proposing a dividend the accounts cannot support.

                ## Milestones
                1. Distributable reserves confirmed by the finance team from the latest accounts.
                2. The board's recommended dividend and its record and payment dates agreed.
                3. The registrar's payment run booked for the payment date.
                4. The dividend resolution in the notice with plain explanatory wording.

                ## Notes
                Whether a dividend is lawful depends on the accounts and your company law. Ask the auditors or counsel, not the spreadsheet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The dividend resolution in the notice matches a board recommendation, confirmed distributable reserves and a booked registrar payment run."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the finance team to confirm distributable reserves"
                - "Agree the dividend record date and payment date with the registrar"
                - "Book the dividend payment run with the registrar"
                - "Write the dividend resolution and its explanatory note"
            - name: Shareholder pack contents and mailing method
              description: |-
                ## Purpose
                The notice, proxy form, annual report, chair's letter and any circular make up what each holder receives, and deciding late which items go by post, by email or on the website causes the printing crunch. Agreeing the pack contents and the delivery method for each holder group settles the print order and the mailing date.

                ## Milestones
                1. The pack contents listed for this year's meeting.
                2. Each holder group assigned post, email or website notification based on consents.
                3. Print quantities and costs confirmed with the printer or registrar.
                4. A mailing date set that meets the notice period with margin.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written pack list, a delivery method per holder group and a mailing date with at least two days' margin are agreed before printing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every document that will go in this year's shareholder pack"
                - "Split holders by delivery method using the consents record"
                - "Get a print quote and quantity from the printer or registrar"
                - "Set the mailing date with two days' margin on the notice period"
            - name: AGM day running order and venue set-up
              description: |-
                ## Purpose
                On the day, registration, attendance sheets, poll cards, microphones and the timing of each item all have to work at once. A running order and a checklist walked through the day before mean the chair walks in knowing the quorum is present and the proxy summary is in hand.

                ## Milestones
                1. A minute-by-minute running order from doors opening to close.
                2. Registration set up with the register, attendance sheet and poll cards.
                3. Audio, screens or the virtual platform tested the day before.
                4. Quorum confirmed and the proxy summary handed to the chair before opening.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The AGM opened on time with quorum confirmed, every resolution put, and the running order checklist fully ticked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a running order from doors opening to close of meeting"
                - "Prepare registration with the register, attendance sheet and poll cards"
                - "Test audio, screens or the virtual platform the day before"
                - "Hand the chair the quorum count and proxy summary before opening"
            - name: Director rehearsal and likely questions briefing
              description: |-
                ## Purpose
                Shareholder questions at an AGM range from executive pay to a product recall to why the dividend was cut, and a director who answers off the cuff can create a disclosure problem. A short rehearsal with a briefing of likely questions and agreed answers keeps the board consistent and within what has already been disclosed.

                ## Milestones
                1. A list of likely questions drawn from correspondence, press and last year's meeting.
                2. Agreed answers for each, checked by counsel against disclosed information.
                3. A rehearsal held with the chair and the directors who will speak.
                4. A rule agreed for questions the board cannot answer in the room.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A likely questions briefing with counsel-checked answers was rehearsed by the speaking directors at least three days before the AGM."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft likely questions from correspondence and press"
                - "Write agreed answers and send them to counsel for a disclosure check"
                - "Hold a one-hour rehearsal with the chair and speaking directors"
                - "Agree how to handle questions that cannot be answered in the room"
            - name: Extraordinary general meeting on a tight timetable
              description: |-
                ## Purpose
                Financings, acquisitions and changes to the articles sometimes need shareholder approval before the next AGM, and the deal timetable rarely allows a full notice period. Knowing your options, such as consent to short notice or a written resolution where the law allows, and preparing documents in parallel keeps the vote off the critical path.

                ## Milestones
                1. Counsel's view on the fastest lawful route: written resolution, short notice or full notice.
                2. The holder consents needed for short notice, and their threshold, listed.
                3. Notice, resolutions and proxy form drafted alongside the deal documents.
                4. The meeting held or the resolution passed by the date the deal needs.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The required shareholder approval was obtained by the deal's target date through the route counsel confirmed as lawful."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask counsel for the fastest lawful route to the shareholder approval"
                - "List which holders must consent to short notice and the threshold"
                - "Draft the notice and resolutions alongside the deal documents"
                - "Call the largest holders to explain the timetable before the notice goes"
            - name: Shareholder vote on a sale, merger or major transaction
              description: |-
                ## Purpose
                Selling the company, a merger or a large acquisition can need a shareholder vote, sometimes by class, with drag-along and consent mechanics from the shareholders' agreement on top. Running the vote as its own workstream, with a circular, a holder-by-holder tracker and a timetable tied to signing, removes the risk of a deal stalling for want of signatures.

                ## Milestones
                1. The approvals required mapped: board, ordinary, special, class and investor consents.
                2. A circular or information statement explaining the deal, approved by counsel.
                3. A holder-by-holder tracker showing votes or signatures received against each threshold.
                4. The required approvals obtained and recorded before completion.

                ## Notes
                Deal terms and advice belong with the company's corporate lawyers and advisers. This project organises the shareholder approval, not the transaction.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every approval the transaction needs is recorded as obtained, with the tracker showing each threshold met before completion."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Map every approval the transaction needs, including class votes"
                - "Ask counsel to prepare the circular or information statement"
                - "Build a holder-by-holder tracker of votes and signatures"
                - "Chase outstanding holders daily in the final week before signing"
            - name: Shareholder approval for a new or larger share option scheme
              description: |-
                ## Purpose
                Adopting an employee share scheme, or adding shares to the pool, often needs shareholder approval and sometimes a class consent from investors with pre-emption or anti-dilution rights. Preparing the scheme summary, dilution figures and resolution wording early means the vote can ride on the AGM rather than holding up hiring offers.

                ## Milestones
                1. The approvals the scheme or pool increase needs confirmed with counsel.
                2. A one-page scheme summary showing the dilution effect on each class.
                3. Investors with consent rights briefed before the notice is sent.
                4. The resolution passed and the new pool size recorded.

                ## Notes
                How large the pool should be is a separate decision. This project assumes the board has already settled the size.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The scheme or pool increase resolution passed with every required consent, and the approved pool size is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Confirm with counsel which approvals the scheme or pool increase needs"
                - "Write a one-page scheme summary with the dilution per share class"
                - "Brief the investors who hold consent rights before the notice goes"
                - "Record the approved pool size in the resolutions register"
            - name: Adopting new articles at a general meeting
              description: |-
                ## Purpose
                Replacing the articles, whether to allow virtual meetings, tidy up outdated share classes or reflect a new shareholders' agreement, usually needs a special resolution and a registry filing. Preparing a marked-up comparison and a plain summary of every change lets shareholders vote knowing what they are approving.

                ## Milestones
                1. A list of the changes wanted and the reason for each.
                2. New articles drafted by counsel with a marked-up comparison against the current ones.
                3. A plain summary of the changes included in the notice.
                4. The special resolution passed, filed and the new articles saved as the master copy.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "New articles were adopted by special resolution, filed with the registry, and saved as the company's master copy."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the changes wanted in the articles and why"
                - "Ask counsel for draft articles and a marked-up comparison"
                - "Write a plain summary of the changes for the notice"
                - "Send the adopted articles and resolution to counsel for filing"
            - name: First AGM with outside investors on the register
              description: |-
                ## Purpose
                Until the first round, a founder-owned company can treat shareholder approvals as a formality, but investors expect proper notice, accurate accounts and resolutions they have seen in draft. Running the first AGM after outside money arrives as a deliberate exercise sets the standard investors will judge the board by.

                ## Milestones
                1. Lead investors sent the draft agenda a month before the notice.
                2. The accounts, resolutions and any investor consents on the agenda reviewed with counsel.
                3. Notice, proxy forms and minutes produced to the standard the investors' lawyers expect.
                4. Feedback from the lead investor asked for after the meeting.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "The first AGM with outside investors was held on a counsel-reviewed notice, and the lead investor's feedback is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Send the lead investors the draft AGM agenda a month before notice"
                - "Check the shareholders' agreement for investor consents on the agenda"
                - "Ask counsel to review the notice and proxy form before it goes"
                - "Ask the lead investor afterwards what to improve next year"
            - name: Finance manager covering the company secretary role
              description: |-
                ## Purpose
                In many growing companies the finance manager inherits company secretarial work, AGM included, with no handover and no training. Mapping the duties, finding a source of help and protecting a few hours a month for them stops the role being done only in a panic before deadlines.

                ## Milestones
                1. A list of company secretarial duties with their deadlines across the year.
                2. An external adviser or counsel named for questions beyond your experience.
                3. A short course or guide on company secretarial practice completed.
                4. Two hours a month blocked for secretarial work and kept for six months.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A dated duties calendar exists, a named adviser is on call, and six monthly secretarial blocks have been kept."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every company secretarial duty you now hold with its deadline"
                - "Name an adviser or counsel for questions beyond your experience"
                - "Complete a short course or guide on company secretarial practice"
                - "Block two hours for company secretarial work @recurring(monthly:8)"
            - name: First AGM after listing
              description: |-
                ## Purpose
                Newly listed companies hold their first AGM with thousands of holders, nominee chains, proxy advisers and market disclosure rules all applying at once, often within a year of listing. Planning it six months out with the registrar, brokers and counsel avoids learning public company mechanics in front of the market.

                ## Milestones
                1. The listing rules and governance code provisions that apply to the AGM summarised by counsel.
                2. A six-month plan agreed with the registrar, brokers and counsel.
                3. The notice and results announcements fitted into the market disclosure timetable.
                4. Voting results published in the form the exchange requires.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first post-listing AGM was held to an agreed six-month plan and its voting results were published as the exchange requires."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask counsel for a summary of listing rules that apply to the AGM"
                - "Agree a six-month AGM plan with the registrar, brokers and counsel"
                - "Fit the notice and results announcements into the disclosure timetable"
                - "Publish the voting results in the form the exchange requires"
            - name: Family or closely held company general meetings
              description: |-
                ## Purpose
                When shareholders are relatives or a handful of long-standing partners, AGMs drift into informal lunches and decisions go unrecorded until a dispute or a death makes them matter. Keeping proper notices and minutes, while holding the meeting in a way that suits the family, protects both the company and the relationships.

                ## Milestones
                1. A simple annual meeting format agreed with the main family shareholders.
                2. Notices and minutes kept to the same standard as any other company.
                3. Newer or next-generation shareholders given a short briefing on how meetings work.
                4. Each year's meeting held with signed minutes on file.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two consecutive family company meetings were held on formal notice, with signed minutes filed for each."
                cadence: cyclic
              tasks:
                - "Agree a simple yearly meeting format with the main family shareholders"
                - "Prepare a one-page briefing on meetings for newer family shareholders"
                - "Keep a formal notice and minutes even for a family meeting"
                - "Send family shareholders the date and agenda for the year @recurring(yearly)"
            - name: Shareholders spread across several countries
              description: |-
                ## Purpose
                Holders in other countries face slow international post, different time zones, possible language barriers and, for some, local rules on receiving company communications. Planning the notice, proxy route and meeting time around them keeps overseas holders able to vote and stops the post from deciding who takes part.

                ## Milestones
                1. Holders grouped by country with their delivery method and time zone.
                2. Email or courier delivery arranged where post would be too slow.
                3. A meeting time chosen that suits the main time zones, or a proxy route that does not depend on it.
                4. Counsel asked about local restrictions on communications to holders in specific countries.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every overseas holder has a delivery method that meets the notice period, and counsel's view on local restrictions is on file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Group holders by country with delivery method and time zone"
                - "Arrange email or courier delivery where post would miss the deadline"
                - "Choose a meeting time that suits the largest holders' time zones"
                - "Ask counsel about local restrictions on sending notices abroad"
            - name: Employee shareholders at the annual meeting
              description: |-
                ## Purpose
                After an employee share plan or a wave of option exercises, dozens of staff may be on the register for the first time, with little idea what an AGM is or how to vote. A plain explanation and a simple voting route turn them into informed holders and cut the queries landing on HR and finance.

                ## Milestones
                1. Employee holders identified from the register and plan records.
                2. A one-page plain guide on what the AGM decides and how to vote.
                3. An internal session or recorded video offered before the proxy deadline.
                4. Common questions from employee holders answered in a shared FAQ.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every employee holder received a one-page AGM guide and an invitation to a briefing before the proxy deadline."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Identify employee holders from the register and plan records"
                - "Write a one-page plain guide to the AGM and voting"
                - "Offer a short internal session before the proxy deadline"
                - "Answer employee holders' common questions in a shared FAQ"
            - name: Resolutions checked against investor voting guidelines
              description: |-
                ## Purpose
                Large institutional holders and proxy advisers publish voting guidelines on director independence, share authorities, pay and auditor tenure, and a resolution that breaches them can draw a heavy vote against before anyone has spoken to the company. Testing each draft resolution against those guidelines before the notice is final shows where to change, explain or prepare for opposition.

                ## Milestones
                1. The current voting guidelines of the main proxy advisers and top ten holders gathered.
                2. Each draft resolution checked against them, with any conflict marked.
                3. A decision recorded for each conflict: change, explain in the notice, or accept the risk.
                4. Explanations for departures written into the explanatory notes.

                ## Notes
                Meetings with investors' stewardship teams sit with investor relations. This project is the desk check of the resolutions themselves.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every draft resolution has been checked against current proxy adviser and top holder guidelines, with a recorded decision for each conflict."
                cadence: cyclic
              tasks:
                - "Download the latest voting guidelines of the main proxy advisers"
                - "Ask the registrar or IR team for the top ten holders' voting policies"
                - "Mark each draft resolution that conflicts with a guideline"
                - "Check proxy adviser policy updates before drafting the notice @recurring(yearly)"
            - name: Remuneration report and policy vote preparation
              description: |-
                ## Purpose
                In several markets listed companies put the directors' pay report, and periodically the pay policy, to a shareholder vote, and these are the resolutions most likely to attract opposition. Preparing the vote with the remuneration committee chair, clear disclosure and early sight of investor concerns keeps a pay vote from overshadowing the rest of the meeting.

                ## Milestones
                1. The pay votes required this year, advisory or binding, confirmed with counsel.
                2. The remuneration committee chair's letter and the report drafted on the reporting timetable.
                3. Concerns from the largest holders gathered and answered in the disclosure.
                4. The vote result and any follow-up recorded for the committee.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each pay resolution went to the AGM on the agreed timetable, and the result with any follow-up is recorded for the remuneration committee."
                cadence: cyclic
              tasks:
                - "Confirm with counsel which pay votes are required this year"
                - "Agree the report timetable with the remuneration committee chair"
                - "Collect the largest holders' concerns on pay before the report is final"
                - "Record the pay vote result and agreed follow-up for the committee"
            - name: Response plan after a significant vote against
              description: |-
                ## Purpose
                Heavy votes against a director, a pay report or a share authority are a public signal, and some governance codes expect the company to explain what it will do, for example the UK code where 20 percent or more vote against. Having a response plan ready, with who contacts which holders and when the company reports back, turns a bad result into a managed process.

                ## Milestones
                1. The threshold that triggers a response under your governance code or board policy written down.
                2. A plan naming who contacts dissenting holders and within what time.
                3. A holding statement for the results announcement drafted in advance.
                4. A follow-up update on engagement published within the period your code expects.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board-approved response plan names the trigger threshold, the holder contacts, a holding statement and the follow-up date."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the vote-against threshold that triggers a response"
                - "Name who will contact each large dissenting holder"
                - "Draft a holding statement to use with the results announcement"
                - "Diary the follow-up engagement update the governance code expects"
            - name: Shareholder requisitions and members' resolutions handling
              description: |-
                ## Purpose
                Shareholders holding enough of the company can usually require the directors to call a meeting or add a resolution to the AGM, and the deadlines for responding are short and strict. A procedure for checking the holding, the validity of the request and the timetable means a requisition is handled lawfully, whether it is friendly or hostile.

                ## Milestones
                1. The thresholds and response deadlines under your law and articles confirmed by counsel.
                2. A procedure for verifying the requisitioners' holdings against the register.
                3. Template board minutes and notices for responding to a valid requisition.
                4. Counsel and registrar contacts on call for a fast response.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written requisition procedure with thresholds, deadlines, verification steps and template documents is approved by counsel."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask counsel for the requisition thresholds and response deadlines"
                - "Write the steps to verify requisitioners' holdings against the register"
                - "Prepare template board minutes and a notice for a valid requisition"
                - "List out-of-hours contacts for counsel and the registrar"
            - name: Independent scrutineer and poll verification
              description: |-
                ## Purpose
                For a contested resolution, a large register or any vote that might be challenged, an independent scrutineer, often the registrar or an accounting firm, checks the proxies and poll cards and certifies the result. Arranging one in advance, with an agreed method, gives the chair a result that will stand up.

                ## Milestones
                1. Criteria set for when the company appoints an independent scrutineer.
                2. A scrutineer engaged with scope, method and fee agreed in writing.
                3. Poll procedure agreed covering poll cards, proxies and timing.
                4. A signed scrutineer's certificate attached to the minutes.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "For each contested vote, a scrutineer engaged in writing beforehand has issued a signed certificate that is attached to the minutes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree when the company will appoint an independent scrutineer"
                - "Get a scope and fee from the registrar or an accounting firm"
                - "Agree the poll card and proxy checking method with the scrutineer"
                - "Attach the scrutineer's signed certificate to the minutes"
            - name: Disruption, adjournment and technology failure contingency plan
              description: |-
                ## Purpose
                Protesters, a fire alarm, a lost quorum or a virtual platform outage can each stop a meeting, and the chair's powers to adjourn depend on the articles. A contingency plan agreed in advance, with scripts for each scenario, means the chair can act within the rules in the moment instead of improvising.

                ## Milestones
                1. The chair's adjournment powers and quorum rules confirmed with counsel.
                2. Scenarios listed with a response for each: disruption, alarm, lost quorum and outage.
                3. Short scripts for adjourning and reconvening written for the chair.
                4. Security and technical support roles named for the meeting day.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A counsel-checked contingency plan covers four disruption scenarios, with chair scripts and named support roles, before the AGM."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask counsel to confirm the chair's adjournment powers under the articles"
                - "List each disruption scenario with its response and owner"
                - "Write short adjourn and reconvene scripts for the chair"
                - "Review the contingency plan before each AGM @recurring(yearly)"
---

# Shareholder AGM Preparation

This area is for founders, finance managers and company secretaries who have to get shareholder meetings right, from a private company with a dozen holders to a listed company with thousands. It starts with the foundations (whether an AGM is required, the meeting rules, roles, the mailing list, the timeline and the standard resolutions), then the routines that keep approvals, filings and registers in order, the skills of resolutions, proxies, chairing and minutes, the decisions on providers, templates and annual share authorities, the meetings and votes that need planning, the situations that change the picture, and finally the specialist work of voting guidelines, pay votes, requisitions and contingency plans.

What repeats is a monthly review of matters heading for a shareholder vote, a weekly look at shareholder correspondence, quarterly checks of the resolutions register, filings and statutory books, and a yearly cycle of director re-election, auditor reappointment, template updates and the post-meeting debrief. The Compliance control, Meeting notes, Vendor, Purchase decision, Operational checklist and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
