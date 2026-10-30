---
id: private-equity-vc.searcher-as-ceo
name: Searcher as CEO
description: "Run the business you bought through a search fund: the seller handover, a first board, careful early changes, the team you build and honest reporting to search investors."
category: business
version: 1.0.0
tags: [private-equity-vc, searcher-as-ceo, founder, manager, search-fund, ceo-transition, small-business-ownership, investor-reporting]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - board-meeting
    - one-on-one
    - metrics-log
    - purchase-decision
    - development-plan
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Searcher as CEO
          description: "The years after a search fund acquisition: the owner transition, a first board, early changes, building the team and reporting to search investors."
          projects:
            - name: Day-one announcement to employees and customers
              description: |-
                ## Purpose
                Employees usually learn about the sale the morning after closing, and what they hear in the first hour sets the story they tell their families that night. A scripted announcement with the seller standing beside you, a written letter for every employee and a short call list for key customers turns the news from a rumour into a plan.

                ## Milestones
                1. A five-minute announcement script agreed with the seller, covering why they sold, who you are and what will not change.
                2. A one-page letter for every employee answering pay, benefits, jobs and who to ask.
                3. A call list of the top twenty customers and five key suppliers, each with an assigned caller and a date.
                4. Every employee spoken to in person or by phone within the first two days.

                ## Notes
                Say clearly what is not changing: pay dates, managers, benefits. Do not promise anything about the next two years that you have not decided.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every employee and the top twenty customers heard about the change of ownership from you or the seller within two working days of closing."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft the announcement script and send it to the seller for edits"
                - "Write the employee letter with answers on pay, benefits and jobs"
                - "Build the customer and supplier call list with a caller beside each name"
                - "Hold the announcement meeting with the seller present @priority(high)"
                - "Log questions employees asked so you can answer them in writing"
            - name: Seller transition agreement put into practice
              description: |-
                ## Purpose
                Most search acquisitions include a transition services or consulting agreement with the seller for six to twelve months, and many of them are never actually used because nobody turns the clauses into a schedule. Converting the agreement into a list of knowledge to transfer, relationships to hand over and weekly time together gets the value you paid for before the seller drifts away.

                ## Milestones
                1. The transition agreement reread and its hours, duration and duties listed on one page.
                2. A handover list of the seller's knowledge: customers, pricing habits, supplier quirks, regulatory contacts and staff history.
                3. A fixed weekly session with the seller in both calendars.
                4. Each handover item marked transferred, in progress or at risk, reviewed monthly.

                ## Notes
                Agree early on how the seller will be introduced to staff during the transition, as adviser rather than boss, so employees know whose decisions count.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written handover list tied to the transition agreement, with a weekly seller session running and each item's status recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Reread the transition agreement and note hours, duration and duties"
                - "List what only the seller knows, grouped by customers, suppliers, staff and regulators"
                - "Book a standing weekly session with the seller"
                - "Review the handover list with the seller @recurring(weekly:tue)"
            - name: Key customer visits alongside the seller
              description: |-
                ## Purpose
                In a business with ten or twenty customers making up most of revenue, the relationship often belongs to the seller personally, not the company. Visiting each of the largest accounts together in the first two months, and asking what they would change, moves that loyalty to you and surfaces complaints the seller never heard.

                ## Milestones
                1. Customers ranked by gross profit, with the top accounts making up at least two thirds of it chosen for visits.
                2. A joint visit or call with the seller held for every chosen account.
                3. Each visit's notes captured: contact names, what they value, what annoys them, contract renewal date.
                4. Two or three customer complaints turned into fixes with an owner.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Every top account by gross profit visited with the seller within sixty days, with notes and renewal dates recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Rank customers by last year's gross profit from the accounting system"
                - "Agree with the seller which accounts need a joint visit"
                - "Prepare three questions to ask every customer about what they would change"
                - "Write up each visit the same day with renewal date and contacts"
            - name: Bank access, signing authority and payment controls
              description: |-
                ## Purpose
                On closing day the seller often still holds the online banking tokens, the payroll login and the company credit card, and the bookkeeper may approve payments alone. Moving signing authority, setting two-person approval on payments above a limit and listing every login closes the window for errors and fraud while everyone is distracted.

                ## Milestones
                1. Bank mandates updated so you are a signatory and the seller's authority is removed on the agreed date.
                2. A list of every financial login, who holds it and who should.
                3. Dual approval set for payments above a limit your board agrees.
                4. Company cards reissued in the right names, with old cards cancelled.

                ## Notes
                Ask the lender and your board what payment limit they expect. Keep the list of logins somewhere secure, never in an email thread.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Bank mandates, payroll, card and payment approvals all under the new ownership with a dual-approval limit in force within two weeks."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the bank which forms change the signatories on each account"
                - "List every finance login with its current holder"
                - "Set dual approval for payments above the agreed limit"
                - "Cancel and reissue company cards held by the seller"
            - name: Closing obligations register
              description: |-
                ## Purpose
                A search acquisition leaves behind a stack of promises: lender covenants and reporting deadlines, seller note payments, an earnout test, a working capital true-up, consent rights in the shareholder agreement and insurance conditions. Pulling every dated or conditional obligation into one register means nothing surprises you in month seven.

                ## Milestones
                1. Every closing document read and each obligation listed with its source clause.
                2. Each obligation given a date or trigger, an owner and a consequence if missed.
                3. The working capital true-up date and method confirmed with the seller's adviser.
                4. The register shared with the board and reviewed each quarter.

                ## Notes
                Start from the **Risk register** template. Ask your deal counsel to check the list once, since they wrote half of it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register of every post-closing obligation with dates, owners and source clauses, reviewed by deal counsel and shared with the board."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the credit agreement, purchase agreement, seller note and shareholder agreement"
                - "List each obligation with its clause, date or trigger and owner"
                - "Ask deal counsel to check the register for anything missing"
                - "Review the register against the calendar @recurring(quarterly)"
            - name: Searcher equity tranches and step-up explained
              description: |-
                ## Purpose
                A traditional searcher's equity usually vests in three parts: some on closing, some over time, and some only if investor returns pass set hurdles. Knowing exactly how your tranches are defined, what a leaver event does to them and how the hurdles are measured changes how you weigh every later decision on debt, dilution and timing.

                ## Milestones
                1. The equity terms in the shareholder agreement summarised in your own words on one page.
                2. Each tranche's vesting trigger, schedule and hurdle written down.
                3. Good and bad leaver definitions and their effect on each tranche noted.
                4. Your summary checked with your own lawyer, separate from company counsel.

                ## Notes
                This is your personal position, so ask your own adviser for tax treatment. Do not rely on investor counsel to explain terms that cut against you.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of your vesting tranches, hurdles and leaver terms, checked by your own lawyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the equity and leaver clauses in the shareholder agreement"
                - "Write a one-page summary of each tranche and its trigger"
                - "Model what each tranche is worth at three exit values"
                - "Book a call with your own lawyer to check the summary"
            - name: Decision rights between CEO, board and investors
              description: |-
                ## Purpose
                Typical search fund boards include two or three lead investors who own a large stake and want to help, and without a written line a new CEO either asks permission for everything or surprises the board with something big. A simple matrix of what you decide, what you consult on and what needs board approval removes most early friction.

                ## Milestones
                1. Reserved matters from the shareholder agreement and the credit agreement listed.
                2. A draft matrix covering hiring, pay, capex, pricing, contracts, debt and acquisitions with thresholds.
                3. The matrix discussed and approved at the first board meeting.
                4. The matrix filed with board papers and revisited after the first year.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A decision rights matrix with money thresholds approved by the board and filed with the board minutes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every reserved matter in the shareholder and credit agreements"
                - "Draft thresholds for spending, hiring and contracts"
                - "Send the draft matrix to the board chair before the first meeting"
                - "Record the approved matrix in the board minutes"
            - name: Listening tour of every employee
              description: |-
                ## Purpose
                New owners who change things in the first month often break a process they did not understand, and in a company of thirty to a hundred people every change is personal. Meeting every employee one by one in the first ninety days, with the same handful of questions, tells you where the real problems and the informal leaders are.

                ## Milestones
                1. A list of every employee with a meeting date, shift and location.
                2. Five standard questions used in every conversation.
                3. Notes from every conversation, grouped into recurring themes.
                4. A short summary shared with staff of what you heard and what you will look at first.

                ## Notes
                Meet people where they work, on their shift. Do not promise fixes on the spot; write it down and come back with an answer.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One-to-one conversations held with every employee within ninety days, with themes summarised and shared back with staff."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Write the five questions you will ask every employee"
                - "Schedule conversations by shift and location"
                - "Ask the agent to group your conversation notes into themes"
                - "Present what you heard at a staff meeting"
            - name: CEO weekly operating rhythm
              description: |-
                ## Purpose
                A first-time CEO's week fills up with whoever shouts loudest, and the important work of customers, cash and people slides. Designing a standard week with fixed blocks for leadership, the shop floor, customers, finance and thinking time gives the company a predictable boss and gives you an hour a week to plan the next one.

                ## Milestones
                1. A template week with fixed blocks for team, customers, finance, floor time and planning.
                2. Recurring meetings set in the calendar and shared with the leadership team.
                3. A Sunday or Monday planning slot used for at least eight weeks running.
                4. A review of where time actually went after one month, with one change made.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A template week in the calendar and at least eight consecutive weekly planning sessions completed."
                cadence: rolling
              tasks:
                - "Sketch your ideal week on paper with blocks for each priority"
                - "Put the recurring blocks into the calendar"
                - "Plan next week's three priorities @recurring(weekly:sun)"
                - "Compare a month of calendar entries against the template week"
            - name: Weekly cash position and thirteen-week forecast
              description: |-
                ## Purpose
                Newly acquired small companies carry acquisition debt, a seller note and almost no cash buffer, so a slow-paying customer can become a covenant problem within weeks. A weekly cash position and a rolling thirteen-week forecast, built from receivables, payables and payroll dates, is the single most useful report a searcher CEO can own personally.

                ## Milestones
                1. A thirteen-week cash forecast built with receipts, payroll, rent, debt service and seller note payments.
                2. Every Friday's actual cash balance recorded against the forecast.
                3. A minimum cash level agreed with the board and marked on the forecast.
                4. Forecast accuracy checked monthly and the worst assumptions fixed.

                ## Notes
                Build it in a spreadsheet first. Software can come later, once you know which lines matter.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A thirteen-week cash forecast updated every week for at least three months, with a board-agreed minimum cash line."
                cadence: rolling
              tasks:
                - "Build the forecast from the aged receivables and payables reports"
                - "Add payroll, debt service and seller note dates for thirteen weeks"
                - "Record the actual cash balance and roll the forecast @recurring(weekly:fri)"
                - "Compare last month's forecast with actual receipts @recurring(monthly:5)"
            - name: Monthly management accounts close
              description: |-
                ## Purpose
                Many businesses bought by searchers ran on cash-basis books closed once a year by the external accountant. Getting a monthly close done by the eighth working day, with accruals, a balance sheet and a gross margin you trust, is what makes the board pack, the lender certificate and your own decisions possible.

                ## Milestones
                1. A month-end checklist agreed with the bookkeeper and the external accountant.
                2. Accruals, prepayments and inventory counted or estimated every month.
                3. Management accounts with profit and loss, balance sheet and cash flow produced by the eighth working day.
                4. Three consecutive closes on time.

                ## Notes
                Expect the first two closes to be late. Fix the checklist each time rather than blaming the bookkeeper.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Management accounts with a balance sheet delivered by the eighth working day for three months in a row."
                cadence: rolling
              tasks:
                - "Agree a month-end checklist with the bookkeeper"
                - "Ask the external accountant which accruals the business needs each month"
                - "Review the draft management accounts with the bookkeeper @recurring(monthly:8)"
                - "Note every late step and fix the checklist after each close"
            - name: Monthly letter to search investors
              description: |-
                ## Purpose
                Search investors back the person first, and the CEOs they trust most are the ones who send a short, regular letter that includes the bad news. A monthly update with the numbers, the three things that went well, the three that did not and one specific ask keeps fifteen investors informed without fifteen separate calls.

                ## Milestones
                1. A standard letter format: headline numbers, versus budget, wins, problems, asks.
                2. The first letter sent within thirty days of closing.
                3. Letters going out by the same day each month.
                4. At least one investor ask answered usefully each quarter, noted in the letter.

                ## Notes
                Send it even in a bad month. Silence worries search investors far more than a missed budget.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly investor letter sent on the same day each month for six months, each with numbers versus budget and a specific ask."
                cadence: rolling
              tasks:
                - "Agree the letter format with your lead investors"
                - "Ask the agent to draft the letter from the month's accounts and your notes"
                - "Send the investor letter @recurring(monthly:12)"
                - "Track which asks got help and from whom"
            - name: Quarterly board meeting cycle
              description: |-
                ## Purpose
                Your first board will probably be two or three search investors and perhaps an independent director, meeting quarterly with packs prepared by you alone. A fixed cycle of pack, pre-calls, meeting and minutes, with time set aside for the two or three real decisions, turns board meetings into help instead of a performance.

                ## Milestones
                1. Dates for the next four board meetings agreed and in every director's calendar.
                2. A board pack format agreed: summary, KPIs, accounts, decisions needed.
                3. Packs sent at least five working days before each meeting.
                4. Minutes and action lists circulated within a week, and actions closed before the next meeting.

                ## Notes
                Start from the **Board meeting** template. Call each director a week before to learn their worries, so the meeting is spent on decisions.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly board meetings held in a year, each with a pack sent five working days ahead and minutes circulated within a week."
                cadence: cyclic
              tasks:
                - "Agree the next four board dates with the directors"
                - "Draft the board pack format and ask the chair for comments"
                - "Prepare and send the board pack @recurring(quarterly)"
                - "Circulate minutes and the action list within a week of each meeting"
            - name: Covenant compliance certificates for the lender
              description: |-
                ## Purpose
                Senior lenders to search deals usually test a debt to EBITDA ratio and a fixed charge or debt service cover ratio every quarter, and a late certificate can itself be a default. Preparing the calculation from the management accounts, checking it against the credit agreement definitions and sending it early keeps the lender relationship easy.

                ## Milestones
                1. Every covenant and reporting deadline in the credit agreement listed with its definition.
                2. A calculation workbook that follows the agreement's own definitions of EBITDA and debt.
                3. Headroom on each covenant shown quarterly and shared with the board.
                4. Certificates sent before each deadline for a full year.

                ## Notes
                Covenant EBITDA often differs from your management accounts EBITDA. Use the agreement's definition and ask the lender when unsure.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly compliance certificates sent before their deadlines, each with headroom calculated on the credit agreement's definitions."
                cadence: cyclic
              tasks:
                - "List each covenant and its definition from the credit agreement"
                - "Build a calculation workbook using the agreement's definitions"
                - "Prepare and send the compliance certificate @recurring(quarterly)"
                - "Show covenant headroom in the next board pack"
            - name: Weekly leadership team meeting
              description: |-
                ## Purpose
                In a company the seller ran personally, managers often reported straight to them and never met as a group. A weekly hour with the four to six people who run sales, operations, finance and service, with a fixed agenda of numbers, issues and commitments, builds the team you will need before you hire anyone new.

                ## Milestones
                1. The leadership group named and told why they are in it.
                2. A one-page agenda: last week's numbers, issues, decisions, commitments.
                3. Commitments logged with owner and date and reviewed at the start of each meeting.
                4. Twelve meetings held without cancellation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly leadership meetings held with a commitments log reviewed each time."
                cadence: rolling
              tasks:
                - "Decide who is in the leadership group and tell each of them"
                - "Write the one-page agenda and the commitments log"
                - "Run the leadership meeting and review commitments @recurring(weekly:mon)"
                - "Ask the group after six weeks what to change in the meeting"
            - name: One-to-ones with direct reports
              description: |-
                ## Purpose
                Inherited managers are watching to see whether the new owner trusts them, and a regular private half hour is where that trust is built or lost. Weekly one-to-ones led by the report's own list, with your feedback and their development included, make problems visible early and make the later hard conversations fair.

                ## Milestones
                1. A recurring one-to-one with every direct report.
                2. A shared note for each person carrying their agenda, your feedback and agreed actions.
                3. Each report's own goals for the year written in their note.
                4. Fewer than one in ten one-to-ones cancelled over a quarter.

                ## Notes
                Start from the **1:1** template. Let them talk first; your items go last.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly one-to-one held with each direct report for a quarter, with fewer than one in ten cancelled and notes kept for each."
                cadence: rolling
              tasks:
                - "Book a recurring half hour with each direct report"
                - "Create a shared note for each person from the 1:1 template"
                - "Hold one-to-ones and update each person's note @recurring(weekly:thu)"
                - "Ask each report to write their own goals for the year"
            - name: Company KPI dashboard of eight numbers
              description: |-
                ## Purpose
                Small companies often track either nothing or forty numbers nobody reads. Choosing about eight measures that drive the business, such as bookings, gross margin by line, jobs completed, on-time delivery, receivable days and staff turnover, and reviewing them monthly gives the team, the board and the lender one shared picture.

                ## Milestones
                1. Eight KPIs chosen, each with a definition, a source and an owner.
                2. Twelve months of history rebuilt where the data exists.
                3. A target or acceptable range set for each KPI with the leadership team.
                4. The dashboard reviewed monthly and attached to the investor letter.

                ## Notes
                Start from the **Metrics log** template. Prefer numbers you can pull without asking anyone to count by hand.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dashboard of about eight defined KPIs with owners and targets, updated monthly for six months."
                cadence: rolling
              tasks:
                - "Shortlist twelve candidate KPIs with the leadership team"
                - "Cut the list to eight and define each one"
                - "Rebuild twelve months of history from the systems"
                - "Update the dashboard and circulate it @recurring(monthly:10)"
            - name: Annual budget and operating plan
              description: |-
                ## Purpose
                The first budget after a search acquisition sets expectations for investors and the lender for a full year, and it is easy to sign up to the optimistic case from the acquisition model. Building it bottom up with your managers, by month and by product or service line, gives you a plan the team believes and a number the board can hold you to.

                ## Milestones
                1. Revenue built by customer or line with managers, month by month.
                2. Costs, hires and capex listed with the reason for each.
                3. Cash flow and covenant headroom tested under a downside case.
                4. The budget approved by the board before the year starts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A monthly budget with a downside case and covenant test, built with managers and approved by the board before the year begins."
                cadence: cyclic
              tasks:
                - "Ask each manager for their revenue and cost assumptions by month"
                - "Ask the agent to compare the draft budget against the acquisition model"
                - "Test covenant headroom under a downside case"
                - "Start the budget cycle with managers @recurring(yearly)"
            - name: Annual meeting for all search investors
              description: |-
                ## Purpose
                Only a few investors sit on the board, but every search investor wants to see the business and judge the CEO once a year. An annual meeting with a site visit, a candid review of the year, the plan ahead and time with managers keeps the wider investor group engaged and ready to help when you need capital or introductions.

                ## Milestones
                1. A date set and invitations sent three months ahead.
                2. A presentation covering results versus plan, lessons, team and next year.
                3. A site tour and time with the leadership team arranged.
                4. Follow-up notes sent to every investor within a week.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual investor meeting held with results versus plan presented and follow-up notes sent to every investor within a week."
                cadence: cyclic
              tasks:
                - "Pick a date and send save-the-date notes to every investor"
                - "Draft the presentation with results, lessons and next year's plan"
                - "Arrange the site tour and manager sessions"
                - "Plan the next annual meeting @recurring(yearly)"
            - name: Reading your own company's accounts
              description: |-
                ## Purpose
                Searchers often come from consulting, banking or business school and can read a model, but not the trial balance of a forty-person contractor. Learning how revenue is recognised in your business, where the cost of goods actually sits, how inventory and work in progress are valued and what drives receivables lets you catch problems before your bookkeeper does.

                ## Milestones
                1. The chart of accounts walked through line by line with the bookkeeper.
                2. Revenue recognition, inventory and work in progress methods written in plain words.
                3. The gross margin for each product or service line reconciled to the accounts.
                4. Three questions about the accounts you could not answer at closing now answered.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note explaining revenue recognition, inventory and margin by line in your business, reconciled to the accounts."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Book two hours with the bookkeeper to walk the chart of accounts"
                - "Write down how revenue and inventory are recorded in your own words"
                - "Reconcile gross margin by line to the profit and loss"
                - "Ask the external accountant the questions you still cannot answer"
            - name: Front-line days in every role
              description: |-
                ## Purpose
                Credibility with the people who do the work comes from having done a little of it yourself. Spending a full day each month in a different role, whether on a truck, in the warehouse, at the service desk or on a site, teaches you the trade and shows staff that the new owner understands what their day looks like.

                ## Milestones
                1. A list of every core role and a willing host for each.
                2. At least six roles shadowed for a full shift.
                3. One practical fix from each day logged and assigned.
                4. Front-line days continuing after the first year.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Six or more full front-line shifts worked in different roles, each with a logged practical fix."
                cadence: rolling
              tasks:
                - "List every core role and ask a respected employee to host you"
                - "Wear what the team wears and arrive at shift start"
                - "Spend a full day in a front-line role @recurring(monthly:15)"
                - "Log one practical fix from each day and assign it"
            - name: Presenting to a search fund board
              description: |-
                ## Purpose
                Search board members are often experienced CEOs and investors who have seen dozens of first-year companies, and a new CEO can either hide behind slides or use them well. Learning to open with the decision you need, show bad news early and separate facts from your view makes board time far more useful.

                ## Milestones
                1. Three experienced search CEOs asked how they run their board meetings.
                2. A pack structure that leads with decisions and the one-page summary.
                3. Feedback requested from the chair after each of the first three meetings.
                4. One change made to your presenting after each piece of feedback.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Feedback gathered from the board chair after three meetings, with a written change made after each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask three experienced search CEOs for a sample board pack"
                - "Rewrite your pack so the first page lists the decisions needed"
                - "Ask the chair for written feedback after each meeting"
                - "Write down one change you will make before the next meeting"
            - name: Hard conversations about performance
              description: |-
                ## Purpose
                Most first-time searcher CEOs avoid a performance conversation for months, while the rest of the team watches and draws conclusions. Practising a simple structure for feedback, a written improvement plan with dates and a fair exit when needed, with advice from an employment adviser, turns a dreaded moment into a manageable process.

                ## Milestones
                1. A feedback structure practised with a coach or peer before you need it.
                2. The employment law basics for your jurisdiction checked with an adviser.
                3. A written improvement plan format with measurable goals and review dates.
                4. Every live performance issue handled within a month of being noticed.

                ## Notes
                Employment rules differ by country and state. Take advice before any dismissal, and keep notes of every conversation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An improvement plan format checked by an employment adviser and each current performance issue addressed within a month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Role-play a feedback conversation with your coach or a peer CEO"
                - "Ask an employment adviser what your process must include"
                - "Write a template improvement plan with goals and review dates"
                - "List current performance issues and schedule each conversation"
            - name: Peer group of search fund CEOs
              description: |-
                ## Purpose
                Very few people understand the strange position of a young CEO with acquisition debt, a seller next door and a board of investors, but other searchers do. A small peer group of four to eight CEOs meeting monthly to trade numbers, problems and contacts is often the most valuable support a searcher has in the first three years.

                ## Milestones
                1. Four to eight searcher CEOs at a similar stage identified through your investors or business school network.
                2. An agreed format: monthly call, confidentiality, each person brings one issue.
                3. At least ten sessions attended in the first year.
                4. One concrete idea per quarter taken from the group and tried.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly peer call with at least four searcher CEOs, attended ten or more times in a year."
                cadence: rolling
              tasks:
                - "Ask your lead investors to introduce you to recently closed searchers"
                - "Propose a monthly call format and confidentiality rule"
                - "Bring one issue to the peer call @recurring(monthly:20)"
                - "Note each idea you try from the group and its result"
            - name: Executive coach or experienced mentor
              description: |-
                ## Purpose
                Searchers step into the CEO role without having been a manager, often in an industry they learned during diligence. A coach or a retired CEO from the same industry, meeting monthly with a written development plan, speeds up the learning that otherwise costs you staff and customers.

                ## Milestones
                1. Two or three coaches or mentors met, with one chosen.
                2. Fees or terms agreed, and the board told if the company pays.
                3. A development plan with three goals for the year.
                4. Progress on the plan reviewed with the coach every quarter.

                ## Notes
                Start from the **Development plan** template. Ask your board for a mentor from their own network before paying for one.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A coach or mentor engaged with a written three-goal development plan reviewed quarterly."
                cadence: rolling
              tasks:
                - "Ask board members to suggest coaches or industry mentors"
                - "Meet two or three candidates and choose one"
                - "Write a development plan with three goals"
                - "Hold the coaching session @recurring(monthly:25)"
            - name: Finance function from bookkeeper to controller
              description: |-
                ## Purpose
                Part-time bookkeepers rarely keep up once the company has a lender, a board and monthly investor reporting. Deciding when and how to add a controller or fractional finance lead, and what the bookkeeper's role becomes, frees you from doing the accounts at night and improves the numbers the board relies on.

                ## Milestones
                1. The current finance workload and gaps written down after three closes.
                2. Options compared: in-house controller, fractional finance lead, outsourced firm.
                3. A role description and budget approved by the board.
                4. The finance lead in place and owning the close and the covenant certificate.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A finance lead in place who owns the monthly close and covenant certificate, within the budget the board approved."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every finance task and who does it today"
                - "Compare in-house, fractional and outsourced finance options on cost and fit"
                - "Write the role description and take it to the board"
                - "Plan a handover from the bookkeeper with dates"
            - name: First senior hire in operations or sales
              description: |-
                ## Purpose
                The seller often did two or three jobs personally, and once they leave, a gap appears in operations, sales or estimating. Your first senior hire is a decision investors will judge you on, so define the gap from your listening tour, budget it and hire through a proper process rather than the first familiar face.

                ## Milestones
                1. The gap defined in writing with the outcomes the hire must deliver in a year.
                2. Pay and incentives benchmarked and approved by the board.
                3. A shortlist interviewed with a work sample and references taken.
                4. The hire started with a thirty, sixty and ninety day plan.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A senior hire made against a written role scorecard, with references taken and a ninety-day plan in place."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write a scorecard with the outcomes the role must deliver"
                - "Benchmark pay with a recruiter or industry survey"
                - "Interview a shortlist using a practical work sample"
                - "Call at least three references for the final candidate"
            - name: Organisation chart and role clarity
              description: |-
                ## Purpose
                In owner-run businesses job titles often mean little, two people think they run the same thing and nobody owns safety or collections. Drawing the chart as it really works, then the chart you need in two years, shows which roles to clarify, which to create and which conversations to have.

                ## Milestones
                1. A chart of how reporting actually works today, checked with managers.
                2. A one-line description of what each role owns.
                3. A target chart for two years ahead with the gaps marked.
                4. Changes explained to every affected employee in person.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Current and target organisation charts with a written ownership line for each role, shared with the leadership team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draw the current chart from payroll and your listening notes"
                - "Write one line of ownership for each role"
                - "Sketch the chart you need in two years"
                - "Explain each change to affected employees one by one"
            - name: Accounting and operating software decision
              description: |-
                ## Purpose
                Many acquired companies run on an old accounting package, spreadsheets and the seller's memory. Replacing systems too early breaks things, too late and you cannot report. A structured decision on whether to upgrade accounting, job costing or inventory software, with total cost and the implementation load, protects the first year.

                ## Milestones
                1. Current systems and their pain points listed with the people who use them.
                2. Requirements written, with must-haves separated from wishes.
                3. Two or three options compared on cost, fit and implementation time.
                4. A decision recorded, including a decision to wait.

                ## Notes
                Start from the **Purchase decision** template. Avoid a system change in the same quarter as a covenant test or busy season.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on accounting and operating software with costs, timeline and the users consulted."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "List each system in use and ask its users what fails"
                - "Write must-have and nice-to-have requirements"
                - "Get demos and quotes from two or three providers"
                - "Record the decision and the reasons in the board pack"
            - name: Insurance programme after the change of ownership
              description: |-
                ## Purpose
                Policies bought by the seller often carry the wrong named insured, miss directors and officers cover the board now needs and leave gaps the lender requires closed. Reviewing the programme with a broker in the first months, against the credit agreement and the business's real risks, avoids an uncovered claim in year one.

                ## Milestones
                1. Every policy listed with insurer, limits, renewal date and named insured.
                2. Lender and lease insurance requirements checked against current cover.
                3. Directors and officers cover arranged or confirmed for the new board.
                4. A broker's recommendation reviewed and a decision taken on each gap.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "All policies reviewed with a broker, lender requirements met and D and O cover in place for the board."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every policy with limits and renewal dates"
                - "Pull insurance requirements from the credit agreement and leases"
                - "Ask two brokers to review the programme"
                - "Confirm directors and officers cover for the board"
            - name: Pay and benefits review for employees
              description: |-
                ## Purpose
                Long-serving staff in owner-run firms are often paid unevenly, with informal perks the seller handed out and benefits below the local market. A review of pay against the market and internal fairness, before staff start leaving, lets you fix the worst gaps in a planned way the budget can carry.

                ## Milestones
                1. Every employee's pay, benefits and informal perks listed.
                2. Pay compared with local market data for each role.
                3. The cost of closing the biggest gaps calculated and phased.
                4. Changes approved by the board and explained to each person affected.

                ## Notes
                Keep informal perks in place until you understand why they exist; removing one can cost more goodwill than it saves.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pay and benefits review against market data with a phased, board-approved plan for the largest gaps."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export pay and benefits for every employee from payroll"
                - "Find local market pay data for each core role"
                - "Cost the changes that close the largest gaps"
                - "Take the phased plan to the board"
            - name: First price increase under new ownership
              description: |-
                ## Purpose
                Sellers nearing retirement often stop raising prices for years, so margins quietly erode. A careful first increase, segmented by customer and product, explained in advance and timed away from contract renewals, is often the biggest single profit lever a searcher has, and the riskiest if done clumsily.

                ## Milestones
                1. Pricing history and margin by customer and product analysed.
                2. Segments defined with a proposed increase for each.
                3. Customer communication drafted and sales staff briefed.
                4. Results tracked for six months: retention, margin and complaints.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A segmented price increase put in place with customer retention and margin tracked for six months afterwards."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pull three years of price and margin history by customer"
                - "Group customers into segments and propose an increase for each"
                - "Draft the customer letter and brief the sales team"
                - "Track retention and margin monthly for six months"
            - name: Decision on an underperforming inherited manager
              description: |-
                ## Purpose
                Almost every searcher inherits at least one manager who was loyal to the seller but cannot run the function at the company's next size. Making the decision with evidence, a fair chance to improve and advice on employment law, rather than in month two or month twenty, protects the team and your own credibility.

                ## Milestones
                1. The role's expected outcomes written and shared with the manager.
                2. Evidence gathered over at least one quarter.
                3. An improvement plan run with clear review dates.
                4. A decision recorded: keep, change role or exit, with a plan for the function.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the manager's future, based on a quarter of evidence and a completed improvement plan."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the outcomes the role must deliver and share them with the manager"
                - "Keep dated notes of results against those outcomes"
                - "Run the improvement plan with review dates"
                - "Brief the board chair before acting on the decision"
            - name: Customer concentration reduction plan
              description: |-
                ## Purpose
                Search targets are often bought with one or two customers making up a large share of revenue, and lenders and investors priced that risk in. A plan to grow the rest of the base, protect the big accounts and track the share each quarter turns a known weakness into an improving number at exit.

                ## Milestones
                1. Revenue share of the top one, five and ten customers measured.
                2. A retention plan for each of the largest accounts.
                3. New customer targets set for the next twelve months.
                4. Concentration tracked quarterly and reported to the board.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Top customer revenue share reported to the board each quarter alongside a written retention and growth plan."
                cadence: rolling
              tasks:
                - "Calculate the revenue share of the top one, five and ten customers"
                - "Write a retention plan for each large account"
                - "Set targets for new customers by segment"
                - "Recalculate concentration for the board pack @recurring(quarterly)"
            - name: Seller's final handover and departure
              description: |-
                ## Purpose
                When the transition period ends, staff and customers need to hear clearly that the seller has stepped away, or the old owner keeps getting calls for years. A planned farewell, a final check of the handover list and a clear future role, if any, closes the transition on good terms.

                ## Milestones
                1. The handover list closed or each remaining item reassigned.
                2. A farewell event or message agreed with the seller.
                3. Customers and suppliers told who their contact is now.
                4. Any ongoing role, such as adviser or board observer, written down.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The transition period closed with every handover item resolved and customers told their new contacts."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Review every open item on the handover list with the seller"
                - "Agree the farewell plan and any ongoing role in writing"
                - "Tell key customers and suppliers who their contact is now"
                - "Remove the seller's remaining system and building access"
            - name: First all-hands meeting and company plan
              description: |-
                ## Purpose
                After the listening tour, staff want to know what the new owner actually intends. An all-hands meeting that presents a simple plan for the year, three priorities and what each team will do, with time for questions, replaces anxious speculation with a shared direction.

                ## Milestones
                1. Three company priorities for the year agreed with the leadership team.
                2. A short presentation with what you heard, the priorities and what will not change.
                3. The meeting held at a time every shift can attend.
                4. Questions answered in writing within a week.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An all-hands meeting held with three written priorities, attended by every shift, and questions answered within a week."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree three priorities for the year with the leadership team"
                - "Draft a ten-minute presentation in plain language"
                - "Book a time and place every shift can attend"
                - "Answer every open question in writing within a week"
            - name: Seller note and earnout payments
              description: |-
                ## Purpose
                Seller notes and earnouts tie the old owner's money to the company's results, and disputes over a measurement or a late payment can sour the relationship and draw in lawyers. Preparing each calculation early, agreeing the numbers with the seller in writing and paying on time keeps both sides honest.

                ## Milestones
                1. Each payment date, amount and condition listed from the purchase documents.
                2. The earnout calculation method written out and checked against the agreement.
                3. Each calculation shared with the seller before the due date.
                4. Every payment made on time and recorded with the board.

                ## Notes
                If a covenant or subordination agreement limits seller payments, check with the lender well before the date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every seller note and earnout payment calculated, agreed with the seller and paid on time, with a record in the board minutes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every seller note and earnout payment with its date"
                - "Write out the earnout calculation step by step"
                - "Check subordination terms with the lender before each payment"
                - "Send each calculation to the seller before it is due"
            - name: Annual lender review meeting
              description: |-
                ## Purpose
                Small business lenders, including government-backed loan programmes in some countries, review each borrower yearly, and the relationship manager can be a real ally in a tough quarter. Preparing a short annual review with results, plans and covenant headroom, and meeting in person, builds credit for the day you need a waiver or a new facility.

                ## Milestones
                1. Annual accounts and a one-page summary prepared for the lender.
                2. A meeting held with the relationship manager at your site.
                3. Next year's plan and any expected capital needs discussed.
                4. Follow-up actions from the lender completed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly meeting with the lender held at your site, with a written summary sent and follow-ups closed."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Ask the relationship manager when their annual review falls"
                - "Prepare a one-page summary with results and covenant headroom"
                - "Invite the lender to visit the site"
                - "Send a written note of the meeting and close follow-ups"
            - name: First anniversary CEO review with the board
              description: |-
                ## Purpose
                Most search investors expect to give the CEO a frank review after the first year, and searchers who ask for it early get far better feedback. A structured review with a self-assessment, board input and a few manager views, against goals set at the start, sets the agenda for year two.

                ## Milestones
                1. Goals for the first year written and agreed with the chair.
                2. A self-assessment against each goal.
                3. Written feedback from each director and two or three managers.
                4. A year-two plan for your own development agreed with the chair.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first-year CEO review completed with written board feedback and a year-two development plan agreed with the chair."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree first-year goals with the board chair"
                - "Write a self-assessment against each goal"
                - "Ask the agent to summarise the feedback themes from directors and managers"
                - "Agree a year-two development plan with the chair"
            - name: Partnered searchers dividing the CEO role
              description: |-
                ## Purpose
                Two searchers who bought together often become co-CEOs or CEO and president, and without clear lines staff learn to ask whichever partner says yes. Agreeing who owns which functions, how you decide together and how you resolve a deadlock protects both the company and the partnership.

                ## Milestones
                1. Functions split with one clear owner each.
                2. A weekly partners' meeting to align before talking to staff.
                3. A deadlock rule agreed, such as taking it to the board chair.
                4. The split explained to managers and the board.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split of functions and a deadlock rule agreed by both partners and shared with the board and managers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every function and decide which partner owns it"
                - "Agree how you will settle a disagreement"
                - "Set a weekly partners' meeting before the leadership meeting"
                - "Explain the split to managers and the board"
            - name: Relocating your family to the company's town
              description: |-
                ## Purpose
                Many search acquisitions are in towns the searcher has never lived in, and a spouse or partner who moves without a plan for work, school and friends can make the whole venture fragile. Planning the move as a family project, with timing, housing and a support network, matters as much as the business plan.

                ## Milestones
                1. A move date agreed as a family, with schools and work considered.
                2. Housing chosen within a reasonable commute.
                3. Two or three local connections made for your partner and children.
                4. A check-in after six months on how everyone is settling.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "The family moved on an agreed date with housing, schools and local connections in place, and a six-month check-in held."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree a move date with your partner and any children"
                - "Shortlist schools and housing within the commute"
                - "Ask local managers and customers for introductions to families nearby"
                - "Hold a family check-in six months after the move"
            - name: Protected family time for a searcher parent
              description: |-
                ## Purpose
                The first two years of running an acquired company can swallow every evening and weekend, and young children notice. Setting a few non-negotiable family commitments, telling your team and board about them and keeping them is a better plan than hoping things calm down.

                ## Milestones
                1. Three fixed family commitments each week agreed at home.
                2. The team and board told when you are not available.
                3. An escalation rule for true emergencies only.
                4. A monthly check with your partner on whether it is working.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three weekly family commitments kept for three months, with a monthly check-in with your partner."
                cadence: rolling
              tasks:
                - "Agree three weekly family commitments with your partner"
                - "Tell the leadership team and board when you are offline"
                - "Write the rule for what counts as an emergency"
                - "Check the week's family commitments with your partner @recurring(weekly:sat)"
            - name: Leading older and more experienced managers
              description: |-
                ## Purpose
                Searchers in their thirties often manage people with twenty years in the trade who know more about the work than they do. Earning authority through questions, clear decisions and credit given in public, rather than titles or business school language, is a skill the first year depends on.

                ## Milestones
                1. Each experienced manager's expertise and concerns written down after a frank conversation.
                2. A rule for which decisions you make and which you delegate to them.
                3. Credit given in public for their ideas at least monthly.
                4. Feedback from them on your leadership after six months.

                ## Notes
                Start from the **Development plan** template for your own goals. Drop the jargon: say margin and cash, not value creation levers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written delegation rule for each experienced manager and their feedback on your leadership gathered after six months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask each experienced manager what they need from a new owner"
                - "Write down which decisions you will delegate to each of them"
                - "Name one manager's contribution at each leadership meeting"
                - "Ask them for honest feedback after six months"
            - name: Living on a searcher's salary
              description: |-
                ## Purpose
                Searcher CEO salaries are usually modest and fixed by the investors, while the equity is illiquid for five years or more, often after two years of search pay. A personal budget, a cash buffer and an understanding of what your equity is and is not worth help you make company decisions without personal money pressure leaking in.

                ## Milestones
                1. A household budget built on your actual take-home pay.
                2. An emergency fund target set and progress tracked.
                3. Salary review timing and process agreed with the board.
                4. A personal adviser consulted on tax and the equity position.

                ## Notes
                This is organisational, not financial advice. Ask a qualified adviser about tax on your equity.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A household budget on actual pay, an emergency fund target and an agreed salary review date with the board."
                cadence: cyclic
              tasks:
                - "Build a household budget from your real take-home pay"
                - "Set an emergency fund target and a monthly amount"
                - "Ask the board chair when and how CEO pay is reviewed"
                - "Review your budget and pay with your adviser @recurring(yearly)"
            - name: Bad news plan for losing a major customer
              description: |-
                ## Purpose
                Losing a top customer in year one is common enough that the board will ask what you would do. Writing a response plan in advance, with the cost cuts, cash moves and lender conversations it triggers, means you act in days instead of weeks if it happens.

                ## Milestones
                1. The effect of losing each of the top three customers on EBITDA, cash and covenants calculated.
                2. A list of cost and cash actions with sizes and lead times.
                3. The order of calls agreed: board chair, lender, staff.
                4. The plan reviewed by the board and stored with the risk register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written plan showing the covenant effect of losing each top-three customer and the actions and calls that follow, reviewed by the board."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Model the loss of each top-three customer on EBITDA and covenants"
                - "List cost and cash actions with their size and timing"
                - "Write the call order for the board, lender and staff"
                - "Present the plan at the next board meeting"
            - name: Handling an investor who wants more control
              description: |-
                ## Purpose
                Sooner or later a large search investor will push hard on a decision you own, call managers directly or question your strategy outside the board. Handling it with the shareholder agreement, the decision rights matrix and the chair's support, rather than by giving way or picking a fight, keeps governance intact.

                ## Milestones
                1. The specific behaviour and its effect on the company written down.
                2. The relevant clauses and the decision rights matrix reread.
                3. A private conversation held with the investor, with the chair briefed first.
                4. An agreed way of working recorded, or the issue taken to the full board.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The investor issue discussed privately with the chair briefed, and an agreed way of working or a board discussion recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down what happened and how it affected staff or decisions"
                - "Reread the decision rights matrix and shareholder agreement"
                - "Brief the board chair before speaking to the investor"
                - "Meet the investor privately and record what was agreed"
            - name: Follow-on capital from search investors
              description: |-
                ## Purpose
                Growth projects, a new facility or a refinancing may need more equity than the business generates, and search investors usually hold pro rata rights to fund it. Preparing the case, the terms and the dilution effect on every holder, including your own tranches, before you ask lets investors decide quickly and fairly.

                ## Milestones
                1. The use of funds, amount and expected return written in a short memo.
                2. Debt and internal cash options compared with new equity.
                3. Proposed terms and dilution worked out for every holder, including the searcher tranches.
                4. The board decision and investor allocations recorded.

                ## Notes
                Take legal advice on pre-emption rights and investor consents before offering any new shares.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A memo with use of funds, financing options and dilution for each holder, and a recorded board decision on the raise."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Write a two-page memo on the use of funds and expected return"
                - "Compare new equity with debt and internal cash"
                - "Model dilution for each holder including your own tranches"
                - "Ask company counsel which consents and pre-emption steps apply"
            - name: Independent director for the board
              description: |-
                ## Purpose
                Boards of search companies start with investors only, and by year two many CEOs want someone who has run a company in the same industry. Choosing an independent director with the right operating experience, agreeing their pay and equity and setting clear expectations adds the outside view investors cannot supply.

                ## Milestones
                1. The skills gap on the board written down with the chair.
                2. Three or four candidates met and referenced.
                3. Terms agreed: fees, any equity, time commitment and term.
                4. The director appointed and onboarded with a site visit.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An independent director with relevant operating experience appointed on written terms and onboarded with a site visit."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Agree the missing board skills with the chair"
                - "Ask investors and peers for candidate names"
                - "Meet and reference three or four candidates"
                - "Agree terms and arrange an onboarding site visit"
            - name: Year-five decision to stay, recapitalise or sell
              description: |-
                ## Purpose
                Around years four to seven, search investors and the CEO face the question of whether to keep running the business, refinance and return capital, or sell. Framing the options early, with your own goals, investor expectations and the tranche effects written down, makes it a choice rather than something that happens to you.

                ## Milestones
                1. Your own goals for the next five years written honestly.
                2. Investor expectations gathered in private conversations.
                3. Options compared: hold, dividend recapitalisation, partial sale, full sale.
                4. A recommendation taken to the board with advisers named for the next step.

                ## Notes
                Bring in tax, legal and corporate finance advisers before any formal process. This project frames the choice, it does not run a sale.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of hold, recapitalise and sell options with your goals and investor views, taken to the board as a recommendation."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Write down your own goals for the next five years"
                - "Ask each major investor privately about their expectations"
                - "Ask the agent to lay out the hold, recap and sale options side by side"
                - "Take a recommendation to the board"
            - name: Succession plan for the searcher CEO role
              description: |-
                ## Purpose
                Everyone around the table knows the whole investment rests on one person, and a serious illness, a family emergency or a decision to leave puts the company at risk. A written plan for who covers in the short term and how a successor would be found protects employees and investors, and protects your own equity under the leaver terms.

                ## Milestones
                1. An emergency cover plan naming who does what for the first month.
                2. Key logins, contacts and documents listed somewhere the chair can reach.
                3. Internal candidates who could grow into the role identified.
                4. The plan reviewed with the board chair once a year.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written CEO cover and succession plan held by the board chair and reviewed yearly."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write who covers each of your duties for the first month"
                - "List key logins and documents the chair would need"
                - "Name internal people who could grow into senior roles"
                - "Send the plan to the board chair"
---

# Searcher as CEO

This area is for the searcher who has just signed the purchase agreement and now has to run a small company with employees, customers, a lender and a dozen investors watching. It starts with the first weeks (the announcement, the seller handover, bank controls, the closing obligations and your equity tranches), moves into the operating machinery of cash, monthly accounts, investor letters and board meetings, then the skills a new CEO has to pick up fast, the early changes and hires worth making, the dated milestones of the first years, variants for partnered searchers, relocated families and first-time managers, and finally the harder specialist calls about investor control, follow-on capital and the stay or sell decision.

What repeats is a weekly cash check and leadership meeting, weekly one-to-ones, a monthly close, KPI review and investor letter, quarterly board meetings and covenant certificates, and a yearly budget and investor meeting. The Risk register, Board meeting, 1:1, Metrics log, Purchase decision and Development plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
