---
id: sales-revenue.front-line-sales-management
name: Front-Line Sales Management
description: "A front-line sales manager's week in one place: the team number, one-to-ones, deal inspection, hiring and backfills, recognition and performance, and the situations that test new and seasoned managers."
category: business
version: 1.0.0
tags: [sales-revenue, front-line-sales-management, manager, team, one-to-ones, deal-inspection, sales-hiring, team-performance]
author: Aurum Technology
starter_structure:
  templates:
    - person
    - metrics-log
    - one-on-one
    - meeting-notes
    - development-plan
    - onboarding-30-60-90
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Front-Line Sales Management
          description: "The weekly work of a sales manager: deal inspection, one-to-ones, hiring, motivation and keeping a team of sellers focused on the number."
          projects:
            - name: Team number and coverage baseline by seller
              description: |-
                ## Purpose
                Most managers can quote the team quota but not how it splits by seller, how much is already closed or how much qualified pipeline stands behind the rest. A one-page baseline of quota, closed to date, open pipeline and coverage for each seller shows on day one where the quarter will be won or lost, and which conversations to have first.

                ## Milestones
                1. Team and individual quotas for the quarter and the year written on one page, confirmed with sales operations or finance.
                2. Closed revenue to date and open pipeline recorded for each seller.
                3. Coverage of the remaining quota calculated for each seller and for the team.
                4. The two or three sellers with the widest gap between quota and coverage named, with a first conversation booked.

                ## Notes
                Take quota figures from the signed plan documents, not from what people remember. If the two differ, settle it now rather than at commission time.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page baseline shows quota, closed to date, open pipeline and coverage for every seller, checked against the official quota documents."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export this quarter's closed and open deals by owner from the CRM"
                - "Collect each seller's signed quota letter or plan document"
                - "Calculate remaining quota and pipeline coverage for every seller"
                - "Book a gap conversation with the two sellers furthest behind"
            - name: One-page profile for every seller
              description: |-
                ## Purpose
                Managing eight people well means remembering eight sets of goals, strengths and pressures, and memory gives out by the third busy week. A short profile per seller, covering tenure, attainment history, what they do best, what they want next and anything outside work they have chosen to share, makes every one-to-one and review start from facts.

                ## Milestones
                1. A profile for each seller with tenure, role, quota and the last four quarters of attainment.
                2. Each seller's career goal and preferred kind of recognition captured in their own words.
                3. One strength and one development area noted for each person and agreed with them.
                4. Profiles stored privately where only you and your own manager can see them.

                ## Notes
                Start from the **Person** template. Keep personal details to what the seller has volunteered, and write nothing you would mind them reading.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A private profile exists for every seller, each with four quarters of attainment, a career goal in their words and an agreed development area."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Create a profile page for each seller from the person template"
                - "Pull the last four quarters of attainment for every seller"
                - "Ask each seller in their next one-to-one what they want to be doing in two years"
                - "Refresh every profile with the latest attainment and goals @recurring(quarterly)"
            - name: Protected weekly calendar for the sales manager
              description: |-
                ## Purpose
                Without a fixed week, a sales manager's time drains into escalations, internal meetings and other people's fires, and one-to-ones and deal reviews are the first things cancelled. Blocking a standard week with protected slots for one-to-ones, deal inspection, forecast preparation, hiring and an hour of thinking time keeps the work that moves the number from being crowded out.

                ## Milestones
                1. A standard week drawn up with named blocks for one-to-ones, deal inspection, forecast preparation, hiring and admin.
                2. Recurring calendar holds created for every block for the next quarter.
                3. Two weeks of actual time tracked against the plan, with the biggest leak named.
                4. No more than one protected block moved per week for a full month.

                ## Notes
                A common starting split is roughly a third of the week with sellers, a third on deals and the rest on hiring, your own leader and admin. Adjust it to your team size, then defend it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Recurring holds cover the standard week, and four consecutive weeks show no more than one protected block moved per week."
                cadence: rolling
              tasks:
                - "List every recurring meeting you attend and mark the ones you could drop"
                - "Block one-to-ones, deal inspection and forecast preparation as recurring holds"
                - "Track two weeks of actual time against the standard week"
                - "Check next week's calendar against the standard week and restore lost blocks @recurring(weekly:fri)"
            - name: Success measures agreed with your own manager
              description: |-
                ## Purpose
                Front-line managers are judged on the team number while also being expected to hire, forecast accurately and develop people, and nobody writes down how much each counts. One conversation that agrees the three to five measures you will be held to, and how your manager wants forecast changes and bad news delivered, prevents surprises at review time.

                ## Milestones
                1. Three to five measures agreed, with how each will be judged at year end.
                2. Your manager's preferences for forecast format, escalation and bad news written down.
                3. A one-page summary sent to your manager and confirmed in writing.
                4. A quarterly check on the measures booked in both calendars.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page summary of three to five agreed measures and escalation preferences has been confirmed by your manager in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft the five measures you think you are judged on before the meeting"
                - "Ask your manager how they want bad news and forecast changes delivered"
                - "Send a one-page summary of what you agreed and ask for corrections"
                - "Revisit the agreed measures with your manager @recurring(quarterly)"
            - name: Team operating agreement written with the sellers
              description: |-
                ## Purpose
                Arguments about CRM updates, lateness to the forecast call or who owns an inbound lead are usually arguments about rules nobody wrote down. Drafting a one-page agreement with the team, covering meeting norms, CRM standards, response times and deal handovers, gives you something to point to that the team itself signed up to.

                ## Milestones
                1. A first draft of eight to twelve norms written with input from every seller.
                2. The draft discussed and amended in a team meeting.
                3. The final page pinned where the team works every day.
                4. The agreement reviewed once a year or whenever the team changes significantly.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page operating agreement of eight to twelve norms, amended and accepted in a team meeting, is pinned in the team's workspace."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each seller for the one team habit that frustrates them most"
                - "Draft eight to twelve norms covering meetings, CRM updates and handovers"
                - "Agree the final wording in a team meeting"
                - "Review the agreement with the whole team @recurring(yearly)"
            - name: Team engagement baseline survey
              description: |-
                ## Purpose
                Morale on a sales team is easy to misread from wins and losses alone, and a seller on a hot streak can still be planning to leave. A short anonymous survey of eight to ten questions on workload, clarity of targets, support from you and intent to stay gives a baseline to compare against six months later.

                ## Milestones
                1. Eight to ten questions written, including one on intent to stay for the next year.
                2. The survey run anonymously with a response rate above 80 percent.
                3. Results shared with the team, together with one thing you will change.
                4. The same survey repeated six months later and the two results compared.

                ## Notes
                With fewer than five people anonymity is thin. Ask HR or a neutral colleague to collect responses so nobody can be identified.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two rounds of the same anonymous survey, six months apart and each with at least 80 percent response, are recorded and compared."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose eight to ten questions, including one on intent to stay"
                - "Ask HR or a neutral colleague to run the survey anonymously"
                - "Share the results and one planned change with the team"
                - "Repeat the survey six months later with the same questions"
            - name: Five-number manager dashboard
              description: |-
                ## Purpose
                CRMs offer dozens of reports, and a manager who reads all of them acts on none. Choosing five numbers, such as new pipeline created, buyer meetings held, deals progressed, deals slipped and closed revenue against target, and reading them every Monday by seller, shows where to spend the week.

                ## Milestones
                1. Five numbers chosen, each with a one-line reason.
                2. A saved report or sheet showing all five by seller in one view.
                3. A normal range noted for each number from the last two quarters.
                4. Eight consecutive Monday readings logged, each with one action.

                ## Notes
                Start from the **Metrics log** template. Keep at least three leading indicators in the five; closed revenue alone only tells you about last month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly log entries show the five numbers by seller and one action taken from each reading."
                cadence: rolling
              tasks:
                - "Pick the five numbers and write why each matters"
                - "Build a saved CRM report showing all five by seller"
                - "Set a normal range for each number from the last two quarters"
                - "Log the five numbers and one action before the Monday huddle @recurring(weekly:mon)"
            - name: Decision rights and escalation map
              description: |-
                ## Purpose
                Sellers lose days waiting for answers on discounts, payment terms, lead disputes and travel because nobody is sure who decides. Writing down what you approve alone, what needs your manager, deal desk, finance or legal, and the fastest route to each, means sellers stop escalating everything to you and deals stop stalling in your inbox.

                ## Milestones
                1. The fifteen most common requests sellers bring you listed.
                2. Each request marked as decided by the seller, by you or by another named function.
                3. Your approval limits and contacts confirmed with your manager and finance.
                4. The map shared with the team and linked from the operating agreement.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared one-page map lists the fifteen most common seller requests, who decides each and any approval limit, confirmed by your manager."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every approval request sellers sent you in the last month"
                - "Mark who decides each request and any limit that applies"
                - "Confirm your approval limits with your manager and finance"
                - "Share the map with the team and add it to the operating agreement"
            - name: Partner map across marketing, presales and success
              description: |-
                ## Purpose
                A front-line manager's results depend on people they do not manage: the marketer who sends leads, the solutions engineer who runs demos, the customer success manager who protects renewals. Knowing who each one is, what they need from your team and meeting them regularly fixes handoff problems before they cost a deal.

                ## Milestones
                1. Named counterparts listed in marketing, presales, customer success, finance and sales operations.
                2. An introductory conversation held with each counterpart.
                3. One handoff problem agreed and fixed with at least two partners.
                4. A monthly rotation of partner check-ins running in the calendar.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Named partners in five functions are listed, each has had an introduction, and at least two handoff fixes are recorded."
                cadence: rolling
              tasks:
                - "List your counterpart in each function that touches your team's deals"
                - "Book a thirty-minute introduction with each partner"
                - "Ask each partner what your team does that makes their work harder"
                - "Meet one cross-functional partner for a check-in @recurring(monthly:8)"
            - name: Weekly one-to-one with every seller
              description: |-
                ## Purpose
                Thirty minutes a week with each seller is the most useful time a manager has, and it is wasted when it turns into a pipeline readout the CRM already shows. Running a consistent agenda, the seller's topics first, then two or three deals that need help, then one development item, gives each person a protected slot to raise problems early.

                ## Milestones
                1. A thirty-minute weekly slot booked with every seller.
                2. A shared running agenda for each seller that they add to before the meeting.
                3. Actions from each one-to-one written down and checked the following week.
                4. Over a quarter, no seller has more than one cancelled one-to-one a month.

                ## Notes
                Start from the **1:1** template. Move a one-to-one rather than cancel it; a cancelled slot tells the seller where they rank.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every seller has a weekly one-to-one with a running agenda, and over a quarter each has had at most one cancellation a month."
                cadence: rolling
              tasks:
                - "Create a shared running agenda for each seller from the 1:1 template"
                - "Book a recurring thirty-minute slot with every seller"
                - "Hold the week's one-to-ones and record actions in each agenda @recurring(weekly:tue)"
                - "Open each one-to-one with last week's actions before new topics"
            - name: Weekly deal inspection of each seller's top three
              description: |-
                ## Purpose
                Deals rarely die suddenly; they drift, with close dates pushed and the champion quiet for weeks before anyone notices. Inspecting each seller's three largest or riskiest deals every week, against evidence such as the last buyer meeting, the agreed next step and who has confirmed budget, catches the drift while there is still time to act.

                ## Milestones
                1. Each seller's three deals for inspection chosen fresh every week.
                2. A standard set of six evidence questions used in every inspection.
                3. One concrete manager action agreed on every deal judged at risk.
                4. A quarter-end record of which inspected deals closed, slipped or were lost.

                ## Notes
                Inspect deals one to one with the seller, not in the team meeting. The weekly team pipeline meeting is a different job with a different audience.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three deals per seller are inspected weekly against the same six questions, with an outcome recorded for every inspected deal at quarter end."
                cadence: rolling
              tasks:
                - "Write the six evidence questions you will ask about every deal"
                - "Pick each seller's three largest or riskiest open deals"
                - "Inspect each seller's top three deals and agree one action per risk @recurring(weekly:wed)"
                - "Mark the outcome of every inspected deal at quarter end"
            - name: Team leave and coverage calendar
              description: |-
                ## Purpose
                Two sellers on holiday in the last fortnight of a quarter, with nobody briefed on their closing deals, is a forecast miss nobody planned. One shared calendar of leave, training and conferences, checked monthly against expected close dates, lets you approve time off fairly and arrange cover before a buyer is left waiting.

                ## Milestones
                1. All approved leave, training and conference days for the next quarter on one shared calendar.
                2. A simple rule agreed for leave requests in the final two weeks of a quarter.
                3. A named cover seller for every absence longer than three days.
                4. No deal in the last month of the quarter left without a briefed owner during leave.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared leave calendar covers the next quarter, and every absence over three days has a named, briefed cover seller."
                cadence: rolling
              tasks:
                - "Put every approved absence for the next quarter on one shared calendar"
                - "Agree a fair rule for leave in the last two weeks of a quarter"
                - "Check the next six weeks of leave against expected close dates @recurring(monthly:22)"
                - "Brief a cover seller before any absence longer than three days"
            - name: Monday team huddle in twenty minutes
              description: |-
                ## Purpose
                Sellers who only meet as a team at the pipeline meeting rarely learn from each other. A twenty-minute Monday huddle with three fixed parts, last week's wins, this week's focus and blockers someone else can clear, sets the direction for the week without becoming another status meeting.

                ## Milestones
                1. A fixed twenty-minute Monday slot with the whole team.
                2. A three-part agenda that every huddle follows.
                3. Every blocker raised in a huddle followed up by Wednesday.
                4. Ten consecutive huddles held on time and finished within twenty minutes.

                ## Notes
                Start from the **Meeting notes** template. Keep deal detail out of the huddle and take it to one-to-ones.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten consecutive Monday huddles are recorded, each within twenty minutes and with every blocker followed up by Wednesday."
                cadence: rolling
              tasks:
                - "Book a fixed twenty-minute Monday slot for the whole team"
                - "Write the three-part huddle agenda and share it with the team"
                - "Run the Monday huddle and note the week's focus @recurring(weekly:mon)"
                - "Follow up every blocker raised in the huddle by Wednesday"
            - name: Monthly business review with each seller
              description: |-
                ## Purpose
                Weekly one-to-ones look at this week; a seller also needs a monthly view of attainment against quota, pipeline for the next two months and progress on their development goal. A short structured review in the first week of each month turns a vague sense of how things are going into a shared written picture.

                ## Milestones
                1. A one-page monthly review format covering attainment, pipeline, activity and development.
                2. A review held with each seller in the first week of the month.
                3. One commitment per seller for the coming month written down.
                4. Three consecutive monthly reviews held, each opening with last month's commitment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly reviews are recorded for every seller, each with a commitment checked the following month."
                cadence: rolling
              tasks:
                - "Draft a one-page monthly review format"
                - "Pull attainment and two months of pipeline for each seller"
                - "Hold a monthly business review with each seller @recurring(monthly:3)"
                - "Check last month's commitment at the start of each review"
            - name: Quarterly written performance conversation
              description: |-
                ## Purpose
                Year-end reviews written from memory favour the last two months and the loudest wins. A short written summary each quarter, covering results, behaviours and the agreed focus for next quarter, means sellers get no surprises and you hold the evidence a fair rating, a promotion case or a performance plan will need.

                ## Milestones
                1. A written summary for each seller at the end of every quarter.
                2. Each summary discussed face to face and acknowledged by the seller.
                3. Summaries stored where the HR process can find them.
                4. Four quarterly summaries available for every seller at year end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every seller has four acknowledged quarterly summaries on file by year end, each covering results, behaviours and next focus."
                cadence: cyclic
              tasks:
                - "Ask the agent to draft each seller's summary from the quarter's one-to-one notes"
                - "Write the final quarterly summary of results, behaviours and focus for each seller @recurring(quarterly)"
                - "Discuss each summary with the seller face to face"
                - "Store the acknowledged summary where HR can find it"
            - name: Next-quarter pipeline coverage check
              description: |-
                ## Purpose
                Teams that spend every week closing this quarter often start the next with an empty pipeline and a slow first month. Checking each seller's pipeline for the following quarter on a fixed day each month, against a coverage ratio agreed with your leader, flags the gap while there is still time to prospect.

                ## Milestones
                1. A target coverage ratio for next quarter agreed with your leader.
                2. Each seller's next-quarter coverage recorded once a month.
                3. A prospecting plan agreed with any seller below the ratio.
                4. The team starting the quarter at or near the agreed coverage.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly coverage readings exist for every seller, and each seller below the ratio has a written prospecting plan."
                cadence: rolling
              tasks:
                - "Agree a next-quarter coverage ratio with your leader"
                - "Record each seller's next-quarter pipeline against the ratio @recurring(monthly:12)"
                - "Agree a prospecting plan with any seller below the ratio"
                - "Compare starting coverage with first-month results each quarter"
            - name: Specific weekly recognition for the team
              description: |-
                ## Purpose
                Generic praise in a group message changes nothing, and sellers hear about the number far more often than about good work. Recognising one specific behaviour each week, such as a well-run discovery call, a clean handover or a lost deal handled honestly, tells the team what you value beyond the closed-won announcement.

                ## Milestones
                1. Each seller's preference for public or private recognition noted.
                2. One specific piece of recognition given every week, naming the behaviour.
                3. A short log showing every seller recognised at least once a month.
                4. At least half the entries recognising behaviours, not only closed deals.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A recognition log shows every seller recognised at least monthly, with half the entries about behaviours rather than revenue."
                cadence: rolling
              tasks:
                - "Ask each seller whether they prefer public or private recognition"
                - "Recognise one specific behaviour and log who and why @recurring(weekly:fri)"
                - "Check the log at month end for anyone not yet recognised"
                - "Share one win that is not about revenue in the Monday huddle"
            - name: Running evidence file for each seller
              description: |-
                ## Purpose
                Memory is a poor basis for ratings, promotion cases or a performance plan, and it is the first thing HR will question. A private file per seller with short dated observations, good and bad, written while they are fresh, makes every later conversation specific and every decision easier to defend.

                ## Milestones
                1. A private evidence file created for each seller.
                2. A rule written for what goes in: dated, factual, observed, never hearsay.
                3. At least one entry per seller each month, balanced between strengths and concerns.
                4. The files used to prepare every quarterly summary.

                ## Notes
                Write each entry as if the seller might read it, because in many countries they can ask to.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every seller's evidence file has at least one dated, factual entry per month for a full quarter."
                cadence: rolling
              tasks:
                - "Create a private evidence file for each seller"
                - "Write the rule for what counts as a valid entry"
                - "Add a dated observation to each seller's file @recurring(monthly:28)"
                - "Read each file before writing the quarterly summary"
            - name: Deal inspection questions that surface evidence
              description: |-
                ## Purpose
                Asking how a deal is going gets optimism; asking what the buyer said when asked who else signs gets evidence. Learning to ask open, specific questions without sounding like an interrogation is the core skill of deal inspection and the hardest habit for a promoted top seller to build.

                ## Milestones
                1. A bank of twenty evidence questions grouped by deal stage.
                2. Five inspections noted and reviewed for questions that led the seller to an answer.
                3. Two sellers asked whether inspections feel useful or punitive.
                4. Leading questions in the standard list replaced with open ones.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A twenty-question bank by stage exists, revised after reviewing five real inspections and feedback from two sellers."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write twenty evidence questions grouped by deal stage"
                - "Note five inspections and mark every leading question you asked"
                - "Ask two sellers whether inspections help them or feel like an audit"
                - "Rewrite the standard question list using what you learned"
            - name: Holding the conversation about a missed number
              description: |-
                ## Purpose
                Missed quarters need a conversation, and most managers either avoid it or turn it into a lecture. Practising a structure, facts first, then the seller's view, then causes within their control, then a specific plan, makes the conversation shorter, fairer and more likely to change next quarter.

                ## Milestones
                1. A four-part conversation structure written on one card.
                2. The structure rehearsed with a peer manager or HR partner.
                3. One real conversation held using it, with notes written the same day.
                4. A written plan agreed with the seller within two days.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One missed-number conversation has been held using the rehearsed structure, with a written plan sent to the seller within two days."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the four-part structure on a single card"
                - "Rehearse the conversation with a peer manager"
                - "Hold the conversation and write notes the same day"
                - "Send the seller the agreed plan within two days"
            - name: Delegating and declining as a sales manager
              description: |-
                ## Purpose
                Former top sellers promoted into management tend to jump into every deal and say yes to every internal request, then wonder why the team never grows. Learning what to hand back to sellers, what to delegate to a senior seller and how to decline internal projects politely frees hours for work only a manager can do.

                ## Milestones
                1. Last week's tasks listed and each marked keep, delegate, hand back or drop.
                2. Three recurring tasks delegated with a named owner and a clear standard.
                3. One internal request declined or deferred with a reason.
                4. Hours spent inside sellers' deals logged weekly for a month and falling.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three recurring tasks have named new owners, and a month of logs shows your hours inside sellers' deals falling."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List last week's tasks and mark each keep, delegate, hand back or drop"
                - "Hand three recurring tasks to named owners with the standard expected"
                - "Decline or defer one internal request with a short reason"
                - "Log the hours you spend inside sellers' deals each week for a month"
            - name: What motivates each seller
              description: |-
                ## Purpose
                Commission motivates most sellers, but not equally and not alone: some care most about recognition, some about mastery, some about a route into management or flexibility at home. Learning each person's drivers, and checking your guess with them, lets you pull the right lever instead of offering the same incentive to everyone.

                ## Milestones
                1. Your guess at each seller's top two motivators written down.
                2. Each seller asked directly what energises them and what drains them.
                3. Guesses compared with answers and the differences noted.
                4. One change made in how you manage each seller as a result.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each seller's top two motivators are recorded in their own words, with one change in how you manage them noted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write your guess at each seller's top two motivators"
                - "Ask each seller what energises and what drains them at work"
                - "Compare your guesses with their answers"
                - "Change one thing in how you manage each seller"
            - name: Explaining the commission plan to your team
              description: |-
                ## Purpose
                Sellers trust a plan they understand and suspect one they do not, and the first person they ask is their manager. Working through the rates, thresholds, accelerators and clawbacks with worked examples until you can answer any question on the spot stops misinformation spreading and saves disputes at payout time.

                ## Milestones
                1. The current plan read in full, with every unclear clause listed.
                2. Each unclear clause answered in writing by sales operations or finance.
                3. Three worked examples calculated: below threshold, at quota and above the accelerator.
                4. A short team session held to walk through the examples.

                ## Notes
                Never promise a payout figure before sales operations confirms it. Explain how the plan works and let the official statement give the number.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written answers to every unclear clause and three worked examples exist, and the team has been walked through them."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the current plan and list every clause you cannot explain"
                - "Send the unclear clauses to sales operations for written answers"
                - "Work three examples at different attainment levels"
                - "Walk the team through the examples in a team meeting"
            - name: Matching direction to each seller's experience
              description: |-
                ## Purpose
                A new seller needs clear direction and frequent check-ins; a seasoned seller given the same treatment feels micromanaged. Learning to judge each person's skill and confidence task by task, and moving between directing, coaching, supporting and delegating, stops one management style failing half the team.

                ## Milestones
                1. Each seller placed on a simple skill and confidence grid for three key tasks.
                2. A management style chosen for each placement.
                3. Your approach changed for at least two sellers.
                4. Each seller asked after a month whether the level of support feels right.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A skill and confidence grid covers every seller on three tasks, and two sellers confirm the changed support level suits them."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose three tasks that matter most in your sales motion"
                - "Place each seller on a skill and confidence grid for those tasks"
                - "Change how you support the two sellers furthest from your current style"
                - "Ask those sellers after a month whether the support feels right"
            - name: Employment basics for a sales manager
              description: |-
                ## Purpose
                Managers make decisions with employment consequences every week: approving leave, documenting poor performance, handling a complaint between sellers. Knowing your company's policies, what must be written down and when to call HR before acting protects the seller, the company and you.

                ## Milestones
                1. The policies on performance, leave, conduct and complaints read and summarised on one page.
                2. Your HR partner named and an introductory meeting held.
                3. A list of situations where you call HR before acting.
                4. A habit of dated, factual notes for any performance or conduct issue in place.

                ## Notes
                This project is about knowing your own company's policies and when to involve HR. It is not legal advice; HR and employment counsel make those calls.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page policy summary and a written list of call-HR-first situations exist, and an introductory meeting with HR has been held."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the company policies on performance, leave, conduct and complaints"
                - "Summarise the manager's duties in each policy on one page"
                - "Book an introductory meeting with your HR partner"
                - "Write the list of situations where you will call HR before acting"
            - name: Passing on unpopular decisions without losing the team
              description: |-
                ## Purpose
                Unpopular decisions from above, such as a quota increase, a territory change or a cut to the commission plan, land on the front-line manager to deliver. Learning to explain what changed and why, acknowledge the cost honestly and focus the team on what they control keeps trust intact without badmouthing leadership.

                ## Milestones
                1. The reasons behind the decision understood well enough to explain in three sentences.
                2. Questions sellers are likely to ask listed with honest answers.
                3. The decision communicated to the team in person before it reaches them any other way.
                4. One-to-one follow-ups held with the sellers most affected within a week.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The last unpopular decision was explained to the team in person, with follow-ups held for the most affected sellers within a week."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your leader for the reasons behind the decision in plain words"
                - "List the ten hardest questions sellers will ask and draft honest answers"
                - "Tell the team in person before the news spreads another way"
                - "Follow up one to one with the sellers most affected within a week"
            - name: Your own development plan as a sales manager
              description: |-
                ## Purpose
                Front-line managers spend their days developing others and rarely get a plan of their own, so the gaps that held them back in year one are still there in year three. Choosing two management skills to build this year, with a mentor, reading or a course and evidence of progress, makes your growth deliberate.

                ## Milestones
                1. Feedback gathered from your manager, two sellers and one peer on your two biggest gaps.
                2. Two skills chosen with a concrete way to practise each.
                3. A mentor or peer manager agreed to meet with you regularly.
                4. Progress on both skills reviewed with your manager each quarter.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A written plan names two management skills, a mentor and practice methods, with progress reviewed with your manager each quarter."
                cadence: rolling
              tasks:
                - "Ask your manager, two sellers and one peer for your two biggest gaps"
                - "Choose two skills and write how you will practise each"
                - "Ask a respected peer manager to act as your mentor"
                - "Review progress on both skills with your manager @recurring(quarterly)"
            - name: Backfill plan for every seat on the team
              description: |-
                ## Purpose
                Sales seats stay empty for months when hiring only starts after a resignation, and an empty territory loses pipeline every week. A short plan for each seat, covering who covers the accounts, the approved job description and the interview panel, turns a resignation into a two-day scramble instead of a lost quarter.

                ## Milestones
                1. A current, approved job description for each role on the team.
                2. A named cover plan for every seller's accounts and open deals.
                3. An interview panel and recruiter contact agreed in advance.
                4. The backfill approval process and its usual timeline confirmed with your leader and finance.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every seat has a current job description, a named account cover plan and a pre-agreed interview panel, with the approval route confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check that a current job description exists for each role"
                - "Name who would cover each seller's accounts and open deals"
                - "Agree a standing interview panel with your recruiter"
                - "Confirm with your leader how backfill approval works and how long it takes"
            - name: Warm bench of future sales hires
              description: |-
                ## Purpose
                The best sellers are rarely job hunting when you need them, so managers who recruit only on demand hire whoever is available. Keeping a short list of people you would like to hire, and meeting one each month, shortens time to hire and lets you start a real conversation the day a seat opens.

                ## Milestones
                1. A list of ten people you would hire, with how you know each one.
                2. One coffee or call with someone on the list every month.
                3. Notes kept on each person's situation and likely timing.
                4. At least one finalist or hire sourced from the bench within a year.

                ## Notes
                Check your company's rules on approaching staff at competitors, customers and partners before you build the list.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A bench of ten named people exists, with at least one logged conversation each month for six months."
                cadence: rolling
              tasks:
                - "List ten sellers you would hire, from past colleagues, partners and your network"
                - "Have a coffee or call with one person from the bench @recurring(monthly:15)"
                - "Note each person's situation and likely timing after every conversation"
                - "Share the bench with your recruiter the day a seat opens"
            - name: Hiring manager plan for an open sales seat
              description: |-
                ## Purpose
                Once a seat opens, the hiring manager owns the timeline, and every week it stays open costs pipeline. A written plan with the role scorecard, the recruiter brief, the interview stages and a target week for an offer keeps the process moving and stops strong candidates accepting elsewhere while you deliberate.

                ## Milestones
                1. A role scorecard with five must-have outcomes agreed with your leader.
                2. A recruiter brief and sourcing plan in place within a week of the seat opening.
                3. Interview stages and panel time booked with dates.
                4. An offer made, or the search reset with reasons recorded, by the target week.

                ## Notes
                Designing role plays and running reference checks belongs to candidate assessment; this project is about owning the timeline and the decision.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A hiring decision for the open seat is recorded by the target week, against a scorecard agreed with your leader."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the five outcomes the new hire must deliver in their first year"
                - "Brief the recruiter and agree a sourcing plan"
                - "Book the interview panel's time for the next four weeks"
                - "Hold a decision meeting within two days of the final interview"
            - name: Account and deal handover when a seller leaves
              description: |-
                ## Purpose
                When a seller resigns, their open deals and customer relationships are at risk from the day they hand in notice. A handover covering every open deal, key contacts, promised next steps and customer introductions, finished before their last day, protects revenue and the customer's experience.

                ## Milestones
                1. Every open deal and active account listed with stage, next step and key contact.
                2. Each deal and account reassigned or covered by a named seller.
                3. Customers on significant deals introduced to the new owner before the leaver's last day.
                4. Credit treatment for in-flight deals confirmed in writing with sales operations.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Before the leaver's last day, every open deal has a named new owner and customers on significant deals have met that owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the leaver's open deals and active accounts from the CRM"
                - "Assign each deal and account to a named seller"
                - "Book joint introduction calls for customers on significant deals"
                - "Confirm credit for in-flight deals with sales operations in writing"
            - name: Selling-time audit across the team
              description: |-
                ## Purpose
                Few sellers spend more than half their week with buyers; the rest goes on internal meetings, admin and hunting for content. Asking each seller to log one typical week, then removing or shortening the three biggest internal drains, returns hours to selling without anyone working longer.

                ## Milestones
                1. One typical week of time logged by every seller in five simple categories.
                2. The team's share of time spent with buyers calculated.
                3. The three biggest internal time drains identified.
                4. At least two drains removed or shortened and selling time remeasured a month later.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two time drains have been removed or shortened, and a remeasure a month later shows the team's share of buyer time."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree five time categories with the team"
                - "Ask every seller to log one typical week"
                - "Calculate the team's share of time spent with buyers"
                - "Cut or shorten two internal meetings or tasks and remeasure in a month"
            - name: Performance improvement plan with HR
              description: |-
                ## Purpose
                When a seller is clearly below standard after real coaching, delay is unfair to them and to the team carrying their number. A formal improvement plan built with HR, with measurable goals, the support you will give and a defined review period, gives the seller a genuine chance and gives the outcome a fair record either way.

                ## Milestones
                1. Evidence of the gap and the coaching given so far gathered and reviewed with HR.
                2. A written plan with three measurable goals, the support offered and review dates.
                3. A documented check-in held every week of the plan period.
                4. A final outcome recorded and communicated in line with company process.

                ## Notes
                Follow your company's process and your HR partner's guidance at every step. Requirements differ by country, and HR or employment counsel decide what applies.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written plan agreed with HR has run its full period with weekly documented check-ins and a recorded final outcome."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Gather the attainment data and coaching notes behind the concern"
                - "Meet your HR partner to agree the process and timeline"
                - "Write three measurable goals and the support you will provide"
                - "Hold and document a check-in every week of the plan period"
            - name: Stay interviews with your top performers
              description: |-
                ## Purpose
                Top sellers get recruiter messages every week, and exit interviews only explain why they already left. Asking your strongest people what keeps them, what might make them leave and what they want next, then delivering on one thing, is the cheapest retention work a manager can do.

                ## Milestones
                1. Stay interviews held with your top three performers.
                2. One action agreed with each and delivered within a quarter.
                3. A private retention risk score recorded for every seller.
                4. Risk scores reviewed each quarter with your own manager.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your top three performers have each had a stay interview and an agreed action delivered within the quarter."
                cadence: cyclic
              tasks:
                - "Book a stay interview with each of your top three performers"
                - "Ask what keeps them, what would make them leave and what they want next"
                - "Deliver one agreed action for each within the quarter"
                - "Score each seller's retention risk privately and share it with your manager @recurring(quarterly)"
            - name: Rules for credit and account disputes
              description: |-
                ## Purpose
                Two sellers claiming the same deal or account can sour a team faster than a missed quarter. Written rules on account ownership, split credit and handovers, agreed before the next dispute arrives, let you rule quickly and consistently instead of case by case.

                ## Milestones
                1. Recent disputes and their causes listed.
                2. Rules for ownership, split credit and handovers drafted with sales operations.
                3. The rules approved by your leader and shared with the team.
                4. Every new dispute settled within five working days using the written rules.

                ## Notes
                Where the rules touch pay, the signed commission plan wins. Check the draft against it before sharing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Approved dispute rules are shared with the team, and the next dispute is settled within five working days under them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the last five credit or account disputes and what caused each"
                - "Draft ownership, split credit and handover rules with sales operations"
                - "Get the rules approved by your leader"
                - "Share the rules with the team and add them to the operating agreement"
            - name: Close plan for the final three weeks of the quarter
              description: |-
                ## Purpose
                The last three weeks decide the quarter, and teams without a plan discount heavily, pull in deals that are not ready and burn out. A deal-by-deal close plan built three weeks out, showing what each buyer still has to do, who signs and which deals to leave for next quarter, lands more revenue at better prices.

                ## Milestones
                1. Every deal expected to close listed with its remaining buyer steps and signatory.
                2. Each deal tagged land, push or move to next quarter.
                3. Foreseeable discount, legal and approval requests sent in the first week.
                4. A short post-quarter note recording what closed, what slipped and why.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A close plan exists three weeks before each quarter end, followed by a written note of what closed, slipped and why."
                cadence: cyclic
              tasks:
                - "List every deal expected to close with its remaining buyer steps"
                - "Tag each deal land, push or move to next quarter"
                - "Send foreseeable discount and legal approvals in the first of the three weeks"
                - "Build the close plan three weeks before quarter end @recurring(quarterly)"
            - name: Front-line input to the annual sales plan
              description: |-
                ## Purpose
                Annual quotas and territories are often set from the top, yet the front-line manager is the one who knows which accounts are tapped out and which sellers are ready for more. A short, evidence-based input pack, with account potential, realistic ramp for new hires and capacity limits, gives your team a fairer plan.

                ## Milestones
                1. The planning timeline and the date input is due noted.
                2. Account potential and current share summarised for each seller's book.
                3. A written view of realistic quota by seller, with reasons.
                4. The pack submitted before the deadline and the feedback recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An input pack with account potential and a reasoned quota view per seller was submitted before the planning deadline."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask sales operations for the planning timeline and input deadline"
                - "Summarise account potential and current share for each seller's book"
                - "Write a realistic quota view for each seller with reasons"
                - "Submit the pack and note the feedback you receive"
            - name: Year-end performance reviews for the team
              description: |-
                ## Purpose
                Year-end reviews decide ratings, pay rises and promotion cases, and a review rushed the night before is felt for a year. Starting a month early from the quarterly summaries and evidence files, and calibrating with peer managers, produces reviews that are specific, consistent and defensible.

                ## Milestones
                1. Review deadlines and rating guidance confirmed with HR.
                2. A draft review for each seller built from the four quarterly summaries.
                3. Ratings calibrated with peer managers before anything is shared.
                4. Every review delivered in person and submitted on time.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every seller's review was calibrated with peer managers, delivered in person and submitted by the HR deadline."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Note the review deadline and rating guidance from HR"
                - "Ask the agent to draft each review from the year's quarterly summaries"
                - "Bring draft ratings to the calibration meeting with peer managers"
                - "Deliver every review in person before submitting it"
            - name: Quarterly team planning half-day
              description: |-
                ## Purpose
                Busy teams look only at this week and never fix the things that cost them every quarter. A half-day at the start of each quarter, reviewing last quarter honestly, agreeing three team priorities and hearing each seller's plan, gives everyone the same picture of how the number will be made.

                ## Milestones
                1. A half-day booked in the first fortnight of each quarter.
                2. Last quarter's results and lessons presented in under twenty minutes.
                3. Three team priorities agreed and written up.
                4. Each seller's one-page quarter plan presented and saved.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each quarter opens with a half-day that produces three written team priorities and a saved plan for every seller."
                cadence: cyclic
              tasks:
                - "Book the half-day with the whole team in the first fortnight of the quarter @recurring(quarterly)"
                - "Prepare a twenty-minute review of last quarter's results"
                - "Ask each seller to bring a one-page plan for the quarter"
                - "Circulate the three agreed priorities the same day"
            - name: Promotion case for a seller
              description: |-
                ## Purpose
                Promotions to senior seller or team lead are decided in calibration rooms the seller never sees, and a strong record loses to a well-written case. Writing the case with evidence against each criterion for the target role, and starting a full cycle early, gives your best people a fair chance.

                ## Milestones
                1. The criteria for the target role obtained and compared with the seller's record.
                2. Gaps shared with the seller and a plan agreed to close them.
                3. A written case with examples against every criterion.
                4. The case submitted on time and the outcome explained to the seller in person.

                ## Notes
                Start from the **Development plan** template for the gap plan. Never promise the outcome; promise the case.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A promotion case with evidence against every criterion for the target role was submitted on time and the outcome explained to the seller."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Get the written criteria for the target role from HR"
                - "Compare the seller's record with each criterion and list the gaps"
                - "Agree a plan with the seller to close the gaps"
                - "Write the case with one example per criterion and submit it"
            - name: First ninety days as a new sales manager
              description: |-
                ## Purpose
                Moving from top seller to manager changes everything at once: former peers now report to you, your own deals need new owners and the skills that made you successful matter less. A ninety-day plan, covering a listening round, the handover of your accounts, early wins and a first team rhythm, stops the change from swallowing your first quarter.

                ## Milestones
                1. Your own accounts and open deals handed to named sellers within two weeks.
                2. A listening conversation held with every seller and each key partner.
                3. One-to-ones, the huddle and deal inspection running every week.
                4. Thirty, sixty and ninety-day reviews held with your manager.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Resist fixing everything in the first month; listen first, then change two things well.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "By day ninety your accounts are handed over, every seller has had a listening conversation and three reviews with your manager are recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List your own accounts and open deals and propose a new owner for each"
                - "Book a listening conversation with every seller in the first fortnight"
                - "Start the weekly one-to-ones and Monday huddle by the end of week three"
                - "Book thirty, sixty and ninety-day reviews with your manager"
            - name: Inheriting a sales team mid-year
              description: |-
                ## Purpose
                Taking over a team mid-year means inheriting someone else's promises, habits and unresolved problems, often with half the quarter gone. A short diagnostic of what the previous manager committed to sellers and customers, how the team feels and which deals are genuinely alive separates what you can still change this quarter from what waits until next.

                ## Milestones
                1. Commitments the previous manager made to sellers listed, then confirmed or openly reset.
                2. A first one-to-one with every seller about what has and has not worked for them.
                3. The largest live deals reviewed with their owners in the first two weeks.
                4. A written list of fixes split into this quarter and next, shared with your leader.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Inherited commitments are listed and resolved, and a split list of fixes for this quarter and next has been shared with your leader."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your leader and HR what the previous manager promised sellers"
                - "Hold a first one-to-one with every seller in the first week"
                - "Review the largest live deals with their owners in the first two weeks"
                - "Write the list of fixes for this quarter and next and share it with your leader"
            - name: Leading a remote or hybrid sales team
              description: |-
                ## Purpose
                Remote sellers miss the overheard calls and corridor help that build skill in an office, and their manager sees problems later. Setting explicit rhythms for visibility, such as camera-on one-to-ones, a shared deal channel, joining customer calls and an in-person day each quarter, keeps a dispersed team connected and supported.

                ## Milestones
                1. Core overlap hours agreed with every seller across time zones.
                2. A shared channel for deal questions and quick wins in daily use.
                3. One customer call joined per remote seller each month.
                4. An in-person team day held at least once a quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Overlap hours are agreed, you join a customer call with each remote seller monthly, and an in-person day happens every quarter."
                cadence: rolling
              tasks:
                - "Agree core overlap hours with every seller"
                - "Set up a shared channel for deal questions and quick wins"
                - "Join one customer call with each remote seller every month"
                - "Plan and budget one in-person team day each quarter"
            - name: Recovery plan when the team is behind at mid-quarter
              description: |-
                ## Purpose
                Halfway through a quarter with coverage under target, the instinct is to demand more activity from everyone. A focused recovery plan, finding the deals that can realistically be accelerated, the pipeline that can be created in time and an honest revised number, recovers more revenue and protects your credibility with leadership.

                ## Milestones
                1. A deal-by-deal list of what can realistically still close this quarter.
                2. Three to five acceleration actions agreed, each with an owner.
                3. A revised, honest number shared with your leader with reasons.
                4. A record of how much of the gap closed and the lessons for next quarter.

                ## Notes
                Discounts offered in panic set expectations for every future renewal. Agree any price move with deal desk before a seller mentions it to a buyer.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written recovery plan with owned actions and a revised number was shared with your leader within a week of mid-quarter."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every deal that could realistically close this quarter"
                - "Agree three to five acceleration actions with named owners"
                - "Share an honest revised number with your leader with reasons"
                - "Write down how much of the gap closed and what to change next quarter"
            - name: Keeping the team selling through a reorganisation
              description: |-
                ## Purpose
                Reorganisations, layoffs and territory changes freeze sales teams: sellers update their CVs instead of their pipelines and customers sense the uncertainty. Saying what you know and do not know quickly, meeting every seller within a day and protecting key customer relationships keeps the damage to weeks rather than a quarter.

                ## Milestones
                1. What can and cannot be shared confirmed with your leader and HR.
                2. A one-to-one held with every seller within one working day of the announcement.
                3. Customers on affected accounts contacted with a clear, agreed message.
                4. Pipeline and activity checked weekly for a month after the change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Every seller had a one-to-one within a working day of the announcement, and affected customers were contacted within a week."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Confirm with HR exactly what you can and cannot say"
                - "Hold a one-to-one with every seller within a working day"
                - "Agree the message for customers on affected accounts and send it"
                - "Check pipeline and activity every week for a month after the change"
            - name: Getting the most from your sales manager
              description: |-
                ## Purpose
                Managers juggle eight people and a forecast, and the sellers who get the most help are the ones who make it easy to give. For a seller, coming to every one-to-one with an agenda, asking for specific help on named deals and agreeing development goals in writing turns the manager into a resource rather than a monitor.

                ## Milestones
                1. A running one-to-one agenda you update before each meeting.
                2. One specific deal-help request brought to every one-to-one.
                3. A written development goal agreed with your manager.
                4. A quarterly check on whether the support you get matches what you need.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a full quarter, every one-to-one had your prepared agenda and a specific deal-help request, and a development goal is agreed in writing."
                cadence: rolling
              tasks:
                - "Start a running agenda shared with your manager"
                - "Add your topics and one deal-help request to the agenda @recurring(weekly:mon)"
                - "Agree one development goal with your manager in writing"
                - "Tell your manager once a quarter what support is and is not working"
            - name: Readiness for a second-line sales leadership role
              description: |-
                ## Purpose
                Managing managers is a different job: you stop inspecting deals and start inspecting how your managers inspect them, and your influence runs through people you no longer see every day. Preparing a year ahead, by running a cross-team project, mentoring a new manager and learning the planning cycle, makes you the obvious candidate when the role opens.

                ## Milestones
                1. The second-line role's expectations written down with your manager.
                2. One cross-team project led to completion.
                3. A newly promoted manager mentored for at least a quarter.
                4. A seat in at least one annual planning or budget cycle secured.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Within six months a cross-team project is complete, a new manager has been mentored for a quarter and your manager has confirmed your readiness gaps."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your manager what a second-line leader in your company is judged on"
                - "Volunteer to lead one project that spans several sales teams"
                - "Offer to mentor the next newly promoted sales manager"
                - "Ask to sit in on the next annual planning cycle"
            - name: Team lead succession plan
              description: |-
                ## Purpose
                Every team needs someone who can run the huddle, cover one-to-ones and answer questions when the manager is away, and that person rarely appears by accident. Naming a likely successor, giving them real stretch responsibilities and reviewing progress protects the team during your absences and builds the bench your company will ask about.

                ## Milestones
                1. One or two sellers identified who could step up, with their interest confirmed.
                2. Three stretch responsibilities handed over, such as running the huddle or mentoring a new hire.
                3. The successor covering your role during at least one week of your leave.
                4. Progress reviewed with your manager and recorded in the succession plan.

                ## Notes
                Talk about growth, not a promise of your job. A succession plan is a development commitment, not a guarantee.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named successor has held three stretch responsibilities and covered your role for a week, with progress recorded with your manager."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask one or two sellers whether they want to lead people one day"
                - "Hand the strongest candidate three stretch responsibilities"
                - "Arrange for them to cover your role during your next week of leave"
                - "Review their progress with your manager and record it"
            - name: Plan to lift the team's middle performers
              description: |-
                ## Purpose
                Managers spend most of their time on the top seller who needs nothing and the struggling seller who needs everything, while the middle of the team decides whether the number is hit. Studying what separates your middle performers from your best, and targeting one specific gap each, usually moves the team result more than any single star.

                ## Milestones
                1. The middle half of the team identified from the last four quarters of attainment.
                2. Their stage conversion, deal size and cycle length compared with the top performers.
                3. One specific gap chosen for each middle performer and a plan agreed.
                4. Attainment for the middle group compared after two quarters.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each middle performer has one named gap and plan, and their attainment after two quarters is compared with the starting point."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Rank the team by attainment over the last four quarters"
                - "Compare conversion, deal size and cycle length for the middle and top groups"
                - "Agree one specific gap and plan with each middle performer"
                - "Compare the middle group's attainment after two quarters"
            - name: Peer exchange with other front-line managers
              description: |-
                ## Purpose
                Front-line managers solve the same problems in parallel, from hiring to quarter-end pressure, and rarely compare notes. A monthly hour with two or three peer managers, inside or outside your company, each bringing one live problem, gives you tested answers and a sounding board your own team cannot be.

                ## Milestones
                1. Two or three peer managers agreed to meet monthly.
                2. A simple format agreed: one live problem each, twenty minutes per person.
                3. Six sessions held, with one idea from each applied to your team.
                4. One practice from your team shared back that a peer adopted.

                ## Notes
                Agree at the start that nothing about named sellers or customers leaves the room.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly peer sessions are held, each with one idea recorded and applied to your team."
                cadence: rolling
              tasks:
                - "Invite two or three peer sales managers to a monthly exchange"
                - "Agree the format and the confidentiality rule at the first session"
                - "Bring one live problem to the peer exchange @recurring(monthly:18)"
                - "Record one idea from each session and try it with your team"
---

# Front-Line Sales Management

This area is for the person who runs a team of sellers day to day, and for the sellers who work with them. It starts with the foundations (knowing the team number seller by seller, a profile of each person, a protected calendar, agreed measures with your own leader and a team operating agreement), then the weekly machinery of one-to-ones, deal inspection, the Monday huddle and recognition, the skills of asking good questions and holding hard conversations, the decisions about hiring, backfills, disputes and performance plans, the dated moments such as quarter end and year-end reviews, the situations that change the job, and finally the work of a manager getting ready to lead managers.

What repeats is a weekly rhythm of Monday dashboard and huddle, Tuesday one-to-ones, Wednesday deal inspection and Friday recognition and calendar check, with a monthly business review per seller, a monthly look at next quarter's coverage and a quarterly written performance conversation. The Person, Metrics log, 1:1, Meeting notes, Development plan and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
