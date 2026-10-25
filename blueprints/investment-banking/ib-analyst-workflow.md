---
id: investment-banking.ib-analyst-workflow
name: IB Analyst Workflow
description: "An analyst's operating system across live deals: one task list, clean folders and versions, a request intake that captures deadlines, a pre-send check, honest status updates and weekends you actually keep."
category: business
version: 1.0.0
tags: [investment-banking, ib-analyst-workflow, knowledge-worker, analyst, task-management, version-control, workload, productivity]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - onboarding-30-60-90
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: IB Analyst Workflow
          description: "Organising the analyst workload: task lists across deals, version control, staffer requests, checking work before sending and keeping some weekends."
          projects:
            - name: One master task list across every live deal
              description: |-
                ## Purpose
                Analysts on three or four live deals usually keep tasks in four places: the inbox, sticky notes, a notebook and memory, and the missed item is always the one in the fourth place. Moving every open request into one list, grouped by deal with a requester and a due time on each line, is the single change that makes the rest of this area work.

                ## Milestones
                1. Every open request from email, chat, notebooks and memory written into one list on a firm-approved tool.
                2. Each line tagged with its deal code name, the person who asked and a due time.
                3. Items with no due time either given one by asking or marked as background work.
                4. The list used as the only source of truth for a full working week.

                ## Notes
                Use only tools your bank allows on its devices. Deal code names, never client names, belong on anything that could be seen on a train or a shared screen.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One task list holds every open request across all live deals, each with deal code, requester and due time, used for five straight working days."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Scroll the last seven days of email and chat and copy every open request into one list"
                - "Tag each line with the deal code name, the requester and the due time"
                - "Ask for a due time on any request that came without one"
                - "Delete the sticky notes and side lists once everything is in the master list"
            - name: Deal folder structure on the group drive
              description: |-
                ## Purpose
                When a VP asks for last Tuesday's comps at midnight, the difference between ten seconds and ten minutes is a folder structure you set up once. A standard tree for every deal, with the same subfolders for models, presentations, client materials, research, and an archive for superseded files, means you can find anything on any deal, and so can whoever covers for you.

                ## Milestones
                1. One standard folder tree written down, with subfolders for models, decks, client data, research, legal drafts and archive.
                2. The tree applied to every live deal, with existing files moved into it.
                3. The group's own conventions checked so the tree sits inside them rather than against them.
                4. An associate on one deal able to find the latest model without asking you.

                ## Notes
                If the group already has a standard, adopt it exactly. A private structure that differs from the team's only moves the confusion somewhere else.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live deal folder follows the same written tree, and a teammate can locate the current model and deck on any deal unaided."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your associate whether the group already has a standard deal folder tree"
                - "Write the tree on one page with a purpose line for each subfolder"
                - "Move the files on your busiest deal into the new structure"
                - "Repeat the move for each remaining live deal"
            - name: File naming and version control convention
              description: |-
                ## Purpose
                Sending v7 when the MD marked up v8 is one of the most common and most avoidable analyst errors. A naming rule with the deal code, the document, a date and a version number, plus a rule that superseded files move to the archive the moment a new one is saved, removes the guesswork about which file is live.

                ## Milestones
                1. A naming pattern agreed, for example deal code, document, date in year-month-day order, version and the initials of whoever edited it.
                2. A rule written down for when a version number goes up and when it stays.
                3. Superseded versions moved to an archive folder on every live deal.
                4. No file sent to a senior in the last month that was not the latest version.

                ## Notes
                Dates written year first sort correctly in any folder view. Avoid words like final or final2 in file names; the version number does that job.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written naming and versioning rule is applied to every file in every live deal folder, with superseded versions archived."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your naming pattern in one line and pin it above your desk"
                - "Rename the current files on each live deal to the pattern"
                - "Move every superseded version into the archive subfolder"
                - "Tell each deal associate the pattern so their files match"
            - name: Email and chat filing for deal traffic
              description: |-
                ## Purpose
                An inbox that receives three hundred messages a day cannot also be a task list. Filing deal traffic by code name, with a single folder for items that need action, keeps the inbox for new arrivals and makes it possible to find the client's data email from three weeks ago in seconds.

                ## Milestones
                1. One folder per live deal plus one each for internal admin, recruiting and training.
                2. Filters set where the firm allows them, routing data provider alerts and newsletters away from the inbox.
                3. A rule that any message with an action is copied to the master task list before it is filed.
                4. The inbox brought to fewer than twenty unfiled messages at the end of most days.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Deal email is filed by code name, newsletters are filtered, and the inbox ends most days with under twenty unfiled messages."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create one email folder for each live deal code name"
                - "Set filters for data provider alerts, research notes and internal newsletters"
                - "File the last month of deal email into the new folders"
                - "Mute chat channels for deals that have gone quiet @recurring(monthly:8)"
            - name: Contact sheet for every deal team
              description: |-
                ## Purpose
                At two in the morning you need to know who on the client side owns the model, which lawyer drafts the disclosure and whether the VP or the associate signs off the deck. A one-page contact sheet per deal, with roles, time zones and who to copy on what, saves the late-night guess that ends with the wrong person copied.

                ## Milestones
                1. A contact sheet for each live deal listing bank team, client team, lawyers, accountants and other advisers.
                2. Each name marked with role, time zone and preferred channel.
                3. A line on each sheet saying who must be copied on client-facing emails.
                4. Sheets updated whenever someone joins or leaves a deal team.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live deal has a contact sheet with roles, time zones and copy rules, checked against the latest working group list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each deal associate for the latest working group list"
                - "Build one contact sheet per deal from the working group lists"
                - "Mark who must be copied on anything sent to the client"
                - "Save the sheets in each deal folder's admin subfolder"
            - name: Sign-off chain before anything leaves the bank
              description: |-
                ## Purpose
                Analysts get into real trouble not for slow work but for sending something to a client that a senior had not seen. Writing down, for each deal, who has to approve a deck, a model or an email before it goes external makes the rule visible and gives you an answer when a client asks you directly for a file.

                ## Milestones
                1. For each live deal, the person who approves external documents named.
                2. The group's rules on what an analyst may send to a client without review written down.
                3. A standard reply drafted for clients who ask you directly for something unreviewed.
                4. No document sent externally in the next month without the named approval.

                ## Notes
                Compliance and legal review of external materials is a separate step in many banks. Ask your associate where it sits in the chain rather than assuming.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written sign-off chain exists for every live deal, and a month passes with nothing sent externally without the named approver's yes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your associate who approves external documents on each deal"
                - "Write the approver for decks, models and emails on each contact sheet"
                - "Draft a polite holding reply for clients who ask you for unreviewed work"
                - "Check with compliance whether pitch and client materials need their review"
            - name: Request intake routine for staffer and senior asks
              description: |-
                ## Purpose
                Most rework starts at the moment a request arrives, when the analyst nods and leaves without the deadline, the format or the reviewer. A short intake habit, four questions asked every time, turns vague asks into tasks that can be scheduled and finished once.

                ## Milestones
                1. Four intake questions written down: what exactly, by when, in what format, and who reviews it first.
                2. The questions asked on every new request for two weeks, in person or by reply email.
                3. Each answer captured on the master task list alongside the request.
                4. Fewer reworked tasks in the following fortnight than in the one before.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every new request for two weeks has its deliverable, deadline, format and first reviewer recorded on the task list."
                cadence: rolling
              tasks:
                - "Write your four intake questions on a card by the keyboard"
                - "Reply to the next email request confirming deadline, format and reviewer"
                - "Note on the task list any request where the four answers were missing"
                - "Count reworked tasks at the end of two weeks against the fortnight before"
                - "Scan the task list for requests missing an intake answer @recurring(weekly:thu)"
            - name: Reference folder of your best past work
              description: |-
                ## Purpose
                A second-year analyst is fast mostly because they have built a page or a model once and know where it is. Keeping a personal folder of clean, reviewed examples, the comps output that the MD liked, a process letter, a tidy debt schedule, means the next request starts from something good rather than a blank file.

                ## Milestones
                1. A reference folder created inside the firm's systems, never on a personal device.
                2. At least ten reviewed examples saved, each with client names removed or code names used.
                3. A one-line index of what each example is and when to reuse it.
                4. At least three new requests in a month started from the folder.

                ## Notes
                Confidential client data belongs on deal drives with the right permissions. Keep the folder to formats and structures, and follow your bank's rules on reusing materials across clients.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reference folder on firm systems holds ten or more indexed examples, used as the starting point for three requests in a month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the reference folder in your own area of the firm drive"
                - "Save five pages or models that seniors signed off without major comments"
                - "Write a one-line index entry for each saved example"
                - "Add one new example each month from your best recent work @recurring(monthly:24)"
            - name: Desk and phone set-up for out-of-hours requests
              description: |-
                ## Purpose
                Banking requests arrive at night and at weekends, and the question is whether you hear the urgent ones without hearing all of them. Setting notifications so that a VP's direct message gets through but every reply-all on a forty-person thread does not is a small set-up that protects sleep and response time together.

                ## Milestones
                1. Notification settings on the firm phone allowing direct messages and calls from deal leads through.
                2. Large distribution threads and newsletters silenced outside working hours.
                3. Laptop, charger and remote access tested from home before the next late request.
                4. A rule agreed with your associate on how they will reach you if something is urgent.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Firm phone notifications pass only deal-lead messages after hours, remote access works from home, and the urgent-contact rule is agreed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the people whose messages must reach you at any hour"
                - "Set the firm phone to let only those people through after hours"
                - "Test logging in remotely from home with the files you use most"
                - "Agree with your associate how they will flag a truly urgent request"
            - name: Morning triage of overnight requests
              description: |-
                ## Purpose
                The first thirty minutes of the day decide whether you spend it reacting or working. Reading every overnight message, adding anything new to the task list and sending one short reply per deal confirming what you will deliver and when gives seniors certainty and gives you a plan before the first meeting.

                ## Milestones
                1. A fixed thirty-minute triage slot before the first call of the day.
                2. Every overnight request on the master list with a due time by the end of triage.
                3. One reply per deal sent confirming the day's deliverables.
                4. The routine kept on at least four working days in five for a month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Triage happens on four of five working days for a month, with every overnight request listed and acknowledged before the first meeting."
                cadence: rolling
              tasks:
                - "Read every overnight message before opening any model @recurring(daily)"
                - "Add each new request to the master list with a due time"
                - "Send one confirmation reply per deal listing today's deliverables"
                - "Pick the one task that must be done before lunch and start it first"
            - name: End-of-night status note to each deal lead
              description: |-
                ## Purpose
                Seniors stop chasing analysts who tell them where things stand before they ask. A three-line note to each deal's associate or VP before you log off, saying what was sent, what is open and what you need from them, turns the next morning's first email from a question into a markup.

                ## Milestones
                1. A three-line format agreed: done, open with expected time, and anything blocked.
                2. The note sent on each active deal before logging off on working days.
                3. Fewer where-are-we messages from seniors after two weeks.
                4. Blocked items cleared faster because the person who can unblock them knows by morning.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A three-line status note goes to each active deal lead before log-off on working days for a month, with chasers visibly reduced."
                cadence: rolling
              tasks:
                - "Write the three-line status format as an email draft you can reuse"
                - "Send a status note to each active deal lead before logging off @recurring(daily)"
                - "List the blockers that only a senior can clear and name them in the note"
                - "Count the chaser messages you receive in week one and week three"
            - name: Monday workload snapshot for the staffer
              description: |-
                ## Purpose
                Staffers assign new work from what they can see, and an analyst who looks free on paper while running three live deals gets the fourth. A short Monday note listing each deal, its stage, the hours it is taking and the next crunch point gives the staffer something real to work from and makes later conversations about capacity factual.

                ## Milestones
                1. A snapshot format with deal, stage, rough weekly hours and the next deadline.
                2. The snapshot sent to the staffer every Monday morning.
                3. Upcoming crunch weeks flagged at least a week ahead.
                4. The staffer using the snapshot when offering new work.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A workload snapshot reaches the staffer every Monday for two months, each listing deals, stages, hours and next deadlines."
                cadence: rolling
              tasks:
                - "Ask the staffer what they want to see about your workload each week"
                - "Send the Monday snapshot from the master task list @recurring(weekly:mon)"
                - "Flag any week in the next three where two deals peak together"
                - "Update the snapshot midweek if a new deal or a dead deal changes the picture"
            - name: Friday file clean-up and archive
              description: |-
                ## Purpose
                A week of late turns leaves deal folders full of drafts, local copies and attachments saved to the desktop, and that clutter is where the wrong version comes from. Twenty minutes on Friday afternoon archiving superseded files and pulling local copies back onto the drive keeps every folder honest going into the weekend.

                ## Milestones
                1. Superseded versions on every live deal moved to the archive.
                2. Local desktop and download copies moved to the right deal folder or deleted where the firm's retention rules allow.
                3. The latest model and deck on each deal clearly the only unarchived versions.
                4. The clean-up done on most Fridays across a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "On most Fridays for a quarter, every live deal folder shows only current versions, with local copies moved onto the drive."
                cadence: rolling
              tasks:
                - "Archive superseded versions on every live deal folder @recurring(weekly:fri)"
                - "Move desktop and download copies into the correct deal folder"
                - "Check the firm's retention rules before deleting anything"
                - "Confirm the live model and deck on each deal are the only unarchived files"
            - name: Pre-send check for every email with an attachment
              description: |-
                ## Purpose
                A wrong recipient, a stale attachment or a hidden tab with another client's numbers can cost far more than a late night. A five-point check run before you hit send on anything with a file attached, recipients, version, hidden content, print view and the covering note, takes ninety seconds and catches the errors that seniors remember.

                ## Milestones
                1. A five-point pre-send checklist written and kept beside the screen.
                2. Hidden sheets, comments and tracked changes checked on every attachment.
                3. Recipients checked against the deal contact sheet before sending.
                4. No mis-sent or wrong-version email in the following quarter.

                ## Notes
                Start from the **Operational checklist** template. Autocomplete in the address bar is the most common cause of a wrong recipient, so read every name before sending.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written five-point pre-send checklist is used on every attachment for a quarter, with zero mis-sent or wrong-version emails."
                cadence: rolling
              tasks:
                - "Write your five-point pre-send checklist on one card"
                - "Check hidden tabs, comments and tracked changes before attaching any file"
                - "Read every recipient name against the deal contact sheet"
                - "Open the attachment from the draft email to confirm it is the right version"
            - name: Calendar blocks for focused model and drafting time
              description: |-
                ## Purpose
                If the calendar shows open space, someone will fill it with a call. Blocking two focused stretches a week for the model build or first-draft work that needs unbroken attention, and labelling them with the deal and the deliverable, makes it likely that the hardest work gets done before ten at night rather than after.

                ## Milestones
                1. Two focused blocks of at least two hours placed in the calendar each week.
                2. Each block labelled with the deal and the deliverable it is for.
                3. Phone and chat on do-not-disturb during blocks, with deal leads aware how to reach you.
                4. At least one major deliverable a week finished inside a block.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two labelled focus blocks appear in the calendar weekly for two months, and one major deliverable a week is finished inside them."
                cadence: rolling
              tasks:
                - "Find two two-hour gaps in next week's calendar and block them"
                - "Label each block with the deal and the deliverable"
                - "Place next week's focus blocks every Sunday evening @recurring(weekly:sun)"
                - "Tell each deal lead how to reach you during a block if it is urgent"
            - name: Monthly review of the task system
              description: |-
                ## Purpose
                Every system drifts: the master list grows a backlog of things that will never happen, folders for dead deals linger and the intake questions get skipped. A monthly half hour to prune the list, close dead deals and note what slipped keeps the system trustworthy enough that you keep using it.

                ## Milestones
                1. Items older than a month either done, rescheduled or deleted.
                2. Dead or paused deals moved off the active list and their folders archived.
                3. One thing that slipped this month noted with a change to prevent it.
                4. The review done twelve times in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly review is logged for twelve months, each pruning stale items, archiving dead deals and recording one change."
                cadence: cyclic
              tasks:
                - "Prune the master list and close dead deals @recurring(monthly:12)"
                - "Write one line on what slipped this month and why"
                - "Change one part of the system based on that line"
                - "Check that every active deal still has a current contact sheet"
            - name: One protected weekend a month
              description: |-
                ## Purpose
                Analysts who give up every weekend by default burn out faster than those who protect one and work hard on the rest. Choosing the weekend a month ahead, telling the staffer and deal leads early and finishing deliverables by Friday night makes the protection credible rather than a hope.

                ## Milestones
                1. One weekend a month chosen at least four weeks ahead and written in the calendar.
                2. The staffer and deal leads told the date two weeks ahead.
                3. Friday-night handover of anything that could need weekend work.
                4. At least eight protected weekends kept in a twelve-month period.

                ## Notes
                Live deals sometimes win, especially near signing. When a protected weekend is lost, book the replacement straight away rather than letting it quietly disappear.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight or more protected weekends kept in a year, each booked four weeks ahead and announced to the staffer two weeks ahead."
                cadence: cyclic
              tasks:
                - "Choose next month's protected weekend and put it in the calendar @recurring(monthly:3)"
                - "Tell the staffer and deal leads the date two weeks ahead"
                - "List what must be finished by Friday night before the weekend"
                - "Book a replacement weekend straight away if this one is lost"
            - name: Deal drive permissions and hygiene check
              description: |-
                ## Purpose
                Deal folders collect people: a summer intern, a teammate who rotated off, an adviser given temporary access. Checking once a month that each live deal folder's access list matches the current team, and raising changes through the proper route, is both good workflow and part of how information barriers are kept.

                ## Milestones
                1. The access list for every live deal folder compared with the current working group.
                2. Anyone no longer on the deal flagged to the folder owner or IT for removal.
                3. No files for one deal saved inside another deal's folder.
                4. The check done monthly for six months.

                ## Notes
                Analysts usually cannot change permissions themselves. The job is to notice and raise it, through the route your bank sets.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly checks recorded, each comparing every live deal folder's access list with its working group and raising any mismatch."
                cadence: rolling
              tasks:
                - "Compare each deal folder's access list with its working group @recurring(monthly:19)"
                - "Raise any mismatch with the folder owner through the proper route"
                - "Move any file saved in the wrong deal folder"
                - "Note the date of each check in your deal admin file"
            - name: Estimating how long tasks really take
              description: |-
                ## Purpose
                Telling a VP that a page will take an hour when it takes three is routine, and the gap becomes a missed deadline at midnight. Recording the estimate and the actual time for a month of tasks shows your own multiplier for each kind of work, so the next promise is one you can keep.

                ## Milestones
                1. Estimate and actual hours recorded for at least thirty tasks over a month.
                2. Tasks grouped by type: comps refresh, new model, deck page, data pull, markup turn.
                3. A personal multiplier calculated for each type.
                4. Estimates given to seniors adjusted by the multiplier from then on.

                ## Notes
                Start from the **Metrics log** template. Most people underestimate markup turns most, because comments arrive in waves.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Thirty or more tasks logged with estimated and actual hours, and a personal multiplier written for each task type."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Add estimate and actual columns to the master task list"
                - "Record both numbers for every task for one month"
                - "Group the results by task type and work out the ratio"
                - "Use the ratio on the next three estimates you give a senior"
            - name: Clarifying questions in one message
              description: |-
                ## Purpose
                Five separate questions to a busy MD across an evening read as five interruptions, and three of them could have waited. Learning to hold questions, check what can be answered from the deal folder or a teammate, and send the rest in one numbered message is a skill seniors notice quickly.

                ## Milestones
                1. A rule to collect questions for thirty minutes before sending, unless work is blocked.
                2. Each question checked against the deal folder and a teammate first.
                3. Remaining questions sent as one numbered message with your proposed answer for each.
                4. The habit used across a full live deal.

                ## Notes
                Putting your best guess next to each question lets a senior reply with a single word, which is why they answer this format faster.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "For one full live deal, questions to seniors go in single numbered messages, each with a proposed answer."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Start a running questions note for each live deal"
                - "Check each question against the folder and a teammate before asking"
                - "Send the remaining questions as one numbered message with proposed answers"
                - "Note how quickly seniors replied compared with single questions"
            - name: Competing deadlines from two senior bankers
              description: |-
                ## Purpose
                Two MDs on two deals both want their work first, and neither knows about the other. Learning to surface the clash early, in writing, to both people or the staffer, with a proposed order and the reason, is safer than choosing silently and disappointing one of them at midnight.

                ## Milestones
                1. A short written script for flagging a clash with times and a proposed order.
                2. The clash flagged within an hour of spotting it, not at the deadline.
                3. The decision on order recorded in writing by the person who made it.
                4. Two clashes handled this way with no surprise for either senior.

                ## Notes
                Your job is to make the clash visible and propose an order. Deciding between two MDs is usually the staffer's or the associates' call, not yours.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two deadline clashes handled by written flag within an hour, with the deciding senior's choice recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Draft a three-sentence message for flagging a deadline clash"
                - "Ask a second-year analyst how clashes are usually escalated in the group"
                - "Flag the next clash within an hour of seeing it"
                - "Save the reply that settled the order in the deal admin folder"
            - name: Parallel editing of one deck without collisions
              description: |-
                ## Purpose
                When three people work on one deck overnight, two of them usually save over each other. Agreeing a page-ownership split, a single person who merges, and a check-in and check-out rule for the master file avoids the four in the morning discovery that half the comments vanished.

                ## Milestones
                1. Page owners agreed and written on the first slide or the tracker.
                2. One named person responsible for merging pages into the master.
                3. Each contributor working on their own copy named to the convention.
                4. A merged deck with no lost pages or comments on the next team turn.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One team deck turned with named page owners and a single merger, with no lost pages or comments after merging."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Propose a page-ownership split on the next shared deck"
                - "Agree who merges pages into the master file"
                - "Name each contributor's working copy to the file convention"
                - "Compare the merged deck page count with the sum of all owners' pages"
            - name: Briefing an offshore or research support team
              description: |-
                ## Purpose
                Many banks send data pulls, comps spreads and formatting to support centres in other time zones, and a vague brief at seven in the evening returns the wrong thing at seven the next morning. Writing briefs with a sample output, sources, a deadline in their time zone and a contact for questions makes overnight help actually help.

                ## Milestones
                1. A brief format with scope, sample output, sources, deadline in both time zones and a contact.
                2. Briefs for the next three requests written to the format.
                3. Returned work checked against the brief, with gaps fed back the same day.
                4. Turnaround and first-time accuracy noted for each request.

                ## Notes
                Follow your bank's rules on which information can go to support teams, especially for public company or inside information.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three support requests briefed to a written format, with returned work checked and accuracy recorded for each."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page brief format for support team requests"
                - "Attach a sample output to the next request you send"
                - "State the deadline in the support team's time zone and yours"
                - "Feed back any gaps on the same day the work returns"
            - name: Batching data and information requests
              description: |-
                ## Purpose
                Asking the client for one missing number at a time through the associate wastes a day per question and annoys the client's finance team. Keeping a running data request list per deal and sending it as one batch at agreed points makes the request look organised and gets answers sooner.

                ## Milestones
                1. A data request list per deal with item, reason, owner and date asked.
                2. Batches sent through the associate at agreed points rather than item by item.
                3. Answers logged against each item and the list closed out.
                4. No duplicate requests to the client on any deal.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every live deal has a data request list sent in batches through the associate, with answers logged and no duplicate asks."
                cadence: rolling
              tasks:
                - "Start a data request list in each live deal folder"
                - "Agree with the associate when batches go to the client"
                - "Log each answer against its request when it arrives"
                - "Check the list for duplicates before every batch"
            - name: Status updates seniors actually read
              description: |-
                ## Purpose
                Long emails explaining everything you did tonight get skimmed on a phone and the important line is missed. Learning a short format, the answer first, then what changed and what you need, makes your updates the ones a VP reads in the lift and acts on.

                ## Milestones
                1. A format written down: headline, what changed, what is needed and by when.
                2. Five recent updates rewritten in the format as practice.
                3. The format used for every update on a live deal for two weeks.
                4. One senior's feedback on the new format noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every update on one live deal for two weeks follows a written headline-first format, with a senior's feedback recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the headline-first update format in four lines"
                - "Rewrite five of your recent update emails in the format"
                - "Use the format for every update on one deal for two weeks"
                - "Ask the deal associate whether the new updates are easier to act on"
            - name: Choosing a task tool inside the bank's rules
              description: |-
                ## Purpose
                Popular personal productivity apps are often blocked on bank devices, and putting deal information into an unapproved app can breach confidentiality rules. Comparing the tools you are actually allowed, the email client's tasks, an approved notes app, a spreadsheet on the drive or paper, against how you work settles the question once.

                ## Milestones
                1. The list of tools your bank permits for notes and tasks confirmed with IT or compliance.
                2. Two or three permitted options tried for a week each.
                3. One tool chosen against criteria: speed of capture, phone access, search and deal grouping.
                4. The decision recorded with the reason, and the other tools dropped.

                ## Notes
                Never move deal information into a personal app or account to work around a blocked tool.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A permitted task tool chosen after trying at least two options, with criteria and reasons written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask IT or compliance which notes and task tools are permitted"
                - "Write your four criteria for a task tool"
                - "Try two permitted tools for a week each"
                - "Record the choice and the reason in your reference folder"
            - name: Reusable email templates for routine requests
              description: |-
                ## Purpose
                The same dozen emails go out every week: sending a model for review, chasing data, confirming a meeting, circulating a working group list. Saving clean templates for each, with placeholders for deal code and dates, saves minutes many times a day and keeps the tone right at three in the morning.

                ## Milestones
                1. The ten routine emails you send most often listed.
                2. A template saved for each in the email client, with deal-specific parts marked.
                3. Each template checked by an associate for tone and content.
                4. Templates used for a month and adjusted where they did not fit.

                ## Notes
                A template should never carry over another deal's name. Leave obvious gaps that force you to fill them.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten routine email templates saved, reviewed by an associate and used for a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the ten routine emails you sent most in the last fortnight"
                - "Ask the agent to draft neutral templates for each with no client details"
                - "Save each template in the email client with clear placeholder gaps"
                - "Ask an associate to read the templates for tone"
            - name: One-week audit of where the hours went
              description: |-
                ## Purpose
                Most analysts can say how many hours they worked, but not how many went to waiting for comments, reformatting or hunting for files. Logging a full week in half-hour blocks shows the two or three time sinks that a change in workflow could actually remove.

                ## Milestones
                1. One working week logged in half-hour blocks by deal and activity type.
                2. Hours totalled by category: modelling, decks, waiting, admin, searching, meetings.
                3. The two biggest avoidable time sinks named.
                4. One change made for each, and a second week logged to check the effect.

                ## Notes
                Start from the **Metrics log** template. Keep this separate from any official hours record your bank asks for.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two weeks of half-hour logs by activity, with the two largest avoidable time sinks named and one change tested for each."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Set up a half-hour log with deal and activity columns"
                - "Log every half hour for one full working week"
                - "Total the hours by category and pick the two worst sinks"
                - "Try one fix for each sink and log a second week"
            - name: Confirming the output format before starting
              description: |-
                ## Purpose
                Beautifully built analysis in the wrong shape, landscape when the book is portrait, quarterly when the MD wanted annual, is a full rework. Agreeing the output before the first formula, ideally by sketching the page or table and getting a nod, is the cheapest quality control there is.

                ## Milestones
                1. A habit of sketching the output on paper or a blank slide before any build.
                2. The sketch shown to the requester for a yes on the next five requests.
                3. Format-related rework counted before and after.
                4. The sketch habit kept for a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five consecutive requests start with a sketch approved by the requester, and format rework falls compared with the prior month."
                cadence: rolling
              tasks:
                - "Sketch the output of your next request on a blank slide"
                - "Show the sketch to the requester before building"
                - "Count format-related rework for a month"
                - "Keep approved sketches in the deal folder as a reference"
            - name: Mis-send and wrong-version post-mortem
              description: |-
                ## Purpose
                Every analyst sends something wrong eventually; the ones who improve write down how it happened. Looking back at the last three things that left your desk with a problem, a wrong attachment, a stale number, a missing page, and tracing each to the step that failed gives you a specific fix rather than a vague resolve to be careful.

                ## Milestones
                1. The last three outgoing errors listed with date, deal and what went wrong.
                2. Each traced to the step in your workflow that failed.
                3. One concrete fix added to the pre-send checklist or the naming rule for each.
                4. No repeat of the same error type in the next quarter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three outgoing errors traced to the failing step, each with a fix added to the checklist, and no repeat type in a quarter."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your last three outgoing errors with date and deal code"
                - "Trace each one to the step where it slipped through"
                - "Add one specific fix for each to your pre-send checklist"
                - "Review the list again at the end of the quarter"
            - name: Renegotiating a deadline before it is missed
              description: |-
                ## Purpose
                Deadlines that will be missed are a problem at four in the afternoon and a crisis at midnight. Deciding on a trigger, when you realise a deliverable is at risk, you say so within the hour with a new time and what you can deliver by the original, turns a missed deadline into a managed change.

                ## Milestones
                1. A personal trigger written: any task likely to be more than an hour late is flagged.
                2. A short message format with the new time and what can be delivered by the original.
                3. The trigger used on the next at-risk deliverable.
                4. No deadline in a month missed without notice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "For a month, every at-risk deliverable is flagged within an hour of spotting it, with a new time and a partial delivery offered."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your trigger for flagging an at-risk deadline"
                - "Draft the message offering a new time and a partial delivery"
                - "Use the message the next time a deliverable slips"
                - "Note how the senior responded and adjust the wording"
            - name: Working on the move with offline files
              description: |-
                ## Purpose
                Flights to client meetings and long commutes can be useful hours or dead ones, depending on whether the right files are on the laptop and the privacy screen is fitted. Preparing a travel kit and a rule for what can be opened in public turns travel into time for formatting and checking.

                ## Milestones
                1. A list of what is allowed to be worked on in public places under your bank's rules.
                2. A privacy screen fitted and offline access to approved files tested.
                3. A travel checklist covering charger, adapter, remote access and the deal contact sheet.
                4. One trip where planned tasks were finished in transit.

                ## Notes
                Talking about deals on phones in trains, lifts and airport lounges is a classic confidentiality breach. Use code names and save calls for private spaces.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A travel checklist and public-working rule exist, a privacy screen is fitted, and one trip is used to finish planned tasks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your bank's rules on working in public places"
                - "Order or request a privacy screen for the laptop"
                - "Write a travel checklist for client trips"
                - "Plan the tasks you will finish on the next trip"
            - name: First week on a newly staffed deal
              description: |-
                ## Purpose
                Being added to a deal halfway through means a pile of documents, a team you may not know and seniors who assume you already understand the situation. A short ramp-up plan, reading the key documents in order, setting up folders and contacts, and asking for a fifteen-minute briefing, gets you useful by day three rather than day ten.

                ## Milestones
                1. The latest pitch or engagement deck, model and process timeline read in that order.
                2. Deal folder, contact sheet and task list entries set up on day one.
                3. A fifteen-minute briefing with the associate covering stage, next deadlines and sensitivities.
                4. A first deliverable sent within the first three days.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within three days of joining a deal, the core documents are read, admin is set up, a briefing is held and a first deliverable sent."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the associate for the three documents to read first"
                - "Set up the deal folder, contact sheet and task list entries"
                - "Book a fifteen-minute briefing on stage and next deadlines"
                - "Write down any sensitivities about the client or the other side"
            - name: The 48 hours before a client meeting
              description: |-
                ## Purpose
                Most of the analyst workload in the two days before a meeting is predictable: final comments, page checks, printing or the screen-share version, logistics and a backup copy. A countdown plan with times for each step means the last-minute surprise is a new comment, not a forgotten print order.

                ## Milestones
                1. A countdown list from 48 hours out with owners and cut-off times.
                2. Comment cut-off agreed with the deal lead.
                3. Print order or screen-share version booked with a time.
                4. Backup copies saved where the deal lead can reach them at the meeting.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A timed 48-hour countdown is used for one client meeting, with comment cut-off, print or screen version and backups delivered on time."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the 48-hour countdown with times for each step"
                - "Agree the comment cut-off with the deal lead"
                - "Book the print order or prepare the screen-share version"
                - "Save backup copies where the deal lead can reach them"
            - name: Holiday handover pack for live deals
              description: |-
                ## Purpose
                Holidays that end with a call on the second day usually started with a handover that lived only in your head. A one-page pack per deal, with stage, where files live, open items and who to call, lets a colleague cover properly and makes it reasonable to leave the phone off.

                ## Milestones
                1. Holiday dates agreed with the staffer and the deal leads at least a month ahead.
                2. A one-page handover per deal covering stage, files, open items and contacts.
                3. A thirty-minute walk-through with the covering analyst.
                4. An out-of-office message naming the cover on each deal.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Before a holiday, each live deal has a one-page handover walked through with the covering analyst, and the out-of-office names the cover."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree holiday dates with the staffer and deal leads"
                - "Write a one-page handover for each live deal"
                - "Walk the covering analyst through each handover"
                - "Set an out-of-office message naming the cover on each deal"
            - name: Catching up on the first day back
              description: |-
                ## Purpose
                Returning from holiday to a thousand emails tempts you to read them in order, which takes a full day and answers nothing. Starting with a call to the covering analyst, then reading only the latest thread on each deal, gets you back on the work within a morning.

                ## Milestones
                1. A fifteen-minute call with the covering analyst before opening email.
                2. The latest version of each deal's model and deck opened and skimmed.
                3. Only the most recent thread per deal read in full.
                4. The master task list rebuilt and a status note sent to each deal lead by noon.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "By noon on the first day back, the cover call is done, the task list rebuilt and every deal lead has a status note."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a call with the covering analyst for your first morning back"
                - "Open the latest model and deck on each deal"
                - "Read only the newest thread per deal in full"
                - "Send each deal lead a status note before noon"
            - name: Shutting down a deal that dies
              description: |-
                ## Purpose
                Deals pause or die suddenly when a client changes its mind or a buyer walks, and the folder, the tasks and the open requests linger for months. A short shutdown routine, closing tasks, archiving files, recording the outcome and telling the staffer, frees capacity on paper as fast as it is freed in reality.

                ## Milestones
                1. All open tasks for the deal closed or reassigned.
                2. Files archived according to the group's retention practice.
                3. A short note of the outcome and the reusable work saved for the team.
                4. The staffer told the same day, with the freed capacity noted on the Monday snapshot.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within two days of a deal ending, its tasks are closed, files archived, the outcome noted and the staffer told."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Close or reassign every open task for the dead deal"
                - "Archive the files following the group's retention practice"
                - "Note the outcome and any reusable work in your reference index"
                - "Tell the staffer the same day that capacity has freed up"
            - name: Year-end tidy of closed and dead deals
              description: |-
                ## Purpose
                Once a year, ahead of reviews and the January rush, the deal list deserves a proper close-out. Going through every deal you touched, confirming the archive is clean, recording your role and saving the best work to the reference folder leaves a tidy record for review season and an empty desk for the new year.

                ## Milestones
                1. A list of every deal worked on in the year, with dates and outcome.
                2. Your role and main deliverables on each written in a line.
                3. Folders for finished deals archived and confirmed clean.
                4. The best two or three pieces of work added to the reference folder.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A year-end deal list with role, deliverables and outcome for each deal, plus archived folders and refreshed reference examples."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "List every deal worked on this year with dates and outcome @recurring(yearly)"
                - "Write your role and main deliverables on each in a line"
                - "Confirm finished deal folders are archived and clean"
                - "Add the best work of the year to the reference folder"
            - name: First month as a new analyst on the desk
              description: |-
                ## Purpose
                The first month sets habits that last the whole programme, and most new analysts spend it reacting to requests with no system at all. Using the month to build the master list, folders, naming, contact sheets and the pre-send check, one a week, means the system is ready before the first live deal peaks.

                ## Milestones
                1. Week one: master task list and folder tree in place.
                2. Week two: naming convention and contact sheets on every deal.
                3. Week three: pre-send checklist and intake questions in daily use.
                4. Week four: first Monday snapshot sent and first monthly review done.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Copy the habits of the analyst above you who is trusted with the hardest work, and ask them how they organise.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "By day thirty, master list, folders, naming, contact sheets, pre-send check and the Monday snapshot are all in use."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the most organised second-year analyst to show you their system"
                - "Build the master task list and folder tree in week one"
                - "Add naming and contact sheets in week two"
                - "Send the first Monday snapshot in week four"
            - name: Boutique analyst without a staffer or support team
              description: |-
                ## Purpose
                At a boutique there may be no staffer, no production team and no support centre, so the analyst formats, prints, books rooms and builds the model. Being explicit with the partners about what you are carrying, and building simple stand-ins for the missing functions, stops the invisible work from swallowing the deal work.

                ## Milestones
                1. A list of the support functions you are covering, with rough weekly hours for each.
                2. A shared workload view the partners can see in place of a staffer.
                3. Simple stand-ins for production: a print shop contact, a formatting checklist, a room booking routine.
                4. A monthly conversation with a partner about what you are carrying.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A visible workload view replaces the staffer, support tasks have stand-in routines, and a monthly workload talk with a partner happens."
                cadence: rolling
              tasks:
                - "List every support task you did last month with rough hours"
                - "Share a workload view the partners can check"
                - "Set up a print shop contact and a formatting checklist"
                - "Book a short workload talk with a partner @recurring(monthly:27)"
            - name: Working with a team in another time zone
              description: |-
                ## Purpose
                When the deal lead is in London, the client in New York and you are in a third city, the working day stretches to whoever is awake. A clear overlap window, a handover note at the end of each side's day and deadlines stated in both time zones keep the deal moving without you being on call for all of it.

                ## Milestones
                1. The working hours of each location written on the contact sheet.
                2. A daily overlap window agreed for live discussion.
                3. A handover note format used at the end of your day for the next time zone.
                4. Every deadline written with both time zones for a month.

                ## Notes
                Clock changes happen on different dates in different countries, so check the gap twice a year rather than assuming it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An overlap window and handover format are in use on a cross-time-zone deal for a month, with every deadline stated in both zones."
                cadence: rolling
              tasks:
                - "Add each location's working hours to the deal contact sheet"
                - "Agree a daily overlap window with the other office"
                - "Send a handover note at the end of your day for the next time zone"
                - "Recheck the time gap when clocks change in either country"
            - name: Covering for an absent teammate's deals
              description: |-
                ## Purpose
                Covering for a teammate who is on holiday, ill or pulled onto an urgent deal means you inherit their deals overnight on top of your own. A short intake for covered work, getting their handover, separating it on your task list and telling their deal leads what you can and cannot take, prevents two sets of deals from failing together.

                ## Milestones
                1. The teammate's handover or a walk-through obtained before taking anything on.
                2. Covered deals marked separately on the master task list.
                3. Each covered deal lead told what you will handle and what waits.
                4. A clean handback note when the teammate returns.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "During one cover period, covered deals are listed separately, their leads told the scope of cover, and a handback note delivered."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask for the teammate's handover or a fifteen-minute walk-through"
                - "Mark covered deals separately on your master list"
                - "Tell each covered deal lead what you will and will not handle"
                - "Write a handback note for the teammate's return"
            - name: Returning after extended leave
              description: |-
                ## Purpose
                Coming back after parental leave, illness or a long absence means new deals, new team members and a workload that can rebuild faster than you are ready for. Agreeing a phased return with the staffer, rebuilding your system on day one and setting a check-in at four weeks makes the return manageable.

                ## Milestones
                1. A return conversation with the staffer or HR before the first day, covering pace and deal load.
                2. Folders, contact sheets and task list rebuilt for the deals you join.
                3. One deal taken on first, with a second added only after a check-in.
                4. A four-week check-in held and the plan adjusted.

                ## Notes
                Any formal phased return or adjustments are agreed with HR and, where relevant, your doctor. This project is about organising the work once the terms are set.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A return plan agreed before day one, the system rebuilt, deal load added in steps and a four-week check-in recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask HR or the staffer for a return conversation before your first day"
                - "Rebuild folders and the task list for the first deal you join"
                - "Agree the date for taking on a second deal"
                - "Book the four-week check-in in the calendar"
            - name: Analyst in a small-market regional team
              description: |-
                ## Purpose
                In a regional bank or a small market, a Caribbean financial group for example, one analyst may work on an M&A sale, a local bond and a valuation in the same week, with fewer templates and thinner data. A workflow that keeps product types separate, keeps local data sources in one place and flags when work needs a specialist elsewhere in the group keeps the variety from turning into chaos.

                ## Milestones
                1. Deals tagged by product type on the master list, with different checklists where needed.
                2. A single list of local data sources: exchange filings, central bank data, registries.
                3. A contact for specialist help in the wider group for each product type.
                4. A month of mixed-product work tracked without a missed deliverable.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Deals are tagged by product with matching checklists, local sources are listed, and a month of mixed work runs without misses."
                cadence: rolling
              tasks:
                - "Tag each live deal by product type on the master list"
                - "List the local data sources you use most, with links saved"
                - "Name a specialist contact in the wider group for each product"
                - "Refresh the local data source list @recurring(quarterly)"
            - name: Passing your system to the new analyst class
              description: |-
                ## Purpose
                Second-year analysts are usually asked to help the new class, and a working system is one of the most useful things to hand over. Writing a short guide to the master list, folders, naming and pre-send check, and walking two new joiners through it, also forces you to see which parts of your own system have decayed.

                ## Milestones
                1. A two-page guide to your workflow, with no client information.
                2. Two new analysts walked through it in person.
                3. Their questions noted and the guide updated.
                4. A check-in with each a month later.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A two-page workflow guide shared with two new analysts, updated from their questions, with a month-later check-in held."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a two-page guide to your workflow with no client details"
                - "Walk two new analysts through the guide"
                - "Update the guide from their questions"
                - "Book a check-in with each a month later"
            - name: Running the workstream tracker for a deal team
              description: |-
                ## Purpose
                On larger deals one analyst often owns the team tracker: every workstream, owner, deadline and status for bankers, lawyers and accountants. Running it well, with a set update time, clear status definitions and a version circulated before each team call, makes you the person the VP relies on to know where the deal stands.

                ## Milestones
                1. A tracker with workstream, owner, deadline, status and next step columns.
                2. Status definitions written so that on track and at risk mean the same to everyone.
                3. Updates collected at a set time and circulated before each team call.
                4. The tracker used as the agenda of the weekly team call.

                ## Notes
                A tracker that is updated only when someone asks becomes fiction within a week. A fixed update time matters more than the format.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A team tracker with written status definitions is circulated before every weekly team call for a full deal phase."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree the tracker columns and status definitions with the VP"
                - "Collect updates from every workstream owner before the team call @recurring(weekly:wed)"
                - "Circulate the tracker an hour before each team call"
                - "Mark items that have been at risk for two weeks running"
            - name: Personal how-to notes from every deal
              description: |-
                ## Purpose
                Every deal teaches something small and specific: how a data provider screen works, how a particular client wants pages, which lawyer needs files as PDFs. Writing these down as short how-to notes, filed by topic, builds a private handbook that makes each new deal faster than the last.

                ## Milestones
                1. A how-to notes file organised by topic: data, formatting, clients, process, people.
                2. At least one note added per live deal per month.
                3. Notes reviewed monthly and outdated ones removed.
                4. Fifty notes collected over a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A topic-organised how-to file on firm systems reaches fifty notes in a year, reviewed monthly."
                cadence: rolling
              tasks:
                - "Create a how-to notes file with five topic headings"
                - "Add one note from each live deal this month"
                - "Review the notes and remove outdated ones @recurring(monthly:16)"
                - "Search the notes first when a new task feels familiar"
            - name: A year of turnaround and error records
              description: |-
                ## Purpose
                Reviews ask about accuracy and speed, and memory is unreliable after twelve months of late nights. Keeping a simple monthly record of deliverables, turnaround against promise and errors caught by seniors gives you facts for the review conversation and shows where the workflow is getting better.

                ## Milestones
                1. A monthly log of deliverables sent, on-time rate and errors caught by others.
                2. Twelve months recorded.
                3. Trend charts for on-time rate and errors drawn from the log.
                4. The record summarised in a paragraph before the annual review.

                ## Notes
                Start from the **Metrics log** template. Keep it honest: a log that hides errors cannot show improvement.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Twelve monthly entries of deliverables, on-time rate and errors, summarised in a paragraph before the annual review."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set up a monthly log with deliverables, on-time and error columns"
                - "Fill in the month's numbers from the master task list @recurring(monthly:28)"
                - "Draw the on-time and error trends each quarter"
                - "Write a one-paragraph summary before the annual review"
            - name: Workflow for live deals near signing
              description: |-
                ## Purpose
                In the final ten days before signing, requests arrive every hour and the tolerance for errors falls to zero. A tighter workflow for this stretch, hourly list checks, a second pair of eyes on anything external and clear sleep shifts with the other analyst, keeps quality up when everyone is tired.

                ## Milestones
                1. A short signing-week routine agreed with the deal team.
                2. Anything external checked by a second person before sending.
                3. Sleep or cover shifts agreed with the other analyst on the deal.
                4. Signing reached with no error in an external document traced to the analyst team.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Through one signing week, every external document gets a second check and cover shifts run as agreed, with no analyst-side error."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree a signing-week routine with the associate"
                - "Set up a second-check rule for every external document"
                - "Agree sleep or cover shifts with the other analyst"
                - "Review the master list every two hours during the final days"
            - name: Quarterly honest look at the workflow
              description: |-
                ## Purpose
                Quarterly, it is worth asking whether the system is still serving you or you are serving it. A short written review, what worked, what decayed, what the weekends looked like and what one senior said, keeps the workflow tuned to how your job actually changes as you take on more.

                ## Milestones
                1. A quarterly note covering errors, turnaround, protected weekends and system decay.
                2. One piece of feedback asked of a senior on how you organise work.
                3. Up to three changes chosen for the next quarter.
                4. Four quarterly notes in a year, compared at year end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Four quarterly notes in a year, each with a senior's feedback and up to three changes, compared at year end."
                cadence: cyclic
              tasks:
                - "Write the quarterly workflow note @recurring(quarterly)"
                - "Ask one senior how your organisation of work comes across"
                - "Choose up to three changes for the next quarter"
                - "Compare this note with the last one before closing it"
---

# IB Analyst Workflow

This area is the machinery behind an analyst's week: the single task list across three or four live deals, the folders and file names that stop version mistakes, the way requests from staffers and seniors get captured, and the checks that happen before anything leaves your desk. It starts with foundations (the master list, folders, naming, contacts and the sign-off chain), moves to the daily and weekly routines, then the skills of estimating, clarifying and escalating, the improvements that cut rework, the dated moments such as a new deal or a holiday handover, variants for first months, boutiques and cross-time-zone teams, and specialist work such as running a whole deal team's tracker.

What repeats is a morning triage and an end-of-night status note on working days, a Monday workload snapshot for the staffer, a Friday file clean-up, and monthly reviews of the task system, the protected weekend and the reference folder, spread across different days. The **Operational checklist**, **Metrics log** and **Onboarding 30/60/90** templates pair with the pre-send check, the time and error records and the first month on the desk. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
