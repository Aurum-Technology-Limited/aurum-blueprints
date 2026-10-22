---
id: mental-wellbeing.mens-mental-health-check-ins
name: Men's Mental Health Check-Ins
description: "Honest check-ins men will actually do: a personal score, a small circle of mates, side-by-side conversations, men's groups and a doctor's appointment that feels doable."
category: personal
version: 1.0.0
tags: [mental-wellbeing, mens-mental-health-check-ins, everyone, men, check-ins, help-seeking, friendship, peer-support]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - person
    - habit-tracker
    - course
    - meeting-notes
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Men's Mental Health Check-Ins
          description: "Encouraging men to talk about how they are really doing, with regular check-ins, peer groups and help-seeking that feels doable."
          projects:
            - name: Personal check-in score and baseline
              description: |-
                ## Purpose
                Most men asked how they are say 'fine' by reflex, including to themselves. A score out of ten for mood, sleep, stress and how much you are holding in, taken each evening for two weeks, gives you an honest starting point and a number that is far easier to say out loud than a feeling.

                ## Milestones
                1. Four questions chosen, each scored from 0 to 10.
                2. Fourteen consecutive evenings of scores recorded.
                3. Your usual range for each question written down.
                4. A score agreed with yourself that means it is time to tell someone.

                ## Notes
                Start from the **Metrics log** template. Keep it under a minute; a longer form usually gets abandoned by day four.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A score log holding fourteen evenings of four ratings, with your usual range and a tell-someone threshold written at the top."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick four questions to score from 0 to 10, such as sleep, stress and mood"
                - "Set up a score log from the metrics log template"
                - "Score the four questions each evening for fourteen days"
                - "Write down your usual range and the score that means you tell someone"
            - name: Your three-person check-in circle
              description: |-
                ## Purpose
                Ask a man who he would ring at two in the morning if things went badly wrong and the answer is often a long pause, or just his partner. Naming three people, ideally from different parts of your life, and letting each one know they are on the list, means support exists before it is needed rather than being searched for in the middle of a bad patch.

                ## Milestones
                1. Three names written down, drawn from at least two parts of life such as family, work, sport or old friends.
                2. A phone number for each saved where you will find it quickly.
                3. Each person told, in your own words, that they are someone you would turn to.
                4. A fourth name noted in case one of the three moves away or drifts.

                ## Notes
                Start from the **Person** template, one page per name, if you like keeping notes on when you last spoke. A partner can be one of the three, but should not be the only one.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three named people from at least two parts of your life have been told they are in your circle, with their numbers saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down everyone you would feel able to ring on a bad night"
                - "Circle three names from at least two different parts of your life"
                - "Tell each of the three, by message or face to face, that they are on your list"
                - "Review whether the three names in your circle still fit @recurring(yearly)"
            - name: Your early warning signs in your own words
              description: |-
                ## Purpose
                In men, a rough patch often shows up as irritability, longer hours, more drinks, worse sleep or quietly dropping out of football rather than as sadness. Writing your own early signs, and asking someone close what they notice first, gives you a list to check against instead of waiting until it is obvious to everyone around you.

                ## Milestones
                1. A list of five to eight personal early signs, in plain words.
                2. At least one person close to you asked what they notice first when you are struggling.
                3. The signs sorted into early, middle and serious.
                4. The list saved where you will see it during your weekly check-in.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of at least five personal warning signs, sorted by seriousness and including one sign someone else noticed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List what changed in you the last time you went through a bad patch"
                - "Ask a partner or close mate what they notice first when you are not right"
                - "Sort your signs into early, middle and serious"
                - "Save the list in your phone next to your check-in score"
            - name: First honest conversation with a mate
              description: |-
                ## Purpose
                The first time is the hardest, and most men who try it find the other person relieved rather than awkward. Choosing one mate, a setting that suits you both and one true sentence to say gets that first conversation done, which makes every later one easier.

                ## Milestones
                1. One mate chosen for the first conversation.
                2. A setting picked where talking side by side is natural, such as a drive, a walk or fishing.
                3. One honest sentence about how you have really been said out loud.
                4. A short note written afterwards on how it went and whether you would do it again.

                ## Notes
                You do not need to tell the whole story. 'I've had a rough few months, to be honest' is enough to start.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One conversation held in which you told a mate honestly how you have been, with a note of how it went."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick the mate you would find easiest to be straight with"
                - "Suggest a walk, drive or pint where you will sit or move side by side"
                - "Write the one sentence you want to say and keep it in your phone"
                - "Note afterwards what went better or worse than you expected"
            - name: Booking a doctor's appointment about your mood
              description: |-
                ## Purpose
                Men see their doctor less often than women and, when they do go, tend to mention the sore back rather than the reason they really came. Booking an appointment specifically about mental health, with a short written note to hand over, makes it far less likely you leave having talked only about your knee.

                ## Milestones
                1. An appointment booked, with mental health or 'something personal' given as the reason.
                2. A half-page note listing how long you have felt this way, plus sleep, drinking and your check-in scores.
                3. The note handed over or read out at the start of the appointment.
                4. The agreed next steps and follow-up date written down afterwards.

                ## Notes
                Ask for a longer appointment if your practice offers them. You do not have to explain anything to reception beyond 'it's personal'.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An appointment about your mental health attended with a written note, and the agreed next steps and follow-up date recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an appointment and say it is about your mental health or something personal"
                - "Write half a page on how long, how bad and what has changed"
                - "Add two weeks of check-in scores to the note"
                - "Write down the next steps agreed before you drive away"
            - name: Crisis numbers saved before you need them
              description: |-
                ## Purpose
                When someone is in real trouble, nobody should be searching for a number. Saving your local emergency number, a 24-hour crisis line, a text support service and an out-of-hours medical line, in your phone and in the phones of your circle, takes ten minutes and may matter more than anything else in this area.

                ## Milestones
                1. Four numbers saved: emergency services, a 24-hour crisis line, a text service and out-of-hours medical help.
                2. The same numbers shared with your three-person circle.
                3. One line written for each on what it is for.
                4. The numbers checked once a year, since services change.

                ## Notes
                If you or a mate is in immediate danger, call emergency services. A full crisis safety plan is a bigger piece of work, worth doing separately if things have been very hard.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Emergency, crisis line, text service and out-of-hours numbers are saved in your phone and have been sent to your three-person circle."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your country's 24-hour crisis line and a text-based support service"
                - "Save emergency, crisis, text and out-of-hours numbers under one contact group"
                - "Send the numbers to the three people in your circle"
                - "Ring or text each saved service's info line to check it still works @recurring(yearly)"
            - name: What you do instead of talking
              description: |-
                ## Purpose
                Gym sessions, an extra pint, gaming until two, staying late at work or going quiet can all be ways of handling something without saying it. An honest audit of your usual moves, sorted into the ones that help and the ones that cost you, shows where talking could replace them or sit alongside them.

                ## Milestones
                1. A list of what you typically do when something is bothering you.
                2. Each habit marked as helping, neutral or costing you.
                3. The single most costly habit identified.
                4. One situation in the coming month chosen where you will talk to someone as well as, or instead of, that habit.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of your coping habits, each marked helping, neutral or costly, with one replacement conversation planned."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what you did the last three times something got to you"
                - "Mark each habit as helping, neutral or costing you"
                - "Ask someone close which of your habits they worry about"
                - "Choose one situation where you will talk to someone before reaching for the usual habit"
            - name: Support options you would actually use
              description: |-
                ## Purpose
                Plenty of men rule out help because they picture lying on a couch or crying in a circle. Listing the real options, from a doctor and talking therapy to a men's group, a text line, an online course or a workplace scheme, and marking honestly which you would use, turns 'not for me' into one or two concrete next steps.

                ## Milestones
                1. A list of at least six support routes available locally or online.
                2. Each route marked yes, maybe or no, with a reason.
                3. Cost, waiting time and format noted for every yes and maybe.
                4. One option chosen to try first, with a date beside it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shortlist of at least six support routes rated yes, maybe or no, with one chosen and a date set to try it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to list support routes for men in your area and online"
                - "Mark each route yes, maybe or no with one honest reason"
                - "Find the cost and waiting time for each yes or maybe"
                - "Pick one route to try first and put a date by it"
            - name: Weekly check-in text to two mates
              description: |-
                ## Purpose
                A two-line message on the same day each week is the easiest check-in there is, and it builds the habit before anyone needs it. Using a real question, such as 'how's your head this week, out of ten?', rather than 'alright?', gives the other person room to answer honestly.

                ## Milestones
                1. Two mates chosen and told you will be checking in weekly.
                2. A question that invites a real answer agreed between you.
                3. Eight weeks of messages sent without a gap.
                4. At least one low reply followed up with a call or a meet-up.

                ## Notes
                Start from the **Habit tracker** template. It works better both ways, so ask them to check on you too.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks of check-in messages sent to two mates, with any low reply followed up by a call."
                cadence: rolling
              tasks:
                - "Choose two mates and tell them you plan to check in every week"
                - "Agree a question that needs more than a one-word answer"
                - "Send the weekly check-in message to both mates @recurring(weekly:thu)"
                - "Ring whoever answers with a low score instead of replying by text"
            - name: Monthly walk and talk with a friend
              description: |-
                ## Purpose
                Many men find it far easier to talk walking side by side than sitting face to face across a table. A monthly walk, run or bike ride with one friend, with phones away for the first half hour, gives the conversation time to get past work and sport.

                ## Milestones
                1. A friend and a regular route agreed.
                2. The next date fixed in both calendars before you part each time.
                3. Six walks completed in six months.
                4. One topic raised on a walk that you had not mentioned to anyone else.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly walks, runs or rides with the same friend completed in six months."
                cadence: rolling
              tasks:
                - "Message a friend and suggest a monthly walk, run or ride"
                - "Pick a route of about an hour with somewhere to stop at the end"
                - "Go on the monthly walk and book the next one before you part @recurring(monthly:12)"
                - "Keep phones in pockets for the first half hour"
            - name: Sunday evening self check-in
              description: |-
                ## Purpose
                Your score log only helps if you look at it. Ten minutes on Sunday evening, scoring the week and comparing it with your usual range and warning signs, catches a slide early and turns 'I'm fine' into a decision about whether to tell someone.

                ## Milestones
                1. A Sunday evening slot in your calendar.
                2. Each week scored and compared with your usual range.
                3. A written rule for what two low weeks in a row mean you will do.
                4. Twelve consecutive Sundays completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive Sunday check-ins recorded, with a written rule for what two low weeks in a row trigger."
                cadence: rolling
              tasks:
                - "Set a Sunday evening reminder for a ten-minute check-in"
                - "Score the week and compare it with your usual range @recurring(weekly:sun)"
                - "Write the rule for what two low weeks in a row mean you will do"
                - "Look back over the month's scores for a trend @recurring(monthly:28)"
            - name: Group chat that goes beyond banter
              description: |-
                ## Purpose
                Most men's group chats run on jokes, football and photos, which is fine until someone goes quiet and nobody notices. Agreeing one small change, like a monthly scores-out-of-ten thread or a rule that anyone can say 'not great' without a wind-up, keeps the banter and adds a way in.

                ## Milestones
                1. One group chat chosen where the change would fit.
                2. The idea raised with one other member first, so it does not come from nowhere.
                3. A monthly honest thread started and answered by at least half the group.
                4. Anyone who goes silent for a month messaged privately.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly check-in threads posted in the group chat, each answered by at least half the members."
                cadence: rolling
              tasks:
                - "Pick the group chat where most of your close mates are"
                - "Run the monthly check-in idea past one other member first"
                - "Post the monthly how-are-you-really thread @recurring(monthly:5)"
                - "Message privately anyone who has gone quiet for a month"
            - name: Regular men's group attendance
              description: |-
                ## Purpose
                Peer groups for men, such as men's sheds, talking circles and walking groups, work because nobody has to explain why they came. Going regularly for three months, rather than once, is usually what it takes before you feel like a regular and start to talk.

                ## Milestones
                1. Two or three local or online men's groups found, with meeting times.
                2. One group tried at least twice.
                3. Twelve weeks of regular attendance at the group that fits best.
                4. At least one person from the group known well enough to message outside it.

                ## Notes
                Many groups have a rule that you never have to speak. Listening for the first few weeks is normal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of regular attendance at one men's group, with at least one member's number swapped."
                cadence: rolling
              tasks:
                - "Search for men's sheds, talking groups or walking groups within half an hour"
                - "Go to one group twice before deciding whether it fits"
                - "Attend your chosen men's group @recurring(weekly:tue)"
                - "Swap numbers with one regular after a session"
            - name: Monthly partner check-in on how you are really doing
              description: |-
                ## Purpose
                Partners often sense something is wrong long before it is said, and guessing is harder on both of you than being told. A short monthly conversation, at a set time and never in the middle of an argument, where you each give a score out of ten and say what would help, stops things building up.

                ## Milestones
                1. A time each month agreed with your partner.
                2. Both of you giving a score and one sentence about it.
                3. One practical thing each of you could do for the other noted.
                4. Six monthly check-ins held.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly partner check-ins held, each with both scores and one request from each person written down."
                cadence: rolling
              tasks:
                - "Ask your partner whether a monthly check-in would suit you both"
                - "Agree a time when neither of you is tired or rushing"
                - "Hold the monthly check-in and each give a score out of ten @recurring(monthly:20)"
                - "Write down one thing each of you asked for"
            - name: Check-in rota for a team or friend group
              description: |-
                ## Purpose
                In any group of eight or ten men, someone is usually having a harder time than he lets on. A light rota where each person checks on one other each week, with pairings changing monthly, means nobody slips through and nobody carries the job alone.

                ## Milestones
                1. Three or more people agreed to share the rota.
                2. Pairings set for the first month.
                3. A simple way agreed to flag a worry to the others without gossip.
                4. Three months of weekly check-ins completed by the group.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A check-in rota with at least three members has run for three months with pairings changed each month."
                cadence: rolling
              tasks:
                - "Suggest a check-in rota to two people you trust in the group"
                - "Set up the first month's pairings"
                - "Check in on this month's person @recurring(weekly:mon)"
                - "Agree how someone raises a worry without sharing private details"
            - name: Quarterly review of your warning signs
              description: |-
                ## Purpose
                Warning signs change as life changes: a new job, a new baby or a breakup brings new pressures and new ways of hiding them. Looking at your list every three months, alongside your scores, keeps it accurate and catches a slow drift that weekly checks can miss.

                ## Milestones
                1. Your warning signs list reread against three months of scores.
                2. Any new sign added and any that no longer apply removed.
                3. One person in your circle asked whether they have noticed anything.
                4. Four quarterly reviews completed in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews of your warning signs completed in twelve months, each with the list updated."
                cadence: cyclic
              tasks:
                - "Reread your warning signs alongside the last three months of scores @recurring(quarterly)"
                - "Add any new sign and strike out the ones that no longer apply"
                - "Ask one person in your circle whether they have noticed changes in you"
            - name: Annual check-up that covers your mental health
              description: |-
                ## Purpose
                A yearly check-up with your doctor is an easy place to raise mood, sleep, drinking and stress, because you are there anyway. Putting those on the list alongside blood pressure and cholesterol means the mental side gets asked about every year, not only in a crisis.

                ## Milestones
                1. A yearly check-up booked.
                2. Mood, sleep, alcohol and stress written on your list of things to raise.
                3. The year's average check-in score brought along.
                4. Anything agreed written down with a follow-up date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A yearly check-up attended for two years running, each time with mood, sleep and drinking raised and outcomes written down."
                cadence: cyclic
              tasks:
                - "Book your yearly check-up with your doctor @recurring(yearly)"
                - "Add mood, sleep, drinking and stress to your list of things to raise"
                - "Bring the year's average check-in score to the appointment"
            - name: Saying more than fine
              description: |-
                ## Purpose
                Many men work with a vocabulary of about three states: fine, tired and annoyed. Learning a dozen more precise words, such as flat, wound up, on edge, gutted or overloaded, and trying them in low-stakes conversations, makes it far easier to explain to a doctor or a mate what is actually going on.

                ## Milestones
                1. A list of twelve words for how you feel that you would actually use.
                2. Each word used at least once in your Sunday check-in.
                3. Two of them used out loud with someone else.
                4. A note on which words felt natural and which did not.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal list of twelve feeling words, with at least two used aloud in real conversations within a month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write twelve words for feelings that you would actually say out loud"
                - "Use one of the words in each Sunday check-in for a month"
                - "Try one of the words in conversation with a mate or partner"
                - "Cross off the words that felt forced and keep the rest"
            - name: Asking twice and waiting for the answer
              description: |-
                ## Purpose
                Asking 'how are you?' gets 'fine' almost every time. Asking a second time, more specifically, and then staying quiet for a few seconds is a small technique promoted by several men's mental health campaigns, and it is often the moment the real answer comes out.

                ## Milestones
                1. Two or three second questions you are comfortable asking written down.
                2. The technique tried with five different people.
                3. A note on what happened when you waited rather than filled the silence.
                4. Asking twice done without planning it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "The ask-twice technique used with five different people, with a note of what each pause led to."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write three follow-up questions that sound like you"
                - "Ask twice in your next five check-ins and count to five before speaking"
                - "Note what people said after the pause"
                - "Practise the pause in a low-stakes chat with a colleague"
            - name: Listening without fixing
              description: |-
                ## Purpose
                When a mate opens up, the instinct is to solve it: change jobs, leave her, get a solicitor. Learning to reflect back what you heard and ask what would help, before offering any fix, makes people far more likely to keep talking to you next time.

                ## Milestones
                1. Three listening habits chosen, such as summarising, asking what would help and holding back advice.
                2. A short guide or video on active listening worked through.
                3. The habits used in three real conversations.
                4. One person asked afterwards whether they felt listened to.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three listening habits written down and used in three real conversations, with feedback from one person recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read or watch a short guide on active listening"
                - "Write the three listening habits on a note in your phone"
                - "Use the habits in your next three real conversations"
                - "Ask one person whether you came across as listening or fixing"
            - name: Mental health first aid course
              description: |-
                ## Purpose
                One or two days on a mental health first aid course teaches how to spot that someone is struggling, start the conversation and point them to help, using practice scenarios rather than theory. Many workplaces, unions and sports clubs pay for places, and the certificate gives you the confidence to step in.

                ## Milestones
                1. Accredited courses near you or online compared on dates and cost.
                2. Funding from work, a union or a club asked about.
                3. The course completed and the certificate saved.
                4. Your three main takeaways written down within a week.

                ## Notes
                Start from the **Course** template. Most certificates need refreshing every few years, so note the expiry date.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An accredited mental health first aid course completed, with the certificate saved and three takeaways written down."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Find two accredited mental health first aid courses with dates"
                - "Ask your employer, union or club whether they fund places"
                - "Book a place on the course"
                - "Write your three main takeaways within a week of finishing"
            - name: Spotting when a mate is struggling
              description: |-
                ## Purpose
                Struggling men rarely say so directly; they cancel plans, drink more, make dark jokes, take risks or go quiet in the group chat. Learning the common signs, and writing down what they would look like in your own friends, means you notice sooner and have a reason to ask.

                ## Milestones
                1. A reputable guide to signs a man may be struggling read.
                2. The signs rewritten as they would show up in your own friend group.
                3. One friend you have been slightly worried about identified.
                4. That friend contacted within a week.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of struggling signs written for your own friend group, and one friend you were worried about contacted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a men's mental health charity's guide to signs someone is struggling"
                - "Rewrite the signs as they would look in your own mates"
                - "Name one friend you have been slightly worried about"
                - "Message that friend this week with a specific question"
            - name: Asking a mate directly about suicide
              description: |-
                ## Purpose
                Research and crisis services agree that asking someone directly whether they are thinking about suicide does not put the idea in their head, and often brings relief. Learning the words, what to do with each answer and which numbers to give means that if the moment comes you can ask clearly and stay with him while he gets help.

                ## Milestones
                1. A short suicide prevention training or guide completed, such as a free online course.
                2. The direct question written in words you could actually say.
                3. What to do after a yes, including staying with him and calling a crisis line or emergency services, written down in order.
                4. Your own reaction to practising the question talked through with someone you trust.

                ## Notes
                This is about getting someone to professional help, not becoming their counsellor. If someone is in immediate danger, call emergency services.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A suicide prevention training completed and a written set of steps for after a yes, starting with the crisis line and emergency number."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Complete a free online suicide prevention training session"
                - "Write the direct question in your own words and say it aloud once"
                - "Write the steps you would take after a yes, in order"
                - "Put the crisis line and emergency number at the top of those steps"
            - name: Choosing the right time and place to open up
              description: |-
                ## Purpose
                Timing matters: a mate is unlikely to open up at a loud party or with his kids listening, and far more likely in a car, on a long walk, over a shared job or late in a quiet pub. Learning which settings work for you and the people you care about turns check-ins from awkward set pieces into something that happens naturally.

                ## Milestones
                1. A list of the settings where you have had your best conversations.
                2. Three settings to avoid noted.
                3. Two upcoming plans with friends shaped to allow time side by side.
                4. A note after a month on which setting worked best.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of settings that work and settings that do not, with two plans shaped around a good setting."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Remember where your last three real conversations happened"
                - "Write three settings that work and three that do not"
                - "Shape your next two plans with mates around one of the good settings"
                - "Note after a month which setting led to the most honest talk"
            - name: How depression can look in men
              description: |-
                ## Purpose
                Depression in men is often missed because it can look like anger, irritability, overwork, risk-taking or heavier drinking rather than tearfulness. Reading about these presentations from a reliable health source helps you recognise them in yourself or someone else, and gives you words to use with a doctor.

                ## Milestones
                1. Two reliable sources on depression in men read.
                2. A short list of the signs that surprised you.
                3. Any that apply to you or someone close noted.
                4. The list taken to your doctor or a check-in conversation if any apply.

                ## Notes
                This is for recognising and asking, not diagnosing. Only a clinician can assess depression.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two reliable sources read and a written list of signs that apply to you or someone close, shared with a doctor or mate if any do."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's page on depression in men"
                - "Read one more reliable source, such as a men's health charity"
                - "List the signs that surprised you"
                - "Mark any you recognise in yourself or someone close"
            - name: Rehearsing the conversation you keep avoiding
              description: |-
                ## Purpose
                Some conversations get put off for months because the opening line feels impossible. Writing the first two sentences, saying them aloud in the car or to a voice note, and imagining the likely replies takes much of the dread out of the real thing.

                ## Milestones
                1. The conversation you have been avoiding named.
                2. Your first two sentences written.
                3. The sentences said aloud at least three times.
                4. The conversation held, or a date set for it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The avoided conversation has been held, or has a fixed date, after the opening was rehearsed aloud three times."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the conversation you have been putting off longest"
                - "Ask the agent to suggest three ways to open it, then rewrite one in your words"
                - "Say the opening aloud three times, in the car or as a voice note"
                - "Set a date by which the conversation will have happened"
            - name: Four-week alcohol and mood check
              description: |-
                ## Purpose
                Drinking is one of the commonest ways men manage stress without talking, and it tends to make low mood and sleep worse a day or two later. Logging drinks alongside your evening score for four weeks shows whether the two move together, which is worth knowing before deciding whether to cut back.

                ## Milestones
                1. Four weeks of daily drinks and scores logged.
                2. Weekly drink totals compared with your lowest-scoring days.
                3. A decision recorded: carry on, cut back or take an alcohol-free month.
                4. Your doctor told if you found it hard to cut down.

                ## Notes
                If you drink heavily every day, do not stop suddenly without medical advice, as withdrawal can be dangerous.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four weeks of drinks and mood scores logged side by side, with a written decision about drinking and the reason for it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add a drinks column to your check-in score log"
                - "Log the day's drinks next to your evening score @recurring(daily)"
                - "Compare weekly drink totals with your lowest-scoring days after four weeks"
                - "Write down your decision about drinking and the reason for it"
            - name: Deciding whether to try talking therapy
              description: |-
                ## Purpose
                Common reasons men give for not trying therapy are cost, time off work, not knowing what happens in a session and not wanting to talk to a stranger. Getting real answers to each, from your doctor, a workplace scheme or a service's own website, turns a vague 'maybe one day' into a yes or a no made on purpose.

                ## Milestones
                1. Your own reasons for hesitating written down.
                2. Each reason answered with real information on cost, waiting time and format.
                3. Evening, phone and online session options checked.
                4. A decision recorded, with a date to revisit it if the answer is not yet.

                ## Notes
                Finding and working with a specific therapist is its own piece of work once you decide to go ahead.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded yes, no or not yet on talking therapy, with each of your hesitations answered and a revisit date if needed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every reason you have for not trying therapy"
                - "Find out what free or low-cost talking therapy your health service offers"
                - "Check whether evening, phone or online sessions are available"
                - "Record your decision and a date to revisit it"
            - name: Using your employee assistance programme
              description: |-
                ## Purpose
                Employers often pay for a confidential assistance programme offering phone counselling and a handful of free sessions, and most staff never use it or even know it exists. Finding out what yours covers, and how private it is, puts a free and fast route to support in your pocket.

                ## Milestones
                1. Whether your employer has an assistance programme confirmed.
                2. What it covers, how many sessions and how it protects confidentiality noted.
                3. The phone number and any app saved.
                4. A decision made on whether to use it now or keep it in reserve.

                ## Notes
                Self-employed? Check whether a trade body, union or insurance policy offers something similar.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your assistance programme's cover, session limit and confidentiality terms noted, and its number saved in your phone."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Search the staff intranet or handbook for an assistance programme"
                - "Find out how many sessions it offers and who sees your details"
                - "Save the assistance programme number in your phone"
                - "Decide whether to call now or keep it for later"
            - name: Swapping a solo habit for a shared one
              description: |-
                ## Purpose
                Lifting alone, running alone or gaming alone can be good for you, but they rarely lead to conversations. Moving one of them into company, such as five-a-side, a running club, a climbing partner or a weekly online game with old mates, adds regular contact without anyone having to call it a check-in.

                ## Milestones
                1. One solo habit chosen to make social.
                2. A group, club or friend found to do it with.
                3. Eight weeks of the shared version done.
                4. One friendship that has grown from it noted.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Eight weeks of a formerly solo activity done with other people, with at least one new or renewed friendship from it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick one thing you usually do alone that could be done with others"
                - "Find a local club, team or friend who does the same thing"
                - "Turn up to the shared session @recurring(weekly:sat)"
                - "Suggest a drink or food after one session"
            - name: Text and online support for men who hate phoning
              description: |-
                ## Purpose
                Lots of men who would never ring a helpline will send a text at midnight. Finding a reputable text support service, a moderated online forum for men and one app or online course, and trying one of them once, means there is a route that does not depend on picking up the phone.

                ## Milestones
                1. A free text support service found and its number saved.
                2. One moderated forum for men read for a week.
                3. One reputable app or online programme tried.
                4. A note of which, if any, you would use again.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A text service, a forum and an online programme each tried or read, with a note of which you would use again."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find a free text support line in your country and save it"
                - "Read a moderated men's mental health forum for a week without posting"
                - "Try one free online programme recommended by your health service"
                - "Note which of the three you would actually use again"
            - name: Reconnecting with a mate you drifted from
              description: |-
                ## Purpose
                Friendships between men often fade after a move, a wedding or kids, with nobody falling out and nobody calling. Picking one old friend and making the first contact, then a regular one, rebuilds a relationship that already has years of trust in it.

                ## Milestones
                1. One old friend chosen.
                2. A first message sent mentioning something specific you shared.
                3. A call or meet-up held.
                4. Contact kept up monthly for six months.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One old friendship restarted, with a meet-up or call held and monthly contact kept for six months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose one friend you lost touch with but would like back"
                - "Send a message that mentions a specific shared memory"
                - "Suggest a call or meet-up within the next month"
                - "Send the old friend a message, photo or meme @recurring(monthly:16)"
            - name: Telling family about a diagnosis
              description: |-
                ## Purpose
                After a diagnosis of depression or anxiety, many men tell nobody, or only their partner, and carry the strain of keeping it hidden. Deciding who in the family to tell, how much and in what words, means the people around you can support you rather than guess.

                ## Milestones
                1. A list of family members, each marked tell now, tell later or not yet.
                2. What you want each to know, and what stays private, written down.
                3. The first conversation held.
                4. A note of how each person responded and anything they offered.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written disclosure plan for your family, with at least the first conversation held and the response noted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the family members you might tell and mark each now, later or not yet"
                - "Write what you want them to know and what stays private"
                - "Hold the first conversation with the person you trust most"
                - "Write down any support they offered so you can take them up on it"
            - name: Hosting a check-in night for your mates
              description: |-
                ## Purpose
                Barbecues, poker nights and matches at someone's house can carry more than banter if the host sets the tone. Planning one evening where you mention, early and lightly, that you have had a rough patch yourself gives everyone else permission to say the same.

                ## Milestones
                1. A date and six to ten guests confirmed.
                2. A low-key activity that keeps people side by side planned.
                3. One honest comment from you made early in the evening.
                4. Anyone who opened up followed up within a week.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An evening hosted for at least six mates, with one honest comment made by you and follow-ups sent within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a date and invite six to ten mates"
                - "Plan an activity that keeps people side by side, such as a grill or a game"
                - "Decide on one honest thing you will say about your own year"
                - "Message anyone who opened up within a week"
            - name: Men's health month walk or fundraiser
              description: |-
                ## Purpose
                Awareness campaigns such as Movember or International Men's Day in November give an easy reason to raise men's mental health at work, the club or the pub. Organising or joining a walk, challenge or fundraiser with your mates gets the subject talked about without anyone having to make a confession.

                ## Milestones
                1. An event or challenge chosen and dated.
                2. At least four mates signed up.
                3. The challenge completed and any money raised paid in.
                4. One conversation about mental health that came out of it noted.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A men's health walk, challenge or fundraiser completed with at least four mates, and any money raised paid in."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose a men's health event or challenge and its date"
                - "Ask four mates to join you"
                - "Set up a fundraising page if you are raising money"
                - "Post a short note on why it matters to you"
            - name: Hard dates in a mate's year
              description: |-
                ## Purpose
                Anniversaries of a death, the date a divorce came through, Father's Day after separation or the first Christmas alone are when men are most likely to struggle and least likely to say so. Noting the hard dates of the people in your circle and getting in touch on or before them shows you remembered, which counts for a lot.

                ## Milestones
                1. Known hard dates for your close friends and family listed.
                2. Each date in your calendar with a reminder a few days before.
                3. A message or call made on each date in the coming year.
                4. New dates added as they come up.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A calendar of hard dates for your close circle, with contact made on every date for a full year."
                cadence: cyclic
              tasks:
                - "List the hard dates you know of for your close mates and family"
                - "Put each date in your calendar with a reminder three days before"
                - "Review the list of hard dates and add new ones @recurring(yearly)"
                - "Send a short message on the day saying you are thinking of them"
            - name: The first month after a mate's big hit
              description: |-
                ## Purpose
                Redundancy, a breakup, a diagnosis or a death often brings a flurry of messages in week one and silence by week four. Planning a month of contact, with calls, a meet-up and practical help spread across it, keeps support going through the stretch when it is usually most needed.

                ## Milestones
                1. A four-week contact plan written for the mate in question.
                2. At least four touch points made, one a week.
                3. One practical offer made and followed through, such as a lift, a CV read or a meal.
                4. A check-in at week six on how he is doing.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Four weekly contacts and one practical offer delivered to a mate after a major setback, plus a week-six check-in."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a four-week plan with one contact each week"
                - "Make one practical offer, such as a lift, a meal or a CV read"
                - "Arrange a face-to-face meet-up in week two or three"
                - "Check in again at week six when others have gone quiet"
            - name: Mental health talk at work or the club
              description: |-
                ## Purpose
                Hearing a man you know say he has struggled does more than any poster. Giving a five-minute talk on World Mental Health Day, at a toolbox talk, team meeting or club dinner, with your own story kept to what you are comfortable sharing, makes it easier for others to speak up.

                ## Milestones
                1. An occasion and a slot agreed with the organiser.
                2. A five-minute outline with one personal example and where to get help.
                3. The talk given.
                4. Any follow-up conversations noted and signposted.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A five-minute talk on men's mental health given at work or a club, ending with where to get help."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your manager or club secretary for a five-minute slot"
                - "Ask the agent to help outline a five-minute talk, then add your own example"
                - "Practise the talk aloud twice"
                - "Have support numbers ready to hand out afterwards"
            - name: Dads' check-in network
              description: |-
                ## Purpose
                Fathers of young children often lose touch with friends just as sleep, money and work pressure peak. Building a small network of other dads, from the school gate, a sports club or a baby group, with a regular meet-up, gives you people who understand exactly what kind of week you are having.

                ## Milestones
                1. Three or more dads you see regularly identified.
                2. A regular meet-up started, such as a monthly breakfast or a Saturday morning run.
                3. Numbers swapped and a group chat set up.
                4. Six meet-ups held.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six dads' meet-ups held with at least three regulars and a shared group chat."
                cadence: rolling
              tasks:
                - "Name three dads you already see at the school gate or club"
                - "Suggest a monthly breakfast or Saturday run"
                - "Set up a group chat for the dads who say yes"
                - "Hold the dads' meet-up @recurring(monthly:8)"
            - name: Check-ins after separation or divorce
              description: |-
                ## Purpose
                Separated men, especially fathers who now see their children less, are at higher risk of depression and crisis while often losing the friends and routines that came with the relationship. Lining up check-ins around the hardest moments, such as handover days and empty weekends, means those gaps are not faced alone.

                ## Milestones
                1. The hardest times of your week or month identified.
                2. A named person lined up to check in at each of them.
                3. A plan with other people for each child-free weekend over two months.
                4. A support option for separated fathers found, such as a peer group or helpline.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A named check-in person for each of your hardest days, and two months of child-free weekends planned with company."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Mark the hardest days in your week, such as handovers and empty weekends"
                - "Ask one person to check in with you on each of those days"
                - "Plan the weekend with at least one social contact in it @recurring(weekly:fri)"
                - "Find a peer group or helpline for separated fathers"
            - name: Retiring from work without losing your people
              description: |-
                ## Purpose
                For many men, work supplies most of their daily contact, and retirement removes it overnight. Planning in the last year of work which colleagues to stay in touch with, which groups to join and what will fill Tuesday morning protects against the quiet isolation that often follows the leaving do.

                ## Milestones
                1. Colleagues you want to keep seeing listed and told.
                2. Two groups or activities tried before your last day.
                3. A weekly rhythm with at least three regular points of contact.
                4. An honest check-in with yourself three months after retiring.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A weekly routine with at least three regular social contacts in place within three months of retiring."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the colleagues you would genuinely miss"
                - "Try a men's shed, volunteering role or club before your last day"
                - "Plan a weekly rhythm with at least three regular contacts"
                - "Score how you are doing three months after your leaving date"
            - name: Check-ins for young men leaving home
              description: |-
                ## Purpose
                Starting college, an apprenticeship or a first job away from home is when many young men stop seeing the friends who knew them best. Agreeing check-ins with a couple of old mates and a family member, and knowing where the student or workplace support is, means a bad term does not have to be faced alone.

                ## Milestones
                1. Two old mates and one family member agreed as regular check-ins.
                2. The college or workplace wellbeing service found and saved.
                3. One new person at the new place you could talk to.
                4. An honest check-in after the first eight weeks on how things are really going.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Regular check-ins with two old mates and one family member running through the first eight weeks away."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree a weekly call or game night with two mates from home"
                - "Save the student or workplace wellbeing contact in your phone"
                - "Ask a parent, uncle or older brother to check in every couple of weeks"
                - "Score honestly how the first eight weeks have gone"
            - name: Check-ins on site, on the farm or on rotation
              description: |-
                ## Purpose
                Construction, farming, long-haul driving and fly-in fly-out work combine long hours, isolation and a get-on-with-it culture, and these jobs carry some of the highest rates of male suicide. Setting up check-ins that fit the work, like a fixed call home on rotation, a site buddy or a neighbouring farmer you ring weekly, means distance does not have to mean silence.

                ## Milestones
                1. One check-in buddy at work or nearby agreed.
                2. A fixed call time with home or a mate on working days away.
                3. Support services for your industry found, such as a construction or farming helpline.
                4. Two months of weekly buddy check-ins kept up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of weekly check-ins with a work or local buddy, and an industry support line saved."
                cadence: rolling
              tasks:
                - "Pick a buddy on site, in the driver rota or on the next farm"
                - "Agree a fixed time to call home or a mate while you are away"
                - "Find a support line for your industry and save it"
                - "Ring your check-in buddy @recurring(weekly:wed)"
            - name: Support for gay, bisexual and trans men
              description: |-
                ## Purpose
                Gay, bisexual and trans men face higher rates of depression and anxiety, and mainstream men's groups do not always feel safe or relevant. Finding inclusive groups, helplines and clinicians, and checking how a service treats queer men before you need it, makes asking for help less of a gamble.

                ## Milestones
                1. Two LGBTQ+ inclusive support services found and saved.
                2. One inclusive men's group or social group tried.
                3. Questions for checking whether a doctor or therapist is affirming written down.
                4. A trusted contact who understands your context added to your circle.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two inclusive support services saved, one inclusive group tried and screening questions for clinicians written down."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find an LGBTQ+ helpline or text service and save it"
                - "Look for an inclusive men's group or social club near you or online"
                - "Write two questions to check whether a clinician is affirming"
                - "Try one group session or social event"
            - name: Peer support for ex-forces and first responders
              description: |-
                ## Purpose
                Veterans, police officers, firefighters, paramedics and prison officers often feel only colleagues can understand what they have seen, and many will talk to a peer long before a professional. Finding the peer and welfare services built for your service, and one person from it to check in with, gives you support that does not need explaining.

                ## Milestones
                1. Welfare and peer support services for your current or former service found.
                2. One peer contact agreed for regular check-ins.
                3. Occupational health or veterans' health routes noted for when peer support is not enough.
                4. One peer meeting or event attended.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A service-specific peer support route found, one peer check-in contact agreed and one peer meeting attended."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the welfare or peer support service for your current or former service"
                - "Ask a trusted colleague or old comrade to be a check-in contact"
                - "Note the occupational or veterans' health route for when peer support is not enough"
                - "Attend one peer meeting or event"
            - name: Supporting a father, brother or son who will not talk
              description: |-
                ## Purpose
                Partners, mothers, daughters and sisters are often the ones who notice first, and the man concerned may brush off every attempt to raise it. Planning a patient approach, with low-pressure contact, one clear conversation, a practical offer and a line on when to seek urgent help, lets you stay alongside him without burning out yourself.

                ## Milestones
                1. What you have noticed written down with rough dates.
                2. One calm conversation held in a side-by-side setting.
                3. A practical offer made, such as going with him to the doctor.
                4. Your own support person identified.
                5. Crisis numbers saved in case things get worse.

                ## Notes
                Start from the **Person** template to keep dated notes on what you notice. You cannot make an adult get help, but you can make it easier, and you can call for urgent help if he is at risk.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A dated record of concerns, one conversation held, a practical offer made and your own support person named."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write down what you have noticed and roughly when it started"
                - "Plan one low-pressure conversation on a walk or drive"
                - "Offer to book or go with him to a doctor's appointment"
                - "Call or visit him for a low-key catch-up @recurring(weekly:sun)"
                - "Tell your own trusted person how you are coping"
            - name: Starting a men's talking group locally
              description: |-
                ## Purpose
                If there is no men's group within reach, starting one can be simpler than it sounds: a room, a regular time, two or three co-founders and some ground rules. Several national peer group networks offer start-up guidance, facilitator training and safeguarding policies, which saves you writing them from scratch.

                ## Milestones
                1. Two or three co-founders committed.
                2. A free or cheap venue and a fixed weekly or fortnightly time secured.
                3. Ground rules, a safeguarding policy and a signposting card agreed.
                4. The first four sessions run.
                5. A facilitation rota in place so no one person carries it.

                ## Notes
                Start from the **Meeting notes** template for organisers' notes, and keep anything personal said in sessions out of them. Agree up front what facilitators do if someone says he is at risk.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A men's talking group with ground rules and a safeguarding policy has run four sessions with a shared facilitation rota."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask two men you know whether they would co-found a talking group"
                - "Contact a national men's peer group network about start-up support"
                - "Book a venue and fix a regular time"
                - "Meet your co-facilitators to review how sessions are going @recurring(monthly:3)"
            - name: Becoming a workplace mental health champion
              description: |-
                ## Purpose
                Champions and peer listeners are colleagues trained to notice, listen and point people to help, and in male-heavy workplaces they are often the first person a man will approach. Taking on the role formally, with training and clear limits, makes you approachable without turning you into an unpaid counsellor.

                ## Milestones
                1. The role, training and time allowance agreed with your employer.
                2. Training completed.
                3. Your availability and limits made known to colleagues.
                4. A supervision or debrief arrangement for yourself in place.
                5. A record of signposting kept, with no personal details.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A recognised champion role with training completed, time allowance agreed and a quarterly debrief in place."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask HR or your manager whether a champion or peer listener role exists"
                - "Agree training, time allowance and who supports you in the role"
                - "Tell your team when and how they can find you"
                - "Debrief with your supervisor or fellow champions @recurring(quarterly)"
            - name: Welfare check-ins at a sports club
              description: |-
                ## Purpose
                Rugby, football and cricket clubs are among the few places many men gather every week, which makes them ideal for check-ins. Setting up a welfare lead, a short monthly welfare slot at training and visible support numbers turns the club into somewhere a player can admit he is struggling.

                ## Milestones
                1. The committee's agreement to a welfare role.
                2. A welfare lead and deputy named and trained.
                3. Support numbers posted in the changing room.
                4. A two-minute welfare item held at training every month of the season.
                5. The season's welfare activity reviewed at the end-of-season meeting.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A named welfare lead and deputy, support numbers on display and a monthly welfare item run for a full season."
                cadence: cyclic
              tasks:
                - "Raise a welfare lead role at the next committee meeting"
                - "Put support numbers on the changing room wall"
                - "Run a two-minute welfare item at training @recurring(monthly:14)"
                - "Review the season's welfare activity at the end-of-season meeting"
            - name: Mentoring a younger man through a hard year
              description: |-
                ## Purpose
                Young men often say they had nobody older to ask, and a man who has come through a rough patch himself can make a real difference by being consistent rather than wise. Taking on a mentee, through a formal scheme or informally through work, sport or family, means regular contact, honest stories and knowing when to point him to professional help.

                ## Milestones
                1. A mentoring scheme joined or an informal arrangement agreed.
                2. Any required background checks and training completed.
                3. A regular meeting rhythm kept for six months.
                4. Clear limits written down, including when and how to signpost to professional help.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Six months of regular mentoring meetings held, with written limits on your role and a signposting plan."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Look for a mentoring scheme through a charity, club or employer"
                - "Complete any background checks and training the scheme requires"
                - "Write down the limits of your role and when you will signpost"
                - "Meet or call your mentee @recurring(monthly:22)"
---

# Men's Mental Health Check-Ins

This area is for men who answer 'fine' by reflex, and for the partners, mates, fathers, sons and teammates who want to get past that answer. It starts with foundations (a check-in score, a three-person circle, your own warning signs, a first honest conversation and a doctor's appointment about your mood), moves through the weekly and monthly machinery of texts, walks, group chats and men's groups, then the skills of asking twice, listening without fixing and asking directly about suicide, followed by decisions about drinking, therapy and who to tell, the events worth preparing for, plans for dads, separated fathers, retirees, young men, shift and rotation workers, gay and bi men and ex-forces, and finally the work of starting groups and becoming the person others check in with.

What repeats is a Sunday self check-in, a Thursday text to two mates, a monthly walk and talk, a monthly partner check-in and group chat thread, weekly men's group attendance, a quarterly look at your warning signs and a yearly check-up that includes your mental health. The Metrics log, Person, Habit tracker, Course and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
