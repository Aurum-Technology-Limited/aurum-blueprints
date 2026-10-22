---
id: sales-revenue.key-account-management
name: Key Account Management
description: "Plans for your largest customers: account selection, profiles, relationship maps, health scores, business reviews, executive sponsors and early renewal work that protect revenue and find the next deal."
category: business
version: 1.0.0
tags: [sales-revenue, key-account-management, team, enterprise, manager, account-planning, strategic-accounts, customer-retention]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
    - meeting-notes
    - skills-matrix
    - feedback-themes
    - remediation-plan
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Key Account Management
          description: "Running structured plans for the handful of largest customers, mapping stakeholders, protecting revenue and finding the next deal inside each account."
          projects:
            - name: Key account selection criteria and shortlist
              description: |-
                ## Purpose
                Calling every big logo a key account spreads senior attention so thin that none of them gets a real plan. Scoring customers on current revenue, growth potential, strategic fit, relationship strength and cost to serve picks the five to fifteen that justify a dedicated plan and an executive sponsor. The scoring also gives you a defensible answer when a sales leader asks why their favourite customer is not on the list.

                ## Milestones
                1. Five or six selection criteria written down, each with a definition and a weight.
                2. Every customer above an agreed revenue floor scored against the criteria.
                3. A shortlist of key accounts agreed with the sales leader.
                4. The reason for leaving out any large customer recorded in one line.

                ## Notes
                Most teams pick too many. If one account manager would hold more than three or four key accounts, the list is probably a top customers report, not a key account programme.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every customer above the revenue floor is scored against written criteria, and an agreed key account shortlist exists with the reason for each exclusion recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export last year's revenue by customer from the finance system"
                - "Write five selection criteria with a weight for each"
                - "Score every customer above the revenue floor"
                - "Agree the final shortlist with the sales leader"
                - "Re-score customers against the key account selection criteria @recurring(yearly)"
            - name: Coverage model for each key account tier
              description: |-
                ## Purpose
                Once the list exists, someone has to decide how much time each account gets and who from your side is involved. A coverage model sets tiers, the account manager load per tier, the meeting rhythm and which accounts get an executive sponsor, so effort follows value instead of whoever shouts loudest.

                ## Milestones
                1. Two or three tiers defined, each with a clear entry rule.
                2. Account manager load per tier agreed, such as two tier one accounts or five tier two accounts.
                3. Meeting rhythm and executive sponsor rule set for each tier.
                4. Every key account assigned a tier and a named account manager.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written coverage model sets tier rules, account manager loads and meeting rhythms, and every key account has a tier and an owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the tier definitions on one page"
                - "Count the hours each account manager has for key account work in a typical month"
                - "Set the review rhythm and sponsor rule for each tier"
                - "Record every key account's tier and owner in the CRM"
            - name: One-page profile for every key account
              description: |-
                ## Purpose
                When a new executive, a solutions engineer or a stand-in account manager joins a call, they need the account on a single page, not a tour of the CRM. A profile covering the customer's business, its strategy this year, who you work with, what they buy and when contracts end saves hours of briefing and stops awkward questions in front of the customer.

                ## Milestones
                1. A profile layout agreed with sections for business, strategy, footprint, people and contract dates.
                2. A completed profile for each key account.
                3. Profiles stored in one shared place the whole account team can reach.
                4. Each profile dated so readers can see how fresh it is.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page profile exists for every key account in a shared location the whole account team can open."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the six sections the profile will hold"
                - "Ask the agent to draft a profile from the account's CRM notes and public reports"
                - "Correct the draft with what only the account manager knows"
                - "Share the profile folder with the account team"
            - name: Revenue and contract baseline per key account
              description: |-
                ## Purpose
                Few account managers can say, without digging, what each key account has spent over three years, through which contracts and in which business units. Pulling that baseline once shows whether the account is really growing, which contracts carry renewal risk and where revenue rests on a single product or buyer.

                ## Milestones
                1. Three years of revenue by product and business unit for each key account.
                2. Every live contract listed with value, start date, end date and notice period.
                3. Auto-renewal, price review and termination clauses noted for each contract.
                4. Growth or decline over the period stated as a figure for each account.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline sheet per key account shows three years of revenue by product and unit, plus every live contract with its end date and notice period."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask finance for three years of invoiced revenue by key account"
                - "Collect every signed contract and order form into one folder per account"
                - "List end dates, notice periods and price review clauses in one table"
                - "Calculate year on year growth for each account"
            - name: Whole-account relationship coverage map
              description: |-
                ## Purpose
                Most key accounts are known through two or three people, and the rest of the organisation is guesswork. Mapping every business unit, the leaders who run them and who on your side knows each one shows where the account depends on a single relationship and where a whole division has never heard of you. Unlike a map drawn for one deal, this one covers the whole customer and changes slowly.

                ## Milestones
                1. An organisation chart of the customer covering every unit you sell to or could sell to.
                2. Each senior person marked with relationship strength and the colleague who owns the relationship.
                3. Units with no relationship at all highlighted.
                4. Three relationship gaps chosen to close this year.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A relationship map for each key account shows every relevant unit leader with an owner and strength rating, and names three gaps to close."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the customer's organisation chart from public sources and your contacts"
                - "Mark each senior contact as strong, neutral, weak or unknown"
                - "Name an owner on your side for each important relationship"
                - "Choose the three relationship gaps that matter most this year"
            - name: Annual strategic plan for each key account
              description: |-
                ## Purpose
                A strategic account plan turns a large customer from a stream of orders into a set of agreed goals: revenue to protect, value to deliver, relationships to build and opportunities to pursue. Written once a year and kept short, it is the document that executives, the account team and finance all work from.

                ## Milestones
                1. A plan for each key account with a situation summary, three to five objectives and a revenue goal.
                2. Actions under each objective with an owner and a target quarter.
                3. Resources needed from other teams listed and agreed with their managers.
                4. The plan reviewed and signed off by the sales leader.

                ## Notes
                Keep it to four or five pages. A forty-page plan is written once and never opened again.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each key account has a signed-off annual plan with objectives, a revenue goal and owned actions dated by quarter."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Block two hours to write the first account plan"
                - "Draft the situation summary from the profile and revenue baseline"
                - "Agree resources with the delivery, product and support managers"
                - "Present the plan to the sales leader for sign-off"
                - "Rewrite each account plan before the customer's financial year begins @recurring(yearly)"
            - name: Account team roles and responsibilities
              description: |-
                ## Purpose
                Large customers are served by a virtual team: the account manager, a sponsor, solutions engineers, delivery, support and finance. Without written roles, the customer gets mixed messages and two people chase the same invoice while nobody chases the renewal. A simple chart of who owns what, agreed by each person's manager, fixes that in an afternoon.

                ## Milestones
                1. Every person who touches the account listed with their role.
                2. A responsibility chart covering renewal, escalation, billing, technical changes and reviews.
                3. Each person's manager has agreed the time commitment.
                4. A contact sheet given to the customer showing who to call for what.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A responsibility chart for each tier one account names who owns renewal, escalation, billing, technical change and reviews, agreed by each person's manager."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List everyone in your company who spoke to the customer this year"
                - "Fill in a responsibility chart for the six recurring account activities"
                - "Send the chart to each person's manager for agreement"
                - "Give the customer a contact sheet showing who to call for what"
            - name: Research into the customer's strategy and priorities
              description: |-
                ## Purpose
                Customers spend money on what their board cares about this year, not on what your product does. Reading their annual report, results calls, investor presentations and leadership interviews tells you the priorities, pressures and language that should run through your account plan and every executive meeting.

                ## Milestones
                1. The latest annual report and results materials read for each key account.
                2. Three to five stated strategic priorities written down in the customer's own words.
                3. Each priority linked to something you sell or could deliver.
                4. Questions you cannot answer from public sources listed for the next executive meeting.

                ## Notes
                For private or public sector customers without investor materials, use strategy documents, budget papers, trade press and job adverts, which often reveal priorities just as clearly.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page strategy summary per key account lists its top priorities in its own words, each linked to your offer, plus open questions."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Download the latest annual report for your largest key account"
                - "Write down its strategic priorities in the customer's own words"
                - "Link each priority to a capability or service you offer"
                - "Read each key account's results announcement and update its summary @recurring(quarterly)"
            - name: Key account health scorecard
              description: |-
                ## Purpose
                Revenue figures show trouble months after it has started. A health score built from leading signals such as product usage, support escalations, executive access, payment behaviour, survey results and contract status gives an early warning while there is still time to act. Consistency is the point: the same six to eight signals, scored the same way, for every key account.

                ## Milestones
                1. Six to eight health signals chosen, each with a red, amber and green rule.
                2. A data source named for every signal.
                3. A first score recorded for every key account.
                4. Scores compared with the account managers' own sense of each account and the rules adjusted.

                ## Notes
                Start from the **Metrics log** template. Avoid signals nobody can measure; a score that relies on guesswork drifts to green by default.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A health scorecard with six to eight defined signals and colour rules has been applied to every key account at least once."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the warning signs that came before your last two lost or shrunk accounts"
                - "Write a red, amber and green rule for each signal"
                - "Score every key account for the first time"
                - "Compare the scores with each account manager's view of the account"
            - name: Key account risk register
              description: |-
                ## Purpose
                Each large customer carries risks that are easy to name and easy to forget: a contract ending, a sponsor near retirement, a competitor running a pilot, a budget cut announced on a results call. A register with likelihood, impact, owner and next action keeps them in front of the account team and the sales leader before they become a lost renewal.

                ## Milestones
                1. A register listing at least five risks for each tier one account.
                2. Each risk scored for likelihood and impact.
                3. An owner and a next action on every high risk.
                4. Closed risks kept with a note on how they were handled.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register for each tier one account holds at least five scored risks, with an owner and next action on every high one."
                cadence: rolling
              tasks:
                - "Create a risk register for your top account"
                - "Write down five risks the account team already worries about"
                - "Score likelihood and impact for each risk"
                - "Review the key account risk register with the account team @recurring(monthly:17)"
            - name: Monthly account plan check-in
              description: |-
                ## Purpose
                Account plans fail quietly: actions are due in a quarter that passes without anyone looking. A thirty-minute monthly check on each plan, marking actions done, slipped or dropped, keeps the plan alive and gives the sales leader an honest picture without a separate report.

                ## Milestones
                1. A standing thirty-minute slot each month for each tier one account.
                2. Every plan action marked done, slipped or dropped at each check-in.
                3. Slipped actions given a new date or a reason.
                4. A two-line status note sent to the sponsor after each check-in.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each tier one plan shows a monthly check-in date with every action marked done, slipped or dropped for six months running."
                cadence: rolling
              tasks:
                - "Book the plan check-in slots for the next six months"
                - "Mark each account plan action done, slipped or dropped @recurring(monthly:8)"
                - "Give every slipped action a new date or a reason"
                - "Send the sponsor a two-line status note after the check-in"
            - name: Quarterly business reviews with key accounts
              description: |-
                ## Purpose
                A quarterly business review is the customer's chance to see what you delivered and yours to hear what is changing in their business. Run well, with results in their numbers and half the time spent on their agenda, it becomes the meeting where problems surface early and next year's priorities are agreed. Run badly, it is a slide show the customer stops attending.

                ## Milestones
                1. A standard agenda agreed: results, issues, their priorities and a look ahead.
                2. A review held with every tier one account this quarter.
                3. Notes and agreed actions sent to attendees within two working days.
                4. Attendance tracked, including the most senior customer person present.

                ## Notes
                Start from the **Meeting notes** template. Send the agenda a week ahead and ask what they want covered; customers attend meetings they helped shape.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every tier one account has had a business review in each of the last four quarters, with notes and actions sent within two working days."
                cadence: cyclic
              tasks:
                - "Draft the standard review agenda and test it with one friendly customer"
                - "Ask each customer a week ahead what they want to cover"
                - "Hold a business review with every tier one account @recurring(quarterly)"
                - "Send notes and agreed actions within two working days"
            - name: Executive sponsor programme for key accounts
              description: |-
                ## Purpose
                Pairing each tier one account with a senior leader from your side gives the customer's executives a peer to talk to and gives you a way in above your usual contact. Sponsors only help if they are briefed, contact their opposite number on a rhythm and know what to ask, so the programme needs light structure rather than goodwill.

                ## Milestones
                1. A named sponsor for each tier one account, matched by seniority and fit.
                2. A one-page sponsor brief per account with goals, history and the ask.
                3. Each sponsor in contact with their counterpart at least once a quarter.
                4. Sponsor conversations logged against the account in the CRM.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each tier one account has a briefed executive sponsor who has logged at least one counterpart contact per quarter for a year."
                cadence: rolling
              tasks:
                - "Match a senior leader to each tier one account"
                - "Write a one-page brief for each sponsor"
                - "Send each sponsor an account update and a suggested next contact @recurring(monthly:22)"
                - "Log every sponsor conversation against the account"
            - name: Monthly account health review
              description: |-
                ## Purpose
                Scoring health once gives a snapshot. Rescoring every key account on the same day each month, and looking at what moved, turns the scorecard into an early warning system, as long as any account that turns amber gets a named action within a week.

                ## Milestones
                1. Health scores refreshed for every key account each month.
                2. Accounts that changed colour listed with the reason.
                3. Every amber or red account given a named action and owner.
                4. Six months of scores kept so trends are visible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every key account has six consecutive monthly health scores, and every amber or red score has a recorded action and owner."
                cadence: rolling
              tasks:
                - "Pull this month's usage, support and payment data for each account"
                - "Rescore every key account against the health scorecard @recurring(monthly:14)"
                - "Assign an action and owner to every amber or red account"
            - name: Weekly account team stand-up
              description: |-
                ## Purpose
                Large accounts generate a steady flow of small issues across delivery, support, billing and sales, and the account manager often hears about them last. A fifteen-minute weekly stand-up with the people serving the account catches problems while they are still small and keeps everyone telling the customer the same story.

                ## Milestones
                1. A fifteen-minute weekly slot with a fixed set of attendees.
                2. A three-question format in use: what happened, what is coming, what is stuck.
                3. Stuck items given an owner before the call ends.
                4. The meeting skipped rather than padded when there is nothing to discuss.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly fifteen-minute account team stand-up has run for eight weeks, with every stuck item given an owner."
                cadence: rolling
              tasks:
                - "Invite the core account team to a recurring fifteen-minute slot"
                - "Post the three stand-up questions in the team channel"
                - "Run the key account team stand-up @recurring(weekly:tue)"
                - "Record an owner for anything stuck before the call ends"
            - name: Key account renewal calendar
              description: |-
                ## Purpose
                Renewals of large contracts are often decided six to twelve months before the end date, in a budget round the account manager never sees. A calendar of every key account contract, with notice periods and early warning dates, means renewal work starts while it can still shape the outcome.

                ## Milestones
                1. Every key account contract listed with end date and notice period.
                2. Warning dates set at twelve, nine, six and three months before each end date.
                3. A renewal owner named for each contract.
                4. No key account contract reaching its notice deadline without a written plan.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A renewal calendar lists every key account contract with warning dates and an owner, and no contract has reached its notice date without a written renewal plan."
                cadence: rolling
              tasks:
                - "Add every key account contract end date to the renewal calendar"
                - "Set warning reminders at twelve, nine, six and three months"
                - "Check which contracts enter their next renewal window @recurring(monthly:3)"
                - "Name a renewal owner for each contract"
            - name: Stakeholder contact rhythm across the account
              description: |-
                ## Purpose
                Relationships that only get attention around renewals feel transactional, and contacts notice. Setting a contact rhythm for each important person in the account, monthly for the main sponsor and quarterly for wider leaders, then checking it monthly, keeps the relationship map current and the account warm between deals.

                ## Milestones
                1. A contact frequency set for every person on the relationship map.
                2. A monthly check of who is overdue for contact.
                3. Each contact given a useful reason, such as a result, an introduction or a relevant article.
                4. Relationship strengths on the map updated every quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every mapped stakeholder has a contact frequency, and the overdue list is reviewed monthly with fewer than one in five contacts overdue."
                cadence: rolling
              tasks:
                - "Set a contact frequency for each person on the relationship map"
                - "List overdue stakeholders and plan a useful reason to reach out @recurring(monthly:20)"
                - "Update relationship strengths on the map at the end of each quarter"
            - name: Key account escalation path
              description: |-
                ## Purpose
                When a key account has an outage, a billing error or a failed delivery, the customer judges you on the first forty-eight hours. A written escalation path, setting who is called, how fast, who updates the customer and when executives step in, turns a scramble into a response the customer can trust.

                ## Milestones
                1. Escalation levels defined with triggers and response times.
                2. A named owner and backup for each level.
                3. A customer update template ready for active escalations.
                4. A short review held after every serious escalation.

                ## Notes
                Agree the path with support and delivery leaders first. An escalation process written by sales alone is ignored in the first real incident.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written escalation path with levels, triggers, owners and response times is agreed with support and delivery, and every serious escalation has a recorded review."
                cadence: rolling
              tasks:
                - "Write the triggers for each escalation level"
                - "Agree response times and owners with the support leader"
                - "Draft a customer update template for live escalations"
                - "Review open key account escalations and how long each has been open @recurring(weekly:thu)"
            - name: Value delivered log for each key account
              description: |-
                ## Purpose
                At renewal, customers forget what went well and remember the last problem. Logging outcomes as they happen, such as hours saved, costs avoided, projects delivered and quotes from their staff, gives every business review and renewal conversation evidence in the customer's own numbers.

                ## Milestones
                1. A log per key account with date, outcome, measure and source.
                2. At least one entry added per account each month.
                3. Customer-confirmed figures marked separately from estimates.
                4. The log used to build the results section of each business review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each key account has a value log with at least one dated, sourced entry per month for six months."
                cadence: rolling
              tasks:
                - "Create a value log with columns for date, outcome, measure and source"
                - "Ask the delivery team for results from the last quarter"
                - "Add this month's outcomes to each account's value log @recurring(monthly:25)"
                - "Ask the customer to confirm figures before quoting them"
            - name: Monthly key account portfolio review for managers
              description: |-
                ## Purpose
                Sales managers with several account managers need to see the whole portfolio in one sitting: health, renewal timing, plan progress and where help is needed. Using the same view every month shows which accounts need executive time and which account managers are overloaded.

                ## Milestones
                1. A one-page portfolio view with health, revenue trend, next renewal and plan status for each account.
                2. A monthly review held with each account manager.
                3. Up to three accounts flagged each month for executive help.
                4. Account manager workload checked against the coverage model.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly portfolio review has run for six months, each one producing a recorded list of accounts needing executive help."
                cadence: rolling
              tasks:
                - "Build the portfolio view from existing health and renewal data"
                - "Hold the key account portfolio review with each account manager @recurring(monthly:11)"
                - "Flag up to three accounts for executive help"
                - "Compare account manager load with the coverage model"
            - name: Account news and trigger alerts
              description: |-
                ## Purpose
                Leadership changes, acquisitions, profit warnings and new regulations at a key account all change what it will buy and who decides. Setting alerts for each account and scanning them weekly means you hear about a new chief financial officer from the news, not from a customer telling you the budget has moved.

                ## Milestones
                1. News alerts set for each key account and its senior leaders.
                2. Job change alerts set for main contacts.
                3. A weekly ten-minute scan, with anything material shared with the account team.
                4. Trigger events logged against the account with any action taken.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "News and job change alerts exist for every key account, and material events from the last quarter are logged with the action taken."
                cadence: rolling
              tasks:
                - "Set news alerts for each key account and its chief executive"
                - "Turn on job change alerts for your main contacts"
                - "Scan account alerts and share anything material with the team @recurring(weekly:mon)"
            - name: Reading a key account's annual report and accounts
              description: |-
                ## Purpose
                Account managers who can read a customer's income statement, balance sheet and cash flow ask better questions and spot budget pressure before procurement announces it. Learning to read revenue growth, margins, debt and cash, and what the notes say about risk, takes a few evenings and pays back in every executive meeting.

                ## Milestones
                1. The three main financial statements understood well enough to explain to a colleague.
                2. Revenue growth, operating margin and cash position worked out for your top account.
                3. Two risks from the annual report noted and linked to your account plan.
                4. One question based on the figures asked in a customer meeting.

                ## Notes
                Public sector and privately owned customers publish budgets or company filings instead; the same reading skills apply.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Revenue growth, margin and cash position of your top key account are written in its profile, with two financial risks linked to the plan."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick a short introductory guide to reading company accounts"
                - "Work out revenue growth and operating margin for your top account"
                - "Read the risk section of the latest annual report"
                - "Ask the agent to explain any accounting term you cannot follow"
            - name: Value driver map for each tier one account
              description: |-
                ## Purpose
                Customers buy to move a handful of numbers: revenue per customer, cost per unit, time to market, compliance exposure. Mapping how your offer moves each of the customer's value drivers, with a rough figure, shifts account conversations from features to their economics and gives sponsors something worth discussing.

                ## Milestones
                1. Three to five value drivers named for each tier one account.
                2. Each driver linked to something you deliver, with a rough size.
                3. The map tested with a friendly contact at the customer.
                4. The map used in at least one business review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A tested value driver map exists for each tier one account, linking three to five of its numbers to what you deliver."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the numbers the customer's leadership talk about most"
                - "Link each number to something your team delivers"
                - "Estimate a rough size for each link with the delivery team"
                - "Test the value driver map with a friendly contact at the customer"
            - name: Executive conversations without a pitch
              description: |-
                ## Purpose
                Senior customer leaders may give a key account manager twenty minutes a year and judge them in the first five. Practising how to open with their priorities, ask about their year ahead, offer a view from other customers and close with one clear next step builds the confidence to earn a second meeting rather than a polite handoff to procurement.

                ## Milestones
                1. A short opening built around the executive's stated priorities.
                2. Five questions prepared about their next twelve months.
                3. Two rehearsals done with a colleague playing the executive.
                4. One real executive meeting held and reviewed against the plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two rehearsed practice meetings and one real executive meeting are complete, with a written review of what to change next time."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a ninety-second opening built on the executive's published priorities"
                - "Prepare five questions about their next twelve months"
                - "Rehearse the meeting twice with a senior colleague"
                - "Write down what worked straight after the real meeting"
            - name: Facilitating a joint planning workshop
              description: |-
                ## Purpose
                Half a day spent in a workshop where the customer's team and yours agree goals for the year builds more commitment than any plan you write alone. Facilitation is a learnable skill: setting the question, managing senior voices, keeping to time and turning discussion into owned actions.

                ## Milestones
                1. A workshop format with a clear question, agenda and timings.
                2. One practice run held internally.
                3. A workshop delivered with at least one tier one account.
                4. Actions from the workshop owned and added to the account plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A joint planning workshop has been delivered with one key account, producing owned actions that now sit in its account plan."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the single question the workshop must answer"
                - "Draft a three-hour agenda with timings"
                - "Run a practice version with your own account team"
                - "Add workshop actions to the account plan with owners"
            - name: How procurement sees you as a supplier
              description: |-
                ## Purpose
                Procurement teams at large customers sort suppliers by how much they spend and how hard each would be to replace, and they treat each group differently. Learning how category managers think, and where you probably sit in their grid, explains why some accounts push hard on price while others invite you into planning. It also shows what would have to change for you to move up.

                ## Milestones
                1. The common supplier segmentation models understood.
                2. Your likely position in each tier one account's supplier grid estimated.
                3. The category manager for your spend identified at each tier one account.
                4. One action chosen to make you harder to replace.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each tier one account has a note recording your likely supplier segment, the category manager's name and one action to improve your position."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read an introduction to how procurement teams segment suppliers"
                - "Estimate where you sit for each tier one account"
                - "Find out who the category manager is for your spend"
                - "Choose one step that would make you harder to replace"
            - name: Cost to serve and key account profitability
              description: |-
                ## Purpose
                Big customers are not always profitable customers: discounts, custom work, dedicated staff and slow payment can eat the margin. Working out the real cost to serve each key account, with finance, shows which accounts fund the business and which need their terms or service model changed at renewal.

                ## Milestones
                1. Cost categories agreed with finance, including support, custom work, travel and payment terms.
                2. Gross margin and cost to serve estimated for each key account.
                3. Accounts ranked by profit, not revenue.
                4. One account with poor economics given a plan for its next renewal.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A profitability table, agreed with finance, ranks every key account by estimated margin after cost to serve."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask finance which costs can be traced to individual customers"
                - "Estimate support and custom work hours for each key account"
                - "Rank key accounts by margin after cost to serve"
                - "Write a renewal note for the least profitable account"
            - name: Key account manager skills self-assessment
              description: |-
                ## Purpose
                Key account work asks for skills ordinary selling does not: business acumen, internal influence, executive presence, financial analysis and long-range planning. Rating yourself, and asking your manager to rate you, on a short skills grid shows the one or two to develop this year instead of a vague wish to be more strategic.

                ## Milestones
                1. A grid of eight to ten key account skills with level descriptions.
                2. Self-rating and manager rating completed.
                3. The two biggest gaps chosen for development.
                4. A dated learning action set for each gap.

                ## Notes
                Start from the **Skills matrix** template. Managers can run it for the whole team to see which skills to train together.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed skills grid with self and manager ratings exists, with two dated development actions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the eight to ten skills your key account role needs"
                - "Rate yourself on each skill with one example"
                - "Ask your manager to rate you separately"
                - "Pick the two widest gaps and book a learning action for each"
            - name: Value realisation report for a key account
              description: |-
                ## Purpose
                Proving, in the customer's numbers, what they gained from working with you over the last year is the job of a value realisation report. Sponsors forward it to their own leadership, which makes it one of the few documents you write that sells for you inside the account when you are not in the room.

                ## Milestones
                1. Agreed measures and a baseline taken from the value log.
                2. Results confirmed with the customer's owner of each measure.
                3. A four-page report with a one-paragraph summary for executives.
                4. The report presented to the sponsor and sent onward.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A value realisation report with customer-confirmed figures has been presented to the sponsor of one key account."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the three measures the sponsor cares about most"
                - "Pull the figures for those measures from the value log"
                - "Confirm each figure with the customer's owner of that measure"
                - "Ask the agent to draft the executive summary from the confirmed figures"
                - "Present the report to the sponsor"
            - name: Whitespace map of each key account
              description: |-
                ## Purpose
                Next year's growth in a key account usually sits in units you do not serve yet or in products they buy elsewhere. A whitespace grid of business units against your products, marked bought, in discussion, competitor or open, shows where the next deal is likely to come from and feeds the account plan without turning every meeting into a pitch.

                ## Milestones
                1. A grid of customer units against your product lines for each tier one account.
                2. Each cell marked bought, in discussion, competitor or open.
                3. The three most promising open cells sized roughly.
                4. Those three opportunities added to the account plan with an owner.

                ## Notes
                Hand the chosen opportunities to whoever runs expansion deals. This map is for planning, not for chasing every empty cell.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A whitespace grid for each tier one account has every cell marked and names three sized opportunities in the account plan."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the customer's business units down the side of a grid"
                - "List your product lines across the top"
                - "Mark each cell bought, in discussion, competitor or open"
                - "Size the three most promising open cells with the account team"
            - name: Joint success plan agreed with the customer
              description: |-
                ## Purpose
                Account plans written internally say what you want from the customer. A joint success plan, written with them, says what they want to achieve this year with your help, how both sides will measure it and who owns each step. Customers who have co-signed goals tend to renew more readily, because cancelling means abandoning their own plan.

                ## Milestones
                1. Three customer goals for the year agreed with their sponsor.
                2. A measure and an owner on each side for every goal.
                3. The plan acknowledged in writing by the customer.
                4. Progress reported against the plan at each business review.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A joint success plan with three goals, measures and owners on both sides has been acknowledged in writing by a key account sponsor."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the customer sponsor for their three goals for the year"
                - "Draft a measure and owners for each goal"
                - "Send the draft to the sponsor for changes"
                - "Add plan progress as a standing item in business reviews"
            - name: Moving to strategic supplier status
              description: |-
                ## Purpose
                Many large customers run a supplier programme with a small preferred tier that gets early sight of plans, multi-year agreements and executive access. Finding out how that tier is chosen, and closing the gaps against its criteria, can change the account from an annual price fight into a planning partnership.

                ## Milestones
                1. The customer's supplier tiers and their criteria written down.
                2. Your current tier and the gaps to the next one listed.
                3. Actions to close each gap owned and dated.
                4. A formal review of your supplier status requested.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The criteria for the customer's top supplier tier, your gaps and owned actions are written down, and a status review has been requested."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your procurement contact how suppliers are tiered"
                - "List your gaps against the top tier's criteria"
                - "Assign an owner and date to each gap"
                - "Request a formal supplier status review"
            - name: Ending single-threaded key accounts
              description: |-
                ## Purpose
                An account held together by one relationship is a single resignation away from becoming an open competition. Building at least three senior relationships in different functions, through introductions, workshops and sponsor contact, means the account survives people moving on.

                ## Milestones
                1. Accounts with fewer than three senior relationships identified.
                2. Introductions requested from the main contact to two new people per account.
                3. Three senior relationships in at least two functions in place for each tier one account.
                4. The relationship map updated to show the new links.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every tier one account has at least three senior relationships across two or more functions, shown on its relationship map."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List key accounts where you know fewer than three senior people"
                - "Ask your main contact who else should hear about this year's results"
                - "Invite two new senior contacts to the next business review"
                - "Update the relationship map after each new meeting"
            - name: Deciding whether an account stays a key account
              description: |-
                ## Purpose
                Accounts drift: a customer cuts its budget, gets acquired or simply stops growing. Reviewing each key account against the selection criteria, and moving one to standard coverage with a proper handover when it no longer qualifies, frees time for the account that should replace it.

                ## Milestones
                1. Every key account checked against the current selection criteria.
                2. Accounts below the threshold discussed with the sales leader.
                3. A decision recorded for each: keep, watch or move to standard coverage.
                4. Accounts moving out handed over with a note to the customer and the new owner.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every key account has a recorded keep, watch or move decision against current criteria, with handover notes for any that moved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check each key account against this year's revenue and growth thresholds"
                - "Discuss accounts below the threshold with the sales leader"
                - "Record keep, watch or move for each account"
                - "Write a handover note for any account leaving the programme"
            - name: Planning a price increase for a key account
              description: |-
                ## Purpose
                Raising prices on your largest customer feels risky and is often put off for years, which quietly erodes margin. Planning the increase with evidence of value delivered, the contract's review clause, timing against their budget cycle and an executive briefing before procurement hears turns it into a conversation rather than a shock.

                ## Milestones
                1. The contract's price review clause and notice requirements confirmed.
                2. The proposed increase and its reasoning written on one page.
                3. The customer sponsor briefed before any formal notice.
                4. Formal notice sent in time for the customer's budget round.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page price increase case is approved internally, the sponsor is briefed and formal notice is sent within the contract's notice period."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check the price review clause and notice period in the contract"
                - "Write a one-page case using figures from the value log"
                - "Brief the customer sponsor before procurement is notified"
                - "Send formal notice ahead of the customer's budget setting"
            - name: Annual relationship survey across key accounts
              description: |-
                ## Purpose
                The main contact's satisfaction tells you little about how the rest of the account sees you. A short survey sent to users, managers and executives at each key account, followed by a call to anyone who scores low, reveals hidden detractors before they influence a renewal.

                ## Milestones
                1. A survey of no more than eight questions agreed.
                2. Respondents chosen at three levels in each key account.
                3. Results analysed by account and by level.
                4. A follow-up call held with every low scorer and themes shared with the account team.

                ## Notes
                Start from the **Feedback themes** template to group the comments.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A relationship survey reaches three levels at every key account each year, with a follow-up call logged for every low score."
                cadence: cyclic
              tasks:
                - "Draft no more than eight survey questions"
                - "Choose respondents at user, manager and executive level"
                - "Call every respondent who scored the relationship low"
                - "Send the key account relationship survey @recurring(yearly)"
            - name: Annual key account planning day
              description: |-
                ## Purpose
                Once a year, the account team for each top customer should step away from the inbox for a day, review the year and set the next one. A planning day with the sponsor, delivery and finance in the room produces a better plan in six hours than weeks of email, and everyone leaves owning part of it.

                ## Milestones
                1. A date set about two months before the customer's financial year starts.
                2. Pre-reads sent: profile, baseline, health trend, value log and risk register.
                3. The day held with sponsor, account manager, delivery and finance present.
                4. A draft plan for next year circulated within a week.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A planning day was held with the full account team, and a draft plan for the next year was circulated within a week of it."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick a date two months before the customer's financial year starts"
                - "Send the pre-read pack a week before the day"
                - "Run the planning day against a written agenda"
                - "Book next year's key account planning day @recurring(yearly)"
            - name: Customer executive visit to your offices
              description: |-
                ## Purpose
                Bringing a key account's leaders to your offices for a day of briefings, demonstrations and meetings with your executives deepens the relationship in a way no video call can. The visit needs the logistics of an event and the rigour of a sales meeting: clear objectives, the right people from both sides and a follow-up plan.

                ## Milestones
                1. Objectives for the visit agreed with the customer sponsor.
                2. An agenda with named presenters from your side approved.
                3. A briefing pack prepared for every presenter.
                4. Follow-up actions sent to the customer within three working days.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An executive visit was held against agreed objectives, with follow-up actions sent to the customer within three working days."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree two or three visit objectives with the customer sponsor"
                - "Book your senior leaders and a suitable room"
                - "Brief each presenter on the customer and their part in the day"
                - "Send the follow-up actions within three working days"
            - name: Preparing a multi-year renewal of a top account
              description: |-
                ## Purpose
                Renewing your largest customer for several years can decide the year's revenue, and it is usually won or lost before formal negotiation starts. Beginning nine to twelve months out, with a value case, stakeholder support, a view of competitor activity and an internal approval path, puts you ahead of the customer's procurement timetable rather than behind it.

                ## Milestones
                1. A renewal plan written nine to twelve months before the end date.
                2. A value case built from the value log and confirmed figures.
                3. Support for renewal confirmed with the sponsor and two other senior contacts.
                4. Internal pricing and terms approved before the customer's request arrives.
                5. The renewal signed before the notice deadline.
              priority: high
              deadlineOffsetDays: 270
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The renewal of your largest contract is signed before its notice deadline, with a written plan dated at least nine months earlier."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Note the end date and notice deadline of your largest contract"
                - "Write the renewal plan with milestones counting back from the end date"
                - "Build the value case from confirmed results"
                - "Get pricing and terms approved internally before procurement engages"
                - "Ask two senior contacts besides the sponsor whether they back renewal"
            - name: Top-to-top meeting between chief executives
              description: |-
                ## Purpose
                Held once a year, a meeting between your chief executive and the customer's signals that the relationship matters at the top and can settle issues that stall lower down. It only works if your chief executive arrives with a sharp brief, a clear ask and one personal point of connection.

                ## Milestones
                1. The meeting requested through the customer sponsor with a stated purpose.
                2. A two-page brief for your chief executive covering history, value, issues and the ask.
                3. A preparation call held with your chief executive.
                4. Agreed outcomes written up and sent within two days.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A chief executive meeting was held with one tier one account, with a two-page brief beforehand and outcomes sent within two days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the customer sponsor whether a top-to-top meeting would help this year"
                - "Write the two-page brief for your chief executive"
                - "Hold a thirty-minute preparation call"
                - "Send agreed outcomes within two days of the meeting"
            - name: Key account customer advisory board
              description: |-
                ## Purpose
                Inviting senior people from your key accounts to a twice-yearly advisory board gives them influence over your roadmap and gives you a reason for executive contact that is not a sales call. Members often become your strongest references, and they meet peers they want to know.

                ## Milestones
                1. A purpose and membership rules agreed with product leadership.
                2. Eight to twelve members invited from key accounts.
                3. The first session held with an agenda built around their questions.
                4. Actions from the session published to members with owners.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first advisory board session has been held with at least eight key account members, with actions published to them afterwards."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write a one-page purpose and membership rules for the board"
                - "Agree roadmap topics with product leadership"
                - "Invite eight to twelve senior people from key accounts"
                - "Publish session actions to members with owners"
            - name: Taking over a key account from a colleague
              description: |-
                ## Purpose
                Inheriting a key account is the moment it is most likely to drift: contacts test the new person, open promises are forgotten and the outgoing manager's knowledge leaves with them. A structured handover in the first thirty days, with a joint visit, a promise list and introductions to every senior contact, keeps continuity.

                ## Milestones
                1. A handover session with the previous account manager held and notes written.
                2. Every open commitment to the customer listed with an owner.
                3. A joint introduction made to each senior contact.
                4. A thirty-day note sent to the sponsor confirming priorities.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Within thirty days of taking over, every open commitment is listed with an owner and every senior contact has had a joint introduction."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book a two-hour handover session with the previous owner"
                - "List every open promise made to the customer"
                - "Arrange joint introductions to each senior contact"
                - "Send the sponsor a note confirming priorities after thirty days"
            - name: When the customer champion leaves
              description: |-
                ## Purpose
                Losing your main sponsor at a key account is one of the commonest reasons large customers quietly churn. Acting in the first two weeks, by meeting their successor, restating value, learning the new person's priorities and keeping in touch with the champion in their new role, turns a risk into two relationships.

                ## Milestones
                1. The successor identified and a meeting held within two weeks.
                2. A short briefing on history, value and open work given to the successor.
                3. The successor's priorities written into the account plan.
                4. Contact kept with the departing champion at their new organisation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A meeting with the new sponsor took place within two weeks of the champion leaving, and their priorities are recorded in the account plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the departing champion who will own the relationship"
                - "Request a meeting with the successor within two weeks"
                - "Prepare a one-page history and value briefing for the successor"
                - "Connect with the champion at their new employer"
            - name: Key account acquired, merged or reorganised
              description: |-
                ## Purpose
                After a key account is bought, merges or restructures, budgets freeze, decision makers change and the acquirer's preferred suppliers move in. Mapping the new structure, your contract assignment clauses and the acquirer's existing suppliers early gives you a case for keeping the business.

                ## Milestones
                1. Change of control and assignment clauses in your contracts checked.
                2. The new organisation structure and decision makers mapped.
                3. The acquirer's current suppliers in your category identified.
                4. A retention plan agreed with the sales leader and sponsor.

                ## Notes
                Contract questions go to your legal team; this project gathers the facts they need.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A retention plan for the changed account exists, built on checked contract clauses, a new structure map and the acquirer's supplier list."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask legal to check change of control and assignment clauses"
                - "Map the new structure as soon as it is announced"
                - "Find out which suppliers the acquirer already uses in your category"
                - "Agree a retention plan with the sales leader"
            - name: Recovery plan for an at-risk key account
              description: |-
                ## Purpose
                An account that has turned red on health, threatened to leave or started a tender needs more than extra meetings. A recovery plan names the root causes, the fixes, executive involvement and dated commitments to the customer, then tracks progress weekly until the account is back to amber.

                ## Milestones
                1. Root causes listed after talking to at least three people at the customer.
                2. A recovery plan with fixes, owners and dates shared with the customer sponsor.
                3. Your executive sponsor involved directly.
                4. Weekly progress reviews held until the health score returns to amber or better.

                ## Notes
                Start from the **Remediation plan** template. Admit the problem early; customers forgive failures more readily than spin.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A recovery plan with owned, dated fixes has been shared with the customer, and the account's health score has returned to amber or better."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Talk to three people at the customer about what went wrong"
                - "Write the root causes and fixes into a recovery plan"
                - "Ask your executive sponsor to call their counterpart"
                - "Review recovery progress with the account team each week"
            - name: Managing one customer that dominates revenue
              description: |-
                ## Purpose
                If a single customer makes up a quarter or more of revenue, the team that serves it is carrying the company's risk. Measuring the dependence, protecting the relationship at several levels and setting a target share for the next two years helps leadership plan without treating the customer as a threat.

                ## Milestones
                1. The customer's share of revenue and margin over three years calculated.
                2. Concentration risk reported to leadership with the main scenarios.
                3. Relationships at three levels and a multi-year agreement explored.
                4. A target share agreed for the next two years.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Leadership holds a written view of one customer's share of revenue and its scenarios, with an agreed target share for two years."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Work out the customer's share of revenue and margin for three years"
                - "Write what would happen to the business if their spend halved"
                - "Present the concentration view to leadership"
                - "Agree a target share for the next two years"
            - name: Appointing a first dedicated key account manager
              description: |-
                ## Purpose
                Many teams run key accounts through sellers who would rather be closing new logos. Deciding when the portfolio justifies a dedicated key account manager, writing the role around retention and growth measures, and choosing between promoting from within or hiring, sets the programme up to last.

                ## Milestones
                1. A case for the role showing revenue at stake and current coverage gaps.
                2. A role outline with measures for retention, growth and relationship coverage.
                3. A decision on promoting internally or hiring externally recorded.
                4. The first ninety days for the new key account manager planned.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written case and role outline for a dedicated key account manager exist, with a recorded internal or external decision and a ninety-day plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Total the revenue held by accounts without a dedicated owner"
                - "Draft measures for retention, growth and relationship coverage"
                - "Decide between promoting from within and hiring"
                - "Plan the first ninety days for whoever takes the role"
            - name: Global account plan across countries
              description: |-
                ## Purpose
                Customers operating in many countries often buy locally while head office wants one supplier and one price. A global account plan sets out the global contract, regional leads, how local deals connect to the global relationship and how revenue credit is shared, so your own regional teams stop competing inside the same customer.

                ## Milestones
                1. Every country where the customer buys from you listed with revenue and local contacts.
                2. A global lead and regional leads named.
                3. Rules for pricing, contracts and revenue credit agreed across regions.
                4. A quarterly call across regional leads running.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A global account plan names regional leads, sets agreed pricing and credit rules, and its quarterly cross-region call has met at least twice."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every country where the customer buys from you"
                - "Name a regional lead for each region"
                - "Agree pricing and revenue credit rules with regional sales leaders"
                - "Set up a quarterly call for all regional leads"
            - name: Co-innovation pilot with a key account
              description: |-
                ## Purpose
                Building something new with a key account, such as a pilot of a new product, a joint process improvement or shared research, ties the customer into your future and gives your product team real requirements. These pilots need clear terms on scope, ownership of what is created and what happens if it fails.

                ## Milestones
                1. A shared problem statement agreed with the customer.
                2. Scope, timeline, success measures and ownership of results written down and approved by legal.
                3. The pilot run by a joint team with regular reviews.
                4. A decision recorded on whether to scale, change or stop.

                ## Notes
                Ownership of anything created together is a legal question; take it to your legal team before work starts.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A co-innovation pilot with one key account has written terms, has run to its end date and has a recorded scale, change or stop decision."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree a one-paragraph problem statement with the customer"
                - "Ask legal to draft terms covering ownership of results"
                - "Form a joint team and agree how often it reviews progress"
                - "Record the scale, change or stop decision at the end of the pilot"
            - name: Key account programme results review
              description: |-
                ## Purpose
                Leadership funds a key account programme because it expects larger customers to stay longer and grow faster. A yearly review of retention, growth, share of wallet, profitability and relationship coverage across the portfolio shows whether that is true and where the programme needs to change.

                ## Milestones
                1. Retention and growth of key accounts compared with other customers.
                2. Share of wallet estimated for each key account.
                3. Programme costs set beside the revenue it protected and grew.
                4. Three changes to the programme agreed for next year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly programme review compares key account retention and growth with other customers and records three agreed changes."
                cadence: cyclic
              tasks:
                - "Compare key account retention and growth with the rest of the customer base"
                - "Estimate share of wallet for each key account"
                - "Present results and three proposed changes to leadership"
                - "Run the key account programme results review @recurring(yearly)"
---

# Key Account Management

This area is for account managers, sales leaders and enterprise teams who look after the handful of customers that matter most and want each one run on a plan rather than on goodwill. It starts with the foundations (choosing the accounts, tiers, profiles, revenue baselines, relationship maps, annual plans, team roles, health scores and risks), then the routines that keep each account healthy, the skills of business acumen and executive conversation, improvements such as whitespace maps, joint success plans and price reviews, the big events of the account year, situations such as an inherited account or a departing champion, and finally global accounts, co-innovation and a review of the whole programme.

What repeats is a weekly account team stand-up, escalation check and news scan, monthly plan check-ins, health scores, renewal calendar checks, risk reviews, contact rhythms, value logging, sponsor updates and a manager's portfolio review, quarterly business reviews and results reading, and a yearly round of selection, planning, relationship surveys and programme review. The Metrics log, Risk register, Meeting notes, Skills matrix, Feedback themes and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
