---
id: mental-wellbeing.addiction-recovery-sobriety
name: Addiction Recovery & Sobriety
description: "A safe way to stop, a recovery community and sponsor, a written relapse plan, the daily and weekly routines that keep you sober, and the milestones and repairs of a life in recovery."
category: personal
version: 1.0.0
tags: [mental-wellbeing, addiction-recovery-sobriety, everyone, sobriety, relapse-prevention, recovery-meetings, sponsor, alcohol-and-drugs]
author: Aurum Technology
starter_structure:
  templates:
    - habit-tracker
    - metrics-log
    - reading-queue
    - monthly-budget-bills
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Addiction Recovery & Sobriety
          description: "Staying sober or drug-free with recovery meetings, sponsors, relapse prevention plans and milestones, for people in addiction recovery."
          projects:
            - name: Honest inventory of your substance use
              description: |-
                ## Purpose
                Most people in early recovery underestimate how much they were using, and the vague version makes it harder for a doctor or keyworker to plan safely. Writing down what you use, how much, how often, how you take it and what it has cost you gives every later appointment an accurate starting point. It also becomes a record you can reread on the day the old life starts to look appealing.

                ## Milestones
                1. A written list of every substance used in the last year, including prescribed medicines taken outside the prescription.
                2. Typical daily or weekly amounts and the usual way of taking each one noted.
                3. The longest recent gap without using, and what happened when you stopped, recorded.
                4. Consequences listed under health, money, work, relationships and the law.
                5. The inventory shared with a doctor, keyworker or counsellor.

                ## Notes
                Write the real numbers, not the ones you would say in company. Clinicians need them to judge withdrawal risk, and they have heard far higher.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated written inventory of substances, amounts and consequences exists and has been shown to a doctor, keyworker or counsellor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every substance you used in the past twelve months"
                - "Add typical amounts, frequency and how each one is taken"
                - "List what using has cost you in health, money, work and relationships"
                - "Bring the inventory to your next appointment with a doctor or keyworker"
            - name: Medical check before stopping alcohol or drugs
              description: |-
                ## Purpose
                Stopping alcohol, benzodiazepines or some other drugs suddenly after heavy daily use can cause seizures and other dangerous withdrawal, so going cold turkey at home is not always safe. A conversation with your doctor or an addiction service before your stop date decides whether you need a supervised detox, a planned reduction or simply some monitoring. One appointment can be the difference between a hard week and a hospital admission.

                ## Milestones
                1. An appointment booked with your doctor or a specialist addiction service before the planned stop date.
                2. Your inventory of substances and amounts shared at that appointment.
                3. A decision recorded on whether withdrawal will be at home, community supervised or inpatient.
                4. The warning signs that mean you must seek urgent help during withdrawal written on a card.
                5. Someone identified to stay with you or check on you through the first days.

                ## Notes
                Do not stop heavy daily alcohol or benzodiazepine use abruptly without medical advice. Opioid withdrawal is less often dangerous in itself, but it raises overdose risk if you use again, so plan for that too.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A clinician has advised on how to stop safely, and the agreed withdrawal setting and urgent warning signs are written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Phone your doctor or local addiction service and ask for an appointment before you stop"
                - "Tell them honestly what you use and how much each day"
                - "Write down the withdrawal plan and the signs that need urgent help"
                - "Ask one person to stay with you or check in during the first days"
            - name: Referral to an addiction treatment service
              description: |-
                ## Purpose
                Community addiction services offer keyworkers, counselling, groups, medication and help with housing or benefits, often free and often by self-referral. Getting registered early means support is in place before the first hard week rather than after it, and waiting lists start counting from the day you ask. Treat the referral as the spine that the other projects in this area hang from.

                ## Milestones
                1. The drug and alcohol service for your area identified, with its referral route.
                2. A referral made, by yourself or through your doctor.
                3. An assessment attended and a named keyworker or contact recorded.
                4. The support offered to you, such as groups, counselling or medication, listed with start dates.

                ## Notes
                If the service has a long wait, ask what you can attend in the meantime. Many run drop-in groups or open sessions with no wait at all.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "You are registered with an addiction treatment service, with a named contact and a written list of the support offered."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search for the drug and alcohol service that covers your address"
                - "Self-refer by phone or online form, or ask your doctor to refer you"
                - "Attend the assessment and write down your keyworker's name and number"
                - "Ask what groups or drop-ins you can join while you wait"
            - name: Choosing your sobriety date and day count
              description: |-
                ## Purpose
                A clear date to count from gives recovery a shape: a day count, a first thirty days, a first year. Many meetings mark time with coins or keyrings, and knowing your date means you can collect them and see progress on the days when it does not feel like any. Picking it deliberately, and writing it somewhere you see daily, turns a vague intention into a fact.

                ## Milestones
                1. A sobriety or clean date chosen and written down.
                2. A day counter set up on paper or in an app.
                3. The date shared with your sponsor, mentor or one trusted person.
                4. The thirty, sixty and ninety day marks noted in your calendar.

                ## Notes
                If you lapse, the count may restart, but what you learned in the days before it does not. Many people find the honesty about the count matters more than the number.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written sobriety date is shared with at least one person, and the 30, 60 and 90 day marks are in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose the date you will count your sobriety from"
                - "Set up a day counter on paper or in a recovery app"
                - "Tell your sponsor, mentor or a trusted person the date"
                - "Put the 30, 60 and 90 day marks in your calendar"
            - name: Substance-free home reset
              description: |-
                ## Purpose
                Keeping a bottle or a stash in the house for emergencies is one of the commonest routes back to using, because a craving at 11pm meets no obstacle. Clearing out every substance, piece of paraphernalia and hiding place, ideally with someone else present, removes the easiest relapse in the house. It is one afternoon's work that protects every evening after it.

                ## Milestones
                1. Every alcohol bottle, drug and piece of paraphernalia removed from the home.
                2. Known hiding places in the car, bags, coat pockets and garden checked.
                3. Leftover prescription medicines you no longer need returned to a pharmacy.
                4. Household members told what has changed and asked not to keep supplies in shared spaces.

                ## Notes
                If you live with people who drink or use, agree where their supplies are kept and that they are not offered to you. Ask a pharmacist how to dispose of medicines safely.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every substance and piece of paraphernalia is out of the home, car and old hiding places, checked with a second person."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask someone you trust to help you clear the house this week"
                - "Pour away alcohol and dispose of drugs and paraphernalia"
                - "Check the car, bags, coat pockets and old hiding places"
                - "Return unneeded prescription medicines to a pharmacy"
                - "Agree with housemates where their own alcohol is kept"
            - name: Deleting dealer and using contacts
              description: |-
                ## Purpose
                Phones keep the old life one tap away: a dealer's number, a group chat that only meets to use, a delivery app linked to the off-licence. Removing or blocking those routes, and changing your number if dealers keep messaging, cuts the supply lines that cravings reach for first. It is far easier to do in a calm hour than in the middle of an urge.

                ## Milestones
                1. Every dealer and using contact deleted and blocked on calls and messaging apps.
                2. Group chats centred on drinking or using left or muted.
                3. Alcohol delivery apps and saved payment shortcuts removed from your phone.
                4. A decision recorded on whether to change your number.

                ## Notes
                Do this with your sponsor or a recovery friend on the phone if it feels hard. Saving a number somewhere just in case is a common half measure that tends to get used.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "No dealer or using contacts remain in your phone or apps, blocks are in place, and a decision about changing your number is recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Go through your contacts and delete every dealer and using friend"
                - "Block the same numbers on every messaging app"
                - "Leave or mute group chats that exist for drinking or using"
                - "Remove alcohol delivery apps and saved payment shortcuts"
                - "Decide with your sponsor whether to change your number"
            - name: Telling one trusted person you are getting sober
              description: |-
                ## Purpose
                Secrecy is what active addiction runs on, and recovery is far harder to hold alone. Choosing one person who is safe, sober themselves or supportive of sobriety, and telling them plainly what you are doing and what helps, gives you someone to call and someone who notices. Planning the conversation stops it turning into a confession of everything at once.

                ## Milestones
                1. One person chosen who is supportive of sobriety and does not drink or use with you.
                2. Three or four sentences written on what you are doing and what would help.
                3. The conversation held, in person or by phone.
                4. One specific way they can support you agreed, such as a weekly call.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "You have told one named trusted person about your recovery and agreed one specific way they will support you."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List two or three people who are safe and do not drink or use with you"
                - "Write down what you want them to know and how they can help"
                - "Meet or call the person you chose and have the conversation"
                - "Agree one concrete way they will support you in the next month"
            - name: Five-person recovery phone list
              description: |-
                ## Purpose
                The moment of a craving is the worst time to work out who to call, and many relapses happen because the one number you have does not answer. A list of five people, with the times they are usually free, and the habit of calling them on good days, makes picking up the phone feel ordinary before it is urgent. Meeting chairs often hand out a phone list for exactly this reason.

                ## Milestones
                1. Five names and numbers of sober, supportive people saved under one label in your phone.
                2. The same list written on a card in your wallet.
                3. Each person asked whether they are happy to be called and when.
                4. At least one call made to someone on the list each week for a month.

                ## Notes
                Add a 24 hour helpline as a sixth number for nights when nobody answers.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of five sober contacts plus a 24 hour helpline is in your phone and wallet, and at least four weekly calls have been made."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect five phone numbers at meetings or from your support group"
                - "Save them under one label and copy them onto a wallet card"
                - "Add a 24 hour helpline number as the sixth contact"
                - "Call someone on the list just to talk, not only in a crisis @recurring(weekly:wed)"
            - name: Trying five different recovery meetings
              description: |-
                ## Purpose
                Recovery groups differ more than people expect: twelve-step fellowships, SMART Recovery, secular and faith-based groups, women-only, LGBTQ+ and online meetings all have their own feel. Visiting five before deciding none of them suit you gives a fair test, because the first meeting is rarely the best fit. The aim is a short list of two or three you would return to.

                ## Milestones
                1. A list of local and online meetings within reach, with days and times.
                2. Five different meetings attended, covering at least two different approaches.
                3. A short note written after each on what you liked and what put you off.
                4. Two or three meetings chosen to return to regularly.

                ## Notes
                Sitting at the back and listening is fine at a first meeting. Nobody has to speak, and most groups welcome people who are still using or unsure.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Five meetings across at least two recovery approaches attended, each noted, and two or three chosen for regular attendance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the meeting lists for twelve-step, SMART Recovery and secular groups near you"
                - "Attend the first meeting this week, even if you only listen"
                - "Write a short note after each meeting on how it felt"
                - "Choose the two or three meetings you will keep going to"
            - name: Naloxone kit and overdose risk awareness
              description: |-
                ## Purpose
                After even a few weeks without opioids, tolerance drops sharply, and an amount that was normal before can kill. Carrying naloxone, and making sure the people around you know where it is and how to give it, reverses opioid overdoses while help is on the way. It matters most in the first weeks after detox, rehab or release from prison.

                ## Milestones
                1. A naloxone kit obtained from a pharmacy, addiction service or outreach team.
                2. Training in recognising an overdose and giving naloxone completed.
                3. Household members or friends shown where the kit is kept and how to use it.
                4. The kit's expiry date written down.

                ## Notes
                Naloxone works on opioids only, and an ambulance should always be called. If you only ever used alcohol or stimulants, ask your service whether a kit makes sense for you, since street drugs are increasingly mixed with opioids.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A naloxone kit is in the home with its expiry noted, and you and at least one other person have been trained to use it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your pharmacy or addiction service where to get a free naloxone kit"
                - "Complete the short overdose and naloxone training they offer"
                - "Show the people you live with where the kit is kept"
                - "Check the naloxone kit's expiry date and replace it if needed @recurring(yearly)"
            - name: Ninety meetings in ninety days
              description: |-
                ## Purpose
                Ninety meetings in ninety days is a long-standing suggestion in twelve-step fellowships, and the logic works for any approach: early sobriety is when cravings are strongest and evenings are emptiest. A meeting a day, online when you cannot get there in person, builds the habit of turning up, a circle of familiar faces and a daily reason not to use. Ninety ticks on a sheet is also something concrete to show for the hardest three months.

                ## Milestones
                1. A weekly meeting schedule drawn up with at least one option for every day.
                2. A ninety-day tick sheet started.
                3. Thirty meetings attended in the first month.
                4. Ninety meetings attended within roughly ninety days.

                ## Notes
                Start from the **Habit tracker** template. Missing a day is not a failure; go to the next meeting.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tick sheet shows ninety meetings attended within about ninety days, mixing in-person and online meetings."
                cadence: phased
                effort_hours_estimate: "135"
              tasks:
                - "Write out a meeting for every day of the week, with online backups"
                - "Draw up a ninety-day tick sheet from the habit tracker template"
                - "Go to a meeting and tick it off on the sheet @recurring(daily)"
                - "Ask one new person at a meeting for their number each week of the first month"
            - name: Home group and weekly meeting commitment
              description: |-
                ## Purpose
                Once the first ninety days are done, attendance often drifts, and long-term sobriety is closely linked to staying connected to a group. A home group is the one meeting you go to every week without fail, where people know your name, notice when you are missing and see your progress over years. Choosing it on purpose keeps one fixed point in a changing week.

                ## Milestones
                1. One meeting chosen as your home group.
                2. The home group attended every week for three months.
                3. Phone numbers held for at least three regular members.
                4. A second weekly meeting chosen for busy or difficult periods.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your home group has been attended in at least 11 of the last 12 weeks, and you hold numbers for three regular members."
                cadence: rolling
              tasks:
                - "Choose the meeting that will be your home group"
                - "Tell the secretary or chair you would like to make it your home group"
                - "Attend your home group meeting @recurring(weekly:tue)"
                - "Choose a backup meeting for weeks when the home group is cancelled"
            - name: Morning plan and evening review
              description: |-
                ## Purpose
                Two short moments bookend a sober day well: a morning decision about how today will go, and an evening look back at what happened. Many recovery approaches build this in, whether as a prayer, a written plan or a ten-minute inventory of where you were resentful, afraid or honest. Done daily, it catches small slides, such as skipped meals, rising irritation or a secret kept, before they add up.

                ## Milestones
                1. Three morning questions written and kept by the bed or the kettle.
                2. Five evening review questions written in a notebook or app.
                3. Both done on most days for four weeks.
                4. One pattern spotted in the evening reviews and acted on.

                ## Notes
                Keep each one under five minutes, or it will be the first thing dropped on a hard day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Morning plans and evening reviews completed on at least 20 of 28 days, with one recurring pattern named and acted on."
                cadence: rolling
              tasks:
                - "Write three morning questions and five evening questions"
                - "Answer the three morning questions before leaving the house @recurring(daily)"
                - "Do a five-minute written review of the day before bed @recurring(daily)"
                - "Read back the month's reviews and note any repeating pattern"
            - name: Weekly sponsor or mentor call
              description: |-
                ## Purpose
                Asking someone with longer sobriety to guide you is central to twelve-step groups, and SMART Recovery and other approaches use mentors or facilitators in a similar way. A fixed weekly call, rather than calls only when things go wrong, builds the relationship that makes the crisis call possible. Choosing someone whose recovery you respect, and who has the time, matters more than finding a perfect match.

                ## Milestones
                1. A sponsor or mentor asked and agreed, with at least a year of continuous sobriety.
                2. A regular weekly call time set.
                3. Twelve weekly calls completed.
                4. A review held after three months of whether the relationship is working.

                ## Notes
                Many groups suggest a sponsor of the same sex, or at least someone who is not a potential romantic interest. Changing sponsor is normal and not a betrayal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A named sponsor or mentor is agreed, twelve weekly calls are completed and a three-month review has been held."
                cadence: rolling
              tasks:
                - "Write down two people at meetings whose recovery you respect"
                - "Ask one of them to be your sponsor or mentor"
                - "Agree a regular weekly call time"
                - "Call your sponsor or mentor at the agreed time @recurring(weekly:sun)"
            - name: Craving and trigger log
              description: |-
                ## Purpose
                Cravings feel constant in early recovery, but logged for a few weeks they usually turn out to cluster around certain times, people, moods and places. Writing down each strong urge, its strength out of ten, what set it off and what you did, shows which triggers to avoid and which coping steps actually worked. The log also proves that urges pass, which is hard to believe in the middle of one.

                ## Milestones
                1. A log with columns for time, strength, trigger, response and outcome.
                2. Every strong craving logged for four weeks.
                3. The three most common triggers identified.
                4. One change made to avoid or plan for the top trigger.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of craving entries recorded, with the top three triggers named and one change made for the most frequent."
                cadence: rolling
              tasks:
                - "Set up a craving log with time, strength, trigger and response columns"
                - "Log each strong craving within an hour of it passing"
                - "Review the week's cravings and circle repeat triggers @recurring(weekly:sat)"
                - "Make one change to avoid or plan for your top trigger"
            - name: Monthly recovery review
              description: |-
                ## Purpose
                Day to day, recovery can feel like either a crisis or nothing at all, and slow drift is easy to miss. Twenty minutes each month looking at meetings attended, cravings, sponsor contact, sleep, mood and any warning signs gives an honest view of whether things are steady. Sharing the review with your sponsor or keyworker turns it into a conversation rather than a private worry.

                ## Milestones
                1. A one-page review with the same six headings every month.
                2. The review done on a fixed day each month for six months.
                3. Every warning sign in a review followed by a specific action.
                4. Each review shared with your sponsor, mentor or keyworker.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews completed on a fixed day, each recording any warning signs and the action taken."
                cadence: rolling
              tasks:
                - "Write the six headings your monthly review will use"
                - "Complete the monthly recovery review @recurring(monthly:12)"
                - "Read the review to your sponsor or send it to your keyworker"
                - "Pick one action for any warning sign the review shows"
            - name: Medication-assisted treatment routine
              description: |-
                ## Purpose
                Medicines such as opioid substitution treatment, or those that reduce alcohol cravings, can cut relapse and overdose risk substantially, but they depend on steady routines: supervised doses, pharmacy collections, keyworker reviews and drug tests. Missing a collection or an appointment can mean a reduced or paused prescription at the worst moment. Keeping every date in one calendar protects the treatment.

                ## Milestones
                1. Your medicine, prescriber, pharmacy and collection days written in one place.
                2. Every collection, review and test date for the next month in your calendar.
                3. A plan agreed with your service for holidays, illness and travel.
                4. Three months completed with no missed collections or appointments.

                ## Notes
                Never change your dose, stop, or top up with other substances without talking to your prescriber. Store any take-home doses locked away from children.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months of medication collections, reviews and tests attended with none missed, all dates kept in one calendar."
                cadence: rolling
              tasks:
                - "Write down your medicine, prescriber, pharmacy and collection days"
                - "Check the pharmacy collection and review dates for the coming month @recurring(monthly:25)"
                - "Ask your service how to arrange doses before a holiday or trip"
                - "Buy a lockable box for any take-home doses"
            - name: Money guardrails in early recovery
              description: |-
                ## Purpose
                Easy access to cash is a common relapse trigger, especially on the day wages or benefits land. Agreeing limits for the first months, such as a lower cash withdrawal cap, bills paid on payday and a trusted person who sees your statements, puts time between a craving and the money to act on it. These are temporary scaffolding, loosened as trust and stability grow.

                ## Milestones
                1. Rent and essential bills set to leave your account on payday.
                2. A lower daily cash withdrawal limit set with your bank.
                3. A trusted person agreed to look over statements with you each month.
                4. A date set to review and loosen the guardrails.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Bills leave on payday, a lower cash limit is in place, and three monthly statement reviews with a trusted person have happened."
                cadence: rolling
              tasks:
                - "Move rent and essential bills to leave your account on payday"
                - "Ask your bank to lower your daily cash withdrawal limit"
                - "Ask one trusted person to go through statements with you"
                - "Review last month's statement with your trusted person @recurring(monthly:3)"
            - name: High-risk dates calendar
              description: |-
                ## Purpose
                Birthdays, anniversaries of a death, holidays, paydays, sporting finals and the date you last used all carry a pull that is predictable a year ahead. Marking them in the calendar with a plan for each, such as an extra meeting, a call booked or a sober activity, means none of them arrives as a surprise. Reviewing the list each year keeps it honest as life changes.

                ## Milestones
                1. A list of the dates in the year that have historically been risky.
                2. Each date in the calendar with a reminder a week before.
                3. A one-line plan written beside every date.
                4. The list reviewed and updated once a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every known high-risk date for the coming year is in your calendar with a reminder and a one-line plan."
                cadence: cyclic
              tasks:
                - "List the dates that have pulled you towards using in past years"
                - "Add each one to your calendar with a reminder a week ahead"
                - "Write a one-line plan beside each date"
                - "Add next year's high-risk dates and plans to the calendar @recurring(yearly)"
            - name: Service commitment at your meeting
              description: |-
                ## Purpose
                Setting out chairs, making tea, greeting newcomers or keeping the literature table sounds small, but long-time members often name service as what kept them coming back. A commitment gives you a reason to be at the meeting early and a part to play in it, which helps on days when you would otherwise stay home. It also builds the sense that you are now useful to others in recovery.

                ## Milestones
                1. One service role taken on at your home group.
                2. The role carried out every week for three months.
                3. A newcomer welcomed and given a meeting list or phone list.
                4. The role handed over or renewed at the end of its term.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A service role at your home group held for at least three months, with any missed week covered by an agreed stand-in."
                cadence: rolling
              tasks:
                - "Ask the secretary what service roles are open at your home group"
                - "Take on one role such as tea, greeting or setting up the room"
                - "Arrange cover with another member if you will miss a week"
                - "Review whether to renew or rotate your service role @recurring(quarterly)"
            - name: Written relapse prevention plan
              description: |-
                ## Purpose
                Relapse usually starts well before the first drink or drug, with stopping meetings, isolating, romanticising old times or skipping sleep and meals. A written plan names your personal warning signs, your highest-risk situations, your coping steps and who to call at each stage, so that you and the people around you can spot the slide early. Keyworkers and counsellors can help you write it, and it should be short enough to read in two minutes.

                ## Milestones
                1. Your early, middle and late warning signs listed.
                2. Your top five high-risk situations written down with a coping step for each.
                3. Three people to contact, and what to ask each of them for, written in.
                4. The plan reviewed with a sponsor, counsellor or keyworker.
                5. Copies kept on your phone and given to one support person.

                ## Notes
                Keep it to one or two pages. A plan nobody can find on a bad night does no work.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one or two page relapse prevention plan exists, has been reviewed with a sponsor or professional, and a copy is held by one support person."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the warning signs that came before past relapses"
                - "Write a coping step and a contact for each of your top five risk situations"
                - "Go through the draft with your sponsor, counsellor or keyworker"
                - "Save the plan on your phone and give a copy to one support person"
                - "Reread and update the plan with your sponsor or keyworker @recurring(quarterly)"
            - name: Mapping people, places and things that trigger use
              description: |-
                ## Purpose
                Changing people, places and things is old recovery advice, and the practical version is a map: which friends, pubs, routes home, music, smells, times of day and feelings have been linked to using. Seeing them in one place lets you decide which to avoid entirely, which to change and which you will need skills for. It is best done with someone who knew you while you were using.

                ## Milestones
                1. Triggers listed under people, places, things, times and feelings.
                2. Each trigger marked avoid, change or cope.
                3. A new route, routine or plan set for each trigger marked change.
                4. The map compared with your craving log after a month.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written trigger map sorted into avoid, change and cope, with a new plan set for every trigger marked change."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write your triggers under people, places, things, times and feelings"
                - "Mark each trigger avoid, change or cope"
                - "Plan a new route home that avoids your old pub or dealer's street"
                - "Compare the map with your craving log after a month"
            - name: Urge surfing practice
              description: |-
                ## Purpose
                Urge surfing, a technique from mindfulness-based relapse prevention, treats a craving as a wave that rises, peaks and falls, often within twenty to thirty minutes, if you watch it rather than fight or obey it. Practising on small urges, with a timer and a rating out of ten, builds the confidence to ride out the big ones. It pairs well with a phone call or a walk.

                ## Milestones
                1. A short urge surfing method learned from a reputable source.
                2. The technique practised on at least ten urges, each timed and rated.
                3. A note made of how long urges took to fall below half their peak.
                4. Urge surfing added to your relapse prevention plan as a coping step.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten urges surfed with time and strength recorded, and the technique added to your relapse prevention plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find a guided urge surfing recording from a reputable source"
                - "Practise on a small urge with a timer running"
                - "Rate the urge out of ten at the start, the peak and the end"
                - "Add urge surfing to the coping steps in your relapse plan"
            - name: Playing the tape forward
              description: |-
                ## Purpose
                In a craving the mind replays the first drink or hit, never the rest of the night. Playing the tape forward means writing out, in detail, what actually happened next on a typical using day: the second and tenth drink, the money, the argument, the morning. A written version, read aloud when an urge hits, puts the whole story back in view.

                ## Milestones
                1. One typical using day written out from the first drink or hit to the next morning.
                2. The account saved on your phone where you can reach it in seconds.
                3. The account read aloud during at least three cravings.
                4. A note made each time of whether the urge eased afterwards.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written account of a full using day is saved on your phone and has been used during at least three cravings."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write out a typical using day from the first drink or hit to the next morning"
                - "Save it as a note you can open from your phone's home screen"
                - "Read it aloud the next time a craving hits"
                - "Note afterwards whether the craving eased"
            - name: Rehearsed lines for turning down a drink or drug
              description: |-
                ## Purpose
                Being offered a drink at work, a line at a party or a pill at a festival is far harder to refuse when the words have to be invented on the spot. Having two or three short lines ready, practised out loud, and a plan for the pushier offers, makes refusing quick and uneventful. You do not owe anyone your history.

                ## Milestones
                1. Three short refusal lines written, from the simple to the firm.
                2. The lines practised aloud with a sponsor or friend playing the person offering.
                3. A plan written for what to do when someone keeps pushing.
                4. The lines used in at least one real situation and reviewed afterwards.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three refusal lines practised aloud with another person and used in at least one real situation."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three short ways to say no that do not explain your history"
                - "Practise them aloud with a sponsor or friend playing the person offering"
                - "Decide what you will do if someone keeps pushing"
                - "Note how the first real refusal went and adjust the lines"
            - name: Understanding post-acute withdrawal
              description: |-
                ## Purpose
                Weeks or months after acute withdrawal is over, many people still have poor sleep, low mood, irritability, foggy memory and sudden cravings, often in waves. Knowing that this pattern, often called post-acute withdrawal, is common and usually eases with time stops people deciding that sobriety simply feels worse than using. Logging the waves and talking them through with a clinician also rules out other causes.

                ## Milestones
                1. A reputable explanation of post-acute withdrawal read and summarised in your own words.
                2. Your own lingering symptoms listed with how often they come.
                3. A plan written for bad waves, such as an earlier night, a meeting and a call.
                4. The symptoms discussed with your doctor or keyworker.

                ## Notes
                Persistent low mood, thoughts of self-harm or symptoms that keep getting worse need a clinician, not patience.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of your post-acute symptoms and a plan for bad waves exist and have been discussed with a doctor or keyworker."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a health service or addiction service guide to post-acute withdrawal"
                - "List your lingering symptoms and how often they appear"
                - "Write a short plan for the days when symptoms flare"
                - "Raise the symptoms at your next doctor or keyworker appointment"
            - name: Working the first three steps with a sponsor
              description: |-
                ## Purpose
                For people in twelve-step fellowships, the steps are the core work, and the first three cover admitting the problem, finding hope and deciding to accept help. Working them with a sponsor, using the fellowship's literature and written answers, gives early recovery a structure beyond simply not using. People in secular groups can do comparable work with their programme's readings or workbook.

                ## Milestones
                1. A sponsor agreed to take you through the steps.
                2. The literature for the first three steps read.
                3. Written answers for each step completed and discussed.
                4. A date set to begin the fourth step.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written work on the first three steps completed and discussed with a sponsor, with a start date set for step four."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your sponsor how they like to take sponsees through the steps"
                - "Read the chapter on step one in your fellowship's main text"
                - "Write answers to the step one questions your sponsor gives you"
                - "Go through each step's written work with your sponsor before moving on"
            - name: Recovery reading list
              description: |-
                ## Purpose
                Recovery literature, memoirs and evidence-based self-help books keep the ideas from meetings working in between them, and reading other people's stories makes your own feel less unusual. A small, chosen list, read a chapter at a time, is easier to finish than a pile of books bought in a burst of enthusiasm. Mixing one practical workbook with one or two memoirs tends to work well.

                ## Milestones
                1. A list of five books chosen with input from your group, sponsor or keyworker.
                2. One practical workbook included on the list.
                3. A chapter read on most days for two months.
                4. One idea from each finished book written down and tried.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least three books from a five-book recovery reading list finished, with one idea from each written down and tried."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your group or keyworker for two book recommendations"
                - "Build a five-book list mixing a workbook and memoirs"
                - "Read one chapter before bed on most nights"
                - "Write down one idea you will try from each finished book"
            - name: Lapse response plan for the first 24 hours
              description: |-
                ## Purpose
                A single drink or use does not have to become a full relapse, but shame often turns one slip into weeks, because the person stops going to meetings and stops answering the phone. Deciding in advance exactly what you will do in the first 24 hours, who you will tell, which meeting you will go to and what you will check with your doctor, makes it far likelier you get straight back. It also protects you from the extra overdose risk of lowered tolerance.

                ## Milestones
                1. The first three actions after a lapse written in order.
                2. One person agreed to be called first, without judgement.
                3. The overdose and withdrawal safety points for your substance written in.
                4. The plan stored alongside your relapse prevention plan.

                ## Notes
                If you have been off opioids, even briefly, a lapse carries a serious overdose risk. Do not use alone, and keep naloxone nearby.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written lapse response plan with three ordered actions and a named first contact is stored with your relapse prevention plan."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the three things you will do in the first hours after a lapse"
                - "Ask one person to be your first call after a lapse"
                - "Add the overdose and withdrawal safety points that apply to you"
                - "File the lapse plan in the same place as your relapse prevention plan"
            - name: Filling the evening hours that used to be for using
              description: |-
                ## Purpose
                Many people find that the hardest part of sobriety is not the craving but the empty hours: the evenings, weekends and lunch breaks that used to be organised around drinking or using. Mapping where those hours were, and filling them on purpose with meetings, exercise, classes, cooking or people, removes the boredom that drives many relapses. Small fixed plans beat a vague promise to find a hobby.

                ## Milestones
                1. A typical week mapped, showing the hours that used to go on using.
                2. A planned activity written into each of those blocks.
                3. Two new regular activities started, one of them social.
                4. Four weeks completed with the evening plan mostly kept.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every former using hour in a typical week has a planned activity, and two new regular activities have been kept for four weeks."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Shade the hours in a typical week that used to go on using"
                - "Write a planned activity in each shaded block"
                - "Sign up for one class, club or group that meets weekly"
                - "Check after four weeks which plans stuck and replace the rest"
            - name: Building a sober social life
              description: |-
                ## Purpose
                Old friendships often revolved around drinking or using, and losing them can leave early recovery lonely. A sober social life is built deliberately: coffee after meetings, alcohol-free bars, sober sports clubs, recovery cafés and the friends who are happy to meet without a drink. Even one reliable weekend plan makes Friday and Saturday nights far less risky.

                ## Milestones
                1. Three alcohol-free venues or recovery cafés found within reach.
                2. One weekly social plan in place that does not involve alcohol or drugs.
                3. One old friendship that is safe to keep renewed on sober terms.
                4. Two people from meetings met outside a meeting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A weekly sober social plan kept for two months, with at least two friendships from recovery that meet outside meetings."
                cadence: rolling
              tasks:
                - "Find three alcohol-free venues or recovery cafés near you"
                - "Invite someone from a meeting for coffee afterwards"
                - "Plan one sober social activity for the weekend @recurring(weekly:fri)"
                - "Tell one safe old friend you are sober and suggest a daytime meet-up"
            - name: Debt and bills triage after active addiction
              description: |-
                ## Purpose
                Active addiction often leaves arrears, payday loans, unopened letters and money owed to friends, and the stress of it is a common relapse trigger. Gathering everything into one list, separating priority debts such as rent, energy and court fines from the rest, and getting free debt advice turns a pile of dread into a plan. Creditors usually respond better to contact than to silence.

                ## Milestones
                1. Every unopened letter opened and every debt listed with amount and creditor.
                2. Priority debts separated from non-priority ones.
                3. An appointment held with a free, independent debt advice service.
                4. A monthly budget showing what can go to each debt.
                5. Each creditor contacted with an offer or a request for breathing space.

                ## Notes
                Start from the **Monthly budget and bills** template. Avoid fee-charging debt management firms when free advice is available.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All debts are listed and sorted, free debt advice has been taken, and every creditor has been contacted with a plan."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Open every unopened letter and list each debt in one place"
                - "Book an appointment with a free independent debt advice service"
                - "Build a monthly budget from the template"
                - "Check each bill and debt payment has gone out as planned @recurring(monthly:28)"
            - name: Health catch-up after years of using
              description: |-
                ## Purpose
                Heavy drinking and drug use can leave quiet damage to the liver, heart, teeth, lungs and mental health, and blood-borne infections are common among people who injected or shared equipment. A planned catch-up with your doctor, dentist and, where relevant, a testing service finds what needs treating while you are well enough to deal with it. Many problems improve noticeably in the first sober year.

                ## Milestones
                1. A frank appointment held with your doctor about past use and any symptoms.
                2. The blood tests and screening your doctor recommends completed.
                3. Testing for hepatitis and HIV done if you ever injected or shared equipment.
                4. A dental check-up attended.
                5. Results and follow-ups recorded in one place.

                ## Notes
                This is about getting checked and following up, not self-diagnosing. Let your clinician decide which tests are needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A doctor's appointment, the recommended tests and a dental check have been completed, with results and follow-ups recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Book a doctor's appointment and say it is about your past substance use"
                - "Ask which blood tests and screening make sense for you"
                - "Book a dental check-up"
                - "Book a yearly health check that covers your recovery @recurring(yearly)"
            - name: Choosing recovery housing after treatment
              description: |-
                ## Purpose
                Going straight from detox or residential treatment back to a home where others drink or use, or where you used alone, is one of the riskiest moves in early recovery. Recovery houses and sober living homes offer substance-free housing with house rules and peer support, but quality, cost and rules vary widely. Comparing a few options against the same questions leads to a decision you can stand behind.

                ## Milestones
                1. Three recovery housing options identified through your treatment service or local listings.
                2. Each compared on cost, rules, drug testing, support offered and length of stay.
                3. At least two visited or spoken to by phone.
                4. A decision recorded, including the option of staying where you are with a stronger plan.

                ## Notes
                Ask whether a house is registered, inspected or accredited where your country offers that. Be wary of anywhere that asks for large upfront fees or your benefit details before you visit.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three housing options compared on the same five questions, two visited or called, and a decision recorded with reasons."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your treatment service which recovery houses they trust"
                - "Compare three options on cost, rules, testing and support"
                - "Visit or phone at least two of them with your questions"
                - "Write down your decision and the reasons for it"
            - name: Amends list and planned conversations
              description: |-
                ## Purpose
                Repairing harm done during active addiction is part of most recovery approaches, but rushed apologies in early sobriety can hurt people again or put your recovery at risk. Writing the list, talking each entry through with a sponsor or counsellor, and planning when and how to make each amend keeps the focus on the other person rather than on relief for yourself. Some amends are best made by changed behaviour rather than words.

                ## Milestones
                1. A list of people harmed and what the harm was.
                2. Each entry discussed with a sponsor or counsellor.
                3. A decision for each: direct amends, living amends or not now.
                4. Planned amends made, with a note on how each went.

                ## Notes
                Never make an amend that would injure the other person or someone else, such as revealing an affair to a partner who did not know. Money owed can often be repaid in instalments.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written amends list with a decision for every entry, agreed with a sponsor or counsellor, and the planned amends made."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write the names of people you harmed and what happened"
                - "Talk each name through with your sponsor or counsellor"
                - "Mark each one as direct amends, living amends or not now"
                - "Write a short note after each amend on how it went"
            - name: Family agreement on recovery boundaries
              description: |-
                ## Purpose
                Families of people in recovery are often exhausted, wary and unsure what to do: whether to keep alcohol in the house, ask about meetings or check bank statements. A calm conversation, ideally with a counsellor or keyworker present, that agrees what helps, what does not and what happens after a lapse, replaces guessing with a shared plan. It also gives family members permission to look after themselves.

                ## Milestones
                1. A family meeting arranged, with a counsellor or keyworker present if possible.
                2. A written list of what helps you and what does not.
                3. Agreements recorded on alcohol in the house, money and what happens after a lapse.
                4. Family members given details of support groups for relatives.
                5. The agreement reviewed after three months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written family agreement covering the home, money and lapses exists and has been reviewed once after three months."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your keyworker whether they can host a family session"
                - "Write what helps you and what does not before the meeting"
                - "Agree and write down the rules on alcohol at home, money and lapses"
                - "Give family members details of a support group for relatives"
            - name: Discharge plan for leaving detox or rehab
              description: |-
                ## Purpose
                The days after leaving detox or residential treatment carry the highest risk of relapse and, for people who used opioids, of overdose. A discharge plan written before you leave, covering where you will sleep, the first meetings, the next appointments, medication and who will meet you at the door, closes the gap between intensive support and everyday life. Most services will help write it if you ask early.

                ## Milestones
                1. The discharge date confirmed with the service.
                2. Housing for the first night and the first month confirmed.
                3. Meetings for the first week chosen, with someone to go with you to the first one.
                4. Community appointments and continued medication booked.
                5. A person arranged to collect you on the day.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before discharge, written arrangements exist for housing, first-week meetings, follow-up appointments, medication and collection on the day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your treatment team for a discharge planning session this week"
                - "Confirm where you will live for the first month"
                - "Book the first community appointment and any continued medication"
                - "Arrange for someone to collect you and go with you to a first meeting"
            - name: First sober festive season
              description: |-
                ## Purpose
                Festive weeks, whether the winter holidays or the celebrations your family keeps, combine parties, family tension, time off work and drink everywhere. Planning your first sober season in advance, with which events you will attend, how you will get home, extra meetings and a drink in your hand you chose, turns the riskiest month of the year into a manageable one. Many groups hold holiday or marathon meetings for exactly this period.

                ## Milestones
                1. Every invitation in the season listed with a decision to go, go briefly or decline.
                2. An exit plan and transport home arranged for each event you attend.
                3. Extra meetings and calls scheduled on the riskiest days.
                4. A debrief held with your sponsor after the season.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every festive event has a written go or decline decision and exit plan, extra meetings are scheduled on the riskiest days, and a debrief is held."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every party and family gathering in the season"
                - "Decide for each one whether to go, go briefly or decline"
                - "Book your own transport home from every event you attend"
                - "Find the holiday or marathon meetings your group runs"
            - name: Going to a wedding or party sober
              description: |-
                ## Purpose
                Weddings, big birthdays and work parties bring toasts, an open bar and people who knew the old you. Preparing for one specific event, with an alcohol-free drink plan, a sober ally there or on the phone, a set time to leave and a call booked for the next morning, means you can enjoy it rather than grit your teeth through it. Leaving early is always allowed.

                ## Milestones
                1. The event's risky moments listed: arrival, toasts and the late evening.
                2. An alcohol-free drink plan and a drink for the toast chosen.
                3. A sober ally present or on call through the evening.
                4. A leaving time set and transport arranged.
                5. A call with your sponsor held the next day.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The event was attended sober with a drink plan, an ally on call and a set leaving time, followed by a next-day check-in."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the host or venue what alcohol-free drinks will be available"
                - "Ask a sober friend to come with you or be on call"
                - "Set a leaving time and book transport home"
                - "Book a call with your sponsor for the next morning"
            - name: Marking your first year sober
              description: |-
                ## Purpose
                Reaching a year of continuous sobriety is a real achievement, and many fellowships mark it with a coin, a cake or a chance to share at a meeting. Planning how you will mark it, what you will say if asked to share and who you will thank makes the day meaningful rather than anticlimactic. It is also a natural point to update your relapse plan for year two, since complacency is a known risk after the first anniversary.

                ## Milestones
                1. The anniversary date confirmed and marked in your calendar.
                2. A meeting chosen to celebrate at, and the group told in advance.
                3. A short share or thank-you written.
                4. A celebration planned away from risky settings.
                5. Your relapse prevention plan updated for year two.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The one-year anniversary was marked at a meeting with a written share, and the relapse prevention plan was updated within a month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark the one-year date in your calendar with a reminder a month before"
                - "Tell your home group you would like to celebrate there"
                - "Write a three-minute share or thank-you"
                - "Update your relapse prevention plan for the second year"
            - name: Returning to work after treatment
              description: |-
                ## Purpose
                Going back to work after detox, rehab or a period of sick leave raises practical questions: what to tell your manager, how to keep treatment appointments, how to handle work drinks and how to rebuild your reputation. Planning the return with occupational health or HR, and knowing what your employer's policy and the law where you live say, protects both your job and your recovery. You usually do not have to share more than you choose to.

                ## Milestones
                1. Your employer's substance misuse and sickness absence policies read.
                2. A decision made on what to share and with whom.
                3. A return plan agreed with your manager or occupational health, including time for appointments.
                4. A plan in place for work social events and business travel.
                5. A review meeting held after the first month back.

                ## Notes
                If you work in a safety-critical or regulated job, ask a union representative or an independent adviser about your obligations before you disclose.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written return-to-work plan agreed with your employer covers appointments and work events, with a review held after the first month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your employer's substance misuse and sickness absence policies"
                - "Decide what you will tell your manager and write it down"
                - "Ask for time off for treatment appointments in your return plan"
                - "Book a review meeting for the end of your first month back"
            - name: Parenting in early recovery
              description: |-
                ## Purpose
                Parents in recovery carry extra weight: guilt, children who may be angry or wary, possible involvement from social services and the plain logistics of meetings around school runs. A plan covering childcare for meetings, honest age-appropriate conversations with children and steady routines helps the whole family recover alongside you. Children usually need consistency more than explanations.

                ## Milestones
                1. Childcare or online alternatives arranged so you can attend meetings every week.
                2. An age-appropriate way of talking to each child about recovery agreed with a counsellor or family worker.
                3. Two fixed family routines, such as breakfast together or a bedtime story, kept for a month.
                4. Any social services requirements listed with dates and the evidence needed.
                5. Support for your children identified, such as a young carers or family programme.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Weekly meetings are covered by childcare, two family routines have been kept for a month, and any agency requirements are listed with dates."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find meetings with a crèche, or online options during school hours"
                - "Ask a counsellor how to explain recovery to a child of each age"
                - "Choose two family routines you can keep every day"
                - "List any social services requirements with their dates and evidence"
            - name: Staying sober as a student
              description: |-
                ## Purpose
                Student life is often built around drinking and sometimes drugs, from welcome week to society socials, which can make sobriety feel like social exclusion. A plan that uses campus support, sober societies, alcohol-free accommodation where it exists and honest messages to new friends makes a full student life possible without using. A growing number of universities and colleges run collegiate recovery programmes or sober societies.

                ## Milestones
                1. The student wellbeing service and any campus recovery programme contacted.
                2. Alcohol-free accommodation or a sober floor requested if offered.
                3. Two societies or activities joined that do not centre on drinking.
                4. A plan for welcome week and big nights out written.
                5. A weekly meeting found, near campus or online, that fits your timetable.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Campus support contacted, two non-drinking societies joined and a weekly meeting fitted into your timetable within the first term."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Email the student wellbeing service to ask about recovery support"
                - "Ask accommodation services whether alcohol-free housing is available"
                - "Join two societies whose events do not revolve around drinking"
                - "Find a meeting that fits around your lectures"
            - name: Getting sober later in life
              description: |-
                ## Purpose
                Problem drinking and dependence on prescribed tranquillisers or painkillers in people over sixty is common and often missed, sometimes because it grew after retirement, a bereavement or loneliness. Older bodies are more sensitive to withdrawal and to interactions with other medicines, so medical input matters even more. Daytime meetings and services for older adults exist, and the routine, purpose and company recovery brings can matter as much as stopping.

                ## Milestones
                1. A medicines review done with your doctor or pharmacist covering alcohol and every medicine you take.
                2. A withdrawal plan agreed with your doctor.
                3. One daytime meeting or older adults' group found.
                4. A new weekly daytime commitment, such as volunteering or a class, started.
                5. A trusted family member or friend told.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A medicines review and withdrawal plan agreed with a clinician, a daytime meeting found and a new weekly daytime commitment started."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a medicines review that includes your drinking and any tranquillisers"
                - "Ask your doctor for a safe plan for stopping"
                - "Find a daytime meeting or a group for older adults in recovery"
                - "Start one weekly daytime commitment such as volunteering or a class"
            - name: Joining up addiction and mental health care
              description: |-
                ## Purpose
                Depression, anxiety, trauma and ADHD often travel with addiction, and people can be passed between services, each saying the other problem must be treated first. Getting both teams to know about each other, sharing a single list of diagnoses, medicines and contacts, and asking for a named coordinator keeps you from falling into the gap. You can ask to see a dual diagnosis worker where one exists.

                ## Milestones
                1. One summary sheet with diagnoses, medicines, both teams' contacts and your recovery plan.
                2. Consent given for your addiction and mental health services to share information.
                3. A named care coordinator or lead professional confirmed.
                4. A joint review or a letter between the services recorded.

                ## Notes
                A mental health crisis needs your crisis plan and emergency services, not a wait for the next recovery meeting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared summary sheet exists, consent to share is in place, and a named coordinator links your addiction and mental health care."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one summary sheet of your diagnoses, medicines and care contacts"
                - "Sign consent for your addiction and mental health teams to share information"
                - "Ask who your named care coordinator or lead professional is"
                - "Ask whether a dual diagnosis worker is available in your area"
            - name: Pregnancy and recovery with your maternity team
              description: |-
                ## Purpose
                Pregnancy is often a strong reason to stop, but stopping some substances abruptly can harm the baby as well as the mother, and fear of judgement keeps many people from telling their midwife. Being open with the maternity team early lets them coordinate with addiction services, plan care for the birth and the first weeks, and treat you as a patient rather than a suspect. Specialist midwives for substance use exist in many areas.

                ## Milestones
                1. Your substance use disclosed to your midwife or maternity doctor.
                2. A referral to a specialist midwife or addiction service confirmed.
                3. Any medication plan for the pregnancy agreed with clinicians.
                4. A birth and postnatal plan that includes recovery support written.
                5. A partner or supporter briefed on the plan.

                ## Notes
                Do not stop opioids, alcohol or benzodiazepines suddenly in pregnancy without medical advice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Maternity and addiction services are both aware and linked, with a written birth and postnatal plan that includes recovery support."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Tell your midwife about your substance use at your next appointment"
                - "Ask for a referral to a specialist midwife for substance use"
                - "Agree any medication plan with both teams before changing anything"
                - "Write a birth plan that includes your recovery supports"
            - name: Sponsoring or mentoring a newcomer
              description: |-
                ## Purpose
                Helping a newer member is part of many recovery traditions, and those who sponsor often say it strengthens their own sobriety. Before saying yes, it helps to have solid time sober, a sponsor of your own and a clear idea of what you can offer and where your limits are. Clear boundaries about calls, money and lifts protect both of you.

                ## Milestones
                1. A conversation held with your own sponsor about whether you are ready.
                2. Your boundaries on contact times, money and lifts written down.
                3. A sponsee or mentee agreed and a weekly contact time set.
                4. A monthly check-in with your own sponsor about the relationship.

                ## Notes
                You are not their therapist, doctor or crisis service. Know where to point them if they need more than you can give.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A sponsee or mentee supported through weekly contact for three months, with your boundaries written down and monthly check-ins with your own sponsor."
                cadence: rolling
              tasks:
                - "Ask your sponsor whether they think you are ready to sponsor"
                - "Write your boundaries on call times, money and lifts"
                - "Call your sponsee at the agreed time @recurring(weekly:mon)"
                - "Talk the sponsorship through with your own sponsor each month"
            - name: Telling your recovery story to a group
              description: |-
                ## Purpose
                Sharing your story at a meeting, a school, a treatment centre or a workplace can show others that recovery is possible, and many people find it consolidates their own. A good share is short, honest and built around what it was like, what happened and what it is like now, without glorifying using. Deciding what stays private, especially about other people, comes first.

                ## Milestones
                1. A decision made on what you will and will not disclose, including about other people.
                2. A ten-minute talk outlined in three parts.
                3. The talk practised with your sponsor or a friend.
                4. The story given at least once to a meeting or another audience.
                5. A note written on what you would change next time.

                ## Notes
                Speaking publicly or online is permanent. Think about work, family and your fellowship's anonymity traditions before you put your name to a story.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A ten-minute recovery story with agreed privacy limits has been given to at least one meeting or audience."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Decide what you will keep private, including about other people"
                - "Ask the agent to shape your notes into a three-part outline"
                - "Practise the talk aloud with your sponsor or a friend"
                - "Offer to share at a speaker meeting or a treatment centre"
            - name: Peer recovery worker training
              description: |-
                ## Purpose
                People with lived experience of addiction are increasingly employed as peer workers, recovery coaches and volunteers in treatment services. With a stable stretch of recovery behind you, often two years or more, training as a peer worker turns your experience into a skill and sometimes a career. Services usually look for a recognised course, supervised volunteering and a clear plan for looking after yourself.

                ## Milestones
                1. The requirements of two or three local services or peer training courses compared.
                2. A conversation held with your sponsor or keyworker about timing.
                3. A recognised peer support or recovery coaching course completed.
                4. Supervised volunteering started with a support plan for yourself.
                5. A decision made on whether to pursue paid peer work.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recognised peer support course completed and supervised volunteering started, with a self-care plan agreed with a supervisor."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask your treatment service what training and time sober they expect of peer workers"
                - "Compare two or three peer support or recovery coaching courses"
                - "Discuss the timing with your sponsor or keyworker"
                - "Apply for supervised volunteering once the course is done"
            - name: Complacency check in long-term recovery
              description: |-
                ## Purpose
                After a few years, many people quietly let go of the things that got them sober: meetings thin out, the sponsor call stops, and a belief creeps in that one drink would be fine now. A yearly honest check against a short list of warning signs, done with someone who knew you early on, catches complacency before it turns into a relapse. Long-term recovery tends to stay strong when it keeps growing rather than coasting.

                ## Milestones
                1. A complacency checklist of eight to ten questions written.
                2. The checklist answered honestly once a year with your sponsor or an old friend in recovery.
                3. Every warning sign followed by a specific change, such as more meetings or a new commitment.
                4. A new recovery goal set for the coming year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The complacency checklist was completed with another person this year, and any warning signs were followed by a recorded change."
                cadence: cyclic
              tasks:
                - "Write eight to ten questions that would reveal complacency for you"
                - "Ask someone who knew you in early recovery to go through it with you"
                - "Answer the complacency checklist with that person @recurring(yearly)"
                - "Set one new recovery goal for the coming year"
---

# Addiction Recovery & Sobriety

This area is for anyone staying sober or drug-free, whether you are days out of detox or years into recovery, and whatever your route: twelve-step, SMART Recovery, secular, faith-based or medication-assisted. It starts with foundations (an honest inventory, a safe way to stop, a treatment referral, a clean house and phone, a phone list and naloxone), then the daily and weekly machinery of meetings, sponsor calls and reviews, the core relapse prevention skills, repairs to money, health, housing and family, dated milestones such as leaving rehab and your first sober year, situations for parents, students, workers, older adults and pregnancy, and finally sponsoring, peer work and long-term recovery.

What repeats is a daily meeting through the first ninety days, a daily morning plan and evening review, weekly home group, sponsor and phone list calls, a weekly craving review, monthly recovery and money reviews, a quarterly update of your relapse plan and yearly checks of high-risk dates, naloxone and complacency. The Habit tracker, Metrics log, Reading queue and Monthly budget and bills templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
