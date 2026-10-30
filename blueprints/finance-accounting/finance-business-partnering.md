---
id: finance-accounting.finance-business-partnering
name: Finance Business Partnering
description: "A charter with each department head, a fact base and driver tree for their area, a steady partnering rhythm, spend and deal challenge that helps rather than blocks, and the skills to shape commercial decisions."
category: business
version: 1.0.0
tags: [finance-accounting, finance-business-partnering, manager, enterprise, team, business-partnering, decision-support, stakeholders]
author: Aurum Technology
starter_structure:
  templates:
    - one-on-one
    - meeting-notes
    - feedback-themes
    - reading-queue
    - development-plan
    - onboarding-30-60-90
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Finance Business Partnering
          description: "Working alongside department heads as a finance partner: building their plans, challenging spend and helping them make commercially sound decisions."
          projects:
            - name: Partnering charter agreed with each department head
              description: |-
                ## Purpose
                Most friction between finance and a department comes from unspoken expectations: the department head wants an analyst on call, finance wants forecast inputs on time, and neither has said so. A one-page charter per department, covering what the partner will provide, what the department owes finance in return, the meeting rhythm and response times, turns those assumptions into something both sides can point to.

                ## Milestones
                1. A one-page charter drafted for each partnered department, covering services, inputs owed and meeting rhythm.
                2. Response times agreed for quick questions, standard analysis and urgent decisions.
                3. Each charter discussed and accepted by the department head and your finance lead.
                4. Charters filed where both teams can find them, each with a review date.

                ## Notes
                Keep it to one page. A charter that lists everything finance could do becomes a menu the department orders from without limit; name the five or six things that matter most.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every partnered department has a one-page charter accepted by its head, with response times and a review date recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the departments you partner and the head of each"
                - "Draft a one-page charter for the largest department first"
                - "Walk the department head through the draft and agree changes"
                - "Revisit each charter with its department head at the start of the year @recurring(yearly)"
            - name: Stakeholder map across the partnered departments
              description: |-
                ## Purpose
                Before the first challenge conversation, a new partner needs to know who actually decides spend, who shapes the department head's view and who will quietly resist a finance recommendation. Mapping twenty to forty people by influence and interest shows where to spend relationship time and who to brief before a decision meeting rather than in it.

                ## Milestones
                1. Every budget holder, team lead and key influencer in the partnered departments listed with their role.
                2. Each person placed on an influence and interest grid.
                3. A contact plan setting how often you meet each of the ten most important people.
                4. Relationship gaps, such as a senior lead you have never met, booked for an introduction.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A stakeholder grid covering every budget holder in the partnered departments, with a contact frequency set for the top ten."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull the organisation chart for each partnered department"
                - "Mark who signs off spend and who influences those decisions"
                - "Book introductory coffees with the three people you know least"
                - "Refresh the map after leavers, joiners and reorganisations @recurring(quarterly)"
            - name: Department operating model walk-through
              description: |-
                ## Purpose
                Partners who only see a department through its cost centre report miss how the work actually happens: what triggers cost, where capacity sits, which handoffs create rework. Spending structured time with the department head and two or three team leads to trace the flow from demand to output gives you the vocabulary to discuss their numbers in their terms.

                ## Milestones
                1. A one-page process map of the department, from what comes in to what goes out.
                2. The five biggest cost lines tied to the activities that drive them.
                3. The department's own measures of success written down in their words.
                4. Three questions about the numbers that only the walk-through could have raised.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page process map for each partnered department, checked by its head, with the five largest cost lines linked to activities."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the department head for ninety minutes to walk through how the team works"
                - "Sketch the flow from incoming demand to finished output"
                - "Link each of the five biggest cost lines to an activity on the map"
                - "Send a summary back to the department head to check you heard it right"
            - name: Department driver tree from activity to cost and revenue
              description: |-
                ## Purpose
                A driver tree shows the department head which operational levers move their financial results, for example how calls per agent, handle time and absence combine into the cost of a support team. Once it exists, every later question about spend or performance can start from a shared picture rather than a ledger line.

                ## Milestones
                1. The department's main financial outcome broken into three or four levels of operational drivers.
                2. Each driver given a current value and a named data source.
                3. The tree reviewed with the department head and corrected where it misreads the work.
                4. The tree used in at least one real decision conversation.

                ## Notes
                Stop at the level where the department head can act. A tree that goes six levels deep looks impressive and gets ignored.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A driver tree for each partnered department, with current values and sources, reviewed by its head and used in one decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the one financial outcome that matters most for the department"
                - "Break it into the operational drivers that multiply or add up to it"
                - "Put a current value and source against each driver"
                - "Review the tree with the department head and fix what they challenge"
            - name: Twenty-four month spend and revenue fact base by department
              description: |-
                ## Purpose
                Challenging a department head is credible only when the partner knows their numbers better than anyone: trend by quarter, top suppliers, headcount movements, one-off items. A fact base built from two years of ledger data, cleaned of reclassifications, becomes the reference every later conversation draws on.

                ## Milestones
                1. Twenty-four months of actual spend and, where relevant, revenue extracted by account for each department.
                2. One-off items, reclassifications and reversed accruals identified and adjusted out.
                3. The top twenty suppliers and their annual spend listed for each department.
                4. A one-page summary of trends and surprises shared with each department head.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A like-for-like twenty-four month fact base exists for every partnered department, with a one-page summary sent to each head."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export twenty-four months of transactions for each partnered cost centre"
                - "Tag one-off items and reclassifications so trends are like for like"
                - "Rank suppliers by annual spend for each department"
                - "Write the five things the data says that the department head may not know"
            - name: Department head priorities and pain points interviews
              description: |-
                ## Purpose
                Asking each department head what they are trying to achieve this year, what keeps them awake and where finance has helped or hindered them before reveals where partnering will be valued. Written up and played back, the interviews also show the department head you listened before you started challenging.

                ## Milestones
                1. A forty-five minute interview held with every department head you partner.
                2. Their top three priorities and top three frustrations recorded in their own words.
                3. A short playback note sent to each head within a week.
                4. Common themes across departments summarised for the finance leadership team.

                ## Notes
                Use the same six questions in every interview so the answers can be compared across departments.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every partnered department head has been interviewed and sent a playback note, and a cross-department theme summary exists."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write six interview questions to use with every department head"
                - "Book a forty-five minute slot with each department head"
                - "Send each head a playback note within a week of the interview"
                - "Summarise the common themes for the finance leadership team"
            - name: Partnering request intake and triage rules
              description: |-
                ## Purpose
                Without a front door, a partner's week fills with whoever asked last and loudest, and the analysis that would change a big decision never gets started. Simple rules for how requests arrive, how they are sized and who decides priority when two departments clash protect time for the work that matters.

                ## Milestones
                1. One channel agreed for analysis requests, with the minimum information each must include.
                2. Requests sized as quick answers, standard analysis or projects, with a turnaround for each.
                3. A rule for who decides priority when requests from different departments compete.
                4. The rules shared with every department head and applied for a full month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written intake rules with three request sizes and turnarounds have been shared with every department head and used for a month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count the requests you received last month and where they came from"
                - "Set three request sizes with a target turnaround for each"
                - "Agree with your finance lead who breaks ties between departments"
                - "Explain the intake rules at your next meeting with each department head"
            - name: Department scorecard agreed with the department head
              description: |-
                ## Purpose
                Departments drown in dashboards yet often cannot name the six numbers that tell them whether the month went well. Agreeing a short set of financial and operational measures, each with a definition, a source and a target, gives the partner and the department head the same scorecard to discuss every month.

                ## Milestones
                1. Six to eight measures chosen, mixing financial and operational ones.
                2. A written definition, data source and owner for each measure.
                3. A target or comparison point agreed for each measure.
                4. The set accepted by the department head and the first month reported.

                ## Notes
                If a measure cannot be produced from existing systems within a month, park it rather than build a manual workaround that dies in the second quarter.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each partnered department has six to eight defined measures with sources and targets, accepted by its head and reported once."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every measure the department currently reports"
                - "Shortlist six to eight that explain whether the month went well"
                - "Write a definition and source for each shortlisted measure"
                - "Get the department head's agreement to the final set"
                - "Retire or replace measures nobody used during the year @recurring(yearly)"
            - name: Data source map for each department's systems
              description: |-
                ## Purpose
                The answers to most partnering questions sit outside the ledger: in the CRM, the rota tool, the ticketing system or the HR platform. Knowing which system holds which data, who owns it and how to get an extract cuts days off every piece of analysis.

                ## Milestones
                1. Every system the department uses listed with the data it holds.
                2. A named owner and access route recorded for each system.
                3. Read access or a standing extract arranged for the three most useful sources.
                4. Known data quality problems noted against each source.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A source map lists every departmental system with owner and data held, and access is in place for the three most useful."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each team lead which systems they use day to day"
                - "Record the owner and data held for each system"
                - "Request read access or a monthly extract for the three most useful"
                - "Note the data quality problems the system owners admit to"
            - name: Monthly one-to-one with each department head
              description: |-
                ## Purpose
                The relationship with a department head is built in a steady monthly conversation, not in the budget season scramble. A standing thirty minutes with an agenda of performance, upcoming decisions and one open question keeps finance in the room before decisions are made, not after.

                ## Milestones
                1. A recurring thirty-minute slot in each department head's diary.
                2. A standard agenda used every month: last month, next decisions, one open question.
                3. Notes and agreed actions captured within a day of each meeting.
                4. No department missing more than one month in any quarter.

                ## Notes
                Start from the **1:1** template. If a head cancels twice in a row, ask whether the slot or the format is wrong rather than letting it lapse.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each department head has met their partner in at least ten of the last twelve months, with notes and actions on file."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute slot with each department head"
                - "Set a three-part agenda you will use every month"
                - "Hold the monthly one-to-one and record the agreed actions @recurring(monthly:8)"
                - "Send notes and actions within one working day of each meeting"
            - name: One-page brief before each department meeting
              description: |-
                ## Purpose
                Department heads rarely read a twenty-page pack, but most will read one page sent the day before they meet finance. A brief with three numbers that moved, one risk and the questions you intend to ask means the meeting starts at the conversation, not at explaining the report.

                ## Milestones
                1. A one-page brief layout with space for three movements, one risk and two questions.
                2. The brief sent at least one working day before every monthly meeting.
                3. Each department head's reaction noted, so the next brief improves.
                4. Six consecutive months of briefs on file for each department.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page brief has gone to each department head before six consecutive monthly meetings."
                cadence: rolling
              tasks:
                - "Design a one-page brief layout and test it on one department"
                - "Pick the three movements that matter and write a line on each"
                - "Send the brief one working day before the department meeting @recurring(monthly:6)"
                - "Ask the department head what they would cut or add to the brief"
            - name: Weekly leading indicator check with team leads
              description: |-
                ## Purpose
                Monthly actuals arrive too late to change the month. A fifteen-minute weekly check on two or three leading indicators, such as order intake, overtime hours or open tickets, lets the partner and the team leads spot a drift in week two instead of explaining it in week six.

                ## Milestones
                1. Two or three leading indicators agreed for each department with its team leads.
                2. A weekly fifteen-minute check in the diary.
                3. A simple log of each week's values and any action taken.
                4. At least one early correction made because of the weekly check.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly indicator log with at least twelve consecutive weeks of entries and one recorded early correction."
                cadence: rolling
              tasks:
                - "Agree two or three leading indicators with each department's team leads"
                - "Set up a log with a column for each indicator and an action note"
                - "Review the indicators with the team leads for fifteen minutes @recurring(weekly:tue)"
                - "Drop any indicator that has not prompted a conversation in three months"
            - name: Spend challenge before commitment
              description: |-
                ## Purpose
                Challenge after an order is signed only produces a variance explanation; challenge before it can change the decision. Reviewing new spend above an agreed threshold, with three questions on need, alternatives and ongoing cost, catches the subscription that duplicates an existing tool or the contractor engaged for a year when three months would do.

                ## Milestones
                1. A threshold agreed with each department head above which new spend comes to the partner first.
                2. Three standard challenge questions written and shared with budget holders.
                3. Every request above the threshold reviewed within two working days.
                4. A log of requests reviewed, changed or stopped, with the annual saving or cost avoided.

                ## Notes
                The aim is better spend, not less of it. Partners who say yes quickly to sound requests earn the standing to push back on weak ones. Formal approval stays with whoever the authority matrix names; this is a conversation, not a sign-off.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every new spend request above the agreed threshold in the last quarter was reviewed within two working days and logged with its outcome."
                cadence: rolling
              tasks:
                - "Agree a pre-commitment review threshold with each department head"
                - "Write the three questions every spend request must answer"
                - "Review the week's new spend requests above the threshold @recurring(weekly:thu)"
                - "Total the year's changed and stopped requests for each department head @recurring(yearly)"
            - name: Decision log for each partnered department
              description: |-
                ## Purpose
                Six months after a decision, nobody remembers what was assumed, what was expected or who agreed. A short log entry for every decision finance supported, recording the options, the assumptions, the expected result and the decision maker, makes later reviews honest and stops the same debate being reopened.

                ## Milestones
                1. A decision log with columns for date, decision, options, key assumptions, expected result and decision maker.
                2. Every decision finance supported in the last quarter entered retrospectively.
                3. New decisions logged within a week of being made.
                4. A monthly check of past decisions against what actually happened.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A decision log holds every finance-supported decision from the last six months, each with assumptions and an outcome check."
                cadence: rolling
              tasks:
                - "Set up a decision log with the six columns"
                - "Back-fill the decisions you supported in the last quarter"
                - "Compare logged decisions with what actually happened @recurring(monthly:20)"
                - "Share notable outcomes with the decision maker, good or bad"
            - name: Quarterly business review with each department
              description: |-
                ## Purpose
                A quarterly review steps back from the month: is the department on track against its priorities, are the drivers moving the way the plan assumed, and what should change next quarter. Run jointly by the department head and the partner, it is where reallocation, hiring timing and initiative changes get decided.

                ## Milestones
                1. A standard agenda covering priorities, driver trends, risks and next-quarter decisions.
                2. Pre-reads issued five working days before each review.
                3. Decisions and owners recorded in the meeting notes.
                4. Four reviews held in a year for every partnered department.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews per partnered department in a year, each with pre-reads issued on time and decisions recorded."
                cadence: cyclic
              tasks:
                - "Agree the review agenda with each department head"
                - "Issue pre-reads five working days before the review"
                - "Run the quarterly business review and record decisions and owners @recurring(quarterly)"
                - "Follow up open decisions within two weeks of the review"
            - name: Partner meeting actions tracker
              description: |-
                ## Purpose
                Partnering credibility rests on doing what you said you would by when you said it. One tracker for every action from department meetings, owned by either finance or the department and swept weekly, turns promises into a visible record and shows when the department is the one holding things up.

                ## Milestones
                1. A single tracker holding every open action from partner meetings, with owner and due week.
                2. Actions entered within a day of each meeting.
                3. A weekly sweep closing finished items and chasing overdue ones.
                4. Fewer than one in ten actions more than two weeks overdue.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One tracker holds all partner meeting actions, and fewer than ten percent are more than two weeks overdue at any weekly sweep."
                cadence: rolling
              tasks:
                - "Collect open actions from the last two months of meeting notes"
                - "Put every action in one tracker with owner and due week"
                - "Sweep the tracker, close finished actions and chase late ones @recurring(weekly:fri)"
                - "Show each department head their side of the tracker at the monthly meeting"
            - name: Monthly partnering backlog and capacity review
              description: |-
                ## Purpose
                Partners routinely accept more analysis than they can deliver, then rush the work that matters most. Looking at the backlog once a month against available hours, and agreeing with the finance lead what to drop, delay or hand to an analyst, keeps commitments realistic.

                ## Milestones
                1. Every open request listed with its size, requester and promised date.
                2. Available partner hours for the coming month estimated after routine work.
                3. Requests above capacity dropped, delayed or reassigned, with the requester told.
                4. Nothing in the backlog older than eight weeks without a decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly backlog review is held with the finance lead and no request is older than eight weeks without a decision."
                cadence: rolling
              tasks:
                - "List every open analysis request with size and promised date"
                - "Estimate the hours you have left after recurring reporting"
                - "Review the backlog with your finance lead and agree what moves @recurring(monthly:2)"
                - "Tell requesters promptly when their work is delayed or dropped"
            - name: Annual partner feedback survey
              description: |-
                ## Purpose
                Most partners judge themselves on the analysis they produced, while department heads judge them on whether it helped. A short survey each year, five questions plus one open comment, gives honest evidence of where the partnering is valued and where it feels like policing.

                ## Milestones
                1. A five-question survey covering usefulness, timeliness, challenge, accessibility and business understanding.
                2. The survey sent to every department head and key budget holder.
                3. Responses grouped into themes with two or three changes chosen.
                4. The changes shared back with respondents within a month.

                ## Notes
                Start from the **Feedback themes** template. Ask a colleague outside your team to send it, so people answer more candidly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A yearly survey of department heads has been run, its themes summarised and two changes communicated to respondents."
                cadence: cyclic
              tasks:
                - "Write five survey questions and one open comment box"
                - "Ask a colleague outside your team to send the survey"
                - "Run the partner feedback survey with department heads @recurring(yearly)"
                - "Group responses into themes and pick two changes"
                - "Tell respondents what you will change as a result"
            - name: Ninety-day upcoming decisions calendar
              description: |-
                ## Purpose
                Finance adds most value when it knows a decision is coming weeks before the meeting where it is made: a contract renewal, a hiring wave, a system replacement, a price change. A rolling ninety-day view of each department's upcoming decisions lets the partner prepare the analysis in time instead of reviewing a finished proposal.

                ## Milestones
                1. A calendar listing each department's known decisions for the next ninety days.
                2. Each decision tagged with the analysis finance should prepare.
                3. Contract renewals and notice dates from the supplier records added.
                4. The calendar refreshed monthly with each department head.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ninety-day decisions calendar for every partnered department, refreshed in each of the last three months."
                cadence: rolling
              tasks:
                - "Ask each department head what decisions they expect in the next quarter"
                - "Add renewal and notice dates for each department's main supplier contracts"
                - "Note the analysis finance needs to prepare for each decision"
                - "Roll the calendar forward and add new decisions @recurring(monthly:25)"
            - name: Industry and competitor reading for your departments
              description: |-
                ## Purpose
                Department heads respect a partner who understands their world beyond the ledger: what competitors charge, how peers staff a similar function, what the trade press says is changing. A small, steady reading habit, one or two pieces a month per department, builds that understanding faster than any course.

                ## Milestones
                1. Three to five sources chosen for each partnered department: trade press, analyst notes, peer benchmarks.
                2. A reading list kept with a one-line takeaway per item.
                3. At least one insight from reading raised in a department conversation each quarter.
                4. A short benchmark sheet for each department built from what you read.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reading list with takeaways for each department and at least four outside insights raised in department meetings over a year."
                cadence: rolling
              tasks:
                - "Ask each department head which publications they read"
                - "Set up a reading list with a takeaway column"
                - "Read two pieces about your departments' industries and note one takeaway each @recurring(monthly:14)"
                - "Bring one outside insight to a department conversation this quarter"
            - name: Challenge questions that help rather than block
              description: |-
                ## Purpose
                Challenge lands as obstruction when it sounds like a test the department head must pass. Practising open, curious questions, such as what would have to be true for this to pay back, or what happens if we wait a quarter, keeps the department head thinking with you rather than defending against you.

                ## Milestones
                1. A personal bank of fifteen challenge questions grouped by need, options, risk and timing.
                2. Questions rehearsed with a colleague on a real proposal before the meeting.
                3. Two meetings observed by a colleague, with feedback on tone and timing.
                4. A note of which questions changed a decision and which caused friction.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written bank of fifteen challenge questions and feedback from a colleague who observed two real meetings."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write fifteen challenge questions grouped under need, options, risk and timing"
                - "Rehearse your questions on a live proposal with a colleague"
                - "Ask a colleague to sit in on two meetings and give feedback"
                - "Note which questions moved the conversation and which shut it down"
            - name: Telling the story behind the numbers to non-finance leaders
              description: |-
                ## Purpose
                Operational leaders remember a clear message and one picture, not a table of variances. Learning to open with the answer, use one chart per point and translate cost lines into operational language, such as two agents' worth of overtime, makes finance analysis something people act on.

                ## Milestones
                1. A one-page structure for any finance message: answer, three reasons, ask.
                2. Three past analyses rewritten in that structure.
                3. One chart redesigned to show a single point at a glance.
                4. Feedback gathered from a department head on a rewritten piece.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three analyses rewritten to lead with the answer, with a department head's feedback recorded on at least one."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick three recent analyses that did not lead to action"
                - "Rewrite each to open with the answer and the ask"
                - "Redesign one chart so it shows only one point"
                - "Ask a department head which version they would rather receive"
            - name: Influencing decisions without formal authority
              description: |-
                ## Purpose
                A business partner rarely owns the budget or the decision, so results come through persuasion: understanding what the decision maker cares about, building allies before the meeting and choosing which battles to fight. Studying and practising these skills on purpose turns good analysis into changed decisions.

                ## Milestones
                1. One book or course on influence completed, with notes on three techniques.
                2. A pre-meeting plan written for one contested decision: who to brief, in what order, with what.
                3. The outcome of that decision compared with the plan.
                4. Two techniques adopted as standing habits.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One influence course or book completed and a written pre-meeting plan used on a contested decision, with its outcome noted."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose one book or short course on influencing and block time for it"
                - "Write a pre-meeting plan for the next contested decision you support"
                - "Brief the two most influential people before the meeting"
                - "Compare what happened with your plan and note what to repeat"
            - name: Frontline shadowing days in partnered departments
              description: |-
                ## Purpose
                Half a day on the warehouse floor, at the service desk or riding along with a sales rep teaches more about a department's costs than a month of reports. Regular shadowing gives the partner real examples to use in conversations and earns trust from the people whose work the numbers describe.

                ## Milestones
                1. A half-day shadowing session arranged with each partnered department.
                2. Notes from each visit covering what drives time, cost and rework.
                3. At least one finding from shadowing fed into analysis or a decision.
                4. A visit repeated with a partnered department every quarter.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four half-day shadowing visits in a year, each written up, with at least one finding used in analysis or a decision."
                cadence: rolling
              tasks:
                - "Ask each department head to host a half-day shadowing visit"
                - "Write up what drives time, cost and rework after each visit"
                - "Spend half a day with frontline staff in one partnered department @recurring(quarterly)"
                - "Use one example from shadowing in your next department meeting"
            - name: Reading commercial contracts for their money terms
              description: |-
                ## Purpose
                Many of a department's financial commitments are fixed in clauses finance never sees: auto-renewals, minimum volumes, price indexation, termination fees. Learning to read a commercial contract for its money terms lets the partner spot exposure before signature and explain it to the department head in plain words.

                ## Milestones
                1. A checklist of money terms to look for: price, indexation, minimums, renewal, notice, termination and liability caps.
                2. Three of the department's largest contracts read against the checklist.
                3. Exposures found summarised for the department head.
                4. Legal or procurement colleagues asked to confirm interpretations where unsure.

                ## Notes
                Reading for money terms is not legal review. Anything about liability, warranties or enforceability goes to your legal team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three major departmental contracts reviewed against a money terms checklist, with renewal dates and exit costs summarised for the head."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a checklist of the money terms to look for in a contract"
                - "Read the department's three largest supplier contracts against it"
                - "Summarise renewal dates, minimums and exit costs for the department head"
                - "Check any uncertain reading with legal or procurement"
            - name: Facilitating a decision meeting with competing options
              description: |-
                ## Purpose
                When a department must choose between options, finance is often the most neutral person in the room and well placed to run the discussion. Learning to frame the decision, set criteria before options are debated and close with a clear owner and next step keeps meetings from ending in another round of analysis.

                ## Milestones
                1. A simple facilitation plan: decision statement, criteria, options, recommendation, close.
                2. Criteria agreed with the decision maker before the options are presented.
                3. One real decision meeting facilitated using the plan.
                4. The decision, owner and date recorded within a day.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One decision meeting run from a written facilitation plan, ending with a recorded decision, owner and date."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-line statement of the decision to be made"
                - "Agree the decision criteria with the decision maker beforehand"
                - "Facilitate the meeting using the plan and close with an owner and date"
                - "Enter the outcome in the department's decision log"
            - name: Partner skills self-assessment and development plan
              description: |-
                ## Purpose
                Business partnering asks for commercial judgement, communication and influence alongside technical accounting, and most partners are stronger in one than the others. Rating yourself against a short skills list, getting your manager's view and picking two areas to work on for six months gives development a focus.

                ## Milestones
                1. A self-rating against eight partnering skills, from technical accounting to influence.
                2. Your manager's rating gathered and compared with your own.
                3. Two development areas chosen with a concrete activity for each.
                4. Progress checked quarterly against the plan.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A written development plan with two focus skills, agreed with your manager and reviewed at least twice in six months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Rate yourself against eight partnering skills on a five-point scale"
                - "Ask your manager to rate you on the same list"
                - "Choose two skills to develop and one activity for each"
                - "Review progress on your development plan with your manager @recurring(quarterly)"
            - name: Make-or-buy analysis for a department service
              description: |-
                ## Purpose
                Department heads regularly ask whether to keep a service in house or outsource it: customer support, field maintenance, design work, payroll processing. A balanced analysis covering full cost, transition cost, quality risk and loss of control lets them decide on more than the headline price in a supplier's proposal.

                ## Milestones
                1. The in-house cost built up fully, including management time, space and systems.
                2. At least two external quotes on the same scope and service levels.
                3. Transition costs, exit terms and service risks set out beside the price.
                4. A recommendation and the department head's decision recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A make-or-buy comparison with full in-house cost and two external quotes, ending in a decision recorded by the department head."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Agree the exact scope and service levels to compare"
                - "Build the full in-house cost, including overheads that would not disappear"
                - "Collect two external quotes on the same scope"
                - "Present the options with transition and exit costs alongside price"
            - name: Pricing change support with sales and product leaders
              description: |-
                ## Purpose
                Price changes touch volume, margin, competitor response and sales commission at once, and finance is usually asked for a view the week before they go live. Working with sales and product from the start on the expected volume response, the customers most at risk and how results will be tracked makes the change a decision rather than a guess.

                ## Milestones
                1. The proposed change modelled under at least three volume responses.
                2. The customers and segments most at risk named with their revenue.
                3. A tracking plan for the first three months after the change.
                4. The decision and its assumptions logged with the sales and product leads.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A price change modelled under three volume cases, with at-risk customers named and a three-month tracking plan agreed."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Ask sales and product for the proposed change and the reason for it"
                - "Model the margin effect under low, expected and high volume loss"
                - "List the twenty customers most exposed to the change"
                - "Agree how results will be tracked for three months after launch"
            - name: Deal review criteria for non-standard customer terms
              description: |-
                ## Purpose
                Sales teams under quarter-end pressure agree extended payment terms, deep discounts and free extras that look small one deal at a time. Clear criteria for when a deal needs finance review, with a two-day turnaround, protect margin and cash without making finance the reason a deal was lost.

                ## Milestones
                1. Triggers for finance review written: discount above a set level, payment terms beyond standard, bundled free services.
                2. A one-page deal review sheet covering margin, cash timing and precedent.
                3. A two-working-day turnaround agreed with the sales leader.
                4. The first ten reviewed deals logged with their outcome.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written deal review triggers and a one-page review sheet agreed with the sales leader, with ten reviewed deals logged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull last quarter's deals with discounts or terms outside standard"
                - "Agree the review triggers with the sales leader"
                - "Draft a one-page deal review sheet"
                - "Log the outcome of the first ten reviewed deals"
            - name: Negotiation support for a department's largest supplier contract
              description: |-
                ## Purpose
                Renewing the largest contract in a department is often handled by the department head alone, armed only with the supplier's own figures. Preparing the spend history, usage data, market price evidence and a walk-away position gives them a stronger hand and a clear sense of what a good deal looks like.

                ## Milestones
                1. Three years of spend and usage with the supplier summarised.
                2. Price benchmarks or alternative quotes gathered.
                3. Target, acceptable and walk-away positions agreed with the department head.
                4. The negotiated outcome compared with the target and recorded.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A negotiation pack with three years of usage, two benchmarks and agreed walk-away terms, and the final outcome recorded against target."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Identify the department's largest contract due for renewal in the next six months"
                - "Summarise three years of spend and actual usage"
                - "Gather two benchmarks or alternative quotes"
                - "Agree target and walk-away positions before the first supplier meeting"
            - name: Escalation protocol when partner and department head disagree
              description: |-
                ## Purpose
                Every partner serves two masters: the department they support and the finance function that must keep the numbers honest. A written protocol for what happens when a department head wants to spend outside budget, smooth a result or skip a control keeps the partner trusted without becoming complicit, and saves agonising in the moment.

                ## Milestones
                1. A list of situations where the partner must decline or escalate, agreed with the finance lead.
                2. An escalation route with named people and expected timing.
                3. The protocol explained to each department head before it is needed.
                4. Any escalation recorded with its outcome.

                ## Notes
                Raise the protocol in a calm month. Introducing it during a disagreement looks like a threat.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written escalation protocol agreed with the finance lead and explained to every partnered department head."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the situations where you must decline or escalate a request"
                - "Agree the escalation route and timing with your finance lead"
                - "Explain the protocol to each department head in a routine meeting"
                - "Record each escalation and how it was resolved"
            - name: Marketing spend return framework with the marketing lead
              description: |-
                ## Purpose
                Marketing budgets are among the first cut in a squeeze, often because nobody can show what they return. Agreeing with the marketing lead how each channel's spend will be measured, what counts as a result and over what period builds an evidence base you both trust before the next budget argument.

                ## Milestones
                1. Each marketing channel listed with its spend and the result it is meant to drive.
                2. An agreed measure of return for each channel, with its known weaknesses written down.
                3. A monthly results view by channel shared with the marketing lead.
                4. One reallocation decision made using the framework.

                ## Notes
                Attribution is never perfect. Agree a method you both accept and keep it stable, rather than changing it whenever results disappoint.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A channel-by-channel return framework agreed with the marketing lead and used for at least one budget reallocation."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List marketing channels with last year's spend for each"
                - "Agree the result each channel is meant to drive with the marketing lead"
                - "Write down the weaknesses of each measure you agree"
                - "Review channel spend against results with the marketing lead @recurring(monthly:12)"
            - name: Sales incentive plan design review
              description: |-
                ## Purpose
                Commission plans shape behaviour more than any policy: a plan paid on bookings rewards discounting, one paid on revenue ignores cash, and uncapped accelerators can cost more than the margin they bring. Testing a proposed plan with the sales leader against past deals, before it is announced, shows what it will encourage and what it will cost.

                ## Milestones
                1. The proposed plan run against last year's actual deals for every rep.
                2. Total cost and cost as a share of margin compared with the current plan.
                3. Behaviours the plan rewards and the loopholes it leaves written down.
                4. Recommended changes agreed with the sales leader before the plan is announced.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The proposed incentive plan back-tested on last year's deals, with cost and loopholes documented and changes agreed before launch."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Get the proposed plan rules and last year's deal data"
                - "Recalculate every rep's pay under the proposed plan"
                - "List the behaviours and loopholes the plan creates"
                - "Agree changes with the sales leader before the plan is announced"
            - name: Overtime, agency or extra shift decision for operations
              description: |-
                ## Purpose
                When demand rises, operations leaders reach for whatever is quickest: overtime, agency staff or another shift. Comparing the full cost per productive hour, the quality and safety effects and how long the demand will last helps the operations head choose deliberately and know the point at which the answer should change.

                ## Milestones
                1. The cost per productive hour for overtime, agency and an added shift worked out.
                2. Fatigue, quality and safety effects discussed with the operations head.
                3. A volume or duration threshold set at which the preferred option changes.
                4. The decision and threshold recorded and reviewed after three months.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between overtime, agency and an extra shift, with cost per hour for each and a switching threshold."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather overtime rates, agency charges and shift premium costs"
                - "Work out cost per productive hour for each option"
                - "Discuss fatigue, quality and safety effects with the operations head"
                - "Set the demand threshold at which you would switch option"
            - name: Finance input to a department strategy offsite
              description: |-
                ## Purpose
                Strategy offsites produce ambitious plans that later collapse when they meet the budget. Bringing a short fact pack, with the current run rate, the cost of the ideas already on the table and the constraints the business faces, means the plan leaves the room affordable or with its trade-offs clear.

                ## Milestones
                1. A five-page fact pack agreed with the department head before the offsite.
                2. Rough costs prepared for the initiatives likely to be proposed.
                3. Finance's part of the agenda delivered in under thirty minutes.
                4. Initiatives agreed at the offsite costed within two weeks.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fact pack used at the offsite and every agreed initiative costed and sent to the department head within two weeks."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the department head for the offsite agenda and likely initiatives"
                - "Build a five-page fact pack on run rate and constraints"
                - "Prepare rough costs for the initiatives most likely to come up"
                - "Cost the agreed initiatives within two weeks of the offsite"
            - name: Finance readiness for a new product or service launch
              description: |-
                ## Purpose
                Launches often go live with prices agreed but no billing set up, no way to report results separately and no view of break-even. A finance readiness check before launch, covering pricing, costing, billing, revenue treatment and reporting, means the first month's results can be read rather than reconstructed.

                ## Milestones
                1. Price, expected volumes and unit cost confirmed with the launch team.
                2. Billing, product codes and revenue treatment confirmed with the relevant finance teams.
                3. A reporting line set up so results can be seen separately from day one.
                4. A break-even point and a ninety-day results review date agreed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before go-live, billing, product codes, revenue treatment and separate reporting are confirmed and a ninety-day review is booked."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Get the launch date, price and expected volumes from the launch team"
                - "Check billing and product codes are set up before go-live"
                - "Ask the accounting team to confirm the revenue treatment"
                - "Book a ninety-day results review with the launch owner"
            - name: Department head's executive or board presentation
              description: |-
                ## Purpose
                When a department head presents to the executive team or the board, one weak or inconsistent figure can sink a good proposal. Partnering on the financial pages, checking every figure ties to the books and rehearsing the hard questions together protects them and the finance function.

                ## Milestones
                1. Every financial figure in the presentation traced to an agreed source.
                2. Figures reconciled with what finance reports elsewhere to the same audience.
                3. Ten likely questions listed with prepared answers.
                4. One rehearsal held with the partner playing the toughest audience member.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Every figure in the presentation traced to source, ten questions prepared and one rehearsal held before the meeting."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Get the draft presentation at least a week before the meeting"
                - "Trace every financial figure to its source and fix mismatches"
                - "List the ten hardest questions the audience could ask"
                - "Rehearse the financial section with the department head"
            - name: Mid-year partnering review with each department head
              description: |-
                ## Purpose
                Halfway through the year is the right moment to ask whether the partnering arrangement is working: which analysis was used, which meetings were wasted, what the second half needs. A dedicated review, separate from performance meetings, resets the charter while there is still time to change the year's outcome.

                ## Milestones
                1. A list of the analysis and support delivered in the first half, with what each led to.
                2. The department head's view gathered on what to keep, stop and start.
                3. The charter updated for the second half.
                4. Second-half priorities agreed and added to the request backlog.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A mid-year review held with every partnered department head, with keep, stop and start points recorded and charters updated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what you delivered for the department in the first half"
                - "Ask the department head what to keep, stop and start"
                - "Update the partnering charter with the changes"
                - "Add the agreed second-half priorities to your backlog"
            - name: Handover of a partnered department to a new partner
              description: |-
                ## Purpose
                Relationships, the context behind past decisions and half-finished analyses often leave with a departing partner. A written handover pack and two joint meetings with the department head give the successor a running start and the department continuity.

                ## Milestones
                1. A handover pack covering the charter, stakeholder map, fact base, decision log and open requests.
                2. Two joint meetings held with the department head and the incoming partner.
                3. Open actions reassigned, with the department told.
                4. A check-in one month after handover to catch anything missed.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A complete handover pack delivered, two joint meetings held and every open action reassigned before you leave the role."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather the charter, stakeholder map, fact base and decision log in one folder"
                - "Write a one-page note on each department head's style and priorities"
                - "Hold two joint meetings with the department head and your successor"
                - "Check in with your successor a month after handover"
            - name: First ninety days as a new finance business partner
              description: |-
                ## Purpose
                New partners who start by producing reports become report producers; those who start by listening and solving one visible problem become partners. A ninety-day plan, thirty days learning the department, thirty building the basics and thirty delivering a first piece of decision support, sets the pattern for the role.

                ## Milestones
                1. By day thirty: interviews held, operating model understood and fact base built.
                2. By day sixty: charter agreed, monthly rhythm running and scorecard drafted.
                3. By day ninety: one piece of decision support delivered and its outcome recorded.
                4. A ninety-day review held with your manager and one department head.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "By day ninety, a charter, monthly rhythm and one delivered piece of decision support exist and a review with your manager is held."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Draft your thirty, sixty and ninety day goals and share them with your manager"
                - "Book interviews with every department head in your first two weeks"
                - "Choose one visible problem to solve by day ninety"
                - "Hold a ninety-day review with your manager and a department head"
            - name: Moving from management accountant to business partner
              description: |-
                ## Purpose
                Accountants promoted into partnering roles often keep doing the reporting they are good at and fit partnering around it. Deliberately handing reporting work to others, changing how your week is spent and building commercial skills over six months makes the shift real rather than a new job title.

                ## Milestones
                1. A time log showing how your week splits between reporting, analysis and partnering.
                2. Routine reporting tasks handed over or automated, with a target split agreed with your manager.
                3. Two commercial skills chosen and practised on live work.
                4. A second time log after six months showing the changed split.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two time logs six months apart show partnering time at or above the split agreed with your manager."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Log how you spend your time for two typical weeks"
                - "Agree a target split of reporting and partnering time with your manager"
                - "Hand over or automate two routine reporting tasks"
                - "Repeat the time log after six months and compare"
            - name: Partnering a first-time department head
              description: |-
                ## Purpose
                Newly promoted department heads may never have owned a budget, read a cost centre report or built a business case. Offering a short induction in their numbers, how spending approval works and the calendar of finance deadlines helps them succeed and builds a relationship that lasts their whole tenure.

                ## Milestones
                1. A one-hour induction on the department's budget, reports and approval routes held.
                2. The finance calendar for the year shared with their key dates highlighted.
                3. Their monthly cost centre report walked through together line by line.
                4. Fortnightly check-ins held for their first three months.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The new department head has had a finance induction, a report walk-through and six fortnightly check-ins in their first three months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Offer the new department head a one-hour finance induction"
                - "Walk through their cost centre report line by line"
                - "Share the year's finance calendar with their key dates marked"
                - "Book fortnightly check-ins for their first three months"
            - name: Partnering a department under cost pressure
              description: |-
                ## Purpose
                Cutting spend quickly changes the partner's job from challenging to supporting: finding options, sizing them honestly and helping the department head choose cuts that do the least harm. A structured weekly rhythm through the pressure period keeps decisions moving and the team informed.

                ## Milestones
                1. The size of the gap and the deadline agreed with the department head and leadership.
                2. An options list with savings, timing, risk and reversibility for each.
                3. A chosen package of actions covering the gap with a margin of safety.
                4. Savings delivered tracked weekly against the package.

                ## Notes
                Separate decisions about people from other savings and involve HR early. Never let headcount figures circulate before the people affected have been told properly.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A chosen savings package covering the agreed gap, with weekly tracking showing delivered savings against each action."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Confirm the savings target and deadline in writing"
                - "List options with savings, timing, risk and reversibility"
                - "Help the department head choose a package that covers the gap"
                - "Track savings delivered against the package with the department head @recurring(weekly:mon)"
            - name: Partnering department heads through a reorganisation
              description: |-
                ## Purpose
                Reorganisations move people and budgets between department heads, and arguments about who inherited which costs can sour relationships for a year. Partnering the affected heads through the change, agreeing the budget split, briefing budget holders on what their reports will show and checking the first months of actuals, keeps the new structure's numbers trusted from the start.

                ## Milestones
                1. The budget split between affected department heads agreed in writing.
                2. Every affected budget holder briefed on what changes in their reports and from when.
                3. Open commitments such as contracts and planned hires assigned to a new owner.
                4. Three months of actuals checked with each head to confirm costs land where agreed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written budget split accepted by every affected head and three months of actuals confirmed as landing where agreed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Get the new structure and effective date from HR"
                - "Agree the budget split between the affected department heads"
                - "List open contracts and planned hires and assign each a new owner"
                - "Review the first three months of actuals with each affected head"
            - name: Partnering across regions with local finance teams
              description: |-
                ## Purpose
                In an enterprise, a global function head may be partnered centrally while each country has its own finance team with local knowledge and local loyalties. Agreeing who partners whom, how local insight reaches the global partner and how conflicting messages are avoided stops the department head hearing three versions of the same number.

                ## Milestones
                1. A coverage map showing which finance person partners each regional and global leader.
                2. A monthly call with local finance contacts to share issues before results are published.
                3. One agreed version of each key figure used in all regional and global conversations.
                4. Disagreements between local and global views settled through a named route.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A regional coverage map exists and a monthly call with local finance contacts has run before each of the last three results cycles."
                cadence: rolling
              tasks:
                - "Map which finance person partners each global and regional leader"
                - "Agree with local finance teams how issues reach you before results publish"
                - "Hold the regional finance partners call ahead of month-end results @recurring(monthly:22)"
                - "Name who settles disagreements between local and global figures"
            - name: Leading a team of finance business partners
              description: |-
                ## Purpose
                Managers of partner teams balance coverage, development and consistency, because each partner builds their own style and department heads compare notes. A monthly team session reviewing live cases, shared standards for core outputs and a clear coverage plan keeps quality even and gives junior partners a place to learn.

                ## Milestones
                1. A coverage plan showing which partner supports which departments, with backup cover.
                2. Shared standards for the charter, monthly brief and decision log.
                3. A monthly case review where one partner presents a live challenge.
                4. Each partner's development plan reviewed twice a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A coverage plan with backups, written output standards and monthly case reviews held in at least ten months of the year."
                cadence: rolling
              tasks:
                - "Draw up the coverage plan with a backup partner for each department"
                - "Agree common standards for charters, briefs and decision logs"
                - "Run a monthly case review where one partner brings a live problem @recurring(monthly:10)"
                - "Review each partner's development plan with them"
            - name: Finance business partnering model for the finance function
              description: |-
                ## Purpose
                In larger organisations, partnering works only when the rest of finance is designed around it: transactional work in a shared service, specialist analysis in a centre of excellence, partners free to spend time with the business. Reviewing coverage ratios, role boundaries and where partner time actually goes shows whether the model is delivering or whether partners have quietly become report producers.

                ## Milestones
                1. Current coverage set out: departments, budget value and headcount supported per partner.
                2. Partner time split measured across reporting, analysis and partnering.
                3. Role boundaries between partners, reporting teams and specialist analysts written down.
                4. A recommended model, with changes and timing, approved by the finance leadership team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recommended partnering model, based on measured coverage and time split, approved by the finance leadership team."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List each partner's departments, budget value and headcount supported"
                - "Survey partners on how their time splits across reporting, analysis and partnering"
                - "Write down where partner, reporting and specialist roles begin and end"
                - "Present a recommended model to the finance leadership team"
            - name: Value delivered by finance partnering
              description: |-
                ## Purpose
                Finance partners are often asked to justify their own cost, and a list of reports produced does not answer the question. Tracking the decisions changed, spend avoided, revenue protected and risks raised early, each confirmed by the department head, builds an evidence record that holds up in the next headcount debate.

                ## Milestones
                1. A value log with categories for decisions changed, spend avoided, revenue protected and risks raised.
                2. Each entry confirmed by the department head involved.
                3. Values estimated conservatively, with the method noted.
                4. A short annual summary presented to the finance leadership team.

                ## Notes
                Claim only what the department head will confirm. One inflated number can discredit the whole record.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A value log with department-confirmed entries and a one-page annual summary presented to finance leadership."
                cadence: rolling
              tasks:
                - "Set up a value log with four categories and a method column"
                - "Back-fill entries from the last six months of decision logs"
                - "Confirm new value log entries with the department heads involved @recurring(quarterly)"
                - "Ask the agent to draft a one-page annual summary from the value log"
            - name: Debiasing reviews for large department decisions
              description: |-
                ## Purpose
                Big departmental decisions are prone to optimism, anchoring on the first number and sunk cost reasoning. Building a pre-mortem, a reference-class check against similar past projects and an explicit stop criterion into the partner's review of large proposals improves decisions without slowing them much.

                ## Milestones
                1. A threshold set above which proposals get a debiasing review.
                2. A pre-mortem run on one live proposal, with the failure reasons recorded.
                3. Outcomes of five similar past projects gathered as a reference class.
                4. A written stop or rethink criterion agreed for the approved proposal.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One large proposal has been through a pre-mortem and reference-class check, with a written stop criterion agreed before approval."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set the size of proposal that warrants a debiasing review"
                - "Run a pre-mortem with the proposal team on one live decision"
                - "Gather outcomes of five similar past projects for comparison"
                - "Agree a written stop criterion before the proposal is approved"
---

# Finance Business Partnering

This area is for the finance partner who sits alongside department heads: a manager taking on partnering for the first time, a member of an enterprise finance team covering several functions, or someone leading a team of partners. It starts with foundations (a charter, a stakeholder map, the department's operating model, driver tree, fact base, priorities, intake rules, measures and data sources), then the monthly and weekly partnering rhythm, the skills of challenge, storytelling and influence, commercial decisions on make or buy, pricing, deals, suppliers and incentives, dated events such as offsites, launches and handovers, situations from your first ninety days to cost pressure and reorganisations, and finally specialist work on the partnering model, its value and better decisions.

What repeats is a monthly one-to-one and one-page brief for each department head, weekly leading indicator checks, spend challenge and action sweeps, a monthly decisions calendar and backlog review, quarterly business reviews and shadowing, and a yearly charter refresh and feedback survey. The 1:1, Meeting notes, Feedback themes, Reading queue, Development plan and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
