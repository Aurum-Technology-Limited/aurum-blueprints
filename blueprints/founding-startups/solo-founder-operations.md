---
id: founding-startups.solo-founder-operations
name: Solo Founder Operations
description: "Run a company on your own without it running you: every hat mapped, the right work automated or outsourced, cover for when you are away, and real accountability and company."
category: business
version: 1.0.0
tags: [founding-startups, solo-founder-operations, founder, solo-founder, outsourcing, automation, accountability, business-continuity]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - vendor
    - board-meeting
    - onboarding-plan
    - operational-checklist
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Solo Founder Operations
          description: "Running a company alone, choosing what to automate or outsource, staying accountable and avoiding the isolation of solo founding."
          projects:
            - name: Inventory of every hat the solo founder wears
              description: |-
                ## Purpose
                Most solo founders carry twenty or more distinct jobs, from answering refund requests to filing the annual return, and only see the ones that shout loudest. Writing every recurring job down, grouped by function, is the raw material for every later decision about what to automate, outsource or drop.

                ## Milestones
                1. A list of every recurring job in the company, grouped under product, sales, marketing, support, finance, legal and admin.
                2. Each job tagged with how often it happens and roughly how long it takes.
                3. Jobs that only you can do, by skill or by law, marked separately.
                4. The list saved where you will reopen it during planning.

                ## Notes
                Include the invisible jobs: renewing the domain, chasing a late invoice, updating the privacy policy. They are the ones that bite.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of at least twenty recurring company jobs, each with a function, frequency and time estimate."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Scroll the last month of calendar, inbox and bank feed and note every job they reveal"
                - "Group the jobs under seven functions from product to admin"
                - "Add a frequency and a time estimate to each job"
                - "Mark the jobs that only you can legally or practically do"
            - name: Two-week time audit by business function
              description: |-
                ## Purpose
                Ask a solo founder where their week goes and the answer is usually wrong by a third. Tracking two real working weeks against the functions from your hat inventory shows how many hours support, admin and context switching actually eat, and gives a baseline to measure every later change against.

                ## Milestones
                1. Ten working days logged in blocks of no more than thirty minutes.
                2. Every block tagged with one business function.
                3. Total hours per function and the share spent on work that earns or builds the product.
                4. The three biggest surprises written in a short paragraph.

                ## Notes
                A simple timer app or a paper sheet both work. Log as you go, not at the end of the day, or the numbers drift towards what you wish had happened.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten logged working days summarised as hours per business function, with the share spent on revenue and product work stated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick a time tracking method and set it up before tomorrow morning"
                - "Log every block of work for ten working days with its function"
                - "Total the hours per function at the end of the second week"
                - "Write down the three findings that surprised you most"
            - name: Single points of failure map for a one-person company
              description: |-
                ## Purpose
                In a solo company almost everything is a single point of failure, but some failures cost an afternoon and others cost the business: a lost phone holding the only two-factor codes, a payment processor tied to a personal email, a server only you can restart. Mapping them by impact tells you which three to fix first.

                ## Milestones
                1. Every system, account and process listed with what breaks if you are unreachable for a week.
                2. Each item scored for likelihood and impact on a simple scale.
                3. The top five risks given a named fix and a target date.
                4. At least two of the top five fixed and marked as done.

                ## Notes
                Start from the **Risk register** template. Recovery codes and account ownership are the usual top entries.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scored risk register of the company's single points of failure with the top five assigned fixes and two already completed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every account and system the company depends on in one sheet"
                - "Note what stops working if you vanish for a week, for each one"
                - "Score likelihood and impact and sort the list"
                - "Fix the two highest risks that take under an hour each"
            - name: Password manager with emergency access for the company
              description: |-
                ## Purpose
                If you are in hospital for a fortnight, nobody can pay the hosting bill, refund a customer or even post a status update unless they can get in. A company vault in a password manager, with recovery codes stored and a trusted person granted delayed emergency access, turns a crisis into an inconvenience.

                ## Milestones
                1. Every company login moved into one password manager vault.
                2. Two-factor recovery codes for critical accounts stored in the vault and on paper in a safe place.
                3. A trusted person granted emergency access with a waiting period.
                4. A one-page note telling that person what to do first.

                ## Notes
                Use the password manager's own emergency access feature rather than sharing a master password. Choose someone you trust with money and judgement, not only with keys.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All company logins sit in one vault, recovery codes are stored twice, and a named person holds tested emergency access."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a password manager that offers emergency access and create a company vault"
                - "Move the ten most critical company logins into the vault today"
                - "Print recovery codes for email, bank, domain and hosting and store them safely"
                - "Ask your emergency contact to test their access request @recurring(yearly)"
            - name: Company deadlines and renewals calendar
              description: |-
                ## Purpose
                With no finance team or office manager, statutory filings, tax returns, insurance renewals, domain expiries and annual software contracts all land on you, and missing one can mean penalties or a dead website. A single calendar of every fixed date, with reminders set weeks ahead, removes them from your memory.

                ## Milestones
                1. Every statutory filing, tax date and licence renewal listed with its due date.
                2. Domain, certificate, insurance and annual subscription renewals added.
                3. Each entry carrying a reminder at least three weeks before the date.
                4. Your accountant or company secretary asked to confirm nothing is missing.

                ## Notes
                Filing dates depend on your jurisdiction and year end. Take them from the company registry and tax authority, or from your accountant, not from memory.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared calendar holds every statutory, tax and renewal date for the next twelve months, each with a reminder three weeks ahead, confirmed by your accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the company's filing and tax dates on the registry and tax authority sites"
                - "Add domain, insurance and annual subscription renewal dates from your receipts"
                - "Set a reminder three weeks before every entry"
                - "Review the next quarter of deadlines and book time for each @recurring(quarterly)"
            - name: Where-everything-lives operating manual
              description: |-
                ## Purpose
                In a one-person company all the knowledge sits in one head, which means a contractor, an accountant or a stand-in has to ask you for everything. One short manual listing every system, where files live, who the suppliers are and how money moves gives anyone helping you a map in five minutes.

                ## Milestones
                1. A list of every tool with its purpose, plan and owner email.
                2. The folder structure for documents, contracts and finance described in a paragraph.
                3. Suppliers, advisers and key customers listed with contact details.
                4. The manual shared with your emergency contact and bookkeeper.

                ## Notes
                Keep it to two or three pages. A manual nobody reads because it is forty pages long is no better than none.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A manual of no more than three pages listing every tool, file location, supplier and adviser, shared with two named people."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the list of paid tools from your card statements"
                - "Write one line per tool on what it does and which email owns it"
                - "Describe where contracts, invoices and product files are stored"
                - "Share the finished manual with your bookkeeper and emergency contact"
            - name: Monthly budget for tools and outside help
              description: |-
                ## Purpose
                Solo founders swing between doing everything themselves to save money and signing up for every tool that promises to save time. Setting a monthly ceiling for software and outside help, tied to what an hour of your time is worth, makes each buy or hire a quick yes or no instead of a fresh debate.

                ## Milestones
                1. Current monthly spend on software and freelancers totalled.
                2. A working value for one hour of your time agreed with yourself.
                3. A monthly ceiling for tools and help written down.
                4. A rule for when spend above the ceiling is allowed.

                ## Notes
                A common rule of thumb: if outside help costs less per hour than half your working value and frees time for selling or building, it is usually worth trying.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written monthly ceiling for tools and outside help, with an hourly value for your time and an exception rule."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Total last month's software and freelancer spend from the bank feed"
                - "Decide the hourly value you will use for your own time"
                - "Write the monthly ceiling and exception rule in the operating manual"
                - "Compare actual tools and help spend against the ceiling @recurring(monthly:25)"
            - name: Choosing an outsourced bookkeeper and accountant
              description: |-
                ## Purpose
                Bookkeeping is the job solo founders most often keep too long, usually until the tax return arrives as a crisis. A bookkeeper who reconciles monthly and an accountant who handles year end and tax filings cost less than most founders expect and remove a whole category of worry.

                ## Milestones
                1. Three bookkeepers or firms that work with startups shortlisted.
                2. Each asked the same questions on price, software, turnaround and what they need from you.
                3. One chosen and an engagement letter signed.
                4. Bank feeds and accounting software access handed over.

                ## Notes
                Start from the **Vendor** template. Ask whether they will flag tax deadlines and raise questions, not only enter transactions.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An engagement letter signed with a bookkeeper or accountant, with accounting software access set up and a monthly turnaround agreed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask two founders you know which bookkeeper they use and why"
                - "Shortlist three providers and send each the same five questions"
                - "Choose one and sign the engagement letter"
                - "Give the chosen provider access to bank feeds and the accounting software"
            - name: Solo founder stop-doing list
              description: |-
                ## Purpose
                Every hour you spend on a task that does not move revenue or product is an hour nobody else will cover. Choosing five things to stop outright, such as a weekly newsletter nobody opens or a social channel that brings no customers, frees time faster than any tool.

                ## Milestones
                1. The time audit reviewed for low-value recurring work.
                2. Five activities chosen to stop, each with a one-line reason.
                3. Anyone affected, such as subscribers or a partner, told.
                4. A check after four weeks on whether anything was missed.

                ## Notes
                If you cannot bring yourself to stop something, pause it for a month and see whether anyone notices.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Five recurring activities stopped or paused, recorded with reasons, and reviewed after four weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Highlight recurring work in your time audit that earned nothing last month"
                - "Pick five activities to stop and write a reason beside each"
                - "Send a short note to anyone who will notice the change"
                - "Check in four weeks whether any stopped activity needs to return"
            - name: Monthly board meeting with yourself
              description: |-
                ## Purpose
                Without a co-founder or board, nobody asks a solo founder the awkward questions, and drift can go on for months. Writing a short monthly report as if to a sceptical board, and sending it to one outside reader, forces you to look at the numbers, the plan and the gap between them.

                ## Milestones
                1. A one-page report format with metrics, wins, misses, risks and next month's three priorities.
                2. A fixed date each month blocked for writing it.
                3. One outside reader, such as an adviser or investor, agreed to receive it.
                4. Three consecutive monthly reports sent.

                ## Notes
                Start from the **Board meeting** template. Keep the misses section honest: it is the part the outside reader will learn most from.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly one-page reports written to the same format and sent to a named outside reader."
                cadence: rolling
              tasks:
                - "Draft the one-page report headings and save them as a reusable document"
                - "Ask one adviser or investor whether they will read a monthly page"
                - "Write and send the monthly self-board report @recurring(monthly:3)"
                - "Compare last month's three priorities against what actually happened"
            - name: Monthly close with the outsourced bookkeeper
              description: |-
                ## Purpose
                Handing over the books only works if receipts, invoices and odd transactions reach the bookkeeper on time each month. A short fixed routine of sending documents, answering queries and reading the finished accounts keeps the numbers current and catches problems while they are still small.

                ## Milestones
                1. A shared folder where receipts and invoices land automatically or weekly.
                2. A fixed monthly date for the bookkeeper's queries and your answers.
                3. The finished monthly profit and loss and balance sheet read within a week of closing.
                4. Three monthly closes completed on time in a row.

                ## Notes
                Forward receipts by email as they arrive rather than saving a shoebox for the end of the month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly closes finished by the agreed date, with queries answered within two working days."
                cadence: rolling
              tasks:
                - "Set up an email address or folder that forwards receipts straight to the bookkeeper"
                - "Agree the monthly close date and query turnaround with the bookkeeper"
                - "Answer the bookkeeper's queries and upload missing receipts @recurring(monthly:8)"
                - "Read the closed accounts and note any line that looks wrong"
            - name: Twice-daily customer support triage
              description: |-
                ## Purpose
                Support pings arriving all day can shred a solo founder's focus, but slow replies lose customers. Checking the queue at two fixed times, with an auto-reply that sets expectations and a rule for what counts as urgent, keeps customers happy without letting support run the day.

                ## Milestones
                1. One support inbox or help desk receiving every channel.
                2. An auto-reply stating your reply window and how to flag an outage.
                3. Two fixed triage times each working day written in the calendar.
                4. A median first reply time measured over one month.

                ## Notes
                Define urgent narrowly: the product is down, a payment failed or data is wrong. Everything else waits for the next triage slot.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All support arrives in one place, is handled at two fixed daily times, and the median first reply over a month is under one working day."
                cadence: rolling
              tasks:
                - "Route email, chat and social messages into one support inbox"
                - "Write an auto-reply that states your reply window and the urgent route"
                - "Clear the support queue at the two set triage times @recurring(daily)"
                - "Review response times and repeat questions each Friday @recurring(weekly:fri)"
            - name: Weekly admin block for a one-person company
              description: |-
                ## Purpose
                Admin done in scraps between calls never ends, and it interrupts the work that grows the company. Gathering invoices, filing, forms, renewals and small decisions into one fixed half-day a week means the rest of the week stays clear, and nothing waits more than seven days.

                ## Milestones
                1. One half-day each week blocked for admin and protected from calls.
                2. A running admin list where small jobs are parked during the week.
                3. A standard checklist for the block covering invoices, filing and the deadline calendar.
                4. Four weeks in a row where the admin list is cleared in the block.

                ## Notes
                Choose your lowest-energy half-day for this. Admin needs care but not your best thinking.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A protected weekly admin half-day has cleared the running admin list in four consecutive weeks."
                cadence: rolling
              tasks:
                - "Pick the half-day for admin and block it as recurring in the calendar"
                - "Create a single running list where small admin jobs are parked"
                - "Clear the admin list using the standard checklist @recurring(weekly:wed)"
                - "Move any job that survives two blocks into a proper project"
            - name: Monthly automation health check
              description: |-
                ## Purpose
                Automations break silently: an expired token stops invoices syncing, a changed form field drops new leads, and a solo founder finds out weeks later from an annoyed customer. A short monthly check of every automation, with failure alerts sent to one place, catches breaks before customers do.

                ## Milestones
                1. Every automation listed with its trigger, its purpose and where failures are reported.
                2. Failure notifications routed to one inbox or channel you read daily.
                3. Each automation tested end to end once a month.
                4. Broken or unused automations fixed or switched off.

                ## Notes
                Name each automation after what it does for the business, not the tools it connects, so the list still makes sense in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of every automation exists, failures alert one inbox, and each automation has passed a monthly end-to-end test."
                cadence: rolling
              tasks:
                - "List every automation across your tools with its trigger and purpose"
                - "Send all automation failure alerts to one inbox"
                - "Run a test record through each automation and check the result @recurring(monthly:12)"
                - "Switch off automations that nobody has relied on for three months"
            - name: Bench of trusted freelancers for each outsourced skill
              description: |-
                ## Purpose
                When your one designer goes quiet or your developer takes a full-time job, a solo company can stall for weeks while you search. Keeping two vetted freelancers warm for each skill you buy, with rates and notes on file, means a replacement is one message away.

                ## Milestones
                1. Each outsourced skill listed with the freelancer you use now.
                2. A second vetted freelancer identified for every skill.
                3. Rates, availability, time zone and past work noted for each person.
                4. Every backup given at least one small paid task.

                ## Notes
                A small paid test task tells you more than any portfolio. Pay for it properly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every outsourced skill has two vetted freelancers on file, and each backup has completed at least one paid task."
                cadence: rolling
              tasks:
                - "List each skill you buy in and the freelancer who does it now"
                - "Ask your current freelancers who they would recommend as a backup"
                - "Give each backup a small paid test task"
                - "Check every freelancer's availability and rates are still current @recurring(quarterly)"
            - name: Weekly accountability partner check-in
              description: |-
                ## Purpose
                Left alone, most founders slip on the tasks they dread, like sales calls or price rises, because nobody notices. A thirty-minute weekly call with one other founder, where each states three commitments and reports on last week's, adds the gentle pressure a co-founder would.

                ## Milestones
                1. One accountability partner agreed, ideally another solo founder at a similar stage.
                2. A fixed weekly slot and a simple shared commitments document.
                3. Eight weekly check-ins held with commitments recorded.
                4. A review after two months of how many commitments were kept.

                ## Notes
                One partner, not a group: groups are a separate thing. Swap partners if either of you stops turning up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly check-ins held with one partner, each recorded with three commitments and last week's outcomes."
                cadence: rolling
              tasks:
                - "Message two solo founders you respect and ask one to be your accountability partner"
                - "Set up a shared document with columns for commitments and outcomes"
                - "Hold the thirty-minute check-in and log three commitments @recurring(weekly:mon)"
                - "Count kept commitments after eight weeks and adjust the format"
            - name: Quarterly subscription and tool spend audit
              description: |-
                ## Purpose
                Tools pile up in a solo company: a trial that became a plan, two products doing the same job, seats for a contractor who left. A quarterly sweep of every subscription against what you actually used usually finds money to cancel and logins to close.

                ## Milestones
                1. Every recurring software charge listed from bank and card statements.
                2. Each one marked keep, downgrade, switch to annual or cancel.
                3. Cancelled tools' data exported before the account closes.
                4. The saving recorded against your tools budget.

                ## Notes
                Check whether a tool holds customer data before cancelling; you may have a duty to delete or export it properly.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly list of every subscription with a keep, downgrade or cancel decision, and the quarter's saving recorded."
                cadence: cyclic
              tasks:
                - "Pull every recurring software charge from the last three months of statements"
                - "Mark each subscription keep, downgrade, annual or cancel"
                - "Export data from any tool before cancelling it"
                - "Repeat the subscription sweep and log the saving @recurring(quarterly)"
            - name: Quarterly cover drill from your written procedures
              description: |-
                ## Purpose
                Procedures nobody has tried to follow are guesses. Once a quarter, ask a freelancer, assistant or friend to carry out one real task using only your written notes, such as issuing a refund or deploying a fix, and fix every place they got stuck.

                ## Milestones
                1. One procedure chosen each quarter, starting with the most critical.
                2. Another person completes the task from the written steps alone.
                3. Every question they asked turned into an edit to the procedure.
                4. Four critical procedures drilled within a year.

                ## Notes
                Sit on your hands during the drill. If you explain a step out loud, it is missing from the page.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four critical procedures have each been carried out by someone else from the written steps, with the gaps fixed."
                cadence: cyclic
              tasks:
                - "Choose the first procedure to drill from your single points of failure map"
                - "Ask a freelancer or friend to run it from your notes while you watch"
                - "Rewrite every step they asked about"
                - "Pick and run the next procedure drill @recurring(quarterly)"
            - name: Weekly human contact plan against solo isolation
              description: |-
                ## Purpose
                Working alone for months, with only customers and screens for company, wears down judgement and mood in ways that are easy to miss. A deliberate weekly plan for time with other people, such as a coworking day, a lunch with a founder friend or a meetup, keeps you connected without relying on willpower.

                ## Milestones
                1. Two or three regular sources of in-person contact identified near you.
                2. At least one working day a week spent around other people.
                3. One social or professional conversation booked each week that is not a sales call.
                4. A monthly note on how connected you have felt.

                ## Notes
                If isolation tips into low mood that lasts more than a couple of weeks, talk to your doctor or a counsellor. That is not a failure of the plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight consecutive weeks, at least one working day was spent around others and one non-sales conversation was held."
                cadence: rolling
              tasks:
                - "Find two coworking spaces, libraries or cafes near you where people work"
                - "Book a weekly coworking day in the calendar"
                - "Arrange one coffee, lunch or call with someone outside your customers @recurring(weekly:thu)"
                - "Note once a month how connected you have felt"
            - name: Quarterly solo planning day away from the desk
              description: |-
                ## Purpose
                Day-to-day work fills every hour a solo founder has, so the big questions about direction, pricing and what to drop never get proper attention. A full day each quarter, away from your usual desk with notifications off, gives room to review the last three months and choose the next three priorities.

                ## Milestones
                1. One day each quarter blocked well ahead and treated as unmovable.
                2. A short agenda covering numbers, customers, energy and the next quarter's priorities.
                3. Three priorities for the coming quarter written down.
                4. The priorities shared with your accountability partner or adviser.

                ## Notes
                A library, a train ride or a borrowed room all work. The change of place matters more than the venue.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A planning day held each quarter, ending with three written priorities shared with an outside person."
                cadence: cyclic
              tasks:
                - "Block the next four quarterly planning days in the calendar"
                - "Write a one-page agenda for the day"
                - "Hold the planning day and record three priorities @recurring(quarterly)"
                - "Send the priorities to your accountability partner"
            - name: Writing procedures a stranger can follow
              description: |-
                ## Purpose
                Delegation, automation and holiday cover all depend on procedures, and most founders write them as reminders to themselves, full of skipped steps. Learning to write short, numbered procedures with screenshots and a clear finish line is the skill that makes every later handover possible.

                ## Milestones
                1. A standard procedure format with purpose, trigger, steps, finish line and owner.
                2. Five procedures written for the most frequent jobs in your hat inventory.
                3. Each procedure under one page with screenshots where screens are involved.
                4. One procedure tested by someone who has never done the task.

                ## Notes
                Record a screen video while doing the task, then write the steps from the video. It catches the clicks you no longer notice.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Five one-page procedures in a standard format exist, and one has been followed successfully by someone new to the task."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Create a procedure format with purpose, trigger, steps and finish line"
                - "Record your screen while doing the most frequent task in your inventory"
                - "Write five procedures from screen recordings"
                - "Ask someone new to follow one procedure and note where they stop"
            - name: No-code automation fundamentals
              description: |-
                ## Purpose
                Hours disappear into copying data between tools: form to spreadsheet, payment to accounts, signup to welcome email. Learning the basics of triggers, actions, filters and error handling in a no-code automation tool lets you remove that copying yourself, without waiting for a developer.

                ## Milestones
                1. The core ideas of triggers, actions, filters and error paths understood through one short course or tutorial.
                2. Three repetitive data transfers identified from your time audit.
                3. Each of the three automated and running for two weeks without a silent failure.
                4. The automations added to your automation list.

                ## Notes
                Start with workflows where a mistake is cheap to undo. Leave anything that moves money or deletes data until you have more practice.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three repetitive data transfers automated and running for two weeks without an unnoticed failure."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Complete one beginner tutorial for a no-code automation tool"
                - "Pick three copy-and-paste jobs from your time audit"
                - "Build the first automation with a failure notification"
                - "Run the three automations for two weeks and check every output"
            - name: Writing a delegation brief for freelancers
              description: |-
                ## Purpose
                Most bad freelance work starts with a vague brief, and solo founders often conclude outsourcing does not work when the real fault was the handover. A one-page brief covering outcome, context, constraints, examples, deadline and how success is judged gets better work at the first attempt.

                ## Milestones
                1. A reusable one-page brief with outcome, context, constraints, examples, deadline and acceptance test.
                2. Two recent pieces of outsourced work reviewed against what the brief left out.
                3. Three briefs written using the new format.
                4. Fewer revision rounds on those three jobs than on the previous ones.

                ## Notes
                Say what done looks like in a way the freelancer could check without you. That one line saves most revision rounds.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three freelance jobs briefed with the one-page format, each needing fewer revision rounds than the solo founder's previous average."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft a one-page brief format with an acceptance test section"
                - "Review two past freelance jobs for what the brief missed"
                - "Use the new format for the next three jobs you outsource"
                - "Count revision rounds and compare with earlier jobs"
            - name: Decision journal for deciding alone
              description: |-
                ## Purpose
                Without a co-founder to argue with, solo founders make big calls in their heads and later cannot tell good judgement from luck. Writing each significant decision down with the options, the reasoning and what you expect to happen, then checking back months later, sharpens judgement over time.

                ## Milestones
                1. A simple journal format: date, decision, options, reasoning, expected outcome, review date.
                2. Every decision above an agreed size, such as spend or a hire, logged before acting.
                3. Ten decisions logged.
                4. The first five reviewed against what actually happened.

                ## Notes
                Write the expected outcome as something checkable, such as a number by a date, or the review teaches you nothing.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Ten significant decisions logged before acting, and five reviewed against their actual outcomes."
                cadence: rolling
              tasks:
                - "Set up the decision journal with six columns"
                - "Agree the size threshold above which a decision must be logged"
                - "Review decisions whose review date has passed @recurring(monthly:18)"
                - "Note any pattern in where your predictions were wrong"
            - name: Reading your own management accounts
              description: |-
                ## Purpose
                Outsourcing the bookkeeping does not outsource the understanding, and a solo founder who cannot read a profit and loss, balance sheet and cash flow statement is flying on the bank balance alone. Learning the handful of lines that matter for your business makes each monthly close a ten-minute check rather than a mystery.

                ## Milestones
                1. The difference between profit, cash and receivables explained in your own words.
                2. The ten lines that matter most in your accounts identified with your bookkeeper.
                3. Three monthly sets of accounts read and questions sent back.
                4. A short note of what each key line tells you.

                ## Notes
                Ask your bookkeeper or accountant to walk you through one month's accounts. Most are glad to, and it saves them queries later.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The founder can explain the ten key lines of the company's accounts and has sent questions back on three monthly closes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your bookkeeper for a thirty-minute walk through last month's accounts"
                - "Write down the ten lines that matter most for your business"
                - "Read the next three monthly accounts and send at least one question each time"
                - "Summarise in a paragraph what each key line tells you"
            - name: AI assistant prompt library for repeat work
              description: |-
                ## Purpose
                Every week brings the same kinds of writing: support replies, proposal drafts, release notes, invoice reminders. A small library of tested prompts with your tone, facts and examples built in turns an AI assistant into a reliable first-draft writer, while you keep the final check.

                ## Milestones
                1. Ten repeat writing jobs identified from your time audit.
                2. A tested prompt for each, including tone, facts to use and an example of good output.
                3. A rule written for what must always be checked by you before sending.
                4. Time saved per week estimated after a month of use.

                ## Notes
                Never paste customer personal data or secrets into a tool whose data terms you have not read.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten tested prompts saved in one library with a written review rule, and weekly time saved estimated after a month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List ten writing jobs you repeat at least monthly"
                - "Ask the agent to draft a prompt for each with your tone and an example"
                - "Test each prompt on three real cases and edit it"
                - "Write the rule for what you always check before anything is sent"
            - name: Scoping and pricing freelance work fairly
              description: |-
                ## Purpose
                Design, development, copy and admin help usually come from many different people, and paying by the hour for vague work tends to cost the most. Learning when to fix a price, when to pay a day rate and how to split a job into small milestones protects your budget and keeps good freelancers happy.

                ## Milestones
                1. Typical rates for your three most-bought skills gathered from at least two sources.
                2. A simple rule for fixed price versus time-based work.
                3. A standard milestone and payment schedule for jobs over a set value.
                4. One job scoped and agreed using the new approach.

                ## Notes
                Pay small invoices quickly. A solo company known for paying on time gets first call on busy freelancers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written rule for fixed and time-based pricing, a standard milestone schedule, and one job agreed using both."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Look up typical rates for the three skills you buy most"
                - "Write a one-paragraph rule for fixed price versus day rate"
                - "Draft a milestone payment schedule for larger jobs"
                - "Scope your next freelance job using the new rule"
            - name: Automate, outsource or keep scoring for every task
              description: |-
                ## Purpose
                With your hat inventory and time audit in hand, each recurring job can be sorted into automate, outsource, keep or drop. Scoring every job on hours per month, skill needed and risk if done badly turns a vague sense of overload into a ranked list of handovers.

                ## Milestones
                1. Every job in the hat inventory scored on hours, skill, risk and cost to hand over.
                2. Each job assigned to automate, outsource, keep or drop.
                3. The top three handovers chosen by hours freed per pound or dollar spent.
                4. The first handover started with a named tool or person.

                ## Notes
                Keep anything that holds the relationship with your best customers, and anything that teaches you what to build next, for now.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every recurring job is sorted into automate, outsource, keep or drop, with three handovers ranked and the first one under way."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add hours, skill, risk and handover cost columns to the hat inventory"
                - "Score every job and assign it automate, outsource, keep or drop"
                - "Rank the handovers by hours freed for the money spent"
                - "Start the top handover by booking a tool trial or a freelancer"
            - name: Hiring a virtual assistant for inbox and admin
              description: |-
                ## Purpose
                Inbox sorting, scheduling, data entry and supplier chasing are often the first jobs a solo founder can hand over. A part-time virtual assistant on a trial of a few hours a week, with clear procedures and limited access, can free five or more hours a week for the cost of a few customers.

                ## Milestones
                1. A list of tasks the assistant will and will not do, based on your scoring.
                2. Three candidates or agencies interviewed with the same paid test task.
                3. One assistant engaged on a four-week trial with access limited to what the tasks need.
                4. A trial review recorded with hours freed and quality.

                ## Notes
                Give delegated access through each tool's own sharing features, never your own password. Review what they can see at the end of the trial.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A virtual assistant has completed a four-week trial with limited access, and a written review records hours freed and a continue or stop decision."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the list of tasks an assistant would take on and the ones they would not"
                - "Prepare a paid test task based on a real inbox or scheduling job"
                - "Interview three candidates and run the test task with each"
                - "Review hours freed and quality at the end of the four-week trial"
            - name: Self-serve onboarding to cut founder hours per customer
              description: |-
                ## Purpose
                When every new customer needs a call from you to get started, growth turns straight into more of your hours. Moving the common setup steps into in-product guidance, a welcome email sequence and a short video lets most customers start alone, and saves your calls for the accounts that need them.

                ## Milestones
                1. Founder hours spent onboarding each new customer measured over a month.
                2. The setup questions asked in at least five onboarding calls listed.
                3. A welcome sequence and setup guide answering those questions live.
                4. Founder hours per new customer halved against the starting month.

                ## Notes
                Keep offering a call as an option for larger customers. The aim is to make it optional, not to remove the human touch.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Founder hours spent onboarding each new customer are half of the starting month's figure, with a self-serve guide and welcome sequence live."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Log the time you spend onboarding each new customer this month"
                - "List the questions that come up in every onboarding call"
                - "Write a welcome email sequence that answers those questions in order"
                - "Record a short setup video and link it from the welcome email"
            - name: Help centre that answers the top twenty questions
              description: |-
                ## Purpose
                Answering the same question for the fortieth time is paying for a missing help article. Writing clear answers to the twenty questions that make up most support volume, and linking them from the product and the auto-reply, cuts tickets and lets customers fix things at midnight without you.

                ## Milestones
                1. The twenty most frequent support questions ranked from the last three months of tickets.
                2. A short help article published for each.
                3. Articles linked from the support auto-reply and the relevant product screens.
                4. Monthly ticket volume compared before and after.

                ## Notes
                Write the article title as the customer asks the question, not as your product names the feature.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Twenty help articles are published and linked from the product and auto-reply, with monthly ticket volume compared before and after."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Export three months of tickets and tally the most frequent questions"
                - "Write the first five help articles from your best past replies"
                - "Link the articles from the support auto-reply"
                - "Add an article for any question asked three times in a month @recurring(monthly:22)"
            - name: Invoicing and payment reminders that run themselves
              description: |-
                ## Purpose
                Chasing late payments is the job solo founders most often put off, and every week of delay is cash the company does not have. Moving to card or direct debit payment where possible, and setting automatic reminders for invoices, means most money arrives without you writing a single awkward email.

                ## Milestones
                1. Every customer's payment method and terms listed.
                2. Automatic payment collection offered to customers who still pay by invoice.
                3. Reminder emails set at a fixed schedule before and after the due date.
                4. Average days to get paid compared before and after the change.

                ## Notes
                Agree with your bookkeeper how automatically collected payments flow into the accounts so nothing is double counted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Automatic invoice reminders run for every invoiced customer, and the average days to payment has been measured before and after."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every customer with their payment method and terms"
                - "Turn on automatic reminders in your invoicing tool for before and after due dates"
                - "Offer card or direct debit payment to invoiced customers"
                - "Check the overdue invoices list and call any over thirty days @recurring(weekly:tue)"
            - name: Booking link and meeting day rules
              description: |-
                ## Purpose
                Back-and-forth emails to find a time, and calls scattered across every day, quietly destroy a solo founder's building time. A booking link with fixed meeting windows on two or three days, buffers between calls and a daily cap protects the rest of the week for deep work.

                ## Milestones
                1. Meeting days and windows chosen, with at least two meeting-free days a week.
                2. A booking link with buffers and a daily cap set up.
                3. The link added to email signature, website and sales replies.
                4. A month of calendars checked against the rules.

                ## Notes
                Keep one hidden link for urgent customer issues or investors so the rules bend for the right people without collapsing.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A booking link enforcing set meeting windows and a daily cap is live, and a month's calendar shows at least two meeting-free days each week."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose your meeting days and the windows within them"
                - "Set up a booking link with buffers and a daily maximum"
                - "Add the link to your email signature and website"
                - "Check a month of calendars and tighten any rule that slipped"
            - name: Contract templates and e-signature workflow
              description: |-
                ## Purpose
                Drafting each customer agreement, freelancer contract and NDA from scratch costs hours of paperwork and carries unknown risks. A small set of lawyer-reviewed templates, sent and signed through an e-signature tool and filed automatically, makes paperwork a five-minute job.

                ## Milestones
                1. The contracts you send most often listed: customer terms, freelancer agreement, NDA.
                2. Each template reviewed by a lawyer for your jurisdiction.
                3. Templates loaded into an e-signature tool with fields for the variable parts.
                4. Signed contracts filed automatically to one folder.

                ## Notes
                Freelancer agreements should cover who owns the work produced. Ask your lawyer to check the intellectual property clause in particular.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Lawyer-reviewed templates for customer terms, freelancer work and NDAs are live in an e-signature tool, with signed copies filing to one folder."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the contracts you sent in the last six months"
                - "Ask a lawyer for a fixed quote to review three templates"
                - "Load the reviewed templates into an e-signature tool with variable fields"
                - "Set signed contracts to save automatically to the contracts folder"
            - name: First week fully offline as a solo founder
              description: |-
                ## Purpose
                Many solo founders have not had a real week off since starting, because there is nobody to cover. Planning one properly, with customers told, support covered by a stand-in or a clear auto-reply, payments running and an emergency-only contact route, proves the company can survive without you for seven days.

                ## Milestones
                1. A week chosen at least two months ahead and blocked.
                2. Customers and key partners told of the dates and the reduced service.
                3. A stand-in or a support plan with a documented urgent route in place.
                4. A handover checklist completed the day before leaving.
                5. Seven days taken with no routine work done.

                ## Notes
                Start from the **Operational checklist** template. Decide in advance what counts as an emergency, and give the stand-in the authority to deal with anything smaller.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A week off is completed with customers told in advance, a written handover in place and no routine work done during it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose a week at least two months away and block it now"
                - "Ask a freelancer or trusted person to cover urgent support"
                - "Write the handover checklist covering support, payments and emergencies"
                - "Email customers the dates and what service to expect"
            - name: Year-end accounts and tax filing pack
              description: |-
                ## Purpose
                Year end lands on a solo founder with no finance team, and a scramble for missing receipts and unexplained transactions costs fees and sleep. Building the pack your accountant needs in the weeks before the year closes, rather than after, makes the filing a short, cheap job.

                ## Milestones
                1. Your accountant's year-end checklist and deadlines obtained.
                2. Every bank account reconciled to the last day of the year.
                3. Missing receipts and unexplained transactions resolved.
                4. The pack sent to the accountant well ahead of the filing deadline.
                5. Filings confirmed as submitted.

                ## Notes
                Ask your accountant early about any decisions that must be made before year end, such as how you pay yourself. They are tax questions for a professional, not for a checklist.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The year-end pack is sent to the accountant at least four weeks before the filing deadline and the filings are confirmed as submitted."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Ask your accountant for their year-end checklist and dates"
                - "Reconcile every bank and card account to the year-end date"
                - "Chase and file every missing receipt"
                - "Book the year-end pack preparation two months before the year closes @recurring(yearly)"
            - name: Onboarding your first part-time contractor
              description: |-
                ## Purpose
                The first person to work regularly in a solo company changes how it runs, and a rushed start can sour a good hire in a fortnight. Planning their first two weeks, with access, procedures, a first small win and a check-in rhythm, sets the pattern for everyone who comes after.

                ## Milestones
                1. A contract signed covering scope, rate, hours and ownership of work.
                2. Accounts and access set up before the first day, limited to what the role needs.
                3. A first-week plan with one small task they can finish.
                4. Check-ins held at the end of week one and week two.
                5. A written note of what to change for the next contractor.

                ## Notes
                Start from the **Onboarding plan** template. Employment status rules vary by country; check with an accountant or lawyer that the arrangement is genuinely a contract.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A first contractor completes two weeks with a signed contract, limited access set up in advance, a first task done and two check-ins recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Send the contractor agreement for signature"
                - "Create their accounts with access limited to the role"
                - "Write a first-week plan with one task they can finish in two days"
                - "Hold a feedback check-in with the contractor @recurring(monthly:15)"
            - name: Answering the solo founder question in investor meetings
              description: |-
                ## Purpose
                Investors often ask a solo founder some version of what happens if you are hit by a bus, and who checks your thinking. Going into meetings with a short, evidenced answer covering your continuity plan, advisers, contractors and hiring plan turns a known objection into a sign of maturity.

                ## Milestones
                1. The common objections to solo founders listed from founders who have raised.
                2. A two-minute answer drafted with evidence: documented procedures, emergency access, advisers and hiring triggers.
                3. The answer practised aloud with an adviser or another founder.
                4. The answer used in at least three investor conversations and refined after each.

                ## Notes
                Do not apologise for being solo. State what you have put in place and what you will hire first when funded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written two-minute answer to the solo founder objection exists, practised with an adviser and refined after three investor conversations."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two founders who raised alone which objections they heard"
                - "Draft a two-minute answer citing your continuity plan and advisers"
                - "Practise the answer aloud with an adviser and take notes"
                - "Refine the answer after each investor meeting"
            - name: Cover plan for planned medical or parental leave
              description: |-
                ## Purpose
                Surgery, a new baby or a period of caring for someone are often known about weeks or months ahead. A written cover plan for those weeks, deciding what pauses, what runs automatically and who handles the rest, protects customers and lets you step away without the company quietly falling apart.

                ## Milestones
                1. Leave dates and a realistic estimate of your available hours set.
                2. Every recurring job marked pause, automate, delegate or minimal.
                3. A stand-in briefed with authority limits and a contact rule.
                4. Customers told of any service change at least two weeks ahead.
                5. A return plan for the first week back.

                ## Notes
                Assume you will have less capacity than you expect, especially after a birth or an operation. Plan for none and treat any hours as a bonus.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written leave cover plan assigns every recurring job, names a briefed stand-in and was shared with customers two weeks before leave began."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the leave dates and the hours you can realistically give"
                - "Mark every job in your hat inventory pause, automate, delegate or minimal"
                - "Brief the stand-in on their authority and when to contact you"
                - "Tell customers about the service change two weeks before you go"
            - name: Non-technical solo founder working with contract developers
              description: |-
                ## Purpose
                A non-technical founder relying on a freelancer or agency for the product carries a hidden risk: if they leave, nobody else understands the code. Owning the code repository, hosting and domain accounts yourself, insisting on documentation and getting an independent review keeps the product yours.

                ## Milestones
                1. Code repository, hosting, domain and app store accounts all in the company's name.
                2. Developers working in your repository with their own access, not the other way round.
                3. A short technical overview written by the developer and stored in the manual.
                4. An independent developer review of code quality and handover risk.

                ## Notes
                If any account is in the developer's name, transfer it now while the relationship is good. It is much harder in a dispute.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every product account is in the company's name, a technical overview exists, and an independent developer has reviewed handover risk."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every product account and check whose name each is in"
                - "Transfer any account held by the developer into the company's name"
                - "Ask the developer for a two-page technical overview of the system"
                - "Pay an independent developer for a half-day handover risk review"
            - name: Technical solo founder handing off marketing and sales admin
              description: |-
                ## Purpose
                Engineers who found alone often keep building because it is comfortable, while posts, outreach and CRM updates slide. Handing the repeatable marketing and sales admin, such as scheduling posts, list building and CRM hygiene, to a part-time freelancer keeps the pipeline moving while you still own the conversations.

                ## Milestones
                1. Marketing and sales jobs split into conversations you own and admin that can be handed off.
                2. A freelancer briefed for the admin tasks with written procedures.
                3. A weekly report from the freelancer on posts published and leads added.
                4. Your own hours on sales conversations tracked for a month.

                ## Notes
                Keep the customer conversations yourself in the early days. The handoff is the busywork around them, not the selling itself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A freelancer handles marketing and sales admin with a weekly report, and the founder's own sales conversation hours are tracked for a month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Split your marketing and sales tasks into conversations and admin"
                - "Write procedures for the three admin tasks that take most time"
                - "Brief a freelancer and agree a weekly report format"
                - "Track your own hours spent talking to prospects for a month"
            - name: Solo founder parent sick-day and school-holiday cover
              description: |-
                ## Purpose
                For a solo founder who is also a parent, a child's fever or a school closure means the whole company stops for the day. A pre-agreed plan of who covers childcare, which tasks drop first and what message customers get turns those days from emergencies into routine.

                ## Milestones
                1. A list of people who can help with childcare on short notice, with what each can offer.
                2. A short list of company tasks that can be dropped on a sick day.
                3. A prepared customer message and auto-reply for reduced availability.
                4. School holiday dates for the year added to the deadline calendar with cover arranged.

                ## Notes
                Talk the plan through with your partner or co-parent, so it is shared rather than assumed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written sick-day plan names childcare helpers, lists droppable tasks and holds a prepared customer message, with the year's school holidays covered."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List family, friends and paid carers who could help at short notice"
                - "Pick the company tasks that can safely drop on a sick day"
                - "Write a ready-to-send reduced availability auto-reply"
                - "Add this year's school holidays to the calendar and arrange cover"
            - name: Running the company while travelling or working abroad
              description: |-
                ## Purpose
                Solo founders often work from another country for weeks at a time, and the company only notices when a bank flags a login or a card stops working. Preparing devices, banking, phone numbers and time zone coverage before you travel keeps everything running from wherever you are.

                ## Milestones
                1. Banks and payment providers told of travel where they require it.
                2. Two-factor methods that work without your home phone number set up.
                3. Device backups, encryption and a remote wipe option checked.
                4. Customer-facing hours adjusted for the new time zone and announced.

                ## Notes
                Working from abroad for long periods can raise tax and immigration questions for you and the company. Check with an accountant before a stay of more than a few weeks.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Before departure, banking access, travel-proof two-factor methods, device backups and adjusted customer hours are all confirmed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Switch critical accounts to an authenticator app instead of text messages"
                - "Check device backups, disk encryption and remote wipe are on"
                - "Tell your bank and payment providers your travel dates where they ask"
                - "Update your support hours for the time zone you will be in"
            - name: Rebuilding operations after becoming the sole founder
              description: |-
                ## Purpose
                When a co-founder leaves, the remaining founder inherits half a company of jobs, accounts and relationships they never ran. Once the separation itself is settled, a structured rebuild of who does what, which accounts change owner and what to drop gets the company working again as a one-person operation.

                ## Milestones
                1. Every job, account and relationship your co-founder held listed.
                2. Ownership of each account transferred or closed.
                3. Each inherited job sorted into automate, outsource, keep or drop.
                4. Customers and suppliers who dealt with the co-founder introduced to their new contact.

                ## Notes
                This project assumes the legal and equity side of the departure is handled. Do the account transfers within days, not weeks.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All accounts the departing co-founder held are transferred or closed, and every inherited job has an owner or a drop decision."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every account and login your former co-founder controlled"
                - "Transfer or close each account and change shared passwords"
                - "Sort each inherited job into automate, outsource, keep or drop"
                - "Email customers and suppliers introducing their new contact"
            - name: Serving customers across time zones alone
              description: |-
                ## Purpose
                Serving customers in another time zone means a support queue that fills overnight and outages that happen while asleep. Setting published support hours, an overnight auto-reply, status page alerts and, where needed, a part-time cover person in the other region keeps service honest without wrecking your sleep.

                ## Milestones
                1. Customer locations mapped against your working hours.
                2. Support hours published in each main customer time zone.
                3. Uptime monitoring and a public status page with automatic incident notices.
                4. A decision recorded on whether paid overnight cover is needed.

                ## Notes
                Most customers accept slower replies if the hours are stated plainly and outages are announced quickly.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Published support hours, uptime monitoring and a status page are live, and an overnight cover decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Map where your customers are against your working hours"
                - "Publish support hours in each main customer time zone"
                - "Set up uptime monitoring with a public status page"
                - "Decide whether to pay for overnight cover and record why"
            - name: Security questionnaires as a one-person company
              description: |-
                ## Purpose
                Larger customers send security and vendor questionnaires that assume an IT department, and a solo founder can lose a deal by answering badly or slowly. A reusable answer bank backed by real controls, such as encryption, access logs, backups and a continuity plan, lets you answer honestly in hours instead of weeks.

                ## Milestones
                1. Two or three past or sample questionnaires collected.
                2. Real controls in place for the most asked areas: access, encryption, backups, incident response.
                3. An answer bank with an honest answer and evidence for each common question.
                4. A short security overview document ready to send ahead of a questionnaire.

                ## Notes
                Never claim a control you do not have. A clear plan with dates is better received than a false yes found later.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "An answer bank covering the common questionnaire areas, each answer matching a real control, and a security overview ready to send."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Collect two sample vendor security questionnaires from customers or online"
                - "List the questions you cannot honestly answer yes to today"
                - "Write the answer bank with evidence for each common question"
                - "Refresh the answer bank and security overview @recurring(yearly)"
            - name: Incapacity and succession plan with a lawyer
              description: |-
                ## Purpose
                If a solo founder dies or cannot work for months, the company may have nobody with legal authority to pay staff, serve customers or sell the business. A plan drawn up with a lawyer, covering who can act for the company, where instructions are kept and what you want to happen, protects customers, family and the value you built.

                ## Milestones
                1. A lawyer consulted on the options in your jurisdiction, such as a business power of attorney or a named director.
                2. A trusted person agreed as the one who would act, and briefed.
                3. A letter of wishes covering keep, sell or wind down written.
                4. The documents signed and stored where the trusted person can find them.
                5. Key person or business continuity insurance considered with a broker.

                ## Notes
                This is legal work. Use the project to prepare questions and gather documents, and let the lawyer decide the right instrument.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Signed incapacity documents and a letter of wishes are stored with a briefed trusted person, prepared with a lawyer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down who you would trust to act for the company if you could not"
                - "Book a consultation with a lawyer about business incapacity options"
                - "Draft a letter of wishes on keeping, selling or winding down the company"
                - "Store the signed documents and tell the trusted person where they are"
            - name: Fractional executives for finance and marketing
              description: |-
                ## Purpose
                Past a certain size a solo company needs senior judgement, not only extra hands: a finance lead to plan cash and pricing, or a marketing lead to set strategy. A fractional executive for a few days a month gives that judgement at a fraction of a full-time salary, while you stay the only employee.

                ## Milestones
                1. The decisions you most need senior help with listed.
                2. The role chosen and a scope of days per month and outcomes written.
                3. Three fractional candidates met and references checked.
                4. One engaged on a three-month trial with outcomes reviewed at the end.

                ## Notes
                Agree outcomes, not just days. A fractional lead who attends calls but changes nothing is expensive company.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A fractional executive engaged on a three-month trial with written outcomes, and a continue or stop decision recorded at its end."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the five decisions you most wish you had senior help with"
                - "Write a scope for the fractional role with days per month and outcomes"
                - "Meet three candidates and check two references for each"
                - "Review the trial's outcomes at three months and decide"
            - name: Back office run by AI agents with human checks
              description: |-
                ## Purpose
                Experienced solo operators increasingly let software agents draft support replies, reconcile receipts, triage leads and prepare reports end to end. Designing which workflows agents may run, where you approve before anything is sent or paid, and how mistakes are caught lets one person run a back office that once needed several.

                ## Milestones
                1. Candidate workflows listed with their risk if an agent gets them wrong.
                2. Approval points set for anything that sends, pays, deletes or commits you.
                3. Two low-risk workflows running through an agent with logging.
                4. A monthly error review showing mistakes caught and fixes made.

                ## Notes
                Read each tool's data and privacy terms before connecting customer or financial data, and keep a human approval on anything irreversible.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two back-office workflows run through agents with logged actions and approval points, and a monthly error review has been completed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List five back-office workflows and the cost if each went wrong"
                - "Ask the agent to draft the steps and approval points for the two safest"
                - "Run both workflows with logging switched on for a month"
                - "Review the agent action log for errors and near misses @recurring(monthly:27)"
            - name: Trigger points for ending solo operation
              description: |-
                ## Purpose
                Staying solo can be a deliberate choice or simply drift, and the difference shows up when revenue, workload or risk outgrows one person. Writing down in advance the signals that would make you hire, bring in a partner or stay solo on purpose means you decide on evidence, not exhaustion.

                ## Milestones
                1. Your preference for staying small or building a team written in a paragraph.
                2. Three to five measurable trigger points set, such as revenue, support hours or missed deadlines.
                3. The first hire or partner you would bring in at each trigger named by role.
                4. The triggers reviewed at each quarterly planning day.

                ## Notes
                Being solo by choice is a legitimate model. The point is that the choice is made, not defaulted into.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three to five measurable triggers for ending solo operation are written down, each with the role you would add, and reviewed quarterly."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a paragraph on whether you want to stay small or build a team"
                - "Set three to five measurable triggers for adding people"
                - "Name the role you would add first at each trigger"
                - "Add the trigger review to your quarterly planning day agenda"
---

# Solo Founder Operations

This area is for the founder who is the whole company: product, sales, support, finance and admin, with nobody to hand the work to at five o'clock. It starts with foundations (mapping every hat you wear, a time audit, the single points of failure, emergency access and a deadline calendar), then the routines that keep a one-person company running, the skills of documenting, automating and delegating, the decisions about what to automate, outsource or keep, dated moments like your first week offline, variants for technical, non-technical, parent and travelling founders, and finally specialist work on succession, fractional executives and knowing when to stop being solo.

What repeats is a monthly board meeting with yourself, a monthly close with your bookkeeper, daily support triage, a weekly admin block, accountability and human-contact check-ins, and quarterly automation, tool spend, freelancer and cover drills. The **Risk register**, **Vendor**, **Board meeting**, **Onboarding plan** and **Operational checklist** templates pair with the failure map, the bookkeeper choice, the monthly self-review, your first contractor and the holiday handover. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
