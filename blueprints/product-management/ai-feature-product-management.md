---
id: product-management.ai-feature-product-management
name: AI Feature Product Management
description: "Shaping AI features from use case to trusted release: quality bars and golden evaluation sets, failure catalogues, cost and latency budgets, weekly output reviews, model changes, guardrails and the launch gate."
category: business
version: 1.0.0
tags: [product-management, ai-feature-product-management, team, engineer, founder, llm, evaluation, ai-quality]
author: Aurum Technology
starter_structure:
  templates:
    - product-spec
    - risk-register
    - metrics-log
    - remediation-plan
    - meeting-notes
    - purchase-decision
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: AI Feature Product Management
          description: "Shaping AI-powered features, from choosing use cases and setting quality bars to evaluation, cost, failure handling and user trust."
          projects:
            - name: AI use case inventory scored by value and risk
              description: |-
                ## Purpose
                Teams adding AI usually start from what the model can do rather than the work customers need done, and end up with a chat box nobody asked for. Listing every candidate use case against the user task it speeds up, how often that task happens, what a wrong answer would cost and whether the data exists turns a vague mandate to add AI into a short, defensible list.

                ## Milestones
                1. Fifteen or more candidate use cases listed, each tied to a named user task.
                2. Each one scored for frequency, value of a good answer, harm of a wrong one and data availability.
                3. A top three chosen, with the reason each beat the rest written in one line.
                4. The low-scoring ideas parked in a visible list rather than quietly dropped.

                ## Notes
                Favour tasks where a draft that is 80 percent right still saves time, such as summaries or first replies, over tasks where any error is costly, such as figures presented as fact.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored inventory of at least fifteen AI use cases exists, with a top three chosen and the reasoning recorded beside each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every AI idea raised in the last six months from tickets, sales calls and the team"
                - "Ask the agent to suggest use cases from your top twenty support ticket themes"
                - "Score each idea for frequency, value, harm of errors and data on hand"
                - "Choose a top three and write one line on why each made the cut"
            - name: Rules, classic ML or language model choice
              description: |-
                ## Purpose
                Plenty of problems sold as AI work are better solved by a lookup table, a pattern match or a simple classifier that is cheaper, faster and fully predictable. Before committing to a language model for the top use case, test whether a simpler approach reaches the bar, and record why the model earns its cost if it does.

                ## Milestones
                1. The top use case described as an input, an output and a definition of correct.
                2. A simple non-model approach sketched and, where cheap, tried on twenty examples.
                3. Language model output tried on the same twenty examples.
                4. A written choice of approach, with cost, speed and predictability compared.

                ## Notes
                Hybrids are common and often best: rules for the cases you can predict, a model for the long tail.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written approach decision compares a simple method and a model on the same twenty examples and names the choice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the use case as one input, one output and what makes an output correct"
                - "Ask an engineer how a rules or simple classifier version would work"
                - "Run twenty real examples through both approaches"
                - "Record the chosen approach with cost, speed and accuracy side by side"
            - name: Written quality bar with acceptable error rates
              description: |-
                ## Purpose
                Every AI feature makes mistakes, so the useful question is which mistakes, how often and at what cost. A quality bar written before building, such as 'no invented account numbers, fewer than one in twenty summaries missing a key action', gives engineers a target and gives you an honest launch criterion instead of a demo that felt good.

                ## Milestones
                1. Errors grouped into severity levels, from cosmetic to unacceptable.
                2. A maximum rate agreed for each severity level.
                3. Zero-tolerance errors named explicitly.
                4. The bar agreed by the product trio and filed with the feature brief.

                ## Notes
                Write the bar in terms a grader can check on a single output. 'Helpful and accurate' cannot be graded; 'quotes no figure absent from the source' can.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A quality bar lists severity levels with a maximum error rate for each and is agreed by the product, design and engineering leads."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write three examples each of a cosmetic, a serious and an unacceptable error"
                - "Agree a maximum rate for each severity with design and engineering"
                - "Name the errors that block launch at any rate"
                - "Revisit the quality bar against the latest production data @recurring(quarterly)"
            - name: Golden evaluation set from real examples
              description: |-
                ## Purpose
                Without a fixed set of test cases, every prompt change is judged by whoever tried it last on whatever example came to mind. A golden set of 100 to 200 real inputs, each with a reference answer or grading notes and covering the hard and awkward cases, lets the team measure quality the same way every time.

                ## Milestones
                1. At least 100 real inputs collected, with personal data removed.
                2. Each input labelled with an expected answer or grading notes.
                3. Hard cases, edge cases and known failures making up at least a quarter of the set.
                4. The set stored with a version number where anyone on the team can run it.

                ## Notes
                Do not let the set be all easy examples from the happy path. The cases that would embarrass you in production belong here first.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned golden set of at least 100 labelled real examples, a quarter of them hard cases, is stored where the team can run it."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pull 150 real inputs from logs, tickets or pilot users with personal data stripped"
                - "Write a reference answer or grading notes for each input"
                - "Tag each case as typical, edge case or known failure"
                - "Store the set as version 1.0 with a short readme"
            - name: Failure mode catalogue for the AI feature
              description: |-
                ## Purpose
                Language models fail in familiar ways: invented facts, confident wrong answers, ignored instructions, unsafe content, leaked context and refusals of reasonable requests. Cataloguing how each could show up in your specific feature, who would be hurt and how you would notice turns vague worry into a list engineers and designers can design against.

                ## Milestones
                1. Each common failure type described as it would appear in this feature.
                2. Every failure rated for likelihood and severity.
                3. A detection method and a mitigation named for the ten worst.
                4. The catalogue linked from the feature brief and reviewed by engineering.

                ## Notes
                Start from the **Risk register** template. Include the quiet failures, such as a subtly wrong summary, not just the dramatic ones.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A failure catalogue lists at least ten failure modes for the feature, each rated, with a named detection method and mitigation."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write one concrete example of each common failure type for this feature"
                - "Rate each failure for likelihood and harm to the user"
                - "Name how you would detect and limit the ten worst"
                - "Walk engineering through the catalogue and add what they spot"
            - name: Data and privacy check for model inputs
              description: |-
                ## Purpose
                Prompts often carry customer names, documents and account details to a third-party provider, and customer contracts may limit where that data goes and whether it can be used for training. Checking with your privacy or legal lead what may be sent, what the provider retains and what customers must be told avoids rebuilding the feature after a security review stops it.

                ## Milestones
                1. Every data field the feature sends to the model listed.
                2. The provider's retention, training and processing region terms recorded.
                3. Your privacy or legal lead's view on each field written down.
                4. Any fields that must be masked or removed agreed with engineering.

                ## Notes
                This is preparation for the people who make the call. Legal and contractual conclusions belong to your privacy, legal or security lead.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A data inventory for the feature's prompts has been reviewed by the privacy or legal lead, with masking decisions recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every field and document the feature will send to the model"
                - "Copy the provider's data retention and training terms into the brief"
                - "Book thirty minutes with your privacy or legal lead to review the list"
                - "Re-check the provider's data terms when renewing or switching @recurring(yearly)"
            - name: Cost per task estimate before building
              description: |-
                ## Purpose
                A feature that costs a couple of cents per use looks trivial in a demo and becomes a serious monthly bill once a heavy user triggers it two hundred times a day. Estimating tokens per request, requests per user and cost at expected volume, including a heavy-user case, shows early whether the economics work or whether the design needs caching, limits or a smaller model.

                ## Milestones
                1. Average input and output tokens per request measured on golden set examples.
                2. Requests per active user per month estimated for typical and heavy users.
                3. Monthly cost projected at current and three times current usage.
                4. A ceiling on cost per active user agreed with whoever owns the margin.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A cost model shows cost per request, per typical user and per heavy user at current and tripled volume, with an agreed ceiling."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Measure average input and output tokens on twenty golden set examples"
                - "Estimate requests per month for a typical and a heavy user"
                - "Project monthly cost at current and tripled usage"
                - "Agree a cost ceiling per active user with finance or the founder"
            - name: One-page AI feature brief
              description: |-
                ## Purpose
                AI work drifts easily, because there is always another prompt tweak or model to try. A one-page brief stating the user problem, the chosen approach, the quality bar, the failure catalogue, the cost ceiling and what the feature will decline to do keeps design, engineering and leadership arguing about the same thing.

                ## Milestones
                1. A brief of no more than one page covering problem, approach, quality bar, cost and limits.
                2. Explicit non-goals listed, including requests the feature will decline.
                3. Links to the golden set, failure catalogue and cost model added.
                4. The brief reviewed and agreed by the product trio.

                ## Notes
                Start from the **Product spec** template and cut it to one page. The non-goals section matters more for AI features than for most.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page brief with problem, approach, quality bar, cost ceiling and non-goals is agreed by the product, design and engineering leads."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the brief from the product spec template in one sitting"
                - "Write five things the feature will not do or will decline"
                - "Link the golden set, failure catalogue and cost model"
                - "Get sign-off from the design and engineering leads"
            - name: Human baseline for the task today
              description: |-
                ## Purpose
                Saying a model is 90 percent accurate means little until you know how well people do the same task, how long it takes them and where they disagree with each other. Measuring the current human process on a sample gives a fair comparison, a realistic target and often the discovery that some reference answers are themselves disputed.

                ## Milestones
                1. Two or three people timed doing the task on twenty golden set cases.
                2. Their accuracy against the reference answers scored.
                3. Cases where people disagreed with each other flagged and the references reviewed.
                4. A one-line human baseline added to the quality bar.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Human accuracy, time per case and disagreement rate on twenty cases are recorded beside the quality bar."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask two colleagues who do the task today to complete twenty cases"
                - "Time each case and score the answers against the references"
                - "Flag the cases where the two people disagreed"
                - "Add the human accuracy and time per case to the quality bar"
            - name: Weekly evaluation run against the golden set
              description: |-
                ## Purpose
                Quality regressions in AI features rarely announce themselves, and a prompt edit that fixes one complaint can quietly break twenty other cases. Running the golden set every week, and before every prompt or model change, and keeping the scores in one table shows drift the week it happens.

                ## Milestones
                1. The golden set runnable with one command or button.
                2. Scores per severity level recorded each week in a running table.
                3. A rule that no prompt or model change ships without a fresh run.
                4. Eight consecutive weekly runs recorded.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly evaluation runs are recorded, and every shipped prompt or model change has a run attached."
                cadence: rolling
              tasks:
                - "Ask engineering to make the golden set runnable in one step"
                - "Run the golden set and record scores by severity @recurring(weekly:tue)"
                - "Investigate any case that passed last week and fails now"
                - "Add the run-before-ship rule to the team's definition of done"
            - name: Weekly sample review of live AI outputs
              description: |-
                ## Purpose
                Golden sets age, and real users ask things nobody predicted. Reading a random sample of 30 to 50 live outputs each week, graded against the quality bar, is the most reliable way a product manager learns what the feature actually does in use, and it feeds new cases into the evaluation set.

                ## Milestones
                1. A way to pull a random, privacy-safe sample of live inputs and outputs.
                2. A grading sheet using the quality bar's severity levels.
                3. Weekly samples graded, with error rates tracked over time.
                4. Notable failures copied into the golden set backlog.

                ## Notes
                Sample at random, not from complaints only, or you will overestimate the error rate. Complaints get their own triage.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly samples of at least 30 live outputs are graded, with error rates tracked and failures added to the golden set backlog."
                cadence: rolling
              tasks:
                - "Agree with engineering how to pull a random sample with personal data masked"
                - "Set up a grading sheet using the quality bar severity levels"
                - "Grade 30 random live outputs against the quality bar @recurring(weekly:thu)"
                - "Copy each new failure type into the golden set backlog"
            - name: Thumbs and problem report triage
              description: |-
                ## Purpose
                Thumbs-down buttons and report-a-problem links collect the most direct evidence of AI failures, yet many teams let the reports pile up in a table nobody opens. Reading and tagging them weekly against the failure catalogue shows which failures users actually notice and mind, which are not always the ones the team worries about.

                ## Milestones
                1. A feedback control on every AI output, with an optional free-text reason.
                2. Reports landing in one queue the product manager reads.
                3. Each report tagged with a failure type from the catalogue.
                4. A monthly tally of the top five failure types shared with the team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every thumbs-down and problem report from the last month is tagged with a failure type, and the top five types are shared with the team."
                cadence: rolling
              tasks:
                - "Check that every AI output has a feedback control with an optional reason"
                - "Route all AI feedback into one queue you can read"
                - "Tag new reports with a failure type from the catalogue @recurring(weekly:mon)"
                - "Share the month's top five failure types with the team"
            - name: Prompt and model change log
              description: |-
                ## Purpose
                Prompts, model versions, temperature settings and retrieval rules all change behaviour, and when quality drops a month later nobody remembers which change did it. A plain log of every change with date, reason, author and evaluation score turns debugging from guesswork into reading.

                ## Milestones
                1. A log with date, change, reason, author and evaluation score columns.
                2. Every prompt, model and setting change since launch entered.
                3. Prompts stored under version control rather than edited live in a dashboard.
                4. A monthly read-through linking quality changes to log entries.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every prompt, model and setting change from the last three months appears in the log with its evaluation score."
                cadence: rolling
              tasks:
                - "Create a change log with date, change, reason, author and score"
                - "Back-fill changes since launch from commits and chat threads"
                - "Ask engineering to keep prompts under version control"
                - "Read the change log against the quality trend @recurring(monthly:14)"
            - name: Monthly AI cost and latency review
              description: |-
                ## Purpose
                Model bills grow with usage, prompt length and retries, often faster than the revenue the feature brings, and slow responses drive users away before quality does. A monthly look at cost per active user and 95th percentile response time against your ceilings catches a creeping prompt or a runaway account before the invoice does.

                ## Milestones
                1. Cost per request, per active user and in total pulled for the month.
                2. Median and 95th percentile response times recorded.
                3. Both compared with the agreed ceilings in a running log.
                4. An action named for any figure over its ceiling.

                ## Notes
                Start from the **Metrics log** template. Break cost down by customer, because one account can make up most of the bill.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly entries in the cost and latency log, each compared with the ceilings, with actions recorded for any breach."
                cadence: rolling
              tasks:
                - "Set up a metrics log for cost per user and response times"
                - "Pull the month's model spend, usage and latency figures @recurring(monthly:20)"
                - "List the five accounts with the highest model cost"
                - "Write an action for any figure above its ceiling"
            - name: AI incident log and response routine
              description: |-
                ## Purpose
                Sooner or later the feature will say something wrong, offensive or leaked from another user's context, and a screenshot will reach a customer's leadership or social media. Deciding in advance who is called, how the feature is switched off, what support says and how the incident is written up turns a bad afternoon into a contained one.

                ## Milestones
                1. A severity scale for AI incidents tied to the failure catalogue.
                2. A named owner and a tested way to disable the feature within minutes.
                3. A holding message for support agreed.
                4. Every incident logged with cause, fix and the evaluation case added.

                ## Notes
                Start from the **Remediation plan** template for serious incidents. Every incident should end with at least one new case in the golden set.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An incident routine with an owner, a tested off switch and a support message exists, and every logged incident has a cause, fix and new evaluation case."
                cadence: rolling
              tasks:
                - "Write a three-level severity scale for AI incidents"
                - "Confirm the feature can be switched off within minutes and who can do it"
                - "Draft the holding message support will use"
                - "Review the incident log for repeating causes @recurring(monthly:25)"
            - name: Evaluation set refresh from production cases
              description: |-
                ## Purpose
                An evaluation set built before launch reflects what the team imagined users would ask. Adding a handful of real production cases every month, especially failures from sampling and feedback, and retiring cases that no longer match the product, keeps the scores meaningful as usage shifts.

                ## Milestones
                1. A backlog of candidate cases fed by sampling, feedback and incidents.
                2. Ten to twenty new cases added and labelled each month.
                3. Outdated cases retired with a note on why.
                4. A new version number for each refresh, with scores re-baselined.

                ## Notes
                Keep a frozen copy of each version so you can still compare against older results.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The golden set has been refreshed three months running, each version adding at least ten production cases and recording a new baseline."
                cadence: rolling
              tasks:
                - "Create a candidate case backlog fed from sampling, feedback and incidents"
                - "Label and add ten to twenty new cases to the golden set @recurring(monthly:3)"
                - "Retire cases that no longer match how the product works"
                - "Re-run the set and record the new baseline under a new version"
            - name: Model provider updates and deprecation watch
              description: |-
                ## Purpose
                Providers retire model versions on published schedules, change default behaviour and release cheaper or faster options every few months. Checking their changelogs and deprecation notices monthly gives you time to evaluate a replacement on your own golden set instead of discovering a forced migration two weeks before the cut-off.

                ## Milestones
                1. The exact model versions in use listed with their announced retirement dates.
                2. A monthly check of each provider's changelog and deprecation page.
                3. Relevant changes noted with a decision to ignore, evaluate or plan a migration.
                4. No model in use within 90 days of retirement without a migration plan.

                ## Notes
                Pin exact model versions rather than aliases that silently move to a newer model.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model version in use is listed with its retirement date, and none is within 90 days of retirement without a migration plan."
                cadence: rolling
              tasks:
                - "List every model version in use and where each one is called"
                - "Ask engineering to pin exact model versions instead of moving aliases"
                - "Read each provider's changelog and deprecation notices @recurring(monthly:11)"
                - "Mark each relevant change as ignore, evaluate or plan migration"
            - name: Abuse and jailbreak case library
              description: |-
                ## Purpose
                Once an AI feature is public, some users will try to make it reveal its instructions, produce banned content, act on another user's data or run up costs. A growing library of these attempts, run with the evaluation set, means each new trick is tested against every future prompt change rather than fixed once and forgotten.

                ## Milestones
                1. A separate adversarial set of at least 40 attempts grouped by type.
                2. Instructions injected through documents or web pages included where the feature reads them.
                3. The adversarial set run alongside the golden set.
                4. New attempts from logs and incidents added monthly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An adversarial set of at least 40 grouped attempts runs alongside the golden set, with new cases added each month."
                cadence: rolling
              tasks:
                - "Collect 40 attempts to extract instructions, bypass rules or misuse data"
                - "Add injected instructions hidden inside sample documents the feature reads"
                - "Run the adversarial set together with the golden set"
                - "Add new attack attempts seen in logs or incidents @recurring(monthly:17)"
            - name: Quarterly AI feature health review
              description: |-
                ## Purpose
                Leaders and neighbouring teams hear about AI features through anecdotes, usually the worst one. A quarterly review that puts quality scores, live error rates, adoption, cost per user and incidents on one page, with next quarter's priorities, keeps decisions about investment grounded in evidence.

                ## Milestones
                1. A one-page health summary covering quality, adoption, cost and incidents.
                2. Trends shown against the previous quarter and the quality bar.
                3. Three priorities for next quarter agreed.
                4. Notes and decisions filed where stakeholders can find them.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four quarterly health reviews are held in a year, each with a one-page summary and three recorded priorities."
                cadence: cyclic
              tasks:
                - "Book the AI health review with product, engineering and support leads @recurring(quarterly)"
                - "Assemble quality, adoption, cost and incident figures on one page"
                - "Agree three priorities for next quarter in the meeting"
                - "File the notes and decisions where stakeholders can find them"
            - name: How language models fail, for product managers
              description: |-
                ## Purpose
                Product managers who understand why models invent facts, lose track of long instructions or answer the same question differently make better calls about scope and design. A few focused hours on how next-token prediction, context limits and sampling create these behaviours replaces mystique with working intuition.

                ## Milestones
                1. Two or three introductory explainers on how language models generate text read.
                2. Five behaviours, such as invention and inconsistency, explained in your own words.
                3. Each behaviour reproduced deliberately in a model playground.
                4. A one-page cheat sheet shared with the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page cheat sheet explaining five model behaviours, each reproduced in a playground, is shared with the team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose two introductory explainers on how language models generate text"
                - "Reproduce invented facts and inconsistent answers in a model playground"
                - "Write each behaviour in your own words with an example"
                - "Share a one-page cheat sheet with the team"
            - name: Writing grading rubrics for AI outputs
              description: |-
                ## Purpose
                Different reviewers give different verdicts on whether an answer is good, which makes scores noisy and arguments endless. Learning to write rubrics with specific, observable criteria, such as 'mentions the refund deadline' or 'contains no figure absent from the source', lets two graders agree and lets an automated grader be checked.

                ## Milestones
                1. A rubric of five to eight observable pass or fail criteria for the feature.
                2. Two people grading the same 30 outputs independently.
                3. Agreement between graders measured and disputed criteria rewritten.
                4. Agreement above 85 percent on a second round.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A rubric of five to eight criteria reaches at least 85 percent agreement between two graders on 30 outputs."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write five to eight pass or fail criteria an outsider could check"
                - "Have two people grade the same 30 outputs separately"
                - "Rewrite the criteria where the graders disagreed most"
                - "Grade a fresh 30 outputs and measure agreement again"
            - name: Prompt writing basics for product managers
              description: |-
                ## Purpose
                Being able to write and test a prompt yourself means you can prototype an idea in an afternoon, and talk precisely with engineers about what is a prompt problem and what is a model limit. Practising clear instructions, examples, output formats and context on your own feature's cases builds that skill quickly.

                ## Milestones
                1. A prompt for the top use case written with instructions, examples and an output format.
                2. Three variants tested against twenty golden set cases.
                3. The effect of each change recorded in a short note.
                4. The best variant handed to engineering with its scores.

                ## Notes
                Change one thing at a time, and test on the set, not on the single example you have in your head.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three prompt variants for the top use case are scored on twenty golden set cases, with the findings handed to engineering."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a first prompt with instructions, two examples and an output format"
                - "Test three variants on twenty golden set cases, changing one thing each time"
                - "Note what each change did to the scores"
                - "Hand the best variant and its scores to engineering"
            - name: Tokens, context windows and pricing units
              description: |-
                ## Purpose
                Model pricing, speed and failures on long documents all come back to tokens and context windows, yet many product decisions are made without knowing what a token is. Learning how text becomes tokens, how context limits cut off input and how input and output are priced differently makes cost and design conversations concrete.

                ## Milestones
                1. Token counts measured for typical inputs in your product, such as an email or a contract.
                2. The context limit of your chosen model compared with your longest real input.
                3. Input and output prices for your model written down.
                4. A note on what your feature does when input exceeds the limit.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note records token counts for typical inputs, the context limit, prices per token and the over-limit behaviour."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count tokens for five typical inputs using the provider's tokeniser tool"
                - "Find your longest real input and compare it with the context limit"
                - "Write down input and output prices per million tokens"
                - "Ask engineering what the feature does when input is too long"
            - name: Reading model benchmarks with scepticism
              description: |-
                ## Purpose
                New models arrive with leaderboard scores on public benchmarks that may have leaked into training data and rarely resemble your task. Learning what common benchmarks measure, and how far they sit from your golden set, stops a launch announcement from setting your roadmap.

                ## Milestones
                1. What three widely quoted benchmarks actually test summarised in a line each.
                2. Known problems such as contamination and narrow task coverage noted.
                3. One recent model announcement checked against your own evaluation.
                4. A team rule that no model switch rests on public benchmarks alone.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note on three benchmarks and their limits is shared, with one announcement's claims compared against your own evaluation results."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read what three widely quoted benchmarks test and how they are scored"
                - "Note how contamination and narrow tasks distort benchmark results"
                - "Run one newly announced model on your golden set and compare"
                - "Agree a team rule that no model switch rests on public benchmarks alone"
            - name: Model-graded evaluation and its limits
              description: |-
                ## Purpose
                Using one model to grade another's output makes evaluation fast enough to run on every change, but model graders tend to favour longer answers, their own style and a confident tone. Learning to set one up from a rubric and to check it against human grades tells you when its scores can be trusted.

                ## Milestones
                1. A model grader prompt built from your rubric.
                2. Its grades compared with human grades on 50 outputs.
                3. Known biases tested, such as a preference for longer answers.
                4. A monthly spot check of the grader against human grades in place.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A model grader agrees with human grades on at least 80 percent of 50 outputs, with a monthly spot check scheduled."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Turn the rubric into a grading prompt with a pass or fail output"
                - "Compare model and human grades on 50 outputs"
                - "Test whether the grader rewards longer answers with the same content"
                - "Spot-check 20 model grades against your own @recurring(monthly:15)"
            - name: Sample sizes for comparing model variants
              description: |-
                ## Purpose
                A prompt that scores 82 percent against a rival's 79 percent on 100 cases may be no better at all, because small sets carry wide margins of error. Learning basic confidence intervals and paired comparison for evaluation results stops the team chasing noise and tells you how big the golden set needs to be.

                ## Milestones
                1. A confidence interval for a pass rate calculated once by hand or in a sheet.
                2. A paired comparison run on two variants scored on the same cases.
                3. The smallest difference your current set can reliably detect written down.
                4. A decision on whether the golden set needs to grow.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The smallest reliable difference your golden set can detect is calculated and recorded, with a decision on its size."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Calculate a 95 percent confidence interval for your latest pass rate"
                - "Compare two variants case by case on the same set"
                - "Work out the smallest difference the set can reliably detect"
                - "Ask the agent to check your calculation and explain any gaps"
            - name: Choosing a model provider on your own evals
              description: |-
                ## Purpose
                Provider choice is usually made on reputation and a few demos, then lived with for years. Running two or three candidate models through your golden and adversarial sets, and scoring them on quality, cost, latency, data terms and rate limits, gives a decision you can defend and revisit.

                ## Milestones
                1. Two or three candidate models shortlisted with pricing and data terms.
                2. Each run through the golden and adversarial sets.
                3. A comparison table of quality, cost, latency, data terms and rate limits.
                4. The choice recorded, with the runner-up named as a fallback.

                ## Notes
                Start from the **Purchase decision** template. Design so the model can be swapped, even if you never do.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison table scores at least two models on your own evaluation sets, cost, latency and data terms, with a choice and fallback recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Shortlist two or three models that meet your data and region needs"
                - "Run each candidate through the golden and adversarial sets"
                - "Build a table of quality, cost, latency, rate limits and data terms"
                - "Re-run the provider comparison on the current golden set @recurring(yearly)"
            - name: Large and small model routing decision
              description: |-
                ## Purpose
                The most capable model is rarely needed for every request: classifying an intent or extracting a date can often run on a model ten times cheaper and faster. Deciding which steps need the large model and which can use a small one, tested on the golden set, can cut cost and latency sharply without lowering quality where it matters.

                ## Milestones
                1. The feature broken into its separate model calls or steps.
                2. Each step tested on a smaller model against the golden set.
                3. Steps that hold their score on a small model moved to it.
                4. Cost and latency before and after recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each model step has been tested on a smaller model, with routing chosen and cost and latency before and after recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each separate model call the feature makes"
                - "Test each step on a smaller model using golden set cases"
                - "Move steps that keep their score onto the smaller model"
                - "Record cost and latency before and after the change"
            - name: Retrieval, fine-tuning or prompting decision
              description: |-
                ## Purpose
                When a model lacks your company's knowledge or style, teams often reach for fine-tuning first, though putting the right documents into the prompt or writing better instructions usually closes the gap faster and stays current. Comparing the three against your actual gap, whether missing facts, wrong format or wrong tone, leads to the cheapest fix that works.

                ## Milestones
                1. The quality gap diagnosed as missing knowledge, format, tone or reasoning.
                2. Prompting improvements tried first and scored.
                3. Retrieval or fine-tuning trialled only for the gap prompting could not close.
                4. The chosen approach recorded with its upkeep cost.

                ## Notes
                Knowledge that changes weekly suits retrieval. Consistent format or style across thousands of outputs is where fine-tuning tends to earn its keep.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the quality gap, the approaches scored against it and the chosen approach with its upkeep cost."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Classify the twenty worst golden set failures by type of gap"
                - "Try instruction and example changes first and score them"
                - "Trial retrieval or fine-tuning only for the gaps that remain"
                - "Write down the choice and who will maintain it"
            - name: Human review points for high-stakes outputs
              description: |-
                ## Purpose
                Some outputs, such as a message sent to a customer, a refund approved or a note filed to a record, should not reach the world without a person approving them. Deciding which actions need review, what the reviewer sees and how their edits are captured keeps most of the speed while making a person accountable for the consequential steps.

                ## Milestones
                1. Every action the feature can take rated by reversibility and harm.
                2. Review required for the irreversible and high-harm actions.
                3. A review screen showing the output, its sources and an easy edit.
                4. Reviewer overrides tracked as a quality signal.

                ## Notes
                Watch for rubber-stamping. If reviewers approve 99 percent without edits, either the step is safe to automate or the review is not really happening.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every feature action is rated, review is required for the high-harm ones and the override rate is checked monthly."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every action the feature can take and rate its reversibility"
                - "Mark the actions that must wait for a person's approval"
                - "Sketch the review screen with output, sources and edit controls"
                - "Check reviewer override and edit rates @recurring(monthly:22)"
            - name: Interface patterns for uncertain AI output
              description: |-
                ## Purpose
                Users trust AI output more than they should when it looks like any other fact on screen, and less than they should after one visible mistake. Designing with editable drafts, cited sources, clear AI labelling and easy undo sets expectations, so users check what matters and keep using the feature after it errs.

                ## Milestones
                1. Each AI output shown as an editable draft or with its sources.
                2. A consistent visual marker for AI-generated content.
                3. Undo or regenerate available wherever output is applied.
                4. Five users observed with the design and their checking behaviour noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "AI outputs use a consistent marker, sources or editable drafts and undo, tested with five users whose checking behaviour is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Audit where AI output appears and how it is presented today"
                - "Agree a consistent marker for AI-generated content with design"
                - "Add sources or editable drafts to the highest-stakes output"
                - "Watch five users work with it and note when they check the output"
            - name: Fallback behaviour when the model fails
              description: |-
                ## Purpose
                Provider outages, rate limits, timeouts and refusals happen every week at scale, and a spinner that never resolves is worse than no feature at all. Designing what users see in each case, from a cached answer to a plain message and a manual route, keeps the product usable when the model is not.

                ## Milestones
                1. Each failure case listed: outage, timeout, rate limit, refusal and malformed output.
                2. A user-facing behaviour designed for each.
                3. A timeout set for every model call.
                4. Each fallback tested by simulating the failure.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every listed model failure has a designed fallback, a timeout and a passing simulated test."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the ways a model call can fail in your feature"
                - "Design what the user sees for each failure case"
                - "Agree a timeout for every model call with engineering"
                - "Simulate each failure in a test environment and check the fallback"
            - name: Latency budget and streaming decision
              description: |-
                ## Purpose
                Users judge a feature's speed by how long until something useful appears, not by total generation time. Setting a latency budget per interaction, and deciding where to stream text, show progress or run the work in the background, matches the model's pace to what users will tolerate.

                ## Milestones
                1. Each AI interaction classed as instant, conversational or background.
                2. A latency budget set for each class.
                3. Streaming or progress indicators chosen where the budget cannot be met.
                4. Measured times compared with the budget after the change.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each AI interaction has a latency class and budget, with measured times recorded against it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Class each AI interaction as instant, conversational or background"
                - "Set a time-to-first-output budget for each class"
                - "Choose streaming, progress or background processing where budgets slip"
                - "Measure real response times against the budget"
            - name: Cutting cost per task by a third
              description: |-
                ## Purpose
                Once a feature has users, the cheapest savings usually come from trimming prompts, caching repeated context, limiting output length and stopping needless retries rather than renegotiating price. A focused cost project with the golden set as a guard brings cost down without a hidden drop in quality.

                ## Milestones
                1. A breakdown of where tokens go: instructions, context, history, output and retries.
                2. Three or four savings ideas ranked by expected saving.
                3. Each change shipped only after the golden set holds its score.
                4. Cost per task down by a third, or the reason it could not be recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Cost per task falls by at least a third with golden set scores unchanged, or the blocking reason is recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Break down tokens per request into instructions, context, history and output"
                - "Ask the agent to suggest prompt cuts that keep the same instructions"
                - "Test each savings change on the golden set before shipping"
                - "Compare cost per task before and after each change"
            - name: Input and output guardrails layer
              description: |-
                ## Purpose
                Instructions in the prompt alone will not reliably stop personal data leaking, banned topics or off-task requests. A separate guardrail layer that checks inputs and outputs against clear rules, with a tracked block rate and false-block rate, catches what the model misses without frustrating ordinary users.

                ## Milestones
                1. Rules written for inputs and outputs the feature must refuse or redact.
                2. Checks in place for personal data, banned topics and off-task requests.
                3. Block and false-block rates measured on the golden and adversarial sets.
                4. A monthly review of blocked items for wrongly refused requests.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Guardrail checks run on inputs and outputs, with block and false-block rates measured and reviewed monthly."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the rules for what must be refused, redacted or redirected"
                - "Agree with engineering where the input and output checks will run"
                - "Measure block and false-block rates on both evaluation sets"
                - "Read a sample of blocked requests for wrong refusals @recurring(monthly:28)"
            - name: AI disclosure and labelling in the product
              description: |-
                ## Purpose
                Customers increasingly expect to know when they are reading AI output or talking to an automated agent, and some markets and customer contracts require it. Agreeing a disclosure policy, the wording in the interface and a help page on what the AI does with their data builds trust and gives sales a ready answer.

                ## Milestones
                1. A disclosure policy covering labels, automated conversations and data use.
                2. Interface wording agreed and applied consistently.
                3. A help page explaining what the AI does, its limits and its data handling.
                4. Requirements for your markets checked with your legal lead.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A disclosure policy, consistent interface labels and a public help page exist and have been checked with the legal lead."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a one-page AI disclosure policy for the product"
                - "Agree the label wording with design and apply it everywhere"
                - "Publish a help page on what the AI does and where it falls short"
                - "Re-check disclosure wording against new customer and market rules @recurring(yearly)"
            - name: Internal dogfood fortnight for the AI feature
              description: |-
                ## Purpose
                Colleagues are the cheapest and most forgiving testers you have, and two weeks of real use inside the company surfaces failures no evaluation set predicted. A structured dogfood period, with one feedback channel, daily triage and a closing summary, turns casual trying-out into evidence for the launch decision.

                ## Milestones
                1. Twenty or more colleagues with real tasks recruited.
                2. A single feedback channel and reporting format announced.
                3. Feedback triaged against the failure catalogue throughout the fortnight.
                4. A summary of findings and fixes ready for the launch gate.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two-week dogfood with at least twenty colleagues ends with a written summary of findings and fixes."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Recruit twenty colleagues who do the task the feature supports"
                - "Open one feedback channel with a short reporting format"
                - "Triage dogfood reports against the failure catalogue each afternoon"
                - "Write the dogfood summary for the launch gate"
            - name: Pre-launch red-team day
              description: |-
                ## Purpose
                Before external users see the feature, a day spent trying to break it on purpose finds the embarrassing failures while they are still cheap to fix. Inviting people from support, security and other teams, with set themes and a shared findings sheet, brings fresh eyes and new cases for the adversarial set.

                ## Milestones
                1. A date set with six to ten participants from outside the build team.
                2. Themes prepared, such as harmful content, data leaks and cost abuse.
                3. Every successful attack recorded with steps to reproduce.
                4. A fix or accepted risk agreed for each finding before launch.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A red-team day with at least six outside participants logs every successful attack, each with a fix or accepted risk before launch."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a red-team day and invite people from support and security"
                - "Prepare attack themes and a shared findings sheet"
                - "Run the day and record each successful attack with its steps"
                - "Agree a fix or an accepted risk for every finding"
            - name: AI launch quality gate and go or no-go
              description: |-
                ## Purpose
                Launching an AI feature on enthusiasm alone means the first customers find the gaps. A formal gate that checks golden set scores against the quality bar, zero-tolerance errors, adversarial results, cost per user, fallbacks and the incident routine makes go or no-go an evidence call recorded in writing.

                ## Milestones
                1. A gate checklist built from the quality bar, cost ceiling and failure catalogue.
                2. Evidence for each item gathered a week before the decision.
                3. A go, no-go or limited-release decision made by named approvers.
                4. Conditions and follow-ups for a conditional go recorded with owners.

                ## Notes
                A limited release to a small group is often the right answer when scores are close to the bar. The rollout mechanics themselves belong with the release process.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A dated go or no-go decision is recorded against a written gate checklist and signed off by named approvers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Turn the quality bar, cost ceiling and failure catalogue into a gate checklist"
                - "Gather evidence for every checklist item a week before the meeting"
                - "Hold the go or no-go meeting with named approvers"
                - "Record the decision and any conditions with owners"
            - name: Planned migration to a new model version
              description: |-
                ## Purpose
                Switching model versions, even within one provider, changes tone, formatting, refusal habits and cost in ways your prompts were never tuned for. Treating it as a planned migration, with side-by-side evaluation, prompt adjustments and a gradual switch, avoids a quiet quality drop for every user at once.

                ## Milestones
                1. The new version run on the golden and adversarial sets beside the current one.
                2. Prompts adjusted until the new version meets the quality bar.
                3. A gradual switch plan agreed with engineering.
                4. The old version retired before its deprecation date, with the change logged.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The new model version meets the quality bar on both sets and replaces the old one before its retirement date."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Run the new model version beside the current one on both sets"
                - "List the cases where behaviour changed and adjust the prompts"
                - "Agree a gradual switch plan with engineering"
                - "Log the migration in the change log with before and after scores"
            - name: Thirty-day post-launch AI quality review
              description: |-
                ## Purpose
                The first month after launch shows how real users phrase requests, which failures they notice and whether the feature is used beyond the novelty. A review at day thirty comparing live error rates, repeat use, feedback and cost with the pre-launch expectations decides what to fix, expand or pull back.

                ## Milestones
                1. Live error rates from sampling compared with launch gate scores.
                2. Repeat use after the first try measured.
                3. Top feedback themes and incidents summarised.
                4. A written decision to fix, expand or narrow the feature.
              priority: medium
              deadlineOffsetDays: 105
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A day-thirty review compares live quality, repeat use, feedback and cost with expectations and records a fix, expand or narrow decision."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book the review for thirty days after launch"
                - "Compare live sample error rates with launch gate scores"
                - "Measure how many first-time users came back to the feature"
                - "Write the decision to fix, expand or narrow, with owners"
            - name: First AI feature for a founder without ML staff
              description: |-
                ## Purpose
                Founders can now ship an AI feature with an API key and a weekend, which also makes it easy to ship one with no evaluation, no cost ceiling and customer data flowing to a provider nobody vetted. A lean version of the basics, sized for one or two people, gets the essentials in place without stalling the company.

                ## Milestones
                1. One use case chosen where a wrong answer cannot badly hurt a customer.
                2. A 50-case golden set and a single-page quality bar.
                3. Provider data terms read and a monthly spend cap set in the provider console.
                4. Ten pilot customers using it with a direct feedback line to the founder.

                ## Notes
                Set a hard spending limit with the provider on day one. A loop in the code or one abusive user can run up a month's budget overnight.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first AI feature is live with a 50-case golden set, a written quality bar, a provider spend cap and ten pilot customers."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Set a hard monthly spending limit in the model provider console"
                - "Build a 50-case golden set from real customer examples"
                - "Write a single-page quality bar for the feature"
                - "Invite ten friendly customers to pilot it with a direct feedback line"
            - name: Engineer stepping into AI feature ownership
              description: |-
                ## Purpose
                Engineers who built the first prototype often end up owning the AI feature's product decisions too, without having written a quality bar or run a customer conversation. A short plan to pick up the product side, from talking to users to defending trade-offs with leadership, keeps the feature from becoming a technology looking for a problem.

                ## Milestones
                1. Five user conversations held about the task the feature supports.
                2. The quality bar and failure catalogue rewritten from the user's point of view.
                3. A presentation on quality, cost and speed trade-offs given to leadership.
                4. A senior product manager reviewing decisions with you monthly.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five user conversations, a user-focused quality bar and one leadership trade-off presentation are completed within the plan."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask a senior product manager to review your AI decisions once a month"
                - "Hold five conversations with users about the task the feature supports"
                - "Rewrite the quality bar in the users' own words"
                - "Present the quality, cost and speed trade-offs to leadership"
            - name: Adding AI to a mature product carefully
              description: |-
                ## Purpose
                Long-standing users of an established product have workflows, muscle memory and sometimes strong views about AI, and a feature dropped into the middle of their screen can produce more complaints than usage. Introducing it as optional, with clear controls, an admin switch for business accounts and a way back, protects trust earned over years.

                ## Milestones
                1. The AI feature placed where it helps without moving existing controls.
                2. A user setting and an admin switch to turn it off.
                3. Announcement wording that explains what it does and what happens to data.
                4. Complaint and opt-out rates tracked for the first two months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The feature ships as optional with user and admin off switches, and opt-out and complaint rates are tracked for two months."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Check that the AI entry point does not move any existing control"
                - "Add a user setting and an admin switch to turn it off"
                - "Write the announcement covering purpose, limits and data use"
                - "Track opt-out and complaint rates every week for two months"
            - name: Answering customer AI security questionnaires
              description: |-
                ## Purpose
                Larger customers now send AI-specific security and procurement questions: which providers you use, whether their data trains models, where it is processed and how outputs are tested. A maintained bank of approved answers, agreed with security and legal, shortens sales cycles and stops individual salespeople improvising.

                ## Milestones
                1. The AI questions from recent questionnaires collected in one list.
                2. Approved answers written with security and legal sign-off.
                3. A short AI overview document ready to send.
                4. Answers reviewed whenever providers or data handling change.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "An approved answer bank covers every AI question from recent questionnaires and was reviewed within the last quarter."
                cadence: rolling
              tasks:
                - "Collect the AI questions from the last five security questionnaires"
                - "Draft answers on providers, training use, data location and testing"
                - "Get the answers approved by security and legal"
                - "Update the approved AI answers after any provider or data change @recurring(quarterly)"
            - name: Briefing sales and support on AI limits
              description: |-
                ## Purpose
                Sales teams tend to promise more than an AI feature reliably does, and support teams field the complaints when it falls short. A short briefing on what the feature does well, where it fails and how to explain errors to customers, refreshed as the feature changes, keeps promises and replies consistent.

                ## Milestones
                1. A one-page briefing on strengths, known limits and how to describe them.
                2. Approved wording for common customer questions about accuracy and data.
                3. A briefing session held with sales and support.
                4. A monthly note on what changed sent to both teams.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Sales and support hold a one-page AI briefing and have received a change note in each of the last three months."
                cadence: rolling
              tasks:
                - "Write a one-page briefing on the feature's strengths and known limits"
                - "Add approved answers to common questions on accuracy and data"
                - "Run a 30-minute briefing for sales and support"
                - "Send sales and support a short note on AI changes @recurring(monthly:6)"
            - name: Agent workflows with tool permissions and stop points
              description: |-
                ## Purpose
                Features where the model takes actions through tools, such as booking, editing records or sending messages, can fail in ways a chat answer cannot: the wrong recipient, a repeated action, a runaway loop. Scoping which tools the agent may call, with what limits, where it must stop for confirmation and how every step is logged, is the product work that makes such features safe to ship.

                ## Milestones
                1. Every tool the agent can call listed with what it can change.
                2. Limits set per tool, such as spend, record count or recipients.
                3. Confirmation stops placed before irreversible actions.
                4. A step-by-step action log that users and support can read.
                5. Task success measured on a set of multi-step scenarios.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each agent tool has written limits and confirmation stops, actions are logged step by step and success is measured on a scenario set."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List each tool the agent can call and what it can change"
                - "Set a limit per tool on spend, records or recipients"
                - "Place a confirmation stop before every irreversible action"
                - "Build twenty multi-step scenarios and measure task completion"
            - name: Implicit quality signals from user behaviour
              description: |-
                ## Purpose
                Few users ever click a thumbs button, but nearly all of them accept, edit, regenerate or abandon an AI output. Turning those behaviours into tracked signals, such as acceptance rate, how much of a draft is edited and regenerate rate, gives a live quality measure across all usage rather than the vocal few.

                ## Milestones
                1. Three implicit signals chosen and defined precisely.
                2. Each signal tracked per feature and per user segment.
                3. Signals checked against graded samples to confirm they follow quality.
                4. A weekly look at the signals in place.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three implicit signals are tracked and checked against graded samples, with a weekly review in place."
                cadence: rolling
              tasks:
                - "Define acceptance, edit amount and regenerate rate precisely"
                - "Ask engineering to log each signal for every AI output"
                - "Check the signals against your graded weekly samples"
                - "Review acceptance, edit and regenerate rates @recurring(weekly:fri)"
            - name: Shared evaluation harness across AI features
              description: |-
                ## Purpose
                With three or four AI features in a company, each team tends to build its own scripts, spreadsheets and grading habits, and nobody can compare quality across them. A shared harness with common formats for test cases, graders, scores and reports lets every new feature start with evaluation on day one.

                ## Milestones
                1. The evaluation methods of each AI feature surveyed.
                2. A common format for cases, rubrics, scores and run history agreed.
                3. Two existing features moved onto the shared harness.
                4. A starter kit that lets a new feature run its first evaluation in a day.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two AI features run on a shared evaluation harness, and a new feature can run its first evaluation within one day."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Survey how each AI feature team evaluates quality today"
                - "Agree a shared format for cases, rubrics, scores and run history"
                - "Move two existing features onto the shared harness"
                - "Write a starter kit so a new feature can evaluate on day one"
            - name: User memory and personalisation consent controls
              description: |-
                ## Purpose
                AI features that remember past conversations or learn preferences feel far more useful, and far more unsettling when users do not know what is kept. Designing memory with clear consent, a page showing what is remembered, easy deletion and limits on sensitive topics makes personalisation something users choose rather than discover.

                ## Milestones
                1. A decision on what the feature may remember and what it never stores.
                2. Opt-in or clear notice agreed with your privacy lead.
                3. A page where users can see, edit and delete what is remembered.
                4. Five users tested on whether they understand what is kept.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Memory has written storage rules, a privacy-approved consent flow and a view, edit and delete page tested with five users."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write what the feature may remember and what it must never store"
                - "Agree the consent approach with your privacy lead"
                - "Design a page to view, edit and delete remembered items"
                - "Test with five users whether they understand what is kept"
---

# AI Feature Product Management

This area is for product teams, engineers and founders shaping features built on language models and other AI, from the first use case to a feature customers trust. It starts with the foundations (a scored use case inventory, a quality bar, a golden evaluation set, a failure catalogue, data and cost checks and a one-page brief), then the operating routines for evaluation, sampling, feedback, cost and incidents, the skills of rubrics, prompts and evaluation statistics, decisions on providers, routing, guardrails and interface design, the dated moments from dogfood to the thirty-day review, situations for founders, engineers and mature products, and specialist work on agents, implicit signals, shared harnesses and memory.

The rhythm is weekly for the golden set run, live output sampling, feedback triage and implicit signals, monthly for cost and latency, the change log, incidents, provider updates, the adversarial library, set refreshes and guardrail reviews, and quarterly for the health review and the quality bar. The Product spec, Risk register, Metrics log, Remediation plan, Meeting notes and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
