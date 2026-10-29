---
id: career-growth.annual-career-direction-review
name: Annual Career Direction Review
description: "A protected yearly review of how work is really going, scored against last year's intentions, ending in a written stay, grow, shift or leave decision and three changes checked every quarter."
category: personal
version: 1.0.0
tags: [career-growth, annual-career-direction-review, everyone, annual-review, reflection, career-direction, planning, decision-making]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - feedback-themes
    - development-plan
    - risk-register
  pillars:
    - name: Career Growth
      emoji: "🧭"
      description: "A working life steered rather than drifted: job searches and promotions, reputation and network, pay negotiations, career changes, credentials, and the evidence that you are getting better at what you do."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Annual Career Direction Review
          description: "Stepping back once a year to assess satisfaction, growth and direction, and deciding what to change next year."
          projects:
            - name: Booking a protected annual career review day
              description: |-
                ## Purpose
                Most people only think about direction when something goes wrong, which is the worst moment to think clearly. Putting a half day in the calendar, away from your desk and outside the employer's appraisal season, turns the review from a vague intention into an appointment you keep every year.

                ## Milestones
                1. A half day of four hours chosen, at least a month away and clear of appraisal deadlines.
                2. The slot blocked in your calendar as busy, with a location away from your usual workspace.
                3. Anyone who needs to know, such as a partner or childcarer, told about the time.
                4. The same week pencilled in for the following year.

                ## Notes
                Many people pick the quiet week between late December and early January, or their birthday month. Pick whatever is least likely to be cancelled, and avoid the fortnight before your formal performance review so the two do not blur.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A four-hour review slot is blocked in the calendar within the next three months, with a place and childcare or cover arranged."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pick a four-hour slot at least a month from today"
                - "Block it in your calendar as busy and add a location away from your desk"
                - "Arrange cover for anything that would pull you out of the slot"
                - "Block next year's review day in the same week @recurring(yearly)"
            - name: A career review folder that holds every year
              description: |-
                ## Purpose
                A review written on loose paper is lost by the following year, and the real value of an annual review appears only when you can compare three or four of them. One folder with the same structure each year, kept somewhere you own rather than on an employer's drive, makes that comparison possible.

                ## Milestones
                1. One folder created in personal storage, not on an employer's system.
                2. A subfolder for this year with fixed slots for raw material, scorecard, review notes and the plan.
                3. Any earlier appraisals, old plans or reflections you still have copied into an archive subfolder.
                4. A note at the top of the folder explaining the structure in three lines.
              priority: medium
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A personal folder exists with this year's four fixed sections and at least one earlier document filed in the archive."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a career review folder in storage you control personally"
                - "Add a subfolder for this year with four named sections"
                - "Search your email and files for old appraisals and plans to archive"
                - "Write a three-line note at the top explaining what goes where"
            - name: Gathering the year's raw material
              description: |-
                ## Purpose
                Memory keeps the last six weeks and the most dramatic moments, so a review written from memory alone judges the whole year on its final month. Spending two hours pulling the calendar, sent mail, notes, appraisal comments and any wins log into one place gives the review an accurate twelve months to work from.

                ## Milestones
                1. Twelve months of calendar entries skimmed and the significant ones listed.
                2. Sent mail and messages searched for launches, thanks, complaints and decisions.
                3. Appraisal comments, feedback and any wins log for the year copied into the folder.
                4. A raw list of at least thirty dated items saved in this year's raw material section.

                ## Notes
                Keep copies of your own notes and public feedback only. Do not export confidential employer documents to personal storage; write a one-line summary instead.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated list of at least thirty work events from the last twelve months is saved in the review folder before review day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Scroll back through twelve months of calendar and note the events that mattered"
                - "Search sent mail for words such as thanks, launched, decided and sorry"
                - "Copy appraisal comments and feedback for the year into the folder"
                - "Start gathering material four weeks before review day @recurring(yearly)"
            - name: Year on a page timeline
              description: |-
                ## Purpose
                A list of thirty items is still hard to read as a story. Laying the year out month by month on a single page shows where the effort went, which stretches felt flat, and when the big changes happened, and it is the page you will glance at most during the review itself.

                ## Milestones
                1. Twelve month columns or rows with two to four events each.
                2. Each month marked as a high, a low or steady.
                3. The three biggest turning points of the year circled or highlighted.
                4. One sentence at the bottom summing up the year in plain words.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page timeline covering all twelve months, with highs, lows and three turning points marked and a summary sentence written."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draw a twelve-month grid on one page or one slide"
                - "Place two to four items from the raw list in each month"
                - "Mark each month as a high, a low or steady"
                - "Write one plain sentence that sums up the year"
            - name: Eight-dimension work satisfaction scorecard
              description: |-
                ## Purpose
                Asking yourself whether you are happy at work invites a mood, not an answer. Scoring eight separate dimensions from 1 to 10, such as pay, the people, learning, autonomy, workload, meaning, security and flexibility, shows which part of the job is actually the problem and gives you a number to compare next year.

                ## Milestones
                1. Eight dimensions chosen and written down, keeping the same set for future years.
                2. Each dimension scored from 1 to 10 with one sentence of evidence beside it.
                3. The two lowest and two highest scores identified.
                4. Scores saved in a log that can show a trend over several years.

                ## Notes
                Start from the **Metrics log** template. Score the year as a whole, not this week. If a score swings wildly with mood, write down what a 4 and an 8 would look like for that dimension.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Eight dimensions scored from 1 to 10 with a sentence of evidence each, saved in a multi-year log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose eight satisfaction dimensions and write a line defining each"
                - "Score each dimension from 1 to 10 for the year as a whole"
                - "Add one sentence of evidence beside every score"
                - "Copy the scores into a metrics log with one column per year"
            - name: Energy audit of a typical working month
              description: |-
                ## Purpose
                Satisfaction scores say what is wrong; an energy audit says where in the week it happens. Going through one ordinary month of calendar and marking each recurring activity as energising, neutral or draining often reveals that a role is fine and two meetings are the real cost.

                ## Milestones
                1. One typical month of calendar entries listed by activity type.
                2. Each activity marked as energising, neutral or draining.
                3. The share of hours in each category estimated.
                4. The three most draining and three most energising activities named.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A month of activities is sorted into energising, neutral and draining, with the hours in each estimated and the top three of each named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick one ordinary month from the last year in your calendar"
                - "List every recurring activity and the hours it took"
                - "Mark each one energising, neutral or draining"
                - "Estimate what share of your hours sits in each group"
            - name: Checking last year's intentions against what happened
              description: |-
                ## Purpose
                Without a look back at last year's plan, a review cannot tell whether you are steering or just reacting. Setting what you meant to do beside what actually happened, and naming why each gap opened, is the single most useful part of the whole exercise; in a first year, reconstruct what you hoped for twelve months ago as honestly as you can.

                ## Milestones
                1. Last year's plan found, or this year's starting hopes written from memory.
                2. Each intention marked as done, partly done, dropped or overtaken by events.
                3. A one-line reason recorded for every gap.
                4. Any intention still worth carrying forward flagged for next year.

                ## Notes
                Overtaken by events is a legitimate result. A restructure or a new baby changes the map, and noticing that is better than scoring it as failure.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every intention from last year carries a status and a one-line reason, with carry-forward items flagged."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find last year's plan or write down what you hoped for a year ago"
                - "Give each intention a status of done, partly, dropped or overtaken"
                - "Write one line on why each gap opened"
                - "Flag the intentions that still deserve a place next year"
            - name: Growth evidence inventory for the year
              description: |-
                ## Purpose
                Feeling stuck and being stuck are different things, and only evidence separates them. Listing what you can do now that you could not do a year ago, from a tool or a type of meeting to a decision you are trusted with, shows whether the role is still teaching you anything.

                ## Milestones
                1. At least eight specific capabilities gained in the year written down.
                2. Each one tagged as skill, responsibility, relationship or reputation.
                3. A clear count of anything learned in the last six months versus the first six.
                4. A one-sentence verdict on whether growth is rising, flat or falling.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An inventory of at least eight new capabilities, tagged by type and half-year, ends with a written verdict on the growth trend."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down everything you can do now that you could not a year ago"
                - "Tag each item as skill, responsibility, relationship or reputation"
                - "Mark which half of the year each one arrived in"
                - "Write a one-sentence verdict on your growth trend"
            - name: Pay and security snapshot for the year
              description: |-
                ## Purpose
                Money is part of direction even when it is not the reason you work, and drift in pay is easy to miss when it happens slowly. A short snapshot of total pay this year against last, against living costs and against two or three published market ranges tells you whether the money question belongs on next year's list.

                ## Milestones
                1. Total pay for the year written down, including bonus, benefits and any side income.
                2. Change from last year calculated as a percentage.
                3. Two or three published salary ranges for your role and location noted.
                4. A sentence on whether pay or job security needs action next year.

                ## Notes
                Keep this to a snapshot. If the gap is large, the salary negotiation area is where you work on it. Take tax or pension questions to a qualified adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One page records this year's total pay, the change from last year, two market ranges and a sentence on whether money needs action."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Add up this year's total pay from payslips and benefit statements"
                - "Calculate the percentage change from last year"
                - "Look up two published salary ranges for your role and location"
                - "Write one sentence on whether pay needs action next year"
            - name: Your standard set of review questions
              description: |-
                ## Purpose
                Changing the questions every year makes the answers impossible to compare. Settling on eight to twelve questions you will answer each year, such as what gave you energy, what you avoided, what you would repeat, and what a friend would say you should change, gives the review a spine.

                ## Milestones
                1. A list of eight to twelve review questions written and saved in the folder.
                2. Each question tested by answering it once in a sentence.
                3. Any question that produced a useless answer replaced.
                4. The final list printed or saved where you will see it on review day.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved list of eight to twelve review questions, each tested once with a trial answer."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Draft twelve candidate questions about the year at work"
                - "Answer each one quickly in a single sentence"
                - "Replace any question whose answer told you nothing new"
                - "Save the final list at the front of the review folder"
            - name: Quarterly career direction check-in
              description: |-
                ## Purpose
                Left alone for twelve months, a yearly plan is usually forgotten by March. Thirty minutes each quarter to reread the plan, rescore the two weakest satisfaction dimensions and decide one adjustment keeps the annual review alive between reviews without becoming a chore.

                ## Milestones
                1. A recurring thirty-minute slot in the calendar each quarter.
                2. Each check-in ending with the plan reread and one adjustment written.
                3. The two weakest dimensions rescored each quarter.
                4. Four check-in notes in the folder by the next annual review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly check-in notes, each with rescored weak dimensions and one adjustment, are in the folder by the next review day."
                cadence: rolling
              tasks:
                - "Put a recurring thirty-minute check-in slot in your calendar"
                - "Write a five-line check-in template in the review folder"
                - "Hold the direction check-in and record one adjustment @recurring(quarterly)"
                - "Rescore your two weakest satisfaction dimensions at each check-in"
            - name: Two-line monthly career note
              description: |-
                ## Purpose
                Raw material is easiest to gather when it already exists. Two lines at the end of each month, the best and the worst moment at work, take a minute and leave twelve entries that make the next review faster and fairer than any calendar trawl.

                ## Milestones
                1. A running note in the review folder with a heading for each month.
                2. At least ten of twelve months carrying their two lines by review day.
                3. Each entry dated and specific enough to remember the moment.
                4. The note used as the first source on review day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten monthly two-line notes exist in the review folder by the next annual review."
                cadence: rolling
              tasks:
                - "Create a running monthly note with this month's heading"
                - "Write two lines on the month's best and worst work moment @recurring(monthly:26)"
                - "Add any surprise of the month as an optional third line"
                - "Link the note from the front page of the review folder"
            - name: Friday energy mark for the working week
              description: |-
                ## Purpose
                Patterns in how weeks feel are the earliest signal that direction is slipping, long before a score drops. Marking each Friday as energising, flat or draining, with a single word on why, builds fifty data points that the review can count rather than guess.

                ## Milestones
                1. A simple weekly log with date, mark and one word of reason.
                2. At least forty weeks marked across the year.
                3. Runs of three or more draining weeks highlighted.
                4. The year's totals for each mark counted before review day.

                ## Notes
                Keep it to one word. The moment this becomes a diary it stops happening.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly log holds at least forty Friday marks across the year, with totals counted before the review."
                cadence: rolling
              tasks:
                - "Set up a weekly log with columns for date, mark and reason"
                - "Mark the week as energising, flat or draining with one word why @recurring(weekly:fri)"
                - "Highlight any run of three draining weeks in a row"
                - "Count the totals for each mark before review day"
            - name: Mid-year direction pulse
              description: |-
                ## Purpose
                Six months in is the point where a plan can still be rescued or honestly dropped. A short pulse at the half-way mark, rescoring all eight dimensions and checking the three changes, catches a direction going wrong while there is still time to act on it this year.

                ## Milestones
                1. A mid-year date fixed six months after review day.
                2. All eight satisfaction dimensions rescored.
                3. Each of the three changes marked as on track, behind or dropped.
                4. One decision recorded for the second half of the year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A mid-year pulse note with eight rescored dimensions and a second-half decision is filed six months after review day."
                cadence: cyclic
              tasks:
                - "Put a one-hour mid-year pulse in the calendar six months after review day"
                - "Rescore all eight dimensions and compare with review day @recurring(yearly)"
                - "Mark each of the three changes on track, behind or dropped"
                - "Write one decision for the second half of the year"
            - name: Monthly check on next year's three changes
              description: |-
                ## Purpose
                Three changes written on review day become three wishes unless something keeps them in view. A five-minute monthly glance that marks each change as moving, stalled or dropped is the smallest routine that still keeps a plan honest.

                ## Milestones
                1. The three changes listed in one place with a status column.
                2. A status recorded against each change every month.
                3. Any change stalled for two months in a row given a next step or dropped on purpose.
                4. Twelve months of status marks ready for the next review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each of the three changes carries a monthly status for the whole year, with any two-month stall resolved."
                cadence: rolling
              tasks:
                - "List the three changes with a status column beside each"
                - "Mark each change as moving, stalled or dropped @recurring(monthly:9)"
                - "Give any change stalled two months running a fresh next step"
                - "Drop a change on purpose, with a reason, rather than letting it fade"
            - name: Rereading past reviews before writing the new one
              description: |-
                ## Purpose
                The same complaint written three years running is a decision you keep postponing. Reading your previous reviews before starting the new one, and listing any theme that appears more than once, stops the review becoming a ritual that records the same frustration each year.

                ## Milestones
                1. All previous reviews read in order, oldest first.
                2. Themes that appear in two or more years listed.
                3. Each repeated theme marked as resolved, improving or stuck.
                4. Any stuck theme put on the agenda for review day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of themes repeated across past reviews, each marked resolved, improving or stuck, is on the review day agenda."
                cadence: cyclic
              tasks:
                - "Open every past review in the folder in date order"
                - "Reread past reviews and list repeated themes @recurring(yearly)"
                - "Mark each repeated theme as resolved, improving or stuck"
                - "Put any stuck theme at the top of the review day agenda"
            - name: Year-end archive and fresh review folder
              description: |-
                ## Purpose
                Multi-year records only exist when each year is handed over tidily to the next. Closing the year's subfolder with its final plan, and opening next year's with the same four sections and the new plan copied in, takes twenty minutes and saves a frantic search later.

                ## Milestones
                1. This year's subfolder complete with raw material, scorecard, review and plan.
                2. A one-paragraph summary of the year saved at the top of the subfolder.
                3. Next year's subfolder created with the same structure.
                4. The new plan copied into next year's subfolder.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year's subfolder is closed with a summary paragraph and next year's is open with the plan inside."
                cadence: cyclic
              tasks:
                - "Check this year's subfolder has all four sections filled"
                - "Write a one-paragraph summary of the year at the top"
                - "Archive the year and open next year's subfolder @recurring(yearly)"
                - "Copy the new plan into next year's subfolder"
            - name: Annual review partner swap
              description: |-
                ## Purpose
                People are kinder and sharper about someone else's career than about their own. Agreeing with one trusted friend or former colleague to read each other's review once a year, and ask the three hardest questions, catches the blind spot you would otherwise carry into next year.

                ## Milestones
                1. One review partner agreed, ideally outside your current employer.
                2. A simple swap format agreed: share the summary, ask three questions each.
                3. The first swap held within a month of review day.
                4. The partner's three questions and your answers saved in the folder.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A named review partner and you have swapped reviews once, with their three questions and your answers filed."
                cadence: cyclic
              tasks:
                - "List two or three people whose judgement on careers you trust"
                - "Ask one of them to swap annual reviews with you"
                - "Agree to share a one-page summary and ask three questions each"
                - "Swap reviews with your review partner @recurring(yearly)"
            - name: Writing honest answers to review questions
              description: |-
                ## Purpose
                Reflection is a skill, and most people answer review questions the way they would in an appraisal: defensive, polished and vague. Practising a few techniques, such as writing fast before editing, naming feelings in one word and asking what you would tell a friend, makes the answers useful rather than flattering.

                ## Milestones
                1. Three reflection techniques read about and tried once each.
                2. One review question answered twice, once polished and once honest, and the difference noted.
                3. A personal rule for review day written, such as no editing for the first twenty minutes.
                4. The technique that worked best named in the review folder.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three reflection techniques tried, a polished and an honest answer compared, and a personal writing rule saved for review day."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a short guide to reflective or expressive writing"
                - "Answer one review question in ten minutes without stopping to edit"
                - "Rewrite the same answer as if advising a close friend"
                - "Write the rule you will follow on review day"
            - name: Telling a bad year from a wrong direction
              description: |-
                ## Purpose
                Brutal years in the right career and pleasant years in the wrong one feel very different, and confusing them leads to quitting good paths or staying on bad ones. Learning a few tests, such as whether the low scores come from circumstances that will pass or from the work itself, makes the stay or leave decision far more reliable.

                ## Milestones
                1. Each low score tagged as caused by circumstance, by the employer or by the work itself.
                2. A check made on whether the same low scores appeared in previous years.
                3. A one-line test written: would this still bother you with a better manager and a calmer year.
                4. A conclusion recorded on whether this was a bad year, a bad fit or a wrong direction.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every low satisfaction score is tagged by cause and a written conclusion names the year as bad year, bad fit or wrong direction."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Tag each low score as circumstance, employer or the work itself"
                - "Compare the low scores with last year's scorecard"
                - "Ask whether each would still bother you with a good manager"
                - "Write a one-line conclusion: bad year, bad fit or wrong direction"
            - name: Keep, change and try reflection framework
              description: |-
                ## Purpose
                Blank pages invite rambling, and a framework turns reflection into decisions. Learning one simple structure, keep what works, change what does not, try one new thing, and applying it to every part of the scorecard produces a short list of candidate changes rather than a long essay.

                ## Milestones
                1. The keep, change and try structure applied to all eight satisfaction dimensions.
                2. At least three items in each of the three columns.
                3. Each try item small enough to start within a month.
                4. The candidate list carried into the three changes decision.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A keep, change and try table covering all eight dimensions holds at least nine items and feeds the three changes decision."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Draw three columns headed keep, change and try"
                - "Work through each satisfaction dimension and add items"
                - "Shrink every try item until it could start within a month"
                - "Circle the items that belong on next year's shortlist"
            - name: Spotting the early signs of career drift
              description: |-
                ## Purpose
                Drift rarely announces itself: it looks like accepting the default project again, a third year with no new skill, or a CV that has not needed updating. Knowing the half-dozen warning signs and checking yourself against them once a year turns a slow slide into something you can name and act on.

                ## Milestones
                1. A list of six drift signs written in your own words.
                2. Each sign checked against the last twelve months with a yes, partly or no.
                3. Any sign marked yes for a second year in a row flagged.
                4. One action noted against each flagged sign.

                ## Notes
                Common signs: no new responsibility in eighteen months, saying yes by default, a CV unchanged for two years, no new contact outside your team, envy of one specific person's job, and Sunday evening dread.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six drift signs are checked against the year, with repeat signs flagged and an action against each."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write six signs of career drift that would apply to you"
                - "Mark each one yes, partly or no for the past year"
                - "Compare the marks with last year's check if you have one"
                - "Write one action against every sign marked yes twice"
            - name: Three futures scenario exercise
              description: |-
                ## Purpose
                Most direction decisions compare the present with one imagined alternative, which makes the alternative look better than it is. Sketching three concrete futures five years out, staying on the current path, a stretch within your field, and a bolder shift, makes the trade-offs visible before choosing.

                ## Milestones
                1. Three five-year scenarios written in half a page each, in the present tense.
                2. Each scenario scored against the same eight satisfaction dimensions.
                3. The biggest risk and the first step named for each scenario.
                4. A preference recorded, with what would have to be true for each to work.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three written five-year scenarios, each scored on eight dimensions with a risk and first step, end in a recorded preference."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a half-page day in your life five years out on the current path"
                - "Write two more for a stretch within your field and a bolder shift"
                - "Score each scenario against your eight satisfaction dimensions"
                - "Name the biggest risk and the first small step for each"
            - name: Reading where your field is heading
              description: |-
                ## Purpose
                Directions that suit you today can quietly close in five years if the field shifts under it, through automation, regulation or a change in who buys the work. An hour a month noting trend pieces, job advert changes and what senior people in the field are worrying about gives the review a view beyond your own desk.

                ## Milestones
                1. Three reliable sources for your field chosen: a trade publication, a professional body and a job board.
                2. At least ten saved notes on trends by review day.
                3. A one-paragraph summary of where the field is heading written for the review.
                4. One implication for your own direction named.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten or more saved trend notes and a one-paragraph field outlook, with one personal implication, are in the review folder."
                cadence: rolling
              tasks:
                - "Choose three sources that track your field"
                - "Save one note on a change in your field and why it matters @recurring(monthly:17)"
                - "Compare this year's job adverts for your role with last year's"
                - "Summarise the field outlook in a paragraph before review day"
            - name: Two-question feedback request for the review
              description: |-
                ## Purpose
                Self-assessment is always partial, and the people around you see patterns you cannot. Sending three to five trusted colleagues two short questions before review day, what should I do more of, and what is one thing I could change, brings outside evidence in without the weight of a formal survey.

                ## Milestones
                1. Three to five people chosen from different directions: a manager, a peer, someone you support.
                2. The two questions sent with a clear deadline and a promise of no follow-up meeting.
                3. Replies grouped into themes.
                4. One theme carried into the review as evidence.

                ## Notes
                Start from the **Feedback themes** template. Thank everyone who replies, and tell one of them a year later what you did with it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least three replies to the two questions are grouped into themes and filed before review day."
                cadence: cyclic
              tasks:
                - "Pick three to five people who see your work from different angles"
                - "Send the two feedback questions with a two-week deadline @recurring(yearly)"
                - "Group the replies into themes on one page"
                - "Thank each person and note the theme you will act on"
            - name: Stay, grow, shift or leave decision
              description: |-
                ## Purpose
                Every review should end with a decision about direction, even when the decision is to stay put. Choosing between four options, stay and protect what works, grow within the current role or employer, shift to a new kind of work, or leave, and writing down why, stops the review from becoming a pleasant afternoon with no consequence.

                ## Milestones
                1. All four options written out with what each would mean for you specifically.
                2. Each option scored against the scorecard, the scenarios and the feedback themes.
                3. One option chosen, with three reasons written beside it.
                4. The conditions that would make you reopen the decision before next year recorded.

                ## Notes
                Staying is a real decision, not a default, as long as you write why. If the answer is shift or leave, the career change and job search areas carry the detailed work.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One of stay, grow, shift or leave is chosen and recorded with three reasons and the conditions that would reopen it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a paragraph on what each of the four options would mean for you"
                - "Score each option against your scorecard and feedback themes"
                - "Choose one option and write three reasons beside it"
                - "List the conditions that would make you reopen the decision"
            - name: Choosing next year's three career changes
              description: |-
                ## Purpose
                Ten resolutions produce none; three changes have a chance. Picking exactly three changes for the coming year, each tied to a low score, a stuck theme or the direction decision, and each written so someone else could tell whether it happened, is the main output of the review.

                ## Milestones
                1. A longlist of candidate changes drawn from the keep, change and try table.
                2. Exactly three changes chosen, each linked to a score, theme or decision.
                3. Each change written with a measurable end state and a first step.
                4. The three changes placed at the top of next year's plan.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three changes are recorded, each linked to evidence from the review and written with an end state and a first step."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pull a longlist of candidate changes from the keep, change and try table"
                - "Cut the list to three by asking which would move a score most"
                - "Write an end state someone else could check for each change"
                - "Write the first step for each change and do one this week"
            - name: One-page career direction statement
              description: |-
                ## Purpose
                Plans you cannot explain in a page are plans you will not follow. Writing a single page that states the direction decision, the three changes, what you will protect and what you are deliberately not doing this year gives you something to reread at every check-in and to show a partner, mentor or coach.

                ## Milestones
                1. A draft page with five headings: direction, three changes, protect, not this year, check-in dates.
                2. The page read aloud and anything vague rewritten.
                3. The final version saved in the folder and pinned where you will see it.
                4. The page shared with at least one person you trust.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page statement with direction, three changes, protections, exclusions and check-in dates is saved, pinned and shared with one person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to draft a one-page statement from your review notes"
                - "Rewrite the draft in your own words under the five headings"
                - "Read it aloud and sharpen every vague sentence"
                - "Pin the final page where you will see it each week"
            - name: Quarter-by-quarter plan for the three changes
              description: |-
                ## Purpose
                Give a change a year-end target and nothing in between, and it tends to start in November. Breaking each of the three changes into one milestone per quarter, with the first one due within twelve weeks, turns the direction statement into a working plan that the quarterly check-ins can measure.

                ## Milestones
                1. Each change split into four quarterly milestones.
                2. The first quarter's milestones made specific enough to finish in twelve weeks.
                3. Time for each milestone found in the calendar.
                4. The plan saved beside the direction statement.

                ## Notes
                Start from the **Development plan** template. Let the later quarters stay rough; you will sharpen them at each check-in.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twelve quarterly milestones across the three changes are written, with first-quarter time booked in the calendar."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Split each of the three changes into four quarterly milestones"
                - "Make the first quarter's milestones specific and finishable"
                - "Book calendar time for the first quarter's work"
                - "Set next quarter's milestone for each change at the check-in @recurring(quarterly)"
            - name: Pre-mortem on next year's career plan
              description: |-
                ## Purpose
                Imagining that it is a year from now and the plan has failed is a quick way to find what will actually stop it. A one-hour pre-mortem lists the likely causes, from a busy season at work to a change of manager, and adds a counter-measure for the top three before they happen.

                ## Milestones
                1. A list of at least eight ways the plan could fail.
                2. Each cause rated for likelihood and impact.
                3. Counter-measures written for the three highest-rated causes.
                4. The counter-measures added to the plan or the quarterly check-in agenda.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A pre-mortem lists eight or more failure causes, rated, with counter-measures for the top three added to the plan."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a headline as if the plan failed completely a year from now"
                - "List at least eight reasons it could have failed"
                - "Rate each reason for likelihood and impact"
                - "Add counter-measures for the top three to the plan"
            - name: Deciding what to stop doing next year
              description: |-
                ## Purpose
                New commitments only fit if old ones leave, and a review that adds without subtracting builds a heavier year. Naming two or three things to stop, such as a committee that no longer teaches you anything or a habit of rescuing other teams, frees the hours the three changes will need.

                ## Milestones
                1. Every regular commitment over an hour a month listed.
                2. Each one marked as essential, useful or drained of value.
                3. Two or three commitments chosen to stop, hand over or shrink.
                4. A plan and a date for ending each one written down.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Two or three named commitments have a written plan and date for being stopped, handed over or reduced."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every work commitment that takes over an hour a month"
                - "Mark each as essential, useful or drained of value"
                - "Choose two or three to stop, hand over or shrink"
                - "Write how and when you will end each one"
            - name: Testing a new direction before committing
              description: |-
                ## Purpose
                Shift decisions made purely on paper carry a lot of guesswork. Running one small, cheap test in the first quarter, such as shadowing someone for a day, taking a short paid project or doing a weekend course, turns a hunch about a new direction into evidence before you spend serious money or leave a job.

                ## Milestones
                1. The single biggest assumption behind the new direction written down.
                2. One test chosen that costs under a week of time and a modest sum.
                3. The test completed and what you learned recorded.
                4. The direction decision confirmed, adjusted or reversed in writing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One low-cost test of a new direction is completed and its result recorded alongside a confirmed, adjusted or reversed decision."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the one assumption the new direction depends on most"
                - "Choose a test that would prove or disprove it within a week"
                - "Book or arrange the test for the coming quarter"
                - "Record what the test showed and update the direction decision"
            - name: Time and money budget for next year's career moves
              description: |-
                ## Purpose
                Changes that need a course, a conference or ten hours a month fail quietly when nobody set the time or money aside. Putting a simple figure on both for the year, and asking whether an employer learning budget can cover part of it, makes the plan affordable before it starts.

                ## Milestones
                1. Hours per month and total cost estimated for each of the three changes.
                2. Any employer learning budget or allowance checked.
                3. A yearly career budget agreed with yourself and, where relevant, your household.
                4. Spending and hours compared with the budget each quarter.

                ## Notes
                Keep the figures modest and realistic. This is a planning number, not financial advice; take larger decisions such as unpaid leave to whoever helps with your household finances.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written yearly budget of hours and money for the three changes exists and is compared with actual spend each quarter."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Estimate the hours and cost each of the three changes needs"
                - "Ask HR or your manager what learning budget you can use"
                - "Write the yearly career budget in the plan"
                - "Compare actual career spend and hours with the budget @recurring(quarterly)"
            - name: Running the review day itself
              description: |-
                ## Purpose
                Four hours vanish quickly without an agenda, and most unplanned review days end with an hour of email. A fixed running order, reread past reviews, timeline, scorecard, intentions, feedback, decision, three changes, keeps the day moving and ends with a draft plan in hand.

                ## Milestones
                1. An agenda with timings printed or open before the day starts.
                2. Phone notifications off and the materials from the folder laid out.
                3. Every agenda item covered, even briefly.
                4. A draft direction decision and three changes written before you leave.

                ## Notes
                Take a proper break half-way. Most people do their best thinking in the second half, once the first rush of complaints is on paper.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The review day is held with every agenda item covered and a draft decision and three changes saved in the folder."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a timed agenda for the four hours"
                - "Lay out the timeline, scorecard and feedback the night before"
                - "Turn notifications off and work through the agenda in order"
                - "Save the draft decision and three changes before you leave"
            - name: Direction conversation with your manager
              description: |-
                ## Purpose
                Appraisals look backwards at performance, and many managers never ask where you want to go. A separate, short conversation after your review, sharing the parts of your direction you are comfortable sharing and asking what the role could offer next year, often opens options that were never advertised.

                ## Milestones
                1. A decision made on which parts of the review to share and which to keep private.
                2. A thirty-minute conversation booked, separate from the appraisal.
                3. Two or three specific asks made, such as a project, a skill or a responsibility.
                4. The manager's response and any agreed next steps written down.

                ## Notes
                If the direction is leave, you do not have to say so. Ask about growth within the role and keep the rest for later.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A direction conversation separate from the appraisal is held, with at least two asks made and the response recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide which parts of the review you are willing to share"
                - "Book a thirty-minute direction conversation outside appraisal season"
                - "Prepare two or three specific asks for the coming year"
                - "Write up the response and any agreed next steps the same day"
            - name: Sharing the review with your partner or household
              description: |-
                ## Purpose
                Career changes land on the people you live with: hours, income, moves, moods. Walking a partner or household through the direction decision and three changes, and asking what they need from the year, turns a private plan into one the people around you can support rather than be surprised by.

                ## Milestones
                1. A calm time set aside, not squeezed into a busy evening.
                2. The one-page statement walked through together.
                3. Their questions and concerns written down.
                4. Any household constraint, such as childcare or savings, built into the plan.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The direction statement is discussed with your partner or household, their concerns recorded and any constraints added to the plan."
                cadence: cyclic
              tasks:
                - "Choose a relaxed time to talk the review through"
                - "Share the one-page statement and the three changes"
                - "Write down their questions and what they need from the year"
                - "Share the review summary with your partner or household @recurring(yearly)"
            - name: Letter to yourself for next year's review
              description: |-
                ## Purpose
                Twelve months from now you will remember the decision but not how it felt to make it. A short letter written at the end of review day, saying what you hope will have changed, what you are worried about and what you want your future self to check, is sealed in the folder and opened as the first act of next year's review.

                ## Milestones
                1. A letter of one page written within an hour of finishing the review.
                2. Your hopes, worries and three questions for your future self included.
                3. The letter saved in next year's subfolder, unopened until review day.
                4. The letter read aloud at the start of the following review and your answers noted.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A one-page letter with hopes, worries and three questions is filed in next year's subfolder and answered at the next review."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a one-page letter to yourself at the end of review day"
                - "Include your hopes, your worries and three questions to answer"
                - "Save it in next year's subfolder marked do not open early"
                - "Open the letter first thing at next year's review and answer it"
            - name: Milestone birthday career review
              description: |-
                ## Purpose
                Turning 30, 40, 50 or 60 brings the bigger questions an ordinary review skips: what you want the next decade to have been about, and whether the current path can get you there. A longer, once-a-decade version of the review, with more time for scenarios and conversations, uses that moment instead of letting it pass as a vague unease.

                ## Milestones
                1. A full day booked near the milestone birthday.
                2. The last ten years summarised in a page, one paragraph per two years.
                3. Three decade scenarios written and compared.
                4. A decade intention written in three sentences and kept with the annual plan.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full-day decade review is held near the milestone birthday and ends with a written three-sentence decade intention."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a full day within a month of the milestone birthday"
                - "Summarise the last ten years of work in one page"
                - "Write three scenarios for the coming decade"
                - "Write a three-sentence decade intention and file it with the plan"
            - name: Five-year look-back across your reviews
              description: |-
                ## Purpose
                Five annual reviews side by side tell a story no single year can: whether the scores have risen, which changes stuck and which you set three times. Every fifth year, an extra hour comparing the five scorecards and plans shows whether the review practice itself is changing anything.

                ## Milestones
                1. Five years of scorecards set side by side in one table.
                2. Each year's three changes marked as achieved, partly or abandoned.
                3. The two dimensions with the biggest improvement and decline named.
                4. One conclusion written about what the reviews have changed.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A five-year table of scorecards and changes ends in a written conclusion about what the reviews changed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put five years of scorecards into one table"
                - "Mark every past change as achieved, partly or abandoned"
                - "Name the dimensions that improved and declined most"
                - "Write one conclusion about what the reviews have changed"
            - name: Annual review in your first years of work
              description: |-
                ## Purpose
                In the first few years almost every job looks either perfect or hopeless, because there is nothing to compare it with. A lighter review aimed at what you are learning, who you are learning from, and which kinds of work you enjoy builds the evidence later direction decisions will need.

                ## Milestones
                1. The scorecard adapted to weight learning and people over pay and seniority.
                2. A list of the kinds of tasks you enjoyed and avoided this year.
                3. The two people you learned most from named.
                4. One stretch you will ask for next year written down.

                ## Notes
                Expect your answers to change quickly. In the first five years a direction is a hypothesis, not a commitment.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A first-years review records enjoyed and avoided task types, two key teachers and one stretch request for next year."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Reweight your scorecard so learning and people count most"
                - "List the kinds of work you enjoyed and the ones you avoided"
                - "Name the two people you learned most from this year"
                - "Write one stretch you will ask your manager for next year"
            - name: Annual review for parents and carers
              description: |-
                ## Purpose
                With caring responsibilities, the honest question is often not where you want to go but what fits the next year of family life. A review that starts from realistic capacity, hours available, energy left and support you can count on, sets changes you can deliver rather than ones that add guilt.

                ## Milestones
                1. Available working hours and energy for the coming year estimated honestly.
                2. Known family changes, such as a school start or a parent's care needs, listed.
                3. The three changes sized to the capacity available, or reduced to one or two.
                4. A protected element of your career, such as one skill or relationship, named.

                ## Notes
                A year of holding steady is a valid direction. Writing that down on purpose is very different from drifting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The review's changes are sized to a written estimate of the year's capacity, with known family changes listed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Estimate honestly the hours and energy you will have next year"
                - "List the family changes you already know are coming"
                - "Cut or resize the three changes to fit that capacity"
                - "Name the one part of your career you will protect regardless"
            - name: Annual review after a hard year
              description: |-
                ## Purpose
                After an illness, a bereavement, a redundancy or a year of burnout, a normal scorecard reads like an indictment. A gentler version that separates what happened to you from what you chose, and asks first what you need to recover, prevents a hard year from pushing you into a rushed career decision.

                ## Milestones
                1. The year's main events written down without judgement.
                2. A clear note of which low scores came from circumstances outside your control.
                3. A recovery need named, such as rest, steadier hours or support.
                4. Any major direction decision postponed to the mid-year pulse if you are not ready.

                ## Notes
                If the year has affected your health, speak to your doctor or an employee assistance service. The review can wait; your wellbeing cannot.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A hard-year review separates circumstance from choice, names a recovery need and records whether the direction decision is postponed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the year's main events plainly, without scoring them"
                - "Mark which low scores came from things outside your control"
                - "Name what you most need for recovery next year"
                - "Decide whether to postpone the direction decision to mid-year"
            - name: Annual review for freelancers and the self-employed
              description: |-
                ## Purpose
                Without a manager or an appraisal, a freelancer's year is easy to judge purely on income. Adding a look at client mix, the kinds of work that came in, rates, and how much of the year went on work you actually wanted gives the review a direction question, not just a revenue one.

                ## Milestones
                1. Income split by client and by type of work for the year.
                2. Each client marked as one you want more of, the same or less of.
                3. Hours spent on wanted versus unwanted work estimated.
                4. One direction change for the business, such as a niche or a rate change, chosen.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A freelance review splits income by client and work type, marks each client, and records one direction change for the year."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Split the year's income by client and by type of work"
                - "Mark each client as more, the same or less next year"
                - "Estimate the share of hours on work you actually wanted"
                - "Choose one direction change for the business next year"
            - name: Annual review as a people manager
              description: |-
                ## Purpose
                Managers spend the review season on everyone else's appraisals and rarely on their own direction. A version that asks whether you still want to manage, what kind of team you want to lead next, and how much of your week is management versus the work you came for answers questions an appraisal never raises.

                ## Milestones
                1. Hours split between people management, hands-on work and administration.
                2. A direct answer written to the question of whether you still want to manage.
                3. The kind of team or scope you want in two years described.
                4. One change to how you spend management time chosen.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A manager's review records the split of hours, a written answer on continuing to manage and one change to management time."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Estimate your weekly hours on people, hands-on work and admin"
                - "Answer in writing whether you still want to manage people"
                - "Describe the team or scope you want in two years"
                - "Choose one change to how you spend management time"
            - name: Annual review in the decade before retirement
              description: |-
                ## Purpose
                In the last ten years of a full-time career the direction question changes: what to finish, what to hand on, and what working life after the main job might look like. A review that adds a look at the retirement timeline, phased options and knowledge to pass on makes the final decade deliberate.

                ## Milestones
                1. A rough retirement window noted, to be checked with a financial or pension adviser.
                2. Two or three things you want to finish or be known for before leaving listed.
                3. Phased options such as reduced hours, consulting or mentoring noted.
                4. One step for the coming year chosen to move toward the preferred option.

                ## Notes
                Pension and retirement timing are financial decisions. Use this review to prepare questions for a qualified adviser, not to settle them.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A pre-retirement review records a rough window to check with an adviser, two or three legacy aims and one step for the year."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down the retirement window you currently have in mind"
                - "List what you want to finish or hand on before you leave"
                - "Note the phased options your employer or field allows"
                - "List questions to take to a pension or financial adviser"
            - name: Career review circle with peers
              description: |-
                ## Purpose
                Small groups of four to six people who each run an annual review and meet once to share them give you a regular dose of perspective and accountability that a solo review lacks. Running one, with clear rules on confidentiality and time, is a practice experienced professionals often keep for decades.

                ## Milestones
                1. Four to six people invited from different employers or fields.
                2. Ground rules agreed: confidentiality, equal time, questions before advice.
                3. The first circle meeting held with every member sharing their one-page statement.
                4. A quarterly one-line progress check agreed between meetings.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A circle of four to six people meets once a year with agreed ground rules and exchanges quarterly progress lines."
                cadence: cyclic
              tasks:
                - "Write the ground rules for a confidential review circle"
                - "Invite four to six people from different employers or fields"
                - "Host the annual review circle meeting @recurring(yearly)"
                - "Send members a one-line progress check on their changes @recurring(quarterly)"
            - name: Ten-year career direction map
              description: |-
                ## Purpose
                Annual reviews keep the next year honest; a ten-year map checks that the years are adding up to something. Sketching where you want to be in ten years in terms of the work, the people, the place and the freedom you want, then working back to three five-year markers, gives each annual decision a longer horizon to answer to.

                ## Milestones
                1. A ten-year picture written covering the work, the people, the place and the freedom you want.
                2. Two waypoints set at three and six years.
                3. Each annual review checked against the nearest waypoint.
                4. The map revised whenever a review decides on shift or leave.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ten-year map with two dated waypoints is saved in the folder and referenced in the latest review."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a page describing your working life ten years from now"
                - "Set two waypoints at three and six years"
                - "Compare this year's direction decision with the nearest waypoint"
                - "Revise the map whenever a review chooses shift or leave"
            - name: Aligning the career review with the rest of life
              description: |-
                ## Purpose
                A career plan that ignores health, money, relationships or where you want to live tends to collide with them by spring. Placing the career review beside whatever other yearly reviews you run, or a brief check of each, catches conflicts such as a promotion bid in the same quarter as a house move.

                ## Milestones
                1. The other big life plans for the year listed: money, health, family, home.
                2. Clashes between those plans and the three career changes identified.
                3. Each clash resolved by moving, shrinking or accepting it.
                4. A combined one-line view of the year's priorities written.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The three career changes are checked against the year's other life plans and every clash is resolved in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the biggest plans you have for money, health, family and home"
                - "Place them on the same quarterly grid as the career changes"
                - "Resolve each clash by moving, shrinking or accepting it"
                - "Write one line naming the year's overall priority"
            - name: Auditing last year's career decisions
              description: |-
                ## Purpose
                Judging decisions only by outcomes teaches the wrong lessons, because luck plays a large part. Each year, reviewing the main career decisions you made, what you knew at the time, what you expected and what happened, sharpens your judgement far more than counting wins and losses.

                ## Milestones
                1. The three to five main career decisions of the year listed.
                2. For each, what you knew, what you expected and what happened written down.
                3. Each decision graded separately for quality of process and quality of outcome.
                4. One rule for future decisions drawn from the audit.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three to five decisions are graded separately on process and outcome, with one new decision rule recorded."
                cadence: cyclic
              tasks:
                - "List the main career decisions you made this year"
                - "Write what you knew and expected at the time of each"
                - "Grade each decision on process and outcome @recurring(yearly)"
                - "Write one rule you will apply to next year's decisions"
            - name: Guiding someone else through their annual review
              description: |-
                ## Purpose
                Experienced people are often asked by a friend, a mentee or a team member how to think about the year ahead. Walking them through a short version, timeline, scorecard, decision, three changes, without telling them what to choose, is a useful service and sharpens your own practice too.

                ## Milestones
                1. A two-page guide to the review written from your own folder.
                2. A session of ninety minutes held with the other person.
                3. Their decision and three changes written by them, not by you.
                4. A follow-up check booked for three months later.

                ## Notes
                Ask questions rather than give answers. If they are in real distress or facing a legal or health issue, point them to the right professional.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One person completes a guided review with their own decision and three changes, and a three-month follow-up is booked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a two-page guide to the review from your own folder"
                - "Offer a ninety-minute guided session to a friend or mentee"
                - "Ask questions while they write their own decision and changes"
                - "Book a follow-up check three months later"
---

# Annual Career Direction Review

This area is for anyone who wants one honest look at their working life each year instead of drifting from appraisal to appraisal. It starts with foundations (booking the review day, a folder that holds every year, gathering the year's raw material, a satisfaction scorecard and last year's intentions), then the light routines that feed the review all year, the reflection skills that make it truthful, the direction decisions and plans that come out of it, the review day and the conversations around it, versions for early careers, parents and carers, freelancers, managers, hard years and the decade before retirement, and finally the longer view: peer review circles, ten-year maps and auditing your own decisions.

What repeats is a Friday energy mark, a two-line monthly note, a monthly check on next year's three changes, a quarterly direction check-in and a yearly cycle of gathering, reviewing, sharing and archiving. The Metrics log, Feedback themes, Development plan and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
