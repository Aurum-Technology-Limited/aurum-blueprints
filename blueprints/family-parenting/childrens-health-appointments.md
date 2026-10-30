---
id: family-parenting.childrens-health-appointments
name: Children's Health Appointments
description: "A health folder and vaccination check for every child, dentist, doctor and eye test rhythms, growth records, referral chasing, and a clean handover to teenagers who start booking their own care."
category: personal
version: 1.0.0
tags: [family-parenting, childrens-health-appointments, parent, vaccinations, dentist, check-ups, growth-records, child-health]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - habit-tracker
    - purchase-decision
    - trip
  pillars:
    - name: Family & Parenting
      emoji: "👨‍👩‍👧"
      description: "Raising children and holding a family together: each stage from pregnancy to young adulthood, schooling and activities, family logistics and traditions, extended family, and the decisions parents make together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Children's Health Appointments
          description: "Keeping children's check-ups, vaccinations, dentist visits and growth records on track for every child in the family."
          projects:
            - name: Health record folder for each child
              description: |-
                ## Purpose
                Vaccination cards, discharge letters, dental notes, growth books and test results tend to end up in four drawers and two inboxes, and the one you need is never with you at the surgery. A folder per child, paper and digital with the same sections, means any adult can answer a clinician's question in a minute and nothing is lost when you move or change practice.

                ## Milestones
                1. One folder per child with the same sections: vaccinations, check-ups, dental, eyes and hearing, letters and results, medicines.
                2. Every loose health document in the house sorted into the right folder.
                3. Phone photos and emailed letters saved into a matching digital folder per child.
                4. Both parents, and any regular carer, told where the folders live.

                ## Notes
                The paper child health book your health service gives at birth (the red book in the UK, for example) belongs in this folder. Bring it to every appointment until school age; clinicians still write in it.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each child has a paper and digital health folder with six matching sections, and every adult who takes them to appointments knows where it is."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather every health letter, card and record book in the house into one pile"
                - "Set up a folder per child with the six standard sections"
                - "Save emailed letters and phone photos into a matching digital folder"
                - "Show your partner or main carer where both folders are kept"
            - name: Registering every child with a family doctor
              description: |-
                ## Purpose
                Children are usually registered at birth or when the family arrives, but a house move, a change of practice or a step-child joining the household can leave one child registered somewhere else or nowhere at all. Confirming that every child is on the same practice list, under the right name and address, prevents missed invitations for vaccinations and reviews that are sent to an old address.

                ## Milestones
                1. Each child's current practice, registered name and address confirmed with the practice.
                2. Any child not registered locally added to your family practice.
                3. Your phone number and email checked on every child's record.
                4. Practice details written into each child's health folder.

                ## Notes
                If your children have different surnames from you, ask the practice how they link parents to children's records so letters and texts reach the right person.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every child is confirmed as registered at the family's current practice with correct contact details on file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ring the practice and ask them to read back each child's registered details"
                - "Complete registration forms for any child not on the list"
                - "Correct contact numbers and addresses on every child's record"
                - "Write the practice name, number and opening hours in each health folder"
            - name: Finding a dentist who sees children
              description: |-
                ## Purpose
                Dentists in many areas have closed lists, and families often discover this only when a toddler has toothache. Getting every child registered or on a list now, ideally at the same practice as the parents, means routine check-ups can start early and an urgent appointment is a phone call, not a search.

                ## Milestones
                1. A list of local dental practices with whether each is taking on children.
                2. Every child registered with a dentist, or on a named waiting list with a date.
                3. The practice's urgent appointment arrangements noted.
                4. A first check-up booked for any child who has never been seen.

                ## Notes
                Where public dental care is limited, ask whether children can be seen even when adults cannot. Many practices treat the two lists separately.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every child is registered with a named dental practice or on a dated waiting list, with the urgent care number recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your health service's directory for dentists accepting children"
                - "Ring three practices and ask about children's places and waiting times"
                - "Register each child, or join a waiting list and note the date"
                - "Book a first check-up for any child who has not seen a dentist"
            - name: Vaccination record check against the national schedule
              description: |-
                ## Purpose
                Families move, records are split between practices and a dose missed during an illness is easy to forget. Laying each child's actual vaccinations beside your country's published schedule shows in an evening whether anyone is behind, and gives you the evidence the practice needs to book a catch-up.

                ## Milestones
                1. Your country's current childhood schedule downloaded from the health service.
                2. Each child's recorded vaccinations listed with dates, from the record book and the practice.
                3. Gaps or mismatches between the two marked for every child.
                4. Any gap raised with the practice nurse and a plan agreed.

                ## Notes
                Records held by the practice and the paper book often disagree. Ask the practice for a printout rather than relying on either alone.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each child's vaccination history has been checked against the national schedule and every gap has a plan agreed with the practice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download your country's childhood vaccination schedule from the health service"
                - "Request a printout of each child's vaccination history from the practice"
                - "Mark any missing or late doses against the schedule for each child"
                - "Ask the practice nurse to review any gaps you found @priority(high)"
            - name: Allergy, medicine and condition summary per child
              description: |-
                ## Purpose
                At an urgent appointment, a holiday clinic or a school trip, someone will ask about allergies, regular medicines and past illnesses, and a stressed parent or a grandparent may not remember. A one-page summary for each child, kept current, answers those questions accurately and travels in a bag or on a phone.

                ## Milestones
                1. A one-page summary per child: allergies and reactions, regular medicines, conditions, operations, vaccinations status.
                2. The clinician's own wording used for any diagnosis.
                3. A copy in the health folder and on both parents' phones.
                4. A review date written at the bottom of each page.

                ## Notes
                Record medicine names and who prescribed them, and keep the dose exactly as written on the current label or prescription. The summary records what clinicians said; it does not replace their instructions.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every child has a current one-page allergy, medicine and condition summary saved on both parents' phones and in their folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each child's allergies, regular medicines and diagnosed conditions"
                - "Check the wording against clinic letters and prescription labels"
                - "Save each summary to both parents' phones and print one for the folder"
                - "Update each child's summary with any change from the last three months @recurring(quarterly)"
            - name: Twelve-month check-up plan for every child
              description: |-
                ## Purpose
                Most children's appointments are predictable: dental check-ups, an eye test, scheduled vaccinations, development reviews and any condition clinics. Writing the next twelve months for each child on one page, by month, shows clashes, quiet months and which appointments need booking weeks ahead.

                ## Milestones
                1. Each child's due appointments for the year listed by month.
                2. Appointments that need booking well ahead marked, such as dental and specialist clinics.
                3. Clashes with school exams, holidays or busy work periods spotted.
                4. Every appointment that can be booked now booked.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page plan lists every child's expected appointments for the next twelve months, with all bookable ones already in the diary."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write each child's name across the top of a page and the months down the side"
                - "Fill in dental, eye, vaccination and review dates that are due"
                - "Mark the appointments that need booking at least a month ahead"
                - "Book every appointment that can be booked today"
            - name: Children's health contacts sheet
              description: |-
                ## Purpose
                When a child is unwell at seven in the evening, nobody wants to search for the out-of-hours number, the dentist's emergency line or the name of the consultant's secretary. A single contacts sheet covering every service your children use saves minutes when they matter and lets a babysitter or grandparent act without phoning you first.

                ## Milestones
                1. One sheet listing doctor, out-of-hours line, dentist, optician, pharmacy and any specialist teams.
                2. Each child's patient or record numbers added where services use them.
                3. The sheet saved on every adult's phone and stuck inside a kitchen cupboard.
                4. Babysitters and grandparents given a copy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A health contacts sheet covering at least six services is on every regular carer's phone and in the kitchen."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Collect the numbers for every health service your children use"
                - "Add each child's record or patient number beside the relevant service"
                - "Send the sheet to every regular carer's phone"
                - "Stick a printed copy inside a kitchen cupboard door"
            - name: Online patient account access for your children
              description: |-
                ## Purpose
                Many practices let parents book appointments, order repeat prescriptions and see vaccinations and letters for their children online, but access usually has to be requested and is often set up for only one parent. Getting proxy access for each child, for both parents where allowed, cuts phone queues and puts results in front of you sooner.

                ## Milestones
                1. The practice's process for parent access to children's records confirmed.
                2. Access granted for each child to at least one parent, and to both where the practice allows.
                3. What each account can see, book and order checked.
                4. The age at which access changes for older children noted.

                ## Notes
                Access rules change as children reach their early teens, when practices often give the young person some say over what parents can see. That is normal; plan for it rather than being surprised.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least one parent can book, order prescriptions and view records online for every child, with the access age rules written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the practice how parents request online access for each child"
                - "Complete the proxy access forms and bring the identification they ask for"
                - "Log in and check what you can book, order and view for each child"
                - "Note the age at which the practice reviews parental access"
            - name: What children's care costs and what your cover pays
              description: |-
                ## Purpose
                Depending on where you live, children's dental treatment, glasses, prescriptions or specialist visits may be free, partly covered or fully paid, and the rules often change at a birthday or when a child leaves full-time education. Knowing what is covered for each child stops you turning down care you think you cannot afford, or paying for care that should have been free.

                ## Milestones
                1. The free, covered and paid parts of children's care listed for your country or insurer.
                2. Any age cut-offs where coverage changes noted for each child.
                3. Employer or family health insurance checked for children's cover and excesses.
                4. Receipts and claim forms kept in each child's folder.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page coverage note lists what is free, covered and paid for each child, including the next age when the rules change."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up what children's dental, optical and prescription care costs where you live"
                - "Check any family health insurance policy for children's cover and limits"
                - "Note the birthday at which each child's free care ends or changes"
                - "Recheck the coverage rules and your policy each renewal @recurring(yearly)"
            - name: Yearly family health appointment review
              description: |-
                ## Purpose
                Once a year, a short sit-down with the health folders catches what slipped: an overdue eye test, a vaccination letter never answered, a referral that went quiet, a child who has not seen the dentist in eighteen months. Picking a fixed month, such as the one before school starts, makes it a habit rather than a reaction.

                ## Milestones
                1. Each child's folder reviewed against the twelve-month plan.
                2. Overdue appointments booked within the review week.
                3. A new twelve-month plan written for the coming year.
                4. One thing that went badly this year identified and fixed.

                ## Notes
                Do this with your partner or co-parent if you share appointments. It takes about an hour for two or three children.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year a review is held, every overdue appointment is booked within a week and a new twelve-month plan is written."
                cadence: cyclic
              tasks:
                - "Choose a fixed month for the yearly review and put it in the diary"
                - "Hold the yearly review of every child's folder and plan @recurring(yearly)"
                - "Book every overdue appointment found during the review"
                - "Write the next twelve-month plan before closing the folders"
            - name: Dental check-up rhythm for every child
              description: |-
                ## Purpose
                Dentists set the gap between check-ups according to each child's risk, often between three and twelve months, and families with several children easily lose track of who is due. Booking the next visit before leaving the surgery and checking each quarter that every child has a date keeps decay found early and fillings small.

                ## Milestones
                1. The recall interval the dentist set for each child written in their folder.
                2. Every child's next check-up booked in the diary.
                3. Fluoride varnish or sealants the dentist recommends recorded when given.
                4. No child more than a month past their recall date.

                ## Notes
                Ask the dentist whether fluoride varnish or fissure sealants are suitable for each child. Where they are offered, they are often free for children.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every child has a booked dental check-up and none is more than a month past the recall interval their dentist set."
                cadence: rolling
              tasks:
                - "Write each child's dental recall interval in their folder"
                - "Book the next check-up at the desk before leaving every appointment"
                - "Check that every child has a dental date in the diary @recurring(quarterly)"
                - "Record any fluoride varnish or sealant treatment in the dental section"
            - name: Vaccination due-date reminders
              description: |-
                ## Purpose
                Invitation letters go astray, texts arrive while you are at work and some doses are only offered at school with a consent form that never makes it home. Keeping your own list of upcoming doses for each child, checked monthly, means you notice when an invitation has not arrived and book it yourself.

                ## Milestones
                1. Each child's next due vaccinations listed with the approximate age or month.
                2. Calendar reminders set a month before each due date.
                3. Every invitation answered within a week of arriving.
                4. Each completed dose recorded in the child's folder and record book.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every child's next due vaccinations are listed with reminders, and each dose given is recorded within a week."
                cadence: rolling
              tasks:
                - "List the next due vaccinations for each child from the schedule"
                - "Set a reminder one month before each child's next due dose"
                - "Check whether any vaccination invitation is due or overdue @recurring(monthly:3)"
                - "Record each dose, batch details if given, in the folder after the appointment"
            - name: Height and weight record over the years
              description: |-
                ## Purpose
                Growth is one of the clearest signs of a child's overall health, but after the baby years few families record it, and clinicians asking about a change in growth have nothing to compare against. Measuring every child the same way each quarter and keeping the numbers in one log builds a record your doctor can read in seconds.

                ## Milestones
                1. A growth log per child with date, height, weight and who measured.
                2. Past measurements from the record book and school checks copied in.
                3. Measurements taken the same way every time: no shoes, same time of day.
                4. The log brought to any appointment where growth or weight is discussed.

                ## Notes
                Start from the **Metrics log** template. Record the numbers and let a clinician interpret them; a single odd reading is usually a measuring error.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each child has a growth log with at least four dated height and weight entries a year."
                cadence: rolling
              tasks:
                - "Set up a growth log for each child from the metrics log template"
                - "Copy past measurements from the record book into the log"
                - "Mark a measuring spot on a door frame and buy a reliable scale if needed"
                - "Measure and record every child's height and weight @recurring(quarterly)"
            - name: Question list before every appointment
              description: |-
                ## Purpose
                Children's appointments are short and noisy, and the question you most wanted to ask often comes back to you in the car park. Writing three questions on your phone before every visit, with the main worry first, makes ten minutes with a doctor, nurse or dentist far more useful.

                ## Milestones
                1. A standing note on your phone for each child's next appointment questions.
                2. Questions written in priority order, the main worry first.
                3. Relevant facts added: when symptoms started, what you have tried, any changes.
                4. Answers noted against each question before leaving the room.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For the next five appointments, a written question list is prepared beforehand and answers are noted before leaving."
                cadence: rolling
              tasks:
                - "Create a note on your phone headed with each child's name for appointment questions"
                - "Write the main worry first before the next appointment"
                - "Add when the problem started and what you have already tried"
                - "Note the answer beside each question before leaving the room"
            - name: After-appointment notes and follow-up tracker
              description: |-
                ## Purpose
                Most dropped balls in children's health happen after the appointment: the blood test that was meant to be booked, the review in six weeks, the letter the clinic said would come. A short note after each visit, with every promised follow-up given an owner and a date, stops those disappearing.

                ## Milestones
                1. A note template with date, who attended, what was said and follow-ups.
                2. Notes written within a day of each appointment.
                3. Every follow-up listed with who is responsible and by when.
                4. Open follow-ups checked every month and closed or chased.

                ## Notes
                Start from the **Meeting notes** template, one page per appointment, filed in the child's folder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every appointment over the next three months has a written note, and no follow-up is more than two weeks overdue without a chase."
                cadence: rolling
              tasks:
                - "Set up an appointment note page from the meeting notes template"
                - "Write a note within a day of each appointment"
                - "Ask the agent to turn your rough appointment notes into a follow-up list with dates"
                - "Review all open follow-ups and chase the overdue ones @recurring(monthly:20)"
            - name: Children's medicine cupboard and repeat prescriptions
              description: |-
                ## Purpose
                Inhalers run out on a Friday night, liquid antibiotics left from last winter are past their date and nobody remembers which children's pain relief suits which age. A monthly glance at a locked, labelled cupboard and a repeat prescription calendar prevents both the last-minute dash and the wrong bottle in the dark.

                ## Milestones
                1. Children's medicines stored together, out of reach, separated by child where they differ.
                2. Expired and unlabelled medicines returned to a pharmacy for disposal.
                3. Repeat prescriptions for each child listed with when to reorder.
                4. Reorders placed at least a week before running out.

                ## Notes
                Return old medicines to a pharmacy rather than binning them. Always follow the label and the pharmacist for doses.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The cupboard holds no expired medicines and no repeat prescription has run out in the past three months."
                cadence: rolling
              tasks:
                - "Clear the cupboard of expired or unlabelled children's medicines"
                - "Take the expired medicines to a pharmacy for safe disposal"
                - "List each child's repeat prescriptions with a reorder date"
                - "Check expiry dates and repeat prescription stock @recurring(monthly:8)"
            - name: Referral and waiting list tracker
              description: |-
                ## Purpose
                Referrals to children's specialists, hearing clinics, physiotherapy or speech services can sit for months, and some are lost between the practice and the hospital. A tracker with the date of each referral, the service, the expected wait and the last time you chased turns waiting into something you can manage.

                ## Milestones
                1. Every open referral listed with service, date referred and reference number.
                2. The expected waiting time for each confirmed with the service.
                3. A chase date set for each referral.
                4. Any referral with no acknowledgement after four weeks chased.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open referral for every child appears in the tracker with a confirmed wait and a last-chased date within the past two months."
                cadence: rolling
              tasks:
                - "List every open referral with service, date and reference number"
                - "Ring each service to confirm the referral arrived and the expected wait"
                - "Chase any referral that has passed its expected date @recurring(monthly:15)"
                - "Ask the practice to resend any referral the hospital cannot find"
            - name: School medical forms kept current
              description: |-
                ## Purpose
                Schools and nurseries hold their own record of each child's allergies, medicines, conditions and emergency contacts, and it is usually only as current as the form you filled in on the first day. Updating it every school year and after any change means staff giving medicine or calling for help have the right facts.

                ## Milestones
                1. The school's current medical information for each child requested and checked.
                2. Corrections sent for any outdated allergy, medicine or contact.
                3. Medicines held at school, such as inhalers or auto-injectors, checked for expiry.
                4. Care plans for any condition reviewed with the school.

                ## Notes
                Agree with your clinician what goes in any care plan the school asks for, and let the school nurse or lead help write it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At the start of each school year every child's school medical record matches their health summary and medicines held at school are in date."
                cadence: cyclic
              tasks:
                - "Ask the school office for a copy of each child's medical information"
                - "Send corrections for anything that no longer matches the health summary"
                - "Check the expiry of any medicine the school holds for each child"
                - "Update every child's school medical form before the new school year @recurring(yearly)"
            - name: Learning the childhood vaccination schedule
              description: |-
                ## Purpose
                Parents are asked to consent to a dozen or more vaccinations over childhood, often with a leaflet handed over in the waiting room. Spending an evening with your health service's own schedule and information pages means you know what each vaccine protects against, when it is due and what side effects are common before the day arrives.

                ## Milestones
                1. The official schedule and information leaflets read for your children's ages.
                2. A short note per upcoming vaccine: what it protects against and common side effects.
                3. Any questions or worries written down for the practice nurse.
                4. Those questions answered before the next vaccination appointment.

                ## Notes
                Use your national health service or public health agency as the source. If you have doubts about a vaccine, ask the nurse or doctor; they hear these questions every day.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note covers each vaccine due for your children in the next two years, and your questions have been answered by the practice nurse."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find your health service's official childhood vaccination pages"
                - "Write one line on each upcoming vaccine and its common side effects"
                - "List your questions for the practice nurse"
                - "Ask your questions at the next vaccination appointment"
            - name: Reading growth charts and centile lines
              description: |-
                ## Purpose
                Clinicians plot children on centile charts, and phrases such as following the 25th centile or crossing two lines can sound alarming or meaningless without context. Learning how the charts work helps you understand what the doctor or nurse is telling you, and why a steady line matters more than where it sits.

                ## Milestones
                1. The growth chart your health service uses for your child's age and sex found.
                2. Your child's past measurements plotted on it, with a clinician's help if needed.
                3. What the centile lines mean, and what clinicians watch for, written in your own words.
                4. Any question about the pattern taken to the next check-up.

                ## Notes
                Plotting is for understanding, not self-diagnosis. A single point off the line is usually a measuring issue; ask a clinician before worrying.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain in two sentences what your child's centile pattern shows, confirmed against what a clinician has said."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Download the growth chart your health service uses for your child"
                - "Plot your child's recorded heights and weights on the chart"
                - "Write down what a steady line and a crossing line usually mean"
                - "Ask the nurse to look at the plotted chart at the next check-up"
            - name: Helping a child cope with injections and blood tests
              description: |-
                ## Purpose
                Needle fear is common and grows when a child is surprised, held down without warning or promised it will not hurt. A few well-known techniques, such as honest short warnings, distraction, comfortable holding positions and numbing creams where offered, make vaccinations and blood tests shorter and less memorable for everyone.

                ## Milestones
                1. Two or three age-appropriate techniques chosen for each child.
                2. A comfort plan agreed: who holds them, what distraction, what reward afterwards.
                3. Numbing cream or other options asked about before the appointment where relevant.
                4. How the appointment went noted to adjust the plan next time.

                ## Notes
                Tell the nurse at the start if a child is very anxious. Many clinics can book a longer slot or a quieter room.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each needle-anxious child has a written comfort plan that was used at their next injection or blood test, with notes on what worked."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's guidance on helping children with needles"
                - "Agree a holding position and a distraction for each child"
                - "Ask the clinic whether numbing cream or a longer slot is available"
                - "Note afterwards what helped and what to change next time"
            - name: Preparing young children for doctor and dentist visits
              description: |-
                ## Purpose
                Toddlers and preschoolers who know what will happen, the chair, the light, the mirror, the stethoscope, cope better than those who meet it all at once. Picture books, a toy doctor's kit and a practice run of opening wide at home turn a first visit from a fright into something familiar.

                ## Milestones
                1. Two picture books about the doctor or dentist read several times before the visit.
                2. A role play at home with a toy kit, with the child as doctor and patient.
                3. The child told plainly, the day before, what will happen and who will be there.
                4. A small calm activity planned for afterwards.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Before the next check-up the child has read two books and played the visit at home, and the visit happens without needing to be rebooked."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Borrow two picture books about visiting the doctor or dentist"
                - "Play doctors and dentists at home with a toy kit"
                - "Tell your child plainly the day before what will happen"
                - "Plan a quiet treat or walk for after the appointment"
            - name: Knowing which service to call when a child is unwell
              description: |-
                ## Purpose
                Parents often agonise over whether a fever, rash or fall needs the family doctor, a pharmacist, the urgent advice line or emergency care, and the answer differs by country and time of day. A one-page card listing your local options and your health service's own red-flag signs makes that decision faster and calmer.

                ## Milestones
                1. Your health service's published guidance on when to seek urgent help for children found.
                2. A card listing pharmacy, doctor, urgent advice line and emergency options with numbers and hours.
                3. The health service's warning signs copied onto the card in their own words.
                4. The card shared with every regular carer and reviewed once a year.

                ## Notes
                This card organises your health service's advice; it does not replace it. If in doubt, call the urgent advice line or emergency services.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A card listing local services, hours and your health service's warning signs is on the fridge and every carer's phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up your health service's guidance on urgent signs in children"
                - "Write a card with each service, its number and when to use it"
                - "Share the card with grandparents, babysitters and your partner"
                - "Check the numbers and hours on the card are still right @recurring(yearly)"
            - name: Getting clear answers from children's clinicians
              description: |-
                ## Purpose
                Appointments with a child in the room are hurried, and parents often leave unsure what the plan is or what to watch for. A few habits, such as repeating the plan back, asking what would make them want to see the child again and asking for it in writing, give you a clear plan to follow at home.

                ## Milestones
                1. Three standard closing questions saved on your phone.
                2. The habit of repeating the plan back used at the next three appointments.
                3. Written information or a summary requested where the plan is complicated.
                4. A note in the folder of anything still unclear, with who to ask.

                ## Notes
                Three useful closing questions: what is the plan, what should make me come back sooner, and when do we review it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At three consecutive appointments you repeat the plan back and record the answers to your three closing questions."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Save three closing questions in the notes on your phone"
                - "Repeat the plan back to the clinician before leaving the next appointment"
                - "Ask for written information whenever the plan has more than two steps"
                - "Write down anything still unclear and who to ask about it"
            - name: Home toothbrushing routine the dentist checks
              description: |-
                ## Purpose
                Children's dentists ask the same questions at every visit: how often teeth are brushed, who does it, what toothpaste and how much sugar between meals. A twice-daily routine with an adult brushing or checking until about seven or eight, recorded for a few weeks, gives you honest answers and fewer fillings.

                ## Milestones
                1. The toothpaste type and amount your dentist recommends for each child's age written down.
                2. An adult brushing or checking each child's teeth morning and night.
                3. A simple chart kept for four weeks to show the routine is holding.
                4. Sugary drinks and snacks between meals cut to a level agreed with the dentist.

                ## Notes
                Start from the **Habit tracker** template. Spit, do not rinse, is the advice many dentists give; ask yours.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A four-week chart shows each child's teeth brushed twice a day with an adult checking, and the dentist's advice on toothpaste is recorded."
                cadence: rolling
              tasks:
                - "Ask the dentist which toothpaste strength and amount suits each child"
                - "Set up a brushing chart from the habit tracker template"
                - "Brush or check each child's teeth at bedtime and tick the chart @recurring(daily)"
                - "Agree with your partner which adult does morning and evening brushing"
            - name: Catch-up plan for missed vaccinations
              description: |-
                ## Purpose
                Illness, a move between countries or a busy year can leave a child one or more doses behind, and many parents assume it is too late. Most vaccines can be caught up, and a short plan agreed with the practice nurse brings a child back onto the schedule in as few visits as possible.

                ## Milestones
                1. Missing doses for each child confirmed by the practice from your record check.
                2. A catch-up schedule agreed with the nurse, with dates for each visit.
                3. Every catch-up appointment booked.
                4. Each catch-up dose recorded and the child confirmed as up to date.

                ## Notes
                Bring any foreign vaccination records, translated if needed. The nurse decides the catch-up order and spacing.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every child with a missed dose has a dated catch-up schedule agreed with the practice and all appointments booked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book an appointment with the practice nurse to review missed doses"
                - "Bring every vaccination record you have, translated if needed"
                - "Book every catch-up appointment the nurse recommends"
                - "Ask the practice to confirm in writing when each child is up to date"
            - name: Seasonal and optional vaccines decision
              description: |-
                ## Purpose
                Some vaccines sit outside the routine schedule depending on where you live: a yearly children's flu vaccine, chickenpox, or extra doses for a child with a health condition. Deciding with your clinician each year which apply to your children, and booking them early in the season, avoids rushed choices when clinics fill up.

                ## Milestones
                1. The seasonal and optional vaccines offered to children where you live listed.
                2. Whether each child is eligible, and whether there is a cost, confirmed.
                3. A decision recorded for each child after speaking to the practice or pharmacist.
                4. Appointments booked early in the season where you have decided to go ahead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for each child on each seasonal or optional vaccine, with chosen appointments booked before the season peaks."
                cadence: cyclic
              tasks:
                - "List the seasonal and optional vaccines offered to children where you live"
                - "Ask the practice which apply to each child and whether any cost money"
                - "Record your decision for each child in their folder"
                - "Book each child's seasonal vaccination as soon as clinics open @recurring(yearly)"
            - name: Cutting missed and late appointments
              description: |-
                ## Purpose
                Missed appointments cost a family weeks of rebooking and, in some services, a place on the list. A Sunday look at the coming week's appointments, with transport, cover and school notes sorted, catches the clash before it becomes a no-show.

                ## Milestones
                1. The reasons for the last few missed or late appointments listed honestly.
                2. A Sunday check of next week's health appointments in place.
                3. School absence notes and travel arranged at least two days ahead.
                4. No missed child health appointments in the following three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months pass with no missed or cancelled-on-the-day children's health appointments."
                cadence: rolling
              tasks:
                - "List why recent appointments were missed or late"
                - "Confirm next week's health appointments, travel and school notes @recurring(weekly:sun)"
                - "Turn on text reminders with every practice that offers them"
                - "Cancel and rebook at least a day ahead if a clash appears"
            - name: Deciding whether to change family doctor or dentist
              description: |-
                ## Purpose
                A practice that never has children's appointments, a dentist who rushes nervous children or a move across town can make staying put the wrong choice. Comparing your current practice with one or two others on the things that matter for children turns grumbling into a decision.

                ## Milestones
                1. Three or four specific problems with the current practice written down.
                2. One or two alternatives checked for children's access, hours and distance.
                3. A decision recorded to stay, raise the problems or move.
                4. Registration completed and records transferred if you move.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of the current practice with at least one alternative ends in a recorded stay or move decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the specific problems with your current practice"
                - "Check one or two other practices for children's appointments and hours"
                - "Talk the options through with your partner and record a decision"
                - "Register with the new practice and ask for records to transfer if moving"
            - name: Public waiting list or paid appointment decision
              description: |-
                ## Purpose
                When a child faces a long wait for an assessment, a scan or a minor operation, some families consider paying for a faster appointment, and the trade-offs are not obvious. Setting out the expected wait, the cost, what happens to the public referral and how follow-up care would work lets you decide on facts rather than worry.

                ## Milestones
                1. The expected public waiting time confirmed in writing or by phone.
                2. The cost and timing of a paid option, including follow-ups, found.
                3. How a paid appointment affects the public referral and ongoing care confirmed.
                4. A decision recorded with the reasons.

                ## Notes
                Ask your doctor whether the wait itself carries any risk for your child; that is a clinical question, not a money one.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of public and paid options covers wait, cost and follow-up, and ends in a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the service for the expected waiting time for your child"
                - "Get a full quote for a paid appointment including follow-ups"
                - "Ask whether going privately changes your place on the public list"
                - "Record your decision and the reasons in the child's folder"
            - name: Orthodontic assessment and the braces decision
              description: |-
                ## Purpose
                Crowded or crooked teeth are usually assessed around the time adult teeth come through, and the decision about treatment involves eligibility rules, cost, the child's own motivation and two or more years of visits. Getting an assessment at the right age, understanding the options and involving your child gives the treatment the best chance of being worn and finished.

                ## Milestones
                1. The dentist asked whether and when an orthodontic referral is appropriate.
                2. An assessment attended and the options and costs written down.
                3. Your child's own view on treatment heard and recorded.
                4. A decision recorded: treat now, review later or no treatment.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "After an orthodontic assessment, a decision to treat, wait or decline is recorded with the options, costs and your child's view."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the dentist at the next check-up about an orthodontic referral"
                - "Write down the options and costs given at the assessment"
                - "Talk with your child about what wearing a brace would mean for them"
                - "Record the treatment decision and any review date"
            - name: Regular eye tests and choosing children's glasses
              description: |-
                ## Purpose
                Children rarely complain that they cannot see well, and school screening only checks a few things. A full eye test with an optician at the intervals they advise, and a sensible choice of frames when glasses are needed, catches problems that affect reading and sport before they show up as tiredness or headaches.

                ## Milestones
                1. Each child's last eye test date and the recommended interval written down.
                2. A test booked for any child never tested or overdue.
                3. Glasses, if prescribed, chosen for fit and durability, with a spare pair considered.
                4. The next test date recorded in the twelve-month plan.

                ## Notes
                Start from the **Purchase decision** template when choosing frames. Children's eye tests are free in many countries even where adult tests are not.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every child has had an eye test within the optician's recommended interval and any prescribed glasses fit and are worn."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find each child's last eye test date or note that they have never had one"
                - "Book a full eye test for any child who is overdue"
                - "Compare frames for fit, durability and whether a spare pair is covered"
                - "Check every child's eye test is within the optician's interval @recurring(yearly)"
            - name: First dental visit by the first birthday
              description: |-
                ## Purpose
                Many dental associations advise a first visit once the first teeth appear, and by the first birthday at the latest, long before there is anything to fix. The visit is short, gets the baby used to the chair and the dentist, and gives you tailored advice on brushing, bottles and teething.

                ## Milestones
                1. A dentist who sees babies identified and the baby registered.
                2. The first appointment booked for when teeth appear or before the first birthday.
                3. Questions about brushing, bottles and teething written down beforehand.
                4. The dentist's advice and the next recall date recorded.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The baby has had a first dental visit before their first birthday, with advice and the next recall date recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your own dentist whether they see babies"
                - "Book the first visit for soon after the first tooth appears"
                - "Write questions about brushing, bottles and teething before the visit"
                - "Record the dentist's advice and the next recall date"
            - name: Two-year development review
              description: |-
                ## Purpose
                Many health services offer a development review at around two years, often with a health visitor or child health nurse, covering speech, movement, play, behaviour and growth. Preparing for it, by filling in any questionnaire sent ahead and noting your own questions, makes it a useful conversation rather than a tick-box check.

                ## Milestones
                1. The review date confirmed and any questionnaire received.
                2. The questionnaire completed honestly, with examples.
                3. Your own questions about speech, sleep, eating or behaviour written down.
                4. Outcomes and any follow-up recorded in the child's folder.

                ## Notes
                If the invitation does not arrive by around 27 months, contact your health visiting or child health service. These reviews are easy to miss after a move.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The development review has taken place, the questionnaire was returned and outcomes and follow-ups are recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check with the child health service when the two-year review is due"
                - "Complete the questionnaire with real examples from the past month"
                - "Write down your own questions about development"
                - "File the review outcome and any follow-up in the child's folder"
            - name: Preschool booster vaccinations before school
              description: |-
                ## Purpose
                In many countries a set of booster doses is due in the year or so before a child starts school, and they are easy to miss in the busy months of applications and uniform. Booking them early, with a calm plan for the day, means your child starts school protected and the record is complete when the school asks.

                ## Milestones
                1. The preschool boosters due for your child confirmed with the practice.
                2. The appointment booked at least two months before school starts.
                3. The child prepared using the comfort plan from earlier injections.
                4. The doses recorded and a copy of the record ready for the school.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All preschool boosters are given and recorded at least a month before the child's first school day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the practice which preschool boosters your child is due"
                - "Book the appointment at least two months before school starts"
                - "Plan how you will prepare your child for the injections"
                - "Record the doses and print the record for the school"
            - name: School-entry hearing and vision screening
              description: |-
                ## Purpose
                Schools or school nurses in many countries screen hearing, vision, height and weight in the first year, and the results letter is often a single sheet in a book bag. Knowing when it happens, giving or declining consent deliberately and acting on any recheck letter makes the screening worth having.

                ## Milestones
                1. The screening date and consent arrangements confirmed with the school.
                2. Consent returned and any known hearing or vision issues mentioned to the school nurse.
                3. The results letter received and filed.
                4. Any recommended follow-up booked within a month.

                ## Notes
                Screening is not a full test. If you have concerns, book an optician or ask your doctor about a hearing test regardless of the screening result.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The screening results are filed in the child's folder and any recommended follow-up is booked within a month of the letter."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the school when hearing and vision screening takes place"
                - "Return the consent form and mention any existing concerns"
                - "Check the book bag for the results letter in the following weeks"
                - "Book any follow-up the letter recommends"
            - name: Teenage vaccinations and school consent forms
              description: |-
                ## Purpose
                Vaccinations in the early and mid teens are often given at school, with paper or online consent forms that teenagers forget to pass on. Knowing which doses are due, discussing them with your child and getting consent in on time avoids chasing catch-up clinics later.

                ## Milestones
                1. The vaccinations offered at your child's age and school year confirmed.
                2. The vaccines and common side effects talked through with your teenager.
                3. Consent returned before the deadline.
                4. Doses recorded in the folder, and any missed session followed by a booked catch-up.

                ## Notes
                In some countries older teenagers can consent for themselves. Ask the school nurse how it works where you live.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Consent for each school-based teenage vaccination is returned before the deadline and each dose is recorded or a catch-up booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the school which vaccinations are planned this year"
                - "Talk through the vaccines and side effects with your teenager"
                - "Return the consent form before the school deadline"
                - "Book a catch-up clinic if your child missed the school session"
            - name: Travel health appointment before a trip abroad
              description: |-
                ## Purpose
                Some destinations call for extra vaccinations or medicines for children, and some courses must start weeks before travel. A travel health appointment booked six to eight weeks ahead, with every child's records to hand, gives time for any doses and for packing a children's medicine kit.

                ## Milestones
                1. Your health service's travel advice for the destination checked for children.
                2. A travel health appointment booked six to eight weeks before departure.
                3. Any vaccines or medicines given and recorded for each child.
                4. A children's travel medicine kit packed with summaries and record copies.

                ## Notes
                Start from the **Trip** template and add the travel health appointment to its timeline.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every child travelling has had a travel health consultation at least four weeks before departure, with any doses recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check official travel health advice for your destination for children"
                - "Book a travel health appointment six to eight weeks before departure"
                - "Bring each child's vaccination record to the appointment"
                - "Pack a travel medicine kit and copies of each child's health summary"
            - name: Preparing a child for a hospital procedure
              description: |-
                ## Purpose
                Grommets, tonsils, a dental extraction under anaesthetic or a scan can mean fasting rules, a hospital day and a few days off school. Preparing the child with honest information, following the pre-admission instructions to the letter and planning the recovery days at home make the day smoother and safer.

                ## Milestones
                1. The pre-admission instructions, including fasting times, written in the folder.
                2. The child prepared with the hospital's own leaflet, video or visit where offered.
                3. A bag packed with comfort items, the health summary and medicines.
                4. Recovery days planned with school, work and any follow-up appointment booked.

                ## Notes
                Fasting rules come from the hospital and must be followed exactly. Ask the ward if anything is unclear rather than guessing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The procedure goes ahead on the booked date with fasting rules followed, and the follow-up appointment is booked before discharge."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the hospital's pre-admission and fasting instructions in the folder"
                - "Use the hospital's leaflet or video to explain the day to your child"
                - "Pack a bag with comfort items, the health summary and medicines"
                - "Tell school and work about the recovery days needed"
            - name: Baby's first-year check-ups and immunisations
              description: |-
                ## Purpose
                The first year holds more scheduled health contacts than any other: newborn and later physical checks, a run of immunisations, weight checks and development reviews. Mapping them out once the newborn weeks settle, with who attends each, means none are missed while you are sleep-deprived and the record book is filled in as you go.

                ## Milestones
                1. Every first-year check and immunisation listed with the expected age.
                2. Each appointment booked as soon as the invitation arrives.
                3. The record book brought to every appointment and filled in by the clinician.
                4. Questions for each check written down beforehand.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All first-year checks and immunisations are listed by expected age, and every one due so far is attended and recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List your health service's first-year checks and immunisations by age"
                - "Book each appointment the day the invitation arrives"
                - "Keep the record book in the changing bag for every appointment"
                - "Agree which parent attends each check and immunisation"
            - name: Batching appointments for three or more children
              description: |-
                ## Purpose
                With three or more children, separate dental, eye and doctor visits can mean a dozen trips a year, each with time off work and someone else's school pickup. Asking practices for back-to-back family slots, and aligning recall dates, can halve the trips without anyone falling behind.

                ## Milestones
                1. Each child's dental and eye recall dates listed side by side.
                2. Practices asked whether they offer back-to-back family appointments.
                3. Recall dates aligned so siblings are seen on the same visit where possible.
                4. The number of separate trips in the coming year counted and reduced.

                ## Notes
                Bring another adult or a book bag of quiet activities if you are taking several children into one room.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Dental and eye check-ups for all children are booked as shared visits, cutting the year's separate trips by at least a third."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put each child's recall dates on one page"
                - "Ask the dentist and optician for back-to-back family slots"
                - "Rebook siblings so their check-ups fall on the same visit"
                - "Count the trips planned this year and compare with last year"
            - name: Moving home or country with children's health records
              description: |-
                ## Purpose
                Records do not always follow a family, especially across borders, and a new practice may know nothing about a child's vaccinations, allergies or ongoing referrals. Collecting copies before you leave and registering early at the new address keeps care continuous and spares children repeat vaccinations they did not need.

                ## Milestones
                1. Copies of each child's vaccination record, summary and recent letters obtained before leaving.
                2. Open referrals and repeat prescriptions handed over or rearranged.
                3. Every child registered with a doctor and dentist at the new address.
                4. Foreign records translated and given to the new practice where needed.

                ## Notes
                Ask for records in a format the new country accepts. Vaccine names and schedules differ between countries, so a nurse will need to compare them.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within a month of moving, every child is registered locally and the new practice holds their vaccination record and current summary."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the current practice for copies of each child's records before moving"
                - "Arrange for open referrals and prescriptions to transfer"
                - "Register every child with a doctor and dentist at the new address"
                - "Give the new practice translated vaccination records where needed"
            - name: Health information when parents live apart
              description: |-
                ## Purpose
                When children move between two homes, appointment letters, results and medicines often reach only one parent, and practices may not know who can consent or receive information. Agreeing how health information is shared, and making sure the practice has the right contacts, keeps both parents able to act on what clinicians say.

                ## Milestones
                1. Both parents' contact details confirmed on each child's record where appropriate.
                2. An agreed way to share appointment dates, results and medicine changes.
                3. Medicines and the health summary available in both homes.
                4. Any question about consent or access referred to the practice or a legal adviser.

                ## Notes
                Who can consent and see records depends on local law and any court orders. This project organises information; it does not settle those questions.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Both parents receive each child's appointment dates and results through an agreed channel, and each home holds a current health summary."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the practice what contact details are held for each parent"
                - "Agree with the other parent how appointment dates and results are shared"
                - "Put the health summary and any regular medicines in both homes"
                - "Raise any consent or access question with the practice or a legal adviser"
            - name: Clinic schedule for a child with a long-term condition
              description: |-
                ## Purpose
                Asthma, eczema, diabetes, epilepsy and other conditions bring their own reviews, tests and clinic visits on top of routine care, often across several teams. A single schedule for the condition, with a short diary kept between visits, makes clinics more productive and stops reviews quietly lapsing.

                ## Milestones
                1. Every team involved listed with contact details and how often they review.
                2. The next review with each team booked.
                3. A short symptom or condition diary kept between clinics.
                4. Any written care plan copied to school and other carers.

                ## Notes
                Ask each team what they want recorded between visits. A diary in their format is far more useful than a general one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every team caring for the condition has a booked next review, and a condition diary covers the months since the last clinic."
                cadence: rolling
              tasks:
                - "List every team involved in the condition with their review interval"
                - "Book the next review with each team"
                - "Update the condition diary with symptoms and changes @recurring(monthly:22)"
                - "Send the current care plan to school and regular carers"
            - name: Teenagers booking and attending their own appointments
              description: |-
                ## Purpose
                Somewhere in the teenage years, young people start seeing clinicians alone, and many health services give them a confidential consultation from around their early teens. Teaching a teenager to book an appointment, describe a problem and order a prescription, while staying available, builds the skills they will need as adults.

                ## Milestones
                1. Your teenager knows the practice name, how to book and their own record number.
                2. One appointment booked and attended by them, with you nearby if wanted.
                3. A repeat prescription or routine item ordered by them.
                4. An agreement on what they will share with you and when they will ask for help.

                ## Notes
                Respect a teenager's right to see a clinician privately. Your role moves from managing appointments to being someone they can ask.
              priority: medium
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Your teenager has booked and attended at least one appointment and ordered one prescription or item themselves."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Show your teenager how to book an appointment by phone and online"
                - "Let them describe the problem first at their next appointment"
                - "Have them order the next repeat prescription themselves"
                - "Agree together what they will tell you and when to ask for help"
            - name: Audiology referral and hearing follow-up
              description: |-
                ## Purpose
                Glue ear, repeated ear infections or a failed screening often lead to a hearing referral, and the months of waiting overlap with years of language learning. Following the referral through, recording test results and passing advice to school means a child with reduced hearing gets the classroom and clinical support they need sooner.

                ## Milestones
                1. The referral confirmed as received and the appointment date known.
                2. Hearing test results recorded with the audiologist's explanation.
                3. Any agreed plan, such as watchful waiting, grommets or hearing aids, written down with dates.
                4. The school told about results and any seating or support advice.

                ## Notes
                Ask the audiologist for a short letter for school. Teachers can act on simple advice such as seating a child near the front.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Hearing results and the agreed plan are recorded, the next review is booked and the school has received written advice."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ring the audiology service to confirm the referral and appointment"
                - "Note your child's hearing concerns at home and school before the test"
                - "Record the results and the audiologist's plan in the folder"
                - "Send the audiologist's advice to your child's teacher"
            - name: Managing an orthodontic treatment schedule
              description: |-
                ## Purpose
                Once treatment starts, braces bring appointments every few weeks for two years or more, rules about food and cleaning, and costly repairs if a bracket breaks or an aligner is lost. A clear schedule and a home routine your teenager owns keep treatment on time and avoid extending it.

                ## Milestones
                1. Every planned orthodontic appointment in the diary, with school notes arranged.
                2. A cleaning and wear routine agreed with your child.
                3. The orthodontist's emergency arrangements and repair costs noted.
                4. The retainer plan understood and recorded before treatment ends.

                ## Notes
                Retainers are where much orthodontic work is lost. Ask how long they should be worn and what replacements cost.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No orthodontic appointment is missed during treatment and the retainer plan is written down before the brace comes off."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Put every planned orthodontic appointment in the family diary"
                - "Agree a cleaning and wear routine with your child"
                - "Note the orthodontist's emergency number and repair costs"
                - "Check the next orthodontic appointment is booked @recurring(monthly:5)"
            - name: Family health history for the children's records
              description: |-
                ## Purpose
                Clinicians often ask whether conditions such as early heart disease, diabetes, certain cancers, allergies or hearing loss run in the family, and parents rarely know both sides well. Gathering a short family history now, from parents and grandparents while they can still tell you, gives your children's clinicians a fuller picture.

                ## Milestones
                1. Conditions in parents, grandparents, aunts and uncles listed with ages where known.
                2. Both sides of the family covered, including step and donor information where relevant.
                3. A copy filed in each child's folder.
                4. Any notable pattern mentioned to the family doctor.

                ## Notes
                Keep the history factual and private. Ask relatives for permission before sharing their details beyond your family doctor.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A family health history covering both sides is filed in each child's folder and any pattern has been raised with the doctor."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your parents about conditions on your side of the family"
                - "Ask your partner to do the same for their side"
                - "Write a one-page family history and file it in each child's folder"
                - "Add any new diagnosis in the wider family to the history @recurring(yearly)"
            - name: Raising concerns or seeking a second opinion
              description: |-
                ## Purpose
                Parents sometimes feel a child's problem is not being taken seriously, a referral was refused or a result was poorly explained. Knowing how to ask for a review, a second opinion or how to use the practice's complaints process, calmly and with your notes in hand, gets concerns heard without damaging the relationship you still need.

                ## Milestones
                1. The concern written in a few sentences, with dates and what was said.
                2. A follow-up appointment requested to discuss it with the same clinician.
                3. The process for a second opinion or a formal concern found.
                4. The outcome recorded and the next step decided.

                ## Notes
                Most concerns are resolved by a calm conversation with your notes. Formal complaints are for when that has not worked.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written concern has been discussed with the clinician or practice and the outcome and next step are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the concern down with dates and what was said"
                - "Book a follow-up to discuss it with the same clinician"
                - "Find the practice's process for second opinions and formal concerns"
                - "Record the outcome and decide the next step"
            - name: Health summary handover for an eighteen-year-old
              description: |-
                ## Purpose
                Young people leaving for work, training or university often do not know their own vaccination history, allergies, blood group or the name of the medicine they took for years. Handing over a complete summary and their folder, and showing them how to register with a new doctor, lets them manage their own care from the first week away.

                ## Milestones
                1. A full summary written: vaccinations, allergies, conditions, medicines, operations and family history.
                2. Copies of key letters and records collected into their own folder.
                3. Your young adult shown how to register with a doctor and dentist where they will live.
                4. The folder and summary handed over, with access to their online record set up in their name.

                ## Notes
                Check any vaccinations recommended before university or shared living, and book them in good time.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your young adult holds their own health folder and summary, has online record access in their own name and knows how to register elsewhere."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a full health summary from the folder for your young adult"
                - "Ask the practice about vaccinations recommended before leaving home"
                - "Show them how to register with a doctor and dentist where they will live"
                - "Hand over the folder and help them set up their own online record access"
---

# Children's Health Appointments

This area keeps every child's check-ups, vaccinations, dentist visits, eye tests and growth records on track, however many children you have and however many adults share the job. It starts with the foundations (a health folder, registrations, a vaccination check, an allergy and medicine summary and a twelve-month plan), then the routines that keep appointments booked and followed up, the skills that make visits calmer and clinicians clearer, the decisions about catch-up doses, waiting lists, glasses and braces, the dated appointments from the first dental visit to teenage vaccinations, the situations that change the picture, and finally the specialist work of referrals, family history and handing a young adult their own records.

What repeats is a Sunday look at the week's appointments, a monthly check of due vaccinations, referrals and the medicine cupboard, quarterly measurements and dental dates, and a yearly review of every child's appointments, school forms and costs. The Metrics log, Meeting notes, Habit tracker, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
