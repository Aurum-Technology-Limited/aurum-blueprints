---
id: private-equity-vc.vc-board-seats
name: VC Board Seats
description: "A clear brief for every venture board seat you hold: the charter read as a director, duties to all shareholders, a working pact with the founder, steady meeting routines, and a calm process for down rounds and wind-downs."
category: business
version: 1.0.0
tags: [private-equity-vc, vc-board-seats, knowledge-worker, board-of-directors, fiduciary-duties, founders, down-rounds, startup-governance]
author: Aurum Technology
starter_structure:
  templates:
    - board-meeting
    - one-on-one
    - risk-register
    - meeting-notes
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: VC Board Seats
          description: "Holding a board seat in a venture-backed company: board meetings, approvals, the founder relationship, fiduciary duties and handling a down round or wind-down."
          projects:
            - name: Board seat brief for a new venture investment
              description: |-
                ## Purpose
                A board seat arrives at closing with little ceremony: a line in the voting agreement, a welcome email and a meeting six weeks away. Writing a one-page brief on how the seat was created, which class of stock elects it, who else sits on the board and what the founder expects from you sets the terms of the role before habits form.

                ## Milestones
                1. A one-page brief naming the seat, the electing class of shares and the clause that creates it.
                2. Every current director and observer listed with who appointed them.
                3. The founder's stated expectations of you written in their own words.
                4. The brief filed with the deal documents and shared with your partner.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page seat brief exists for the company, naming the electing class, every director and the founder's expectations, filed with the deal record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the board composition clause in the voting agreement from the closing set"
                - "List every director and observer with the party that appointed them"
                - "Ask the founder what they want and do not want from your seat"
                - "Write the one-page brief and send it to your partner for comment"
            - name: Charter and voting agreement read as a director
              description: |-
                ## Purpose
                As an investor you negotiated the term sheet; as a director you need to know what the signed documents actually say. Reading the charter, the voting agreement and the investor rights agreement with a director's eye shows which decisions need a board vote, which need a preferred majority, and where drag-along, information rights and protective provisions bite.

                ## Milestones
                1. The charter, voting agreement and investor rights agreement collected in their final signed form.
                2. Protective provisions listed with the class vote each one requires.
                3. Drag-along, right of first refusal and information rights summarised in plain words.
                4. Questions that the summary raised answered by company counsel.

                ## Notes
                Read the final executed versions, not the term sheet or a late draft. Amended and restated charters from each round replace the earlier ones.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-page summary of the charter and investor agreements exists, listing every protective provision and its approval threshold, with open questions answered by counsel."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask company counsel for the latest executed charter and investor agreements"
                - "List each protective provision with the vote it needs"
                - "Summarise drag-along, first refusal and information rights in plain words"
                - "Send your open questions to company counsel in one email"
            - name: Fiduciary duties of a fund-appointed director
              description: |-
                ## Purpose
                Once seated, you owe duties to the company and all its shareholders, including founders and employees holding common stock, and those duties can pull against what your fund would prefer. Learning the shape of the duties of care and loyalty, and where the dual role creates conflict, with your fund's counsel rather than from blog posts, prepares you for the votes where it matters.

                ## Milestones
                1. A briefing with fund counsel on director duties in the company's place of incorporation.
                2. A short note of the situations where fund and common interests are most likely to diverge.
                3. Your rule for when to seek independent advice or abstain, agreed with counsel.
                4. The note kept with your board seat brief.

                ## Notes
                This project organises your questions for counsel; it is not legal advice. Duties differ by jurisdiction and by company stage, and they can shift when a company nears insolvency.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note of duties and likely conflict points exists, written after a briefing with fund counsel, with an agreed rule for seeking advice or abstaining."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a 45-minute duties briefing with your fund's counsel"
                - "List the three votes where your fund and common holders could disagree"
                - "Write your rule for when to take separate advice or abstain"
                - "Refresh the duties briefing with counsel @recurring(yearly)"
            - name: D&O cover and indemnification check for a startup board
              description: |-
                ## Purpose
                Seed companies often run without directors and officers insurance until a lawsuit or a down round makes everyone ask. Checking that the company holds D&O cover, that you have a signed indemnification agreement, and how the fund's own policy sits behind the company's, takes an afternoon and protects you for the life of the seat.

                ## Milestones
                1. The company's D&O policy, limit and renewal date confirmed in writing.
                2. A signed indemnification agreement between you and the company on file.
                3. The fund's own management liability policy checked for how it responds to portfolio board claims.
                4. Any gap raised with the CEO and recorded with a fix date.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "D&O cover, an indemnification agreement and the fund policy position are confirmed in writing for this seat, with any gap logged and owned."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the CFO or CEO for the current D&O policy schedule"
                - "Check that your signed indemnification agreement is in your files"
                - "Ask your fund's operations lead how the fund policy covers board seats"
                - "Confirm the D&O renewal and limit before it lapses @recurring(yearly)"
            - name: Board versus stockholder approvals map
              description: |-
                ## Purpose
                Startups lose weeks at closing because nobody knew a decision needed a preferred class vote as well as a board vote. A one-page map of which actions need the board, which need stockholders, which need a specific series, and which can go by written consent lets you tell the founder early what a plan will take.

                ## Milestones
                1. A table of common actions such as new financings, option pool increases, debt, sale and new hires above a pay level.
                2. Each action marked with the board, stockholder and series approvals it needs.
                3. Actions that can be approved by written consent marked.
                4. The map checked by company counsel and shared with the CEO.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page approvals map covering at least ten common actions, checked by company counsel and shared with the CEO."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the ten actions this company is most likely to need approved this year"
                - "Mark each with the board and stockholder votes the documents require"
                - "Ask company counsel to correct the map"
                - "Share the corrected map with the CEO and the other directors"
            - name: Confidentiality walls between the seat and the fund
              description: |-
                ## Purpose
                Board information belongs to the company, and your fund may hold or be looking at a competitor. Agreeing what you may share with your partners, what stays inside the boardroom and how you handle a competing deal in your firm's pipeline protects the company, your fund and your own name.

                ## Milestones
                1. The confidentiality terms in the investor rights agreement and any board policy read.
                2. A written note of what you will and will not share with your fund.
                3. Competing or adjacent companies in the fund's portfolio and pipeline listed.
                4. Your recusal approach for competing deals agreed with your managing partner.

                ## Notes
                When in doubt, share conclusions, not documents. A fund's information sharing rights rarely cover passing board materials to other portfolio companies.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written sharing and recusal note for this seat exists, agreed with your managing partner and consistent with the company's confidentiality terms."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the confidentiality clause in the investor rights agreement"
                - "List portfolio and pipeline companies that compete with this one"
                - "Write what you will share with partners and what stays in the boardroom"
                - "Agree your recusal approach with the managing partner"
            - name: Working agreement with the founder CEO
              description: |-
                ## Purpose
                Founders who have never had a board often fear one, and investors who hold a dozen seats default to one style for all of them. Agreeing early how often you talk, how bad news reaches you, which decisions the founder wants a sounding board for and how you will disagree gives the relationship a shape before the first hard quarter tests it.

                ## Milestones
                1. A conversation held on communication rhythm, bad news, disagreement and help wanted.
                2. A short written note of what was agreed, sent to the founder.
                3. One thing the founder does not want from you recorded and respected.
                4. A date set to revisit the agreement after six months.

                ## Notes
                Start from the **1:1** template. Ask how their previous investors or bosses made them feel managed; avoid doing the same thing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written working agreement with the founder CEO exists, covering rhythm, bad news and disagreement, with a six-month revisit date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a 60-minute conversation with the founder away from the office"
                - "Ask how they want bad news and disagreement handled between you"
                - "Send a short note of what you agreed the same day"
                - "Set a reminder to revisit the agreement in six months"
            - name: Board observer seat rights and limits
              description: |-
                ## Purpose
                Many venture investments come with an observer seat rather than a directorship, and observers who behave like directors create confusion and risk. Reading the observer clause, understanding what you can attend, receive and say, and when you may be asked to leave the room, lets you add value without blurring the line.

                ## Milestones
                1. The observer rights clause and any observer confidentiality terms read.
                2. A note of what you receive, which sessions you can attend and when you can be excluded.
                3. A conversation with the chair or CEO about how they want observers to contribute.
                4. A personal rule for staying out of votes and director-only discussions.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note of observer rights, exclusions and your own conduct rule exists and has been discussed with the chair or CEO."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the observer clause in the investor rights agreement"
                - "Note which sessions and papers it covers and when you can be excluded"
                - "Ask the CEO how they want observers to take part"
                - "Write your rule for staying out of votes and director-only sessions"
            - name: Annual board calendar for an early-stage company
              description: |-
                ## Purpose
                Seed and Series A boards drift into meeting whenever the founder has news, which means the budget, option grants and audit all get approved in a rush. Agreeing four to six dated meetings a year, with each one's main decision named, gives the founder a rhythm and protects your own diary across several seats.

                ## Milestones
                1. Four to six board dates for the next twelve months agreed and in every director's calendar.
                2. Each meeting tagged with its main decision, such as the plan, grants, audit or fundraising.
                3. A deck deadline agreed for a fixed number of days before each meeting.
                4. The calendar shared with the company's counsel and finance lead.

                ## Notes
                Start from the **Board meeting** template for the first dated meeting and copy it for the rest.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month board calendar with four to six dated meetings, each with its main decision named, is in every director's calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Propose four to six board dates to the CEO for the next year"
                - "Tag each date with the main decision it will carry"
                - "Agree how many days before each meeting the deck is due"
                - "Send calendar invitations to every director and observer"
            - name: Startup board deck standard agreed with the founder
              description: |-
                ## Purpose
                Seed founders often build each board deck from scratch, spending two days on slides and still leaving out the cash figure. Agreeing a short standard (a one-page summary, metrics on fixed definitions, cash and runway, the decisions needed and a few discussion topics) cuts the founder's preparation time and makes quarters comparable.

                ## Milestones
                1. A deck outline of no more than twelve pages agreed with the founder.
                2. A first page that states the decisions the board is asked to make.
                3. Metrics shown on the same definitions and layout every quarter.
                4. The standard used for two consecutive meetings and adjusted once.

                ## Notes
                Ask what the founder already prepares for the team and build from that. A board deck should reuse management reporting, not add a second set.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A board deck standard of twelve pages or fewer was agreed with the founder and used at two consecutive meetings."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the founder what reports they already prepare for the team"
                - "Sketch a twelve-page deck outline with decisions on page one"
                - "Agree the outline and metric definitions with the founder and CFO"
                - "Review the standard after two meetings and adjust it once"
            - name: Board deck pre-read routine
              description: |-
                ## Purpose
                Directors who open the deck in the taxi ask the questions already answered on page twelve. Blocking time two days before each meeting to read the deck, mark three questions that matter and send the dull ones to the CFO in advance keeps the meeting for the discussion only directors can have.

                ## Milestones
                1. A two-hour reading block in your diary before every scheduled board meeting.
                2. Three priority questions written for each meeting.
                3. Clarifying questions sent to the company at least a day before.
                4. A short record of what you asked kept with your board notes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive meetings, the deck was read at least a day early and three priority questions were written beforehand."
                cadence: rolling
              tasks:
                - "Block a two-hour pre-read slot two days before the next board meeting"
                - "Write three priority questions and send clarifying ones to the CFO"
                - "Read the deck and mark your three questions before each meeting @recurring(quarterly)"
            - name: Pre-meeting call with the founder
              description: |-
                ## Purpose
                Surprises in the boardroom hurt founders as much as investors. A thirty-minute call a few days before each meeting, to hear what the founder is worried about and what they want from the board, means hard topics land on the agenda rather than in the room.

                ## Milestones
                1. A standing call booked before every board meeting.
                2. The founder's top worry and their ask of the board noted each time.
                3. Any surprise you would otherwise raise in the meeting shared on the call first.
                4. Agenda changes agreed on the call reflected in the final deck.

                ## Notes
                Start from the **1:1** template. Keep the call short and the notes private to you.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pre-meeting call with the founder took place before each of the last three board meetings, with the worry and ask noted."
                cadence: rolling
              tasks:
                - "Ask the founder for a recurring 30-minute slot before each meeting"
                - "Prepare one question about what they need from the board"
                - "Hold the pre-meeting call and note their top worry @recurring(quarterly)"
            - name: Monthly founder check-in between meetings
              description: |-
                ## Purpose
                Quarterly board meetings are too far apart for a company that can change direction in six weeks. A short monthly check-in, with no deck and no agenda beyond what is on the founder's mind, keeps you current without adding reporting work to a team of twenty.

                ## Milestones
                1. A monthly slot agreed that the founder can move but rarely cancels.
                2. A one-line note of each check-in kept in your seat file.
                3. Follow-ups from each check-in done within a week.
                4. The rhythm reviewed with the founder after six months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly check-ins happened in at least five of the last six months, each with a one-line note and its follow-ups closed."
                cadence: rolling
              tasks:
                - "Agree a monthly 30-minute slot with the founder"
                - "Keep a one-line note of each conversation in the seat file"
                - "Hold the founder check-in and close its follow-ups within a week @recurring(monthly:9)"
            - name: Written consents and approvals tracker
              description: |-
                ## Purpose
                Between meetings a startup board signs a steady stream of written consents: option grants, a new bank account, a venture debt facility, a change to the pool. Keeping a simple tracker of what you were asked to approve, when you signed and what you checked first stops consents from being signed on a phone in a queue without a read.

                ## Milestones
                1. A tracker with columns for date, item, approval type, what you checked and date signed.
                2. Every consent from the last twelve months found and logged.
                3. A rule that you read the underlying document before signing any consent.
                4. Open consents reviewed each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every consent signed in the last twelve months is in the tracker, and open requests have been reviewed monthly for three months."
                cadence: rolling
              tasks:
                - "Search your email for board consents signed in the last year"
                - "Log each one with date, item and what you checked"
                - "Review unsigned and recently signed consents in the tracker @recurring(monthly:20)"
            - name: Board minutes review and action follow-up
              description: |-
                ## Purpose
                Minutes are the record that shows a board was informed and deliberated, and early-stage companies often write them late or not at all. Reading the draft minutes within a week, correcting what they say about decisions, and chasing the actions the board agreed keeps the record accurate and the actions alive.

                ## Milestones
                1. Draft minutes received and reviewed within a week of each meeting.
                2. Corrections sent to the company secretary or counsel in writing.
                3. Board actions listed with an owner and date and checked before the next meeting.
                4. Approved minutes filed in your seat file.

                ## Notes
                Start from the **Meeting notes** template for your own notes. Your notes are not the minutes; keep them factual in case they are ever read by others.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Minutes for the last three meetings were reviewed within a week and every board action has an owner, a date and a status."
                cadence: rolling
              tasks:
                - "Ask counsel who drafts the minutes and when they circulate"
                - "List the actions from the last board meeting with owners and dates"
                - "Review draft minutes and chase open board actions @recurring(quarterly)"
            - name: Option grants and share valuation approvals
              description: |-
                ## Purpose
                Option grants are among the most frequent things a venture board approves, and grants made without a current independent share valuation can cause tax trouble for employees later. Setting a quarterly grant rhythm and checking that the company's independent valuation (a 409A in the US, or the local equivalent) is current before each batch is basic hygiene that boards often skip.

                ## Milestones
                1. The date of the last independent share valuation confirmed with the CFO.
                2. A quarterly grant approval batch agreed with the company.
                3. Each batch checked against the pool size and the latest valuation before approval.
                4. A note of any events, such as a new round, that require a fresh valuation.

                ## Notes
                Valuation and tax rules for employee options vary by country. The company's counsel and accountants decide what is needed; your job is to ask whether it has been done.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two consecutive quarterly grant batches were approved with the pool balance and a current independent valuation confirmed beforehand."
                cadence: cyclic
              tasks:
                - "Ask the CFO for the date of the last independent share valuation"
                - "Agree a quarterly batch rhythm for option grant approvals"
                - "Check pool balance and valuation date before approving grants @recurring(quarterly)"
                - "Ask whether the share valuation needs refreshing @recurring(yearly)"
            - name: Conflicts register across your board seats
              description: |-
                ## Purpose
                Sooner or later a partner with eight seats will eventually sit on two boards that sell to the same customer, compete for the same hire or negotiate with each other. A short register of your interests, the fund's interests and known overlaps, reviewed each quarter, means you declare conflicts before a vote rather than after.

                ## Milestones
                1. A register of every board and observer seat you hold with sector, customers and partners noted.
                2. Fund holdings that overlap with each company listed.
                3. Your personal investments and advisory roles that touch any company added.
                4. Each conflict declared to the relevant board and recorded in its minutes.

                ## Notes
                Start from the **Risk register** template, using one row per overlap.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A conflicts register covers every seat you hold, has been reviewed each quarter, and every live conflict has been declared in the board minutes."
                cadence: rolling
              tasks:
                - "List every board and observer seat you hold"
                - "Add overlapping fund holdings and your own investments or advisory roles"
                - "Review the register and declare any new conflict @recurring(quarterly)"
            - name: Monthly board seat readout to partners
              description: |-
                ## Purpose
                Your partners rely on you for what is happening in the company, and they decide reserves and follow-ons partly on your word. A short monthly readout per seat, giving runway, the top issue, the next board decision and your confidence level, keeps the partnership informed without turning the partner meeting into a board meeting.

                ## Milestones
                1. A five-line readout format agreed with your partners.
                2. A readout written for every seat each month.
                3. Any change in runway or confidence of more than one step flagged in person.
                4. Readouts kept within what the company's confidentiality terms allow.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A five-line readout was delivered for every seat in each of the last three months, within the confidentiality terms of each company."
                cadence: rolling
              tasks:
                - "Draft a five-line readout format and agree it with your partners"
                - "Ask the agent to draft each readout from your seat notes, then correct it"
                - "Deliver the readout for every board seat to the partner meeting @recurring(monthly:3)"
            - name: Runway and cash watch as a director
              description: |-
                ## Purpose
                Running out of cash is how most venture-backed companies fail, and directors who learn the runway at the quarterly meeting are learning it late. A monthly look at cash, burn and months of runway against the plan, with an agreed trigger for an early fundraising or cost discussion, gives the board time to act while it still has choices.

                ## Milestones
                1. Monthly cash, net burn and runway figures agreed with the CFO.
                2. A trigger agreed with the board, such as runway falling below a set number of months.
                3. Each month's figures logged against the plan.
                4. A trigger breach raised with the founder within a week.

                ## Notes
                Ask for the cash figure from the bank balance, not the forecast. Collections, deferred payables and committed spend change the real runway.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Runway has been logged monthly for three months against plan, with a written trigger agreed by the board."
                cadence: rolling
              tasks:
                - "Ask the CFO for monthly cash, net burn and runway in one line"
                - "Propose a runway trigger for the next board meeting to agree"
                - "Log the month's cash, burn and runway against plan @recurring(monthly:14)"
            - name: Annual venture board self-assessment
              description: |-
                ## Purpose
                Early-stage boards rarely look at themselves, so a board that worked at seed carries on unchanged into a Series C company with three hundred staff. A short yearly assessment, with each director and the CEO answering the same questions about meetings, information and composition, finds the fixes before an investor or a crisis forces them.

                ## Milestones
                1. Eight to ten questions agreed with the chair or CEO.
                2. Answers collected from every director, observer and the CEO.
                3. Results summarised without naming individuals and discussed at a board meeting.
                4. Two or three changes agreed and recorded in the minutes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly board self-assessment was completed with every director's answers and two or three recorded changes."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Draft eight to ten assessment questions and share them with the CEO"
                - "Collect answers from every director, observer and the CEO"
                - "Run the board self-assessment and agree the changes @recurring(yearly)"
            - name: Reading startup management reports as a director
              description: |-
                ## Purpose
                Series A decks mix bookings, ARR, revenue and pipeline in ways that make a flat quarter look like growth. Learning to read the core startup metrics for this company's model (recurring revenue, gross margin, net revenue retention, payback, burn multiple) and to tie them back to the bank balance turns the deck into a set of questions.

                ## Milestones
                1. The company's metric definitions written down and agreed with the CFO.
                2. The last four quarters of key metrics tied to each other and to cash.
                3. Two metrics with unclear definitions raised with the CFO.
                4. A one-page metric glossary kept in your seat file.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page glossary of the company's metric definitions exists, and four quarters of key metrics have been reconciled to cash."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the CFO for written definitions of every metric in the deck"
                - "Reconcile four quarters of reported revenue to cash received"
                - "Raise any unclear definition with the CFO before the next meeting"
                - "Write a one-page metric glossary for this company"
            - name: Asking questions without running the company
              description: |-
                ## Purpose
                The temptation for an investor director is to turn every question into an instruction, and founders notice. Practising questions that test the plan (what would have to be true, what would change your mind, what are you not doing) rather than ones that prescribe answers keeps decisions with the people accountable for them.

                ## Milestones
                1. A list of ten open, testing questions written for your own use.
                2. Your questions from the last two meetings reviewed and sorted into testing or prescribing.
                3. At the next meeting, every question you ask framed as a test of the plan.
                4. Feedback asked from the founder on whether your questions helped.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your questions at the last meeting were all testing rather than prescribing, and the founder has given feedback on them."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write ten testing questions you can use at any board meeting"
                - "Sort your questions from the last two meetings into testing or prescribing"
                - "Ask the founder whether your questions at the last meeting helped"
            - name: Preferred and common conflicts in practice
              description: |-
                ## Purpose
                Liquidation preferences mean that a sale price good for preferred holders can leave founders and employees with little, and directors appointed by preferred holders still owe duties to common. Working through how these conflicts show up in sales, financings and wind-downs, with real past cases discussed with counsel, prepares you to spot them early and run a fair process.

                ## Milestones
                1. Three published legal cases or commentaries on preferred and common conflicts read and summarised.
                2. The decisions in this company most exposed to the conflict identified.
                3. Process protections counsel suggests, such as independent directors or special committees, noted.
                4. A one-page note filed with your duties briefing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note on preferred and common conflicts, with exposed decisions and process protections, exists after a discussion with counsel."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask fund counsel for two or three readings on preferred and common conflicts"
                - "Summarise each reading in a paragraph"
                - "List which decisions in this company are most exposed"
                - "Note the process protections counsel would suggest"
            - name: Process records for contested board decisions
              description: |-
                ## Purpose
                When a board decision is challenged, what matters is often the process: what the board knew, whom it consulted and how long it deliberated. Learning what a good record looks like for a contested decision, with counsel's guidance, means the minutes and papers reflect the care the board actually took.

                ## Milestones
                1. Counsel's guidance on what a well-documented decision record contains collected.
                2. A checklist for contested decisions: papers circulated, advisers heard, alternatives considered, conflicts declared.
                3. The checklist used for the next significant board decision.
                4. Minutes of that decision checked against the checklist.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A contested decision checklist exists, was used for the next significant decision, and the minutes reflect each item."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask company counsel what a well-documented board decision includes"
                - "Turn the answer into a one-page checklist"
                - "Use the checklist for the next significant board decision"
                - "Compare the draft minutes with the checklist and correct gaps"
            - name: Executive session without the founder
              description: |-
                ## Purpose
                Directors need a few minutes without management to raise concerns about the CEO, compensation or the board itself, and if it only happens in a crisis the founder rightly reads it as an alarm. A short executive session at the end of every meeting, as routine, makes it normal and gives the board a safe place to talk.

                ## Milestones
                1. Executive sessions agreed as a standing agenda item with the founder told why.
                2. A fifteen-minute session held at the end of each meeting.
                3. One director named to give the founder feedback after each session.
                4. Feedback delivered within two days.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An executive session was held at the end of each of the last three meetings and feedback reached the founder within two days each time."
                cadence: rolling
              tasks:
                - "Explain to the founder why executive sessions will become routine"
                - "Add a fifteen-minute executive session to the standing agenda"
                - "Hold the executive session and send the founder feedback within two days @recurring(quarterly)"
            - name: Giving a founder CEO hard feedback
              description: |-
                ## Purpose
                Founders tie their identity to the company, so feedback about their leadership lands harder than it would with a hired CEO. Learning to give specific, evidence-based feedback in private, with the board aligned beforehand and a clear ask, keeps the relationship intact while the message still lands.

                ## Milestones
                1. The feedback written in three sentences: what you observed, its effect and the ask.
                2. Other directors told in advance so the message is consistent.
                3. The conversation held in private, not in the boardroom.
                4. A follow-up date set to discuss what has changed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A piece of hard feedback was delivered privately with prior board alignment, and a follow-up conversation took place on the agreed date."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the feedback as observation, effect and ask in three sentences"
                - "Share the message with the other directors before delivering it"
                - "Hold the conversation privately and agree a follow-up date"
            - name: Liquidation preferences at exit for directors
              description: |-
                ## Purpose
                Directors approve sales whose proceeds flow through a waterfall of preferences, participation and conversion that most of the room cannot calculate. Building a simple waterfall for this company's cap table, and seeing who receives what at several sale prices, shows where the board will face the hardest conversations long before an offer arrives.

                ## Milestones
                1. The current cap table and every series' preference terms collected.
                2. A waterfall that shows proceeds by class at four or five sale prices.
                3. The price below which common receives little or nothing identified.
                4. The waterfall checked against the company's own model or counsel's.

                ## Notes
                Keep the waterfall inside the company's confidentiality terms. It is a tool for board judgement, not a valuation.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A waterfall model showing proceeds by class at four or five sale prices exists and has been checked against the company's or counsel's figures."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the CFO for the current cap table and preference terms"
                - "Build a waterfall that shows proceeds by class at five sale prices"
                - "Mark the price below which common holders receive little"
                - "Check your figures against the company's model"
            - name: Adding an independent director to the board
              description: |-
                ## Purpose
                Boards of two founders and two investors often deadlock, and an independent director with operating experience can break the tie and help with preferred and common conflicts. Agreeing the profile, how the candidate is chosen and approved, and the equity they receive makes the appointment a board decision rather than one side's pick.

                ## Milestones
                1. The independent seat's selection rule checked in the voting agreement.
                2. A profile agreed with the founder and other investors.
                3. A shortlist of three candidates met by every director.
                4. The appointment and option grant approved and minuted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An independent director has been appointed through the agreed selection rule, with the appointment and grant minuted."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Check how the voting agreement fills the independent seat"
                - "Draft a profile with the founder and the other investor directors"
                - "Arrange for every director to meet the three shortlisted candidates"
                - "Bring the appointment and grant to the board for approval"
            - name: Rebalancing the board at each new round
              description: |-
                ## Purpose
                Every priced round brings a new lead investor who usually wants a seat, and without care a five-person board becomes seven investors and a lonely founder. Planning the board's shape for the next round, including whether an existing investor steps back to observer, keeps the board workable and the founder represented.

                ## Milestones
                1. The current board seats and who controls each one mapped.
                2. Two or three options for the post-round board drawn up.
                3. A preferred shape agreed with the founder before the term sheet is signed.
                4. The new voting agreement checked against the agreed shape.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A post-round board shape agreed with the founder before the term sheet, and reflected in the new voting agreement."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Map current seats and the party that controls each"
                - "Draw two or three board shapes for after the next round"
                - "Agree the preferred shape with the founder before term sheets arrive"
                - "Check the new voting agreement against the agreed shape"
            - name: Founder and executive pay approvals
              description: |-
                ## Purpose
                Pay for founders tends to be too low at seed and then raised in a hurry after a large round, and the board approves both. A yearly compensation review for the founders and senior team, using market data and a written rationale, keeps pay fair and decisions defensible to later investors.

                ## Milestones
                1. A compensation committee or a named director responsible for pay agreed.
                2. Market benchmark data for each senior role gathered by the company.
                3. Pay and equity proposals for founders and executives approved with a written rationale.
                4. Directors with personal interest in the decision recused.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Founder and executive pay was approved this year against benchmark data, with a written rationale and conflicted directors recused."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Agree who on the board owns compensation decisions"
                - "Ask the company for benchmark pay data for each senior role"
                - "Review founder and executive pay with a written rationale @recurring(yearly)"
            - name: Approving a founder secondary sale
              description: |-
                ## Purpose
                Any founder request to sell shares brings the company's right of first refusal, transfer restrictions and the effect on the next round to the board. Handling the request with a clear process (who may buy, at what price, which waivers are needed and how other shareholders are treated) keeps it from setting an awkward valuation signal or a precedent nobody intended.

                ## Milestones
                1. The transfer restrictions and first refusal rights in the documents confirmed.
                2. The proposed buyer, price and amount set out in writing for the board.
                3. Effects on the next round and on employees' expectations discussed.
                4. The board decision and any waivers approved and minuted.

                ## Notes
                Your fund may want to buy the shares itself. If so, declare it and let the other directors lead the decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The founder's sale request was decided by the board with transfer rights checked, conflicts declared and the decision minuted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask counsel to confirm the transfer restrictions and first refusal terms"
                - "Request the buyer, price and amount in writing"
                - "Declare whether your fund wants to buy and step back if it does"
                - "Bring the request and any waivers to a board vote"
            - name: Venture debt and bridge financing approvals
              description: |-
                ## Purpose
                Venture debt and bridge notes buy time, but they bring covenants, warrants and a lender who may be first in line if things go wrong. Reviewing the terms, the runway they really buy and what happens if the next round slips, before the board signs, is the director's part of the decision.

                ## Milestones
                1. The term sheet's interest, warrants, covenants and security summarised in one page.
                2. The runway the facility adds calculated against the plan.
                3. A downside case reviewed in which the next round is six months late.
                4. The board decision, with any insider participation declared, minuted.

                ## Notes
                When existing investors fund a bridge, they sit on both sides of the terms. Ask counsel whether an independent view or a wider offer to other holders is needed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A bridge or debt facility was approved after a one-page term summary, a runway calculation and a downside case, with insider interests declared."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the CFO for a one-page summary of the debt or bridge terms"
                - "Work out how many months of runway the facility really adds"
                - "Ask for a downside case with the next round six months late"
                - "Declare your fund's role in the bridge before the vote"
            - name: Stepping back from a seat to observer
              description: |-
                ## Purpose
                Holding a seat in a company your fund no longer supports with reserves, or where a later investor now leads, can cost you time and leave you exposed for little influence. Deciding whether to stay, move to observer or resign, and handing over well, is a choice to make deliberately rather than by drift.

                ## Milestones
                1. The reasons for and against keeping the seat written down.
                2. The decision discussed with your partners and the founder.
                3. Resignation or observer change documented through the correct consent.
                4. A handover note sent to the remaining directors.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to keep, step back or resign the seat exists, and any change has been documented through the correct consent."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the reasons for and against keeping this seat"
                - "Discuss the choice with your partners, then with the founder"
                - "Ask counsel for the correct resignation or observer documents"
                - "Send a handover note to the remaining directors"
            - name: First board meeting after the round closes
              description: |-
                ## Purpose
                The first meeting after a financing sets the tone for years: whether the board talks strategy or reads slides, and whether the founder feels backed or audited. Preparing it with the founder, with the standing approvals, introductions of new directors and the plan for the next eighteen months, starts the board as a working group.

                ## Milestones
                1. An agenda agreed with the founder a week ahead.
                2. Post-closing approvals listed and papers ready, such as officers, bank signatories and the option pool.
                3. New directors introduced with what each brings.
                4. The eighteen-month plan and the next fundraising milestone discussed and minuted.

                ## Notes
                Start from the **Board meeting** template.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first post-closing board meeting was held with its approvals passed and the eighteen-month plan minuted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the first meeting agenda with the founder"
                - "Ask counsel for the list of post-closing approvals"
                - "Prepare a short introduction of what you bring to the board"
                - "Confirm the eighteen-month plan is minuted with its milestones"
            - name: Annual operating plan approval
              description: |-
                ## Purpose
                The operating plan is the board's main tool for agreeing what the company will spend and what it must achieve before the next raise. Reviewing the plan against runway, the milestones the next investors will want and a downside case, then approving it on time, gives everyone a year of shared targets.

                ## Milestones
                1. A draft plan received at least two weeks before the approval meeting.
                2. The plan checked against runway, the fundraising milestone and a downside case.
                3. Questions sent to the founder before the meeting.
                4. The approved plan and its key targets recorded in the minutes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The operating plan for the year was approved on time, with runway, the next fundraising milestone and a downside case reviewed."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Ask the founder when the draft operating plan will be ready"
                - "Check the plan's runway and the milestone for the next round"
                - "Send your questions to the founder before the meeting"
                - "Review and approve the operating plan with a downside case @recurring(yearly)"
            - name: Board approval of the next equity round
              description: |-
                ## Purpose
                A financing needs board approval, stockholder consents and often waivers, and when the round is led by insiders your fund may be on both sides. Running the approval with the terms laid out, alternatives shown and conflicts declared protects the founder, the common holders and the investor directors.

                ## Milestones
                1. The term sheet summarised with dilution to each class shown.
                2. Evidence of the market tested, such as other investors approached, presented to the board.
                3. Insider participation and any conflicts declared and recorded.
                4. Board and stockholder consents approved and closing completed.

                ## Notes
                In an insider-led round, ask counsel whether a rights offering to all holders or an independent director's sign-off is advisable.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The round was approved with dilution by class shown, market testing presented and insider conflicts declared in the minutes."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the founder for a one-page term summary with dilution by class"
                - "Ask what other investors were approached and their responses"
                - "Declare your fund's participation to the board in writing"
                - "Confirm all board and stockholder consents are signed before closing"
            - name: Year-end audit and annual consents
              description: |-
                ## Purpose
                Many startups only start annual audits when a lender or a later investor demands one, and directors find themselves approving accounts they have never discussed. Making sure the audit or review is scoped, the auditor has met the board and the annual consents are signed on time avoids a scramble during the next due diligence.

                ## Milestones
                1. Whether an audit or review is required this year confirmed with the CFO.
                2. The auditor or accountant met by at least one director.
                3. Findings or management letter points discussed at a board meeting.
                4. Annual consents and filings signed before their deadlines.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "This year's audit or review is complete, its findings were discussed by the board and annual consents were signed on time."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Ask the CFO whether an audit or review is needed this year"
                - "Arrange a short call between the auditor and one director"
                - "Confirm the audit, findings and annual consents are complete @recurring(yearly)"
            - name: Board review of an acquisition offer
              description: |-
                ## Purpose
                An unsolicited offer from a larger company tests every tension on a venture board: investors with different fund timelines, preferences that split the proceeds unevenly and founders weighing their next decade. Running a clear process (advisers, a check of alternatives, conflicts declared, management carve-outs disclosed) leads to a decision the board can stand behind.

                ## Milestones
                1. The offer and its conditions summarised for every director.
                2. The board's process agreed, including advisers and whether a special committee is needed.
                3. Proceeds by class at the offered price shown.
                4. Alternatives such as other buyers or staying independent considered and recorded.
                5. The board decision and its reasoning minuted.

                ## Notes
                Management retention packages and carve-outs are normal but must be disclosed to the board and considered as part of the decision.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A board decision on the offer was minuted with its process, proceeds by class, alternatives and conflicts recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask the founder for the offer letter and a one-page summary"
                - "Propose a board process including advisers and conflicts declarations"
                - "Ask for proceeds by class at the offered price"
                - "Record the alternatives the board considered before deciding"
            - name: Founder CEO transition through the board
              description: |-
                ## Purpose
                Some founders reach a stage where the company needs a different CEO, and how the board handles it decides whether the founder stays as an asset or leaves angry with key staff. Working through the transition (evidence, board alignment, founder conversations, a new role or exit terms, the search and communication) with care and with counsel is among the hardest things a director does.

                ## Milestones
                1. The evidence for a change written down and shared only among directors.
                2. Board alignment reached in an executive session and minuted carefully.
                3. The founder's future role, equity and vesting position agreed with counsel.
                4. A search or internal appointment completed.
                5. Staff and investors told in a coordinated way.

                ## Notes
                Agree the founder's role and terms before announcing anything. A founder who learns of the plan secondhand rarely stays constructive.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A CEO transition was completed with board alignment minuted, the founder's role and terms agreed with counsel and staff told in a coordinated way."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the evidence for a leadership change for directors only"
                - "Hold an executive session to test board alignment"
                - "Ask counsel to set out the founder's vesting and role options"
                - "Plan the order in which founder, staff and investors are told"
            - name: First venture board seat as a new partner
              description: |-
                ## Purpose
                New partners and principals often get their first seat on a company they did not lead, with little guidance beyond watching others. Shadowing an experienced director, setting your own rules for preparation and conduct, and asking for feedback after the first three meetings builds habits that will carry across a whole portfolio.

                ## Milestones
                1. Two board meetings of an experienced partner observed, with their permission and the company's.
                2. Your own preparation and conduct rules written on one page.
                3. Your first three meetings held using those rules.
                4. Feedback collected from the founder and a fellow director.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "After your first three meetings, written feedback from the founder and another director has been collected and your rules updated."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask a senior partner if you can observe one of their board meetings"
                - "Write your one-page preparation and conduct rules"
                - "Ask the founder and a fellow director for feedback after three meetings"
                - "Update your rules with what they said"
            - name: Holding a heavy load of board seats
              description: |-
                ## Purpose
                Partners with eight to twelve seats spend most of their week in board meetings and founder calls, and the weakest company often gets the least attention because it is the least fun. A monthly look at time spent and company needs by seat, with a rule for which seats get more and which can step down, keeps the load honest.

                ## Milestones
                1. Every seat listed with stage, health, upcoming decisions and hours spent last month.
                2. Seats ranked by the company's need, not by its prospects.
                3. Time shifted towards the seats that need it most.
                4. At least one seat reviewed for stepping back each year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A seat load review has been done in each of the last three months, with time allocated by company need."
                cadence: rolling
              tasks:
                - "List every seat with stage, health and hours spent last month"
                - "Rank the seats by how much the company needs you"
                - "Review hours per seat against each company's need @recurring(monthly:26)"
            - name: Inheriting a seat from a departing partner
              description: |-
                ## Purpose
                Seats held by a partner who leaves the firm pass to colleagues who did not make the investment and may not know the founder. Taking over properly, with a handover from the departing partner, a fresh read of the documents and an early conversation with the founder about what continues and what changes, avoids the founder feeling passed along like furniture.

                ## Milestones
                1. A handover conversation with the departing partner on history, open issues and promises made.
                2. The board appointment documented through the correct consent.
                3. A first meeting with the founder on how the role will continue.
                4. Open issues and promises listed with your plan for each.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A handover note exists listing open issues and promises, the appointment is documented and you have met the founder one to one."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a handover call with the departing partner before they leave"
                - "Ask counsel for the consent that appoints you to the seat"
                - "Meet the founder to agree how the role continues"
                - "Write the list of open issues and promises with your plan for each"
            - name: Co-founder departure handled at board level
              description: |-
                ## Purpose
                Co-founder splits are common and messy: unvested shares, a key person clause in a customer contract, and staff loyalty divided between the two. The board's job is to make sure the departure follows the vesting and leaver terms, that the company's interests are protected and that the remaining founder has support, without taking sides in a personal dispute.

                ## Milestones
                1. The departing founder's vesting, leaver terms and any repurchase rights confirmed by counsel.
                2. Board decisions needed, such as repurchase of shares or role changes, listed.
                3. Effects on customers, staff and the next round reviewed.
                4. The board decisions taken and minuted, and the remaining founder's support plan agreed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The departure was handled under the documented vesting and leaver terms, with board decisions minuted and a support plan for the remaining founder."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask counsel to confirm the departing founder's vesting and leaver terms"
                - "List the board decisions the departure requires"
                - "Review effects on key customers, staff and the next round"
                - "Agree a support plan with the remaining founder"
            - name: Board seat in a cross-border startup structure
              description: |-
                ## Purpose
                Many venture-backed companies have a holding company in one country and the operating team in another, with directors in a third, and each place has its own filings and director duties. Mapping where the company is incorporated, which entities you are a director of and what local obligations come with that keeps you from missing a filing that falls on you personally.

                ## Milestones
                1. The group structure diagram obtained, showing every entity and its country.
                2. The entities on whose boards you sit confirmed.
                3. Local director obligations for each entity confirmed with local counsel.
                4. A yearly check on filings and any director registration set.

                ## Notes
                Directors' obligations differ widely between countries. Ask local counsel rather than assuming the holding company rules apply everywhere.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A group structure diagram with your directorships marked exists, and local obligations for each have been confirmed with counsel."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the CFO for the current group structure diagram"
                - "Mark every entity where you are a director"
                - "Ask local counsel which director obligations apply in each country"
                - "Check local filings and director registrations are current @recurring(yearly)"
            - name: Serving on a board when your fund will not follow on
              description: |-
                ## Purpose
                If your partnership decides not to reserve more capital for a company, you still hold the seat and the duties, while other investors may read your fund's absence as a signal. Agreeing with your partners and the founder how you will behave, what you will say to new investors and whether to stay on the board keeps the decision from harming the company.

                ## Milestones
                1. The fund's decision and its reasons explained to the founder in person.
                2. A line agreed with the founder for what you say to prospective investors.
                3. Your continued role on the board confirmed or a step back planned.
                4. Your conduct in the next financing vote checked against your duties to the company.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The founder has heard the decision from you in person, an investor line is agreed and your board role going forward is decided."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Tell the founder in person before they hear it elsewhere"
                - "Agree with the founder what you will say to new investors"
                - "Decide with your partners whether to keep the seat"
                - "Recheck your duties briefing before the next financing vote"
            - name: Down round board process
              description: |-
                ## Purpose
                Pricing a round below the last one triggers anti-dilution, can wipe out employee option value and puts investor directors on both sides of the terms. A careful board process (market tested, independent voices heard, effects on common and employees shown, conflicts recorded, advice taken) is what separates a painful round from a contested one.

                ## Milestones
                1. Evidence of the market tested, with every term sheet or refusal recorded.
                2. Anti-dilution and dilution effects by class modelled.
                3. Effects on employee options and a possible refresh grant discussed.
                4. Counsel's process advice taken, including any independent approval or rights offering.
                5. The board decision and its reasoning minuted with conflicts declared.

                ## Notes
                Plan the employee message before closing. Staff who find their options under water from a rumour leave faster than those told with a plan.
              priority: high
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A down round was approved with market testing, dilution by class, an employee plan and counsel's process advice recorded in the minutes."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask the founder for a record of every investor approached and their answer"
                - "Ask counsel for process advice on approving a down round"
                - "Model anti-dilution and dilution effects by share class"
                - "Agree the employee message and any refresh grant plan before closing"
            - name: Pay-to-play and recapitalisation decisions
              description: |-
                ## Purpose
                If a company needs money and some investors will not put more in, insiders sometimes propose pay-to-play terms or a recapitalisation that converts non-participants to common or resets the cap table. Directors approving these terms affect investors who are not in the room, so the process, fairness and disclosure matter as much as the terms.

                ## Milestones
                1. The proposed structure and its effect on each holder set out in a table.
                2. Every existing investor offered the chance to participate, with responses recorded.
                3. Counsel's advice on process, consents and fairness obtained.
                4. The board decision minuted with conflicts declared.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recapitalisation or pay-to-play was approved with each holder's effect tabled, participation offered to all and counsel's advice recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask counsel to table the effect of the proposal on each holder"
                - "Confirm every existing investor has been offered participation"
                - "Get counsel's written view on consents and fairness"
                - "Declare your fund's position before the board votes"
            - name: Wind-down oversight as a director
              description: |-
                ## Purpose
                When a company cannot raise again, directors face a narrow window to decide between a sale of assets, an acqui-hire, a formal insolvency process or a solvent wind-down, and duties may shift towards creditors. Taking insolvency advice early, protecting employee pay and records, and documenting every decision helps the board close the company responsibly.

                ## Milestones
                1. Insolvency counsel engaged and their guidance on director duties noted.
                2. A cash timeline showing when the company can no longer meet its debts.
                3. Options such as an asset sale, an assignment for creditors or a formal process compared.
                4. Employee final pay, benefits and notice planned within the cash available.
                5. Every wind-down decision minuted with the advice relied on.

                ## Notes
                Rules on wrongful or insolvent trading and creditor duties differ by country. Take local insolvency advice before cash runs out, not after.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The wind-down was run with insolvency counsel engaged, options compared, employee pay planned and every decision minuted."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the founder for a week-by-week cash timeline"
                - "Propose engaging insolvency counsel at the next board meeting"
                - "Compare asset sale, assignment for creditors and formal process with counsel"
                - "Confirm employees' final pay and notice are funded before other choices"
            - name: Distressed sale or acqui-hire with preferences under water
              description: |-
                ## Purpose
                Acqui-hires, small acquisitions that mainly buy the team, often price the company below the preference stack, so investors receive little, common receives nothing and the buyer pays retention to staff. Boards approving such deals must weigh the retention money against what shareholders receive and make sure the allocation is disclosed and defensible.

                ## Milestones
                1. The offer split into purchase price, retention and any carve-out plan.
                2. Proceeds by class and retention by individual shown to the board.
                3. Counsel's view on a management carve-out plan and stockholder approvals obtained.
                4. The board decision minuted with the allocation and conflicts declared.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The distressed sale was decided with purchase price, retention and carve-out amounts disclosed to the board and counsel's view recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask for the offer split into price, retention and carve-out"
                - "Ask the agent to lay out proceeds by class and retention by person in one table"
                - "Ask counsel whether a management carve-out plan is advisable"
                - "Record the allocation and any conflicts in the board minutes"
            - name: Personal venture board practice record
              description: |-
                ## Purpose
                Over a fund cycle a venture investor sits through dozens of hard board decisions, and judgement improves only if you look back at them. A quarterly note of each difficult decision, what you argued, what happened and what founders said about your conduct builds a record of your practice as a director that you can learn from and later show.

                ## Milestones
                1. A record with one line per significant board decision across all seats.
                2. Your view at the time and the eventual outcome noted for each.
                3. Founder feedback on your board conduct collected once a year.
                4. Two or three lessons written up each year and shared with junior colleagues.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A practice record covering at least four quarters of significant board decisions exists, with outcomes and yearly founder feedback."
                cadence: rolling
              tasks:
                - "Start a record with one line per significant board decision"
                - "Ask two founders for candid feedback on your board conduct"
                - "Add the quarter's hard decisions and their outcomes to the record @recurring(quarterly)"
---

# VC Board Seats

This area is for the venture investor who has just been handed a board seat, or already holds several, and wants to do the job well for the company and not only for the fund. It starts with the foundations (the seat brief, the charter and voting agreement read as a director, duties to every class of shareholder, insurance, confidentiality walls and a working pact with the founder), then the routines around each meeting, the skills of reading startup reports and asking good questions, the board decisions that come with each new round, dated moments such as the first meeting and an acquisition offer, the situations of a first seat, a heavy seat load or an inherited seat, and finally the hard specialist work of down rounds, recapitalisations and wind-downs.

What repeats is a pre-read and a founder call before each quarterly meeting, a monthly founder check-in, a monthly approvals and runway check, a monthly readout to your partners, quarterly option grants and conflict reviews, and yearly insurance, valuation, compensation and self-assessment rounds. The Board meeting, 1:1, Risk register and Meeting notes templates pair with the projects that name them. Everything here is organisational: legal duties, tax and securities questions go to company counsel or your fund's counsel, and company information stays inside the confidentiality terms you signed. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
