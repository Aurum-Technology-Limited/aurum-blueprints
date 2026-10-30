---
id: strategy-leadership.organisational-change-management
name: Organisational Change Management
description: "Lead people through a major change: a clear change definition and sponsor, impact and readiness assessed, a change network and steady communication, resistance handled, training delivered and new ways of working that stick."
category: business
version: 1.0.0
tags: [strategy-leadership, organisational-change-management, manager, enterprise, team, change-management, adoption, change-communications]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - feedback-themes
    - metrics-log
    - training-program
    - purchase-decision
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Organisational Change Management
          description: "Leading people through major change, from stakeholder analysis and communication to resistance, training and sustaining new ways of working."
          projects:
            - name: Change definition on one page
              description: |-
                ## Purpose
                Most change efforts stall because three senior people describe the change three different ways. Writing one page that says what is changing, what is not, who is affected, why now and what good looks like in twelve months gives every later message, plan and training session the same starting point.

                ## Milestones
                1. A one-page statement covering what changes, what stays the same, who is affected and why now.
                2. A short description of the future way of working, written as what a person will do differently on a normal Tuesday.
                3. Scope boundaries listed, including the related initiatives this change is not responsible for.
                4. The page reviewed and agreed by the sponsor and the delivery lead.

                ## Notes
                If the sponsor and the delivery lead cannot agree the page in one meeting, the change is not ready to announce. Settle the disagreement first.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page change definition covering scope, affected people, rationale and the future way of working is agreed in writing by the sponsor and delivery lead."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect the business case, project charter and any board paper for the change"
                - "Draft the what changes, what stays the same and why now sections"
                - "Describe a normal working day after the change in five sentences"
                - "Review the draft with the sponsor and the delivery lead"
            - name: Executive sponsor commitments for the change
              description: |-
                ## Purpose
                Research on change programmes consistently finds an active, visible sponsor is the strongest single predictor of success, yet sponsors are often named and then disappear. Agreeing in advance what the sponsor will say, attend and decide, and how often, turns a name on a slide into someone people see backing the change.

                ## Milestones
                1. A named sponsor with the authority to allocate budget and people to the change.
                2. A written list of sponsor commitments: key messages, events attended, decisions owned and time per month.
                3. A sponsor coalition of peer leaders identified for groups the main sponsor does not lead.
                4. Commitments confirmed by the sponsor in a short note to the change team.

                ## Notes
                Ask for specific hours, not general support. A sponsor who cannot give two hours a month to the change will not be visible enough for people to believe it matters.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The sponsor has confirmed in writing a list of messages, events, decisions and monthly hours they will give the change, with peer sponsors named for other groups."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the decisions only the sponsor can make for this change"
                - "Draft a one-page sponsor commitment list with hours per month"
                - "Identify peer leaders who must co-sponsor for their own groups"
                - "Book a thirty-minute meeting to agree the commitments with the sponsor"
            - name: Change impact assessment by affected group
              description: |-
                ## Purpose
                A change that looks small from the top can rewrite half of one team's job and barely touch another's. Assessing impact group by group, across process, systems, tools, roles, skills, reporting lines and location, shows where training, support and communication need to be heaviest and stops effort being spread evenly where it is not needed.

                ## Milestones
                1. Every affected group listed, with headcount and location.
                2. Impact rated high, medium or low for each group across process, systems, role, skills, structure and location.
                3. The three to five most heavily affected groups named, with the specific changes they face.
                4. The assessment validated with a manager from each high-impact group.
                5. Results feeding the communication, training and support plans.

                ## Notes
                Talk to people who do the work, not only their managers. Managers often underestimate how many workarounds and informal steps a change will remove.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An impact grid rating every affected group across six dimensions is validated by a manager from each high-impact group and referenced in the change plan."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every team, role and location the change touches with headcount"
                - "Build an impact grid with process, systems, role, skills, structure and location"
                - "Interview two people doing the work in each high-impact group"
                - "Review the completed grid with each high-impact group's manager"
            - name: Affected groups and influencers map
              description: |-
                ## Purpose
                Changes succeed or fail in the conversations people have after the announcement, and those conversations follow informal influence more than the organisation chart. Mapping each affected group's current attitude, what they stand to gain or lose and who they listen to tells you where to spend the first month of attention.

                ## Milestones
                1. Each affected group placed on a grid of impact against current support.
                2. What each group stands to gain and lose from the change written in their own terms.
                3. Informal influencers named in each group, such as long-serving staff, union representatives or respected experts.
                4. An engagement approach agreed for each quadrant of the grid.

                ## Notes
                This is the people map for one change. The wider map of investors, regulators and partners a strategy depends on belongs with strategic stakeholder work.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A map shows every affected group's impact, current support, gains, losses and named influencers, with an agreed engagement approach for each."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Place each affected group on an impact versus support grid"
                - "Write what each group gains and loses in one line each"
                - "Ask three managers who people in their teams actually listen to"
                - "Agree an engagement approach for each quadrant with the change team"
            - name: Change readiness assessment
              description: |-
                ## Purpose
                Readiness is about more than willingness: it covers whether people understand the reason, whether managers can explain it, whether there is capacity alongside other work and how the last change went. A short survey and a handful of focus groups before the plan is fixed show which barriers are real, so the plan addresses them rather than assumed ones.

                ## Milestones
                1. A readiness survey of ten to fifteen questions covering awareness, desire, capacity, manager support and change history.
                2. The survey sent to all affected groups with a response rate above 40 percent.
                3. Two or three focus groups held with high-impact groups to explain the numbers.
                4. A one-page readiness summary naming the top three barriers by group.

                ## Notes
                Ask how the last change went. A history of announced changes that quietly died is the most common hidden barrier, and people will tell you about it if asked directly.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A readiness summary based on a survey with at least 40 percent response and two focus groups names the top three barriers for each affected group."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft ten to fifteen readiness questions including one on past changes"
                - "Agree survey timing with managers so it does not clash with peak workload"
                - "Run two focus groups with the highest-impact groups"
                - "Write a one-page summary of the top three barriers by group"
            - name: Case for change in plain language
              description: |-
                ## Purpose
                People need to hear why a change is happening before they will listen to how. A case for change that a frontline employee could repeat to a colleague in a minute, covering what is wrong now, what happens if nothing changes and what will be better, carries further than any slide deck written for the board.

                ## Milestones
                1. A case for change of no more than 250 words, free of jargon and acronyms.
                2. A version of the case that fits in three spoken sentences.
                3. The case tested on five people outside the project team, who can repeat its main point back.
                4. The case adopted as the opening of every change message and briefing.

                ## Notes
                Be honest about what people will find harder. A case that only lists benefits reads as a sales pitch and invites cynicism.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A case for change under 250 words, with a three-sentence spoken version, has been repeated back accurately by five people outside the project team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write what is wrong now and what happens if nothing changes in plain words"
                - "Ask the agent to draft a three-sentence spoken version of the case"
                - "Test the case on five people outside the project and note what they repeat"
                - "Revise the wording where people misunderstood it"
            - name: Change management plan and timeline
              description: |-
                ## Purpose
                Delivery teams usually have a detailed technical plan and a single line called change management. A people-side plan laid against the delivery timeline, with communication, training, support and reinforcement activities for each group, makes the change work visible, resourced and impossible to cut quietly when the deadline tightens.

                ## Milestones
                1. A plan covering communication, sponsorship, manager coaching, training, resistance and reinforcement.
                2. Every activity tied to a delivery milestone, a target group and an owner.
                3. Change team resourcing estimated in days per month and agreed with the delivery lead.
                4. The plan merged into the main programme plan rather than kept separately.
                5. A sign-off date for the plan recorded with the sponsor.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A people-side change plan with owners, target groups and dates for each activity is merged into the programme plan and signed off by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Get the current delivery plan and its key milestones from the programme lead"
                - "List change activities for each affected group against those milestones"
                - "Estimate change team days per month and agree them with the delivery lead"
                - "Merge the change activities into the main programme plan"
            - name: Change resistance and risk register
              description: |-
                ## Purpose
                Resistance is information, and it is far cheaper to hear it in month one than to discover it in a failed go-live. Keeping a register of where resistance and people risks are likely, their causes and the response planned for each lets the change team act early instead of reacting to complaints that reach the sponsor.

                ## Milestones
                1. Expected sources of resistance listed by group, with the likely cause for each.
                2. People risks such as key-person loss, overload, morale and skill gaps added with likelihood and impact.
                3. A named owner and response planned for each high-rated item.
                4. The register reviewed monthly and shown to the sponsor.

                ## Notes
                Start from the **Risk register** template. Record causes, not labels: 'the team fears losing overtime pay' is actionable, 'the team is resistant' is not.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register of resistance sources and people risks, each with a cause, owner and planned response, is reviewed every month with the sponsor."
                cadence: rolling
              tasks:
                - "Create the register and add the barriers found in the readiness assessment"
                - "Write the likely cause beside each expected source of resistance"
                - "Assign an owner and a response for every high-rated item"
                - "Review and update the register before the sponsor check-in @recurring(monthly:17)"
            - name: Adoption measures and baseline
              description: |-
                ## Purpose
                Go-live dates measure delivery, not change. Agreeing three to six adoption measures before anything launches, such as usage of the new system, proportion of work done the new way, error rates or time to complete a task, and recording today's baseline, gives the team proof of adoption rather than an assumption that people switched over.

                ## Milestones
                1. Three to six adoption measures chosen, mixing usage, proficiency and outcome.
                2. Today's baseline recorded for each measure, with the data source named.
                3. A target and a date set for each measure.
                4. The measures agreed with the sponsor as the definition of success.

                ## Notes
                Choose measures you can get without a manual count each month. If the data needs a new report, request it now so it exists by go-live.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three to six adoption measures, each with a baseline, data source, target and date, are agreed with the sponsor before go-live."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List what people will visibly do differently once the change is adopted"
                - "Pick three to six measures with a data source that already exists"
                - "Record today's value for each measure"
                - "Agree targets and dates for each measure with the sponsor"
            - name: Change champion network
              description: |-
                ## Purpose
                Three people on a change team cannot be in forty offices, but forty respected colleagues can. A network of champions, one for roughly every 20 to 50 affected people, who get early information, carry questions back and help peers through the change, is the most reliable way to hear what is really happening on the ground.

                ## Milestones
                1. Champions recruited from each affected group, chosen for peer respect rather than seniority.
                2. A champion role description with the hours expected and agreed by each champion's manager.
                3. A monthly champion call running, with questions and concerns logged.
                4. A way of recognising champions' effort, such as a mention in reviews or a sponsor thank-you.

                ## Notes
                Volunteers who are enthusiastic about everything are less useful than respected sceptics who have been won over. Ask managers for both.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Champions cover every affected group at roughly one per 20 to 50 people, their managers have agreed the time, and a monthly champion call is running."
                cadence: rolling
              tasks:
                - "Ask each affected group's manager to nominate two potential champions"
                - "Write a one-page champion role description with hours per month"
                - "Hold the monthly champion call and log the questions raised @recurring(monthly:9)"
                - "Send the sponsor a quarterly list of champions to thank"
            - name: Change communications calendar
              description: |-
                ## Purpose
                People need to hear about a change five to seven times, through different channels, before most of them take it in. A calendar that plans who hears what, from whom and when, with face-to-face messages from managers for the personal impacts, prevents both silence and the opposite problem of five teams sending conflicting emails the same week.

                ## Milestones
                1. A calendar of messages by audience, sender, channel and date running through to sustainment.
                2. Personal impact messages assigned to direct managers rather than the central team.
                3. A single approval route for change messages agreed with internal communications.
                4. Weekly messages going out on a predictable day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A communications calendar by audience, sender and channel is in use, and change messages have gone out on the agreed weekly day for at least eight weeks running."
                cadence: rolling
              tasks:
                - "Draft the calendar of messages from announcement through to sustainment"
                - "Agree an approval route for change messages with internal communications"
                - "Send the weekly change update on the agreed day @recurring(weekly:tue)"
                - "Check the calendar against other planned announcements to avoid clashes"
            - name: Change questions log and published answers
              description: |-
                ## Purpose
                The same twenty questions will arrive by email, in corridors and through champions, and inconsistent answers do more damage than none. Logging every question, answering it once with the sponsor's agreement and publishing a living set of answers keeps everyone hearing the same thing and shows people their questions are taken seriously.

                ## Milestones
                1. One log capturing questions from all channels, with date, source group and theme.
                2. Agreed answers for the most frequent questions published in one place staff can find.
                3. Unanswerable questions acknowledged with a date when an answer will come.
                4. Recurring themes summarised for the sponsor each month.

                ## Notes
                Start from the **Feedback themes** template. 'We do not know yet, and we will tell you by March' is a legitimate answer and builds more trust than guessing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A single questions log is updated weekly, the published answers are refreshed each week, and no question has gone more than ten working days without a response."
                cadence: rolling
              tasks:
                - "Set up one log with date, source group, question and theme columns"
                - "Draft agreed answers to the ten most common questions"
                - "Update the log and publish new answers @recurring(weekly:fri)"
                - "Summarise the month's recurring themes for the sponsor"
            - name: Monthly adoption review
              description: |-
                ## Purpose
                Adoption rarely fails everywhere at once: one region or shift lags while the rest move on, and averages hide it. A monthly review of each adoption measure by group, with the champions' view alongside the data, spots the lagging pockets while there is still time to send extra support.

                ## Milestones
                1. Each adoption measure reported by group, against baseline and target.
                2. Lagging groups identified with a likely reason confirmed by their champion or manager.
                3. One targeted action agreed for each lagging group.
                4. A short summary shared with the sponsor after each review.

                ## Notes
                Start from the **Metrics log** template. Look at the spread between groups as much as the overall figure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Adoption measures are reviewed by group every month, with a named action for each lagging group and a summary sent to the sponsor."
                cadence: rolling
              tasks:
                - "Set up a log with each adoption measure broken down by group"
                - "Run the monthly adoption review with the change team @recurring(monthly:14)"
                - "Ask the champion in each lagging group what is getting in the way"
                - "Agree one targeted action for each lagging group"
            - name: Weekly sponsor check-in
              description: |-
                ## Purpose
                Sponsors drift away from a change once the launch photo has been taken, usually around the point people start pushing back. A standing thirty-minute weekly check-in, with a short agenda of adoption, resistance and decisions needed, keeps the sponsor close enough to act and gives the change team a reliable escalation route.

                ## Milestones
                1. A thirty-minute weekly slot in the sponsor's diary, protected for the life of the change.
                2. A standing agenda of adoption figures, top resistance items, decisions needed and sponsor actions.
                3. Decisions and sponsor actions recorded after every check-in.
                4. A pre-agreed point at which the check-in moves to fortnightly during sustainment.

                ## Notes
                Start from the **Meeting notes** template. Bring one specific ask to every check-in, so the sponsor keeps having something visible to do.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly sponsor check-in has run with recorded decisions and actions for at least ten consecutive weeks."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute slot with the sponsor"
                - "Write a standing agenda with adoption, resistance and decisions needed"
                - "Hold the sponsor check-in with one specific ask prepared @recurring(weekly:mon)"
                - "Record decisions and sponsor actions in the same notes page"
            - name: Weekly resistance huddle
              description: |-
                ## Purpose
                Resistance signals arrive scattered: a complaint to HR, a quiet team meeting, a spike in workarounds, a champion's worried message. A short weekly huddle where the change team pools what it has heard and decides who will talk to whom turns scattered signals into conversations before they harden into opposition.

                ## Milestones
                1. A fifteen to twenty minute weekly huddle with the change team and a rotating champion.
                2. Signals from all sources pooled and matched to entries in the resistance register.
                3. A named person assigned to follow up each new signal within the week.
                4. Patterns across weeks noted and raised with the sponsor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly resistance huddle runs with every new signal assigned to a named person, and the resistance register is updated after each one."
                cadence: rolling
              tasks:
                - "Set a fifteen-minute weekly huddle slot for the change team"
                - "Invite a different champion each week to bring the view from their group"
                - "Hold the huddle and assign a follow-up for each new signal @recurring(weekly:thu)"
                - "Update the resistance register with what was learned"
            - name: Manager briefing packs
              description: |-
                ## Purpose
                Employees prefer to hear about changes to their own work from their direct manager, yet managers are often told at the same moment as everyone else. A monthly briefing pack that reaches managers a few days ahead, with key messages, likely questions, answers and what to do with concerns, makes managers credible messengers instead of bystanders.

                ## Milestones
                1. A standard briefing pack format of two pages or fewer, with key messages, questions and answers, and actions.
                2. Packs reaching managers at least three working days before the related staff communication.
                3. A short live briefing offered for managers who want to ask questions.
                4. Manager feedback on each pack collected and used for the next one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A two-page manager briefing pack reaches all affected managers at least three working days before each staff communication, every month."
                cadence: rolling
              tasks:
                - "Design a two-page briefing pack template with messages and questions"
                - "Build a distribution list of every manager of affected staff"
                - "Send the monthly manager briefing pack ahead of the staff update @recurring(monthly:3)"
                - "Ask five managers each month what was missing from the pack"
            - name: Quarterly change pulse survey
              description: |-
                ## Purpose
                Adoption data shows what people do, but not whether they understand, believe in or feel supported through the change. A five to eight question pulse each quarter, repeated with the same wording, tracks understanding, confidence and support over time and shows whether the plan is working on people as well as process.

                ## Milestones
                1. A pulse of five to eight questions, kept identical each quarter.
                2. Results broken down by affected group, with small groups combined to protect anonymity.
                3. Results shared back with staff, along with what will change because of them.
                4. Trends over at least three quarters reviewed with the sponsor.

                ## Notes
                Always share results and actions within a month. A survey that disappears teaches people not to answer the next one.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pulse with unchanged questions has run for at least three quarters, with results and actions shared back with staff each time."
                cadence: cyclic
              tasks:
                - "Write five to eight pulse questions on understanding, confidence and support"
                - "Agree an anonymity threshold for reporting results by group"
                - "Run the change pulse and share results with staff @recurring(quarterly)"
                - "Pick one action from each pulse and report back on it"
            - name: Change load heatmap across concurrent initiatives
              description: |-
                ## Purpose
                Picture a finance team receiving a new system, a new policy and a restructure in the same quarter will adopt none of them well. A monthly heatmap showing every change hitting each group, by month and intensity, makes saturation visible to leaders and gives a factual basis for moving launch dates apart.

                ## Milestones
                1. Every significant change in flight collected from programme leads, with its affected groups and dates.
                2. A heatmap of groups against months, coloured by combined change load.
                3. Saturated groups flagged to the leaders who own the clashing changes.
                4. At least one sequencing decision made because of the heatmap.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A heatmap of change load by group and month is refreshed monthly, and saturated groups have been raised with the owners of the clashing changes."
                cadence: rolling
              tasks:
                - "Ask programme leads for every change affecting staff in the next six months"
                - "Build a grid of affected groups against months with an intensity score"
                - "Refresh the heatmap and flag any saturated groups @recurring(monthly:24)"
                - "Take the most saturated group to the leaders who own the clashing changes"
            - name: Sustainment checks after go-live
              description: |-
                ## Purpose
                Old habits creep back once the project team moves on, usually three to six months after launch, when a workaround or a familiar spreadsheet quietly returns. Monthly sustainment checks, owned by the business rather than the project, look for those signs and reinforce the new way before the slide back becomes permanent.

                ## Milestones
                1. A named business owner accountable for the new way of working after the project closes.
                2. A short sustainment checklist covering usage, workarounds, process compliance and recognition.
                3. Monthly checks running for at least six months after go-live.
                4. A quarterly spot audit of the new process in a sample of teams.

                ## Notes
                Look for shadow spreadsheets, duplicate approvals and people still asking for the old report. Each is a sign the new way has not fully replaced the old one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A business owner runs monthly sustainment checks for at least six months after go-live, plus a quarterly process spot audit, with findings acted on."
                cadence: rolling
              tasks:
                - "Name the business owner for the new way of working after project close"
                - "Write a sustainment checklist covering usage, workarounds and recognition"
                - "Run the monthly sustainment check with the business owner @recurring(monthly:27)"
                - "Spot audit the new process in three sample teams @recurring(quarterly)"
            - name: Comparing the main change models
              description: |-
                ## Purpose
                Leaders often pick up one change model from a single workshop and apply it to every situation. Learning how three widely used approaches differ, an individual model such as ADKAR, an organisational sequence such as Kotter's steps and Bridges' view of personal transition, lets you choose language and activities that suit the change in front of you.

                ## Milestones
                1. One source read or summarised for each of three change models.
                2. A one-page comparison of what each model focuses on and where it is weak.
                3. A current or past change mapped against each model to see what each would have flagged.
                4. A decision on which model, or blend, the change team will use as its common language.

                ## Notes
                No model is a plan. Use one as a shared vocabulary and a checklist, not as a substitute for understanding the specific people affected.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of three change models exists, with a real change mapped against each and a chosen common model recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one reputable book or guide for each of three change models"
                - "Write a half-page summary of each model's focus and weaknesses"
                - "Map a recent change you know well against each model"
                - "Agree a common change language with the change team"
            - name: Coaching people through personal transition
              description: |-
                ## Purpose
                Change is an event, but transition is the personal process of letting go of the old way, living with uncertainty and then committing to the new one, and people move through it at different speeds. Practising coaching conversations that meet people where they are helps managers stop repeating the case for change to someone who is really grieving a loss.

                ## Milestones
                1. The stages of personal transition understood well enough to explain to a manager in five minutes.
                2. A short set of open questions for each stage written and tried out.
                3. Three real coaching conversations held, with notes on what helped and what did not.
                4. A one-page guide shared with managers of high-impact groups.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three coaching conversations have been held and reflected on, and a one-page transition coaching guide is in the hands of high-impact managers."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read a summary of the stages of personal transition"
                - "Write three open questions suited to each stage"
                - "Hold three coaching conversations and note what landed"
                - "Turn your notes into a one-page guide for managers"
            - name: Handling resistance in one-to-one conversations
              description: |-
                ## Purpose
                The instinct when someone objects to a change is to persuade, and it usually makes the objection firmer. Practising a different pattern, listening fully, naming what the person is losing, separating what is fixed from what can be shaped and agreeing one next step, gives managers a way to have the hard conversation without either caving or steamrolling.

                ## Milestones
                1. A simple conversation structure for resistance written on one card.
                2. The structure rehearsed in two role plays with a peer, with feedback.
                3. Two real resistance conversations held using the structure.
                4. Lessons from those conversations noted and the card revised.

                ## Notes
                Be clear about what is not negotiable. People cope better with a firm 'this is happening' combined with real influence over how than with vague openness that later turns out to be false.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two role plays and two real resistance conversations have been held using a written structure, and the structure has been revised from what was learned."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-card structure for a resistance conversation"
                - "Ask a peer to role play two objections you expect to hear"
                - "Use the structure in your next two real resistance conversations"
                - "Revise the card based on what happened"
            - name: Running a change impact workshop
              description: |-
                ## Purpose
                Impact assessments filled in by a project team at a desk miss the informal steps, local workarounds and knock-on effects only the people doing the work can see. Learning to run a two-hour workshop where a team walks through its current day and the future day side by side produces a better assessment and gives people a sense of having shaped the change.

                ## Milestones
                1. A two-hour workshop design with a current-state walk-through, a future-state walk-through and an impact capture.
                2. The workshop piloted with one team and adjusted.
                3. Workshops held with every high-impact group.
                4. Workshop findings added to the impact assessment and the resistance register.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tested two-hour workshop design has been run with every high-impact group and its findings recorded in the impact assessment."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Draft a two-hour agenda comparing a current day with a future day"
                - "Pilot the workshop with one willing team"
                - "Adjust the design based on the pilot team's feedback"
                - "Schedule the workshop with each remaining high-impact group"
            - name: Writing change messages people actually read
              description: |-
                ## Purpose
                Change messages are usually written by committee, lead with the programme name and bury what the reader needs to do. Practising a tighter format, what is changing for you, when, what you need to do and where to ask, cuts message length and raises the share of people who can say what the change means for them.

                ## Milestones
                1. A message format with four fixed parts agreed by the change team.
                2. Three past change messages rewritten in the new format and compared.
                3. A readability check applied to every new message before it is sent.
                4. Recall of key points tested on a small sample after two messages.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A four-part message format is in use, every new message passes a readability check, and a recall test shows most readers can state what they need to do."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick three past change messages that drew confused replies"
                - "Rewrite each one in the four-part format"
                - "Ask five readers what they need to do after reading a new message"
                - "Agree the format as the standard with internal communications"
            - name: Role-based training plan for the change
              description: |-
                ## Purpose
                Training everyone on everything wastes days and still leaves people unsure what their own role does differently. A training needs analysis by role, followed by short, role-specific sessions timed close to go-live, with practice in a realistic setting, produces people who can work the new way on day one.

                ## Milestones
                1. Training needs listed by role, based on the impact assessment.
                2. A curriculum of role-specific modules, each with a stated outcome and duration.
                3. Training scheduled within the two to four weeks before people need the skill.
                4. Completion and a short proficiency check tracked by role.
                5. Quick reference guides ready for each role at go-live.

                ## Notes
                Start from the **Training program** template. Training delivered more than a month before go-live is largely forgotten by the day it is needed.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A role-based curriculum is delivered within four weeks of go-live, with completion and a proficiency check recorded for every affected role."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List what each affected role must be able to do after the change"
                - "Group the needs into short modules with an outcome for each"
                - "Book training slots in the four weeks before go-live"
                - "Write a one-page quick reference guide for each role"
            - name: Leading and lagging adoption indicators
              description: |-
                ## Purpose
                By the time usage figures show a problem, the reasons behind it have often been building for weeks. Learning to pair lagging measures of adoption with leading signals, such as training completion, champion sentiment, help desk themes and manager confidence, lets the change team act before the numbers turn.

                ## Milestones
                1. The difference between leading and lagging indicators understood and written down for this change.
                2. Three or four leading indicators chosen to sit alongside each lagging adoption measure.
                3. A data source and collection method agreed for each leading indicator.
                4. The leading indicators added to the monthly adoption review.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each lagging adoption measure has three or four leading indicators with data sources, and these appear in the monthly adoption review."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a short guide on leading and lagging indicators"
                - "List signals that usually appear before adoption slips in your organisation"
                - "Choose three or four leading indicators for each adoption measure"
                - "Add the leading indicators to the adoption review log"
            - name: Choosing big bang, phased or pilot rollout
              description: |-
                ## Purpose
                How a change is rolled out shapes everything that follows: a single cut-over concentrates risk and support into one week, while a phased rollout runs two ways of working side by side for months. Comparing the options against the specific risks, dependencies and capacity of your organisation produces a choice the sponsor can defend.

                ## Milestones
                1. Big bang, phased by group, phased by location and pilot-first options described.
                2. Each option scored on risk, support load, duration of dual running and staff impact.
                3. The recommended approach and its main trade-off written in a one-page paper.
                4. The decision taken by the sponsor and recorded.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page paper scoring at least three rollout options is decided by the sponsor, with the chosen approach and its trade-off recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Describe at least three rollout options in a paragraph each"
                - "Score each option on risk, support load, dual running and staff impact"
                - "Write a one-page recommendation naming the main trade-off"
                - "Present the recommendation to the sponsor for a decision"
            - name: Pilot group design and learning loop
              description: |-
                ## Purpose
                Pilots only earn their cost if they are set up to learn, with a representative group, clear questions and a decision at the end. Designing the pilot around what you need to find out, such as whether training is enough, which steps confuse people and how support demand behaves, turns a soft launch into evidence for the full rollout.

                ## Milestones
                1. Three to five questions the pilot must answer written down.
                2. A pilot group chosen to include a typical team, not only the keenest one.
                3. Feedback captured weekly during the pilot through short check-ins.
                4. A pilot review listing what will change before full rollout.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A pilot with written questions and a representative group has ended in a review that lists the changes made before full rollout."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write three to five questions the pilot must answer"
                - "Choose a pilot group that includes at least one typical, unenthusiastic team"
                - "Hold a short weekly feedback check-in with the pilot group"
                - "Write the pilot review with the changes to make before rollout"
            - name: Deciding what to stop to make room
              description: |-
                ## Purpose
                Teams asked to learn a new way of working while keeping every existing task, meeting and report quietly fall back to what they know. Agreeing with leaders which reports, meetings, approvals or targets will be paused or dropped during the change frees real capacity and signals the change is a priority.

                ## Milestones
                1. Current recurring work of the most affected groups listed, with hours per month.
                2. Candidate items to stop, pause or reduce agreed with each group's manager.
                3. The stop list approved by the sponsor and communicated to staff.
                4. Hours freed estimated and compared with the time the change demands.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A sponsor-approved stop list for the most affected groups is communicated to staff, with the hours freed estimated against the change's demands."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each high-impact manager to list their team's recurring reports and meetings"
                - "Mark items that could be stopped, paused or reduced during the change"
                - "Take the stop list to the sponsor for approval"
                - "Tell affected staff what they no longer need to do"
            - name: Aligning targets and incentives with the new way
              description: |-
                ## Purpose
                People do what they are measured and paid on, so a change that asks for new behaviour while targets reward the old one will lose every time. Checking performance goals, bonus measures, sales targets and recognition schemes for conflicts, and fixing the worst of them, removes the quiet incentive to resist.

                ## Milestones
                1. Performance goals, targets and incentive measures of the affected groups reviewed.
                2. Conflicts with the new way of working listed, ranked by how strongly they pull against it.
                3. Changes to the top conflicts agreed with HR, finance and the relevant leaders.
                4. Revised goals or targets communicated before the next performance cycle.

                ## Notes
                Changes to pay or contractual terms can carry legal and consultation duties. Involve HR and, where needed, employment counsel before announcing anything.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The top conflicts between existing targets or incentives and the new way of working are resolved with HR and finance, and revisions are communicated before the next cycle."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the current targets and incentive measures for affected groups"
                - "List where each one rewards the old way of working"
                - "Agree fixes for the top three conflicts with HR and finance"
                - "Confirm when revised targets will take effect"
            - name: Updating procedures, role profiles and policies
              description: |-
                ## Purpose
                No change is finished while the written procedures, role profiles and policies still describe the old way, because new joiners learn from the documents and auditors check against them. Finding and updating every affected document before go-live closes the gap between what people are told and what the organisation formally requires.

                ## Milestones
                1. An inventory of procedures, role profiles, policies and forms touched by the change.
                2. An owner and a revision date set for each document.
                3. All documents updated and approved before go-live.
                4. Old versions withdrawn so only current documents can be found.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every procedure, role profile, policy and form affected by the change is updated and approved before go-live, with old versions withdrawn."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Search the document library for procedures and policies the change touches"
                - "Assign an owner and a revision date to each document"
                - "Track approvals against the go-live date"
                - "Withdraw old versions from the intranet and shared drives"
            - name: Retiring the old way of working
              description: |-
                ## Purpose
                As long as the old system, form or spreadsheet still works, a share of people will keep using it. Planning the retirement of the old way, with a date, the access removed, data migrated and a clear message, is often what finally moves the last third of people across.

                ## Milestones
                1. Every old tool, form, report and workaround listed with its users.
                2. A retirement date set for each, with data migration and archive needs confirmed.
                3. Users told the date at least four weeks ahead and again one week before.
                4. Access to the old way removed on the agreed date, with exceptions approved by the sponsor.

                ## Notes
                Keep read-only access where records must be retained, and check retention rules with your records or compliance lead before deleting anything.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every old tool, form and workaround has a retirement date, users have been told twice, and access has been removed on the agreed date."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every old tool, form, report and workaround still in use"
                - "Confirm data migration and record retention needs for each"
                - "Agree retirement dates and announce them four weeks ahead"
                - "Remove access on the agreed date and log any approved exceptions"
            - name: Choosing a change and adoption tracking tool
              description: |-
                ## Purpose
                Running a large change from spreadsheets and email works until there are five changes and three hundred champions. Comparing a few options, from a shared workbook to digital adoption platforms and survey tools, against what you actually need to track decides whether a tool is worth its cost and training time.

                ## Milestones
                1. Requirements written, covering impact data, stakeholder records, surveys, adoption analytics and reporting.
                2. Three options shortlisted, including keeping the current workbook.
                3. Each option scored on fit, cost, security review needs and effort to run.
                4. A decision recorded, with a named owner for the chosen tool.

                ## Notes
                Start from the **Purchase decision** template. For a single change, a well-built shared workbook is usually enough.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision between at least three options, including the current workbook, is recorded with scores, costs and a named owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List what the change team needs to track and report each month"
                - "Shortlist three options including staying with a shared workbook"
                - "Check security and data review requirements with IT"
                - "Record the decision and the tool owner"
            - name: Leadership alignment session before announcement
              description: |-
                ## Purpose
                Staff watch leaders closely in the days after a change is announced, and a single manager saying 'I was not consulted either' can undo a carefully planned launch. A session with every leader of affected groups before the announcement, to test the case, rehearse answers and surface doubts in private, means they speak with one voice.

                ## Milestones
                1. All leaders of affected groups invited and attending, in person or remotely.
                2. The case for change, timeline and personal impacts walked through with time for challenge.
                3. Doubts and objections raised and either answered or logged for follow-up.
                4. Each leader leaving with a briefing pack and a clear role for announcement week.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every leader of an affected group has attended an alignment session before announcement and holds a briefing pack and a named role for announcement week."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every leader whose team is affected and book a session before announcement"
                - "Prepare the case, timeline and impact slides for the session"
                - "Run the session with open time for challenge and doubts"
                - "Send each leader their briefing pack and announcement week role"
            - name: Change announcement day
              description: |-
                ## Purpose
                Whatever happens in the first hour after an announcement sets the story people will tell about the change for months. Sequencing who hears first, usually the most affected people from their own managers before any all-staff message, with time for questions on the same day, prevents people learning about their own future from a forwarded email.

                ## Milestones
                1. A minute-by-minute run sheet covering the order in which each group hears.
                2. Most affected staff told by their own managers before the all-staff message.
                3. The all-staff message and questions-and-answers page released at the planned time.
                4. Question sessions held the same day or next day for each affected group.
                5. A same-day debrief noting reactions and urgent follow-ups.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The announcement followed a written run sheet, the most affected staff heard from their managers first, and question sessions were held within one working day."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the run sheet showing which group hears when and from whom"
                - "Prepare the all-staff message and the published answers page"
                - "Book question sessions for each affected group within one day"
                - "Hold a debrief at the end of the day and log urgent follow-ups"
            - name: People readiness go or no-go review
              description: |-
                ## Purpose
                Go-live decisions are usually made on technical readiness alone, so systems launch to people who have not been trained or told. Adding a formal people readiness check, covering training completion, manager briefing, support cover and adoption measurement, gives the sponsor the facts to delay a launch that would fail.

                ## Milestones
                1. People readiness criteria agreed with thresholds, such as training completion by role and managers briefed.
                2. Evidence gathered against each criterion a week before the review.
                3. A go, conditional go or no-go recommendation made to the sponsor.
                4. The decision and any conditions recorded alongside the technical go-live decision.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A people readiness review with agreed thresholds and evidence produced a recorded go, conditional go or no-go decision alongside the technical decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree people readiness criteria and thresholds with the delivery lead"
                - "Gather training, briefing and support evidence one week before the review"
                - "Write a go, conditional go or no-go recommendation"
                - "Record the decision and conditions with the technical go-live decision"
            - name: Go-live week floor support
              description: |-
                ## Purpose
                The first week of working the new way is when confidence is won or lost, and most people will not raise a ticket for a small confusion, they will simply revert. Visible floor walkers, a daily stand-up and a fast route for fixes during go-live week catch confusion in person and show people they are not on their own.

                ## Milestones
                1. Floor walkers or online support people scheduled for every site and shift in go-live week.
                2. A daily fifteen-minute stand-up reviewing issues, themes and fixes.
                3. A single issue log with each issue triaged as training, process or system.
                4. A hand-off of open issues to business-as-usual support at the end of the week.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Floor support covered every site and shift through go-live week, a daily stand-up ran, and open issues were handed to regular support at week end."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Schedule floor walkers for every site and shift in go-live week"
                - "Set up one issue log with training, process and system categories"
                - "Run a fifteen-minute stand-up each morning of go-live week"
                - "Hand open issues to the regular support team at the end of the week"
            - name: Thirty-day post go-live review
              description: |-
                ## Purpose
                One month after go-live the early noise has died down and the real picture appears: which teams adopted, which reverted and which process steps still cause trouble. Reviewing adoption data, support themes and staff feedback at thirty days produces a short list of fixes before habits settle.

                ## Milestones
                1. Adoption measures compared with baseline and target at thirty days.
                2. Support ticket and question themes summarised.
                3. Feedback gathered from champions and a sample of staff in each group.
                4. A list of no more than ten fixes, each with an owner and a date.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A thirty-day review comparing adoption with target, summarising support themes and staff feedback, produced up to ten owned and dated fixes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull adoption figures by group at day thirty"
                - "Ask the agent to summarise themes from support tickets and the question log"
                - "Hold a feedback session with champions from each group"
                - "Agree up to ten fixes with owners and dates"
            - name: Change close-out and handover to the business
              description: |-
                ## Purpose
                Change teams are often disbanded on the day the project closes, leaving nobody to notice when adoption slips. A formal close-out, with adoption measured against target, sustainment owners named and the remaining actions handed over, ends the project without ending the change.

                ## Milestones
                1. Final adoption figures compared with the targets set before go-live.
                2. Sustainment owners named in each affected group, with their checklist.
                3. Open actions, risks and the questions log handed to named business owners.
                4. A close-out note signed off by the sponsor.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A sponsor-signed close-out note records final adoption against target and names sustainment owners for every affected group."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Report final adoption figures against the original targets"
                - "Name a sustainment owner in each affected group"
                - "Hand the open actions, risks and questions log to business owners"
                - "Write the close-out note and send it to the sponsor"
            - name: Leading your team through a change you did not choose
              description: |-
                ## Purpose
                Middle managers are often asked to champion a change they had no part in deciding and may privately doubt. Working out what you honestly believe, what you can and cannot share, and how to support your team without either faking enthusiasm or undermining the decision lets you keep your credibility on both sides.

                ## Milestones
                1. Your own questions about the change raised with your manager and answered or noted.
                2. A short, honest explanation of the change for your team that you can say with conviction.
                3. A team conversation held where people could voice concerns.
                4. A weekly team check-in on how the change is going, running through go-live.

                ## Notes
                You can say 'I had concerns too, here is what I learned' without undermining the decision. What damages trust is pretending to agree, then letting doubt show in every meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your questions have been answered by your manager, a team conversation on the change has been held, and a weekly team check-in runs through go-live."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down your own doubts and questions about the change"
                - "Take those questions to your manager before talking to your team"
                - "Hold a team conversation where people can raise concerns openly"
                - "Run a ten-minute check-in on the change in the team meeting @recurring(weekly:wed)"
            - name: Team working agreement for the change period
              description: |-
                ## Purpose
                During a change, a team carries old work, new learning and extra uncertainty at once, and friction rises. A short working agreement made by the team itself, covering how it will share learning, cover for colleagues in training, raise problems and protect focus time, keeps the team functioning while the ground moves.

                ## Milestones
                1. A team session held to agree how the team will work during the change.
                2. A one-page agreement covering learning, cover, raising problems and focus time.
                3. A buddy pairing for anyone who is slower to pick up the new way.
                4. A monthly team retrospective on the change running until sustainment.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The team has written a one-page working agreement for the change period, paired buddies, and holds a monthly retrospective until sustainment."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book a forty-five minute team session on working through the change"
                - "Write the agreed points on one page and share it with the team"
                - "Pair team members as learning buddies for the new way"
                - "Hold a short team retrospective on the change @recurring(monthly:6)"
            - name: People side of a major system go-live
              description: |-
                ## Purpose
                Large system rollouts, such as a new finance, HR or customer platform, fail more often on adoption than on technology. Running the people side alongside the technical workstreams, with process walk-throughs, super users, data clean-up ownership and rehearsals, prepares the organisation for the day the old system is switched off.

                ## Milestones
                1. Super users named in each affected function, with time released for testing and training.
                2. Business process walk-throughs completed using the new system with real scenarios.
                3. Data clean-up owners in the business named and working to a deadline.
                4. At least one dress rehearsal of cut-over activities involving business users.

                ## Notes
                This is the adoption work for one system. The wider question of which technologies to invest in sits with digital transformation leadership.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Super users are in place in every affected function, process walk-throughs and data clean-up are complete, and business users have joined a cut-over rehearsal."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask each function head to release a named super user for the rollout"
                - "Schedule process walk-throughs using real scenarios in the test system"
                - "Name business owners for data clean-up with a deadline"
                - "Book a cut-over rehearsal that includes business users"
            - name: Changes affecting jobs, roles and terms
              description: |-
                ## Purpose
                When a change means role changes, relocations or job losses, people's first question is about their own livelihood, and everything else waits until it is answered. Planning the sequence of individual conversations, consultation steps, support and communication with HR and legal advice protects people's dignity and the organisation's obligations.

                ## Milestones
                1. HR and employment counsel engaged before any announcement, with consultation duties for each jurisdiction confirmed.
                2. Affected individuals identified and the order of individual conversations planned.
                3. Managers prepared for individual conversations with a script, support information and a second person present.
                4. Support in place, such as an employee assistance service, redeployment help and clear timelines.
                5. Communication for those who stay, covering what changes for them and why.

                ## Notes
                Rules on consultation, notice and selection vary widely between countries and with the number of people affected. Take advice from HR and an employment lawyer before announcing anything; this project is for organising the work, not deciding the legal steps.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Consultation duties are confirmed with HR and counsel, every affected person's conversation is planned with support in place, and a message for remaining staff is ready."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Book a meeting with HR and employment counsel on consultation duties"
                - "Plan the order and timing of individual conversations"
                - "Prepare managers with a script, support details and a second attendee"
                - "Draft the message for staff who remain"
            - name: Consulting unions and works councils on change
              description: |-
                ## Purpose
                Where staff are represented by a union or works council, the formal consultation process shapes the timeline and often the content of the change, and starting it late is a common cause of delay. Mapping the obligations, building a relationship with representatives early and treating their input as useful information makes consultation smoother and the change better.

                ## Milestones
                1. Recognised unions, works councils or staff forums and their agreements identified.
                2. Information and consultation obligations confirmed with employee relations or counsel.
                3. An early informal meeting held with representatives before formal consultation starts.
                4. A consultation timeline built into the change plan.
                5. Outcomes of consultation recorded, including changes made in response.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Consultation obligations are confirmed, an early meeting with representatives has been held, and a consultation timeline and recorded outcomes are part of the change plan."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the unions, works councils or staff forums covering affected staff"
                - "Ask employee relations to confirm the consultation obligations that apply"
                - "Arrange an informal early meeting with staff representatives"
                - "Add the consultation timeline to the change plan"
            - name: Office move or new working pattern change
              description: |-
                ## Purpose
                Changes to where and when people work, such as an office move, a new hybrid policy or new shift patterns, hit home life directly: commutes, childcare and caring duties. Planning these changes around those personal impacts, with enough notice, individual conversations where needed and fair handling of exceptions, avoids losing good people over logistics.

                ## Milestones
                1. Personal impacts mapped, including commute changes, caring responsibilities and accessibility needs.
                2. Notice periods agreed that respect contracts and give people time to adjust.
                3. A fair, written process for exception requests.
                4. Practical support ready, such as site visits, travel information or a trial period.
                5. Early turnover and attendance tracked for three months after the change.

                ## Notes
                Check employment contracts and any flexible working obligations with HR before setting dates; some changes to place or hours of work need formal agreement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Personal impacts are mapped, a written exception process exists, and turnover and attendance are tracked for three months after the move or pattern change."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Survey affected staff on commute, caring and accessibility impacts"
                - "Agree notice periods with HR that respect contracts"
                - "Write a fair exception request process with decision times"
                - "Arrange site visits or a trial period before the change takes effect"
            - name: Change for frontline and shift-based teams
              description: |-
                ## Purpose
                Frontline staff in stores, plants, hospitals or call centres rarely sit at a desk reading email, and shift patterns mean a single briefing misses most of them. Planning change activity around shift handovers, team boards, short huddles and supervisors reaches people where they work, and avoids a change that only office staff have heard about.

                ## Milestones
                1. Every shift and site mapped with the best moment and channel to reach staff.
                2. Supervisors briefed and equipped with a five-minute huddle script for each key message.
                3. Training scheduled within shifts or paid if outside them.
                4. A monthly briefing reaching every shift, confirmed by supervisors.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every shift and site has a mapped channel, supervisors use huddle scripts, and each month's briefing is confirmed as delivered to every shift."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Map each shift and site with its handover times and notice boards"
                - "Write a five-minute huddle script for the next key message"
                - "Agree with operations how training fits within paid shift time"
                - "Confirm the monthly briefing has reached every shift @recurring(monthly:11)"
            - name: Change management office and common method
              description: |-
                ## Purpose
                Organisations running many changes at once often find each programme inventing its own templates, surveys and readiness checks, and staff experience the result as chaos. A small change management office with a common method, a shared toolkit and a single view of the change portfolio raises the floor of every change without adding bureaucracy.

                ## Milestones
                1. A remit for the change office agreed with the executive team, including what it does and does not do.
                2. A common method with a small toolkit of templates for impact, readiness, communication and adoption.
                3. A portfolio view of all significant changes and their people impacts.
                4. The method reviewed each quarter with programme leads and updated.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A change office remit is agreed, a common method and toolkit are in use by at least three programmes, and a quarterly method review is running."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Collect the templates each current programme uses for change work"
                - "Draft a change office remit with clear limits for the executive team"
                - "Assemble a toolkit of five or six common templates"
                - "Review the method with programme leads @recurring(quarterly)"
            - name: Linking adoption to benefits realisation
              description: |-
                ## Purpose
                Business cases promise savings or revenue that only arrive if people actually work the new way, yet benefits and adoption are often tracked by different teams who never compare notes. Connecting each promised benefit to the adoption measures it depends on shows finance and the sponsor why a benefit is late and what would bring it forward.

                ## Milestones
                1. Every benefit in the business case listed with its owner and expected timing.
                2. Each benefit linked to the adoption measures it depends on.
                3. A joint quarterly review of benefits and adoption with finance.
                4. At least one corrective action taken on a benefit that is behind because adoption is behind.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every business case benefit is linked to its adoption measures and reviewed quarterly with finance, with corrective actions recorded."
                cadence: cyclic
              tasks:
                - "Get the list of promised benefits and owners from the business case"
                - "Link each benefit to the adoption measures it depends on"
                - "Hold the joint benefits and adoption review with finance @recurring(quarterly)"
                - "Raise a corrective action for any benefit delayed by slow adoption"
            - name: Change leadership skills for line managers
              description: |-
                ## Purpose
                Most organisations face continuous change, and the people who make or break each one are line managers, yet few are taught how to lead it. A short, practical programme covering explaining change, coaching through transition, handling resistance and reinforcing new habits builds a capability that outlasts any single programme.

                ## Milestones
                1. Three or four short modules designed around real changes managers are facing.
                2. A first cohort of ten to twenty managers completing the programme.
                3. A monthly practice circle where managers bring live change challenges.
                4. Feedback from cohort members and their teams used to refine the programme.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first cohort of ten to twenty managers has completed a change leadership programme, and a monthly practice circle is running."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Ask five managers which part of leading change they find hardest"
                - "Outline three or four short modules around those challenges"
                - "Recruit a first cohort of ten to twenty managers"
                - "Host the monthly practice circle on live change challenges @recurring(monthly:22)"
            - name: Change retrospective and lessons library
              description: |-
                ## Purpose
                Organisations repeat the same change mistakes, such as late manager briefings, training too early or no plan to retire the old system, because lessons stay in the heads of people who move on. A structured retrospective at the end of each major change, stored in a searchable library, gives the next change lead a head start.

                ## Milestones
                1. A retrospective held with the sponsor, change team, champions and a sample of staff.
                2. Lessons written as specific, reusable advice rather than general observations.
                3. Lessons stored in a shared library tagged by change type and theme.
                4. The library consulted at the start of the next major change.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A retrospective has produced specific lessons stored in a tagged library, and the next major change lead has reviewed it at kick-off."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Invite the sponsor, change team, champions and staff to a retrospective"
                - "Write each lesson as advice the next change lead could act on"
                - "Tag and store the lessons in a shared library"
                - "Send the library link to whoever leads the next major change"
---

# Organisational Change Management

This area is for the manager, change lead or team asked to take people through a significant change, such as a new system, a new process, a move or a new way of working, and to have it adopted rather than merely announced. It starts with the foundations (the change definition, the sponsor, impact, affected groups, readiness, the case for change, the plan, the resistance register and the adoption baseline), then the operating machinery of champions, communication, feedback and measurement, the skills of a good change practitioner, the decisions on rollout, pilots, incentives and retiring the old way, the dated moments from announcement to close-out, situations such as job changes, union consultation or shift-based teams, and finally the specialist work of a change office, benefits tracking and building change capability.

What repeats is the change rhythm: a weekly sponsor check-in, weekly messages, question log and resistance huddle, monthly champion calls, manager briefing packs, adoption reviews, load heatmaps and sustainment checks, and a quarterly pulse survey. The **Risk register**, **Meeting notes**, **Feedback themes**, **Metrics log**, **Training program** and **Purchase decision** templates pair with the resistance register, the sponsor check-in, the question log, the adoption review, role-based training and the choice of a tracking tool. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
