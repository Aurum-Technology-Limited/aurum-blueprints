---
id: physical-health.stroke-rehabilitation
name: Stroke Rehabilitation
description: "A calm route through life after a stroke: discharge and therapy organised, home made safe, recovery measured, a second stroke guarded against, and carers supported too."
category: personal
version: 1.0.0
tags: [physical-health, stroke-rehabilitation, retiree, carer, aphasia, secondary-prevention, therapy, home-adaptations]
author: Aurum Technology
starter_structure:
  templates:
    - habit-tracker
    - metrics-log
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Stroke Rehabilitation
          description: "Regaining movement, speech and independence after a stroke with therapy schedules, home adaptations, secondary prevention and support for the whole household."
          projects:
            - name: Hospital discharge day plan after a stroke
              description: |-
                ## Purpose
                Discharge from a stroke unit often comes with a day or two of notice, and the first night home is when missing equipment, unclear medicines and an unprepared bedroom cause the most stress. A short plan agreed with the ward team before the date means the person comes home to a ready house, a full bag of medicines and a first therapy visit already booked.

                ## Milestones
                1. A discharge date confirmed with the ward, with the time and transport agreed.
                2. Equipment the occupational therapist asked for delivered and set up before arrival.
                3. Discharge medicines collected with a written list of what each one is for.
                4. The first visit from the community or early supported discharge team booked.
                5. A downstairs or ground-floor sleeping arrangement ready if stairs are not yet safe.

                ## Notes
                Ask the ward who will phone you if the date moves. Discharge times slip, so plan for an afternoon arrival even if a morning is promised.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The person is home with the agreed equipment in place, a written medicine list in hand and a first community therapy visit booked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the ward for the expected discharge date and who will confirm it"
                - "Check with the occupational therapist which equipment must be in place first"
                - "Arrange transport home and someone to be there on the first night"
                - "Ask the ward pharmacist to go through the discharge medicines with you"
                - "Confirm the date of the first community therapy visit"
            - name: Stroke care file with the discharge summary
              description: |-
                ## Purpose
                After a stroke, letters arrive from the stroke unit, the community team, the GP, the eye clinic and sometimes a cardiologist, and nobody holds the whole picture except the household. One file, paper or digital, with the discharge summary at the front saves repeating the story to every new professional and catches results that would otherwise go unread.

                ## Milestones
                1. The hospital discharge summary obtained and placed at the front of the file.
                2. Sections set up for therapy letters, test results, medicines and appointments.
                3. Every letter received so far filed in date order.
                4. A one-page summary written: date of stroke, type, main effects and current medicines.
                5. The file kept somewhere both the survivor and main carer can reach.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A care file exists with the discharge summary, every letter received in date order and a current one-page summary at the front."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the stroke unit or GP surgery for a copy of the discharge summary"
                - "Set up file sections for letters, results, medicines and appointments"
                - "File every letter received so far in date order"
                - "Ask the agent to draft a one-page summary from the discharge letter"
                - "Update the one-page summary with new letters and medicine changes @recurring(quarterly)"
            - name: Questions for the stroke team about cause and type
              description: |-
                ## Purpose
                Whether a stroke was caused by a clot or a bleed, and what caused that, decides almost everything about prevention, from which medicines are used to whether a heart rhythm test or a neck artery scan is needed. Many families leave hospital unsure of the answer. A written list of questions taken to the consultant or stroke nurse turns that uncertainty into a clear record.

                ## Milestones
                1. The stroke type (ischaemic, haemorrhagic or transient) written down in the team's words.
                2. The suspected cause recorded, or a note that it is still being investigated.
                3. Any outstanding tests listed, such as a heart rhythm monitor, echocardiogram or carotid scan.
                4. Who will chase each outstanding result and when, written beside it.

                ## Notes
                If the cause is still unknown, that is common. Ask what further tests are planned rather than assuming the search has finished.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written record of the stroke type, the suspected cause and every outstanding test with an owner, kept in the care file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the discharge summary and underline anything about stroke type or cause"
                - "Write five questions about cause, tests and prevention"
                - "Ask the stroke nurse or consultant the questions by phone or at clinic"
                - "Record each answer and outstanding test in the care file"
            - name: Household plan for recognising another stroke
              description: |-
                ## Purpose
                The risk of a second stroke is highest in the weeks and months after the first, and treatment only works if help is called fast. Every adult in the house, and regular visitors, should know the face, arm, speech and time check, and that new symptoms mean an emergency call even if they fade within minutes.

                ## Milestones
                1. Everyone in the household able to describe the face, arm, speech and time warning signs.
                2. A printed card by the phone with the signs and the emergency number.
                3. The time the person was last seen well understood as the key fact to give paramedics.
                4. A copy of the medicine list and one-page summary kept by the door for an ambulance crew.
                5. The plan rehearsed once with everyone present.

                ## Notes
                A brief episode that resolves on its own (a transient ischaemic attack) still needs urgent medical assessment the same day.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A warning signs card is by the phone, a medicine list is by the door and every household adult can state what to do and when."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Print a stroke warning signs card and put it by the phone"
                - "Talk the whole household through what to do and why timing matters"
                - "Put a copy of the medicine list and summary in an envelope by the door"
                - "Rehearse the plan with the household and refresh the envelope @recurring(yearly)"
            - name: Community stroke rehab team contact sheet
              description: |-
                ## Purpose
                In the first months home, a household may deal with a physiotherapist, occupational therapist, speech and language therapist, stroke nurse, GP and social worker, each with different hours and phone numbers. A single contact sheet that says who does what and who to ring first on a bad day stops calls going to the wrong person.

                ## Milestones
                1. Every professional involved listed with role, phone number and working days.
                2. The single first point of contact for problems identified and marked.
                3. Out-of-hours numbers added for urgent but non-emergency problems.
                4. The sheet stuck inside the care file and a photo saved on the carer's phone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One contact sheet lists every professional's role, number and working days, with the first point of contact clearly marked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every professional who has visited or written so far"
                - "Ask the community team who your first point of contact is"
                - "Add out-of-hours and weekend numbers to the sheet"
                - "Save a photo of the sheet on the main carer's phone"
            - name: First fortnight home safety and falls check
              description: |-
                ## Purpose
                Falls are one of the most common setbacks after a stroke, especially with weakness on one side, poor balance or neglect of one side of space. Walking the route from bed to bathroom to kitchen with fresh eyes, ideally with the occupational therapist, removes the rugs, clutter and dark corners that cause most of them.

                ## Milestones
                1. The night-time route from bed to toilet walked and lit with plug-in lights.
                2. Loose rugs, trailing cables and clutter removed from main walkways.
                3. Frequently used items moved to the side and height the person can reach safely.
                4. A plan agreed for getting up after a fall or calling for help if alone.
                5. Any equipment the occupational therapist recommends ordered.

                ## Notes
                Furniture is often best placed so the person approaches from their stronger side. Ask the occupational therapist before rearranging rooms.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The bed to toilet route is lit and clear, everyday items are within safe reach and a fall plan is written down."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Walk the route from bed to toilet at night and note every hazard"
                - "Remove loose rugs and trailing cables from the main walkways"
                - "Fit plug-in night lights along the bedroom and bathroom route"
                - "Ask the occupational therapist to check the layout on their next visit"
            - name: Ability baseline in the first weeks home
              description: |-
                ## Purpose
                Progress after a stroke is slow enough that it is hard to see from day to day, which can be demoralising. Writing down what the person can and cannot do in the first weeks home, from walking distance to buttoning a shirt to saying a phone number, gives a fixed point to look back on at three, six and twelve months.

                ## Milestones
                1. Walking, transfers, arm and hand use, speech, swallowing and memory each described in a sentence.
                2. Any scores the therapists have measured copied into the record.
                3. A short video of walking and of using the affected hand recorded, with consent.
                4. The baseline dated and kept in the care file.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated baseline covering six areas of function, with therapist scores and a short video, is stored in the care file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one sentence each on walking, arm use, speech, swallowing and memory"
                - "Ask the therapists which scores they have recorded so far"
                - "Record a short video of walking across a room, with permission"
                - "Date the baseline and file it behind the discharge summary"
            - name: Rehabilitation goals agreed with the therapists
              description: |-
                ## Purpose
                Stroke rehab works best when it aims at things the person actually wants to do again, such as making a cup of tea, walking to the post box or reading to a grandchild. Agreeing three to five specific goals with the therapy team keeps sessions pointed at real life rather than generic exercises.

                ## Milestones
                1. A list of everyday activities the person most wants back, in their own words.
                2. Three to five goals agreed with the therapists, each with a target date.
                3. Each goal broken into a first small step that can be practised this week.
                4. The goals written where the household and visiting therapists can see them.

                ## Notes
                Goals belong to the survivor. Carers can help put them into words, especially with aphasia, but should check they are the person's priorities and not their own.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three to five written rehab goals, each with a target date and a first step, agreed with the therapy team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the survivor which three everyday things they most want to do again"
                - "Bring the list to the next therapy session to agree goals"
                - "Write each goal with a target date and a first small step"
                - "Pin the goals somewhere visible in the house"
            - name: Secondary prevention medicine routine
              description: |-
                ## Purpose
                Most people leave hospital after a stroke on several new medicines aimed at preventing another one, often for clotting, blood pressure and cholesterol. Missed doses are common when fatigue, memory problems or a weak hand make blister packs hard. A fixed daily time, a pill organiser that suits one-handed use and a reorder date make the routine reliable.

                ## Milestones
                1. Every prevention medicine listed with what it is for, as explained by the pharmacist.
                2. A fixed daily time chosen and linked to an existing routine such as breakfast.
                3. A pill organiser or pharmacy-filled pack that the survivor can open with one hand.
                4. A reorder date set a week before supplies run out.

                ## Notes
                Never stop or change a blood-thinning medicine without speaking to the prescriber, even for a dental or minor procedure. Ask what to do in advance.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Prevention medicines are taken at a fixed daily time from an organiser the survivor can open, with no gap in supply for three months."
                cadence: rolling
              tasks:
                - "Ask the pharmacist to explain what each new medicine is for"
                - "Try a pill organiser or pharmacy pack that opens with one hand"
                - "Take the prevention medicines at the agreed time @recurring(daily)"
                - "Count remaining tablets and reorder a week before they run out @recurring(monthly:8)"
            - name: Driving licence rules and the stop period
              description: |-
                ## Purpose
                Most licensing authorities require people to stop driving for a period after a stroke or transient ischaemic attack, and some must notify the authority, especially with lasting weakness, visual field loss or seizures. Driving against the rules can void insurance. Finding out the exact rule that applies and recording the decision protects the survivor and anyone they drive with.

                ## Milestones
                1. The licensing authority's rules for stroke found for your country and licence type.
                2. The doctor asked whether the survivor is fit to drive and whether to notify the authority.
                3. The authority and the insurer notified if required, with copies kept.
                4. An earliest possible return date, or the conditions for return, written down.
                5. Other ways to get about arranged in the meantime.

                ## Notes
                Rules differ for car and goods vehicle licences, and visual field loss can stop driving even when movement has recovered.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The rule that applies is recorded, any required notifications are sent with copies kept, and a written return condition exists."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up your licensing authority's guidance on driving after a stroke"
                - "Ask the doctor directly whether to stop driving and for how long"
                - "Notify the licensing authority and insurer if the guidance requires it"
                - "Write down the earliest return date or conditions in the care file"
            - name: Daily home exercise programme from the physiotherapist
              description: |-
                ## Purpose
                Therapy sessions are short and infrequent, and most of the repetitions that drive recovery happen at home between them. Turning the physiotherapist's sheet into a fixed daily slot, with a simple tick for each set, is the single habit that most often separates steady progress from a plateau.

                ## Milestones
                1. The current exercise sheet from the physiotherapist pinned up, with photos if possible.
                2. A daily time slot chosen when energy is usually best.
                3. A tick chart in use for every set completed.
                4. The sheet updated after each physiotherapy session.

                ## Notes
                Start from the **Habit tracker** template. Stop and tell the physiotherapist about any new pain, dizziness or chest symptoms rather than pushing through.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The home exercises are ticked off on at least five days a week for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Ask the physiotherapist for photos or a video of each exercise"
                - "Choose a daily slot when energy is usually highest"
                - "Do the home exercise programme and tick each set @recurring(daily)"
                - "Review the tick chart and note what felt easier this week @recurring(weekly:fri)"
            - name: Weekly therapy timetable for physio, OT and speech
              description: |-
                ## Purpose
                Physiotherapy, occupational therapy and speech therapy visits often arrive at different times each week, alongside clinic appointments and transport bookings. A weekly timetable made every Sunday evening prevents double bookings, protects rest days and lets carers plan work and shopping around it.

                ## Milestones
                1. One shared calendar for all therapy and clinic appointments.
                2. Each therapist's usual visit pattern noted.
                3. At least one appointment-free day protected each week for rest.
                4. Transport for any clinic visits booked in advance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared calendar shows every therapy and clinic appointment for the coming week, with one rest day kept clear, every week for three months."
                cadence: rolling
              tasks:
                - "Set up one shared calendar for the survivor and main carer"
                - "Enter every known therapy and clinic appointment"
                - "Plan the coming week's therapy, transport and rest day @recurring(weekly:sun)"
                - "Ask each therapist which day suits them best for regular visits"
            - name: Aphasia speech practice routine
              description: |-
                ## Purpose
                Aphasia, a difficulty with speaking, understanding, reading or writing, often keeps improving for years with regular practice. Short daily sessions using the exercises the speech and language therapist sets, a practice app or conversation with a patient partner, add up far faster than a long weekly session.

                ## Milestones
                1. The speech and language therapist's current exercises written down or bookmarked.
                2. A daily fifteen to twenty minute practice slot chosen.
                3. One practice partner briefed on how to help without finishing sentences.
                4. Progress notes kept for the therapist's next visit.

                ## Notes
                Practice should feel effortful but not distressing. If sessions end in frustration, ask the therapist to adjust the level.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Speech practice happens on at least five days a week for two months, with notes shared at each therapy visit."
                cadence: rolling
              tasks:
                - "Ask the speech and language therapist for this month's practice exercises"
                - "Pick a quiet daily slot with no television or radio on"
                - "Do fifteen minutes of speech practice with a partner or app @recurring(daily)"
                - "Write a short note of what went well for the next therapy session"
            - name: Monthly recovery measures log
              description: |-
                ## Purpose
                Simple repeatable measures such as how far the person walks before resting, how long a short walk takes, how many blocks they can move with the affected hand, or how many words they find in a minute show gains that daily life hides. Recording the same few measures on the same day each month, in the way the therapists suggest, gives encouragement and useful evidence at reviews.

                ## Milestones
                1. Three to five measures chosen with the therapists, with exactly how to take them.
                2. A first set of measures recorded against the baseline.
                3. Measures repeated on the same date each month under the same conditions.
                4. A simple chart showing the trend for each measure.

                ## Notes
                Start from the **Metrics log** template. Only test walking or balance in the way the physiotherapist has shown you, with someone standing by.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Six consecutive months of the agreed measures recorded on the same date, with a trend chart for each."
                cadence: rolling
              tasks:
                - "Agree three to five measures with the therapists and how to take them"
                - "Record the first set of measures alongside the baseline"
                - "Take and record the monthly recovery measures @recurring(monthly:12)"
                - "Bring the trend chart to the next review"
            - name: Risk factor checks to prevent a second stroke
              description: |-
                ## Purpose
                Blood pressure, cholesterol, heart rhythm, blood glucose, smoking and alcohol together account for most of the risk of another stroke. Rather than relying on someone else to remember, a quarterly look at the latest numbers and a yearly blood test keep the prevention plan current and give the GP accurate information to act on.

                ## Milestones
                1. Targets for blood pressure and cholesterol agreed with the clinician and written down.
                2. A record of the latest readings and results for each risk factor.
                3. A quarterly check where readings are compared with targets.
                4. Any reading outside target raised with the practice within two weeks.

                ## Notes
                Blood pressure in detail has its own area. Here the point is seeing every stroke risk factor on one page.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page risk factor record is updated every quarter, and any result outside target is raised with the practice within two weeks."
                cadence: rolling
              tasks:
                - "Ask the GP for the targets that apply after this stroke"
                - "Write the latest result for each risk factor on one page"
                - "Compare the latest readings with the targets and update the page @recurring(quarterly)"
                - "Book the annual stroke prevention blood tests @recurring(yearly)"
            - name: Post-stroke fatigue pacing plan
              description: |-
                ## Purpose
                Fatigue after a stroke is different from ordinary tiredness: it can arrive suddenly, is not always fixed by sleep and affects most survivors at some point. Planning each week so heavy tasks, therapy and visits are spread out, with rests booked before exhaustion rather than after, lets the person do more over a month than pushing through on good days.

                ## Milestones
                1. Two weeks of an energy diary showing when fatigue is worst and what triggers it.
                2. Activities sorted into high, medium and low energy.
                3. A weekly plan with no more than one high-energy activity a day and rests scheduled.
                4. Fatigue raised with the GP or stroke team if it is not easing after three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written weekly pacing plan is in use for eight weeks, with planned rests on every day."
                cadence: rolling
              tasks:
                - "Keep a simple energy diary rating fatigue three times a day for two weeks"
                - "Sort regular activities into high, medium and low energy"
                - "Plan the week with rests booked before high-energy tasks @recurring(weekly:mon)"
                - "Ask the stroke team whether any medicine or sleep problem adds to the fatigue"
            - name: Monthly mood and emotional changes check
              description: |-
                ## Purpose
                Around a third of stroke survivors experience depression, and anxiety, irritability and sudden crying or laughing (emotionalism) are also common. They are effects of the stroke and of the life change, not weakness, and they respond to treatment. A short monthly check-in, using a simple mood scale, makes changes visible early enough to ask for help.

                ## Milestones
                1. A simple mood rating chosen that the survivor can use, including with aphasia.
                2. A monthly check-in held at a calm time, not after a hard day.
                3. Warning signs agreed that would mean contacting the GP sooner.
                4. Mood raised at each review, with any support offered written down.

                ## Notes
                If the survivor talks about not wanting to live or harming themselves, contact the GP the same day or emergency services if they are at immediate risk.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A mood rating is recorded every month for six months, and any agreed warning sign is acted on with a GP contact."
                cadence: rolling
              tasks:
                - "Choose a simple mood scale, such as faces from sad to happy"
                - "Agree which warning signs mean calling the GP sooner"
                - "Hold the monthly mood check-in and record the rating @recurring(monthly:20)"
                - "Write down the support offered at each review"
            - name: Safe swallowing and mealtime routine
              description: |-
                ## Purpose
                Swallowing problems after a stroke raise the risk of choking and chest infections, and the speech and language therapist may prescribe softer textures, thickened drinks or a particular posture. A written mealtime routine that every carer and visitor follows keeps the advice consistent, especially when family take turns to help.

                ## Milestones
                1. The current food texture and drink consistency written down exactly as prescribed.
                2. Posture, pace and mouth-care advice listed on a mealtime card.
                3. Everyone who helps at meals shown the card.
                4. Signs of swallowing trouble, such as coughing or a wet voice, known by all carers.
                5. A review date with the speech and language therapist booked.

                ## Notes
                Only change textures or drink thickness on the therapist's advice, even if the person asks for their usual food.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A mealtime card with the prescribed textures and posture is on display, and every regular helper has been shown it."
                cadence: rolling
              tasks:
                - "Ask the speech and language therapist to write down the prescribed textures"
                - "Make a mealtime card with textures, posture and warning signs"
                - "Show the card to everyone who helps with meals"
                - "Book a swallowing review with the speech and language therapist"
            - name: Affected arm and shoulder care routine
              description: |-
                ## Purpose
                A weak arm after a stroke can lead to a painful shoulder, swelling in the hand and stiffness if it is pulled during transfers or left hanging. Positioning advice from the therapists, followed every day by everyone who helps, protects the joint while movement returns.

                ## Milestones
                1. Positioning advice for sitting, lying and transfers written down by the therapist.
                2. A support for the arm in sitting, such as a pillow or lap tray, in place.
                3. All helpers shown never to pull on the affected arm.
                4. A weekly check of the hand and shoulder for swelling, colour change or new pain.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written positioning advice is followed by every helper, with a weekly check of the affected arm recorded for three months."
                cadence: rolling
              tasks:
                - "Ask the physiotherapist to write down how to position the affected arm"
                - "Set up an arm support for the chair the person uses most"
                - "Show every helper how to assist transfers without pulling the arm"
                - "Check the hand and shoulder for swelling or new pain @recurring(weekly:wed)"
            - name: Carer respite and break rota
              description: |-
                ## Purpose
                Carers of stroke survivors often give up their own breaks within weeks, and exhaustion is one of the main reasons home care arrangements break down. A rota of family, friends, day centres or paid sitters that guarantees the main carer regular time off is part of the rehab plan, not a luxury.

                ## Milestones
                1. A list of people and services who could give a few hours of cover.
                2. A regular weekly break of at least half a day agreed.
                3. A longer break of a weekend or more planned for each quarter.
                4. A back-up plan written for when the main carer is ill.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The main carer has a protected weekly break for three months and a written back-up plan for their own illness."
                cadence: rolling
              tasks:
                - "List everyone who has offered to help and what they could do"
                - "Ask the social worker or local carers' service about respite options"
                - "Book next month's cover for the main carer's breaks @recurring(monthly:5)"
                - "Write a back-up plan for when the main carer is unwell"
            - name: How a stroke affects the brain and recovery
              description: |-
                ## Purpose
                Families are often told recovery is fastest in the first three to six months and then assume it stops, which is not true for many people. Understanding which part of the brain was affected, why that explains the symptoms, and how the brain relearns through repetition helps everyone set realistic expectations and keep going.

                ## Milestones
                1. The area of the brain affected identified from the discharge summary or the team.
                2. The link between that area and the main symptoms understood.
                3. The basics of how repetition drives recovery explained in your own words.
                4. Two reliable sources from a stroke charity or health service saved for later reading.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written half-page explanation of which brain area was affected and how recovery works, checked with a member of the stroke team."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the stroke team which part of the brain was affected"
                - "Read a stroke charity's guide to the effects of stroke"
                - "Write a half-page explanation in your own words"
                - "Check your explanation with the stroke nurse at the next contact"
            - name: Communication strategies for living with aphasia
              description: |-
                ## Purpose
                Aphasia affects language, not intelligence, yet conversations often collapse into the survivor being talked over or spoken for. Learning a handful of supported conversation techniques, such as short questions, writing key words, gesture and giving time, changes daily life for the whole household.

                ## Milestones
                1. Household members trained in supported conversation by the therapist or a charity course.
                2. A communication book or board with key words, photos and names made.
                3. A small card made that the survivor can show to explain aphasia to strangers.
                4. Visitors briefed on what helps and what to avoid.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every household member has learned supported conversation techniques and a communication book and aphasia card are in daily use."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the speech and language therapist to teach the household key techniques"
                - "Make a communication book with photos of people, places and needs"
                - "Print a small card that says the survivor has aphasia and how to help"
                - "Brief regular visitors on giving time and not finishing sentences"
            - name: Safe transfers taught by the occupational therapist
              description: |-
                ## Purpose
                Helping someone from bed to chair, on and off the toilet or in and out of a car is where carers most often hurt their backs and survivors most often fall. A hands-on lesson from the therapist, practised until it is routine, protects both people and builds the survivor's confidence to do more for themselves.

                ## Milestones
                1. Each regular transfer shown by the therapist in the home setting.
                2. The carer practising each transfer under supervision.
                3. Step-by-step notes or photos kept for each transfer.
                4. Any equipment needed, such as a transfer board or rail, in place.

                ## Notes
                Never lift a person who has fallen without guidance. Ask the therapist what to do if they cannot get up.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The main carer can perform each regular transfer as the therapist taught it, with written steps kept for other helpers."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the transfers that happen every day at home"
                - "Ask the occupational therapist to demonstrate each one at home"
                - "Practise each transfer while the therapist watches"
                - "Write step-by-step notes for other helpers to follow"
            - name: Walking aid technique and stairs practice
              description: |-
                ## Purpose
                Using a stick, quad stick or frame on the wrong side or at the wrong height undoes much of its benefit, and stairs need a particular sequence when one leg is weaker. Learning the technique properly, then practising it with the physiotherapist's permission, makes getting around the home and outside safer and less tiring.

                ## Milestones
                1. The walking aid adjusted to the correct height by the physiotherapist.
                2. The correct hand and stepping pattern learned and written down.
                3. The stairs sequence practised with supervision until it is consistent.
                4. Outdoor surfaces such as kerbs and slopes practised once indoor walking is safe.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The survivor uses the walking aid at the correct height and pattern, and climbs the home stairs safely in the sequence taught."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the physiotherapist to check the height of the walking aid"
                - "Write the stepping pattern and stairs sequence on a card"
                - "Practise the stairs with someone standing below"
                - "Agree with the physiotherapist when to start outdoor practice"
            - name: One-handed dressing and kitchen techniques
              description: |-
                ## Purpose
                When one hand works poorly, everyday tasks need a different method rather than more effort: dressing the weaker side first, using a spike board to butter bread or a kettle tipper to pour. Learning these techniques from the occupational therapist returns independence and dignity long before the hand recovers, if it does.

                ## Milestones
                1. One-handed dressing learned for tops, trousers, socks and shoes.
                2. Two simple kitchen tasks, such as making a hot drink and a sandwich, done safely.
                3. Small aids such as elastic laces, a non-slip mat or a kettle tipper tried.
                4. Clothes swapped for easier fastenings where helpful.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The survivor dresses independently and makes a hot drink safely using one-handed techniques shown by the occupational therapist."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the occupational therapist to show one-handed dressing at home"
                - "Practise dressing the weaker side first each morning for a week"
                - "Try a kettle tipper and non-slip mat for making a hot drink"
                - "Replace two items of clothing with easier fastenings"
            - name: Scanning strategies for visual field loss and neglect
              description: |-
                ## Purpose
                Some strokes take away part of the field of vision or cause neglect, where the person does not notice one side of space at all. Both make falls, missed food and bumped doorframes common. Scanning techniques taught by an orthoptist or therapist, and a few changes at home, train the eyes to cover the missing side.

                ## Milestones
                1. The type of visual problem confirmed by an eye specialist or orthoptist.
                2. A daily scanning exercise taught and practised.
                3. Home cues in place, such as a coloured strip at the left or right edge of the plate or page.
                4. Visitors encouraged to approach from the side the person notices less, if the therapist advises it.

                ## Notes
                Visual field loss can affect driving eligibility even when everything else has recovered. Mention it at the driving discussion.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The visual problem is formally assessed and a scanning exercise is practised daily for six weeks with home cues in place."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the GP or stroke team for an orthoptist or eye clinic assessment"
                - "Learn the scanning exercise and practise it for a week"
                - "Put a bright strip along the edge of the plate and reading material"
                - "Ask the therapist which side visitors should approach from"
            - name: Memory and attention strategies after a stroke
              description: |-
                ## Purpose
                Problems with memory, concentration and planning are among the hidden effects of stroke, and they often explain missed appointments or unfinished tasks that families mistake for carelessness. External aids such as a wall planner, phone alarms and one task at a time help more than trying to remember harder.

                ## Milestones
                1. The main thinking difficulties described with the help of the therapist or psychologist.
                2. A wall planner or whiteboard in the main room for the day's plan.
                3. Phone or speaker reminders set for medicines and appointments.
                4. One-thing-at-a-time habits agreed for conversations and tasks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A wall planner and reminder alarms are in daily use, and the household has agreed habits that reduce memory and attention lapses."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the stroke team whether a cognitive assessment has been done"
                - "Put a whiteboard in the main room for the day's plan"
                - "Set phone or speaker reminders for medicines and appointments"
                - "Agree to turn off background noise during important conversations"
            - name: Bathroom and stair adaptations with the OT
              description: |-
                ## Purpose
                Getting in and out of the bath or shower, using the toilet and managing stairs are the activities that most often decide whether someone can stay safely at home. An occupational therapy assessment identifies which rails, seats, raised toilet seats or stair rails will help, and in many places small adaptations are provided or funded.

                ## Milestones
                1. A home adaptations assessment requested from the occupational therapist or local authority.
                2. A written list of recommended equipment and adaptations.
                3. Funding routes checked for anything not provided free.
                4. Rails, seats and other equipment fitted and tested with the survivor.

                ## Notes
                Start from the **Purchase decision** template for anything you buy yourself. Fix rails into solid walls only; ask the installer to confirm.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every adaptation recommended by the occupational therapist is fitted and has been used safely by the survivor."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request a home adaptations assessment from the occupational therapist"
                - "Ask which items are provided free and which you must buy"
                - "Compare two suppliers for any equipment you buy yourself"
                - "Test each fitted item with the survivor while someone stands by"
            - name: Choosing a wheelchair or mobility scooter
              description: |-
                ## Purpose
                Some survivors walk indoors but need a wheelchair or scooter for longer distances, and the wrong one can be too heavy for a carer to lift into a car or too wide for the front door. Getting an assessment first and comparing a few options against the doorways, car boot and terrain you actually have avoids an expensive mistake.

                ## Milestones
                1. A wheelchair service or therapist assessment completed.
                2. Door widths, car boot size and local terrain measured and written down.
                3. Two or three options compared on weight, folding, comfort and cost.
                4. A trial of the preferred model before buying or accepting it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A wheelchair or scooter is chosen after an assessment and a trial, and fits the front door and the car boot."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the GP or therapist for a referral to the wheelchair service"
                - "Measure the front door, internal doors and car boot"
                - "Compare three models on weight, folding and comfort"
                - "Arrange a trial of the preferred model before deciding"
            - name: Arm and hand therapy options compared
              description: |-
                ## Purpose
                Recovery of a weak arm and hand often lags behind walking, and there are several approaches with different evidence, such as constraint-induced movement therapy, electrical stimulation, mirror therapy and task practice with a device. Asking the therapist which suit this person's level of movement, and what each would involve, turns a vague hope into a choice.

                ## Milestones
                1. The current level of arm and hand movement described by the therapist.
                2. Options suitable for that level listed, with what each involves in time and cost.
                3. Availability locally or through the health service checked.
                4. One approach chosen and started, or a reason recorded for waiting.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least three arm therapy options with a decision recorded and agreed with the therapist."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the therapist to describe the current level of arm and hand movement"
                - "List the arm therapy approaches the therapist says could suit"
                - "Check which are available locally and at what cost"
                - "Record the chosen approach and when it will start"
            - name: Private therapy top-up decision
              description: |-
                ## Purpose
                Health service stroke therapy is often time-limited, and some families consider paying for extra physiotherapy or speech therapy. It can help, but only with a registered therapist experienced in neurological rehab and a clear goal. Weighing cost, evidence and what the existing team thinks keeps the decision sound.

                ## Milestones
                1. The existing team asked how much therapy remains and whether more would help.
                2. Two or three registered neurological therapists found and their fees compared.
                3. A budget and a review point, such as after ten sessions, agreed.
                4. A decision recorded, with goals shared between private and health service therapists.

                ## Notes
                Check that any private therapist is registered with the relevant professional regulator and has specific stroke experience.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on private therapy, with registered providers compared, a budget set and a review point fixed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the current therapists how much more therapy is planned"
                - "Find two registered neurological therapists and compare their fees"
                - "Set a budget and a review point after a fixed number of sessions"
                - "Share any private therapy goals with the health service team"
            - name: Financial support and allowances after a stroke
              description: |-
                ## Purpose
                Household income often falls after a stroke while costs rise for travel, equipment and care, and many families do not realise they may be entitled to disability or carer allowances, reductions in local property tax, or travel concessions. A methodical check of what applies, with help from a stroke charity or advice service, is often worth a significant sum each year.

                ## Milestones
                1. An appointment with a benefits adviser or stroke charity adviser held.
                2. A list of support that may apply to the survivor and to the carer.
                3. Each claim submitted with copies of forms and evidence kept.
                4. Decisions and renewal dates recorded in the care file.

                ## Notes
                Claim forms for disability allowances reward detail about bad days. Ask the therapists for supporting letters.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every allowance identified by an adviser has been claimed, with copies, decisions and renewal dates kept in the care file."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Book an appointment with a benefits adviser or stroke charity helpline"
                - "List every allowance that may apply to the survivor and the carer"
                - "Ask the therapists for supporting letters for any claim"
                - "Submit each claim and keep copies of everything sent"
            - name: Ankle foot orthosis fitting and review
              description: |-
                ## Purpose
                Foot drop, where the toes catch because the ankle cannot lift, is common after a stroke and a major cause of trips. An ankle foot orthosis, from a simple off-the-shelf splint to a custom-made one, can make walking safer and less tiring when it is fitted properly and checked as needs change.

                ## Milestones
                1. Foot drop assessed by the physiotherapist and a referral made to orthotics if needed.
                2. An orthosis fitted, with written guidance on wearing time and skin checks.
                3. Shoes that fit over the orthosis found.
                4. A review booked to check fit and whether it is still needed.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An orthosis is fitted with written wearing guidance, suitable shoes are bought and a fit review is booked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the physiotherapist whether an ankle foot orthosis would help"
                - "Attend the orthotics appointment with the shoes usually worn"
                - "Buy one pair of shoes that fit over the orthosis"
                - "Check the skin under the orthosis and book a fit review @recurring(yearly)"
            - name: Spasticity clinic and treatment discussion
              description: |-
                ## Purpose
                Spasticity, a tightness in the muscles of the affected arm or leg, can develop weeks or months after a stroke and make hygiene, dressing and walking harder. Stretching, splints, medicines and targeted injections are all options, and a specialist clinic can say which suit. Preparing evidence of how it affects daily life gets more from the referral.

                ## Milestones
                1. Changes in stiffness, pain or posture noted over two weeks.
                2. A referral to a spasticity or neurological rehabilitation clinic requested.
                3. A list of daily tasks the stiffness affects taken to the appointment.
                4. The agreed treatment plan and follow-up recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A spasticity assessment has happened and the agreed treatment plan and follow-up date are in the care file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note which daily tasks the muscle stiffness makes harder"
                - "Ask the physiotherapist or GP about a spasticity clinic referral"
                - "Take short videos of the stiffness to the appointment"
                - "Record the treatment plan and follow-up date"
            - name: Assistive technology for phones, reading and writing
              description: |-
                ## Purpose
                Aphasia, a weak hand or poor vision can make phones, emails and post difficult, cutting people off from friends and paperwork. Voice assistants, large-button phones, text-to-speech, predictive keyboards and photo contacts can restore a surprising amount of independence when chosen to fit the person's specific difficulty.

                ## Milestones
                1. The main communication difficulties listed: speaking, reading, typing or vision.
                2. Two or three tools tried for each difficulty with the therapist's advice.
                3. The chosen tools set up, with photo contacts and large text where useful.
                4. The survivor able to make a call and read a message independently.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The survivor can independently phone a family member and read a message using tools chosen to match their difficulties."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the parts of phone and computer use that are now hard"
                - "Ask the speech or occupational therapist which tools they recommend"
                - "Set up photo contacts and large text on the survivor's phone"
                - "Try a voice assistant for calls and reminders for two weeks"
            - name: Six-week check after leaving hospital
              description: |-
                ## Purpose
                Many stroke services offer a check around six weeks after discharge, and it is the first chance to raise problems that only appear at home, such as falls, low mood, fatigue, continence or medicine side effects. Arriving with a written list and the latest measures makes a short appointment count.

                ## Milestones
                1. The appointment booked or confirmed with the GP or stroke service.
                2. A list of problems and questions written in order of importance.
                3. The medicine list and any home readings brought along.
                4. Agreed actions and referrals written down before leaving.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The six-week check has taken place with a written question list, and every agreed action is recorded in the care file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm whether a six-week check is booked and with whom"
                - "Write a list of problems and questions in order of importance"
                - "Take the medicine list and recent measures to the appointment"
                - "Write down every agreed action before leaving the room"
            - name: Six-month stroke review preparation
              description: |-
                ## Purpose
                A structured review around six months after a stroke is recommended in many health systems, covering physical recovery, mood, thinking, communication, secondary prevention, carer needs and return to activities. Families who prepare a summary of progress and remaining problems tend to come away with referrals rather than reassurance.

                ## Milestones
                1. The review booked, or requested if it has not been offered.
                2. Monthly measures, mood ratings and goal progress summarised on one page.
                3. Remaining problems and carer concerns listed.
                4. New referrals or changes from the review recorded and followed up.

                ## Notes
                If no six-month review is offered, ask the GP or stroke charity who provides it locally.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The six-month review is held with a one-page progress summary, and every referral it produces is chased within a month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the GP or stroke service when the six-month review will happen"
                - "Summarise measures, mood and goal progress on one page"
                - "List remaining problems for the survivor and for the carer"
                - "Chase every referral from the review within four weeks"
            - name: First stroke anniversary review
              description: |-
                ## Purpose
                The first anniversary of a stroke can be an emotional date and also a natural point to look back at the baseline, see how far things have come, and set goals for the second year. Marking it on purpose, with a review of progress and a small celebration, turns a hard date into a milestone.

                ## Milestones
                1. The first-week baseline set beside current abilities.
                2. A short list of the biggest gains and remaining challenges.
                3. Three goals for the second year agreed by the survivor.
                4. The anniversary marked in a way the survivor chooses.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-year comparison against the baseline and three second-year goals are written in the care file by the anniversary."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put the first-week baseline next to a fresh description of abilities"
                - "Ask the agent to draft a one-year progress summary from the measures log"
                - "Agree three goals for the coming year with the survivor"
                - "Plan how the survivor wants to mark the anniversary"
            - name: First outing to the shops or a cafe
              description: |-
                ## Purpose
                The first trip out after a stroke can feel daunting, with worries about toilets, steps, fatigue and people noticing. Choosing a quiet time, a familiar place with seating and accessible facilities, and a short time limit makes a good first experience likely and builds confidence for the next outing.

                ## Milestones
                1. A familiar, quiet venue chosen with seating, step-free access and an accessible toilet.
                2. Transport, walking aid and a plan for rests arranged.
                3. The outing completed within a set time limit.
                4. What went well and what to change written down for next time.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One planned outing to a shop or café has taken place, with notes on what to change for the next one."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the survivor where they would most like to go first"
                - "Check the venue's access and toilets by phone or online"
                - "Pick a quiet day and time and set a time limit"
                - "Write down what went well and what to change afterwards"
            - name: Formal driving assessment at a mobility centre
              description: |-
                ## Purpose
                Once a doctor agrees driving may be possible, a specialist driving assessment centre can test vision, reactions, thinking and physical control, and recommend adaptations such as a steering knob or left-foot accelerator. An independent assessment gives the survivor, the doctor and the insurer a clear answer.

                ## Milestones
                1. Medical agreement that an assessment is appropriate obtained.
                2. An assessment booked at an accredited driving assessment centre.
                3. The assessment completed with a written report.
                4. Recommended adaptations or lessons arranged, or alternatives to driving planned.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written driving assessment report is received and its recommendations are either acted on or replaced by an agreed transport plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the doctor whether a formal driving assessment is appropriate yet"
                - "Find an accredited driving assessment centre and book a date"
                - "Bring glasses, the medicine list and licence to the assessment"
                - "Arrange any recommended adaptations or lessons from the report"
            - name: First holiday after a stroke
              description: |-
                ## Purpose
                Going away for the first time is a big confidence step, but it needs more planning than before: accessible rooms, travel insurance that covers a recent stroke, enough medicines and a realistic daily pace. Starting with a short break close to home is often wiser than a long-haul trip in the first year.

                ## Milestones
                1. The doctor asked whether the planned trip and travel method are suitable.
                2. Travel insurance found that covers the stroke and declared conditions.
                3. Accessible accommodation booked and its facilities confirmed in writing.
                4. Medicines, the care summary and equipment packed with spares.

                ## Notes
                Declare the stroke and every condition on the insurance form. An undeclared stroke is a common reason claims are refused.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first holiday is taken with insurance that covers the stroke, accessible accommodation confirmed and medicines packed with spares."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the doctor whether flying or long journeys are suitable yet"
                - "Get travel insurance quotes that cover the declared stroke"
                - "Confirm the room's step-free access and shower in writing"
                - "Pack medicines with spare days and the one-page summary"
            - name: Becoming the main carer for a partner
              description: |-
                ## Purpose
                Partners who become the main carer overnight take on new tasks, from medicines to personal care, while still grieving the life they had planned together. Deciding deliberately what you will do, what others or services will do, and how to stay a partner rather than only a carer protects the relationship and the care arrangement.

                ## Milestones
                1. A list of every care task currently done, and who does it.
                2. Tasks the carer should not do alone identified and passed to services or family.
                3. Regular time together as a couple that is not about care scheduled.
                4. A conversation with the survivor about what help they want and what they would rather struggle with.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written split of care tasks between the partner, family and services is agreed, with weekly non-care time together in place."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down every care task done in a typical day"
                - "Mark the tasks you cannot keep doing safely or alone"
                - "Ask the social worker about home care for the marked tasks"
                - "Schedule one regular activity together that has nothing to do with care"
            - name: Carer's assessment and your own health
              description: |-
                ## Purpose
                Carers have a right to an assessment of their own needs in many countries, yet most never ask. Stroke carers often have their own health conditions, sleep poorly and miss their own appointments. Requesting an assessment and putting your own check-ups in the diary keeps the person doing most of the caring able to continue.

                ## Milestones
                1. A carer's assessment requested from the local authority or care service.
                2. The carer registered as a carer with their own GP practice.
                3. The carer's own overdue appointments and checks booked.
                4. Support offered by the assessment written down and taken up.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A carer's assessment has been completed, the carer is registered with their GP and their own overdue checks are booked."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Request a carer's assessment from the local authority or care service"
                - "Tell your own GP practice that you are now a carer"
                - "Book any of your own overdue health checks"
                - "Book your own yearly health check as a carer @recurring(yearly)"
            - name: Living alone after a stroke
              description: |-
                ## Purpose
                Many older stroke survivors live alone, and returning home means planning for the moments when nobody is there: a fall at night, a missed medicine or a second stroke. A personal alarm, a regular check-in rhythm with family or neighbours and a key safe make independence safer without giving it up.

                ## Milestones
                1. A personal alarm or fall detector chosen and tested.
                2. A key safe fitted so help can get in, with the code shared with trusted people.
                3. A check-in rhythm with family, friends or neighbours agreed.
                4. A written plan for who to call for different problems, kept by the phone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A tested personal alarm and key safe are in place and a regular check-in rhythm has run for a month without a missed call."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare two personal alarm or fall detector services"
                - "Fit a key safe and share the code with two trusted people"
                - "Agree regular check-in calls with family or a neighbour"
                - "Take the scheduled check-in call with family or a neighbour @recurring(weekly:tue,fri)"
            - name: Coordinating a parent's rehab from a distance
              description: |-
                ## Purpose
                Adult children living hours away often end up coordinating a parent's stroke recovery by phone, with no view of what happens between visits. Getting permission to speak to the team, a weekly call with the parent or the main local carer, and a shared appointments calendar lets you help effectively without being there.

                ## Milestones
                1. The parent's written consent for the team to share information with you.
                2. A weekly call with the parent or local carer at a fixed time.
                3. A shared calendar of appointments and therapy visits.
                4. Visits planned around reviews and key appointments where possible.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Written consent for information sharing is on file and a weekly coordination call has happened for two months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your parent to give the GP and stroke team consent to talk to you"
                - "Set up a shared calendar for appointments and therapy visits"
                - "Call your parent or the local carer to go over the week @recurring(weekly:thu)"
                - "Plan your next visit around a review or key appointment"
            - name: Phased return to work after a stroke
              description: |-
                ## Purpose
                Many people under retirement age want to work again after a stroke, but fatigue and hidden thinking problems can make a full-time return too soon go badly. A phased plan agreed with the employer, occupational health and the stroke team, with adjustments and review points, gives the best chance of lasting.

                ## Milestones
                1. The stroke team or GP's view on readiness and limitations obtained in writing.
                2. An occupational health assessment arranged through the employer.
                3. A phased plan agreed with hours, duties and adjustments listed.
                4. Review points set at four and eight weeks into the return.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written phased return plan with adjustments and two review dates is agreed with the employer before the first working day."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the GP or stroke team for a written view on returning to work"
                - "Request an occupational health assessment through your employer"
                - "Draft a phased plan with hours, duties and adjustments"
                - "Agree review meetings at four and eight weeks into the return"
            - name: Explaining a stroke to children and grandchildren
              description: |-
                ## Purpose
                Children notice when a grandparent or parent speaks differently, cannot lift them or gets upset easily, and they fill gaps with worries of their own. Honest, age-appropriate explanations, and ideas for things they can still do together, keep relationships close and give children a role.

                ## Milestones
                1. A simple explanation agreed by the adults for each age group.
                2. A children's book or charity resource about stroke found.
                3. Two or three activities the survivor and children can enjoy together listed.
                4. Children's questions answered and checked on again after a few weeks.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Each child in the family has had an age-appropriate explanation and at least one shared activity with the survivor has happened."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree with the parents what each child will be told"
                - "Find a children's resource about stroke from a stroke charity"
                - "List activities the survivor and children can still do together"
                - "Check back with the children after a few weeks for new questions"
            - name: Long-term rehab plan after formal therapy ends
              description: |-
                ## Purpose
                Health service therapy usually ends while there is still room to improve, and the gains can fade without a plan. Survivors who keep a written programme, join community exercise or stroke-specific classes and re-test themselves every few months often continue to improve for years.

                ## Milestones
                1. A written discharge exercise programme received from each therapist.
                2. A community exercise class, gym referral or stroke group joined.
                3. Monthly goals and quarterly re-tests of the agreed measures in place.
                4. A route back to the team agreed if function declines.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written long-term programme is followed with monthly goals for six months and quarterly re-tests showing measures held or improved."
                cadence: rolling
              tasks:
                - "Ask each therapist for a written programme before therapy ends"
                - "Find a community exercise class or stroke group nearby"
                - "Set one rehab goal for the coming month @recurring(monthly:26)"
                - "Re-test the agreed recovery measures and compare with last quarter @recurring(quarterly)"
            - name: Stroke research and clinical trial participation
              description: |-
                ## Purpose
                Stroke recovery research needs survivors at every stage, from early trials of new therapies to long-term surveys, and taking part can offer extra monitoring or access to new approaches. Knowing how to find trials, what to ask and how to say no keeps participation an informed choice.

                ## Milestones
                1. A trusted trials register or stroke charity research page found.
                2. Trials matching the survivor's stroke type, time since stroke and location listed.
                3. Questions about risks, time, travel and withdrawal asked before agreeing.
                4. A decision recorded and the stroke team told about any participation.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shortlist of relevant trials is reviewed against written questions and a recorded decision is shared with the stroke team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search a national trials register or stroke charity research page"
                - "Shortlist trials that match stroke type, timing and location"
                - "Ask the research team about risks, visits and withdrawing"
                - "Tell the stroke team about any trial you join"
            - name: Becoming a peer supporter for new stroke survivors
              description: |-
                ## Purpose
                Survivors and carers several years on often say that meeting someone further down the road was what helped most in the early months. Training as a volunteer with a stroke group or hospital visiting scheme turns hard-won experience into practical hope for others, and gives the volunteer purpose too.

                ## Milestones
                1. A stroke support group or volunteering scheme found and contacted.
                2. Any volunteer training and checks completed.
                3. Regular commitment agreed that fits energy levels.
                4. A reflection after three months on whether the role suits.

                ## Notes
                Volunteering with fatigue or aphasia is possible; tell the organiser what works for you rather than taking on what is expected.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Volunteer training is complete and at least three peer support sessions or group meetings have been given."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Contact a local stroke group about volunteering opportunities"
                - "Complete the volunteer training and any checks required"
                - "Attend the stroke group as a peer supporter @recurring(monthly:15)"
                - "Reflect after three months on whether to continue"
---

# Stroke Rehabilitation

This area is for anyone recovering from a stroke and for the partner, son, daughter or friend who has suddenly become part of the rehab team. It starts with the foundations (discharge day, a care file, the questions about cause, a plan for spotting another stroke, a safe home and agreed goals), then the routines that carry recovery from week to week, the skills the whole household needs, the decisions about equipment, therapy and money, the reviews and firsts worth preparing for, the situations that change the picture for carers and people living alone, and finally the long-term work of someone years into recovery.

What repeats is a daily exercise programme and speech practice, a fixed medicine time, a weekly therapy timetable and pacing plan, a monthly recovery measures check and mood check, quarterly risk factor checks, and regular breaks for the carer. The Habit tracker, Metrics log, Purchase decision and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
