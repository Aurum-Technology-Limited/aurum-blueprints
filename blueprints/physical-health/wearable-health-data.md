---
id: physical-health.wearable-health-data
name: Wearable Health Data Tracking
description: "Smartwatch, scale, cuff and sensor readings you can trust: devices chosen and checked, one data hub, weekly and monthly trend reviews, and clear summaries worth showing your doctor."
category: personal
version: 1.0.0
tags: [physical-health, wearable-health-data, everyone, knowledge-worker, smartwatch, smart-scale, health-data, trends]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - sleep-review
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Wearable Health Data Tracking
          description: "Using smartwatches, blood pressure cuffs, glucose monitors and smart scales sensibly, turning raw readings into trends worth showing a doctor."
          projects:
            - name: Inventory of health devices, apps and accounts
              description: |-
                ## Purpose
                Most people own more health tracking than they realise: a watch, a phone counting steps, an old fitness band in a drawer, a scale syncing to an app they deleted, and three accounts holding overlapping data. Listing every device, app and account in one place shows where your history actually lives and which pieces are still collecting anything useful.

                ## Milestones
                1. Every wearable, scale, cuff and sensor in the house listed with its brand, model and the app it syncs to.
                2. Each health app on your phone listed with the account email it uses.
                3. Devices that are dead, unused or no longer supported marked for retirement.
                4. The place each type of reading (heart rate, weight, blood pressure, sleep) currently ends up written next to it.

                ## Notes
                Include the phone itself. Its built-in step and walking data often holds the longest unbroken record you have.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single list of every health device, app and account in use, with the destination of each reading type recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect every device in the house that measures anything about your body"
                - "List each health app on your phone with the account it signs in with"
                - "Note which app each type of reading ends up in"
                - "Mark devices you have not used in six months for retirement"
            - name: Three health questions your devices should answer
              description: |-
                ## Purpose
                Trackers produce dozens of numbers a day, and without a question attached they become a scoreboard you check out of habit. Writing down two or three specific questions, such as whether your resting heart rate has crept up since a job change, or whether your weight trend matches what your clinician wants to see, decides which metrics deserve attention and which can be hidden.

                ## Milestones
                1. Two or three questions written, each tied to a real concern or a clinician's request.
                2. The one or two metrics that would answer each question named beside it.
                3. Metrics that answer none of the questions hidden from your main watch face or dashboard.
                4. The questions saved where you will see them at each monthly review.

                ## Notes
                A good question has a time frame and a decision attached. 'Is my average sleep under six hours on work nights, and should I raise it with my doctor?' beats 'Am I sleeping well?'
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three written health questions, each mapped to the specific metrics that answer it, are saved in your health notes."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the worries or clinician requests behind your tracking"
                - "Turn each one into a question with a time frame"
                - "Name the metric that would answer each question"
                - "Hide the dashboard tiles that answer none of your questions"
            - name: Choosing a smartwatch or band for your questions
              description: |-
                ## Purpose
                Watches and bands differ less in their sensors than in their software, battery life and how easily data leaves the device. Choosing against your written questions, rather than the longest feature list, avoids paying for a temperature sensor you will never look at, or buying a model whose data is locked inside one app.

                ## Milestones
                1. A shortlist of three devices, each scored on battery life, overnight comfort, export options and the metrics your questions need.
                2. Independent accuracy testing for heart rate and sleep looked up for each shortlisted model.
                3. Subscription costs over three years added to each purchase price.
                4. A device chosen, or a decision recorded to keep using what you have.

                ## Notes
                Start from the **Purchase decision** template. Battery life decides whether a device gets worn at night, and a watch that charges every night cannot tell you anything about sleep.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A device choice, or a decision to keep the current one, recorded with the scores and three-year cost behind it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Shortlist three watches or bands that track the metrics your questions need"
                - "Look up independent accuracy reviews for heart rate and sleep on each"
                - "Add three years of subscription fees to each price"
                - "Check that each model can export your data as a standard file"
                - "Record your choice and the reasons on the purchase decision page"
            - name: Smart scale choice and first weigh-in setup
              description: |-
                ## Purpose
                Smart scales weigh accurately enough for trends, but their body fat and muscle figures swing with hydration, so the features that matter are user profiles, reliable syncing and a stable reading on your floor. Choosing and placing the scale well once avoids months of readings that jump for reasons unrelated to your body.

                ## Milestones
                1. A scale chosen that supports separate user profiles and syncs to your phone's health store.
                2. The scale placed on a hard, level floor where it will stay.
                3. Your profile set up with height, age and the right measurement mode.
                4. The scale checked with a known load, such as two full water containers, and the result noted.

                ## Notes
                Carpet and uneven tiles are the commonest cause of readings that wander by a kilo from one day to the next.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A smart scale on a hard level floor, syncing under your own profile, with a known-load check recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your current scale supports separate profiles and syncing"
                - "Choose a hard, level spot for the scale and leave it there"
                - "Set up your profile with height, age and measurement mode"
                - "Weigh a known load on the scale and note how close it reads"
            - name: Single health data hub on your phone
              description: |-
                ## Purpose
                Phones now carry a central health store (Apple Health and Health Connect are two examples) that can pull from your watch, scale, cuff and sensors so every reading sits on one timeline. Connecting each device to it, and choosing which source wins when two record the same thing, ends the hunt across four apps before an appointment.

                ## Milestones
                1. Each device app connected to the phone's central health store, writing only its own data.
                2. A preferred source chosen for steps, heart rate, sleep and weight where two devices overlap.
                3. A week of readings checked on the central timeline with no gaps or doubled counts.
                4. The hub settings and source order written into your device inventory.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active device writes into one phone health store, with a preferred source set for each overlapping metric and a gap-free week confirmed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open your phone's health app and list which device apps already write to it"
                - "Connect each remaining device app to the central health store"
                - "Set the preferred data source for steps, heart rate and sleep"
                - "Check one week on the central timeline for gaps and doubled counts"
            - name: Accuracy check against clinic measurements
              description: |-
                ## Purpose
                A home cuff, scale or watch can be consistently a few points out, and nobody notices until a clinician questions a trend. Checking each device against a clinic reading, a pharmacy scale or a manually counted pulse tells you how far it can be trusted and whether its numbers carry a known offset.

                ## Milestones
                1. Your home blood pressure cuff compared with the clinic's reading on the same visit.
                2. Your watch heart rate compared with a manually counted resting pulse on three occasions.
                3. Your smart scale compared with a clinic or pharmacy scale on the same morning.
                4. Each device's typical difference written in the inventory, with any device that is clearly off replaced or retired.

                ## Notes
                Ask the nurse or pharmacist before measuring. Most are happy to take a reading with your cuff alongside theirs.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each device has a recorded comparison against a clinic or manual reference, with its typical difference written in your inventory."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Take your cuff to your next appointment and ask for a side-by-side reading"
                - "Count your pulse for a full minute while the watch measures, on three days"
                - "Weigh yourself on a pharmacy scale and your own scale on the same morning"
                - "Write each device's typical difference in your inventory"
            - name: Thirty-day personal baseline of core metrics
              description: |-
                ## Purpose
                Population norms printed in apps say little about you; what matters is how today compares with your own usual range. Thirty ordinary days of resting heart rate, sleep duration, weight and any cuff readings, taken without trying to change anything, give you the reference every later trend is measured against.

                ## Milestones
                1. Thirty days of readings collected with the device worn day and night.
                2. The average and normal range for resting heart rate, sleep duration and weight worked out.
                3. Unusual days (illness, travel, heavy drinking) marked and left out of the range.
                4. The baseline saved with the dates it covers, ready to compare against.

                ## Notes
                Start from the **Metrics log** template. Pick a month without planned travel or a big work deadline so the baseline reflects ordinary life.
              priority: high
              deadlineOffsetDays: 40
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated baseline showing your own average and normal range for at least three core metrics, built from thirty days of readings."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a thirty-day window with no planned travel or deadlines"
                - "Wear the device day and night for the whole window"
                - "Mark illness, travel and late nights as they happen"
                - "Work out the average and usual range for each core metric"
                - "Save the baseline with its start and end dates in a metrics log"
            - name: Privacy settings audit for health apps
              description: |-
                ## Purpose
                Health apps routinely share data with research programmes, partner apps, insurers' wellness schemes and friends' leaderboards, often through settings switched on at sign-up. An hour going through each app's sharing, location and third-party connections shows who can see your heart rate and where you run, and closes anything you did not mean to allow.

                ## Milestones
                1. Every health app's sharing, social and research settings reviewed.
                2. Public activity maps and profiles set to private, with a privacy zone around your home.
                3. Third-party connections you no longer use revoked.
                4. Two-factor sign-in switched on for each health account that offers it.

                ## Notes
                Route-mapping apps can reveal where you live from where your runs start. Most offer a privacy zone around chosen addresses.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every health app's sharing settings reviewed, unused third-party connections revoked and two-factor sign-in on for each account that offers it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open the sharing and research settings in each health app"
                - "Set a privacy zone around home and work in route-mapping apps"
                - "Revoke third-party connections you no longer use"
                - "Switch on two-factor sign-in for each health account"
                - "Recheck sharing permissions after the year's major app updates @recurring(yearly)"
            - name: Alert and notification settings that earn their buzz
              description: |-
                ## Purpose
                A watch that buzzes for every stand reminder and closed ring trains you to ignore it, which matters on the day it flags a genuinely unusual heart rhythm. Keeping the few alerts with real weight (irregular rhythm, high or low heart rate, falls) and silencing the motivational noise makes the remaining notifications worth reading.

                ## Milestones
                1. Every health notification your devices can send listed and sorted into keep or silence.
                2. Irregular rhythm, heart rate and fall alerts switched on where your device offers them.
                3. Motivational nudges and badges switched off or moved to a weekly digest.
                4. A note made of any alert you were unsure about, to ask your clinician.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Health notifications sorted into kept and silenced, with rhythm, heart rate and fall alerts confirmed on where available."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every health notification your watch and apps send"
                - "Switch on irregular rhythm and heart rate alerts if your device offers them"
                - "Silence badges, streaks and stand reminders you ignore"
                - "Review which notifications you dismissed without reading @recurring(quarterly)"
            - name: House rules for taking measurements
              description: |-
                ## Purpose
                Readings taken at random times are mostly a record of when you happened to measure: weight after dinner, blood pressure straight after climbing the stairs. A short written set of rules (same time, same conditions, same position) makes a reading on a Tuesday comparable with one six months later.

                ## Milestones
                1. A time of day fixed for weighing, such as after waking and before eating.
                2. Rules for cuff readings written: seated, rested five minutes, arm supported, no caffeine in the previous half hour.
                3. Rules for spot checks such as blood oxygen or ECG written, including keeping still.
                4. The rules saved beside the devices where everyone who uses them can see.

                ## Notes
                Your clinician may have a preferred method, especially for blood pressure. Their method wins over any rule you write.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written measurement rules for weight, blood pressure and spot checks are kept beside the devices."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose a fixed time and condition for weighing"
                - "Write the seated rest routine you will follow before cuff readings"
                - "Ask your clinician whether they want readings taken a particular way"
                - "Print the rules and keep them next to the scale and cuff"
            - name: Sunday evening weekly trend glance
              description: |-
                ## Purpose
                Looking at daily numbers invites reaction to noise; looking once a week at seven-day averages shows direction. A five-minute Sunday check of resting heart rate, sleep and weight against your baseline catches a drift early without turning every morning into a verdict.

                ## Milestones
                1. A fixed weekly slot set for the glance.
                2. One screen or widget showing the seven-day averages you care about.
                3. A one-line note recorded each week: steady, drifting up or drifting down.
                4. Twelve consecutive weekly notes completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly notes recorded, each comparing seven-day averages with your baseline."
                cadence: rolling
              tasks:
                - "Arrange one screen showing seven-day averages for your chosen metrics"
                - "Compare this week's averages with your baseline @recurring(weekly:sun)"
                - "Write one line noting whether each metric is steady or drifting"
                - "Carry any drift lasting three weeks into the monthly summary"
            - name: Monthly one-page health trend summary
              description: |-
                ## Purpose
                Once a month is often enough to see real change and rare enough to stay interesting. Writing a single page each month (averages, ranges, anything unusual and its likely cause) builds a record a doctor can scan in a minute, instead of a phone full of charts nobody can find later.

                ## Milestones
                1. A one-page layout with the same metrics in the same order every month.
                2. The first monthly page completed with averages, ranges and notes.
                3. Anything outside your normal range for two weeks or more flagged for your clinician.
                4. Six monthly pages saved in one folder.

                ## Notes
                The agent can draft the page from your exported numbers, but check every figure against the app before saving it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Six consecutive monthly summary pages saved in one folder, each with averages, ranges and flagged items."
                cadence: rolling
              tasks:
                - "Set up a one-page summary layout with your chosen metrics"
                - "Ask the agent to draft this month's page from your exported averages @recurring(monthly:3)"
                - "Check each drafted figure against the app before saving"
                - "Flag anything outside your range for two weeks or more"
            - name: Charging routine that keeps nights recorded
              description: |-
                ## Purpose
                Missing nights and blank mornings usually come from a flat battery, not a faulty device. Tying the charge to a fixed daily moment, such as showering or the first coffee, keeps the watch on your wrist overnight when sleep and resting heart rate are measured.

                ## Milestones
                1. A daily charging moment chosen that fits your morning or evening.
                2. A charger placed where that moment happens.
                3. Fewer than two missed nights a month, checked in the app.
                4. A spare charging cable packed in your travel bag.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fewer than two nights a month are missing from your sleep record, checked over three months."
                cadence: rolling
              tasks:
                - "Choose the daily moment when the watch goes on charge"
                - "Put a charger where that moment happens"
                - "Charge the watch during your chosen daily moment @recurring(daily)"
                - "Pack a spare charging cable in your travel bag"
            - name: Quarterly export and backup of health data
              description: |-
                ## Purpose
                Years of readings sit on one company's servers and one phone, and both can vanish with a lost device, a closed account or a company that stops trading. Exporting a full copy every quarter to storage you control protects the long history that makes trends meaningful.

                ## Milestones
                1. The export option found in each main app and in the phone's health store.
                2. A first full export saved in two places, such as an encrypted drive and a private cloud folder.
                3. The export opened once to confirm it is readable.
                4. A quarterly export completed four times in a row.

                ## Notes
                Exports hold sensitive data. Store them encrypted or behind a password, never in a shared family folder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly exports saved in two separate locations, each opened once to confirm it is readable."
                cadence: rolling
              tasks:
                - "Find the full data export option in your phone's health store"
                - "Save the first export to an encrypted drive and a private cloud folder"
                - "Open the exported file to check it contains your history"
                - "Export and back up all health data @recurring(quarterly)"
            - name: Device care for straps, sensors and firmware
              description: |-
                ## Purpose
                Optical heart rate sensors read through skin, so a grimy sensor, a loose strap or out-of-date firmware all show up as strange numbers. Ten minutes a month cleaning, checking fit and updating removes the most common cause of readings that suddenly look wrong.

                ## Milestones
                1. Cleaning instructions for each device found and followed once.
                2. Strap fit checked: snug just above the wrist bone, not sliding.
                3. Firmware and app updates installed on every device.
                4. Cuff tubing, scale batteries and sensor windows checked for wear.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly device care completed for six consecutive months, with firmware current on every device."
                cadence: rolling
              tasks:
                - "Look up the maker's cleaning instructions for each device"
                - "Wear the watch a finger's width above the wrist bone and check it stays put"
                - "Clean sensors, update firmware and check batteries @recurring(monthly:19)"
                - "Replace a cracked strap or worn cuff tubing when you spot it"
            - name: Pre-appointment data pack for any clinician
              description: |-
                ## Purpose
                Clinicians have a few minutes and rarely want to scroll through a phone. A standard pack (the question you want answered, one page of trends, the devices used and how accurate they are) takes fifteen minutes before any appointment and makes the data part of the conversation instead of a distraction.

                ## Milestones
                1. A reusable pack layout: question, metrics, chart, device list and accuracy notes.
                2. The pack completed once for a real appointment.
                3. The clinician's response and any requests for future data recorded.
                4. The layout adjusted after its first use.

                ## Notes
                Lead with the question, not the chart. 'My resting heart rate has risen ten beats over three months, is that worth checking?' gets a better answer than a stack of graphs.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A one-page data pack used at a real appointment, with the clinician's response recorded."
                cadence: rolling
              tasks:
                - "Create a pack layout with question, trend chart and device list"
                - "Write the single question you want the clinician to answer"
                - "Print or save the pack the day before the appointment"
                - "Record what the clinician said about the data afterwards"
            - name: Yearly review of devices, apps and subscriptions
              description: |-
                ## Purpose
                Devices age, apps change owners and subscriptions renew quietly. A yearly review checks whether each device still answers your questions, whether any app has changed its privacy terms, and what the whole set costs, so the setup stays lean.

                ## Milestones
                1. Each device rated: still useful, needs replacing or can go.
                2. Every health subscription listed with its annual cost.
                3. Privacy policy changes from the past year checked for each main app.
                4. Decisions recorded and unused subscriptions cancelled.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated yearly review recording a keep, replace or retire decision for every device and subscription."
                cadence: cyclic
              tasks:
                - "List every health subscription with its yearly cost"
                - "Rate each device as useful, due for replacement or ready to retire"
                - "Check for privacy policy changes in your main apps"
                - "Run the full devices and subscriptions review @recurring(yearly)"
            - name: Context tags for illness, alcohol, travel and stress
              description: |-
                ## Purpose
                A spike in resting heart rate means one thing after a night of wine and another after three quiet days, and six months later nobody remembers which. Tagging the obvious causes in the app or a short note means unexplained changes stand out and explained ones can be set aside.

                ## Milestones
                1. A short list of tags chosen: illness, alcohol, travel, late night, hard training, stressful week.
                2. A quick way to add a tag set up, such as a widget or a notes shortcut.
                3. One month of days tagged where relevant.
                4. Unexplained spikes from the past month listed for the monthly summary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of context tags recorded, with every untagged spike listed in a monthly summary."
                cadence: rolling
              tasks:
                - "Choose six tags that cover the usual causes of odd readings"
                - "Set up a widget or shortcut that adds a tag in two taps"
                - "Review last month's untagged spikes and note any likely cause @recurring(monthly:11)"
                - "Carry still-unexplained spikes into your monthly summary"
            - name: Weekly average weight instead of daily verdicts
              description: |-
                ## Purpose
                Body weight can swing a kilo or more from day to day with salt, water and digestion, which makes a single morning reading close to meaningless. Weighing on the same two mornings each week and watching the average shows the real direction and takes the drama out of the scale.

                ## Milestones
                1. Two fixed weighing mornings chosen.
                2. The app or a log set to show a weekly or moving average.
                3. The daily figure hidden or ignored in favour of the average.
                4. Eight weeks of averages recorded.

                ## Notes
                If a clinician is managing your weight, ask how often they want readings and in what form.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly average weights recorded from fixed-morning weigh-ins."
                cadence: rolling
              tasks:
                - "Choose two fixed weighing mornings each week"
                - "Weigh in on your fixed mornings under the same conditions @recurring(weekly:mon,thu)"
                - "Switch the app view to a weekly or moving average"
                - "Record each week's average in your metrics log"
            - name: Reading heart rate variability without overreading it
              description: |-
                ## Purpose
                Heart rate variability, the small changes in time between beats, feeds many devices' readiness and stress scores, yet it varies hugely between people and with how it is measured. Learning what your device measures, when, and how much it normally swings for you stops a single low score spoiling a perfectly good day.

                ## Milestones
                1. Your device's method found: overnight average, morning spot check or all day.
                2. Your own usual range taken from the baseline month.
                3. Three things that lower it for you identified from tagged days.
                4. A personal rule written for when a low score matters, such as several days below range together.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note of your device's HRV method, your usual range and a personal rule for when a low reading deserves attention."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find out how and when your device measures heart rate variability"
                - "Read one plain-language explainer from a sports science or medical source"
                - "Take your usual range from the baseline month"
                - "Write a rule for when a low score is worth acting on"
            - name: What resting heart rate trends can and cannot show
              description: |-
                ## Purpose
                Resting heart rate is one of the more reliable wrist measurements, and it moves with fitness, illness, alcohol, poor sleep and some medicines. Knowing how your device defines it, and how much change is normal noise for you, lets you spot the rise that comes before a cold or a sustained climb worth mentioning to your doctor.

                ## Milestones
                1. Your device's definition found: overnight lowest, daytime at rest or calculated.
                2. Your normal day-to-day variation measured from the baseline.
                3. Past illnesses or hard weeks matched against the resting heart rate chart.
                4. A personal trigger set for when a sustained rise goes into the monthly summary.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-paragraph note describing your device's resting heart rate method, your normal variation and the sustained change you will report."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look up how your device defines resting heart rate"
                - "Find your normal day-to-day variation in the baseline data"
                - "Match past illnesses to the resting heart rate chart"
                - "Write down the sustained change you would bring to your doctor"
            - name: Limits of wrist-based sleep staging
              description: |-
                ## Purpose
                Wrist devices estimate light, deep and REM sleep from movement and heart rate, and they are far better at total sleep time than at stages. Understanding where they are reliable stops you chasing a deep sleep percentage, and helps you describe real sleep problems in terms a clinician will take seriously.

                ## Milestones
                1. A published comparison of your device type against laboratory sleep studies read.
                2. Your average sleep duration and timing taken from the baseline.
                3. A decision made about which sleep numbers you will watch and which you will ignore.
                4. A note written of symptoms (loud snoring, gasping, daytime sleepiness) that need a clinician rather than an app.

                ## Notes
                Start from the **Sleep review** template. A tracker cannot diagnose sleep apnoea or insomnia; if you have symptoms, the data is a reason to book an appointment, not a substitute for one.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sleep review page listing the sleep metrics you will watch, the ones you will ignore and the symptoms you would take to a clinician."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read one comparison of wrist trackers against laboratory sleep studies"
                - "Take your average sleep duration and bedtime from the baseline"
                - "Decide which sleep numbers you will watch and hide the rest"
                - "List the sleep symptoms you would take to a clinician"
            - name: Blood oxygen readings from a consumer sensor
              description: |-
                ## Purpose
                Watches and fingertip oximeters report blood oxygen, but readings vary with skin tone, cold hands, nail polish, movement and fit, and wrist sensors are generally less accurate than a fingertip clip. Learning when a reading can be trusted, and what your health service says counts as low, prevents both false alarm and false reassurance.

                ## Milestones
                1. The known sources of error for your sensor listed, including the documented effect of darker skin tones.
                2. Your usual resting reading recorded under good conditions.
                3. Your health service's guidance on low readings and when to seek help saved.
                4. A rule written: repeat a strange reading at rest with warm hands before acting on it, unless you feel unwell.

                ## Notes
                Breathlessness, chest pain or confusion need urgent care whatever a device says.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved note with your usual resting reading, the error sources for your sensor and your health service's guidance on low readings."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List what affects your sensor's accuracy, including skin tone and cold hands"
                - "Take a resting reading with warm hands and note the result"
                - "Save your health service's guidance on low oxygen readings"
                - "Write your rule for repeating an odd reading before acting"
            - name: Reading a consumer ECG trace
              description: |-
                ## Purpose
                Several watches can record a single-lead ECG and classify it, usually as normal rhythm, possible atrial fibrillation or inconclusive. Knowing how to take a clean recording, what the label does and does not mean, and how to export the trace as a file makes the feature useful to a cardiologist rather than a source of worry.

                ## Milestones
                1. A clean recording taken: seated, arm resting, still, finger in place for the full time.
                2. The meaning of each classification your device gives written down from the maker's information.
                3. One recording exported as a file and saved.
                4. The limits noted: a single lead cannot detect a heart attack or many other conditions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A clean ECG recording exported as a file, with a written note of what each device classification means and does not mean."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read the maker's guide to taking an ECG on your device"
                - "Take a recording seated with your arm resting on a table"
                - "Export the recording as a file and save it"
                - "Write down what each classification label means"
            - name: Telling signal from noise in daily readings
              description: |-
                ## Purpose
                Most alarming daily numbers are noise: the natural scatter of a body measured by a consumer sensor. A little practical statistics (averages, ranges, how many readings make a trend, why the first reading after a change is unreliable) helps you judge whether anything has really changed before you worry or celebrate.

                ## Milestones
                1. The difference between a single reading, a seven-day average and a thirty-day average written in your own words.
                2. Your normal range for two metrics expressed as a band, not a single number.
                3. One past scare reviewed to see whether it sat inside your normal band.
                4. A personal rule written for how many days outside the band count as a change.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note in your own words on averages and normal bands, with a personal rule for what counts as a real change."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Plot thirty days of one metric and draw your normal band on it"
                - "Check whether a past worrying reading sat inside that band"
                - "Read a short introduction to averages and natural variation"
                - "Write how many days outside the band count as a real change"
            - name: Body composition numbers from bioimpedance scales
              description: |-
                ## Purpose
                Body fat, muscle, water and visceral fat figures on home scales are estimates from a weak current through the feet, and they can shift by several points after a drink or a workout. Learning how they are calculated and how far they wander lets you use the long trend while ignoring single readings, and shows when a simple measure like waist circumference tells you more.

                ## Milestones
                1. Your scale's method and stated accuracy found.
                2. Readings taken before and after a large glass of water to see the swing for yourself.
                3. A decision made to track monthly averages only, or to hide the figures.
                4. Waist measurement added as a cross-check, taken the same way each month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written decision on how you will use body composition figures, backed by a hydration test showing how far your scale's readings move."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look up how your scale estimates body fat and its stated accuracy"
                - "Weigh before and after a large glass of water and compare the figures"
                - "Decide whether to track monthly averages or hide the figures"
                - "Measure your waist the same way once a month as a cross-check"
            - name: Charting a trend a doctor can read in thirty seconds
              description: |-
                ## Purpose
                Screenshots of app charts rarely survive a consultation: tiny axes, a week of data, colours that mean nothing to anyone else. Learning to make one clean chart (one metric, months not days, a marked normal band and the dates of key events such as a new medicine) turns your data into something a clinician can use.

                ## Milestones
                1. One metric exported and charted over at least three months.
                2. Axis labels, units and your normal band added.
                3. Key events (illness, medicine start, job change) marked on the timeline.
                4. The chart shown to someone else who can explain it back in thirty seconds.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A labelled chart of one metric over at least three months, with events marked, that another person can explain back in thirty seconds."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Export three months of one metric to a spreadsheet"
                - "Ask the agent to suggest a clean chart layout for the export"
                - "Add units, labels, your normal band and key events"
                - "Show the chart to a friend and ask them to explain it back"
            - name: Deciding on a glucose sensor without diabetes
              description: |-
                ## Purpose
                Continuous glucose sensors are now sold directly to people without diabetes, promising insight into how food affects them, at the cost of a new sensor every couple of weeks. Whether one is worth it depends on a clear question, your doctor's view, and whether you would change anything based on rises that are normal in healthy people.

                ## Milestones
                1. Your question written down: what you hope to learn and what you would do differently.
                2. Your doctor asked whether a sensor is worthwhile for you, or whether a blood test would answer the question better.
                3. The cost of a two-week trial compared with ongoing use.
                4. A decision recorded: no sensor, one two-week trial with a defined question, or ongoing use.

                ## Notes
                Rises after meals are normal. Treat the data as something to discuss, not a diagnosis, and never change a prescribed medicine because of it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on whether to use a glucose sensor, including your doctor's view and the cost of the option chosen."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what you hope a glucose sensor would tell you"
                - "Ask your doctor whether a sensor or a blood test answers that better"
                - "Price a two-week trial against ongoing monthly use"
                - "Record your decision and, if trialling, the end date"
            - name: Consolidating overlapping health apps
              description: |-
                ## Purpose
                Two step counters, three sleep apps and a meditation app that also tracks heart rate produce conflicting numbers and a divided history. Cutting down to the fewest apps that answer your questions makes the remaining data clearer and reduces the number of companies holding it.

                ## Milestones
                1. Each app scored against your written questions: essential, nice to have or redundant.
                2. Redundant apps' history exported before deletion.
                3. Redundant apps deleted and their accounts closed.
                4. The app that now owns each metric written in your inventory.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Health apps reduced to those that answer a written question, with history exported and accounts closed for the rest."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Score each health app against your written questions"
                - "Export the history from any app you plan to drop"
                - "Delete redundant apps and close their accounts"
                - "Note which app now owns each metric in your inventory"
            - name: Deciding whether a premium health subscription pays its way
              description: |-
                ## Purpose
                Many devices now put trend views, readiness scores or full data exports behind a monthly fee. Running the paid tier for one trial month against your three questions shows whether it answers anything the free version and your own monthly summary do not.

                ## Milestones
                1. The features behind the paywall listed against your questions.
                2. A one-month trial started with a reminder set before it renews.
                3. A verdict written on each paid feature: used weekly, used once, never used.
                4. The subscription kept or cancelled before the trial ends.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A keep or cancel decision made before the trial renews, backed by a written verdict on each paid feature."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the paid features against your three health questions"
                - "Start a trial and set a reminder two days before it renews"
                - "Note each week which paid features you actually opened"
                - "Keep or cancel the subscription before the trial ends"
            - name: Moving years of data to a new device brand
              description: |-
                ## Purpose
                Switching from one watch brand to another often leaves history stranded in the old app while the new device starts from zero. Planning the move (export, import into the central store, a week of overlap) keeps one continuous record, so a change of device does not look like a change in your health.

                ## Milestones
                1. A full export from the old brand's app saved.
                2. Historical data imported into the phone's central health store or your own spreadsheet.
                3. Both devices worn together for a week to compare readings.
                4. The difference between old and new devices recorded so trends across the switch can be read correctly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One continuous record across the device switch, with a week of side-by-side readings and the difference between devices noted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Export full history from the old device's app before resetting it"
                - "Import the history into your central health store or spreadsheet"
                - "Wear both devices together for one week"
                - "Note how far the new device reads from the old one"
            - name: Agreeing alert thresholds with your clinician
              description: |-
                ## Purpose
                Default high and low heart rate alerts are set for the general population, and for some people (fit people with slow resting rates, anyone on rate-controlling medicine, people with a known rhythm condition) they fire too often or not at all. Asking your clinician which thresholds suit you, and setting them, makes alerts reflect your own situation.

                ## Milestones
                1. Your current alert thresholds written down.
                2. Your clinician asked whether different thresholds suit your health and medicines.
                3. Thresholds changed only as agreed, with the date noted.
                4. A short plan written for what to do when each alert fires.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Alert thresholds set as agreed with your clinician, with the date and a written response plan for each alert."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down your watch's current high and low heart rate alert settings"
                - "Ask your clinician whether those thresholds suit you"
                - "Change the thresholds only as agreed and note the date"
                - "Confirm the thresholds still suit you at each annual review @recurring(yearly)"
            - name: Testing whether a habit change moved your numbers
              description: |-
                ## Purpose
                Cutting evening alcohol, moving bedtime earlier or stopping late caffeine are changes people swear by, and a wearable can show whether they did anything for you. A simple before-and-after test in two-week blocks, one change at a time, gives an honest answer instead of a hopeful one.

                ## Milestones
                1. One change and one metric chosen, such as alcohol-free weeknights and overnight resting heart rate.
                2. Two weeks of normal habits recorded as the comparison block.
                3. Two weeks with the change recorded, with anything else unusual tagged.
                4. The two averages compared and the result written down, including 'no clear difference'.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written before-and-after comparison of one metric across two-week blocks, with the result stated even if no difference was found."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose one habit to change and one metric to watch"
                - "Record two weeks of normal habits as the comparison block"
                - "Record two weeks with the change, tagging anything unusual"
                - "Compare the two averages and write down the result"
            - name: Wearable summary for your yearly check-up
              description: |-
                ## Purpose
                The annual check-up is the one appointment where a year of home data can change what the doctor looks at, provided it arrives as a page rather than a phone. Preparing a yearly summary a week before (twelve monthly averages, anything flagged, the questions it raised) means the data feeds the appointment instead of competing with it.

                ## Milestones
                1. Twelve monthly averages for your core metrics gathered on one page.
                2. Flagged changes from the year listed with dates.
                3. Two questions for the doctor written at the top.
                4. The doctor's comments on the data recorded after the appointment.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-page yearly data summary taken to the annual check-up, with the doctor's comments recorded afterwards."
                cadence: cyclic
              tasks:
                - "Gather the twelve monthly averages onto one page"
                - "List the changes you flagged during the year, with dates"
                - "Write two questions for the doctor at the top of the page"
                - "Prepare the yearly summary a week before the check-up @recurring(yearly)"
            - name: Irregular rhythm notification response plan
              description: |-
                ## Purpose
                An irregular rhythm notification is one of the few wearable alerts with real clinical weight, and the moment it arrives is a poor time to work out what to do. Writing the plan in advance (which symptoms mean emergency care, how to record an ECG, who to contact and what to send) means you respond calmly and give your doctor useful evidence.

                ## Milestones
                1. Your health service's guidance on when palpitations or chest symptoms need emergency care saved.
                2. A written sequence: check symptoms, take an ECG recording if your device can, note the time, contact your practice.
                3. Your practice's preferred way to receive an exported ECG found.
                4. The plan saved on your phone and shared with someone you live with.

                ## Notes
                Chest pain, fainting, severe breathlessness or signs of stroke need emergency care straight away, whatever the watch shows. The plan organises your health service's advice; it does not replace it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written irregular rhythm response plan, based on your health service's guidance, saved on your phone and shared with a household member."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Save your health service's guidance on palpitations and chest symptoms"
                - "Write the steps you will take when a rhythm notification arrives"
                - "Ask your practice how they want to receive an exported ECG"
                - "Share the plan with someone you live with"
            - name: Tracking recovery after a flu or covid infection
              description: |-
                ## Purpose
                Flu and covid usually show in wearable data as a raised resting heart rate, a skin temperature shift and broken sleep, and these often lag behind how you feel. Tracking the return to your baseline helps you judge when to restart hard exercise or full workdays, and gives a clear record if recovery stalls and you need to see a doctor.

                ## Milestones
                1. The start of the illness tagged with symptoms and date.
                2. Resting heart rate and sleep compared daily against baseline while unwell.
                3. The day each metric returned to its normal band noted.
                4. Any metric still off baseline after four weeks raised with your doctor.

                ## Notes
                Ask your doctor before returning to hard exercise after a significant infection, especially if you had chest symptoms.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dated recovery record showing when each core metric returned to its baseline band, with anything outstanding after four weeks raised with a doctor."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Tag the first day of illness with your symptoms"
                - "Compare resting heart rate and sleep with your baseline each day"
                - "Note the date each metric returns to its normal band"
                - "Book a doctor's appointment if a metric is still off after four weeks"
            - name: Jet lag and time zone recovery tracking
              description: |-
                ## Purpose
                Long-haul trips scramble the sleep timing and resting heart rate your device records, and some apps misread a time zone change as a night without sleep. Planning how to handle the data before you fly, and watching recovery afterwards, keeps the trip from corrupting your trends and shows how many days you really need before demanding meetings.

                ## Milestones
                1. The trip tagged in advance with dates and the time zone change.
                2. Device time zone settings checked so sleep is recorded on the right days.
                3. Sleep timing and resting heart rate compared with baseline each day after arrival.
                4. The number of days to recover noted for planning the next trip.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip record showing how many days sleep timing and resting heart rate took to return to baseline after a time zone change."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Tag the trip dates and time zone change in your health app"
                - "Check how your watch handles a change of time zone"
                - "Compare sleep timing with baseline each day after arrival"
                - "Note how many days recovery took, for planning the next trip"
            - name: Recovery data around a race or big walk
              description: |-
                ## Purpose
                Before a half marathon, a long charity ride or a demanding hill walk, wearables can show whether training is being absorbed or piling up as fatigue. Watching resting heart rate and sleep through the final weeks and the recovery afterwards gives a factual picture to set beside how your legs feel, and a record for planning the next one.

                ## Milestones
                1. The event date and the four weeks before it tagged.
                2. Resting heart rate and sleep compared weekly with baseline during the build-up.
                3. Recovery days after the event recorded until metrics return to baseline.
                4. A short note written on what the data showed, for next time.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A record covering four weeks before and the recovery after one event, with a written note on what the data showed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Tag the event date and the four weeks before it"
                - "Compare weekly resting heart rate with baseline during the build-up"
                - "Log how you felt each day next to the recovery numbers"
                - "Write a short note on what the data showed"
            - name: Watching your data when a new medicine starts
              description: |-
                ## Purpose
                Some medicines change heart rate, sleep or weight, and clinicians sometimes ask patients to watch for exactly that. Agreeing with the prescriber which readings matter, how often to check them and what change should prompt a call makes the watch a useful monitor in the first weeks, rather than a source of guesswork.

                ## Milestones
                1. The prescriber or pharmacist asked which readings, if any, are worth watching on this medicine.
                2. The start date tagged in your health app.
                3. The agreed readings compared with baseline weekly for the first six weeks.
                4. Changes reported as agreed, with the clinician's response recorded.

                ## Notes
                Never stop or change a prescribed medicine because of a wearable reading without speaking to the prescriber first.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A six-week record of agreed readings after a medicine start, with any changes reported to the prescriber and their response noted."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask the prescriber which readings are worth watching on the new medicine"
                - "Tag the medicine start date in your health app"
                - "Compare the agreed readings with baseline every week for six weeks"
                - "Report changes as agreed and record the response"
            - name: Stress scores against your meeting calendar
              description: |-
                ## Purpose
                For knowledge workers the busiest days are often spent sitting still, so a watch's stress or energy score may be the only sign that back-to-back meetings cost something. Comparing a month of stress readings with calendar load shows which kinds of day drain you and gives hard evidence for protecting focus time or a proper lunch break.

                ## Milestones
                1. A month of daily stress scores and meeting hours set side by side.
                2. The three most draining types of day identified.
                3. One change agreed with yourself or your manager, such as no meetings before ten on two days a week.
                4. The comparison repeated a month after the change.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two monthly comparisons of stress scores against meeting hours, one before and one after a recorded calendar change."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Export a month of daily stress scores"
                - "Count meeting hours per day from your calendar"
                - "Name the three most draining types of day"
                - "Compare stress scores with meeting hours for the month @recurring(monthly:24)"
            - name: Recovery floor during a crunch period at work
              description: |-
                ## Purpose
                Product launches, audits and year-end closes compress sleep and exercise for weeks, and the cost often shows in the data before it shows in your mood. Setting a minimum (a sleep floor, a resting heart rate warning level, one proper walk a week) before the crunch starts, and checking it twice a week, gives you an early, impersonal signal to push back or rest.

                ## Milestones
                1. The crunch dates and a personal sleep floor written down.
                2. A resting heart rate level above baseline chosen as your warning sign.
                3. Twice-weekly checks of the floor and warning sign completed through the crunch.
                4. A lighter recovery week planned and kept after the crunch ends.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A crunch period completed with twice-weekly checks recorded against a written sleep floor and resting heart rate warning level."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the crunch dates and the minimum sleep you will protect"
                - "Choose a resting heart rate level that will count as a warning"
                - "Check sleep and resting heart rate against your limits twice a week"
                - "Block a lighter recovery week in your calendar after the crunch"
            - name: Fall detection and SOS set-up for an ageing parent
              description: |-
                ## Purpose
                For an older parent living alone, a watch with fall detection and an emergency call button can bring help when they cannot reach a phone, but only if it is worn, charged and set up with the right contacts. Setting it up with them, and agreeing who gets alerted, turns a gadget into part of their safety plan.

                ## Milestones
                1. Your parent's agreement to wear the device, and their wishes on who is alerted, recorded.
                2. Fall detection, emergency calling and medical ID set up with current contacts.
                3. A charging spot and routine agreed that suits their day.
                4. The alert chain checked with the maker's test feature where one exists, and everyone on it briefed.

                ## Notes
                Respect their choice. Some parents prefer a pendant alarm or nothing at all, and their data should be shared only with their consent.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A watch or alarm with fall detection, emergency contacts and medical ID set up with your parent's consent, and worn and charged daily."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your parent whether they would wear a device with fall detection"
                - "Set up fall detection, emergency calling and medical ID with them"
                - "Agree a charging spot that fits their daily routine"
                - "Check the watch is worn, charged and its contacts are current @recurring(monthly:15)"
            - name: Shared scale and cuff profiles for a household
              description: |-
                ## Purpose
                When a partner, a teenager and a visiting grandparent all use the same scale or cuff, readings land in the wrong profile and every trend becomes a blend of several people. Setting up separate profiles, and a simple rule for guests, keeps each person's record clean and private.

                ## Milestones
                1. A profile created for each regular user, with their consent.
                2. Automatic user recognition tested and corrected where it guesses wrong.
                3. A guest mode or rule set so visitors' readings are not saved to anyone's record.
                4. Misassigned readings from the past month moved or deleted.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each regular user has their own profile on shared devices and no misassigned readings remain from the past month."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a profile for each person who uses the scale or cuff"
                - "Test whether the scale recognises each person correctly"
                - "Set up guest mode for visitors"
                - "Check readings are landing in the right profiles @recurring(monthly:8)"
            - name: Easing off when tracking feeds health anxiety
              description: |-
                ## Purpose
                For some people constant numbers become a source of worry: checking sleep scores in the night, repeating ECGs, reading every dip as illness. Noticing the pattern and scaling back (fewer metrics, no daily views, set check times) keeps the benefits of the data without letting it run your day.

                ## Milestones
                1. Honest notes kept for a week on how often you check and how you feel afterwards.
                2. Daily scores hidden and notifications cut to safety alerts only.
                3. Fixed check times set, such as the weekly glance only.
                4. A conversation with your doctor or a therapist arranged if the worry continues.

                ## Notes
                Wearing the device but looking only weekly is a reasonable setting. So is taking it off for a while.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Daily scores hidden, checking limited to fixed times, and a quarterly check-in on how tracking affects your mood recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Note for one week how often you check and how you feel after"
                - "Hide daily scores and keep only safety notifications"
                - "Set fixed times when you look at your data"
                - "Ask yourself honestly whether tracking is helping or worrying you @recurring(quarterly)"
            - name: Workplace wellness programme data choices
              description: |-
                ## Purpose
                Employers and insurers increasingly offer rewards for connecting a wearable to a wellness programme, and the terms on what they receive vary widely. Reading exactly what is shared, with whom and for how long lets a knowledge worker take the vouchers without handing over more health data than intended.

                ## Milestones
                1. The programme's privacy terms read for what data is shared, at what level of detail and with whom.
                2. Questions sent to HR or the provider about anything unclear.
                3. A decision recorded: join with limited sharing, join fully or decline.
                4. Sharing settings checked after joining to match the decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded join or decline decision on a workplace wellness programme, based on its written data terms, with settings matching that decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the privacy terms for your employer's wellness programme"
                - "List what data is shared, at what detail and with whom"
                - "Send HR any questions about unclear terms"
                - "Record whether you will join, limit sharing or decline"
            - name: Wearable data in a remote monitoring programme
              description: |-
                ## Purpose
                Some clinics now enrol patients in remote monitoring, where a connected cuff, scale or sensor sends readings straight to the care team. Knowing what they see, how often they look, what triggers a call and what to do when a device stops syncing keeps you a partner in the programme rather than a passive source of numbers.

                ## Milestones
                1. The programme's schedule, devices and contact route written down.
                2. Who reviews readings, how often and what triggers contact found out.
                3. A plan for syncing failures and travel recorded.
                4. Your own copy of the transmitted readings saved alongside your personal data.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A written note of the programme's schedule, review process and failure plan, with readings received by the care team on every scheduled day for one month."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down the programme's devices, schedule and contact number"
                - "Ask who reviews readings and what triggers a call"
                - "Check the week's readings reached the care team @recurring(weekly:tue)"
                - "Save your own copy of the readings you transmit"
            - name: Personal health data spreadsheet from raw exports
              description: |-
                ## Purpose
                App charts stop at what the maker decided to show, and they rarely put weight, sleep, cuff readings and resting heart rate on one timeline. A personal spreadsheet or small database built from raw exports lets you compare any metrics across years and keeps the record independent of any one company.

                ## Milestones
                1. Raw export files parsed into one table with date, metric, value and source columns.
                2. Duplicates from overlapping devices removed using your preferred source rules.
                3. A summary sheet with monthly averages for each metric.
                4. A repeatable import step written down so each new export takes minutes.

                ## Notes
                Keep the spreadsheet encrypted. It is a complete picture of your health over years.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One table holding several years of exported readings from all devices, with monthly averages and a documented import step."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Open one raw export and identify the date, metric and value fields"
                - "Ask the agent to write a script that flattens the export into one table"
                - "Remove duplicates using your preferred source rules"
                - "Append the latest export to the spreadsheet @recurring(quarterly)"
            - name: Cardio fitness estimate tracked over the years
              description: |-
                ## Purpose
                Many watches estimate VO2 max, a measure of cardiorespiratory fitness linked to long-term health that declines with age. The absolute number is rough, but the trend over years from the same device and the same kind of outdoor walk or run is informative, and often motivates steady exercise better than step counts.

                ## Milestones
                1. Your device's method and the activities it needs for a fitness estimate found.
                2. A monthly reading recorded from comparable outdoor sessions.
                3. A year of monthly readings charted with device changes marked.
                4. The trend discussed at your yearly check-up alongside other markers.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly cardio fitness readings charted from comparable sessions, with device changes marked."
                cadence: rolling
              tasks:
                - "Find which activities your watch needs to estimate cardio fitness"
                - "Do one comparable outdoor walk or run each month for the estimate"
                - "Record the cardio fitness estimate in your log @recurring(monthly:14)"
                - "Mark any device change on the chart"
            - name: Joining a health research study with your wearable data
              description: |-
                ## Purpose
                Universities and health services run studies that collect wearable data from volunteers on heart rhythm, sleep, women's health and more. Contributing can be worthwhile, but the consent terms on what is collected, who can access it, whether it is deidentified and how to withdraw deserve a careful read first.

                ## Milestones
                1. A study chosen from a university, hospital or public health body rather than a marketing campaign.
                2. The consent form read for data collected, access, retention and withdrawal.
                3. Questions sent to the study team about anything unclear.
                4. A decision recorded, with the withdrawal route saved if you join.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A join or decline decision on one research study, with the consent terms read and the withdrawal route saved if joining."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look for studies run by universities, hospitals or public health bodies"
                - "Read the consent form for data access, retention and withdrawal"
                - "Email the study team any unanswered questions"
                - "Save the withdrawal instructions if you decide to join"
            - name: Data access and deletion requests to device makers
              description: |-
                ## Purpose
                Data protection laws in many countries let you ask a company for everything it holds about you, and to delete it when you leave. A formal access request to your main device maker shows what is stored beyond the app's own export, and deletion requests close out accounts from devices you no longer use.

                ## Milestones
                1. The maker's privacy contact or request form found.
                2. A formal data access request sent and the expected response date noted.
                3. The response checked against what the app export contained.
                4. Deletion requests sent for closed accounts, with confirmations saved.

                ## Notes
                Use the company's own request form where one exists. Your rights and the response time depend on where you live.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A completed data access request from your main device maker and saved deletion confirmations for every closed health account."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find your device maker's privacy request form"
                - "Send a formal request for all the data held about you"
                - "Compare the response with the app's own export"
                - "Request deletion for accounts you closed and save the confirmations"
---

# Wearable Health Data Tracking

This area is for anyone with a smartwatch, smart scale, home cuff or glucose sensor who wants the numbers to mean something, including desk-bound knowledge workers whose watch is often the only sign of a heavy week. It starts with the foundations (an inventory, clear questions, devices chosen and checked, one data hub and a personal baseline), then the weekly and monthly routines that turn readings into trends, the skills to read heart rate variability, sleep, oxygen and ECG data without overreading them, decisions about apps, sensors and subscriptions, events such as an infection or a long-haul trip, situations from an ageing parent's fall detection to a crunch at work, and finally the specialist work of keeping years of data in your own hands.

What repeats is a Sunday glance at weekly averages, a monthly one-page summary, a daily charging moment, monthly device care, a quarterly export and a yearly review of devices and subscriptions. The Purchase decision, Metrics log and Sleep review templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
