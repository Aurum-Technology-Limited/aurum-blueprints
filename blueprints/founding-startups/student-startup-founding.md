---
id: founding-startups.student-startup-founding
name: Student Startup Founding
description: "Build a company while you finish your degree: an hours budget that protects your grades, the university's IP rules checked, campus resources and competitions used well, and a clear plan for graduation day."
category: business
version: 1.0.0
tags: [founding-startups, student-startup-founding, student, founder, university, campus, startup-competitions, graduation]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - meeting-notes
    - metrics-log
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Student Startup Founding
          description: "Starting a company while still at university, using campus resources and competitions and balancing it with studies."
          projects:
            - name: Weekly hours budget between degree and startup
              description: |-
                ## Purpose
                Most student founders who fail a module did not decide to neglect it; the startup simply took whatever hours were free that week. Writing down your contact hours, independent study, paid work and sleep first, then giving the startup a fixed number of hours from what is left, turns a vague ambition into a week you can actually keep.

                ## Milestones
                1. A typical term week laid out hour by hour, with lectures, labs, study time, paid work and travel blocked in.
                2. A fixed weekly number of startup hours agreed with yourself, usually between 8 and 20 during term.
                3. A lower number written down for exam and deadline weeks.
                4. The budget shared with any co-founders so everyone knows what the others can give.

                ## Notes
                Count independent study honestly. Most degrees expect roughly as many hours of self-study as contact hours, and the startup should come out of leisure time before it comes out of study time.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written weekly timetable with a fixed startup hours figure for term weeks and a smaller one for exam weeks, shared with the team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every timetabled lecture, lab and seminar for this term"
                - "Estimate your weekly independent study hours per module"
                - "Block paid work, travel and at least seven hours of sleep a night"
                - "Write down the startup hours left over and the exam week figure"
            - name: University intellectual property policy check
              description: |-
                ## Purpose
                Some universities claim a share of anything students create using university staff, labs, funding or as part of assessed work, and the wording differs a great deal between institutions and courses. Reading the policy before the product grows is far cheaper than discovering a claim when an investor asks who owns the code.

                ## Milestones
                1. The current student intellectual property policy downloaded and the clauses on ownership underlined.
                2. A list of everything the startup uses that came from university resources, such as lab equipment, datasets, supervisor input or sponsored projects.
                3. Written confirmation from the technology transfer or enterprise office on whether the university claims any interest.
                4. Any assignment, licence or waiver needed identified and the next step agreed.

                ## Notes
                Ask in writing and keep the reply. This is organisational preparation; if the university does claim an interest, get advice from an independent solicitor or the enterprise office before signing anything.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated written reply from the university stating whether it claims any rights in the startup's work, filed with the policy."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the university's current student intellectual property policy"
                - "List the university labs, data, staff help or funding the startup has used"
                - "Email the enterprise office asking whether the university claims any interest"
                - "File the policy and the reply together in the startup's records"
            - name: Map of campus startup resources
              description: |-
                ## Purpose
                Universities often run an enterprise office, an incubator, a makerspace, legal clinics, free software licences, alumni mentors and small grants, and most students hear about them only in their final year. A single page listing what exists, who runs it and how to get in saves months of finding out by accident.

                ## Milestones
                1. A list of every enterprise, incubator, makerspace and entrepreneurship society on campus, with a named contact for each.
                2. The free or discounted services each offers written beside it, such as desk space, legal clinics or cloud credits.
                3. At least two resources visited in person or met online.
                4. The three most useful resources ranked for the startup's current stage.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page resource map naming at least six campus services with a contact for each and the top three ranked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Search the university website for enterprise, incubator and entrepreneurship pages"
                - "Ask the entrepreneurship society which campus services founders actually use"
                - "Book a short meeting with the enterprise office"
                - "Check the campus events listing for founder talks and workshops @recurring(monthly:5)"
            - name: Student visa work rights check for founders
              description: |-
                ## Purpose
                International students often have strict limits on paid work and on running a business while studying, and breaching them can put a visa at risk. Checking exactly what your conditions allow before you take a salary, invoice a client or become a director keeps the company from costing you your place on the course.

                ## Milestones
                1. Your visa conditions read in full, with the lines on work, self-employment and business activity highlighted.
                2. The international student advice team asked, in writing, what founder activity is allowed for you.
                3. A short list of what you may and may not do while enrolled, such as unpaid work on your own idea versus taking income.
                4. Your visa expiry date and any post-study options noted in the calendar.

                ## Notes
                Rules differ by country and change often, so rely on the immigration authority's own guidance and your university's advisers, not forums. If you are unsure, pause the activity and ask.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of permitted and forbidden founder activities, confirmed by the university's international student advisers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your visa conditions document and read the section on work"
                - "Email the international student advice team with your exact founder plans"
                - "Write a list of allowed and not allowed activities from their reply"
                - "Recheck your visa conditions and expiry date @recurring(yearly)"
            - name: Academic calendar overlay on the startup plan
              description: |-
                ## Purpose
                Every degree has a hard rhythm of teaching weeks, reading weeks, coursework deadlines, exams and long holidays, and a startup plan that ignores it will collide with assessment at the worst moment. Laying the year's academic dates over the startup's milestones shows where to push hard and where to coast.

                ## Milestones
                1. Every exam period, coursework deadline and holiday for the year marked in one calendar.
                2. The startup's next three milestones placed in weeks without assessment.
                3. Reading weeks and long holidays marked as the main build windows.
                4. Co-founders' calendars overlaid where courses differ.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One shared calendar showing the full academic year with startup milestones placed outside exam and deadline weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download this year's academic calendar and your exam timetable"
                - "Add every coursework deadline from each module handbook"
                - "Move any startup milestone that lands in an assessment week"
                - "Download next year's academic calendar when it is published @recurring(yearly)"
            - name: Telling your parents or guardians about the startup
              description: |-
                ## Purpose
                Families who support a student, financially or otherwise, often hear about the startup only when grades slip or a job offer is turned down, and the conversation goes badly. Explaining the plan early, with the hours budget and what you will do if it does not work, usually turns worry into support and sometimes into useful contacts.

                ## Milestones
                1. A short explanation of the startup written in plain words, with what it does and who it is for.
                2. Your plan for protecting your degree and your fallback if the startup stops ready to share.
                3. The conversation held, with their main worries written down.
                4. An agreed way of keeping them updated.

                ## Notes
                If your family depend on you finishing on time, for funding or other reasons, say how the plan protects that first. Ask for advice, not money, in the first conversation.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A conversation with parents or guardians held, their main concerns recorded and an update rhythm agreed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a three-sentence description of the startup a relative would follow"
                - "Note how your hours budget protects your degree"
                - "Hold the conversation and write down their worries"
                - "Send a short update on progress and grades @recurring(monthly:28)"
            - name: Student team working agreement
              description: |-
                ## Purpose
                Student co-founders fall out most often over uneven effort during exams, one person going on a placement or year abroad, and what happens when people graduate at different times. A one-page working agreement covering hours, decisions, money, study abroad and graduation settles these while everyone is still friends.

                ## Milestones
                1. Each person's weekly hours and exam week hours written down.
                2. Roles and who decides what agreed, including who signs up for competitions on the team's behalf.
                3. What happens if someone takes a placement, a year abroad or leaves the course.
                4. What happens at graduation, including who intends to go full time.
                5. The agreement signed by every team member and dated.

                ## Notes
                This is a working agreement, not an equity deal. Agree the equity split separately, with vesting, before anyone puts in money or the company is formed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed one-page team agreement covering hours, roles, placements, study abroad and graduation, held by every member."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each team member to write their weekly hours and graduation plans"
                - "Hold a two-hour meeting to agree roles and decision rights"
                - "Write down what happens if someone goes on placement or abroad"
                - "Get the one-page agreement signed and dated by everyone"
            - name: Student founder budget and money sources
              description: |-
                ## Purpose
                Loans, part-time pay and small grants usually fund a student startup's first months, and mixing that money with rent is how a startup ends up costing someone their accommodation. Separating a small startup budget from living costs, and listing where more money could come from, keeps the experiment affordable.

                ## Milestones
                1. Monthly living costs and income written down, with the amount you can safely give the startup.
                2. A separate account or clearly marked pot for startup spending.
                3. A list of student-friendly money sources, such as university enterprise grants, competition prizes and society funds.
                4. A spending limit agreed with co-founders, above which everyone must say yes.

                ## Notes
                Start from the **Monthly budget and bills** template. Do not put startup costs on student overdrafts or credit cards you cannot clear that month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A monthly budget separating living costs from a capped startup amount, with at least four funding sources listed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down your monthly income and essential living costs"
                - "Set a monthly startup spending cap you could lose without hardship"
                - "List grants, prizes and society funds open to students"
                - "Compare startup spending against the cap @recurring(monthly:22)"
            - name: Problem notebook from student life
              description: |-
                ## Purpose
                Students sit inside a market of millions with its own pains: housing, timetabling, textbooks, part-time work, societies, money. Keeping a notebook of problems you and your friends actually suffer, with how often and how much each costs, gives you ideas you understand better than any outsider, before you commit to one.

                ## Milestones
                1. At least twenty problems written down from your own and friends' student lives.
                2. Each problem scored for how often it happens and what people spend or lose on it now.
                3. The top three problems discussed with ten students outside your friendship group.
                4. One problem chosen to work on, with the reason written in a sentence.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A notebook of twenty or more scored student problems with one chosen and the reason recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Start a notebook and write down five problems from the last week"
                - "Ask three housemates what annoyed them most this term"
                - "Score each problem for frequency and cost"
                - "Talk to ten students outside your friends about the top three"
            - name: Protected weekly startup block
              description: |-
                ## Purpose
                Startup work squeezed into gaps between lectures rarely adds up to anything, because real progress needs a few unbroken hours. Fixing one or two long blocks each week, at the same time, and treating them like a timetabled lecture is what lets a part-time founder ship.

                ## Milestones
                1. One or two blocks of at least three hours fixed in the weekly calendar.
                2. A location chosen where you will not be interrupted, such as the incubator or a library room.
                3. A short goal written before each block.
                4. Four consecutive weeks of blocks kept.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly startup blocks of at least three hours kept for eight of the last ten term weeks."
                cadence: rolling
              tasks:
                - "Choose two three-hour slots in your week with no teaching"
                - "Book a quiet room or desk for those slots"
                - "Write the goal for the next block the evening before"
                - "Hold the startup block and log what shipped @recurring(weekly:tue)"
            - name: Exam season startup freeze plan
              description: |-
                ## Purpose
                Exam periods are when student startups lose most ground, because nobody planned what the company does while its founders revise. Agreeing a freeze, with a minimum of customer care, a paused roadmap and a restart date, protects grades and stops users finding the product broken and unanswered.

                ## Milestones
                1. Freeze dates agreed for each exam period, starting one week before the first exam.
                2. A minimum service list for the freeze, such as answering support within two days and no new releases.
                3. Users or partners told in advance of slower replies, where it matters.
                4. A restart meeting booked for the day after the last exam.

                ## Notes
                Keep the freeze short and absolute. A half freeze, where you keep coding a little, usually costs grades without moving the company forward.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For each exam period, written freeze dates, a minimum service list and a restart meeting exist before the first exam."
                cadence: cyclic
              tasks:
                - "Mark each team member's exam dates in the shared calendar"
                - "Write the minimum service list for the freeze"
                - "Draft a short note telling users replies will be slower"
                - "Set the freeze dates for the next exam period @recurring(quarterly)"
            - name: Monthly academic adviser check-in
              description: |-
                ## Purpose
                Personal tutors and academic advisers can approve extensions, suggest modules that fit the startup and spot a slipping student early, but only if they know what you are doing. A short monthly meeting keeps them informed and gives you an ally when the degree and the company clash.

                ## Milestones
                1. Your adviser told about the startup and your hours budget.
                2. A monthly meeting or email update agreed.
                3. Notes kept from each meeting with any actions.
                4. At least one useful outcome, such as a module choice, project brief or introduction, recorded.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Notes from at least four monthly adviser check-ins in a term, each with actions recorded."
                cadence: rolling
              tasks:
                - "Email your adviser asking for a short meeting about the startup"
                - "Prepare three questions about modules, deadlines or support"
                - "Send your adviser a two-line update on studies and startup @recurring(monthly:12)"
                - "Write up actions from each meeting the same day"
            - name: Sunday coursework deadline radar
              description: |-
                ## Purpose
                Missing a coursework deadline because a demo ran late costs marks that no startup outcome repays. A ten-minute Sunday check of every deadline in the next three weeks, and whether each piece is on track, catches clashes while there is still time to move startup work.

                ## Milestones
                1. One list of every assessed deadline for the term, with weighting where known.
                2. A Sunday check held each week of term.
                3. Any deadline at risk flagged to the team and startup tasks moved.
                4. No late penalties recorded across the term.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly deadline check is held throughout term and no coursework is submitted late."
                cadence: rolling
              tasks:
                - "Copy every assessed deadline from module handbooks into one list"
                - "Check the next three weeks of deadlines and mark any at risk @recurring(weekly:sun)"
                - "Move startup tasks away from any week with two deadlines"
                - "Tell the team about any deadline that cuts your startup hours"
            - name: Monday stand-up for part-time co-founders
              description: |-
                ## Purpose
                Co-founders on a degree work at odd hours from different buildings and timetables, so decisions drift for weeks unless there is a fixed moment to meet. A fifteen-minute Monday stand-up, plus a monthly look back, keeps everyone aligned without eating study time.

                ## Milestones
                1. A fixed fifteen-minute Monday slot every member can make, in person or online.
                2. Each person sharing last week, this week and anything blocking them.
                3. A shared task list updated at every stand-up.
                4. A monthly retrospective held on what is and is not working.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten Monday stand-ups held in a term with the shared task list updated each time."
                cadence: rolling
              tasks:
                - "Find a Monday slot that fits every team member's timetable"
                - "Set up one shared task list for the startup"
                - "Hold the fifteen-minute stand-up @recurring(weekly:mon)"
                - "Run a thirty-minute team retrospective @recurring(monthly:3)"
            - name: Monthly incubator mentor office hours
              description: |-
                ## Purpose
                Campus incubators and enterprise offices usually offer free time with mentors, alumni founders and visiting experts, and most of it goes unbooked. Booking a session every month, with one sharp question, gives a student team outside advice it could never otherwise afford.

                ## Milestones
                1. The booking system for mentor office hours found and an account set up.
                2. One session booked each month with a prepared question.
                3. A note of each mentor's advice and whether you acted on it.
                4. At least one mentor who has seen the startup more than twice.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A mentor session held in each of three consecutive months, each with a recorded question, answer and action."
                cadence: rolling
              tasks:
                - "Find out how to book mentor office hours on campus"
                - "Book a mentor session with one prepared question @recurring(monthly:18)"
                - "Write down the advice and the action you will take"
                - "Ask your most useful mentor if you can update them each term"
            - name: Competition and grant deadline calendar
              description: |-
                ## Purpose
                Campus startup competitions, university enterprise grants and national student entrepreneur awards open and close throughout the year, and a team that applies to everything ends up writing applications instead of building. A calendar of deadlines with a simple fit score lets you enter the three or four that matter.

                ## Milestones
                1. A list of competitions and grants open to students at your university and nationally, with deadlines and prize types.
                2. Each one scored for fit, effort and what it gives beyond money, such as mentoring or press.
                3. A limit agreed on how many to enter per term.
                4. The calendar refreshed each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A maintained calendar of at least eight student competitions and grants, scored for fit, with a per-term entry limit."
                cadence: rolling
              tasks:
                - "Ask the enterprise office for this year's competition and grant list"
                - "Add national student entrepreneur awards you find to the calendar"
                - "Score each opportunity for fit and effort"
                - "Check for new competitions and upcoming deadlines @recurring(monthly:8)"
            - name: End of term startup review
              description: |-
                ## Purpose
                University terms give a natural cycle of ten to twelve weeks, and reviewing the startup at the end of each one gives an honest answer to whether it is moving. Comparing users, revenue, hours spent and grades every term tells you whether to push harder, change course or put it on hold.

                ## Milestones
                1. Users, revenue, hours spent and key learning recorded for the term.
                2. Grades or provisional marks for the term recorded beside them.
                3. Each team member's view on continuing written down.
                4. Goals for the next term agreed and written down.

                ## Notes
                Start from the **Metrics log** template so each term's numbers sit beside the last.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written review exists for each completed term, showing startup numbers, grades and agreed goals for the next term."
                cadence: cyclic
              tasks:
                - "Collect the term's user, revenue and hours figures"
                - "Note your marks or provisional grades for the term"
                - "Hold a one-hour team review and agree goals for next term"
                - "Hold the end of term startup review @recurring(quarterly)"
            - name: Friday sleep and study load check
              description: |-
                ## Purpose
                Late-night build sessions before a pitch or a release are where student founders lose sleep, then a week of lectures, then a grade. A two-minute Friday check of sleep, study and startup hours shows the pattern early, and knowing where campus counselling and wellbeing services sit means help is one email away.

                ## Milestones
                1. The campus wellbeing and counselling services found and their contact saved.
                2. A Friday check of average sleep, study hours and startup hours each week.
                3. A personal rule written for when to cut startup hours, such as two weeks under six hours of sleep.
                4. The rule applied at least once when needed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly record of sleep, study and startup hours is kept for a term, with a written rule for cutting back."
                cadence: rolling
              tasks:
                - "Save the contact for campus wellbeing and counselling services"
                - "Write your rule for when startup hours get cut"
                - "Record this week's sleep, study and startup hours @recurring(weekly:fri)"
                - "Tell a co-founder or friend when the rule is triggered"
            - name: Monthly books for a student company
              description: |-
                ## Purpose
                Competition prizes, grants, small sales and shared costs on personal cards quickly become impossible to untangle, and many grants ask for receipts. Ten minutes of bookkeeping each month, and a yearly check of how student income rules apply to you, keeps the money clean for the first investor or tax return.

                ## Milestones
                1. One spreadsheet or bookkeeping tool holding every startup income and cost.
                2. Receipts photographed and stored by month.
                3. Money owed between co-founders recorded and settled each month.
                4. Your personal tax position as a student with startup income checked once a year with the tax authority's guidance or an adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every startup transaction for the last three months is recorded with a receipt, and money between co-founders is settled."
                cadence: rolling
              tasks:
                - "Set up one spreadsheet for startup income and costs"
                - "Record the month's transactions and store the receipts @recurring(monthly:27)"
                - "Settle any money co-founders owe each other"
                - "Check how startup income affects your tax and student funding @recurring(yearly)"
            - name: Choosing elective modules that build startup skills
              description: |-
                ## Purpose
                Many degrees let you pick electives, minors or cross-faculty modules, and modules in entrepreneurship, accounting, design or programming can count towards your degree while teaching what the startup needs. Choosing them deliberately turns study time into founder training instead of competing with it.

                ## Milestones
                1. A list of electives open to you across faculties that relate to the startup.
                2. Each one checked for timetable clashes, assessment type and prerequisites.
                3. One or two chosen and registered in the module selection window.
                4. An assessed project in at least one module pointed at a real startup question, where the rules allow.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one elective related to the startup is registered, with its assessed work linked to a real startup question where permitted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the module catalogue for electives across faculties"
                - "Shortlist modules in entrepreneurship, finance, design or coding"
                - "Ask the module leader whether coursework can use a real venture"
                - "Check when the module selection window opens @recurring(yearly)"
            - name: Three-minute pitch for student competitions
              description: |-
                ## Purpose
                Judges at student competitions, demo days and society showcases mostly give each team three to five minutes, and they hear dozens of teams in a row. Learning to state the problem, the evidence, the product and the ask in three minutes, and practising it on real audiences, is the single skill that wins prizes and introductions on campus.

                ## Milestones
                1. A written three-minute script covering problem, evidence, product, team and ask.
                2. A deck of no more than eight slides that works without the speaker.
                3. The pitch delivered to at least three audiences, such as a society, a mentor and a lecturer.
                4. The three hardest judge questions answered in writing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A timed three-minute pitch delivered to three audiences, with written answers to the three hardest questions."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a first three-minute script and time it aloud"
                - "Cut the deck to eight slides or fewer"
                - "Ask the agent to list the ten questions judges are most likely to ask"
                - "Book a practice slot at the entrepreneurship society"
            - name: Cold emailing alumni and professors
              description: |-
                ## Purpose
                A student email address opens doors that close after graduation: alumni, professors and industry visitors answer students far more often than they answer founders. Learning to write a short, specific request and sending a couple each week builds a network of advisers, customers and introductions while that advantage lasts.

                ## Milestones
                1. A list of thirty alumni, professors and visiting speakers relevant to the startup.
                2. A five-sentence email that says who you are, what you are building and one specific ask.
                3. Two emails sent every week for a term.
                4. A simple log of replies, meetings and follow-ups.

                ## Notes
                Ask for fifteen minutes and one specific thing, such as feedback on a pricing idea or an introduction to one buyer. Vague requests to pick someone's brain rarely get answered.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "At least twenty targeted emails sent in a term, with replies and resulting meetings logged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Search the alumni network for thirty people in your startup's field"
                - "Write a five-sentence email template with one specific ask"
                - "Send two personalised emails to alumni or professors @recurring(weekly:wed)"
                - "Log every reply and follow up a week later"
            - name: Testing with fellow students without friend bias
              description: |-
                ## Purpose
                Friends and coursemates are the easiest people to test with and the least honest, because they want you to succeed and will say they would use it. Learning to recruit strangers on campus, ask about their past behaviour rather than opinions, and watch what they actually do gives student founders evidence they can trust.

                ## Milestones
                1. A recruiting method that reaches students outside your friendship group, such as society mailing lists or library sign-up sheets.
                2. A short script that asks about the last time the problem happened, not whether they like the idea.
                3. Ten sessions held with students you did not know before.
                4. A summary separating what people did from what they said.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten sessions with unfamiliar students completed, with a written summary of observed behaviour versus stated opinions."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask two society presidents to share a short sign-up post"
                - "Write five questions about past behaviour, not opinions"
                - "Offer a coffee voucher for twenty minutes of time"
                - "Separate what people did from what they said in your notes"
            - name: Student software licences and cloud credits
              description: |-
                ## Purpose
                Students qualify for free or deeply discounted design tools, developer packs, cloud credits and office software, and a student startup can run for months on them. Knowing which licences forbid commercial use, and when credits expire, avoids a surprise bill or a licence breach the day you start charging.

                ## Milestones
                1. A list of every student software offer and cloud credit programme the team qualifies for.
                2. Each tool's licence checked for whether commercial use is allowed.
                3. Credit amounts and expiry dates recorded.
                4. A plan for which tools will need paying for after graduation or first revenue.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A tool list with licence terms, credit amounts and expiry dates, and a costed plan for the switch to paid plans."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the student developer packs and design tools the team uses"
                - "Check each licence for a ban on commercial use"
                - "Record cloud credit amounts and expiry dates"
                - "Price the paid plans you will need after graduation"
            - name: Lean business plan for a university competition
              description: |-
                ## Purpose
                Business plan competitions on campus ask for a written plan, and writing one well is a fast way to find the holes in your logic while someone else provides deadlines and feedback. A plan of five to ten pages, built for the competition's judging criteria, doubles as the basis for grant applications later.

                ## Milestones
                1. The competition's judging criteria and word limits listed.
                2. A first draft covering problem, market, model, competition, team, milestones and money needed.
                3. Feedback from one lecturer or mentor before submission.
                4. The final plan submitted and the judges' feedback saved.

                ## Notes
                Write to the judging criteria in the order they are listed. Judges score against the sheet, not against the plan you wish they wanted.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A business plan submitted to a university competition before its deadline, with judges' feedback filed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Download the competition rules and judging criteria"
                - "Outline the plan using the criteria as headings"
                - "Ask a lecturer or mentor to read the draft"
                - "Submit the plan two days before the deadline"
            - name: Contracts every student founder signs
              description: |-
                ## Purpose
                Competition terms, incubator agreements, freelancer contracts and customer terms get signed by student founders without being read, and some competition entries or programmes take equity or rights in the idea. Learning what to look for in the four or five documents you will see first, and when to ask the campus legal clinic, prevents a costly mistake.

                ## Milestones
                1. A list of the agreements the startup has signed or is likely to sign this year.
                2. Each one checked for equity, intellectual property, exclusivity and confidentiality clauses.
                3. The campus legal clinic or enterprise office's free legal help located.
                4. At least one agreement reviewed with them before signing.

                ## Notes
                This is about knowing what to ask, not legal advice. Anything involving equity or ownership of the idea should be reviewed by a qualified adviser before you sign.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every agreement the startup has signed is filed with its equity, IP and exclusivity terms noted, and one was reviewed by a legal clinic."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect every agreement the startup has signed so far"
                - "Note any clause about equity, ownership or exclusivity"
                - "Find out whether the university runs a free legal clinic"
                - "Book a review of the next agreement before signing"
            - name: Turning a final year project into the startup
              description: |-
                ## Purpose
                Your final year project, capstone or dissertation can give a student founder hundreds of supervised hours to build or research the startup's core, but assessed work brings rules on ownership, publication and originality. Shaping the project so it earns a good mark and moves the company forward needs agreement from the supervisor at the start, not the end.

                ## Milestones
                1. The project rules checked for ownership of the work, publication and use of external partners.
                2. A project proposal written that meets the marking criteria and answers a real startup question.
                3. Your supervisor's agreement to the topic and the startup link recorded.
                4. The assessed submission and the startup's version kept clearly separate where the rules require it.
                5. The project submitted on time and the startup's lessons from it written up.

                ## Notes
                Check the university IP policy project first. Assessed work sometimes has different ownership rules from extracurricular work.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A final year project approved by the supervisor, submitted on time, with ownership confirmed and its startup lessons recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Read the final year project handbook sections on ownership and partners"
                - "Draft a one-page proposal linking the project to a startup question"
                - "Meet your supervisor to agree the topic"
                - "Write up what the project taught the startup after submission"
            - name: Leave of absence or gap year decision
              description: |-
                ## Purpose
                When a startup gets traction or funding mid-degree, many universities allow a leave of absence, intermission or deferral, but the rules on fees, funding, visas and accommodation vary and some options close quickly. Weighing the options with the facts in front of you avoids both dropping out by accident and turning down a real chance by default.

                ## Milestones
                1. The university's leave of absence or intermission policy read, including how long you can be away.
                2. The effect on fees, student funding, accommodation and any visa written down.
                3. The startup's evidence for needing full time stated plainly, such as revenue, funding or a deadline.
                4. A decision made with a return date or a clear reason for staying enrolled.

                ## Notes
                Speak to student funding and international advisers before applying. Leaving without formal leave can mean repaying funding or losing your place.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on taking leave, citing the university policy, the funding and visa effects and the startup's evidence."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the university's leave of absence or intermission policy"
                - "Ask student funding how leave affects your loans or grants"
                - "Write down the startup evidence that would justify leave"
                - "Book a meeting with your adviser to talk through the options"
            - name: Graduate job offer versus going full time
              description: |-
                ## Purpose
                Final year students with a startup often hold a graduate job offer with a deadline, and the choice gets made in a panic the week the offer expires. Setting out the money, the startup's evidence, what would make you go full time and whether the employer would defer the start date turns it into a decision you can explain later.

                ## Milestones
                1. The offer's acceptance deadline, salary and start date written down.
                2. Your personal runway calculated: months you could live without a salary.
                3. Three conditions written in advance that would make you choose the startup, such as revenue or funding.
                4. The employer asked whether a deferred start is possible.
                5. A decision made and recorded before the deadline.

                ## Notes
                Many graduate employers have deferred students before. Asking politely rarely loses an offer, and a deferral can give the startup a fair test.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the graduate offer, made before its deadline, against three conditions set in advance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the offer deadline, salary and start date"
                - "Work out how many months you could live without a salary"
                - "Write three conditions that would make you choose the startup"
                - "Ask the employer's graduate team about deferring the start date"
            - name: Campus incubator or outside accelerator
              description: |-
                ## Purpose
                University incubators usually offer free desks, mentors and no equity, while outside accelerators bring money, investors and pressure but take equity and full-time hours a student may not have. Comparing the two on the same criteria, for where the startup is now, stops a team from joining the one with the better brand rather than the better fit.

                ## Milestones
                1. The campus incubator's offer listed: space, mentoring, grants, equity and time required.
                2. Two outside programmes listed on the same criteria.
                3. Each option checked against your hours budget and academic calendar.
                4. A choice made, with the reason written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison table of the campus incubator and two outside programmes on the same criteria, with a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the campus incubator what it offers and what it asks in return"
                - "Shortlist two outside accelerators open to student teams"
                - "Compare equity, hours required and programme dates in one table"
                - "Check each programme's dates against your exam timetable"
            - name: When to incorporate while still studying
              description: |-
                ## Purpose
                Teams on campus form companies too early, paying fees and filing returns for a project with no users, or too late, taking prize money or customer payments with no clear owner. Deciding the trigger in advance, such as first revenue, a grant that requires a company or a co-founder putting in money, keeps you out of both traps.

                ## Milestones
                1. The events that would require a company written down, such as grant rules, contracts or revenue.
                2. The yearly cost and filing duties of a company in your country noted.
                3. Any student-specific issues checked, such as visa rules on being a director or effects on student funding.
                4. A trigger agreed by the team and written into the team agreement.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written incorporation trigger agreed by the team, with costs, filing duties and visa or funding effects noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the grants, prizes or contracts that require a company"
                - "Find the yearly cost and filing duties of a small company"
                - "Ask advisers whether being a director affects your visa or funding"
                - "Write the agreed trigger into the team agreement"
            - name: University or competition money with strings attached
              description: |-
                ## Purpose
                Some university venture funds, student investment societies and competition prizes come with equity, rights to future rounds, exclusivity or reporting duties that are easy to miss in the excitement of winning. Reading the terms and comparing them with what the money buys keeps a few thousand in prize money from costing a large share of the company.

                ## Milestones
                1. The full terms of the offer obtained in writing.
                2. Equity, rights, exclusivity and reporting duties listed in plain words.
                3. The amount compared with what it would pay for, such as months of hosting or a prototype.
                4. Advice taken from the enterprise office or an independent adviser.
                5. A decision recorded with the reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written summary of an offer's equity, rights and duties, reviewed by an adviser, with an accept or decline decision recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask for the full terms of the prize or investment in writing"
                - "List every equity, rights or exclusivity clause in plain words"
                - "Work out what the money would actually pay for"
                - "Book a review of the terms with an independent adviser"
            - name: Placement year spent on the startup
              description: |-
                ## Purpose
                Degrees with a placement or industrial year sometimes allow an enterprise placement, where you spend the year on your own company with academic supervision. Where that option exists, it gives a full year of near full-time work without leaving the degree, but approval usually needs a proposal months in advance.

                ## Milestones
                1. Your department's rules on enterprise or self-employed placements confirmed.
                2. A proposal written with goals, supervision and how the year will be assessed.
                3. A comparison made with a conventional placement at a startup or larger employer.
                4. A decision made and, if chosen, the placement approved in writing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on an enterprise placement, with departmental approval in writing if chosen."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the placements office whether enterprise placements are allowed"
                - "Read the assessment requirements for a placement year"
                - "Draft a one-page enterprise placement proposal"
                - "Compare it with one conventional placement offer"
            - name: Choosing who leads after graduation
              description: |-
                ## Purpose
                Student co-founders rarely all graduate in the same year, and when one stays on a four-year course while another finishes, the company needs to know who leads, who is full time and who becomes part time. Deciding this a term before the first graduation avoids drift and resentment in the busiest summer of the company's life.

                ## Milestones
                1. Each founder's graduation date and post-graduation plans written down.
                2. The role each person can realistically play in the year after graduation agreed.
                3. One person named as the lead for the transition year.
                4. Any change to equity vesting or roles reflected in the team's written agreements.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written agreement naming the lead founder and each person's role for the year after the first graduation."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each founder for their graduation date and plans"
                - "Hold a meeting on who can go full time after graduating"
                - "Name the lead founder for the transition year"
                - "Update the team agreement with the new roles"
            - name: University startup competition entry
              description: |-
                ## Purpose
                Most universities run at least one annual startup or enterprise competition, and the prize matters less than the deadline, the mentor feedback and the judges you meet. Preparing a strong entry on a fixed date, without letting it swallow a coursework week, gives the startup a public milestone and often its first outside money.

                ## Milestones
                1. The competition chosen from your calendar, with rules and judging criteria read.
                2. The application or pitch prepared to the criteria.
                3. Two practice runs held with feedback.
                4. The entry submitted and the final pitched, where you get through.
                5. Feedback and contacts from the judges written up within a week.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A competition entry submitted before the deadline, with judges' feedback and new contacts recorded within a week."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick one competition from the calendar and read its rules"
                - "Block preparation time away from coursework deadlines"
                - "Run two practice pitches with feedback"
                - "Email each judge you met with a thank you within a week"
            - name: Weekend hackathon prototype build
              description: |-
                ## Purpose
                Campus and intercollegiate hackathons give a student team 24 to 48 hours, free food, mentors and sponsor judges, which is often the fastest way to test whether a team can ship together. Going in with a clear problem and coming out with a working demo and a few contacts is worth more than any prize.

                ## Milestones
                1. A hackathon chosen that does not clash with deadlines, with its rules on ownership of work read.
                2. One problem and a demo goal agreed before the event.
                3. A working demo shown at the end of the event.
                4. Feedback from mentors and sponsors written down and the demo saved.

                ## Notes
                Check whether sponsor challenges claim rights in what you build. Some do, and it matters if the demo becomes the product.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A working demo shown at a hackathon, with ownership rules checked beforehand and feedback recorded afterwards."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Find a hackathon in a week with no coursework deadlines"
                - "Read the rules on who owns the work produced"
                - "Agree the problem and demo goal with your team beforehand"
                - "Write up mentor and sponsor feedback the day after"
            - name: Campus incubator demo day
              description: |-
                ## Purpose
                Incubator and accelerator demo days bring investors, alumni, local businesses and press onto campus for one afternoon, and student teams that treat it as a presentation miss the point. Preparing a short demo, a clear ask and a follow-up list turns the day into meetings in the weeks after.

                ## Milestones
                1. The demo day format, slot length and audience confirmed.
                2. A rehearsed pitch and live or recorded demo that work without the venue's internet.
                3. A clear ask stated, such as pilot customers, mentors or a first investment.
                4. A list of everyone who showed interest, followed up within three days.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A demo delivered at demo day with a stated ask, and every interested contact followed up within three days."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Ask the organisers for the format, slot length and guest list"
                - "Record a backup video of the demo"
                - "Print a one-page summary with a QR code to your site"
                - "Follow up every interested contact within three days"
            - name: Startup stall at the freshers' fair
              description: |-
                ## Purpose
                The welcome or freshers' fair at the start of the year puts thousands of new students in one hall, all signing up for things, which makes it the cheapest first user acquisition a campus startup will ever get. A stall with a clear offer and a sign-up method you can measure can give a consumer startup its first few hundred users in a day.

                ## Milestones
                1. A stall booked through the students' union or a society, within its rules on commercial activity.
                2. One simple offer and a sign-up method you can count, such as a short link or QR code.
                3. A team rota for the whole fair.
                4. Sign-ups counted and the first message sent within 48 hours.

                ## Notes
                Students' unions often restrict commercial stalls, so partnering with a society is sometimes the only route. Ask early, because places go months ahead.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A freshers' fair stall run with a measurable sign-up method, sign-ups counted and a first message sent within 48 hours."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the students' union how to book a stall or partner with a society"
                - "Set up a trackable sign-up link and QR code"
                - "Draw up a team rota covering every hour of the fair"
                - "Send the welcome message to new sign-ups within two days"
            - name: Graduation transition plan for the startup
              description: |-
                ## Purpose
                Graduation quietly removes much of what a student startup depends on: the university email address, campus desk space, student software licences, mentors through the incubator, and for some founders the visa. Listing every dependency and replacing each before the last day stops the company from losing accounts, data and momentum in the same month.

                ## Milestones
                1. Every account, tool and service tied to a university login listed, with its end date.
                2. Company accounts moved to a domain the startup owns.
                3. Paid or alternative replacements in place for student licences and campus space.
                4. Alumni access to incubator, mentors and facilities confirmed.
                5. Each founder's post-graduation visa, housing and income plan written down.

                ## Notes
                Move any sign-in that uses a university email first. When the address is closed, password resets to it stop working.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checklist showing every university-linked account and service moved or replaced before graduation, with each founder's plan recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every startup account that signs in with a university email"
                - "Register a company domain and move sign-ins to it"
                - "Ask the incubator what alumni founders can keep using"
                - "Write each founder's housing, income and visa plan for after graduation"
            - name: Student entrepreneur grant application
              description: |-
                ## Purpose
                Universities, foundations and some governments run small grants for student and graduate entrepreneurs, often a few hundred to a few thousand in local currency, with modest paperwork and no equity. A well-targeted application, written once and adapted, can fund a prototype, user testing or a summer of work.

                ## Milestones
                1. Two or three grants chosen whose eligibility you meet, with deadlines noted.
                2. A budget showing exactly what the money will pay for.
                3. One core application written and adapted to each funder's questions.
                4. Applications submitted before the deadlines and reporting duties noted.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least one student entrepreneur grant application submitted before its deadline, with an itemised budget."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Check eligibility for three student or graduate entrepreneur grants"
                - "Write an itemised budget for the grant money"
                - "Ask the agent to adapt your core answers to each funder's questions"
                - "Submit each application at least two days before its deadline"
            - name: Post-study visa route for international founders
              description: |-
                ## Purpose
                International students who want to keep building after graduation need a route that allows it, such as a post-study work visa, a graduate entrepreneur scheme or a startup visa endorsed by a university or approved body, and many have deadlines before the course ends. Planning a year ahead keeps the choice in your hands instead of the calendar's.

                ## Milestones
                1. The post-study and founder routes available in your country listed from the immigration authority's own guidance.
                2. Eligibility, application windows and any endorsement needed noted for each.
                3. The university's international advisers and any endorsing body consulted.
                4. A preferred route chosen with a dated application plan.
                5. A fallback written down in case the application is refused.

                ## Notes
                Rules change often. Use official sources and an accredited immigration adviser, never forum posts, and keep copies of everything you submit.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen post-study route with eligibility confirmed by an adviser, a dated application plan and a written fallback."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List post-study and founder visa routes from official guidance"
                - "Note the application window for each route against your graduation date"
                - "Book a meeting with the international student advisers"
                - "Ask the enterprise office whether it endorses graduate founders"
            - name: PhD or master's student founder plan
              description: |-
                ## Purpose
                Postgraduate founders have more flexible days than undergraduates but answer to a supervisor, a funding body and often a lab, and many studentships restrict outside work or claim rights in research outputs. Agreeing with your supervisor how the startup fits around the thesis, and what the funder allows, protects both.

                ## Milestones
                1. The studentship or funder's rules on outside work and commercial activity read.
                2. Your supervisor told about the startup and their concerns recorded.
                3. A clear line drawn between thesis research and startup work, in writing.
                4. A weekly hours limit for the startup agreed with your supervisor.
                5. Thesis milestones kept on schedule for two consecutive reviews.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written understanding with your supervisor on hours and the line between thesis and startup work, with thesis milestones on schedule."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your studentship terms on outside work and commercial activity"
                - "Book a meeting with your supervisor to discuss the startup"
                - "Write down which work belongs to the thesis and which to the startup"
                - "Check thesis milestones before each progress review"
            - name: Mature student or student parent founder
              description: |-
                ## Purpose
                Mature students and student parents often bring industry experience and a clear problem, but have fixed childcare hours, family income to protect and little appetite for all-night hackathons. Shaping the startup around school runs and caring duties, and using campus support built for you, makes founding realistic rather than heroic.

                ## Milestones
                1. Your fixed caring and family hours blocked before any startup time.
                2. Campus support for mature students and student parents found, such as childcare funds or flexible deadlines.
                3. A startup rhythm that uses daytime gaps rather than late nights.
                4. Your past industry contacts listed as early customers or advisers.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A weekly plan that protects caring hours, uses daytime startup slots and lists at least ten industry contacts."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Block childcare, school runs and family time in your calendar first"
                - "Ask student services about support for mature students and parents"
                - "Find two daytime slots each week for startup work"
                - "List ten people from your previous career who face the problem"
            - name: Founding while working a part-time job
              description: |-
                ## Purpose
                Many students cannot give up a part-time job, so the startup competes with both lectures and shifts. Treating the job as fixed income, choosing shift patterns that leave unbroken startup blocks and spotting whether your workplace is itself a market keeps all three going without burning out.

                ## Milestones
                1. Shift hours, study hours and startup hours laid out in one week.
                2. Shifts arranged, where possible, to leave at least one long startup block.
                3. A rule for the minimum income you keep while the startup earns nothing.
                4. Any conflict between your employment terms and the startup checked.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A weekly pattern combining shifts, study and one long startup block, kept for six weeks with minimum income protected."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write your minimum monthly income from the job"
                - "Ask your manager about shifts that leave one free half day"
                - "Check your employment terms for rules on outside business"
                - "Plan next week's shifts around your startup block @recurring(weekly:thu)"
            - name: Distance learning student founder
              description: |-
                ## Purpose
                Students on online or distance courses miss the corridor conversations, incubator desks and fairs that campus founders take for granted, but often keep full-time jobs and wider networks. Finding the remote programmes, online founder societies and alumni groups your university offers gives you the campus advantages without the campus.

                ## Milestones
                1. The online enterprise programmes and remote incubator options at your university listed.
                2. An online founder society or student network joined.
                3. One recurring call with a fellow student founder set up.
                4. One visit to campus or a regional event planned, if possible.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Membership of at least one online founder network, a recurring peer call and a list of remote university resources."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the enterprise office what it offers distance learners"
                - "Join one online student founder network"
                - "Set up a fortnightly call with another student founder"
                - "Check whether any campus event fits a planned visit"
            - name: Year abroad or exchange term as a founder
              description: |-
                ## Purpose
                Exchange terms and years abroad pull one founder into another time zone, another academic calendar and sometimes another visa regime, just as the startup may be gaining users. Planning ahead what that founder keeps doing, how the team meets and what the host country allows a visiting student to do turns the year from a gap into a chance to test a second market.

                ## Milestones
                1. The host university's term dates and time zone added to the team calendar.
                2. The host country's visa rules on student work and business activity checked with the exchange office.
                3. The travelling founder's role for the year agreed and written into the team agreement.
                4. A weekly call time that works across both time zones fixed.
                5. Ten conversations with local students or customers held to test the second market.

                ## Notes
                Agree before departure who holds bank access, logins and signing duties, so nothing stalls while one founder is abroad.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written plan for the year abroad covering role, visa limits, a fixed weekly call and at least ten local market conversations."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Add the host university's term dates and time zone to the team calendar"
                - "Ask the exchange office what work and business activity the host visa allows"
                - "Agree who holds bank access and signing duties while you are away"
                - "List ten local students or businesses to talk to in the host city"
            - name: First-year founder with no network yet
              description: |-
                ## Purpose
                Starting a company in your first year means three or more years of campus resources ahead but no contacts, no track record and a lot of first-year study to settle into. Spending the first year building a small network, joining the right society and testing small ideas sets up a far stronger attempt in the second.

                ## Milestones
                1. The entrepreneurship society joined and at least three events attended.
                2. Five older students or alumni founders met for coffee.
                3. One small idea tested end to end, even if it stops.
                4. First-year grades kept at or above your target.

                ## Notes
                In many degrees the first year counts little or nothing towards the final grade, but it still decides placements and module access. Check how your course treats it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "By the end of first year, five founder conversations held, one idea tested and grades at target."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Join the entrepreneurship society and attend its next event"
                - "Ask the society for introductions to two student founders"
                - "Pick one small idea to test before the end of term"
                - "Check how first-year grades count towards your degree"
            - name: Raising a first angel cheque as a student
              description: |-
                ## Purpose
                Angel investors, alumni investor networks and student-run venture funds do back student founders, but they look for evidence the team will keep going after graduation, and student terms can be unusual. Preparing the evidence, understanding the instruments on offer and getting independent advice before signing makes a first cheque a help rather than a trap.

                ## Milestones
                1. The evidence investors will ask for gathered: users, revenue or pilots, and each founder's post-graduation plan.
                2. A list of angels, alumni networks and student funds that back student founders.
                3. The common instruments, such as convertible notes or advance subscription agreements, understood at a basic level.
                4. Any offer reviewed by an independent adviser before signing.
                5. Investor reporting set up after money arrives.

                ## Notes
                This is organisational preparation, not investment or legal advice. Never sign investment terms without independent advice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A target list of ten student-friendly investors and an evidence pack, with any offer reviewed by an independent adviser."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the alumni angel networks and student venture funds near you"
                - "Write each founder's commitment after graduation in one line"
                - "Read a plain guide to convertible notes and advance subscription agreements"
                - "Find an independent adviser to review any term sheet"
            - name: Selling to the university itself
              description: |-
                ## Purpose
                Your own university is often the obvious first customer for a student startup, with thousands of users and real budgets, but buying runs through procurement rules, data protection checks and committees that can take a year. Finding a sponsoring department, understanding the purchasing thresholds and starting with a funded pilot gives a realistic path in.

                ## Milestones
                1. One department or service with the problem and a named sponsor found.
                2. The university's purchasing thresholds and supplier requirements understood.
                3. Data protection and security questions answered in writing.
                4. A small paid or funded pilot agreed with clear success measures.
                5. A decision on wider rollout scheduled with the sponsor.

                ## Notes
                Student founders selling to their own university should declare the relationship and avoid using student access to staff systems or data.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A pilot agreed with a named university sponsor, with procurement and data protection requirements met in writing."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Name three departments that suffer the problem you solve"
                - "Ask procurement what thresholds apply to small suppliers"
                - "Prepare written answers to standard data protection questions"
                - "Propose a one-term pilot with three measures of success"
            - name: Expanding from one campus to many
              description: |-
                ## Purpose
                A product that works at one university does not automatically work at the next, where term dates, societies, rules and student habits differ. Building a repeatable launch kit and a small network of campus ambassadors, then measuring each campus separately, shows whether you have a business or one popular local project.

                ## Milestones
                1. The steps of your first campus launch written as a repeatable kit.
                2. Two further universities chosen with their term dates mapped.
                3. Paid or rewarded campus ambassadors recruited at each, with clear targets.
                4. Sign-ups and retention tracked separately for each campus.
                5. A decision on the next three campuses based on the numbers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Launches at two more universities using a written kit, with per-campus sign-ups and retention compared."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write down every step of your first campus launch"
                - "Choose two universities and map their term dates"
                - "Recruit one campus ambassador at each with a written target"
                - "Review sign-ups and retention for each campus @recurring(monthly:15)"
---

# Student Startup Founding

This area is for students starting a company while still enrolled, and for the student teams building one together between lectures, labs and part-time jobs. It starts with foundations (an hours budget, the university's IP policy, a map of campus resources, your visa work rights, a team agreement and a student budget), then the routines that keep the degree and the company both alive, the skills a student founder can pick up cheaply on campus, the decisions about dissertations, leave of absence, incubators and graduate job offers, the dated moments such as competitions, hackathons, demo days and graduation, variants for international, postgraduate, mature, working, distance-learning and exchange students, and finally specialist work on first investors, selling to the university itself and spreading to other campuses.

What repeats is a protected weekly startup block, a Sunday coursework deadline check, a Monday team stand-up, a Friday wellbeing check, monthly adviser and mentor sessions, monthly books and budget reviews, a competition calendar, an exam freeze plan and a review at the end of every term. The **Monthly budget and bills**, **Meeting notes** and **Metrics log** templates pair with the student budget, the adviser check-ins and the term review. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
