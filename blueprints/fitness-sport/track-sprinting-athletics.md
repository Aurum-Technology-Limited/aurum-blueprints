---
id: fitness-sport.track-sprinting-athletics
name: Track Sprinting & Athletics
description: "A route through sprints, hurdles, jumps and throws: a club and coach, spikes and baseline tests, a weekly training system, technique skills, competitions and the specialist work of peaking and qualifying."
category: personal
version: 1.0.0
tags: [fitness-sport, track-sprinting-athletics, athlete, student, sprints, hurdles, jumps, throws]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - development-plan
    - training-program
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Track Sprinting & Athletics
          description: "Training for sprints, jumps or throws in track and field, with speed sessions, technique drills and club competitions."
          projects:
            - name: Finding an athletics club and event coach
              description: |-
                ## Purpose
                Most sprinters, jumpers and throwers improve fastest inside a club, where a track is booked, a qualified event coach is watching and other athletes are there to chase. Visiting two or three clubs before committing lets you compare coaching for your event, session nights that fit school or work, and fees, rather than joining the nearest one and finding the throws group meets on a night you cannot make.

                ## Milestones
                1. Clubs within travelling distance listed with their track, session nights and event groups.
                2. A taster session attended at two clubs.
                3. The coach for your event group met and their coaching qualification noted.
                4. A club chosen and the first membership fee paid.

                ## Notes
                Ask whether the coach has worked with athletes at your level in your event. A good sprints coach is not automatically a good jumps or throws coach.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Membership of a club with a named coach for your event group, chosen after attending taster sessions at two clubs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the athletics clubs within an hour of home or college"
                - "Email two clubs asking which nights their event groups train"
                - "Attend a taster session at each club"
                - "Join the club whose coach and session times suit you best"
            - name: Choosing your event group from sprints, jumps or throws
              description: |-
                ## Purpose
                Your first season is the cheapest time to find out where you belong, and the answer is often not the event you started with. A long jump that outscores your 100 m on the points tables, or a shot put that beats both, shows where coaching time will pay back most. Trying each group for a few weeks and scoring your marks on the same tables makes the choice on evidence rather than habit.

                ## Milestones
                1. At least three sessions done with each of the sprints, jumps and throws groups.
                2. One measured mark recorded in a sprint, a jump and a throw.
                3. Each mark converted to points on a combined events scoring table.
                4. A main event group agreed with your coach, with a second event noted.

                ## Notes
                Combined events scoring tables are published free and are the fairest way to compare a 100 m time with a long jump or a shot put.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A main event group and a second event agreed with your coach, backed by scored marks from all three groups."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the head coach which event groups take beginners this month"
                - "Join three sessions each with the sprints, jumps and throws groups"
                - "Score your best mark from each group on a combined events points table"
                - "Agree your main and second event with the coach"
            - name: Athlete registration with your national federation
              description: |-
                ## Purpose
                Results from licensed meetings only count towards rankings and championship qualification if you are registered with your national federation through your club. Sorting registration before your first competition avoids unregistered entry surcharges and marks that never appear on the rankings.

                ## Milestones
                1. Registration completed through your club, with your registration number saved.
                2. The correct club name and age group showing on your federation profile.
                3. Your registration number stored with your entry details for meetings.
                4. The renewal date in your calendar.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An active athlete registration under your current club, with the number saved and the renewal date in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the club secretary how athlete registration is done"
                - "Complete the registration form and pay the fee"
                - "Save your registration number where you keep meeting entry details"
                - "Renew your athlete registration before it lapses @recurring(yearly)"
            - name: Choosing spikes or throwing shoes for your event
              description: |-
                ## Purpose
                Spikes are event specific: sprint spikes have a stiff forefoot plate, jump spikes add heel support or heel pins, and throwers need a flat-soled shoe that turns in the circle. Buying the right type for your main event, tried on with the socks you race in, avoids the common first purchase of a soft distance spike that bends under a sprint start.

                ## Milestones
                1. The shoe type for your main event confirmed with your coach.
                2. The pin length limit at your home track and usual venues checked.
                3. Two or three models tried on, with a snug fit and no heel lift.
                4. A pair bought, with spare pins and a spike key in your kit bag.

                ## Notes
                Start from the **Purchase decision** template. Many synthetic tracks limit pins to 6 or 7 mm, so check before buying longer ones.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pair of event-appropriate spikes or throwing shoes owned, with pins that meet your home track's length limit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your coach which spike type suits your main event"
                - "Check the pin length limit at your home track"
                - "Try on three pairs with the socks you race in"
                - "Buy the chosen pair plus spare pins and a spike key"
            - name: Baseline speed and power tests
              description: |-
                ## Purpose
                Before any block of training, three simple tests give you a reference point: a 30 m from blocks for acceleration, a flying 30 m for top speed and a standing long jump for leg power. Done on the same track and timed the same way each time, they show whether the winter worked long before the first race.

                ## Milestones
                1. A test session booked with the timing method agreed, using electronic gates if the club has them.
                2. The better of two attempts recorded for each test, with wind and surface noted.
                3. Results entered in your session marks log.
                4. A retest date set for the end of the training block.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Recorded results for a 30 m block start, a flying 30 m and a standing long jump, with timing method noted and a retest date set."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a test session with your coach and ask about timing gates"
                - "Run two 30 m block starts and two flying 30 m runs, fully recovered"
                - "Measure two standing long jumps and keep the better one"
                - "Repeat the three tests at the end of each training block @recurring(quarterly)"
            - name: Results and personal bests record
              description: |-
                ## Purpose
                Rankings sites and meeting results pages hold every mark you have set, but scattered across years and sometimes under a misspelt name. One record of personal bests, season bests and every competition result, with wind readings and whether timing was hand or electronic, is what coaches, team managers and scholarship programmes ask for.

                ## Milestones
                1. All past results found on the federation rankings and meeting results pages.
                2. A record with event, date, meeting, mark, wind and timing method for each result.
                3. Personal bests and season bests marked.
                4. Any missing or misspelt results reported to the rankings administrator.

                ## Notes
                Start from the **Metrics log** template. A sprint or horizontal jump with a tailwind over 2.0 metres per second is wind assisted and does not count as a legal best.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A results record listing every competition mark with wind and timing method, with personal and season bests marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search the rankings site for every result under your name"
                - "Create a results record from the metrics log template"
                - "Mark wind-assisted and hand-timed results separately"
                - "Copy new results from the rankings site into the record @recurring(monthly:28)"
            - name: Season target marks agreed with your coach
              description: |-
                ## Purpose
                Wanting to get faster gives a coach nothing to plan with. Agreeing two or three marks for the season, such as a time, a championship qualifying standard and one technical goal, sets the length of the winter block and decides which meetings matter.

                ## Milestones
                1. Last season's bests and this season's qualifying standards gathered on one page.
                2. Two or three target marks agreed, one realistic and one stretch.
                3. One technical goal named for the season.
                4. The targets written at the top of your training plan.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two or three target marks and one technical goal for the season, agreed with your coach and written in your training plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the qualifying standards for championships you could enter"
                - "Book a goal-setting conversation with your coach"
                - "Write two target marks and one technical goal"
                - "Set next season's targets after the final meeting of the summer @recurring(yearly)"
            - name: Track access and session times for the year
              description: |-
                ## Purpose
                Sprints and jumps need a track, throws need a cage or sector that is open, and both disappear when the floodlights fail or the track closes for resurfacing. Knowing exactly where and when you can train in each season, including an indoor option for the coldest months, stops sessions being lost to a locked gate.

                ## Milestones
                1. Opening times for your home track recorded for summer and winter.
                2. Throws cage or jumps pit availability confirmed for your event.
                3. An indoor track or sports hall found for winter speed work.
                4. Costs of track entry or a season pass noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page list of where and when you can train in summer and winter, including field event facilities and costs."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the track manager for summer and winter opening hours"
                - "Check when the throws cage or jumps pit is available"
                - "Find the nearest indoor track or sports hall for winter speed work"
                - "Confirm next term's track session times with the club @recurring(quarterly)"
            - name: Sprint drills warm-up sequence learned by heart
              description: |-
                ## Purpose
                Coaches use a fixed warm-up of jogging, mobility and sprint drills such as A skips, B skips and straight-leg bounds to prepare the body and rehearse good positions. Learning the sequence by heart means every session starts the same way, and the drills are done well rather than copied from the athlete in front.

                ## Milestones
                1. The club's warm-up sequence written down in order with reps.
                2. Each drill checked by the coach for posture and foot contact.
                3. The full sequence completed from memory in under 25 minutes.
                4. A shorter competition version agreed for meeting days.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The full warm-up sequence done from memory in under 25 minutes, with a shorter competition version agreed with your coach."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the coach to write the warm-up sequence down with reps"
                - "Film yourself doing A skips and B skips for the coach to check"
                - "Run the full sequence from memory before two sessions"
                - "Agree a shorter version that fits a competition call room schedule"
            - name: Throws area safety routine
              description: |-
                ## Purpose
                Throwing implements cause serious injuries at training venues, almost always through simple lapses: someone walking across a sector, or collecting while others are still throwing. A personal routine of calling throws, retrieving only on command and checking the cage before discus or hammer protects you and everyone training nearby.

                ## Milestones
                1. Your club's throws safety rules read, and signed if the club requires it.
                2. A call and retrieve routine agreed with your training group.
                3. Cage nets and gates checked before each discus or hammer session.
                4. Every new member of the group briefed on the routine.

                ## Notes
                Sprinters and jumpers training on the infield need to know the routine too. Ask for it to be part of every new member's welcome.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written call and retrieve routine agreed by your throws group, with cage checks done before every discus or hammer session."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the throws coach for the club's written safety rules"
                - "Agree a call and retrieve routine with your group"
                - "Inspect the cage net and gates for holes before throwing"
                - "Brief any new thrower in the group on the routine"
            - name: Weekly training week structure
              description: |-
                ## Purpose
                Speed work only produces speed when you are fresh, so the order of the week matters more than its volume. A repeating week that puts speed and technique after rest or easy days, pairs gym work with those hard days and keeps the days between genuinely easy is the backbone a sprinter or jumper builds everything else on.

                ## Milestones
                1. A standard week written down with each day's session type.
                2. Speed and technique sessions placed after a rest or easy day.
                3. Gym sessions paired with hard track days rather than easy ones.
                4. A competition-week version agreed with your coach.

                ## Notes
                A common pattern alternates high-intensity days with easy ones so the nervous system recovers between speed sessions. Your coach may set it differently for your event.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written standard week and a competition-week version, with next week's sessions planned every Sunday for a full season."
                cadence: rolling
              tasks:
                - "Write out a standard training week with your coach"
                - "Mark which days are high intensity and which are easy"
                - "Move any gym session that falls on an easy day"
                - "Plan next week's sessions around fixtures and school or work @recurring(weekly:sun)"
            - name: Session marks log with wind and timing method
              description: |-
                ## Purpose
                Timed reps and measured jumps are only comparable when you know how they were measured. Logging every rep and mark with the timing method (hand, gates or video), the wind and the surface lets you see real progress instead of guessing why Tuesday felt fast.

                ## Milestones
                1. A log with columns for date, session, rep, mark, timing method, wind and notes.
                2. Every track session for four weeks entered within a day.
                3. The best rep from each session highlighted.
                4. A four-week summary shared with your coach.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks of track sessions logged with timing method and wind, summarised and sent to your coach."
                cadence: rolling
              tasks:
                - "Add timing method and wind columns to your training log"
                - "Ask whoever times reps to call the times out so you can note them"
                - "Enter timed reps and measured marks after each track session @recurring(weekly:tue,thu)"
                - "Send a four-week summary to your coach"
            - name: Monthly progress conversation with your coach
              description: |-
                ## Purpose
                Coaches with twenty athletes in a group rarely raise small things unprompted, and small things such as a tight hamstring or a stalled start are what end seasons. A short monthly conversation, with your log, a question list and one thing you want to work on, keeps the plan fitted to you.

                ## Milestones
                1. A standing monthly slot agreed with your coach.
                2. A one-page summary of the month's marks and niggles brought to each conversation.
                3. One agreed focus for the next month recorded.
                4. Any changes written into your training week.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly check-in held with your coach for six months running, each with one recorded focus for the following month."
                cadence: rolling
              tasks:
                - "Ask your coach for a regular ten-minute slot each month"
                - "Write three questions and your best marks before each conversation"
                - "Hold the monthly check-in and note the agreed focus @recurring(monthly:12)"
                - "Update your training week with anything that changed"
            - name: Gym power sessions for speed
              description: |-
                ## Purpose
                Sprinters, jumpers and throwers need force produced quickly, which is a different aim from building muscle for its own sake. Two gym sessions a week built around a squat or deadlift variation, a power movement such as jump squats or power cleans, and single-leg work turn strength into speed on the track.

                ## Milestones
                1. A two-session gym programme agreed with your coach.
                2. Technique on each main lift checked by a qualified coach.
                3. Starting loads recorded and progressed for eight weeks.
                4. Gym sessions scheduled on high-intensity track days.

                ## Notes
                Bar speed matters more than load for this work. If a power movement slows down badly, the set has stopped training power.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of two gym power sessions a week completed, with loads logged and main lift technique checked by a coach."
                cadence: rolling
              tasks:
                - "Agree a two-session gym programme with your coach"
                - "Book a technique check on your main lifts"
                - "Complete the two gym power sessions this week @recurring(weekly:mon,thu)"
                - "Record loads and bar speed notes after each gym session"
            - name: Plyometric ground contacts budget
              description: |-
                ## Purpose
                Bounding, hopping and depth jumps build reactive strength but load tendons hard, and many sore Achilles and knees in jumpers follow a sudden rise in contacts. Counting ground contacts per session and per week, and raising them slowly, keeps plyometrics productive through a whole season.

                ## Milestones
                1. A weekly contact budget agreed with your coach for this phase.
                2. Contacts in every plyometric session counted and logged.
                3. Weekly totals rising by no more than the agreed amount.
                4. Contacts cut back in every competition week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly ground contact totals logged for a full training phase, with no week exceeding the budget agreed with your coach."
                cadence: rolling
              tasks:
                - "Ask your coach for a weekly ground contact target"
                - "Count the contacts in each drill as you do it"
                - "Total the week's ground contacts in your log @recurring(weekly:sat)"
                - "Halve the contacts in any week with a competition"
            - name: Spike, pin and competition bag care
              description: |-
                ## Purpose
                Worn pins slip on a start, seized pins cannot be changed on meeting day, and a bag missing safety pins for your number or a spike key costs an event. A short monthly check of spikes, pins and the competition bag stops kit from deciding a race.

                ## Milestones
                1. Every spike pin removed, cleaned, greased and refitted.
                2. A competition bag packed against a written checklist.
                3. The age and wear of your spikes recorded, with a replacement date.
                4. Spare pins of each permitted length kept in the bag.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written competition bag checklist and spike pins checked monthly, with no seized or worn pins on any meeting day for a season."
                cadence: rolling
              tasks:
                - "Write a competition bag checklist"
                - "Remove, clean and grease every spike pin"
                - "Check pins and spike plates for wear and replace worn pins @recurring(monthly:3)"
                - "Note when your spikes were bought and when to replace them"
            - name: Phone video review of technique
              description: |-
                ## Purpose
                What a stride or take-off feels like and what it looks like are often different things. Filming one technical element a month from the same angle, in slow motion, and comparing it with last month's clip gives you and your coach a shared picture of change.

                ## Milestones
                1. A filming angle and distance agreed for your event.
                2. One element filmed each month, side on and in slow motion.
                3. Clips saved in a dated folder.
                4. One correction agreed after each review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly technique clips filmed from the same angle and saved by date, each with one correction agreed with your coach."
                cadence: rolling
              tasks:
                - "Agree the camera position for your event with your coach"
                - "Create a dated folder for technique clips"
                - "Film and review one technical element in slow motion @recurring(monthly:18)"
                - "Send the clip and one question to your coach"
            - name: Outdoor track season fixture plan
              description: |-
                ## Purpose
                A track season packs open meetings, league matches and club, county and regional championships into about four months, and entries for the big ones close weeks earlier. Laying out every fixture you could do and choosing the few you peak for stops you racing tired at the meeting that counts.

                ## Milestones
                1. Every fixture you could enter listed with its date and entry deadline.
                2. Two or three priority meetings chosen with your coach.
                3. No more than one hard competition planned in most weeks.
                4. Entry deadlines in your calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A season fixture list with entry deadlines and two or three priority meetings marked, reviewed each month of the season."
                cadence: cyclic
              tasks:
                - "List the open meetings, league matches and championships near you"
                - "Mark the two or three meetings that matter most"
                - "Add every entry deadline to your calendar"
                - "Review the entries closing in the next month @recurring(monthly:24)"
            - name: League match availability and second events
              description: |-
                ## Purpose
                Club league matches score points across every event, and a team manager filling a fixture needs to know early which events you can cover. Replying to availability requests on time and offering a second event, even a relay leg or the shot, is how team places and relay spots are earned.

                ## Milestones
                1. The season's league fixtures in your calendar.
                2. Your main and second events given to the team manager.
                3. Availability replied to within two days of each request.
                4. At least one league match where you scored in two events.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every league availability request answered within two days for a season, with points scored in two events at one match or more."
                cadence: rolling
              tasks:
                - "Ask the team manager for the season's league dates"
                - "Tell the team manager your main and second events"
                - "Answer the latest league availability request @recurring(monthly:8)"
                - "Offer to cover a relay leg or a field event when the team is short"
            - name: Winter general preparation block
              description: |-
                ## Purpose
                The base for summer speed is laid in the cold months: general strength, hill or sled work, extensive tempo runs and technique at lower intensity. Planning the winter as a defined block with its own aims stops it becoming months of hard sessions with nothing to show in spring.

                ## Milestones
                1. Start and end dates for the winter block agreed.
                2. Three measurable aims written, such as a squat target and a weekly tempo volume.
                3. Sessions planned for the first four weeks.
                4. End-of-block speed tests booked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated winter block with three measurable aims and end-of-block tests booked, repeated each year after the outdoor season."
                cadence: cyclic
              tasks:
                - "Agree the winter block's start and end dates with your coach"
                - "Write three measurable aims for the block"
                - "Plan the first four weeks of winter sessions"
                - "Start the winter block plan when the outdoor season ends @recurring(yearly)"
            - name: Sprint training on three sessions a week
              description: |-
                ## Purpose
                Adults with jobs and families rarely manage the five or six sessions a week that full-time athletes do, but sprinters can make steady progress on three if each one has a clear purpose. Choosing which three matter and protecting them in the diary beats squeezing in six rushed ones.

                ## Milestones
                1. Three fixed weekly session slots agreed with your household and work.
                2. Each slot given one purpose: speed, strength or event technique.
                3. Four weeks completed with all three sessions done.
                4. A short home strength routine ready for weeks when a session is lost.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three purposeful sessions a week completed for four consecutive weeks, with a home strength routine written for missed sessions."
                cadence: rolling
              tasks:
                - "Pick three weekly slots that work or family rarely interrupts"
                - "Give each slot one purpose with your coach"
                - "Write a 20-minute home strength routine for lost sessions"
                - "Check after four weeks whether all three sessions happened"
            - name: Block start technique
              description: |-
                ## Purpose
                Races at 60 m and 100 m are often decided in the first ten metres, and a poor block setting wastes the rest of the work. Learning to measure your block positions, hold a stable set position and drive out with low, pushing first steps is a skill that improves quickly with focused practice.

                ## Milestones
                1. Front and rear block distances measured in foot lengths and written down.
                2. A set position with hips just above the shoulders checked on video.
                3. Ten starts to commands done in each of six sessions.
                4. Your 10 m split from blocks timed before and after the six sessions.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written block settings and a faster 10 m split from blocks after six sessions of start practice."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your coach to set your blocks and measure the positions"
                - "Write your block settings in a notebook kept in your kit bag"
                - "Practise ten starts to commands in each of six sessions"
                - "Time a 10 m split from blocks before and after the six sessions"
            - name: Acceleration over the first 30 metres
              description: |-
                ## Purpose
                Good acceleration means a gradual rise from a forward lean over many steps rather than popping upright after three. Drills such as wall drives, sled pushes and resisted starts teach the pushing action that separates trained sprinters from naturally fast runners.

                ## Milestones
                1. Wall drill and sled push positions checked by the coach.
                2. Two acceleration sessions a week completed for six weeks.
                3. Video showing a gradual rise over the first 20 m.
                4. A 30 m time faster than your baseline test.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six weeks of acceleration work completed and a 30 m block time faster than your baseline under the same timing method."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Learn wall drives with your coach watching"
                - "Add sled or resisted starts to two sessions a week"
                - "Film a 30 m acceleration side on"
                - "Compare your 30 m time with the baseline test"
            - name: Maximum velocity mechanics and relaxation
              description: |-
                ## Purpose
                Top speed comes from stiff ground contacts under the hips and a relaxed upper body, and trying harder usually makes it slower. Flying sprints with a long build-up, wickets set at your stride length and one cue for a loose face and shoulders teach the front-side mechanics of fast running.

                ## Milestones
                1. Wicket spacing set from your stride length.
                2. Flying 20 m reps done in one session a week for six weeks.
                3. Video showing foot contacts close under the hips.
                4. A flying 30 m faster than your baseline test.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six weeks of weekly flying sprint sessions completed and a flying 30 m faster than your baseline."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your coach to set wickets at your stride length"
                - "Run flying 20 m reps with a long build-up once a week"
                - "Use one relaxation cue, such as loose hands, on every rep"
                - "Retime your flying 30 m after six weeks"
            - name: Three-stride rhythm for sprint hurdles
              description: |-
                ## Purpose
                Sprint hurdlers take three strides between barriers, and losing that rhythm by stuttering or reaching is what holds most developing hurdlers back. Working from lowered hurdles and shortened spacings up to race settings builds a rhythm that holds when you are tired over the last two barriers.

                ## Milestones
                1. Three-stride rhythm held over five hurdles at reduced height and spacing.
                2. Lead leg and trail leg drills checked by the coach.
                3. Height and spacing moved up to race settings.
                4. A clean rhythm over all ten hurdles in a time trial.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A timed run over ten hurdles at race height and spacing with three strides between every barrier."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your coach to set five hurdles at a reduced height and spacing"
                - "Practise lead leg and trail leg drills at walking pace"
                - "Run three-stride rhythm over five hurdles, adding spacing as it holds"
                - "Do the hurdle walkover mobility circuit @recurring(weekly:tue,sat)"
            - name: Sprint relay baton changeovers
              description: |-
                ## Purpose
                Relay teams of slower runners regularly beat faster ones with bad changes, because the baton has to travel the zone at full speed. Agreeing an upsweep or downsweep pass, measuring check marks and rehearsing at race speed are what turn four sprinters into a relay squad.

                ## Milestones
                1. Pass type and running order agreed for the squad.
                2. Check marks measured for each changeover in shoe lengths.
                3. Changeovers rehearsed at full speed in at least four sessions.
                4. A full relay run in competition with every exchange inside the zone.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Check marks recorded for each leg and a competition relay completed with all three exchanges inside the zone."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree the pass type and running order with the relay squad"
                - "Measure each outgoing runner's check mark in shoe lengths"
                - "Rehearse changeovers at full speed in the relay session"
                - "Adjust check marks after watching race video"
            - name: Jumps approach run and check marks
              description: |-
                ## Purpose
                Fouls and take-offs well behind the board cost most developing long and triple jumpers more distance than their technique does. A measured approach with a fixed stride count and a coach-marked check point lets you hit the board consistently, so every jump counts.

                ## Milestones
                1. Approach length and stride count set, with the start mark measured from the board.
                2. A check mark early in the run agreed with the coach.
                3. Eight of ten run-throughs landing within a foot length of the board.
                4. A full competition with no fouls from overstepping.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written approach distance and check mark, with eight of ten run-throughs within a foot length of the board."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Measure your approach start mark from the board with a tape"
                - "Do ten run-throughs without jumping and note where you land"
                - "Adjust the start mark until eight of ten hit the board"
                - "Write the final approach distance on a card for meeting days"
            - name: High jump curved approach and take-off
              description: |-
                ## Purpose
                High jumpers who run straight at the bar lose height they could have had. A J-shaped approach, with a lean away from the bar on the curve, creates the rotation that carries you over, and marking the curve and practising it from short approaches builds a take-off you can repeat at height.

                ## Milestones
                1. Straight and curved sections of the approach measured and marked.
                2. Short-approach jumps done with a consistent take-off spot.
                3. Full-approach jumps clearing a set height in practice.
                4. Approach measurements written down for competitions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written approach measurements and a practice clearance at a set height from the full approach."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Measure your approach from the upright with your coach"
                - "Mark the start of the curve with tape or chalk"
                - "Jump from a five-stride approach until the take-off spot is consistent"
                - "Record your full approach measurements for meeting days"
            - name: Shot put glide or rotational technique
              description: |-
                ## Purpose
                Shot putters choose between the glide and the rotational technique, and switching later can cost a season, so the choice deserves care. Learning standing throws first, then trying both full movements under coaching with a measured mark at each stage, shows whether the extra speed of rotation is worth its control problems for you.

                ## Milestones
                1. Standing throw technique checked and a mark recorded with the correct implement.
                2. Both glide and rotation tried in coached sessions.
                3. A technique chosen with the coach and the reason noted.
                4. A full-technique mark that clearly exceeds your standing throw.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A chosen shot put technique recorded with its reason, and a full-technique mark logged above your standing throw."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Record your best standing throw with the correct implement"
                - "Try both the glide and rotation in coached sessions"
                - "Agree which technique you will commit to this season"
                - "Measure full throws each week and compare with the standing mark"
            - name: Pacing the 400 m
              description: |-
                ## Purpose
                The 400 m punishes a fast first half harder than any other sprint, and most newer athletes run the first 200 m far quicker than they can hold. Working out a target difference between the two halves with your coach, and rehearsing it in training, gives a race plan that leaves something for the home straight.

                ## Milestones
                1. Split times from past races collected or timed from video.
                2. Target splits for each half agreed with your coach.
                3. Race-pace 300 m reps run to target splits.
                4. A race run within half a second of the planned first-half split.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written 400 m split plan and one race run within half a second of the planned first 200 m."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask someone to film your next 400 m so splits can be timed"
                - "Agree target splits for each half with your coach"
                - "Run 300 m reps at race pace with the splits called out"
                - "Compare race splits with the plan after each 400 m"
            - name: Competition rules for your events
              description: |-
                ## Purpose
                Athletes lose results to rules they never read: a single false start, stepping on the lane line on the bend, leaving the circle from the front, or three failures at one height. Reading the rules for your own events, and how the call room works, means no mark is lost to a technicality.

                ## Milestones
                1. The current competition rules for your events read.
                2. A one-page summary of the rules most often broken in your events.
                3. Call room and check-in procedures understood for a typical meeting.
                4. The summary updated when rules change.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page rules summary for your events, checked against the current rulebook and updated each year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the current competition rules from your federation"
                - "Write a one-page summary of the rules for your events"
                - "Ask an official at your next meeting how the call room works"
                - "Read the rule changes published each year @recurring(yearly)"
            - name: Choosing between the 200 m and 400 m
              description: |-
                ## Purpose
                Many sprinters sit between the 200 m and the 400 m, and spending a season on the wrong one wastes the winter's event-specific work. Comparing both marks on a points table, and noting how you recover from speed endurance sessions, gives your coach evidence for the decision.

                ## Milestones
                1. Recent 200 m and 400 m marks, or a 300 m time trial, gathered.
                2. Both events scored on the same points table.
                3. Your recovery from speed endurance sessions noted over four weeks.
                4. A main event for the season agreed and written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A main sprint event for the season agreed with your coach, based on points-table scores and four weeks of session notes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run a 300 m time trial if you have no recent 400 m"
                - "Score both events on the same points table"
                - "Note how you recover from speed endurance sessions for four weeks"
                - "Agree the main event for this season with your coach"
            - name: Rest interval audit for speed sessions
              description: |-
                ## Purpose
                Speed sessions run with short recoveries quietly turn into conditioning, and the reps get slower without anyone noticing. Timing your actual recoveries for a month and comparing rep times against fully recovered reps shows whether your sessions are training speed at all.

                ## Milestones
                1. Actual recoveries timed in every speed session for four weeks.
                2. Rep times compared between short and full recoveries.
                3. A minimum recovery per rep agreed with your coach.
                4. Speed sessions rewritten with the new recoveries.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four weeks of timed recoveries compared with rep times, and an agreed minimum recovery written into every speed session."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Start a timer between reps in your next speed session"
                - "Write rep times and recoveries side by side"
                - "Show your coach where rep times dropped with short recoveries"
                - "Rewrite your speed sessions with the agreed minimum recovery"
            - name: Trying heptathlon or decathlon
              description: |-
                ## Purpose
                Athletes who are decent at several events but outstanding at none often score well in combined events, and the training makes them better single-event athletes too. Estimating your marks, working out a total and entering a short combined events competition shows whether it is worth a full season.

                ## Milestones
                1. Current marks in each heptathlon or decathlon event tested or estimated.
                2. A total score worked out on the official scoring tables.
                3. One pentathlon or short combined events meeting completed.
                4. A decision recorded on whether to train for combined events next season.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A combined events total calculated, one short combined events competition completed and a recorded decision for next season."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List your marks in each combined event, estimating the unknowns"
                - "Work out your total on the combined events scoring tables"
                - "Enter a pentathlon or indoor combined events meeting"
                - "Decide with your coach whether to switch for next season"
            - name: Changing training group or coach
              description: |-
                ## Purpose
                Plateaus of two seasons or more, a coach who no longer has time for your event, or a move for college are all fair reasons to change group, but doing it badly loses goodwill and training history. Handling the change openly, with your log and targets passed on, keeps the next coach from starting at zero.

                ## Milestones
                1. The reason for changing written down in one sentence.
                2. Two possible coaches met and their approaches compared.
                3. Your current coach told in person before you start elsewhere.
                4. Your log, marks and targets shared with the new coach.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A new coach chosen after watching two sessions, with your current coach told in person and your log handed over."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down in one sentence why you want to change"
                - "Watch a session with each coach you are considering"
                - "Tell your current coach in person before joining another group"
                - "Send your training log and targets to the new coach"
            - name: Deciding on a spring warm-weather training camp
              description: |-
                ## Purpose
                Clubs and training groups often run a week of warm-weather training before the outdoor season, which can mean the first fast sessions of the year or an expensive week of overtraining. Comparing cost, coaching, track access and timing against your season plan decides whether it is worth going and how hard to train while you are there.

                ## Milestones
                1. Camp options listed with full costs, including travel and time off.
                2. Track access and coaching on the camp confirmed.
                3. Camp dates checked against your first priority meeting.
                4. A decision made and, if going, a camp plan agreed with your coach.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded go or no-go decision on a training camp, with full cost and a camp training plan if going."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the club whether a warm-weather camp is planned this spring"
                - "Total the full cost including travel and time off"
                - "Check the camp dates against your first priority meeting"
                - "Agree with your coach how hard to train on the camp"
            - name: Your first open athletics meeting
              description: |-
                ## Purpose
                Open meetings take entries from any registered athlete and are the gentlest way into competition, with races seeded by previous times. Entering one with a simple plan for warm-up, check-in and what you want from the race turns the first competition into practice for every later one.

                ## Milestones
                1. An open meeting entered for your main event.
                2. A timeline written from arrival to race, with warm-up and check-in times.
                3. The race or field event completed and the mark recorded.
                4. Three things to do differently written down within a day.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One open meeting completed in your main event, with the mark recorded and three lessons written within a day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find an open meeting within travelling distance in the next two months"
                - "Enter your main event and note the check-in time"
                - "Write a timeline from arrival to race"
                - "Note three lessons from the day in your log"
            - name: Club championships
              description: |-
                ## Purpose
                Club championships are usually the first meeting where titles and club records are at stake, and coaches watch them when picking league and relay teams. Treating it as a priority meeting, with a lighter week before and entries in two events, makes it a real test of the winter's work.

                ## Milestones
                1. Entries made for your main and second event.
                2. The week before eased off as agreed with your coach.
                3. Both events completed with marks recorded.
                4. Results compared with the club records and your season targets.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two events contested at the club championships, with marks logged and compared with your season targets."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the club championships date and entry deadline"
                - "Enter your main and second event"
                - "Agree a lighter training week before the championships"
                - "Compare your marks with the club records list"
            - name: Schools athletics championships
              description: |-
                ## Purpose
                For school athletes, district and county schools championships are the route to regional and national schools events, and selection often depends on a teacher entering you in time. Knowing the qualification route and deadlines, and telling the PE department your marks, stops you missing out because nobody knew you competed.

                ## Milestones
                1. The schools championship route and dates confirmed with your PE teacher.
                2. Your best marks given to the teacher in charge of entries.
                3. Selection for your event confirmed.
                4. The championship contested and the result recorded.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Selection confirmed for a schools championship in your event, with the competition completed and the result recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your PE teacher how schools championship selection works"
                - "Give the teacher your best marks with dates and meetings"
                - "Put each round's date in your calendar beside your club fixtures"
                - "Pack your school vest and spikes the night before the championships"
            - name: Indoor season over 60 m
              description: |-
                ## Purpose
                Indoor meetings in midwinter let sprinters, hurdlers and jumpers test the winter's work without waiting for summer, over 60 m, 60 m hurdles and the horizontal jumps. A short indoor season, entered with a clear aim and not raced every weekend, gives your start and early acceleration a real test.

                ## Milestones
                1. Two or three indoor meetings chosen and entered.
                2. Starts practised on an indoor track before the first race.
                3. Race marks recorded with any lessons for the summer.
                4. A short recovery week taken before outdoor preparation resumes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two or three indoor races completed with marks logged and lessons for the outdoor season written down."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List indoor meetings within reach this winter"
                - "Enter two or three meetings and no more"
                - "Book a start session on an indoor track before the first race"
                - "Write what the indoor races showed about your start"
            - name: Racing rounds at a championship
              description: |-
                ## Purpose
                Championships run heats, semi-finals and finals, sometimes on the same day, and athletes who race every round flat out often have nothing left for the final. Planning food, rest and warm-ups between rounds, and knowing how qualification by place and fastest losers works, is a skill that wins medals.

                ## Milestones
                1. The timetable for every round studied and the recovery gaps noted.
                2. A plan for food, warm-up and rest between rounds.
                3. Qualification rules by place and by time understood.
                4. Each round completed, with a note on how much effort it took.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written between-rounds plan used at a championship, with an effort note recorded for every round you ran."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the championship timetable as soon as it is published"
                - "Plan food and rest for the gap between each round"
                - "Check how many qualify by place and by time from each heat"
                - "Rate your effort in each round in your log afterwards"
            - name: Training through exam season
              description: |-
                ## Purpose
                Summer exams land in the middle of the outdoor season, and students who keep their full training load through revision often lose on both fronts. Agreeing a lighter, shorter plan for the exam weeks with your coach, and protecting two key sessions, keeps fitness without costing grades.

                ## Milestones
                1. Exam dates set against the fixture list.
                2. A reduced training plan for exam weeks agreed with your coach.
                3. Two key sessions a week protected in the revision timetable.
                4. Competitions in exam weeks entered or dropped on purpose.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written exam-season training plan agreed with your coach, with two sessions a week kept through every exam week."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Put every exam date into the same calendar as your fixtures"
                - "Agree a shorter exam-season plan with your coach"
                - "Block two key sessions a week in your revision timetable"
                - "Map exam dates against the fixture list at the start of each term @recurring(quarterly)"
            - name: First season with a university athletics club
              description: |-
                ## Purpose
                Starting university usually means a new city, a new coach and a student club that trains at different times from your home club. Settling whether you stay with your home coach remotely, train with the university group, or both, before the first term ends prevents a lost winter.

                ## Milestones
                1. University club session times and coaching for your event found.
                2. A plan agreed with your home coach for term time and holidays.
                3. Rules on competing for two clubs checked with both.
                4. University competition dates added to your season plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written term-time and holiday training arrangement agreed with both coaches before the end of your first term."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Contact the university athletics club before term starts"
                - "Ask your home coach whether they will coach you remotely"
                - "Check the rules on competing for both clubs"
                - "Add university championship dates to your season plan"
            - name: Athletics scholarship and bursary applications
              description: |-
                ## Purpose
                Universities and colleges in several countries offer sports scholarships or bursaries, and track athletes are judged on verified marks, progression and a coach reference. Building one profile with ranked marks, race video and references, and applying before the deadlines, turns your results into support for your studies.

                ## Milestones
                1. Programmes that support athletes in your event listed with their deadlines.
                2. A profile with personal bests, rankings links and race video assembled.
                3. A coach reference requested and received.
                4. Applications submitted before each deadline.

                ## Notes
                Admissions staff check marks against official rankings, so only list legal, verifiable bests.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Scholarship or bursary applications submitted to every listed programme before its deadline, each with a coach reference."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List programmes that support athletes in your event"
                - "Assemble your marks, rankings links and best race video"
                - "Ask your coach for a reference with two weeks' notice"
                - "Ask the agent to draft your personal statement from your results record"
            - name: Moving up to senior hurdle heights and implements
              description: |-
                ## Purpose
                Each age group step brings higher hurdles, different spacings and heavier shots, discuses and javelins, and athletes who switch on the first day of the season struggle. Starting the change in winter, at stepped heights and weights, gives technique time to adapt before marks count.

                ## Milestones
                1. Next season's specifications confirmed for each of your events.
                2. The new hurdle settings or implements in training use by midwinter.
                3. Technique checked on video at the new settings.
                4. A first competition at the new specification completed.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Weekly training at next season's hurdle heights or implement weights from midwinter, with a first competition completed at the new specification."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Look up next season's hurdle heights and implement weights for your age group"
                - "Ask the club whether it has the implements you will need"
                - "Train at the new settings at least once a week through winter"
                - "Film your technique at the new settings for the coach"
            - name: Returning to sprinting after years away
              description: |-
                ## Purpose
                Former school or club sprinters coming back in their late twenties or thirties often try to run their old session times in week one and pull a muscle by week three. A twelve-week return that rebuilds tempo running, drills and gym strength before full-speed sprinting gets you racing again in one piece.

                ## Milestones
                1. A check with your doctor done if you have a health condition or have been inactive for years.
                2. Twelve weeks planned, with full-speed sprints introduced no earlier than week six.
                3. Gym strength back to an agreed level before maximum efforts.
                4. A first race entered for the end of week twelve.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Twelve planned weeks of return training completed, ending with a race entry, with no maximum sprints before week six."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write down your old best marks beside what you can do now"
                - "Plan twelve weeks with a coach before any full-speed sprinting"
                - "Hold off maximum efforts until the gym targets are met"
                - "Enter a low-key meeting for the end of week twelve"
            - name: Annual periodised plan for a sprints season
              description: |-
                ## Purpose
                Experienced sprinters and jumpers plan the year backwards from one or two peak dates, with general preparation, specific preparation, competition and transition phases each given a purpose. Writing the whole year down, even roughly, shows where speed, speed endurance and technique sit, and stops the season becoming a run of disconnected blocks.

                ## Milestones
                1. One or two peak dates chosen.
                2. The year divided into phases with dates and aims.
                3. The weekly structure outlined for each phase.
                4. The plan reviewed and adjusted at the end of each phase.

                ## Notes
                Start from the **Training program** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written annual plan with dated phases, aims and weekly structures, reviewed at the end of each phase."
                cadence: cyclic
              tasks:
                - "Choose one or two peak dates with your coach"
                - "Divide the year into phases with dates and aims"
                - "Outline the weekly structure for each phase"
                - "Review the plan with your coach at the end of every phase"
            - name: Peaking and taper for the main championship
              description: |-
                ## Purpose
                Sprint and jump performance tends to peak when volume drops sharply while intensity stays high, usually over the last ten to fourteen days before the target meeting. Planning the taper with your coach, and rehearsing it once before a lesser meeting, takes the guesswork out of the week that matters.

                ## Milestones
                1. Taper length and session plan agreed for the target meeting.
                2. The taper rehearsed before a lower-priority meeting.
                3. The rehearsal result reviewed and the taper adjusted.
                4. The final taper completed with every session logged.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A rehearsed and adjusted taper plan followed into the main championship, with every session in the final fortnight logged."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree the length of the taper with your coach"
                - "Rehearse the taper before a lower-priority meeting"
                - "Adjust the taper based on the rehearsal result and how you felt"
                - "Log every session in the final fortnight"
            - name: Anti-doping responsibilities for ranked athletes
              description: |-
                ## Purpose
                Under strict liability rules you are responsible for anything found in your sample, including from a cold remedy or a contaminated supplement. Ranked athletes at national level, and anyone placed in a testing pool, need a routine for checking medicines, choosing batch-tested supplements and, where required, filing whereabouts.

                ## Milestones
                1. Your national anti-doping organisation's medicine checker bookmarked.
                2. Every current medicine and supplement checked and the result recorded.
                3. Your doctor and pharmacist told that you are a tested athlete.
                4. Anti-doping education completed and, if you are in a testing pool, whereabouts filed.

                ## Notes
                Checking a medicine is not medical advice. If something you take is prohibited, ask your doctor about alternatives or a therapeutic use exemption rather than stopping it yourself.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every medicine and supplement you take checked and recorded, with anti-doping education completed this year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Bookmark your national anti-doping organisation's medicine checker"
                - "Check every medicine and supplement you take and record the result"
                - "Tell your doctor and pharmacist that you are a tested athlete"
                - "Complete the anti-doping education module @recurring(yearly)"
            - name: Making the national championships standard
              description: |-
                ## Purpose
                National championship entry usually needs a ranking position or a standard set within a window, with a legal wind and electronic timing. Treating qualification as a season-long project, with the gap to the standard measured and meetings with fast tracks and strong fields chosen to close it, is what athletes do in the year they move up a level.

                ## Milestones
                1. The standard, window and ranking rules for your event confirmed.
                2. The gap between your best legal mark and the standard measured.
                3. Three or more qualifying opportunities with electronic timing and wind gauges entered.
                4. Qualification confirmed, or the remaining gap recorded for next season.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A legal mark at or inside the national standard within the window, or the remaining gap recorded after three qualifying attempts."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check the qualifying window and standard for your event"
                - "Measure the gap between your best legal mark and the standard"
                - "Enter three meetings in the window with electronic timing"
                - "Check each result against the standard within a day"
---

# Track Sprinting & Athletics

This area is for sprinters, hurdlers, jumpers and throwers, from a student trying the event groups for the first time to a ranked club athlete chasing a championship standard. It starts with the foundations (a club and event coach, registration, the right spikes, baseline speed tests, season targets and throws safety), then the weekly machinery of training, logging, gym power work and fixtures, the technique skills for starts, hurdles, relays, jumps and throws, the decisions about events and coaching, the competitions from a first open meeting to championship rounds, the situations students and working adults face, and finally the specialist work of periodisation, peaking, anti-doping and national qualification.

What repeats is a weekly plan and session log, two gym sessions and a plyometric contact count each week, a monthly coach check-in, video review, spike check and fixture review, quarterly speed retests, and yearly registration, rule and anti-doping updates. The Purchase decision, Metrics log, Development plan and Training program templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
