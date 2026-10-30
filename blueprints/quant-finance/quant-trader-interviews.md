---
id: quant-finance.quant-trader-interviews
name: Quant Trader Interviews
description: "A dated recruiting calendar, mental maths and probability measured and drilled, market-making games practised with a partner, expected value reasoning made automatic, and behavioural stories ready for the final round."
category: business
version: 1.0.0
tags: [quant-finance, quant-trader-interviews, student, trading-interviews, mental-maths, market-making-games, expected-value, internships]
author: Aurum Technology
starter_structure:
  templates:
    - job-application
    - resume
    - skills-matrix
    - metrics-log
    - meeting-notes
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Quant Trader Interviews
          description: "Preparing for quant trading interviews: mental maths, probability puzzles, market-making games, expected value thinking and the behavioural rounds."
          projects:
            - name: Trading recruiting calendar with dated deadlines
              description: |-
                ## Purpose
                Internships at many trading firms open in late summer and fill on a rolling basis, so a strong candidate who applies in November can find half the places already gone. A single calendar of when each target firm opens, closes and typically interviews turns recruiting from a scramble into a plan you can work back from.

                ## Milestones
                1. Opening and closing dates for every target programme collected from the firms' own careers pages.
                2. Each date entered in your calendar with a reminder two weeks before.
                3. Programmes marked as rolling or fixed deadline.
                4. A preparation start date set at least eight weeks before the first opening.

                ## Notes
                Dates shift every year. Treat last year's dates as estimates and confirm them as the pages update.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A calendar lists opening and closing dates for every target trading programme, each with a reminder set two weeks ahead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the trading programmes you would genuinely accept an offer from"
                - "Copy each opening and closing date from the firm's careers page"
                - "Add a reminder two weeks before every opening date"
                - "Recheck the careers pages for date changes @recurring(monthly:3)"
            - name: Interview format map by firm type
              description: |-
                ## Purpose
                Market makers, proprietary trading firms, hedge funds and bank trading desks build their processes differently: some lean on timed online arithmetic, some on market-making games, some on long probability phone screens, some on behavioural panels. Mapping the stages each target firm uses tells you where to spend preparation hours instead of drilling everything equally.

                ## Milestones
                1. Every target firm's stages listed in order from application to offer.
                2. Each stage tagged by what it tests: arithmetic, probability, games, coding or behavioural.
                3. Sources for each entry noted, with official careers pages preferred over forums.
                4. A ranked list of the three skills that appear in most of your target processes.

                ## Notes
                Forum accounts of interviews are often years old. Use them for flavour, not as a script.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table shows the interview stages for each target firm, tagged by skill tested, with the top three skills ranked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read each target firm's careers page section on the application process"
                - "Ask two students who interviewed last year which stages they faced"
                - "Tag each stage with the skill it tests"
                - "Rank the skills by how many of your target processes include them"
            - name: Mental maths baseline under time
              description: |-
                ## Purpose
                Many trading assessments give you eighty or so arithmetic questions in a few minutes, and most students have not done long multiplication without a calculator since school. Timing yourself once on mixed questions, before any practice, gives a starting number you can beat and shows which operations cost you the most.

                ## Milestones
                1. Three timed sets of mixed arithmetic completed on a free practice site.
                2. Score, accuracy and questions attempted recorded for each set.
                3. The slowest operation type identified, for example division or decimals.
                4. A target score for eight weeks from now written beside the baseline.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three timed baseline scores with accuracy are recorded, the weakest operation is named and an eight-week target is set."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sit one timed mixed arithmetic set without any practice first"
                - "Record score, accuracy and number attempted"
                - "Repeat twice more on separate days and record each result"
                - "Write down which operation type cost you the most time"
            - name: Probability readiness skills matrix
              description: |-
                ## Purpose
                Phone screens move fast from coin flips to conditional probability, expected values of stopping games and simple Markov chains. Rating yourself honestly against a list of the topics trading interviewers actually ask about, and testing each rating with one timed question, shows the gaps before an interviewer does.

                ## Milestones
                1. A list of around fifteen interview probability topics written out.
                2. Each topic rated from one to four, with one timed question attempted to check the rating.
                3. The four weakest topics marked for the first month of study.
                4. The matrix dated so it can be rerated after a month.

                ## Notes
                Start from the **Skills matrix** template. Rate a topic four only if you can explain the answer aloud without notes.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated skills matrix rates fifteen probability topics, each checked with a timed question, with the four weakest marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the list of probability topics trading interviews cover"
                - "Attempt one timed question per topic and note the time taken"
                - "Rate each topic from one to four based on the attempt"
                - "Mark the four weakest topics for this month's study"
            - name: Preparation timetable around term and exams
              description: |-
                ## Purpose
                Interview preparation competes with coursework, exams and part-time work, and the students who do best usually protect a small fixed block every day rather than cramming at weekends. A written timetable that fits around your real term commitments makes the plan something you can keep through the busiest weeks.

                ## Milestones
                1. Fixed term commitments, exam dates and work shifts blocked out for the semester.
                2. A daily fifteen-minute arithmetic slot and three longer weekly blocks placed in the gaps.
                3. Exam weeks marked as maintenance only.
                4. The timetable shared with a study partner who will hold you to it.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A semester timetable shows daily and weekly preparation blocks around term and exam dates, shared with a study partner."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Block out lectures, exams and work shifts for the semester"
                - "Place a daily fifteen-minute arithmetic slot in the gaps"
                - "Add three longer weekly blocks for probability and games"
                - "Send the timetable to your study partner"
            - name: One-page trading CV
              description: |-
                ## Purpose
                Screeners at trading firms spend seconds on a CV and look for a few signals: strong quantitative grades, competitive achievement, evidence of decisions under uncertainty and any coding. A one-page CV built for trading rather than general finance puts maths olympiads, poker, chess, sport or competitive programming results where they will be seen.

                ## Milestones
                1. Grades and ranks stated precisely, with class position where it helps.
                2. Every bullet rewritten to show a result, a number or a decision.
                3. Competitive and game achievements given their own short section.
                4. The CV reviewed by someone who has worked in or recruited for trading.

                ## Notes
                Start from the **Resume** template. Do not inflate a game rating or a ranking; interviewers often ask about it in detail.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page CV with quantified bullets and a competition section has been reviewed by someone with trading recruiting experience."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect your grades, ranks and competition results in one note"
                - "Rewrite each bullet to lead with a result or a number"
                - "Add a short section for games, competitions or sport"
                - "Ask a trader or careers adviser to review the CV"
            - name: Trading application tracker
              description: |-
                ## Purpose
                By October a serious candidate may have twenty applications live, each at a different stage with its own assessment deadline and recruiter. One tracker with stage, next action and date for every firm stops an online assessment link from expiring unseen in a junk folder.

                ## Milestones
                1. One row per firm with role, stage, next action, date and contact.
                2. Every assessment link and its expiry date logged on arrival.
                3. Outcomes recorded, including rejections and the stage reached.
                4. A filter that shows only the actions due in the next seven days.

                ## Notes
                Start from the **Job application** template. Add a rule to your email so messages from recruiting systems never land in junk.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every application is in one tracker with stage, next action and date, and no assessment link expires unused."
                cadence: rolling
              tasks:
                - "Set up the tracker with columns for stage, next action, date and contact"
                - "Add every application you have already sent"
                - "Check your junk folder for recruiting system emails"
                - "Log each new assessment link and its expiry on the day it arrives"
            - name: Market vocabulary primer for trading interviews
              description: |-
                ## Purpose
                Interviewers assume you know what a bid, offer, spread, fair value, edge and position mean, and that you can say them correctly while playing a game. A short primer, learned well enough to use in a sentence, stops vocabulary from slowing you down in the rounds that matter.

                ## Milestones
                1. Around thirty core trading terms defined in your own words.
                2. Each term used correctly in one spoken example.
                3. The difference between buying at the offer and selling at the bid explained without hesitation.
                4. The primer tested by a friend reading terms aloud at random.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Thirty trading terms are defined in your own words and you can use each one correctly when a friend tests you at random."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a list of thirty trading terms interviewers use"
                - "Define each one in your own words in a single line"
                - "Say an example sentence aloud for each term"
                - "Ask a friend to test you on ten terms at random"
            - name: Daily mental arithmetic sprint
              description: |-
                ## Purpose
                Arithmetic speed is built in short daily doses, not long weekend sessions, and it fades within a couple of weeks without practice. A fifteen-minute daily sprint with a weekly score check is the single habit that moves timed test scores most for most candidates.

                ## Milestones
                1. Fifteen minutes of timed arithmetic done on most days for four weeks.
                2. A weekly best score and accuracy logged every Sunday.
                3. Accuracy held above ninety percent while speed rises.
                4. The eight-week target from the baseline reached or the plan adjusted.

                ## Notes
                Speed without accuracy is a trap: many assessments penalise wrong answers. Slow down when accuracy drops.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly arithmetic scores and accuracy are logged for eight weeks, with accuracy above ninety percent and scores rising."
                cadence: rolling
              tasks:
                - "Do fifteen minutes of timed mixed arithmetic @recurring(daily)"
                - "Log your best weekly score and accuracy @recurring(weekly:sun)"
                - "Spend one session a week only on your slowest operation"
            - name: Weekly spoken probability set
              description: |-
                ## Purpose
                Solving a probability question silently on paper is a different skill from solving it aloud on a phone call while someone listens and interrupts. Working through five interview-style questions each week, out loud and recorded, trains the explaining as well as the answering.

                ## Milestones
                1. Five questions a week answered aloud, with the recording kept.
                2. Each recording replayed once and the unclear moments noted.
                3. Answers stated with assumptions first, then method, then result.
                4. Average time to a correct answer falling across a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five recorded spoken probability answers are completed each week for six weeks, with times logged and falling."
                cadence: rolling
              tasks:
                - "Answer five probability questions aloud and record yourself @recurring(weekly:tue)"
                - "Replay one recording and note where your explanation wandered"
                - "Practise stating assumptions before starting any calculation"
            - name: Weekly market-making session with a partner
              description: |-
                ## Purpose
                Market-making games, where you quote a bid and offer on an unknown quantity and adjust as the interviewer trades, cannot be practised alone. A weekly session with a fellow candidate, taking turns as trader and interviewer, builds the instinct for width, skew and when to stop being run over.

                ## Milestones
                1. A regular partner and a fixed weekly time agreed.
                2. At least four games played per session, swapping roles.
                3. Each game's final position and profit or loss recorded on paper.
                4. One lesson from each session written down before you leave.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly partner sessions of at least four market-making games are held for six weeks, each with results and one lesson written down."
                cadence: rolling
              tasks:
                - "Ask a fellow candidate to be your weekly game partner"
                - "Play four market-making games, swapping roles @recurring(weekly:sat)"
                - "Write down one lesson from each session"
            - name: Weekly markets note on one real move
              description: |-
                ## Purpose
                Recent market moves come up in many trading interviews, often as a question on what happened and why, and a candidate who only knows puzzles struggles. Writing a short note each week on one real price move, its likely cause and what traders on each side would have done, builds the market sense behavioural and fit rounds probe.

                ## Milestones
                1. One note of under three hundred words written each week.
                2. Each note names the instrument, the move and two possible explanations.
                3. Notes cover at least four asset classes over two months.
                4. Two notes rehearsed as spoken answers to a question on recent markets.

                ## Notes
                This is practice in explaining, not a view on where prices will go. Never present a note as a trade recommendation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly market notes across at least four asset classes exist, and two have been rehearsed aloud."
                cadence: rolling
              tasks:
                - "Write a short note on one real market move this week @recurring(weekly:sun)"
                - "Name two possible explanations for the move in each note"
                - "Rehearse one note aloud as an interview answer"
            - name: Missed question error log
              description: |-
                ## Purpose
                Most candidates repeat the same mistakes across interviews: forgetting to condition on the right event, quoting too wide in games or rushing a final multiplication. Logging every missed or slow question with the reason, and reviewing the log weekly, turns each mistake into one you only make once.

                ## Milestones
                1. Every missed or slow question logged with source, topic and reason.
                2. Reasons grouped into a handful of recurring error types.
                3. The top error type given a specific counter-drill.
                4. Fewer repeats of the top error type over a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An error log with reasons is reviewed weekly, the top error type has a counter-drill and its repeats fall over four weeks."
                cadence: rolling
              tasks:
                - "Create an error log with columns for source, topic and reason"
                - "Review the log and name this week's top error type @recurring(weekly:fri)"
                - "Design one short drill aimed at the top error type"
            - name: Weekly application pipeline review
              description: |-
                ## Purpose
                In peak season, a missed recruiter email or an expired assessment link can cost a place that took months to earn. A short weekly review of the tracker, every Monday, catches what is due before it is late and shows when the pipeline needs topping up.

                ## Milestones
                1. The tracker reviewed every Monday during recruiting season.
                2. Every action due in the next seven days scheduled in your calendar.
                3. Stalled applications chased politely after two quiet weeks.
                4. New applications added whenever live ones fall below your target number.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The application tracker is reviewed every Monday through the season, with no missed assessment deadlines recorded."
                cadence: cyclic
              tasks:
                - "Review the tracker and schedule this week's actions @recurring(weekly:mon)"
                - "Chase any application with no reply for two weeks"
                - "Decide your target number of live applications"
            - name: Monthly mock interview with a peer or alumnus
              description: |-
                ## Purpose
                Nothing reproduces interview nerves like a real person watching you think. A monthly mock with someone who has been through trading interviews, covering a probability question, a game and a behavioural question, shows how your preparation holds up under observation.

                ## Milestones
                1. A rota of three or four mock interviewers lined up for the season.
                2. One full mock held each month with written feedback.
                3. Feedback themes compared across mocks.
                4. The next month's preparation adjusted to the strongest theme.

                ## Notes
                Start from the **Meeting notes** template to record each mock's questions and feedback.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly mock interviews are held for four months, each with written feedback and a recorded change to preparation."
                cadence: rolling
              tasks:
                - "Ask three people who have done trading interviews to run mocks"
                - "Hold a full mock interview and take written feedback @recurring(monthly:12)"
                - "Change one thing in next month's plan based on the feedback"
            - name: Online assessment score log
              description: |-
                ## Purpose
                Practice scores on arithmetic, sequence and probability tests rise and plateau in ways that are hard to see day to day. A monthly log of full-length timed practice tests shows whether you are ready to sit a real assessment or should delay an application by a week.

                ## Milestones
                1. One full timed practice test of each type sat every month.
                2. Score, accuracy and questions attempted logged for each.
                3. A readiness threshold set for each test type.
                4. Real assessments booked only once the threshold is met, where the deadline allows.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log records monthly full-length practice scores for each test type against a written readiness threshold."
                cadence: rolling
              tasks:
                - "Set a readiness threshold for each assessment type"
                - "Sit one full-length timed practice test of each type @recurring(monthly:20)"
                - "Compare scores with the threshold before booking a real assessment"
            - name: Monthly contact with traders and alumni
              description: |-
                ## Purpose
                Traders who were in your seat two years ago know which firms' processes have changed and will sometimes refer a candidate they have met. A small, steady habit of one or two conversations a month builds those relationships without the rush of contacting everyone in September.

                ## Milestones
                1. A list of twenty traders and recent alumni from your university or society.
                2. One or two short conversations held each month.
                3. Each conversation noted with what you learned and any follow-up.
                4. A thank-you message sent within a day of every call.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One or two conversations with traders or alumni are held and noted each month for four months, each followed by a thank-you."
                cadence: rolling
              tasks:
                - "List twenty traders and alumni from your university and societies"
                - "Message one or two people for a short call @recurring(monthly:5)"
                - "Write a note after each call with what you learned"
            - name: Fast fractions, percentages and decimals
              description: |-
                ## Purpose
                Many interview calculations hinge on converting quickly between fractions, decimals and percentages, such as seven eighths or one in six. Learning the common conversions to recall rather than calculation frees working memory for the harder part of the question.

                ## Milestones
                1. Fractions with denominators up to twelve memorised as decimals.
                2. Percentage changes and reverse percentages done mentally.
                3. Recall tested with a friend calling out fractions at random.
                4. Arithmetic test scores on decimal questions improved against the baseline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All fractions with denominators to twelve are recalled as decimals without error when tested at random."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the decimal for every fraction with a denominator up to twelve"
                - "Learn one denominator family each day"
                - "Practise percentage changes and reverse percentages mentally"
                - "Ask a friend to test your recall at random"
            - name: Estimation and Fermi questions for traders
              description: |-
                ## Purpose
                Traders are often asked to estimate a quantity nobody knows exactly, then make a market on it, so a good structured estimate is the first step of many games. Practising Fermi questions with a clear method, breaking the problem into factors you can bound, makes those openings confident rather than guessed.

                ## Milestones
                1. A standard method written down: define, decompose, bound each factor, combine.
                2. Twenty estimation questions answered aloud with the method.
                3. Each estimate given a range, not just a point.
                4. Estimates checked against real figures where they can be found.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty estimation questions have been answered aloud with ranges, and at least ten have been checked against real figures."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write your four-step method for estimation questions"
                - "Answer five estimation questions aloud, giving a range each time"
                - "Look up the real figures for any you can check"
                - "Note where your ranges were too narrow"
            - name: Expected value and betting game reasoning
              description: |-
                ## Purpose
                Interviewers love offering a bet, such as paying to roll a die with a payout, and asking whether you would take it, how much you would pay and how that changes with a second roll. Fluency in expected value, variance and the option to stop is the reasoning behind most trading questions, and it must come out clearly in under a minute.

                ## Milestones
                1. Expected value, variance and linearity of expectation explained aloud without notes.
                2. Twenty dice, card and coin betting questions solved and timed.
                3. Stopping and re-roll games solved by working backwards.
                4. Answers framed as a price, then a decision, then the reasoning.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty timed betting questions are solved with answers given as a price and a decision, including at least five stopping games."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Explain linearity of expectation aloud with one dice example"
                - "Solve five dice and card betting questions against a timer"
                - "Work backwards through three re-roll or stopping games"
                - "Practise giving the price before the reasoning"
            - name: Bet sizing and bankroll questions
              description: |-
                ## Purpose
                Some interviews go beyond whether to bet into how much, asking how you would size a series of favourable bets with limited capital. Understanding why betting everything on a good bet is still a mistake, and the idea behind proportional sizing, shows the risk sense trading desks look for. This is interview reasoning about games, not a sizing method for real money.

                ## Milestones
                1. The risk of ruin explained with a simple repeated coin bet.
                2. The intuition behind proportional bet sizing written in a paragraph.
                3. Five sizing questions answered aloud, including one where you should not bet.
                4. A clear spoken answer to why traders often size below the theoretical optimum.

                ## Notes
                Interviewers reward sensible caution more than formulae. Saying you would bet less than the maths suggests, and why, is often the strongest answer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five bet sizing questions are answered aloud with reasoning about ruin, and a one-paragraph note on proportional sizing exists."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Simulate a repeated favourable coin bet on paper with full stakes"
                - "Write a paragraph on the idea behind proportional bet sizing"
                - "Answer five sizing questions aloud, including one with no bet"
            - name: Making a two-sided market on an unknown
              description: |-
                ## Purpose
                The classic game starts with a question such as the sum of three dice or the number of windows in a building, and asks for a bid and offer. Learning to anchor on a fair value, choose a sensible width, state the size and update after each trade is the core skill most market-making rounds test.

                ## Milestones
                1. Fair value and width explained as separate decisions.
                2. Twenty opening markets quoted with a stated size.
                3. Width chosen consistently with how uncertain the quantity is.
                4. Quotes updated sensibly after being bought from or sold to twice in a row.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty two-sided markets have been quoted aloud with size, and a partner confirms widths and updates were sensible."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-line rule for choosing width from your uncertainty"
                - "Quote ten opening markets on dice and card quantities aloud"
                - "Quote ten markets on real-world estimation quantities"
                - "Practise moving your quote after being traded on twice"
            - name: Updating quotes on new information
              description: |-
                ## Purpose
                Good games add information as they go: a die is revealed, a card is turned, or the interviewer hints the true value is high. Updating fair value correctly, without overreacting to the interviewer's trades, is where strong candidates separate from average ones.

                ## Milestones
                1. Bayesian updating practised on ten discrete examples.
                2. The difference between information from a revealed card and from a counterparty's trade explained.
                3. Ten multi-stage games played with quotes recorded at each stage.
                4. Each game reviewed for overreaction or underreaction.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten multi-stage games are recorded with quotes at each stage, and each has a written note on whether updates were too large or too small."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Solve ten short Bayesian updating examples on paper"
                - "Explain how a counterparty's trade differs from revealed information"
                - "Play ten multi-stage games and record each quote"
                - "Mark each update as too large, too small or about right"
            - name: Number sequence and pattern tests
              description: |-
                ## Purpose
                Several trading firms use timed number sequence tests, where each question is a short series and you supply the next term. These reward a short checklist of common patterns tried in order, and improve quickly with practice.

                ## Milestones
                1. A checklist of common patterns written: differences, ratios, alternation, squares, primes and combinations.
                2. Fifty practice sequences solved and timed.
                3. Your average time per sequence halved from the first set.
                4. A rule for when to skip a sequence and move on.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fifty timed sequence questions are solved, average time per question has halved and a skip rule is written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write your checklist of common sequence patterns"
                - "Solve one timed set of sequences each week @recurring(weekly:wed)"
                - "Track your average time per sequence"
                - "Decide how many seconds you allow before skipping"
            - name: Options basics for trading interviews
              description: |-
                ## Purpose
                Options questions appear in many trading interviews even for students with no finance background: payoffs, put-call parity, and how an option's price moves with volatility and time. A grounding in the ideas, not the heavy maths, lets you handle these questions and connects to the expected value thinking you already have.

                ## Milestones
                1. Payoff diagrams drawn for calls, puts, straddles and spreads.
                2. Put-call parity explained and used to find a mispricing in a simple example.
                3. The direction each option moves with volatility, time and the underlying explained aloud.
                4. Five interview-style options questions answered aloud.

                ## Notes
                This is interview preparation, not a guide to trading options. Keep the focus on intuition and arbitrage logic.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Payoff diagrams for four structures are drawn, put-call parity is explained with an example and five options questions are answered aloud."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draw payoff diagrams for a call, a put, a straddle and a spread"
                - "Work through one put-call parity mispricing example"
                - "Explain aloud how volatility and time affect an option's value"
                - "Answer five options interview questions aloud"
            - name: Thinking aloud under pressure drills
              description: |-
                ## Purpose
                Interviewers score how you reason as much as whether you are right, and a silent candidate who suddenly produces an answer gives them nothing to credit. Drilling the habit of narrating assumptions, approach and checks, especially when stuck, turns partial progress into marks.

                ## Milestones
                1. A spoken structure adopted: restate, assume, plan, solve, check.
                2. A stock phrase ready for being stuck that keeps the conversation moving.
                3. Weekly drills with an interruption every minute from a partner.
                4. A mock interviewer confirms your reasoning is easy to follow.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A mock interviewer records that your reasoning was clear and continuous across three questions, including one you did not finish."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a five-step structure for answering aloud"
                - "Prepare one sentence for when you are stuck"
                - "Run a drill where a partner interrupts every minute @recurring(weekly:thu)"
            - name: Trader, quant trader or researcher track decision
              description: |-
                ## Purpose
                Trader, quant trader, trading assistant and quant researcher roles overlap at some firms and differ sharply at others in interview content, daily work and how quickly you take risk. Deciding which track to apply for at each firm, before applying, avoids being interviewed for a role you have not prepared for.

                ## Milestones
                1. The roles each target firm offers to students listed with a one-line description.
                2. Each role's interview content compared with your strengths.
                3. Two current or former traders asked about the day-to-day difference.
                4. One track chosen per firm and recorded in the tracker.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The tracker records one chosen role track per target firm, with the reason based on interview content and day-to-day work."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the student roles each target firm advertises"
                - "Compare each role's interview content with your strengths"
                - "Ask two traders how the roles differ day to day"
                - "Record the chosen track for each firm in the tracker"
            - name: Skipping and guessing rules for speed tests
              description: |-
                ## Purpose
                Timed assessments differ on whether wrong answers are penalised and whether you can return to a question, and the best tactic changes with each. Writing your rules for skipping, guessing and pacing before the real test stops panic decisions in the last minute.

                ## Milestones
                1. The scoring rule for each target assessment checked from the firm's own instructions.
                2. A skip rule written in seconds for each question type.
                3. A guessing rule written for tests with and without penalties.
                4. The rules rehearsed on two full practice tests.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written skip, guess and pacing rules exist for each assessment type and have been used on two full practice tests."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read each assessment's instructions on scoring and returning to questions"
                - "Write a skip rule in seconds for each question type"
                - "Write a guessing rule for penalised and unpenalised tests"
                - "Sit two practice tests using the rules"
            - name: Fixing the weakest topic after the first mock
              description: |-
                ## Purpose
                The first full mock usually exposes one area that is far behind the rest, often conditional probability or market-making updates. Running a short focused block on that one area, then retesting, is a better use of two weeks than spreading the time evenly.

                ## Milestones
                1. The weakest area named from the mock feedback and error log.
                2. Two weeks of practice planned on that area alone.
                3. A retest on fresh questions in that area.
                4. The skills matrix rerated for the area.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A retest after a two-week focused block shows improvement in the weakest area, recorded in the rerated skills matrix."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Name the weakest area from mock feedback and your error log"
                - "Plan two weeks of practice on that area alone"
                - "Retest on questions you have not seen before"
                - "Rerate the area in your skills matrix"
            - name: Coding round readiness for quant trader roles
              description: |-
                ## Purpose
                Quant trader roles at some firms add a coding test or a short data analysis task, usually in Python, alongside the maths. Checking which of your targets do, and getting comfortable writing small simulations and data manipulations under time, removes a stage that can otherwise end an application.

                ## Milestones
                1. Target firms with a coding stage identified.
                2. A Monte Carlo simulation of a dice game written from scratch in under thirty minutes.
                3. Ten short timed coding problems solved in Python.
                4. One small data analysis task completed and explained aloud.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A dice game simulation and ten timed Python problems are completed, plus one data task explained aloud, for firms that test coding."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Mark which target firms include a coding stage for traders"
                - "Write a Monte Carlo simulation of a dice game from scratch"
                - "Solve ten short timed Python problems"
                - "Complete and explain one small data analysis task"
            - name: Comparing internship offers before the deadline
              description: |-
                ## Purpose
                Offers often arrive with short acceptance windows while other processes are still running, and pay is only one of several things that matter. Comparing offers on the same criteria, such as desk rotation, return offer rates you can verify, training and location, makes a hurried choice a reasoned one.

                ## Milestones
                1. Every offer's deadline and terms written down from the offer letter.
                2. Offers scored on the same five or six criteria.
                3. Questions about rotation and return offers asked of each firm.
                4. A decision recorded with the reasons, and other firms told promptly.

                ## Notes
                Ask recruiters questions in writing and keep the replies. Never accept two offers.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison scores every offer on the same criteria, a decision is recorded and other firms are informed within two days."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write each offer's deadline and terms from the letter"
                - "Score every offer on the same criteria"
                - "Email each firm your questions on rotation and return offers"
                - "Tell the firms you decline as soon as you decide"
            - name: Asking for an offer deadline extension
              description: |-
                ## Purpose
                A first offer with a two-week deadline can arrive while your preferred firm is still mid-process, and many students accept out of fear rather than ask. A short, polite request for more time, with an honest reason, is commonly made and sometimes granted, and the asking rarely costs the offer.

                ## Milestones
                1. Your other live processes and their expected timelines confirmed.
                2. A short extension request written, honest about other processes.
                3. The request sent to the recruiter, not the interviewers.
                4. The outcome recorded and the preferred firm told your new deadline.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "An extension request has been sent in writing, its outcome recorded, and any preferred firm told the revised deadline."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your other firms when they expect to decide"
                - "Write a short, honest extension request"
                - "Send it to the recruiter who made the offer"
                - "Tell your preferred firm your deadline if the request is granted"
            - name: First real online assessment sitting
              description: |-
                ## Purpose
                The first real assessment is where nerves, a slow laptop or a noisy room cost the most marks. Treating it as a planned event, with the environment checked, the instructions read and a full practice the day before, protects the score your preparation earned.

                ## Milestones
                1. The assessment's instructions, time limit and rules read in full.
                2. A quiet room, a charged device and a stable connection arranged.
                3. A full practice test sat the day before.
                4. The assessment completed and the experience noted in the error log.

                ## Notes
                Read the rules on scrap paper and calculators carefully. They vary by firm and breaking them can void the attempt.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first real online assessment is completed before its link expires, in a prepared room, with notes added to the error log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the assessment instructions and rules in full"
                - "Book a quiet room and test your device and connection"
                - "Sit a full practice test the day before"
                - "Note what went well and badly straight after"
            - name: Phone or video screen with a trader
              description: |-
                ## Purpose
                First live interviews are often a thirty to forty-five minute call of quick-fire probability and mental maths, sometimes with a short game. Preparing the setup, your opening and a warm-up routine for that morning means you start the call thinking about the questions, not the technology.

                ## Milestones
                1. The call platform, link and time zone confirmed by email.
                2. A pen, paper and quiet space ready, with nothing that could be mistaken for notes on screen.
                3. A thirty-second introduction rehearsed.
                4. A ten-minute arithmetic warm-up done before the call and notes written straight after.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A screening call is completed with the setup confirmed in advance and a written note of every question asked made within an hour."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the platform, link and time zone by email"
                - "Rehearse a thirty-second introduction aloud"
                - "Do a ten-minute arithmetic warm-up before the call"
                - "Write down every question asked within an hour of finishing"
            - name: Superday preparation and day plan
              description: |-
                ## Purpose
                A superday packs several interviews, a game and sometimes a group exercise into one long day, and stamina matters as much as skill by the fourth round. Planning travel, food, rest between rounds and a reset routine after a bad interview keeps one weak round from spoiling the rest.

                ## Milestones
                1. Schedule, location and format confirmed with the recruiter.
                2. Travel booked to arrive early, with a night before plan if needed.
                3. A reset routine for between rounds written and practised in a mock.
                4. Every round's questions noted the same evening.

                ## Notes
                Interviewers usually do not see each other's scores until afterwards. Treat every round as a fresh start.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The superday is attended on time with a written day plan, and notes on every round are written the same evening."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the superday schedule and format with the recruiter"
                - "Book travel to arrive at least an hour early"
                - "Write a two-minute reset routine for between rounds"
                - "Write notes on every round the same evening"
            - name: Group trading game or team exercise
              description: |-
                ## Purpose
                Some final rounds include a trading simulation played in teams or against other candidates, judged on teamwork and risk discipline as much as profit. Knowing that loud, reckless play usually scores worse than clear communication and controlled positions changes how you approach the game.

                ## Milestones
                1. The exercise format confirmed where the firm shares it.
                2. Two practice team games played with friends using a simple simulator or cards.
                3. A personal rule set for position limits within the game.
                4. Feedback from teammates noted on communication.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two practice team games are played with written position rules, and teammate feedback on communication is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the recruiter whether a group exercise is part of the day"
                - "Run two practice team trading games with friends"
                - "Write your own position limit rule for the game"
                - "Ask teammates for feedback on how you communicated"
            - name: Post-interview debrief and follow-up
              description: |-
                ## Purpose
                Within a day, most candidates forget half the questions they were asked and what they would change. A written debrief after every interview, plus a short thank-you where appropriate, feeds the error log and keeps the relationship warm whatever the outcome.

                ## Milestones
                1. Every question and your answer noted within a few hours.
                2. One thing to repeat and one to change written for each round.
                3. A brief thank-you sent to the recruiter where the firm's culture welcomes it.
                4. Missed questions copied into the error log.

                ## Notes
                Start from the **Meeting notes** template. Do not post a firm's actual questions publicly if you agreed not to share them.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "Every interview has a written debrief within a day, and its missed questions are in the error log."
                cadence: rolling
              tasks:
                - "Write every question and your answer within a few hours"
                - "Note one thing to repeat and one to change"
                - "Send a short thank-you to the recruiter where appropriate"
                - "Copy missed questions into the error log"
            - name: Behavioural story bank for trading rounds
              description: |-
                ## Purpose
                Trading firms ask behavioural questions about risk, losing, mistakes, teamwork and competing, and a vague answer in the final round can undo strong maths. A bank of six to eight specific stories from your own life, each told in under two minutes, covers almost every question you will be asked.

                ## Milestones
                1. Six to eight stories written: a risk taken, a loss, a mistake, a team conflict, a competition and a quick decision.
                2. Each story told in situation, action, result form in under two minutes.
                3. Every story mapped to the questions it can answer.
                4. The bank refreshed with new stories each month of the season.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A story bank of at least six timed stories exists, each mapped to likely behavioural questions, refreshed monthly through the season."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write six stories from your own life on risk, loss and teamwork"
                - "Time each story aloud and cut it to under two minutes"
                - "Map each story to the questions it answers"
                - "Add or refresh one story @recurring(monthly:25)"
            - name: Why trading and why this firm answers
              description: |-
                ## Purpose
                Almost every final round asks why you want to trade and why this firm, and generic answers about markets being exciting are easy to spot. Building answers from your own experience of games, decisions and competition, plus something specific you learned about each firm, shows real interest.

                ## Milestones
                1. A why trading answer built from two specific experiences.
                2. One concrete, accurate point about each target firm from a conversation or its own materials.
                3. Both answers timed at under ninety seconds.
                4. Answers tested on a mock interviewer for sincerity.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ninety-second why trading answer and a firm-specific answer for each target firm are written and tested on a mock interviewer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write two specific experiences that drew you to trading"
                - "Note one accurate, specific point about each target firm"
                - "Time both answers aloud and cut to ninety seconds"
                - "Try the answers on a mock interviewer"
            - name: Talking about losses and bad decisions
              description: |-
                ## Purpose
                Trading interviewers often probe how you handle being wrong: a game lost, a bet that went badly, or a time you held a view too long. A clear answer that separates a bad outcome from a bad decision, and shows what you changed, is one of the strongest signals of trading temperament.

                ## Milestones
                1. Two stories chosen: one bad outcome from a good decision, one bad decision.
                2. Each story includes what you learned and changed.
                3. A spoken answer ready for being caught out mid-game in the interview itself.
                4. Both answers rehearsed with a mock interviewer pushing back.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two loss stories are written and rehearsed, and a mock interviewer has pushed back on each with your answers noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose one bad-outcome story and one bad-decision story"
                - "Write what you changed after each"
                - "Rehearse a reply for being caught out during a game"
                - "Ask a mock interviewer to push back on both stories"
            - name: First-year insight programme plan
              description: |-
                ## Purpose
                Many firms run short insight or discovery programmes for first-year students, and these often feed directly into internship interviews the following year. A first-year student who applies to a handful, with light preparation in arithmetic and probability, starts the main season with contacts and experience.

                ## Milestones
                1. Insight and discovery programmes open to first years listed with dates.
                2. Four to six applications sent.
                3. A light weekly preparation routine kept alongside first-year studies.
                4. Contacts from any programme attended noted for next year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least four insight programme applications are sent, and contacts from any programme attended are recorded for next year."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List insight programmes open to first-year students"
                - "Apply to four to six of them"
                - "Keep a light weekly arithmetic and probability routine"
                - "Note every contact you make at a programme"
            - name: Penultimate-year internship season plan
              description: |-
                ## Purpose
                For most students the penultimate-year internship is the main route into a graduate trading role, since many graduate hires come from return offers. A season plan that sets application waves, preparation peaks and a fall-back list gives this one year the structure it deserves.

                ## Milestones
                1. Applications split into early, main and late waves with dates.
                2. Preparation peaks timed two weeks before each wave.
                3. A fall-back list of related roles prepared in case the first wave fails.
                4. A mid-season check on the plan held and recorded.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written season plan shows dated application waves, preparation peaks and a fall-back list, with a mid-season check recorded."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Split your target firms into early, main and late waves"
                - "Schedule a preparation peak two weeks before each wave"
                - "Write a fall-back list of related roles"
                - "Hold a season planning review before applications open @recurring(yearly)"
            - name: Final-year applications without a trading internship
              description: |-
                ## Purpose
                Not having a trading internship by final year is common and recoverable, but the route is narrower: graduate programmes, off-cycle internships and roles adjacent to trading. A focused plan that explains your experience well and targets firms that hire directly makes the most of the final season.

                ## Milestones
                1. Graduate and off-cycle programmes that accept candidates without internships listed.
                2. A one-sentence explanation of your previous experience ready for interviews.
                3. Applications sent to direct-hire programmes in the first wave.
                4. A decision rule for adjacent roles, written in advance.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Applications to direct-hire and off-cycle programmes are sent in the first wave, with a written rule for considering adjacent roles."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List graduate and off-cycle trading programmes that hire directly"
                - "Write one honest sentence about your previous experience"
                - "Apply to direct-hire programmes in the first wave"
                - "Write when you would consider an adjacent role"
            - name: Applying from a non-target university
              description: |-
                ## Purpose
                Trading firms tend to visit a small set of universities, but many hire from anywhere if the test scores are strong. A student outside those campuses needs a plan that relies on online applications, assessments, competitions and alumni contact rather than campus events.

                ## Milestones
                1. Firms that accept applications from any university identified.
                2. Online events and open days registered for in place of campus visits.
                3. Evidence of quantitative strength, such as competition results, made prominent on the CV.
                4. Three alumni or traders from similar backgrounds contacted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Applications go to firms accepting all universities, three online events are attended and three similar-background traders are contacted."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check which firms state they accept applications from any university"
                - "Register for three online events or open days"
                - "Move competition and test evidence to the top of your CV"
                - "Contact three traders from similar universities"
            - name: International student sponsorship and time zones
              description: |-
                ## Purpose
                International students face two practical hurdles: whether the firm can sponsor a work visa where the role is, and interviews scheduled across time zones. Checking sponsorship before spending hours on an application, and planning around night-time interviews, avoids wasted effort and avoidable fatigue.

                ## Milestones
                1. Each target firm's position on visa sponsorship checked from its own statements or recruiters.
                2. Firms that cannot sponsor marked or removed.
                3. Your time zone stated clearly in every scheduling reply.
                4. A sleep plan made for any interview outside normal hours.

                ## Notes
                Immigration rules are for the official government source and, where needed, an immigration adviser. Ask recruiters only what the firm itself can do.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every target firm has a recorded sponsorship position, and each interview invite has been answered with your time zone stated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check each target firm's stated position on visa sponsorship"
                - "Mark or remove firms that cannot sponsor where the role is"
                - "State your time zone in every scheduling reply"
                - "Plan sleep around any interview outside normal hours"
            - name: Master's student with a one-year window
              description: |-
                ## Purpose
                A one-year master's leaves only a few months between arriving and the main application deadlines, often before you have met anyone on the course. Starting preparation before the course begins and applying in the first wave lets the short window work.

                ## Milestones
                1. Preparation started at least six weeks before the course begins.
                2. Applications for internships or graduate roles timed for the first wave.
                3. A realistic weekly preparation time agreed with your course timetable.
                4. Careers service and course alumni contacted in the first month.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "First-wave applications are sent within the first two months of the course, after at least six weeks of preparation beforehand."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Start daily arithmetic six weeks before your course begins"
                - "Check whether you should apply as an intern or a graduate"
                - "Book a meeting with the careers service in your first month"
                - "Contact two course alumni now working in trading"
            - name: Poker and game theory for trading rounds
              description: |-
                ## Purpose
                Some trading firms value poker and game theory because they train the same reasoning: pricing incomplete information, sizing and reading an opponent's actions. Studying simple game theory concepts and a few hands of reasoned poker can give you sharper answers in games and genuine stories for behavioural rounds.

                ## Milestones
                1. Pot odds, equity and expected value worked through on example hands.
                2. Nash equilibrium explained in a simple two-player game.
                3. One structured reasoning example ready to discuss in an interview.
                4. Any real-money playing kept within a fixed, affordable limit or avoided.

                ## Notes
                Interest in games is the point, not winnings. Never claim results you cannot back up.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Pot odds and a simple equilibrium are explained in written notes, and one structured reasoning example is ready to discuss."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Work through pot odds on five example hands"
                - "Explain a Nash equilibrium in a simple two-player game"
                - "Prepare one reasoning example to discuss in interviews"
            - name: Advanced market-making games with related contracts
              description: |-
                ## Purpose
                Later rounds at market-making firms sometimes involve several related contracts at once, such as the sum and the difference of dice, or adding a new contract mid-game. Practising multi-instrument games trains you to spot when quotes are inconsistent and to hedge one contract with another.

                ## Milestones
                1. Five games played with two related contracts quoted together.
                2. Inconsistencies between your own quotes caught and fixed during play.
                3. A simple hedge between contracts explained aloud.
                4. Partner feedback recorded on consistency and risk.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Five multi-contract games are played with quotes recorded, and partner feedback confirms quotes stayed consistent across contracts."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Design five games with two related contracts"
                - "Play them with your partner, recording every quote"
                - "Check each game for inconsistent quotes between contracts"
                - "Explain aloud how you hedged one contract with another"
            - name: Full recruiting season review
              description: |-
                ## Purpose
                At the end of each recruiting season, the tracker, error log and debriefs hold a full record of what worked, but few students look back at it. A written review of conversion at each stage, the questions that cost you and what you would change prepares next season or helps the friends coming after you.

                ## Milestones
                1. Conversion counted at each stage from application to offer.
                2. The three costliest question types named from the error log.
                3. What worked and what to drop written in a page.
                4. The review shared with a younger student or society.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page season review shows stage conversion, the three costliest question types and changes for next time."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Count applications, assessments, interviews and offers from the tracker"
                - "Name the three costliest question types from the error log"
                - "Write one page on what worked and what to drop"
                - "Hold the season review once the last outcome is in @recurring(yearly)"
            - name: Running mock trading interviews for a society
              description: |-
                ## Purpose
                Once you have been through the process, running mock interviews for younger students sharpens your own reasoning and builds a network that pays back. A simple, repeatable mock session for a university trading or finance society spreads what you learned and gives you leadership examples for behavioural rounds.

                ## Milestones
                1. A sixty-minute mock format written: arithmetic, a probability question, a game and feedback.
                2. Three mock sessions run for younger students.
                3. Feedback forms collected and the format improved.
                4. The format handed to the society for next year.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Three society mock sessions have been run using a written format, which has been handed over for the next year."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a sixty-minute mock interview format"
                - "Offer the society three mock sessions this term"
                - "Collect feedback after each session"
                - "Hand the written format to next year's committee"
---

# Quant Trader Interviews

Quant trading interviews test a narrow set of things very hard: arithmetic at speed, probability under time pressure, making and adjusting markets in games, betting and sizing by expected value, and whether you stay calm and honest when you are wrong. This area is for students working towards an internship or graduate trading role, from a first insight week to the superday. It runs from foundations (the recruiting calendar, the interview formats, honest baselines, a timetable around term and a trading CV), through the weekly routines that build speed, the specific skills each round tests, the decisions about roles and offers, the dated assessments and interviews themselves, variants for different years and backgrounds, and the advanced games and coaching that come once the basics are automatic.

What repeats is a short daily arithmetic sprint, weekly spoken probability sets, partner market-making sessions, a markets note, an error log and a pipeline review, monthly mock interviews, assessment score logs and alumni contact, and a yearly season review. Nothing here is trading or investment advice, and no firm's process is guaranteed: check each firm's own careers pages for its current format and dates. The Job application, Resume, Skills matrix, Metrics log and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
