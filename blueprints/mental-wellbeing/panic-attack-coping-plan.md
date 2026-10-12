---
id: mental-wellbeing.panic-attack-coping-plan
name: Panic Attack Coping Plan
description: "A medical check, a pocket coping card, a panic diary and an exposure ladder that takes you back, step by step, to the shops, trains, roads and rooms that panic took away."
category: personal
version: 1.0.0
tags: [mental-wellbeing, panic-attack-coping-plan, everyone, panic-disorder, agoraphobia, cbt, exposure]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - reading-queue
    - trip
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Panic Attack Coping Plan
          description: "Understanding panic attacks, building an in-the-moment coping plan and gradually returning to places and situations that feel unsafe."
          projects:
            - name: Doctor's appointment to check symptoms and discuss panic
              description: |-
                ## Purpose
                Chest pain, a pounding heart, breathlessness and dizziness deserve a proper medical look the first time, because thyroid problems, heart rhythm issues and some medicines can cause similar sensations. Once a doctor has examined you and ruled out the obvious physical causes, you can treat the next attack as panic with far more confidence, and the same appointment opens the door to treatment.

                ## Milestones
                1. An appointment booked with your doctor specifically about the attacks.
                2. A one-page symptom summary prepared, with dates, duration and what you were doing.
                3. Any tests the doctor suggests, such as bloods or a heart tracing, completed and results discussed.
                4. A clear note of what the doctor concluded and which treatment routes were offered.

                ## Notes
                If you ever have chest pain that is new, different from your usual attacks, or comes with collapse, call emergency services. A panic plan never replaces that.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A doctor has assessed the symptoms, any tests they ordered have been discussed, and their conclusion and treatment options are written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a doctor's appointment and say it is about repeated panic-like attacks"
                - "Write a one-page summary of symptoms, dates, length and setting of each attack"
                - "List every medicine, supplement and energy drink you currently take"
                - "Ask directly whether any physical cause needs ruling out and how"
                - "Write down the doctor's conclusion and the treatment routes offered"
            - name: Written account of your most recent panic attack
              description: |-
                ## Purpose
                Memory of a panic attack is usually a blur of terror, which makes it feel bigger and more random than it was. Writing the last one down while it is fresh, minute by minute, shows the first sensation you noticed, the thought that followed and how long the peak really lasted, which is the raw material for every later project.

                ## Milestones
                1. The setting, time and what you were doing just before written down.
                2. The first physical sensation you noticed identified.
                3. The scariest thought during the attack recorded in your own words.
                4. An estimate of how long the peak lasted and what ended it.

                ## Notes
                Write it as a factual report, not a judgement of yourself. Most people discover the peak lasted minutes, not the hour it felt like.
              priority: medium
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written account of one attack exists, naming the first sensation, the main frightening thought and the length of the peak."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write where you were and what you were doing just before the last attack"
                - "Name the first sensation you noticed and the thought that followed it"
                - "Estimate how many minutes the worst part lasted"
                - "Note what you did to get through it and what happened afterwards"
            - name: How the panic cycle works in your body
              description: |-
                ## Purpose
                Panic is the body's alarm system firing when there is no danger, then the mind reading the alarm's own sensations as proof of catastrophe. Understanding adrenaline, the fight or flight response and the loop between sensation and fearful thought is the single best predictor of getting better, because it turns a mysterious attack into a process you can interrupt.

                ## Milestones
                1. The main body changes in fight or flight listed, with the purpose of each.
                2. The panic cycle drawn as a loop: trigger, sensation, frightening interpretation, more adrenaline.
                3. Your own last attack mapped onto that loop.
                4. Three common panic beliefs, such as fainting or heart attack, checked against what actually happens.

                ## Notes
                Use a reputable health service or a recognised CBT for panic workbook as the source rather than forums.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page diagram of the panic cycle exists with your own most recent attack mapped onto it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a health service explanation of fight or flight and panic attacks"
                - "Draw the panic cycle as a loop on one page"
                - "Map your most recent attack onto the loop, step by step"
                - "Look up why panic rarely leads to fainting and write the reason down"
            - name: Two-week panic diary baseline
              description: |-
                ## Purpose
                Without numbers, it is impossible to tell whether anything you try is working, and panic tends to make every week feel like the worst one. Two weeks of recording each attack, its strength out of ten, the setting and the dread in between gives you a starting line to measure progress against.

                ## Milestones
                1. A diary format chosen with date, time, place, strength out of ten, length and main thought.
                2. Every attack in a fourteen-day stretch recorded within a few hours.
                3. A daily score for background dread recorded, even on days with no attack.
                4. Totals worked out: number of attacks, average strength and average dread.

                ## Notes
                Start from the **Metrics log** template. Record attacks you managed to head off too; they count as data.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Fourteen consecutive days are recorded, with attack count, average strength and average dread worked out."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up the diary columns: date, place, strength, length and main thought"
                - "Rate your background dread out of ten each evening for fourteen days"
                - "Record each attack within a few hours of it ending"
                - "Work out the totals and averages at the end of the fortnight"
            - name: Avoidance and safety behaviour inventory
              description: |-
                ## Purpose
                Panic shrinks a life quietly: the motorway gets dropped, then the big supermarket, then queues, and a bottle of water, a phone at full charge and a seat by the door become essential. Listing everything you avoid and everything you carry or do just in case shows the true size of the problem and becomes the menu for the exposure work ahead.

                ## Milestones
                1. A list of places, routes and activities you avoid or only do with someone.
                2. A list of safety behaviours, such as carrying water, sitting near exits or checking your pulse.
                3. Each item rated by how much anxiety facing it without the behaviour would cause.
                4. The three avoidances that cost you most in daily life marked.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written inventory of at least ten avoidances and safety behaviours exists, each rated out of a hundred, with the costliest three marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every place or activity you have stopped doing since the attacks began"
                - "Empty your bag and pockets and note what you carry in case of panic"
                - "Rate each item by how anxious facing it unprotected would make you"
                - "Mark the three avoidances that cost you most at work or home"
            - name: Pocket coping card for the first ten minutes
              description: |-
                ## Purpose
                In the middle of an attack nobody can think clearly, so the plan has to be written before it is needed. A short card in your wallet or phone lock screen, in your own words, reminds you what is happening, what to do with your breath and attention, and that the peak will pass without you having to escape.

                ## Milestones
                1. A card of no more than six lines written in plain words you would actually say to yourself.
                2. One line naming what the sensations are and why they are not dangerous.
                3. One concrete action for the body and one for attention.
                4. The card stored in two places you always carry.

                ## Notes
                Keep it short enough to read in fifteen seconds. Avoid making the card itself into a ritual you must obey; it is a reminder, not a rescue.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A coping card of six lines or fewer is saved on your phone and in your wallet, and has been read during at least one attack."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft six short lines you would want to hear during an attack"
                - "Ask the agent to suggest plainer wording for any line that sounds clinical"
                - "Save the card as your phone lock screen or a pinned note"
                - "Print a wallet-sized copy and keep it with your bank card"
            - name: Three concrete recovery goals
              description: |-
                ## Purpose
                A vague wish to stop panicking gives no direction, while a goal like taking the train to work alone twice a week tells you exactly what to practise towards. Choosing three specific goals across short, medium and longer reach keeps the exposure work pointed at the life you want back.

                ## Milestones
                1. Three goals written, each naming a place, an activity and whether you are alone.
                2. Each goal checked as something you could observe yourself doing.
                3. A rough order agreed: which one first and which one last.
                4. The goals shared with your therapist or trusted person if you have one.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three observable recovery goals are written down in priority order and shared with at least one other person."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the one thing you most miss doing since panic started"
                - "Turn it and two others into goals naming place, activity and company"
                - "Put the three goals in the order you want to reach them"
                - "Share the goals with your therapist or trusted person"
            - name: Briefing one trusted person on how to help
              description: |-
                ## Purpose
                Kind people often help in ways that keep panic going: rushing you out of the shop, calling an ambulance for a familiar attack, or saying they will always come with you. A ten-minute conversation with one partner, friend or colleague about what actually helps lets them stay calm and support recovery rather than avoidance.

                ## Milestones
                1. One person chosen who is often with you when attacks happen.
                2. A short note written on what an attack looks like and what helps.
                3. Clear wording agreed on what not to do, such as leading you out straight away.
                4. An agreed rule for when they should call for medical help.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One named person has been briefed with a written note covering what helps, what to avoid and when to call for help."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the person who is most often around when attacks happen"
                - "Write five lines on what an attack looks like and what helps"
                - "Talk it through with them over a coffee rather than straight after an attack"
                - "Agree together when a call for medical help would genuinely be needed"
            - name: Choosing a CBT for panic treatment route
              description: |-
                ## Purpose
                Cognitive behavioural therapy with exposure is the best-studied treatment for panic disorder, and it comes in several forms: face-to-face therapy, guided self-help with a practitioner, group courses and structured digital programmes. Comparing waiting times, cost and format against your situation lets you start something within weeks instead of drifting on a waiting list.

                ## Milestones
                1. The routes available to you listed: public service, workplace scheme, private therapist, guided self-help, digital programme.
                2. Waiting time, cost and session format noted for each.
                3. A check made that any therapist is accredited and has panic or agoraphobia experience.
                4. One route chosen and the referral or first session booked.

                ## Notes
                Ask any therapist directly whether they use exposure work for panic. Talking alone, without practice between sessions, rarely shifts it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A treatment route has been chosen after comparing at least three options, and a referral or first appointment is booked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the CBT for panic routes available through your doctor, employer and locally"
                - "Note the waiting time and cost of each route"
                - "Ask any private therapist whether they use exposure for panic"
                - "Book the referral or first session on the route you chose"
            - name: Light-touch nightly panic log
              description: |-
                ## Purpose
                After the baseline, a full diary every day becomes a chore that keeps attention fixed on panic. A two-minute nightly entry, just attacks if any, strength and one word on the setting, keeps enough data to spot progress and lapses without making the log itself a source of worry.

                ## Milestones
                1. A shortened log format with no more than four fields.
                2. Entries made on at least six nights a week for a month.
                3. Panic-free days recorded as zero, not left blank.
                4. The log still taking under two minutes a night after a month.

                ## Notes
                If the log starts to feel like checking yourself for danger, cut it to weekly and talk it over with your therapist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of nightly entries kept on at least six nights a week, including zeros for panic-free days."
                cadence: rolling
              tasks:
                - "Cut the baseline diary down to four fields at most"
                - "Log the day's attacks, or a zero, before bed @recurring(daily)"
                - "Check after a month that the log still takes under two minutes"
            - name: Sunday panic pattern review
              description: |-
                ## Purpose
                Patterns hide in daily entries: attacks clustering after poor sleep, on caffeine-heavy mornings or before particular meetings. Fifteen minutes each Sunday with the week's log shows what is shifting, which exposure steps worked and what to aim for next week.

                ## Milestones
                1. A weekly fifteen-minute slot fixed in the calendar.
                2. The week's attack count and average strength compared with the baseline.
                3. One pattern or trigger noted each week, or a note that none showed.
                4. Next week's exposure targets written before the review ends.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly reviews are recorded, each comparing the week with the baseline and setting next week's targets."
                cadence: rolling
              tasks:
                - "Put a fifteen-minute review slot in the calendar for Sunday evenings"
                - "Compare the week's attacks and dread scores with your baseline @recurring(weekly:sun)"
                - "Write next week's two exposure targets before closing the log"
            - name: Twice-weekly planned exposure sessions
              description: |-
                ## Purpose
                Exposure works through repetition: going back into a feared situation often enough, for long enough, that the brain learns it is survivable. Two planned sessions a week, each written down beforehand with a prediction and afterwards with what happened, steadily moves you up the ladder instead of waiting to feel ready.

                ## Milestones
                1. Two fixed exposure slots in the week, treated like appointments.
                2. Each session planned with the step, the prediction and how long you will stay.
                3. Each session recorded with peak anxiety and whether the prediction came true.
                4. The ladder updated monthly to reflect steps that now feel easy.
                5. Eight weeks of sessions completed with no more than three missed.

                ## Notes
                Stay until anxiety has noticeably dropped or the planned time is up, not until it has vanished. Leaving at the peak teaches the opposite lesson.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sixteen exposure sessions over eight weeks are recorded with predictions and outcomes, and the ladder has been updated at least twice."
                cadence: rolling
              tasks:
                - "Choose two regular times in the week for exposure practice"
                - "Do the planned exposure step and record peak anxiety and outcome @recurring(weekly:tue,sat)"
                - "Move steps that now feel easy down the ladder and add the next one @recurring(monthly:12)"
                - "Write the prediction for each session before you set off"
            - name: Calm-day rehearsal of the coping steps
              description: |-
                ## Purpose
                Skills learned only in the middle of an attack are hard to reach, much as a fire drill is pointless during the fire. Running through the coping card once a week on an ordinary calm day keeps the steps familiar enough that they come back automatically when the alarm goes off.

                ## Milestones
                1. A weekly five-minute rehearsal slot chosen.
                2. The coping card read aloud and each step practised in full.
                3. One step reworded if it felt awkward in rehearsal.
                4. Eight rehearsals completed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly rehearsals of the coping card are ticked off, with any reworded lines updated on the card."
                cadence: rolling
              tasks:
                - "Pick a quiet five-minute slot each week for rehearsal"
                - "Read the coping card aloud and practise each step once @recurring(weekly:wed)"
                - "Reword any line on the card that felt awkward when said aloud"
            - name: Monthly avoidance creep check
              description: |-
                ## Purpose
                Avoidance returns quietly: a friend drives so you do not have to, the online shop replaces the supermarket, the far end of the train gets swapped for the door. A monthly look back at the inventory catches these small retreats while they are still easy to reverse.

                ## Milestones
                1. The original inventory used as the checklist each month.
                2. Any new avoidance or safety behaviour added with the month it appeared.
                3. One crept-back item turned into an exposure step for the coming month.
                4. Six monthly checks completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly checks are recorded against the inventory, each with any new avoidance added and one reversal planned."
                cadence: rolling
              tasks:
                - "Reread the inventory and mark anything you have started avoiding again @recurring(monthly:20)"
                - "Add any new safety behaviour with the month it appeared"
                - "Turn one crept-back item into next month's first exposure step"
            - name: Aerobic exercise to get used to a racing heart
              description: |-
                ## Purpose
                Many people with panic quietly stop exercising because a fast heart and heavy breathing feel like the start of an attack. Regular aerobic activity, built up gradually, rebuilds tolerance for those exact sensations in a safe setting and makes them feel ordinary again.

                ## Milestones
                1. Any medical limits on exercise checked with your doctor if you have a heart, lung or other condition.
                2. One aerobic activity chosen that raises your heart rate, such as brisk walking, cycling or swimming.
                3. Two sessions a week kept for eight weeks.
                4. Intensity raised gradually until breathlessness no longer triggers alarm.

                ## Notes
                Start from the **Habit tracker** template. Notice the sensations on purpose during the session rather than distracting yourself from them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sixteen aerobic sessions over eight weeks are ticked off, with a note of how alarming the raised heart rate felt at the start and the end."
                cadence: rolling
              tasks:
                - "Choose one aerobic activity you can do near home"
                - "Rate how alarming a racing heart feels before you begin, out of ten"
                - "Do a session that leaves you breathing hard for at least ten minutes @recurring(weekly:mon,thu)"
                - "Rerate the alarm after eight weeks and compare"
            - name: Quarterly coping card refresh
              description: |-
                ## Purpose
                A card written in the first fortnight reflects early fears, and as recovery moves on some lines stop fitting or start sounding like a rescue ritual. Rereading and trimming it each quarter keeps it accurate, and over time it should get shorter.

                ## Milestones
                1. The card reread against the last quarter's attacks.
                2. Lines that no longer help removed or rewritten.
                3. Any new situation, such as driving or work, reflected in the wording.
                4. The updated card saved in both places you carry it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The coping card has been reviewed in each of four consecutive quarters, with the date of the latest version recorded."
                cadence: cyclic
              tasks:
                - "Reread the coping card alongside the last three months of the log @recurring(quarterly)"
                - "Delete or rewrite any line you have not used in three months"
                - "Save the new version on your phone and in your wallet"
            - name: Between-session CBT homework log
              description: |-
                ## Purpose
                Most of the change in CBT for panic happens between sessions, in the experiments and exposures you do on your own. Keeping a simple homework log, filled in on a fixed day each week, means you arrive at each session with real results to discuss rather than a vague memory.

                ## Milestones
                1. A homework log with the task set, attempts made and what happened.
                2. The log updated weekly between sessions.
                3. Each session opened by going through the log.
                4. A note of any homework that was too big, so it can be broken down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The homework log has an entry for every week between sessions across a full course of therapy."
                cadence: rolling
              tasks:
                - "Create a homework log with columns for task, attempts and outcome"
                - "Write up the week's homework attempts and what you learned @recurring(weekly:fri)"
                - "Flag any homework that felt too big to raise at the next session"
            - name: Routine for anticipatory dread before outings
              description: |-
                ## Purpose
                For many people the hours before a feared trip are worse than the trip itself, and dread is often what stops them going. A short routine for the run-up, writing the prediction, setting a leaving time and refusing to rehearse disasters, makes it far more likely you actually set off.

                ## Milestones
                1. The usual pattern of dread before outings written down: when it starts and what it says.
                2. A three-step run-up routine written for planned outings.
                3. The routine used before at least five outings.
                4. Dread before and actual anxiety during compared for each.

                ## Notes
                The comparison is the point: most people find the dread scores higher than the event itself.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The run-up routine has been used before five outings, each with dread and actual anxiety scores compared."
                cadence: rolling
              tasks:
                - "Write down when dread usually starts before an outing and what it tells you"
                - "Write a three-step run-up routine with a fixed leaving time"
                - "Score dread beforehand and anxiety during the next five outings"
                - "Compare the two scores for each outing and note the gap"
            - name: Catching catastrophic thoughts mid-panic
              description: |-
                ## Purpose
                Panic is driven by a few specific predictions: I am having a heart attack, I will faint, I will lose control or go mad. Learning to spot your own versions as they happen, and to name them as predictions rather than facts, takes much of the fuel out of the attack.

                ## Milestones
                1. Your three most frequent panic thoughts identified from the diary.
                2. Each one rated for how strongly you believe it during an attack and afterwards.
                3. Evidence for and against each written down calmly.
                4. A short balanced response written for each, added to the coping card if it helps.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your three main panic thoughts are written down with belief ratings during and after attacks, evidence on both sides and a balanced response for each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull your three most common panic thoughts out of the diary"
                - "Rate how much you believe each during an attack and the day after"
                - "Write the evidence for and against each thought"
                - "Draft a one-line balanced response to each thought"
            - name: Behavioural experiments to test panic predictions
              description: |-
                ## Purpose
                Arguing with a panic thought only goes so far; testing it is what changes belief. A set of small experiments, such as standing in a hot room without sitting down to see whether you faint, gives you first-hand evidence that the feared outcome does not happen.

                ## Milestones
                1. Three predictions turned into experiments with a clear test and a clear result.
                2. Each experiment run with the belief rating recorded before and after.
                3. The outcome written in one sentence: what happened versus what was predicted.
                4. Belief in each prediction lowered by at least half.

                ## Notes
                Agree experiments that involve physical strain with your therapist or doctor first.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three experiments are recorded with before and after belief ratings, and belief in each prediction has fallen by at least half."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Turn one panic prediction into a test you could run this week"
                - "Rate how strongly you believe the prediction before the test"
                - "Run the experiment without any safety behaviour"
                - "Write what happened against what you predicted, and rerate belief"
            - name: Interoceptive exposure drills
              description: |-
                ## Purpose
                Interoceptive exposure means bringing on panic sensations deliberately, by spinning in a chair, breathing through a thin straw or running on the spot, until they stop being frightening. It is one of the most effective parts of CBT for panic because it attacks the fear of the body itself, not just of places.

                ## Milestones
                1. The drills cleared with your doctor or therapist if you have any heart, lung, seizure or pregnancy-related condition.
                2. Six standard drills tried once each and rated for how much they resemble panic.
                3. The three most panic-like drills repeated until fear falls below three out of ten.
                4. Drills done without any safety behaviour, such as sitting down early.

                ## Notes
                Do each drill for the full time and let sensations settle on their own afterwards. Stopping early teaches that the sensations were dangerous.
              priority: medium
              deadlineOffsetDays: 56
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three panic-like drills have been repeated until fear is below three out of ten, with ratings recorded for every session."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check with your doctor or therapist that interoceptive drills are safe for you"
                - "Try six standard drills once each and rate how panic-like they feel"
                - "Repeat your three most panic-like drills and rate fear after each @recurring(weekly:sat)"
                - "Stop using any safety behaviour during the drills"
            - name: Dropping safety behaviours one at a time
              description: |-
                ## Purpose
                Safety behaviours feel protective, but each one quietly tells the brain that the attack would have been dangerous without it. Dropping them one by one, starting with the easiest, lets each exposure prove the situation is safe on its own terms.

                ## Milestones
                1. Safety behaviours from the inventory ordered from easiest to hardest to drop.
                2. The easiest one dropped completely for two weeks.
                3. Each later one dropped in turn, with anxiety ratings recorded.
                4. Hidden ones found and listed, such as checking a smartwatch pulse or mentally mapping exits.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least four safety behaviours have each been dropped for two weeks or more, with anxiety ratings recorded for each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Order your safety behaviours from easiest to hardest to give up"
                - "Drop the easiest one completely for two weeks"
                - "Turn off heart rate alerts on any smartwatch or fitness tracker"
                - "Look for subtle ones, such as scanning for exits, and add them to the list"
            - name: Grounding for unreality and detachment feelings
              description: |-
                ## Purpose
                Derealisation, the world looking flat or dreamlike, and depersonalisation, feeling detached from yourself, are common during panic and are often the most frightening part because people fear they are losing their mind. Understanding them as an effect of high anxiety, and having a couple of grounding moves, makes them far less alarming.

                ## Milestones
                1. A plain explanation of derealisation and depersonalisation read from a reputable source.
                2. Two grounding moves chosen, such as naming five things you can see or pressing feet into the floor.
                3. The moves practised on calm days and used during at least one episode.
                4. A line on these feelings added to the coping card.

                ## Notes
                If these feelings continue for long periods outside of panic, mention it to your doctor.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two grounding moves are written on the coping card and have been used during at least one episode of unreality."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a reputable explanation of derealisation during anxiety"
                - "Choose two grounding moves that use sight, touch or sound"
                - "Practise both moves on a calm day this week"
                - "Add one line about unreality feelings to your coping card"
            - name: Letting the wave peak without fighting it
              description: |-
                ## Purpose
                Fighting an attack, by gripping the arms of a chair, forcing slow breaths or demanding it stop, often keeps it going. Learning to observe the sensations, let them rise and fall, and carry on with what you were doing teaches the deepest lesson in panic recovery: it passes on its own.

                ## Milestones
                1. The idea of accepting rather than fighting sensations read about from a CBT or acceptance-based source.
                2. A short phrase chosen to use when an attack starts, such as let it come.
                3. At least three attacks or near-attacks met without trying to stop them.
                4. The length and strength of those attacks compared with earlier ones.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three attacks met with an accepting stance are recorded, with their length and strength compared against the baseline."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a short section on acceptance of panic sensations"
                - "Choose a three-word phrase to say when an attack begins"
                - "Practise staying put and naming sensations during the next near-attack"
                - "Compare the length of accepted attacks with your baseline average"
            - name: Understanding over-breathing and tingling
              description: |-
                ## Purpose
                Breathing fast and shallow during panic lowers carbon dioxide in the blood, which causes tingling hands, light-headedness and a tight chest that then feed the fear. Understanding this chain, and noticing your own breathing pattern, explains several of the scariest symptoms in one go.

                ## Milestones
                1. The link between over-breathing and tingling, dizziness and chest tightness written in your own words.
                2. Your own breathing at rest observed and noted: chest or belly, fast or slow.
                3. Over-breathing deliberately produced for one minute with a therapist's agreement, to see the symptoms appear.
                4. A note on the coping card that these symptoms come from breathing, not illness.

                ## Notes
                This is about understanding the symptoms, not about finding a perfect breathing technique; breathing that becomes a rigid rescue can turn into a safety behaviour.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note links your tingling and dizziness to over-breathing, confirmed by one deliberate over-breathing trial."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read how over-breathing causes tingling and light-headedness"
                - "Watch your breathing at rest for two minutes and note the pattern"
                - "Agree a one-minute over-breathing trial with your therapist"
                - "Add a line about breathing-linked symptoms to your coping card"
            - name: Working through a CBT for panic self-help book
              description: |-
                ## Purpose
                Several well-regarded self-help workbooks follow the same structure as therapist-led CBT for panic, and working through one properly, exercises included, can be enough on its own for some people and a strong supplement for others. Going chapter by chapter with the exercises done keeps it from becoming one more book read and shelved.

                ## Milestones
                1. One workbook chosen that is based on CBT for panic or agoraphobia.
                2. A weekly reading and exercise slot fixed.
                3. Each chapter's exercises completed, not just read.
                4. The whole book finished within three months.

                ## Notes
                Start from the **Reading queue** template. Ask your doctor or therapist which workbook they recommend.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A CBT-based panic workbook is finished within three months with every chapter's exercises completed."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your doctor or therapist which panic workbook they recommend"
                - "Get the book from the library or a shop this week"
                - "Read one chapter and complete its exercises @recurring(weekly:thu)"
                - "Note the one idea from each chapter you most want to keep"
            - name: Graded exposure ladder for avoided places
              description: |-
                ## Purpose
                Facing everything at once is overwhelming, and facing nothing keeps the world small. A ladder of ten to fifteen steps, from mildly uncomfortable to your hardest goal, lets you climb back gradually, each rung chosen to be hard but doable.

                ## Milestones
                1. Ten to fifteen steps written, drawn from the inventory and your recovery goals.
                2. Each step rated from zero to a hundred for expected anxiety.
                3. Gaps filled so no jump between rungs is larger than about fifteen points.
                4. The first step chosen and booked into an exposure slot.

                ## Notes
                Vary steps by distance, time, crowd size and whether you are alone. The same place at a busier time is a new rung.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written ladder of at least ten rated steps exists, with no gap larger than about fifteen points and the first step scheduled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List ten to fifteen steps between where you are and your hardest goal"
                - "Rate each step from zero to a hundred for expected anxiety"
                - "Add in-between steps wherever the jump is too large"
                - "Schedule the first step into this week's exposure slot"
            - name: Supermarket and queue return plan
              description: |-
                ## Purpose
                Supermarkets combine most panic triggers at once: bright lights, crowds, queues and the feeling of being trapped at the till. A staged return, from a quiet corner shop at an off-peak hour to a full weekly shop on a Saturday, gives back one of the most practical everyday freedoms.

                ## Milestones
                1. Five or six stages written, from a small shop at a quiet time to the full weekly shop.
                2. Each stage repeated until anxiety drops to around a third of its starting level.
                3. A queue at a busy till stood in without leaving.
                4. One full weekly shop done alone at a busy time.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A full weekly shop has been done alone at a busy time, including a staffed till queue, without leaving early."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write five shop stages from a quiet corner shop to the weekly shop"
                - "Visit a small shop at a quiet hour and buy three items"
                - "Join the longest staffed till queue instead of using self-checkout"
                - "Do one full weekly shop alone on a busy morning"
            - name: Public transport return plan
              description: |-
                ## Purpose
                Buses, trains and underground lines are hard because you cannot get off whenever you like, which is exactly what panic wants. Building back from one stop at a quiet time to the full commute at rush hour restores independence and often reopens work and social options that had closed.

                ## Milestones
                1. The transport routes you need or miss most listed.
                2. Stages written from one stop off-peak to the full route at rush hour.
                3. Express or non-stop sections included once local stops feel manageable.
                4. Your target route completed alone at a busy time.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Your target public transport route has been completed alone at a busy time, with every earlier stage recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose the one route you most need back"
                - "Ride one stop off-peak and stay on until anxiety drops"
                - "Add one stop each session until you reach the full route"
                - "Take an express or non-stop section once local stops feel manageable"
            - name: Driving again after panic at the wheel
              description: |-
                ## Purpose
                An attack while driving is frightening because of the fear of losing control of the car, and many people then stop driving entirely or avoid motorways, bridges and tunnels. A careful step-by-step return, starting in quiet places, rebuilds confidence while keeping you and others safe.

                ## Milestones
                1. Any medical or licensing questions about driving with panic checked with your doctor.
                2. Stages written from a quiet car park to the roads you avoid.
                3. Safe stopping places identified on each route without making them a crutch.
                4. Your hardest road, such as a motorway or bridge, driven alone.

                ## Notes
                Panic attacks do not usually make people lose control of a car, but only drive when you feel able to drive safely and follow your doctor's advice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The hardest avoided road has been driven alone, with each earlier stage recorded and any medical questions answered first."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your doctor whether anything about your panic affects driving"
                - "Write driving stages from a quiet car park to your hardest road"
                - "Take one practice drive from the ladder this week @recurring(weekly:sun)"
                - "Drive the hardest road once with a passenger, then once alone"
            - name: Going out without your safe person
              description: |-
                ## Purpose
                Many people with agoraphobia can go almost anywhere with a partner or parent but almost nowhere alone, and the safe person slowly becomes another safety behaviour. Gradually increasing distance, from them waiting in the car to them staying at home, gives both of you your freedom back.

                ## Milestones
                1. The safe person agreed to the plan and understands why it helps.
                2. Stages written: them nearby, them waiting outside, them at the end of the phone, then no contact.
                3. Each stage repeated until it feels routine.
                4. One regular outing done entirely alone with no check-in.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A regular outing has been completed alone with no phone check-in, after working through the agreed stages with your safe person."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Explain the plan to your safe person and agree their role at each stage"
                - "Go into a shop while they wait outside in the car"
                - "Do the same trip while they stay at home and only answer if you call"
                - "Repeat the trip with no check-in at all"
            - name: Caffeine step-down experiment
              description: |-
                ## Purpose
                Caffeine produces a racing heart, jitters and sometimes a sense of dread, and people prone to panic tend to be sensitive to it. A gradual four-week step-down, tracked against the panic log, shows whether your intake is part of the picture without the withdrawal headaches of stopping overnight.

                ## Milestones
                1. Current daily caffeine counted from coffee, tea, energy drinks, cola and pre-workout products.
                2. Intake reduced by about a quarter each week over four weeks.
                3. Attack count and dread compared before and after.
                4. A decision recorded on what level to keep.

                ## Notes
                Some people with panic choose to keep a little caffeine and later use it as part of exposure. Decide after the experiment, not before.
              priority: low
              deadlineOffsetDays: 42
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A four-week step-down is completed with attack and dread scores compared, and a decision on your caffeine level written down."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Count every caffeinated drink and product you have in a typical day"
                - "Cut your intake by about a quarter this week"
                - "Swap one drink a day for a decaf or caffeine-free version"
                - "Compare the panic log before and after and record your decision"
            - name: Alcohol, cannabis and nicotine honest audit
              description: |-
                ## Purpose
                A drink can calm panic in the moment, but rebound anxiety the next day, hangovers and withdrawal often make attacks more likely, and cannabis triggers panic for some people. An honest four-week audit of what you use and how the following day feels shows whether something you rely on is feeding the problem.

                ## Milestones
                1. Four weeks of use recorded alongside the panic log.
                2. Next-day dread and attacks compared between use and no-use days.
                3. Any use specifically to cope with panic identified.
                4. A decision written down, and support sought if cutting back feels hard.

                ## Notes
                If you drink heavily every day, do not stop suddenly without talking to a doctor; withdrawal can be dangerous.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four weeks of use are recorded beside the panic log, the next-day effect is compared, and a written decision exists."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add a column for alcohol, cannabis and nicotine to your panic log"
                - "Mark any time you used something to calm panic down"
                - "Compare next-day dread after use and no-use days after four weeks"
                - "Write down what you will change and who could help if it is hard"
            - name: Questions to take to a prescriber about medication
              description: |-
                ## Purpose
                Some people with panic are offered medication alongside or instead of therapy, and the options differ a lot in how quickly they work, how long they are taken and what stopping involves. Going in with a written list of questions means you leave with enough information to make the decision with your prescriber rather than in a rush.

                ## Milestones
                1. Your reasons for considering medication written down.
                2. A list of questions on how each option works, how long it takes, side effects and stopping.
                3. The appointment held and the answers recorded.
                4. A decision noted, including any plan to review it.

                ## Notes
                Decisions about starting, changing or stopping any medicine belong with your prescriber. Some medicines for anxiety can cause dependence, so ask about this directly.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of questions has been taken to a prescriber, the answers recorded and a decision noted with a review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down why you are considering medication now"
                - "Ask the agent to help turn your worries into a clear list of questions"
                - "Book an appointment with your doctor or prescriber to discuss options"
                - "Record the answers and the decision you reach together"
            - name: Returning to the place of your worst attack
              description: |-
                ## Purpose
                The place where your worst attack happened often carries a charge out of all proportion: a particular shop, station, office or motorway junction. Planning a deliberate return, possibly in stages, and staying long enough for the fear to drop, takes the power out of that memory.

                ## Milestones
                1. The place named and a realistic date chosen.
                2. Smaller steps done first if the full return rates above seventy out of a hundred.
                3. The visit made, staying until anxiety noticeably drops.
                4. What happened written down beside the original account.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The place of the worst attack has been revisited and stayed in until anxiety dropped, with the outcome written beside the original account."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Name the place and rate how anxious a return would make you"
                - "Plan two smaller steps if the rating is above seventy"
                - "Visit the place and stay until your anxiety has clearly dropped"
                - "Write the outcome next to your original attack account"
            - name: Preparing for a big occasion you have been avoiding
              description: |-
                ## Purpose
                Weddings, concerts, matches and graduations are hard because they are crowded, long and difficult to leave politely, and saying no to them is often the clearest sign of how much panic is costing. Working backwards from the date with practice runs means you go, stay and are present rather than watching the exits.

                ## Milestones
                1. The occasion chosen and attendance confirmed.
                2. Three practice exposures planned in similar settings in the weeks before.
                3. Seating, travel and timings checked without building in an escape plan.
                4. The occasion attended for its full length.

                ## Notes
                Know where the toilets are, as anyone would, but resist booking an aisle seat purely to escape.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The chosen occasion was attended from start to finish, after at least three practice exposures in similar settings."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the occasion and reply yes to the invitation"
                - "Plan three practice exposures in crowded or seated settings"
                - "Check travel and timings without planning an early exit"
                - "Write a short note afterwards on how long you stayed and how it felt"
            - name: First long trip away after panic
              description: |-
                ## Purpose
                Long trips mean distance from home, unfamiliar places and stretches where leaving is impossible, which is why trips are often the last thing people get back. Planning a first trip of a few hours away, with a realistic itinerary and practice legs beforehand, proves that being far from home is survivable.

                ## Milestones
                1. A destination chosen at least two hours from home.
                2. Two shorter practice outings done in the month before.
                3. The trip booked with travel, stay and plans written down.
                4. The trip completed and the highs and hard moments recorded.

                ## Notes
                Start from the **Trip** template. If flying is a specific fear in its own right, treat that as separate work.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip at least two hours from home has been completed after two practice outings, with notes written afterwards."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick a destination at least two hours from home"
                - "Do two shorter practice outings in the month before"
                - "Book travel and a place to stay for the trip"
                - "Write down the hardest moment of the trip and how it passed"
            - name: Trapped-seat appointments at the dentist and hairdresser
              description: |-
                ## Purpose
                Sitting in a chair while someone works on you, unable to stand up mid-way, is a classic panic trigger, so dental check-ups and haircuts get skipped for years. Booking them as planned exposures, with a word to the practitioner if you want, brings back routine care and appearance at the same time.

                ## Milestones
                1. Overdue chair appointments listed: dentist, hygienist, barber, hairdresser, optician.
                2. Short appointments booked first, such as a fringe trim or a check-up.
                3. Each appointment attended without leaving before the end.
                4. A longer appointment, such as a full cut or dental treatment, completed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least two overdue chair appointments have been attended in full, including one longer than thirty minutes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the chair appointments you have been putting off"
                - "Book the shortest one first for a quiet time of day"
                - "Decide whether to tell the practitioner you get panicky, and what to say"
                - "Book the longer appointment once the short one is done"
            - name: Six-month panic progress review
              description: |-
                ## Purpose
                Six months in is the right moment to compare where you are with where you started, because day-to-day progress is easy to miss. A dated review against the baseline diary, the inventory and your three goals shows what has changed and what the next six months should focus on.

                ## Milestones
                1. Current attack frequency and dread compared with the baseline.
                2. The inventory reviewed and items now done freely crossed off.
                3. Progress on each recovery goal recorded.
                4. Focus for the next six months written down and shared with your therapist or trusted person.
              priority: medium
              deadlineOffsetDays: 182
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written six-month review compares current numbers with the baseline, records progress on all three goals and sets the next focus."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an hour in the calendar six months from installing"
                - "Compare the last month of the log with your baseline numbers"
                - "Cross off every inventory item you now do without trouble"
                - "Write the next six months' focus in three sentences"
            - name: Discreet plan for panic at work and in meetings
              description: |-
                ## Purpose
                An attack in a meeting or at a desk adds the fear of being seen, which can lead to skipped meetings, avoided presentations and sick days. A discreet plan, knowing what you will do in the moment without leaving, and deciding whether to tell anyone, keeps work from shrinking along with the rest of life.

                ## Milestones
                1. The work situations that trigger attacks listed.
                2. A discreet in-the-moment routine chosen that does not require leaving the room.
                3. A decision made on whether to tell a manager or colleague, and what to say.
                4. Two avoided work situations, such as a large meeting, put back on the ladder.

                ## Notes
                Formal adjustments or time off are a separate matter; this project is about handling attacks while staying at work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written discreet routine for work exists, a disclosure decision is recorded, and two avoided work situations have been faced."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the meetings, rooms and tasks at work where attacks have hit"
                - "Choose a routine you could do at your desk without anyone noticing"
                - "Decide whether to tell your manager and draft two sentences if you will"
                - "Note any panic at work and adjust the plan @recurring(monthly:27)"
            - name: Lectures, libraries and halls for students with panic
              description: |-
                ## Purpose
                Students with panic often start sitting at the back by the door, skipping crowded lectures and avoiding the library, until attendance and grades slip. A term plan that moves you gradually into the room, combined with knowing what support the university offers, protects both your course and your recovery.

                ## Milestones
                1. The campus places and situations you avoid listed.
                2. The student wellbeing or counselling service contacted.
                3. A seating ladder used: from the back row by the door to the middle of a row.
                4. Every timetabled lecture attended for four consecutive weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four consecutive weeks of full lecture attendance are recorded, with at least one lecture sat in the middle of a row."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the campus places and sessions you have been avoiding"
                - "Contact the student wellbeing service and ask about panic support"
                - "Sit one row further from the exit in a lecture @recurring(weekly:wed)"
                - "Tick off every lecture attended for four weeks"
            - name: Parenting through panic attacks with children present
              description: |-
                ## Purpose
                Having an attack on the school run or at the park brings an extra fear: frightening the children or being unable to look after them. A simple age-appropriate explanation, a plan for what happens if an attack starts while you are in charge, and a refusal to let panic cancel their activities protects both them and your recovery.

                ## Milestones
                1. A short explanation written for each child, in words suited to their age.
                2. A plan for attacks while you are alone with the children, including who can be called.
                3. The children's own activities kept on, with exposure steps built around them.
                4. A note of any worries the children raise, discussed calmly.

                ## Notes
                Children cope well with simple honesty: a grown-up feeling scared for a few minutes that passes. Avoid asking them to look after you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An age-appropriate explanation has been given to each child and a written plan for attacks while in sole charge exists."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a two-sentence explanation of panic suited to each child's age"
                - "Plan what you will do if an attack starts while you are in sole charge"
                - "Agree with another adult that they can be called if needed"
                - "Turn the school run or park visit into a planned exposure step"
            - name: Night-time panic attacks that wake you
              description: |-
                ## Purpose
                Waking suddenly in full panic, with no obvious trigger, is common and especially frightening because it seems to prove the attacks come from nowhere. Understanding nocturnal panic, having a plan for the middle of the night and checking other causes with your doctor turns these episodes into something manageable.

                ## Milestones
                1. Night-time attacks recorded separately in the log with time and what you were doing before bed.
                2. Possible contributors, such as alcohol, late caffeine or snoring and breathing pauses, raised with your doctor.
                3. A short middle-of-the-night routine written beside the bed.
                4. Night attacks no longer leading to avoiding sleep or keeping lights on.

                ## Notes
                If a partner notices loud snoring or pauses in your breathing, mention it to your doctor, as a sleep problem can wake people in a panic.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Night-time attacks have been raised with a doctor and a written middle-of-the-night routine is kept beside the bed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark night-time attacks separately in your panic log"
                - "Ask your doctor about night-time panic and any breathing issues in sleep"
                - "Write a four-line routine for waking in panic and keep it by the bed"
                - "Stop any habit of keeping lights on or avoiding bed after a night attack"
            - name: Panic alongside a heart or lung condition
              description: |-
                ## Purpose
                For people with angina, an irregular heart rhythm, asthma or chronic lung disease, and for many older adults, panic sensations overlap with real warning signs, which makes the usual advice to ignore them unsafe. A written plan agreed with your clinician, setting out which symptoms mean panic and which mean call for help, lets you do exposure work without guessing.

                ## Milestones
                1. An appointment held specifically to discuss telling panic apart from your condition.
                2. A written list of symptoms that mean act on the condition and symptoms that fit your panic pattern.
                3. Any inhaler, spray or rescue medicine use clarified for each situation.
                4. Exposure and interoceptive work adjusted with your clinician's agreement.

                ## Notes
                When in doubt, follow the plan for your physical condition first. This project is about agreeing the plan, never about overriding it.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written symptom plan agreed with your clinician distinguishes condition warning signs from panic, and exposure limits are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book an appointment to discuss panic alongside your heart or lung condition"
                - "Ask which symptoms always mean act on the condition, whatever you suspect"
                - "Write the agreed symptom plan on one page and keep it with your medicines"
                - "Ask which exposure or interoceptive exercises are safe for you"
            - name: Supporting a partner or relative with panic attacks
              description: |-
                ## Purpose
                Partners and parents of someone with panic often end up driving them everywhere, doing the shopping and staying close, which feels loving but keeps the avoidance in place. Learning how panic works, what helps in the moment and how to step back gradually lets you support recovery without burning out.

                ## Milestones
                1. The basics of panic and why avoidance keeps it going understood.
                2. A conversation held with the person about what helps and what they want from you.
                3. Tasks you currently do for them listed, with a plan to hand one back each month.
                4. Some time and support arranged for yourself.

                ## Notes
                Encourage, do not push; exposure only works when the person chooses each step.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A list of tasks done for the person exists, at least three have been handed back by agreement, and you have some regular support of your own."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a short guide for family members of people with panic"
                - "Ask the person what helps during an attack and what does not"
                - "List the tasks you now do for them because of panic"
                - "Hand one task back by agreement and talk it over @recurring(monthly:5)"
            - name: Interoceptive drills inside feared places
              description: |-
                ## Purpose
                Once both situations and sensations have been worked on separately, combining them is the strongest test: spinning before entering a busy shop, or climbing stairs fast before getting on a train. Bringing panic sensations into a feared place proves that even the worst combination is survivable.

                ## Milestones
                1. Two combinations planned that pair a drill with a ladder step you have already done.
                2. Each combination done at least three times.
                3. Peak anxiety recorded and seen to fall across repeats.
                4. One combination done at your hardest rung.

                ## Notes
                Only attempt this once single drills and single places are both comfortable, and with clinician agreement if you have any physical condition.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two drill and place combinations have each been done three times, with peak anxiety falling across repeats."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pair one drill with a ladder step you have already mastered"
                - "Do the drill just before entering the place and stay for the planned time"
                - "Repeat the combination three times and record the peak each time"
                - "Try one combination at the top rung of your ladder"
            - name: Overlearning challenges beyond everyday need
              description: |-
                ## Purpose
                Stopping exposure as soon as daily life is manageable leaves a thin margin, and a stressful month can tip someone back. Deliberately doing things harder than ordinary life asks, such as the middle seat on a full train or the top floor by lift, builds a buffer that makes relapse much less likely.

                ## Milestones
                1. A list of ten challenges harder than anything daily life requires.
                2. One challenge done each month.
                3. Each one recorded with the prediction and what happened.
                4. Six challenges completed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six overlearning challenges harder than daily life requires have been completed and recorded."
                cadence: rolling
              tasks:
                - "Write ten challenges harder than anything your normal week needs"
                - "Pick one challenge and put it in the calendar @recurring(monthly:16)"
                - "Record the prediction and the outcome of each challenge"
            - name: Written relapse prevention plan
              description: |-
                ## Purpose
                Most people who recover from panic have the odd attack again, often during stress, illness or big change, and how they respond decides whether it stays a blip. A written plan naming your early warning signs, the skills that worked and the steps to restart makes a lapse something you handle rather than fear.

                ## Milestones
                1. Early warning signs listed, such as creeping avoidance or new safety behaviours.
                2. The three skills that helped most written down.
                3. A restart plan for a lapse: which log, which ladder step, who to contact.
                4. High-risk periods ahead named, such as a house move or new job.
                5. The plan reviewed every quarter.

                ## Notes
                A single attack after a good spell is a lapse, not a relapse. The plan should say so in your own words.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written relapse prevention plan names warning signs, key skills and restart steps, and has been reviewed at least once since writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the early warning signs that panic is creeping back"
                - "Write down the three skills that helped you most"
                - "Write a restart plan for the first week after a lapse"
                - "Reread the plan and update the warning signs @recurring(quarterly)"
            - name: Annual lapse rehearsal and booster check
              description: |-
                ## Purpose
                Skills fade when they are not needed, and a year without panic can make the old fear feel distant until a hard week brings it back. Once a year, rehearsing the restart plan, doing one deliberate exposure and booking a booster session if anything has crept back keeps the gains fresh.

                ## Milestones
                1. A yearly date fixed for the booster check.
                2. The relapse plan and coping card reread.
                3. One deliberate exposure and one interoceptive drill done that week.
                4. A booster session with a therapist booked if avoidance has returned.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Two consecutive yearly booster checks are recorded, each with a rehearsal exposure done and any needed booster session booked."
                cadence: cyclic
              tasks:
                - "Choose a fixed week each year for the booster check"
                - "Reread the relapse plan and do one exposure and one drill @recurring(yearly)"
                - "Book a booster session with a therapist if avoidance has crept back"
            - name: Retiring the coping card and last crutches
              description: |-
                ## Purpose
                Late in recovery, the coping card, the emergency tablet you never take and the always-charged phone can become the last safety behaviours. Leaving them at home on purpose, one at a time, is the final step from managing panic to no longer organising life around it.

                ## Milestones
                1. The remaining crutches listed, including the card itself.
                2. Each one left at home for a full week of ordinary outings.
                3. Anxiety ratings recorded for the first outing without each.
                4. A note made of anything you choose to keep, and why.

                ## Notes
                Talk to your prescriber before changing how you carry or use any prescribed medicine.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every remaining crutch has been left at home for at least a week of ordinary outings, with ratings recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the items and habits you still keep just in case of panic"
                - "Leave the coping card at home for a week of ordinary outings"
                - "Leave the next item at home the following week"
                - "Write down anything you decide to keep and the reason"
---

# Panic Attack Coping Plan

This area is for anyone who has had a panic attack and now plans their days around not having another, and for the people standing next to them when it happens. It starts with the foundations (a medical check, a written account, a two-week diary, a pocket coping card and a list of what you avoid), then the weekly machinery of logging and practice, the skills that take the fear out of the sensations, the step-by-step returns to shops, transport and driving, the occasions worth preparing for, the situations that change the plan, and finally the work of someone keeping panic small for good.

What repeats is a short nightly log, a Sunday look at the week's patterns, two planned exposure sessions a week, a monthly check for avoidance creeping back, and a quarterly refresh of the coping card and relapse plan. The Metrics log, Habit tracker, Reading queue and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
