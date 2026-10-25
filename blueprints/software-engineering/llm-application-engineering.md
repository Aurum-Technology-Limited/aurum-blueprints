---
id: software-engineering.llm-application-engineering
name: LLM Application Engineering
description: "LLM features that hold up in production: a chosen model and spend caps, versioned prompts and schemas, a golden eval set, retrieval and tool calling done carefully, and the reviews that catch drift, cost creep and bad outputs."
category: business
version: 1.0.0
tags: [software-engineering, llm-application-engineering, engineer, founder, llm, prompt-engineering, evals, retrieval]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - vendor
    - operational-checklist
    - product-spec
    - risk-register
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: LLM Application Engineering
          description: "Building features on large language models, including prompts, retrieval, tool calling, evaluations, cost control and handling unreliable outputs."
          projects:
            - name: Problem fit check before building with an LLM
              description: |-
                ## Purpose
                Plenty of LLM features get built for problems that a lookup table, a regular expression or a search box would solve faster, cheaper and more reliably. Writing down the task, what a wrong answer costs and how a person would judge a good one tells you whether a model belongs in the design before anyone writes a prompt.

                ## Milestones
                1. The task written as one sentence with its input and expected output.
                2. The cost of a wrong, slow or missing answer described for the user and the business.
                3. A simpler non-LLM baseline named and its likely accuracy estimated.
                4. A go, no-go or try-cheaply decision recorded with the reasons.

                ## Notes
                Good fits tolerate some error and have outputs a person can check quickly: drafting, summarising, classifying messy text, extracting fields. Poor fits need exact arithmetic, guaranteed facts or a legally binding answer.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page note states the task, the cost of a wrong answer, a non-LLM baseline and a recorded go or no-go decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the feature as one sentence naming its input and its output"
                - "List what happens to the user when the answer is wrong"
                - "Sketch the simplest non-LLM version and guess its accuracy"
                - "Record the go or no-go decision and share it with the team"
            - name: Model provider and model shortlist
              description: |-
                ## Purpose
                Picking whichever model was in the last blog post locks in price, latency and data terms you never compared. Scoring two or three providers on the same twenty real examples, with price per million tokens, context length, rate limits and data retention side by side, makes the choice defensible and easy to revisit.

                ## Milestones
                1. Three candidate models chosen across at least two providers.
                2. All candidates run on the same twenty representative inputs.
                3. Quality, latency, price per task and data terms compared in one table.
                4. A primary and a fallback model chosen, with the reasons written down.

                ## Notes
                Start from the **Purchase decision** template. Price per task matters more than price per token: a cheaper model that needs three retries is not cheaper.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison table covers at least three models on the same twenty inputs, and a primary and fallback model are recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick twenty real inputs that cover easy, typical and awkward cases"
                - "Run each candidate model on all twenty with the same prompt"
                - "Fill in quality, latency and cost per task for each model"
                - "Name a primary and a fallback model and note why"
            - name: API keys, quotas and spend caps
              description: |-
                ## Purpose
                One leaked key or a runaway retry loop can spend a month's budget overnight, and most providers will happily let it. Separate keys per environment, a hard monthly cap, budget alerts at sensible thresholds and keys kept in the secrets manager rather than the repo turn that risk into an email.

                ## Milestones
                1. Separate API keys issued for development, staging and production.
                2. Every key stored in the secrets manager and none present in source control.
                3. A hard spend cap and alerts at 50 and 80 percent of budget set on each account.
                4. Rate limits for each key written down next to expected peak traffic.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each environment has its own key in the secrets manager, a hard spend cap and two budget alerts, with a secret scan showing no keys in the repo."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Run a secret scan over the repo for provider API keys"
                - "Issue separate keys for development, staging and production"
                - "Set a hard monthly cap and alerts at 50 and 80 percent"
                - "Compare month-to-date spend with the cap and the forecast @recurring(monthly:5)"
            - name: Golden dataset of fifty real examples
              description: |-
                ## Purpose
                Without a fixed set of inputs with known good answers, every prompt change is judged by vibes and the last example someone tried. Fifty real, anonymised cases with expected outputs or grading notes, covering the common path and the known hard cases, become the yardstick for every later prompt, model and retrieval change.

                ## Milestones
                1. Fifty inputs collected from real usage or realistic drafts, with personal data removed.
                2. Each input paired with an expected output or a short grading rubric.
                3. At least ten deliberately hard cases included: ambiguous, long, adversarial or off-topic.
                4. The set stored in the repo with a version number and an owner.

                ## Notes
                Fifty labelled cases you trust beat five hundred you do not. Have a domain expert, not only an engineer, agree the expected answers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned file of fifty anonymised inputs with expected outputs or rubrics, including at least ten hard cases, sits in the repository."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export thirty real inputs from logs or support tickets and anonymise them"
                - "Write ten hard cases that probe ambiguity, length and refusal"
                - "Agree expected answers with a domain expert in one sitting"
                - "Commit the set with a version number and a short readme"
            - name: Prompts kept as versioned files in the repo
              description: |-
                ## Purpose
                Prompts pasted into code strings or edited in a provider console change without review, and nobody can say which wording produced last Tuesday's complaint. Keeping each prompt in its own file, reviewed like code and logged by version with every call, makes changes traceable and rollbacks a one-line revert.

                ## Milestones
                1. Every production prompt moved into its own file with a clear name.
                2. Prompt variables filled by a template function with no string concatenation of user input.
                3. A prompt version or hash recorded with every logged model call.
                4. Prompt changes going through normal code review with an eval result attached.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All production prompts live in versioned files, and each logged call includes the prompt version that produced it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search the codebase and provider console for every live prompt"
                - "Move each prompt into its own file under a prompts folder"
                - "Log a prompt hash alongside every model request"
                - "Add a review checklist line asking for eval results on prompt changes"
            - name: Structured output contract with schema validation
              description: |-
                ## Purpose
                Code that parses free text from a model breaks the first time the model adds a friendly sentence before the JSON. Defining a schema for every response, using the provider's structured output or tool mode where it exists and validating every reply before use, turns silent corruption into a counted, retryable error.

                ## Milestones
                1. A schema written for each model response the code consumes.
                2. Structured output or tool mode enabled wherever the provider supports it.
                3. Every response validated, with failures logged, retried once and then handled gracefully.
                4. A schema failure rate visible on the feature's dashboard.

                ## Notes
                Keep schemas small and flat. Deeply nested optional fields are where models drift, and enums beat free-text categories.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every consumed model response is validated against a schema, and the schema failure rate is tracked on a dashboard."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every place the code parses model output"
                - "Write a schema for each one with enums for fixed categories"
                - "Switch those calls to the provider's structured output mode"
                - "Add a counter for validation failures and a single retry"
            - name: Call wrapper with timeouts, retries and fallback
              description: |-
                ## Purpose
                Model APIs return rate-limit errors, overloaded responses and thirty-second stalls far more often than a typical database does. One shared client wrapper with per-call timeouts, capped retries with backoff and jitter, a fallback model and a clear error to the user stops every feature reinventing this badly.

                ## Milestones
                1. One shared client used for every model call in the codebase.
                2. Per-call timeouts and a retry cap with exponential backoff and jitter configured.
                3. A fallback model or cached answer used when the primary keeps failing.
                4. User-facing copy written for the case where no answer is available.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All model calls go through one wrapper with timeouts, capped retries and a tested fallback path."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find every direct call to a model SDK in the codebase"
                - "Write a wrapper with timeout, capped retries and jittered backoff"
                - "Add a fallback model behind a configuration flag"
                - "Simulate a rate-limit error in staging and confirm the fallback fires"
            - name: Model call logging with personal data redaction
              description: |-
                ## Purpose
                You cannot debug, evaluate or cost an LLM feature without its prompts and responses, yet those logs are full of whatever users typed, including names, addresses and health details. Logging every call with metadata, redacting personal data on the way in and limiting who can read and how long it is kept gives you the evidence without creating a new privacy problem.

                ## Milestones
                1. Every call logged with prompt version, model, tokens, latency, cost and outcome.
                2. Emails, phone numbers and other obvious identifiers redacted before storage.
                3. Log access limited to named roles and a retention period agreed.
                4. A trace view that shows one user request across all its model calls.

                ## Notes
                Agree the retention period and redaction rules with whoever handles privacy for the company. Redaction by pattern misses things, so treat it as reducing risk, not removing it.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Model calls are logged with cost and latency metadata, identifiers are redacted, and access and retention rules are written down."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the fields to log for every model call"
                - "Add redaction for emails, phone numbers and card-like numbers"
                - "Agree log access roles and retention with the privacy owner"
                - "Spot-check twenty stored logs for identifiers the redaction missed @recurring(monthly:19)"
            - name: Provider data retention and training terms review
              description: |-
                ## Purpose
                Whether a provider stores your prompts, for how long, in which region and whether it may train on them decides what customer data you are allowed to send. Reading the current terms, confirming the account settings match them and writing the answers down saves an awkward conversation when the first enterprise customer sends a security questionnaire.

                ## Milestones
                1. The provider's current data retention, training use and region terms summarised in plain words.
                2. Account or organisation settings checked against those terms.
                3. A list of data types you may and may not send agreed with the privacy or legal owner.
                4. The summary stored where sales and security can find it.

                ## Notes
                This is a record of what the terms say, not a legal opinion. Ask your legal adviser to confirm anything that a contract or regulation depends on.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated one-page summary of each provider's retention, training and region terms exists, with an agreed list of permitted data types."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the provider's current data usage and retention policy pages"
                - "Check the organisation settings for training and retention options"
                - "Draft the permitted data list and send it to the privacy owner"
                - "Reread provider data terms and note any changes @recurring(yearly)"
            - name: Weekly grading of sampled production outputs
              description: |-
                ## Purpose
                Aggregate metrics miss the answer that was confidently wrong, rude or quietly off-brand. Reading and grading twenty randomly sampled real outputs each week, against the same short rubric, is the cheapest early warning there is for drift, prompt regressions and new user behaviour.

                ## Milestones
                1. A five-point rubric written for the feature's most important qualities.
                2. Twenty outputs sampled at random each week, not hand-picked.
                3. Each sample graded, with failures tagged by type.
                4. A weekly score and the top failure type recorded in one running log.

                ## Notes
                Start from the **Metrics log** template. Rotate the grader between engineers so everyone sees what users see.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weeks of graded samples are logged, each with a score and a named top failure type."
                cadence: rolling
              tasks:
                - "Write a five-point grading rubric with one example per point"
                - "Build a query that pulls twenty random outputs from the last week"
                - "Grade twenty sampled outputs and log the score and top failure @recurring(weekly:fri)"
                - "Turn any repeated failure type into a ticket"
            - name: Eval suite run in CI on prompt changes
              description: |-
                ## Purpose
                A prompt tweak that fixes one complaint often breaks three cases nobody rechecked. Running the golden set automatically on any change to prompts, models or retrieval settings, and posting the score beside the diff, makes regressions visible before they ship.

                ## Milestones
                1. An eval script that runs the golden set and prints a score per case and overall.
                2. The script triggered in CI when prompt, model or retrieval files change.
                3. The score and the cases that changed posted on the pull request.
                4. A minimum score agreed below which a change needs explicit sign-off.

                ## Notes
                Keep the CI eval small and fast enough to run on every change, and the full run for releases. Cache results by prompt hash so unchanged cases do not cost money twice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every pull request that touches a prompt, model or retrieval setting shows an eval score, and a minimum score is enforced."
                cadence: rolling
              tasks:
                - "Write an eval script that scores the golden set and prints a summary"
                - "Trigger it in CI on changes under the prompts and retrieval folders"
                - "Post the score and changed cases as a pull request comment"
                - "Review the eval score trend across merged changes @recurring(monthly:9)"
            - name: Cost per task tracking for model usage
              description: |-
                ## Purpose
                Your monthly provider invoice says what you spent, not which feature, prompt or customer spent it. Tracking cost per completed task, split by feature and model, shows where a longer system prompt or a chatty retry loop is eating margin, and gives founders a number they can price against.

                ## Milestones
                1. Token counts and cost recorded per call and rolled up per feature.
                2. Cost per completed task calculated for each feature.
                3. The five most expensive prompts by monthly spend identified.
                4. A cost per task target set for each feature with its owner.

                ## Notes
                Remember output tokens usually cost several times more than input tokens, and failed or retried calls still cost money.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dashboard shows cost per completed task per feature, and each feature has a named owner and cost target."
                cadence: rolling
              tasks:
                - "Add a cost field to each logged call using current price sheets"
                - "Build a view of cost per completed task by feature"
                - "Review cost per task against target and list the top five prompts @recurring(monthly:3)"
                - "Ask the agent to summarise the month's biggest cost changes for the team"
            - name: Model deprecation and version change watch
              description: |-
                ## Purpose
                Providers retire model versions on published schedules and quietly change the behaviour of floating aliases, and a feature pinned to nothing can shift overnight. Pinning exact model versions and reading deprecation notices monthly turns a surprise outage into a planned migration.

                ## Milestones
                1. Every production call pinned to an exact model version, not a floating alias.
                2. A list of models in use with each one's announced retirement date.
                3. Provider changelogs and deprecation pages checked on a schedule.
                4. A migration ticket raised at least sixty days before any retirement date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All production calls use pinned model versions, and every announced retirement has a migration ticket opened sixty days ahead."
                cadence: rolling
              tasks:
                - "Replace floating model aliases with pinned versions in configuration"
                - "List models in use with their announced retirement dates"
                - "Read provider changelogs and deprecation notices for models in use @recurring(monthly:14)"
            - name: Thumbs-down feedback triage for AI features
              description: |-
                ## Purpose
                Users who click thumbs down or rephrase the same question three times are telling you exactly where the feature fails, but the signal rots in a table nobody opens. A short weekly triage that reads each negative rating with its prompt, retrieval context and output, and sorts it into a cause, turns complaints into regression cases and fixes.

                ## Milestones
                1. Thumbs up and down controls, with an optional comment, on every AI output.
                2. Each rating stored with the trace of the call that produced it.
                3. Negative ratings sorted weekly into causes such as retrieval miss, wrong format or refusal.
                4. The top cause each month turned into a ticket with an owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every negative rating from the past month has a recorded cause, and the most common cause has an owned ticket."
                cadence: rolling
              tasks:
                - "Add a rating control with an optional comment to AI outputs"
                - "Store each rating with the trace ID of the producing call"
                - "Read and sort the week's negative ratings by cause @recurring(weekly:tue)"
                - "Copy the clearest failures into the regression set"
            - name: Latency budget for model-backed screens
              description: |-
                ## Purpose
                A model call that takes eight seconds feels broken in a chat box and fine in an overnight report, so latency needs a budget per surface, not one global number. Setting time-to-first-token and total time targets for each screen, then tracking the 95th percentile, shows when a longer prompt or a slower model has crossed the line.

                ## Milestones
                1. A time-to-first-token and total time target set for each model-backed screen.
                2. Latency recorded per call at the 50th and 95th percentile.
                3. The slowest step in each flow identified: retrieval, model or post-processing.
                4. One change shipped that brings the worst screen inside its budget.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each model-backed screen has written latency targets, and a monthly report shows 95th percentile latency against them."
                cadence: rolling
              tasks:
                - "List every screen that waits on a model call"
                - "Agree time-to-first-token and total time targets for each"
                - "Compare 95th percentile latency with each screen's budget @recurring(monthly:22)"
                - "Profile the slowest flow to find which step dominates"
            - name: Regression set grown from production failures
              description: |-
                ## Purpose
                The golden set ages quickly once real users arrive with inputs nobody imagined. Adding every confirmed production failure as a new test case, with the output that should have happened, means the same mistake can only reach users once.

                ## Milestones
                1. A separate regression file alongside the golden set, run by the same eval script.
                2. Each confirmed failure added with its anonymised input and expected output.
                3. Every case tagged with the date and the cause of the original failure.
                4. The regression set passing in full before any release.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The regression set grows each month with tagged production failures, and releases are blocked until it passes."
                cadence: rolling
              tasks:
                - "Create a regression file the eval script picks up automatically"
                - "Add last month's confirmed failures with expected outputs"
                - "Move new confirmed failures into the regression set @recurring(monthly:27)"
            - name: Abuse and unsafe output report review
              description: |-
                ## Purpose
                Any open text box connected to a model will eventually be used to generate spam, extract the system prompt or produce something harmful under your brand. Reviewing moderation flags and user reports weekly, and deciding on each one, keeps the feature's safety rules grounded in what actually happens.

                ## Milestones
                1. Moderation checks applied to user input and model output where the risk warrants it.
                2. A report button and an internal queue for flagged conversations.
                3. Each flagged item reviewed with a decision: block, adjust prompt, ignore or escalate.
                4. Repeat abusers rate-limited or suspended under a written policy.

                ## Notes
                Agree who can see flagged content and how reviewers are supported if it is distressing. Escalate anything involving harm to a person to the right internal owner straight away.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every flagged conversation in the queue has a recorded decision within seven days, under a written abuse policy."
                cadence: rolling
              tasks:
                - "Add a report button that sends the conversation to a review queue"
                - "Write a one-page policy for blocking and suspending abusers"
                - "Review flagged conversations and record a decision on each @recurring(weekly:mon)"
            - name: Quarterly model re-benchmark on the golden set
              description: |-
                ## Purpose
                New models arrive every few months that are cheaper, faster or better at your task, and the one you picked last spring may now be the expensive option. Running the golden and regression sets against two or three current models each quarter shows whether a switch is worth the migration work.

                ## Milestones
                1. Two or three current candidate models chosen alongside the one in production.
                2. All of them run on the full golden and regression sets with the same prompts.
                3. Quality, cost per task and latency compared in one table.
                4. A keep or switch decision recorded with the numbers behind it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each quarter has a dated benchmark table of at least three models on the full eval sets, with a keep or switch decision."
                cadence: cyclic
              tasks:
                - "Pick two newer models worth comparing with the current one"
                - "Run golden and regression sets on current and candidate models @recurring(quarterly)"
                - "Record a keep or switch decision with the comparison table"
            - name: Prompt writing fundamentals practice
              description: |-
                ## Purpose
                Clear prompts follow a handful of habits: a defined role and task, explicit output format, examples of good answers, and instructions for what to do when the input is unclear. Rewriting three of your real prompts using those habits, and measuring each against the golden set, teaches more than any list of tricks.

                ## Milestones
                1. The provider's own prompting guide read and five habits noted.
                2. Three real prompts rewritten with a clear task, format and two examples.
                3. Before and after scores recorded on the golden set for each.
                4. A one-page house style for prompts shared with the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three rewritten prompts have before and after eval scores, and a one-page prompt house style is shared."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your provider's prompting guide and note five habits"
                - "Rewrite one live prompt with explicit format and two examples"
                - "Score the old and new prompts on the golden set"
                - "Write a one-page prompt house style from what worked"
            - name: Tokens and context window mechanics
              description: |-
                ## Purpose
                Cost, latency and truncation bugs all come back to tokens, yet many engineers never count them. Learning how your model's tokeniser splits text, code and other languages, how context limits apply to input plus output, and how models attend less reliably to the middle of long contexts explains a whole class of strange failures.

                ## Milestones
                1. Token counts measured for a typical request in English, another language and code.
                2. The context limit and maximum output length of each model in use written down.
                3. One long-context test showing where a fact placed mid-document is missed.
                4. A rule agreed for trimming or summarising context before it hits the limit.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note records measured token counts for three content types, model context limits and a tested trimming rule."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count tokens for one real request using the provider's tokeniser"
                - "Compare token counts for English, another language and source code"
                - "Hide a fact mid-document in a long prompt and test recall"
                - "Write the trimming rule for context that nears the limit"
            - name: Embeddings and vector search fundamentals
              description: |-
                ## Purpose
                Retrieval quality depends on understanding what an embedding captures and what it misses: similar wording is not the same as a relevant answer, and exact identifiers often vanish. Building a tiny search over a hundred of your own documents, and comparing it with keyword search, shows when vectors help and when they hurt.

                ## Milestones
                1. One hundred internal documents embedded with one embedding model.
                2. Ten realistic questions run through vector search and keyword search.
                3. Results for each compared, noting where each approach wins.
                4. A written view on whether hybrid search is needed for your content.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten questions are scored for both vector and keyword search over the same hundred documents, with a written conclusion."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick one hundred documents users actually ask about"
                - "Embed them and build a simple nearest-neighbour search"
                - "Run ten real questions through vector and keyword search"
                - "Write down where each method won and why"
            - name: Tool calling and function schema design
              description: |-
                ## Purpose
                When a model calls your functions, the tool names, descriptions and parameter schemas are the prompt, and vague ones lead to wrong tools, invented arguments and loops. Designing a small set of tools with tight schemas, clear descriptions and helpful error messages is a skill worth practising before building anything agent-like.

                ## Milestones
                1. Three tools defined with names, descriptions and strict parameter schemas.
                2. Twenty test requests run, with the chosen tool and arguments checked.
                3. Tool errors returned to the model as short, actionable messages.
                4. Descriptions revised until tool choice is correct on at least eighteen of twenty.

                ## Notes
                Treat every tool argument as untrusted input, exactly like a form field. The model can be talked into passing anything.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three tools with strict schemas pick the right tool and valid arguments on at least eighteen of twenty test requests."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Define three tools with strict schemas and one-line descriptions"
                - "Write twenty requests that should trigger each tool or none"
                - "Log the chosen tool and arguments for every request"
                - "Rewrite descriptions for the tools chosen wrongly and rerun"
            - name: LLM-as-judge grader design and calibration
              description: |-
                ## Purpose
                Using a model to grade outputs scales evaluation beyond what people can read, but an uncalibrated judge happily rewards long, confident nonsense. Building a judge prompt with a specific rubric and checking its scores against human grades on the same fifty cases tells you how far to trust it.

                ## Milestones
                1. A judge prompt with a narrow rubric and a fixed scoring scale.
                2. Fifty outputs graded by both a person and the judge.
                3. Agreement between the two measured and disagreements read.
                4. The judge used only for criteria where agreement is acceptable to the team.

                ## Notes
                Judges tend to prefer longer answers and outputs from their own model family. Ask for a short reason before the score, and prefer pass or fail over a ten-point scale.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A judge prompt has a measured agreement rate with human grades on fifty cases, and its approved criteria are written down."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a judge prompt for one narrow pass or fail criterion"
                - "Grade fifty outputs by hand without seeing the judge's scores"
                - "Run the judge on the same fifty and measure agreement"
                - "Read every disagreement and tighten the rubric"
            - name: Chunking and retrieval parameter experiments
              description: |-
                ## Purpose
                Chunk size, overlap, how many results to retrieve and whether to rerank change answer quality more than most prompt edits, but teams set them once from a tutorial. Running a small grid of settings against questions with known source passages shows which combination actually finds the right text for your documents.

                ## Milestones
                1. Thirty questions written, each with the passage that answers it.
                2. Three chunk sizes and two overlap settings compared on retrieval hit rate.
                3. The effect of a reranker on the best setting measured.
                4. Chosen settings recorded in configuration with the results behind them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A results table shows retrieval hit rate for at least six settings on thirty labelled questions, and the chosen settings are in configuration."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write thirty questions and mark the passage that answers each"
                - "Index the documents at three chunk sizes and two overlaps"
                - "Measure how often the right passage lands in the top five"
                - "Test a reranker on the best setting and record the change"
            - name: Prompt injection attack and defence practice
              description: |-
                ## Purpose
                Any text the model reads, from a user message to a retrieved web page or an email it summarises, can carry instructions that override yours. Trying the known injection patterns against your own feature, then layering defences such as privilege separation, output checks and confirmation before actions, shows how exposed it is.

                ## Milestones
                1. Ten injection attempts written, covering direct, indirect and data exfiltration patterns.
                2. Each attempt run against the feature with the outcome recorded.
                3. Tools that change data or send messages gated behind user confirmation.
                4. The attempts added to the regression set so fixes stay fixed.

                ## Notes
                No prompt wording reliably stops injection. Limit what the model is allowed to do, so that a successful injection has little to work with.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten recorded injection attempts have been run against the feature, actions with side effects need confirmation, and the attempts are in the regression set."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a public list of prompt injection patterns and pick ten"
                - "Plant an injection in a document the feature retrieves"
                - "Record which attempts changed the model's behaviour"
                - "Require user confirmation before any tool that writes or sends"
            - name: Sampling settings and nondeterminism study
              description: |-
                ## Purpose
                Temperature, top-p and the seed decide how much the same prompt varies between runs, and many flaky test results are really sampling noise. Running the same twenty inputs five times at two temperatures shows how much your outputs wander and how many repeats an eval needs to be trusted.

                ## Milestones
                1. Twenty inputs run five times each at a low and a default temperature.
                2. Variation in outputs and in grades measured for each setting.
                3. A temperature chosen per feature, with extraction and classification set low.
                4. The number of repeats needed for a stable eval score written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note shows output and grade variation at two temperatures over five runs, with a chosen setting per feature."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run twenty golden inputs five times at a low temperature"
                - "Repeat the runs at the provider's default temperature"
                - "Measure how often grades change between repeated runs"
                - "Set the temperature per feature in configuration"
            - name: Retrieval pipeline for document question answering
              description: |-
                ## Purpose
                Answering questions over your own help centre, contracts or wiki needs a pipeline that ingests, chunks, embeds, retrieves and cites, and keeps all of it in step as documents change. Building it end to end with incremental re-indexing and a citation for every answer turns a demo into something support teams will trust.

                ## Milestones
                1. An ingestion job that picks up new, changed and deleted documents.
                2. Answers generated only from retrieved passages, each with a source link.
                3. A clear reply when nothing relevant is found instead of a guess.
                4. Retrieval hit rate and answer accuracy measured on the golden set.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A question answering feature cites sources for every answer, says when it cannot find one, and has measured accuracy on the golden set."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Map the document sources and how each signals a change"
                - "Build ingestion that handles new, changed and deleted documents"
                - "Add source links to every generated answer"
                - "Write the reply used when retrieval finds nothing relevant"
            - name: Prompt caching for repeated context
              description: |-
                ## Purpose
                Long system prompts, tool definitions and shared documents are sent again on every call, and you pay for them every time. Restructuring prompts so the stable part comes first and enabling the provider's prompt caching can cut input cost and latency sharply on chat and agent workloads.

                ## Milestones
                1. Prompts restructured with stable instructions and documents first, variable content last.
                2. Provider prompt caching enabled where the feature qualifies.
                3. Cache hit rate and input cost compared for a week before and after.
                4. A note in the prompt house style on keeping cacheable prefixes stable.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Cached prompts show a measured cache hit rate and a before and after input cost comparison over one week."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the calls with the longest repeated prompt prefixes"
                - "Reorder those prompts so stable content comes first"
                - "Enable caching and compare a week of input cost"
                - "Check cache hit rate and look for prefixes that broke @recurring(monthly:11)"
            - name: Routing between a small and a large model
              description: |-
                ## Purpose
                Many requests are simple enough for a model that costs a fraction of your flagship one, and only a minority need the expensive reasoning. A router that sends easy cases to a small model and escalates the rest, judged on the golden set, often halves cost with no visible drop in quality.

                ## Milestones
                1. Request types sorted into likely easy and likely hard from real logs.
                2. A routing rule or small classifier built and tested on the golden set.
                3. Quality and cost compared for routed versus large-model-only traffic.
                4. Routing turned on with a share of traffic and a way to switch it off.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A routing rule has eval results showing quality and cost against a large-model-only baseline, and a recorded rollout decision."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Sort a week of requests into easy and hard by hand"
                - "Write a routing rule and test it on the golden set"
                - "Compare quality and cost against the large model alone"
                - "Review the routing mix and escalation rate @recurring(monthly:16)"
            - name: Streaming responses in the interface
              description: |-
                ## Purpose
                Waiting ten seconds for a full answer feels slow, while seeing words appear after half a second feels responsive, even when the total time is the same. Streaming tokens to the interface, with proper handling for cancellation, partial structured output and mid-stream errors, is one of the cheapest experience improvements available.

                ## Milestones
                1. Responses streamed from the model through the backend to the interface.
                2. A stop button that cancels the upstream request and stops billing.
                3. Mid-stream errors shown clearly with a way to retry.
                4. Time to first visible token measured before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The main AI screen streams output with working cancellation and error handling, and time to first token is measured before and after."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Switch the main model call to the streaming API"
                - "Pass streamed chunks to the browser with server-sent events"
                - "Make the stop button cancel the upstream request"
                - "Test a forced error halfway through a stream"
            - name: Hosted API versus self-hosted open-weight model
              description: |-
                ## Purpose
                Self-hosting an open-weight model promises control over data and cost, but brings GPUs, serving software, scaling and upgrades you now own. Costing both options at your real volume, with the engineering time included, gives a decision grounded in numbers instead of preference.

                ## Milestones
                1. Monthly token volume and peak requests per second estimated from logs.
                2. Hosted API cost at that volume calculated with current prices.
                3. Self-hosted cost estimated, including GPUs, serving, monitoring and engineer time.
                4. An open-weight candidate scored on the golden set against the hosted model.
                5. A decision recorded with the volume at which it would flip.

                ## Notes
                Start from the **Purchase decision** template. Most teams below very high volume find hosted APIs cheaper once engineer time is counted honestly.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A costed comparison of hosted and self-hosted options at current volume, with eval scores and a break-even volume, is recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull monthly tokens and peak request rate from the logs"
                - "Price the hosted option at that volume"
                - "Estimate self-hosted GPU, serving and staff costs"
                - "Score one open-weight model on the golden set"
            - name: Orchestration framework or plain SDK decision
              description: |-
                ## Purpose
                LLM frameworks speed up the first prototype but can hide prompts, retries and token usage behind layers that are hard to debug and change with every release. Building the same small flow both ways, with a framework and with the provider SDK plus your own code, shows which trade you are actually making.

                ## Milestones
                1. One representative flow chosen, such as retrieval plus one tool call.
                2. The flow built once with a framework and once with the plain SDK.
                3. Both compared on lines of code, debuggability, visible prompts and upgrade risk.
                4. A team decision recorded in an architecture note.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An architecture note compares a framework and plain SDK build of the same flow and records the team's choice."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose one flow that represents the product's typical call"
                - "Build it with a popular framework in a spike branch"
                - "Build it again using only the provider SDK"
                - "Write the comparison and decision as an architecture note"
            - name: Grounding checks and citations to reduce hallucination
              description: |-
                ## Purpose
                Models fill gaps with plausible inventions, and in support, legal or medical contexts an invented policy or date does real damage. Requiring answers to quote their sources, checking that each claim appears in the retrieved text and refusing when it does not, measurably cuts fabricated content.

                ## Milestones
                1. The prompt requiring every factual claim to cite a retrieved passage.
                2. A post-check that flags answers whose citations do not support them.
                3. A refusal or hand-off path when support is missing.
                4. Unsupported claim rate measured on a sample before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Answers carry citations that a post-check verifies, and the unsupported claim rate on a fifty-answer sample has fallen against the baseline."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Grade fifty current answers for unsupported claims as a baseline"
                - "Change the prompt to require a cited passage for each claim"
                - "Add a check that flags citations not found in the retrieved text"
                - "Measure citation accuracy on a fresh sample of answers @recurring(monthly:18)"
            - name: Batch processing for offline LLM workloads
              description: |-
                ## Purpose
                Nightly summaries, backfills and bulk classification do not need an answer in two seconds, and providers usually price batch jobs well below live calls. Moving offline work to batch endpoints or a queue with controlled concurrency saves money and keeps live traffic clear of rate limits.

                ## Milestones
                1. Every workload that does not need a live answer identified.
                2. Those workloads moved to a batch endpoint or a throttled queue.
                3. Partial failures retried by item without rerunning the whole batch.
                4. Cost per item compared before and after the move.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Offline workloads run through batch or a throttled queue with per-item retries, and cost per item is shown before and after."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List model workloads that tolerate an answer within hours"
                - "Move the largest one to the provider's batch endpoint"
                - "Add per-item retry for failed entries in a batch"
                - "Compare cost per item for a month before and after"
            - name: Vector database selection
              description: |-
                ## Purpose
                Choosing a vector store early can mean an extra managed service, a new bill and data copied out of your main database for a few thousand documents. Comparing a vector extension in the database you already run with one or two dedicated services, on your real data size and filters, avoids paying for scale you will not need.

                ## Milestones
                1. Current and two-year document and vector counts estimated.
                2. An extension for your existing database and two dedicated stores shortlisted.
                3. Query latency with metadata filters measured on a realistic sample.
                4. A choice recorded covering cost, backups, access control and exit path.

                ## Notes
                Start from the **Vendor** template if you pick a managed service, so contract, region and support terms sit in one place.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded vector store choice compares three options on filtered query latency, cost and backups at your projected size."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Estimate document and vector counts now and in two years"
                - "Load a realistic sample into your current database's vector extension"
                - "Run the same filtered queries against two dedicated stores"
                - "Record the choice with cost, backup and exit notes"
            - name: Launch readiness review for an AI feature
              description: |-
                ## Purpose
                An LLM feature can pass every unit test and still embarrass you on launch day with a jailbreak screenshot or a bill ten times the forecast. A readiness review a week before launch, covering evals, spend caps, abuse handling, fallbacks, user disclosure and a kill switch, catches the gaps while there is still time.

                ## Milestones
                1. Golden and regression sets passing at the agreed score.
                2. Spend caps, rate limits per user and a kill switch tested in staging.
                3. The interface telling users they are seeing AI output, with a way to report problems.
                4. Abuse review, on-call owner and rollback steps agreed for launch week.

                ## Notes
                Start from the **Operational checklist** template and keep the checklist for every later AI launch.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed readiness checklist, signed off a week before launch, covers evals, caps, kill switch, disclosure, abuse review and rollback."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set a review date one week before launch"
                - "Test the kill switch and per-user rate limits in staging"
                - "Confirm the AI disclosure and report button are in the interface"
                - "Name the launch-week owner for abuse reports and rollback"
            - name: Planned migration to a new model version
              description: |-
                ## Purpose
                Sooner or later a model retirement or a clearly better model forces a switch, and the same prompt can behave differently on the new one in ways no changelog mentions. Treating the migration as a small release, with evals, prompt adjustments, a shadow run and a staged rollout, avoids a week of support tickets.

                ## Milestones
                1. The new model run on golden and regression sets with current prompts.
                2. Prompts adjusted until scores match or beat the old model.
                3. A shadow run comparing old and new outputs on live traffic.
                4. Traffic moved in stages with a rollback switch, then the old model removed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Production traffic runs on the new model version after eval parity, a shadow run and a staged rollout, with the old version removed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Run the golden and regression sets on the new model version"
                - "Adjust prompts for the cases where scores dropped"
                - "Shadow the new model on a slice of live traffic for three days"
                - "Shift traffic in stages and remove the old version when stable"
            - name: Red-team session before public launch
              description: |-
                ## Purpose
                The people who built a feature are the worst at imagining how strangers will misuse it. A two-hour session where colleagues from support, sales and engineering try to make it leak data, ignore instructions, give harmful advice or run up cost finds problems your test set never considered.

                ## Milestones
                1. Six to ten people from different roles invited with a short brief.
                2. Attack themes assigned: data leakage, harmful content, instruction override, cost abuse.
                3. Every successful attack recorded with its exact input.
                4. Each finding triaged as fix before launch, fix later or accept.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A red-team session with at least six participants is held, and every recorded finding has a triage decision before launch."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Invite six to ten people from support, sales and engineering"
                - "Write a one-page brief with four attack themes"
                - "Run the session with a shared sheet for successful attacks"
                - "Triage every finding and add the worst to the regression set"
            - name: Provider outage drill
              description: |-
                ## Purpose
                Model providers have outages and degraded periods, and a feature with no plan simply hangs or shows raw errors. Rehearsing a provider failure in staging, switching to the fallback model or a graceful message, proves the plan works and shows how long the switch really takes.

                ## Milestones
                1. The expected behaviour written for full outage and for slow responses.
                2. A provider failure simulated in staging by blocking or faking errors.
                3. Fallback model or degraded mode confirmed working end to end.
                4. Gaps found in the drill fixed or ticketed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A staged provider outage drill is completed, the fallback is shown working and every gap found has a ticket."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write what users should see during a full and a partial outage"
                - "Block the provider in staging and watch the feature respond"
                - "Time how long the switch to the fallback takes"
                - "Rerun the outage drill with the current fallback setup @recurring(yearly)"
            - name: Investor or stakeholder demo of an AI prototype
              description: |-
                ## Purpose
                Live LLM demos fail in front of the exact people you most want to impress, usually because of a cold start, a rate limit or an input nobody tried. Preparing a scripted demo with tested inputs, a warmed-up environment, a recorded backup and an honest line about what is not yet solved keeps attention on the product.

                ## Milestones
                1. A five-minute demo script with three tested inputs.
                2. The demo environment warmed up and rate limits checked an hour before.
                3. A screen recording of the full demo ready as a backup.
                4. One honest sentence prepared on current limitations and the plan for them.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The demo is delivered on the planned date from a written script, with a recorded backup available."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a five-minute script around one user problem"
                - "Run each demo input ten times and keep the reliable ones"
                - "Record a full backup run of the demo"
                - "Prepare one sentence on known limitations and next steps"
            - name: Six-week founder MVP built on an LLM
              description: |-
                ## Purpose
                Founders can now ship a useful AI product in weeks, but most stall by polishing prompts for imagined users instead of putting a rough version in front of real ones. A six-week plan with one core task, a hosted model, a small eval set, spend caps and ten named early users keeps the build honest and the burn small.

                ## Milestones
                1. One core user task chosen and written as a one-page spec.
                2. A working version live on a hosted model with spend caps by week three.
                3. Ten named early users using it, with each session reviewed.
                4. A keep, change or stop decision made at the end of week six.

                ## Notes
                Start from the **Product spec** template. Resist building agents, fine-tunes or your own model hosting before ten people rely on the basic version.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A live MVP has been used by ten named people within six weeks, and a keep, change or stop decision is recorded."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Write the one task the product does in a one-page spec"
                - "List ten people who have the problem and message three today"
                - "Ship a hosted-model version with spend caps by week three"
                - "Hold a keep, change or stop review at the end of week six"
            - name: Unit economics of an AI-powered product
              description: |-
                ## Purpose
                Flat subscription pricing on top of per-token costs means your heaviest users can cost more than they pay. Working out model cost per active user, by usage band, and comparing it with price, tells a founder whether to add usage limits, tiers or credits before the margin problem shows up in the bank account.

                ## Milestones
                1. Model and infrastructure cost per active user calculated for the last month.
                2. Users split into usage bands, with the top band's cost compared with its price.
                3. Gross margin per plan estimated.
                4. A pricing or limits change proposed if any plan runs below the target margin.

                ## Notes
                This is a planning model, not financial advice. Check margin assumptions and any pricing changes with your accountant or finance lead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A sheet shows model cost per user by usage band and gross margin per plan, with a recorded decision on limits or pricing."
                cadence: rolling
              tasks:
                - "Export last month's model cost per user from the logs"
                - "Group users into light, typical and heavy usage bands"
                - "Compare each band's cost with what it pays"
                - "Update model cost and margin per plan @recurring(monthly:7)"
            - name: Inheriting an LLM feature someone else built
              description: |-
                ## Purpose
                Taking over an AI feature from a departed colleague often means prompts scattered through the code, no eval set and nobody sure why the temperature is what it is. A two-week takeover that maps every prompt, model and data flow and rebuilds a minimal eval before changing anything stops you breaking what users quietly rely on.

                ## Milestones
                1. Every prompt, model, tool and data source the feature uses mapped on one page.
                2. Spend, latency and error rates for the last month gathered.
                3. A minimal eval set of twenty cases built from logs.
                4. A short list of risks and first changes agreed with your lead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page map of the inherited feature, a twenty-case eval and an agreed risk list exist before the first behaviour change."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Find every prompt and model reference the feature uses"
                - "Pull last month's spend, latency and error rate"
                - "Build a twenty-case eval from real logged inputs"
                - "Ask the agent to draft a risk summary from the map and metrics"
            - name: Shared LLM practices for a product team
              description: |-
                ## Purpose
                When several squads start adding AI features at once, each picks a different provider, logging style and eval habit, and nobody can answer what the company spends or sends. A light set of shared defences, one client library, one logging format, one review forum, keeps teams fast while making the whole estate visible.

                ## Milestones
                1. An inventory of every AI feature, its model, owner and monthly spend.
                2. One shared client library adopted by all new AI features.
                3. A short written standard for prompts, logging, evals and disclosure.
                4. A monthly forum where teams share failures and eval results.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "An inventory of AI features exists, new features use the shared client, and a monthly forum has met at least three times."
                cadence: rolling
              tasks:
                - "List every AI feature with its model, owner and spend"
                - "Publish the shared client library with a quick-start example"
                - "Write a two-page standard for prompts, logging and evals"
                - "Host the AI practice forum on failures and eval results @recurring(monthly:24)"
            - name: AI feature with human review in a regulated domain
              description: |-
                ## Purpose
                In health, finance, legal or hiring products, a model's output can affect someone's money, health or job, and regulators increasingly expect a person in the loop and a record of how decisions were made. Designing human review, audit trails and clear limits into the feature from the start is far cheaper than retrofitting them after a complaint.

                ## Milestones
                1. The decisions the feature influences listed, with who is affected by each.
                2. A human review step required before any output reaches the affected person.
                3. An audit trail storing input, model version, output and reviewer decision.
                4. Applicable rules and obligations confirmed with your legal or compliance adviser.

                ## Notes
                Start from the **Risk register** template. This project organises the work; whether a law applies and what it requires is a question for your legal or compliance adviser.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every output reaches the affected person only after recorded human review, and the audit trail and adviser sign-off are documented."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List each decision the feature influences and who it affects"
                - "Book a review of applicable rules with your compliance adviser"
                - "Build a review queue so a person approves outputs before release"
                - "Audit a sample of reviewer decisions against the audit trail @recurring(monthly:12)"
            - name: Agent loop with tool use and hard limits
              description: |-
                ## Purpose
                An agent that plans, calls tools and reads the results can finish multi-step tasks, and can also loop, burn money and take actions nobody approved. Building one with a step limit, a cost ceiling per run, read-only tools by default and a full trace of every step makes agent behaviour something you can inspect and trust.

                ## Milestones
                1. A single agent task defined with a clear finish condition.
                2. A step limit and cost ceiling per run enforced in code.
                3. Write or send tools behind explicit user confirmation.
                4. Every run traced step by step and reviewable after the fact.
                5. Completion rate measured on twenty realistic tasks.

                ## Notes
                Most tasks that look like they need an agent work better as a fixed sequence of two or three calls. Reach for the loop only when the steps genuinely vary.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An agent with enforced step and cost limits completes a measured share of twenty test tasks, with every run traced."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write one agent task with an unambiguous finish condition"
                - "Enforce a step limit and a per-run cost ceiling in code"
                - "Run twenty realistic tasks and record completion and cost"
                - "Read traces of runs that hit the step limit @recurring(weekly:wed)"
            - name: Fine-tuning decision and first small fine-tune
              description: |-
                ## Purpose
                Fine-tuning can lock in a format, tone or narrow skill that prompting struggles with, but it needs clean training data, an eval to prove it helped and a plan for every future base model change. Testing it on one narrow task with a few hundred examples shows whether the gain justifies the upkeep.

                ## Milestones
                1. A narrow task where the best prompt still falls short identified, with its eval score.
                2. A few hundred clean, consented training examples prepared.
                3. A small fine-tune trained and scored on the same eval.
                4. A decision recorded weighing the gain against retraining and hosting costs.

                ## Notes
                Check that you are allowed to use the training data for this purpose. Few-shot examples and retrieval solve many problems people first try to fine-tune away.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A fine-tuned model has been scored against the best prompted baseline on the same eval, and a keep or drop decision is recorded."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Record the best prompted score on the target task"
                - "Confirm the training data is allowed for fine-tuning"
                - "Prepare three hundred clean training examples"
                - "Train a small fine-tune and score it on the same eval"
            - name: Multimodal pipeline for images and scanned documents
              description: |-
                ## Purpose
                Invoices, receipts, screenshots and scanned forms carry information that text-only pipelines cannot reach, and vision-capable models can now read many of them directly. Building an extraction pipeline with image preprocessing, schema-validated fields and a confidence-based review queue makes that data usable without trusting every field blindly.

                ## Milestones
                1. Fifty real images or scans collected with the correct field values.
                2. Images resized and cleaned to a consistent size before sending.
                3. Extracted fields validated against a schema with a confidence flag.
                4. Low-confidence results routed to a person, with accuracy measured per field.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An extraction pipeline reports per-field accuracy on fifty labelled documents and routes low-confidence results to review."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect fifty real documents and record the correct fields"
                - "Resize and normalise images before sending them to the model"
                - "Validate extracted fields against a schema"
                - "Measure accuracy per field and set a review threshold"
            - name: Online experiments on prompt and model variants
              description: |-
                ## Purpose
                Offline evals tell you a variant is not worse on known cases, but only live users show whether it makes them succeed more often. Running controlled experiments on prompt or model variants, with a success metric agreed in advance and enough traffic to detect a real difference, links prompt work to product results.

                ## Milestones
                1. One success metric agreed per feature, such as task completion or acceptance of a suggestion.
                2. Variants assigned by user, not by request, so each person sees one behaviour.
                3. Sample size estimated before the experiment starts.
                4. Results recorded with the decision and the guardrail metrics checked.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One live experiment has run to its planned sample size, with the success metric, guardrails and the decision recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Agree one success metric and two guardrail metrics"
                - "Assign variants per user through the feature flag system"
                - "Estimate the sample size before switching the experiment on"
                - "Write up the result and decision when the sample is reached"
            - name: Permission-aware retrieval across users and tenants
              description: |-
                ## Purpose
                Retrieval that ignores document permissions will cheerfully quote the board pack to an intern or one customer's data to another. Carrying access rules from the source system into every indexed chunk, filtering at query time and testing with deliberately unauthorised users closes one of the most damaging failure modes in enterprise LLM features.

                ## Milestones
                1. Access rules from each source system mapped to tags on every indexed chunk.
                2. Every retrieval query filtered by the requesting user's permissions and tenant.
                3. Permission changes in the source reflected in the index within an agreed time.
                4. Tests proving an unauthorised user cannot retrieve a restricted document.

                ## Notes
                Filter before the model sees anything. Asking the model to ignore documents the user should not see is not access control.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Automated tests show no restricted document is retrievable by an unauthorised user or another tenant, and permission changes sync within the agreed time."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Map how each source system expresses document permissions"
                - "Store tenant and access tags on every indexed chunk"
                - "Apply permission filters inside the retrieval query"
                - "Write tests that query as a user without access"
---

# LLM Application Engineering

This area is for engineers and founders building product features on large language models, where the hard part is not the first demo but the hundredth odd output. It starts with foundations (whether an LLM fits the problem at all, choosing a model, spend caps, a golden dataset, versioned prompts, schemas, a resilient call wrapper and careful logging), moves through the routines that keep a live feature honest, then the skills worth practising, from tokens and embeddings to tool schemas and graders. After that come improvements and decisions such as retrieval, caching, routing and self-hosting, dated launches and model migrations, situations from a founder MVP to a regulated domain, and specialist work on agents, fine-tuning, multimodal input and permission-aware retrieval.

What repeats is a weekly pass over sampled outputs, thumbs-down feedback, abuse reports and agent traces, monthly checks on spend, latency, cache hit rate, routing mix, citation accuracy and provider deprecation notices, and a quarterly re-benchmark of models against your golden set. The Purchase decision, Metrics log, Vendor, Operational checklist, Product spec and Risk register templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
