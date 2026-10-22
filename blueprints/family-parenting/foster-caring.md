---
id: family-parenting.foster-caring
name: Foster Caring
description: "Fostering from first enquiry to approval panel, then the recordings, reviews, family time, allowances and support that keep placements stable, with plans for arrivals, endings and specialist placements."
category: personal
version: 1.0.0
tags: [family-parenting, foster-caring, parent, carer, fostering, placements, safer-caring, family-time]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - monthly-budget-bills
    - reading-queue
    - operational-checklist
  pillars:
    - name: Family & Parenting
      emoji: "👨‍👩‍👧"
      description: "Raising children and holding a family together: each stage from pregnancy to young adulthood, schooling and activities, family logistics and traditions, extended family, and the decisions parents make together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Foster Caring
          description: "Becoming and working as a foster carer, from assessment and training to placements, reviews, contact arrangements and support."
          projects:
            - name: Deciding whether fostering fits your household
              description: |-
                ## Purpose
                Fostering asks for a spare bedroom, time for meetings and training, and a household that can absorb a child arriving with a carrier bag and a difficult past. Before ringing any service, an honest look at space, work, money, health and the views of everyone at home saves months of assessment that was never going to fit. Many people who enquire are not ready yet, and a clear not now is a good outcome too.

                ## Milestones
                1. Every adult in the household has said, separately, why they want to foster and what worries them.
                2. Space, working hours, income and health written down against the basic requirements most services publish.
                3. At least one experienced foster carer spoken to about a typical week.
                4. A recorded decision: enquire now, revisit on a set date, or not for us.

                ## Notes
                Most services require a spare bedroom for each fostered child, and many expect one carer to be available for school runs, meetings and sick days. Check the requirements of services near you before assuming either way.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written household decision to enquire now, revisit on a named date, or not foster, with each adult's reasons attached."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down separately why each adult in the house wants to foster"
                - "List spare rooms, working hours and regular commitments for every adult"
                - "Ask a local fostering service for its basic eligibility requirements"
                - "Arrange a conversation with an experienced foster carer about a typical week"
                - "Agree and write down the household decision with a revisit date"
            - name: Choosing a local authority or independent fostering service
              description: |-
                ## Purpose
                Foster carers are approved either by the local authority that holds legal responsibility for children in care or by an independent agency that the authority pays to find placements. The two differ in allowances, out-of-hours support, the size of the carer community and how many referrals arrive. Comparing three services on the same questions before an assessment starts avoids a transfer later.

                ## Milestones
                1. Three services within reasonable travel distance shortlisted, including your local authority.
                2. Each service asked the same eight questions about allowances, support, training and typical referrals.
                3. Answers laid out side by side in one table.
                4. A chosen service recorded, with the reason, and an initial home visit booked.

                ## Notes
                Ask each one what proportion of its carers have a child in placement right now. A generous allowance means little if referrals rarely come, and a local authority usually places children closer to their school and family.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison table of three fostering services answered on the same questions, with the chosen service and its initial visit date recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the fostering services that recruit within an hour of home"
                - "Write eight questions to ask every service, covering allowances, support and referrals"
                - "Attend an information evening or call each shortlisted service"
                - "Fill in the comparison table with each service's answers"
                - "Book the initial home visit with the service you chose"
            - name: Talking fostering through with your own children
              description: |-
                ## Purpose
                Birth children share their parents, their home and sometimes a bedroom wall with a fostered child, and their wellbeing is assessed as part of approval. Children who were asked for their views early, and told honestly what might change, cope far better with a fostered child's behaviour, the confidentiality rules and the goodbyes. Starting these conversations before the assessment means the assessor hears a considered view rather than a surprised one.

                ## Milestones
                1. Each of your children told, at their level, what fostering is and why the family is considering it.
                2. Their questions and worries written down in their own words.
                3. A plan for what stays theirs: their room, special time with a parent, and things they never have to share.
                4. Your children know who they can talk to, inside and outside the family, if fostering gets hard.

                ## Notes
                Many services run groups for the sons and daughters of foster carers. Ask whether yours does before approval, not after the first difficult placement.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each child in the household has been asked their views, their questions are written down, and a list of protected time and possessions is agreed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Plan a first conversation about fostering pitched at each child's age"
                - "Write down each child's questions and worries in their own words"
                - "Agree which rooms, belongings and one-to-one times stay protected"
                - "Ask the fostering service about groups for children of foster carers"
            - name: Spare bedroom and home safety check for fostering
              description: |-
                ## Purpose
                Before approval a social worker walks through the home with a health and safety checklist: the fostered child's bedroom, medicine storage, window restrictors, pets, ponds, firearms and the car. Fixing the obvious items yourself first shortens the assessment and turns the spare room into somewhere a frightened child might actually want to sleep.

                ## Milestones
                1. The service's own home safety checklist obtained and walked through room by room.
                2. Medicines, cleaning products, sharp tools and alcohol stored where a child cannot reach them.
                3. The spare bedroom furnished with a bed, storage, a lamp and a door that closes.
                4. Smoke alarms tested, and any pet assessment or vehicle check the service needs booked.

                ## Notes
                Keep the room fairly neutral. A child arriving at short notice often likes to choose a bedding set or poster, which gives them some control on day one.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every item on the service's home safety checklist is marked done or has a fix date, and the fostered child's bedroom is furnished and ready."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the fostering service for its home safety checklist"
                - "Walk the house room by room and note every item to fix"
                - "Fit a lockable cupboard for medicines and sharp tools"
                - "Furnish the spare bedroom with a bed, storage and a bedside lamp"
                - "Recheck the home against the safety checklist before each annual review @recurring(yearly)"
            - name: References, checks and medical for the assessment
              description: |-
                ## Purpose
                Before an assessment can finish, criminal record checks, a medical from your doctor, local authority checks, employer references, personal referees and sometimes ex-partners must all come back. Each runs on someone else's timetable, and a single slow referee is the most common reason assessments stall. Starting them in the first fortnight and chasing them from a list keeps the panel date in reach.

                ## Milestones
                1. Every check and reference the service needs listed, with who holds it.
                2. Personal referees chosen and warned that a social worker will visit them.
                3. Medical appointment booked and the form taken to your doctor.
                4. Each check marked returned on the list, with any delays chased within a week.

                ## Notes
                Tell the assessor early about anything in your history that a check might show, including old cautions or past relationships. Surprises late in assessment cause more trouble than the facts themselves.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A tracking list shows every required check, medical and reference as returned to the fostering service."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every check, medical and reference the service has asked for"
                - "Ask three personal referees and explain what the interview involves"
                - "Book the fostering medical with your doctor's practice"
                - "Tell your assessor about anything a background check might show"
                - "Chase any reference not returned after two weeks"
            - name: Pre-approval fostering preparation course
              description: |-
                ## Purpose
                Almost every service requires applicants to complete a preparation course, typically three days or several evenings, covering why children come into care, loss, abuse, working with birth families and safer caring. Treating it as study rather than a formality gives you language and examples the assessor will ask about later. Both carers in a couple usually have to attend in full.

                ## Milestones
                1. Course dates booked for every applicant in the household, with childcare and work cover arranged.
                2. Notes kept from each session, with questions to follow up.
                3. Two or three ideas from the course written up as how your household would handle them.
                4. Certificate or attendance record sent to your assessor.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every applicant has attended the full preparation course and sent the attendance record and a short reflection to the assessor."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Book the next preparation course dates for every applicant"
                - "Arrange work leave and childcare for each session"
                - "Write a page of notes and questions after each session"
                - "Send your attendance record and a short reflection to the assessor"
            - name: Assessment interviews and your life history
              description: |-
                ## Purpose
                The assessment is usually eight to twelve home visits over four to eight months in which a social worker writes a detailed report about you: childhood, relationships, parenting, finances, health, support network and motivation. Gathering dates, a family tree and a support map before the visits begin makes them conversations rather than interrogations. Reading the draft report carefully is your chance to correct facts before the panel sees them.

                ## Milestones
                1. A timeline of your life with key moves, relationships, jobs and losses written down.
                2. A family tree and a map of the people who would support you prepared.
                3. Visits booked in your calendar with time protected so they are not rushed.
                4. The draft assessment report read and factual corrections returned in writing.

                ## Notes
                Assessors look for honesty about hard experiences and how you made sense of them, not a perfect life. Disclosing difficulty early builds trust.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every assessment visit has taken place and your written corrections to the draft report were sent before the panel date was set."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Draft a timeline of your life from childhood to today"
                - "Draw a family tree and a map of people who would support you"
                - "Block out each assessment visit in your calendar"
                - "Ask the agent to compare the draft report against your timeline for factual errors"
                - "Send your written corrections on the draft report to the assessor"
            - name: Approval range for ages, numbers and placement types
              description: |-
                ## Purpose
                Approval states which children you can care for: age range, how many at once, siblings or not, and types such as short term, long term, emergency, short breaks or parent and child. Asking for a range that fits your home and experience, rather than whatever the service is short of, protects your own children and makes placements more likely to last. The range can be widened later once you have experience.

                ## Milestones
                1. Each carer's preferences on age, number of children and placement type written down.
                2. Those preferences tested against your bedrooms, work pattern and the ages of your own children.
                3. A shared range agreed and discussed with the assessor.
                4. The range in the panel recommendation checked against what you agreed.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written approval range for age, number and placement type, agreed by every carer and matching the recommendation that goes to panel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down each carer's preferred ages and placement types separately"
                - "Compare the preferences against your bedrooms and the ages of your own children"
                - "Agree one approval range and send it to your assessor"
                - "Check the panel recommendation matches the range you agreed"
            - name: Fostering panel preparation
              description: |-
                ## Purpose
                The panel is a meeting of social workers, a medical adviser, experienced carers and independent members who read your assessment and recommend whether to approve you. It usually lasts thirty to sixty minutes, and the agency decision maker confirms the outcome afterwards. Knowing the likely questions, rereading your report and arriving calm makes the day feel like the end of a process rather than an exam.

                ## Milestones
                1. Your full assessment report reread in the week before panel.
                2. Answers to five likely questions practised aloud with your partner or a friend.
                3. Travel, childcare and time off arranged for panel day.
                4. The panel recommendation and the decision maker's written decision filed.

                ## Notes
                Panel members often ask what you would find hardest, how your own children feel and who supports you. Saying you do not know yet is acceptable.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Panel attended and the written decision from the agency decision maker is filed in your fostering records folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the panel date, time and venue with your assessor"
                - "Reread your assessment report and mark anything you want to clarify"
                - "Practise answers to five likely panel questions aloud"
                - "Arrange childcare and leave for panel day"
                - "File the written approval decision when it arrives"
            - name: Household safer caring policy
              description: |-
                ## Purpose
                Children in care may have been harmed in ways that shape how they react to touch, bathrooms, bedrooms and privacy, and foster carers are more exposed to misunderstanding and allegations than most parents. A written safer caring policy sets the household rules: who goes in whose bedroom, bathroom routines, how affection is shown, how visitors and babysitters are handled. It is reviewed with each new child and every year.

                ## Milestones
                1. A draft policy covering bedrooms, bathrooms, touch, privacy, photographs, visitors and babysitters.
                2. Every adult and older child in the house has read the rules that apply to them.
                3. The policy agreed with your supervising social worker and filed.
                4. A child-friendly version ready to share with each new child at the welcome.

                ## Notes
                Start from the **Risk register** template to list the situations that need a rule. Write the policy for your actual house: if the bathroom has no lock, say what happens instead.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written safer caring policy agreed with your supervising social worker, with a child-friendly version, is filed and has been reviewed in the last year."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the situations in your home that need a safer caring rule"
                - "Draft the policy and a short child-friendly version"
                - "Go through the rules with every adult and older child in the house"
                - "Agree the final version with your supervising social worker"
                - "Review the safer caring policy with your supervising social worker @recurring(yearly)"
            - name: Confidential fostering records folder
              description: |-
                ## Purpose
                A foster carer holds sensitive information: placement plans, health details, family time arrangements and their own daily recordings, all covered by data protection rules. A locked cabinet for paper and a service-approved system for digital files, organised the same way for every child, means anything asked for at a review or during an allegation can be found in minutes. It also means a child's information leaves with them cleanly when they move on.

                ## Milestones
                1. A lockable cabinet or box set up for paper records.
                2. A secure digital folder structure, one per child, approved by your service.
                3. Standard sections in place: placement plan, delegated authority, health, education, family time, recordings, correspondence.
                4. Rules written for what can and cannot be kept on personal phones.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A locked paper store and a service-approved digital folder exist with the same seven sections ready for each child."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your service which digital systems it allows for storing records"
                - "Buy or set aside a lockable cabinet for paper documents"
                - "Create the seven standard sections for a child's records"
                - "Move any child information off personal phones into the secure folder"
            - name: Daily recording routine for each child in placement
              description: |-
                ## Purpose
                Services ask carers to write daily or near-daily notes on each fostered child: health, mood, sleep, school, family time, incidents and achievements. Done every evening in ten minutes, these notes become evidence at reviews, protect you if an allegation is made, and may one day be read by the child as part of their own history. Left for a week, they become guesswork.

                ## Milestones
                1. Recording format and submission day agreed with your supervising social worker.
                2. A ten-minute evening slot fixed and kept on most days.
                3. Incidents written up on the same day with the time, what happened and what you did.
                4. Each week's recordings sent or uploaded to the service on the agreed day.

                ## Notes
                Write facts and the child's own words, not labels. 'Threw his plate and said he hated living here' is useful; 'was naughty at tea' is not.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Recordings exist for at least five days in every seven for each child, and each week's notes reached the service on the agreed day."
                cadence: rolling
              tasks:
                - "Agree the recording format and submission day with your supervising social worker"
                - "Set a ten-minute evening reminder for recording"
                - "Write today's recording for each child in placement @recurring(daily)"
                - "Send the week's recordings to the fostering service @recurring(weekly:fri)"
            - name: Supervision visits with your supervising social worker
              description: |-
                ## Purpose
                Approved carers have a supervising social worker, separate from the child's social worker, who visits about monthly to support you, check standards and look at recordings. Carers who arrive with an agenda get practical help; those who do not tend to spend the hour on small talk and leave with their real worries unsaid. Notes after each visit build a record of what support was promised.

                ## Milestones
                1. Visits booked at a regular interval agreed with the service.
                2. An agenda written before each visit covering the child, your household, training and support needs.
                3. Notes of agreed actions kept after every visit.
                4. Unresolved requests followed up in writing within two weeks.

                ## Notes
                Start from the **Meeting notes** template for each visit. At least one visit a year is usually unannounced, so keep records current rather than tidying for visits.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each supervision visit in the last six months has a written agenda and action notes, and every agreed action has an owner."
                cadence: rolling
              tasks:
                - "Confirm how often supervision visits will happen and book the next one"
                - "Draft the agenda for the next supervision visit @recurring(monthly:9)"
                - "Write up agreed actions within a day of each visit"
                - "Email a follow-up on any request not answered within two weeks"
            - name: Fostering allowance, expenses and child savings ledger
              description: |-
                ## Purpose
                Fostering allowances cover the child's food, clothes, travel, activities and pocket money, and many services expect a set amount to go into savings for the child each week. A simple ledger that splits the allowance into these headings shows the money is reaching the child and gives you evidence if the allowance falls short. It also answers the questions a reviewing officer asks about clothing and savings.

                ## Milestones
                1. The service's allowance breakdown and savings expectations obtained in writing.
                2. A monthly ledger with headings for food, clothing, activities, pocket money, travel and savings.
                3. A savings account set up in the way the service directs, with regular deposits.
                4. Receipts for larger purchases kept with the ledger.

                ## Notes
                Start from the **Monthly budget and bills** template. Clothing and savings records usually go with the child when they move, so keep them per child.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ledger for each child shows twelve months of allowance spending by heading and regular savings deposits matching the service's expectation."
                cadence: rolling
              tasks:
                - "Ask the service for its allowance breakdown and savings guidance"
                - "Set up a ledger with a heading for each allowance category"
                - "Reconcile the month's spending and receipts in the ledger @recurring(monthly:25)"
                - "Pay the agreed savings amount into the child's savings account @recurring(monthly:2)"
            - name: Foster care income tax records
              description: |-
                ## Purpose
                In many countries foster carers are treated as self-employed for tax and need to register, keep records and file a return, though special reliefs often mean little or no tax is due. Keeping a year's payment statements and placement dates in one place makes the return a short task rather than a scramble. The rules differ by country, so confirm them with the tax authority or an adviser who knows fostering.

                ## Milestones
                1. Your tax position as a foster carer confirmed with the tax authority, a carers' association or an adviser.
                2. Registration completed if your country requires it.
                3. Payment statements and placement dates for the tax year filed together.
                4. The return submitted by the deadline, with a copy saved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A complete file of payment statements and placement dates for the last tax year exists and the return, if required, was filed on time."
                cadence: cyclic
              tasks:
                - "Find your tax authority's guidance on foster carers' income"
                - "Ask your fostering association whether it offers tax help for members"
                - "File each payment statement in the tax year folder @recurring(quarterly)"
                - "Submit the annual return and save a copy @recurring(yearly)"
            - name: Family time arrangements and handovers
              description: |-
                ## Purpose
                Most children in care see parents, siblings or grandparents at set times, often called family time or contact, sometimes supervised at a centre and sometimes in the community. Carers usually handle the transport, the handover and the aftermath, when a child may be elated, silent or furious. A weekly check of the arrangements and short notes on how the child was before and after give the child's social worker evidence to adjust plans.

                ## Milestones
                1. Each child's family time schedule, venues and supervision arrangements written in one place.
                2. A handover routine agreed: where, who speaks, what passes between homes.
                3. Before and after notes recorded for every session.
                4. Patterns from the notes raised at the next review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every family time session in the past month has a before and after note, and the schedule matches the one in the child's care plan."
                cadence: rolling
              tasks:
                - "Write out each child's family time schedule and venues"
                - "Agree a handover routine with the child's social worker"
                - "Confirm next week's family time, transport and venues @recurring(weekly:sun)"
                - "Note the child's mood before and after each session"
            - name: Health assessments and consents for a child in care
              description: |-
                ## Purpose
                Children in care have an initial health assessment soon after arriving, review assessments at set intervals, and dental and optical checks, and carers usually take them. Who can consent to treatment, vaccinations and minor procedures depends on the child's legal status and the delegated authority agreed. A tracker of due dates and consents prevents missed appointments and awkward moments at the surgery.

                ## Milestones
                1. The child registered with a doctor, dentist and optician near your home.
                2. The initial or review health assessment date known and attended.
                3. A written record of who can consent to which kinds of treatment.
                4. Due dates for the next assessments and checks in the family calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every child in placement has a current health assessment, dental check and consent record, with the next due dates in the calendar."
                cadence: cyclic
              tasks:
                - "Register the child with a doctor, dentist and optician"
                - "Ask the child's social worker who can consent to treatment"
                - "Record the date of the next health assessment and dental check"
                - "Check health, dental and optical due dates for each child @recurring(quarterly)"
            - name: Personal education plan meetings each term
              description: |-
                ## Purpose
                Each school-age child in care has a personal education plan, reviewed at a meeting with the designated teacher, the child's social worker and the carer, often termly. It sets targets and can release extra funding for tutoring or equipment. Arriving with what you have seen at home, homework, friendships and mood, makes the targets realistic, and checking them mid-term keeps them alive.

                ## Milestones
                1. The designated teacher's name and contact details recorded.
                2. Your observations from home written before each meeting.
                3. Targets and any funded support written down after each meeting.
                4. Progress on targets checked midway through the term.

                ## Notes
                Start from the **Meeting notes** template. Ask what the extra funding for children in care is being spent on; carers can suggest things like a tutor or a club.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each term's education plan meeting has your written home observations and a note of agreed targets and funded support."
                cadence: cyclic
              tasks:
                - "Find out who the school's designated teacher for children in care is"
                - "Write your home observations before each education plan meeting @recurring(quarterly)"
                - "Record the targets and funded support agreed at the meeting"
                - "Ask the designated teacher how the extra funding is being used"
            - name: Child's care plan review meetings
              description: |-
                ## Purpose
                A child in care has statutory reviews chaired by an independent reviewing officer, typically within the first month, then at three months and every six months after. The review looks at the care plan, family time, health, education and the child's wishes, and carers write a report beforehand. Preparing that report from your recordings, and helping the child say what they want, keeps the meeting about the child rather than the paperwork.

                ## Milestones
                1. Review dates for each child known and in the calendar.
                2. Carer's report completed from your recordings a week before.
                3. The child helped to give their views in writing, a drawing or directly to the reviewing officer.
                4. Review decisions filed and the actions that are yours completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A carer's report was submitted before each review in the past year and the child's views reached the reviewing officer every time."
                cadence: cyclic
              tasks:
                - "Add each child's next review date to the calendar"
                - "Draft the carer's report from the last period's recordings"
                - "Help the child choose how to share their views at the review"
                - "File the review decisions and list the actions that are yours"
            - name: Annual foster carer review
              description: |-
                ## Purpose
                Once a year the service reviews your approval, gathering views from the children you cared for, their social workers, your own children and you, and sometimes takes the review back to panel. Carers who keep a training log and a few lines on each placement through the year find this a reflection rather than a chore. It is also the moment to ask for a change to your approval range or more support.

                ## Milestones
                1. Training attended in the year listed with dates and hours.
                2. A short summary of each placement in the year written.
                3. Your self-assessment completed and your own children's views gathered.
                4. The review outcome and any change to approval terms filed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The annual review paperwork, training log and placement summaries were submitted by the service's deadline and the outcome is filed."
                cadence: cyclic
              tasks:
                - "Ask your supervising social worker when your annual review falls"
                - "Log each training session attended with date and hours @recurring(quarterly)"
                - "Write a short summary of every placement in the review year"
                - "Decide whether to ask for a change to your approval range at the review"
                - "Complete the self-assessment form for the annual review @recurring(yearly)"
            - name: Carer support network and recharge routine
              description: |-
                ## Purpose
                Fostering is tiring in ways friends often do not see: broken nights, hostile messages, meetings in school hours and grief when children leave. Carers who use the support group, a buddy carer and their entitlement to breaks last longer and make fewer decisions from exhaustion. Building that network deliberately, and booking time off before you need it, is part of the job.

                ## Milestones
                1. Local carer support group and out-of-hours line details saved.
                2. A buddy or mentor carer named and contacted.
                3. A regular evening or afternoon off agreed with your partner or a trusted friend.
                4. Signs that you need more support written down and shared with your supervising social worker.

                ## Notes
                Grief after a child moves on is normal even when the move is right. Many services offer counselling for carers; ask about it before you need it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over three months you attended at least two support group sessions and took a protected break in most weeks."
                cadence: rolling
              tasks:
                - "Save the out-of-hours support number in every carer's phone"
                - "Ask your service to link you with a buddy carer"
                - "Attend the local foster carer support group @recurring(monthly:18)"
                - "Take your protected evening off this week @recurring(weekly:wed)"
                - "Write the three signs that tell you that you need extra support"
            - name: Trauma and attachment basics for children in care
              description: |-
                ## Purpose
                Many children in care have lived with neglect, violence or repeated moves, and their behaviour often makes sense as survival: hoarding food, rejecting kindness, controlling everything or charming every adult. Understanding developmental trauma and attachment changes how you read a meltdown and how you respond. A short course plus two good books gives a working model you can use on a hard Tuesday.

                ## Milestones
                1. One trauma and attachment course completed through your service or a recognised provider.
                2. Two recommended books read, with notes on what applies to your household.
                3. A one-page summary of what a child's behaviour might be communicating.
                4. The ideas discussed with your supervising social worker against a real situation.

                ## Notes
                Start from the **Reading queue** template to keep the books your service and other carers recommend.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One trauma-informed course completed, two books read and a one-page behaviour-as-communication summary discussed in supervision."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask your service which trauma and attachment training it offers"
                - "Choose two recommended books on developmental trauma"
                - "Write a one-page summary of what behaviour might be communicating"
                - "Discuss one real incident using the summary at supervision"
            - name: Therapeutic parenting with playfulness, acceptance, curiosity and empathy
              description: |-
                ## Purpose
                Reward charts and time out often backfire with children who expect adults to reject them. Therapeutic parenting built on playfulness, acceptance, curiosity and empathy, alongside firm structure, is widely taught to foster carers because it keeps connection while setting limits. Practising a few phrases and routines until they come naturally matters more than reading about them.

                ## Milestones
                1. The core ideas of the approach learned through a course, workshop or book.
                2. Five phrases for curious, non-blaming responses written and practised.
                3. A predictable daily routine with visual reminders set up.
                4. A month of notes on which responses calm things and which escalate them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Five practised therapeutic responses and a visual daily routine are in use, with a month of notes on what calmed or escalated situations."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Book a therapeutic parenting workshop through your service"
                - "Write five curious, non-blaming phrases to use when a child is dysregulated"
                - "Make a visual daily routine for the fridge or bedroom door"
                - "Note after each hard moment which response helped and which did not"
            - name: Delegated authority record for each child
              description: |-
                ## Purpose
                Delegated authority sets out which everyday decisions the foster carer can make alone, such as haircuts, school trips, sleepovers, minor treatment, social media and holidays, and which need the social worker or a parent. Without it written down, carers either ask permission for everything or make decisions they were not entitled to. Agreeing it in the first weeks of every placement removes a constant source of friction for the child.

                ## Milestones
                1. Delegated authority discussed at the placement planning meeting.
                2. A written record covering at least health, education, leisure, overnight stays, appearance and travel.
                3. A copy kept in the child's records and a short summary shared with the child where suitable.
                4. The record revisited at each review and updated if the plan changes.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed delegated authority record covering health, education, leisure, overnight stays, appearance and travel is in each child's file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the child's social worker for the delegated authority form"
                - "Go through each decision area at the placement planning meeting"
                - "File the signed record and give the child a summary they understand"
                - "Check the delegated authority record still fits the care plan @recurring(quarterly)"
            - name: Writing factual recordings a child could read later
              description: |-
                ## Purpose
                Adults who grew up in care often request their files and read what carers wrote about them as children. Recordings that are factual, kind and specific, with achievements as well as incidents, serve the child years later and stand up in court or an allegation investigation now. A little practice in separating observation from opinion improves every note you write.

                ## Milestones
                1. Your service's recording guidance read.
                2. Three of your own past recordings rewritten to separate fact, the child's words and your opinion.
                3. A list of phrases to avoid, with alternatives, kept by the recording slot.
                4. Feedback on your recordings asked for at supervision.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three rewritten recordings and a list of phrases to avoid have been reviewed with your supervising social worker."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read your service's guidance on writing recordings"
                - "Rewrite three past recordings to separate fact, quotes and opinion"
                - "Make a list of labels to avoid with plain alternatives"
                - "Ask for feedback on a week of recordings at your next supervision"
            - name: Legal status of a placement and who decides what
              description: |-
                ## Purpose
                A child might be in care by agreement with their parents, under an interim or full court order, or on remand, and each status changes who holds parental responsibility, how long the placement might last and what parents can insist on. Carers who understand the basics avoid promising things they cannot deliver and follow court timetables with less anxiety. The aim is knowing which questions to ask, not forming legal opinions.

                ## Milestones
                1. The main legal routes into care where you live listed in plain words.
                2. Each child's legal status and who holds parental responsibility recorded.
                3. Key court or review dates noted where relevant.
                4. Questions you still have answered by the child's social worker.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each child's file records their legal status, who holds parental responsibility and any court dates, confirmed by their social worker."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read your service's guide to the legal routes into care"
                - "Ask the child's social worker for the child's legal status"
                - "Record who holds parental responsibility in the child's file"
                - "Note any court dates that may affect family time or plans"
            - name: What happens if an allegation is made
              description: |-
                ## Purpose
                Foster carers are more likely than most parents to face an allegation or complaint, often from a child misreading care or repeating past harm, and investigations can take months. Knowing the procedure, your right to independent support, and how your recordings and safer caring policy protect you, turns a crisis into a process. Joining a carers' association with an advice line before you need it is the single most useful step.

                ## Milestones
                1. Your service's allegations procedure read and your questions answered.
                2. Membership of a foster carers' association with an independent advice line in place.
                3. Out-of-hours numbers and the name of who to call first written down.
                4. A plan for your own children and finances if a placement is paused during an investigation.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The allegations procedure has been read, association membership with an advice line is active and a written plan for an investigation period exists."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your service for its allegations and complaints procedure"
                - "Join a foster carers' association that offers independent advice"
                - "Write down who you would call first and their numbers"
                - "Ask whether allowances continue during an investigation"
            - name: Supporting a child's identity, culture and faith
              description: |-
                ## Purpose
                When a child is placed with carers from a different ethnicity, culture or faith, they can lose touch with food, hair and skin care, language, festivals and community that matter to who they are. Finding out what matters to this child and their family, and building it into ordinary weeks, tells the child their background is valued rather than left at the door. Asking the child and their parents directly beats guessing.

                ## Milestones
                1. The child and, where suitable, their parents asked what matters about culture, faith, language and appearance.
                2. Practical gaps identified, such as hair products, food, places of worship or language.
                3. At least two regular links with the child's community in place.
                4. Identity needs recorded at the next care plan review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The child's identity needs are written in their care plan and at least two regular community or cultural links are happening."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the child what they want you to know about their culture and faith"
                - "Ask the child's social worker what the family has said about identity needs"
                - "Find local shops, groups or places of worship that matter to the child"
                - "Plan one cultural or faith activity with the child @recurring(monthly:12)"
            - name: Photos, social media and identifying details rules
              description: |-
                ## Purpose
                Photos of a fostered child on social media can reveal their location to someone a court has decided must not know it, and school, club and party photos spread beyond your control. Clear household rules, agreed with the child's social worker and explained to relatives and other parents, prevent accidental disclosures. The rules also cover the child's own phone and online contact from birth family.

                ## Milestones
                1. Rules agreed with the child's social worker on photographs, social media and naming.
                2. School and clubs told the child must not appear in public photos.
                3. Relatives and friends asked not to post photos or tag locations.
                4. The child's own phone use and contact risks discussed with them and their social worker.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written photo and social media rules exist for each child, and the school, clubs and close relatives have been told."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the child's social worker about photo and social media restrictions"
                - "Tell the school and clubs that the child must not appear in public photos"
                - "Message close relatives asking them not to post or tag the child"
                - "Agree rules for the child's own phone and messages from family"
            - name: Referral checklist for saying yes or no to a child
              description: |-
                ## Purpose
                Referrals often arrive by phone with a few lines of information and a request for an answer within the hour. A checklist of questions about behaviour, health, school, family time travel, safety risks and likely length of stay means you decide with facts and your household in mind rather than from guilt. Saying no to a poor match protects both the child and your family.

                ## Milestones
                1. A one-page list of questions to ask about every referral.
                2. Household limits agreed in advance, such as risks you cannot manage alongside your own children.
                3. A rule for who in the house must agree before you say yes.
                4. Each referral decision noted with the reason.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page referral checklist and agreed household limits are kept by the phone and every referral decision since has a written reason."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the ten questions you need answered before accepting a referral"
                - "Agree with your partner the risks your household cannot manage"
                - "Keep the checklist where you take calls from the service"
                - "Record each referral, your answer and the reason"
            - name: Arranging a respite carer the child already knows
              description: |-
                ## Purpose
                Planned short breaks, often called respite, are part of many fostering arrangements, but a weekend with strangers can feel like another rejection to a child. Matching a regular respite carer early, with tea visits before any overnight stays, makes breaks a familiar treat and gives you real rest. Keep the child's routine, comforters and food preferences consistent between homes.

                ## Milestones
                1. Respite entitlement and the booking process confirmed with your service.
                2. A respite carer identified and introduced to the child in short visits.
                3. A one-page care sheet with routines, food, comforters and triggers shared.
                4. The first overnight stay completed and talked through with the child.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A named respite carer has met the child at least twice and one overnight break has taken place with a shared care sheet."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your service how respite is arranged and how much is available"
                - "Arrange two short visits for the child to meet the respite carer"
                - "Write a one-page care sheet covering routines, food and comforters"
                - "Ask the child afterwards what they liked and did not like about the stay"
            - name: Work, income and who stays home to foster
              description: |-
                ## Purpose
                Many services expect one carer to be available in school hours for meetings, family time and calls from school, and fees for some placement types are designed to replace part of a salary. Working out the household budget at realistic allowance levels, gaps between placements included, shows whether one carer can reduce hours, go part time or leave work. The choice also shapes which placements you can take.

                ## Milestones
                1. Typical weekly allowance and fee levels for your approval range confirmed in writing.
                2. A budget showing household income with and without a placement for three months.
                3. Options compared: full-time work, reduced hours, flexible work or leaving.
                4. A decision recorded and raised with your employer if hours change.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A budget comparing income with and without a placement, and a recorded decision on each carer's working pattern."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the service for written allowance and fee levels for your approval range"
                - "Build a budget that includes three months with no placement"
                - "Compare reduced hours, flexible working and leaving work"
                - "Ask the agent to draft a flexible working request if you choose reduced hours"
            - name: Becoming a long-term carer for a child already placed
              description: |-
                ## Purpose
                When a child cannot return home, the plan may become long-term fostering, sometimes with the current carers if the match is strong. Saying yes means committing to the child until adulthood and often beyond, with a matching panel, a change in support and possibly different legal arrangements. Weighing it carefully, with your own children and future plans in view, is fairer to the child than a decision made from attachment alone.

                ## Milestones
                1. The child's permanence plan and the options being considered understood.
                2. Your household's long-term capacity discussed openly, including retirement, moves and your own children.
                3. Support for long-term carers, including any legal orders, set out in writing.
                4. Your decision given to the child's social worker and, if yes, matching paperwork started.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written household decision on offering long-term care for the child, with the support package and next steps confirmed by the service."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the child's social worker what permanence options are being considered"
                - "Talk with your own children about the child staying long term"
                - "Request the support package for long-term carers in writing"
                - "Tell the social worker your decision and the reasons"
            - name: Emergency placement bag and first-night plan
              description: |-
                ## Purpose
                Emergency placements can arrive at eleven at night with a child, a police officer and no belongings. A packed box of new pyjamas, toothbrushes, underwear in several sizes, a phone charger, a nightlight and simple food, plus a written first-night checklist, means the child is clean, fed and asleep without a late supermarket trip.

                ## Milestones
                1. A box packed with clothing in several sizes, toiletries, chargers and comfort items.
                2. A first-night checklist of questions to ask the placing worker before they leave.
                3. The spare bed made and a welcome note ready.
                4. The box restocked after every use.

                ## Notes
                Start from the **Operational checklist** template for the first-night checklist. Ask the placing worker about allergies, medicines and anyone who must not learn the address before they leave.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stocked emergency box and a written first-night checklist are ready, and the box has been restocked after each use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Buy pyjamas, underwear and toothbrushes in a range of sizes"
                - "Write the first-night checklist of questions for the placing worker"
                - "Pack a box with clothing, toiletries, chargers and a nightlight"
                - "Check the emergency box for sizes and missing items @recurring(quarterly)"
            - name: First 72 hours after a child arrives
              description: |-
                ## Purpose
                The first three days set the tone of a placement: the child is frightened, often hungry, and possibly grieving a parent, siblings or a pet. A plan for the arrival, simple house rules in pictures, familiar food, a tour of their room and the calls the child is allowed to make gets everyone through the first nights calmly. The essential paperwork must arrive too: placement agreement, medical consent and any risk information.

                ## Milestones
                1. A welcome book with photos of the house, family and pets ready to give.
                2. Placement agreement, medical consent and risk information received within 72 hours.
                3. School or nursery attendance arranged, with transport.
                4. The first recording written and your supervising social worker updated.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within three days of arrival the placement paperwork is received, the school arrangement is in place and the first recordings are written."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Make a welcome book with photos of your home, family and pets"
                - "Ask for the placement agreement and medical consent before the worker leaves"
                - "Arrange school transport for the child's first morning"
                - "Call your supervising social worker at the end of day one"
            - name: Placement planning meeting in the first week
              description: |-
                ## Purpose
                Within days of a child arriving, a meeting brings together the child's social worker, your supervising social worker, you and sometimes the parents to agree the placement plan: routines, family time, school, health, delegated authority and what the child is told. Going in with your questions written means the gaps that cause trouble later, like who signs school trip forms, are closed early.

                ## Milestones
                1. The meeting date confirmed within the timescale your service sets.
                2. Your questions and observations from the first days prepared.
                3. The placement plan agreed, with a copy in the child's records.
                4. Actions assigned to you completed within two weeks.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An agreed placement plan is in the child's file and your actions from the meeting were completed within two weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the placement planning meeting date"
                - "Write your questions on routines, school, health and family time"
                - "Ask for a copy of the agreed placement plan"
                - "Complete your actions from the meeting within two weeks"
            - name: Birthdays and festivals with birth family in mind
              description: |-
                ## Purpose
                Birthdays, religious festivals and family holidays are often the hardest days for a child in care, with loyalty to birth family, cards that may or may not arrive and memories of past celebrations. Planning them with the child's social worker, involving parents where the plan allows and keeping the day low key if the child wants, protects the child from disappointment and conflict.

                ## Milestones
                1. Key dates for the child, including family birthdays and anniversaries, listed.
                2. Arrangements for cards, gifts and calls from birth family agreed with the social worker.
                3. The child asked how they want the day to go.
                4. The day talked over afterwards and notes kept for next year.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The child's birthday or main festival had agreed birth family arrangements and a plan the child helped make, with notes saved for next year."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the child's important dates, including family birthdays and anniversaries"
                - "Ask the social worker how birth family cards and calls are handled"
                - "Ask the child what they would and would not like on the day"
                - "Write a few lines afterwards on what to repeat or change"
            - name: Holidays and travel abroad with a child in care
              description: |-
                ## Purpose
                Taking a fostered child on holiday usually needs permission from the child's social worker and sometimes from parents or a court, and travel abroad may need a passport application signed by someone with parental responsibility plus a letter of consent. Starting the paperwork four to six months ahead stops a family holiday being booked for a child who cannot go.

                ## Milestones
                1. Permission for the trip requested in writing with dates and destination.
                2. Passport or identity documents applied for through the right person.
                3. A consent letter and emergency contact details carried on the trip.
                4. Family time missed during the holiday rearranged.

                ## Notes
                Book only refundable arrangements for the child until written consent arrives.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written consent, valid travel documents and rearranged family time were all in place before the trip began."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Email the child's social worker with holiday dates and destination"
                - "Ask who must sign the child's passport application"
                - "Get a signed consent letter to carry while travelling"
                - "Rearrange any family time that falls during the holiday"
            - name: Planned move to adoption, home or a new placement
              description: |-
                ## Purpose
                Planned endings, whether a return home, a move to adopters or a step to long-term carers, go best when the child has been told honestly, has a timetable they understand and sees their carers and new family working together. Carers pass on routines, favourite foods and the child's belongings in good condition, and often stay in touch afterwards if the plan allows.

                ## Milestones
                1. An introductions or transition timetable agreed and explained to the child.
                2. Belongings, records, savings and a routine sheet ready to go with the child.
                3. A goodbye planned with the child: a small party, a photo book or a last outing.
                4. Arrangements for staying in touch agreed and written down.

                ## Notes
                Pack belongings in proper bags or suitcases, never bin bags. Children notice how their things are moved.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The child moved on the agreed date with belongings, records, savings and a routine sheet, and staying-in-touch arrangements are written down."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask for the transition timetable in writing"
                - "Write a routine sheet with sleep, food and comfort details for the new carers"
                - "Make a photo book of the child's time in your home"
                - "Pack the child's belongings in suitcases with their savings book and records"
            - name: Unplanned ending and disruption meeting
              description: |-
                ## Purpose
                Sometimes a placement ends suddenly: a crisis, an allegation, or a recognition that the household cannot keep a child safe. Afterwards a disruption meeting looks at what happened without blame, so the next placement for the child and for you is better matched. Carers who prepare honestly and look after themselves recover faster and foster again.

                ## Milestones
                1. The key events leading to the ending set out from your recordings.
                2. The support you asked for and received listed.
                3. Your account given at the disruption meeting.
                4. Lessons for your approval range, support or training agreed with your supervising social worker.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "Your written account was given at the disruption meeting and the lessons agreed are recorded in your supervision notes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a timeline of events from your recordings"
                - "List the support you asked for and what you actually received"
                - "Attend the disruption meeting with your supervising social worker"
                - "Agree any change to support or approval range at supervision"
            - name: Family and friends fostering for a relative's child
              description: |-
                ## Purpose
                Grandparents, aunts, older siblings and family friends who step in when a child cannot live with their parents often become family and friends foster carers, assessed while the child is already living with them. The assessment, the money and the relationships with the child's parents all work differently from mainstream fostering. Knowing the options, including other legal orders, helps you ask for the right support.

                ## Milestones
                1. Your status as a family and friends carer confirmed and the assessment timetable known.
                2. The allowances and support you are entitled to set out in writing.
                3. Ground rules for contact with the child's parents agreed with the social worker.
                4. Longer-term options, such as a guardianship or residence order, explained by the service or an independent adviser.
              priority: medium
              deadlineOffsetDays: 112
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your family and friends carer assessment is complete, your allowance is confirmed in writing and longer-term options have been explained."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the child's social worker how your assessment as a family carer will run"
                - "Request written confirmation of the allowance and support you will receive"
                - "Contact a kinship carers' advice service for independent guidance"
                - "Agree ground rules for seeing the child's parents"
            - name: Parent and child placements
              description: |-
                ## Purpose
                In a parent and child placement, a young parent and their baby live with the foster carer, who supports and closely observes the parent's care, often to inform a court decision. The work involves detailed recording, teaching baby care and handling a parent who may resent being watched. Extra training and clear written agreements before the first placement are essential.

                ## Milestones
                1. Specialist parent and child training completed.
                2. A room set up for a parent and baby, with a safe sleep space.
                3. Recording expectations for court understood, including what to observe and how.
                4. An agreement on your role, house rules and the parent's responsibilities written down.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Parent and child training completed, a room set up for a parent and baby, and a written role agreement ready for the first placement."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your service about parent and child approval and training"
                - "Set up a room with space for a parent and a safe cot"
                - "Learn what the court needs from your observations"
                - "Draft house rules and a role agreement for the parent"
            - name: Fostering teenagers and the missing from care protocol
              description: |-
                ## Purpose
                Teenagers in care face higher risks of going missing, exploitation and criminal involvement, and they need carers who balance freedom with safety. Every young person in care should have an agreed protocol for when they are late or missing, saying when to call the police and the service. Knowing it, with a photo and description ready, and building independence skills month by month, makes the difference.

                ## Milestones
                1. Each young person's missing from care protocol read and agreed, with a current photo and description on file.
                2. Curfews and check-in rules agreed with the young person and their social worker.
                3. Signs of exploitation learned and a reporting route known.
                4. One independence skill, such as budgeting or cooking, practised each month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A current missing protocol, photo and description are on file for each young person, and a monthly independence skill plan is running."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the young person's missing from care protocol with their social worker"
                - "Take a current photo and write a physical description for the file"
                - "Agree curfew and check-in rules with the young person"
                - "Practise one independence skill with the young person @recurring(monthly:20)"
            - name: Short breaks fostering for disabled children
              description: |-
                ## Purpose
                Short breaks fostering gives families of disabled children regular overnight stays, perhaps one weekend a month, with a carer who knows their child well. For carers it means learning personal care, medical routines, equipment and communication methods, and building trust with parents who remain in charge. It suits people who want to foster alongside other commitments.

                ## Milestones
                1. Short breaks approval and any extra training, such as moving and handling or medication, completed.
                2. A detailed care plan for each child received, with the parents' preferences.
                3. Equipment or adaptations in place for the child's needs.
                4. A regular schedule agreed with the family.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Training required for each child's care is complete and a regular short breaks schedule is agreed with the family in writing."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your service about short breaks approval for disabled children"
                - "Complete moving and handling or medication training if required"
                - "Visit the family at home to learn the child's routines"
                - "Agree a regular short breaks schedule with the family"
            - name: Fostering unaccompanied young people seeking asylum
              description: |-
                ## Purpose
                Young people who arrive in a country alone to seek asylum are often placed with foster carers, bringing trauma, language barriers, legal processes and sometimes disputes about age. Carers help with interpreters, solicitors' appointments, education, cultural and faith needs, and the anxiety of waiting for a decision. Understanding the process in outline makes your support practical.

                ## Milestones
                1. The basics of the asylum process and the young person's key dates understood.
                2. Interpreter and legal representative contacts recorded.
                3. Education or language classes arranged.
                4. Links to community groups and faith connections made.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The young person's legal representative, interpreter, education placement and community links are recorded and in use."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the social worker for an overview of the young person's asylum case"
                - "Record the legal representative and interpreter contact details"
                - "Arrange language classes or school enrolment"
                - "Find a community or faith group the young person would like to visit"
            - name: Staying on after a young person turns 18
              description: |-
                ## Purpose
                In many places a young person in foster care can stay with their carers after 18, often up to 21, under an arrangement that changes the money, the legal relationship and the house rules. Planning it from 16 gives time to agree rent contributions, benefits, independence goals and what happens to your approval and other placements.

                ## Milestones
                1. The staying on option discussed with the young person and their social worker by 17.
                2. Financial arrangements, including any rent the young person pays, set out in writing.
                3. Adult house rules agreed.
                4. The impact on your approval and other placements confirmed with your service.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written staying on agreement covering money, house rules and duration is signed before the young person's 18th birthday."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Raise staying on with the young person at their next review"
                - "Ask the service for its staying on policy and payment rates"
                - "Agree adult house rules and any rent contribution"
                - "Confirm how staying on affects your approval and spare room"
            - name: Memory box and life story contributions
              description: |-
                ## Purpose
                Children in care often lose the photos, school reports, certificates and small objects that other children take for granted. Carers who keep a memory box and contribute dated photos and stories to the child's life story work give them a record of who they were in your home. These items go with the child when they move on.

                ## Milestones
                1. A memory box started for each child.
                2. Photos taken regularly, dated and captioned.
                3. School reports, certificates and artwork kept.
                4. Contributions shared with the social worker doing life story work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A memory box with dated photos, reports and artwork exists for every child in placement and moves with them."
                cadence: rolling
              tasks:
                - "Buy a sturdy box for each child's keepsakes"
                - "Write dates and captions on the backs of new photos"
                - "Add photos, certificates and artwork to the memory box @recurring(monthly:28)"
                - "Offer copies to the social worker for life story work"
            - name: Moving into therapeutic or specialist foster care
              description: |-
                ## Purpose
                Experienced carers can move into specialist schemes for children with very complex needs, young people stepping down from secure or residential care, or those on remand. These schemes usually pay more, require extra training and clinical supervision, and expect one carer to be at home full time. Weighing the demand on your household against the support offered decides whether it is right now or later.

                ## Milestones
                1. Specialist schemes in your area and their entry requirements listed.
                2. Extra training and supervision commitments understood.
                3. The household impact discussed with your family.
                4. An application made or a decision to wait recorded with a revisit date.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on applying to a specialist scheme is recorded with the scheme's requirements, support offer and a revisit date if waiting."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your service which specialist fostering schemes it runs"
                - "List the training and supervision each scheme requires"
                - "Discuss the extra demands with everyone at home"
                - "Record your decision and when to revisit it"
            - name: Mentoring newly approved foster carers
              description: |-
                ## Purpose
                Newly approved carers learn fastest from someone who has done it: what the first placement call feels like, how to handle a difficult review, and when to push for support. Mentoring one or two new carers a year passes on that knowledge, and many services pay a fee or count it towards training.

                ## Milestones
                1. Mentor training completed with your service.
                2. Matched with one or two new carers.
                3. Regular check-ins happening.
                4. Themes from mentoring shared with the service.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "You are matched with at least one new carer and have held a check-in with them every month for six months."
                cadence: rolling
              tasks:
                - "Ask your service about becoming a mentor carer"
                - "Complete the mentor training"
                - "Call each new carer you mentor @recurring(monthly:15)"
                - "Share themes from mentoring with the service at your annual review"
            - name: Stepping back from fostering and staying in touch
              description: |-
                ## Purpose
                Every fostering career ends, whether through retirement, health, family changes or simply time. Resigning well means ending current placements carefully, closing records and allowances properly, and deciding which children you can stay in touch with. Planning it a year ahead protects both you and the children.

                ## Milestones
                1. The notice period and resignation process confirmed.
                2. Current placements ending or moving, planned with each child's social worker.
                3. Records returned or destroyed as your service directs.
                4. Staying-in-touch arrangements agreed for children who want them.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your resignation is accepted, records are handed back as directed and staying-in-touch plans are written for every child who wants one."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your service how resignation works and the notice period"
                - "Plan how current placements will end or transfer"
                - "Return or securely destroy records as instructed"
                - "Agree staying-in-touch arrangements with each child's social worker"
---

# Foster Caring

This area is for anyone thinking about fostering or already doing it, whether you have children of your own, are stepping in for a relative's child or are an experienced carer looking at specialist work. It starts with the decision, the choice of fostering service, the assessment and panel, then moves through the routines of a placement (recordings, supervision, allowances, family time, health, education and reviews), the knowledge that makes hard behaviour and paperwork make sense, decisions about referrals, work and permanence, the dated moments of arrival, holidays and moving on, situations such as teenagers, parent and child or staying on after 18, and finally specialist schemes, mentoring and stepping back.

What repeats is an evening recording with a Friday send, a Sunday check of family time, monthly supervision agendas, ledger and savings, a support group and a protected night off, quarterly health, education and training checks, and a yearly safety recheck, safer caring review, tax return and annual carer review. The Risk register, Meeting notes, Monthly budget and bills, Reading queue and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
