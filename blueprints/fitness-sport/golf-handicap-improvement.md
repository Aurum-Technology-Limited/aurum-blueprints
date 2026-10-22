---
id: fitness-sport.golf-handicap-improvement
name: Golf Handicap Improvement
description: "A route to a lower golf handicap: an official index and stats baseline, weekly practice by scoring zone, short game skills, course management, competitions and plans for retirees and busy players."
category: personal
version: 1.0.0
tags: [fitness-sport, golf-handicap-improvement, athlete, retiree, golf, handicap, short-game, course-management]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - purchase-decision
    - remediation-plan
    - trip
    - training-program
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Golf Handicap Improvement
          description: "Lowering a golf handicap through lessons, practice routines, course management and stat tracking across rounds and competitions."
          projects:
            - name: Official handicap index registration
              description: |-
                ## Purpose
                Without an official handicap index you cannot enter most club competitions, and scores kept in a notebook never become a number anyone else recognises. Joining a club or an authorised golf body that issues indexes under the World Handicap System, then submitting your first 54 holes of scores, turns your rounds into an index that travels with you to any course.

                ## Milestones
                1. Membership of a club or authorised scheme that issues World Handicap System indexes confirmed.
                2. Your handicap number and app login recorded where you can find them.
                3. Scorecards totalling at least 54 holes submitted and attested by a playing partner.
                4. A first handicap index issued and written in your golf notes.

                ## Notes
                Most systems issue a first index from three 18-hole cards or a mix of 9 and 18-hole rounds. Ask the club secretary who may mark your card before you play the first one.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An official handicap index issued under the World Handicap System, with your membership number and app login recorded in your golf notes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your club or golf body how to register for an official handicap"
                - "Download the handicap app your club uses and log in"
                - "Arrange three qualifying rounds with a partner who can mark your card"
                - "Submit each scorecard on the same day you play it"
            - name: Last 20 scores handicap record review
              description: |-
                ## Purpose
                Your index is the average of your best 8 differentials from your last 20 scores, so the other 12 rounds say more about what costs you shots than the index does. Reading the full record, with dates, courses and playing conditions, shows whether your index sits near your typical round or is flattered by a few good days.

                ## Milestones
                1. All 20 scores in your record copied into one sheet with date, course and differential.
                2. The 8 counting differentials marked and their average checked against your index.
                3. The gap between your average differential and your index worked out in strokes.
                4. The three worst rounds annotated with what went wrong on each.

                ## Notes
                Expect your average score to sit two or three shots above your handicap. The system is built on your better rounds, so this is normal rather than a sign you are failing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A sheet of your last 20 differentials with the counting 8 marked, the average gap to your index stated in strokes and the three worst rounds annotated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open your handicap record and copy the last 20 scores into a sheet"
                - "Mark the 8 lowest differentials that count toward your index"
                - "Work out your average differential and compare it with your index"
                - "Write one line on what went wrong in each of your three worst rounds"
            - name: Five-round scoring stats baseline
              description: |-
                ## Purpose
                Handicap alone hides where the shots go. Recording fairways hit, greens in regulation, putts, penalty strokes and up-and-down attempts over five rounds gives a baseline that tells you whether practice hours belong on the tee, approach shots, the short game or the putting green.

                ## Milestones
                1. A stats card or app set up with fairways, greens, putts, penalties and up-and-downs.
                2. Five complete rounds recorded with every hole filled in.
                3. Per-round averages calculated for each stat.
                4. The weakest category named as your first practice priority.

                ## Notes
                Start from the **Metrics log** template. Record the length of your first putt on each green if you can; it makes later putting analysis far more useful.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five complete rounds of hole-by-hole stats recorded, with per-round averages and the weakest category named as the first practice priority."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Create a stats log from the metrics log template"
                - "Add columns for fairways, greens, putts, penalties and up-and-downs"
                - "Record every hole of your next five rounds in the log"
                - "Calculate the per-round average for each stat and circle the weakest"
            - name: Season handicap target with checkpoints
              description: |-
                ## Purpose
                Dropping from 24 to 18 in a season is common for a committed improver, while dropping from 8 to 4 can take years. Setting a target that fits your starting index, practice time and number of qualifying rounds, with checkpoints at three and six months, keeps the goal honest and stops one bad month from feeling like failure.

                ## Milestones
                1. A target index for the end of the season written down beside the starting index.
                2. Checkpoint indexes set for month three and month six.
                3. The number of qualifying rounds you can realistically play estimated.
                4. The target shared with your coach or a regular playing partner.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written season target index with two dated checkpoints and a planned number of qualifying rounds, shared with one other person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your current index and the index you want by season end"
                - "Set checkpoint targets for month three and month six"
                - "Count how many qualifying rounds you can realistically play"
                - "Tell your coach or regular partner the target"
            - name: Score posting and handicap rules refresher
              description: |-
                ## Purpose
                Many golfers post scores wrongly: forgetting net double bogey on bad holes, never recording general play rounds, or ignoring the playing conditions calculation. Learning how the World Handicap System adjusts scores, sets your course handicap from the slope and course rating, and caps fast increases means you can read your own record and trust it.

                ## Milestones
                1. Net double bogey as the maximum hole score understood and applied on your next card.
                2. Course handicap calculated by hand for your usual tees from slope and course rating.
                3. The soft and hard caps on index increases explained in your own words.
                4. Your club's rules on posting general play and nine-hole rounds confirmed.

                ## Notes
                Your national golf body publishes a free summary of the system. Read that rather than forum threads, which often describe the older national systems.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explaining net double bogey, course handicap from slope, the playing conditions calculation and the caps, checked against your national body's summary."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your national golf body's summary of the World Handicap System"
                - "Calculate your course handicap for your usual tees by hand"
                - "Write a one-page note on net double bogey and the index caps"
                - "Ask the club handicap secretary how general play rounds are posted"
            - name: Carry distance gapping for every club
              description: |-
                ## Purpose
                Golfers commonly overestimate their iron distances by 10 to 15 yards, which is why so many approach shots finish short of the green. A session on a launch monitor or a measured range, recording average carry rather than best strike for every club, gives a yardage card you can actually club from and shows any gaps or overlaps in the bag.

                ## Milestones
                1. Ten shots per club hit on a launch monitor or measured range.
                2. Average carry, not best strike, recorded for every club from driver to lob wedge.
                3. Gaps over 15 yards and overlaps under 5 yards between clubs flagged.
                4. A yardage card saved to your phone and printed for the bag.

                ## Notes
                Range balls usually fly shorter than the ball you play, often by 5 to 10 percent. Use your own ball where the facility allows, or note the adjustment on the card.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A yardage card listing average carry for every club in the bag, with gaps and overlaps flagged, kept where you can see it on the course."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book an hour on a launch monitor bay or measured range"
                - "Hit ten balls with each club and record the average carry"
                - "Flag any gap over 15 yards or overlap under 5 yards"
                - "Save the yardage card to your phone and print a copy for the bag"
                - "Re-measure carry with your three most used irons @recurring(yearly)"
            - name: Choosing a golf coach and lesson format
              description: |-
                ## Purpose
                A single lesson with no follow-up rarely changes a handicap, but a coach who sees your stats, films your swing and plans a block of lessons usually does. Comparing two or three qualified professionals on approach, technology, price and availability, then committing to a block of four to six lessons, gives your improvement a structure.

                ## Milestones
                1. Two or three qualified coaches within reach shortlisted with prices and lesson formats.
                2. A trial lesson or call held with your top choice.
                3. Your stats baseline and season target shared with the chosen coach.
                4. A block of at least four lessons booked with dates in the diary.

                ## Notes
                Ask each coach how they measure progress. Good answers mention your scores and stats, not only swing positions.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A coach chosen from a shortlist of at least two, with a block of at least four lessons booked and your baseline stats shared."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List qualified coaches within 30 minutes of home or work"
                - "Compare price, lesson length and use of video or launch monitors"
                - "Book a trial lesson with your top choice"
                - "Send your stats baseline and target before the first booked lesson"
            - name: Season golf budget and weekly time plan
              description: |-
                ## Purpose
                Membership, green fees, competition entries, lessons, range balls and kit add up fast across a season, and practice time is the first thing to vanish when work gets busy. Setting a budget and a weekly time allocation up front lets you spend on what moves the handicap, usually lessons and short game practice, rather than a new driver.

                ## Milestones
                1. A season budget split into membership, fees, lessons, practice balls and equipment.
                2. A weekly allocation of hours for rounds, range and short game practice agreed with your household.
                3. The spend most likely to help your weakest stat identified.
                4. Actual spend checked against the budget each month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written season budget by category and a weekly hours allocation, with actual spend compared against budget at least once a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up last season's golf spending from bank statements"
                - "Split this season's budget into membership, fees, lessons, balls and kit"
                - "Agree weekly golf hours with the people you live with"
                - "Compare golf spending with the season budget @recurring(monthly:28)"
            - name: Twenty-minute pre-round warm-up routine
              description: |-
                ## Purpose
                Arriving five minutes before the tee time and swinging hard at the first drive costs most club golfers a shot or two on the opening holes. A fixed twenty-minute routine of putting pace, a few chips, a ladder of clubs on the range and a rehearsal of the first tee shot turns the first three holes into normal holes.

                ## Milestones
                1. A written warm-up sequence that fits in 20 minutes, with and without a range.
                2. A ten-minute version ready for days when you arrive late.
                3. The routine used before five consecutive rounds.
                4. Scores on holes one to three compared with the five rounds before.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written 20-minute warm-up used before five consecutive rounds, with scoring on the first three holes compared against the previous five rounds."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a 20-minute warm-up covering putting, chipping and a club ladder"
                - "Write a ten-minute version for late arrivals"
                - "Set a phone reminder to arrive 30 minutes before each tee time"
                - "Compare your scores on the first three holes over the next five rounds"
            - name: Post-round stats entry habit
              description: |-
                ## Purpose
                Stats entered from memory three days later are guesses. Logging each round the same evening, with a one-line note on the shot that cost the most, builds the record every later decision depends on and takes under ten minutes once the habit is set.

                ## Milestones
                1. Every round played this season logged within 24 hours.
                2. A one-line note on the costliest shot attached to each round.
                3. Rolling averages for the last ten rounds updating in the log.
                4. Any missed rounds back-filled from the scorecard within a week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 90 percent of rounds played this season logged within 24 hours, each with a costliest-shot note."
                cadence: rolling
              tasks:
                - "Keep a pencil and stats card in the bag for marking each hole"
                - "Photograph the scorecard before leaving the clubhouse"
                - "Set up rolling ten-round averages in your stats log"
                - "Log this week's rounds with a costliest-shot note @recurring(weekly:sun)"
            - name: Weekly practice plan by scoring zone
              description: |-
                ## Purpose
                Practice that drifts toward the driving range is the most common reason handicaps stall, because roughly two thirds of a mid handicapper's shots happen within 100 yards of the hole. Planning each week's sessions by zone, in the ratio your stats suggest, keeps time going to the shots that actually cost you.

                ## Milestones
                1. A practice ratio across full swing, approach, short game and putting set from your stats.
                2. Each week's sessions written in the diary with a zone and a drill.
                3. Practice minutes per zone recorded after each session.
                4. The ratio adjusted after each quarterly stats review.

                ## Notes
                A common starting split for mid handicappers is 40 percent short game, 30 percent putting and 30 percent full swing. Let your own stats overrule it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly practice plan by scoring zone written for at least 12 consecutive weeks, with minutes per zone logged."
                cadence: rolling
              tasks:
                - "Set your practice ratio by zone from your baseline stats"
                - "Pin the ratio in your phone notes where you plan the week"
                - "Plan next week's practice sessions with a zone and drill each @recurring(weekly:mon)"
                - "Record the minutes spent in each zone after every session"
            - name: Monthly handicap index check
              description: |-
                ## Purpose
                An index moves every time an old score drops out of the 20-score window, so a good round can be cancelled out by a good one from last year leaving. Checking the record once a month shows which scores are about to fall out, what score next time would lower your index and whether the trend matches your season target.

                ## Milestones
                1. The index for the season charted month by month.
                2. Scores about to leave the 20-score window noted each month.
                3. The gross score needed to lower your index next round worked out.
                4. Progress against the month three and month six checkpoints recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month-by-month index chart for the season with each monthly check recorded, including progress against both checkpoints."
                cadence: rolling
              tasks:
                - "Start a chart of your index by month in your stats log"
                - "Check your index and note which old scores leave the window next @recurring(monthly:3)"
                - "Work out what gross score would lower your index next round"
                - "Compare the trend against your season checkpoints"
            - name: Scored short game practice sessions
              description: |-
                ## Purpose
                Up-and-down percentage separates a 10 handicap from a 20 more clearly than driving distance does. Two short game sessions a week of 45 minutes, using games with a score rather than raking balls into a pile, raise it faster than any swing change.

                ## Milestones
                1. Two scored games chosen, one for chipping and one for pitching.
                2. Sessions held twice a week for eight weeks, each with a score recorded.
                3. Scores in both games trending up across the eight weeks.
                4. On-course up-and-down percentage compared with your baseline.

                ## Notes
                A simple game: nine balls from nine different spots around a green, one chip and then putt out, counting how many you get up and down in two.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sixteen scored short game sessions over eight weeks, with game scores logged and on-course up-and-down percentage compared with baseline."
                cadence: rolling
              tasks:
                - "Choose one scored chipping game and one scored pitching game"
                - "Find out when the club's short game area is quietest"
                - "Play the nine-ball up-and-down game and log the score @recurring(weekly:wed)"
                - "Compare your on-course up-and-down rate with baseline after eight weeks"
            - name: Home putting practice routine
              description: |-
                ## Purpose
                Putts make up around 40 percent of a typical round, and a mat or a straight stretch of carpet allows practice on days when there is no time to get to the club. Fifteen minutes of start-line and pace drills a few evenings a week builds a stroke that holds up when the putt matters.

                ## Milestones
                1. A putting mat or carpet stretch set up with a gate and a target.
                2. A 15-minute routine written with one start-line drill and one pace drill.
                3. Sessions held three evenings a week for six weeks.
                4. Putts per round compared with your baseline after six weeks.

                ## Notes
                Start from the **Habit tracker** template so missed evenings show up as clearly as kept ones.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three 15-minute home putting sessions a week held for six weeks, with putts per round compared against baseline."
                cadence: rolling
              tasks:
                - "Set up a putting mat or carpet stretch with a two-tee gate"
                - "Write a 15-minute routine of start-line and pace drills"
                - "Hold a 15-minute home putting session @recurring(weekly:mon,thu,sat)"
                - "Count putts per round for the six weeks after starting"
            - name: Quarterly strokes gained review
              description: |-
                ## Purpose
                Raw stats mislead: missing a green from 200 yards is normal, while missing from 100 is costly. Comparing your shots with a benchmark for your target handicap each quarter, through a strokes gained app or a simple spreadsheet, shows exactly which part of the game loses the most strokes and resets the practice ratio.

                ## Milestones
                1. A strokes gained method chosen, app or spreadsheet, with a benchmark for your target handicap.
                2. Strokes gained or lost calculated for driving, approach, short game and putting.
                3. The biggest loss named and the weekly practice ratio adjusted.
                4. The quarter's findings shared with your coach.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four quarterly reviews a year, each with strokes gained by category against your target handicap and an adjusted practice ratio recorded."
                cadence: cyclic
              tasks:
                - "Choose a strokes gained app or spreadsheet with a handicap benchmark"
                - "Run the strokes gained breakdown for the quarter's rounds @recurring(quarterly)"
                - "Adjust the weekly practice ratio toward the biggest loss"
                - "Ask the agent to summarise the quarter's strokes gained trend for your coach"
            - name: Lesson notes and swing video library
              description: |-
                ## Purpose
                Lessons fade within a fortnight unless the key feel and the drill are written down, and videos from the same angle are the only reliable way to see whether a change stuck. One library with dated lesson notes and face-on and down-the-line clips lets you and your coach compare months, not memories.

                ## Milestones
                1. One folder holding lesson notes and swing videos, named by date.
                2. Each lesson summarised in three lines: the fault, the feel and the drill.
                3. Face-on and down-the-line clips filmed at the same camera height each month.
                4. The first and latest clips compared side by side with your coach.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated library with a three-line note for every lesson and monthly face-on and down-the-line clips, reviewed once with your coach."
                cadence: rolling
              tasks:
                - "Create one folder for lesson notes and swing videos named by date"
                - "Write the fault, feel and drill within an hour of each lesson"
                - "Film face-on and down-the-line swings at the same height @recurring(monthly:20)"
                - "Review the first and latest clips side by side with your coach"
            - name: Grip, groove and spike care schedule
              description: |-
                ## Purpose
                Worn grips make you hold the club tighter, and grooves packed with dirt cut spin on wedges just when you need the ball to stop. A simple care routine for grips, grooves, spikes and the bag costs little and removes equipment as an excuse.

                ## Milestones
                1. Every grip checked for shine and wear, with a regrip date set.
                2. A groove brush and towel kept in the bag and used on wedges during play.
                3. Spikes or shoe soles checked and replaced when worn.
                4. Wedge grooves inspected each year, with replacement wedges budgeted when worn.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Grips replaced within the last 12 months or 40 rounds, and a monthly cleaning of clubs and spikes recorded."
                cadence: cyclic
              tasks:
                - "Check every grip for shine, cracks or slipping"
                - "Put a groove brush and damp towel in the bag"
                - "Clean clubheads, grooves and shoe spikes @recurring(monthly:14)"
                - "Book a regrip of the full set at a pro shop @recurring(yearly)"
            - name: End of season review and winter plan
              description: |-
                ## Purpose
                Golfers who improve over several years usually use the quiet months to change one thing, while the rest stop playing and start next season where they left off. A review of the season's index, stats and lessons, turned into a winter plan with one technical goal and one golf fitness goal, makes the off-season count.

                ## Milestones
                1. Starting index, finishing index and the season's lowest index recorded.
                2. The season's stats compared with the baseline in each category.
                3. One technical goal and one golf fitness goal chosen for winter.
                4. Next season's target index set from the review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written season review with index and stats compared to baseline, and a winter plan naming one technical goal and one fitness goal."
                cadence: cyclic
              tasks:
                - "Pull the season's index history and stats onto one page"
                - "Compare each stat with the baseline from the start of the season"
                - "Choose one technical goal and one fitness goal for winter"
                - "Hold the end of season golf review @recurring(yearly)"
            - name: Lag putting distance control
              description: |-
                ## Purpose
                Three-putts usually start with a first putt that finishes six feet away, not with a missed tiddler. Practising pace from 30 to 60 feet, aiming to leave every putt inside a three-foot circle, cuts three-putts faster than any work on stroke mechanics.

                ## Milestones
                1. A ladder drill set up at 30, 40, 50 and 60 feet on the practice green.
                2. The share of putts finishing inside three feet recorded each session.
                3. That share above 70 percent for three sessions in a row.
                4. Three-putts per round compared with your baseline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three consecutive sessions with over 70 percent of 30 to 60-foot putts finishing inside three feet, and three-putts per round recorded against baseline."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set out tees at 30, 40, 50 and 60 feet on the practice green"
                - "Putt five balls from each distance and count those inside three feet"
                - "Practise lag putts uphill and downhill on the same green"
                - "Count three-putts in each of your next ten rounds"
            - name: Holing out from inside six feet
              description: |-
                ## Purpose
                Tour players hole roughly half their putts from eight feet and club golfers far fewer, yet many still treat short putts as gimmes in practice. Training the start line through a gate and holing from three to six feet with something at stake turns missed short putts into made pars.

                ## Milestones
                1. A gate drill set up and the putter face checked for square at address.
                2. Fifty three-foot putts holed in a row at least once.
                3. A make percentage from six feet recorded over 20 putts each session.
                4. A six-foot make rate above 60 percent across three sessions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recorded six-foot make rate above 60 percent across three sessions, and a run of 50 consecutive three-footers holed at least once."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set up a two-tee gate just wider than the ball, a foot ahead of it"
                - "Hole putts around the clock from three feet until you make 50 in a row"
                - "Run the 20-ball six-foot test and log the make rate @recurring(monthly:9)"
                - "Use the same pre-putt routine for every short putt on the course"
            - name: Chip and pitch landing spot control
              description: |-
                ## Purpose
                Most poor chips come from choosing the shot during the swing rather than before it, with no landing spot and no idea of roll. Learning a carry-to-roll ratio for three clubs, and picking a landing spot for every chip, makes the short game predictable.

                ## Milestones
                1. Carry-to-roll ratios measured for three clubs, such as a sand wedge, pitching wedge and 8-iron.
                2. A landing spot picked and named aloud before every practice chip.
                3. At least half of practice chips landing on a towel-sized target.
                4. The method used on course for ten rounds with up-and-downs recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Carry-to-roll ratios recorded for three clubs, at least half of practice chips landing on a towel target, and the method used on course for ten rounds."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Measure the carry and roll of ten chips each with three clubs"
                - "Write the carry-to-roll ratio for each club on a card"
                - "Lay a towel as a landing spot and count the chips that land on it"
                - "Name the landing spot before every chip in your next three rounds"
            - name: Greenside bunker escapes in one
              description: |-
                ## Purpose
                Mid and high handicappers often lose two shots or more every time they find a greenside bunker, because the fear of thinning it leads to a decelerating swing. Learning the splash shot, entering the sand a couple of inches behind the ball with an open face and a full follow-through, makes getting out first time the norm.

                ## Milestones
                1. A lesson or session spent only on greenside bunker technique.
                2. The club entering behind a line drawn in the sand nine times in ten.
                3. Ten out of ten practice balls escaping the bunker first time.
                4. On-course bunker escapes in one recorded for ten rounds.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten from ten practice bunker shots escaping first time, and the on-course escape rate recorded over ten rounds."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a lesson or half an hour in the practice bunker"
                - "Draw a line in the sand and practise entering just behind it"
                - "Hit ten balls in a row and count how many get out"
                - "Record every greenside bunker escape on your stats card"
            - name: Wedge distance matrix with partial swings
              description: |-
                ## Purpose
                Shots from 40 to 100 yards are where many golfers waste the most strokes, because they only know one full swing with each wedge. A matrix of three swing lengths, such as hands at hip, chest and shoulder height, gives up to twelve known distances across four wedges and takes the guessing out of the scoring zone.

                ## Milestones
                1. Three repeatable swing lengths chosen with your coach.
                2. Average carry recorded for each swing length with every wedge.
                3. The matrix printed on a card that fits in the bag.
                4. Proximity to the hole from 50 to 100 yards compared with baseline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A wedge matrix of at least nine carry distances on a bag card, with on-course proximity from 50 to 100 yards logged for five rounds."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree three partial swing lengths with your coach"
                - "Hit ten balls per swing length with each wedge on a launch monitor"
                - "Print the matrix on a card that fits in the bag"
                - "Re-check the wedge matrix carries on a launch monitor @recurring(quarterly)"
            - name: Reliable stock tee shot shape
              description: |-
                ## Purpose
                Penalty strokes from the tee often cost a mid handicapper more than any lack of distance. Settling on one stock shape, usually a gentle fade or draw, and a set-up that produces it, means you can aim away from trouble and know which side the miss will be.

                ## Milestones
                1. Your current dispersion pattern recorded from 20 drives.
                2. One stock shape chosen with your coach.
                3. The set-up and swing thought for that shape written on one line.
                4. Tee-shot penalties per round compared with baseline over ten rounds.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A chosen stock tee shot shape with a written set-up, and tee-shot penalties per round compared with baseline over ten rounds."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Hit 20 drives and record where each finishes left or right"
                - "Choose a stock shape with your coach based on the pattern"
                - "Write the set-up and swing thought for that shape on one line"
                - "Aim every tee shot so the stock shape curves away from the worst trouble"
            - name: Sloping lies and recovery shots
              description: |-
                ## Purpose
                Range mats are flat, but few lies on the course are. Learning how ball above or below the feet, uphill and downhill lies change aim and club choice, and when to chip out sideways from trees, keeps one bad shot from becoming a triple bogey.

                ## Milestones
                1. The four basic slope lies practised on a sloping part of the practice ground.
                2. Aim and club adjustments for each slope written on a card.
                3. A personal rule for when to chip out sideways written down.
                4. Triple bogeys or worse per round compared with baseline over ten rounds.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written card of aim and club adjustments for four slope lies, and a recovery rule used on course for ten rounds."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find a sloping area at the club where practice is allowed"
                - "Hit five balls from each of the four slope lies"
                - "Write the aim and club adjustment for each slope on a card"
                - "Write a personal rule for chipping out sideways from trees"
            - name: Penalty relief options and local rules
              description: |-
                ## Purpose
                Knowing your options under the penalty area, unplayable ball and lost ball rules can save a stroke or two a round, and a wrong drop in a competition can cost far more. Learning the relief options properly, and reading your home club's local rules, means you take the cheapest legal option every time.

                ## Milestones
                1. Relief options for penalty areas, unplayable lies and lost balls written on one card.
                2. Your club's local rules, including any alternative to stroke and distance, read.
                3. Three real situations from your own rounds answered using the official rules app.
                4. One competition played without a rules question you could not answer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-card summary of relief options and your club's local rules, carried in the bag and checked against the official rules app."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Install the official rules of golf app from the governing body"
                - "Write relief options for each penalty situation on one card"
                - "Look up three rulings from your own recent rounds in the app"
                - "Re-read your home club's local rules each spring @recurring(yearly)"
            - name: Home course strategy hole by hole
              description: |-
                ## Purpose
                Club golfers hit driver on almost every par 4 and 5 and aim at almost every flag, whatever their dispersion. Writing a plan for each hole of your home course, with the tee club, the target line and the side to miss, turns the course you play most into the one where your handicap drops first.

                ## Milestones
                1. Your average score on each hole pulled from the stats log.
                2. A one-line plan for each of the 18 holes, with the club and target from the tee.
                3. The safe miss side for each green marked.
                4. Scores on the five highest-scoring holes compared after five rounds on the plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written 18-hole strategy for your home course used for five rounds, with scores on the five worst holes compared before and after."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List your average score on each hole from your stats log"
                - "Ask the agent to draft a one-line plan per hole from those averages"
                - "Mark the safe side to miss on every green"
                - "Play five rounds following the plan exactly"
            - name: Double bogey elimination audit
              description: |-
                ## Purpose
                For most golfers between 15 and 28, the handicap is set by double bogeys and worse, not by a shortage of birdies. Auditing the last ten rounds for every double or worse and naming the cause, whether a penalty, a three-putt, a duffed chip or a poor decision, gives a short list of fixes worth more than any new swing.

                ## Milestones
                1. Every double bogey or worse from the last ten rounds listed.
                2. A cause assigned to each one from a short fixed list.
                3. The two most common causes chosen as the focus for the next two months.
                4. Doubles per round compared after two months.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An audit of every double bogey or worse from ten rounds with causes tallied, and doubles per round compared after two months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every double bogey or worse from your last ten rounds"
                - "Assign each a cause such as penalty, three-putt, duffed chip or decision"
                - "Pick the two most frequent causes as your focus areas"
                - "Count doubles per round over the next two months"
            - name: Tee choice that matches your driving distance
              description: |-
                ## Purpose
                Playing from tees that are too long for your hitting distance means long irons into most greens and a handicap that underrates your short game. Matching the tees to your driver distance, then posting scores from those tees with the correct course rating, often makes the game easier and more enjoyable.

                ## Milestones
                1. Your average driver distance taken from the gapping session.
                2. The yardage of each set of tees at your club compared with a tee-to-distance guide.
                3. A tee set chosen and agreed with your regular group.
                4. The average approach club into par 4s compared from the old and new tees.

                ## Notes
                One widely used guide multiplies average driver distance by 28 to give a suitable 18-hole course length in yards. Your course handicap adjusts automatically when you change tees.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tee set chosen from your driver distance and the course yardages, agreed with your group and used for at least five rounds."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the total yardage of each tee set at your club"
                - "Multiply your average driver distance by 28 and compare"
                - "Agree the tee choice with your regular playing group"
                - "Play five rounds from the chosen tees"
            - name: Iron and wedge fitting decision
              description: |-
                ## Purpose
                Off-the-shelf irons with the wrong lie angle or shaft can send shots consistently left or right, but a new set is a big spend that will not fix a swing fault. A fitting with your own ball and stats, comparing two options, decides whether you need new clubs, an adjustment to your current set, or nothing at all.

                ## Milestones
                1. The decision framed as new set, adjustment of current clubs or no change.
                2. Lie angle and shaft checked by a qualified fitter.
                3. Two options compared on carry, dispersion and price.
                4. A decision recorded with the reason before any purchase.

                ## Notes
                Start from the **Purchase decision** template. If your swing is changing fast under a coach, finish the lesson block first; the fit should follow the new swing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on new irons, adjustment or no change, based on a fitting with carry and dispersion compared across two options."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down what you hope a fitting will fix"
                - "Book a fitting with a qualified fitter who uses a launch monitor"
                - "Compare two options on carry, dispersion and price"
                - "Record the decision and the reason before spending anything"
            - name: Golf ball choice test
              description: |-
                ## Purpose
                Switching between whatever balls are in the bag changes spin and distance from shot to shot, especially around the greens. Testing two or three models on chips, pitches and a mid iron, then playing one model only, removes a variable that costs you feel.

                ## Milestones
                1. Two or three ball models chosen in your price range.
                2. Each tested on 20 chips, 10 pitches and 10 mid irons.
                3. One model chosen and a season's supply budgeted.
                4. Every other ball model removed from the bag.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One golf ball model chosen after a side-by-side test on chips, pitches and irons, and the only model in the bag for the season."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Buy a sleeve each of two or three ball models in your price range"
                - "Test each on chips, pitches and a mid iron and note spin and feel"
                - "Choose one model and budget for a season's supply"
                - "Remove every other model from the bag"
            - name: Twelve-week fix for your dominant miss
              description: |-
                ## Purpose
                Most club golfers have one dominant miss, a slice, a hook, a thin or a fat, behind most of their worst holes. Working on that single fault with a coach for twelve weeks, with a drill, video checks and a measure of success agreed at the start, beats trying to rebuild the whole swing at once.

                ## Milestones
                1. The dominant miss named and measured by launch monitor or ball flight.
                2. A drill and a feel agreed with your coach.
                3. Video checks every four weeks showing the change.
                4. The miss frequency on course compared with the start after twelve weeks.

                ## Notes
                Start from the **Remediation plan** template. Expect scores to get worse for a few weeks before they improve; that is normal during a swing change.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A named dominant miss measured at the start and after twelve weeks, with its on-course frequency compared and recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down your most common miss and the holes it cost you"
                - "Ask your coach to measure the miss at the next lesson"
                - "Practise the agreed drill three times a week"
                - "Film the swing every four weeks to compare with the first clip"
            - name: Pre-shot routine and bad-shot reset
              description: |-
                ## Purpose
                Under competition pressure, players speed up, skip their read and make decisions while already standing over the ball. A consistent pre-shot routine, with the thinking done behind the ball and only the swing over it, plus a simple reset after a bad shot, keeps one poor hole from becoming three.

                ## Milestones
                1. A written routine with separate thinking and playing steps.
                2. The routine timed at under 30 seconds per shot.
                3. A reset phrase or action chosen for after a bad shot.
                4. The routine used on every shot for three rounds, with a partner counting skips.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written pre-shot routine under 30 seconds and a reset action, used on every shot for three rounds with a partner's count of skips."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your routine in two steps, deciding behind the ball and swinging over it"
                - "Time the routine on the range until it fits in 30 seconds"
                - "Choose a reset action for after a bad shot"
                - "Ask a playing partner to count shots where you skip the routine"
            - name: Launch monitor or practice net decision
              description: |-
                ## Purpose
                Home launch monitors and nets now cost less than a few seasons of range balls, but they suit some golfers far better than others. Deciding with a clear question, such as whether you will use it three times a week or only need it for winter, avoids an expensive gadget that ends up gathering dust.

                ## Milestones
                1. The job the device must do written down, such as gapping or winter practice.
                2. Space measured for ceiling height and hitting distance.
                3. Three options compared on accuracy, price and the data shown.
                4. A buy, borrow or skip decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A buy, borrow or skip decision on a launch monitor or net, recorded with the space measurements and three options compared."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write what you would use a launch monitor or net for each week"
                - "Measure the ceiling height and hitting distance at home"
                - "Compare three options on accuracy, price and the numbers shown"
                - "Record your decision to buy, borrow or skip"
            - name: First qualifying medal competition
              description: |-
                ## Purpose
                General play scores count toward your index, but competitions are where your game gets tested, and the first medal day can feel daunting. Preparing the entry, the rules on marking, a scorecard routine and a modest target turns the first competition into a learning day rather than a stressful one.

                ## Milestones
                1. A medal or stableford competition entered with your handicap.
                2. The competition rules, tee time and scoring format read before the day.
                3. The scorecard checked and signed correctly by you and your marker.
                4. A short review written on what went to plan and what did not.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first qualifying competition completed with a correctly signed card returned, and a written review of the day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the next medal or stableford competition on the club calendar"
                - "Enter the competition and note the tee time"
                - "Read how to mark and sign a card in stroke play"
                - "Write a five-line review the evening after the competition"
            - name: Club championship preparation
              description: |-
                ## Purpose
                A club championship over 36 holes, often played off scratch, tests stamina, focus and course management more than any weekly medal. Planning six weeks out, with practice rounds from the championship tees, a plan for each hole and food and kit for a long day, gives you the best chance of playing to your handicap when it matters.

                ## Milestones
                1. Entry submitted and the championship format confirmed.
                2. Two practice rounds played from the championship tees with notes on each hole.
                3. A hole-by-hole plan written for championship conditions.
                4. Food, water and kit planned for 36 holes in a day.
                5. A review written after the event.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The club championship played with a written hole-by-hole plan from two practice rounds, and a post-event review recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Check the club championship date and enter before the closing date"
                - "Play two practice rounds from the championship tees"
                - "Write a game plan for each hole based on the practice rounds"
                - "Plan food, water and spare gloves for 36 holes"
            - name: Matchplay knockout campaign
              description: |-
                ## Purpose
                Matchplay rewards a different game from stroke play: conceding nothing, playing to the opponent's position and knowing the holes where you give or receive a stroke. Preparing for the club knockout with the strokes worked out and a plan for common match situations helps you win holes rather than chase a score.

                ## Milestones
                1. The knockout entered and the deadline for each round noted.
                2. Handicap allowance and stroke holes worked out before each match.
                3. Opponents contacted and match dates agreed before each deadline.
                4. Each result recorded with one lesson learned.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every knockout match arranged before its deadline with strokes worked out in advance, and each result recorded with a lesson."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Enter the club matchplay knockout and note each round's deadline"
                - "Work out the strokes given or received using the handicap allowance"
                - "Contact your opponent within a week of the draw to set a date"
                - "Write down one lesson from each match"
            - name: Open competition at an unfamiliar course
              description: |-
                ## Purpose
                Open competitions at other clubs test whether your handicap travels, and an unfamiliar course punishes golfers who play it blind. Studying the course guide or flyover, booking a practice round where possible and writing a plan for the hardest holes keeps the unfamiliar from becoming expensive.

                ## Milestones
                1. One open competition chosen and entered, with its handicap limit checked.
                2. The course guide or flyover studied and a plan made for the five hardest holes.
                3. Travel planned to allow a full warm-up before the tee time.
                4. The score posted and compared with your home course average.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An open competition at another club played with a written plan for the five hardest holes, and the score posted and compared."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Search for open competitions within your handicap limit nearby"
                - "Enter one and confirm the entry fee and tee time"
                - "Study the course flyover and write a plan for the hardest holes"
                - "Plan the drive to arrive 45 minutes before the tee time"
            - name: Golf trip with handicap play
              description: |-
                ## Purpose
                Trips with friends can be the best golf of the season or a run of hurried rounds on courses picked for the bar. Choosing courses that suit the group's handicaps, agreeing a format with handicap allowances and posting scores where your system allows makes the trip count toward your improvement as well.

                ## Milestones
                1. Dates, budget and group size agreed.
                2. Courses chosen with slope ratings that suit the group's handicaps.
                3. A competition format with handicap allowances agreed in writing.
                4. Tee times, travel and accommodation booked.
                5. Scores posted from each eligible round.

                ## Notes
                Start from the **Trip** template.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A golf trip booked and played with an agreed handicap format, and eligible scores posted to your record."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree dates, budget and group size with your playing partners"
                - "Shortlist courses whose slope suits the group's handicaps"
                - "Agree a format and handicap allowances in writing"
                - "Book tee times, travel and rooms"
                - "Post scores from each eligible round"
            - name: Annual handicap review preparation
              description: |-
                ## Purpose
                Handicap committees review every member's index once a year and can adjust it when it no longer reflects demonstrated ability, often because few scores were posted or competition results stand out. Preparing your record and any context beforehand means a query is quick to answer and your index stays fair.

                ## Milestones
                1. The date of your club's annual review confirmed.
                2. Your record checked for missing or wrongly entered scores.
                3. Any context, such as injury or a long break, written in two or three lines.
                4. The committee's outcome recorded in your golf notes.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your handicap record checked before the annual review, with missing scores corrected and the committee's outcome recorded."
                cadence: cyclic
              tasks:
                - "Ask the handicap secretary when the annual review takes place"
                - "Check your record for missing or wrongly entered scores @recurring(yearly)"
                - "Write two lines of context on any injury or long break"
                - "Record the committee's outcome in your golf notes"
            - name: Retiree midweek golf and seniors section
              description: |-
                ## Purpose
                Retirement often brings the time to play three or four times a week, but more rounds alone rarely lower a handicap. Joining the seniors section, using quiet midweek mornings for practice and setting a weekly pattern of competition, social and practice golf turns the extra time into lower scores.

                ## Milestones
                1. Seniors or midweek section membership and competition calendar confirmed.
                2. A weekly pattern of rounds, practice sessions and rest days written down.
                3. At least one qualifying seniors competition a month entered.
                4. Quiet morning practice time used for short game and putting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written weekly golf pattern including practice sessions, with at least one qualifying competition a month entered for three months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the club about the seniors section and its competition calendar"
                - "Write a weekly pattern of rounds, practice and rest days"
                - "Enter the month's qualifying seniors competition @recurring(monthly:5)"
                - "Book a quiet midweek morning slot for short game practice"
            - name: Hybrids and lofted woods for slower swing speeds
              description: |-
                ## Purpose
                As swing speed falls with age, long irons stop launching high enough to hold a green, and the gap above a 7-iron becomes the weakest part of the bag. Replacing long irons with hybrids or lofted fairway woods, gapped on a launch monitor, gives back carry and height without changing the swing.

                ## Milestones
                1. Carry and peak height of your 4 to 6-irons measured.
                2. Hybrids or lofted woods tested at matching lofts.
                3. A decision recorded on which clubs to replace.
                4. The new clubs added to your yardage card.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on replacing long irons recorded after a launch monitor comparison of carry and height, with the yardage card updated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Measure carry and peak height of your 4 to 6-irons on a launch monitor"
                - "Test a hybrid or lofted wood at matching lofts"
                - "Decide which long irons to replace and record why"
                - "Add the new clubs to your yardage card"
            - name: Golf around a back or joint condition
              description: |-
                ## Purpose
                Back, hip, shoulder and knee problems are common among regular golfers, especially over 60, and many keep swinging through pain until a long lay-off follows. Agreeing with your physiotherapist or doctor what movement is safe, then asking your coach to adapt the swing to fit it, keeps you playing and keeps your index active.

                ## Milestones
                1. Your clinician's guidance on safe movement and any limits written down.
                2. Swing adaptations, such as a shorter backswing or flared feet, agreed with your coach.
                3. A pre-round warm-up approved by your clinician.
                4. Rounds played per month and any pain recorded for three months.

                ## Notes
                This organises professional advice; it does not replace it. If pain changes or worsens, stop and speak to your clinician before the next round.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Written guidance from your clinician on safe golf movement, swing adaptations agreed with your coach, and three months of rounds and pain recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Book an appointment with your physiotherapist or doctor about golf"
                - "Write down the movements they advise you to limit"
                - "Share those limits with your coach and agree swing adaptations"
                - "Log rounds played and any pain after each one"
            - name: Lowering your handicap on three hours a week
              description: |-
                ## Purpose
                Working golfers with children or caring duties often have one round and an hour of practice a week at most. Spending that hour almost entirely on putting and wedges, choosing nine-hole qualifying rounds when 18 will not fit and dropping aimless range sessions makes steady progress possible on very little time.

                ## Milestones
                1. A weekly golf budget of three hours split between one round and one practice session.
                2. The practice hour planned around putting and wedges.
                3. Nine-hole qualifying rounds used when 18 holes will not fit.
                4. Index progress tracked monthly for six months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six months of a three-hour weekly golf plan, with nine-hole scores posted where needed and the index recorded monthly."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Plan the practice hour around putting and wedges only"
                - "Check that your club accepts nine-hole qualifying scores"
                - "Block next week's practice hour and round in the family calendar @recurring(weekly:fri)"
                - "Post a nine-hole score whenever 18 holes do not fit"
            - name: Returning to golf after a long lay-off
              description: |-
                ## Purpose
                Coming back after a year or more away often means a lapsed index, clubs that no longer suit you and expectations stuck at your best ever handicap. Rebuilding with a reinstated index, a refresher lesson and modest targets for the first three months avoids the frustration that drives many people away again.

                ## Milestones
                1. Your handicap status checked and reinstated or reissued.
                2. A refresher lesson taken to check grip, set-up and alignment.
                3. Carry distances re-measured for every club.
                4. A three-month target set from your current scores, not your old best.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An active handicap index, a refresher lesson completed, re-measured carry distances and a three-month target written from current scores."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the club or golf body how to reinstate your old handicap"
                - "Book one refresher lesson on grip, set-up and alignment"
                - "Re-measure carry distances for every club after the lesson"
                - "Set a three-month target from your first five rounds back"
            - name: Winter golf on mats and temporary greens
              description: |-
                ## Purpose
                Winter rules, temporary greens and shortened courses can make scores non-qualifying or very different from summer ones, and many golfers lose their feel by spring. Planning the winter around indoor or simulator sessions, short game practice under cover and the rounds that still count keeps the index active and the swing intact.

                ## Milestones
                1. Your club's winter rules and which rounds still count for handicap confirmed.
                2. An indoor option, such as a simulator or covered bay, booked for the season.
                3. A weekly winter routine of putting, chipping and swing work written.
                4. Spring's first five rounds compared with autumn's last five.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A winter routine with indoor practice booked, and spring's first five rounds compared with autumn's last five."
                cadence: cyclic
              tasks:
                - "Ask the club which winter rounds count for handicap"
                - "Book a simulator or covered bay for regular winter sessions"
                - "Write a weekly winter routine of putting, chipping and swing work"
                - "Restart the winter practice routine as the clocks change @recurring(yearly)"
            - name: Driver clubhead speed training block
              description: |-
                ## Purpose
                Each extra mile per hour of driver clubhead speed adds roughly two to three yards of carry, and structured overspeed training with lighter and heavier clubs or sticks has helped many players gain speed in eight to twelve weeks. Running a measured block, with a baseline, three short sessions a week and a retest, shows whether it works for you.

                ## Milestones
                1. Baseline driver clubhead speed measured on a launch monitor or radar.
                2. An eight-week speed programme chosen and its sessions scheduled.
                3. Peak speed recorded at every session.
                4. A retest at week eight with carry distances re-measured.

                ## Notes
                Start from the **Training program** template. Check with your clinician first if you have back or shoulder problems; speed work is demanding on both.
              priority: low
              deadlineOffsetDays: 70
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Baseline and week-eight driver clubhead speed recorded on the same device, with carry distances re-measured after the block."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Measure your driver clubhead speed on a launch monitor or radar"
                - "Choose an eight-week speed programme and schedule three sessions a week"
                - "Record peak speed at the end of every session"
                - "Retest speed and carry at week eight on the same device"
            - name: Pressure and random practice games
              description: |-
                ## Purpose
                Hitting forty 7-irons in a row builds range confidence that rarely transfers to the course, where every shot is different and has consequences. Random practice, changing club and target every ball, plus games with a score to beat, builds skill that holds up in a medal round.

                ## Milestones
                1. Two random practice formats written, one for the range and one for the short game.
                2. One pressure game with a target score chosen.
                3. Half of all range sessions using random practice for eight weeks.
                4. Best scores in each game logged over time.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of practice with at least half of range sessions in random format, and pressure game scores logged each week."
                cadence: rolling
              tasks:
                - "Write a random range routine that changes club and target every ball"
                - "Choose a short game pressure game with a score to beat"
                - "Play a nine-hole range round, imagining each hole of your home course"
                - "Play the pressure game and log the score @recurring(weekly:sat)"
            - name: Personal yardage book and green notes
              description: |-
                ## Purpose
                Competitive amateurs and low handicappers play from detailed notes: carries over bunkers, the front and back of each green and the main slopes on each putting surface. Building your own book for your home course, from a rangefinder or GPS and walks of each green, gives you numbers no scorecard shows.

                ## Milestones
                1. Carry distances to key bunkers and hazards measured for every hole.
                2. Front, middle and back yardages noted for each green.
                3. The main slope and fall line of each green sketched.
                4. The book used in competition and corrected after each round.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A yardage book for 18 holes with hazard carries, green depths and slope sketches, used in at least three competitions."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Walk the course with a rangefinder and note hazard carries"
                - "Record front, middle and back yardages for each green"
                - "Sketch the main slope on each green during a quiet evening walk"
                - "Ask the agent to lay out your notes as a printable pocket book"
            - name: Elite amateur event season plan
              description: |-
                ## Purpose
                Players in low single figures who want to go further face a different calendar: regional and national amateur events with handicap limits, entry ballots and stroke play qualifying. Mapping the events open to your index, building a season around three or four of them and preparing for each as a championship turns a good club golfer into a tested competitor.

                ## Milestones
                1. A list of amateur events within your handicap limit for next season.
                2. Three or four target events chosen with entry deadlines noted.
                3. Entries submitted and practice rounds planned.
                4. Results and strokes gained from each event reviewed with your coach.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A season plan with at least three amateur events within your handicap limit entered before their deadlines, and results reviewed with your coach."
                cadence: cyclic
              tasks:
                - "List amateur events within your handicap limit from your golf body's calendar"
                - "Choose three or four events and note each entry deadline"
                - "Submit entries and book a practice round for each"
                - "Review each event's results with your coach"
---

# Golf Handicap Improvement

Handicaps fall when practice, play and record keeping all point at the same weak spots, and this area is written for club golfers, competitive amateurs and retirees with time to play more. It starts with foundations (an official index, a stats baseline, carry gapping, a coach and a target), moves through the weekly and monthly machinery of logging and practice, then short game and long game skills, course management and equipment decisions, competitions from the first medal to the club championship, versions for retirees, time-poor players, comebacks and winter, and finishes with specialist work such as speed training, yardage books and elite amateur events.

The rhythms that repeat are a Sunday stats entry, Monday practice planning, midweek short game and home putting sessions, a monthly index check on the 3rd, monthly swing filming, a quarterly strokes gained review and a yearly regrip and season review. The Metrics log, Habit tracker, Purchase decision, Remediation plan, Trip and Training program templates pair with the projects that point to them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
