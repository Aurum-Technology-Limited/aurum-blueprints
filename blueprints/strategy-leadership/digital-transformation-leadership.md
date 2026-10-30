---
id: strategy-leadership.digital-transformation-leadership
name: Digital Transformation Leadership
description: "A maturity baseline, a funded roadmap, a steering and benefits rhythm, the build, buy and cloud decisions, and the leadership work of bringing people, process and technology along together."
category: business
version: 1.0.0
tags: [strategy-leadership, digital-transformation-leadership, manager, enterprise, digital-transformation, operating-model, legacy-modernisation, change-leadership]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - vendor
    - purchase-decision
    - skills-matrix
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Digital Transformation Leadership
          description: "Leading an organisation's shift to digital ways of working, prioritising investments and bringing people, process and technology along together."
          projects:
            - name: Digital maturity baseline across the organisation
              description: |-
                ## Purpose
                Most transformations start with a vendor's answer before anyone has described the problem. A short, honest baseline across customer channels, internal processes, data, technology and skills shows where the organisation really is, which functions are ahead and which are still on spreadsheets and paper, so the first investments go where the gap hurts most.

                ## Milestones
                1. A maturity scale of four or five levels chosen and applied to six dimensions: customer, process, data, technology, people and governance.
                2. Each major function scored by its own leaders and then checked against evidence such as systems in use and manual workarounds.
                3. A one-page heat map showing the three weakest dimensions and the functions furthest behind.
                4. The baseline signed off by the executive team as the starting point every later review will compare against.

                ## Notes
                Self-assessment always flatters. Ask for one piece of evidence per score, for example a screenshot of the actual tool or a count of manual re-keying steps.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated maturity heat map covering six dimensions and every major function, approved by the executive team as the official baseline."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick a four or five level maturity scale and write one line describing each level"
                - "Send the six-dimension scoring sheet to each functional head with a two-week deadline"
                - "Ask each function for one piece of evidence behind every score above level two"
                - "Build the heat map and highlight the three weakest dimensions"
                - "Present the baseline at the executive meeting and record the sign-off"
            - name: One-page case for digital transformation
              description: |-
                ## Purpose
                Staff and board members will both ask why the organisation is spending money and disrupting work, and a vague answer about keeping up with the times loses them in the first month. A one-page case names the business problems digital change must solve, such as cost to serve, slow onboarding or lost customers, and puts a rough number on each.

                ## Milestones
                1. Three to five business problems named, each with a current measure such as days to onboard a customer or cost per transaction.
                2. A plain statement of what happens if nothing changes over the next three years.
                3. A rough range of the investment required and the value at stake, labelled as an estimate.
                4. The page agreed by the chief executive and used unchanged in the first staff and board communications.

                ## Notes
                Lead with business outcomes, not technology. If the page mentions a product name in the first paragraph, rewrite it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single page naming at least three measured business problems, a cost of inaction and an investment range, approved by the chief executive."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the five business complaints you hear most often from customers and staff"
                - "Find a current number for each, such as processing time or error rate"
                - "Draft what the organisation looks like in three years if nothing changes"
                - "Ask the agent to tighten the draft to one page in plain language"
                - "Review the page with the chief executive and the finance director"
            - name: Transformation scope and boundaries agreement
              description: |-
                ## Purpose
                Programmes that try to change everything at once stall under their own weight, and every unrelated IT request starts arriving labelled as transformation. Agreeing in writing what is in scope, what is explicitly out and what waits for a later wave protects the budget and the team's focus from the first week.

                ## Milestones
                1. An in-scope list of business areas and processes for the first wave.
                2. An explicit out-of-scope list, including routine IT upgrades that stay with the normal technology budget.
                3. A later-waves list so excluded ideas are parked rather than rejected.
                4. A named owner who rules on scope disputes, recorded in the programme charter.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written scope statement with in, out and later lists and a named scope owner, accepted by the steering group."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the in-scope list using the three weakest areas from the maturity baseline"
                - "Write the out-of-scope list and name where each excluded item will be handled"
                - "Create a parked list for ideas that belong in a later wave"
                - "Agree who rules on scope disputes and add it to the charter"
            - name: Executive sponsor and transformation office set-up
              description: |-
                ## Purpose
                Without a single accountable executive and a small team holding the plan together, a transformation becomes a collection of unrelated IT projects. Naming the sponsor, agreeing their time commitment and setting up a lean transformation office of three to six people gives the programme one voice and one plan.

                ## Milestones
                1. One executive sponsor named, with at least half a day a week formally set aside for the programme.
                2. A transformation office with a lead, a planning and reporting role, a change and communications role and a finance partner.
                3. Clear lines between the transformation office, the IT department and business unit leaders, written as a short responsibilities table.
                4. A programme charter covering purpose, scope, governance and decision rights, signed by the sponsor.

                ## Notes
                The sponsor should be a business leader, not only the chief information officer. Shared ownership with the business is what keeps adoption from being an afterthought.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed programme charter naming the sponsor and transformation office roles, with a responsibilities table agreed with IT and business leaders."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree with the chief executive who the single accountable sponsor will be"
                - "Block half a day a week in the sponsor's diary for the next six months"
                - "Write the role outlines for the transformation office lead and core team"
                - "Draft the responsibilities table between the office, IT and business units"
                - "Get the programme charter signed by the sponsor"
            - name: Application and technology estate inventory
              description: |-
                ## Purpose
                Few leaders can say how many systems their organisation runs, who owns each one and what it costs, yet every roadmap decision depends on that list. A complete inventory of applications, integrations, contracts and end-of-support dates turns hidden risk and duplicated spend into choices you can see.

                ## Milestones
                1. Every business application listed with a business owner, a technical owner, users and annual cost.
                2. Contract renewal and vendor end-of-support dates recorded for each system.
                3. The main integrations between systems drawn on a single diagram.
                4. Each application tagged as keep, improve, replace or retire, with a short reason.

                ## Notes
                Include shadow systems: the spreadsheets, departmental tools and personal subscriptions that run real processes. They are often where the biggest risks sit.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory of all business applications with owners, costs, end-of-support dates and a keep, improve, replace or retire tag for each."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Export the list of software contracts from finance and procurement"
                - "Ask each department to name the spreadsheets and tools they could not work without"
                - "Record the end-of-support date for every system that has one"
                - "Draw the main integrations between systems on one diagram"
                - "Tag each application as keep, improve, replace or retire"
            - name: Front-line process pain-point map
              description: |-
                ## Purpose
                Senior teams usually describe processes as they were designed, while the people doing the work know where it breaks: the re-keying, the printouts, the approvals that wait a week. Spending time with front-line staff and mapping three or four core processes as they actually run gives the roadmap its real targets.

                ## Milestones
                1. Three or four core processes chosen, such as order to cash, customer onboarding or claims handling.
                2. At least two sessions per process with the people who do the work, observing rather than interviewing only.
                3. Each process drawn as it really runs, with manual steps, hand-offs and waiting time marked.
                4. A ranked list of the ten worst pain points with a rough cost in hours or errors per month.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Current-state maps of at least three core processes and a ranked list of ten pain points, each with an estimated monthly cost."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose the three or four processes that touch the most customers or staff"
                - "Book half-day sessions to sit with the teams who run each process"
                - "Count the manual re-keying steps and approval waits in each process"
                - "Rank the ten worst pain points by hours lost or errors per month"
            - name: Customer and staff digital experience baseline
              description: |-
                ## Purpose
                Customers and staff should be better off after a transformation, and without a starting measure nobody can show that it did. Capturing a handful of experience measures now, such as online task completion, time to resolve a request and staff satisfaction with their tools, gives the programme its before picture.

                ## Milestones
                1. Three customer measures chosen, for example share of requests completed online, satisfaction score and time to resolution.
                2. Two staff measures chosen, such as satisfaction with internal tools and hours a week spent on manual workarounds.
                3. A first reading of every measure taken and dated.
                4. The measures added to the benefits tracking so they are read again every quarter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Five experience measures, three customer and two staff, each with a dated baseline reading recorded in the benefits tracker."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick three customer experience measures you can read from existing data"
                - "Run a short staff survey on satisfaction with the tools they use daily"
                - "Record the first reading of each measure with today's date"
                - "Add all five measures to the benefits tracking sheet"
            - name: First eighteen-month transformation roadmap
              description: |-
                ## Purpose
                A roadmap that lists forty initiatives at once tells nobody what happens first. An eighteen-month roadmap in three six-month waves, each with a small number of outcomes, the dependencies between them and the capacity to deliver them, gives teams a sequence they can plan around and gives the board something to hold you to.

                ## Milestones
                1. Initiatives grouped into three six-month waves, with no more than five major initiatives in the first wave.
                2. Each wave tied to two or three measurable business outcomes from the case for change.
                3. Key dependencies shown, such as data clean-up before a new customer platform.
                4. A capacity check confirming people and budget exist for wave one.
                5. The roadmap approved by the steering group and published to managers.

                ## Notes
                Put at least one visible, low-risk improvement in the first ninety days. Early proof matters more to staff than the elegance of the plan.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved eighteen-month roadmap in three waves, each wave linked to measurable outcomes and a confirmed capacity check for wave one."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "List every candidate initiative from the baseline, inventory and pain-point map"
                - "Sort the initiatives into three six-month waves"
                - "Mark the dependencies that force one initiative before another"
                - "Check wave one against available people and budget with the finance partner"
                - "Present the roadmap to the steering group for approval"
            - name: Transformation funding model decision
              description: |-
                ## Purpose
                Traditional annual project funding asks teams to promise fixed scope a year ahead, which fits poorly with digital work that learns as it goes. Deciding early whether to fund fixed projects, persistent product teams or a staged mix, and agreeing it with the finance director, avoids a fight over every change of plan.

                ## Milestones
                1. The three main options described: annual project funding, persistent team funding and stage-gated release of money.
                2. The finance director's requirements for control, reporting and capitalisation written down.
                3. One model chosen, with how and when money is released and who can move it between initiatives.
                4. The decision recorded in the programme charter.

                ## Notes
                Capitalisation rules for software differ by accounting framework. Agree the treatment with your finance team and auditors rather than assuming it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded funding model decision, agreed with the finance director, stating how money is released and who can reallocate it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book an hour with the finance director to hear their control requirements"
                - "Write a half-page comparison of project, team and stage-gated funding"
                - "Ask finance how software spend is capitalised under your accounting rules"
                - "Record the chosen funding model in the programme charter"
            - name: Monthly transformation steering committee
              description: |-
                ## Purpose
                Without a regular forum where the sponsor and business leaders make decisions, problems sit unresolved and teams wait for permission. A monthly steering meeting of no more than ninety minutes, built around decisions needed rather than status updates, keeps the programme moving and the business owning it.

                ## Milestones
                1. Membership fixed at six to eight people, mostly business leaders, with the sponsor in the chair.
                2. A standing agenda of decisions needed, benefits, top risks and one showcase item.
                3. A pack sent at least three working days before each meeting.
                4. A decision log kept and circulated within two days of each meeting.

                ## Notes
                If a steering meeting ends without a decision, the next agenda is too full of updates. Push status into the written pack.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve steering meetings a year held with packs sent three days ahead and a decision log updated after every meeting."
                cadence: rolling
              tasks:
                - "Confirm steering membership and the standing agenda with the sponsor"
                - "Send the steering pack with decisions needed listed first @recurring(monthly:9)"
                - "Circulate the decision log within two days of the meeting @recurring(monthly:14)"
                - "Review attendance each quarter and replace members who send delegates"
            - name: Transformation benefits realisation tracking
              description: |-
                ## Purpose
                Business cases promise savings and better service, then nobody checks once the system is live. Tracking each promised benefit monthly, with a named business owner responsible for it rather than the delivery team, is what shows whether the investment is paying back and where it needs a push.

                ## Milestones
                1. Every approved initiative linked to one to three benefits with a baseline, target and date.
                2. Each benefit owned by a named business leader, not the project manager.
                3. A monthly benefits update showing actual against planned for every live initiative.
                4. A quarterly view to the steering group of benefits on track, at risk and missed, with actions.

                ## Notes
                Start from the **Metrics log** template. Count hours released only once they are used for something else; time saved that disappears into the day is not a benefit.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A benefits log with baseline, target and owner for every approved initiative, updated monthly and reviewed by the steering group each quarter."
                cadence: rolling
              tasks:
                - "List every promised benefit from approved business cases with its owner"
                - "Collect actual benefit figures from each benefit owner @recurring(monthly:20)"
                - "Present benefits on track, at risk and missed to the steering group @recurring(quarterly)"
                - "Agree an action with the owner of any benefit missing its target twice"
            - name: Transformation risk and dependency register
              description: |-
                ## Purpose
                Digital programmes fail on dependencies more often than on technology: a data migration that slips, a vendor that misses a release, a team pulled back to the day job. A shared register of risks and cross-initiative dependencies, reviewed every month, gives the steering group early warning instead of surprises.

                ## Milestones
                1. A register with likelihood, impact, owner and next action for every risk.
                2. Cross-initiative dependencies listed with the date each one is needed.
                3. The top five risks reported in every steering pack.
                4. Closed risks kept on record with what was done, for later lessons.

                ## Notes
                Start from the **Risk register** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A risk and dependency register with owners for every entry, reviewed monthly, and its top five risks included in every steering pack."
                cadence: rolling
              tasks:
                - "Set up the register and add the ten risks the team worries about most"
                - "List every dependency between initiatives with its need-by date"
                - "Review risks and dependencies with initiative leads @recurring(monthly:5)"
                - "Escalate any dependency that has slipped twice to the sponsor"
            - name: Fortnightly showcase of working software
              description: |-
                ## Purpose
                Slide decks about progress persuade nobody; seeing a real screen used by a real colleague does. A fortnightly thirty-minute showcase where delivery teams demonstrate what they shipped, to an audience that includes future users, builds trust, surfaces problems early and keeps the work honest.

                ## Milestones
                1. A fixed thirty-minute slot every second week, open to anyone in the organisation.
                2. Each team showing working features only, with no slides beyond a title.
                3. At least one front-line user invited to every showcase to react to what they see.
                4. Feedback captured and passed to each team's backlog within a week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least twenty showcases held in a year, each with working features demonstrated and front-line feedback recorded."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute showcase slot every second Thursday"
                - "Confirm which teams will demo and invite two front-line users @recurring(weekly:tue)"
                - "Send captured feedback to each team's product owner after the session"
                - "Count showcase attendance and change the format if it falls @recurring(quarterly)"
            - name: Digital initiative intake and stage gates
              description: |-
                ## Purpose
                Once a transformation is announced, ideas and requests pour in from every department, and without a clear front door the roadmap fills with whoever shouts loudest. A simple intake form and three stage gates, from idea to discovery to build, give every proposal the same fair route and let leaders stop weak ideas cheaply.

                ## Milestones
                1. A one-page intake form asking for the problem, affected users, expected benefit and sponsor.
                2. Three gates defined with the evidence required at each and the money released.
                3. A monthly intake review that decides on every new submission.
                4. A public list of proposals and their status so people can see what happened to their idea.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every new digital proposal enters through one form and receives a recorded gate decision within one monthly review cycle."
                cadence: rolling
              tasks:
                - "Draft the one-page intake form and test it on two recent requests"
                - "Write the evidence required at the idea, discovery and build gates"
                - "Hold the intake review and decide every new submission @recurring(monthly:3)"
                - "Publish the status of all proposals on the staff intranet"
            - name: Adoption and usage dashboard for new tools
              description: |-
                ## Purpose
                Live but unused systems deliver none of their business case, and adoption problems are invisible unless someone looks. A simple dashboard of active users, completion rates and workarounds for every new tool shows within weeks where training, design or management attention is needed.

                ## Milestones
                1. For each live tool, an expected user count and a definition of active use agreed with the business owner.
                2. Monthly figures for active users, key tasks completed in the new tool and old-process volumes still running.
                3. A red, amber or green adoption status for each tool reviewed by its business owner.
                4. A follow-up action for any tool below seventy percent of expected active use after three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An adoption dashboard covering every live tool, refreshed monthly, with an action recorded for any tool under seventy percent of expected use."
                cadence: rolling
              tasks:
                - "Agree a definition of active use with each tool's business owner"
                - "Refresh active users and old-process volumes for every live tool @recurring(monthly:26)"
                - "Agree a fix with the owner of any tool rated red"
                - "Visit one low-adoption team each quarter to watch how they work @recurring(quarterly)"
            - name: Quarterly technology vendor performance reviews
              description: |-
                ## Purpose
                Transformations usually depend on a few large vendors and implementation partners, and contracts drift when nobody checks delivery against what was promised. A structured quarterly review of each major vendor, covering delivery, service levels, cost and relationship, keeps them accountable and gives you evidence before any renewal.

                ## Milestones
                1. The five to eight vendors that matter most to the programme identified, with a named relationship owner each.
                2. A scorecard per vendor covering milestones met, service levels, invoices against budget and responsiveness.
                3. A quarterly review meeting with each major vendor and agreed actions recorded.
                4. Renewal and exit dates logged at least nine months ahead.

                ## Notes
                Start from the **Vendor** template, one per major vendor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each major vendor has a scorecard and a recorded quarterly review, with renewal dates logged at least nine months ahead."
                cadence: cyclic
              tasks:
                - "List the vendors whose failure would stop the programme"
                - "Create a scorecard for each with milestones, service levels and spend"
                - "Hold the quarterly review with each major vendor @recurring(quarterly)"
                - "Log every contract renewal and notice date in the programme calendar"
                - "Check the renewal calendar for notices due in the next ninety days @recurring(monthly:16)"
            - name: Quarterly transformation roadmap re-plan
              description: |-
                ## Purpose
                Any eighteen-month roadmap is partly wrong by month four, and leaders who defend the original plan lose credibility as reality diverges. A short quarterly re-plan, using benefits, adoption and risk evidence, lets the programme stop, accelerate or reshape initiatives openly instead of quietly slipping.

                ## Milestones
                1. A half-day session each quarter with the sponsor, transformation office and initiative leads.
                2. Every initiative given a continue, change, pause or stop decision with a one-line reason.
                3. The next wave refined with any new evidence from intake and pain points.
                4. An updated roadmap published to managers within a week of the session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four re-plan sessions a year, each producing a recorded decision for every initiative and an updated roadmap published within a week."
                cadence: cyclic
              tasks:
                - "Gather benefits, adoption and risk figures for the re-plan pack"
                - "Run the half-day re-plan and decide every initiative @recurring(quarterly)"
                - "Publish the updated roadmap with a note on what changed and why"
            - name: Monthly transformation update for all staff
              description: |-
                ## Purpose
                Staff fill silence with rumour, and in a digital transformation the most common rumour is that the new systems exist to cut jobs. A short, regular update in plain language, saying what changed this month, what is coming and what it means for people's work, keeps trust intact and gives managers something to repeat.

                ## Milestones
                1. One owner for staff communications in the transformation office.
                2. A monthly update of no more than five hundred words, with at least one real colleague's example.
                3. A briefing note for line managers sent two days ahead so they hear news before their teams.
                4. A simple question channel with answers published within a fortnight.

                ## Notes
                Be direct about workforce effects. If roles will change or reduce, say what is known and when more will be known; vagueness here does more damage than bad news.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly staff updates published in a year, each preceded by a manager briefing note, with all questions answered within two weeks."
                cadence: rolling
              tasks:
                - "Name the owner of transformation communications"
                - "Send the line manager briefing note two days before the update @recurring(monthly:6)"
                - "Publish the monthly staff update with one colleague's example @recurring(monthly:8)"
                - "Answer every question from the channel and publish the replies"
            - name: Legacy system retirement tracker
              description: |-
                ## Purpose
                New platforms add cost every year, and the savings in the business case usually depend on switching old systems off. A tracker of every system due for retirement, with its decommission date, remaining users and blockers, stops organisations paying for two estates indefinitely.

                ## Milestones
                1. Every system tagged retire in the inventory listed with a target switch-off date.
                2. Remaining users, data to archive and contract notice periods recorded for each.
                3. A quarterly check of progress against switch-off dates reported to steering.
                4. Licence and hosting savings confirmed with finance once each system is off.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A retirement tracker with target dates for every system tagged retire, reviewed quarterly, and savings confirmed by finance for each switch-off."
                cadence: rolling
              tasks:
                - "Copy all systems tagged retire from the inventory into the tracker"
                - "Record contract notice periods so switch-off dates do not trigger renewals"
                - "Check progress against every switch-off date @recurring(quarterly)"
                - "Ask finance to confirm the saving after each system is turned off"
            - name: Executive team digital fluency sessions
              description: |-
                ## Purpose
                Executives who cannot discuss cloud, data or agile delivery with confidence either defer every decision to IT or make expensive choices without understanding them. A short series of practical sessions for the executive team, built on the organisation's own systems and decisions, gives leaders enough fluency to challenge, support and decide.

                ## Milestones
                1. Six sessions of ninety minutes agreed with the executive team, each on one topic tied to a current decision.
                2. Topics covering cloud basics, data and analytics, cybersecurity, agile delivery, platforms and digital customer experience.
                3. Each session including a hands-on element, such as using a prototype or reading a real dashboard.
                4. A short self-assessment before and after showing where confidence has moved.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All six fluency sessions delivered to the executive team, with before and after self-assessments recorded for every member."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Ask each executive which digital topic they feel least able to challenge"
                - "Plan six sessions, each linked to a real decision on the roadmap"
                - "Line up an internal or external expert for each session"
                - "Run the before and after self-assessment and share the summary"
            - name: Product management basics for senior leaders
              description: |-
                ## Purpose
                Digital organisations organise work around products with owners, outcomes and backlogs rather than projects with end dates, and leaders who have never worked that way struggle to sponsor it. Learning the basics of discovery, prioritisation and outcome measures lets you ask product teams the right questions and stop treating them as order-takers.

                ## Milestones
                1. One introductory book or course on product management completed.
                2. Three product team rituals attended as an observer: a discovery session, a backlog review and a retrospective.
                3. A one-page note on what senior leaders should and should not ask of product teams.
                4. The note discussed with two product owners and corrected where they disagreed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note on leading product teams, informed by three observed rituals and reviewed by two product owners."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose one introductory book or short course on product management"
                - "Ask a product owner if you can observe their next discovery session"
                - "Sit in on a backlog review and a retrospective"
                - "Write a one-page note on good and bad leadership questions for product teams"
            - name: Cloud economics and cost management for executives
              description: |-
                ## Purpose
                Moving to the cloud swaps large up-front purchases for a bill that grows every month, and many organisations are surprised a year in. Understanding how cloud pricing works, what drives the bill and how cost management practices assign spend to teams helps leaders set sensible expectations and ask for the right reports.

                ## Milestones
                1. The main pricing models understood: on-demand, reserved or committed use and storage and data transfer charges.
                2. The organisation's current cloud bill read line by line with the cloud or finance lead.
                3. A short list of the three questions leaders should ask every month about cloud spend.
                4. Agreement that every cloud resource is tagged to an owning team.

                ## Notes
                Data transfer and idle resources are the most common surprises. Ask to see both on the monthly bill.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A walkthrough of the current cloud bill completed with the cloud lead and a monthly three-question cost review agreed with finance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book an hour with the cloud lead to walk through last month's bill"
                - "Review the five largest cloud cost lines with the cloud lead @recurring(monthly:12)"
                - "Write the three cost questions you will ask at every review"
                - "Ask whether every cloud resource is tagged to an owning team"
            - name: Agile delivery literacy for non-technical leaders
              description: |-
                ## Purpose
                Business leaders sponsoring digital work are often frustrated that teams will not commit to a fixed date and scope, while teams are frustrated by leaders who ask for one. Learning how iterative delivery, sprints, minimum viable releases and velocity really work helps you set targets that fit how software gets built.

                ## Milestones
                1. The core ideas understood: iterative releases, backlogs, sprint reviews and why scope flexes.
                2. One full sprint followed with a delivery team, from planning to review.
                3. A written explanation, in your own words, of how you will now ask teams for forecasts.
                4. One existing fixed-scope request reworded as an outcome with a first release.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One sprint followed from planning to review and one fixed-scope request rewritten as an outcome and first release."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read a short introduction to iterative software delivery"
                - "Ask a delivery team if you can follow their next sprint"
                - "Attend the sprint planning and the sprint review"
                - "Rewrite one of your own fixed-scope requests as an outcome"
            - name: Reading architecture diagrams and technical proposals
              description: |-
                ## Purpose
                Sponsors are asked to approve designs they cannot read, which leaves them either rubber-stamping or blocking on instinct. Learning to read a system context diagram, an integration map and a technical options paper, and knowing the five questions that expose weak proposals, makes your approval meaningful.

                ## Milestones
                1. The common diagram types understood: context, container, integration and data flow.
                2. Two real diagrams from the programme walked through with an architect.
                3. A personal list of five questions to ask of any technical proposal, covering cost, security, support, exit and dependencies.
                4. The questions used on one live proposal and the answers recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two programme diagrams reviewed with an architect and a five-question checklist applied to a live technical proposal."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the lead architect for two diagrams from current programme work"
                - "Book an hour to walk through both diagrams together"
                - "Write your five standard questions for any technical proposal"
                - "Use the questions on the next proposal that reaches steering"
            - name: Data literacy for managers in the transformation
              description: |-
                ## Purpose
                New digital tools produce dashboards that managers are expected to act on, and many quietly ignore them because they do not trust or understand the numbers. Building basic data literacy across the management layer, from reading a trend to questioning a metric's definition, is what turns new data into better decisions.

                ## Milestones
                1. A short data literacy module designed around the organisation's own dashboards.
                2. Managers in the first-wave business areas trained in groups of no more than fifteen.
                3. Each manager able to name the definition and owner of their three main metrics.
                4. A follow-up check after two months on whether dashboards are used in team meetings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All first-wave managers trained, each able to state the definition and owner of their three main metrics, with usage checked two months later."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose three real dashboards to build the module around"
                - "Draft the session outline with the data or analytics lead"
                - "Schedule sessions for first-wave managers in groups of fifteen"
                - "Ask each manager two months later which dashboard they used last week"
            - name: Peer transformation visits and lessons
              description: |-
                ## Purpose
                Other organisations a few years ahead have already made the expensive mistakes, and most leaders will share them candidly in private. Visiting or calling three to five peers who have led a similar transformation, with a fixed set of questions, is the cheapest risk reduction available before the big decisions.

                ## Milestones
                1. Three to five peer organisations identified through networks, industry bodies or vendors' reference lists.
                2. A standard question set covering what they would do differently, funding, people and vendor lessons.
                3. Each conversation written up within two days.
                4. A one-page summary of recurring lessons shared with the steering group.

                ## Notes
                Vendor-supplied references are chosen to impress. Find at least one peer through your own network who did not have a smooth ride.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least three peer conversations written up and a one-page lessons summary presented to the steering group."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List five peers known to have led a similar transformation"
                - "Write the eight questions you will ask every peer"
                - "Request a call or visit with each peer"
                - "Ask the agent to summarise the recurring lessons from your write-ups"
            - name: Product operating model pilot in one value stream
              description: |-
                ## Purpose
                Moving from temporary project teams to long-lived product teams is one of the biggest changes in digital transformation, and doing it everywhere at once overwhelms the organisation. Piloting the model in one value stream, such as customer onboarding, with a cross-functional team and a business product owner, shows what works before scaling it.

                ## Milestones
                1. One value stream chosen with a willing business leader and visible pain points.
                2. A cross-functional team formed with a business product owner, delivery staff and a designer, funded for at least two quarters.
                3. Two or three outcome measures agreed for the team instead of a fixed scope.
                4. A review after six months comparing outcomes and staff experience with the old project approach.
                5. A recorded decision to scale, adjust or stop the model.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A six-month product team pilot completed in one value stream, with outcome measures reviewed and a scale, adjust or stop decision recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose the value stream and secure its business leader as sponsor"
                - "Name a business product owner with real authority over priorities"
                - "Agree the team's outcome measures and funding for two quarters"
                - "Book the six-month pilot review with the steering group"
            - name: Build, buy or partner decision for a core platform
              description: |-
                ## Purpose
                Choosing whether to build a capability in-house, buy a packaged product or partner with a specialist shapes cost, speed and differentiation for a decade. A structured comparison for each core platform decision, scored against agreed criteria, keeps the choice from defaulting to whichever vendor presented best.

                ## Milestones
                1. The capability described in business terms, with whether it differentiates the organisation or is standard.
                2. Build, buy and partner options each costed over five years, including people, licences and exit.
                3. Options scored against agreed criteria such as fit, time to value, control and vendor risk.
                4. A recommendation approved by the steering group with the main trade-off stated.

                ## Notes
                Start from the **Purchase decision** template. Buy for capabilities that are standard in your industry; reserve building for what genuinely sets you apart.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A five-year cost and criteria comparison of build, buy and partner options with a steering-approved decision recorded."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Describe the capability and mark it as differentiating or standard"
                - "Agree the scoring criteria with the sponsor before seeing any vendor"
                - "Cost each option over five years including exit costs"
                - "Present the scored comparison and recommendation to steering"
            - name: Cloud migration strategy for the application estate
              description: |-
                ## Purpose
                Lifting every system into the cloud unchanged often raises costs without improving anything, while rebuilding everything takes years. Choosing a migration route for each application, whether rehost, re-platform, replace, retire or retain, gives a realistic plan, cost and order for the move.

                ## Milestones
                1. Each application from the inventory given a migration route with a reason.
                2. A target landing zone with security, identity and cost controls agreed before the first move.
                3. Migration waves sequenced by dependency and risk, starting with low-risk systems.
                4. A total cost comparison of current hosting against the target, checked by finance.
                5. The strategy approved by steering.

                ## Notes
                Some data may have residency or regulatory constraints. Confirm with your compliance or legal team before choosing hosting regions.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved migration strategy assigning a route to every application, with a sequenced wave plan and a finance-checked cost comparison."
                cadence: one-shot
                effort_hours_estimate: "35"
              tasks:
                - "Assign a rehost, re-platform, replace, retire or retain route to each application"
                - "Ask compliance which data has residency or regulatory hosting limits"
                - "Sequence the first migration wave with the lowest-risk systems"
                - "Have finance check the hosting cost comparison before steering"
            - name: Core system replacement business case
              description: |-
                ## Purpose
                Replacing a core system such as the finance platform, customer records or the main operational system is the largest and riskiest decision in most transformations, and failed replacements are common. A business case that is honest about cost, timeline, data migration and the change to ways of working gives the board a decision it can stand behind.

                ## Milestones
                1. The case for replacement set out against the alternative of extending or improving the current system.
                2. Costs covering licences, implementation partner, internal staff backfill, data migration and contingency of at least twenty percent.
                3. A realistic timeline with the cutover approach and the busy periods to avoid.
                4. Benefits with owners and baselines, linked to the benefits tracker.
                5. Board approval with conditions recorded.

                ## Notes
                The most underestimated costs are backfilling the business experts seconded to the project and cleaning the data before migration.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A board-approved business case for core system replacement including backfill, data migration and at least twenty percent contingency."
                cadence: one-shot
                effort_hours_estimate: "45"
              tasks:
                - "Write the alternative of extending the current system as option one"
                - "Estimate the cost of backfilling every business expert seconded to the project"
                - "Ask the data team to size the clean-up needed before migration"
                - "Mark the business calendar periods when cutover must not happen"
                - "Submit the business case to the board with the contingency shown separately"
            - name: Data ownership and quality foundations
              description: |-
                ## Purpose
                New digital services fail quietly when the data underneath is duplicated, incomplete or owned by nobody. Naming business owners for the key data domains such as customer, product and supplier, and agreeing basic quality rules, gives every later platform a foundation it can rely on.

                ## Milestones
                1. Five to eight key data domains named, each with a senior business owner.
                2. A quality measure for each domain, such as duplicate rate or completeness of mandatory fields.
                3. A first quality reading taken and the worst domain prioritised for clean-up.
                4. A simple rule for who can create and change records in each domain.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Business owners and a quality measure named for every key data domain, with a baseline reading and a clean-up priority agreed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the data domains that every new platform will depend on"
                - "Ask a senior business leader to own each domain"
                - "Agree one quality measure per domain with its owner"
                - "Take the first quality reading and pick the domain to clean first"
                - "Send each domain owner their quality score and the worst records found @recurring(monthly:23)"
            - name: Digitising one high-volume paper process end to end
              description: |-
                ## Purpose
                Nothing builds belief in a transformation faster than staff seeing a frustrating paper process become simple. Choosing one high-volume process, such as expense claims, permits or customer applications, and digitising it fully, including the approvals and records, delivers a visible early win and a pattern the next teams can copy.

                ## Milestones
                1. One process chosen with high volume, clear pain and a willing business owner.
                2. The redesigned process agreed before any tool is configured, removing unnecessary steps.
                3. The digital version live with the paper route switched off after a short overlap.
                4. Before and after figures for processing time and errors published to staff.

                ## Notes
                Simplify first, then digitise. Automating a bad process just makes bad outcomes faster.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One high-volume process fully digitised with the paper route switched off and before and after processing times published."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Pick the paper process with the highest monthly volume and a willing owner"
                - "Run a workshop to remove unnecessary steps before choosing a tool"
                - "Set a date to switch off the paper route after a short overlap"
                - "Publish the before and after processing times in the staff update"
            - name: Safe retirement of one legacy system
              description: |-
                ## Purpose
                Switching off an old system is harder than it looks: forgotten users, reports nobody knew existed and records that must be kept for years. Retiring one legacy system carefully, with archive, access and contract steps, proves the organisation can actually reduce its estate and gives a repeatable checklist.

                ## Milestones
                1. Every remaining user and downstream report identified and moved to the replacement.
                2. Records needed for legal or regulatory retention archived in an accessible format.
                3. The system set to read-only for an agreed period before final switch-off.
                4. Licences and hosting cancelled within the contract notice period and the saving confirmed.

                ## Notes
                Check retention requirements with your legal or records team; some records must be kept for many years after the system is gone.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One legacy system switched off with all users moved, retained records archived and the licence saving confirmed by finance."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Run a login report to find everyone who used the system in the last six months"
                - "Ask legal or records which data must be kept and for how long"
                - "Set the system to read-only and announce the final switch-off date"
                - "Cancel the licence within the notice period and confirm the saving"
            - name: Digital skills gap assessment and reskilling plan
              description: |-
                ## Purpose
                Transformations stall when the organisation lacks product owners, data analysts and cloud engineers, or when existing staff are left behind by new tools. Assessing the skills needed against those in place, and choosing to train, hire or partner for each gap, turns workforce worry into a plan people can see themselves in.

                ## Milestones
                1. The ten to fifteen digital skills the roadmap needs listed, with the number of people required.
                2. Current capability assessed by team, including staff who could be reskilled.
                3. A train, hire or partner decision for each gap, with cost and timing.
                4. A reskilling offer communicated to staff whose roles will change.

                ## Notes
                Start from the **Skills matrix** template. Reskilling existing staff is usually slower than hiring but keeps the organisational knowledge new systems depend on.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A skills matrix for every team in the roadmap and a train, hire or partner decision with cost for each identified gap."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the digital skills each roadmap wave depends on"
                - "Ask team leaders to rate current capability against each skill"
                - "Decide train, hire or partner for every gap with the people team"
                - "Announce the reskilling offer to staff whose roles are changing"
            - name: Security and resilience built into the transformation
              description: |-
                ## Purpose
                Every new platform, integration and cloud move widens the organisation's attack surface, and security added at the end causes delays or gets skipped. Agreeing security and resilience requirements up front, with the security lead involved at each stage gate, keeps the programme moving without creating the next major incident.

                ## Milestones
                1. Minimum security requirements for any new system agreed, covering identity, data protection, logging and backup.
                2. The security lead given a formal checkpoint at the discovery and build gates.
                3. Recovery time and recovery point expectations agreed with business owners for each critical service.
                4. A recovery test completed for the first major platform before go-live.

                ## Notes
                Agree data protection obligations with your privacy or legal adviser; they vary by country and sector.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written minimum security requirements, security checkpoints at two stage gates and a recovery test completed before the first major go-live."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the security lead to draft minimum requirements for new systems"
                - "Add a security checkpoint to the discovery and build gates"
                - "Agree recovery time expectations with each critical service owner"
                - "Schedule a recovery test before the first major platform goes live"
            - name: Transformation launch to the whole organisation
              description: |-
                ## Purpose
                The moment staff first hear about the transformation shapes how they treat it for years, and a launch made of slogans and vendor logos invites cynicism. A planned launch with the chief executive explaining the case in person, real examples of what will change and honest answers about jobs gives the programme a credible start.

                ## Milestones
                1. A launch session led by the chief executive and the sponsor, with time for live questions.
                2. Line managers briefed two days ahead with a short pack and likely questions.
                3. Three concrete examples of changes staff will see in the first six months.
                4. A written summary and question channel available the same day.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A launch delivered by the chief executive with managers briefed two days ahead and a written summary published the same day."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Agree the launch date and format with the chief executive"
                - "Pick three changes staff will see in the first six months"
                - "Prepare a manager pack with the ten hardest likely questions"
                - "Publish the summary and open the question channel the same day"
            - name: Major go-live readiness and cutover
              description: |-
                ## Purpose
                The first big go-live is where a transformation earns or loses its reputation, and most failures trace back to skipped readiness checks rather than bad technology. A go or no-go process with clear criteria, a rehearsed cutover, a rollback plan and a staffed support period gives the launch its best chance.

                ## Milestones
                1. Readiness criteria agreed in advance: testing complete, data migrated and reconciled, users trained, support in place.
                2. At least one full cutover rehearsal completed and timed.
                3. A written rollback plan with the point of no return identified.
                4. A go or no-go decision taken by the business owner against the criteria.
                5. A two to four week support period with daily issue reviews.

                ## Notes
                Give the business owner, not the vendor, the final go or no-go call, and make it acceptable to say no.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A go-live decided against written readiness criteria after a timed rehearsal, with a rollback plan and a support period of at least two weeks."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Write the go-live readiness criteria with the business owner"
                - "Schedule a full cutover rehearsal at least three weeks before go-live"
                - "Document the rollback plan and the point of no return"
                - "Hold the go or no-go meeting against the written criteria"
                - "Run a daily issue review for the first two weeks after go-live"
            - name: Board update on transformation progress
              description: |-
                ## Purpose
                Boards approve large digital investments and then struggle to tell whether they are on track, which leads to either blind trust or anxious micromanagement. A clear board update twice a year covering outcomes, benefits, spend, risk and decisions needed lets directors do their job and protects the programme's mandate.

                ## Milestones
                1. A board paper of no more than six pages with an executive summary on page one.
                2. Benefits and spend shown against the approved business case.
                3. The top risks and any change to timeline or budget stated plainly.
                4. Specific decisions or guidance requested from the board.

                ## Notes
                Bad news should appear in the paper before the meeting, never for the first time in the room.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A board paper of six pages or fewer presented, showing benefits and spend against plan and recording the board's decisions."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the board meeting date and paper deadline with the company secretary"
                - "Pull benefits and spend against the approved business case"
                - "Ask the agent to draft the one-page executive summary from the steering packs"
                - "Brief the chair before the paper goes out"
            - name: Independent mid-point assurance review
              description: |-
                ## Purpose
                Programme teams become too close to their own plan to see its weaknesses, and steering groups hear what the team believes. An independent review at the mid-point, by someone outside the programme, tests delivery confidence, benefits and governance and gives the sponsor an honest second opinion while there is still time to act.

                ## Milestones
                1. A reviewer appointed from internal audit, another business unit or an outside firm with no delivery role.
                2. Terms of reference covering delivery confidence, benefits, governance and people.
                3. Interviews and document review completed over two to three weeks.
                4. A rated report with recommendations and a response plan owned by the sponsor.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An independent mid-point review report with a delivery confidence rating and a sponsor-owned response plan for every recommendation."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Choose a reviewer with no delivery role in the programme"
                - "Write the terms of reference with the sponsor"
                - "Give the reviewer access to steering packs, risk register and benefits log"
                - "Agree an owner and date for every recommendation in the report"
            - name: Twelve-month transformation review
              description: |-
                ## Purpose
                A year in, leaders need an honest account of what changed, what was learned and whether the original ambition still holds. A structured twelve-month review against the maturity baseline, the experience measures and the benefits log resets the programme for its second year on evidence rather than optimism.

                ## Milestones
                1. The maturity baseline rescored using the same scale and evidence rules.
                2. Experience measures and benefits compared with their baselines.
                3. Three to five lessons written up, including what the leadership team would do differently.
                4. A refreshed ambition and second-year priorities approved by steering and shared with staff.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A twelve-month review comparing maturity, experience and benefits with baseline, and approved second-year priorities shared with staff."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Rescore the maturity baseline using the original evidence rules"
                - "Compare experience measures and benefits with their first readings"
                - "Run a one-hour lessons session with the steering group"
                - "Publish the second-year priorities in the staff update"
            - name: Inheriting a stalled transformation as a new leader
              description: |-
                ## Purpose
                Many leaders are hired or promoted into a transformation that is over budget, behind schedule and distrusted by staff. A focused first sixty days spent listening, diagnosing and deciding what to stop gives you a credible reset rather than either defending the old plan or tearing it all up.

                ## Milestones
                1. Twenty or more conversations held with sponsors, delivery teams, users and vendors in the first month.
                2. A written diagnosis of the three or four root causes of the stall.
                3. A list of initiatives to stop, pause or continue, with reasons.
                4. A reset plan agreed with the sponsor and explained openly to staff.

                ## Notes
                Resist announcing a new plan in the first month. People will judge the reset by whether you listened first.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written diagnosis based on at least twenty conversations and a sponsor-approved reset plan with stop, pause and continue decisions."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "List the twenty people whose view of the programme you need first"
                - "Ask each the same three questions about what went wrong and what works"
                - "Write the root-cause diagnosis in no more than two pages"
                - "Agree the stop, pause and continue list with the sponsor"
            - name: Digital transformation on a mid-sized budget
              description: |-
                ## Purpose
                Organisations of a few hundred people cannot fund a large transformation office or a multi-year platform rebuild, yet face the same pressure to modernise. A lean approach built on standard cloud products, a part-time sponsor and one change at a time gives real progress without the overhead designed for large enterprises.

                ## Milestones
                1. A budget ceiling and the share of leadership time available agreed with the owner or board.
                2. Three priority changes chosen that rely mostly on configurable off-the-shelf products.
                3. A single programme lead, part-time if necessary, with a monthly review instead of a full steering structure.
                4. The first change live and its benefit measured within six months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three priority changes chosen within an agreed budget ceiling, with the first live and its benefit measured inside six months."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Agree the budget ceiling for the next eighteen months with the board"
                - "Choose three changes that can use standard configurable products"
                - "Name the programme lead and set a monthly review"
                - "Measure the first change's benefit three months after it goes live"
            - name: Transformation in a regulated industry
              description: |-
                ## Purpose
                Banks, insurers, utilities, healthcare providers and similar organisations must change systems while keeping regulators informed and audit trails intact. Building regulatory engagement, outsourcing rules and evidence requirements into the plan from the start avoids late surprises that can stop a go-live.

                ## Milestones
                1. The regulatory obligations affecting the programme listed with the compliance team, including outsourcing and cloud notification rules.
                2. A plan for when and how the regulator is informed or consulted.
                3. Evidence requirements for testing, data migration and controls built into stage gates.
                4. Compliance sign-off added to the go or no-go criteria for each major release.

                ## Notes
                Regulatory requirements differ by country and sector. Work from your compliance team's interpretation, not general guidance.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A regulatory obligations list and engagement plan agreed with compliance, and compliance sign-off included in every major go-live decision."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask compliance to list every regulatory obligation the programme touches"
                - "Confirm whether cloud or outsourcing changes need regulator notification"
                - "Add evidence requirements to the discovery and build gates"
                - "Include compliance sign-off in the go-live criteria"
            - name: Transformation across business units or countries
              description: |-
                ## Purpose
                Group organisations face a constant tension between common platforms that save money and local needs that keep each business competitive. Agreeing which capabilities are shared, which are standard but locally run and which stay fully local prevents years of argument and duplicated systems.

                ## Milestones
                1. Each capability classified as group shared, group standard with local operation, or local choice.
                2. Decision rights between group and units written down for technology, data and process.
                3. A funding approach for shared platforms that units accept as fair.
                4. One shared platform rolled out to at least two units as proof.

                ## Notes
                Units adopt shared platforms faster when they help design them. Give each unit a seat on the design authority.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every capability classified as shared, standard or local, with written decision rights and one shared platform live in two units."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the capabilities every unit runs today"
                - "Classify each as shared, standard with local operation, or local"
                - "Write the group and unit decision rights for technology and data"
                - "Choose the first shared platform and two units to adopt it"
            - name: Digital change with a long-tenured or unionised workforce
              description: |-
                ## Purpose
                Where staff have long service, strong professional identities or union representation, new systems can feel like an attack on expertise and job security. Involving employee representatives early, consulting properly on changes to roles and pairing experienced staff with design work turns potential resistance into valuable knowledge.

                ## Milestones
                1. Employee representatives or unions briefed before any public announcement.
                2. Consultation obligations on changes to roles confirmed with the people team and employment adviser.
                3. Experienced staff placed on design and testing for each major system.
                4. A training and support offer agreed with representatives.

                ## Notes
                Consultation duties are set by employment law and agreements in your country. Take advice from your people team or employment lawyer before announcing role changes.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Representatives briefed before announcement, consultation duties confirmed with an adviser, and experienced staff on every major system's design team."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the people team which consultation duties apply to role changes"
                - "Brief employee representatives before the staff announcement"
                - "Invite experienced staff to join design and testing for each system"
                - "Agree the training and support offer with representatives"
            - name: Line manager guide to a team-level digital rollout
              description: |-
                ## Purpose
                Middle managers decide whether a new system is really used, yet they are often told about it last and given no time to prepare their teams. A manager who plans their own team's rollout, with time for practice, a local champion and an honest check-in after a month, gets adoption that headquarters cannot mandate.

                ## Milestones
                1. The new tool tried personally before the team uses it.
                2. A local champion named and given time to support colleagues.
                3. Practice time scheduled in working hours before the switch.
                4. A one-month check-in with the team on what works and what does not, fed back to the programme.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A team rollout with a named champion, scheduled practice time and a one-month feedback check-in reported to the programme."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Use the new tool yourself for one real task before the team switches"
                - "Ask one team member to act as the local champion"
                - "Block practice time in the team diary before the switch date"
                - "Hold a one-month check-in and send the findings to the programme"
            - name: Enterprise architecture principles and target state
              description: |-
                ## Purpose
                Without agreed principles, every team picks its own tools and the estate becomes harder to change than before the transformation began. A short set of architecture principles and a target-state picture for three years give delivery teams freedom inside clear boundaries and give leaders a test for every proposal.

                ## Milestones
                1. Eight to twelve architecture principles agreed, such as reuse before buy, cloud first and data owned at the source.
                2. A target-state diagram for three years showing core platforms and how they connect.
                3. A lightweight design authority that reviews significant proposals against the principles.
                4. Exceptions recorded with a reason and a review date.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Agreed architecture principles, a three-year target-state diagram and a design authority recording every exception with a review date."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Draft ten candidate principles with the lead architect"
                - "Test the principles against three recent technology decisions"
                - "Draw the three-year target state for core platforms"
                - "Set up the design authority and its exceptions log"
            - name: Platform and integration strategy
              description: |-
                ## Purpose
                Mature digital organisations expose their core capabilities through shared platforms and well-managed interfaces, so new services can be built in weeks rather than months. Deciding which capabilities become shared platforms, how interfaces are governed and who funds them is advanced work that pays back across every later initiative.

                ## Milestones
                1. The capabilities used by three or more services identified as platform candidates.
                2. An integration standard agreed for how systems connect, including security and versioning.
                3. A platform team and funding model chosen for the first two shared platforms.
                4. A measure of reuse, such as the number of services built on each platform, tracked over a year.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two shared platforms chosen with an owning team and funding, an integration standard published and reuse tracked for twelve months."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the capabilities that three or more services need"
                - "Ask the architects to draft an integration standard"
                - "Choose the first two shared platforms and their owning teams"
                - "Agree how platform teams are funded with the finance partner"
            - name: Digital business model and new revenue options
              description: |-
                ## Purpose
                Once internal foundations are in place, the bigger prize can be new digital products, services or channels that reach customers differently. Exploring options such as subscription services, digital self-service offers or data-based services, and testing one cheaply, moves the transformation from efficiency toward growth.

                ## Milestones
                1. Five to eight digital business model options described with target customers and revenue logic.
                2. Options screened against fit with strategy, capability and regulatory limits.
                3. One option tested with real customers through a small, time-boxed experiment.
                4. A go, change or stop decision on the tested option.

                ## Notes
                Keep the experiment small and time-boxed; the aim is learning what customers will pay for, not launching at scale.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least five digital business model options screened and one tested with real customers, with a go, change or stop decision recorded."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "List five digital offers your customers have asked for or competitors provide"
                - "Screen each against strategy, capability and regulatory limits"
                - "Design a time-boxed customer test for the strongest option"
                - "Record the go, change or stop decision after the test"
            - name: Exiting the programme into business as usual
              description: |-
                ## Purpose
                Transformations that never end become permanent overhead, and ones that end abruptly leave new systems with no owners. Planning how the programme hands its products, teams, budgets and governance to the normal business, and when the transformation office closes, is the mark of a leader who has delivered change rather than run a programme.

                ## Milestones
                1. Criteria agreed for closing the programme, such as maturity targets met and benefits owned by the business.
                2. Each product, platform and team given a permanent business or technology owner.
                3. Steering governance replaced by the normal executive and portfolio reviews.
                4. A closure report with final benefits, lessons and open risks handed to the executive team.

                ## Notes
                Hand over the benefits tracking last; it is the part most often dropped once the programme team leaves.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A closure report accepted by the executive team, with a permanent owner named for every product, team and benefit."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft the programme closure criteria with the sponsor"
                - "Name a permanent owner for every product, platform and team"
                - "Move benefits tracking into the normal monthly performance review"
                - "Write the closure report with final benefits and open risks"
---

# Digital Transformation Leadership

This area is for the executive sponsor, transformation director or senior manager who has been asked to move an organisation onto digital ways of working, and who knows that new software alone changes very little. It starts with the foundations (a maturity baseline, the case for change, the technology inventory and a first roadmap), then the governance and benefits machinery, the skills a leader needs, the big build, buy and cloud decisions, the dated go-lives and reviews, the situations that bend the usual playbook, and finally the architecture and operating model work of someone who has led this before.

What repeats is a monthly steering meeting and benefits update, a fortnightly showcase of working software, monthly checks on adoption, risks, data quality, cloud spend and the staff update, and quarterly roadmap re-plans, vendor reviews and legacy retirement checks. The Risk register, Metrics log, Vendor, Purchase decision and Skills matrix templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
