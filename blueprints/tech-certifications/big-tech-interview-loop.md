---
id: tech-certifications.big-tech-interview-loop
name: Big Tech Interview Loop
description: "A dated plan for a large tech company interview loop: target list, referrals, recruiter and phone screens, the onsite day, team matching, levelling, offer comparison, negotiation and a clean start date."
category: personal
version: 1.0.0
tags: [tech-certifications, big-tech-interview-loop, engineer, interviews, recruiting, team-matching, levelling, job-offers]
author: Aurum Technology
starter_structure:
  templates:
    - job-application
    - resume
    - meeting-notes
    - purchase-decision
    - risk-register
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Big Tech Interview Loop
          description: "Getting through a full interview loop at a large tech company: recruiter screen, phone screens, onsite rounds, team matching, levelling and the offer timeline."
          projects:
            - name: Target company and role shortlist
              description: |-
                ## Purpose
                Applying everywhere at once spreads preparation thin and lets the first recruiter call set your timeline for you. A shortlist of eight to twelve companies, each with a named role family, a level you are aiming at and a reason you would accept an offer, turns a vague job search into a pipeline you can schedule.

                ## Milestones
                1. A list of eight to twelve large tech companies, each with the role family and target level written beside it.
                2. Each company sorted into first choice, strong second and practice loop.
                3. One sentence per company on why you would say yes to an offer there.
                4. Two or three practice loops chosen to run before your first-choice companies.

                ## Notes
                Practice loops are real applications to companies you would genuinely join. Interviewing somewhere you would never accept wastes an interviewer's time and teaches you less than you think.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written shortlist of eight to twelve companies, each with role family, target level, tier and a one-line reason to accept."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down every large tech company you would genuinely join"
                - "Note the role family and level you would apply for at each"
                - "Sort the list into first choice, strong second and practice loop"
                - "Pick two practice loops to run before your first-choice companies"
            - name: Interview readiness check and start date
              description: |-
                ## Purpose
                Most loops move from recruiter screen to onsite in a few weeks, so the moment you apply is the moment your preparation clock starts. Scoring yourself honestly on each round type before applying tells you whether to start now or spend a month getting ready, and stops a strong candidate being caught half prepared.

                ## Milestones
                1. Each round type you expect (coding, system design, behavioural, domain) scored from one to five with a recent example.
                2. The weakest round type named, with the hours it would take to bring it up.
                3. A date chosen for the first application, written in your calendar.
                4. A rule agreed with yourself for when to ask a recruiter to delay scheduling.

                ## Notes
                Recruiters can usually push an onsite back a few weeks if you ask early. Asking after the dates are set is harder.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored readiness sheet for every expected round type and a written first-application date in your calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the round types each shortlisted company is known to run"
                - "Score yourself from one to five on each round type with an example"
                - "Estimate the hours needed to lift your weakest round type"
                - "Put your first application date in the calendar"
            - name: Interview pipeline tracker
              description: |-
                ## Purpose
                Five companies at different stages means dozens of dates, contacts, round names and promised follow-ups, and losing one email can cost an offer. A single tracker with one row per company and a column per stage lets you see at a glance what is due this week and which recruiter owes you an answer.

                ## Milestones
                1. A tracker with one row per company and columns for stage, recruiter, next date, next action and level discussed.
                2. Every live application entered with its current stage.
                3. A notes link per company pointing to its debriefs and offer details.
                4. The tracker pinned somewhere you open daily.

                ## Notes
                Start from the **Job application** template for each company and keep the tracker as the index above them.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tracker exists with every live application, its stage, recruiter, next date and next action filled in."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a tracker with columns for stage, recruiter, next date and next action"
                - "Add a row for every company on your shortlist"
                - "Create one job application page per company and link it from the row"
                - "Pin the tracker where you will see it every working day"
            - name: Resume tuned for big tech screening
              description: |-
                ## Purpose
                Recruiters at large companies spend seconds on a first read and look for scope, scale and impact that maps to a level. A one or two page résumé that leads each role with measurable results, names the systems you owned and matches the level you are targeting gets you past the screen and gives interviewers better questions to ask.

                ## Milestones
                1. Every bullet rewritten to start with an action and end with a result, using a number where one is real.
                2. The two or three projects that best show your target level placed first.
                3. A version checked for the keywords in three target job postings.
                4. The résumé reviewed by one engineer already working at a target company.

                ## Notes
                Start from the **Resume** template. Do not inflate scope you cannot discuss in depth: interviewers will ask about every line.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A finished résumé with result-led bullets, checked against three target postings and reviewed by an engineer at a target company."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull three target job postings and highlight the repeated requirements"
                - "Rewrite each bullet as action, system and measurable result"
                - "Move the projects that show your target level to the top"
                - "Send the résumé to an engineer at a target company for a review"
            - name: Referral map and warm introductions
              description: |-
                ## Purpose
                A referral from a current employee often moves an application from the pile to a recruiter's queue within days. Mapping who you know at each target company, and asking them properly with a short note and your résumé attached, is usually the single highest return hour in the whole search.

                ## Milestones
                1. A list of former colleagues, classmates and contacts at each target company.
                2. A short referral request written that names the role, the team if known and two lines on fit.
                3. Referrals requested at every first-choice company where you have a contact.
                4. Each referrer thanked and kept informed of the outcome.

                ## Notes
                Ask referrers whether they know you well enough to write a strong note. A lukewarm referral from a near stranger adds little.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Referral requests sent at every first-choice company where you have a contact, each logged in the pipeline tracker."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search your contacts for people at each target company"
                - "Write a five line referral request with the role and your fit"
                - "Send referral requests to contacts at first-choice companies"
                - "Log each referral and its date in the pipeline tracker"
            - name: Recruiter screen pitch and answers
              description: |-
                ## Purpose
                The recruiter screen decides your level band, which team pool you enter and how fast the loop moves, yet many engineers treat it as a formality. Preparing a ninety second career summary, a clear reason for leaving, your timeline and a polite way to hold back salary figures means the recruiter hears a candidate who knows what they want.

                ## Milestones
                1. A ninety second summary of your career aimed at the target level, rehearsed aloud.
                2. A one sentence answer to why you are looking and why this company.
                3. A prepared response to the expected salary question that keeps numbers until later, if that is your choice.
                4. A list of five questions for the recruiter about the loop format, levels and timeline.

                ## Notes
                Rules on asking about current pay differ by country and state. Know whether the recruiter is allowed to ask before you decide how to answer.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one page recruiter screen sheet with your summary, reasons, timeline, compensation response and five questions, rehearsed aloud twice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a ninety second career summary aimed at your target level"
                - "Draft your answer to why you are looking and why this company"
                - "Decide how you will respond if asked for expected or current pay"
                - "Rehearse the full screen aloud twice with a timer"
            - name: Interview calendar and time off plan
              description: |-
                ## Purpose
                Phone screens arrive in clusters and an onsite can take most of a working day, which is hard to absorb alongside a full-time job. Blocking interview windows in advance, deciding which days you can take as leave and keeping two preferred slots per week ready to offer recruiters stops the search eating your evenings.

                ## Milestones
                1. Two or three regular interview windows blocked in your calendar each week.
                2. Leave days set aside for onsite rounds.
                3. A short list of preferred slots ready to paste into recruiter emails.
                4. Time zones for every target company's interviewers noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Recurring interview windows are blocked, leave days for onsites are earmarked and a slot list is saved for recruiter replies."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Block two or three recurring interview windows each week"
                - "Check how many leave days you can use for onsite rounds"
                - "Write a short list of preferred slots to paste into emails"
                - "Note the interviewer time zone for each target company"
            - name: Quiet, reliable remote interview setup
              description: |-
                ## Purpose
                Most screens and many onsites now happen over video in a shared editor or whiteboard tool, and a dropped connection in the middle of a design round is hard to recover from. Testing your camera, microphone, lighting, network and the tools each company uses, with a phone hotspot as backup, removes the avoidable failures.

                ## Milestones
                1. A quiet room booked or arranged for every interview slot.
                2. Camera, microphone and lighting tested on a recorded call.
                3. The coding and whiteboard tools each company names opened and tried in advance.
                4. A backup connection and the recruiter's phone number ready before every round.

                ## Notes
                Many shared editors have no autocomplete or run button. Practise in a plain editor so the setting does not surprise you.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recorded test call shows clear audio and video, each company's tools have been opened, and a backup connection is ready."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record a short test call and check your sound, light and framing"
                - "Open each company's named coding or whiteboard tool and try it"
                - "Set up a phone hotspot and test it as a backup connection"
                - "Save each recruiter's phone number for use if a call drops"
            - name: Company loop format dossier
              description: |-
                ## Purpose
                Large companies publish interview guides and their loops differ in real ways: some run a hiring committee, some a bar raiser, some match teams before the onsite and some after. A one page dossier per company, built from its own careers pages and what the recruiter tells you, means you prepare for the loop that company actually runs.

                ## Milestones
                1. One page per first-choice company describing its screens, onsite rounds and decision process.
                2. Each page sourced from the company's official interview guide, dated.
                3. Points the recruiter confirmed marked as confirmed.
                4. Differences between companies summarised in a short comparison.

                ## Notes
                Forum reports of a company's loop are often years old. Treat the official guide and the recruiter as the source, and forums only as hints.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated one page loop dossier exists for every first-choice company, with recruiter-confirmed points marked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find each first-choice company's official interview preparation page"
                - "Summarise its screens, onsite rounds and decision steps on one page"
                - "Ask your recruiter to confirm the round list and their lengths"
                - "Write a short comparison of how the loops differ"
                - "Recheck each company's official interview guide for changes @recurring(quarterly)"
            - name: Weekly pipeline review
              description: |-
                ## Purpose
                Loops stall quietly: a recruiter goes on leave, a scheduling email sits unanswered, a decision date slides. A twenty minute review each week of every row in the tracker catches the stalls, books the next round and keeps offers landing close together.

                ## Milestones
                1. Every live application checked weekly for its next date and owner.
                2. Any application with no movement for ten working days followed up.
                3. Next week's interviews and preparation blocks visible in the calendar.
                4. Closed applications moved to a separate section with the outcome noted.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker shows a review date within the last seven days and every live row has a next date and action."
                cadence: rolling
              tasks:
                - "Review every live row in the pipeline tracker @recurring(weekly:sun)"
                - "Mark any application with no movement for ten working days"
                - "Book preparation blocks for each round scheduled next week @recurring(weekly:fri)"
                - "Archive closed applications with the outcome and date"
            - name: Recruiter follow-up rhythm
              description: |-
                ## Purpose
                Recruiters juggle dozens of candidates, and the ones who reply quickly and follow up politely tend to move faster. A small routine of same-day replies, a polite chase after the promised date and a log of what each recruiter said keeps your loop at the front of their queue without becoming a nuisance.

                ## Milestones
                1. A rule of replying to recruiter emails within one working day.
                2. Two short follow-up messages saved: one for scheduling, one for decisions.
                3. Each recruiter conversation logged with the date and what was promised.
                4. No promised decision date passing without a follow-up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every recruiter promise in the log has either been met or followed up within two working days of the date."
                cadence: rolling
              tasks:
                - "Save two short follow-up messages for scheduling and decisions"
                - "Send follow-ups on any promised dates that have passed @recurring(weekly:wed)"
                - "Log each recruiter call with the date and what was promised"
                - "Reply to recruiter emails within one working day"
            - name: Monthly full mock loop day
              description: |-
                ## Purpose
                Single mock interviews test skill, but a real onsite tests stamina: four or five rounds back to back with short breaks and a lunch conversation that is still being assessed. Running a full mock loop once a month, with different peers taking each round, shows where your energy and focus drop.

                ## Milestones
                1. A group of four or five peers willing to run one round each.
                2. A mock loop run with the same round order and breaks as a real onsite.
                3. Written feedback collected from each mock interviewer.
                4. The round where your performance dropped most identified and noted.

                ## Notes
                Swap mock rounds with peers who are also interviewing, so the time cost is shared.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least one full mock loop of four rounds has been run each month during the search, with written feedback from every round."
                cadence: rolling
              tasks:
                - "Ask four or five peers to each run one mock round"
                - "Run a full mock loop with real breaks and round order @recurring(monthly:18)"
                - "Collect a short written note from each mock interviewer"
                - "Write down the round where your focus dropped most"
            - name: Debrief notes after every round
              description: |-
                ## Purpose
                Memory of an interview fades within a day, and the details matter later: what was asked, where you stumbled, what the interviewer seemed to care about. A ten minute debrief written straight after each round feeds the next round, gives you better questions for team matching and shows patterns across companies.

                ## Milestones
                1. A debrief template with sections for questions, your answers, signals and fixes.
                2. A debrief written within a day of every screen and onsite round.
                3. Recurring weak points tallied across debriefs.
                4. One fix per weak point added to the next week's preparation.

                ## Notes
                Start from the **Meeting notes** template. Respect any confidentiality you agreed to: keep the notes private and do not post questions publicly.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every completed round in the tracker links to a private debrief written within a day of the interview."
                cadence: rolling
              tasks:
                - "Create a debrief template with questions, answers, signals and fixes"
                - "Write a debrief within a day of each completed round"
                - "Tally recurring weak points across all debriefs @recurring(weekly:sat)"
                - "Add one fix per weak point to next week's preparation"
            - name: Interview season energy routine
              description: |-
                ## Purpose
                Loop seasons can run two or three months on top of a job, and tired candidates lose the clarity interviewers score. Protecting sleep before interview days, eating before long rounds and keeping some exercise in the week are ordinary habits that show up directly in how sharp you sound at the whiteboard.

                ## Milestones
                1. A fixed bedtime for the two nights before any onsite.
                2. A pre-interview routine written: food, water, warm-up problem, ten minutes of quiet.
                3. Three exercise sessions a week kept during the season.
                4. One evening a week kept free of interview preparation.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written pre-interview routine exists and the weekly log shows three exercise sessions and one free evening for most weeks of the season."
                cadence: rolling
              tasks:
                - "Write a short pre-interview routine and keep it by your desk"
                - "Set a fixed bedtime for the two nights before each onsite"
                - "Log exercise sessions and the free evening each week @recurring(weekly:mon)"
                - "Choose one evening a week with no preparation at all"
            - name: Questions you ask the interviewers
              description: |-
                ## Purpose
                Almost every round ends with a few minutes for your questions, and a weak question wastes the last impression. A bank of specific questions for engineers, managers and senior interviewers, refreshed after each loop, also gathers the information you will need to choose between teams and offers.

                ## Milestones
                1. A bank of at least five questions each for peer engineers, managers and senior leaders.
                2. Questions that reveal on-call load, release pace and team stability included.
                3. The answers you hear recorded in each company's debrief.
                4. Questions that drew vague answers rewritten after each loop.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A question bank of at least fifteen questions grouped by interviewer type, with answers captured in each company's debriefs."
                cadence: rolling
              tasks:
                - "Write five questions each for engineers, managers and senior leaders"
                - "Add questions on on-call load, release pace and team turnover"
                - "Rewrite questions that drew vague answers after each loop @recurring(monthly:26)"
                - "Copy the answers you hear into the company's debrief page"
            - name: Careers page and headcount watch
              description: |-
                ## Purpose
                Hiring at large companies opens and freezes in waves, and a role that was closed last quarter may reopen with a different level. A monthly check of each target's careers page and engineering news tells you when to apply, when to wait and when a reorg has changed the teams you would match with.

                ## Milestones
                1. Saved searches on each target company's careers site for your role family and level.
                2. Job alerts set to arrive weekly rather than daily.
                3. A monthly note on which companies are opening or slowing hiring.
                4. Shortlist tiers adjusted when hiring signals change.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Saved searches exist at every shortlisted company and a hiring signals note has been updated in each of the last three months."
                cadence: rolling
              tasks:
                - "Save a careers site search for your role family at each target"
                - "Set job alerts to a weekly digest"
                - "Write a short note on which targets are opening or freezing @recurring(monthly:5)"
                - "Move companies between shortlist tiers when signals change"
            - name: Referral network upkeep between searches
              description: |-
                ## Purpose
                Engineers who get referrals easily are usually the ones who stayed in touch when they were not asking for anything. A light quarterly habit of congratulating, sharing and catching up with people at target companies means the next search starts with warm contacts rather than cold applications.

                ## Milestones
                1. A list of twenty contacts across target companies with the last date you spoke.
                2. A quarterly check-in sent to at least five of them.
                3. Help offered back: a referral, a review or an introduction.
                4. The contact list updated when people change companies.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A contact list of twenty people exists with last-contact dates, and five check-ins have been sent in each of the last two quarters."
                cadence: rolling
              tasks:
                - "List twenty contacts at target companies with last contact dates"
                - "Send five short check-in messages to people on the list @recurring(quarterly)"
                - "Offer one referral, review or introduction back each quarter @recurring(quarterly)"
                - "Update the list when contacts change companies"
            - name: Preparation hours balanced across round types
              description: |-
                ## Purpose
                Engineers tend to over-practise the round they enjoy and under-prepare the one that sinks them, often behavioural or system design. A monthly look at hours spent per round type against your readiness scores and the rounds you have coming keeps the preparation pointed at the loop you face.

                ## Milestones
                1. Preparation hours logged by round type each week.
                2. A monthly comparison of hours against readiness scores and upcoming rounds.
                3. Next month's hours reallocated toward the weakest scheduled round.
                4. Readiness scores updated after each real loop.

                ## Notes
                The detailed practice for each round type lives in its own area; this project is only the balance sheet across them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly hours-by-round summary exists for every month of the search, with next month's allocation written beside it."
                cadence: rolling
              tasks:
                - "Log preparation hours by round type at the end of each week @recurring(weekly:fri)"
                - "Compare hours with readiness scores and upcoming rounds @recurring(monthly:28)"
                - "Move next month's hours toward the weakest scheduled round"
                - "Update readiness scores after each completed loop"
            - name: Phone screen conditions practice
              description: |-
                ## Purpose
                A technical phone screen is a coding problem plus a stranger, a timer, a plain shared editor and no chance to look things up, and those conditions trip people who solve the same problem easily alone. Practising a handful of screens under exactly those conditions, with a peer on video, makes the real one feel familiar.

                ## Milestones
                1. Five practice screens run with a peer on video in a plain shared editor.
                2. Each practice timed to the length your recruiter quoted.
                3. Your opening routine fixed: restate, clarify, example, approach, then code.
                4. A note on what to do when stuck, used in at least one practice.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five timed practice screens completed in a plain shared editor with a peer, each with a short written review."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your recruiter how long the phone screen runs and which tool it uses"
                - "Schedule five practice screens with a peer in a plain shared editor"
                - "Write your opening routine on a card and use it each time"
                - "Review each practice screen in five lines straight after"
            - name: Working with the interviewer in the room
              description: |-
                ## Purpose
                Interviewers score how you collaborate as well as what you produce: whether you take hints, check assumptions, manage time and recover from a wrong turn. Learning to read and respond to those signals, and to ask for a time check without sounding lost, turns a borderline round into a pass more often than extra problems do.

                ## Milestones
                1. A short list of the signals interviewers give: hints, silence, redirects, time warnings.
                2. A planned response to each signal written down.
                3. Three mock rounds run where the mock interviewer gives deliberate hints.
                4. Feedback collected on how well you took the hints.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three mock rounds with deliberate hints completed, each with written feedback on how the hints were used."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the signals interviewers give and what each usually means"
                - "Write how you will respond to each signal"
                - "Ask a mock interviewer to give deliberate hints in three rounds"
                - "Record their feedback on how you used each hint"
            - name: Levelling ladders across target companies
              description: |-
                ## Purpose
                Identical titles mean different scope at different companies, and a level decided at the recruiter screen or debrief shapes pay, expectations and promotion timing for years. Learning how each target's engineering ladder describes scope, autonomy and impact lets you argue for the right level with evidence rather than a job title.

                ## Milestones
                1. Each target company's published or widely reported engineering ladder summarised.
                2. Your current role mapped to the equivalent level at each target.
                3. Three examples from your work matched to the scope description of your target level.
                4. The level you will ask to be considered for written per company.

                ## Notes
                Public levelling comparison sites are a starting point, not a source of truth. Confirm the level with the recruiter in writing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one page level map for each target company with your evidence for the level you will ask for."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find how each target company names and describes its engineering levels"
                - "Map your current role to the equivalent level at each target"
                - "Match three of your projects to your target level's scope"
                - "Write the level you will ask for at each company"
            - name: How debriefs and hiring committees decide
              description: |-
                ## Purpose
                After the onsite, your interviewers write feedback and a group decides, sometimes people who never met you. Knowing that written feedback, consistent signals and the level being assessed drive the outcome explains why one weak round is often survivable and why vague answers hurt more than wrong ones.

                ## Milestones
                1. The decision process at each first-choice company summarised from official sources and the recruiter.
                2. The roles of hiring manager, bar raiser or committee noted where they exist.
                3. A list of the signals interviewers are typically asked to rate.
                4. One change to how you answer, based on what the committee reads.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of the decision process at each first-choice company, with one recorded change to how you answer questions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each recruiter who makes the final hiring decision"
                - "Read each company's official description of its hiring process"
                - "List the signals interviewers are asked to rate"
                - "Write one change to how you answer based on what reviewers read"
            - name: Product and engineering blog research
              description: |-
                ## Purpose
                Interviewers notice when a candidate knows what the company builds and how its engineers think. An hour per first-choice company with its engineering blog, recent talks and main products gives you sharper answers to why this company, better design discussion examples and real questions to ask.

                ## Milestones
                1. Three recent engineering blog posts or talks read for each first-choice company.
                2. The main products and the teams you might join listed per company.
                3. Two specific points per company you can bring into a conversation.
                4. One question per company drawn from what you read.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each first-choice company's page lists three engineering posts read, two talking points and one question drawn from them."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read three recent engineering blog posts from each first-choice company"
                - "List the main products and likely teams you could join"
                - "Write two specific points per company to use in conversation"
                - "Draw one question per company from what you read"
            - name: Compensation structure literacy
              description: |-
                ## Purpose
                Big tech offers mix base salary, bonus, equity with a vesting schedule, sign-on payments and sometimes refreshers, and two offers with the same headline can be very different over four years. Learning how each component works, and which questions to ask, lets you compare offers properly; tax and personal finance questions go to a qualified adviser.

                ## Milestones
                1. Each compensation component defined in your own words.
                2. The vesting schedules and cliffs used by your target companies noted from their offer materials or recruiters.
                3. A list of questions to ask about equity, refreshers and clawbacks.
                4. A note of which questions need a tax or financial adviser.

                ## Notes
                This is about understanding the offer, not advice on what to accept or how to invest equity. Speak to a qualified tax adviser about how equity is taxed where you live.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one page glossary of compensation components and a written list of offer questions, with adviser questions marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a plain definition of base, bonus, equity, sign-on and refreshers"
                - "Note how vesting and cliffs work at your target companies"
                - "List the questions you will ask about equity and clawbacks"
                - "Mark which questions need a tax adviser rather than a recruiter"
            - name: Hiring manager conversation skills
              description: |-
                ## Purpose
                At companies that match teams after the onsite, the hiring manager call is half interview and half sales pitch, in both directions. Knowing how to describe what you want, probe the team's roadmap and on-call reality, and leave the manager keen to have you is a skill worth practising before the first match call.

                ## Milestones
                1. A two minute description of the work you want next, rehearsed.
                2. Ten questions for hiring managers about roadmap, team health and growth.
                3. One practice match call run with a manager you know.
                4. A short note on what you will listen for to judge a good team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A rehearsed two minute description, ten manager questions and notes from one practice match call are saved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write two minutes on the work you want to do next"
                - "Draft ten questions on roadmap, team health and growth"
                - "Run a practice match call with a manager you know"
                - "Note the signals that would tell you a team is a good fit"
            - name: Domain round preparation for specialist tracks
              description: |-
                ## Purpose
                Frontend, mobile, infrastructure, security and data roles often swap one generic round for a domain round with its own format. Finding out early whether your loop includes one, and what it looks like, avoids walking into an onsite expecting a standard coding round and meeting a browser performance or networking discussion.

                ## Milestones
                1. Each recruiter asked whether the loop includes a domain or specialist round.
                2. The format of each domain round written down: discussion, coding, debugging or design.
                3. A short list of topics that domain round usually covers.
                4. Two practice sessions run in that format.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every loop with a domain round has its format and topic list recorded and two practice sessions completed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask each recruiter whether there is a domain or specialist round"
                - "Write down the format of each domain round you will face"
                - "List the topics that round usually covers for your track"
                - "Run two practice sessions in the same format"
            - name: Sequencing loops so offers land together
              description: |-
                ## Purpose
                Offers are most useful side by side: an early offer with a short deadline from a second-choice company can force a decision before your first choice finishes. Sequencing practice loops first and first-choice loops in the same few weeks gives you comparable offers and real choice.

                ## Milestones
                1. A rough timeline of how long each target's loop usually takes from screen to offer.
                2. Practice loops scheduled to finish before first-choice onsites.
                3. First-choice onsites grouped within about three weeks of each other.
                4. Recruiters told early about your timeline and other processes.

                ## Notes
                Telling recruiters you are in other processes is normal and often speeds things up. Be truthful about stages.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written schedule shows practice loops ending before first-choice onsites, with first-choice onsites within three weeks of each other."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Estimate each target's typical time from screen to offer"
                - "Draw a timeline with practice loops ahead of first choices"
                - "Ask first-choice recruiters to group onsites in a three week window"
                - "Tell each recruiter your timeline and other active processes"
            - name: Interview now or after the next milestone
              description: |-
                ## Purpose
                Sometimes waiting six months for a promotion, a shipped project or a vested grant makes you a stronger candidate or a better paid one, and sometimes waiting only delays a move you need. Writing down what you gain and lose by starting now versus later turns an anxious feeling into a decision you can stand by.

                ## Milestones
                1. The upcoming milestones at your current job listed with dates.
                2. What each milestone would add to your level case or compensation estimated.
                3. The cost of waiting written down: stalled growth, team changes, hiring cycles.
                4. A decision recorded to start now or on a named date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of starting now versus after named milestones, ending in a recorded decision and date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your upcoming promotion, project and vesting dates"
                - "Estimate what each milestone adds to your level case"
                - "Write down what waiting would cost you"
                - "Record your decision and the date you will start applying"
            - name: Level calibration before the onsite
              description: |-
                ## Purpose
                Many companies fix the level being assessed before the onsite, and moving it afterwards is hard. Raising the level question with the recruiter early, with evidence of scope from your current role, gives you the best chance of being interviewed for the level you can actually perform at.

                ## Milestones
                1. Your evidence for the target level summarised in three or four sentences.
                2. The level question raised with each recruiter before the onsite is scheduled.
                3. The level being assessed confirmed in writing.
                4. A plan agreed for what happens if the debrief suggests a different level.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each recruiter has confirmed in writing the level your onsite will assess, before the onsite date is set."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Summarise your evidence for the target level in four sentences"
                - "Raise the level question with each recruiter before the onsite is set"
                - "Ask for the assessed level to be confirmed by email"
                - "Ask what happens if the debrief points to another level"
            - name: Choosing between team matches
              description: |-
                ## Purpose
                Passing the loop at some companies earns a set of team conversations rather than an offer for a specific job, and the team decides your daily work, manager and promotion odds. Scoring each team against the same criteria stops you picking the manager who was friendliest on a thirty minute call.

                ## Milestones
                1. Criteria chosen before the calls: work, manager, on-call, growth, stability, location.
                2. Each team scored against the same criteria after its call.
                3. One engineer on the leading team spoken to directly.
                4. A team chosen and the reasons written down.

                ## Notes
                Ask how long the matching window stays open. Some companies close it after a set time if no team is chosen.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every team you spoke with is scored against the same criteria, and a chosen team and written reasons are recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write your team criteria before the first match call"
                - "Score each team against the criteria straight after its call"
                - "Ask to speak with one engineer on the leading team"
                - "Record the team you chose and why"
            - name: Offer comparison worksheet
              description: |-
                ## Purpose
                Comparing offers by headline salary misses vesting shape, sign-on clawbacks, level, team and the cost of living in each location. A worksheet that lays every offer out on the same rows, over four years and with the non-money factors scored, makes the choice visible and defensible.

                ## Milestones
                1. Every offer entered on the same rows: level, base, bonus target, equity, vesting, sign-on, start date.
                2. Yearly totals estimated for four years using each company's own vesting schedule.
                3. Team, manager, growth and location factors scored on a fixed scale.
                4. The questions that still need answers sent to each recruiter.

                ## Notes
                Start from the **Purchase decision** template and keep the scoring rubric fixed before you see the numbers. Equity values are estimates, not promises.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A worksheet compares every offer on identical rows over four years, with non-money factors scored and open questions sent."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Enter every written offer on the same set of rows"
                - "Estimate four yearly totals using each company's vesting schedule"
                - "Score team, manager, growth and location on a fixed scale"
                - "Email each recruiter the questions still open on their offer"
            - name: Offer negotiation plan
              description: |-
                ## Purpose
                Large tech companies expect some negotiation, and polite, evidence-based requests often move equity or sign-on even when base is fixed. A written plan with what you will ask for, the evidence behind it and what you will accept keeps the call calm and stops you agreeing to something on the spot.

                ## Milestones
                1. Your priorities ranked: level, equity, sign-on, base, start date, team.
                2. The evidence for each request written down: competing offers, level data, scope.
                3. A short script for the negotiation call, rehearsed once with a friend.
                4. A walk-away point decided privately before the call.

                ## Notes
                Never invent a competing offer. Recruiters often ask for it in writing, and a false claim can end the process.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written negotiation plan with ranked priorities, evidence, a rehearsed script and a private walk-away point exists before the first offer call."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rank level, equity, sign-on, base, start date and team"
                - "Write the evidence behind each request"
                - "Ask the agent to draft a short, polite negotiation script from your notes"
                - "Rehearse the script once with a friend and set your walk-away point"
            - name: Relocation, hybrid or remote role decision
              description: |-
                ## Purpose
                One offer can mean a move across the country, a three day office week or full remote work, and each changes cost of living, family plans and team visibility. Deciding where you are willing to work before team matching saves you from falling for a team in a city you would not move to.

                ## Milestones
                1. Each target's office and remote policy for your role family confirmed with the recruiter.
                2. The locations you would accept ranked, with any family constraints noted.
                3. Relocation support offered by each company listed.
                4. A written rule on which roles you will and will not pursue by location.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written location rule exists, with each company's office policy and relocation support recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each recruiter about office days and remote options for your role"
                - "Rank the locations you would accept with family constraints"
                - "List the relocation support each company describes"
                - "Write your rule on which roles you will pursue by location"
            - name: Recruiter screen call
              description: |-
                ## Purpose
                Each recruiter screen is a short call with outsized consequences for level, timeline and team pool. Treating every one as an event, with fifteen minutes of preparation, your screen sheet open and notes taken in the tracker afterwards, keeps your story consistent across five companies.

                ## Milestones
                1. The screen sheet reviewed and the company dossier open before the call.
                2. Level, round list, timeline and next step confirmed on the call.
                3. Notes logged in the tracker within the hour.
                4. A thank-you email sent with your available slots.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The recruiter screen is completed with level, round list and next step logged in the tracker the same day."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Reread your screen sheet and company dossier before the call"
                - "Confirm the level, round list and timeline during the call"
                - "Log the call notes in the tracker within the hour"
                - "Send a thank-you email with your preferred slots"
            - name: Technical phone screen day
              description: |-
                ## Purpose
                The technical screen is the gate to the onsite and usually one or two problems in under an hour, so the day itself needs as much care as the practice. A light warm-up, a tested setup and a clear head are what turn weeks of preparation into a pass on the day.

                ## Milestones
                1. Setup tested and the shared tool link opened half an hour before.
                2. One easy warm-up problem solved earlier in the day.
                3. The screen completed with a question or two asked at the end.
                4. A debrief written and the recruiter thanked.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The phone screen is completed on the booked date, followed by a written debrief and a thank-you to the recruiter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open the shared tool link and test sound half an hour before"
                - "Solve one easy warm-up problem earlier in the day"
                - "Ask one or two prepared questions at the end of the screen"
                - "Write the debrief and thank the recruiter by email"
            - name: Onsite or virtual onsite day plan
              description: |-
                ## Purpose
                An onsite is four to six rounds in one day, often including lunch, and small things decide how the last round goes: water, snacks, a break plan and knowing each interviewer's name. Planning the day hour by hour, whether in an office or on video, keeps your energy for the round that counts.

                ## Milestones
                1. The schedule with each round, interviewer and break confirmed by the recruiter.
                2. Travel or room, food, water and a backup connection arranged.
                3. A two minute reset routine planned for every break.
                4. Debriefs written for every round that evening.

                ## Notes
                Ask the recruiter whether lunch with an engineer is assessed. At some companies it is informal, at others it is not.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The onsite is completed on the booked date and a debrief exists for every round by the next morning."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the recruiter for the full schedule with interviewer names"
                - "Arrange travel or a quiet room, food, water and a backup connection"
                - "Plan a two minute reset routine for each break"
                - "Write a debrief for every round that evening"
            - name: Team matching calls week
              description: |-
                ## Purpose
                Once a company's committee approves you, team matching can bring several calls in a few days, each a chance to find the right manager or to miss a good team by being unprepared. Clearing your calendar, reading up on each team and scoring them straight after each call keeps the week productive.

                ## Milestones
                1. Each matching call booked with the team's area known in advance.
                2. Two specific questions prepared per team.
                3. Every call scored against your team criteria within the hour.
                4. Your preferred team told to the recruiter in writing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every matching call is completed and scored, and your preferred team has been sent to the recruiter in writing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the recruiter for the area and manager of each team"
                - "Prepare two specific questions for each team"
                - "Score each call against your team criteria within the hour"
                - "Email the recruiter your preferred team and why"
            - name: Offer call and written offer review
              description: |-
                ## Purpose
                Offers usually arrive by phone first and in writing later, and the details that matter, such as vesting schedule, sign-on clawback, start date and conditions, are only in the written version. Listening on the call, saying thank you without accepting, and checking every line of the letter protects you from surprises.

                ## Milestones
                1. The offer call taken with notes and no acceptance on the call.
                2. The written offer received and every component checked against the call notes.
                3. Conditions such as background checks, references and right to work listed.
                4. The decision deadline confirmed and written in the tracker.

                ## Notes
                If a clause is unclear, ask the recruiter in writing. For anything contractual you do not understand, speak to an employment lawyer where you live.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The written offer has been checked line by line against the call notes, with conditions and the decision deadline recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Take notes on the offer call and thank them without accepting"
                - "Ask for the full offer in writing"
                - "Check each component of the letter against your call notes"
                - "Record the conditions and decision deadline in the tracker"
            - name: Resignation, notice and start date
              description: |-
                ## Purpose
                Signing is not the end: background checks, your notice period, any equity you leave behind and the gap before day one all need handling carefully. Planning the resignation conversation and the dates so you leave on good terms and start rested is the last part of a loop done well.

                ## Milestones
                1. The background check and any other conditions cleared before you resign.
                2. Your notice period and any unvested equity or bonus dates checked in your current contract.
                3. A resignation conversation held with your manager and confirmed in writing.
                4. A start date agreed that leaves at least a few days of rest.

                ## Notes
                Hold off resigning until the new company confirms in writing that all conditions are cleared.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All offer conditions cleared in writing, resignation given and confirmed, and a start date with a rest gap agreed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your notice period and vesting dates in your current contract"
                - "Wait for written confirmation that all offer conditions are cleared"
                - "Hold the resignation conversation and follow it up in writing"
                - "Agree a start date that leaves a few days of rest"
            - name: New graduate and intern conversion loop
              description: |-
                ## Purpose
                Graduate hiring at large companies runs on its own calendar, often opening a year before start dates, and interns may get a conversion decision instead of a full loop. Knowing the season, applying early and treating an internship as a long interview gives graduates far more chances than late applications.

                ## Milestones
                1. The graduate and intern application windows at each target noted.
                2. Applications sent in the first weeks those windows open.
                3. University career services and alumni at targets contacted.
                4. For interns, the conversion criteria and decision date confirmed with your manager.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Applications sent to every target's graduate programme in its opening weeks, or an intern conversion plan agreed with your manager."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Note when each target opens graduate and intern applications"
                - "Contact your careers service and alumni at target companies"
                - "Send applications in the first weeks each window opens"
                - "Ask your intern manager what the conversion decision depends on"
            - name: Senior and staff level loop expectations
              description: |-
                ## Purpose
                At senior and staff levels the loop shifts weight toward design, ambiguity and cross-team influence, and a strong coding performance alone often lands a down-levelled offer. Mapping your past work to the scope those levels require, and making sure the recruiter knows which level you are targeting, keeps the loop assessing the right thing.

                ## Milestones
                1. The round mix for senior and staff loops at each target confirmed with the recruiter.
                2. Four projects chosen that show cross-team scope and ambiguity.
                3. Each project summarised with your decisions, trade-offs and influence.
                4. A conversation planned with the recruiter if the level looks at risk.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four project summaries showing staff or senior scope are written and the round mix is confirmed for each target."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask each recruiter how the round mix changes at senior and staff"
                - "Choose four projects that show cross-team scope"
                - "Summarise the decisions and influence you had on each"
                - "Plan what you will say if a lower level is suggested"
            - name: Engineering manager interview loop
              description: |-
                ## Purpose
                Manager loops at large tech companies swap some coding for people management, delivery, hiring and organisational design rounds, and may still include a technical round. Knowing the format and preparing examples of managing performance, growing engineers and running delivery stops an experienced manager being judged as an engineer.

                ## Milestones
                1. The manager loop's rounds confirmed with each recruiter.
                2. Examples ready for hiring, performance management, growing people and delivery.
                3. Your team's size, scope and results summarised in numbers.
                4. The technical round format and depth confirmed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A manager loop sheet lists each target's rounds, your examples by theme and your team's scope in numbers."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask each recruiter for the manager loop round list"
                - "Write examples for hiring, performance, growth and delivery"
                - "Summarise your team's size, scope and results in numbers"
                - "Confirm how deep the technical round goes for managers"
            - name: Interviewing while employed
              description: |-
                ## Purpose
                Most candidates run a loop while holding a job, a family or both, with little spare time and a reason to be discreet. A plan for using leave, keeping searches off work devices and protecting your current performance means you finish the search with your reputation intact whatever the outcome.

                ## Milestones
                1. Personal devices and email used for every search activity.
                2. Leave and flexible hours planned for each onsite.
                3. Weekly preparation capped at a number of hours you can sustain.
                4. Your current work commitments reviewed so nothing slips during the season.

                ## Notes
                Check your employment contract for any rules on outside work or confidentiality before you start, and keep interview questions about current work at a level you are allowed to share.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All search activity runs on personal devices, onsites are covered by leave and weekly prep hours stay under your written cap."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Move all search email and files to personal devices"
                - "Plan the leave you will use for each onsite"
                - "Set a weekly cap on preparation hours you can sustain"
                - "Check this week's preparation hours against your cap @recurring(weekly:tue)"
                - "Review current work commitments that fall in the search window"
            - name: International candidate visa and sponsorship questions
              description: |-
                ## Purpose
                Candidates who need sponsorship or are moving countries face extra steps, longer timelines and sometimes different offer terms, and finding this out after the offer wastes everyone's time. Raising sponsorship at the recruiter screen and keeping a list of questions for each company's immigration team keeps the process predictable.

                ## Milestones
                1. Sponsorship needs raised at every recruiter screen.
                2. Each company's sponsorship and relocation policy for your situation recorded.
                3. Documents you may be asked for gathered in one folder.
                4. Questions for each company's immigration provider listed, with legal points left to them.

                ## Notes
                Immigration rules change and depend on your country and theirs. Rely on the company's immigration lawyers and official government sources, not forums.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each company's sponsorship position for your situation is recorded and a document folder and question list are ready."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Raise your sponsorship needs on every recruiter screen"
                - "Record each company's sponsorship and relocation position"
                - "Gather passport, degree and employment documents in one folder"
                - "List questions for each company's immigration provider"
            - name: Returning after a layoff or career break
              description: |-
                ## Purpose
                Engineers coming back after a layoff, parental leave, illness or study often worry about the gap more than recruiters do. A short, honest explanation, a refresh of recent tools and two or three practice loops before first choices rebuild confidence and let the conversation move to what you can do now.

                ## Milestones
                1. A two sentence explanation of the gap, said aloud comfortably.
                2. Recent changes in your stack or tools reviewed.
                3. Two practice loops completed before first-choice applications.
                4. Your résumé dates and any gap presented plainly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rehearsed gap explanation exists and two practice loops are completed before any first-choice application."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a two sentence explanation of your gap"
                - "Practise saying it aloud until it feels plain and calm"
                - "Review what has changed in your stack while you were away"
                - "Apply to two practice loops before first choices"
            - name: Rejection review and reapplication plan
              description: |-
                ## Purpose
                Rejections are common even for strong engineers, and companies often allow you to reapply after a cooling-off period. Asking for whatever feedback the recruiter can share, comparing it with your debriefs and writing a dated plan for the next attempt turns a no into a later yes.

                ## Milestones
                1. Feedback requested from the recruiter in a short, polite email.
                2. The likely weak rounds identified from feedback and your own debriefs.
                3. The reapplication waiting period confirmed with the recruiter.
                4. A reapplication date in the calendar with a preparation plan behind it.

                ## Notes
                Many companies share little or no feedback. Your own debriefs are often the better record.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written review of the rejected loop, the confirmed waiting period and a dated reapplication plan exist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Send the recruiter a short request for any feedback"
                - "Compare their feedback with your own debriefs"
                - "Ask how long you must wait before reapplying"
                - "Put the reapplication date and a prep plan in the calendar"
            - name: Responding to a down-levelled offer
              description: |-
                ## Purpose
                An offer one level below your target is common after a mixed debrief, and the choice is rarely just accept or decline. Understanding why, asking whether extra rounds could change it, and weighing the promotion path against other offers lets you respond with evidence rather than disappointment.

                ## Milestones
                1. The reason for the level asked for and written down.
                2. Whether an extra round or a re-review is possible confirmed.
                3. The typical time to promotion at that company and level researched.
                4. A response sent: accept, request review or decline, with reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written response to the down-levelled offer is sent, based on recorded reasons, review options and promotion research."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the recruiter what drove the level decision"
                - "Ask whether an extra round or re-review is possible"
                - "Find out the usual time to promotion at that level"
                - "Send your response with reasons in writing"
            - name: Running four or more loops in parallel
              description: |-
                ## Purpose
                Experienced candidates sometimes run four to six loops at once to compare offers, which multiplies scheduling, preparation and fatigue. A risk register of what could go wrong, clear rules for overlap and a weekly load check stop the extra loops weakening the ones you care about most.

                ## Milestones
                1. A risk register listing scheduling clashes, fatigue and offer deadline risks.
                2. A rule of no more than two onsites in any one week.
                3. First-choice loops protected with the best slots.
                4. A weekly check of load against your energy and job.

                ## Notes
                Start from the **Risk register** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A risk register exists for the parallel search and no week in the tracker shows more than two onsites."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Start a risk register for clashes, fatigue and offer deadlines"
                - "Set a rule of no more than two onsites in one week"
                - "Give first-choice loops the best interview slots"
                - "Check the week's load against your energy @recurring(weekly:thu)"
            - name: Exploding offers and deadline extensions
              description: |-
                ## Purpose
                Short offer deadlines, sometimes a week or less, can arrive while your first choice is still mid-loop. Knowing how to ask for an extension, how to tell other companies you have an offer and what you will do if the deadline holds stops a timing problem becoming a bad decision.

                ## Milestones
                1. A polite extension request saved, asking for a specific date.
                2. A short message saved for telling other companies you have an offer with a deadline.
                3. Each in-progress company asked whether they can speed up.
                4. Your choice decided in advance if no extension is given.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An extension request, an expedite message to other companies and a pre-decided fallback choice are written before the first offer arrives."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a polite extension request naming a specific date"
                - "Write a message asking other companies to speed up"
                - "Ask each in-progress recruiter how fast they could decide"
                - "Decide now what you will do if no extension is given"
            - name: Joining the interviewer pool after you start
              description: |-
                ## Purpose
                Once inside, joining the interviewer pool is one of the quickest ways to understand how your new company judges engineers and to show citizenship that counts at promotion. Completing interviewer training, shadowing and writing clear feedback also makes you a far sharper candidate the next time you are on the other side.

                ## Milestones
                1. The company's interviewer training completed.
                2. Two or three interviews shadowed and reverse shadowed.
                3. A feedback template for clear, evidence-based write-ups saved.
                4. A regular interview slot agreed with your manager.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Interviewer training is complete, shadowing is signed off and a regular interview slot is agreed with your manager."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your manager how to join the interviewer pool"
                - "Complete the company's interviewer training"
                - "Shadow and reverse shadow two or three interviews"
                - "Hold one interview a month once signed off @recurring(monthly:12)"
---

# Big Tech Interview Loop

This area is for engineers going through the full hiring loop at a large tech company, where the process matters as much as the preparation: who refers you, how the recruiter reads you, when each round lands, how the debrief and hiring committee decide, which team you match with and what level the offer comes in at. It runs from foundations (a target list, a pipeline tracker, a tuned résumé, referrals, the recruiter screen and a quiet interview setup), through the weekly pipeline and debrief machinery, the knowledge of levelling ladders, hiring committees and compensation structure, the decisions about sequencing, team choice and offers, the dated screens, onsite and offer calls, versions for new graduates, senior and staff engineers, managers, employed candidates, international candidates and people returning after a break, and specialist work such as parallel loops, exploding offers and becoming an interviewer yourself.

The rhythm is a weekly pipeline review and recruiter follow-up, a debrief written within a day of every round, a monthly full mock loop and a check of careers pages, and a quarterly catch-up with your referral network. The Job application, Resume, Meeting notes, Purchase decision and Risk register templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
