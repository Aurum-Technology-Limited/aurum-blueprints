---
id: fitness-sport.rugby-conditioning-play
name: Rugby Conditioning & Play
description: "A club at your level, the right kit and a fitness baseline, then the strength, speed, neck and contact conditioning, tackle and breakdown skills, and season planning that keep a club or social rugby player fit to play."
category: personal
version: 1.0.0
tags: [fitness-sport, rugby-conditioning-play, athlete, team, club-rugby, contact-conditioning, sevens, breakdown]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - training-program
    - one-on-one
    - trip
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Rugby Conditioning & Play
          description: "Preparing for rugby with strength, speed and contact conditioning, plus skills and season planning for club and social players."
          projects:
            - name: Finding a rugby club at your level
              description: |-
                ## Purpose
                Most towns have more rugby than it first appears: a club running three or four adult sides, a social or vets fifteen, a touch league in summer and often a women's section. Trying two clubs before committing, and being honest about your fitness, contact experience and the Saturdays you can give, puts you in a side where you play eighty minutes rather than watching from the touchline or getting hurt in a mismatch.

                ## Milestones
                1. A list of clubs within 40 minutes of home, with the sides each runs and their training nights.
                2. Training attended at two clubs, with a word with the coach or captain at each.
                3. Each club noted for level, minutes on offer, subs, coaching and how new players are brought in.
                4. One club chosen and its membership secretary told you are joining for the season.

                ## Notes
                Ask which team a new player usually starts in. Most clubs put newcomers in a lower side for a few weeks to check contact skills, which is a safety step, not a judgement.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One club chosen after training with at least two, with membership paid and your first training night in the calendar."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Use your national union's club finder to list clubs within 40 minutes"
                - "Message two clubs asking which side suits your experience and when they train"
                - "Attend a training session at each club and talk to the coach afterwards"
                - "Pay your membership and add the club's training nights to your calendar"
            - name: Boots, mouthguard and kit for contact rugby
              description: |-
                ## Purpose
                Rugby asks more of kit than most sports: boots with studs that grip soft winter pitches, a mouthguard that stays in when you are hit, and padding that meets the laws. A custom-fitted mouthguard from a dentist or specialist fits better and lets you breathe and call, while a cheap boil-and-bite one tends to be left in the bag.

                ## Milestones
                1. The surfaces you play on listed, with boot stud type chosen for each.
                2. A mouthguard that fits, custom-made or properly moulded, in your kit bag.
                3. Any scrum cap or shoulder padding checked against your union's approved kit rules.
                4. A spare mouthguard case, tape and a second pair of laces packed.

                ## Notes
                Start from the **Purchase decision** template. Many artificial pitches ban screw-in metal studs, so check before you buy, and replace a mouthguard that no longer clicks into place.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Boots suited to your pitches, a fitted mouthguard and any law-compliant padding are in your kit bag before your first contact session."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down whether your home and training pitches are grass or artificial"
                - "Book a mouthguard fitting with a dentist or a club fitting day"
                - "Check your union's rules on approved scrum caps and shoulder pads"
                - "Check studs, laces and the fit of your mouthguard @recurring(monthly:16)"
            - name: Pre-season rugby fitness baseline
              description: |-
                ## Purpose
                Rugby fitness is a mix of repeated sprints, recovery between them and the strength to keep doing it after contact, so one long run tells you little. A short battery of tests, such as a 1,200 metre Bronco shuttle, a 10 and 40 metre sprint and a few strength markers, gives a starting point you can retest each quarter and shows which quality is holding you back.

                ## Milestones
                1. A Bronco or similar repeated shuttle test completed and timed.
                2. 10 and 40 metre sprint times recorded from a standing start.
                3. Press-ups in a minute, a pull-up count and a working squat weight written down.
                4. Body weight and the date recorded beside the results, with the weakest quality named.

                ## Notes
                Start from the **Metrics log** template. Test on the same surface and in the same boots each time, or the numbers will not compare.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated record of Bronco time, 10 and 40 metre sprints, press-ups, pull-ups and body weight, with your weakest quality named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark out 20, 40 and 60 metre cones on a pitch for the Bronco"
                - "Run the Bronco and the two sprints with a training partner timing"
                - "Record press-ups, pull-ups and a working squat weight in the gym"
                - "Repeat the test battery and compare it with the last one @recurring(quarterly)"
            - name: Registration, insurance and medical details
              description: |-
                ## Purpose
                Every union expects each adult player to be registered before they play a competitive match, and the club's insurance often depends on it. Checking that you are registered, knowing what the club's personal accident cover pays and what it does not, and giving the club your emergency contact and any medical conditions means an injury on a wet Saturday is handled properly.

                ## Milestones
                1. Your registration with the national union confirmed by the club secretary.
                2. The club's player injury cover read, with its limits and exclusions noted.
                3. A decision made on whether you need extra personal cover for lost earnings.
                4. Emergency contact and relevant medical conditions given to the club in writing.

                ## Notes
                If you are self-employed, a broken hand can mean weeks without income. Look at what the club policy actually pays before assuming you are covered.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Your union registration is confirmed, the club cover is understood, and your emergency and medical details are held by the club."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the club secretary whether your union registration is complete"
                - "Read the club's player injury policy and note what it excludes"
                - "Get a quote for personal injury cover if you rely on your own earnings"
                - "Give the club your emergency contact and medical details on its form"
                - "Confirm your registration is renewed before the first fixture @recurring(yearly)"
            - name: Concussion recognise and remove plan
              description: |-
                ## Purpose
                Concussion is the injury community rugby takes most seriously, and the rule is simple: if in doubt, sit them out. Learning the signs, knowing your union's graduated return to play steps and minimum stand-down, and knowing who at the club handles it means you will act correctly when it is you or a teammate who takes the knock.

                ## Milestones
                1. Your union's free concussion awareness module completed.
                2. The signs and symptoms that mean removal from play written on a card in your kit bag.
                3. Your union's graduated return to play stages and minimum stand-down noted.
                4. The club's concussion lead or first aider identified by name.

                ## Notes
                This plan organises your union's guidance; it does not replace a medical assessment. Any suspected concussion needs to be seen by a healthcare professional before returning to training.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The union's concussion module is complete, a signs card is in your kit bag and you can name the club's concussion lead."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Complete your union's online concussion awareness module"
                - "Write the remove-from-play signs on a card for your kit bag"
                - "Note the graduated return to play stages your union publishes"
                - "Ask the club who leads on concussion and how to report one"
                - "Recheck the union's concussion guidance for changes @recurring(yearly)"
            - name: Understanding your position's physical demands
              description: |-
                ## Purpose
                A tighthead prop and a full back play different games: one spends the afternoon in scrums, rucks and mauls, the other covers several kilometres with long sprints and high balls. Knowing what your position actually asks for, in contacts, sprint distances and set piece work, tells you where your training hours should go and stops you copying a programme built for someone else.

                ## Milestones
                1. Your main position and a second position agreed with your coach.
                2. The typical contacts, sprints and set piece duties of that position written down.
                3. The two physical qualities that matter most for it named.
                4. Your baseline results compared with what the position needs.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of your position's demands, with its two key physical qualities compared against your baseline results."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your coach which position and second position they see you in"
                - "Ask the agent to summarise the physical demands of that position"
                - "Watch one full match following only a player in your position"
                - "Compare your baseline results with the qualities that position needs"
            - name: A rugby week around work and family
              description: |-
                ## Purpose
                Two club training nights, a match, two gym sessions and some conditioning add up fast, and most adult players also have a job and people at home. Laying out a realistic week, with hard days kept apart and the day after the match protected for recovery, gives you a routine you can keep through a long winter rather than one that collapses by November.

                ## Milestones
                1. Fixed commitments for work and family marked on a weekly grid.
                2. Club training nights and match day placed, with the day after kept light.
                3. Gym and conditioning sessions slotted so no two hard sessions fall back to back.
                4. The plan shared with the people at home and tested for four weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written weekly schedule, agreed at home, that has been followed for four consecutive weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark work, childcare and family commitments on a seven-day grid"
                - "Place club training, match day and a light recovery day"
                - "Slot two gym sessions and one conditioning session around them"
                - "Talk the plan through with your partner or housemates"
            - name: Neck strength baseline before contact
              description: |-
                ## Purpose
                Strong neck muscles help you hold your head position in the tackle and absorb the jolts of rucks and scrums, and forwards in particular are under neck load every week. Measuring where you start, with simple timed holds in four directions, gives a baseline before contact training and shows whether one direction is lagging.

                ## Milestones
                1. Timed isometric neck holds recorded front, back and both sides.
                2. Any direction more than a third weaker than the others noted.
                3. A starter routine of two or three exercises agreed with a coach or physio.
                4. The baseline repeated after six weeks of the routine.

                ## Notes
                Start gently with your own hand or a band as resistance. Stop and seek advice if any hold causes pain, pins and needles or dizziness.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Neck hold times in four directions recorded twice, six weeks apart, with any weak direction identified."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Time a hand-resisted neck hold in each of four directions"
                - "Note any direction that is clearly weaker than the others"
                - "Ask your coach or club physio for a starter neck routine"
                - "Retest the four holds six weeks later and compare"
            - name: Playing weight target agreed with your coach
              description: |-
                ## Purpose
                Size matters in rugby, but the right playing weight depends on your position, frame and speed, and chasing a number off the internet can cost you pace or health. Agreeing a sensible range with your coach, and with a dietitian if you plan a large change, gives you a target to train towards and a way to tell if the scales are moving the right way.

                ## Milestones
                1. Current weight and a waist or skinfold measure recorded.
                2. A playing weight range discussed and agreed with your coach.
                3. A professional view sought if the change is more than a few kilograms.
                4. A check-in rhythm set for weight and sprint times together.

                ## Notes
                Weight change is organised here, not prescribed. Speak to a registered dietitian or your doctor before a large gain or loss, and never cut weight to make a team.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A playing weight range agreed with your coach is written in your log, with how you will check it alongside speed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Weigh yourself at the same time of day three days running"
                - "Ask your coach what weight range suits your position and frame"
                - "Book a dietitian appointment if the change is large"
                - "Write the agreed range and check dates in your training log"
            - name: Two gym sessions a week for rugby strength
              description: |-
                ## Purpose
                Club training is mostly skills and team shape, so the strength that lets you win collisions and stay injury-free has to come from the gym. Two full-body sessions a week built on a squat or trap bar deadlift, a press, a pull and a single-leg movement, progressed steadily, are enough for most club players to get noticeably stronger across a season.

                ## Milestones
                1. A programme of two full-body sessions with lower, upper, pull and single-leg lifts.
                2. Working weights and reps recorded for each lift in week one.
                3. Sessions placed away from match day and the hardest club session.
                4. Twelve weeks of sessions logged, with each main lift heavier than at the start.

                ## Notes
                Start from the **Training program** template. In season, keep the weights heavy but cut the sets, so you hold strength without carrying fatigue into Saturday.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weeks with two logged gym sessions, and every main lift heavier in week twelve than in week one."
                cadence: rolling
              tasks:
                - "Write two full-body sessions with four main lifts each"
                - "Record your working weight and reps for every lift in week one"
                - "Complete a full-body strength session and log it @recurring(weekly:mon,fri)"
                - "Cut the number of sets by a third during heavy fixture weeks"
            - name: Repeated sprint conditioning session
              description: |-
                ## Purpose
                Rugby is short bursts with incomplete rest, often after getting up off the floor, so steady jogging builds the wrong engine. One weekly session of repeated sprints with short recoveries, and some with a get-up from the ground before each effort, prepares you for the last twenty minutes when most games are won or lost.

                ## Milestones
                1. A weekly session of 6 to 12 sprints of 20 to 40 metres with set recoveries written.
                2. A version with get-ups or tackle bag hits before each sprint added.
                3. Times or heart rate recorded so progress is visible.
                4. Eight weeks of sessions completed with recoveries shortened or reps added.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly repeated sprint sessions logged, with either more reps or shorter recoveries by the final week."
                cadence: rolling
              tasks:
                - "Mark out 20 and 40 metres on a pitch or park"
                - "Write a first session of eight 30 metre sprints with 30 seconds rest"
                - "Run the repeated sprint session and log times @recurring(weekly:wed)"
                - "Add a get-up from the ground before each sprint after four weeks"
            - name: Neck and shoulder prehab routine
              description: |-
                ## Purpose
                Shoulders and necks take the brunt of tackling, rucking and scrummaging, and the players who stay on the pitch tend to be the ones who do ten minutes of unglamorous work twice a week. A short routine of neck holds, rotator cuff work and scapular control, done before training and on a rest day, keeps those joints ready for the next collision.

                ## Milestones
                1. A ten-minute routine of neck, rotator cuff and shoulder blade exercises written.
                2. The routine done before club training or on a rest day twice a week.
                3. Band resistance or hold times increased every four weeks.
                4. Twelve weeks of the routine completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty-four prehab sessions logged over twelve weeks, with resistance or hold time increased at least twice."
                cadence: rolling
              tasks:
                - "Pick three neck and three shoulder exercises with your coach or physio"
                - "Buy a light and a medium resistance band"
                - "Do the ten-minute neck and shoulder routine @recurring(weekly:sun,wed)"
                - "Increase band tension or hold time every four weeks"
            - name: Match availability replies and selection
              description: |-
                ## Purpose
                Selectors in amateur clubs pick three or four sides from whoever answers, and a late reply can mean you drop a team or leave a side short of a hooker. Answering the availability call promptly, flagging weekends away early and knowing how selection works means you get picked fairly and the club does not field uncontested scrums because nobody knew.

                ## Milestones
                1. The club's availability method and deadline known: app, poll or message.
                2. Known weekends away entered for the whole season.
                3. Availability answered by the deadline every week for a full block of fixtures.
                4. Selection criteria for each side understood from the coach.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Availability answered by the club's deadline for every fixture in a block of eight weeks."
                cadence: rolling
              tasks:
                - "Ask the club how and by when availability must be given"
                - "Enter every weekend you already know you are away"
                - "Reply to the club's availability call for Saturday @recurring(weekly:mon)"
                - "Ask the coach how selection works between the sides"
            - name: Day-after-match recovery and knock check
              description: |-
                ## Purpose
                Sunday mornings bring a few new bruises for most players, and the problem ones are easy to miss among them. A short routine the day after each match, with light movement, a look at every knock and a note of anything that is worse than usual, catches the injury that needs a physio before it turns into six weeks out.

                ## Milestones
                1. A recovery routine of light movement, mobility and food and fluid written.
                2. Every knock from the match noted with where it is and how bad it feels.
                3. A rule set for when a knock goes to the club physio or a doctor.
                4. Ten post-match checks completed and kept in your log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Post-match knock notes recorded after ten matches, with any knock that met your referral rule seen by a professional."
                cadence: rolling
              tasks:
                - "Write a 30-minute recovery routine of walking, swimming or cycling and mobility"
                - "Agree with the club physio which knocks should be shown to them"
                - "Note every knock from the match and rate it out of ten @recurring(weekly:sun)"
                - "Book the physio for any knock worse on Tuesday than on Sunday"
            - name: Personal match log
              description: |-
                ## Purpose
                Memory edits matches into a highlight reel or a disaster, and neither helps you improve. A two-minute log after each game, with minutes played, tackles made and missed, carries, any penalties given away and one thing to work on, builds an honest picture across a season and gives you something real to talk about with your coach.

                ## Milestones
                1. A log with columns for opposition, minutes, tackles, misses, carries, penalties and a note.
                2. Every match of a block entered within a day.
                3. Patterns spotted across eight matches, such as missed tackles late in games.
                4. One work-on point taken into training each week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A match log with an entry for every game across a block of eight, and one pattern from it written down."
                cadence: rolling
              tasks:
                - "Set up the match log with the columns you want to track"
                - "Log minutes, tackles, carries, penalties and one note @recurring(weekly:sat)"
                - "Look back over the last eight entries for a pattern"
                - "Turn the pattern into one point to work on at training"
            - name: Weekly contact load count
              description: |-
                ## Purpose
                Contact is the most demanding thing rugby asks of the body, and amateur players often get it from three places at once: club training, a match and a hard session with another side. Counting full contact minutes and tackles across the week, and keeping a ceiling agreed with your coach, stops the slow build-up of fatigue that leads to sloppy, dangerous technique.

                ## Milestones
                1. Full contact, controlled contact and no-contact sessions defined for your club.
                2. A weekly ceiling for full contact agreed with your coach.
                3. Each week's contact sessions and match minutes counted.
                4. Eight weeks recorded, with any week over the ceiling discussed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of contact counts recorded against an agreed ceiling, with every week over it raised with your coach."
                cadence: rolling
              tasks:
                - "Ask your coach how the club grades full and controlled contact"
                - "Agree a weekly ceiling for full contact sessions"
                - "Count this week's contact sessions and match minutes @recurring(weekly:fri)"
                - "Raise any week over the ceiling with your coach"
            - name: Monthly weight and strength check
              description: |-
                ## Purpose
                Through a long season, players can lose muscle and strength without noticing, especially once the gym gets squeezed by fixtures and dark evenings. A quick monthly check of body weight, a key lift and a sprint time shows early whether you are holding your playing condition or quietly losing it.

                ## Milestones
                1. Three measures chosen: body weight, one main lift and a 10 metre sprint.
                2. A fixed day each month for the check.
                3. Six monthly checks recorded through the season.
                4. Any drop of more than a few per cent acted on with your coach.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly entries of weight, a main lift and a 10 metre sprint, with any clear drop discussed with your coach."
                cadence: rolling
              tasks:
                - "Choose the lift and sprint distance you will track each month"
                - "Record body weight, the lift and a 10 metre sprint @recurring(monthly:4)"
                - "Talk to your coach if two checks in a row go backwards"
            - name: Season fixture calendar and blackout dates
              description: |-
                ## Purpose
                League rugby seasons run from late summer into spring, with cup rounds, rest weekends and rearranged games scattered through it. Putting every fixture, known clash and family commitment into one calendar lets you plan training blocks, warn selectors early and book holidays in the gaps rather than across a cup semi-final.

                ## Milestones
                1. Every league and cup fixture for your side in your calendar.
                2. Family, work and holiday clashes marked and told to the club.
                3. Rest weekends identified for recovery or a deload week.
                4. The calendar updated whenever a fixture moves.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A personal season calendar holding every fixture and clash, kept current for the whole season."
                cadence: cyclic
              tasks:
                - "Copy the published fixture list into your own calendar"
                - "Mark weddings, holidays and work trips that clash"
                - "Tell the club about every clash in one message"
                - "Check the fixture list for moved games and update your calendar @recurring(monthly:25)"
            - name: Monthly conversation with your coach
              description: |-
                ## Purpose
                Amateur coaches are busy and players often go a whole season without hearing why they were dropped or what would get them picked. Ten minutes a month, with your match log and one question prepared, turns guesswork into a plan and shows the coach you are serious about improving.

                ## Milestones
                1. A monthly slot agreed with the coach, before or after training.
                2. Your match log and one question brought to each conversation.
                3. One agreed work-on point recorded after each talk.
                4. Six conversations held across the season.

                ## Notes
                Start from the **1:1** template. Ask what would get you picked, not why you were not.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly coach conversations recorded, each ending with one written work-on point."
                cadence: rolling
              tasks:
                - "Ask the coach whether a monthly ten-minute chat works for them"
                - "Prepare one question from your match log before each talk"
                - "Hold the coach conversation and write down the work-on point @recurring(monthly:12)"
            - name: Low tackle technique with the lead shoulder
              description: |-
                ## Purpose
                Most head injuries in rugby happen to the tackler, usually from a high or upright tackle with the head on the wrong side. Learning to tackle low, with your head to the side of the ball carrier, a strong leg drive and a good wrap, protects you and keeps you within the tackle height laws many unions have lowered for community rugby.

                ## Milestones
                1. Your union's current legal tackle height for your level checked.
                2. Tackle technique drilled at walking pace with pads and a coach watching.
                3. Tackles on both shoulders practised, with the weaker side named.
                4. Technique held under fatigue in a controlled contact drill.

                ## Notes
                Always build tackle work up from walking pace with a qualified coach. Practise the weak shoulder as much as the strong one.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A coach has watched you complete low tackles on both shoulders, with head to the side, in a fatigued controlled contact drill."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Look up your union's current tackle height law for adult community rugby"
                - "Ask your coach to watch your tackle technique on the pads"
                - "Practise ten slow tackles on your weaker shoulder each session"
                - "Do a tackle drill at the end of training when tired"
            - name: Carrying into contact and presenting the ball
              description: |-
                ## Purpose
                Losing the ball or getting held up in a carry hands the other side the game, while a carry that gets over the gain line and places the ball cleanly gives your scrum half quick ball. Working on footwork before contact, leg drive through it and a fast, long placement turns honest effort into front-foot possession.

                ## Milestones
                1. Footwork before contact practised to hit the defender's weaker shoulder.
                2. Ball security in two hands and the far arm drilled.
                3. A long, quick placement back towards your own side practised on the ground.
                4. Clean ball presentation in at least eight of ten carries in a drill.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight of ten carries in a coached drill end with a clean, long ball placement and no turnover."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask a teammate to hold a tackle shield for footwork practice"
                - "Practise a fast long placement from the ground ten times"
                - "Run a drill of ten carries and count clean presentations"
            - name: Rucking, clearing out and jackalling
              description: |-
                ## Purpose
                The breakdown decides who keeps the ball, and it is where the laws are most often misunderstood and most penalties are given away. Learning to arrive on your feet, enter through the gate, clear out low and pick the moment to jackal makes you useful at every ruck without handing the opposition easy penalties.

                ## Milestones
                1. The ruck laws on entry, hands and staying on your feet understood.
                2. Low clear-out technique practised with a coach on shields.
                3. Jackal body position over the ball practised safely.
                4. Breakdown penalties in your match log reduced across eight matches.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Breakdown penalties against you fall across eight logged matches after coached clear-out and jackal practice."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the ruck section of the laws on your union's website"
                - "Practise clear-outs on a shield with your shoulders below hips"
                - "Practise the jackal position on a static player with a coach"
                - "Count breakdown penalties in your match log each month"
            - name: Passing off both hands at pace
              description: |-
                ## Purpose
                Every player, prop included, now needs to pass under pressure, and most club players have one good side and one hopeful side. Working on a flat, quick pass off both hands, while running and after taking contact, makes you a link in the move rather than the place it dies.

                ## Milestones
                1. Your weaker passing side identified with a partner watching.
                2. Twenty passes a session practised off the weaker hand.
                3. Passes made at running pace over 5 and 10 metres on both sides.
                4. A short pass after contact practised in a small-sided game.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Accurate 10 metre passes at running pace off both hands, checked by a coach or teammate."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a teammate which of your passes looks weaker"
                - "Pass against a wall twenty times off the weaker hand"
                - "Practise running passes over 10 metres on both sides"
            - name: Lineout jumping and lifting
              description: |-
                ## Purpose
                Winning your own lineout ball gives the backs a platform, and losing it is a steady leak of possession. For forwards, learning to lift safely, time a jump or throw straight to a call turns a set piece that often goes wrong at club level into one the team can rely on.

                ## Milestones
                1. Your role in the lineout agreed: jumper, lifter or thrower.
                2. Safe lifting grip and support on the way down practised with a coach.
                3. The team's lineout calls learned and written down.
                4. A success rate on your throws or jumps tracked over four matches.

                ## Notes
                Lifting is only safe once both lifters have been coached together. Always support the jumper all the way back to the ground.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The team's lineout calls known by heart and a success rate tracked across four matches in your role."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the forwards coach which lineout role suits you"
                - "Write down the team's lineout calls and what each means"
                - "Practise lifts or throws in a coached unit session"
                - "Track lineout wins in your role over the next four matches"
            - name: Scrummaging body position for the front five
              description: |-
                ## Purpose
                Scrummaging is the most technical and the most dangerous part of the game, which is why only suitably trained players can pack down in the front row. Learning a flat back, a strong bind and the crouch, bind, set sequence with a qualified coach keeps the scrum safe and turns it into a weapon rather than a penalty source.

                ## Milestones
                1. Body position checked against a machine or with a coach: flat back, hips below shoulders.
                2. Binding and the referee's call sequence practised at walking pace.
                3. Live scrummaging done only with trained opposite numbers and a coach present.
                4. Scrum penalties against you tracked across a block of matches.

                ## Notes
                If a side has no trained front row player available, the laws call for uncontested scrums. Never pack down in the front row without the training your union requires.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A qualified coach has signed off your body position and you have scrummaged live only with trained opposition."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the forwards coach whether you are cleared for the front row"
                - "Practise body position on a scrummage machine with the coach"
                - "Learn the referee's scrum call sequence for your level"
                - "Count scrum penalties against you in your match log"
            - name: Catching the high ball and kicking from hand
              description: |-
                ## Purpose
                Back three players and half backs live with the high ball, and one dropped catch under a box kick can concede a try. Learning to call, catch with arms high and turn a knee into the chaser, along with kicking to touch and a contestable box kick, gives the backs the tools to win the territory game.

                ## Milestones
                1. High ball catching practised with a call, raised arms and a protective knee.
                2. Kicking to touch practised off both feet if you are a kicker.
                3. Box kick or up and under hang time measured.
                4. Catching and kicking success tracked in your match log.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty consecutive high balls caught cleanly in practice, and kick success tracked over four matches."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask a teammate to kick you twenty high balls at training"
                - "Practise kicking to touch off your weaker foot"
                - "Time the hang of your box kicks with a stopwatch"
                - "Add catches and kicks to your match log for four matches"
            - name: Laws refresher for the breakdown, offside and tackle
              description: |-
                ## Purpose
                Laws change every few seasons, and most penalties at club level come from the same handful: offside at the ruck, hands in, not rolling away and high tackles. A short refresher before each season, focused on the laws that decide your position's penalties, saves points and yellow cards.

                ## Milestones
                1. This season's law changes and trial laws for your level read.
                2. The tackle, ruck, maul and offside laws summarised in your own words.
                3. A short online laws quiz passed.
                4. Your three most common penalties checked against your match log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of tackle, ruck, maul and offside laws written and a laws quiz passed before the first fixture."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your union's summary of law changes for this season"
                - "Summarise the tackle, ruck, maul and offside laws on one page"
                - "Take an online laws quiz from World Rugby or your union"
                - "Read the season's law changes before pre-season starts @recurring(yearly)"
            - name: Defensive line speed and calls
              description: |-
                ## Purpose
                Club defences leak most tries through gaps between defenders, not through missed tackles. Learning the team's defensive system, the calls that hold the line together and the timing to come up as one stops the dog leg that good attacks look for.

                ## Milestones
                1. The team's defensive system and calls written down.
                2. Your role at the ruck and in the line understood.
                3. Line speed practised in a unit with calls made every repetition.
                4. Missed tackles from gaps reviewed with the coach after four matches.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The team's defensive calls written down and practised, with a coach review of gaps after four matches."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the defence coach to explain the system and its calls"
                - "Write down every call and what you do when you hear it"
                - "Call every repetition out loud in the next defence drill"
                - "Review four matches of defensive gaps with the coach"
            - name: Eight-week speed and acceleration block
              description: |-
                ## Purpose
                One extra yard of pace changes how often a winger scores and how often a back row gets to the breakdown first, and most club players have never trained speed on purpose. Eight weeks of short, fully rested sprints, acceleration drills and some jumping, measured against your baseline 10 and 40 metre times, is usually enough to see a real change.

                ## Milestones
                1. Baseline 10 and 40 metre times taken from your fitness test.
                2. Two short speed sessions a week, with full rest between sprints, planned.
                3. Acceleration drills and jumps added to the warm-up.
                4. 10 and 40 metre times retested at week eight.

                ## Notes
                Speed work needs full recovery between efforts. If you are breathing hard, you are doing conditioning, not speed.
              priority: medium
              deadlineOffsetDays: 63
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Sixteen speed sessions logged in eight weeks and 10 and 40 metre times retested against the baseline."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Copy your baseline 10 and 40 metre sprint times into the plan"
                - "Write two speed sessions of six to eight sprints with full rest"
                - "Add three acceleration drills to your warm-up"
                - "Retest the two sprints at the end of week eight"
            - name: Building playing weight without losing pace
              description: |-
                ## Purpose
                Moving up a side or into the back row often means adding muscle, but weight gained the wrong way slows you down and leaves you gasping in the last quarter. Pairing a structured gym block with a food plan agreed with a professional, and checking sprint times alongside the scales, keeps the new size useful on the pitch.

                ## Milestones
                1. A target range and time frame agreed with your coach.
                2. An eating plan agreed with a registered dietitian or sports nutritionist.
                3. A hypertrophy-leaning gym phase written into your programme.
                4. Weight and 10 metre sprint checked every two weeks for twelve weeks.

                ## Notes
                Gaining slowly is the point. Avoid supplements you have not checked against your union's anti-doping guidance.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Twelve weeks of fortnightly weight and sprint checks, ending inside the agreed range with sprint times held."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Agree a weight range and time frame with your coach"
                - "Book a session with a dietitian or sports nutritionist"
                - "Add a higher-volume gym phase to your programme"
                - "Check any supplement against your union's anti-doping advice"
            - name: Eight-week pre-season conditioning block
              description: |-
                ## Purpose
                The first month of a season punishes anyone who turns up to pre-season unfit, and soft tissue injuries cluster there. An eight-week block over the summer, building from aerobic base and strength into repeated sprints and contact conditioning, means you arrive ready to train rather than trying to get fit through the first fixtures.

                ## Milestones
                1. A start date set eight weeks before the club's first pre-season session.
                2. Weeks one to three planned for aerobic base and strength.
                3. Weeks four to eight planned for repeated sprints and contact-ready strength.
                4. The Bronco and sprint tests rerun in week eight and compared with the baseline.

                ## Notes
                Start from the **Training program** template. Build running volume gradually, especially if you have barely run since the last season ended.
              priority: high
              deadlineOffsetDays: 70
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "All eight weeks of the block completed and the Bronco time improved on the baseline before the first pre-season session."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Find the date of the club's first pre-season session"
                - "Ask the agent to draft an eight-week plan from your baseline results"
                - "Book your gym and pitch sessions into the calendar for eight weeks"
                - "Rerun the Bronco and sprints in week eight"
            - name: Fifteens, tens or sevens for the summer
              description: |-
                ## Purpose
                Summer offers sevens, tens, touch and beach rugby, each with a different load: sevens is brutal on the lungs, touch keeps skills sharp with no contact. Choosing what to play over the off-season, rather than drifting, keeps you sharp without arriving at pre-season already worn out.

                ## Milestones
                1. Summer formats near you listed with dates and travel time.
                2. Each option weighed for fitness, contact load, fun and rest.
                3. A choice made, including a deliberate rest period of at least two weeks.
                4. Entries or team places confirmed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written summer plan naming the format chosen, the entries confirmed and a rest period of at least two weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List summer sevens, tens, touch and beach events within reach"
                - "Weigh each option for contact load and rest"
                - "Block out at least two weeks with no rugby at all"
                - "Confirm your team or entry for the format you choose"
            - name: Pushing for a place in the first fifteen
              description: |-
                ## Purpose
                Moving from the seconds or thirds into the first team is about more than talent: availability, fitness numbers, set piece reliability and what the coach thinks the side needs. Asking the coach plainly what stands between you and a starting shirt, then working on that for a block, gives you the best shot at it.

                ## Milestones
                1. The coach asked what would put you in first team contention.
                2. Two specific gaps agreed: a fitness number, a skill or a set piece role.
                3. A six-week plan aimed at those two gaps followed.
                4. A follow-up conversation held with evidence from your log.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two gaps agreed with the coach, six weeks of work on them logged and a follow-up conversation recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the first team coach what would put you in contention"
                - "Write down the two gaps you agreed"
                - "Plan six weeks of work aimed at those gaps"
                - "Book a follow-up chat with the coach after six weeks"
            - name: Changing position for a new role
              description: |-
                ## Purpose
                Players change positions more than they expect: a centre slows and moves to the back row, a lock drops weight and plays six, a winger becomes a full back. A deliberate change, with the new position's demands learned and its set piece roles practised, works far better than being thrown in on a Saturday because someone dropped out.

                ## Milestones
                1. The new position agreed with your coach, with reasons.
                2. The physical and set piece demands of the new position written down.
                3. Training changed for a block to suit them.
                4. Four matches played in the new position and reviewed with the coach.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Four matches played in an agreed new position, with a review of each recorded alongside the coach's view."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your coach why they see you in the new position"
                - "List the set piece and defensive roles the position carries"
                - "Adjust your gym and conditioning for the new demands"
                - "Review your first four matches there with the coach"
            - name: Choosing a strength programme for the season
              description: |-
                ## Purpose
                Club players get programmes from everywhere: a friend, an app, a paid coach or the club's conditioning lead. Comparing a few on whether they fit your position, your week and your training age, and how they change in and out of season, saves you a year of programme-hopping.

                ## Milestones
                1. Three programme sources listed, including any the club offers.
                2. Each scored on position fit, sessions per week, in-season changes and cost.
                3. One chosen and loaded into your log.
                4. A review date set for the end of the first block.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One strength programme chosen after scoring three, loaded into your log with a review date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the club whether its players follow a shared programme"
                - "Score three programmes on position fit, time and in-season changes"
                - "Load the chosen programme into your training log"
            - name: Pre-season friendlies and the opening league match
              description: |-
                ## Purpose
                Those weeks before the first league game set the tone for a season, and they are when squads are settled and pecking orders formed. Treating pre-season friendlies as preparation, with fitness, contact and set piece built up step by step, gets you into the starting side for the opening match in condition to finish it.

                ## Milestones
                1. Pre-season sessions and friendly dates in the calendar.
                2. Contact sessions attended before the first friendly.
                3. Minutes played in at least two friendlies.
                4. Kit, registration and availability sorted the week before the opener.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two pre-season friendlies played and availability confirmed for the opening league match."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Add every pre-season session and friendly to your calendar"
                - "Attend at least two contact sessions before the first friendly"
                - "Check boots, mouthguard and registration the week before the opener"
            - name: Summer sevens tournament day
              description: |-
                ## Purpose
                A sevens tournament can mean four or five games in a day, with long gaps in the sun and fourteen-minute bursts of flat-out running. Planning the squad, kit, food and fluids, shade and a warm-up for each game turns a chaotic day into one where the side is still running in the final.

                ## Milestones
                1. A squad of ten to twelve confirmed with entry paid.
                2. Kit, sun cream, shade and enough food and water planned for a full day.
                3. Two set plays and restart calls agreed for sevens.
                4. A warm-up routine set for between games.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full squad entered and the team present with kit, food, water and shade for every game of the tournament."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find a sevens tournament and its entry deadline"
                - "Confirm ten to twelve players and collect entry fees"
                - "Agree two set plays and a kick-off call"
                - "Pack shade, sun cream, food and water for the whole day"
            - name: Cup final or derby week preparation
              description: |-
                ## Purpose
                Big games bring bigger crowds, more nerves and a temptation to train harder in the days before, which is the opposite of what helps. A plan for the week, with a lighter session, clear set piece calls, sleep and food, and the logistics settled early, lets you play the game rather than the occasion.

                ## Milestones
                1. Training load reduced for the final two days.
                2. Set piece calls and the game plan reviewed with the side.
                3. Travel, kick-off time and kit sorted by midweek.
                4. A short personal routine set for the hour before kick-off.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The match played with a reduced final two days of training, the set piece reviewed and every logistic settled by midweek."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the coach what the week's training will look like"
                - "Sort travel, kit and kick-off time by Wednesday"
                - "Write your personal routine for the hour before kick-off"
                - "Go to bed early on the two nights before the game"
            - name: Club rugby tour
              description: |-
                ## Purpose
                Touring is the highlight of many club seasons and can also be a planning headache: travel for thirty, fixtures against unfamiliar sides, money, and keeping enough players fit for the games. A clear plan with a budget, a tour committee and agreed behaviour makes it a weekend people talk about for the right reasons.

                ## Milestones
                1. Dates, destination and opposition fixed with a host club.
                2. A per-player cost agreed and deposits collected.
                3. Travel, accommodation and match-day transport booked.
                4. A tour code of conduct agreed and shared before departure.

                ## Notes
                Start from the **Trip** template. Check that the club's insurance covers matches abroad and that every player carries their own travel cover.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The tour completed with fixtures played, every player paid up and no unpaid bills left with the club."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Ask the squad for dates and a rough budget in one poll"
                - "Contact two host clubs about a fixture"
                - "Collect deposits and book travel and rooms"
                - "Check the club's insurance covers matches abroad"
            - name: End-of-season review with your coach
              description: |-
                ## Purpose
                When the last game is played, the season's lessons fade within weeks. A sit-down with your coach, your match log and your fitness tests, followed by a written plan for the summer and next season, means you start pre-season knowing exactly what to work on.

                ## Milestones
                1. The season's match log and fitness retests summarised on one page.
                2. A review conversation held with your coach.
                3. Three priorities for the summer and next season agreed.
                4. The off-season plan written with rest weeks included.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A one-page season summary and three agreed priorities for next season written down after a review with your coach."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the season's match log and fitness tests on one page"
                - "Book a review conversation with your coach"
                - "Write three priorities for the summer and next season"
            - name: Starting contact rugby as an adult beginner
              description: |-
                ## Purpose
                Plenty of adults try rugby for the first time in their twenties or thirties, often through a club's beginners programme, and the first contact session is the hardest step. Learning to fall, tackle and be tackled at walking pace before playing a match, with a coach who knows you are new, makes the game far safer and keeps you in it.

                ## Milestones
                1. A club with a beginners or development group found.
                2. Falling, tackling and being tackled practised at walking pace.
                3. Contact progressed over several weeks to full speed in drills.
                4. A first match played in a development or social side.

                ## Notes
                Tell every coach you are new to contact. A good club will hold you back from matches until your tackle technique is safe.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A first match played in a development or social side after coached contact progressions in training."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask local clubs whether they run an adult beginners programme"
                - "Tell the coach you are new to contact at your first session"
                - "Practise falling safely and being tackled at walking pace"
                - "Agree with the coach when you are ready for a first match"
            - name: Moving from touch or tag rugby into contact
              description: |-
                ## Purpose
                Touch and tag players arrive with good handling and running lines, but none of the contact skills or the neck and shoulder strength the full game needs. A planned step across, with contact skills learned first and strength built in parallel, uses your speed and handling without exposing you to injury.

                ## Milestones
                1. A contact-ready strength routine started, including neck and shoulder work.
                2. Tackling, falling and rucking learned at slow speed.
                3. Controlled contact sessions attended for several weeks.
                4. A first full contact game played in a lower side.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Several weeks of controlled contact training completed before a first contact match in a lower side."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Tell the contact coach about your touch or tag background"
                - "Start neck and shoulder strength work twice a week"
                - "Attend controlled contact sessions before asking for selection"
            - name: Playing veterans rugby after 35
              description: |-
                ## Purpose
                Vets and golden oldies rugby lets older players keep playing, often with modified laws such as uncontested scrums, rolling subs or colour-coded shorts for players who should not be tackled. Knowing the laws your vets side uses and adjusting training for slower recovery means you keep playing for years rather than finishing your career with one bad hit.

                ## Milestones
                1. A vets side or golden oldies festival near you found.
                2. The modified laws it uses written down.
                3. Recovery between matches lengthened and logged.
                4. A full vets season or festival played.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A vets side joined, its modified laws written down, and a full season or festival played."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find a vets side or golden oldies festival near you"
                - "Ask the organiser which modified laws they play"
                - "Plan two easier days after each match instead of one"
            - name: Joining or starting a women's rugby team
              description: |-
                ## Purpose
                Women's rugby has grown fast, but sections still fold because of small squads and poor support, and new players can find it hard to know where to start. Finding a welcoming side, or working with a club to start one, with kit that fits, coaching and contact progressions in place, keeps women playing beyond a first season.

                ## Milestones
                1. Women's sides within reach found, with their training nights.
                2. A first session attended, or interest from at least fifteen players gathered.
                3. Kit sizing and sports bras sorted, with a fitted mouthguard.
                4. A coach and a regular training slot confirmed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Either a place in a women's side with a first match played, or a new section with a coach and fifteen interested players."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Search your union's club finder for women's sides near you"
                - "Message the women's captain or club about a first session"
                - "Gather interest from friends if no side is close enough"
                - "Ask the club about a coach and a training slot"
            - name: Rugby around shift work or a young family
              description: |-
                ## Purpose
                Nights, rotating shifts and small children make Tuesday and Thursday training impossible for weeks at a time, and many players drift out of the game. Being open with the club, finding short home sessions that keep you fit and agreeing how selection works when you miss training lets you keep playing through the busy years.

                ## Milestones
                1. Your shift pattern or family pattern shared with the coach.
                2. Two short home sessions written for weeks you miss training.
                3. Selection rules agreed for players who cannot make every session.
                4. A full block of fixtures played without missing through fatigue.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "An agreement with the coach on selection when training is missed, and two home sessions used through a full block of fixtures."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Tell the coach your shift or family pattern for the next month"
                - "Write two 30-minute home sessions for missed training weeks"
                - "Ask how selection works when you cannot train every week"
            - name: From student rugby to a town club
              description: |-
                ## Purpose
                Leaving university or college often means losing the team, coaching and facilities you took for granted, and many players never play again after graduating. Finding a club near your new job or home before the season starts keeps you in rugby, gives you a ready-made social network in a new place and keeps your fitness going.

                ## Milestones
                1. Clubs near your new home or job listed with their sides.
                2. Contact made with the club before pre-season begins.
                3. Your registration transferred and kit sorted.
                4. A first match played for the new club.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A club near your new home joined, registration moved and a first match played before the end of the first month of the season."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List clubs near your new home or workplace"
                - "Message two clubs about training before pre-season"
                - "Ask how to move your registration from the student club"
            - name: Captaining a club side
              description: |-
                ## Purpose
                Captaining an amateur side means far more than the coin toss: you talk to the referee, settle nerves before kick-off, make calls under pressure and often chase availability too. Setting out how you will lead, agreeing roles with the coach and planning your pre-match and half-time messages makes the job sustainable over a season.

                ## Milestones
                1. Roles agreed with the coach: who picks, who calls, who talks to the referee.
                2. A pre-match and half-time talk outline written.
                3. Vice captain and pack leader named.
                4. A mid-season review of how the captaincy is working held with the coach.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Captaincy roles agreed with the coach in writing and a mid-season review held and recorded."
                cadence: cyclic
                effort_hours_estimate: "15"
              tasks:
                - "Agree with the coach who handles selection, calls and the referee"
                - "Write a short outline for pre-match and half-time talks"
                - "Name a vice captain and pack leader"
                - "Hold a mid-season captaincy review with the coach"
            - name: Clip-by-clip review of your own match footage
              description: |-
                ## Purpose
                Many clubs now film matches on a phone or a club camera, but few players watch more than the tries. Clipping your own involvements, every tackle, carry, ruck and set piece, and counting what went right and wrong gives a more honest picture than any memory or match log.

                ## Milestones
                1. Access to the club's match footage arranged.
                2. Your involvements in one full match clipped or time-stamped.
                3. Tackles, carries and rucks counted and graded.
                4. One clip shown to the coach with a question.

                ## Notes
                Grade each involvement simply: good, okay, poor. Three grades are enough to show patterns.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three matches reviewed clip by clip, with involvements graded and one pattern raised with the coach."
                cadence: rolling
              tasks:
                - "Ask the club how to get the footage from Saturday's match"
                - "Time-stamp every involvement you have in one match"
                - "Grade each involvement good, okay or poor"
                - "Review one match of your footage and grade your involvements @recurring(monthly:20)"
            - name: Strength and conditioning support for the adult squad
              description: |-
                ## Purpose
                Many amateur clubs have no conditioning coach, so a player with a qualification or experience in the gym ends up running pre-season, warm-ups and fitness testing. Setting this up properly, with a squad test day, a shared programme and a warm-up routine, raises the whole team's fitness and reduces soft tissue injuries.

                ## Milestones
                1. The role agreed with the head coach and the club committee.
                2. A squad fitness test day run and the results shared.
                3. A shared gym programme and warm-up routine given to the squad.
                4. Test results compared at mid-season.

                ## Notes
                Check whether the club expects a qualification or insurance for running squad sessions, and stay within your competence.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A squad test day held, a shared programme and warm-up issued, and mid-season results compared with the first test."
                cadence: cyclic
                effort_hours_estimate: "30"
              tasks:
                - "Agree the conditioning role with the head coach and committee"
                - "Run a squad test day with the Bronco and two sprints"
                - "Share a warm-up routine and a gym programme with the squad"
                - "Check squad attendance at gym and warm-ups @recurring(monthly:9)"
            - name: Taking a rugby refereeing course
              description: |-
                ## Purpose
                Every weekend matches go ahead with no qualified referee, and players who referee understand the laws far better than those who do not. An introductory refereeing course lets you handle junior or social games, understand how referees see the breakdown and gives you a way to stay in the game after playing.

                ## Milestones
                1. An introductory refereeing course found through your union or referee society.
                2. The course completed, including any safeguarding check required.
                3. A first match refereed with a mentor watching.
                4. Feedback from the mentor written down and acted on.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An introductory refereeing course passed and a first match refereed with mentor feedback recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find an introductory refereeing course through your union"
                - "Complete any safeguarding check the course requires"
                - "Referee a first match with a mentor watching"
                - "Write down the mentor's feedback and one change to make"
---

# Rugby Conditioning & Play

This area is for anyone playing club, social or student rugby, from a first season of contact to a long-serving back rower, and for the captains and helpers who keep an adult squad on the pitch. It starts with the foundations (a club, kit and a mouthguard, a fitness baseline, registration, a concussion plan, positional demands and a neck strength baseline), then the weekly machinery of gym sessions, repeated sprint work, prehab, availability, recovery and contact load, the skills of tackling, carrying, rucking, passing, lineouts, scrums and the high ball, the decisions about speed, size, format and position, the season's events, versions for beginners, touch players, veterans, women's sides, busy parents and graduates, and finally captaincy, video review, club conditioning and refereeing.

What repeats is a Monday and Friday gym session, a Wednesday sprint session, prehab on Sunday and Wednesday, a Monday availability reply, a Friday contact count, a Saturday match log and a Sunday knock check, plus monthly checks on kit, weight and strength, the fixture calendar, a talk with your coach and your match footage, and a quarterly fitness retest. The Purchase decision, Metrics log, Training program, 1:1 and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
