---
id: physical-health.eczema-psoriasis-care
name: Eczema & Psoriasis Care
description: "A written treatment plan, moisturising and cream routines that actually get followed, trigger and flare records, and well-prepared dermatology visits for eczema, psoriasis and rosacea at any age."
category: personal
version: 1.0.0
tags: [physical-health, eczema-psoriasis-care, everyone, parent, eczema, psoriasis, rosacea, skin-care]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - habit-tracker
    - metrics-log
    - meeting-notes
    - trip
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Eczema & Psoriasis Care
          description: "Managing chronic skin conditions like eczema, psoriasis and rosacea with treatment routines, trigger diaries, dermatology visits and flare-up plans for all ages."
          projects:
            - name: One-page skin history and current picture
              description: |-
                ## Purpose
                Every new clinician asks the same questions: when it started, where it appears, what has been tried and what helped. A single page that answers them saves the first ten minutes of each appointment and stops treatments that already failed from being prescribed again.

                ## Milestones
                1. The age of onset, affected body areas and pattern of flares written down.
                2. Every cream, shampoo, tablet and light treatment tried listed with roughly how long it was used and what happened.
                3. Known or suspected triggers noted, marked as confirmed or only suspected.
                4. Family history of eczema, psoriasis, asthma or hay fever recorded.
                5. The page saved where you can show it on a phone or print it.

                ## Notes
                Old prescription records from your pharmacy or patient portal fill gaps that memory cannot.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page skin history listing onset, sites, past treatments with outcomes and suspected triggers exists and has been shown at an appointment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down when the skin condition first appeared and where"
                - "List every treatment tried, with how long and what happened"
                - "Download past skin prescriptions from the patient portal or pharmacy"
                - "Note relatives with eczema, psoriasis, asthma or hay fever"
            - name: Baseline photo set of affected skin
              description: |-
                ## Purpose
                Skin often looks different on appointment day than it did during last month's flare, and memory is a poor judge of whether a treatment is working. A set of photos taken the same way, in the same light, gives you and your clinician a fixed starting point to compare against.

                ## Milestones
                1. Every affected area photographed in daylight from a fixed distance.
                2. A coin or ruler included in close-ups for scale.
                3. Photos stored in one dated album, separate from the camera roll.
                4. A short note of how each area feels (itch, pain, cracking) saved with the photos.

                ## Notes
                Keep intimate-area photos in a locked folder, and ask before photographing an older child.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated album holds daylight photos of every affected area, each with a scale reference and a one-line note."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a private dated album for skin photos"
                - "Photograph each affected area by a window in daylight"
                - "Add a coin or ruler to close-up shots for scale"
                - "Write one line per area on itch, pain and cracking"
            - name: Severity score baseline with a validated questionnaire
              description: |-
                ## Purpose
                Dermatologists use short scoring tools to judge severity and decide what treatment someone qualifies for, such as POEM for eczema, a body surface estimate for psoriasis and DLQI for impact on daily life. Scoring yourself before any change gives a number to beat and the evidence a referral or a stronger treatment often requires.

                ## Milestones
                1. The questionnaire your clinician prefers identified.
                2. A first score recorded with the date.
                3. A quality-of-life score recorded alongside it.
                4. Both scores added to the skin history page.

                ## Notes
                Self-scores support a conversation with your clinician; they are not a diagnosis.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated severity score and a dated quality-of-life score are recorded and added to the skin history."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask which severity questionnaire your clinician uses"
                - "Find the free patient version of that questionnaire"
                - "Complete the severity and quality-of-life questionnaires today"
                - "Add both dated scores to your skin history page"
            - name: Written skin treatment plan from your clinician
              description: |-
                ## Purpose
                Vague instructions such as "use the cream when it's bad" are the main reason treatments underperform. A written plan that says which product goes where, how often, for how long and how to step down when skin settles turns a prescription into something the whole household can follow.

                ## Milestones
                1. Each prescribed product listed with the body areas it is for.
                2. How often and for how many days each is used written down.
                3. The step-down routine for when skin improves agreed.
                4. What to do if there is no improvement after an agreed number of days recorded.
                5. Copies kept on the fridge and on your phone.

                ## Notes
                If the clinician will not write it, write it yourself in the appointment and read it back to them to confirm.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan naming every product, site, frequency, duration and step-down rule has been confirmed by a clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every skin product you currently have at home"
                - "Book an appointment to agree a written treatment plan"
                - "Read the plan back to the clinician before you leave"
                - "Put copies on the fridge and in your phone notes"
            - name: Choosing an emollient you will actually use
              description: |-
                ## Purpose
                The best moisturiser is the one used generously and often, and that depends on texture, smell, pump or tub, and whether it stings. Trying a few on prescription or from the pharmacy, one at a time, ends the cupboard full of half-used tubs and makes the daily routine bearable.

                ## Milestones
                1. Two or three emollients shortlisted across a lotion, cream and ointment.
                2. Each tried on a small patch for several days before wider use.
                3. One daytime and one night-time favourite chosen.
                4. The chosen products named on the treatment plan and repeat prescription.

                ## Notes
                Start from the **Purchase decision** template. Greasy ointments often suit very dry or cracked skin at night; lighter creams suit daytime and hairy areas. Paraffin-based emollients soak into fabric and make it flammable, so keep away from flames.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A daytime and a night-time emollient have been chosen after patch trials and are named on the treatment plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the pharmacist for samples of a lotion, cream and ointment"
                - "Patch test each emollient on the inner arm for three days"
                - "Pick one daytime and one night-time emollient"
                - "Ask for the chosen products to be added to your repeat list"
            - name: Soap, shampoo and laundry swap for sensitive skin
              description: |-
                ## Purpose
                Ordinary soap, bubble bath and fragranced detergent strip the skin barrier every day and can undo what the creams achieve. Swapping the household's washing products once, rather than one bottle at a time, removes a steady background irritant.

                ## Milestones
                1. Every soap, shower gel, bubble bath and shampoo in the bathroom checked for fragrance and harsh detergents.
                2. A soap substitute or gentle wash in use for the affected person.
                3. Laundry switched to a fragrance-free detergent with no fabric softener.
                4. Old products used up elsewhere or given away.

                ## Notes
                Many emollients can double as a soap substitute; ask the pharmacist which of yours can.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The affected person's wash products and the household laundry detergent are all fragrance-free, with no fabric softener in use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check every bathroom product for fragrance and foaming agents"
                - "Ask the pharmacist which emollient can replace soap"
                - "Buy a fragrance-free laundry detergent and drop fabric softener"
                - "Move the old products to another room or give them away"
            - name: Emollient stations at home, work and school
              description: |-
                ## Purpose
                A single tub in the bathroom gets used twice a day at best, while skin dries out every time hands are washed. Small pumps and tubes placed where you actually are make extra applications easy and turn the routine into reflex.

                ## Milestones
                1. Pump dispensers placed by each sink and the bed.
                2. A travel tube in the bag, the car and the desk drawer.
                3. A labelled tube at nursery or school for a child.
                4. Decanting done with a clean spatula, never fingers in the tub.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Emollient is within reach at every sink, by the bed, at work or school and in the everyday bag."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count how many places you wash your hands in a normal day"
                - "Buy pump dispensers and small refillable tubes"
                - "Fill and place a pump by each sink and the bed"
                - "Label a tube with the child's name for nursery or school"
            - name: Repeat prescription for creams and emollients
              description: |-
                ## Purpose
                Running out of emollient on a Friday evening is how a good fortnight becomes a flare. Getting every regular skin product on a repeat list, in quantities that match real use, means ordering takes two minutes and nothing runs dry.

                ## Milestones
                1. Every regular skin product on the repeat list.
                2. Quantities checked against how fast you actually use them.
                3. Online or app ordering set up with the pharmacy.
                4. A reorder point agreed, such as when the last pump is half empty.

                ## Notes
                People with widespread eczema often need far larger quantities than first prescribed; tell the prescriber how long a tub lasts.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All regular skin products are on a repeat list with quantities matched to measured use, and ordering is set up online."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note how many days each tub or tube currently lasts"
                - "Ask the practice to add all regular skin products to repeats"
                - "Set up online or app ordering with your pharmacy"
                - "Write the reorder point on the lid of the spare tub"
            - name: Understanding the exact type of skin condition you have
              description: |-
                ## Purpose
                Atopic, contact, seborrhoeic and discoid eczema, plaque, scalp, guttate and nail psoriasis, and the different forms of rosacea each behave differently and respond to different things. Knowing the precise label your clinician has given, and what it implies, makes every later decision clearer.

                ## Milestones
                1. The specific diagnosis written in your skin history.
                2. Reputable patient information on that type read from a dermatology society or health service.
                3. Three questions about the diagnosis written for the next appointment.
                4. Anything that does not fit the description raised with the clinician.

                ## Notes
                If you have never had a formal diagnosis, that is the first thing to ask for, not something to settle online.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The specific diagnosis is recorded and three written questions about it have been answered by a clinician."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the exact diagnosis in your records or clinic letters"
                - "Read a patient leaflet from a dermatology society on that type"
                - "Write three questions the leaflet did not answer"
                - "Ask the questions at the next skin appointment"
            - name: Twice-daily moisturising habit
              description: |-
                ## Purpose
                Regular emollient is the base layer of almost every eczema and psoriasis plan, and it works only when it is done every day, including the good days. Anchoring it to the morning wash and bedtime, and ticking it off, keeps the barrier repaired between flares instead of only during them.

                ## Milestones
                1. Morning and bedtime applications attached to existing routines.
                2. Emollient applied in downward strokes, not rubbed in hard.
                3. Applications ticked off for four weeks.
                4. Fewer than four missed applications in a month.

                ## Notes
                Start from the **Habit tracker** template. Leave a gap, often around 30 minutes, between emollient and any medicated cream; ask your clinician which goes first.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks of twice-daily emollient ticked off with no more than three missed applications."
                cadence: rolling
              tasks:
                - "Set up a habit tracker with morning and bedtime boxes"
                - "Ask your clinician the right order and gap between emollient and medicated cream"
                - "Apply emollient morning and bedtime and tick it off @recurring(daily)"
            - name: Trigger and flare diary
              description: |-
                ## Purpose
                Flares often seem random until a few months of notes show the pattern: a new detergent, a stressful week, hot showers, a change of season, a particular food for some children. A short diary reviewed each week turns guesses into evidence you can test with your clinician.

                ## Milestones
                1. A diary format with date, sites, severity out of ten and possible triggers.
                2. Entries made on at least five days a week for two months.
                3. Patterns written up in a short summary.
                4. Suspected triggers tested one at a time, with your clinician involved for any food.

                ## Notes
                Do not cut out food groups for a child on diary evidence alone; bring the diary to the clinician first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two months of diary entries are summarised into a list of suspected triggers that has been discussed with a clinician."
                cadence: rolling
              tasks:
                - "Create a diary with date, sites, severity and possible triggers"
                - "Add a two-line entry most evenings before bed"
                - "Review the week's entries for repeating patterns @recurring(weekly:sun)"
                - "Write a one-paragraph pattern summary after two months"
            - name: Monthly progress photos
              description: |-
                ## Purpose
                Slow improvement is invisible from one day to the next, and so is slow worsening. Repeating the baseline photos on the same date each month, in the same light and angle, shows whether a treatment is earning its place.

                ## Milestones
                1. Photos retaken monthly with the same setup as the baseline.
                2. Each month's photos placed side by side with the previous ones.
                3. Visible change noted in one sentence per area.
                4. The latest comparison ready to show at appointments.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months of comparable photos exist, each set with a one-sentence change note per area."
                cadence: rolling
              tasks:
                - "Write down the exact spot, light and distance used for the baseline photos"
                - "Retake the photo set in the same light and angle @recurring(monthly:7)"
                - "Put this month next to last month and note any change"
            - name: Monthly severity score log
              description: |-
                ## Purpose
                A score repeated monthly turns how-it-feels into a trend line, which is what clinicians look for when deciding whether to step treatment up or down. It also gives the evidence that specialist services often need before offering phototherapy or systemic medicines.

                ## Milestones
                1. The same questionnaire used every month.
                2. Severity and quality-of-life scores logged with dates.
                3. Treatment changes marked on the log so effects can be seen.
                4. The trend summarised before every review.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Severity and quality-of-life scores logged every month for six months, with treatment changes marked."
                cadence: rolling
              tasks:
                - "Set up a metrics log with severity and quality-of-life columns"
                - "Complete the severity and impact questionnaires and log the scores @recurring(monthly:14)"
                - "Mark each treatment change on the log with its date"
            - name: Cream stock and expiry check
              description: |-
                ## Purpose
                Opened emollients and medicated creams have a limited life, tubs get contaminated by fingers, and spare stock hides at the back of cupboards. A short monthly check keeps fresh supply where it is needed and catches the empty tube before a flare does.

                ## Milestones
                1. All skin products gathered into one cupboard or box.
                2. Opened-on dates written on every tub and tube.
                3. Expired or contaminated products returned to the pharmacy.
                4. A spare of each daily product always in stock.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every skin product in the house has an opened-on date, none is past its use-by, and one spare of each daily product is in stock."
                cadence: rolling
              tasks:
                - "Gather every skin product in the house into one box"
                - "Write the opened-on date on each tub and tube"
                - "Check levels, dates and spares in the skin box @recurring(monthly:22)"
                - "Return expired creams to the pharmacy for disposal"
            - name: Topical treatment calendar with step-down weeks
              description: |-
                ## Purpose
                Medicated creams work best in planned courses with a clear start, a step-down and a stop, and they are easiest to discuss when you can say how much was used. A simple calendar of which cream went where, and how many tubes a quarter, answers the questions clinicians ask and eases worry about overuse.

                ## Milestones
                1. Each course of medicated cream marked with start, step-down and stop dates.
                2. Body sites noted for each course.
                3. Tubes used each quarter counted.
                4. The calendar brought to every skin review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A calendar shows every medicated cream course for the last six months, with sites and quarterly tube counts."
                cadence: rolling
              tasks:
                - "Mark today's medicated creams and sites on a calendar"
                - "Record the start, step-down and stop date of each course"
                - "Count the medicated tubes used in the last quarter @recurring(quarterly)"
            - name: Yearly skin condition review
              description: |-
                ## Purpose
                Long-term skin conditions drift: what worked at diagnosis may no longer be the best option, and new treatments appear every few years. A yearly review booked on purpose, with photos, scores and questions prepared, keeps the plan current rather than repeating last year's prescription.

                ## Milestones
                1. A review month fixed and the appointment booked.
                2. The year's photos, scores and treatment calendar summarised.
                3. Questions about newer options written in advance.
                4. Agreed changes written into the treatment plan.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A prepared skin review held in each of two consecutive years, with the treatment plan updated afterwards."
                cadence: cyclic
              tasks:
                - "Book the yearly skin review with your GP or dermatologist @recurring(yearly)"
                - "Summarise the year's scores, photos and cream use on one page"
                - "Update the written treatment plan with anything agreed"
            - name: Seasonal skin routine switch
              description: |-
                ## Purpose
                Central heating and cold wind dry the skin in winter, while heat, sweat and sun change things in summer, and many people with psoriasis improve in sunny months while some with rosacea get worse. Adjusting the routine at each change of season, instead of waiting for the flare, keeps the plan matched to the weather.

                ## Milestones
                1. A winter version and a summer version of the routine written down.
                2. Heavier emollients and gloves brought out before the first cold snap.
                3. Lighter products, sun protection and sweat plans in place before summer.
                4. Notes on what worked kept for next year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written winter and summer routines exist and the routine has been switched at four consecutive season changes."
                cadence: cyclic
              tasks:
                - "Write a winter routine and a summer routine side by side"
                - "Switch to the routine for the coming season and restock @recurring(quarterly)"
                - "Note what helped this season for next year"
            - name: Night itch and sleep routine
              description: |-
                ## Purpose
                Itch is usually worst at night, and broken sleep makes the whole household more tired, more stressed and more likely to scratch. A bedtime routine built around a cool room, cotton bedding, short nails and a final layer of emollient protects sleep as much as skin.

                ## Milestones
                1. Bedroom kept cool, with lighter layers of bedding.
                2. Breathable cotton nightwear and sheets in use.
                3. Nails kept short and smooth, with cotton mittens for small children if needed.
                4. Night waking from itch counted for two weeks before and after the changes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Nights woken by itch fall over four weeks compared with a two-week count taken before the routine started."
                cadence: rolling
              tasks:
                - "Count nights woken by itch for the next two weeks"
                - "Swap to cotton nightwear and lighter bedding layers"
                - "Trim and file nails short and smooth @recurring(weekly:fri)"
                - "Apply a final layer of emollient as the last step before lights out"
            - name: Flare-up first 48 hours plan
              description: |-
                ## Purpose
                When a flare starts, people either wait too long or reach for whatever is in the cupboard. A short written plan for the first two days, agreed with your clinician, says exactly what to step up, what to stop and at what point to call for an appointment.

                ## Milestones
                1. Early warning signs of your flares written down.
                2. The step-up actions for the first 48 hours agreed with your clinician.
                3. A point at which to book an appointment defined.
                4. A small flare kit of the right products kept together.

                ## Notes
                Spreading redness, weeping, crusting, fever or painful clusters of blisters are not a normal flare: get same-day medical advice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written 48-hour flare plan agreed with a clinician has been used in at least one flare and adjusted afterwards."
                cadence: rolling
              tasks:
                - "List the first signs that a flare is starting"
                - "Agree the 48-hour step-up actions with your clinician"
                - "Pack a flare kit with the right products in one bag"
                - "Adjust the plan after each flare based on what happened"
            - name: Fingertip units and how much cream to use
              description: |-
                ## Purpose
                Most people use far too little medicated cream for fear of side effects, then decide it does not work. Learning the fingertip unit, a standard way of measuring cream along an adult finger, and asking how many your clinician wants on each area makes the treatment both effective and predictable.

                ## Milestones
                1. The fingertip unit measured out correctly on your own finger.
                2. The number of units for each affected area confirmed with your clinician.
                3. A simple body diagram with units per area made.
                4. Everyone who applies the cream shown how.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A body diagram showing clinician-confirmed fingertip units per area is in use by everyone who applies the cream."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Watch a dermatology society video on the fingertip unit"
                - "Ask your clinician how many units each area needs"
                - "Draw a body outline with the units for each area"
                - "Show everyone who applies the cream how to measure it"
            - name: Wet wrapping technique learned with a nurse
              description: |-
                ## Purpose
                Wet wraps, damp tubular bandages or garments over emollient, can calm severe itch and protect skin overnight, especially in children. They are fiddly and can cause problems if used with the wrong cream, so learning them from a nurse once is much better than guessing from a video.

                ## Milestones
                1. Whether wet wraps suit your situation confirmed with your clinician.
                2. A demonstration from a dermatology or practice nurse.
                3. Garments or bandages in the right sizes obtained.
                4. A first week of wraps done and reviewed.

                ## Notes
                Only put a medicated cream under wraps if your clinician has specifically said so.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A nurse has demonstrated wet wrapping and a first week of wraps has been completed and reviewed with them."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your clinician whether wet wraps suit your skin"
                - "Book a wet wrapping demonstration with a nurse"
                - "Get wrap garments or bandages in the right sizes"
                - "Note how the first week of wraps went for the follow-up"
            - name: Recognising infected skin and when to get urgent help
              description: |-
                ## Purpose
                Broken eczema skin can become infected with bacteria or, more seriously, the cold sore virus, which needs treatment the same day. Every adult in the household knowing the warning signs, and who to call out of hours, is the most important safety step in this area.

                ## Milestones
                1. The signs of bacterial infection and of eczema herpeticum read from a health service source.
                2. Out-of-hours numbers saved on every adult's phone.
                3. The warning signs written on the flare plan.
                4. Grandparents, childminders and partners told what to look for.

                ## Notes
                Rapidly spreading painful blisters or punched-out sores, especially with fever, need same-day medical attention.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every adult who cares for the affected person can name the infection warning signs and has the out-of-hours number saved."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read a health service page on infected eczema and eczema herpeticum"
                - "Save the out-of-hours medical number on every adult's phone"
                - "Add the warning signs to the top of the flare plan"
                - "Brief grandparents and childminders on what to look for"
            - name: Knowing the strength of each steroid cream you use
              description: |-
                ## Purpose
                Topical steroids range from mild to very potent, and the right strength depends on the body area and the flare. Worry about steroids is common and often leads to under-treatment, so knowing the strength of each tube, where it may go and for how long replaces fear with a clear rule.

                ## Milestones
                1. Each steroid at home labelled with its strength category.
                2. Which areas each may be used on confirmed with the pharmacist.
                3. Concerns about thinning or withdrawal written down and asked about.
                4. The answers added to the written treatment plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every steroid cream at home carries a strength label and the permitted body areas are written on the treatment plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather every steroid cream and ointment in the house"
                - "Ask the pharmacist the strength category of each one"
                - "Label each tube with its strength and permitted areas"
                - "Write down your worries about steroids to ask at the next review"
            - name: Scalp psoriasis and flaking care routine
              description: |-
                ## Purpose
                Thick scale on the scalp is hard to treat because creams cannot reach through hair, and it is easy to scrub too hard and make it worse. Learning the soften, lift and treat sequence with medicated shampoos and scalp products makes the scalp manageable and stops the cycle of picking.

                ## Milestones
                1. The scalp products prescribed or recommended for you listed.
                2. A softening, lifting and treating order agreed with your clinician.
                3. The routine done at a regular time each week.
                4. Scale and itch compared before and after four weeks.

                ## Notes
                Comb scale gently after softening; do not pick or scrape it off.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A four-week scalp routine agreed with a clinician has been followed, with before and after notes on scale and itch."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the scalp products you have been prescribed or advised"
                - "Ask your clinician the order for softening, lifting and treating"
                - "Choose a regular evening for the full scalp routine"
                - "Compare scalp scale and itch after four weeks"
            - name: Habit reversal training for scratching
              description: |-
                ## Purpose
                Much scratching is automatic, done while reading, watching television or falling asleep, and it keeps eczema going long after the original trigger. Habit reversal teaches you to notice the urge and replace scratching with a competing action, such as pressing or pinching the skin, and studies show it can reduce scratching considerably.

                ## Milestones
                1. Scratching episodes counted for one week to find the high-risk times.
                2. A competing response chosen and practised.
                3. The weekly tally falling over four weeks.
                4. The technique taught to a child, if relevant, in a simple game form.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The weekly scratching tally has fallen over four weeks compared with the first counted week."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Count scratching episodes on a tally app for one week"
                - "Pick a competing action such as clenching the fist or pressing the skin"
                - "Compare this week's scratching tally with the last @recurring(weekly:wed)"
                - "Ask the dermatology team about a structured habit reversal course"
            - name: Reading ingredient labels for irritants
              description: |-
                ## Purpose
                Fragrance, some preservatives, lanolin and botanical extracts are common culprits in irritated skin, and they hide under unfamiliar names on labels. Learning to read the ingredient list lets you choose toiletries, sun creams and make-up that will not undo the treatment plan.

                ## Milestones
                1. A short personal list of ingredients to avoid, based on your history and any patch tests.
                2. Common alternative names for fragrance and preservatives recognised.
                3. Every leave-on product in daily use checked against the list.
                4. Replacements chosen for anything that fails.

                ## Notes
                Marketing words such as natural, hypoallergenic or dermatologist tested do not guarantee a product is free of your triggers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every leave-on product in daily use has been checked against a written personal avoid list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a personal list of ingredients to avoid"
                - "Learn the label names used for fragrance and common preservatives"
                - "Check each leave-on product you use against the list"
                - "Replace any product that contains something on the list"
            - name: Patch testing for suspected contact dermatitis
              description: |-
                ## Purpose
                Eczema on the hands, face or eyelids, or that started with a new job or product, may be an allergy to something touching the skin, such as nickel, a preservative or a hair dye ingredient. Patch testing at a dermatology clinic identifies the allergen so it can be avoided for good rather than treated for ever.

                ## Milestones
                1. Reasons to suspect contact allergy written down with dates and products.
                2. A referral for patch testing requested.
                3. Instructions about stopping creams or sun exposure before testing followed.
                4. Results and the allergen avoidance list received and saved.

                ## Notes
                Patch testing usually needs three visits in one week; book time off around it.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Patch testing has been completed or formally declined by a clinician, with any allergen list saved in the skin history."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List products, jobs and hobbies linked to the start of the rash"
                - "Ask your GP whether patch testing is appropriate"
                - "Plan time off for the three patch test visits"
                - "Save the allergen list and avoidance leaflet in your skin history"
            - name: Clothing and fabric change for itchy skin
              description: |-
                ## Purpose
                Wool, rough seams, tight waistbands and synthetic fabrics that trap sweat all aggravate eczema, and school or work uniforms can be the worst offenders. Reviewing the wardrobe once and swapping the items worn most often removes a source of itch that lasts all day.

                ## Milestones
                1. The garments worn most often checked for wool, tags and rough seams.
                2. Labels removed and seams turned or covered.
                3. Soft cotton or silk-type layers next to the skin.
                4. Uniform alternatives agreed with school or work where needed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ten most-worn items next to the affected skin are cotton or similarly soft and have no labels or rough seams."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick out the ten garments worn most often next to the skin"
                - "Cut out labels and check seams on each garment"
                - "Replace wool or scratchy items with soft cotton layers"
                - "Ask school or work about a cotton alternative to the uniform"
            - name: Bedroom heat and humidity adjustments
              description: |-
                ## Purpose
                Hot, dry bedrooms in winter and stuffy ones in summer both make night itch worse. Measuring the room for a fortnight, then adjusting heating, ventilation and bedding, is a cheap change that helps the skin during the eight hours it is least protected.

                ## Milestones
                1. A thermometer and humidity meter placed in the bedroom.
                2. Readings noted at bedtime for two weeks.
                3. Radiator settings, window opening and bedding layers adjusted.
                4. Night itch compared before and after the change.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two weeks of bedroom temperature and humidity readings have been taken and at least one change made and compared."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put a cheap thermometer and humidity meter in the bedroom"
                - "Note the bedtime readings for two weeks"
                - "Turn down the bedroom radiator and adjust bedding layers"
                - "Compare night itch before and after the change"
            - name: Rosacea trigger reduction plan
              description: |-
                ## Purpose
                Rosacea flushing is commonly set off by heat, hot drinks, alcohol, spicy food, sun, exercise and harsh skin care, but each person's list is different. Testing the likely triggers one at a time and building a gentle routine around the ones that matter reduces redness without giving up everything at once.

                ## Milestones
                1. Flushing episodes logged with likely triggers for four weeks.
                2. The three strongest triggers identified.
                3. A gentle cleanser, moisturiser and daily mineral sun protection in use.
                4. A workaround for each top trigger written down.

                ## Notes
                Persistent redness, bumps or eye irritation are worth showing a clinician; prescription treatments for rosacea work best started early.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four weeks of flushing records identify the top three triggers, each with a written workaround in use."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Log each flushing episode and what came before it"
                - "Rank the triggers after four weeks of records"
                - "Switch to a gentle cleanser and daily mineral sun protection"
                - "Write a workaround for each of your top three triggers"
            - name: Phototherapy course decision
              description: |-
                ## Purpose
                Narrowband UVB light treatment, given in hospital two or three times a week for several weeks, helps many people with psoriasis and some with eczema when creams are not enough. It needs real time commitment and has long-term skin considerations, so deciding with full information matters more than speed.

                ## Milestones
                1. Eligibility for phototherapy discussed with a dermatologist.
                2. Travel time, session times and work or school impact worked out.
                3. Benefits, risks and lifetime treatment limits explained and noted.
                4. A decision recorded to start, wait or decline.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to start, defer or decline phototherapy, made after a dermatologist explained benefits, risks and the time required."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your dermatologist whether phototherapy suits your condition"
                - "Work out travel time for sessions two or three times a week"
                - "Write down the benefits and risks the dermatologist explains"
                - "Record your decision to start, wait or decline"
            - name: Systemic or biologic treatment decision
              description: |-
                ## Purpose
                When skin stays moderate to severe despite creams and light treatment, dermatologists may offer tablets, injections or biologic medicines. Eligibility usually depends on documented scores and treatments already tried, so arriving with that history and clear questions about monitoring, side effects and family plans leads to a better-informed choice.

                ## Milestones
                1. Severity scores and the list of treatments tried assembled.
                2. The options offered, their monitoring needs and practical demands listed.
                3. Questions on infection risk, vaccines, pregnancy and travel answered.
                4. A decision recorded with the reasons.

                ## Notes
                Bring your monthly score log and treatment calendar: they are often the evidence that qualifies someone for these treatments.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision about systemic or biologic treatment recorded with reasons after a specialist appointment where scores and treatment history were presented."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Gather six months of severity scores and the treatment calendar"
                - "Ask the agent to draft questions about monitoring, side effects and pregnancy"
                - "Write down each option the dermatologist offers and what it involves"
                - "Record your decision and the reasons in the skin history"
            - name: Second opinion or private dermatology decision
              description: |-
                ## Purpose
                Waits for dermatology can be long, and sometimes a plan simply is not working. Deciding deliberately whether to ask for a second opinion, a specialist nurse clinic or a paid private appointment, with costs and follow-up arrangements understood, avoids paying for a one-off visit that leaves no ongoing care.

                ## Milestones
                1. The reason for wanting another opinion written in one sentence.
                2. Options listed: a second public referral, a nurse-led clinic, a private consultant.
                3. Costs, waits and who will prescribe afterwards compared.
                4. A choice made and the appointment booked or declined.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two routes to another dermatology opinion, ending in a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one sentence on why another opinion is needed"
                - "List the public, nurse-led and private options near you"
                - "Ask each option who prescribes and follows up afterwards"
                - "Choose a route and book or record why you declined"
            - name: Checking skin products and online claims before trying them
              description: |-
                ## Purpose
                Forums and adverts are full of creams, supplements and diets promising to cure eczema or psoriasis, and some steroid-free products have been found to contain undeclared steroids. A short safety check before buying protects both money and skin.

                ## Milestones
                1. A list of products or remedies you are tempted to try.
                2. Each one checked with a pharmacist for safety and interactions with your plan.
                3. Claims checked against a dermatology society or health service page.
                4. A decision noted for each: try, ask the clinician, or skip.

                ## Notes
                Be most cautious with products bought online from overseas sellers and anything that promises a cure.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every product on the wish list has a recorded decision after a pharmacist check."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every remedy or product you are tempted to try"
                - "Ask the pharmacist about each one and your current plan"
                - "Look up each claim on a dermatology society website"
                - "Note try, ask the clinician or skip against each product"
            - name: First dermatology appointment preparation
              description: |-
                ## Purpose
                Dermatology appointments are short and often follow a long wait, and skin may be calm on the day. Arriving with the skin history, photos of the worst flares, scores, all current products and three priority questions makes sure the visit ends with a plan instead of another referral.

                ## Milestones
                1. Skin history, photos and scores gathered in one folder.
                2. All current creams and products packed or photographed.
                3. Three priority questions written down.
                4. Notes taken during the appointment and the plan read back.

                ## Notes
                Start from the **Meeting notes** template. Avoid applying emollient to the main areas on the morning of the visit unless told otherwise, so the skin can be seen.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The appointment has been attended with history, photos, scores and products, and written notes of the agreed plan exist."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put the skin history, photos and scores in one folder"
                - "Photograph every product you currently use, front and back"
                - "Write your three most important questions"
                - "Take notes at the appointment and read the plan back"
            - name: Holiday and travel skin plan
              description: |-
                ## Purpose
                Flights dry the skin, hotel soap and pool chlorine irritate it, and sun can help psoriasis while burning or flaring eczema and rosacea. Planning the travel kit and routine before you go means a flare abroad is an inconvenience, not a ruined trip.

                ## Milestones
                1. Enough of every product packed, with a spare in hand luggage.
                2. Liquids rules and any medicine letters checked.
                3. A sun, swimming and shower routine planned for the destination.
                4. Local pharmacy and out-of-hours care located.

                ## Notes
                Start from the **Trip** template. Rinse off pool water and reapply emollient straight after swimming.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip completed with a packed skin kit, a destination routine and local care details saved before departure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count how much of each product the trip needs, plus spares"
                - "Check the airline liquids rules for creams and ointments"
                - "Plan a rinse and moisturise routine after every swim"
                - "Save the address of a pharmacy near where you are staying"
            - name: Big occasion flare-proofing plan
              description: |-
                ## Purpose
                Weddings, graduations, job interviews and photo days are exactly when stress tends to bring on a flare. Starting six weeks ahead, with a clinician check, a tested make-up or outfit and a calm routine for the final week, gives the skin its best chance on the day.

                ## Milestones
                1. The date and the skin areas that will be visible noted.
                2. A clinician appointment held six weeks before if a step-up may be needed.
                3. Outfit fabrics and any make-up patch tested in advance.
                4. A calm final-week routine with no new products.

                ## Notes
                Never try a new product in the final fortnight before the event.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The event takes place with no new products used in the final fortnight and outfit and make-up tested at least four weeks ahead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the event date and which skin will be on show"
                - "Book a skin appointment six weeks before if a step-up may help"
                - "Patch test any make-up or new outfit fabric four weeks ahead"
                - "Freeze the routine with no new products for the final fortnight"
            - name: School year skin care handover
              description: |-
                ## Purpose
                Teachers and nursery staff cannot help with creams, itch and swimming lessons if nobody has told them what to do. A one-page letter, a labelled tube and a short conversation at the start of each school year keep a child's plan working during the hours parents are not there.

                ## Milestones
                1. A one-page skin care letter written in plain language.
                2. Emollient and any agreed creams labelled and handed in.
                3. PE, swimming, art and cooking adjustments agreed.
                4. A named staff contact for skin questions.

                ## Notes
                Ask whether the school needs its own medicine form for any medicated cream.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The school or nursery holds a current skin care letter, labelled products and a named contact for this school year."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-page skin care letter for your child's teacher"
                - "Hand in a labelled tube of emollient with the letter"
                - "Agree adjustments for PE, swimming and messy play"
                - "Update the letter and products before each new school year @recurring(yearly)"
            - name: Sport and swimming season skin plan
              description: |-
                ## Purpose
                Sweat, chlorine, friction from kit and long showers afterwards can all flare skin, and many children stop sport rather than deal with it. A simple before and after routine, agreed with coaches, keeps active people in the pool and on the pitch.

                ## Milestones
                1. The sports and activities that flare the skin identified.
                2. A barrier layer of emollient before swimming in place.
                3. A quick lukewarm rinse and moisturise after every session.
                4. Kit fabrics and fit checked for friction points.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full sport or swimming season completed with a written before and after routine followed for every session."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List the sports and sessions that seem to flare the skin"
                - "Pack emollient and a gentle wash in the kit bag"
                - "Apply a barrier layer of emollient before each swim"
                - "Ask the coach about a cotton layer under rough kit"
            - name: Baby and toddler eczema daily routine
              description: |-
                ## Purpose
                Eczema is common in babies, and parents often get conflicting advice from relatives, forums and different clinicians. A clear daily routine agreed with your health visitor or doctor, covering bath, emollient, clothing and nappy area, gives parents confidence and the baby's skin consistency.

                ## Milestones
                1. A bath and emollient routine agreed with the health visitor or doctor.
                2. Soap-free products and soft cotton clothing in use.
                3. Everyone who cares for the baby following the same routine.
                4. Questions about food, sleep and infection written for the next check.

                ## Notes
                Do not cut foods from a baby's diet without medical advice; talk to your doctor if you suspect a food reaction.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written baby skin routine agreed with a health professional is followed by every carer for four weeks."
                cadence: rolling
              tasks:
                - "Ask the health visitor or doctor to agree a written daily routine"
                - "Share the routine with grandparents, nursery and childminders"
                - "Bathe briefly in lukewarm water, pat dry and apply emollient @recurring(daily)"
                - "Write questions about food, sleep and infection for the next check"
            - name: Teenager taking over their own skin care
              description: |-
                ## Purpose
                Parents usually run a child's skin care, but by the mid-teens the routine has to belong to the young person, just as exams, sport and self-consciousness peak. A gradual handover with clear steps keeps the treatment going and lets them speak for themselves at appointments.

                ## Milestones
                1. The teenager able to explain their own plan in their own words.
                2. Products and reorders managed by them with a parent backing up.
                3. Part of each appointment held with the teenager alone.
                4. A monthly check-in that both of you find useful.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The teenager orders their own products, explains their plan at an appointment and has managed alone for three months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your teenager which parts of the routine they want to own first"
                - "Show them how to order repeats on the pharmacy app"
                - "Suggest they see the clinician alone for part of the next visit"
                - "Hold a short check-in on how their skin plan is going @recurring(monthly:25)"
            - name: Skin treatment review before pregnancy or while breastfeeding
              description: |-
                ## Purpose
                Some tablets and creams used for psoriasis, eczema and rosacea need to be stopped well before trying for a baby, while others are considered compatible with pregnancy and breastfeeding. Reviewing the plan early, ideally months before conception, avoids sudden stops and unplanned flares.

                ## Milestones
                1. Every current skin treatment listed with its pregnancy and breastfeeding status confirmed by a clinician.
                2. Any treatment that needs a planned stop given a date.
                3. A pregnancy-compatible flare plan agreed.
                4. A postnatal and breastfeeding plan for skin written.

                ## Notes
                Do not stop a prescribed treatment on your own; ask your dermatologist or doctor first, and as early as possible.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A clinician has confirmed which current skin treatments are compatible with pregnancy and breastfeeding, and a written plan for both exists."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every skin treatment you use, including creams"
                - "Book a review to discuss pregnancy plans and skin treatment"
                - "Write down which treatments need a planned stop and when"
                - "Agree a flare plan you can use during pregnancy"
            - name: Hand eczema at work plan
              description: |-
                ## Purpose
                Hairdressers, healthcare workers, cleaners, cooks and mechanics wash hands or wear gloves all day, and hand eczema can threaten their ability to work. A plan covering gloves, cotton liners, emollient breaks and an occupational health referral protects both skin and job.

                ## Milestones
                1. The tasks that wet or irritate the hands listed.
                2. Suitable gloves and cotton liners in use.
                3. Emollient applied after every hand wash and at breaks.
                4. Occupational health or your manager told if adjustments are needed.

                ## Notes
                Hand eczema that started after a change of product or glove type is worth asking about patch testing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Gloves, liners and emollient breaks are in use at work and any needed adjustments have been requested in writing."
                cadence: rolling
              tasks:
                - "List the work tasks that wet or irritate your hands"
                - "Ask occupational health about glove types and cotton liners"
                - "Put emollient beside every work sink you use"
                - "Check gloves for holes and restock cotton liners @recurring(monthly:10)"
            - name: Skin care for older, thinner skin
              description: |-
                ## Purpose
                Skin becomes drier and thinner with age, eczema can appear for the first time in later life, and itchy legs are common in winter. Adapting the routine for slower healing, reduced reach and other medicines keeps older skin comfortable and lowers the risk of tears and infection.

                ## Milestones
                1. New or changed skin symptoms in later life checked by a clinician.
                2. Other medicines reviewed for links to dry or itchy skin.
                3. Application aids or help arranged for hard-to-reach areas.
                4. A gentler bathing routine in place.

                ## Notes
                Ask the pharmacist whether any regular medicine is known to cause itch or dry skin.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "New symptoms have been seen by a clinician and a written routine covering bathing, application aids and medicine links is in use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a check for any new itch or rash that started in later life"
                - "Ask the pharmacist whether any regular medicine dries the skin"
                - "Get a long-handled lotion applicator for backs and legs"
                - "Switch to shorter, lukewarm baths with a soap substitute"
            - name: Living confidently with visible skin
              description: |-
                ## Purpose
                Visible eczema, psoriasis and rosacea affect confidence, relationships and work, and many people avoid swimming, dating or short sleeves. Planning a few answers to comments, finding a patient community and telling your clinician if mood is low treats the impact as part of the condition, which it is.

                ## Milestones
                1. One or two short replies ready for questions or comments.
                2. A patient charity or support group found.
                3. Low mood, anxiety or avoidance raised with a clinician if present.
                4. One avoided activity tried again.

                ## Notes
                Quality-of-life scores and how the skin affects mood are legitimate reasons to step up treatment; say so at appointments.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A support group has been contacted, impact on mood has been raised at an appointment, and one avoided activity has been resumed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write two short replies to comments about your skin"
                - "Find a national eczema, psoriasis or rosacea patient charity"
                - "Tell your clinician how the skin affects your mood and plans"
                - "Choose one avoided activity and set a date to try it again"
            - name: Systemic or biologic treatment monitoring routine
              description: |-
                ## Purpose
                Tablets and injections for skin conditions come with regular blood tests, injection schedules, prescription deliveries and rules about infections and vaccines. Building a reliable routine around them keeps the treatment safe and avoids pauses caused by missed tests or late deliveries.

                ## Milestones
                1. The monitoring schedule written down with each test and its interval.
                2. Injection days, delivery dates and storage arranged.
                3. A rule agreed for what to do when ill or before vaccines.
                4. Results checked and filed after each test.

                ## Notes
                Ask the specialist team who to contact when you have an infection or a planned operation, and save that number.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every scheduled monitoring test for the past year was done on time and filed, with no gaps in treatment from missed deliveries."
                cadence: rolling
              tasks:
                - "Write the monitoring schedule your specialist team gave you"
                - "Save the specialist team's advice line for infections and operations"
                - "Book the next monitoring blood test and file the last result @recurring(quarterly)"
                - "Confirm the home delivery date for injections each cycle"
            - name: Yearly joint symptom screening for psoriasis
              description: |-
                ## Purpose
                Up to about a third of people with psoriasis develop psoriatic arthritis, and nail changes, swollen fingers or heel pain can be early signs. A short screening questionnaire once a year, shared with your clinician, means joint problems are raised early rather than put down to age.

                ## Milestones
                1. A validated psoriasis joint screening questionnaire found.
                2. The questionnaire completed and dated.
                3. Any positive answers raised with your doctor.
                4. The yearly repeat scheduled.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated joint screening questionnaire completed in each of two consecutive years, with positive answers raised with a clinician."
                cadence: cyclic
              tasks:
                - "Find a validated psoriasis joint screening questionnaire"
                - "Complete the joint screening questionnaire and share any positives @recurring(yearly)"
                - "Photograph any nail pitting or finger swelling to show your doctor"
            - name: Proactive twice-weekly treatment of flare-prone sites
              description: |-
                ## Purpose
                People whose eczema returns in the same places again and again are sometimes advised to keep treating those sites twice a week even when they look clear. Agreeing this approach with your dermatologist, and scheduling it on fixed days, can mean fewer flares overall.

                ## Milestones
                1. Flare-prone sites mapped from the photo log and diary.
                2. A proactive plan agreed in writing with your dermatologist.
                3. Treatment days fixed on the calendar.
                4. Flares counted over six months and compared with the previous six.

                ## Notes
                Only follow a proactive regime if your clinician has prescribed it, with the product and duration they specify.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A clinician-agreed proactive plan has been followed for six months, with the flare count compared against the six months before."
                cadence: rolling
              tasks:
                - "Map your repeat flare sites from the photo log and diary"
                - "Ask your dermatologist whether proactive treatment suits you"
                - "Treat the agreed sites on the scheduled days @recurring(weekly:mon,thu)"
                - "Count flares over six months and compare with the six before"
            - name: Persistent redness procedure consultation
              description: |-
                ## Purpose
                Visible blood vessels and constant redness from rosacea often do not respond to creams alone, and vascular laser or intense pulsed light can help. Costs, number of sessions and practitioner training vary widely, so a careful comparison protects your face and your budget.

                ## Milestones
                1. Persistent redness confirmed as rosacea by a clinician.
                2. Two or more practitioners compared on qualifications and experience.
                3. Costs, session numbers and likely maintenance written down.
                4. A decision recorded, with any treatment booked.

                ## Notes
                Choose a practitioner supervised by a dermatologist or regulated doctor, and ask how many rosacea patients they treat.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least two qualified practitioners ends in a recorded decision about laser or light treatment."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your clinician to confirm the redness is rosacea"
                - "Shortlist two practitioners supervised by a dermatologist"
                - "Compare their costs, session numbers and maintenance needs"
                - "Record your decision and book or decline the treatment"
            - name: Personal skin handbook for new clinicians and carers
              description: |-
                ## Purpose
                Years of living with a skin condition build knowledge no single clinic letter holds: which products sting, what stops a flare, which treatments failed and why. Gathering it into a short handbook lets a new dermatologist, babysitter or partner pick up the plan in minutes.

                ## Milestones
                1. The skin history, treatment plan, flare plan and avoid list combined.
                2. A one-page summary on top for busy clinicians.
                3. A simpler version for carers and family.
                4. The handbook refreshed after every yearly review.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A handbook with a one-page clinical summary and a carer version exists and has been updated within the last year."
                cadence: rolling
              tasks:
                - "Combine the history, plans and avoid list into one document"
                - "Write a one-page summary for clinicians on top"
                - "Write a simpler page for babysitters, partners and grandparents"
                - "Refresh the handbook after the yearly skin review @recurring(yearly)"
---

# Eczema & Psoriasis Care

This area is for anyone living with eczema, psoriasis or rosacea, and for the parents who manage a child's skin every morning and every night. It starts with the foundations (a skin history, baseline photos and scores, a written treatment plan and an emollient you will actually use), then the daily and monthly routines that keep flares short, the skills that make creams work, the decisions about patch tests, phototherapy and stronger treatments, the events worth planning around, the life stages that change the routine, and finally the work of an experienced self-manager.

What repeats is a twice-daily moisturising habit, a weekly look at the trigger diary, monthly photos and severity scores, a cream stock check, a seasonal switch of routine and the yearly skin review. The Purchase decision, Habit tracker, Metrics log, Meeting notes and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
