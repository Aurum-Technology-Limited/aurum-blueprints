---
id: physical-health.desk-posture-ergonomics
name: Desk Posture & Ergonomics
description: "A desk that fits your body: measured chair, screen and keyboard set-up, break and eye-rest routines, equipment trials, and plans for hot desks, small homes and crunch weeks."
category: personal
version: 1.0.0
tags: [physical-health, desk-posture-ergonomics, knowledge-worker, engineer, ergonomics, repetitive-strain, eye-strain, home-office]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - purchase-decision
    - trip
    - operational-checklist
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Desk Posture & Ergonomics
          description: "Setting up chairs, screens and habits to prevent repetitive strain, eye strain and back pain for people who spend long hours at a desk."
          projects:
            - name: Two-week desk discomfort baseline
              description: |-
                ## Purpose
                Before buying a new chair or keyboard, you need to know what actually hurts, when it starts and what you were doing at the time. Two weeks of quick end-of-day ratings for neck, shoulders, wrists, eyes and lower back show whether trouble builds through the day, peaks on long meeting days or follows one particular task, and they give you a before picture to judge every later change against.

                ## Milestones
                1. A log with a row per workday and columns for neck, shoulders, wrists and hands, eyes, lower back and notes.
                2. Ten workdays of 0 to 10 ratings recorded at the end of each day.
                3. The two or three worst areas, and the times or tasks they track with, written in one paragraph.
                4. The baseline averages saved where your quarterly re-check can find them.

                ## Notes
                Start from the **Metrics log** template. Rate before you change any equipment, or you will never know which change helped.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten workdays of dated discomfort ratings for five body areas are logged, with a written summary of the worst areas and their pattern."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a discomfort log from the metrics log template"
                - "Add columns for neck, shoulders, wrists, eyes, lower back and notes"
                - "Rate each area from 0 to 10 at the end of every workday for two weeks"
                - "Write a short summary of which areas are worst and when they flare"
            - name: Workstation body measurements
              description: |-
                ## Purpose
                Furniture guidance only makes sense against your own body: the right seat height depends on your lower leg, the right desk height on your elbows and the right screen height on your seated eye level. Ten minutes with a tape measure and a helper gives you the numbers every later decision in this area uses, from adjusting a chair to buying a desk.

                ## Milestones
                1. Seated elbow height, lower leg length from floor to the back of the knee, and seated eye height measured in centimetres.
                2. Standing elbow and eye height measured, ready for any future sit-stand desk.
                3. Target seat, desk and screen heights worked out from those numbers.
                4. All measurements saved in one note you can open in a shop or on a call with a supplier.

                ## Notes
                Measure in the shoes you normally work in. Many fixed desks sit around 72 to 75 cm, which is too high for plenty of people, so expect your numbers to disagree with your furniture.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A saved note lists your seated and standing elbow and eye heights, lower leg length and the target seat, desk and screen heights."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask someone to help measure you sitting with feet flat and shoulders relaxed"
                - "Measure seated elbow height, lower leg length and seated eye height"
                - "Measure standing elbow and eye height in your usual work shoes"
                - "Write the target seat, desk and screen heights next to the measurements"
            - name: Adjusting the chair you already own
              description: |-
                ## Purpose
                Most office chairs have five or six adjustments their owners have never touched, and a mid-range chair set up properly usually beats an expensive one left on factory settings. Working through seat height, seat depth, backrest and lumbar height, armrests and recline tension, in that order, takes half an hour and often removes the need to buy anything at all.

                ## Milestones
                1. The chair's manual or the maker's adjustment video found and every lever identified.
                2. Seat height set so feet rest flat and thighs are roughly level.
                3. Seat depth leaving two to three fingers between the seat edge and the back of the knee.
                4. Lumbar support sitting in the curve of your lower back and armrests just below desk height without lifting your shoulders.
                5. The final settings photographed or written down so they can be restored.

                ## Notes
                Adjust in this order, because each setting changes the next. If the chair cannot reach the seat height from your measurements, it does not fit you, and that is useful to know before you shop.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every adjustment on your chair is set against your measurements and the settings are recorded in a photo or note."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the manual or maker's adjustment video for your chair model"
                - "Set seat height so your feet rest flat on the floor"
                - "Adjust seat depth, lumbar height and armrests in that order"
                - "Photograph each lever position once the chair feels right"
            - name: Monitor height, distance and angle set-up
              description: |-
                ## Purpose
                A screen that sits too low pulls your head forward for hours, and one that sits too far away makes you lean in to read. Placing the main monitor roughly an arm's length away, with its top edge at or just below eye level and a slight backward tilt, is the single change that most often eases neck and eye complaints at a desk.

                ## Milestones
                1. The main screen centred in front of the keyboard rather than off to one side.
                2. The top of the viewable area at or slightly below seated eye height.
                3. Viewing distance of roughly an arm's length, adjusted until text reads without leaning.
                4. A slight backward tilt set, with stacks of books replaced by a proper stand or arm if needed.

                ## Notes
                If you wear varifocals, the screen usually needs to go lower than this; see the varifocal project later in this area.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The main monitor is centred, at about arm's length and with its top edge at or below your measured seated eye height."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Centre the main screen directly behind the keyboard"
                - "Raise or lower the screen until its top edge meets your seated eye height"
                - "Sit back and adjust the distance until text reads without leaning forward"
                - "Tilt the screen back slightly and note the final height in centimetres"
            - name: Keyboard and mouse at elbow height
              description: |-
                ## Purpose
                Wrist and forearm strain usually starts with a keyboard set too high, which pushes the shoulders up and bends the wrists back, or a mouse parked far out to the side. Getting both at or just below seated elbow height, close to the body and level with each other, keeps forearms relaxed through the thousands of keystrokes a long day involves.

                ## Milestones
                1. The keyboard at or just below elbow height with shoulders relaxed, using chair height, a tray or a lower desk.
                2. The keyboard's rear feet folded flat so wrists stay straight.
                3. The mouse right beside the keyboard, at the same height and within easy reach.
                4. Elbows resting close to the body at roughly a right angle while typing.

                ## Notes
                Raising the chair to meet a high desk is fine, as long as a footrest then supports your feet.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Keyboard and mouse sit level, side by side and at or just below your seated elbow height, with the method used noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Compare your seated elbow height with the height of the keyboard's home row"
                - "Fold the keyboard feet flat and check your wrists stay straight"
                - "Move the mouse right beside the keyboard at the same height"
                - "Order a keyboard tray or footrest if the desk height cannot be matched"
            - name: Laptop stand and separate keyboard set-up
              description: |-
                ## Purpose
                A laptop on its own forces a choice between a screen too low for your neck and a keyboard too high for your wrists, and many people work that way all day. A stand that lifts the screen to eye height, plus a separate keyboard and mouse, turns the same laptop into a proper workstation for the price of a few accessories.

                ## Milestones
                1. A laptop stand in place that raises the screen top to seated eye height.
                2. A full-size or compact external keyboard and a mouse connected.
                3. The laptop's own keyboard no longer used for sessions longer than half an hour.
                4. Cables tidied so the set-up survives being unplugged and replugged each day.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The laptop sits on a stand at eye height, with a separate keyboard and mouse used for every session over thirty minutes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Measure how far the laptop screen needs to rise to reach eye level"
                - "Choose a stand that reaches that height and folds if you travel"
                - "Buy or borrow a separate keyboard and mouse"
                - "Label the cables so the set-up reconnects in under a minute"
            - name: Desk lighting and screen glare check
              description: |-
                ## Purpose
                Glare from a window behind you, or a bright ceiling light reflected in the screen, makes eyes work harder and pushes people into hunched, squinting positions. Placing the desk side-on to windows, matching screen brightness to the room and adding a task lamp for paper work fixes most screen eye-strain complaints that are not about eyesight itself.

                ## Milestones
                1. The desk turned so windows sit to the side of the screen rather than behind or in front of it.
                2. Reflections on the switched-off screen checked at the times of day you usually work.
                3. Screen brightness set to match the room rather than glow above it.
                4. A task lamp or blind added where daylight or overhead lights still cause glare.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The screen shows no visible reflections when switched off during your usual working hours, with brightness matched to the room."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Switch the screen off and look for reflections at your usual working times"
                - "Turn or move the desk so windows sit to the side of the screen"
                - "Lower screen brightness until it matches a sheet of white paper beside it"
                - "Recheck glare as the sun angle shifts with the seasons @recurring(quarterly)"
            - name: Repetitive strain warning signs card
              description: |-
                ## Purpose
                Aches at the end of a long day are common, but numbness, tingling that wakes you at night, weakness or dropping things, and pain that lingers after rest are signs to get checked rather than tackle with a new mouse. A short card listing the signs your health service names, and who to contact, means you act early instead of adjusting equipment for months.

                ## Milestones
                1. Your health service's guidance on repetitive strain and nerve symptoms in the hand and arm found.
                2. A one-page card listing the signs that mean booking an appointment, and the contact to use.
                3. The card saved on your phone and pinned near the desk.
                4. Any sign you already have raised with a clinician.

                ## Notes
                This card organises your health service's advice so you know when to ask. It does not diagnose, and equipment changes are not a substitute for an assessment.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card based on your health service's guidance lists the signs that need a clinician and is saved on your phone and kept at the desk."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's guidance on repetitive strain symptoms"
                - "Write the signs that need an appointment and the contact on one card"
                - "Book an appointment if you already notice any sign on the card"
                - "Reread the card and update the contact details @recurring(yearly)"
            - name: Requesting a workstation assessment at work
              description: |-
                ## Purpose
                Many employers have a duty to assess the desks of staff who use screens daily, often including home workers, and some will fund equipment or an eye test as a result. Asking formally, with your discomfort baseline and measurements in hand, turns a vague complaint into a recorded request the employer has to answer.

                ## Milestones
                1. Your employer's policy on workstation or screen equipment assessments found, including any home-working rules.
                2. A written request sent to your manager, HR or health and safety contact.
                3. The assessment completed and its recommendations received in writing.
                4. Agreed equipment or changes tracked until they arrive.

                ## Notes
                In the UK, for example, this falls under the display screen equipment regulations; other countries have similar duties under different names. Keep copies of every email.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A workstation assessment has been carried out and its written recommendations are filed, with each agreed item marked delivered or pending."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search the staff intranet or handbook for the workstation assessment policy"
                - "Email your manager asking for an assessment and attach your baseline"
                - "File the written recommendations once the assessment is done"
                - "Chase any agreed equipment that has not arrived after four weeks"
            - name: Micro-break reminders through the working day
              description: |-
                ## Purpose
                Static load, holding the same position for an hour, causes more desk discomfort than any single bad angle. A reminder every 30 to 45 minutes to stand, roll the shoulders and look away from the screen, kept short enough that you actually take it, breaks that load without breaking your concentration.

                ## Milestones
                1. A break reminder app or timer set to a 30 to 45 minute interval during working hours.
                2. A two-minute default break written down so there is nothing to decide when the reminder fires.
                3. Breaks ticked in a habit tracker for the first four weeks.
                4. The interval adjusted once, based on what you actually kept.

                ## Notes
                Start from the **Habit tracker** template. Set the reminder to snooze rather than dismiss during calls, so the break happens straight afterwards.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Break reminders run every working day and at least four in five reminders were acted on during the last tracked month."
                cadence: rolling
              tasks:
                - "Install a break reminder app or set a repeating timer"
                - "Write a two-minute default break on a sticky note by the screen"
                - "Stand, move and look away for two minutes at each reminder @recurring(daily)"
                - "Review the habit tracker and adjust the interval at the end of the month"
            - name: 20-20-20 eye break habit
              description: |-
                ## Purpose
                Focusing at screen distance for hours tires the eye muscles and cuts your blink rate sharply, which is why eyes feel dry and gritty by mid-afternoon. Looking at something about 6 metres (20 feet) away for 20 seconds every 20 minutes is the routine eye care professionals commonly suggest, and it only sticks when it is tied to something you already do.

                ## Milestones
                1. A distant focus point chosen: a window view, a far wall or a picture across the room.
                2. The eye break tied to an existing cue such as sending a message or finishing a code review.
                3. Four weeks of the habit tracked, with the days it slipped noted.
                4. Any eyes that stay sore or blurry despite the breaks raised with an optician.

                ## Notes
                Start from the **Habit tracker** template. This is a comfort habit, not treatment; persistent eye symptoms belong with an optician or doctor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eye breaks are tracked for at least four weeks, with weekly counts showing most working days include them."
                cadence: rolling
              tasks:
                - "Pick a distant focus point you can see from your chair"
                - "Choose an existing cue to attach the eye break to"
                - "Add the 20-20-20 habit to your habit tracker"
                - "Count the days you kept the eye breaks this week @recurring(weekly:wed)"
            - name: Sit-stand switching routine
              description: |-
                ## Purpose
                A sit-stand desk only helps if you actually change position, and standing all day brings its own problems for feet, knees and lower back. A simple rule, such as standing for the first part of each meeting block and after lunch, gives you several switches a day without having to remember them.

                ## Milestones
                1. Two or three fixed triggers chosen for switching, such as calls, after lunch or each break reminder.
                2. Height presets saved at your measured sitting and standing elbow heights.
                3. At least four position changes a day reached within two weeks.
                4. Standing time built up gradually, starting with 15 to 30 minute stretches.

                ## Notes
                Variety is the goal. Alternating often beats a long block of either sitting or standing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Height presets are saved and you switch between sitting and standing at least four times on most working days."
                cadence: rolling
              tasks:
                - "Save sitting and standing height presets on the desk controller"
                - "Choose three daily triggers that mean switching position"
                - "Switch between sitting and standing at least four times @recurring(daily)"
                - "Add five minutes to your longest standing stretch each week until it feels easy"
            - name: Friday workstation reset
              description: |-
                ## Purpose
                Settings drift: cleaners nudge the chair, someone borrows the desk, a laptop dock gets moved, and by the end of the week the set-up you measured has quietly changed. A ten-minute reset on Friday afternoon puts everything back to your written settings and clears the clutter that pushes the keyboard away from you.

                ## Milestones
                1. A one-page reset list built from your chair, screen and keyboard settings.
                2. The desk surface cleared so the keyboard sits in its marked position.
                3. Screen, keyboard and mouse wiped and cables tucked away.
                4. The reset done on most Fridays for a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written reset list exists and has been worked through on at least three of the last four Fridays."
                cadence: rolling
              tasks:
                - "Write a reset list from your recorded chair and screen settings"
                - "Mark the keyboard and screen positions on the desk with small tabs"
                - "Work through the reset list before logging off @recurring(weekly:fri)"
                - "Wipe the keyboard, mouse and screen as part of the reset"
            - name: Monthly desk discomfort check-in
              description: |-
                ## Purpose
                Once the baseline is done, a monthly score keeps the picture current without turning into daily symptom-watching. Rating the same five areas on the same day each month shows whether changes are working, catches a creeping problem before it settles in, and gives a clinician or assessor dated evidence.

                ## Milestones
                1. The same five body areas and 0 to 10 scale from the baseline reused.
                2. A monthly score entered for at least three months running.
                3. Any area that rises two points or more flagged with what changed that month.
                4. Scores compared with the baseline at each quarterly re-check.

                ## Notes
                Start from the **Metrics log** template, or add a monthly tab to your baseline log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly scores for all five areas are logged for three consecutive months, with any rise of two points annotated."
                cadence: rolling
              tasks:
                - "Add a monthly section to your discomfort log"
                - "Score neck, shoulders, wrists, eyes and lower back @recurring(monthly:12)"
                - "Note any change in equipment, workload or routine beside the scores"
                - "Flag any area that has risen two points since the baseline"
            - name: Five-minute desk mobility set
              description: |-
                ## Purpose
                Muscles held still in one posture stiffen, and a short set of movements done at the desk counters that without changing clothes. Five gentle exercises, such as chin tucks, shoulder blade squeezes, upper back extension over the chair, wrist and finger stretches and a standing hip stretch, take five minutes and fit after lunch or between meetings.

                ## Milestones
                1. Five movements chosen from a reputable source or a physiotherapist's handout.
                2. A one-page or phone picture guide kept at the desk.
                3. The set done three times a week for a month.
                4. Any movement that causes pain dropped and checked with a clinician.

                ## Notes
                Movements should feel like a gentle stretch, never sharp pain. If a physiotherapist is already treating you for pain, use their exercises instead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A five-movement guide is kept at the desk and the set has been done at least twelve times in the last month."
                cadence: rolling
              tasks:
                - "Choose five desk movements from a physiotherapy or health service source"
                - "Save a picture guide of the five movements on your phone"
                - "Do the five-minute set after lunch @recurring(weekly:mon,wed,fri)"
                - "Drop any movement that hurts and ask a clinician about it"
            - name: Meeting lengths that get you out of the chair
              description: |-
                ## Purpose
                Back-to-back hour-long calls are where whole afternoons disappear without anyone standing up. Defaulting your calendar to 25 and 50 minute meetings, taking some audio-only calls on your feet and protecting one gap in each long block builds movement into the day without needing willpower.

                ## Milestones
                1. Calendar default meeting lengths changed to 25 and 50 minutes where your tool allows it.
                2. Two recurring meetings identified that can be taken standing or audio-only.
                3. No more than two hours of unbroken meetings on a typical day.
                4. Teammates told about the change so shorter meetings are not taken as rudeness.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Default meeting lengths are shortened and a typical week shows no meeting block longer than two hours without a gap."
                cadence: rolling
              tasks:
                - "Change your calendar's default meeting length to 25 or 50 minutes"
                - "Mark two recurring calls you can take standing"
                - "Scan next week for meeting blocks longer than two hours @recurring(weekly:thu)"
                - "Add a ten-minute gap inside any block that runs over two hours"
            - name: Quarterly ergonomic re-check
              description: |-
                ## Purpose
                Bodies, chairs and jobs change: a new monitor arrives, you start wearing glasses, the chair's gas lift sinks a centimetre. Rerunning the measurement and settings checks every three months, and comparing them with your discomfort scores, keeps the set-up matched to you rather than to how things were last year.

                ## Milestones
                1. Seat, desk and screen heights remeasured against your recorded targets.
                2. Any drift corrected and the new settings recorded.
                3. The last quarter's discomfort scores compared with the baseline.
                4. One improvement chosen for the coming quarter, or a note that none is needed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated quarterly check records remeasured heights, corrected drift and one chosen improvement or a no-change note."
                cadence: cyclic
              tasks:
                - "Remeasure seat, desk and screen heights against your target note @recurring(quarterly)"
                - "Correct any drift and update the recorded settings"
                - "Compare the last three monthly discomfort scores with the baseline"
                - "Write down one change to try next quarter"
            - name: Yearly desk equipment review
              description: |-
                ## Purpose
                Chairs wear out, foam flattens, castors stick and keyboards develop dead keys, yet people keep using them years past the point where they help. A yearly look at every piece of equipment, with its age and condition, lets you budget for replacements rather than buying in a hurry after a bad week.

                ## Milestones
                1. A list of chair, desk, screens, keyboard, mouse, headset and accessories with their ages.
                2. Each item checked for wear, such as a sinking seat, wobbly arms, faded keys or a flickering screen.
                3. Replacements for the coming year ranked by their effect on comfort.
                4. A rough replacement budget noted, or a request sent to your employer.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated equipment list shows each item's age and condition, with replacements ranked and budgeted for the year ahead."
                cadence: cyclic
              tasks:
                - "List every piece of desk equipment with its approximate age"
                - "Check the chair gas lift, armrests and castors for wear"
                - "Rank replacements by how much they affect daily comfort"
                - "Run the full desk equipment review @recurring(yearly)"
            - name: Why posture variety beats perfect posture
              description: |-
                ## Purpose
                Many people still believe there is one correct way to sit and blame themselves for slouching, yet current guidance from physiotherapy bodies points to movement and variety, not a rigid upright pose, as what keeps backs and necks comfortable. A couple of hours with good sources changes how you use every other project in this area: less bracing, more changing position.

                ## Milestones
                1. Two or three reputable sources read, such as a health service page and a professional physiotherapy body's guidance.
                2. The main ideas summarised in five sentences in your own words.
                3. One belief you held about posture written down, with what replaced it.
                4. The summary shared with someone else who works at a desk.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A five-sentence summary of current posture guidance, citing at least two reputable sources, is saved in your notes."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find two reputable sources on sitting posture and movement"
                - "Read them and note the claims they agree on"
                - "Ask the agent to compare your notes with the sources and flag gaps"
                - "Write a five-sentence summary in your own words"
            - name: Lighter typing touch and wrist position
              description: |-
                ## Purpose
                Hammering keys to the bottom of their travel, and resting wrists on the desk edge while typing, both add load to forearm tendons over a long day. Learning to type with a lighter touch, hands floating and palms resting only during pauses, takes a few weeks of attention but pays off on every keyboard you will ever use.

                ## Milestones
                1. Your current habits observed: key force, wrist angle and where your wrists rest while typing.
                2. The wrist rest repositioned to support palms during pauses rather than wrists mid-typing.
                3. Two weeks of short daily practice with deliberately light key presses.
                4. Typing speed and comfort compared before and after.

                ## Notes
                Wrists bent upward or sideways while typing usually matter more than which keyboard you own.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two weeks of light-touch practice are completed, with before and after notes on wrist position and comfort."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Watch yourself type for five minutes and note wrist angle and key force"
                - "Move the wrist rest so it supports your palms during pauses"
                - "Practise ten minutes of light-touch typing each morning for two weeks"
                - "Compare comfort and speed with your starting notes"
            - name: Keyboard shortcuts that cut mouse time
              description: |-
                ## Purpose
                For many knowledge workers and engineers the mouse hand takes the worst of the strain, because every small action means reaching, gripping and clicking. Learning the twenty shortcuts you would use most in your main applications moves hundreds of daily actions back to the keyboard and spreads the load across both hands.

                ## Milestones
                1. Your three most-used applications identified.
                2. A list of the twenty shortcuts that would replace your most frequent mouse actions.
                3. Shortcuts learned two at a time, each practised until automatic.
                4. Mouse use noticeably reduced on a typical day, by your own estimate.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of twenty shortcuts for your main applications exists and at least fifteen are used without looking them up."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Note the ten mouse actions you repeat most in a working day"
                - "Find the shortcut for each in your main applications"
                - "Print a shortcut card and keep it beside the screen"
                - "Learn two new shortcuts and stop using the mouse for them @recurring(weekly:tue)"
            - name: Pointer speed, grip and mouse hand tuning
              description: |-
                ## Purpose
                Pointer speed set too slow means big arm sweeps and a tight grip, and a mouse too small for your hand makes you claw it. Tuning pointer speed so small wrist movements cross the screen, checking the mouse fits your hand and trying the other hand for part of the day are cheap changes that ease the mouse arm.

                ## Milestones
                1. Pointer speed raised until you can cross the main screen with a small hand movement.
                2. Mouse size checked against your hand length, with a better fit chosen if needed.
                3. A relaxed grip practised, with fingers resting on the buttons rather than clamping.
                4. The other hand tried for simple tasks such as scrolling and browsing for a week.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Pointer speed and mouse size are adjusted and a one-week trial of the other hand is recorded as kept or dropped."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Raise pointer speed in system settings until small movements cross the screen"
                - "Measure your hand from wrist crease to fingertip and compare mouse sizes"
                - "Use the other hand for browsing and scrolling for one week"
                - "Record whether to keep the switch for part of each day"
            - name: Display scaling and text size for comfortable reading
              description: |-
                ## Purpose
                Text that is slightly too small pulls you towards the screen, and that forward lean sits behind a lot of neck ache. Setting display scaling, default zoom and editor font size so text reads comfortably from your chosen distance, and checking contrast and refresh rate, is half an hour of settings that keeps you sitting back.

                ## Milestones
                1. Operating system display scaling set so menus read comfortably at arm's length.
                2. Browser default zoom and editor or document font size raised to match.
                3. A comfortable light or dark theme with good contrast chosen.
                4. The screen running at its native resolution and full refresh rate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Display scaling, browser zoom and editor font size are set so body text reads without leaning forward from arm's length."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Sit back at your normal distance and note any text you lean in to read"
                - "Raise display scaling until menus read comfortably"
                - "Set browser zoom and editor font size to match"
                - "Check the screen runs at native resolution and full refresh rate"
            - name: Filming yourself at work to spot posture habits
              description: |-
                ## Purpose
                Nobody can see their own posture while concentrating, and the habits that cause trouble, such as a chin poking towards the screen, a hiked mouse shoulder or legs tucked under the chair, appear twenty minutes in, not when you first sit down. A phone propped to the side filming a normal work session shows what you actually do.

                ## Milestones
                1. A twenty-minute clip recorded from the side during ordinary focused work.
                2. Three habits noted from the footage, with the time each appeared.
                3. One set-up change made for each habit, such as moving the screen or adding a footrest.
                4. A second clip filmed later and compared with the first.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two dated side-on clips are reviewed, with three habits named and one set-up change made for each."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Prop your phone side-on and film twenty minutes of focused work"
                - "Watch the clip and note three habits with the time they appear"
                - "Make one set-up change for each habit you noticed"
                - "Film a fresh clip and compare it with the last one @recurring(quarterly)"
            - name: Standing well at a standing desk
              description: |-
                ## Purpose
                Standing at a desk is not automatically better than sitting: locked knees, weight sunk into one hip, a desk set too high and hard floors in thin shoes turn it into a new source of aches. Learning how to stand, and what supports it, makes the standing part of a sit-stand routine comfortable for longer.

                ## Milestones
                1. Desk height in standing mode set to your measured standing elbow height.
                2. The screen raised with the desk so it stays at eye level, or adjusted separately.
                3. Supportive shoes or an anti-fatigue mat in use on hard floors.
                4. A habit of shifting weight and resting one foot on a low box or footrail.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Standing desk height, screen height and floor support are set, and a two-week trial of the standing habits is noted as kept."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Set the standing height to your measured standing elbow height"
                - "Check the screen is still at eye level when the desk is raised"
                - "Try an anti-fatigue mat or supportive shoes for two weeks"
                - "Place a low box under the desk to rest one foot on"
            - name: Choosing an office chair that fits your body
              description: |-
                ## Purpose
                Few purchases deserve more care than a chair you sit in for eight hours a day, yet many are bought from a photo. Shortlisting chairs whose seat height, depth and lumbar range fit your measurements, trying them for a real stretch of time and checking warranty and returns terms avoids an expensive chair that suits someone else.

                ## Milestones
                1. Your seat height and depth needs written as a short requirement list.
                2. Three chairs shortlisted, including at least one refurbished option.
                3. Each shortlisted chair sat in for at least an hour, in a showroom or on a home trial.
                4. One chair chosen, with its returns window and warranty noted.

                ## Notes
                Start from the **Purchase decision** template. Refurbished commercial chairs often offer better adjustment than new budget ones at a similar price.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chair is chosen from a scored shortlist of three, with its seat range checked against your measurements and its returns terms recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write your seat height and depth needs from your measurements"
                - "Shortlist three chairs, one of them refurbished"
                - "Book showroom visits or home trials for the shortlist"
                - "Score each chair against your requirement list before buying"
            - name: Sit-stand desk or desk converter decision
              description: |-
                ## Purpose
                Electric sit-stand desks, manual crank desks and converters that sit on an existing desk all let you change position, but they differ in stability, height range, noise and price. Comparing them against your standing elbow height, your floor space and whether you will actually switch is what stops a costly desk becoming an expensive fixed one.

                ## Milestones
                1. The height range you need written from your sitting and standing elbow measurements.
                2. One desk, one converter and one cheaper option compared on range, stability and price.
                3. A two-week standing trial done with a sturdy box or borrowed converter before spending.
                4. A decision recorded, including a decision not to buy.

                ## Notes
                Start from the **Purchase decision** template. Converters raise keyboard and screen together, which can leave the screen too low.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A sit-stand decision is recorded after a two-week standing trial, with three options compared on height range, stability and price."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the height range you need from your elbow measurements"
                - "Run a two-week standing trial using a sturdy box or borrowed converter"
                - "Compare an electric desk, a converter and a budget option"
                - "Record the decision and the reason in your purchase note"
            - name: Dual monitor layout for coding and analysis
              description: |-
                ## Purpose
                Two screens side by side with the join straight in front of you means turning your head all day. For engineers and analysts who live in editors, terminals and dashboards, deciding which screen is primary, centring it, angling the second and keeping both at the same height turns extra pixels into comfort rather than neck rotation.

                ## Milestones
                1. Time on each screen estimated for a typical day.
                2. The most-used screen centred in front of you, or the join centred if use is truly even.
                3. The secondary screen angled inward and matched in height and brightness.
                4. A window layout set so the most-used tools open on the primary screen.

                ## Notes
                A single larger or ultrawide screen can be easier on the neck than two when both get equal use.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The most-used screen is centred, the second is angled and height-matched, and a saved window layout opens the main tools on the primary."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Estimate how much of a day you spend looking at each screen"
                - "Centre the most-used screen in front of the keyboard"
                - "Angle the second screen inward and match its height"
                - "Save a window layout that opens the main tools on the primary screen"
            - name: Split or tented keyboard four-week trial
              description: |-
                ## Purpose
                Standard keyboards make you bend the wrists outward and turn the forearms flat, while a split or tented board lets hands sit at shoulder width with thumbs higher. These boards take two to four weeks to adapt to and suit some people far more than others, so a structured trial with a returnable or borrowed board beats buying on reviews.

                ## Milestones
                1. The specific discomfort you hope to ease written down, with current wrist scores.
                2. One split or tented keyboard borrowed or bought with a returns window.
                3. Four weeks of use, with typing speed and comfort noted weekly.
                4. A keep or return decision made before the returns window closes.

                ## Notes
                Expect speed to drop at first. Judge on comfort at week four, not week one.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A four-week split keyboard trial is logged weekly and ends in a keep or return decision before the returns deadline."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down which wrist or forearm discomfort you hope to ease"
                - "Borrow or buy a split keyboard with at least a 30-day returns window"
                - "Note typing speed and comfort at the end of each trial week"
                - "Decide to keep or return the keyboard before the window closes"
            - name: Vertical mouse, trackball or trackpad trial
              description: |-
                ## Purpose
                Conventional mice hold the forearm turned palm down, and for some people that twist is where the forearm ache comes from. Vertical mice, thumb or finger trackballs and large trackpads each change the load in different ways, and two weeks with one of them shows whether it helps you rather than whoever wrote the review.

                ## Milestones
                1. One alternative pointing device chosen based on where your discomfort sits.
                2. Two weeks of using it for all normal work, with the old mouse put away.
                3. Comfort and precision compared with the old mouse.
                4. A decision recorded to switch, alternate between devices or go back.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A two-week trial of one alternative pointing device ends with a recorded decision to switch, alternate or go back."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Note where your mouse arm discomfort sits: forearm, wrist or thumb"
                - "Choose a vertical mouse, trackball or trackpad to try"
                - "Put the old mouse in a drawer for two weeks"
                - "Record whether to switch, alternate or return to the old mouse"
            - name: Footrest and document holder fit
              description: |-
                ## Purpose
                Raising the chair to suit a high desk often leaves feet dangling, and reading from paper laid flat beside the keyboard twists the neck down and sideways. A footrest at the right height and a document holder placed between keyboard and screen are small, cheap items that close two common gaps in otherwise good set-ups.

                ## Milestones
                1. Feet checked for full contact with the floor at your chosen seat height.
                2. A footrest or a stable box of the right height in place if they do not reach.
                3. Paper and reference material use estimated for a typical week.
                4. A document holder placed between keyboard and screen if you copy from paper often.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Feet rest fully supported at your seat height and any regular paper work sits in line between keyboard and screen."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check whether your feet rest flat with the chair at its set height"
                - "Measure the gap and choose a footrest or box to fill it"
                - "Note how often you read from paper while typing"
                - "Place a document holder between keyboard and screen if you do"
            - name: Headset for heavy call days
              description: |-
                ## Purpose
                Holding a phone between ear and shoulder, or leaning towards a laptop microphone, through four hours of calls is a fast route to a stiff neck. A comfortable headset with a decent microphone lets you sit back, stand or move during calls, and is worth choosing for weight and fit rather than features.

                ## Milestones
                1. Daily hours on calls estimated from last week's calendar.
                2. A headset requirement list written: weight, one or two ears, wired or wireless, mute control.
                3. A headset chosen, ideally after a full call day of use.
                4. Phone calls moved to the headset or speaker so the phone never sits on your shoulder.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A headset chosen against a written requirement list is in daily use and phone calls no longer go on the shoulder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up last week's hours on calls from your calendar"
                - "Write what matters most in a headset for your call load"
                - "Try the shortlisted headset for one full call day"
                - "Pair the headset with your phone as well as your computer"
            - name: Home office equipment allowance claim
              description: |-
                ## Purpose
                Plenty of employers offer a home working allowance or equipment budget, or will supply assessed equipment directly, and some tax authorities allow relief on certain home working costs. Finding out what you are entitled to and claiming it with receipts means the chair or monitor arm you need does not come entirely out of your own pocket.

                ## Milestones
                1. Your employer's home working or equipment allowance policy found and read.
                2. Your tax authority's guidance on home working costs checked for anything that applies.
                3. A claim or equipment request submitted with quotes or receipts.
                4. The outcome recorded and receipts filed together.

                ## Notes
                Rules differ by employer and country. Ask HR or your tax authority rather than relying on what a colleague claimed.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An equipment allowance claim or request is submitted with receipts attached and its outcome is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search the staff handbook for home working or equipment allowances"
                - "Check your tax authority's guidance on home working costs"
                - "Submit the claim or request with quotes or receipts attached"
                - "Check the remaining allowance before the budget year ends @recurring(yearly)"
            - name: First fortnight at a new desk in a new job
              description: |-
                ## Purpose
                Starting a new job is when you are least likely to complain about the chair and most likely to set habits that last for years. Bringing your measurements, adjusting the desk in the first day or two and asking about workstation assessments during onboarding gets the set-up right before the backlog arrives.

                ## Milestones
                1. Your measurement note and chair settings with you on the first day.
                2. Chair, screen and keyboard adjusted within the first two days.
                3. The workstation assessment process and equipment request route found during onboarding.
                4. Any missing equipment requested in writing before the end of week two.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within fourteen days of starting, the desk is adjusted to your measurements and any missing equipment is requested in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save your measurement note and chair settings to your phone"
                - "Adjust chair, screen and keyboard in your first two days"
                - "Ask your onboarding contact how workstation assessments work"
                - "Email any equipment request before the end of your second week"
            - name: Desk move or office relocation day
              description: |-
                ## Purpose
                Office moves, team reshuffles and new floors scatter carefully set-up equipment, and people often work on someone else's settings for months afterwards. Photographing your settings before the move and blocking half an hour on the first day in the new spot means the set-up survives the move intact.

                ## Milestones
                1. Chair, screen and desk settings photographed and labelled before packing.
                2. Personal equipment such as keyboard, mouse and footrest labelled and packed together.
                3. The new desk's position checked for windows and glare.
                4. The full set-up restored within the first day in the new location.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your workstation is restored to its recorded settings within one working day of the move, checked against the before photos."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Photograph every chair lever, screen height and desk height before the move"
                - "Pack and label your keyboard, mouse and accessories together"
                - "Check the new spot for window glare before setting up"
                - "Block thirty minutes on day one to restore the set-up"
            - name: Crunch week without wrecking your wrists
              description: |-
                ## Purpose
                Release weeks, quarter-end closes and marking seasons are when people drop breaks, work twelve-hour days and end up with forearm pain that lingers for months. Planning the week in advance, with breaks locked in, the evening laptop kept off the sofa and a hard stop agreed, protects your hands when the pressure is highest.

                ## Milestones
                1. The crunch week dates and expected hours written down.
                2. Break reminders and a daily hard stop set before the week starts.
                3. Late work moved to the proper desk rather than the sofa or bed.
                4. A short note written after the week on what held and what slipped.

                ## Notes
                If numbness or tingling appears during the week, check your warning signs card rather than pushing on.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A crunch week runs with break reminders and a daily hard stop set in advance, followed by a written note on what held."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark the crunch week dates and expected hours in your calendar"
                - "Set break reminders and a daily finish time before the week starts"
                - "Agree with whoever you live with that late work happens at the desk"
                - "Write a short note after the week on what held and what slipped"
            - name: Portable workstation for travel and conferences
              description: |-
                ## Purpose
                Hotel desks, trains and conference tables mean days hunched over a laptop at the wrong height. A small kit that lives in your bag, a folding laptop stand, a compact keyboard and a travel mouse, turns any table into a reasonable workstation and costs less than a week of sore neck.

                ## Milestones
                1. A folding stand, compact keyboard and travel mouse chosen that fit your usual bag.
                2. The kit set up and tested at home in under three minutes.
                3. A short checklist for adjusting hotel chairs and desks saved on your phone.
                4. The kit used on your next trip and anything missing noted.

                ## Notes
                Start from the **Trip** template and add the kit to its packing list.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A portable stand, keyboard and mouse fit in your bag, set up in under three minutes and are used on the next trip."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a folding laptop stand that fits your usual bag"
                - "Add a compact keyboard and travel mouse to the kit"
                - "Time a full set-up on your kitchen table"
                - "Add the kit to the packing list in your trip template"
            - name: Back to the office after a long stretch at home
              description: |-
                ## Purpose
                After months working from a home set-up you have tuned, returning to an office desk you no longer recognise brings old aches back fast. Planning the first week back, with your settings, your kit and a list of what the office desk needs, stops the home progress from undoing itself.

                ## Milestones
                1. Office desk, chair and screen details checked before the first day back.
                2. Your home settings brought in as a note and applied on day one.
                3. Gaps such as a missing laptop stand or monitor raised with facilities.
                4. Discomfort scores for the first two weeks compared with recent home weeks.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The office desk is set to your recorded settings in week one and any equipment gaps are raised with facilities in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask facilities what equipment the office desks now have"
                - "Apply your saved chair and screen settings on the first day back"
                - "Email facilities about any missing equipment"
                - "Compare the first two weeks of discomfort scores with home weeks"
            - name: Hot-desk kit and two-minute set-up routine
              description: |-
                ## Purpose
                Hybrid workers who book a different desk each visit lose time and comfort readjusting someone else's chair and screen, so most simply do not bother. A fixed routine and a small kit, with your seat height on a card, a portable keyboard and mouse and a laptop stand, make each new desk yours in two minutes.

                ## Milestones
                1. A card with your seat height, screen height and chair settings kept in your bag.
                2. A personal kit of keyboard, mouse and stand that travels with you.
                3. A two-minute set-up checklist practised until it is automatic.
                4. Preferred desks noted where the furniture fits you best.

                ## Notes
                Start from the **Operational checklist** template for the set-up routine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A settings card, personal kit and two-minute checklist are used on every office day, with preferred desks listed."
                cadence: rolling
              tasks:
                - "Write your seat height and chair settings on a card for your bag"
                - "Build a two-minute set-up checklist from the operational checklist template"
                - "Note which bookable desks fit you best after each office day"
                - "Check the kit bag for cables and spare batteries @recurring(monthly:3)"
            - name: Kitchen table and small-space home office
              description: |-
                ## Purpose
                Lots of people work from a kitchen table, a sofa arm or a corner of the bedroom because there is nowhere else, often around children or flatmates. A set-up that packs into one box, with a cushion to raise the seat, a stand and a separate keyboard, makes a shared table workable without claiming a whole room.

                ## Milestones
                1. The best available spot chosen for light, table height and quiet.
                2. A firm cushion used to bring elbows level with the table.
                3. A packable kit of stand, keyboard, mouse and footrest kept in one box.
                4. Set-up and pack-away timed at under five minutes each.

                ## Notes
                A dining chair raised with a cushion plus a box under the feet is a genuine fix, not a compromise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packable kit and chosen spot let you set up and clear a shared table in under five minutes each way."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick the spot at home with the best light and table height"
                - "Raise the chair with a firm cushion until elbows meet the table"
                - "Pack the stand, keyboard, mouse and footrest into one box"
                - "Time set-up and pack-away and remove anything slowing them down"
            - name: Desk work through pregnancy
              description: |-
                ## Purpose
                As pregnancy progresses, a growing bump pushes you further from the keyboard, the lower back works harder and long stretches of sitting become uncomfortable. Planning the desk changes month by month, with your midwife or doctor and your employer in the loop, keeps desk work manageable until leave starts.

                ## Milestones
                1. Your employer told in time for a pregnancy workstation risk assessment where that applies.
                2. Chair and desk adjusted so the keyboard stays within easy reach as the bump grows.
                3. More frequent breaks and position changes agreed with your manager.
                4. Any new back, pelvic or wrist symptoms raised with your midwife or doctor.

                ## Notes
                Your midwife or doctor is the right person for symptoms. This project organises the desk and the conversations around it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A pregnancy workstation assessment is done or requested, with agreed adjustments and break arrangements confirmed in writing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask HR how the workplace handles pregnancy workstation assessments"
                - "Agree extra breaks and position changes with your manager"
                - "Readjust chair height and keyboard distance for the growing bump @recurring(monthly:16)"
                - "Note new back, pelvic or wrist symptoms for your next antenatal appointment"
            - name: Varifocal wearers and monitor height
              description: |-
                ## Purpose
                Varifocal and bifocal lenses put the reading zone at the bottom of the lens, so a screen at standard height forces the head back to read it, often for hours. Lowering the screen, bringing it closer, or asking an optician about lenses made for screen distance can end the chin-up neck strain many people put down to age.

                ## Milestones
                1. Head position checked while reading the screen through your current lenses.
                2. The screen lowered and tilted back until you can read without lifting the chin.
                3. Your eye to screen distance measured and taken to your next optician appointment.
                4. The optician's view on screen-distance lenses recorded.

                ## Notes
                Booking eye tests and managing glasses belong with eye care; this project matches the screen to the lenses you already wear.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The screen sits low enough to read through your lenses without tilting your head back, and your screen distance is recorded for the optician."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Notice whether you tilt your head back to read the screen"
                - "Lower the screen and tilt it back until your chin stays level"
                - "Measure your eye to screen distance in centimetres"
                - "Ask your optician about lenses for that distance at your next test"
            - name: Desk fit for very tall or very short bodies
              description: |-
                ## Purpose
                Standard desks and chairs are built for the middle of the population, so people well above or below average height end up hunched over a low desk or perched on a high chair with feet dangling. Working out exactly which items cannot reach your measurements, and replacing only those, avoids a full refit.

                ## Milestones
                1. Each item compared with your target heights: chair, desk, screen and keyboard.
                2. The items that cannot reach your targets listed.
                3. A fix chosen for each, such as desk risers, a taller or shorter gas lift or a keyboard tray.
                4. The changed set-up checked against your measurements.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every item that cannot reach your target heights has a chosen fix, and the finished set-up meets your measurements."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List chair, desk, screen and keyboard heights next to your target heights"
                - "Mark each item that cannot reach its target"
                - "Ask suppliers about tall or short gas lifts and desk risers"
                - "Recheck the full set-up once the fixes arrive"
            - name: Setting up a child's or student's study desk
              description: |-
                ## Purpose
                Children and students now spend hours on laptops and tablets for homework, usually at furniture built for adults. Setting up their desk with a footrest, a raised screen and a few break habits, and adjusting it as they grow, passes on what you have learned before their own aches begin.

                ## Milestones
                1. The young person measured for seat, desk and screen heights.
                2. Chair height and footrest set so feet are supported and elbows meet the desk.
                3. Laptop or tablet raised on a stand with a separate keyboard where possible.
                4. A simple break rule agreed with them, such as moving between homework subjects.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "The young person's desk is set to their measurements with screen raised and feet supported, and a break rule they agreed to is in place."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Measure the young person's seated elbow and eye height"
                - "Set the chair and footrest so their feet and elbows are supported"
                - "Raise their laptop or tablet on a stand with a separate keyboard"
                - "Readjust their chair and screen as they grow @recurring(quarterly)"
            - name: Remote team desk comfort check-in for managers
              description: |-
                ## Purpose
                Managers of remote and hybrid teams rarely see how their people actually work: on sofas, on bare laptops, on chairs bought as a stopgap years ago. A light, private check-in that points people to the assessment process and equipment budget catches problems before they turn into absence, without managers prying into health.

                ## Milestones
                1. The company's assessment process and equipment budget confirmed with HR.
                2. A short message sent to the team explaining how to request an assessment or equipment.
                3. An optional comfort question added to one-to-ones or a monthly team pulse.
                4. Requests tracked until equipment arrives, without recording health details.

                ## Notes
                Keep it about equipment and process. Health details belong with occupational health, not in a manager's notes.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every team member has been sent the assessment and equipment process, and open equipment requests are tracked to delivery."
                cadence: rolling
              tasks:
                - "Confirm the assessment process and equipment budget with HR"
                - "Send the team a short note on how to request an assessment or equipment"
                - "Ask an optional desk comfort question in the team pulse @recurring(monthly:20)"
                - "Track open equipment requests until each one arrives"
            - name: Keyboard remapping and layers to cut finger travel
              description: |-
                ## Purpose
                Engineers and heavy keyboard users stretch their little fingers thousands of times a day for Ctrl, Shift, brackets and arrow keys. Remapping Caps Lock, adding a layer that puts symbols and navigation under the home row, or using programmable keyboard firmware cuts that reach, and it is one of the most effective hand-strain changes people rarely try.

                ## Milestones
                1. The keys you stretch for most identified from a day of paying attention.
                2. One simple remap in daily use, such as Caps Lock to Ctrl or Escape.
                3. A navigation and symbol layer built and practised for two weeks.
                4. The layout files backed up and documented so they can be restored on a new machine.

                ## Notes
                Change one thing at a time. Large layout changes all at once are frustrating and often abandoned.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "At least one remap and one extra layer are in daily use, with the layout files backed up and documented."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Note the keys your little fingers stretch for most in a day"
                - "Remap Caps Lock to Ctrl or Escape in system settings or a remapping tool"
                - "Build a navigation and symbol layer and practise it for two weeks"
                - "Back up and date the keyboard layout files @recurring(quarterly)"
            - name: Voice dictation and voice coding for flare days
              description: |-
                ## Purpose
                On days when hands or forearms are sore, being able to dictate emails, documents and even code keeps work moving while the painful part rests. Voice tools take practice to use well, so learning them on good days means they are ready when you need them instead of adding frustration to a bad one.

                ## Milestones
                1. Built-in dictation on your computer and phone set up and tested.
                2. Ten emails or documents drafted by voice to build fluency.
                3. For engineers, a voice coding or voice control tool tried on a small real task.
                4. A flare day plan written: which tasks move to voice and which wait.

                ## Notes
                Practise in a quiet room first. Accuracy improves a lot once you learn to speak punctuation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Dictation is set up, ten pieces of work have been drafted by voice and a written flare day plan lists which tasks move to voice."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Turn on built-in dictation on your computer and phone"
                - "Draft your next ten emails or documents by voice"
                - "Try a voice coding or voice control tool on one small task"
                - "Write a one-page flare day plan of what moves to voice"
            - name: Scoring your workstation with an office strain checklist
              description: |-
                ## Purpose
                Ergonomists use structured checklists, such as the Rapid Office Strain Assessment, to score the chair, screen, phone, keyboard and mouse against set criteria. Scoring your own desk with a published checklist gives a number to compare before and after changes, and a clear summary to take to an employer or assessor.

                ## Milestones
                1. A published office ergonomics checklist and its scoring guide found.
                2. Your workstation scored section by section, with a photo for each.
                3. The worst-scoring sections ranked as priorities.
                4. A rescore after changes showing the before and after numbers.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Your workstation has dated before and after scores from a published office ergonomics checklist, with photos and ranked priorities."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find a published office ergonomics checklist with a scoring guide"
                - "Score each section of your workstation and photograph it"
                - "Ask the agent to turn your scores and photos into a one-page summary"
                - "Rescore the workstation after making the top three changes"
            - name: Evening gaming and hobby screen set-up
              description: |-
                ## Purpose
                For people who work at a screen all day and then game, stream, build side projects or edit photos in the evening, the second desk often gets none of the care the first did. Counting total screen hours and setting up the hobby desk, chair and controller or mouse by the same rules protects the same wrists and neck.

                ## Milestones
                1. Total daily screen hours estimated, work plus evenings and weekends.
                2. The hobby desk, chair and screen checked against your measurements.
                3. Gaming mouse, controller or drawing tablet position adjusted to keep wrists neutral.
                4. An evening break rule set, such as standing between matches or every hour.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The evening set-up meets your measured heights and an evening break rule is written down and in use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up your work and evening screen hours for one typical week"
                - "Check the hobby chair, desk and screen against your measurements"
                - "Adjust the mouse, controller or tablet so wrists stay straight"
                - "Set a rule to stand up between matches or sessions"
            - name: Two-year workstation and symptom trend review
              description: |-
                ## Purpose
                After two years of baseline, monthly scores, re-checks and equipment changes, you hold more evidence about your own desk than most assessors ever see. Reviewing it end to end shows which changes helped, which made no difference and what to keep doing, and gives a clinician or employer a clear history if symptoms ever need investigating.

                ## Milestones
                1. All discomfort scores, re-check notes and equipment changes gathered in one place.
                2. Score trends for each body area set against the dates of changes.
                3. A list of changes that helped, did nothing or made things worse.
                4. A one-page summary of the set-up and habits worth keeping.
              priority: medium
              deadlineOffsetDays: 730
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page two-year summary links score trends to dated changes and lists what helped, what did nothing and what to keep."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Gather all discomfort logs, re-check notes and equipment receipts"
                - "Write a short summary of scores and changes each quarter @recurring(quarterly)"
                - "Ask the agent to chart score trends against the dates of changes"
                - "Write the one-page summary of what to keep doing"
---

# Desk Posture & Ergonomics

This area is for anyone who spends long hours at a desk, written with knowledge workers and engineers in mind, who would rather fix the set-up than live with stiff necks, sore wrists and tired eyes. It starts with a discomfort baseline, your own body measurements and the core chair, screen and keyboard adjustments, then moves through the routines that keep a desk comfortable, the skills and equipment decisions that come next, office moves and crunch weeks, set-ups for hot-deskers, small homes, pregnancy and teams, and finally specialist work such as keyboard remapping and voice coding.

The recurring rhythm is deliberately light: micro-breaks and sit-stand switches through the day, a Friday desk reset, a monthly discomfort score, a quarterly re-check of every measurement and a yearly equipment review. The Metrics log, Habit tracker, Purchase decision, Operational checklist and Trip templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
