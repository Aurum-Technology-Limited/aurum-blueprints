---
id: strategy-leadership.leading-through-a-crisis
name: Leading Through a Crisis
description: "Severity levels, a named crisis team and decision authority set before anything breaks, a working battle rhythm and communication habits for the live response, and the reviews that turn each crisis into lasting judgement."
category: business
version: 1.0.0
tags: [strategy-leadership, leading-through-a-crisis, manager, enterprise, founder, crisis-management, incident-command, crisis-communication]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - vendor
    - operational-checklist
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Leading Through a Crisis
          description: "Leading people and decisions during a sudden crisis, setting up a response team, communicating often and keeping long-term judgement intact."
          projects:
            - name: Crisis severity levels and activation triggers
              description: |-
                ## Purpose
                Most organisations lose the first two hours of a crisis arguing about whether it is one. Writing three or four severity levels, each with plain triggers and a named person who can declare it, means the response starts on facts rather than on someone's nerve.

                ## Milestones
                1. Three or four severity levels written, each with two or three observable triggers such as injury, data exposure, media enquiry or loss of a critical service.
                2. A named role, not a person, able to declare each level, with a deputy.
                3. What each level switches on (who is called, which meetings start, who is told) written beside it.
                4. The levels agreed by the executive team and stored where everyone on the call tree can open them offline.

                ## Notes
                Err towards declaring early. Standing a team down after an hour costs little; starting six hours late costs a great deal.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page severity table with triggers, declaring roles and actions per level, approved by the executive team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the five worst incidents the organisation has had or narrowly avoided"
                - "Draft triggers for each severity level from those incidents"
                - "Name the declaring role and deputy for every level"
                - "Take the table to the next executive meeting for sign-off"
            - name: Named crisis response team with deputies
              description: |-
                ## Purpose
                When a crisis lands, the people in the room should be chosen by role, not by who happens to be in the office. A standing team of six to eight roles (lead, operations, communications, people, legal, finance, technology, scribe), each with a trained deputy, makes the first call short and the first decisions sound.

                ## Milestones
                1. Six to eight crisis roles defined, each with a two-line remit.
                2. A primary and a deputy named for every role, with at least one deputy in a different location.
                3. Each person told in a one-to-one what the role asks of them and has accepted it.
                4. The roster stored with the severity table and the call tree.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A crisis team roster with a primary and deputy for every role, each of whom has confirmed acceptance in writing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the remit for each crisis role in two lines"
                - "Pick a primary and a deputy for each role"
                - "Hold a short one-to-one with each person to explain the role"
                - "Publish the roster to the team with the severity table attached"
            - name: Decision authority for the first 72 hours
              description: |-
                ## Purpose
                In the first three days the crisis lead may need to shut a site, pull a product, spend money outside budget or speak publicly without the usual sign-offs. Agreeing in advance what the lead may decide alone, what needs the chief executive and what needs the board removes the most dangerous delay of all.

                ## Milestones
                1. A list of the ten decisions most likely in the first 72 hours.
                2. For each decision, who may make it alone, who must be consulted and who must be told within how many hours.
                3. An emergency spending limit agreed with the finance lead.
                4. The authority table approved by the chief executive and noted by the board or its chair.

                ## Notes
                Delegated authority is only real if it survives the moment. Ask the board chair directly whether they would back a decision made inside these limits.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed table of the ten likeliest crisis decisions, with who decides, who is consulted and an emergency spending limit."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the decisions your last real incident needed in its first three days"
                - "Agree an emergency spending limit with the finance lead"
                - "Draft the decide, consult and inform columns for each decision"
                - "Walk the board chair through the table and record their agreement"
            - name: Crisis call tree and offline contact sheet
              description: |-
                ## Purpose
                Phones get lost, systems go down and the person who knows everyone's number is on a plane. A call tree that reaches every crisis role within thirty minutes, kept on paper and on a device that does not depend on company systems, is the cheapest resilience you will ever buy.

                ## Milestones
                1. Mobile, personal email and an alternative contact for every crisis team member and deputy.
                2. Contacts for the board chair, insurer, lawyers, communications adviser, key suppliers and the main authorities in one sheet.
                3. A call tree that shows who calls whom, with a fallback if someone does not answer within ten minutes.
                4. Printed copies held by the lead and deputy, and an encrypted copy stored outside company systems.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A call tree and contact sheet covering every crisis role and key external party, held on paper and off company systems."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect personal mobile numbers from every crisis team member"
                - "Add insurer, legal, adviser and authority contacts to the sheet"
                - "Draw the call tree with a ten-minute fallback for each branch"
                - "Print two copies and store an encrypted copy off company systems"
            - name: Crisis room and backup virtual bridge
              description: |-
                ## Purpose
                Every response team needs one physical place and one virtual one it can open in minutes, both independent of the systems most likely to fail. Setting up a standing bridge line, a fallback messaging channel and a room with the right kit avoids the usual first hour of hunting for links and chargers.

                ## Milestones
                1. A standing video bridge and a dial-in number that do not rely on the company's own email or identity system.
                2. A secondary messaging channel agreed for the crisis team if primary systems are down.
                3. A room identified with power, whiteboards, a screen and printed copies of the plan.
                4. Every crisis team member has joined the bridge and the fallback channel at least once.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested bridge, fallback channel and equipped room, each used once by the whole crisis team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up a standing bridge that works without company sign-in"
                - "Agree a fallback messaging channel with the technology lead"
                - "Stock the crisis room with chargers, whiteboards and printed plans"
                - "Ask every team member to join the bridge and confirm it works"
            - name: Holding statement library for likely scenarios
              description: |-
                ## Purpose
                The first public words in a crisis are usually written in fifteen minutes by someone frightened. Drafting holding statements for your six likeliest scenarios, pre-cleared by legal, lets you say something accurate and human within the first hour without promising what you cannot yet know.

                ## Milestones
                1. Six likely scenarios chosen from the risk inventory.
                2. A short holding statement for each, covering what happened, what you are doing, care for those affected and when you will update.
                3. Versions for staff, customers and media where they need to differ.
                4. Every statement reviewed by legal and the communications lead and stored with the plan.

                ## Notes
                Never put a cause, a number or a blame in a holding statement. Those come later, once verified.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six pre-cleared holding statements with staff, customer and media versions, filed with the crisis plan and reviewed each quarter."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose six scenarios from the risk inventory to draft for"
                - "Ask the agent to draft a first holding statement for each scenario"
                - "Send the drafts to legal and the communications lead for clearance"
                - "Review and update the statements against recent events @recurring(quarterly)"
            - name: Inventory of the ten likeliest shocks
              description: |-
                ## Purpose
                Crisis plans written for every possible disaster are read by no one. Picking the ten shocks most likely to hit this organisation, ranked by likelihood and damage, focuses the exercises, statements and decisions on what will probably happen rather than what makes the best film.

                ## Milestones
                1. A long list of shocks gathered from the risk team, past incidents, peers and the sector.
                2. Ten chosen and scored on likelihood and impact by at least three executives.
                3. An owner named for each of the ten, responsible for its playbook page.
                4. The ten linked to the severity levels and holding statements.

                ## Notes
                Start from the **Risk register** template so the crisis view and the enterprise risk view stay in one place.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of ten crisis scenarios, each scored by three executives and assigned an owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the last three years of incidents and near misses"
                - "Ask two peers in your sector what nearly sank them"
                - "Score the long list with two other executives"
                - "Refresh the ten against the latest incidents and news @recurring(quarterly)"
            - name: Board and investor notification protocol
              description: |-
                ## Purpose
                Directors and major investors who learn about a crisis from the news stop trusting management fast. A short protocol for who tells the chair, how quickly, what goes in the first message and how often updates follow keeps governance on side while the team gets on with the response.

                ## Milestones
                1. Agreed timing for informing the chair at each severity level, for example within two hours at the top level.
                2. A one-paragraph template for the first board message.
                3. An update rhythm for directors and, where relevant, major investors or lenders.
                4. The protocol confirmed with the chair and noted in board minutes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A notification protocol with timings per severity level and a first-message template, minuted by the board."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the chair how fast they expect to hear at each severity level"
                - "Draft a first board message template in one paragraph"
                - "List investors or lenders whose agreements require prompt notice"
                - "Confirm the protocol with the chair before the board pack goes out @recurring(yearly)"
            - name: Battle rhythm for a live response
              description: |-
                ## Purpose
                Once a crisis is declared, unstructured calls eat the leaders' time and decisions get lost. A written battle rhythm (a short stand-up at fixed times, a decision meeting, a written update to staff and stakeholders, and a handover between shifts) gives everyone a predictable beat to work to.

                ## Milestones
                1. A default daily schedule for the first week, with stand-up, decision meeting and update times.
                2. A standard 15-minute stand-up agenda: facts, actions, decisions needed, next update.
                3. A rule for when the rhythm loosens as the crisis stabilises.
                4. The rhythm used in at least one exercise and adjusted afterwards.

                ## Notes
                Fixed times matter more than frequency. People can wait two hours for an answer if they know exactly when it will come.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written battle rhythm with fixed meeting times and agendas, used in an exercise and revised from what was learned."
                cadence: rolling
              tasks:
                - "Draft a first-week schedule with fixed stand-up and update times"
                - "Write the 15-minute stand-up agenda on one card"
                - "Set the rule for stepping the rhythm down as things stabilise"
                - "Run the rhythm in the next exercise and note what slipped"
            - name: One-page situation report format
              description: |-
                ## Purpose
                Different leaders asking different people the same questions is how crises fragment. One situation report format, issued at fixed times and read by everyone from the board to the front line managers, becomes the single version of the truth and cuts the side calls by half.

                ## Milestones
                1. A one-page format with sections for confirmed facts, unknowns, actions under way, decisions taken and next update time.
                2. A named owner of the report and a deputy.
                3. Distribution lists for each audience agreed in advance.
                4. A practice report written from a real news story and critiqued by the crisis team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An agreed situation report template with owner and distribution, practised from a live news story each quarter."
                cadence: rolling
              tasks:
                - "Draft the one-page situation report template"
                - "Name the report owner and deputy on the roster"
                - "Agree distribution lists for board, staff and partners"
                - "Write a practice report from a current news crisis @recurring(quarterly)"
            - name: Decision and action log for live incidents
              description: |-
                ## Purpose
                Weeks later, regulators, insurers, lawyers and your own board will ask who decided what, when and on what information. A simple log kept by a dedicated scribe from the first call protects the organisation, protects the leaders and makes the after-action review honest.

                ## Milestones
                1. A log template with time, decision or action, owner, information available and rationale.
                2. A scribe and deputy named on the crisis roster.
                3. Agreement with legal on how the log is stored and who may see it.
                4. The log used in an exercise and checked for gaps.

                ## Notes
                Write facts and reasons, not opinions about colleagues. Assume the log will be read aloud one day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A decision log template, a named scribe and a storage rule agreed with legal, tested in one exercise."
                cadence: rolling
              tasks:
                - "Create the decision log template with a rationale column"
                - "Name a scribe and deputy for the crisis team"
                - "Agree storage and access rules for the log with legal"
                - "Audit the exercise log for missing rationales and times"
            - name: Quarterly tabletop crisis exercises
              description: |-
                ## Purpose
                Plans that are never exercised fail on first contact, usually at the joins between people. A 90-minute tabletop every quarter, built on one of the ten likeliest shocks with injects that arrive during the session, keeps roles, contacts and judgement sharp without disrupting the business.

                ## Milestones
                1. A year of four scenarios drawn from the shock inventory.
                2. Each exercise run with injects, a facilitator and an observer taking notes.
                3. Three actions recorded after each exercise, each with an owner and date.
                4. Deputies leading at least one of the four exercises.

                ## Notes
                Start from the **Meeting notes** template for the observer's record so actions do not drift.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four tabletop exercises a year, each producing three owned actions, with deputies leading at least one."
                cadence: cyclic
              tasks:
                - "Pick next quarter's scenario from the shock inventory"
                - "Write six injects that escalate across the session"
                - "Run a 90-minute tabletop exercise with the crisis team @recurring(quarterly)"
                - "Assign owners and dates to three actions from the exercise"
            - name: Annual crisis plan refresh
              description: |-
                ## Purpose
                People leave, systems change and the business moves into new places, so a crisis plan goes stale in about a year. A planned annual refresh, timed before the busiest season, keeps the roster, triggers, authority and contacts true without waiting for an incident to expose the gaps.

                ## Milestones
                1. Every section of the plan checked against the current organisation chart and systems.
                2. Exercise actions from the year closed or carried forward deliberately.
                3. Changes approved by the executive team and the version number raised.
                4. Old printed copies collected and replaced.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated new version of the crisis plan approved by the executive team, with superseded printed copies replaced."
                cadence: cyclic
              tasks:
                - "Book the annual crisis plan refresh before peak season @recurring(yearly)"
                - "Compare the roster with the current organisation chart"
                - "Close or carry forward every open exercise action"
                - "Replace printed plan copies held by the lead and deputies"
            - name: Monthly call tree and roster check
              description: |-
                ## Purpose
                Wrong numbers on a call tree are found at the worst possible moment. A ten-minute monthly check of the roster and contacts, and a short unannounced test call each quarter, keeps the list current as people change roles, phones and holidays.

                ## Milestones
                1. A monthly check that every crisis role still has a current primary and deputy.
                2. Changes from leavers, joiners and role moves made within a week.
                3. A quarterly test call with time to reach every role recorded.
                4. Average time to reach the full team under 30 minutes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly roster checks recorded and quarterly test calls reaching every crisis role within 30 minutes."
                cadence: rolling
              tasks:
                - "Check the roster against leavers and role changes @recurring(monthly:9)"
                - "Run an unannounced test of the call tree and time it @recurring(quarterly)"
                - "Fix any wrong numbers within a week of finding them"
                - "Record each test result beside the call tree"
            - name: Early warning signal watch
              description: |-
                ## Purpose
                Many crises announce themselves weeks early: a rise in customer complaints, a whistleblower email, a supplier going quiet, a regulator letter. A weekly scan of a short list of signals, with a threshold that triggers a conversation, gives leaders time to act before a problem becomes a crisis.

                ## Milestones
                1. Eight to twelve early warning signals chosen, each with a data source and an owner.
                2. A threshold for each signal that triggers a review conversation.
                3. A weekly scan habit with a short note of anything unusual.
                4. A monthly look back at whether any signal was missed.

                ## Notes
                Include soft signals. A sudden drop in people raising concerns can be as telling as a spike.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A signal list with owners and thresholds, scanned weekly, with a monthly note on misses kept for six months."
                cadence: rolling
              tasks:
                - "Choose eight early warning signals and their data sources"
                - "Set a review threshold for each signal"
                - "Scan the early warning signals and note anything unusual @recurring(weekly:mon)"
                - "Review whether any signal was missed last month @recurring(monthly:17)"
            - name: Staff welfare during a prolonged incident
              description: |-
                ## Purpose
                Responders who work sixteen-hour days for a week make worse decisions and some burn out for good. Setting rules before a crisis for shift lengths, rest days, food, transport and access to support means welfare is a structure, not a favour the leader remembers on day five.

                ## Milestones
                1. A maximum shift length and a rule for mandatory rest after a set number of days.
                2. A welfare lead named on the crisis roster with authority to send people home.
                3. Access to counselling or an employee assistance service confirmed and the number printed in the plan.
                4. A short check-in question set for team leads to use each shift.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Written rules on shift length and rest, a welfare lead with authority and support contacts printed in the plan."
                cadence: rolling
              tasks:
                - "Agree a maximum shift length with the people lead"
                - "Name a welfare lead with authority to stand people down"
                - "Confirm the counselling service number and add it to the plan"
                - "Write three check-in questions for team leads to ask each shift"
            - name: Leader's sleep and judgement routine under pressure
              description: |-
                ## Purpose
                Sleep loss after two nights impairs judgement about as much as alcohol, and leaders are the worst at noticing it in themselves. A personal routine for sleep, food, exercise and a trusted person who can tell you to stop protects the quality of the decisions that only you can make.

                ## Milestones
                1. A personal rule for minimum sleep in a crisis, agreed with your deputy.
                2. A named person who has permission to tell you to rest.
                3. A short end-of-day routine to write down tomorrow's top three and switch off.
                4. A weekly look at sleep and energy in normal times so you know your baseline.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written personal crisis routine with a minimum sleep rule and a named person allowed to send you to rest."
                cadence: rolling
              tasks:
                - "Write your minimum sleep rule and share it with your deputy"
                - "Ask one trusted person to tell you when you need to stop"
                - "Review your week's sleep and energy on Friday afternoon @recurring(weekly:fri)"
                - "Practise writing tomorrow's top three before switching off"
            - name: Rumour and misinformation tracking
              description: |-
                ## Purpose
                Rumours inside the company and on social media often spread faster in a crisis than the facts and shape what customers and staff believe. A simple tracker of what people are saying, where, and what the correction is, lets the communications lead answer the damaging rumours and ignore the trivial ones.

                ## Milestones
                1. Channels to watch listed: internal chat, staff forums, social media, local press and customer service logs.
                2. A tracker with rumour, source, reach, accuracy and response.
                3. A rule for which rumours get a direct correction and which are left alone.
                4. A monthly peacetime sweep so the team knows what normal chatter looks like.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rumour tracker with a correction rule, and monthly peacetime sweeps recorded for six months."
                cadence: rolling
              tasks:
                - "List the internal and external channels to watch in a crisis"
                - "Set up a rumour tracker with reach and accuracy columns"
                - "Agree the rule for when a rumour gets a direct correction"
                - "Sweep internal and public channels for chatter about the company @recurring(monthly:22)"
            - name: Speaking plainly under uncertainty
              description: |-
                ## Purpose
                People forgive a leader who says they do not yet know; they do not forgive one who guesses and is wrong. Practising a simple structure (what we know, what we do not know yet, what we are doing, when we will update) makes your first messages credible and keeps you from overpromising.

                ## Milestones
                1. The four-part structure written on a card you can carry.
                2. Three practice messages drafted from past incidents using it.
                3. One message delivered aloud to a colleague and critiqued for speculation and jargon.
                4. A personal list of phrases to avoid, such as guarantees and blame.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three practice crisis messages in the four-part structure, one delivered aloud and critiqued by a colleague."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the four-part message structure on a card"
                - "Draft three practice messages from incidents you remember"
                - "Deliver one message aloud to a colleague and ask for critique"
                - "List the phrases you will not use in a crisis message"
            - name: Media interview practice for the crisis spokesperson
              description: |-
                ## Purpose
                A hostile interview on the second day of a crisis is the wrong moment to learn how bridging, pausing and staying on message work. A half-day of filmed practice with a trainer, followed by a yearly refresher, prepares the chief executive and a backup spokesperson to be calm, accurate and visibly human.

                ## Milestones
                1. A primary and backup spokesperson agreed.
                2. A filmed practice session covering a doorstep, a phone interview and a studio interview.
                3. Three key messages and three hostile questions prepared for each likely scenario.
                4. Feedback from the trainer written down with two habits to change.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Both spokespeople complete a filmed practice session and record two habits to change, with a yearly refresher booked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree the primary and backup spokesperson with the chief executive"
                - "Book a filmed media practice session with a trainer"
                - "Prepare three hostile questions for each likely scenario"
                - "Book a media practice refresher for both spokespeople @recurring(yearly)"
            - name: Deciding with incomplete information
              description: |-
                ## Purpose
                Crises punish both the leader who waits for certainty and the one who acts on the first rumour. Learning to sort decisions into reversible and irreversible, to set a time by which you will decide, and to state the assumption you are acting on, lets you move fast without gambling.

                ## Milestones
                1. A short note on reversible and irreversible decisions and how much information each deserves.
                2. A habit of stating the decision deadline and the key assumption out loud.
                3. Three past decisions reviewed against the method.
                4. The method used in one tabletop exercise and discussed afterwards.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page decision method note, applied to three past decisions and used in one exercise."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a one-page note on reversible and irreversible decisions"
                - "Review three past decisions you made under pressure using it"
                - "State the decision deadline and assumption aloud in the next exercise"
                - "Discuss with the team where the method helped or slowed you"
            - name: Crisis case study reading habit
              description: |-
                ## Purpose
                Experienced crisis leaders draw on a mental library of how others handled recalls, breaches, accidents and scandals. Reading one well-documented case a month, and writing down what you would have done differently, builds that library before you need it.

                ## Milestones
                1. A list of twelve cases across recalls, data breaches, industrial accidents, financial shocks and leadership scandals.
                2. A one-paragraph note for each case on the first 48 hours.
                3. Two lessons a quarter taken to the crisis team.
                4. At least one case drawn from your own sector.

                ## Notes
                Inquiry reports and regulator findings are often more honest than the press coverage at the time.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve case notes written in a year, with two lessons shared with the crisis team each quarter."
                cadence: rolling
              tasks:
                - "List twelve crisis cases to read this year"
                - "Read one crisis case and write a note on its first 48 hours @recurring(monthly:26)"
                - "Share two lessons with the crisis team each quarter"
                - "Find an inquiry report from your own sector"
            - name: Delivering hard news to staff in person
              description: |-
                ## Purpose
                Telling staff about deaths, closures, layoffs forced by the crisis or a breach of their own data is a skill few leaders practise. Learning to say it plainly in the first sentence, stay in the room for questions and follow up in writing preserves trust even when the news is terrible.

                ## Milestones
                1. A structure for hard news: the fact in the first sentence, what it means, what happens next, support available.
                2. Two practice deliveries with a trusted colleague playing a distressed listener.
                3. A follow-up written message template.
                4. A list of support resources to name at the end.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two rehearsed hard-news deliveries and a written follow-up template filed with the crisis plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the four-step structure for delivering hard news"
                - "Rehearse twice with a colleague playing a distressed listener"
                - "Draft the written follow-up message template"
                - "List the support resources you will name every time"
            - name: Running a 20-minute crisis decision meeting
              description: |-
                ## Purpose
                Crisis meetings expand to fill the day unless someone runs them hard. Practising a 20-minute format (facts, options, decision, owner, next check) with a visible clock and a scribe teaches the team to arrive with options rather than updates.

                ## Milestones
                1. A written 20-minute agenda with timings.
                2. Ground rules agreed: updates in writing beforehand, options not stories, one decision per item.
                3. Three practice meetings run in exercises, each timed.
                4. Average meeting under 25 minutes with every decision logged.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three timed practice decision meetings averaging under 25 minutes, with every decision logged."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the 20-minute decision meeting agenda with timings"
                - "Agree the ground rules with the crisis team"
                - "Time the decision meeting in the next exercise"
                - "Compare logged decisions with the meeting notes afterwards"
            - name: How stress changes judgement
              description: |-
                ## Purpose
                Under acute stress people narrow their attention, cling to the first explanation and stop listening to dissent. Understanding these effects, and building simple counters such as a named devil's advocate and a pause before irreversible calls, helps a leadership team stay sound when adrenaline is high.

                ## Milestones
                1. A short reading list on stress, tunnel vision and group decision-making in emergencies.
                2. Three common traps written down with a counter for each.
                3. A rotating devil's advocate role added to the crisis team.
                4. A two-minute pause rule before any irreversible decision.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three named stress traps with counters, a devil's advocate role and a pause rule written into the plan."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read two accounts of decision-making in emergencies"
                - "Write three stress traps and a counter for each"
                - "Add a rotating devil's advocate role to the crisis team"
                - "Put the two-minute pause rule into the plan"
            - name: Shift handovers for the crisis team
              description: |-
                ## Purpose
                Crises longer than a day need shifts, and information is lost at every handover. A five-minute handover format (current picture, open actions, decisions pending, watch-outs, who to call) lets leaders actually sleep and lets the deputy lead with confidence.

                ## Milestones
                1. A one-page handover template.
                2. A rule that the outgoing lead stays reachable for 30 minutes after handover.
                3. Two practice handovers run in an exercise between lead and deputy.
                4. Gaps found in practice fixed in the template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A handover template tested twice in an exercise, with any gaps fixed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the five-part handover template"
                - "Agree the 30-minute reachability rule with deputies"
                - "Practise two handovers during the next exercise"
                - "Fix the template where information was dropped"
            - name: Cash runway check for a sudden shock
              description: |-
                ## Purpose
                Some crises stop revenue overnight while costs carry on: a site closure, a cyber attack that halts invoicing, a lost licence. Knowing in advance how many weeks of cash you have under three shock cases, and which levers you would pull first, lets the crisis lead decide calmly instead of reaching for blunt cuts on day two.

                ## Milestones
                1. Weekly cash runway calculated under three shock cases with the finance lead.
                2. The first five cash levers listed in order, such as drawing facilities, delaying discretionary spend or talking to lenders.
                3. Lender and investor conversations that would be needed named in advance.
                4. The analysis added to the crisis plan as a one-page annex.

                ## Notes
                This is a first-weeks liquidity view, not a turnaround plan. Bring in your finance adviser and lenders for anything beyond it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page annex showing weeks of cash under three shock cases and an ordered list of five cash levers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree three shock cases with the finance lead"
                - "Calculate weekly cash runway under each case"
                - "Order the first five cash levers you would pull"
                - "Add the one-page annex to the crisis plan"
            - name: Crisis communications adviser on retainer
              description: |-
                ## Purpose
                Searching for a crisis communications firm on the day of a crisis means paying the highest price for the least briefed adviser. Choosing one in advance, briefing them on the business and agreeing terms means a call at midnight reaches someone who already knows you.

                ## Milestones
                1. Three firms or independent advisers compared on sector experience, availability and fees.
                2. References taken from two clients each for the top two.
                3. A retainer or call-off agreement in place with the chosen adviser.
                4. The adviser briefed on the ten likeliest shocks and added to the contact sheet.

                ## Notes
                Start from the **Vendor** template to keep the comparison, terms and contacts together.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed retainer or call-off agreement with a crisis adviser who has been briefed on the ten likeliest shocks."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask two peers which crisis advisers they have used"
                - "Compare three advisers on experience, availability and fees"
                - "Take references for the top two advisers"
                - "Brief the chosen adviser on the ten likeliest shocks"
            - name: Choosing a mass notification tool
              description: |-
                ## Purpose
                Email is too slow and too easy to miss when you need every employee to know a site is closed or to confirm they are safe. A mass notification tool that sends by text, voice and app, and collects replies, lets you account for people within the hour.

                ## Milestones
                1. Requirements written: channels, two-way replies, groups by site, offline access, cost per head.
                2. Three tools compared against the requirements.
                3. One chosen, contracted and loaded with current staff contacts under the privacy rules that apply.
                4. A first test message sent and the reply rate recorded.

                ## Notes
                Check with your data protection lead before loading personal mobile numbers.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A mass notification tool in place with staff contacts loaded and a test message reaching at least 90 percent of staff."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write requirements for a mass notification tool"
                - "Compare three tools against the requirements"
                - "Check privacy rules for staff numbers with the data protection lead"
                - "Send a test notification to all staff and record the reply rate @recurring(quarterly)"
            - name: Insurance cover review against crisis scenarios
              description: |-
                ## Purpose
                Many leaders discover in a crisis that their policy excludes the very thing that happened, or that notifying late voids cover. Walking the ten likeliest shocks through your policies with your broker shows what is covered, what is not and what you must do in the first hours to keep a claim valid.

                ## Milestones
                1. Each of the ten shocks mapped to the policy that would respond, or marked uncovered.
                2. Notification deadlines and approved-supplier rules from each policy written into the plan.
                3. Gaps discussed with the broker and a decision recorded on each.
                4. Insurer contacts and policy numbers added to the contact sheet.

                ## Notes
                Your broker and lawyers interpret the policy wording. The project is to ask the right questions and record the answers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scenario-to-policy map with notification deadlines and a recorded decision on each cover gap."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Gather current policies and schedules from the finance lead"
                - "Map each likely shock to the policy that would respond"
                - "Walk the gaps through with your broker before renewal @recurring(yearly)"
                - "Write notification deadlines into the crisis plan"
            - name: Customer communication plan for a service failure
              description: |-
                ## Purpose
                When the service customers rely on stops, silence is read as indifference. A plan for who customers hear from, through which channels, how often and with what offer of help keeps the most valuable relationships intact while the fix is under way.

                ## Milestones
                1. Customer segments ranked by impact if service stops, with a named owner for the top accounts.
                2. A status page or equivalent channel ready to switch on.
                3. Message templates for first notice, regular updates and resolution.
                4. A rule agreed with finance and legal on what goodwill gestures leaders may offer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A customer crisis communication plan with ranked segments, ready templates and an agreed goodwill rule."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Rank customer segments by impact if service stops"
                - "Name an owner for each of the top twenty accounts"
                - "Draft first notice, update and resolution templates"
                - "Agree the goodwill gesture rule with finance and legal"
            - name: Single points of failure in critical suppliers
              description: |-
                ## Purpose
                Trouble at one supplier can become yours overnight: a fire at a sole-source factory, a failed cloud region, a logistics firm in administration. Finding the five suppliers you could not operate without, and agreeing a fallback for each, turns a potential crisis into an inconvenience.

                ## Milestones
                1. Suppliers ranked by how quickly their failure would stop the business.
                2. The top five each with a documented fallback: alternative supplier, stock buffer or manual workaround.
                3. Supplier crisis contacts added to the contact sheet.
                4. A yearly review of the ranking booked.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The five most critical suppliers named, each with a documented fallback and crisis contact."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Rank suppliers by how fast their failure would stop operations"
                - "Agree a fallback for each of the top five with the operations lead"
                - "Add supplier crisis contacts to the contact sheet"
                - "Review the critical supplier ranking with operations @recurring(yearly)"
            - name: Criteria for standing down the crisis team
              description: |-
                ## Purpose
                Crisis teams that never stand down exhaust people and keep the business in emergency mode long after it needs to be. Agreeing in advance what stable looks like, and how responsibilities hand back to normal management, lets you end the crisis deliberately rather than letting it fade.

                ## Milestones
                1. Three or four stand-down criteria written, such as no new impact for 72 hours and affected people supported.
                2. A handback checklist showing which owner takes each open action.
                3. A final staff message template marking the end of the response.
                4. The criteria tested in an exercise debrief.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written stand-down criteria and a handback checklist, agreed by the executive team and tested once."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft three stand-down criteria with the crisis team"
                - "Write the handback checklist for open actions"
                - "Draft the end-of-response staff message"
                - "Test the criteria in the next exercise debrief"
            - name: Full-scale crisis simulation for the executive team
              description: |-
                ## Purpose
                Tabletops test thinking; a full simulation tests whether the bridge opens, the statements go out and the call tree works at 7am on a Saturday. Running one realistic, half-day simulation a year with live injects, role-played journalists and an external observer shows how the team truly performs.

                ## Milestones
                1. A scenario and objectives agreed with the chief executive.
                2. An external facilitator and observer engaged.
                3. The simulation run with live injects, mock media calls and a board update.
                4. A written report with no more than ten actions, each owned and dated.

                ## Notes
                Start from the **Operational checklist** template for the run sheet so nothing is forgotten on the day.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A half-day live simulation completed with an external observer's report and up to ten owned actions."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Agree the simulation scenario and objectives with the chief executive"
                - "Engage an external facilitator and observer"
                - "Write the run sheet with timed injects and mock media calls"
                - "Assign owners and dates to the observer's actions"
            - name: Board briefing within 24 hours of a major incident
              description: |-
                ## Purpose
                Directors called in after a major incident want a clear picture, the decisions they need to make and the confidence that management has hold of it. A prepared structure for the first board briefing (facts, impact, response, decisions sought, next update) keeps the meeting short and useful.

                ## Milestones
                1. A briefing template with five sections fitting on two pages.
                2. A list of decisions the board may need to take, such as disclosure, funding or leadership changes.
                3. A practice briefing given to the chair after an exercise.
                4. The chair's feedback used to refine the template.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A two-page board crisis briefing template, practised once with the chair and revised from their feedback."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the two-page board briefing template"
                - "List board decisions that a major incident could require"
                - "Give the chair a practice briefing after the next exercise"
                - "Revise the template from the chair's comments"
            - name: After-action review within 30 days
              description: |-
                ## Purpose
                Memories blur and people move on within weeks, so lessons not captured quickly are lost. A structured review within 30 days of a crisis ending, run without blame and led by someone who was not in charge, turns hard experience into specific changes to the plan.

                ## Milestones
                1. A facilitator from outside the crisis team agreed.
                2. Input gathered from responders, affected staff and key partners through interviews or a short survey.
                3. A report with what went well, what did not and no more than ten actions.
                4. Actions added to the crisis plan refresh and tracked to closure.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An after-action report issued within 30 days of stand-down, with up to ten owned actions tracked to closure."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask a respected leader outside the crisis team to facilitate"
                - "Collect input from responders and affected staff"
                - "Ask the agent to summarise interview notes into themes"
                - "Track each review action to closure in the plan"
            - name: Thanking the people who carried the response
              description: |-
                ## Purpose
                Responders who worked nights and weekends often feel forgotten once the crisis is over, and that memory shapes whether they step up next time. Deliberate, specific thanks from the top, including for people outside the crisis team who covered the day job, closes the crisis well.

                ## Milestones
                1. A list of everyone who contributed, including those who covered other roles.
                2. Personal notes or conversations from the chief executive for the key people.
                3. A visible acknowledgement in an all-staff message or meeting.
                4. Any agreed time off in lieu taken.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every contributor listed and thanked, with time off in lieu taken within two months of stand-down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each crisis lead for the names of everyone who helped"
                - "Write personal notes to the people who carried the most"
                - "Thank contributors by name in the next all-staff message"
                - "Check that agreed time off in lieu has been taken"
            - name: Marking the anniversary of a serious incident
              description: |-
                ## Purpose
                A year after a death, a disaster or a damaging scandal, staff, families and communities notice whether the organisation remembers. Planning a quiet, respectful acknowledgement and a report on what has changed shows the lessons were real.

                ## Milestones
                1. The anniversary date and the people most affected identified.
                2. A form of acknowledgement agreed with those affected, from a message to a small gathering.
                3. A short note on what changed since the incident.
                4. Support offered to anyone for whom the date is hard.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An anniversary acknowledgement agreed with those affected and a note on changes made, shared on the date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Note the anniversary date two months ahead"
                - "Ask those most affected how they want it acknowledged"
                - "Write a short note on what has changed since"
                - "Remind managers to offer support to affected staff"
            - name: Reopening a site after closure or evacuation
              description: |-
                ## Purpose
                Reopening after a fire, flood, contamination or security threat is a crisis decision of its own: open too early and people are hurt, too late and the business suffers. A clear checklist of sign-offs, staff briefings and phased return gives leaders a defensible decision and gives staff confidence to come back.

                ## Milestones
                1. Sign-offs listed: safety inspection, insurer, authorities where required and the site lead.
                2. A phased return plan, starting with essential staff.
                3. A staff briefing covering what happened, what was fixed and how to raise concerns.
                4. A check-in one week after reopening.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A site reopening checklist with all sign-offs recorded and a staff briefing held before full return."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the sign-offs needed before a site can reopen"
                - "Draft a phased return plan starting with essential staff"
                - "Prepare the staff briefing for the reopening day"
                - "Book a check-in with the site lead a week after reopening"
            - name: Founder crisis plan for a small team
              description: |-
                ## Purpose
                In a startup of twenty people, the founder is the crisis team, the spokesperson and often the person who caused the problem. A lean plan, with two co-founders or senior hires sharing roles, one adviser on call and the investors told early, gives a small company the essentials without a binder nobody reads.

                ## Milestones
                1. A one-page plan with three roles shared among the founders and senior hires.
                2. An investor or board member agreed as the first call and sounding board.
                3. A lawyer and communications adviser identified who will take an urgent call.
                4. Holding lines for the three likeliest startup crises, such as an outage, a data leak or a founder departure.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page founder crisis plan with roles, a named first-call investor and holding lines for three scenarios."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Split the three crisis roles among founders and senior hires"
                - "Ask one investor or board member to be the first call"
                - "Find a lawyer and adviser who will take an urgent call"
                - "Write holding lines for an outage, a leak and a founder departure"
            - name: Coordinating a crisis across regions and time zones
              description: |-
                ## Purpose
                In a global enterprise a crisis in one country quickly becomes a question for every region, each with its own laws, media and staff concerns. A model for a central crisis team working with regional cells, with clear rules on who speaks where, keeps the response consistent without ignoring local judgement.

                ## Milestones
                1. Regional crisis leads named for each major region, with deputies.
                2. A rule for when the central team takes over and when the region leads.
                3. A follow-the-sun handover rhythm between regions.
                4. Local legal and communications sign-off requirements listed by region.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A central and regional crisis model with named regional leads, escalation rules and a follow-the-sun handover."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Name a regional crisis lead and deputy for each region"
                - "Agree when the central team takes the lead from a region"
                - "Design a follow-the-sun handover between regions"
                - "List local legal and media sign-off rules for each region"
            - name: Leading your team when the crisis is elsewhere
              description: |-
                ## Purpose
                Most managers are not on the crisis team but still have to keep their people working, calm and informed while the organisation is in the news. A short personal plan for team briefings, handling questions you cannot answer and escalating concerns makes you a steady presence rather than a source of rumour.

                ## Milestones
                1. A habit of sharing each official update with your team within the hour, in your own words.
                2. A set phrase for questions you cannot answer and a route to get answers.
                3. Extra one-to-ones scheduled for anyone directly affected.
                4. A note of team concerns sent up to the crisis team's people lead.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Team briefings held within an hour of each official update and team concerns sent to the people lead in writing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree with your manager where official updates will come from"
                - "Write your phrase for questions you cannot answer yet"
                - "Book extra one-to-ones with anyone directly affected"
                - "Send your team's concerns to the crisis people lead in writing"
            - name: Responding to a death or serious injury at work
              description: |-
                ## Purpose
                Few situations test a leader more than the death or serious injury of a colleague. Preparing the steps in advance (who informs the family and how, support for witnesses, the authorities, the investigation and what to say to everyone else) helps you act with care and dignity when emotion is overwhelming.

                ## Milestones
                1. A sequence agreed with the people lead for informing next of kin, with the authorities where they lead.
                2. Support arrangements for witnesses and close colleagues, including counselling.
                3. Reporting duties to the safety authority listed and owned.
                4. A staff message template that respects the family's wishes.

                ## Notes
                The police or safety authority usually lead on informing next of kin and on scene preservation. Follow their direction and record it.
              priority: high
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written serious incident protocol covering next of kin, witness support, reporting duties and staff messaging, approved by the people lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Meet the people lead to agree the next of kin sequence"
                - "Confirm counselling support for witnesses and close colleagues"
                - "List reporting duties to the safety authority and assign owners"
                - "Draft a staff message template that defers to the family's wishes"
            - name: A crisis in your first months in role
              description: |-
                ## Purpose
                New executives who face a crisis before they know the people or the plan either freeze or take over everything. A short checklist (find the plan, meet the crisis lead, learn the three biggest risks, agree your role with your boss) prepares you in your first fortnight in case the crisis comes early.

                ## Milestones
                1. The crisis plan read and its owner met within two weeks of starting.
                2. Your role in a crisis agreed with your boss in writing.
                3. The three biggest risks in your remit understood and their owners known.
                4. Your contacts added to the call tree.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Within two weeks of starting, the crisis plan read, your crisis role agreed in writing and your contacts on the call tree."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask for the current crisis plan in your first week"
                - "Meet the crisis lead to walk through the plan"
                - "Agree your crisis role with your boss in writing"
                - "Check your contacts have been added to the call tree"
            - name: When leadership caused the crisis
              description: |-
                ## Purpose
                Some crises start with a leader's own decision, behaviour or failure to act, and the instinct to defend makes them worse. Preparing how you would take accountability, apologise without legal recklessness and step aside from leading the response if needed keeps the organisation's credibility intact.

                ## Milestones
                1. A principle agreed with the board that conflicted leaders step back from leading the response.
                2. An alternative crisis lead named for situations involving the chief executive.
                3. Guidance from legal on how to apologise meaningfully without admitting liability inappropriately.
                4. An independent review route identified for leadership failures.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board-agreed rule for conflicted leaders, an alternative lead and legal guidance on apology, recorded in the plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Raise the conflicted leader principle with the board chair"
                - "Name an alternative crisis lead for chief executive involvement"
                - "Ask legal for guidance on how to apologise meaningfully"
                - "Identify an independent reviewer for leadership failures"
            - name: Executive decisions in a ransomware attack
              description: |-
                ## Purpose
                A ransomware attack forces leaders into decisions few have rehearsed: whether to shut systems, how to keep operating on paper, who to notify, and how to approach a ransom demand with counsel and the authorities. Rehearsing those executive calls with the technology and legal leads means the board is not learning the vocabulary at 3am.

                ## Milestones
                1. A list of the executive decisions in a ransomware attack, separate from the technical playbook.
                2. Manual workarounds for the three most critical processes.
                3. Notification duties to regulators, customers and insurers listed with timings, checked by counsel.
                4. A ransomware tabletop run with the executive team and the technology lead.

                ## Notes
                Ransom payment is a legal, ethical and insurance question with sanctions implications in some places. Take advice from counsel and the authorities; never decide alone.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An executive ransomware decision guide with manual workarounds and notification timings, rehearsed once a year."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "List executive decisions in a ransomware attack with the technology lead"
                - "Document manual workarounds for three critical processes"
                - "Ask counsel to confirm notification duties and timings"
                - "Rehearse the ransomware decisions with the executive team @recurring(yearly)"
            - name: Liaising with regulators and authorities
              description: |-
                ## Purpose
                Regulators, police, fire services and public health bodies may arrive in a crisis with their own powers and timetable. Knowing who your contacts are, what you must report and when, and naming a single liaison who keeps a record, builds trust and avoids the damage of contradictory answers.

                ## Milestones
                1. The authorities relevant to your ten likeliest shocks listed with contacts.
                2. Reporting duties and deadlines checked with legal.
                3. A single liaison and deputy named, with a log of every contact.
                4. An introductory meeting held with at least one key authority in calm times.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "An authorities contact list with reporting deadlines, a named liaison and one introductory meeting held."
                cadence: rolling
              tasks:
                - "List the authorities that each likely shock would involve"
                - "Check reporting duties and deadlines with legal"
                - "Name a single liaison and deputy for authority contact"
                - "Refresh authority contacts and reporting duties with legal @recurring(yearly)"
            - name: Sustaining leadership through a months-long crisis
              description: |-
                ## Purpose
                Pandemics, wars, long outages and drawn-out investigations turn a sprint into a marathon, and the crisis structure built for days breaks down by month two. Shifting deliberately to a sustained mode, with rotating leads, a normal-business track and a lighter rhythm, keeps both the response and the core business alive.

                ## Milestones
                1. A trigger agreed for moving from acute to sustained mode, such as three weeks without resolution.
                2. A separate business-as-usual leadership track with its own owner.
                3. Crisis roles rotated so no one leads for more than a set period without a break.
                4. A monthly review of whether the crisis structure still fits.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written sustained-mode plan with a trigger, a business-as-usual owner and a rotation rule for crisis roles."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree the trigger for moving into sustained crisis mode"
                - "Name a business-as-usual leader separate from the crisis lead"
                - "Set the rotation rule for crisis roles"
                - "Write the monthly fit check for the crisis structure"
            - name: Crisis readiness scorecard for the board
              description: |-
                ## Purpose
                Boards increasingly ask management to show, not assert, that the organisation is ready for a crisis. A short quarterly scorecard (plan currency, exercises held, actions closed, contact test times, coverage of the ten shocks) gives directors evidence and keeps readiness from quietly decaying.

                ## Milestones
                1. Five to seven readiness measures agreed with the chair or audit committee.
                2. A baseline score for each measure.
                3. The scorecard reported to the board each quarter.
                4. Two measures improved within a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A crisis readiness scorecard with five to seven measures reported quarterly and two measures improved within a year."
                cadence: rolling
              tasks:
                - "Agree five readiness measures with the audit committee chair"
                - "Score each measure today to set a baseline"
                - "Send the crisis readiness scorecard to the board @recurring(quarterly)"
                - "Pick two measures to improve this year"
            - name: Growing a bench of crisis leaders
              description: |-
                ## Purpose
                If only one person can lead a crisis, the organisation has a single point of failure at the top. Developing three or four leaders who have each led an exercise, shadowed a real response and been debriefed means the next crisis can be led well whoever is on holiday.

                ## Milestones
                1. Three or four candidate crisis leaders chosen from across functions.
                2. Each has led at least one tabletop exercise.
                3. Each has shadowed a real incident or a full simulation.
                4. Each has had a feedback conversation with the current crisis lead.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Within a year, three leaders have each led an exercise, shadowed a response and received feedback."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose three candidate crisis leaders from different functions"
                - "Assign each a tabletop exercise to lead this year"
                - "Arrange for each to shadow a simulation or live incident"
                - "Hold a feedback conversation with each after they lead"
---

# Leading Through a Crisis

This area is for the executive, founder or senior manager who will be the one people look to when something sudden goes badly wrong: a fire, a data breach, a product recall, a death on site, a viral accusation or the loss of a major customer overnight. It starts with the foundations you want in place before the phone rings (severity levels, a named team with deputies, decision authority, contact lists and holding statements), then the operating machinery of the live response, the skills of deciding and speaking under uncertainty, the improvements and decisions that close known gaps, the dated exercises, briefings and reviews, situations for a founder, a global enterprise or a manager in the middle, and finally specialist work on cyber incidents, regulators and long-running crises.

What repeats is preparation that keeps the plan honest: a monthly check of the call tree, quarterly tabletop exercises and holding statement reviews, a weekly early warning scan, a monthly case study, and a yearly refresh of the plan, the insurance and the board protocol. The Risk register, Meeting notes, Vendor and Operational checklist templates pair with the projects that keep records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
