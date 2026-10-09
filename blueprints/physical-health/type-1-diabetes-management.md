---
id: physical-health.type-1-diabetes-management
name: Type 1 Diabetes Management
description: "Hypo plans, glucagon and sick day rules first, then routines for supplies, sensors, pumps and clinic visits, the skills behind daily decisions, and plans for exams, sport, travel and pregnancy."
category: personal
version: 1.0.0
tags: [physical-health, type-1-diabetes-management, everyone, student, athlete, insulin-pump, cgm, hypoglycaemia]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - training-program
    - purchase-decision
    - trip
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Type 1 Diabetes Management
          description: "Day-to-day insulin, pump and continuous glucose monitor management for people with type 1 diabetes, including hypo plans, clinic visits and supply reorders."
          projects:
            - name: Diabetes team contacts and out-of-hours numbers
              description: |-
                ## Purpose
                When a pump fails at two in the morning or ketones are rising on a Sunday, the hardest part is often working out who to call. One page holding your diabetes nurse, consultant's secretary, pump and sensor helplines, pharmacy and the out-of-hours advice line, with what each one handles, saves those minutes when they matter.

                ## Milestones
                1. Every number for your diabetes team, device makers and pharmacy collected on one page.
                2. Each contact labelled with what it is for and its opening hours.
                3. The page saved on your phone and printed for the fridge or noticeboard.
                4. The out-of-hours route confirmed with your team rather than guessed.

                ## Notes
                Device helplines usually ask for the serial number first, so write it beside each helpline number.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single contacts page with team, device helpline, pharmacy and out-of-hours numbers exists on your phone and on paper."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every phone number and email you have for your diabetes team"
                - "Add the pump, sensor and meter helplines with your serial numbers"
                - "Ask the diabetes nurse which number to use out of hours"
                - "Save the page to your phone favourites and print a copy"
                - "Check every number on the contacts page still works @recurring(yearly)"
            - name: Written hypo treatment plan agreed with your team
              description: |-
                ## Purpose
                Treating a low by guesswork tends to end in either a second low or a rebound high three hours later. A short written plan, agreed with your diabetes team, says what level counts as a hypo for you, what to take and how much, when to recheck and what to do if it does not come up. Having it in writing also means a friend or colleague can follow it.

                ## Milestones
                1. The glucose level your team wants you to treat at written down.
                2. Your fast-acting treatment and the amount your team advises recorded.
                3. The recheck interval and the step after a second low listed.
                4. A plain-words version for other people saved on your phone.

                ## Notes
                Take the amounts from your own team. Plans differ with body size, age and whether your pump suspends insulin automatically.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page hypo plan with your team's treat-at level, treatment, recheck time and next steps, saved and shared with one other person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what you currently do when your glucose drops low"
                - "Ask your diabetes nurse to confirm the treat-at level and amounts"
                - "Turn the agreed plan into a one-page note in plain words"
                - "Share the plan with the person you spend most time with"
            - name: Hypo kits for every bag, desk and car
              description: |-
                ## Purpose
                Most severe lows happen when the treatment is in the other bag. Building small identical kits for the places you actually spend time, with fast-acting glucose, a longer-acting snack and a copy of your hypo plan, removes the gap between noticing a low and treating it.

                ## Milestones
                1. A list of every place that needs a kit: work bag, gym bag, car, desk and bedside.
                2. Each kit packed with the same fast-acting treatment and a follow-up snack.
                3. A card in each kit with your hypo plan and an emergency contact.
                4. A monthly restock habit in place, so used kits are refilled.

                ## Notes
                Glucose tablets and gels survive a hot car far better than chocolate, which melts and is absorbed slowly anyway.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every bag, the car and your bedside each hold a stocked hypo kit with a plan card, checked once a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each bag and place where you need a hypo kit"
                - "Buy enough fast-acting glucose to fill every kit"
                - "Put a plan card and an emergency contact in each kit"
                - "Restock every hypo kit you dipped into this month @recurring(monthly:3)"
            - name: Glucagon at home and people who can use it
              description: |-
                ## Purpose
                If you are ever too low to swallow, the person beside you needs glucagon and the confidence to use it. Getting a prescription, choosing between nasal and injectable forms with your team and walking two people through it means a severe hypo has a plan that does not depend on you.

                ## Milestones
                1. A current glucagon prescription in the house, kept in a known place.
                2. The form chosen with your team and its expiry date written large on the box.
                3. Two household members or friends shown how the device works.
                4. A rule agreed with them on when to use it and when to call an ambulance.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "In-date glucagon is kept in a known place and at least two people have been shown how to use it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether you have glucagon at home and when it expires"
                - "Ask your team for a prescription and which form suits you"
                - "Book a time to show two people how the glucagon device works"
                - "Check the glucagon expiry date and replace it if needed @recurring(quarterly)"
            - name: Sick day and ketone rules on one page
              description: |-
                ## Purpose
                Illness, vomiting and infections push glucose up and can tip into diabetic ketoacidosis within hours, even when you are not eating. Your team's sick day rules, written on one page with ketone thresholds, fluid guidance, insulin rules and when to go to hospital, let you act early instead of waiting to see.

                ## Milestones
                1. Your team's sick day rules obtained in writing.
                2. Ketone thresholds and the action for each copied onto one page.
                3. A ketone meter or strips at home, in date.
                4. The page kept with your supplies and shown to your household.

                ## Notes
                Start from the **Operational checklist** template. Never stop background insulin when ill unless your team tells you to.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page sick day plan with your team's ketone thresholds and hospital criteria sits with your supplies, alongside in-date ketone strips."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your diabetes team for their written sick day rules"
                - "Check you have a ketone meter and strips that are in date"
                - "Copy the ketone thresholds and actions onto a single page"
                - "Tell your household where the sick day page is kept"
                - "Go through the sick day rules again with your team @recurring(yearly)"
            - name: Insulin and supplies inventory with reorder points
              description: |-
                ## Purpose
                Running out of sensors on a Friday night or down to the last cartridge on holiday is avoidable with a count you trust. An inventory of every item you use, how many you get through a month and the stock level at which you reorder turns supply panics into a routine.

                ## Milestones
                1. Every supply listed: insulins, pen needles or reservoirs, sets, sensors, test strips, ketone strips and lancets.
                2. Monthly use worked out for each item.
                3. A reorder point set for each, allowing for pharmacy and delivery lead times.
                4. Current stock counted and anything below its reorder point ordered.

                ## Notes
                Add two weeks of buffer for items that come by post, since couriers and prescriptions both slip around public holidays.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A supplies list with monthly use and a reorder point for every item, with nothing currently below its reorder point."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count every diabetes supply you have at home today"
                - "Work out how many of each item you use in a month"
                - "Set a reorder point for each item that covers the delivery time"
                - "Order anything already below its reorder point"
            - name: Agreeing glucose targets and time in range goals
              description: |-
                ## Purpose
                HbA1c, time in range, time below range and glucose variability each tell a different story, and the right goals depend on your hypo history, stage of life and technology. Agreeing a written set of targets with your clinician means every weekly review and clinic visit measures against the same numbers.

                ## Milestones
                1. Your current HbA1c, time in range and time below range written down.
                2. A target for each agreed with your clinician, with the reasons noted.
                3. The target range in your CGM app set to match what you agreed.
                4. A date set to revisit the targets.

                ## Notes
                Many teams start from international consensus targets and then adjust them. Ask which your team uses rather than copying a number from a forum.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written HbA1c, time in range and time below range targets agreed with your clinician, with the CGM app set to match."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note your latest HbA1c and the last fourteen days of time in range"
                - "Ask your clinician which targets suit you and why"
                - "Set the target range in your CGM app to the one agreed"
                - "Write the targets at the top of your glucose log"
            - name: Medical ID and emergency information
              description: |-
                ## Purpose
                Paramedics and first aiders look for a bracelet, a wallet card or the emergency screen on a phone, and to a stranger a hypo can look like drunkenness. Setting up all three, stating type 1 diabetes, insulin use and an emergency contact, takes an afternoon and speaks for you when you cannot.

                ## Milestones
                1. A medical ID bracelet, necklace or watch band ordered and worn.
                2. A wallet card listing type 1 diabetes, insulins, devices and an emergency contact.
                3. The phone's emergency medical information filled in and visible from the lock screen.
                4. A line on the card asking that pump and sensor are not removed without a plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A worn medical ID, a wallet card and a lock screen medical profile all state type 1 diabetes and an emergency contact."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Fill in the emergency medical information on your phone"
                - "Write a wallet card with diagnosis, insulins and devices"
                - "Choose and order a medical ID you will actually wear"
                - "Update the ID and wallet card after any insulin or device change @recurring(yearly)"
            - name: One data platform for pump, sensor and meter
              description: |-
                ## Purpose
                Clinics increasingly review data remotely, but only if your pump, CGM and meter all upload somewhere your team can see. Linking every device to one account and sharing it with the clinic means appointments start from your real data instead of a phone passed across the desk.

                ## Milestones
                1. The platform and clinic code your diabetes service uses confirmed.
                2. Every device paired with or uploading to that account.
                3. Data sharing with the clinic switched on and confirmed by them.
                4. A note of how to upload any device that does not sync on its own.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Pump, CGM and meter data all appear in one platform account that your clinic has confirmed it can see."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the clinic which data platform and clinic code they use"
                - "Create the account and pair each device to it"
                - "Switch on sharing with the clinic and ask them to confirm"
                - "Upload any device that does not sync automatically @recurring(monthly:15)"
            - name: Monthly prescription and supply reorder routine
              description: |-
                ## Purpose
                Prescriptions, pharmacy stock and home deliveries of sensors all run on different clocks, and the gaps show up as missed sensor days or rationed strips. One fixed day a month to count, reorder and chase, measured against your reorder points, keeps every supply moving.

                ## Milestones
                1. A fixed reorder day in the calendar.
                2. Repeat prescriptions set up for every insulin and consumable.
                3. Device consumables ordered from the maker or supplier on the same day.
                4. Three months in a row with no item running out.

                ## Notes
                If a pharmacy keeps refusing a quantity, ask the clinic to update the amount on your prescription record rather than ordering early each time.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Supplies counted and reordered on a fixed monthly day for three consecutive months with no item running out."
                cadence: rolling
              tasks:
                - "Choose a fixed day each month for reordering"
                - "Set up repeat prescriptions for every insulin and consumable"
                - "Count supplies and order anything at its reorder point @recurring(monthly:9)"
                - "Chase any order not delivered within a week"
            - name: Weekly CGM pattern review
              description: |-
                ## Purpose
                Looking at every reading in the moment invites overreaction, while a week of data shows the patterns worth changing. Fifteen minutes each weekend with the glucose profile, time in range and any repeated lows gives you one or two things to adjust, or to raise with your team.

                ## Milestones
                1. A fixed weekly slot for the review.
                2. Time in range, time below range and average glucose noted each week.
                3. Repeated patterns, such as post-breakfast highs, written as one-line observations.
                4. Any change made, or question for the team, recorded beside the week.

                ## Notes
                Start from the **Metrics log** template. Change one thing at a time and give it a week, or you cannot tell what worked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weeks of time in range, time below range and one pattern note recorded in the log."
                cadence: rolling
              tasks:
                - "Open the weekly report in your CGM app and find the profile view"
                - "Note time in range, time below and average glucose for the week @recurring(weekly:sun)"
                - "Write one pattern you noticed and one question for your team"
                - "Ask the agent to summarise the last four weekly notes before clinic"
            - name: Diabetes clinic visit preparation pack
              description: |-
                ## Purpose
                Diabetes appointments are short, and the first ten minutes often go on uploading devices and finding results. Arriving with data uploaded, a two-week summary, a list of hypos and three questions makes the time go on decisions instead.

                ## Milestones
                1. Devices uploaded at least three days before the appointment.
                2. A one-page summary of time in range, lows and recent changes.
                3. Three questions written in priority order.
                4. Decisions and setting changes from the visit recorded the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A one-page summary and three questions taken to each diabetes appointment, with decisions written up the same day."
                cadence: cyclic
              tasks:
                - "Upload all devices three days before your diabetes appointment @recurring(quarterly)"
                - "Write a summary of lows, highs and changes since the last visit"
                - "List your three most important questions"
                - "Write down every change agreed before you leave the clinic"
            - name: Annual diabetes review and screening checks
              description: |-
                ## Purpose
                Type 1 care includes a set of yearly checks: HbA1c, kidney function and urine albumin, cholesterol, blood pressure, feet, eyes, thyroid and, for some people, coeliac screening. Tracking which have been done this year makes sure none quietly drops off, which is common when appointments are split across services.

                ## Milestones
                1. A checklist of the annual checks your team does.
                2. Each check ticked off with its date and result.
                3. Missing checks booked or chased.
                4. Results filed where you can compare them next year.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Every annual check on your team's list has a date and result recorded within the past twelve months."
                cadence: cyclic
              tasks:
                - "Ask your team which checks they do at the annual review"
                - "Make a checklist with space for each date and result"
                - "Book the blood and urine tests before the annual review @recurring(yearly)"
                - "Chase any check still missing after the review"
            - name: Diabetic eye screening record
              description: |-
                ## Purpose
                Retinal screening photographs catch changes long before they affect sight, but invitations get lost when you move house or change provider. Keeping each screening date, the grade or outcome and the next due date in one place makes a missed year obvious.

                ## Milestones
                1. The date and outcome of your last retinal screening found.
                2. The next due date in your calendar.
                3. A record that holds every year's result.
                4. Any result needing follow-up acted on with a booked appointment.

                ## Notes
                Screening drops blur your vision for several hours, so arrange not to drive afterwards.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Retinal screening outcomes are recorded year by year and the next screening is booked or due within twelve months."
                cadence: cyclic
              tasks:
                - "Find the date and outcome of your last eye screening"
                - "Ask how to get on the screening list if no invitation has come"
                - "Arrange a lift for screening day since the drops blur vision"
                - "Record the screening result and next due date @recurring(yearly)"
            - name: Injection and infusion site rotation
              description: |-
                ## Purpose
                Using the same patch of skin leads to lumpy fatty areas, called lipohypertrophy, where insulin absorbs unpredictably and glucose becomes harder to explain. A simple rotation map and a monthly check of your sites keeps absorption reliable, and it is one of the most overlooked fixes for erratic numbers.

                ## Milestones
                1. A rotation pattern chosen across abdomen, thighs, buttocks or arms.
                2. Sites checked by touch for lumps or hardening.
                3. Any lumpy areas rested and shown to your nurse.
                4. Needle or cannula length confirmed as right for you.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written rotation pattern in use and monthly site checks recorded for three months, with any lumps reviewed by your nurse."
                cadence: rolling
              tasks:
                - "Draw a simple map of the sites you can use"
                - "Pick a rotation order and mark it on the map"
                - "Feel each site for lumps and note any you find @recurring(monthly:18)"
                - "Show any lumpy area to your diabetes nurse"
            - name: Insulin storage, temperature and expiry routine
              description: |-
                ## Purpose
                Insulin loses strength when it gets too warm or freezes, and an in-use pen or vial is only good for a set number of days after opening. A fridge thermometer, a date on each opened pen and a monthly sweep of expiries rules out spoiled insulin whenever glucose runs high for no clear reason.

                ## Milestones
                1. A fridge thermometer in place and the temperature checked against the leaflet's range.
                2. Every opened pen or vial marked with its opening date.
                3. Expired or overheated insulin disposed of safely.
                4. A cooling pouch ready for carrying insulin in hot weather.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Opened insulin dated, fridge temperature checked monthly and no expired insulin in stock for three months running."
                cadence: rolling
              tasks:
                - "Put a thermometer in the fridge where the insulin sits"
                - "Write the opening date on each pen or vial you start"
                - "Check fridge temperature and insulin expiry dates @recurring(monthly:24)"
                - "Buy a cooling pouch for carrying insulin in the heat"
            - name: Device firmware, app and phone update routine
              description: |-
                ## Purpose
                A phone operating system update can break a CGM app overnight, and pump firmware updates sometimes reset settings. Checking compatibility before updating, and keeping app and firmware versions noted, avoids losing sensor alerts at the worst possible time.

                ## Milestones
                1. Automatic phone updates switched off or delayed until checked.
                2. The device makers' compatibility pages bookmarked.
                3. Current app, pump firmware and phone versions recorded.
                4. A habit of checking compatibility before any update.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Phone, app and firmware versions recorded and checked against compatibility lists before every update for six months."
                cadence: rolling
              tasks:
                - "Turn off automatic phone updates until each one is checked"
                - "Bookmark the compatibility pages for your CGM and pump apps"
                - "Record your phone, app and pump firmware versions"
                - "Check compatibility pages against any pending updates @recurring(quarterly)"
            - name: Sensor and infusion set failure log
              description: |-
                ## Purpose
                Sensors that fall off early, read wrongly or fail to warm up are usually replaced by the maker, but only if you report them with the serial and lot number. Logging each failure as it happens gets the replacements and shows your team whether a pattern points to adhesion, site choice or technique.

                ## Milestones
                1. A log with date, lot number, problem and replacement status.
                2. Every failed sensor or set reported to the maker.
                3. Adhesion or site patterns noted.
                4. Replacements received and added to your stock count.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every failed sensor or set in the last three months logged with its lot number and reported, with replacement status recorded."
                cadence: rolling
              tasks:
                - "Create a simple failure log with lot numbers and dates"
                - "Photograph the lot number before binning a failed sensor"
                - "Report failures and chase outstanding replacements @recurring(monthly:28)"
                - "Ask your nurse about adhesive patches if sensors keep lifting"
            - name: Structured carbohydrate counting course
              description: |-
                ## Purpose
                Many adults with type 1 last learned carb counting at diagnosis, often years ago, and estimates drift. Structured education courses run by many diabetes services over several days or weeks, DAFNE in the UK being one example, cover counting, ratios and adjustment, and they are linked to better HbA1c and fewer severe lows.

                ## Milestones
                1. The structured education course your service offers identified.
                2. A place booked and time off arranged.
                3. The course completed with your ratios reviewed by the course team.
                4. Three weeks of practice estimates checked against labels or scales.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A structured education course completed, with ratios reviewed by the course team and three weeks of estimates checked."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your diabetes team which structured education course they run"
                - "Book a place and arrange time off for the sessions"
                - "Weigh and label-check your usual meals for three weeks"
                - "Record the ratios agreed at the end of the course"
            - name: Insulin action time and stacking
              description: |-
                ## Purpose
                Correcting a high, then correcting again an hour later because nothing seems to be happening, is the commonest route to a heavy low in the afternoon. Learning how long your rapid insulin keeps working, and how your pump or app counts insulin on board, explains these lows and makes corrections safer.

                ## Milestones
                1. The active insulin time set in your pump or app found and noted.
                2. How insulin on board is shown on your device understood.
                3. Two recent stacking lows identified in your data.
                4. Your active insulin time setting discussed with your team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your active insulin time setting is recorded and reviewed with your team, and two past stacking episodes are explained in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the active insulin time setting on your pump or bolus app"
                - "Look back through CGM data for lows after repeated corrections"
                - "Write down what happened in two of those episodes"
                - "Ask your team whether your active insulin time is right"
            - name: Reading CGM trend arrows and sensor lag
              description: |-
                ## Purpose
                A CGM measures fluid under the skin, so it trails blood glucose by several minutes, and by more when levels are changing fast. Learning what the trend arrows mean, when to confirm with a finger prick and how your team wants you to adjust for arrows makes the numbers safer to act on.

                ## Milestones
                1. Your sensor's arrow meanings written down.
                2. Situations that need a finger-prick check listed, such as symptoms not matching the reading.
                3. Your team's guidance on adjusting for trend arrows recorded.
                4. First-day sensor readings compared against finger pricks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note of your sensor's arrow meanings, finger-prick situations and your team's arrow guidance is saved on your phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up what each trend arrow means for your sensor model"
                - "List the times you should check with a finger prick"
                - "Ask your team how they want you to adjust for arrows"
                - "Compare first-day sensor readings with finger pricks"
            - name: Bolusing for pizza, curry and high-fat meals
              description: |-
                ## Purpose
                Pizza, curries and big restaurant meals often look fine at two hours and then climb late in the evening, because fat and protein slow digestion. Learning how your pump's extended or dual-wave bolus works, or how pen users split doses, under your team's guidance turns those nights from guesswork into a plan.

                ## Milestones
                1. Three recent high-fat meals and their glucose curves reviewed.
                2. Your team's approach for fat and protein recorded.
                3. One method tried on the same meal twice and the results compared.
                4. A note of what works for your three most common takeaways.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on three tested high-fat meals with their glucose curves, following an approach your team agreed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find three recent high-fat meals in your CGM history"
                - "Ask your team how they suggest covering fat and protein"
                - "Try the agreed approach on the same meal twice"
                - "Write a note on what worked for your usual takeaways"
            - name: Basal check following your team's protocol
              description: |-
                ## Purpose
                Background insulin should hold glucose fairly level when you are not eating, and basal that is off makes every other setting look wrong. Running a fasting basal check with the protocol your team gives you, then sharing the results, is how ratios and corrections get adjusted on solid ground.

                ## Milestones
                1. Your team's written basal check protocol in hand.
                2. Overnight and daytime segments checked on separate days.
                3. Results recorded with notes on any interruptions.
                4. Any changes agreed with your team before you make them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Basal checks for overnight and at least one daytime segment completed to your team's protocol and reviewed with them."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your team for their basal check protocol in writing"
                - "Pick a quiet day with no exercise or illness for the first check"
                - "Record glucose through each fasting segment"
                - "Send the results to your team and note what they change"
            - name: Safer nights out with alcohol and type 1
              description: |-
                ## Purpose
                Alcohol stops the liver releasing glucose, so the risk of a severe low runs through the night and into the next day, often hours after the last drink. For students and anyone going out, a plan covering food, a bedtime check, a friend who knows and CGM alarms means a night out does not end in an ambulance.

                ## Milestones
                1. Your team's guidance on alcohol and insulin written down.
                2. A pre-night-out checklist covering food, hypo treatment and phone battery.
                3. A friend who knows the signs and where your hypo kit is.
                4. CGM low alarms and a follower set up for nights out.

                ## Notes
                A hypo can look like drunkenness to door staff and strangers, so wear your medical ID.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written night-out checklist, a briefed friend and CGM sharing are in place before the next night out."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your team how alcohol should change your evening routine"
                - "Write a short checklist to run before going out"
                - "Tell one friend the signs of a low and where your kit is"
                - "Set up CGM sharing with someone for nights out"
            - name: Exercise and glucose for cardio, intervals and weights
              description: |-
                ## Purpose
                Steady cardio tends to drop glucose, while sprints, heavy lifting and competition can push it up, and the effect can last well into the night. Learning how your body responds to each type, with readings before, during and after, gives you a starting plan for any session.

                ## Milestones
                1. Your team's guidance on starting levels and insulin changes for exercise noted.
                2. Glucose recorded around at least three sessions of each type you do.
                3. Overnight readings after exercise checked for delayed lows.
                4. A one-page starting plan for each type of exercise.

                ## Notes
                Start from the **Training program** template if you follow a structured plan, so glucose notes sit beside each session.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page plan for each type of exercise you do, built from at least three recorded sessions of each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your team what starting glucose and changes they suggest for exercise"
                - "Record glucose before, during and after your next three sessions"
                - "Check overnight readings after each session for late lows"
                - "Write a starting plan for each type of exercise you do"
            - name: Dawn phenomenon and overnight patterns
              description: |-
                ## Purpose
                Waking high can come from the early-morning hormone rise known as the dawn phenomenon, a late snack, a missed bolus or a low that rebounded, and each has a different fix. Learning to tell them apart from overnight CGM curves means the conversation with your team starts from the right cause.

                ## Milestones
                1. Two weeks of overnight curves reviewed.
                2. Each high morning labelled with its likely cause.
                3. The patterns summarised in three sentences.
                4. Your team's view on the cause recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two weeks of overnight curves labelled by likely cause, with a summary discussed with your team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export or screenshot two weeks of overnight CGM curves"
                - "Label each high morning with what you think caused it"
                - "Ask the agent to summarise the labelled patterns in three sentences"
                - "Bring the summary to your next diabetes appointment"
            - name: Choosing an insulin pump
              description: |-
                ## Purpose
                Pumps differ in how they attach (tubed or patch), which sensors they work with, whether they run hybrid closed loop and what your health service or insurer will fund. Comparing the models open to you against the same criteria, and trying them where you can, leads to a pump you will be happy wearing for four years or more.

                ## Milestones
                1. The models your clinic supports and your funder covers listed.
                2. Each scored on tubing, sensor pairing, closed loop, size and supplies.
                3. A demo device worn for a day where possible.
                4. A choice recorded with reasons and agreed with your team.

                ## Notes
                Start from the **Purchase decision** template. Warranty length often fixes how long you keep a pump, so weigh it before choosing.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pump chosen from the clinic-supported list, scored against five criteria, with the choice agreed with your team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your clinic which pumps they support and train people on"
                - "Score each pump on tubing, sensor pairing, closed loop and size"
                - "Wear a demo or dummy pump for a day if one is offered"
                - "Record your choice and reasons in a short note"
            - name: Choosing or switching your CGM
              description: |-
                ## Purpose
                Sensors vary in wear time, warm-up, whether they need calibrating, which pumps they talk to and what they cost. If your current sensor causes skin reactions, falls off or does not link to the pump you want, a structured comparison helps you switch for the right reasons.

                ## Milestones
                1. Your reasons for changing written down.
                2. Funded or affordable sensors compared on wear time, warm-up, pairing and cost.
                3. A trial sensor worn where one is available.
                4. The switch agreed with your team and prescriptions updated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A sensor choice recorded with reasons, agreed with your team, and the new prescription in place."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down what you would change about your current sensor"
                - "Compare available sensors on wear time, warm-up and pump pairing"
                - "Ask your clinic whether a trial sensor is available"
                - "Update your prescription and supplies list after switching"
            - name: Starting hybrid closed loop, the first eight weeks
              description: |-
                ## Purpose
                Hybrid closed loop systems adjust insulin from sensor readings, but they still need meals announced and take weeks to learn your settings. Planning the training, the first fortnight of building trust and the follow-up review means you hand the right jobs to the system and keep the ones it cannot do.

                ## Milestones
                1. Training completed and settings entered with your team.
                2. The first two weeks of data reviewed for lows, highs and exits from automatic mode.
                3. Common alerts and the response to each written down.
                4. An eight-week review with your team completed.

                ## Notes
                Most systems still need a bolus before meals, and missed meal boluses are the main reason results disappoint.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Hybrid closed loop in use for eight weeks, with a team review completed and an alert action list written."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Book your closed loop training session with the clinic"
                - "Write a list of the alerts you see and what each means"
                - "Review your first two weeks of data for exits from automatic mode"
                - "Book the eight-week review with your team"
            - name: Pump failure backup plan
              description: |-
                ## Purpose
                Pumps break, sets kink and batteries die, and on a pump there is no long-acting insulin on board, so ketones can rise within a few hours. A written backup plan with pens, long-acting insulin, your team's instructions for switching and the helpline number gets you safely through to a replacement.

                ## Milestones
                1. Your team's written instructions for going back to injections.
                2. In-date long-acting and rapid insulin pens kept as a backup.
                3. Your current pump settings recorded outside the pump.
                4. The pump maker's replacement process and helpline noted.

                ## Notes
                Photograph or print your pump settings after every change, because a replacement pump arrives blank.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Backup pens and a written switch plan are in date, and current pump settings are recorded outside the pump."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your team for written instructions for switching back to pens"
                - "Get a prescription for backup long-acting and rapid pens"
                - "Photograph or print your current pump settings"
                - "Check the backup pens are in date and stored correctly @recurring(quarterly)"
            - name: Alarm settings review to cut alarm fatigue
              description: |-
                ## Purpose
                Alarms that sound for every small rise get silenced, and silenced alarms miss the lows that matter. Reviewing each alert with your team, setting a low alert you never ignore and spacing the rest sensibly keeps the useful warnings and loses the noise.

                ## Milestones
                1. A week of alarms counted by type.
                2. The alarms you routinely dismiss listed.
                3. Thresholds and snooze times adjusted with your team's input.
                4. A week of alarms counted again after the change.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Alarm counts recorded for a week before and after changes agreed with your team, with the low alarm left on throughout."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count how many alarms you get in a week and of which kind"
                - "List the alarms you dismiss without acting"
                - "Ask your team which thresholds to keep and which to adjust"
                - "Count alarms for a week after the changes"
            - name: Overnight hypo reduction plan
              description: |-
                ## Purpose
                Repeated night-time lows disturb sleep, blunt your warning signs and are a frequent reason people keep glucose higher than they would like. Finding the cause, whether evening exercise, late corrections, alcohol or basal, and working through it with your team is worth more than any daytime tweak.

                ## Milestones
                1. Every overnight low in the last month listed with what happened the evening before.
                2. The likely causes ranked.
                3. One change agreed with your team and tried for two weeks.
                4. Overnight lows counted again after the trial.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Overnight lows counted for a month before and two weeks after one change agreed with your team, with both counts recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every overnight low from the last month"
                - "Note the evening activity, food and corrections before each one"
                - "Agree one change with your team and try it for two weeks"
                - "Count overnight lows again after the trial"
            - name: Funding and coverage for pumps and sensors
              description: |-
                ## Purpose
                Whether a pump, CGM or closed loop system is funded depends on criteria such as hypo history, HbA1c, age or insurance plan, and those rules change. Finding exactly which criteria apply to you, gathering the evidence and making a clear request or appeal is often the difference between funded technology and paying yourself.

                ## Milestones
                1. The eligibility criteria for each device in your health system or plan found.
                2. Evidence collected: hypo log, HbA1c history and clinic letters.
                3. A request or appeal submitted with your team's support.
                4. The outcome recorded and any renewal date noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A funding request or appeal submitted with supporting evidence, and the outcome or renewal date recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the published eligibility criteria for the device you want"
                - "Gather your hypo log, HbA1c history and clinic letters"
                - "Ask the agent to draft a clear request letter from your evidence"
                - "Submit the request with your team's support and note the reply"
            - name: Pre-bolus timing experiment
              description: |-
                ## Purpose
                Rapid insulin takes time to start working, so bolusing at the first bite often leaves a breakfast spike that is hard to correct. Testing different timings on the same meal, within the range your team is comfortable with, shows how much a few minutes changes your post-meal curve.

                ## Milestones
                1. Your team's view on pre-bolusing recorded.
                2. One repeatable meal chosen for the test.
                3. Three timings tried, each on at least two days.
                4. Results compared and your usual timing chosen.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Post-meal peaks compared for three bolus timings on the same meal, with a chosen timing written down."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your team how far ahead of meals they are happy for you to bolus"
                - "Choose a breakfast you can repeat exactly"
                - "Try each timing on two separate days"
                - "Compare the peaks and write down your chosen timing"
            - name: Travelling with insulin, pump and sensors
              description: |-
                ## Purpose
                Time zones, airport scanners, heat and lost luggage are the four things that catch people with type 1 out abroad. Planning double supplies in hand luggage, a clinic letter, a time zone insulin plan from your team and the local emergency number means the trip runs on the holiday, not the diabetes.

                ## Milestones
                1. Double the supplies you need packed across two bags, with insulin in hand luggage.
                2. A travel letter from your clinic listing devices and supplies.
                3. A time zone plan for basal insulin and the pump clock agreed with your team.
                4. Travel insurance that covers type 1 confirmed and local emergency numbers noted.

                ## Notes
                Start from the **Trip** template. Check each device maker's guidance on airport body scanners before you fly.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before departure: double supplies packed in two bags, a clinic travel letter, a time zone plan and insurance confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your clinic for a travel letter at least four weeks ahead"
                - "Ask your team for a time zone plan for basal insulin"
                - "Check each device maker's advice on airport scanners"
                - "Pack double supplies split across two bags"
            - name: Surgery or procedure plan for type 1
              description: |-
                ## Purpose
                Fasting before an operation, a sedated colonoscopy or major dental work all disrupt insulin, and ward staff may not know your pump. Agreeing a plan with your diabetes and surgical teams beforehand, covering fasting, basal insulin, whether the pump stays on and who manages glucose, avoids both lows and ketoacidosis around the procedure.

                ## Milestones
                1. The pre-operative team told about type 1 diabetes and your devices.
                2. A written plan for fasting and insulin from your diabetes team.
                3. Agreement on whether you self-manage your pump on the ward.
                4. Supplies and the plan packed in your hospital bag.

                ## Notes
                Ask for the first slot of the morning, which shortens the fast.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written insulin plan for the procedure is agreed by both teams before the procedure date and packed in your bag."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Tell the pre-op team you have type 1 and which devices you use"
                - "Ask your diabetes team for a written fasting and insulin plan"
                - "Ask whether you can keep self-managing your pump on the ward"
                - "Request the first morning slot to shorten the fast"
            - name: Driving rules and pre-drive checks with type 1
              description: |-
                ## Purpose
                Licensing authorities have specific rules for drivers on insulin, such as declaring the condition, checking glucose before driving and reporting severe hypos; the DVLA in the UK is one example. Knowing your local rules, keeping any evidence of checks they require and keeping treatment in the car protects both your safety and your licence.

                ## Milestones
                1. Your licensing authority's rules for insulin users found and summarised.
                2. Any required declaration made and the reply filed.
                3. A pre-drive routine written: glucose check and treatment within reach.
                4. The licence renewal date in your calendar.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your licensing authority's rules summarised, any required declaration made and a pre-drive routine written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up your licensing authority's rules for drivers using insulin"
                - "Make any declaration the rules require and file the reply"
                - "Keep fast-acting glucose within reach of the driving seat"
                - "Check licence and medical declaration renewal dates @recurring(yearly)"
            - name: Exam day plan for students with type 1
              description: |-
                ## Purpose
                Stress, early starts and long papers can push glucose high or low, and a low mid-exam costs marks. Arranging access arrangements in advance, such as keeping your phone or CGM reader, snacks and rest breaks, plus a routine for exam mornings, means you sit the paper at your best.

                ## Milestones
                1. Access arrangements requested from the school, college or university.
                2. Written confirmation that you can keep your CGM device and snacks in the room.
                3. An exam morning routine planned and practised in a mock.
                4. A short note for invigilators on what a hypo looks like.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written confirmation of access arrangements for CGM, snacks and rest breaks received before the first exam."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the exams office how to request access arrangements"
                - "Request permission to keep your CGM device and snacks in the room"
                - "Practise your exam morning routine during a mock"
                - "Give invigilators a short note on what a hypo looks like"
            - name: Race or match day glucose plan
              description: |-
                ## Purpose
                Adrenaline before a race or match can send glucose up, then hours of effort bring it crashing down, and the pattern differs from training. A plan for the day, built from training data and reviewed with your team, covers the night before, the start, fuelling during and the recovery night.

                ## Milestones
                1. Glucose data from two hard training sessions reviewed.
                2. A written plan for the evening before, the start, during and after.
                3. Fuel and hypo treatment carried in a way that works in your sport.
                4. The plan reviewed after the event and updated.

                ## Notes
                Start from the **Training program** template to place the plan inside your training block.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written race or match day plan covering night before, start, during and recovery, used once and updated afterwards."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull CGM data from your two hardest recent training sessions"
                - "Write the plan for the night before, the start, during and after"
                - "Work out how to carry fuel and hypo treatment in your kit"
                - "Write down what to change after the event"
            - name: Starting a new job with type 1
              description: |-
                ## Purpose
                A new job brings decisions about who to tell, where to keep insulin, how to handle long meetings or shift patterns, and whether to ask for adjustments. Planning those before day one, and knowing your rights under local disability or equality law, makes the first weeks easier.

                ## Milestones
                1. A decision made on who to tell and when.
                2. Insulin storage and a private space for injections or site changes arranged.
                3. Any reasonable adjustments requested in writing.
                4. A colleague briefed on hypos, if you choose to.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "By the end of the first month: storage arranged, any adjustments requested in writing and a disclosure decision recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide who at work you want to tell and when"
                - "Find out what local disability or equality law says about adjustments"
                - "Ask about fridge space and a private room for site changes"
                - "Brief one colleague on the signs of a hypo if you choose"
            - name: First ninety days after an adult diagnosis
              description: |-
                ## Purpose
                Type 1 is diagnosed in adults far more often than many people realise, sometimes after months of being treated as type 2. The first three months bring insulin, a meter or CGM, carb counting and many appointments, and a plan for that period with a running question list helps you build habits on the right footing.

                ## Milestones
                1. Your diagnosis explained, including antibody or C-peptide results if tested.
                2. A list of appointments and education sessions over the first ninety days.
                3. A question list started and updated after each appointment.
                4. Basic kit in place: insulin, glucose monitoring, hypo treatment and ketone testing.

                ## Notes
                A honeymoon period, when your own insulin production partly recovers, is common in the first months, so doses often change.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ninety days after diagnosis you hold a written list of appointments attended, questions answered and basic kit in place."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down every appointment you have been given so far"
                - "Start a question list to take to each appointment"
                - "Ask whether antibody or C-peptide tests were done and what they showed"
                - "Check you have hypo treatment and ketone testing at home"
            - name: Moving to university with type 1
              description: |-
                ## Purpose
                Leaving home for university means taking over prescriptions, registering with a new doctor, explaining type 1 to flatmates and managing irregular meals and late nights, often while changing diabetes clinics. Planning the move a couple of months ahead means supplies, care and a support plan arrive with you.

                ## Milestones
                1. Registered with a doctor near campus and repeat prescriptions moved.
                2. Care transferred to, or shared with, a diabetes clinic near the university.
                3. The student disability or support service contacted about exams and accommodation.
                4. Flatmates told the basics and where your hypo kit and glucagon are.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Before term starts: a doctor registration near campus, prescriptions moved, a clinic arranged and flatmates briefed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the doctor's surgery nearest your accommodation and register"
                - "Ask your current clinic to refer you to one near the university"
                - "Contact the student disability service about your needs"
                - "Tell flatmates where your hypo kit and glucagon are kept"
            - name: Moving from paediatric to adult diabetes care
              description: |-
                ## Purpose
                Moving from a children's clinic to an adult one changes a lot at once: appointments get shorter, parents step back and you are expected to run your own prescriptions. Using the transition clinic to practise leading appointments, and taking over supplies before the switch, makes the change less of a cliff edge.

                ## Milestones
                1. Transition clinic dates known and attended.
                2. At least one appointment led by you without a parent speaking.
                3. Prescriptions and supply orders handled by you for three months.
                4. A first adult clinic appointment booked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of self-managed prescriptions and one self-led appointment completed before the first adult clinic visit."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your clinic when transition appointments start"
                - "Lead one appointment yourself with your parent waiting outside"
                - "Take over ordering your own prescriptions"
                - "Write your own question list for the first adult clinic"
            - name: Planning a pregnancy with type 1
              description: |-
                ## Purpose
                Glucose levels around conception and in early pregnancy matter a great deal for the baby, which is why diabetes teams ask for pregnancy to be planned where possible. A pre-conception plan made with your team covers an HbA1c goal, folic acid at the dose they advise, a review of every medicine and how often you will be seen.

                ## Milestones
                1. A pre-conception appointment with your diabetes team held.
                2. The HbA1c goal for trying to conceive agreed and recorded.
                3. Folic acid and any medicine changes advised by the team in place.
                4. A contact for the joint antenatal diabetes clinic saved.

                ## Notes
                Eye screening is usually repeated during pregnancy, so expect extra appointments and plan time off around them.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A pre-conception plan agreed with your diabetes team, with an HbA1c goal, supplements and a medicine review written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your diabetes team for a pre-conception appointment"
                - "Note the HbA1c goal your team suggests before trying"
                - "Ask what folic acid dose and medicine changes they advise"
                - "Save the contact details for the antenatal diabetes clinic"
            - name: Menstrual cycle and glucose patterns
              description: |-
                ## Purpose
                For many people with type 1, insulin needs rise in the days before a period and fall once it starts, which shows up as unexplained highs followed by lows. Tagging cycle days against CGM data for three cycles shows whether you have a pattern your team can help you plan around.

                ## Milestones
                1. Cycle start dates tagged in your CGM or diabetes app.
                2. Three cycles of data collected.
                3. Any repeating pattern described in two sentences.
                4. The pattern discussed with your team and any plan noted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Three cycles of CGM data tagged by cycle day, with any pattern discussed with your team."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose where to tag cycle days alongside your glucose data"
                - "Compare this month's cycle tags with your glucose curves @recurring(monthly:12)"
                - "Describe any repeating pattern after three cycles"
                - "Ask your team whether the pattern should change your settings"
            - name: Diabetes distress and burnout check
              description: |-
                ## Purpose
                Type 1 asks for a constant stream of small decisions, and many people hit stretches of exhaustion where checking and bolusing slip. Noticing distress early with a short questionnaire your team recognises, and knowing who to talk to, including the psychologists attached to many diabetes services, helps before it shows up in HbA1c.

                ## Milestones
                1. A diabetes distress questionnaire your team recognises completed.
                2. Your score and the areas causing most strain noted.
                3. A conversation with your team about support options held.
                4. One task you could share or simplify identified.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A distress questionnaire completed each quarter and discussed with your team at least once in the year."
                cadence: rolling
              tasks:
                - "Ask your team which diabetes distress questionnaire they use"
                - "Complete the questionnaire and note the areas of most strain @recurring(quarterly)"
                - "Raise the result at your next diabetes appointment"
                - "Pick one diabetes task to simplify or share for a month"
            - name: Teaching a partner or flatmate to help in a hypo
              description: |-
                ## Purpose
                The people you live with are the ones most likely to notice a low you miss, but most have never been shown what to do. A thirty-minute walk-through of your hypo plan, the glucagon and CGM sharing turns a frightened bystander into someone who can help.

                ## Milestones
                1. Your hypo plan explained, including the signs you may not notice yourself.
                2. The glucagon shown using a trainer device or the leaflet.
                3. CGM follower sharing set up on their phone if you both want it.
                4. A yearly refresher in the calendar.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least one person you live with has been shown your hypo plan and glucagon, with a yearly refresher booked."
                cadence: cyclic
              tasks:
                - "Choose a quiet half hour to go through your hypo plan together"
                - "Show them the glucagon using the trainer device or leaflet"
                - "Set up CGM follower sharing if you both agree"
                - "Repeat the hypo walk-through with them @recurring(yearly)"
            - name: Long-term complications trend file
              description: |-
                ## Purpose
                Kidney function, urine albumin, retinal grades, blood pressure and cholesterol change slowly over decades, and each clinic letter shows only the latest result. Pulling years of results into one table makes a gentle drift visible early, when acting on it does the most good.

                ## Milestones
                1. Past results gathered from letters, the patient portal and the lab.
                2. A table with one row per year for each measure.
                3. Any measure trending the wrong way flagged.
                4. Flags discussed with your team at the next annual review.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table with at least five years of kidney, eye, blood pressure and cholesterol results, updated each year after review."
                cadence: cyclic
              tasks:
                - "Request copies of past results through your patient portal"
                - "Build a table with one row per year for each measure"
                - "Add the new results after each annual review @recurring(yearly)"
                - "Flag any measure moving the wrong way for your team"
            - name: Open-source automated insulin delivery decision
              description: |-
                ## Purpose
                Some experienced pump users build open-source automated insulin delivery systems, which are not approved medical devices and put responsibility for set-up and safety on the user. Weighing this properly means understanding the requirements, the support your clinic can and cannot give, and how it compares with the approved closed loop options open to you.

                ## Milestones
                1. The approved closed loop options open to you listed for comparison.
                2. Your clinic's position on open-source systems asked and recorded.
                3. The hardware, skills and time commitment of open-source options written down.
                4. A decision recorded with reasons, whichever way it goes.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on open-source automated insulin delivery that includes your clinic's position and a comparison with approved options."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the approved closed loop systems your clinic offers"
                - "Ask your clinic what support they give open-source system users"
                - "Read the official documentation for the open-source project you are considering"
                - "Write down your decision and the reasons for it"
            - name: Multi-day endurance event with type 1
              description: |-
                ## Purpose
                Ultramarathons, long cycling tours and multi-day hikes combine hours of effort, broken sleep, heat and limited resupply, and insulin needs can fall sharply and stay low for days. Planning with your team, testing on long training days and packing backups for every device gets you to the finish with your diabetes under control.

                ## Milestones
                1. An insulin adjustment plan for consecutive long days agreed with your team.
                2. Two back-to-back long training days completed and the data reviewed.
                3. Supplies, backups and insulin cooling packed for every stage.
                4. Crew or companions briefed on your hypo plan.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written multi-day plan agreed with your team, tested on two back-to-back training days, with backups packed for every device."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your team to help plan insulin for several long days in a row"
                - "Run two long training days back to back and review the data"
                - "Pack backup pens, sensors and cooling for each stage"
                - "Brief crew or companions on your hypo plan and kit"
---

# Type 1 Diabetes Management

This area is for anyone living with type 1 diabetes, whether newly diagnosed or decades in, including students juggling lectures and nights out and athletes training around their glucose. It starts with the safety foundations (team contacts, a written hypo plan, kits, glucagon, sick day rules and a supplies count), then the routines that keep insulin, sensors, pumps and clinic visits running, the skills behind everyday dosing decisions, the choices about devices and settings, the events that need a plan, the life stages that change the picture, and finally the work of an experienced self-manager.

What repeats is a monthly reorder day and kit restock, a weekly look at your CGM data, quarterly checks on backup pens, glucagon and device updates, and the yearly review with its screening tests. The Operational checklist, Metrics log, Training program, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
