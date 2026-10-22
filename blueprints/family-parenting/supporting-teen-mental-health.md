---
id: family-parenting.supporting-teen-mental-health
name: Supporting a Teen's Mental Health
description: "A baseline and warning signs, a crisis card, a safer home, the first doctor's visit, weekly mood scores, referral chasing, school support and calm plans for self-harm, school avoidance and crisis."
category: personal
version: 1.0.0
tags: [family-parenting, supporting-teen-mental-health, parent, anxiety, depression, self-harm, school-support, crisis-planning]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Family & Parenting
      emoji: "👨‍👩‍👧"
      description: "Raising children and holding a family together: each stage from pregnancy to young adulthood, schooling and activities, family logistics and traditions, extended family, and the decisions parents make together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Supporting a Teen's Mental Health
          description: "Spotting signs of anxiety, depression or self-harm in a teenager and getting them the right support at school and from services."
          projects:
            - name: What normal looks like for your teenager
              description: |-
                ## Purpose
                Change is the most useful signal parents have, and it is only visible against a picture of how your teenager usually sleeps, eats, spends time and talks. Writing that picture down now, while things are calm or only just wobbling, gives you something concrete to compare against and to describe to a doctor or the school.

                ## Milestones
                1. A one-page note of your teen's usual sleep times, appetite, friendships, interests and school pattern.
                2. Every change over the last three months listed with roughly when it started.
                3. The other adults who know your teen well asked what they have noticed.
                4. The note dated and saved where you can find it before an appointment.

                ## Notes
                Write what you see, not what you fear it means. 'Stopped going to football in March' is more useful to a clinician than 'seems depressed'.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A dated one-page note of your teen's usual patterns and any changes in the last three months exists and has been checked with one other adult."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your teen's usual bedtime, wake time and weekend pattern"
                - "List the friends, clubs and interests they had six months ago"
                - "Note every change you have noticed and roughly when it started"
                - "Ask the other parent or a close relative what they have noticed"
            - name: Warning signs of anxiety, depression and self-harm
              description: |-
                ## Purpose
                Ordinary teenage moodiness and the start of anxiety or depression can look alike for weeks. Learning the signs that tend to separate them, such as how long a change lasts, whether it reaches school, sleep and friendships at once, and hidden injuries or covered arms in warm weather, helps you act early without panicking over one bad week.

                ## Milestones
                1. Guidance on anxiety, low mood and self-harm read from a reputable young people's mental health charity or health service.
                2. A short list of the signs that would prompt you to book a doctor's appointment.
                3. The signs that mean urgent help the same day written on a separate line.
                4. The list compared with your note of what normal looks like.

                ## Notes
                Two weeks or more of a change that touches several parts of life is a common rule of thumb for getting advice, but you never need to wait if you are worried about safety.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list separates signs to watch, signs that need a doctor's appointment and signs that need same-day help, checked against your baseline note."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a young people's mental health charity guide to warning signs"
                - "Sort the signs into watch, book an appointment and same-day help"
                - "Compare the list with your note of what normal looks like"
                - "Share the list with the other adults who care for your teen"
            - name: Crisis numbers and urgent help card
              description: |-
                ## Purpose
                In a crisis nobody can remember which number to ring or whether the out-of-hours line covers teenagers. A card with the emergency number, a crisis line and text service for young people, the out-of-hours medical line and the nearest emergency department, kept in every adult's phone and on paper at home, removes that search at the worst moment.

                ## Milestones
                1. The emergency number, a young people's crisis line, a crisis text service and the out-of-hours medical line confirmed for your country.
                2. The address of the nearest emergency department that sees under-18s noted.
                3. The card saved in each parent's phone and printed in a known place at home.
                4. Your teen given the same numbers in a way they are happy to keep.

                ## Notes
                If your teen is in immediate danger, call the emergency number first. Crisis lines offer support and advice; they do not replace an ambulance.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every adult at home has the crisis card in their phone, a printed copy is in a known place, and your teen has the numbers too."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up the young people's crisis line and text service in your country"
                - "Find which local emergency department sees under-18s at night"
                - "Save every number as a contact in each parent's phone"
                - "Check the card's numbers and opening hours are still current @recurring(quarterly)"
            - name: Safer storage of medicines and sharp items at home
              description: |-
                ## Purpose
                Reducing easy access to large amounts of medicine and to blades is one of the few steps clinicians widely agree lowers risk during a hard patch, and it costs little. Most homes hold more painkillers, old prescriptions and razor blades than anyone realises, spread across bathrooms, bags and kitchen drawers.

                ## Milestones
                1. Every medicine in the house found, including bags, cars and the shed.
                2. Out-of-date and unused medicines returned to a pharmacy for disposal.
                3. The rest kept in a lockable box with a key or code only adults hold.
                4. Razor blades, craft knives and similar items reduced and stored away.
                5. Your teen's clinician asked whether anything else in the home needs attention.

                ## Notes
                Do this calmly and without a speech. Many families simply say they are tidying the medicines, which keeps it from feeling like a search of the teen's life.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All medicines in the home are in a locked box or returned to a pharmacy, and blades are stored where only adults can reach them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather every medicine from bathrooms, bags, cars and drawers"
                - "Take unused and out-of-date medicines to a pharmacy for disposal"
                - "Buy a lockable medicine box and keep the key or code with adults"
                - "Check the medicine box is locked and nothing has crept back out @recurring(monthly:2)"
            - name: Opening conversation about how they are really doing
              description: |-
                ## Purpose
                Teenagers often wait for a parent to raise it, then deny everything when asked head-on across the kitchen table. Planning one calm conversation, side by side in the car or on a walk, opening with what you have noticed rather than what you think is wrong, makes it far more likely they will say something true.

                ## Milestones
                1. Two or three specific, kindly worded observations chosen to open with.
                2. A low-pressure setting and time picked, away from siblings and screens.
                3. The conversation held, with more listening than talking.
                4. What your teen said, and anything they asked you not to do, written down afterwards.
                5. A next step agreed, even if it is only talking again on a set day.

                ## Notes
                If they shut down, end it warmly and tell them the door stays open. A first attempt that goes nowhere still tells them you have noticed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One calm conversation has taken place, with notes on what your teen said and an agreed next step."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down two specific things you have noticed, in neutral words"
                - "Pick a car ride or walk this week for the conversation"
                - "Hold the conversation and let silences run longer than feels comfortable"
                - "Note what they said and the next step you agreed"
            - name: First appointment with the family doctor
              description: |-
                ## Purpose
                The family doctor is usually the route to specialist mental health services, and a ten-minute slot goes quickly. Going in with a one-page summary, your teen's own words where possible, and clear questions about referral, school letters and what to do while waiting turns a rushed chat into a plan.

                ## Milestones
                1. An appointment booked, with your teen's view on whether you join them for all of it, some of it or none.
                2. A one-page summary of changes, dates, sleep, eating and any self-harm or risk.
                3. Questions on referral routes, waiting times and support in the meantime written down.
                4. The outcome recorded: referral made, follow-up date and anything to do while waiting.

                ## Notes
                Many teenagers want part of the appointment alone with the doctor. Agreeing this beforehand avoids an awkward moment in the room.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A doctor's appointment has taken place with a written summary, and the outcome, referral status and follow-up date are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your teen whether they want you in the room for the appointment"
                - "Book the appointment and ask for a longer slot if the practice offers one"
                - "Ask the agent to turn your notes into a one-page summary for the doctor"
                - "Record the outcome, any referral made and the follow-up date"
            - name: School pastoral team contacts and wellbeing offer
              description: |-
                ## Purpose
                Schools see your teenager for more waking hours than you do in term time, and most have a pastoral lead, a counsellor or a mental health practitioner your teen may never have heard of. Finding out who they are and what the school offers, without yet sharing anything your teen has not agreed to, means you know the options before you need them.

                ## Milestones
                1. Names and email addresses of the form tutor, head of year, pastoral or wellbeing lead and safeguarding lead.
                2. The school's counselling, mentoring or in-school mental health support described in a few lines.
                3. How to reach someone urgently during the school day written down.
                4. What your teen is comfortable with the school knowing agreed with them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A contact list of the school's pastoral staff and a short description of its wellbeing support are saved, with your teen's view on sharing recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the school's pastoral and safeguarding staff in its handbook or website"
                - "Email the pastoral lead to ask what wellbeing support the school offers"
                - "Ask how to reach someone urgently during the school day"
                - "Check with your teen what they are happy for school to know"
            - name: Privacy and information-sharing agreement with your teen
              description: |-
                ## Purpose
                Fear that every word will reach school, grandparents or the family group chat is one of the main reasons teenagers stop talking. Agreeing early who gets told what, along with the one exception where you will always act, which is when their safety is at risk, protects their trust while keeping you able to get help.

                ## Milestones
                1. A list of people who might need to know: other parent, siblings, school, relatives, coaches.
                2. Your teen's preference recorded for each of them.
                3. The safety exception explained and accepted, even reluctantly.
                4. The agreement revisited whenever something changes, such as a new referral or a crisis.

                ## Notes
                Clinicians usually explain confidentiality to young people in a similar way, so your rule will match what they hear in therapy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A short written agreement lists who is told what about your teen's mental health, including the safety exception, and your teen has seen it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List everyone who might reasonably ask how your teen is"
                - "Ask your teen what each person can and cannot be told"
                - "Explain plainly that you will always act if their safety is at risk"
                - "Write the agreement down and keep it where both of you can see it"
            - name: Mental health records folder
              description: |-
                ## Purpose
                Referral letters, assessment reports, medicine changes and school emails arrive from five directions over months, and services rarely talk to each other well. One folder, paper or digital, with a running timeline at the front, lets you answer any professional's question in seconds and spot when a promised letter never came.

                ## Milestones
                1. One folder set up with sections for health, school, medicines and correspondence.
                2. A dated timeline at the front, starting from the first changes you noticed.
                3. Every letter, report and key email filed and named by date.
                4. Reference numbers and each service's named contact listed on one page.

                ## Notes
                Keep it somewhere your teen will not stumble on by accident, and ask whether they want to see it. Older teens often do.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single folder holds every letter and report in date order, with a timeline and a page of reference numbers and contacts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a folder with health, school, medicines and correspondence sections"
                - "Write a dated timeline from the first change you noticed"
                - "File every letter and email you already have in date order"
                - "List each service's reference number and named contact on one page"
            - name: One shared approach between the adults at home
              description: |-
                ## Purpose
                Two parents who respond differently to a teen who will not get out of bed, one coaxing and one insisting, end up arguing with each other while the teen gets mixed messages. Agreeing a small set of shared responses, and who leads on appointments and school, cuts conflict at home when everyone is already stretched.

                ## Milestones
                1. The situations that cause most disagreement listed: mornings, missed school, phones at night, disclosures of self-harm.
                2. An agreed response for each, written in a sentence.
                3. One adult named as lead contact for health services and one for school, or one for both.
                4. A short weekly catch-up between the adults agreed.

                ## Notes
                Where parents live apart, the project on coordinating support across two homes covers the extra steps.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written shared responses exist for the four most contested situations, with a named lead for health services and for school."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the moments you and the other adult handle differently"
                - "Agree one shared response for each and write it down"
                - "Decide who is lead contact for health services and for school"
                - "Set a fixed time each week for a ten-minute catch-up between you"
            - name: Weekly mood check-in on a one to ten scale
              description: |-
                ## Purpose
                Asking how they are gets 'fine'. Asking for a number from one to ten, at the same time each week, is easier for many teenagers to answer and builds a trend you can bring to appointments, so a sudden drop or a run of low weeks gets noticed in days rather than months.

                ## Milestones
                1. A simple scale agreed with your teen, including what a low number means to them.
                2. A weekly time chosen that suits them, often in the car or before a favourite programme.
                3. Scores recorded for at least eight weeks.
                4. A drop of two or more points, or three low weeks in a row, agreed as the trigger to talk or seek advice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly mood scores are recorded for eight consecutive weeks, with an agreed trigger for action written down."
                cadence: rolling
              tasks:
                - "Agree the scale and what low scores mean with your teen"
                - "Ask for this week's mood score and note it without comment @recurring(weekly:sun)"
                - "Bring the last eight weeks of scores to the next appointment"
            - name: Parent observation log for sleep, food and mood
              description: |-
                ## Purpose
                Clinicians ask about sleep, eating, school attendance and incidents, and memory blurs the weeks together. A short weekly entry in your own log, a few lines on what you saw rather than what you guessed, gives you evidence for referrals and shows whether a new treatment is changing anything.

                ## Milestones
                1. A log with columns for sleep, eating, school, mood score and incidents.
                2. An entry made every week for three months.
                3. Patterns marked, such as Sunday nights or after time with certain friends.
                4. A one-paragraph summary prepared before each appointment.

                ## Notes
                Start from the **Metrics log** template. Keep it factual and private: this is your record, not a case against your teen.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly entries exist in the log, with a summary paragraph prepared before the latest appointment."
                cadence: rolling
              tasks:
                - "Set up a log with sleep, food, school, mood and incident columns"
                - "Write this week's entry from what you actually saw @recurring(weekly:wed)"
                - "Mark any pattern you notice across the last month"
                - "Summarise the log in a paragraph before each appointment"
            - name: Referral and waiting list follow-up routine
              description: |-
                ## Purpose
                Specialist child and adolescent mental health services in many countries have waits of months, and referrals get lost, bounced back for missing information or left without an update. A monthly call or email, logged with date and name, keeps your teen visible on the list and is often how families learn about support offered while waiting.

                ## Milestones
                1. The referral's date, reference number and receiving service confirmed in writing.
                2. A monthly contact made and logged with name, date and what was said.
                3. Any worsening reported promptly to the service and the family doctor.
                4. Support offered while waiting, such as groups or online programmes, taken up or declined on purpose.

                ## Notes
                If things get worse while you wait, tell the service and the doctor in writing. Waiting lists are often reprioritised on new information.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every month since the referral has a logged contact with the service, and your teen's current position on the list is known."
                cadence: rolling
              tasks:
                - "Call the service to confirm the referral arrived and get a reference number"
                - "Chase the referral and log the name, date and answer @recurring(monthly:5)"
                - "Ask what support is available while you wait"
                - "Write to the service and the doctor whenever things get worse"
            - name: Therapy appointment logistics and school absence notes
              description: |-
                ## Purpose
                Weekly therapy often lands in school hours, across town, for months, and missed sessions can end a course of treatment early. Settling transport, school sign-out, absence notes and a backup driver keeps attendance high without your teen having to explain themselves at reception.

                ## Milestones
                1. Session days and times in the family calendar for the whole course.
                2. School told in writing, with an agreed way for your teen to leave quietly.
                3. Transport arranged for every session, with a named backup driver.
                4. Missed or cancelled sessions logged with the reason.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every scheduled session in the current course is in the calendar with transport arranged, and school has the dates in writing."
                cadence: rolling
              tasks:
                - "Add every session in the course to the family calendar"
                - "Email the school the dates and ask how your teen can leave discreetly"
                - "Name a backup driver for sessions you cannot cover"
                - "Confirm next month's session dates with school and the backup driver @recurring(monthly:20)"
            - name: Medicine supply and repeat prescription routine
              description: |-
                ## Purpose
                Running out of an antidepressant or anxiety medicine, or missing doses for days, can bring symptoms back and cause unpleasant stopping effects. A simple system for who holds the medicine, how it is taken and when the repeat is ordered keeps treatment steady, and agreeing it with your teen stops it becoming a nightly battle.

                ## Milestones
                1. The prescriber's instructions written down, including what to do about a missed dose.
                2. An agreed arrangement for who keeps the medicine and how much is within reach at once.
                3. The repeat prescription ordered at least a week before it runs out.
                4. Side effects and missed doses noted for the next review.

                ## Notes
                Ask the prescriber or pharmacist how much medicine should be within your teen's reach. During a risky period many families hold the supply and hand it over a day at a time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The medicine has not run out in three months, each repeat was ordered a week ahead, and missed doses are recorded."
                cadence: rolling
              tasks:
                - "Write down the prescriber's instructions, including missed doses"
                - "Agree with your teen who holds the medicine and how it is handed over"
                - "Check the remaining supply and order the repeat prescription @recurring(monthly:12)"
                - "Note side effects and missed doses for the next medication review"
            - name: Monthly update with the school wellbeing lead
              description: |-
                ## Purpose
                Teachers notice things parents never see: lunchtimes alone, a sudden drop in work, a trip to the toilets in every lesson. A short monthly exchange with one named person at school, agreed with your teen, joins up the picture and means a problem is raised in days rather than at the next parents' evening.

                ## Milestones
                1. One named member of staff agreed as the main contact.
                2. A monthly email or call in place for at least one term.
                3. Agreed adjustments checked to see whether they are actually happening in lessons.
                4. A note of each update filed in the records folder.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly update with the same named staff member has happened for a full term, each one noted in the records folder."
                cadence: rolling
              tasks:
                - "Agree with your teen which member of staff should be the main contact"
                - "Email the wellbeing lead for this month's update @recurring(monthly:18)"
                - "Ask whether each agreed adjustment is happening in lessons"
                - "File a note of each update in the records folder"
            - name: Daylight, movement and regular meals basics
              description: |-
                ## Purpose
                Low mood and anxiety both pull teenagers towards later nights, skipped meals and days indoors, which then make the mood worse. Rebuilding three basics, some daylight each morning, some movement most days and meals at roughly regular times, is not a treatment on its own but supports whatever treatment is under way, and it is something families can actually influence.

                ## Milestones
                1. One small daylight habit agreed, such as walking to the bus or breakfast by a window.
                2. One form of movement chosen by your teen, not by you.
                3. Breakfast or lunch eaten most days, tracked loosely for a month.
                4. A weekly look at what stuck and what to drop.

                ## Notes
                Start from the **Habit tracker** template. Small and kept beats ambitious and abandoned.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four weeks running your teen has had daylight and movement on most days and regular meals, logged in a simple tracker."
                cadence: rolling
              tasks:
                - "Ask your teen to pick one form of movement they would not hate"
                - "Agree one daylight habit for school mornings"
                - "Set up a habit tracker with three rows only"
                - "Review the week's tracker together and drop anything not working @recurring(weekly:sat)"
            - name: Quarterly review of what is helping
              description: |-
                ## Purpose
                Months of appointments, adjustments and changes at home pile up, and it becomes hard to say which ones matter. A short review every three months, using the mood scores, the log and your teen's own view, lets the family keep what works, drop what does not and go back to professionals with specific questions.

                ## Milestones
                1. Mood scores and log entries for the quarter set side by side.
                2. Your teen's view of what helps and what does not recorded.
                3. Two things to keep, one to stop and one to try agreed.
                4. Questions for professionals listed for the next appointment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated quarterly review note lists what to keep, stop and try, with your teen's view included."
                cadence: cyclic
              tasks:
                - "Gather the last three months of mood scores and log entries"
                - "Hold the review and agree what to keep, stop and try @recurring(quarterly)"
                - "Ask your teen what has helped most and what has felt pointless"
                - "List the questions the review raised for the next appointment"
            - name: Protected time to recharge as the parent
              description: |-
                ## Purpose
                Parents of a struggling teenager often end up exhausted, sleeping badly and anxious themselves, and a depleted parent has less patience for exactly the slow, calm work that helps. Protecting a weekly slot for yourself and a regular source of support is part of the care plan, not a luxury.

                ## Milestones
                1. One weekly slot of at least two hours that is yours, with cover arranged.
                2. One person outside the household you can talk to honestly.
                3. A parent support group, helpline or counsellor for yourself identified.
                4. Your own doctor told if your sleep or mood is suffering.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A protected weekly slot has happened for six weeks running and you have a named support person or group for yourself."
                cadence: rolling
              tasks:
                - "Choose a weekly slot and arrange who covers it"
                - "Take your protected time and do something unrelated to worry @recurring(weekly:thu)"
                - "Find a support group or helpline for parents of young people with mental health problems"
                - "Call or meet your named support person @recurring(monthly:26)"
            - name: Asking directly about suicidal thoughts
              description: |-
                ## Purpose
                Many parents fear that mentioning suicide might put the idea in a teenager's head, yet research consistently shows that asking directly does not raise risk and often brings relief. Learning to ask a plain question, and to stay steady whatever the answer, is the most important conversation skill in this area.

                ## Milestones
                1. Guidance from a suicide prevention charity on asking about suicide read.
                2. A plain question in your own words practised aloud, such as asking whether they have had thoughts of ending their life.
                3. What to do next for each kind of answer written on one page, including when to call for urgent help.
                4. The page kept with the crisis card.

                ## Notes
                If your teen says yes and has a plan or intent, do not leave them alone and contact emergency services or a crisis line straight away. Thoughts without a plan still need a conversation with their doctor or clinician that week.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have practised a direct question about suicidal thoughts aloud and have a one-page next-steps sheet stored with the crisis card."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a suicide prevention charity's guide to asking about suicide"
                - "Practise your question aloud until it sounds like you"
                - "Write a one-page next-steps sheet for each kind of answer"
                - "Store the sheet with the crisis card"
            - name: Responding calmly to self-harm
              description: |-
                ## Purpose
                Discovering cuts, burns or scratches is frightening, and the first reaction often decides whether a teenager hides it next time. Knowing in advance how to check whether an injury needs treatment, how to talk without anger or interrogation, and who to tell, lets you respond in a way that keeps them talking to you.

                ## Milestones
                1. A reputable guide for parents on self-harm read.
                2. A short first-response script: stay calm, check injuries, acknowledge the pain behind it.
                3. First aid supplies kept in an agreed place, with a note of which injuries need a doctor.
                4. The family doctor or clinician told within days of any discovery.

                ## Notes
                Self-harm is often a way of coping with overwhelming feelings rather than a suicide attempt, but it always deserves professional advice. Banning it outright tends to push it out of sight.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have a written first-response script, a stocked first aid kit and an agreed plan for telling a professional within days of any discovery."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a parent's guide to self-harm from a young people's mental health charity"
                - "Write a three-line first-response script in your own words"
                - "Put together a first aid kit and note which injuries need a doctor"
                - "Agree with the other adults who tells the clinician after any discovery"
            - name: Talking therapies for teenagers explained
              description: |-
                ## Purpose
                Clinicians and referral letters use terms like CBT, DBT, interpersonal therapy and family therapy as if everyone knows them. Understanding what each involves, how many sessions are typical and what parents are asked to do between sessions helps you ask sharper questions and back up the work at home.

                ## Milestones
                1. A one-paragraph note on each of four therapies commonly used with teenagers.
                2. The parent's role in each, from none to central, written down.
                3. Questions to ask a therapist about approach and progress listed.
                4. The therapy your teen is offered matched against the notes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written guide to four common teenage therapies, including the parent's role in each, is in the records folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read plain-language descriptions of CBT, DBT, IPT and family therapy on a health service site"
                - "Note how many sessions and how much parent involvement each usually needs"
                - "List five questions to ask any therapist about their approach"
                - "Ask the agent to condense your notes into a one-page guide"
            - name: Cutting back reassurance for an anxious teen
              description: |-
                ## Purpose
                Anxious teenagers often ask the same worried questions many times a day, or need a parent to make calls, sit in on situations or change plans, and parents understandably give in. Parent-led programmes such as SPACE show that gradually and kindly reducing this accommodation, while voicing confidence that your teen can cope, can lower anxiety even when the teen is not in therapy.

                ## Milestones
                1. Every accommodation you currently make listed, from repeated reassurance to driving them everywhere.
                2. One target accommodation chosen to reduce first.
                3. A supportive statement written that names the change and your confidence in them.
                4. Two weeks of the reduced accommodation held calmly, with notes on how it went.

                ## Notes
                If your teen is in treatment, talk to their clinician before starting so the plan fits theirs. Change one thing at a time.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A written list of accommodations exists and at least one has been reduced and held for two weeks, with notes kept."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every way the family adjusts to your teen's anxiety in a typical week"
                - "Read about a parent-led anxiety programme such as SPACE"
                - "Pick one accommodation to reduce and write a supportive statement about it"
                - "Count how often reassurance was asked for and given this week @recurring(weekly:fri)"
            - name: Supporting graded exposure practice at home
              description: |-
                ## Purpose
                Exposure, facing feared situations in small steps, sits at the core of most effective treatment for teenage anxiety, and the progress happens between sessions rather than in them. A parent who knows the step ladder the therapist set, and helps with practice twice a week without pushing or rescuing, makes sure the practice actually happens.

                ## Milestones
                1. The current step ladder agreed with the therapist written down at home.
                2. Two practice slots a week in the family calendar.
                3. Your role in each practice agreed: lift, company or staying out of it.
                4. Progress up the ladder logged and shared at the next session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two exposure practices a week have happened for four weeks, logged against the therapist's step ladder."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the therapist for a copy of the current step ladder"
                - "Agree with your teen what your role is during practice"
                - "Support this week's exposure practice without rescuing @recurring(weekly:mon,thu)"
                - "Bring the practice log to the next therapy session"
            - name: Youth mental health first aid course for parents
              description: |-
                ## Purpose
                A youth mental health first aid course, usually two days or several evenings, teaches how to spot, approach and support a young person in distress and how to act in a crisis. It gives you practice in a room with other adults, which a leaflet cannot, plus a certificate some schools and clubs value if you volunteer.

                ## Milestones
                1. A youth-focused mental health first aid course found, with dates and cost.
                2. The course booked, with time off or childcare arranged.
                3. The course completed and your notes filed.
                4. Two things you will do differently at home written down.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A youth mental health first aid course has been completed, with a certificate and two written changes to how you respond at home."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Search for youth mental health first aid courses near you or online"
                - "Book a course and arrange cover for the sessions"
                - "Complete the course and file the handbook in your records folder"
                - "Write down two things you will do differently at home"
            - name: Eating disorder warning signs and first steps
              description: |-
                ## Purpose
                Eating disorders often begin in the teenage years and progress fastest when they go unrecognised, and early treatment makes a large difference to recovery. Knowing the signs, such as skipped meals, new food rules, hidden eating, excessive exercise or weight change, and that they affect teenagers of any gender and body size, helps you seek advice quickly.

                ## Milestones
                1. Warning signs read from an eating disorder charity.
                2. Anything you have seen noted with dates.
                3. Questions for the family doctor written, including whether a physical check is needed.
                4. An appointment booked promptly if signs are present.

                ## Notes
                Eating disorders can be physically dangerous even when weight looks normal. Ask for a doctor's appointment rather than waiting to see if it passes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have read eating disorder warning signs, recorded any you have seen with dates, and booked a doctor's appointment if any are present."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the warning signs page of an eating disorder charity"
                - "Note any changes in eating, exercise or weight with dates"
                - "Write questions for the doctor about physical checks"
                - "Book an appointment straight away if any signs are present"
            - name: Building your teen's own coping toolkit
              description: |-
                ## Purpose
                When distress hits, a teenager needs something they can do in the next five minutes without asking anyone. A toolkit they put together themselves, with breathing and grounding techniques, a playlist, people to message and things to hold or do, kept on their phone and in a box, gives them options other than shutting down or hurting themselves.

                ## Milestones
                1. Three or four grounding or breathing techniques your teen has tried and likes.
                2. A list of distractions and soothing activities in their own words.
                3. Two or three people they would message, each of whom has agreed to be on the list.
                4. The toolkit saved on their phone and a physical version kept in their room.

                ## Notes
                Offer ideas but let them choose; a toolkit written by a parent tends to stay in a drawer. For panic attacks, many teenagers find slow breathing and naming five things they can see helps, so practise while calm rather than mid-panic.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your teen has a toolkit of at least six coping options they chose, saved on their phone and kept in a physical box."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Show your teen two grounding techniques to try while calm"
                - "Help them list distractions and soothing things in their own words"
                - "Ask the people on their message list whether they are happy to be on it"
                - "Help them make a phone note and a small box version of the toolkit"
            - name: Public, school and private support options compared
              description: |-
                ## Purpose
                Families often have several routes open at once: specialist public services with a long wait, school counselling, charity services, online programmes and private therapy. Comparing them on wait, cost, qualifications, approach and how they share information lets you choose a combination rather than waiting for the one route everyone talks about.

                ## Milestones
                1. Every available route listed, including charities and online services.
                2. Each scored on wait, cost, qualifications, approach and information sharing.
                3. A decision on what to use now and what to keep waiting for.
                4. The family doctor told about any private or charity support taken up.

                ## Notes
                Taking up private or charity therapy does not usually remove your teen from a public waiting list, but ask each service to confirm this in writing.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least four support routes exists, with a recorded decision on which to use now."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every support route available locally and online"
                - "Score each route on wait, cost, qualifications, approach and sharing"
                - "Ask the public service whether private support affects your teen's place"
                - "Record which routes you are using and why"
            - name: Vetting a private therapist or counsellor
              description: |-
                ## Purpose
                Titles like therapist and counsellor are unprotected in many countries, so anyone can use them. Checking registration with a recognised professional body, specific experience with adolescents and the problem your teen faces, and how risk and confidentiality are handled protects your teen and your money.

                ## Milestones
                1. Two or three therapists shortlisted, each registered with a recognised professional body.
                2. Each asked about adolescent experience, approach, risk policy and fees.
                3. Your teen's view after a first session or call recorded.
                4. One therapist chosen, with session fee and cancellation terms written down.

                ## Notes
                Start from the **Purchase decision** template. The relationship with the therapist matters as much as the method, so your teen's view counts heavily.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A therapist registered with a recognised professional body has been chosen, with your teen's view, fees and cancellation terms recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search a professional body's register for therapists who see teenagers"
                - "Shortlist three and check each registration number"
                - "Ask each about risk, confidentiality and contact with parents"
                - "Let your teen meet or call the top choice before committing"
            - name: Questions to ask before agreeing to medication
              description: |-
                ## Purpose
                When a prescriber suggests medicine for a teenager's depression or anxiety, families are often asked to decide in a single appointment. Going in with written questions about expected benefits, common side effects, warnings for young people, monitoring and how long to try it means the decision is informed and the follow-up is clear.

                ## Milestones
                1. A list of questions prepared with your teen's input.
                2. Answers recorded during or straight after the appointment.
                3. The decision made with your teen, including if the answer is not yet.
                4. The follow-up appointment and the changes to report quickly written down.

                ## Notes
                Some antidepressants carry specific warnings for young people in the first weeks, which is why prescribers ask for close follow-up. Ask what to watch for and who to call.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written set of questions has been answered by the prescriber, and the decision, follow-up date and changes to report are recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write questions about benefits, side effects, monitoring and duration"
                - "Ask your teen what they want to know and add it to the list"
                - "Record the answers straight after the appointment"
                - "Write down the follow-up date and which changes to report quickly"
            - name: Phased return plan for a teen avoiding school
              description: |-
                ## Purpose
                Anxiety-based school avoidance tends to get harder to reverse the longer it runs, while forcing a panicking teenager through the gate rarely works either. A written phased plan agreed with school and, where involved, the clinician, built from small steps such as one lesson, a quiet base and a key adult, gives a route back that everyone can follow.

                ## Milestones
                1. A meeting held with school to agree the plan and a named key adult.
                2. Steps written down from current attendance to full timetable, with review points.
                3. An arrival routine and a safe space in school confirmed.
                4. Attendance tracked weekly against the plan.
                5. The plan reviewed and adjusted at least every three weeks.

                ## Notes
                Ask whether the school or education authority has an attendance support team for emotionally based school avoidance. Absences backed by a clear plan are treated differently from unexplained ones in many systems.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written phased return plan is agreed with school, with steps, a key adult and review dates, and attendance is tracked against it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Request a meeting with the head of year and pastoral lead about attendance"
                - "Draft the first three steps of the return with your teen"
                - "Agree a key adult and a quiet base your teen can go to"
                - "Log attendance against the plan at the end of each week"
            - name: School wellbeing support plan with agreed adjustments
              description: |-
                ## Purpose
                Small adjustments, such as a pass to leave lessons, a seat near the door, a quiet lunch space or lighter homework for a period, make school bearable for many anxious or low teenagers. Getting them into a written plan shared with every teacher stops your teen having to explain themselves in each lesson.

                ## Milestones
                1. The adjustments your teen actually wants listed in their words.
                2. A meeting held with school to agree which are possible.
                3. A written plan shared with all subject teachers.
                4. A review date set for the end of the half term.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written school support plan listing agreed adjustments has been shared with every subject teacher and has a review date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your teen which three changes at school would help most"
                - "Request a meeting to agree adjustments with the pastoral lead"
                - "Ask for the plan in writing and confirm every teacher has it"
                - "Put the plan's review date in the family calendar"
            - name: Easing the load during a low patch
              description: |-
                ## Purpose
                Clubs, a part-time job, music grades and sport can be lifelines or pressure points, and a teen in a low patch may not be able to say which. Going through every commitment together, keeping what gives energy or connection and pausing what drains, protects the things that help without abandoning them for good.

                ## Milestones
                1. Every weekly commitment listed with its hours.
                2. Each one rated by your teen for energy given and energy taken.
                3. Draining commitments paused, with coaches or employers told only what your teen agrees.
                4. A date set to revisit the paused ones.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of commitments rated by your teen exists, with a decision on each and a date to revisit the paused ones."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every weekly commitment and the hours each takes"
                - "Ask your teen to rate each for energy given and energy taken"
                - "Agree which to pause and what to tell coaches or employers"
                - "Set a date in two months to revisit the paused commitments"
            - name: What to tell relatives and family friends
              description: |-
                ## Purpose
                Grandparents ask why your teen missed the family lunch, aunts send articles and well-meaning friends offer opinions. Deciding with your teen on a short, true holding line, and who gets more detail, saves you from improvising and protects their privacy.

                ## Milestones
                1. A one-sentence holding line agreed with your teen.
                2. A short list of relatives who will be told more, with your teen's consent.
                3. Specific ways relatives can help, such as lifts or a standing invitation, written down.
                4. A polite reply ready for unwanted advice.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agreed holding line and a list of who knows more exist, with at least one practical way relatives can help."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a one-sentence holding line with your teen"
                - "Decide with your teen which relatives get more detail"
                - "List practical things relatives could do that would actually help"
                - "Prepare a polite reply for unwanted advice"
            - name: Written safety plan made with your teen and their clinician
              description: |-
                ## Purpose
                A safety plan is a short document, usually made with a clinician, listing your teen's warning signs, what they can do alone, who they can contact and how to make their surroundings safer. Having it written down, shared with the adults who need it and kept on their phone gives everyone the same steps when things get bad.

                ## Milestones
                1. A safety plan written with your teen and a clinician or crisis worker.
                2. Copies held by your teen, each parent and, if agreed, the school.
                3. Your part in the plan understood by every adult at home.
                4. The plan reviewed monthly and after any crisis.

                ## Notes
                If no clinician is involved yet, suicide prevention charities publish safety plan templates and helplines can talk you through one. Then book an appointment to go over it with a professional.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written safety plan made with a clinician exists, copies are held by your teen and each parent, and it was reviewed within the last month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your teen's clinician or crisis team to make a safety plan with them"
                - "Agree who holds a copy, including whether the school does"
                - "Walk through each adult's part in the plan together"
                - "Review the safety plan with your teen @recurring(monthly:24)"
            - name: Preparing for the specialist assessment appointment
              description: |-
                ## Purpose
                The first assessment with a specialist mental health team can last one to two hours, may include time with your teen alone, and shapes what treatment is offered. Preparing your summary, records and questions, and talking your teen through what will happen, makes the most of an appointment you may have waited months for.

                ## Milestones
                1. The appointment confirmed, with time off and transport arranged.
                2. Your timeline, log summary and school information printed.
                3. Your teen briefed on what the assessment involves and what they want to say.
                4. Questions on diagnosis, treatment options and waiting times written down.
                5. The outcome and next steps recorded within a day.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The assessment has taken place with your summary and questions in hand, and its outcome and next steps are written in the records folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the appointment and arrange time off and transport"
                - "Print the timeline, log summary and school information"
                - "Talk your teen through what the assessment will involve"
                - "Write up the outcome and next steps the same day"
            - name: Care plan review meetings
              description: |-
                ## Purpose
                Once treatment starts, services usually hold reviews to check progress and decide whether to continue, change or close the case. Parents who arrive with a summary of the period, the school's view and their teen's own goals are far more likely to get a change when something is not working, and a gradual ending rather than an abrupt discharge.

                ## Milestones
                1. Review dates in the calendar as soon as they are offered.
                2. A one-page update prepared before each review.
                3. Your teen's goals and views brought, in their words or by them.
                4. Decisions and actions recorded with who is responsible for each.

                ## Notes
                Start from the **Meeting notes** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every review meeting this year had a one-page update prepared beforehand and written actions with owners afterwards."
                cadence: cyclic
              tasks:
                - "Ask the service when the next review is due"
                - "Prepare a one-page update from the log and school notes"
                - "Ask your teen what they want from the review"
                - "Record decisions and who is doing what after each review"
            - name: Return to school after a crisis or hospital stay
              description: |-
                ## Purpose
                Going back after a crisis, an overdose, a hospital admission or weeks at home is a high-stress moment, and questions from classmates can be the hardest part. Planning the first days with school, including a reduced timetable if needed, an explanation your teen chooses and a check-in at the end of each day, makes the return more likely to hold.

                ## Milestones
                1. A return meeting held with school and, where possible, the clinician.
                2. A reduced timetable or phased start agreed if needed.
                3. Your teen's chosen answer to classmates' questions practised.
                4. End-of-day check-ins in place for the first two weeks.
                5. The safety plan shared with the named school contact if your teen agrees.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A return plan agreed with school was in place before the first day back, and daily check-ins were held for two weeks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Request a return meeting with school before the first day back"
                - "Agree a start date and timetable for the first fortnight"
                - "Help your teen choose and practise what to say to classmates"
                - "Check in with your teen at the end of each school day for two weeks"
            - name: Difficult dates and anniversaries plan
              description: |-
                ## Purpose
                Anniversaries of a death, a break-up, an attack or a previous crisis, along with results days, birthdays and the run-up to winter holidays, can bring a dip that catches families off guard. Marking these dates and agreeing in advance how the day will look gives your teen some control and gives you a natural reason to check in.

                ## Milestones
                1. A list of dates that are hard for your teen, agreed with them.
                2. A simple plan for each: what to do, who to be with, what to avoid.
                3. Calendar reminders set a week before each date.
                4. Notes after each date on what helped.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "Every hard date this year is in the calendar with a reminder and a short agreed plan, and notes were kept after each one."
                cadence: cyclic
              tasks:
                - "Ask your teen which dates in the year feel hardest"
                - "Agree a simple plan for the next hard date"
                - "Set calendar reminders a week before each date"
                - "Review the year's hard dates and plans together @recurring(yearly)"
            - name: Moving from child to adult mental health services
              description: |-
                ## Purpose
                Child and adolescent services usually end at 17 or 18, and the move to adult services is a known point where young people drop out of care. Starting six months ahead, with a transition meeting, a named contact in the adult service and clarity on your role once your teen is an adult, protects continuity.

                ## Milestones
                1. The age and process for transfer confirmed with the current team.
                2. A transition meeting held with both services where possible.
                3. Your teen's wishes on your involvement as an adult written down, with consent forms if needed.
                4. The first adult-service appointment booked before discharge from children's services.

                ## Notes
                Once your teen is an adult, services usually need their consent to share information with you. Ask about consent forms well before the birthday.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first appointment with adult services was booked before children's services discharged your teen, with consent arrangements recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the current team at what age and how the transfer happens"
                - "Request a joint transition meeting six months before the date"
                - "Ask your teen how involved they want you to be once they are an adult"
                - "Confirm the first adult-service appointment before discharge"
            - name: Coordinating mental health support across two homes
              description: |-
                ## Purpose
                Parents who live apart can each miss warning signs because each home sees only half the week, and treatment can stall if one parent backs it and the other does not. Agreeing what is shared and how quickly, and keeping the safety plan, medicines and crisis card consistent in both homes, keeps your teen safe wherever they are sleeping.

                ## Milestones
                1. Both parents agreed on what is shared and how fast, especially incidents and risk.
                2. The safety plan, crisis card and medicine arrangements the same in both homes.
                3. Both parents on the contact list for school and services, where legally appropriate.
                4. A monthly update between parents in a format that avoids conflict.

                ## Notes
                If talking directly is difficult, a co-parenting app or a written monthly update keeps information flowing without arguments.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Both homes hold the same safety plan and crisis card, and a monthly update between parents has happened for three months running."
                cadence: rolling
              tasks:
                - "Agree with the other parent what gets shared within a day"
                - "Check both homes have the safety plan, crisis card and locked medicine box"
                - "Ask school and services to list both parents as contacts where appropriate"
                - "Send the other parent a written monthly update @recurring(monthly:8)"
            - name: Juggling work with a struggling teen's care
              description: |-
                ## Purpose
                Appointments in office hours, calls from school and nights when you cannot leave your teen alone collide with work for months. Knowing your rights to emergency dependant leave, carer's leave and flexible working, and deciding how much to tell your manager, lets you plan instead of burning holiday or calling in sick.

                ## Milestones
                1. Your employer's policies on dependant leave, carer's leave and flexible working read.
                2. A decision on what to tell your manager and HR.
                3. A flexible arrangement requested if needed, such as home working on appointment days.
                4. Your employee assistance programme checked for family counselling.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "You have read your employer's leave policies and either agreed a working arrangement with your manager or recorded why not."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your employer's policies on dependant, carer's and flexible leave"
                - "Decide what you are comfortable telling your manager"
                - "Request any flexible arrangement you need in writing"
                - "Check whether your employee assistance programme offers family counselling"
            - name: Looking after siblings while one child struggles
              description: |-
                ## Purpose
                Brothers and sisters of a teen in crisis often go quiet, feel invisible or worry they caused it, and some have witnessed frightening moments. Giving each an age-right explanation, protected one-to-one time and someone to talk to stops a second child's needs being missed.

                ## Milestones
                1. Each sibling given a short, honest explanation suited to their age.
                2. One-to-one time with each sibling in the calendar every month.
                3. Their school told if they seem affected, with the struggling teen's privacy kept.
                4. A sibling support service or young carers group checked where relevant.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each sibling has had an age-right explanation and a monthly one-to-one slot for three months in a row."
                cadence: rolling
              tasks:
                - "Plan an age-right explanation for each sibling"
                - "Spend one-to-one time with each sibling this month @recurring(monthly:15)"
                - "Ask each sibling whether they have questions or worries"
                - "Check whether a young carers or sibling support group runs near you"
            - name: Grief and low mood after a death in the family
              description: |-
                ## Purpose
                Teenagers grieve in bursts, can seem fine for months and then struggle, and grief can tip into depression or anxiety. Knowing the difference between grief and something that needs more help, and linking your teen with a bereavement service for young people, means support is ready when a delayed reaction comes.

                ## Milestones
                1. A guide to teenage grief from a bereavement charity read.
                2. A young people's bereavement service identified and offered to your teen.
                3. School told about the death and the key dates.
                4. The signs that grief has turned into something needing a doctor written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A bereavement service has been offered to your teen, school knows the key dates, and you have written the signs that would prompt a doctor's appointment."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a bereavement charity's guide to how teenagers grieve"
                - "Find a young people's bereavement service and share it with your teen"
                - "Tell school about the death and the dates likely to be hard"
                - "Write down the signs that would make you book a doctor's appointment"
            - name: Anxiety and low mood in an autistic or ADHD teen
              description: |-
                ## Purpose
                Autistic and ADHD teenagers have much higher rates of anxiety and depression, and standard approaches often need adapting, since distress may show as shutdowns, meltdowns or sensory overload rather than words. Making sure clinicians know about the diagnosis, and asking for adapted therapy, improves the chance that treatment fits.

                ## Milestones
                1. Your teen's diagnosis and communication needs summarised on one page for clinicians.
                2. How anxiety or low mood shows in your teen, as distinct from their usual patterns, written down.
                3. Adapted therapy discussed with the treating team.
                4. Sensory and routine needs built into the safety plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of your teen's diagnosis and needs has been given to the treating team, and adapted therapy has been discussed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page profile of your teen's diagnosis and communication needs"
                - "List how anxiety or low mood shows in your teen specifically"
                - "Ask the treating team whether therapy can be adapted for autism or ADHD"
                - "Add sensory and routine needs to the safety plan"
            - name: Trauma reactions after a frightening event
              description: |-
                ## Purpose
                After an accident, an assault, violence at home or online exploitation, many teenagers have nightmares, jumpiness and avoidance for a few weeks that ease with support. Knowing what is common in the first month, and what suggests post-traumatic stress that responds well to trauma-focused therapy, helps you watch without overreacting and seek help at the right time.

                ## Milestones
                1. Common reactions in the first month read about from a reputable health source.
                2. Your teen's reactions noted weekly for the first month.
                3. Trauma-focused therapy asked about if symptoms last beyond a month or are severe.
                4. Any police or safeguarding processes coordinated with the mental health support.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your teen's reactions were noted for a month after the event, and a professional was asked about trauma-focused therapy if they persisted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read about common reactions to trauma in teenagers"
                - "Note your teen's sleep, startle and avoidance once a week for a month"
                - "Ask the family doctor about trauma-focused therapy if symptoms persist"
                - "Keep the therapist informed of any police or court dates"
            - name: Supporting an older teen who refuses help
              description: |-
                ## Purpose
                At 16 or 17, a teen who will not see a doctor or go to therapy cannot easily be made to, and pushing harder often backfires. Parents in this position can still get advice for themselves, keep the door open with low-pressure offers, borrow techniques from motivational interviewing and know the point at which urgent help is needed regardless.

                ## Milestones
                1. Advice taken for yourself from the family doctor, a parents' helpline or a family support service.
                2. A low-pressure offer, such as an online service or a single session, made and left open.
                3. Your conversation approach shifted towards listening for their reasons.
                4. The threshold for urgent help written down and agreed with the other adults.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "You have had professional advice for yourself, made at least one low-pressure offer, and written down the threshold for urgent help."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Call a parents' mental health helpline for advice on a teen refusing help"
                - "Offer one low-pressure option and leave it open"
                - "Read about motivational interviewing techniques for parents"
                - "Write down the point at which you would call for urgent help regardless"
            - name: Hospital admission or intensive home treatment
              description: |-
                ## Purpose
                A small number of teenagers need an inpatient stay or an intensive home treatment team, often at short notice and sometimes far from home. Knowing what to pack, what to ask on the first day, how visiting and leave work and how discharge will be planned helps you stay involved and speak up throughout.

                ## Milestones
                1. Ward or team contacts, visiting rules and the named nurse or keyworker recorded.
                2. A bag packed with the items the unit allows.
                3. Your teen's education during the admission arranged with the unit and school.
                4. A discharge planning meeting held before the date, with community follow-up booked.

                ## Notes
                Units often ban cords, belts, glass and some electronics. Ask for the list before packing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Contacts, visiting arrangements and education were recorded during the admission, and community follow-up was booked before discharge."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the unit for its contact list, visiting rules and allowed items"
                - "Pack a bag with comfort items from the allowed list"
                - "Ask how schooling continues during the stay"
                - "Request a discharge planning meeting a week before the expected date"
            - name: Meal support during family-based eating disorder treatment
              description: |-
                ## Purpose
                Family-based treatment, a leading approach for many teenagers with anorexia, puts parents in charge of meals at home for a period, guided by the treatment team. It is demanding, with supervised meals and snacks every day and often distress at each one, so organising rotas, work and siblings around it decides whether the family can keep going.

                ## Milestones
                1. The team's meal plan and your role at meals understood and written down.
                2. A meal supervision rota between adults covering school days.
                3. Work, siblings and evenings reorganised for the first phase.
                4. Each week's weigh-in and session outcome logged.

                ## Notes
                Follow the treatment team on food amounts and weight. This project is about the logistics and support around the treatment, not the clinical decisions.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written meal supervision rota has covered every meal for four weeks, and each weekly session outcome is logged."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write down your role at meals as the treatment team explained it"
                - "Draw up a meal supervision rota between adults for school days"
                - "Plan the coming week's meals and supervision rota @recurring(weekly:sun)"
                - "Log each week's session outcome in the records folder"
            - name: Second opinion or formal complaint about care
              description: |-
                ## Purpose
                Sometimes referrals are rejected, waits stretch on while things get worse, or discharge comes before your teen is well. A calm, written, evidence-based request for a second opinion or a formal complaint, using the service's own procedure and your records folder, is often what moves a case, and patient advice services can help.

                ## Milestones
                1. The specific problem and the outcome you want written in two sentences.
                2. The service's complaints or second-opinion procedure found.
                3. A written request sent with dates and evidence from the records folder.
                4. The response logged, with an independent ombudsman or advocate considered if it is unresolved.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written complaint or second-opinion request has been sent through the correct procedure and the response is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the problem and the outcome you want in two sentences"
                - "Find the service's complaints and second-opinion procedure"
                - "Ask the agent to draft a factual letter from your timeline"
                - "Contact a patient advice or advocacy service for support"
---

# Supporting a Teen's Mental Health

This area is for parents who are worried about a teenager's anxiety, low mood or self-harm, whether the signs are new or a diagnosis is already in place. It starts with the foundations (a note of what normal looks like, the warning signs, a crisis card, a safer home, a first conversation and the doctor's appointment), then the weekly and monthly routines that keep treatment moving, the skills of asking about suicide and responding to self-harm, decisions on therapy, medication and school, the appointments and returns worth planning, versions for two homes, siblings, working parents and grief, and finally the specialist work of hospital stays, eating disorder treatment and challenging poor care.

What repeats is a mood score on Sundays, an observation log on Wednesdays, exposure practice twice a week, a referral chase on the 5th, the repeat prescription on the 12th, a school update on the 18th and a safety plan review on the 24th, with a quarterly look at what is helping. The Metrics log, Habit tracker, Purchase decision and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
