---
id: founding-startups.ai-native-startup-building
name: AI-Native Startup Building
description: "Decide where models genuinely earn their place, build a real evaluation set, keep inference costs inside the margin, ship model changes safely and turn your data and workflow into a position a model release cannot erase."
category: business
version: 1.0.0
tags: [founding-startups, ai-native-startup-building, founder, engineer, ai, llm, evaluation, inference-cost, defensibility]
author: Aurum Technology
starter_structure:
  templates:
    - product-spec
    - vendor
    - metrics-log
    - risk-register
    - purchase-decision
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: AI-Native Startup Building
          description: "Building a startup around AI models, choosing what to build versus buy, managing model costs and finding a defensible position."
          projects:
            - name: Where AI genuinely changes the customer's job
              description: |-
                ## Purpose
                Plenty of AI startups bolt a model onto a workflow that was fine without one, then wonder why trials do not convert. Writing down the exact step in the customer's work that a model makes faster, cheaper or newly possible, and what it costs them today, tells you whether AI is the product, a feature or a distraction.

                ## Milestones
                1. The customer's current workflow written as numbered steps, with time and cost per step from at least three conversations.
                2. The one or two steps a model would change named, with the before and after stated in minutes or money.
                3. A plain verdict recorded: AI is the core product, a supporting feature, or not needed for this problem.
                4. The riskiest assumption about model capability written as a single testable sentence.

                ## Notes
                If the honest answer is that a spreadsheet or a rules engine would do 80 percent of the job, that is useful news. Some of the best AI companies began by finding the narrow step where nothing else works.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page note names the workflow step AI changes, quantifies the before and after, and records whether AI is core, supporting or unnecessary."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write out the target customer's workflow as numbered steps from memory"
                - "Ask three customers how long each step takes and what it costs them"
                - "Mark the steps where a model would change the time or cost by half or more"
                - "Record the verdict and the riskiest capability assumption in one page"
            - name: Task inventory scored for automation fit
              description: |-
                ## Purpose
                Models are excellent at some tasks and quietly unreliable at others, and the difference is rarely obvious from a demo. Scoring every candidate task on how verifiable the output is, how costly a mistake would be and how much context it needs shows which tasks to automate fully, which to draft for a human and which to leave alone.

                ## Milestones
                1. Every candidate task listed, from extraction and summarising to drafting and multi-step actions.
                2. Each task scored on output verifiability, cost of an error and context required, on the same three-point scale.
                3. Tasks sorted into automate, draft for review, and leave manual.
                4. The first three tasks to build chosen from the automate and draft groups.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A scored inventory sorts every candidate task into automate, draft or manual, and names the first three to build."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every task in the workflow a model might plausibly do"
                - "Score each task for verifiability, error cost and context needed"
                - "Sort the tasks into automate, draft for review and leave manual"
                - "Pick the first three tasks to build and note why"
            - name: Hand-run model pilot with five customers
              description: |-
                ## Purpose
                Before writing pipelines, run the core task for five real customers yourself, pasting their inputs into a model, fixing the output by hand and delivering it. Two weeks of this shows how often the raw output is usable, what customers actually value and where the edge cases live, at almost no engineering cost.

                ## Milestones
                1. Five customers receiving the AI-assisted output by hand, with consent to use their examples.
                2. Every input, raw model output and final delivered version saved side by side.
                3. The share of outputs usable without edits, with light edits and needing a rewrite counted.
                4. The three most common failure types named, with an example of each.

                ## Notes
                Tell pilot customers a human is checking the work. Hiding it creates trust problems later and you learn just as much.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two weeks of hand-run deliveries for five customers are logged, with usable, light-edit and rewrite rates counted and the top three failure types named."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask five target customers if you can run their task by hand for two weeks"
                - "Set up one folder per customer for inputs, raw outputs and final versions"
                - "Count usable, light-edit and rewrite outputs at the end of each week"
                - "Write up the three most common failure types with examples"
            - name: Build, buy or adapt map for each AI capability
              description: |-
                ## Purpose
                Every capability in an AI product sits somewhere between calling a hosted model, using an off-the-shelf tool and training something of your own. Mapping each one deliberately stops a small team spending months rebuilding what a vendor sells for pennies, and points the scarce engineering time at the parts customers would miss.

                ## Milestones
                1. Each AI capability listed, such as transcription, extraction, search, generation and classification.
                2. Each capability marked as hosted model, third-party tool, open-weight model or in-house, with a reason.
                3. The one or two capabilities that differentiate the product identified as the place to invest.
                4. A trigger written for each bought capability that would justify bringing it in-house.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A capability map marks every AI component as hosted, tool, open-weight or in-house, with reasons and an in-house trigger for each bought one."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every distinct AI capability the first product needs"
                - "Mark each one hosted model, third-party tool, open-weight or in-house"
                - "Circle the one or two capabilities customers would miss most"
                - "Write the condition that would justify building each bought capability"
            - name: First evaluation set from real customer examples
              description: |-
                ## Purpose
                Without a fixed set of test cases, every prompt change is judged by whoever tried three examples last, and quality drifts without anyone noticing. Fifty to a hundred real inputs with agreed good outputs, drawn from the hand-run pilot, become the yardstick for every model, prompt and cost decision that follows.

                ## Milestones
                1. Between fifty and a hundred real inputs collected, with customer permission and personal data removed.
                2. A reference answer or a written grading rubric agreed for each case.
                3. Hard cases and known failure types making up at least a fifth of the set.
                4. A script or spreadsheet that runs the set and reports a single score per run.

                ## Notes
                Keep a small held-out slice nobody looks at while tuning prompts. Scores on cases you have stared at for weeks flatter you.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An evaluation set of at least fifty anonymised real cases with references or rubrics runs end to end and produces one score per run."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pull fifty real inputs from the pilot folders and strip personal data"
                - "Write a reference answer or grading rubric for each case"
                - "Add hard cases until they make up a fifth of the set"
                - "Build the simplest script that runs the set and prints a score"
                - "Add ten fresh production cases to the evaluation set @recurring(monthly:4)"
            - name: Quality bar and failure tolerance per task
              description: |-
                ## Purpose
                A summary that is 90 percent right may delight a user, while an invoice extraction that is 90 percent right is useless. Agreeing, task by task, what accuracy is good enough to ship and which errors are never acceptable gives the team a launch rule and turns arguments about quality into checks against a number.

                ## Milestones
                1. A minimum evaluation score set for each task before it can ship.
                2. Unacceptable errors listed per task, such as invented figures, wrong customer names or unsafe advice.
                3. A decision for each task on whether it ships automatic, with review, or not at all at the current score.
                4. The bar shared with design partners so their expectations match.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each shipped AI task has a written minimum score, a list of unacceptable errors and a recorded ship mode of automatic, reviewed or held back."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask two customers which mistakes would make them stop using the product"
                - "Set a minimum evaluation score for each task"
                - "List the errors that block a release no matter the score"
                - "Record the ship mode for each task in the product notes"
            - name: Cost envelope per successful task
              description: |-
                ## Purpose
                Inference is a variable cost that rises with every user, retry and long document, and early AI products can lose money on each heavy customer without anyone noticing. Working out what one successful task costs in tokens, retries and tool calls, and the ceiling your price can bear, sets the budget every engineering choice must fit inside.

                ## Milestones
                1. Average and 90th percentile tokens per task measured on the evaluation set.
                2. Cost per successful task calculated, including retries, failed runs and tool calls.
                3. A ceiling cost per task derived from the expected price and a target gross margin.
                4. The gap between current cost and the ceiling written down, with the heaviest step named.

                ## Notes
                Measure the 90th percentile, not just the average. A handful of very long inputs often drives most of the bill.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cost sheet shows average and 90th percentile cost per successful task against a ceiling derived from price and target margin."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Log tokens in and out for every case in one evaluation run"
                - "Calculate cost per successful task including retries and failures"
                - "Work out the ceiling cost from the expected price and margin target"
                - "Name the single step that uses the most tokens"
            - name: Customer data use and training rights policy
              description: |-
                ## Purpose
                Customers increasingly ask, before signing, whether their data will train your models or anyone else's, and a vague answer loses deals. Deciding what you collect, what you keep, what you may learn from and how customers opt out, then putting it in the terms and the product, settles the question once and protects the data flywheel you hope to build.

                ## Milestones
                1. Every category of customer data the product touches listed, with where it is stored and for how long.
                2. A written rule for each category on whether it may be used for evaluation, fine-tuning or neither.
                3. An opt-out or opt-in mechanism designed and reflected in the product settings.
                4. The policy reviewed by a lawyer and reflected in the customer terms and privacy notice.

                ## Notes
                This is organisational preparation, not legal advice. Have a qualified lawyer in your market check the final wording.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A data use policy covering every data category, with training permissions and an opt-out, is lawyer-reviewed and reflected in the terms."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every type of customer data the product stores or sends to a model"
                - "Decide for each type whether it may be used for evaluation or training"
                - "Draft the opt-out wording and where it appears in settings"
                - "Send the draft policy to a lawyer for review"
                - "Recheck the data use policy against what the product actually stores @recurring(yearly)"
            - name: Model provider terms and data retention review
              description: |-
                ## Purpose
                Each model provider has its own rules on data retention, training on API traffic, permitted uses, regional processing and rate limits, and those rules flow straight into your promises to customers. Reading them properly once, and keeping a short record per provider, avoids promising enterprise buyers something your supplier does not offer.

                ## Milestones
                1. Each provider in use recorded with its data retention period and whether API data is used for training.
                2. Zero-retention or enterprise options noted, with what they cost and how to request them.
                3. Usage policy restrictions checked against your product's use case.
                4. Processing regions and any subprocessors listed for customer security reviews.

                ## Notes
                Start from the **Vendor** template, one record per provider. Terms change, so note the date you read them.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated vendor record exists for every model provider, covering retention, training use, usage policy fit and processing regions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open a vendor record for each model provider the product calls"
                - "Note each provider's retention period and training use of API data"
                - "Check the usage policy against your product's riskiest use case"
                - "Reread each provider's terms and update the vendor records @recurring(yearly)"
            - name: Founding AI system design on one page
              description: |-
                ## Purpose
                AI products grow into tangles of prompts, retrieval, tool calls and guardrails added in a hurry, and new engineers cannot tell what calls what. A one-page design showing the request path, where context comes from, which model handles which step and where checks sit gives the team a shared picture before the tangle forms.

                ## Milestones
                1. A diagram of the request path from user input to delivered output.
                2. Each model call labelled with its purpose, model and expected cost.
                3. Context sources named, such as customer documents, history and tool results.
                4. Guardrails and validation steps marked where they sit, with what they catch.

                ## Notes
                Start from the **Product spec** template. Keep it to one page and redraw it when a model call is added.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page design shows every model call, context source and guardrail on the request path, and each engineer has read it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the path from user input to delivered output on one page"
                - "Label every model call with its purpose, model and rough cost"
                - "Mark each guardrail and what it is meant to catch"
                - "Walk the team through the page and fix what they question"
            - name: Weekly evaluation run before any model change
              description: |-
                ## Purpose
                A prompt tweak that fixes one complaint can silently break ten other cases, and model providers update versions underneath you. Running the full evaluation set every week, and before any prompt, model or retrieval change ships, turns quality from a feeling into a number with a history.

                ## Milestones
                1. Evaluation runs scheduled weekly and required before any prompt, model or retrieval change merges.
                2. Scores logged with the date, model version and prompt version.
                3. A drop threshold agreed that blocks a release until explained.
                4. Twelve weeks of scores visible on one chart.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The evaluation set has run every week for twelve weeks and before every model-related release, with scores logged against versions."
                cadence: rolling
              tasks:
                - "Add an evaluation step to the release checklist for prompt and model changes"
                - "Agree the score drop that blocks a release"
                - "Run the full evaluation set and log the score with versions @recurring(weekly:tue)"
                - "Chart the last twelve weeks of scores for the team"
            - name: Monthly inference spend and margin review
              description: |-
                ## Purpose
                Model bills grow quietly as usage, context length and retries creep up, and the first sign is often a margin collapse at the end of a quarter. A monthly look at spend per customer, per task and per model catches heavy users, runaway loops and expensive steps while they are still cheap to fix.

                ## Milestones
                1. Spend broken down by customer, task and model each month.
                2. Gross margin per customer calculated with inference included.
                3. Customers costing more than they pay flagged with a proposed fix.
                4. Six months of spend and margin recorded for trend.

                ## Notes
                Start from the **Metrics log** template. Tag every model call with a customer and task identifier from day one, or this review is guesswork.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews show inference spend and gross margin per customer, with every loss-making customer given a recorded action."
                cadence: rolling
              tasks:
                - "Tag every model call with customer and task identifiers"
                - "Export spend by customer, task and model and log the totals @recurring(monthly:9)"
                - "Flag any customer whose inference cost exceeds their revenue"
                - "Write one action for each flagged customer"
            - name: Weekly production trace reading session
              description: |-
                ## Purpose
                Aggregate scores hide the strange things users actually do: pasting whole contracts, asking in another language, chaining the tool in ways nobody designed. An hour a week reading fifty real traces end to end, as a team, is where most new evaluation cases, product ideas and quiet failures are found.

                ## Milestones
                1. A sampling method agreed that includes random traces and ones flagged by users.
                2. A weekly hour in the calendar with at least one founder and one engineer.
                3. Each session producing new evaluation cases and a short list of issues.
                4. Ten sessions held with their findings logged in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten weekly trace sessions have been held, each logging new evaluation cases and issues from at least fifty real traces."
                cadence: rolling
              tasks:
                - "Set up a way to pull fifty random and flagged traces each week"
                - "Book a recurring hour with a founder and an engineer"
                - "Read fifty traces together and log new cases and issues @recurring(weekly:thu)"
                - "Move each issue into the backlog with an owner"
            - name: Model release watch and upgrade triage
              description: |-
                ## Purpose
                New models arrive every few weeks, each claiming to be better and cheaper, and older versions are retired on the provider's timetable rather than yours. A monthly triage that tests promising releases on your own evaluation set and tracks deprecation dates means upgrades are chosen, not forced.

                ## Milestones
                1. Every model version in production listed with its announced retirement date.
                2. A monthly slot to scan releases and pick at most two to test.
                3. Candidates scored on your evaluation set for quality, cost and latency.
                4. Upgrade decisions recorded with the scores that justified them.

                ## Notes
                Public benchmarks rarely predict performance on your task. Only your own evaluation set decides.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A model inventory with retirement dates is current, and each month's release triage has an evaluation result and a recorded decision."
                cadence: rolling
              tasks:
                - "List every model version in production with its retirement date"
                - "Scan new releases and pick up to two to test @recurring(monthly:18)"
                - "Score each candidate on the evaluation set for quality, cost and latency"
                - "Record the upgrade decision and the numbers behind it"
            - name: Prompt and model configuration versioning
              description: |-
                ## Purpose
                Prompts edited directly in a dashboard or a string buried in code leave no trail, so when quality drops nobody can say what changed. Keeping prompts, model names and parameters in version control with a short change note makes every regression traceable and every rollback a single step.

                ## Milestones
                1. All prompts, model identifiers and parameters stored in the repository, not in code strings or dashboards.
                2. Each change carrying a one-line reason and the evaluation score before and after.
                3. Rollback to the previous configuration possible in one deploy.
                4. Production logs recording which prompt version produced each output.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every prompt and model setting lives in version control with change notes and scores, and logs show the prompt version for each output."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Move every prompt and model setting into files in the repository"
                - "Add a change note format with the reason and before and after scores"
                - "Log the prompt version alongside each production output"
                - "Practise a rollback to the previous prompt version in staging"
            - name: AI output incident log and monthly review
              description: |-
                ## Purpose
                A model that invents a figure for a customer, leaks one tenant's text to another or gives unsafe advice needs the same treatment as an outage: recorded, explained and prevented. A simple incident log with a monthly review builds the evidence enterprise buyers ask for and keeps the same failure from reaching a second customer.

                ## Milestones
                1. An incident definition agreed, covering harmful, wrong, leaked and off-policy outputs.
                2. A log capturing date, customer impact, cause and fix for each incident.
                3. Every incident turned into at least one new evaluation case.
                4. A monthly review held, with repeat causes given a structural fix.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every AI output incident is logged with cause, fix and a new evaluation case, and monthly reviews have run for six months."
                cadence: rolling
              tasks:
                - "Write a one-paragraph definition of an AI output incident"
                - "Create the incident log with date, impact, cause and fix columns"
                - "Turn each logged incident into a new evaluation case"
                - "Review the month's incidents and pick one structural fix @recurring(monthly:24)"
            - name: User corrections captured into the evaluation set
              description: |-
                ## Purpose
                Every time a user edits an output, regenerates it or clicks thumbs down, they are telling you what good looks like for free. Capturing those signals with the original input, and moving the best examples into the evaluation set each week, is the cheapest data flywheel an early AI company can run.

                ## Milestones
                1. Edits, regenerations and ratings captured with the input and output that prompted them.
                2. A weekly review of captured signals with clear rules for which become evaluation cases.
                3. The share of outputs edited by users tracked as a quality measure.
                4. At least fifty user-sourced cases added to the evaluation set.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "User edits and ratings are captured with context, and at least fifty user-sourced cases have entered the evaluation set through the weekly review."
                cadence: rolling
              tasks:
                - "Instrument edits, regenerations and ratings with the original input"
                - "Write the rule for which signals become evaluation cases"
                - "Review the week's corrections and promote the best ones @recurring(weekly:fri)"
                - "Track the share of outputs users edit before using"
            - name: Provider outage fallback and failover drill
              description: |-
                ## Purpose
                Model providers have outages, rate limits and capacity crunches at the worst moments, and an AI product with one provider goes down with them. A tested fallback, whether a second provider, a smaller model or a graceful queued mode, keeps customers working, and a quarterly drill proves it still works after months of changes.

                ## Milestones
                1. A fallback path chosen for each critical task, with its quality score on the evaluation set.
                2. Timeouts, retries with backoff and rate limit handling in place.
                3. A clear message shown to users when the product is running degraded.
                4. A failover drill completed with the switch time recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each critical task has a tested fallback with a known quality score, and a failover drill has been run each quarter with switch time recorded."
                cadence: rolling
              tasks:
                - "Choose a fallback model or mode for each critical task"
                - "Score each fallback on the evaluation set"
                - "Write the message users see when the product runs degraded"
                - "Run a failover drill and record how long the switch took @recurring(quarterly)"
            - name: Quarterly defensibility check
              description: |-
                ## Purpose
                Investors and acquirers will ask what stops a better model, or the provider itself, from wiping out the product, and the honest answer changes as the market moves. Every quarter, list what has actually accumulated: proprietary data, workflow depth, integrations, distribution, trust. Then compare it with what a well-funded competitor could copy in a month.

                ## Milestones
                1. Assets that would take a competitor months to copy listed with evidence.
                2. Features a new model release could make trivial listed honestly.
                3. The quarter's change in defensibility described in three sentences.
                4. One investment chosen for next quarter that deepens the strongest moat.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four quarterly defensibility notes exist, each listing durable assets with evidence and one chosen investment for the next quarter."
                cadence: cyclic
              tasks:
                - "List what a well-funded competitor could not copy within a month"
                - "List what the next frontier model might make trivial"
                - "Write the quarter's defensibility note and choose one investment @recurring(quarterly)"
                - "Share the note with co-founders and any board observers"
            - name: Data flywheel instrumentation
              description: |-
                ## Purpose
                Talk of a data moat means nothing unless usage actually produces data the product can learn from. Deciding which signals matter, from accepted drafts to resolved tickets to downstream outcomes, and logging them cleanly with consent, makes the flywheel something you can measure rather than claim.

                ## Milestones
                1. The three signals that best show a good outcome for the customer chosen.
                2. Those signals logged with the input, output and consent status.
                3. A monthly count of usable learning examples produced.
                4. One improvement shipped that was driven by flywheel data.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three outcome signals are logged with consent status, a monthly count of usable examples is tracked, and one improvement came from that data."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose the three signals that best show a good customer outcome"
                - "Log each signal with input, output and consent status"
                - "Count the month's usable learning examples and note the trend @recurring(monthly:13)"
                - "Ship one improvement driven by the collected examples"
            - name: Evaluation methods every AI founder should know
              description: |-
                ## Purpose
                Founders who cannot tell a good evaluation from a flattering one end up shipping on vibes or trusting a dashboard that measures the wrong thing. Learning the main methods, exact match, rubric grading, pairwise comparison, model-graded scoring and human review, and when each misleads, lets you question your own numbers.

                ## Milestones
                1. Five evaluation methods understood, each with a case where it fails.
                2. A model-graded scorer checked against human grades on twenty cases.
                3. Your own evaluation set reviewed for the method that suits each task.
                4. A one-page note of evaluation pitfalls kept for new hires.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A model-graded scorer has been compared with human grades on twenty cases, and a one-page pitfalls note exists for new hires."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read one practical guide to evaluating language model applications"
                - "Grade twenty cases by hand and compare with a model-graded score"
                - "Pick the right method for each task in your evaluation set"
                - "Write a one-page note of evaluation pitfalls"
            - name: Retrieval fundamentals for grounded answers
              description: |-
                ## Purpose
                Most business AI products answer from the customer's own documents, and most of their errors come from fetching the wrong passage rather than from the model. Understanding chunking, embeddings, keyword and hybrid search and reranking, and measuring retrieval on its own, fixes the problems that prompt tweaking never will.

                ## Milestones
                1. The retrieval pipeline drawn from document ingestion to passages passed to the model.
                2. Retrieval measured separately, as the share of questions where the right passage is fetched.
                3. Two chunking or search settings compared on that measure.
                4. The better setting adopted, with the score change recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Retrieval accuracy is measured on its own, two settings have been compared, and the better one is in production with the gain recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draw your retrieval pipeline from ingestion to the model prompt"
                - "Label thirty questions with the passage that should be fetched"
                - "Measure how often the right passage appears in the top five"
                - "Compare two chunking or search settings on that measure"
            - name: Token economics and provider pricing mechanics
              description: |-
                ## Purpose
                Two products with the same model can have very different bills depending on input and output length, cached context, batch processing and which tier of model handles each step. Learning how providers actually charge, and how each mechanism applies to your traffic, often reveals savings worth more than a month of engineering.

                ## Milestones
                1. Input, output, cached and batch pricing understood for each provider in use.
                2. Your traffic split into interactive and batch-eligible work.
                3. Repeated context identified that could be cached.
                4. A savings estimate written for each mechanism that applies.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note explains each provider's pricing mechanisms as they apply to your traffic, with a savings estimate for caching and batch work."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the pricing page of each model provider you use in full"
                - "Split your traffic into interactive and batch-eligible requests"
                - "Find the context repeated across requests that could be cached"
                - "Estimate monthly savings for each pricing mechanism that applies"
            - name: Agent and tool-use design patterns
              description: |-
                ## Purpose
                Letting a model call tools and take several steps opens up whole workflows, and also multiplies cost, latency and the ways things go wrong. Studying the common patterns, from a single tool call to planner and executor loops, and their failure modes, helps you choose the simplest design that does the job.

                ## Milestones
                1. Four patterns understood: single call, fixed chain, tool-calling loop and planner with executor.
                2. Each pattern's typical failure modes and cost profile noted.
                3. Your product's multi-step tasks mapped to the simplest pattern that works.
                4. A step limit and budget cap set for any loop in production.

                ## Notes
                A fixed chain you can test step by step beats a free-roaming agent for most early products. Add autonomy only where evaluation shows it helps.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each multi-step task is mapped to a named pattern with a written reason, and every production loop has a step limit and a budget cap."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read two published write-ups of agent designs that failed in production"
                - "Note the failure modes and cost of each of the four patterns"
                - "Map each multi-step task to the simplest pattern that works"
                - "Set a step limit and budget cap on every production loop"
            - name: Prompt injection and AI threat model
              description: |-
                ## Purpose
                An AI product that reads emails, web pages or uploaded files can be instructed by them, and a model with tools can be talked into using them badly. A threat model covering injected instructions, data leaking between customers, tool misuse and runaway spend shows where the real exposure is, before a security reviewer or an attacker finds it.

                ## Milestones
                1. Every untrusted input the model reads listed, such as uploads, emails, web content and other users' text.
                2. Each tool the model can call rated for the harm a misuse could cause.
                3. Mitigations recorded per risk, such as permission limits, output checks and human confirmation.
                4. A set of injection test cases added to the evaluation run.

                ## Notes
                Start from the **Risk register** template. No prompt wording reliably stops injection on its own, so limit what a tricked model is allowed to do.
              priority: high
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A risk register lists every untrusted input and tool with a mitigation, and injection test cases run with the regular evaluation set."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every untrusted source of text the model reads"
                - "Rate each tool the model can call by the harm misuse could cause"
                - "Record a mitigation for each risk in the register"
                - "Run the injection test cases and log any new bypass @recurring(monthly:21)"
            - name: Prompting, retrieval or fine-tuning choice
              description: |-
                ## Purpose
                Teams often reach for fine-tuning because it sounds like building something proprietary, when better prompts or retrieval would have closed the gap in a week. Knowing what each approach is good at, knowledge versus format versus behaviour, and what each costs to maintain, makes the choice a reasoned one.

                ## Milestones
                1. The quality gap stated precisely: missing knowledge, wrong format, wrong tone or wrong reasoning.
                2. Prompting and retrieval improvements tried first and scored.
                3. The remaining gap compared with what fine-tuning would cost to build and maintain.
                4. The chosen approach recorded with the evidence.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A written decision names the quality gap, shows scored prompting and retrieval attempts, and justifies the chosen approach."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Describe the quality gap as knowledge, format, tone or reasoning"
                - "Try two prompt or retrieval improvements and score them"
                - "Estimate the build and upkeep cost of fine-tuning for the remaining gap"
                - "Record the chosen approach and the scores behind it"
            - name: AI regulation map for your market
              description: |-
                ## Purpose
                Rules on automated decisions, transparency, high-risk uses and data protection now apply to AI products in many markets, and buyers in health, finance, hiring and education ask about them early. Mapping which rules might touch your product, using a regime such as the EU AI Act as one example, tells you what to prepare and when to get legal advice.

                ## Milestones
                1. The markets you sell into listed with the AI and data rules that may apply.
                2. Your use cases checked against any high-risk or prohibited categories.
                3. Transparency duties noted, such as telling users they are dealing with AI.
                4. Questions for a lawyer written down, and the answers recorded.

                ## Notes
                This is a preparation map, not a legal conclusion. Have a qualified lawyer confirm what applies to you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A regulation map covers each market sold into, with use cases checked against risk categories and lawyer answers recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each market you sell into or plan to within a year"
                - "Note the AI and data rules that may apply in each market"
                - "Check your use cases against any high-risk categories"
                - "Send your open questions to a lawyer and record the answers"
                - "Check for new AI rules in your markets and update the map @recurring(yearly)"
            - name: Model bake-off on your own evaluation set
              description: |-
                ## Purpose
                Choosing a launch model from leaderboards or a provider's marketing ignores the only thing that matters: how it does on your customers' inputs at your price. Running three or four candidates through the same evaluation set, and comparing quality, cost and latency together, gives a defensible choice and a baseline for every later switch.

                ## Milestones
                1. Three or four candidate models chosen across at least two providers.
                2. Each candidate run on the full evaluation set with identical prompts adjusted only for format.
                3. Quality, cost per task and 90th percentile latency tabled side by side.
                4. The launch model chosen, with the runner-up named as the fallback.

                ## Notes
                Start from the **Purchase decision** template. Rerun the bake-off when your evaluation set has grown by half.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison table of three or more models on quality, cost and latency supports a recorded launch choice and a named fallback."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick three or four candidate models from at least two providers"
                - "Run every candidate on the full evaluation set"
                - "Table quality, cost per task and latency side by side"
                - "Record the launch model and the fallback with reasons"
            - name: Open-weight or hosted model decision
              description: |-
                ## Purpose
                Running an open-weight model yourself promises control, privacy and lower unit cost at scale, and costs engineering time, hardware and on-call duty that a small team may not have. Comparing the real total cost and the quality gap at your expected volume settles whether self-hosting is a strategy or a distraction for now.

                ## Milestones
                1. The best open-weight candidate scored on your evaluation set against the hosted model.
                2. Total monthly cost compared at current volume and at ten times current volume.
                3. Engineering and on-call time for self-hosting estimated in hours per month.
                4. A decision recorded, with the volume or customer requirement that would reverse it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares quality, total cost at two volumes and team time, and names the trigger that would reverse it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Run the strongest open-weight candidate on your evaluation set"
                - "Estimate monthly cost at current volume and at ten times that"
                - "Estimate the engineering and on-call hours self-hosting would take"
                - "Write the decision and the trigger that would reverse it"
            - name: Inference cost reduction pass
              description: |-
                ## Purpose
                Once the product works, most AI startups find that half their spend goes on steps that do not need the most capable model or that repeat the same context. A structured pass through caching, routing simple requests to smaller models, trimming context and batching background work can cut the bill sharply without hurting the evaluation score.

                ## Milestones
                1. The three most expensive steps identified from the spend review.
                2. Caching, smaller-model routing, context trimming and batching each tried where they apply.
                3. Each change scored on the evaluation set so quality stays above the bar.
                4. Cost per successful task reduced, with the before and after recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Cost per successful task has fallen measurably with the evaluation score still above the agreed bar, and both numbers are recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick the three most expensive steps from the last spend review"
                - "Try caching, smaller-model routing and context trimming on each"
                - "Score each change on the evaluation set before shipping it"
                - "Repeat the cost pass on the newest expensive step @recurring(quarterly)"
            - name: Latency budget and streaming experience
              description: |-
                ## Purpose
                Users forgive a lot from AI products except staring at a spinner, and long multi-step chains can take tens of seconds. Setting a latency budget per task and designing the experience around it, with streaming, progress steps or background jobs with notifications, keeps the product feeling fast even when the model is not.

                ## Milestones
                1. A target time to first visible output and to completion set for each task.
                2. Current 50th and 90th percentile latency measured against those targets.
                3. Streaming, progress indicators or background processing chosen per task.
                4. The slowest task brought inside its budget.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every task has a latency budget, current percentiles are measured, and the slowest task now meets its budget."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Set a time to first output and to completion for each task"
                - "Measure current median and 90th percentile latency per task"
                - "Choose streaming, progress steps or background jobs for each task"
                - "Bring the slowest task inside its budget"
            - name: Human review step for high-stakes outputs
              description: |-
                ## Purpose
                Where a wrong output could cost a customer money, reputation or safety, the product needs a person in the loop until the evidence says otherwise. Designing that review step well, with clear confidence signals, fast approve and edit actions and a record of decisions, keeps quality high and quietly builds the dataset that may later justify more automation.

                ## Milestones
                1. The outputs that require human review listed, with the reason for each.
                2. A review screen designed with the source evidence beside the model's output.
                3. Approve, edit and reject actions logged with reviewer and time taken.
                4. A rule written for when review can be relaxed, based on measured accuracy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "High-stakes outputs pass through a logged review step, and a written rule based on measured accuracy says when review can be relaxed."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List the outputs that must be reviewed by a person and why"
                - "Design a review screen showing source evidence beside each output"
                - "Log every approve, edit and reject with reviewer and time"
                - "Write the accuracy rule for relaxing review on each output type"
            - name: Usage-aware pricing that protects gross margin
              description: |-
                ## Purpose
                Flat per-seat pricing works until one customer runs ten times the volume of the rest and inference eats the margin. Designing a price that tracks the cost driver, through usage tiers, credits, fair-use limits or outcome-based charges, keeps heavy customers profitable without making light ones feel nickel-and-dimed.

                ## Milestones
                1. The usage measure that best tracks inference cost chosen, such as documents, tasks or minutes.
                2. Gross margin modelled for light, typical and heavy customers under two pricing designs.
                3. Fair-use limits or overage terms written for the chosen design.
                4. The new pricing tested with three prospects before publishing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen pricing design keeps modelled gross margin above target for heavy customers, with limits written and three prospects consulted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the usage measure that best tracks inference cost"
                - "Model margin for light, typical and heavy customers under two designs"
                - "Write fair-use limits or overage terms for the preferred design"
                - "Test the pricing with three prospects and note their reactions"
            - name: Thin wrapper risk test
              description: |-
                ## Purpose
                If your product is mostly a prompt and an interface, the model provider or a general assistant can ship the same thing at no extra cost to users. Asking bluntly what remains when a general assistant can do the core task, and what you would build in response, is far better done by you now than by an investor later.

                ## Milestones
                1. The core task tried in two general-purpose assistants and the results compared with yours.
                2. The parts of your product a general assistant cannot reach listed, such as integrations, data and workflow.
                3. A response plan written for the day a provider ships your headline feature.
                4. The roadmap adjusted to grow the parts that survive.

                ## Notes
                Ask the agent to argue the case that a general assistant makes your product redundant, then answer each point in writing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written test compares your output with two general assistants, lists what they cannot reach, and records the roadmap change made."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run your core task in two general-purpose assistants and save the results"
                - "Ask the agent to argue that a general assistant makes your product redundant"
                - "List what your product does that a general assistant cannot reach"
                - "Rerun the wrapper test after major provider announcements @recurring(quarterly)"
            - name: Proprietary data acquisition plan
              description: |-
                ## Purpose
                The data that makes an AI product better than a general model rarely arrives by accident: it comes from partnerships, workflow capture, expert labelling or licensing, each with a cost and a consent question. Planning which data you need, where it will come from and on what terms turns a hoped-for moat into a programme with owners.

                ## Milestones
                1. The data that would most improve quality named, with the evaluation gap it would close.
                2. Sources listed, such as customer workflows, partners, licensed sets or expert labelling, with cost and terms.
                3. Consent and rights checked for each source against your data use policy.
                4. The first source secured and its examples flowing into the evaluation or training set.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A data plan names the target data, sources with terms and consent status, and shows the first source delivering examples."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Name the data that would close your largest evaluation gap"
                - "List possible sources with their cost and terms"
                - "Check each source's consent and rights against your data policy"
                - "Review progress on each data source and its yield @recurring(monthly:16)"
            - name: Pre-launch red team day
              description: |-
                ## Purpose
                Before opening to the public, spend a day trying to break the product the way strangers will: jailbreaks, injected instructions in uploads, requests for other customers' data, prompts that run up huge bills. A focused day with a mixed group finds embarrassing failures while they are still private and cheap to fix.

                ## Milestones
                1. A date set and a group of four to six people booked, including someone outside the team.
                2. Attack categories assigned so each person covers different ground.
                3. Every successful attack logged with the exact input and output.
                4. Each finding fixed or accepted with a written reason before launch.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A red team day has been held, every successful attack is logged, and each one is fixed or formally accepted before launch."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick a red team date at least two weeks before launch"
                - "Invite four to six people, including one outside the team"
                - "Assign each person an attack category to focus on"
                - "Fix or formally accept every finding before launch"
            - name: Enterprise AI security questionnaire answers
              description: |-
                ## Purpose
                Larger customers now send security questionnaires with a full section on AI: which models, where data goes, retention, training use, human oversight, evaluation and incident handling. Writing strong standard answers once, backed by the policies and records from earlier projects, turns a two-week scramble per deal into an afternoon.

                ## Milestones
                1. Three real or sample questionnaires collected and their AI questions pooled.
                2. A standard answer drafted for each question, pointing to the policy or record behind it.
                3. Answers checked by an engineer for accuracy against the live system.
                4. The answer library used on a real deal and gaps filled afterwards.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A reviewed answer library covers every AI question from three questionnaires and has been used on at least one live deal."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect three security questionnaires and pool their AI questions"
                - "Draft a standard answer for each, citing the policy behind it"
                - "Have an engineer check every answer against the live system"
                - "Fill the gaps found after using the library on a real deal"
            - name: Investor AI diligence pack
              description: |-
                ## Purpose
                Investors in AI companies now probe gross margin after inference, dependence on one provider, evaluation evidence and what is genuinely proprietary. A short pack with real numbers answers those questions before they become doubts, and preparing it often reveals the weakest part of your story while there is time to strengthen it.

                ## Milestones
                1. Gross margin after inference shown for the last three to six months.
                2. Evaluation scores over time and against at least one alternative model.
                3. Provider dependence and the tested fallback described in one paragraph.
                4. The defensibility case stated with evidence, not adjectives.
                5. The pack read by one friendly investor and revised from their questions.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A diligence pack with margin, evaluation history, provider fallback and defensibility evidence has been reviewed by one investor and revised."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull gross margin after inference for the last six months"
                - "Chart evaluation scores over time and against one alternative model"
                - "Write one paragraph on provider dependence and the tested fallback"
                - "Send the pack to a friendly investor and revise from their questions"
            - name: Planned migration to a new production model
              description: |-
                ## Purpose
                Switching the model behind a live product changes tone, formatting, refusals and cost all at once, and customers notice. Treating the migration as a planned event, with prompt adaptation, a shadow period, a staged rollout and a rollback plan, avoids the support flood that follows a quiet swap.

                ## Milestones
                1. Prompts adapted for the new model and scored above the current production score.
                2. The new model run in shadow on real traffic, with differences reviewed.
                3. A staged rollout plan with a rollback trigger agreed.
                4. Rollout complete, with key customers told about any visible change.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new model is live for all customers after a shadow period and staged rollout, with no rollback needed or a rollback completed cleanly."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Adapt prompts for the new model until it beats the current score"
                - "Run the new model in shadow on a slice of real traffic"
                - "Agree the rollout stages and the trigger for rolling back"
                - "Tell key customers about any change they will notice"
            - name: Abuse and spend caps before open sign-ups
              description: |-
                ## Purpose
                Free tiers on AI products invite scripted sign-ups, people using it as a free model endpoint and single users who run up thousands in inference overnight. Putting per-user limits, sign-up friction and spend alerts in place before the public launch protects both the bill and the provider account that keeps the product running.

                ## Milestones
                1. Per-user and per-account limits on requests and tokens set for each plan.
                2. Sign-up checks in place proportionate to the free tier's value.
                3. Daily spend alerts and a hard cap configured with each provider.
                4. Usage patterns that look like endpoint reselling defined and monitored.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Per-user limits, sign-up checks, provider spend alerts and a hard cap are live before free sign-ups open."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set request and token limits for each plan"
                - "Add sign-up checks suited to the value of the free tier"
                - "Configure daily spend alerts and a hard cap with each provider"
                - "Define the usage pattern that signals someone reselling access"
            - name: Non-technical founder hiring a founding AI engineer
              description: |-
                ## Purpose
                Non-technical founders building AI products face a hiring market full of people who have shipped impressive demos and few who have kept a model in production for a year. Knowing what to look for, evaluation habits, cost awareness and debugging of messy outputs, and testing for it with a paid trial task, protects the most important early hire.

                ## Milestones
                1. A role description written around production AI work, not research titles.
                2. Interview questions on evaluation, cost and failure handling agreed with a technical advisor.
                3. A paid trial task built from your evaluation set and real messy inputs.
                4. An offer made to a candidate who passed the trial with a technical advisor's sign-off.

                ## Notes
                Ask candidates to describe a model failure they found in production and how they stopped it recurring. Demo builders struggle with this question.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A founding AI engineer has been hired after a paid trial task from your real inputs, with a technical advisor's recorded sign-off."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask a technical advisor to help write the founding AI engineer role"
                - "Draft interview questions on evaluation, cost and failure handling"
                - "Build a paid trial task from your evaluation set and messy inputs"
                - "Review trial results with the advisor before making an offer"
            - name: Solo engineer founder on a tight inference budget
              description: |-
                ## Purpose
                Solo founders paying model bills from savings or credits have to make every token count and cannot be on call around the clock. A deliberately small setup, one provider with a fallback, hard spend caps, aggressive caching and a weekly spend glance, keeps the product alive without the bill or the pager running your life.

                ## Milestones
                1. A monthly inference budget set from savings, credits and revenue.
                2. Hard caps and alerts configured so the budget cannot be exceeded by accident.
                3. Caching and smaller-model routing applied to the most frequent requests.
                4. Credits from provider and cloud startup programmes applied for where eligible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months have passed with inference spend inside the set budget, caps and alerts live, and startup credit applications submitted."
                cadence: rolling
              tasks:
                - "Set a monthly inference budget you can afford for six months"
                - "Configure hard spend caps and alerts with each provider"
                - "Apply to the startup credit programmes you are eligible for"
                - "Check the week's spend against budget in five minutes @recurring(weekly:mon)"
            - name: Researcher founder shipping a product, not a paper
              description: |-
                ## Purpose
                Founders from machine learning research bring real technical depth, and often a pull towards the hardest version of the problem and the most elegant model. Reframing goals around customer outcomes, a usable product in weeks and good-enough accuracy at an acceptable cost, avoids spending a year perfecting something nobody has asked to buy.

                ## Milestones
                1. A customer outcome metric written alongside the model accuracy metric.
                2. A product version shipped to real users using the simplest model that meets the quality bar.
                3. Research ideas parked on a list with the customer evidence that would justify each.
                4. A weekly split agreed between product work and research, with the actual split tracked for a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A product using the simplest adequate model is live with real users, and a month of tracked time shows the agreed product and research split."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the customer outcome you will measure beside model accuracy"
                - "Ship a version using the simplest model that clears the quality bar"
                - "Move research ideas to a parked list with their evidence threshold"
                - "Track a month of time split between product and research"
            - name: Vertical AI in a regulated profession
              description: |-
                ## Purpose
                Building AI for clinicians, lawyers, accountants or financial advisers means the professional stays accountable for the output, and the product must make their review fast and defensible. Designing around their duties, with source citations, audit trails, clear limits on what the tool claims and a qualified advisor on the team, earns trust in markets where trust is the sale.

                ## Milestones
                1. A qualified practitioner engaged as an advisor, with a written scope.
                2. Every output showing its sources so the professional can check it.
                3. An audit trail of inputs, outputs and the professional's final decision kept.
                4. Product claims and disclaimers reviewed by the advisor and a lawyer.

                ## Notes
                Never position the product as making the professional judgement itself. Frame it as preparing work for a qualified person to decide.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A practitioner advisor is engaged, outputs show sources, an audit trail is live, and claims have been reviewed by the advisor and a lawyer."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Engage a practising professional as an advisor with a written scope"
                - "Add source citations to every output a professional relies on"
                - "Build an audit trail of input, output and final professional decision"
                - "Have the advisor grade a sample of outputs against practice @recurring(monthly:11)"
            - name: Rebuilding a pre-AI product around models
              description: |-
                ## Purpose
                Founders with an existing software product face a choice between adding AI features at the edges and rebuilding the core workflow around what models now make possible. Testing a model-first version of the main workflow with a few existing customers shows whether a rebuild would win new business or only add cost and risk to a product that already works.

                ## Milestones
                1. The core workflow redesigned on paper assuming a model does the heaviest step.
                2. A prototype of the model-first workflow tested with three existing customers.
                3. Time saved and willingness to pay compared with the current product.
                4. A decision recorded: rebuild, add features at the edges, or leave as is.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A model-first prototype has been tested with three existing customers and a rebuild, extend or leave decision is recorded with evidence."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Redraw the core workflow assuming a model does the heaviest step"
                - "Build a rough prototype of the model-first version"
                - "Test the prototype with three existing customers and time the work"
                - "Record the rebuild, extend or leave decision with the evidence"
            - name: Founding AI engineer's first ninety days
              description: |-
                ## Purpose
                Joining an AI startup as its first dedicated AI engineer usually means inheriting prompts in five places, no evaluation set and a founder who wants new features weekly. A ninety-day plan that secures measurement first, then reliability, then speed of change, earns the trust to say no to the next shiny feature.

                ## Milestones
                1. Within thirty days, every model call inventoried and a first evaluation run in place.
                2. Within sixty days, prompts versioned, spend tagged and a fallback tested.
                3. Within ninety days, release time for a prompt change measured and halved.
                4. A written review with the founders at each thirty-day mark.

                ## Notes
                Start from the **Product spec** template only if you are also redrawing the system design. Otherwise a short shared document per thirty days is enough.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Thirty, sixty and ninety-day goals are met or explained, each with a written review agreed with the founders."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Inventory every model call in the codebase in the first week"
                - "Get a first evaluation run working within thirty days"
                - "Version prompts and tag spend within sixty days"
                - "Hold a written review with the founders at each thirty-day mark"
            - name: Fine-tuning a task model on proprietary data
              description: |-
                ## Purpose
                Once you have thousands of consented, high-quality examples and a stable task, a smaller fine-tuned model can match a frontier model on that task at a fraction of the cost and latency. Doing it properly means clean data splits, honest evaluation against the current production model and a plan for retraining as data and base models change.

                ## Milestones
                1. A training set of consented examples cleaned, deduplicated and split from the evaluation set.
                2. A fine-tuned model trained and scored against the production model on held-out cases.
                3. Cost and latency per task compared at expected volume.
                4. A go or no-go decision, with a retraining schedule if it goes live.

                ## Notes
                Check that no evaluation cases leaked into training. Contaminated scores are the most common way fine-tuning results mislead.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A fine-tuned model has been scored on uncontaminated held-out cases against production, with a recorded go or no-go and retraining plan."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Clean and deduplicate consented examples into a training set"
                - "Confirm no evaluation cases appear in the training data"
                - "Score the fine-tuned model against production on held-out cases"
                - "Check whether new data or base models justify retraining @recurring(quarterly)"
            - name: Reliable multi-step agent for a customer workflow
              description: |-
                ## Purpose
                An agent that completes a real customer workflow, such as reconciling records or processing a claim, has to succeed across many steps where a single wrong action can undo the rest. Building it with per-step evaluation, permission limits, checkpoints a human can inspect and a hard budget per run makes autonomy something you can sell with a straight face.

                ## Milestones
                1. The workflow broken into steps, each with its own success check.
                2. End-to-end success rate measured on at least thirty realistic runs.
                3. Tool permissions limited to what each step needs, with irreversible actions requiring confirmation.
                4. A per-run step limit and cost cap enforced, with failed runs handed to a person cleanly.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The agent's end-to-end success rate on thirty realistic runs is recorded, with step checks, permission limits and per-run caps in place."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Break the workflow into steps and write a success check for each"
                - "Build thirty realistic end-to-end test runs"
                - "Limit each tool to the permissions its step needs"
                - "Enforce a step limit and cost cap with a clean handoff on failure"
            - name: Self-hosted inference capacity planning
              description: |-
                ## Purpose
                Running your own models turns inference from a bill into a capacity problem: GPUs sit idle at night and queue up at peak, and a bad estimate either wastes money or slows every customer. Planning capacity from real traffic, with batching, autoscaling limits and a burst route to a hosted API, keeps utilisation high and latency inside budget.

                ## Milestones
                1. Hourly traffic and tokens per request profiled over at least two weeks.
                2. Throughput per GPU measured for your model, settings and batch size.
                3. Baseline and peak capacity sized, with a hosted API as the burst route.
                4. Utilisation and queue time tracked weekly against targets.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Capacity is sized from two weeks of profiled traffic, a burst route is tested, and weekly utilisation and queue time are tracked against targets."
                cadence: rolling
              tasks:
                - "Profile hourly traffic and tokens per request for two weeks"
                - "Measure throughput per GPU at your production settings"
                - "Set up a hosted API as the burst route and test it"
                - "Review GPU utilisation and queue times against targets @recurring(weekly:wed)"
            - name: Per-customer model adaptation for enterprise accounts
              description: |-
                ## Purpose
                Large customers want the product to know their terminology, templates and policies, and they want guarantees that their data never shapes another customer's results. Offering per-customer adaptation through isolated retrieval indexes, custom instructions or dedicated fine-tunes, with strict tenancy, can justify enterprise pricing if the isolation is provable.

                ## Milestones
                1. The adaptation options defined: custom instructions, isolated retrieval, or a dedicated fine-tune.
                2. Tenant isolation designed so no customer's data enters another's context or training.
                3. Isolation tested with deliberate cross-tenant probes and the results recorded.
                4. The offering priced to cover its build and running cost, and piloted with one enterprise customer.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One enterprise customer runs on an isolated adaptation that passed recorded cross-tenant probes, priced above its running cost."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Define the adaptation options you are willing to offer"
                - "Design tenant isolation for context, indexes and training data"
                - "Run cross-tenant probes and record the results"
                - "Pilot the offering with one enterprise customer at a set price"
---

# AI-Native Startup Building

This area is for founders and founding engineers whose product only works because a model does part of the job. It starts with foundations (where AI truly changes the customer's work, a hand-run pilot, build or buy calls, a first evaluation set, quality bars, cost envelopes, data rights and provider terms), moves through the routines that keep an AI product honest, the knowledge needed to judge evaluations, retrieval, agents and security, the decisions on models, open weights, cost, latency, pricing and moats, dated moments like a red team day and an investor diligence pack, variants for non-technical, solo, researcher and regulated-industry founders, and ends with specialist work on fine-tuning, agents and self-hosted inference.

What repeats is the discipline most AI startups skip: a weekly evaluation run before any prompt or model change, weekly trace reading and feedback capture, monthly spend, incident and model-release reviews, and quarterly failover drills and defensibility checks. The Product spec, Vendor, Metrics log, Risk register and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
