---
id: founding-startups.side-project-to-company
name: Side Project to Company
description: "Turn the thing you build on evenings and weekends into a real company: clean ownership, honest traction numbers, written full-time criteria and a proper setup for growth."
category: business
version: 1.0.0
tags: [founding-startups, side-project-to-company, founder, engineer, knowledge-worker, side-project, indie-hacker, intellectual-property]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - month-end-close
    - operational-checklist
    - meeting-notes
    - risk-register
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Side Project to Company
          description: "Turning a side project into a real company, deciding when it deserves full time and setting it up properly for growth."
          projects:
            - name: Honest snapshot of the side project today
              description: |-
                ## Purpose
                Side projects tend to live in the builder's head as either a hobby or a future unicorn, rarely as what they actually are. A one-page snapshot of users, revenue, code, costs and hours spent gives you a fixed starting point that every later decision in this area can be measured against.

                ## Milestones
                1. One page listing active users, paying customers, monthly revenue and monthly costs, with the source for each figure.
                2. The hours you spent on the project in the last four weeks estimated from your calendar and commit history.
                3. The three things users most often praise or ask for written down in their own words.
                4. A one-line verdict on what the project is today: hobby, side income or early company.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated one-page snapshot with users, revenue, costs and hours, each figure traced to a source, exists in the area."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export last month's user and signup counts from your analytics or database"
                - "Add up revenue and every recurring cost, including hosting and domains"
                - "Estimate your hours from the last four weeks of commits and calendar"
                - "Write the one-line verdict at the top of the snapshot"
            - name: Employment contract and IP clause review
              description: |-
                ## Purpose
                Many employment contracts claim ownership of inventions made during employment, sometimes even outside working hours, and some forbid outside business activity altogether. Knowing exactly what your contract says before the project has value is the difference between a clean company and one an employer could later claim.

                ## Milestones
                1. Your signed employment contract, handbook and any invention assignment agreement gathered in one folder.
                2. The IP, moonlighting, confidentiality and non-compete clauses highlighted and copied into a summary.
                3. A short list of questions about how those clauses apply to your project written for a lawyer.
                4. An employment lawyer's view on your position recorded, with any actions they recommend.

                ## Notes
                Rules on employee inventions differ by country and sometimes by state or province, so treat online summaries as background only. A one-hour consultation with an employment lawyer is cheap compared with an ownership dispute after funding.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written summary of your contract's IP and outside-work clauses exists, with a lawyer's view on the side project recorded beside it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find your signed contract and any invention assignment you signed at hire"
                - "Highlight every clause on IP, outside work, confidentiality and competition"
                - "Write the questions you need a lawyer to answer about the project"
                - "Book a consultation with an employment lawyer and record their advice"
            - name: Separating the project from employer time and equipment
              description: |-
                ## Purpose
                Code written on a work laptop, pushed from the office network or committed during paid hours hands an employer an easy argument that they own it. Moving every part of the project onto your own devices, accounts and time closes that gap from today onward and gives you a record that you did.

                ## Milestones
                1. No project code, credentials or files left on any employer-owned device or cloud account.
                2. Every project account signed up with a personal email rather than a work address.
                3. A written rule that project work happens only outside contracted hours and off employer networks.
                4. Commit history checked for timestamps during working hours, with any pattern noted for your lawyer.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A checklist confirms no project assets remain on employer devices or accounts and that all project accounts use a personal email."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search your work laptop and work cloud storage for any project files"
                - "Move the repository, keys and documents to a personal machine"
                - "Change any project account still registered to your work email"
                - "Run a commit timestamp report and save it with your contract notes"
            - name: Weekly hours log for nights and weekends
              description: |-
                ## Purpose
                Most people overestimate the time they give a side project, then blame the product when progress is slow. Logging real hours each week shows what the project can absorb alongside a job and makes the full-time question a matter of arithmetic: what would five times these hours produce.

                ## Milestones
                1. A simple log with date, hours and what was done, kept in the same place every week.
                2. Four consecutive weeks logged without gaps.
                3. An average weekly figure and the split between building, support and marketing worked out.
                4. The weekly capacity you can sustain without harming your job or health written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four or more consecutive weeks of hours are logged with a split by type of work and a sustainable weekly figure recorded."
                cadence: rolling
              tasks:
                - "Create a log with columns for date, hours and type of work"
                - "Record this week's project hours every Friday evening @recurring(weekly:fri)"
                - "Work out the average and the split after four weeks"
                - "Write the weekly hours you can keep up for the next six months"
            - name: Ninety-day usage and revenue baseline
              description: |-
                ## Purpose
                A spike from a forum post can feel like traction and a quiet month can feel like failure; neither tells you much on its own. Three months of weekly active users, retention and revenue, laid out the same way, show whether the project is growing, flat or riding one lucky week.

                ## Milestones
                1. Weekly active users, new signups and revenue for the last thirteen weeks in one table.
                2. The share of users from three months ago who are still active calculated.
                3. Any one-off spikes marked with their cause, such as a launch post or a mention.
                4. A trend line drawn with spikes excluded and the weekly growth rate written beside it.

                ## Notes
                If you were not collecting these numbers, add basic event tracking now and accept that the baseline starts today.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A thirteen-week table of active users, signups and revenue exists with spikes annotated and an underlying weekly growth rate stated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check which usage and revenue events your product already records"
                - "Pull thirteen weeks of active users, signups and revenue into a sheet"
                - "Mark each spike with what caused it"
                - "Calculate the growth rate with the spikes removed"
            - name: One-page company thesis for the project
              description: |-
                ## Purpose
                Pleasing its maker is all a side project has to do, but a company needs a customer who pays, a reason they pay you and a market big enough to support a salary. Writing those answers on one page exposes whether the project is a business in waiting or a well-loved tool for a few hundred people.

                ## Milestones
                1. The paying customer described as a specific role or person, not a broad audience.
                2. The problem, what they use today and why your project is better written in three sentences.
                3. A rough count of how many such customers exist and what they could pay a year.
                4. The single biggest assumption the thesis depends on named, with how you would test it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page thesis names the paying customer, the problem, a market size estimate and the riskiest assumption with a test."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Describe the person who would pay for the project in two sentences"
                - "List what they use today instead and what it costs them"
                - "Estimate how many of them exist and what they might pay each year"
                - "Ask the agent to challenge the thesis and list its weakest assumption"
            - name: Ownership map of every project account and asset
              description: |-
                ## Purpose
                Over the years a side project usually sprawls across a personal domain registrar, a free hosting tier, a payment account in your own name and an email list on some tool you signed up for at midnight. Mapping every asset and its owner now makes the later move into a company a checklist instead of an archaeological dig.

                ## Milestones
                1. A list of every asset: domains, repositories, hosting, payment accounts, app store listings, email lists, social handles and design files.
                2. The registered owner, login email and billing card recorded for each.
                3. Two-factor authentication and recovery codes confirmed for every account.
                4. Any asset owned by a friend, collaborator or employer marked for follow-up.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete asset register lists every project account with its owner, login email and two-factor status, and flags third-party ownership."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every service you have ever signed up to for the project"
                - "Record the owner, login email and payment card for each one"
                - "Turn on two-factor authentication where it is missing"
                - "Check domain and certificate renewal dates @recurring(yearly)"
            - name: Sign-off from past contributors and collaborators
              description: |-
                ## Purpose
                Friends who wrote a module, designers who made the logo and open-source contributors who sent pull requests may each hold rights to part of what you plan to sell. Getting written assignments or confirming licence terms while relationships are friendly and the project is worth little is far easier than after a buyer or investor asks.

                ## Milestones
                1. Everyone who contributed code, design, copy or data listed with what they made.
                2. Each contribution checked against the licence it was given under.
                3. Signed assignment or licence letters received from every significant contributor.
                4. Any contribution you cannot clear marked for rewrite or removal.

                ## Notes
                Open-source contributions under a permissive licence may already allow commercial use, while copyleft licences carry obligations. Ask a lawyer which contributions need a signed assignment rather than guessing.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every significant past contributor has signed an assignment or licence letter, or their work is listed for replacement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the list of contributors from the repository history"
                - "Add designers, writers and anyone who supplied content or data"
                - "Ask a lawyer for a short contributor assignment letter"
                - "Send the letter to each contributor with a friendly explanation"
            - name: Full-time readiness criteria written in advance
              description: |-
                ## Purpose
                Without criteria set in a calm moment, the decision to go full time gets made after a great week or a bad day at work. Writing down the revenue, growth, savings and personal conditions that would justify the move turns a gut call into a test the project either passes or does not.

                ## Milestones
                1. A monthly revenue figure that would cover your essential costs, with the calculation shown.
                2. A minimum growth rate sustained over three months that would count as momentum.
                3. The months of personal savings you need in hand, agreed with your partner if you have one.
                4. A review date by which you will decide even if the criteria are only partly met.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written criteria state the revenue, growth rate, savings months and decision date that would trigger going full time."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out the monthly income your household needs to cover essentials"
                - "Set the revenue and growth thresholds the project must reach"
                - "Agree the savings buffer with anyone who shares your finances"
                - "Put the decision date in your calendar"
            - name: Saturday morning shipping session
              description: |-
                ## Purpose
                Side projects die from scattered twenty-minute sessions that never finish anything. One protected block each week, started with a task chosen the session before, keeps a visible release cadence going even through busy months at work.

                ## Milestones
                1. A fixed weekly slot of at least three hours agreed with your household.
                2. A rule that each session ends by writing the first task for the next one.
                3. Something shipped to users in at least three out of every four sessions.
                4. A short release history showing the cadence over the last two months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over eight weeks, at least six weekly sessions end with a change shipped to users, recorded in a release history."
                cadence: rolling
              tasks:
                - "Agree the weekly slot with the people you live with"
                - "Ship one user-visible improvement in the Saturday session @recurring(weekly:sat)"
                - "End each session by writing next week's first task"
                - "Keep a one-line release history entry for every shipped change"
            - name: Monthly traction review against the full-time criteria
              description: |-
                ## Purpose
                Criteria are only useful if you look at them. A thirty-minute review each month, comparing the latest numbers with your written thresholds, shows whether the project is moving toward the full-time line and catches a stall early enough to act.

                ## Milestones
                1. The same five numbers recorded each month: active users, paying customers, revenue, growth rate and hours.
                2. Each number compared with the threshold from your readiness criteria.
                3. One action chosen each month to move the weakest number.
                4. Six months of reviews kept in one log.

                ## Notes
                Start from the **Metrics log** template. Keep the five numbers fixed so the trend means something.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly entries record the five numbers against thresholds with one chosen action each."
                cadence: rolling
              tasks:
                - "Set up a log with the five numbers and their thresholds"
                - "Record the numbers and compare them with the criteria @recurring(monthly:3)"
                - "Pick one action to move the weakest number this month"
                - "Note any month where a threshold was crossed"
            - name: Weekly user feedback triage
              description: |-
                ## Purpose
                Feedback for a side project arrives scattered across email, GitHub issues, app reviews and direct messages, and the best requests get buried under bug reports. One weekly pass that sorts everything into fix, consider and decline keeps users feeling heard and shows which requests come from people who would pay.

                ## Milestones
                1. All feedback channels routed into one inbox, board or label.
                2. Every item tagged fix, consider or decline within a week of arriving.
                3. Requests from paying or likely-paying users marked separately.
                4. Each sender told what happened to their request.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four weeks running, every new feedback item is tagged within seven days and the sender has received a reply."
                cadence: rolling
              tasks:
                - "List every place feedback currently arrives"
                - "Route those channels into one inbox or board"
                - "Triage new feedback into fix, consider or decline @recurring(weekly:wed)"
                - "Reply to each sender with the outcome"
            - name: Separate bookkeeping for side project income
              description: |-
                ## Purpose
                Hosting bills on a personal card and payouts landing in your current account make it impossible to say whether the project is profitable. A separate account and a monthly reconcile give you clean numbers for tax, for your full-time decision and for any later investor or buyer.

                ## Milestones
                1. A separate bank account or sub-account used only for project income and costs.
                2. Every subscription and payout moved to that account.
                3. A simple monthly profit and loss produced from the transactions.
                4. Receipts for every cost stored in one folder by month.

                ## Notes
                Start from the **Month-end close** template. Ask an accountant whether your country treats this as self-employment or a trade while you are still employed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Project money flows through its own account and a monthly profit and loss exists for each of the last three months."
                cadence: rolling
              tasks:
                - "Open a separate account or sub-account for the project"
                - "Move every subscription and payout onto that account"
                - "Reconcile the month and update the profit and loss @recurring(monthly:12)"
                - "File each receipt into the folder for its month"
            - name: Support and uptime coverage while employed
              description: |-
                ## Purpose
                Paying customers expect the product to work during your working day, when you cannot answer. Deciding in advance what you will monitor, how quickly you will reply and what users see when something breaks lets you charge money without promising what a day job will not allow.

                ## Milestones
                1. A published support promise, such as a reply within one working day.
                2. Uptime and error alerts going to your phone with a rule for when you act on them.
                3. A status page or banner you can update in two minutes.
                4. A tested restore from backup, timed and written down.

                ## Notes
                Start from the **Operational checklist** template. Promise less than you can deliver; a slow but reliable reply beats a fast one you cannot keep.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A published support promise, working alerts, a status page and a timed backup restore are all in place and documented."
                cadence: rolling
              tasks:
                - "Write the support reply time you can honestly keep"
                - "Set up uptime and error alerts to your phone"
                - "Create a status page or a banner you can switch on quickly"
                - "Restore from a backup into a test environment and time it @recurring(monthly:18)"
            - name: Quarterly keep, grow or shelve review
              description: |-
                ## Purpose
                Every quarter the project costs you roughly a hundred and fifty evenings and weekends, and that deserves a deliberate yes. A short review of numbers, energy and opportunity cost ends with one of three choices, so the project never drifts on for years by default.

                ## Milestones
                1. The last three monthly traction entries and hours logs set side by side.
                2. An honest note on your energy and what the project has cost you outside work.
                3. A choice recorded: keep at the current pace, grow with more time or money, or shelve.
                4. If shelving, a plan for existing users and a date to close or hand over.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter has a recorded keep, grow or shelve choice with the evidence that supported it."
                cadence: cyclic
              tasks:
                - "Put the quarter's traction entries and hours logs side by side"
                - "Write a paragraph on what the project cost you this quarter"
                - "Hold the keep, grow or shelve review and record the choice @recurring(quarterly)"
                - "Tell any collaborators what you decided"
            - name: Day job and side project boundary rules
              description: |-
                ## Purpose
                Answering a customer from your work desk or using a colleague's idea in your product can damage both your job and your ownership claim. A short list of personal boundary rules, checked weekly, keeps the two lives separate until you choose to leave.

                ## Milestones
                1. Written rules covering time, devices, networks, colleagues and confidential information.
                2. A rule on whether and how you can mention the project at work.
                3. A weekly check of the past seven days against the rules.
                4. Any breach noted and the gap fixed the same week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written set of boundary rules exists and has been checked against your week for at least six weeks running."
                cadence: rolling
              tasks:
                - "Write five rules separating your job from the project"
                - "Decide what you will and will not say about the project at work"
                - "Check the past week against your boundary rules @recurring(weekly:sun)"
                - "Fix any breach before the next working day"
            - name: Monthly update to early users
              description: |-
                ## Purpose
                Early users of a side project often wonder whether it is still alive, and silence pushes them toward alternatives. A short monthly note on what shipped, what is next and how to reach you builds the trust you will need when you start charging or change the terms.

                ## Milestones
                1. An email list or announcement channel with every active user who has agreed to hear from you.
                2. A simple format: what shipped, what is next, one question for readers.
                3. Six updates sent on a regular day.
                4. Replies from users collected and fed into feedback triage.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly updates have been sent to users who opted in, with replies logged in the feedback system."
                cadence: rolling
              tasks:
                - "Set up an opt-in list or announcement channel for users"
                - "Write a three-section format for the update"
                - "Send the monthly update to early users @recurring(monthly:20)"
                - "Move every reply into the feedback inbox"
            - name: Tax set-aside for side project income
              description: |-
                ## Purpose
                Side income is often untaxed at source, so the bill arrives months later, after the money has been spent on servers and a new laptop. Moving a fixed share of each month's profit into a separate pot, and checking the share with an accountant, avoids an ugly surprise in the first good year.

                ## Milestones
                1. An accountant's view on how your side income is taxed and what share to set aside.
                2. A separate savings pot for tax.
                3. The agreed share of each month's profit moved into it.
                4. Filing deadlines for side income noted in your calendar.

                ## Notes
                Many countries require side income to be declared even when it is small. Ask a qualified accountant rather than relying on forum advice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tax pot receives the accountant-agreed share of profit every month and filing dates are in your calendar."
                cadence: rolling
              tasks:
                - "Ask an accountant how your side income is taxed"
                - "Open a separate savings pot for tax"
                - "Move the agreed share of last month's profit into the pot @recurring(monthly:25)"
                - "Gather the year's figures for your tax return @recurring(yearly)"
            - name: Interviews with existing users about paying
              description: |-
                ## Purpose
                Fans of a free tool and customers who would pay for it are often different people, and you will not know which is which from analytics. Ten conversations with your most active users, focused on what they would lose if the project vanished, show who the paying segment is.

                ## Milestones
                1. Ten active users interviewed for twenty to thirty minutes each.
                2. Each interview noted with the user's role, how they use the project and what it replaced.
                3. Answers to what they would do if the project shut down recorded word for word.
                4. A short list of the users most likely to pay and why.

                ## Notes
                Ask about past behaviour and real costs, not whether they would hypothetically pay. People are generous with hypothetical money.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes from ten user interviews exist with a written summary naming the segment most likely to pay."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick the twenty most active users from your data"
                - "Email them asking for a short call about how they use the project"
                - "Ask each one what they would do if the project shut down"
                - "Hold one call with an existing user each month after the first ten @recurring(monthly:9)"
            - name: Reading retention cohorts for a small product
              description: |-
                ## Purpose
                Total users only goes up, which is why it flatters side projects. A weekly or monthly cohort chart shows whether people who arrive keep coming back, and it is the single best early signal that the project could carry a company.

                ## Milestones
                1. Users grouped by the week or month they signed up.
                2. The share of each group still active after one, four and twelve weeks charted.
                3. The point where the curve flattens, if it does, identified.
                4. One change to onboarding or the product chosen to raise early retention.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cohort retention chart with at least eight cohorts exists and a written note says whether and where the curve flattens."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read one guide on cohort retention analysis"
                - "Build a cohort table from signup dates and activity events"
                - "Chart retention at one, four and twelve weeks"
                - "Update the cohort chart with the latest month @recurring(monthly:7)"
            - name: Company finance basics for builders
              description: |-
                ## Purpose
                Engineers and analysts who can model anything at work often have never read a profit and loss for their own venture. A few hours on revenue, gross margin, burn and runway lets you talk to accountants, investors and buyers in their terms and spot problems your dashboard hides.

                ## Milestones
                1. The difference between revenue, gross margin and profit explained in your own words.
                2. Your project's last three months recast as a simple profit and loss.
                3. Gross margin calculated after hosting, payment fees and third-party API costs.
                4. Months of runway worked out for a scenario where you go full time.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A three-month profit and loss and a gross margin figure for the project exist, with a full-time runway scenario."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a beginner's guide to small company accounts"
                - "Recast the last three months as a profit and loss"
                - "Calculate gross margin after every variable cost"
                - "Model runway if you replaced your salary with savings"
            - name: Copywriting for the home page and pricing page
              description: |-
                ## Purpose
                Home pages for hobby products are usually written for other builders: a list of features and the tech stack. Learning to write for the person who pays, in their words and around their problem, often lifts conversion more than any feature you could ship this month.

                ## Milestones
                1. Phrases from user interviews and feedback collected into a swipe file.
                2. A headline that names the customer's problem, tested against two alternatives.
                3. A pricing page that explains each plan in terms of outcomes, not limits.
                4. Signup or trial conversion compared for four weeks before and after.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A rewritten home and pricing page is live and four weeks of before and after conversion figures are recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Copy twenty phrases users have used about their problem"
                - "Draft three headlines built from those phrases"
                - "Rewrite the pricing page around outcomes for each plan"
                - "Compare conversion four weeks after the change"
            - name: Self-serve docs that cut support emails
              description: |-
                ## Purpose
                Every repeated support email steals an evening from building. A small set of answers to the questions users ask most, linked from inside the product, is one of the few things that lets a part-time founder serve more customers without more hours.

                ## Milestones
                1. The ten most common support questions from the last three months listed.
                2. A short help article written for each, with screenshots where useful.
                3. Help links placed in the product where each question tends to arise.
                4. Support email volume compared for the month before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten help articles are live and linked in the product, with monthly support volume measured before and after."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count the most common questions in your support inbox"
                - "Write a help article for each of the top ten"
                - "Link each article from the screen where the question comes up"
                - "Compare support volume a month later"
            - name: Case studies of side projects that became companies
              description: |-
                ## Purpose
                Plenty of well-known software companies began as a tool someone built for themselves, and their founders have written candidly about the transition. Studying how a dozen of them decided when to go full time, how they priced and what they got wrong gives you patterns no general startup advice offers.

                ## Milestones
                1. Twelve founder accounts collected from interviews, talks or posts.
                2. For each, the revenue or user level at which they went full time noted.
                3. Common mistakes and turning points summarised on one page.
                4. Two or three lessons chosen to apply to your own project.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of twelve side project transitions exists with at least two lessons applied to your plan."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List twelve companies that started as someone's side project"
                - "Find a founder interview or post about each transition"
                - "Read one side project transition story and add notes @recurring(monthly:15)"
                - "Pick two lessons to apply and add them to your plan"
            - name: Open-source licensing and commercial models
              description: |-
                ## Purpose
                If your project is open source, the licence you chose years ago shapes what you can sell now, and switching it later can anger the community that made it popular. Understanding open core, hosted service, dual licensing and support models before you pick one avoids a painful reversal.

                ## Milestones
                1. Your current licence's obligations summarised in plain language.
                2. Four commercial models compared with examples of projects using each.
                3. The model that fits your users and licence chosen, with reasons.
                4. A lawyer's view sought if the plan involves relicensing.

                ## Notes
                Relicensing usually needs permission from every copyright holder, which is another reason to clear contributor rights early.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A written comparison of four open-source business models ends with a chosen model and its implications for your licence."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Summarise your current licence's obligations in five lines"
                - "Find two projects using each of the four commercial models"
                - "Score each model against your users and licence"
                - "Record the chosen model and any legal questions it raises"
            - name: Turning on payments for a free hobby project
              description: |-
                ## Purpose
                The first charge is the moment a side project becomes a business, and it is where most stall, because asking existing users for money feels awkward. Choosing a simple paid plan, wiring up a payment provider and telling users clearly turns goodwill into the first real evidence of demand.

                ## Milestones
                1. One paid plan defined with a price and what it adds over free.
                2. A payment provider account set up in a name you can later transfer to a company.
                3. Checkout, receipts and cancellation tested end to end.
                4. The first paying customer confirmed in your revenue records.

                ## Notes
                Price higher than feels comfortable; it is easier to discount for early supporters than to raise prices on everyone later.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A paid plan is live with tested checkout and cancellation, and at least one real customer has paid."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Decide what the paid plan adds and write it in one sentence"
                - "Set a price and note the reasoning"
                - "Integrate a payment provider and test checkout and cancellation"
                - "Email your most active users to tell them the paid plan exists"
            - name: Hardening hobby code for paying customers
              description: |-
                ## Purpose
                Code that was fine for you and a few friends may have no backups, plain-text secrets and an admin panel anyone can find. Before strangers trust you with payments and data, a focused pass on security, backups and error handling protects them and you.

                ## Milestones
                1. Secrets moved out of the codebase into environment variables or a secrets manager.
                2. Automated daily backups running and one restore tested.
                3. Dependencies updated and a vulnerability scan passing.
                4. Error monitoring in place with alerts for new error types.
                5. Authentication and admin routes reviewed against a common web security checklist.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Secrets are out of the code, backups run daily with a tested restore, dependencies pass a scan and error monitoring is live."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Search the repository history for committed secrets and rotate any found"
                - "Set up automated daily backups and test one restore"
                - "Run a dependency vulnerability scan and fix the critical findings"
                - "Add error monitoring with alerts for new errors"
            - name: Feature kill list before scaling
              description: |-
                ## Purpose
                Years of weekend tinkering leave a side project with features only you use, each one adding support load and slowing every change. Cutting the ones nobody relies on before you put more time in makes the product easier to explain, sell and maintain.

                ## Milestones
                1. Every feature listed with how many users touched it in the last ninety days.
                2. Features used by under five percent of active users marked as candidates to remove.
                3. Users of each candidate told in advance, with an alternative where possible.
                4. At least three features removed and the code deleted.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A usage-ranked feature list exists and at least three low-use features have been removed after notice to their users."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every feature and pull its ninety-day usage"
                - "Mark the features used by under five percent of users"
                - "Email the users of each feature you plan to remove"
                - "Remove the code and update the docs"
            - name: Narrowing from hobby audience to one paying segment
              description: |-
                ## Purpose
                Students, hobbyists and professionals often all use the same side project, and trying to please all of them means none of them get a reason to pay. Choosing one segment to build and market for, based on who already pays or would, gives the company a clear first customer.

                ## Milestones
                1. Users grouped into three to five segments by role or use case.
                2. Each segment scored on size, willingness to pay and how well the product already fits.
                3. One segment chosen as the focus for the next six months.
                4. The home page and onboarding updated to speak to that segment.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of user segments ends with one chosen focus and an updated home page aimed at it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Group your users into segments from signup data and interviews"
                - "Score each segment on size, willingness to pay and fit"
                - "Choose one segment and write why"
                - "Rewrite the home page headline for that segment"
            - name: Terms, privacy policy and data handling for a real product
              description: |-
                ## Purpose
                Running with no terms and a vague privacy note becomes a liability once a hobby project takes money and stores customer data. Proper terms of service, a privacy policy that matches what you actually collect and a record of where data lives are the minimum before you sell to businesses or users in strict privacy regimes.

                ## Milestones
                1. A list of every type of personal data you collect, where it is stored and which suppliers process it.
                2. Terms of service and a privacy policy drafted from that list.
                3. The drafts reviewed by a lawyer or a reputable legal template service.
                4. Both documents published and linked from signup and checkout.

                ## Notes
                Privacy rules such as the GDPR in Europe can apply to you because of where your users live, not where you live. Have a professional check the documents if you sell into several regions.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Published terms and a privacy policy match a written data inventory and are linked from signup and checkout."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every piece of personal data the product collects"
                - "Record where each is stored and which supplier processes it"
                - "Draft terms and a privacy policy and have them reviewed"
                - "Review the policies against what the product now collects @recurring(yearly)"
            - name: Moving the project into a company entity
              description: |-
                ## Purpose
                Until the code, domain, payment account and customer contracts belong to a company, you personally carry the liability and investors or buyers have nothing clean to back. Assigning the assets from you to the new company, with a written record, is what turns a personal project into a business that can grow.

                ## Milestones
                1. A company formed, or an existing one chosen, to hold the project.
                2. An IP assignment from you to the company signed and filed.
                3. Domains, repositories, payment and app store accounts transferred into the company's name.
                4. Customers notified of the new legal entity where their contracts require it.
                5. The asset register updated to show the company as owner of everything.

                ## Notes
                Choosing where and how to incorporate belongs to its own area; this project is about getting the side project's assets into the company once it exists. A lawyer should draft the assignment.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed IP assignment exists and every asset on the register is held in the company's name."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask a lawyer to draft an IP assignment from you to the company"
                - "Sign the assignment and store it with the company records"
                - "Transfer each asset on the register into the company's name"
                - "Update payment and app store accounts with the company's details"
            - name: Full time, part time or sabbatical decision
              description: |-
                ## Purpose
                Quitting is not the only way to give the project more time. A four-day week, an unpaid sabbatical or a contract role with fewer hours can test the full-time question at lower risk, and comparing them side by side often reveals a better first step than resigning.

                ## Milestones
                1. Four options listed: stay as now, reduce hours, take a sabbatical, go full time.
                2. Each option costed for household income, savings drawn and hours gained.
                3. Your employer's policies on reduced hours and sabbaticals checked.
                4. A decision recorded with the readiness criteria it meets or misses.

                ## Notes
                The practical steps of resigning, notice periods and the first months after leaving have their own area. This project is about choosing the shape of the change.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of four time options ends in a recorded decision checked against your readiness criteria."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read your employer's policies on part-time work and sabbaticals"
                - "Cost each of the four options for income and savings"
                - "Estimate the project hours each option would free"
                - "Record the decision and the criteria it meets"
            - name: Funding route for the project as a company
              description: |-
                ## Purpose
                Growing on its own revenue means the project does not have to raise money, and doing so changes what success has to look like. Weighing staying self-funded, a small friends and angels round, a grant or an accelerator against your goals stops the default answer being whatever the last podcast recommended.

                ## Milestones
                1. Your personal goal for the company written down: lifestyle income, sale or large venture.
                2. Four funding routes compared on control, speed, obligations and fit with that goal.
                3. One route chosen for the next eighteen months.
                4. The first concrete step for that route scheduled.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of four funding routes against your stated goal ends in a chosen route and a scheduled first step."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write what you want the company to be in five years"
                - "Compare self-funding, angels, grants and accelerators on one page"
                - "Choose a route for the next eighteen months"
                - "Schedule the first step for the chosen route"
            - name: Pricing migration for early free users
              description: |-
                ## Purpose
                Users who adopted the project when it was free are your best advocates and your loudest critics once it starts charging. A grandfathering policy with a clear timeline, a discount for early supporters and plenty of notice keeps their goodwill while moving the business onto paid plans.

                ## Milestones
                1. Free users segmented by how active they are and how long they have been with you.
                2. A grandfathering policy chosen: permanent free tier, time-limited free use or a founder discount.
                3. An announcement drafted with at least thirty days' notice.
                4. Conversion to paid and churn tracked for the two months after the change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written grandfathering policy has been announced with at least thirty days' notice and two months of conversion and churn are recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Segment free users by activity and tenure"
                - "Choose a grandfathering policy and write its rules"
                - "Ask the agent to draft the announcement in your voice for you to edit"
                - "Track paid conversion and churn for eight weeks after"
            - name: Telling your employer about the side project
              description: |-
                ## Purpose
                Some contracts require you to disclose outside work, and in many workplaces a project found out about later looks worse than one disclosed early. Preparing the conversation, what you will say and what you will ask for in writing, protects both the relationship and your ownership.

                ## Milestones
                1. Your lawyer's view on whether and how to disclose recorded.
                2. A short written description of the project that shows it does not compete or use employer resources.
                3. The conversation held with your manager or HR.
                4. Any agreement or acknowledgement confirmed in writing and filed.

                ## Notes
                Start from the **Meeting notes** template. Ask for written confirmation; a friendly verbal yes from a manager who later leaves is worth little.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The disclosure conversation has taken place and a written acknowledgement or agreement from the employer is on file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check with your lawyer whether disclosure is required or wise"
                - "Write a one-paragraph description of the project for your employer"
                - "Book the conversation with your manager or HR"
                - "Send a follow-up email confirming what was agreed"
            - name: Announcing the change to existing users
              description: |-
                ## Purpose
                When a personal project becomes a company, users want to know whether it will still exist next year, who now holds their data and what changes for them. A planned announcement answers those questions before rumours do and is a good moment to win back lapsed users.

                ## Milestones
                1. The questions users are likely to ask listed with plain answers.
                2. An announcement post and email written covering the company, data, pricing and continuity.
                3. The announcement sent on a chosen date to all users.
                4. Replies answered within forty-eight hours and common questions added to the help pages.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The announcement has gone to all users on a set date and every reply received in the first week has been answered."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the ten questions users will ask about the change"
                - "Write the announcement covering company, data, pricing and continuity"
                - "Pick a send date after the company owns the assets"
                - "Answer every reply within forty-eight hours"
            - name: Two-week holiday sprint as a full-time trial
              description: |-
                ## Purpose
                You cannot know what full time on the project feels like from evenings alone. Spending two weeks of annual leave working on it as if it were your job tests your output, your motivation and how users respond to faster progress, before you give up a salary.

                ## Milestones
                1. Two weeks of leave booked and agreed with your household.
                2. A sprint goal and daily plan written before the first day.
                3. Hours, output and user response logged each day.
                4. A written review comparing the sprint with your usual weekly progress.

                ## Notes
                Keep at least a few days of real rest elsewhere in the year. The point is to test the work, not to burn your only break.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two-week full-time sprint has been completed with a daily log and a written review of what it showed."
                cadence: one-shot
                effort_hours_estimate: "70"
              tasks:
                - "Book two consecutive weeks of annual leave"
                - "Set a sprint goal and a plan for each day"
                - "Log hours, output and user reactions every evening of the sprint"
                - "Write a review comparing the sprint with a normal month"
            - name: First contractor for the side project
              description: |-
                ## Purpose
                A designer, a support helper or a part-time developer can double what a nights-and-weekends founder ships, but only if the work is scoped and the IP is clearly yours. Hiring one contractor for a defined piece of work is a low-risk test of whether you can manage others alongside a job.

                ## Milestones
                1. One piece of work scoped with a deliverable, deadline and budget.
                2. A contractor chosen after a paid trial task.
                3. A contract signed that assigns all IP to you or the company.
                4. The work delivered and a short review of how the arrangement went.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A contractor has delivered a scoped piece of work under a signed contract that assigns IP to you or the company."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page scope with deliverable, deadline and budget"
                - "Give two candidates a small paid trial task"
                - "Sign a contract that assigns all work to you or the company"
                - "Review the delivery and decide whether to continue"
            - name: One-year review of the project as a company
              description: |-
                ## Purpose
                Twelve months after making the side project official, it is worth checking honestly whether the company is doing what you hoped when you made the change. Comparing the year with your original thesis and criteria tells you whether to double down, adjust or reconsider.

                ## Milestones
                1. The original thesis, criteria and snapshot set beside the year's actual numbers.
                2. What went better and worse than expected listed.
                3. Your personal finances and wellbeing reviewed alongside the business.
                4. Three priorities for the second year written down.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written one-year review compares results with the original thesis and ends with three priorities for year two."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather the original thesis, criteria and snapshot"
                - "Pull the year's revenue, users and hours"
                - "Write what surprised you, good and bad"
                - "Set three priorities for the next twelve months"
            - name: Open-source maintainer turning a library into a company
              description: |-
                ## Purpose
                Maintainers of popular libraries often have thousands of users, a few companies depending on them and no income at all. Finding which of those companies would pay for hosting, support, features or a licence, without alienating the community, is the specific path from maintainer to founder.

                ## Milestones
                1. Companies using the library identified from issues, downloads and sponsors.
                2. Five of those companies interviewed about what they would pay for.
                3. A commercial offer defined that keeps the core project open.
                4. A governance note published so contributors know what stays free.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Five corporate users have been interviewed and a commercial offer plus a public governance note are written."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List companies that appear in issues, pull requests or sponsorships"
                - "Interview five of them about their dependency on the library"
                - "Triage new issues and label the commercial requests @recurring(weekly:tue)"
                - "Publish a note explaining what will stay free and open"
            - name: Newsletter or content side project becoming a business
              description: |-
                ## Purpose
                A newsletter, video channel or community built on evenings can reach tens of thousands of readers before it earns a salary. Turning it into a business means choosing between sponsorships, paid subscriptions, products and events, and protecting the publishing schedule that built the audience.

                ## Milestones
                1. Audience size, open or view rates and growth recorded for the last six months.
                2. Revenue options compared with estimates for your audience size.
                3. One revenue stream launched and its first month of income recorded.
                4. A publishing schedule kept without a missed issue for three months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One revenue stream is live with a month of income recorded and three months of issues published on schedule."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Record six months of audience size and engagement"
                - "Estimate income from sponsorships, subscriptions and products"
                - "Launch the strongest revenue stream"
                - "Publish the issue on your fixed day @recurring(weekly:thu)"
            - name: Consultant's internal tool becoming a product
              description: |-
                ## Purpose
                Consultants and freelancers often build a tool to speed up client work and then notice other practitioners want it. Turning it into a product means untangling it from client data and contracts and deciding whether the product will compete with or support your consulting income.

                ## Milestones
                1. Every client contract checked for clauses that give the client rights in tools you built.
                2. All client data and client-specific code removed from the product version.
                3. Five other practitioners trying the product.
                4. A plan for how the product and the consulting income will coexist for a year.

                ## Notes
                Client contracts sometimes assign everything made during an engagement to the client. Ask a lawyer if any contract is unclear.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Client rights are cleared, client data is removed and five outside practitioners are using the product."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Review each client contract for IP clauses about tools"
                - "Strip client data and client-specific code from the product"
                - "Offer the tool to five practitioners in your network"
                - "Write how you will split time between product and clients"
            - name: Side project built with a co-worker from the same employer
              description: |-
                ## Purpose
                Two colleagues building something together carries double the employer IP risk and a relationship that started at work, not as founders. Clearing both contracts and agreeing in writing who owns what, and who goes full time first, avoids the classic fight when one of you wants to quit and the other does not.

                ## Milestones
                1. Both employment contracts reviewed for IP and outside-work clauses.
                2. A written note of who built what so far.
                3. An interim agreement on ownership and decisions until a company is formed.
                4. A shared view on who would go full time first, and when.

                ## Notes
                The formal equity split and vesting belong to their own area. This project covers the interim agreement while you are both still employed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Both contracts are reviewed and a signed interim agreement covers ownership, decisions and the full-time order."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare both employment contracts' IP and outside-work clauses"
                - "List who built each part of the project so far"
                - "Draft an interim agreement on ownership and decisions"
                - "Agree who would go full time first and on what trigger"
            - name: Mobile app or browser extension side project as a business
              description: |-
                ## Purpose
                Apps and extensions live on platforms with their own developer accounts, review rules and payment cuts, and a personal developer account cannot simply be renamed to a company. Planning the account transfer, in-app payments and platform risk early avoids losing reviews and rankings when you incorporate.

                ## Milestones
                1. Each platform's rules on transferring an app or extension to an organisation account checked.
                2. The platform fees on in-app purchases set against your pricing.
                3. A company developer account opened and the transfer completed or scheduled.
                4. A plan for what you would do if a platform rejected an update or removed the listing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Transfer rules are documented, a company developer account exists and a platform risk plan is written."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read each store's guidance on transferring apps to an organisation"
                - "Calculate your margin after platform fees on each plan"
                - "Open a company developer account"
                - "Read new reviews and reply to the critical ones @recurring(monthly:22)"
            - name: Conflict of interest check for an industry side project
              description: |-
                ## Purpose
                Building a tool for the industry you work in is often how good side projects start, and also how they collide with an employer, its clients or confidential knowledge. A written check of where the project and your job overlap shows which risks to remove before customers arrive.

                ## Milestones
                1. Every overlap listed: shared customers, competing features, confidential knowledge, suppliers.
                2. Each overlap rated for likelihood and impact.
                3. A rule for each high risk, such as never selling to your employer's clients.
                4. A lawyer's review of any risk you cannot remove yourself.

                ## Notes
                Start from the **Risk register** template. Ideas formed from your employer's confidential information are the riskiest overlap of all.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk register lists every overlap with your job, each rated, with a rule or lawyer review for every high risk."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List where the project overlaps your employer's market and clients"
                - "Rate each overlap for likelihood and impact"
                - "Write a rule to contain each high risk"
                - "Send the unresolved risks to your lawyer"
            - name: Acquisition offer for the side project
              description: |-
                ## Purpose
                Small profitable software projects attract offers from marketplace buyers and competitors, sometimes before the founder has thought about selling. Knowing how such deals are usually valued, what due diligence involves and what you would want in return lets you answer an offer on your terms.

                ## Milestones
                1. How small software businesses are commonly valued, such as multiples of profit, researched from published marketplace data.
                2. Your own walk-away price and preferred terms written down.
                3. Records a buyer would ask for gathered: revenue, costs, traffic and code ownership.
                4. Any offer received evaluated with an adviser and the decision recorded.

                ## Notes
                Valuations vary widely; treat published ranges as background and get advice from a broker or lawyer on any real offer.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written walk-away price, a buyer-ready records folder and a recorded decision on any offer exist."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read published sale data for small software businesses"
                - "Write your walk-away price and the terms you would need"
                - "Gather twelve months of revenue, cost and traffic records"
                - "Discuss any real offer with an adviser before replying"
            - name: Clean IP chain for investors and buyers
              description: |-
                ## Purpose
                Investors and acquirers ask the same question: can you prove the company owns everything it sells. A folder that traces every line of code, design and content back to a signed assignment or a compatible licence turns that question into a twenty-minute review instead of a deal-delaying scramble.

                ## Milestones
                1. Your employer IP position, contributor letters and assignment to the company filed together.
                2. A dependency licence report generated and reviewed for incompatible licences.
                3. Third-party assets such as fonts, icons and images matched to their licences.
                4. A one-page summary of the IP chain written for a reviewer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An IP folder with a one-page summary traces every code, design and content source to an assignment or compatible licence."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the employer review, contributor letters and company assignment"
                - "Generate a licence report for every dependency"
                - "Match each font, icon and image to its licence"
                - "Write the one-page IP chain summary"
            - name: Spinning out with your employer's blessing
              description: |-
                ## Purpose
                Sometimes the employer does have a claim on the project, or the project grew from work you did for them. Negotiating a release, a licence or even an investment from the employer can turn a threat into a supporter, and it is far easier before the project has obvious value.

                ## Milestones
                1. The employer's likely interest in the project assessed with your lawyer.
                2. Options set out: full release, licence back, revenue share or employer investment.
                3. A proposal presented to the right decision maker.
                4. A signed release or agreement on file.

                ## Notes
                Never negotiate this without a lawyer. Get any agreement in writing and signed by someone with authority to bind the employer.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed release, licence or investment agreement from the employer covering the project is on file."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Assess with your lawyer what claim the employer might have"
                - "Lay out the release, licence, revenue share and investment options"
                - "Identify who at the employer can approve the agreement"
                - "Present the proposal and record the response"
            - name: Choosing one project from a portfolio of side projects
              description: |-
                ## Purpose
                Serial builders often have four or five small products, each earning a little and none getting enough attention. Comparing them on revenue, growth, effort and your own interest, then choosing one to make the company, concentrates scarce hours where they compound.

                ## Milestones
                1. Every live project listed with revenue, growth, hours and costs.
                2. Each scored on market size and how much you want to work on it for five years.
                3. One project chosen as the company and the others marked to keep, sell or shut.
                4. A plan for each non-chosen project carried out.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of all live projects ends with one chosen as the company and a recorded fate for each of the others."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every live project with its revenue, growth and hours"
                - "Score each on market size and your five-year interest"
                - "Choose the one to become the company"
                - "Review the remaining projects and retire one if it no longer earns its time @recurring(quarterly)"
            - name: Handbook so the product runs a month without you
              description: |-
                ## Purpose
                Products that only work while their founder watches are fragile for customers and unsellable to buyers. Writing down deployment, support, billing and incident steps so a contractor could run it for a month is the last step in turning a personal project into an asset.

                ## Milestones
                1. Deployment, rollback and backup restore steps written and tested by someone else.
                2. Support replies for the twenty most common cases saved as templates.
                3. Billing, refunds and renewals documented with who has access.
                4. A trial week where a contractor runs operations and notes every gap.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written handbook has been used by someone else to run the product for a week, with the gaps they found fixed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the deployment, rollback and restore steps"
                - "Save templates for the twenty most common support replies"
                - "Document billing, refunds and who has access to each account"
                - "Ask a contractor to run operations for a week and log gaps"
---

# Side Project to Company

This area is for the person with a day job and a side project that has started to earn attention, users or money, and who wants to know whether it deserves to become a company. It starts with foundations (an honest snapshot, your employment contract and IP position, an ownership map of every account, contributor sign-offs and full-time criteria written in advance), then the routines that keep a nights-and-weekends product alive, the skills a builder needs to run a business, the decisions about payments, hardening, legal pages, the company entity and going full time, dated moments like telling your employer and announcing the change to users, variants for open-source maintainers, newsletter writers, consultants and app makers, and finally specialist work on acquisition offers, a clean IP chain and spinning out with your employer's blessing.

What repeats is a Saturday shipping session, a weekly feedback triage and boundary check, a weekly hours log, a monthly traction review against your full-time criteria, monthly bookkeeping, a tax set-aside and a user update, and a quarterly keep, grow or shelve review. The **Metrics log**, **Month-end close**, **Operational checklist**, **Meeting notes** and **Risk register** templates pair with the traction review, the books, support coverage, the employer conversation and the conflict-of-interest check. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
