---
id: sales-revenue.product-demo-delivery
name: Sales Demo Delivery
description: "Demo environments that never embarrass you, storylines built on the buyer's own problems, rehearsed tailored demos and same-day recaps that move deals to a next step."
category: business
version: 1.0.0
tags: [sales-revenue, product-demo-delivery, team, founder, small-business, product-demo, presales, demo-environment]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - purchase-decision
    - metrics-log
    - feedback-themes
    - marketing-campaign
    - skills-matrix
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales Demo Delivery
          description: "Designing and delivering tailored product demonstrations that tie features to the buyer's stated problems, including demo environments, scripts and follow-up recaps."
          projects:
            - name: Baseline recording of your current demo
              description: |-
                ## Purpose
                Most demos drift over months until nobody can say how long they run or how much of the time goes on features the buyer never asked about. Recording one real demo and timing each section gives you an honest starting point, so every later change can be measured against it. Do it before rewriting anything, because the recording usually shows a different problem from the one you assumed.

                ## Milestones
                1. One full demo recorded with the buyer's permission, or a realistic dry run if none is booked.
                2. Each section timed and labelled as context, problem, proof or feature tour.
                3. The share of minutes you spoke compared with the buyer worked out.
                4. Three changes written down in order of likely impact.

                ## Notes
                Check the recording consent rules that apply to you and tell attendees the call is recorded. A dry run with a colleague playing the buyer is fine if a real call is not possible this week.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A timed breakdown of one recorded demo exists, with the talk ratio and three ranked changes written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick the next booked demo you can record with the buyer's consent"
                - "Watch the recording with a timer and label each section"
                - "Count how many minutes the buyer spoke compared with you"
                - "Write down the three changes you would make first"
            - name: Discovery to demo handoff checklist
              description: |-
                ## Purpose
                Without discovery notes, a demo turns into a feature tour, because the presenter has nothing to aim at. A short checklist of what must be known before a demo is booked (the top problems in the buyer's words, who will attend, what they use today and what a good outcome looks like) stops generic demos at the source. Teams with separate prospecting and demo roles feel this most, because the notes often never make the handoff.

                ## Milestones
                1. A one-page checklist of the six facts needed before any demo.
                2. The checklist added as required fields or a note template on the deal record.
                3. A rule agreed for missing facts: a short call first, not a full demo.
                4. Ten consecutive demos booked with the checklist complete.

                ## Notes
                Start from the **Operational checklist** template. The checklist asks for facts; it does not replace the discovery conversation itself.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten consecutive demos have a completed handoff checklist attached to the deal record before the meeting."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the six facts you most wished you had before your last three demos"
                - "Turn the list into a checklist from the operational checklist template"
                - "Add the checklist as a note template on the deal record"
                - "Agree with whoever books demos what happens when items are missing"
            - name: Dedicated demo environment set-up
              description: |-
                ## Purpose
                Demoing from production or a colleague's test account is how real customer names, half-built features and broken settings end up on a prospect's screen. A separate demo tenant or sandbox, with its own logins and settings owned by sales, gives you a stable stage that nobody else changes the night before a big call.

                ## Milestones
                1. A separate demo account or sandbox provisioned and clearly named.
                2. Individual logins for every presenter, with no shared personal passwords.
                3. Feature settings matched to what customers on the standard plan actually get.
                4. A named owner for the environment and a contact in product or engineering for problems.
                5. A list of anything in the environment that customers cannot buy yet.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sales-owned demo environment exists with individual logins, a named owner and every unreleased feature hidden or flagged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask product or engineering how a separate demo tenant can be provisioned"
                - "Create individual presenter logins rather than one shared account"
                - "Match feature settings to the plan most buyers will purchase"
                - "Name an owner for the environment and write it in the team handbook"
            - name: Believable demo data for your main segment
              description: |-
                ## Purpose
                Empty dashboards, 'Test User 1' and placeholder text make buyers imagine the product failing in their hands. Data that looks like a company in your main segment, with plausible names, volumes, dates and a few messy records, lets them picture their own team using it. Building one good data set once is far cheaper than apologising for bad data in every call.

                ## Milestones
                1. A fictional company profile written for your most common buyer segment.
                2. At least three months of records loaded so trends and reports have shape.
                3. A few realistic exceptions included, such as an overdue item or a duplicate, to show how the product handles them.
                4. No real customer names, personal data or confidential figures anywhere in the set.
                5. The data set saved so it can be reloaded after a reset.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reloadable data set for one fictional company in your main segment is live in the demo environment with no real customer data."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-paragraph profile of a fictional company in your main segment"
                - "Generate three months of plausible records for that company"
                - "Search the environment for real customer names or personal data and remove them"
                - "Export the data set so it can be reloaded after a reset"
                - "Shift dates in the data set forward so nothing looks stale @recurring(quarterly)"
            - name: Buyer problem to demo moment map
              description: |-
                ## Purpose
                What buyers remember is whether the demo showed their problem being solved, not how many features they saw. Mapping the three to five problems your buyers raise most often to the exact screen or workflow that proves each one gives every demo a spine. When a buyer names a problem in discovery, you already know which two minutes of the product to show.

                ## Milestones
                1. The five problems buyers raise most often listed in their own words from recent call notes.
                2. Each problem paired with one screen or workflow that proves it is solved.
                3. A one-sentence consequence written for each pairing, tied to time, money or risk.
                4. Features with no matching problem marked as optional extras rather than core demo.

                ## Notes
                Take the problems from real call notes and recordings, not from the marketing site, or the map will describe the product you wish you sold.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page map links the five most common buyer problems to a specific demo workflow and a business consequence for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the problems buyers named in your last ten discovery notes"
                - "Group them into the five that come up most often"
                - "Pair each problem with the single screen that best proves it is solved"
                - "Ask the agent to tighten each consequence sentence to under twenty words"
            - name: Remote demo audio, video and screen kit
              description: |-
                ## Purpose
                On a video call the buyer judges the product partly by how the demo looks and sounds: a muffled microphone, a tiny shared screen or a notification popping up mid-demo all cost credibility. Choosing a decent microphone, a second screen and a clean presenter profile is a one-off spend that pays back on every call.

                ## Milestones
                1. Current audio and video tested on a recorded call and rated honestly.
                2. A microphone, camera and second monitor chosen within an agreed budget.
                3. A clean browser profile set up with only demo bookmarks and no personal tabs.
                4. Notifications silenced automatically during calls on every device in view.

                ## Notes
                Start from the **Purchase decision** template. Audio matters more than the camera: buyers forgive a soft picture far more readily than an echo.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A kit decision is recorded within budget, a clean demo browser profile is in use and a test recording passes a colleague's check."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record a two-minute test call and listen back on headphones"
                - "Shortlist two microphones and one second monitor within budget"
                - "Create a separate browser profile used only for demos"
                - "Turn on do-not-disturb rules that start with every calendar call"
                - "Retest your audio and video on a recorded call @recurring(yearly)"
            - name: Core thirty-minute demo storyline
              description: |-
                ## Purpose
                A reusable storyline is the skeleton every tailored demo hangs on: a short agenda check, the buyer's problems restated, three proof moments, a summary and an agreed next step. Writing it down once means each new demo is an edit rather than a blank page, and new sellers have something proven to learn from.

                ## Milestones
                1. A storyline written in five parts with target minutes for each.
                2. The three default proof moments chosen from the problem to demo map.
                3. Talk track written for the transitions between sections, not for every click.
                4. The storyline run end to end in under thirty minutes in rehearsal.
                5. Feedback from one colleague or advisor folded in.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written five-part demo storyline exists and has been delivered to a real buyer within thirty minutes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft the five parts of the storyline with target minutes beside each"
                - "Write transition lines that link each proof moment back to a buyer problem"
                - "Rehearse the storyline aloud against a timer"
                - "Deliver it to a real buyer and note where it ran long"
            - name: Demo confirmation and agenda email
              description: |-
                ## Purpose
                No-shows and surprise attendees wreck demos more often than bad software does. A confirmation email sent a day or two ahead, restating the problems you will cover, asking who else is joining and inviting changes to the agenda, lifts attendance and lets you tailor for the people who will actually be there.

                ## Milestones
                1. A confirmation email template that restates the buyer's top problems.
                2. A question in it asking who else will attend and what their roles are.
                3. The email sent ahead of every demo for a month.
                4. No-show rates before and after compared.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A confirmation template is in use, and a month of demos shows its no-show rate compared with the month before."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a confirmation email that names the buyer's top two problems"
                - "Add a line asking who else is joining and what they care about"
                - "Save it as a template in your email or sequencing tool"
                - "Compare no-shows for the month before and after using it"
            - name: Demo fail-safe backup plan
              description: |-
                ## Purpose
                Demo environments go down, connections drop and logins expire, usually during the call that matters most. A backup plan prepared in advance (short recorded clips of each proof moment, a screenshot walkthrough and a second way to connect) lets you carry on calmly rather than cancelling.

                ## Milestones
                1. A short screen recording of each core proof moment saved for offline use.
                2. A screenshot walkthrough of the full storyline in a single file.
                3. A second internet connection, such as a phone hotspot, tested with your laptop.
                4. A one-line script ready for telling the buyer you are switching to the backup.

                ## Notes
                Start from the **Operational checklist** template for the pre-call checks. Keep each clip under two minutes so it feels like part of the demo, not a replacement for it.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Offline clips of every core proof moment and a tested backup connection are ready on the demo laptop."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record a short clip of each core proof moment in the storyline"
                - "Save the clips and a screenshot walkthrough to the laptop for offline use"
                - "Test a phone hotspot connection with a full screen share"
                - "Play each backup clip to check it still matches the product @recurring(quarterly)"
            - name: Preparation routine for every booked demo
              description: |-
                ## Purpose
                Twenty minutes of preparation is the difference between a demo about the buyer and a demo about the product. A fixed routine done the day before (reread the discovery notes, look up the attendees, pick the proof moments, load matching data and test the login) makes tailoring a habit instead of a heroic effort.

                ## Milestones
                1. A written prep routine of no more than eight steps.
                2. Every demo for a month prepared with the routine the day before.
                3. A short prep note saved on every deal: attendees, problems and proof moments chosen.
                4. A weekly look ahead at the coming week's booked demos.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every demo in a month has a prep note saved on the deal record the day before it happens."
                cadence: rolling
              tasks:
                - "Write your prep routine as eight steps or fewer"
                - "Block twenty minutes of prep time the day before each booked demo"
                - "Save a prep note with attendees, problems and chosen proof moments on the deal"
                - "Check the coming week's booked demos and block prep time for each @recurring(weekly:mon)"
            - name: Weekly demo environment reset
              description: |-
                ## Purpose
                Every demo leaves debris behind: test records, changed settings, a half-finished workflow someone created live. Resetting the environment to a known state once a week, and checking that logins and integrations still work, means Monday's demo does not start with an apology for Friday's mess.

                ## Milestones
                1. A written list of what a reset restores: data, settings, users and integrations.
                2. The reset done on the same day each week.
                3. A quick test of the five most demoed workflows after each reset.
                4. Problems logged with the environment owner the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The demo environment has been reset and tested on the same day for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "List everything a reset needs to restore"
                - "Reset the demo environment and reload the standard data set @recurring(weekly:fri)"
                - "Click through the five most demoed workflows to confirm they work"
                - "Report any broken workflow to the environment owner straight away"
            - name: Same-day demo recap email
              description: |-
                ## Purpose
                Within a day of a demo, most attendees remember only fragments, and the people who missed it remember nothing. A recap sent the same day, listing the problems discussed, what was shown for each, the questions still open and the agreed next step, becomes the document your champion forwards internally.

                ## Milestones
                1. A recap template with sections for problems, proof shown, open questions and next step.
                2. Short clips or screenshots of the key moments attached or linked.
                3. Every demo for a month followed by a recap within twenty-four hours.
                4. Open questions answered in writing within three working days.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every demo in the last month has a recap email logged on the deal within twenty-four hours."
                cadence: rolling
              tasks:
                - "Write a recap template with problems, proof shown, open questions and next step"
                - "Ask the agent to draft each recap from your call notes before you edit it"
                - "Attach two short clips or screenshots of the key moments"
                - "Check that every demo this week has a recap logged on the deal @recurring(weekly:thu)"
            - name: Demo outcome log and conversion tracking
              description: |-
                ## Purpose
                Without numbers, nobody can say whether demos are getting better or just feel better. Logging every demo with its segment, format, attendees and what happened next shows the rate at which demos lead to the next stage, and where they fall off, within a quarter.

                ## Milestones
                1. A log with date, segment, format, attendee roles, next step agreed and outcome after thirty days.
                2. Every demo for a quarter recorded.
                3. Conversion to the next stage worked out by segment and format.
                4. One finding acted on in the following quarter.

                ## Notes
                Start from the **Metrics log** template. If your CRM already captures these fields, build a saved report instead of keeping a separate log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarter of demos is logged, with conversion to the next stage calculated by segment and format."
                cadence: rolling
              tasks:
                - "Create a demo log from the metrics log template"
                - "Agree what counts as a converted demo, such as a booked next meeting"
                - "Add last month's demos and their outcomes to the log @recurring(monthly:8)"
                - "Work out conversion by segment and format and write one finding @recurring(quarterly)"
            - name: Demo update after each product release
              description: |-
                ## Purpose
                Products change monthly while demos change yearly, so sellers end up showing old screens or missing the feature that would have won the deal. A short routine after each release checks what changed on the demoed screens, updates the storyline and clips, and retires anything no longer true.

                ## Milestones
                1. A named contact who shares release notes with sales before go-live.
                2. Each release checked against the core demo storyline.
                3. Clips, screenshots and talk track updated within a week of the release.
                4. A short changelog of demo edits kept for the team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The demo storyline, clips and changelog were updated within a week of each of the last three releases."
                cadence: rolling
              tasks:
                - "Ask product who can send release notes to sales before go-live"
                - "Check this month's release notes against every screen in the core demo @recurring(monthly:15)"
                - "Re-record any backup clip that shows a changed screen"
                - "Add a line to the demo changelog for each edit"
            - name: Monthly self-review of a recorded demo
              description: |-
                ## Purpose
                Presenters rarely notice their own habits: the filler phrase, the screen left up too long, the question answered before it was finished. Watching one of your own recorded demos each month against a short scorecard catches these early and takes less than an hour.

                ## Milestones
                1. A five-point scorecard covering opening, tailoring, pacing, questions and close.
                2. One recording reviewed each month for six months.
                3. One habit chosen to change after each review.
                4. Scores tracked so improvement is visible over time.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly self-reviews are scored, each naming one habit that is checked again at the next review."
                cadence: rolling
              tasks:
                - "Write a five-point scorecard for your own demos"
                - "Score one of your own demo recordings and pick one habit to change @recurring(monthly:12)"
                - "Note at the next review whether that habit changed"
            - name: Matching demo format to the request
              description: |-
                ## Purpose
                Not every request deserves a sixty-minute tailored live demo, and giving one to a casual browser wastes an afternoon while a serious buyer waits. Clear rules for when to offer a recorded tour, a group demo or a fully tailored live session protect presenter time for the deals that need it.

                ## Milestones
                1. Three demo formats defined, with what each includes and how long it takes to prepare.
                2. Simple rules for which requests get which format, based on facts already captured.
                3. A link or booking page for each format ready to send.
                4. The rules reviewed after a month against what actually converted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Written format rules are in use, and a month of requests has been sorted with them and reviewed against conversion."
                cadence: rolling
              tasks:
                - "Define what a recorded tour, a group demo and a tailored live demo each include"
                - "Write the rules for which requests get which format"
                - "Set up a booking link or page for each format"
                - "Review last month's requests against the format rules @recurring(monthly:26)"
            - name: Shared demo asset library for the team
              description: |-
                ## Purpose
                When each seller keeps their own clips, data tricks and click paths, the team's best demo moments live on one laptop. A shared library of approved clips, data sets, click paths and good recap examples, with an owner and a tidy-up each quarter, lets everyone show the strongest version.

                ## Milestones
                1. One shared folder or page organised by buyer problem and segment.
                2. The best clip and click path for each core proof moment added.
                3. An owner named and a rule for naming files written down.
                4. Out-of-date assets removed every quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A shared library holds a current clip and click path for every core proof moment, with an owner and a dated last tidy-up."
                cadence: rolling
              tasks:
                - "Create a shared folder organised by buyer problem and segment"
                - "Collect the best clip and click path for each proof moment"
                - "Write a file naming rule and name the library owner"
                - "Remove or replace assets that show outdated screens @recurring(quarterly)"
            - name: Quarterly demo storyline refresh
              description: |-
                ## Purpose
                Buyers' problems shift with the economy, competitors and your own product, and a storyline written a year ago slowly stops landing. A quarterly refresh that reads recent demo notes, lost deal reasons and buyer feedback keeps the core demo pointed at what buyers are worrying about now.

                ## Milestones
                1. Last quarter's demo log, recaps and buyer feedback read in one sitting.
                2. Proof moments that rarely led to a next step identified.
                3. At least one section rewritten or replaced.
                4. The updated storyline shared with everyone who demos.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly refreshes are completed in a year, each recording what changed in the storyline and why."
                cadence: cyclic
              tasks:
                - "Gather last quarter's demo log, recaps and buyer feedback in one place"
                - "Mark the proof moments that rarely led to a next step"
                - "Rewrite or replace the weakest section of the storyline @recurring(quarterly)"
                - "Share the updated storyline with everyone who presents demos"
            - name: Post-demo buyer feedback question
              description: |-
                ## Purpose
                Prospects will often tell you what landed and what confused them, if they are asked quickly and simply. One or two questions at the end of the recap collect honest reactions that no internal review can supply.

                ## Milestones
                1. Two short feedback questions written, such as what was most useful and what was missing.
                2. The questions added to every recap email.
                3. Answers grouped into themes each month.
                4. One change made to the demo because of the themes.

                ## Notes
                Start from the **Feedback themes** template. Keep it optional and light: a buyer in the middle of a decision will not fill in a survey.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Three months of buyer feedback are grouped into themes, with one demo change made because of them."
                cadence: rolling
              tasks:
                - "Write two short feedback questions for the end of the recap"
                - "Add the questions to the recap template"
                - "Group the month's feedback answers into themes @recurring(monthly:24)"
                - "Make one demo change based on the strongest theme"
            - name: Tell, show, tell for each proof moment
              description: |-
                ## Purpose
                The simplest demo technique is also the most skipped: say what you are about to show and why it matters to them, show it, then say what they just saw. Practising this on each proof moment until it is automatic stops buyers watching clicks without knowing why.

                ## Milestones
                1. The opening and closing lines written for each core proof moment.
                2. Each moment rehearsed aloud and recorded once.
                3. A colleague able to repeat the point of each moment after watching it.
                4. The pattern used in three live demos.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every core proof moment has written opening and closing lines and has been delivered that way in three live demos."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the opening and closing line for each proof moment"
                - "Record yourself running one proof moment with the pattern"
                - "Ask a colleague to say back the point after watching"
                - "Rehearse one proof moment aloud with the pattern @recurring(weekly:tue)"
            - name: Opening the demo in the buyer's own words
              description: |-
                ## Purpose
                Attention is won or lost in the first three minutes, before a single click. Opening by restating the problems the buyer told you, in their own phrases, and asking whether anything has changed since, shows you listened and lets you adjust the plan before the product appears.

                ## Milestones
                1. A two-minute opening that restates the buyer's top problems and the planned agenda.
                2. A check-in question ready, such as whether priorities have shifted.
                3. The opening practised until it needs no notes.
                4. Five demos opened this way, with any agenda change noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five demos were opened by restating the buyer's problems and checking for changes, with the result noted in each prep note."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a two-minute opening for your next booked demo using the buyer's phrases"
                - "Add a check-in question about what has changed since discovery"
                - "Practise the opening aloud until you need no notes"
                - "Note in the prep record whenever the check-in changed the agenda"
            - name: Click path discipline
              description: |-
                ## Purpose
                Buyers lose the thread when a presenter hunts through menus, opens the wrong tab or scrolls past things they then have to explain. Planning the exact click path for each proof moment, and cutting every unnecessary step, makes the product look as simple as you claim it is.

                ## Milestones
                1. Each proof moment written down as a numbered click path.
                2. Steps that add nothing for the buyer removed or pre-loaded in tabs.
                3. Browser tabs and bookmarks arranged in demo order.
                4. Each path run three times in a row without a wrong click.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every core proof moment has a written click path that you can run three times in a row without a wrong click."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the click path for each proof moment as numbered steps"
                - "Pre-load tabs so you never navigate through menus on screen"
                - "Arrange bookmarks in the order the storyline uses them"
                - "Run each path three times in a row without a wrong click"
            - name: Handling live questions without losing the thread
              description: |-
                ## Purpose
                A good question in the middle of a demo is a buying signal, but answering every one at length can eat the time meant for the proof that wins the deal. Learning to answer briefly, park bigger questions visibly and come back to them keeps buyers heard and the demo on course.

                ## Milestones
                1. The twenty questions asked most often during demos listed with short answers.
                2. A visible place agreed for parked questions, such as a shared note or the chat.
                3. A practice run completed with a colleague interrupting at random.
                4. Parked questions answered in every recap for a month.

                ## Notes
                If a question reveals a problem you did not know about, it may be worth abandoning the plan. Brief answers are for curiosity, not for new pain.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of the twenty most common demo questions with short answers exists, and parked questions appear in recaps for a month."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the twenty questions buyers ask most often during demos"
                - "Write a two-sentence answer for each one"
                - "Run a practice demo where a colleague interrupts at random"
                - "Decide where on screen you will visibly park bigger questions"
            - name: Presenting a demo over screen share
              description: |-
                ## Purpose
                Remote buyers see a compressed picture on a laptop, often with your face covering part of it. Zooming the browser, slowing the cursor, saying where to look and pausing after each key screen makes a remote demo as clear as one in the room.

                ## Milestones
                1. Browser zoom and screen resolution set so text is readable on a small laptop.
                2. A cursor highlight or spotlight tool switched on.
                3. A habit of telling the buyer where to look before each key click.
                4. A recording checked on a small screen to confirm every key screen is readable.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recorded remote demo has been watched on a laptop screen and every key screen is readable and signposted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Share your screen with a colleague on a small laptop and ask what they cannot read"
                - "Set browser zoom and resolution to fix whatever they could not read"
                - "Switch on a cursor highlight tool"
                - "Watch a recording on a small screen and note any unreadable moment"
            - name: Recovering calmly when the demo breaks
              description: |-
                ## Purpose
                Something will fail live eventually: a page that will not load, an error message, a feature that behaves differently from yesterday. Practising a calm, honest recovery (name it, switch to a backup clip, promise a follow-up) protects trust far better than frantic clicking in silence.

                ## Milestones
                1. A short recovery line written for each common failure.
                2. Backup clips reachable within two clicks during a demo.
                3. One rehearsal held where a colleague breaks something on purpose.
                4. Every live failure logged with its cause and reported to the environment owner.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A rehearsal with a deliberate failure has been completed, and every live failure in the last quarter is logged with its cause."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-line recovery for a slow page, an error and a missing feature"
                - "Put backup clips within two clicks of the demo browser"
                - "Ask a colleague to break something during a practice run"
                - "Log each live failure with its cause after the call"
            - name: Checking engagement during a demo
              description: |-
                ## Purpose
                Long stretches of presenting without a pause let buyers drift off unnoticed, especially with cameras off. Building in check-in questions every few minutes, and watching for signals such as note taking or questions drying up, tells you when to speed up, go deeper or stop.

                ## Milestones
                1. Three check-in questions written for each proof moment.
                2. No stretch of more than five minutes of uninterrupted presenting left in the storyline.
                3. A list of engagement signals to watch for on video and in person.
                4. Practised in three demos, with each adjustment noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three demos were delivered with check-ins at least every five minutes, with each adjustment noted in the prep record."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write three check-in questions for each proof moment"
                - "Mark the points in the storyline where you will pause for a question"
                - "List the engagement signals to watch for on video calls"
                - "Note after three demos how each check-in changed what you showed"
            - name: Demoing to technical evaluators
              description: |-
                ## Purpose
                IT, security and engineering attendees want different screens from the business buyer: admin settings, permissions, audit logs, integrations and the API. A separate technical track, with honest answers and a clear line for when to bring in a specialist, stops them becoming the quiet blocker.

                ## Milestones
                1. The admin, permission, audit and integration screens evaluators ask about listed.
                2. A twenty-minute technical track built around them.
                3. Honest answers prepared for the five hardest technical questions.
                4. A rule for which questions go to a specialist and how fast they are answered.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A twenty-minute technical demo track exists and has been delivered to at least one technical evaluator."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the technical screens evaluators asked to see in recent deals"
                - "Build a twenty-minute technical track around those screens"
                - "Write honest answers to the five hardest technical questions"
                - "Agree with a specialist how fast handed-off questions will be answered"
            - name: Cutting the core demo to twenty minutes
              description: |-
                ## Purpose
                Shorter demos usually land better because they leave time for the buyer to talk, ask and decide. Cutting the core demo to twenty minutes forces you to drop features nobody asked for and keep only the proof that maps to stated problems.

                ## Milestones
                1. Every section of the current demo ranked by how often it answers a stated problem.
                2. The lowest ranked sections removed or moved to an optional appendix.
                3. A twenty-minute version rehearsed against a timer.
                4. The shorter version used for a month and its next-step rate compared with before.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A twenty-minute core demo has been used for a month and its next-step rate compared with the previous version."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Rank each demo section by how often it answers a stated problem"
                - "Move the bottom three sections into an optional appendix"
                - "Rehearse the cut version against a twenty-minute timer"
                - "Compare next-step rates for the month before and after the cut"
            - name: Choosing an interactive demo tool
              description: |-
                ## Purpose
                Interactive demo tools let buyers click through a captured version of your product before or after a call, and share it internally without you. Whether you need one, and which, depends on deal size, how often buyers ask for something to show colleagues and how fast your product changes.

                ## Milestones
                1. The problem the tool would solve written in one paragraph.
                2. Three tools compared on price, editing effort, analytics and CRM connection.
                3. A two-week trial run with one real deal.
                4. A decision recorded, including the option of not buying.

                ## Notes
                Start from the **Purchase decision** template. If your product changes every few weeks, count the hours needed to re-capture screens, not just the licence cost.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A buy or do-not-buy decision is recorded, based on a comparison of three tools and one trial with a real deal."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write one paragraph on the problem an interactive demo would solve"
                - "Compare three tools on price, editing time, analytics and CRM connection"
                - "Trial the strongest option with one live deal for two weeks"
                - "Record the decision and the reasons behind it"
                - "Check interactive demo usage against the licence cost before renewal @recurring(yearly)"
            - name: Policy for showing unreleased features
              description: |-
                ## Purpose
                Showing a feature that is not released yet can win a deal and then lose the customer when it arrives late or different. A written policy on what may be shown, how it must be labelled and who approves it protects buyers, sellers and the product team from promises nobody can keep.

                ## Milestones
                1. Current practice on showing unreleased features described honestly.
                2. A policy agreed with product on what can be shown and who approves it.
                3. Approved labelling wording for roadmap or mock-up screens, including a no-commitment line.
                4. The policy shared with everyone who demos and added to the storyline notes.

                ## Notes
                Your legal or contracts colleagues may have views on roadmap statements, so ask them before the wording is final.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A policy for showing unreleased features, with approved labelling wording, is agreed with product and shared with every presenter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down how unreleased features are shown in demos today"
                - "Agree with product what may be shown and who approves it"
                - "Draft labelling wording for any roadmap or mock-up screen"
                - "Share the policy with every presenter"
            - name: Designing the moment buyers remember
              description: |-
                ## Purpose
                Most buyers walk away remembering one screen, so it is worth deciding in advance which one it will be. Building a single, striking proof moment (a report that took them a week appearing in seconds, an approval done from a phone) gives champions something to describe to colleagues who were not there.

                ## Milestones
                1. The buyer outcome with the biggest before and after gap chosen.
                2. A proof moment built that shows it in under ninety seconds.
                3. The moment placed early enough that late joiners and early leavers still see it.
                4. Buyers' recall of it checked in follow-up calls.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One signature proof moment runs in under ninety seconds, and buyers mention it unprompted in at least three follow-up calls."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick the outcome with the biggest before and after difference for buyers"
                - "Build a ninety-second proof moment that shows the after state"
                - "Move the moment into the first third of the storyline"
                - "Ask in follow-up calls what buyers remember from the demo"
            - name: Ending every demo with an agreed next step
              description: |-
                ## Purpose
                Demos that end with a vague promise to be in touch lose momentum within a week. Closing with a short summary, a direct question about fit and a specific proposed next meeting, booked before everyone leaves the call, turns interest into a dated commitment.

                ## Milestones
                1. A closing script with a summary, a fit question and a proposed next step.
                2. A short list of next steps suited to different buyers, such as a technical session or a trial.
                3. The next meeting booked on the call in most demos for a month.
                4. The share of demos ending with a booked next step tracked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "For one month, at least seven in ten demos end with a next meeting booked before the call closes."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a two-minute close with summary, fit question and proposed next step"
                - "List three next steps suited to different kinds of buyer"
                - "Book the next meeting before the call ends instead of by email"
                - "Track the share of demos that end with a booked next step"
            - name: Industry demo variants
              description: |-
                ## Purpose
                A healthcare buyer and a retailer may need the same product, but neither will recognise themselves in the other's data or vocabulary. Building two or three variants for your largest industries, each with its own data, terms and proof moments, makes tailoring quick without rebuilding from scratch.

                ## Milestones
                1. The two or three industries with the most demos picked from the outcome log.
                2. An industry data set, vocabulary list and pair of proof moments built for each.
                3. Each variant rehearsed and saved in the shared library.
                4. Conversion by variant compared after a quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two or three industry variants are in the shared library, each used in at least two live demos."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick the top industries from the demo outcome log"
                - "Build an industry data set and vocabulary list for each"
                - "Choose the two proof moments that matter most to each industry"
                - "Check each industry variant's data and vocabulary for staleness @recurring(yearly)"
            - name: When to bring a solutions engineer to the demo
              description: |-
                ## Purpose
                Bringing a solutions engineer or technical colleague to every demo burns scarce time, but leaving them out of complex deals costs credibility. Clear rules on when they join, what they own and how the handover works make the two of you look like one team.

                ## Milestones
                1. The deal signals that call for a technical colleague written down.
                2. Ownership of the story, the technical answers and the follow-up agreed.
                3. A five-minute pre-call handover format in use.
                4. The rules reviewed after a quarter with the technical colleague.

                ## Notes
                For founders and small teams with no presales role, the same rules decide when to bring in the engineer who built the feature.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written rules on when a technical colleague joins demos are agreed by both sides and reviewed after one quarter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the deal signals that mean a technical colleague should join"
                - "Agree who owns the story, the technical answers and the follow-up"
                - "Write a five-minute pre-call handover format"
                - "Review the rules with your technical colleague after a quarter"
            - name: Tailored demo for a high-stakes opportunity
              description: |-
                ## Purpose
                Once or twice a quarter a deal is big enough to justify a demo built just for it: the buyer's terminology, their likely data, the workflows from their discovery and a rehearsal with someone playing the toughest attendee. Treating it as a dated event with a build plan stops it being thrown together the night before.

                ## Milestones
                1. The demo date fixed and attendees and their roles confirmed.
                2. Buyer-specific data, terminology and proof moments built.
                3. A full rehearsal held with a colleague playing the toughest attendee.
                4. The demo delivered and the recap sent the same day.
                5. A short note written on what can be reused.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tailored demo for one named opportunity was rehearsed in full and delivered, with the recap sent the same day."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the date, attendees and their roles with your champion"
                - "Build the buyer-specific data set and proof moments"
                - "Hold a full rehearsal with a colleague playing the hardest attendee"
                - "Write down which parts of the build can be reused"
            - name: Trade show demo station
              description: |-
                ## Purpose
                At a stand, visitors give you ninety seconds, not thirty minutes, and they arrive mid-sentence. A short looping demo, a three-minute live version and a way to capture each visitor's problem for a proper follow-up demo turn foot traffic into booked meetings.

                ## Milestones
                1. A ninety-second looping demo that works without sound.
                2. A three-minute live demo built around the two most common problems.
                3. A quick capture form for each visitor's problem and preferred follow-up.
                4. Hardware, power and offline backup tested before the event.
                5. Follow-up demos offered to every captured visitor within a week of the show.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The stand ran a looping and a live demo throughout the event, and every captured visitor was offered a follow-up demo within a week."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Build a ninety-second silent looping version of the demo"
                - "Cut a three-minute live version around the two most common problems"
                - "Set up a quick form to capture each visitor's problem"
                - "Test the stand laptop and screen offline before shipping them"
            - name: Group demo webinar for several prospects
              description: |-
                ## Purpose
                Running one live group demo a month for early-stage prospects frees presenter time and gives buyers a low-pressure way to look. Planned like a small event, with registration, a tight storyline, live questions and a clear offer of a one-to-one demo afterwards, it filters serious buyers without making anyone wait.

                ## Milestones
                1. A date, registration page and reminder emails set up.
                2. A forty-five-minute storyline for a mixed audience, with time for questions.
                3. A colleague moderating questions in the chat.
                4. Every attendee offered a one-to-one demo within two days.
                5. Registrations, attendance and booked follow-ups recorded.

                ## Notes
                Start from the **Marketing campaign** template if marketing runs the registration and reminders.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One group demo was delivered, with registrations, attendance and booked one-to-one follow-ups recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick a date and set up a registration page"
                - "Adapt the storyline for a mixed audience with fifteen minutes of questions"
                - "Ask a colleague to moderate questions in the chat"
                - "Offer every attendee a one-to-one demo within two days"
            - name: Peer demo-off and scoring session
              description: |-
                ## Purpose
                Seeing three colleagues demo the same proof moment shows quickly whose version works and why. A half-day session where each seller delivers a short demo, scored by peers on a shared rubric, spreads the best techniques faster than any document.

                ## Milestones
                1. A date set and each seller given one proof moment to prepare.
                2. A shared scoring rubric agreed in advance.
                3. Each demo delivered, scored and discussed.
                4. The best version of each moment recorded for the shared library.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A peer demo session was held, every participant was scored on the rubric and the best versions were saved to the shared library."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a date and give each seller one proof moment to prepare"
                - "Agree the scoring rubric before the session"
                - "Record each demo for the shared library"
                - "Write up the three techniques the group wants to copy"
            - name: Demo rollout for a major product launch
              description: |-
                ## Purpose
                Launch day is when buyers first ask to see the new capability, and presenters who have not used it yet lose the moment. Planning the demo rollout alongside the launch, with a new proof moment, refreshed data, likely questions and a practice run for every presenter, keeps sales in step with marketing.

                ## Milestones
                1. A demo-ready date agreed with product ahead of the launch.
                2. A new proof moment built and added to the storyline.
                3. Answers prepared for the ten questions buyers are most likely to ask.
                4. Every presenter has run the new moment once in practice before launch.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every presenter delivered the new proof moment in a practice run before the launch date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree a demo-ready date with product ahead of the launch"
                - "Build the new proof moment in the demo environment"
                - "Write answers to the ten questions buyers are most likely to ask"
                - "Run each presenter through the new moment before launch day"
            - name: Founder demoing an unfinished product
              description: |-
                ## Purpose
                Founders often demo before the product is complete, and the temptation is to click around the gaps or present mock-ups as if they were live. Being explicit about what works today, what is a prototype and what is planned, while focusing on the problem you understand better than anyone, builds the trust early customers buy on.

                ## Milestones
                1. Every demoed screen labelled as live, prototype or planned.
                2. A storyline built on live features, with prototypes clearly labelled as such.
                3. One honest line on the roadmap, without dates you cannot keep.
                4. Early buyer reactions recorded to shape what gets built next.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A founder demo storyline labels every screen as live, prototype or planned, and buyer reactions from five demos are recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Label every screen you demo as live, prototype or planned"
                - "Rebuild the storyline so live features carry the proof"
                - "Write one honest sentence on what is coming and roughly when"
                - "Record what early buyers react to most strongly after each demo"
            - name: Demonstrating a physical product or service in person
              description: |-
                ## Purpose
                Small businesses selling equipment, materials or a hands-on service demonstrate in showrooms, on site or at the customer's premises rather than on a screen. Planning what the customer will touch, try or see working, with the right samples, a clean set-up and a before and after comparison, makes the benefit visible in a way a brochure cannot.

                ## Milestones
                1. The three things a customer most needs to see working chosen.
                2. A demo kit of samples, tools and consumables packed and checked.
                3. A ten-minute hands-on routine in which the customer tries it themselves.
                4. A before and after comparison or measurement ready to show.
                5. A clear next step ready to offer at the end.

                ## Notes
                Check insurance and safety rules before letting customers operate equipment themselves, and keep any protective gear in the kit.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packed demo kit and a ten-minute hands-on routine have been used with at least three customers."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose the three things a customer most needs to see working"
                - "Pack and check a demo kit with samples and consumables"
                - "Plan a ten-minute routine in which the customer tries it themselves"
                - "Prepare a before and after comparison to show on the day"
            - name: Handing the demo from founder to first sales hire
              description: |-
                ## Purpose
                Founder demos usually live in the founder's head, full of improvised stories nobody else can repeat. Writing down the storyline, stories and answers, then having the first sales hire shadow, co-present and finally lead, makes the demo survive the founder stepping back.

                ## Milestones
                1. The founder's demo recorded and turned into a written storyline.
                2. The customer stories and hard answers the founder relies on written down.
                3. The new hire has shadowed three demos and co-presented two.
                4. The new hire leads demos with the founder observing and giving notes.
                5. The founder no longer attends routine demos.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The first sales hire has led five demos without the founder present, using the written storyline."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Record three of the founder's demos for the new hire to watch"
                - "Write down the stories and hard answers the founder uses"
                - "Schedule two co-presented demos and three the new hire leads"
                - "Agree the date the founder stops attending routine demos"
            - name: Consistent demo standards across a sales team
              description: |-
                ## Purpose
                Once five or more people demo, buyers get very different experiences depending on who they meet. A short set of demo standards, a scoring rubric and a monthly peer review of one recording each keeps the core story consistent while leaving room for personal style.

                ## Milestones
                1. Five demo standards agreed, such as opening with the buyer's problems and closing with a booked next step.
                2. A scoring rubric that matches the standards.
                3. Each presenter's current scores recorded.
                4. One recording per presenter peer reviewed each month.

                ## Notes
                Start from the **Skills matrix** template to record where each presenter stands against the standards.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every presenter has a rubric score on record and has had one recording peer reviewed in each of the last three months."
                cadence: rolling
              tasks:
                - "Agree five demo standards with everyone who presents"
                - "Turn the standards into a scoring rubric"
                - "Record each presenter's current scores in a skills matrix"
                - "Peer review one demo recording per presenter @recurring(monthly:19)"
            - name: Demoing to a mixed buying committee
              description: |-
                ## Purpose
                When a finance lead, a daily user and an IT reviewer share one call, a demo pitched at any one of them bores the other two. Structuring the session so each role gets a short section on what it cares about, introduced by name, keeps the whole committee engaged.

                ## Milestones
                1. Attendees' roles and top concerns confirmed before the demo.
                2. The storyline split into short sections for each role.
                3. Each section introduced by naming who it is for.
                4. Each role's reaction noted in the recap.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A committee demo was delivered with a named section for each attending role and every role's reaction captured in the recap."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm each attendee's role and top concern with your champion"
                - "Split the storyline into short sections, one per role"
                - "Open each section by naming who it is for"
                - "Note each role's reaction in the recap"
            - name: Running a demo at the customer's site
              description: |-
                ## Purpose
                On-site demos bring unknowns: a projector with the wrong cable, guest wifi that blocks screen sharing, a room booked for half the time promised. A site checklist, offline backups and an early arrival turn those into minor delays instead of a lost meeting.

                ## Milestones
                1. Room, screen, connection and time confirmed with the host in advance.
                2. Adapters, a hotspot and offline clips packed.
                3. Arrival planned thirty minutes early to set up.
                4. Site lessons noted for the next visit.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An on-site demo checklist was used for a visit that started on time with a working screen and connection."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the host about the room, screen, wifi and time available"
                - "Pack adapters, a hotspot and offline backup clips"
                - "Plan to arrive thirty minutes early to set up"
                - "Write down site lessons after the visit"
            - name: Proof of concept scoped from a winning demo
              description: |-
                ## Purpose
                Serious buyers sometimes want to test the product on their own data before committing, and an open-ended trial can drift for months. Scoping a proof of concept with written success criteria, a fixed time box, named participants and a decision date keeps it a short step toward signature rather than free consulting.

                ## Milestones
                1. Three to five success criteria agreed in writing with the buyer.
                2. A time box of a few weeks with a decision date.
                3. Named participants and the support each side provides.
                4. A results review meeting booked before the proof of concept starts.
                5. Results written up against each criterion.

                ## Notes
                Only offer a proof of concept to buyers who have agreed what they will do if it succeeds.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A proof of concept ran within its time box and ended with a results review against written success criteria."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Agree three to five written success criteria with the buyer"
                - "Set a time box and a decision date before anything is configured"
                - "Name the participants and the support on each side"
                - "Book the results review meeting before the start date"
            - name: Demo moments that predict wins
              description: |-
                ## Purpose
                Recorded calls and your outcome log together can show which demo moments appear in won deals and which in lost ones. A quarterly analysis, tagging recordings by proof moment and comparing win rates, moves demo design from opinion to evidence.

                ## Milestones
                1. A tag list of proof moments applied to a quarter of recorded demos.
                2. Win rates compared for deals where each moment was shown.
                3. Two moments to expand and one to drop identified.
                4. Findings shared with the team and reflected in the storyline.

                ## Notes
                Small samples mislead. Treat a pattern across fewer than twenty deals as a hypothesis to test, not a rule.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarter of demo recordings is tagged by proof moment, with win rates compared and three storyline changes decided."
                cadence: cyclic
              tasks:
                - "Create a tag list with one tag per proof moment"
                - "Tag last quarter's demo recordings by the moments shown"
                - "Compare win rates for deals with and without each moment @recurring(quarterly)"
                - "Ask the agent to summarise the tagged patterns before the team review"
            - name: Automated demo environment provisioning
              description: |-
                ## Purpose
                Manual resets and hand-built prospect accounts stop scaling once demos run daily. Scripting resets and spinning up a fresh tenant per prospect, preloaded with the right industry data, saves hours a week and lets buyers keep a sandbox after the call.

                ## Milestones
                1. Hours spent each week on manual resets and set-up measured.
                2. A scripted reset that restores data and settings in minutes.
                3. Per-prospect tenants created from a template with industry data.
                4. Old prospect tenants cleaned up automatically after an agreed period.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Demo resets and per-prospect tenants are created by script, with weekly manual set-up time cut by at least half."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Measure the hours spent on manual resets and set-up for two weeks"
                - "Agree with engineering what a scripted reset needs to restore"
                - "Build a template tenant that can be copied for each prospect"
                - "Set an expiry period for prospect tenants and automate the clean-up"
            - name: Buyer-driven hands-on demo session
              description: |-
                ## Purpose
                Watching someone else click is not the same as doing it yourself, and the most convinced buyers are often those who completed a real task in the product. A guided session where the buyer drives, with set tasks and you coaching, shows ease of use in a way no presenter can fake.

                ## Milestones
                1. Three realistic tasks written for a buyer to complete in thirty minutes.
                2. A prepared account with data and hints ready for the buyer.
                3. The session run with you coaching and noting where they hesitate.
                4. Points of confusion passed to product.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A hands-on session was delivered in which the buyer completed at least two of three set tasks, with confusion points sent to product."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write three tasks a buyer can complete in thirty minutes"
                - "Prepare an account with data and hints for the buyer to use"
                - "Note every point where the buyer hesitates during the session"
                - "Send the hesitation points to product afterwards"
            - name: Competitive displacement demo
              description: |-
                ## Purpose
                Replacing an incumbent tool means demoing to people who know a rival product well and will compare every click. Showing the specific workflows where you are stronger, acknowledging what the incumbent does well and making switching look manageable earns more respect than criticising the competitor.

                ## Milestones
                1. The incumbent's strongest and weakest workflows identified from won and lost deals.
                2. A demo path built around the workflows where you are clearly stronger.
                3. An honest line prepared on what the incumbent does well.
                4. A short switching walkthrough showing data import and the first week.

                ## Notes
                Never show a competitor's product or make claims about it that you cannot verify. Stick to your own product and the buyer's experience.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A displacement demo path for one named incumbent has been delivered to at least two buyers who use that product today."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick the incumbent you displace most often"
                - "List the workflows where buyers say you are stronger"
                - "Build a demo path around those workflows plus a switching walkthrough"
                - "Write one honest line on what the incumbent does well"
---

# Sales Demo Delivery

This area is for sellers, founders and small business owners who show a product to buyers and want each demo to prove that the buyer's own problems can be solved. It starts with the foundations (a recorded baseline, a discovery handoff, a clean demo environment with believable data and a core storyline), then the routines that keep demos prepared, current and measured, the presenting skills, the decisions that sharpen the demo, the events worth planning, the situations of founders, small businesses and teams, and finally specialist work such as proofs of concept and win analysis.

What repeats is a weekly look ahead at booked demos, a Friday environment reset and a Thursday recap check, monthly logging, release checks, self-review and feedback themes, and a quarterly storyline refresh, library tidy-up and win analysis. The Operational checklist, Purchase decision, Metrics log, Feedback themes, Marketing campaign and Skills matrix templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
