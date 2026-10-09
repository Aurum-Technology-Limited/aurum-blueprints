---
id: fitness-sport.amateur-football-soccer
name: Amateur Football (Soccer)
description: "Finding a team at your level, boots for every surface, match fitness and skills, plus the captain's machinery of availability polls, subs, pitches, referees and match-day duties that keeps a Sunday side playing."
category: personal
version: 1.0.0
tags: [fitness-sport, amateur-football-soccer, athlete, team, sunday-league, captain, match-day, five-a-side]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - training-program
    - metrics-log
    - trip
    - meeting-notes
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Amateur Football (Soccer)
          description: "Playing amateur or Sunday league football with fitness, skills practice, team availability and match-day organisation for players and captains."
          projects:
            - name: Finding a team at your level
              description: |-
                ## Purpose
                Most areas have more Sunday, Saturday and midweek teams than it looks, from promotion-chasing first elevens to sides that just want a game and a laugh. Trying two or three before committing, and being honest about your fitness and how many weekends you can give, puts you in a squad where you get real minutes rather than a seat on the bench or a heavy defeat every week.

                ## Milestones
                1. A list of teams within 30 minutes of home, with league, division and training night for each.
                2. Training or a friendly attended with at least two of them.
                3. Each team noted for level, minutes on offer, subs cost and atmosphere.
                4. One team chosen and its captain or secretary told you are in for the season.

                ## Notes
                Ask how many players the squad carries. A squad of 22 chasing eleven shirts means a lot of bench, however good you are.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One team chosen after trying at least two, with the captain told and your first fixture in the calendar."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search your county or regional football association's club finder for teams near you"
                - "Message three captains asking about level, training night and subs"
                - "Go to a training session or friendly with two of the teams"
                - "Tell your chosen captain you are committing for the season"
            - name: Boots and studs for the surfaces you play on
              description: |-
                ## Purpose
                Grass in September, mud in January and a 3G pitch for training each need something different under your feet, and the wrong studs are a common cause of turned ankles and sore knees. Working out which surfaces you actually play on, then buying for those, saves money on boots that sit unused in the bag.

                ## Milestones
                1. The surfaces of your home pitch, training pitch and usual away grounds listed.
                2. A stud type matched to each: firm ground, soft ground, artificial grass or astro.
                3. Boots that fit, chosen on comfort, stud type and price, bought or kept from last season.
                4. Shin pads that meet your league's rules and fit under your socks in the kit bag.

                ## Notes
                Start from the **Purchase decision** template. Many 3G pitches ban metal studs and some ban bladed soles, so check before you buy.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Boots matched to each surface you play on and league-compliant shin pads are in your kit bag."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the surface at your home, training and usual away pitches"
                - "Check whether your 3G pitch allows metal studs or bladed soles"
                - "Try boots on in the afternoon wearing your match socks"
                - "Check studs, soleplates and uppers for wear @recurring(monthly:16)"
            - name: Pre-season football fitness baseline
              description: |-
                ## Purpose
                Amateur players tend to judge their fitness by how the first half felt, which tells you little until you are already blowing hard in October. Three simple tests in the first week of pre-season, a 30 metre sprint, a beep or yo-yo test and a 2.4 km run, give you numbers to train against and to compare at Christmas.

                ## Milestones
                1. A safe flat space and a partner or app for timing found.
                2. Sprint, intermittent running and steady run results recorded on one day.
                3. Results written into a log with date, surface and weather.
                4. A retest booked for the middle of the season.

                ## Notes
                If you have a heart condition, get chest symptoms on exertion or have been inactive for a long time, speak to your doctor before any all-out test.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three baseline test results recorded with date and conditions, and a mid-season retest in the calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download a beep or yo-yo test audio track"
                - "Measure out a 30 metre straight and a 2.4 km route"
                - "Run the three tests on one day after a proper warm-up"
                - "Repeat the three tests and compare them with the baseline @recurring(quarterly)"
            - name: Player registration, insurance and eligibility
              description: |-
                ## Purpose
                Leagues fine teams and often deduct points for fielding an unregistered player, and cup competitions usually have their own registration cut-off. Getting your registration done, knowing what the club's insurance actually covers and keeping photo ID ready means you are never the reason the team loses three points.

                ## Milestones
                1. Your registration submitted through the system your league or association uses.
                2. Registration confirmed, with the league and cup cut-off dates noted.
                3. The club's insurance checked for what it covers, including lost earnings if you are injured.
                4. A decision made on extra personal injury cover if the club's policy falls short.

                ## Notes
                If you are self-employed, a few weeks out injured can cost far more than a season's subs. Ask what the policy pays and for how long.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your registration is confirmed for this season and the insurance cover is written down with its limits."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the team secretary which registration system the league uses"
                - "Complete your player registration with a photo and ID"
                - "Ask for a copy of the club's insurance summary"
                - "Renew your registration before the league's deadline @recurring(yearly)"
            - name: A football week that fits work and family
              description: |-
                ## Purpose
                Training on a Tuesday, five-a-side on a Thursday and a Sunday match all compete with work, children and the rest of life, and the first thing to go is usually the session that would have helped most. Mapping a realistic week, with match day fixed and one or two other slots agreed at home, makes football last the whole season rather than a burst in August.

                ## Milestones
                1. Match day, kick-off time and travel time fixed in the shared calendar.
                2. One or two other football slots chosen and agreed with the people you live with.
                3. The day after the match kept light.
                4. The week kept for six weeks, with clashes noted and one slot moved if needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written football week with match day and one or two other slots, agreed at home and kept for six weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put every confirmed fixture date into the shared family calendar"
                - "Choose the one or two other slots you can keep most weeks"
                - "Agree the plan with the people it affects at home"
                - "Review clashes after six weeks and move one slot if needed"
            - name: Agreeing your position and role
              description: |-
                ## Purpose
                Plenty of Sunday players spend a season at left back because nobody else would, then quietly drift away. A frank chat with the captain about where you play best, where the team needs you and what is expected there gives you a role to train for and a reason to keep turning up.

                ## Milestones
                1. Your preferred and second positions written down with a reason for each.
                2. A conversation held with the captain or manager about where the team has gaps.
                3. A main position agreed, with two or three things expected of you in it.
                4. One part of that role chosen to work on this season.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A main position and the expectations that come with it agreed with your captain or manager."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down your two best positions and why"
                - "Ask the captain for ten minutes after training to talk about roles"
                - "Note the two or three things expected of you in the agreed position"
                - "Pick one part of the role to work on this season"
            - name: Sharing out the captain, secretary and kit jobs
              description: |-
                ## Purpose
                In most amateur teams one person ends up doing everything: booking pitches, chasing money, washing kit, finding a referee and picking the side. Splitting the jobs between three or four people, each with a written list, stops that person burning out in January and the team folding with them.

                ## Milestones
                1. Every recurring job the team needs listed, from pitch booking to result reporting.
                2. A named owner for each job, with a deputy for the key ones.
                3. Each person's list of tasks written and shared in the team chat.
                4. A check at mid-season on whether the split is working.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each team job has a named owner and deputy, written down and shared with the squad."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every job done for the team in a normal week and a normal season"
                - "Ask the squad at the next training who will take each job"
                - "Share the list of jobs, owners and deputies in the team chat"
                - "Ask the agent to draft a one-page handover note for each role"
            - name: Team contact list and group chat rules
              description: |-
                ## Purpose
                Group chats fill up with memes and match chatter until nobody sees the message about the pitch moving. A contact list kept by the secretary, plus a separate announcements channel that only organisers post in, means the important information actually gets read.

                ## Milestones
                1. A contact list with name, phone, emergency contact and shirt size for each player.
                2. An announcements channel set up where only organisers post.
                3. Three or four chat rules agreed: reply to polls, banter in the other chat, no abuse.
                4. Contact details stored where only the organisers can see them.

                ## Notes
                Emergency contacts and health details are personal data. Share them with as few people as possible and delete them when a player leaves.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete contact list and an organisers-only announcements channel in use, with chat rules pinned."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect every player's phone number, emergency contact and shirt size"
                - "Set up an announcements group where only organisers can post"
                - "Pin three or four chat rules agreed with the squad"
                - "Delete the details of players who have left the squad"
            - name: Team kitty, subs and match fees
              description: |-
                ## Purpose
                Pitch hire, referee fees, league fees and fines add up to a serious sum over a season, and the commonest row in an amateur team is about who has and has not paid. A simple system, with an agreed match fee, one payment method in the team's name and a running list of who owes what, keeps money boring.

                ## Milestones
                1. The season's costs estimated: league, registration, pitch, referee, kit, balls and fines.
                2. A match fee or season subs amount agreed that covers them with a small buffer.
                3. One way to pay chosen, so no cash sits in someone's car.
                4. A running list of who has paid shared with the squad.

                ## Notes
                A team account in the team's name, needing two people to approve payments, protects the treasurer as much as the squad.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An agreed fee, one payment method and a shared paid list in place, with the account reconciled every month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add up last season's costs or ask the league for this season's fees"
                - "Propose a match fee or subs amount to the squad"
                - "Set up one payment method in the team's name"
                - "Reconcile the team account against the paid list @recurring(monthly:12)"
            - name: Emergency action plan for matches and training
              description: |-
                ## Purpose
                When a player goes down hard on a park pitch on a Sunday morning, someone needs to know the pitch's postcode, where the nearest defibrillator is and who has first aid training. Writing this down once, on one page in the kit bag, turns a panicked few minutes into a calm one.

                ## Milestones
                1. The address, postcode and access gate for each regular pitch written down.
                2. The nearest defibrillator located for the home and training pitches.
                3. At least two squad members with a current first aid certificate named.
                4. A stocked first aid kit, ice packs and the plan kept in the kit bag.

                ## Notes
                Start from the **Operational checklist** template. Anyone with a suspected head injury comes off and does not play again that day; follow your football association's concussion guidance for their return.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page emergency plan with pitch addresses, defibrillator locations and named first aiders is in the kit bag."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the nearest public defibrillator to your home pitch"
                - "Write the pitch address, postcode and gate details on one page"
                - "Ask who in the squad holds a current first aid certificate"
                - "Restock the first aid kit and check the ice packs @recurring(monthly:2)"
            - name: Weekly availability poll before every fixture
              description: |-
                ## Purpose
                Finding out on Saturday night that you have nine players is the most stressful part of running a Sunday side. A poll sent on the same day every week, a deadline for replies and a short list of standby players turns it into a routine instead of a scramble.

                ## Milestones
                1. A fixed day and time for the poll, known by the whole squad.
                2. A reply deadline, with non-responders chased once by direct message.
                3. A standby list of three or four players who can be called in.
                4. A season in which the team never conceded a match for lack of players.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fixture this season had a confirmed squad of at least twelve by the Thursday before."
                cadence: rolling
              tasks:
                - "Choose the poll day and reply deadline and tell the squad"
                - "Send the availability poll for the next fixture @recurring(weekly:mon)"
                - "Chase non-responders and confirm the squad @recurring(weekly:thu)"
                - "Build a standby list of three or four players"
            - name: Two midweek football fitness sessions
              description: |-
                ## Purpose
                Matches demand repeated sprints, sharp changes of direction and the ability to recover between them, which steady jogging alone does not build. Two short midweek sessions, one of running intervals and one of strength and jumping, keep you sharp in the last twenty minutes, when tired amateur sides concede most often.

                ## Milestones
                1. A four-week plan with one interval session and one strength session each week.
                2. Sessions kept on fixed days that do not clash with team training.
                3. Sprint and intermittent test results improved on the baseline at the retest.
                4. The plan adjusted after each four-week block.

                ## Notes
                Start from the **Training program** template. Keep the hard strength work at least 48 hours before kick-off.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 80 percent of planned midweek sessions done over eight weeks, recorded in a training log."
                cadence: rolling
              tasks:
                - "Write a four-week plan with one interval and one strength session a week"
                - "Do the interval running session @recurring(weekly:tue)"
                - "Do the strength and jumping session @recurring(weekly:thu)"
                - "Adjust the plan at the end of each four-week block"
            - name: Match-day duties for home fixtures
              description: |-
                ## Purpose
                Home teams in most amateur leagues must provide nets, corner flags, match balls, the referee's fee and sometimes the changing room keys, and forgetting one can mean a late kick-off or a fine. One checklist, ticked off on the morning by whoever has that week's duty, covers it all and spreads the load.

                ## Milestones
                1. A checklist of everything the home team must provide under your league's rules.
                2. A named person on home duty for each fixture.
                3. The team sheet and result submitted to the league by its deadline every week.
                4. No fines for late results or missing equipment this season.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every home fixture this season kicked off on time with nets, flags and balls in place and the result submitted by the deadline."
                cadence: rolling
              tasks:
                - "Read the league handbook for the home team's responsibilities"
                - "Write the home match checklist and share it with the squad"
                - "Set up a rota for who does home duty each week"
                - "Submit the team sheet and result to the league @recurring(weekly:sun)"
            - name: Personal match log
              description: |-
                ## Purpose
                Memory makes every game either your best or your worst, which is no help in deciding what to work on. A short log after each match, with minutes played, position, what went well and one thing to fix, shows patterns across a season that no single game reveals.

                ## Milestones
                1. A log with columns for date, opponent, result, position, minutes and two notes.
                2. Every match this season entered within a day.
                3. A review at the halfway point with two patterns written down.
                4. One training focus chosen from what the log shows.

                ## Notes
                Start from the **Metrics log** template. Be honest about the ordinary games; they teach more than the goals.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log entry for every match played this season, with a mid-season review naming two patterns."
                cadence: rolling
              tasks:
                - "Create a match log from the metrics log template"
                - "Fill in the match log within a day of each game @recurring(weekly:mon)"
                - "Review the log at mid-season and write down two patterns"
                - "Choose one training focus from what the log shows"
            - name: Kit washing and kit bag rota
              description: |-
                ## Purpose
                A team kit left in a bag from one Sunday to the next smells by October and is ruined by Christmas, and the person who always takes it home deserves a break. A rota, washing rules that protect the printing and a count of shirts after every match keep the kit complete and wearable for more than one season.

                ## Milestones
                1. A washing rota for the season, shared before the first match.
                2. Washing rules agreed: cool wash, inside out, no tumble dryer.
                3. Shirts, shorts and socks counted back into the bag after every match.
                4. Missing items chased the same week.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The full kit is counted back in after every match and washed by the person on the rota all season."
                cadence: rolling
              tasks:
                - "Draw up the season's kit washing rota"
                - "Count shirts, shorts and socks back into the bag after the match"
                - "Remind this week's kit washer to bring the bag tomorrow @recurring(weekly:sat)"
                - "Chase missing shirts in the team chat the same week"
            - name: Fixture calendar and pitch bookings
              description: |-
                ## Purpose
                League fixtures move for cup ties, waterlogged pitches and clashes with other teams at the same ground. Checking the league site every week, keeping one shared calendar and paying pitch bookings on time stops the team turning up at an empty park or a pitch someone else has booked.

                ## Milestones
                1. One shared fixture calendar the whole squad can see.
                2. Pitch bookings for the season confirmed in writing with the council or venue.
                3. Postponements and rearranged dates updated within a day.
                4. No match lost to a booking mistake this season.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fixture this season was played or postponed with notice, with no missing or double-booked pitch."
                cadence: cyclic
              tasks:
                - "Create a shared fixture calendar and invite the squad"
                - "Confirm the season's pitch bookings in writing with the venue"
                - "Check the league site for fixture and pitch changes @recurring(weekly:wed)"
                - "Pay the pitch booking for the coming month @recurring(monthly:24)"
            - name: Referee booking and match officials
              description: |-
                ## Purpose
                Many amateur leagues are short of referees, and when none is appointed the home team has to find one or play with a club official in the middle. Knowing your league's process, keeping two or three local referees' contacts and confirming each week avoids the Sunday morning panic and the fines that follow an unofficiated game.

                ## Milestones
                1. Your league's rules on appointed referees, fees and no-shows written down.
                2. Contacts for two or three local qualified referees kept.
                3. The referee and kick-off time confirmed by Friday each week.
                4. Referee fees paid on the day, in the way the league requires.

                ## Notes
                Treat the referee well before and after the match. Some leagues count sportsmanship marks, and referees remember teams.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fixture this season had a confirmed official by the Friday before, with fees paid on the day."
                cadence: rolling
              tasks:
                - "Read the league's rules on referee appointments and fees"
                - "Ask the league or local referees' society for two or three contacts"
                - "Confirm the referee and kick-off time @recurring(weekly:fri)"
                - "Put the referee fee in an envelope in the kit bag before kick-off"
            - name: Monthly squad check-in
              description: |-
                ## Purpose
                Players rarely say they are unhappy; they just stop replying to polls. One short question to the squad each month, about minutes, training, the chat or anything else, catches problems while they are still easy to fix.

                ## Milestones
                1. A monthly question format agreed, anonymous if that gets more honest answers.
                2. Replies collected and summarised in a few lines.
                3. One change made in response each month where it makes sense.
                4. Squad numbers held steady through the winter months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly check-in sent for six months, each with a short summary and any change made recorded."
                cadence: rolling
              tasks:
                - "Write six questions to rotate through the season"
                - "Send the squad one question on what to change @recurring(monthly:20)"
                - "Summarise the replies in three lines for the other organisers"
                - "Ask the agent to group the season's replies into themes"
            - name: Cards, suspensions and fines tracker
              description: |-
                ## Purpose
                Yellow cards build up to suspensions, and fines left unpaid can see the whole team suspended by the league. Keeping a simple tracker of every card, fine and ban, and checking the league's discipline page monthly, stops a suspended player being picked by mistake.

                ## Milestones
                1. A tracker with player, date, offence, fine and ban length.
                2. Every card from this season entered.
                3. Fines paid by the deadline and repaid by the player as agreed.
                4. Suspended players flagged before selection each week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every card and fine this season is in the tracker, all fines were paid on time and no suspended player was fielded."
                cadence: rolling
              tasks:
                - "Set up a discipline tracker with player, offence, fine and ban"
                - "Agree with the squad whether players repay their own fines"
                - "Check the league discipline page for cards and fines owed @recurring(monthly:8)"
                - "Flag suspended players to whoever picks the team"
            - name: Team equipment inventory
              description: |-
                ## Purpose
                Balls go over fences, bibs vanish and the pump is always in someone else's car. A quarterly count of balls, bibs, cones, nets, corner flags and the pump, with replacements bought before they run out, means training and matches never start late for want of kit.

                ## Milestones
                1. An inventory of every item the team owns, with who holds it.
                2. Minimum stock levels set, such as six match balls and twenty bibs.
                3. Replacements bought from the kitty when stock drops below the minimum.
                4. The inventory updated every quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An inventory updated each quarter, with match balls, bibs and nets at or above their minimum levels."
                cadence: cyclic
              tasks:
                - "List every item the team owns and who has it"
                - "Set a minimum number for balls, bibs and cones"
                - "Count balls, bibs and cones and check the pump and nets @recurring(quarterly)"
                - "Buy replacements from the kitty when stock falls short"
            - name: First touch and receiving under pressure
              description: |-
                ## Purpose
                Heavy first touches lose the ball more often than anything else at amateur level, and receiving is the skill that improves fastest with solo practice. Fifteen minutes against a wall twice a week, receiving on both feet and on the half turn, shows up in matches within a month.

                ## Milestones
                1. A wall or rebound board found within walking distance of home.
                2. A 15 minute routine written: two-touch, one-touch, half turn, both feet.
                3. The routine done twice a week for six weeks.
                4. Fewer lost first touches noted in the match log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six weeks of twice-weekly wall sessions completed, with first touch noted in the match log before and after."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find a wall or rebound board near home you are allowed to use"
                - "Write a 15 minute receiving routine for both feet"
                - "Do the wall passing routine @recurring(weekly:sat)"
                - "Note how many first touches you lost in each match"
            - name: Weaker foot in eight weeks
              description: |-
                ## Purpose
                Defenders in every league work out within ten minutes which foot to show you onto. Eight weeks of deliberate practice, passing, receiving and finishing with the foot you avoid, makes you harder to mark and opens up half the pitch you currently ignore.

                ## Milestones
                1. The weaker foot tested at the start: ten passes at a target and ten shots at a goal.
                2. Three short sessions a week using only the weaker foot.
                3. The same test repeated at week eight and the scores compared.
                4. At least one deliberate weaker foot pass or shot attempted in every match.
              priority: low
              deadlineOffsetDays: 56
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Weaker foot passing and shooting scores improved from the week one test to the week eight retest."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Test your weaker foot with ten passes and ten shots at a target"
                - "Plan three ten minute weaker foot sessions a week"
                - "Use only your weaker foot in the warm-up before each match"
                - "Repeat the test at week eight and compare the scores"
            - name: Finishing practice for forwards and midfielders
              description: |-
                ## Purpose
                Chances are scarce in amateur football, often two or three a game for a forward, so how you finish matters more than how many you get. A routine covering placement, first-time finishes and shots after a turn, with every attempt counted, turns shooting from hope into a skill.

                ## Milestones
                1. A goal with a net found for solo or paired practice outside team training.
                2. A routine of 50 shots across five types of finish, with placement targets.
                3. Conversion rate per type recorded each session.
                4. Two finish types identified as strengths and one as the priority to work on.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten finishing sessions recorded with conversion rates by shot type, and one priority named from them."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find a goal with a net you can use outside team training"
                - "Write a 50 shot routine across five types of finish"
                - "Record the conversion rate per shot type every session"
                - "Pick the weakest type of finish to focus on for a month"
            - name: Heading technique and safer heading practice
              description: |-
                ## Purpose
                Football associations in several countries now advise limiting heading in adult training because of concerns about repeated head impacts. Learning sound technique, keeping the number of headers in practice low and knowing your association's current guidance lets you head the ball well in matches without needless repetitions in training.

                ## Milestones
                1. Your association's current heading guidance for adult amateur players read and noted.
                2. Technique basics practised with a lighter ball: eyes open, forehead contact, neck braced.
                3. A limit on headers per training session agreed with whoever runs training.
                4. Heading practised mainly in match-like moments rather than repeated drills.

                ## Notes
                Any headache, dizziness or confusion after heading the ball means stopping for the day. Follow your association's concussion guidance.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your association's heading guidance recorded and a per-session header limit agreed with whoever runs training."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read your football association's current heading guidance for adults"
                - "Practise heading technique with a lighter ball"
                - "Agree a limit on headers per session with whoever runs training"
                - "Share the guidance in the team chat"
            - name: Laws of the game refresher
              description: |-
                ## Purpose
                Arguments with referees on park pitches are often about laws that have changed: handball, offside after a deliberate play, the goalkeeper at penalties, quick restarts. An evening with the current laws, focused on the ones that come up most, means fewer bookings for dissent and better decisions on the pitch.

                ## Milestones
                1. The current laws of the game downloaded from the official source.
                2. The offside, handball, fouls and restarts sections read with notes.
                3. This season's law changes listed in plain words.
                4. A one-page summary of the five most disputed laws shared with the squad.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the five most disputed laws, based on the current edition, shared with the squad."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the current laws of the game from the official source"
                - "Read the offside, handball and restart sections and take notes"
                - "List this season's law changes in plain words"
                - "Share a one-page summary of disputed laws with the squad"
            - name: Goalkeeping basics for outfield players
              description: |-
                ## Purpose
                Most Sunday teams lose their keeper to injury, a wedding or a bad night at least a few times a season, and someone has to go in goal. Learning the basics of handling, positioning and distribution, and keeping a pair of gloves in the kit bag, makes that afternoon respectable rather than a 7-0.

                ## Milestones
                1. Two or three outfield players willing to cover in goal named.
                2. A spare pair of goalkeeper gloves kept in the team kit bag.
                3. Catching, low diving and positioning practised with a willing shooter.
                4. Goal kicks and throws practised so distribution does not hand the ball away.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least two outfield players have practised goalkeeping basics and a spare pair of gloves is in the kit bag."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask who in the squad would cover in goal"
                - "Buy a spare pair of goalkeeper gloves for the kit bag"
                - "Practise catching shapes and low diving with a willing shooter"
                - "Practise goal kicks and throws to a teammate"
            - name: Talking on the pitch with agreed calls
              description: |-
                ## Purpose
                Quiet teams concede goals that talkative ones avoid, because nobody warned of a runner or called the line up. Agreeing a small set of short calls, and who leads them in each part of the pitch, makes the team better without anyone getting any fitter.

                ## Milestones
                1. Six to eight short calls agreed, such as time, turn, man on, away, keeper's and step up.
                2. One organiser named each for defence, midfield and attack.
                3. The calls used in a training game and talked through afterwards.
                4. Communication noted in the match log after each game for a month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of agreed calls and named organisers shared with the squad, used in training and reviewed after four matches."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Draft a list of six to eight short calls for the team"
                - "Agree the calls and an organiser for each unit at training"
                - "Use the calls in a training game and talk about it afterwards"
                - "Note how the team talked in each match for a month"
            - name: Set piece sheet for corners and free kicks
              description: |-
                ## Purpose
                Corners, free kicks and long throws decide a large share of tight amateur games, and they are the one part of football a team can rehearse to near perfection with no extra fitness. A one-page sheet showing who takes what, who marks whom and where everyone stands, practised for fifteen minutes at training, wins points over a season.

                ## Milestones
                1. Takers named for corners, free kicks and penalties.
                2. Two attacking corner routines and one defensive set-up agreed.
                3. The sheet shared with the squad and a printed copy kept in the kit bag.
                4. Each routine rehearsed at least twice in training.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page set piece sheet with named takers and three routines, rehearsed in training at least twice."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Name takers for corners, free kicks and penalties"
                - "Draw two attacking corner routines and one defensive set-up"
                - "Rehearse the routines for 15 minutes at training"
                - "Keep a printed copy of the sheet in the kit bag"
            - name: Five-a-side games with a purpose
              description: |-
                ## Purpose
                Small-sided games in a 3G cage force more touches, quicker decisions and more pressing than eleven-a-side, and they are often the easiest football to fit into a working week. Playing them with a monthly focus, such as one-touch rounds or always moving after a pass, turns a social kickabout into real practice.

                ## Milestones
                1. A weekly or fortnightly small-sided game found or set up.
                2. One focus chosen for each month, such as scanning before receiving.
                3. The focus noted after each game, with one example.
                4. A carry-over into eleven-a-side spotted in the match log.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight small-sided games played with a stated focus over two months, each with a one-line note."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find a five-a-side league or regular game within 20 minutes"
                - "Choose one focus for this month's games"
                - "Write one line after each game on how the focus went"
                - "Swap to a new focus at the start of the next month"
            - name: Squad size and fair minutes agreement
              description: |-
                ## Purpose
                Carry too few players and you play with ten; carry too many and the same people sit on the bench every week and leave by November. Agreeing a squad size and a simple principle for sharing minutes, discussed openly before the season, settles most selection rows before they start.

                ## Milestones
                1. Last season's availability reviewed to see how many players turned up on average.
                2. A target squad size chosen, often 16 to 20 for a Sunday side.
                3. A principle for minutes agreed, such as everyone available starts at least one game in three.
                4. The agreement shared with the squad and reviewed at mid-season.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A squad size and minutes principle agreed with the squad before the first league match, written down and shared."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count average turnout per match from last season's polls"
                - "Propose a squad size and minutes principle to the other organisers"
                - "Talk it through with the squad before the first league game"
                - "Review the agreement at the mid-season point"
            - name: Recruiting players to fill squad gaps
              description: |-
                ## Purpose
                Every team loses players each summer to injuries, new jobs, new babies and house moves, and the gaps are usually in goal and at centre back. Recruiting early, through local football groups, workplaces and the league's player-wanted listings, means pre-season starts with a full squad.

                ## Milestones
                1. Gaps listed by position, with the number of players needed.
                2. A short advert written with league, level, training night, fees and a contact.
                3. The advert posted in three places: online groups, league listings and workplaces.
                4. New players brought to training and registered before the deadline.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every listed squad gap filled with a registered player before the first league fixture."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the squad gaps by position after last season"
                - "Ask the agent to draft a short player-wanted advert"
                - "Post the advert in local groups, league listings and workplaces"
                - "Invite responders to training and register those who commit"
            - name: Promotion or division move decision
              description: |-
                ## Purpose
                Winning a league often comes with an invitation to move up, and plenty of amateur teams accept, get beaten every week and fold the following year. Looking honestly at squad depth, travel, extra costs and whether players want harder games makes the choice a deliberate one rather than a default.

                ## Milestones
                1. The league's rules on promotion, ground requirements and extra costs gathered.
                2. Squad views collected on playing at a higher level.
                3. Travel distances and kick-off times in the new division compared.
                4. A decision recorded at a squad meeting and sent to the league on time.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded squad decision on moving division, with reasons, sent to the league before its deadline."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the league for the higher division's ground rules and fees"
                - "Poll the squad on whether they want harder games"
                - "Compare travel and kick-off times with the current division"
                - "Record the decision and reply to the league by its deadline"
            - name: New team kit and a shirt sponsor
              description: |-
                ## Purpose
                Kit lasts two or three seasons, and a local business will often pay for it in exchange for a logo on the shirt. Choosing a supplier, getting a sponsor signed up and ordering in time for pre-season avoids playing the first month in mismatched training tops.

                ## Milestones
                1. Kit needs counted: shirts, shorts, socks and goalkeeper kits, with sizes.
                2. Three quotes compared on price, delivery time and printing.
                3. A sponsor agreed in writing, with what they get and for how long.
                4. Kit ordered at least eight weeks before the first match.

                ## Notes
                Check your league's rules on colours and clash kits before choosing, and allow extra time for printing names and numbers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A sponsor agreement in writing and a kit order placed at least eight weeks before the first fixture."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect shirt and shorts sizes from every squad member"
                - "Get three kit quotes with delivery times and printing costs"
                - "Approach two or three local businesses about sponsorship"
                - "Confirm the sponsor's terms in a short written agreement"
            - name: Choosing a home pitch for next season
              description: |-
                ## Purpose
                The home ground shapes the whole season: grass that floods in December, a 3G pitch that costs twice as much, changing rooms or none, parking or a ten minute walk with the nets. Comparing two or three options before bookings open gets the team a pitch that suits its budget and its weekends.

                ## Milestones
                1. Two or three possible home pitches listed with surface, cost and facilities.
                2. Each checked for league approval, changing rooms and drainage record.
                3. A choice made with the treasurer against the season's budget.
                4. The booking confirmed before the venue's deadline.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A home pitch chosen on cost and facilities, approved by the league and booked before the venue's deadline."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the council and local clubs which pitches have slots next season"
                - "Visit each option and note surface, changing rooms and parking"
                - "Check each option against the league's ground requirements"
                - "Book the chosen pitch before the venue's deadline"
            - name: Eating and drinking before a morning kick-off
              description: |-
                ## Purpose
                Ten thirty kick-offs after a late Saturday are normal in Sunday football, and many players arrive with nothing eaten and too little drunk. A simple routine, a familiar breakfast at the right time, fluids through the morning and something at half time, keeps your legs working in the second half.

                ## Milestones
                1. A breakfast you tolerate well chosen and eaten two to three hours before kick-off.
                2. A water bottle filled the night before and finished by the warm-up.
                3. Something quick for half time packed in the kit bag.
                4. The routine tried for four matches, with how the second half felt noted.

                ## Notes
                Saturday night matters as much as Sunday morning. The routine works far better after a lighter night.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The routine followed for four consecutive matches, with second half energy noted in the match log each time."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Pick a breakfast that sits well and work out when to eat it"
                - "Fill a water bottle and pack it the night before"
                - "Put a half time snack in your kit bag"
                - "Note how the second half felt after four matches"
            - name: Pre-season friendlies and the first league match
              description: |-
                ## Purpose
                Pre-season decides how the first two months go: who is fit, who has registered, which kit fits and whether the team has played together at all. Planning three or four friendlies, the registration deadline and the first fixture as one programme gets everyone ready at the same time.

                ## Milestones
                1. Two to four friendlies arranged, with opponents and pitches confirmed.
                2. Every squad member registered before the league deadline.
                3. Kit, balls and the first aid kit checked before the first friendly.
                4. The first league match played with a full squad.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least two friendlies played and every player registered before the first league fixture."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask three local teams about friendlies on the weekends before the season"
                - "Book pitches and referees for each friendly"
                - "Chase every player to complete registration before the deadline"
                - "Check kit, balls and the first aid kit before the first friendly"
            - name: Cup tie preparation
              description: |-
                ## Purpose
                County and league cup ties often bring a different kick-off time, an opponent from another division and extra rules on registration and extra time. Reading the cup rules, confirming every player is eligible and planning travel early means the team turns up for its biggest game of the season with nothing left to chance.

                ## Milestones
                1. Cup rules read for eligibility, extra time, penalties and referee arrangements.
                2. Every likely player checked as registered before the cup cut-off.
                3. Travel and kick-off time confirmed with the squad a week ahead.
                4. The result reported and the next round added to the fixture calendar.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Cup ties played with only eligible players, travel confirmed a week ahead and results reported on time."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the cup rules on eligibility, extra time and penalties"
                - "Check each likely player is registered before the cup cut-off"
                - "Confirm travel and kick-off time with the squad a week ahead"
                - "Report the result and add the next round to the calendar"
            - name: End-of-season awards night
              description: |-
                ## Purpose
                An awards night with a few trophies and a meal is what keeps players coming back for another season, and it is what new players hear about. Booking the venue, running the vote and ordering trophies early means it actually happens rather than drifting into summer.

                ## Milestones
                1. A date and venue booked two months ahead.
                2. Awards chosen and a vote run among the squad.
                3. Trophies ordered and engraved in time.
                4. The night held, with photos shared and costs settled.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An awards night held within a month of the last match, with votes counted and costs settled."
                cadence: cyclic
              tasks:
                - "Choose a date and venue for the awards night"
                - "Run a squad vote for players' player and the other awards"
                - "Order and engrave trophies at least three weeks ahead"
                - "Settle the costs with the treasurer the week after"
            - name: Team tour or tournament weekend
              description: |-
                ## Purpose
                A weekend away, whether a seaside tournament or a tour abroad, does more for squad spirit than a season of training. It also needs more planning than people expect: deposits, insurance, travel, rooms and the rules of the tournament itself.

                ## Milestones
                1. A tournament or tour chosen and the date agreed by enough players.
                2. Deposits collected, then travel and rooms booked.
                3. Tournament entry, player registration and travel insurance confirmed.
                4. A one-page itinerary shared with everyone going.

                ## Notes
                Start from the **Trip** template. Collect deposits before booking anything in your own name.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tour or tournament attended with deposits paid, rooms booked and an itinerary shared beforehand."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Shortlist two or three tournaments or tour options with prices"
                - "Ask the squad who is committed and collect deposits"
                - "Book travel and rooms once the deposits are in"
                - "Share a one-page itinerary with everyone going"
            - name: End-of-season meeting and next-season plan
              description: |-
                ## Purpose
                Leagues ask for affiliation, fees and team details over the summer, often before anyone has thought about next season. Holding a short meeting within a month of the last match, to agree roles, fees and ambitions, means those forms go in on time and the team starts the summer organised.

                ## Milestones
                1. A date set and the whole squad invited.
                2. Last season's accounts presented by the treasurer.
                3. Roles, fees and the target division for next season agreed.
                4. Notes with decisions and owners shared after the meeting.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A season-end meeting held each year, with accounts presented and decisions and owners recorded in shared notes."
                cadence: cyclic
              tasks:
                - "Book the end-of-season meeting date @recurring(yearly)"
                - "Ask the treasurer to prepare the season's accounts"
                - "Write an agenda covering roles, fees and next season"
                - "Share decisions and owners in the team chat afterwards"
            - name: Charity or memorial match
              description: |-
                ## Purpose
                Teams are often asked to play a memorial match for a former player or a fundraiser for a local cause, and these go best with a small organising group, a clear budget and the league's permission where needed. Organising it properly means the money raised reaches the cause and the day is remembered well.

                ## Milestones
                1. Date, opponents, pitch and referee confirmed.
                2. Permission sought from the league or association if their rules require it.
                3. A collection or ticketing method chosen and agreed with the charity or family.
                4. The money raised passed on, with the total recorded and shared.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The match played and all money raised passed to the cause, with the total recorded and shared with the squad."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Agree the cause and a date with the family or charity"
                - "Check whether the league needs to sanction the match"
                - "Book the pitch, a referee and the opponents"
                - "Pass on the money raised and share the total"
            - name: Coming back to football after years out
              description: |-
                ## Purpose
                Players returning in their thirties after a long break often pull a hamstring or calf in the first few weeks, because the head remembers a pace the legs no longer have. A six to eight week return, with running and small-sided games before full matches, gets you through to Christmas still playing.

                ## Milestones
                1. Three weeks of easy running and strength work done before any matches.
                2. Small-sided games played for two to three weeks before eleven-a-side.
                3. First full matches limited to 60 minutes or one half.
                4. A full 90 minutes played without a muscle strain.

                ## Notes
                If you have a health condition or have been inactive for years, speak to your doctor before you start.
              priority: medium
              deadlineOffsetDays: 56
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ninety minutes played after a six to eight week graded return, with no muscle strain along the way."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Book a first easy run and a short strength session this week"
                - "Join a five-a-side for two or three weeks before full matches"
                - "Tell the captain you want to start with 60 minutes"
                - "Note how your hamstrings and calves feel after each game"
            - name: Moving into veterans football
              description: |-
                ## Purpose
                Veterans leagues for over-35s, and in some areas over-40s and over-50s, offer a gentler pace, rolling substitutions and often a slot that fits family life better. Trying a veterans game before committing helps you decide whether to switch, play both or stay where you are.

                ## Milestones
                1. Veterans leagues and teams within reach listed, with age rules and match day.
                2. One veterans game or training session tried.
                3. Pace, commitment and cost compared with your current team.
                4. A decision made and both captains told in good time.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on veterans football made after playing at least one veterans game, with both captains told."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up veterans leagues near you and their age rules"
                - "Ask a veterans captain if you can play a game or train"
                - "Compare pace, commitment and cost with your current team"
                - "Tell both captains what you have decided"
            - name: Playing on with a young family
              description: |-
                ## Purpose
                New parents are among the biggest reasons Sunday league players stop, usually because the arrangement at home was never discussed and resentment built up. Agreeing which weekends you play, how the time is made up and when you will review it keeps football in your life without it costing your relationship.

                ## Milestones
                1. The season's fixtures shared with your partner before committing.
                2. An agreement on how many matches you play and how the time is made up.
                3. The captain told your realistic availability at the start of the season.
                4. A review after three months, with the arrangement changed if needed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agreement at home on match weekends, availability shared with the captain and a three-month review held."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Share the full fixture list with your partner before the season"
                - "Agree how many matches you will play and how the time is made up"
                - "Tell the captain your realistic availability"
                - "Review the arrangement together after three months"
            - name: Walking football for later playing years
              description: |-
                ## Purpose
                Walking football, with no running and the ball kept below head height, lets people play well into their seventies and is growing quickly. For players whose knees or hips have had enough of eleven-a-side, or who are coming back after decades away, it keeps the ball at your feet and the dressing room banter alive.

                ## Milestones
                1. Walking football sessions within reach found, with days and costs.
                2. A taster session attended.
                3. The rules learned, including the running rule and the height limit.
                4. A regular session chosen and attended for a month.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A walking football session attended weekly for a month after a taster."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search for walking football sessions near you"
                - "Book a taster session"
                - "Read the walking football rules on running and ball height"
                - "Go to the session weekly for a month"
            - name: Joining or forming a women's amateur team
              description: |-
                ## Purpose
                Women's amateur football has grown faster than the number of teams, so many areas have keen players with no side nearby, or a side a few players short. Finding an existing team, or gathering enough interest to enter a new one into a league, opens up a game that has often been hard for adult women to get into.

                ## Milestones
                1. Women's teams and leagues within reach listed, with their level.
                2. Training attended with at least one team, or interest gathered from at least 14 players for a new one.
                3. A league chosen and its entry requirements noted.
                4. Players registered and the first fixture played.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A place in an existing women's team, or a new team entered into a league with at least 14 registered players."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Search your association's club finder for women's teams nearby"
                - "Attend a training session or a recreational turn-up-and-play session"
                - "Post an interest form locally if no team is close enough"
                - "Ask the league about entry requirements for a new team"
            - name: Starting a new team and entering a league
              description: |-
                ## Purpose
                Starting a team from a group of friends or a work five-a-side takes about six months: affiliation, a name, a pitch, kit, a bank account, registrations and enough players to field eleven every week. Working through it in order, with league deadlines at the centre, gets the team into the right division for its first season.

                ## Milestones
                1. A league chosen, with its application deadline and requirements noted.
                2. Affiliation to the county or regional association completed.
                3. Pitch, kit, bank account and at least 16 committed players in place.
                4. League application accepted and the first season's fixtures received.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The team accepted into a league with affiliation, pitch, kit and at least 16 registered players before its first fixture."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask two local leagues for their application dates and requirements"
                - "Gather the names of at least 16 players who will commit for a season"
                - "Apply for affiliation with your county or regional association"
                - "Submit the league application before its deadline"
            - name: Running the team as a constituted club
              description: |-
                ## Purpose
                Once a team has a bank account, sponsors and thousands a year passing through it, a simple constitution with named officers protects the people holding the money and makes grants and pitch deals easier. Formalising the club, with a yearly meeting, published accounts and agreed policies, is what lets it outlast its founders.

                ## Milestones
                1. A simple constitution adopted, covering officer roles, membership and how decisions are made.
                2. A club bank account that needs two signatories for payments.
                3. Codes of conduct and a welfare contact in place where the association requires them.
                4. Annual accounts presented at the yearly meeting.

                ## Notes
                Many associations publish a model constitution for small clubs. Start from theirs rather than drafting one from nothing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A constitution adopted, a two-signatory bank account opened and annual accounts presented at the yearly meeting."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Download your association's model constitution for small clubs"
                - "Agree officer roles and adopt the constitution at a meeting"
                - "Move the team funds into a two-signatory club account"
                - "Ask the agent to draft a players' code of conduct for the squad to agree"
            - name: Video and GPS review of your own matches
              description: |-
                ## Purpose
                Phone footage from the touchline and a GPS watch or vest now cost less than a season's subs, and they show what you actually did rather than what you remember. Reviewing a few matches for distance, sprints and positioning gives an experienced player the detail to keep improving once the basics are in place.

                ## Milestones
                1. A way to film matches chosen: a teammate, a tripod or a shared team camera.
                2. Distance, sprint count and heat map recorded for four matches if you use GPS.
                3. Three clips per match noted where your positioning helped or cost the team.
                4. Two training priorities written from the review.

                ## Notes
                Agree filming with your squad and the opposition before kick-off, and keep the footage within the team.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four matches reviewed on video or GPS, with clips noted and two training priorities written down."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the squad whether anyone already films matches"
                - "Set up a phone on a tripod or arrange a teammate to film"
                - "Note three positioning clips from each match you review"
                - "Write two training priorities from four matches of footage"
            - name: Taking the referee course as a player
              description: |-
                ## Purpose
                Nothing changes how a player sees the game like refereeing a match, and leagues are short enough of officials that a qualified player is useful to every team. The entry-level course is usually a few evenings plus a handful of supervised games, and refereeing can pay for your subs.

                ## Milestones
                1. Your association's entry-level refereeing course dates and cost found.
                2. The course and any required background checks completed.
                3. The supervised matches the course requires refereed.
                4. Qualification confirmed and availability given to the local referees' society.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The entry-level referee qualification completed and at least three matches refereed."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Look up your association's entry-level refereeing course dates"
                - "Book the course and complete any required background checks"
                - "Referee the supervised matches the course requires"
                - "Give your availability to the local referees' society"
---

# Amateur Football (Soccer)

This area is for anyone playing amateur, Sunday league or midweek football, and for the captains and organisers who keep a team on the pitch every week. It starts with the foundations (finding a team, boots for your surfaces, a fitness baseline, registration, sharing out the team's jobs, the kitty and an emergency plan), then the weekly machinery of availability polls, fixtures, referees, match-day duties and fitness, the skills that win games at this level, decisions about squad size, kit and pitches, the season's events, versions for returners, veterans, parents and women's teams, and finally starting and running a club properly.

What repeats is a Monday availability poll and a Thursday chase, Tuesday and Thursday fitness sessions, a Wednesday fixture check, a Friday referee confirmation, a Saturday wall session and a Sunday result submission, plus monthly checks on the team account, the discipline page, pitch payments, the first aid kit and the squad's mood, a quarterly kit count and fitness retest, and the yearly registration renewal and end-of-season meeting. The Purchase decision, Operational checklist, Training program, Metrics log, Trip and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
