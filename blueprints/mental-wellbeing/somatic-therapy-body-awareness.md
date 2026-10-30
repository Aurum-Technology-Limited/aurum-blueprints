---
id: mental-wellbeing.somatic-therapy-body-awareness
name: Somatic Therapy & Body Awareness
description: "An interoception baseline, a map of where stress lands in your body, daily check-ins and Focusing practice, and a well-checked somatic therapist, so the body's signals of stress and safety become readable again."
category: personal
version: 1.0.0
tags: [mental-wellbeing, somatic-therapy-body-awareness, everyone, interoception, somatic-experiencing, focusing, embodiment]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - meeting-notes
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
        - name: Somatic Therapy & Body Awareness
          description: "Exploring body-based therapies and interoception practices that help people reconnect with physical signals of stress and safety."
          projects:
            - name: Readiness check before body-focused work
              description: |-
                ## Purpose
                Turning attention towards the body is calming for many people, but for some it brings up panic, dissociation, flashbacks or a spike in pain, especially after trauma or alongside health anxiety. A short conversation with your doctor, your therapist or both, before you start, tells you how gently to begin, which signs mean pause, and whether this work belongs inside therapy rather than on your own.

                ## Milestones
                1. A one-page note of relevant history: trauma, dissociation, panic, persistent pain, seizures and current treatment.
                2. Your doctor or therapist asked whether self-guided body awareness suits you now or should start inside therapy.
                3. Three personal pause signs written down, such as going numb, losing track of time or a racing heart that does not settle.
                4. A default plan for a practice that goes badly: open your eyes, name five things in the room, stand up and move.

                ## Notes
                Feeling more at first is normal, because sensations tuned out for years can seem loud when you start listening. Getting louder and then settling is expected; getting louder and staying there is a reason to slow down and ask for help.

                Before you start: this plan is general information to help you look after your own wellbeing. It is not medical or psychological advice and does not replace a doctor, therapist or counsellor. If you are in crisis, in danger or thinking about harming yourself, contact your local emergency number or a crisis line now.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A doctor or therapist has been asked about body-focused practice, and your pause signs and recovery plan are written at the front of your notebook."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one page on any trauma, dissociation, panic or pain history that matters here"
                - "Book a short appointment with your doctor or raise it at your next therapy session"
                - "Ask whether to begin on your own or inside therapy, and how gently"
                - "Write your three pause signs and recovery steps at the front of your notebook"
            - name: Two-week interoception baseline
              description: |-
                ## Purpose
                Interoception is the sense of what is happening inside you: heartbeat, breath, hunger, thirst, temperature, a full bladder, the knot of nerves before a call. Most people have never checked how well they notice these signals, so later they cannot tell whether practice is changing anything. Two weeks of short daily ratings plus a standard self-report questionnaire gives you a starting line.

                ## Milestones
                1. A standard interoceptive awareness questionnaire, such as the MAIA-2, completed and scored.
                2. Fourteen days of morning and evening ratings, from 0 to 10, of how clearly you notice hunger, thirst, tiredness and tension.
                3. The signals you notice late, or only when they are strong, listed.
                4. Your baseline scores written on one summary line for later comparison.

                ## Notes
                The MAIA-2 is free to use for personal reflection. Treat the scores as a mirror for your own change over time, not as a diagnosis or a comparison with anyone else.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scored interoception questionnaire and fourteen days of signal ratings are summarised on one line you can compare against in three months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find and print a free copy of the MAIA-2 questionnaire"
                - "Complete and score the questionnaire on a quiet morning"
                - "Rate how clearly you notice hunger, thirst, tiredness and tension each morning and evening for two weeks"
                - "Write the late or faint signals and your summary scores on one line"
            - name: Sensation vocabulary beyond tense and fine
              description: |-
                ## Purpose
                Words such as tense, stressed or fine lump dozens of different sensations together, which makes them hard to notice, track or describe to a therapist. A personal list of sensation words, sorted by temperature, pressure, movement and texture, gives your attention something precise to look for and your notes something precise to say.

                ## Milestones
                1. A list of at least forty sensation words sorted into groups such as temperature, pressure, movement, texture and size.
                2. Each word you have actually felt in the past month marked.
                3. Five words that describe how stress usually feels for you underlined.
                4. Five words that describe feeling settled or at ease underlined.

                ## Notes
                Sensation words describe the raw feeling (buzzing, hollow, heavy, fizzy, tight), not the emotion or the story behind it. If a word explains why, it belongs on a different list.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sensation word list of at least forty terms is in your notebook, with your usual stress words and settled words marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write twenty sensation words from memory, then sort them into groups"
                - "Add words from a published sensation word list until you have forty"
                - "Mark the words you have actually felt in the past month"
                - "Add any new sensation word you noticed to the list @recurring(monthly:3)"
            - name: Map of where stress lands in your body
              description: |-
                ## Purpose
                Stress rarely shows up everywhere at once. For one person it is a clenched jaw and a tight chest, for another a churning stomach or cold hands, and it often arrives in the body hours before the mind admits to it. Drawing your own map from three or four real stressful moments gives you an early warning system that is specific to you rather than borrowed from a poster.

                ## Milestones
                1. Three to five recent stressful moments written down with what the body did in each.
                2. An outline drawing of a body with each stress location marked and described in sensation words.
                3. The earliest signal in a typical stress build-up identified.
                4. The map shared with your therapist or a trusted person, if you have one.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated body outline marking your usual stress locations, with the earliest warning signal named, is in your notebook."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Recall three recent stressful moments and note what your body did in each"
                - "Draw a simple body outline and mark each location with sensation words"
                - "Circle the signal that usually arrives first"
                - "Redraw the stress map from fresh observations @recurring(quarterly)"
            - name: Caffeine, alcohol and medicines that change body signals
              description: |-
                ## Purpose
                Caffeine, nicotine, alcohol, cannabis and a number of medicines change heart rate, sweating, gut sensations and alertness. A racing heart after the third coffee can be mistaken for anxiety, and a calm spell from a new tablet for progress in practice. Listing what you take and asking a pharmacist which items affect the signals you are learning to read stops you misreading your own body.

                ## Milestones
                1. Everything you take regularly listed, including caffeine, alcohol and supplements.
                2. A pharmacist or doctor asked which of these affect heart rate, sweating, gut or alertness.
                3. A column in your log for noting days when intake was unusual.
                4. Any question about changing a medicine taken to the prescriber, never acted on alone.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of regular substances and medicines, with a pharmacist's view of which affect body signals, sits at the front of your log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List your regular medicines, supplements, caffeine and alcohol"
                - "Ask a pharmacist which of them affect heart rate, sweating, gut or alertness"
                - "Add an intake column to your log for unusual days"
                - "Take any medicine questions to your prescriber rather than changing doses yourself"
            - name: Resource list of anchors that settle you
              description: |-
                ## Purpose
                Somatic therapists build resources before going anywhere difficult: parts of the body that feel neutral or pleasant, and people, places, animals, objects or memories that bring a settled feeling when you think of them. A written list of five or more means that when a practice stirs something up, you have somewhere to put your attention that reliably helps.

                ## Milestones
                1. At least two places in your body that usually feel neutral or comfortable, such as the hands, the feet or the back against a chair.
                2. At least five outside resources listed: a person, a place, an animal, an object, a memory.
                3. The sensations each resource brings written in a few words.
                4. Your two most reliable resources tested during a mildly stressful moment.

                ## Notes
                Choose simple, uncomplicated resources at first. A much-loved grandparent who has died may bring grief as well as warmth; that is fine to explore later, but not as a first anchor.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of at least two body anchors and five outside resources, each with its sensations described, has been tested once in a stressful moment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Notice which part of your body feels most neutral right now and write it down"
                - "List five people, places, animals, objects or memories that bring a settled feeling"
                - "Write the sensations each resource brings in a few words"
                - "Test your top two resources the next time you feel mildly stressed"
            - name: Orienting to the room as a first practice
              description: |-
                ## Purpose
                Orienting is the slow, curious turning of the head and eyes to take in your surroundings, letting the gaze rest wherever it is drawn. It is one of the gentlest ways into body-based work because attention starts outside the body rather than inside it, which suits people who find inner focus unsettling. Two weeks of practice gives you a settling tool that works with eyes open and in public.

                ## Milestones
                1. Orienting practised for three minutes on at least ten of fourteen days.
                2. Any shift noticed afterwards, such as a swallow, a sigh, softer shoulders or warmer hands, noted each time.
                3. A discreet version worked out for meetings, waiting rooms and trains.
                4. A decision recorded on whether orienting becomes one of your regular tools.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Orienting has been practised on at least ten of fourteen days, with after-effects noted each time and a keep or drop decision recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sit somewhere safe and slowly look around the room for three minutes"
                - "Note any swallow, sigh, yawn or shift in your shoulders afterwards"
                - "Try a discreet version on public transport or in a waiting room"
                - "Record whether orienting stays in your toolkit and why"
            - name: Body awareness log with fixed fields
              description: |-
                ## Purpose
                Body-based practice produces small, easily forgotten observations: a warm patch in the chest, a jaw that let go, a session that left you edgy for an hour. One log with the same few fields for every entry lets you, and any therapist you work with, see patterns across months rather than relying on memory.

                ## Milestones
                1. A log with fields for date, practice, minutes, sensations before, sensations after and a 0 to 10 settledness rating.
                2. Your pause signs and resource list copied to the front.
                3. The summary line from your two-week baseline added.
                4. At least ten entries made using the same fields.

                ## Notes
                Start from the **Metrics log** template. Keep entries to three lines at most, so logging never becomes the practice itself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A body awareness log with fixed fields holds at least ten entries, with your pause signs and resource list at the front."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a body awareness log from the metrics log template"
                - "Add fields for practice, minutes, sensations before and after, and a rating"
                - "Copy your pause signs and resource list to the front"
                - "Make your first entry after today's practice"
            - name: Deciding what you want from somatic work
              description: |-
                ## Purpose
                People come to body-based approaches for very different reasons: feeling numb or cut off from the body, chronic tension, panic that seems to start physically, the after-effects of trauma, or simply wanting to read their own stress earlier. Naming your main reason and what would count as progress decides whether self-guided practice is enough or a trained therapist is needed, and stops you drifting between techniques.

                ## Milestones
                1. Your main reason for exploring somatic work written in two sentences.
                2. Three signs of progress described in everyday terms, such as noticing hunger before you are shaky.
                3. A route chosen: self-guided practice, a class, or therapy with a somatic practitioner.
                4. A date set to revisit the choice after three months.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written reason, three everyday signs of progress and a chosen route are recorded, with a review date three months out."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write two sentences on why body-based work interests you now"
                - "Describe three everyday signs that would show it is helping"
                - "Choose between self-guided practice, a class and somatic therapy"
                - "Put a review date in your calendar three months from today"
            - name: Three daily body check-ins at fixed moments
              description: |-
                ## Purpose
                Brief, regular check-ins teach more than an occasional long practice, because the skill being trained is noticing in ordinary life. Tying three thirty-second check-ins to moments that already happen, such as the first hot drink, sitting down to lunch and turning the key at home, builds the habit without needing extra time in the day.

                ## Milestones
                1. Three anchor moments chosen and written down.
                2. A thirty-second script: feet, belly, chest, face, then one sensation word.
                3. Check-ins done on at least five days a week for four weeks.
                4. A weekly count of completed check-ins kept.

                ## Notes
                Start from the **Habit tracker** template. If you miss one, do the next; there is no catching up.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Check-ins are logged on at least five days a week for four consecutive weeks, with a weekly count in the habit tracker."
                cadence: rolling
              tasks:
                - "Choose three daily moments to tie a check-in to"
                - "Write the thirty-second check-in script on a card"
                - "Do a thirty-second body check-in at each of your three anchor moments @recurring(daily)"
                - "Count the week's completed check-ins in the habit tracker @recurring(weekly:sun)"
            - name: Hunger, thirst and toilet signals during the working day
              description: |-
                ## Purpose
                Long stretches of focused work, back-to-back calls or caring duties teach many people to override the plainest body signals, then wonder why they are irritable by mid-afternoon. Pausing at set points to check hunger, thirst, temperature and the need for a toilet break reconnects signal and response, and these concrete signals are the easiest place to build interoception.

                ## Milestones
                1. Two or three set points in the working day chosen for a basic needs check.
                2. A one-line prompt on your desk or screen: hungry, thirsty, hot or cold, toilet, need to move.
                3. Each signal acted on within fifteen minutes on most days for a month.
                4. A weekly note of the signal you most often miss.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Basic needs checks run at set points on most working days for a month, with a weekly note of the most often missed signal."
                cadence: rolling
              tasks:
                - "Pick two or three set points in your working day for a basic needs check"
                - "Put a one-line prompt where you will see it at those points"
                - "Act on any need you notice within fifteen minutes"
                - "Note which signal you missed most often this week @recurring(weekly:fri)"
            - name: Weekly felt-sense writing session
              description: |-
                ## Purpose
                The felt sense, a term from Eugene Gendlin's Focusing method, is the vague but whole bodily feel of a situation before it has words, such as the heavy, closed feeling that comes when you think about a certain meeting. A protected twenty minutes each week spent sitting with one felt sense and letting words come from it keeps the skill alive between therapy sessions or after a course ends.

                ## Milestones
                1. A twenty-minute weekly slot protected in your calendar.
                2. A simple structure written down: choose a situation, find its felt sense, try words, check them against the body, write.
                3. At least eight sessions written up.
                4. The themes that recur across sessions listed after two months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly felt-sense sessions are written up and the recurring themes across them are listed."
                cadence: rolling
              tasks:
                - "Book a twenty-minute weekly slot in your calendar"
                - "Write the five-step structure on the first page of a notebook"
                - "Sit with one situation and write what its felt sense says @recurring(weekly:tue)"
                - "List the themes that keep returning after two months"
            - name: Daily slow movement with attention inside
              description: |-
                ## Purpose
                Moving slowly while paying attention to how it feels from the inside, rather than how it looks, is one of the most direct ways to build body awareness. Ten minutes a day of unhurried movement, such as rolling the shoulders, shifting weight from foot to foot or reaching up and letting the arms float down, gives attention something to follow that is gentler than sitting still.

                ## Milestones
                1. A ten-minute sequence of five or six slow movements written down.
                2. The sequence done on at least twenty of thirty days.
                3. One observation per session logged, such as where movement felt stuck or easy.
                4. The sequence revised after a month to keep what helped most.

                ## Notes
                Slow means slow: at half your usual speed you notice sensations that are invisible at normal pace. Stay within a pain-free range and skip any movement a physiotherapist has advised against.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written ten-minute slow movement sequence has been done on at least twenty of thirty days, with one logged observation per session."
                cadence: rolling
              tasks:
                - "Write a ten-minute sequence of five or six slow, gentle movements"
                - "Do the slow movement sequence with attention on how it feels inside @recurring(daily)"
                - "Log one observation about where movement felt stuck or easy"
                - "Revise the sequence after thirty days"
            - name: Weekly body-based movement class
              description: |-
                ## Purpose
                A teacher and a group make it easier to keep going and to notice what you miss alone. A weekly class in a practice that puts sensation ahead of performance, such as restorative yoga, tai chi, qigong, Feldenkrais awareness through movement or a conscious dance class, gives your week one fixed hour of body attention.

                ## Milestones
                1. Two local or online classes tried.
                2. One chosen by how you felt in your body afterwards, not by how well you did.
                3. At least ten classes attended in a term.
                4. One thing you felt in class that you would have missed alone noted after each session.

                ## Notes
                Tell the teacher about injuries and anything about your history you want them to know, and ask whether they offer choices rather than hands-on adjustments.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One body-based class has been chosen after two trials and at least ten sessions attended in a term."
                cadence: rolling
              tasks:
                - "List two body-based classes within reach of home or work, with times and prices"
                - "Book a trial session of each class"
                - "Choose one and commit to it for a term"
                - "Attend your weekly body-based movement class @recurring(weekly:wed)"
            - name: Monthly interoception re-rating
              description: |-
                ## Purpose
                Change in body awareness is slow and easy to miss, and in a bad week it can feel as if nothing has moved at all. Repeating a short version of your baseline ratings once a month, on the same day and at the same time, turns a vague impression into a line you can actually see.

                ## Milestones
                1. A one-page monthly rating sheet built from your baseline questions and settledness score.
                2. Ratings taken on the same day each month for six months.
                3. A simple chart of the monthly scores.
                4. Any month that moved sharply annotated with what was happening.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Six monthly re-ratings are charted against your baseline, with any sharp change annotated."
                cadence: rolling
              tasks:
                - "Copy your baseline rating questions onto a single monthly sheet"
                - "Repeat the monthly ratings on the same morning each month @recurring(monthly:12)"
                - "Plot the scores on a simple chart"
                - "Annotate any month that rose or fell sharply"
            - name: Between-session notes for somatic therapy
              description: |-
                ## Purpose
                Somatic sessions often work with small shifts, a tingling that spread or an urge to push that was followed through, and these fade within a day. Writing brief notes within twenty-four hours of each session, and noting what your body does during the week, gives your therapist richer material and helps you see change happening between appointments.

                ## Milestones
                1. A note page with four headings: what we worked with, what I felt, what shifted, what to watch for.
                2. Notes written within a day of each session.
                3. A running list of questions for the next session kept alongside.
                4. A one-paragraph summary of themes written each month.

                ## Notes
                Start from the **Meeting notes** template. If you are not in therapy yet, archive this until you are.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every session has a note written within a day, and each month in therapy has a one-paragraph summary."
                cadence: rolling
              tasks:
                - "Create a session note page from the meeting notes template"
                - "Write the four headings: worked with, felt, shifted, watch for"
                - "Add questions for the next session as they occur during the week"
                - "Write a one-paragraph summary of the month's sessions @recurring(monthly:20)"
            - name: Quarterly review of what your body work is changing
              description: |-
                ## Purpose
                Three months is long enough for body-based practice to show effects and short enough to change course before effort is wasted. A quarterly hour with your log, re-ratings and stress map answers two questions: which practices are earning their time, and is the reason you started actually being addressed.

                ## Milestones
                1. The quarter's log entries, re-ratings and check-in counts gathered in one place.
                2. Each current practice rated keep, adjust or drop.
                3. Progress against your three everyday signs of progress written down.
                4. One change for the next quarter chosen and scheduled.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated quarterly note rates every current practice keep, adjust or drop and names one change for the next quarter."
                cadence: cyclic
              tasks:
                - "Gather the quarter's log entries, ratings and check-in counts"
                - "Rate each practice keep, adjust or drop"
                - "Compare progress with the three everyday signs you set at the start"
                - "Hold the quarterly body awareness review @recurring(quarterly)"
            - name: Weekly sensory walk outdoors
              description: |-
                ## Purpose
                Walking outdoors with attention on the senses, the temperature of the air on your face, the ground through your shoes, the swing of your arms, combines gentle movement, orienting and interoception in one easy habit. Green or blue space tends to make this easier, and a weekly forty-minute walk is a practice most people genuinely keep.

                ## Milestones
                1. A route of thirty to forty minutes with some green space or water chosen.
                2. Three sensory prompts for the walk written down: ground, air, rhythm.
                3. At least ten walks done with the phone on silent.
                4. One sensation from each walk added to your log.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten weekly sensory walks are logged, each with at least one sensation noted."
                cadence: rolling
              tasks:
                - "Choose a thirty to forty minute route that includes some green space"
                - "Write three sensory prompts on a card for your pocket"
                - "Take a sensory walk with your phone on silent @recurring(weekly:sat)"
                - "Log one sensation from each walk"
            - name: How interoception links body and emotion
              description: |-
                ## Purpose
                Current research describes emotions as built partly from interoceptive signals, which helps explain why a pounding heart can feel like dread and why people who struggle to read their body often struggle to name feelings too. Knowing the basics, including interoception, proprioception and alexithymia, makes every practice in this area make more sense and helps you judge the claims you meet online.

                ## Milestones
                1. Three accessible sources chosen: a book, a recorded lecture and a review article.
                2. Plain-language definitions of interoception, proprioception, alexithymia and the felt sense written in your own words.
                3. Two ideas that changed how you see your own signals noted.
                4. One claim seen online checked against what you read.

                ## Notes
                Start from the **Reading queue** template. Treat popular nervous system language with care: some of it is well supported, some is simplified well beyond the evidence.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary defines four key terms in your own words and records two personal insights and one checked online claim."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set up a reading queue with a book, a lecture and a review article on interoception"
                - "Write your own definitions of interoception, proprioception, alexithymia and felt sense"
                - "Note two ideas that change how you read your own signals"
                - "Check one popular online claim against your sources"
            - name: Learning the six Focusing steps
              description: |-
                ## Purpose
                Focusing, developed by Eugene Gendlin, is a teachable six-step method: clearing a space, finding a felt sense, getting a handle word, resonating, asking and receiving. Learning it properly, from a book, a recorded course or a certified trainer, gives you a structured way to listen to the body that you can use on your own for life.

                ## Milestones
                1. A learning source chosen: a book, an online course or a certified Focusing trainer.
                2. Each of the six steps practised on its own at least twice.
                3. Three full Focusing rounds completed and written up.
                4. The step you find hardest identified, with a plan for practising it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three complete Focusing rounds are written up and the hardest step is named with a plan to practise it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose a Focusing book, recorded course or certified trainer"
                - "Practise clearing a space and finding a felt sense this week"
                - "Complete a full six-step round and write it up"
                - "Name the hardest step and plan two extra practice rounds for it"
            - name: Titration and pendulation in small doses
              description: |-
                ## Purpose
                Two ideas from Somatic Experiencing protect you from overwhelm: titration, touching only a small amount of difficult sensation at a time, and pendulation, moving attention deliberately between a difficult sensation and a resource and back again. Practising both with mild material, such as a minor irritation, builds the skill you need before going near anything heavier, which belongs with a trained therapist.

                ## Milestones
                1. A mildly uncomfortable but safe sensation or memory chosen, rated no higher than 3 out of 10.
                2. Five rounds of moving attention between it and a resource, a few breaths at a time.
                3. A note after each round of whether the difficult sensation softened, stayed the same or grew.
                4. A personal rule written for when to stop and switch fully to a resource.

                ## Notes
                Keep the material small. If a round takes you above 5 out of 10, stop, orient to the room and leave heavier material for therapy.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five pendulation rounds with mild material are logged with ratings after each, and a written stop rule sits in your notebook."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose a mild irritation rated no higher than 3 out of 10"
                - "Move attention between it and a resource for a few breaths at a time"
                - "Rate the difficult sensation after each round"
                - "Write your rule for when to stop and switch to a resource"
            - name: Recognising shutdown and numbness in your body
              description: |-
                ## Purpose
                Not all stress is fast and loud. Some people go heavy, foggy, numb or far away when overwhelmed, and because it is quiet it is easy to miss or to mistake for calm. Learning your own signs of shutdown, and two gentle ways of coming back, matters as much as learning to settle when you are revved up.

                ## Milestones
                1. Your personal signs of shutdown listed in sensation words, such as heavy limbs, blurred edges or a flat voice.
                2. Three felt differences between shutdown and genuine relaxation written down.
                3. Two gentle ways back tested, such as pressing the feet into the floor or naming colours in the room.
                4. The list kept with your pause signs and shared with your therapist if you have one.

                ## Notes
                Frequent or long spells of feeling detached from your body or surroundings deserve a conversation with a doctor or therapist rather than self-help alone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of your shutdown signs, three differences from relaxation and two tested ways back is in your notebook."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Recall a time you went numb or foggy under stress and list what you felt"
                - "Write three differences between shutdown and real relaxation for you"
                - "Try pressing your feet into the floor and naming colours in the room"
                - "Keep the list with your pause signs and show it to your therapist"
            - name: Heartbeat perception practice
              description: |-
                ## Purpose
                Feeling your own heartbeat without touching your pulse is a classic test of interoceptive accuracy, and for many people it improves with practice. Short sessions of counting felt heartbeats, then checking against a measured pulse, train precise attention to a subtle internal signal, and the comparison gives you an honest number instead of a guess.

                ## Milestones
                1. A first round of counting felt heartbeats over 25, 35 and 45 seconds, compared with a measured pulse.
                2. An accuracy score worked out from the gap between felt and measured counts.
                3. Practice twice a week for six weeks.
                4. A second accuracy score compared with the first.

                ## Notes
                Some people find heartbeat focus sets off worry about their heart. If that happens, use a different signal such as the feet or the belly and leave this one for later.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Accuracy scores from week one and week six are recorded side by side in your log."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count felt heartbeats for 25, 35 and 45 seconds while a watch measures your pulse"
                - "Work out your first accuracy score from the gap between the counts"
                - "Practise five minutes of heartbeat counting @recurring(weekly:mon,thu)"
                - "Repeat the scored test after six weeks and compare"
            - name: Where emotions land in your body
              description: |-
                ## Purpose
                Studies that ask people to colour in where they feel each emotion find broadly shared patterns, such as anger in the arms and face and sadness as heaviness in the chest, but every person also has their own version. Mapping five common emotions on your own body helps you name a feeling from its sensations, which is useful exactly when the words will not come.

                ## Milestones
                1. Five emotions chosen, such as anger, fear, sadness, shame and joy.
                2. Each one mapped on a body outline from a recent real moment, with sensation words.
                3. The emotion that is hardest to find in your body noted.
                4. One occasion recorded when the map helped you name a feeling as it happened.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Five emotion body maps drawn from real moments are in your notebook, with one real-time use recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick five emotions you want to recognise sooner"
                - "Map each one on a body outline from a recent real moment"
                - "Note which emotion is hardest to locate in your body"
                - "Record a moment when the map helped you name a feeling"
            - name: Feeling yes, no and not yet in your body
              description: |-
                ## Purpose
                Many people agree to things before checking how they actually feel, then notice the tight stomach or sinking chest afterwards. Learning what a body-level yes, no and not yet feel like for you, starting with small low-stakes choices, adds one more source of information to decisions about time, requests and relationships.

                ## Milestones
                1. Your body's yes, no and not yet each described in sensation words.
                2. Ten small daily choices made after a three-second body check.
                3. One larger request answered after checking the body first.
                4. A note on how often the body signal matched or contradicted your first thought.

                ## Notes
                A body signal is information, not a verdict. Weigh it alongside facts and values, especially if anxiety tends to say no to everything new.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written descriptions of your yes, no and not yet signals exist, with ten small choices and one larger request handled after a body check."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Recall a clear yes and a clear no and describe how each felt"
                - "Pause for a three-second body check before ten small choices"
                - "Use a body check before answering one larger request"
                - "Note how often the signal matched your first thought"
            - name: Somatic tracking for persistent pain
              description: |-
                ## Purpose
                Pain reprocessing therapy uses somatic tracking: watching a pain sensation with calm curiosity, its edges, temperature and movement, rather than bracing against it. For some kinds of persistent pain, once a clinician has ruled out causes that need other treatment, this can lower the fear that amplifies it. Learning it in short guided sessions turns pain from an alarm into something you can observe.

                ## Milestones
                1. Your doctor or physiotherapist asked whether somatic tracking suits your type of pain.
                2. A recognised script or guided recording chosen.
                3. Ten-minute sessions practised three times a week for four weeks.
                4. Pain intensity and fear of the pain rated before and after each session.

                ## Notes
                This project organises practice; it is not a pain diagnosis. New, severe or changing pain needs a medical assessment first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A clinician has agreed somatic tracking suits your pain, and four weeks of sessions are logged with before and after ratings."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your doctor or physiotherapist whether somatic tracking suits your pain"
                - "Find a recognised somatic tracking script or guided recording"
                - "Practise ten minutes of somatic tracking @recurring(weekly:mon,wed,fri)"
                - "Rate pain and fear of pain before and after each session"
            - name: Comparing somatic therapy approaches
              description: |-
                ## Purpose
                Several established therapies work through the body, including Somatic Experiencing, sensorimotor psychotherapy, Hakomi, body psychotherapy and dance movement therapy, and the research behind them varies a great deal. Comparing four on how sessions run, how practitioners are trained and what evidence exists means you choose for good reasons rather than because a practitioner happened to be nearby.

                ## Milestones
                1. Four approaches summarised: what a session looks like, typical length of therapy and use of touch.
                2. The research behind each noted at a plain level: trials, reviews or mainly case reports.
                3. Fit with your reason for starting rated for each.
                4. A first and second choice recorded with reasons.

                ## Notes
                Body-based work is often offered alongside established treatments such as trauma-focused CBT or EMDR. If you have a diagnosis, ask your clinician how a somatic approach fits the treatment guidelines where you live.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of four somatic approaches, with evidence level and fit noted for each, ends in a recorded first and second choice."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List four somatic therapy approaches to compare"
                - "Note how sessions run, typical length and whether touch is used for each"
                - "Summarise the research behind each in one plain sentence"
                - "Ask the agent to lay your notes out as a comparison table"
                - "Record your first and second choice and the reasons"
            - name: Checking a somatic practitioner's training and registration
              description: |-
                ## Purpose
                Most somatic titles are unregulated, so a weekend certificate and a three-year clinical training can sound alike on a website. Confirming that a practitioner holds a core professional registration, such as psychotherapist, counsellor, psychologist or occupational therapist, plus completed training in their somatic method, protects you from untrained practice and gives you somewhere to complain if something goes wrong.

                ## Milestones
                1. Three practitioners shortlisted for your chosen approach.
                2. Core professional registration checked on the relevant public register for each.
                3. Completed somatic training, supervision arrangements and insurance confirmed.
                4. A short consultation call held with at least two of them.
                5. One practitioner chosen and the reason written down.

                ## Notes
                Good practitioners welcome these questions. Be wary of anyone who promises to release stored trauma in a few sessions or discourages you from other treatment.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A practitioner is chosen whose core registration and somatic training have both been verified, with the reason recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Shortlist three practitioners trained in your chosen approach"
                - "Look up each practitioner's core registration on the public register"
                - "Ask about completed somatic training, supervision and insurance"
                - "Hold a short consultation call with at least two of them"
                - "Write down who you chose and why"
            - name: Hands-on bodywork and your consent rules
              description: |-
                ## Purpose
                Some somatic therapists and bodyworkers use touch, from a hand resting on the shoulder blade to massage-based work, and touch can be settling for one person and alarming for another. Deciding in advance what kind of touch you are open to, how you will say stop and whether you want touch at all makes it far easier to speak up in the moment.

                ## Milestones
                1. Your position written down: no touch, touch only on request, or touch with check-ins.
                2. Any areas of the body that are off limits listed.
                3. A stop word or gesture chosen.
                4. Your rules shared with the practitioner before any hands-on session.

                ## Notes
                Ethical practitioners ask before every touch and accept a no without fuss. You can change your answer at any time, including partway through a session.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written touch preferences, off-limit areas and a stop signal have been shared with your practitioner before any hands-on work."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Decide whether you are open to touch at all in this work"
                - "List any parts of the body that are off limits"
                - "Choose a stop word or gesture"
                - "Share your rules with the practitioner at the start of the first session"
            - name: Session budget and funding for somatic therapy
              description: |-
                ## Purpose
                Weekly private sessions add up quickly, and a course of twenty can cost as much as a family holiday. Working out what you can afford, how long you can sustain it and which funding routes exist, such as health insurance, an employee assistance programme, sliding-scale fees or low-cost training clinics, prevents having to stop abruptly at a hard point in the work.

                ## Milestones
                1. Session fee, frequency and an expected number of sessions written down.
                2. A monthly budget figure agreed with yourself or your household.
                3. Insurance, workplace and low-cost options checked.
                4. A plan for reducing frequency, rather than stopping, if money gets tight.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A monthly therapy budget, a check of three funding routes and a fallback frequency plan are written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the fee, frequency and expected number of sessions"
                - "Set a monthly therapy budget you can sustain for six months"
                - "Check your insurance, workplace scheme and any low-cost training clinics"
                - "Agree a fallback of fortnightly sessions if money gets tight"
            - name: Judging online somatic exercise trends
              description: |-
                ## Purpose
                Short videos promising to release trauma from the hips or reset the vagus nerve in sixty seconds reach millions of people, and some contain useful gentle movement wrapped in claims that go well beyond the evidence. A simple checklist, who is teaching, what training they hold, what they claim and what they sell, lets you keep the helpful exercises and ignore the promises.

                ## Milestones
                1. A five-question checklist for any somatic content you meet online.
                2. Five accounts or programmes you follow scored against it.
                3. Accounts that fail the checklist unfollowed.
                4. Any exercise worth keeping written into your own practice notes in plain terms.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Five somatic accounts or programmes have been scored with a written checklist, failing ones unfollowed and useful exercises noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a five-question checklist for judging somatic content online"
                - "Score five accounts or programmes you follow against it"
                - "Unfollow any that fail the checklist"
                - "Copy any exercise worth keeping into your notes in plain words"
            - name: Deciding whether a wearable helps your body awareness
              description: |-
                ## Purpose
                Heart rate, stress scores and sleep data can help people learn what their body is doing, but they can also train you to check a screen instead of the body. A four-week experiment, guessing your heart rate or stress level first and then checking the device, shows whether the tracker is sharpening your attention or quietly replacing it.

                ## Milestones
                1. A four-week experiment planned with two guesses a day made before looking at the device.
                2. Guesses and readings recorded side by side.
                3. How often you checked the device without a reason counted for one week.
                4. A decision recorded: keep it, change its notifications or put it away.

                ## Notes
                Start from the **Purchase decision** template if you are thinking of buying one. Inaccurate readings are common during movement, so compare guesses at rest.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four weeks of paired guesses and device readings are recorded and a keep, change or put away decision is written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Guess your heart rate and stress level twice a day before checking the device"
                - "Record each guess and reading side by side"
                - "Count how often you check the device without a reason for one week"
                - "Decide to keep it, change its notifications or put it away"
            - name: Following tiredness signals for two weeks
              description: |-
                ## Purpose
                Tiredness is the signal people override most, with caffeine, sugar or one more episode. Treating it as information for two weeks, noticing the first signs such as heavy eyes, yawning or rereading lines, and responding within half an hour with a break, a lighter task or an earlier night, shows how much low energy comes from ignoring the early signal.

                ## Milestones
                1. Your first signs of tiredness listed in sensation words.
                2. Three realistic responses chosen: a five-minute break, a lighter task, an earlier bedtime.
                3. Fourteen days logged with the time of the first signal and your response.
                4. Afternoon energy in week two compared with the week before the experiment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Fourteen days of logged tiredness signals and responses are compared with energy ratings from the week before."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List your first three signs of tiredness"
                - "Choose three realistic responses you can make within thirty minutes"
                - "Log the time of the first signal and your response each day for two weeks"
                - "Compare afternoon energy in week two with the week before"
            - name: Posture and mood experiment
              description: |-
                ## Purpose
                Slumped and upright postures feel different from the inside, and small studies suggest posture can nudge mood and energy, though early bold claims about power poses have not held up. A personal experiment, noticing how three postures feel and what mood follows, is a cheap way to learn about your own body instead of trusting headlines.

                ## Milestones
                1. Three postures chosen to compare: slumped, upright and relaxed open.
                2. Each posture held for two minutes on five separate days, with sensations noted.
                3. Mood and energy rated before and after each trial.
                4. A conclusion written about whether posture matters for you, and when.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Fifteen posture trials with before and after ratings are logged and a one-paragraph personal conclusion is written."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose three postures to compare"
                - "Hold each posture for two minutes and note the sensations"
                - "Rate mood and energy before and after each trial"
                - "Write a short conclusion about what posture does for you"
            - name: Preparing for your first somatic therapy session
              description: |-
                ## Purpose
                First sessions in body-based therapy can feel unusual: more silence, questions about sensation rather than story, and sometimes standing or moving. Preparing a short summary of why you have come, your pause signs and your touch preferences means the first hour goes on the work rather than on catching up.

                ## Milestones
                1. A half-page summary of why you have come and what you hope will change.
                2. Your pause signs, resource list and touch preferences ready to share.
                3. Three questions about how the therapist works written down.
                4. The hour after the session kept free.

                ## Notes
                Feeling tired, emotional or oddly energised after a first session is common. Plan something gentle for the evening.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first session is attended with a written summary, pause signs and touch preferences shared, and an hour kept free afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a half-page summary of why you are coming and what you hope will change"
                - "Bring your pause signs, resource list and touch preferences"
                - "Prepare three questions about how the therapist works"
                - "Keep the hour after the session free for a walk or rest"
            - name: Somatic workshop or retreat day
              description: |-
                ## Purpose
                A one-day workshop or short residential retreat in Focusing, somatic movement or trauma-sensitive yoga gives concentrated practice and the chance to learn from an experienced teacher in person. Choosing one that matches your stage, and planning travel, aftercare and a quiet day afterwards, turns a big experience into one that settles well.

                ## Milestones
                1. A workshop chosen that suits your stage, with the teacher's training checked.
                2. Booking, travel and any accommodation arranged.
                3. A quiet day or evening planned for afterwards.
                4. Three things learned, and how you will use them, written within a week.

                ## Notes
                Start from the **Trip** template for a residential retreat. Avoid intensive formats promising rapid release if you have a trauma history, unless your therapist agrees.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A suitable workshop is attended and three takeaways, with how to use them, are written within a week."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Shortlist two workshops suited to your stage and check each teacher's training"
                - "Book the workshop and arrange travel"
                - "Block a quiet day or evening afterwards"
                - "Write three takeaways within a week of the event"
            - name: Describing body sensations at a medical appointment
              description: |-
                ## Purpose
                Doctors and physiotherapists rely on how you describe a symptom, and vague descriptions such as it just feels wrong lead to vague answers. Using your sensation vocabulary to describe location, quality, timing and what changes it makes the next appointment faster and more useful, and it is one of the most practical payoffs of body awareness work.

                ## Milestones
                1. The symptom described in writing: where, what it feels like, when, how long, what makes it better or worse.
                2. The range of intensity over the past fortnight noted on a 0 to 10 scale.
                3. The description read out or handed over at the appointment.
                4. The clinician's answer and the agreed next step written down.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written sensation description covering location, quality, timing and triggers is used at an appointment and the outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write where the symptom is and what it feels like in sensation words"
                - "Note when it happens, how long it lasts and what changes it"
                - "Hand the description to the clinician at the start of the appointment"
                - "Write down the answer and the agreed next step"
            - name: Six-month review with your somatic therapist
              description: |-
                ## Purpose
                Body-based therapy can drift into pleasant sessions that no longer move anything. Setting aside a session at six months to look back together at your original reason, your re-ratings and what has changed in daily life keeps therapy pointed at your goals, and it is the natural moment to decide whether to continue, change focus or begin to end.

                ## Milestones
                1. Your original reason, three signs of progress and monthly ratings brought to the session.
                2. Your view and the therapist's view of change each written down.
                3. A decision recorded: continue as is, change focus or plan an ending.
                4. The next review date agreed.
              priority: medium
              deadlineOffsetDays: 200
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A six-month review session is held, both views of progress are written down and a continue, refocus or end decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your therapist to set aside a session for a six-month review"
                - "Bring your original reason, progress signs and rating chart"
                - "Write down both your view and the therapist's view of what has changed"
                - "Record the decision and agree the next review date"
            - name: Ending somatic therapy well
              description: |-
                ## Purpose
                Ending well matters in any therapy, and in body-based work it includes making sure the skills you rely on continue without the therapist in the room. Planning the last three or four sessions, with a written practice plan and a clear way back if you need it, turns an ending into a handover rather than a loss.

                ## Milestones
                1. An ending date agreed with three or four sessions of notice.
                2. The practices you will keep, and how often, written down.
                3. A plan for what to do if old patterns return, including when to come back.
                4. A final session spent reviewing the whole course of therapy.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Therapy ends on an agreed date with a written ongoing practice plan and a return plan in your notebook."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree an ending date with your therapist, with a few sessions of notice"
                - "Write the practices you will keep and how often"
                - "Write what you will do if old patterns return"
                - "Use the final session to look back over the whole course of therapy"
            - name: Reconnecting with your body after pregnancy and birth
              description: |-
                ## Purpose
                Pregnancy, birth and months of feeding and broken sleep change how the body feels from the inside, and many new parents describe feeling like a stranger in their own body or tuning it out to cope. Gentle body awareness, two minutes at a time and fitted around the baby, helps rebuild a friendlier relationship with it, alongside the physical checks a midwife or pelvic health physiotherapist provides.

                ## Milestones
                1. A postnatal check with your doctor, midwife or pelvic health physiotherapist attended or booked.
                2. A two-minute body check-in tied to one feed or nappy change a day.
                3. Sensations you are glad to notice listed alongside the harder ones.
                4. Any persistent pain, numbness or distress taken back to a professional.

                ## Notes
                Low mood, anxiety or intrusive thoughts after birth are common and treatable. If you notice them, speak to your midwife, health visitor or doctor rather than waiting for body work to fix them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A postnatal physical check is booked or done and a daily two-minute check-in has run for six weeks alongside the baby's routine."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book or confirm your postnatal check with a midwife, doctor or physiotherapist"
                - "Tie a two-minute body check-in to one feed or change each day"
                - "List sensations you are glad to notice alongside the harder ones"
                - "Take any persistent pain or numbness back to a professional"
            - name: Family body weather checks with your children
              description: |-
                ## Purpose
                Children learn to read their own bodies largely from adults who name sensations out loud: your tummy is rumbling, my shoulders are tight, your cheeks are hot. A light weekly family check-in using weather words such as stormy, foggy or sunny for how the body feels gives children a language for interoception and helps parents notice their own state before it spills over.

                ## Milestones
                1. A five-word body weather scale, with pictures, agreed with your children.
                2. A weekly family check-in held at a fixed meal.
                3. A sensation named out loud by a parent at least once a day.
                4. One example noted of a child using body words to say how they felt.

                ## Notes
                Keep it playful and optional. A child who says nothing has still heard the words.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A five-word body weather scale is in use at a weekly family meal and at least one child-led use has been noted."
                cadence: rolling
              tasks:
                - "Make a five-word body weather scale with your children"
                - "Name one of your own sensations out loud in front of your child each day"
                - "Hold a body weather check at the family meal @recurring(weekly:sun)"
                - "Note an example of a child using body words for a feeling"
            - name: Foot sensation and balance practice for older adults
              description: |-
                ## Purpose
                Body awareness changes with age: sensation in the feet can dull, balance leans more on eyesight, and thirst signals fade, which is part of why dehydration and falls become more common later in life. Seated and supported standing practices that sharpen sensation in the feet and the sense of balance, done three times a week, support both confidence and safety, ideally with your doctor or physiotherapist's agreement.

                ## Milestones
                1. Your doctor or physiotherapist asked about balance practice and any limits.
                2. A seated foot sensation routine and a supported standing balance routine written down.
                3. Practice done three times a week for eight weeks beside a sturdy chair or worktop.
                4. Drink reminders set at fixed times, since thirst may arrive late.

                ## Notes
                Stop if you feel dizzy. A falls service or physiotherapist can tailor the exercises if you have had a fall.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Eight weeks of thrice-weekly foot sensation and supported balance practice are logged, with a clinician's agreement noted."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your doctor or physiotherapist about balance practice and any limits"
                - "Write a seated foot routine and a supported standing balance routine"
                - "Do the foot and balance routine beside a sturdy chair @recurring(weekly:mon,wed,fri)"
                - "Set drink reminders at fixed times of day"
            - name: Trauma-sensitive yoga or movement class
              description: |-
                ## Purpose
                Trauma-sensitive yoga and similar classes are designed for people for whom ordinary classes feel unsafe: no hands-on adjustments, invitations rather than instructions, and the option to keep eyes open and leave at any time. For someone who has spent years disconnected from their body after trauma, a class built on choice can be a gentle way back, ideally alongside trauma therapy.

                ## Milestones
                1. Your therapist or doctor asked whether a trauma-sensitive class suits you now.
                2. A class found whose teacher has trauma-sensitive training, in person or online.
                3. Questions asked in advance about touch, lighting, exits and class size.
                4. Six classes attended, with how you felt before and after noted.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six trauma-sensitive classes are attended with before and after notes, after a therapist or doctor has agreed it suits you."
                cadence: phased
                effort_hours_estimate: "9"
              tasks:
                - "Ask your therapist or doctor whether a trauma-sensitive class suits you now"
                - "Find a teacher with trauma-sensitive yoga or movement training"
                - "Ask about touch, lighting, exits and class size before booking"
                - "Note how you feel before and after each of six classes"
            - name: Interoception support for autistic and ADHD adults
              description: |-
                ## Purpose
                Many autistic and ADHD adults notice internal signals differently: hunger may not register until it is urgent, the need for the toilet may arrive suddenly, and emotions may show up as physical overwhelm before they have a name. External prompts, concrete check lists and interoception activities designed for neurodivergent people work with this rather than against it.

                ## Milestones
                1. The signals you notice late or very strongly listed, without judgement.
                2. External prompts set for the two most often missed signals, such as timed meal and water reminders.
                3. A structured interoception activity set, such as one designed by occupational therapists, tried for four weeks.
                4. What helped written into a one-page guide for yourself or the people you live with.

                ## Notes
                An occupational therapist with neurodivergence experience can tailor this. Keep sensory overload strategies in their own place; this project is about signals from inside.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Prompts for your most missed signals are running and a one-page guide records what helped after a four-week trial."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the internal signals you notice late or very strongly"
                - "Set reminders for the two signals you most often miss"
                - "Try a structured interoception activity set for four weeks"
                - "Write a one-page guide of what helped"
            - name: Body check-ins for carers
              description: |-
                ## Purpose
                Carers spend the day attending to someone else's body, their pain, meals, medicines and toileting, and often stop noticing their own until a back goes or illness hits. Brief check-ins built into the caring routine, plus a weekly note of your own aches and energy, keep your body on the list when someone else's dominates the day.

                ## Milestones
                1. Two points in the caring routine chosen for a twenty-second check on your own body.
                2. A weekly note of your own aches, tiredness and tension kept for two months.
                3. Any pain or exhaustion lasting two weeks raised with your doctor or a carers' support service.
                4. One regular hour of respite used for something that feels good in the body.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly notes on your own body have been kept for two months and any persistent problem has been raised with a doctor or carers' service."
                cadence: rolling
              tasks:
                - "Choose two moments in the caring routine for a quick check on yourself"
                - "Write a short note on your own aches, tiredness and tension @recurring(weekly:thu)"
                - "Raise any pain or exhaustion lasting two weeks with your doctor"
                - "Use one hour of respite each week for something that feels good in your body"
            - name: Telling effort from strain for athletes and performers
              description: |-
                ## Purpose
                Athletes, dancers and musicians often train themselves to push through signals, which helps on the day but can blur the line between useful effort and the strain that leads to injury. Practising fine-grained body awareness in training, rating felt effort and catching early strain signs, gives you a way to work hard without overriding warnings.

                ## Milestones
                1. Your early strain signals listed, such as a pinch, a change in grip or holding the breath.
                2. A felt effort rating noted after each training session or rehearsal for four weeks.
                3. Sessions where you adjusted because of an early signal recorded.
                4. The pattern shared with your coach, teacher or physiotherapist.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Four weeks of felt effort ratings and early strain notes are logged and shared with a coach, teacher or physiotherapist."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the early signs that effort is turning into strain for you"
                - "Rate felt effort from 0 to 10 after each training session or rehearsal"
                - "Record any session where you adjusted because of an early signal"
                - "Share the pattern with your coach, teacher or physiotherapist"
            - name: Peer Focusing partnership
              description: |-
                ## Purpose
                Experienced Focusers often practise in partnerships: two people take turns, one focusing while the other listens and reflects back without advice, usually for thirty to forty-five minutes each way. A regular partner deepens the practice, costs nothing and is the usual way people keep the skill alive for years after training.

                ## Milestones
                1. A partner found through a Focusing course, network or partnership list.
                2. Ground rules agreed: confidentiality, equal time, no advice, how to stop.
                3. A weekly exchange running for three months.
                4. A review held with your partner of how the arrangement is working.

                ## Notes
                Start a partnership only once you have learned the basic listening skills, ideally on a course that teaches them.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A Focusing partnership has met at least ten times over three months with agreed ground rules and one joint review."
                cadence: rolling
              tasks:
                - "Ask your course or Focusing network how to find a partner"
                - "Agree ground rules on confidentiality, equal time and no advice"
                - "Hold a Focusing partnership exchange @recurring(weekly:thu)"
                - "Review the partnership together after three months"
            - name: Evaluating a somatic practitioner training
              description: |-
                ## Purpose
                Some people who benefit from body-based work want to train in it, either to add to an existing therapy, health or coaching role or as a new career. Trainings range from weekend certificates to three-year clinical programmes, and only some lead to work you could ethically offer to clients. Comparing options on entry requirements, length, supervision and recognition prevents an expensive mistake.

                ## Milestones
                1. Your purpose for training written down: personal growth, an existing role, or a new profession.
                2. Three trainings compared on entry requirements, length, cost, supervision and recognition.
                3. A graduate of each training asked what the course was like and what they now do with it.
                4. A decision recorded with the money and hours it commits.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three trainings are compared on five criteria, graduates have been consulted, and a decision with its cost and time is recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write whether training is for personal growth, an existing role or a new career"
                - "Compare three trainings on entry rules, length, cost, supervision and recognition"
                - "Speak to a graduate of each training"
                - "Record your decision with the money and hours it commits"
            - name: One-page body awareness toolkit by situation
              description: |-
                ## Purpose
                After months of practice most people have a scattered set of things that work: an anchor, an orienting habit, a stop rule, a movement sequence. Condensing them onto a single page sorted by situation, such as before a hard conversation, when numb, when revved up or after a bad night, means the right tool is there when thinking is hardest.

                ## Milestones
                1. Every practice you have kept for at least a month listed.
                2. Practices sorted under four or five situations you actually meet.
                3. The page tested in two real situations and corrected.
                4. Copies kept on your phone and in your notebook.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page toolkit sorted by situation has been tested in two real moments and saved in two places."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every body awareness practice you have kept for at least a month"
                - "Sort them under four or five situations you meet"
                - "Test the page in two real situations and correct it"
                - "Ask the agent to format the page so it fits on one phone screen"
            - name: Annual body awareness review
              description: |-
                ## Purpose
                Once a year, a longer look back shows changes that monthly ratings blur: whether you now notice hunger or tension earlier, whether therapy did what you hoped, and which practices quietly fell away. Repeating the full baseline questionnaire and laying a fresh stress map beside last year's is the most honest measure of a year of practice.

                ## Milestones
                1. The full baseline questionnaire repeated and compared with last year's scores.
                2. Your stress map redrawn and placed beside the original.
                3. A paragraph on what changed, what did not and why.
                4. Practices and goals for the coming year written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated annual review compares questionnaire scores and stress maps with last year's and sets the practices for the year ahead."
                cadence: cyclic
              tasks:
                - "Repeat the full interoception questionnaire and compare with last year"
                - "Lay a freshly drawn stress map beside the original"
                - "Write a paragraph on what changed and what did not"
                - "Hold the annual body awareness review @recurring(yearly)"
---

# Somatic Therapy & Body Awareness

This area is for anyone who wants to read their own body again: to notice hunger, tension, alarm and ease early enough to act on them, and to explore body-based therapies with clear eyes. It begins with foundations (a readiness check, an interoception baseline, a stress map and a resource list), moves through daily check-ins and slow movement, the specific skills of Focusing, titration and somatic tracking, decisions about therapists, touch and online trends, the appointments worth preparing for, variants for new parents, families, older adults, trauma survivors, neurodivergent adults, carers and performers, and ends with the work of an experienced practitioner.

What repeats is a daily check-in and slow movement session, weekly felt-sense writing, a movement class and a sensory walk, a monthly re-rating and therapy summary, a quarterly review and an annual look back. The Metrics log, Habit tracker, Meeting notes, Reading queue, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
