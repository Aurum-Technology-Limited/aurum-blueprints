---
id: sales-revenue.deal-stakeholder-mapping
name: Deal Stakeholder Mapping
description: "A working map of every buying group: shared role definitions, stance and influence scores, veto lists, weekly chases of unmet stakeholders, person-by-person win plans and the analysis that shows how much coverage deals need."
category: business
version: 1.0.0
tags: [sales-revenue, deal-stakeholder-mapping, team, enterprise, buying-committee, stakeholders, multi-threading, deal-strategy]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - person
    - purchase-decision
    - risk-register
    - metrics-log
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Deal Stakeholder Mapping
          description: "Mapping buyers, influencers, blockers and champions inside each deal, and planning how to win over every person who can say no."
          projects:
            - name: Stakeholder map template for every deal
              description: |-
                ## Purpose
                Sellers who keep stakeholders in their heads lose the picture the moment a deal passes thirty days or changes hands. One map template with the same columns for name, title, role in the decision, stance, influence, what they need and who on your side owns the relationship lets anyone on the deal team read the buying group in two minutes. Building it once saves every seller from inventing a format on a live deal.

                ## Milestones
                1. A template with columns for name, title, decision role, stance, influence, personal win, last contact and relationship owner.
                2. A short legend explaining each stance and influence value.
                3. One worked example filled from a recent closed deal.
                4. The template saved where every seller and sales engineer can copy it.

                ## Notes
                Record professional facts and observed behaviour only. Personal gossip has no place on a map a buyer could one day see, and data protection rules apply to notes about people.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stakeholder map template with eight fixed columns, a legend and one worked example is stored where the whole deal team can copy it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect the stakeholder notes from three recent deals and compare what was captured"
                - "Draft the eight-column map template with a stance and influence legend"
                - "Fill one worked example from a deal closed in the last two quarters"
                - "Review the template columns with two sellers and a sales engineer @recurring(yearly)"
            - name: Shared definitions of buying roles
              description: |-
                ## Purpose
                When one rep calls someone the decision maker and another means the person who signs, deal reviews turn into arguments about words. Writing house definitions for economic buyer, decision maker, technical evaluator, user buyer, influencer, coach, champion, blocker and veto holder, each with one observable test, makes every map mean the same thing across the team.

                ## Milestones
                1. Nine buying roles defined in one sentence each.
                2. An observable test for each role, such as 'has approved spend of this size before'.
                3. Agreement on the wording from the sales manager and two senior sellers.
                4. The definitions pinned beside the map template.

                ## Notes
                One person can hold two roles. Record both rather than forcing a single label.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Written definitions with an observable test for nine buying roles, agreed by the sales manager and pinned beside the map template."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the role labels sellers currently use in deal notes and the CRM"
                - "Write a one-sentence definition and one observable test for each role"
                - "Agree the wording with the sales manager and two senior sellers"
                - "Pin the definitions next to the stakeholder map template"
            - name: Stance and influence scale for stakeholders
              description: |-
                ## Purpose
                Labels such as 'positive' or 'warm' tell a manager nothing about whether a deal will close. A five-point stance scale from active supporter to active opponent, crossed with a three-level influence score, turns each person into a position on a grid, and the grid shows at a glance where the deal is exposed.

                ## Milestones
                1. A five-point stance scale with a behaviour that defines each point.
                2. A three-level influence score based on evidence, not job title alone.
                3. A grid view that plots each stakeholder by stance and influence.
                4. The scale tested on two live deals and adjusted where sellers disagreed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every stakeholder on two live deals scored on the five-point stance scale and three-level influence score, plotted on one grid."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a behaviour that defines each of the five stance points"
                - "Set the evidence needed for high, medium and low influence"
                - "Plot every stakeholder on two live deals on the stance and influence grid"
                - "Adjust any point on the scale that two sellers scored differently"
            - name: Stakeholder coverage audit of late-stage deals
              description: |-
                ## Purpose
                Before changing anything, find out how thin coverage really is. Counting, for every deal in the last two stages, how many buyer contacts are named, how many anyone has met and whether the person who signs has been spoken to often shows that many late deals rest on a single person.

                ## Milestones
                1. Every late-stage deal listed with named contacts, contacts met and whether the signer has been met.
                2. Deals with only one engaged contact flagged.
                3. The audit compared with the outcome of deals that closed in the last two quarters.
                4. Three findings shared with the sales manager.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page audit of every late-stage deal showing contacts named, contacts met and signer contact, with three findings shared."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export every deal in the last two stages with its linked contacts"
                - "Count named contacts, contacts met and signer contact for each deal"
                - "Flag every deal with only one engaged buyer contact"
                - "Share three findings from the audit with the sales manager"
            - name: Contact roles and stance fields in the CRM
              description: |-
                ## Purpose
                Maps kept in slides and personal notebooks vanish when a rep leaves and never appear in forecasts. Adding contact role, stance, influence and relationship owner fields to the opportunity's contact list puts the map where managers and reports can see it, and lets the team count coverage instead of guessing.

                ## Milestones
                1. Contact role values in the CRM matching the house role definitions.
                2. Stance, influence and relationship owner fields added at the deal contact level.
                3. A deal view showing the whole buying group on one screen.
                4. Fields filled on every open deal above the team's size threshold.

                ## Notes
                Ask whoever administers the CRM to make the changes. Keep new fields to four or fewer so sellers actually fill them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four stakeholder fields exist at deal contact level in the CRM and are filled on every open deal above the agreed size threshold."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check which contact role fields the CRM already offers on opportunities"
                - "Ask the CRM administrator to add stance, influence and relationship owner fields"
                - "Build a deal view that lists the buying group on one screen"
                - "Fill the new fields on every open deal above the size threshold"
            - name: First full stakeholder map on a live deal
              description: |-
                ## Purpose
                Reading about mapping is no substitute for doing it on a deal with real money attached. Picking one active opportunity and mapping everyone involved, including people you have only heard named, usually reveals two or three stakeholders nobody has contacted and at least one whose stance is a guess.

                ## Milestones
                1. One live deal chosen with a clear reason for mapping it first.
                2. Every person mentioned in calls, emails and documents added to the map.
                3. Each person given a role, stance and influence score with the evidence noted.
                4. Three gaps identified, each with a planned action.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One live deal has a complete stakeholder map with evidence for every score and an action against each of three named gaps."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the live deal you most need to understand"
                - "Search the call notes and email threads for every person mentioned by name"
                - "Score each person's role, stance and influence and note the evidence"
                - "Plan one action for each of the three biggest gaps"
            - name: Buyer organisation chart around the buying unit
              description: |-
                ## Purpose
                Stakeholder maps start with the people you have met, which is exactly why they miss the ones who matter. Drawing the reporting lines around the buying unit, two levels up and one across, from public profiles, company announcements and what contacts tell you, shows whose budget it is and who sits between your contact and the signature.

                ## Milestones
                1. The buying unit's reporting lines drawn two levels above your main contact.
                2. Neighbouring teams the purchase affects added, such as IT, finance and operations.
                3. Each name marked as confirmed by a contact or inferred from public sources.
                4. The chart checked with your main contact and corrected.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An organisation chart covering two levels above the main contact and the affected neighbouring teams, with each name marked confirmed or inferred."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather public profiles and announcements for the buying unit's leaders"
                - "Ask the agent to draft a first chart from the profiles and announcements you paste in"
                - "Mark each name on the chart as confirmed or inferred"
                - "Walk your main contact through the chart and correct it"
            - name: Veto list of everyone who can say no
              description: |-
                ## Purpose
                Deals are rarely lost to the person who says yes loudest. They die quietly with the security lead, an employee representative body, the finance controller or the incumbent's sponsor. Listing every person and group with the power to stop or delay this purchase, and the stage at which you will hear from each, turns hidden risk into named work.

                ## Milestones
                1. Every person or group that can stop or delay the purchase listed by name or function.
                2. The basis of each veto noted: budget, policy, technical, legal or political.
                3. The stage at which each veto holder will weigh in.
                4. An owner on your side for every veto holder.

                ## Notes
                Ask your contact directly: 'Who could stop this even if everyone in this room wanted it?' It is the single most useful mapping question.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every open deal above the size threshold has a written veto list naming each blocker's basis, timing and owner."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your main contact who could stop the purchase even with full support"
                - "List each veto holder with the basis of their veto"
                - "Note the stage at which each veto holder will weigh in"
                - "Assign an owner on your team to every name on the list"
            - name: Relationship owner pairing across both teams
              description: |-
                ## Purpose
                When every buyer contact talks only to the account executive, the deal stalls the week that person is on holiday. Pairing each important stakeholder with one owner on your side, sales engineer with the technical lead, your executive with theirs, customer success with the future users, spreads the relationships and puts the right peer in each conversation.

                ## Milestones
                1. Each stakeholder with medium or high influence paired with one owner from your team.
                2. Each owner briefed on what their stakeholder needs and their current stance.
                3. Pairings visible on the stakeholder map.
                4. Every owner in contact with their stakeholder within three weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every medium and high influence stakeholder on the deal has a named owner on your side who made contact within three weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pair each medium and high influence stakeholder with one owner on your team"
                - "Send each owner a five-line brief on their stakeholder"
                - "Add the pairings to the relationship owner column on the map"
                - "Check every pairing has had contact in the past month @recurring(monthly:12)"
            - name: Same-day map update after buyer meetings
              description: |-
                ## Purpose
                Every call reveals something about the buying group: a new name, a shift in tone, a mention of the boss's priorities. Updating the map the same day, while details are fresh, keeps it accurate for under five minutes per meeting, where a monthly rebuild takes an hour and misses half of it.

                ## Milestones
                1. A five-minute map update block after every buyer meeting.
                2. New names, stance changes and telling quotes captured within the day.
                3. A Friday catch-up slot for anything missed.
                4. Four consecutive weeks with no buyer meeting left unrecorded on the map.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks in which every buyer meeting produced a same-day update to the stakeholder map."
                cadence: rolling
              tasks:
                - "Add a five-minute map update block after each buyer meeting in your calendar"
                - "Record any new name, stance shift or telling quote the day it happens"
                - "Catch up the map for any meeting left unrecorded this week @recurring(weekly:fri)"
            - name: Monday chase of stakeholders nobody has met
              description: |-
                ## Purpose
                The most dangerous names on a map are the ones nobody on your team has spoken to. Pulling a short list each Monday of influential stakeholders without a meeting, and choosing one route to each, keeps coverage moving every week instead of only when a deal review exposes the gap.

                ## Milestones
                1. A weekly list of unmet high and medium influence stakeholders across open deals.
                2. A route chosen for each: an introduction, an event, peer outreach or a reason to meet.
                3. At least two unmet stakeholders contacted each week.
                4. The unmet count lower after eight weeks than at the start.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly chase lists produced, with at least two unmet stakeholders contacted each week and the unmet count lower at the end."
                cadence: rolling
              tasks:
                - "Filter open deals for high and medium influence stakeholders nobody has met"
                - "Pick one route to each unmet stakeholder on the list @recurring(weekly:mon)"
                - "Ask for at least two introductions or meetings this week"
                - "Count the unmet stakeholders at the end of each month"
            - name: Stance change log for active deals
              description: |-
                ## Purpose
                Stance scores drift silently: a supporter cools after a poor demo, a neutral finance lead warms after the business case. Logging each change with its date, cause and evidence makes the trend visible, and three negative moves in a fortnight is an early warning worth more than any forecast category.

                ## Milestones
                1. A change log on each map with date, person, old stance, new stance and cause.
                2. Every stance change backed by an observed behaviour or quote.
                3. Weekly entries for every active deal above the threshold.
                4. Negative moves reviewed with the deal team within a week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each active deal above the threshold has a stance change log with dated, evidenced entries reviewed weekly for eight weeks."
                cadence: rolling
              tasks:
                - "Add a change log section to the stakeholder map template"
                - "Record each stance change with its date, cause and evidence @recurring(weekly:thu)"
                - "Raise any negative move with the deal team within a week"
            - name: Stakeholder questions in monthly deal reviews
              description: |-
                ## Purpose
                Managers who inspect deals by close date and amount alone miss the commonest reason for slippage: nobody senior has agreed. Opening each monthly deal review with the map, asking who signs, who has not been met and who opposes, makes coverage part of how deals are judged and coaches sellers to arrive prepared.

                ## Milestones
                1. Three standard stakeholder questions on the deal review agenda.
                2. Maps reviewed each month for every deal above the threshold.
                3. One coverage action agreed per deal reviewed.
                4. Last month's coverage actions checked at the start of each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly deal reviews that opened with the stakeholder map and recorded one coverage action per deal."
                cadence: rolling
              tasks:
                - "Write the three stakeholder questions into the deal review agenda"
                - "Review the map for every deal above the threshold @recurring(monthly:9)"
                - "Agree and record one coverage action per deal"
                - "Open each review by checking last month's coverage actions"
            - name: Job change and stale contact sweep
              description: |-
                ## Purpose
                Buyers change roles, leave and get promoted mid-deal, and a map that still lists last quarter's IT director is worse than none. A weekly scan of job change alerts for named stakeholders, plus a monthly check of titles and employers, catches departures while there is still time to rebuild the thread.

                ## Milestones
                1. Job change alerts set up for every high-influence stakeholder.
                2. A monthly sweep that checks titles and employers against the map.
                3. Departed or moved stakeholders marked and their replacements identified.
                4. Any departing supporter raised with the deal team within two days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly sweeps completed, with every departed stakeholder marked and a replacement identified within two weeks."
                cadence: rolling
              tasks:
                - "Set job change alerts for every high-influence stakeholder on open deals"
                - "Scan the week's job change alerts for named stakeholders @recurring(weekly:wed)"
                - "Check titles and employers on every map against public profiles @recurring(monthly:17)"
                - "Identify the replacement for any departed stakeholder within two weeks"
            - name: Quarterly map accuracy check against outcomes
              description: |-
                ## Purpose
                Maps are opinions until a deal closes. Each quarter, comparing the maps of won and lost deals with what really happened (who signed, who blocked, whose view decided it) shows whether the team's stance and influence scores can be trusted, and which kinds of stakeholder sellers tend to misread.

                ## Milestones
                1. Maps collected for every deal closed in the quarter.
                2. The actual signer, decider and any blocker recorded beside each map.
                3. Misread stakeholders listed with the kind of misreading.
                4. One adjustment to the scale or definitions agreed each quarter.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four quarterly checks completed, each comparing closed-deal maps with real outcomes and recording one change to scoring or definitions."
                cadence: cyclic
              tasks:
                - "Collect the stakeholder maps of every deal closed this quarter @recurring(quarterly)"
                - "Record who actually signed, decided and blocked on each deal"
                - "List the stakeholders the team misread and how"
                - "Agree one change to the scale or role definitions"
            - name: Touch plan for each person in the buying group
              description: |-
                ## Purpose
                Strong deals have a planned touch with every important stakeholder, not only the one who answers emails. Setting a rhythm per person, weekly for the champion, fortnightly for the technical lead, monthly for the signer, with a useful reason each time, keeps the buying group engaged without flooding anyone's inbox.

                ## Milestones
                1. A contact rhythm set for every medium and high influence stakeholder.
                2. A list of useful reasons to get in touch: an insight, evidence, a question, an introduction.
                3. The rhythm kept for two months on every deal above the threshold.
                4. Silent stakeholders flagged after two missed touches.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two months of touches logged against the set rhythm for every medium and high influence stakeholder on deals above the threshold."
                cadence: rolling
              tasks:
                - "Set a contact rhythm for each medium and high influence stakeholder"
                - "Write a list of ten useful reasons to get in touch with a buyer"
                - "Compare the month's touches with the rhythm and flag silent stakeholders @recurring(monthly:23)"
            - name: Attendee briefing for the week's buyer meetings
              description: |-
                ## Purpose
                Walking into a meeting without knowing who will be in the room, what each person cares about and where they stand wastes the one hour you have with them. A weekly briefing that pulls each attendee's role, stance, last interaction and the move you want from them makes every meeting shift someone on the map.

                ## Milestones
                1. A one-page briefing format with attendee, role, stance, last contact and desired move.
                2. A briefing prepared for every buyer meeting in the coming week.
                3. Unexpected attendees added to the map after each meeting.
                4. Eight weeks of briefings kept.

                ## Notes
                Start from the **Meeting notes** template and add the attendee table at the top.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks in which every buyer meeting had a prepared attendee briefing naming the desired move for each person."
                cadence: rolling
              tasks:
                - "Create a briefing format from the meeting notes template with an attendee table"
                - "Ask the agent to turn one stakeholder map into a sample attendee briefing"
                - "Prepare a briefing for every buyer meeting in the coming week @recurring(weekly:sun)"
                - "Write the move you want from each attendee before the meeting starts"
            - name: Questions that surface everyone involved
              description: |-
                ## Purpose
                Asking 'who is the decision maker?' invites a polite half-answer, usually your contact's own name. Learning better questions (how the last similar purchase was approved, who will use this every day, whose budget it comes from, who would be unhappy if it went ahead) gets a fuller picture without sounding like an interrogation.

                ## Milestones
                1. Twelve questions written that reveal people, budget and approvals.
                2. The questions practised in two role plays with a colleague.
                3. At least four used on live calls within a month.
                4. The questions that revealed new names marked as favourites.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A twelve-question list used on live calls, with at least two new stakeholders discovered through it within a month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write twelve questions that surface people, budget and approvals"
                - "Role play the questions twice with a colleague acting as the buyer"
                - "Use at least four of the questions on live calls this month"
                - "Mark the questions that revealed a new name"
            - name: Formal authority versus real influence
              description: |-
                ## Purpose
                Titles describe who should decide; history shows who does. Some vice presidents approve whatever a trusted architect recommends, and some managers carry more weight than their rank because they ran the last successful project. Learning the signs of real influence (who others defer to, who gets copied in, whose objections end discussions) makes influence scores evidence-based.

                ## Milestones
                1. Six signs of informal influence written down from reading and experience.
                2. Two past deals reviewed where title and influence differed.
                3. Influence scores on one live deal revised using the signs.
                4. A short note on the findings shared with the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Influence scores on one live deal revised against six written signs of informal influence, with the reasoning shared with the team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write six signs that a person has influence beyond their title"
                - "Review two past deals where the real decider was not the most senior person"
                - "Revise the influence scores on one live deal using the signs"
                - "Share a short note on the findings in the team channel"
            - name: Personal wins behind each stakeholder's position
              description: |-
                ## Purpose
                Companies buy for business reasons, but people back or block a purchase for personal ones: a promotion case, fewer weekend call-outs, fear of a failed rollout on their record, a rival's project winning the budget. Learning to identify each person's personal win, respectfully and from what they say, explains stances the business case alone cannot.

                ## Milestones
                1. A personal win column added to the map.
                2. A personal win recorded for every high-influence stakeholder on two deals, each tied to something they said or did.
                3. One message or meeting reshaped around a stakeholder's personal win.
                4. Every guess clearly marked as unconfirmed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every high-influence stakeholder on two live deals has an evidenced personal win recorded, with one interaction reshaped around it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a personal win column to your stakeholder map"
                - "Record an evidenced personal win for each high-influence stakeholder on two deals"
                - "Reshape one upcoming message around a stakeholder's personal win"
                - "Mark every unconfirmed guess clearly on the map"
            - name: What finance, IT and operations each need to agree
              description: |-
                ## Purpose
                Each function judges a purchase by its own test. Finance asks about payback and budget timing, IT about integration and support load, security about data and access, operations about disruption, and users about whether their day gets easier. Knowing those tests in advance lets you prepare evidence for each stakeholder before they ask, rather than after they object.

                ## Milestones
                1. The main concern of five functions written down with the evidence that satisfies each.
                2. Each high-influence stakeholder on a live deal matched to their function's concern.
                3. Evidence ready for at least three functions before the proposal stage.
                4. A one-page guide shared with the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide covering five functions' concerns and the evidence for each, applied to one live deal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Interview a colleague from your own finance team and one from IT about how they judge a purchase"
                - "Write each function's main concern and the evidence that answers it"
                - "Match each stakeholder on one live deal to their function's concern"
                - "Share the one-page guide with the team"
            - name: Researching a stakeholder before first contact
              description: |-
                ## Purpose
                Ten minutes of preparation before contacting a new stakeholder changes the first conversation from 'tell me about your role' to something useful. A quick research routine (public profile, recent posts, the company's latest results or announcements, shared connections) gives you a reason to talk and a fair guess at their priorities.

                ## Milestones
                1. A ten-minute research routine written as a checklist.
                2. Profiles kept for five new stakeholders using the routine.
                3. One opening line per stakeholder drawn from the research.
                4. The routine trimmed after five uses.

                ## Notes
                Start from the **Person** template for each stakeholder profile. Use only public, professional information.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five new stakeholders researched with the ten-minute routine, each with a profile and a tailored opening line."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a ten-minute research checklist for a new stakeholder"
                - "Create a profile from the person template for each of the next five new stakeholders"
                - "Draft one opening line per stakeholder from the research"
                - "Cut any checklist step that never produced anything useful"
            - name: Asking your contact to introduce you upwards
              description: |-
                ## Purpose
                Your first contact often fears that going above them will make them look small or cost them control of the project. Learning to ask for upward introductions in a way that helps them (offering to brief their boss together, sharing material they can present, framing it as protecting their recommendation) opens doors without burning the relationship.

                ## Milestones
                1. Three ways of asking for an upward introduction written in your own words.
                2. A reply prepared for 'I would rather handle that myself'.
                3. The ask practised in a role play.
                4. One upward introduction requested on a live deal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One upward introduction requested on a live deal using a prepared approach, with the outcome recorded on the map."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write three ways to ask for an introduction to your contact's manager"
                - "Prepare a reply for a contact who wants to handle it alone"
                - "Practise the ask in a role play with your manager"
                - "Request one upward introduction on a live deal and record the outcome"
            - name: Finding out why a blocker opposes the deal
              description: |-
                ## Purpose
                Opposition usually has a reason that makes sense from where the blocker sits: a preferred vendor, a project that loses budget, a bad experience with a similar tool, being left out of the evaluation. Learning to find that reason through a direct, curious conversation, rather than working around the person, turns some blockers neutral and makes the rest predictable.

                ## Milestones
                1. A short list of common reasons for opposition written down.
                2. Open questions prepared for a one-to-one conversation with a blocker.
                3. One blocker met and their reason recorded in their own words.
                4. A response planned that addresses the reason, not the symptom.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One blocker on a live deal met one to one, with their stated reason recorded and a response planned."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the five most common reasons stakeholders oppose a purchase like yours"
                - "Prepare open questions for a one-to-one conversation with a blocker"
                - "Request a short meeting with one blocker on a live deal"
                - "Record their reason in their own words and plan a response"
            - name: Reading alliances and rivalries in the buying group
              description: |-
                ## Purpose
                Buying groups are not neutral panels. The operations director and the IT director may be competing for the same budget, two business units may share a history, and a new executive may want to replace a predecessor's choices. Learning to spot these relationships from meeting dynamics and what contacts mention explains why some stakeholders move together.

                ## Milestones
                1. Lines drawn on the map between stakeholders who align or clash.
                2. Each line backed by an observation, such as who defers to whom in meetings.
                3. One alliance used to bring a neutral stakeholder closer.
                4. One rivalry handled so your proposal does not become a proxy fight.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One live deal's map shows evidenced alliance and rivalry lines, with one alliance used and one rivalry managed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draw alliance and rivalry lines on one live deal's map"
                - "Note the observation behind each line"
                - "Ask your coach which stakeholders usually side with each other"
                - "Plan how to keep your proposal out of any rivalry you found"
            - name: Win plan for each person who can say no
              description: |-
                ## Purpose
                Knowing someone is neutral is only useful if there is a plan to move them. Writing a three-line plan per veto holder and high-influence stakeholder (where they stand now, what would move them one step, who on your team will do it and by when) turns the map from a picture into actions a manager can check.

                ## Milestones
                1. A three-line plan for every veto holder and high-influence stakeholder.
                2. Each plan with a named owner and a target date.
                3. Plans reviewed with the deal team every week.
                4. At least one stakeholder moved one stance point within a month.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every veto holder and high-influence stakeholder on the deal has a dated three-line plan, with at least one stance moved within a month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a three-line plan for each veto holder and high-influence stakeholder"
                - "Name an owner and target date for every plan"
                - "Review the person-by-person plans with the deal team @recurring(weekly:tue)"
                - "Record each stance change the plans produce"
            - name: Engage, contain or go around a blocker
              description: |-
                ## Purpose
                Not every blocker can be won, and weeks spent courting an immovable opponent come out of other deals. Deciding deliberately between engaging them directly, containing their influence through allies or escalating to someone with more authority, with the risks of each written down, stops the team drifting into whichever option feels least awkward.

                ## Milestones
                1. The blocker's basis, influence and likely persistence written down.
                2. Three options compared by their risk to the relationship and the deal.
                3. A decision recorded with the reason and the person accountable.
                4. The decision revisited after the next contact with the blocker.

                ## Notes
                Going around a blocker is sometimes right, but they usually find out. Assume they will, and act in a way you could explain to them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision between engaging, containing or going around a named blocker, with the reason and an accountable person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the blocker's basis, influence and likely persistence"
                - "Compare engaging, containing and escalating with the risk of each"
                - "Agree the decision with your manager and record who is accountable"
                - "Revisit the decision after the next contact with the blocker"
            - name: Choosing a relationship mapping tool
              description: |-
                ## Purpose
                Spreadsheets work for a handful of deals, but a team running dozens of enterprise opportunities may want maps drawn inside the CRM, org chart data or relationship intelligence that shows who knows whom. Comparing two or three options against what the team will actually maintain avoids paying for diagrams nobody updates.

                ## Milestones
                1. Requirements written: CRM link, visual chart, sharing, data source and a price ceiling.
                2. Two or three tools trialled on the same live deal.
                3. Each tool scored against the requirements by two sellers.
                4. A decision recorded to buy, extend the CRM or stay with the template.

                ## Notes
                Start from the **Purchase decision** template. Check what any tool does with contact data before loading buyer names into it.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to buy a mapping tool, extend the CRM or keep the template, based on a trial of at least two options."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write requirements for a mapping tool with a price ceiling"
                - "Trial two or three options on the same live deal"
                - "Ask two sellers to score each tool against the requirements"
                - "Record the decision with the reason and the cost"
            - name: Minimum stakeholder coverage rule by deal size
              description: |-
                ## Purpose
                A small deal can close with one enthusiastic buyer; a deal fifty times larger almost never does. Setting a minimum number of engaged stakeholders for each deal size band, and which roles must be among them, gives sellers a clear target and managers a fair test, instead of a vague instruction to talk to more people.

                ## Milestones
                1. Three or four deal size bands agreed.
                2. A minimum count of engaged stakeholders and required roles set for each band.
                3. Current open deals checked against the rule.
                4. The rule written into the sales playbook or deal review agenda.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written coverage rule giving minimum engaged stakeholders and required roles for each deal size band, checked against open deals."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree three or four deal size bands with the sales manager"
                - "Set the minimum engaged stakeholders and required roles for each band"
                - "Check every open deal against the new rule"
                - "Revisit the bands and minimums against last year's wins @recurring(yearly)"
            - name: Stakeholder evidence before a proposal goes out
              description: |-
                ## Purpose
                Proposals sent before the signer and the main veto holders have been met tend to sit unread or get picked apart by people who never saw the case. Agreeing the stakeholder evidence a deal needs before a proposal leaves (signer met, veto list complete, coach has reviewed the map) saves writing time on deals that are not ready.

                ## Milestones
                1. Three to five evidence requirements agreed for the proposal stage.
                2. A short checklist added to the proposal request process.
                3. The checklist applied to the next five proposals.
                4. Proposals sent without the evidence tracked and their outcome noted.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stakeholder evidence checklist applied to five consecutive proposals, with the outcome of any exceptions recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft three to five stakeholder evidence requirements for the proposal stage"
                - "Agree the requirements with the sales manager and whoever writes proposals"
                - "Apply the checklist to the next five proposals"
                - "Note the outcome of any proposal sent without the evidence"
            - name: Map review with your inside coach
              description: |-
                ## Purpose
                Your view of the buying group is built from outside the building. Walking a trusted contact through a simplified map (roles, who is for and against, who is missing) corrects mistakes that would otherwise surface at the worst moment, and often produces names you have never heard.

                ## Milestones
                1. A simplified, shareable map with no internal scoring language.
                2. A thirty-minute review held with your coach.
                3. Corrections and new names added within a day.
                4. A second review planned for the final month of the deal.

                ## Notes
                Leave influence scores and personal wins out of anything a buyer sees. Show roles and open questions only.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A thirty-minute map review held with an inside coach, with corrections and new names added to the map within a day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Prepare a simplified map showing roles and open questions only"
                - "Ask your coach for thirty minutes to check you have the right people"
                - "Add every correction and new name within a day"
                - "Book a second review for the deal's final month"
            - name: Stakeholder risks in the deal risk register
              description: |-
                ## Purpose
                Most deal risks are people risks: a champion who might leave, a signer nobody has met, a security lead who has blocked before. Writing each one into a risk register with likelihood, impact and a mitigation keeps them visible to managers and shows which deals carry the same exposure.

                ## Milestones
                1. Every stakeholder risk on the deal written into a risk register.
                2. Likelihood, impact and a mitigation recorded for each.
                3. An owner named for each mitigation.
                4. The register reviewed monthly and closed risks marked.

                ## Notes
                Start from the **Risk register** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every open deal above the threshold has its stakeholder risks in a register with likelihood, impact, mitigation and owner, reviewed monthly."
                cadence: rolling
              tasks:
                - "Create a risk register for your largest open deal from the template"
                - "Write each stakeholder risk with likelihood, impact and mitigation"
                - "Assign an owner to every mitigation"
                - "Review stakeholder risks and close those resolved @recurring(monthly:4)"
            - name: Stakeholder mapping session with the deal team
              description: |-
                ## Purpose
                Each person on a deal team sees a different slice of the buyer: the sales engineer hears the technical politics, the executive sponsor hears the board's priorities, the prospecting rep knows who replied first. A ninety-minute session to build one shared map, before the deal enters evaluation, combines those slices and produces actions for each person.

                ## Milestones
                1. The session booked with everyone who has spoken to the buyer.
                2. One shared map built during the session.
                3. Gaps and an owner for each gap agreed before the session ends.
                4. The map and actions sent to all attendees the same day.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A ninety-minute session held with everyone who has spoken to the buyer, producing one map and owned actions sent the same day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List everyone on your side who has spoken to anyone at the buyer"
                - "Book a ninety-minute mapping session before the evaluation stage"
                - "Build the shared map live and assign an owner to each gap"
                - "Send the map and actions to all attendees the same day"
            - name: First meeting with the person who signs
              description: |-
                ## Purpose
                Many sellers meet the economic buyer once, late, at a meeting someone else arranged. Preparing a short first meeting deliberately (what they are measured on, the outcome they care about, two questions only they can answer, what you will ask them to do next) makes it the meeting that moves the deal rather than a courtesy call.

                ## Milestones
                1. The signer's priorities researched and confirmed with your coach.
                2. A one-page plan for a twenty to thirty minute meeting.
                3. Two questions prepared that only the signer can answer.
                4. A next step agreed with the signer and recorded on the map.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first meeting held with the signer, with their answers to two prepared questions and an agreed next step recorded on the map."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your coach what the signer is measured on this year"
                - "Write a one-page plan for a thirty-minute meeting with the signer"
                - "Prepare two questions only the signer can answer"
                - "Record the signer's answers and agreed next step on the map"
            - name: Stakeholder interview week at evaluation start
              description: |-
                ## Purpose
                Evaluations often run through one coordinator who filters what each department wants. Requesting a week of twenty-minute interviews with six to eight stakeholders across the affected functions, framed as making sure the solution fits everyone, gives you first-hand criteria and stance for each person and a reason to be in touch later.

                ## Milestones
                1. The interview request agreed with your main contact, framed around fit.
                2. Six to eight interviews booked across at least three functions.
                3. Each interviewee's priorities, concerns and stance recorded on the map the same day.
                4. A summary of what each function needs sent back to your contact.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Six to eight stakeholder interviews held across at least three functions within one week, each recorded on the map."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your main contact to support a week of short stakeholder interviews"
                - "Book six to eight twenty-minute interviews across three functions"
                - "Record each interviewee's priorities, concerns and stance the same day"
                - "Send your contact a summary of what each function needs"
            - name: Team workshop on stakeholder mapping
              description: |-
                ## Purpose
                A template and definitions only change behaviour when the team has used them together on real deals. A half-day workshop where each seller maps one live deal, swaps it with a colleague for challenge and leaves with three actions builds a shared habit faster than any written guide.

                ## Milestones
                1. A half-day agenda with a short teach, live mapping and peer challenge.
                2. Every seller arriving with one live deal to map.
                3. Each seller leaving with a completed map and three actions.
                4. Actions checked in the following month's deal reviews.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A half-day workshop held in which every seller completed a live deal map and committed to three actions, checked a month later."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a half-day agenda with teach, live mapping and peer challenge"
                - "Ask each seller to bring one live deal they find hard to read"
                - "Pair sellers to challenge each other's maps"
                - "Run the workshop again for new joiners @recurring(yearly)"
            - name: Stakeholder map handover at contract signature
              description: |-
                ## Purpose
                The people who shaped the purchase decide whether the rollout is judged a success, yet the delivery team usually starts with only a sponsor's name. Handing over the map at signature, with who supported, who resisted and what each was promised, lets implementation and customer success avoid reopening old arguments.

                ## Milestones
                1. A handover version of the map with roles, stance and commitments made to each person.
                2. Resisters and their concerns flagged for the delivery lead.
                3. A thirty-minute handover call held within a week of signature.
                4. The map stored in the customer record for renewal.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A handover map with stances and commitments shared on a call with the delivery lead within a week of signature."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a handover version of the map listing commitments made to each person"
                - "Flag resisters and their concerns for the delivery lead"
                - "Hold a thirty-minute handover call within a week of signature"
                - "Store the map in the customer record ready for renewal"
            - name: Stakeholder mapping in your first quarter as a seller
              description: |-
                ## Purpose
                New account executives inherit a pipeline full of single names and stale contacts and are expected to forecast it within weeks. Mapping your five largest deals in the first month, with help from colleagues who know the accounts, gives you an honest view of what can close and a reason to meet every buyer as the new face.

                ## Milestones
                1. Your five largest deals mapped in the first month.
                2. Each map reviewed with someone who has history on the account.
                3. A meeting requested with at least two stakeholders per deal.
                4. Maps for every deal in your pipeline by the end of the quarter.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Maps for the five largest deals within thirty days and for the whole pipeline within ninety, each reviewed with a colleague."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick your five largest deals to map in the first month"
                - "Ask a colleague with account history to review each map with you"
                - "Request a meeting with two stakeholders on each deal as the new owner"
                - "Map the rest of your pipeline before the quarter ends"
            - name: Re-introducing yourself on an inherited deal
              description: |-
                ## Purpose
                When a deal changes hands, the buyer's trust often stays with the departing seller and some stakeholders quietly assume the deal is over. Treating the handover as a reason to meet everyone on the map, confirm their stance and correct the previous seller's assumptions keeps momentum and often finds people the old map missed.

                ## Milestones
                1. The previous seller's map and notes collected, with gaps marked.
                2. A handover call held with the previous seller where possible.
                3. Every stakeholder on the map contacted within three weeks.
                4. The map rewritten from what stakeholders said, not what was inherited.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every stakeholder on the inherited deal contacted within three weeks and the map rewritten from those conversations."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect the previous seller's map, notes and email threads"
                - "Hold a handover call with the previous seller if they are still reachable"
                - "Contact every stakeholder on the inherited map within three weeks"
                - "Rewrite the map from what each stakeholder told you"
            - name: Technical evaluator map for sales engineers
              description: |-
                ## Purpose
                Sales engineers often know the technical buying group better than the account executive: the architect who will veto, the administrator who will run it, the security reviewer who reads every answer. A sales engineer's own layer on the map, with each technical stakeholder's criteria and concerns, stops that knowledge staying in demo notes.

                ## Milestones
                1. Every technical stakeholder listed with role, criteria and concerns.
                2. Each technical concern linked to the evidence that answers it.
                3. The technical layer merged into the shared deal map.
                4. Technical stance changes shared with the account executive the same week.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A technical stakeholder layer with criteria, concerns and evidence for each person, merged into the shared map."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every technical stakeholder you have met or heard named"
                - "Record each person's evaluation criteria and main concern"
                - "Link each concern to the demo, document or reference that answers it"
                - "Merge the technical layer into the shared deal map"
            - name: Stakeholder notes in the sales development handover
              description: |-
                ## Purpose
                Prospecting reps often learn the first names in the buying group: who replied, who forwarded the email, who said to talk to someone else. Adding a short stakeholder section to the meeting handover means account executives start the map on day one instead of rediscovering names in month two.

                ## Milestones
                1. A three-line stakeholder section added to the handover form.
                2. The section covering who replied, who was mentioned and who forwarded.
                3. Account executives confirming the section helped on ten handovers.
                4. Missing sections flagged back to the sales development lead.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten consecutive meeting handovers include a stakeholder section that the account executive confirms was used to start the map."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add a three-line stakeholder section to the meeting handover form"
                - "Show prospecting reps an example of a good stakeholder section"
                - "Ask account executives whether the section helped on the next ten handovers"
                - "Flag missing sections to the sales development lead"
            - name: Twenty-minute map for mid-market deals
              description: |-
                ## Purpose
                Mid-market sellers carrying thirty open deals cannot spend two hours mapping each one, yet their deals still have three to five people who can say no. A twenty-minute version covering signer, champion, user lead, technical approver and anyone who can block gives most of the value for a fraction of the effort.

                ## Milestones
                1. A five-row map format for mid-market deals.
                2. The format used on every new mid-market opportunity for a month.
                3. Average mapping time measured at under twenty minutes.
                4. Deals with an empty signer row flagged in pipeline review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every new mid-market opportunity for a month has a five-row map completed in under twenty minutes on average."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a five-row map for signer, champion, user lead, technical approver and blocker"
                - "Use the five-row map on every new mid-market opportunity this month"
                - "Time a few mapping sessions to check they stay under twenty minutes"
                - "Flag deals with an empty signer row in pipeline review"
            - name: Late-arriving stakeholder in the final month
              description: |-
                ## Purpose
                A new name in the last month, such as a finance controller, a procurement manager or a newly hired head of department, can reset a deal that seemed agreed. A short response routine (find out why they joined, what they need and who brought them in, then meet them within a week) stops a late stakeholder becoming a late veto.

                ## Milestones
                1. Why the new stakeholder joined and who brought them in established.
                2. A meeting held within a week of their arrival.
                3. Their concerns and stance added to the map.
                4. The close plan adjusted for any new step they introduce.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Each late-arriving stakeholder met within a week, with their reason for joining, concerns and stance recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your champion why the new stakeholder has joined and who invited them"
                - "Request a meeting with the new stakeholder within a week"
                - "Add the new stakeholder's concerns and stance to the map the same day"
                - "Tell your manager about any new step they introduce to the close"
            - name: External advisers who influence the buyer
              description: |-
                ## Purpose
                Consultants, systems integrators, auditors and industry analysts often shape a buyer's shortlist without appearing on any organisation chart. Adding external advisers to the map, with who hired them, what they are recommending and their links to competitors, explains decisions that seem to come from nowhere.

                ## Milestones
                1. Every external adviser involved in the purchase identified.
                2. Each adviser's brief, client contact and known vendor relationships recorded.
                3. A conversation held with at least one adviser.
                4. Advisers' influence scored on the map like any other stakeholder.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "All external advisers on a live deal recorded on the map with their brief and vendor links, and at least one met."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your contact which consultants, integrators or advisers are involved"
                - "Record each adviser's brief and who at the buyer engaged them"
                - "Check each adviser's known partnerships with your competitors"
                - "Request a conversation with the most influential adviser"
            - name: Head office and regional stakeholders in one map
              description: |-
                ## Purpose
                Global buyers often decide centrally and implement locally, or the reverse, and a country manager can stall a group deal by refusing to adopt it. Mapping head office and the main regions on one sheet, with who decides, who funds and who must adopt in each place, prevents a group signature followed by regional resistance.

                ## Milestones
                1. Head office and each major region shown as separate groups on the map.
                2. Decide, fund and adopt roles marked for each group.
                3. At least one stakeholder met in each region that must adopt.
                4. Regional concerns fed into the proposal before it goes out.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single map showing decide, fund and adopt roles for head office and every major region, with a stakeholder met in each adopting region."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Split the map into head office and each major region"
                - "Mark who decides, funds and must adopt in each group"
                - "Meet at least one stakeholder in each region that must adopt"
                - "Add regional concerns to the proposal before it goes out"
            - name: Stakeholder coverage versus win rate analysis
              description: |-
                ## Purpose
                Coverage rules are guesses until the team's own data tests them. Comparing win rate and cycle length for closed deals by number of engaged stakeholders, and by whether the signer was met, shows where the line really sits for your sales motion and gives managers evidence to enforce it.

                ## Milestones
                1. Closed deals from the last four quarters listed with engaged stakeholder counts.
                2. Win rate and cycle length compared by coverage band.
                3. Win rate compared for deals where the signer was and was not met.
                4. Findings used to confirm or change the coverage rule.

                ## Notes
                Start from the **Metrics log** template to keep the quarterly figures together.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarterly analysis of win rate and cycle length by stakeholder coverage, repeated for four quarters and used to set the coverage rule."
                cadence: cyclic
              tasks:
                - "Export closed deals from the last four quarters with their contact counts"
                - "Compare win rate and cycle length by coverage band"
                - "Compare win rate for deals where the signer was met and was not"
                - "Update the coverage figures in the metrics log @recurring(quarterly)"
            - name: Typical buying group profile by segment
              description: |-
                ## Purpose
                After enough deals, patterns appear: mid-market purchases involve the operations lead and finance, while enterprise ones add security, legal and a steering committee. Writing the typical buying group for each segment from won deals gives sellers a starter map before the first call and shows earlier which roles are missing.

                ## Milestones
                1. Won deals grouped by segment.
                2. The roles present in most won deals listed for each segment.
                3. A starter map for each segment saved with the template.
                4. Starter maps refreshed each year from new wins.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A starter map for each segment built from the roles present in most won deals and saved beside the template."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Group last year's won deals by segment"
                - "List the roles present in most won deals for each segment"
                - "Save a starter map for each segment beside the template"
                - "Refresh the starter maps from the year's new wins @recurring(yearly)"
            - name: Evaluation panel members and what each scores
              description: |-
                ## Purpose
                Formal evaluations, common in larger companies and regulated sectors, score vendors through a panel with weighted criteria. Mapping each panel member to the criteria they score, their likely leaning and the evidence they will read lets you write for each scorer rather than for an imaginary average reader.

                ## Milestones
                1. Each panel member identified with the criteria they score.
                2. Each member's likely leaning and main concern noted.
                3. Evidence mapped to the criteria each member scores.
                4. Panel stances compared with the result to learn for next time.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every evaluation panel member mapped to their criteria and leaning, with evidence planned for each and the map compared with the result."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the evaluation coordinator who sits on the panel and what each person scores"
                - "Note each panel member's likely leaning and main concern"
                - "Map your evidence to the criteria each member will score"
                - "Compare panel stances with the result once it is announced"
            - name: Stance signals from recorded calls
              description: |-
                ## Purpose
                Recorded calls hold far more stakeholder evidence than any seller writes down: hesitations, mentions of colleagues, changes in who speaks first. A monthly review of call transcripts for each large deal, looking for new names and changes in tone, catches stance shifts that same-day notes missed.

                ## Milestones
                1. Transcripts gathered for the month's calls on every large deal.
                2. New names and stance signals extracted for each deal.
                3. The map updated with each signal and its source.
                4. Three months of reviews completed and their value judged.

                ## Notes
                Check that buyers were told calls are recorded, as your company's policy and local law require, before using transcripts this way.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three monthly transcript reviews completed for every large deal, each adding sourced stance signals or new names to the map."
                cadence: rolling
              tasks:
                - "Gather the month's call transcripts for each large deal"
                - "Ask the agent to list new names and stance signals from each transcript"
                - "Add each confirmed signal to the map with its source @recurring(monthly:28)"
                - "Judge after three months whether the review is worth keeping"
            - name: Who chose the incumbent and what they stand to lose
              description: |-
                ## Purpose
                Replacing an existing supplier means asking someone to admit their past choice is no longer right, and that person is often still in the building. Mapping who selected and runs the incumbent, what their reputation depends on and how a change could be framed as their success rather than their mistake turns the likeliest blocker into a possible sponsor.

                ## Milestones
                1. The people who selected, own and run the incumbent identified.
                2. What each stands to lose or gain from a change written down.
                3. A framing prepared that credits their original choice.
                4. A conversation held with the incumbent's internal owner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The incumbent's internal owners mapped with what each stands to lose, and a conversation held with the main owner using a prepared framing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find out who selected the incumbent vendor and who runs it today"
                - "Write what each of them stands to lose or gain from a change"
                - "Prepare a framing that credits their original choice"
                - "Ask for a conversation with the incumbent's internal owner"
---

# Deal Stakeholder Mapping

This area is for sellers and enterprise deal teams who want to know, on every serious deal, who is involved, what each person needs and who could still say no. It starts with foundations (a map template, shared role definitions, a stance and influence scale, a coverage audit and a veto list), then the weekly machinery that keeps maps current, skills for finding and reading people, decisions about rules and tools, dated sessions and meetings, situations from a first quarter to an inherited or global deal, and specialist analysis of what winning buying groups look like.

What repeats is a Monday chase of stakeholders nobody has met, a Tuesday review of person-by-person plans, a Thursday stance log, a Friday catch-up on meeting updates, a Sunday briefing for the week's buyer meetings, monthly sweeps for job changes and stale contacts, monthly map checks in deal reviews, and quarterly accuracy and win rate checks against closed deals. The Meeting notes, Person, Purchase decision, Risk register and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
