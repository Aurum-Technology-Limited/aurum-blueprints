---
id: mental-wellbeing.phobia-exposure-therapy
name: Phobia Exposure Therapy
description: "A precisely named fear, a measured baseline, a graded ladder practised every week, skills for fainting and disgust, and planned tests such as a flight, a blood test or a spider in the hand."
category: personal
version: 1.0.0
tags: [mental-wellbeing, phobia-exposure-therapy, everyone, specific-phobia, exposure-ladder, fear-of-flying, needle-phobia, one-session-treatment]
author: Aurum Technology
starter_structure:
  templates:
    - habit-tracker
    - metrics-log
    - reading-queue
    - purchase-decision
    - trip
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Phobia Exposure Therapy
          description: "Overcoming specific fears such as flying, needles, spiders or driving through step-by-step exposure plans."
          projects:
            - name: Pinning down the one fear to work on first
              description: |-
                ## Purpose
                Phobias are treated one at a time, and 'I hate flying' can hide quite different fears: a crash, being trapped, being sick in front of strangers or panicking with no way out. Writing a precise description of the trigger, the setting and what you fear will happen gives every later step a clear target. Pick the fear that costs you most in the next six months, not the one that feels easiest to admit.

                ## Milestones
                1. Every specific fear you have written on one list, from spiders to lifts.
                2. One fear chosen to work on first, with a sentence on why it costs you most now.
                3. The trigger described precisely: what, where, how close and with whom.
                4. The phobia type noted: animal, natural environment, blood or injection, situational or other.

                ## Notes
                If several fears share one root, such as fainting or being sick, name the root rather than each place it shows up. Working on the root usually shrinks the others too.

                Before you start: this plan is general information to help you look after your own wellbeing. It is not medical or psychological advice and does not replace a doctor, therapist or counsellor. If you are in crisis, in danger or thinking about harming yourself, contact your local emergency number or a crisis line now.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One feared situation is written down with its trigger, setting and phobia type, and recorded as the first target."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every situation, animal or object you avoid out of fear"
                - "Circle the one that will cost you most in the next six months"
                - "Write two sentences describing exactly what triggers the fear"
                - "Note which of the five phobia types it belongs to"
            - name: Medical check before starting exposure
              description: |-
                ## Purpose
                Exposure is safe for most people, but a heart condition, asthma, pregnancy, epilepsy or a history of fainting can change how hard and how fast it should go. A short appointment with your doctor clears you to start, checks the fear is a phobia rather than part of another condition, and can open a referral to talking therapy.

                ## Milestones
                1. A one-page note of the fear, how long you have had it and what it stops you doing.
                2. Any heart, breathing, pregnancy or fainting history raised with your doctor.
                3. Your doctor's view on whether exposure needs any limits recorded.
                4. Referral or self-referral options for therapy written down.

                ## Notes
                Bring the list of avoided situations. 'I am a bit nervous of needles' is heard very differently from 'I have not had a blood test in nine years'.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A doctor's appointment has taken place and any medical limits on exposure, or the absence of them, are written in your notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one page on the fear, its history and what it stops you doing"
                - "Book an appointment with your doctor about the phobia"
                - "Ask whether any health condition limits how intense exposure can be"
                - "Write down the referral routes your doctor suggests"
            - name: Everything the phobia makes you avoid
              description: |-
                ## Purpose
                Avoidance spreads quietly: the person afraid of dogs stops using the park, then the canal path, then visiting the friend with a terrier. Listing every avoided place, plan and activity, with what each one costs, shows the real size of the problem and gives your ladder its raw material.

                ## Milestones
                1. A list of at least fifteen things you avoid, put off or only do with a helper.
                2. Each item marked with what it costs you: time, money, health, work or people.
                3. Subtle avoidance included, such as checking a room for spiders before sitting down or looking away during injections.
                4. The three most expensive avoidances highlighted.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of at least fifteen avoided or endured situations, each with its cost, and the three costliest highlighted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every situation you have avoided in the last year because of the fear"
                - "Add the things you only do with someone else or with a ritual"
                - "Mark each item with what avoiding it costs you"
                - "Highlight the three avoidances that cost you most"
            - name: Behavioural approach test baseline
              description: |-
                ## Purpose
                Questionnaires say how you feel about the fear; a behavioural approach test shows what you can actually do. Measuring how close you can get to a spider in a sealed jar, a photo of a needle or the top floor of a car park, and your fear out of 100 at that point, gives a number you can retest every month.

                ## Milestones
                1. A fixed ten-step test set up that you can repeat exactly, with the same object, place and steps.
                2. The furthest step reached recorded, with peak fear rated 0 to 100.
                3. A standard specific phobia questionnaire completed and scored.
                4. Both numbers written in your progress log with the date.

                ## Notes
                Keep the test identical each time. Changing the spider, the room or the helper makes later scores impossible to compare.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated baseline of the furthest approach step reached and its peak fear rating, plus a questionnaire score, is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Design a ten-step approach test for your feared object or place"
                - "Run the test once and stop at the step you will not pass"
                - "Rate your peak fear from 0 to 100 at that step"
                - "Complete and score a standard specific phobia questionnaire"
            - name: Feared outcome written as a testable prediction
              description: |-
                ## Purpose
                Exposure works best when it tests a specific belief, and most phobias rest on one or two: the dog will bite, I will faint and hit my head, the lift will stick and I will run out of air. Writing the prediction in plain words, with how strongly you believe it, turns every session into an experiment instead of an endurance test.

                ## Milestones
                1. The worst thing you expect to happen in the feared situation written in one sentence.
                2. Your belief in it rated from 0 to 100 percent.
                3. Secondary fears noted, such as panicking, being embarrassed or not coping.
                4. A first experiment sketched that would show whether the prediction comes true.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Your main feared outcome and at least two secondary fears are written as predictions with belief ratings."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Finish the sentence 'If I faced it, the worst thing would be' in writing"
                - "Rate how strongly you believe it from 0 to 100 percent"
                - "List the fears underneath it, such as panicking or being laughed at"
                - "Sketch one small experiment that would test the main prediction"
            - name: Fainting check for blood, needle and injury fears
              description: |-
                ## Purpose
                Blood, injection and injury phobia is the one phobia where people genuinely faint, because heart rate and blood pressure rise and then drop sharply. If you have fainted or nearly fainted at the sight of blood or a needle, relaxation methods can make things worse, and the plan needs applied tension and seated or lying practice instead. Checking this before you start avoids a frightening first session.

                ## Milestones
                1. Your history of fainting or near-fainting with blood, needles or injury written down.
                2. Warning signs before a faint noted, such as going hot, pale, sweaty or tunnel-visioned.
                3. The history shared with your doctor or therapist before exposure begins.
                4. A decision recorded on whether applied tension goes into your plan.

                ## Notes
                Anyone who has fainted should do early needle and blood exposures sitting or lying down, never standing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written fainting history has been shared with a clinician and a decision on applied tension is recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down every time you have fainted or nearly fainted around blood or needles"
                - "List the body signs you notice in the minute before a faint"
                - "Tell your doctor or therapist about the fainting history"
                - "Record whether applied tension is part of your plan"
            - name: Choosing self-guided, one-session or therapist-led treatment
              description: |-
                ## Purpose
                Specific phobias respond well to exposure, and the format matters less than doing enough of it. Options include a self-help book or app, weekly CBT sessions, a single intensive session of around three hours, or a specialist course for flying. Comparing them on cost, wait and how much support you need gives you a route you will actually follow.

                ## Milestones
                1. Four routes listed: self-guided, weekly therapy, one-session treatment and a specialist course.
                2. Each scored on cost, wait, travel and support.
                3. Any free or funded route in your area found.
                4. One route chosen, with a start date.

                ## Notes
                Self-guided exposure is reasonable for many single phobias. Choose therapist support if you have tried alone and stalled, or if the fear sits alongside low mood, trauma or another condition.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A treatment route is chosen from at least four options compared on cost, wait and support, with a start date recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the four main routes for treating a specific phobia"
                - "Score each on cost, waiting time, travel and support"
                - "Check what free or funded therapy is available near you"
                - "Choose a route and write the start date in your calendar"
            - name: Finding a clinician experienced in specific phobias
              description: |-
                ## Purpose
                Plenty of therapists list anxiety, but fewer regularly run hands-on exposure with live animals, needles or heights. Asking the same direct questions before booking finds someone who will get you doing the feared thing in the session rather than only talking about it.

                ## Milestones
                1. Three clinicians found who list specific phobia or exposure therapy.
                2. Each asked the same four questions about method, session length and in-session exposure.
                3. Registration with a recognised professional body confirmed for each.
                4. One clinician chosen and a first appointment booked.

                ## Notes
                Useful questions: How many sessions do people with my phobia usually need? Do you do exposure in the session itself? Can sessions run longer than an hour when needed?
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A registered clinician who does in-session exposure is booked, chosen from three who were asked the same questions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search a professional register for therapists offering exposure for phobias"
                - "Write four questions to ask every clinician you contact"
                - "Contact three clinicians and note their answers side by side"
                - "Book a first appointment with the best fit"
            - name: Goals worth the discomfort of exposure
              description: |-
                ## Purpose
                Discomfort is built into exposure, and the reason to keep going has to be bigger than the fear. Goals tied to things you care about, such as flying to a daughter's wedding, getting the scan your doctor wants or walking the dog route with a friend, carry you through the weeks when stopping would be easier.

                ## Milestones
                1. Three goals written, each a concrete thing you will do once the fear is smaller.
                2. Each goal linked to a person, value or health need that matters to you.
                3. A rough date attached to at least one goal.
                4. The goals kept where you will see them before each session.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three concrete goals, each tied to something you value and one with a date, are written and kept with your exposure notes."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write three things you would do this year without the fear"
                - "Next to each, write who or what it matters for"
                - "Put a rough date on the goal that matters most"
                - "Stick the goals inside the cover of your exposure notebook"
            - name: First fear ladder of twelve steps
              description: |-
                ## Purpose
                A fear ladder breaks one huge task into steps you can take, each a little harder than the last. Twelve steps rated 0 to 100 for expected fear, from looking at a cartoon spider to letting a real one walk across your hand, give you a clear first session and a visible finish line.

                ## Milestones
                1. Twelve steps written, from mildly uncomfortable to your final goal.
                2. Each step rated 0 to 100 for expected fear.
                3. Gaps of more than 20 points filled with an in-between step.
                4. The first three steps planned with time, place and materials.

                ## Notes
                The ladder is a guide, not a contract. Many people skip steps once things start moving, and that is fine.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ladder of at least twelve rated steps exists with no gap over 20 points, and the first three steps are scheduled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your final goal at the top of a page"
                - "Fill in eleven easier steps below it"
                - "Rate each step 0 to 100 for expected fear"
                - "Add an in-between step wherever the gap is over 20 points"
                - "Schedule the first three steps in your calendar"
            - name: Exposure materials library
              description: |-
                ## Purpose
                Sessions stall when the materials are not to hand: no photos, no video clips, no sealed syringe, no route planned to the viewing platform. Gathering graded materials in one folder or box means each session starts in minutes and nobody has to improvise while frightened.

                ## Milestones
                1. A folder of photos and videos ordered from mild to hard.
                2. Physical items gathered where relevant, such as a toy spider, a plaster, a tourniquet or an unused sealed syringe.
                3. Real-world locations listed with addresses and opening times.
                4. Everything stored in one place and labelled by ladder step.

                ## Notes
                Use harmless species only for live animal work, and ask a pharmacist how to get unused, sealed needles safely.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A labelled set of graded materials covering at least the first six ladder steps is stored in one place."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Save twenty photos or clips of the feared thing in one folder"
                - "Order the clips from least to most frightening"
                - "List three real places where you can practise the higher steps"
                - "Add one new photo, clip or object to the library @recurring(monthly:3)"
            - name: Three planned exposure sessions a week
              description: |-
                ## Purpose
                Repetition is what makes exposure work, and a session or two a month lets fear rebuild in between. Three planned sessions of 30 to 60 minutes a week, each on a named step, is the rhythm most self-help programmes recommend and usually shows progress within a month.

                ## Milestones
                1. Three session slots fixed in the week.
                2. Each session tied to a named ladder step.
                3. Four consecutive weeks with at least three sessions done.
                4. A rule written for what to do when a session is missed.

                ## Notes
                Start from the **Habit tracker** template. Stay in the situation until you have tested your prediction, not only until the fear drops.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least twelve planned exposure sessions completed in four consecutive weeks, each logged against a ladder step."
                cadence: rolling
              tasks:
                - "Pick three regular 45-minute slots for exposure practice"
                - "Set up a habit tracker for the sessions"
                - "Run a planned exposure session on your current ladder step @recurring(weekly:tue,thu,sat)"
                - "Write a missed-session rule, such as doing it the next day"
            - name: Exposure session record
              description: |-
                ## Purpose
                Memory is biased after a frightening session: people recall the peak and forget that the feared outcome never came. A short record of prediction, peak fear, what actually happened and what you learned makes progress visible and builds evidence the phobia cannot argue with.

                ## Milestones
                1. A record sheet with columns for date, step, prediction, belief, peak fear, outcome and lesson.
                2. Every session in a month recorded.
                3. Weekly totals of sessions and average peak fear.
                4. One line a week on what the evidence shows.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every exposure session over a month has a record with prediction, peak fear and outcome, and weekly totals are written."
                cadence: rolling
              tasks:
                - "Create a record sheet with columns for prediction, peak fear and outcome"
                - "Fill in the record within ten minutes of each session"
                - "Total the week's sessions and average peak fear @recurring(weekly:sun)"
                - "Write one line on what the week's evidence shows"
            - name: Weekly fear ladder re-rating
              description: |-
                ## Purpose
                Steps that rated 70 a month ago often sit at 30 once nearby steps are done, and new steps appear as life opens up. Re-rating the whole ladder each week keeps you working at the edge of what is hard, rather than repeating steps that are already easy.

                ## Milestones
                1. The full ladder re-rated each week.
                2. Steps below 20 marked as done and moved off the active list.
                3. New steps added as fresh avoidances come to light.
                4. The current working step named for the coming week.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The ladder has been re-rated weekly for six weeks, with finished steps marked and the working step named each time."
                cadence: rolling
              tasks:
                - "Re-rate every rung of the ladder from 0 to 100 @recurring(weekly:fri)"
                - "Cross off steps that now rate below 20"
                - "Add any new avoided situation you noticed this week"
                - "Name next week's working step in your planner"
            - name: Leaning into chance encounters
              description: |-
                ## Purpose
                Planned sessions are only half the work: the dog on the pavement, the wasp at the café table and the glass lift at the station all turn up without warning. Choosing to stay put or move closer when life offers an encounter turns everyday moments into practice and stops the fear owning your unplanned time.

                ## Milestones
                1. A rule written: when the feared thing appears, stay or step closer rather than leave.
                2. Unplanned encounters noted daily for a month.
                3. At least ten encounters where you stayed or approached.
                4. One surprise from those encounters recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of daily notes showing at least ten unplanned encounters where you stayed or approached."
                cadence: rolling
              tasks:
                - "Write your stay-or-approach rule on your phone lock screen"
                - "Note any chance encounter with the feared thing and what you did @recurring(daily)"
                - "Count the encounters where you stayed or stepped closer at month end"
            - name: Monthly phobia score rescore
              description: |-
                ## Purpose
                Week to week, change can feel invisible. Repeating the same approach test and questionnaire on the same day each month shows whether fear and avoidance are really falling, and gives you and any therapist a shared number to plan from.

                ## Milestones
                1. The baseline approach test and questionnaire repeated monthly.
                2. Scores logged beside the baseline.
                3. A three-month trend visible.
                4. A plan change made if scores stall for two months.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Three monthly rescores of the approach test and questionnaire are logged against the baseline."
                cadence: rolling
              tasks:
                - "Set up a metrics log with the baseline scores in the first row"
                - "Repeat the approach test and questionnaire and log both scores @recurring(monthly:9)"
                - "Flag any two-month stall to discuss with your therapist or ally"
            - name: Safety behaviour creep audit
              description: |-
                ## Purpose
                Safety behaviours are the small things done to feel safer: gripping the armrest, wearing long sleeves on summer walks, looking away from the needle, carrying a sick bag everywhere. They feel helpful but stop you learning the situation is safe without them, and new ones creep in as old avoidance shrinks. A short monthly audit catches them early and drops one at a time.

                ## Milestones
                1. A list of every safety behaviour you use, visible or mental.
                2. Each rated for how much you rely on it.
                3. A monthly check for new safety behaviours.
                4. At least one dropped each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly audits completed, each recording any new safety behaviour and one that was dropped."
                cadence: rolling
              tasks:
                - "List every small thing you do to feel safer around the fear"
                - "Rate how much you rely on each one from 0 to 10"
                - "Check for new safety behaviours and pick one to drop @recurring(monthly:18)"
            - name: Weekly check-in with an exposure ally
              description: |-
                ## Purpose
                People who tell one person about their exposure plan tend to keep going through the weeks when it would be easier to stop. A ten-minute weekly call with an ally, who asks what you did, what happened and what is next, adds accountability without turning them into a safety behaviour.

                ## Milestones
                1. One person chosen and briefed on the plan and their role.
                2. Agreement that they encourage, not rescue or reassure.
                3. A weekly check-in kept for eight weeks.
                4. The ally present for at least one hard step, which you then repeat alone.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly check-ins with a briefed ally have taken place, and one hard step done with them was later repeated alone."
                cadence: rolling
              tasks:
                - "Choose one person to be your exposure ally"
                - "Explain that their job is to encourage, not to rescue or reassure"
                - "Tell your ally what you did, what happened and what comes next @recurring(weekly:wed)"
                - "Repeat alone any step you first did with your ally"
            - name: Quarterly phobia progress review
              description: |-
                ## Purpose
                Every three months is long enough for real change and short enough to catch a plan that is not working. Reviewing scores, session counts, goals reached and steps still avoided lets you decide whether to push on, change format or seek more help.

                ## Milestones
                1. The quarter's scores and session counts gathered in one place.
                2. Goals reached and goals still open listed.
                3. One decision recorded: continue, change approach or seek specialist help.
                4. The next quarter's target step set.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written quarterly review exists with scores, goals reached and a continue, change or escalate decision."
                cadence: cyclic
              tasks:
                - "Gather the quarter's scores, session counts and goals on one page @recurring(quarterly)"
                - "List the goals you reached and the ones still open"
                - "Decide whether to continue, change format or seek specialist help"
                - "Set the target step for the next quarter"
            - name: How fear is learned and unlearned
              description: |-
                ## Purpose
                Phobias often start with a bad experience, a frightening story or a nervous system primed for certain dangers, then grow through avoidance. Understanding that exposure does not erase the old fear but builds a new, stronger memory of safety explains why practice must be repeated, varied and done without crutches.

                ## Milestones
                1. How phobias start and how avoidance keeps them going summarised in a paragraph.
                2. The idea of a new safety memory competing with the old fear memory written in your own words.
                3. Three practical rules for your exposure drawn from it.
                4. The summary talked through with your ally or therapist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of how phobias are learned and how exposure builds new learning, with three practical rules."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a reputable guide to how specific phobias develop"
                - "Write a paragraph on how avoidance keeps your fear going"
                - "Draw three rules for your own exposure practice from what you read"
                - "Talk the summary through with your ally or therapist"
            - name: Designing exposures that test your prediction
              description: |-
                ## Purpose
                A session that ends with 'I survived but it was awful' teaches less than one that ends with 'I predicted I would scream and run, and I stayed for 20 minutes'. Designing each exposure around one prediction, and rating belief before and after, is the core skill of current exposure therapy and makes progress faster.

                ## Milestones
                1. A one-line prediction written before each session.
                2. Belief rated before and after.
                3. Sessions designed to last until the prediction is tested, not only until fear falls.
                4. Ten sessions completed with before and after belief ratings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten sessions completed, each with a written prediction and before and after belief ratings."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write one testable prediction for your next session"
                - "Rate your belief in it before you start"
                - "Decide what would count as the prediction coming true"
                - "Re-rate your belief straight after the session"
            - name: Applied tension for blood and needle fainting
              description: |-
                ## Purpose
                Applied tension is a simple, well-studied technique for people who faint around blood or needles: tensing the large muscles of the arms, legs and torso for a few seconds at a time to keep blood pressure up. Learned on calm days and then used during needle and blood exposures, it lets you face the fear without fainting.

                ## Milestones
                1. The technique learned from a clinician or a reputable health source.
                2. Practised several times a day for a week on calm days.
                3. Used while looking at blood or needle photos, with no faint.
                4. Used during a real blood test or injection.

                ## Notes
                Stop and lie down if you feel faint. If you have a heart condition or high blood pressure, check with your doctor before practising, and leave the arm being used for the needle relaxed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Applied tension has been practised for a week and used during at least one needle or blood exposure without fainting."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your doctor or therapist to show you applied tension"
                - "Practise the tension and release rounds several times a day for one week"
                - "Use applied tension while looking at needle photos"
                - "Note any light-headed signs and when you started tensing"
            - name: Learning the real facts about your feared thing
              description: |-
                ## Purpose
                Phobias run on guesses: that turbulence can break a wing, that most house spiders bite, that a lift falls when a cable snaps. Learning how the thing really works, from someone who knows, corrects your estimate of danger and gives you facts to set against the alarm during exposure.

                ## Milestones
                1. Five beliefs about the feared thing written down.
                2. Each checked against a reliable source, such as a pilot's explanation, a natural history museum or a lift engineer's guide.
                3. Corrected facts written beside each belief.
                4. Any genuinely risky situation noted with sensible precautions.

                ## Notes
                Facts help but do not cure a phobia on their own. Use them to design braver exposures, not to reassure yourself again and again.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five beliefs about the feared thing are written with corrected facts from reliable sources beside each one."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down five things you believe about the feared thing"
                - "Find a reliable expert source for each belief"
                - "Write the corrected fact next to each one"
                - "Note any real risks and the precautions sensible people take"
            - name: Varying the feared thing, place and company
              description: |-
                ## Purpose
                Fear learned to be safe in one context can come back in another: the spider in the therapist's office is fine but the one in your bath is not. Practising with different examples, rooms, times of day and with or without company makes the new learning travel to real life.

                ## Milestones
                1. At least five versions of the feared thing listed, such as different sizes, colours or breeds.
                2. Practice spread across at least three settings.
                3. Sessions done both alone and with company.
                4. No context left where fear stays high and untested.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The same ladder step has been practised with at least three variations, in three settings, alone and with company."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List five versions of the feared thing you could practise with"
                - "Choose three settings, including your own home"
                - "Repeat a mastered step in a new setting this week"
                - "Practise one step alone that you first did with company"
            - name: Imaginal and video exposure for fears you cannot stage
              description: |-
                ## Purpose
                Some fears cannot be booked for a Tuesday: thunderstorms, turbulence, a wasp sting, a dental injection. Writing a vivid script and listening to it, or watching graded video, lets you practise between real encounters and prepares you for the day they happen.

                ## Milestones
                1. A two-minute first-person script written in the present tense.
                2. The script recorded and replayed until the prediction is tested.
                3. A graded video playlist from mild to intense.
                4. Each used in at least eight sessions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recorded script and a graded video playlist have each been used in at least eight logged sessions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a two-minute present-tense script of the feared moment"
                - "Record the script on your phone"
                - "Build a playlist of videos from mild to intense"
                - "Log your fear before and after each listening session"
            - name: Working with disgust as well as fear
              description: |-
                ## Purpose
                Spiders, blood, vomit and some insects provoke disgust as much as fear, and disgust fades more slowly with exposure. Rating disgust separately, and adding steps that target it, such as touching textured models or handling something slimy, keeps progress from stalling once fear has fallen.

                ## Milestones
                1. Fear and disgust rated separately during sessions.
                2. Ladder steps marked as fear-heavy or disgust-heavy.
                3. At least three disgust-targeted steps added.
                4. Disgust ratings falling across four weeks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four weeks of sessions recorded with separate fear and disgust ratings, including at least three disgust-targeted steps."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Add a disgust column to your session record"
                - "Mark each ladder step as mostly fear or mostly disgust"
                - "Add three steps aimed at disgust, such as touching a textured model"
                - "Compare disgust ratings across four weeks"
            - name: Phobia self-help reading list
              description: |-
                ## Purpose
                A good workbook for specific phobias walks you through the same steps a therapist would, at a fraction of the cost. Choosing one well-regarded book and reading it alongside practice, a chapter a week, fills gaps in your plan and gives you a reference for the hard weeks.

                ## Milestones
                1. Two to four well-reviewed books on phobias or exposure listed.
                2. One workbook chosen and started.
                3. One idea per chapter turned into a session plan.
                4. The workbook finished with its exercises done.

                ## Notes
                Start from the **Reading queue** template. Look for books written by clinicians who research anxiety treatment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One phobia workbook finished with its exercises done and at least five ideas turned into sessions."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set up a reading queue with three phobia workbooks"
                - "Pick the one closest to your phobia type"
                - "Read one chapter and turn one idea into a session plan @recurring(weekly:thu)"
                - "Note the exercises you have completed in the margin"
            - name: Staying present instead of distracting during exposure
              description: |-
                ## Purpose
                Counting tiles, scrolling or singing in your head makes a session easier but can stop you noticing that the feared outcome is not happening. Learning to keep attention on the feared thing, its details and your own sensations, makes each minute of exposure count.

                ## Milestones
                1. Your usual distraction habits listed.
                2. A habit of describing what you notice, out loud or in writing.
                3. Five sessions with attention kept on the feared thing.
                4. What you learned compared with earlier distracted sessions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five sessions completed with attention kept on the feared thing, with notes comparing them with earlier sessions."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the ways you distract yourself during exposure"
                - "Describe the feared thing aloud in detail at your next session"
                - "Notice and name three body sensations without trying to change them"
                - "Compare what you learned with an earlier distracted session"
            - name: Virtual reality exposure decision
              description: |-
                ## Purpose
                Virtual reality can simulate heights, flights and some animals in your living room, and both clinics and home apps now offer it. Comparing a headset app, a clinic course and real-world exposure on cost, realism and evidence decides whether VR earns a place in your plan.

                ## Milestones
                1. Three VR options listed with cost and the fears they cover.
                2. Evidence for your phobia type checked from a reputable source.
                3. A trial session done where possible.
                4. A decision recorded: VR as a stepping stone, as the main route, or not at all.

                ## Notes
                Start from the **Purchase decision** template. Plan real-world steps to follow VR, since the aim is the real thing.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on VR exposure, based on three compared options and a trial where one was available."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List three VR exposure options that cover your phobia"
                - "Check what evidence exists for VR with your fear"
                - "Try a demo or trial session if one is offered"
                - "Record whether VR will be a stepping stone, main route or skipped"
            - name: Fear of flying course comparison
              description: |-
                ## Purpose
                Many airlines and specialist providers run fear of flying courses, often a day of teaching from pilots and psychologists ending in a short flight. Comparing two or three on content, follow-up, cost and whether the flight is optional shows whether a course fits alongside or instead of your own ladder.

                ## Milestones
                1. Three courses listed with dates, location and price.
                2. Each checked for pilot teaching, psychology content and a graduation flight.
                3. Follow-up support compared.
                4. A course booked, or a decision not to book recorded.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three fear of flying courses compared on content and cost, with one booked or a decision against recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find three fear of flying courses within reach"
                - "Note whether each includes a pilot, a psychologist and a flight"
                - "Compare price and what follow-up support each gives"
                - "Book a course or write down why not"
            - name: Questions about short-term medication before a flight or procedure
              description: |-
                ## Purpose
                Some people are offered a sedative for a flight, a scan or dental work, and that choice belongs to you and your prescriber. Going in with clear questions, including how it might affect exposure learning, alertness and safety in an emergency, means the decision is made on information rather than in a rush.

                ## Milestones
                1. The event, its date and your expected fear level written down.
                2. Questions prepared on effects, risks, interactions and impact on exposure progress.
                3. The prescriber's answers recorded.
                4. A decision made with them and noted.

                ## Notes
                Some research suggests sedatives may reduce what you learn during exposure. Raise this with your prescriber rather than deciding alone, and never take someone else's medicine.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written answers from a prescriber to prepared questions about short-term medication, with the decision and reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the date and details of the event you dread"
                - "List questions about effects, risks and impact on your exposure work"
                - "Ask your prescriber the questions at a booked appointment"
                - "Record the decision and the reasons for it"
            - name: Needle appointment adjustments to request
              description: |-
                ## Purpose
                Clinics can often make needle appointments much easier if asked: lying down, a numbing cream, a smaller needle, an experienced phlebotomist or the first slot of the day. Writing a short request card and calling ahead turns a dreaded appointment into a manageable exposure step.

                ## Milestones
                1. A list of adjustments that would help.
                2. A short card explaining your needle phobia, and your fainting history if any.
                3. The clinic called ahead to agree adjustments.
                4. Adjustments faded over later appointments as fear falls.

                ## Notes
                Treat adjustments as a bridge. Plan to drop numbing cream or lying down once you have managed a few appointments, unless fainting makes lying down the safe choice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A request card exists and at least one needle appointment has been booked with agreed adjustments."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the adjustments that would make a needle appointment manageable"
                - "Write a three-line card explaining your needle phobia"
                - "Call the clinic before your next appointment to ask for adjustments"
                - "Choose one adjustment to drop at the following appointment"
            - name: Stepping back the household's accommodation
              description: |-
                ## Purpose
                Partners and housemates often help in ways that keep the phobia going: checking rooms for spiders, always driving over bridges, crossing the road when a dog appears. Agreeing together how they will step back, one change at a time, gives you room to practise and spares them a hidden workload.

                ## Milestones
                1. Everything others do for you because of the fear listed.
                2. A household conversation about what will change and when.
                3. One accommodation dropped each month.
                4. A kind script agreed for when you ask for help you no longer need.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written list of household accommodations, with at least three dropped by agreement over three months."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List everything people at home do for you because of the fear"
                - "Hold a short household chat about stepping back gradually"
                - "Agree one accommodation to drop this month @recurring(monthly:14)"
                - "Agree what they will say when you ask for help you no longer need"
            - name: Removing detours built around the fear
              description: |-
                ## Purpose
                Routines quietly reshape around a phobia: the stairs instead of the lift, the long way round the dog park, the ground-floor hotel room, country roads instead of the motorway. Mapping these detours and switching back to the direct option, one a week, turns ordinary life into steady exposure.

                ## Milestones
                1. Every detour in your routine mapped: routes, bookings and choices.
                2. Each ranked by how hard it would be to drop.
                3. One detour dropped each week.
                4. Ten detours dropped and kept dropped.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten routine detours have been dropped and kept dropped for at least a month each."
                cadence: rolling
              tasks:
                - "Map the routes, bookings and choices you shape around the fear"
                - "Rank the detours from easiest to hardest to drop"
                - "Take one direct option you used to avoid @recurring(weekly:mon)"
                - "Tick off detours that have stayed dropped for a month"
            - name: Arranging supervised contact with a live animal
              description: |-
                ## Purpose
                Animal phobias need real animals in the end, and the safest way is with a calm, known animal and an experienced handler. A friend's placid older dog, a zoo or museum handling session or a shop that keeps harmless spiders all make good venues when arranged in advance.

                ## Milestones
                1. Three possible venues or handlers found.
                2. Each contacted with a clear request and your current ladder step.
                3. A first session booked with a calm animal and a handler.
                4. Further sessions booked to cover the top steps.

                ## Notes
                Choose harmless species only and follow the handler's rules. A dog that is friendly with adults may still be wrong for exposure if it jumps up.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least two supervised sessions with a calm live animal and an experienced handler have taken place."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List friends, zoos, museums or shops with calm animals and handlers"
                - "Contact three and explain what you want to practise"
                - "Book a first supervised session"
                - "Plan the steps you will try at the session"
            - name: One-session treatment day
              description: |-
                ## Purpose
                One-session treatment packs a whole exposure programme into a single guided session of up to three hours, and for animal and several other phobias most people improve markedly. Preparing well, from agreeing the goal to planning the weeks after, makes the most of a demanding day.

                ## Milestones
                1. The session booked with a clinician trained in the method.
                2. The final goal and likely steps agreed in advance.
                3. The day cleared, with travel and rest planned.
                4. Follow-up practice sessions booked for the four weeks after.

                ## Notes
                Plan easy company and food afterwards. Keep practising in the weeks after, as gains hold best when they are used.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-session treatment has been completed and at least four follow-up practice sessions done in the month after."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your clinician whether one-session treatment fits your phobia"
                - "Agree the session goal and possible steps in advance"
                - "Clear the day and plan a quiet evening afterwards"
                - "Book four follow-up practice sessions for the following month"
            - name: Top-of-the-ladder challenge day
              description: |-
                ## Purpose
                The top rung, whether holding a tarantula at a zoo, standing on a glass floor or watching your own blood being drawn, deserves its own planned day. Treating it as an event, with a date, a place, an ally and a celebration, marks the shift from avoiding to choosing.

                ## Milestones
                1. The final step chosen and booked for a date.
                2. The lower steps rehearsed in the fortnight before.
                3. The step completed and recorded with prediction and outcome.
                4. A celebration held that has nothing to do with the fear.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The final ladder step has been done on a planned day and recorded with prediction, peak fear and outcome."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick your top step and choose a date for it"
                - "Book any tickets, venue or handler it needs"
                - "Rehearse the two steps below it in the fortnight before"
                - "Plan a celebration for the evening after"
            - name: Blood test or vaccination as a planned exposure
              description: |-
                ## Purpose
                Needle phobia makes people miss blood tests, screening and vaccines that genuinely matter for their health. Booking an overdue test or jab as a target on your ladder, with preparation and adjustments in place, gets the care done and proves the fear wrong in one visit.

                ## Milestones
                1. Any overdue tests or vaccines listed from your health records.
                2. One booked for after your middle ladder steps.
                3. Applied tension or other agreed methods rehearsed if fainting is a risk.
                4. The appointment attended and the outcome logged.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An overdue blood test or vaccine has been done as a planned exposure and recorded in your session log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your records for any overdue blood tests or vaccines"
                - "Book the appointment for after your middle ladder steps"
                - "Rehearse the appointment with needle videos the week before"
                - "Record your prediction and what actually happened"
            - name: First dental check-up in years
              description: |-
                ## Purpose
                Dental fear keeps many people away for years until pain forces an emergency visit, which then confirms the fear. Planning a check-up with a dentist who treats nervous patients, with an agreed stop signal and a first visit that is only a look, breaks that cycle.

                ## Milestones
                1. A dentist found who offers care for anxious patients.
                2. A first visit booked for a chat and examination only.
                3. A stop signal agreed before any treatment.
                4. Any treatment needed planned in short steps.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A check-up has been attended at a dentist experienced with anxious patients, with any treatment plan written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search for dentists who offer care for nervous patients"
                - "Phone and ask for a first visit that is a chat and examination only"
                - "Agree a hand signal to pause before anything starts"
                - "Book the next check-up before you leave the surgery @recurring(yearly)"
            - name: Scanner appointment with a fear of enclosed spaces
              description: |-
                ## Purpose
                An MRI scan can mean 20 to 40 minutes in a narrow tube, and claustrophobia is one of the commonest reasons scans are abandoned. A short ladder in the weeks before, plus questions to the imaging department about open scanners, mirrors, music and feet-first positioning, makes it far more likely the scan gets done first time.

                ## Milestones
                1. The scan date and expected length known.
                2. The imaging department asked what options they offer anxious patients.
                3. A two-week enclosed-space ladder practised at home.
                4. The scan completed, or rescheduled with a better plan.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The scan is completed, or rescheduled with agreed adjustments, after at least two weeks of enclosed-space practice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the imaging department how long the scan will take"
                - "Ask what they offer anxious patients, such as music, a mirror or an open scanner"
                - "Practise lying in a small enclosed space at home for longer each day"
                - "Plan what you will focus on during the scan"
            - name: First flight after fear of flying work
              description: |-
                ## Purpose
                Your first flight is the test that matters, and it goes best when it is short, well planned and soon after preparation rather than months later. Choosing a route of under two hours, a seat picked on purpose and a written plan for turbulence turns the flight into a deliberate exposure step.

                ## Milestones
                1. A short return flight chosen and booked.
                2. Airport and boarding rehearsed with videos or a visit.
                3. A written plan for take-off, turbulence and landing.
                4. The flight taken and prediction versus outcome recorded.

                ## Notes
                Start from the **Trip** template. Tell the cabin crew you are a nervous flyer; most will check in on you.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A short return flight has been taken and recorded with prediction, peak fear and outcome."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose a short return route under two hours"
                - "Book the flight and set it up from the trip template"
                - "Write your plan for take-off, turbulence and landing"
                - "Log your prediction before boarding and the outcome after landing"
            - name: Helping your child face a dog or needle fear
              description: |-
                ## Purpose
                Children's fears of dogs, needles, the dark or insects are common and most fade, but some grow into avoidance that shapes family life. Parents can run gentle graded exposure at home, praising brave steps and cutting back reassurance, while your child's doctor can say whether more help is needed.

                ## Milestones
                1. Your child's fear described with what it stops them doing.
                2. A picture ladder made with your child, using their own ratings.
                3. Brave practice done weekly, with praise for effort.
                4. Progress shared with the school or doctor if the fear persists.

                ## Notes
                Your own reactions teach a lot. If you share the fear, work on yours alongside theirs.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A child-friendly ladder exists and weekly brave practice has run for six weeks, with progress noted."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your child what scares them most and draw it together"
                - "Make a picture ladder using a fear thermometer from 0 to 10"
                - "Do a five-minute brave practice together @recurring(weekly:sat)"
                - "Praise each brave step specifically rather than offering reassurance"
            - name: Antenatal blood tests with a needle phobia
              description: |-
                ## Purpose
                Pregnancy brings repeated blood tests and sometimes injections, and needle phobia can lead people to miss them. Telling your midwife early, agreeing adjustments and doing a gentle needle ladder alongside antenatal care keeps your care and the baby's on track.

                ## Milestones
                1. The needle phobia raised with your midwife or doctor at booking.
                2. Expected tests and injections listed with rough timings.
                3. Adjustments agreed, such as lying down or a named phlebotomist.
                4. Exposure steps that suit pregnancy agreed with your clinician.

                ## Notes
                Agree any applied tension or exposure work with your midwife or doctor before starting, as pregnancy changes blood pressure.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your midwife knows about the phobia, adjustments are agreed in your notes and the first antenatal blood test is done."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Tell your midwife about the needle phobia at your next contact"
                - "Ask which blood tests and injections to expect and when"
                - "Ask for the agreed adjustments to be written in your notes"
                - "Ask which exposure steps are suitable during pregnancy"
            - name: Flying for work with a fear of flying
              description: |-
                ## Purpose
                Fear of flying can quietly cap a career: turned-down conferences, client visits handed to colleagues, long train journeys that eat the week. Planning work trips around your exposure ladder, and deciding what to tell your manager, keeps doors open while the fear shrinks.

                ## Milestones
                1. Work trips you have avoided in the last two years listed.
                2. A decision on what, if anything, to tell your manager.
                3. A short work flight chosen as an early real-world step.
                4. A longer work trip planned for after the ladder.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A work trip by air has been planned or taken, with a decision recorded on what to tell your manager."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the work trips you have avoided because of flying"
                - "Decide what, if anything, to tell your manager"
                - "Volunteer for one short work flight in the next six months"
                - "Build in travel time so you are not rushing on the day"
            - name: Motorway and bridge driving fear ladder
              description: |-
                ## Purpose
                Some drivers are comfortable in town but avoid motorways, bridges, tunnels or overtaking, often because they fear losing control or crashing. A driving-specific ladder, from passenger runs to quiet stretches at off-peak times to busy junctions, rebuilds confidence one road at a time.

                ## Milestones
                1. Avoided roads and manoeuvres listed and ranked.
                2. A refresher lesson taken with a qualified instructor for the hardest steps.
                3. One ladder drive done each week.
                4. The full avoided route driven alone.

                ## Notes
                Keep your licence, insurance and car in order, and never practise when tired. If the fear began with a crash, talk to a clinician first, as trauma-focused help may fit better.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The full avoided motorway or bridge route has been driven alone after a weekly graded driving ladder."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the roads, bridges and manoeuvres you avoid, easiest first"
                - "Book a refresher lesson with a qualified driving instructor"
                - "Drive the next ladder step at a quiet time of day @recurring(weekly:sat)"
                - "Drive the whole avoided route alone once the ladder is done"
            - name: Heights fear around ladders, balconies and lifts
              description: |-
                ## Purpose
                Fear of heights limits more than holidays: changing a light bulb, using a glass lift, sitting upstairs on a bus or visiting a friend's tenth-floor flat. Graded steps, from a step stool to a multi-storey car park to a viewing platform, done with sensible safety, bring everyday heights back within reach.

                ## Milestones
                1. Everyday heights you avoid listed.
                2. A ladder from low steps to a public viewing platform.
                3. Each step done with proper railings and safe footing.
                4. One everyday height task done that you used to hand to others.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A public viewing platform or high floor has been visited and one everyday height task done unaided."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the everyday heights you avoid at home and out"
                - "Build a ladder from a step stool to a viewing platform"
                - "Do one heights step with safe railings and footing @recurring(weekly:sun)"
                - "Change a bulb or reach a high shelf yourself"
            - name: Supporting a partner through their exposure plan
              description: |-
                ## Purpose
                Watching someone you love face a phobia is hard, and the natural urge to rescue them often keeps the fear going. Partners who learn the plan, cheer effort rather than outcome and step back from reassurance make exposure far easier to keep up.

                ## Milestones
                1. Your partner's ladder and goals read together.
                2. Your role agreed for each stage: encourage, accompany, then step back.
                3. Reassurance requests answered in the way you both agreed.
                4. Weekly debriefs held for two months.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Two months of weekly debriefs held, with an agreed supporting role and a reassurance plan in use."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read your partner's ladder and goals with them"
                - "Agree whether you will encourage, accompany or step back for each step"
                - "Ask how this week's practice went and what comes next @recurring(weekly:fri)"
                - "Read a short guide on the difference between encouraging and rescuing"
            - name: Fear of vomiting exposure plan
              description: |-
                ## Purpose
                Emetophobia, the fear of vomiting, is one of the more complex specific phobias: it often leads to food restriction, avoiding children, pubs and travel, and constant checking of use-by dates and stomach sensations. Exposure usually runs from words and pictures to sounds, smells and imaginal work, and progress tends to be steadier with a therapist who knows the fear.

                ## Milestones
                1. Avoided foods, places, people and checking habits listed.
                2. A therapist with experience of this fear contacted.
                3. A ladder from words and images to sounds and smells built.
                4. Food restriction reduced step by step.

                ## Notes
                If food restriction has led to weight loss, tell your doctor first, as eating-related help may be needed alongside exposure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ladder covering words, images, sounds and smells is in use with therapist support, and at least one avoided food is back in your diet."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the foods, places and people you avoid for fear of vomiting"
                - "Contact a therapist experienced with fear of vomiting"
                - "Build a ladder from the written word to recorded sounds"
                - "Run one planned exposure from the vomiting ladder @recurring(weekly:wed)"
                - "Reintroduce one avoided food with your therapist's agreement"
            - name: Pushing past the everyday goal with overlearning
              description: |-
                ## Purpose
                Stopping exactly at your everyday goal leaves little margin, so a bad day or a surprise encounter can bring fear back. Going a step beyond, such as letting a spider walk on your arm when you only need to remove one with a glass, gives a buffer that protects the gains.

                ## Milestones
                1. Two or three steps written that go beyond everyday need.
                2. Each done at least twice.
                3. A monthly beyond-goal step kept up for six months.
                4. No return of avoidance noted in that time.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of monthly beyond-goal steps done, with no return of avoidance recorded."
                cadence: rolling
              tasks:
                - "Write three steps that go beyond what daily life requires"
                - "Do the first beyond-goal step twice in one week"
                - "Take one beyond-goal step @recurring(monthly:26)"
            - name: Return of fear plan and yearly booster
              description: |-
                ## Purpose
                Months without contact, a stressful period or one bad encounter can bring fear back, and that is a lapse, not a failure. A written plan for spotting early signs, plus a yearly booster week of exposure, keeps the phobia small for good.

                ## Milestones
                1. Early signs of returning fear listed, such as new avoidance or safety behaviours.
                2. A lapse plan naming which steps to repeat and who to tell.
                3. A yearly booster week of exposure scheduled.
                4. The plan shared with your ally or therapist.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written return of fear plan exists, shared with one person, and a yearly booster week is scheduled."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Write the early signs that the fear is creeping back"
                - "Write which steps you will repeat after a bad encounter"
                - "Run a booster week of three exposure sessions @recurring(yearly)"
                - "Share the plan with your ally or therapist"
---

# Phobia Exposure Therapy

This area is for anyone with a specific phobia, whether of flying, needles, spiders, dogs, heights, enclosed spaces, driving or vomiting, who wants to stop arranging life around it. It starts with the foundations (naming the fear, a medical check, a baseline approach test, a testable prediction and a first ladder), then the weekly machinery of planned sessions and records, the skills that make exposure work, decisions about courses, VR and medication questions, dated events such as a first flight or an overdue blood test, versions for parents, pregnancy, work travel and supporters, and finally overlearning and relapse prevention.

What repeats is three planned exposure sessions a week, a daily note of chance encounters, weekly record totals, ladder re-ratings and ally check-ins, monthly rescores and safety behaviour audits, a quarterly review and a yearly booster week. The Habit tracker, Metrics log, Reading queue, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
