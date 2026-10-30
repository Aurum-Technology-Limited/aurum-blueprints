---
id: tech-certifications.system-design-interview-preparation
name: System Design Interview Preparation
description: "A route to system design rounds: the format at each target company, a reusable framework, estimation drills, storage, caching and messaging trade-offs, classic designs, spoken mocks and debriefs."
category: personal
version: 1.0.0
tags: [tech-certifications, system-design-interview-preparation, engineer, system-design, interviews, distributed-systems, architecture, mock-interviews]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - remediation-plan
    - reading-queue
    - metrics-log
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: System Design Interview Preparation
          description: "Preparing for system design interviews: requirements, capacity estimates, storage and caching choices, trade-offs, common designs and mock sessions out loud."
          projects:
            - name: System design round format at each target company
              description: |-
                ## Purpose
                Companies run the design round very differently: some want a product design for a mid-level role, others an infrastructure design with heavy numbers, and some use a shared online whiteboard while others use a doc or plain conversation. Writing down what each target company actually does, from the recruiter and the prep material they send, stops you practising for a round you will not face.

                ## Milestones
                1. A one-page note per target company with the round's length, tool, number of design rounds and the level it is pitched at.
                2. Any official preparation guide or video from each company saved with the date you found it.
                3. The recruiter's answers to your format questions recorded in their own words.
                4. A short list of the design styles you must prepare for, such as product, infrastructure or API-first.

                ## Notes
                Ask the recruiter directly. They are usually happy to say how many design rounds there are, how long each runs and which tool is used, and the answer beats any forum post.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each target company has a dated note giving its design round length, tool, level and style, sourced from the recruiter or official material."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the companies where you expect a system design round this year"
                - "Email each recruiter asking for the round length, tool and level expected"
                - "Save any official interview preparation guide each company publishes"
                - "Recheck the format notes for every company still on your list @recurring(quarterly)"
            - name: Design fundamentals skills audit
              description: |-
                ## Purpose
                Most engineers are strong in the parts of the stack they have run in production and thin everywhere else, and the design round finds the thin parts quickly. Rating yourself honestly on twenty or so topics, from load balancing to consistency models, turns a vague worry into a ranked list of what to study first.

                ## Milestones
                1. A grid of around twenty design topics, each rated from one to four with a sentence of evidence.
                2. Each rating marked as production experience, study only or untested.
                3. The five weakest topics ranked by how often they come up in rounds.
                4. The audit dated so it can be repeated after six weeks of practice.

                ## Notes
                Start from the **Skills matrix** template. Rate by what you could explain to an interviewer without notes, not what you have read about.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated skills grid covers at least twenty design topics with evidence for each rating and a ranked list of the five weakest."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down twenty design topics, from load balancers to consensus"
                - "Rate each topic from one to four with one sentence of evidence"
                - "Mark which ratings come from production work and which from reading"
                - "Rank the five weakest topics by how often interviews ask about them"
            - name: Recorded baseline design under a 45-minute clock
              description: |-
                ## Purpose
                Before any study, designing one familiar product alone with a timer and a screen recording shows your real starting point: where you freeze, where you ramble and how much of the clock goes on requirements. Engineers are often surprised to find they spent twenty minutes before drawing a single box, and that is the most useful thing to learn in week one.

                ## Milestones
                1. One design, such as a link shortener or a photo sharing service, recorded start to finish against a 45-minute timer.
                2. The time spent on requirements, estimates, high-level design and detail noted from the recording.
                3. Three moments where you went silent or lost the thread written down with timestamps.
                4. The recording and notes stored as the baseline to compare later mocks against.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A timed screen recording of one full design exists, with a written breakdown of minutes per phase and three noted weak moments."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick one familiar product to design and start a screen recording"
                - "Talk through the whole design aloud with a 45-minute timer running"
                - "Note from the playback how many minutes each phase took"
                - "Write down three moments where you stalled, with timestamps"
            - name: Virtual whiteboard and drawing set-up
              description: |-
                ## Purpose
                Remote design rounds are usually drawn in a shared online whiteboard, and fumbling with shapes and arrows wastes minutes and breaks your train of thought. Choosing one tool, building a small library of reusable shapes and practising until a five-box diagram takes under two minutes removes the friction before it costs you.

                ## Milestones
                1. One online whiteboard tool chosen, matching the one your target companies use where known.
                2. A saved set of shapes for clients, load balancers, services, caches, queues and databases.
                3. A five-component diagram drawn and labelled in under two minutes.
                4. Microphone, camera and a second screen tested together on a video call.

                ## Notes
                Keep diagrams plain. Interviewers want labelled boxes and arrows with the data flow clear, not colours and icons.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A chosen whiteboard tool holds a saved shape set, and a timed five-component diagram has been drawn in under two minutes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the online whiteboard your target companies are most likely to use"
                - "Build a saved shape set for the common components"
                - "Time yourself drawing and labelling a five-box diagram"
                - "Test microphone, camera and screen share on a call with a friend"
            - name: Personal answer framework with time boxes
              description: |-
                ## Purpose
                A design round without structure drifts into whatever the candidate knows best, and interviewers notice when requirements or bottlenecks are skipped. A written framework you trust, with rough minutes for each step, gives you something to fall back on when nerves hit and lets the interviewer see you driving the conversation.

                ## Milestones
                1. A one-page framework covering requirements, scale, API, data model, high-level design, detailed components and bottlenecks.
                2. A rough time allocation for each step that adds up to the round length you expect.
                3. Three or four standard clarifying questions written for the opening minutes.
                4. The framework used in two practice designs and adjusted from what went wrong.

                ## Notes
                Treat the framework as a checklist, not a script. Interviewers often redirect you mid-way, and the skill is following them while still covering the steps that matter.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page framework with time boxes per step exists and has been tested and revised after two practice designs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the steps of your framework on a single page"
                - "Give each step a rough number of minutes for a typical round"
                - "Draft four clarifying questions you will ask in the first minutes"
                - "Revise the framework after using it in two practice designs"
            - name: Latency and capacity numbers reference sheet
              description: |-
                ## Purpose
                Estimates fall apart when you cannot remember whether a disk seek or a cross-region round trip is slower, or how many seconds are in a day. A one-page sheet of the numbers you will actually use, memorised well enough to say aloud, makes every capacity estimate faster and more believable.

                ## Milestones
                1. One page listing memory, SSD, disk and network latencies to the right order of magnitude.
                2. Powers of two, seconds per day and month, and typical sizes for a row, an image and a minute of video included.
                3. Rough throughput figures for a single database node, cache node and web server noted with their sources.
                4. The sheet recited from memory with no more than two misses.

                ## Notes
                Orders of magnitude matter more than precision. Saying a cache read is roughly a thousand times faster than a cross-region call is what interviewers want to hear.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page numbers sheet exists and you can recite it from memory with two misses or fewer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect the latency and size figures you will use onto one page"
                - "Add powers of two and seconds per day, month and year"
                - "Recite the sheet aloud from memory and mark what you missed"
                - "Update the sheet with newer hardware figures you have read about @recurring(quarterly)"
            - name: Dated preparation plan back from the first round
              description: |-
                ## Purpose
                System design skill grows slowly, through repeated spoken practice, so cramming the week before rarely works. Counting back from your first expected round and placing study, classic designs and mocks into the weeks between gives you a plan you can check progress against, and tells you early if the date needs to move.

                ## Milestones
                1. A target date for the first real design round, or a window if not yet booked.
                2. Each week up to that date assigned a theme, such as storage, caching or classic designs.
                3. At least six peer or paid mocks placed in the plan, the last two in the final fortnight.
                4. A check-in date each month where the plan is compared with progress.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A week-by-week plan to a target round date exists, with themes per week and at least six mocks scheduled."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the date or window of your first expected design round"
                - "Assign a study theme to each week before that date"
                - "Place at least six mock sessions in the calendar"
                - "Compare progress with the plan and move the next weeks if needed @recurring(monthly:5)"
            - name: Design notebook for every practice problem
              description: |-
                ## Purpose
                Without notes, the third time you design a chat system feels like the first, and the lessons from each mock vanish. A notebook with one page per problem, holding the final diagram, the key numbers and the trade-offs you defended, becomes the revision pack you read the night before a real round.

                ## Milestones
                1. A notebook or folder with a fixed page layout: requirements, estimates, diagram, choices, open questions.
                2. Every practice design so far written up in that layout.
                3. Each page tagged with the components it uses, such as queue, cache or sharding.
                4. A short index listing every problem with the date last practised.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A design notebook with a consistent page layout holds every practice problem, tagged by component and indexed by date."
                cadence: rolling
              tasks:
                - "Set up a notebook page layout with five fixed headings"
                - "Write up your baseline design in the new layout"
                - "Tag each page with the main components it uses"
                - "Reread the three oldest notebook pages and refresh them @recurring(monthly:28)"
            - name: Twice-weekly design practice blocks
              description: |-
                ## Purpose
                Ninety focused minutes twice a week does more than a single weekend binge, because design reasoning improves through repeated spoken attempts with time to reflect between them. Fixed days in the calendar protect the practice from the work week, and each block ends with a notebook page so nothing is lost.

                ## Milestones
                1. Two recurring blocks of about ninety minutes in the calendar on fixed days.
                2. Each block split between one timed design and review of the result.
                3. Eight consecutive weeks with both blocks held or rescheduled within the week.
                4. A notebook page written at the end of every block.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks show two practice blocks held each week, each with a notebook page."
                cadence: rolling
              tasks:
                - "Choose two weekday slots you can protect for ninety minutes"
                - "Run a timed design and write the notebook page in the same block @recurring(weekly:tue,sat)"
                - "Decide in advance which problem each block will tackle"
                - "Move a missed block to another day in the same week rather than skipping"
            - name: Weekly peer mock interview exchange
              description: |-
                ## Purpose
                Practising alone never reproduces the pressure of someone asking why you chose that database. A standing swap with one or two peers, where you take turns as candidate and interviewer, gives you weekly spoken practice and teaches you how the round looks from the other side of the table.

                ## Milestones
                1. One or two peers at a similar level agreed to a weekly swap.
                2. A shared list of problems so neither person sees a design in advance.
                3. A simple feedback form covering structure, depth, trade-offs and communication.
                4. Ten swaps completed, with written feedback from each.

                ## Notes
                Former colleagues, online engineering communities and alumni groups are good places to find partners. Agree to give specific, honest feedback from the start.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten peer mock swaps are logged with written feedback received for each session as candidate."
                cadence: rolling
              tasks:
                - "Message two engineers you trust asking to swap weekly design mocks"
                - "Build a shared problem list that the candidate does not see beforehand"
                - "Agree a four-heading feedback form with your partners"
                - "Hold the weekly mock swap and save the feedback @recurring(weekly:thu)"
            - name: Feedback gap tracker and fixes
              description: |-
                ## Purpose
                Feedback from mocks is only useful if the same comment stops appearing. Collecting every piece of feedback in one place, grouping it into themes such as skipped estimates or shallow storage choices, and writing a fix for each theme turns scattered comments into a short list you work through.

                ## Milestones
                1. All mock feedback so far copied into a single list with dates and sources.
                2. Feedback grouped into no more than six recurring themes.
                3. A concrete fix written for each theme, with a practice step and a test.
                4. Each theme marked closed once two mocks in a row pass without it.

                ## Notes
                Start from the **Remediation plan** template. The most common theme is not knowledge but structure: running out of time before the bottlenecks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A gap tracker holds every mock's feedback grouped into themes, each with a fix and a closed or open status."
                cadence: rolling
              tasks:
                - "Copy every piece of mock feedback you have into one list"
                - "Group the feedback into at most six themes"
                - "Review the week's feedback and update the theme list @recurring(weekly:sun)"
                - "Close any theme that two consecutive mocks no longer show @recurring(monthly:3)"
            - name: Daily five-minute estimation drill
              description: |-
                ## Purpose
                Back-of-envelope estimation is a muscle, and candidates who do it rarely either freeze or make an arithmetic slip that undermines the rest of the design. Five minutes a day estimating one real product, such as daily photo uploads for a social app, makes the maths fast enough to do aloud without losing your thread.

                ## Milestones
                1. A list of thirty estimation prompts covering requests per second, storage per year and bandwidth.
                2. One prompt done each day in under five minutes, written in a single line.
                3. Each answer checked for order of magnitude against a public figure where one exists.
                4. Thirty consecutive days of drills completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty consecutive days of five-minute estimation drills are logged, each with a one-line answer."
                cadence: rolling
              tasks:
                - "Ask the agent to draft thirty estimation prompts across different products"
                - "Do one estimation prompt in five minutes or less @recurring(daily)"
                - "Compare a few answers with public figures for those products"
                - "Note any arithmetic slip and the habit that would have caught it"
            - name: Weekly architecture reading habit
              description: |-
                ## Purpose
                Engineering blogs, conference talks and public incident reports show how real companies made design choices under real constraints, which is exactly the material interviewers reward. One piece a week, summarised in three lines, builds a store of concrete examples you can name when defending a choice.

                ## Milestones
                1. A reading queue of at least fifteen engineering blog posts, talks and incident reports.
                2. One piece read or watched each week with a three-line summary.
                3. Each summary linked to the notebook topics it supports.
                4. Twelve summaries written over three months.

                ## Notes
                Start from the **Reading queue** template. Public incident reports are especially useful, because they show where designs fail.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A reading queue of fifteen or more items exists and twelve three-line summaries are linked to notebook topics."
                cadence: rolling
              tasks:
                - "Collect fifteen engineering blog posts, talks and incident reports"
                - "Read one piece and write a three-line summary @recurring(weekly:wed)"
                - "Link each summary to the notebook topics it supports"
                - "Add new posts and incident reports to the reading queue @recurring(monthly:20)"
            - name: Monthly full-length recorded mock and readiness score
              description: |-
                ## Purpose
                Weekly peer mocks are short and friendly, so a monthly full-length session, recorded and scored against the same rubric each time, is the honest measure of progress. Tracking the score over months tells you when you are ready to book real rounds, and the recording shows exactly where the clock went.

                ## Milestones
                1. A fixed scoring rubric with five areas: requirements, estimates, design, trade-offs and communication.
                2. One full-length mock recorded each month on a problem you have not practised.
                3. Each recording scored against the rubric and the time per phase compared with your framework.
                4. Four monthly scores plotted, with a rising trend or a clear reason why not.

                ## Notes
                Start from the **Metrics log** template. Use a fresh problem each month, so the score measures skill rather than memory.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four monthly recorded mocks are scored against the same five-area rubric and logged with time per phase."
                cadence: rolling
              tasks:
                - "Write a five-area scoring rubric for full-length mocks"
                - "Record a full-length mock on an unpractised problem @recurring(monthly:12)"
                - "Score the recording and log the result with time per phase @recurring(monthly:14)"
                - "Compare the time per phase with your framework's time boxes"
            - name: Design concepts flashcard deck
              description: |-
                ## Purpose
                Terms such as consistent hashing, write-ahead log, quorum reads and bloom filter need to come out smoothly under pressure, with a one-sentence explanation and a use case. A small spaced-repetition deck reviewed for ten minutes a day keeps that vocabulary ready without taking study time from full designs.

                ## Milestones
                1. A deck of at least eighty cards, each with a concept, a one-line definition and a typical use.
                2. Cards added from every notebook page and reading summary.
                3. Daily reviews kept up for six weeks with the backlog under control.
                4. Any card failed three times turned into a short practice explanation recorded aloud.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A spaced-repetition deck of eighty or more design cards has been reviewed daily for six weeks."
                cadence: rolling
              tasks:
                - "Install a spaced-repetition app and create a design concepts deck"
                - "Write the first forty cards from your skills audit topics"
                - "Review the deck for ten minutes @recurring(daily)"
                - "Record a spoken explanation for any card failed three times"
            - name: Weekly teardown of a product you use
              description: |-
                ## Purpose
                Every app on your phone is a free design problem: how does the ride app match drivers, how does the music app start playback in under a second. Spending half an hour a week sketching how a product you use might work trains the habit of thinking in components, and gives you fresh problems that no prep book has covered.

                ## Milestones
                1. A list of twenty products you use, each with one interesting behaviour to explain.
                2. One teardown a week sketched with a diagram and three guesses about its design.
                3. Guesses checked against any public engineering material for that product.
                4. Ten teardowns added to the design notebook.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Ten weekly teardowns are in the design notebook, each with a diagram and guesses checked against public material."
                cadence: rolling
              tasks:
                - "List twenty products you use with one behaviour each worth explaining"
                - "Sketch how one listed product might work in thirty minutes @recurring(weekly:fri)"
                - "Search for public engineering posts that confirm or correct your guesses"
                - "Add the teardown to the design notebook with its tags"
            - name: Requirements and scoping questions drill
              description: |-
                ## Purpose
                The first five minutes decide whether the rest of the round goes well: a candidate who asks who the users are, which features matter and what scale to expect designs the right system, while one who starts drawing designs the wrong one. Practising scoping on its own, separate from full designs, makes those questions automatic.

                ## Milestones
                1. A checklist of functional, non-functional and scale questions for the opening minutes.
                2. Twenty problem prompts scoped in five minutes each, with written requirements.
                3. Each scoping exercise ending in a short agreed list of in-scope and out-of-scope features.
                4. A peer confirming in a mock that your scoping was clear and quick.

                ## Notes
                Write the agreed requirements on the whiteboard where the interviewer can see them. It anchors the conversation and protects you if the scope shifts later.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty prompts have been scoped in five minutes each with written in-scope and out-of-scope lists, and a peer has confirmed clear scoping."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a checklist of functional, non-functional and scale questions"
                - "Scope five design prompts in five minutes each"
                - "Write in-scope and out-of-scope lists for each prompt"
                - "Ask your mock partner to rate only your scoping in the next session"
            - name: Capacity estimation from users to servers
              description: |-
                ## Purpose
                Interviewers want to see you turn daily active users into requests per second, storage per year and a rough count of machines, and then use those numbers to justify design choices. Working through the chain on a dozen products, including peak factors and read to write ratios, makes the estimate part of the design rather than a ritual.

                ## Milestones
                1. A written chain from daily users to average and peak requests per second.
                2. Storage per year and bandwidth estimated for six different products.
                3. Each estimate followed by one design decision it changes, such as needing sharding or a CDN.
                4. Estimates completed aloud in under five minutes in two mocks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six products have full capacity estimates with a linked design decision each, and two mocks show estimates done aloud in under five minutes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the steps from daily users to peak requests per second"
                - "Estimate storage per year and bandwidth for six products"
                - "Write the design decision each estimate leads to"
                - "Time yourself giving one estimate aloud in a mock"
            - name: API design and data modelling for interviews
              description: |-
                ## Purpose
                A clear API and data model make the rest of the design concrete, and interviewers often ask for both before any boxes appear. Practising endpoint design, pagination, idempotency keys and choosing entities and keys around access patterns gives you a fast, credible way into any problem.

                ## Milestones
                1. Endpoints written for five classic products, with request and response fields.
                2. Pagination, rate limits and idempotency handled explicitly in at least two of them.
                3. A data model for each, with primary keys and indexes chosen for the main queries.
                4. A short note on when to pick REST, gRPC or a streaming connection.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five products have written APIs and data models with keys chosen by access pattern, plus a note on choosing API styles."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the core endpoints for a link shortener and a chat app"
                - "Add pagination and idempotency keys to the endpoints that need them"
                - "Choose primary keys and indexes from the main queries"
                - "Write a half-page note on REST, gRPC and streaming connections"
            - name: Storage choices by access pattern
              description: |-
                ## Purpose
                The question interviewers ask most is why this database, and the strongest answer starts from how the data is read and written, not from a favourite product. Building a comparison of relational, key-value, wide-column, document, object storage and search indexes, each tied to the access patterns it suits, gives you a reasoned answer every time.

                ## Milestones
                1. A one-page comparison of six storage types with strengths, limits and typical uses.
                2. Each type matched to at least two classic interview problems.
                3. A spoken two-minute answer for why you would pick each type in a given case.
                4. One mock where the storage choice was challenged and defended with access patterns.

                ## Notes
                Name storage types by category in the round and mention a product only as an example. Interviewers care about the properties, not the brand.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page storage comparison exists, each type is matched to two problems, and one mock shows a storage choice defended by access pattern."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a comparison table of six storage types and their limits"
                - "Match each storage type to two classic interview problems"
                - "Record a two-minute spoken answer for one storage choice"
                - "Ask your mock partner to challenge your next database choice"
            - name: Caching layers and invalidation
              description: |-
                ## Purpose
                Adding a cache is easy to say and hard to defend: interviewers follow up with what happens on a miss, how stale data is handled and what stops a thundering herd. Learning the main patterns, cache-aside, write-through and write-behind, along with eviction, expiry and CDN caching, lets you answer the follow-up rather than just the first question.

                ## Milestones
                1. Notes on cache-aside, write-through and write-behind with a use case for each.
                2. Eviction policies and expiry settings explained in your own words.
                3. A written answer on stampede protection and hot keys.
                4. Browser, CDN, application and database caching layers placed on one diagram.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes cover three caching patterns, eviction, stampede protection and a four-layer caching diagram."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a short note on each of three cache write patterns"
                - "Explain two eviction policies and when expiry is enough"
                - "Draft your answer to what happens when a hot key expires"
                - "Draw one diagram showing caching from browser to database"
            - name: Partitioning, replication and consistency
              description: |-
                ## Purpose
                Once a design outgrows one machine, the conversation turns to shard keys, hot partitions, replica lag and what users see when nodes disagree. These are the topics that separate a mid-level answer from a senior one, and they reward slow, careful study more than any other part of the round.

                ## Milestones
                1. Notes on range, hash and directory partitioning, with a hot-partition example for each.
                2. Leader and follower, multi-leader and leaderless replication compared in a table.
                3. Strong, eventual and read-your-writes consistency explained with a product example each.
                4. The CAP and PACELC framing summarised in a paragraph you can say aloud.

                ## Notes
                Interviewers rarely want theory recited. They want you to say what a user would see if a replica lagged, and whether that matters for this product.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes cover three partitioning schemes, three replication models and three consistency levels, each with a product example."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write notes on three partitioning schemes with a hot-partition case"
                - "Compare three replication models in a short table"
                - "Give a product example for each of three consistency levels"
                - "Practise explaining replica lag to a non-specialist in two minutes"
            - name: Queues, logs and asynchronous processing
              description: |-
                ## Purpose
                Many designs hinge on moving work off the request path: sending notifications, processing uploads, fanning out feeds. Knowing the difference between a work queue and a partitioned log, and how delivery guarantees, idempotent consumers, ordering and backpressure work, lets you add asynchronous parts without hand-waving.

                ## Milestones
                1. A comparison of work queues and partitioned logs with a use case for each.
                2. At-most-once, at-least-once and effectively-once delivery explained with the cost of each.
                3. An idempotent consumer pattern written out for a payment or notification example.
                4. Dead-letter handling and backpressure added to one notebook design.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes compare queues and logs, explain three delivery guarantees and show an idempotent consumer, and one notebook design includes dead-letter handling."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare a work queue and a partitioned log in half a page"
                - "Write the trade-offs of three delivery guarantees"
                - "Sketch an idempotent consumer for a notification sender"
                - "Add a dead-letter path to one design in your notebook"
            - name: Reliability, failure modes and operations
              description: |-
                ## Purpose
                Senior interviewers ask what breaks: a dependency slows down, a region goes dark, a deploy goes wrong. Having ready answers on timeouts, retries with jitter, circuit breakers, rate limiting, health checks, service level objectives and safe rollouts shows you have thought about the system on its worst day, not only its best.

                ## Milestones
                1. A failure checklist covering slow dependencies, node loss, region loss and bad deploys.
                2. Timeouts, retries with backoff and jitter, and circuit breakers explained with an example.
                3. Service level objectives, alerts and dashboards described for one notebook design.
                4. Rollout and rollback steps written for a schema change in a live system.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A failure checklist exists and one notebook design carries objectives, alerts, retry rules and a written schema-change rollout."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a failure checklist for dependencies, nodes, regions and deploys"
                - "Explain retries with jitter and circuit breakers in your own words"
                - "Add objectives and alerts to one design in the notebook"
                - "Write the rollout steps for changing a column in a busy table"
            - name: Security and privacy in a design answer
              description: |-
                ## Purpose
                Security often comes up late in the round, and a candidate who has nothing to say about authentication, authorisation or personal data looks unfinished. A short, repeatable set of points, covering identity, tokens, encryption in transit and at rest, secrets, abuse and data retention, lets you cover it in two minutes without derailing the design.

                ## Milestones
                1. A two-minute security segment written for use near the end of any design.
                2. Authentication and authorisation flows sketched for one product.
                3. Personal data in one notebook design identified, with retention and deletion handled.
                4. Abuse cases such as spam and scraping addressed in at least one design.

                ## Notes
                Mention regulations only as examples of why retention and deletion matter. The round is about the design, not legal detail.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-minute security segment is written and one notebook design shows auth flows, personal data handling and an abuse case."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a two-minute security segment you can reuse"
                - "Sketch login and permission checks for one product"
                - "Mark personal data in a design and note how it is deleted"
                - "Add spam or scraping protection to one notebook design"
            - name: Warm-up designs for a shortener, paste service and rate limiter
              description: |-
                ## Purpose
                Small, well-known problems are the best place to rehearse the framework end to end, because the components are few and the time can go on structure and trade-offs. Designing a link shortener, a paste service and a rate limiter to a polished standard gives you three complete answers and a template for harder ones.

                ## Milestones
                1. A link shortener designed with key generation, redirects and analytics handled.
                2. A paste service designed with object storage, expiry and access control.
                3. A rate limiter designed with token bucket and sliding window options compared.
                4. Each design delivered in a timed mock and written up in the notebook.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three warm-up designs are in the notebook, each delivered once in a timed mock."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Design a link shortener and decide how short keys are generated"
                - "Design a paste service with expiry and private links"
                - "Compare token bucket and sliding window for a rate limiter"
                - "Deliver one warm-up design in a timed mock"
            - name: Feeds, timelines and notification fan-out
              description: |-
                ## Purpose
                News feeds and notification systems test whether you understand fan-out on write versus fan-out on read, and what to do about accounts with millions of followers. These designs come up at many consumer companies, and working them through teaches ranking, caching and asynchronous delivery together.

                ## Milestones
                1. A news feed designed with both fan-out approaches and a hybrid for very large accounts.
                2. A notification service designed across push, email and in-app channels with retries.
                3. Feed caching and pagination handled explicitly.
                4. Both designs delivered in timed mocks and written up.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A feed design with a hybrid fan-out and a multi-channel notification design are in the notebook, each delivered in a timed mock."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare fan-out on write and on read for a news feed"
                - "Design the hybrid approach for accounts with huge followings"
                - "Design a notification service across three delivery channels"
                - "Deliver the feed design in a timed mock"
            - name: Real-time chat, presence and collaborative editing
              description: |-
                ## Purpose
                Messaging and collaboration designs bring in long-lived connections, message ordering, delivery receipts and offline sync, which many backend engineers have never built. Working through a chat app with presence and a shared document editor covers the real-time patterns interviewers expect.

                ## Milestones
                1. A chat design with connection servers, message storage, ordering and delivery receipts.
                2. Presence and typing indicators handled without flooding the system.
                3. A collaborative editor outline comparing operational transformation and conflict-free replicated data types at a high level.
                4. Offline sync and reconnection explained for the chat design.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Chat and collaborative editing designs are written up, covering connections, ordering, presence and offline sync."
                cadence: phased
                effort_hours_estimate: "7"
              tasks:
                - "Design a group chat with connection servers and message ordering"
                - "Add presence and typing indicators with a rate limit"
                - "Outline a shared editor and the two main conflict approaches"
                - "Explain what happens when a phone reconnects after a day offline"
            - name: Search, typeahead and ranking
              description: |-
                ## Purpose
                Search problems test indexing, freshness and latency all at once: an inverted index, a typeahead service that answers in milliseconds, and a ranking step that must stay fast. Designing a product search and a typeahead teaches you how indexes are built and updated, and where caching and precomputation earn their place.

                ## Milestones
                1. A product search designed with an inverted index, an indexing pipeline and freshness targets.
                2. A typeahead designed with a prefix structure, precomputed results and caching.
                3. A simple ranking step described with the signals it uses and where it runs.
                4. Both designs written up with their latency budgets.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Search and typeahead designs are in the notebook, each with an indexing approach and a latency budget."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Sketch an inverted index and the pipeline that keeps it fresh"
                - "Design a typeahead with precomputed suggestions"
                - "Write a latency budget for each step of a search request"
                - "Describe a simple ranking step and the signals it uses"
            - name: Media upload, storage and streaming
              description: |-
                ## Purpose
                Photo sharing and video streaming designs are about large objects: resumable uploads, transcoding pipelines, object storage and delivery through a content delivery network. Working through both teaches the bandwidth and storage arithmetic that interviewers check closely in these problems.

                ## Milestones
                1. A photo sharing design with direct-to-storage uploads, thumbnails and metadata storage.
                2. A video platform design with chunked upload, a transcoding queue and adaptive bitrate delivery.
                3. Storage and bandwidth estimated for each, with CDN costs considered.
                4. Both designs delivered in mocks and written up.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Photo and video designs with storage and bandwidth estimates are in the notebook, each delivered in a mock."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Design direct-to-storage photo uploads with thumbnail generation"
                - "Design a transcoding pipeline for uploaded video"
                - "Estimate yearly storage and peak bandwidth for the video design"
                - "Deliver the media design in a timed mock"
            - name: Location, proximity and matching designs
              description: |-
                ## Purpose
                Ride-hailing, food delivery and nearby search designs need spatial indexing, frequent location updates and a matching step under time pressure. Learning geohashes or grid cells, how to absorb millions of location pings and how to match supply to demand covers a family of problems that comes up often.

                ## Milestones
                1. Geohash, grid and tree-based spatial indexes compared in a short note.
                2. A nearby places design with a spatial index and caching for busy areas.
                3. A ride matching design handling location updates, matching and trip state.
                4. Both designs written up with update rates estimated.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spatial index note and two location designs with estimated update rates are in the notebook."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare three spatial indexing approaches in half a page"
                - "Design a nearby places search for a busy city"
                - "Estimate driver location updates per second at peak"
                - "Design the matching and trip state flow for a ride app"
            - name: Payments, ledgers and exactly-once effects
              description: |-
                ## Purpose
                Money designs punish vague answers: a duplicate charge or a lost refund is a real failure. Designing a payment flow with idempotency keys, a double-entry ledger, reconciliation with an outside processor and clear state machines shows interviewers you can be trusted with correctness, not just scale.

                ## Milestones
                1. A payment flow with idempotency keys and a state machine from created to settled.
                2. A double-entry ledger data model with immutable entries.
                3. A reconciliation job comparing internal records with an external processor's reports.
                4. A written answer on what happens when the processor times out mid-payment.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A payment and ledger design with idempotency, a state machine and reconciliation is written up, including the timeout case."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draw the payment state machine from created to settled"
                - "Design a double-entry ledger table with immutable entries"
                - "Sketch a daily reconciliation job against processor reports"
                - "Write your answer for a processor timeout during a charge"
            - name: Infrastructure designs for a key-value store, scheduler and crawler
              description: |-
                ## Purpose
                Infrastructure-focused rounds ask you to build the building blocks: a distributed key-value store, a job scheduler, a web crawler or a metrics pipeline. These designs draw on everything else in the area, and they are where partitioning, replication and failure handling stop being theory.

                ## Milestones
                1. A key-value store designed with consistent hashing, replication and a write path.
                2. A distributed job scheduler designed with leases, retries and at-least-once execution.
                3. A web crawler designed with a URL frontier, politeness rules and duplicate detection.
                4. A metrics ingestion pipeline outlined with time-series storage and downsampling.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four infrastructure designs are in the notebook, each covering partitioning or scheduling and failure handling."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Design a key-value store with consistent hashing and replicas"
                - "Design a job scheduler that survives a worker dying mid-job"
                - "Design a crawler frontier with politeness and duplicate checks"
                - "Outline a metrics pipeline with downsampling of old data"
            - name: Trade-off statements practice
              description: |-
                ## Purpose
                Interviewers score how you reason more than what you pick, and the strongest candidates name the alternative they rejected and the cost they accepted. Practising short trade-off statements, such as choosing a relational store and accepting harder sharding later, makes that reasoning visible every time you make a choice.

                ## Milestones
                1. Twenty common decisions listed, such as SQL versus NoSQL or push versus pull.
                2. A one-sentence trade-off statement written for each, naming the cost accepted.
                3. Ten statements spoken aloud and recorded.
                4. A mock in which your partner noted trade-offs stated for every major choice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Twenty written trade-off statements exist, ten are recorded aloud, and one mock confirms trade-offs stated for each major choice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List twenty design decisions that come up across problems"
                - "Write one trade-off sentence for each, naming the cost"
                - "Record ten of the statements aloud"
                - "Ask your mock partner to count stated trade-offs in your next session"
            - name: Choosing which components to go deep on
              description: |-
                ## Purpose
                Every round reaches a point where the interviewer asks you to pick a component to explore in detail, or picks one for you. Preparing two or three detailed component discussions per classic problem, and choosing the one with the hardest scaling or correctness issue, keeps that part of the round strong instead of improvised.

                ## Milestones
                1. For each notebook problem, the two components with the hardest scaling or correctness issues identified.
                2. A five-minute detailed explanation prepared for each of those components.
                3. A rule of thumb written for choosing which component to offer first.
                4. Two mocks where you proposed the detailed component yourself.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each notebook problem lists its two hardest components with a prepared five-minute explanation, and two mocks show you proposing the focus."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark the two hardest components in each notebook problem"
                - "Prepare a five-minute detailed explanation for each marked component"
                - "Write your rule for which component to offer first"
                - "Propose the detailed component yourself in the next two mocks"
            - name: Turning your own production systems into design material
              description: |-
                ## Purpose
                Systems you have built or run are the most convincing material you have, because you know the real numbers, failures and compromises. Writing up two or three of them as design stories, without confidential details, gives you examples to draw on when an interviewer asks whether you have ever handled something like this.

                ## Milestones
                1. Two or three systems from your work chosen, with confidential names and figures removed.
                2. Each written up with its scale, architecture, one failure and one decision you would change.
                3. Rough numbers for traffic and data size that you can share safely.
                4. Each story told aloud in under three minutes.

                ## Notes
                Check your employer's confidentiality rules before sharing details. Round numbers and generic component names are usually enough.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two or three sanitised write-ups of your own systems exist, each with scale, a failure and a changed decision, and each told aloud in under three minutes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick two or three systems from your work worth describing"
                - "Remove confidential names and replace exact figures with round ones"
                - "Write each up with scale, architecture, a failure and a regret"
                - "Tell each story aloud with a three-minute timer"
            - name: Choosing a paid mock platform or coach
              description: |-
                ## Purpose
                Peer mocks are free but limited by your peers' experience, and a session with someone who has interviewed at your target level can find blind spots a friend misses. Comparing paid platforms and coaches on interviewer background, recording and feedback quality, and price per session, then booking two or three at the right point in the plan, spends the money where it counts.

                ## Milestones
                1. Three paid mock platforms or coaches compared on interviewer background, format, recording and price.
                2. A budget set for the number of paid sessions.
                3. Sessions booked for the middle and final fortnight of your plan.
                4. Feedback from each paid session added to the gap tracker.

                ## Notes
                Start from the **Purchase decision** template. Ask whether the interviewer has run design rounds at your target level, since that matters more than the platform.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of three paid options is recorded with a budget, and at least two sessions are booked at planned points."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Shortlist three paid mock platforms or independent coaches"
                - "Compare them on interviewer background, recording and price"
                - "Set a budget for the number of paid sessions"
                - "Book sessions for the middle and final fortnight of your plan"
            - name: Company-specific preparation before a scheduled round
              description: |-
                ## Purpose
                Once a real round is booked, the final ten days should narrow onto that company: the products it builds, the designs its engineers write about and the format the recruiter described. A short focused plan, ending with a light final day, turns general readiness into readiness for that interviewer.

                ## Milestones
                1. The company's main products and two of its engineering blog posts summarised.
                2. Three likely design problems for that company practised in timed sessions.
                3. One final full mock run in the company's own format and tool.
                4. The last day before the round kept light, with only the notebook index and numbers sheet reread.

                ## Notes
                Do not try to guess the exact question. Practise the problem families the company's products suggest and trust the framework for the rest.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the booked round, three company-relevant designs and one full mock in the company's format have been completed and logged."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Summarise the company's main products and two engineering posts"
                - "Choose three likely problem families for that company"
                - "Run one full mock in the company's format and tool"
                - "Reread only the notebook index and numbers sheet on the last day"
            - name: Rehearsal on the interview's own tool and setting
              description: |-
                ## Purpose
                Small surprises on the day, a whiteboard tool you have never used, a camera angle that hides the board, a laptop that drops the call, eat minutes and confidence. A rehearsal a few days before, in the same tool, room and time of day, removes those surprises so the round is only about the design.

                ## Milestones
                1. The interview tool opened and a full diagram drawn in it.
                2. Room, lighting, camera and microphone tested at the same time of day as the round.
                3. A backup internet connection and a phone dial-in number ready.
                4. Water, paper and pen on the desk and notifications switched off.
              priority: medium
              deadlineOffsetDays: 55
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A rehearsal in the interview tool and room at the round's time of day has been completed, with a backup connection ready."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Open the interview's whiteboard tool and draw a full diagram in it"
                - "Test camera, light and sound at the time of day of the round"
                - "Set up a backup connection such as a phone hotspot"
                - "Switch off notifications on every device for the interview slot"
            - name: Debrief after each real design round
              description: |-
                ## Purpose
                Memory of a round fades within hours, and the details of what the interviewer pushed on are the most useful preparation for the next company. Writing a debrief the same day, covering the problem, your design, the follow-up questions and how the clock went, builds a record that improves every later round.

                ## Milestones
                1. A debrief written within a few hours of every real design round.
                2. The problem, your diagram, the interviewer's follow-ups and your timing captured.
                3. Two things to repeat and two to change noted.
                4. The changes added to the gap tracker before the next round.

                ## Notes
                Start from the **Meeting notes** template. Respect any confidentiality you agreed to and keep debriefs for your own use.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Every real design round has a same-day debrief with follow-ups, timing and two changes added to the gap tracker."
                cadence: rolling
              tasks:
                - "Block an hour after each scheduled design round for a debrief"
                - "Redraw the diagram you presented from memory"
                - "List every follow-up question the interviewer asked"
                - "Add two changes from the debrief to the gap tracker"
            - name: First design round as a new graduate
              description: |-
                ## Purpose
                New graduates and early-career engineers sometimes face a lighter design round, pitched at a product feature or a simple service, and the expectation is clear reasoning rather than production war stories. A plan that leans on fundamentals, warm-up designs and course or internship projects as examples fits that stage without pretending to experience you do not have.

                ## Milestones
                1. The level expected at each company confirmed with the recruiter.
                2. Warm-up designs and API and data modelling practised to a confident standard.
                3. One university, internship or personal project written up as a design example.
                4. Two mocks completed with a more experienced engineer playing interviewer.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The expected level is confirmed, one project is written up as a design example and two mocks with an experienced engineer are logged."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the recruiter what design depth is expected at your level"
                - "Write up one university or internship project as a design example"
                - "Practise the warm-up designs until each fits comfortably in the time"
                - "Ask a senior engineer you know to run two mocks with you"
            - name: Driving the round as a senior candidate
              description: |-
                ## Purpose
                At senior level the interviewer expects you to lead: set the scope, choose where to go deep and raise the risks yourself rather than waiting to be asked. Engineers moving up from mid-level often know the content but let the interviewer steer, and that alone can cost the level.

                ## Milestones
                1. A list of moments in your recent mocks where the interviewer had to steer you.
                2. Opening and transition phrases written for taking the lead between steps.
                3. Risks and bottlenecks raised unprompted in three consecutive mocks.
                4. A peer confirming you drove the session from start to finish.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Three consecutive mocks show risks raised unprompted, and a peer confirms you led the session from scoping to bottlenecks."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the points in recent recordings where the interviewer steered you"
                - "Write phrases for moving from one step of the framework to the next"
                - "Raise the main risks yourself before being asked in the next mock"
                - "Ask your partner whether you or they drove the conversation"
            - name: Staff and principal design rounds
              description: |-
                ## Purpose
                Staff-level design rounds are often deliberately vague, and the signal is how you handle ambiguity, multi-team systems, migrations, cost and long-term evolution. Practising with open prompts and writing short design documents in your own time builds the breadth and judgement these rounds are looking for.

                ## Milestones
                1. Five deliberately vague prompts practised, each starting with a clear framing of the problem.
                2. Migration plans written for moving a live system without downtime.
                3. Cost and team ownership included in each staff-level design.
                4. Three one-page design documents written on systems you know well.

                ## Notes
                Expect the interviewer to push on why the system should exist at all and what you would not build. Saying no to scope is part of the signal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Five ambiguous prompts are practised with written framings and three one-page design documents including migration and cost are complete."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Collect five deliberately vague prompts at staff level"
                - "Write a migration plan for moving a busy service without downtime"
                - "Write a one-page design document on a system you know well @recurring(monthly:9)"
                - "Add cost and team ownership sections to each staff-level practice design"
            - name: Design rounds for frontend and mobile engineers
              description: |-
                ## Purpose
                Frontend and mobile engineers may get a general backend design round, a client-focused one or both, and preparing only for one is a common surprise. Confirming the format, then covering client architecture, offline state, caching and API contracts alongside enough backend to hold the conversation, prepares you for either.

                ## Milestones
                1. The style of design round confirmed with each recruiter: client, backend or both.
                2. Two client designs practised, such as an image feed app and an offline-first notes app.
                3. State management, caching, pagination and offline sync covered in each.
                4. One general backend design practised to a confident standard.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The round style is confirmed per company, and two client designs and one backend design are practised and written up."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask each recruiter whether the design round is client or backend"
                - "Design an offline-first notes app with sync and conflict handling"
                - "Design an image feed client with caching and pagination"
                - "Practise one general backend design to hold that conversation"
            - name: Architecture round for engineering managers
              description: |-
                ## Purpose
                Engineering manager loops often include a design or architecture round where the bar is sound judgement rather than hands-on detail, plus how you would staff, sequence and de-risk the work. Managers who have not designed hands-on for a while need to refresh the fundamentals and practise speaking about delivery, ownership and risk inside the design.

                ## Milestones
                1. The expectations of the architecture round confirmed with each recruiter.
                2. The skills audit repeated, with the topics that have gone stale marked.
                3. Three designs practised with staffing, milestones and risks added.
                4. One mock run by a current engineering manager or senior engineer.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Round expectations are confirmed, three designs include staffing and risk sections and one mock with an experienced manager is logged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the recruiter how hands-on the architecture round is expected to be"
                - "Mark the design topics in your audit that have gone stale"
                - "Add staffing, milestones and risks to three practice designs"
                - "Ask a current engineering manager to run a mock with you"
            - name: Design preparation on five hours a week
              description: |-
                ## Purpose
                Parents, carers and anyone with a demanding job rarely get the long evenings most prep plans assume. A plan built from short sessions, flashcards on the commute, one twenty-minute estimation or reading slot and a single longer mock block each weekend, agreed with family, still builds steady progress over three to four months.

                ## Milestones
                1. Five hours of realistic weekly slots identified, including one longer weekend block.
                2. Short tasks such as flashcards and reading matched to the short slots.
                3. The weekend block agreed with your partner or family.
                4. Eight weeks completed with at least four of the five hours used each week.

                ## Notes
                Stretch the timeline rather than the evenings. A round booked four months out is easier to prepare for in short sessions than one booked in four weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks show at least four hours of design preparation, including one agreed weekend block each week."
                cadence: rolling
              tasks:
                - "Find five hours of realistic slots in a normal week"
                - "Agree one longer weekend block with your partner or family"
                - "Match flashcards and reading to the shortest slots"
                - "Plan the coming week's design sessions around family commitments @recurring(weekly:mon)"
            - name: Remote rounds from the Caribbean and other time zones
              description: |-
                ## Purpose
                Engineers interviewing for remote roles from the Caribbean, Latin America or elsewhere often face rounds at awkward hours, unreliable power or connectivity, and interviewers who assume a different context. Planning slots that suit you, a backup connection and power, and examples that show you understand latency and users across regions turns those constraints into a strength.

                ## Milestones
                1. Preferred interview hours in your time zone written and shared with recruiters.
                2. A backup internet connection and a power backup, such as a charged laptop and hotspot, ready.
                3. One design practised that serves users across distant regions, with latency discussed.
                4. A note on any work authorisation or contract model questions to raise with the recruiter.

                ## Notes
                If English is not your first language, slow down and write key decisions on the board. Interviewers score clarity, and the written requirements carry it.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Preferred hours are shared with recruiters, backup connectivity and power are tested, and one cross-region design is practised."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Convert each company's time zone and choose hours that suit you"
                - "Test a mobile hotspot and a full laptop battery as backups"
                - "Practise a design serving users on several continents"
                - "List contract and work authorisation questions for the recruiter"
            - name: Multi-region and data residency designs
              description: |-
                ## Purpose
                Advanced rounds increasingly ask what happens when users span continents or when data must stay within a country. Designing active-passive and active-active setups, with conflict handling, failover and per-region data placement, prepares you for the hardest follow-ups at senior and staff level.

                ## Milestones
                1. Active-passive and active-active setups compared, with failover time and data loss for each.
                2. Conflict resolution for multi-region writes explained with a product example.
                3. A design that keeps one region's users' data stored in that region.
                4. A written answer on how a full region outage is detected and handled.

                ## Notes
                Data residency rules vary by country and change. Treat them as a design constraint in the round, not as legal advice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes compare two multi-region setups, explain write conflicts and include one residency-aware design with an outage plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare active-passive and active-active setups in a table"
                - "Explain how two regions resolve conflicting writes"
                - "Design a service that keeps each region's data in that region"
                - "Write your plan for detecting and surviving a region outage"
            - name: Cost estimates inside a design
              description: |-
                ## Purpose
                Senior interviewers increasingly ask what a design would cost to run, and a candidate who can rough out compute, storage and data transfer spend shows real ownership. Practising monthly cost estimates for three notebook designs, and naming the one change that would cut cost most, adds a dimension few candidates prepare.

                ## Milestones
                1. Rough unit costs for compute, storage and data transfer noted from a public cloud price list with the date.
                2. Monthly running costs estimated for three notebook designs.
                3. The biggest cost driver in each named, with one change that would reduce it.
                4. A cost segment delivered in under two minutes in a mock.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three notebook designs carry dated monthly cost estimates with the main driver and one reduction named, and one mock includes a cost segment."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note rough unit prices for compute, storage and transfer with today's date"
                - "Estimate the monthly cost of three notebook designs"
                - "Name the largest cost driver and one way to reduce it"
                - "Include a two-minute cost segment in your next mock"
            - name: Running design mocks as the interviewer
              description: |-
                ## Purpose
                Interviewing others is the fastest way to see what a strong answer looks like and to learn the probes real interviewers use. Running regular mocks for colleagues or a community, with a clear rubric and written feedback, sharpens your own judgement and keeps your skills fresh after you land a role.

                ## Milestones
                1. A bank of eight problems with follow-up probes for each stage.
                2. A written rubric shared with candidates in advance.
                3. Six mocks run for other engineers, each with written feedback.
                4. Your own framework updated with anything you learned from watching others.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Six mocks have been run for other engineers using a written rubric and problem bank, each with feedback sent."
                cadence: rolling
              tasks:
                - "Write follow-up probes for eight problems in your bank"
                - "Share your rubric with the next engineer you interview"
                - "Run a design mock for another engineer and send written feedback @recurring(monthly:18)"
                - "Add one lesson from watching a candidate to your own framework"
---

# System Design Interview Preparation

This area is for engineers getting ready for the system design round, where you talk through the architecture of a product out loud while an interviewer probes your reasoning. It starts with foundations (the format at each target company, a skills audit, a recorded baseline, a whiteboard set-up, an answer framework, a numbers sheet and a dated plan), then the weekly practice, peer mock and feedback machinery, the knowledge behind every answer from requirements and estimates to storage, caching, partitioning, messaging, reliability and security, a set of classic designs, the decisions about trade-offs and your own systems, the real rounds and their debriefs, plans for new graduates, seniors, staff candidates, frontend and mobile engineers, managers, parents and remote candidates, and specialist work on multi-region designs, cost and interviewing others.

The rhythm is two practice blocks and a peer mock each week, a weekly feedback review, short daily estimation and flashcard drills, a weekly architecture read and product teardown, and a full recorded mock with a readiness score each month. The Skills matrix, Remediation plan, Reading queue, Metrics log, Purchase decision and Meeting notes templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
