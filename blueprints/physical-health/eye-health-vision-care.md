---
id: physical-health.eye-health-vision-care
name: Eye Health & Vision Care
description: "Eye tests kept on schedule, glasses and contact lenses handled well, urgent warning signs known, and glaucoma, cataract and macular care organised for screen workers and older adults."
category: personal
version: 1.0.0
tags: [physical-health, eye-health-vision-care, everyone, retiree, glaucoma, cataracts, contact-lenses, screen-work]
author: Aurum Technology
starter_structure:
  templates:
    - habit-tracker
    - metrics-log
    - purchase-decision
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Eye Health & Vision Care
          description: "Scheduling eye tests, managing glasses and contacts, and monitoring conditions like glaucoma, cataracts or macular degeneration, for screen workers and older adults alike."
          projects:
            - name: Booking an overdue eye examination
              description: |-
                ## Purpose
                Adults are commonly advised to have an eye examination every two years, more often after sixty or with a family history of glaucoma, yet many people go five years or more because their glasses still seem fine. Glaucoma and early macular change cause no symptoms until sight is already lost, so an examination is the only way to catch them. Booking the overdue test this month resets the clock and gives every other project here a starting point.

                ## Milestones
                1. The date of your last eye examination found or estimated.
                2. A full eye examination booked with an optometrist, not just a quick sight test for glasses.
                3. The examination attended, with your current glasses and any reading glasses brought along.
                4. A copy of the prescription and a short summary of the findings kept.

                ## Notes
                If you notice a sudden change in your sight, do not wait for a routine appointment. The warning signs card project lists what needs same-day care.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full eye examination has been attended within the last month and a copy of the resulting prescription is filed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the date of your last eye examination in old emails or receipts"
                - "Book a full eye examination with an optometrist"
                - "List any changes in your sight to mention at the appointment"
                - "Ask for a written copy of your prescription before you leave"
            - name: Eye emergency warning signs card
              description: |-
                ## Purpose
                A few eye symptoms need care the same day: sudden loss or dimming of vision, a shower of new floaters or flashes of light, a dark curtain across part of the view, a painful red eye with blurred sight, or a chemical splash. Sight is lost by people waiting for a routine appointment or hoping it settles overnight. A card on the fridge and in your phone, listing these signs and where to go, removes the hesitation.

                ## Milestones
                1. The urgent eye symptoms listed in plain words.
                2. The nearest urgent eye service and its opening hours written beside them.
                3. The out-of-hours number for urgent medical advice added.
                4. The card on the fridge and saved as a phone note, with everyone at home shown where it is.

                ## Notes
                Check the list against the guidance your own optometrist or health service publishes. For a chemical splash, first aid guidance usually starts with rinsing the eye with plenty of clean water straight away.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card listing urgent eye symptoms and the nearest urgent eye service is on the fridge and saved on your phone."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the eye symptoms that need same-day care"
                - "Find the nearest urgent eye service and its hours"
                - "Save the card as a note on your phone"
                - "Show everyone at home where the card lives"
            - name: Personal eye record and prescription history
              description: |-
                ## Purpose
                Each practice keeps its own notes, so moving town or changing optician can wipe out years of history about your eye pressure, prescription changes and anything they were watching. A single record holding every prescription, pressure reading and finding lets the next examiner see whether something has changed, which is what matters most.

                ## Milestones
                1. Copies of your last two or three prescriptions gathered from the practices that issued them.
                2. Eye pressure readings and any findings noted, such as early cataract or an optic nerve being watched.
                3. Contact lens specifications recorded if you wear them.
                4. The record stored where you can open it at any appointment.

                ## Notes
                Practices usually have to give you your spectacle prescription; pressure readings and scan reports may need a written request.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One document lists every eye examination you can trace, with prescription, pressure readings and findings for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your current practice for a copy of your latest prescription"
                - "Ask the agent to draft a short letter requesting your scan reports and pressures"
                - "Create one document with a row per examination"
                - "Add every new prescription the week you receive it"
            - name: Choosing an optometrist you will return to
              description: |-
                ## Purpose
                Continuity matters in eye care: a practice comparing this year's retinal photograph with last year's is far more likely to spot slow change than a different chain every time. Choosing on equipment, how referrals are handled and how results are explained, rather than on the frames in the window, gives you that continuity for years.

                ## Milestones
                1. Two or three local practices compared on the same short list of criteria.
                2. Each practice asked whether retinal photographs or OCT scans are offered, and what they cost.
                3. Each practice's process for urgent same-day problems confirmed.
                4. One practice chosen and registered with, its details added to your eye record.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One optometry practice has been chosen against written criteria and its contact details are in your eye record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the practices within easy reach of home or work"
                - "Ask each whether retinal photographs or OCT scans are included"
                - "Ask how each handles an urgent same-day problem"
                - "Register with the practice you chose"
            - name: Family history of glaucoma and macular disease
              description: |-
                ## Purpose
                Having a parent, brother or sister with glaucoma raises your own risk several times over, and macular degeneration also runs in families. Many people know only that a grandparent had trouble seeing, not why. Asking now, while relatives can still answer, can change how often your optometrist wants to see you and which tests they run.

                ## Milestones
                1. Parents, siblings and grandparents asked about glaucoma, macular degeneration, cataracts and childhood squints.
                2. Each condition named written down with the relative and their age at diagnosis.
                3. The history given to your optometrist at your next examination.
                4. Their advice on how often to test recorded.

                ## Notes
                Some health systems offer free or subsidised eye tests to close relatives of people with glaucoma. Ask whether yours does.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of eye conditions in close relatives has been shared with your optometrist and their testing advice recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your parents or siblings which eye conditions they have been told about"
                - "Note each condition with the relative and their age at diagnosis"
                - "Tell your optometrist about any glaucoma in close relatives"
                - "Record how often they now want to examine you"
            - name: Eye care costs, entitlements and insurance
              description: |-
                ## Purpose
                Depending on where you live, eye examinations may be free over a certain age, for children, for people with diabetes or a glaucoma risk, or through an employer or vision insurance plan, and many people pay for what they are owed free. Mapping your entitlements, and what your plan pays towards glasses or lenses, often saves more than any discount voucher.

                ## Milestones
                1. Your eligibility for free or reduced-cost examinations checked against local rules.
                2. Any vision benefit from an employer or insurance plan found, with its allowance and renewal date.
                3. The yearly allowance for glasses or contact lenses noted.
                4. A one-line summary of entitlements added to your eye record.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A summary of every eye care entitlement and allowance you hold, with renewal dates, is saved in your eye record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your age or health makes eye tests free where you live"
                - "Look up any vision benefit in your employer or insurance plan"
                - "Note the yearly allowance for glasses and when it resets"
                - "Add the entitlement summary to your eye record"
            - name: Home vision check, one eye at a time
              description: |-
                ## Purpose
                The brain covers for a weak eye so well that people often discover a cataract or macular problem only when they happen to close the good eye. A two-minute check of each eye on its own, reading the same text and looking at a straight door frame, gives you a personal baseline and a simple way to notice change between appointments.

                ## Milestones
                1. Each eye checked separately at reading distance and across a room, with glasses on.
                2. A fixed reading target chosen, such as one page of a particular book, so later checks compare fairly.
                3. Any blur, bent lines or dark patch in either eye noted.
                4. Any difference between the eyes reported to your optometrist.

                ## Notes
                A home check does not replace an examination; its job is to make you notice change sooner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A dated note describes what each eye sees on its own at near and far, with any difference reported to your optometrist."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose a fixed reading target and a straight line to look at"
                - "Cover each eye in turn and note what you see"
                - "Write down any difference between the two eyes"
                - "Report a new difference to your optometrist"
            - name: Spare glasses and prescription backup
              description: |-
                ## Purpose
                Glasses get sat on, lost on holiday and dropped in car parks, and with a strong prescription a broken pair can mean no driving and no work until a new one arrives a week later. An older pair kept usable, plus a digital copy of the prescription, turns a crisis into an inconvenience.

                ## Milestones
                1. A spare pair identified, either a recent old pair or an inexpensive new one.
                2. The spare stored in a known place at home, with another in the car if you drive.
                3. A photo of your current prescription saved on your phone.
                4. The spare checked against your prescription after each examination.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A usable spare pair of glasses is stored in a known place and a photo of your current prescription is on your phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Try on your old glasses and check they are still usable"
                - "Photograph your current prescription and save it on your phone"
                - "Decide where the spare pair will live"
                - "Check the spare pair still matches your prescription @recurring(yearly)"
            - name: Understanding your glasses prescription
              description: |-
                ## Purpose
                A prescription is a small grid of numbers: sphere, cylinder and axis for each eye, sometimes an addition for reading and occasionally prism. Knowing what each column means lets you see whether your eyes are changing, spot a prescription copied wrongly, and talk to the optician as an equal when choosing lenses.

                ## Milestones
                1. Sphere, cylinder, axis, addition and prism explained in your own words.
                2. Your own prescription read and explained back, eye by eye.
                3. The change since your previous prescription noted.
                4. Pupillary distance found or measured and recorded with the prescription.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain each number on your current prescription and have noted how it differs from the previous one."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find your latest prescription and the one before it"
                - "Look up what each column on the prescription means"
                - "Compare the numbers between the two prescriptions"
                - "Ask the optician for your pupillary distance measurement"
            - name: Eye test recall every one to two years
              description: |-
                ## Purpose
                Recall letters go to old addresses and reminders get ignored, so many missed eye problems are simply missed appointments. A fixed recall rhythm, set to the interval your optometrist recommends for your age and risk, makes the examination as automatic as servicing a car.

                ## Milestones
                1. Your recommended examination interval confirmed with your optometrist.
                2. The next due date set as a repeating reminder.
                3. Each examination booked within a month of its due date.
                4. Results from each visit added to your eye record.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every eye examination over two years has been booked within a month of its recommended due date."
                cadence: cyclic
              tasks:
                - "Ask your optometrist which test interval they recommend for you"
                - "Set a reminder for the month your next test is due"
                - "Check whether an eye examination is due this year and book it if so @recurring(yearly)"
                - "Add the results to your eye record after each visit"
            - name: Contact lens hygiene routine
              description: |-
                ## Purpose
                Most serious contact lens infections come from a handful of habits: topping up old solution, rinsing with tap water, showering or swimming in lenses, and sleeping in lenses not made for it. Acanthamoeba keratitis, an infection strongly linked to water, can damage sight permanently. A written routine matched to your lens type removes the shortcuts.

                ## Milestones
                1. The replacement schedule for your lenses confirmed with your contact lens practitioner.
                2. A routine written out: clean dry hands, fresh solution each time, no tap water, no sleeping in daily lenses.
                3. A new lens case in use, replaced every month.
                4. Lenses taken out before swimming or showering, or prescription goggles arranged.

                ## Notes
                If an eye wearing a lens becomes red, painful or sensitive to light, take the lens out and seek same-day advice rather than waiting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written lens routine is by the mirror and the lens case has been replaced every month for three months."
                cadence: rolling
              tasks:
                - "Confirm your lens replacement schedule with your practitioner"
                - "Throw away any solution that has been topped up"
                - "Replace the lens case with a new one @recurring(monthly:9)"
                - "Write the routine on a card beside the bathroom mirror"
            - name: Contact lens and solution reorder
              description: |-
                ## Purpose
                Running out of lenses is what tempts people to stretch two-week lenses to six, which is when trouble starts. A reorder rhythm based on how many pairs you actually use each month, plus a watch on the expiry of your lens specification, keeps supply steady and keeps suppliers able to dispense.

                ## Milestones
                1. Your monthly use of lenses and solution counted.
                2. A supplier chosen, with your current specification on file.
                3. The specification expiry date noted, since many suppliers will not dispense after it.
                4. Stock reordered before it drops below two weeks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No lens has been worn past its replacement date in three months because stock never ran out."
                cadence: rolling
              tasks:
                - "Count the lenses and solution you use in a typical month"
                - "Note the expiry date on your contact lens specification"
                - "Check stock and reorder if under two weeks remain @recurring(monthly:17)"
                - "Book a contact lens check before the specification expires"
            - name: Screen break and blink routine
              description: |-
                ## Purpose
                Screen work roughly halves how often you blink and holds the eyes at one focusing distance for hours, which brings the tired, gritty, blurry feeling many office workers get by mid afternoon. Short breaks looking into the distance and deliberate full blinks ease it for most people, but only once they become a habit rather than an intention.

                ## Milestones
                1. A break rhythm chosen, such as twenty seconds looking twenty feet away every twenty minutes.
                2. A break reminder running on your work computer.
                3. End-of-day eye tiredness scored for two weeks before and after starting.
                4. The routine kept for at least four weeks.

                ## Notes
                Start from the **Habit tracker** template. Desk height and screen position belong with your workstation set-up; this project is about the eyes themselves.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of break-routine tracking show lower average end-of-day eye tiredness scores than the first fortnight."
                cadence: rolling
              tasks:
                - "Score your end-of-day eye tiredness from one to ten"
                - "Set a break reminder on your work computer"
                - "Practise ten slow, full blinks during each break"
                - "Review the week's tiredness scores each Friday @recurring(weekly:fri)"
            - name: Glasses cleaning and fit upkeep
              description: |-
                ## Purpose
                Scratched lenses scatter light and loose frames slide down the nose, so you look over the lenses instead of through them, and good glasses end up performing badly. Opticians will usually adjust frames, tighten screws and replace nose pads free of charge, but few people ask. A quarterly check keeps glasses working as they did on the first day.

                ## Milestones
                1. A microfibre cloth and lens spray kept wherever the glasses come off.
                2. Hinges, screws and nose pads checked every quarter.
                3. A free adjustment visit made whenever the fit has drifted.
                4. Deep scratches or peeling coatings noted for the next replacement.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pair of glasses has had a quarterly fit check for a year, with any adjustment visits noted."
                cadence: cyclic
              tasks:
                - "Buy a lens cleaning spray and two microfibre cloths"
                - "Stop wiping lenses on clothing or paper tissue"
                - "Check hinges, screws and nose pads on every pair @recurring(quarterly)"
                - "Take slipping frames to the optician for an adjustment"
            - name: Dry eye daily care routine
              description: |-
                ## Purpose
                Dry eye is one of the most common reasons people see an optometrist, and it tends to worsen with age, screen work, air conditioning and menopause. Lubricating drops, warm compresses and lid hygiene help only when done consistently for several weeks. Agreeing a routine with your optometrist and keeping it daily turns occasional relief into lasting comfort.

                ## Milestones
                1. A dry eye routine agreed with your optometrist, including which drops and how often.
                2. The routine carried out daily for six weeks.
                3. Symptoms scored weekly so improvement can be judged.
                4. A follow-up appointment attended with the symptom scores.

                ## Notes
                Preservative-free drops are often preferred for frequent use; ask which suits you rather than picking from the shelf.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six weeks of the agreed dry eye routine have been completed and the weekly scores reviewed with your optometrist."
                cadence: rolling
              tasks:
                - "Ask your optometrist to agree a dry eye routine with you"
                - "Buy the drops and any lid wipes they recommend"
                - "Do the agreed warm compress and lid routine @recurring(daily)"
                - "Bring six weeks of symptom scores to the follow-up"
            - name: Glaucoma eye drop routine
              description: |-
                ## Purpose
                Glaucoma drops lower eye pressure only on the days they go in, and missed doses are a leading reason the condition keeps progressing despite treatment. Because glaucoma causes no symptoms, the body gives no reminder. Tying drops to a fixed daily moment and keeping a spare bottle at home protects the sight you still have.

                ## Milestones
                1. Each drop, its eye and its time of day written on a single card.
                2. Drops tied to a fixed daily anchor such as brushing your teeth.
                3. At least one spare bottle at home at all times.
                4. Missed doses counted and mentioned at the next clinic visit.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months pass with drops taken as prescribed, a spare bottle always at home and missed doses logged for the clinic."
                cadence: rolling
              tasks:
                - "Write each drop, which eye and what time on one card"
                - "Pick a daily anchor for each dose"
                - "Put in the prescribed drops at the agreed time @recurring(daily)"
                - "Order the next prescription before the spare bottle is opened @recurring(monthly:23)"
            - name: Weekly Amsler grid check
              description: |-
                ## Purpose
                An Amsler grid is a square of straight lines that shows early distortion from macular disease before reading becomes difficult. People with early macular degeneration, or with it already in one eye, are often asked to check each eye weekly, because the wet form can progress within weeks and treatment works best when started quickly.

                ## Milestones
                1. A printed grid fixed at reading distance in good light.
                2. Each eye checked separately every week, with reading glasses on.
                3. Any new wavy lines, missing patches or blurred areas recorded with the date.
                4. The eye clinic's urgent contact number kept beside the grid.

                ## Notes
                Ask your optometrist whether weekly checks are right for you. New distortion is a reason to seek an appointment within days, not at the next routine visit.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each eye has been checked on the grid every week for three months, with any change dated and reported."
                cadence: rolling
              tasks:
                - "Print an Amsler grid and fix it where you read"
                - "Check each eye separately with reading glasses on @recurring(weekly:sun)"
                - "Mark on the grid any lines that look wavy or missing"
                - "Save the eye clinic's urgent contact number beside the grid"
            - name: Vision changes log
              description: |-
                ## Purpose
                Small changes are hard to describe from memory at an appointment: was headlight glare worse last winter or this one, did the floaters start before or after the summer. A short dated log of anything new, from halos around lights to needing more light to read, turns vague impressions into evidence your optometrist can use.

                ## Milestones
                1. A log with columns for date, eye, what changed and the situation.
                2. Entries made within a day of noticing a change.
                3. The log read back each month for patterns.
                4. The log brought to every eye appointment.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated vision changes log covering at least six months has been shown at an eye appointment."
                cadence: rolling
              tasks:
                - "Create the log with date, eye, change and situation columns"
                - "Record your current glare, floaters and reading light needs as a first entry"
                - "Read back over the month's entries @recurring(monthly:4)"
                - "Bring the log to your next eye appointment"
            - name: Household eye test calendar
              description: |-
                ## Purpose
                In a family, eye tests run on different cycles: a child with glasses every year, a teenager in contact lenses, a parent over sixty, a partner who never goes. One calendar showing who is due when stops anyone drifting years overdue without noticing.

                ## Milestones
                1. Every household member listed with their last eye test date.
                2. Each person's recommended interval noted.
                3. Due dates for the coming year in a shared calendar.
                4. Appointments grouped on one day where the practice allows.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A shared calendar shows the next eye test due date for every member of the household."
                cadence: rolling
              tasks:
                - "List each household member and their last eye test date"
                - "Ask the optician the recommended interval for each person"
                - "Add every due date to the shared family calendar"
                - "Plan the coming year's family eye tests in one sitting @recurring(yearly)"
            - name: What a full eye examination checks
              description: |-
                ## Purpose
                Far more happens in a full eye examination than reading letters off a chart: it usually measures eye pressure, looks at the optic nerve and retina, often includes a photograph or scan, and sometimes a field test. Knowing what each test is for lets you ask for the ones that matter at your age and with your history, and understand the results.

                ## Milestones
                1. The purpose of the letter chart, pressure test, retinal photograph, OCT scan and field test understood.
                2. The tests you had at your last examination identified.
                3. Any test you were not offered and want to ask about listed.
                4. Questions for your next examination written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists which tests your last examination included and three questions to raise at the next one."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up what each part of a standard eye examination checks"
                - "Ask your practice which tests your last visit included"
                - "List the tests you would like discussed next time"
                - "Write three questions to take to your next examination"
            - name: Putting in and removing contact lenses safely
              description: |-
                ## Purpose
                New wearers often give up on lenses because insertion takes ten minutes and removal feels alarming, or they pick up risky habits such as using fingernails. Practising the technique taught at the fitting in short daily sessions makes it a thirty-second job and protects the cornea from scratches.

                ## Milestones
                1. Insertion and removal demonstrated by your practitioner and practised under supervision.
                2. Each soft lens checked for the right way out before it goes in.
                3. Insertion and removal managed in under a minute per eye.
                4. Short nails and clean dry hands part of the routine.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can insert and remove a lens in each eye in under a minute without help, using the technique your practitioner taught."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your practitioner to watch you insert and remove a lens"
                - "Practise in front of a mirror for five minutes a day"
                - "Learn the fold test for telling whether a soft lens is inside out"
                - "Time yourself until each eye takes under a minute"
            - name: Eye drop technique that reaches the eye
              description: |-
                ## Purpose
                Much of every eye drop runs down the cheek or drains into the nose, and people on several drops often wash out the first with the second. A good technique, a gap between different drops and gentle pressure at the inner corner of the eye afterwards keep the medicine where it was meant to go.

                ## Milestones
                1. Technique checked by a pharmacist, nurse or optometrist.
                2. The gap needed between different drops confirmed and written down.
                3. Gentle pressure on the inner corner after each drop practised.
                4. A drop aid tried if shaky hands or arthritis make bottles hard to squeeze.

                ## Notes
                Drop aids that hold the bottle above the eye are inexpensive and help many older users.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A health professional has watched your drop technique and the gap between drops is written on your drop card."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask a pharmacist or nurse to watch you put in a drop"
                - "Confirm how many minutes to leave between different drops"
                - "Practise closing the eye and pressing the inner corner afterwards"
                - "Try a drop dispenser aid if bottles are hard to squeeze"
            - name: Digital eye strain or a vision problem
              description: |-
                ## Purpose
                Tired eyes after a long day at the screen can be simple strain, an out-of-date prescription, early presbyopia or dry eye, and each has a different fix. Learning to tell them apart saves money on gadgets that may not help and makes sure a real prescription change is not dismissed as screen fatigue.

                ## Milestones
                1. The common causes of screen-related eye discomfort understood.
                2. Your own symptoms matched against them in a short note.
                3. An eye examination booked if blur, headaches or double vision persist.
                4. The evidence on blue-light filtering lenses read before buying any.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note matches your screen symptoms to their likely causes, with an examination booked if any persist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your symptoms and when in the day they appear"
                - "Read about the main causes of screen-related eye discomfort"
                - "Ask your optometrist whether your prescription suits screen distance"
                - "Check the evidence before paying for blue-light filtering lenses"
            - name: How glaucoma damages side vision
              description: |-
                ## Purpose
                Glaucoma slowly damages the optic nerve, usually starting at the edges of vision, and the brain hides the gaps until much of the field is gone. Understanding eye pressure, the optic nerve and why lost vision cannot be restored explains why lifelong drops and regular field tests matter even when nothing seems wrong.

                ## Milestones
                1. The roles of eye pressure and the optic nerve understood in plain terms.
                2. The difference between open-angle and angle-closure glaucoma known, including the urgent symptoms of the second.
                3. Your own type and stage, if diagnosed, written down from your clinic letter.
                4. Questions for your next glaucoma appointment listed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain your glaucoma type and stage in two sentences and have a written list of questions for the clinic."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a patient guide from a recognised glaucoma charity"
                - "Write down your glaucoma type and stage from the clinic letter"
                - "Learn the urgent symptoms of angle-closure glaucoma"
                - "List questions for your next glaucoma appointment"
            - name: When cataract surgery is worth having
              description: |-
                ## Purpose
                Almost everyone develops some cataract with age, and surgery is usually offered when clouding starts to affect daily life rather than at a fixed stage. Recognising the signs, such as glare from headlights, faded colours and frequent prescription changes, helps you judge when to ask for a referral and what to expect from lens implant choices.

                ## Milestones
                1. The common signs of cataract and how they affect driving and reading understood.
                2. Your own symptoms listed with examples from daily life.
                3. The basic lens implant options, such as distance focus or multifocal, understood.
                4. A decision recorded on whether to ask for a referral now or wait.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A written decision on whether to seek a cataract referral now, based on listed daily-life symptoms, with a date to revisit it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the daily situations where your vision now lets you down"
                - "Read a patient guide to cataract surgery and lens implants"
                - "Ask your optometrist whether a referral is reasonable yet"
                - "Record the decision and when to revisit it"
            - name: Dry and wet macular degeneration explained
              description: |-
                ## Purpose
                Age-related macular degeneration affects the central vision used for faces, reading and driving, and comes in a slow dry form and a faster wet form that can often be treated if caught quickly. Knowing which you have, or are at risk of, tells you how urgently to act on changes and which risk factors, such as smoking, matter most.

                ## Milestones
                1. The difference between dry and wet macular degeneration understood.
                2. Your own diagnosis or risk level written down from your clinic letter.
                3. The symptoms that need an urgent appointment listed.
                4. Risk factors relevant to you discussed with your optometrist.

                ## Notes
                Ask before buying eye vitamins: the evidence supports specific formulations for specific stages, and they do not suit everyone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your macular diagnosis or risk level and the symptoms that need an urgent call are written on one page."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a patient guide from a recognised macular charity"
                - "Write down your diagnosis or risk level from the letter"
                - "List the symptoms that mean ringing the clinic straight away"
                - "Ask your optometrist whether any supplement is suggested for your stage"
            - name: Varifocals, bifocals and office lenses compared
              description: |-
                ## Purpose
                After about forty, one pair of single-vision glasses often stops covering every distance, and the choice between varifocals, bifocals, office lenses and separate pairs affects comfort, cost and safety on stairs. Learning how each lens works before you sit down with the optician makes the conversation shorter and the choice your own.

                ## Milestones
                1. How varifocal, bifocal, office and single-vision lenses work understood.
                2. The trade-offs of each written down: cost, adaptation time, field of view, stairs and kerbs.
                3. Your main daily tasks listed by viewing distance.
                4. A preferred option chosen to discuss with the optician.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of lens types against your own daily tasks names the option you want to discuss."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your daily tasks by distance: far, screen and reading"
                - "Read how varifocal, bifocal and office lenses differ"
                - "Note the main trade-off of each lens type for you"
                - "Pick the option you want to discuss at your next test"
            - name: Buying frames and lenses without overpaying
              description: |-
                ## Purpose
                Lens extras such as thinning, anti-reflection, photochromic and blue-light coatings can double the price of a pair, and some matter far more than others for your prescription. Separating what you need from what is being sold, and comparing a local practice with an online supplier on the same specification, can save a large share of the bill.

                ## Milestones
                1. Your prescription and pupillary distance in hand.
                2. The lens options your prescription genuinely needs identified, with the optician's reasoning.
                3. At least two quotes compared for the same lens specification.
                4. A pair bought within your budget or allowance.

                ## Notes
                Start from the **Purchase decision** template. Strong prescriptions and varifocals usually benefit from in-person fitting even when it costs more.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Glasses bought after comparing two quotes for the same specification, with lens details saved in your eye record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the optician which lens options your prescription actually needs"
                - "Get a written quote for frames and lenses"
                - "Compare the same specification at a second supplier"
                - "Record the purchase and the lens details in your eye record"
            - name: Protective eyewear for DIY and sport
              description: |-
                ## Purpose
                Many eye injuries happen at home and at play: drilling, strimming, cleaning chemicals, and racket sports such as squash, where the ball fits the eye socket exactly. The right safety glasses or sports goggles, with a prescription if you need one, kept where the risk is, prevent injuries that ordinary glasses can make worse by shattering.

                ## Milestones
                1. The jobs and sports in your life with a real eye injury risk listed.
                2. Impact-rated eyewear bought for each.
                3. Prescription safety or sports eyewear arranged if you cannot see without glasses.
                4. Each pair stored beside the tools or kit it belongs with.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Impact-rated eyewear is stored with the tools or sports kit for every listed eye injury risk."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the jobs and sports where something could hit your eye"
                - "Buy impact-rated safety glasses for DIY and garden work"
                - "Ask the optician about prescription sports goggles"
                - "Store each pair beside the tools or kit it protects against"
            - name: Dedicated computer glasses for screen work
              description: |-
                ## Purpose
                Varifocals put the screen in a narrow band of the lens, so many people over forty-five tilt their head back all day, while reading glasses blur a screen at arm's length. A pair set for screen distance, often called office or occupational lenses, can end both problems, but only if the distance is measured properly and the pair is used for the right tasks.

                ## Milestones
                1. The distance from your eyes to your main screen measured.
                2. Discomfort with your current glasses at the screen described.
                3. Screen-distance lenses discussed with the optician using that measurement.
                4. A decision recorded on whether a dedicated pair is worth the cost.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on screen-distance glasses, based on a measured screen distance discussed with an optician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Measure the distance from your eyes to your screen"
                - "Note neck or eye discomfort with your current glasses at the screen"
                - "Take the measurement to the optician and ask about office lenses"
                - "Record whether a dedicated pair is worth it for you"
            - name: First contact lens trial
              description: |-
                ## Purpose
                Contact lenses suit sport, travel and people who dislike how they look in glasses, but they are a medical device with a real infection risk and an ongoing cost. A proper fitting and a trial of daily disposables before committing shows whether lenses are comfortable for your eyes and worth the monthly spend.

                ## Milestones
                1. A contact lens fitting done by a qualified practitioner.
                2. Trial lenses worn for at least two weeks with comfort noted each day.
                3. The monthly cost of the lens type worked out against how often you would wear them.
                4. A decision made on lens type, or on staying with glasses, with an aftercare date booked if you continue.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A two-week lens trial is complete and a written decision on lenses or glasses is made, with aftercare booked if continuing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book a contact lens fitting appointment"
                - "Wear trial lenses for two weeks and note comfort each day"
                - "Work out the monthly cost for the days you would wear them"
                - "Book the aftercare check before the trial ends"
            - name: Laser eye surgery suitability assessment
              description: |-
                ## Purpose
                Refractive surgery can end dependence on glasses for many people, but suitability depends on corneal thickness, a stable prescription, age and dry eye, and clinics vary widely in how candidly they discuss risk. A careful assessment and two independent opinions protect against a rushed decision about a permanent procedure.

                ## Milestones
                1. Two years of stable prescriptions confirmed from your eye record.
                2. Assessments done at two clinics, with surgeon qualifications checked.
                3. Risks such as dry eye and night glare, and the cost of any enhancement, written down for each clinic.
                4. A decision recorded, including the option of not going ahead.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two clinic assessments compared in writing and a decision recorded on whether to proceed with refractive surgery."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check your eye record for two years of stable prescriptions"
                - "Book a suitability assessment at two different clinics"
                - "Ask each clinic about dry eye risk, night glare and enhancement costs"
                - "Write down your decision and the reasons for it"
            - name: Sunglasses with real UV protection
              description: |-
                ## Purpose
                Ultraviolet light is linked to cataract and growths on the surface of the eye, and dark lenses without proper filtering may do more harm than none by widening the pupil. Choosing sunglasses marked with full UV protection, wraparound for long hours outdoors and with a prescription if needed, protects your eyes for decades of summers.

                ## Milestones
                1. Current sunglasses checked for a UV400 or equivalent standard marking.
                2. Your needs listed: driving, water, snow, sport or everyday use.
                3. A pair chosen that meets the standard and those needs.
                4. Prescription or clip-on options settled if you wear glasses.

                ## Notes
                Start from the **Purchase decision** template. Very dark lenses and some tints are not suitable for driving, so check the filter category.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every regular wearer in the house has sunglasses carrying a recognised full UV protection marking."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your sunglasses for a UV400 or equivalent marking"
                - "List where you most need sunglasses: driving, water or sport"
                - "Compare prescription sunglasses with clip-ons if you wear glasses"
                - "Buy a pair that meets the standard and your needs"
            - name: Lighting and contrast at home for ageing eyes
              description: |-
                ## Purpose
                A sixty-year-old typically needs far more light to read than a twenty-year-old, and dim stairs are a common factor in falls. Brighter task lamps, contrasting edges on steps and less glare from windows make reading easier and the house safer, often for the cost of a few bulbs and some tape.

                ## Milestones
                1. Each room walked through and dim or glary spots noted.
                2. Task lights added where reading, cooking and medicines are handled.
                3. Stair edges marked with contrasting tape or paint.
                4. Night lights fitted on the route to the bathroom.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Task lights, contrasting stair edges and night lights are in place in every spot noted on the walk-through."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk through the house and note dim and glary spots"
                - "Add a bright task lamp where you read most"
                - "Mark stair edges with contrasting tape"
                - "Fit plug-in night lights between the bedroom and bathroom"
            - name: Cataract surgery preparation and recovery
              description: |-
                ## Purpose
                Cataract surgery itself is quick, but the weeks around it involve decisions and routines: the lens implant choice, drops several times a day afterwards, no driving until cleared, and often a second eye to plan. Organising transport, drops, help at home and the post-operative check in advance means recovery goes to plan and problems are caught early.

                ## Milestones
                1. The lens implant choice and expected need for glasses afterwards discussed and recorded.
                2. Transport for surgery day and the first follow-up arranged.
                3. The post-operative drop schedule written out as a tick chart.
                4. Warning signs after surgery, such as increasing pain or worsening vision, listed with the clinic's number.
                5. A new glasses prescription obtained once the eye has settled.

                ## Notes
                Ask when you can drive, swim, wear eye make-up and bend to lift. Clinic instructions vary, and yours are the ones to follow.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Surgery and the post-operative check are complete, the drop chart is fully ticked and a new prescription is on file."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down the lens implant option the surgeon recommends and why"
                - "Arrange a lift to and from the hospital on surgery day"
                - "Make a tick chart for the post-operative drops"
                - "Book the eye test for new glasses when the clinic advises"
            - name: Driving eyesight check before licence renewal
              description: |-
                ## Purpose
                Most countries set a legal eyesight standard for driving, usually reading a number plate at a set distance plus a minimum field of vision, and drivers are often responsible for reporting conditions such as glaucoma that affect it. Checking that you meet the standard before renewal, and what you must declare, protects your licence and insurance as well as other road users.

                ## Milestones
                1. The eyesight standard and reporting rules for your licence found.
                2. The number plate test done at the legal distance with your driving glasses.
                3. Any eye condition you have checked against the reporting list.
                4. Any required declaration made to the licensing authority, with a copy kept.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You have passed a self-check against the legal driving eyesight standard and filed any declaration your licence requires."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the eyesight standard for your driving licence"
                - "Pace out the number plate distance and test yourself with glasses on"
                - "Check whether any eye condition you have must be reported"
                - "Keep a copy of any declaration with your licence papers"
            - name: Dilated eye examination day plan
              description: |-
                ## Purpose
                Dilating drops let the optometrist see the back of the eye properly but leave vision blurred and light sensitive for several hours, and many people are advised not to drive afterwards. Planning transport, sunglasses and a quiet afternoon turns a dilated examination from a nuisance you avoid into a routine you accept.

                ## Milestones
                1. The practice asked whether dilation is planned and how long the effects usually last.
                2. Transport home arranged rather than driving.
                3. Sunglasses packed and demanding screen work moved to another day.
                4. The examination completed with dilation where recommended.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dilated examination has been attended with transport home arranged in advance."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the practice whether your eyes will be dilated"
                - "Arrange a lift or public transport home"
                - "Pack sunglasses for the trip home"
                - "Move demanding screen work out of that afternoon"
            - name: Preparing for a visual field test
              description: |-
                ## Purpose
                Visual field tests map your side vision by asking you to press a button whenever a faint light appears, and results depend heavily on concentration and understanding the test. A poor first attempt often gets repeated or read as change. Knowing what to expect and arriving rested gives a result that truly reflects your eyes.

                ## Milestones
                1. How the test works understood, including that missing some lights is normal.
                2. The test booked at a time of day when you are alert.
                3. Current glasses and prescription details brought along.
                4. Results discussed and a copy of the printout requested.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A visual field test completed while rested, with a copy of the printout filed in your eye record."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read how a visual field test works before the appointment"
                - "Book the test at a time of day when you are alert"
                - "Bring your current glasses and prescription"
                - "Ask for a copy of the field printout afterwards"
            - name: Child's eye test before starting school
              description: |-
                ## Purpose
                Children rarely complain about poor sight because they assume everyone sees the way they do, and a lazy eye responds best to treatment when caught young. A full eye test before school starts, rather than relying on school screening alone, catches squints, short sight and lazy eye while treatment is simplest.

                ## Milestones
                1. A children's eye test booked with an optometrist before the school year begins.
                2. Any family history of squint or lazy eye mentioned.
                3. Results and any glasses prescription recorded.
                4. A recall date for the next test set.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your child has had a full eye test before starting school, with results and the next recall date recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether children's eye tests are free where you live"
                - "Book an eye test before the new school year"
                - "Note any squint, head tilting or sitting close to screens to mention"
                - "Set a reminder for the recall date the optometrist gives"
            - name: Travelling with glasses, lenses and eye drops
              description: |-
                ## Purpose
                Losing your only pair of glasses abroad, running out of lenses or leaving refrigerated drops in a hotel can wreck a trip and be hard to fix in another language. A small eye kit with spares, a copy of your prescription and enough drops for the trip plus a margin saves hunting for an optician overseas.

                ## Milestones
                1. Spare glasses or extra lenses packed in hand luggage.
                2. Your prescription and lens specification saved on your phone.
                3. Drops and lens solution packed in travel sizes or labelled prescription containers.
                4. A plan for keeping cool any drops that need it.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip completed with spare eyewear, prescription copies and enough drops packed before leaving."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pack spare glasses or extra lenses in hand luggage"
                - "Save your prescription and lens specification on your phone"
                - "Count the drops and lenses needed for the trip plus a week"
                - "Check airline rules for carrying eye drops and lens solution"
            - name: First reading glasses after forty
              description: |-
                ## Purpose
                Around the mid forties almost everyone finds small print drifting further away, a normal ageing change called presbyopia. The first response is often a cheap pair from the pharmacy, which may be fine or may hide different strengths between the eyes or another problem. Starting with an eye examination and then choosing readers, varifocals or multifocal lenses makes the change comfortable.

                ## Milestones
                1. An eye examination done once close reading becomes harder.
                2. Your prescription checked for different strengths between eyes or astigmatism.
                3. A decision recorded on ready-made readers, prescription readers or multifocal lenses.
                4. Spare readers placed where they are used most.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "After an eye examination, a written choice of reading correction has been made and spare readers are in place."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book an eye examination before buying any readers"
                - "Ask whether ready-made readers suit your prescription"
                - "Decide between readers, varifocals or multifocal contact lenses"
                - "Place spare readers by the bed, in the kitchen and in your bag"
            - name: Workplace eye test for screen users
              description: |-
                ## Purpose
                In many countries, employers must pay for eye tests for staff who use screens as a significant part of their job, and contribute to glasses needed specifically for screen work. Many eligible employees never claim. Finding your employer's policy and using it covers an examination and sometimes a screen pair.

                ## Milestones
                1. Your employer's policy on eye tests for screen users found.
                2. An eligible eye test booked through the scheme.
                3. The optometrist asked whether you need glasses specifically for screen distance.
                4. Any reimbursement claimed with receipts.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An eye test has been taken through your employer's screen user scheme and any eligible costs reclaimed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search the staff handbook or intranet for an eye test policy"
                - "Ask HR or your manager how to request a voucher or refund"
                - "Book the eye test through the employer scheme"
                - "Submit receipts for any screen glasses the policy covers"
            - name: Supporting a parent's eye appointments
              description: |-
                ## Purpose
                Older parents with glaucoma, macular degeneration or cataracts often juggle frequent clinic visits, several drops and letters they cannot easily read. A grown-up child or carer who keeps one list of appointments, drops and questions, and joins the key visits, can prevent missed injections and drop mix-ups while leaving decisions with the parent.

                ## Milestones
                1. Your parent's agreement to your involvement recorded, and the clinic told who may be contacted.
                2. A shared list of eye appointments, drops and contact numbers.
                3. Transport arranged for appointments where dilation or treatment rules out driving.
                4. A monthly check-in on drop supplies and new letters.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Your parent has missed no eye appointment or drop reorder over six months, with a shared list kept current."
                cadence: rolling
              tasks:
                - "Ask your parent how much help they want with eye care"
                - "Make a one-page list of their eye appointments and drops"
                - "Arrange transport for the next clinic visit"
                - "Check drop supplies and any new clinic letters with them @recurring(monthly:12)"
            - name: Living with low vision
              description: |-
                ## Purpose
                When glasses can no longer give clear sight, low vision services offer magnifiers, lighting advice, phone accessibility settings and rehabilitation that can bring back reading and independence. Many people with sight loss are never referred. Asking for a low vision assessment and contacting a sight loss charity opens practical help that clinic visits alone do not provide.

                ## Milestones
                1. A low vision assessment requested through your eye clinic or optometrist.
                2. Magnifiers and lighting suited to your main tasks trialled.
                3. Accessibility settings on your phone and computer set up, such as large text and screen reading.
                4. Contact made with a sight loss charity or rehabilitation service.
                5. Registration as sight impaired discussed, if eligible, and related support checked.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A low vision assessment has taken place and at least one aid or service is in regular use for your hardest daily task."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your eye clinic for a low vision assessment referral"
                - "List the three daily tasks sight loss makes hardest"
                - "Turn on large text and magnification on your phone"
                - "Contact a sight loss charity about local support"
            - name: Eye care for a child who wears glasses
              description: |-
                ## Purpose
                Children outgrow frames, break them in the playground and quietly stop wearing glasses that slip or pinch. Termly fit checks, a spare pair and a word with the teacher about when to wear them keep the prescription doing its job through the school years.

                ## Milestones
                1. Frames chosen for durability, with a spare pair or repair cover.
                2. The class teacher told about the glasses and any seating needs.
                3. Fit and wear checked each school term.
                4. Eye tests kept at the interval the optometrist advises.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Over a school year, your child's glasses were checked each term and the recall test was attended on time."
                cadence: rolling
              tasks:
                - "Ask the optician about sturdy frames and a spare pair"
                - "Tell the class teacher when the glasses should be worn"
                - "Check the frames still fit and the lenses are not scratched @recurring(quarterly)"
                - "Book the next children's eye test on the recall date"
            - name: Second opinion on an eye diagnosis
              description: |-
                ## Purpose
                Findings such as suspected glaucoma, early macular changes or a recommendation for surgery can be borderline, and different clinicians read them differently. Asking for a second opinion with your scans and results in hand is a normal step and often settles whether treatment is needed now.

                ## Milestones
                1. The diagnosis or recommendation, and what makes it uncertain, written in a sentence.
                2. Copies of scans, field tests and letters gathered.
                3. A second opinion arranged through your doctor, optometrist or a private clinic.
                4. Both opinions compared and a decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two written clinical opinions on the same eye finding are compared and your resulting decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the diagnosis and what makes you unsure"
                - "Request copies of your scans, field tests and letters"
                - "Ask your doctor or optometrist how to arrange a second opinion"
                - "Ask the agent to set both opinions side by side in one table"
            - name: Glaucoma pressure and visual field trend
              description: |-
                ## Purpose
                Glaucoma care is judged on trends: eye pressure against your target, and whether field tests and nerve scans stay stable over years. Patients who keep their own copy of each result can see the direction of travel, ask informed questions and carry the history safely if they move clinics.

                ## Milestones
                1. Your target eye pressure obtained from your consultant.
                2. Each clinic visit's pressures, field test indices and scan summaries in one table.
                3. The trend reviewed once a year against the target.
                4. Questions about any change brought to the next appointment.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table holds every glaucoma clinic result since diagnosis, reviewed against your target pressure in the last year."
                cadence: cyclic
              tasks:
                - "Ask your consultant for your target eye pressure"
                - "Request copies of your last field tests and nerve scans"
                - "Add each visit's results to the trend table"
                - "Compare the year's results against your target @recurring(yearly)"
            - name: Wet macular degeneration injection schedule
              description: |-
                ## Purpose
                Injections for wet macular degeneration work only when given on time, often every four to sixteen weeks for years, and a missed appointment can cost central vision for good. A schedule with every injection date, transport booked well ahead and a plan for clinic cancellations keeps treatment on track.

                ## Milestones
                1. Every injection date in a calendar shared with whoever drives you.
                2. Transport booked for each appointment at least two weeks ahead.
                3. A clinic contact for cancellations and urgent changes saved.
                4. Vision changes between injections reported promptly.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every injection in the last six months was attended on its scheduled date, with transport arranged in advance."
                cadence: rolling
              tasks:
                - "Add every known injection date to a shared calendar"
                - "Confirm the next injection date before leaving each appointment"
                - "Check transport is booked for the coming month's injections @recurring(monthly:20)"
                - "Save the clinic number for cancellations and urgent changes"
            - name: Myopia control options for a child
              description: |-
                ## Purpose
                Short sight in children is becoming far more common and tends to worsen through the school years, and higher myopia raises lifelong risks such as retinal detachment and glaucoma. Specialist spectacle lenses, contact lenses, eye drops and more time outdoors may slow it, but they differ in cost and evidence. Weighing them with an optometrist who offers myopia management helps a family decide early.

                ## Milestones
                1. Your child's prescription history gathered to show how fast it is changing.
                2. An optometrist offering myopia management consulted.
                3. Each option compared on evidence, cost and practicality for your child.
                4. A decision recorded with a review date.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of myopia control options for your child ends in a recorded decision and review date."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Gather your child's last three prescriptions"
                - "Find an optometrist who offers myopia management"
                - "Compare the options on cost, effort and evidence"
                - "Plan more daily outdoor time and note it for the review"
            - name: Eye checks on medicines that affect the eyes
              description: |-
                ## Purpose
                Some long-term medicines, including hydroxychloroquine, steroid tablets or drops, and certain cancer and psychiatric treatments, can affect the retina, raise eye pressure or speed up cataracts, and some need regular eye screening. Checking your medicine list and arranging any recommended monitoring means problems are found before they affect sight.

                ## Milestones
                1. Your regular medicines checked with a pharmacist for known eye effects.
                2. Any medicine needing eye monitoring identified, with its recommended schedule.
                3. Screening appointments booked and their results kept in your eye record.
                4. Your optometrist told about every regular medicine.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every regular medicine has been checked for eye effects and any recommended eye screening is booked for this year."
                cadence: cyclic
              tasks:
                - "Ask a pharmacist which of your medicines can affect the eyes"
                - "Find out which of them need regular eye screening"
                - "Tell your optometrist about every regular medicine"
                - "Confirm any medicine-related eye screening is booked for the year @recurring(yearly)"
---

# Eye Health & Vision Care

This area is for anyone who wears glasses or lenses, works at a screen all day, or is getting older and wants to keep the sight they have. It starts with the foundations (an overdue examination, a warning signs card, your eye record and family history), then the routines for lens hygiene, drops and recall dates, the knowledge behind the tests and conditions, decisions about lenses, sunglasses and surgery, the appointments worth preparing for, situations from first readers to low vision, and finally the specialist work of tracking glaucoma, injections and medicine effects.

What repeats is a recall for eye tests, daily drops or dry eye care where you need them, a weekly Amsler grid check and screen-break review, monthly lens and supply checks, and quarterly frame upkeep. The Habit tracker, Metrics log and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
