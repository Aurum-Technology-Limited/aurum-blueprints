---
id: family-office.family-investment-committee
name: Family Investment Committee
description: "A family investment committee that works like a proper board: clear terms of reference, the right mix of family and independent members, packs and minutes on time, and a written path from recommendation to approval."
category: personal
version: 1.0.0
tags: [family-office, family-investment-committee, parent, retiree, investment-governance, committee, independent-members, minutes]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - board-meeting
    - meeting-notes
    - purchase-decision
    - risk-register
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Investment Committee
          description: "Running a family investment committee: family and independent members, terms of reference, meeting cadence, minutes and how recommendations get approved."
          projects:
            - name: Investment committee terms of reference
              description: |-
                ## Purpose
                Without a written remit, a family investment committee either rubber-stamps whatever the office brings or tries to run the portfolio line by line. Three pages setting out what the committee approves, what it only reviews, who sits on it and how it reports give every later meeting a boundary, and they are far easier to agree before the first disputed decision than after it.

                ## Milestones
                1. A draft covering purpose, membership, quorum, meeting frequency, matters reserved to the committee and reporting lines.
                2. The link to the family investment policy statement and the family council stated in one paragraph.
                3. The draft checked by the family's lawyer or governance adviser for consistency with trust deeds and company documents.
                4. Terms of reference approved by the family council and filed with the committee's records.

                ## Notes
                Keep the terms about how the committee works. Investment objectives and ranges belong in the investment policy statement, which the committee follows rather than rewrites.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Approved terms of reference covering membership, quorum, reserved matters and reporting are filed and circulated to every committee member."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the last ten investment decisions and note who actually made each one"
                - "Draft the reserved matters and the review-only matters on one page"
                - "Send the draft terms to the governance adviser for a consistency check"
                - "Put the terms of reference to the family council for approval"
            - name: Family and independent seat mix
              description: |-
                ## Purpose
                A committee of five siblings tends to defer to the eldest, and a committee of outside experts can forget whose money it is. Deciding how many seats go to family, how many to independent members and which skills each seat must bring produces a committee that can challenge advisers and still reflect the family's wishes.

                ## Milestones
                1. A skills matrix listing the expertise the committee needs, such as public markets, private markets, risk, tax awareness and governance.
                2. Current or proposed members scored against the matrix, with gaps marked.
                3. A seat plan agreed, for example three family seats and two independent seats, with the reason written down.
                4. Branch representation rules for family seats settled where the family has more than one branch.

                ## Notes
                Start from the **Skills matrix** template. An odd number of voting members avoids deadlocks unless the chair has a casting vote.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written seat plan with a completed skills matrix and the agreed split of family and independent seats is approved by the family council."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a skills matrix with the six areas of expertise the committee most needs"
                - "Score each current or likely member against the matrix"
                - "Mark the two biggest gaps an independent member should fill"
                - "Write the proposed seat split and the reasons in half a page"
            - name: Delegated authority matrix for investment decisions
              description: |-
                ## Purpose
                Families get into trouble when nobody can say whether the head of office may rebalance within ranges, whether a new fund commitment needs the committee, or whether a large sale needs the whole council. A one-page matrix of who decides what, with value limits, ends those arguments and lets the office act quickly inside agreed boundaries.

                ## Milestones
                1. Every recurring type of investment decision listed, from rebalancing and cash management to new managers, private commitments and direct deals.
                2. Each decision assigned to the office, the committee chair, the full committee or the family council, with value thresholds.
                3. Escalation rules written for decisions that fall between categories or arrive urgently.
                4. The matrix approved by the committee and attached to its terms of reference.

                ## Notes
                Set thresholds as amounts or as a share of the portfolio, not both, so nobody has to work out which applies.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved delegated authority matrix names the decision maker and value limit for every listed investment decision type."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every type of investment decision made in the last two years"
                - "Assign each decision type to the office, chair, committee or council"
                - "Agree the value thresholds with the head of office and the chair"
                - "Attach the approved matrix to the committee's terms of reference"
            - name: Recruiting the first independent committee member
              description: |-
                ## Purpose
                An independent member with real investment experience and no business with the family is the single biggest upgrade most family committees can make. Recruiting one properly, through a role description, a wide search and references, avoids the common mistake of appointing a friendly banker who sells to the family.

                ## Milestones
                1. A role description stating the skills sought, expected time each year, term length and pay range.
                2. A longlist of candidates from the family's network, governance bodies and a search firm if used.
                3. Three candidates interviewed by the chair and one other member, with independence checked.
                4. References taken and an appointment letter signed by the chosen candidate.

                ## Notes
                Independence means no fees, products or close personal ties with the family or its advisers. Ask candidates to declare anything that comes close.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One independent member with documented independence and taken references has signed an appointment letter and attended a meeting."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write a one-page role description for the independent member"
                - "Ask three trusted contacts for names of experienced investors with no ties to the family"
                - "Interview the three strongest candidates with the committee chair"
                - "Take two references for the preferred candidate before making an offer"
            - name: Conflicts of interest policy for committee members
              description: |-
                ## Purpose
                A family member who wants the committee to back a friend's fund, or an independent member who also advises a manager under review, can quietly distort a decision. A short conflicts policy that says what must be declared, when a member steps out of the room and how conflicts are minuted protects both the decision and the person.

                ## Milestones
                1. A definition of conflicts covering financial interests, roles with managers, family business links and close relationships.
                2. A declaration form every member completes on appointment.
                3. A rule for each level of conflict: declare and stay, declare and abstain, or leave the discussion.
                4. The policy adopted and the first full set of declarations filed.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An adopted conflicts policy with a signed declaration from every current committee member is held by the committee secretary."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down the three conflicts most likely to arise in this family"
                - "Draft a one-page declaration form with financial, role and relationship sections"
                - "Ask the family's lawyer to review the policy wording"
                - "Collect signed declarations from every member before the next meeting"
            - name: Committee secretary role and papers standard
              description: |-
                ## Purpose
                Good committees run on paper: agendas, recommendation memos, minutes and the record of what was approved. Naming a secretary, often someone in the family office, and setting a standard for how papers are numbered, dated and filed means any member can find last year's approval in two minutes instead of searching old emails.

                ## Milestones
                1. A named committee secretary with a short written list of duties.
                2. A numbering and naming standard for agendas, papers and minutes.
                3. One shared, access-controlled folder holding every committee paper.
                4. Two meetings run with papers that follow the standard.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named secretary is in place and the last two meetings' papers follow the written naming and filing standard in one shared folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree who will act as committee secretary and write their duties in ten lines"
                - "Set a naming pattern for agendas, papers and minutes with the meeting date"
                - "Move every existing committee paper into one access-controlled folder"
                - "Check the papers for the next meeting follow the standard before they go out"
            - name: Appointment letters and induction pack for members
              description: |-
                ## Purpose
                New members, family or independent, often join with no idea of their term, their duties or what the portfolio looks like. A standard appointment letter and an induction pack with the key documents shorten the time before a new member can contribute from a year to a single meeting.

                ## Milestones
                1. A template appointment letter covering term, duties, confidentiality, time commitment and any fee.
                2. An induction pack with the terms of reference, investment policy statement, delegated authority matrix, last four sets of minutes and the latest portfolio report.
                3. A one-hour briefing with the chair and the head of office offered to each new member.
                4. Every current member holding a signed letter.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every committee member holds a signed appointment letter and the induction pack exists as a single file ready for the next new member."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the family's lawyer for a template board appointment letter to adapt"
                - "Gather the six documents for the induction pack into one file"
                - "Issue letters to current members who joined without one"
                - "Book an induction briefing for the next member who joins"
            - name: Investment committee decision register
              description: |-
                ## Purpose
                Minutes record discussion, but families need a single list of what was actually approved, rejected or deferred, with dates and conditions. A decision register lets the committee see at a glance whether conditions were met, whether a deferred item came back and how often the office's recommendations are changed.

                ## Milestones
                1. A register with columns for date, paper number, decision, amount, conditions, owner and status.
                2. Every decision from the last two years entered from the minutes.
                3. Conditions attached to approvals tracked until they are met.
                4. The register reviewed at the start of each meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A decision register holding every committee decision for at least two years, with open conditions marked, is reviewed at each meeting."
                cadence: rolling
              tasks:
                - "Create the register with date, paper, decision, amount, conditions, owner and status"
                - "Enter every decision from the last two years of minutes"
                - "Update the register with new decisions and conditions met @recurring(monthly:23)"
                - "Add a register review as the second item on every agenda"
            - name: Inaugural family investment committee meeting
              description: |-
                ## Purpose
                The first meeting sets the tone for years: whether papers arrive on time, whether independent members speak freely and whether decisions are minuted properly. Planning it as a deliberate event, with a short agenda of foundation items rather than live investment decisions, gives the committee a clean start.

                ## Milestones
                1. A date agreed by all members and papers issued ten days ahead.
                2. Terms of reference, conflicts declarations and the delegated authority matrix formally noted.
                3. The portfolio briefed by the head of office or lead adviser against the investment policy statement.
                4. Minutes approved and the meeting dates for the next twelve months fixed.

                ## Notes
                Resist adding a big investment decision to the first agenda. Members need one meeting to learn the portfolio before they are asked to approve anything significant.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first committee meeting is held with papers issued ten days ahead, approved minutes and a fixed calendar for the next four meetings."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Send three possible dates to all members and confirm one"
                - "Draft a five-item agenda limited to foundation matters and a portfolio briefing"
                - "Issue the papers ten days before the meeting"
                - "Fix the next four meeting dates before the meeting closes"
            - name: Quarterly investment committee meeting cycle
              description: |-
                ## Purpose
                Most family committees settle on four meetings a year, timed a few weeks after quarter-end so the portfolio report is ready. Running each quarter the same way, with fixed steps from agenda to minutes, means members know what to expect and the office can plan its reporting around the committee rather than scrambling.

                ## Milestones
                1. Four meeting dates set a year ahead, each three to five weeks after quarter-end.
                2. A standing agenda covering decisions register, portfolio and policy compliance, recommendations, risk and any other business.
                3. A countdown from agenda to papers to meeting to minutes written down with owners.
                4. Four consecutive meetings held to the cycle.

                ## Notes
                Start from the **Board meeting** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly meetings held on their planned dates, each following the standing agenda and countdown."
                cadence: rolling
              tasks:
                - "Write the standing agenda with the five fixed items"
                - "Set the countdown from agenda draft to minutes with an owner for each step"
                - "Hold the quarterly investment committee meeting @recurring(quarterly)"
                - "Note at the end of each meeting one thing to change in the cycle"
            - name: Committee pack issued ten days ahead
              description: |-
                ## Purpose
                Papers that arrive the night before guarantee that independent members skim and family members defer. A firm rule that the full pack goes out ten days ahead, with a one-page summary on top, gives everyone time to read, ask the office questions in advance and arrive ready to decide.

                ## Milestones
                1. A pack order agreed: summary page, agenda, decision register, portfolio report, papers for decision, papers for noting.
                2. A cut-off date for the office and advisers to submit papers, two weeks before the meeting.
                3. Late papers either deferred or clearly marked as tabled late.
                4. Three consecutive packs issued at least ten days ahead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive committee packs issued at least ten days before the meeting, each with a one-page summary on top."
                cadence: rolling
              tasks:
                - "Agree the pack order and the one-page summary format with the secretary"
                - "Tell the office and advisers the paper cut-off two weeks before each meeting"
                - "Issue the committee pack ten days before the meeting @recurring(quarterly)"
                - "Ask members after the meeting whether the pack was the right length"
            - name: Minutes and resolutions within five working days
              description: |-
                ## Purpose
                Minutes written a month later lose the reasons behind decisions, and those reasons are exactly what a trustee, auditor or future generation will ask about. Drafting minutes within five working days, recording resolutions word for word and the main reasons in a few lines, keeps the record honest while memories are fresh.

                ## Milestones
                1. A minutes format with attendance, conflicts declared, resolutions in exact words, reasons and actions.
                2. Draft minutes sent to the chair within three working days.
                3. Minutes circulated to members within five working days and approved at the next meeting.
                4. Signed minutes filed and decisions copied to the decision register.

                ## Notes
                Start from the **Meeting notes** template. Record the reasoning, not a transcript.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Minutes for the last three meetings were circulated within five working days and approved and signed at the following meeting."
                cadence: rolling
              tasks:
                - "Set up a minutes format with resolutions, reasons, conflicts and actions"
                - "Send draft minutes to the chair within three working days of each meeting"
                - "Circulate approved draft minutes to all members by day five"
                - "File the signed minutes and update the decision register"
            - name: Committee action log between meetings
              description: |-
                ## Purpose
                Quarterly committees lose a lot in the twelve weeks between meetings: the office forgets to get a legal opinion, an adviser never sends the fee schedule. A single action log with owners and dates, checked monthly by the secretary, makes sure the next meeting starts with progress rather than apologies.

                ## Milestones
                1. One action log with action, owner, date agreed, due date and status.
                2. Actions from every meeting entered within a week.
                3. Overdue actions chased monthly by the secretary.
                4. Fewer than two actions carried over unchanged for two meetings running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An action log is checked monthly and no more than two actions have been carried over unchanged across two consecutive meetings."
                cadence: rolling
              tasks:
                - "Create the action log with owner, due date and status columns"
                - "Enter the actions from the last meeting's minutes"
                - "Chase every overdue action by email @recurring(monthly:9)"
                - "Put the action log in the pack as a one-page summary"
            - name: Rolling annual committee agenda calendar
              description: |-
                ## Purpose
                Some items belong at a set point in the year: the strategy review, the investment policy statement check, declarations of interest, fee reviews, the self-assessment. Spreading them across four meetings on a twelve-month calendar stops one meeting being overloaded and stops annual items being quietly skipped.

                ## Milestones
                1. Every annual item listed with the meeting it belongs to.
                2. No single meeting carrying more than two annual items.
                3. The calendar placed at the back of every pack.
                4. A full year completed with every annual item covered.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A twelve-month agenda calendar exists and every annual item on it was covered in the last full year."
                cadence: cyclic
              tasks:
                - "List every item the committee must cover once a year"
                - "Assign each annual item to one of the four meetings"
                - "Roll the calendar forward and check nothing was skipped @recurring(yearly)"
            - name: Policy limits compliance check for each meeting
              description: |-
                ## Purpose
                The investment policy statement sets ranges and limits, but nobody benefits if the committee only discovers a breach a year later. A short compliance page in every pack, showing each allocation and limit against its range and flagging breaches with an explanation, turns the policy into something the committee actually monitors.

                ## Milestones
                1. Every range, limit and restriction in the investment policy statement listed in one table.
                2. The office or adviser asked to report each one against the current position for every meeting.
                3. A breach rule agreed: report, explain, and propose either a remedy or a temporary waiver.
                4. Four consecutive packs containing the compliance page.

                ## Notes
                The committee checks against the policy; changes to the policy itself go through the annual review and the family council.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each of the last four committee packs contained a compliance page and every breach shown was minuted with a remedy or waiver."
                cadence: rolling
              tasks:
                - "Extract every range and limit from the investment policy statement into a table"
                - "Ask the office to report each limit against the current position for every pack"
                - "Check the month-end positions against the policy limits and note any breach @recurring(monthly:14)"
                - "Minute each breach with the remedy or waiver agreed"
            - name: Written resolutions between meetings
              description: |-
                ## Purpose
                Capital calls, a time-limited co-investment or a manager closing a fund sometimes need a decision before the next quarterly meeting. A written resolution procedure, with a minimum notice period, a voting deadline and a rule for when a call is needed instead, lets the committee decide properly at speed rather than by a string of text messages.

                ## Milestones
                1. A procedure stating which decisions may be taken by written resolution and which always need a meeting.
                2. A standard resolution form with the paper attached, a vote line and a deadline.
                3. A rule that any member can ask for a call instead, and that conflicts are still declared.
                4. Each written resolution ratified in the next meeting's minutes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written resolution procedure is adopted and every resolution passed under it in the last year was ratified in the following minutes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the decisions that may never be taken by written resolution"
                - "Draft a one-page resolution form with vote line and deadline"
                - "Agree a minimum notice of three working days unless all members waive it"
                - "Add ratification of written resolutions as a standing agenda item"
            - name: Recommendation memo standard for the committee
              description: |-
                ## Purpose
                Recommendations that arrive as glossy manager decks make it hard to see what is actually being asked. A standard two or three page memo from the office or adviser, stating the decision sought, the amount, the fit with the policy, the main risks, the alternatives considered and any conflicts, gives the committee the same shape of question every time.

                ## Milestones
                1. A memo template with sections for decision sought, amount, policy fit, risks, alternatives, fees, conflicts and exit.
                2. The template agreed with the office and the family's advisers.
                3. Manager materials moved to an appendix rather than the main paper.
                4. Every recommendation in two consecutive packs using the template.

                ## Notes
                Ask for the case against as well as the case for. A memo with no stated risks is a sales document.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every recommendation in the last two committee packs followed the agreed memo template, including a risks and alternatives section."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to draft a three-page recommendation memo template from the eight sections"
                - "Review the template with the head of office and the lead adviser"
                - "Send the agreed template to everyone who writes papers for the committee"
                - "Return any recommendation that arrives without risks and alternatives"
            - name: Annual declarations of interest round
              description: |-
                ## Purpose
                Interests change: a member joins a fund's advisory board, a child goes to work for a bank, an independent member takes a new role. A yearly round of fresh declarations, plus a standing item at each meeting, keeps the conflicts register current instead of frozen at the day each member joined.

                ## Milestones
                1. A conflicts register listing each member's declared interests and the date declared.
                2. Fresh declarations collected from every member each year.
                3. A standing first agenda item asking for new conflicts on today's papers.
                4. Register changes reported to the chair within a week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every member has signed a declaration within the last twelve months and each meeting's minutes record the conflicts item."
                cadence: cyclic
              tasks:
                - "Set up the conflicts register from the declarations already signed"
                - "Collect fresh signed declarations from every member @recurring(yearly)"
                - "Add a declarations item at the top of every agenda"
            - name: Committee report to the family council
              description: |-
                ## Purpose
                Family members outside the committee often feel shut out of decisions about money that is partly theirs, and rumours fill the gap. A short, plain-language report to the family council after each meeting, covering decisions made, the portfolio's position against its objectives and what is coming next, builds trust without sharing confidential detail.

                ## Milestones
                1. A one or two page report format agreed with the council chair.
                2. Rules on what is shared and what stays confidential, such as manager terms and named deals.
                3. A report sent within three weeks of each committee meeting.
                4. One council meeting each year where the committee chair takes questions in person.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A report reached the family council within three weeks of each of the last four committee meetings."
                cadence: rolling
              tasks:
                - "Agree the report format and confidentiality rules with the council chair"
                - "Draft the council report from the approved minutes @recurring(quarterly)"
                - "Book the yearly question session with the family council"
            - name: Annual committee self-assessment
              description: |-
                ## Purpose
                Committees rarely notice their own habits: meetings that overrun, one voice dominating, papers no one reads. A short yearly self-assessment, each member scoring the committee and adding comments anonymously, gives the chair evidence to change things and a record that the committee reviews itself.

                ## Milestones
                1. A questionnaire of ten to fifteen questions on papers, discussion, decisions, independence and the chair.
                2. Answers collected anonymously by the secretary or an outside adviser.
                3. Results discussed at a meeting and three changes agreed.
                4. Progress on last year's changes reported before the next round.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A self-assessment was completed by every member in the last year and three agreed changes were minuted."
                cadence: cyclic
              tasks:
                - "Write a twelve-question self-assessment covering papers, debate and decisions"
                - "Send the self-assessment to every member for anonymous answers @recurring(yearly)"
                - "Agree three changes at the meeting that discusses the results"
                - "Report progress on the three changes before the next round"
            - name: Reading a recommendation memo critically
              description: |-
                ## Purpose
                Family members new to the committee often read a recommendation and look only for whether the adviser sounds confident. Learning to read for the real questions, what the policy says, what could go wrong, what it costs, what else was considered and who benefits, lets a member contribute without being an investment professional.

                ## Milestones
                1. A personal checklist of eight questions to ask of any recommendation.
                2. Three past recommendations reread with the checklist.
                3. The checklist discussed with an independent member or the chair.
                4. Questions sent to the office ahead of the next meeting using the checklist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written eight-question checklist has been applied to three past recommendations and used for pre-meeting questions at least once."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write eight questions you would want answered before approving any investment"
                - "Reread three past recommendation memos using the questions"
                - "Discuss your checklist with the chair or an independent member"
                - "Send your questions to the office before the next meeting"
            - name: Asking good questions in committee
              description: |-
                ## Purpose
                Often the most useful committee members are rarely those who know the most; they are the ones who ask the question everyone else was thinking. Practising open, specific questions, and learning when to ask in advance rather than in the room, helps quieter family members and retirees speak up without feeling they are attacking the office.

                ## Milestones
                1. A short list of question types: clarifying, testing assumptions, asking about downside and asking about alternatives.
                2. Two questions prepared in writing before each of two meetings.
                3. Feedback asked from the chair on how the questions landed.
                4. At least one question asked in each meeting attended.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Two prepared questions were written before each of two consecutive meetings and at least one was asked in each."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write one example question for each of the four question types"
                - "Prepare two written questions from the next committee pack"
                - "Ask the chair afterwards how your questions came across"
            - name: Investment terms glossary for family members
              description: |-
                ## Purpose
                Packs full of terms such as tracking error, hurdle rate, drawdown and capital call keep less experienced family members silent. A plain-language glossary of the forty terms that actually appear in this committee's papers, kept with the pack, means everyone can follow the discussion and ask about substance rather than vocabulary.

                ## Milestones
                1. Forty terms collected from the last four committee packs.
                2. Each term explained in one or two plain sentences, checked by the office or an adviser.
                3. The glossary attached to every pack and given to new members.
                4. New terms added whenever a member asks about one.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A glossary of at least forty terms from recent packs, checked by the office, is attached to every committee pack."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Highlight every unfamiliar term in the last four committee packs"
                - "Ask the agent to draft plain explanations for the forty most common terms"
                - "Have the head of office check the explanations for accuracy"
                - "Attach the glossary to the next committee pack"
            - name: Duties and prudent process for committee members
              description: |-
                ## Purpose
                Where the committee advises trustees or company directors, its members may carry responsibilities they have never had explained. Learning in general terms what a prudent decision process looks like, documented reasons, considered alternatives, managed conflicts, and asking the family's lawyer how duties apply in your structures, protects members and the family.

                ## Milestones
                1. A briefing from the family's lawyer on how the committee's role fits trust and company duties in your structures.
                2. A one-page note of the process elements a reviewer would expect to see in the minutes.
                3. The committee's last four decisions checked against that note.
                4. Gaps in process fixed in the minutes format or the memo standard.

                ## Notes
                This is about process, not legal conclusions. Duties differ by country and by structure, so the lawyer's view for your structures is what counts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lawyer's briefing has been held and a one-page process note exists, with the last four decisions checked against it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the family's lawyer for a one-hour briefing on committee members' responsibilities"
                - "Write a one-page note of the process a reviewer would expect to see"
                - "Check the last four decisions in the minutes against the note"
                - "Propose changes to the minutes format where the process was not recorded"
            - name: Understanding the committee's risk report
              description: |-
                ## Purpose
                Risk pages are often the least read part of the pack, even though concentration, currency exposure and liquidity are where family portfolios most often get hurt. Learning what each measure on your own risk report means, and what it cannot tell you, lets members ask whether the portfolio could survive the family's real cash needs in a bad year.

                ## Milestones
                1. Each measure on the current risk report explained by the office or adviser in a short session.
                2. A note of what each measure shows and what it misses.
                3. Two questions on risk sent ahead of each meeting for two quarters.
                4. A request made to change or drop any measure members cannot use.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note explains every measure on the risk report and two rounds of risk questions have been sent ahead of meetings."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the office for a one-hour walk-through of the risk report"
                - "Write what each risk measure shows and what it misses"
                - "Read the latest risk report and send two questions to the office @recurring(monthly:17)"
            - name: Private markets basics for committee members
              description: |-
                ## Purpose
                Private equity, private credit and real estate funds behave differently from listed portfolios: money is committed now and called over years, valuations lag and early returns usually look poor. Members who understand commitments, capital calls, the J-curve and fund terms make better decisions about pacing and stop being surprised by cash calls.

                ## Milestones
                1. A short course, reading list or adviser session completed on how private funds work.
                2. One of the family's existing fund commitments traced from commitment to calls and distributions.
                3. Key fund terms understood: term, fees, carried interest, key person and transfer rules.
                4. Questions on pacing raised at the next meeting with a private commitment on the agenda.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One existing fund commitment has been traced from commitment to distributions and pacing questions were raised at a meeting."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the office for the capital account statement of one existing fund commitment"
                - "Trace that commitment from first call to latest distribution"
                - "List the five fund terms you would check before any new commitment"
                - "Raise a pacing question at the next meeting with a private commitment"
            - name: Group decision biases in family committees
              description: |-
                ## Purpose
                Family committees are especially prone to deferring to the founder, following whatever performed well last year and sticking with a manager because changing feels disloyal. Learning the common group biases, and agreeing a few simple countermeasures such as the most junior member speaking first, improves decisions without anyone needing to be an expert.

                ## Milestones
                1. The committee briefed on five common group decision biases, with family examples.
                2. Three countermeasures agreed, such as junior members speaking first or a named devil's advocate.
                3. Countermeasures used for two meetings.
                4. The effect discussed at the annual self-assessment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three agreed countermeasures to group bias were used in two consecutive meetings and reviewed in the self-assessment."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a short guide on group decision biases and pick five that fit your family"
                - "Write a family example for each of the five biases"
                - "Propose three countermeasures to the chair for the next two meetings"
            - name: Outsourced CIO or in-house support for the committee
              description: |-
                ## Purpose
                Every committee needs someone to prepare recommendations, monitor managers and implement decisions: an internal investment team, an outsourced chief investment officer or a lead adviser. Comparing these models on cost, independence, the committee's workload and who holds discretion helps the family choose a support model the committee can actually oversee.

                ## Milestones
                1. The three support models described with what each would mean for the committee's role.
                2. Indicative costs gathered for each model from the office budget and two providers.
                3. Independence and conflicts compared, including product sales and fee sharing.
                4. A recommendation to the family council with the committee's reasoning minuted.

                ## Notes
                Choosing and overseeing the provider itself sits with adviser and manager oversight. This project is about which model fits the committee.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of three support models with costs and conflicts is minuted with the committee's recommendation to the council."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Describe in one paragraph each what the committee would do under the three models"
                - "Ask two providers for indicative costs of an outsourced CIO service"
                - "Compare the conflicts each model would bring"
                - "Minute the committee's recommendation and send it to the council"
            - name: Voting rules, quorum and casting vote
              description: |-
                ## Purpose
                Most families prefer consensus until the day they cannot reach it. Deciding in advance how votes work, the quorum, whether independent members vote on everything, whether the chair has a casting vote and whether any family seat holds a veto, means a split committee still reaches a decision that everyone accepts as legitimate.

                ## Milestones
                1. A quorum agreed, including how many family and independent members must be present.
                2. A voting rule chosen: consensus with majority fallback, simple majority or a weighted rule.
                3. Any vetoes or reserved votes written down with the reason.
                4. The rules added to the terms of reference and approved by the council.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Quorum, voting rule and any vetoes are written into the terms of reference and approved by the family council."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down how the last disputed decision was resolved"
                - "Compare consensus, majority and weighted voting for your committee size"
                - "Agree a quorum that requires at least one independent member"
                - "Send the voting rules to the council with the terms of reference"
            - name: Independent member pay and terms
              description: |-
                ## Purpose
                Experienced independent members expect to be paid and to know when their term ends, and families that underpay tend to get advisers looking for business instead. Setting a fee, expenses rules, a term such as three years renewable once, and a review process keeps good independents and makes it easy to refresh the seat.

                ## Milestones
                1. Market fees for comparable family or charity investment committees gathered from two or three sources.
                2. A fee, expenses rule and term length agreed.
                3. A renewal process with a conversation with the chair before each term ends.
                4. Terms reflected in every independent member's appointment letter.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written fee, expenses and term rules for independent members are reflected in every independent appointment letter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask a governance adviser what comparable committees pay independent members"
                - "Agree the fee, expenses rule and term length with the chair"
                - "Update the independent members' appointment letters"
                - "Check which independent terms end in the next twelve months @recurring(yearly)"
            - name: Hybrid meeting and remote attendance rules
              description: |-
                ## Purpose
                Any committee with members in Toronto, London and Barbados is going to meet partly on video whatever the rules say, so it is better to have rules. Agreeing when remote attendance counts toward quorum, how documents are shared, how confidential items are handled on calls and when a meeting must be in person keeps decisions valid and discussions equal.

                ## Milestones
                1. A rule on whether remote members count toward quorum and vote.
                2. A standard video platform and a rule against forwarding meeting links.
                3. Meeting times chosen to rotate the inconvenience across time zones.
                4. At least one in-person meeting a year agreed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written hybrid meeting rules are adopted and the next four meetings followed them, with one held in person."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List where each member lives and their usual working hours"
                - "Draft quorum and voting rules for remote attendance"
                - "Choose a meeting slot pattern that rotates the inconvenience"
                - "Fix the in-person meeting for the coming year"
            - name: Secure board portal for committee papers
              description: |-
                ## Purpose
                Committee packs sent as email attachments end up on personal devices, forwarded to spouses and kept long after a member leaves. A board portal with access control, read-only papers and the ability to remove a departing member's access is a modest cost that matches the sensitivity of what the committee reads.

                ## Milestones
                1. Requirements written: access control, offline reading, annotations, removal of access and storage location.
                2. Three portals compared on requirements, cost and security certifications.
                3. One chosen and set up, with existing papers migrated.
                4. Two packs issued through the portal and email attachments stopped.

                ## Notes
                Start from the **Purchase decision** template. Agree the choice with whoever runs the family office's wider systems so the portal fits them.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board portal is chosen against written requirements and the last two committee packs were issued through it with no attachments."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the six requirements a board portal must meet"
                - "Compare three board portals against the requirements"
                - "Set up the chosen portal and move the last year of papers into it"
                - "Issue the next pack through the portal only"
            - name: Sub-committees for private markets and direct deals
              description: |-
                ## Purpose
                As private commitments and direct investments grow, quarterly meetings can be swamped by deal papers while the overall portfolio gets ten minutes. A small sub-committee with delegated limits can do the detailed work and bring a short recommendation to the full committee, provided its remit and reporting are written down.

                ## Milestones
                1. A review of the last four agendas showing time spent on deal papers versus the whole portfolio.
                2. A decision on whether a sub-committee is needed, minuted with reasons.
                3. If yes, terms of reference with membership, limits and reporting to the full committee.
                4. The first sub-committee recommendation brought to a full meeting.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A minuted decision on a sub-committee exists and, if formed, its terms of reference and first report to the full committee are on file."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Count the minutes spent on deal papers in the last four meetings"
                - "Put the question of a sub-committee on the next agenda"
                - "Draft sub-committee terms with membership, limits and reporting if agreed"
            - name: Recording dissent and minority views
              description: |-
                ## Purpose
                When a family member votes against a decision and the minutes say only that it was approved, the disagreement resurfaces later as a grievance. Recording dissent briefly and fairly, and letting a member add a short written note, shows the view was heard and gives future reviewers the full picture.

                ## Milestones
                1. A rule that any member may ask for their dissent and reason to be minuted.
                2. A limit on written dissent notes, such as half a page, attached to the minutes.
                3. The chair's practice of asking for dissent before each vote.
                4. The rule used at least once without it becoming a dispute.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dissent rule is written into the minutes standard and the chair asks for dissent before every recorded vote."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a three-line dissent rule for the minutes standard"
                - "Agree the half-page limit for written dissent notes"
                - "Ask the chair to invite dissent before each vote at the next meeting"
            - name: Annual strategy and allocation review meeting
              description: |-
                ## Purpose
                Quarterly meetings deal with what is in front of them; once a year the committee needs a longer meeting about whether the portfolio still serves the family's goals. A dedicated half-day with the adviser's review of strategic allocation, long-term returns against objectives and the family's changing needs keeps the committee from managing quarter to quarter.

                ## Milestones
                1. A half-day meeting fixed in the annual calendar, separate from a quarterly meeting.
                2. Papers covering long-term results against objectives, the strategic allocation and changes in family circumstances.
                3. The adviser's recommendations heard and the committee's conclusions minuted.
                4. Any proposed policy change sent to the investment policy statement review.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual strategy meeting was held in the last twelve months with minuted conclusions and any proposed policy change referred on."
                cadence: cyclic
              tasks:
                - "Fix a half-day for the annual strategy review @recurring(yearly)"
                - "Ask the office for a list of family changes since last year, such as births, moves and sales"
                - "Brief the adviser on the questions the committee wants answered"
            - name: Extraordinary meeting after a sharp market fall
              description: |-
                ## Purpose
                A sudden fall sends family members to the phone and tempts committees into decisions they would never make on a calm day. Agreeing in advance what triggers an extraordinary meeting, who can call it and what the first meeting should cover, mostly facts, liquidity and policy compliance, helps the committee respond calmly and on the record.

                ## Milestones
                1. A trigger written down, such as a fall beyond an agreed amount or a liquidity strain, and who may call the meeting.
                2. A standard agenda: facts, liquidity against family needs, policy limits, and any actions under delegated authority.
                3. A family communication drafted for the council after the meeting.
                4. A short review afterwards of what worked and what to change.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written trigger, standard agenda and family communication outline for an extraordinary meeting are approved by the committee."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree with the chair what market or liquidity event triggers an extraordinary meeting"
                - "Write the four-item standard agenda for that meeting"
                - "Draft the outline of the message to the family council afterwards"
                - "Add the trigger and agenda to the committee's terms of reference"
            - name: Two-day investment committee offsite
              description: |-
                ## Purpose
                Some questions never fit a quarterly agenda: whether the committee has the right members, how the family's goals are changing, what the next generation wants. A yearly or every-other-year offsite, with a facilitator, time with advisers and no routine approvals, gives the committee room to think and members time to get to know each other.

                ## Milestones
                1. Three or four themes chosen with the chair and a facilitator.
                2. Venue, dates and attendance fixed, including any guests such as next-generation observers.
                3. Sessions held with written outputs for each theme.
                4. Agreed actions added to the action log and reported to the family council.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An offsite was held with written outputs on each theme and its actions added to the committee action log."
                cadence: cyclic
              tasks:
                - "Ask each member for one question they want time to think about"
                - "Choose three themes and a facilitator with the chair"
                - "Book the offsite venue and dates for the coming year @recurring(yearly)"
                - "Add the offsite actions to the action log"
            - name: Annual investment policy review recommendation
              description: |-
                ## Purpose
                The committee lives with the investment policy statement every quarter, so it is best placed to say where it no longer fits, even though the council or trustees approve changes. A yearly review that lists breaches, waivers and changed circumstances and sends a clear recommendation keeps the policy alive without the committee rewriting it on its own authority.

                ## Milestones
                1. A list of every breach, waiver and policy question raised in the last year.
                2. Changes in family circumstances that affect the policy noted.
                3. A recommendation memo to the council or trustees: no change, or specific changes with reasons.
                4. The response recorded and any approved change reflected in the compliance page.

                ## Notes
                Drafting the policy itself is a separate piece of work with the family's advisers. The committee's job here is to recommend.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A recommendation on the investment policy statement was sent to the council or trustees within the last twelve months and their response is minuted."
                cadence: cyclic
              tasks:
                - "Pull every breach and waiver from the last year's minutes"
                - "Draft the policy review recommendation to the council @recurring(yearly)"
                - "Update the compliance page for any change the council approves"
            - name: Annual tax and structuring briefing to the committee
              description: |-
                ## Purpose
                Investment decisions inside trusts, holding companies and personal accounts can carry very different tax and reporting effects, and committees often learn about them after the fact. A yearly briefing from the family's tax adviser on how each structure is treated, and which decisions need their sign-off first, keeps recommendations workable without the committee giving itself tax advice.

                ## Milestones
                1. The tax adviser invited and given the list of structures the committee oversees.
                2. A briefing held covering how investment income and gains are treated in each structure in general terms.
                3. A list of decision types that need tax sign-off before approval.
                4. That list added to the recommendation memo standard.

                ## Notes
                The briefing informs the committee's process. Specific tax questions go back to the adviser in writing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tax briefing was held in the last twelve months and the decision types needing tax sign-off are listed in the memo standard."
                cadence: cyclic
              tasks:
                - "Send the tax adviser the chart of structures the committee oversees"
                - "Book the annual tax and structuring briefing @recurring(yearly)"
                - "List the decision types that need tax sign-off before approval"
            - name: Next-generation observer seat on the committee
              description: |-
                ## Purpose
                Parents who want their adult children ready for committee work one day get further by letting them watch real meetings than by any course. An observer seat with clear rules on confidentiality, speaking and preparation, plus a debrief with a mentor after each meeting, lets a young adult learn how investment decisions are actually made.

                ## Milestones
                1. Eligibility rules agreed, such as minimum age and completion of a basic education step.
                2. An observer agreement covering confidentiality, attendance and speaking rights.
                3. A mentor from the committee assigned to each observer.
                4. Debriefs held after at least three meetings and a view taken on next steps.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "An observer with a signed agreement and an assigned mentor has attended and been debriefed after three meetings."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree the observer eligibility rules with the family council"
                - "Draft a one-page observer agreement on confidentiality and speaking rights"
                - "Ask one committee member to mentor the observer"
                - "Hold a thirty-minute debrief with the observer after each meeting @recurring(quarterly)"
            - name: Handing over the chair as a retiring founder
              description: |-
                ## Purpose
                Founders who built the wealth often chair the committee for decades, and the handover is usually left until illness forces it. Planning a staged handover, with a successor chosen on merit, a year of shared preparation and a clear role for the founder afterwards, protects the founder's dignity and the committee's authority.

                ## Milestones
                1. A target handover date and the qualities needed in the next chair written down.
                2. A successor agreed, family or independent, with the family council's support.
                3. A year in which the successor chairs some meetings with the founder present.
                4. The founder's role after handover settled, such as emeritus member, adviser or observer.

                ## Notes
                An independent chair for a transition period can take the heat out of choosing between siblings.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new chair is in place after a planned handover year and the founder's continuing role is written into the terms of reference."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the five qualities the next chair needs"
                - "Talk privately with the council chair about candidates and timing"
                - "Agree which meetings the successor will chair in the handover year"
                - "Write the founder's role after handover into the terms of reference"
            - name: Committee continuity on death or incapacity of a member
              description: |-
                ## Purpose
                When a senior family member dies or loses capacity, the committee may suddenly lose its quorum, its chair or the person who signed instructions. Planning for that now, with alternates, a quorum fallback and links to powers of attorney and trust arrangements, means investment decisions do not freeze during the family's worst months.

                ## Milestones
                1. A list of which committee roles would leave a gap if their holder were suddenly unavailable.
                2. Alternates or a quorum fallback written into the terms of reference.
                3. The interaction with powers of attorney, trustees and bank mandates checked with the family's lawyer.
                4. A short continuity note held by the secretary and the head of office.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The terms of reference include alternates or a quorum fallback and a continuity note checked by the family's lawyer is held by the secretary."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every committee role whose sudden absence would stop decisions"
                - "Draft alternates or a quorum fallback for the terms of reference"
                - "Ask the family's lawyer how powers of attorney and bank mandates interact with the committee"
                - "Give the continuity note to the secretary and the head of office"
            - name: Committee governance after a family business sale
              description: |-
                ## Purpose
                Selling the operating business can turn a family with one illiquid asset into a family with a large pool of cash and many opinions overnight. Strengthening the committee before or just after the money arrives, with interim rules for holding cash, a deployment plan approved in stages and extra independent expertise, avoids rushed decisions under pressure from banks keen to win the mandate.

                ## Milestones
                1. Interim rules agreed for where sale proceeds sit until the committee approves a plan.
                2. Extra independent expertise added, at least temporarily.
                3. A staged deployment plan prepared with advisers and approved by the committee.
                4. Bank and manager pitches handled through the recommendation memo standard rather than direct to family members.

                ## Notes
                Expect a wave of approaches to individual family members. Agree early that all pitches are routed to the office.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Interim holding rules and a staged deployment plan are approved by the committee and all provider approaches are routed through the office."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Agree with the chair where proceeds will sit until a plan is approved"
                - "Tell every family member that bank and manager approaches go to the office"
                - "Ask the office to prepare a staged deployment paper with advisers"
                - "Consider a temporary extra independent member for the deployment period"
            - name: Branch requests for separate portfolio sleeves
              description: |-
                ## Purpose
                As families grow, branches with different ages, needs and values may ask for their own portfolio within the family structure. Deciding how the committee responds, whether sleeves are allowed, who oversees them and how costs and reporting work, prevents one branch's request from turning into a fight about fairness.

                ## Milestones
                1. The branches' requests and reasons written down without judgement.
                2. Options compared: one pooled portfolio, pooled with branch sleeves, or separate structures.
                3. Effects on cost, oversight, tax and fairness checked with advisers.
                4. A decision minuted and explained to every branch.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A minuted decision on branch sleeves, with the options compared and advisers' input recorded, has been explained to every branch."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write down each branch's request and its reasons"
                - "Compare a pooled portfolio, branch sleeves and separate structures"
                - "Ask advisers for the cost, tax and oversight effects of each option"
                - "Explain the decision in writing to every branch"
            - name: Lean committee for a smaller family
              description: |-
                ## Purpose
                Not every family has an office, staff or ten members to fill a committee, yet a retired couple with adult children still benefits from a regular, recorded investment conversation. A lean version, three people including one outside voice, two meetings a year, a one-page agenda and short minutes, gives most of the discipline at a fraction of the effort.

                ## Milestones
                1. Three members agreed, with at least one person who is not a family member or a product seller.
                2. Two meetings a year fixed with the family's adviser presenting.
                3. A one-page agenda and a one-page minutes format in use.
                4. Two meetings held and minuted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A three-member committee including an outside voice has held and minuted two meetings in twelve months."
                cadence: rolling
              tasks:
                - "Choose the outside member, such as a retired professional the family trusts"
                - "Write a one-page agenda and a one-page minutes format"
                - "Book the two meetings with the family's adviser for the coming year"
            - name: Direct and co-investment stage gates
              description: |-
                ## Purpose
                Direct deals and co-investments are where family committees most often skip their own process, because a founder friend is involved or the deadline is next week. A stage-gate process, from first look to final approval, with set papers, outside diligence and a cooling-off step at each gate, keeps enthusiasm from replacing scrutiny.

                ## Milestones
                1. Gates defined, for example first screen, detailed review and final approval, with who decides at each.
                2. Required papers and outside diligence listed for each gate.
                3. A rule on minimum time between final papers and the approval vote.
                4. The next direct opportunity taken through every gate and the record filed.

                ## Notes
                A no at the first gate is a good outcome. Track how many opportunities stop there; a committee that approves everything is not screening.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written stage-gate process is adopted and the next direct or co-investment opportunity has a complete gate-by-gate record."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the three gates and who decides at each"
                - "List the papers and outside diligence needed at each gate"
                - "Agree a minimum gap between final papers and the approval vote"
                - "Keep a count of opportunities stopped at each gate"
            - name: Values-aligned investing preferences for the committee
              description: |-
                ## Purpose
                Families often disagree about whether to exclude certain industries or seek positive impact, and those preferences reach the committee as one-off objections to particular funds. Gathering the family's preferences, agreeing which become binding restrictions and which are preferences, and asking advisers how they can be applied gives the committee a consistent position.

                ## Milestones
                1. Preferences gathered from family members across generations through a short survey or meeting.
                2. A short list of binding exclusions and a separate list of preferences agreed.
                3. Advisers' view obtained on how each can be applied and at what likely cost.
                4. The agreed position sent to the investment policy review and reviewed yearly.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of binding exclusions and preferences, with advisers' implementation notes, has been agreed and referred to the policy review."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Send a five-question values survey to family members over eighteen"
                - "Sort the answers into possible exclusions and preferences"
                - "Ask advisers how each could be applied and what it might cost"
                - "Revisit the exclusions and preferences with the family @recurring(yearly)"
            - name: Related-party investment approvals
              description: |-
                ## Purpose
                Proposals to invest in a family member's company, the family's own operating business or a property a relative owns are the decisions most likely to strain relationships. A related-party rule, full disclosure, conflicted members stepping out, independent members deciding and terms checked against an outside benchmark, lets the family support its own ventures without accusations of favouritism.

                ## Milestones
                1. A definition of related parties covering family members, their companies and the family's operating businesses.
                2. An approval route requiring disclosure, conflicted members leaving and an independent majority deciding.
                3. A requirement for terms to be compared with an outside benchmark or valuation.
                4. A related-party register kept and reviewed each year.

                ## Notes
                Lending to family members is often better handled by a family bank with its own rules. This project covers equity and fund investments.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An adopted related-party rule with an independent approval route exists and the related-party register was reviewed within the last year."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every current investment that involves a family member or family business"
                - "Draft the related-party definition and approval route"
                - "Ask an independent member to review the draft rule"
                - "Review the related-party register at the committee @recurring(yearly)"
            - name: Committee stress-test and scenario exercise
              description: |-
                ## Purpose
                Committees discover how they would behave in a crisis only when one arrives. A yearly tabletop exercise, walking through scenarios such as a deep market fall, a large capital call during a liquidity squeeze or a manager failure, tests whether the policy, the delegated authority and the people hold up, and shows what to fix while things are calm.

                ## Milestones
                1. Three scenarios written with the office and an adviser, each tied to this family's real exposures.
                2. A two-hour exercise held with every member deciding as they would in reality.
                3. Gaps found recorded in a risk register with owners.
                4. Fixes reported at the next quarterly meeting.

                ## Notes
                Start from the **Risk register** template. Keep scenarios plausible for this portfolio; the point is the committee's response, not predicting markets.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A scenario exercise was held in the last year and every gap it found is in the risk register with an owner."
                cadence: cyclic
              tasks:
                - "Ask the office and an adviser to draft three scenarios from the family's exposures"
                - "Hold the two-hour committee scenario exercise @recurring(yearly)"
                - "Record each gap found in the risk register with an owner"
            - name: External review of committee governance
              description: |-
                ## Purpose
                After several years, committees develop blind spots that a self-assessment will not reveal, such as an independent member who has become too close or delegated limits that no longer match the portfolio. An outside governance review every three years or so, comparing the committee with good practice for family and endowment committees, gives the family an honest view and a short list of changes.

                ## Milestones
                1. A reviewer chosen who has no other business with the family.
                2. The reviewer given access to papers, minutes and interviews with every member.
                3. A written report with findings and recommendations.
                4. The committee's response minuted and agreed changes tracked to completion.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An external governance review report was received and the committee's minuted response shows each recommendation accepted, adapted or declined with reasons."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask two governance advisers for a proposal and confirm neither does other work for the family"
                - "Give the chosen reviewer two years of papers and minutes"
                - "Arrange a private interview between the reviewer and each member"
                - "Minute a response to each recommendation in the report"
---

# Family Investment Committee

This area is for the parents, senior family members and retirees who chair, sit on or set up a family investment committee, the body that hears recommendations from the office and its advisers and decides what gets approved. It starts with the foundations (terms of reference, seats for family and independent members, delegated authority, conflicts and the first meeting), then the meeting machinery, the skills a good member needs, decisions about how the committee is run, the dated events in its year, situations such as a business sale or a chair stepping down, and the specialist work of direct deals, related-party approvals and outside review.

The rhythm is quarterly: a pack ten days ahead, the meeting, minutes within a week and a short report to the family council, with monthly checks of the action log, the decision register and the policy limits in between, and a yearly cycle of strategy review, declarations of interest, self-assessment and a stress-test exercise. The Board meeting template suits the quarterly cycle, Meeting notes suits minutes, Skills matrix suits the seat mix, Purchase decision suits choosing a board portal and Risk register suits the scenario exercise. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
