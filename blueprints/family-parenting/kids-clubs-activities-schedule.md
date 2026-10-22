---
id: family-parenting.kids-clubs-activities-schedule
name: Kids' Clubs & Activities Schedule
description: "A clear weekly timetable of every child's clubs, lessons and sports, with fees, kit, lifts and safeguarding sorted, room left for free time, and calm decisions about starting, switching or quitting."
category: personal
version: 1.0.0
tags: [family-parenting, kids-clubs-activities-schedule, parent, after-school-clubs, sports, music-lessons, overscheduling, lift-sharing]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - habit-tracker
    - purchase-decision
    - development-plan
    - meeting-notes
  pillars:
    - name: Family & Parenting
      emoji: "👨‍👩‍👧"
      description: "Raising children and holding a family together: each stage from pregnancy to young adulthood, schooling and activities, family logistics and traditions, extended family, and the decisions parents make together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Kids' Clubs & Activities Schedule
          description: "Choosing and juggling children's after-school clubs, lessons and sports, with fees, kit, lifts and not overscheduling."
          projects:
            - name: Audit of every child's current activities
              description: |-
                ## Purpose
                Most families cannot say, without checking three apps and a fridge magnet, exactly what each child does, when, where and for how much. Writing it all down in one place for every child (day, time, venue, cost per term, kit, who drives) shows the real shape of the week and is the starting point for every other decision in this area.

                ## Milestones
                1. One list per child naming every club, lesson, team and regular commitment.
                2. Day, start and finish time, venue and driver recorded against each one.
                3. Cost per term or month and any extra charges noted for each activity.
                4. A weekly total of scheduled hours and driving trips worked out for the household.

                ## Notes
                Include the things that do not feel like clubs: weekly tutoring, church groups, a standing playdate with a lift attached. They take the same evenings.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list for each child covers every regular activity with day, time, venue, cost and driver, plus a household weekly total."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every club, lesson and team each child attends from memory"
                - "Check club apps, emails and bank statements for anything missed"
                - "Add day, time, venue, cost and driver to each entry"
                - "Total the scheduled hours and car trips for a typical week"
            - name: Asking each child what they want to try, keep or drop
              description: |-
                ## Purpose
                Plenty of children end up signed up for things because a friend did them or a parent loved them, and they rarely volunteer that they dread Tuesday. A short, separate conversation with each child about what they enjoy, what they would quit tomorrow and what they are curious about gives you their view before you plan the next term, not after a meltdown in the car park.

                ## Milestones
                1. A one-to-one chat held with each child old enough to answer, away from the activity itself.
                2. Each child's keep, drop and want-to-try list written down in their own words.
                3. Any mismatch between the child's view and the parents' view noted.
                4. The lists kept with the activities audit for the next sign-up round.

                ## Notes
                Ask on a walk or in the car rather than across a table. Younger children answer better with pictures or a sort of activity cards into happy, okay and not for me piles.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each child has a written keep, drop and want-to-try list from a one-to-one conversation, stored with the activities audit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Plan a relaxed moment alone with each child this week"
                - "Ask what they love, what they would stop and what they would try"
                - "Write down their answers in their own words"
                - "Compare their answers with what you assumed they wanted"
            - name: Free-time limit for each child's week
              description: |-
                ## Purpose
                Overscheduling creeps in one reasonable yes at a time, until a seven-year-old has something on every weekday and nobody has time to be bored, play outside or do homework without rushing. Agreeing a limit per child, such as a maximum number of scheduled afternoons and at least one completely free weekend morning, gives you a rule to check every new request against.

                ## Milestones
                1. A maximum number of scheduled weekday afternoons agreed for each child, by age.
                2. At least one protected unscheduled block per week named for each child.
                3. Both parents agreeing the limits and the reason for them.
                4. Current activities checked against the limits, with any child over the line flagged.

                ## Notes
                A common starting point is no more than three scheduled weekday afternoons for primary-age children, but energy, homework load and travel time matter more than any number.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written free-time limit per child, agreed by both parents, with any child currently over it identified."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count the scheduled afternoons each child has now"
                - "Agree a maximum and one protected free block per child"
                - "Write the limits on the activities audit"
                - "Flag any child already over the limit for the end-of-term review"
            - name: Annual activities budget per child
              description: |-
                ## Purpose
                Termly fees are only part of the bill: boots, uniforms, exam entry, competition fees, away travel, costumes and the end-of-year trip often double the headline figure. Setting a yearly budget per child, built from real costs, stops the drip of one-off requests landing as a surprise and makes fairness between siblings something you can show rather than argue about.

                ## Milestones
                1. Last year's spending on activities pulled from bank statements and receipts.
                2. A yearly figure per child covering fees, kit, exams, travel and extras.
                3. A household total agreed against what the family budget can carry.
                4. A rule for unplanned costs written down, such as a small buffer or a swap.

                ## Notes
                If money is tight, look for bursaries, sibling discounts and subsidised schemes before cutting an activity a child loves. Many clubs have hardship places they do not advertise.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written yearly activities budget for each child and a household total, built from at least the last six months of real spending."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search the last twelve months of statements for club and lesson payments"
                - "Add the extras: kit, exams, trips, costumes and competition fees"
                - "Set a yearly figure per child and a household total"
                - "Revisit the budget before the autumn sign-ups @recurring(yearly)"
            - name: One-page weekly activities timetable
              description: |-
                ## Purpose
                A single grid showing every child's activities by day and time, with the driver and the kit for each, is what turns a chaotic week into a readable one. When it sits on the fridge and in the shared family calendar, grandparents, babysitters and the children themselves can see what is happening without asking.

                ## Milestones
                1. A weekly grid with a column per day and a row or colour per child.
                2. Each slot showing time, venue, driver and the kit needed.
                3. The grid printed for the kitchen and shared digitally with every adult who helps.
                4. Older children able to read their own day from it without help.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page weekly timetable covering every child's activities, with driver and kit per slot, is on display and shared with every helping adult."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sketch a weekly grid with a colour for each child"
                - "Fill in each activity with time, venue, driver and kit"
                - "Print it for the kitchen and share a digital copy"
                - "Walk each child through how to read their own row"
            - name: Club contacts and venue information sheet
              description: |-
                ## Purpose
                When a session is cancelled by text at 4pm or a child is not at the gate at pickup, you need the coach's number, the venue address, the parking rules and the club's absence policy in seconds. One sheet holding all of it, for every club, saves the frantic scroll through old messages and is what a grandparent or babysitter needs on their first solo run.

                ## Milestones
                1. Coach or teacher name, mobile and email recorded for every activity.
                2. Venue address, entrance, parking and pickup point noted for each.
                3. Each club's absence, cancellation and refund policy summarised in a line.
                4. The sheet saved on every parent's phone and printed with the timetable.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contacts sheet lists coach details, venue and pickup point, and absence policy for every activity, and is on each parent's phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect coach and teacher contact details for each club"
                - "Note venue addresses, entrances and pickup points"
                - "Summarise each club's absence and refund policy in a line"
                - "Save the sheet to every parent's phone"
            - name: Medical details and consent forms for every club
              description: |-
                ## Purpose
                Each club holds its own copy of your child's allergies, medicines, emergency contacts and photo consent, and they go out of date the moment an inhaler changes or a contact moves. Keeping one master record and checking each club's copy against it means a coach with a first aid kit actually knows what they are dealing with.

                ## Milestones
                1. A master record of each child's medical needs, medicines and emergency contacts.
                2. Every club confirmed as holding a current form that matches the master record.
                3. Photo and video consent choices set deliberately for each club.
                4. Any medicine a child carries, such as an inhaler or auto-injector, checked as in date and labelled.

                ## Notes
                Ask how each club stores medical information and who on site at each session can see it. Volunteer-run clubs vary a great deal.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every club holds a current medical and consent form matching a single master record, with carried medicines checked in date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a master record of each child's medical needs and contacts"
                - "Ask each club to confirm what details they hold"
                - "Update any form that does not match the master record"
                - "Check consent forms reflect any new allergy, medicine or contact @recurring(yearly)"
            - name: Safeguarding check before signing up to a club
              description: |-
                ## Purpose
                Anyone can rent a hall and run a children's class, and a good website says nothing about whether staff are background checked, first aid trained or ever alone with a child. Asking a short, standard set of questions before every new club, and knowing what good answers sound like, protects your child and is normal practice that well-run clubs welcome.

                ## Milestones
                1. A standard list of safeguarding questions written and saved on your phone.
                2. A named safeguarding lead and their contact details obtained for each current club.
                3. Background checks, first aid cover and adult to child ratios confirmed for each club.
                4. Any club that could not answer clearly flagged for a decision.

                ## Notes
                Good questions: who is the safeguarding lead, are all coaches background checked through the national scheme, what is the ratio, what happens if a child is not collected, and how are messages to children handled.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every current club has a named safeguarding lead on record and has confirmed background checks, first aid cover and ratios."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a list of six safeguarding questions to ask any club"
                - "Look up each current club's safeguarding policy online"
                - "Ask each club for its safeguarding lead and check arrangements"
                - "Record the answers and flag any gaps"
            - name: Taster sessions before committing to a term
              description: |-
                ## Purpose
                Paying a full term in advance for an activity a child abandons after week two is one of the commonest wastes in family budgets. A simple house rule of trying a taster, a holiday workshop or a free first session before any termly fee, and agreeing in advance how many sessions count as a fair try, takes the guesswork out of new interests.

                ## Milestones
                1. A family rule written down for trying a new activity before paying a term.
                2. A fair-try number of sessions agreed with the child before they start.
                3. Taster options found for each activity on the want-to-try lists.
                4. A decision recorded after each taster: sign up, try later or not for us.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every new activity starts with a taster or trial and ends with a recorded sign-up decision before any full term is paid."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree a fair-try number of sessions with each child"
                - "Find a taster or trial session for each want-to-try activity"
                - "Book the first taster and add it to the timetable"
                - "Record the sign-up decision within a week of each taster"
            - name: Pickup backup list for each club venue
              description: |-
                ## Purpose
                Every family eventually hits the evening when a meeting overruns or the car will not start while a child waits outside a sports hall. A short list, per venue, of two adults who could collect, agreed with them in advance and known to the club, turns that evening into a phone call instead of a panic.

                ## Milestones
                1. Two backup adults named for each regular venue.
                2. Each backup adult asked and agreeing in advance.
                3. Each club told in writing who may collect your child.
                4. Children told who might collect them and a family password agreed if the club uses one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each regular venue has two named backup collectors who have agreed, and each club holds their names in writing."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Name two possible backup collectors for each venue"
                - "Ask each one whether they are happy to be on the list"
                - "Tell each club in writing who may collect your child"
                - "Agree a collection password with your children"
            - name: Sunday week-ahead activities check
              description: |-
                ## Purpose
                Nearly all activity disasters (wrong kit, a match moved to an away pitch, two children needing lifts at 5.30 in opposite directions) are visible on Sunday if anyone looks. Fifteen minutes with the timetable, the club apps and your partner on Sunday evening catches clashes while they can still be solved.

                ## Milestones
                1. A fixed Sunday slot for the check that both parents can usually make.
                2. Fixtures, changed times and one-off events copied into the family calendar.
                3. Every lift for the coming week assigned to a named adult.
                4. Clashes spotted and solved, or an absence sent, before Monday.

                ## Notes
                Keep it short and standing up if need be. The aim is to assign drivers and spot clashes, not to redesign the week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over a month, a Sunday check happens each week and no activity lift is left without a named driver on Monday."
                cadence: rolling
              tasks:
                - "Pick a fifteen-minute Sunday evening slot for the check"
                - "Load the week's fixtures and changes into the family calendar @recurring(weekly:sun)"
                - "Assign a named driver to every lift for the week"
                - "Send absences for any session that clashes"
            - name: Kit station and night-before packing routine
              description: |-
                ## Purpose
                Forgotten shin pads, a swimming bag still wet from last week and a violin left at school cost time, money and goodwill with coaches. A fixed kit station by the door, one labelled bag per activity and a night-before packing habit mean the morning rush is about breakfast, not hunting for a gum shield.

                ## Milestones
                1. A kit station set up near the front door with a hook or crate per child.
                2. One bag per activity, labelled, with a laminated list of its contents.
                3. Kit packed the night before for each next-day activity.
                4. A weekly wash and return of all kit to the station.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four straight weeks, no child arrives at an activity missing required kit."
                cadence: rolling
              tasks:
                - "Clear a spot by the door for a hook or crate per child"
                - "Write and attach a contents list to each activity bag"
                - "Pack the next day's bags before bedtime each evening"
                - "Wash and return all kit to the station @recurring(weekly:sat)"
            - name: Activity fees and payments tracker
              description: |-
                ## Purpose
                Activity costs arrive as termly invoices, monthly direct debits, cash in an envelope and app payments, often with early-bird deadlines and late fees. A simple tracker of what is due, when and how, checked once a month, stops missed payments losing a child's place and makes the annual budget a number you can trust.

                ## Milestones
                1. Every activity listed with its amount, payment method and due dates.
                2. Direct debits and standing orders matched against the bank statement.
                3. Early-bird and deadline dates for next term's fees recorded.
                4. Spending to date compared with the annual budget each month.

                ## Notes
                Start from the **Monthly budget and bills** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fees tracker is reconciled against the bank statement every month for three months with no missed or late activity payment."
                cadence: rolling
              tasks:
                - "List every activity's fee, payment method and due date"
                - "Note early-bird discounts and payment deadlines for next term"
                - "Reconcile activity payments against the bank statement @recurring(monthly:3)"
                - "Compare spending to date against the annual budget"
            - name: Activity lift-share rota with other club families
              description: |-
                ## Purpose
                If three families drive to the same Thursday swimming session, each could drive once every three weeks instead of every week. A written rota with clear rules on car seats, timings and what happens when someone is ill turns goodwill into something reliable, and gives every parent evenings back.

                ## Milestones
                1. Families at each regular club identified who live nearby and might share.
                2. A rota agreed in writing with dates, drivers and a swap rule.
                3. Car seat or booster requirements and child contact details shared between drivers.
                4. A weekly confirmation message in the group chat.

                ## Notes
                Check that every driver is comfortable with the legal car seat rules for the ages involved, and keep children's contact details only with the drivers who need them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least one club lift is shared on a written rota with another family, confirmed weekly, for a full term."
                cadence: rolling
              tasks:
                - "Ask at pickup which families live near you"
                - "Draft a simple rota with a swap rule and share it"
                - "Agree car seat arrangements with every driver"
                - "Confirm next week's drivers in the group chat @recurring(weekly:thu)"
            - name: Termly re-registration and waiting list cycle
              description: |-
                ## Purpose
                Popular swimming lessons, dance schools and music services open sign-ups weeks before term and fill within days, and a missed email can mean a term on the waiting list. Treating each term as a cycle (check the dates, decide, register, pay) means places are kept or released on purpose rather than by accident.

                ## Milestones
                1. The sign-up opening date for each club recorded before it arrives.
                2. A keep or drop decision made for each activity before sign-ups open.
                3. Places re-registered or released by each club's deadline.
                4. Waiting list positions noted for any activity a child is queuing for.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For each of the next three terms, every activity is re-registered or released before its deadline, with no place lost by mistake."
                cadence: cyclic
              tasks:
                - "Find the next sign-up opening date for each club"
                - "Check sign-up dates and waiting list positions for next term @recurring(quarterly)"
                - "Decide keep or drop for each activity before sign-ups open"
                - "Register or give notice by each club's deadline"
            - name: Seasonal kit size check and hand-me-down swap
              description: |-
                ## Purpose
                Football boots, ballet shoes and swimming costumes are outgrown faster than any budget expects, and a cupboard of outgrown kit is cash sitting still. Checking sizes at the start of each season, passing kit down between siblings and using club swap rails or second-hand groups keeps everyone fitted for far less.

                ## Milestones
                1. Every item of activity kit tried on and its fit noted at the start of the season.
                2. Outgrown kit sorted into hand down, sell, swap or donate.
                3. Missing or outgrown items bought, second hand where possible.
                4. A note of each child's current sizes kept with the activities audit.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At each season change, every child's activity kit fits and outgrown items have been passed on, sold or donated within a month."
                cadence: cyclic
              tasks:
                - "Have each child try on all their activity kit"
                - "Sort outgrown kit into hand down, sell, swap or donate"
                - "Ask the club about a swap rail or second-hand group"
                - "Run a kit size check at the start of each season @recurring(quarterly)"
            - name: Home practice routine for instrument lessons
              description: |-
                ## Purpose
                Weekly music lessons without practice in between mostly pay a teacher to repeat last week's lesson. A short, predictable practice slot on set days, with a target agreed with the teacher and a simple record the child keeps, does more for progress than long weekend sessions and ends the nightly argument about whether to practise.

                ## Milestones
                1. Practice days and a slot length agreed with the child and the teacher.
                2. A practice spot set up with the instrument out and music ready.
                3. A practice record kept by the child and shown to the teacher.
                4. Four weeks of practice on most of the agreed days.

                ## Notes
                Start from the **Habit tracker** template. Ten to fifteen minutes on most days usually beats an hour once, especially for younger players.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The child practises on at least four agreed days a week for four weeks, shown in a practice record the teacher has seen."
                cadence: rolling
              tasks:
                - "Ask the teacher for this term's practice goal and length"
                - "Set up a practice spot with the instrument out and music ready"
                - "Do the agreed practice slot after tea @recurring(weekly:mon,tue,wed,thu)"
                - "Bring the practice record to the lesson for the teacher to see"
            - name: Club messages and apps triage
              description: |-
                ## Purpose
                Three children in four activities can easily add up to a dozen group chats and team apps, where the one message that matters (venue change, kit for the gala, payment due) is buried among thumbs-up replies. Muting the noise and checking every club channel at a set time once a week means nothing important slips while your phone stays quiet.

                ## Milestones
                1. Every club group chat, team app and mailing list listed in one place.
                2. Notifications muted on chatty groups and kept on for urgent channels only.
                3. One parent named as the reader for each club channel.
                4. A weekly sweep of all channels with actions moved into the calendar.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every club channel has a named reader, chatty groups are muted, and a weekly sweep happens for a month without a missed club notice."
                cadence: rolling
              tasks:
                - "List every club chat, app and mailing list the family is in"
                - "Mute the chatty groups and keep alerts on for urgent ones"
                - "Agree which parent reads which club's messages"
                - "Sweep every club channel and move actions to the calendar @recurring(weekly:wed)"
            - name: Monthly activity load check
              description: |-
                ## Purpose
                Signs that the schedule is too much tend to show up first at home: tears on club nights, homework squeezed past bedtime, a child who used to love swimming dragging their feet. Ten minutes each month looking at how each child is coping lets you ease off one activity before a child burns out, rather than after.

                ## Milestones
                1. A short set of questions agreed for the check: sleep, mood, homework, enjoyment.
                2. Each child's month scored as fine, stretched or too much.
                3. Any child marked too much given one specific change.
                4. A note kept of each month's result to show a pattern over a term.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly load check is recorded for each child for three months, with a change made for any child marked too much."
                cadence: rolling
              tasks:
                - "Write four questions to ask about each child's month"
                - "Score each child as fine, stretched or too much @recurring(monthly:20)"
                - "Agree one change for any child marked too much"
                - "Ask each child how their clubs are feeling this month"
            - name: End-of-year activities review
              description: |-
                ## Purpose
                Summer is when clubs ask for next year's commitment and when children have changed most since the last decision. A yearly sit-down that brings together the audit, each child's wishes, the monthly load checks and the year's spending lets you plan the coming September deliberately instead of rolling everything over by default.

                ## Milestones
                1. The year's activities, spending and load check results gathered in one place.
                2. Each child's updated keep, drop and want-to-try list collected.
                3. A keep, change or stop decision recorded for every activity.
                4. Next year's draft timetable checked against the free-time limits and budget.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly review produces a recorded decision for every activity and a draft timetable that meets the free-time limit and budget."
                cadence: cyclic
              tasks:
                - "Gather the audit, load checks and spending for the year"
                - "Hold the full activities review each summer @recurring(yearly)"
                - "Record keep, change or stop for every activity"
                - "Draft next year's timetable and test it against the limits"
            - name: Understanding graded music exams
              description: |-
                ## Purpose
                Graded exams can give a young musician structure and a goal, but they can also turn playing into a cycle of the same three pieces for a year. Understanding how grades work, what the exam involves, what it costs and the alternatives such as performance assessments helps you and the teacher decide whether and when an exam is right for your child.

                ## Milestones
                1. The grade structure, components and marking of the relevant exam board understood.
                2. Typical preparation time, entry fees and accompanist costs known.
                3. Alternatives to graded exams listed, such as performance awards or ensembles.
                4. A view agreed with the teacher on whether and when to enter.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note of how the relevant graded exams work, their cost and the teacher's recommendation on whether to enter."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the exam board's guide to the grade your child is near"
                - "List the entry fee, accompanist and extra lesson costs"
                - "Ask the teacher about exam and non-exam routes"
                - "Agree with your child whether an exam is the goal this year"
            - name: Swimming stages and water safety goals
              description: |-
                ## Purpose
                Learn-to-swim programmes run through numbered stages, and many families pay for years of lessons without knowing what the goal is or when lessons could stop. Knowing what each stage means and agreeing a water safety target (for example swimming 25 metres confidently and treading water) tells you when lessons have done their job and when to move to a club or stop.

                ## Milestones
                1. The stages of your local learn-to-swim scheme and what each requires understood.
                2. Your child's current stage and their teacher's view of progress recorded.
                3. A family water safety goal agreed for when lessons have done their job.
                4. A plan for after lessons: club squad, casual swimming or stop.

                ## Notes
                Being able to swim in a warm pool is not the same as being safe in open water. Many schemes have a separate survival or open water element worth asking about.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your child's swimming stage, a written water safety goal and the plan for after lessons are recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look up the stages of the scheme your pool uses"
                - "Ask the teacher what stage your child is at and what is next"
                - "Agree a water safety goal that would end formal lessons"
                - "Decide the next step once the goal is reached"
            - name: Recognising good coaching and teaching
              description: |-
                ## Purpose
                The coach matters more than the club badge: a good one keeps children loving a sport for years, and a shouting one can end it in a season. Knowing what good youth coaching looks like (age-appropriate sessions, equal playing time at young ages, praise for effort, a calm touchline) lets you judge a new club in one session and raise concerns with confidence.

                ## Milestones
                1. A short list of signs of good youth coaching and teaching written down.
                2. One session at each current club watched with the list in mind.
                3. Strengths and concerns for each coach noted privately.
                4. Any serious concern raised calmly with the club's welfare officer or head coach.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of good coaching signs exists and each current coach has been observed against it, with any concern raised."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read your sport's national body guidance for parents"
                - "Write eight signs of good coaching for young children"
                - "Watch one full session at each club with the list"
                - "Note strengths and any concern for each coach"
            - name: Being a supportive touchline parent
              description: |-
                ## Purpose
                Ask young players what they dislike most about matches and many say the drive home, when a parent replays every mistake. Learning to cheer effort rather than results, stay quiet on tactics and keep the post-match talk short and warm is a skill, and practising it makes it far more likely your child still wants to play at fourteen.

                ## Milestones
                1. The club's parent code of conduct read and agreed with.
                2. A short list of touchline phrases to use and to avoid.
                3. A post-match question agreed, such as asking what they enjoyed most.
                4. Three matches watched using the new habits, with a note on how it went.

                ## Notes
                Many youth sports bodies suggest just saying you love watching them play, and leaving the coaching to the coach.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three consecutive matches are watched using agreed touchline phrases and a single post-match question, noted afterwards."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read the club's parent code of conduct"
                - "Write three things to shout and three to never say"
                - "Pick one warm question to ask after every match"
                - "Note after each of the next three matches how you did"
            - name: Teaching a child to pack their own kit bag
              description: |-
                ## Purpose
                Parents who pack every bag until secondary school end up with a teenager who has never once checked for their own swimming goggles. Teaching children from about seven to pack from a picture or written list, with a gradual handover of responsibility, builds independence and takes a nightly job off your plate.

                ## Milestones
                1. A picture or written kit list made for each of the child's activities.
                2. The child packing alongside you, then with you checking, then alone.
                3. An agreed consequence for forgotten kit that does not involve a parent dash home.
                4. A month in which the child packs alone for at least one activity.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The child packs their own bag for at least one activity, unchecked, for four weeks running."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Make a picture or word kit list for one activity"
                - "Pack together twice, then let the child pack while you check"
                - "Agree what happens if kit is forgotten"
                - "Hand over packing for one activity completely"
            - name: Helping a child cope with losing and not being picked
              description: |-
                ## Purpose
                Being left on the bench, not getting the solo or losing a final can feel enormous to a child, and the way parents respond shapes whether they come back next week. Learning a few calm ways to listen, name the feeling and avoid either rescuing or blaming the coach helps children build resilience they will use far beyond the club.

                ## Milestones
                1. A few phrases ready for listening without fixing after a disappointment.
                2. A rule agreed that parents do not criticise coaches in front of the child.
                3. One disappointment handled using the new approach, with notes afterwards.
                4. A route agreed for when a selection issue genuinely needs raising with the club.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written set of listening phrases and a rule about coach criticism exist, and at least one disappointment has been handled using them."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write three listening phrases for after a disappointment"
                - "Agree with your partner not to criticise coaches in front of the child"
                - "Note how the next disappointment went and what helped"
                - "Decide when a selection question is worth raising with the club"
            - name: Spotting overscheduling and activity fatigue
              description: |-
                ## Purpose
                Few children say outright that they are doing too much; it shows up as stomach aches on club days, falling out with friends, late homework or losing the joy in something they chose. Learning the signs, and the difference between normal grumbling and real fatigue, helps you act on the monthly load check with confidence rather than guilt.

                ## Milestones
                1. A list of common signs of overscheduling in children written down.
                2. The difference between ordinary reluctance and lasting fatigue understood.
                3. Each child's usual signs of tiredness noted.
                4. A clear point agreed at which you would speak to the school or doctor.

                ## Notes
                Persistent low mood, sleep problems or physical symptoms are a reason to talk to your child's doctor, not just to drop a club.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of overscheduling signs and each child's personal tiredness signs is kept with the monthly load check."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read two reputable articles on overscheduling in children"
                - "List the signs that apply to each of your children"
                - "Agree when a sign means drop something and when it means talk to a doctor"
                - "Add the signs to the monthly load check questions"
            - name: Deciding whether to let a child quit an activity
              description: |-
                ## Purpose
                Few parenting decisions cause more second-guessing than a child begging to stop piano after three years of lessons. Having a family approach in advance (finish the paid term, find out the real reason, separate a bad week from a lasting dislike, and agree whether to swap or stop) turns a tearful standoff into a fair decision the child understands.

                ## Milestones
                1. A family rule agreed for how quitting works, such as finishing the paid term.
                2. The child's real reason found out in a calm conversation.
                3. Options laid out: stop, pause, change teacher or club, or swap activity.
                4. A decision made and explained to the child, with the date it takes effect.

                ## Notes
                Bullying, an unkind coach or anything that makes a child feel unsafe is a reason to stop straight away, whatever the house rule says.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A quitting rule is written down, and any current request to quit ends in a recorded decision explained to the child."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree a family rule for how quitting an activity works"
                - "Ask the child, calmly and away from the activity, what is behind it"
                - "List the options beyond simply stopping"
                - "Tell the child the decision and when it takes effect"
            - name: Group classes versus private lessons
              description: |-
                ## Purpose
                Group lessons are cheaper and more social, while one-to-one tuition moves faster and suits children who are shy, very keen or stuck. Comparing the two properly, on cost per term, progress, travel and what your child actually enjoys, avoids paying private rates for a child who mainly wanted to see their friends.

                ## Milestones
                1. The goal for this activity agreed: fun, friends, steady progress or serious progress.
                2. Group and private options priced per term including travel.
                3. Your child's preference and the current teacher's view recorded.
                4. A choice made with a date to review it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A group versus private comparison is written up with costs per term, and a choice is made with a review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree what you most want from this activity"
                - "Price a group option and a private option per term"
                - "Ask your child and the current teacher which they would choose"
                - "Make the choice and set a review date"
            - name: Renting versus buying an instrument
              description: |-
                ## Purpose
                Children's instruments come in fractional sizes that are outgrown every year or two, and a full-size instrument can cost more than a year of lessons. Comparing rental schemes, rent-to-buy, second-hand and new, with the teacher's advice on quality, avoids both a frustrating cheap instrument and an expensive one abandoned in a cupboard.

                ## Milestones
                1. The right size and minimum quality confirmed with the teacher.
                2. Rental, rent-to-buy, second-hand and new options priced over two years.
                3. Insurance and repair costs added for each option.
                4. An option chosen and the instrument in the house.

                ## Notes
                Start from the **Purchase decision** template. Many school music services and shops run rental schemes where part of the rent counts towards buying.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A two-year cost comparison of four ways to get the instrument is written up, and the chosen instrument is in the house."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the teacher what size and quality your child needs"
                - "Price rental, rent-to-buy, second-hand and new over two years"
                - "Add insurance and repair costs to each option"
                - "Choose and arrange the instrument"
            - name: Consolidating activities onto fewer evenings and venues
              description: |-
                ## Purpose
                Two children at two venues on four different evenings can mean eight car trips a week and dinner in a lay-by. Rearranging activities so siblings share a venue or a night, or choosing a session time that sits next to another child's, can free whole evenings without anyone giving up something they love.

                ## Milestones
                1. Every current activity mapped by evening and venue.
                2. Alternative session times or nearby venues found for the most awkward slots.
                3. At least one consolidation option checked with each affected child.
                4. Changes agreed and timed for the next term start.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The weekly timetable for next term has at least one fewer activity evening or venue than this term, with every child still doing their chosen activities."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Map every activity on a grid of evenings and venues"
                - "Ask each club about other session times next term"
                - "Look for sibling sessions at the same venue or night"
                - "Agree the changes and give notice for next term"
            - name: Cutting the cost of children's activities
              description: |-
                ## Purpose
                Activity costs can quietly reach a family's largest discretionary spend, but much of it is negotiable. Sibling and annual payment discounts, bursaries and hardship funds, subsidised local authority schemes, school-run clubs and second-hand kit can bring the bill down substantially without cutting what children do.

                ## Milestones
                1. Every activity checked for sibling, block booking or annual payment discounts.
                2. Bursary, hardship fund and subsidised scheme eligibility checked.
                3. Cheaper equivalent options identified for the most expensive activity.
                4. Savings achieved recorded against the annual budget.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every activity has been checked for discounts and support, and any savings are recorded against the annual budget."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each club about sibling, block and annual payment discounts"
                - "Check eligibility for bursaries and subsidised local schemes"
                - "Price a cheaper alternative for the most expensive activity"
                - "Record any savings in the activities budget"
            - name: Choosing between two clubs for the same sport
              description: |-
                ## Purpose
                When there are two football clubs, gymnastics clubs or dance schools within reach, the choice usually gets made by which one a friend attends. Comparing them on coaching ethos, training times, travel, cost, pathway and how they treat the less sporty children gives your child the club that will keep them playing.

                ## Milestones
                1. Both clubs listed against the same criteria: ethos, times, travel, cost, pathway.
                2. A session watched or a taster attended at each club.
                3. Other parents at each club asked about their experience.
                4. A choice made and the other club thanked.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two clubs are compared on the same five criteria in writing, with a session seen at each, and one is chosen."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write five criteria that matter for this sport"
                - "Arrange to watch or try a session at each club"
                - "Ask two parents at each club what they like and dislike"
                - "Score both clubs and choose"
            - name: Accepting a squad or competitive team invitation
              description: |-
                ## Purpose
                An invitation to join a development squad or competitive team is exciting, and it can also mean four training sessions a week, weekend travel and fees that triple. Weighing the commitment in hours, money and family cost before saying yes, and making sure your child actually wants it, avoids a decision you regret by half term.

                ## Milestones
                1. The squad's weekly hours, travel, fees and competition calendar written down.
                2. The effect on siblings, homework and the free-time limit worked out.
                3. Your child's wishes heard separately from the excitement of the invitation.
                4. A decision given to the club, with conditions if needed.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The squad's hours, costs and travel are written down, the family effect is assessed, and a decision is given to the club."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the club for the squad's weekly hours, fees and travel"
                - "Work out the knock-on effect for siblings and homework"
                - "Talk with your child about whether they really want it"
                - "Give the club your decision in writing"
            - name: Exam, grading or badge assessment day
              description: |-
                ## Purpose
                Music exams, martial arts gradings, dance exams and gymnastics badge days come with entry deadlines, specific uniforms, early arrivals and nerves. Treating the day as a small event, with the entry paid, the kit ready and a calm plan for the morning, lets your child show what they have learned instead of arriving flustered.

                ## Milestones
                1. The entry submitted and paid before the deadline.
                2. Required uniform, music, belt or paperwork checked a week before.
                3. Travel, arrival time and a calm morning plan agreed.
                4. A small celebration planned whatever the result.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The entry is paid on time, the kit is checked a week before, and the child arrives at the assessment on time with everything they need."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the assessment date, entry deadline and fee"
                - "Check the required uniform, music or paperwork"
                - "Plan travel and the morning so you arrive early"
                - "Plan a small treat for after, whatever the result"
            - name: End-of-year show or recital
              description: |-
                ## Purpose
                Dance shows, school plays and recitals bring a cluster of extra rehearsals, costume requests, ticket sales and a long evening that can clash with everything else. Collecting every date and request in one place as soon as the show is announced stops the costume panic in the final week.

                ## Milestones
                1. All extra rehearsals, dress rehearsal and show dates in the family calendar.
                2. Costume, make-up and shoe requirements listed and sourced.
                3. Tickets bought for everyone who wants to come.
                4. Show-day logistics settled: drop-off time, food, collection and siblings.

                ## Notes
                Ask early whether costumes can be borrowed or swapped. Dance schools often have a costume store, and second-hand groups fill up after every show.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All rehearsal and show dates are in the calendar, the costume is ready a week before, and tickets are bought for every guest."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Copy every rehearsal and show date into the family calendar"
                - "List costume and shoe requirements and find each item"
                - "Buy tickets for family members who are coming"
                - "Plan show-day drop-off, food and collection"
            - name: First away tournament or competition day
              description: |-
                ## Purpose
                A first away tournament can mean a 6am start, a two-hour drive, hours of waiting between short games and a hungry, overtired child by mid-afternoon. Planning the day like a small trip (route, timings, food, layers, entertainment for siblings) makes it a good memory rather than a long ordeal.

                ## Milestones
                1. Venue, arrival time, schedule and parking confirmed.
                2. A day bag packed with food, water, layers and spare kit.
                3. A plan for siblings who are coming along.
                4. A lift share or convoy agreed with other families if it helps.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The child arrives at the tournament on time with food, water and spare kit, and siblings have a plan for the day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the venue, arrival time and match schedule"
                - "Pack a day bag with food, water, layers and spare kit"
                - "Plan what siblings will do during the day"
                - "Offer or ask for a lift share with another family"
            - name: End-of-season presentation and coach thank-you
              description: |-
                ## Purpose
                Most children's clubs survive on volunteer coaches who give up every Saturday morning for years. Marking the end of the season with the awards evening, a team thank-you card or a small collective gift, and making sure your child says thank you themselves, keeps good coaches coming back and teaches gratitude by doing.

                ## Milestones
                1. The presentation evening date in the calendar and attendance confirmed.
                2. A team thank-you agreed with other parents, with a modest contribution per family.
                3. Your child's own card or message to the coach written and handed over.
                4. Kit returned or club items handed back if required.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The child gives the coach a personal thank-you and the family attends or sends apologies to the presentation evening."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add the presentation evening to the family calendar"
                - "Suggest a team thank-you in the parents' group"
                - "Help your child write a card to the coach"
                - "Return any club kit that needs handing back"
            - name: Residential trip or camp with a club
              description: |-
                ## Purpose
                Scout camps, choir tours and team tours bring deposits, consent forms, kit lists and sometimes a child's first night away without family. Working through the paperwork and payments in good time, and preparing your child for being away, means the trip is a highlight rather than a scramble the night before.

                ## Milestones
                1. Deposit and balance dates recorded and paid on time.
                2. Consent, medical and emergency contact forms returned.
                3. Kit list collected, labelled and packed two days before.
                4. Your child prepared for being away, including any homesickness plan agreed with leaders.

                ## Notes
                Tell leaders privately about anything that might matter at night, such as bedwetting or anxiety. Experienced leaders deal with it discreetly all the time.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All payments and forms are in by their deadlines and the labelled kit is packed two days before departure."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Record the deposit, balance and form deadlines"
                - "Return consent and medical forms to the leaders"
                - "Label and pack everything on the kit list"
                - "Talk with your child about being away and who to tell if they feel homesick"
            - name: First club for a preschooler
              description: |-
                ## Purpose
                Toddler music, baby swim, tumble tots and mini football can be lovely, but at two to four the right class is short, local, parent-and-child and about fun, not progress. Choosing one well, at a time of day that fits naps and meals, gives a preschooler a happy first taste of clubs without filling the week.

                ## Milestones
                1. Two or three local preschool classes found that fit nap and meal times.
                2. One taster attended and your child's response noted.
                3. One class chosen, with no more than one or two scheduled sessions a week overall.
                4. A note on how it is going after half a term.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One preschool class is chosen after a taster, fits nap times, and is reviewed after half a term."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List preschool classes within a short trip that fit nap times"
                - "Book a taster at the one that looks most relaxed"
                - "Choose one class for this term"
                - "Review after half a term whether your child is enjoying it"
            - name: Activities for a child with additional needs
              description: |-
                ## Purpose
                Children with additional needs or disabilities often thrive in the right club and struggle in the wrong one, and the difference is usually the leader's attitude and a few adjustments. Finding inclusive or adapted options and having a calm conversation with the leader before the first session about triggers, support and quiet spaces gives your child a fair chance to enjoy it.

                ## Milestones
                1. Inclusive, adapted and mainstream options with a good track record listed.
                2. A conversation held with the leader before the first session.
                3. A one-page profile of your child's needs and what helps shared with the club.
                4. A review after the first few weeks with the leader and your child.

                ## Notes
                Ask whether the club has done inclusion training through its national body, and whether a parent or support worker can stay for the first sessions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A one-page profile is shared with the chosen club's leader before the first session and a review is held within six weeks."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Search for inclusive and adapted clubs within reach"
                - "Write a one-page profile of what helps your child"
                - "Meet or call the leader before the first session"
                - "Review with the leader and your child after a few weeks"
            - name: Juggling clubs for three or more children
              description: |-
                ## Purpose
                With three or more children, activities stop being a matter of individual choice and become a puzzle of evenings, venues and one car. Clear family rules (such as one weekday activity each plus one weekend, siblings at the same venue where possible, and fair rotation of the most demanding slots) keep the load sane and the fairness visible.

                ## Milestones
                1. A family rule for how many activities each child can do.
                2. Siblings batched into shared venues or nights where possible.
                3. The most demanding lifts shared fairly between adults.
                4. A monthly check that no child's activities always lose out.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written family rule on activity numbers exists and a monthly rebalance shows every child keeps their chosen activities for a term."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree how many activities each child may do"
                - "Group siblings into shared venues or nights where possible"
                - "Split the hardest lifts fairly between adults"
                - "Rebalance who gets the car-heavy evenings @recurring(monthly:15)"
            - name: Activities across two households
              description: |-
                ## Purpose
                When children live across two homes, clubs bring extra questions: who pays, who drives on which nights, which house the kit lives in and whether both parents get the coach's messages. Agreeing these points for activities specifically, in writing, prevents missed sessions and arguments in front of the child at the pitch side.

                ## Milestones
                1. Each activity's costs split agreed in writing.
                2. Lifts assigned by night according to which home the child is in.
                3. Kit location agreed, with duplicates for the essentials if needed.
                4. Both parents registered with each club for messages and emergencies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written activities agreement covers costs, lifts and kit, and both parents receive messages from every club."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List each activity with its cost and which home it falls on"
                - "Agree the cost split and lifts in writing"
                - "Ask each club to add both parents to messages"
                - "Send the other parent the month's activity dates and costs @recurring(monthly:28)"
            - name: Handing a teenager their own activity schedule
              description: |-
                ## Purpose
                By the early teens most young people can travel to clubs alone, manage their own kit and talk to coaches themselves, and doing so is good practice for adult life. Handing over the schedule step by step, from bus routes to paying subs, frees up parents and gives teenagers ownership of commitments they chose.

                ## Milestones
                1. Independent travel to at least one activity practised and agreed.
                2. The teen managing their own activity calendar and kit.
                3. The teen communicating directly with the coach or teacher about absences.
                4. A weekly check-in that has replaced parent management.

                ## Notes
                Agree what check-in you need for safety, such as a message on arrival, without turning it into tracking every move.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The teenager travels independently to at least one activity and manages its calendar, kit and absences for a term."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Practise the route to one activity together"
                - "Agree an arrival message for independent trips"
                - "Hand over the activity calendar and kit to your teen"
                - "Hold a short diary check-in with your teen @recurring(weekly:fri)"
            - name: On-site after-school clubs for working parents
              description: |-
                ## Purpose
                For parents who work until five or six, clubs that run on the school site straight after the bell can provide both an activity and part of the childcare. Knowing exactly what the school and nearby providers offer, how sign-ups work and whether they combine with wraparound care can cut afternoon pickups and let children do something they enjoy.

                ## Milestones
                1. Every on-site club and its finishing time listed for the term.
                2. Sign-up method, deadlines and costs recorded.
                3. On-site clubs combined with wraparound care where finish times do not fit work.
                4. A term's afternoons covered with at least one fewer early pickup a week.

                ## Notes
                School-run clubs often fill in minutes on sign-up day. Put the sign-up date in your calendar with an alarm.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "On-site clubs are booked for the term and the household needs at least one fewer early pickup each week."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the school office for this term's list of on-site clubs"
                - "Note finishing times and how each links to wraparound care"
                - "Set an alarm for the club sign-up opening"
                - "Book the clubs that fit both your child and your work hours"
            - name: Injury and concussion log for young athletes
              description: |-
                ## Purpose
                Children who play contact sports or train several times a week pick up knocks, growth-related aches and occasionally head injuries, and patterns are easy to miss when each one is handled on the touchline. A simple log of injuries, rest days and return to play, plus knowing your sport's concussion guidance, means you can give a doctor or physio an accurate history and never send a child back too soon.

                ## Milestones
                1. Your sport's national concussion and return-to-play guidance read.
                2. A log started for each child in contact or high-volume sports.
                3. Each club's first aid and head injury procedure confirmed.
                4. Every injury recorded with date, cause, advice given and return date.

                ## Notes
                Any suspected concussion needs a medical assessment, and guidance in most sports is clear that a child should not return to play the same day. Follow your clinician's advice on return.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An injury log exists for each child in contact or high-volume sport, and every injury in the last term is recorded with its return date."
                cadence: rolling
              tasks:
                - "Read your sport's concussion and return-to-play guidance"
                - "Start an injury log for each child in a contact sport"
                - "Ask each club how they handle head injuries"
                - "Review the injury log at the start of each season @recurring(quarterly)"
            - name: Supporting a child in an academy or elite pathway
              description: |-
                ## Purpose
                A child picked for an academy, regional squad or talent programme can face ten or more hours of training a week, long travel and adults who see them partly as an asset. Keeping a clear plan for training load, schooling, rest and the child's wider life, and asking the right questions of the programme, protects them whether they go all the way or, as most do, step off.

                ## Milestones
                1. The programme's hours, travel, costs, release terms and welfare arrangements in writing.
                2. A development plan agreed with your child that includes school, rest and friendships.
                3. Weekly training hours tracked across every squad and school sport.
                4. A plan discussed for what happens if the child is released or wants to stop.

                ## Notes
                Start from the **Development plan** template. Total weekly training across all teams matters more than any single programme's hours.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written development plan covers training, school and rest, and weekly training hours across all squads are logged for a term."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the programme for hours, costs, welfare and release terms in writing"
                - "Write a development plan with your child covering school and rest"
                - "Log total training hours across every squad @recurring(weekly:sat)"
                - "Talk through what happens if your child is released or wants out"
            - name: Preparing for an audition or scholarship application
              description: |-
                ## Purpose
                Specialist music and dance schools, youth orchestras, theatre companies and sport scholarships often select by audition or trial, with application deadlines months ahead and very specific requirements. A dated plan covering repertoire, references, mock auditions and logistics, agreed with the teacher, gives your child the best chance and keeps the pressure proportionate.

                ## Milestones
                1. Requirements, deadlines and fees for each audition or application listed.
                2. Repertoire or trial preparation planned with the teacher by week.
                3. At least one mock audition or practice performance done.
                4. Applications submitted and audition day logistics settled.

                ## Notes
                Talk with your child about what happens if they are not offered a place before the audition, not after. A no is common and is not the end of their music or sport.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every application is submitted by its deadline and the child has done at least one mock audition before the real one."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List each audition's requirements, deadline and fee"
                - "Plan the preparation weeks with your child's teacher"
                - "Arrange a mock audition with a friendly audience"
                - "Ask the agent to draft a checklist of the application documents and references needed"
            - name: Volunteering as a coach, team manager or committee member
              description: |-
                ## Purpose
                Most youth clubs run on a handful of parent volunteers, and when they step away the club or team can fold. Taking on a role such as team manager, assistant coach or committee treasurer means proper background checks, safeguarding and first aid training, and a realistic view of the weekly hours, so you can give the time without resenting it.

                ## Milestones
                1. A role chosen with a clear description and weekly hours agreed with the club.
                2. Background check, safeguarding course and any required coaching or first aid course done.
                3. A handover from the previous volunteer, with contacts and records.
                4. A date agreed to review whether to carry on next season.

                ## Notes
                Start from the **Meeting notes** template. Keep one note per committee meeting. Agree an end date for the role at the start; it makes stepping down far easier.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Required checks and training are complete, the role is described in writing, and a review date is set with the club."
                cadence: rolling
              tasks:
                - "Ask the club which volunteer roles need filling and their hours"
                - "Complete the background check and safeguarding course"
                - "Get a handover from the outgoing volunteer"
                - "Prepare notes for the committee meeting @recurring(monthly:10)"
            - name: Starting a children's club where none exists
              description: |-
                ## Purpose
                Sometimes the activity your children want simply is not offered nearby: no chess club at school, no girls' cricket team, no coding group within reach. Starting one with other parents is a real project involving a venue, insurance, safeguarding, a leader with the right checks and a sustainable fee, but a well set-up club can serve dozens of children for years.

                ## Milestones
                1. Demand confirmed with at least eight interested families.
                2. Venue, insurance and safeguarding policy in place, ideally through an affiliated national body.
                3. A leader with the right checks and qualifications confirmed, plus a second adult for every session.
                4. A first term of sessions run with a fee that covers costs.

                ## Notes
                Affiliating to the sport's or activity's national body usually brings template policies, insurance and coach training. It is worth the fee.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A new club runs its first full term with insurance, a safeguarding policy, a checked leader and at least eight children."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Post a short interest survey in the school or local parents' group"
                - "Contact the national body about affiliation and insurance"
                - "Find a venue and a leader with the right checks"
                - "Ask the agent to draft a one-page safeguarding policy from the national body's template for review"
---

# Kids' Clubs & Activities Schedule

This area is for parents running the after-school and weekend side of family life: swimming, football, piano, dance, Scouts, drama and everything else that fills the weekday afternoons. It starts with the foundations (an audit of what each child does, their own say in it, a free-time limit, a budget, one timetable and the forms and safeguarding checks), then the weekly and termly machinery of kit, fees, lifts and sign-ups, the skills that make you a better club parent, the decisions about switching, quitting or stepping up, the dated days like gradings, shows and away tournaments, variants for toddlers, teens, big families and two households, and finally the specialist end: elite pathways, auditions, injury logs and volunteering.

What repeats is a Sunday look at the week ahead, a kit wash on Saturdays, a monthly fees check and load check, termly re-registration and kit size checks, and a yearly review before the autumn sign-ups. The Monthly budget and bills, Habit tracker, Purchase decision, Development plan and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
