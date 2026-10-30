---
id: career-growth.professional-case-study-collection
name: Professional Case Study Collection
description: "A shelf of finished case studies about your best work, each with a clear problem, your approach, verified results and permission to share, ready for interviews, promotion panels and client pitches."
category: personal
version: 1.0.0
tags: [career-growth, professional-case-study-collection, knowledge-worker, creative, engineer, case-studies, portfolio, evidence]
author: Aurum Technology
starter_structure:
  templates:
    - portfolio-piece
    - metrics-log
    - job-application
  pillars:
    - name: Career Growth
      emoji: "🧭"
      description: "A working life steered rather than drifted: job searches and promotions, reputation and network, pay negotiations, career changes, credentials, and the evidence that you are getting better at what you do."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Professional Case Study Collection
          description: "Writing up your best work as case studies with problem, approach and results, ready for interviews and promotion cases."
          projects:
            - name: Inventory of case study candidates from five years
              description: |-
                ## Purpose
                Most people can name two projects they are proud of and forget the other fifteen that would make better stories. Listing every substantial piece of work from the last five years, with a line on the problem and the outcome, gives you a pool to choose from instead of writing up whatever happens to be recent.

                ## Milestones
                1. A list of at least fifteen projects from the last five years, each with dates and employer or client.
                2. One line per project describing the problem and one describing the outcome.
                3. Each project marked for size, your share of the work and whether results are known.
                4. Projects you could not discuss publicly flagged before any writing starts.

                ## Notes
                Old performance reviews, calendar invites and sent mail jog memory faster than sitting and thinking.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated list of at least fifteen past projects, each with problem, outcome, size and a confidentiality flag."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every project you can remember from the last twelve months"
                - "Skim old performance reviews and calendars for earlier projects"
                - "Add a one-line problem and outcome to each project on the list"
                - "Flag each project as public, anonymisable or private"
            - name: Choosing your first three case studies
              description: |-
                ## Purpose
                Trying to write up everything at once stalls the whole collection. Scoring the inventory against a few honest criteria (size of result, how central your role was, relevance to the role you want next, and how much evidence survives) picks the three that will do the most work for you in the next year.

                ## Milestones
                1. Four or five scoring criteria written down, weighted for the role you are targeting.
                2. Every project on the inventory scored against them.
                3. Three case studies chosen, covering at least two different kinds of problem.
                4. A reserve list of the next five written underneath.

                ## Notes
                Pick variety over raw size: one technical or craft win, one about people or influence and one that went wrong and was recovered covers most interview questions.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three case studies chosen from a scored inventory, with the scores and a reserve list of five recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write four scoring criteria that matter for your next role"
                - "Score every project on the inventory from one to five on each"
                - "Choose three case studies that cover different kinds of problem"
                - "Write a reserve list of the next five candidates"
            - name: Confidentiality and permission rules for case studies
              description: |-
                ## Purpose
                Employment contracts, client agreements and non-disclosure clauses often forbid sharing exactly the details that make a case study convincing. Reading what you signed and writing your own short rules before drafting protects your reputation and saves rewriting a finished piece because it names a client or a revenue figure you may not share.

                ## Milestones
                1. Confidentiality clauses in your current and recent contracts read and noted.
                2. A one-page rule sheet covering names, figures, screenshots, code and client logos.
                3. Each case study candidate tagged with the rule level that applies.
                4. Any unclear clause raised with HR, the client or an employment adviser before use.

                ## Notes
                This sheet organises what you agreed to; it is not a legal view. When a clause is unclear, ask the person who can grant permission rather than guessing.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written confidentiality rule sheet exists and every candidate case study is tagged with the level that applies to it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the confidentiality clauses in your current employment contract"
                - "Check client agreements and NDAs from the last five years"
                - "Write a one-page rule sheet for names, figures, images and code"
                - "Reread the rule sheet when you change employer or sign a new client @recurring(yearly)"
            - name: Master case study template with fixed sections
              description: |-
                ## Purpose
                Case studies written without a structure ramble through the background and run out of energy before the result. A fixed set of sections (context, problem, constraints, your role, approach, trade-offs, results, what you would do differently) makes every piece comparable and lets a reader find the result in ten seconds.

                ## Milestones
                1. A template with eight fixed sections and a one-line prompt under each.
                2. A word budget set for each section, with the whole piece under about 900 words.
                3. A header block for dates, team size, your role and confidentiality level.
                4. The template tested by drafting one case study in it.

                ## Notes
                Start from the **Portfolio piece** template. Keep the results section near the top of the page as well as in its place, so a skimming reader sees it first.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved case study template with eight sections, word budgets and a header block, used for at least one complete draft."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a case study template from the portfolio piece template"
                - "Write a one-line prompt under each of the eight sections"
                - "Set a word budget for every section"
                - "Draft your first chosen case study in the template"
            - name: Case study library folder and naming scheme
              description: |-
                ## Purpose
                Twelve case studies scattered across a work laptop, a personal drive and old email are twelve case studies you cannot find before an interview tomorrow. One personal folder with a predictable naming pattern and a subfolder for each piece's evidence keeps the whole collection portable and findable.

                ## Milestones
                1. A single folder on storage you personally own, outside any employer's systems.
                2. A naming pattern such as year, short title and version for every file.
                3. A subfolder per case study for drafts, evidence and visuals.
                4. Existing drafts and notes moved in and renamed.

                ## Notes
                Only put material in a personal folder that your confidentiality rules allow you to hold outside work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All case study drafts and permitted evidence sit in one personal folder using a single written naming pattern."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create one case study folder on storage you own"
                - "Write the naming pattern in a readme file at the top"
                - "Make an evidence and visuals subfolder for each chosen case study"
                - "Move existing drafts into the folder and rename them"
            - name: Evidence pack for each chosen case study
              description: |-
                ## Purpose
                Believability rests on the proof behind a case study, and that proof disappears fast: dashboards are retired, chat history is purged and colleagues move on. Gathering the permitted artefacts now (the brief, a before screenshot, the launch announcement, the metric chart, a thank-you message) means every claim in the write-up can be backed when someone asks.

                ## Milestones
                1. A checklist of evidence types written for each case study.
                2. At least four pieces of evidence saved for each of the three chosen case studies.
                3. Every piece named, dated and noted with where it came from.
                4. Gaps listed, with who might still hold the missing material.

                ## Notes
                Save the permitted summary, not the confidential source. A screenshot of a chart with figures hidden is often enough.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each of the first three case studies has at least four dated, sourced pieces of permitted evidence in its folder."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the evidence checklist for your first case study"
                - "Search mail and chat for the brief, launch note and any thanks"
                - "Save a before and after screenshot with sensitive figures hidden"
                - "List missing evidence and who might still have it"
            - name: Baseline and result numbers verified at source
              description: |-
                ## Purpose
                Interviewers and promotion panels probe numbers, and a figure remembered as "about 40 percent faster" that turns out to be 15 percent damages everything else you say. Checking each baseline and result against its source, and writing down how it was measured, lets you state numbers with confidence and explain them under questioning.

                ## Milestones
                1. Every number in the three draft case studies listed with its claimed value.
                2. Each number checked against a dashboard, report or person who measured it.
                3. The measurement method and time window written next to each figure.
                4. Any number that cannot be verified softened, ranged or removed.

                ## Notes
                Start from the **Metrics log** template for the list of figures, sources and methods.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every figure in the first three case studies has a recorded source, method and time window, or has been removed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every number in your draft case studies in a metrics log"
                - "Find the dashboard or report behind each baseline and result"
                - "Ask the analyst or owner to confirm figures you cannot see yourself"
                - "Rewrite any unverifiable figure as a range or remove it"
            - name: Your role versus the team's role, stated precisely
              description: |-
                ## Purpose
                The question that sinks most case studies is "what did you personally do?", asked after five minutes of "we". Writing a short contribution statement for each piece, naming who else did what, keeps you honest about shared work and gives you a precise answer instead of an awkward pause.

                ## Milestones
                1. A list of everyone who contributed to each chosen case study and their part.
                2. Two or three sentences stating exactly what you decided, built or led.
                3. Every "we" in the draft reviewed and changed to "I" or a named role where accurate.
                4. The contribution statement checked by one person who worked on the project.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each chosen case study carries a written contribution statement that a former colleague has confirmed as fair."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List everyone who worked on your first case study and their part"
                - "Write three sentences on what you personally decided or built"
                - "Replace vague uses of we in the draft with specific roles"
                - "Ask one former teammate whether the statement is fair"
            - name: Audiences and the decision each case study supports
              description: |-
                ## Purpose
                Hiring managers, promotion committees and prospective clients each read a case study looking for a different answer. Naming your three main audiences and what each must decide (hire, promote, buy) tells you which details to lead with and which to cut in each version.

                ## Milestones
                1. Three main audiences named, with the decision each is making.
                2. Two or three questions each audience is likely to ask written down.
                3. Each chosen case study mapped to the audience it serves best.
                4. A note in the template header recording the intended audience.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note names three audiences with their decisions and questions, and every chosen case study is mapped to one."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Name the three audiences most likely to read your case studies"
                - "Write the decision each audience is making about you"
                - "List the questions each audience tends to ask"
                - "Add an audience field to the case study template header"
            - name: Monthly case study writing session
              description: |-
                ## Purpose
                Case studies get written in a panic the week before an interview, which is when memory and evidence are weakest. A protected ninety-minute session each month, enough to draft or polish one piece, grows the collection by about ten finished studies a year without ever becoming a project in itself.

                ## Milestones
                1. A recurring ninety-minute slot in the calendar, outside meeting-heavy days.
                2. A rule for each session: draft one new piece or finish one existing draft.
                3. Three consecutive sessions kept.
                4. At least one case study moved to ready after the first quarter.

                ## Notes
                If a month is impossible, spend twenty minutes adding notes to the next candidate rather than skipping entirely.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly writing sessions held for three months in a row, with at least one case study marked ready."
                cadence: rolling
              tasks:
                - "Book a ninety-minute writing slot for next month in your calendar"
                - "Choose the case study you will work on before each session"
                - "Draft or finish one case study in the session @recurring(monthly:12)"
                - "Note where you stopped so the next session starts quickly"
            - name: Project close debrief notes while memory is fresh
              description: |-
                ## Purpose
                The details that make a case study vivid (the constraint nobody expected, the option you rejected, the exact moment the metric moved) are gone within a few weeks of a project closing. A fifteen-minute debrief note at each close, in the template's section order, turns future write-ups into editing rather than reconstruction.

                ## Milestones
                1. A short debrief form using the template's eight section headings.
                2. A debrief note written for the most recent project you finished.
                3. The form saved somewhere you can open from your phone.
                4. Debrief notes filed in the candidate list for the next writing session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A debrief note exists for every project closed in the last three months, filed against the candidate list."
                cadence: rolling
              tasks:
                - "Make a short debrief form from the template's section headings"
                - "Write a debrief note for the last project you finished"
                - "Scan the month's closed projects and write any missing debriefs @recurring(monthly:28)"
                - "Add each new debrief to the candidate list"
            - name: Case study index with tags and lengths
              description: |-
                ## Purpose
                Once a collection passes eight or ten pieces, choosing the right one for a particular question takes longer than telling it. A single index listing each case study with its skills, audience, length versions and confidentiality level lets you pick the right three for any application in minutes.

                ## Milestones
                1. An index table with title, dates, skills shown, audience and confidentiality level.
                2. Columns for which versions exist: one page, full write-up, slides, spoken.
                3. Every finished and draft case study entered.
                4. The index sorted so ready pieces sit at the top.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An up-to-date index lists every case study with skills, audience, versions and confidentiality level."
                cadence: rolling
              tasks:
                - "Create an index table with the columns you need"
                - "Enter every finished and draft case study"
                - "Tag each entry with the three skills it shows best"
                - "Update the index with new and changed pieces @recurring(monthly:5)"
            - name: Quarterly refresh and retirement of case studies
              description: |-
                ## Purpose
                Six-year-old case studies about tools nobody uses now can make you look stuck, while a recent one may have new results worth adding. A quarterly pass that updates, demotes or retires pieces keeps the collection pointed at the work you want to be known for now.

                ## Milestones
                1. Every case study reviewed for age, relevance and missing results.
                2. Outdated pieces moved to an archive section rather than deleted.
                3. Updated results or lessons added where they are known.
                4. The index reordered to reflect the refresh.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, every case study has been marked current, updated or archived, with the date of the review in the index."
                cadence: cyclic
              tasks:
                - "Review every case study for age and relevance @recurring(quarterly)"
                - "Move pieces older than your cut-off to an archive section"
                - "Add any new results or lessons to current pieces"
                - "Record the review date in the index"
            - name: Results follow-up on work still landing
              description: |-
                ## Purpose
                Many of the best projects finish before their results arrive: a pricing change shows up in next year's revenue, a safety redesign in a year of incident data, a campaign in renewal rates. Keeping a list of pending results and checking them on a schedule stops strong case studies from ending at "we launched it".

                ## Milestones
                1. A pending results list naming each case study, the metric and when it should be known.
                2. A named person or report for each metric.
                3. The first follow-up check done and recorded.
                4. At least one case study updated with a result that arrived later.

                ## Notes
                Ask permission before contacting people at an employer you have left; a friendly note asking for a rough figure usually works.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pending results list exists with owners and dates, and at least one case study has been updated with a later result."
                cadence: rolling
              tasks:
                - "List case studies whose results were not known at the time"
                - "Write the metric, the owner and the expected date for each"
                - "Check pending results and contact owners where due @recurring(quarterly)"
                - "Update the case study when a result arrives"
            - name: Peer review swap for draft case studies
              description: |-
                ## Purpose
                You cannot see the jargon, the missing context or the buried result in your own write-up. Swapping drafts with a trusted peer in a different team or field each quarter, with three set questions, catches what an interviewer would trip over and gives the peer the same help in return.

                ## Milestones
                1. One or two peers agreed to swap drafts, ideally outside your own team.
                2. Three standard review questions written for every swap.
                3. The first swap completed with written comments both ways.
                4. Changes made and the peer thanked with a note on what improved.

                ## Notes
                Good questions: what problem did I solve, what did I personally do, and what result would you remember tomorrow.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four peer review swaps completed in a year, each with written comments and changes made."
                cadence: rolling
              tasks:
                - "Ask one peer outside your team to swap case study drafts"
                - "Write three questions for every review"
                - "Swap one draft each with a peer reviewer @recurring(quarterly)"
                - "Make the changes and tell your peer what improved"
            - name: Artefact backup before devices or employers change
              description: |-
                ## Purpose
                Laptops are wiped on the last day and accounts close the same hour, and the evidence behind years of case studies can vanish with them. A regular backup of the permitted case study folder to a second place you own means a sudden redundancy or a stolen laptop costs you nothing.

                ## Milestones
                1. A second storage location chosen, such as personal cloud plus an external drive.
                2. The whole case study folder copied to it and opened to check it works.
                3. A reminder set to repeat the backup.
                4. A check that no confidential employer material has crept into the backup.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The case study folder exists in two personal locations, last backed up within the past quarter, with no restricted material in it."
                cadence: rolling
              tasks:
                - "Choose a second storage location you personally own"
                - "Copy the case study folder there and open a file to test it"
                - "Back up the case study folder and check it for restricted material @recurring(quarterly)"
            - name: Yearly case study audit against your target role
              description: |-
                ## Purpose
                Career goals shift, and a collection built for a senior engineer job may not prove anything to a staff-level panel or a product role. Once a year, laying the collection beside the target role's expectations shows which skills are well evidenced and which have no story at all.

                ## Milestones
                1. The target role's published expectations or a real job description saved.
                2. Each expectation matched to the case studies that evidence it.
                3. Gaps listed where no case study shows an expected skill.
                4. Next year's two or three case study candidates chosen to fill the gaps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly audit maps each target role expectation to case studies, lists gaps and names next year's candidates."
                cadence: cyclic
              tasks:
                - "Save the expectations for the role you want next"
                - "Match each expectation to case studies that prove it @recurring(yearly)"
                - "List expectations with no supporting case study"
                - "Choose next year's candidates to fill the biggest gaps"
            - name: Writing a problem statement a stranger cares about
              description: |-
                ## Purpose
                Readers decide in the first paragraph whether a case study matters, and most open with the company's org chart instead of the problem. Practising a three-sentence problem statement (who was hurting, what it cost, why it was hard) makes every piece worth reading on.

                ## Milestones
                1. Five published case studies read and their opening paragraphs compared.
                2. A three-sentence problem statement pattern written down.
                3. Problem statements rewritten for every ready case study.
                4. Each rewrite tested on someone outside the field who can repeat the problem back.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every ready case study opens with a three-sentence problem statement that an outsider has repeated back correctly."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read five strong published case studies and copy out their openings"
                - "Write your three-sentence problem pattern"
                - "Rewrite the opening of each ready case study to fit it"
                - "Ask a friend outside your field to repeat the problem back"
            - name: Explaining approach and trade-offs, not just steps
              description: |-
                ## Purpose
                "First we did discovery, then we built it" tells a reader nothing about your judgement. Showing the two or three options you weighed, the constraint that ruled some out and why you chose what you did is what separates a senior case study from a task list.

                ## Milestones
                1. The approach section of each ready case study rewritten around decisions.
                2. At least two rejected options named, with reasons, in every piece.
                3. The main constraint (time, budget, people, risk) stated plainly.
                4. One reader confirms they can tell what you decided and why.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every ready case study names at least two rejected options with reasons and states its main constraint."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Underline every step in your approach sections that hides a decision"
                - "Write down the options you rejected and why for each piece"
                - "State the single biggest constraint in one sentence"
                - "Ask a reader to summarise what you decided and why"
            - name: Quantifying results honestly when data is thin
              description: |-
                ## Purpose
                Plenty of valuable work never had a dashboard: a process that stopped weekly firefighting, a design that ended support complaints, a document that settled an argument. Learning the honest proxies (hours saved estimated from a calendar, tickets before and after, adoption counts, stated decisions) lets you give a credible result without inventing precision.

                ## Milestones
                1. A list of proxy measures that fit your kind of work.
                2. Each case study without hard numbers given at least one honest proxy.
                3. Estimates labelled as estimates, with the method in a sentence.
                4. Any inflated figure from older drafts corrected.

                ## Notes
                A small, well explained number is more persuasive than a large one you cannot defend.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every case study has at least one result stated as a measure or a labelled estimate with its method."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List proxy measures that suit the work you do"
                - "Pick a proxy for each case study that lacks hard numbers"
                - "Write the estimate method in one sentence beside each figure"
                - "Correct any older figure you cannot now defend"
            - name: Writing up a failed or cancelled project
              description: |-
                ## Purpose
                "Tell me about a project that did not go to plan" is one of the most common interview questions and one of the worst answered. A carefully written case study about a failure, with what you noticed, what you did and what you changed afterwards, shows judgement better than another success.

                ## Milestones
                1. One failed, cancelled or rescued project chosen from the inventory.
                2. The point where it went wrong and the signals you saw written plainly.
                3. Your actions and their effect stated without blaming others.
                4. A section on what you now do differently, with an example of using it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One complete case study about a failed or rescued project, including a lesson shown in later work."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose the failed or cancelled project you learned most from"
                - "Write the moment it went wrong and what you noticed"
                - "Describe what you did without blaming anyone"
                - "Add a later example of using the lesson"
            - name: Before and after visuals and simple diagrams
              description: |-
                ## Purpose
                One diagram of the old process beside the new one, or a chart of the metric moving, often lands faster than three paragraphs. Learning to make plain, readable visuals with any slide or diagram tool gives each case study one image a panel will remember.

                ## Milestones
                1. One visual type chosen per case study: before and after, flow diagram or metric chart.
                2. Visuals drawn with readable labels and no confidential data.
                3. Each visual checked at small size on a phone screen.
                4. Visuals saved in the case study folder in an editable format.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Each ready case study has one clear visual, readable on a phone and free of confidential data."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose one visual type for your strongest case study"
                - "Sketch the visual on paper before opening any tool"
                - "Redraw it with plain labels and hidden sensitive figures"
                - "Check it on a phone screen and simplify anything unreadable"
            - name: Plain-language edit for non-specialist readers
              description: |-
                ## Purpose
                Recruiters, HR partners and senior leaders from other functions read case studies too, and acronyms or internal project names lose them in the first line. A plain-language edit pass, with a short checklist, makes every piece readable by someone outside your team without losing the technical substance.

                ## Milestones
                1. A checklist of acronyms, internal names and jargon to replace or explain.
                2. Every ready case study edited against the checklist.
                3. Sentences longer than about 30 words split.
                4. One non-specialist reader confirms the piece makes sense.

                ## Notes
                Ask the agent to flag jargon and long sentences in a draft, then make the edits yourself so the voice stays yours.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every ready case study has passed a jargon checklist and been read and understood by a non-specialist."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a checklist of acronyms and internal names you use"
                - "Ask the agent to flag jargon and long sentences in one draft"
                - "Edit each ready case study against the checklist"
                - "Ask a non-specialist friend to read one piece and explain it back"
            - name: Studying published case studies from your field
              description: |-
                ## Purpose
                Agencies, consultancies, engineering blogs and design publications put out case studies all the time, and the best of them are free lessons in structure and pacing. Reading one a month with a short note on what works builds a sense of what good looks like in your field.

                ## Milestones
                1. A list of ten sources that publish case studies in your field.
                2. A note format: what the problem was, how results were shown, one thing to borrow.
                3. Six published case studies read and noted.
                4. Two techniques borrowed into your own pieces.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on at least six published case studies exist, with two techniques used in your own collection."
                cadence: rolling
              tasks:
                - "List ten places that publish case studies in your field"
                - "Read one published case study and note one technique @recurring(monthly:16)"
                - "Use one borrowed technique in your next draft"
            - name: Telling a case study aloud in two, five and fifteen minutes
              description: |-
                ## Purpose
                Most case studies are delivered in conversation, not read, and the same story must fit a two-minute screening call, a five-minute interview answer and a fifteen-minute panel. Practising three spoken lengths of your strongest pieces, timed and recorded, means you can expand or cut on the spot.

                ## Milestones
                1. A spoken outline at two, five and fifteen minutes for your top three case studies.
                2. Each version timed and recorded once on your phone.
                3. Recordings played back and filler or detours cut.
                4. Each length delivered once to a real listener.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your top three case studies each have spoken versions at three lengths, timed within thirty seconds of target."
                cadence: rolling
              tasks:
                - "Write a two-minute spoken outline for your strongest case study"
                - "Record yourself telling it and time the recording"
                - "Practise one case study aloud at a new length @recurring(monthly:22)"
                - "Tell the five-minute version to a friend and ask what stuck"
            - name: Anonymising client and employer details
              description: |-
                ## Purpose
                Some of your best work can only be shared if nobody can tell whose it was. Anonymising well (describing the sector and scale rather than the name, converting figures to ratios, rebuilding screenshots) keeps the story intact while respecting your confidentiality rules.

                ## Milestones
                1. Case studies needing anonymisation listed from the rule sheet.
                2. Names replaced with sector and size descriptions.
                3. Absolute figures converted to percentages, ratios or ranges.
                4. Screenshots rebuilt or blurred so no identifying detail remains.

                ## Notes
                Small details give a client away: a city, a product colour, an unusual job title. Ask someone outside the work to guess the client before you share.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every case study tagged for anonymisation has been edited so that a test reader could not identify the client or employer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the case studies your rule sheet says must be anonymised"
                - "Replace names with sector and size descriptions"
                - "Convert absolute figures to ratios or ranges"
                - "Ask a test reader to guess the client and fix anything that gives it away"
            - name: One-page summary version of each case study
              description: |-
                ## Purpose
                A full write-up is right for a promotion pack but too long for a recruiter or a panel member skimming before you walk in. A one-page version with a headline result, three bullets and one visual gives every case study a form that is read rather than filed.

                ## Milestones
                1. A one-page layout with headline, problem, approach bullets, result and visual.
                2. One-page versions made for every ready case study.
                3. Each page checked that the result is visible within five seconds.
                4. The index updated to show which pieces have a one-pager.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every ready case study has a one-page version with the result visible in the top third of the page."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Design a one-page layout with headline, bullets, result and visual"
                - "Cut your strongest case study down to one page"
                - "Make one-pagers for the remaining ready pieces"
                - "Mark the one-pager column in the index"
            - name: Choosing a format, document, slides or web page
              description: |-
                ## Purpose
                Engineers are often asked for a written design narrative, designers for a visual portfolio page, and consultants for slides, and keeping every format for every piece is more work than it is worth. Deciding a primary format per audience, and when to convert, saves hours of reformatting.

                ## Milestones
                1. The formats your target audiences expect listed, with an example of each.
                2. A primary format chosen for the collection and one secondary format.
                3. A rule for when a piece gets converted to the secondary format.
                4. The decision and reasons written in the folder readme.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A primary and secondary format are chosen and recorded in the folder readme with a conversion rule."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask two people in your target role what format they expect"
                - "List the formats each audience prefers"
                - "Choose a primary and secondary format"
                - "Write the decision and the conversion rule in the folder readme"
            - name: Rewriting weak case studies that lack a result
              description: |-
                ## Purpose
                Older drafts often stop at delivery: the system shipped, the report was published, the rebrand went live. Revisiting each one to find the outcome, or reframing it around a different result you can show, turns half-stories into pieces you would actually use.

                ## Milestones
                1. Every case study without a stated result listed.
                2. For each, the possible outcomes and where evidence might be found noted.
                3. Each piece either given a result, reframed or archived.
                4. The pipeline and index updated.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No case study marked ready lacks a stated result; each weak piece is rewritten, reframed or archived."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every case study that ends at delivery"
                - "Write two possible outcomes for each and where to check"
                - "Rewrite, reframe or archive each weak piece"
                - "Update the pipeline status for every piece you touched"
            - name: Stakeholder quotes and endorsements for case studies
              description: |-
                ## Purpose
                One sentence from the client, product owner or senior leader who saw the result is worth more than another paragraph of your own description. Asking for short, specific quotes while relationships are warm, with permission to use them, adds outside proof to your strongest pieces.

                ## Milestones
                1. One or two stakeholders named for each of your top case studies.
                2. A short request written that suggests what the quote might cover.
                3. Quotes received with written permission for how they may be used.
                4. Quotes placed in the case studies with name and role, or anonymised.

                ## Notes
                Make it easy: offer a draft sentence they can edit. Most people are glad to help and slow to write from nothing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least three case studies carry a stakeholder quote with recorded permission for its use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name one stakeholder for each of your top three case studies"
                - "Write a short request with a draft quote they can edit"
                - "Send the requests and record each permission given"
                - "Add the quotes to the case studies"
            - name: Deciding which case studies can go public
              description: |-
                ## Purpose
                Publishing a case study on a personal site or professional profile can bring recruiters and clients to you, but some pieces are only safe in a private interview pack. Making a deliberate public, private or on-request decision for each piece avoids both oversharing and hiding your best work.

                ## Milestones
                1. Every ready case study given a status: public, private or on request.
                2. Each public piece checked against the confidentiality rule sheet again.
                3. Written permission obtained from the employer or client where needed.
                4. Statuses recorded in the index.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every ready case study has a recorded public, private or on-request status, with permissions filed for public ones."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Give every ready case study a public, private or on-request status"
                - "Recheck each public candidate against the rule sheet"
                - "Request written permission where the rules require it"
                - "Record each status and permission in the index"
            - name: Private case study page with controlled access
              description: |-
                ## Purpose
                Emailing attachments to each recruiter loses track of who has what, and public pages are no good for confidential work. A private page or folder with link sharing that you can switch off lets you send case studies on request and withdraw access when a process ends.

                ## Milestones
                1. A hosting option chosen that supports private links and revoking access.
                2. On-request case studies uploaded with a short cover note.
                3. A record kept of who was given which link and when.
                4. Access withdrawn once from a closed process as a test.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A private case study page with revocable links is live, with a log of every link shared."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare two tools that offer private links you can revoke"
                - "Upload on-request case studies with a short cover note"
                - "Start a log of who received which link and when"
                - "Revoke access for any process that has closed"
            - name: Case study set for a promotion committee
              description: |-
                ## Purpose
                Promotion committees often read a packet in a few minutes per candidate and compare it against the criteria for the level above. Selecting two or three case studies that map directly to those criteria, trimmed to the format the committee uses, puts your strongest evidence in the shape they are looking for.

                ## Milestones
                1. The committee's format, length limits and criteria confirmed with your manager.
                2. Two or three case studies chosen that each map to named criteria.
                3. Each piece trimmed to the required length with criteria referenced.
                4. The set reviewed by your manager or sponsor before the deadline.

                ## Notes
                This project produces the case study section only; the wider promotion case and sponsor work belong in their own area.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Two or three case studies mapped to the criteria for the level above are submitted in the committee's format by its deadline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your manager for the committee's format and criteria"
                - "Choose the case studies that map most clearly to the criteria"
                - "Trim each piece to the required length and cite the criteria"
                - "Send the set to your manager for review a week before the deadline"
            - name: Case study selection for a specific interview loop
              description: |-
                ## Purpose
                Each interview loop tests a different mix of skills, and walking in with the same favourite story for every round wastes chances. Reading the job description and interview stages, then assigning a different case study to each likely question, means every interviewer hears fresh evidence.

                ## Milestones
                1. The job description and known interview stages saved in one place.
                2. The five or six skills the loop will probe listed.
                3. A different case study assigned to each skill, with a backup.
                4. A one-page cheat sheet of case study titles, results and numbers.

                ## Notes
                Start from the **Job application** template to keep the role details and your case study map together.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "For one live application, every likely interview skill has an assigned case study and a backup on a one-page sheet."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a job application page for the role and its stages"
                - "List the skills each interview stage is likely to test"
                - "Assign a different case study and a backup to each skill"
                - "Write a one-page sheet with each title, result and key number"
            - name: Case study presentation round for a panel
              description: |-
                ## Purpose
                Senior and design hiring often includes a round where you present one piece of past work for thirty to sixty minutes and take hard questions. Building the deck, rehearsing against the clock and preparing for the five most awkward questions turns a feared round into the one you control.

                ## Milestones
                1. The brief for the round confirmed: length, audience, format and any restrictions.
                2. A deck of about ten slides built from one strong case study.
                3. Two timed rehearsals, one in front of a listener.
                4. Answers prepared for the five hardest questions the panel could ask.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A presentation on one case study is delivered within the time limit after two timed rehearsals and prepared answers to five hard questions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the recruiter for the length, audience and format of the round"
                - "Build a ten-slide deck from your chosen case study"
                - "Rehearse twice against the clock, once with a listener"
                - "Write answers to the five hardest questions the panel could ask"
            - name: Case studies for a client pitch or tender
              description: |-
                ## Purpose
                Buyers choosing a freelancer, agency or consultant want to see that you have solved their kind of problem before. Picking the two closest case studies, rewriting the opening around the prospect's situation and keeping the results prominent makes a pitch feel specific instead of generic.

                ## Milestones
                1. The prospect's problem summarised in two sentences from their brief.
                2. Two case studies chosen that most closely match it.
                3. Openings rewritten to echo the prospect's situation.
                4. Case studies included in the pitch with permission for each.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A pitch or tender is submitted with two tailored case studies, each cleared for use with that prospect."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the prospect's problem in two sentences"
                - "Pick the two case studies closest to it"
                - "Rewrite each opening to match the prospect's situation"
                - "Confirm each case study is cleared for this prospect"
            - name: Case study clearance before leaving an employer
              description: |-
                ## Purpose
                Leaving is the last moment you can easily ask who owns what and whether you may describe it later. Agreeing in writing, before your last day, which projects you may discuss and at what level of detail protects your future case studies and your relationship with the employer.

                ## Milestones
                1. The projects you would like to describe in future listed with planned detail level.
                2. The list discussed with your manager or the right person in HR or legal.
                3. Written confirmation of what you may share, kept in your personal folder.
                4. Contact details saved for people who can confirm results later.

                ## Notes
                Keep this request short and specific. Asking to describe outcomes at an anonymised level is usually easier to approve than asking to keep documents.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Before your last day, written confirmation exists of which projects you may describe and at what level of detail."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the projects you want to describe after leaving"
                - "Note the level of detail you would like to share for each"
                - "Ask your manager or HR to confirm the list in writing"
                - "Save contacts who can confirm results after you leave"
            - name: Case study entry for an industry award
              description: |-
                ## Purpose
                Industry awards in engineering, design, marketing and public service ask for exactly what a case study holds, and a shortlist alone is a credible line on a CV. Turning one strong piece into an entry, matched to the award's criteria and word limits, gets extra use from work already written.

                ## Milestones
                1. Two or three relevant awards found with their criteria and closing dates.
                2. One award chosen and the entry rules saved.
                3. The case study rewritten to the award's headings and word limits.
                4. Employer or client permission confirmed and the entry submitted before closing.

                ## Notes
                Check whether the award charges an entry fee and who would pay it before investing hours.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One award entry built from a case study is submitted before the closing date, with permission recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find three industry awards that accept project entries"
                - "Choose one and save its criteria and closing date"
                - "Rewrite a case study to the award's headings and word limits"
                - "Confirm permission and submit the entry before closing"
            - name: Engineer's technical case study with system detail
              description: |-
                ## Purpose
                Engineering interviewers want the architecture, the scale, the failure modes and the numbers, not a product summary. A technical case study with a system diagram, the load or latency figures, the design document trail and the incident data shows senior judgement in the form engineers trust.

                ## Milestones
                1. A system diagram showing before and after architecture.
                2. Scale, latency, cost or reliability figures verified and stated with units.
                3. The key design decision and its alternatives described with trade-offs.
                4. Links or summaries of design documents, reviews and incidents saved where permitted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One technical case study includes an architecture diagram, verified system figures and a documented design trade-off."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draw the before and after architecture for one system you changed"
                - "Collect scale, latency or reliability figures with units"
                - "Write the main design trade-off and the options you rejected"
                - "Save permitted design doc and incident summaries from the month @recurring(monthly:9)"
            - name: Creative case study that shows process, not only the final piece
              description: |-
                ## Purpose
                Galleries of finished work tell a creative director what you can make but not how you think. Showing the brief, early sketches or rejected routes, the feedback that changed direction and the measured response to the final piece makes a designer, writer or producer's case study far more hireable.

                ## Milestones
                1. The original brief and constraints summarised in a short paragraph.
                2. Three to five process images: research, sketches, rejected routes, iterations.
                3. The feedback or test that changed the direction described.
                4. The final work shown with the response it got, measured where possible.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One creative case study shows the brief, at least three process stages, the turning point and the final piece with its response."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Summarise the brief and constraints for one creative project"
                - "Pick three to five process images, including a rejected route"
                - "Write the feedback or test that changed direction"
                - "Add the final piece with any measured response"
            - name: Case study for policy, operations or analysis work
              description: |-
                ## Purpose
                Analysts, operations staff and policy advisers often produce documents and decisions rather than products, which makes their work feel hard to show. Framing the case study around the decision your analysis changed, the people it affected and what happened next makes invisible desk work concrete.

                ## Milestones
                1. The decision or process your work influenced named plainly.
                2. The question, the data or sources and your method described in a paragraph.
                3. The people or budget affected quantified where permitted.
                4. What happened after the decision recorded, including any follow-up review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One case study about analysis or operations work names the decision it changed and the outcome that followed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Name one decision your analysis or process work changed"
                - "Describe the question, sources and method in a paragraph"
                - "Quantify the people or budget affected"
                - "Record what happened after the decision"
            - name: Manager's case study about leading a team through change
              description: |-
                ## Purpose
                Once you manage people, interviewers ask less about what you built and more about how the team performed and grew. A case study about a reorganisation, a turnaround or a hard hire, with team outcomes and the choices you made about people, is the core evidence for any management role.

                ## Milestones
                1. One change you led chosen, with the team's starting position described.
                2. Your people decisions (hiring, coaching, restructuring, hard conversations) set out.
                3. Team outcomes shown: delivery, retention, engagement or promotions.
                4. Details about individuals anonymised so no one can be identified.

                ## Notes
                Never include a named person's performance issues. Describe the situation and your approach, not the individual.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One leadership case study shows team outcomes and your people decisions, with no individual identifiable."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose one change you led as a manager"
                - "Describe the team's starting point and your people decisions"
                - "Gather team outcomes such as delivery, retention or promotions"
                - "Add a team outcomes case study from the past year @recurring(yearly)"
            - name: Freelancer's client case studies for repeat work
              description: |-
                ## Purpose
                Freelancers and contractors win most new work through proof that they have done it before, and a short case study per client engagement does that job better than a list of logos. Asking each client at the end of a contract for permission and a result keeps the collection growing with the business.

                ## Milestones
                1. A standard close-of-contract question set for permission, result and quote.
                2. Case studies written for the last three client engagements.
                3. Each client's permission level recorded.
                4. Case studies linked from your proposals or profile where cleared.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Case studies exist for the last three client engagements, each with a recorded permission level."
                cadence: rolling
              tasks:
                - "Write a close-of-contract question set for permission and results"
                - "Draft case studies for your last three client engagements"
                - "Record each client's permission level"
                - "Ask recent clients for results and permission @recurring(quarterly)"
            - name: Early-career case studies from coursework and small projects
              description: |-
                ## Purpose
                Graduates and people in their first jobs often believe they have nothing worth a case study, then struggle when asked for an example. A group project, an internship task, a volunteer role or a final-year dissertation written with the same problem, approach and result structure shows exactly the thinking employers look for.

                ## Milestones
                1. Three candidate projects listed from study, internships, volunteering or first jobs.
                2. Two written up in the master template, with your part stated clearly.
                3. At least one result given, even a small or estimated one.
                4. Both pieces reviewed by a tutor, careers adviser or first manager.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two early-career case studies are written in the template and reviewed by a tutor, adviser or manager."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List three projects from study, internships or volunteering"
                - "Write two of them up in the master template"
                - "Add a result to each, estimated if needed"
                - "Ask a tutor or careers adviser to review both"
            - name: Case studies translated for a career change
              description: |-
                ## Purpose
                When moving into a new field, your best case studies are full of the old field's vocabulary and measures. Reframing two or three around skills the new field values (stakeholder management, data, process design, customer insight) makes past work count as evidence instead of history.

                ## Milestones
                1. Five skills the target field values listed from real job adverts.
                2. Two or three existing case studies chosen that show those skills.
                3. Each rewritten in the new field's language with old jargon removed.
                4. A practitioner in the new field confirms the pieces make sense to them.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two or three case studies are rewritten for the target field and confirmed as clear by a practitioner in it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull five valued skills from job adverts in the new field"
                - "Choose the case studies that show those skills best"
                - "Rewrite each in the new field's vocabulary"
                - "Ask a practitioner in the field to read one and comment"
            - name: Multi-year programme case study told in phases
              description: |-
                ## Purpose
                Long programmes (a platform migration, a regulatory change, a brand overhaul) are hard to tell because they lose shape over two or three years. Structuring them as phases, each with its own problem, decision and result, keeps a large piece of work readable and lets you pull out a single phase for a short answer.

                ## Milestones
                1. The programme split into three to five phases with dates.
                2. Each phase written with its own problem, key decision and result.
                3. An overview paragraph tying the phases to the overall outcome.
                4. One phase extracted as a standalone short case study.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One multi-year programme case study is written in phases, with one phase also available as a standalone piece."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Split your longest programme into three to five dated phases"
                - "Write the problem, decision and result for each phase"
                - "Write an overview paragraph for the whole programme"
                - "Extract the strongest phase as a short standalone piece"
            - name: Cross-team influence case study for staff-level roles
              description: |-
                ## Purpose
                Staff, principal and senior specialist roles are judged on influence beyond your own team: a standard others adopted, a direction you set without authority, a problem you solved across five groups. A case study centred on how you moved other people, with evidence of adoption, is the piece those panels look for first.

                ## Milestones
                1. One piece of cross-team work chosen where you had no direct authority.
                2. The teams involved, their initial positions and your approach described.
                3. Evidence of adoption: teams using the standard, decisions referencing your work.
                4. The piece reviewed by a senior colleague who saw the influence happen.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One influence case study shows how several teams adopted your work, confirmed by a senior colleague."
                cadence: rolling
              tasks:
                - "Choose one piece of cross-team work you led without authority"
                - "Describe each team's starting position and how you won them over"
                - "Record new evidence of adoption across teams @recurring(quarterly)"
                - "Ask a senior colleague who saw it to review the draft"
            - name: Case studies mapped to a competency framework
              description: |-
                ## Purpose
                Large employers and professional bodies assess against a published competency framework, and an assessor scores what is labelled clearly. Mapping each case study to specific competencies, with the evidence sentence highlighted, makes chartership applications, levelling reviews and competency interviews far faster to prepare.

                ## Milestones
                1. The framework you are assessed against saved, with each competency listed.
                2. Every ready case study tagged with the competencies it evidences.
                3. The single strongest evidence sentence marked for each tag.
                4. Competencies with weak or no evidence listed for future work.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table maps every framework competency to case studies with marked evidence sentences, and gaps are listed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Save the competency framework your employer or body uses"
                - "Tag each ready case study with the competencies it shows"
                - "Mark the strongest evidence sentence for every tag"
                - "List competencies that still lack evidence"
            - name: Flagship long-form case study
              description: |-
                ## Purpose
                Experienced practitioners are often remembered for one piece of work, and a long-form flagship, around 2,000 words with visuals, is the version you send when someone wants to understand how you really work. Writing it slowly, with several reviewers, produces the piece you will refer back to for years.

                ## Milestones
                1. One flagship project chosen that represents the work you want to be known for.
                2. A long-form draft of about 2,000 words with at least three visuals.
                3. Reviews from a peer, a senior colleague and a non-specialist.
                4. A final version published or held on request, with a one-page summary linked.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A reviewed long-form flagship case study with three visuals and a linked one-page summary is finished."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose the project you most want to be known for"
                - "Outline the long form with section headings and planned visuals"
                - "Write the full draft over several writing sessions"
                - "Collect reviews from a peer, a senior colleague and a non-specialist"
            - name: Coaching colleagues to write their own case studies
              description: |-
                ## Purpose
                Managers, team leads and senior specialists can multiply the value of this practice by helping others write up their work before reviews and job moves. Running a short session with the template and offering one review each quarter helps your team's work get recognised and sharpens your own writing.

                ## Milestones
                1. A thirty-minute session outline using the master template and one example.
                2. The session run once for your team or a peer group.
                3. At least three colleagues' drafts reviewed with written comments.
                4. Feedback from participants noted and the session improved.

                ## Notes
                Share the template, not your own confidential case studies, as the worked example.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One case study writing session has been run and at least three colleagues' drafts reviewed with written comments."
                cadence: rolling
              tasks:
                - "Outline a thirty-minute session around the master template"
                - "Prepare an anonymised example case study for the session"
                - "Run the session for your team or a peer group"
                - "Offer one draft review to a colleague @recurring(quarterly)"
---

# Professional Case Study Collection

This area is for engineers, designers, analysts and other knowledge workers who do good work and then struggle to explain it when an interviewer says "walk me through a project you are proud of". It starts with foundations (an inventory of candidate projects, confidentiality rules, a master template, evidence and verified numbers), moves through the routines that keep the collection growing, the writing and telling skills that make a case study persuasive, improvements and format decisions, the moments when the collection is used (promotion panels, interview loops, pitches, awards), variants for engineers, creatives, managers, freelancers and people early in their careers, and ends with flagship, staff-level and coaching work.

What repeats is a monthly writing session, a monthly scan of closed projects for debrief notes, a monthly index check, quarterly refreshes, peer review swaps and artefact backups, results follow-ups on work that is still landing, and a yearly audit against the role you want next. The Portfolio piece, Metrics log and Job application templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
