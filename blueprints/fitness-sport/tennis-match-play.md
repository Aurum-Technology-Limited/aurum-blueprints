---
id: fitness-sport.tennis-match-play
name: Tennis Match Play
description: "Tennis that improves on purpose: an honest rating, the right racket, strings and shoes, weekly lessons and drills, a match log, stroke and doubles skills, and preparation for leagues, club championships and tournaments."
category: personal
version: 1.0.0
tags: [fitness-sport, tennis-match-play, athlete, everyone, racket-sport, doubles, league, tournament]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - training-program
    - trip
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Tennis Match Play
          description: "Improving tennis strokes, match tactics and fitness through lessons, league matches and tournament play for club and recreational players."
          projects:
            - name: Finding your playing level and rating
              description: |-
                ## Purpose
                Leagues, tournaments and club ladders all sort players by level, and entering one that is two steps too hard or too easy wastes a season. Checking your rating on the system your club or federation uses, or asking a coach to place you on a published scale, gives you an honest starting number to enter events and measure progress against.

                ## Milestones
                1. The rating system used by your club, league or national federation identified.
                2. A current rating found, or a provisional one agreed with a coach after watching you play.
                3. Three players you know at that level named as a reality check.
                4. The rating and its date written at the top of your match log.

                ## Notes
                Self-ratings are usually half a step too generous. If your own view and the coach's differ, enter events at the lower of the two for the first season.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A current rating on the system your league uses, recorded with its date and confirmed by a coach or an official listing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the club secretary which rating system local leagues and tournaments use"
                - "Look up your current rating or create a player profile on that system"
                - "Ask a coach to watch twenty minutes of play and place you on the scale"
                - "Recheck your rating once the league season has finished @recurring(yearly)"
            - name: Racket chosen after demoing three frames
              description: |-
                ## Purpose
                A racket bought on looks or a professional's name often ends up too heavy, too stiff or too head-light for the person swinging it. Demoing three frames in the same fortnight, with similar strings and on the same court, lets you compare control, power and arm comfort directly before spending.

                ## Milestones
                1. Your current racket's weight, balance, head size and grip size written down.
                2. Three demo frames chosen across a spread of weight and head size, strung at similar tension.
                3. Each frame hit for at least one full session including serves and volleys, with notes.
                4. One frame bought in the right grip size and the demo frames returned.

                ## Notes
                Start from the **Purchase decision** template. Grip size matters more than most people think: a grip that is too small makes you squeeze harder, which tires the forearm.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A racket bought after at least three demo sessions, with the comparison notes and the chosen grip size recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure your grip size from the palm crease to the tip of the ring finger"
                - "Ask a tennis shop or the club about its demo racket scheme"
                - "Hit each demo frame for a full session and score it out of ten"
                - "Buy the winning frame in your grip size and note its specifications"
            - name: String type and tension for your game
              description: |-
                ## Purpose
                Strings change how a racket plays as much as the frame does, and the factory string in most new rackets is a placeholder. Choosing between a polyester, a multifilament or a hybrid, and settling on a tension, gives you a set-up you can repeat at every restring and adjust one variable at a time.

                ## Milestones
                1. How often you break strings and how your arm feels after play written down.
                2. Two string set-ups tried for at least three sessions each.
                3. A chosen string, gauge and tension recorded with your stringer.
                4. A note of what to change first if the ball starts flying long or the arm aches.

                ## Notes
                Full polyester suits frequent hard hitters who break strings, but is often harsh on the arm for club players. A multifilament or a hybrid is a safer default.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A string type, gauge and tension chosen after testing two set-ups, and recorded with your stringer for repeat orders."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note how many hours your current strings last before breaking or going dead"
                - "Ask your stringer for two set-ups to compare for your style of play"
                - "Play three sessions on each set-up and write a line after each"
                - "Give the stringer your final string and tension to keep on file"
            - name: Court shoes matched to your main surface
              description: |-
                ## Purpose
                Running shoes have little lateral support, and the wrong sole on clay or grass makes you slide where you meant to stop, which is how ankles roll. Buying tennis shoes with an outsole made for the surface you play on most, and replacing them before the tread is gone, is cheap protection for every session.

                ## Milestones
                1. Your main court surface named: hard, clay, artificial grass, grass or indoor carpet.
                2. Two or three tennis shoes tried on in the afternoon with your playing socks.
                3. A pair bought with the right outsole for that surface.
                4. A replacement point agreed, such as when the toe drag area wears smooth.

                ## Notes
                Many clubs ban shoes that mark or damage their courts, so check the club's footwear rule before buying.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Tennis shoes with an outsole suited to your main surface bought and worn, with the club footwear rule checked first."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the club's footwear rule for each court surface"
                - "Try on tennis shoes in the afternoon wearing your playing socks"
                - "Buy a pair with the outsole made for your main surface"
                - "Check the outsole and toe area for smooth worn patches @recurring(monthly:20)"
            - name: Club, park courts or coaching centre decision
              description: |-
                ## Purpose
                Where you play decides who you meet, how often you can get a court, and whether leagues and coaching are on the doorstep. Comparing a club, public park courts and a coaching centre on cost per hour played, booking rules, floodlights and the standard of play makes the choice once instead of drifting between venues.

                ## Milestones
                1. Three venues within a realistic travel time listed.
                2. Each scored on annual cost, cost per hour played, booking rules, floodlights, surfaces and the standard of members.
                3. An open day or trial session attended at the top two.
                4. A venue chosen and joined, with its booking rules saved.

                ## Notes
                Work out the cost per hour played, not just the fee. A club you use three times a week is often cheaper per hour than park courts you rarely book.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A venue joined after three were compared on cost per hour, booking rules, floodlights and standard of play."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every club, park and centre within twenty minutes of home or work"
                - "Compare annual fees with the cost per hour you expect to play"
                - "Attend an open day or trial session at the top two"
                - "Join your chosen venue and save its booking rules"
                - "Review whether the membership still fits before renewing @recurring(yearly)"
            - name: Filmed baseline of every stroke
              description: |-
                ## Purpose
                What you feel you are doing on a forehand and what the camera shows are rarely the same. Filming each stroke from the side and from behind at the start gives you and any coach a reference to compare against, so later changes are judged on footage rather than memory.

                ## Milestones
                1. Forehand, backhand, serve, return, both volleys and the overhead each filmed from the side and from behind.
                2. Clips saved in one folder, named by stroke and date.
                3. Three observations per stroke written beside the clips.
                4. The clips shared with your coach or a stronger player for comment.

                ## Notes
                A phone on a fence clip at hip height is enough. Film at least ten repetitions of each stroke so you see the pattern, not one good or bad swing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated folder of side and rear clips for all seven strokes, with notes, shared with a coach or stronger player."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Buy or borrow a fence clip that holds a phone at hip height"
                - "Film ten repetitions of each stroke from the side and from behind"
                - "Name and file the clips by stroke and date"
                - "Send the clips to your coach with three questions"
            - name: Season goal for your tennis year
              description: |-
                ## Purpose
                Without a goal, tennis drifts into the same social hit every week, which is fine until you wonder why nothing has changed in three years. One written goal for the season, such as reaching the next rating band, climbing the club ladder or making a league team, decides which lessons, drills and events earn your limited court time.

                ## Milestones
                1. One main goal and at most two supporting goals written for the season.
                2. Each goal tied to something measurable: a rating, a result, a selection or a statistic.
                3. The two or three events that matter most marked in the calendar.
                4. The goals shared with your coach or main hitting partner.

                ## Notes
                A process goal, such as a first serve percentage above 60, is easier to control than a result goal. Pair one of each.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written season goal with one measurable target, key events dated and the goal shared with a coach or partner."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one measurable tennis goal for this season"
                - "Add one process goal you can control in every match"
                - "Mark the two or three most important events in your calendar"
                - "Share the goals with your coach or main hitting partner"
            - name: Pool of four regular hitting partners
              description: |-
                ## Purpose
                Relying on one hitting partner means every holiday, injury or busy week cancels your tennis. A pool of four players near your standard, with their availability and preferred formats noted, keeps two sessions a week happening and gives you variety of opponent.

                ## Milestones
                1. Four players within half a rating band of you listed with contact details.
                2. Each partner's usual free times and preferred format noted: singles, doubles or drills.
                3. A first session played with each of the four.
                4. A simple way to fill gaps agreed, such as a group chat or the club's partner finder.

                ## Notes
                Include one player slightly better than you and one slightly weaker. The stronger one stretches you; the weaker one gives you room to try new shots.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four named hitting partners near your standard, with availability recorded and at least one session played with each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your coach or club captain for names of players at your level"
                - "Post on the club partner board or group chat for regular hits"
                - "Play a first session with each new partner"
                - "Write each partner's free times and favourite format in one list"
            - name: Match bag and on-court kit checklist
              description: |-
                ## Purpose
                Snapped strings with no spare racket, no overgrip on a humid evening or no water on a hot afternoon have cost club players matches they were winning. A standing checklist for the bag, packed the night before, means the match is decided by tennis rather than by what was left at home.

                ## Milestones
                1. A checklist covering rackets, spare overgrips, balls, water, snacks, towel, spare socks, cap and plasters.
                2. A spare racket strung with the same string and tension as the first.
                3. The checklist kept inside the bag or on your phone.
                4. The bag packed from the list before three matches in a row.

                ## Notes
                Start from the **Operational checklist** template. Add any league paperwork, such as a scorecard or team sheet, for fixture days.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written match bag checklist used to pack before three consecutive matches with nothing forgotten."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a bag checklist from the operational checklist template"
                - "Get the spare racket strung to the same specification"
                - "Pack the bag from the list the night before your next match"
                - "Add anything you were missing after the match to the checklist"
            - name: Scoring, rules and self-calling etiquette
              description: |-
                ## Purpose
                Most club and league matches have no umpire, so players call their own lines and keep their own score, and disputes usually come from not knowing the rules or the conventions. Learning the ones that cause arguments, such as lets, foot faults, touching the net and when a call must be made, makes you a player people want to play again.

                ## Milestones
                1. The official rules of tennis read, with the guidance on matches without an umpire marked.
                2. Tiebreak, match tiebreak and no-ad scoring understood well enough to explain.
                3. The conventions for calling your own lines summarised in five lines.
                4. Your league's local rules on balls, warm-up length and retirements noted.

                ## Notes
                The usual convention is that a ball you cannot call out with certainty is in, and that calls are made promptly and clearly.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A five-line summary of self-calling conventions and your league's local rules written, and tiebreak scoring explained correctly to a partner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the current rules of tennis from your national federation"
                - "Read the guidance for matches played without an umpire"
                - "Write a five-line summary of the line-calling conventions"
                - "Find your league's local rules on warm-up, balls and retirements"
            - name: Weekly lesson with between-lesson homework
              description: |-
                ## Purpose
                A lesson a week only builds anything if what the coach said is practised before the next one. Writing down the coach's three points within an hour of each lesson, then spending part of the next practice on them, turns forty-five minutes of instruction into a week of focused work.

                ## Milestones
                1. A regular weekly lesson slot booked for at least eight weeks.
                2. A lesson note holding three points from every lesson.
                3. Each point practised in at least one session before the next lesson.
                4. A review with the coach every eighth lesson on what has stuck.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of lessons, each with three written homework points practised before the following lesson."
                cadence: rolling
              tasks:
                - "Book a weekly lesson slot for the next eight weeks"
                - "Write three homework points within an hour of the lesson @recurring(weekly:thu)"
                - "Open your next practice with ten minutes on the homework points"
                - "Ask the coach every eighth lesson which points have stuck"
            - name: Structured drill session with a hitting partner
              description: |-
                ## Purpose
                Hitting up and down the middle for an hour feels like practice but rarely changes anything in a match. A planned session of four or five drills, each with a target and a score, such as crosscourt rallies into a cone zone or serve and first-ball patterns, gives the hour a purpose both players agree on.

                ## Milestones
                1. A bank of ten drills written down with a target and a scoring rule for each.
                2. A weekly session with a partner that uses four drills from the bank.
                3. Scores from each drill noted so improvement shows.
                4. The drill bank refreshed every couple of months with drills from your coach.

                ## Notes
                Agree the plan before you walk on court. Ten minutes of warm-up, four drills of about ten minutes each, then points to finish works well for an hour.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written bank of ten scored drills and at least eight weekly drill sessions logged with their scores."
                cadence: rolling
              tasks:
                - "Write ten drills with a target and a scoring rule for each"
                - "Agree four drills with your partner before you walk on court"
                - "Run a scored drill session with a hitting partner @recurring(weekly:tue)"
                - "Note each drill score next to the date in your log"
            - name: Solo serve basket session
              description: |-
                ## Purpose
                The serve is the one shot you can practise alone and the one that starts half the points you play. Thirty minutes with a basket of balls, aiming at targets in each service box, does more for a club player's results than almost any other solo session.

                ## Milestones
                1. A basket or bag of at least forty used balls and four cone or towel targets.
                2. A routine of first serves to the wide, body and T targets, then second serves with spin.
                3. Hit rates on each target counted and written down every session.
                4. A first serve percentage target for matches set from the counts.

                ## Notes
                Use the same ball toss and pre-serve routine you use in matches, so the practice transfers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least eight solo serve sessions logged with target hit rates for first and second serves."
                cadence: rolling
              tasks:
                - "Collect forty used balls and four targets for a serve basket"
                - "Book a court for a thirty-minute serve basket session @recurring(weekly:sat)"
                - "Count the serves landing in each target zone"
                - "Write the hit rates for first and second serves in the log"
            - name: Match log with score, stats and one lesson
              description: |-
                ## Purpose
                Memory keeps the dramatic points and loses the pattern, so players repeat the same losses for years. A short log after every match, with score, opponent, surface, a few stats you can count and one lesson, turns a season of results into evidence about what to practise.

                ## Milestones
                1. A log with columns for date, opponent, rating, surface, score, double faults, unforced errors and one lesson.
                2. Every competitive match logged within a day.
                3. Twenty matches in the log.
                4. The log used as the starting point of each monthly review.

                ## Notes
                Start from the **Metrics log** template. Pick stats you can count without help, or ask a friend to count one set for you.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A match log holding twenty matches, each with the score, at least two counted stats and one written lesson."
                cadence: rolling
              tasks:
                - "Set up a match log from the metrics log template"
                - "Ask a friend to count your double faults and unforced errors for one set"
                - "Fill in the match log for the week's matches @recurring(weekly:sun)"
                - "Write one lesson per match in a single sentence"
            - name: Restringing and overgrip schedule
              description: |-
                ## Purpose
                Strings lose tension and liveliness long before they break, so many club players are hitting with dead strings and blaming their technique. A restring schedule based on how often you play, with a fresh overgrip whenever the grip turns smooth or shiny, keeps the racket feeling the same from week to week.

                ## Milestones
                1. A restring interval set from your weekly playing hours.
                2. Your string and tension kept on file with one stringer.
                3. A dated note of each restring.
                4. Spare overgrips kept in the bag and fitted on a regular day.

                ## Notes
                A common rule of thumb is to restring as many times a year as you play each week. Frequent hitters using polyester often need it sooner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A restring interval set and followed for two cycles, with each restring dated and overgrips changed on schedule."
                cadence: rolling
              tasks:
                - "Work out a restring interval from your weekly hours on court"
                - "Book the restring with your stringer @recurring(quarterly)"
                - "Fit a fresh overgrip on both rackets @recurring(monthly:9)"
                - "Record the date and tension of each restring"
            - name: Tennis footwork and court-speed conditioning
              description: |-
                ## Purpose
                Tennis is short bursts of three to five metres, a stop, a stroke and a recovery, repeated for two hours, which is why runners can be fit and still late to the ball. Two short sessions a week of ladder work, change-of-direction drills and repeated sprints with rests that match point length build the fitness a three-set match asks for.

                ## Milestones
                1. A written programme of two sessions a week, each under forty minutes.
                2. A spider drill time on court recorded as a starting point.
                3. Eight weeks of sessions completed.
                4. The spider drill retested and compared with the start.

                ## Notes
                Start from the **Training program** template. If you have an injury or a health condition, agree the programme with a physio or coach before adding sprint work.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of twice-weekly tennis conditioning completed, with spider drill times recorded at the start and the end."
                cadence: rolling
              tasks:
                - "Write a two-session conditioning plan from the training program template"
                - "Time a spider drill on court as your baseline"
                - "Do a footwork and repeat sprint session @recurring(weekly:mon,fri)"
                - "Retest the spider drill after eight weeks"
            - name: Pre-match warm-up hitting routine
              description: |-
                ## Purpose
                Club matches often allow five minutes of knock-up, and players who spend it rallying from the baseline walk out with cold volleys, no overheads and an untested serve. A fixed routine, from a few minutes of movement off court through mini tennis, baseline, volleys, overheads and serves, means the first game is played with every stroke already hit.

                ## Milestones
                1. A ten-minute off-court movement routine written down.
                2. An on-court knock-up order that touches every stroke in five minutes.
                3. The routine used before five matches in a row.
                4. One adjustment made after reviewing how the first games went.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written warm-up and knock-up routine used before five consecutive matches."
                cadence: rolling
              tasks:
                - "Write a ten-minute off-court movement routine"
                - "Plan a five-minute knock-up order covering every stroke"
                - "Use the routine before your next five matches"
                - "Note how the first two games felt after each warm-up"
            - name: League fixture and availability routine
              description: |-
                ## Purpose
                Team league tennis runs on captains chasing availability, and players who reply late or drop out the night before soon stop being picked. Putting every fixture in the calendar at the start of the season and confirming availability a month ahead makes you the reliable player a captain builds around.

                ## Milestones
                1. Every fixture for your team in your calendar with venue and start time.
                2. Availability for the next four fixtures sent to the captain.
                3. Travel and lifts agreed for away matches.
                4. Results and scorecards submitted on time after home matches you host.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All season fixtures in your calendar and availability confirmed at least four weeks ahead for every fixture."
                cadence: cyclic
              tasks:
                - "Copy every fixture for your team into your calendar"
                - "Send the captain your availability for the next four fixtures @recurring(monthly:3)"
                - "Agree lifts for away matches with teammates"
                - "Check the league rules on reserves and late withdrawals"
            - name: Monthly tennis review against the season goal
              description: |-
                ## Purpose
                Once a month, thirty minutes with the match log and lesson notes shows whether the season goal is getting closer or just being hoped for. Choosing one thing to keep, one to stop and one to try next month keeps the plan honest without rewriting it every week.

                ## Milestones
                1. A monthly review slot in the calendar.
                2. The month's matches, practice sessions and lesson points counted.
                3. Progress on the season goal stated as a number or a plain yes or no.
                4. One keep, one stop and one try written for next month.

                ## Notes
                Count sessions as well as results. A bad month of results with full practice is a different problem from a good month of results with no practice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly reviews completed, each with a progress figure and one keep, one stop and one try."
                cadence: rolling
              tasks:
                - "Pull the month's match log and lesson notes into one view"
                - "Count the month's matches, practice sessions and lessons"
                - "Hold a thirty-minute tennis review against the season goal @recurring(monthly:28)"
                - "Write one keep, one stop and one try for next month"
            - name: Quarterly video re-check of strokes
              description: |-
                ## Purpose
                Technique changes are slow and hard to feel, so players either give up on a change that is working or persist with one that is not. Refilming the same strokes from the same angles every quarter and setting them beside the earlier clips shows what has actually changed.

                ## Milestones
                1. Strokes filmed from the same positions as the baseline clips.
                2. A side by side comparison with the previous clips for each stroke.
                3. One change confirmed and one still missing noted per stroke.
                4. The comparison shared with your coach.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Four quarterly refilms in a year, each compared side by side with the previous clips and notes written per stroke."
                cadence: cyclic
              tasks:
                - "Refilm your strokes from the baseline camera positions @recurring(quarterly)"
                - "Put new and old clips side by side for each stroke"
                - "Write what has changed and what has not for each stroke"
                - "Show the comparison to your coach at the next lesson"
            - name: Crosscourt rally consistency to twenty balls
              description: |-
                ## Purpose
                Club matches are won by the player who misses less, and most points below a high standard end within four shots. Building to twenty crosscourt balls in a row on both wings, with height over the net and depth past the service line, raises the bar every opponent has to clear.

                ## Milestones
                1. Your current longest crosscourt rally on each wing counted.
                2. Ten in a row on forehand and backhand crosscourt.
                3. Twenty in a row on both wings with every ball landing past the service line.
                4. Twenty in a row held at match pace with a stronger partner.

                ## Notes
                Aim a metre or more over the net. Most club errors go into the net, not long.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty consecutive crosscourt balls past the service line achieved on both forehand and backhand, counted by a partner."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Count your longest crosscourt rally on each wing with a partner"
                - "Mark a target zone past the service line with cones or towels"
                - "Practise crosscourt rallies aiming a metre over the net"
                - "Record the best rally count on each wing after every session"
            - name: Second serve with kick or slice you trust
              description: |-
                ## Purpose
                Double faults hand over free points and, worse, make players push the first serve in at half pace. A second serve with enough spin to clear the net by a safe margin and drop in, practised until it holds under pressure, lets you swing freely on both serves.

                ## Milestones
                1. Your current double faults per set counted over three matches.
                2. A spin serve grip and toss agreed with your coach.
                3. Eight in ten second serves landing in during practice.
                4. Double faults per set halved over the next three matches.

                ## Notes
                Most coaches teach the continental grip for spin serves. A grip change feels worse before it feels better, so give it several weeks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Second serves land eight times in ten in practice and double faults per set halve compared with the starting count."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Count double faults per set in your next three matches"
                - "Ask your coach to set your spin serve grip and toss"
                - "Hit fifty second serves and count how many land in"
                - "Play practice sets where each server gets only one serve"
            - name: Return of serve, block and drive
              description: |-
                ## Purpose
                The return is the second most played shot in tennis and the least practised by club players. Learning to block a big serve back deep and drive a weak one, and to choose between them before the server tosses, takes away the easy points servers rely on.

                ## Milestones
                1. Returns put in play counted over three matches.
                2. A ready position and return stance set with a coach.
                3. Block returns landing past the service line against a partner serving at full pace.
                4. Return in play rate improved in matches compared with the first count.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Return in play rate counted in three matches before and three after practice, with an improvement recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Count how many returns you put in play over three matches"
                - "Ask a partner to serve at full pace for twenty minutes of returns"
                - "Practise blocking returns deep with a short backswing"
                - "Decide block or drive on each return before the server tosses"
            - name: Approach shot, volley and the move to net
              description: |-
                ## Purpose
                Many club players are stuck at the baseline because the move forward feels risky, yet a decent approach and a solid first volley finish points quickly against steady opponents. Learning when to come in, where to place the approach and how to split step before the volley adds a second way to win.

                ## Milestones
                1. Short balls you could have attacked counted in one match.
                2. Down the line approaches landing in a target zone seven times in ten.
                3. First volleys drilled from mid court after an approach.
                4. At least five net approaches per set made in matches.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least five net approaches per set made in three consecutive matches, with points won at net counted."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Count the short balls you let go by in your next match"
                - "Practise approach shots down the line to a target zone"
                - "Drill the first volley from the service line after an approach"
                - "Count net points won and lost in the next three matches"
            - name: Overhead smash and lob defence
              description: |-
                ## Purpose
                A lob is the obvious answer to a net player, and an overhead that misses half the time makes every approach a gamble. Practising the turn, the pointing arm and the footwork back, together with a deep defensive lob of your own, closes one of the commonest gaps in club doubles.

                ## Milestones
                1. Overhead success rate counted from twenty fed lobs.
                2. Side turn, pointing arm and backward footwork drilled with a coach.
                3. Fifteen in twenty overheads landing in from fed lobs.
                4. Defensive lobs landing past the service line in a rally drill.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fifteen in twenty fed overheads landing in, counted with a partner, and defensive lobs landing deep in a rally drill."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Count overheads in from twenty lobs fed by a partner"
                - "Ask your coach to check your turn and pointing arm"
                - "Practise moving backwards to lobs over your head"
                - "Practise deep defensive lobs from the baseline"
            - name: Split step timing and recovery footwork
              description: |-
                ## Purpose
                Late contact usually starts with the feet, not the arm: a split step that lands too late or a recovery that stops short of the right position. Timing the split step to the opponent's contact and recovering to the middle of their possible angles makes every stroke easier to hit.

                ## Milestones
                1. Footage of your split step timing in a rally reviewed.
                2. Split steps landing on the opponent's contact in a fed drill.
                3. Recovery steps toward the centre of the angle practised after each shot.
                4. Better timing visible in footage from a match.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Match footage shows the split step landing as the opponent strikes the ball on most shots, confirmed by a coach."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Film a rally and check when your split step lands"
                - "Practise split steps timed to a partner's contact in a fed drill"
                - "Do ten minutes of shadow footwork with recovery steps @recurring(weekly:wed)"
                - "Film a match and compare split step timing with the first clip"
            - name: Backhand slice for defence and change of pace
              description: |-
                ## Purpose
                Two-handed backhand players often have no answer to a wide ball they cannot reach with both hands, and a slice is that answer. A low skidding slice also breaks the rhythm of opponents who like the ball at hip height, and is the basis of the approach and the drop shot.

                ## Milestones
                1. A continental grip slice with a high to low swing path set with a coach.
                2. Ten slices in a row landing deep crosscourt.
                3. The slice used to defend a wide ball in a live drill.
                4. The slice used as a change of pace at least three times per set in a match.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten consecutive deep crosscourt slices in practice and at least three deliberate slices per set in a match."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your coach to set a continental slice grip and swing path"
                - "Hit slices crosscourt aiming past the service line"
                - "Play a drill where your partner feeds wide to your backhand"
                - "Use the slice three times a set in your next match"
            - name: Doubles positioning, poaching and signals
              description: |-
                ## Purpose
                Most club and league tennis is doubles, yet many pairs stand in the same place all match and the net player rarely moves. Learning the standard formations, when to poach, how to cover the lob and a simple set of signals makes a pair far harder to beat than two good singles players.

                ## Milestones
                1. One up one back, both up and the I formation understood and tried.
                2. A poach practised with a partner using a called or hand signal.
                3. Rules agreed with your partner for who takes the middle and who covers the lob.
                4. At least two poaches per set made in a match.

                ## Notes
                A common default is that the player crosscourt from the ball takes the middle, because they usually have more angle. Agree it before the match, not after the first mix-up.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three formations tried in practice and at least two poaches per set made in a league or club doubles match."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree simple serving signals with your regular doubles partner"
                - "Practise poaching from a fed serve and return drill"
                - "Agree who takes middle balls and who covers lobs"
                - "Count poaches and the points won from them in your next match"
            - name: Between-point routine and match nerves
              description: |-
                ## Purpose
                Tennis has more dead time than live time, and what happens in the twenty seconds between points decides how the next one is played. A short routine of turning away, settling the strings, a slow breath and a decision on the next play, rehearsed in practice, keeps nerves and a bad call from running the match.

                ## Milestones
                1. A four-step between-point routine written down.
                2. The routine used in every practice set for two weeks.
                3. A changeover routine added: drink, review, one plan for the next games.
                4. A note after each match on when the routine slipped.

                ## Notes
                If competition nerves are affecting sleep, work or wellbeing, speak to your doctor or a qualified sport psychologist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A written between-point and changeover routine used in practice for two weeks and reviewed after five matches."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a four-step routine for the time between points"
                - "Use the routine in every practice set for two weeks"
                - "Add a changeover routine with one plan for the next games"
                - "Note after each match when the routine slipped and why"
            - name: Choosing a coach for private or group lessons
              description: |-
                ## Purpose
                Coaches differ widely in qualifications, teaching style and the standard of player they work best with. Asking three coaches the same questions, and taking a trial lesson with the top two, finds someone who can explain the change you need rather than just feed balls.

                ## Milestones
                1. Three coaches listed with qualifications, rates and whether they offer private, shared or group lessons.
                2. The same five questions asked of each.
                3. Trial lessons taken with the top two.
                4. One coach chosen and a first block of lessons booked.

                ## Notes
                Check the coach holds a current licence and safeguarding check from your national federation, especially if they also coach juniors at your club.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A coach chosen after trial lessons with two of three shortlisted coaches, and a first block of lessons booked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List three coaches with their qualifications and hourly rates"
                - "Ask each how they would work towards your season goal"
                - "Take a trial lesson with your top two"
                - "Book a first block of lessons with the coach you choose"
            - name: Weakness audit from your last ten matches
              description: |-
                ## Purpose
                Players usually practise the shots they enjoy, not the ones that lose them matches. Going through ten logged matches and counting where points were lost, by stroke and by situation, names the one weakness worth the next eight weeks of practice.

                ## Milestones
                1. Ten matches pulled from the match log.
                2. Points lost grouped by stroke and by situation, such as return, second serve or approach.
                3. The top weakness named with the evidence beside it.
                4. The next eight weeks of practice reorganised around it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One named weakness backed by counts from ten logged matches, with eight weeks of practice planned around it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull your last ten matches from the match log"
                - "Group the points you lost by stroke and situation"
                - "Name the single weakness that costs the most points"
                - "Ask the agent to draft an eight-week practice plan around that weakness"
            - name: Singles game plan built on two patterns
              description: |-
                ## Purpose
                Without a plan, singles becomes reacting to whatever the opponent does. Building two patterns you can play under pressure, such as serve wide then hit into the open court, or crosscourt until a short ball then attack down the line, gives you a default game and something to return to when behind.

                ## Milestones
                1. Two patterns chosen that suit your best shots.
                2. Each pattern drilled from a feed and then in live points.
                3. A one-line plan B for opponents who neutralise plan A.
                4. Both patterns used deliberately in three competitive matches.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written singles game plan of two patterns and a plan B, used deliberately in three competitive matches."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose two patterns that start from your strongest shot"
                - "Drill each pattern from a feed with a partner"
                - "Play practice points where the server must start a pattern"
                - "Write a one-line plan B for opponents who stop plan A"
            - name: Forehand technique rebuild with your coach
              description: |-
                ## Purpose
                Sometimes a stroke has a limit built in, such as an extreme grip, a long loop that is late on fast balls or a wristy finish that sprays under pressure. A planned rebuild with your coach, with a target, drills and a date to take it into matches, avoids half changing a stroke for a whole season.

                ## Milestones
                1. The limit described in one sentence by your coach, with footage.
                2. The new grip or swing practised only in fed drills for four weeks.
                3. The change used in practice sets.
                4. The rebuilt forehand used in matches, with error counts compared.

                ## Notes
                Expect results to dip for the first few weeks. Schedule the rebuild in a quiet part of the season, not before a tournament.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A forehand change agreed with a coach, drilled for four weeks and used in matches, with forehand errors compared before and after."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your coach to name the one limit in your forehand"
                - "Pick a quiet part of the season for the rebuild"
                - "Practise the new stroke only in fed drills for four weeks"
                - "Compare forehand errors from match logs before and after"
            - name: Scouting notes on regular league opponents
              description: |-
                ## Purpose
                League tennis means meeting the same players season after season, and most people walk on court having forgotten everything they learned last time. A short note on each opponent's strengths, weaknesses and favourite patterns, read before the match, gives you a plan from the first point.

                ## Milestones
                1. A note for each opponent you have played this season.
                2. Each note covering strongest shot, weakest shot, favourite pattern and behaviour under pressure.
                3. Notes read before every rematch.
                4. A line added after each rematch on what worked.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Scouting notes held for every regular league opponent, read before each rematch and updated after it."
                cadence: rolling
              tasks:
                - "Write a note on the last three opponents you played"
                - "Record each opponent's strongest and weakest shot"
                - "Read the opponent's note before every rematch"
                - "Update scouting notes after the month's fixtures @recurring(monthly:15)"
            - name: Adapting your game to clay, grass or indoor courts
              description: |-
                ## Purpose
                Each surface rewards different tennis: clay slows the ball and asks for sliding and patience, grass keeps it low and rewards the serve and the slice, and fast indoor courts shorten the time to react. Learning what changes before you compete on a new surface avoids a first set spent finding out.

                ## Milestones
                1. The surfaces you will meet this season listed.
                2. The main changes for each written: bounce height, footing and shot choice.
                3. A practice session played on each new surface before competing on it.
                4. Any shoe or string adjustments decided.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note of changes for each surface you will meet this season, and at least one practice session on each before competing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the court surfaces you will play on this season"
                - "Write how bounce, footing and shot choice change on each"
                - "Book a practice session on each new surface before competing"
                - "Ask a stronger player how they adjust on that surface"
            - name: Ball machine hire, share or purchase
              description: |-
                ## Purpose
                Hundreds of repetitions without needing a partner suit players with irregular hours, and a ball machine provides them. Comparing club hire, sharing one with other members and buying your own, on cost per session and the features you actually need, avoids an expensive machine that sits in a garage.

                ## Milestones
                1. The hours you would realistically use a machine each month estimated.
                2. Hire, share and buy options priced per session.
                3. Features compared: oscillation, spin, battery life and portability.
                4. A decision made and the first three machine sessions planned.

                ## Notes
                Start from the **Purchase decision** template. Check whether your club allows private machines on its courts and at what times.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Hire, share and buy options compared on cost per session, a decision recorded and three machine sessions planned."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate how many hours a month you would use a ball machine"
                - "Ask the club about hire rates and rules for private machines"
                - "Compare hire, share and purchase on cost per session"
                - "Plan your first three machine sessions with drills for each"
            - name: First club tournament entry
              description: |-
                ## Purpose
                Tournament tennis feels different from league and social play: a draw, a referee's desk, long waits and the pressure of being knocked out. Entering a local event at the right level, preparing for its format and treating it as practice for later events makes the first one a learning day rather than an ordeal.

                ## Milestones
                1. An event chosen at a level matching your rating, with the entry deadline noted.
                2. Entry submitted, with any player registration or membership it requires in place.
                3. Format understood: draw size, set format, consolation event and ball type.
                4. A match day plan written: arrival, warm-up, food and what to do between rounds.
                5. Three lessons written after the event.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first tournament entered and played at your level, with a match day plan used and three lessons written afterwards."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Search your federation's tournament listings for events at your level"
                - "Check whether you need player registration before entering"
                - "Enter the event before the closing date"
                - "Write a match day plan covering arrival, warm-up and food"
                - "Write three lessons within two days of the event"
            - name: Club championships week
              description: |-
                ## Purpose
                Club championships pack several rounds into one or two weeks, often with singles, doubles and mixed running at the same time. Planning entries, partners and work around the dates, and pacing your effort across rounds, gives you the best chance of going deep in the events that matter most to you.

                ## Milestones
                1. Championship dates, events and entry deadline known.
                2. Events chosen and partners confirmed for doubles and mixed.
                3. Work and family commitments arranged around likely match times.
                4. Recovery between rounds planned: food, sleep and no extra hard practice.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The club championships entered in chosen events, with partners confirmed and every scheduled match played."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Find the club championships dates and entry deadline"
                - "Choose your events and confirm doubles and mixed partners"
                - "Block the likely match evenings in your calendar"
                - "Plan light hitting only between rounds"
            - name: Rated tournament with a match-day plan
              description: |-
                ## Purpose
                Once a first tournament is behind you, rated events are where results start to move your rating and seeding. Choosing an event in a gap in the league season, switching to match play in the final fortnight and having a plan for two matches in a day turns results from luck into preparation.

                ## Milestones
                1. A rated event chosen in a gap in your league calendar.
                2. Practice switched to match play, serve and return two weeks before.
                3. A plan for two matches in one day covering food, fluids, rest and a second warm-up.
                4. Results and any rating change recorded afterwards.

                ## Notes
                Fuelling for a long day can be simple: regular food you know agrees with you and water between matches. Anyone with a medical condition should agree a plan with their doctor.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A rated tournament played with a written two-match day plan, and the results and rating change recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose a rated event in a gap in your league calendar"
                - "Switch the last two weeks of practice to match play"
                - "Write a plan for playing two matches in one day"
                - "Record the results and any rating change after the event"
            - name: Team league season as a player
              description: |-
                ## Purpose
                Playing for a club team brings fixed fixtures, a captain, selection and the pressure of others relying on your result. Preparing for the season rather than turning up match by match means agreeing your role with the captain, knowing the league format and building a partnership that wins doubles rubbers.

                ## Milestones
                1. Your team, division, format and captain known.
                2. Your expected role agreed with the captain: singles, a doubles pair or reserve.
                3. A regular doubles partner from the team practising with you.
                4. A season record of rubbers won and lost kept in the match log.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full league season played with your role agreed, a regular partner and every rubber result recorded."
                cadence: cyclic
              tasks:
                - "Ask the captain which team and division you are likely to play in"
                - "Read the league format and how rubbers are scored"
                - "Agree a regular practice slot with your doubles partner"
                - "Review the season record with the captain when the season ends"
            - name: Tournament weekend away
              description: |-
                ## Purpose
                Travelling to a tournament adds bookings, transport, food and early starts to the tennis, and a bad night's sleep can cost more than a weak backhand. Planning the trip early means a short drive on match morning, a court to hit on the day before and a fallback if the draw sends you out early.

                ## Milestones
                1. Event entered and accommodation within twenty minutes of the venue booked.
                2. Travel booked to arrive the afternoon before the first round.
                3. A practice court near the venue booked for the day before.
                4. A plan for the spare time if you lose early, such as practice or watching.

                ## Notes
                Start from the **Trip** template. Check the cancellation terms on the accommodation, as draws and the order of play are often published late.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A weekend tournament trip completed with accommodation near the venue, a practice hit the day before and costs recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book accommodation within twenty minutes of the venue"
                - "Book travel to arrive the afternoon before your first match"
                - "Book a practice court near the venue for the day before"
                - "Record trip costs and three notes for next time"
            - name: Organising a club round robin social
              description: |-
                ## Purpose
                Social round robins are how many clubs welcome new members and how players meet partners beyond their usual four. Running one well, with a fair rotation, a clear finishing time and food afterwards, also earns you standing at the club and a wider pool of players.

                ## Milestones
                1. Date, courts and format agreed with the club committee or social organiser.
                2. A sign-up sheet open with a cap based on the courts available.
                3. A rotation drawn so each player partners and plays against as many others as possible.
                4. The event run, finished on time, and feedback gathered.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A round robin held on the agreed date with a full rotation, finished on time and feedback gathered from players."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the social organiser for a date and courts"
                - "Open a sign-up sheet with a player cap"
                - "Draw a rotation so players mix partners and opponents"
                - "Collect three comments from players after the event"
            - name: Adult beginner from first lesson to first rally
              description: |-
                ## Purpose
                Adults starting tennis often give up in the first month because hitting with friends is mostly chasing balls. A course of group lessons using slower balls and a smaller court, followed by mini tennis with a partner, builds to a ten-ball rally on the full court within a few months.

                ## Milestones
                1. An adult beginners' group course of at least six weeks booked.
                2. A beginner racket and tennis shoes in hand.
                3. A ten-ball rally in the service boxes with a partner.
                4. A ten-ball rally from the baseline with low-compression balls.
                5. A first social doubles session played at the club.

                ## Notes
                Slower, low-compression balls are not just for children. They give adult beginners more time and longer rallies.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A ten-ball baseline rally achieved and a first social doubles session played within three months of starting."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Book a six-week adult beginners' group course"
                - "Practise mini tennis in the service boxes with a partner"
                - "Count rallies from the baseline with low-compression balls"
                - "Sign up for the club's beginner or improver social session"
            - name: Returning to tennis after years away
              description: |-
                ## Purpose
                Players returning after a decade or more usually remember how to hit but not how fast the ball comes back, and the body has changed more than the strokes. Rebuilding with shorter sessions, a couple of lessons and a check of old equipment avoids the first-month calf strain or sore shoulder that ends so many comebacks.

                ## Milestones
                1. Old equipment checked, with strings, grip and shoes replaced as needed.
                2. Two refresher lessons taken to update technique and timing.
                3. Sessions built from forty-five minutes to ninety over six weeks.
                4. A first competitive match or league trial arranged.

                ## Notes
                If you have a health condition or have been inactive for a long time, check with your doctor before returning to competitive play.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six weeks of graded return completed with two refresher lessons, and a first competitive match arranged."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Restring or replace your old racket and buy new court shoes"
                - "Book two refresher lessons with a club coach"
                - "Plan six weeks of sessions building from forty-five to ninety minutes"
                - "Arrange a first competitive match or league trial"
            - name: Two sessions a week around work and family
              description: |-
                ## Purpose
                Full-time jobs and young children often leave two hours a week for tennis, and the risk is spending both on unstructured hitting. Fixing two regular slots, one for a lesson or drills and one for match play, and protecting them in the family calendar, makes progress possible on limited time.

                ## Milestones
                1. Two weekly slots agreed with your household and booked in advance.
                2. One slot used for drills or a lesson, one for match play.
                3. A cover plan for weeks when a slot falls through, such as a solo serve session.
                4. Eight weeks of the two-slot routine kept.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two protected tennis slots kept for eight consecutive weeks, one for practice and one for match play."
                cadence: rolling
              tasks:
                - "Agree two weekly tennis slots with your household"
                - "Book next week's courts and partners for both slots @recurring(weekly:fri)"
                - "Decide which slot is for practice and which for match play"
                - "Keep a solo serve session as the backup when a slot falls through"
            - name: Mixed doubles partnership for the season
              description: |-
                ## Purpose
                Mixed doubles has its own tactics: who serves first in each set, who returns on which side, and how to win without targeting one player all match. Building a partnership with one regular partner for a season, with agreed tactics and a practice slot, wins far more matches than pairing up on the day.

                ## Milestones
                1. A regular mixed partner agreed for the season.
                2. Serving order, return sides and signals agreed.
                3. Four practice sessions played together before competition.
                4. A short debrief recorded after each match.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A mixed partnership with agreed tactics, four practice sessions together and a debrief recorded after each match."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask a player you combine well with to partner you for the season"
                - "Agree who returns on which side and who serves first"
                - "Play four practice sessions together before the first event"
                - "Write a three-line debrief together after each match"
            - name: Arm-friendly set-up when tennis elbow is a worry
              description: |-
                ## Purpose
                Pain on the outside of the elbow is common among club players, and equipment and technique are often part of the story alongside how much you play. Getting the pain assessed first, then reviewing string type, tension, grip size and racket stiffness with your clinician's advice in hand, removes the avoidable causes without guessing.

                ## Milestones
                1. Elbow pain assessed by a doctor or physiotherapist before anything is changed.
                2. Current string, tension, grip size and racket stiffness recorded.
                3. Equipment changes discussed with a stringer or coach in light of the assessment.
                4. A coach asked to check for late contact or a wristy backhand.

                ## Notes
                This project organises the conversation; it is not treatment. Follow your clinician's advice on rest and return to play.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An assessment by a doctor or physio recorded, and any equipment and technique changes decided and noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book an assessment with a doctor or physiotherapist"
                - "Record your string, tension, grip size and racket stiffness"
                - "Ask your stringer about softer strings and lower tension options"
                - "Ask your coach to watch for late contact on the backhand"
            - name: Trials for a higher league team or county squad
              description: |-
                ## Purpose
                Moving up to a club's first team or a county or regional squad means trials, selection matches and a higher standard of opponent. Finding out how selection works, targeting the results selectors look at and preparing for a trial day gives you a real chance rather than hoping to be noticed.

                ## Milestones
                1. Selection process, dates and criteria found out from the captain or squad manager.
                2. The results or ratings selectors use compared with yours.
                3. Practice sets against players at the target standard arranged.
                4. Trial or selection matches played and feedback requested.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Selection criteria found out, at least one trial or selection match played and feedback received from the selectors."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the captain or squad manager how selection works"
                - "Compare your recent results with the selection criteria"
                - "Arrange practice sets against players at the target standard"
                - "Ask the selectors for feedback after the trial"
            - name: Point-by-point charting of a full match
              description: |-
                ## Purpose
                Simple stats miss how points are actually won: which serve location sets up a winner, which rally length favours you, where errors cluster. Charting a full filmed match point by point, by serve, return, rally length and ending shot, gives a level of detail club players rarely see about their own game.

                ## Milestones
                1. A full match filmed from behind the baseline.
                2. Every point charted with serve location, rally length and how it ended.
                3. Points won and lost summarised by rally length and serve location.
                4. Two practice priorities drawn from the chart and agreed with your coach.

                ## Notes
                Rally length is a useful split: points of up to four shots, five to eight and nine or more often tell different stories.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A full match charted point by point with summaries by rally length and serve location, and two priorities agreed with a coach."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Film a full competitive match from behind the baseline"
                - "Chart every point by serve, rally length and ending shot"
                - "Summarise points won by rally length and serve location"
                - "Agree two practice priorities from the chart with your coach"
            - name: Periodised tennis year around peak tournaments
              description: |-
                ## Purpose
                Competitive players who play the same mix all year arrive at the big events tired or undercooked. Laying out the year in blocks, with technique and fitness work in the off season, match play building into league and tournament peaks, and planned rest after them, puts form where it matters.

                ## Milestones
                1. Peak events for the year chosen and dated.
                2. The year divided into off season, build, competition and rest blocks.
                3. Each block given a focus for lessons, practice and fitness.
                4. The plan reviewed after each peak and adjusted for the next.

                ## Notes
                Schedule a light week after each peak event. It is when niggles settle and motivation returns.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A year plan with dated peak events and blocks, each with a stated focus, reviewed after every peak."
                cadence: cyclic
              tasks:
                - "Choose and date your peak events for the year"
                - "Divide the year into off season, build, competition and rest blocks"
                - "Give each block a focus for lessons, practice and fitness"
                - "Rebuild the year plan before the new season starts @recurring(yearly)"
---

# Tennis Match Play

This area is for club and recreational players who want their tennis to improve rather than just happen, from adult beginners and returners to league regulars and tournament players. It starts with the foundations (an honest rating, a racket, strings and shoes that suit you, a venue, filmed strokes and a season goal), then the weekly machinery of lessons, drills, serve practice, the match log and restringing, the stroke and tactical skills from second serve to doubles poaching, the decisions about coaches, game plans and surfaces, the events from a first tournament to club championships, the situations that shape a tennis life, and finally the work of competitive players chasing selection and peak form.

What repeats is a Tuesday drill session, a Thursday lesson write-up, a Saturday serve basket and a Sunday match log, footwork conditioning on Mondays and Fridays, availability to your captain on the 3rd, a monthly review on the 28th, and quarterly restringing and video re-checks. The Purchase decision, Operational checklist, Metrics log, Training program and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
