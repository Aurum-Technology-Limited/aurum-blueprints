---
id: data-analytics.organisation-data-literacy
name: Organisation Data Literacy
description: "A baseline of how well people read and question data, a competency framework by role, champions and clinics, short lessons on charts, averages and causation, and an honest measure of whether decisions actually changed."
category: business
version: 1.0.0
tags: [data-analytics, organisation-data-literacy, enterprise, manager, educator, data-literacy, data-culture, training-programme]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - course
    - onboarding-plan
    - feedback-themes
    - skills-matrix
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Organisation Data Literacy
          description: "Raising how well everyone in an organisation reads, questions and uses data through training, champions and shared definitions."
          projects:
            - name: Organisation-wide data literacy baseline assessment
              description: |-
                ## Purpose
                Most literacy programmes start with a course and only later wonder whether anyone needed it. A short scenario-based assessment, sent to a sample of at least 200 people across functions and grades, shows where the real gaps are: reading a chart, telling a percentage from a percentage point, or knowing which report to trust. The baseline is also the only fair way to show improvement a year from now.

                ## Milestones
                1. A fifteen-question assessment built on realistic workplace scenarios rather than self-ratings.
                2. Responses from at least 200 people, or a third of staff in a smaller organisation, spread across functions and grades.
                3. Results broken down by function, grade and question, with the three weakest skills named.
                4. A one-page baseline summary shared with the sponsor and kept for the annual comparison.

                ## Notes
                Keep individual scores confidential and report only groups of ten or more. People answer honestly when they know their manager will not see their mark.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline report covering at least 200 respondents, with scores by function and the three weakest skills named, signed off by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write down the five skills you most suspect are missing, before any survey"
                - "Draft fifteen scenario questions using charts and tables from real internal reports"
                - "Pilot the questions with six colleagues and cut any that confuse"
                - "Send the assessment with a note promising group-level reporting only"
                - "Summarise results by function and question on one page"
            - name: Executive sponsor and protected learning time agreement
              description: |-
                ## Purpose
                Literacy work stalls when people are told to learn but never given the hours, and when no senior leader asks about it. Securing a named executive sponsor, an agreed allowance such as two hours a month per person, and a small budget turns the programme from a side project into something managers are expected to support.

                ## Milestones
                1. One executive named as sponsor, with their role in the programme written in three lines.
                2. A protected learning allowance agreed and announced, stated in hours per person per month.
                3. A first-year budget agreed for content, facilitators and events.
                4. Quarterly sponsor check-ins in both calendars.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named sponsor, a published learning-time allowance in hours per month and an approved first-year budget are recorded in the programme charter."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List three executives whose teams lose most time arguing about numbers"
                - "Prepare a one-page ask covering sponsor role, learning hours and budget"
                - "Book a thirty-minute meeting with your preferred sponsor"
                - "Hold a sponsor check-in on progress, blockers and next quarter @recurring(quarterly)"
            - name: Data literacy programme charter and success measures
              description: |-
                ## Purpose
                Without a written scope the programme drifts into teaching tools, writing dashboards or fixing data quality, all useful and none of them literacy. A two-page charter states who the programme serves, what it will and will not do, and the three measures that will show it worked, so the inevitable requests can be routed to the right team.

                ## Milestones
                1. A charter stating audience, scope, exclusions and the teams that own adjacent work.
                2. Three success measures chosen, each with a baseline and a twelve-month target.
                3. Named owners for content, champions and measurement.
                4. The charter signed off by the sponsor and published where staff can find it.

                ## Notes
                Good measures mix capability (assessment scores), behaviour (questions asked in decision meetings) and demand (fewer basic requests to the data team). Course completions alone prove attendance, not literacy.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published charter naming scope, exclusions, owners and three measures with baselines and targets, approved by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write one sentence on what a data-literate colleague does differently"
                - "List the requests you expect that belong to other teams, and name those teams"
                - "Choose three success measures and record their current values"
                - "Send the draft charter to the sponsor for sign-off"
            - name: Competency framework for reading and using data
              description: |-
                ## Purpose
                Data literacy means different things to a finance analyst and a ward manager, and a framework makes the expectation explicit. Five or six competencies, such as reading charts, questioning sources, interpreting uncertainty and acting ethically, each described at three levels, give training, recruitment and reviews a common language.

                ## Milestones
                1. Five or six competencies agreed, each with a one-line definition.
                2. Each competency described at aware, fluent and expert levels with an observable behaviour.
                3. The framework tested against ten real job roles and adjusted where it did not fit.
                4. Version one published and a yearly review date set.

                ## Notes
                Borrow from published data literacy frameworks rather than starting blank, then rewrite every behaviour using your own reports and meetings as examples.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published framework of five or six competencies at three levels, each with an observable behaviour, tested against ten real roles."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Read two published data literacy frameworks and note what each gets right"
                - "Draft five competencies with one-line definitions"
                - "Write an observable behaviour for each competency at three levels"
                - "Test the draft with managers from ten different roles"
                - "Review the framework against new tools and roles @recurring(yearly)"
            - name: Target literacy level for every job family
              description: |-
                ## Purpose
                Training everyone to the same level wastes time for some and leaves others short. Mapping each job family to a target level per competency shows that a sales executive needs to read a pipeline chart fluently while a buyer needs to judge a supplier's figures, and it tells each person which modules are for them.

                ## Milestones
                1. Every job family listed with its headcount.
                2. A target level set for each competency in each job family, agreed with its manager.
                3. Job families grouped into three or four learning tracks.
                4. Each track linked to the modules it requires.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A table mapping every job family to a target level per competency, grouped into named tracks, agreed by each family's manager."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export the list of job families and headcounts from the HR system"
                - "Draft target levels for the five largest job families"
                - "Walk each draft through with the relevant manager in twenty minutes"
                - "Group the families into learning tracks and name each one"
            - name: Inventory of existing data training and guides
              description: |-
                ## Purpose
                Large organisations often already own a tool vendor's videos, an old statistics course, a finance team's crib sheet and a dozen wiki pages, none of them known outside their home team. Listing what exists, who made it and whether it is still accurate prevents rebuilding content and reveals which teams have already started on their own.

                ## Milestones
                1. A list of every data course, guide, video and wiki page found, with owner and last update.
                2. Each item rated keep, update or retire.
                3. Overlaps and gaps against the competency framework noted.
                4. Owners of the best existing material invited to contribute.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An inventory listing every known data learning resource with owner, date and a keep, update or retire rating."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search the intranet and learning system for data, chart, statistics and report"
                - "Ask the learning team and three department heads what they already use"
                - "Record each item with owner, format and last update date"
                - "Rate each item keep, update or retire"
            - name: Plain-language data glossary for non-specialists
              description: |-
                ## Purpose
                People stay quiet in meetings when they do not know what median, cohort, run rate or statistically significant mean, and nobody wants to be the one who asks. A glossary of around sixty terms, each explained in two sentences with an example from your own reports, removes that barrier and gives champions something to point to.

                ## Milestones
                1. Sixty terms collected from real reports, meeting papers and help-channel questions.
                2. Each term explained in two plain sentences with an internal example.
                3. Business metric entries linked to the official metric dictionary rather than redefined.
                4. The glossary published in one searchable place and linked from the main reports.

                ## Notes
                This glossary explains concepts. Exact metric calculations belong in the metric dictionary owned by the data team; link to it so the two never disagree.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published glossary of at least sixty terms, each with a plain explanation and internal example, linked from the most-used reports."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect twenty confusing terms from last month's meeting papers"
                - "Ask the agent to draft two-sentence plain explanations for each term"
                - "Add a real internal example to every entry and check it with an analyst"
                - "Review new glossary requests and outdated entries with the champions @recurring(quarterly)"
            - name: Listening interviews on where data causes friction
              description: |-
                ## Purpose
                Assessment scores show skill gaps, but interviews show where those gaps cost something: a monthly meeting lost to reconciling two figures, a hiring decision made on a misread survey. Twelve short interviews across functions give the programme concrete stories to teach from and a list of moments where better literacy would change the outcome.

                ## Milestones
                1. Twelve interviews held across at least six functions and three grades.
                2. Each interview written up as the situation, the data involved and what went wrong.
                3. Recurring themes grouped and ranked by how often they appeared.
                4. Five real stories, anonymised, ready to use as teaching cases.

                ## Notes
                Start from the **Feedback themes** template to group what you hear.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Twelve interviews written up and grouped into ranked themes, with five anonymised teaching cases drafted."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write six interview questions about a recent decision that used data"
                - "Invite twelve people from six functions for twenty-minute calls"
                - "Write up each interview within a day while it is fresh"
                - "Group the notes into themes and rank them by frequency"
            - name: Choosing where literacy content lives and is tracked
              description: |-
                ## Purpose
                Content scattered across a learning system, a wiki and shared drives becomes impossible to keep current or to measure. Deciding once where lessons, recordings and the glossary live, and how completions are recorded, saves months of chasing links, and in an enterprise it usually means working with the existing learning platform rather than buying another.

                ## Milestones
                1. Requirements written: hosting, search, completion tracking, access for frontline staff and reporting.
                2. Two or three options compared, including the current learning platform.
                3. A choice made and recorded with its reasons.
                4. A folder and naming structure set up in the chosen home.

                ## Notes
                Start from the **Purchase decision** template. Check that people without a company laptop can reach the content on a phone.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the content home and completion tracking, with at least two options compared against written requirements."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List what the current learning platform can and cannot do for short lessons"
                - "Write five must-have requirements, including phone access"
                - "Compare two or three options against the requirements"
                - "Record the decision and set up the folder structure"
            - name: Data literacy champions network
              description: |-
                ## Purpose
                Three people in a central team cannot reach five thousand colleagues, but one interested person in every team of thirty can. Champions answer everyday questions, spot confusing reports and bring local examples back to the programme, and a network of twenty or more is usually what makes literacy spread past the first wave of enthusiasts.

                ## Milestones
                1. A champion role description with the expected two hours a month and the support offered.
                2. At least one champion named in each major department, with their manager's agreement.
                3. A monthly champions call running with notes and actions.
                4. Champions listed on the programme page so colleagues know who to ask.

                ## Notes
                Choose people who ask good questions, not only the strongest analysts. Champions who are a little ahead of their colleagues explain things in words those colleagues understand.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least one active champion in every major department, with ten consecutive monthly calls held and minuted."
                cadence: rolling
              tasks:
                - "Write the champion role description in half a page"
                - "Ask each department head to nominate one champion and confirm their time"
                - "Run the champions call with one local story and one shared fix @recurring(monthly:12)"
                - "Update the public list of champions after joiners and leavers"
            - name: Monthly lunch and learn on reading real reports
              description: |-
                ## Purpose
                Short, informal sessions built around one real report or chart reach people who would never sign up for a course. Thirty minutes a month, recorded for those who miss it, keeps literacy visible and lets each session tackle one misunderstanding that came up in the previous month.

                ## Milestones
                1. A fixed monthly slot and a standing invitation to all staff.
                2. A twelve-month topic list drawn from interview themes and help questions.
                3. Each session recorded and posted with a two-line summary.
                4. Attendance and replay counts logged after each session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten sessions held in twelve months, each recorded, summarised and with attendance logged."
                cadence: rolling
              tasks:
                - "Choose a fixed monthly lunchtime slot and send a recurring invitation"
                - "Draft a twelve-month topic list from the interview themes"
                - "Run the lunch and learn on one real report and post the recording @recurring(monthly:18)"
                - "Log attendance and replays after each session"
            - name: Weekly how to read this number bulletin
              description: |-
                ## Purpose
                One headline figure taken from the company update, with three short paragraphs on what it means, what it does not mean and what to ask about it, builds the habit of questioning numbers in under two minutes a week. Over a year that is fifty small lessons attached to things people already care about.

                ## Milestones
                1. A bulletin format agreed: one number, what it means, what it does not, one question to ask.
                2. Distribution set up through the existing internal newsletter or channel.
                3. Twelve consecutive weekly issues published.
                4. Reader feedback gathered and the format adjusted once.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly bulletins published, each covering a real internal number, with one round of reader feedback acted on."
                cadence: rolling
              tasks:
                - "Agree with internal communications where the bulletin will appear"
                - "Write the first issue on a figure from the latest company update"
                - "Publish the weekly bulletin on one real number @recurring(weekly:tue)"
                - "Ask five readers what they would change after the first month"
            - name: Quarterly data confidence pulse survey
              description: |-
                ## Purpose
                Five questions sent each quarter show whether people feel more able to read reports, challenge a figure and find the right source, and whether that differs by department. It is cheaper than a full assessment and catches teams that are slipping before the annual reassessment.

                ## Milestones
                1. Five questions fixed so results can be compared quarter to quarter.
                2. The pulse sent each quarter to a rotating sample or to all staff.
                3. Results compared with the previous quarter by department.
                4. One action agreed for the lowest-scoring department each quarter.

                ## Notes
                Keep the wording identical every quarter. Changing even one word breaks the comparison.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly pulses run with identical questions, each compared with the previous quarter and producing one agreed action."
                cadence: rolling
              tasks:
                - "Write five fixed pulse questions on confidence reading and challenging data"
                - "Send the pulse survey and compare results with last quarter @recurring(quarterly)"
                - "Agree one action with the lowest-scoring department head"
            - name: Monthly programme reach and completion review
              description: |-
                ## Purpose
                Programme leads often find out at year end that one region never engaged or that the managers' module has a 20 percent completion rate. A monthly half hour looking at reach by department, module completions and clinic attendance lets you fix gaps while there is still time.

                ## Milestones
                1. A simple tracker of reach, completions and attendance by department.
                2. A monthly review slot with the programme team.
                3. Departments below half their expected reach flagged and contacted.
                4. Six consecutive monthly reviews completed with actions recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews held, each recording reach by department and at least one action for a lagging area."
                cadence: rolling
              tasks:
                - "Set up a tracker with reach, completions and attendance by department"
                - "Review reach and completions and flag lagging departments @recurring(monthly:4)"
                - "Send a short note to the head of each lagging department"
            - name: Weekly drop-in data clinic
              description: |-
                ## Purpose
                Many people will never ask a data question in a meeting but will bring a confusing report to a quiet room. A weekly one-hour drop-in, staffed by an analyst or champion, answers real questions on the spot and gives the programme a running list of what people find hardest.

                ## Milestones
                1. A weekly hour booked with a named host on a rota.
                2. The clinic advertised on the programme page and in the bulletin.
                3. Each question logged in one line with the topic.
                4. The question log reviewed monthly to pick lunch and learn topics.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A weekly clinic held for three months with every question logged and the log used to choose at least two later topics."
                cadence: rolling
              tasks:
                - "Book a weekly hour and a room or video link for the clinic"
                - "Set up a host rota of analysts and champions"
                - "Host the drop-in clinic and log each question in one line @recurring(weekly:thu)"
                - "Pick next month's lunch and learn topic from the question log"
            - name: Quarterly content refresh after tool and definition changes
              description: |-
                ## Purpose
                Lessons that still show last year's dashboard or a retired revenue definition teach the wrong thing with full confidence. Checking every module, screenshot and glossary link once a quarter against recent tool changes and metric dictionary updates keeps the content trustworthy.

                ## Milestones
                1. Every module listed with its owner and the reports or tools it shows.
                2. A quarterly check of each item against recent change notices.
                3. Outdated screenshots and examples replaced within the same quarter.
                4. Retired content removed rather than left to mislead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly refreshes completed, with every module checked and no content older than two quarters left uncorrected."
                cadence: rolling
              tasks:
                - "Subscribe to the data team's change notices and the metric dictionary changelog"
                - "Check every module and screenshot against recent changes @recurring(quarterly)"
                - "Replace outdated examples and retire content that no longer fits"
            - name: Champion recognition and yearly rotation
              description: |-
                ## Purpose
                Champions burn out or drift away when their effort goes unnoticed and the role has no end date. Recognising their work in reviews and at a yearly event, and inviting each one to stay, step down or hand over, keeps the network fresh without losing its experience.

                ## Milestones
                1. Champion contributions noted in a sentence each for their managers before review season.
                2. A yearly recognition moment, such as an award at the data literacy day.
                3. Each champion asked once a year whether to continue, step down or mentor a successor.
                4. Vacancies filled within two months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every champion has had contributions shared with their manager and a stay or rotate conversation within the past year."
                cadence: cyclic
              tasks:
                - "Write one sentence on each champion's contribution this year"
                - "Send the sentences to each champion's manager before review season"
                - "Ask every champion to stay, step down or mentor a successor @recurring(yearly)"
            - name: Data literacy module in new starter induction
              description: |-
                ## Purpose
                New joiners are told where the reports are but rarely how to read them or which ones to trust, and they pick up bad habits from whoever sits next to them. A forty-minute module in the first fortnight covering the glossary, the trusted sources and who the champions are sets the norm from day one.

                ## Milestones
                1. A forty-minute module covering trusted sources, the glossary, five questions to ask of a number and the champions.
                2. The module added to the standard induction plan for every job family.
                3. Completion checked monthly for that month's new starters.
                4. New starter feedback reviewed after the first three months.

                ## Notes
                Start from the **Onboarding plan** template, adding the module to week one or two.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 90 percent of new starters complete the module within their first month, measured over three consecutive months."
                cadence: rolling
              tasks:
                - "Ask the HR onboarding lead how induction modules are added"
                - "Build the forty-minute module from the glossary and trusted sources list"
                - "Check that last month's new starters completed the module @recurring(monthly:22)"
            - name: Reading charts critically and spotting misleading visuals
              description: |-
                ## Purpose
                Truncated axes, cherry-picked date ranges, dual axes and area-scaled icons can make a small change look dramatic, and most people take a chart at face value. A ninety-minute module built on real internal and public examples teaches staff to check the axis, the period, the scale and the source before reacting.

                ## Milestones
                1. Ten example charts collected, half internal and half from public media.
                2. A four-point checklist taught: axis, period, scale, source.
                3. Participants correctly flag the problem in at least eight of ten examples.
                4. The checklist printed on a card or pinned in the reporting tool.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two cohorts complete the module and at least 80 percent of participants correctly flag eight of ten misleading charts."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect five misleading charts from public media"
                - "Find five internal charts with axis or period problems and anonymise them"
                - "Write the four-point chart checklist on one card"
                - "Run the module with a pilot group and score the exercise"
            - name: Averages, spread and outliers for non-analysts
              description: |-
                ## Purpose
                An average handling time of six minutes can hide a long tail of forty-minute calls, and a mean salary can be pulled up by a few senior staff. Teaching the difference between mean and median, why spread matters and what an outlier does to a summary is the single most useful statistics lesson for most staff.

                ## Milestones
                1. A sixty-minute session using two internal datasets with skewed distributions.
                2. Participants able to explain when a median tells a truer story than a mean.
                3. A short exercise on reading a histogram or box plot completed.
                4. The session added to the fluent track of the curriculum.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A session delivered to at least two groups, with 80 percent of participants correctly choosing mean or median in a scored exercise."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find two internal datasets where the mean and median differ a lot"
                - "Build one histogram from each and write the story it tells"
                - "Write a five-question exercise on choosing mean or median"
                - "Deliver the session to a pilot group and adjust the examples"
            - name: Correlation, causation and confounders workshop
              description: |-
                ## Purpose
                Teams regularly conclude that a training course raised sales or that a new process cut complaints because the two moved together. A workshop that walks through real internal claims, asking what else changed at the same time, teaches people to spot confounders and to ask for a comparison group before crediting a cause.

                ## Milestones
                1. Five claims from past internal papers where correlation was presented as cause.
                2. A simple three-question test taught: what else changed, compared with what, could it run the other way.
                3. Participants rewrite one claim in honest language.
                4. Workshop materials ready for champions to rerun.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The workshop runs at least three times and every participant rewrites one causal claim in language a reviewer accepts as accurate."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect five internal claims that treat correlation as cause"
                - "Write the three-question confounder test on one slide"
                - "Draft a rewrite exercise for each claim"
                - "Package the materials so a champion can run the workshop alone"
            - name: Percentages, percentage points and base effects
              description: |-
                ## Purpose
                Going from 4 to 6 percent is a two-point increase and a 50 percent increase, and papers mix these up constantly. Small bases make modest changes look huge, and a 10 percent fall followed by a 10 percent rise does not return to where it started. Forty minutes of practice on internal examples removes a whole class of misreadings.

                ## Milestones
                1. Ten worked examples from internal reports covering points, percentages and small bases.
                2. A one-page cheat sheet on percentage language.
                3. Participants score at least eight of ten on a short quiz.
                4. The cheat sheet linked from the glossary.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A forty-minute module and cheat sheet published, with participants averaging at least eight of ten on the quiz."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find three internal papers that confuse points with percentages"
                - "Write ten worked examples using real internal figures"
                - "Draft a one-page cheat sheet on percentage language"
                - "Link the cheat sheet from the glossary entry for percentage point"
            - name: Sampling, margins of error and survey results
              description: |-
                ## Purpose
                Engagement surveys, customer polls and pilot results are quoted to one decimal place with no hint that the next sample might differ by five points. Teaching people to ask how many responded, who was missing and how wide the margin is stops small differences between teams or months being treated as real.

                ## Milestones
                1. A session using the organisation's own engagement or customer survey results.
                2. Participants able to explain why a sample of fifty is noisier than one of five hundred.
                3. A rule of thumb on margins of error taught alongside its limits.
                4. Three questions to ask of any survey added to the glossary.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The session runs for at least two groups, with participants correctly judging which of five survey differences are likely to be noise."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get last year's engagement survey results by team with response counts"
                - "Pick five team differences, some real and some likely noise"
                - "Write a short explanation of margin of error with its limits"
                - "Add three survey questions to ask to the glossary"
            - name: Five questions to ask of any number
              description: |-
                ## Purpose
                Most people do not need statistics; they need a habit of asking where a number came from, compared with what, over what period, who is missing and what would change their mind. Teaching five standard questions, and getting leaders to ask them out loud, does more for decision quality than any course on methods.

                ## Milestones
                1. Five questions agreed and worded plainly.
                2. The questions printed on a card and pinned in meeting rooms or video backgrounds.
                3. A twenty-minute session teaching the questions with two internal examples.
                4. At least three senior leaders seen using the questions in decision meetings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The five questions are taught in a session attended by at least 100 people and observed in use by three senior leaders."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft five questions to ask of any number in plain words"
                - "Test the wording with three colleagues outside the data team"
                - "Design a pocket card and a meeting room poster with the questions"
                - "Ask three senior leaders to use the questions in their next meetings"
            - name: Data ethics and privacy awareness for every role
              description: |-
                ## Purpose
                Literacy includes knowing when not to use data: exporting customer lists to a personal drive, sharing a small-group result that identifies someone, or drawing conclusions about people from a biased sample. A short, scenario-based module agreed with the privacy team gives everyone a sense of where the lines are and whom to ask.

                ## Milestones
                1. Six realistic scenarios agreed with the privacy or information governance team.
                2. A thirty-minute module covering consent, small numbers, sharing and fair use.
                3. The contact route for privacy questions shown in the module.
                4. The module added to every learning track.

                ## Notes
                This is awareness, not policy. Take the rules from your privacy team and data protection policy, and send detailed questions to them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A thirty-minute ethics module, approved by the privacy team, is included in every learning track and completed by a first cohort."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the privacy team for the three data mistakes they see most"
                - "Write six short scenarios based on those mistakes"
                - "Get the privacy team to approve the answers to each scenario"
                - "Add the module to every learning track"
            - name: Reading AI-generated analysis with a critical eye
              description: |-
                ## Purpose
                Staff now ask chat assistants to summarise spreadsheets and explain trends, and the answers sound confident whether or not they are right. A module on checking AI output, such as tracing figures back to the source, spotting invented numbers and noticing when a summary skips a caveat, keeps the new tools from spreading errors faster.

                ## Milestones
                1. Five examples of AI summaries of internal data, including at least two with errors.
                2. A checklist for verifying AI-generated figures and claims.
                3. Participants catch the errors in at least four of five examples.
                4. Guidance on approved tools and what data may be pasted into them, agreed with IT.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A module with a verification checklist is delivered, and 80 percent of participants catch errors in at least four of five AI summaries."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask an approved AI tool to summarise two internal datasets and save the answers"
                - "Check every figure in the answers against the source and mark the errors"
                - "Write a five-step checklist for verifying AI-generated analysis"
                - "Confirm with IT which tools and data types staff may use"
            - name: Uncertainty, ranges and forecasts for decision-makers
              description: |-
                ## Purpose
                Forecasts presented as a single number invite either blind trust or total dismissal. Teaching managers to read a range, ask what assumptions drive it and plan for the low case as well as the central one makes budgeting and capacity decisions less brittle, and makes analysts more willing to show uncertainty honestly.

                ## Milestones
                1. A session using one real internal forecast and its past accuracy.
                2. Participants able to explain what an 80 percent range means in plain words.
                3. An exercise planning a decision for the low, central and high cases.
                4. Analysts asked to show a range on at least one recurring forecast.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The session runs for managers in at least two departments, and one recurring internal forecast now shows a range instead of a single figure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find one internal forecast and compare it with what actually happened"
                - "Write a plain explanation of a forecast range"
                - "Build a three-case planning exercise around a real decision"
                - "Ask the forecast owner to show a range in the next edition"
            - name: Three-track literacy curriculum design
              description: |-
                ## Purpose
                With a framework, target levels and assessment results in hand, the curriculum can be built around what each track needs rather than what is easy to teach. Laying out aware, fluent and expert tracks, each a sequence of short modules with an assessment at the end, gives everyone a clear next step and the programme a manageable build list.

                ## Milestones
                1. Three tracks defined, each with its modules, total hours and target audience.
                2. Each module mapped to a competency and level in the framework.
                3. A build order agreed, starting with the modules that address the weakest baseline skills.
                4. An end-of-track assessment drafted for each track.

                ## Notes
                Start from the **Course** template. Keep modules under an hour; people find an hour far more easily than a day.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A curriculum document listing three tracks, every module mapped to the framework, a build order and an end assessment per track."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every module you would want in an ideal world on one page"
                - "Map each module to a competency and level in the framework"
                - "Cut each track to what fits in the agreed learning hours"
                - "Order the build list by the weakest baseline skills"
            - name: Buy, build or blend decision for training content
              description: |-
                ## Purpose
                Off-the-shelf data literacy courses are quick to roll out but use generic examples, while home-built modules land better but take months. Comparing the options for each track, on cost per learner, relevance and upkeep, usually ends in a blend: bought content for general concepts, home-built cases for your own reports.

                ## Milestones
                1. Two or three external providers reviewed against the curriculum.
                2. Cost per learner and build hours estimated for each option.
                3. A decision recorded per track: buy, build or blend.
                4. Contracts or build plans started for the chosen route.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded buy, build or blend decision for each track, with cost per learner and build hours compared."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Request sample modules from two external data literacy providers"
                - "Estimate in-house build hours for each track"
                - "Compare cost per learner and relevance for each option"
                - "Record the decision per track and share it with the sponsor"
            - name: Evidence section in decision papers
              description: |-
                ## Purpose
                Literacy changes nothing if decision papers still present one favourable chart and no source. Adding a short evidence section to the standard paper template, asking for the source, the comparison, the main uncertainty and what would change the recommendation, makes good data practice the default rather than a training aspiration.

                ## Milestones
                1. Four evidence prompts drafted and agreed with the governance or board secretary.
                2. The prompts added to the standard decision paper template.
                3. Paper authors shown the section in a fifteen-minute briefing.
                4. The first ten papers using the section reviewed for quality.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The decision paper template includes an evidence section, and ten papers using it have been reviewed with feedback to authors."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get a copy of the current decision paper template from the governance team"
                - "Draft four evidence prompts that fit in half a page"
                - "Agree the change with the board or committee secretary"
                - "Review the first ten papers and send each author one comment"
            - name: How to read this report panels on key reports
              description: |-
                ## Purpose
                The five most-read reports in most organisations are opened by hundreds of people who were never told what the figures include or how to read the charts. A short panel on each, written with the report owner, explains the main measures, the period, common misreadings and who to ask, turning everyday reports into teaching material.

                ## Milestones
                1. The five most-viewed reports identified from usage data.
                2. A short reading panel drafted for each with its owner.
                3. Panels published inside or beside each report.
                4. Panel accuracy checked each quarter after report changes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Reading panels published on the five most-viewed reports, each approved by the report owner and checked within the last quarter."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the BI team for the five most-viewed reports last quarter"
                - "Draft a reading panel for the top report with its owner"
                - "Publish panels on all five reports"
                - "Check each panel still matches its report @recurring(quarterly)"
            - name: Five-minute micro-lesson library
              description: |-
                ## Purpose
                Busy managers and shift workers rarely have an hour, but they will watch a five-minute clip that answers the question in front of them. A library of twenty short lessons, each tied to one glossary term or one report, gives people help at the moment of need and stretches the programme's reach without more live sessions.

                ## Milestones
                1. Twenty lesson topics chosen from clinic questions and baseline gaps.
                2. Each lesson recorded in under five minutes with captions.
                3. Lessons linked from the glossary and the relevant reports.
                4. View counts reviewed after three months and weak lessons remade.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twenty captioned lessons under five minutes each are published and linked from the glossary, with view counts reviewed after three months."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose twenty topics from the clinic log and baseline gaps"
                - "Ask the agent to draft a five-minute script for the first topic"
                - "Record and caption the first five lessons"
                - "Link each lesson from its glossary entry"
            - name: Manager toolkit for questioning data in team meetings
              description: |-
                ## Purpose
                Managers set the tone: if they accept a slide without a question, so does the team. A toolkit of prompt cards, a ten-minute exercise for team meetings and a short guide on responding when a number looks wrong helps managers model good habits without needing to be analysts themselves.

                ## Milestones
                1. Ten prompt cards for questioning figures in meetings.
                2. Four ten-minute team exercises built on real reports.
                3. A one-page guide on what to do when a number looks wrong.
                4. The toolkit used by at least twenty managers in its first quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A toolkit of prompt cards, four exercises and a guide is published and used by at least twenty managers within a quarter."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft ten prompt cards from the five questions to ask of any number"
                - "Build four ten-minute team exercises using real reports"
                - "Write the one-page guide on challenging a suspicious figure"
                - "Use one prompt card in your own team meeting @recurring(weekly:mon)"
            - name: Data skills in role profiles and performance reviews
              description: |-
                ## Purpose
                People prioritise what they are measured on, and data skills rarely appear in role profiles outside the data team. Adding one literacy expectation per job family, taken from the target levels, to role profiles and review conversations signals that reading and questioning data is part of the job.

                ## Milestones
                1. One literacy expectation drafted per job family from its target level.
                2. The expectations agreed with HR and the people leads.
                3. Role profiles updated at their next scheduled revision.
                4. Review guidance for managers includes a question on data skills.

                ## Notes
                Start from the **Skills matrix** template to show each family's expected level. Avoid tying pay to assessment scores; it turns learning into test-taking.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A literacy expectation is agreed for every job family and appears in role profiles and review guidance."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask HR when role profiles are next revised"
                - "Draft one literacy expectation per job family"
                - "Agree the wording with the people leads"
                - "Add a data skills question to the manager review guidance"
            - name: Data literacy programme launch week
              description: |-
                ## Purpose
                A programme that starts quietly is easily mistaken for another optional course. A launch week with a message from the sponsor, the glossary going live, the first lunch and learn, champions introduced and the baseline results shared openly gives it a visible start and a reason for people to try one thing.

                ## Milestones
                1. A launch week plan with one activity each day.
                2. The sponsor's message recorded or written and approved.
                3. The glossary, champions list and first modules live before day one.
                4. Launch week participation counted and reported to the sponsor.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A five-day launch held with the sponsor's message, live glossary and named champions, and participation reported within a week."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick a launch week clear of year end and major company events"
                - "Plan one activity for each day of the week"
                - "Draft the sponsor's launch message for approval"
                - "Check the glossary, champions list and first modules are live"
                - "Report launch week participation to the sponsor"
            - name: Annual data literacy day
              description: |-
                ## Purpose
                Once a year, a day of short talks, team challenges and champion awards renews interest and brings in people who skipped the regular sessions. It is also the natural moment to share reassessment results and announce what the programme will focus on next.

                ## Milestones
                1. A date fixed at least three months ahead.
                2. A programme of four to six short sessions, including one from a business leader.
                3. Champion awards and reassessment highlights included.
                4. Attendance and feedback recorded and next year's focus announced.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A literacy day held with at least four sessions and champion awards, with attendance and feedback recorded."
                cadence: cyclic
              tasks:
                - "Fix the date for the data literacy day and book the space @recurring(yearly)"
                - "Invite one business leader to speak about a decision data changed"
                - "Collect feedback and publish next year's focus within a fortnight"
            - name: Leadership team data literacy workshop
              description: |-
                ## Purpose
                Senior leaders rarely attend general training, yet their questions in meetings shape what everyone else does. A private half-day for the leadership team, built around their own board pack, covers reading uncertainty, spotting weak causal claims and asking the five questions, and secures their public support for the programme.

                ## Milestones
                1. A half-day booked in the leadership team's calendar.
                2. Exercises built from the current leadership or board pack.
                3. Each leader commits to one visible habit, such as asking for the comparison.
                4. Commitments followed up after six weeks.

                ## Notes
                Run it with an external or senior facilitator if internal analysts would find it hard to challenge their own leaders.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The leadership team completes a half-day workshop and each leader's habit commitment is recorded and followed up after six weeks."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the sponsor to secure a half-day in the leadership calendar"
                - "Pull three charts and one forecast from the latest leadership pack"
                - "Build exercises around those examples"
                - "Follow up each leader's commitment six weeks later"
            - name: Cross-department data detective challenge
              description: |-
                ## Purpose
                Friendly competition, where mixed teams get a puzzle built from anonymised internal data and must find the real story, reaches people who avoid training and mixes departments that rarely talk. Two hours with a prize and a leaderboard often produces more lasting interest than a term of lessons.

                ## Milestones
                1. A puzzle built from anonymised data with a hidden finding and two misleading paths.
                2. At least eight mixed teams registered across departments.
                3. The challenge run with a debrief explaining the traps.
                4. Winning answers and the debrief shared in the bulletin.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least eight cross-department teams complete the challenge and the debrief is published in the bulletin."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Choose an anonymised internal dataset with a clear hidden story"
                - "Design the puzzle with two tempting wrong answers"
                - "Open registration for mixed teams of four"
                - "Run the challenge and the debrief, then share the answers"
            - name: First-year programme impact report
              description: |-
                ## Purpose
                At the end of year one the sponsor will be asked whether the programme was worth it, and an honest answer needs more than course completions. A report comparing reassessment scores with the baseline, pulse trends, examples of changed decisions and what did not work gives leadership a fair basis for funding year two.

                ## Milestones
                1. Baseline and reassessment scores compared by function and skill.
                2. Pulse trends, reach and completion figures summarised.
                3. Five documented examples of decisions changed by better data use.
                4. What did not work, and next year's priorities, stated plainly.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A report comparing baseline and reassessment scores, with five decision examples and stated failures, presented to the leadership team."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Start a running file of decisions where data use visibly changed"
                - "Compare reassessment scores with the baseline by function"
                - "Write the section on what did not work before the successes"
                - "Present the report to the leadership team with a year-two ask"
            - name: Train the trainer for internal facilitators
              description: |-
                ## Purpose
                Champions and analysts often know the material but have never run a session, and a nervous facilitator reading slides loses a room fast. A short programme on facilitation, handling difficult questions and adapting examples lets the central team hand over delivery and scale beyond its own diary.

                ## Milestones
                1. Ten facilitators selected from champions and analysts.
                2. Two practice sessions on facilitation, pacing and handling challenge.
                3. Each facilitator co-delivers one module before running one alone.
                4. Facilitator notes written for every core module.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Ten facilitators have each co-delivered and then solo-delivered a module, with facilitator notes for every core module."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Invite ten champions and analysts to become facilitators"
                - "Run a practice session on pacing and handling hard questions"
                - "Pair each facilitator with an experienced trainer for one module"
                - "Write facilitator notes for every core module"
            - name: Rebuilding trust in data with a sceptical team
              description: |-
                ## Purpose
                Some teams have been burned by wrong numbers and now ignore reports entirely, relying on instinct and their own spreadsheets. For a manager in that position, listening first, fixing one visible problem with the data team and then teaching people to check figures themselves rebuilds confidence faster than any mandate to use the dashboards.

                ## Milestones
                1. The team's specific reasons for distrust written down from a listening session.
                2. One visible data problem fixed with the data team and the fix announced.
                3. A session teaching the team to check one key figure against its source.
                4. The team's own trust score measured before and after three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A sceptical team's trust score improves over three months after one fixed problem and a source-checking session."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the team for the three times a report let them down"
                - "Take the most visible problem to the data team with an example"
                - "Announce the fix to the team once it is made"
                - "Teach the team to check their key figure against its source"
            - name: Multi-country rollout with local language versions
              description: |-
                ## Purpose
                An enterprise programme designed at head office often fails in other countries because examples, number formats and languages do not fit. Rolling out in waves, with local champions adapting cases and translating the glossary and core modules, keeps the content consistent while making it feel local.

                ## Milestones
                1. Countries or regions grouped into rollout waves by size and readiness.
                2. Local champions named in each wave to adapt examples.
                3. The glossary and core modules translated and checked by a native speaker.
                4. Number, date and currency formats checked in every version.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least two countries outside head office run the programme in their local language with locally adapted examples."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List countries by headcount and the languages they work in"
                - "Group them into two or three rollout waves"
                - "Name a local champion for each country in the first wave"
                - "Have the glossary translated and checked by a native speaker"
            - name: Data literacy for frontline and shift-based staff
              description: |-
                ## Purpose
                Staff on shop floors, wards, warehouses and call centres see performance boards every day but are often left out of programmes built for desk workers. Ten-minute huddle sessions using the board they already look at, run by their own supervisor, reach them in paid time and on their terms.

                ## Milestones
                1. The boards and figures frontline teams see each day listed.
                2. Six ten-minute huddle sessions designed around those boards.
                3. Supervisors briefed to run the huddles in paid time.
                4. Feedback collected from at least three sites.

                ## Notes
                Use paper handouts or the board itself rather than a learning system many frontline staff cannot log in to.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Six huddle sessions run at three or more frontline sites by supervisors, with feedback collected from each site."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Visit one frontline site and photograph the boards staff see"
                - "Design the first ten-minute huddle around one board"
                - "Brief three supervisors to run the huddles"
                - "Collect feedback from each site after the first month"
            - name: One-to-one data coaching for senior leaders
              description: |-
                ## Purpose
                Senior leaders who struggle with data seldom say so in a group, and the cost of their misreadings is high. A short series of private coaching sessions, built around the reports they actually receive, lets them build confidence quietly and ask the questions they would never raise in front of their peers.

                ## Milestones
                1. Two to four senior leaders opted in through the sponsor.
                2. A monthly forty-five minute session agreed with each.
                3. Each session built on a report the leader received that month.
                4. Each leader's own goal reviewed after six sessions.

                ## Notes
                Keep coaching confidential. Report only the number of leaders coached, never who.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "At least two senior leaders complete six coaching sessions each and review progress against a goal they set."
                cadence: rolling
              tasks:
                - "Ask the sponsor to offer confidential coaching to senior leaders"
                - "Agree a personal goal with each leader in the first session"
                - "Hold a coaching session on that month's leadership report @recurring(monthly:15)"
            - name: Teachers reading pupil and school performance data
              description: |-
                ## Purpose
                Schools and colleges hand staff attainment tables, progress scores and attendance reports with little help on how to read them, and small class sizes make random variation look like a trend. A staff development session for educators on group sizes, comparisons and what progress measures do and do not show helps them use data to support pupils without overreacting.

                ## Milestones
                1. The three data reports teachers receive most often gathered.
                2. A sixty-minute staff development session built around them.
                3. Guidance on small group sizes and year-to-year noise written for staff.
                4. The session delivered in a staff training day and feedback recorded.

                ## Notes
                Keep all examples anonymised and never show results that could identify a pupil.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sixty-minute session delivered to teaching staff, with written guidance on small groups and feedback from at least twenty staff."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect the three data reports teachers receive most often"
                - "Find one example where a small class made noise look like a trend"
                - "Write a one-page guide on small groups and year-to-year noise"
                - "Book a slot in the next staff training day"
            - name: People managers reading workforce and engagement data
              description: |-
                ## Purpose
                People managers now receive engagement scores, attrition rates and absence dashboards, and misreading them can lead to unfair conclusions about a team or an individual. A focused session with the HR analytics team on small team sizes, rates versus counts and what a score change really means helps managers act on people data fairly.

                ## Milestones
                1. The people reports managers receive identified with HR.
                2. A session covering rates, small numbers and confidentiality thresholds.
                3. A one-page guide on discussing engagement results with a team.
                4. The session delivered to at least two groups of managers.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A people data session and one-page guide, agreed with HR, are delivered to at least two groups of managers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask HR which people reports managers receive and when"
                - "Agree the session content with the HR analytics team"
                - "Write the one-page guide on discussing engagement results"
                - "Deliver the session to two groups of managers"
            - name: Annual literacy reassessment against the baseline
              description: |-
                ## Purpose
                Progress claims mean little unless measured the same way twice. Rerunning the baseline assessment each year with the same core questions, plus a few new ones, shows which skills and functions improved, which did not, and whether the programme should change emphasis.

                ## Milestones
                1. At least ten core questions kept identical to the baseline.
                2. A comparable sample reached, by function and grade.
                3. Changes by skill and function reported with sample sizes shown.
                4. The curriculum adjusted in response to the weakest results.

                ## Notes
                Compare like with like. If the sample shifts towards people who completed training, the improvement will be overstated.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly reassessment with at least ten unchanged questions and a comparable sample, reported against the baseline by skill and function."
                cadence: cyclic
              tasks:
                - "Mark which baseline questions will stay identical"
                - "Run the reassessment with a sample matching the baseline @recurring(yearly)"
                - "Report changes by skill and function with sample sizes shown"
                - "Adjust the curriculum around the weakest results"
            - name: Decision audit of how data was used in past choices
              description: |-
                ## Purpose
                Scores and surveys measure capability, but the real test is whether decisions use evidence well. Reviewing twenty recent decision papers against a simple rubric, covering source, comparison, uncertainty and whether the conclusion followed, gives a hard measure of behaviour that can be repeated after a year.

                ## Milestones
                1. A rubric of five criteria, each scored from one to three.
                2. Twenty recent decision papers sampled across committees.
                3. Each paper scored by two reviewers and differences resolved.
                4. Findings shared with paper authors and the governance team.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Twenty decision papers scored by two reviewers against a five-criterion rubric, with results shared with the governance team."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Draft a five-criterion rubric for evidence use in papers"
                - "Ask the governance team for twenty recent decision papers"
                - "Score each paper with a second reviewer and resolve differences"
                - "Share the results and three improvement points with authors"
            - name: Four-level evaluation of the literacy programme
              description: |-
                ## Purpose
                Training evaluation that stops at satisfaction scores tells you people enjoyed lunch. Evaluating at four levels, reaction, learning, behaviour and results, with a measure chosen in advance for each, lets the programme show a credible chain from sessions attended to decisions improved, and exposes the weakest link.

                ## Milestones
                1. One measure chosen for each of the four levels, with its data source.
                2. Baselines recorded for the behaviour and results measures.
                3. Measures collected for at least two cohorts.
                4. The weakest level identified and a change made to address it.

                ## Notes
                Results-level claims are the hardest to prove. Use comparison groups where you can and say plainly where you cannot.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An evaluation with a defined measure and data at all four levels for two cohorts, naming the weakest level and the change made."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose one measure for each of the four evaluation levels"
                - "Record baselines for the behaviour and results measures"
                - "Collect measures for two cohorts after three months"
                - "Write up the weakest level and the change you will make"
            - name: Validated assessment question bank
              description: |-
                ## Purpose
                Reusing the same fifteen questions year after year lets answers spread, while writing new ones each time breaks comparability. A bank of sixty or more questions, each tested for difficulty and how well it separates strong from weak performers, supports fair, varied assessments and adaptive pathways that skip what someone already knows.

                ## Milestones
                1. Sixty questions written, at least ten per competency.
                2. Each question trialled with at least fifty respondents.
                3. Difficulty and discrimination calculated, and weak questions rewritten or dropped.
                4. Parallel forms of the assessment assembled with matched difficulty.

                ## Notes
                Ask someone with assessment design experience, from HR or an educational partner, to review the method before relying on the results.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A bank of at least sixty trialled questions with difficulty and discrimination statistics, supporting two parallel assessment forms."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write ten new questions for the weakest competency"
                - "Trial the new questions with fifty respondents"
                - "Calculate difficulty and discrimination for every question"
                - "Assemble two parallel forms with matched difficulty"
---

# Organisation Data Literacy

This area is for whoever has been asked to raise how well an organisation reads, questions and uses data: a learning lead, a head of data, a manager tired of meetings that argue about numbers, or a teacher running staff development. It starts with foundations (a baseline assessment, a sponsor, a competency framework and a plain-language glossary), then the operating rhythm of champions, clinics and bulletins, short skills modules on charts, averages, causation and uncertainty, the design decisions about curriculum and incentives, dated events such as the launch week and leadership workshop, variants for frontline staff, sceptical teams, teachers and senior leaders, and finally specialist work on evaluation and assessment design.

What repeats is a weekly bulletin and drop-in clinic, a monthly champions call, lunch and learn and reach review, quarterly pulse surveys, content refreshes and glossary checks, and a yearly reassessment, data literacy day and champion rotation. The Purchase decision, Course, Onboarding plan, Feedback themes and Skills matrix templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
