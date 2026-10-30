---
id: data-analytics.llm-evaluation-rag-data
name: LLM Evaluation & RAG Data
description: "A corpus you are allowed to index, real evaluation questions with reference answers, a harness and regression gate on every change, and a weekly habit of reading what the assistant actually says."
category: business
version: 1.0.0
tags: [data-analytics, llm-evaluation-rag-data, engineer, researcher, rag, llm-evaluation, retrieval, evaluation-sets]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
    - purchase-decision
    - operational-checklist
    - remediation-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: LLM Evaluation & RAG Data
          description: "Preparing document collections for retrieval, building evaluation sets and measuring the quality of language model answers over time."
          projects:
            - name: Definition of a good answer for the assistant
              description: |-
                ## Purpose
                Before anyone builds an evaluation set, the team needs to agree what the assistant is for, who asks it questions and what a good answer looks like for them. A one-page definition covering the main question types, the audience, the tone, when the assistant should decline and which failures are unacceptable turns vague complaints that it feels worse into things you can score.

                ## Milestones
                1. The five to eight most common question types written down with one real example each.
                2. The intended users and the decisions they make with the answers described in a paragraph.
                3. Unacceptable failures listed, such as invented policy, wrong figures or answers from an outdated document.
                4. The cases where the assistant should say it does not know agreed and written down.
                5. The definition reviewed and accepted by the product owner and one domain expert.

                ## Notes
                Keep it to one page. The definition feeds the rubric, the evaluation set and the launch sign-off, so a vague version here costs you three times over.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page answer quality definition listing question types, users, unacceptable failures and decline cases is signed off by the product owner and a domain expert."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull fifty real questions from logs, tickets or chat history to see what people ask"
                - "Group the questions into five to eight types with one example each"
                - "Write the list of failures that would make an answer unacceptable"
                - "Review the one-page definition with the product owner and a domain expert"
            - name: Source document inventory for retrieval
              description: |-
                ## Purpose
                Retrieval quality is capped by the documents you index, and most teams start by pointing a loader at one shared drive without knowing what else holds the real answers. An inventory of every candidate source, its format, size, owner, update frequency and authority tells you what to index first and what to leave out.

                ## Milestones
                1. Every candidate source listed: wikis, drives, ticket systems, PDFs, databases and product docs.
                2. Each source recorded with format, approximate document count, owner and how often it changes.
                3. An authority level agreed per source, so official policy outranks a team's draft notes.
                4. A first-wave list of sources chosen, with the reason each made the cut.

                ## Notes
                Ask the people who answer these questions today where they look. The source they actually use is often a spreadsheet or a pinned chat message that no inventory would find.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory lists every candidate source with format, size, owner, change frequency and authority level, and names the first-wave sources."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask three people who answer these questions today where they look first"
                - "List each source with its format, document count, owner and change frequency"
                - "Agree an authority level for each source with the content owners"
                - "Pick the first-wave sources and write one line on why each was chosen"
                - "Review the source inventory for new or retired systems @recurring(quarterly)"
            - name: Corpus permissions, licensing and sensitive content check
              description: |-
                ## Purpose
                Indexing a document makes its content reachable by anyone who can query the assistant, so a file that was restricted in its home system can leak through an answer. Checking licences, access groups and personal or confidential content before ingestion, and carrying permissions into the index, prevents the most serious class of retrieval incident.

                ## Milestones
                1. Each first-wave source checked for licence or contract terms that limit indexing or reuse.
                2. Access groups for each source mapped to filters the retrieval layer can enforce.
                3. A scan for personal data, credentials and confidential markings run on a sample of every source.
                4. Excluded folders, document types and fields written into the ingestion configuration.
                5. The approach reviewed by whoever owns security or privacy for the organisation.

                ## Notes
                Permission-aware retrieval is far easier to design in at the start than to retrofit. If a source cannot carry its access rules into the index, keep it out until it can. Take legal and privacy questions to the right professional rather than settling them inside the team.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every first-wave source has a recorded licence check, mapped access filters and a sensitive content scan, approved by the security or privacy owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the access groups that can see each first-wave source today"
                - "Run a sensitive content scan on a sample of documents from every source"
                - "Write the exclusion rules into the ingestion configuration"
                - "Book a review of the approach with the security or privacy owner"
                - "Re-check access groups for the indexed sources @recurring(quarterly)"
            - name: First evaluation set of real user questions
              description: |-
                ## Purpose
                Real questions phrased the way users phrase them, typos and all, are the only reliable test of a retrieval system, and invented questions tend to be suspiciously easy. A set of 100 to 200 questions drawn from logs, tickets and interviews, tagged by type and difficulty, becomes the fixed yardstick every later change is measured against.

                ## Milestones
                1. Between 100 and 200 questions collected from real sources, with personal details removed.
                2. Each question tagged with its type from the answer definition and a difficulty level.
                3. At least ten percent of questions chosen because the answer is not in the corpus.
                4. The set frozen as version 1 in version control with a short readme.

                ## Notes
                Resist tidying the wording. Questions that are vague, misspelt or ask two things at once are exactly what production traffic is full of.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned set of at least 100 real questions, tagged by type and difficulty and including unanswerable ones, is committed with a readme."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export candidate questions from search logs, tickets or chat history"
                - "Remove names, account numbers and other personal details from each question"
                - "Tag every question with a type and an easy, medium or hard label"
                - "Add questions the corpus cannot answer to test refusals"
                - "Commit the set as version 1 with a readme describing its sources"
            - name: Reference answers and supporting passages
              description: |-
                ## Purpose
                A question without a reference answer can only be judged by taste, and a reference answer without the passage that supports it cannot test retrieval. Writing a short reference answer and linking the exact document sections for each evaluation question lets you score retrieval and generation separately and see which one failed.

                ## Milestones
                1. A reference answer of one to three sentences written for every answerable question.
                2. The supporting passages identified by document and section for each answer.
                3. Ten percent of items checked by a second person, with disagreements resolved.
                4. Questions with no single correct answer marked so they are scored by rubric only.

                ## Notes
                Link passages by a stable identifier such as document id and heading, not by chunk number, or every chunking change will break your labels.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every answerable question in the evaluation set has a reference answer and at least one linked supporting passage, with a ten percent second-person check recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write reference answers for the first twenty questions and time how long it takes"
                - "Link each answer to its supporting document and section identifier"
                - "Ask a second person to check a ten percent sample"
                - "Mark questions that have several acceptable answers"
            - name: Evaluation harness that runs on every change
              description: |-
                ## Purpose
                Running the evaluation set by hand in a notebook means it gets run before launch and rarely again. A harness that takes a configuration, sends every question through retrieval and generation, scores the results and writes a dated report makes evaluation as cheap as running tests, so it happens on every change.

                ## Milestones
                1. One command runs the full evaluation set against a named configuration.
                2. Retrieval and answer scores written to a dated results file with the configuration attached.
                3. A comparison view showing which questions got better or worse since the last run.
                4. The harness wired into the change process, so a pull request shows its evaluation result.

                ## Notes
                Cache retrieval results and model calls by input so reruns are fast and cheap. Fix the temperature for evaluation runs and record the exact model version string the provider returns.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single command runs the full evaluation set, writes a dated scored report and is triggered automatically on changes to prompts, retrieval or models."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write a script that runs ten evaluation questions end to end and saves the outputs"
                - "Add scoring and a dated results file that records the full configuration"
                - "Build a per-question diff against the previous run"
                - "Trigger the harness from the pull request pipeline"
                - "Review the weekly full-suite run and file issues for new failures @recurring(weekly:mon)"
            - name: Retrieval quality baseline with recall at k
              description: |-
                ## Purpose
                When a generated answer is wrong, the cause is retrieval more often than the language model, but you only know that if retrieval is measured on its own. Scoring recall at 5 and 10 and mean reciprocal rank against the labelled passages gives a baseline for every later chunking, embedding and reranking experiment.

                ## Milestones
                1. Recall at 5, recall at 10 and mean reciprocal rank computed for the current retriever.
                2. Scores broken down by question type and difficulty.
                3. The twenty worst-retrieved questions reviewed and their failure causes noted.
                4. The baseline recorded in the experiment log as the number to beat.

                ## Notes
                If recall at 10 is low, no amount of prompt work will rescue the answers. Fix retrieval first.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Recall at 5, recall at 10 and mean reciprocal rank are recorded for the current retriever, by question type, with the twenty worst cases diagnosed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compute recall at 5 and 10 against the labelled supporting passages"
                - "Break the scores down by question type and difficulty"
                - "Read the twenty worst-retrieved questions and note why each failed"
                - "Record the baseline in the experiment log"
            - name: Answer scoring rubric with a graded scale
              description: |-
                ## Purpose
                Without a rubric, two reviewers marking the same answer will often disagree, and a simple pass or fail hides whether an answer was nearly right or dangerously wrong. A rubric scoring correctness, faithfulness to sources, completeness and citation on a small graded scale, with written anchors for each grade, makes human and automated scores comparable.

                ## Milestones
                1. Four or five scoring dimensions chosen, each tied to the answer quality definition.
                2. A three or four point scale per dimension with a written anchor and an example for each point.
                3. Two reviewers scoring the same thirty answers, with their agreement calculated.
                4. Anchors rewritten wherever agreement was poor, then frozen as rubric version 1.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned rubric with anchored grades on four or five dimensions has been used by two reviewers on thirty answers, with their agreement recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft four or five scoring dimensions from the answer quality definition"
                - "Write a one-line anchor and an example answer for each grade"
                - "Have two reviewers score the same thirty answers independently"
                - "Rewrite the anchors where the reviewers disagreed most"
            - name: Experiment log for prompts, models and retrieval settings
              description: |-
                ## Purpose
                Three weeks into tuning, nobody remembers whether the reranker or the new prompt caused the jump, and the winning configuration is lost in a notebook. A log recording each experiment's hypothesis, configuration, evaluation set version and scores makes results reproducible and stops the team repeating dead ends.

                ## Milestones
                1. A log with one row per experiment: date, hypothesis, configuration, set version, scores and decision.
                2. Every configuration stored in version control and referenced from its row.
                3. Past experiments that can still be reconstructed added to the log.
                4. A rule agreed that no change ships without a log entry.

                ## Notes
                Start from the **Metrics log** template. Record the failed experiments too; they are the cheapest knowledge the team has.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every experiment since the log started has a row with hypothesis, configuration link, evaluation set version, scores and decision."
                cadence: rolling
              tasks:
                - "Create the log with columns for hypothesis, configuration, set version, scores and decision"
                - "Back-fill the experiments you can still reconstruct"
                - "Agree with the team that no change ships without a log entry"
                - "Close out open experiments and record their decisions @recurring(monthly:26)"
            - name: Weekly production answer sample review
              description: |-
                ## Purpose
                Evaluation sets age, but production traffic shows what users are asking this week and how the assistant is coping. Reading and scoring a random sample of 25 real conversations every week catches new question types, retrieval gaps and odd behaviour long before a complaint reaches a manager.

                ## Milestones
                1. A sampling query that pulls 25 random conversations a week, plus the ten with the weakest retrieval scores.
                2. Each sampled answer scored against the rubric and tagged with a failure category if it failed.
                3. A running tally of failure categories kept from week to week.
                4. Recurring failures turned into issues with an owner.

                ## Notes
                Sample at random as well as from the bad tail. Reviewing only complaints gives a distorted picture of overall quality.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty-five sampled production answers are scored against the rubric each week, with failure categories tallied and recurring ones raised as issues."
                cadence: rolling
              tasks:
                - "Write the query that samples 25 random conversations and the ten weakest"
                - "Score 25 sampled production answers against the rubric @recurring(weekly:tue)"
                - "Add this week's failure categories to the running tally"
                - "Raise an issue for any failure category seen three weeks running"
            - name: Corpus refresh and re-indexing schedule
              description: |-
                ## Purpose
                Source documents change every week, and an index built once quietly drifts out of date until the assistant quotes last year's policy with confidence. A scheduled incremental refresh that picks up new, changed and deleted documents, with counts checked against the sources, keeps answers current.

                ## Milestones
                1. A refresh frequency agreed per source, matched to how often it changes.
                2. Incremental ingestion handling new, edited and deleted documents.
                3. Document counts per source compared against the source system after every run.
                4. Failed or partial runs alerting a named owner.

                ## Notes
                Deletions are the step most pipelines forget. A document removed at source but left in the index is both a correctness and a compliance problem.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every indexed source refreshes on an agreed schedule, handles deletions and has its document count reconciled against the source each month."
                cadence: rolling
              tasks:
                - "Agree a refresh frequency for each source with its owner"
                - "Test that deleting a document at source removes it from the index"
                - "Reconcile indexed document counts against each source @recurring(monthly:4)"
                - "Set an alert to the owner when a refresh run fails or is partial"
            - name: Stale and superseded document sweep
              description: |-
                ## Purpose
                Most corpora hold several versions of the same policy, price list or procedure, and the retriever has no idea which one is current. A regular sweep that finds superseded and expired documents and either removes them or marks them as historical stops the assistant mixing old and new answers.

                ## Milestones
                1. Rules agreed for spotting stale content: age, superseded-by links, expiry dates and owner sign-off.
                2. A first sweep run, with superseded versions removed or tagged historical.
                3. Content owners notified of documents past their review date.
                4. Retrieval configured to prefer current documents where both versions remain.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly sweep removes or tags superseded documents and sends owners a list of content past its review date."
                cadence: rolling
              tasks:
                - "List the documents with the most near-identical versions in the index"
                - "Agree with content owners which version of each is current"
                - "Send owners the list of documents past their review date @recurring(monthly:18)"
                - "Add a recency boost or filter so current documents rank first"
            - name: Regression gate for prompt and model changes
              description: |-
                ## Purpose
                Small prompt tweaks that fix one complaint can break twenty answers nobody is looking at. A gate that blocks a change when key scores drop beyond an agreed tolerance, or when any must-pass question fails, turns evaluation from an opinion into a release rule.

                ## Milestones
                1. Thresholds agreed for overall score drop, retrieval recall and the must-pass questions.
                2. A must-pass list of 20 to 40 questions where a wrong answer is unacceptable.
                3. The gate running automatically on every change and reporting pass or fail.
                4. An override path documented, requiring a written reason and a second approver.

                ## Notes
                Set tolerances from measured run-to-run noise, not guesswork. Run the same configuration five times first; if scores move two points between identical runs, a one-point gate will fail at random.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every prompt, retrieval or model change passes an automated gate with agreed thresholds and a must-pass question list, with any overrides recorded."
                cadence: rolling
              tasks:
                - "Run one configuration five times to measure run-to-run score noise"
                - "Choose 20 to 40 must-pass questions with the domain expert"
                - "Set gate thresholds from the measured noise and wire them into the pipeline"
                - "Write the override rule requiring a reason and a second approver"
                - "Check the gate thresholds still match the current baseline @recurring(quarterly)"
            - name: LLM judge calibration against human labels
              description: |-
                ## Purpose
                Automated judges make evaluation affordable at scale, but they drift with model updates and have known blind spots, such as favouring longer answers. Checking the judge each month against a fresh batch of human-scored answers tells you whether its scores can still be trusted, and where they cannot.

                ## Milestones
                1. A calibration set of at least 100 answers scored by humans on the rubric.
                2. Judge and human agreement calculated per dimension, not only overall.
                3. Known judge biases tested: answer length, position in pairwise comparisons and confident tone.
                4. A minimum agreement level agreed, below which judge scores are not used for release decisions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Judge agreement with human labels is measured monthly per rubric dimension, and judge scores below the agreed level are excluded from release decisions."
                cadence: rolling
              tasks:
                - "Have humans score 100 answers to form the calibration set"
                - "Calculate judge and human agreement for each rubric dimension"
                - "Test whether the judge prefers longer answers when content is equal"
                - "Score 30 fresh answers by hand and compare them with the judge @recurring(monthly:12)"
            - name: User feedback triage for flagged answers
              description: |-
                ## Purpose
                Thumbs-down clicks and free-text complaints are the cheapest labelled failures you will ever get, yet they pile up unread in a logging table. A weekly triage that categorises each flagged answer, traces it to retrieval, generation or content, and feeds the worst into the evaluation set closes the loop.

                ## Milestones
                1. Flagged answers collected in one queue with the question, retrieved passages and answer attached.
                2. A fixed set of root-cause categories: missing content, retrieval miss, misread source, outdated source and out of scope.
                3. Every flagged answer categorised within a week of arriving.
                4. Representative failures added to the evaluation set each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every flagged answer is categorised by root cause within seven days, and the clearest failures are added to the evaluation set each month."
                cadence: rolling
              tasks:
                - "Route thumbs-down and comment feedback into one triage queue"
                - "Agree five root-cause categories with the team"
                - "Categorise this week's flagged answers by root cause @recurring(weekly:wed)"
                - "Move the month's clearest failures into the evaluation set @recurring(monthly:28)"
            - name: Quarterly evaluation set refresh
              description: |-
                ## Purpose
                Frozen at launch, an evaluation set slowly stops representing what users ask, and scores keep looking healthy while production quality slips. Each quarter, adding new real questions, retiring obsolete ones and checking the mix against traffic keeps the yardstick honest without losing comparability.

                ## Milestones
                1. The current question-type mix compared against the last quarter of production traffic.
                2. New questions added for under-represented types and new topics.
                3. Questions whose answers changed or became obsolete updated or retired.
                4. A new set version published, with old and new versions scored side by side once.

                ## Notes
                Keep a frozen core of questions that never changes, so long-run trends stay comparable across versions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A new evaluation set version is published each quarter with a stated question-type mix, a frozen core and a side-by-side score against the previous version."
                cadence: cyclic
              tasks:
                - "Compare the evaluation set's question mix against last quarter's traffic"
                - "Write reference answers for twenty new questions from under-represented types"
                - "Retire or update questions whose correct answer has changed"
                - "Publish the refreshed set and score both versions once @recurring(quarterly)"
            - name: Monthly quality, cost and latency report
              description: |-
                ## Purpose
                Stakeholders hear about quality through anecdotes, while the cost per answer creeps up as prompts grow and context windows fill. A one-page monthly report showing scores, failure categories, cost per thousand answers and response time keeps decisions grounded in numbers.

                ## Milestones
                1. A fixed one-page layout with quality scores, top failure categories, cost and latency.
                2. Cost per thousand answers broken down by retrieval, generation and judge calls.
                3. Ninetieth percentile response time tracked alongside the average.
                4. The report sent on the same day each month with a short commentary.

                ## Notes
                Average tokens per request is the number to watch: it rises quietly with every prompt addition and every extra retrieved chunk.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A one-page report with quality scores, failure categories, cost per thousand answers and 90th percentile latency is sent every month."
                cadence: rolling
              tasks:
                - "Set up the one-page layout and the queries that fill it"
                - "Split cost per thousand answers into retrieval, generation and judge calls"
                - "Ask the agent to draft the commentary from the month's figures and failure tally"
                - "Send the quality, cost and latency report @recurring(monthly:7)"
            - name: Model provider version and deprecation watch
              description: |-
                ## Purpose
                Hosted language models are updated, renamed and retired on the provider's timetable, and a silent version change can move your scores overnight. Watching provider announcements, pinning model versions and recording the version string on every run means change arrives as a planned migration instead of a surprise.

                ## Milestones
                1. Every model in use, including embedding and judge models, listed with its exact version and any announced retirement date.
                2. Model versions pinned in configuration rather than using moving aliases.
                3. Provider change notices routed to a named person.
                4. A migration project opened at least 60 days before any announced retirement.

                ## Notes
                Embedding model changes are the costly ones: vectors from different models cannot be mixed, so a change means re-embedding the whole corpus.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model in use is pinned to an exact version with any retirement date recorded, and migrations start at least 60 days before retirement."
                cadence: rolling
              tasks:
                - "List every generation, embedding and judge model with its exact version"
                - "Replace moving model aliases in configuration with pinned versions"
                - "Subscribe the named owner to each provider's change notices"
                - "Check provider notices for deprecations affecting your models @recurring(monthly:22)"
            - name: Retrieval metrics study with recall, MRR and nDCG
              description: |-
                ## Purpose
                Engineers often pick a retrieval metric because a library happened to report it, then argue about results that measure different things. Working through recall at k, precision, mean reciprocal rank and nDCG on a toy example and on your own data shows which one matches how your users read results.

                ## Milestones
                1. Each metric calculated by hand on a ten-question toy example.
                2. The same metrics computed on your evaluation set with a library, matching your hand results.
                3. Graded relevance labels tried on a sample, to see whether nDCG changes the ranking of configurations.
                4. A short note on which metric best fits your use case and why.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note compares four retrieval metrics on your own evaluation set and states which one the team will use as primary, with the reason."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Calculate recall at k and MRR by hand for a ten-question toy example"
                - "Reproduce the hand results with your evaluation library"
                - "Label a sample of passages on a graded scale and compute nDCG"
                - "Write a half-page note choosing the primary retrieval metric"
            - name: LLM-as-judge methods and known biases
              description: |-
                ## Purpose
                Using one model to grade another is now standard practice, and also an easy way to measure the judge's taste instead of answer quality. Learning the main designs, single-answer grading, pairwise comparison and reference-guided scoring, along with their documented biases, lets you choose and prompt a judge you can defend.

                ## Milestones
                1. Two or three papers or guides on judge methods read and summarised in a page.
                2. Single-answer, pairwise and reference-guided judging each tried on the same 30 answers.
                3. Position, length and self-preference bias each tested with a small controlled check.
                4. A judge design chosen for your system, with its known weaknesses written down.

                ## Notes
                Avoid using the same model family as both answerer and judge where you can; self-preference is real and measurable.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three judging designs are compared on the same 30 answers with bias checks recorded, and the chosen design and its weaknesses are documented."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read two published guides or papers on LLM-as-judge evaluation"
                - "Run single, pairwise and reference-guided judging on the same 30 answers"
                - "Swap answer order in pairwise prompts to measure position bias"
                - "Write up the chosen judge design and its known weaknesses"
            - name: Embeddings and vector search fundamentals
              description: |-
                ## Purpose
                Most retrieval surprises, such as exact product codes not matching or short queries returning noise, make sense once you understand how dense embeddings and approximate nearest neighbour search behave. A hands-on week with a small corpus, two embedding models and a keyword index builds the intuition to diagnose failures instead of guessing.

                ## Milestones
                1. A small corpus embedded with two different embedding models.
                2. Keyword search and vector search compared on 20 queries, including exact codes and names.
                3. Approximate and exact nearest neighbour results compared to see what the index trades away.
                4. A page of notes on where dense retrieval fails for your kind of content.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two embedding models and a keyword index are compared on 20 queries, with a page of notes on where dense retrieval fails for your content."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Embed a few hundred of your documents with two embedding models"
                - "Run 20 queries through keyword and vector search side by side"
                - "Compare approximate index results against exact search for the same queries"
                - "Write a page of notes on the failure patterns you saw"
            - name: Confidence intervals for small evaluation sets
              description: |-
                ## Purpose
                On 150 questions, a two-point improvement is often noise, yet teams ship it and announce a win. Learning to put a confidence interval on an evaluation score and to use paired comparisons between configurations tells you how many questions you need and which differences are real.

                ## Milestones
                1. Bootstrap confidence intervals computed for your current evaluation scores.
                2. A paired comparison run between two configurations on the same questions.
                3. The smallest difference your set can reliably detect estimated and written down.
                4. Every future report showing intervals alongside headline scores.

                ## Notes
                Paired comparisons on the same questions are far more sensitive than comparing two averages, because question difficulty cancels out.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Evaluation reports show bootstrap confidence intervals, and the smallest detectable difference for the current set size is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Bootstrap a 95 percent interval for your current headline score"
                - "Run a paired comparison between your last two configurations"
                - "Estimate the smallest score difference your set can detect"
                - "Add intervals to the harness report template"
            - name: Annotation guidelines and reviewer agreement
              description: |-
                ## Purpose
                Human labels are the ground truth everything else is calibrated against, and they are only as consistent as the instructions behind them. Writing annotation guidelines with worked examples, training reviewers and measuring agreement with a statistic such as Cohen's kappa turns a pile of opinions into labels you can rely on.

                ## Milestones
                1. Guidelines with definitions, worked examples and rules for edge cases written.
                2. Two or more reviewers trained on a practice batch, with feedback.
                3. Agreement measured on a shared batch of at least 50 items.
                4. Guidelines revised after each disagreement review and versioned.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Versioned annotation guidelines exist, and reviewer agreement on a shared batch of at least 50 items is measured and recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft guidelines with three worked examples per rubric grade"
                - "Run a practice batch of 20 items with each reviewer and give feedback"
                - "Measure agreement on a shared batch of 50 items"
                - "Hold a disagreement review and update the guidelines"
            - name: Hallucination and faithfulness error taxonomy
              description: |-
                ## Purpose
                Saying the model hallucinated covers very different failures: inventing a fact, citing the wrong document, merging two sources or answering a question nobody asked. Learning a taxonomy of these errors and tagging 50 of your own failures with it shows which ones dominate and which fix each one needs.

                ## Milestones
                1. A taxonomy of six to ten error types defined, with an example of each from your own logs.
                2. Fifty failed answers tagged with one primary error type.
                3. The distribution of error types charted.
                4. Each common error type matched to the part of the pipeline most likely to fix it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fifty failed answers are tagged with a defined taxonomy of six to ten error types, and each common type is mapped to a pipeline fix."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a published survey of hallucination types in retrieval systems"
                - "Define six to ten error types with an example from your logs"
                - "Tag fifty failed answers with their primary error type"
                - "Map the three most common types to the pipeline step that should fix them"
            - name: Prompt injection through retrieved documents
              description: |-
                ## Purpose
                Once documents from email, tickets or the open web enter the corpus, anyone who can write a document can try to give instructions to your assistant. Understanding direct and indirect prompt injection, and testing your own pipeline with planted documents, shows how exposed you are before an attacker does.

                ## Milestones
                1. Direct and indirect injection explained in a short internal note with examples.
                2. Ten planted test documents containing hidden instructions added to a test index.
                3. The assistant's behaviour on each planted document recorded.
                4. Mitigations agreed, such as separating instructions from content, limiting tools and filtering untrusted sources.

                ## Notes
                Start from the **Risk register** template. No single mitigation stops injection, so plan in layers and limit what the assistant can do if it is fooled.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten planted injection documents are tested against a test index, the results recorded, and agreed mitigations entered in a risk register."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a short note explaining direct and indirect prompt injection"
                - "Plant ten test documents with hidden instructions in a test index"
                - "Record how the assistant responds to each planted document"
                - "Enter the findings and agreed mitigations in the risk register"
            - name: Document parsing pipeline for PDFs and tables
              description: |-
                ## Purpose
                PDFs with columns, headers, footnotes and tables come out of naive text extraction as scrambled sentences, and retrieval can only be as good as the text it searches. Building a parsing step that preserves headings, reading order and table structure, tested on the ugliest documents first, removes a hidden ceiling on quality.

                ## Milestones
                1. The twenty hardest documents in the corpus chosen as a parsing test set.
                2. Two or three extraction approaches compared on that set for reading order, tables and headings.
                3. Scanned documents routed through text recognition with a quality check.
                4. The chosen parser in the ingestion pipeline, with headings kept as metadata.

                ## Notes
                Look at the extracted text yourself. Ten minutes reading parser output finds problems no metric will.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A parsing step chosen from a comparison on the twenty hardest documents is in the pipeline, preserving headings, reading order and table structure."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick the twenty documents with the worst layouts as a parsing test set"
                - "Run two or three extraction tools and read the output side by side"
                - "Route scanned pages through text recognition and spot-check the result"
                - "Store headings and page numbers as metadata on each extracted section"
            - name: Chunking strategy comparison
              description: |-
                ## Purpose
                Chunk size and boundaries quietly decide whether the answer lands in one retrievable piece or gets split across three. Testing fixed-size, heading-based and sentence-window chunking on your own evaluation set replaces the default someone copied from a tutorial with a choice backed by your numbers.

                ## Milestones
                1. Three chunking strategies defined with their sizes and overlaps.
                2. Each strategy indexed and scored on recall at 10 and answer quality.
                3. Results broken down by document type, since manuals and FAQs often need different settings.
                4. A chunking choice per document type recorded in the experiment log.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three chunking strategies are scored on the evaluation set by document type, and the chosen setting per type is recorded with its scores."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Define three chunking strategies with sizes and overlaps"
                - "Index the corpus three times and run the harness on each"
                - "Break the chunking results down by document type"
                - "Record the chosen strategy per document type in the experiment log"
            - name: Embedding model selection on your own data
              description: |-
                ## Purpose
                Public leaderboards rank embedding models on someone else's data, and the top model may be no better on your documents while costing more to run. Scoring three or four candidates on your evaluation set, alongside cost, vector size and language support, gives a choice you will not need to revisit for a year.

                ## Milestones
                1. Three or four candidate embedding models chosen, including at least one small, cheap option.
                2. Each candidate scored on recall at 10 using the same chunks.
                3. Cost per million tokens, vector size and storage cost recorded for each.
                4. A choice made and recorded, with the cost of re-embedding the corpus noted.

                ## Notes
                Switching later means re-embedding everything, so count that in the cost of each option.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three or four embedding models are scored on the evaluation set with cost and storage recorded, and the chosen model is documented."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Shortlist three or four embedding models including one small option"
                - "Embed the same chunks with each model and run retrieval scoring"
                - "Record cost, vector size and storage per model"
                - "Write up the choice and the cost of a future re-embed"
            - name: Hybrid search and reranker trial
              description: |-
                ## Purpose
                Vector search finds paraphrases but misses exact terms like part numbers and error codes; keyword search does the opposite. Trialling hybrid retrieval that combines both, then a reranking model over the top 50 results, often lifts recall more than any embedding change, and the trial tells you whether the added latency is worth it.

                ## Milestones
                1. Keyword, vector and hybrid retrieval scored side by side on the evaluation set.
                2. A reranker added over the top results and scored separately.
                3. Added latency and cost per query measured for each option.
                4. A decision recorded on which retrieval stack runs in production.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Keyword, vector, hybrid and reranked retrieval are compared on recall and latency, and the production choice is recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Score keyword, vector and hybrid retrieval on the evaluation set"
                - "Add a reranker over the top 50 results and score it"
                - "Measure the added latency and cost per query"
                - "Record the production retrieval choice in the experiment log"
            - name: Document metadata and retrieval filters
              description: |-
                ## Purpose
                Questions about the current refund policy in one country fail when every version and region of that policy looks the same to the retriever. Attaching metadata such as document type, region, product, effective date and access group, and filtering on it before search, removes whole classes of wrong answers.

                ## Milestones
                1. A metadata schema of five to ten fields agreed with content owners.
                2. Metadata populated for the first-wave sources, with gaps flagged to owners.
                3. Query-time filters for region, product and effective date working in retrieval.
                4. Evaluation questions that depend on metadata scored before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A metadata schema is populated for first-wave sources and query-time filters are in use, with before and after scores on metadata-dependent questions."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft a metadata schema of five to ten fields with content owners"
                - "Populate metadata for first-wave sources and flag the gaps"
                - "Add region, product and effective date filters to retrieval"
                - "Score metadata-dependent evaluation questions before and after"
            - name: Citations and source attribution in answers
              description: |-
                ## Purpose
                Users can check an answer that cites its sources, and that is worth more than a fluent one they simply have to trust. Making the assistant cite the specific passages it used, and checking that each citation actually supports its sentence, raises trust and gives reviewers a fast way to audit.

                ## Milestones
                1. Answers showing a citation for each claim, linking to the document and section.
                2. An automated check that each cited passage was in the retrieved context.
                3. Citation accuracy scored on a sample: does the passage support the sentence.
                4. Citation accuracy added to the rubric and the monthly report.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Answers cite document and section for each claim, and citation accuracy is scored on a sample and reported monthly."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Change the prompt and output format to cite document and section per claim"
                - "Add a check that every citation appears in the retrieved context"
                - "Score citation accuracy on a sample of 50 answers"
                - "Add citation accuracy to the rubric and the monthly report"
            - name: Abstention when retrieval comes back weak
              description: |-
                ## Purpose
                An assistant that answers every question will invent answers to the ones the corpus cannot support. Tuning when it says it does not know, using retrieval scores, answerability checks and the unanswerable questions in your evaluation set, trades a few unhelpful refusals for far fewer confident wrong answers.

                ## Milestones
                1. Current behaviour on the unanswerable evaluation questions measured.
                2. An abstention rule designed, such as a retrieval score threshold or an answerability check.
                3. The trade-off between false refusals and wrong answers plotted at several thresholds.
                4. A threshold chosen with the product owner, and the refusal wording agreed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Wrong-answer and false-refusal rates are measured at several thresholds, and the chosen abstention rule and refusal wording are agreed with the product owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure how often the assistant answers the unanswerable questions"
                - "Design an abstention rule from retrieval scores or an answerability check"
                - "Plot false refusals against wrong answers at several thresholds"
                - "Agree the threshold and refusal wording with the product owner"
            - name: Vector database or search engine choice
              description: |-
                ## Purpose
                The store that holds your vectors decides filtering speed, hybrid search support, update handling and how much you pay to keep millions of chunks ready to query. Comparing a managed vector database, a search engine with vector support and an extension to your existing database against the same requirements avoids a painful migration a year from now.

                ## Milestones
                1. Requirements written: corpus size, update rate, filter needs, hybrid search, access control and budget.
                2. Three options tested on a load matching your corpus size.
                3. Filtered query latency, ingestion speed and monthly cost recorded for each.
                4. A choice made, with the exit cost noted.

                ## Notes
                Start from the **Purchase decision** template. Below a few million chunks, an extension to a database you already run is often enough.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three storage options are tested against written requirements with latency, ingestion and cost recorded, and the choice and exit cost are documented."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write requirements for size, update rate, filters, hybrid search and access control"
                - "Load a corpus-sized test set into three options"
                - "Record filtered query latency, ingestion speed and monthly cost"
                - "Fill in the purchase decision with the choice and exit cost"
            - name: Near-duplicate removal in the corpus
              description: |-
                ## Purpose
                Copies of the same document in five folders crowd the top results with identical passages, pushing out the one different source that held the answer. Detecting exact and near duplicates, keeping the authoritative copy and recording the rest frees retrieval slots and shrinks the index.

                ## Milestones
                1. Exact duplicates found by content hash and removed.
                2. Near duplicates found by similarity and reviewed in a sample.
                3. A rule for choosing the copy to keep, based on the source authority levels.
                4. The share of duplicates in top results measured before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Exact and near duplicates are removed under a written keep rule, and the duplicate share of top results is measured before and after."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Hash document contents and remove exact duplicates"
                - "Find near duplicates by similarity and review a sample of 30 pairs"
                - "Write the rule for which copy to keep using source authority"
                - "Measure the duplicate share of the top 10 results before and after"
            - name: Pre-launch evaluation sign-off
              description: |-
                ## Purpose
                Launch dates get set before quality is known, and without an agreed bar the decision falls to whoever is most confident in the room. A sign-off meeting with written criteria, the latest evaluation results, the red team findings and a rollback plan gives a clear go or no-go and a record of what was accepted.

                ## Milestones
                1. Launch criteria written: minimum scores, must-pass results, refusal behaviour and open risks.
                2. A results pack with scores, intervals, failure examples and red team findings.
                3. A sign-off meeting held with the product owner, a domain expert and security.
                4. A go or no-go decision recorded with any accepted risks and follow-up dates.

                ## Notes
                Start from the **Operational checklist** template. Circulate the criteria before the results, so nobody moves the bar to fit the numbers.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A dated sign-off record shows written launch criteria, the results against them and a go or no-go decision with accepted risks."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the launch criteria and circulate them two weeks before the meeting"
                - "Assemble the results pack with scores, intervals and failure examples"
                - "Hold the sign-off meeting with product, a domain expert and security"
                - "Record the decision, accepted risks and follow-up dates"
            - name: Red team session before launch
              description: |-
                ## Purpose
                Evaluation sets test what you expected; a red team tests what you did not. A half-day session where colleagues from support, security and the domain try to make the assistant leak restricted content, give harmful advice, follow injected instructions or embarrass the organisation finds the failures that matter most for launch.

                ## Milestones
                1. Attack themes agreed: data leakage, injection, harmful or out-of-scope advice and off-brand behaviour.
                2. Eight to twelve participants from different teams briefed on the themes.
                3. Every successful attack logged with the prompt, the answer and a severity.
                4. Fixes or mitigations assigned for every high-severity finding before launch.
                5. Successful attacks added to the regression suite.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A red team session is held, every successful attack is logged with severity, and all high-severity findings have an assigned fix before launch."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree attack themes with security and the product owner"
                - "Invite eight to twelve people from support, security and the domain"
                - "Log each successful attack with prompt, answer and severity"
                - "Add successful attacks to the regression suite"
                - "Add new attack patterns reported elsewhere to the suite @recurring(quarterly)"
            - name: Language model version migration evaluation
              description: |-
                ## Purpose
                Moving to a newer or cheaper model looks like a configuration change, but answer style, refusal behaviour and instruction following all shift, and your prompts were tuned to the old model. Running the full evaluation set, the must-pass list and a sample of production questions on both models before switching shows what will change for users.

                ## Milestones
                1. Both models run on the full evaluation set and the must-pass list.
                2. Differences reviewed question by question, with regressions categorised.
                3. Prompts adjusted for the new model and rerun.
                4. Cost and latency compared at expected volume.
                5. A switch, stay or switch-with-changes decision recorded with a rollback plan.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Both models are scored on the full set and must-pass list, regressions are reviewed, and a recorded decision includes cost, latency and a rollback plan."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Run the full evaluation set and must-pass list on both models"
                - "Review every question where the scores differ by more than one grade"
                - "Adjust prompts for the new model and rerun the harness"
                - "Record the decision with cost, latency and a rollback plan"
            - name: Internal pilot with twenty users
              description: |-
                ## Purpose
                Piloting with a small group of real users finds the questions nobody put in the evaluation set and the answers that are technically right but useless in practice. A four-week pilot with twenty people, a feedback button and two short interviews each gives evidence for launch and a fresh batch of evaluation questions.

                ## Milestones
                1. Twenty pilot users chosen across roles, briefed on what the assistant should and should not do.
                2. Feedback capture working on every answer.
                3. Two short interviews held with each of at least ten users.
                4. A pilot summary with usage, feedback themes and new evaluation questions.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A four-week pilot with twenty users is completed and summarised with usage, feedback themes and at least thirty new evaluation questions."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose twenty pilot users across roles and send a briefing"
                - "Check that the feedback button records the question, passages and answer"
                - "Interview at least ten users at week two and week four"
                - "Ask the agent to summarise pilot feedback into themes and candidate test questions"
            - name: Post-incident review of a harmful or wrong answer
              description: |-
                ## Purpose
                Sooner or later the assistant will give an answer that causes real trouble: a wrong price quoted to a customer, restricted content shown to the wrong person or advice it should never have given. A blameless review that traces the answer through retrieval, prompt and model, fixes the cause and adds the case to the regression suite turns one bad day into a lasting improvement.

                ## Milestones
                1. The full trace preserved: question, retrieved passages, prompt, model version and answer.
                2. Immediate containment done, such as removing a document or adding a filter.
                3. A timeline and root cause written within five working days.
                4. Fixes assigned with owners and dates.
                5. The case added to the must-pass list.

                ## Notes
                Start from the **Remediation plan** template. Keep logging complete enough that every answer can be traced; without the retrieved passages a review is guesswork.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written review with the preserved trace, root cause, containment steps and owned fixes is completed within five working days, and the case is in the must-pass list."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Preserve the question, passages, prompt, model version and answer"
                - "Contain the problem by removing the document or adding a filter"
                - "Write the timeline and root cause within five working days"
                - "Add the case to the must-pass question list"
            - name: Solo engineer adding RAG to an existing product
              description: |-
                ## Purpose
                If you are the single engineer asked to add an AI answer feature, you have no data team, no labelling budget and a deadline. A pared-down plan of 50 real questions, a simple scoring script, full request logging and one weekly hour reading conversations gives most of the safety of a full evaluation programme in a few days of work.

                ## Milestones
                1. Fifty real questions with reference answers and supporting passages.
                2. A script that scores retrieval recall and answer correctness for those questions.
                3. Logging that captures question, passages and answer for every request.
                4. A weekly hour reading logged conversations booked in the calendar.

                ## Notes
                Do not start with a framework. A script and a spreadsheet are enough until the evaluation set passes a few hundred questions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fifty labelled questions, a scoring script, full request logging and a weekly log review are in place before the feature ships."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Collect fifty real questions from support tickets or user interviews"
                - "Write a scoring script for retrieval recall and answer correctness"
                - "Log question, passages and answer for every request"
                - "Spend one hour reading ten logged conversations @recurring(weekly:fri)"
            - name: Research benchmark dataset for publication
              description: |-
                ## Purpose
                Researchers releasing a question answering or retrieval benchmark are judged on its documentation, licensing and resistance to contamination as much as on its size. Planning collection, annotation, splits, a datasheet and a licence from the start avoids a release that reviewers cannot trust or others cannot legally use.

                ## Milestones
                1. Source licences checked and a release licence chosen with institutional advice.
                2. Annotation guidelines, annotator pay and agreement statistics documented.
                3. Train, development and held-out test splits fixed, with test answers kept private if planned.
                4. A datasheet covering motivation, composition, collection, uses and limitations.
                5. Baseline results from at least two systems reported with the release.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "The benchmark is released with a licence, datasheet, fixed splits, documented annotation and agreement, and at least two baseline results."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Check the licence of every source and ask your institution about the release licence"
                - "Fix the train, development and test splits and record how they were made"
                - "Write the datasheet covering composition, collection and limitations"
                - "Run two baseline systems and report results with intervals"
            - name: Expert review panel for a regulated domain assistant
              description: |-
                ## Purpose
                Assistants answering questions about law, health, finance or safety need domain experts to judge correctness, because a fluent wrong answer is invisible to engineers. Setting up a small panel of qualified reviewers with a clear rubric, a monthly batch and an escalation route builds the evidence that the assistant stays within safe bounds.

                ## Milestones
                1. Two to four qualified reviewers agreed, with their time budgeted.
                2. A domain rubric covering correctness, missing caveats and when to refer to a professional.
                3. A monthly batch of answers reviewed and scored.
                4. An escalation route for answers the panel judges unsafe, with response times.

                ## Notes
                The panel judges answers; it does not turn the assistant into a source of professional advice. Keep the assistant's scope and its referral wording under the panel's review.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A panel of two to four qualified reviewers scores a batch of answers every month against a domain rubric, with unsafe answers escalated within the agreed time."
                cadence: rolling
              tasks:
                - "Agree two to four qualified reviewers and their monthly time"
                - "Draft a domain rubric with the panel, including referral rules"
                - "Send a batch of 20 answers to the expert panel @recurring(monthly:15)"
                - "Set up an escalation route with response times for unsafe answers"
            - name: Multilingual corpus and evaluation
              description: |-
                ## Purpose
                Users ask in the language they think in, while the documents may exist in only one language or in uneven translations. Measuring retrieval and answer quality separately for each language, including cross-language questions, shows where users get worse answers and whether translation, multilingual embeddings or separate indexes fix it.

                ## Milestones
                1. The languages of users and of documents measured from logs and the corpus.
                2. Evaluation questions written natively in each main language, not only translated.
                3. Retrieval and answer scores reported per language, including cross-language cases.
                4. A fix chosen for the weakest language and its effect measured.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Retrieval and answer scores are reported per language using natively written questions, and a fix for the weakest language is measured."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Measure the language mix of user questions and of the corpus"
                - "Ask native speakers to write twenty questions per main language"
                - "Report retrieval and answer scores per language"
                - "Review a sample of answers in each language @recurring(monthly:9)"
            - name: Inheriting a RAG system with no evaluations
              description: |-
                ## Purpose
                Taking over an assistant someone else built, with no tests, unclear sources and a prompt nobody dares touch, is common and stressful. A phased plan, first observe and record, then build a minimal evaluation set, then change one thing at a time, lets you improve it without breaking what users depend on.

                ## Milestones
                1. The current pipeline documented: sources, parser, chunking, embedding model, prompt and model versions.
                2. Two weeks of production questions and answers captured as a baseline.
                3. A minimal evaluation set of 50 questions scoring the current system.
                4. A ranked list of improvements, each to be tested against the baseline.

                ## Notes
                Change nothing in the first two weeks except logging. The first fix should be the one with the clearest measured gain.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The inherited pipeline is documented, a 50-question baseline is scored, and a ranked improvement list exists before any change ships."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Document every component and version in the current pipeline"
                - "Capture two weeks of production questions and answers"
                - "Build a 50-question evaluation set and score the current system"
                - "Rank improvements by expected gain and effort"
            - name: Knowledge assistant handover to a support team
              description: |-
                ## Purpose
                When an assistant is built for a support or operations team, its quality depends on them keeping content current and reporting failures, yet they are rarely shown how. Handing over with a short guide, a content owner role, a feedback habit and a weekly check-in turns the team from passive users into the system's best source of evaluation data.

                ## Milestones
                1. A one-page guide for the team on what the assistant covers, how to flag answers and how content gets updated.
                2. A content owner named in the team for each main source.
                3. Flagged answers from the team reviewed and answered within a week.
                4. A weekly fifteen-minute check-in held for the first two months.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The support team has a guide, a named content owner per source and a weekly check-in, and their flagged answers get a response within a week."
                cadence: rolling
              tasks:
                - "Write a one-page guide on scope, flagging answers and updating content"
                - "Name a content owner in the team for each main source"
                - "Show the team how their flags change the evaluation set"
                - "Hold a fifteen-minute check-in with the support lead @recurring(weekly:thu)"
            - name: Synthetic question generation with quality filters
              description: |-
                ## Purpose
                Real questions run out quickly for rare topics, and a language model can generate thousands of question and answer pairs from your documents in an afternoon. Most of them are too easy, too literal or wrong, so a generation step with filters for answerability, difficulty and similarity to real questions is what makes synthetic data worth having.

                ## Milestones
                1. Questions generated from a sample of passages with a prompt that asks for realistic phrasing.
                2. Filters removing questions answerable by keyword match, duplicates and unsupported answers.
                3. A human check on 100 filtered items, with the pass rate recorded.
                4. Synthetic items kept in a separate, labelled part of the evaluation set.

                ## Notes
                Never let synthetic questions replace real ones in release decisions. They tend to copy the wording of the passage they came from, which flatters retrieval.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A filtered synthetic question set is checked by a human on 100 items with the pass rate recorded, and is stored separately from real questions."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Generate questions from 200 passages with a realistic-phrasing prompt"
                - "Filter out keyword-matchable, duplicate and unsupported items"
                - "Hand-check 100 filtered items and record the pass rate"
                - "Store synthetic items in a labelled, separate split"
            - name: Agent and tool-use trajectory evaluation
              description: |-
                ## Purpose
                Assistants that search, call tools and take several steps can reach the right answer by a wasteful or unsafe route, or fail on step three while the final answer still looks plausible. Evaluating whole trajectories, meaning which tools were called, in what order, with what arguments and at what cost, catches failures that final-answer scoring misses.

                ## Milestones
                1. Thirty multi-step tasks written with an expected set of tool calls or acceptable paths.
                2. Trajectories logged with every tool call, argument, result and token count.
                3. Scores for task success, unnecessary steps, wrong tool use and cost per task.
                4. Unsafe actions, such as writes the user did not request, counted separately and gated.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Thirty multi-step tasks are scored on success, extra steps, tool errors and cost, with unsafe actions counted and gated separately."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write thirty multi-step tasks with acceptable tool-call paths"
                - "Log every tool call, argument, result and token count"
                - "Score task success, extra steps, tool errors and cost per task"
                - "Add a separate gate for unsafe or unrequested actions"
            - name: Long context versus retrieval comparison
              description: |-
                ## Purpose
                With context windows now holding hundreds of pages, it is fair to ask whether retrieval is still needed for a given corpus. Comparing answer quality, cost and latency between placing whole documents in the prompt and retrieving chunks, on the same questions, gives an evidence-based answer instead of a trend-driven one.

                ## Milestones
                1. A subset of the corpus small enough to fit in a long context window chosen.
                2. Long-context and retrieval approaches scored on the same questions.
                3. Accuracy on facts buried mid-document checked separately.
                4. Cost and latency per answer compared at expected volume, and a recommendation written.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Long-context and retrieval approaches are scored on the same questions with cost and latency compared, and a written recommendation is recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick a corpus subset that fits in one long context window"
                - "Score both approaches on the same evaluation questions"
                - "Check accuracy on facts placed in the middle of long documents"
                - "Write the recommendation with cost and latency per answer"
            - name: Benchmark contamination checks
              description: |-
                ## Purpose
                Public benchmark questions leak into model training data, so a model can score well from memory rather than by reading your documents. Checking for contamination with overlap searches, perturbed questions and closed-book runs tells you whether a published or internal benchmark still measures what you think it does.

                ## Milestones
                1. Closed-book runs with no retrieval, showing how many questions the model answers from memory.
                2. Perturbed versions of questions, with changed names and numbers, scored against the originals.
                3. Overlap between your evaluation set and known public datasets checked.
                4. Contaminated items flagged and excluded from headline scores.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Closed-book, perturbed and overlap checks are run on the evaluation set, and contaminated items are flagged and excluded from headline scores."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Run the evaluation set closed-book with retrieval switched off"
                - "Create perturbed versions of fifty questions and compare scores"
                - "Check overlap between your set and public benchmark datasets"
                - "Flag contaminated items and exclude them from headline scores"
            - name: Embedding fine-tuning with hard negatives
              description: |-
                ## Purpose
                Off-the-shelf embeddings sometimes keep confusing your product names, internal jargon or near-identical policy versions, and fine-tuning on your own query and passage pairs can lift recall noticeably. Mining hard negatives, passages that look right but are not, and holding out a clean test split is what separates a real gain from overfitting.

                ## Milestones
                1. Training pairs assembled from labelled questions, click logs or filtered synthetic data.
                2. Hard negatives mined from passages the current model ranks highly but wrongly.
                3. A held-out test split that shares no documents with training.
                4. Recall at 10 compared against the base model, with the cost of re-embedding the corpus noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A fine-tuned embedding model is compared with the base model on a document-disjoint test split, and the keep or drop decision is recorded with re-embedding cost."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Assemble query and passage pairs from labelled and logged data"
                - "Mine hard negatives the current model ranks highly but wrongly"
                - "Split train and test so no document appears in both"
                - "Compare recall at 10 with the base model and record the decision"
---

# LLM Evaluation & RAG Data

This area is for the engineers and researchers who build and judge retrieval augmented generation systems: assistants that answer questions from a document collection using a language model. It starts with foundations (a definition of a good answer, a source inventory, permissions, a real evaluation set with reference answers, a harness and a retrieval baseline), then the operating routines that keep quality visible, the skills behind trustworthy evaluation, improvements to parsing, chunking, search and refusals, launch events and incidents, situations from the solo engineer to the research benchmark, and specialist work such as agent trajectories and embedding fine-tuning.

The rhythms are a weekly production sample review, feedback triage and log reading, monthly corpus reconciliation, stale content sweeps, judge calibration, provider watch and a quality, cost and latency report, and quarterly evaluation set refreshes, access checks and red team updates. The Metrics log, Risk register, Purchase decision, Operational checklist and Remediation plan templates pair with individual projects. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
