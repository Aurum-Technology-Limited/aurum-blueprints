---
id: family-office.family-council-and-assembly
name: Family Council and Assembly
description: "A family council that meets, decides and writes things down, and a family assembly every branch actually attends: membership, elections, agendas, minutes and updates that reach everyone."
category: personal
version: 1.0.0
tags: [family-office, family-council-and-assembly, parent, retiree, family-governance, family-meetings, minutes, elections]
author: Aurum Technology
starter_structure:
  templates:
    - board-meeting
    - meeting-notes
    - feedback-themes
    - vendor
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Family Council and Assembly
          description: "Running a family council and a wider family assembly: membership, elections or rotation, agendas, minutes and communicating with every branch."
          projects:
            - name: Family council terms of reference
              description: |-
                ## Purpose
                Without a written remit, a family council drifts into either rubber-stamping the family office or second-guessing the operating board. Two pages that say what the council decides, what it only recommends and what it simply hears about give every later meeting a boundary, and they are far easier to agree now than in the middle of a disagreement.

                ## Milestones
                1. A draft listing the council's purpose, the matters it decides, the matters it recommends and the matters outside its remit.
                2. Quorum, meeting frequency and the link to the family constitution or governance framework stated in one place.
                3. The draft reviewed by the family's adviser or governance consultant for consistency with existing documents.
                4. Terms of reference adopted by the council and filed with its minutes.

                ## Notes
                Keep it short. The constitution says why the family governs itself; the terms of reference only say how this one body works. If the family has no constitution yet, note that the terms are provisional.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Signed terms of reference covering remit, quorum, frequency and reporting lines are adopted and filed with the council minutes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the last ten family decisions and note which body actually made each one"
                - "Draft the decides, recommends and outside-remit lists in two pages"
                - "Send the draft to the governance adviser for a consistency check"
                - "Put the terms of reference to a council vote and file the signed copy"
            - name: Branch representation on the family council
              description: |-
                ## Purpose
                Branches of a family grow at different speeds, so a council with one seat per sibling line can leave a branch of twenty people with the same voice as a branch of three. Settling how seats are allocated, whether by branch, by generation, by open election or a blend, removes the most common reason a branch stops trusting the council.

                ## Milestones
                1. A family tree showing each branch with adult members counted.
                2. Two or three seat allocation options modelled against the current tree and the tree in ten years.
                3. A chosen model with the reasoning written in a paragraph each branch can read.
                4. Seat allocation recorded in the council terms of reference.

                ## Notes
                Model the future, not just today. A branch-per-seat rule that works with four siblings rarely survives the arrival of fifteen cousins.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A seat allocation model is chosen, explained in writing to every branch and written into the council terms of reference."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count adult members in each branch from the current family tree"
                - "Model three seat allocation options against today's tree and a ten-year projection"
                - "Write a one-paragraph explanation of the chosen model for each branch"
                - "Add the seat allocation rule to the council terms of reference"
            - name: Family assembly eligibility and invitation list
              description: |-
                ## Purpose
                Invitations to the first assembly will be read closely: who was asked, who was left out, and whether spouses and stepchildren count. Agreeing the eligibility rule first, by age, by blood or marriage and by branch, and then building the list from it, means nobody's name depends on who drafted the email.

                ## Milestones
                1. An eligibility rule covering minimum age, spouses, partners, adopted and stepchildren written down.
                2. A complete list of eligible members built from the rule, grouped by branch.
                3. Each branch head asked to confirm their branch's names and contact details.
                4. The rule and list approved by the council before any invitation goes out.

                ## Notes
                Separate who may attend from who may vote. Many families invite spouses and teenagers to the assembly while keeping votes for adult lineal members, and say so plainly.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A council-approved eligibility rule and a branch-confirmed list of every eligible member exist before invitations are sent."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the draft eligibility rule for age, spouses, partners and stepchildren"
                - "Build the eligible member list by branch from the rule"
                - "Ask each branch head to confirm names and contact details within two weeks"
                - "Table the rule and the list for council approval"
            - name: Choosing the first council chair and secretary
              description: |-
                ## Purpose
                Two roles carry most of a council's work: the chair who runs the meeting and holds people to the agenda, and the secretary who sends papers and writes minutes. Choosing them openly, with a written role description and a fixed term, avoids the default where the eldest or the busiest family member ends up in charge by accident.

                ## Milestones
                1. One-page role descriptions for chair and secretary, with expected hours per quarter.
                2. Nominations invited from all council members with a closing date.
                3. Chair and secretary chosen by the method in the terms of reference.
                4. Terms of office and the date of the next appointment recorded in the minutes.

                ## Notes
                The secretary does not have to be family. Many councils use a trusted family office employee as secretary, which keeps minutes neutral and frees family members to speak.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A chair and secretary are appointed by the agreed method for a recorded term, with written role descriptions on file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one-page role descriptions for the chair and the secretary"
                - "Invite nominations from every council member with a closing date"
                - "Run the appointment using the method in the terms of reference"
                - "Record both appointments and their term end dates in the minutes"
            - name: Council election and rotation rules
              description: |-
                ## Purpose
                Elections that are invented each time a seat falls vacant invite argument about the method rather than the candidate. Writing the rules once, covering nominations, who votes, secret or open ballots, ties, casual vacancies and rotation, lets every future change of membership run quietly.

                ## Milestones
                1. A written procedure for nominations, eligibility to stand and eligibility to vote.
                2. Ballot method, tie-break and casual vacancy rules agreed.
                3. A rotation or election calendar showing when each current seat falls due.
                4. The procedure adopted by the council and shared with the assembly.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An adopted election and rotation procedure exists, with a calendar showing the expiry date of every current council seat."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect two or three election procedures from other families or governance guides"
                - "Draft rules for nominations, ballots, ties and casual vacancies"
                - "Build a calendar of when every current seat falls due"
                - "Check upcoming seat expiries and start nominations in good time @recurring(yearly)"
            - name: Inaugural family council meeting
              description: |-
                ## Purpose
                Everything about the first meeting sets a precedent: who speaks first, whether papers arrive on time, whether minutes appear. Planning it as a deliberate event, with a short agenda, an outside facilitator if the family wants one and a clear list of first decisions, shows the family the council will be worth its time.

                ## Milestones
                1. A date and venue agreed by every council member.
                2. An agenda with no more than six items, including adopting the terms of reference.
                3. Papers circulated at least a week before the meeting.
                4. Minutes and a short note to the wider family sent within a week of the meeting.

                ## Notes
                Keep the first agenda light on contentious items. Win trust with a well run meeting before taking on the hard question everyone is waiting for.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first council meeting is held with papers sent a week ahead and minutes plus a family note circulated within seven days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Poll council members for three possible dates and a venue"
                - "Draft a six-item agenda led by adopting the terms of reference"
                - "Circulate the papers seven days before the meeting"
                - "Send the minutes and a short family note within a week"
            - name: Family member contact and preferences register
              description: |-
                ## Purpose
                Councils that rely on one relative's phone contacts lose touch with whole branches when that relative is busy or falls out with someone. A single register of every eligible member, with address, preferred channel, language, time zone and any accessibility needs, is the basis of every invitation and update.

                ## Milestones
                1. One register holding every eligible member's contact details and preferred channel.
                2. Time zone, language and accessibility needs recorded where members share them.
                3. Access restricted to the secretary and the family office, with a note of who can see it.
                4. A quarterly update routine in place.

                ## Notes
                Ask before recording anything beyond name and contact details, and keep the register in the family office's secure system rather than a personal spreadsheet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A restricted-access register lists every eligible member with a confirmed preferred channel and is updated each quarter."
                cadence: rolling
              tasks:
                - "Export the invitation list into a single register in the office's secure system"
                - "Send each member a short form to confirm channel, language and time zone"
                - "Limit register access to the secretary and named office staff"
                - "Update the register with births, moves and new contact details @recurring(quarterly)"
            - name: Minutes and decision log standard
              description: |-
                ## Purpose
                Families argue years later about what was agreed, and memory always favours the person remembering. A fixed minutes format and a separate decision log, each decision with its date, wording, vote and owner, turns the council's history into something anyone can look up.

                ## Milestones
                1. A minutes format agreed: attendees, apologies, items, decisions, actions and owners.
                2. A decision log started, back-filled with any decisions already taken.
                3. A rule for when minutes are approved and who signs them.
                4. Minutes and decision log stored together in the secure family archive.

                ## Notes
                Record decisions and reasons, not every word said. Verbatim minutes make people guarded and rarely help later.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An agreed minutes format and a decision log, back-filled with past decisions, are stored in the family archive."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a one-page minutes format with decisions and actions in separate sections"
                - "Start the decision log and back-fill decisions from past emails and notes"
                - "Agree the approval and signing rule at the next council meeting"
                - "Reconcile the decision log against the latest approved minutes @recurring(quarterly)"
            - name: Council budget and expense rules
              description: |-
                ## Purpose
                Money for flights, venues, facilitators and assembly catering has to come from somewhere, and unclear rules quickly become a source of resentment between branches. A yearly council budget held by the family office, with simple expense rules, keeps attendance from depending on who can afford the flight.

                ## Milestones
                1. A yearly estimate of meeting, travel, facilitator and assembly costs.
                2. A decision on whether the office, the holding structure or members pay each type of cost.
                3. Written expense rules covering travel class, hotels and how to claim.
                4. The budget approved and a quarterly spend report agreed with the office.

                ## Notes
                Ask the family's accountant how council and assembly costs should be borne across entities before deciding who pays.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved council budget and written expense rules exist, with a quarterly spend report from the family office."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate a year of meeting, travel, facilitator and assembly costs"
                - "Ask the family accountant which entity should bear each type of cost"
                - "Write expense rules for travel class, hotels and claims"
                - "Review council spend against budget with the office @recurring(quarterly)"
            - name: Quarterly family council meeting cycle
              description: |-
                ## Purpose
                Meeting every quarter is frequent enough for the council to follow up its own actions and rare enough that members still turn up. Fixing the year's four dates in advance, with the same steps before and after each one, stops the council becoming something that happens only when there is a problem.

                ## Milestones
                1. Four meeting dates set for the coming year and in every member's calendar.
                2. A standard sequence for each meeting: agenda call, papers, meeting, minutes, family update.
                3. Attendance tracked for each meeting.
                4. A full year of four meetings held on the planned dates.

                ## Notes
                Start from the **Board meeting** template. Set dates a year ahead and treat moving them as a council decision, not a convenience.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four council meetings are held in the year on dates set in advance, each with minutes and recorded attendance."
                cadence: rolling
              tasks:
                - "Agree four council dates for the next twelve months"
                - "Send calendar invitations to every council member and the secretary"
                - "Hold the quarterly council meeting and record attendance @recurring(quarterly)"
                - "Note any meeting that moved and the reason in the minutes"
            - name: Rolling twelve-month council agenda plan
              description: |-
                ## Purpose
                Agendas built the week before tend to fill with whatever is loudest. A twelve-month plan that places the regular items, budget, assembly planning, elections, the office report and education, in the right quarter leaves room for new business and means members can prepare for big topics months ahead.

                ## Milestones
                1. Every recurring council item placed in a quarter on a single page.
                2. Space reserved in each meeting for new business raised by members.
                3. The plan shared with council members and the family office.
                4. The plan rolled forward every month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A twelve-month agenda plan placing every recurring item is shared with the council and rolled forward monthly."
                cadence: rolling
              tasks:
                - "List every item the council handles at least once a year"
                - "Place each item in the quarter where it fits best"
                - "Share the plan with council members and the head of the family office"
                - "Roll the agenda plan forward and add new items raised @recurring(monthly:12)"
            - name: Minutes circulation and approval routine
              description: |-
                ## Purpose
                Draft minutes that arrive a month late are approved without being read, and errors set into the record. Sending a draft within seven days, giving members a week to correct it and then signing it at or before the next meeting keeps the record accurate while memories are fresh.

                ## Milestones
                1. Draft minutes sent within seven days of each meeting.
                2. A one-week window for corrections, with changes tracked.
                3. Approved minutes signed and filed with the decision log.
                4. Four consecutive meetings minuted on this timetable.

                ## Notes
                Start from the **Meeting notes** template for the secretary's working notes, then move them into the agreed minutes format.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Minutes for four consecutive meetings are circulated within seven days and signed before the following meeting."
                cadence: rolling
              tasks:
                - "Agree the seven-day draft and seven-day correction timetable with the secretary"
                - "Send draft minutes to the council within seven days of each meeting @recurring(quarterly)"
                - "Track corrections and circulate the final version"
                - "File signed minutes alongside the decision log"
            - name: Action tracker between council meetings
              description: |-
                ## Purpose
                Decisions without owners and dates come back as the same agenda item a quarter later. One tracker, each action with an owner, a date and a status, reviewed by the chair every month, turns the council from a talking forum into one that gets things done.

                ## Milestones
                1. A single tracker holding every open council action with owner and date.
                2. Each action from the last minutes entered within a week.
                3. A monthly chair review of overdue items.
                4. The tracker's status summary included in every council pack.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every council action has an owner and date in one tracker, reviewed monthly, with fewer than a fifth overdue at each meeting."
                cadence: rolling
              tasks:
                - "Set up the action tracker with owner, due date and status columns"
                - "Enter every action from the last approved minutes"
                - "Review open and overdue actions with the chair @recurring(monthly:20)"
                - "Add the tracker summary as a standing item in the council pack"
            - name: Branch update letter after each council meeting
              description: |-
                ## Purpose
                Members not on the council judge it by what they hear, and if they hear nothing they assume the worst. A short plain-language letter after each meeting, saying what was discussed, what was decided and what is coming, keeps every branch inside the conversation without sharing confidential papers.

                ## Milestones
                1. A one-page letter format: discussed, decided, coming next, how to raise a question.
                2. A rule on what stays confidential to the council and what is shared.
                3. The letter sent to every eligible member within two weeks of each meeting.
                4. Replies and questions logged and answered.

                ## Notes
                Send it to everyone at once. Letting council members brief their own branches first creates different versions of the same meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A family update letter reaches every eligible member within two weeks of each council meeting for a full year."
                cadence: rolling
              tasks:
                - "Draft the one-page letter format with a section for raising questions"
                - "Agree with the council what stays confidential and what is shared"
                - "Ask the agent to draft the branch letter from the approved minutes"
                - "Send the branch update letter to every eligible member @recurring(quarterly)"
            - name: Secure portal for council and assembly papers
              description: |-
                ## Purpose
                Email attachments about family wealth are forwarded, mislaid and sent to wrong addresses. A secure portal or document room, with council papers visible to council members and assembly papers visible to the wider family, keeps material where it belongs and shows who has read it.

                ## Milestones
                1. A secure portal chosen with the family office, reusing an existing system if one fits.
                2. Separate spaces for council-only and assembly-wide papers.
                3. Every member set up with their own login and two-step sign-in.
                4. Access lists reviewed each quarter and leavers removed.

                ## Notes
                Ask the family office first. Most already run a document vault and adding a council space is cheaper and safer than a new tool.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All council and assembly papers are distributed through a secure portal with individual logins and a quarterly access review."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the family office which secure document system it already uses"
                - "Create separate council and assembly spaces with different access"
                - "Set up each member's login with two-step sign-in"
                - "Review the portal access list and remove anyone no longer eligible @recurring(quarterly)"
            - name: Council pack sent one week ahead
              description: |-
                ## Purpose
                Papers handed out at the table mean decisions taken by whoever reads fastest. A council pack, with agenda, previous minutes, action tracker, reports and a short note on each decision needed, in members' hands seven days ahead lets everyone arrive prepared and shortens the meeting.

                ## Milestones
                1. A standard pack order: agenda, minutes, actions, reports, decision notes.
                2. A cut-off date for papers set ten days before each meeting.
                3. Each decision item carrying a half-page note: question, options, recommendation.
                4. Packs sent seven days ahead for four meetings in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four consecutive council packs reach members seven days before the meeting, each decision item with a written note."
                cadence: rolling
              tasks:
                - "Write the standard pack order and the half-page decision note format"
                - "Set a paper cut-off ten days before each meeting"
                - "Assemble and send the council pack seven days before the meeting @recurring(quarterly)"
                - "Ask members after each meeting whether the pack was enough to decide"
            - name: Annual family assembly planning cycle
              description: |-
                ## Purpose
                An assembly that brings forty people from five countries together needs planning to start months ahead: the date, venue, programme, travel, children's activities and the business session. Running it as a yearly cycle with a small planning group and a timeline makes each year easier than the last.

                ## Milestones
                1. A planning group of two to four members named, including at least one from the younger generation.
                2. A backwards timeline from assembly day covering date, venue, programme, invitations and travel.
                3. The assembly held, with attendance and costs recorded.
                4. A short review written within a month to improve next year's cycle.

                ## Notes
                Fix the date before anything else. Every other choice is easier once the date is in diaries.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The assembly is held on a date set at least six months ahead, with a written review filed within a month afterwards."
                cadence: cyclic
              tasks:
                - "Name the assembly planning group for this year"
                - "Confirm next year's assembly date with the council @recurring(yearly)"
                - "Hold a short planning group check-in on the timeline @recurring(monthly:8)"
                - "Write the post-assembly review within a month of the event"
            - name: Annual council self-evaluation
              description: |-
                ## Purpose
                Once a council has met for a year it is easy to keep going without asking whether it is working. A short anonymous questionnaire once a year, on preparation, chairing, listening, follow-through and communication with branches, gives the chair something concrete to improve.

                ## Milestones
                1. A ten-question anonymous questionnaire agreed by the council.
                2. Responses collected from every council member.
                3. Results summarised and discussed at a council meeting.
                4. Two or three changes agreed and tracked in the action tracker.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Every council member completes the yearly self-evaluation and at least two agreed changes are entered in the action tracker."
                cadence: cyclic
              tasks:
                - "Draft ten questions on preparation, chairing, listening and follow-through"
                - "Run the anonymous council self-evaluation @recurring(yearly)"
                - "Present a summary of results at the next council meeting"
                - "Enter the agreed changes in the action tracker"
            - name: Family questions and suggestions channel
              description: |-
                ## Purpose
                Quiet members often have the most useful points and the least confidence to raise them at the assembly. A simple channel, a form or a named contact, where any member can send a question or idea and get a reply within a set time, shows the council listens to people who are not in the room.

                ## Milestones
                1. One channel chosen and explained in the branch update letter.
                2. A reply time promised, such as within three weeks.
                3. Every question logged with the reply and the date sent.
                4. Recurring themes reported to the council twice a year.

                ## Notes
                Start from the **Feedback themes** template to group what comes in. Allow anonymous suggestions, but reply publicly in the branch letter when you do.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every question received through the channel is logged and answered within the promised time, with themes reported twice a year."
                cadence: rolling
              tasks:
                - "Choose a form or named contact for family questions"
                - "Announce the channel and the reply time in the next branch letter"
                - "Read, log and assign new suggestions @recurring(monthly:25)"
                - "Group recurring themes for the council twice a year"
            - name: Chairing a family council meeting
              description: |-
                ## Purpose
                Chairing family is harder than chairing colleagues: old roles, unspoken hierarchies and long memories walk into the room. Learning the basic techniques, opening with purpose, timing items, bringing in quiet voices, summarising before deciding, makes meetings shorter and fairer, and they can be practised.

                ## Milestones
                1. A short reading list or course on chairing meetings completed.
                2. A personal chairing checklist written for use at each meeting.
                3. Feedback asked from two members after a meeting.
                4. One improvement chosen and tried at the following meeting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The chair has a written checklist, has collected feedback from two members and has tried one specific improvement at a later meeting."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read one practical guide to chairing meetings"
                - "Write a ten-point chairing checklist for the council"
                - "Ask two members for honest feedback after the next meeting"
                - "Pick one technique to try and note how it went"
            - name: Consensus and voting methods for family councils
              description: |-
                ## Purpose
                Majority voting can leave a branch outvoted on matters that touch it deeply, while insisting on consensus can let one member block everything. Understanding the range, from simple majority and supermajority to consent-based and advisory votes, helps the council choose the right method for each kind of decision.

                ## Milestones
                1. Notes on four decision methods with their strengths and risks.
                2. The council's decision types sorted by which method suits each.
                3. A proposal on methods put to the council.
                4. The agreed methods added to the terms of reference.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The council has agreed in writing which decision method applies to each category of decision it makes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a half page on majority, supermajority, consensus and consent methods"
                - "Sort the council's usual decisions into categories"
                - "Propose a method for each category at a council meeting"
                - "Add the agreed methods to the terms of reference"
            - name: Writing minutes the whole family can trust
              description: |-
                ## Purpose
                Good minutes are neutral, brief and precise about what was decided, and few people are taught to write them. A secretary, or a family member who rotates into the role, who learns how to record decisions, reasons and dissent without colouring them, protects the council from disputes about its own record.

                ## Milestones
                1. Guidance on neutral minute writing read and summarised.
                2. Two sets of past minutes rewritten as practice and compared.
                3. A short style note for minutes agreed with the chair.
                4. The next three sets of minutes approved with no disputed wording.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A minutes style note exists and three consecutive sets of minutes are approved without any disputed wording."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a guide on writing neutral minutes for boards or committees"
                - "Rewrite one past set of minutes using the guide"
                - "Agree a half-page style note with the chair"
                - "Ask the chair to review the next draft before circulation"
            - name: Keeping heated agenda items on track
              description: |-
                ## Purpose
                Some agenda items, distributions, a member's request to leave the business, an ageing parent's role, will raise voices however well the meeting is run. Learning meeting techniques for these items, sending a neutral paper beforehand, separating discussion from decision and calling a pause, keeps the meeting productive and keeps a disagreement from becoming a dispute.

                ## Milestones
                1. A list of the council's predictably difficult topics.
                2. Three meeting techniques studied and noted for use.
                3. A protocol agreed for pausing an item and returning to it.
                4. One difficult item handled with the protocol and reviewed afterwards.

                ## Notes
                This is about meeting technique. A disagreement that has become a dispute belongs in the family's conflict resolution process, not the next council agenda.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written pause and return protocol is agreed and has been used on at least one difficult agenda item."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the topics likely to cause heat at council meetings"
                - "Note three techniques for difficult items from a facilitation guide"
                - "Draft a pause and return protocol for council approval"
                - "Review how the protocol worked after its first use"
            - name: Council, board and family office roles explained
              description: |-
                ## Purpose
                Confusion between the family council, the boards of family companies and the family office team is the source of many arguments: a council member instructs office staff, or a board decision is reopened at the assembly. A one-page map of who does what, studied by every council member, saves months of friction.

                ## Milestones
                1. A one-page diagram of family council, assembly, company boards and family office.
                2. For each body, a line on what it decides and who it answers to.
                3. The map checked with the head of the family office and a board chair.
                4. The map walked through with every council member.

                ## Notes
                Agree a simple rule: council members raise requests to the office through the chair or head of office, never by instructing staff directly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every council member has been walked through a one-page roles map checked by the head of office and a board chair."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draw the bodies and reporting lines on a single page"
                - "Write one line on what each body decides"
                - "Check the map with the head of office and a company board chair"
                - "Walk every council member through the map at a meeting"
            - name: Reading the family office report as a council member
              description: |-
                ## Purpose
                Council members are usually given a quarterly report from the family office and many quietly skip it because the format is unfamiliar. Learning what the sections mean, where to look first and which questions to ask helps members hold the office to account without straying into investment decisions that belong elsewhere.

                ## Milestones
                1. A walk-through of the report's sections given by the office.
                2. A personal list of five questions to ask of each report.
                3. One question sent to the office through the agreed channel.
                4. Each quarterly report read before the council meeting.

                ## Notes
                The council asks questions and checks the office is reporting as agreed. Investment calls stay with the investment committee and the family's advisers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The member has had a report walk-through, keeps a five-question checklist and reads each quarterly report before the meeting."
                cadence: rolling
              tasks:
                - "Ask the head of office for a thirty-minute walk-through of the report"
                - "Write five questions to ask of every report"
                - "Send one clarifying question through the agreed channel"
                - "Read the quarterly office report before the council meeting @recurring(quarterly)"
            - name: Confidentiality rules for council members
              description: |-
                ## Purpose
                What council members say at home can spread through the family, or beyond it, within days. Agreeing what is confidential, what can be shared with a spouse or adult child, and how papers are stored and destroyed protects the family's privacy and the council's ability to speak frankly.

                ## Milestones
                1. Categories agreed: council only, family-wide, public.
                2. A rule on sharing with spouses and partners.
                3. A signed acknowledgement from each council member.
                4. A yearly refresher at the first meeting of the year.

                ## Notes
                Ask the family's lawyer whether a formal confidentiality agreement is appropriate, especially where members hold shares or trust interests.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Every council member has signed the confidentiality rules within the last twelve months."
                cadence: rolling
              tasks:
                - "Draft three confidentiality categories with examples of each"
                - "Agree the rule on sharing council matters with spouses and partners"
                - "Ask the family lawyer whether a formal agreement is needed"
                - "Collect a signed confidentiality acknowledgement from every member @recurring(yearly)"
            - name: Deciding on an independent family meeting facilitator
              description: |-
                ## Purpose
                An outside facilitator who runs the assembly or a difficult council session lets every family member take part as a member rather than a host. Deciding whether to use one, for which meetings and at what cost, and then choosing well, is often the single change that most improves a young council.

                ## Milestones
                1. The meetings where a facilitator would help most listed.
                2. Three facilitators with family enterprise experience shortlisted.
                3. References taken and fees compared.
                4. A decision recorded, with a facilitator engaged for a named meeting if chosen.

                ## Notes
                Start from the **Vendor** template. Ask each candidate how they would handle a senior family member dominating the room.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded council decision on using a facilitator, with references checked on at least two shortlisted candidates."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the meetings where an outside facilitator would help most"
                - "Shortlist three facilitators with family enterprise experience"
                - "Take two references for each shortlisted facilitator"
                - "Put a recommendation and fee comparison to the council"
            - name: Right-sizing the family council
              description: |-
                ## Purpose
                Councils that add a seat for every new voice end up with fifteen people around a table where five could decide. Reviewing size against workload, branch fairness and the quality of discussion lets the council grow or shrink on purpose, with a timetable that does not unseat anyone abruptly.

                ## Milestones
                1. Attendance, meeting length and decisions per meeting for the last two years gathered.
                2. Two or three size options with their effect on branch representation.
                3. A preferred size and transition timetable agreed.
                4. The new size written into the terms of reference.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A council size is decided with a transition timetable and written into the terms of reference."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Gather two years of attendance and meeting length figures"
                - "Model three council sizes against branch representation"
                - "Propose a size and a transition timetable that uses natural seat expiries"
                - "Update the terms of reference once the change is agreed"
            - name: Hybrid council meetings across time zones
              description: |-
                ## Purpose
                When members live in London, Toronto, Port of Spain and Singapore, someone is always meeting at midnight. Setting up hybrid meetings properly, with good audio in the room, a rotating meeting time and rules that give remote members an equal voice, keeps far-flung members engaged instead of slowly dropping off.

                ## Milestones
                1. A time zone map of all members and a rotating meeting time agreed.
                2. Room audio and video tested with a remote member before a real meeting.
                3. Rules for remote speaking order and voting written down.
                4. Remote members' feedback collected after two hybrid meetings.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two hybrid meetings are held under written remote participation rules, with feedback from every remote member recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Map every council member's time zone and usual working hours"
                - "Agree a rotating meeting time so no one always meets at night"
                - "Test the room's audio and video with a remote member"
                - "Write rules for remote speaking order and voting"
            - name: Choosing the family assembly venue and format
              description: |-
                ## Purpose
                Where and how the assembly meets shapes who comes: a hotel near the family business, a resort with children's activities, a family home, or a virtual session in a lean year. Comparing options against cost, travel, privacy and the programme gives the planning group a reasoned choice rather than last year's default.

                ## Milestones
                1. Criteria agreed: cost, travel time, privacy, accessibility and space for children.
                2. Three venue or format options scored.
                3. Privacy needs checked with the family office, including guest lists and booking names.
                4. A venue and format chosen and booked.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An assembly venue and format are chosen from at least three scored options and booked with privacy arrangements agreed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree five venue criteria with the planning group"
                - "Score three venue or format options against the criteria"
                - "Check booking names and guest list privacy with the family office"
                - "Book the chosen venue and confirm the deposit terms"
            - name: Council and assembly papers in more than one language
              description: |-
                ## Purpose
                In families spread across countries, some branches read Spanish, French, Dutch or Mandarin more comfortably than English, and members who cannot follow the papers stop asking questions. Deciding which documents to translate, and keeping a glossary of family governance terms, keeps every branch able to take part.

                ## Milestones
                1. Members' preferred reading languages recorded in the register.
                2. A list of documents that will be translated and those that will not.
                3. A glossary of key governance terms agreed in each language.
                4. One full assembly pack issued in each required language.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An assembly pack is issued in every language members asked for, using a shared glossary of governance terms."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull members' preferred reading languages from the register"
                - "Decide which documents are translated every time"
                - "Agree a glossary of twenty governance terms with a translator"
                - "Issue the next assembly pack in each required language"
            - name: Term limits and staggered council terms
              description: |-
                ## Purpose
                Long tenures give continuity but can freeze out the next generation; everyone leaving at once loses all experience in one meeting. Staggered terms with a limit on consecutive terms give a council steady renewal while always keeping some experienced members in the room.

                ## Milestones
                1. Current members' start dates and terms listed.
                2. Options for term length, term limits and staggering modelled.
                3. A staggered schedule agreed so no more than a third of seats change in one year.
                4. Rules adopted and the election calendar updated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Term limits and a staggered schedule are adopted so that no more than a third of seats fall due in any one year."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every council member's start date and current term"
                - "Model three term length and limit options"
                - "Draw a staggered schedule with no more than a third of seats changing yearly"
                - "Update the election calendar once the rules are adopted"
            - name: Council committees for education, giving and events
              description: |-
                ## Purpose
                As a council's workload grows, every topic squeezed into a quarterly meeting gets a few rushed minutes. Small committees, for the assembly, family education or the family's giving, with written remits and a report to each council meeting, spread the work and give more members a real role.

                ## Milestones
                1. The council's workload sorted into topics that could be delegated.
                2. Remits written for two or three committees, each with a chair.
                3. Committee members appointed, including non-council members where useful.
                4. A short committee report included in each council pack.

                ## Notes
                Keep committees advisory unless the terms of reference say otherwise. The council still decides.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two or three committees exist with written remits and each reports in every council pack for a year."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Sort a year of council agenda items into delegable topics"
                - "Write a half-page remit for each proposed committee"
                - "Appoint a chair and members for each committee"
                - "Collect a short report from each committee for the council pack @recurring(quarterly)"
            - name: Council member stipends and expenses decision
              description: |-
                ## Purpose
                Unpaid council work is fine for a retired member and a real cost for a parent juggling a job and young children. Deciding whether to pay a stipend, cover childcare or only reimburse expenses, and recording why, makes it possible for members in every life stage to serve.

                ## Milestones
                1. Hours spent by the chair, secretary and members in a typical year estimated.
                2. Options compared: expenses only, childcare and travel, a fixed stipend.
                3. Tax and employment questions put to the family's accountant.
                4. A decision recorded and the expense rules updated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded council decision on stipends or expenses, after accountant input, is reflected in the expense rules."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Estimate a year of hours for chair, secretary and members"
                - "Compare expenses only, childcare support and a fixed stipend"
                - "Ask the family accountant about the tax treatment of each option"
                - "Record the decision and update the expense rules"
            - name: First full family assembly
              description: |-
                ## Purpose
                The first assembly is when most family members meet their governance for the first time, and they will decide on the day whether it is for them. A programme that mixes a short business session, family history, time for the children and a proper meal, run to time, is what brings people back next year.

                ## Milestones
                1. A date set six months ahead and invitations sent to the approved list.
                2. A programme balancing business session, family story, social time and children.
                3. Speakers briefed and papers on the portal two weeks ahead.
                4. The assembly held and a thank-you note with a summary sent within a week.

                ## Notes
                Keep the business session under ninety minutes. People remember the dinner and the stories, and that is what earns patience for the formal part.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first assembly is held with at least two thirds of eligible members attending and a summary sent to all within a week."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Send save-the-date notices six months ahead to the approved list"
                - "Draft a programme mixing business, family history and social time"
                - "Brief each speaker and post papers to the portal two weeks ahead"
                - "Send a thank-you and summary to every member within a week"
            - name: Running a family council election
              description: |-
                ## Purpose
                Contested family elections are remembered for years, and so is any hint that the process was unfair. Running one carefully by the written rules, with a neutral returning officer, a published timetable and a result announced to everyone at the same time, protects both the winners and the relationships.

                ## Milestones
                1. A neutral returning officer appointed, such as the family office's general counsel or an outside adviser.
                2. Timetable, candidate statements and voter list published to all eligible voters.
                3. Ballots cast and counted by the agreed method.
                4. Results announced to every member at once and recorded in the minutes.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A council election is completed to the published timetable, run by a neutral returning officer, with results announced to all members on one day."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Appoint a neutral returning officer for the election"
                - "Publish the timetable and voter list to all eligible voters"
                - "Collect candidate statements of no more than one page"
                - "Announce the results to every member on the same day"
            - name: Milestone anniversary family assembly
              description: |-
                ## Purpose
                Fifty years since the business was founded, or a centenary of the family's arrival in a new country, gives an assembly a story everyone can share. Planning an anniversary assembly around that milestone, with archive material, invited elders and a record for future generations, strengthens a sense of belonging the council relies on.

                ## Milestones
                1. The milestone, the date and the scale of the gathering agreed by the council.
                2. Archive photographs, documents and recorded memories gathered.
                3. A programme including a family history session and contributions from each generation.
                4. The event recorded and the material filed in the family archive.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An anniversary assembly is held and a written or filmed record of it is filed in the family archive."
                cadence: one-shot
                effort_hours_estimate: "50"
              tasks:
                - "Agree the milestone and target date at a council meeting"
                - "Ask each branch for photographs and stories for the archive"
                - "Plan a family history session with contributions from each generation"
                - "File the recordings and programme in the family archive"
            - name: Children's and teenagers' assembly programme
              description: |-
                ## Purpose
                Children who spend the assembly in a hotel room learn that family governance is something adults do behind closed doors. A parallel programme, games and family history for the young ones, a short age-appropriate session on the family enterprise for teenagers, makes the assembly a place they want to come back to.

                ## Milestones
                1. Numbers and ages of children attending confirmed.
                2. Activities planned for under-tens and a session designed for teenagers.
                3. Childcare staff vetted and briefed through the family office.
                4. Feedback collected from parents and teenagers after the assembly.

                ## Notes
                Ask the family office to use its usual vetting process for anyone supervising children at the assembly.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A children's and teenagers' programme runs alongside the assembly with vetted staff and written feedback from parents."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the number and ages of children attending"
                - "Plan activities for under-tens and one session for teenagers"
                - "Ask the family office to vet and brief the childcare staff"
                - "Collect feedback from parents and teenagers after the assembly"
            - name: Two-day council strategy retreat
              description: |-
                ## Purpose
                Quarterly meetings rarely leave time to ask where the family wants to be in ten years. A two-day retreat every few years, away from home with a facilitator, gives the council space to agree priorities for the next term and to know each other as colleagues, not only relatives.

                ## Milestones
                1. Retreat objectives and three big questions agreed by the council.
                2. Venue, facilitator and pre-reading arranged.
                3. The retreat held, with priorities for the next term written down.
                4. Priorities turned into items on the twelve-month agenda plan.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two-day retreat produces written priorities for the council's next term, each placed on the twelve-month agenda plan."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Agree three big questions for the retreat"
                - "Book a quiet venue and a facilitator for two days"
                - "Send pre-reading three weeks before the retreat"
                - "Place the agreed priorities on the twelve-month agenda plan"
            - name: Extraordinary council meeting protocol
              description: |-
                ## Purpose
                Urgent matters, a serious illness, an approach to buy the business, a public story about the family, cannot wait for the next quarter. A short protocol saying who can call an extraordinary meeting, with how much notice, quorum by video and how decisions are confirmed afterwards, lets the council act fast without being accused of acting in secret.

                ## Milestones
                1. A rule on who may call an extraordinary meeting and on what notice.
                2. Quorum and remote attendance rules for urgent meetings.
                3. A step to report the meeting's outcome to all council members and the family.
                4. The protocol adopted and added to the terms of reference.

                ## Notes
                Link the protocol to the family's crisis plan rather than duplicating it. The council meeting is one step, not the whole response.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An adopted protocol states who may call an extraordinary meeting, the notice, the quorum and how outcomes are reported."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft who may call an extraordinary meeting and the minimum notice"
                - "Set quorum and video attendance rules for urgent meetings"
                - "Add a step to report the outcome to the full family"
                - "Adopt the protocol and add it to the terms of reference"
            - name: Stepping down from the council as a senior member
              description: |-
                ## Purpose
                After years on the council, a senior member who simply stops coming leaves a gap and an unspoken question. Planning the step down, choosing the timing, handing over knowledge and relationships and agreeing a continuing role if wanted, lets a retiree leave with thanks and keeps their experience available.

                ## Milestones
                1. A step-down date agreed with the chair, ideally at a natural seat expiry.
                2. A handover note of history, open issues and key relationships written.
                3. A successor briefed in at least two conversations.
                4. The retirement marked at the assembly or a council dinner.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A senior member steps down on an agreed date, with a written handover note and two briefing sessions held with the successor."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree a step-down date with the chair at a natural seat expiry"
                - "Write a handover note on history, open issues and key people"
                - "Hold two briefing conversations with the incoming member"
                - "Plan with the chair how the retirement will be marked"
            - name: Bringing young children to the family assembly
              description: |-
                ## Purpose
                Parents of small children are the members most likely to skip the assembly, because travel, naps and meals make a governance weekend hard work. Planning ahead, with the children's programme, the right room, a rota with the other parent and realistic sessions to attend, lets a parent take part fully rather than spend the business session in a corridor.

                ## Milestones
                1. The assembly programme checked for children's activities and timings.
                2. Travel and rooms booked around children's routines.
                3. The sessions you most need to attend chosen, with cover arranged for them.
                4. Notes taken or papers read for any session missed.
              priority: low
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A parent attends the business session and at least one other key session, with childcare arranged for both."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the assembly programme and mark the children's activity times"
                - "Book travel and rooms around the children's routines"
                - "Choose the two sessions you must attend and arrange cover"
                - "Ask the planning group what childcare help is available"
            - name: Honorary elder role at the assembly
              description: |-
                ## Purpose
                Grandparents who founded the wealth often hold more authority than any written role, and when they leave formal governance the assembly can lose its centre. An honorary role, opening the assembly, telling the family story, chairing the family history session, gives elders a respected place without a vote or an executive job.

                ## Milestones
                1. The elder asked what part they would enjoy at the assembly.
                2. A short written description of the honorary role agreed by the council.
                3. The elder's part placed on the assembly programme.
                4. Their contribution recorded for the family archive.

                ## Notes
                Agree in advance that the honorary role carries no vote. Clarity now avoids hurt later.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An honorary elder role is written down, the elder takes part in the assembly programme and the contribution is archived."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the elder which part of the assembly they would enjoy leading"
                - "Write a short description of the honorary role for the council"
                - "Place the elder's session on the assembly programme"
                - "Arrange for their talk or story to be recorded"
            - name: Serving on the council from another country
              description: |-
                ## Purpose
                Living abroad, far from the family seat, makes council membership harder: meetings at awkward hours, missing the informal conversations, travelling twice a year at your own cost. Setting up your own routine, time blocks for papers, regular calls with the chair and a plan for in-person meetings, keeps your branch represented as strongly as anyone's.

                ## Milestones
                1. Meeting times confirmed in your time zone for the year.
                2. A standing call with the chair or a fellow member between meetings.
                3. Travel for in-person meetings planned and expenses claimed under the council rules.
                4. Your branch briefed after each meeting in its own language and time.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A member living abroad attends every council meeting for a year and holds a call with the chair between each one."
                cadence: rolling
              tasks:
                - "Convert the year's meeting dates into your local time"
                - "Set up a standing call with the chair between meetings"
                - "Confirm the next meeting time in your zone and block preparation time @recurring(quarterly)"
                - "Plan travel for in-person meetings under the council expense rules"
            - name: Assembly welcome for members coming of age
              description: |-
                ## Purpose
                Turning eighteen or twenty-one, the age at which many families invite members to vote at the assembly, is a moment parents can make memorable or let slip by. A short welcome, a letter from the chair, a guide to how the council and assembly work and a named contact, tells the new member their voice is wanted.

                ## Milestones
                1. Members reaching the eligibility age in the next year identified from the register.
                2. A welcome letter and a short guide to the council and assembly prepared.
                3. A family member named as contact for each new member.
                4. New members introduced at the assembly.

                ## Notes
                Keep this to the assembly welcome. Wider training and junior governance roles for young adults have their own programmes.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every member reaching eligibility age receives a welcome letter, a guide and a named contact before their first assembly."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List members reaching the eligibility age in the next year"
                - "Draft the chair's welcome letter and a four-page assembly guide"
                - "Ask a family member to be the contact for each new member"
                - "Add a short introduction of new members to the assembly programme"
            - name: Holding the council together after the founder's death
              description: |-
                ## Purpose
                When the founder or the family's senior figure dies, the council loses its tie-breaker and often its reason for meeting, just as grieving relatives face the largest decisions in years. Agreeing in advance how the council will carry on, who chairs, what pauses and what must continue, lets the family grieve without a governance vacuum.

                ## Milestones
                1. The founder's current council and assembly roles listed.
                2. Interim chair and decision rules agreed in advance with the founder's involvement.
                3. A list of decisions that pause and those that must continue during the first months.
                4. The plan filed with the council records and shared with the family's advisers.

                ## Notes
                This covers how the council keeps meeting. The estate, trusts and leadership succession are handled with the family's lawyers and through their own plans.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written continuity plan names an interim chair and lists decisions that pause or continue, and is filed with council records."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every council and assembly role the founder holds today"
                - "Agree an interim chair and decision rules with the founder"
                - "Write which council decisions pause and which continue"
                - "File the plan and send a copy to the family's lead adviser"
            - name: Annual council report to the assembly
              description: |-
                ## Purpose
                Every year the assembly should be able to see what the council did with the authority it was given. A short annual report, meetings held, decisions made, money spent, what went well and what did not, and priorities for next year, is how a council earns its renewal.

                ## Milestones
                1. A report outline agreed: activity, decisions, budget, lessons and priorities.
                2. Committee and family office inputs collected.
                3. The report approved by the council and posted to the portal before the assembly.
                4. Questions on the report answered at the assembly.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An approved annual council report is posted to the portal at least two weeks before every assembly."
                cadence: cyclic
              tasks:
                - "Agree a five-section outline for the annual report"
                - "Start drafting the annual council report for the assembly @recurring(yearly)"
                - "Collect committee and family office contributions"
                - "Post the approved report to the portal two weeks before the assembly"
            - name: Scaling the assembly past a hundred members
              description: |-
                ## Purpose
                Past a hundred members, a single room, one open floor session and a group email stop working, and the assembly risks becoming a party with a speech. Larger families move to branch delegates, breakout sessions, registered questions and a written record of each session, so that every member can still be heard.

                ## Milestones
                1. The current member count and a fifteen-year projection prepared.
                2. Formats used by large families reviewed with a governance adviser.
                3. A proposed format, such as branch breakouts and registered questions, piloted at one assembly.
                4. Results reviewed and the assembly rules updated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A new assembly format is piloted at one assembly and the assembly rules are updated after a written review."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Project family membership fifteen years ahead from the register"
                - "Ask a governance adviser how large families run their assemblies"
                - "Pilot branch breakouts and registered questions at one assembly"
                - "Review the pilot and propose changes to the assembly rules"
            - name: Family engagement survey across branches
              description: |-
                ## Purpose
                Attendance figures show who turned up, not who feels heard. A short yearly survey asking every eligible member how informed, involved and fairly treated they feel, broken down by branch and generation, shows the council where trust is thinning before it turns into a dispute.

                ## Milestones
                1. Twelve survey questions agreed, the same each year.
                2. The survey sent to every eligible member with an anonymous option.
                3. Results broken down by branch and generation where numbers allow.
                4. Findings and responses reported in the branch update letter.

                ## Notes
                Do not break results down for groups smaller than five people. Small groups make anonymous answers identifiable.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly survey reaches every eligible member and the results, by branch where safe, are reported back to the family."
                cadence: cyclic
              tasks:
                - "Agree twelve questions that will be asked every year"
                - "Run the family engagement survey with an anonymous option @recurring(yearly)"
                - "Break the results down by branch and generation where groups are large enough"
                - "Report the findings and the council's response in the branch letter"
            - name: External review of council effectiveness
              description: |-
                ## Purpose
                Five years in, a council can be running smoothly and still be missing the point, or the family has changed around it. An independent review by a family governance adviser, interviewing members and non-members and reading the minutes, gives an outside view the self-evaluation cannot.

                ## Milestones
                1. A brief for the review agreed, with the questions the council wants answered.
                2. An independent reviewer appointed after references are checked.
                3. Interviews held with council members, assembly members and the head of office.
                4. Recommendations discussed and an action plan adopted.
              priority: low
              deadlineOffsetDays: 270
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An external review report is received and the council adopts a written action plan in response."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft a one-page brief with the questions for the review"
                - "Shortlist two family governance advisers and check references"
                - "Arrange interviews with council members, assembly members and the office"
                - "Adopt an action plan in response to the recommendations"
---

# Family Council and Assembly

This area is for the parents and senior family members who sit on, chair or support a family council, and who want the wider family assembly to feel like a gathering worth attending rather than a duty. It starts with the foundations (terms of reference, branch seats, the invitation list, elections and the first meeting), moves into the meeting machinery and the skills of chairing and minuting, then covers decisions about format and size, the big dated events, the situations different family members find themselves in, and the specialist work of reporting to and scaling a large assembly.

The rhythm is quarterly: council packs a week ahead, the meeting, minutes within a week and a letter to every branch, with monthly action and agenda checks in between and a yearly cycle of assembly planning, self-evaluation, term expiries and the engagement survey. The Board meeting template suits the quarterly cycle, Meeting notes suits minutes, Feedback themes suits the suggestions channel and Vendor suits choosing a facilitator. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
