---
id: tech-certifications.ml-interview-preparation
name: Machine Learning Interview Preparation
description: "A plan for machine-learning interviews: the target role and its rounds, fundamentals and maths, metric and model choices, coding with data, ML system design, project stories and research discussion, rehearsed in mocks."
category: personal
version: 1.0.0
tags: [tech-certifications, ml-interview-preparation, engineer, researcher, machine-learning, ml-system-design, interviews, deep-learning]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - reading-queue
    - metrics-log
    - portfolio-piece
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Machine Learning Interview Preparation
          description: "Preparing for machine-learning interviews: ML fundamentals, model and metric choices, ML system design, coding with data, project stories and research discussion."
          projects:
            - name: Target ML role and interview format map
              description: |-
                ## Purpose
                Machine-learning job titles hide very different interviews: an ML engineer loop leans on coding and system design, an applied scientist loop on modelling judgement, and a research scientist loop on papers and a job talk. Writing down which role you want and which rounds your target companies actually run stops you preparing for an interview you will never sit.

                ## Milestones
                1. One primary role chosen from ML engineer, applied scientist, research scientist or ML-focused data scientist, with a second acceptable role named.
                2. Ten target companies or teams listed with the role title each uses.
                3. The rounds each company runs noted from recruiter calls, careers pages or people who interviewed recently.
                4. A one-page map showing which round types appear most often across the list.

                ## Notes
                Recruiters will usually describe the loop if you ask directly. Their answer is more current than any forum post.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written map names your primary target role, ten companies and the round types each runs, with the three most common round types highlighted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the role title you want and one you would also accept"
                - "List ten companies or teams hiring for that role"
                - "Ask two recent interviewees or a recruiter which rounds the loop contains"
                - "Tally the round types across your list and circle the top three"
            - name: ML interview skills baseline
              description: |-
                ## Purpose
                Few candidates know where they are weakest until an interviewer finds it for them. Scoring yourself across ML fundamentals, statistics, deep learning, coding with data, ML system design, project storytelling and research discussion, with a short test in each, gives the study plan a starting point you can measure against later.

                ## Milestones
                1. A matrix of seven skill areas, each broken into four to six topics.
                2. Every topic scored from one to four after attempting at least one real question on it.
                3. The three lowest-scoring topics that appear in your target rounds marked as priorities.
                4. The baseline dated and saved so later scores can be compared with it.

                ## Notes
                Start from the **Skills matrix** template. Score from what you could explain aloud without notes today, not what you studied once.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated skills matrix scores every topic across seven ML interview areas, with three priority gaps named."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Copy the seven skill areas into a skills matrix with topics under each"
                - "Answer one question per topic aloud and score yourself honestly"
                - "Mark the three weakest topics that your target rounds will test"
                - "Save the dated baseline next to your study plan"
            - name: Twelve-week ML interview study plan
              description: |-
                ## Purpose
                Breadth is the trap in ML interviews: there is always another architecture or paper to read, and without a calendar the system design and coding rounds get squeezed out. A twelve-week plan, weighted by your baseline gaps and the rounds you mapped, gives every week a theme and a mock.

                ## Milestones
                1. Twelve weeks laid out, each with one main topic, one practice type and one mock.
                2. Study hours per week set to a number you can keep alongside work and family.
                3. The weakest baseline topics scheduled in the first six weeks, not the last.
                4. Two buffer weeks marked for illness, travel or a surprise interview invitation.

                ## Notes
                If a recruiter has already booked a date, work backwards from it and shorten the plan rather than cramming every topic.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-week calendar exists with a topic, a practice type and a mock in every week and two buffer weeks marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide how many study hours a week you can genuinely protect"
                - "Assign your three weakest topics to weeks one to six"
                - "Put one mock of a different round type into each week"
                - "Block the study sessions in your calendar for the full twelve weeks"
            - name: ML concept notes and flashcard deck
              description: |-
                ## Purpose
                Interview answers draw on hundreds of small facts: why cross-entropy pairs with softmax, what dropout does at inference, when AUC misleads. A single searchable set of notes plus a spaced-repetition deck means each fact is learned once and reviewed until it sticks, instead of re-read from scratch before every interview.

                ## Milestones
                1. One notes location chosen, with a page per major topic from the baseline matrix.
                2. A spaced-repetition deck set up with cards written as questions you might be asked.
                3. At least 150 cards written from your own notes, not downloaded.
                4. A weekly habit of adding cards from that week's study in place.

                ## Notes
                Write each card so the answer fits in two sentences. Long cards get skipped.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A topic-organised notes set and a deck of at least 150 self-written question cards exist and are added to weekly."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick one notes app and one spaced-repetition app and stop looking"
                - "Create a notes page for each topic in your skills matrix"
                - "Write twenty question cards from the topic you studied most recently"
                - "Add cards from the week's study and prune duplicates @recurring(weekly:sun)"
            - name: Python data stack refresher for interviews
              description: |-
                ## Purpose
                Coding-with-data rounds usually happen in a bare editor or notebook without autocomplete, and fumbling a pandas groupby or a NumPy broadcast costs minutes you cannot spare. Rebuilding fluency in the handful of operations that come up again and again makes the modelling discussion the hard part, as it should be.

                ## Milestones
                1. A local environment with Python, NumPy, pandas, scikit-learn and one deep learning framework working offline.
                2. A one-page cheat sheet of the twenty operations you use most, written from memory and then checked.
                3. Ten short exercises completed without searching: joins, groupby aggregates, reshaping, vectorised maths and train-test splits.
                4. Comfort working in a plain text editor with no autocomplete confirmed in a timed run.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Ten pandas and NumPy exercises are completed in a plain editor without searching, inside forty-five minutes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Install a clean environment with NumPy, pandas, scikit-learn and PyTorch or JAX"
                - "Write a cheat sheet of twenty operations from memory, then correct it"
                - "Complete ten data manipulation exercises with autocomplete switched off"
                - "Time a final run of the ten exercises and note the slow ones"
            - name: Linear algebra and calculus refresher for ML
              description: |-
                ## Purpose
                Proofs are rarely requested, but candidates are asked why gradients vanish, what an eigenvector has to do with PCA, or how to differentiate a loss by hand. A focused refresher on the matrix and derivative ideas that ML actually uses lets you answer from understanding rather than memorised phrases.

                ## Milestones
                1. Matrix multiplication, rank, eigendecomposition and SVD explained aloud with a small worked example each.
                2. The chain rule applied by hand to a two-layer network's loss.
                3. PCA derived informally from variance maximisation and linked to SVD.
                4. Three interview-style maths questions answered on paper without notes.

                ## Notes
                Stop at what you can explain on a whiteboard. Going further rarely pays back in an interview.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can derive the gradient of a two-layer network and explain PCA through SVD on paper, checked against a reference."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Work through one short linear algebra refresher chapter or lecture"
                - "Differentiate a two-layer network's loss by hand and check it numerically"
                - "Explain PCA through SVD aloud in under three minutes"
                - "Answer three maths interview questions on paper and mark them"
            - name: Probability and statistics refresher for ML interviews
              description: |-
                ## Purpose
                Statistics questions are where strong engineers lose ML interviews: conditional probability puzzles, the meaning of a p-value, maximum likelihood, and why a confidence interval is not a probability about the parameter. Rebuilding these from first principles, with practice puzzles each week, removes one of the most common reasons for a no.

                ## Milestones
                1. Bayes' rule, expectation, variance and common distributions explained with one example each.
                2. Maximum likelihood and maximum a posteriori estimation derived for a coin and a Gaussian.
                3. Hypothesis tests, p-values, power and confidence intervals explained in plain words.
                4. Thirty probability puzzles solved with working written out.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Thirty probability and statistics questions are solved with written working, with at least 80 percent correct on a final set of ten."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the statistics topics your target roles mention in job adverts"
                - "Derive the maximum likelihood estimate for a Bernoulli and a Gaussian"
                - "Solve three probability puzzles with full working @recurring(weekly:mon)"
                - "Explain a p-value and a confidence interval to a non-specialist friend"
            - name: Core ML interview reading list
              description: |-
                ## Purpose
                Everyone preparing for ML interviews is handed the same sprawling lists of textbooks, courses and blogs. Choosing one book or course per topic, and a short list of landmark papers, keeps reading in proportion to the rounds you will actually face.

                ## Milestones
                1. One primary text or course chosen for classical ML, deep learning and ML system design.
                2. A list of no more than fifteen landmark papers relevant to your target role.
                3. Every item tagged with the week of the study plan it belongs to.
                4. Anything not tied to a week moved to a later list.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A reading queue lists one main resource per topic and at most fifteen papers, each tied to a week of the study plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick one main resource each for classical ML, deep learning and ML design"
                - "Shortlist up to fifteen papers that your target teams build on"
                - "Tag each item with a study plan week"
                - "Park everything else on a someday list"
            - name: ML project inventory with measured outcomes
              description: |-
                ## Purpose
                Your past ML work gets probed harder than any textbook topic, with questions about the baseline, the metric, the data problems and what you would change. Listing every project with its numbers before you need them shows which ones can stand up to forty minutes of questions and which only look good on a CV.

                ## Milestones
                1. Every ML project from work, research or side projects listed with dates and your role.
                2. For each one, the baseline, the metric, the final result and the business or research outcome recorded.
                3. Confidential details identified and a safe way to describe them agreed with yourself.
                4. The CV bullet points for ML work rewritten to match the recorded numbers.

                ## Notes
                Never share a former employer's data, code or unreleased results. Describe scale and impact in relative terms if absolute numbers are confidential.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A table lists every ML project with your role, baseline, metric, result and outcome, and the CV matches it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every ML project you have touched in the last five years"
                - "Fill in the baseline, metric and result for each from old notes or reports"
                - "Mark details that are confidential and write a safe phrasing for each"
                - "Rewrite the ML bullet points on your CV to match the table"
            - name: Twice-weekly ML study block routine
              description: |-
                ## Purpose
                Short, protected sessions twice a week beat a frantic weekend, because ML concepts need time between exposures to settle. Fixing the days, the length and the topic in advance removes the daily decision about whether and what to study.

                ## Milestones
                1. Two fixed weekly sessions of ninety minutes or more in the calendar.
                2. Each session starting from the study plan's topic of the week, with no choosing on the day.
                3. A one-line note after each session of what was covered and what was confusing.
                4. Eight consecutive weeks of sessions held or rescheduled within the same week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sixteen study sessions are logged over eight weeks, each with a one-line note of what was covered."
                cadence: rolling
              tasks:
                - "Choose two days and a time you can protect for the next twelve weeks"
                - "Run a ninety-minute study block on the week's topic @recurring(weekly:tue,thu)"
                - "Write one line on what was covered and what still confuses you"
                - "Move a missed session to another day in the same week"
            - name: Daily five-minute ML concept question
              description: |-
                ## Purpose
                Phone screens often fire quick conceptual questions one after another, and fluency comes from answering them often rather than studying them once. One question a day, answered aloud in under two minutes and checked against your notes, builds the habit of concise, correct explanations.

                ## Milestones
                1. A pool of at least 100 short conceptual questions collected from your notes and reading.
                2. One question answered aloud each day in under two minutes.
                3. Questions you fumbled flagged for the weekly mistake review.
                4. Thirty days of answers completed with a visible fall in fumbled questions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty daily concept questions are answered aloud within two minutes each, with fumbled ones recorded."
                cadence: rolling
              tasks:
                - "Collect 100 short ML concept questions into one list"
                - "Answer one concept question aloud in under two minutes @recurring(daily)"
                - "Flag any question you could not answer cleanly for the weekly review"
                - "Retire questions you have answered well three times in a row"
            - name: Weekly coding-with-data practice set
              description: |-
                ## Purpose
                Coding rounds for ML roles often hand you a messy table and ask for features, a model and an evaluation in forty-five minutes, or ask you to implement a metric or a sampling routine. A weekly timed set keeps the hands quick and builds a habit of talking through choices while typing.

                ## Milestones
                1. A bank of twenty data tasks gathered: cleaning, feature building, metric implementation and small model training.
                2. One task completed each week under a forty-five-minute timer, narrating aloud.
                3. Each attempt saved with the time taken and the point where you got stuck.
                4. Ten weeks of attempts showing faster, cleaner solutions.

                ## Notes
                Sorting and graph puzzles belong to general coding preparation. Keep this set to tasks where data and modelling choices are the point.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten timed coding-with-data attempts are saved with durations and sticking points, the last three each finished inside forty-five minutes."
                cadence: rolling
              tasks:
                - "Gather twenty data tasks from public datasets and past interview reports"
                - "Complete one timed data task while narrating aloud @recurring(weekly:wed)"
                - "Save the solution with the time taken and where you got stuck"
                - "Redo the slowest task from the previous month"
            - name: Twice-monthly ML system design mock
              description: |-
                ## Purpose
                ML system design is the round most candidates practise least, because it needs another person and a whole hour. Booking two mocks a month, alternating prompts such as a feed ranker, a fraud detector and a search system, turns a vague framework into a practised forty-minute conversation.

                ## Milestones
                1. A list of twelve ML system design prompts covering ranking, classification, search and generation.
                2. Two mocks a month held with a peer, mentor or paid interviewer.
                3. Written feedback captured after each mock against the same five criteria.
                4. Six mocks completed with feedback scores trending up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six ML system design mocks are completed over three months, each with written feedback scored against the same five criteria."
                cadence: rolling
              tasks:
                - "Write twelve ML system design prompts across different problem types"
                - "Hold an ML system design mock with a partner @recurring(monthly:6)"
                - "Hold a second ML system design mock on a new prompt @recurring(monthly:20)"
                - "Score each mock on problem framing, data, modelling, evaluation and serving"
            - name: ML interview mistake log and weekly review
              description: |-
                ## Purpose
                Mistakes repeat until they are written down: the same confusion between precision and recall, the same forgotten question about data freshness. A log of every fumbled question and mock error, reviewed weekly, turns scattered practice into targeted correction.

                ## Milestones
                1. One log with columns for date, source, question, what went wrong and the fix.
                2. Every flagged daily question and mock error entered within a day.
                3. A weekly review that groups mistakes by topic and assigns each a fix.
                4. Topics with three or more repeat mistakes moved into the study plan.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A mistake log holds every flagged error with a fix, reviewed weekly for eight weeks, with repeat topics added to the plan."
                cadence: rolling
              tasks:
                - "Set up a mistake log with date, source, question, error and fix columns"
                - "Group the week's mistakes by topic and write a fix for each @recurring(weekly:fri)"
                - "Move any topic with three repeat mistakes into next week's study block"
                - "Clear entries you have answered correctly twice since logging them"
            - name: Weekly paper for research discussion rounds
              description: |-
                ## Purpose
                Research and applied scientist loops often include a conversation about recent work in your field, and interviewers notice quickly whether you have read papers or only their abstracts. Reading one relevant paper a week and summarising it in five lines gives you a bank of work you can discuss with opinions.

                ## Milestones
                1. A queue of relevant papers drawn from your reading list and your target teams' publications.
                2. One paper read each week with a five-line summary: problem, method, evidence, weakness, follow-up.
                3. Twelve summaries collected and searchable by topic.
                4. Three papers you could discuss for twenty minutes marked as your favourites.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve five-line paper summaries exist, with three marked as ones you can discuss in depth."
                cadence: rolling
              tasks:
                - "Add five papers from your target teams' recent publications to the queue"
                - "Read one paper and write a five-line summary @recurring(weekly:sat)"
                - "Note one weakness or open question for every paper you summarise"
                - "Pick three favourite papers to rehearse discussing aloud"
            - name: Peer mock interview exchange
              description: |-
                ## Purpose
                Explaining gradient boosting to yourself is not the same as explaining it to someone who interrupts. Swapping weekly mocks with one or two peers who are also preparing gives you an interviewer for free and, by sitting on the other side, shows you what a good answer sounds like.

                ## Milestones
                1. One or two peers found who are preparing for similar ML roles.
                2. A weekly slot agreed, alternating who interviews and who answers.
                3. A shared bank of questions and a simple scoring sheet both partners use.
                4. Ten exchanges completed with written feedback both ways.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Ten peer mock sessions are completed with written feedback both ways recorded on a shared scoring sheet."
                cadence: rolling
              tasks:
                - "Post in an ML community or alumni group to find a mock partner"
                - "Agree a weekly slot and alternate interviewer and candidate roles"
                - "Run a forty-five-minute peer mock with written feedback @recurring(weekly:sun)"
                - "Write feedback for your partner within a day of each session"
            - name: Monthly ML interview readiness score
              description: |-
                ## Purpose
                Without a regular check, preparation drifts toward the topics that feel pleasant. Rescoring the baseline skills matrix each month, alongside mock feedback and mistake counts, shows whether the plan is working and when you are ready to book interviews.

                ## Milestones
                1. The skills matrix rescored monthly against the same topics as the baseline.
                2. Mock scores and mistake counts summarised next to the matrix.
                3. A written decision each month: keep the plan, shift weight, or start booking interviews.
                4. A quarterly check that the target companies and roles still make sense.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly rescorings are recorded next to the baseline, each ending in a written plan decision."
                cadence: rolling
              tasks:
                - "Rescore every topic in the skills matrix and note the change @recurring(monthly:28)"
                - "Summarise the month's mock scores and mistake counts beside the matrix"
                - "Write a one-line decision on whether to adjust the plan or book interviews"
                - "Check the target company list against current openings @recurring(quarterly)"
            - name: ML role application and round tracker
              description: |-
                ## Purpose
                Running several ML processes at once means juggling phone screens, coding rounds, design rounds and job talks with different preparation for each. A tracker that shows every application, its next round type and its date lets you point the week's study at what is coming rather than at what is comfortable.

                ## Milestones
                1. One tracker listing every application with company, role title, stage and next round type.
                2. Every scheduled round entered with its date and the preparation it needs.
                3. A debrief note attached to each completed round within a day.
                4. The tracker reviewed weekly to set the next week's study focus.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live application sits in one tracker with its next round type and date, reviewed weekly, and every completed round has a debrief."
                cadence: rolling
              tasks:
                - "Create a tracker with company, role, stage, next round type and date"
                - "Review upcoming rounds and set the week's study focus @recurring(weekly:mon)"
                - "Write a debrief within a day of every round you sit"
                - "Close out rejected or withdrawn applications with one lesson each"
            - name: Bias, variance and regularisation explained aloud
              description: |-
                ## Purpose
                Almost every ML fundamentals screen returns to overfitting in some form: why a model generalises badly, what L1 and L2 do differently, how cross-validation helps. Being able to explain the bias-variance trade-off with a sketch and a concrete example is the floor for passing.

                ## Milestones
                1. Bias, variance and irreducible error explained with a sketch of training and validation curves.
                2. L1, L2, dropout, early stopping and data augmentation compared in a single table.
                3. Cross-validation schemes explained, including when time-ordered splits are needed.
                4. Five interview questions on overfitting answered aloud and checked against a reference.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You answer five overfitting and regularisation questions aloud without notes, each matching a reference answer on the key points."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Sketch learning curves for an underfit, a well-fit and an overfit model"
                - "Build a table comparing five regularisation methods and when each helps"
                - "Explain why random splits fail on time series data"
                - "Answer five overfitting questions aloud and mark them against a reference"
            - name: Classic models explained from first principles
              description: |-
                ## Purpose
                Questions such as how logistic regression is trained, why random forests reduce variance, or how gradient boosting differs from bagging usually come with a follow-up one level deeper. Knowing each classic model's objective, training procedure, assumptions and failure modes lets you handle the follow-up questions calmly.

                ## Milestones
                1. Linear and logistic regression, naive Bayes, k-nearest neighbours, SVMs, decision trees, random forests and gradient boosting each summarised on one page.
                2. Each page covering the objective, training, key hyperparameters and when the model fails.
                3. A comparison of which model you would try first for five common problem types, with reasons.
                4. Ten follow-up questions answered without notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One-page summaries exist for seven classic models, and you answer ten follow-up questions on them without notes."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a one-page summary of logistic regression from objective to failure modes"
                - "Repeat the one-page summary for the six other classic models"
                - "Explain bagging versus boosting with a small numerical example"
                - "Answer ten follow-up questions on classic models without notes"
            - name: Metric choice drills for imbalanced and ranking problems
              description: |-
                ## Purpose
                Picking the wrong metric is one of the fastest ways to fail a modelling question: accuracy on a one percent fraud rate, AUC when the business only cares about the top ten results. Drilling metric choice across classification, ranking, regression and calibration builds the habit of asking what the metric must protect before choosing it.

                ## Milestones
                1. Precision, recall, F1, ROC AUC, PR AUC, log loss and calibration explained with when each misleads.
                2. Ranking metrics such as precision at k, NDCG and MRR explained with a worked example.
                3. Offline metrics linked to an online business metric for three example products.
                4. Ten scenario questions answered with a metric choice and a reason.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten metric-choice scenarios are answered in writing, each naming a primary metric, a guardrail metric and the reason."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compute precision, recall and F1 by hand for a small confusion matrix"
                - "Work through NDCG for a ranked list of five results"
                - "Write ten scenarios and pick a primary and guardrail metric for each"
                - "Explain why PR AUC can beat ROC AUC on a rare positive class"
            - name: Deep learning training mechanics review
              description: |-
                ## Purpose
                Deep learning questions tend to focus on why training goes wrong: exploding gradients, a loss that plateaus, batch norm behaving differently at inference. Reviewing backpropagation, initialisation, optimisers, normalisation and learning rate schedules as a connected story lets you diagnose a broken training run in an interview the way you would at work.

                ## Milestones
                1. Backpropagation traced through a small network by hand.
                2. SGD, momentum, Adam and AdamW compared, including what weight decay does in each.
                3. Batch, layer and group normalisation explained with their training and inference behaviour.
                4. A checklist for debugging a training run that will not converge, written from your own experience.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written training-debug checklist exists, and you explain optimiser and normalisation choices aloud without notes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Trace backpropagation through a two-layer network on paper"
                - "Write a comparison of four optimisers and their key hyperparameters"
                - "Explain how batch norm differs between training and inference"
                - "Draft a checklist for diagnosing a training run that will not converge"
            - name: Attention and transformer architecture walkthrough
              description: |-
                ## Purpose
                Transformers now appear in interviews for vision, speech, ranking and language roles alike, and interviewers often ask candidates to draw one. Being able to sketch self-attention, explain the scaling, positional information and the encoder and decoder variants, and estimate the compute cost, covers a large share of current deep learning questions.

                ## Milestones
                1. Scaled dot-product attention written out with shapes for queries, keys and values.
                2. Multi-head attention, residual connections and layer normalisation drawn as one block.
                3. Encoder-only, decoder-only and encoder-decoder models compared with an example use for each.
                4. The cost of attention in sequence length explained, with two ways people reduce it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You draw a transformer block with correct tensor shapes and explain attention's cost in sequence length, checked by a peer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write scaled dot-product attention with every tensor shape labelled"
                - "Draw one transformer block from memory and compare it with a reference"
                - "Compare encoder-only, decoder-only and encoder-decoder models in a table"
                - "Explain the quadratic cost of attention to a peer in five minutes"
            - name: From-scratch ML implementations in NumPy
              description: |-
                ## Purpose
                A common ML coding prompt is to implement an algorithm without a library: k-means, logistic regression with gradient descent, a decision tree split or attention. Writing a small set of these from scratch, with tests, shows interviewers you understand the maths behind the API calls.

                ## Milestones
                1. Linear regression, logistic regression with gradient descent and k-means implemented in NumPy.
                2. A decision tree split function and a softmax with cross-entropy implemented and tested.
                3. A single-head attention function implemented with shape checks.
                4. Each implementation checked against a library result on the same data.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six from-scratch NumPy implementations exist, each matching a library result on test data within a small tolerance."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Implement logistic regression with gradient descent in plain NumPy"
                - "Implement k-means and compare its clusters with a library version"
                - "Write a numerically stable softmax with cross-entropy and test it"
                - "Implement single-head attention and assert every tensor shape"
            - name: Data leakage and feature pipeline scenarios
              description: |-
                ## Purpose
                A model that scores suspiciously well is a favourite interview prompt, because spotting leakage separates people who have shipped models from those who have only trained them. Practising leakage, train-serving skew, label delay and missing data scenarios prepares you for the questions that follow any modelling answer.

                ## Milestones
                1. Ten leakage scenarios written, covering target leakage, temporal leakage and duplicate users across splits.
                2. Train-serving skew explained with an example of a feature computed differently online.
                3. Strategies for missing values, high-cardinality categories and delayed labels compared.
                4. Each scenario answered aloud with the check you would run to detect it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten written leakage and feature scenarios each have a detection check and a fix, rehearsed aloud once."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write ten leakage scenarios drawn from your own past projects where possible"
                - "Name the check that would catch each one before deployment"
                - "Explain train-serving skew with one concrete feature example"
                - "Compare three ways to handle labels that arrive weeks after the prediction"
            - name: Online experiments and A-B test reasoning
              description: |-
                ## Purpose
                Applied scientist and product ML interviews often ask how you would prove a new model is better in production. Knowing how to choose a unit of randomisation, size a test, pick guardrail metrics and read a result that disagrees with offline metrics turns a modelling answer into a launch answer.

                ## Milestones
                1. Randomisation units, sample size, power and minimum detectable effect explained in plain words.
                2. Common pitfalls listed: peeking, novelty effects, network effects and multiple comparisons.
                3. Interleaving and holdout groups explained for ranking systems.
                4. Three cases worked through where offline and online results disagree.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three written cases explain how you would design, size and interpret an online test for a new model, including a guardrail metric."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Explain power and minimum detectable effect in three sentences"
                - "List five experiment pitfalls with an example of each"
                - "Work through one case where offline gains vanished online"
                - "Describe how interleaving works for comparing two rankers"
            - name: ML system design answer framework
              description: |-
                ## Purpose
                Strong ML system design answers follow a recognisable shape: clarify the goal, define the metric, design the data and labels, choose a model, plan evaluation, then serving and monitoring. Writing your own framework, with time budgets for each stage, keeps a forty-minute conversation from collapsing into a model architecture monologue.

                ## Milestones
                1. A one-page framework with six or seven stages and a time budget for each.
                2. A list of clarifying questions to ask at the start of any prompt.
                3. The framework applied on paper to three prompts of different types.
                4. The framework revised after the first two mocks.

                ## Notes
                General distributed systems design is its own area. Here the weight sits on data, labels, metrics, models and monitoring.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page ML system design framework with stage time budgets exists and has been applied to three prompts and revised once."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the stages of your ML system design answer with minutes for each"
                - "Write ten clarifying questions you will ask before designing anything"
                - "Apply the framework to a recommender, a classifier and a search prompt on paper"
                - "Revise the framework using notes from your first two mocks"
            - name: LLM fine-tuning, retrieval and evaluation topics
              description: |-
                ## Purpose
                Many ML openings now involve large language models, and interviewers ask how you would adapt one to a task, ground it in company documents and measure whether it works. Preparing clear answers on prompting, fine-tuning, parameter-efficient methods, retrieval and evaluation keeps you credible without needing to have trained a frontier model.

                ## Milestones
                1. Prompting, full fine-tuning, parameter-efficient fine-tuning and preference tuning compared by cost and data needs.
                2. A retrieval-augmented design sketched with chunking, embedding, retrieval and grounding checks.
                3. Evaluation approaches listed: human review, model-graded scoring, task metrics and regression suites.
                4. Hallucination, latency and cost trade-offs explained for one realistic product.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can explain, with a sketch, how you would adapt, ground and evaluate a language model for one realistic product, checked in a mock."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compare four ways to adapt a language model in a single table"
                - "Sketch a retrieval-augmented system for an internal help desk"
                - "List how you would evaluate it before and after launch"
                - "Read one new LLM training or evaluation write-up @recurring(monthly:9)"
            - name: Choosing the two projects to present in depth
              description: |-
                ## Purpose
                Most ML loops include at least one round where you walk through a past project for most of the hour, and a weak choice cannot be rescued by good delivery. Choosing two projects, one technically deep and one with clear impact, from your inventory gives you something you can defend under any line of questioning.

                ## Milestones
                1. Every project in your inventory scored on technical depth, your ownership, measurable impact and how safely it can be discussed.
                2. Two projects chosen, with a third as a backup for a different role type.
                3. The reasons for each choice written in two sentences.
                4. A peer asked whether the chosen projects sound convincing at a first hearing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two lead projects and a backup are chosen from a scored inventory, with written reasons and a peer's reaction recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Score each inventory project on depth, ownership, impact and confidentiality"
                - "Pick two lead projects and one backup"
                - "Write two sentences on why each project is the right choice"
                - "Describe each project in two minutes to a peer and note their questions"
            - name: Project walkthrough script with trade-offs and numbers
              description: |-
                ## Purpose
                Interviewers testing a past project ask why you chose that model, what the baseline was, what broke and what you would do now. A rehearsed walkthrough for each lead project, with a five-minute version and a twenty-minute version, makes those answers concrete and stops you drifting into a list of tools.

                ## Milestones
                1. A structure for each lead project: problem, data, baseline, approach, evaluation, result, what went wrong, what next.
                2. A five-minute and a twenty-minute version of each walkthrough.
                3. Twenty likely follow-up questions written with short answers.
                4. Each walkthrough rehearsed with a peer who asked unscripted follow-ups.

                ## Notes
                Interviewers trust a project more when you name a mistake you made and how you found it. Leave one in.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Both lead projects have five-minute and twenty-minute walkthroughs and twenty follow-up answers, rehearsed once with a peer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Outline each lead project using problem, data, baseline, approach, evaluation and result"
                - "Ask the agent to draft twenty hard follow-up questions from your outline"
                - "Rehearse the five-minute version of each project with a timer"
                - "Run the twenty-minute version with a peer who interrupts freely"
            - name: Notebook project turned into a reviewable repository
              description: |-
                ## Purpose
                Candidates without public work, or whose work is all confidential, are often asked to show something they built. Turning one personal ML project from a notebook into a clean repository with a readme, a reproducible training run and an honest evaluation gives interviewers something to look at and gives you a project you can discuss freely.

                ## Milestones
                1. One personal project chosen that uses public data and no employer material.
                2. Code split into data, training and evaluation modules with a single command to reproduce results.
                3. A readme stating the problem, baseline, metric, results and limitations.
                4. The repository linked from your CV and checked by someone who tried to run it.

                ## Notes
                Start from the **Portfolio piece** template. Smaller and finished beats ambitious and half-done.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A public repository reproduces one project's results with a single command, and a peer has run it successfully from the readme."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Pick one personal project built only on public data"
                - "Move the notebook code into data, training and evaluation modules"
                - "Write a readme with the baseline, metric, results and limitations"
                - "Ask a peer to clone and run it and fix whatever breaks"
            - name: Four-week sprint on your weakest ML topic
              description: |-
                ## Purpose
                After the first monthly rescore, one topic usually stands out as stubbornly weak, often statistics or ML system design. A four-week sprint that gives that topic half of every study block, with a mock at the end, fixes it faster than spreading effort evenly.

                ## Milestones
                1. The weakest topic chosen from the latest readiness score and mistake log.
                2. Four weeks scheduled with half of each study block on that topic.
                3. A specific resource and a set of twenty practice questions chosen for it.
                4. A mock focused on the topic held at the end, with the score compared with the baseline.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The weakest topic's matrix score rises by at least one point after a four-week sprint ending in a focused mock."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick the lowest-scoring topic from your latest readiness score"
                - "Choose one resource and twenty practice questions for it"
                - "Give half of every study block to the topic for four weeks"
                - "Book a topic-focused mock for the end of week four"
            - name: Choosing mock interview services and question banks
              description: |-
                ## Purpose
                Paid mock platforms, coaching and question banks range from excellent to useless, and the costs add up across a long search. Deciding up front what you will pay for, and what peers and free resources can cover, keeps spending tied to the rounds where outside feedback matters most.

                ## Milestones
                1. The rounds where you most need an experienced interviewer identified from your format map.
                2. Three paid options compared on interviewer background, price per session and refund terms.
                3. A spending limit set for the whole search.
                4. A decision recorded on what to buy and what to cover with peers.

                ## Notes
                Ask any paid interviewer whether they have run ML interviews recently, not just general software ones.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the paid mock or question bank services you will use, if any, within a stated spending limit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note which round types you most need expert feedback on"
                - "Compare three paid mock options on interviewer background and price"
                - "Set a total spending limit for mocks and question banks"
                - "Record what you will buy and what peers will cover"
            - name: Diagram set-up for remote ML design rounds
              description: |-
                ## Purpose
                Remote design rounds use an online whiteboard or shared document, and drawing a feature pipeline with a mouse for the first time mid-interview wastes minutes and nerve. Setting up a tool, a reusable set of shapes and a quiet, well-lit space makes the technical conversation the only thing you are managing.

                ## Milestones
                1. The whiteboard or document tools used by your target companies identified.
                2. Fast ways to draw boxes, arrows and labelled data stores practised in each.
                3. A test call held with camera, microphone and screen sharing checked.
                4. A backup plan ready for a dropped connection, such as a phone hotspot and the recruiter's number.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "You can draw a five-component ML pipeline in the interview tool in under three minutes, tested on a live call with a peer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask recruiters which whiteboard or editor tool their design rounds use"
                - "Draw a five-box training and serving pipeline in that tool against a timer"
                - "Run a test call with screen sharing, camera and microphone"
                - "Save the recruiter's phone number and a hotspot plan for a dropped call"
            - name: ML fundamentals phone screen preparation
              description: |-
                ## Purpose
                The first technical screen for many ML roles is a rapid round of concept questions, sometimes with a short coding task, and it filters out more candidates than any later round. Preparing a targeted set of answers and rehearsing them at pace in the week before gives you the best chance of reaching the onsite.

                ## Milestones
                1. The screen's format confirmed with the recruiter: concepts only, coding, or both.
                2. Fifty likely questions answered in two minutes or less each.
                3. Two full mock screens completed at real pace.
                4. A quiet room, notes policy and equipment confirmed for the day.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two timed mock screens are completed and fifty concept answers rehearsed before the real phone screen date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the recruiter whether the screen includes coding and how long it runs"
                - "Pick fifty likely questions from your flashcards and mistake log"
                - "Run two full mock screens with a peer at real pace"
                - "Write a debrief within an hour of finishing the real screen"
            - name: Live data coding round rehearsal
              description: |-
                ## Purpose
                Some ML loops include a round where you are given a dataset and a goal and asked to explore, model and evaluate it live while explaining your thinking. Rehearsing that exact round three times, on unseen data with someone watching, prepares you for the time pressure and the questions about every choice.

                ## Milestones
                1. The round's format, tools and allowed libraries confirmed with the recruiter.
                2. Three unseen datasets prepared by a peer or drawn from a public source you have not used.
                3. Three full rehearsals completed under the real time limit with narration.
                4. A personal opening routine written: inspect, baseline, evaluate, then improve.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three timed rehearsals on unseen datasets are completed, each finishing with a baseline and an evaluated improvement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the allowed tools and libraries for the data round"
                - "Ask a peer to pick three datasets you have never seen"
                - "Rehearse each dataset under the real time limit while narrating"
                - "Write a five-step opening routine you will follow on the day"
            - name: Onsite ML system design round preparation
              description: |-
                ## Purpose
                By the onsite stage, the ML system design round often carries the most weight for mid-level and senior roles. A focused two weeks on the company's product area, with three mocks on prompts close to their real problems, turns your general framework into answers that sound like their team.

                ## Milestones
                1. The company's main ML-driven products and published engineering posts reviewed.
                2. Three likely prompts written for that company's product area.
                3. Three mocks completed on those prompts with written feedback.
                4. A list of five questions to ask the interviewer about their own system.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three company-specific ML system design mocks are completed with written feedback before the onsite date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Read three engineering blog posts from the company's ML teams"
                - "Write three design prompts that match the company's product"
                - "Run three mocks on those prompts and log the feedback"
                - "Prepare five questions about the interviewer's own ML system"
            - name: Research job talk for scientist interviews
              description: |-
                ## Purpose
                Research scientist loops often open with a job talk to a room of researchers who will question every claim, and the talk shapes how every later interviewer sees you. Building a forty-five-minute talk around one clear contribution, rehearsing it twice with a hostile audience and preparing for the hard questions makes the strongest first impression you can control.

                ## Milestones
                1. One central contribution chosen, with the talk structured around it rather than around every paper.
                2. Slides drafted with a motivation, method, evidence, limitations and future work arc.
                3. Two practice talks given to colleagues who were asked to challenge it.
                4. A list of the ten hardest questions with prepared answers.

                ## Notes
                Check the talk length and audience with the hiring team. Leave real time for questions, as interviewers often judge you most on that part.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A job talk is delivered twice to practice audiences within the agreed length, with ten hard questions and answers written down."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask the hiring team for the talk length, audience and format"
                - "Write the one-sentence contribution the whole talk supports"
                - "Draft slides covering motivation, method, evidence, limits and next steps"
                - "Give two practice talks to colleagues briefed to challenge you"
            - name: Final week before an ML onsite
              description: |-
                ## Purpose
                The last week before an onsite is for consolidation, not new topics, and candidates who cram transformers the night before often perform worse in the rounds they had prepared well. A short plan for the final seven days, with light review, one mock per round type and logistics settled, keeps you sharp and rested.

                ## Milestones
                1. The onsite schedule confirmed with every round type, interviewer if known, and timing.
                2. One short mock for each round type held early in the week.
                3. Only review of existing notes, walkthroughs and mistake log in the last three days.
                4. Travel, equipment and food sorted the day before, with a normal night's sleep.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One mock per round type is completed in the final week and no new topics are started in the last three days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the full onsite schedule and round types with the recruiter"
                - "Book one short mock for each round type early in the week"
                - "Reread your project walkthroughs and mistake log only"
                - "Lay out equipment, travel and meals the day before"
            - name: Software engineer moving into ML engineering
              description: |-
                ## Purpose
                Software engineers bring a strong advantage in coding and system design rounds, but often struggle with modelling judgement and statistics questions. A plan that leans on production experience while closing the gaps in fundamentals and metrics, plus one ML project you can defend, is the usual route into ML engineer roles.

                ## Milestones
                1. Your existing engineering work reframed to show data pipelines, experimentation or model serving you have touched.
                2. Statistics and classic models moved to the front of the study plan.
                3. One end-to-end ML project completed with a baseline and evaluation you can explain.
                4. Mocks scored specifically on modelling judgement, not just code quality.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One end-to-end ML project is completed and two mocks rate your modelling judgement at least three out of four."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List production work you have done that touched data or models"
                - "Move statistics and classic models to the first weeks of your plan"
                - "Build one small end-to-end project with a baseline and evaluation"
                - "Ask mock interviewers to score modelling judgement separately"
            - name: PhD or postdoc move into industry research roles
              description: |-
                ## Purpose
                Researchers leaving academia are strong on depth but often underprepared for coding rounds, ML system design and questions about business impact. Translating a thesis into an industry story, practising coding to a timer and learning to talk about deployment constraints closes the usual gaps in research scientist and applied scientist loops.

                ## Milestones
                1. The thesis summarised as two or three contributions with clear real-world relevance.
                2. Coding practice scheduled weekly until timed problems are finished comfortably.
                3. One ML system design mock completed with a focus on serving and monitoring.
                4. Advisers and co-authors asked for referrals to industry labs.

                ## Notes
                Check visa timelines and notice periods for your contract early, as industry offers can move faster than academic posts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written industry summary of your thesis exists and three timed coding problems in a row are finished inside the limit."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write your thesis as two or three contributions in plain language"
                - "Explain how one contribution could be used in a real product"
                - "Schedule weekly timed coding practice until you finish comfortably"
                - "Ask your adviser and co-authors for introductions to industry labs"
            - name: Data scientist move into ML engineer roles
              description: |-
                ## Purpose
                Data scientists usually know modelling and experiments well but are tested in ML engineer loops on production code, serving, latency and monitoring. A plan that adds software engineering habits and an end-to-end deployed model to your existing analytical strength makes the switch credible.

                ## Milestones
                1. Gaps listed against ML engineer job descriptions: testing, packaging, serving, latency and monitoring.
                2. One model deployed behind a simple API with tests and basic monitoring.
                3. Two mocks completed on ML system design with serving and scaling in focus.
                4. Your CV rewritten to show code and production impact, not only analysis.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One model is deployed behind a tested API with monitoring, and two ML system design mocks are completed."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Compare three ML engineer job descriptions with your current skills"
                - "Wrap one existing model in a small API with unit tests"
                - "Add logging of prediction latency and input drift to that service"
                - "Rewrite your CV bullets to show code and production outcomes"
            - name: Senior and staff ML engineer interview preparation
              description: |-
                ## Purpose
                Senior ML loops ask less about how a model works and more about how you chose what to build, set technical direction and raised the quality of other people's work. Preparing examples of ML strategy, platform decisions and mentoring, and practising design answers that cover multiple teams, matches what interviewers listen for at that level.

                ## Milestones
                1. Three examples written where you set ML direction or chose not to use ML.
                2. Design answers practised that cover data contracts, shared platforms and ownership across teams.
                3. One example each of mentoring, raising evaluation standards and handling a failed launch.
                4. A mock with a senior peer focused on scope and judgement.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three ML direction examples and three leadership examples are written, and one senior-level mock has been completed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write three cases where you shaped what an ML team built"
                - "Include one case where you argued against using ML at all"
                - "Practise a design prompt that spans two teams and a shared platform"
                - "Book a mock with a senior or staff engineer you trust"
            - name: ML interview plan around a full-time job
              description: |-
                ## Purpose
                Preparing while employed means study fits into early mornings, lunch breaks and weekends, and interviews must be scheduled without alerting your current team. A plan sized to five or six hours a week, with interviews clustered into a few weeks, keeps both your job and your preparation intact.

                ## Milestones
                1. A realistic weekly study budget agreed with yourself and anyone at home it affects.
                2. Short daily review moved to commute or lunch, with longer blocks at weekends.
                3. Interviews clustered into a four to six week window using leave or flexible hours.
                4. A rule written for keeping the search private from your current employer.

                ## Notes
                Use a personal device and personal email for the whole search. Never use work equipment or work time for interviews.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan sets weekly study hours, an interview window and a privacy rule, followed for six weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree a weekly study budget with anyone at home it affects"
                - "Move flashcard review to your commute or lunch break"
                - "Choose a four to six week window for clustering interviews"
                - "Set up a personal email and calendar used only for the search"
            - name: New graduate ML interview preparation
              description: |-
                ## Purpose
                Graduates and early-career candidates are usually judged on fundamentals, coding and a course or internship project rather than production experience. Turning coursework and a capstone into defensible project stories, and drilling fundamentals until they are quick, is the most reliable way through entry-level ML loops.

                ## Milestones
                1. Coursework, internships and capstone projects listed with what you personally did.
                2. One project chosen and written up with a baseline, metric and result.
                3. Fundamentals and statistics drilled until the daily concept question is answered cleanly most days.
                4. Applications sent to graduate and early-career ML roles as well as general software roles with ML teams.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One student project has a written baseline, metric and result, and twenty consecutive daily concept answers are clean."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List every course, internship and capstone project with your own role"
                - "Write up your strongest project with a baseline, metric and result"
                - "Ask a lecturer or internship supervisor to review your write-up"
                - "Apply to early-career ML roles and software roles on ML teams"
            - name: Recommender and ranking system design practice
              description: |-
                ## Purpose
                Feed ranking, search and recommendations are the most common ML system design prompts at consumer companies, and they reward specific knowledge: candidate generation versus ranking, implicit feedback, position bias and cold start. Practising a set of ranking designs in depth gives you a strong default for the prompt you are most likely to see.

                ## Milestones
                1. The two-stage retrieve-then-rank architecture explained with latency budgets for each stage.
                2. Implicit feedback, position bias, exploration and cold start each covered with a mitigation.
                3. Three ranking designs written up: a video feed, product search and people suggestions.
                4. One ranking design mock completed with a reviewer who has worked on ranking.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three written ranking designs cover retrieval, ranking, bias and cold start, and one ranking mock has been reviewed by a ranking practitioner."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draw a retrieve-then-rank pipeline with a latency budget per stage"
                - "List mitigations for position bias and cold start"
                - "Sketch one ranking system on a new product each fortnight @recurring(monthly:12)"
                - "Book a mock with someone who has built ranking systems"
            - name: Domain round preparation for vision, speech or NLP
              description: |-
                ## Purpose
                Teams working on images, audio or text often run a domain round that goes past general deep learning into data augmentation, architectures and evaluation specific to that field. Preparing the core models, datasets, metrics and recent shifts in your one domain shows you can contribute from the first week.

                ## Milestones
                1. One domain chosen to match your target teams.
                2. The domain's main architectures, standard benchmarks and metrics summarised with their limits.
                3. Domain-specific data issues listed, such as label noise, class imbalance or accent coverage.
                4. Two recent papers in the domain prepared for discussion.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A domain summary covers architectures, benchmarks, metrics and data issues, and two recent papers are prepared for discussion."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose the one domain your target teams work in"
                - "Summarise the main architectures and benchmarks with their weaknesses"
                - "List the data problems that are specific to that domain"
                - "Prepare two recent domain papers for a twenty-minute discussion"
            - name: MLOps and model monitoring interview topics
              description: |-
                ## Purpose
                ML engineer and ML platform roles ask what happens after a model ships: feature stores, model registries, batch versus online serving, drift detection, retraining triggers and rollback. Preparing these topics with examples from real systems shows you can keep a model healthy in production, not just train it.

                ## Milestones
                1. Batch, online and streaming serving compared with latency and cost trade-offs.
                2. Data drift, concept drift and label drift explained with a detection method for each.
                3. A retraining and rollback policy written for one example model.
                4. Five public post-mortems of ML systems read and summarised in two lines each.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written monitoring, retraining and rollback policy exists for one example model, with five ML post-mortems summarised."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compare batch, online and streaming serving in a single table"
                - "Explain three types of drift with a detection method for each"
                - "Write a retraining and rollback policy for one example model"
                - "Read one public post-mortem of a production ML system @recurring(monthly:24)"
            - name: Responsible AI, fairness and safety questions
              description: |-
                ## Purpose
                Interviewers increasingly ask how you would find and reduce bias in a model, protect user privacy in training data or stop a generative model producing harmful output. Preparing clear, practical answers about fairness metrics, privacy techniques and evaluation for harm shows judgement that matters more as models reach more people.

                ## Milestones
                1. Group fairness metrics and their known tensions explained with one example.
                2. Privacy techniques such as data minimisation, anonymisation limits and differential privacy explained in plain words.
                3. A harm evaluation plan sketched for one generative product.
                4. One past project reviewed for fairness or privacy risks you would now handle differently.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written answers cover fairness metrics, privacy techniques and a harm evaluation plan, and one past project has been reviewed for risk."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Explain two group fairness metrics and why they can conflict"
                - "Describe three privacy techniques and what each cannot protect"
                - "Sketch a harm evaluation plan for a text generation feature"
                - "Review one past project for a fairness or privacy risk you missed"
            - name: Paper critique rounds for research scientist interviews
              description: |-
                ## Purpose
                Some research loops hand you a paper in advance, or in the room, and ask you to critique it, propose follow-up experiments and judge whether the claims hold. Practising structured critiques, with a written review each month, builds the reviewer's eye that research interviewers are testing for.

                ## Milestones
                1. A critique structure written: claim, evidence, missing baselines, confounds, follow-up experiments.
                2. One paper critiqued each month with a one-page written review.
                3. Two critiques discussed aloud with a researcher who gave feedback.
                4. A list of the five most common weaknesses you now spot quickly.

                ## Notes
                Interviewers value a fair critique that credits what works. A review that only lists faults reads as inexperience.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three one-page paper critiques are written using the same structure, and two have been discussed with a researcher."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a five-part structure for critiquing an ML paper"
                - "Critique one paper in a one-page written review @recurring(monthly:15)"
                - "Discuss a critique aloud with a researcher and note their feedback"
                - "List the five weaknesses you now spot most often"
---

# Machine Learning Interview Preparation

This area is for engineers and researchers preparing for machine-learning roles, from ML engineer and applied scientist to research scientist, where the interview tests far more than coding puzzles. It starts with foundations (the role you are targeting, a skills baseline, a dated study plan, the maths, statistics and Python you will be asked to use, and an honest inventory of your projects), then the weekly study and mock machinery, the core knowledge from bias and variance to transformers, decisions about which projects to present and where to spend time, the individual rounds from phone screen to job talk, plans for software engineers, PhD graduates, data scientists, senior candidates and people interviewing around a full-time job, and specialist rounds on ranking, domains, MLOps, responsible AI and paper critique.

The rhythm is two study blocks a week with a short daily concept question, weekly coding-with-data practice, a mistake review, a paper and a peer mock, twice-monthly ML system design mocks and a monthly readiness score, with quarterly checks that your target list still fits. The Skills matrix, Reading queue, Metrics log and Portfolio piece templates pair with it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
