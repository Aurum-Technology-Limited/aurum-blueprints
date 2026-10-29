---
id: career-growth.salary-negotiation
name: Salary Negotiation
description: "Market pay research, a clear target and walk-away figure, and practised scripts for negotiating salary, bonus, equity and benefits on new offers and at annual pay reviews."
category: personal
version: 1.0.0
tags: [career-growth, salary-negotiation, knowledge-worker, everyone, pay-review, job-offers, compensation, benefits]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - one-on-one
  pillars:
    - name: Career Growth
      emoji: "🧭"
      description: "A working life steered rather than drifted: job searches and promotions, reputation and network, pay negotiations, career changes, credentials, and the evidence that you are getting better at what you do."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Salary Negotiation
          description: "Researching market pay and negotiating salary, bonus and benefits for new offers and annual pay reviews."
          projects:
            - name: Inventory of your current pay and benefits package
              description: |-
                ## Purpose
                Most people can quote their base salary but not the value of their pension contribution, bonus target, health cover or leave allowance, so they negotiate on one number out of eight. Writing the whole package down from your contract, payslips and benefits portal gives you a true starting figure and shows which parts are worth asking about.

                ## Milestones
                1. Base pay, bonus target, allowances and overtime rules listed from your contract and latest payslip.
                2. Employer pension contribution, insurance, health cover and any equity written down with an annual value.
                3. Leave, training budget and other non-cash benefits noted with their terms.
                4. A single total package figure calculated and dated.

                ## Notes
                Use the gross figures from your contract and benefits statements, not take-home pay, so the total compares like for like with offers and market data.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page package summary lists every pay and benefit component with an annual value and a total."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download your latest payslip and find your employment contract"
                - "List base pay, bonus target, allowances and overtime terms"
                - "Look up the employer pension contribution and insurance values in the benefits portal"
                - "Add up an annual total package figure and date it"
                - "Refresh the package summary after any change to pay or benefits @recurring(yearly)"
            - name: Market pay range for your role and level
              description: |-
                ## Purpose
                Any pay ask that rests on how you feel is easy to turn down; one that rests on five comparable data points is not. Gathering ranges from salary surveys, pay-transparent job adverts, recruiter conversations and professional body reports for your exact role, level and location gives you a defensible range rather than a single guess.

                ## Milestones
                1. At least five data points collected for the same role, level and location.
                2. Each data point recorded with its source, date and whether it is base or total pay.
                3. A low, middle and high figure worked out from the data.
                4. Your current pay placed within that range in a sentence.

                ## Notes
                Job titles mislead. Match on responsibilities, team size and seniority, not the title alone, and treat self-reported salary sites as one source among several.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written range with low, middle and high figures backed by at least five dated, sourced data points for your role and location."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a two-line description of your role, level and location to match against"
                - "Collect salary ranges from five job adverts that publish pay"
                - "Check one salary survey or professional body pay report for your field"
                - "Ask one recruiter in your sector what the role pays now"
                - "Work out the low, middle and high figures and note where you sit"
            - name: Your employer's pay bands and review calendar
              description: |-
                ## Purpose
                Inside most organisations pay moves on a timetable and within bands, and the budget is often set weeks before anyone talks to you. Finding out your band, its midpoint, when budgets are fixed and who signs off rises tells you when to speak and how much room there realistically is.

                ## Milestones
                1. Your grade or level and its pay band, or the nearest published equivalent, identified.
                2. Your position in the band noted as below, at or above the midpoint.
                3. The month budgets are set and the month rises are announced written down.
                4. The people who propose and approve rises for your team named.

                ## Notes
                If bands are not published, ask HR or your manager directly what range your level carries. Many employers will share it on request, and some jurisdictions now require it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your band, your position in it and the dates of the next budget and pay decision are written in one note."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search the intranet or HR policies for the pay and grading policy"
                - "Ask HR or your manager which band your level sits in"
                - "Find out when the pay budget is set and when rises are announced"
                - "Write down who proposes and who approves rises for your team"
            - name: Target, opening and walk-away figures
              description: |-
                ## Purpose
                Negotiations go badly when the numbers are decided in the room. Fixing three figures in advance, the number you open with, the number you are aiming for and the point below which you will decline or keep looking, lets you stay calm when the other side names a figure first.

                ## Milestones
                1. A target figure chosen from your market range and package inventory.
                2. An opening figure set above the target with a one-line justification.
                3. A walk-away figure set, below which you would decline or take another route.
                4. All three written down along with the trades you would accept instead of cash.

                ## Notes
                Set the walk-away from your real alternatives and living costs, not from pride. If you would accept less for a better title or more flexibility, write that down now rather than discovering it mid-call.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Opening, target and walk-away figures, each with a written reason, are saved before any pay conversation is booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a target figure from the middle or upper part of your market range"
                - "Set an opening figure above the target and write why it is defensible"
                - "Decide the walk-away figure from your alternatives and monthly costs"
                - "List three non-cash trades you would accept in place of salary"
            - name: Value evidence sheet for pay conversations
              description: |-
                ## Purpose
                Employers pay for results they can repeat to their own boss. A single page that translates your work into money saved, revenue won, hours freed or risks avoided gives your manager the sentence they need to justify your rise to finance.

                ## Milestones
                1. Five results from the last twelve months each tied to a number.
                2. Each result linked to a team or business goal it supported.
                3. Any increase in scope since your last pay change listed.
                4. The page cut down to what fits on one side and reads in two minutes.

                ## Notes
                Estimates are fine if you say how you got them. 'About 6 hours a week saved across a team of 8, measured over March' is more persuasive than an unexplained round number.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page sheet lists five quantified results and any scope increase, ready to share before a pay conversation."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the five results from the past year you are proudest of"
                - "Put a number on each one, with how you measured or estimated it"
                - "Note any new responsibilities since your last pay change"
                - "Ask the agent to tighten the sheet to one side in plain language"
            - name: Total compensation calculator spreadsheet
              description: |-
                ## Purpose
                Headline base pay can hide a smaller pension, a bonus that rarely pays out or unpaid overtime, and a small cash rise can be worth less than an extra week of leave. A spreadsheet that values each component of a package lets you price trades during a negotiation instead of guessing which concession matters.

                ## Milestones
                1. A sheet with rows for base, bonus, pension, insurance, equity, allowances and leave.
                2. A rule for valuing each row written beside it, such as bonus at its historical payout rate.
                3. Your current package entered as the first column.
                4. A blank column ready for any offer or revised package.

                ## Notes
                Value bonuses and equity conservatively. Using the target bonus as if it were guaranteed is the most common way people overstate a package.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working spreadsheet values every package component with a stated rule and shows your current total in the first column."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a sheet with one row per pay and benefit component"
                - "Write the valuation rule for each row in a notes column"
                - "Enter your current package from the inventory"
                - "Test the sheet by pricing one extra week of leave against a cash rise"
            - name: Alternatives map if the answer is no
              description: |-
                ## Purpose
                Your strongest position in any pay talk is knowing what you will do if the answer is no: another offer, a role change, a later review, or staying for reasons that outweigh the money. Mapping your real alternatives stops a refusal from feeling like a dead end and shows you how hard you can reasonably push.

                ## Milestones
                1. Every realistic alternative to agreement listed, including staying put.
                2. Each alternative rated for value, likelihood and timing.
                3. Your best alternative named and its strength described honestly.
                4. One action identified that would make that alternative stronger before you negotiate.

                ## Notes
                Do not bluff about alternatives you do not have. Saying you will leave when you will not usually costs more trust than it gains in pay.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list of alternatives with your best one named and one step taken to strengthen it before the negotiation."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List what you would do if the employer says no to any increase"
                - "Rate each alternative for value, likelihood and how soon it could happen"
                - "Name your best alternative in one sentence"
                - "Take one step this week that makes that alternative stronger"
            - name: Answers to salary history and expectation questions
              description: |-
                ## Purpose
                'What are you earning now?' and 'What are your salary expectations?' arrive early, often on a recruiter's first call, and an unprepared answer can cap an offer before you have seen the role. Writing and practising short, polite answers lets you share a researched range, defer when that suits you, and avoid anchoring on your current pay.

                ## Milestones
                1. A one-sentence answer to the current salary question that redirects to the role's value.
                2. A researched expectations range ready to state confidently.
                3. A polite deferral line for very early conversations.
                4. All three answers said aloud until they come out naturally.

                ## Notes
                Some places ban employers from asking about salary history. Check the rule where you live, but have an answer ready either way.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three written answers for salary history, expectations and deferral, each practised aloud at least three times."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-sentence answer to 'what are you earning now'"
                - "Write the expectations range you will state, based on your market research"
                - "Write a polite line that defers the number until you know the role"
                - "Say each answer aloud three times and trim any filler"
            - name: Pay transparency and salary history rules where you work
              description: |-
                ## Purpose
                Rules on what employers must publish, what they may ask and whether you can discuss pay with colleagues differ widely between countries, states and even cities. Knowing which rules apply to you tells you what you can request, what you can decline to answer and what a job advert should already show.

                ## Milestones
                1. The official source for employment rules in your location identified.
                2. Rules on salary history questions and pay range disclosure noted in plain words.
                3. Any right to discuss pay with colleagues or request pay information written down.
                4. Questions you are unsure about listed for an adviser, union or official helpline.

                ## Notes
                This is a reading exercise, not legal advice. For anything that affects a dispute, speak to an employment adviser, union representative or the official advice service where you live.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note summarises the pay transparency and salary history rules for your location, with official sources linked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the government or official advice service page on employment rights where you work"
                - "Note what employers may ask about your past pay"
                - "Note whether job adverts or employers must disclose pay ranges"
                - "List any open questions for a union or employment adviser"
            - name: Quarterly market pay check-in
              description: |-
                ## Purpose
                Market rates for some roles move faster than annual reviews, and people often discover they are underpaid only when a new joiner mentions their offer. A short check each quarter keeps your range current, so a pay conversation or an approach from a recruiter never catches you without numbers.

                ## Milestones
                1. Two to four fresh data points added to your market range each quarter.
                2. The low, middle and high figures updated when the data shifts.
                3. Any gap of more than about ten percent between your pay and the middle flagged.
                4. A decision recorded each quarter: hold, prepare an ask or start looking.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your market range has been updated with new dated data points in each of the last four quarters, with a hold or act decision recorded."
                cadence: rolling
              tasks:
                - "Add this quarter's new data points to your market range @recurring(quarterly)"
                - "Save two new comparable job adverts that publish pay @recurring(monthly:19)"
                - "Recalculate the middle of the range if new data shifts it"
                - "Write a one-line hold, ask or look decision for the quarter"
            - name: Pay review season preparation calendar
              description: |-
                ## Purpose
                Pay rises are usually decided before the review meeting, when managers submit recommendations against a budget. Working back from your employer's review date and starting eight weeks ahead puts your evidence in front of your manager while the decision is still open.

                ## Milestones
                1. The review decision date and budget submission date marked in your calendar.
                2. An eight-week preparation plan with your evidence, market data and ask in order.
                3. A short pre-review conversation booked before recommendations are submitted.
                4. The outcome and the reasons given recorded after each cycle.

                ## Notes
                If your manager says decisions are already made, ask when the next window opens and what would need to be true for you to be at the top of it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For each review cycle, a pre-review conversation took place before the budget submission date and the outcome was recorded."
                cadence: cyclic
              tasks:
                - "Ask your manager when pay recommendations are submitted this year"
                - "Block an eight-week preparation reminder before that date @recurring(yearly)"
                - "Book a pre-review conversation two weeks before submissions close"
                - "Write down the outcome and the reasons given after the cycle"
            - name: Monthly impact note for the pay case
              description: |-
                ## Purpose
                When review time comes, last spring's best result is usually forgotten and the evidence sheet gets written in a panic. Ten minutes each month noting a measurable result, a cost saved or a responsibility added keeps the numbers that justify a rise ready and dated.

                ## Milestones
                1. A running note with one dated entry per month.
                2. Each entry holding a number, the business goal it served and who saw it.
                3. Entries tagged as candidates for the next pay conversation.
                4. The note used to refresh the value evidence sheet before each review.

                ## Notes
                Keep this narrowly about pay-relevant outcomes. Praise and feedback belong in a wider wins log; here you want the figures a budget holder can repeat.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The impact note has at least ten monthly entries in the last twelve months, each with a number attached."
                cadence: rolling
              tasks:
                - "Create a running note headed with the date of your last pay change"
                - "Add one measurable result from this month @recurring(monthly:12)"
                - "Tag the entries strong enough for your next pay conversation"
                - "Copy the tagged entries into your value evidence sheet before each review"
            - name: Payslip and pay change audit
              description: |-
                ## Purpose
                Agreed rises, back pay, bonus payments and allowance changes go wrong more often than people expect, and errors are easier to fix in the month they happen. A short monthly check of each payslip against what was agreed in writing catches mistakes before they compound.

                ## Milestones
                1. Each payslip compared with your agreed salary, hours and allowances.
                2. Any rise checked for the right amount and the right effective date, including back pay.
                3. Discrepancies raised with payroll in writing within the month.
                4. The year-end pay and tax summary checked against your own records.

                ## Notes
                Keep confirmation emails and letters for every pay change in one folder. Payroll will ask for the written agreement before correcting anything.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every payslip in the last twelve months has been checked against agreed pay, with any discrepancy raised in writing within a month."
                cadence: rolling
              tasks:
                - "Create a folder for pay change letters and confirmation emails"
                - "Compare this month's payslip with your agreed pay and allowances @recurring(monthly:26)"
                - "Email payroll about any discrepancy with the agreement attached"
                - "Check the year-end pay and tax summary against your records @recurring(yearly)"
            - name: Market pay intelligence log
              description: |-
                ## Purpose
                Pay figures you hear in passing, from recruiter calls, job adverts, friends who changed jobs and industry reports, are lost unless they are written down. A simple log with the role, level, location, figure, source and date becomes the best evidence you have when it is time to ask.

                ## Milestones
                1. A log with columns for date, role, level, location, base, total and source.
                2. Every recruiter call and pay-transparent advert in your field added as it appears.
                3. Entries older than about eighteen months marked as stale.
                4. A summary line at the top showing the current range.

                ## Notes
                Start from the **Metrics log** template. Record what was actually said or shown, and mark hearsay as hearsay.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pay log holds at least twelve dated entries from at least three different kinds of source, with a current range at the top."
                cadence: rolling
              tasks:
                - "Create a pay log from the metrics log template"
                - "Add every pay figure from recruiter calls or adverts the same day you hear it"
                - "Mark entries older than eighteen months as stale @recurring(monthly:8)"
                - "Update the summary range at the top of the log"
            - name: Annual benefits enrolment review
              description: |-
                ## Purpose
                Many employers open benefits choices once a year, and the default often leaves value unclaimed: an unmatched pension contribution, unused salary sacrifice schemes, or cover you pay for twice. Reviewing each option during the window is often worth as much as a small pay rise.

                ## Milestones
                1. The enrolment window dates noted and the benefits guide downloaded.
                2. Each option checked for whether the employer matches or subsidises it.
                3. Choices made for the coming year with the reasons written down.
                4. Questions on tax treatment taken to payroll or a qualified adviser.

                ## Notes
                This is about understanding and using what is on offer. For pension contribution levels or tax effects on your own situation, ask a regulated adviser or the scheme provider.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Benefits choices for the year are submitted inside the enrolment window, with any employer match taken up or a written reason for not doing so."
                cadence: cyclic
              tasks:
                - "Find the dates of this year's benefits enrolment window"
                - "Check which benefits the employer matches or subsidises"
                - "Submit your choices before the window closes @recurring(yearly)"
                - "Write down any tax questions for payroll or an adviser"
            - name: Bonus target tracking through the year
              description: |-
                ## Purpose
                Bonuses are often decided by metrics set at the start of the year that nobody looks at again until the payout disappoints. Tracking your progress against the stated measures each quarter lets you raise concerns, fix gaps and argue for the right payout while there is still time.

                ## Milestones
                1. The bonus scheme rules and your individual measures written down.
                2. Progress against each measure recorded every quarter.
                3. Any measure that has become unreachable or irrelevant raised with your manager.
                4. A short case for your payout prepared before bonus decisions are made.

                ## Notes
                If your measures are not written anywhere, ask for them in writing. A bonus you cannot track is hard to negotiate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Quarterly progress against each written bonus measure is recorded, and a payout case is sent before bonus decisions are made."
                cadence: cyclic
              tasks:
                - "Ask for your bonus measures and the scheme rules in writing"
                - "Record progress against each bonus measure @recurring(quarterly)"
                - "Raise any measure that no longer fits the work with your manager"
                - "Send a short payout case before bonus decisions are made"
            - name: Negotiation debrief log
              description: |-
                ## Purpose
                Each pay conversation teaches you something about your employer, your sector and your own habits, and most of it is forgotten by the next one. A short debrief after every negotiation, offer or review records what was asked, what was said and what you would change, so each conversation starts better than the last.

                ## Milestones
                1. A debrief template with ask, response, concessions, outcome and lessons.
                2. A debrief written within two days of every pay conversation.
                3. Patterns across debriefs, such as conceding too early, noted at the top.
                4. The patterns read before the next negotiation.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pay conversation in the last two years has a written debrief, and a list of recurring patterns sits at the top of the log."
                cadence: rolling
              tasks:
                - "Create a debrief template with ask, response, concessions, outcome and lessons"
                - "Write a debrief within two days of your next pay conversation"
                - "Note any pattern that shows up in two or more debriefs"
                - "Read the patterns list the day before each negotiation"
            - name: Real pay check against inflation
              description: |-
                ## Purpose
                Three percent in a year of five percent inflation is a pay cut in what your salary buys. Comparing your pay history with the official inflation figures once a year shows whether you are keeping up, and gives you a factual point to raise when rises fall behind.

                ## Milestones
                1. Your pay for each of the last five years written down.
                2. The official annual inflation figure for each year found from the statistics office.
                3. Your real pay change calculated year by year.
                4. A sentence on whether your pay has kept pace, ready for your next review.

                ## Notes
                Inflation alone rarely wins a rise, but it is a useful fact alongside market data and results. Use the official national figure rather than an estimate.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A five-year table shows your nominal pay, official inflation and real pay change, updated within the last twelve months."
                cadence: cyclic
              tasks:
                - "Write down your salary for each of the last five years"
                - "Find the official annual inflation figures from your statistics office"
                - "Calculate your real pay change for each year"
                - "Update the table after each pay change or new inflation release @recurring(yearly)"
            - name: Negotiation fundamentals reading plan
              description: |-
                ## Purpose
                Just a few core ideas, such as interests versus positions, anchoring, alternatives and trading concessions, explain most of what happens in a pay negotiation. Reading two well-regarded books or courses on negotiation and noting how each idea applies to pay builds a framework you can use for years.

                ## Milestones
                1. Two negotiation books or courses chosen from recommendations.
                2. A one-page summary of the core ideas in your own words.
                3. Each idea paired with a pay example from your own work.
                4. Three techniques chosen to try in your next pay conversation.

                ## Notes
                Prefer sources built on research and real negotiations over aggressive tactics. Pay talks with an employer you will keep working with reward a collaborative tone.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two sources completed, with a one-page summary and three named techniques chosen for your next pay conversation."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose two negotiation books or courses from trusted recommendations"
                - "Read or watch one chapter or module @recurring(weekly:sun)"
                - "Write a one-page summary of the core ideas in your own words"
                - "Pick three techniques to try in your next pay conversation"
            - name: Anchoring and naming the first number
              description: |-
                ## Purpose
                Whoever names the first figure tends to pull the final outcome towards it, which is why recruiters often ask for yours early. Learning when to name a number, how to phrase a range so its bottom is still acceptable, and how to respond when the other side anchors low gives you control at the most important moment.

                ## Milestones
                1. The idea of anchoring explained in your own words with one pay example.
                2. Rules written for when you will name a number first and when you will wait.
                3. A range phrased so the lowest figure is one you would happily accept.
                4. A response practised for a low first offer that resets the conversation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written rules for naming a first number, a prepared range and a practised response to a low anchor are saved in your notes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read one research summary on anchoring in negotiations"
                - "Write your rules for when to name a number first"
                - "Phrase a range where the bottom figure meets your target"
                - "Practise a calm reply to a first offer well below your range"
            - name: Scripts for 'there is no budget' and other objections
              description: |-
                ## Purpose
                'There is no budget this year', 'you are already at the top of the band' and 'we pay everyone the same' end most pay conversations because the employee has no reply ready. Writing a calm, specific response to each common objection keeps the conversation open and moves it towards something the employer can say yes to.

                ## Milestones
                1. The eight objections you are most likely to hear listed.
                2. A one or two sentence reply written for each.
                3. A fallback ask attached to each reply, such as a review date or a non-cash benefit.
                4. Each reply practised aloud with a partner playing the manager.

                ## Notes
                A good reply asks a question: 'What would need to be true for this to be possible in the next cycle?' turns a no into a set of conditions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A script with replies and fallback asks for at least eight common pay objections, each practised aloud once."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the eight pay objections you are most likely to hear"
                - "Write a short reply and a fallback ask for each"
                - "Ask the agent to play your manager and raise each objection in turn"
                - "Rewrite any reply that felt defensive when said aloud"
            - name: Mock salary negotiation with a practice partner
              description: |-
                ## Purpose
                Knowing what to say and saying it while someone pushes back are different skills, and most people concede on the first objection the first time they try. Two or three role plays with a friend, mentor or coach, played as the recruiter or manager, build the composure to hold a pause and repeat your ask.

                ## Milestones
                1. A practice partner briefed with the scenario and the objections to raise.
                2. Two full role plays completed, one as a new offer and one as a pay review.
                3. Feedback captured on tone, pace and where you conceded.
                4. A third run completed after adjusting the weak points.

                ## Notes
                Ask your partner to be tougher than you expect the real conversation to be. Practise staying silent for five seconds after stating your number.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three role plays completed with a partner, with written feedback and a record of what changed in the third run."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a friend, mentor or coach to play the recruiter or manager"
                - "Send them your scenario, your ask and five objections to raise"
                - "Run two role plays and write down their feedback"
                - "Run a third role play focusing on the weakest moment"
            - name: Writing a negotiation email or written counter
              description: |-
                ## Purpose
                Many negotiations now happen partly by email, and a written counter can be forwarded unchanged to the person who approves it. A clear, warm email that thanks, states the ask, gives two or three reasons and proposes a next step is a reusable tool for offers and reviews alike.

                ## Milestones
                1. A template email with thanks, ask, reasons and next step.
                2. Versions written for a new offer counter and an internal pay review.
                3. Each version under 200 words and checked for tone by someone you trust.
                4. Saved where you can find and adapt it within ten minutes.

                ## Notes
                Lead with enthusiasm for the role, then the ask. A counter that sounds like a complaint is harder for a hiring manager to champion internally.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Two saved email templates, each under 200 words, reviewed for tone by one other person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a counter email with thanks, ask, reasons and next step"
                - "Adapt it into a version for an internal pay review"
                - "Cut both versions to under 200 words"
                - "Ask someone you trust to read both for tone"
            - name: Reading pay clauses in an offer letter and contract
              description: |-
                ## Purpose
                Contracts hold the details that shape your pay for years: how bonuses are decided, whether overtime is included in salary, notice periods, clawback on sign-on bonuses and when pay is reviewed. Learning to read these clauses before you sign means you negotiate the terms that matter, not only the headline figure.

                ## Milestones
                1. A checklist of pay-related clauses to look for in any offer or contract.
                2. Each clause on the checklist explained in a plain sentence.
                3. A past or current contract read against the checklist as practice.
                4. Unclear clauses listed as questions for HR or an employment adviser.

                ## Notes
                This helps you spot what to ask about. For the legal effect of a clause, ask HR in writing or an employment adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A saved clause checklist with plain explanations, tested against one real contract with questions listed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open your current or most recent employment contract"
                - "List every clause that affects pay, bonus, overtime, notice or repayment"
                - "Write a plain-language sentence explaining each clause"
                - "Note any clause you would want clarified before signing a new one"
            - name: Understanding equity and stock compensation terms
              description: |-
                ## Purpose
                Share options, restricted stock units and growth shares can be a large part of an offer or worth nothing, and the difference is in vesting schedules, cliffs, exercise prices and what happens when you leave. Learning the vocabulary lets you ask the right questions and value equity cautiously in a negotiation.

                ## Milestones
                1. Plain definitions written for options, RSUs, vesting, cliffs, strike price and exercise windows.
                2. The questions to ask any employer about an equity grant listed.
                3. A worked example valuing a grant at zero, a low and a hopeful outcome.
                4. Tax questions noted for a qualified tax adviser.

                ## Notes
                Equity outcomes are uncertain and tax treatment varies by country and scheme. Treat this as preparation for questions; get personal tax advice from a qualified adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary of equity terms, a list of questions for employers and a three-scenario worked example are saved in your notes."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write plain definitions for options, RSUs, vesting and cliffs"
                - "List the questions to ask about any equity grant"
                - "Value an example grant at zero, a low and a hopeful outcome"
                - "Note tax questions to take to a qualified adviser"
            - name: Counter-proposal on a new job offer
              description: |-
                ## Purpose
                The moment between a verbal offer and a signature is when you have the most room to improve pay, because the employer has already chosen you and replacing you costs time. A prepared counter, delivered warmly within a day or two, often lifts base pay, a sign-on payment or a start date without risking the offer.

                ## Milestones
                1. The offer written down in full and priced in your calculator.
                2. A counter chosen from your target figures, with two reasons tied to market data and the role.
                3. The counter delivered by phone or email with a clear next step.
                4. The final agreed terms confirmed in writing before you resign anywhere.

                ## Notes
                Ask for everything you want in one counter rather than coming back several times. Pick the two or three items that matter most and be ready to trade the rest.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written counter is sent within two working days of the offer, and the final agreed terms are confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down every element of the offer as stated"
                - "Price the offer in your total compensation calculator"
                - "Choose the two or three items you will counter on and the reasons"
                - "Send the counter with a proposed time to talk @priority(high)"
                - "Get the final agreed terms in writing before resigning from your current role"
            - name: Annual pay review meeting
              description: |-
                ## Purpose
                The formal review is often the only scheduled moment when your pay is on the table. Going in with your market range, value evidence and a specific figure, and leaving with either a rise or a written plan for one, turns a routine meeting into the main lever on your income each year.

                ## Milestones
                1. Market range, value evidence and target figure prepared a week before.
                2. The ask stated with a specific figure early in the meeting.
                3. Either an agreed rise or written conditions and a date for the next review.
                4. Meeting notes sent to your manager within a day confirming what was agreed.

                ## Notes
                Start from the **Meeting notes** template. If the answer is not yet, ask for the conditions in writing and a date to revisit, ideally within six months.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The review meeting ends with a confirmed rise or written conditions and a revisit date, summarised by email within one day."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Confirm the date of your annual pay review meeting"
                - "Prepare your market range, evidence sheet and figure a week before"
                - "State your figure in the first ten minutes of the meeting"
                - "Email a summary of what was agreed within a day"
            - name: Sign-on bonus and start date terms
              description: |-
                ## Purpose
                When an employer cannot move further on base pay, a one-off sign-on payment, an earlier review date or a later start can close the gap, especially if you are giving up a bonus or unvested pay by leaving. Asking for these specifically, with the reason, is often easier for a hiring manager to approve than more salary.

                ## Milestones
                1. Any bonus, equity or benefits you forfeit by leaving calculated.
                2. A sign-on amount or alternative term proposed with that calculation as the reason.
                3. Repayment or clawback terms on any sign-on payment read and understood.
                4. The agreed start date and one-off terms confirmed in the written offer.

                ## Notes
                Sign-on payments often have to be repaid if you leave within a year or two. Check the clawback period before you accept and plan around it.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A sign-on or start-date request with a stated reason is made, and any agreed terms, including clawback, appear in the written offer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Calculate the bonus, equity or benefits you give up by leaving"
                - "Propose a sign-on amount or earlier review using that figure"
                - "Ask how long any sign-on payment is repayable for"
                - "Check the written offer shows the agreed start date and one-off terms"
            - name: Negotiating non-salary benefits
              description: |-
                ## Purpose
                Extra leave, a training budget, a home office allowance, a better job title or paid professional exams can be easier for an employer to grant than salary and worth a lot to you. Choosing the two or three benefits you value most and pricing them makes them real bargaining options rather than afterthoughts.

                ## Milestones
                1. A list of negotiable benefits at your employer or the hiring company.
                2. Each benefit priced in your calculator and ranked by what it is worth to you.
                3. Your top two or three requested with a reason for each.
                4. Agreed benefits recorded in writing, not left as verbal promises.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least two priced non-salary benefits are requested, and any agreed are confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask HR for the full list of benefits and which ones vary by person"
                - "Price each benefit in your total compensation calculator"
                - "Rank them by value to you and pick the top three"
                - "Request the agreed benefits in writing"
            - name: Title and level negotiation at offer stage
              description: |-
                ## Purpose
                Your joining level sets your pay band, your next promotion date and the market rate for your next move, so a level too low costs you for years. Checking how the role was levelled and making a case for the higher level, when your experience supports it, can matter more than the starting figure.

                ## Milestones
                1. The level and band of the offered role confirmed with the recruiter.
                2. The company's expectations for that level and the next one compared with your experience.
                3. A case for the higher level made with specific examples, or a decision not to push.
                4. If the level stays, a written agreement on when it will be reviewed.

                ## Notes
                If the company will not change the level, an early review date in writing, such as six months in, is a common compromise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The offered level is confirmed and either raised or paired with a written early review date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the recruiter what level and band the offer is at"
                - "Ask for the written expectations for that level and the one above"
                - "Match your experience to the higher level with three examples"
                - "Ask for an early level review in writing if the level does not change"
            - name: Out-of-cycle raise after a role expansion
              description: |-
                ## Purpose
                If your job has grown, more people, a bigger budget, new responsibilities, since your pay was set, waiting a year for the review means working at a higher level for lower pay. Asking for a mid-year adjustment with a clear before-and-after comparison is reasonable and often approved when the case is concrete.

                ## Milestones
                1. A before-and-after comparison of your role written on one page.
                2. The new responsibilities matched against the pay band they usually carry.
                3. A one-to-one held with a specific ask and the comparison shared.
                4. A decision or a dated follow-up agreed and confirmed by email.

                ## Notes
                Start from the **1:1** template. Raise it soon after the change, while the extra work is visible, rather than months later.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page role comparison is shared in a one-to-one, ending in a recorded decision or a dated follow-up."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your role as it was when pay was set and as it is now"
                - "Find the band that usually goes with the expanded responsibilities"
                - "Book a one-to-one titled pay and scope discussion"
                - "Confirm the decision or follow-up date by email afterwards"
            - name: Bonus structure renegotiation
              description: |-
                ## Purpose
                Bonuses based on measures you cannot influence, or target percentages below the market for your role, quietly depress total pay year after year. Proposing better measures or a higher target at the start of a year, with evidence, is often easier to agree than a base salary rise.

                ## Milestones
                1. Your current bonus target and measures compared with market data for your role.
                2. Measures you cannot influence identified with examples.
                3. A proposal written with revised measures or target and the reasons.
                4. The agreed structure confirmed in writing before the bonus year starts.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written bonus proposal is discussed before the bonus year starts, and the agreed structure is confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare your bonus target with market data for your role"
                - "Mark the bonus measures you cannot influence and why"
                - "Write a proposal with revised measures or a higher target"
                - "Raise the proposal before the new bonus year is set"
            - name: Equity grant and refresh negotiation
              description: |-
                ## Purpose
                At companies that pay partly in shares, the initial grant and later refresh grants can make up a large share of total pay, and both are often negotiable. Understanding your vesting schedule and when refresh decisions are made lets you ask for a larger grant at the right moment, with reasons.

                ## Milestones
                1. Your current grants, vesting dates and remaining unvested amounts listed.
                2. The company's refresh policy and decision dates found out.
                3. A request for a larger initial or refresh grant made with reasons.
                4. Any agreed grant confirmed in a written grant letter.

                ## Notes
                Value equity cautiously and get personal tax advice before exercising or selling anything. The negotiation is about the grant, not about investment decisions.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Your vesting schedule is documented, a grant request is made before the refresh decision date, and any outcome is confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List your grants, vesting dates and unvested amounts"
                - "Ask HR how and when refresh grants are decided"
                - "Make a grant request with reasons before the decision date"
                - "Review your vesting schedule and refresh eligibility @recurring(yearly)"
            - name: Recruiter screening call with the salary question
              description: |-
                ## Purpose
                Recruiters usually ask about pay on the first call, and the answer gets written into the hiring system before you have met the team. Preparing for this one call, with your range, your deferral line and your own questions about the band, keeps the number open until you know what the role really is.

                ## Milestones
                1. Your expectations range and deferral line on a note in front of you.
                2. The budgeted range for the role asked for directly.
                3. The interview process and timeline written down.
                4. A note made of exactly what you said about pay.

                ## Notes
                Asking 'What is the budgeted range for this role?' is normal and often answered. If the range is below your walk-away figure, say so politely now rather than after four interviews.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "After the screening call, the role's budgeted range, the process timeline and your stated pay position are written down."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Put your range and deferral line on a note before the call"
                - "Ask the recruiter for the budgeted range for the role"
                - "Write down the interview stages and timeline"
                - "Record exactly what you said about pay straight after the call"
            - name: Verbal offer call without accepting on the spot
              description: |-
                ## Purpose
                Offers usually arrive by phone, with warmth and a figure, and the natural reaction is to say yes. Planning the call in advance, to thank them, ask for the offer in writing and agree a time to come back, protects your room to negotiate without sounding hesitant about the job.

                ## Milestones
                1. A short script ready: thanks, enthusiasm, request for the written offer, time to reply.
                2. The offer details written down during the call.
                3. A reply date agreed, usually one to three working days.
                4. The written offer received before any counter is made.

                ## Notes
                Saying 'I am really pleased, can you send it in writing so I can look at the full package? I will come back to you by Thursday' is polite and expected.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The verbal offer call ends with no acceptance given, a reply date agreed and the written offer requested."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a four-line script for when the offer call comes"
                - "Keep a notepad by the phone to record the offer details"
                - "Agree a reply date during the call"
                - "Ask for the full written offer before discussing a counter"
            - name: Final offer sign-off and written confirmation
              description: |-
                ## Purpose
                Verbal agreements get lost when the hiring manager moves on or HR issues a standard template. Checking every agreed item against the final written offer and contract before you sign or resign is the last step that makes the negotiation count.

                ## Milestones
                1. A list of every agreed term from calls and emails.
                2. Each term found in the final offer letter or contract.
                3. Any missing or different term raised in writing and corrected.
                4. The signed documents saved with your pay records.

                ## Notes
                Do not resign from your current role until the corrected written offer is in hand.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every agreed term appears in the signed offer or contract, saved with your pay records, before you resign anywhere."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every term agreed on calls and in emails"
                - "Tick each one off against the final offer letter and contract"
                - "Email HR about any term that is missing or different"
                - "Save the signed documents in your pay records folder"
            - name: Pay conversation when a promotion is confirmed
              description: |-
                ## Purpose
                Promotions are sometimes announced with a small rise, or with the pay change deferred to the next cycle, and the moment to ask is before you accept the new title. Knowing the new band and where a promoted person usually lands lets you negotiate the promotion rise rather than taking whatever is offered.

                ## Milestones
                1. The band for the new level and the typical promotion rise found out.
                2. The proposed new pay compared with the band and market data.
                3. A specific figure and effective date requested before accepting.
                4. The agreed pay and date confirmed in writing.

                ## Notes
                This project is about the pay attached to a promotion you have already been offered, not about building the case for the promotion itself.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before accepting a promotion, a specific pay figure and effective date are requested, and the agreed terms are confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask HR for the pay band of the new level"
                - "Compare the proposed promotion rise with the band and market data"
                - "Request a specific figure and effective date before accepting"
                - "Get the agreed pay and date confirmed by email"
            - name: Fixed-term contract renewal rate negotiation
              description: |-
                ## Purpose
                When a fixed-term or agency contract comes up for renewal, the employer has the cost and risk of replacing you, and you have a track record in the role. Opening the rate conversation four to six weeks before the end date, with evidence and market rates, gives both sides time to agree rather than defaulting to the same terms.

                ## Milestones
                1. The contract end date and notice terms confirmed.
                2. Current market rates for comparable contracts collected.
                3. A renewal proposal sent four to six weeks before the end date.
                4. Renewed terms confirmed in writing before the old contract ends.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A renewal proposal with a stated rate is sent at least four weeks before the contract ends, and the outcome is confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the contract end date and notice terms"
                - "Collect three current rates for comparable contracts"
                - "Send a renewal proposal with your rate six weeks before the end date"
                - "Confirm the renewed terms in writing before the end date"
            - name: First job offer negotiation
              description: |-
                ## Purpose
                Many first-job offers have some room, even on graduate schemes with fixed salaries, through start dates, relocation help, training or a sign-on payment. Learning to ask politely now sets a starting salary that every later rise builds on, and builds a habit you will use for the rest of your career.

                ## Milestones
                1. The offer checked against published pay for similar entry roles.
                2. Fixed and flexible parts of the offer identified, by asking if needed.
                3. One polite request made on salary or a flexible item.
                4. The final terms confirmed in writing.

                ## Notes
                On fixed-salary graduate schemes, the salary itself may not move, but relocation support or a start date often can. Asking politely does not usually put an offer at risk.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One polite negotiation request is made on a first job offer, and the final terms are confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find published starting salaries for three similar entry roles"
                - "Ask the recruiter which parts of the offer are flexible"
                - "Make one polite request on salary or a flexible item"
                - "Confirm the final terms in writing"
            - name: Pay rise request for hourly and shift work
              description: |-
                ## Purpose
                In hourly and shift roles, pay often moves only when the legal minimum rises or a manager is asked directly, and premiums for nights, weekends or extra skills may not be offered unless requested. A short, specific case built on reliability, extra duties and local rates can secure a higher hourly rate or a better premium.

                ## Milestones
                1. Your hourly rate, premiums and hours from the last three months written down.
                2. Local rates for the same role at other employers collected.
                3. Extra duties, training or reliability record listed.
                4. A specific hourly figure or premium requested and the answer recorded.

                ## Notes
                Check each year when the legal minimum wage changes where you work, and that your rate has been raised at least that much on time.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A request for a specific higher hourly rate or premium is made with local rate evidence, and the answer is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your hourly rate and premiums from recent payslips"
                - "Collect hourly rates for the same role from three local adverts"
                - "List extra duties, training and your attendance record"
                - "Check your rate rose with the legal minimum wage this year @recurring(yearly)"
            - name: Public sector and union pay scale progression
              description: |-
                ## Purpose
                On national pay scales the overall rise is set by collective bargaining, but your position on the scale, the increments you are due, regrading and starting point for a new role often have room. Knowing how your scale works and checking each increment arrives can be worth more than anything you could negotiate individually.

                ## Milestones
                1. Your pay scale, grade and point identified from your payslip or contract.
                2. The rules for annual increments and regrading written down.
                3. Your current duties compared with the grade description.
                4. Any regrading request or starting-point query raised through the right channel.

                ## Notes
                Your union representative or HR can explain the rules. A role whose duties have grown well beyond its grade description may qualify for a regrading review.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your scale, point and increment date are written down, and duties have been compared with the grade description, with any query raised."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find your pay scale, grade and point on your payslip"
                - "Read the rules for increments and regrading"
                - "Compare your duties with the official grade description"
                - "Check your annual increment has been paid on time @recurring(yearly)"
            - name: Pro-rata pay check for part-time and reduced hours
              description: |-
                ## Purpose
                Moving to part-time or compressed hours, often around children or caring, should keep your full-time equivalent rate intact, but bonuses, allowances and benefits are sometimes cut further than the hours. Checking the arithmetic before you sign the new arrangement protects your rate and your next rise.

                ## Milestones
                1. Your full-time equivalent salary written down.
                2. The proposed part-time pay, bonus, allowances and leave calculated pro rata.
                3. Any item reduced by more than the change in hours identified.
                4. Corrections requested in writing before the new contract is signed.

                ## Notes
                Ask that your full-time equivalent salary is shown in the new contract, so future rises and job moves start from that figure rather than the reduced one.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A pro-rata calculation of pay and benefits is checked against the new contract, with any mismatch raised in writing before signing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your current full-time equivalent salary"
                - "Calculate pro-rata pay, bonus, allowances and leave for the new hours"
                - "Compare the calculation with the proposed contract"
                - "Ask for your full-time equivalent salary to be stated in the contract"
            - name: Freelance and contractor day rate setting
              description: |-
                ## Purpose
                A contractor's day rate has to cover holidays, sick days, pension, equipment, insurance and the weeks between contracts, so the employee salary divided by working days badly undercharges. Building a rate from your costs and market rates, and raising it on a schedule, keeps contract work worth doing.

                ## Milestones
                1. Annual costs and expected billable days written down.
                2. A minimum day rate calculated from those figures.
                3. Market rates for comparable contracts collected from at least three sources.
                4. A standard rate and a rate increase date set and communicated to clients.

                ## Notes
                Tax and business structure decisions affect what rate you need. Take those questions to an accountant who works with contractors.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written minimum and standard day rate, derived from costs and market data, with a set date for the next rate increase."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List your annual business costs and expected billable days"
                - "Calculate the minimum day rate that covers them"
                - "Collect three market rates for comparable contracts"
                - "Review and announce your day rate to clients @recurring(yearly)"
            - name: Location-based pay for remote roles
              description: |-
                ## Purpose
                Some employers adjust pay by where you live, and a move or a remote offer can mean a different band from the one you expected. Understanding the employer's location policy and the market rate where you will live lets you negotiate on the value of the work rather than accepting a cut by postcode.

                ## Milestones
                1. The employer's location pay policy obtained in writing.
                2. Market rates for the role in your location and the employer's main location compared.
                3. A proposal made based on the role's value and the relevant market.
                4. What happens to pay if you move again written into the agreement.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The location pay policy is in writing, a proposal is made with both markets compared, and the move rule is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask HR for the location pay policy in writing"
                - "Compare market rates for the role in both locations"
                - "Make a pay proposal based on the role and the relevant market"
                - "Ask what happens to your pay if you move again"
            - name: Cash and equity mix in a startup offer
              description: |-
                ## Purpose
                Early-stage companies often offer lower salary with equity, and many let you choose more cash or more shares. Deciding what base you need to live on, then asking what each extra unit of equity costs in salary, lets you negotiate a mix that suits your circumstances rather than accepting the first split.

                ## Milestones
                1. The base salary you need for at least the next two years set from your budget.
                2. Funding stage, cash runway and equity terms asked about directly.
                3. Two or three cash and equity combinations requested from the company.
                4. A chosen mix with reasons written down and confirmed in writing.

                ## Notes
                Treat startup equity as uncertain; many startups never return value to staff. Choose the base you can live on even if the equity turns out to be worth nothing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen cash and equity mix, with the minimum base and the company's funding stage and runway recorded, is confirmed in the written offer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set the minimum base salary you need from your budget"
                - "Ask the founder about funding stage, runway and equity terms"
                - "Request two or three cash and equity combinations"
                - "Write down which mix you chose and why"
            - name: Pay equity check against peers and bands
              description: |-
                ## Purpose
                Pay gaps between people doing the same work often come from starting salaries that were never revisited. Gathering what you can legitimately learn, such as published bands, gap reports and what colleagues choose to share, and asking HR how your pay was set, gives you facts to raise a fair-pay conversation calmly.

                ## Milestones
                1. Published bands, gap reports or pay policies collected.
                2. Any pay information colleagues have chosen to share recorded accurately.
                3. A written question to HR asking how your pay was set and where it sits in the band.
                4. A next step decided: an adjustment request, a review date or advice through a formal route.

                ## Notes
                If you believe there is unlawful pay discrimination, take advice from a union, employment adviser or the official advice service before acting. Formal grievances are a separate process.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note of the facts gathered and HR's answer on how your pay was set, with a decided next step."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find any published pay bands or gap reports for your employer"
                - "Record pay information colleagues have chosen to share"
                - "Ask HR in writing how your pay was set and where it sits in the band"
                - "Repeat the check after each annual pay round @recurring(yearly)"
            - name: Three-year pay trajectory plan
              description: |-
                ## Purpose
                Annual rises of a few percent rarely add up to the salary you want, and most large jumps come from moves, promotions or specialisms. Setting a target figure for three years out and mapping the realistic routes to it turns pay from something that happens to you into a plan you check once a year.

                ## Milestones
                1. A target pay figure for three years from now written down.
                2. The gap between current pay and the target calculated.
                3. Three routes to close it compared: rises, promotion, a move or a specialism.
                4. One route chosen with the first-year milestone set.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written three-year target, the gap to it and a chosen route with a first-year milestone, reviewed yearly."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the pay figure you want to earn in three years"
                - "Calculate the gap between that and your current pay"
                - "Compare rises, promotion, a move and a specialism as routes"
                - "Review progress against the three-year target @recurring(yearly)"
            - name: Retention bonus terms and clawback review
              description: |-
                ## Purpose
                During restructures or before a key project, employers sometimes offer retention payments tied to staying until a date, and the terms decide whether you are ever paid. Reading the conditions closely and negotiating the date, amount and what happens if your role changes protects the value of the offer.

                ## Milestones
                1. The retention offer read in full with dates, amount and conditions noted.
                2. What happens if you are made redundant, change role or are dismissed found out.
                3. Changes requested where a condition is unclear or one-sided.
                4. The final terms confirmed in writing and the payment date in your calendar.

                ## Notes
                Ask specifically whether the payment is still made if the employer ends your role before the date. This is the condition most often missing.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Retention terms are confirmed in writing, including what happens if your role ends early, and the payment date is diarised."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the retention letter and note the dates, amount and conditions"
                - "Ask what happens if your role ends or changes before the date"
                - "Request changes to any unclear or one-sided condition"
                - "Put the payment date in your calendar once terms are confirmed"
            - name: Senior package terms on notice, deferred pay and change of control
              description: |-
                ## Purpose
                At senior levels, notice periods, deferred bonuses, garden leave, change-of-control terms and severance clauses can be worth more than the base salary and are negotiated before signing. Reviewing these terms with an employment lawyer and asking for the ones that matter protects you if the company is sold or your role ends.

                ## Milestones
                1. Notice, deferred pay, restrictive covenants and change-of-control clauses listed from the draft contract.
                2. Each term compared with what is usual for the level, through an adviser or peers.
                3. Requested changes agreed with an employment lawyer and sent.
                4. The final terms signed and summarised on one page.

                ## Notes
                Senior contracts are worth a lawyer's review before signing. Some employers contribute to the cost of legal advice; ask.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A lawyer-reviewed list of requested changes is sent, and a one-page summary of the signed senior terms is saved."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List notice, deferred pay, covenant and change-of-control clauses"
                - "Ask the employer whether they contribute to legal advice costs"
                - "Agree the requested changes with an employment lawyer"
                - "Save a one-page summary of the signed terms"
            - name: Making the pay case for someone on your team
              description: |-
                ## Purpose
                Managers negotiate pay too, on behalf of their reports, and a vague recommendation loses to a colleague's well-argued one when the budget is tight. Building a short case with market data, results and band position for each person you manage gets fairer outcomes and keeps good people.

                ## Milestones
                1. Each report's pay placed in their band and against market data.
                2. A short case written for anyone underpaid or growing fast.
                3. Recommendations submitted before the budget deadline with the cases attached.
                4. Outcomes explained to each report with what would change next year.

                ## Notes
                Keep each person's pay information confidential and share only what your employer's policy allows.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Written pay cases for each report are submitted before the budget deadline, and every report has heard their outcome and its reasons."
                cadence: cyclic
              tasks:
                - "List each report's pay, band position and market range"
                - "Write a short case for anyone underpaid or growing fast"
                - "Check your team's pay against bands before each review cycle @recurring(yearly)"
                - "Explain each outcome to the person with what would change next year"
---

# Salary Negotiation

Salary negotiation covers what you are paid and how you ask for more, whether the conversation is about a new offer or this year's pay review. The projects start with foundations (your current package, market data, pay bands and a walk-away number), then the routines that keep your evidence current, the negotiation skills themselves, specific asks such as a counter-offer or a sign-on bonus, and the calls and meetings where pay is decided. Later projects cover situations like shift work, public sector pay scales, contracting and startups, and finish with senior package terms, pay equity and making the case for your own team.

The rhythms are a monthly payslip check and impact note, a quarterly look at market pay and bonus progress, and a yearly round of benefits enrolment, review preparation and a real-pay check against inflation. The **Metrics log** template suits the market pay log, **Meeting notes** suits the annual pay review, and the **1:1** template suits an out-of-cycle raise conversation. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
