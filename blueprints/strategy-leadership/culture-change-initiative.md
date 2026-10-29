---
id: strategy-leadership.culture-change-initiative
name: Culture Change Initiative
description: "A business case for changing how people behave, a diagnosis built on evidence, a few named from-to shifts, leaders who model them visibly and measures that show whether the culture is really moving."
category: business
version: 1.0.0
tags: [strategy-leadership, culture-change-initiative, manager, enterprise, culture-change, role-modelling, behaviour-change, culture-measures]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - vendor
    - one-on-one
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Culture Change Initiative
          description: "Leading a deliberate shift in how an organisation behaves, with a clear case for change, role modelling and measures of progress."
          projects:
            - name: Business case for the culture shift
              description: |-
                ## Purpose
                Culture programmes that start from a slogan lose funding at the first bad quarter, while those tied to a named business problem survive it. Writing down which results the current behaviour is costing, such as slow decisions, repeat safety incidents or lost customers, and what would improve if behaviour changed, gives the whole effort a reason that finance and the front line can both repeat.

                ## Milestones
                1. Three business problems linked to current behaviour, each with a number attached.
                2. A plain statement of what will be different for customers, staff and results in two years.
                3. The cost of doing nothing estimated and agreed with the finance lead.
                4. A two-page case for change accepted by the chief executive and the executive team.

                ## Notes
                If the case for change could be pasted into any company's annual report, it is too general. Name your own incidents, numbers and customers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page case for change, naming three behaviour-linked business problems with figures, has been accepted by the executive team."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the three business results most hurt by how people behave today"
                - "Pull one hard number for each problem from finance, operations or customer data"
                - "Draft the two-page case for change with the cost of doing nothing"
                - "Walk the executive team through the draft and record their changes"
            - name: Sponsor mandate and personal commitments
              description: |-
                ## Purpose
                Without a chief executive who visibly owns it, a culture shift becomes a human resources campaign that people wait out. Agreeing in writing what the sponsor will personally do, stop doing and protect, and how often you will meet, turns vague support into commitments others can see and hold them to.

                ## Milestones
                1. The chief executive named as sponsor, with the programme lead reporting directly to them.
                2. Three visible commitments from the sponsor, each a behaviour others will notice.
                3. A monthly sponsor meeting in both diaries for the first year.
                4. The sponsor's commitments shared with the executive team.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The sponsor has agreed three written personal commitments and a monthly meeting that has been held at least three times."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a ninety-minute session with the chief executive on their role as sponsor"
                - "Agree three things the sponsor will do or stop doing in public"
                - "Write the commitments on one page and confirm them by email"
                - "Hold the sponsor meeting and review progress against commitments @recurring(monthly:10)"
            - name: Current culture diagnosis from behaviour evidence
              description: |-
                ## Purpose
                Leaders usually describe the culture they intend, and staff describe the one they live in. A diagnosis built from observed meetings, decision records, incident reviews, survey comments and interviews across levels shows what behaviour is really rewarded, which is the only starting point a change can work from.

                ## Milestones
                1. At least twenty interviews or small groups held across levels, sites and functions.
                2. Ten recurring meetings observed and notes taken on who speaks, decides and is interrupted.
                3. Survey comments, exit themes and incident reviews coded for repeated behaviours.
                4. A diagnosis of six to eight observed patterns, each backed by at least three pieces of evidence.
                5. The diagnosis presented to the executive team without softening.

                ## Notes
                Ask about specific moments, not opinions: 'Tell me about the last time someone challenged a senior decision. What happened next?' gets closer to the truth than 'How would you describe our culture?'
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written diagnosis of six to eight behaviour patterns, each supported by at least three sources of evidence, has been presented to the executive team."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Draw up an interview sample covering every level, site and main function"
                - "Write six story-based interview questions about recent real moments"
                - "Ask the agent to code survey comments and exit themes into behaviour patterns"
                - "Observe ten recurring meetings and note who speaks, decides and is overruled"
                - "Write the diagnosis with three pieces of evidence for each pattern"
            - name: Three to five from-to behaviour shifts
              description: |-
                ## Purpose
                Programmes that try to change everything change nothing. Choosing a small number of shifts written as observable behaviour, such as 'from escalating every decision to deciding at the level closest to the customer', tells everyone what to do differently on Monday morning and gives the measures something concrete to count.

                ## Milestones
                1. A long list of candidate shifts drawn from the diagnosis.
                2. Three to five shifts chosen, each written as from this behaviour to that behaviour.
                3. Two or three examples of what each shift looks like in a real meeting, decision or customer contact.
                4. The shifts tested with a group of front-line staff and managers for clarity.
                5. Final wording signed off by the executive team.

                ## Notes
                Each shift should be visible to someone watching. If you cannot picture what it looks like on a Tuesday afternoon, rewrite it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three to five from-to shifts, each with real examples, have been tested with staff and signed off by the executive team."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Turn each diagnosis pattern into a candidate from-to statement"
                - "Score the candidates on business impact and how visible the change would be"
                - "Write two real examples for each of the top five shifts"
                - "Test the wording with a mixed group of staff and managers"
                - "Take the final shifts to the executive team for sign-off"
            - name: Culture baseline before launch
              description: |-
                ## Purpose
                Without a baseline taken before anything is announced, every later measure is an argument about whether things were already improving. Recording where each from-to shift stands today, in a few behavioural indicators and a short pulse question set, makes it possible to show the board real movement in a year.

                ## Milestones
                1. One or two behavioural indicators chosen for each shift, such as decisions made below director level or near-miss reports filed.
                2. A short pulse question for each shift, worded so it can be repeated unchanged.
                3. Baseline values recorded with source, date and owner.
                4. The baseline stored where the programme dashboard will read from.

                ## Notes
                Start from the **Metrics log** template. Measure behaviour where you can, and sentiment only where you must.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A baseline with at least one behavioural indicator and one pulse question per shift, each with a dated value, is recorded before launch."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick one behavioural indicator for each from-to shift"
                - "Write one pulse question per shift and freeze the wording"
                - "Collect baseline values from systems and a short survey"
                - "Record each baseline value with its source and date"
            - name: Systems that hold today's behaviour in place
              description: |-
                ## Purpose
                People behave the way the organisation's systems reward, whatever the posters say. Tracing each unwanted behaviour back to the budgets, sign-off limits, targets, bonus rules, meeting formats and promotion decisions that produce it shows where the programme has to change machinery, not minds.

                ## Milestones
                1. Each from-to shift paired with the systems that currently reward the old behaviour.
                2. Sign-off limits, bonus measures and approval routes checked for each shift.
                3. A ranked list of the ten systems doing most to hold the old culture in place.
                4. An owner named for changing each of the top five.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of ten systems sustaining the old behaviours exists, with a named owner for changing each of the top five."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "For each shift, ask five managers what makes the old behaviour the safe choice"
                - "Review sign-off limits and approval routes against the shift on decision speed"
                - "Check bonus measures for rewards that push the old behaviour"
                - "Rank the systems by how strongly they hold the old culture in place"
            - name: Scope and boundaries of the culture programme
              description: |-
                ## Purpose
                Culture work spreads to absorb every people issue in the building unless its edges are drawn early. Deciding which units go first, which existing initiatives it connects to and what it will not take on, such as pay restructuring or a reorganisation, keeps the programme focused and stops it being blamed for everything.

                ## Milestones
                1. Units, sites and levels in scope for year one listed.
                2. Related initiatives named, with how each connects to the culture shift.
                3. Three or four things explicitly out of scope written down.
                4. The scope agreed with the sponsor and human resources lead.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page scope listing in-scope units, linked initiatives and out-of-scope items has been agreed with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every people initiative currently running across the organisation"
                - "Mark which ones the culture shift depends on or competes with"
                - "Write the in-scope and out-of-scope lists on one page"
                - "Agree the page with the sponsor and the human resources lead"
            - name: Culture programme core team and governance
              description: |-
                ## Purpose
                Every culture shift needs a small team that can see across the organisation and a forum that makes decisions, not one that receives updates. Naming a programme lead, three to five part-time members from operations, finance and the front line, and a monthly steering slot with the sponsor gives the work a home and a way to unblock it.

                ## Milestones
                1. A programme lead appointed with at least half their time on the work.
                2. Three to five core members named, with their time agreed with their managers.
                3. A monthly steering meeting with the sponsor set, with decision rights written down.
                4. A one-page charter covering purpose, members, decisions and reporting.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A charter naming the programme lead, core team and steering forum with written decision rights has been agreed with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a programme lead who is respected outside human resources"
                - "Ask three to five managers to release one respected person each part time"
                - "Draft the charter with the decisions the steering forum can take"
                - "Hold the first steering meeting and record its decisions"
            - name: Culture change risk register
              description: |-
                ## Purpose
                Culture programmes fail in predictable ways: a senior leader contradicts the shift in public, a cost-cutting round lands in the middle of a launch, or the survey becomes the goal. Keeping these risks in a register with owners and triggers lets the core team act on them before staff conclude it was all talk.

                ## Milestones
                1. At least ten risks recorded, each with likelihood, impact and an owner.
                2. An early warning sign written for the top five risks.
                3. A response agreed for each of the top five.
                4. The register reviewed at every steering meeting.

                ## Notes
                Start from the **Risk register** template. The most damaging risk is usually leadership inconsistency, so put it first and name who watches for it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register of at least ten culture programme risks with owners and warning signs is reviewed monthly by the steering forum."
                cadence: rolling
              tasks:
                - "List the ten most likely ways this culture shift could stall"
                - "Write an early warning sign for each of the top five risks"
                - "Agree an owner and a response for each top risk"
                - "Review the register before the steering meeting @recurring(monthly:28)"
            - name: Monthly culture shift dashboard
              description: |-
                ## Purpose
                Leaders lose interest in culture when they only hear anecdotes, and they lose trust when they only see survey scores. A one-page monthly dashboard pairing behavioural indicators, pulse results and two or three real stories per shift keeps the executive team looking at evidence and spotting stalls early.

                ## Milestones
                1. A one-page layout agreed, with each from-to shift as a row.
                2. Behavioural indicators updated automatically or by a named owner each month.
                3. Two or three short stories attached to each row.
                4. The dashboard reviewed by the executive team for six months running.

                ## Notes
                Start from the **Metrics log** template. Show the trend against the baseline, not this month's number alone.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The executive team has reviewed a one-page culture dashboard against the baseline every month for six consecutive months."
                cadence: rolling
              tasks:
                - "Sketch the one-page layout with one row per from-to shift"
                - "Agree who supplies each indicator and by which working day"
                - "Update the dashboard and attach new stories @recurring(monthly:12)"
                - "Note the one shift that moved least and ask its owner why"
            - name: Executive role-modelling commitments
              description: |-
                ## Purpose
                Staff take their lead from what senior people do in the first unscripted moment, not from what they say at the launch. Each executive choosing two visible behaviours linked to the shifts, and checking in with a peer every month on how they did, makes leadership consistency something the team practises rather than assumes.

                ## Milestones
                1. Every executive has written two personal behaviours linked to the from-to shifts.
                2. Executives paired for a monthly peer check-in.
                3. Each executive has asked their direct reports for feedback on their two behaviours.
                4. A short group review of progress held at the quarterly executive session.

                ## Notes
                Pick behaviours others can see, such as asking the most junior person in the room for their view first, not private intentions.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every executive has two written role-modelling behaviours and has held at least five monthly peer check-ins on them."
                cadence: rolling
              tasks:
                - "Ask each executive to write two visible behaviours tied to the shifts"
                - "Pair executives with a peer from a different function"
                - "Hold the peer check-in on role-modelling behaviours @recurring(monthly:3)"
                - "Ask each executive to gather direct-report feedback once a quarter"
            - name: Weekly culture moment in the executive meeting
              description: |-
                ## Purpose
                Most leadership teams talk about culture twice a year and act on it never. Spending ten minutes at the start of each weekly executive meeting on one real moment where a from-to shift was tested, what was done and what it signalled, builds the habit of noticing and correcting in the room where signals start.

                ## Milestones
                1. A standing ten-minute item at the top of the weekly agenda.
                2. A rota of executives bringing one real moment each week.
                3. A short record kept of each moment and any follow-up action.
                4. The item held for twelve consecutive weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ten-minute culture moment has opened the weekly executive meeting for twelve consecutive weeks with each one recorded."
                cadence: rolling
              tasks:
                - "Add a ten-minute culture moment to the top of the executive agenda"
                - "Draw up a rota so each executive brings one real moment in turn"
                - "Bring and discuss one tested moment and its signal @recurring(weekly:mon)"
                - "Keep a running record of moments and follow-up actions"
            - name: Quarterly behaviour pulse survey
              description: |-
                ## Purpose
                The annual engagement survey moves too slowly and asks too broadly to show whether specific behaviours are changing. A short quarterly pulse with the same frozen question for each shift, sent to a rotating sample, gives a trend line within months and shows which units are moving and which are not.

                ## Milestones
                1. Five to eight questions fixed, one or two per from-to shift.
                2. A sampling plan that covers every unit at least twice a year.
                3. Results broken down by level, unit and site where group sizes protect anonymity.
                4. Each result shared back with teams within four weeks of closing.

                ## Notes
                Never report a group smaller than your anonymity threshold, often around ten people. Once trust breaks, honest answers stop.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly pulses have run with unchanged questions, and results reached teams within four weeks each time."
                cadence: cyclic
              tasks:
                - "Freeze the pulse questions and agree the anonymity threshold"
                - "Set the rotating sample so each unit is asked twice a year"
                - "Run the pulse and share results back to teams @recurring(quarterly)"
                - "Compare each unit's trend against the baseline and flag stalls"
            - name: Symbolic acts calendar
              description: |-
                ## Purpose
                One visible decision, such as cancelling a prestige project that contradicts the new priorities or promoting someone who challenged a senior call, does more for a culture shift than a year of messaging. Planning one deliberate symbolic act a month, and making sure people hear the reason, gives the change moments people retell.

                ## Milestones
                1. A list of twelve candidate symbolic acts, at least one per shift.
                2. An owner and a month assigned to each act.
                3. The reason behind each act explained by the leader who took it.
                4. Staff retelling at least three of the acts, captured in listening sessions.

                ## Notes
                Symbolic acts must be real decisions with a cost. Staged gestures are spotted quickly and cost more trust than they buy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten real symbolic decisions have been taken over a year, each explained by the leader who took it."
                cadence: rolling
              tasks:
                - "Brainstorm twelve decisions that would show the shift has teeth"
                - "Assign each act an owner and a month"
                - "Confirm this month's symbolic act and how its reason will be shared @recurring(monthly:15)"
                - "Ask in listening sessions which recent decisions people noticed"
            - name: Culture story bank
              description: |-
                ## Purpose
                People learn what is valued from stories about what happened to someone like them. Collecting short, specific accounts of the new behaviour in action, with names and outcomes where people agree, gives leaders material for every speech, team meeting and induction and shows the shift is happening outside head office.

                ## Milestones
                1. A simple form or channel for submitting stories, open to everyone.
                2. At least five stories a month collected from different units.
                3. Each story checked with the people in it before it is shared.
                4. A library of fifty stories tagged by shift and unit after a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A tagged library of at least fifty checked stories of the new behaviours, from at least half the units, exists after twelve months."
                cadence: rolling
              tasks:
                - "Set up a short story submission form with three questions"
                - "Ask every manager to send one story from their team this month"
                - "Check new stories with the people named and tag them by shift @recurring(monthly:20)"
                - "Pick three stories a quarter for the executive team to retell"
            - name: Front-line listening sessions with senior leaders
              description: |-
                ## Purpose
                Senior leaders often hear about the culture change only through the programme team, filtered and late. Each executive spending an hour a month with a small front-line group, asking what has changed and what has not, gives unfiltered evidence and shows staff that the shift is being checked from the top.

                ## Milestones
                1. A schedule giving each executive one session a month with a different team.
                2. Three standard questions used in every session.
                3. Themes from every session logged in one shared place.
                4. Visible action taken on at least one theme each quarter and reported back.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each executive has held at least ten front-line listening sessions in a year, with themes logged and quarterly actions reported back."
                cadence: rolling
              tasks:
                - "Write three standard questions about what has changed and what has not"
                - "Draw up a schedule pairing each executive with a different team monthly"
                - "Hold a listening session and log the themes the same day @recurring(monthly:8)"
                - "Report back to teams on one action taken each quarter"
            - name: Backsliding watch on rewarded old behaviour
              description: |-
                ## Purpose
                Years of culture work can be undone by one high-profile moment where the old behaviour was rewarded, such as a bonus for hitting a number by cutting corners. Tracking these incidents each month, and deciding openly how to respond, protects the programme's credibility and shows where systems still pull backwards.

                ## Milestones
                1. A confidential route for staff and managers to flag rewarded old behaviour.
                2. A monthly review of flagged incidents by the core team.
                3. A response decided and recorded for each serious incident.
                4. Patterns across incidents fed into the systems change list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every flagged incident of rewarded old behaviour over twelve months has a recorded response, with patterns fed into systems changes."
                cadence: rolling
              tasks:
                - "Set up a confidential route for flagging rewarded old behaviour"
                - "Review flagged incidents and decide responses with the core team @recurring(monthly:26)"
                - "Record the response to each serious incident and who agreed it"
                - "Add repeat patterns to the list of systems needing change"
            - name: Culture carrier network of informal influencers
              description: |-
                ## Purpose
                In every organisation a few people outside the hierarchy are watched by everyone else, and they already show some of the target behaviours. Finding them through network questions and nominations, and meeting them monthly to hear what is blocking the shift, spreads the change through trust rather than through cascades.

                ## Milestones
                1. Informal influencers identified by asking staff who they go to for advice.
                2. A network of thirty to sixty carriers across units and levels formed.
                3. A monthly call where carriers report blockers and share what works.
                4. Carrier feedback shaping at least one programme decision a quarter.

                ## Notes
                Choose carriers by influence, not enthusiasm or seniority. A sceptical person others trust is worth five volunteers.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A network of at least thirty informal influencers meets monthly, and its feedback has changed at least four programme decisions in a year."
                cadence: rolling
              tasks:
                - "Ask staff in a short survey who they go to for advice and honest views"
                - "Invite the most named people across units to join the network"
                - "Run the monthly carrier call on blockers and what works @recurring(monthly:17)"
                - "Report back to carriers on what changed because of their input"
            - name: Quarterly culture shift review with the board
              description: |-
                ## Purpose
                Boards increasingly ask for evidence on culture after failures elsewhere, and a culture shift that only the executive team watches can be dropped when leadership changes. A short quarterly review with the board, using the same dashboard, keeps the shift on the governance agenda and gives directors a basis to challenge.

                ## Milestones
                1. A board paper format agreed: trend per shift, risks and two stories.
                2. The culture shift on the board agenda each quarter for a year.
                3. Directors' questions and requests recorded and answered.
                4. An annual board view on progress minuted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four quarterly board papers on the culture shift have been presented, with directors' questions recorded and answered."
                cadence: cyclic
              tasks:
                - "Agree the board paper format with the chair and company secretary"
                - "Prepare and present the culture shift board paper @recurring(quarterly)"
                - "Record directors' questions and owners for each answer"
                - "Brief the sponsor on likely challenges before each board meeting"
            - name: Culture layers of artefacts, beliefs and assumptions
              description: |-
                ## Purpose
                Most culture efforts stall at the visible layer of posters, office layouts and slogans, while the assumptions underneath, such as 'bad news gets punished', stay intact. Learning a layered model of culture and applying it to your own diagnosis shows which assumptions have to be disproved by experience before behaviour will move.

                ## Milestones
                1. One standard text on organisational culture layers read and summarised.
                2. Each diagnosis pattern traced to the underlying assumption that sustains it.
                3. For each assumption, one experience that would disprove it identified.
                4. A one-page summary shared with the core team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each diagnosis pattern has been traced to an underlying assumption, with a disproving experience identified for each, on one page."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose one standard book or course on organisational culture layers"
                - "Summarise the model in half a page in your own words"
                - "Trace each diagnosis pattern to the assumption beneath it"
                - "Write the experience that would disprove each assumption"
            - name: Observing culture in meetings and decisions
              description: |-
                ## Purpose
                Surveys report what people are willing to say, but meetings show what they are willing to do. Practising structured observation, such as counting who speaks, how dissent is handled and where decisions really get made, gives the programme team and managers a reliable way to see whether a shift is happening in the room.

                ## Milestones
                1. A one-page observation guide with five things to watch for each shift.
                2. Five meetings observed by two people with notes compared.
                3. Differences between observers discussed and the guide tightened.
                4. Three managers trained to use the guide in their own meetings.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An observation guide has been tested in five meetings by paired observers and taught to at least three managers."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write five observable signs to watch for each from-to shift"
                - "Observe five meetings in pairs and compare notes afterwards"
                - "Tighten the guide where the two observers disagreed"
                - "Teach the guide to three managers and ask them to try it"
            - name: Positive deviance to find where the shift already happens
              description: |-
                ## Purpose
                Somewhere in most organisations a team already behaves the way the programme wants, under the same constraints as everyone else. Learning the positive deviance method and using it to find and study those teams produces practices that others trust because they come from colleagues, not consultants.

                ## Milestones
                1. The method learned from a published case or short course.
                2. Data used to find three teams that outperform on a shift's indicator.
                3. Each team interviewed and observed to find what they do differently.
                4. Their practices written up and shared by the teams themselves.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three positive deviant teams have been found from data, studied, and have shared their practices in their own words."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read two published cases of positive deviance in organisations"
                - "Use indicator data to find three teams doing better than peers"
                - "Interview each team on what they do that others do not"
                - "Help each team present its practices to peers in their own words"
            - name: Closing your own say-do gap as a leader
              description: |-
                ## Purpose
                Teams forgive leaders who are still learning the new behaviour, but not leaders who preach it and do the opposite. Practising a weekly honest check of where your own actions contradicted the shifts, and fixing one gap at a time in public, turns personal credibility into the programme's most visible asset.

                ## Milestones
                1. Your two role-modelling behaviours written on a card you see daily.
                2. A weekly note of one moment you fell short and what you did next.
                3. Two trusted colleagues asked to tell you when you contradict the shifts.
                4. At least one gap acknowledged openly to your team, with what you are changing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Twelve weekly say-do notes have been written, and at least one gap has been acknowledged openly to the team."
                cadence: rolling
              tasks:
                - "Write your two role-modelling behaviours where you will see them daily"
                - "Ask two colleagues to flag it when you contradict the shifts"
                - "Note one moment you fell short and your response @recurring(weekly:fri)"
                - "Tell your team about one gap and what you are changing"
            - name: Coaching managers to reinforce the shifts
              description: |-
                ## Purpose
                Middle managers decide most of what staff experience each day, and they are often the least briefed on a culture shift. Building a simple coaching routine where senior leaders spend part of each one-to-one on a recent moment where a manager reinforced or undercut a shift gives managers practice and support rather than another briefing pack.

                ## Milestones
                1. A short coaching prompt per shift for use in one-to-ones.
                2. Every senior leader using the prompt with their managers.
                3. Managers able to name one moment a month where they reinforced a shift.
                4. Common difficulties collected and turned into short guidance.

                ## Notes
                Start from the **1:1** template and add a standing culture prompt. Ask about a real moment, not about opinions of the programme.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every senior leader has used a culture coaching prompt in one-to-ones with managers for three months, with difficulties collected."
                cadence: rolling
              tasks:
                - "Write one coaching prompt for each from-to shift"
                - "Brief senior leaders on using the prompt in one-to-ones"
                - "Use the culture prompt in each manager one-to-one this week @recurring(weekly:thu)"
                - "Collect the difficulties managers raise and draft short guidance"
            - name: Telling the culture change story
              description: |-
                ## Purpose
                Staff who have lived through earlier initiatives need to hear honestly what went wrong before, why this time is different and what will be asked of them. Practising a short narrative of past, present and future, told in each leader's own words with a real example, makes the case for change sound like a conversation and not a campaign.

                ## Milestones
                1. A shared story structure: what we were proud of, what went wrong, what changes now.
                2. Each executive's own five-minute version drafted with a personal example.
                3. Each version practised in front of a small sceptical audience.
                4. Feedback used to cut jargon and add specifics.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every executive has a practised five-minute version of the culture story with a personal example, tested on a sceptical audience."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree the three-part story structure with the executive team"
                - "Ask the agent to draft a first version from the case for change"
                - "Ask each executive to rewrite it with their own example"
                - "Run a practice session with a small group of sceptical staff"
            - name: Behavioural indicators versus sentiment measures
              description: |-
                ## Purpose
                A rising survey score can mean the culture is changing or that people have learned what to answer. Learning how to design measures that count behaviour, such as decisions taken at lower levels, near-miss reports or cross-team requests closed, alongside sentiment, gives the programme evidence that holds up when the board pushes.

                ## Milestones
                1. Lagging, leading and sentiment measures distinguished for each shift.
                2. At least one behavioural measure per shift found in existing systems.
                3. Known ways each measure can be gamed written down.
                4. A revised measure set agreed for the dashboard.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each shift has at least one behavioural measure from an existing system, with gaming risks noted, in an agreed measure set."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Sort current measures into behavioural, outcome and sentiment"
                - "Search existing systems for one behavioural trace of each shift"
                - "Write down how each measure could be gamed"
                - "Agree the revised measure set with the core team"
            - name: Redesigning one recurring meeting around a shift
              description: |-
                ## Purpose
                Recurring meetings are where culture is rehearsed every week, so changing one changes what dozens of people practise. Picking a high-visibility meeting, such as the monthly operations review, and redesigning its format so the new behaviour is required, for example decisions taken in the room with the most junior voice first, shows a shift in action.

                ## Milestones
                1. One high-visibility meeting chosen with its chair's agreement.
                2. The current format observed and its signals described.
                3. A new format designed so the target behaviour is built in.
                4. The new format run for six sessions and feedback gathered.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A redesigned format for one high-visibility meeting has run for six sessions, with attendee feedback recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose one recurring meeting many people attend or hear about"
                - "Observe two sessions and note what behaviour the format rewards"
                - "Redesign the agenda and roles so the target behaviour is required"
                - "Gather attendee feedback after the sixth redesigned session"
            - name: Promotion decisions tested against the shifts
              description: |-
                ## Purpose
                Nothing tells people what the culture really is faster than who gets promoted. Adding a short check to every senior promotion round, asking whether each candidate shows the from-to shifts with evidence, and refusing to promote strong performers who model the old behaviour, sends the clearest signal the programme can give.

                ## Milestones
                1. Evidence questions for each shift added to the senior promotion pack.
                2. Promotion panels briefed on how to weigh the evidence.
                3. Each promotion round's decisions checked against the shifts afterwards.
                4. At least one promotion decision explained to staff in terms of the shifts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every senior promotion round for a year has used shift evidence questions, with a post-round check recorded each time."
                cadence: cyclic
              tasks:
                - "Add one evidence question per shift to the senior promotion pack"
                - "Brief promotion panel chairs on weighing the evidence"
                - "Check each round's decisions against the shifts afterwards @recurring(quarterly)"
                - "Explain one promotion decision to staff in terms of the shifts"
            - name: Retiring rituals that reinforce the old culture
              description: |-
                ## Purpose
                Long-running rituals such as an awards night that celebrates heroic firefighting, or a sign-off chain that runs to the top for every purchase, quietly teach the old culture every time they happen. Identifying them, deciding which to stop or redesign, and marking their end explicitly removes reinforcements people stopped noticing.

                ## Milestones
                1. A list of rituals, ceremonies and routines with the message each sends.
                2. Rituals that reinforce the old behaviour marked for stopping or redesign.
                3. A replacement or redesign agreed for those worth keeping.
                4. The end of each retired ritual explained to staff.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "At least three rituals reinforcing the old behaviour have been retired or redesigned, with the change explained to staff."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the organisation's rituals and the message each one sends"
                - "Mark the rituals that reward the old behaviour"
                - "Decide with owners whether to stop or redesign each one"
                - "Write a short note to staff explaining each change"
            - name: Senior leaders who will not change
              description: |-
                ## Purpose
                Every culture shift meets at least one senior leader who delivers results but models the old behaviour, and how the organisation handles them decides whether anyone believes the rest. Agreeing in advance a fair process of feedback, coaching, a time limit and consequences, with human resources and legal advice, avoids a crisis decision taken under pressure.

                ## Milestones
                1. A written process covering feedback, support, a time limit and consequences.
                2. The process reviewed by human resources and employment legal advice.
                3. The executive team agreed to apply it to anyone, including high performers.
                4. The process used for at least one case and outcomes recorded.

                ## Notes
                Take employment law advice before acting on any individual case. The point here is a fair, consistent process decided before it is needed.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written process for senior leaders who do not adopt the shifts has been reviewed by human resources and legal advice and agreed by the executive team."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft the stages of feedback, support, time limit and consequence"
                - "Ask human resources and employment counsel to review the draft"
                - "Agree with the executive team that the process applies to everyone"
                - "Record the outcome each time the process is used"
            - name: Choosing the pilot unit for the shift
              description: |-
                ## Purpose
                Starting everywhere at once spreads effort thin and hides what works. Choosing one or two units with a willing leader, a visible business problem and enough people to measure, then running the shifts there for six months, produces proof and stories that make the wider rollout easier to argue for.

                ## Milestones
                1. Three candidate units scored on leader readiness, business need and visibility.
                2. One or two pilot units chosen and their leaders committed.
                3. A baseline for the pilot units recorded.
                4. A six-month pilot plan with a review date agreed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One or two pilot units have been chosen against written criteria, with committed leaders, a baseline and a review date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the criteria for a good pilot unit"
                - "Score three candidate units against the criteria"
                - "Meet the leaders of the top units to test their commitment"
                - "Agree the pilot plan and review date with the sponsor"
            - name: Budget and time for the culture programme
              description: |-
                ## Purpose
                Too often, culture work is expected to run on goodwill and spare evenings, which signals how little it matters. Costing the programme honestly, including core team time, leader time, measurement, external help and the price of systems changes, and getting it approved, makes the commitment real and the trade-offs visible.

                ## Milestones
                1. Core team, leader and staff time estimated in days per quarter.
                2. External costs for surveys, facilitation or advisers listed.
                3. Systems change costs, such as bonus redesign, estimated with finance.
                4. A two-year budget approved by the sponsor and finance lead.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A two-year culture programme budget, including leader time and systems change costs, has been approved by the sponsor and finance lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate days per quarter for the core team and executives"
                - "List external costs for surveys, facilitation and advice"
                - "Work out systems change costs with the finance lead"
                - "Take the two-year budget to the sponsor for approval"
            - name: Making the new behaviour the easy one
              description: |-
                ## Purpose
                Most people fall back on old behaviour when the new one takes more effort, more forms or more risk. Finding the friction in each shift, such as a three-step approval that stops front-line staff deciding, and removing it, often moves behaviour faster than any amount of encouragement.

                ## Milestones
                1. The main points of friction for each shift collected from staff.
                2. The five biggest friction points ranked by effort to remove.
                3. At least three friction points removed with process owners.
                4. Behaviour indicators checked before and after each change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least three friction points blocking the target behaviours have been removed, with indicators compared before and after."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask staff what makes each new behaviour harder than the old one"
                - "Rank the five biggest friction points with process owners"
                - "Remove or simplify the top three with the owners concerned"
                - "Compare indicators before and after each change"
            - name: Selecting an external culture adviser
              description: |-
                ## Purpose
                An outside adviser can bring diagnosis tools and an independent voice to the executive team, but the wrong one sells a branded programme that replaces your own thinking. Comparing two or three advisers against what you actually need, such as diagnosis, executive challenge or measurement, keeps ownership inside the organisation.

                ## Milestones
                1. The specific gaps an adviser would fill written down.
                2. Three advisers asked for references from comparable organisations.
                3. Each scored on fit, independence, cost and handover of methods.
                4. An adviser chosen with a limited scope and an exit point.

                ## Notes
                Start from the **Vendor** template. Prefer advisers who will teach your team their methods over those who keep them proprietary.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An external adviser has been chosen against written criteria, with a limited scope, an exit point and references checked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down the two or three gaps an adviser would fill"
                - "Ask three advisers for references from comparable organisations"
                - "Score each adviser on fit, independence, cost and method handover"
                - "Agree a limited scope and an exit point with the chosen adviser"
            - name: Executive commitment session on the culture shift
              description: |-
                ## Purpose
                If the executive team leaves the launch period with private doubts, staff will find them within a month. A dedicated working day before any announcement, where executives confront the diagnosis, agree the shifts, name their own role-modelling behaviours and voice disagreements in the room, gives the team a shared commitment it can defend.

                ## Milestones
                1. The diagnosis and from-to shifts sent to executives a week before.
                2. A day held with honest discussion of where each executive contributes to the old culture.
                3. Personal role-modelling behaviours agreed and written down.
                4. Remaining disagreements recorded with an owner and a date.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The executive team has held a full-day session, agreed the shifts and personal behaviours, and recorded any open disagreements with owners."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Book a full day with every executive before any staff announcement"
                - "Send the diagnosis and shifts out a week in advance"
                - "Ask an independent facilitator to run the session"
                - "Write up the agreed shifts, behaviours and open disagreements"
            - name: Launching the culture shift with staff
              description: |-
                ## Purpose
                Staff have usually seen launches before, so what matters is honesty about the problem and proof that something has already changed. A launch that shares the diagnosis openly, names the shifts, announces two or three systems changes already made and invites challenge starts the programme with credibility instead of a poster campaign.

                ## Milestones
                1. The diagnosis summarised for staff in plain language.
                2. Two or three systems changes made before the launch so there is proof.
                3. Every manager briefed a few days ahead with likely questions and answers.
                4. Staff questions collected on the day and answered within two weeks.

                ## Notes
                Launch fewer things with evidence behind them. Merchandise, slogans and big events without systems changes tend to increase cynicism.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The shift has been launched with the diagnosis shared, at least two systems changes already made and every staff question answered within two weeks."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Choose two systems changes to complete before the launch"
                - "Write a plain-language summary of the diagnosis for staff"
                - "Brief every manager three days ahead with likely questions"
                - "Collect launch questions and publish answers within two weeks"
            - name: Six-month culture shift checkpoint
              description: |-
                ## Purpose
                Six months in, early energy fades and the first hard data arrives, which is when programmes either adjust or drift. A structured checkpoint comparing indicators with the baseline, reviewing what the pilot showed and deciding what to stop, keep and add stops the programme running on its original plan out of habit.

                ## Milestones
                1. Every indicator compared with the baseline and the pilot units.
                2. Three things that worked and three that did not written up with evidence.
                3. A decision taken on each activity: stop, keep or change.
                4. The revised plan agreed with the sponsor and shared with staff.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A six-month review against the baseline has recorded a stop, keep or change decision for every programme activity."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pull every indicator and compare it with the baseline"
                - "Gather pilot leaders to name what worked and what did not"
                - "Decide stop, keep or change for each programme activity"
                - "Share the revised plan with staff in a short note"
            - name: Annual culture shift review and reset
              description: |-
                ## Purpose
                Real behaviour change takes years, and each year the business, the leadership and the shifts themselves may need to change. A yearly review that repeats part of the diagnosis, checks each shift's trend and decides whether a shift is done, still needed or wrong keeps the programme honest about what has really moved.

                ## Milestones
                1. A light repeat of the diagnosis interviews and observations.
                2. Each shift marked as embedded, progressing or stalled with evidence.
                3. Shifts retired, kept or rewritten for the coming year.
                4. A one-page annual summary presented to the board.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An annual review has rated each shift as embedded, progressing or stalled with evidence, and a summary has gone to the board."
                cadence: cyclic
              tasks:
                - "Repeat ten diagnosis interviews from the original sample"
                - "Rate each shift as embedded, progressing or stalled"
                - "Run the annual culture shift review and reset @recurring(yearly)"
                - "Present the one-page summary to the board"
            - name: Recognising the early adopters
              description: |-
                ## Purpose
                The first people to try the new behaviour take a risk, and if nothing good happens to them, nobody follows. Holding a recognition moment a few months in, built around specific stories of shifts in action and given by the most senior leaders present, shows that the new behaviour is noticed and valued.

                ## Milestones
                1. Nominations gathered from managers and carriers with specific stories.
                2. Ten to twenty people or teams chosen across levels and sites.
                3. Recognition given in person by executives, with the story told.
                4. The stories added to the culture story bank.

                ## Notes
                Recognise specific behaviour, not general effort, and include people from the front line, not only managers.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least ten people or teams across levels have been recognised in person by executives for specific stories of the new behaviour."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask managers and carriers for nominations with specific stories"
                - "Choose ten to twenty people across levels and sites"
                - "Arrange for executives to recognise each person in person"
                - "Add every recognised story to the story bank"
            - name: Culture shift after a scandal or public failure
              description: |-
                ## Purpose
                After a conduct scandal, a fatal incident or a regulatory finding, the organisation is under scrutiny and staff are often ashamed, defensive or both. A culture shift in this situation must start with accountability for what happened, independent review findings and a pace that regulators and the public can see, while protecting staff who spoke up.

                ## Milestones
                1. Independent review findings accepted and linked to specific behaviours.
                2. Leadership accountability for the failure stated publicly.
                3. Shifts and measures agreed with the board and shared with the regulator where required.
                4. Protection for those who raised concerns confirmed in writing.
                5. A twelve-month public progress update prepared.

                ## Notes
                Take legal and regulatory advice on what can be said publicly and when. Do not let the culture programme get ahead of investigations.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Review findings are linked to specific shifts, protection for those who spoke up is in writing and a twelve-month progress update is prepared."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Map each independent review finding to a specific behaviour"
                - "Agree with legal advisers what leaders can say publicly and when"
                - "Confirm in writing how people who raised concerns are protected"
                - "Draft the shifts and measures for board and regulator review"
            - name: From blame culture to learning from failure
              description: |-
                ## Purpose
                Where mistakes lead to punishment, people hide them, and the same failures repeat. Shifting to a culture that learns means changing how incidents and missed targets are reviewed, separating honest error from reckless behaviour and showing leaders asking what happened rather than who did it.

                ## Milestones
                1. The current incident and failure review process mapped.
                2. A just culture principle agreed that separates honest error from recklessness.
                3. Review templates rewritten to ask what happened and why, not who.
                4. Ten reviews run in the new way and reporting levels compared.

                ## Notes
                A rise in reported mistakes is usually good news early on. Warn the board before it happens.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A just culture principle is agreed, review templates are rewritten and ten reviews have run in the new way with reporting levels compared."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map how incidents and missed targets are reviewed today"
                - "Draft a just culture principle with human resources and operations"
                - "Rewrite the review template around what happened and why"
                - "Brief the board that reported errors are likely to rise at first"
            - name: Speeding up a slow consensus culture
              description: |-
                ## Purpose
                Some organisations are courteous but slow, with every decision needing broad agreement and nobody owning the outcome. Shifting to faster, accountable decisions means naming who decides, setting time limits, making disagree-and-commit acceptable and showing that a reversible decision made quickly is valued over a perfect one made late.

                ## Milestones
                1. Ten recent decisions timed from first raising to final call.
                2. A rule agreed for naming one decider per decision.
                3. Reversible and irreversible decisions separated with different time limits.
                4. Decision time on comparable decisions measured again after six months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Median time for comparable decisions has been measured before and six months after introducing a single named decider and time limits."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Time ten recent decisions from first raising to final call"
                - "Agree a rule that every decision has one named decider"
                - "Set time limits for reversible and irreversible decisions"
                - "Measure decision time again after six months"
            - name: Culture change as a newly arrived chief executive
              description: |-
                ## Purpose
                New chief executives have a short window when change is expected, but acting before understanding the culture can destroy what works. Spending the first months listening widely, naming what to keep, then picking the shifts and symbolic acts that make the new direction clear lets a new leader change culture without dismissing its history.

                ## Milestones
                1. Listening sessions held with at least a tenth of staff in the first ninety days.
                2. A written list of what the culture does well and should keep.
                3. Two or three early symbolic acts chosen and taken.
                4. The culture shifts announced with credit to the past.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Within six months of arrival, the new chief executive has held wide listening sessions, written what to keep and announced the shifts."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Schedule listening sessions across sites and levels for the first ninety days"
                - "Write down what the culture does well and should keep"
                - "Choose two early symbolic acts that signal the new direction"
                - "Announce the shifts with credit to what came before"
            - name: Leading the shift in your own unit as a manager
              description: |-
                ## Purpose
                Managers below the executive team are often told to lead culture change without the authority to change systems. Choosing the one or two shifts that matter most in your unit, changing what you control such as meetings, recognition and how you react to bad news, and reporting blockers upwards makes the change real for your team.

                ## Milestones
                1. One or two shifts chosen that matter most for your team's work.
                2. Three things under your control changed to support them.
                3. A weekly team reflection on how the shift is going.
                4. Blockers outside your control reported to your leader with examples.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A manager has changed three practices within their control and held a weekly team reflection on the chosen shifts for three months."
                cadence: rolling
              tasks:
                - "Pick the one or two shifts that matter most for your team"
                - "Change three practices you control, such as recognition and meetings"
                - "Run a short team reflection on the chosen shift @recurring(weekly:wed)"
                - "Send your leader blockers outside your control with examples"
            - name: Culture shift across countries and sites
              description: |-
                ## Purpose
                In a large enterprise the same shift looks different in a head office, a factory and a sales office in another country, and a single script will be read differently in each. Agreeing which behaviours are fixed everywhere and how sites can express them locally keeps the shift coherent without forcing one national style on everyone.

                ## Milestones
                1. The fixed core of each shift defined for all sites.
                2. Local leaders in each region asked how the shift would look in their context.
                3. Local examples and measures agreed per region.
                4. Regional progress compared on the core measures after six months.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each region has local examples and measures for a shared core of every shift, with progress compared after six months."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Define the part of each shift that is the same everywhere"
                - "Ask each regional leader how the shift would look locally"
                - "Agree local examples and measures with each region"
                - "Compare regional progress on the core measures after six months"
            - name: Shifting toward a customer-first culture
              description: |-
                ## Purpose
                Many organisations say they put customers first while internal approvals, targets and status point inward. A customer-focused shift ties behaviour to customer evidence: leaders listening to real calls, front-line staff allowed to fix problems within a set limit and internal metrics replaced by customer outcomes where they conflict.

                ## Milestones
                1. Three internal practices identified that put internal convenience ahead of customers.
                2. A front-line discretion limit to fix customer problems agreed.
                3. Every executive listening to customer contacts each month.
                4. Customer outcome measures added to the culture dashboard.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A front-line discretion limit is in use, executives listen to customer contacts monthly and customer measures are on the culture dashboard."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List three practices that put internal convenience ahead of customers"
                - "Agree a discretion limit for front-line staff to fix problems"
                - "Listen to five customer contacts with the executive team @recurring(monthly:22)"
                - "Add two customer outcome measures to the culture dashboard"
            - name: Safety culture shift in an operational business
              description: |-
                ## Purpose
                In operational businesses, the safety rules usually exist, but production pressure and status decide whether people follow them or stop work. A safety culture shift focuses on leaders seen in the field, stop-work authority honoured without question, near misses reported freely and production targets never celebrated above safe delivery.

                ## Milestones
                1. Stop-work authority confirmed in writing and briefed to every site.
                2. A monthly leader walk at each operational site.
                3. Near-miss reporting rate tracked against the baseline.
                4. Production recognition reviewed so it never rewards unsafe shortcuts.

                ## Notes
                Work with your safety professionals and the regulator's guidance. The culture programme supports the safety management system and never replaces it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Stop-work authority is briefed at every site, leader walks happen monthly and near-miss reporting is tracked against the baseline."
                cadence: rolling
              tasks:
                - "Confirm stop-work authority in writing with the safety lead"
                - "Do a leader safety walk and talk with crews at one site @recurring(monthly:5)"
                - "Track near-miss reports against the baseline each quarter"
                - "Review production awards for anything rewarding unsafe shortcuts"
            - name: Linking the culture shift to business results
              description: |-
                ## Purpose
                Two years in, the board will ask whether the culture shift paid off. Building a careful analysis that compares units that moved most with those that moved least on business results, while being honest about other causes, gives an evidence-based answer and guides where to invest next.

                ## Milestones
                1. Units ranked by movement on the culture indicators.
                2. Business results for the same units gathered over the same period.
                3. Other explanations for differences listed and checked.
                4. A short paper with honest conclusions and limits presented to the board.

                ## Notes
                Correlation across units is suggestive, not proof. Say so plainly, and the board will trust the rest of the paper more.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A paper comparing culture movement with business results across units, with alternative explanations tested, has gone to the board."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Rank units by movement on the culture indicators"
                - "Gather business results for the same units and period"
                - "List other causes that could explain the differences"
                - "Write the paper with honest conclusions and stated limits"
            - name: Subculture map across functions and sites
              description: |-
                ## Purpose
                Engineering, sales and operations often have their own strong subcultures, and a shift that suits one can feel like an attack on another. Mapping where each subculture already supports or resists the shifts lets the programme use the strengths of each and avoid treating the organisation as one culture.

                ## Milestones
                1. Main subcultures identified by function, site and profession.
                2. For each, the shifts it already supports and those it resists noted.
                3. Leaders of each subculture consulted on how to frame the shifts.
                4. Tailored approaches agreed for the two most resistant groups.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A map of the main subcultures shows support and resistance per shift, with tailored approaches for the two most resistant groups."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the main subcultures by function, site and profession"
                - "Note which shifts each subculture supports or resists"
                - "Talk to respected leaders of each subculture about framing"
                - "Agree tailored approaches for the two most resistant groups"
            - name: Making the culture shift self-sustaining
              description: |-
                ## Purpose
                Programmes end, and if the new behaviours depend on the programme team they will fade within a year of its closing. Moving each shift into ordinary systems, such as hiring criteria, promotion rules, induction, meeting formats and leader objectives, before the team disbands lets the culture keep itself going.

                ## Milestones
                1. Each shift checked for whether it is built into hiring, promotion, induction and objectives.
                2. Gaps closed with the owners of those systems.
                3. Ownership of the dashboard and pulse moved to a permanent function.
                4. A yearly ownership check scheduled after the programme closes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every shift is built into at least three permanent systems and ownership of measurement has moved to a permanent function before the programme closes."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Check each shift against hiring, promotion, induction and objectives"
                - "Agree gap fixes with the owners of each system"
                - "Hand the dashboard and pulse to a permanent function"
                - "Check that permanent owners still run every shift's systems @recurring(yearly)"
---

# Culture Change Initiative

This area is for the senior leader or programme lead asked to shift how an organisation actually behaves, not to write new values but to make a different set of behaviours normal and the old ones rare. It starts with the foundations (the business case, the sponsor's mandate, a diagnosis built on evidence, a handful of from-to shifts and a baseline), moves into the operating machinery of role modelling, symbolic acts, listening and measurement, then the skills of reading and coaching culture, the hard decisions on systems, rituals and senior holdouts, the dated checkpoints, situations such as a culture shift after a scandal or under a new chief executive, and finally specialist work on safety, customer and self-sustaining culture.

What repeats is the evidence loop: a weekly culture moment in the executive meeting, monthly role-modelling check-ins, listening sessions, story collection and a dashboard review, quarterly pulse surveys and board reviews, and a yearly reset. The **Risk register**, **Metrics log**, **Vendor** and **1:1** templates pair with the programme's risks, its dashboard, choosing an adviser and coaching managers. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
