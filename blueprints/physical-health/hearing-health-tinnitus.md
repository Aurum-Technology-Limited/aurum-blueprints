---
id: physical-health.hearing-health-tinnitus
name: Hearing Health & Tinnitus
description: "Hearing tests you understand, protection you actually wear, hearing aids chosen and cared for, and a calm, organised plan for tinnitus, for musicians, noisy jobs and anyone noticing a change."
category: personal
version: 1.0.0
tags: [physical-health, hearing-health-tinnitus, everyone, retiree, creative, tinnitus, hearing-aids, noise]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - habit-tracker
    - metrics-log
    - sleep-review
    - trip
    - meeting-notes
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Hearing Health & Tinnitus
          description: "Protecting hearing, arranging hearing tests, adjusting to hearing aids and managing tinnitus, for musicians, noisy workplaces and anyone noticing changes."
          projects:
            - name: Noting the hearing changes you have noticed
              description: |-
                ## Purpose
                Hearing usually fades so slowly that the people around you notice before you do: the TV creeping louder, missed words in a busy cafe, asking for repeats on the phone. A page of real examples, written before any test, tells the audiologist where to look and stops the appointment ending with a vague 'it seems fine'.

                ## Milestones
                1. At least five situations listed where speech or sounds were hard to follow, with place and background noise.
                2. Comments from two people you live or work with written down in their words.
                3. The ear that seems worse, when changes started and any ringing, dizziness, pain or discharge noted.
                4. A one-page summary saved and ready to take to a hearing test.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of hearing difficulties, with at least five dated examples and the worse ear noted, is saved for the hearing test."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down three situations this month where you struggled to follow speech"
                - "Ask two people you live or work with what they have noticed"
                - "Note which ear seems worse and roughly when it started"
                - "Turn the notes into a one-page summary for the hearing test"
            - name: First full hearing test and audiogram
              description: |-
                ## Purpose
                Online and phone hearing checks only screen; a full test in a sound-treated booth with a registered audiologist measures each ear at each pitch and usually includes speech recognition. That audiogram becomes the baseline every later test, hearing aid fitting and specialist decision is measured against.

                ## Milestones
                1. A free online or phone screen completed to see whether a full test is warranted.
                2. A full hearing test booked through your doctor or a registered audiologist.
                3. The test done, including speech-in-noise testing if the clinic offers it.
                4. A copy of the audiogram and the audiologist's recommendation saved in your health records.

                ## Notes
                Ask for a copy of the audiogram at the end of the appointment; some clinics will not send it unless asked. If the clinic also sells hearing aids, you can take the results away and decide later.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A full audiogram for both ears from a registered audiologist is saved, with the recommendation written beside it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Do a free online or phone hearing screen to see if a full test is needed"
                - "Ask your doctor or a registered audiologist how to book a full hearing test"
                - "Bring your hearing change notes and ear history to the test"
                - "Ask for a printed or emailed copy of your audiogram"
            - name: Reading your own audiogram
              description: |-
                ## Purpose
                An audiogram plots the quietest sound you can hear at each pitch, from low rumbles on the left to high whistles on the right, and most people are handed one without an explanation. Learning to read your own chart means you can follow what the audiologist says, spot change between tests and understand why some speech sounds vanish while others stay clear.

                ## Milestones
                1. The frequency axis in hertz and the loudness axis in decibels found on your chart.
                2. The symbols for the left and right ear identified on each line.
                3. The hearing level band for each ear written in plain words, such as mild or moderate.
                4. The speech sounds you are most likely to miss, such as s, f and th, listed from the high-pitch results.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written note explains your audiogram in plain words: the band for each ear and the speech sounds most likely to be missed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the frequency and loudness axes on your audiogram"
                - "Mark which line is the left ear and which is the right"
                - "Write the hearing level band for each ear in plain words"
                - "Ask the agent to explain any symbols or abbreviations you do not recognise"
            - name: Sudden hearing loss urgent action card
              description: |-
                ## Purpose
                Sudden hearing loss in one ear, over a few hours or up to three days, is treated as urgent by ear specialists because treatment is time sensitive, yet many people assume it is wax and wait a week. A card listing the signs your health service treats as urgent, and where to go, means the right call is made the same day.

                ## Milestones
                1. Your health service's guidance on sudden hearing loss and other urgent ear symptoms found.
                2. A card written with the signs, including tinnitus that pulses with your heartbeat and hearing loss after a head injury, and where to go.
                3. A photo of the card saved on your phone and a copy kept in your wallet.
                4. Everyone in your household told what the card says.

                ## Notes
                When asking to be seen, use the words 'sudden hearing loss' so the urgency is clear. This card organises your health service's advice; it does not replace it.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card of urgent ear signs, written from your health service's guidance with where to go, is on your phone and in your wallet."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's advice on sudden hearing loss"
                - "Write the warning signs and where to go on one card"
                - "Save a photo of the card on your phone"
                - "Tell your household what the card says and where it is kept"
            - name: Personal ear and noise exposure history
              description: |-
                ## Purpose
                Audiologists and ear specialists ask the same questions at every first visit: years of loud work or music, ear infections and operations, head injuries, relatives who lost hearing young, and medicines known to affect the ear. Writing the answers down once, while you can check with family, makes every appointment faster and the history more accurate.

                ## Milestones
                1. Noisy jobs, bands, hobbies and venues listed by decade with rough hours.
                2. Past ear infections, perforations, grommets, operations and head injuries noted.
                3. Family members with early hearing loss or tinnitus recorded.
                4. The history saved as one page next to your audiogram.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page ear history covering noise exposure, ear problems and family history is saved alongside your test results."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every noisy job, band, hobby or venue you spent regular time in"
                - "Note past ear infections, perforations, grommets or ear operations"
                - "Ask older relatives who in the family lost hearing early"
                - "Save the history as one page next to your audiogram"
            - name: Safe earwax care and removal plan
              description: |-
                ## Purpose
                Wax normally works its own way out, and cotton buds push it deeper until it blocks the canal or stops a hearing aid working. Having a clinician look, confirm whether wax is the problem and agree how it should be removed, by drops, microsuction or irrigation, ends years of guesswork and poking.

                ## Milestones
                1. Cotton buds and ear candles removed from the bathroom cupboard.
                2. Your ears looked at by a pharmacist, practice nurse or audiologist.
                3. A removal method agreed and where it is offered written down.
                4. A note of how quickly wax builds up again, for planning the next removal.

                ## Notes
                Tell the clinician first if you have had a perforated eardrum, ear surgery or grommets, because some methods are not suitable. Hearing aid and daily earplug users often build up wax faster.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A clinician has checked your ears and a removal method and provider are written in your health notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Bin the cotton buds and any ear candles in the house"
                - "Ask a pharmacist or practice nurse to look in your ears"
                - "Ask which removal method suits you and where it is offered"
                - "Note how many months it takes wax to build up again"
            - name: Tinnitus first appointment preparation
              description: |-
                ## Purpose
                Ringing, hissing or buzzing that has not gone away after a few weeks deserves one proper assessment, and the appointment is short. Arriving with a clear description of the sound, its effect on sleep and mood, and your questions means the doctor can check the ears, review medicines and decide on a hearing test or referral in one visit.

                ## Milestones
                1. The sound described: pitch, one ear or both, constant or pulsing, and when it started.
                2. Its effect on sleep, concentration and mood rated out of 10.
                3. An appointment booked with your doctor or audiologist.
                4. What was checked, the explanation given and any referral recorded.

                ## Notes
                Tinnitus that beats in time with your pulse, or is in one ear only, should be mentioned clearly at the start of the appointment because it is investigated differently.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A tinnitus assessment has taken place and the findings and next step are written in your health notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Describe your tinnitus in three lines: sound, side and when it started"
                - "Note whether it ever beats in time with your pulse"
                - "Book an appointment with your doctor about the tinnitus"
                - "Write down what the doctor checked and any referral made"
            - name: Choosing everyday hearing protection
              description: |-
                ## Purpose
                Foam plugs, reusable flanged plugs, filtered music plugs and earmuffs each suit a different kind of noise, and the one that is comfortable is the one that gets worn. Matching protection to the mower, the drill, the gig and the bedroom, and learning to fit it properly, is the cheapest hearing care there is.

                ## Milestones
                1. The noisy places and tools in a typical month listed with the protection each needs.
                2. Foam and reusable plugs tried and a snug fit achieved.
                3. Earmuffs chosen for power tools and filtered plugs for music.
                4. Spare sets bought for the bag, car and toolbox.

                ## Notes
                Start from the **Purchase decision** template. Fit matters more than the printed rating: a plug inserted halfway gives a fraction of its labelled protection.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Protection is chosen for each regular noisy activity, with at least two spare sets stored where they will be used."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the noisy places and tools you use in a typical month"
                - "Buy a mixed trial pack of foam and reusable plugs"
                - "Practise rolling and inserting foam plugs until the seal is snug"
                - "Choose earmuffs for power tools and filtered plugs for music"
            - name: One-week noise exposure audit
              description: |-
                ## Purpose
                Most people underestimate how loud their week is: the train, a spin class, a hair dryer, the bar on Friday. Measuring each with a phone sound meter for one week shows which two or three exposures do the damage, so protection and changes go where they count.

                ## Milestones
                1. A sound level meter app installed and checked against a known quiet room.
                2. Readings taken in at least ten places across the week.
                3. Time spent above 85 decibels listed for each place.
                4. The three biggest exposures chosen, each with a planned change.

                ## Notes
                Phone meters are approximate. They are good for finding the loud places, not for exact figures.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A week of noise readings from at least ten places is recorded, with the three biggest exposures and a change for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Install a sound level meter app on your phone"
                - "Measure your commute, gym, kitchen and favourite venue"
                - "Note how long you spend in each place louder than 85 decibels"
                - "Pick the three exposures you will cut or protect against"
            - name: Earplugs within reach habit
              description: |-
                ## Purpose
                Protection only works if it is on you when the leaf blower starts or the band turns up. Putting plugs where noise actually happens, and checking the stash each week, turns good intentions into ears that are covered every time.

                ## Milestones
                1. Plugs stored in your bag, car, coat and a key ring case.
                2. Earmuffs hung next to the mower and power tools.
                3. Four weeks of protection use tracked, with the misses noted.
                4. A weekly restock check in place.

                ## Notes
                Start from the **Habit tracker** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks show protection worn on every noisy occasion logged, with plugs stored in at least four places."
                cadence: rolling
              tasks:
                - "Clip a small earplug case to your keys"
                - "Hang earmuffs next to the mower and power tools"
                - "Track every time you used protection for four weeks"
                - "Check earplugs are in your bag, car and key ring @recurring(weekly:mon)"
            - name: Safe listening limits on headphones
              description: |-
                ## Purpose
                Personal audio is now one of the biggest sources of loud sound for many adults, and noise-induced loss creeps in at volumes that feel comfortable. The World Health Organization uses about 80 decibels for 40 hours a week as a guide for adults; most phones can now measure your headphone exposure and warn when you pass it.

                ## Milestones
                1. Loud sound warnings or a volume limit switched on for every headphone you use.
                2. Noise-cancelling headphones tried on the commute instead of turning the volume up.
                3. The weekly exposure summary checked for a month.
                4. Your listening kept under the weekly guide for four weeks in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your phone's headphone exposure summary shows four consecutive weeks under the weekly guide level."
                cadence: rolling
              tasks:
                - "Turn on the volume limit or loud sound warnings on your phone"
                - "Try noise-cancelling headphones on the commute instead of turning up"
                - "Check your phone's weekly headphone exposure summary @recurring(weekly:sun)"
                - "Lower the limit one step if you pass the weekly guide twice in a month"
            - name: Annual hearing test cycle
              description: |-
                ## Purpose
                Once hearing loss, tinnitus or regular noise exposure is in the picture, a regular retest turns a vague sense of change into a measured trend. Booking it on a fixed cycle, and laying each audiogram beside the last, catches a drop early enough to adjust hearing aids or protection.

                ## Milestones
                1. The date of your last test found and the interval agreed with your audiologist.
                2. The next test booked a month before it is due.
                3. The new audiogram compared with the previous one for each ear.
                4. Any change discussed and the outcome noted.

                ## Notes
                Your audiologist sets the right interval. Yearly suits most people with known loss, noisy jobs or hearing aids; others may be told every two or three years.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A hearing test is completed each cycle and each new audiogram is filed beside the previous one with any change noted."
                cadence: cyclic
              tasks:
                - "Find the date of your last hearing test"
                - "Book the next hearing test a month before it is due @recurring(yearly)"
                - "Lay the new audiogram beside the previous one"
                - "Ask the audiologist whether any change needs action"
            - name: Daily hearing aid care routine
              description: |-
                ## Purpose
                Earwax and moisture cause most hearing aid faults, and an aid that is blocked sounds weak long before it stops. Two minutes each night, wiping, drying and charging, plus a regular wax guard change, keeps sound clear and avoids most trips back to the clinic.

                ## Milestones
                1. A cleaning brush, cloth and drying case kept by the bed.
                2. The aids wiped, dried and charged every night.
                3. Wax guards or filters changed on a set day each month.
                4. Faults such as whistling, crackling or weak sound written down for the next visit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Hearing aids are cleaned and dried nightly and wax guards changed monthly for three months, with any faults logged."
                cadence: rolling
              tasks:
                - "Set out a cleaning brush, cloth and drying case by the bed"
                - "Wipe the hearing aids and put them in the drying case overnight @recurring(daily)"
                - "Change the wax guards on both aids @recurring(monthly:9)"
                - "Write down any whistling, crackle or weak sound to report"
            - name: Hearing aid batteries and spare parts stock
              description: |-
                ## Purpose
                Running out of batteries or domes on a holiday weekend means days without hearing. A written list of the exact parts, where to reorder them and a monthly count keeps two months of spares in the drawer and one set in your coat.

                ## Milestones
                1. Battery size, dome size, wax guard type and charger model written down for each aid.
                2. A reorder source for each item, free or paid, noted.
                3. Two months of spares in stock.
                4. A travel set packed in a coat pocket or bag.

                ## Notes
                Disposable batteries are colour coded by size on the packet, which makes reordering easier: note the colour as well as the number.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A parts list is written and the drawer holds at least two months of spares at every monthly count."
                cadence: rolling
              tasks:
                - "Write down battery size, dome size and wax guard type for each aid"
                - "Find where to reorder each item and whether it is free"
                - "Count batteries, domes and wax guards and reorder low items @recurring(monthly:18)"
                - "Keep a spare pack in your coat or travel bag"
            - name: Tinnitus loudness and impact log
              description: |-
                ## Purpose
                Tinnitus feels worse on some days, and memory blames whatever happened last. A short weekly rating of loudness and bother, set beside sleep, stress, noise and caffeine, shows the real patterns and gives your clinician something more useful than 'it is about the same'.

                ## Milestones
                1. A log set up with loudness, bother, sleep, stress and noise columns.
                2. Eight weeks of ratings recorded.
                3. Two or three patterns, or the absence of any, written down.
                4. The log taken to your next audiology or doctor appointment.

                ## Notes
                Start from the **Metrics log** template. Rating every day can keep attention on the sound; weekly is enough for most people.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tinnitus log holds at least eight weekly ratings and a written note of any patterns, shared at an appointment."
                cadence: rolling
              tasks:
                - "Create a tinnitus log from the metrics log template"
                - "Rate tinnitus loudness and bother out of 10 @recurring(weekly:fri)"
                - "Review the month's ratings for patterns @recurring(monthly:28)"
                - "Bring the log to your next audiology or doctor appointment"
            - name: Hearing aid servicing and warranty calendar
              description: |-
                ## Purpose
                Hearing aids typically last around five years, warranties are often shorter, and loss or damage cover varies widely. Recording serial numbers and dates, booking regular cleans and knowing when cover ends turns an expensive surprise into a planned replacement.

                ## Milestones
                1. Serial numbers, purchase date and warranty end recorded for each aid.
                2. Loss and damage cover checked under home insurance or the provider's scheme.
                3. Regular clean and check visits booked with the clinic.
                4. An expected replacement year written down.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Serial numbers, warranty end and insurance cover are recorded and clinic cleans happen on schedule for a year."
                cadence: rolling
              tasks:
                - "Record each aid's serial number, purchase date and warranty end"
                - "Check whether home insurance covers loss of hearing aids"
                - "Book a clean and check with the hearing aid clinic @recurring(quarterly)"
                - "Check warranty end dates and plan for replacement @recurring(yearly)"
            - name: Bedtime sound enrichment for tinnitus
              description: |-
                ## Purpose
                Silence makes tinnitus stand out, which is why it often seems loudest when trying to fall asleep. Soft background sound set just below the level of the tinnitus, from a fan, a bedside sound generator or a pillow speaker, gives the brain something else to hear and is one of the simplest things clinicians suggest.

                ## Milestones
                1. Three sounds tried for a night each, such as rain, fan noise and quiet music.
                2. A bedside sound source or pillow speaker set up with a timer.
                3. The level set just below the tinnitus, not masking it completely.
                4. Four weeks of nights rated for how quickly sleep came.

                ## Notes
                Start from the **Sleep review** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A chosen bedtime sound is used on most nights for four weeks and the effect on falling asleep is recorded."
                cadence: rolling
              tasks:
                - "Try three sounds such as rain, fan noise and soft music for a night each"
                - "Set up a pillow speaker or bedside sound generator with a timer"
                - "Play the chosen sound softly as you settle to sleep @recurring(daily)"
                - "Rate how quickly you fell asleep after four weeks"
            - name: Hearing aid fine-tuning follow-ups
              description: |-
                ## Purpose
                New hearing aids are rarely right at the first fitting: voices sound tinny, your own voice booms, the cutlery clatters. Two or three adjustment visits, each based on written examples, are normal and usually included in the price, and they decide whether the aids end up worn or in a drawer.

                ## Milestones
                1. Problem situations noted with place, time and what sounded wrong.
                2. A first adjustment visit attended with the notes.
                3. Real-ear measurement asked about, to check the aids match your prescription.
                4. A settled setting reached that you can wear all day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "After at least two adjustment visits, the aids are worn for most of each waking day, with each change recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Note each situation where the aids sound wrong, with place and time"
                - "Bring the notes to the adjustment visit and ask for specific changes"
                - "Ask whether real-ear measurement was used to verify the fitting"
                - "Record each adjustment and how it sounded the following week"
            - name: Types of hearing loss explained
              description: |-
                ## Purpose
                Knowing whether your loss is conductive, sensorineural or mixed changes the conversation: some conductive loss can be treated medically, while sensorineural loss is usually managed with aids and tactics. An evening reading a hearing charity's guide, then asking your audiologist which type yours is, makes every later decision easier to follow.

                ## Milestones
                1. The three types of hearing loss understood in plain words.
                2. The usual patterns of age-related and noise-induced loss recognised on an audiogram.
                3. Your own type confirmed by the audiologist.
                4. A short paragraph in your own words saved with your results.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written paragraph describes your type of hearing loss, confirmed by your audiologist, and is saved with your audiogram."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a hearing charity's guide to the types of hearing loss"
                - "Ask your audiologist which type your test shows"
                - "Look for a dip around 4,000 hertz on your audiogram"
                - "Write a short paragraph on your type in your own words"
            - name: Conversation tactics for hearing loss
              description: |-
                ## Purpose
                Good listening with hearing loss is partly about the ears and partly about the setting: light on faces, the right seat, one speaker at a time. A handful of practised tactics, and a one-line way of telling people what helps, makes restaurants, meetings and family dinners far less tiring.

                ## Milestones
                1. A one-line request written that tells people what helps you hear.
                2. Seating rules set for restaurants, meetings and the car.
                3. The habit of asking people to rephrase rather than repeat in place.
                4. The tactics tried in five real conversations and the results noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Five conversations are logged where the tactics were used, with what worked written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-line request telling people what helps you hear"
                - "Pick restaurant seats with your back to the wall and away from the kitchen"
                - "Ask people to rephrase rather than repeat when you miss something"
                - "Try the tactics in five conversations and note what worked"
            - name: Lipreading class for adults with hearing loss
              description: |-
                ## Purpose
                Lipreading fills in the sounds hearing aids cannot, especially the high consonants that carry meaning, and classes also teach tactics and confidence. A term of weekly classes, local or online, alongside a little practice, makes group conversation noticeably less of a strain.

                ## Milestones
                1. A lipreading class found, local or online, and a place booked.
                2. At least eight sessions attended.
                3. Weekly practice done with muted video clips.
                4. Confidence in group conversation rated before and after the term.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A term of lipreading classes is completed with at least eight sessions attended and a before and after confidence rating recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Search for lipreading classes near you or online"
                - "Enrol in a term of classes"
                - "Practise with a short news clip on mute @recurring(weekly:tue)"
                - "Rate your confidence in group talk before and after the term"
            - name: How tinnitus works, a learning plan
              description: |-
                ## Purpose
                Fear feeds tinnitus: when the brain treats the sound as a threat, it pays more attention to it and the sound seems louder. Understanding why that happens, and checking each worry against reliable sources, is the starting point of most tinnitus self-help and often lowers distress on its own.

                ## Milestones
                1. A tinnitus charity's guide read on why tinnitus is noticed more under stress.
                2. Your own worries about the tinnitus listed.
                3. Each worry checked against what your clinician or the charity says.
                4. A one-page summary saved to reread on bad days.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of how tinnitus works, with each listed worry answered from a reliable source, is saved."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a tinnitus charity's guide on why tinnitus is noticed more under stress"
                - "List the worries you have about your tinnitus"
                - "Check each worry against what your clinician or the charity says"
                - "Ask the agent to summarise what you have read into one page"
            - name: Tinnitus relaxation and attention practice
              description: |-
                ## Purpose
                Relaxation and attention-shifting exercises drawn from cognitive behavioural approaches are among the best supported ways to make tinnitus less intrusive. Following one structured self-help course for eight weeks, three short sessions a week, gives a fair test of whether it helps you.

                ## Milestones
                1. A recommended self-help course, book or app chosen with your audiologist.
                2. Three sessions a week practised for eight weeks.
                3. Bother scores compared between week one and week eight.
                4. A decision made on whether to continue, change or seek guided therapy.

                ## Notes
                Start from the **Habit tracker** template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Eight weeks of practice are logged at three sessions a week and bother scores at the start and end are compared."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your audiologist for a recommended tinnitus self-help programme"
                - "Choose one structured course, book or app to follow"
                - "Practise a 10-minute relaxation or attention exercise @recurring(weekly:tue,thu,sat)"
                - "Compare your bother score after eight weeks with the start"
            - name: Hearing aid programmes, streaming and loops
              description: |-
                ## Purpose
                Modern aids hold several listening programmes, stream phone calls and TV, and connect to hearing loops, yet many users only ever use the default setting. An hour learning what each feature does turns a basic amplifier into a set of tools for restaurants, calls and theatres.

                ## Milestones
                1. Each programme on your aids listed with what it is for.
                2. The aids paired with your phone and a test call made.
                3. Volume and programme changes learned in the app.
                4. The loop setting tried in a public venue with a loop sign.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can switch programmes, stream a call and use a hearing loop, and a note lists each programme's use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the audiologist to list each programme on your aids and its use"
                - "Pair the aids with your phone and make a test call"
                - "Learn to switch programmes and volume in the app"
                - "Try the loop setting at a bank, theatre or place of worship"
            - name: Auditory training after a hearing aid fitting
              description: |-
                ## Purpose
                The brain has to relearn sounds it has not heard clearly for years, and that takes practice, not just wearing time. Six weeks of short listening exercises, from an app or programme your audiologist suggests, can speed up adjustment and help speech in noise.

                ## Milestones
                1. A training app or programme chosen with your audiologist.
                2. Three sessions a week completed for six weeks.
                3. Audiobook practice done while reading along with the text.
                4. Training scores compared between week one and week six.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Six weeks of auditory training are completed at three sessions a week with first and last scores recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your audiologist which auditory training app or programme they suggest"
                - "Do a 15-minute listening training session @recurring(weekly:mon,wed,fri)"
                - "Listen to an audiobook while reading the text for 20 minutes"
                - "Compare your training scores at week one and week six"
            - name: Choosing hearing aids that fit your life
              description: |-
                ## Purpose
                Prices for a pair range from free public provision to several thousand, and the expensive features matter far less than a good fitting and follow-up care. Starting from the situations you most want to hear in, then comparing styles, rechargeable or battery models and trial terms, leads to aids you will wear rather than tolerate.

                ## Milestones
                1. The five listening situations that matter most to you listed.
                2. Two styles compared on fit, visibility, battery type and features.
                3. Trial period, returns and aftercare terms checked for each provider.
                4. Aids chosen and the reasons recorded.

                ## Notes
                Start from the **Purchase decision** template. Ask how many follow-up visits are included; that often matters more than the model.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A hearing aid choice is recorded with the style, provider, trial terms and the reasons for choosing them."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the five situations where you most want to hear better"
                - "Ask for quotes on two styles with the same features compared"
                - "Ask each provider about the trial period, returns and aftercare"
                - "Choose the aids and record the reasons"
            - name: Over-the-counter or audiologist-fitted aids
              description: |-
                ## Purpose
                In some countries adults with perceived mild to moderate loss can now buy hearing aids without a prescription, at a fraction of the clinic price. They suit some people well, but not those with one-sided, sudden or severe loss, so the choice should start from your test results, not the advert.

                ## Milestones
                1. Whether over-the-counter aids are sold where you live confirmed.
                2. Your audiogram checked against the mild to moderate range with your audiologist.
                3. Total cost compared for both routes, including follow-up care.
                4. The route chosen and the reasons written down.

                ## Notes
                Ear pain, discharge, dizziness or loss in one ear only are reasons to see a clinician before buying any device.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between over-the-counter and fitted aids, based on your audiogram and a full cost comparison."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether over-the-counter hearing aids are sold where you live"
                - "Confirm with your audiologist that your loss is in the mild to moderate range"
                - "Compare total cost including follow-up care for both routes"
                - "Record which route you chose and why"
            - name: Paying for hearing aids and checking entitlements
              description: |-
                ## Purpose
                Before paying privately, check what you are already entitled to: many public health services provide aids free or subsidised, and insurers, employers, veterans' schemes and charities sometimes contribute. An afternoon of checking can save hundreds or thousands on a pair.

                ## Milestones
                1. Public provision where you live checked, with any waiting time.
                2. Health insurance policy read for hearing aid cover.
                3. Employer, veterans' or charity schemes checked.
                4. The cheapest route that meets your needs written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every funding route available to you is listed with its cost and wait, and the chosen route is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your doctor whether hearing aids are provided free or subsidised"
                - "Read your health insurance policy for hearing aid cover"
                - "Check employer, veterans' or charity schemes you may qualify for"
                - "Write down the cheapest route that meets your needs"
            - name: Home assistive listening devices
              description: |-
                ## Purpose
                Television volume arguments, a missed doorbell and phone calls that end in guesswork are often solved by devices that cost less than a single hearing aid. Setting up subtitles, a TV streamer or loop, captioned calls and a flashing doorbell makes the home easier for everyone in it.

                ## Milestones
                1. The sounds you miss at home listed, from doorbell to kettle.
                2. Subtitles on and a TV streamer or loop tested.
                3. Captions switched on for phone and video calls.
                4. A flashing or vibrating doorbell alert fitted.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least three assistive devices or settings are in use at home and the household agrees the TV volume problem is solved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the sounds you miss at home, from doorbell to kettle"
                - "Turn on subtitles and test a TV streamer or loop"
                - "Set up captions on phone and video calls"
                - "Fit a flashing or vibrating doorbell alert"
            - name: Quieter, clearer rooms at home
              description: |-
                ## Purpose
                Hard floors, bare walls and an extractor fan make speech harder to follow, especially with hearing loss or hearing aids. A few changes to the room you talk in most, softer surfaces, less background noise and better seating, often help more than turning up the aids.

                ## Milestones
                1. The rooms with the most echo identified with a simple clap test.
                2. A rug, curtains or cushions added to the main living room.
                3. A household agreement that the TV goes off during conversations.
                4. Seats arranged so faces are lit and close together.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The main talking room has at least two acoustic changes in place and the seating plan puts lit faces within two metres."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Clap once in each room and note which ones echo most"
                - "Add a rug, curtains or cushions to the room you talk in most"
                - "Agree with the household that the TV goes off during conversations"
                - "Arrange seats so faces are lit and no more than two metres apart"
            - name: Custom-moulded earplugs for musicians
              description: |-
                ## Purpose
                Custom filtered plugs, made from an impression of your ear canal, cut volume evenly across pitches so music still sounds like music. They cost more than off-the-shelf plugs but last years, and for players, singers and regular gig-goers they are usually the protection that actually stays in.

                ## Milestones
                1. Off-the-shelf filtered plugs worn at three rehearsals or gigs first.
                2. Prices and filter options compared from two providers.
                3. A filter strength chosen to suit your instrument and venues.
                4. Ear impressions taken and the finished plugs checked for fit.

                ## Notes
                Start from the **Purchase decision** template. Have wax checked before impressions are taken.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Custom filtered earplugs are fitted, with the provider, filter strength and fit check recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Wear off-the-shelf filtered plugs at three rehearsals or gigs"
                - "Ask two audiologists for prices on custom filtered plugs"
                - "Choose the filter strength that suits your instrument and venues"
                - "Book the ear impressions after a wax check"
            - name: Medicines and hearing check with the pharmacist
              description: |-
                ## Purpose
                A small number of medicines are known to affect hearing or cause tinnitus, and people taking several prescriptions rarely get asked about their ears. A short conversation with a pharmacist, bringing a full list, tells you whether anything you take is relevant and what to raise with the prescriber.

                ## Milestones
                1. A full list of medicines and supplements written.
                2. A pharmacist asked whether any are linked to hearing or tinnitus.
                3. Any concern raised with the prescriber before anything is changed.
                4. The answer noted in your ear history for future clinicians.

                ## Notes
                Never stop or change a prescribed medicine on your own because of hearing worries. Raise it with the prescriber first.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A pharmacist has reviewed your full medicine list for hearing effects and the outcome is written in your ear history."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a list of every medicine and supplement you take"
                - "Ask the pharmacist whether any are linked to hearing or tinnitus"
                - "Raise any concern with the prescriber before changing anything"
                - "Ask about hearing effects at your yearly medicines review @recurring(yearly)"
            - name: Comparing tinnitus therapy options
              description: |-
                ## Purpose
                Tinnitus has no single cure, but several approaches reduce how much it bothers people: cognitive behavioural therapy for tinnitus, sound therapy, hearing aids with built-in sound generators and structured counselling. Comparing what is available locally, its cost and the evidence, then starting one properly, beats trying supplements and gadgets at random.

                ## Milestones
                1. The tinnitus therapies available to you listed with your audiologist.
                2. Cost, time commitment and strength of evidence noted for each.
                3. Whether a hearing aid would help, if you also have hearing loss, checked.
                4. One therapy chosen and started with a date to judge it.

                ## Notes
                Be wary of products that promise to cure tinnitus. Ask your audiologist what the evidence says before paying.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of at least three tinnitus therapies is written and one has been started with a review date set."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your audiologist which tinnitus therapies are available locally"
                - "List the cost, time and evidence for each option"
                - "Check whether a hearing aid would help if you also have hearing loss"
                - "Start the chosen therapy and set a date to judge it"
            - name: Gig and festival hearing plan
              description: |-
                ## Purpose
                A single loud night can leave ears ringing for days, and each episode adds to the damage. Packing filtered plugs, choosing where to stand and taking quiet breaks lets you enjoy the music and wake up with clear ears.

                ## Milestones
                1. Filtered plugs and a spare pair packed.
                2. A spot chosen away from the speaker stacks.
                3. A quiet break taken each hour.
                4. Your ears checked the next morning for ringing or muffled sound.

                ## Notes
                Ringing or dullness that has not cleared within a few days is worth a hearing check.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A gig or festival is attended with plugs worn throughout and the next-morning ear check recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pack filtered earplugs and a spare pair before you leave"
                - "Stand away from the speaker stacks and take a quiet break each hour"
                - "Note any ringing or muffled hearing the next morning"
                - "Book a hearing check if ringing lasts more than a few days"
            - name: First hearing aid fitting day
              description: |-
                ## Purpose
                The fitting appointment sets how your aids sound for the first months and how confident you feel handling them. Arriving with questions, someone familiar to talk to you and a plan for the first weeks makes it far more likely the aids are worn from day one.

                ## Milestones
                1. Questions written on care, settings, the trial period and returns.
                2. A familiar person attending to speak during the fitting.
                3. Insertion, removal and charging practised before leaving.
                4. The first follow-up booked before leaving the clinic.

                ## Notes
                Most audiologists suggest building up wearing time over the first weeks. Ask what schedule they recommend for you.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The fitting is attended, you can insert and remove the aids unaided, and a follow-up date is in the calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your questions about care, settings and the trial period"
                - "Ask someone familiar to come and speak during the fitting"
                - "Practise inserting and removing the aids before you leave"
                - "Book the first follow-up before leaving the clinic"
            - name: Flying with blocked ears and hearing aids
              description: |-
                ## Purpose
                Cabin pressure changes can cause ear pain, especially with a cold, and airports are hard places to hear announcements. A short plan, with supplies in hand luggage, staff told about your hearing and a routine for the descent, makes the trip calmer.

                ## Milestones
                1. Chargers, batteries and drying case packed in hand luggage.
                2. Airline or airport staff told about your hearing loss.
                3. A descent routine of swallowing, chewing or yawning ready.
                4. Your doctor asked before flying with a cold or after ear surgery.

                ## Notes
                Start from the **Trip** template. Hearing aids can usually stay in through security; tell the staff you are wearing them.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A flight is completed with hearing aid supplies in hand luggage and staff told about your hearing loss."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pack hearing aid chargers, batteries and drying case in hand luggage"
                - "Tell airline staff you have hearing loss so gate changes reach you"
                - "Chew or swallow during descent to help your ears equalise"
                - "Ask your doctor before flying with a cold or after ear surgery"
            - name: ENT specialist appointment preparation
              description: |-
                ## Purpose
                Ear, nose and throat clinic slots are short and often come after a long wait. Bringing every audiogram, your ear history and three ranked questions, and leaving with the plan written down, makes sure the wait was worth it.

                ## Milestones
                1. Audiograms, ear history and symptom notes gathered in one folder.
                2. Three questions written in order of importance.
                3. Notes taken during the appointment, or someone brought to take them.
                4. The plan, tests ordered and when results are due written down.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The ENT appointment is attended with all audiograms, and the plan and result dates are written down the same day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather your audiograms, history and symptom notes in one folder"
                - "Write your top three questions in order"
                - "Take notes or bring someone to take them"
                - "Write down the plan, any tests ordered and when to expect results"
            - name: Shooting, motorsport and fireworks protection
              description: |-
                ## Purpose
                Gunshots and some fireworks peak far above any concert, and a single unprotected shot can cause permanent damage. For loud hobbies and nights out with children, doubling up protection and storing it with the kit means it is never left behind.

                ## Milestones
                1. The peak noise of the hobby checked against your protection's rating.
                2. Plugs worn under earmuffs for shooting or track days.
                3. Children's ear defenders bought before fireworks night.
                4. The protection stored with the hobby gear.

                ## Notes
                Electronic earmuffs let you hear conversation while cutting loud peaks, which is why many shooters prefer them.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Protection is worn at the next shooting day, track day or fireworks event, and it is stored with the hobby kit afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the peak noise of your hobby against your protection rating"
                - "Wear plugs under earmuffs for shooting or track days"
                - "Buy children's ear defenders before fireworks night"
                - "Store the kit with the hobby gear so it goes every time"
            - name: Musician's hearing conservation plan
              description: |-
                ## Purpose
                Musicians are several times more likely than the general population to develop hearing loss and tinnitus, and for a player the ears are the career. A plan with a baseline test, protection at every rehearsal, sensible stage layout and a weekly log of loud hours protects the instrument that cannot be replaced.

                ## Milestones
                1. A baseline audiogram on file before the next tour or season.
                2. Filtered plugs or in-ear monitors used at every rehearsal and gig.
                3. Stage and rehearsal layout changed to lower volume at your position.
                4. A weekly log of loud hours and protection use kept for three months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A baseline audiogram is on file and three months of weekly loud-hour logs show protection at every session."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Get a baseline audiogram on file before the next tour or season"
                - "Ask your band to rehearse quieter with amps raised off the floor"
                - "Log rehearsal and gig hours with earplug use @recurring(weekly:sat)"
                - "Agree a fixed in-ear or wedge monitor level with the sound engineer"
            - name: Studio and mixing sessions at safe levels
              description: |-
                ## Purpose
                Producers and engineers listen for hours at a time, and ear fatigue dulls both hearing and judgement before the session ends. Calibrating monitors to a fixed level, scheduling breaks and limiting long headphone stretches protects the ears and makes mixes more consistent.

                ## Milestones
                1. Monitor level calibrated with a sound level meter and marked on the controller.
                2. A quiet break taken every hour of mixing.
                3. Long headphone sessions limited and checked on speakers instead.
                4. Sessions that end with dull or ringing ears logged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monitor calibration is checked monthly and a month of sessions shows hourly breaks with any ear fatigue logged."
                cadence: rolling
              tasks:
                - "Calibrate your monitor level with a sound level meter @recurring(monthly:12)"
                - "Mix at the calibrated level and check loud passages only briefly"
                - "Take a 10-minute quiet break every hour of mixing"
                - "Note sessions that end with dull or ringing ears"
            - name: Noise at work protection and hearing checks
              description: |-
                ## Purpose
                In many countries employers must assess noise and provide protection above set daily levels, often around 80 to 85 decibels averaged over a shift, and offer regular hearing checks. Knowing the assessment, having protection that fits and keeping your own copies of every test protects your hearing and your record if it changes.

                ## Milestones
                1. The latest workplace noise assessment seen.
                2. Protection provided that fits and suits the job.
                3. A copy of each workplace hearing test kept with your own records.
                4. Any gap raised with your manager or safety representative.

                ## Notes
                If the assessment, protection or hearing checks are missing, the safety representative or your country's workplace safety authority can advise.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "You hold the latest noise assessment, fitted protection and copies of every workplace hearing test."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your manager or safety rep for the latest noise assessment"
                - "Ask for hearing protection that fits and suits the job"
                - "Keep a copy of each workplace hearing test result"
                - "Check your workplace hearing test is booked @recurring(yearly)"
            - name: Workplace adjustments for hearing loss
              description: |-
                ## Purpose
                Telling an employer about hearing loss can feel risky, but many countries' disability laws require reasonable adjustments, and the changes are usually cheap: captions on calls, a better seat, a quiet room for one-to-ones, written follow-ups. A short written request makes the conversation practical rather than personal.

                ## Milestones
                1. The work situations where you miss most listed.
                2. Live captions switched on for video calls.
                3. A written request for adjustments sent to your manager.
                4. Agreed adjustments confirmed in writing with a review date.

                ## Notes
                Start from the **Meeting notes** template for the conversation with your manager.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written list of agreed workplace adjustments exists, with a review date in the calendar."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the work situations where you miss the most"
                - "Turn on live captions in your video call software"
                - "Ask the agent to draft a short note to your manager requesting adjustments"
                - "Agree the adjustments in writing and set a review date"
            - name: Age-related hearing loss after 60
              description: |-
                ## Purpose
                More than a quarter of people over 60 have hearing loss that affects daily life, and many wait years before doing anything about it. Research links untreated hearing loss with isolation and with a higher risk of memory problems later, so a test and a plan in your sixties pays off for decades.

                ## Milestones
                1. A hearing test booked if the last one was more than two years ago.
                2. The results shared with one family member.
                3. An activity dropped because of hearing named.
                4. That activity resumed with aids or tactics within a month.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recent hearing test is on file and one social activity dropped because of hearing has been resumed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book a hearing test if the last one was more than two years ago"
                - "Tell one family member what the test showed"
                - "Name one social activity you have dropped because of hearing"
                - "Return to that activity with your tactics or aids within a month"
            - name: Helping a relative accept a hearing test
              description: |-
                ## Purpose
                Families usually notice hearing loss years before the person does, and nagging rarely works. Gathering specific examples, raising it calmly face to face and offering practical help with booking turns a sore subject into an appointment.

                ## Milestones
                1. Three specific moments written down where your relative missed something.
                2. A calm conversation held in a quiet place.
                3. A hearing test booked by or with your relative.
                4. A family agreement on how to speak so they can follow.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your relative has a hearing test booked or completed, and the family has agreed how to speak with them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note three specific moments when your relative missed something"
                - "Pick a quiet time to talk, face to face, without blame"
                - "Offer to book the test and go with them"
                - "Agree how the family will speak so they can follow"
            - name: Living alone with hearing loss safely
              description: |-
                ## Purpose
                Standard smoke alarms beep at a pitch many people with age-related loss cannot hear without aids, and hearing aids come out at night. Alarms with strobes or vibrating pads, a way to call emergency services by text and a neighbour who knows make living alone safer.

                ## Milestones
                1. The smoke alarm tested from bed with aids out.
                2. A strobe or vibrating pad smoke and carbon monoxide alarm fitted.
                3. Registration done for an emergency text service, where one exists.
                4. A neighbour or relative given a key and told about your hearing.

                ## Notes
                Some fire services fit specialist alarms free for people with hearing loss. Ask yours.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A strobe or vibrating alarm is fitted and tested, and an emergency text route is set up where available."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Test whether you can hear the smoke alarm from bed without aids"
                - "Fit a strobe or vibrating pad smoke alarm system"
                - "Register for your country's emergency text service if one exists"
                - "Test the strobe or vibrating smoke alarm @recurring(monthly:3)"
            - name: Cochlear implant candidacy assessment
              description: |-
                ## Purpose
                When even well-fitted hearing aids no longer make speech clear, a cochlear implant may help, and many people who qualify are never referred. An assessment at an implant centre involves tests, scans and counselling over several months, so preparing questions and meeting implant users early makes the decision an informed one.

                ## Milestones
                1. Your audiologist asked whether your speech scores meet referral criteria.
                2. A referral made to an implant centre.
                3. An implant user met through a support group.
                4. A decision recorded after the assessment, with the rehabilitation plan if going ahead.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An implant centre assessment is completed and the decision, with any rehabilitation plan, is recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your audiologist whether your speech scores meet implant referral criteria"
                - "Request a referral to an implant centre"
                - "Meet an implant user through a hearing loss support group"
                - "Do the listening practice set by the implant team @recurring(daily)"
            - name: Investigating hearing loss in one ear
              description: |-
                ## Purpose
                One-sided hearing loss or tinnitus in one ear only is usually investigated further, often with an MRI scan, to rule out rare causes such as a benign growth on the hearing nerve. Most results are reassuring, but keeping track of the referral, scan and result stops it slipping through the gaps between clinics.

                ## Milestones
                1. The difference between ears on your audiogram confirmed with the audiologist.
                2. A referral or scan requested through your doctor.
                3. The scan date and the date results are due noted.
                4. The result and any monitoring plan recorded.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The investigation of one-sided hearing loss is complete and the result and any follow-up plan are written in your records."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask whether your audiogram shows a difference between ears"
                - "Ask your doctor whether a scan or ENT referral is needed"
                - "Note the scan date and when results are due"
                - "Record the result and any monitoring plan"
            - name: Hyperacusis and sound sensitivity plan
              description: |-
                ## Purpose
                Everyday sounds such as cutlery, traffic or a child's shout can become painful, often alongside tinnitus. Wearing earplugs in ordinary places tends to make sensitivity worse, so a clinician-guided plan to reduce over-protection and build tolerance gradually is the usual route back.

                ## Milestones
                1. Uncomfortable sounds listed and each rated out of 10.
                2. A sound sensitivity assessment done by an audiologist.
                3. A plan agreed to reduce earplug use in normal-level places.
                4. Weekly graded time in everyday sound logged for two months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "An audiologist-agreed plan is in place and two months of weekly graded exposure are logged with discomfort ratings."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the sounds that cause discomfort and rate each out of 10"
                - "Ask your audiologist for a sound sensitivity assessment"
                - "Agree a plan to cut back earplug use in normal-level places"
                - "Spend a planned spell in everyday sound, a little longer each time @recurring(weekly:wed)"
            - name: Meniere's disease episode plan
              description: |-
                ## Purpose
                Spinning vertigo with fluctuating hearing, tinnitus and a full feeling in the ear can arrive without warning and last hours. With a specialist's diagnosis, a diary of episodes and a written plan for what to keep at hand, where to lie down and who to tell, attacks become easier to manage at home and at work.

                ## Milestones
                1. The diagnosis and treatment plan confirmed by an ear specialist.
                2. A diary kept of each episode's length, hearing change and fullness.
                3. An attack kit and plan agreed with the specialist.
                4. Driving rules for vertigo checked and the plan shared with household and work.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written episode plan agreed with the specialist exists and three months of episode diary are recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Record each episode's length, hearing change and fullness"
                - "Ask the specialist what to keep at hand during an attack"
                - "Check the driving rules for vertigo where you live"
                - "Share the attack plan with your household and workplace"
            - name: Tinnitus with low mood or poor sleep
              description: |-
                ## Purpose
                For a minority of people, tinnitus comes with anxiety, low mood or weeks of broken sleep, and that combination needs more than self-help. Measuring the impact with a standard questionnaire, telling your doctor plainly and asking for psychological therapy that specialises in tinnitus gets the right support in place.

                ## Milestones
                1. A tinnitus impact questionnaire completed and the score noted.
                2. Your doctor told how tinnitus is affecting mood and sleep.
                3. A referral to tinnitus-focused psychological support requested.
                4. A crisis line number saved in your phone.

                ## Notes
                If you ever have thoughts of harming yourself, contact emergency services or a crisis line straight away.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your doctor has been told about the effect on mood and sleep and a support referral or plan is recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Complete a tinnitus impact questionnaire with your audiologist or online"
                - "Tell your doctor how tinnitus is affecting your mood and sleep"
                - "Save a crisis line number in your phone"
                - "Fill in the mood questionnaire your clinician uses @recurring(monthly:22)"
---

# Hearing Health & Tinnitus

This area is for anyone noticing their hearing change, living with tinnitus or hearing aids, or spending time around loud sound, from musicians and producers to factory workers and older adults. It starts with the foundations (noting what has changed, a full hearing test, reading the audiogram, an urgent action card, your ear history, earwax and protection), then the routines that keep earplugs at hand, hearing aids working and tinnitus recorded, the skills of conversation, lipreading and tinnitus self-help, the decisions about hearing aids, funding, home devices and therapies, the events worth preparing for, the situations of musicians, noisy workplaces and later life, and finally the specialist work of implants, one-sided loss, sound sensitivity and Meniere's disease.

What repeats is a weekly earplug check and headphone exposure summary, nightly hearing aid drying, a monthly supply count and tinnitus review, quarterly hearing aid servicing and a yearly hearing test. The Purchase decision, Habit tracker, Metrics log, Sleep review, Trip and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
