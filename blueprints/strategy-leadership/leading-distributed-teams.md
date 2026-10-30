---
id: strategy-leadership.leading-distributed-teams
name: Leading Distributed Teams
description: "A map of where and when your team works, a shared overlap window and working agreement, written rhythms that replace hallway talk, and the habits that build trust across locations and time zones."
category: business
version: 1.0.0
tags: [strategy-leadership, leading-distributed-teams, manager, team, remote-work, hybrid, time-zones, async]
author: Aurum Technology
starter_structure:
  templates:
    - one-on-one
    - feedback-themes
    - metrics-log
    - onboarding-30-60-90
    - trip
    - meeting-notes
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Leading Distributed Teams
          description: "Leading teams spread across locations and time zones, with clear rhythms, written communication and trust built at a distance."
          projects:
            - name: Time zone and working hours map of the team
              description: |-
                ## Purpose
                Most distributed managers carry a rough picture of who is where, and it is usually wrong by an hour or two for half the year once daylight saving shifts. A single map showing each person's city, time zone, usual working hours and fixed commitments such as school runs shows at a glance when the team can meet live and who always pays the price.

                ## Milestones
                1. A table listing every team member with city, time zone and usual start and finish times.
                2. Daylight saving change dates noted for each location that observes them.
                3. Fixed personal commitments people chose to share marked as blocked time.
                4. The map pinned in the team's shared space and checked by each person.

                ## Notes
                Ask people for the hours they actually work, not the hours on their contract. The gap between the two is often where burnout starts.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A time zone map covering every team member, confirmed by each of them, is pinned in the team space within two weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each team member for their city and the hours they actually work"
                - "Build a table with time zone, start and finish times and blocked hours"
                - "Add the daylight saving change dates for each location"
                - "Pin the map in the team space and ask everyone to correct their row"
            - name: Core overlap window for live collaboration
              description: |-
                ## Purpose
                Across a spread of eight or more hours, live meetings drift to whatever suits the manager and the far-flung people quietly join at midnight. Agreeing two or three core hours a day when everyone is reachable, and protecting the rest for focused and asynchronous work, gives live discussion a home without taking over everyone's evenings.

                ## Milestones
                1. Candidate overlap windows worked out from the time zone map.
                2. A window of two to three hours agreed with the team, with the trade-offs said aloud.
                3. Recurring team meetings moved inside the window or replaced with written updates.
                4. The window written into calendars as a shared block.

                ## Notes
                If no window works for everyone, split into two overlapping pairs of regions and accept that some decisions travel in writing. A window nobody can keep is worse than none.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A core overlap window of two to three hours is agreed by the team and every recurring team meeting sits inside it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shade the hours each person works on the time zone map to find the overlap"
                - "Propose two candidate windows and the cost of each to the team"
                - "Move or cancel recurring meetings that fall outside the chosen window"
                - "Add the overlap window as a shared calendar block for everyone"
            - name: Distributed team working agreement
              description: |-
                ## Purpose
                Teams that share an office pick up norms by watching each other, while distributed teams only have the norms they write down. A working agreement written by the whole team, covering hours, availability, how to ask for help, camera use and what happens when someone is offline, turns a dozen silent assumptions into a page everyone can point to.

                ## Milestones
                1. A draft agreement covering hours, availability, meetings, help requests and time off.
                2. Every team member given a chance to edit or object in writing.
                3. A final version agreed in a team meeting and dated.
                4. The agreement linked from the team handbook and onboarding pack.

                ## Notes
                Write it with the team, not for them. An agreement imposed by the manager reads as policy and gets ignored the first busy week.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated working agreement edited by the whole team is agreed in a team meeting and linked from the handbook within thirty days."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Share a blank agreement with headings for hours, meetings, help and time off"
                - "Give the team a week to write and comment on the draft"
                - "Agree the final wording in a team meeting and date it"
                - "Revisit the working agreement with the team @recurring(yearly)"
            - name: Channel charter for what goes where
              description: |-
                ## Purpose
                Hours disappear in distributed teams as people hunt for the decision that was made in a private message, a video call, a document comment or an email thread. A short charter saying which tool is for urgent issues, which for decisions, which for discussion and which for social chat means people know where to post and, just as important, where to look.

                ## Milestones
                1. Every channel and tool the team currently uses listed with its real purpose.
                2. Each type of message assigned one home: urgent, decision, discussion, social, reference.
                3. Duplicate or dead channels archived.
                4. The charter pinned in the main team channel and linked from the handbook.

                ## Notes
                The rule people most need is where decisions are recorded. If a decision only exists in a call, it did not happen for the people who were asleep.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page channel charter naming one home for each message type is pinned, and at least two unused channels are archived."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every chat channel, mailing list and shared space the team uses"
                - "Assign each kind of message one home and write it in a table"
                - "Archive channels with no posts in the last two months"
                - "Pin the charter in the main channel and walk the team through it"
            - name: Response time expectations by channel
              description: |-
                ## Purpose
                Without stated response times, people in a distributed team either answer everything instantly and never focus, or go quiet and leave colleagues blocked overnight. Agreeing what a reasonable reply time is for each channel, and how to flag something genuinely urgent, lowers the pressure to be always on while keeping work moving across time zones.

                ## Milestones
                1. Expected reply times agreed for chat, email, document comments and tickets.
                2. One agreed route for urgent issues that need a reply within the hour.
                3. The expectations added to the working agreement.
                4. A check after a month on whether people feel less pressure to reply at once.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Reply times for each channel and a single urgent route are written into the working agreement and checked with the team a month later."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the team how quickly they currently feel they must reply on each channel"
                - "Propose reply times per channel measured in working hours, not clock hours"
                - "Define one urgent route and what counts as urgent"
                - "Ask the team after a month whether the pressure to reply has eased"
            - name: Team handbook as the single source of truth
              description: |-
                ## Purpose
                New joiners and people in the quiet time zone should be able to answer how the team works without waiting for someone to wake up. A team handbook holding the working agreement, channel charter, processes, owners and key links becomes the place where questions are answered once, in writing, instead of again and again in chat.

                ## Milestones
                1. A handbook space created with sections for how we work, who owns what, processes and links.
                2. The ten questions most often asked in chat answered in the handbook.
                3. Each section given a named owner.
                4. New questions in chat answered with a link to the handbook where one exists.

                ## Notes
                Start small and useful rather than complete. A handbook with ten accurate pages beats one with a hundred stale ones.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A team handbook with named section owners answers the ten most frequent chat questions within sixty days."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Search the last month of team chat for questions asked more than once"
                - "Create the handbook space with four top-level sections"
                - "Write answers to the ten most repeated questions"
                - "Assign an owner to each handbook section"
            - name: Baseline survey of trust, clarity and isolation
              description: |-
                ## Purpose
                Distance hides problems: a manager can go months without noticing that one region feels left out or that nobody is clear on priorities. A short anonymous survey on clarity of goals, trust in colleagues, feeling informed, isolation and workload gives you a baseline to improve against and shows whether the experience differs by location.

                ## Milestones
                1. A survey of eight to twelve questions covering clarity, trust, information, isolation and workload.
                2. At least 80 percent of the team responded anonymously.
                3. Results broken down by region where groups are large enough to stay anonymous.
                4. The results and three actions shared back with the team.

                ## Notes
                Do not break results down for groups smaller than about five people, or anonymity disappears. Repeat the same questions later so the numbers can be compared.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline survey with at least 80 percent response is analysed and shared back with three named actions within three weeks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft ten survey questions on clarity, trust, information, isolation and workload"
                - "Send the survey through an anonymous tool with a one-week close date"
                - "Compare results across regions where groups are large enough"
                - "Share the results and three actions with the team"
            - name: Remote workspace and equipment standard
              description: |-
                ## Purpose
                Anyone on a poor headset and a laptop camera at a kitchen table is quietly disadvantaged in every meeting. Working with HR and finance to agree what equipment the organisation provides or pays towards, and what a workable home setup looks like, removes one source of inequality between people in the office and people at home.

                ## Milestones
                1. The current equipment policy and any home working allowance confirmed with HR.
                2. A minimum setup listed: headset, camera, second screen, chair, connection.
                3. Each team member's gaps identified privately.
                4. Gaps closed or a request raised for each one through the proper budget route.

                ## Notes
                Allowances, tax treatment and health and safety duties for home workers vary by country. Agree them with HR rather than promising anything yourself.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written minimum home setup is agreed with HR and every team member's equipment gap is either closed or formally requested."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask HR for the current equipment and home working allowance policy"
                - "Write a minimum setup list for the team"
                - "Ask each person privately what they are missing"
                - "Raise equipment requests through the agreed budget route"
            - name: Public decision log for the team
              description: |-
                ## Purpose
                In a distributed team the person who missed the call should be able to find out what was decided, by whom and why, without asking. A simple running log of decisions with date, owner, reasoning and where the discussion happened stops the same question being reopened every time a new time zone wakes up.

                ## Milestones
                1. A decision log with columns for date, decision, owner, reasoning and link.
                2. The last month's significant decisions added from memory and chat history.
                3. A team rule that a decision counts once it is in the log.
                4. The log linked from the handbook and channel charter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared decision log holds every significant team decision from the past month and is updated at least weekly."
                cadence: rolling
              tasks:
                - "Create a decision log with date, decision, owner, reasoning and link"
                - "Add the significant decisions from the past month"
                - "Agree with the team that decisions count once they are logged"
                - "Add the week's decisions to the log with a link to the discussion @recurring(weekly:thu)"
            - name: Monday written team update
              description: |-
                ## Purpose
                Writing a short update at the start of each week replaces the context that office teams pick up by osmosis: what changed, what leadership decided, what is coming and where the team should focus. Written once and read in every time zone, it means nobody starts their week a day behind because they missed a call.

                ## Milestones
                1. A fixed format agreed: priorities, decisions, news from elsewhere, asks of the team.
                2. Updates posted every Monday before the earliest region starts work.
                3. Past updates kept in one place so new joiners can catch up.
                4. Team members say in the next health pulse that they feel informed.

                ## Notes
                Keep it under five minutes to read. Link to detail rather than pasting it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written update in the agreed format is posted every Monday for a quarter, with past updates archived in one place."
                cadence: rolling
              tasks:
                - "Write a four-heading template for the weekly update"
                - "Create an archive page for past updates"
                - "Ask the agent to draft the update from last week's decision log and notes"
                - "Post the Monday team update before the earliest region starts @recurring(weekly:mon)"
            - name: Written check-ins instead of a daily standup call
              description: |-
                ## Purpose
                Holding a daily standup call across six time zones forces someone onto camera at dawn or late at night to say things that could have been read. Replacing it with short written check-ins three times a week, covering progress, plans and blockers, keeps everyone visible and lets blockers surface while the people who can help are still awake.

                ## Milestones
                1. A three-line check-in format agreed: done, next, blocked.
                2. A thread or tool set up where check-ins are posted and easy to scan.
                3. Blockers answered by a teammate or the manager within one working day.
                4. The daily call cancelled or reduced to once a week inside the overlap window.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every team member posts a written check-in three times a week for a month and the daily standup call is cancelled or cut to weekly."
                cadence: rolling
              tasks:
                - "Propose a done, next, blocked format to the team"
                - "Set up a check-in thread or bot that posts the prompt"
                - "Post your written check-in and reply to any blocker @recurring(weekly:mon,wed,fri)"
                - "Cancel or cut the daily standup call after the first month"
            - name: Rotating meeting times to share the time zone burden
              description: |-
                ## Purpose
                If one recurring meeting cannot fit anyone's normal day, the same people end up taking it at eleven at night for years. Rotating the slot each month, so the inconvenience moves around the regions, is a visible sign that the team values everyone's evenings equally and stops resentment building quietly.

                ## Milestones
                1. The meetings that fall outside the overlap window identified.
                2. A rotation of two or three time slots agreed with the team.
                3. Recordings and written notes shared for anyone who cannot attend the rotated slot.
                4. A check after a quarter that no one region carried most of the late meetings.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every out-of-hours recurring meeting rotates across at least two slots and a quarterly count shows no region took more than half the late sessions."
                cadence: rolling
              tasks:
                - "List recurring meetings that fall outside anyone's working hours"
                - "Agree two or three rotating time slots with the people affected"
                - "Move next month's meetings to the next slot in the rotation @recurring(monthly:3)"
                - "Count late meetings by region at the end of each quarter"
            - name: Video one-to-ones across time zones
              description: |-
                ## Purpose
                For a remote team member, the one-to-one is often the only time anyone asks how they are really doing. Holding it weekly on video, inside both people's working hours, with a shared running agenda the report owns, keeps the relationship warm and catches problems that never show up in chat.

                ## Milestones
                1. A weekly or fortnightly slot with each report inside both people's working hours.
                2. A shared running agenda for each report that they add to first.
                3. Cancellations rescheduled within the same week rather than skipped.
                4. Each report says the time is useful when asked at the next quarterly pulse.

                ## Notes
                Start from the **1:1** template. Ask about workload and isolation every few weeks, not only about tasks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every report has a recurring video one-to-one inside working hours with a shared agenda, and fewer than one in ten are skipped in a quarter."
                cadence: rolling
              tasks:
                - "Book a recurring one-to-one with each report inside both people's hours"
                - "Create a shared agenda page for each report"
                - "Add a note to each report's agenda before the weekly one-to-ones @recurring(weekly:wed)"
                - "Ask each report every month how they are finding remote work"
            - name: Monthly distributed team retrospective
              description: |-
                ## Purpose
                Remote teams often never stop to ask what is and is not working about the way they collaborate, because there is no natural moment like a coffee break to raise it. A monthly retrospective, with written input gathered beforehand so every time zone contributes, gives problems a regular outlet and turns complaints into small agreed fixes.

                ## Milestones
                1. A shared board opened a week before each retrospective for written input.
                2. A short live session inside the overlap window to agree two or three actions.
                3. Actions given an owner and recorded where the team can see them.
                4. Last month's actions reviewed at the start of each session.

                ## Notes
                Start from the **Feedback themes** template to group what comes up across several months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A retrospective with written input from every region runs each month and at least two owned actions are recorded each time."
                cadence: rolling
              tasks:
                - "Open a shared retrospective board a week before the session"
                - "Run the monthly retrospective inside the overlap window @recurring(monthly:18)"
                - "Ask the agent to group the written input into themes before the session"
                - "Review last month's actions at the start of each retrospective"
            - name: Handoff notes between overlapping regions
              description: |-
                ## Purpose
                As work moves from one region's evening to another's morning, a missing sentence can cost a whole day. Agreeing a short handoff note for shared work, written before signing off and covering status, open questions and anything waiting on the next region, lets progress continue overnight instead of stalling until the original person returns.

                ## Milestones
                1. The pieces of work that regularly cross regions identified.
                2. A handoff note format agreed: status, open questions, next step, who to ask.
                3. Handoff notes posted in a known place at the end of each region's day.
                4. A fortnightly check of whether handoffs are saving time or being skipped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All cross-region work carries an end-of-day handoff note in the agreed format, checked by the manager each week for a month."
                cadence: rolling
              tasks:
                - "List the workstreams that pass between regions each day"
                - "Agree a four-line handoff note format with the people involved"
                - "Choose one place where handoff notes are always posted"
                - "Read the week's handoff notes and fix any gaps with the authors @recurring(weekly:fri)"
            - name: Quarterly meeting audit and calendar reset
              description: |-
                ## Purpose
                Recurring meetings multiply quietly in distributed teams because every new problem gets a call, and the calls stay long after the problem is solved. A quarterly audit of every recurring team meeting, asking whether it could be written instead, keeps the calendar for discussion and decisions and hands hours back to people in awkward time zones.

                ## Milestones
                1. Every recurring team meeting listed with attendees, length and purpose.
                2. Each meeting marked keep, shorten, move to writing or stop.
                3. Changes made in calendars and announced in the weekly update.
                4. Total recurring meeting hours per person recorded for the quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly audit marks every recurring team meeting and records the total recurring meeting hours per person, with changes announced."
                cadence: cyclic
              tasks:
                - "Export the list of recurring team meetings from the shared calendar"
                - "Mark each meeting keep, shorten, move to writing or stop"
                - "Run the meeting audit and announce the changes @recurring(quarterly)"
                - "Record total recurring meeting hours per person for the quarter"
            - name: Documentation upkeep rota
              description: |-
                ## Purpose
                Handbooks that nobody maintains turn from an asset into a trap within six months, because people follow outdated instructions with confidence. A monthly rota where one person reviews a section, removes what is stale and fixes what is wrong keeps written knowledge trustworthy without making it anyone's full-time job.

                ## Milestones
                1. A rota assigning one handbook section per person per month.
                2. A last reviewed date shown on every page.
                3. Pages unreviewed for six months flagged automatically or by search.
                4. Stale pages fixed, merged or deleted each month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every handbook page shows a last reviewed date within six months, maintained by a monthly rota."
                cadence: rolling
              tasks:
                - "Add a last reviewed date to every handbook page"
                - "Draw up a monthly rota assigning one section to each person"
                - "Review this month's handbook section and fix stale pages @recurring(monthly:24)"
                - "Search for pages not reviewed in six months and assign them"
            - name: Recognition and thanks at a distance
              description: |-
                ## Purpose
                In an office, a thank you happens in passing and others see it; remotely, good work can go unnoticed for months, especially in the region furthest from the manager. A weekly habit of naming specific contributions in public, spread fairly across people and regions, makes effort visible and tells everyone what the team values.

                ## Milestones
                1. A public channel or section of the weekly update for thanks.
                2. Specific thanks posted each week naming what someone did and why it mattered.
                3. A simple tally showing recognition is spread across people and regions.
                4. Team members thanking each other, not only the manager doing it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Specific public thanks are posted every week for a quarter and a tally shows every team member recognised at least once."
                cadence: rolling
              tasks:
                - "Choose a public place where thanks will be posted"
                - "Post specific thanks for the week's contributions @recurring(weekly:fri)"
                - "Keep a private tally of who has been recognised and from which region"
                - "Invite the team to post their own thanks in the same place"
            - name: Quarterly distributed team health pulse
              description: |-
                ## Purpose
                Repeating the baseline survey every quarter turns a one-off snapshot into a trend, so you can tell whether the overlap window, written rhythms and rotation are making a difference. A five-minute pulse with the same core questions catches a region drifting or a workload problem before it shows up as resignations.

                ## Milestones
                1. Six to eight core questions kept constant from the baseline survey.
                2. The pulse sent each quarter with at least 75 percent response.
                3. Scores tracked over time by question and, where safe, by region.
                4. One or two actions shared with the team after each pulse.

                ## Notes
                Start from the **Metrics log** template to keep each quarter's scores side by side.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly pulse with at least 75 percent response is logged against the baseline and followed by shared actions each quarter."
                cadence: cyclic
              tasks:
                - "Pick six to eight core questions from the baseline survey"
                - "Send the quarterly team health pulse with a one-week close @recurring(quarterly)"
                - "Log the scores beside previous quarters"
                - "Share the results and one or two actions with the team"
            - name: Unstructured connection time for a remote team
              description: |-
                ## Purpose
                Trust grows from small, unplanned conversations, and distributed teams have almost none unless someone makes room for them. A light monthly rhythm of optional social time, random coffee pairings across regions and a channel for non-work chat gives people a chance to know each other as more than names on tickets.

                ## Milestones
                1. An optional monthly social session scheduled inside the overlap window.
                2. Random cross-region coffee pairings running every month.
                3. A non-work channel that people actually post in.
                4. Isolation scores in the health pulse holding steady or improving.

                ## Notes
                Keep it optional and short. Forced fun at nine at night for one region does more harm than good.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly cross-region coffee pairings and an optional social session run for a quarter, with isolation scores steady or better."
                cadence: rolling
              tasks:
                - "Set up random coffee pairings that match people across regions"
                - "Schedule a thirty-minute optional social session inside the overlap window"
                - "Send this month's pairings and social invite @recurring(monthly:12)"
                - "Check isolation scores in the next health pulse"
            - name: Leave and public holiday coverage calendar
              description: |-
                ## Purpose
                Five countries means five sets of public holidays, school terms and religious festivals, and deadlines set without them land on days half the team is off. A shared calendar of holidays and planned leave, built at the start of each year and checked monthly, prevents surprise gaps and makes sure cover is arranged before it is needed.

                ## Milestones
                1. Public holidays for every location added to a shared calendar for the year.
                2. Major festivals and school holidays that team members flag added too.
                3. Planned leave visible to the whole team.
                4. Cover agreed for any week where a region or key skill is missing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A shared calendar holds every location's public holidays and planned leave for the year, with cover named for each gap week."
                cadence: cyclic
              tasks:
                - "Add every team location's public holidays to a shared calendar"
                - "Ask the team which festivals and school holidays to include"
                - "Build next year's holiday and leave calendar @recurring(yearly)"
                - "Check the coming month for gaps and agree cover @recurring(monthly:27)"
            - name: Writing for readers who are asleep when you send it
              description: |-
                ## Purpose
                Writing is how distributed teams run, and a vague message sent at the end of your day costs the reader a full cycle of back and forth before they can act. Learning to write messages that stand alone, with the context, the ask, the deadline and the decision needed in the first lines, is the single most useful skill a distributed leader can practise.

                ## Milestones
                1. A short guide on clear asynchronous writing read and summarised for yourself.
                2. Five of your recent messages rewritten with the ask in the first line.
                3. A personal checklist for messages to other time zones.
                4. Fewer clarifying replies to your messages over a month, by your own count.

                ## Notes
                A simple test: could the reader act on this message without asking you a single question? If not, add what they would ask.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal writing checklist exists and a month's count shows fewer clarifying replies to your messages than the month before."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick five recent messages that needed follow-up questions"
                - "Ask the agent to rewrite one with the ask and deadline first, then compare"
                - "Write a five-point checklist for messages to other time zones"
                - "Count clarifying replies to your messages for a month"
            - name: Running hybrid meetings fair to remote attendees
              description: |-
                ## Purpose
                The hardest meeting to run well is the one where half the people share a room and half are on screens, because the room talks to itself and the remote faces become an audience. Learning a handful of hybrid practices, such as everyone joining from their own device, a remote co-chair and a written queue for speaking, gives remote colleagues an equal voice.

                ## Milestones
                1. Three hybrid meeting practices chosen from a reputable guide.
                2. A remote co-chair role defined and used in team meetings.
                3. Room attendees joining on their own laptops with headsets, or a room setup that works.
                4. Remote attendees asked after four meetings whether they could contribute equally.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four consecutive hybrid meetings use a remote co-chair and a speaking queue, and remote attendees rate their ability to contribute."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read one practical guide to hybrid meetings and note three practices"
                - "Name a remote co-chair for the next team meeting"
                - "Ask room attendees to join from their own devices with headsets"
                - "Ask remote attendees after four meetings whether they could contribute"
            - name: Facilitating remote workshops on a shared whiteboard
              description: |-
                ## Purpose
                Planning sessions, design reviews and problem solving all suffer when moved to a video grid with no shared surface. Learning to design and run a remote workshop on a digital whiteboard, with silent writing before discussion, clear timeboxes and breaks every fifty minutes, makes a three-hour session across time zones productive rather than draining.

                ## Milestones
                1. One digital whiteboard tool chosen and its basic features practised.
                2. A workshop plan with timed sections, silent writing and breaks.
                3. One real team workshop run with the plan.
                4. Feedback from attendees used to improve the next one.

                ## Notes
                Send the board link and a two-minute practice task the day before, so nobody spends the first twenty minutes learning the tool.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One remote workshop is run from a written plan with timed sections, and attendee feedback is recorded for the next session."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Practise the team's whiteboard tool for thirty minutes on your own"
                - "Write a timed plan for a two-hour remote workshop"
                - "Send attendees the board link and a short practice task the day before"
                - "Collect three lines of feedback from each attendee afterwards"
            - name: Spotting disengagement and overload at a distance
              description: |-
                ## Purpose
                Remotely you cannot see someone arriving late, looking tired or eating lunch alone, so the early signs of disengagement or burnout are easy to miss. Learning which signals still show at a distance, such as messages sent at odd hours, quieter check-ins, cameras off for weeks or slower replies, and checking them gently each month, lets you ask the right question early.

                ## Milestones
                1. A short list of remote warning signs you will watch for.
                2. A monthly private review of signals for each report.
                3. A gentle, open question asked in a one-to-one when a signal appears.
                4. Support or workload changes agreed where needed and followed up.

                ## Notes
                Signals are prompts for a conversation, not evidence. Never monitor activity data to judge people; ask them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A monthly private review of warning signs is held for every report and any concern is raised in a one-to-one within a week."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down six warning signs of disengagement you can see remotely"
                - "Review each report's signals privately @recurring(monthly:9)"
                - "Ask an open question in the next one-to-one when a sign appears"
                - "Follow up on any agreed workload change two weeks later"
            - name: Cross-cultural communication in a multinational team
              description: |-
                ## Purpose
                Directness, disagreement, silence and deadlines mean different things across cultures, and in a distributed team those differences arrive in writing without the tone of voice that softens them. Learning how your team's cultures tend to give feedback, make decisions and treat hierarchy, and talking about it openly, prevents misread messages from turning into lasting friction.

                ## Milestones
                1. A recognised framework for cultural differences at work read and summarised.
                2. A team conversation about how each person prefers feedback and disagreement.
                3. Preferences noted in the handbook in people's own words.
                4. Your own messages adjusted where a colleague found them too blunt or too vague.

                ## Notes
                Treat cultural patterns as starting questions, never as labels for individuals. Ask the person.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team session on communication preferences is held and each person's preferences are recorded in the handbook in their own words."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read one well-regarded book or guide on cultural differences at work"
                - "Ask each person how they prefer to give and receive feedback"
                - "Run a team session comparing preferences openly"
                - "Record each person's preferences in the handbook in their own words"
            - name: Difficult conversations over video
              description: |-
                ## Purpose
                Delivering hard feedback, discussing poor performance or sharing bad news is harder over video, where silences feel longer and you cannot walk someone out for a coffee afterwards. Practising how to prepare, open, listen and follow up in writing for remote difficult conversations means these talks happen sooner and land better.

                ## Milestones
                1. A preparation checklist for remote difficult conversations.
                2. One practice run with a peer or coach playing the other person.
                3. A follow-up message template summarising what was agreed.
                4. The next real difficult conversation held on video, not postponed or sent in chat.

                ## Notes
                Never deliver serious news by chat or email alone, and avoid late in the other person's day when they have no one to talk to afterwards.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A preparation checklist and follow-up template exist and the next difficult conversation is held on video at a time that suits the other person."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a checklist for preparing a difficult video conversation"
                - "Rehearse one real conversation with a peer or coach"
                - "Draft a short follow-up message template for after the call"
                - "Book the next difficult conversation early in the other person's day"
            - name: Written proposals for asynchronous decisions
              description: |-
                ## Purpose
                Decisions that wait for a meeting everyone can attend wait a long time in a distributed team. A short written proposal format, stating the problem, the options, the recommendation and a comment deadline, lets people in every time zone weigh in on their own schedule and gives the decision maker a clear record of the reasoning.

                ## Milestones
                1. A one-page proposal template with problem, options, recommendation and deadline.
                2. A rule for which decisions need a written proposal and which do not.
                3. Three real decisions taken through the format.
                4. Each outcome recorded in the decision log with a link to the proposal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three team decisions are made through written proposals with comment deadlines and each is linked from the decision log."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a one-page proposal template with a comment deadline field"
                - "Agree which kinds of decision need a written proposal"
                - "Take the next three suitable decisions through the format"
                - "Link each final decision in the log to its proposal"
            - name: Choosing the team's remote, hybrid or office model
              description: |-
                ## Purpose
                Many teams drift into a muddled model where some people come in on random days and nobody knows when colleagues will be in. Making an explicit choice within the organisation's policy, whether fully remote, hybrid with anchor days or office-first with remote exceptions, sets expectations, shapes hiring and decides how much of the team's practice must be written.

                ## Milestones
                1. The organisation's policy and any legal limits confirmed with HR.
                2. The options compared for collaboration, hiring reach, cost and fairness.
                3. Team members' needs and constraints heard before deciding.
                4. A decision written up with anchor days or rules and shared with the team.

                ## Notes
                Whatever the choice, design for the least-present person. If one person is always remote, the team is distributed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written team model decision, consistent with organisation policy and informed by every team member's input, is shared within sixty days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the organisation's location policy and limits with HR"
                - "Compare three models on collaboration, hiring reach, cost and fairness"
                - "Ask each team member about their constraints and preferences"
                - "Write and share the decision with any anchor days or rules"
            - name: Collaboration tool stack review
              description: |-
                ## Purpose
                Tools accumulate fast in remote teams: three chat apps, two document stores and a whiteboard nobody remembers paying for. Reviewing the stack once a year against how the team actually works, and cutting overlaps, means fewer places to check, lower cost and less chance that a decision sits in the one tool the new joiner never opened.

                ## Milestones
                1. Every collaboration tool listed with purpose, users, cost and owner.
                2. Overlaps and gaps identified against the channel charter.
                3. A recommendation to keep, consolidate or retire each tool agreed with IT.
                4. Retired tools switched off with content moved or archived.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tool inventory with a keep, consolidate or retire decision for each tool is agreed with IT and at least one overlap is removed."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "List every collaboration tool the team uses with cost and owner"
                - "Ask the agent to compare the list against the channel charter for overlaps"
                - "Agree keep, consolidate or retire decisions with IT"
                - "Review the collaboration tool stack @recurring(yearly)"
            - name: Cutting recurring meeting hours by a third
              description: |-
                ## Purpose
                Meetings cost distributed teams more than co-located ones, because every hour has to be found inside a narrow overlap and often eats someone's evening. Setting a target of a third fewer recurring meeting hours, and moving status updates, reviews and announcements into writing, frees the overlap window for the discussions that genuinely need people together.

                ## Milestones
                1. Current recurring meeting hours per person measured.
                2. Status and update meetings converted to written formats.
                3. Remaining meetings shortened to the time they actually need.
                4. Recurring meeting hours per person down by a third against the starting figure.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Recurring meeting hours per person fall by at least a third against the measured starting point within forty-five days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure each person's recurring meeting hours for the past two weeks"
                - "Convert the two biggest status meetings into written updates"
                - "Shorten the remaining meetings to twenty-five or fifty minutes"
                - "Measure meeting hours again after a month and share the result"
            - name: Proximity bias check in reviews and promotions
              description: |-
                ## Purpose
                People who sit near the manager, or share their time zone, tend to get more visible work, more credit and faster promotions, often without anyone intending it. Comparing assignments, ratings and promotions by location each review cycle, with HR's help, shows whether distance is quietly shaping careers and gives you evidence to correct it.

                ## Milestones
                1. Ratings, promotions and high-visibility assignments gathered by location for the last year.
                2. Any gaps between locations compared with HR.
                3. Calibration questions added to the review process to test for proximity bias.
                4. One concrete change made, such as rotating visible projects across regions.

                ## Notes
                Keep the data aggregated and handled with HR. The aim is a fair process, not reopening individual decisions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison of ratings, promotions and visible work by location is reviewed with HR and at least one process change is made."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Ask HR for last year's ratings and promotions grouped by location"
                - "List who led the most visible projects and where they sit"
                - "Add proximity bias questions to the next calibration meeting"
                - "Repeat the proximity bias check before each annual review cycle @recurring(yearly)"
            - name: Hiring process redesigned for remote candidates
              description: |-
                ## Purpose
                Office-style hiring tests the wrong things for a distributed role and puts off good candidates in other time zones. Reworking it to test written communication, self-direction and asynchronous collaboration, with interviews scheduled in the candidate's hours, finds people who will do well remotely and widens the pool.

                ## Milestones
                1. The qualities that matter for this team's remote work written as criteria.
                2. A written exercise or asynchronous task added to the process.
                3. Interview slots offered in the candidate's working hours.
                4. Each interviewer scoring against the same criteria.

                ## Notes
                Keep the written task short and paid or time-boxed. Long unpaid take-home tasks put off the candidates with the least spare time.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A hiring process with written remote criteria, a short asynchronous exercise and a common scoring sheet is used for the next hire."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the five qualities that predict success in this remote team"
                - "Design a short written exercise that tests asynchronous work"
                - "Create a scoring sheet every interviewer will use"
                - "Offer interview slots inside each candidate's working hours"
            - name: Remote onboarding for new joiners
              description: |-
                ## Purpose
                New starters in a distributed team can spend their first week alone with a laptop, waiting for access and unsure whom to ask. A planned remote onboarding, with equipment and access ready on day one, a buddy in a nearby time zone, a first-week schedule and clear goals for thirty, sixty and ninety days, gets them productive and connected quickly.

                ## Milestones
                1. A day-one checklist covering equipment delivery, accounts and access.
                2. A buddy named in or near the new joiner's time zone.
                3. A first-week schedule of introductions across every region.
                4. Goals agreed for thirty, sixty and ninety days and reviewed at each point.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Ship equipment early enough to clear customs if it crosses a border.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A remote onboarding plan with a day-one checklist, buddy, first-week schedule and 30, 60 and 90 day goals is ready before the next start date."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a day-one checklist for equipment, accounts and access"
                - "Choose a buddy in or near the new joiner's time zone"
                - "Schedule first-week introductions with someone from each region"
                - "Agree thirty, sixty and ninety day goals with the new joiner"
            - name: Deciding where to hire next by location
              description: |-
                ## Purpose
                Each new hire's location changes the team's overlap, coverage and costs for years, yet it is often decided by wherever the best candidate happened to live. Thinking through which time zones and countries would strengthen the team, and checking with HR and legal where the organisation can actually employ people, turns location into a deliberate choice.

                ## Milestones
                1. Current coverage gaps and overlap pressures listed from the time zone map.
                2. Locations where the organisation can employ staff confirmed with HR and legal.
                3. Two or three target locations compared for coverage, cost and talent.
                4. A preferred hiring location recorded in the role brief.

                ## Notes
                Employment law, tax and payroll obligations differ by country. Rely on HR, legal or an employer of record provider for those calls.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The next role brief names a preferred hiring location chosen against coverage, cost and confirmed employment options."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the hours and regions where the team lacks cover"
                - "Ask HR and legal which countries the organisation can employ in"
                - "Compare two or three locations for coverage, cost and talent"
                - "Write the preferred location into the next role brief"
            - name: Travel and gathering budget case
              description: |-
                ## Purpose
                Teams that never meet in person tend to build trust more slowly, but travel is often the first budget cut. A short written case for a yearly gathering and occasional visits, with costs, expected outcomes and a comparison with the cost of attrition or slow delivery, gives finance a reason to fund it.

                ## Milestones
                1. Costs estimated for one team gathering and key one-off visits.
                2. Expected outcomes written in terms leadership cares about.
                3. The case reviewed by your manager and finance partner.
                4. A budget line agreed or a smaller fallback plan chosen.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written travel case with costs and outcomes is reviewed by finance and a budget or fallback plan is recorded within forty-five days."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate flights, accommodation and venue costs for one team gathering"
                - "Write the outcomes the gathering would deliver in two paragraphs"
                - "Review the case with your manager and finance partner"
                - "Record the agreed budget or the fallback plan"
            - name: In-person team week
              description: |-
                ## Purpose
                Three or four days together each year do work that months of video calls cannot: people put faces to names, settle old misunderstandings and plan the year with real energy. Planning the week around a few clear goals, with plenty of unstructured time and attention to visas, accessibility and people with caring duties, makes the trip worth its cost.

                ## Milestones
                1. Two or three goals for the week agreed with the team.
                2. Location, dates and venue chosen with visas, accessibility and caring duties in mind.
                3. An agenda balancing planning, working sessions and social time.
                4. Decisions and actions written up and shared within a week of returning.

                ## Notes
                Start from the **Trip** template. Leave at least a third of the time unscheduled; the corridor conversations are the point.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An in-person team week is held against two or three agreed goals and its decisions are shared in writing within a week."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree two or three goals for the week with the team"
                - "Check visa lead times and caring constraints before choosing dates"
                - "Draft an agenda with a third of the time left unscheduled"
                - "Share decisions and actions within a week of returning"
            - name: Distributed kickoff for a new cross-site project
              description: |-
                ## Purpose
                Projects that start with people in three locations often split into three projects by the end of the first month, each with its own assumptions. A deliberate kickoff, with a written brief read beforehand, a live session in the overlap window and clear owners and handoffs by region, gives everyone the same picture from day one.

                ## Milestones
                1. A written project brief circulated a few days before the kickoff.
                2. A live kickoff inside the overlap window with questions collected in advance.
                3. Owners, handoffs and communication rhythm agreed for each region.
                4. A kickoff summary posted for anyone who could not attend.

                ## Notes
                Start from the **Meeting notes** template for the kickoff record.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kickoff is held after a pre-read, and a summary naming owners and handoffs for each region is posted within a day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a two-page project brief and send it as a pre-read"
                - "Collect questions in writing before the live kickoff"
                - "Agree owners and handoffs for each region during the session"
                - "Post a kickoff summary for anyone who could not attend"
            - name: Quarterly planning session across time zones
              description: |-
                ## Purpose
                Planning days designed for one room become marathon calls that someone attends at three in the morning. Splitting quarterly planning into written pre-work, two short live sessions placed fairly across regions and a written close lets every location shape the plan without anyone losing a night's sleep.

                ## Milestones
                1. Written inputs from each person gathered a week before.
                2. Two live sessions of no more than two hours, timed fairly across regions.
                3. Priorities and owners agreed and written up.
                4. The final plan shared and confirmed in writing by each region.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Quarterly priorities with owners are agreed through written pre-work and two short live sessions, and confirmed in writing by every region."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Send a planning prompt asking for written input by a set date"
                - "Schedule two short live sessions at fair times for each region"
                - "Write up priorities and owners after the second session"
                - "Ask each region to confirm the final plan in writing"
            - name: Opening a new satellite location for the team
              description: |-
                ## Purpose
                Once the first two or three people join in a new city, they can become an island that hears about decisions last. Planning the launch of a satellite location, with a local lead, visits from the main team, a clear charter for the work it owns and a first-month plan, makes the new site part of the team rather than an outpost.

                ## Milestones
                1. The work the new location will own written down.
                2. A local lead named with clear authority.
                3. A visit by the manager or senior team members in the first month.
                4. A check after ninety days on whether the site feels informed and included.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new location has a written charter of owned work, a named local lead and a ninety-day check on inclusion completed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write a short charter for the work the new site will own"
                - "Name the local lead and agree what they can decide"
                - "Plan a visit to the new site in its first month"
                - "Run a ninety-day check-in with everyone at the new site"
            - name: Remote team member departure and knowledge handover
              description: |-
                ## Purpose
                Departures from a distributed team often take knowledge with them, because what the leaver knew lived in private messages and their head. A structured handover over their notice period, with documented responsibilities, recorded walkthroughs and a proper remote farewell, protects the team's knowledge and lets the person leave well.

                ## Milestones
                1. A list of the leaver's responsibilities, systems and relationships.
                2. Each item handed to a named person or documented in the handbook.
                3. Short recorded walkthroughs of anything hard to write down.
                4. A farewell the whole team can join, timed for the leaver's region.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every responsibility of the leaver has a named new owner or a handbook page before their last day, and a farewell is held."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the leaver's responsibilities, systems and key contacts with them"
                - "Ask the agent to turn the list into a handover document with owners"
                - "Book recorded walkthroughs for anything hard to write down"
                - "Arrange a farewell call at a good time for the leaver's region"
            - name: Taking over a remote team you have never met
              description: |-
                ## Purpose
                Inheriting a distributed team means building trust with people whose faces you have only seen on video and whose history you do not know. A first ninety days focused on one-to-one listening, learning the existing norms before changing them and an early visit where possible, gives you the understanding and goodwill to lead well later.

                ## Milestones
                1. A listening one-to-one held with every team member in the first two weeks.
                2. The team's existing norms, tools and rhythms written down before any are changed.
                3. An in-person visit or meeting with as many people as possible arranged.
                4. A short note shared at day ninety on what you heard and what will change.

                ## Notes
                Change nothing major in the first month unless it is urgent. Remote teams read early changes as a verdict on the previous manager.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every team member has had a listening one-to-one within two weeks and a written ninety-day note has been shared with the team."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Book a forty-five minute listening one-to-one with every team member"
                - "Write down the team's current tools, rhythms and norms"
                - "Plan an in-person visit to the largest group of the team"
                - "Share a day-ninety note on what you heard and what will change"
            - name: Leading an office team while you work remotely
              description: |-
                ## Purpose
                Some managers end up as the only remote person, leading a team that sits together in an office they rarely visit. Without care the team forms its own decisions in the room and the manager becomes a voice on a speaker. Setting up a strong deputy on site, clear written priorities and regular visits keeps you leading rather than spectating.

                ## Milestones
                1. A trusted on-site deputy named with agreed responsibilities.
                2. Team decisions made or recorded in writing rather than only in the room.
                3. A regular visit rhythm agreed and booked.
                4. The team asked after a quarter whether they get enough of your time and attention.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An on-site deputy is named, visits are booked for the next quarter and team feedback on your availability is gathered after three months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Name an on-site deputy and write down what they cover"
                - "Ask the team to post decisions made in the room into the decision log"
                - "Book office visits for the next three months"
                - "Ask the team after a quarter whether they get enough of your time"
            - name: Leading contractors and agency staff across countries
              description: |-
                ## Purpose
                Many distributed teams include freelancers, agencies and offshore partners who work to contracts rather than job descriptions. Leading them well means clear written scopes, agreed rhythms, sensible access to tools and information, and treating them as part of the team while respecting the contractual line that HR, procurement and legal will want kept.

                ## Milestones
                1. Each contractor's scope, deliverables and contact owner written down.
                2. A rhythm for updates and reviews agreed with each supplier.
                3. Tool and data access set to what the contract needs and no more.
                4. Monthly checks of deliverables against the contract recorded.

                ## Notes
                Ask HR or legal where the line sits between contractor and employee in each country. Directing a contractor like staff can create obligations nobody intended.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every contractor has a written scope, an agreed update rhythm and access matched to the contract, with deliverables checked monthly."
                cadence: rolling
              tasks:
                - "List every contractor and agency with scope and owner"
                - "Agree an update and review rhythm with each supplier"
                - "Check tool and data access against each contract"
                - "Check contractor deliverables against each contract @recurring(monthly:6)"
            - name: Being a strong teammate on a distributed team
              description: |-
                ## Purpose
                Every member of a distributed team, not just the manager, shapes how well it works by writing clearly, being reachable at agreed times and making their work visible. A short personal plan for team members, covering status visibility, focus time, sign-off habits and how to ask for help across time zones, makes remote work easier for everyone you work with.

                ## Milestones
                1. Your working hours and availability set in your calendar and chat status.
                2. A habit of posting progress where the team can see it.
                3. A personal routine for starting and ending the remote workday.
                4. One colleague in another region asked how you could make their work easier.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Your hours are visible in calendar and chat, and you have acted on feedback from one colleague in another region about working together."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Set your working hours in your calendar and chat profile"
                - "Write a start and end of day routine and try it for two weeks"
                - "Post your progress in the team space before you sign off"
                - "Ask one colleague in another region what would help them most"
            - name: Supporting the one person in a far-off time zone
              description: |-
                ## Purpose
                One team member eight or ten hours from everyone else misses most live conversations and can feel invisible for months. Giving them deliberate attention, such as a one-to-one in their hours, first look at written proposals, ownership of a clear piece of work and a monthly check on how isolated they feel, keeps them engaged and keeps the team from forgetting them.

                ## Milestones
                1. A one-to-one held at a time that suits them, not you.
                2. A clear area of work they own and can progress without waiting for others.
                3. Their input sought in writing before decisions are taken live.
                4. A monthly private conversation on how connected they feel.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The outlying team member owns a defined area of work, has one-to-ones in their hours and a monthly connection check for a quarter."
                cadence: rolling
              tasks:
                - "Move their one-to-one to a time inside their working hours"
                - "Agree a piece of work they can own without waiting on others"
                - "Send them proposals for written input before live discussions"
                - "Ask them privately how connected they feel @recurring(monthly:15)"
            - name: Protecting your own hours as a distributed leader
              description: |-
                ## Purpose
                Leaders of distributed teams often try to be present in every time zone and end up working early mornings and late nights for months. Setting your own working window, delegating cover for the regions outside it and planning your week in advance protects your judgement and models the boundaries you want your team to keep.

                ## Milestones
                1. Your own working window written and shared with the team.
                2. Named people who cover decisions when you are offline.
                3. A weekly planning habit that places your late or early calls deliberately.
                4. A month where late or early calls stay within an agreed limit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your working window and offline cover are shared with the team and a month passes with out-of-hours calls inside your agreed limit."
                cadence: rolling
              tasks:
                - "Write down your own working window and a limit on out-of-hours calls"
                - "Name who decides for each region when you are offline"
                - "Plan next week's calls and count those outside your window @recurring(weekly:sun)"
                - "Share your working window with the team"
            - name: Follow-the-sun operating model for round-the-clock work
              description: |-
                ## Purpose
                Support, operations and some engineering teams use their spread of time zones to keep work moving around the clock, passing it from region to region. Designing a full follow-the-sun model, with regional ownership windows, formal handover points, shared queues and a single escalation path, turns geography into a strength instead of a source of dropped work.

                ## Milestones
                1. Ownership windows defined for each region with no unowned hours.
                2. A formal handover at each boundary with a written checklist.
                3. One shared queue or board that every region works from.
                4. A month of handover quality reviewed and gaps fixed.

                ## Notes
                Follow-the-sun fails on handover quality, not staffing. Measure work that sits unowned across a boundary.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented follow-the-sun model with no unowned hours and a written handover checklist runs for a month with handover quality reviewed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Draw the twenty-four hour clock with each region's ownership window"
                - "Write a handover checklist for each regional boundary"
                - "Move all regions onto one shared queue"
                - "Review a month of handovers and count work left unowned"
            - name: Measuring distributed team effectiveness
              description: |-
                ## Purpose
                Leaders under pressure to justify remote work are tempted by activity measures such as online status or messages sent, which reward looking busy rather than delivering. Choosing a small set of outcome and health measures, such as delivery against commitments, cycle time, response to blockers and health pulse scores, gives an honest picture of whether the distributed model works.

                ## Milestones
                1. Four to six outcome and health measures chosen and defined.
                2. Activity tracking explicitly ruled out in writing.
                3. A baseline recorded for each measure.
                4. Measures reviewed quarterly and shared with the team and your manager.

                ## Notes
                Start from the **Metrics log** template. Tell the team exactly what is measured and why, before you start.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four to six defined outcome and health measures with baselines are reviewed each quarter and shared with the team."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Choose four to six outcome and health measures and define each"
                - "Write a short note ruling out activity monitoring"
                - "Record a baseline for every measure"
                - "Review distributed team measures with the team @recurring(quarterly)"
            - name: Information security habits for a team working from anywhere
              description: |-
                ## Purpose
                Working from homes, cafes and co-working spaces in several countries, your team handles the same data as an office team without the same physical protections. Working with your security team to agree a few practical habits, such as device encryption, screen privacy in public, approved file sharing and quick reporting of lost devices, lowers the chance of a breach starting with your team.

                ## Milestones
                1. The organisation's remote security requirements confirmed with the security team.
                2. A one-page list of team habits agreed and added to the handbook.
                3. Every team member's device checked against the requirements.
                4. A quarterly review of access to shared spaces and tools.

                ## Notes
                Rules on data leaving a country can apply when people travel or relocate. Check with security or legal before someone works from abroad.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A one-page remote security habits list is in the handbook, every device is confirmed compliant and access is reviewed each quarter."
                cadence: rolling
              tasks:
                - "Ask the security team for the remote working requirements"
                - "Write a one-page list of security habits for the handbook"
                - "Ask each person to confirm their device meets the requirements"
                - "Review who has access to team spaces and tools @recurring(quarterly)"
---

# Leading Distributed Teams

This area is for managers and teams whose people are spread across cities, countries and time zones, where nobody overhears the decision and a quick question can take a day to answer. It starts with the foundations (a time zone map, an overlap window, a working agreement, channel rules and a handbook), then the written and live rhythms that keep the team connected, the skills of leading at a distance, the improvements and choices about tools, meetings, hiring and fairness, the dated gatherings and kickoffs, the situations you may find yourself leading in, and finally the specialist work of round-the-clock cover, measurement and security.

What repeats is a Monday written update, written check-ins three times a week, weekly one-to-ones and Friday thanks, a monthly retrospective, meeting rotation, documentation upkeep and connection time on different days, quarterly meeting audits and health pulses, and a yearly refresh of the working agreement and holiday calendar. The 1:1, Feedback themes, Metrics log, Onboarding 30/60/90, Trip and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
