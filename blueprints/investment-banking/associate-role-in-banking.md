---
id: investment-banking.associate-role-in-banking
name: Associate Role in Banking
description: "The associate job done well: owning the model and the deck, reviewing analyst work fast and fairly, handling client contact, keeping processes on their critical path and training the juniors behind you."
category: business
version: 1.0.0
tags: [investment-banking, associate-role-in-banking, knowledge-worker, manager, associate, deal-management, review, people-management]
author: Aurum Technology
starter_structure:
  templates:
    - onboarding-30-60-90
    - operational-checklist
    - meeting-notes
    - one-on-one
    - development-plan
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Associate Role in Banking
          description: "Doing the associate job: checking analyst work, owning the model and the deck, client contact, running processes and training juniors."
          projects:
            - name: First 90 days in the associate seat
              description: |-
                ## Purpose
                New associates are judged in their first quarter on one question: can the VP stop rechecking the analyst's work and start trusting yours? A written 30, 60 and 90 day plan, agreed with your VP, turns that unspoken test into goals you can see and hit, from owning one model outright to running a client call on your own.

                ## Milestones
                1. A one-page plan with goals for day 30, day 60 and day 90, agreed in a short meeting with your VP.
                2. By day 30, one live deal model and deck where you are the named owner and final internal reviewer.
                3. By day 60, at least one client or counterparty call led by you with a written follow-up sent the same day.
                4. By day 90, a check-in with the VP recorded, with two strengths and two gaps named and a plan for the gaps.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Ask the VP what the last strong associate did in their first quarter; the answer is usually more useful than any formal expectations document.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A 30, 60 and 90 day plan exists, was agreed with your VP, and each of its three checkpoints is marked met or missed with a note."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft three goals each for day 30, day 60 and day 90 on one page"
                - "Book 20 minutes with your VP to agree the plan"
                - "Pick the live deal where you will be named model and deck owner first"
                - "Book the day 90 check-in with the VP now so it is not skipped"
            - name: Written list of what the associate owns on each deal
              description: |-
                ## Purpose
                Ownership gaps cause most of the late-night surprises on a deal: the VP assumed you were checking the footnotes, you assumed the analyst was, and nobody did. One short list per live deal, naming what you own, what the analyst owns and what stays with the VP, removes the guesswork and gives you something to point to when work falls between chairs.

                ## Milestones
                1. A one-page ownership list for each live deal covering the model, the deck, client data requests, adviser contact and scheduling.
                2. Each item marked associate, analyst or VP, with no item left blank.
                3. The list read and agreed by the VP on each deal, by email or in person.
                4. The list saved in the deal folder and updated when staffing changes.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live deal has a one-page ownership list, agreed by its VP, with each workstream assigned to a named person."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the ten or so recurring workstreams on your busiest live deal"
                - "Mark each one associate, analyst or VP based on how it works today"
                - "Send the list to the VP asking them to correct anything wrong"
                - "Repeat the list for each of your other live deals"
            - name: Working agreement with each analyst on your deals
              description: |-
                ## Purpose
                Analysts do their best work when they know how you want to receive drafts, when you will review them, and what counts as an emergency. A ten-minute conversation at the start of each staffing, captured in a few lines, prevents the friction that builds when an analyst sends a deck at 1am and hears nothing until noon.

                ## Milestones
                1. A short agreement for each analyst covering draft hand-off format, your review turnaround and how to reach you urgently.
                2. Agreed check-in times written down, with a fallback when you are travelling or in meetings.
                3. The analyst's other deals and known time off noted so conflicts are seen early.
                4. The agreement revisited once after the first two weeks and adjusted.

                ## Notes
                Keep it light. The point is shared expectations, not a contract. Ask the analyst what the best associate they have worked with did differently.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each analyst you work with has a written note of hand-off format, review turnaround and urgent contact route, reviewed once after two weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book ten minutes with each analyst currently staffed with you"
                - "Agree how drafts are handed over and how fast you will review them"
                - "Write the agreement in three to five lines and share it with the analyst"
                - "Set a reminder two weeks out to ask what is and is not working"
            - name: Single owner rule for the live deal model
              description: |-
                ## Purpose
                Two people editing the same operating model in parallel is the most common way a wrong number reaches a client. Naming one owner for the master model on each deal, with everyone else sending changes to that person, means there is always one file that is right and one person who can say why a number moved.

                ## Milestones
                1. One master model per deal, with the owner's initials in the file name and a version number.
                2. A rule agreed with the analyst and VP that changes go to the owner rather than into the file directly.
                3. Side models for sensitivities or scenarios clearly labelled as feeders, never edited as the master.
                4. A full week on each deal with no conflicting versions circulated.

                ## Notes
                The owner does not have to be you; often it is the analyst. What matters is that there is exactly one, and that you review the master before anything leaves the team.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each live deal has one named master model owner, and no two conflicting versions of the model circulate inside the team for a full week."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name the master model owner on each live deal in the team chat"
                - "Rename the current master with the owner's initials and a version number"
                - "Move side models into a clearly labelled feeder folder"
                - "Tell the VP how model changes now reach the master file"
            - name: Master deck file with a page owner for every slide
              description: |-
                ## Purpose
                Pitch and process decks grow to 60 pages with three people editing, and the classic failure is two versions of the valuation page in two different files the night before a meeting. A master file with a simple page register, showing who owns each page and its status, keeps the deck in one place and tells you at a glance what still needs work.

                ## Milestones
                1. One master deck per live deliverable, with a version number and date in the file name.
                2. A page register listing each slide, its owner and its status: drafted, reviewed, final.
                3. Page edits made in the master or in clearly named page files merged by one person.
                4. The register used to run the final internal turn on at least one deliverable.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each live deck has one master file and a page register showing owner and status for every slide, used for at least one final turn."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open the deck due soonest and list every page in a simple register"
                - "Assign each page an owner and a status"
                - "Agree with the analyst who merges page files into the master"
                - "Use the register to run the next internal turn on that deck"
            - name: Associate review checklist for analyst output
              description: |-
                ## Purpose
                Checking analyst work from memory means you catch different things each night, depending on how tired you are. A written checklist for models and decks, covering the checks that matter most in your group, makes your review consistent, faster, and teachable, because you can hand the same list to the analyst to run first.

                ## Milestones
                1. A model checklist covering balance checks, circular references, hard-codes, units, signs and links to source documents.
                2. A deck checklist covering numbers tied to the model, footnotes and sources, dates, logos, names and page flow.
                3. Both lists limited to one page each so they are actually used.
                4. The checklists shared with your analysts, who run them before sending you drafts.

                ## Notes
                Start from the **Operational checklist** template. Add a line every time an error slips past you; remove a line if it has not caught anything in three months.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One-page model and deck checklists exist, are shared with your analysts, and were run on the last three deliverables you signed off."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the last five errors you or a senior caught in analyst work"
                - "Turn each error into one checklist line for models or decks"
                - "Add the standard checks your group expects on every model"
                - "Share both checklists with your analysts and ask them to run them first"
            - name: Critical path for every live mandate
              description: |-
                ## Purpose
                Every live mandate has a few dates that everything else hangs on: a board meeting, a bid deadline, a filing, a launch. A one-page critical path per deal, working back from those dates to the model, the deck and the client inputs they depend on, is how an associate spots the slip three weeks before it becomes a crisis.

                ## Milestones
                1. The fixed external dates for each mandate written down and confirmed with the VP.
                2. The internal deliverables and client inputs each date depends on, with lead times.
                3. A latest-start date for each deliverable, worked back from its external date.
                4. Any date already at risk raised with the VP with a proposed fix.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each live mandate has a one-page critical path with external dates, dependencies and latest-start dates, and at-risk items have been raised with the VP."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the fixed external dates for your largest mandate on one page"
                - "List what must be ready for each date and who supplies it"
                - "Work back to a latest-start date for each item"
                - "Ask the agent to turn the critical path into a simple week-by-week view"
            - name: Client contact map and communication protocol
              description: |-
                ## Purpose
                Clients notice quickly when three people from the bank email the same CFO about the same thing on the same day. A contact map for each deal, showing who at the client and its advisers talks to whom at the bank, and what the associate can send without senior sign-off, keeps contact clean and protects the relationship the MD owns.

                ## Milestones
                1. A list of client and adviser contacts per deal with role, time zone and preferred channel.
                2. For each contact, the bank team member who leads communication with them.
                3. A short rule, agreed with the VP, for what the associate can send directly and what needs senior review first.
                4. The map updated each quarter or whenever the client team changes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live deal has a contact map naming the bank lead for each client and adviser contact, plus a written rule on what the associate may send directly."
                cadence: rolling
              tasks:
                - "List every client and adviser contact on your main deal with role and time zone"
                - "Mark which bank team member leads contact with each person"
                - "Agree with the VP what you can send to the client without review"
                - "Refresh every contact map against recent email traffic @recurring(quarterly)"
            - name: Personal associate playbook of methods and examples
              description: |-
                ## Purpose
                Associates who move fast tend to have a private folder of their best work: a clean process letter, a strong situation overview, a model layout seniors liked, a good kick-off agenda. Building that folder deliberately in your first months saves hours on every new deal and becomes the base for training the analysts behind you.

                ## Milestones
                1. A playbook folder with subfolders for models, decks, letters and emails, and checklists.
                2. At least ten strong examples saved, each with a one-line note on why it works.
                3. Client names and confidential figures removed so examples can be reused safely.
                4. The playbook used to start at least two new deliverables.

                ## Notes
                Respect your bank's information rules: keep the playbook on approved systems and sanitise anything that could identify a client.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sanitised playbook folder holds at least ten annotated examples and has been used to start two new deliverables."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Create the playbook folder structure on an approved drive"
                - "Save three examples of your own strongest recent work"
                - "Ask a respected VP for two documents they consider model examples"
                - "Strip client names and confidential numbers from every saved file"
            - name: Fifteen-minute morning check-in with the analyst
              description: |-
                ## Purpose
                Most rework on a deal comes from an analyst working hard for six hours on the wrong thing. A short check-in each working morning, covering priorities, blockers and what you need to see first, keeps the analyst pointed at what matters and gives you an early read on whether the day's deadlines will hold.

                ## Milestones
                1. A fixed time agreed with each analyst, kept to fifteen minutes.
                2. A three-line output from each check-in: today's priorities, blockers and first review time.
                3. Blockers that need the VP or client raised by you the same morning.
                4. Check-ins held on at least four mornings a week for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Morning check-ins with each analyst are held at least four days a week for four weeks, each ending with written priorities and a first review time."
                cadence: rolling
              tasks:
                - "Agree a fixed morning check-in time with each analyst"
                - "Hold the check-in and write down priorities, blockers and first review time @recurring(daily)"
                - "Raise any blocker that needs the VP before mid-morning"
            - name: Friday deal status note to the VP and MD
              description: |-
                ## Purpose
                Seniors running six deals rarely have time to ask how each one is going, and they hate finding out about a slip from the client. A short Friday note per deal, covering what moved, what is next, what is at risk and what you need from them, keeps them informed without meetings and builds the trust that gets you more client exposure.

                ## Milestones
                1. A fixed format for the note: done this week, next week, risks, decisions needed.
                2. Notes kept under 150 words per deal.
                3. Notes sent every Friday for a month, including quiet weeks.
                4. At least one risk raised early enough that the VP acted on it before it bit.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A status note under 150 words per live deal reaches the VP and MD every Friday for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Write a four-heading status note format and save it as a draft"
                - "Send the status note for each live deal to its VP and MD @recurring(weekly:fri)"
                - "Ask the VP after two weeks whether the note has the right detail"
            - name: Model change log with dated version sign-off
              description: |-
                ## Purpose
                A model that has changed thirty times in two weeks is hard to defend when a client asks why the valuation moved. A simple change log inside the master model, with each structural change dated, explained and signed off by you, means you can answer that question in a minute and catch unexplained changes before they spread into the deck.

                ## Milestones
                1. A change log tab in each master model with date, change, reason, changed by and reviewed by.
                2. Every structural change and every change to a key assumption logged.
                3. A weekly review of the log against the latest version, with your sign-off recorded.
                4. One client or senior question about a moved number answered from the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each master model carries a change log reviewed and signed off weekly, and every key assumption change in the last month is logged with a reason."
                cadence: rolling
              tasks:
                - "Add a change log tab to each master model"
                - "Brief the model owner on what counts as a loggable change"
                - "Review the change log against the latest model version and sign it off @recurring(weekly:wed)"
            - name: Weekly client call agenda and action list
              description: |-
                ## Purpose
                On most mandates there is a standing weekly call with the client and advisers, and the associate is the one who runs the agenda and owns the follow-up. An agenda sent a day ahead and an action list sent within two hours after the call keep every party moving and give the VP a record of who promised what.

                ## Milestones
                1. An agenda template with workstream updates, decisions needed and next steps.
                2. Agendas circulated the day before each call.
                3. Action lists with owner and due date sent within two hours of each call.
                4. Open actions carried forward and chased until closed.

                ## Notes
                Start from the **Meeting notes** template. Keep actions to named people, never to firms or teams, or nobody does them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four straight weeks, each client call had an agenda out the day before and an action list with owners out within two hours after."
                cadence: rolling
              tasks:
                - "Build a one-page agenda format with workstreams and decisions needed"
                - "Send the agenda for the weekly client call to all parties @recurring(weekly:tue)"
                - "Send the action list with owners and dates within two hours of the call"
                - "Chase any action more than a week overdue by name"
            - name: Monthly one-to-one with each analyst
              description: |-
                ## Purpose
                Day-to-day contact with an analyst is all deadlines and markups, so the conversations that build a good junior never happen unless they are booked. A monthly half hour with each analyst, away from live work, covering what they are learning, what is getting in the way and what they want next, is the cheapest retention and development tool an associate has.

                ## Milestones
                1. A monthly slot booked with each analyst you work with regularly.
                2. A short note from each one-to-one with one thing they do well and one thing to work on.
                3. One concrete development action agreed each month, such as owning a page or joining a client call.
                4. Notes ready to support their mid-year and year-end reviews.

                ## Notes
                Start from the **1:1** template. Keep the notes factual and kind; they may be read by the analyst later.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Each regular analyst has had a monthly one-to-one for three months running, with a written note and one agreed development action each time."
                cadence: rolling
              tasks:
                - "Book a recurring monthly half hour with each regular analyst"
                - "Hold the one-to-one and write one strength and one area to work on @recurring(monthly:12)"
                - "Agree one stretch task for the analyst before the next one-to-one"
            - name: Thursday sweep of open comments across decks and models
              description: |-
                ## Purpose
                Comments from VPs and MDs arrive in PDFs, emails, chats and corridor conversations, and the one that gets lost is the one the MD checks first. A weekly sweep that collects every open comment across your deals into one list, matched against the current files, catches the forgotten ones before Friday's deliverables go out.

                ## Milestones
                1. One open comments list per deal, pulled from every channel comments arrive through.
                2. Each comment marked done, in progress or needs clarification, checked against the latest file.
                3. Comments needing clarification taken back to the senior in one grouped message.
                4. No deliverable sent with a known open comment unaddressed for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly open comments list exists for each live deal, and no deliverable has gone out with an unaddressed known comment for four weeks."
                cadence: rolling
              tasks:
                - "Collect every open senior comment on your deals into one list per deal"
                - "Check each open comment against the latest file and update its status @recurring(weekly:thu)"
                - "Send one grouped clarification message to each senior who left unclear comments"
            - name: Monday analyst workload view across your deals
              description: |-
                ## Purpose
                When an analyst is on four deals with three associates, nobody sees the whole load until something breaks on a Thursday night. A Monday view of each analyst's deliverables across all their deals, built from a quick conversation, lets you resequence your own asks, flag overload to the staffer early and protect the analyst from avoidable all-nighters.

                ## Milestones
                1. A Monday list of each analyst's deliverables for the week, across all deals, with due dates.
                2. Clashes with your own asks spotted and resequenced by Monday afternoon.
                3. Overload raised with the staffer or the other associates with a proposed fix.
                4. A month where no analyst on your deals hit an unplanned all-nighter from a clash you could have seen.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each Monday for a month, a workload view for each analyst on your deals exists, and every clash found was resequenced or raised the same day."
                cadence: rolling
              tasks:
                - "Ask each analyst for their full deliverable list across deals this week @recurring(weekly:mon)"
                - "Resequence your own asks around clashes before Monday afternoon"
                - "Raise overload with the staffer with a specific proposed fix"
            - name: Pre-send sign-off for anything going to the client
              description: |-
                ## Purpose
                Material that reaches a client with the wrong logo, a stale number or another client's name in the metadata costs the bank credibility the MD spent years building. A fixed pre-send routine that you run personally on every external document, plus a monthly look at near misses, is the associate's most important quality gate.

                ## Milestones
                1. A pre-send routine written down: numbers tied to the latest model, dates, names, logos, page numbers, file metadata and recipients.
                2. The routine run and noted on every external document for a month.
                3. Near misses caught by the routine logged with what nearly went wrong.
                4. A monthly review of near misses that adds or removes a step.

                ## Notes
                Check file properties and tracked changes, not just the visible pages. Hidden author names and old comments are a common leak.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every external document in a month has a recorded pre-send check by you, and near misses are reviewed monthly with the routine updated."
                cadence: rolling
              tasks:
                - "Write the pre-send routine as a short numbered list"
                - "Run the routine on the next document going to a client and note it"
                - "Review the near-miss log and update the pre-send routine @recurring(monthly:20)"
            - name: Quarterly self-review against associate expectations
              description: |-
                ## Purpose
                Banks usually publish what they expect of an associate, but few associates read it again after week one, and the year-end review then becomes a surprise. A quarterly hour comparing your own record against those expectations, with evidence from deals, gives you time to fix gaps and the examples you will need when reviews come round.

                ## Milestones
                1. The bank's or group's associate expectations found and saved.
                2. A quarterly note scoring yourself on each expectation with one deal example as evidence.
                3. Two gaps chosen each quarter with a specific action for each.
                4. Four quarterly notes ready to draw on for your year-end review.

                ## Notes
                Start from the **Development plan** template. Ask a VP you trust to look at one quarter's note and tell you where you are too generous with yourself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A quarterly self-review note exists for each quarter of the year, scored against the written expectations with deal evidence and two gap actions."
                cadence: cyclic
              tasks:
                - "Find and save the written expectations for associates in your group"
                - "Score yourself against each expectation with one deal example @recurring(quarterly)"
                - "Pick two gaps and write one specific action for each"
            - name: Monthly quality sample of team output
              description: |-
                ## Purpose
                Error rates creep up quietly when a team is busy, and the first sign is often a senior catching something embarrassing. Picking two recently sent deliverables each month and reviewing them cold, as if you were the client, shows you which errors your team keeps making and where your own review is weakest.

                ## Milestones
                1. Two sent deliverables picked at random each month and reviewed cold.
                2. Every error found logged by type: numbers, consistency, formatting, wording, sourcing.
                3. The most common error type shared with the analysts with one fix.
                4. Three months of samples showing whether the common errors are falling.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Two deliverables are sampled each month for three months, errors are logged by type, and one fix per month is shared with the team."
                cadence: rolling
              tasks:
                - "Create a simple error log with columns for date, deliverable and error type"
                - "Review two recently sent deliverables cold and log every error @recurring(monthly:26)"
                - "Share the most common error type and one fix with your analysts"
            - name: Top-down model review in thirty minutes
              description: |-
                ## Purpose
                Line-by-line checking of a 20-tab model takes hours an associate does not have, and it still misses the error that matters. A top-down review method, starting from outputs and sanity checks and drilling only where the numbers look wrong, catches the material mistakes in half an hour and leaves the detailed tie-out to the analyst's checklist.

                ## Milestones
                1. A written top-down sequence: outputs first, then key drivers, implied margins and growth, cash flow and balance sheet checks.
                2. A short list of sanity ratios for your sector that flag a number for drilling.
                3. The method practised on three live or past models, timed.
                4. A review of a full deal model completed in under 45 minutes with every material issue found.

                ## Notes
                Top-down review is not a replacement for the analyst's own detailed checks. It is what you add on top of them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written top-down review sequence exists and has been used on three models, the last reviewed in under 45 minutes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the order you check a model in, starting from the output pages"
                - "List five sanity ratios for your sector that would flag a problem"
                - "Time yourself reviewing a closed deal's model with the method"
                - "Ask a senior associate to watch one review and point out what you skipped"
            - name: Reading a deck the way the MD will
              description: |-
                ## Purpose
                MDs read a deck in the car on the way to the meeting, and they read it for the story, not the formatting. Learning to review a deck at that altitude, checking that the headline of each page says something, that the pages build an argument and that the numbers support it, is what moves an associate from proofreader to someone the MD trusts with a draft.

                ## Milestones
                1. A habit of reading only the page titles first and checking they tell the full story on their own.
                2. Every page checked for a takeaway that a busy reader would remember.
                3. Monthly comparison of one of your reviewed decks against the MD's markup, noting what they changed that you did not.
                4. A list of the MD's recurring story preferences, kept and applied.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three months of comparisons between your review and the MD's markup exist, with a written list of the MD's recurring preferences."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the titles of your next deck in order and rewrite any that say nothing"
                - "Compare one deck you reviewed with the MD's markup and note the gaps @recurring(monthly:5)"
                - "Start a list of each MD's recurring story and wording preferences"
            - name: Markups an analyst can act on first time
              description: |-
                ## Purpose
                Vague markups such as fix this or tighten are why pages go through six turns instead of two. Learning to mark up clearly, saying what is wrong, what good looks like and how much it matters, saves both of you hours and teaches the analyst faster than any training course.

                ## Milestones
                1. A personal markup style: one colour, numbered comments, and each comment stating the change wanted.
                2. Each markup sorted into must fix, should fix and optional.
                3. A conversation with your analyst about which of your past comments were unclear.
                4. Average turns per page on your deals falling over a month.

                ## Notes
                If a comment needs a paragraph, it needs a two-minute conversation instead.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your markups for a month use numbered, prioritised comments that each state the change wanted, and turns per page have fallen."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Look at your last three markups and circle any comment that does not say what to change"
                - "Adopt one colour and a must, should, optional label for every comment"
                - "Ask your analyst which of your comments were hardest to act on"
            - name: Running a client call without a senior on the line
              description: |-
                ## Purpose
                Sooner or later the VP is on a plane and the client's finance team needs to walk through the model today. Preparing deliberately for the first few calls you run alone, with a clear agenda, an answer bank for likely questions and a rule for what you will not commit to, makes those calls a chance to show judgement rather than a risk.

                ## Milestones
                1. A short prep note for each solo call: purpose, agenda, likely questions and agreed answers.
                2. A clear list of topics you will take away rather than answer on the call, such as fees, valuation views and timetable changes.
                3. A written follow-up sent to the client and copied to the VP within two hours.
                4. Three solo calls run, each debriefed briefly with the VP.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three client calls have been led by you alone, each with a prep note, a same-day follow-up and a debrief with the VP."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the VP which topics you should never answer alone on a client call"
                - "Write a prep note with agenda and likely questions before your next solo call"
                - "Send the follow-up within two hours and copy the VP"
                - "Debrief the call with the VP in five minutes"
            - name: Answering client questions on the numbers live
              description: |-
                ## Purpose
                Finance directors and CFOs ask the associate the hard questions: why adjusted EBITDA differs from the statutory accounts, where the working capital assumption came from, why the multiple range moved. Knowing the model and the sources well enough to answer those live, or to say exactly when you will come back, is what makes clients ask for you by name.

                ## Milestones
                1. A one-page bridge for each live deal from reported figures to the adjusted numbers used in the model.
                2. Sources for each key assumption listed so you can cite them in a sentence.
                3. A short answer bank of the ten questions the client is most likely to ask.
                4. At least one client meeting where you handled the numbers questions without the VP stepping in.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each live deal has a reported to adjusted bridge, an assumption source list and a ten-question answer bank you have used in a client meeting."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a one-page bridge from reported to adjusted EBITDA for your main deal"
                - "List the source for every key model assumption"
                - "Ask the agent to draft ten likely client questions from the model summary"
                - "Write short answers to each and check the difficult ones with the VP"
            - name: Briefing an analyst so the first draft is close
              description: |-
                ## Purpose
                Delegation fails at the brief: an analyst told to do some comps on the peers will produce something, but rarely what the VP wanted. A five-part brief covering the purpose, the output format, the sources, the deadline and what good looks like, given in person and confirmed in a line of email, gets a first draft that needs one turn instead of four.

                ## Milestones
                1. A five-part brief format written down and used for every significant task you delegate.
                2. An example output or a sketch on paper attached to briefs for anything new.
                3. Interim check-ins agreed on any task longer than half a day.
                4. First drafts on your deals needing fewer turns over a month.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every significant task you delegate for a month has a written five-part brief, and first drafts need fewer turns than before."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the five-part brief format on a card you keep at your desk"
                - "Sketch the output on paper before briefing the next new task"
                - "Agree a halfway check-in on any task longer than half a day"
            - name: Writing emails to clients and counterparties
              description: |-
                ## Purpose
                Emails from the associate go to CFOs, general counsel and other banks' teams, and each one either builds or spends the bank's credibility. Learning to write them short, with the ask in the first line, numbers correct, attachments named properly and the tone matched to the reader, is a skill seniors notice faster than almost any other.

                ## Milestones
                1. A set of saved email patterns for data requests, document circulation, scheduling and chasers.
                2. Every client email checked for the ask in the first line and a clear deadline.
                3. Recipients, attachments and file names checked before sending, every time.
                4. A month of client emails sent without a senior rewriting one.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Saved patterns exist for the four most common client emails, and a month of client emails goes out without senior rewrites."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Save your best recent data request email as a reusable pattern"
                - "Draft patterns for document circulation, scheduling and chasers"
                - "Reread your last five client emails and move the ask to the first line"
            - name: Turnaround estimates you can promise a VP
              description: |-
                ## Purpose
                Promising a revised deck by 6pm and delivering at 11pm hurts more than saying 10pm at the start. Keeping a record of how long common deliverables really take your team, from a comps refresh to a full board deck, lets you give seniors estimates that hold and push back with evidence when a deadline is impossible.

                ## Milestones
                1. A list of the ten deliverables your team produces most often.
                2. Actual hours recorded for each over a month, including review time.
                3. A reference table of realistic turnaround times, shared with your analysts.
                4. Estimates given to seniors that held on at least four out of five deliverables.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reference table of real turnaround times for ten common deliverables exists, and four in five recent estimates to seniors were met."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the ten deliverables your team produces most often"
                - "Record start and finish times for each deliverable for a month"
                - "Turn the records into a reference table of realistic turnarounds"
            - name: Accounting judgement calls in deal models
              description: |-
                ## Purpose
                Adjusted EBITDA, lease treatment, pension deficits, minority interests and one-off items are where analysts most often guess, and where the associate is expected to make the call. Building your own reference notes on how your group treats these items, with an example for each, means you decide consistently and can explain why.

                ## Milestones
                1. Short reference notes on ten common adjustments: leases, pensions, minorities, associates, one-offs, stock compensation and others relevant to your sector.
                2. The group's house view checked with a senior for each note.
                3. One worked example per adjustment taken from a past deal, sanitised.
                4. The notes shared with your analysts as the default treatment.

                ## Notes
                Where an accounting point affects a client's reporting or tax, the client's auditors and advisers decide. Your notes govern how the bank presents numbers, nothing more.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Reference notes on ten adjustments, each with the group's house view confirmed and a worked example, are shared with your analysts."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the ten adjustments your group's models deal with most often"
                - "Write a short note on the group's treatment of the first three"
                - "Check the notes with a VP and correct any house view you had wrong"
                - "Add a sanitised worked example to each note"
            - name: Rebuild or patch decision for an inherited model
              description: |-
                ## Purpose
                Inheriting a model from a departed associate or another group is common, and the temptation is either to trust it blindly or to rebuild from scratch the night before a deadline. A short, structured assessment of the model's integrity, against the time left and the stakes, lets you make the choice deliberately and explain it to the VP.

                ## Milestones
                1. A one-hour integrity scan: balance checks, circularity, hard-codes, broken links and undocumented macros.
                2. A list of known problems with the effort to fix each.
                3. A decision to patch, partly rebuild or fully rebuild, written in a short note with timing.
                4. The VP told the decision and the risk it leaves.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An inherited model has a written integrity scan, a recorded patch or rebuild decision with timing, and the VP has acknowledged the decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run a one-hour integrity scan on the inherited model"
                - "List each problem found with an hours estimate to fix"
                - "Write a three-line patch or rebuild recommendation with timing"
                - "Walk the VP through the recommendation and record the decision"
            - name: Group deck template and page library refresh
              description: |-
                ## Purpose
                Half the time spent on a new pitch or process deck goes on rebuilding pages that exist somewhere on the drive in a slightly different format. A refreshed library of standard pages in the current house style, from situation overviews to valuation football fields, gives every analyst a clean starting point and cuts formatting turns sharply.

                ## Milestones
                1. The twenty most-used page types identified from recent decks.
                2. A clean version of each in the current house style, with dummy data.
                3. The library saved where the whole group can find it, with a one-line guide per page.
                4. Analysts using the library on at least two new decks.

                ## Notes
                Agree the work with the VP or the group's presentation team first. A rogue library that differs from the official template creates more turns, not fewer.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A library of twenty standard pages in house style, with dummy data and a guide, is in use on two new decks."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree the scope of a page library refresh with your VP"
                - "List the twenty page types that appear most in recent decks"
                - "Rebuild the first five pages in house style with dummy data"
                - "Show the library to the analysts and ask what is missing"
            - name: Cutting the number of turns per page
              description: |-
                ## Purpose
                Pages that go through six turns before a senior is happy usually fail for the same few reasons: an unclear brief, no agreed storyline, late data or comments arriving in pieces. Counting turns per page for a month and fixing the biggest cause gives back hours each week to you and your analysts.

                ## Milestones
                1. Turns per page counted on every deck for one month.
                2. The cause of each turn beyond the second tagged: brief, storyline, data, senior change of mind or error.
                3. One change made to tackle the largest cause.
                4. Turns per page measured again the following month.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two months of turns per page data exist with causes tagged, and one change aimed at the largest cause has been made and measured."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Add a turns count column to each deck's page register"
                - "Tag the cause of every turn beyond the second"
                - "Review turns per page by cause and pick one fix @recurring(monthly:15)"
            - name: What you check yourself and what you delegate
              description: |-
                ## Purpose
                Time spent rechecking footnotes is time not spent on the storyline and the client, but a blanket rule to check nothing is how errors reach the MD. Deciding deliberately, deliverable by deliverable, what you review personally, what the analyst's checklist covers and what you spot-check, makes your hours go where your judgement matters.

                ## Milestones
                1. A list of your team's common deliverables, each marked full review, spot check or analyst checklist only.
                2. The split agreed with each analyst, based on their experience.
                3. The split revisited when an error gets through or an analyst becomes more senior.
                4. Your own review hours tracked for a month before and after.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written review split exists for your team's common deliverables, agreed with each analyst, and your review hours are compared before and after."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List your team's ten most common deliverables"
                - "Mark each as full review, spot check or analyst checklist only"
                - "Agree the split with each analyst based on their track record"
            - name: Standard model architecture for the group's deal type
              description: |-
                ## Purpose
                Most groups build the same kind of model over and over, whether a sell-side operating model, a debt capacity model or a project cash flow, yet each associate lays it out differently. A standard architecture, agreed with the VPs, with fixed tab order, colour coding and check tabs, makes every model reviewable in minutes by anyone in the group.

                ## Milestones
                1. The tab order, input conventions, colour coding and check tabs written down for the group's main model type.
                2. A clean shell model built to the standard.
                3. The standard agreed by at least two VPs.
                4. One new deal model built on the shell.

                ## Notes
                Keep the shell small. A standard that tries to cover every deal ends up used on none.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written model standard and shell exist for the group's main deal type, agreed by two VPs and used on one new deal."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Collect three recent models of the group's main deal type"
                - "Write the tab order and conventions they should all share"
                - "Build a shell model to the standard with blank inputs"
                - "Ask two VPs to review the standard before rolling it out"
            - name: Post-mortem when an error reaches the client
              description: |-
                ## Purpose
                Mistakes that reach a client happen to every associate at some point; what seniors remember is how it was handled. A calm, blame-free post-mortem within a few days, covering what went wrong, why the checks missed it and what changes, protects the team's trust and stops the same error happening on the next deal.

                ## Milestones
                1. The error corrected and the client told, with the VP agreeing the message.
                2. A short written account: what happened, which check should have caught it and why it did not.
                3. One or two concrete changes to the checklist or process.
                4. The changes shared with the analysts without naming blame.

                ## Notes
                Own it in front of seniors even when an analyst made the error. You signed it off, and they will learn more from seeing that than from any feedback.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each client-facing error has a written post-mortem within five working days, with at least one checklist or process change made."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree the correction message to the client with the VP"
                - "Write a half-page account of what happened and which check missed it"
                - "Add the fix to the review checklist"
                - "Walk the analysts through the change without assigning blame"
            - name: Pushing back on a senior request with options
              description: |-
                ## Purpose
                Saying yes to every MD request and then missing a client deadline is worse than raising the clash early. Learning to push back in the form seniors accept, stating the conflict, offering two or three options with their cost and asking them to choose, protects your team and shows the judgement associates are promoted for.

                ## Milestones
                1. A short format for raising a clash: the request, the conflict, options with time cost, a recommendation.
                2. The format used on at least two real clashes.
                3. Each outcome recorded, including whether the senior chose your recommendation.
                4. A rule of thumb written down for when to raise rather than absorb a request.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two real request clashes were raised to seniors in the written options format, with outcomes recorded and a rule of thumb noted."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the four-line format for raising a clash with a senior"
                - "Use the format on the next request that conflicts with a client deadline"
                - "Record what the senior chose and why"
            - name: Internal kick-off for a newly won mandate
              description: |-
                ## Purpose
                The first week of a mandate sets the habits for the next six months, and a kick-off run by the associate is the cleanest way to start. One meeting with the deal team, covering the client's objectives, the timetable, roles, the first deliverables and the working rules, saves weeks of confusion later.

                ## Milestones
                1. A kick-off pack: client objectives, deal timetable, team roles, client contacts and first deliverables.
                2. A one-hour internal meeting held within the first week of the mandate.
                3. Model and deck owners named, folders set up and the ownership list drafted.
                4. A first data request list ready to send to the client after VP review.
              priority: medium
              deadlineOffsetDays: 7
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kick-off meeting was held within a week of the mandate, with a written pack, named owners and a first data request ready to send."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the kick-off pack from the engagement letter and pitch"
                - "Book a one-hour kick-off with the whole deal team"
                - "Name the model and deck owners in the meeting"
                - "Draft the first client data request and send it to the VP for review"
            - name: Owning a pitch from brief to printed book
              description: |-
                ## Purpose
                Pitches are where associates are seen running the full machine in under two weeks: understanding what the MD wants to say, splitting the work, managing the comps, valuation and credentials pages, and getting a book printed and checked before the car leaves. Running one end to end with a plan gives you a template for every pitch after it.

                ## Milestones
                1. The MD's key message and the client's likely question captured in three sentences before any page is built.
                2. A page plan with owners and due times, built from the page library.
                3. Two internal turns with the VP and MD, each logged and closed.
                4. The final book checked against the pre-send routine and printed or sent on time.
                5. A short note of what to repeat or change on the next pitch.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "One pitch book was delivered on time with a written page plan, two logged senior turns and a lessons note filed afterwards."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Ask the MD for the key message of the pitch in three sentences"
                - "Build a page plan with owners and due times"
                - "Book two internal turn slots with the VP and MD"
                - "Write a lessons note within two days of the meeting"
            - name: Bid deadline day run sheet
              description: |-
                ## Purpose
                Bid days on a sale process compress hours of work into a few: bids arrive, need logging, clarifying and summarising, and the MD wants a comparison before the client call that evening. A run sheet built the week before, covering who receives bids, how they are logged, the summary format and the call timing, turns a chaotic day into a routine one.

                ## Milestones
                1. A run sheet with timings, owners and the bid receipt process agreed with the VP.
                2. A bid summary template prepared in advance with the comparison metrics the client cares about.
                3. Every bid logged with time received and any conditions on the day.
                4. A bid summary in front of the MD before the client call.

                ## Notes
                Treat bids as highly confidential: restrict who sees them and follow your bank's information barrier rules.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On bid day, every bid was logged with time and conditions and a summary reached the MD before the client call, following a run sheet prepared in advance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the bid day run sheet with timings and owners"
                - "Prepare a blank bid summary with the client's comparison metrics"
                - "Confirm with the VP who receives bids and who may see them"
                - "Rehearse the logging and summary steps with the analyst the day before"
            - name: First board or steering committee meeting on a deal
              description: |-
                ## Purpose
                Board and steering committee papers carry more weight than any internal deck, and associates often own their production and logistics. Preparing for the first one carefully, from the paper deadline and distribution list to the questions directors are likely to ask, sets the standard for the rest of the mandate.

                ## Milestones
                1. The paper deadline, format and distribution confirmed with the company secretary or client lead.
                2. The board paper reviewed by the VP and MD before the deadline.
                3. A short list of likely director questions with answers prepared for the MD.
                4. Minutes or action points from the meeting captured and followed up.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first board or steering committee paper was distributed on time after senior review, with a prepared question list and followed-up actions."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the paper deadline and distribution list with the client lead"
                - "Build the paper timetable working back from that deadline"
                - "Prepare a list of likely director questions for the MD"
                - "Send the action points to the deal team within a day of the meeting"
            - name: Year-end reviews written for your analysts
              description: |-
                ## Purpose
                Reviews from associates carry real weight in analyst rankings and bonuses, and a vague two-line review can cost a strong analyst. Writing fair, specific reviews backed by deal examples, drawn from the one-to-one notes you kept through the year, is a duty to the analyst and a sign to seniors that you manage people well.

                ## Milestones
                1. The bank's review deadline and format checked early.
                2. For each analyst, three strengths and two development areas, each with a deal example.
                3. Reviews submitted before the deadline.
                4. A conversation offered to each analyst about the feedback, within the bank's rules.

                ## Notes
                Keep reviews factual and specific to work. Do not discuss pay or ranking outcomes with analysts unless the bank says you may.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each analyst you worked with has a submitted review with three strengths and two development areas, each backed by a deal example, before the deadline."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Check the bank's review deadline and format and note it"
                - "Pull the one-to-one notes for each analyst into one page"
                - "Draft each review with deal examples for every point"
                - "Set a yearly reminder a month before review season to collect examples @recurring(yearly)"
            - name: Deal close-out file and lessons note
              description: |-
                ## Purpose
                Within a month of a deal closing or dying, nobody remembers which model was final or why the valuation range moved in week six. A close-out file with the final documents, a short deal summary and a lessons note gives you credentials material, a reference for the next similar deal, and evidence for your own review.

                ## Milestones
                1. Final versions of the model, key decks and letters saved in a clearly labelled close-out folder.
                2. A one-page deal summary: client objective, process, outcome and your role.
                3. A lessons note with three things to repeat and three to change.
                4. Superseded working files archived according to the bank's retention rules.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "Each closed or dead deal has a close-out folder with final documents, a one-page summary and a lessons note within a month of the end."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Move the final model, decks and letters into a close-out folder"
                - "Ask the agent to draft a one-page deal summary from your status notes"
                - "Write three things to repeat and three to change"
                - "Archive working files following the bank's retention rules"
            - name: Post-MBA associate without analyst years in banking
              description: |-
                ## Purpose
                Joining as an associate after an MBA means managing analysts who know the models, templates and shortcuts better than you do. A short plan to close the technical gap fast, while using what you bring from your previous career, earns the analysts' respect and stops you becoming the associate whose markups they quietly ignore.

                ## Milestones
                1. The technical gaps listed honestly: modelling speed, deck software, group templates, process mechanics.
                2. A weekly hour of practice on the largest gap for the first two months.
                3. One analyst asked to show you the group's tools and shortcuts, with credit given openly.
                4. One strength from your previous career, such as industry knowledge or client management, offered to the team on a live deal.

                ## Notes
                Analysts respect associates who ask good questions and check their own work. Pretending to know a template you have never used costs more than asking.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written gap list exists with eight weeks of logged practice on the largest gap, and you have contributed one prior-career strength on a live deal."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write an honest list of your technical gaps compared with a third-year analyst"
                - "Book a weekly practice hour on the largest gap for eight weeks"
                - "Ask an analyst for a walkthrough of the group's templates and shortcuts"
                - "Tell your VP one area from your previous career you can help with"
            - name: Promoted analyst now managing former peers
              description: |-
                ## Purpose
                Friends from your analyst class now send you their pages to review, and the line between peer and reviewer feels awkward for both sides. Setting the relationship deliberately, with an honest conversation, consistent standards and no favourites, lets you keep the friendships and still give the feedback the deal needs.

                ## Milestones
                1. A short conversation with each former peer you now review, acknowledging the change.
                2. The same review checklist and markup style used for everyone.
                3. Feedback to former peers given in private and backed by examples.
                4. A month without a complaint of favouritism from analysts or seniors.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "You have had a direct conversation with each former peer you review, and the same checklist and markup style are applied to all analysts."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the former peers whose work you now review"
                - "Have a short private conversation with each about the change"
                - "Apply the same checklist to every analyst's work, including friends"
            - name: Boutique associate doing both analyst and associate work
              description: |-
                ## Purpose
                Small boutiques often staff one associate with one MD and no analyst, so you build the model, write the deck, check your own work and handle the client. A system for self-review and for buying back time, such as cooling-off periods before checking and using research or support staff where they exist, keeps quality high without a second pair of eyes.

                ## Milestones
                1. A self-review routine that puts time between building and checking, even if only an hour.
                2. A list of tasks that could go to support staff, interns or external research providers within the bank's rules.
                3. A standing agreement with the MD on which deliverables they review personally.
                4. A month of deliverables with no errors caught by the client.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written self-review routine and an MD review agreement are in place, and a month of deliverables went out with no client-caught errors."
                cadence: rolling
              tasks:
                - "Write a self-review routine with a gap between building and checking"
                - "List tasks that could be passed to support staff or interns"
                - "Agree with the MD which deliverables they will review personally"
            - name: Associate working with an offshore support team
              description: |-
                ## Purpose
                Offshore analyst and research teams can turn a comps refresh or a formatting pass overnight, but only if the brief is complete before you go home. A weekly rhythm with the offshore team, clear briefs with examples and a quality check on what comes back, turns time zones into a working shift rather than a source of rework.

                ## Milestones
                1. A brief template for offshore requests with scope, format, sources, deadline and an example.
                2. A weekly call with the offshore lead to review quality and upcoming work.
                3. Returned work checked against the brief, with feedback sent the same day.
                4. Turnaround and rework tracked for a month.

                ## Notes
                Check what client information may be shared with offshore teams under your bank's rules before briefing them on a live deal.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Offshore requests for a month use the brief template, a weekly call with the offshore lead is held, and rework on returned work is tracked."
                cadence: rolling
              tasks:
                - "Check which deal information the offshore team may receive"
                - "Write an offshore brief template with an example attached"
                - "Hold a weekly quality call with the offshore team lead @recurring(weekly:wed)"
                - "Send same-day feedback on every piece of returned work"
            - name: Associate splitting time between coverage and product teams
              description: |-
                ## Purpose
                Associates in a coverage group often work alongside M&A, capital markets or financing product teams on the same client, with two sets of seniors and two sets of priorities. A clear map of who leads what, agreed handoffs and a single view of deadlines across both teams stops you being pulled in two directions on the same day.

                ## Milestones
                1. For each shared client, a note of which team leads the relationship, the model and the deck.
                2. A shared deadline view across coverage and product deals.
                3. A named senior on each side to escalate clashes to.
                4. One clash resolved early through the agreed route.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each shared client has a written lead note, a combined deadline view exists, and at least one clash was resolved through the agreed escalation route."
                cadence: rolling
              tasks:
                - "List every client where you work with both coverage and product seniors"
                - "Write who leads the relationship, model and deck for each"
                - "Merge both teams' deadlines into one weekly view"
            - name: Associate with caring responsibilities at home
              description: |-
                ## Purpose
                Parents and carers in the associate seat face the same deal deadlines with fewer flexible hours, and the job rewards whoever is visibly online. A deliberate plan, agreeing core hours and cover with your VP, front-loading reviews before pick-up and keeping a reliable handover when you log off, lets you deliver and stay visible without pretending the constraint does not exist.

                ## Milestones
                1. Core hours and the evening window when you can be reached agreed with each VP.
                2. Daily review slots placed so analysts get feedback before you log off.
                3. A short end-of-day handover note to the analyst with priorities and when you will check in again.
                4. A weekly Sunday planning half hour to see the week's deadlines against family commitments.

                ## Notes
                Talk to HR or your manager about formal flexible working options if they exist; an informal agreement with one VP does not carry over to the next deal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Core hours are agreed with each VP, daily reviews land before you log off, and a weekly planning session is held for a month."
                cadence: rolling
              tasks:
                - "Write down your fixed family commitments for a typical week"
                - "Agree core hours and an evening contact window with each VP"
                - "Plan the week's deadlines against family commitments @recurring(weekly:sun)"
                - "Send the analyst a handover note before logging off each day"
            - name: Running the process day to day while the VP is away
              description: |-
                ## Purpose
                Holidays, other deals and illness mean the VP is sometimes absent for a week in the middle of a live process, and the associate becomes the day-to-day lead. Agreeing in advance what you can decide alone, what needs a call and who covers sign-off makes that week a showcase rather than a holding pattern.

                ## Milestones
                1. A handover from the VP covering open issues, decisions pending and client sensitivities.
                2. A written list of what you may decide alone and what needs the VP or MD.
                3. A daily short update sent to the VP and MD during the absence.
                4. A hand-back note on return listing decisions made and issues open.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A week of VP absence was covered with a written decision scope, daily updates to seniors and a hand-back note on return."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the VP for a 30-minute handover before they leave"
                - "Write the list of decisions you may make alone and confirm it"
                - "Send a short daily update to the VP and MD"
                - "Write the hand-back note on the VP's return"
            - name: Teaching the analyst class a modelling session
              description: |-
                ## Purpose
                Teaching is how associates become known across a group, and it forces you to understand the material properly. Preparing and delivering one internal session for analysts, on a topic you know well such as review habits, debt schedules or deal timetables, with a short exercise and a sanitised example, adds value well beyond your own deals.

                ## Milestones
                1. A topic agreed with the group head or training lead.
                2. A 45-minute session with slides, a short exercise and a sanitised example model.
                3. The session delivered and feedback collected from attendees.
                4. The materials saved where future analysts can find them.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One internal session for analysts was delivered with an exercise and saved materials, and attendee feedback was collected."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Propose two session topics to the group head or training lead"
                - "Build a short exercise from a sanitised past model"
                - "Deliver the session and send a three-question feedback form"
                - "Save the materials in the group's training folder"
            - name: Leading a small mandate as the senior day-to-day contact
              description: |-
                ## Purpose
                Smaller mandates, such as a refinancing review or a valuation for a private client, are often run day to day by an experienced associate with an MD signing off. Treating one as your own, from the engagement scope to the final presentation, is the clearest evidence you are ready for more, and the best rehearsal for the VP role.

                ## Milestones
                1. Your role on the mandate agreed with the MD in writing, including what they review.
                2. A plan with milestones and client touchpoints shared with the client.
                3. Weekly updates to the client contact, kept to a fixed day.
                4. The final deliverable presented to the client by you, with the MD present.
                5. A short self-assessment of the mandate shared with the MD.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One small mandate was run with you as day-to-day lead, weekly client updates were sent and you presented the final deliverable."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the MD whether a current small mandate could be led by you day to day"
                - "Agree in writing what the MD will review and sign off"
                - "Send the client contact a weekly update @recurring(weekly:mon)"
                - "Write a one-page self-assessment for the MD when the mandate ends"
---

# Associate Role in Banking

This area is for the associate, whether promoted from analyst or arriving after an MBA, who now sits between the analysts doing the work and the VP and MD who answer to the client. It starts with foundations (a first 90 days plan, a written list of what you own, a working agreement with each analyst, one owner for the model and the deck, a review checklist and a critical path for each mandate), then the weekly machinery of check-ins, status notes and comment sweeps, the skills of reviewing, marking up, briefing and talking to clients, the improvements and decisions that cut rework, dated moments such as kick-offs, pitches and bid days, variants for post-MBA hires, promoted analysts, boutiques and parents, and specialist work such as running a process while the VP is away.

What repeats is a short daily check-in with your analyst, a Monday workload view, a Tuesday client call agenda, a Wednesday model change log review, a Thursday sweep of open comments and a Friday status note to the deal leads, plus monthly one-to-ones, quality samples and near-miss reviews on different days and a quarterly self-review. The **Onboarding 30/60/90**, **Operational checklist**, **Meeting notes**, **1:1** and **Development plan** templates pair with the first quarter, the review checklist, client calls, analyst one-to-ones and your own development. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
