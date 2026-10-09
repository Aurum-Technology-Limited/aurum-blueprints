---
id: physical-health.dental-oral-health
name: Dental & Oral Health
description: "A dentist you trust, recall dates for the whole household, daily brushing and cleaning between teeth that sticks, and clear decisions on fillings, braces, implants and gum treatment."
category: personal
version: 1.0.0
tags: [physical-health, dental-oral-health, everyone, parent, dentist, gum-health, orthodontics, children]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - purchase-decision
    - habit-tracker
    - metrics-log
    - meeting-notes
    - savings-goal
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Dental & Oral Health
          description: "Keeping teeth and gums healthy with dentist and hygienist visits, orthodontic or implant work, and daily care, for individuals and whole households."
          projects:
            - name: Finding a dentist you will keep going back to
              description: |-
                ## Purpose
                Most dental problems are cheap when caught at a routine check and expensive when they announce themselves with pain, so the real foundation is a practice you trust enough to keep visiting. Comparing two or three practices on location, opening hours, costs, emergency cover and how they treat nervous patients takes an afternoon and saves years of drifting between whoever has a free slot.

                ## Milestones
                1. Two or three practices within easy reach shortlisted, with whether they take new patients noted.
                2. Each practice's check-up fee, hygienist fee and emergency arrangements written beside its name.
                3. One practice chosen and the reasons recorded in a sentence.
                4. Everyone in the household registered or booked in as a new patient.

                ## Notes
                Start from the **Vendor** template. Ask whether the practice offers out-of-hours cover or points you to a local urgent service, because that matters more at 2am than the waiting room decor.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One dental practice chosen from a scored shortlist, with every household member registered or booked as a new patient."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the dental practices within twenty minutes of home or work"
                - "Ask each practice whether it is taking new patients and what a check-up costs"
                - "Compare the shortlist on cost, hours, emergency cover and reviews"
                - "Register everyone in the household with the practice you chose"
            - name: Household dental record with recall dates
              description: |-
                ## Purpose
                Ask most families when each person last saw the dentist and the answer is a guess, usually wrong by a year. A single record listing each person's practice, last check-up, last hygienist visit, recall interval and any ongoing treatment makes it obvious who is overdue and gives a new dentist the history in seconds.

                ## Milestones
                1. One record with a row for each household member.
                2. Last check-up and hygienist dates filled in from memory, the practice or old receipts.
                3. Each person's recall interval, as set by the dentist, written beside their name.
                4. Ongoing treatment, such as braces, implants or a crown in progress, noted with the clinician's name.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A household dental record lists every member's practice, last visit, recall interval and ongoing treatment, with no blank rows."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a dental record page with one row per household member"
                - "Ask the practice reception for each person's last visit dates"
                - "Write each person's recall interval beside their name"
                - "Check the record against the practice's recall letters @recurring(yearly)"
            - name: Medical history and medicines sheet for the dentist
              description: |-
                ## Purpose
                Dentists need to know about blood thinners, bone-strengthening medicines, heart valve problems, diabetes, pregnancy and allergies before they numb, extract or prescribe anything. Filling in the same form from memory in the waiting room is how things get missed. A prepared sheet, checked by your pharmacist, means treatment is planned around the full picture.

                ## Milestones
                1. A list of every regular medicine, supplement and inhaler with its strength as printed on the box.
                2. Allergies, including to latex, antibiotics or local anaesthetic, written down.
                3. Relevant conditions and past operations listed in plain words.
                4. The sheet checked by your pharmacist or doctor for anything a dentist would need to know.
                5. A copy kept on your phone for every appointment.

                ## Notes
                Some medicines for osteoporosis or cancer change how a dentist approaches extractions and implants. Do not stop or pause any medicine before dental work unless the prescriber agrees.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated medical history sheet listing medicines, allergies and conditions, checked by a pharmacist or doctor, is saved on your phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather every medicine box and inhaler in the house and list them"
                - "Write down allergies and any past reaction to dental anaesthetic"
                - "Ask your pharmacist which items on the list a dentist should know about"
                - "Save the sheet on your phone and hand a copy in at the next appointment"
                - "Check the sheet still matches your current medicines @recurring(quarterly)"
            - name: Baseline check-up with gum screening
              description: |-
                ## Purpose
                If it has been more than two years since your last full examination, or you are new to a practice, start with a proper baseline rather than a quick look. That means a check of every tooth, a gum screening score for each section of the mouth, an oral cancer check of the tongue and cheeks, and X-rays if the dentist thinks they are due. Everything later in this area is measured against it.

                ## Milestones
                1. A full examination booked and attended.
                2. Your gum screening scores, often called a BPE or periodontal chart, written in your record.
                3. A list of any decay, worn fillings or other findings, with the dentist's suggested priority.
                4. A written treatment plan and cost estimate, if treatment is needed.
                5. Your recall interval agreed and the next visit booked.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full examination completed, with gum scores, findings, any treatment plan and the agreed recall interval written in your dental record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a full examination, saying it is a baseline after a gap"
                - "Ask the dentist to tell you your gum screening scores"
                - "Ask for a written treatment plan and estimate before agreeing to anything"
                - "Copy the findings and recall interval into your dental record"
            - name: Dental emergency plan for the household
              description: |-
                ## Purpose
                A knocked-out tooth, a facial swelling or a child's broken front tooth always seems to happen on a holiday weekend. Knowing in advance who to ring out of hours, what your health service says to do with a knocked-out tooth and which signs mean going straight to emergency care turns a frantic search into a phone call.

                ## Milestones
                1. Your practice's out-of-hours arrangements and the local urgent dental number saved in every adult's phone.
                2. Your health service's first aid advice for a knocked-out or broken tooth written on one page.
                3. The signs that need emergency medical care, such as swelling spreading towards the eye or neck or difficulty swallowing or breathing, listed from official guidance.
                4. A small dental first aid pouch with gauze, a lidded pot and the practice number packed.

                ## Notes
                Speed matters with a knocked-out adult tooth, so the page must be quick to find. Baby teeth are handled differently; follow your health service's wording for children.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every adult has the out-of-hours dental number saved and a one-page emergency sheet, written from official guidance, is kept with the first aid kit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your practice's out-of-hours arrangements and the local urgent dental number"
                - "Save both numbers in every adult's phone"
                - "Copy your health service's knocked-out tooth advice onto one page"
                - "Pack gauze and a small lidded pot with the first aid kit"
                - "Check the numbers and the emergency sheet are still current @recurring(yearly)"
            - name: Choosing a toothbrush, toothpaste and interdental kit
              description: |-
                ## Purpose
                Walk down a dental aisle and there are forty brushes, a dozen pastes and interdental brushes in eight colour-coded sizes. Picking the right kit once, with your hygienist's view on brush type, fluoride strength and the interdental sizes that fit your gaps, stops you buying things that sit unused in the bathroom.

                ## Milestones
                1. Your hygienist or dentist asked what they recommend for your mouth.
                2. A decision made between a manual brush and a powered brush, with the reason noted.
                3. A toothpaste chosen with the fluoride level your dentist suggests for each age in the house.
                4. Interdental brush sizes or floss type matched to your gaps and written down for reordering.

                ## Notes
                Start from the **Purchase decision** template. A powered brush with a pressure sensor helps heavy brushers, but a manual brush used well for two minutes beats an expensive one used badly.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A brush type, toothpaste and interdental size chosen for each person, with the sizes written in the household dental record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your hygienist which brush and interdental sizes suit your mouth"
                - "Compare two powered brushes against a good manual brush on cost and features"
                - "Check the fluoride content on the toothpaste tubes you already have"
                - "Buy the chosen kit and note the interdental sizes for reordering"
            - name: Dental insurance, plan or pay-as-you-go decision
              description: |-
                ## Purpose
                Dental costs are lumpy: years of cheap check-ups, then a crown, a root canal and a course of hygienist visits in one season. Comparing a monthly practice plan, an insurance policy and simply paying as you go against your household's actual last three years of dental spending shows which one saves money and which one only feels safe.

                ## Milestones
                1. Three years of dental spending for the household added up from receipts or bank statements.
                2. The monthly cost, exclusions, waiting periods and annual limits of each option listed.
                3. Each option tested against your real spending and against a year with one large treatment.
                4. A choice made and recorded, with a date to review it.

                ## Notes
                Read the exclusions before the price. Many policies do not cover problems that existed before you joined, or cap orthodontic and implant cover.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between plan, insurance and pay-as-you-go, based on three years of real household dental spending."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add up the household's dental spending for the last three years"
                - "Get the terms of your practice's monthly plan and one insurance policy"
                - "List each option's exclusions, waiting periods and annual limits"
                - "Ask the agent to compare the options against your spending and summarise"
            - name: Getting the children registered and seen
              description: |-
                ## Purpose
                Children's teeth are easiest to protect when the dentist sees them early and often enough that the visit feels ordinary. Registering every child with the family practice, getting them their first or next check-up, and asking about preventive care for their age gives them a dental home before anything hurts.

                ## Milestones
                1. Every child registered with a dental practice.
                2. A check-up attended by each child in the last twelve months.
                3. Preventive options for their age, such as fluoride varnish or sealants, discussed with the dentist.
                4. Each child's recall interval written in the household dental record.

                ## Notes
                In many countries children's dental care is free or subsidised; ask the practice what applies to yours.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Each child is registered with a practice and has had a check-up within the last twelve months, recorded in the household dental record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check which children have not seen a dentist in the last twelve months"
                - "Book check-ups for the children back to back if the practice allows"
                - "Ask the dentist which preventive treatments are offered at each child's age"
                - "Write each child's recall interval in the dental record"
            - name: Twice-daily brushing routine
              description: |-
                ## Purpose
                Two minutes, twice a day, with a fluoride toothpaste is the single habit dentists most want, and most adults brush for well under that. Anchoring the routine to two fixed points in the day, usually last thing at night and one other time, and timing it until two minutes feels normal, does more for your teeth than any product.

                ## Milestones
                1. Two fixed brushing times chosen and tied to things you already do.
                2. A two-minute timer in use, on a powered brush, phone or egg timer.
                3. The habit tracked for four weeks with at least 90 per cent of sessions done.
                4. Spitting out after brushing rather than rinsing, if your dentist recommends it.

                ## Notes
                Start from the **Habit tracker** template. Night-time brushing matters most, because saliva flow drops during sleep.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Brushing for two minutes twice a day is logged for at least 90 per cent of sessions over four consecutive weeks."
                cadence: rolling
              tasks:
                - "Choose your two brushing times and the routines they follow"
                - "Set a two-minute timer for each brushing session"
                - "Set up a habit tracker for morning and night brushing"
                - "Brush for two minutes last thing at night and one other time @recurring(daily)"
            - name: Daily interdental cleaning habit
              description: |-
                ## Purpose
                A toothbrush cannot reach the surfaces between teeth, which is where much adult gum disease and decay starts. Cleaning those gaps once a day with interdental brushes or floss, at a time when you are not rushing, is the habit that most often moves gum scores at the next check-up.

                ## Milestones
                1. The interdental brush sizes or floss type your hygienist chose kept by the sink.
                2. A daily slot picked, usually before the night-time brush.
                3. Bleeding on cleaning noted, expecting it to settle within a couple of weeks of daily cleaning.
                4. Bleeding that persists after two weeks reported to your dentist or hygienist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Interdental cleaning done on at least six days a week for eight weeks, with any bleeding that persists reported to the practice."
                cadence: rolling
              tasks:
                - "Put your interdental brushes or floss next to the toothbrush"
                - "Pick the time of day you will clean between your teeth"
                - "Ask the hygienist to recheck your sizes at the next visit"
                - "Clean between every tooth with your interdental brushes or floss @recurring(daily)"
            - name: Recall check-up cycle for the household
              description: |-
                ## Purpose
                Recall intervals vary from three months to two years depending on each person's risk, so a family of four can have four different cycles. A monthly glance at the household record, booking anyone due in the next two months, keeps everybody on schedule without relying on reminder letters that go astray.

                ## Milestones
                1. Every household member's next check-up month known.
                2. Nobody more than a month overdue for their recall.
                3. Appointments grouped where possible to save trips.
                4. Missed or cancelled appointments rebooked within a fortnight.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over twelve months, every household member attends a check-up within one month of the recall date their dentist set."
                cadence: cyclic
              tasks:
                - "Mark each person's next recall month in the shared calendar"
                - "Ask the practice to send reminders by text as well as letter"
                - "Group children's appointments with a parent's where the practice can"
                - "Look at the household record and book anyone due in the next two months @recurring(monthly:9)"
            - name: Hygienist visits at your set interval
              description: |-
                ## Purpose
                Hygienists remove hardened tartar that no toothbrush can shift, measure your gums and coach your technique, but the right interval depends on your gums, not a standard six months. Agreeing your interval and keeping to it is what stops gingivitis quietly turning into bone loss.

                ## Milestones
                1. Your hygienist interval agreed with the dentist or hygienist and written down.
                2. The next hygienist visit booked before leaving each appointment.
                3. Your gum or bleeding score from each visit added to your record.
                4. One technique tip from each visit written down and tried.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Hygienist visits attended at the agreed interval for a full year, with each visit's gum or bleeding score recorded."
                cadence: cyclic
              tasks:
                - "Ask your dentist what hygienist interval suits your gums"
                - "Book the next hygienist visit before you leave each appointment"
                - "Write each visit's gum scores in your dental record"
                - "Confirm the next hygienist appointment is in the calendar @recurring(quarterly)"
            - name: Monthly mouth self-check
              description: |-
                ## Purpose
                Mouth cancers and other changes often first show as an ulcer that does not heal, a red or white patch, or a lump, and many are spotted by people checking their own mouth. A two-minute look in good light once a month, with anything lasting more than three weeks shown to a dentist or doctor, costs nothing.

                ## Milestones
                1. Your health service's guide to checking your mouth read once.
                2. A monthly routine covering lips, gums, tongue, cheeks and the floor and roof of the mouth.
                3. Any change noted with the date it was first seen.
                4. Anything lasting more than three weeks shown to your dentist or doctor.

                ## Notes
                Tobacco and alcohol both raise the risk. Your dentist checks the soft tissues at every examination too, so keep those visits going.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly mouth self-check done for six months, with any lasting change dated and shown to a clinician."
                cadence: rolling
              tasks:
                - "Read your health service's guide to checking your own mouth"
                - "Do a first full check with a torch and a mirror"
                - "Show any patch, lump or ulcer lasting over three weeks to a dentist or doctor @priority(high)"
                - "Check lips, gums, tongue and cheeks in good light @recurring(monthly:12)"
            - name: Brush heads, floss and paste restock
              description: |-
                ## Purpose
                Splayed bristles clean poorly, and a house that runs out of interdental brushes quietly stops using them. Replacing heads every three months, or sooner after an illness, and reordering supplies before they run out removes the most common excuse for skipping.

                ## Milestones
                1. A list of every brush head, interdental size, floss and paste the household uses.
                2. A spare supply of each stored in one place.
                3. Brush heads replaced on a fixed three-month rhythm.
                4. A reorder set up, by subscription or a monthly shopping list.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No one in the household runs out of brush heads, interdental brushes or toothpaste for six months, and heads are changed every three months."
                cadence: rolling
              tasks:
                - "List the exact brush heads, interdental sizes and paste each person uses"
                - "Store a spare of each in one bathroom drawer"
                - "Replace every toothbrush or brush head in the house @recurring(quarterly)"
                - "Check the spares drawer and reorder anything running low @recurring(monthly:23)"
            - name: Snack and drink timing for fewer acid attacks
              description: |-
                ## Purpose
                How often sugar reaches your teeth matters as much as how much: each sugary snack or drink sets off an acid attack on the enamel that lasts a while afterwards. Moving sweet things to mealtimes and keeping to water or plain milk between meals cuts the number of attacks without banning anything.

                ## Milestones
                1. One ordinary week of snacks and drinks between meals noted.
                2. The three most frequent sugar or acid hits outside mealtimes identified.
                3. Those hits moved to mealtimes or swapped for water, plain milk or a non-sugary snack.
                4. Sipped drinks such as juice, sweetened coffee or sports drinks kept to mealtimes.

                ## Notes
                This is about teeth, not weight. Your dentist can say whether your pattern of decay points to frequency. Some sugar-free drinks are still acidic, so they are not a free pass.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The number of sugary or acidic snacks and drinks between meals is counted weekly and kept at or below the limit you set."
                cadence: rolling
              tasks:
                - "Note every snack and drink between meals for one ordinary week"
                - "Pick the three most frequent sugary or acidic between-meal hits"
                - "Swap or move each of the three to a mealtime"
                - "Count the week's between-meal sugar hits and compare with your limit @recurring(weekly:sun)"
            - name: Gum bleeding and sensitivity log
              description: |-
                ## Purpose
                Bleeding gums, a sensitive tooth or a sore spot are easy to forget by the time the check-up comes round, and vague answers lead to vague advice. A short log of what you noticed, which tooth, and when, lets the dentist look in the right place.

                ## Milestones
                1. A log with columns for date, area of the mouth, symptom and trigger.
                2. Gum scores from each check-up and hygienist visit added.
                3. The log read before every appointment.
                4. Patterns, such as one tooth sensitive to cold for weeks, raised with the dentist.

                ## Notes
                Start from the **Metrics log** template. Toothache that wakes you, swelling or a bad taste needs an appointment now, not a log entry.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A symptom log covering at least three months is taken to the next check-up and its main pattern discussed with the dentist."
                cadence: rolling
              tasks:
                - "Create a log for gum bleeding, sensitivity and sore spots"
                - "Add your latest gum scores from the practice"
                - "Read the log the day before each dental appointment"
                - "Note any bleeding, sensitivity or sore spots from the past month @recurring(monthly:16)"
            - name: Yearly dental budget and claims
              description: |-
                ## Purpose
                Treatment costs arrive with little warning, and insurance claims often lapse because the receipt was lost. Setting a yearly dental figure for the household, putting a little aside each month and submitting claims every quarter means a crown is an inconvenience rather than a crisis.

                ## Milestones
                1. Last year's dental spending totalled for each person.
                2. A yearly dental budget set for the household.
                3. A place for receipts and treatment estimates set up.
                4. Every claim from the year submitted and the reimbursement recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly dental budget is set each year and every eligible receipt is claimed within three months of the treatment."
                cadence: cyclic
              tasks:
                - "Total last year's dental spending for each person"
                - "Set a yearly dental budget and a monthly amount to put aside"
                - "Create a folder for dental receipts and estimates"
                - "Submit outstanding dental receipts to your insurer or plan @recurring(quarterly)"
                - "Set next year's dental budget from this year's spending @recurring(yearly)"
            - name: Retainer and mouthguard cleaning routine
              description: |-
                ## Purpose
                Retainers, night guards and sports mouthguards collect plaque, crack and slowly stop fitting, and a retainer that is not worn lets teeth drift within months of braces coming off. A simple routine for cleaning, storing and checking each appliance protects the money already spent on it.

                ## Milestones
                1. Every appliance in the house listed with its owner, age and maker.
                2. A cleaning method agreed with the dentist or orthodontist for each one.
                3. A hard case for every appliance, kept away from pets and heat.
                4. Cracks or a loose fit reported to the practice that made it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every retainer and guard in the house has a case, is cleaned as the practice advised and has been checked for fit in the last month."
                cadence: rolling
              tasks:
                - "List each retainer, night guard and mouthguard with its owner and age"
                - "Ask the orthodontist or dentist how each appliance should be cleaned"
                - "Soak or deep-clean every appliance as the practice advised @recurring(weekly:sat)"
                - "Check every appliance for cracks and a loose fit @recurring(monthly:20)"
            - name: Brushing and interdental technique coaching
              description: |-
                ## Purpose
                Plenty of people brush every day and still have bleeding gums, because they miss the same areas every time. One coaching session with a hygienist, using disclosing tablets to show where plaque is left, then a month of practising the corrected technique, fixes habits formed in childhood.

                ## Milestones
                1. A hygienist session booked with a request to focus on technique.
                2. Disclosing tablets used to show where plaque is left after normal brushing.
                3. The brush angle, order around the mouth and interdental method demonstrated and noted.
                4. A repeat disclosing test after four weeks showing less stained plaque.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A repeat disclosing tablet test four weeks after a coaching session shows fewer stained areas than the first, recorded with photos."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask for the next hygienist appointment to focus on brushing technique"
                - "Buy disclosing tablets and do a test after your normal brush"
                - "Write down the order and angle the hygienist demonstrates"
                - "Repeat the disclosing test after four weeks and compare photos"
            - name: Reading your dental chart and treatment plan
              description: |-
                ## Purpose
                Treatment plans arrive full of tooth numbers, surface codes and terms like onlay, pulpotomy or root surface debridement. Learning how your practice numbers teeth and what the common terms mean lets you check the plan, ask sharp questions and follow it with your own mirror.

                ## Milestones
                1. The tooth numbering system your practice uses understood, with a printed chart.
                2. A copy of your current dental chart requested from the practice.
                3. Every term in your latest treatment plan written out in plain words.
                4. Any item you still do not understand asked about at the next appointment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language version of your current dental chart and treatment plan exists, with every term explained."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the practice which tooth numbering system they use"
                - "Request a copy of your dental chart and latest treatment plan"
                - "Ask the agent to explain each term on the plan in plain words"
                - "List the items to ask about at your next appointment"
            - name: Fluoride choices for every age in the house
              description: |-
                ## Purpose
                Fluoride strengthens enamel, but the right amount differs for a toddler, a teenager and an adult at high risk of decay, and advice varies between countries. Checking what your dentist and health service recommend for each person, then matching the paste and habits to it, avoids both too little and too much.

                ## Milestones
                1. Your health service's fluoride guidance for each age group found.
                2. The fluoride level on each household toothpaste checked against it.
                3. The amount of paste for young children confirmed with the dentist.
                4. The dentist asked whether anyone at higher risk would benefit from varnish or a prescription paste.

                ## Notes
                Whether your tap water is fluoridated affects the advice; your water supplier or health service can tell you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each person's toothpaste matches the fluoride guidance their dentist confirmed, recorded in the household dental record."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look up your health service's fluoride toothpaste guidance by age"
                - "Check the fluoride level printed on each toothpaste in the house"
                - "Ask your water supplier whether your water is fluoridated"
                - "Ask the dentist whether anyone needs varnish or a prescription paste"
            - name: Tooth wear and acid erosion basics
              description: |-
                ## Purpose
                Enamel lost to acid, grinding or overbrushing does not grow back, and wear often shows first as sensitivity, shorter front teeth or thin edges you can see light through. Understanding the three kinds of wear and which one you have lets you change the right habit before fillings or crowns are needed.

                ## Milestones
                1. The difference between erosion, attrition and abrasion understood.
                2. Your dentist asked which kind of wear, if any, they see in your mouth.
                3. Photos of your front teeth taken as a baseline.
                4. One habit changed to match the cause, such as brushing pressure or acidic drink timing.

                ## Notes
                Frequent heartburn or vomiting can wear teeth from the inside; mention it to your doctor as well as your dentist.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your dentist has named the type of tooth wear present, baseline photos are saved, and one matching habit change is in place."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read about the difference between erosion, attrition and abrasion"
                - "Photograph your front teeth in good light as a baseline"
                - "Ask your dentist which type of wear they see and how fast it is going"
                - "Change one habit that matches the cause your dentist named"
            - name: Dry mouth causes and what to ask
              description: |-
                ## Purpose
                Saliva is the mouth's own defence, and when it dries up decay can move fast, especially along the gum line. Hundreds of common medicines cause dry mouth, as do some conditions and breathing through the mouth at night. Knowing the likely causes means you can ask your pharmacist, doctor and dentist the right questions.

                ## Milestones
                1. Your symptoms written down: when the mouth is dry and how it affects eating, speaking and sleep.
                2. Your medicine list checked with a pharmacist for ones known to cause dry mouth.
                3. Your dentist told, and asked about extra protection against decay.
                4. Any change to medicines discussed only with the prescriber.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Dry mouth symptoms are recorded, your medicines have been reviewed by a pharmacist for this side effect, and your dentist has been told."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Note when your mouth feels dry and what it affects"
                - "Ask your pharmacist which of your medicines can cause dry mouth"
                - "Tell your dentist and ask about extra protection against decay"
                - "Book a prescriber review if the pharmacist suggests one"
            - name: Questions to ask before any dental treatment
              description: |-
                ## Purpose
                Agreeing to treatment in the chair, numb and reclined, is a poor time to weigh options. A standard set of questions about the reason, the alternatives including doing nothing, the risks, the cost, the expected lifespan and what happens if it fails turns every proposal into an informed choice.

                ## Milestones
                1. A one-page question list saved on your phone.
                2. The list used at the next treatment discussion, with answers written down.
                3. Written estimates requested for anything over a set cost.
                4. A personal rule recorded for when to ask for time to think or a second opinion.

                ## Notes
                Start from the **Meeting notes** template for each treatment discussion.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A question list exists and has been used at a treatment discussion, with the dentist's answers saved in meeting notes."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write your treatment question list and save it on your phone"
                - "Set the cost above which you will always ask for a written estimate"
                - "Take notes on the answers at the next treatment discussion"
                - "Decide in writing when you will ask for time or a second opinion"
            - name: Cleaning around crowns, bridges and implants
              description: |-
                ## Purpose
                Crowns, bridges and implants do not decay the way natural teeth do, but the gum and bone around them can still fail, and the space under a bridge traps food a toothbrush never reaches. Learning the specific tools, such as floss threaders, thick floss or small interdental brushes, keeps expensive work in the mouth for longer.

                ## Milestones
                1. Every crown, bridge and implant in your mouth listed with its position and date.
                2. The cleaning tool for each one demonstrated by your hygienist.
                3. The tools bought and added to your daily routine.
                4. Bleeding or soreness around any of them reported at the next visit.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each crown, bridge and implant has a named cleaning method shown by your hygienist and in daily use for four weeks."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List each crown, bridge and implant with its position and approximate date"
                - "Ask your hygienist to show you how to clean under and around each one"
                - "Buy the threaders, floss or brushes they recommend"
                - "Add the extra cleaning to your night-time routine"
            - name: Filling material choice for a new filling
              description: |-
                ## Purpose
                When a filling is needed, the options usually include amalgam, tooth-coloured composite, glass ionomer and, for larger repairs, an inlay or onlay, each with different costs, lifespans and suitability for front or back teeth. Rules on amalgam also differ between countries and for children and pregnant women. Asking for the options before the appointment makes the choice yours.

                ## Milestones
                1. The dentist asked which materials are suitable for this tooth.
                2. Cost, expected lifespan and appearance of each option written side by side.
                3. Any rules or recommendations that apply to you checked with the dentist.
                4. A material chosen and recorded in your dental record.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A filling material chosen after comparing at least two suitable options on cost and lifespan, recorded in your dental record."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the dentist which filling materials suit this tooth"
                - "Write the cost and expected lifespan of each option side by side"
                - "Ask whether any material rules apply to you"
                - "Record the chosen material and the tooth in your dental record"
            - name: Root canal treatment or extraction decision
              description: |-
                ## Purpose
                Faced with a badly infected or broken tooth, the choice is often between saving it with root canal treatment and a crown, or removing it and deciding later whether to fill the gap. The cheaper option today is not always cheaper over ten years. Setting the full costs, the dentist's view of the tooth's prospects and the consequences of a gap side by side makes this a decision rather than a reaction to pain.

                ## Milestones
                1. The dentist's view on whether the tooth can be saved, and how predictably, written down.
                2. The total cost of saving it, including any crown, set against the cost of removal and later replacement.
                3. Referral to a root canal specialist considered for difficult teeth.
                4. A decision made and the appointment booked.

                ## Notes
                Pain relief and antibiotics are decisions for the dentist. If swelling spreads or you struggle to swallow or breathe, use the emergency plan rather than waiting.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on saving or removing the tooth, based on a ten-year cost comparison and the dentist's view of the tooth's prospects."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the dentist how predictable saving this tooth would be"
                - "Get written costs for root canal with a crown and for extraction"
                - "Ask what replacing the tooth later would cost and involve"
                - "Ask whether a specialist referral would change the odds"
                - "Book the treatment you chose"
            - name: Replacing a missing tooth with an implant, bridge or denture
              description: |-
                ## Purpose
                A gap left alone can let neighbouring teeth tip and the opposing tooth drift, though for some back teeth leaving it is a reasonable choice. Implants, bridges and partial dentures differ widely in cost, treatment time, effect on neighbouring teeth and upkeep. Comparing them for your specific gap, with the dentist's view on bone and gum health, avoids paying for the wrong one.

                ## Milestones
                1. The dentist's view on whether leaving the gap is acceptable written down.
                2. Implant, bridge and denture options compared on cost, time, durability and upkeep.
                3. Any bone, gum or medical issues that rule options out identified.
                4. A choice made with a written plan and estimate.

                ## Notes
                Start from the **Purchase decision** template. Ask how many implants the clinician places each year and who maintains them afterwards.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A replacement option chosen for the gap, with a written plan and estimate, after comparing at least three options including leaving it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the dentist whether leaving this gap is a reasonable option"
                - "Get written estimates for an implant, a bridge and a partial denture"
                - "List the upkeep and expected lifespan of each option"
                - "Choose an option and ask for the full written treatment plan"
            - name: Second opinion on a large treatment plan
              description: |-
                ## Purpose
                Plans running to several crowns, implants or cosmetic work can cost as much as a car, and dentists genuinely differ in how much they would do. Getting one independent opinion on a plan of that size is normal practice and rarely offends a good dentist.

                ## Milestones
                1. Copies of X-rays, charts and the written plan requested from your practice.
                2. A second dentist or specialist chosen who will not be paid to do the work.
                3. Both opinions written side by side, item by item.
                4. A final plan agreed with the dentist you choose.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two written opinions on the same treatment plan compared item by item, with the final plan and chosen dentist recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your practice for copies of your X-rays and written treatment plan"
                - "Find a second dentist or specialist for an independent opinion"
                - "Write both opinions side by side for each tooth"
                - "Agree the final plan and record which dentist will carry it out"
            - name: Night grinding assessment and guard decision
              description: |-
                ## Purpose
                Waking with a sore jaw, a partner hearing grinding, or flattened and chipped teeth can all point to night-time clenching or grinding. Your dentist can check for wear and discuss whether a hard or soft night guard, or another approach, suits you, before cracked teeth make the decision for you.

                ## Milestones
                1. Two weeks of morning jaw symptoms noted.
                2. Your dentist asked to check for grinding wear and cracked teeth.
                3. Guard options, costs and remake intervals compared.
                4. A decision made, with a guard fitted if chosen.

                ## Notes
                Loud snoring or pauses in breathing at night are a matter for your doctor, not only the dentist.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dentist's assessment of grinding recorded, and a decision on a night guard made, with a fitted guard in use if chosen."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Note jaw ache, headaches or tooth soreness each morning for two weeks"
                - "Ask your partner whether they hear grinding at night"
                - "Ask the dentist to check for grinding wear and cracks"
                - "Compare the cost and lifespan of the guards offered"
            - name: Teeth whitening the safe way
              description: |-
                ## Purpose
                Whitening done by or under a dentist uses regulated products after checking for decay and gum problems, while some kits and salon treatments use products that can burn gums or are not legal where you live. Knowing which fillings and crowns will not change colour, how long results last and what it costs keeps a cosmetic choice from becoming a repair job.

                ## Milestones
                1. Your dentist's view on whether your teeth are suitable for whitening.
                2. Fillings, crowns and veneers that will not whiten noted.
                3. Dentist-supervised and other options compared on cost, safety and regulation in your country.
                4. A decision made, including the option of not whitening.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A whitening decision made after a dental check, with fillings and crowns that will not change colour identified beforehand."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your dentist whether your teeth suit whitening"
                - "List the fillings and crowns at the front that will not whiten"
                - "Check your country's rules on who may provide whitening"
                - "Decide whether to whiten and record the cost and method"
            - name: Adult orthodontics with aligners or fixed braces
              description: |-
                ## Purpose
                Adults straighten teeth for crowding, bite problems or appearance, and the choice between clear aligners and fixed braces depends on the movement needed, not the advertising. Treatment sold without an in-person examination can move teeth on unhealthy gums. A proper assessment sets out what is possible, the time, the cost and the lifelong retainer commitment.

                ## Milestones
                1. A consultation with an orthodontist or trained dentist, including an in-person examination.
                2. Aligners and fixed braces compared for your case on time, cost and expected result.
                3. The retainer plan after treatment, and its cost, written down.
                4. A decision made to go ahead or not.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on adult orthodontic treatment made after an in-person assessment, with treatment time, total cost and retainer plan written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book a consultation with an orthodontist or a dentist trained in orthodontics"
                - "Ask whether aligners or fixed braces suit the movements you need"
                - "Ask what retainers you will need afterwards and what they cost"
                - "Record the decision and the total cost"
            - name: Getting to the bottom of persistent bad breath
              description: |-
                ## Purpose
                Most lasting bad breath starts in the mouth, from the coating on the back of the tongue, gum disease or food trapped under old dental work. Working through the mouth causes first, with your dentist's help, and only then asking a doctor about other causes, solves it faster than mouthwash.

                ## Milestones
                1. Someone you trust asked for an honest view on when the breath is worst.
                2. Tongue cleaning added to the nightly routine for two weeks.
                3. Your dentist asked to check for gum disease, decay and trapped food.
                4. Your doctor consulted if mouth causes are ruled out.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Mouth causes checked by your dentist and a tongue-cleaning routine kept for two weeks, with the result recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask someone you trust when your breath seems worst"
                - "Buy a tongue scraper and use it each night for two weeks"
                - "Ask the dentist to check for gum disease and trapped food"
                - "Book a doctor's appointment if the dentist finds no mouth cause"
            - name: Implant or bridge savings plan
              description: |-
                ## Purpose
                Implants and bridges are rarely urgent but often expensive, and paying through a finance plan can add a large share to the price. Saving towards a known estimate over six to eighteen months, with the treatment booked for when the money is there, keeps it affordable and leaves time for a second opinion.

                ## Milestones
                1. A written estimate for the treatment in hand.
                2. A monthly saving amount set to reach it by a chosen date.
                3. A separate savings pot opened and funded.
                4. Treatment booked once the target is reached.

                ## Notes
                Start from the **Savings goal** template. Ask the dentist whether the gap needs a temporary fix while you save.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A savings pot reaches the written treatment estimate and the treatment is booked."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Get a written estimate for the implant or bridge"
                - "Work out the monthly amount needed to reach it by your target date"
                - "Open a separate savings pot and set up a monthly transfer"
                - "Ask whether the gap needs a temporary fix while you save"
            - name: Child's first dental visit
              description: |-
                ## Purpose
                Dental associations in many countries suggest a first visit by the first birthday or when the first teeth come through, mostly so the child gets used to the chair and the parent gets advice. Choosing a calm time of day, letting the child watch a parent's check-up first and keeping the visit positive sets up decades of easy appointments.

                ## Milestones
                1. A first visit booked at a time when the child is usually rested.
                2. The child taken along to watch a parent's or sibling's check-up beforehand.
                3. Questions about brushing, fluoride, feeding and dummies written down and asked.
                4. The date and any advice entered in the household dental record.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A child's first dental visit attended, with the dentist's advice and next recall date written in the household record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book the first visit for a time your child is usually rested"
                - "Take your child to watch a parent's check-up first"
                - "Write down questions about brushing, fluoride, feeding and dummies"
                - "Record the visit and the dentist's advice in the dental record"
            - name: Wisdom tooth removal and recovery
              description: |-
                ## Purpose
                Wisdom tooth removal ranges from a quick extraction in the chair to surgery under sedation or general anaesthetic, with several days of swelling. Planning time off, soft food, someone to take you home and the aftercare instructions before the day makes recovery smoother and complications easier to spot.

                ## Milestones
                1. The reason for removal, the type of procedure and the risks explained by the surgeon and noted.
                2. Time off work or study and a lift home arranged.
                3. Soft foods and anything the surgeon advised bought in advance.
                4. The aftercare sheet read, with the signs that need a call back to the practice highlighted.
                5. A follow-up appointment attended if one was offered.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Wisdom tooth removal completed with time off, transport and aftercare arranged beforehand and any follow-up attended."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the surgeon why removal is advised and what the risks are"
                - "Book time off and arrange a lift home on the day"
                - "Buy soft foods for the first few days"
                - "Highlight the warning signs on the aftercare sheet"
            - name: Dental check before major medical treatment
              description: |-
                ## Purpose
                Before some treatments, such as heart valve surgery, joint replacement, chemotherapy, head and neck radiotherapy or certain bone medicines, doctors may want any dental infection dealt with first, because problems found afterwards can be harder to treat. Asking the medical team early whether a dental check is needed gives time to fit it in.

                ## Milestones
                1. The medical team asked whether a dental check is needed before treatment.
                2. A dental examination booked, with the dentist told about the planned treatment.
                3. Any urgent dental work completed or a written plan agreed.
                4. A letter or note from the dentist passed to the medical team if requested.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before major medical treatment starts, a dental check is completed and the dentist's findings are passed to the medical team where they asked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your medical team whether you need a dental check before treatment"
                - "Book a dental examination and explain the planned treatment"
                - "Complete any urgent dental work the dentist advises"
                - "Send the dentist's note to the medical team if requested"
            - name: Braces fitting day and the first month
              description: |-
                ## Purpose
                The first week of fixed braces brings sore teeth, rubbing brackets and a cleaning routine that takes three times as long. Preparing orthodontic wax, soft food, the right brushes and a plan for school or work means the first month goes well and the brackets survive it.

                ## Milestones
                1. Orthodontic wax, interdental brushes and a single-tufted brush bought before the fitting.
                2. Foods the orthodontist says to avoid listed and shared with the household.
                3. A morning and night cleaning routine set up for braces.
                4. The orthodontist's number saved for broken brackets or a poking wire.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Braces fitted with a cleaning kit, food list and orthodontist contact ready, and the first month completed without a broken bracket left unreported."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Buy orthodontic wax, interdental brushes and a single-tufted brush"
                - "List the foods the orthodontist says to avoid"
                - "Set up a braces cleaning routine for morning and night"
                - "Save the orthodontist's number for broken brackets or wires"
            - name: Dental check before a long trip or move abroad
              description: |-
                ## Purpose
                Toothache abroad means unfamiliar clinics, language barriers and costs your travel insurance may not cover. Getting a check-up six to eight weeks before a long trip, gap year or move overseas leaves time to finish any treatment, and a small dental kit covers a lost filling until you are home.

                ## Milestones
                1. A check-up attended at least six weeks before departure.
                2. Any treatment finished before travel.
                3. Your travel insurance's dental cover and limits checked.
                4. A travel dental kit with temporary filling material packed.

                ## Notes
                If you are moving abroad, ask for copies of your X-rays and chart to give your new dentist.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A check-up and any treatment completed before departure, with dental insurance cover confirmed and a travel kit packed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a dental check-up at least six weeks before you travel"
                - "Check what dental emergencies your travel insurance covers"
                - "Ask for copies of your X-rays if you are moving abroad"
                - "Pack temporary filling material and spare interdental brushes"
            - name: Teething and baby gum care
              description: |-
                ## Purpose
                From the first tooth, babies need their teeth cleaned twice a day, and teething brings months of sore gums and broken sleep. Knowing what your health service advises for teething relief, which products to avoid and how to clean tiny teeth sets habits before the child can object.

                ## Milestones
                1. Your health service's teething advice read, including products it advises against.
                2. A baby toothbrush and the toothpaste amount your dentist recommends ready.
                3. Twice-daily cleaning started from the first tooth.
                4. Bedtime bottles of milk or juice discussed with your health visitor or dentist.

                ## Notes
                Some teething gels and remedies are not recommended for babies. Check with a pharmacist before using any.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Twice-daily cleaning started from the first tooth, using the toothpaste amount your dentist or health service recommends."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's advice on teething and baby teeth"
                - "Buy a baby toothbrush and check the toothpaste amount for babies"
                - "Ask a pharmacist before using any teething gel or remedy"
                - "Clean the first teeth twice a day as part of bath and bedtime"
            - name: Fissure sealants and fluoride varnish for children
              description: |-
                ## Purpose
                The grooves on children's back teeth are where much childhood decay starts, and a thin protective coating or regular fluoride varnish can reduce the risk. Whether either is offered, at what age and at what cost varies by practice and country, so asking at the next check-up makes sure the option is considered rather than missed.

                ## Milestones
                1. The dentist asked whether sealants or fluoride varnish suit each child.
                2. The cost, frequency and any eligibility for free care noted.
                3. Treatments booked for children where recommended.
                4. Sealants checked at each later check-up and the result written in the record.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each child's suitability for sealants and fluoride varnish discussed with the dentist, with any recommended treatment completed and recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask the dentist whether each child would benefit from sealants or varnish"
                - "Find out the cost and whether the children qualify for free care"
                - "Book the treatments the dentist recommends"
                - "Write the treatment dates in the household dental record"
            - name: Teenager with braces and a sports mouthguard
              description: |-
                ## Purpose
                Teenagers with braces have to clean around brackets on their own, keep orthodontic appointments around school and sport, and protect their teeth on the pitch. A plan agreed with them rather than imposed, with a fitted mouthguard for contact sports, keeps treatment on time and front teeth intact.

                ## Milestones
                1. Orthodontic appointments added to the family calendar for the year.
                2. A cleaning routine the teenager agreed to, with the kit kept in their own bathroom space.
                3. A mouthguard suitable for braces fitted for each contact sport.
                4. A plan for broken brackets and lost retainers agreed, including who pays.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A year of orthodontic appointments is in the family calendar and the teenager has a braces-suitable mouthguard for every contact sport."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add the year's orthodontic appointments to the family calendar"
                - "Agree a braces cleaning routine with your teenager"
                - "Ask the orthodontist about a mouthguard that works with braces"
                - "Agree who pays for lost retainers or broken brackets"
                - "Ask your teenager about loose brackets or sore spots @recurring(monthly:5)"
            - name: Dental care during pregnancy
              description: |-
                ## Purpose
                Pregnancy hormones often make gums swell and bleed, and morning sickness brings acid into contact with the teeth. In many countries dental care is free or reduced during pregnancy and for a year afterwards. Planning a check-up and a few gentle habit changes protects your teeth at a time when attention is elsewhere.

                ## Milestones
                1. Your dental practice told you are pregnant, with your due date.
                2. A check-up and hygienist visit attended during pregnancy.
                3. A routine for after vomiting agreed with your dentist.
                4. Any entitlement to free or reduced care checked and claimed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A dental check-up attended during pregnancy and any free care entitlement claimed, with the dates in the household record."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Tell your dental practice you are pregnant and your due date"
                - "Check whether you are entitled to free or reduced dental care"
                - "Book a check-up and a hygienist visit during the pregnancy"
                - "Ask your dentist what to do after morning sickness"
            - name: Helping an older relative with dentures and mouth care
              description: |-
                ## Purpose
                Older parents often stop seeing a dentist once they have dentures, yet ill-fitting dentures cause sores, poor eating and weight loss, and the mouth still needs checking. Helping a relative with denture cleaning, regular checks and access to a dentist, including home visits where offered, keeps eating comfortable and problems found early.

                ## Milestones
                1. Your relative's dental practice, last visit and denture age found out.
                2. A denture cleaning and overnight routine agreed with them.
                3. A check-up booked, or a home visiting dental service found if they cannot travel.
                4. Sore spots, a loose fit or difficulty eating reported to the dentist.

                ## Notes
                Ask your relative what help they want before taking over. Label dentures with their name if they move into care or go into hospital.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Your relative has had a dental or denture check in the last year and a cleaning routine they agreed to is in place."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your relative when they last saw a dentist and how their dentures feel"
                - "Find a practice or home visiting dental service that can see them"
                - "Agree a denture cleaning routine with them"
                - "Ask about sore spots, fit and eating when you visit @recurring(monthly:14)"
            - name: A plan for nervous dental patients
              description: |-
                ## Purpose
                Fear of the dentist is common and is one of the main reasons people let problems grow until they hurt. Telling the practice in advance, agreeing a stop signal, booking short first appointments and asking what sedation or support they offer makes going possible. Some practices make anxious patients a speciality.

                ## Milestones
                1. What specifically worries you written down: needles, sounds, gagging, cost or a past experience.
                2. A practice that welcomes nervous patients found and told before the first visit.
                3. A stop signal and a short first appointment agreed.
                4. Sedation or other options the practice offers discussed, with costs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A practice has been told about your anxiety, a stop signal is agreed and at least one appointment has been attended."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down exactly what worries you about dental visits"
                - "Ask practices whether they offer extra support for nervous patients"
                - "Agree a stop signal with the dentist before treatment starts"
                - "Ask what sedation or other options are available and what they cost"
            - name: Dental care on a tight budget
              description: |-
                ## Purpose
                When money is short, dental care is often the first thing dropped, and a skipped check-up today can become an extraction later. Low-cost routes exist in many places, such as public dental services, dental school clinics, charities and payment plans. Finding the ones near you means the basics keep going.

                ## Milestones
                1. Public, subsidised or charity dental services near you listed.
                2. Your eligibility for free or reduced care checked.
                3. Dental school or teaching clinic options checked, with their waiting times.
                4. A plan for the household's essential care this year written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of low-cost dental options near you, with eligibility checked, and a written plan for the household's essential care this year."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check whether anyone in the household qualifies for free or reduced dental care"
                - "List public, charity and dental school clinics within reach"
                - "Ask your practice whether it offers payment plans"
                - "Rank the household's dental needs by urgency with the dentist's help"
            - name: Periodontitis treatment and maintenance programme
              description: |-
                ## Purpose
                Gum disease that has reached the bone, periodontitis, needs a course of deep cleaning, a re-evaluation of pocket depths and then lifelong maintenance, often every three months. Following the programme exactly, with your own pocket charts compared over time, is how teeth that might have been lost are kept.

                ## Milestones
                1. Your diagnosis, and its stage and grade if given, written in your record with the first pocket chart.
                2. The active treatment course completed.
                3. A re-evaluation attended and the new pocket depths compared with the first chart.
                4. A maintenance interval agreed and the next appointments booked.
                5. Referral to a periodontist discussed if pockets do not respond.

                ## Notes
                Smoking and poorly controlled diabetes both affect how gums respond; tell your dentist about either.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Active periodontal treatment and re-evaluation completed, with pocket charts compared and maintenance visits attended at the agreed interval."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask for a copy of your full pocket chart and diagnosis"
                - "Book the full course of deep cleaning appointments"
                - "Compare the re-evaluation chart with the first one, tooth by tooth"
                - "Check the next maintenance visit is booked at the agreed interval @recurring(quarterly)"
            - name: Jaw joint pain and clicking pathway
              description: |-
                ## Purpose
                Jaw joint pain, clicking, locking or limited opening, often called TMD, usually settles with simple measures, but persistent cases need a proper assessment by a dentist and sometimes a specialist or physiotherapist. Keeping a symptom record and following an agreed plan in stages avoids irreversible treatments that are not needed.

                ## Milestones
                1. Symptoms, triggers and how wide you can open recorded for two weeks.
                2. An assessment by your dentist with the findings written down.
                3. First-line measures your dentist recommends tried for the agreed period.
                4. A referral to a specialist or physiotherapist discussed if symptoms persist.

                ## Notes
                Be cautious about treatments that permanently grind or move teeth for jaw pain without a specialist opinion.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-week symptom record taken to a dental assessment, the agreed first-line plan followed, and a referral decision recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Record jaw pain, clicking and how wide you can open for two weeks"
                - "Book a dental assessment and take the record with you"
                - "Follow the first-line measures your dentist suggests"
                - "Ask about a specialist or physiotherapy referral if nothing improves"
            - name: Long-term implant maintenance
              description: |-
                ## Purpose
                Implants can last decades, but the tissue around them can become inflamed and lose bone, often without pain. Knowing your implant's make and system, keeping the cleaning routine and having it checked and X-rayed at the intervals your dentist sets protects a large investment.

                ## Milestones
                1. Implant make, system, placement date and surgeon recorded.
                2. A home cleaning method for the implant shown by the hygienist and in use.
                3. Checks, including any X-rays, attended at the interval your dentist sets.
                4. Bleeding, looseness or a cracked crown reported straight away.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Implant details are recorded and the implant has been checked by a dentist or hygienist within the interval they set."
                cadence: cyclic
              tasks:
                - "Ask the surgeon for the implant make, system and placement date"
                - "Write the implant details in your dental record"
                - "Report bleeding or looseness around the implant straight away"
                - "Book the yearly implant check and any X-ray the dentist advises @recurring(yearly)"
            - name: Ten-year forecast for crowns, fillings and bridges
              description: |-
                ## Purpose
                Fillings, crowns and bridges have typical lifespans, so a mouth with a lot of dental work has a predictable stream of replacements coming. Listing every restoration with its age and the dentist's view of its condition turns surprise bills into a ten-year plan you can budget for.

                ## Milestones
                1. Every filling, crown, bridge and implant listed with its tooth and approximate age.
                2. The dentist asked which ones are showing wear and which are sound.
                3. A rough replacement year and cost range noted for each.
                4. The forecast linked to your yearly dental budget.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ten-year forecast lists every restoration with its age, condition and likely replacement year, and feeds the yearly dental budget."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every filling, crown and bridge with the tooth and approximate age"
                - "Ask the dentist to mark which restorations show wear"
                - "Ask the agent to turn the list into a ten-year replacement schedule"
                - "Update the forecast after the yearly check-up @recurring(yearly)"
---

# Dental & Oral Health

This area is for anyone who wants healthy teeth and gums for life, and for parents looking after a whole household's mouths. It starts with the foundations (a dentist you trust, a household record of recall dates, a medical history sheet, a baseline check-up and an emergency plan), then the routines that keep brushing, cleaning between teeth and visits on schedule, the skills that make home care work, the decisions about fillings, missing teeth, orthodontics and whitening, the dated events from a child's first visit to wisdom tooth removal, the life stages from teething to helping an older relative, and finally the specialist work of gum disease, jaw problems and long-term restoration planning.

What repeats is daily brushing and interdental cleaning, a weekly count of between-meal sugar, a monthly recall check and mouth self-check, quarterly brush head changes, hygienist bookings and insurance claims, and a yearly budget and emergency sheet refresh. The Vendor, Purchase decision, Habit tracker, Metrics log, Meeting notes and Savings goal templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
