---
id: family-office.family-security-assessment
name: Family Security Assessment
description: "A clear picture of the security risks around a wealthy family: a threat profile, surveys of each home, travel and routine reviews, online exposure, and a prioritised security plan agreed with a qualified specialist."
category: personal
version: 1.0.0
tags: [family-office, family-security-assessment, parent, homeowner, threat-assessment, residential-security, travel-security, risk-assessment]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - risk-register
    - remediation-plan
    - meeting-notes
    - operational-checklist
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Security Assessment
          description: "Assessing security risks for the family: threat profile, homes, travel, routines, online exposure and a prioritised security plan with a specialist."
          projects:
            - name: Scope and sponsor for the security assessment
              description: |-
                ## Purpose
                Security reviews that nobody owns tend to stall after the first scare fades, or sprawl into buying equipment before anyone has asked what the risk is. Naming one family sponsor, one office lead, the people and places in scope and a working budget turns a vague worry into a piece of work with an end date.

                ## Milestones
                1. A family sponsor and an office lead named, with the authority each holds written down.
                2. The family members, homes, offices and regular travel covered by the assessment listed.
                3. A working budget for the specialist and the first round of fixes agreed.
                4. A one-page scope note signed off by the sponsor.

                ## Notes
                Keep the scope note short and private. A two-line scope that everyone understands beats a detailed brief that leaks.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed one-page scope note names the sponsor, the office lead, the people and places in scope and the assessment budget."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the principal who should sponsor the security assessment"
                - "List the family members, homes and offices the assessment must cover"
                - "Agree a working budget for the specialist and first fixes"
                - "Write and circulate the one-page scope note to the sponsor"
            - name: Family security profile of people and places
              description: |-
                ## Purpose
                A security specialist cannot assess a family they cannot see: who lives where, which children attend which schools, who travels often and which addresses appear on public records. A confidential profile of each household member, their homes, workplaces, schools and regular haunts is the map every later finding is pinned to.

                ## Milestones
                1. Each family member in scope listed with home, school or workplace and regular activities.
                2. Every residence, office and frequently used venue recorded with its address.
                3. Members with higher visibility, such as a business leader or a public figure, flagged.
                4. The profile stored in the restricted part of the document vault with named readers.

                ## Notes
                The profile is itself a target. Keep one master copy, never email it in full, and give the specialist read access rather than a download.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A restricted family profile covers every person and address in scope and is readable only by the people named on its access list."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a restricted folder for the profile in the family document vault"
                - "Record each member's home, school or workplace and regular activities"
                - "Flag the family members with the highest public visibility"
                - "Update the profile when someone moves home, school or job @recurring(yearly)"
            - name: Threat profile workshop with the family
              description: |-
                ## Purpose
                Most families worry about the wrong thing: a dramatic kidnap scenario while burglary, a fixated former employee or a fraudster calling the bookkeeper is far more likely. A facilitated two-hour conversation about what has happened, who might wish the family harm and what they would want gives the specialist a realistic threat profile to test, rather than a list of fears.

                ## Milestones
                1. Plausible threat types listed, such as property crime, fraud, fixated individuals, unrest and opportunistic street crime.
                2. Known people or groups of concern named and recorded confidentially.
                3. Each threat rated by the family for how worried they are, before the specialist's view.
                4. A short threat profile note handed to the specialist as an input.

                ## Notes
                Ask the specialist to facilitate or at least to review the questions. Families tend to understate threats from people they know.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written threat profile lists the plausible threat types, any named persons of concern and the family's own rating of each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book a two-hour private session with the adult family members"
                - "Prepare a list of threat types to walk through in the session"
                - "Record any named individuals of concern in a separate restricted note"
                - "Send the threat profile note to the security specialist"
            - name: Log of past incidents and odd approaches
              description: |-
                ## Purpose
                The best predictor of the next incident is the last one, yet most families keep the memory of a strange letter, a burglary at the beach house or a persistent caller in different heads. Collecting every past incident, threat and odd approach from family, staff and the office into one dated log shows patterns that no single person has noticed.

                ## Milestones
                1. Family members, household staff and office staff each asked for incidents they remember.
                2. Every incident recorded with date, place, people involved and what happened next.
                3. Any police reports, letters, emails or recordings located and filed with the log.
                4. Repeating patterns, such as the same person or the same property, highlighted.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated incident log covering at least the past five years is compiled from family, staff and office accounts, with supporting documents attached."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each adult family member for incidents they remember"
                - "Ask household and office staff the same question in private"
                - "Locate police reports, threatening letters or emails and file them"
                - "Mark incidents that share a person, place or method"
            - name: Choosing a security specialist for the assessment
              description: |-
                ## Purpose
                The quality of the assessment depends almost entirely on who does it, and the field ranges from former police and military advisers with real assessment experience to equipment sellers who will always find a need for equipment. Comparing two or three independent consultants on method, licensing, references and conflicts of interest gives the family someone whose advice it can trust.

                ## Milestones
                1. Two or three independent security consultants identified through trusted referrals.
                2. Each one's licensing, insurance and assessment methodology checked.
                3. References from at least two comparable families or family offices taken.
                4. A consultant appointed under a written engagement letter with confidentiality terms.

                ## Notes
                Start from the **Vendor** template. Prefer a consultant who does not sell or install equipment, or who will declare any commission in writing.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An independent security consultant is appointed under a signed engagement letter after at least two candidates were compared on the same criteria."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the family lawyer and two peer families for consultant referrals"
                - "Check each candidate's licence, insurance and equipment sales ties"
                - "Take references from at least two comparable clients"
                - "Sign an engagement letter with confidentiality and scope terms"
            - name: Briefing pack for the security specialist
              description: |-
                ## Purpose
                A consultant who arrives cold spends the first paid days rediscovering what the office already knows. A briefing pack with the scope note, the family profile, the incident log, floor plans and a list of existing measures lets the specialist spend their time on judgement rather than fact-finding.

                ## Milestones
                1. The scope note, family profile and incident log assembled in one restricted folder.
                2. Floor plans, site plans and photographs of each home in scope added.
                3. Existing alarm, camera and guarding contracts summarised.
                4. The specialist confirms the pack is enough to plan the site visits.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A restricted briefing pack holding the scope, profile, incident log, plans and existing contracts is accepted by the specialist as complete."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect floor plans and site plans for each home in scope"
                - "Summarise current alarm, camera and guarding contracts on one page"
                - "Ask the agent to draft a contents list for the briefing pack"
                - "Share the pack with the specialist through the vault with view-only access"
            - name: Confidentiality rules for the assessment report
              description: |-
                ## Purpose
                Written down, a security assessment describes exactly where the family is weakest, and a copy left in an inbox or on a contractor's laptop is worse than no report at all. Agreeing up front who receives the report, in what form and how long copies are kept protects the family from its own homework.

                ## Milestones
                1. A short distribution list for the full report agreed with the sponsor.
                2. A redacted summary version defined for staff and contractors who need only their part.
                3. Storage, sharing and retention rules for every version written down.
                4. The specialist's own handling and deletion terms confirmed in writing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written handling rules name who may hold the full and summary reports, where they are stored and when copies are destroyed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree the distribution list for the full report with the sponsor"
                - "Decide what a staff summary version should leave out"
                - "Confirm in writing how the specialist stores and deletes their copy"
                - "Review who holds a copy of the assessment report @recurring(yearly)"
            - name: Baseline of existing security measures
              description: |-
                ## Purpose
                Families often discover they already pay for an alarm nobody sets, cameras nobody watches and a guard contract that ended two years ago. A plain inventory of every measure in place, who runs it and whether it actually works gives the assessment a true starting point and often finds savings.

                ## Milestones
                1. Every alarm, camera, gate, safe, guard service and monitoring contract listed by property.
                2. Each measure marked as working, partly working or not in use, with evidence.
                3. The owner and contract end date recorded for each service.
                4. Obvious failures, such as an unmonitored alarm, flagged for the specialist.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory lists every existing security measure at each property with its status, owner and contract date, and failures are flagged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every security contract the office currently pays for"
                - "Ask each house manager which systems are set and used daily"
                - "Record the status and contract end date of each measure"
                - "Send the flagged failures to the security specialist"
            - name: Risk scoring method for security findings
              description: |-
                ## Purpose
                Without a shared way of scoring, the loudest worry wins the budget. Agreeing a simple likelihood and impact scale with the specialist before findings arrive means every risk, from an unlit side gate to a published home address, can be ranked on the same page and argued about calmly.

                ## Milestones
                1. A likelihood scale and an impact scale, each with three to five plain-language levels, agreed.
                2. Impact defined across harm to people, property loss, privacy and reputation.
                3. A threshold set for which scores need action within weeks, months or the year.
                4. The method written on the first page of the findings tracker.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written likelihood and impact scale with action thresholds is agreed by the sponsor and the specialist before findings are scored."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the specialist which scoring scale they normally use"
                - "Define impact levels for people, property, privacy and reputation"
                - "Agree the score that triggers action within thirty days"
                - "Write the method at the top of the findings tracker"
            - name: Security findings tracker
              description: |-
                ## Purpose
                Assessment reports produce dozens of recommendations, and six months later nobody can say which were done, deferred or rejected. A single tracker holding every finding, its score, owner, decision and status turns the report into work that can be checked, and gives the next reassessment a record to start from.

                ## Milestones
                1. Every finding from the assessment entered with its score and the property or person it affects.
                2. Each finding assigned an owner and a decision: act, defer or accept the risk.
                3. Accepted risks signed off by the sponsor with a reason.
                4. The tracker reviewed monthly and closed items evidenced.

                ## Notes
                Start from the **Risk register** template. Record accepted risks as carefully as fixed ones; they are decisions, not omissions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every assessment finding sits in one tracker with a score, owner, decision and status, reviewed at least monthly."
                cadence: rolling
              tasks:
                - "Enter each assessment finding with its score and owner"
                - "Record a decision of act, defer or accept for every finding"
                - "Review open findings and chase overdue owners @recurring(monthly:12)"
                - "Attach evidence when a finding is closed"
            - name: Quarterly security review with the specialist
              description: |-
                ## Purpose
                Security posture drifts as staff change, children grow up and the family's profile rises or falls. A one-hour review each quarter with the specialist, the office lead and the sponsor keeps the findings tracker honest and catches new risks before they become incidents.

                ## Milestones
                1. A standing quarterly review booked with the specialist and the sponsor.
                2. A fixed agenda covering open findings, new incidents, travel and changes in the family.
                3. Minutes kept with decisions and owners.
                4. Four reviews held in the first year.

                ## Notes
                Start from the **Meeting notes** template. Keep minutes factual and short; they will be read by future advisers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly security reviews are held in a year, each with minutes recording decisions and owners."
                cadence: rolling
              tasks:
                - "Book the first quarterly review with the specialist and sponsor"
                - "Write a standing agenda for the review"
                - "Hold the quarterly security review and file the minutes @recurring(quarterly)"
                - "Send action owners their items within two days of the review"
            - name: Change triggers that reopen the assessment
              description: |-
                ## Purpose
                Any security assessment is accurate on the day it is written and starts ageing the next morning. A short list of events that should prompt an early review, such as a business sale, a new home, a court case, press coverage or a child moving abroad, means the family does not wait a year to notice that its risk has changed.

                ## Milestones
                1. A list of eight to twelve trigger events agreed with the specialist.
                2. Each trigger linked to who notices it and who calls the specialist.
                3. The list shared with the family sponsor, office lead and lawyer.
                4. The list checked against family news each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written list of trigger events, each with a named person who raises it, is checked against family news every quarter."
                cadence: rolling
              tasks:
                - "Draft a list of events that should reopen the assessment"
                - "Agree the list and the person who raises each trigger"
                - "Check the trigger list against recent family news @recurring(quarterly)"
            - name: Routine and pattern of life review
              description: |-
                ## Purpose
                Anyone planning to target a family relies on predictability: the same school run at 7.40, the same Saturday tennis, the same table at the same restaurant. Looking at the family's routines the way an observer would, and agreeing a few easy variations, reduces exposure without making daily life miserable.

                ## Milestones
                1. The weekly routines of each household member mapped with times and places.
                2. The most predictable routines identified with the specialist.
                3. Two or three practical variations agreed for each predictable routine.
                4. Routines rechecked monthly as schedules change.

                ## Notes
                Aim for small changes people will actually keep, such as varying departure times by fifteen minutes. Rules nobody follows give false comfort.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A routine map for each household member exists, the most predictable patterns have agreed variations, and the map is checked monthly."
                cadence: rolling
              tasks:
                - "Map each member's weekly routine with times and places"
                - "Ask the specialist which routines look most predictable"
                - "Agree simple variations with each person affected"
                - "Check routines for new predictable patterns @recurring(monthly:20)"
            - name: Pre-travel security check routine
              description: |-
                ## Purpose
                Travel strips away the protections of home: the alarm, the known neighbourhood, the trusted driver. A short checklist run before each trip, covering destination risk, accommodation, transfers, who knows the itinerary and how to reach the family in an emergency, catches the problems that only show up once the plane has landed.

                ## Milestones
                1. A one-page pre-travel checklist agreed with the specialist.
                2. A rule for which trips need the checklist, by destination and who is travelling.
                3. Itinerary sharing limited to a named list of people.
                4. The checklist completed for every qualifying trip over a quarter.

                ## Notes
                Start from the **Operational checklist** template. Booking under the family's own name on public platforms is a common leak; ask the travel desk how bookings are made.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every qualifying family trip over a quarter has a completed pre-travel checklist on file before departure."
                cadence: rolling
              tasks:
                - "Draft a one-page pre-travel security checklist with the specialist"
                - "Decide which destinations and travellers trigger the checklist"
                - "Review the coming week's family travel for checklist needs @recurring(weekly:sun)"
                - "File each completed checklist with the trip record"
            - name: Online exposure check for the family
              description: |-
                ## Purpose
                A determined stranger can often find a family's home address, children's school and holiday plans in an afternoon, from company filings, property records, old press and a teenager's tagged photos. A regular search of the family's names, addresses and businesses, done the way an outsider would, shows how exposed the family is and feeds the assessment with evidence rather than guesswork.

                ## Milestones
                1. A list of names, addresses, companies and handles to search agreed.
                2. A first exposure report showing what can be found and where.
                3. The most sensitive exposures rated using the assessment's scoring method.
                4. The search repeated each quarter and changes noted.

                ## Notes
                This project measures exposure for the assessment. Removing data and setting social media rules is the work of a separate privacy project; pass the findings on rather than duplicating it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A quarterly exposure report lists what can be found online about each family member and address, with the most sensitive items scored."
                cadence: rolling
              tasks:
                - "List the names, addresses and companies to search"
                - "Ask the specialist which search sources they would use"
                - "Search the family's names and addresses as an outsider would @recurring(quarterly)"
                - "Score the most sensitive exposures and add them to the tracker"
            - name: Annual reassessment of the threat profile
              description: |-
                ## Purpose
                Families change faster than their security plans: a child starts university abroad, a business is listed, a dispute ends or begins. A yearly reassessment with the specialist, starting from last year's threat profile and the findings tracker, keeps the plan matched to the family as it is now rather than as it was.

                ## Milestones
                1. Last year's threat profile and tracker reviewed with the specialist.
                2. Changes in the family, homes, travel and public profile captured.
                3. Threat ratings updated and the reasons for each change recorded.
                4. A revised plan for the coming year approved by the sponsor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "An updated threat profile and revised security plan are approved by the sponsor within twelve months of the previous assessment."
                cadence: cyclic
              tasks:
                - "Book the annual reassessment with the specialist @recurring(yearly)"
                - "List the changes in the family since the last assessment"
                - "Update threat ratings and note why each moved"
                - "Present the revised plan to the sponsor for approval"
            - name: Incident reporting routine for family and staff
              description: |-
                ## Purpose
                Small signals, a car parked outside twice, a caller asking for a child's schedule, a delivery nobody ordered, are only useful if someone writes them down. A simple way for family and staff to report anything odd, and a monthly look at the log, turns scattered observations into patterns the specialist can act on.

                ## Milestones
                1. One reporting channel agreed, such as a private number or a short form.
                2. Family members and staff told what to report and that no report is too small.
                3. Every report logged with date, place and what was seen.
                4. The log reviewed monthly and anything notable passed to the specialist.

                ## Notes
                Anything urgent goes to the police first. The log is for patterns, not emergencies.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A single reporting channel is in use by family and staff, and the incident log is reviewed every month with notable items sent to the specialist."
                cadence: rolling
              tasks:
                - "Choose one private channel for reporting odd events"
                - "Brief household and office staff on what to report"
                - "Review the incident log and pass patterns to the specialist @recurring(monthly:5)"
            - name: Security spending tracked against the plan
              description: |-
                ## Purpose
                Security budgets are easy to overspend in a hurry after an incident and easy to cut once the memory fades. Tracking spend against the agreed plan each month shows the sponsor what has been bought, what is still unfunded and whether the money is going to the highest-scored risks.

                ## Milestones
                1. Every security cost line identified across properties, travel and services.
                2. Monthly spend compared with the plan budget by category.
                3. Spending linked to the findings it addresses.
                4. A short quarterly note to the sponsor on spend and gaps.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly security spend is compared with the plan budget, linked to findings, and summarised for the sponsor each quarter."
                cadence: rolling
              tasks:
                - "Tag every security cost line in the office accounts"
                - "Compare security spend with the plan budget @recurring(monthly:27)"
                - "Link each purchase to the finding it addresses"
                - "Send the sponsor a quarterly spend and gaps note"
            - name: Threat, vulnerability and risk explained
              description: |-
                ## Purpose
                Conversations with security advisers go faster when the family understands the difference between a threat (someone with intent and capability), a vulnerability (a gap they could use) and a risk (the two together, with consequences). An evening's reading and one conversation with the specialist gives the sponsor the vocabulary to question recommendations rather than simply accept them.

                ## Milestones
                1. The terms threat, vulnerability, risk, likelihood and impact understood and written in your own words.
                2. One worked example from the family's own situation scored with the agreed method.
                3. Three questions prepared to ask the specialist about their reasoning.
                4. Those questions asked and the answers noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The sponsor can explain threat, vulnerability and risk using one family example, and has put three reasoning questions to the specialist."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a plain introduction to security risk assessment"
                - "Write the key terms in your own words"
                - "Score one family example with the agreed method"
                - "Ask the specialist three questions about their reasoning"
            - name: Reading a security assessment report
              description: |-
                ## Purpose
                Good reports separate observation from opinion, explains why each recommendation matters and admits uncertainty; a weak one lists equipment. Knowing what to look for lets the sponsor push back on vague findings and ask for the evidence behind a high rating before money is spent.

                ## Milestones
                1. The usual sections of a residential or family assessment report understood.
                2. A checklist of what a good finding contains: observation, risk, recommendation, priority and cost.
                3. The draft report reviewed against that checklist.
                4. Questions on weak or unsupported findings sent to the specialist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The draft assessment report is reviewed against a written checklist and questions on weak findings are returned to the specialist."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the specialist for a redacted sample report from another client"
                - "Write a checklist of what each finding should contain"
                - "Review the draft report against the checklist"
                - "Send questions on unsupported findings to the specialist"
            - name: Situational awareness basics for the family
              description: |-
                ## Purpose
                Most incidents are preceded by something a calm, observant person could have noticed: the same face twice, a car that follows, a stranger who knows too much. A short session with the specialist on noticing, trusting instincts and leaving early gives every adult and older child a skill that no system can replace.

                ## Milestones
                1. A one-hour awareness session booked with the specialist for adults and teenagers.
                2. Three or four simple habits agreed, such as noticing exits and pausing before leaving the car.
                3. A plain rule for what to do and whom to call if something feels wrong.
                4. A short refresher planned for the following year.

                ## Notes
                Keep the tone calm. The aim is confident, observant people, not anxious ones, especially with children present.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All adults and teenagers in scope attend an awareness session and can state the agreed habits and the call-for-help rule."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a one-hour awareness session with the specialist"
                - "Invite all adults and teenagers in the household"
                - "Write the agreed habits and call-for-help rule on one card"
                - "Note a date for a refresher next year"
            - name: Recognising hostile reconnaissance near the home
              description: |-
                ## Purpose
                Serious incidents against homes are usually planned, and planning means someone watching, photographing, asking staff questions or testing the gate. Teaching the people who are at the house every day, house managers, drivers and gardeners, what that looks like and how to report it turns them into the family's most effective early warning.

                ## Milestones
                1. The common signs of someone watching a property described in plain terms by the specialist.
                2. A short briefing held with house managers, drivers and grounds staff.
                3. The reporting channel confirmed for anything they notice.
                4. One example report submitted and handled as a test.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "House, driving and grounds staff at each main home have been briefed on signs of hostile reconnaissance and have used the reporting channel at least once."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the specialist for a plain list of reconnaissance signs"
                - "Brief house managers, drivers and grounds staff together"
                - "Confirm every staff member knows the reporting channel"
                - "Run one test report through the incident log"
            - name: How criminals research a wealthy family
              description: |-
                ## Purpose
                Understanding the attacker's method shows where the family is easiest to find. Learning how open sources such as company registries, property records, charity filings, wedding announcements and staff social media are combined to build a target profile helps the family judge which exposures matter most.

                ## Milestones
                1. The main open sources used to profile a family listed and understood.
                2. Each source checked for what it holds about this family.
                3. The two or three sources that reveal the most identified.
                4. Those findings passed to the online exposure check and the tracker.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists the open sources that reveal the most about this family, and the top items are entered in the findings tracker."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read a short guide on open-source research methods"
                - "List the public sources that mention the family or its companies"
                - "Identify the three sources that reveal the most"
                - "Add the findings to the security findings tracker"
            - name: Local crime picture for each home's area
              description: |-
                ## Purpose
                Houses in a quiet hill suburb and beach villas on a busy coast road face different risks, and national statistics hide both. Gathering local crime data, neighbourhood watch reports and the views of local police or a local security firm for each property tells the specialist what is normal there.

                ## Milestones
                1. Published crime data or police summaries found for the area around each home.
                2. Local sources, such as a neighbourhood group or a local guarding company, consulted.
                3. The most common local crime types noted for each property.
                4. The picture refreshed each quarter for the main homes.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each home in scope has a short note on its local crime picture, refreshed quarterly for the main residences."
                cadence: rolling
              tasks:
                - "Find the published crime summary for each home's area"
                - "Ask the house manager what neighbours report locally"
                - "Note the most common local crime types per property"
                - "Refresh the local crime picture for the main homes @recurring(quarterly)"
            - name: Designing out crime around the home
              description: |-
                ## Purpose
                Many of the most effective protections are not technology at all: clear sightlines from the house, lighting that shows a person rather than dazzles, planting that does not hide a window, a single obvious entrance for visitors. Learning the basic principles of crime prevention through environmental design helps the family brief architects and landscapers on every future project.

                ## Milestones
                1. The core principles of crime prevention through environmental design understood.
                2. The main home walked with those principles in mind and observations noted.
                3. Quick wins, such as trimming planting or changing lighting, listed.
                4. A short design note written for future architects and landscapers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A design note for architects and landscapers records the principles and the observations from a walk of the main home."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read an introduction to crime prevention through environmental design"
                - "Walk the main home's grounds and note sightlines and hiding places"
                - "List quick wins in planting and lighting"
                - "Write a one-page design note for future projects"
            - name: Residential security survey of the main home
              description: |-
                ## Purpose
                The main family home is where most of the family sleeps most nights, so its survey carries the most weight. A structured survey by the specialist, from the boundary inwards through grounds, doors, windows, systems, staff procedures and the response if something goes wrong, produces scored findings the family can act on.

                ## Milestones
                1. The specialist has surveyed the boundary, grounds, building shell, systems and procedures.
                2. Staff and family interviewed about how the house is really used.
                3. Findings scored and entered in the tracker.
                4. A night-time check of lighting and visibility completed.

                ## Notes
                Ask for the survey to cover how people actually behave, such as doors propped open for deliveries, not just the hardware.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written survey of the main home with scored findings is delivered by the specialist and every finding is in the tracker."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the survey date and access needs with the house manager"
                - "Arrange for the specialist to interview key staff during the visit"
                - "Enter every survey finding in the tracker with its score"
                - "Walk the boundary at night to check lighting and blind spots @recurring(quarterly)"
            - name: Security surveys of secondary and seasonal homes
              description: |-
                ## Purpose
                Seasonal homes spend months empty, rely on local caretakers and are often in places the family knows less well, which is why they are a common target. A lighter survey of each secondary home, scaled to how often it is used and who sleeps there, makes sure the plan covers the whole portfolio and not just the main house.

                ## Milestones
                1. Each secondary home ranked by occupancy and exposure to set survey depth.
                2. A survey or remote review completed for each, by the specialist or a vetted local firm.
                3. Findings for empty periods and occupied periods recorded separately.
                4. All findings scored and entered in the tracker.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every secondary residence has a survey or remote review with scored findings in the tracker, covering both empty and occupied periods."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Rank the secondary homes by occupancy and exposure"
                - "Decide which homes need a site visit and which a remote review"
                - "Commission the surveys through the specialist or a vetted local firm"
                - "Enter the findings in the tracker with separate empty and occupied notes"
            - name: Safe room or secure space decision
              description: |-
                ## Purpose
                Secure rooms where the family can wait for help are sometimes recommended and often oversold. Working through with the specialist whether one is warranted, where it would go, how it would be reached and who would respond, before speaking to any builder, gives the family a reasoned yes or no rather than an expensive impulse.

                ## Milestones
                1. The specialist's view on whether a secure space is warranted, with reasons, recorded.
                2. Options compared, from upgrading an existing room to a purpose-built space.
                3. Communications, response and practice arrangements for each option considered.
                4. A recorded decision by the sponsor, with budget if the answer is yes.

                ## Notes
                A secure space is only as good as the response it waits for and the family's habit of using it. Price the practice and the monitoring, not just the build.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The sponsor records a decision on a secure space, based on the specialist's written view and a comparison of at least two options."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the specialist whether a secure space is warranted and why"
                - "Compare upgrading an existing room with a purpose-built space"
                - "Check how help would be called and who would respond"
                - "Record the sponsor's decision and budget in the tracker"
            - name: Alarm, camera and monitoring gap review
              description: |-
                ## Purpose
                Technology is where security money goes first and where it is most often wasted: cameras that record but nobody watches, alarms that ring with no one to respond. Mapping each system against the risks it is meant to cover, and asking who responds, how fast and to what, shows which upgrades are worth funding and which systems can be retired.

                ## Milestones
                1. Each system at each property mapped to the specific risks it covers.
                2. Response arrangements checked: who is alerted, how fast they come and what they do.
                3. Gaps and duplications listed with the specialist's view.
                4. A short list of funded upgrades and retirements added to the plan.

                ## Notes
                Get quotes only after the gaps are agreed, and from more than one installer. The assessment should drive the equipment, not the reverse.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A gap review maps every system to the risks it covers and its response arrangement, and the agreed upgrades and retirements are in the plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Map each alarm and camera system to the risk it covers"
                - "Ask each monitoring company for its actual response time"
                - "List gaps and duplicated systems with the specialist"
                - "Add agreed upgrades and retirements to the security plan"
            - name: Vehicle and commute route review
              description: |-
                ## Purpose
                Trips between home, school and office are the most predictable part of most families' week, and the moments of getting in and out of a car are the most exposed. Reviewing regular routes, parking, vehicle choice and driver practice with the specialist finds the handful of changes that matter.

                ## Milestones
                1. Regular trips listed with routes, times and stopping points.
                2. Points where the car stops or slows predictably identified.
                3. Driver practices, such as waiting places and door locking, reviewed with the specialist.
                4. Agreed changes written into a short driver briefing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each regular family trip has been reviewed, and a written driver briefing records the agreed route and practice changes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List regular trips with their usual routes and times"
                - "Mark the points where cars wait or stop predictably"
                - "Write a short driver briefing with the agreed changes"
                - "Review commute routes for new predictable patterns @recurring(monthly:16)"
            - name: Prioritised family security plan
              description: |-
                ## Purpose
                An assessment is only worth what the family does next. A single plan that ranks every accepted finding by score, groups actions into the next 30 days, the next six months and the year, names owners and attaches a budget is the document the family signs and the office runs from.

                ## Milestones
                1. Every finding marked act in the tracker turned into a plan action.
                2. Actions grouped into 30-day, six-month and twelve-month horizons by score.
                3. An owner and an estimated cost attached to each action.
                4. The plan reviewed by the specialist for gaps before it goes to the family.

                ## Notes
                Start from the **Remediation plan** template. Put the cheap, high-scoring fixes first; they build confidence and often matter most.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written security plan ranks every accepted action by score with an owner, cost and horizon, and the specialist has reviewed it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Turn every act finding into a plan action with an owner"
                - "Group actions into 30-day, six-month and twelve-month horizons"
                - "Ask the agent to draft a one-page summary of the plan for the family"
                - "Send the plan to the specialist for a gap review"
            - name: Tiered security budget options
              description: |-
                ## Purpose
                Families make better decisions when they see choices rather than a single bill. Costing the plan at three levels, the essentials, a sensible standard and a fuller programme, with what each leaves uncovered, lets the sponsor choose deliberately and explain the choice to the rest of the family.

                ## Milestones
                1. Plan actions grouped into essential, standard and full tiers.
                2. One-off and annual running costs estimated for each tier.
                3. The remaining risks under each tier described in plain words.
                4. The sponsor's chosen tier recorded with reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three costed tiers with their remaining risks are presented, and the sponsor's chosen tier is recorded with reasons."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sort plan actions into essential, standard and full tiers"
                - "Estimate one-off and annual costs for each tier"
                - "Describe in plain words what each tier leaves uncovered"
                - "Record the sponsor's chosen tier and why"
            - name: Deciding whether close protection is warranted
              description: |-
                ## Purpose
                Bodyguards are visible, expensive and change family life, and sometimes the assessment shows they are not the answer while sometimes it shows they are overdue. Asking the specialist for a reasoned view on whether, when and for whom personal protection is justified gives the family a clear decision before anyone starts calling providers.

                ## Milestones
                1. The specialist's written view on the need for personal protection, by person and situation.
                2. Alternatives considered, such as trained drivers, travel support or protection only for events.
                3. The effect on privacy, children and daily life discussed with the family.
                4. A decision recorded, with any arrangement passed to the close protection project.

                ## Notes
                This project decides the question. Choosing providers and running a protection team belongs in its own project once the answer is yes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on personal protection, by person and situation, rests on the specialist's written view and a comparison with alternatives."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the specialist for a written view on personal protection needs"
                - "List alternatives such as trained drivers or event-only cover"
                - "Discuss the effect on daily life with the adult family members"
                - "Record the decision and who carries it forward"
            - name: School and activity security review for children
              description: |-
                ## Purpose
                Children spend more of their week at school, clubs and friends' houses than at home, in places the family does not control. Reviewing how each school handles visitors, collection and information about pupils, and agreeing what the family shares with schools and clubs, closes gaps no home survey would find.

                ## Milestones
                1. Each child's school and regular activities listed with their contacts.
                2. Each school's visitor, collection and pupil information policies obtained.
                3. A list of adults authorised to collect each child lodged with every school and club.
                4. Any concerns raised with the school and their replies recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every school and club the children attend holds the family's authorised collection list, and its relevant policies are on file."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each child's school, clubs and regular activities"
                - "Request each school's visitor and collection policy"
                - "Lodge an authorised collection list with every school and club"
                - "Record any concerns raised and the school's response"
            - name: Assessment kick-off meeting with the family
              description: |-
                ## Purpose
                Work done to a family rather than with it tends to be quietly ignored. A short kick-off meeting where the specialist explains what they will look at, what they will ask of each person and how findings will be handled sets expectations and gets the teenagers and the house staff on side early.

                ## Milestones
                1. A kick-off meeting held with the adult family members and the specialist.
                2. Each person told what will be asked of them and when.
                3. Confidentiality rules for the assessment explained.
                4. Concerns and questions from family members recorded for the specialist.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kick-off meeting is held with the adult family and the specialist, and the questions raised are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a date when the adult family members can meet"
                - "Ask the specialist for a fifteen-minute outline of the work"
                - "Hold the kick-off meeting and explain the confidentiality rules"
                - "Send the specialist the questions family members raised"
            - name: Walk-through day with the security specialist
              description: |-
                ## Purpose
                Of all the assessment's days, the specialist's site day at the main home is the single most valuable day of the assessment, and it is easily wasted by locked rooms, absent staff and a family member who wants to hide the messy garage. Preparing access, people and documents in advance means the specialist sees the house as it really is.

                ## Milestones
                1. A date agreed with the specialist, the house manager and key staff.
                2. Access arranged to every room, outbuilding, plant room and system panel.
                3. Key staff available for short interviews during the day.
                4. A debrief at the end of the day with first impressions recorded.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The specialist completes a full walk-through of the main home with access to every area and staff interviews, and a same-day debrief is recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the walk-through date with the specialist and house manager"
                - "Arrange keys and codes for every room and outbuilding"
                - "Schedule short interviews with key staff on the day"
                - "Record the specialist's first impressions at the end-of-day debrief"
            - name: Family sign-off of the security plan
              description: |-
                ## Purpose
                Plans that only the office has read get undone by the first family member who finds a new rule inconvenient. Presenting the plan to the adult family, explaining the reasons, agreeing the rules that affect daily life and getting a recorded sign-off gives everyone a stake in making it work.

                ## Milestones
                1. The plan and its summary presented to the adult family by the sponsor and the specialist.
                2. Rules that affect daily life discussed and adjusted where needed.
                3. Accepted risks explained and agreed.
                4. A sign-off recorded with the date of the first progress review.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The adult family members sign off the security plan at a recorded meeting, with accepted risks agreed and a first review date set."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a private meeting with the adult family members"
                - "Prepare a short summary of the plan and its daily-life rules"
                - "Present the plan with the specialist and record any changes"
                - "Record the sign-off and set the first progress review date"
            - name: Security review before a high-profile family event
              description: |-
                ## Purpose
                Weddings, milestone birthdays, a business sale announcement or a large charity gala put the family's names, faces and whereabouts in front of many more people than usual. A short assessment of the event, its venue, guest list, suppliers and publicity, done a few weeks out, keeps a celebration from becoming the family's biggest exposure of the year.

                ## Milestones
                1. The event's date, venue, guest numbers, suppliers and publicity plans gathered.
                2. The specialist's view on event risks, including what will be posted online.
                3. Agreed measures for access, guest lists, photography and supplier vetting.
                4. A short debrief after the event with lessons recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pre-event security review is completed at least three weeks before the event, and a debrief with lessons is filed afterwards."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather the event's venue, guest numbers and supplier list"
                - "Ask the specialist for a view on the event's main risks"
                - "Agree rules on guest lists, photography and online posting"
                - "File a short debrief with lessons after the event"
            - name: Household emergency drill with family and staff
              description: |-
                ## Purpose
                In a real intrusion or fire, people do what they have practised, and most households have never practised anything. A short yearly drill, agreed with the specialist, where family and staff walk through where to go, how to call for help and how to account for everyone, turns a written procedure into a reflex.

                ## Milestones
                1. A simple procedure for an intrusion or emergency at the main home agreed with the specialist.
                2. Family and staff walked through the procedure in a calm, unannounced-to-children format.
                3. Problems found during the drill, such as unreachable phones, recorded and fixed.
                4. The drill repeated each year.

                ## Notes
                Keep drills age-appropriate. Young children need a simple game-like version, not a frightening rehearsal.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A household drill is run at the main home at least once a year, with problems found recorded and fixed."
                cadence: cyclic
              tasks:
                - "Agree a simple emergency procedure for the main home with the specialist"
                - "Run the household drill with family and staff @recurring(yearly)"
                - "Record and fix any problems the drill reveals"
            - name: Reassessment after a business sale or liquidity event
              description: |-
                ## Purpose
                Selling a company or receiving a large inheritance can move a family from private to newsworthy in a single press release, and the risk profile changes before the money even lands. Running a focused reassessment before the announcement, covering publicity, homes, children and staff, lets the family act ahead of the attention rather than after it.

                ## Milestones
                1. The specialist briefed confidentially on the event and its expected publicity.
                2. Changes in exposure assessed for each family member and home.
                3. Interim measures agreed for the weeks around the announcement.
                4. The security plan updated within a month of the event.

                ## Notes
                Coordinate the timing with the deal lawyers and advisers so the briefing does not breach any confidentiality obligations around the transaction.
              priority: high
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A focused reassessment is completed before the liquidity event is announced, and the security plan is updated within a month of it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check with the deal lawyers what can be shared with the specialist"
                - "Brief the specialist on the event and expected publicity"
                - "Agree interim measures for the weeks around the announcement"
                - "Update the security plan within a month of the event"
            - name: Security for a family with young children
              description: |-
                ## Purpose
                Parents of young children face a particular mix of risks: nannies and drivers who know the routine, playgroups and parties at other homes, and photos shared by well-meaning friends. Reviewing the assessment through the lens of the youngest children, with the people who care for them, produces a few clear household rules that parents and carers can actually follow.

                ## Milestones
                1. The routines and carers of each young child mapped.
                2. The specialist's findings that affect young children pulled out and reviewed.
                3. Simple rules agreed with carers on collection, visitors, outings and photos.
                4. The authorised collection list kept current.

                ## Notes
                Talk to carers as partners. A nanny who understands why a rule exists will follow it when the parents are away.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A short set of household rules for young children is agreed with carers, and the authorised collection list is reviewed every quarter."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Map each young child's routines and carers"
                - "Pull out the assessment findings that affect young children"
                - "Agree simple rules on collection, visitors and photos with carers"
                - "Refresh the list of adults authorised to collect the children @recurring(quarterly)"
            - name: Teenagers and students living away from home
              description: |-
                ## Purpose
                Away at boarding school or studying in a foreign city, a young person is outside every home measure the family has paid for, and is often the most visible member online. Agreeing a light set of practices with the young person, a trusted local contact, accommodation checks and a way to ask for help, protects them without treating them as a child.

                ## Milestones
                1. Each student's accommodation, city and regular travel reviewed with the specialist.
                2. A trusted local contact named for each student.
                3. A short set of practices agreed with the student, covering location sharing, posting and getting help.
                4. A regular, light check-in rhythm agreed with the student.

                ## Notes
                Agree, do not impose. Rules a nineteen-year-old helped write are the ones they keep.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Each student living away has a reviewed accommodation, a named local contact and a short set of agreed practices on file."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Review each student's accommodation and city with the specialist"
                - "Name a trusted local contact for each student"
                - "Agree a short set of practices with the student"
                - "Check in on term address and travel plans @recurring(monthly:15)"
            - name: Security for elderly parents living alone
              description: |-
                ## Purpose
                Older family members living alone are targeted less by dramatic threats than by doorstep callers, distraction burglars and telephone fraudsters who claim to be the bank or a grandchild. Including their home and their daily contacts in the assessment, and agreeing simple checks with them, protects their independence as well as their safety.

                ## Milestones
                1. The elderly parent's home included in the survey programme.
                2. Their regular visitors, carers and callers listed.
                3. A simple doorstep and phone verification rule agreed with them.
                4. A regular check-in agreed with a family member or the office.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The parent's home has been surveyed, a doorstep and phone verification rule is agreed, and a monthly check-in is happening."
                cadence: rolling
              tasks:
                - "Add the parent's home to the survey programme"
                - "List regular visitors, carers and callers with the parent"
                - "Agree a simple rule for checking unexpected callers"
                - "Call the parent to ask about any unusual calls or visitors @recurring(monthly:8)"
            - name: Pre-purchase security review of a new home
              description: |-
                ## Purpose
                Some security weaknesses can be fixed with a lock or a light; others, such as a home overlooked from a public road or a single access lane, cannot be fixed at any price. Asking the specialist to review a shortlisted property before the offer is made puts security on the scale alongside the view and the kitchen.

                ## Milestones
                1. The specialist briefed on the shortlisted property and how the family would use it.
                2. A desk review or site visit completed before the offer.
                3. Weaknesses separated into fixable, costly and unfixable.
                4. The findings considered in the purchase decision and recorded.

                ## Notes
                Keep the specialist's visit discreet; a visible security survey can tell the seller and agent more about the buyer than the family intends.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A security review of a shortlisted property, separating fixable from unfixable weaknesses, is on file before an offer is made."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send the specialist the property details and intended use"
                - "Arrange a discreet visit or desk review before any offer"
                - "Sort weaknesses into fixable, costly and unfixable"
                - "Record how the findings affected the purchase decision"
            - name: Security when a family member becomes prominent
              description: |-
                ## Purpose
                When a member enters politics, marries a public figure, starts a high-profile venture or goes viral, the family's risk changes overnight, and attention often spills onto parents, siblings and children. A focused assessment of the newly prominent person and the people around them, with the specialist, sets the right measures before the first difficult news cycle.

                ## Milestones
                1. The change in profile and expected attention described for the specialist.
                2. Exposure assessed for the prominent person, their household and close relatives.
                3. Measures agreed for homes, travel, online presence and media approaches.
                4. The wider family briefed on what changes for them.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A focused assessment of the newly prominent member and close relatives is completed, and the wider family has been briefed on the changes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Describe the change in profile and expected attention for the specialist"
                - "Assess exposure for the person, their household and close relatives"
                - "Agree measures for homes, travel and media approaches"
                - "Brief the wider family on what changes for them"
            - name: Security assessment for Caribbean homes and travel
              description: |-
                ## Purpose
                Homes in Barbados, Jamaica, Trinidad and Tobago, the Bahamas or the OECS islands face a mix that northern surveys often miss: a small, connected community where staff and suppliers know everyone, hurricane season damaging fences and power, and visible wealth in places with sharp inequality. Briefing a specialist with real local knowledge, or pairing a global firm with a trusted local partner, gives findings that fit island life.

                ## Milestones
                1. A specialist or local partner with experience on the relevant islands identified.
                2. Local factors recorded, such as community ties, staff networks, power and storm damage to defences.
                3. The security of each Caribbean home assessed for storm season and the weeks after a storm.
                4. Regional travel between islands and to the mainland reviewed.

                ## Notes
                After a major storm, power, communications and perimeter fencing can all fail at once. Ask how the plan holds up when they do.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Each Caribbean residence has an assessment covering local factors and post-storm conditions, prepared with a specialist who has regional experience."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask peer families for specialists with experience on the islands"
                - "Record local factors that affect each Caribbean home"
                - "Review how each home's security holds up after a major storm"
                - "Review the hurricane season and local security outlook with the specialist @recurring(yearly)"
            - name: Insider access review across the household
              description: |-
                ## Purpose
                Many serious incidents against wealthy families involve someone who was trusted: a former employee who kept a code, a contractor who copied a key, a driver who shared a schedule. Reviewing who holds keys, codes, diaries, travel plans and remote access to cameras, and whether each still needs them, closes the quietest gap in any security plan.

                ## Milestones
                1. Every person holding keys, alarm codes, camera access or itineraries listed.
                2. Each access right checked against current role and need.
                3. Access removed for anyone who has left or no longer needs it.
                4. A leavers routine agreed so access is removed on the day someone departs.

                ## Notes
                This is about access rights, not suspicion of individuals. Background checks on staff are a separate piece of work.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A current access list shows every key, code and system right with its holder, unnecessary access is removed and a leavers routine is in use."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List everyone who holds keys, codes or camera access"
                - "Check each access right against the person's current role"
                - "Remove access for leavers and anyone who no longer needs it"
                - "Review who holds keys, codes and itineraries @recurring(quarterly)"
            - name: Technical surveillance sweep decision
              description: |-
                ## Purpose
                Listening devices and hidden trackers are rare, but families going through a contested divorce, a business dispute or a hostile takeover sometimes have reason to wonder. Deciding with the specialist whether a technical sweep of homes, offices or vehicles is justified, and choosing a reputable provider if it is, avoids both paranoia and complacency.

                ## Milestones
                1. The reasons for concern written down and discussed with the specialist.
                2. A recorded view on whether a sweep is justified, and where.
                3. If justified, a reputable provider chosen and the sweep scoped.
                4. Results recorded in the restricted part of the vault.

                ## Notes
                Discuss with the family lawyer before acting on anything found; evidence handling matters if a dispute ends up in court.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a technical sweep is made with the specialist, and any sweep carried out has its results filed in the restricted vault."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the specific reasons for concern"
                - "Ask the specialist whether a technical sweep is justified"
                - "Choose a provider through the specialist if a sweep is needed"
                - "Ask the family lawyer how any findings should be handled"
            - name: Independent test of physical security
              description: |-
                ## Purpose
                On paper a plan can look complete and still fail the first time someone polite in a delivery uniform asks to be let in. Once the main fixes are in place, commissioning an agreed, tightly controlled test of the main home's procedures by an independent firm shows whether the measures work as people actually behave.

                ## Milestones
                1. The main plan actions for the home completed before testing.
                2. A test scope, rules of engagement and safety limits agreed in writing with an independent firm.
                3. The test carried out with the sponsor's knowledge and the house manager's agreement.
                4. Findings added to the tracker and a staff debrief held without blame.

                ## Notes
                Never run a test that staff could mistake for a real attack, and never test with children present. The point is to improve procedures, not to catch people out.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A controlled physical security test is run under written rules of engagement, and its findings are in the tracker with a staff debrief held."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the main plan actions for the home are complete"
                - "Agree written test rules and safety limits with an independent firm"
                - "Inform the house manager and agree timing"
                - "Hold a no-blame debrief with staff after the test"
            - name: Assessing travel to higher-risk destinations
              description: |-
                ## Purpose
                Business trips to unstable markets, family visits to a country of origin or adventure holidays in remote areas carry risks the routine pre-travel check was not built for. A deeper assessment for these trips, covering ground transport, medical evacuation, local contacts, communications and a check-in plan, prepared with the specialist well before departure, gives the traveller and the office a plan that works when things go wrong.

                ## Milestones
                1. Criteria agreed for what counts as a higher-risk trip for this family.
                2. A trip assessment completed with the specialist for each such trip.
                3. Ground transport, medical support, local contacts and communications arranged.
                4. A check-in schedule and a missed check-in procedure agreed with the office.

                ## Notes
                Check government travel advice for the destination and confirm with the insurer that cover applies before booking.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every trip meeting the higher-risk criteria has a specialist trip assessment, local arrangements and a check-in procedure on file before departure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree with the specialist what counts as a higher-risk trip"
                - "Check government travel advice and insurer cover for the destination"
                - "Arrange ground transport, medical support and local contacts"
                - "Agree a check-in schedule and missed check-in procedure with the office"
---

# Family Security Assessment

This area is for the parent, principal or family office lead who suspects the family's security has grown by accident rather than by design, and wants an honest assessment before spending money on guards, gadgets or a new alarm. It starts with foundations (scope and sponsor, a family profile, a threat profile, past incidents, choosing a specialist and taking stock of what already exists), moves into the operating routines that keep the assessment current, then the knowledge of threat and vulnerability, hostile reconnaissance and how criminals research a target, the decisions that turn findings into a prioritised plan, dated events like the specialist's walk-through and the family sign-off, situations for young children, students, ageing parents and newly prominent members, and specialist work on insider risk, surveillance sweeps, physical testing and high-risk destinations.

What repeats is a weekly look at the coming week's travel, monthly reviews of the findings tracker, incident log, routines and budget, quarterly reviews with the specialist, online exposure checks and local crime updates, and a yearly reassessment of the threat profile with a household drill. The Vendor, Risk register, Remediation plan, Meeting notes and Operational checklist templates pair with choosing the specialist, tracking findings, the security plan, review meetings and pre-travel checks. Everything here is organisational: the judgements on threat levels, equipment and protective measures belong to a qualified security professional, and anything touching the law or the police goes to the family's lawyer. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
