---
id: physical-health.cardiac-rehabilitation
name: Cardiac Rehabilitation
description: "A rehab place secured and finished, heart medicines kept on track, graded activity you trust again, and a plan for driving, work, mood and the risk factors that follow a heart attack, stent or heart surgery."
category: personal
version: 1.0.0
tags: [physical-health, cardiac-rehabilitation, everyone, retiree, heart-attack, heart-surgery, secondary-prevention, graded-exercise]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - habit-tracker
    - training-program
    - weekly-meal-plan
    - purchase-decision
    - trip
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Cardiac Rehabilitation
          description: "Rebuilding health after a heart attack, stent or heart surgery through cardiac rehab classes, medication adherence, risk factor control and graded activity."
          projects:
            - name: Discharge summary and heart event record
              description: |-
                ## Purpose
                Hospital stays after a heart attack or heart surgery are short and the first days home are a blur, so details like which artery was treated, how many stents were placed and what your heart pumping strength was are easily lost. Getting the discharge summary and angiogram or operation report into one record means every later clinician, from rehab nurse to dentist, gets the facts in minutes.

                ## Milestones
                1. The discharge summary and any procedure report obtained from the hospital or patient portal.
                2. The diagnosis, procedure date, arteries or valves treated and number of stents written on one page.
                3. The ejection fraction or heart function result copied from the report, if one was given.
                4. Copies stored where a family member can find them in an emergency.

                ## Notes
                If the discharge letter uses abbreviations you do not recognise, list them and ask the rehab nurse at the first assessment rather than guessing.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page heart event record with diagnosis, procedure, date and heart function result, stored with the discharge papers."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the discharge summary in your bag, post or patient portal"
                - "Request the angiogram or operation report if it was not given to you"
                - "Write the diagnosis, procedure, date and arteries treated on one page"
                - "Tell a family member where the heart event record is kept"
            - name: Cardiac rehab referral and first assessment booking
              description: |-
                ## Purpose
                Cardiac rehabilitation lowers the chance of another heart event and of readmission, yet a large share of eligible people never start, often because the referral stalled or nobody followed it up. Confirming the referral reached the rehab team and getting the first assessment in the diary within a few weeks of discharge is the single most useful step in this whole area.

                ## Milestones
                1. Confirmation that the hospital sent a rehab referral, with the date it was sent.
                2. Contact details for the local cardiac rehab team saved in your phone.
                3. The first assessment booked, with date, time and location recorded.
                4. Transport or parking for the assessment arranged.

                ## Notes
                If you were not offered rehab, ask the ward, your cardiologist or your doctor to refer you. People who had a stent, bypass, valve surgery, heart failure or a heart attack are usually eligible.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A first cardiac rehab assessment is booked, with its date and the rehab team's contact number recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ring the ward or cardiology office to confirm a rehab referral was sent"
                - "Save the cardiac rehab team's phone number and email"
                - "Book the first rehab assessment and write the date in your calendar"
                - "Arrange a lift or check parking for the assessment day"
            - name: Chest pain action plan with your GTN spray
              description: |-
                ## Purpose
                Many people go home with a glyceryl trinitrate spray or tablets and a verbal explanation they cannot remember a week later. Writing down exactly what your team told you to do if chest pain comes on, how long to wait, when to repeat and when to call an ambulance, turns a frightening moment into a sequence anyone in the house can follow.

                ## Milestones
                1. The instructions your team gave for using the spray written word for word.
                2. The point at which to call emergency services written in plain words.
                3. The plan printed and kept with the spray, plus a copy by the phone.
                4. Everyone you live with shown the plan and where the spray is kept.

                ## Notes
                Use only the instructions your own clinician or pharmacist gave you; this plan records their advice and does not replace it. Sit down before using the spray, as it can make you light-headed.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written chest pain plan in your clinician's words is kept with the spray and by the phone, and the household has read it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your pharmacist to repeat the spray instructions while you write them down"
                - "Write the call-an-ambulance point at the top of one card"
                - "Keep one copy with the spray and one by the phone"
                - "Check the spray is in date and not empty @recurring(quarterly)"
            - name: Heart medicines chart after discharge
              description: |-
                ## Purpose
                After a heart attack or stent most people leave hospital on four or five new medicines at once, often an antiplatelet pair, a statin, a beta blocker and an ACE inhibitor, with old tablets stopped or changed. A single chart with each medicine's name, what it is for and when to take it prevents doubled doses, missed antiplatelets and confusion at the pharmacy.

                ## Milestones
                1. Every medicine from the discharge letter listed with its name, purpose and time of day.
                2. Medicines stopped in hospital crossed off the old list and removed from the cupboard.
                3. The chart checked against the discharge letter by a pharmacist.
                4. A copy of the chart kept in your wallet or phone.

                ## Notes
                Write the dose exactly as printed on the label. If the discharge letter and the pharmacy label disagree, ask the pharmacist before taking either.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A heart medicine chart matching the discharge letter, checked by a pharmacist, with a copy carried day to day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every medicine on the discharge letter with its purpose and time"
                - "Take old tablets that were stopped back to the pharmacy"
                - "Ask a pharmacist to check the chart against the discharge letter"
                - "Save a photo of the chart on your phone"
            - name: First fortnight at home after a heart attack or stent
              description: |-
                ## Purpose
                The first two weeks home are when people either do too much to prove they are fine or too little because every twinge feels dangerous. A simple daily shape, with short walks, rest after meals, planned visitors and a note of any symptom, gives you a safe pattern until the rehab team sees you.

                ## Milestones
                1. A daily outline written for the two weeks, with walks, rests and meals marked.
                2. Short walks done on most days at a level where you can still talk.
                3. Visitors and household jobs limited to what the plan allows.
                4. Any new symptom written down with the date and what you were doing.

                ## Notes
                Follow the activity advice in your discharge letter. If it says nothing specific, ask the ward or rehab nurse before increasing anything.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fourteen days completed with a written daily outline and a symptom note brought to the first rehab assessment."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a simple daily outline for the next two weeks"
                - "Agree with family which household jobs they will cover for now"
                - "Note any new symptom with the date and what you were doing"
                - "Bring the fortnight's notes to the first rehab assessment"
            - name: Breastbone and wound care after heart surgery
              description: |-
                ## Purpose
                After bypass or valve surgery through the breastbone, the bone takes around two to three months to knit, and pushing, pulling or lifting too soon can stop it healing well. Recording your surgeon's movement precautions, checking the chest and leg wounds daily and knowing which wound changes need a call protects the operation you have just been through.

                ## Milestones
                1. Your surgical team's breastbone precautions and the date they end written down.
                2. A safe way to get out of bed and up from a chair practised without pushing on the arms.
                3. Chest and leg wounds checked daily until healed, with any change noted.
                4. The signs that mean calling the surgical team written on a card.

                ## Notes
                Precautions differ between surgeons and techniques, so follow your own team's list. Redness spreading from a wound, new discharge, fever or a clicking breastbone should be reported promptly.
              priority: high
              deadlineOffsetDays: 56
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Breastbone precautions followed to the end date set by your surgeon, with daily wound checks recorded until healing is confirmed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write your surgeon's breastbone precautions and their end date on one card"
                - "Practise getting out of bed by rolling to your side first"
                - "Check chest and leg wounds and note any change"
                - "Call the surgical team about any wound sign on the card"
            - name: Rehab entry assessment and personal goals
              description: |-
                ## Purpose
                The first rehab assessment sets your exercise level, checks your risk factors and asks what you want to get back to, and most people arrive without having thought about the last part. Coming with two or three concrete goals, such as walking to the shops, returning to golf or carrying the grandchildren, means the programme is built around your life rather than a generic plan.

                ## Milestones
                1. Two or three personal recovery goals written in your own words.
                2. Current medicines, symptoms and questions brought to the assessment.
                3. The assessment attended and your starting exercise level recorded.
                4. Your goals written into the rehab plan by the team.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The entry assessment is attended and your written goals and starting exercise level are in your rehab notes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write three things you want to be able to do again"
                - "Pack your medicine chart and symptom notes for the assessment"
                - "Ask the team what your starting exercise level is"
                - "Check your goals appear in the written rehab plan"
            - name: Secondary prevention numbers on one page
              description: |-
                ## Purpose
                After a heart event the aim shifts from treating the attack to preventing the next one, and that depends on a handful of numbers: blood pressure, cholesterol, blood glucose or HbA1c, weight or waist, and smoking status. Gathering your latest values and the targets your team set onto one page shows at a glance where the biggest gains are.

                ## Milestones
                1. The latest blood pressure, cholesterol, glucose and weight results collected with dates.
                2. Smoking and alcohol status written honestly.
                3. The target your team set for each number recorded beside it.
                4. The one number furthest from target circled for discussion at rehab.

                ## Notes
                Targets after a heart event are often stricter than for the general population. Use the ones your own clinician sets.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page table of current risk factor numbers with your team's target beside each, discussed at rehab."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy your latest blood pressure, cholesterol and glucose results with dates"
                - "Ask the rehab nurse for your target for each number"
                - "Circle the number furthest from its target"
                - "Ask the agent to lay the numbers and targets out as a one-page table"
            - name: Heart information wallet card
              description: |-
                ## Purpose
                If you collapse, fall or need emergency treatment away from home, the people helping you need to know quickly that you have a stent, take antiplatelet medicines or have had bypass surgery. A wallet card and a phone medical ID with those facts can change what happens in the first ten minutes.

                ## Milestones
                1. A card listing your heart condition, procedures and dates.
                2. Antiplatelet and blood thinning medicines named on the card.
                3. An emergency contact and your cardiology team's number added.
                4. The same details entered in your phone's emergency medical ID.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A wallet card and phone medical ID both show your heart procedures, antiplatelet medicines and an emergency contact."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your procedures, dates and key heart medicines on a card"
                - "Add an emergency contact and the cardiology team's number"
                - "Fill in the emergency medical ID on your phone"
                - "Update the card after any medicine or procedure change @recurring(yearly)"
            - name: Understanding what happened to your heart
              description: |-
                ## Purpose
                People who understand what blocked, which part of the heart was affected and what the stent or bypass did tend to take their medicines more reliably and worry less about every ache. An hour with your discharge letter, a reputable heart charity's guide and a short list of questions turns medical terms into a picture you can explain to family.

                ## Milestones
                1. The type of heart event you had named correctly, for example a STEMI, NSTEMI or unstable angina.
                2. The treated artery or valve located on a simple heart diagram.
                3. What the stent, bypass or valve repair does explained in your own words.
                4. Remaining questions written down for the rehab nurse or cardiologist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written explanation of your heart event and treatment, in your own words, checked with a member of your care team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a heart charity guide to your type of heart event"
                - "Find the treated artery or valve on a heart diagram"
                - "Write a five-line explanation you could give your family"
                - "Ask the rehab nurse to check your explanation is right"
            - name: Completing the full rehab class programme
              description: |-
                ## Purpose
                Most of the benefit of cardiac rehab comes from finishing it, yet many people drop out around week three or four when they feel better or go back to work. Treating the six to twelve weeks of supervised classes as fixed appointments, with transport and cover sorted in advance, is what gets you to the end.

                ## Milestones
                1. Every scheduled class date for the programme in your calendar.
                2. Transport, work and caring arrangements sorted for each session.
                3. At least nine in ten classes attended.
                4. Missed classes made up or discussed with the rehab team.

                ## Notes
                If the class times clash with work, ask about evening, home-based or online options before dropping out.
              priority: high
              deadlineOffsetDays: 84
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The rehab programme completed with at least 90 percent attendance recorded by the rehab team."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Put every rehab class date in your calendar for the whole programme"
                - "Arrange transport and cover for the first four weeks of classes"
                - "Attend the scheduled rehab class @recurring(weekly:tue,thu)"
                - "Tell the rehab team in advance about any class you cannot make"
            - name: Exertion and symptom log for every session
              description: |-
                ## Purpose
                Rehab teams adjust your exercise level from how hard each session felt and whether any symptom appeared, and that information disappears unless someone writes it down. A short log after every class and home session, with the effort rating, heart rate if measured and any breathlessness or chest discomfort, gives the team the evidence to move you on safely.

                ## Milestones
                1. A log with columns for date, activity, minutes, effort rating, heart rate and symptoms.
                2. Every class and home session entered on the day.
                3. A weekly look back showing whether effort ratings are falling for the same work.
                4. The log shown to the rehab team at each review.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks of exertion log entries, each reviewed weekly and shown to the rehab team."
                cadence: rolling
              tasks:
                - "Create an exertion log from the metrics log template"
                - "Enter each session's minutes, effort rating and any symptom on the day"
                - "Review the week's entries for any rising effort or new symptom @recurring(weekly:sat)"
                - "Show the log to the rehab team at your next review"
            - name: Graded walking plan set by the rehab team
              description: |-
                ## Purpose
                Walking is the backbone of most cardiac rehab programmes, but the safe starting distance and rate of increase after a heart event are not the same as for a healthy beginner. Agreeing a starting point and weekly step-up with your rehab physiotherapist, then following it, builds stamina without the boom and bust of doing too much on a good day.

                ## Milestones
                1. A starting walk time and pace agreed with the rehab team.
                2. A weekly increase rule written down, for example a few minutes more each week.
                3. A flat, safe route with places to rest chosen near home.
                4. The target walking time your team set reached and held for two weeks.

                ## Notes
                Walk at a pace where you can still hold a conversation. Stop and rest if you get chest discomfort, unusual breathlessness or dizziness, and report it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The walking target agreed with your rehab team reached and held for two consecutive weeks, with each step-up recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the rehab physiotherapist for your starting walk time and pace"
                - "Choose a flat route near home with a bench halfway"
                - "Add the agreed extra minutes to your walks for the coming week @recurring(weekly:mon)"
                - "Record each walk in your exertion log"
            - name: Daily heart medicine routine
              description: |-
                ## Purpose
                Antiplatelet medicines keep a new stent open, and stopping them early, even for a few days, is one of the main causes of stent blockage. Tying your heart medicines to a fixed daily moment, with a weekly organiser and a monthly reorder date, makes missed doses and empty boxes rare.

                ## Milestones
                1. A fixed daily time for heart medicines linked to an existing habit such as breakfast.
                2. A weekly pill organiser filled from the medicine chart.
                3. A reorder day each month so supplies never run below a week.
                4. Thirty consecutive days with no missed doses recorded.

                ## Notes
                Start from the **Habit tracker** template. Never stop an antiplatelet medicine, even before dental work or surgery, without speaking to your cardiologist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty consecutive days of heart medicines ticked off in a habit tracker, with a monthly reorder date set."
                cadence: rolling
              tasks:
                - "Set a habit tracker from the template for your heart medicines"
                - "Take your heart medicines at the fixed daily time and tick them off @recurring(daily)"
                - "Fill the weekly pill organiser from your medicine chart"
                - "Reorder heart medicines so supply never drops below a week @recurring(monthly:9)"
            - name: Home exercise programme between classes
              description: |-
                ## Purpose
                Two supervised classes a week are not enough on their own, and rehab teams usually expect two or three home sessions as well. Turning the exercises the team gave you into a written home programme, with a set place and time, means the habit is already running when the classes end.

                ## Milestones
                1. The home exercises from rehab written out with sets, times and effort level.
                2. A safe space at home cleared, with a sturdy chair and room to step.
                3. Two or three home sessions done each week alongside classes.
                4. The programme updated each time the rehab team changes your level.

                ## Notes
                Start from the **Training program** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written home exercise programme matched to your rehab level, with at least two home sessions logged each week for six weeks."
                cadence: rolling
              tasks:
                - "Write out the home exercises from rehab using the training program template"
                - "Clear a space at home with a sturdy chair"
                - "Do your home exercise session and log it @recurring(weekly:wed,sat)"
                - "Ask the rehab team to update the programme when your level changes"
            - name: Monthly secondary prevention check
              description: |-
                ## Purpose
                Blood pressure, cholesterol, glucose and weight drift slowly, and the months after rehab ends are when good habits fade unnoticed. A fifteen-minute check each month against the targets on your one-page summary catches drift early, while it is still a small change rather than a new tablet.

                ## Milestones
                1. A monthly slot in the calendar for the check.
                2. Home blood pressure and weight entered against their targets each month.
                3. Any blood results since the last check added.
                4. A rule agreed with your clinician for when a number should prompt a call.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly checks recorded against your targets, with any out-of-range number followed up."
                cadence: rolling
              tasks:
                - "Ask your clinician which change in a number should prompt a call"
                - "Compare this month's blood pressure and weight with your targets @recurring(monthly:12)"
                - "Add any new blood results to your one-page summary"
            - name: Annual cardiac review with your practice
              description: |-
                ## Purpose
                Once rehab and the early cardiology follow-ups finish, most people are reviewed once a year by their own practice, and that review is only as good as the preparation. Booking blood tests beforehand and bringing your readings, medicine questions and any new symptoms keeps your secondary prevention plan current for the year ahead.

                ## Milestones
                1. The annual review and its blood tests booked with the bloods two weeks earlier.
                2. A year's blood pressure, weight and exertion notes summarised on one page.
                3. Questions about medicines, symptoms and activity written in advance.
                4. Any change to medicines or targets recorded straight after the review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An annual cardiac review attended each year, with blood results back beforehand and changes recorded on the day."
                cadence: cyclic
              tasks:
                - "Book the annual cardiac review and its blood tests @recurring(yearly)"
                - "Summarise the year's readings and symptoms on one page"
                - "Write your medicine and activity questions before the review"
                - "Record any changes to medicines or targets the same day"
            - name: Rehab dietitian's advice in the weekly shop
              description: |-
                ## Purpose
                Eating after a heart event is usually covered in a rehab education session, and most of what the dietitian says is forgotten by the next shop. Turning the dietitian's three or four main points, such as more oily fish, fewer processed meats and less salt, into a weekly meal plan is how the advice actually reaches the plate.

                ## Milestones
                1. The dietitian's main points written as three or four rules.
                2. A weekly meal plan that applies each rule at least once.
                3. A shopping list built from the plan each week.
                4. Four weeks of plans kept so you can repeat the ones that worked.

                ## Notes
                Start from the **Weekly meal plan** template. If you also have diabetes or kidney disease, check the advice fits with that team's guidance.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly meal plans that each apply the rehab dietitian's main points, with matching shopping lists."
                cadence: rolling
              tasks:
                - "Write the rehab dietitian's main points as three or four rules"
                - "Plan next week's meals and shopping list against those rules @recurring(weekly:fri)"
                - "Swap one regular meal for an oily fish dish this week"
                - "Keep the plans that worked in one folder to reuse"
            - name: Daily relaxation practice from rehab
              description: |-
                ## Purpose
                Most cardiac rehab programmes teach a relaxation or breathing technique because stress after a heart event is common and makes symptoms harder to read. Ten minutes a day of the method you were taught, at the same time each day, keeps it available for the moments you actually need it.

                ## Milestones
                1. The relaxation or breathing method from rehab written down step by step.
                2. A quiet ten-minute slot chosen for each day.
                3. Twenty-one days of practice completed.
                4. The method used at least once in a real stressful moment and noted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty-one days of a ten-minute relaxation practice recorded, with at least one use in a stressful moment noted."
                cadence: rolling
              tasks:
                - "Write down the relaxation method taught at rehab step by step"
                - "Practise the relaxation method for ten minutes @recurring(daily)"
                - "Note one moment this week when the method helped"
            - name: Mood and worry check in the first six months
              description: |-
                ## Purpose
                Around one in three people feel low or anxious after a heart attack, and fear of another event can quietly stop people exercising, working or going out. A brief monthly check of mood, sleep and worry, shared with your rehab team or doctor if it stays low, means help arrives in weeks rather than after a year of struggling.

                ## Milestones
                1. A short standard mood questionnaire chosen with your rehab nurse or doctor.
                2. The questionnaire completed once a month for six months.
                3. A threshold agreed for when to ask for psychological support.
                4. Support asked for if the threshold is crossed twice in a row.

                ## Notes
                If you have thoughts of harming yourself, contact emergency services or a crisis line straight away rather than waiting for the monthly check.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly mood scores recorded, with support requested whenever the agreed threshold was crossed."
                cadence: rolling
              tasks:
                - "Ask your rehab nurse which short mood questionnaire to use"
                - "Complete the mood questionnaire and note the score @recurring(monthly:20)"
                - "Agree with your doctor the score that should prompt a referral"
                - "Tell one person close to you how the last month has felt"
            - name: Reading your echo and ejection fraction report
              description: |-
                ## Purpose
                An echocardiogram after a heart attack measures how well the heart is pumping, and the ejection fraction figure shapes which medicines you are offered and whether heart failure care is needed. Knowing your number, what range it falls in and whether a repeat scan is planned helps you follow decisions made about you.

                ## Milestones
                1. The echo report obtained and your ejection fraction found in it.
                2. The meaning of normal, mildly reduced and reduced ranges understood.
                3. Whether a repeat echo is planned, and when, confirmed.
                4. Any heart muscle or valve findings listed for discussion.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your ejection fraction, its range and the date of any repeat echo are written in your heart event record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Request a copy of your echocardiogram report"
                - "Find the ejection fraction and any valve comments in the report"
                - "Ask your cardiology team whether a repeat echo is planned"
                - "Add the result and repeat date to your heart event record"
            - name: Talk test and exertion scale practice
              description: |-
                ## Purpose
                Rehab teams use the talk test and a rating of perceived exertion scale because they work without gadgets and stay accurate on beta blockers, which blunt the heart rate. Learning to rate your effort consistently lets you exercise in the right zone at home, on holiday and long after the classes end.

                ## Milestones
                1. The exertion scale your rehab team uses printed and kept with your exercise kit.
                2. The target effort range your team set written on it.
                3. The talk test practised on three walks at different paces.
                4. Your own ratings checked against the instructor's view in class.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can rate effort on your team's scale and your ratings match the instructor's view in at least three classes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the rehab team for the exertion scale they use and your target range"
                - "Print the scale and keep it with your exercise kit"
                - "Try the talk test at three different walking paces"
                - "Compare your effort rating with the instructor's in your next class"
            - name: Why antiplatelet medicines protect the stent
              description: |-
                ## Purpose
                Dual antiplatelet therapy is usually prescribed for a set period after a stent, and stopping it early because of bruising, a dental appointment or a pharmacist's query is risky. Understanding what each antiplatelet does and how long your cardiologist wants it continued means you can speak up when someone suggests a pause.

                ## Milestones
                1. Each antiplatelet medicine you take named, with what it does in a sentence.
                2. The planned length of dual therapy confirmed with your cardiology team.
                3. The end date written in your medicine chart.
                4. A sentence ready for dentists and other clinicians about who to ask before stopping.

                ## Notes
                Bruising more easily is common on these medicines. Report bleeding that will not stop, black stools or blood in urine to your clinician promptly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The planned end date of dual antiplatelet therapy confirmed with cardiology and written in your medicine chart."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the patient leaflet for each antiplatelet medicine"
                - "Ask cardiology how long your dual antiplatelet therapy should last"
                - "Write the planned end date in your medicine chart"
                - "Tell your dentist which antiplatelet medicines you take"
            - name: Warm-up and cool-down routine you can do alone
              description: |-
                ## Purpose
                A damaged or recently treated heart copes poorly with sudden effort and sudden stopping, which is why every rehab class spends ten to fifteen minutes warming up and cooling down. Learning the routine well enough to do it without an instructor protects you on every walk, swim or gym session afterwards.

                ## Milestones
                1. The class warm-up and cool-down written or filmed with the instructor's permission.
                2. The routine done unprompted at the start and end of three home sessions.
                3. The timing matched to what your rehab team recommends.
                4. The routine adapted for walking, cycling or swimming as needed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written warm-up and cool-down routine you can complete unprompted, used at the start and end of every home session for two weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the instructor to talk you through the warm-up after class"
                - "Write the warm-up and cool-down steps on one card"
                - "Use the card at the start and end of three home sessions"
                - "Adapt the routine for the activity you plan to do most"
            - name: Starting light strength training with rehab guidance
              description: |-
                ## Purpose
                Muscle strength makes daily tasks like carrying shopping and climbing stairs less demanding on the heart, and many rehab programmes add light resistance work after the first weeks. Learning correct technique, breathing out on effort and the weights your team allows means you can keep strength work going safely once rehab ends.

                ## Milestones
                1. Strength exercises and starting weights or bands agreed with the rehab team.
                2. Breathing out on effort practised so you never hold your breath while lifting.
                3. Two strength sessions a week completed for six weeks.
                4. A progression rule from the rehab team written down.

                ## Notes
                After surgery through the breastbone, upper body strength work usually waits until your surgeon's precautions end.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six weeks of twice-weekly strength sessions at the level your rehab team set, with a written progression rule."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the rehab team which strength exercises and resistance to start with"
                - "Practise breathing out on the effort phase of each movement"
                - "Buy or borrow the resistance bands or light weights they suggest"
                - "Write the team's rule for when to increase resistance"
            - name: Taking your pulse and using a heart rate monitor
              description: |-
                ## Purpose
                Some rehab teams give a target heart rate range, and an irregular or unusually fast pulse is worth reporting. Learning to take your pulse by hand and, if you use one, to check a chest strap or watch against it, gives you a reliable reading and stops you trusting a gadget that is wrong.

                ## Milestones
                1. Your pulse taken at the wrist and counted for a full minute.
                2. Your resting pulse recorded on three mornings.
                3. Any target heart rate range from your team written down, noting your beta blocker.
                4. A watch or strap reading compared with a hand count at rest and after a walk.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three resting pulse readings recorded and any wearable device checked against a manual count within five beats."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the rehab nurse to show you how to find your wrist pulse"
                - "Record your resting pulse on three mornings"
                - "Compare your watch or strap with a hand count after a walk"
                - "Ask whether you have a target heart rate range on your medicines"
            - name: Household CPR and defibrillator awareness
              description: |-
                ## Purpose
                People who have had one heart event are at higher risk of another, and the person most likely to witness it is a partner or family member. A short CPR course for the household and knowing where the nearest public defibrillator is turns a helpless few minutes into ones where everyone knows what to do.

                ## Milestones
                1. At least one adult in the household booked onto a CPR course.
                2. The course attended and the main steps written on the fridge.
                3. The nearest public defibrillators to home located and noted.
                4. A refresher date set for the household.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one household member has completed a CPR course and the nearest defibrillator location is written by the phone."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find a CPR course for family members near you"
                - "Look up the nearest public defibrillator on a defibrillator map app"
                - "Write the CPR steps and defibrillator location by the phone"
                - "Ask the household to refresh their CPR skills @recurring(yearly)"
            - name: Return to driving after a heart event
              description: |-
                ## Purpose
                Licensing rules set minimum gaps before driving after a heart attack, stent, bypass or device fitting, and they differ by country, procedure and whether you hold a car or a commercial licence. Checking your licensing authority's rules and your insurer's position before getting back behind the wheel avoids driving uninsured or illegally.

                ## Milestones
                1. Your licensing authority's guidance for your procedure found and read.
                2. Whether you must notify the authority confirmed in writing or online.
                3. Your insurer told if their policy requires it.
                4. The earliest date you may drive, agreed with your clinician, written down.

                ## Notes
                Bus, lorry and taxi licences usually have much stricter rules and may need further tests. Ask your cardiologist early if you drive for work.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on your driving start date, based on your licensing authority's rules and confirmed with your clinician and insurer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up your licensing authority's rules for your heart procedure"
                - "Check whether you must notify the authority and do so if required"
                - "Ask your insurer whether they need to be told"
                - "Confirm the earliest driving date with your clinician"
            - name: Phased return to work plan
              description: |-
                ## Purpose
                Many people return to work between two weeks and three months after a heart event, depending on the job and the procedure, and going straight back to full hours is a common cause of setbacks. A phased plan agreed with your employer and occupational health, with lighter duties and reduced hours at first, protects both your recovery and your job.

                ## Milestones
                1. A likely return date discussed with your rehab team or doctor.
                2. A fit note or medical letter describing any adjustments obtained.
                3. A phased hours and duties plan agreed with your employer in writing.
                4. A review meeting held after the first month back.

                ## Notes
                Jobs with heavy lifting, safety-critical duties or shift work may need occupational health input before you return.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written phased return plan agreed with your employer, with a review meeting held one month after you go back."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your rehab team when your type of work is likely to be realistic"
                - "Request a fit note listing any adjustments you need"
                - "Ask the agent to draft a phased hours proposal for your manager"
                - "Book a review meeting for one month after your return"
            - name: Resuming sex and intimacy after a heart event
              description: |-
                ## Purpose
                Worry about sex after a heart attack or surgery is near universal and rarely raised, so couples often avoid intimacy for months longer than they need to. Getting a clear answer from your rehab team on timing, what to watch for and whether any medicine interacts with erectile dysfunction treatment takes the guesswork out.

                ## Milestones
                1. The question about resuming sex asked of your rehab nurse or doctor.
                2. Any symptom that should make you stop written down.
                3. Medicine interactions checked, especially between nitrates and erectile dysfunction tablets.
                4. The answers shared with your partner.

                ## Notes
                Erectile dysfunction tablets must not be taken with nitrate medicines such as a GTN spray. Ask your clinician before using either.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written answers from your rehab team on timing, warning symptoms and medicine interactions, shared with your partner."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your heart charity's leaflet on sex after a heart event"
                - "Write your question for the rehab nurse in advance"
                - "Ask whether any of your medicines interact with erectile dysfunction treatment"
                - "Talk through the answers with your partner"
            - name: Lifting, housework and gardening graded return
              description: |-
                ## Purpose
                Vacuuming, carrying shopping, mowing and digging all load the heart differently from walking, and the question people ask most at rehab is when they can do them again. Listing your regular household jobs, agreeing an order with the rehab team and adding them back one at a time keeps the home running without a setback.

                ## Milestones
                1. Your regular household and garden jobs listed from lightest to heaviest.
                2. The rehab team's view on when each can restart recorded.
                3. Jobs added back one at a time, with how each felt noted.
                4. Heavy jobs such as digging or moving furniture delegated until cleared.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A graded list of household and garden jobs, each restarted on the timing agreed with your rehab team and noted in your log."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List your regular household and garden jobs from lightest to heaviest"
                - "Ask the rehab team when each job on the list can restart"
                - "Add one job back this week and note how it felt"
                - "Arrange help for the heavy jobs not yet cleared"
            - name: Cold weather and hot weather exertion plan
              description: |-
                ## Purpose
                Cold air narrows blood vessels and raises blood pressure, which is why shovelling snow and brisk walks into a winter wind are linked with heart events, while heat and dehydration strain the heart in summer. A plan for exercising and doing outdoor jobs in extreme weather keeps your activity going all year without unnecessary risk.

                ## Milestones
                1. Indoor alternatives to your usual walk listed for very cold or very hot days.
                2. Winter clothing for walking checked, including a scarf over nose and mouth.
                3. Snow clearing and heavy outdoor jobs delegated or reduced.
                4. Your team asked whether any of your medicines affect heat tolerance.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written plan for very cold and very hot days, with indoor alternatives and delegated heavy outdoor jobs."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List two indoor alternatives to your usual walk"
                - "Check you have a warm hat, gloves and a scarf for winter walks"
                - "Arrange who will clear snow or ice this winter"
                - "Review the weather plan before winter starts @recurring(yearly)"
            - name: Home-based or digital rehab instead of hospital classes
              description: |-
                ## Purpose
                Hospital classes do not suit everyone: shift work, caring duties, distance or anxiety about groups keep many people away. Most services now offer a home-based programme with a manual, phone calls or an app, which works as well for many people as long as you choose it deliberately rather than by dropping out.

                ## Milestones
                1. The rehab options your local service offers listed.
                2. The pros and cons of each written against your work, travel and preferences.
                3. A choice made and confirmed with the rehab team.
                4. The first contact for the chosen programme booked.
              priority: medium
              deadlineOffsetDays: 28
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between class-based and home-based rehab, confirmed with the rehab team and the first session booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the rehab team which programme formats they offer"
                - "Write what makes attending classes hard or easy for you"
                - "Choose a format and tell the rehab team"
                - "Book the first session or call of the chosen programme"
            - name: Choosing a community exercise class after rehab
              description: |-
                ## Purpose
                When the hospital programme ends, the next step is usually a community class run by instructors trained in cardiac exercise, often called a phase four class. Comparing two or three local options on qualifications, cost, timing and atmosphere makes it far more likely you will still be exercising a year later.

                ## Milestones
                1. Two or three local classes for people with heart conditions found.
                2. Each checked for a cardiac-trained instructor and how they handle medical information.
                3. A taster session tried at your preferred option.
                4. A class chosen and the first month booked or paid.

                ## Notes
                Start from the **Purchase decision** template. Ask your rehab team for their list of recommended local classes first.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A community cardiac exercise class chosen from at least two compared options, with the first month booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the rehab team for local classes for people with heart conditions"
                - "Check each instructor holds a cardiac exercise qualification"
                - "Try a taster session at your top choice"
                - "Book the first month at the class you chose"
            - name: Flying and travel insurance after a heart event
              description: |-
                ## Purpose
                Airlines and insurers have their own rules after a heart attack, stent or surgery, and a policy that excludes your heart condition can leave you with a huge bill abroad. Checking when your team considers you fit to fly, declaring the condition properly and packing medicines correctly makes the first trip a relief rather than a gamble.

                ## Milestones
                1. Your clinician's view on when you are fit to fly recorded.
                2. Travel insurance quotes obtained with the heart condition fully declared.
                3. A medicine supply plus spare and a copy of your medicine chart packed in hand luggage.
                4. The location of medical care at your destination noted.

                ## Notes
                Start from the **Trip** template. Nondisclosure of a heart condition can void a travel policy entirely.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A travel policy that covers your declared heart condition, and a fit-to-fly view from your clinician, recorded before booking."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your clinician when you will be fit to fly"
                - "Get travel insurance quotes with the heart condition fully declared"
                - "Pack medicines and the medicine chart in hand luggage"
                - "Note the nearest hospital at your destination"
            - name: First cardiology follow-up appointment
              description: |-
                ## Purpose
                The first clinic visit after a heart attack or procedure, often six to twelve weeks on, is short and covers medicines, test results and whether further procedures are needed. Arriving with your readings, symptom notes and a ranked list of questions makes sure the decisions that matter most to you are discussed.

                ## Milestones
                1. The appointment date confirmed and recent tests booked beforehand if requested.
                2. Your top three questions ranked in order.
                3. Your exertion log, readings and medicine chart brought along.
                4. Decisions and any medicine changes written down before leaving.

                ## Notes
                Start from the **Meeting notes** template. Bringing a family member to take notes helps, as much is said quickly.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first cardiology follow-up attended with a ranked question list, and every decision recorded in meeting notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the date and any tests needed before the appointment"
                - "Rank your top three questions for the cardiologist"
                - "Pack your exertion log, readings and medicine chart"
                - "Write down every decision and medicine change before leaving"
            - name: Six-week review after bypass or valve surgery
              description: |-
                ## Purpose
                Around six weeks after heart surgery the surgical team or cardiologist checks the wounds, the breastbone and your progress, and decides when lifting restrictions and driving can change. Preparing a short summary of wound healing, pain, sleep and activity means you leave knowing what you are now cleared to do.

                ## Milestones
                1. A summary of wound healing, pain, sleep and activity since surgery written.
                2. Questions about lifting, driving and upper body exercise listed.
                3. The review attended and the clearances given recorded.
                4. Your rehab team told about any new restrictions or clearances.
              priority: medium
              deadlineOffsetDays: 49
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The six-week surgical review attended, with clearances for lifting, driving and exercise recorded and passed to the rehab team."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a half-page summary of healing, pain, sleep and activity"
                - "List questions about lifting, driving and upper body exercise"
                - "Record each clearance or restriction the surgeon gives"
                - "Pass the clearances to your rehab team"
            - name: Exercise stress test preparation
              description: |-
                ## Purpose
                An exercise tolerance test or stress echo may be used to judge how your heart copes with effort, either before rehab ends or to look for remaining narrowed arteries. Knowing which medicines to pause only if instructed, what to wear and what the result means for your activity level gets you a valid test and a clear next step.

                ## Milestones
                1. The appointment letter's preparation instructions read in full.
                2. Any instruction about medicines before the test confirmed with the department.
                3. Comfortable shoes and clothes ready for the day.
                4. The result and its effect on your exercise level recorded.

                ## Notes
                Only pause a medicine before the test if the department or your cardiologist tells you to.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The stress test completed as instructed, with its result and any change to your exercise level written in your record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the preparation section of the test appointment letter"
                - "Ring the department to confirm any medicine instructions"
                - "Lay out walking shoes and loose clothing the night before"
                - "Ask what the result means for your exercise level"
            - name: Rehab completion assessment and repeat fitness test
              description: |-
                ## Purpose
                At the end of the programme the rehab team repeats the fitness test and risk factor checks from the start, which is the clearest evidence of how far you have come. Treating it as a planning meeting, not a goodbye, means you leave with a written long-term exercise and prevention plan.

                ## Milestones
                1. Your starting fitness test result and goals found for comparison.
                2. The completion assessment attended and the new results recorded.
                3. A written long-term exercise plan given or agreed.
                4. Your doctor sent the completion summary by the rehab team.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The completion assessment attended, with start and finish fitness results compared and a long-term exercise plan in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your starting fitness result and goals from the first assessment"
                - "Ask the team to compare your start and finish results"
                - "Request a written long-term exercise plan"
                - "Check the completion summary was sent to your doctor"
            - name: Twelve-month review and the antiplatelet decision
              description: |-
                ## Purpose
                One year after a heart attack or stent is a natural checkpoint: many people reach the planned end of dual antiplatelet therapy, and it is a good moment to look back at fitness, numbers and mood. Preparing for this review means the decision about your medicines is made deliberately by your cardiologist and you understand what changes.

                ## Milestones
                1. The planned end date for dual antiplatelet therapy checked against your chart.
                2. A one-year comparison of fitness, risk factor numbers and mood prepared.
                3. The review attended and any medicine change recorded.
                4. Your pharmacist and medicine chart updated.

                ## Notes
                Do not stop either antiplatelet medicine on your own when a pack runs out at the one-year mark. Wait for the cardiologist's decision.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A twelve-month review attended, with the cardiologist's antiplatelet decision recorded in your medicine chart."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the planned antiplatelet end date in your medicine chart"
                - "Prepare a one-year comparison of fitness, numbers and mood"
                - "Ask the cardiologist which antiplatelet changes, if any, apply now"
                - "Update your medicine chart and tell the pharmacy"
            - name: A goal walk six months after rehab
              description: |-
                ## Purpose
                A dated target gives the months after rehab a point, and plenty of people mark recovery with a sponsored walk, a coastal path or a hill they used to climb. Choosing an event with your team's blessing and building up to it keeps exercise going through the stage when most people quietly stop.

                ## Milestones
                1. An event or walk chosen and its date fixed.
                2. The distance and terrain checked with your rehab team or class instructor.
                3. A build-up plan written backwards from the date.
                4. The walk completed and celebrated.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A chosen walk or event completed on its date, after a written build-up plan agreed with your instructor."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Pick a walk or sponsored event about six months away"
                - "Check the distance and terrain with your instructor"
                - "Write a weekly build-up plan backwards from the date"
                - "Invite a friend or family member to walk it with you"
            - name: Supporting a partner through cardiac rehab
              description: |-
                ## Purpose
                Partners often carry the shock of the heart event, the extra household load and a constant worry about every symptom, with nobody asking how they are. Agreeing roles, learning the warning signs together and protecting some time for yourself helps the person recovering and stops the partner burning out.

                ## Milestones
                1. The partner invited to at least one rehab education session.
                2. Household roles for the next three months agreed out loud.
                3. The chest pain plan and warning signs understood by both.
                4. A regular slot of time for the partner's own rest or support.

                ## Notes
                Many heart charities run helplines and groups for partners and carers, not only patients.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written agreement on household roles and a weekly partner check-in, kept for the length of the rehab programme."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the rehab team whether partners can attend an education session"
                - "Agree household roles for the next three months"
                - "Have a ten-minute check-in on how you are both coping @recurring(weekly:sun)"
                - "Find a heart charity helpline or group for partners"
            - name: Living alone after a heart event
              description: |-
                ## Purpose
                Recovering alone means nobody notices if you are unwell at night and there is no one to share the shopping or the worry. A personal alarm, an agreed daily check-in and help with heavy jobs for the first months make independent recovery safer, especially for older adults.

                ## Milestones
                1. A personal alarm or phone check-in arrangement in place.
                2. A friend, neighbour or relative agreed for a daily contact.
                3. Shopping and heavy jobs covered for the first six weeks.
                4. A spare key left with someone trusted or in a key safe.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A personal alarm or daily check-in arrangement running, with a spare key held by someone named and tested."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask a friend or relative to agree a daily check-in time"
                - "Compare personal alarm services offered locally"
                - "Leave a spare key with someone trusted or fit a key safe"
                - "Press the alarm test button and confirm the call centre responds @recurring(monthly:1)"
            - name: Heart attack recovery in your forties or fifties
              description: |-
                ## Purpose
                A heart attack before sixty usually arrives in the middle of a career, a mortgage and children at home, and rehab classes full of retirees can feel like the wrong place. Planning recovery around work, family and finances, and asking about inherited causes, gives a younger survivor a plan that fits their life.

                ## Milestones
                1. Income protection, sick pay or insurance policies checked for heart cover.
                2. Children told what happened in words suited to their age.
                3. A question about family history and inherited cholesterol raised with your cardiologist.
                4. An evening, online or younger-age rehab option explored.

                ## Notes
                Critical illness policies often pay out after a heart attack. Check the policy wording and claim deadline early.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Financial cover checked, children informed and the inherited risk question raised with cardiology, each recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Check any critical illness or income protection policy for heart cover"
                - "Plan how to explain the heart attack to your children"
                - "Ask your cardiologist whether family members should be tested"
                - "Ask the rehab team about evening or online options"
            - name: Women's heart recovery and rehab uptake
              description: |-
                ## Purpose
                Women are less often referred to cardiac rehab and more likely to drop out, frequently because of caring duties or because classes feel built for men. Women also more often have atypical symptoms and conditions such as spontaneous coronary artery dissection. Making sure the right referral, symptoms and support are in place closes those gaps.

                ## Milestones
                1. Your referral to rehab confirmed, not assumed.
                2. Symptoms that are typical for you written down, including any that are not chest pain.
                3. Caring duties covered so classes can be attended.
                4. Women-only, home-based or condition-specific support explored if wanted.

                ## Notes
                If you had a spontaneous coronary artery dissection, ask about specialist SCAD support and rehab advice, as some general guidance differs.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Rehab referral confirmed, your own symptom pattern recorded and a support option chosen."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ring the rehab team to confirm your referral has arrived"
                - "Write down how your own heart symptoms showed up"
                - "Arrange cover for caring duties on class days"
                - "Look for women's heart support groups or SCAD networks"
            - name: Chair-based rehab for older or frailer adults
              description: |-
                ## Purpose
                For people in their eighties, or living with arthritis, balance problems or breathlessness, a standard rehab class can look impossible, and many decline it. Chair-based and adapted programmes exist precisely for this, and even modest gains in strength and stamina can protect independence at home.

                ## Milestones
                1. The rehab team asked about chair-based or adapted options.
                2. Any falls risk, joint problems or hearing needs told to the team.
                3. Seated exercises done at home twice a week.
                4. One everyday task, such as getting up from a chair or walking to the post box, easier than at the start.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A chair-based programme followed twice weekly for eight weeks, with one named everyday task measurably easier."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the rehab team whether chair-based classes are available"
                - "Tell the team about falls, joint pain or hearing difficulties"
                - "Do the seated exercise routine at home @recurring(weekly:mon,thu)"
                - "Time how long it takes to stand up five times from a chair"
            - name: Rehab exercise alongside diabetes
              description: |-
                ## Purpose
                Exercise lowers blood glucose, so people with diabetes on insulin or some tablets can go low during or after rehab sessions, and low glucose symptoms can be confused with heart symptoms. Agreeing a glucose check routine and a hypo plan with your diabetes team means you can exercise fully without either worry.

                ## Milestones
                1. Your diabetes team asked whether you need glucose checks around exercise.
                2. A fast-acting glucose source packed in your exercise bag.
                3. The rehab team told about your diabetes medicines.
                4. Glucose before and after the first few sessions recorded if advised.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An exercise glucose plan agreed with your diabetes team, with readings recorded around the first six rehab sessions if advised."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your diabetes team whether to check glucose around exercise"
                - "Pack a fast-acting glucose source in your exercise bag"
                - "Tell the rehab instructors which diabetes medicines you take"
                - "Record glucose before and after sessions if your team advises it"
            - name: Heart failure daily weight and fluid plan
              description: |-
                ## Purpose
                When a heart attack leaves the pumping weakened, fluid can build up gradually, and a rise in weight over a few days is often the first sign, before ankles swell or breathing worsens. Weighing at the same time each morning and knowing the gain your heart failure nurse wants reported can prevent a hospital admission.

                ## Milestones
                1. The weight gain that should prompt a call agreed with your heart failure nurse.
                2. Any fluid or salt guidance from your team written down.
                3. Weight recorded every morning after the toilet and before breakfast.
                4. The weight chart reviewed with the heart failure nurse each month.

                ## Notes
                The threshold and any fluid limit must come from your own team, as they vary by person and medicine.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Daily morning weights recorded for eight weeks, with any gain above your team's threshold reported the same day."
                cadence: rolling
              tasks:
                - "Ask your heart failure nurse what weight gain should prompt a call"
                - "Weigh yourself after the toilet and before breakfast and record it @recurring(daily)"
                - "Write your team's fluid and salt guidance on the weight chart"
                - "Send the weight chart to the heart failure nurse @recurring(monthly:24)"
            - name: Living with an implanted defibrillator or pacemaker
              description: |-
                ## Purpose
                Some people leave hospital after a heart event with an implantable cardioverter defibrillator or pacemaker, which brings device checks, remote monitoring, driving rules and the fear of a shock. Knowing your device, its check schedule and exactly what to do after a shock replaces dread with a plan.

                ## Milestones
                1. The device card carried and the device type, maker and implant date recorded.
                2. The remote monitor set up and its first transmission confirmed.
                3. A written plan from the device clinic for what to do after a shock.
                4. Device clinic appointments in the calendar.

                ## Notes
                Ask the device clinic about mobile phones, induction hobs, security scanners and any work equipment before assuming they are safe or unsafe.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Device details, a written shock plan and the device clinic schedule recorded, with remote transmissions confirmed each quarter."
                cadence: cyclic
              tasks:
                - "Put your device card in your wallet next to the heart information card"
                - "Ask the device clinic for a written plan for what to do after a shock"
                - "Confirm the remote monitor has sent its latest transmission @recurring(quarterly)"
                - "Ask the clinic which household and work equipment to keep distance from"
            - name: Peer support and heart group volunteering
              description: |-
                ## Purpose
                People a year or two past their heart event often say the most helpful voice early on was someone who had been through it. Joining a local or online heart support group, and in time volunteering as a peer supporter, keeps your own habits going and helps the people now where you were.

                ## Milestones
                1. A local or online heart support group found and attended.
                2. Regular attendance kept up for six months.
                3. Peer supporter training offered by a heart charity or rehab service explored.
                4. At least one newer patient supported, within the boundaries the training sets.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Six months of support group attendance and, if chosen, peer supporter training completed with at least one person supported."
                cadence: rolling
              tasks:
                - "Ask your rehab team or a heart charity for local support groups"
                - "Attend the heart support group meeting @recurring(monthly:3)"
                - "Ask about peer supporter training once you are a year from your event"
                - "Share one thing that helped you with a newer member"
---

# Cardiac Rehabilitation

This area is for anyone home after a heart attack, a stent or bypass or valve surgery, and for the partners and older adults who are often left to work out recovery on their own. It starts with the foundations (your discharge record, a rehab place, a chest pain plan and a clear medicine chart), then the weekly machinery of classes, exertion logs and graded walking, the knowledge that makes your reports and medicines make sense, the decisions about driving, work, lifting and travel, the appointments worth preparing for, the situations that change the plan, and finally heart failure, implanted devices and peer support.

What repeats is twice-weekly rehab classes, a weekly exertion review and walking step-up, a daily medicine time with a monthly reorder, a monthly check of your prevention numbers and mood, and the yearly cardiac review. The Meeting notes, Metrics log, Habit tracker, Training program, Weekly meal plan, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
