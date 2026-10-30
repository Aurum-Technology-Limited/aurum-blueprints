---
id: mental-wellbeing.eating-disorder-recovery-support
name: Eating Disorder Recovery Support
description: "Getting assessed and into specialist treatment, a regular eating pattern and meal plan agreed with your team, relapse warning signs and the people who support you, for anyone recovering from anorexia, bulimia or binge eating."
category: personal
version: 1.0.0
tags: [mental-wellbeing, eating-disorder-recovery-support, everyone, student, anorexia, bulimia, binge-eating, relapse-prevention]
author: Aurum Technology
starter_structure:
  templates:
    - weekly-meal-plan
    - meeting-notes
    - reading-queue
    - trip
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Eating Disorder Recovery Support
          description: "Supporting recovery from anorexia, bulimia or binge eating with treatment teams, meal plans, relapse warning signs and support networks."
          projects:
            - name: First honest conversation about your eating
              description: |-
                ## Purpose
                Most people hide disordered eating for months or years before telling anyone, and the secrecy itself keeps the illness going. Choosing one trusted person, deciding what to say and how much, and having that conversation at a calm moment is often the step that makes every later appointment possible.

                ## Milestones
                1. One trusted person chosen, such as a friend, parent, partner, tutor or doctor.
                2. A few sentences written down describing what has been happening, in your own words.
                3. The conversation held at a calm time, not straight after a meal or an argument.
                4. One concrete thing agreed that the person will do, such as coming to the first appointment.

                ## Notes
                It is fine to read from a note or send a message first. You do not need to share numbers or details you are not ready to share.

                Before you start: this plan is general information to help you look after your own wellbeing. It is not medical or psychological advice and does not replace a doctor, therapist or counsellor. If you are in crisis, in danger or thinking about harming yourself, contact your local emergency number or a crisis line now.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "One trusted person has been told about the eating difficulties and has agreed one specific way to help, recorded in a note."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the names of two people you could tell first"
                - "Draft three sentences about what has been happening"
                - "Choose a calm time and place for the conversation"
                - "Ask the person for one specific kind of help"
            - name: First doctor's appointment about your eating
              description: |-
                ## Purpose
                Doctors see many people who play down their symptoms, so a short written summary brought to the appointment helps you get assessed properly rather than reassured and sent home. Listing your usual eating, any bingeing, vomiting, laxative use or driven exercise, and physical symptoms such as dizziness, missed periods or always feeling cold gives the doctor what they need to check your physical health and refer you on.

                ## Milestones
                1. A one-page summary of behaviours, how long they have gone on and any physical symptoms.
                2. An appointment booked, ideally a longer slot, with someone coming along if you want.
                3. Physical checks requested and done, such as blood tests, blood pressure and heart rate.
                4. A referral or next step agreed and written down with a date.

                ## Notes
                Normal blood test results do not rule out an eating disorder. If you feel dismissed, ask for a second appointment or to see another doctor.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An appointment attended with a written summary, physical checks done and a referral or next step recorded with a date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a longer appointment with your doctor and say it is about eating"
                - "Write a one-page summary of behaviours and physical symptoms"
                - "Ask which physical checks will be done and when results come back"
                - "Write down the referral or next step agreed before you leave"
            - name: Physical warning signs card for same-day help
              description: |-
                ## Purpose
                Eating disorders carry real physical risk: fainting, chest pain, a racing or irregular heartbeat, vomiting blood, severe weakness or confusion can all need urgent care. Writing your health service's list of urgent signs on one card, with the numbers to call, means you and the people around you act quickly instead of waiting to see whether it passes.

                ## Milestones
                1. Your health service's urgent physical signs for eating disorders found and checked with your doctor.
                2. A one-page card with the signs, the emergency number and your treatment team's number.
                3. The card kept somewhere visible and a photo of it saved on your phone.
                4. Close supporters shown the card and told where it is kept.

                ## Notes
                Use your own health service's wording; this card organises their advice and does not replace it. Thoughts of suicide or self-harm belong on a crisis plan too, which your team can help you write.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A warning signs card based on health service guidance is on display, saved on your phone and shown to at least one supporter."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your doctor which physical symptoms mean same-day help for you"
                - "Write the signs and phone numbers on one card"
                - "Save a photo of the card on your phone"
                - "Show the card to the people you live with"
                - "Check the card's numbers and signs are still current @recurring(yearly)"
            - name: Specialist eating disorder service referral and waiting plan
              description: |-
                ## Purpose
                Waiting lists for specialist eating disorder services can run to weeks or months, and people often get worse in that gap. Confirming the referral was received, knowing who to call if things deteriorate and filling the wait with guided self-help or regular doctor reviews keeps you safer until treatment starts.

                ## Milestones
                1. Confirmation from the specialist service that the referral arrived.
                2. An expected waiting time and a named contact at the service.
                3. Review appointments with your doctor while you wait, with dates in the calendar.
                4. A guided self-help or support option started during the wait, where one is suitable.

                ## Notes
                Students can ask the university health service whether a local specialist service or a campus programme is quicker. If things get worse while waiting, tell your doctor, because referrals can be marked as urgent.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The referral is confirmed by the service, a named contact and expected wait are recorded, and review dates with your doctor are booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Phone the specialist service to confirm the referral arrived"
                - "Ask for the expected wait and a named contact"
                - "Book review appointments with your doctor for the waiting period"
                - "Ask whether guided self-help or a support group is available now"
            - name: Medical monitoring plan agreed with your doctor
              description: |-
                ## Purpose
                Restriction, purging and laxative use can change blood salts, heart rhythm and bone health without obvious symptoms, which is why treatment usually includes regular physical checks. Agreeing which checks happen, how often and who holds the results means nothing is missed when appointments are spread across different services.

                ## Milestones
                1. A written list of the checks your doctor or team will do, such as bloods, heart rate, blood pressure or a heart trace.
                2. How often each check happens and who books it, recorded.
                3. Results or summaries kept in one place, with the team's comments noted.
                4. A named person to contact if a result needs action between appointments.

                ## Notes
                The first weeks of eating more after a long period of restriction can carry particular medical risks, so follow your team's monitoring schedule closely then. Ask before starting any supplements.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A monitoring plan listing each physical check, its frequency and who books it is agreed with your doctor and kept with your results."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your doctor which physical checks you need and how often"
                - "Write the checks, their frequency and who books each one in one note"
                - "Request a copy or summary of each set of results"
                - "Confirm the next monitoring appointment is in the calendar @recurring(monthly:9)"
            - name: Treatment team contact sheet
              description: |-
                ## Purpose
                Recovery often involves a doctor, a therapist, a dietitian, sometimes a psychiatrist or nurse, and a university or work contact, and it is easy to lose track of who handles what. One sheet with each person's role, contact route and hours saves time on a bad day and helps supporters know who to call.

                ## Milestones
                1. Every professional involved listed with role, phone, email and working hours.
                2. The right contact for physical worries, meal plan questions and emotional crises marked clearly.
                3. Out-of-hours and emergency routes added.
                4. The sheet shared with one supporter, with your consent to share information recorded.

                ## Notes
                Ask your team what information they can share with family or friends, and sign any consent forms that make that possible.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One contact sheet lists every member of the treatment team with role and contact route, plus out-of-hours options, and one supporter has a copy."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every professional involved and what each one handles"
                - "Add phone, email and working hours for each person"
                - "Mark which contact to use for physical, food and emotional worries"
                - "Check the names and numbers on the sheet are still right @recurring(quarterly)"
            - name: Understanding the diagnosis and evidence-based treatments
              description: |-
                ## Purpose
                Anorexia, bulimia, binge eating disorder and other specified eating disorders have different recommended treatments, including specialist CBT for eating disorders, family-based treatment for young people and structured therapies for adults with anorexia. Knowing the names, what each involves and roughly how long it lasts lets you ask informed questions and notice when an offer does not match the guidance.

                ## Milestones
                1. Your diagnosis, or working description, written down in the words your team uses.
                2. Recommended treatments for that diagnosis read from a clinical guideline or a recognised eating disorder charity.
                3. Three questions about the offered treatment written and asked at the next appointment.
                4. A one-paragraph summary of your treatment plan in your own words.

                ## Notes
                Stick to clinical guidelines and recognised charities. Forums and social media mix genuine experience with harmful tips.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-paragraph summary of your diagnosis and treatment plan exists, and three written questions have been asked and answered by your team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the clinical guideline or charity page for your diagnosis"
                - "Note the name, length and format of each recommended treatment"
                - "Write three questions about the treatment you are offered"
                - "Summarise your plan in one paragraph after the appointment"
            - name: Honest baseline of eating disorder behaviours
              description: |-
                ## Purpose
                Shame makes people underreport bingeing, vomiting, laxative use, skipped meals and driven exercise, yet treatment is planned around how often these happen. Recording a frank snapshot over one or two weeks, privately and without judgement, gives your therapist a real starting point and lets you see change later.

                ## Milestones
                1. Your team asked which behaviours they want recorded and how.
                2. One to two weeks of records showing which behaviours happened and roughly when.
                3. The snapshot shared with your therapist or doctor.
                4. Two or three patterns noted together, such as times of day or situations.

                ## Notes
                Record behaviours, not numbers. Do not start counting calories or weighing yourself for this; your team handles weight.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A behaviour snapshot covering at least one week has been shared with your therapist and at least two patterns are written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your therapist which behaviours to record and in what format"
                - "Keep the behaviour record for one to two weeks"
                - "Bring the record to your next appointment"
                - "Write down two patterns you and your therapist notice"
            - name: Reasons for recovery letter
              description: |-
                ## Purpose
                Motivation to recover rises and falls, often within a single day, and the eating disorder is very good at arguing for itself. A letter written on a clearer day, listing what the illness has cost and what you want back, such as energy, friendships, study, travel or simply eating with others, gives you something concrete to read when the arguments start.

                ## Milestones
                1. A list of what the eating disorder has taken from you.
                2. A list of five things you want to be able to do a year from now.
                3. A letter to yourself combining both, written in your own words.
                4. Copies kept on your phone and somewhere you will see them.

                ## Notes
                Some people also write a letter to the eating disorder itself. Your therapist may suggest this as an exercise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reasons for recovery letter exists in two places, listing at least five costs of the illness and five things you want back."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List what the eating disorder has cost you this year"
                - "List five things you want to be able to do in a year"
                - "Write a letter to yourself from those two lists"
                - "Save the letter on your phone where you can find it fast"
            - name: Regular eating pattern agreed with your dietitian
              description: |-
                ## Purpose
                Long gaps without food drive both bingeing and restriction, so most treatment starts by establishing meals and snacks at set times. Agreeing the pattern with your dietitian or therapist, and writing it as a timetable that fits your day, turns a vague intention into something you can follow while hunger signals are unreliable.

                ## Milestones
                1. A timetable of meals and snacks agreed with your dietitian or therapist.
                2. The timetable fitted around work, lectures or childcare, with phone reminders set.
                3. Two weeks of following the timetable, with gaps noted honestly.
                4. The pattern reviewed and adjusted at a session.

                ## Notes
                Most teams ask you to eat by the clock rather than by hunger in the early stages. A missed meal is a reason to have the next one on time, not to skip that too.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A meal and snack timetable agreed with your dietitian is in use, with two consecutive weeks recorded and reviewed at a session."
                cadence: rolling
              tasks:
                - "Ask your dietitian or therapist to agree meal and snack times with you"
                - "Write the timetable around your weekly commitments"
                - "Set phone reminders for each meal and snack time"
                - "Bring two weeks of timetable notes to a session"
            - name: Weekly meal plan from the dietitian's structure
              description: |-
                ## Purpose
                Deciding what to eat at every meal invites the eating disorder to negotiate, and decision fatigue makes restriction or bingeing more likely. Planning the week in one sitting from the structure your dietitian gave you, ideally with a supporter, removes dozens of daily decisions and makes shopping straightforward.

                ## Milestones
                1. Your dietitian's meal structure written at the top of the plan.
                2. A full week of meals and snacks planned in one sitting.
                3. A shopping list taken from the plan.
                4. Four consecutive weeks planned, with any changes agreed with your dietitian.

                ## Notes
                Start from the **Weekly meal plan** template. Plan with a supporter if the eating disorder tends to shrink portions or cut foods while you write.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly meal plans written from the dietitian's structure, each with a shopping list."
                cadence: rolling
              tasks:
                - "Copy your dietitian's meal structure into a weekly meal plan"
                - "Write next week's meals and snacks in one sitting @recurring(weekly:sun)"
                - "Turn the plan into a shopping list"
                - "Show the plan to your dietitian at the next appointment"
            - name: Monitoring records for meals, urges and feelings
              description: |-
                ## Purpose
                Recording what you ate, when and where, and what was going on at the time, is a core part of specialist CBT for eating disorders. Over a few weeks the records show the links between skipped meals, moods, situations and urges far more clearly than memory can, and they make each session about real days.

                ## Milestones
                1. A recording format agreed with your therapist, on paper or in a plain notes app.
                2. Records kept soon after each meal or snack, including urges and what helped.
                3. Records brought to every session for at least four weeks.
                4. Three repeating links between situations, feelings and behaviours identified.

                ## Notes
                Use a plain notes app or paper, not a calorie or nutrition tracker. Write what happened, not judgements about it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of monitoring records have been reviewed in sessions, with at least three repeating patterns written down."
                cadence: rolling
              tasks:
                - "Agree a recording format with your therapist"
                - "Fill in the record soon after each meal or snack @recurring(daily)"
                - "Note any urge and what you did with it in the same entry"
                - "Highlight the hardest day of the week for discussion"
            - name: Treatment session preparation and notes
              description: |-
                ## Purpose
                Therapy and dietitian appointments are short, and the most important things are often remembered on the way home. Ten minutes of preparation and a few notes afterwards make sure you raise what matters, remember homework and can see over months what has changed.

                ## Milestones
                1. A running notes page for sessions with your therapist, dietitian and doctor.
                2. Points to raise written before each session.
                3. Homework and agreements written down within an hour of each session.
                4. Three months of notes read back to see what has shifted.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Session notes kept for three months, each with points raised beforehand and homework recorded afterwards."
                cadence: rolling
              tasks:
                - "Create a session notes page from the meeting notes template"
                - "Write the points you want to raise at this week's session @recurring(weekly:mon)"
                - "Record homework and agreements straight after each session"
                - "Read back three months of notes and list what has changed"
            - name: Weekly check-in with your recovery supporter
              description: |-
                ## Purpose
                Supporters often do not know whether to ask about food, and people in recovery often do not know how to bring it up, so both say nothing. A fixed weekly check-in with one trusted person, using three agreed questions, keeps support going without every meal becoming a conversation about the illness.

                ## Milestones
                1. One supporter agreed, with a fixed day and time.
                2. Three standing questions agreed, such as what went well, what was hard and what would help.
                3. Off-limits topics agreed, such as numbers or comments on appearance.
                4. Eight check-ins completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly check-ins with a named supporter completed using agreed questions and limits."
                cadence: rolling
              tasks:
                - "Ask one person to be your weekly check-in supporter"
                - "Agree three questions and the topics that are off limits"
                - "Hold the check-in at the agreed time @recurring(weekly:fri)"
                - "Tell your supporter what has helped after the fourth check-in"
            - name: After-meal support routine
              description: |-
                ## Purpose
                The hour after eating is when urges to purge, exercise or make up for the meal are strongest for many people. Planning absorbing, low-effort activities for that hour, ideally with someone nearby, makes it easier to sit with the discomfort until it passes.

                ## Milestones
                1. A list of ten after-meal activities that hold your attention, such as a puzzle, a call, a show or a craft.
                2. The hour after lunch and dinner planned for a week.
                3. A supporter or housemate aware of the plan for the hardest meal.
                4. Urges after meals rated before and after the activity for two weeks.

                ## Notes
                Avoid planning walks or exercise for this hour unless your team agrees. Staying out of the bathroom for a while after eating is a common step to discuss with your therapist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of after-meal activities is in use and two weeks of before and after urge ratings have been shared with your therapist."
                cadence: rolling
              tasks:
                - "List ten calm activities that hold your attention"
                - "Start a planned activity straight after lunch and dinner @recurring(daily)"
                - "Tell a housemate or supporter which meal is hardest"
                - "Rate the urge before and after each activity for two weeks"
            - name: Relapse warning signs and early action plan
              description: |-
                ## Purpose
                Lapses rarely arrive out of nowhere: skipped snacks, new food rules, more body checking, secrecy or pulling away from friends usually come first. Writing your personal early signs with your team, plus who notices them and what each person does, means a slip is caught in days rather than months.

                ## Milestones
                1. A list of your own early warning signs, drawn from past lapses.
                2. Signs sorted into amber, needing extra care, and red, needing the team.
                3. A step for each level, with named people and phone numbers.
                4. The plan shared with your therapist and one supporter.

                ## Notes
                Supporters often notice changes before you do. Agree in advance how they can raise it without it feeling like an accusation.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written warning signs plan with amber and red levels and named actions is shared with your therapist and one supporter, and reread monthly."
                cadence: rolling
              tasks:
                - "List the early signs that came before past lapses"
                - "Sort the signs into amber and red with your therapist"
                - "Write who you contact and what they do at each level"
                - "Reread the signs list and mark any that have appeared @recurring(monthly:18)"
            - name: Monthly recovery review
              description: |-
                ## Purpose
                Day to day, recovery can feel like no progress at all, especially in hard weeks. A short written review at the end of each month, looking at meals kept, behaviours, wins and what was difficult, shows the real direction of travel and gives your team a clear summary.

                ## Milestones
                1. A one-page review format with the same five headings each month.
                2. The first monthly review written and brought to a session.
                3. Six reviews completed and read back together.
                4. One change to the plan made each month based on the review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly reviews written using the same headings, each shared with the team and leading to one recorded change."
                cadence: rolling
              tasks:
                - "Choose five headings for the monthly review"
                - "Write the month's recovery review on one page @recurring(monthly:26)"
                - "Bring the review to the next session"
                - "Pick one change to try next month and note it"
            - name: Movement plan agreed with your treatment team
              description: |-
                ## Purpose
                Exercise is often used to compensate for eating or to change shape, and stopping or restarting it without a plan can be unsafe or feed the illness. Agreeing with your team what movement is fine, how much, and the signs that it has become driven gives you clear rules that you did not have to write alone.

                ## Milestones
                1. Your team's current advice on movement recorded in writing.
                2. Any compulsive exercise patterns listed honestly, such as exercising when ill or injured.
                3. A gentle movement plan, if any, with limits a supporter also knows.
                4. The plan reviewed with the team every three months.

                ## Notes
                Fitness trackers and step counts often feed compulsive exercise. Ask your team whether to put them away for now.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written movement plan agreed with the team is in place and has been reviewed at least once after three months."
                cadence: rolling
              tasks:
                - "Ask your team what movement is safe and helpful right now"
                - "Write down any exercise rules you have been following"
                - "Agree limits for movement and share them with a supporter"
                - "Review the movement plan with your team @recurring(quarterly)"
            - name: Riding out urges to binge, purge or restrict
              description: |-
                ## Purpose
                Urges feel as if they will keep growing until acted on, but most peak and fade within the hour if they are not fed. Learning to delay, change setting and use a short list of tested distractions, with your therapist's guidance, builds evidence that urges pass and that you can get through them.

                ## Milestones
                1. Your most common urges and their usual triggers written down.
                2. A delay routine agreed with your therapist, such as moving room and setting a timer.
                3. A list of distractions tried and rated by how well they helped.
                4. Ten urges ridden out and recorded, with what made the difference.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Ten urges ridden out and recorded, with a rated list of the delay and distraction steps that worked best."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write your three most common urges and their triggers"
                - "Agree a delay routine with your therapist"
                - "Try each distraction on your list and rate it from 1 to 5"
                - "Record each urge you ride out and what helped"
            - name: Answering the eating disorder voice
              description: |-
                ## Purpose
                Many people describe a critical voice that comments on every meal and promises safety through rules. Learning to spot its typical lines, write them down and answer them with your therapist builds distance between you and the illness, so its thoughts can be noticed rather than obeyed.

                ## Milestones
                1. Ten typical eating disorder thoughts written down word for word.
                2. A balanced response drafted for each with your therapist.
                3. The responses kept on a card or phone note for meal times.
                4. Eight weeks of practice, with the thoughts that have lost their grip marked.

                ## Notes
                Not everyone experiences the illness as a voice; use whatever description fits you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of ten eating disorder thoughts with balanced responses exists and has been practised for eight weeks."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down ten things the eating disorder says to you"
                - "Draft a balanced response to each with your therapist"
                - "Keep the responses on a card you can read at meals"
                - "Mark the thoughts that feel weaker after eight weeks"
            - name: Fear foods ladder with your dietitian
              description: |-
                ## Purpose
                Foods the eating disorder has banned tend to stay frightening until they are eaten again, in planned steps and with support. A ladder of feared foods from least to most difficult, worked through with your dietitian, widens what you can eat at parties, restaurants and friends' houses.

                ## Milestones
                1. A list of avoided foods ranked from least to most frightening.
                2. The first three steps planned with your dietitian, including where and with whom.
                3. Each food eaten at least twice before moving up, with anxiety rated before and after.
                4. Half the ladder completed and reviewed.

                ## Notes
                Pace this with your dietitian. Trying several fear foods at once, or alone, often backfires.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A ranked fear foods ladder exists and at least half its steps have each been eaten twice with anxiety ratings recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the foods you have been avoiding"
                - "Rank them from least to most frightening with your dietitian"
                - "Plan where and with whom you will try the first one"
                - "Try the next food on the ladder with support @recurring(weekly:wed)"
            - name: Eating out and social meals practice
              description: |-
                ## Purpose
                Avoiding restaurants, takeaways and meals at friends' houses quietly shrinks social life, and students and young adults miss a great deal when every plan centres on food. Practising in stages, from a coffee and snack to a full meal with friends, rebuilds the ability to eat with others without days of dread.

                ## Milestones
                1. A list of social eating situations ranked by difficulty.
                2. A plan for the first outing, with the menu checked in advance only if your team agrees.
                3. Four outings completed with a supporter, each followed by a short note.
                4. One meal out with friends completed without compensating afterwards.

                ## Notes
                Looking up menus in advance helps some people and feeds rituals for others; agree with your team which applies to you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four planned social meals completed with notes, plus one meal out with friends without compensating behaviour afterwards."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Rank five social eating situations from easiest to hardest"
                - "Plan the first outing with a supporter"
                - "Write a short note after each outing on what went better than feared"
                - "Eat one meal or snack out with a supporter @recurring(monthly:14)"
            - name: Reducing body checking and avoidance
              description: |-
                ## Purpose
                Repeated mirror checking, pinching, measuring with clothes or hands, and the opposite habit of avoiding mirrors and photos, both keep shape worries loud. Logging these habits for a week and cutting them down in steps agreed with your therapist is a standard part of treatment and often lowers body preoccupation within weeks.

                ## Milestones
                1. A week's log of body checking and avoidance behaviours.
                2. A step-by-step plan to cut checking and reduce avoidance, agreed with your therapist.
                3. Four weeks of the plan followed, with lapses noted.
                4. A before and after rating of how much of the day body worries take up.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A body checking log and reduction plan exist, with four weeks followed and a before and after rating recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Log every body check and every avoidance for one week"
                - "Agree which checks to drop first with your therapist"
                - "Cover or move mirrors you use for checking, if agreed"
                - "Rate how much time body worries took this week compared with the first"
            - name: Relearning hunger and fullness signals
              description: |-
                ## Purpose
                Months or years of restriction and bingeing scramble hunger and fullness signals, which is why early treatment relies on the clock. Once eating is regular and your team agrees, gradually noticing and rating those signals again prepares you for a time when meal plans are looser.

                ## Milestones
                1. Your team's agreement that you are ready to start this stage.
                2. A simple hunger and fullness scale used at three meals a day.
                3. Four weeks of ratings reviewed with your dietitian.
                4. One meal a day where timing or portion is guided by signals, if your dietitian agrees.

                ## Notes
                This comes later in recovery, not at the start. If signals are still unreliable, the timetable stays in charge.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four weeks of hunger and fullness ratings reviewed with the dietitian, with the next step agreed and written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your dietitian whether you are ready to work on hunger cues"
                - "Agree a simple hunger and fullness scale with your dietitian"
                - "Rate hunger before and fullness after three meals a day"
                - "Review four weeks of ratings at a dietitian appointment"
            - name: Scripts for diet talk and body comments
              description: |-
                ## Purpose
                Colleagues discussing diets, relatives commenting on how you look and friends comparing bodies can knock recovery off course in a sentence. Preparing a few short replies and exit lines in advance means you can protect yourself without explaining your history to everyone.

                ## Milestones
                1. A list of the comments and conversations you find hardest.
                2. Two or three short replies for each, from changing the subject to a firm request.
                3. The replies practised aloud with your therapist or a supporter.
                4. Close family asked directly not to comment on your body or your plate.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A written set of replies for at least five difficult comments exists and close family have been asked not to comment on body or food."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the five comments or topics that knock you most"
                - "Write two short replies and one exit line for each"
                - "Practise the replies aloud with a supporter"
                - "Ask close family not to comment on your body or plate"
            - name: Recovery reading and listening list
              description: |-
                ## Purpose
                Good recovery books, workbooks and podcasts can fill the long gaps between sessions, but plenty of material online is unregulated and some is harmful. Asking your team for recommendations and keeping a short, vetted list means you read things that support treatment rather than undermine it.

                ## Milestones
                1. Three to five recommendations collected from your team or a recognised eating disorder charity.
                2. A reading list with each item's source noted.
                3. Two items read or listened to, with one useful idea from each written down.
                4. Anything unhelpful removed from the list.

                ## Notes
                Start from the **Reading queue** template. Skip memoirs that give numbers such as weights or calories; many charities publish guidance on safer reading.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A vetted list of at least three recovery resources exists, two have been finished and one idea from each is written down."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your therapist or dietitian for three recommended books or podcasts"
                - "Add each item to a reading queue with its source"
                - "Write one useful idea from each finished item"
                - "Remove anything that leaves you comparing or counting"
            - name: Clearing triggers from your phone and home
              description: |-
                ## Purpose
                Calorie counting apps, fitness trackers, diet accounts, body-focused social media and old food logs keep the illness's rules in front of you every day. Removing or hiding them, with your team's agreement, is a quick change that cuts down the number of prompts you have to resist.

                ## Milestones
                1. An inventory of apps, accounts, devices and objects that feed the illness.
                2. Calorie and step counting apps deleted, and diet or body-focused accounts unfollowed or muted.
                3. Diet books, calorie-labelled recipe cards and old food logs cleared out.
                4. A monthly check in place for new triggers that creep back in.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Calorie and step counting apps are deleted, triggering accounts unfollowed and diet material cleared, with a monthly check in place."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every app, account and object that feeds food or body rules"
                - "Delete calorie counting and step tracking apps"
                - "Unfollow or mute diet and body-focused accounts"
                - "Review followed accounts and mute any new triggers @recurring(monthly:3)"
            - name: Kitchen and food shopping set-up for recovery
              description: |-
                ## Purpose
                An empty fridge makes it easy to skip meals, while a cupboard of binge foods with no plan around them invites the opposite. Stocking the kitchen to match your meal plan, keeping agreed snacks ready and shopping from a list, with support if needed, makes following the plan the easiest option.

                ## Milestones
                1. A standing list of staples and snacks from your meal plan.
                2. Snacks for the week stocked where you will see and reach them.
                3. A shopping routine agreed, including whether a supporter comes along.
                4. Any changes to how binge foods are stored discussed with your team.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A staples list exists, the week's snacks are stocked and a shopping routine has been followed for four weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a standing list of staples and snacks from your meal plan"
                - "Stock the agreed snacks where you will see them"
                - "Ask your team whether to change how binge foods are kept"
                - "Restock the agreed snacks for the coming week @recurring(weekly:sat)"
            - name: Clothes that fit the body you have now
              description: |-
                ## Purpose
                Keeping clothes from the illness's lowest point, or squeezing into ones that no longer fit, gives the eating disorder a daily measuring tool. Replacing them with comfortable clothes that fit now removes that check and is a practical marker of recovery.

                ## Milestones
                1. Clothes kept as a measure of size identified and bagged.
                2. The bag given away or stored out of reach by a supporter.
                3. A small set of comfortable clothes that fit now bought or borrowed.
                4. A plan to repeat this as your body changes during recovery.

                ## Notes
                Clothes shopping can be hard; take a supporter and go with a short list.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Clothes kept as a size check are out of the wardrobe and at least five comfortable items that fit now are in daily use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick out the clothes you keep as a measure of your size"
                - "Bag them and give them away or to a supporter to store"
                - "Shop for a few comfortable items with a supporter"
                - "Set aside a small budget for clothes that fit as recovery continues"
            - name: Choosing the right level of care
              description: |-
                ## Purpose
                Eating disorder treatment ranges from outpatient sessions to day programmes, residential care and hospital admission, and the right level can change as health improves or worsens. Understanding the options in your area and what would trigger a move between them lets you and your family take part in the decision rather than react to it.

                ## Milestones
                1. The levels of care available locally and through any insurance or student cover listed.
                2. Your team's view of the right level now, and why, written down.
                3. The signs that would mean stepping up or down agreed.
                4. A decision recorded with a date for review.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note of the agreed level of care, the reasons for it and the signs for stepping up or down, with a review date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your team which levels of care exist in your area"
                - "Check what your insurance or student cover pays for"
                - "Ask what would mean stepping up or down a level"
                - "Record the decision and the date it will be reviewed"
            - name: Agreeing how weight is handled in treatment
              description: |-
                ## Purpose
                Many services weigh you at appointments, and whether you see the number is a decision with real effects on anxiety and progress. Talking it through with your team, rather than weighing yourself at home or avoiding the subject, settles who weighs, how often and what you are told.

                ## Milestones
                1. Your team's usual approach to weighing explained to you.
                2. A decision on whether you see your weight, see trends only or are weighed without being told.
                3. Home weighing stopped or limited as your team advises, including what happens to any scales.
                4. The arrangement reviewed after three months.

                ## Notes
                There is no single right answer: open weighing is a deliberate part of some treatments. Agree it with your team rather than deciding alone.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A weighing arrangement covering who weighs, how often and what you are told is agreed with the team and written down."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your team how and how often weight is checked in your treatment"
                - "Discuss whether to see the number, trends only or nothing"
                - "Agree what to do with any scales at home"
                - "Note the arrangement and the date to review it"
            - name: Telling work or your course about your eating disorder
              description: |-
                ## Purpose
                Treatment appointments, medical checks and meal times need space in the working or study day, and some people need extensions, adjusted hours or a quiet place to eat. Deciding who to tell, how much and what to ask for gets you practical support while you choose what stays private.

                ## Milestones
                1. A decision on who at work or university to tell, if anyone.
                2. A short written request listing the adjustments that would help, such as time for appointments or protected meal breaks.
                3. A meeting held with your manager, tutor or disability adviser.
                4. Agreed adjustments confirmed in writing.

                ## Notes
                Students can usually register with disability or wellbeing services for exam and deadline adjustments. Workplace rules differ by country, so check your employer's policy or ask an employment adviser.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision about disclosure is recorded, and any adjustments requested are confirmed in writing by work or university."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide who at work or university needs to know, if anyone"
                - "List the adjustments that would make treatment and meals possible"
                - "Book a meeting with your manager, tutor or disability adviser"
                - "Ask for the agreed adjustments in writing"
            - name: Treatment review when recovery stalls
              description: |-
                ## Purpose
                Progress sometimes stops for months: behaviours stay the same, sessions feel repetitive or the treatment is not the one the guidelines recommend. Asking for a formal review, with your monitoring records and monthly summaries in hand, is the right step before giving up or quietly dropping out.

                ## Milestones
                1. Evidence gathered of what has and has not changed over the last three months.
                2. A review requested with your therapist or the service lead.
                3. Options discussed, such as a different approach, more intensive care or a different clinician.
                4. A revised plan agreed with a date to check it is working.

                ## Notes
                Finding treatment hard is not the same as treatment failing. A review helps tell the two apart.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A treatment review has taken place using three months of records, and a revised plan with a check date is written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather three months of monitoring records and monthly reviews"
                - "Ask your therapist for a formal treatment review"
                - "Write the questions you want answered at the review"
                - "Record the revised plan and the date to check it"
            - name: Preparing for a hospital or day programme admission
              description: |-
                ## Purpose
                An admission to hospital or a day programme often comes with only a few days' notice, and practical worries about work, study, pets, bills and phones can make people delay or refuse it. Sorting those practicalities early, with a supporter, makes it easier to say yes when the team recommends more intensive care.

                ## Milestones
                1. A list of practical things that would need covering, such as work, study, rent, pets and childcare.
                2. A named person for each item.
                3. A bag list and questions for the unit written.
                4. A way to notify work or university of a medical absence confirmed.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A practical cover plan naming a person for each responsibility exists, with a bag list and questions for the unit written."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the responsibilities someone would need to cover if you were admitted"
                - "Ask a named person to take on each one"
                - "Write a bag list and the questions to ask the unit"
                - "Find out how to notify work or university of a medical absence"
            - name: Holiday meals and family celebrations plan
              description: |-
                ## Purpose
                Festivals, birthdays and family gatherings bring buffets, unusual meal times, big portions and relatives with opinions, all at once. Planning the day with your team and one ally at the event, including when you eat, where you can take a break and how you leave, turns a dreaded occasion into a manageable one.

                ## Milestones
                1. The occasion's likely challenges listed, such as timing, food and particular people.
                2. A meal plan for the day agreed with your dietitian.
                3. One ally at the event who knows the plan, and a signal for needing a break.
                4. A short note afterwards on what worked, kept for next time.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written plan for one celebration covering meals, an ally and a break signal was used, with a note made afterwards."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List what makes the next celebration hard"
                - "Agree a meal plan for the day with your dietitian"
                - "Choose an ally at the event and agree a break signal"
                - "Write down what worked within two days of the event"
            - name: Travelling in recovery
              description: |-
                ## Purpose
                Trips break routines: different meal times, unfamiliar food, long journeys and time zones can all loosen a fragile pattern. Planning meals for travel days, packing snacks and telling travel companions what helps keeps the meal plan going while you enjoy being away.

                ## Milestones
                1. Your team consulted on whether the trip fits where you are in recovery.
                2. Meals and snacks planned for travel days, including packed food.
                3. Travel companions told what helps and what does not.
                4. A plan for contacting your team or getting medical help while away.

                ## Notes
                Start from the **Trip** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip completed with a travel-day meal plan, packed snacks and a contact plan for the team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your team whether the trip suits this stage of recovery"
                - "Plan meals and packed snacks for each travel day"
                - "Tell travel companions what helps at meal times"
                - "Note how to reach your team or local care while away"
            - name: Step-down plan for discharge from treatment
              description: |-
                ## Purpose
                Leaving specialist treatment is a big change: the weekly structure goes, and many lapses happen in the months after discharge. Planning the step-down with your team, with follow-up appointments, an updated relapse plan and supports lined up, makes the end of treatment a handover rather than a cliff edge.

                ## Milestones
                1. A discharge date agreed with your team, with any tapering of sessions planned.
                2. Follow-up appointments booked with your doctor or the service.
                3. Your warning signs plan updated for life after treatment.
                4. Supports arranged to replace sessions, such as a peer group or regular check-ins.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written step-down plan with a discharge date, booked follow-ups and replacement supports is agreed with the team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your team when discharge is likely and how sessions will taper"
                - "Book follow-up appointments for the months after discharge"
                - "Update your warning signs plan for life after treatment"
                - "Choose one support to replace weekly sessions"
            - name: Starting university with an eating disorder
              description: |-
                ## Purpose
                Moving away for university means leaving your treatment team, doctor and family routines in the same week as social events built around food and alcohol. Arranging the transfer of care before you go, and registering with student support, means treatment continues instead of quietly stopping.

                ## Milestones
                1. Your current team's plan for transfer of care agreed before you leave.
                2. Registered with a doctor near the university, with your notes transferred.
                3. Contact made with the university's wellbeing or disability service.
                4. A first appointment with the new team booked for the first weeks of term.

                ## Notes
                Ask whether you can stay with your home team through the transition or have shared care during holidays; some services offer this for students.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Registration with a new doctor, a transfer of care letter sent and a first appointment with the new team booked by the first weeks of term."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your team how care will transfer when you move for university"
                - "Register with a doctor near your university"
                - "Contact the university wellbeing or disability service"
                - "Book the first appointment with your new team"
            - name: Exam season meals and routines
              description: |-
                ## Purpose
                Revision and exams push meals aside, raise stress and offer an easy excuse to skip food or binge late at night. Building meals and snacks into the revision timetable, with your tutor and team aware, protects recovery and usually helps concentration too.

                ## Milestones
                1. Meal and snack times written into the revision timetable.
                2. Food for exam days planned and bought in advance.
                3. Your therapist told the exam dates so sessions can focus on them.
                4. Any exam adjustments arranged through the university, such as rest breaks or permission to eat.

                ## Notes
                Late-night revision with no proper dinner is a common route into bingeing; a fixed end to the study day helps.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A revision timetable with meal and snack times was followed through the exam period, with exam adjustments confirmed in writing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write meal and snack times into your revision timetable"
                - "Plan and buy food for each exam day"
                - "Tell your therapist your exam dates"
                - "Apply for exam adjustments such as rest breaks or eating in the room"
            - name: Shared kitchens, halls and catered food in recovery
              description: |-
                ## Purpose
                Student halls bring shared fridges, food going missing, catered menus at fixed times and housemates on diets. Working out how to store, buy and eat your meal plan in that setting, and who in halls knows, removes the daily obstacles that make skipping meals easy.

                ## Milestones
                1. A storage set-up that keeps your planned food available, such as a lockable box or a fridge shelf.
                2. Catered menu options matched to your meal plan with your dietitian.
                3. One housemate or residence staff member aware of what helps, if you choose.
                4. A plan for weekends or holidays when catering stops.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A food storage set-up and a catered or self-catered meal routine matched to the meal plan have been in place for one term."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sort out a lockable box or shelf for your planned food"
                - "Match catered menu options to your meal plan with your dietitian"
                - "Decide whether to tell a housemate or residence staff"
                - "Plan meals for weekends when the catering stops"
            - name: Supporting someone you love through treatment
              description: |-
                ## Purpose
                Parents, partners and friends often swing between anxious policing and saying nothing, and both can make meals harder. Learning how eating disorders work, what your role in the treatment plan is and how to look after yourself turns worry into useful, steady support.

                ## Milestones
                1. A carers' guide or skills course from a recognised eating disorder charity or the treatment service completed.
                2. Your role agreed with the person and their team, including what you will and will not do at meals.
                3. Calm replies prepared for the common arguments the illness makes.
                4. A support source for yourself, such as a carers' group, in place.

                ## Notes
                Separate the person from the illness. Arguments about food at the table are usually with the eating disorder, not with them.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A carers' course or guide completed, a written agreement on your role at meals, and a regular support source for yourself in place."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find a carers' guide or course from a recognised eating disorder charity"
                - "Ask the person and their team what role they want you to play"
                - "Agree what you will and will not do at meal times"
                - "Book something restoring for yourself away from the illness @recurring(monthly:20)"
            - name: Family-based treatment at home for a teenager
              description: |-
                ## Purpose
                For young people with anorexia or bulimia, family-based treatment puts parents in charge of meals at home for a time, guided by the specialist team. It is demanding work, so planning who serves meals, how school lunches are covered and how parents share the load makes it possible to keep going for months.

                ## Milestones
                1. Both parents or carers briefed by the team on the approach and agreed on it.
                2. A weekly rota for who prepares and supervises each meal.
                3. School or college lunch support arranged with a named staff member.
                4. A weekly debrief between parents after family sessions.

                ## Notes
                Follow your team's guidance on portions and phases; this project covers the logistics around it. Siblings need attention and an explanation too.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A meal supervision rota, a school lunch arrangement and a weekly parent debrief have run for at least eight weeks alongside family sessions."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the team for written guidance on your role at home"
                - "Draw up a weekly rota for preparing and supervising meals"
                - "Arrange lunch support with a named member of school staff"
                - "Hold a short parents' debrief after each family session"
            - name: Binge eating disorder recovery without dieting
              description: |-
                ## Purpose
                Binge eating disorder is one of the most common eating disorders, and many people with it have spent years on diets that made bingeing worse. Recovery usually means stepping off dieting, eating regularly and working on triggers, often while facing weight stigma from other people and from healthcare.

                ## Milestones
                1. A list of past diets and how each ended, written as evidence for your therapist.
                2. A commitment to pause dieting during treatment, agreed with your team.
                3. Your main binge triggers, such as long gaps, stress or particular situations, identified.
                4. A plan for appointments where weight is raised, including what you will say.

                ## Notes
                Ask your team how to handle advice from other services to lose weight while you are in treatment for bingeing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A diet history and trigger list are shared with the team and a written agreement to pause dieting during treatment is in place."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down past diets and how each one ended"
                - "Agree with your team to pause dieting during treatment"
                - "List your three main binge triggers"
                - "Prepare what to say when a health appointment brings up weight"
            - name: Pregnancy and new parenthood in recovery
              description: |-
                ## Purpose
                Pregnancy brings a changing shape, regular weighing and many comments about bodies, which can stir up old or current eating difficulties. Telling the midwife or obstetric team early and joining up maternity and eating disorder care means extra support is ready before the pressure builds, including after the birth.

                ## Milestones
                1. Your midwife or doctor told about current or past eating difficulties.
                2. Maternity and eating disorder teams in contact, with your consent.
                3. A plan for weighing during pregnancy agreed.
                4. Support for the months after birth arranged, including feeding plans.

                ## Notes
                Many services offer perinatal mental health support; ask for a referral where it exists.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Maternity and eating disorder teams are both aware, a weighing plan is agreed and postnatal support is arranged in writing."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Tell your midwife or doctor about your eating history at booking"
                - "Give consent for maternity and eating disorder teams to talk"
                - "Agree how weighing will be handled during pregnancy"
                - "Arrange support for the first months after the birth"
            - name: Men with eating disorders getting the right help
              description: |-
                ## Purpose
                Eating disorders in men are underdiagnosed, often show up as driven exercise, a focus on muscle or bingeing, and are sometimes missed by doctors and friends alike. Naming the problem clearly, finding services and groups that include men and planning how to talk about it makes getting help far more likely.

                ## Milestones
                1. Your symptoms written down, including any focus on muscle, supplements or exercise.
                2. An appointment with a doctor where an eating disorder is named as the concern.
                3. At least one support group or resource for men identified.
                4. One male friend or relative told, if you choose.

                ## Notes
                Tell your doctor about any use of anabolic steroids or similar substances; it changes which checks are needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A doctor's appointment naming an eating disorder as the concern has happened and at least one resource for men is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down your symptoms, including any focus on muscle or exercise"
                - "Book a doctor's appointment and name an eating disorder as the worry"
                - "Find a support group or resource that includes men"
                - "Decide whether to tell one male friend or relative"
            - name: Athletes and dancers returning to training
              description: |-
                ## Purpose
                Sport and dance can reward low weight or leanness, and athletes often hide restriction behind talk of performance nutrition. Agreeing a staged return to training with your treatment team and, if you consent, your coach protects your health and makes sure fuelling keeps pace with training.

                ## Milestones
                1. Your team's conditions for returning to training written down.
                2. Your coach or teacher told what they need to know, with your consent.
                3. A staged return plan with fuelling agreed with your dietitian.
                4. Checkpoints agreed where training pauses if warning signs return.

                ## Notes
                Low energy availability in sport can affect hormones, bones and the heart; your team can explain which checks are needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A staged return to training plan, with fuelling and pause conditions, is agreed by the treatment team and shared with the coach."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your team what must be in place before training restarts"
                - "Decide what your coach or teacher needs to know"
                - "Agree a fuelling plan for training days with your dietitian"
                - "Write the signs that would pause training"
            - name: Eating disorder alongside diabetes or another condition
              description: |-
                ## Purpose
                Type 1 diabetes, coeliac disease, autism and other conditions change how an eating disorder shows up and how it is treated; restricting insulin, for instance, carries serious risks and is sometimes missed. Making sure each team knows about the other, and that their advice does not conflict, keeps treatment safe.

                ## Milestones
                1. Every team involved listed, with each told about the other condition.
                2. Consent given for the teams to share information.
                3. Conflicting advice, such as food rules for the other condition, raised and resolved.
                4. One named coordinator for your care agreed.

                ## Notes
                Missing or reducing insulin doses to control weight is dangerous; tell your diabetes team straight away if it is happening.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "All teams involved know about both conditions, consent to share is recorded, and a named care coordinator is agreed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every team involved in your care"
                - "Tell each team about your other condition"
                - "Sign consent for the teams to share information"
                - "Ask who will coordinate your care and record their name"
            - name: Living well with a long-standing eating disorder
              description: |-
                ## Purpose
                Some people have lived with an eating disorder for many years, and full recovery may feel far off. Services increasingly offer approaches focused on quality of life, physical safety and small gains, and setting your own goals within that frame can make life better now without giving up on more.

                ## Milestones
                1. Your own quality of life goals written down, such as work, relationships or interests.
                2. A plan agreed with your team focused on physical safety and those goals.
                3. One goal worked on each quarter.
                4. A yearly review of goals and of whether to aim for more.

                ## Notes
                Choosing a quality of life focus is not giving up; many people make further progress later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written quality of life goals and a safety plan are agreed with the team, with four quarterly reviews completed in a year."
                cadence: rolling
              tasks:
                - "Write three things you want more of in life now"
                - "Agree a plan with your team built around those goals"
                - "Hold a quality of life review with your key worker @recurring(quarterly)"
                - "Choose one goal to work on this quarter"
            - name: Sharing your recovery story safely
              description: |-
                ## Purpose
                Telling your story in a talk, blog or campaign can help others and give meaning to what you went through, but sharing too soon or in too much detail can harm you and your readers. Following recognised safe messaging guidance, such as leaving out numbers and methods, and checking timing with your team keeps it useful.

                ## Milestones
                1. Your team asked whether now is a good time to share publicly.
                2. A recognised charity's safe messaging guidance read.
                3. A draft story with no weights, calories, sizes or methods.
                4. The draft reviewed by someone you trust before publishing.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A story draft that follows a published safe messaging guide and contains no numbers or methods has been reviewed before sharing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your team whether now is a good time to share your story"
                - "Read a recognised charity's guidance on talking about eating disorders"
                - "Draft your story without numbers or methods"
                - "Ask someone you trust to read it before you publish"
            - name: Peer mentoring after sustained recovery
              description: |-
                ## Purpose
                People with lived experience who are well into recovery can be powerful supports for those starting out, through charity helplines, peer mentoring schemes or moderated online groups. Checking you are ready, getting trained and having supervision protects both you and the people you support.

                ## Milestones
                1. Your own recovery stable, confirmed with whoever you see now.
                2. A recognised peer support or volunteer programme chosen.
                3. The programme's training completed.
                4. Regular supervision in place and a plan for stepping back if your own recovery wobbles.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Training with a recognised peer support programme is completed and regular supervision is arranged before mentoring starts."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Check with your clinician or doctor that the timing is right"
                - "Compare two peer support or helpline volunteer programmes"
                - "Apply for and complete the programme's training"
                - "Write down the signs that mean you should step back for a while"
---

# Eating Disorder Recovery Support

This area is for anyone recovering from anorexia, bulimia, binge eating disorder or a related eating difficulty, including students managing it away from home, and for the families and friends supporting them. It starts with the foundations (telling someone, a first doctor's appointment, physical safety checks and getting into specialist care), then the routines of regular eating, meal planning, monitoring and check-ins, the skills of riding out urges and facing fear foods, decisions about level of care, weighing and disclosure, the events that need planning, versions for students, parents, partners, men, athletes and pregnancy, and finally the work of long-term recovery. Everything here organises your care around a treatment team; the clinical decisions stay with them.

What repeats is a daily monitoring record and after-meal plan, a weekly meal plan, session preparation, supporter check-in and fear food step, a monthly look at your warning signs and a written recovery review, and quarterly checks of your movement plan and contact sheet. The Weekly meal plan, Meeting notes, Reading queue and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
