---
id: mental-wellbeing.health-anxiety-management
name: Health Anxiety Management
description: "Planned check-ins with your doctor instead of crisis visits, honest counts of checking, searching and reassurance, CBT skills for body sensations and uncertainty, and a relapse plan for the next new symptom."
category: personal
version: 1.0.0
tags: [mental-wellbeing, health-anxiety-management, everyone, symptom-checking, reassurance-seeking, cyberchondria, cbt]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - habit-tracker
    - metrics-log
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Health Anxiety Management
          description: "Breaking cycles of symptom checking, searching and reassurance seeking for people whose health worries take over daily life."
          projects:
            - name: Telling your doctor the worry is the problem
              description: |-
                ## Purpose
                Most people with health anxiety see their doctor about symptoms and never about the fear itself, so each visit ends with one worry cleared and the next already waiting. Booking an appointment where the subject is the anxiety, not a lump or a headache, lets your doctor assess it properly and talk about treatment. Doctors see health anxiety often and generally welcome being asked about it directly.

                ## Milestones
                1. An appointment booked with the stated purpose of discussing health anxiety rather than a symptom.
                2. A half-page note written on how many hours a week go on worry, checking and searching.
                3. The appointment attended and your doctor's view recorded in your own words.
                4. A next step agreed: a referral, a self-help route or a follow-up date.

                ## Notes
                If a genuinely new symptom also needs looking at, name it at the start, then move on to the anxiety. Keeping the two apart stops the appointment turning into another round of reassurance.

                Before you start: this plan is general information to help you look after your own wellbeing. It is not medical or psychological advice and does not replace a doctor, therapist or counsellor. If you are in crisis, in danger or thinking about harming yourself, contact your local emergency number or a crisis line now.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An appointment about health anxiety itself has taken place, with your doctor's view and the agreed next step written down and dated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write half a page on the hours each week that go on health worry and checking"
                - "Book an appointment and say when booking that it is to discuss health anxiety"
                - "Hand the note over at the appointment if saying it aloud feels hard"
                - "Record your doctor's view and the agreed next step the same day"
            - name: Short Health Anxiety Inventory baseline score
              description: |-
                ## Purpose
                Health anxiety varies from week to week, and in a bad week it feels as if nothing has ever improved. Scoring a standard questionnaire such as the Short Health Anxiety Inventory or the Whiteley Index now gives a fixed starting point for every later score. Clinicians use these scales too, so the number carries straight into appointments.

                ## Milestones
                1. A recognised health anxiety questionnaire chosen and its source noted.
                2. The questionnaire completed honestly about the last two weeks.
                3. The total, the date and the three items you rated highest written in your log.
                4. The score shared with your doctor or kept for a first therapy session.

                ## Notes
                A score is a measure, not a diagnosis. Ask a clinician what your number means for you rather than searching for it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated baseline score on a recognised health anxiety questionnaire is recorded, with the three highest-rated items noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the Short Health Anxiety Inventory or Whiteley Index from a reputable source"
                - "Complete it thinking only about the last two weeks"
                - "Write the total, the date and your three highest items in a log"
                - "Take the score to your next appointment or first therapy session"
            - name: Two-week checking, searching and reassurance tally
              description: |-
                ## Purpose
                Checking a mole, searching a symptom or asking your partner whether a lump feels normal each takes a minute, so few people realise they do it forty times a day. Counting the three behaviours separately for two weeks shows which one drives your anxiety most and gives you a number to bring down later.

                ## Milestones
                1. A pocket tally or phone note set up with three columns: checking, searching and asking.
                2. Fourteen days of counts recorded, including the days that felt calm.
                3. The daily average for each behaviour worked out.
                4. The behaviour with the highest count chosen as the first to work on.

                ## Notes
                Do not try to cut down during these two weeks. The point is an honest picture, and trying to look better on paper hides the very habits you need to see.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Fourteen days of separate counts for checking, searching and reassurance seeking exist, with a daily average for each and one target behaviour chosen."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up a phone note with columns for checking, searching and asking"
                - "Add a mark every time one of the three happens, without trying to cut down yet"
                - "Work out the daily average for each column after fourteen days"
                - "Circle the behaviour with the biggest count as your first target"
            - name: Your health anxiety cycle on one page
              description: |-
                ## Purpose
                Health anxiety runs in a loop: a sensation is noticed, read as a sign of serious illness, the fear drives a check or a search, relief arrives briefly, and the extra attention on your body makes the next sensation louder. Drawing your own loop from a recent episode turns a fog of fear into a sequence you can interrupt at several points.

                ## Milestones
                1. One recent episode written out from the first sensation to the final relief.
                2. The loop drawn with trigger, sensation, thought, feeling, behaviour and short-term relief.
                3. At least two points marked where you could respond differently.
                4. The page kept where you will see it during the next scare.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page diagram of your own health anxiety loop, based on a real episode, shows two marked points where you could break it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick the most recent health scare you remember clearly"
                - "Write down the sensation, the thought it triggered and what you did next"
                - "Draw the steps as a loop and mark where the relief came"
                - "Mark two places in the loop where you could do something different"
            - name: Feared illness list and where each fear began
              description: |-
                ## Purpose
                Most health-anxious people have one or two illnesses they fear above all others, often linked to a relative, a news story or an earlier scare. Listing each feared illness, when the fear started and how many times it has been checked out shows the pattern behind the worry and helps a therapist aim at the right fears.

                ## Milestones
                1. Every illness you have feared in the last two years listed.
                2. A note beside each on when the fear started and what set it off.
                3. The appointments, tests and searches each fear led to estimated.
                4. The one or two core fears named that the others seem to circle around.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of feared illnesses shows the origin of each fear, an estimate of the checking it caused and one or two core fears named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every illness you have worried about having in the last two years"
                - "Note when each fear began and what set it off"
                - "Estimate the tests, appointments and searches each fear led to"
                - "Underline the one or two fears that keep coming back"
            - name: Inventory of body checks and safety habits
              description: |-
                ## Purpose
                Beyond the obvious checks, health anxiety builds quieter habits: pressing the same spot, swallowing to test the throat, avoiding exercise in case the heart strains, carrying aspirin everywhere. Listing every one, with how often it happens, gives you the full set of targets, because the habits you miss are the ones that keep the fear alive.

                ## Milestones
                1. A list of physical checks such as prodding, pulse taking, skin inspection and mirror checks.
                2. A list of avoidances such as hospitals, illness news, exercise or particular foods.
                3. A list of subtle safety habits such as carrying medicines or staying near a hospital.
                4. Each item rated for how often it happens and how hard it would be to drop.

                ## Notes
                Ask a partner or close friend what they have noticed. They often spot habits you stopped seeing years ago.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written inventory of checks, avoidances and subtle safety habits exists, with every item rated for frequency and difficulty."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every physical check you do on your body"
                - "List places, topics and activities you avoid because of health fears"
                - "Ask someone close which habits they have noticed you doing"
                - "Rate each item for how often it happens and how hard it would be to stop"
            - name: One folder for medical records and results
              description: |-
                ## Purpose
                Hunting for an old blood test result, or trying to remember what a scan showed, often sends people back to searching or to the surgery. Gathering past results, clinic letters and diagnoses into one folder means you can see what has already been ruled out and give any clinician an accurate history in a minute.

                ## Milestones
                1. Results, clinic letters and discharge notes from the last five years in one folder.
                2. A one-page summary of diagnoses and tests with dates at the front.
                3. Patient portal or record access set up, where your health service offers it.
                4. A rule written on the summary: the folder is opened before appointments, not during scares.

                ## Notes
                The folder is for accurate history, not for rereading results at night. If you catch yourself opening it to calm a worry, count that as a check and log it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single folder holds five years of results and letters behind a dated one-page summary with a written rule on when to open it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up patient portal access if your health service offers it"
                - "Gather results, clinic letters and discharge notes into one folder"
                - "Write a one-page summary of diagnoses and tests with dates"
                - "Add a line to the summary saying when the folder should and should not be opened"
            - name: Three goals for life beyond health worry
              description: |-
                ## Purpose
                Health anxiety shrinks life quietly: trips postponed until a test comes back, exercise dropped, evenings lost to searching. Writing three concrete goals for what you would do with that time and freedom gives treatment a direction beyond feeling less scared, and gives you something to measure progress against.

                ## Milestones
                1. Three goals written that name an activity rather than a feeling.
                2. Each goal given a sign you would recognise as success.
                3. The goals shared with your doctor, therapist or a trusted person.
                4. The goals placed at the front of your health anxiety notes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three activity-based goals are written with a recognisable sign of success for each and have been shared with one other person."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List what health worry has stopped you doing in the last year"
                - "Turn three of those into goals that name a specific activity"
                - "Write what success would look like for each goal"
                - "Share the goals with your doctor, therapist or a trusted person"
            - name: Briefing one person on what actually helps
              description: |-
                ## Purpose
                Partners and close friends usually respond to health fears the only way they know, by reassuring, which buys a few minutes of relief and makes the next question more likely. Telling one person what health anxiety is, and what kind of support helps in the long run, turns them into an ally rather than a source of reassurance on demand.

                ## Milestones
                1. One person chosen who is patient and sees you often.
                2. A short explanation prepared of how reassurance keeps the cycle going.
                3. A sentence agreed that they can say instead of answering the health question.
                4. A date set to talk about how the arrangement is working.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One trusted person has been briefed on health anxiety and a replacement sentence for reassurance has been agreed with them."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose the person who most often hears your health worries"
                - "Explain in a few sentences how reassurance keeps the worry going"
                - "Agree a phrase they will use instead of answering the health question"
                - "Set a date a month away to talk about how it is going"
            - name: Choosing a CBT route for health anxiety
              description: |-
                ## Purpose
                Cognitive behavioural therapy adapted for health anxiety has the strongest evidence, and it comes in several forms: one-to-one therapy, guided self-help, groups and online programmes. Comparing the routes open to you on waiting time, cost and format, then choosing one, turns a vague intention to get help into a start date.

                ## Milestones
                1. The routes available to you listed: public service, workplace scheme, private therapist, guided online programme.
                2. Each route compared on waiting time, cost, format and whether it treats health anxiety specifically.
                3. One route chosen and a referral, self-referral or booking made.
                4. A start date or waiting-list position written down.

                ## Notes
                When checking a private therapist, ask directly how many people with health anxiety they have treated and which approach they use. A therapist who mainly offers reassurance is not offering CBT for health anxiety.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One CBT route for health anxiety has been chosen and booked, with a start date or waiting-list position recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the therapy routes open to you through the health service, work and private options"
                - "Compare them on waiting time, cost and format in one table"
                - "Ask shortlisted therapists how often they treat health anxiety"
                - "Make the referral or booking and note the expected start date"
            - name: Planned check-ins agreed with one doctor
              description: |-
                ## Purpose
                One approach that often helps is swapping symptom-driven appointments for regular planned ones, perhaps every three months, with the same doctor. New worries go on a list for the planned visit unless they match the urgent signs you agreed, which breaks the link between an anxiety spike and immediate medical contact.

                ## Milestones
                1. A conversation held with your doctor about planned appointments instead of urgent ones.
                2. The interval agreed and the next appointment booked.
                3. A written list from your doctor of symptoms that should still be seen straight away.
                4. Each planned appointment attended with a written list and notes kept afterwards.

                ## Notes
                Start from the **Meeting notes** template for each visit. The urgent-symptom list comes from your doctor; never shorten it yourself.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Planned appointments at an agreed interval are booked with one doctor, and the doctor's urgent-symptom list is kept in writing."
                cadence: rolling
              tasks:
                - "Ask your doctor whether planned check-ins would suit you better than ad hoc visits"
                - "Write down the symptoms your doctor says should be seen without waiting"
                - "Keep a running list of non-urgent worries for the next planned visit"
                - "Attend the planned check-in with your list and write up the notes @recurring(quarterly)"
            - name: Daily tally of checks, searches and questions
              description: |-
                ## Purpose
                Once you have a baseline, a daily count turns progress from a feeling into a number. Tallying checks, searches and reassurance requests each day, then totalling the week on Sunday, shows the slow downward trend that bad days hide.

                ## Milestones
                1. A tally method chosen that you can use discreetly at work and at home.
                2. Daily counts kept for at least eight weeks.
                3. Weekly totals charted next to your baseline average.
                4. A clear fall from the baseline visible on the chart and discussed with your therapist or doctor.

                ## Notes
                Start from the **Habit tracker** template. Count honestly: a high number is information, not failure.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Daily tallies have been recorded for eight weeks, with weekly totals charted against the baseline average."
                cadence: rolling
              tasks:
                - "Pick a discreet tally method such as a counter app or a phone note"
                - "Record every check, search and reassurance request today @recurring(daily)"
                - "Add up the week and plot it next to your baseline @recurring(weekly:sun)"
                - "Bring the chart to your next therapy or doctor appointment"
            - name: Friday health worry review
              description: |-
                ## Purpose
                A short written review each week catches patterns that are invisible day to day, such as worry rising after a hard week at work or a relative's news. Ten minutes on Friday, answering the same four questions, keeps the work steady between appointments.

                ## Milestones
                1. Four fixed review questions written: main worry, urges resisted, what helped, next week's step.
                2. Reviews completed most weeks for three months.
                3. Two recurring triggers spotted and written down.
                4. A step for the coming week chosen at the end of each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly reviews answering the same four questions exist for at least ten of the last twelve weeks."
                cadence: rolling
              tasks:
                - "Write the four review questions at the top of a notebook page"
                - "Answer the four review questions in ten minutes @recurring(weekly:fri)"
                - "Circle any trigger that appears in three or more reviews"
                - "Pick one small step for the coming week at the end of each review"
            - name: Monthly health anxiety score log
              description: |-
                ## Purpose
                Rescoring the same questionnaire each month shows whether the work is moving the number, and gives your therapist or doctor a trend instead of a description of your mood. Twelve monthly scores also make it easy to spot early when the anxiety is creeping back.

                ## Milestones
                1. The baseline questionnaire repeated on the same day each month.
                2. Scores logged with a one-line note on the month's main events.
                3. A simple chart of scores over time.
                4. The trend reviewed at each therapy or doctor appointment.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least six monthly scores on the same questionnaire are logged and charted, each with a note on the month."
                cadence: rolling
              tasks:
                - "Set up a log with columns for date, score and the month's main event"
                - "Repeat the questionnaire and log the score @recurring(monthly:9)"
                - "Chart the scores once there are three entries"
                - "Raise any rise over two months in a row with your therapist or doctor"
            - name: Wait-and-note rule for new symptoms
              description: |-
                ## Purpose
                Many new aches, twinges and spots fade within days, but health anxiety demands an answer within minutes. Agreeing with your doctor how long a non-urgent new symptom can be watched before booking, then writing it down instead of checking it, lets you see how many sensations resolve on their own.

                ## Milestones
                1. A wait period for non-urgent new symptoms agreed with your doctor, along with the exceptions.
                2. A symptom page set up with date, description and the date the wait ends.
                3. Each new symptom written down and left alone until its date.
                4. A monthly count of how many noted symptoms faded without any action.

                ## Notes
                The wait rule never applies to symptoms your doctor has told you to act on straight away. Keep that list at the top of the page.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A wait period agreed with your doctor is in use, and each month's noted symptoms show which ones faded without action."
                cadence: rolling
              tasks:
                - "Ask your doctor how long a non-urgent new symptom can be watched before booking"
                - "Set up a page with columns for date, symptom and end of the wait"
                - "Write each new symptom down instead of checking or searching it"
                - "Count how many noted symptoms faded without action @recurring(monthly:16)"
            - name: Symptom search blocking and screen limits
              description: |-
                ## Purpose
                Online symptom searching, sometimes called cyberchondria, reliably lands on the rarest and most frightening explanation because those pages are the ones that get clicked and shared. Blocking the sites you use most and checking the screen time report each week puts a pause between the urge and the search, and that pause is often enough.

                ## Milestones
                1. The sites, apps and forums you use most for symptoms listed.
                2. A blocker or content filter active on phone, tablet and computer.
                3. A written plan for the urge to search: note it, wait, go back to what you were doing.
                4. Weekly screen time reports showing symptom searches falling over two months.

                ## Notes
                Blockers are a speed bump, not a wall. Expect to get round them now and then, and count it when you do.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Blocking is active on every device you use, and weekly reports show symptom searches falling over two months."
                cadence: rolling
              tasks:
                - "List the sites, apps and forums you most often use to look up symptoms"
                - "Set up a blocker or content filter on phone, tablet and computer"
                - "Write down what you will do instead when the urge to search arrives"
                - "Check the screen time report for symptom searches @recurring(weekly:wed)"
            - name: Routine screening calendar from official guidance
              description: |-
                ## Purpose
                People with health anxiety often swing between over-screening and avoiding screening altogether in case something is found. Building a calendar from your health service's routine screening programmes for your age and sex, and keeping to it, means you neither miss a check that matters nor add extra ones to calm a worry.

                ## Milestones
                1. The screening programmes your health service offers for your age and sex listed.
                2. The date each was last done and is next due written down.
                3. Invitations accepted and attended when they arrive.
                4. Any request for screening outside the programmes discussed with your doctor first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A screening calendar based on official programmes lists each check with its last and next due date, and every due invitation has been acted on."
                cadence: cyclic
              tasks:
                - "Look up the screening programmes your health service offers for your age and sex"
                - "Write down when each was last done and when it is next due"
                - "Ask your doctor before booking any screening outside the programmes"
                - "Check the calendar for anything due in the coming year @recurring(yearly)"
            - name: Quarterly health anxiety progress review
              description: |-
                ## Purpose
                Every three months, step back from the weekly detail and look at the larger picture: scores, tally trend, goals and appointments used. A quarterly review is where you decide whether to keep going as you are, change approach or ask for more help.

                ## Milestones
                1. The quarter's scores, weekly tallies and unplanned appointment count gathered on one page.
                2. Progress on each of your three goals rated.
                3. One thing to keep, one to stop and one to start written down.
                4. A decision recorded on whether to raise anything with your doctor or therapist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page quarterly review with scores, tally trend, goal progress and a keep, stop and start note exists for each quarter."
                cadence: rolling
              tasks:
                - "Gather the quarter's scores, tallies and appointment count on one page"
                - "Ask the agent to summarise the quarter's Friday reviews into themes"
                - "Rate progress on each of your three goals"
                - "Hold the quarterly review using the same one-page format @recurring(quarterly)"
            - name: Between-session CBT homework for health anxiety
              description: |-
                ## Purpose
                CBT for health anxiety relies on homework: experiments, attention exercises and records completed between sessions. Keeping homework and session notes in one place, and filling in the sheet before each session, means sessions build on each other rather than starting from scratch each time.

                ## Milestones
                1. One notebook or file for session notes and homework sheets.
                2. Each session's main point and homework written down within a day.
                3. Homework completed, or the obstacle noted, before the next session.
                4. A running list of the most useful insights kept for after therapy ends.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Notes and completed homework exist for every therapy session attended, with a running list of key insights."
                cadence: rolling
              tasks:
                - "Set up one notebook or file for session notes and homework"
                - "Write the session's main point and homework the same day"
                - "Complete the homework sheet the day before your session @recurring(weekly:tue)"
                - "Add each useful insight to a running list at the back"
            - name: How health anxiety keeps itself going
              description: |-
                ## Purpose
                Understanding the model behind health anxiety is the first step of most CBT programmes: why reassurance wears off, why checking makes sensations more noticeable and why avoidance keeps fear fresh. Learning it well enough to explain it to someone else makes the later exercises feel logical rather than arbitrary.

                ## Milestones
                1. A reputable explanation of the CBT model of health anxiety read or watched.
                2. The roles of checking, reassurance, attention and avoidance each summarised in a sentence.
                3. The model explained aloud to a trusted person or your therapist.
                4. Your cycle page updated with anything new you learned.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain in your own words how checking, reassurance, attention and avoidance maintain health anxiety, and have done so to one person."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a self-help leaflet on health anxiety from a health service or university"
                - "Write one sentence each on checking, reassurance, attention and avoidance"
                - "Explain the model to a trusted person in under five minutes"
                - "Update your cycle page with anything the reading added"
            - name: Everyday body noise and normal sensations
              description: |-
                ## Purpose
                Healthy bodies produce a constant background of sensations: skipped heartbeats, muscle twitches, floaters, gurgling, brief dizziness on standing, stiffness after sleep. Learning what is common in healthy people, from one reliable source, helps you label a sensation as body noise before the mind reaches for a diagnosis.

                ## Milestones
                1. The five sensations that most often start a scare listed.
                2. For each, one reliable source found on how common it is in healthy people.
                3. A personal body noise sheet written in plain language.
                4. The sheet checked with your doctor for anything that does not apply to you.

                ## Notes
                Read the sources once and summarise them. Rereading them during a scare becomes another form of checking.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page body noise sheet covering your five top trigger sensations exists and has been checked with your doctor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the five sensations that most often start a health scare"
                - "Find how common each is in healthy people from one reputable source"
                - "Write a plain-language body noise sheet from what you found"
                - "Ask your doctor at a planned visit whether anything on the sheet does not apply to you"
            - name: Body focus attention experiment
              description: |-
                ## Purpose
                Attention amplifies sensation: spend two minutes focusing on your throat and swallowing starts to feel strange, focus on your scalp and it begins to itch. Running this experiment on purpose, with ratings before and after, shows how much of what you notice comes from where your attention goes rather than from disease.

                ## Milestones
                1. Three body areas chosen for the experiment.
                2. Sensation rated before and after two minutes of close focus on each area.
                3. The same ratings taken after two minutes of attention on something outside the body.
                4. A written conclusion on what attention does to sensation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Before and after ratings for three body areas are recorded alongside a two-sentence conclusion on how attention changed sensation."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose three body areas, such as throat, chest and scalp"
                - "Rate sensation in each before and after two minutes of close focus"
                - "Repeat with two minutes of attention on the sounds in the room"
                - "Write two sentences on what the ratings show"
            - name: Realistic odds with the pie chart exercise
              description: |-
                ## Purpose
                When a headache appears, the anxious mind jumps straight to a brain tumour and skips the dozens of ordinary explanations. The pie chart exercise has you list every possible cause of a sensation, give each a share, and see how small the feared slice becomes once tiredness, posture, tension and minor infections are counted.

                ## Milestones
                1. One recent symptom chosen and the feared explanation written down.
                2. Every other possible cause listed, from the everyday to the unusual.
                3. A pie chart drawn with a share for each cause and the feared one added last.
                4. The exercise repeated on two more symptoms, with belief in the feared cause rated before and after.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three completed pie charts exist, each with belief in the feared cause rated before and after."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick a recent symptom and write the illness you feared it meant"
                - "List every other possible cause you can think of"
                - "Draw the pie, giving the feared cause its share last"
                - "Rate how strongly you believe the feared cause before and after"
            - name: Living with medical uncertainty
              description: |-
                ## Purpose
                No test can make anyone certain they are healthy, and health anxiety often hides a demand for a guarantee no doctor can give. Practising small, deliberate tolerance of not knowing, both about your body and in everyday life, weakens the demand that drives the checking.

                ## Milestones
                1. Your personal rules about certainty written down, such as needing to be completely sure.
                2. Ten small uncertainty practices listed, from leaving a minor ache unexplained to choosing a restaurant without reading reviews.
                3. At least eight carried out with anxiety rated before and after.
                4. A note on what happened to the anxiety when the doubt was left unresolved.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least eight uncertainty practices are logged with before and after anxiety ratings and a written conclusion."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write what you believe would happen if you stayed unsure about a symptom"
                - "List ten small ways to practise not knowing in daily life"
                - "Do one practice and rate your anxiety before and after"
                - "Write what had happened to the anxiety by the next day"
            - name: Behavioural experiments on dropping a check
              description: |-
                ## Purpose
                Your anxiety predicts that dropping a check is dangerous, or that the fear will become unbearable without it. Testing those predictions in planned experiments, such as not touching a mole for a week, gives you your own evidence rather than someone else's reassurance.

                ## Milestones
                1. Three specific predictions written about what would happen if you stopped a check.
                2. Each experiment planned with a length and a way to record the result.
                3. The experiments carried out and outcomes compared with the predictions.
                4. A summary written of what the results mean for your checking.

                ## Notes
                Agree the experiments with your therapist or doctor if any involve a symptom you have been asked to monitor.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three written predictions have been tested in planned experiments, with the outcome recorded against each one."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a specific prediction about what would happen if you stopped one check"
                - "Plan the experiment with a start date, a length and how you will record it"
                - "Carry out the experiment and rate anxiety each evening"
                - "Compare the result with your prediction in writing"
            - name: Questioning the belief that worry keeps you safe
              description: |-
                ## Purpose
                Many people hold on to health worry because part of them believes it protects them: that worrying means nothing will be missed, or that relaxing invites illness. Writing those beliefs down and weighing the evidence makes it easier to let go of the checking they justify.

                ## Milestones
                1. Your beliefs about the usefulness of health worry written in your own words.
                2. Evidence for and against each belief listed.
                3. Examples found of times worry neither prevented nor caught anything.
                4. A more balanced statement written for each belief.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each written belief about health worry has evidence for, evidence against and a balanced alternative statement."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Finish the sentence: if I stopped worrying about my health, then"
                - "List the evidence for and against each belief"
                - "Note times when worry made no difference to what happened"
                - "Write a balanced alternative statement for each belief"
            - name: Working through a health anxiety workbook
              description: |-
                ## Purpose
                Several self-help workbooks based on CBT for health anxiety have been written by the clinicians who researched the treatment, and working through one chapter by chapter is an established route while you wait for therapy. Doing the exercises, rather than only reading, is what makes the difference.

                ## Milestones
                1. One evidence-based workbook chosen, ideally from a clinician or a health service book list.
                2. A weekly slot set aside for one chapter and its exercises.
                3. Every chapter completed with its exercises written up.
                4. A one-page list of the ideas that helped most.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every chapter of one evidence-based health anxiety workbook is completed, with exercises written up and a one-page summary."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your doctor or a health service book list for a recommended workbook"
                - "Choose a fixed weekly time for one chapter"
                - "Work through one chapter and its exercises @recurring(weekly:sat)"
                - "Write a one-page summary of the ideas that helped most"
            - name: Cutting back body checking step by step
              description: |-
                ## Purpose
                Dropping every check at once rarely lasts, but cutting them back in planned steps does. Starting with the check you rated easiest to stop, then delaying, shortening and finally dropping each in turn, lowers the attention on your body and with it the sensations that set off the fear.

                ## Milestones
                1. Checks from your inventory ranked from easiest to hardest to stop.
                2. A daily limit set for the first check and kept for two weeks.
                3. Each check in turn delayed, shortened and then dropped.
                4. Your three most frequent checks reduced to zero, or to the schedule your doctor advises.

                ## Notes
                Some people are advised to self-examine on a schedule, such as a monthly breast or testicle check. Keep to that schedule exactly and drop the extra checks in between.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Your three most frequent body checks are down to zero, or to the schedule your doctor advises, and have stayed there for four weeks."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Rank your checks from easiest to hardest to stop"
                - "Set a daily limit for the easiest check and write it down"
                - "Tick off each day you kept to the checking limit @recurring(daily)"
                - "Move to the next check once the limit has held for two weeks"
            - name: Tapering reassurance seeking at home
              description: |-
                ## Purpose
                Asking a partner whether a mole looks different, or a parent whether a cough sounds serious, works for minutes and then the question returns. Agreeing a household plan to taper reassurance gradually, so nobody suddenly refuses to answer, lets the people around you help in a way that lasts.

                ## Milestones
                1. Your common reassurance questions, and who you ask, written down.
                2. A household agreement on how answers will be tapered, such as answering once and then using the agreed phrase.
                3. The agreement tried for four weeks, with notes on what was hard.
                4. A monthly conversation held to adjust the plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written household agreement on tapering reassurance has been used for four weeks and reviewed together at least once."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down the health questions you ask most and who you ask"
                - "Agree with your household how answers will be cut back over the weeks"
                - "Note the moments when keeping to the agreement felt hardest"
                - "Review the agreement together and adjust it @recurring(monthly:23)"
            - name: Fewer unplanned appointments and test requests
              description: |-
                ## Purpose
                Repeat appointments, extra scans and second opinions often bring short relief, then the anxiety moves to a new symptom or starts doubting the result. Counting last year's unplanned contacts and agreeing a plan with your doctor to reduce them protects you from unnecessary tests, which carry their own risks, and frees time for treatment.

                ## Milestones
                1. Last year's unplanned appointments, urgent care visits and test requests counted.
                2. The count discussed with your doctor and a reduction plan agreed.
                3. Each urge to book an extra appointment noted, along with whether it passed.
                4. Unplanned contacts in the following six months compared with the year before.

                ## Notes
                This is a planned reduction agreed with your doctor. Symptoms on your doctor's urgent list are still seen straight away.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Unplanned medical contacts over six months are counted and compared with the previous year, under a reduction plan agreed with your doctor."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Count last year's unplanned appointments, urgent visits and test requests"
                - "Bring the count to a planned appointment and agree a reduction plan"
                - "Note each urge to book and whether it passed within a day"
                - "Compare the six-month count with the same period last year"
            - name: Smartwatch and health app alert decision
              description: |-
                ## Purpose
                Heart rate alerts, blood oxygen readings, sleep scores and home ECG features can turn a wrist into a constant checking device. Reviewing which features you look at, how often and what they make you do, then deciding what to keep, mute or remove, is a decision worth making on purpose rather than by default.

                ## Milestones
                1. Every health feature on your watch, ring, phone and apps listed.
                2. A week's count of how often you looked at each one.
                3. A decision recorded for each: keep, mute notifications or remove.
                4. Any feature your doctor wants you to use for a diagnosed condition kept, with its use agreed.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each wearable and app health feature has a recorded keep, mute or remove decision, with medically required features agreed with your doctor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every health feature on your watch, phone and apps"
                - "Count how often you look at each one for a week"
                - "Decide for each whether to keep, mute or remove it"
                - "Ask your doctor which readings, if any, they actually want you to take"
            - name: Limits on health news, medical TV and forums
              description: |-
                ## Purpose
                Medical dramas, celebrity diagnosis stories, outbreak coverage and patient forums give health anxiety a steady supply of new illnesses to fear. Setting clear limits on this content, rather than banning it in a panic, cuts the unplanned triggers without turning the subject into something you have to avoid.

                ## Milestones
                1. The health content you take in during a typical week listed by source.
                2. Each source sorted into keep, limit or drop.
                3. Forums for conditions you have not been diagnosed with left or muted.
                4. A monthly check made on whether the limits are holding.

                ## Notes
                Limits are not avoidance. Planned contact with illness topics belongs on your exposure ladder; this project deals with the unplanned flood.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written list sorts every regular health content source into keep, limit or drop, and the limits are checked each month."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List the health news, programmes, accounts and forums you follow"
                - "Sort each source into keep, limit or drop"
                - "Leave or mute forums for conditions you have not been diagnosed with"
                - "Check the month's health media against your limits @recurring(monthly:12)"
            - name: Exposure ladder for avoided illness reminders
              description: |-
                ## Purpose
                Avoiding the word cancer, hospital corridors, health programmes or a relative's illness keeps the fear fresh. A graded ladder, starting with the least frightening reminder and climbing with planned practice twice a week, lets the fear fall through repeated contact rather than escape.

                ## Milestones
                1. Ten avoided illness reminders listed and rated for fear.
                2. A ladder built from the lowest rating to the highest.
                3. Each step practised until the fear drops by about half, without checking afterwards.
                4. The top three steps reached.

                ## Notes
                Choose steps that are safe and ordinary, such as reading about an illness, writing its name or visiting someone in hospital. Work with your therapist on any step in a medical setting you are anxious about.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A ten-step ladder of avoided illness reminders has been built and its top three steps completed without checking afterwards."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List ten illness reminders you avoid and rate the fear each brings"
                - "Order them into a ladder from least to most frightening"
                - "Do one planned step from the ladder @recurring(weekly:mon,thu)"
                - "Rerate the whole ladder each time you finish a step"
            - name: Returning to activities given up for health fears
              description: |-
                ## Purpose
                People with health anxiety often stop exercising in case the heart strains, give up travel far from a hospital, or skip saunas and spicy food in case of symptoms. Planning the return to one dropped activity at a time, with your doctor's agreement where a condition exists, wins back part of your life and tests the fear in the same move.

                ## Milestones
                1. Activities given up because of health fears listed.
                2. Your doctor asked whether anything on the list is actually restricted for you.
                3. A gradual return plan written for the activity you miss most.
                4. The activity done regularly for a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One activity dropped because of health fear has been cleared with your doctor where needed and done regularly for a month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List activities you dropped because of health fears"
                - "Ask your doctor at a planned visit whether any are truly restricted for you"
                - "Write a step-by-step return plan for the one you miss most"
                - "Do the first step this week and note how your body felt afterwards"
            - name: Deciding on private screening and home test kits
              description: |-
                ## Purpose
                Full-body scans, direct-to-consumer blood panels and home test kits are marketed hard to worried people, and they often turn up harmless incidental findings that start a new round of fear and follow-up tests. Deciding in advance, with your doctor, what testing you will and will not buy saves money and a predictable spiral.

                ## Milestones
                1. Private tests or kits bought in the last two years listed with what followed each.
                2. The pros and cons of any test you are tempted by discussed with your doctor.
                3. A written personal rule on buying tests outside your doctor's advice.
                4. Marketing emails and adverts from screening companies unsubscribed or blocked.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A personal rule on buying private tests is written down after discussing the options with your doctor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List private tests or kits bought in the last two years and what followed"
                - "Ask your doctor about any test you are currently tempted to buy"
                - "Write your personal rule for buying tests outside medical advice"
                - "Unsubscribe from screening company emails and adverts"
            - name: Waiting for test results without the spiral
              description: |-
                ## Purpose
                The days between a scan or biopsy and its result are hard for anyone, and for a health-anxious mind they fill quickly with searching and imagined conversations. A written plan for the waiting period, with daily structure, one worry slot and someone to talk to, makes the wait bearable without undoing your progress.

                ## Milestones
                1. The expected result date, and how you will be told, confirmed with the clinic.
                2. A plan for each waiting day with activity, rest and one set worry slot.
                3. One person lined up to keep you company who will not research with you.
                4. The plan used and a note made afterwards of what helped.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written waiting plan, with the result date confirmed, was used during a real wait and a note of what helped was made afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the clinic when results are due and how you will hear"
                - "Write a simple plan for each waiting day with one set worry slot"
                - "Ask one person to keep you company during the wait without researching"
                - "Write down what helped once the result is in"
            - name: One-page appointment agenda, not a symptom dossier
              description: |-
                ## Purpose
                Arriving with three pages of symptoms and printed search results usually leads to a rushed appointment and more doubt afterwards. A one-page agenda with the two points that matter most, one clear question and space for the answer makes appointments shorter and more useful to both of you.

                ## Milestones
                1. A one-page agenda format with room for two points, one question and the answer.
                2. The agenda used at your next appointment.
                3. The doctor's answer written down before leaving.
                4. A note afterwards on whether you sought further reassurance about the same point.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One appointment has been run from a one-page agenda, with the doctor's answer written on it before leaving."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the one or two points that matter most for the next appointment"
                - "Add one clear question you want answered"
                - "Leave printed search results at home"
                - "Write down the answer on the agenda before you leave"
            - name: Annual health check without the spiral
              description: |-
                ## Purpose
                Routine health checks and their blood tests can trigger weeks of anticipatory worry and days of rereading results. Planning the check as an event, with the booking, a plan for the week before and a rule to read results once with your doctor, keeps a useful check from becoming a crisis.

                ## Milestones
                1. The yearly check booked through the usual route.
                2. A plan written for the week before, including how to handle the urge to research.
                3. Results read once, ideally with your doctor's explanation.
                4. Any follow-up agreed and written down, then the results filed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The annual check has been attended, its results discussed once with your doctor and filed, and any follow-up written down."
                cadence: cyclic
              tasks:
                - "Book the annual health check through your usual route @recurring(yearly)"
                - "Write a short plan for the week before the appointment"
                - "Read the results once alongside your doctor's explanation"
                - "File the results in your record folder without rereading them"
            - name: Anniversaries of family illness and loss
              description: |-
                ## Purpose
                Anniversaries of a parent's diagnosis or death often bring a flare of health anxiety, as does reaching the age they were when they became ill. Marking those dates in advance and planning support for the weeks around them turns an ambush into something expected.

                ## Milestones
                1. Dates linked to family illness listed, including the ages relatives were when diagnosed.
                2. Each date in the calendar with a reminder a month before.
                3. A support plan for each anniversary week covering company, activity and fewer demands.
                4. A note afterwards on how the anxiety behaved.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every family illness anniversary is in the calendar with a month's notice and a written support plan for the week."
                cadence: cyclic
              tasks:
                - "List dates connected to family illness, including ages you will reach"
                - "Put each date in the calendar with a reminder a month ahead"
                - "Plan company and lighter demands for the anniversary week @recurring(yearly)"
                - "Write a short note afterwards on how the week went"
            - name: Travelling far from your usual doctor
              description: |-
                ## Purpose
                Being far from a familiar doctor or hospital is a common reason health-anxious people avoid holidays altogether. Preparing the practical basics once, travel insurance, a medicines list and how to find urgent care at the destination, and then leaving the research there, makes the trip possible without daily checking of local hospitals.

                ## Milestones
                1. Travel insurance with medical cover in place.
                2. A one-page list of conditions and medicines packed.
                3. How to reach urgent care at the destination found once and written on one card.
                4. The trip taken with a rule not to research local illnesses.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip has been taken with insurance, a medicines list and one urgent care card prepared, and no research on local illnesses during it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check that your travel insurance covers medical care at the destination"
                - "Write a one-page list of your conditions and medicines"
                - "Find once how to reach urgent care at the destination and note it on a card"
                - "Agree a rule with yourself about not researching local illnesses on the trip"
            - name: Fear of recurrence after a serious illness
              description: |-
                ## Purpose
                After cancer, a heart attack or another serious illness, every ache can feel like the illness returning, and this fear of recurrence is common and well recognised. Working with your specialist team on which symptoms they actually want reported, and on a follow-up schedule you trust, separates sensible watchfulness from constant scanning of your body.

                ## Milestones
                1. Your specialist team asked which symptoms they want reported and how quickly.
                2. The follow-up schedule written down with dates.
                3. A plan in place for the week before each follow-up scan or test.
                4. Support explored, such as a survivorship service, a support group or a psychological referral.

                ## Notes
                Fear of recurrence is not a sign that something is wrong. Many specialist services offer psychological support for it; ask your team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written list of the symptoms your specialist team wants reported, plus the follow-up schedule, is kept in your record folder."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your specialist team which symptoms they want reported and how quickly"
                - "Put the follow-up schedule with dates in your calendar"
                - "Ask whether a survivorship or psychological support service is available"
                - "Plan something steadying for the week before each follow-up scan"
            - name: Worrying about your children's health
              description: |-
                ## Purpose
                Some parents carry health anxiety on behalf of their children: checking rashes, taking temperatures again and again, searching every cough. Children notice, and can learn that their bodies are dangerous. Clear guidance from your family doctor on when a child needs to be seen, and a plan for what to do instead of checking, protects your child's view of their body and your own sleep.

                ## Milestones
                1. The things you check or search about your children listed with how often.
                2. Written guidance from your family doctor or health visitor on when a child needs to be seen.
                3. Repeated checks on the children reduced one at a time.
                4. Calmer, matter-of-fact language about bodies and illness used in front of the children.

                ## Notes
                Never delay care for a child when the guidance says to go. The aim is fewer repeat checks between those moments, not fewer appointments when they are needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Written guidance on when a child needs to be seen is in use, and repeated checks on the children have fallen for four weeks."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write down what you check or search about your children and how often"
                - "Ask your family doctor for clear written guidance on when to bring a child in"
                - "Choose one repeated check on the children to cut first"
                - "Use plain, calm words when talking about illness in front of the children"
            - name: Memory slip worry in later life
              description: |-
                ## Purpose
                Forgetting a name or why you walked into a room happens at every age, but after a parent's dementia or a friend's diagnosis each slip can feel like the start of something. Learning what normal ageing looks like, asking your doctor whether a memory assessment is warranted and dropping the habit of testing yourself breaks a very common later-life worry loop.

                ## Milestones
                1. Memory slips noted over two weeks with what was happening at the time.
                2. Reliable information on normal age-related memory change read once.
                3. Your doctor asked whether an assessment is needed and the answer recorded.
                4. Self-testing habits, such as quizzing yourself on dates or names, reduced.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your doctor's view on whether a memory assessment is needed is recorded, and at least one self-testing habit has stopped."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Note memory slips for two weeks with what was happening at the time"
                - "Read your health service's guide to normal memory changes with age"
                - "Ask your doctor whether a memory assessment is needed and write down the answer"
                - "Drop one self-testing habit, such as quizzing yourself on names"
            - name: Health anxiety as a health worker or student
              description: |-
                ## Purpose
                Medical, nursing and other health students often become convinced they have each disease they study, and staff see the rare cases every day. Knowing this is common, keeping a firm line between work knowledge and your own body, and seeing your own doctor rather than assessing yourself keeps professional knowledge from turning against you.

                ## Milestones
                1. The pattern named and raised with a tutor, supervisor or occupational health if it is affecting you.
                2. A personal rule against requesting, ordering or interpreting your own tests.
                3. Your own registered doctor used for your own symptoms.
                4. A short end-of-shift or end-of-study routine that leaves the cases at work.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written rule against self-testing is in place, you are registered with your own doctor and an end-of-shift routine is in use."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down the conditions you have feared since starting your course or job"
                - "Register with your own doctor if you have not already"
                - "Set a rule never to examine, test or diagnose yourself at work"
                - "Build a five-minute routine that marks the end of a shift or study day"
            - name: Supporting a partner with health anxiety
              description: |-
                ## Purpose
                Living with someone who has health anxiety is tiring: the same questions, late-night searching, plans cancelled for appointments. Partners usually want to help and end up supplying endless reassurance. Learning how the cycle works and agreeing a different response with them gives you a role that helps without feeding the fear, and protects your own patience.

                ## Milestones
                1. The health anxiety cycle understood, ideally from the same leaflet your partner uses.
                2. Your usual responses to their worries noted, including the ones that are reassurance.
                3. A replacement response agreed together and practised.
                4. Your own support arranged, such as a friend to talk to or a carers' group.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A replacement response to health questions has been agreed with your partner, and you have one regular source of support for yourself."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the same health anxiety leaflet your partner is using"
                - "Jot down how you usually answer their health questions for a week"
                - "Practise the agreed response together in a calm moment before you need it"
                - "Arrange one regular thing that supports you, separate from their recovery"
            - name: Health anxiety alongside a long-term condition
              description: |-
                ## Purpose
                Living with diabetes, asthma, a heart condition or another long-term illness means some symptoms genuinely need action, which makes it hard to tell the illness from the anxiety. A written action plan from your care team, saying what to do at each level of symptom, takes out the guesswork and makes the leftover worry easier to recognise.

                ## Milestones
                1. A written action plan for your condition obtained from your care team.
                2. Your usual everyday symptoms described in the plan alongside the ones that need action.
                3. Worries about symptoms outside the plan handled with your health anxiety tools.
                4. The plan reviewed at each routine appointment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written action plan from your care team, covering both usual and warning symptoms, is kept in two places and reviewed at routine appointments."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your care team for a written action plan for your condition"
                - "Check that it describes your usual symptoms as well as the warning ones"
                - "Keep one copy with your medicines and another on your phone"
                - "Ask at each routine appointment whether the plan needs updating"
            - name: Relapse prevention plan for health anxiety
              description: |-
                ## Purpose
                Relapses of health anxiety tend to arrive at predictable points: a new symptom, a friend's diagnosis, a stressful year, a birthday that feels significant. A written relapse plan, made while you are well, lists your warning signs, the tools that worked and the steps to take early, so a lapse stays a lapse.

                ## Milestones
                1. Early warning signs written down, such as searching again or checks creeping up.
                2. The three tools that helped most summarised in a few lines each.
                3. A step-by-step plan for the first week of a lapse.
                4. The plan shared with your therapist or a trusted person and stored with your notes.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written relapse plan with warning signs, three key tools and first-week steps is stored with your notes and shared with one person."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the signs that health anxiety is creeping back"
                - "Summarise the three tools that helped most"
                - "Write what you will do in the first week of a lapse"
                - "Share the plan with your therapist or a trusted person"
                - "Run a two-week booster of your core exercises @recurring(yearly)"
            - name: Next options when CBT has not helped enough
              description: |-
                ## Purpose
                If a full course of CBT has left health anxiety still taking hours of your day, there are further options: a different therapist or format, a specialist anxiety service, or a discussion of medication with a prescriber. Preparing a clear summary of what has been tried helps your doctor choose the next step instead of repeating the first.

                ## Milestones
                1. A summary of treatments tried, with dates, length and scores before and after.
                2. Questions prepared about specialist services, other therapies and medication.
                3. A review appointment held and the agreed next step written down.
                4. The next step started or a waiting-list place secured.

                ## Notes
                Medication decisions belong to you and a prescriber. Prepare the questions, not the answers, and never change a medicine on the strength of an online forum.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A treatment history summary has been taken to a review appointment and the agreed next step is started or waitlisted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a summary of each treatment tried, with dates and scores before and after"
                - "Prepare questions about specialist services and medication options"
                - "Book a review appointment specifically to discuss the next step"
                - "Record the agreed next step and when it starts"
            - name: Written exposure to your core illness fear
              description: |-
                ## Purpose
                When the deepest fear is a specific illness and what it would mean, such as leaving your children or a slow decline, pushing the thought away keeps it powerful. Writing a detailed script of the feared scenario and reading it repeatedly, with a therapist's guidance, lets the fear lose its intensity in a way checking never achieves.

                ## Milestones
                1. Your therapist's agreement that written exposure suits you at this stage.
                2. A one-page script written in the first person and present tense.
                3. The script read daily for the agreed period, with anxiety rated at the start and end.
                4. Anxiety at reading clearly lower than at the first reading.

                ## Notes
                Do this as part of therapy, not alone during a low patch. Stop and contact your therapist or doctor if it brings up thoughts of harming yourself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A script of the core feared scenario has been read daily for the agreed period, with anxiety ratings showing a clear fall."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your therapist whether written exposure to the core fear suits you now"
                - "Write the feared scenario on one page in the first person"
                - "Read the script aloud and rate anxiety at the start and end @recurring(daily)"
                - "Write a short note on what changed between the first and last reading"
            - name: A year of your own health anxiety data
              description: |-
                ## Purpose
                After twelve months of scores, tallies, weekly reviews and appointment counts, you hold your own evidence about what helped. Analysing the year, with trends and turning points marked, shows which tools to keep for life and gives your clinician a clear record to work from.

                ## Milestones
                1. The year's scores, tallies and appointment counts on one chart.
                2. Turning points marked with what was happening at the time.
                3. The three tools with the clearest effect identified.
                4. A one-page annual summary shared with your clinician.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page annual summary with a chart of scores, tallies and unplanned contacts names three effective tools and has been shared with a clinician."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Put the year's scores, tallies and unplanned contacts on one chart"
                - "Mark the weeks where things clearly changed and note why"
                - "Ask the agent to draft a one-page summary from your chart and notes"
                - "Share the summary with your doctor or therapist"
---

# Health Anxiety Management

This area is for anyone whose health worries have started to run daily life: the checking, the late-night symptom searches, the repeat appointments and the questions to family that never quite settle the fear. It starts with the foundations (an appointment about the anxiety itself, a baseline score, a count of checking, searching and reassurance, your own cycle on paper and a CBT route), then the routines that keep progress steady, the CBT skills for body sensations and uncertainty, the changes to checking, reassurance, wearables and appointments, dated events such as waiting for results, situations from fear of recurrence to worried parents and health workers, and finally relapse prevention and specialist work.

What repeats is a daily tally of checks and searches totalled each Sunday, a Friday review, a monthly questionnaire score, a planned check-in with your doctor every quarter, twice-weekly exposure steps and a yearly round of screening, anniversaries and a booster fortnight. The Meeting notes, Habit tracker and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
