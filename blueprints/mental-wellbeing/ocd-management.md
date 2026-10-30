---
id: mental-wellbeing.ocd-management
name: OCD Management
description: "A map of your obsessions and rituals, an ERP-trained therapist, a graded exposure ladder with daily practice, less reassurance and fewer mental rituals, and a relapse plan that keeps the gains."
category: personal
version: 1.0.0
tags: [mental-wellbeing, ocd-management, everyone, erp, intrusive-thoughts, compulsions, exposure-hierarchy, reassurance-seeking]
author: Aurum Technology
starter_structure:
  templates:
    - habit-tracker
    - metrics-log
    - meeting-notes
    - reading-queue
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: OCD Management
          description: "Working on obsessive compulsive disorder with exposure and response prevention, therapy and tracking of compulsions and triggers."
          projects:
            - name: Getting an OCD assessment from your doctor
              description: |-
                ## Purpose
                Many people live with OCD for a decade or more before anyone names it, often because the thoughts feel too shameful to say aloud or the rituals pass as ordinary carefulness. A proper assessment from your doctor or a mental health service opens the door to treatment that works, usually exposure and response prevention, and rules out other explanations. Going in with notes means the appointment covers what is really happening rather than the safest-sounding part of it.

                ## Milestones
                1. An appointment booked with your doctor, or a self-referral made to a talking therapies service where that route exists.
                2. A one-page summary written of your main thoughts, rituals and the hours they take each day.
                3. The assessment attended and the clinician's conclusion written down in your own words.
                4. Next steps agreed, whether a referral, a waiting list or a treatment start date.

                ## Notes
                Clinicians hear intrusive thoughts about harm, sex, religion and contamination every week and know them as features of OCD, not wishes. You can hand over the written page if saying the thoughts aloud feels impossible.

                Before you start: this plan is general information to help you look after your own wellbeing. It is not medical or psychological advice and does not replace a doctor, therapist or counsellor. If you are in crisis, in danger or thinking about harming yourself, contact your local emergency number or a crisis line now.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An assessment has taken place and its outcome and the agreed next step are written down with the date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one page on your main obsessions, rituals and the daily hours they take"
                - "Book an appointment with your doctor or self-refer to a talking therapies service"
                - "Hand the page over at the appointment if speaking the thoughts is too hard"
                - "Write down the outcome and the agreed next step before leaving the building"
            - name: Baseline severity score on a standard OCD scale
              description: |-
                ## Purpose
                Progress in OCD is easy to misjudge: a good week feels like recovery and a bad one feels like starting again. Scoring yourself on a recognised measure, such as a self-report version of the Y-BOCS or the OCI-R, before treatment gives a fixed number to compare against every month after. Clinicians use the same scales, so your score also speaks their language.

                ## Milestones
                1. A recognised OCD measure chosen, ideally the one your clinician or service uses.
                2. The measure completed honestly for a typical week, not a best week.
                3. The total and any subscale scores recorded with the date.
                4. The baseline shared with your clinician or therapist.

                ## Notes
                A score is a tracking tool, not a diagnosis. Only a clinician can diagnose OCD.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated baseline score on a named OCD scale is recorded in your log and has been shared with your clinician."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your clinician which OCD rating scale their service uses"
                - "Complete the scale thinking about a typical week in the last month"
                - "Record the total and each subscale score with today's date"
                - "Send the baseline score to your therapist before the first session"
            - name: Obsession theme map
              description: |-
                ## Purpose
                OCD tends to cluster around a few themes, such as contamination, harm, doubt about locks and appliances, symmetry, relationships, religion or sexuality, and it can jump between them. Writing out each intrusive thought, the fear underneath it and what you dread happening shows which themes drive the most distress. Treatment plans are built theme by theme, so this map decides where the work starts.

                ## Milestones
                1. Every recurring intrusive thought from the past month listed, however uncomfortable.
                2. Each thought grouped under a theme, with its feared consequence written beside it.
                3. Each theme rated 0 to 10 for distress and for time taken.
                4. One or two themes picked as the first focus for treatment.

                ## Notes
                Keep the map private and somewhere safe. Writing a thought down does not make it more likely to happen, and noticing that it feels as if it might is part of the work.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written map of obsession themes, each with its feared consequence and a 0 to 10 distress rating, with a first focus chosen."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every intrusive thought that recurred in the past month"
                - "Group the thoughts into themes and add the feared consequence for each"
                - "Rate each theme 0 to 10 for distress and for the time it takes"
                - "Circle the one or two themes to work on first"
            - name: Inventory of visible and mental compulsions
              description: |-
                ## Purpose
                Washing, checking and arranging are easy to spot, but many compulsions happen silently: reviewing memories, counting, praying in a fixed way, replacing a bad thought with a good one or checking how you feel. Response prevention only works on rituals you can name, so a full inventory, hidden ones included, matters as much as the exposures themselves.

                ## Milestones
                1. Visible rituals listed with how often and how long each takes.
                2. Mental rituals listed separately, each described in a sentence.
                3. Subtle safety behaviours noted, such as using a sleeve to open doors or avoiding certain words.
                4. The total daily time spent on rituals estimated.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list separating visible rituals, mental rituals and safety behaviours, with an estimate of total daily minutes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every visible ritual you did yesterday and how long it took"
                - "List the mental rituals you notice, such as reviewing, counting or neutralising"
                - "Add the small safety behaviours, like tissues on handles or banned words"
                - "Estimate the total minutes a day that rituals take"
            - name: Avoidance and trigger list
              description: |-
                ## Purpose
                Avoidance is OCD's quiet partner: the bins you never empty, the knives kept out of sight, the route that skips the school, the films you no longer watch. Because avoiding a trigger means no ritual is needed, it can hide how much OCD is shaping your life. Listing what you steer around, and rating how hard each would be to face, gives the exposure ladder most of its rungs.

                ## Milestones
                1. Places, objects, people, words and activities you avoid listed in one document.
                2. Each item rated 0 to 100 for the distress facing it would cause.
                3. Each item linked to the obsession theme it belongs to.
                4. At least 25 items on the list, ranging from mild to severe.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of at least 25 avoided triggers, each rated 0 to 100 for distress and linked to an obsession theme."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Walk through a normal day in your head and note everything you steer around"
                - "Rate each avoided item 0 to 100 for expected distress"
                - "Tag each item with the obsession theme it belongs to"
                - "Add new items as you notice them over the following fortnight"
            - name: The OCD cycle in your own words
              description: |-
                ## Purpose
                Understanding why rituals make OCD stronger is what makes it possible to resist them. Intrusive thought, a spike of anxiety, the ritual, brief relief, and then a brain that has learnt the thought was dangerous and the ritual necessary. Drawing your own cycle with a real example from this week turns the theory into something you can point to when the urge arrives.

                ## Milestones
                1. A diagram of the obsession, anxiety, compulsion and relief cycle drawn with one of your own examples.
                2. The long-term cost of the short-term relief written beside the diagram.
                3. A second and third example from different themes added.
                4. The diagram explained aloud to your therapist or a trusted person.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand-drawn OCD cycle with three of your own examples, explained aloud to at least one other person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a short explanation of the OCD cycle from a recognised OCD charity"
                - "Draw the cycle using one ritual you did this week"
                - "Add two more examples from different themes"
                - "Explain the diagram aloud to your therapist or a trusted person"
            - name: One-week reassurance seeking count
              description: |-
                ## Purpose
                Asking 'are you sure I locked it?', 'do you still love me?' or 'could that make me ill?' is a compulsion, even when it looks like conversation. Most people underestimate how often they ask, and family members can end up answering dozens of times a day. Counting every request for one week, online searches included, shows the real size of the habit before you start cutting it.

                ## Milestones
                1. A simple tally method chosen, such as a phone note or a card in your pocket.
                2. Every reassurance request counted for seven days, including searches and asking yourself.
                3. Daily totals and the most common questions written up.
                4. The results shared with the people you ask most often.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Seven days of reassurance requests counted, with daily totals and the three most common questions written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up a tally note on your phone or a card in your pocket"
                - "Count every request for reassurance, spoken, typed or searched, for seven days"
                - "Write the daily totals and the three questions you ask most"
                - "Show the results to the person you ask most often"
            - name: Finding a therapist trained in ERP
              description: |-
                ## Purpose
                General talking therapy and reassurance-based counselling can make OCD worse, so the type of therapy matters more than usual. Exposure and response prevention, usually delivered within cognitive behavioural therapy, is the first-line psychological treatment, and therapists vary widely in whether they actually do it. A shortlist built with specific questions avoids months with someone who means well but never sets an exposure.

                ## Milestones
                1. Routes listed: public health service referral, workplace or insurance cover, and private specialists.
                2. Three therapists contacted, each asked how they treat OCD and whether sessions include exposures.
                3. Costs, waiting times and session format written side by side.
                4. One therapist chosen and the first appointment booked.

                ## Notes
                Good answers name ERP directly and describe doing exposures in the session. Be cautious if the plan is mainly talking about where the thoughts come from.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three therapists asked the same ERP questions, compared in writing, and a first session booked with one of them."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Search an OCD charity or professional body directory for ERP-trained therapists"
                - "Ask each therapist how they treat OCD and whether they do exposures in session"
                - "Compare costs, waiting times and online or in-person options side by side"
                - "Book the first appointment with the therapist you chose"
            - name: Choosing between ERP, medication or both
              description: |-
                ## Purpose
                Guidelines in many countries offer ERP, a medicine from the SSRI group, or a combination, depending on severity and what you can access. The right mix is a decision for you and your clinician, but it goes better when you arrive knowing your severity score, your preferences and your questions. Writing the decision down with a review date stops it drifting.

                ## Milestones
                1. Your baseline score, preferences and practical limits written on one page.
                2. A list of questions about each option prepared.
                3. The options discussed with your doctor or psychiatrist.
                4. The chosen route, the reasons and a review date recorded.

                ## Notes
                Do not start, stop or change any medicine without your prescriber.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A treatment route agreed with a clinician and written down with the reasons and a review date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your baseline score, preferences and practical limits on one page"
                - "List your questions about ERP, medication and combining the two"
                - "Discuss the options with your doctor or psychiatrist"
                - "Record the route you chose, the reasons and the review date"
                - "Revisit the treatment route with your clinician @recurring(yearly)"
            - name: Telling one trusted person about your OCD
              description: |-
                ## Purpose
                Secrecy keeps OCD powerful, especially when the thoughts feel shameful, and hiding rituals takes energy of its own. Choosing one person, deciding how much to share and what you want from them turns them into an ally rather than another source of reassurance. You decide the timing and the words.

                ## Milestones
                1. One person chosen who is calm, discreet and likely to be supportive.
                2. What you will share, and what you will keep private, written down.
                3. A clear ask prepared, such as 'please do not reassure me, remind me of my plan'.
                4. The conversation held and how it went noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "One trusted person has been told about the OCD and knows the specific way you want them to respond."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pick the one person you trust most to stay calm"
                - "Write the three things you most want them to know"
                - "Prepare a clear ask about how to respond when you seek reassurance"
                - "Have the conversation somewhere private with time to spare"
                - "Check in with them about how the arrangement is working @recurring(quarterly)"
            - name: Building your first exposure hierarchy
              description: |-
                ## Purpose
                An exposure hierarchy is a ladder of feared situations, ordered from mildly uncomfortable to the worst you can imagine, each paired with the ritual you will not do. It is the plan every exposure session follows. Starting around 30 to 40 out of 100 gives early wins without throwing you in at the deep end.

                ## Milestones
                1. Items from the trigger list turned into specific, repeatable exposure tasks.
                2. Each task rated 0 to 100 for expected distress.
                3. The response prevention rule for each task written beside it.
                4. At least 15 rungs for your main theme, checked with your therapist.

                ## Notes
                Make rungs specific: 'touch the kitchen bin lid, then make a sandwich without washing' beats 'touch dirty things'.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written hierarchy of at least 15 rungs for your main theme, each with a distress rating and a response prevention rule."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Turn ten items from your trigger list into specific exposure tasks"
                - "Rate each task 0 to 100 for how distressing it would be"
                - "Write the ritual you will not do beside each task"
                - "Review the ladder with your therapist and adjust the order"
            - name: Daily planned exposure session
              description: |-
                ## Purpose
                ERP works through repetition: the same exposure done daily, held without rituals until the urge passes or you can carry it, teaches the brain something reassurance never can. Thirty to sixty minutes of planned practice a day is what many ERP programmes ask for between sessions. Treating it like an appointment at a fixed time is what gets it done on hard days.

                ## Milestones
                1. A fixed daily time and place for exposure practice chosen.
                2. Each session recorded with the rung, peak distress and whether rituals were resisted.
                3. Five sessions a week completed for four weeks.
                4. At least three rungs climbed in the first month.

                ## Notes
                Start from the **Habit tracker** template. Distress dropping is welcome but not required; the aim is learning that you can carry uncertainty.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five recorded exposure sessions a week for four consecutive weeks, with at least three rungs climbed."
                cadence: rolling
              tasks:
                - "Choose a fixed daily time and place for exposure practice"
                - "Do the planned exposure and record peak distress and rituals resisted @recurring(daily)"
                - "Move up a rung once a task has stopped feeling hard"
                - "Show your session records to your therapist each week"
            - name: Compulsion and urge tally log
              description: |-
                ## Purpose
                Counting rituals sounds tedious, but it is the clearest evidence of change, and the act of noticing often slows a ritual down. A daily tally of urges, rituals done and rituals resisted, totalled weekly, shows trends that memory smooths over. It also gives your therapist hard numbers instead of impressions.

                ## Milestones
                1. A log with columns for date, urges, rituals done, rituals resisted and minutes spent.
                2. Entries made on at least six days a week.
                3. Weekly totals worked out and plotted.
                4. A month of weekly totals reviewed for a trend.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly totals of urges, rituals done and rituals resisted, plotted to show a trend."
                cadence: rolling
              tasks:
                - "Create the log with columns for urges, rituals done, resisted and minutes"
                - "Record today's urges and rituals before bed @recurring(daily)"
                - "Add up the week's totals and plot them @recurring(weekly:sun)"
            - name: Weekly exposure ladder re-rating
              description: |-
                ## Purpose
                Ratings on a hierarchy go stale fast: rungs that scored 70 in week one may sit at 30 by week four, and new triggers appear as old ones fade. A short weekly re-rating keeps the ladder honest, so you are neither repeating tasks that no longer stretch you nor jumping to rungs you are not ready for.

                ## Milestones
                1. A weekly slot for re-rating chosen, ideally a day before your therapy session.
                2. Each rung re-scored 0 to 100 with the date.
                3. Rungs below 20 marked as done and new rungs added.
                4. Eight weekly re-ratings completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly re-ratings recorded on the hierarchy, with completed rungs marked and new ones added."
                cadence: rolling
              tasks:
                - "Re-score every rung on the ladder for this week @recurring(weekly:sat)"
                - "Mark rungs that now score below 20 as done"
                - "Add any new trigger that has appeared as a fresh rung"
            - name: Monthly severity rescore
              description: |-
                ## Purpose
                Comparing a monthly score with your baseline answers the question everyone in treatment asks: is this working? A steady fall over several months is the pattern to look for, while a flat line after two or three months of real practice is a reason to talk to your clinician about adjusting the plan, not a reason to give up.

                ## Milestones
                1. The same OCD scale used as for the baseline, on the same day each month.
                2. Scores plotted against the baseline.
                3. Any month with no change or a rise noted with possible reasons.
                4. Six monthly scores completed and shared with your clinician.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly scores on the same scale as the baseline, plotted and shared with your clinician."
                cadence: rolling
              tasks:
                - "Complete the same OCD scale you used for your baseline @recurring(monthly:9)"
                - "Plot the score beside the baseline and earlier months"
                - "Write one line on anything that changed this month"
                - "Raise a flat or rising trend at your next appointment"
            - name: Therapy homework and session notes routine
              description: |-
                ## Purpose
                Most of ERP's benefit comes from what you do between sessions, and an hour a week with a therapist cannot see the other 167. A short routine for capturing the homework set, recording how it went and bringing three points to the next session makes every appointment start from evidence. It also keeps the plan alive when sessions get cancelled.

                ## Milestones
                1. Homework written down before leaving each session.
                2. Each homework task recorded as done, partly done or skipped, with what got in the way.
                3. Three points prepared before each session.
                4. Ten consecutive sessions with homework records.

                ## Notes
                Start from the **Meeting notes** template for each session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten consecutive therapy sessions, each with written homework, a completion record and three prepared points."
                cadence: rolling
              tasks:
                - "Write the homework down before you leave each session"
                - "Record how each homework task went and what got in the way"
                - "Ask the agent to turn the week's logs into three points for your therapist"
                - "Prepare three points to bring to this week's session @recurring(weekly:mon)"
            - name: Household agreement on reassurance and accommodation
              description: |-
                ## Purpose
                Families often end up washing extra, answering the same question twenty times or checking the door on someone's behalf, out of love. That accommodation keeps OCD going. A written agreement on what the household will gradually stop doing, and what they will say instead, protects relationships and the treatment at the same time.

                ## Milestones
                1. Current accommodations listed with who does each one.
                2. A stepped plan agreed for reducing each, starting with the easiest.
                3. A short supportive phrase chosen for household members to use instead of reassuring.
                4. The agreement reviewed monthly and the next step taken.

                ## Notes
                Reducing accommodation goes better with a therapist's help, especially where children are involved or distress runs high. Cutting everything at once usually backfires.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written household agreement listing accommodations to reduce and a supportive phrase, reviewed monthly for three months."
                cadence: rolling
              tasks:
                - "List every way people at home help with rituals or answer reassurance"
                - "Agree the first accommodation to reduce and by how much"
                - "Choose a supportive phrase household members will use instead of reassuring"
                - "Review the agreement together and take the next step @recurring(monthly:16)"
            - name: Weekly scan for new rituals and avoidance
              description: |-
                ## Purpose
                As one ritual fades, OCD often finds another: a mental check replaces a physical one, or a new theme moves in. A five-minute weekly scan for anything new, subtle or creeping back catches substitutions while they are small enough to drop easily.

                ## Milestones
                1. A short set of questions written for the weekly scan.
                2. Any new ritual, avoidance or safety behaviour written down when spotted.
                3. Each new item added to the hierarchy or response prevention plan.
                4. Twelve weekly scans completed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly scans recorded, with every new ritual or avoidance found added to the treatment plan."
                cadence: rolling
              tasks:
                - "Write four questions to ask yourself about new rituals each week"
                - "Run the scan and note anything new or creeping back @recurring(weekly:fri)"
                - "Add each new ritual to the hierarchy with a response prevention rule"
            - name: Everyday exposure choices
              description: |-
                ## Purpose
                Planned sessions build skill, but life offers exposures all day: the door handle, the knife drawer, the message left unchecked. Choosing to lean into one unplanned trigger each day, instead of steering round it, spreads ERP into ordinary life and stops progress being confined to practice time.

                ## Milestones
                1. A list of everyday triggers that can be faced without planning.
                2. One unplanned exposure chosen and done each day.
                3. Each choice noted in a word or two.
                4. Thirty days of everyday exposures logged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty days with at least one everyday exposure chosen and noted on each."
                cadence: rolling
              tasks:
                - "List ten everyday moments where you usually avoid or ritualise"
                - "Lean into one everyday trigger without the ritual and note it @recurring(daily)"
                - "Swap in harder everyday moments as the easy ones fade"
            - name: Quarterly OCD progress review
              description: |-
                ## Purpose
                Every three months, step back from the daily logs and look at the whole picture: scores, rituals per week, hours reclaimed, and what life now includes that it did not before. The quarterly review is where you decide whether to keep going as you are, add something, or ask your clinician about changing course.

                ## Milestones
                1. The quarter's scores, tallies and climbed rungs gathered on one page.
                2. Three things that improved and one that stalled written down.
                3. A decision recorded: continue, adjust or seek a change of treatment.
                4. Goals for the next quarter set.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A one-page quarterly review with scores, wins, stalls and a recorded decision about the next three months."
                cadence: rolling
              tasks:
                - "Gather the quarter's scores, tallies and climbed rungs on one page @recurring(quarterly)"
                - "Write three things that improved and one that stalled"
                - "Decide whether to continue, adjust or ask for a treatment change"
                - "Set two goals for the coming quarter"
            - name: Response prevention by delaying, shortening and dropping
              description: |-
                ## Purpose
                Stopping a ritual outright can feel impossible at first, so many therapists teach a stepped approach: delay it by five minutes, then shorten it or change how it is done, then drop it. Each step is a small exposure in itself and shows that the urge passes without the ritual. Practising the steps on one ritual teaches a skill you can use on all of them.

                ## Milestones
                1. One mid-level ritual chosen to practise on.
                2. The ritual delayed by at least five minutes on ten occasions.
                3. The ritual shortened or changed on ten occasions.
                4. The ritual dropped completely on at least five occasions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "One ritual delayed ten times, shortened ten times and dropped at least five times, with each attempt recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick one ritual to practise on, ideally a mid-level one"
                - "Delay the ritual by five minutes and note what happens to the urge"
                - "Shorten or change the ritual once delaying feels manageable"
                - "Drop the ritual entirely and record the outcome"
            - name: Imaginal exposure scripts
              description: |-
                ## Purpose
                Some fears cannot be faced directly: you cannot test whether a thought will make you harm someone or whether you are a bad person. Imaginal exposure, writing a short story of the feared outcome and reading or listening to it repeatedly, is the ERP tool for these. Done with a therapist's guidance, it takes the power out of thoughts you have been running from.

                ## Milestones
                1. The imaginal exposure method explained by your therapist or an ERP workbook.
                2. A first script of 150 to 300 words written in the present tense about one feared outcome.
                3. The script read or listened to on most days for two weeks without neutralising.
                4. Distress ratings recorded before and after each run.

                ## Notes
                Scripts can be very distressing to write. Build them with your therapist where you can, and do not use them on memories of real trauma, which need a different approach.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A written imaginal script used on at least ten days within two weeks, with distress ratings for each run."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your therapist to walk you through imaginal exposure"
                - "Write a 150 to 300 word present-tense script about one feared outcome"
                - "Record yourself reading the script aloud"
                - "Listen to the recording without neutralising and rate distress before and after"
            - name: Catching and dropping mental compulsions
              description: |-
                ## Purpose
                Mental rituals are the hardest to resist because nobody sees them and they can feel like ordinary thinking. Reviewing a conversation for the hundredth time, saying a phrase to cancel a bad thought, or checking whether you still feel attracted to your partner all keep OCD going. Learning to catch the moment a mental ritual starts, label it and step away is a skill that improves with practice.

                ## Milestones
                1. Your three most common mental rituals named and described.
                2. A short label chosen for each, such as 'reviewing again'.
                3. Ten instances caught and labelled within a week.
                4. A redirect practised for each, such as returning attention to the task in front of you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Ten mental rituals caught, labelled and left unfinished within one week, each noted in your log."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Name your three most common mental rituals in a sentence each"
                - "Choose a short label to say silently when one starts"
                - "Catch, label and step away from ten mental rituals this week"
                - "Note which redirect works best for each ritual"
            - name: Living with uncertainty, maybe or maybe not
              description: |-
                ## Purpose
                At the heart of most OCD is a demand for certainty the world cannot give. Responses like 'maybe I did, maybe I did not, and I am going to make dinner' practise accepting doubt instead of resolving it. Collecting phrases that fit your themes, and using them inside exposures, makes the response automatic.

                ## Milestones
                1. Five uncertainty phrases written that fit your main themes.
                2. One phrase used inside every exposure for two weeks.
                3. The phrase that works best for each theme marked.
                4. The best phrases written on a card you carry.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five uncertainty phrases written, practised in exposures for two weeks, with the best ones carried on a card."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write five uncertainty phrases that fit your main themes"
                - "Use one phrase in each exposure session for two weeks"
                - "Mark the phrase that works best for each theme"
                - "Copy the best phrases onto a card you carry"
            - name: Defusion skills for sticky thoughts
              description: |-
                ## Purpose
                Acceptance and commitment therapy offers ways to hold a thought lightly rather than argue with it: noticing 'I am having the thought that...', singing it to a silly tune, or watching it pass like a car on the road. These skills pair well with ERP because they replace both arguing and neutralising. Trying a few until one feels natural gives you a way to stay with a trigger without fighting it.

                ## Milestones
                1. Four defusion techniques tried for at least three days each.
                2. Each rated for how well it helped you stay with the thought.
                3. One or two favourites chosen for use in exposures.
                4. A note made of any technique that turned into a ritual, so it can be dropped.

                ## Notes
                Any technique can become a new ritual if it is used to make the thought go away. The aim is to let the thought stay.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four defusion techniques tried and rated, with one or two chosen for use in exposure practice."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read about four defusion techniques in an ACT workbook or with your clinician"
                - "Try each technique for three days on one recurring thought"
                - "Rate each technique for how well you could stay with the thought"
                - "Pick one or two to use inside exposure sessions"
            - name: OCD self-help reading list
              description: |-
                ## Purpose
                Well-written OCD books explain the cycle, give worked ERP examples and show that your particular thoughts are common. A short list of three or four books from authors who teach ERP gives support between sessions and while on a waiting list. Reading a chapter at a time, with notes, beats skimming many books in search of reassurance.

                ## Milestones
                1. Three or four ERP-based OCD books chosen, ideally with your therapist's input.
                2. One chapter read each month with a few notes.
                3. One technique from each book tried in practice.
                4. The list reviewed once a year.

                ## Notes
                Start from the **Reading queue** template. Watch for reading turning into research for reassurance; if it does, take a break.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three ERP-based OCD books on the list, with at least one chapter read and noted each month for six months."
                cadence: rolling
              tasks:
                - "Ask your therapist or an OCD charity for ERP-based book recommendations"
                - "Add three or four books to your reading queue"
                - "Read one chapter and note one technique to try @recurring(monthly:28)"
            - name: Thought-action fusion and inflated responsibility
              description: |-
                ## Purpose
                Two thinking patterns sit under much OCD: believing that having a thought makes it more likely, or as bad as acting on it, and feeling responsible for preventing any possible harm. Learning to spot them, and testing them with small behavioural experiments, loosens their hold. Your therapist can help design experiments that are safe and meaningful.

                ## Milestones
                1. Both patterns explained in your own words with one example of each.
                2. A responsibility pie chart drawn for one recent worry.
                3. One behavioural experiment on thought-action fusion designed and run.
                4. The results written up and discussed with your therapist.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One responsibility pie chart and one written behavioural experiment on thought-action fusion, reviewed with your therapist."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write one example of thought-action fusion from your own life"
                - "Draw a responsibility pie chart for a recent worry"
                - "Design a small experiment with your therapist to test a feared thought"
                - "Write up what the experiment showed"
            - name: Contamination exposures without washing rituals
              description: |-
                ## Purpose
                Contamination OCD can eat hours a day in handwashing, showering and cleaning, and leave hands cracked and sore. A theme-specific plan, working up from touching a bin lid to eating after handling a 'dirty' object, with clear rules on normal hygiene, lets you practise without guessing where the line is.

                ## Milestones
                1. Normal hygiene rules agreed with your therapist, such as washing before cooking and after the toilet.
                2. A contamination ladder of at least 12 rungs.
                3. The bottom half of the ladder completed without washing rituals.
                4. Daily washing time measured at the start and again after a month.

                ## Notes
                Agree what counts as normal hygiene with your therapist first, so exposures are challenging but sensible.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Daily washing time recorded before and after, with the bottom half of a 12-rung contamination ladder completed without rituals."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Agree normal hygiene rules with your therapist and write them down"
                - "Build a contamination ladder of at least 12 rungs"
                - "Time today's handwashing and showering as a starting point"
                - "Work through the bottom half of the ladder over the next month"
            - name: Leaving after one check, at home and at work
              description: |-
                ## Purpose
                Checking locks, taps, the oven, sent emails or spreadsheets can delay leaving the house by half an hour and add hours to a working week, and still leave doubt behind. The usual ERP goal is one ordinary check, done with attention, then walking away with the uncertainty. Practising this on a ladder of items frees time every day.

                ## Milestones
                1. Every item you check at home and at work listed with current checks per item.
                2. A one-check rule written for each item.
                3. The rule kept for the easiest five items for two weeks.
                4. Time taken to leave the house and to send routine work measured and reduced.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One-check rules kept on at least five items for two weeks, with time spent leaving the house measured before and after."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every item you check at home and at work and how many times"
                - "Write a one-check rule for each item"
                - "Leave after one check on the three easiest items and note the urge"
                - "Time how long it takes to leave the house each morning this week"
            - name: Symmetry, order and just-right exposures
              description: |-
                ## Purpose
                Some OCD is driven less by fear than by a nagging sense that things are not right: uneven objects, unfinished counts, a word that has to be rewritten. Exposures here involve deliberately leaving things wrong and living with the itch. Small daily asymmetries, gradually increased, teach that the feeling fades without fixing.

                ## Milestones
                1. Your just-right rituals listed, such as arranging, evening up, rereading or rewriting.
                2. A ladder of deliberate imperfections built.
                3. One imperfection left in place every day for three weeks.
                4. Time spent arranging or redoing recorded at the start and the end.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three weeks of daily deliberate imperfections recorded, with time spent on just-right rituals measured before and after."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the arranging, rereading or redoing rituals you do in a day"
                - "Build a ladder of deliberate imperfections from easy to hard"
                - "Leave one thing deliberately uneven or unfinished today"
                - "Measure time spent on just-right rituals now and after three weeks"
            - name: Harm intrusive thoughts exposure plan
              description: |-
                ## Purpose
                Unwanted thoughts about hurting someone, including people you love, are common in OCD and distressing precisely because they clash with your values. Avoiding knives, driving or time alone with children makes them grow. With a therapist, a plan of graded exposures, from writing the feared word to chopping vegetables with a loved one in the room, breaks the cycle.

                ## Milestones
                1. Harm-related avoidance listed, such as knives, driving or being alone with children.
                2. A graded ladder agreed with your therapist.
                3. Exposures from the lower half of the ladder completed.
                4. Previously avoided activities resumed and noted.

                ## Notes
                If you have thoughts of harming yourself or others that feel like wishes or plans rather than unwanted intrusions, contact your doctor or emergency services straight away.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Half of a therapist-agreed harm exposure ladder completed, with at least two previously avoided activities back in daily life."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List what you avoid because of harm thoughts"
                - "Agree a graded harm exposure ladder with your therapist"
                - "Complete one lower-rung harm exposure and record your distress"
                - "Write down each avoided activity as you resume it"
            - name: Relationship doubt exposure plan
              description: |-
                ## Purpose
                Relationship OCD fixes on questions like 'do I really love them?' or 'is this the right person?', and fuels comparing, checking feelings and polling friends. Feelings will never give the certain answer OCD demands. Exposures such as writing 'I may never be sure' while staying committed to the relationship let you live in the question instead of solving it.

                ## Milestones
                1. Relationship checking rituals listed, including mental checks and comparing.
                2. A ladder of exposures built, such as watching romantic films or writing uncertainty statements.
                3. Reassurance seeking about the relationship halved over a month.
                4. Your partner told what to say instead of reassuring, if you choose to involve them.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A relationship exposure ladder in use, with reassurance seeking about the relationship halved over one month by your own count."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the checks, comparisons and questions relationship doubts lead to"
                - "Build a ladder of relationship exposures from easy to hard"
                - "Note how often you seek relationship reassurance this week as a baseline"
                - "Agree with your partner what to say instead of reassuring"
            - name: Scrupulosity plan with a faith or ethics adviser
              description: |-
                ## Purpose
                Religious and moral scrupulosity turns prayer, confession or honesty into rituals: repeating prayers until they feel perfect, confessing tiny lapses, or dreading blasphemous thoughts. Many faith leaders understand OCD and will agree what ordinary practice looks like. Having that line drawn by someone you respect makes exposures feel permitted rather than wrong.

                ## Milestones
                1. Your religious or moral rituals listed.
                2. A conversation held with a faith leader or trusted adviser about what ordinary practice looks like.
                3. That agreed practice written down as your rule.
                4. Exposures planned with your therapist that stay within it.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written rule for ordinary practice agreed with a faith or ethics adviser, with three exposures done within it."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the prayer, confession or moral rituals you repeat"
                - "Ask a faith leader or adviser you respect to talk with you about OCD"
                - "Write down the ordinary practice you agreed together"
                - "Plan three exposures with your therapist that respect that rule"
            - name: Unwanted sexual intrusive thoughts plan
              description: |-
                ## Purpose
                Sexual intrusive thoughts, including about children, relatives or an orientation that is not yours, are a recognised and common OCD theme. People often carry them alone for years out of shame, quietly avoiding hugs, children or certain films. Naming the theme to a clinician who knows OCD, and building exposures with them, is how this theme is treated.

                ## Milestones
                1. The theme named to a clinician experienced in OCD.
                2. Avoidance and checking rituals linked to the theme listed.
                3. A graded exposure plan agreed in therapy.
                4. At least three avoided everyday situations resumed.

                ## Notes
                Checking your body for arousal or testing your reactions is itself a compulsion. Your therapist will help plan exposures that are appropriate.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The theme discussed with an OCD-experienced clinician and a graded exposure plan agreed, with three avoided situations resumed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the theme down to hand to your clinician if saying it is too hard"
                - "List what you avoid and check because of the thoughts"
                - "Agree a graded exposure plan for this theme in therapy"
                - "Record each everyday situation you return to"
            - name: Stopping online reassurance searching
              description: |-
                ## Purpose
                Searching symptoms, reading forums for people with the same fear or rereading articles is reassurance seeking with an endless supply. It buys a minute of relief and hours of doubt. A plan that combines blocking tools, a delay rule and a count brings it down without relying on willpower in the moment.

                ## Milestones
                1. A week of searches counted and the main search topics noted.
                2. Blocking or time-limit tools set up for the worst sites and forums.
                3. A 30-minute delay rule written for any OCD-related search.
                4. Searches reduced by at least half after a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "OCD-related searches counted before and after one month, showing at least a halving, with blocking tools in place."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your browser history for OCD-related searches over the past week"
                - "Set up blocking or time limits on the sites you use most for reassurance"
                - "Write a 30-minute delay rule on a note by your screen"
                - "Check the blocking settings still cover your current triggers @recurring(monthly:23)"
            - name: Cutting back confessing and over-apologising
              description: |-
                ## Purpose
                Confessing thoughts, apologising for small mistakes or telling a partner every intrusive worry can feel like honesty but works as a ritual: it hands the doubt to someone else for a moment. Learning to sit with the urge to confess, while still apologising for real wrongs, protects both recovery and relationships.

                ## Milestones
                1. A week of confessions and apologies noted.
                2. Real apologies separated from compulsive ones with your therapist's help.
                3. A delay rule applied to the urge to confess.
                4. Compulsive confessions halved over a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Compulsive confessions counted before and after a month, with a halving recorded and a clear rule for genuine apologies."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Note each confession or apology you make for a week"
                - "Sort them with your therapist into real wrongs and OCD urges"
                - "Wait an hour before acting on any urge to confess"
                - "Recount confessions after a month and compare"
            - name: Medication trial timeline for OCD
              description: |-
                ## Purpose
                Medicines used for OCD often take longer to show their effect than when used for depression, commonly several weeks and sometimes up to three months, and a trial is only fair if it lasts long enough. Agreeing the timeline with your prescriber, scoring symptoms monthly and preparing for each review stops a medicine being dropped too early or continued without benefit.

                ## Milestones
                1. The expected length of a fair trial agreed with your prescriber.
                2. Review dates set at the points your prescriber suggests.
                3. Your latest severity score brought to each review.
                4. A decision recorded at the end of the trial: continue, adjust or change.

                ## Notes
                The choice and dose of any medicine are for your prescriber. Keep side effect and dose records in your general medication log.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A medication trial completed for the length agreed with your prescriber, with scores at each review and an end-of-trial decision recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your prescriber how long a fair trial of this medicine is for OCD"
                - "Put each planned review date in your calendar"
                - "Bring your latest severity score to every review"
                - "Write down the end-of-trial decision and its reasons"
            - name: Preparing for your first ERP session
              description: |-
                ## Purpose
                First sessions set the tone. Arriving with your theme map, compulsion inventory, baseline score and a short list of goals means the therapist can start planning exposures instead of spending weeks gathering basics. Knowing what ERP involves also takes some of the dread out of agreeing to it.

                ## Milestones
                1. Theme map, compulsion inventory and baseline score saved together.
                2. Three goals for treatment written, such as cooking a meal with one handwash.
                3. Questions about session format, homework and contact between sessions prepared.
                4. The first session attended and next steps noted.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first ERP session attended with theme map, inventory, baseline and three goals in hand, and next steps written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put your theme map, inventory and baseline score in one folder"
                - "Write three concrete goals for what life looks like with less OCD"
                - "List questions about homework, session length and contact between sessions"
                - "Note the agreed next steps straight after the first session"
            - name: Top-of-the-ladder exposure day
              description: |-
                ## Purpose
                Reaching the top rung, the exposure that once seemed unthinkable, is a turning point in ERP and is worth planning like an event. Choosing the day, arranging support if you want it and planning something to do afterwards that involves no rituals makes it more likely to happen and to stick.

                ## Milestones
                1. The top rung confirmed with your therapist as ready to attempt.
                2. A date chosen with nothing else demanding that day.
                3. The exposure done and held without rituals.
                4. The experience written up, including what you learnt about the fear.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The top rung of the hierarchy completed on a planned date without rituals, with a written note on what it showed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm with your therapist that the top rung is ready to attempt"
                - "Pick a date with no other big demands and put it in the calendar"
                - "Plan something enjoyable for afterwards that involves no rituals"
                - "Write what the top-rung exposure taught you about the fear"
            - name: Travel and holidays with OCD
              description: |-
                ## Purpose
                Hotels, shared bathrooms, flights and unfamiliar kitchens can trigger contamination, checking and harm worries all at once, and a holiday can slide into a ritual marathon. Planning ahead which exposures you will keep up, what you will not check and how companions should respond lets the trip stay a holiday.

                ## Milestones
                1. Likely triggers for the trip listed.
                2. A packing and leaving routine with a fixed number of checks written.
                3. Two or three exposures chosen to keep up while away.
                4. Travel companions told how to respond to reassurance requests.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written OCD plan for the trip with a fixed check routine and agreed companion responses, followed for the whole trip."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the triggers the trip is likely to bring"
                - "Write a packing and leaving routine with a fixed number of checks"
                - "Choose two exposures to keep practising while away"
                - "Tell travel companions how you would like them to answer reassurance requests"
            - name: End of treatment handover session
              description: |-
                ## Purpose
                When regular ERP sessions finish, you become your own therapist. Using one of the last sessions to hand over the plan, agree what to keep doing, which signs mean getting back in touch and whether booster sessions exist makes the ending a step forward rather than a cliff edge.

                ## Milestones
                1. A last-sessions agenda agreed with your therapist.
                2. The exposures to keep doing written down with how often.
                3. Warning signs that mean returning for help listed.
                4. Booster session arrangements or a re-referral route recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written handover from your final sessions listing ongoing exposures, warning signs and how to get back into treatment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your therapist to use one of the last sessions as a handover"
                - "Write down the exposures to keep doing and how often"
                - "Agree the warning signs that mean you should get back in touch"
                - "Record how to book a booster session or get re-referred"
            - name: Intrusive thoughts about your baby as a new parent
              description: |-
                ## Purpose
                Pregnancy and the months after birth are a common time for OCD to start or worsen, often with frightening thoughts of harming the baby, contamination fears or checking again and again that they are breathing. These thoughts are unwanted and are not a sign you will act on them, but they deserve to be talked about. Raising them early with your midwife, child health nurse or doctor gets the right support, for birthing parents and partners alike.

                ## Milestones
                1. The thoughts and rituals written down to share with a professional.
                2. The concern raised with your midwife, child health nurse or doctor.
                3. A referral to perinatal or OCD-specific support made if offered.
                4. A limit on night-time checking agreed with your partner or support person.

                ## Notes
                If you feel unable to keep yourself or your baby safe, or the thoughts feel like urges you want to act on, contact emergency services or your local crisis line now.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Intrusive thoughts about the baby discussed with a midwife, child health nurse or doctor, with the agreed support written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the thoughts and checks down so you can hand them over"
                - "Raise the thoughts at your next midwife, nurse or doctor appointment"
                - "Ask about perinatal mental health or OCD-specific support near you"
                - "Agree a limit on night-time checking with your partner or support person"
            - name: Supporting a child or teenager with OCD
              description: |-
                ## Purpose
                Children with OCD often pull the whole family into rituals: fixed bedtime routines, answering the same question, washing clothes on demand. Parents are central to treatment, and good child OCD programmes coach them alongside the child. Getting an assessment, learning to step back from accommodation and supporting exposure homework at home make the biggest difference.

                ## Milestones
                1. Concerns written down and raised with the child's doctor or school support.
                2. An assessment by a child mental health service requested.
                3. Family accommodations listed and a plan to reduce them agreed with the clinician.
                4. A weekly family check-in on homework and progress running.

                ## Notes
                Avoid making the child the problem in front of siblings. Talk about OCD as something the family is working on together.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "An assessment requested, a plan to reduce family accommodation agreed with a clinician, and weekly check-ins held for two months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down the rituals and worries you have seen in your child this month"
                - "Ask the doctor for a referral to a child mental health service"
                - "List the ways the family joins in with your child's rituals"
                - "Hold a short family check-in on exposure homework @recurring(weekly:thu)"
            - name: Partner's plan for support without accommodation
              description: |-
                ## Purpose
                Partners of people with OCD are often caught between wanting to comfort and knowing the comfort feeds the problem. A partner who understands ERP, has agreed phrases for declining reassurance kindly and has their own support can be the strongest ally in treatment. Written for the partner, family member or close friend, this plan protects both of you.

                ## Milestones
                1. A short OCD explainer for families read together.
                2. Two or three agreed phrases for responding to reassurance requests.
                3. A rule agreed for what to do when distress is very high.
                4. Support found for the supporting partner, such as a carers' group or OCD family forum.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Agreed phrases and a high-distress rule written down by both partners, with the supporting partner connected to their own support."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a short OCD explainer for family members together"
                - "Agree two or three kind phrases for declining reassurance"
                - "Agree what to do together when distress is very high"
                - "Find a carers' group or family forum for the supporting partner"
            - name: Managing OCD as a student
              description: |-
                ## Purpose
                University and college bring shared kitchens, exam pressure, new routines and distance from usual support, and rereading or checking rituals can make coursework take twice as long. Registering with the disability or wellbeing service, planning exams with OCD in mind and finding treatment near your place of study keeps your course on track.

                ## Milestones
                1. Registration with the student disability or wellbeing service completed.
                2. Any exam or deadline adjustments agreed in writing.
                3. Treatment continued or started near your place of study.
                4. A limit on rereading and checking set for coursework.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Registered with the student support service, adjustments agreed in writing and a named treatment provider near your place of study."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Book an appointment with your college's disability or wellbeing service"
                - "Ask what exam and deadline adjustments are possible for OCD"
                - "Find out how to continue treatment near where you study"
                - "Set a limit on how many times you reread each piece of coursework"
                - "Review the support plan with the wellbeing service each term @recurring(quarterly)"
            - name: Starting ERP after decades of OCD
              description: |-
                ## Purpose
                People who have lived with OCD for twenty or thirty years often assume it is part of their personality and too late to treat. ERP works at any age, though long-standing rituals may be woven into a household and need gentler unpicking. Starting now, with realistic goals and patience about pace, can still give back hours every day.

                ## Milestones
                1. Rituals that have become 'just how I do things' listed honestly.
                2. Three realistic goals for the first six months written.
                3. An assessment or ERP referral requested.
                4. The first change made to one long-standing routine.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An ERP referral requested, three six-month goals written and one long-standing routine changed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the routines you have always assumed were just your way of doing things"
                - "Write three realistic goals for the next six months"
                - "Ask your doctor for an ERP referral, whatever your age"
                - "Pick one long-standing routine to start changing this month"
            - name: Written OCD relapse prevention plan
              description: |-
                ## Purpose
                OCD often flares at times of stress, illness, bereavement or big change, even after successful treatment, and a lapse is not a return to square one. A written plan listing your early warning signs, the exposures that worked, the people to tell and when to seek help again turns a wobble into a short detour.

                ## Milestones
                1. Personal early warning signs listed, such as new avoidance or more reassurance seeking.
                2. The exposures and skills that helped most written down.
                3. Steps for a lapse, and the point at which to contact a professional, set out.
                4. The plan shared with one trusted person.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written relapse prevention plan with warning signs, effective exposures, lapse steps and a contact point, shared with one person."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the early warning signs that OCD is creeping back for you"
                - "Write down the exposures and skills that helped most"
                - "Set out what you will do in a lapse and when you will contact a professional"
                - "Share the plan with one trusted person"
                - "Reread and update the relapse plan @recurring(yearly)"
            - name: Annual self-directed ERP booster month
              description: |-
                ## Purpose
                Gains from ERP last best when exposure stays a habit. A planned booster month each year, revisiting old hierarchy rungs, hunting for new avoidance and doing a few hard exposures on purpose, keeps OCD from quietly regaining ground.

                ## Milestones
                1. The booster month chosen and in the calendar.
                2. Old hierarchy rungs retested and re-rated.
                3. Any new avoidance found and turned into fresh exposures.
                4. A severity score taken at the start and end of the month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A booster month completed each year, with old rungs retested, new avoidance targeted and before and after scores recorded."
                cadence: cyclic
              tasks:
                - "Choose the month for your yearly ERP booster"
                - "Start the booster month by retesting old hierarchy rungs @recurring(yearly)"
                - "Turn any new avoidance into fresh exposures"
                - "Score yourself on your OCD scale at the start and end of the month"
            - name: Second opinion for hard-to-treat OCD
              description: |-
                ## Purpose
                When OCD stays severe after a full course of ERP and an adequate medication trial, specialist services can offer intensive ERP, residential programmes and other options not available locally. Asking for a referral or second opinion, with a clear record of what has already been tried, is how people reach them.

                ## Milestones
                1. A summary of treatments tried, with dates, durations and severity scores.
                2. Specialist OCD services or intensive programmes within reach identified.
                3. A referral or second opinion requested through your doctor.
                4. The specialist's recommendations recorded and a decision made.

                ## Notes
                Intensive programmes can mean weeks away from home or work. Ask about the time commitment and costs before agreeing.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A treatment history summary prepared and a specialist second opinion requested, with its recommendations recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Gather the dates, length and scores of every treatment you have tried"
                - "Ask the agent to turn your notes into a one-page treatment history"
                - "Find specialist OCD services or intensive programmes you could reach"
                - "Ask your doctor for a referral or second opinion"
            - name: Lived-experience volunteering with an OCD charity
              description: |-
                ## Purpose
                Once OCD is well managed, some people find that helping others, by co-facilitating a support group, sharing their story or answering helpline messages, strengthens their own recovery. Charities train volunteers and set boundaries so the role does not become a source of reassurance or overload. It is worth doing only when you feel steady, and pausing is always allowed.

                ## Milestones
                1. Volunteering roles with an OCD charity or local group researched.
                2. Training completed for the chosen role.
                3. A limit agreed on how much time and contact the role involves.
                4. Regular volunteering under way and reviewed after six months.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Volunteer training completed with an OCD charity and at least six months of regular volunteering within agreed limits."
                cadence: rolling
              tasks:
                - "Look up volunteering roles with an OCD charity or local support group"
                - "Talk to your therapist about whether now is a good time to volunteer"
                - "Complete the training the charity offers"
                - "Turn up for your volunteering session @recurring(monthly:3)"
---

# OCD Management

This area is for anyone living with obsessive compulsive disorder, whatever its theme, and for the parents and partners who get pulled into it. It starts with the foundations (an assessment, a baseline score, a map of your obsessions, rituals and avoidance, an ERP-trained therapist and a first exposure ladder), then the daily and weekly machinery of exposure practice and tracking, the core ERP skills, theme-by-theme exposure plans, dated events such as your first session and the top rung, situations for new parents, children, partners, students and people with long-standing OCD, and finally relapse prevention, boosters and specialist help.

What repeats is a daily planned exposure, a daily urge tally totalled each Sunday, a weekly ladder re-rating and scan for new rituals, a monthly severity rescore and household review, a quarterly progress review and a yearly booster month. The Habit tracker, Metrics log, Meeting notes and Reading queue templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
