---
id: tech-certifications.behavioural-interviews-for-engineers
name: Behavioural Interviews for Engineers
description: "A bank of true engineering stories on conflict, failure, ownership, influence and impact, told in a tight structure, matched to each company's values and rehearsed in mocks until they hold up to follow-up questions."
category: personal
version: 1.0.0
tags: [tech-certifications, behavioural-interviews-for-engineers, engineer, star-method, story-bank, interview-prep, career]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - feedback-themes
    - job-application
    - metrics-log
    - purchase-decision
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Behavioural Interviews for Engineers
          description: "Preparing the stories engineers get asked for: conflict, failure, ownership, influence and impact, written in a structured format and matched to each company's values."
          projects:
            - name: Career inventory of projects, incidents and decisions
              description: |-
                ## Purpose
                Most engineers walk into a behavioural round with three stories and then improvise the rest, because they never wrote down what they have actually done. A raw inventory of every project, outage, migration, disagreement and decision from your last few roles gives you far more material than you think, and it is the only honest place to pick stories from.

                ## Milestones
                1. A list of at least thirty projects, incidents and decisions across your last three roles or years.
                2. Each item tagged with the role, rough dates, your part in it and who else was involved.
                3. Old pull requests, design documents, postmortems and performance reviews checked for items you had forgotten.
                4. The ten richest items starred as story candidates.

                ## Notes
                Write the list fast and messy first. Judging items while you list them is how good stories get left out.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written inventory of at least thirty career items exists, each with role, dates and your part, and ten are marked as story candidates."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every project you shipped or worked on in your current role in twenty minutes"
                - "Add the outages, migrations and disagreements you remember from each past role"
                - "Search old pull requests, design docs and postmortems for forgotten items"
                - "Star the ten items with the clearest stakes, actions and results"
            - name: Choosing a story structure such as STAR or CARL
              description: |-
                ## Purpose
                Interviewers score behavioural answers against a rubric, and an answer with no shape makes them dig for the action and the result while the clock runs. Picking one structure, such as Situation, Task, Action, Result or Context, Action, Result, Learning, and practising it on a single story gives every later answer the same spine.

                ## Milestones
                1. One structure chosen and its parts written on a card you can see while practising.
                2. A target split decided, with most of the time spent on your actions rather than the setting.
                3. One story written in the structure and timed at about two minutes aloud.
                4. A learning or reflection line added at the end of that story.

                ## Notes
                The common failure is a long situation and a one-line result. Keep the setting to two or three sentences and spend the time on what you did and why.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One story is written in the chosen structure and delivered aloud in under two and a half minutes with a clear result and learning."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a short guide to STAR and CARL and pick the one that suits you"
                - "Write the structure's parts and your target time split on a card"
                - "Draft your strongest starred story in that structure"
                - "Time yourself telling it aloud and cut the setting until it fits"
            - name: Core bank of twelve engineering stories
              description: |-
                ## Purpose
                Twelve well-built stories can answer around fifty common prompts, because most questions are a few themes asked different ways. Writing them in full, each with your actions, a measurable result and what you learned, means you choose an answer in the round instead of composing one.

                ## Milestones
                1. Twelve stories drafted in your chosen structure, drawn from at least two roles or contexts.
                2. The set includes conflict, failure, ownership, influence, ambiguity and a large measured impact.
                3. Each story has a one-line title you can recall under pressure.
                4. Every story told aloud at least once and trimmed to about two minutes.

                ## Notes
                Balance recent and older work. Interviewers trust stories from the last two or three years most, so keep at least eight there.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A document holds twelve titled stories in one structure, each with an action section, a result and a learning, all rehearsed aloud once."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick twelve starred items from your career inventory that cover different themes"
                - "Write two stories a session until all twelve are drafted"
                - "Give each story a short memorable title"
                - "Ask the agent to flag stories where the actions are vague or the result is missing"
                - "Tell each story aloud once and trim anything past two and a half minutes"
            - name: Story to competency coverage matrix
              description: |-
                ## Purpose
                Behavioural loops test a known list of competencies, and candidates often find in the room that all their stories prove the same two. A matrix with stories down one side and competencies across the top shows the gaps at a glance and tells you which story to reach for when a question lands.

                ## Milestones
                1. A list of ten to fifteen competencies built from target company values and common rubrics.
                2. Each of the twelve stories marked against the competencies it can genuinely evidence.
                3. Every competency covered by at least two stories, or a gap noted with a plan to fill it.
                4. A backup story chosen for each competency so no story is used twice in one loop.

                ## Notes
                Start from the **Skills matrix** template.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A matrix maps twelve stories against at least ten competencies with every competency covered twice or a written plan for the gap."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a coverage matrix from the skills matrix template"
                - "List the competencies that appear in your target companies' values and job posts"
                - "Mark which stories truly evidence each competency"
                - "Re-score the matrix after adding or retiring a story @recurring(monthly:3)"
            - name: Numbers and evidence behind every story
              description: |-
                ## Purpose
                Numbers are what make an engineering result believable: latency down from 900 to 200 milliseconds, on-call pages halved, a migration finished two weeks early. Collecting the real figures, and the source for each, before you leave a job or forget them, turns vague claims into answers an interviewer can write down.

                ## Milestones
                1. Each of the twelve stories carries at least one number for scale, effect or time.
                2. The source of every figure noted: a dashboard, a ticket, a postmortem or a review.
                3. Estimates labelled as estimates, with the reasoning you would give if asked.
                4. No confidential figures kept that your employer would not want shared.

                ## Notes
                Relative numbers (a 40 percent drop, three teams instead of one) are often safer to share than absolute revenue or user counts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every story in the bank has at least one sourced or clearly labelled estimated number for its result."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark each story whose result has no number yet"
                - "Find the dashboard, ticket or postmortem that holds the real figure"
                - "Rewrite absolute figures as percentages where the exact value is sensitive"
                - "Copy current figures from dashboards you still have access to @recurring(quarterly)"
            - name: Two-minute career walk-through answer
              description: |-
                ## Purpose
                Nearly every round opens with tell me about yourself, and an answer that recites the CV wastes the first impression. A two-minute walk-through that moves from where you started to what you do now, and lands on why this role is the next step, sets up the stories you want to be asked about.

                ## Milestones
                1. A written walk-through of about 250 to 300 words with a clear thread through your roles.
                2. Two or three hooks in it that point to strong stories in your bank.
                3. An ending that connects your direction to the role you are applying for.
                4. The answer delivered aloud without notes in under two minutes.

                ## Notes
                Keep a short version of about forty seconds for screens and a full version for the hiring manager.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A walk-through of about two minutes, with a forty-second short version, is written and delivered aloud from memory."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one sentence for each role you have held and what it taught you"
                - "Join the sentences into a thread that ends at the role you want"
                - "Add two hooks that invite questions about your best stories"
                - "Cut a forty-second version for recruiter and phone screens"
            - name: What behavioural rounds expect at your target level
              description: |-
                ## Purpose
                Expectations shift sharply with level: a mid-level engineer is asked about owning a feature, a senior about leading a project across teams, a staff engineer about setting direction for an organisation. Reading the public career ladders and levelling guides for your target companies tells you what scope your stories must show, so you are not levelled down for telling small ones.

                ## Milestones
                1. Two or three published engineering career ladders read and the behaviours for your target level noted.
                2. The scope expected at that level written down: team, several teams or organisation.
                3. Each story in the bank labelled with the scope it shows.
                4. At least four stories that clearly show the scope of the target level.

                ## Notes
                Many companies publish their ladders, and several open ladder frameworks exist. Use them as a guide to scope, not a script.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note records the behaviours expected at your target level and at least four stories are labelled as showing that scope."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find two published engineering career ladders and open the level you are targeting"
                - "Write down the scope words used at that level and the one below"
                - "Label each story with the scope it really shows"
                - "Choose which stories to expand so they show target level scope"
            - name: Why this company and why you are leaving answers
              description: |-
                ## Purpose
                Recruiters and hiring managers ask why you want this job and why you are leaving the last one in almost every loop, and a careless answer about pay or a bad manager can end the conversation. Writing honest, forward-looking answers, with a specific reason tied to each company, keeps these questions from being where you lose ground.

                ## Milestones
                1. A why-leaving answer that is true, brief and about what you are moving toward.
                2. A reusable frame for why-this-company with slots for product, team and engineering culture.
                3. A filled-in version for each company currently in your pipeline.
                4. Both answers rehearsed aloud until they take under a minute each.

                ## Notes
                Never criticise a former employer or colleague by name. If you were laid off, say so plainly and move on.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written why-leaving answer and a why-this-company version for each active application are each delivered aloud in under a minute."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the real reasons you are looking, then the forward-looking version"
                - "Draft a why-this-company frame covering product, team and engineering practice"
                - "Fill in the frame for each company in your pipeline"
                - "Say both answers aloud and cut any line that sounds like a complaint"
            - name: Recorded baseline of three behavioural answers
              description: |-
                ## Purpose
                Hearing yourself on a recording is uncomfortable and more useful than any guide, because filler words, long setups and missing results only show up on playback. Recording three answers before you start practising gives a baseline to measure every later rehearsal against.

                ## Milestones
                1. Three answers recorded on video: the walk-through, a conflict story and a failure story.
                2. Each recording scored for length, structure, clarity of your actions and a stated result.
                3. Filler words and habits listed with a rough count per answer.
                4. The three habits to fix first written at the top of your practice notes.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three dated recordings exist with a written score sheet and the top three habits to fix."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record yourself answering tell me about yourself on your phone"
                - "Record a conflict answer and a failure answer the same day"
                - "Score each recording for length, structure, actions and result"
                - "Write the three habits to fix first at the top of your practice notes"
            - name: Twice-weekly story rehearsal routine
              description: |-
                ## Purpose
                Stories you have written but not said aloud fall apart in the room, because speaking is a separate skill from writing. Two short sessions a week, each rehearsing two stories against a timer, keeps the whole bank fluent without turning preparation into a second job.

                ## Milestones
                1. Two fixed twenty-minute slots a week in your calendar for rehearsal.
                2. A rotation that brings every story round at least once a month.
                3. Each session noted with the stories practised and the time taken.
                4. All twelve stories delivered within time and without notes.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight consecutive weeks two rehearsal sessions a week are logged and every story has been practised at least twice."
                cadence: rolling
              tasks:
                - "Block two twenty-minute rehearsal slots in your calendar"
                - "Write a rotation so each story comes round once a month"
                - "Rehearse two stories aloud against a timer @recurring(weekly:tue,sat)"
                - "Note any story that ran long or lost its result"
            - name: Brag document kept during the job
              description: |-
                ## Purpose
                Memory throws away the details that make a story convincing within months: the exact numbers, who disagreed, the trade-off you chose. A brag document updated weekly while you are still in the job is the cheapest source of future interview stories and doubles as evidence for your own performance review.

                ## Milestones
                1. A single brag document with sections for shipped work, incidents, decisions, help to others and feedback received.
                2. Entries added most weeks, each with a date, a number where there is one and a link to the evidence.
                3. A monthly tidy that flags entries likely to become stories.
                4. At least one new story candidate a quarter moved into the story bank.

                ## Notes
                Keep it outside work systems you will lose access to, and leave out anything confidential.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The brag document has dated entries for at least ten of the last twelve weeks and feeds one new story candidate each quarter."
                cadence: rolling
              tasks:
                - "Create a brag document with sections for work, incidents, decisions and help to others"
                - "Add this week's wins, decisions and numbers to the brag document @recurring(weekly:fri)"
                - "Flag brag entries that could become interview stories @recurring(monthly:28)"
                - "Move the best flagged entry into your story bank"
            - name: Monthly mock behavioural interview with a peer
              description: |-
                ## Purpose
                Practising with someone who interrupts, probes and looks unconvinced is the closest thing to the real round. A monthly mock with a peer, ideally one who has interviewed candidates, shows which stories survive follow-up questions and which only work as monologues.

                ## Milestones
                1. Two or three peers willing to swap mock interviews on a rotation.
                2. A shared list of prompts and a simple scoring sheet both sides use.
                3. A mock held each month, recorded where both agree.
                4. Written feedback from every mock kept in one place.

                ## Notes
                Swap roles. Interviewing your peer teaches you what a weak answer sounds like from the other chair.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six mock interviews are held over six months, each with written feedback on structure, depth and result."
                cadence: rolling
              tasks:
                - "Message two engineers you trust about swapping behavioural mocks"
                - "Agree a shared prompt list and scoring sheet"
                - "Hold a forty-five minute mock behavioural interview with a peer @recurring(monthly:12)"
                - "Save the written feedback straight after each mock"
            - name: Quarterly story bank refresh
              description: |-
                ## Purpose
                Your best story from three years ago starts to sound dated once you have done bigger work, and interviewers notice when every example is old. A quarterly pass that retires weak stories, promotes new ones from the brag document and updates the numbers keeps the bank current between job searches.

                ## Milestones
                1. Every story reviewed for age, scope and strength once a quarter.
                2. At least one weak or dated story retired or replaced each cycle.
                3. Numbers and titles updated for stories that have grown.
                4. The coverage matrix updated to match the current bank.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated note for each quarter records the stories retired, added and updated, and the matrix matches the bank."
                cadence: cyclic
              tasks:
                - "Rank the stories in your bank from strongest to weakest"
                - "Review the bank and retire or replace the weakest story @recurring(quarterly)"
                - "Promote the best new brag document entry into a full story"
                - "Update the coverage matrix after the changes"
            - name: Feedback themes log from mocks and real rounds
              description: |-
                ## Purpose
                Patterns only appear across many interviews: three different people saying your results are vague, or that you say we when they need to hear I. Logging every piece of feedback from mocks, recruiters and rejections in one place shows which habit is costing you offers.

                ## Milestones
                1. One log holding feedback from every mock, recruiter debrief and rejection note.
                2. Each piece of feedback tagged with a theme such as structure, depth, scope or delivery.
                3. The top two themes named after every five entries.
                4. A specific practice change written for each top theme.

                ## Notes
                Start from the **Feedback themes** template. Recruiters will often share a line of feedback if you ask politely after a decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log holds tagged feedback from at least ten sessions and names the top two themes with a practice change for each."
                cadence: rolling
              tasks:
                - "Create a feedback log from the feedback themes template"
                - "Add the feedback from your last mock and any recruiter notes"
                - "Tag each entry with a theme such as structure, scope or delivery"
                - "Review the log and name the top two themes to fix @recurring(monthly:20)"
            - name: Same-day debrief after each interview round
              description: |-
                ## Purpose
                Details of a round fade within a day: the exact question, the follow-up you fumbled, the story you used. A short debrief written the same day records which stories you have already told at that company and what to fix before the next round.

                ## Milestones
                1. A debrief note format with question, story used, follow-ups, what landed and what did not.
                2. A note written within a day of every real round.
                3. Stories already used at each company listed so they are not repeated in later rounds.
                4. One fix chosen from each debrief and practised before the next round.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every real interview round in the current search has a debrief note written within a day, listing questions and stories used."
                cadence: rolling
              tasks:
                - "Write a debrief note format with question, story, follow-ups and what to fix"
                - "Write a debrief within a day of your next interview round"
                - "List the stories you have already used at each company"
                - "Practise the one fix from the debrief before the next round"
            - name: Company values file for each target employer
              description: |-
                ## Purpose
                Companies that publish values or leadership principles write their behavioural questions straight from them, and interviewers score against them. A short file per target company, mapping each value to the stories that prove it, turns generic preparation into answers that sound like they belong there.

                ## Milestones
                1. The published values, principles or engineering culture pages saved for each target company.
                2. Each value matched to one or two stories from your bank.
                3. Likely questions for each value written down from the wording of the value.
                4. Engineering blog posts or talks noted for a detail you can mention in your why-this-company answer.

                ## Notes
                Start from the **Job application** template and keep one per company.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each company in your active pipeline has a file mapping every published value to at least one story and three likely questions."
                cadence: rolling
              tasks:
                - "Find and save the values or principles page for your top target company"
                - "Match each value to one or two stories from your bank"
                - "Write three likely questions from the wording of each value"
                - "Check one target company's values and engineering blog for changes @recurring(monthly:5)"
            - name: Bank of sixty behavioural prompts for drilling
              description: |-
                ## Purpose
                Real questions rarely match the ones you practised word for word, so the skill to build is picking the right story fast. A bank of sixty prompts, drawn one at a time at random, trains you to choose a story and open it within ten seconds.

                ## Milestones
                1. Sixty prompts collected and grouped by theme, including awkward variants.
                2. Each prompt matched to a first-choice and backup story.
                3. Story selection for a random prompt taking under ten seconds.
                4. Prompts that leave you stuck marked and given a new story.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A bank of sixty grouped prompts exists and you can name a story for any random prompt within ten seconds."
                cadence: rolling
              tasks:
                - "Collect sixty behavioural prompts and group them by theme"
                - "Note a first-choice and backup story beside each prompt"
                - "Pick a random prompt and name your story within ten seconds @recurring(daily)"
                - "Mark prompts that left you stuck and plan a story for them"
            - name: Practice log of reps and scores by competency
              description: |-
                ## Purpose
                Counting practice keeps you honest about how much you have really done and where scores are moving. A simple log of rehearsals, mocks and self-scores by competency shows which story types are improving and which still score low after a month of work.

                ## Milestones
                1. A log with columns for date, type of practice, story, competency and score out of five.
                2. Every rehearsal and mock entered on the day.
                3. A monthly average score for each competency calculated.
                4. The lowest-scoring competency chosen as next month's focus.

                ## Notes
                Start from the **Metrics log** template. Score against the same short rubric each time or the numbers mean nothing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log holds at least three months of dated practice entries with a monthly average score for each competency."
                cadence: rolling
              tasks:
                - "Create a practice log from the metrics log template"
                - "Write a five-point rubric you will score every answer against"
                - "Average the month's scores by competency and pick a focus @recurring(monthly:26)"
            - name: Conflict and disagreement stories done well
              description: |-
                ## Purpose
                Conflict questions test whether you can disagree with a colleague, a product manager or a senior engineer and still ship, without making anyone the villain. Building two stories that show you understood the other side, used data or a prototype to settle it and kept the relationship intact answers most versions of the question.

                ## Milestones
                1. Two conflict stories chosen: one with a peer and one with someone more senior or in another function.
                2. Each story states the other person's reasonable position in their terms.
                3. The actions show how the disagreement was settled, such as a spike, a benchmark or a written trade-off.
                4. Each ends with the outcome and the state of the working relationship afterwards.

                ## Notes
                Avoid stories where you were simply right and they were wrong. Interviewers listen for empathy and for a time you changed your mind.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two conflict stories are written and rehearsed, each stating the other side's position fairly and ending with outcome and relationship."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every technical disagreement you remember from the last three years"
                - "Pick one with a peer and one with someone senior or in another function"
                - "Write the other person's position as they would have put it"
                - "Rehearse both stories and check neither paints anyone as the villain"
            - name: Failure and mistake stories without blame
              description: |-
                ## Purpose
                Every behavioural loop asks about a failure, and the weak answers are a disguised strength or a story where someone else broke production. A real mistake you made, told with what you did in the moment, what you changed afterwards and what it taught you, shows the self-awareness interviewers are scoring.

                ## Milestones
                1. Two genuine failures chosen where you were clearly responsible for part of the outcome.
                2. Each story names the mistake plainly in one sentence, without excuses.
                3. The recovery and the lasting change, such as a new check or runbook, are described.
                4. A learning line that shows how you work differently now.

                ## Notes
                Choose failures with real but recoverable stakes. A missed deadline or a bad rollout is fine; a story about ethics or safety is risky.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two failure stories are rehearsed, each naming your own mistake in one sentence and ending with a concrete change you made."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down three mistakes at work you still think about"
                - "Choose two where your part is clear and the fix is concrete"
                - "Write the mistake as one plain sentence with no excuses"
                - "Add the lasting change you made and rehearse both stories"
            - name: Ownership stories beyond your assigned scope
              description: |-
                ## Purpose
                Ownership questions ask for a time you took on something nobody asked you to fix: a flaky test suite, a neglected alert, a gap between two teams. Stories that show you noticed the problem, decided it was yours and saw it through to a result signal the trait hiring managers say they most want.

                ## Milestones
                1. Two stories where you took responsibility for something outside your assigned work.
                2. The moment you decided to act, and why, stated clearly.
                3. The cost to you, such as time traded off or a conversation with your manager, included.
                4. A result that lasted after you stepped away.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two ownership stories are rehearsed, each showing a decision to act outside your scope and a lasting result."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List problems you fixed that were not on anyone's plan"
                - "Pick two with a lasting result you can measure"
                - "Write the moment you decided the problem was yours"
                - "Rehearse both and check the trade-off you made is clear"
            - name: Influence without authority stories
              description: |-
                ## Purpose
                Engineers rarely have the power to order another team to change, so the question is how you got agreement anyway: a design review, a written proposal, a prototype that made the case. Two influence stories, one inside your team and one across teams, show the skill that separates senior engineers from strong individual coders.

                ## Milestones
                1. One influence story inside your team and one across teams or functions.
                2. The starting resistance and the reasons behind it described fairly.
                3. The specific tools of persuasion named: data, a prototype, a written proposal, a pilot.
                4. A measurable outcome and who adopted the change.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two influence stories are rehearsed, each naming the resistance, the method of persuasion and the adopted outcome."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find a design doc or proposal you wrote that another team adopted"
                - "Write down who resisted it and what their reasons were"
                - "Name the evidence or prototype that changed their minds"
                - "Rehearse one in-team and one cross-team influence story"
            - name: Describing impact in business terms
              description: |-
                ## Purpose
                Impact is where engineers most often undersell themselves, saying they refactored a service when the result was fewer incidents and a faster release cycle. Learning to translate technical work into effects on users, revenue, cost, risk or team speed makes your results land with hiring managers who are not specialists in your stack.

                ## Milestones
                1. Each story's result rewritten as an effect on users, cost, risk or delivery speed.
                2. A short list of impact phrases you can use without sounding like a sales pitch.
                3. The technical detail kept ready for follow-up rather than front-loaded.
                4. Two stories tested on a non-engineer who can repeat back what changed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every story's result is restated in business terms and two are tested on a non-engineer who repeats the impact correctly."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Take one story result and ask who outside engineering noticed the change"
                - "Rewrite each result as an effect on users, cost, risk or speed"
                - "Tell two stories to a friend outside tech and ask what changed"
                - "Move deep technical detail into a follow-up section of each story"
            - name: Holding up under follow-up probes
              description: |-
                ## Purpose
                The real test of a story is the third follow-up question: why did you choose that, what would you do differently, what did your manager think. Practising with someone who keeps asking why exposes stories that are borrowed, inflated or half-remembered, and gives you time to fill in the detail.

                ## Milestones
                1. A list of standard probes such as why then, what else did you consider, what did it cost and what would you change.
                2. Each core story probed five levels deep at least once.
                3. Missing details found by probing written into the story notes.
                4. A short honest answer ready for when you do not remember a detail.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every core story has been probed five questions deep by a partner and the gaps found are written into its notes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a list of ten follow-up probes interviewers commonly ask"
                - "Ask a partner to probe one story five questions deep"
                - "Add the details you were missing to that story's notes"
                - "Have a partner probe one story with five follow-up questions @recurring(monthly:22)"
            - name: Ambiguity and prioritisation stories
              description: |-
                ## Purpose
                Ambiguity questions ask what you did when requirements were unclear, priorities clashed or the plan changed halfway through. Stories that show how you framed the problem, made a decision with partial information and said no to something make you sound like someone who can be trusted with an unscoped project.

                ## Milestones
                1. One story about turning a vague request into a clear plan.
                2. One story about choosing between competing priorities and saying no to something.
                3. The information you lacked and how you decided anyway stated in each.
                4. How you communicated the decision and handled the people who lost out.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two rehearsed stories show a vague request made concrete and a priority clash resolved with a clear no."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Recall a project that started with a one-line request"
                - "Write how you turned it into scope, milestones and a first deliverable"
                - "Pick a time you said no to a request and write how you explained it"
                - "Rehearse both stories with the decision point made obvious"
            - name: Concise delivery in under two minutes
              description: |-
                ## Purpose
                Long answers are the most common delivery fault in behavioural rounds, and they cost you questions, because a forty-five minute slot only fits so many. Drilling a ninety-second version of each story, with a headline first and the result stated clearly, leaves room for the follow-ups where interviewers actually decide.

                ## Milestones
                1. A one-sentence headline written for every story.
                2. A ninety-second version of each story alongside the full version.
                3. Signpost phrases ready, such as there were three parts to this.
                4. Recorded answers consistently under two minutes.

                ## Notes
                Ending with an offer to go deeper on any part invites the follow-up you want instead of more monologue.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Five consecutive recorded answers come in under two minutes, each opening with a headline and ending with a result."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-sentence headline for each story in your bank"
                - "Cut your longest story to ninety seconds and record it"
                - "Practise a ninety-second answer to a random prompt @recurring(weekly:wed)"
                - "Compare this week's recording with your baseline for length"
            - name: Mentoring and growing other engineers stories
              description: |-
                ## Purpose
                Senior candidates are asked how they made others better: onboarding a new hire, unblocking a struggling teammate, growing someone into a lead. Stories about mentoring, code review culture and knowledge sharing show the multiplier effect that senior and lead roles are hired for.

                ## Milestones
                1. One story about mentoring a specific person over weeks or months, with their growth described.
                2. One story about raising a team practice, such as reviews, documentation or on-call.
                3. The person's own words or progress used as evidence where possible.
                4. Both stories rehearsed with the other person's privacy protected.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two rehearsed stories show a named outcome for a person you mentored and a team practice you improved."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List people you onboarded, mentored or unblocked in the last three years"
                - "Pick the one whose growth you can describe most concretely"
                - "Write a story about a team practice you raised, such as code review"
                - "Rehearse both stories without naming the people involved"
            - name: Fixing the I versus we problem in your stories
              description: |-
                ## Purpose
                Saying we throughout an answer is natural for engineers who work in teams, but interviewers are hiring you and cannot score what the team did. Rewriting each story so your own decisions and actions are explicit, while still crediting others honestly, fixes the most common reason good engineers are rated below their level.

                ## Milestones
                1. Every story checked for the ratio of I to we in the action section.
                2. Each action section rewritten so your own decisions are explicit.
                3. Others credited for their parts in one clear sentence.
                4. A mock partner confirms they can say what you personally did in each story.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All twelve stories have action sections centred on your own decisions and a mock partner can state your part in each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Highlight every we in the action sections of your stories"
                - "Replace each with what you personally decided or did"
                - "Add one sentence crediting the others involved"
                - "Ask a mock partner to state your personal part after each story"
            - name: Rewriting a rambling story into a sharp one
              description: |-
                ## Purpose
                A story that is true and important can still score badly if it wanders through background, side quests and three results. Taking your weakest important story and rebuilding it from scratch teaches you the editing moves, cutting the setting, choosing one thread and ending on one result, that you then apply to the rest.

                ## Milestones
                1. The weakest important story chosen from the baseline recording or feedback.
                2. Its current version transcribed and timed.
                3. A rebuilt version with one thread, one tension and one result.
                4. The new version recorded and scored higher on the same rubric.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rebuilt version of your weakest story scores higher than the original on the same rubric and runs under two minutes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the story that scored lowest in your recordings or mocks"
                - "Transcribe what you currently say, word for word"
                - "Ask the agent to suggest which sentences can be cut without losing the point"
                - "Rebuild the story around one thread and record it again"
            - name: Telling stories with confidential details safely
              description: |-
                ## Purpose
                Some of the best engineering stories involve security incidents, unreleased products or client systems covered by a confidentiality agreement. Learning to anonymise the client, the product and the figures while keeping the problem, your decisions and the result lets you use those stories without breaching trust or alarming the interviewer.

                ## Milestones
                1. Each story checked for names, figures or details covered by an agreement or policy.
                2. A generic description written for every sensitive client, product or system.
                3. Absolute figures replaced with ranges or percentages where needed.
                4. A sentence ready that explains you have kept some details general for confidentiality.

                ## Notes
                If you are unsure what an agreement allows, check it or ask the person who manages it. Interviewers respect a candidate who keeps a former employer's secrets.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every story has been checked for confidential details and sensitive ones carry a generic version safe to tell."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark every story that mentions a client, unreleased product or security incident"
                - "Write a generic description for each sensitive name or system"
                - "Swap exact figures for ranges or percentages where they are sensitive"
                - "Practise saying you have kept details general for confidentiality"
            - name: Deciding on a paid coach or mock interview platform
              description: |-
                ## Purpose
                Paid behavioural coaching and mock interview services range from a single session with an experienced interviewer to multi-week packages, and they suit some candidates far more than others. Deciding whether to pay, how much, and for what specific gap, keeps you from buying sessions that repeat what a free peer mock already gives you.

                ## Milestones
                1. The specific gap you want help with named, such as senior scope or delivery.
                2. Three options compared on price, interviewer background, format and reviews.
                3. A cap on spend set before booking anything.
                4. A decision recorded: book a named option, or keep to peer mocks.

                ## Notes
                Start from the **Purchase decision** template. A coach who has sat on hiring committees at your target level is worth more than a generic one.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the gap, compares three options with prices and records whether to buy one within a set budget."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the one gap a coach would need to fix for you"
                - "Compare three paid options on price, interviewer background and format"
                - "Set the most you are willing to spend"
                - "Record whether you will book a session or stay with peer mocks"
            - name: Answers about criticism and difficult feedback
              description: |-
                ## Purpose
                Critical feedback questions ask for a time you were told something hard and what you did about it, and many candidates freeze or choose something trivial. A real piece of feedback, how it felt, what you changed and how you checked the change worked, shows coachability, which managers weigh heavily for every level.

                ## Milestones
                1. A real piece of critical feedback chosen from a review, a manager or a peer.
                2. Your first reaction described honestly, including any defensiveness.
                3. The concrete change you made and how you checked it stuck.
                4. A second, smaller example ready in case they ask for another.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rehearsed feedback story names real criticism, the change made and how it was checked, with a second example ready."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Reread your last two performance reviews for critical points"
                - "Pick one where you made a change you can describe"
                - "Write how you checked the change actually stuck"
                - "Prepare a smaller second example from a code review or retro"
            - name: Questions to ask each interviewer by round
              description: |-
                ## Purpose
                Good questions at the end of a round show judgement and give you the information to choose between offers, while a hurried do you like it here wastes the slot. A short list for each type of interviewer, peer, manager, skip-level and cross-functional partner, means you always have something specific and useful to ask.

                ## Milestones
                1. Three or four questions written for each interviewer type.
                2. Questions that test your real concerns, such as on-call load, how decisions are made or promotion criteria.
                3. One question per company drawn from its blog, product or values file.
                4. Answers recorded after each round and used in the offer decision.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A question list covers at least four interviewer types and each round's answers are recorded in the debrief note."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your three biggest concerns about any new engineering job"
                - "Turn each concern into a question for a peer and for a manager"
                - "Add questions for a skip-level and a product or design partner"
                - "Record each interviewer's answers in that round's debrief"
            - name: Explaining a gap, layoff or short tenure
              description: |-
                ## Purpose
                Gaps and short stays raise a question in every interviewer's mind, and an answer that is defensive or long makes it bigger. A short, true explanation that moves quickly to what you did and what you are ready for now, practised until it is calm, turns a weak point into a few seconds of the conversation.

                ## Milestones
                1. Each gap, layoff or short tenure in your history listed with its real reason.
                2. A two or three sentence explanation written for each.
                3. Anything useful done during a gap, such as study, caring or open source, noted briefly.
                4. Each explanation delivered aloud calmly and without over-explaining.

                ## Notes
                You do not have to share health or family details. Saying you took time out for personal reasons and are fully ready now is enough.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each gap or short tenure in your history has a two or three sentence explanation rehearsed aloud."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every gap or tenure under a year on your CV with the real reason"
                - "Write two or three plain sentences for each one"
                - "Add what you did during each gap in one line"
                - "Say each explanation aloud until it sounds calm and brief"
            - name: Preparing a hiring manager behavioural round
              description: |-
                ## Purpose
                Hiring managers run the round that decides most offers, probing how you work with a team like theirs and whether they want you on it. Preparing for a specific round, with the team's context, the role's real problems and the stories that fit them, makes the conversation about their team rather than your general record.

                ## Milestones
                1. The team, its product and its likely engineering challenges noted from the job post and recruiter.
                2. Four to six stories chosen that fit those challenges, with no repeats from earlier rounds.
                3. The why-this-company and why-this-team answers tailored to this manager.
                4. Questions for the manager ready on team practices, priorities and growth.

                ## Notes
                Ask the recruiter what the hiring manager round focuses on. Many will tell you the competencies being assessed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the round a one-page plan lists the team's challenges, six matched stories and tailored questions, and a debrief follows within a day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the recruiter what the hiring manager round assesses"
                - "Note the team's product and likely problems from the job post"
                - "Pick six stories that fit those problems and were not used earlier"
                - "Rehearse the six stories the day before the round"
            - name: Values-driven loop with every round scored on principles
              description: |-
                ## Purpose
                Some companies, such as those built around a published set of leadership principles, score nearly every round on behavioural evidence, often two stories per principle, even in technical rounds. Preparing for that loop means a deeper bank than usual, mapped principle by principle, so you do not run out of fresh stories by the fourth interviewer.

                ## Milestones
                1. Every published principle listed with two stories mapped to it.
                2. At least sixteen distinct stories ready so none repeats across the loop.
                3. Stories assigned to rounds where the recruiter shared which principles each covers.
                4. Every story probed for the depth these loops expect, including data and trade-offs.

                ## Notes
                Interviewers in these loops often compare notes afterwards, so telling the same story twice costs more than in a typical loop.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the loop at least sixteen distinct stories are mapped two per principle with no story assigned to two rounds."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Copy the company's published principles into its values file"
                - "Map two stories to each principle and note the gaps"
                - "Write new stories until no story is needed twice"
                - "Assign stories to rounds using what the recruiter shared"
            - name: Cross-functional and bar-raiser round preparation
              description: |-
                ## Purpose
                One round in many loops is run by someone outside the hiring team, a product manager, a designer or a specially trained bar-raiser, whose job is to judge you against the company's whole engineering bar. They probe harder, care less about your stack and more about judgement, so your stories need to make sense to a non-specialist and survive pointed follow-ups.

                ## Milestones
                1. The likely interviewer type for this round confirmed with the recruiter.
                2. Three stories chosen that show judgement with non-engineering partners.
                3. Each story told in plain terms with jargon removed.
                4. A mock with a non-engineer or a senior interviewer completed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three jargon-free stories about working with non-engineers are rehearsed and tested in a mock before the round."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the recruiter who runs the cross-functional or bar-raiser round"
                - "Pick three stories that show judgement with product or design partners"
                - "Remove the jargon from each and tell them to a non-engineer"
                - "Book a mock with the most senior interviewer you know"
            - name: Night before and morning of a behavioural round
              description: |-
                ## Purpose
                The last twelve hours before a round decide how much of your preparation you can actually use. A short, fixed routine, a review of the stories for this company, the logistics checked, a good night's sleep and a warm-up answer in the morning, replaces late-night cramming that leaves you tired and scattered.

                ## Milestones
                1. A one-page cheat sheet with story titles, the company's values and your questions.
                2. Time, link or address, interviewer names and the time zone checked the evening before.
                3. A warm-up answer spoken aloud an hour before the round.
                4. Water, notes and a quiet space ready fifteen minutes early.

                ## Notes
                Stop preparing new material the night before. Reviewing story titles is enough.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The round is attended on time with a one-page cheat sheet prepared and a warm-up answer spoken an hour before."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-page cheat sheet of story titles, values and your questions"
                - "Check the time, link, interviewer names and time zone the evening before"
                - "Speak your walk-through answer aloud an hour before the round"
                - "Set up water, notes and a quiet space fifteen minutes early"
            - name: Video setup for remote behavioural rounds
              description: |-
                ## Purpose
                Remote rounds add failure points that have nothing to do with your answers: a dropped connection, a dim face, an echo that makes the interviewer strain. Testing camera, sound, lighting and a backup connection once, and keeping the setup ready, removes those distractions from every remote round that follows.

                ## Milestones
                1. Camera at eye level, face lit from the front and a plain background.
                2. Headphones or a microphone tested on a recorded call for echo and clarity.
                3. The main video platforms installed and tested with a friend.
                4. A backup plan ready, such as a phone hotspot and the recruiter's phone number.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recorded test call shows clear sound, a well-lit face at eye level, and a written backup plan for a dropped connection."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record a two-minute test call and watch it back"
                - "Raise the camera to eye level and add light in front of you"
                - "Test the main video platforms with a friend"
                - "Write a backup plan with a hotspot and the recruiter's number"
            - name: Reference check preparation with former managers
              description: |-
                ## Purpose
                References are often the last behavioural check, and a referee who barely remembers your work or describes a different person from the one in your stories can stall an offer. Choosing referees early, asking their permission and reminding them of the projects you talked about keeps their account consistent with yours.

                ## Milestones
                1. Three referees chosen, including at least one former manager.
                2. Each referee's permission confirmed and their current contact details checked.
                3. A short note sent to each with the role and the projects you discussed in interviews.
                4. Each referee thanked and told the outcome.

                ## Notes
                Never list someone as a referee without asking first, and keep a current manager off the list unless you are ready for them to know.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three referees have agreed in writing, received a short brief on the role and your stories, and been thanked afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List five people who could speak to your work in the last few years"
                - "Ask your top three whether they are willing to be referees"
                - "Write each referee a short brief on the role and the projects you discussed"
                - "Thank each referee and tell them the outcome"
            - name: New graduate stories from projects and internships
              description: |-
                ## Purpose
                New graduates are asked the same behavioural questions as everyone else, but with university group projects, internships, hackathons, societies and part-time jobs as the material. Building a bank from those, with real stakes and your own decisions made clear, answers the questions without falling back on how hard you studied.

                ## Milestones
                1. Story candidates listed from coursework, internships, hackathons, societies and part-time work.
                2. Eight stories written covering teamwork, conflict, failure, learning fast and a result.
                3. Each story showing a decision you made, not just effort.
                4. Stories rehearsed with a careers adviser, tutor or alumni mentor.

                ## Notes
                A conflict in a group project or a mistake in a part-time job is fine material. Interviewers do not expect production outages from a graduate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Eight rehearsed stories drawn from study, internships and other work cover teamwork, conflict, failure and learning."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every group project, internship, hackathon and job since starting university"
                - "Write eight stories that each show a decision you made"
                - "Book a practice session with your careers service or an alumni mentor"
                - "Rehearse the eight stories until each fits in two minutes"
            - name: Career changer stories translated for engineering
              description: |-
                ## Purpose
                Career changers from teaching, finance, the military, science or support roles often have stronger stories about pressure, people and responsibility than many lifelong engineers. Translating them so the interviewer sees the engineering-relevant skill, and pairing each with an example from your new technical work, turns the change into an advantage rather than a question.

                ## Milestones
                1. Story candidates listed from your previous career with the skill each shows.
                2. Each previous-career story stripped of jargon from that field.
                3. At least four stories from your new technical work, such as projects, bootcamp work or a first job.
                4. A clear one-minute answer for why you moved into engineering.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The bank holds stories from both careers, with at least four technical ones and a rehearsed one-minute answer on why you changed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the hardest situations you handled in your previous career"
                - "Rewrite each without the jargon of that field"
                - "Add four stories from your technical projects or first engineering role"
                - "Write and rehearse a one-minute answer on why you moved into engineering"
            - name: Stories for moving into engineering management
              description: |-
                ## Purpose
                Management interviews add a whole set of people questions: hiring, underperformance, a difficult conversation, delivering through others and handling a team conflict. Engineers moving from a lead or senior role need stories where they acted as a manager, even informally, or the panel will judge them on individual work alone.

                ## Milestones
                1. Story candidates listed from leading projects, mentoring, interviewing and covering for a manager.
                2. Stories written for hiring, underperformance, a hard conversation and delivering through others.
                3. Each story showing how you balanced people and delivery.
                4. A clear answer on why you want to manage, with what you will miss about hands-on work.

                ## Notes
                Honesty about limited formal experience lands better than stretching a story. Say what you did and what you would do with full authority.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four people-management stories are rehearsed alongside a one-minute answer on why you want to manage."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List times you hired, coached, gave hard feedback or led delivery through others"
                - "Write stories for hiring, underperformance, a hard conversation and delegation"
                - "Write down one people decision you made this month while it is fresh @recurring(monthly:18)"
                - "Rehearse why you want to manage with a manager you trust"
            - name: Interviewing in a second language or a new culture
              description: |-
                ## Purpose
                Interview norms differ: some workplaces reward modesty and team credit, while many UK, US and Canadian interviewers expect you to state your own achievements plainly. Candidates interviewing in a second language, or moving from the Caribbean, Africa, Asia or Europe to another market, benefit from practising directness and pace with someone from the target market.

                ## Milestones
                1. The main differences between your home norms and the target market's noted, such as self-promotion and directness.
                2. Key phrases for stating your own contribution practised until they feel natural.
                3. Stories checked for idioms or local references that may not travel.
                4. Weekly practice with a partner from or familiar with the target market.

                ## Notes
                Ask your partner to stop you when they lose the thread. Pace and clarity matter more than accent.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly practice sessions with a target-market partner are logged and every story states your own contribution directly."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down how credit and self-promotion work where you have worked so far"
                - "Find a practice partner from or familiar with your target market"
                - "Practise two stories with your target-market partner @recurring(weekly:thu)"
                - "Replace idioms and local references that may not travel"
            - name: Returning to engineering after a career break
              description: |-
                ## Purpose
                Time out for parenting, caring, illness or study leaves recent stories thin, and returners often feel they have to apologise for the gap. A plan that pairs your strongest pre-break stories with recent evidence, a course, a return-to-work programme, open source or a side project, shows you are current and ready.

                ## Milestones
                1. The strongest stories from before the break refreshed with numbers and detail.
                2. At least two recent stories from work done during or after the break.
                3. A calm two-sentence explanation of the break ready.
                4. Returnship or return-to-work programmes checked as a route in.

                ## Notes
                Skills from caring or parenting, such as prioritisation and calm under pressure, are real. Use them briefly, then show the recent technical work.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The bank holds refreshed pre-break stories, two recent technical stories and a rehearsed two-sentence explanation of the break."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick your four strongest stories from before the break"
                - "Start a small recent project or course you can tell a story about"
                - "Write a two-sentence explanation of your break"
                - "Search for returnship programmes for engineers in your region"
            - name: Preparing while employed full time
              description: |-
                ## Purpose
                Interviewing while employed means preparing in evenings and lunch breaks, taking calls without your current employer knowing, and not letting your day job slip. A plan that fits preparation into small slots, protects your privacy and uses leave wisely keeps both the search and the job intact.

                ## Milestones
                1. Three short weekly preparation slots outside work hours chosen.
                2. Interview calls scheduled using personal devices and accounts only.
                3. A rule set for how many rounds you will take in a week.
                4. Leave days set aside for full onsite or virtual loops.

                ## Notes
                Never prepare or take calls on a work laptop or network. Many employers monitor both.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan names weekly preparation slots, a weekly round limit and leave days reserved for loops."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pick three short weekly slots for preparation outside work hours"
                - "Move all interview contact to a personal email and phone"
                - "Decide the most rounds you will take in one week"
                - "Reserve leave days for any full interview loops"
            - name: Interviewing with anxiety or neurodivergence
              description: |-
                ## Purpose
                Anxiety, ADHD, autism and other differences can make open-ended behavioural questions harder than technical ones, especially when the questions are vague and the time is short. Knowing which adjustments to ask for, such as questions in writing, extra time or a break, and building a calming routine, lets interviewers see your real ability.

                ## Milestones
                1. The parts of behavioural rounds you find hardest written down.
                2. Adjustments that would help listed, such as written questions, a short break or extra thinking time.
                3. A decision made, for each company, on whether to request adjustments through the recruiter.
                4. A short settling routine practised before mocks.

                ## Notes
                Many employers have a process for interview adjustments and recruiters handle requests confidentially. Disclosure is always your choice.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list of helpful adjustments exists and a decision on requesting them is recorded for each active application."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down which parts of behavioural rounds feel hardest"
                - "List the adjustments that would help you most"
                - "Decide for each company whether to ask the recruiter for adjustments"
                - "Practise a two-minute settling routine before your next mock"
            - name: Staff and principal level scope stories
              description: |-
                ## Purpose
                Staff and principal interviews ask for stories at organisation scale: a technical strategy adopted across teams, a multi-quarter migration, an architecture decision that shaped the roadmap. Candidates at this level fail more often on scope than skill, so building stories that show direction-setting, sponsorship and long-term trade-offs is the core preparation.

                ## Milestones
                1. Four stories showing work across several teams or the whole organisation.
                2. Each story naming the strategy, the people you had to align and the time horizon.
                3. Evidence of sponsorship or growing other leaders included.
                4. A story where you chose not to do something at scale and why.

                ## Notes
                Staff interviewers listen for why the problem mattered to the business before how you solved it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four organisation-scale stories are rehearsed, each naming the strategy, the people aligned and the time horizon."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List decisions you drove that changed how several teams worked"
                - "Write four stories naming the strategy, people aligned and time horizon"
                - "Add a story about a large initiative you chose to stop or not start"
                - "Write a note on one cross-team decision you influenced this month @recurring(monthly:15)"
            - name: Becoming a trained behavioural interviewer
              description: |-
                ## Purpose
                Sitting on the other side of the table is the fastest way to understand what behavioural rounds really score, and most companies need more trained interviewers. Joining your employer's interviewer training, shadowing rounds and calibrating with others makes you a fairer interviewer and a much sharper candidate.

                ## Milestones
                1. Interviewer training at your employer completed or requested.
                2. Two rounds shadowed and two reverse-shadowed with written feedback.
                3. A personal scoring rubric written for the competencies you assess.
                4. Regular calibration with other interviewers on written evidence, not impressions.

                ## Notes
                Write feedback on evidence the candidate gave, not on how much you liked them. It is also the habit that reduces bias.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Interviewer training is complete, four shadow rounds are done and written feedback for at least five candidates follows the rubric."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your manager or recruiting team about interviewer training"
                - "Shadow two behavioural rounds and write practice feedback"
                - "Write a scoring rubric for the competencies you will assess"
                - "Join an interviewer calibration session or compare notes with a peer @recurring(monthly:8)"
            - name: Crisis and incident leadership stories
              description: |-
                ## Purpose
                Incidents produce some of the strongest behavioural stories an engineer has: a major outage you led as incident commander, a security event, a data loss scare. Told well, they show calm judgement, clear communication and follow-through in the postmortem, and they answer questions on pressure, leadership and learning at once.

                ## Milestones
                1. One or two incidents chosen where you led or coordinated the response.
                2. The timeline, decisions under pressure and communication to stakeholders laid out.
                3. The blameless postmortem and the changes that followed included.
                4. Sensitive details removed in line with your confidentiality check.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One or two rehearsed incident stories cover decisions under pressure, stakeholder communication and postmortem changes, with sensitive details removed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Reread postmortems for incidents you led or helped resolve"
                - "Pick the one where your decisions under pressure were clearest"
                - "Write the timeline, decisions, communication and follow-up changes"
                - "Rehearse it and check it against your confidentiality rules"
---

# Behavioural Interviews for Engineers

This area is for engineers who can solve the coding round but lose offers in the conversation about how they work: the conflict question, the failure question, the time they led without authority. It starts with foundations (a raw inventory of your career, a story format, a bank of twelve stories, a coverage matrix, the numbers behind them, your opening walk-through and what your target level expects), then the rehearsal, mock and feedback machinery, the skills behind each story type, fixes and decisions such as the I versus we problem and confidential details, the dated rounds themselves, plans for new graduates, career changers, future managers, second-language candidates, returners and anyone interviewing with anxiety, and specialist work at staff level and on the other side of the table.

What repeats is two short rehearsals a week, a weekly ninety-second drill and a Friday note of wins in your brag document, a monthly mock with a peer, a probing session and a feedback themes review, and a quarterly refresh of the story bank and its numbers. The Skills matrix, Feedback themes, Job application, Metrics log and Purchase decision templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
