---
id: mental-wellbeing.generalised-anxiety-management
name: Generalised Anxiety Management
description: "Persistent worry understood and measured, a treatment route agreed with your doctor, CBT skills for uncertainty and avoidance, and a running record of what actually helps."
category: personal
version: 1.0.0
tags: [mental-wellbeing, generalised-anxiety-management, everyone, worry, cbt, gad-7, uncertainty]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - purchase-decision
    - course
    - trip
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Generalised Anxiety Management
          description: "Managing persistent worry and anxiety with CBT techniques, lifestyle changes, treatment options and tracking of what actually helps."
          projects:
            - name: Doctor's appointment about persistent worry
              description: |-
                ## Purpose
                Worry that has run on most days for six months or more, with tension, poor sleep or trouble concentrating, deserves a proper conversation with your doctor rather than another month of coping alone. An appointment can rule out physical contributors such as an overactive thyroid, a medicine side effect or heavy caffeine use, puts a name to what is happening and opens the door to treatment. Booking it is the single step that makes every other project here easier.

                ## Milestones
                1. An appointment booked with your doctor and flagged as being about anxiety.
                2. A one-page note brought along covering how long the worry has lasted, its effect on sleep, work and home, and every medicine or supplement you take.
                3. Any physical checks your doctor suggests, such as blood tests, done and the results recorded.
                4. What your doctor concluded and the agreed next step written down on the day.

                ## Notes
                If worry ever comes with thoughts of harming yourself, say so at this appointment, or contact urgent services sooner rather than waiting for it. Asking for a longer appointment is reasonable when you have a lot to cover.

                Before you start: this plan is general information to help you look after your own wellbeing. It is not medical or psychological advice and does not replace a doctor, therapist or counsellor. If you are in crisis, in danger or thinking about harming yourself, contact your local emergency number or a crisis line now.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An anxiety appointment has taken place and its outcome, including any tests ordered and the agreed next step, is written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write three lines on how long the worry has lasted and what it affects"
                - "List every medicine, supplement and caffeine source you take"
                - "Book an appointment with your doctor and say it is about anxiety"
                - "Write down the outcome and next step on the day of the appointment"
            - name: GAD-7 baseline score and symptom picture
              description: |-
                ## Purpose
                The GAD-7 is a seven-question screening questionnaire that many doctors and therapy services use to gauge how severe anxiety is, and it takes two minutes. Completing it now, alongside a short note of your physical and behavioural symptoms, gives you a starting number to compare against in three months, when it will be hard to remember how bad things were. It is a measure, not a diagnosis, so the score goes to your doctor rather than being interpreted alone.

                ## Milestones
                1. The GAD-7 completed for the past two weeks and the total recorded with the date.
                2. A list of current symptoms written: muscle tension, restlessness, sleep, irritability, concentration.
                3. A one-line rating of how much anxiety interferes with work, home and social life.
                4. The baseline shared with your doctor or therapy service.

                ## Notes
                Use the official wording from a health service website rather than a reworded app version, so later scores can be compared fairly.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated GAD-7 score and symptom list exist and have been shared with your doctor or therapy service."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the official GAD-7 questionnaire on a health service website"
                - "Complete it for the past two weeks and write down the total and date"
                - "List the physical and behavioural symptoms you notice most"
                - "Bring the score and symptom list to your next appointment"
            - name: Two-week anxiety pattern diary
              description: |-
                ## Purpose
                Generalised anxiety can feel like one constant hum, yet a fortnight of notes usually shows peaks: Sunday evenings, after certain calls, late at night, before deadlines. Three short entries a day, rating anxiety from 0 to 10 and noting what was happening, turn a vague sense of always worrying into a map of when, where and about what. That map is the raw material for your worry cycle, your goals and any therapy that follows.

                ## Milestones
                1. A diary format chosen, paper or phone, with columns for time, situation, worry topic, rating and what you did.
                2. Fourteen days of entries, at least three a day.
                3. The three most common worry topics and the two highest-rated times of day identified.
                4. A short summary written for yourself or your clinician.

                ## Notes
                Keep each entry to one line. A diary that takes ten minutes every time will be abandoned by day four.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fourteen days of diary entries exist, with a written summary naming the top three worry topics and the peak times of day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up a diary page with columns for time, situation, topic, rating and action"
                - "Set three phone reminders a day for the next fourteen days"
                - "Count the most frequent worry topics at the end of the fortnight"
                - "Write a five-line summary of what the diary showed"
            - name: Your personal worry cycle on one page
              description: |-
                ## Purpose
                Clinicians call it a formulation: a drawing of how a trigger leads to a what-if thought, how that thought brings tension and dread, and how what you do next, such as checking, avoiding or asking for reassurance, keeps the loop running. Drawing your own version from the diary shows exactly where the loop can be broken. It also makes a first therapy session faster, because you arrive with the picture already sketched.

                ## Milestones
                1. Two typical worry episodes from your diary chosen as examples.
                2. Each one broken into trigger, worry thoughts, body sensations, emotions and behaviours.
                3. Arrows drawn showing how the behaviours feed the next round of worry.
                4. Two or three points in the loop marked as the places to work on first.

                ## Notes
                Keep it to one page. If you are already seeing a therapist, build it with them rather than alone.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A one-page worry cycle based on two real episodes, with at least two intervention points marked, is written and kept."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick two typical worry episodes from your diary"
                - "Write the trigger, thoughts, sensations and actions for each"
                - "Draw arrows showing how each action fed the next worry"
                - "Circle two places in the loop you will work on first"
            - name: Caffeine, alcohol and nicotine audit
              description: |-
                ## Purpose
                Caffeine produces a racing heart and jittery restlessness that are easy to mistake for anxiety, alcohol settles nerves for an evening and raises them the next day, and nicotine withdrawal between cigarettes feels like rising tension. Counting a normal week of all three gives you and your doctor facts about how much of your anxiety is being chemically topped up, before you try changing anything.

                ## Milestones
                1. Every caffeine source counted for seven days, including tea, cola, energy drinks and pre-workout products.
                2. Alcohol units and any nicotine use recorded for the same week.
                3. Times of day noted alongside your anxiety ratings.
                4. One change chosen to test for a month, such as no caffeine after midday.

                ## Notes
                Cut caffeine gradually over a week or two; stopping abruptly can bring headaches and irritability that feel like worse anxiety. If you drink heavily every day, talk to your doctor before cutting down.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A seven-day record of caffeine, alcohol and nicotine sits alongside anxiety ratings, and one change has been chosen to test."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note every caffeinated drink you have today with its time"
                - "Record alcohol units and nicotine use for seven days"
                - "Compare intake times with your anxiety ratings"
                - "Choose one reduction to test for a month"
            - name: Avoidance and procrastination inventory
              description: |-
                ## Purpose
                Avoidance is how generalised anxiety shrinks a life quietly: the phone call left for weeks, the form never filled in, the trip turned down, the decision handed to someone else. Listing what you avoid or put off, and rating how anxious each would make you, shows the real cost of the worry and gives a ready-made ladder for the weekly avoidance steps later in this area.

                ## Milestones
                1. At least fifteen avoided tasks, places, conversations or decisions listed.
                2. Each one rated 0 to 10 for how anxious facing it would feel.
                3. Each one marked with what avoiding it costs: money, time, relationships or opportunities.
                4. The list sorted from easiest to hardest.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ranked list of at least fifteen avoided items, each with an anxiety rating and a cost, is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List ten things you have been putting off because they make you uneasy"
                - "Add five larger things you have given up or turned down"
                - "Rate each one from 0 to 10 for expected anxiety"
                - "Sort the list from easiest to hardest"
            - name: Safety behaviour and reassurance inventory
              description: |-
                ## Purpose
                Most people with generalised anxiety have small habits that feel protective: texting a partner to check they arrived, rereading an email four times, researching every purchase, asking others whether something will be fine. Each one brings brief relief and teaches the brain that the danger was real. Writing them down, with how often they happen, is the starting point for cutting them back.

                ## Milestones
                1. Every checking, reassurance-seeking and over-preparing habit you can spot listed.
                2. A rough count of how often each happens in a typical day or week.
                3. The relief each one gives, and how long it lasts, noted.
                4. Two habits chosen as the first to reduce.

                ## Notes
                People close to you often see these habits more clearly than you do. Ask one of them what they notice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written list of safety behaviours with estimated frequencies exists, and two have been chosen to reduce first."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every way you check, double-check or seek reassurance"
                - "Ask someone close to you which of these habits they notice"
                - "Estimate how often each happens in a normal week"
                - "Pick the two habits you will reduce first"
            - name: Three goals for life with less worry
              description: |-
                ## Purpose
                Aiming to stop worrying sets you up to fail, because some worry is normal and useful. Goals that name what you would do if anxiety had less say, such as booking a holiday without weeks of research, going to bed without checking the locks three times, or applying for the promotion, give treatment a direction and give you a way to tell whether it is working.

                ## Milestones
                1. Three goals written as things you would do, not feelings you would stop having.
                2. Each goal rated 0 to 10 for how close you are today.
                3. A review date set for each goal.
                4. The goals shared with your doctor or therapist if you are seeing one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three behaviour-based goals are written down, each with a current rating and a review date."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down what you would do differently if worry had less say"
                - "Turn the three most important into specific, observable goals"
                - "Rate how close you are to each one today"
                - "Put the review date for each goal in your calendar"
            - name: Telling one trusted person about your anxiety
              description: |-
                ## Purpose
                Generalised anxiety is often hidden well, so friends and family see someone capable and have no idea how much effort that takes. Telling one trusted person what is happening, and what kind of support you want, eases the strain of keeping it secret and means someone can notice when things slide. It is also the moment to agree that they will stop offering endless reassurance, if that has become part of the problem.

                ## Milestones
                1. One person chosen who is reliable and not a source of extra worry.
                2. A short explanation prepared of what anxiety is like for you.
                3. The conversation held, including what helps and what does not.
                4. A regular catch-up agreed.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One trusted person knows about your anxiety, and a regular catch-up with them is in the calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose the person you most trust to keep it private"
                - "Write three sentences explaining what your anxiety is like"
                - "Arrange a time to talk without distractions"
                - "Meet or call them for an unhurried catch-up @recurring(monthly:16)"
            - name: Choosing a first treatment step with your doctor
              description: |-
                ## Purpose
                Most health services use stepped care for generalised anxiety: information and self-help first, then guided self-help or groups, then individual CBT or applied relaxation, with medication offered as an option at several points. Knowing the steps before you choose means you can say what you prefer, talking therapy, medication or both, and why. The decision belongs to you and your clinician together.

                ## Milestones
                1. The treatments your local health service offers for generalised anxiety listed.
                2. Current waiting times for each found out.
                3. Your preferences and practical limits written down: time, cost, travel and past experience.
                4. A first step agreed with your doctor and recorded with a start date.

                ## Notes
                Treatment options and their order vary between countries and services. Your doctor's guidance takes precedence over any general description.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A first treatment step for generalised anxiety has been agreed with your doctor and written down with its expected start date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up which anxiety treatments your local health service offers"
                - "Find the current waiting time for each option"
                - "Write your preferences and practical limits on one page"
                - "Agree a first step with your doctor and note the start date"
            - name: Monthly GAD-7 score log
              description: |-
                ## Purpose
                Anxiety improves unevenly, and one bad week can make months of progress feel like nothing. Repeating the GAD-7 on the same day each month and keeping the scores in one place shows the real trend, gives your clinician something concrete at reviews, and warns you early if a treatment is not working or things are drifting back.

                ## Milestones
                1. A log with date, score and a one-line note for each month.
                2. The baseline score entered as the first row.
                3. Six monthly scores recorded.
                4. The trend discussed at your next review.

                ## Notes
                Start from the **Metrics log** template. Look at the direction over three months rather than reacting to any single score, and let your clinician interpret the numbers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least six monthly GAD-7 scores are logged with notes and have been reviewed with a clinician."
                cadence: rolling
              tasks:
                - "Create a GAD-7 log from the metrics log template"
                - "Enter your baseline score as the first row"
                - "Complete the GAD-7 and log the score with a one-line note @recurring(monthly:9)"
                - "Bring the last three months of scores to each review"
            - name: Sunday evening anxiety review
              description: |-
                ## Purpose
                Fifteen minutes at the end of the week to look back catches patterns before they set in: the avoided task that is now overdue, the new worry topic, the exercise that slipped. It also means the good weeks get noticed, which an anxious mind tends to skip. Over a few months the reviews become the most useful record you have of what moves your anxiety.

                ## Milestones
                1. A fixed fifteen-minute weekly slot in the calendar.
                2. Four review questions settled: what went well, what I avoided, what I worried about most, what I will try next week.
                3. Eight consecutive weekly reviews completed.
                4. One pattern spotted across the reviews and acted on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly reviews are written, with at least one pattern identified and one change made because of it."
                cadence: rolling
              tasks:
                - "Write the four review questions at the top of a single page"
                - "Block fifteen minutes on Sunday evening for the review"
                - "Answer the four review questions for the week @recurring(weekly:sun)"
                - "Read back over eight reviews and note one pattern"
            - name: What actually helps experiment log
              description: |-
                ## Purpose
                Advice for anxiety is endless, and without a record it is impossible to know whether the breathing app, the earlier bedtime or the cut in coffee made any difference. Treating each strategy as a four-week experiment, with ratings before and after, builds a personal list of what works for you and what can be dropped without guilt.

                ## Milestones
                1. A log with columns for strategy, start date, how often you did it, and anxiety before and after.
                2. Each new strategy run for at least four weeks before judging it.
                3. A keep, adjust or drop decision recorded for every strategy tried.
                4. A short list of proven strategies kept at the front of the log.

                ## Notes
                Change one thing at a time where you can. Starting three new things in the same month makes it impossible to tell which one helped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "At least three strategies have each been tested for four weeks, with a recorded keep, adjust or drop decision for each."
                cadence: rolling
              tasks:
                - "Set up an experiment log with before and after rating columns"
                - "Choose the first strategy to test and write its start date"
                - "Score the month's experiments and record keep, adjust or drop @recurring(monthly:23)"
                - "Copy proven strategies to a short list at the front of the log"
            - name: Aerobic exercise routine for anxiety
              description: |-
                ## Purpose
                Regular aerobic exercise is one of the better-supported lifestyle measures for anxiety, and it doubles as practice at feeling a fast heart and breathlessness without any danger attached. Two or three sessions a week of brisk walking, cycling, swimming or running, kept up for three months, is a realistic test of how much it helps you.

                ## Milestones
                1. Two activities chosen that fit your week, budget and fitness.
                2. Fixed session days set in the calendar.
                3. Twelve weeks of sessions logged with anxiety rated before and after.
                4. A decision made on which sessions to keep.

                ## Notes
                Start from the **Habit tracker** template. If you have a heart condition or have been inactive for a long time, check with your doctor before starting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of at least two aerobic sessions a week are logged with before and after anxiety ratings."
                cadence: rolling
              tasks:
                - "Choose two aerobic activities you could start this week"
                - "Set up a habit tracker for your sessions"
                - "Do a thirty-minute aerobic session and rate anxiety before and after @recurring(weekly:mon,thu)"
                - "Review twelve weeks of ratings and decide which sessions to keep"
            - name: Weekly uncertainty experiments
              description: |-
                ## Purpose
                Many people with generalised anxiety find not knowing harder to bear than bad news, and much of their worry is an attempt to make uncertain things certain. Choosing one small act of deliberate uncertainty each week, such as ordering a dish you have never tried, sending an email without rereading it or letting someone else plan the evening, and noting what happened, slowly retrains how threatening uncertainty feels.

                ## Milestones
                1. A list of twenty small uncertainty experiments, from easy to harder.
                2. One experiment done each week, with your prediction and the outcome recorded.
                3. Ten weeks of experiments completed.
                4. A note on how your predictions compared with what actually happened.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten weekly uncertainty experiments are recorded, each with a prediction and an outcome."
                cadence: rolling
              tasks:
                - "Write a list of twenty small things you usually make certain"
                - "Sort the list from easiest to hardest"
                - "Do one uncertainty experiment and record prediction and outcome @recurring(weekly:tue)"
                - "Compare predictions with outcomes after ten weeks"
            - name: Weekly step on the avoidance list
              description: |-
                ## Purpose
                Avoided tasks grow heavier the longer they wait, and each one dodged confirms that it was too much to face. Taking one item a week from your avoidance inventory, starting near the easy end, and doing it even while anxious, steadily shrinks the backlog and the background dread that comes with it.

                ## Milestones
                1. The ranked avoidance inventory kept somewhere visible.
                2. One item done each week for twelve weeks.
                3. Anxiety before and after recorded for each item.
                4. At least three items from the harder half of the list completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve items from the avoidance list are completed, including at least three from the harder half."
                cadence: rolling
              tasks:
                - "Pick the easiest item on your avoidance list for this week"
                - "Block a specific time in your calendar to do it"
                - "Complete one avoided item and note anxiety before and after @recurring(weekly:sat)"
                - "Move to the harder half of the list once the easy items are done"
            - name: Daily reassurance and checking tally
              description: |-
                ## Purpose
                Reassurance seeking and checking feel like solutions, yet each one makes the next urge stronger. Counting them for a few weeks, then cutting the count by small planned steps, is a straightforward way to break the cycle, and the tally itself often weakens the habit because it makes the automatic visible.

                ## Milestones
                1. The two habits from your safety behaviour inventory chosen for tracking.
                2. A daily tally kept for one week to set a baseline.
                3. A weekly reduction target set, such as one fewer check a day each week.
                4. The daily count down to half of the baseline.

                ## Notes
                Tell the people you usually ask for reassurance what you are doing, so they can respond kindly without answering the question.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The daily count of the two chosen reassurance or checking habits is half of the baseline week's average."
                cadence: rolling
              tasks:
                - "Choose the two checking or reassurance habits you will track"
                - "Keep a tally in your phone notes for one baseline week"
                - "Set this week's reduction target for each habit"
                - "Record the day's reassurance and checking count @recurring(daily)"
            - name: Minimum plan for high-anxiety days
              description: |-
                ## Purpose
                On the worst days anxiety makes everything feel urgent and nothing feel possible, and whole days can disappear into worry. A short written plan for those days, with the three things that must happen, the things that can wait and the one or two strategies that reliably take the edge off, gives you something to follow when thinking clearly is hard.

                ## Milestones
                1. The signs that a day is a high-anxiety day written down.
                2. Three essentials listed for those days: food, one necessary task, one contact.
                3. Two strategies from your experiment log that help most on bad days added.
                4. The plan kept on your phone and on paper.

                ## Notes
                This plan is for days that are hard but safe. If you feel at risk of harming yourself, use a crisis plan or contact emergency services.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page high-anxiety day plan exists on paper and on your phone and has been used at least once."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the signs that tell you a day is going to be hard"
                - "List the three essentials for a high-anxiety day"
                - "Add the two strategies that help you most on bad days"
                - "Save the plan on your phone and stick a copy inside a cupboard door"
            - name: Appointment-ready anxiety summary
              description: |-
                ## Purpose
                Appointments are short, and anxious minds often go blank or spend the time on the most recent worry. A one-page summary, refreshed monthly, with your latest scores, what you have tried, any changes or side effects and the two questions you most want answered, means every appointment starts from facts rather than memory.

                ## Milestones
                1. A one-page summary layout with sections for scores, strategies, changes and questions.
                2. The summary filled in from your existing logs.
                3. The page refreshed each month.
                4. The summary brought to and used at two appointments.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An up-to-date one-page summary has been brought to and used at two consecutive anxiety appointments."
                cadence: rolling
              tasks:
                - "Create a one-page summary with sections for scores, strategies, changes and questions"
                - "Fill it in from your GAD-7 log and experiment log"
                - "Ask the agent to condense the month's notes into the summary @recurring(monthly:2)"
                - "Send the summary to your clinician before your next appointment"
            - name: Quarterly anxiety plan review
              description: |-
                ## Purpose
                Every three months is a sensible point to step back from the weekly detail and ask bigger questions: is treatment working, are the goals still right, which routines are worth the effort, and what needs to change. Holding the review on a fixed date stops a slow drift back into old patterns from going unnoticed.

                ## Milestones
                1. The quarter's GAD-7 trend, goal ratings and experiment log gathered.
                2. Each goal re-rated and adjusted if needed.
                3. Routines that have stopped helping dropped and one new one added.
                4. A note of decisions for the next quarter written.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four quarterly reviews are recorded over a year, each with goal ratings and decisions for the next quarter."
                cadence: cyclic
              tasks:
                - "Put the quarterly review dates in your calendar for the next year"
                - "Gather the quarter's GAD-7 scores, goal ratings and experiment notes"
                - "Hold the quarterly review and write decisions for the next quarter @recurring(quarterly)"
                - "Drop one routine that no longer earns its time"
            - name: How generalised anxiety keeps itself going
              description: |-
                ## Purpose
                Understanding the mechanics of generalised anxiety, why worry feels useful, how it hops from topic to topic, why reassurance and avoidance backfire, and how the body's alarm system works, takes some of the fear out of the symptoms themselves. A few hours with a good evidence-based self-help book or a health service guide is often the first piece of homework any CBT therapist would set.

                ## Milestones
                1. One evidence-based guide or self-help book on generalised anxiety chosen.
                2. The chapters on how worry is maintained read.
                3. The fight or flight response explained in your own words.
                4. Three points from the reading that fit your experience written down.

                ## Notes
                Choose material based on cognitive behavioural therapy for generalised anxiety disorder, ideally recommended by a health service or professional body.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three written points connect the reading on how worry is maintained to your own experience."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your doctor or library for a recommended CBT self-help book on anxiety"
                - "Read the chapters on how worry and anxiety are maintained"
                - "Write the fight or flight response in your own words"
                - "Note three points that match your experience"
            - name: Sorting practical worries from hypothetical ones
              description: |-
                ## Purpose
                Some worries are about real problems you can act on today, like an unpaid bill or a conversation you need to have. Others are about things that have not happened and may never happen, such as what if I get ill or what if they leave. The two need opposite responses: problems need solving, while hypothetical worries need a different kind of handling. Sorting them quickly is a core skill in CBT for generalised anxiety.

                ## Milestones
                1. The difference between practical and hypothetical worries understood with your own examples.
                2. Twenty worries from your diary sorted into the two kinds.
                3. The proportion of each worked out.
                4. A sorting question written to ask yourself in the moment, such as can I act on this today.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty worries from your diary are sorted into practical and hypothetical, with the split recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read an explanation of practical versus hypothetical worries"
                - "Sort twenty worries from your diary into the two kinds"
                - "Work out what share of your worries are hypothetical"
                - "Write a one-line sorting question to use in the moment"
            - name: Understanding intolerance of uncertainty
              description: |-
                ## Purpose
                Researchers have found that finding uncertainty hard to tolerate is one of the strongest drivers of generalised anxiety, more than the content of any single worry. Learning how this shows up for you, in seeking information, checking, procrastinating or avoiding anything new, explains why solving one worry only makes room for the next, and it underpins the weekly uncertainty experiments.

                ## Milestones
                1. The idea of intolerance of uncertainty read about in a reliable clinical source.
                2. Five ways you try to get certainty listed.
                3. Five ways you avoid uncertain situations listed.
                4. A short personal statement written about what uncertainty means to you.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten of your own certainty-seeking and uncertainty-avoiding behaviours are listed alongside a short personal statement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a clinical self-help chapter on intolerance of uncertainty"
                - "List five ways you try to make things certain"
                - "List five ways you avoid situations with unknown outcomes"
                - "Write a paragraph on what uncertainty feels like for you"
            - name: Questioning your beliefs about worry
              description: |-
                ## Purpose
                People who worry a lot usually hold two sets of beliefs about it at once: that worry helps (it keeps me prepared, it shows I care, it stops bad things happening) and that worry is dangerous (it will make me ill, I will lose control). Both keep the worry going. Writing them down and weighing the evidence for each, an approach used in cognitive and metacognitive therapy, often loosens worry's grip more than arguing with individual worries.

                ## Milestones
                1. Your beliefs that worry helps written down.
                2. Your beliefs that worry is harmful or uncontrollable written down.
                3. Evidence for and against each belief noted.
                4. How strongly you hold each belief rated from 0 to 100, before and after.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each written belief about worry has evidence for and against it and a before and after belief rating."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every way you think worrying helps you"
                - "Write down every way you fear worrying could harm you"
                - "Note the evidence for and against each belief"
                - "Rate how strongly you hold each belief before and after"
            - name: Applied relaxation through to rapid relaxation
              description: |-
                ## Purpose
                Applied relaxation is a structured technique listed as a treatment for generalised anxiety in several national clinical guidelines. Over roughly ten to twelve weeks you learn to relax deeply, then faster, then in under a minute in everyday situations, and finally to use it the moment you notice the first signs of worry. It works best with daily practice during the learning stages, ideally guided by a trained therapist.

                ## Milestones
                1. Your earliest physical signs of anxiety listed, such as a tight jaw or shallow breathing.
                2. Daily practice logged through the long, shortened and cue-controlled stages.
                3. Rapid relaxation achieved in under a minute in ordinary situations.
                4. The skill used in real worrying moments at least ten times and noted.

                ## Notes
                Ask whether your local service offers applied relaxation with a therapist. Learning it alone from a reputable guide is possible but usually slower.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Rapid relaxation can be done in under a minute and has been used in at least ten real worrying moments, all logged."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your doctor or therapy service whether applied relaxation is offered locally"
                - "List the first physical signs you notice when worry starts"
                - "Practise the current stage of applied relaxation and log it @recurring(daily)"
                - "Use rapid relaxation in a real worrying moment and note the result"
            - name: Anxious prediction testing log
              description: |-
                ## Purpose
                Generalised anxiety runs on predictions: the meeting will go badly, the results will be bad, they are annoyed with me. Writing each prediction down before the event, with how confident you are, and checking it afterwards builds a personal record of how often the feared outcome happens and how well you coped when something did go wrong.

                ## Milestones
                1. A log with columns for prediction, confidence, what happened and how you coped.
                2. Thirty predictions recorded over a month.
                3. The proportion that came true worked out.
                4. For those that came true, a note of how you coped.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Thirty anxious predictions are logged and checked against outcomes, with the proportion that came true calculated."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set up a prediction log with columns for prediction, confidence, outcome and coping"
                - "Write tomorrow's main worry as a specific prediction"
                - "Check each prediction once the event has passed"
                - "Count how many of thirty predictions came true"
            - name: Acceptance-based approach to anxious thoughts
              description: |-
                ## Purpose
                Trying hard not to worry tends to backfire, and some people get more from acceptance-based approaches, which teach you to notice worry, let it be there and keep doing what matters. Working through an acceptance-based self-help programme for anxiety over six weeks gives you a second set of tools alongside questioning thoughts, and shows which style suits you.

                ## Milestones
                1. An acceptance-based self-help book or course for anxiety chosen.
                2. Two short noticing exercises practised regularly for six weeks.
                3. Three values-based actions taken while anxiety was present.
                4. A note on whether this approach suits you better or worse than questioning thoughts.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six weeks of acceptance-based practice are completed, with three values-based actions and a written comparison of approaches."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose an acceptance-based self-help book or course for anxiety"
                - "Practise one noticing exercise when a worry starts this week"
                - "Take one action that matters to you while anxiety is present"
                - "Compare this approach with thought questioning in your experiment log"
            - name: Comparing guided self-help programmes for anxiety
              description: |-
                ## Purpose
                Guided self-help, a structured CBT course in a book or online with short check-ins from a practitioner, is a first-line option for generalised anxiety in many services, and some are free through health services, employers or insurers. Comparing two or three on evidence, cost, support and weekly time stops you paying for an app that is mostly breathing sounds.

                ## Milestones
                1. Programmes offered free through your health service, employer or insurer listed.
                2. Two or three shortlisted with evidence base, cost, practitioner support and weekly time needed.
                3. Each checked for whether it is designed for generalised anxiety rather than general stress.
                4. One chosen and access arranged.

                ## Notes
                Start from the **Purchase decision** template. Prefer programmes recommended by a health service or evaluated in published trials.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One guided self-help programme for generalised anxiety is chosen against written criteria, and access is arranged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check what guided self-help your health service or employer offers free"
                - "Shortlist three programmes designed for generalised anxiety"
                - "Compare evidence, cost, support and weekly time for each"
                - "Sign up for the programme you chose"
            - name: Working through a guided CBT self-help programme
              description: |-
                ## Purpose
                Guided CBT courses for anxiety typically run for six to eight weeks, and the benefit comes almost entirely from doing the exercises between modules, not from reading them. Treating the course like a short evening class, with fixed times, completed worksheets and a GAD-7 before and after, makes it far more likely you finish and gain from it.

                ## Milestones
                1. A fixed weekly slot booked for each module.
                2. Every module completed with its exercises done.
                3. Practitioner check-ins attended or answered.
                4. GAD-7 scores from before and after the course compared.

                ## Notes
                Start from the **Course** template.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every module of a guided CBT programme is completed, with GAD-7 scores from before and after recorded side by side."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Book a weekly slot in your calendar for each module"
                - "Complete module one and its exercise this week"
                - "Attend each practitioner check-in or reply to their messages"
                - "Compare your GAD-7 scores from before and after the course"
            - name: Self-referral to a talking therapy service
              description: |-
                ## Purpose
                In many places you can refer yourself for psychological therapy for anxiety without waiting for a doctor's letter, and services often assess quickly by phone. Completing the referral now, with your GAD-7, diary summary and goals to hand, gets you onto the waiting list sooner and makes the assessment call shorter and more useful.

                ## Milestones
                1. The local talking therapy service and its self-referral route found.
                2. The referral form completed with your scores and goals.
                3. The assessment call or appointment attended.
                4. The treatment offered and its expected start date recorded.

                ## Notes
                If self-referral is not available where you live, ask your doctor for a referral, or look for accredited therapists who list CBT for generalised anxiety.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A therapy referral for anxiety has been submitted, and the outcome of the assessment, with an expected start date, is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search for your local talking therapy service and its self-referral page"
                - "Gather your GAD-7 score, diary summary and goals"
                - "Complete and submit the referral form"
                - "Record the treatment offered and expected start date after assessment"
            - name: Questions to bring to a medication discussion
              description: |-
                ## Purpose
                Medication is offered for generalised anxiety in many health systems, sometimes alone and often alongside therapy, and people frequently leave the appointment unsure what they agreed to. Preparing questions in advance, about how long it takes to work, likely side effects, how long you would take it and how stopping works, turns a hurried decision into an informed one.

                ## Milestones
                1. A written list of questions about benefits, side effects, timescale and stopping.
                2. Your current medicines, supplements and alcohol use listed for the prescriber.
                3. The discussion held and the answers written down.
                4. A decision made with your prescriber, including a review date if you start.

                ## Notes
                This project prepares the conversation only. Once you start a medicine, follow your prescriber's plan for reviews and any changes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of answered questions and a recorded decision exist, with a review date if medication was started."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your questions about benefits, side effects, timescale and stopping"
                - "List every medicine and supplement you take for the prescriber"
                - "Write down the answers during or straight after the appointment"
                - "Record the decision and any review date"
            - name: Cutting back on over-preparation
              description: |-
                ## Purpose
                Over-preparing is a quiet form of worry: rehearsing a five-minute phone call for an hour, packing three days early, scripting a routine meeting. It costs hours each week and teaches you that things only went well because you prepared so hard. Setting a deliberate preparation limit for ordinary tasks, and seeing what happens, tests that belief directly.

                ## Milestones
                1. Five tasks you routinely over-prepare for listed, with the time you spend now.
                2. A reasonable time limit set for each.
                3. Each task done within its limit at least three times.
                4. Outcomes compared with what you predicted.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Five routinely over-prepared tasks have each been done within a set time limit at least three times, with outcomes noted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List five ordinary tasks you over-prepare for and how long you spend"
                - "Set a time limit for each that a relaxed person might use"
                - "Do one task within its limit and note how it went @recurring(weekly:thu)"
                - "Compare outcomes with what you expected after a month"
            - name: Everyday decisions without endless research
              description: |-
                ## Purpose
                Choosing a toaster, a restaurant or a holiday can take days when every option carries a what-if, and the delay becomes a worry of its own. A research limit for small and medium decisions, a fixed number of options and a deadline to decide, builds practice at acting on good-enough information, a skill that carries over to bigger choices.

                ## Milestones
                1. A personal rule written, for example three options and one evening for decisions under a set amount.
                2. Five real decisions made under the rule.
                3. Satisfaction with each decision rated a week later.
                4. The rule adjusted based on the results.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Five real decisions are made under a written research limit, each rated for satisfaction a week later."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a research limit rule for small and medium decisions"
                - "Apply the rule to the next decision you face this week"
                - "Rate how happy you are with each decision a week later"
                - "Adjust the rule after five decisions"
            - name: Replacing the evening drink as a way to settle
              description: |-
                ## Purpose
                A glass or two of wine to switch off the worry is one of the most common ways people manage anxiety on their own, and it often makes the next day, and the night's sleep, worse. Swapping the drink for another settling routine and counting drink-free evenings shows whether alcohol has been quietly feeding the problem it was meant to solve.

                ## Milestones
                1. Current evening drinking and next-morning anxiety recorded for a week.
                2. Two alternatives chosen for the time you would usually drink, such as a walk or a bath.
                3. Drink-free evenings counted each week for six weeks.
                4. Morning anxiety compared before and after.

                ## Notes
                If you drink every day or need a drink to stop feeling shaky, speak to your doctor before cutting down, as stopping suddenly can be unsafe.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six weeks of drink-free evening counts are recorded, with morning anxiety compared before and after."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Note tonight whether you drink and how anxious you feel tomorrow morning"
                - "Choose two alternatives for the time you would normally drink"
                - "Count the week's drink-free evenings and compare with last week @recurring(weekly:mon)"
                - "Compare morning anxiety ratings after six weeks"
            - name: Planning around a known high-worry week
              description: |-
                ## Purpose
                Some weeks are predictably hard: waiting for test results, a house sale completing, a child's first week at school, a restructure at work. Planning them in advance, with what you can control, the support you will ask for, the routines you will protect and how you will handle the waiting, stops the dread beforehand from becoming its own crisis.

                ## Milestones
                1. The event, its date and the specific worries about it written down.
                2. Practical tasks within your control listed and scheduled.
                3. Protected routines for the week chosen: sleep, exercise, one contact a day.
                4. A short review written after the week of what helped.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written plan for a known high-worry week was followed, and a short review of what helped was written afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the coming event and the worries attached to it"
                - "List the practical tasks you can do in advance and schedule them"
                - "Choose three routines you will protect during that week"
                - "Write a short review the week after"
            - name: Travel planning without the worry spiral
              description: |-
                ## Purpose
                Holidays can turn into weeks of anticipatory worry about delays, illness, lost passports and things going wrong at home. Planning a trip with deliberate limits, a set planning window, sensible precautions done once and a list of what-ifs you will not research, lets you have the break and practise tolerating uncertainty at the same time.

                ## Milestones
                1. The trip booked within a set decision deadline.
                2. Essential precautions done once: insurance, documents, home arrangements.
                3. A list written of what-ifs you have chosen not to plan for.
                4. The trip taken and a note made of which worries came true.

                ## Notes
                Start from the **Trip** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip has been planned within set time limits and taken, with a note comparing the worries before it against what happened."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set a deadline for choosing and booking the trip"
                - "Do the essential precautions once and tick them off the trip list"
                - "Write the what-ifs you will deliberately not research"
                - "Note after the trip which worries actually happened"
            - name: Six-month anxiety progress review
              description: |-
                ## Purpose
                Six months after starting this area is a natural point to take stock: whether scores have moved, which goals have shifted, what treatment has achieved and what still feels stuck. Holding it as a dated event, ideally with your clinician, prevents months of steady effort ending without anyone deciding what comes next.

                ## Milestones
                1. Baseline and latest GAD-7 scores compared.
                2. Each of your three goals re-rated against the start.
                3. Strategies that worked and those that did not listed.
                4. Next steps decided: continue, change treatment or move into maintenance.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A dated six-month review compares baseline and current GAD-7 scores and goal ratings, and records a decision on next steps."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a review appointment with your clinician near the six-month mark"
                - "Put baseline and current GAD-7 scores side by side"
                - "Re-rate each of your three goals"
                - "Write the decision on next steps"
            - name: Returning to something anxiety made you give up
              description: |-
                ## Purpose
                Little by little, generalised anxiety takes things away: the evening class, motorway driving, travelling alone, applying for jobs. Choosing one thing you have given up and planning a return to it, in steps and with dates, turns progress on worry into something visible in your life rather than only in your scores.

                ## Milestones
                1. One thing you have given up chosen as the target.
                2. Three or four steps planned from first contact to full return.
                3. Each step completed with its anxiety rating noted.
                4. The activity done in full at least twice.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An activity given up because of anxiety has been done in full at least twice, with each step towards it recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose one activity anxiety has made you give up"
                - "Break the return into three or four steps"
                - "Put a date in the calendar for the first step"
                - "Note how each step felt compared with your prediction"
            - name: Annual anxiety check-in with your doctor
              description: |-
                ## Purpose
                Once anxiety is better managed it is easy to drop out of contact with services altogether, and then a relapse starts from scratch. A yearly check-in, with your GAD-7 trend and a short summary, keeps your record current, gives a chance to review any medication and makes it easy to get help quickly if things slip.

                ## Milestones
                1. A yearly check-in appointment booked.
                2. The year's GAD-7 trend and summary sent beforehand.
                3. Any changes to treatment or medication recorded.
                4. The date of the next check-in agreed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual anxiety check-in has taken place using the year's scores, and the next one is in the calendar."
                cadence: cyclic
              tasks:
                - "Ask your practice how to book a yearly anxiety check-in"
                - "Prepare the year's GAD-7 trend and a five-line summary"
                - "Book the annual anxiety check-in with your doctor @recurring(yearly)"
                - "Record any treatment changes agreed"
            - name: Parenting while managing generalised anxiety
              description: |-
                ## Purpose
                Parents with generalised anxiety often worry intensely about their children's safety, health and future, and children pick up anxious checking and avoidance quickly. Letting children take age-appropriate risks, and modelling calm uncertainty out loud, protects them from inheriting the same habits and eases your own worry loop at the same time.

                ## Milestones
                1. The ways your worry shows up around your children listed honestly.
                2. One age-appropriate independence step per child agreed, with your co-parent if you have one.
                3. Weekly small steps in letting go recorded for two months.
                4. One phrase practised for modelling uncertainty, such as I am not sure, and that is fine.

                ## Notes
                Parenting books on anxious children often include a chapter for anxious parents, and are worth reading even if your children are not anxious.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Each child has taken at least four age-appropriate independence steps over two months, recorded in a simple log."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List three ways your worry affects how you parent"
                - "Choose one age-appropriate independence step for each child"
                - "Let each child take one small independent step and note how it went @recurring(weekly:wed)"
                - "Practise giving an uncertain answer out loud, calmly"
            - name: Supporting a partner who worries constantly
              description: |-
                ## Purpose
                Living with someone with generalised anxiety can mean answering the same reassurance questions every day and organising family life around their worries, which helps in the moment and keeps the anxiety going. Partners who learn the difference between support and accommodation, and agree a plan together, help recovery while protecting their own wellbeing.

                ## Milestones
                1. Reliable information on generalised anxiety read together.
                2. The ways the household accommodates the worry listed, such as answering repeated questions or cancelling plans.
                3. A joint plan agreed on how to respond kindly without supplying reassurance.
                4. A monthly check-in held on how the plan is working.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written joint plan for responding to worry exists, and three monthly check-ins on it have been held."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a reliable guide to generalised anxiety together"
                - "List the ways your household has changed to accommodate the worry"
                - "Agree a kind response to use instead of repeating reassurance"
                - "Hold a short check-in on how the plan is going @recurring(monthly:19)"
            - name: Generalised anxiety in later life
              description: |-
                ## Purpose
                Anxiety in older age often centres on health, money, falls, family and staying independent, and it is easily dismissed as natural worrying or mistaken for physical illness. Older adults also tend to take several medicines, so treatment choices need care. Raising anxiety specifically with your doctor, planning for the real practical concerns and staying socially connected all matter more than usual.

                ## Milestones
                1. Your main worries split into practical concerns and hypothetical fears.
                2. Practical concerns, such as legal arrangements for later life or home adaptations, each given a plan.
                3. Anxiety raised with your doctor, including a medicines review.
                4. Two regular social contacts in your week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Practical later-life worries each have a written plan, a medicines review has been done, and two regular social contacts are in the weekly diary."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write your main worries in two lists: things to act on and what-ifs"
                - "Make a plan for the top three practical concerns"
                - "Ask your doctor or pharmacist for a medicines review that covers anxiety"
                - "Arrange two regular social contacts each week"
            - name: Generalised anxiety as a student away from home
              description: |-
                ## Purpose
                Moving away to study puts money, housing, friendships, health and the future all in play at once, and generalised anxiety can turn each into a loop. Most universities and colleges run free counselling and wellbeing services, and registering early, before a crisis, means support is already in place when deadlines bunch up.

                ## Milestones
                1. Your institution's counselling and wellbeing services found and registered with.
                2. A doctor registered with near your term-time address.
                3. A simple weekly budget and a calendar of term deadlines set up to cut practical uncertainty.
                4. A tutor or adviser told, if you choose, so support or extensions can be arranged.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "You are registered with student wellbeing services and a local doctor, with a budget and a term deadlines calendar set up."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find your institution's wellbeing and counselling services online"
                - "Register with a doctor near your term-time address"
                - "Set up a weekly budget and a calendar of all term deadlines"
                - "Decide whether to tell a tutor and what support to ask for"
            - name: Out-of-hours work worry and email checking
              description: |-
                ## Purpose
                For many office and remote workers, generalised anxiety shows up as checking email late at night, replaying conversations with colleagues and lying awake over tomorrow's meeting. A firm end-of-day shutdown, written notes to your morning self and a confirmed response time with your manager reduce the checking without putting the job at risk.

                ## Milestones
                1. A daily shutdown routine written: capture loose ends, plan tomorrow's first task, close email.
                2. Work email notifications turned off on your phone after a set hour.
                3. Expected response times confirmed with your manager.
                4. Out-of-hours checks counted and falling over four weeks.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A daily shutdown routine is in place, and out-of-hours email checks have fallen for four consecutive weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a five-minute end-of-day shutdown checklist"
                - "Turn off work email notifications after your chosen hour"
                - "Ask your manager what response time is actually expected"
                - "Count the week's out-of-hours email checks and compare @recurring(weekly:fri)"
            - name: Carer worry and a written backup plan
              description: |-
                ## Purpose
                Carers often carry a constant what-if about the person who depends on them: what happens if I am ill, if they fall, if I cannot get there. A written backup plan, with emergency contacts, medicines, routines and who steps in, converts many of those hypothetical worries into a practical problem that is already solved.

                ## Milestones
                1. The person's essential information on one page: medicines, routines, contacts, preferences.
                2. Two backup people identified and willing to step in.
                3. The plan shared with the backup people and stored where they can find it.
                4. Your local carer support service asked about emergency or respite arrangements.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written carer backup plan has been shared with two named backup people and is stored where they can reach it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the essential information about the person you care for on one page"
                - "Ask two people whether they would step in if you were unavailable"
                - "Share the plan and tell them where it is kept"
                - "Update the backup plan and confirm the backup people are still available @recurring(yearly)"
            - name: Relapse prevention plan for generalised anxiety
              description: |-
                ## Purpose
                Worry often returns at times of stress, change or illness, and the people who recover fastest are those who spot the early signs and restart what worked. A one-page plan written while you are well, covering early warning signs, the strategies that helped, the habits to protect and who to contact, is usually the last piece of work in a course of CBT for good reason.

                ## Milestones
                1. Your personal early warning signs listed: changes in sleep, checking, avoidance or scores.
                2. The three to five strategies that helped most written down.
                3. High-risk situations for the coming year identified.
                4. Who to contact and at what point decided, and the plan shared with one trusted person.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page relapse prevention plan with warning signs, strategies and contacts is written and shared with one trusted person."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the early signs that your anxiety is creeping back"
                - "Write down the strategies that helped most"
                - "Name the high-risk situations coming up in the next year"
                - "Reread the plan and revise it for the year ahead @recurring(yearly)"
            - name: Next options when the first treatment has not helped
              description: |-
                ## Purpose
                Not everyone improves with their first treatment, and that usually means a different approach is needed, not that nothing will work. With your clinician you can check whether treatment was given for long enough, whether another therapy, a medicine change or a combination is worth trying, and whether a specialist opinion would help.

                ## Milestones
                1. Your treatment so far summarised: what, how long, how often and the GAD-7 results.
                2. Possible reasons it did not help discussed with your clinician.
                3. Next options listed with their pros and cons.
                4. A next step agreed and dated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A summary of treatment so far and a dated next step agreed with your clinician are written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Summarise every treatment you have tried with dates and scores"
                - "Book an appointment to discuss why treatment has not helped"
                - "Ask whether a different therapy, medicine or referral is appropriate"
                - "Write down the next step and its start date"
            - name: Generalised anxiety alongside other conditions
              description: |-
                ## Purpose
                Depression, insomnia, irritable bowel, chronic pain and heavy drinking often travel with generalised anxiety, and each can make the others worse. Mapping how your conditions interact, and asking your clinicians which to treat first or together, avoids parallel treatments that pull in different directions.

                ## Milestones
                1. All your current physical and mental health conditions listed with who treats each.
                2. How each one seems to affect your anxiety noted.
                3. Your clinicians asked about priorities and how treatments fit together.
                4. One coordinated plan written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of your conditions and how they interact with anxiety exists, plus one coordinated plan agreed with a clinician."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every condition you live with and who manages each"
                - "Note how each condition seems to affect your worry"
                - "Ask your doctor which condition to prioritise in treatment"
                - "Write down the coordinated plan"
            - name: Written worry exposure for a core fear
              description: |-
                ## Purpose
                Some people with generalised anxiety never think a feared scenario through to its end, jumping from what-if to what-if instead. Worry exposure, writing the feared scenario out in detail and revisiting it in planned sessions until it loses its charge, is a specialist CBT technique for generalised anxiety. It is uncomfortable by design and works best with a therapist guiding you.

                ## Milestones
                1. One core fear chosen with your therapist, such as a loved one coming to harm.
                2. A detailed written scenario of that fear prepared.
                3. The scenario revisited in planned sessions, with anxiety rated each time.
                4. Anxiety ratings shown to fall across sessions.

                ## Notes
                Do not try this alone if you have experienced trauma or feel unstable. Discuss it with a therapist first.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written core fear scenario has been worked through in planned sessions, with ratings showing anxiety falling across them."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your therapist whether worry exposure suits you"
                - "Choose one core fear to work on"
                - "Write the feared scenario in full detail"
                - "Revisit the scenario in planned sessions and rate anxiety each time"
            - name: A year of your own anxiety outcome data
              description: |-
                ## Purpose
                After a year of GAD-7 scores, experiment results and weekly reviews, you hold better evidence about your own anxiety than any general guide. Analysing it properly, which strategies moved the scores, which months were hardest and why, and which early signs came before setbacks, gives you a personal evidence base for the years ahead.

                ## Milestones
                1. Twelve months of scores, reviews and experiment results gathered in one place.
                2. The three strategies with the clearest effect identified.
                3. Seasonal or situational patterns noted.
                4. A one-page summary written and added to your relapse prevention plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page annual analysis of your anxiety data is written and attached to your relapse prevention plan."
                cadence: cyclic
              tasks:
                - "Gather the year's scores, reviews and experiment results in one folder"
                - "Ask the agent to chart the year's GAD-7 scores against your notes"
                - "Identify the three strategies with the clearest effect"
                - "Repeat the annual analysis of your anxiety data @recurring(yearly)"
---

# Generalised Anxiety Management

This area is for anyone whose worry has become persistent, jumping from topic to topic and costing sleep, focus and ease, whether or not anyone has called it generalised anxiety disorder yet. It starts with the foundations (a doctor's appointment, a GAD-7 baseline, a pattern diary and a drawing of your own worry cycle), then the routines that keep progress moving, the CBT skills for uncertainty and for your beliefs about worry, the treatment and lifestyle decisions, the dated events worth planning, versions for parents, partners, carers, students, older adults and office workers, and finally the specialist work of relapse prevention, worry exposure and reading your own data.

What repeats is a monthly GAD-7 score, a Sunday review, a weekly uncertainty experiment and avoidance step, twice-weekly exercise, a quarterly plan review and a yearly check-in with your doctor. The Metrics log, Habit tracker, Purchase decision, Course and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
