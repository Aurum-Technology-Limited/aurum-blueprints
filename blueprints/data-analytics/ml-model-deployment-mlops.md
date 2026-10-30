---
id: data-analytics.ml-model-deployment-mlops
name: ML Model Deployment (MLOps)
description: "Every production model registered, packaged and owned, a tested path from notebook to endpoint, serving that is watched and costed, and a rollback that works on the first try."
category: business
version: 1.0.0
tags: [data-analytics, ml-model-deployment-mlops, engineer, team, model-registry, model-serving, ci-cd, rollback]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - purchase-decision
    - remediation-plan
    - onboarding-30-60-90
    - risk-register
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: ML Model Deployment (MLOps)
          description: "Taking machine learning models from notebooks into production with versioning, pipelines, serving infrastructure and safe rollback."
          projects:
            - name: Production model inventory and owners
              description: |-
                ## Purpose
                Most teams cannot say, without digging, how many models are making decisions in production right now, which code version each one runs or who gets paged when it breaks. A single inventory listing every model, its serving pattern, the systems that consume its output and a named owner is the base that registry, monitoring and rollback work all build on.

                ## Milestones
                1. One list of every model serving predictions, including scheduled scoring scripts nobody calls a model.
                2. Each entry showing serving pattern, model version, training data date and the consuming systems.
                3. A named engineering owner and a business owner recorded against every model.
                4. Models with no owner or no known consumer flagged for a keep or retire decision.

                ## Notes
                Search the scheduler, the cloud console and the container platform, not just the team wiki. The model that matters most is often a cron job on a forgotten virtual machine.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory lists every production model with its version, serving pattern, consumers and two named owners."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every endpoint, scheduled job and container that loads a model file"
                - "Record the serving pattern, version and consuming systems for each model"
                - "Name an engineering owner and a business owner for every entry"
                - "Flag models with no owner or consumer and book a keep or retire decision"
            - name: Production readiness bar for models
              description: |-
                ## Purpose
                Without a written bar, production-ready means whatever the person shipping that week thinks it means, and the gaps show up as outages. Agreeing a short checklist covering tests, a pinned environment, an input schema, monitoring, an owner and a tested rollback gives every release the same minimum and makes review conversations shorter.

                ## Milestones
                1. A readiness checklist of no more than fifteen items agreed by the team.
                2. Each item written so a reviewer can answer yes or no with evidence.
                3. The checklist applied to the current production models and the gaps recorded.
                4. The checklist linked from the release process so it is used every time.

                ## Notes
                Keep it short enough to use. A forty-item list gets ticked without being read; ten items that are checked properly do more.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A readiness checklist of fifteen items or fewer is agreed, applied to every current model and referenced by the release process."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft ten to fifteen yes or no readiness checks from your last three incidents"
                - "Review the draft with whoever approves releases and cut anything vague"
                - "Score each production model against the checklist and log the gaps"
                - "Add the checklist link to the release template or pull request template"
            - name: Batch, online or streaming inference decision
              description: |-
                ## Purpose
                Teams often stand up a low-latency endpoint for a use case that only needs scores refreshed nightly, then pay for idle servers and on-call they did not need. Deciding the serving pattern per model from how fresh predictions must be, how many are needed and what happens when one is late keeps infrastructure proportional to the problem.

                ## Milestones
                1. For each model, the required prediction freshness written in plain terms.
                2. Request volume, latency need and cost of a late prediction recorded.
                3. A serving pattern chosen per model, with the reason in one sentence.
                4. Any model on a heavier pattern than it needs listed for a later move.

                ## Notes
                A useful default: if the input is known a day ahead, score in batch and write results to a table. Reach for an online endpoint only when the input arrives with the request.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every production model has a recorded serving pattern with a written freshness requirement and one-line justification."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each consuming team how stale a prediction can be before it causes harm"
                - "Record request volume and latency needs for each model"
                - "Choose batch, online or streaming per model and write the reason"
                - "List models that are over-served and estimate the saving from moving them"
            - name: Model registry with stages and lineage
              description: |-
                ## Purpose
                Copying model files between buckets and laptops makes it impossible to answer which exact artefact is live and what data trained it. A registry that stores every candidate with a version number, a stage such as staging or production, the training run that produced it and its evaluation results turns promotion and rollback into recorded actions instead of file renames.

                ## Milestones
                1. A registry chosen and reachable from training jobs and the deployment pipeline.
                2. Stages defined, with who may move a model between them.
                3. Every production model registered with its training run, data snapshot and metrics.
                4. Deployments reading models from the registry by version, never from a loose path.

                ## Notes
                The registry does not need to be a separate product. Many teams start with the one built into their experiment tracker or cloud ML service; what matters is that deployments refer to a registered version.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All production models are served from registered versions, each linked to a training run, data snapshot and evaluation results."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the registry your training and deployment tools can both reach"
                - "Define the stages and write down who can promote a model between them"
                - "Register each production model with its run, data snapshot and metrics"
                - "Change deployment configs to load models by registered version"
            - name: Versioned model artefact packaging
              description: |-
                ## Purpose
                Any pickled model that only loads with the exact library versions on one data scientist's machine is a production incident waiting for the next dependency update. Packaging each model with its preprocessing code, pinned dependencies, an input and output signature and a small sample payload means any engineer can load it, test it and serve it the same way.

                ## Milestones
                1. One agreed package format covering weights, preprocessing, dependencies and signature.
                2. Dependency versions pinned with a lock file stored next to the artefact.
                3. A sample input and expected output bundled for smoke tests.
                4. Every production model repackaged in the agreed format and reloaded from clean.

                ## Notes
                Preprocessing is where most silent errors hide. If the scaler or tokeniser lives in a notebook rather than inside the package, predictions in production will not match the ones you evaluated.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every production model loads from its package in a clean environment and reproduces the bundled sample output."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down what a model package must contain and the format you will use"
                - "Pin dependencies with a lock file for the first model and store it with the artefact"
                - "Bundle a sample input and its expected output with the package"
                - "Load each package in a fresh environment and compare against the sample"
            - name: Reproducible inference container image
              description: |-
                ## Purpose
                Inference images built by hand, with whatever base image was current that day, drift apart until one breaks on a security patch. A single maintained base image, a build file kept in version control and an image tag tied to the model version give every service the same starting point and make a rebuild routine rather than risky.

                ## Milestones
                1. A shared base image chosen with the runtime and system libraries models need.
                2. A build file in version control that produces the inference image from scratch.
                3. Image tags that include the model version and the code commit.
                4. Image size and build time recorded, with large layers explained.

                ## Notes
                Slim images start faster and patch faster. Keep training-only libraries such as notebooks and plotting packages out of the serving image.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The inference image builds from a version-controlled file on a clean machine and its tag identifies both the model and code versions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose one base image for inference and record why"
                - "Write the build file and commit it beside the serving code"
                - "Tag images with the model version and the commit hash"
                - "Remove training-only packages and note the size saved"
            - name: Inference API contract and input validation
              description: |-
                ## Purpose
                When an upstream team renames a field or sends a string where a number belongs, an unguarded model will often return a confident but meaningless prediction instead of an error. A written request and response schema, enforced at the endpoint, turns those changes into clear rejections that callers can fix, and gives consuming teams something firm to build against.

                ## Milestones
                1. A request and response schema written with types, ranges and required fields.
                2. Validation at the endpoint that rejects bad requests with a readable error.
                3. The model version returned with every response.
                4. Consuming teams sent the contract and a note on how breaking changes will be announced.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The endpoint validates every request against a published schema, rejects invalid input with a clear error and returns the model version."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the request and response schema with field types and allowed ranges"
                - "Add schema validation to the endpoint and return readable error messages"
                - "Include the model version in every response body"
                - "Share the contract with consuming teams and agree a breaking change notice period"
            - name: Dev, staging and production promotion path
              description: |-
                ## Purpose
                Testing a new model by deploying straight to production and watching the dashboards is common and expensive. Separate environments with the same image, configuration held apart from code and a staging stage that receives realistic traffic let a release prove itself before customers see it.

                ## Milestones
                1. Three environments defined, each with its own endpoint, credentials and data access.
                2. The same image promoted through every environment, with only configuration changing.
                3. Staging fed with replayed or sampled production requests.
                4. A written rule for what must pass in staging before promotion.

                ## Notes
                Staging that never sees realistic requests proves only that the container starts. Replaying a day of anonymised production traffic catches far more.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One image moves through dev, staging and production with only configuration changing, and staging runs on realistic requests before each promotion."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Map what exists today for dev, staging and production model environments"
                - "Move environment-specific settings out of code into configuration"
                - "Set up replay of a sampled day of production requests into staging"
                - "Write the pass rule a release must meet in staging"
            - name: Secrets, identities and access for model services
              description: |-
                ## Purpose
                Plenty of model services run with a broad cloud role created during a prototype and never narrowed, which lets a compromised endpoint read far more than its model needs. Giving each service its own identity, with access only to its model artefacts, its logs and the data it scores, limits the damage of a mistake and makes access reviews quick.

                ## Milestones
                1. Every model service running under its own identity, not a shared or personal one.
                2. Permissions trimmed to the artefacts, data and logs each service needs.
                3. Secrets held in a secrets manager, none in images or code.
                4. A list of who can deploy to and call each endpoint.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each model service has a dedicated identity with scoped permissions, no secrets live in images or code, and endpoint access is listed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the identity and permissions each model service runs with today"
                - "Create a dedicated identity per service with only the access it needs"
                - "Search images and repositories for hard-coded keys and move them to the secrets manager"
                - "Review who can deploy to or call each model endpoint @recurring(quarterly)"
            - name: Rollback plan for every production model
              description: |-
                ## Purpose
                Bad model releases are usually found within hours, and the question then is how fast the previous version can be back. A written, rehearsed rollback for each model, naming the last good version, the command or button and how long it takes, turns a stressful incident into a five-minute step.

                ## Milestones
                1. For each model, the last known good version recorded in the registry.
                2. Rollback steps written, including anything outside the model such as schema or config changes.
                3. Each rollback rehearsed in staging, with the time taken noted.
                4. The rollback link added to the model's runbook and alert messages.

                ## Notes
                Rollbacks fail when the new model shipped alongside a changed input schema or feature. Ship those changes so the old model can still run against them, or roll them back together.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every production model has written rollback steps that were rehearsed in staging and completed within an agreed time."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record the last known good version of each model in the registry"
                - "Write rollback steps that cover schema and configuration changes too"
                - "Rehearse each rollback in staging and time it"
                - "Link the rollback steps from the runbook and each alert"
            - name: Weekly model release review
              description: |-
                ## Purpose
                Releases that go out whenever someone is ready are hard to watch and harder to roll back when two land on the same afternoon. A short weekly review of what is ready to ship, what shipped last week and what was rolled back gives the team one place to apply the readiness bar and space releases sensibly.

                ## Milestones
                1. A fixed weekly slot with the release owner and one reviewer.
                2. A standing agenda: candidates, last week's releases, rollbacks and blocked items.
                3. Each candidate checked against the readiness bar before it is scheduled.
                4. Eight consecutive reviews held with decisions recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly release reviews held, each recording which candidates were approved, deferred or rolled back."
                cadence: rolling
              tasks:
                - "Book a thirty-minute weekly release review with the team"
                - "Write the standing agenda and where decisions are recorded"
                - "Review release candidates against the readiness bar and schedule them @recurring(weekly:tue)"
                - "Note each rollback and its cause in the review log"
            - name: Serving health dashboard and alerts
              description: |-
                ## Purpose
                Model endpoints fail in ordinary ways first: latency climbs, error rates spike, a node runs out of memory, a batch job silently writes nothing. A dashboard and a small set of alerts on latency percentiles, error rate, throughput and saturation for each service catch those failures before a consuming team does.

                ## Milestones
                1. One dashboard per model service showing p50 and p99 latency, error rate, requests and resource use.
                2. Alert thresholds set from a week of normal traffic rather than guesses.
                3. Every alert routed to an owner, with a runbook link in the message.
                4. A daily look at the dashboard built into the team's morning routine.

                ## Notes
                Alert on symptoms callers feel, such as latency and errors, before causes such as CPU. Too many alerts teach people to ignore all of them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model service has a latency, error and throughput dashboard with owner-routed alerts, and no outage in a quarter was first reported by a caller."
                cadence: rolling
              tasks:
                - "Build a dashboard for one service with latency percentiles, errors and throughput"
                - "Set alert thresholds from a week of normal traffic"
                - "Check the serving dashboard for overnight errors and latency spikes @recurring(daily)"
                - "Remove or retune any alert that fired without needing action @recurring(monthly:5)"
            - name: On-call rota and runbooks for model endpoints
              description: |-
                ## Purpose
                When a model endpoint fails at night, the person paged is often not the person who built it, and a model service has failure modes general on-call engineers do not expect. A clear rota, a weekly handover and a runbook per service, with symptoms, checks and the rollback step, mean the first responder can act without waking the author.

                ## Milestones
                1. A rota covering model services, with primary and backup each week.
                2. A runbook per service listing common symptoms, checks and the rollback step.
                3. A weekly handover note on open issues and recent releases.
                4. Runbooks reviewed every quarter and after each incident.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A published on-call rota covers all model services, each with a runbook reviewed within the last quarter."
                cadence: rolling
              tasks:
                - "Publish the on-call rota for model services with a backup each week"
                - "Write a one-page runbook for the busiest model service"
                - "Hand over open issues and recent releases to the next on-call engineer @recurring(weekly:mon)"
                - "Review every runbook for stale steps and broken links @recurring(quarterly)"
            - name: Retraining pipeline with an evaluation gate
              description: |-
                ## Purpose
                Retraining by hand, with someone rerunning a notebook every few months, produces models that cannot be compared and releases that skip checks under time pressure. An orchestrated pipeline that pulls a data snapshot, trains, evaluates against the current champion on a fixed holdout and registers the candidate only if it passes makes retraining repeatable and boring.

                ## Milestones
                1. Training expressed as pipeline steps that run without a notebook.
                2. A fixed holdout set and the metrics the candidate must match or beat.
                3. Candidates that fail the gate stopped before registration, with a report.
                4. A monthly review of pipeline runs, failures and blocked candidates.

                ## Notes
                Deciding when a model needs retraining is a monitoring question. This project is about making the retraining itself safe, so a decision to retrain is cheap to act on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Retraining runs end to end without manual steps, and every registered candidate has passed a recorded evaluation against the current production model."
                cadence: rolling
              tasks:
                - "Break the training notebook into data, train, evaluate and register steps"
                - "Freeze a holdout set and write the pass rule against the current model"
                - "Make failed candidates stop before registration and write a short report"
                - "Review last month's pipeline runs, failures and blocked candidates @recurring(monthly:9)"
            - name: Prediction and request logging
              description: |-
                ## Purpose
                When a customer asks why the model scored them a certain way last Tuesday, the answer depends on whether the input, output and model version were logged. Logging a structured record of every prediction, with retention and access rules agreed in advance, makes debugging, audits and later analysis possible without logging personal data you do not need.

                ## Milestones
                1. A log record defined with request id, timestamp, model version, inputs and output.
                2. Personal fields masked or dropped unless there is a written reason to keep them.
                3. A retention period agreed with whoever owns privacy and data protection.
                4. A worked example of tracing one prediction from the log end to end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every prediction is logged with its model version under an agreed retention period, and one past prediction has been traced end to end from the log."
                cadence: rolling
              tasks:
                - "Define the fields each prediction log record must hold"
                - "Agree masking and a retention period with your privacy contact"
                - "Trace one real prediction from request to output using only the logs"
                - "Check log volume, cost and retention are still as agreed @recurring(monthly:14)"
            - name: Base image and dependency patching cycle
              description: |-
                ## Purpose
                Inference images pull in hundreds of packages, and security scanners will keep finding vulnerabilities in them whether or not anyone looks. A monthly cycle that rebuilds images on patched bases, reruns the model smoke tests and redeploys keeps the backlog small and stops patching from becoming a frightening yearly event.

                ## Milestones
                1. An image scanner running on every inference image.
                2. A monthly rebuild on the latest patched base image.
                3. Model smoke tests run against each rebuilt image before it ships.
                4. Critical findings fixed within an agreed number of days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Inference images are rebuilt on a patched base every month, pass smoke tests, and no critical vulnerability is open past the agreed window."
                cadence: rolling
              tasks:
                - "Turn on image scanning for every inference image repository"
                - "Agree how many days a critical finding may stay open"
                - "Rebuild images on the patched base, run smoke tests and redeploy @recurring(monthly:11)"
            - name: Monthly model serving cost review
              description: |-
                ## Purpose
                GPU instances left at peak size, endpoints scaled for a launch that ended months ago and idle staging clusters can quietly cost more than the model earns. Reviewing serving cost each month as cost per thousand predictions, per model, shows where right-sizing, autoscaling or a move to batch would pay off.

                ## Milestones
                1. Serving spend broken down by model, using tags or labels on every resource.
                2. Cost per thousand predictions calculated for each model.
                3. Utilisation checked for each instance type, with idle resources listed.
                4. At least one right-sizing or autoscaling change made and its saving recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly cost per thousand predictions is recorded for each model for six months, with every saving change and its effect logged."
                cadence: rolling
              tasks:
                - "Tag every serving resource with the model it belongs to"
                - "Calculate cost per thousand predictions for each model"
                - "Review serving spend and utilisation and pick one change to make @recurring(monthly:20)"
                - "Record the saving from each change a month after it ships"
            - name: Model incident reviews
              description: |-
                ## Purpose
                Model incidents are often written off as bad luck: a strange input, a slow node, a bad batch. Short blameless reviews of each incident, with a timeline, contributing causes and two or three actions with owners, turn the same failures into fixes and show which parts of the stack keep breaking.

                ## Milestones
                1. A simple incident review format with timeline, impact, causes and actions.
                2. Every incident that affected callers reviewed within a week.
                3. Actions tracked to completion with owners and dates.
                4. A monthly look across incidents for repeated causes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every caller-facing model incident in six months has a written review within a week, with tracked actions."
                cadence: rolling
              tasks:
                - "Create a one-page incident review format for model services"
                - "Ask the agent to draft a timeline from the alert and chat history after each incident"
                - "Hold the review within a week and assign each action an owner"
                - "Look across the month's incidents for repeated causes @recurring(monthly:24)"
            - name: Registry clean-up and endpoint retirement
              description: |-
                ## Purpose
                Registries fill with hundreds of abandoned candidates and endpoints keep running long after the product that called them was switched off. A quarterly pass that archives stale versions, retires uncalled endpoints and records why keeps the registry readable and stops paying for services nobody uses.

                ## Milestones
                1. A rule for how long unpromoted candidates are kept.
                2. Endpoints with no traffic in thirty days listed with their owners.
                3. Retired endpoints shut down only after their owner confirms.
                4. A short retirement note kept for each model taken out of service.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly clean-ups completed in a year, each retiring uncalled endpoints with owner sign-off and a note."
                cadence: cyclic
              tasks:
                - "Write the retention rule for unpromoted registry versions"
                - "List endpoints with no requests in thirty days and contact their owners"
                - "Archive stale versions and retire confirmed unused endpoints @recurring(quarterly)"
            - name: Batch scoring job delivery check
              description: |-
                ## Purpose
                Nightly scoring jobs rarely fail loudly: they finish late, score half the rows or write yesterday's results again, and a sales team acts on stale scores for days. Checking each week that every batch job landed on time with the expected row count catches the quiet failures that alerts miss.

                ## Milestones
                1. A delivery target time and expected row range set for each batch job.
                2. A check that compares each run's rows and finish time against the target.
                3. A weekly look at late or short runs and their causes.
                4. Consumers told within a day when a run is late or wrong.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every batch scoring job has a delivery time and row range, and late or short runs are reported to consumers within one working day."
                cadence: rolling
              tasks:
                - "Set a delivery time and expected row range for each scoring job"
                - "Add an automatic check of row counts and finish times after each run"
                - "Review the week's late or short scoring runs and their causes @recurring(weekly:thu)"
                - "Write a short message template for telling consumers about a bad run"
            - name: Automated tests for model code and pipelines
              description: |-
                ## Purpose
                Model code is often the least tested code in the company, even though a broken preprocessing step can ruin every prediction. Learning which tests pay off, such as unit tests on feature transforms, a load-and-predict smoke test, a schema test and a small regression test on known inputs, gives each release a fast safety net.

                ## Milestones
                1. Unit tests covering every preprocessing and postprocessing function.
                2. A smoke test that loads the packaged model and scores the sample payload.
                3. A regression test on a fixed set of inputs with expected outputs and tolerances.
                4. All tests running in under ten minutes on every pull request.

                ## Notes
                Compare outputs with a tolerance rather than exact equality; different hardware and library versions can shift results slightly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Each model repository runs unit, smoke and regression tests on every pull request in under ten minutes."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write unit tests for the preprocessing functions of one model"
                - "Add a smoke test that loads the package and scores the sample input"
                - "Build a regression set of fifty known inputs with expected outputs"
                - "Run the full suite on every pull request and record the run time"
            - name: Kubernetes fundamentals for model serving
              description: |-
                ## Purpose
                Many model platforms sit on Kubernetes, and engineers who cannot read a deployment file or a pod's events are stuck waiting for someone else during incidents. Learning the core objects, resource requests and limits, health probes and autoscaling, by deploying one real model to a practice cluster, makes serving problems readable.

                ## Milestones
                1. A practice cluster running locally or in a sandbox account.
                2. One packaged model deployed with requests, limits and readiness and liveness probes.
                3. Horizontal autoscaling demonstrated under generated load.
                4. A one-page cheat sheet of the commands used to debug a failing pod.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One model has been deployed to a practice cluster with probes and autoscaling, and a debugging cheat sheet is written."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Start a local practice cluster and deploy a hello world service"
                - "Deploy one packaged model with resource limits and health probes"
                - "Generate load and watch the autoscaler add replicas"
                - "Write a cheat sheet for logs, events and describe commands"
            - name: Model server frameworks comparison
              description: |-
                ## Purpose
                Wrapping a model in a general web framework is quick, while dedicated model servers add batching, multi-model hosting and standard health endpoints at the price of more to learn. Serving the same model three ways and measuring latency, throughput and effort gives the team evidence for a default instead of habit.

                ## Milestones
                1. Three serving options chosen, for example a plain web framework and two dedicated model servers.
                2. The same model served by each, on the same hardware.
                3. Latency, throughput, memory and set-up effort recorded in one table.
                4. A default serving option chosen, with the cases where it does not apply.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison table of three serving options on one model and hardware is written, with a chosen default and its exceptions."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose three serving options to compare and one representative model"
                - "Serve the model with each option on identical hardware"
                - "Measure latency, throughput and memory at the same request rate"
                - "Write up the default choice and when to use something else"
            - name: Load testing a model endpoint
              description: |-
                ## Purpose
                Most endpoints have never been pushed past normal traffic, so nobody knows where latency breaks or what fails first. A planned load test with realistic payloads, stepped request rates and a written breaking point tells you the capacity you really have and the autoscaling settings you need.

                ## Milestones
                1. Realistic request payloads sampled from production logs.
                2. A stepped load test run against a staging copy of the endpoint.
                3. The request rate at which p99 latency or errors cross your target recorded.
                4. Autoscaling and instance settings adjusted from the results.

                ## Notes
                Random synthetic inputs can be far cheaper or far costlier to score than real ones. Sample payloads from production so the test means something.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A load test report states the request rate at which the endpoint misses its latency or error target, with resulting setting changes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sample two hundred realistic payloads from production request logs"
                - "Script a stepped load test that raises the request rate every few minutes"
                - "Run the test against staging and record where latency or errors break"
                - "Adjust autoscaling limits and instance size from the findings"
            - name: Infrastructure as code for ML resources
              description: |-
                ## Purpose
                Endpoints, buckets, registries and GPU node pools created by clicking in a console cannot be reviewed, copied to a new region or rebuilt after a mistake. Describing model infrastructure in code, reviewed like any other change, means staging matches production and a lost environment can be rebuilt in an afternoon.

                ## Milestones
                1. One infrastructure as code tool chosen and a repository created for ML resources.
                2. Existing endpoints, storage and node pools imported or recreated in code.
                3. Changes applied only through reviewed pull requests.
                4. Staging rebuilt from scratch using the code alone.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "All model serving infrastructure is defined in reviewed code, and staging has been rebuilt from that code without console changes."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every ML resource currently created by hand in the console"
                - "Write code for the staging endpoint and its storage first"
                - "Import the production resources into code and check for differences"
                - "Tear down and rebuild staging from code to prove it works"
            - name: Model compression for faster inference
              description: |-
                ## Purpose
                A model that is accurate but too slow or too large for its hardware budget is not finished. Learning the main techniques, such as quantisation, pruning, distillation and conversion to an optimised runtime format, and measuring each on accuracy and latency, gives you options before buying bigger machines.

                ## Milestones
                1. A baseline of accuracy, latency and memory for one production model.
                2. At least two compression or conversion techniques applied to it.
                3. Accuracy loss and speed gain recorded for each in one table.
                4. A decision on whether any compressed version should replace the original.

                ## Notes
                Check accuracy on the slices that matter most, not only the overall figure. Compression can hurt rare classes far more than the average suggests.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two compression techniques have been measured on a production model for accuracy, latency and memory, with a recorded adopt or reject decision."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Record baseline accuracy, latency and memory for one model"
                - "Convert the model to an optimised runtime format and remeasure"
                - "Try post-training quantisation and compare accuracy by key slice"
                - "Write up whether either version should go to production"
            - name: Experiment tracking linked to registered models
              description: |-
                ## Purpose
                Months after release, someone will ask which hyperparameters, code commit and data produced the model now live, and a folder of notebooks rarely answers. Logging every training run with parameters, metrics, commit and data reference, and linking the registered version back to its run, closes that gap for good.

                ## Milestones
                1. A tracking server or service that every training job writes to.
                2. Each run logging parameters, metrics, code commit and data snapshot reference.
                3. Registered model versions linked to the run that produced them.
                4. The live model's full training history found from the registry in under five minutes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every registered model version links to a tracked run with parameters, metrics, commit and data reference."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set up experiment tracking that training jobs can reach"
                - "Add logging of parameters, metrics, commit and data snapshot to the training code"
                - "Link each registered version to its training run"
                - "Time how long it takes to trace the live model back to its run"
            - name: CI and CD pipeline for model releases
              description: |-
                ## Purpose
                Manual releases depend on one person remembering a dozen steps in the right order, which is why they go wrong on Friday afternoons. A pipeline that tests the code, builds the image, pulls the registered model, deploys to staging, runs checks and waits for approval before production makes every release the same release.

                ## Milestones
                1. A pipeline triggered by merges and by a model moving to the staging stage.
                2. Tests, image build and staging deployment running without manual steps.
                3. Smoke and contract tests run against staging automatically.
                4. Production deployment gated on a named approver and recorded.

                ## Notes
                Trigger on both code changes and new registered model versions. Many teams automate only one, so a retrained model still ships by hand.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Model releases run through an automated pipeline from merge or registration to production, with approval recorded and no manual deployment steps."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down every manual step in the current release process"
                - "Automate testing, image build and staging deployment"
                - "Add automatic smoke and contract tests against staging"
                - "Gate production deployment on an approval step that is logged"
            - name: Managed ML platform or self-hosted stack decision
              description: |-
                ## Purpose
                Cloud ML platforms bundle training, registry and serving with less to run but more lock-in and per-prediction pricing, while a self-hosted stack on open-source tools gives control at the cost of the team's time. Choosing deliberately, with your models, skills and budget written down, avoids a migration two years later.

                ## Milestones
                1. Requirements written: model types, traffic, latency, compliance and team skills.
                2. Two or three options shortlisted, including at least one managed and one self-hosted.
                3. Each option scored on cost at current and three times current traffic, effort and exit cost.
                4. A decision recorded with the review date and what would change it.

                ## Notes
                Start from the **Purchase decision** template. Count the engineering hours to run a self-hosted stack as a real cost, and price the exit, not just the entry.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A platform decision is recorded with scored options, cost at two traffic levels, exit cost and a review date."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the requirements your platform must meet in one page"
                - "Shortlist two or three managed and self-hosted options"
                - "Estimate cost at today's traffic and at three times today's"
                - "Record the decision, the runner-up and the review date"
            - name: Refactoring a notebook model into a pipeline
              description: |-
                ## Purpose
                The first production model at many companies is a notebook run by hand, with cells executed in an order only its author knows. Moving that logic into modules, a configuration file and pipeline steps that run end to end from a clean checkout is usually the single biggest reliability gain a young ML team can make.

                ## Milestones
                1. Notebook logic split into data, feature, training and evaluation modules.
                2. Hard-coded paths and parameters moved into one configuration file.
                3. The pipeline run end to end from a clean checkout and matching the notebook's metrics.
                4. The notebook kept only for exploration and marked as such.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model trains from a clean checkout through pipeline steps and reproduces the notebook's evaluation metrics within tolerance."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Run the notebook top to bottom and record the metrics it produces"
                - "Move data loading and preprocessing into a tested module"
                - "Pull paths and parameters into a single configuration file"
                - "Run the full pipeline from a clean checkout and compare the metrics"
            - name: Shadow deployment for a replacement model
              description: |-
                ## Purpose
                Offline metrics on a holdout set do not show how a new model behaves on live traffic, edge cases and real latency. Running the candidate in shadow, receiving a copy of production requests while the current model still answers, shows disagreements, errors and speed before any caller is affected.

                ## Milestones
                1. The candidate deployed beside the current model, receiving mirrored requests.
                2. Both models' outputs logged against the same request id.
                3. Disagreement rate, error rate and latency compared over at least a week.
                4. A promote, fix or abandon decision recorded with the evidence.

                ## Notes
                Make sure the shadow model cannot trigger side effects such as emails, stock holds or price changes; it should only log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A candidate model has run in shadow on mirrored traffic for a week, and a promotion decision is recorded with comparison figures."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Set up request mirroring from the live endpoint to a shadow deployment"
                - "Log both outputs against the same request id"
                - "Compare disagreement rate, errors and latency after one week"
                - "Record the promote, fix or abandon decision and why"
            - name: Canary releases with automatic rollback
              description: |-
                ## Purpose
                Switching all traffic to a new model at once turns any mistake into a full outage. Sending a small share of traffic to the new version first, watching error and latency guardrails, and rolling back automatically when they are breached limits the blast radius of a bad release to a few minutes and a few per cent of requests.

                ## Milestones
                1. Traffic splitting in place so a version can receive a set percentage of requests.
                2. Guardrail metrics and thresholds written for the canary stage.
                3. Automatic rollback triggered when a guardrail is breached.
                4. Three releases shipped through the canary process without manual intervention.

                ## Notes
                Start the canary at a share large enough to see errors within minutes. One request in a thousand may never show a problem until the full rollout.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three model releases have gone through a canary stage with written guardrails, and one rollback has been triggered automatically in a test."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Enable weighted traffic splitting between two model versions"
                - "Write the guardrail metrics and thresholds for the canary stage"
                - "Wire a guardrail breach to an automatic rollback"
                - "Force a breach in staging to prove the rollback fires"
            - name: Cutting p99 latency and cold starts
              description: |-
                ## Purpose
                Averages look fine while the slowest one per cent of requests time out in a checkout or a fraud check. Profiling where time goes, from network and deserialisation to preprocessing, model execution and cold starts after scale-up, usually finds two or three fixes that bring the tail within target without new hardware.

                ## Milestones
                1. A latency breakdown by stage for one endpoint under realistic load.
                2. Cold start time measured and its share of slow requests known.
                3. Two or three targeted fixes made, such as warm pools, request batching or lighter preprocessing.
                4. p99 latency remeasured and within the agreed target.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "p99 latency for the chosen endpoint is within its agreed target, with before and after measurements recorded for each fix."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Add timing for each stage of a request in one endpoint"
                - "Measure cold start time after a scale-up event"
                - "Pick the two largest contributors to tail latency and fix them"
                - "Remeasure p99 latency under the same load and record the change"
            - name: Fallback behaviour when a model is unavailable
              description: |-
                ## Purpose
                Every model endpoint will be down or slow at some point, and the calling product needs to know what to do in that second. Agreeing a fallback with each consumer, such as a cached score, a simple rule, a default or a clear error, and testing it, means an outage degrades the product rather than breaking it.

                ## Milestones
                1. A fallback agreed with each consuming team and written in the API contract.
                2. Timeouts set on the caller side so a slow model cannot hang the product.
                3. The fallback path tested by switching the model off in staging.
                4. Fallback use counted and shown on the serving dashboard.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each consuming system has an agreed and tested fallback with timeouts, and fallback use is visible on the dashboard."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each consuming team what should happen if the model does not answer"
                - "Write the agreed fallback and timeout into the API contract"
                - "Switch the model off in staging and check every fallback works"
                - "Add a fallback counter to the serving dashboard"
            - name: Model promotion approval and sign-off
              description: |-
                ## Purpose
                If anyone with deploy rights can push a model to production, nobody can later say who decided it was good enough. A light sign-off, naming who approves which kind of model and what evidence they see, keeps releases fast for low-risk models and deliberate for models that price, approve or reject people.

                ## Milestones
                1. Models grouped into risk tiers by what their decisions affect.
                2. An approver and required evidence named for each tier.
                3. Approval captured in the pipeline or registry, not in chat.
                4. One release per tier taken through the process and timed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each production model has a risk tier with a named approver, and every promotion in the last quarter has a recorded approval."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sort production models into two or three risk tiers"
                - "Name an approver and the evidence pack for each tier"
                - "Make the pipeline or registry record each approval"
                - "Run one release per tier through sign-off and note how long it took"
            - name: Go-live of a first production model
              description: |-
                ## Purpose
                A first model launch carries more unknowns than any later release: new infrastructure, new on-call duties and a consuming team watching closely. Treating go-live as a dated event with a checklist, a launch window, a named decision maker and a rollback rehearsed the day before keeps it calm.

                ## Milestones
                1. A launch date agreed with the consuming team and a quiet launch window chosen.
                2. The readiness checklist completed with evidence for every item.
                3. Rollback rehearsed in staging the day before launch.
                4. A post-launch check at one day and one week, with findings written up.

                ## Notes
                Start from the **Operational checklist** template. Avoid launching late in the week; leave working days to watch it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The model went live on the planned date with a completed checklist, a rehearsed rollback and written one-day and one-week checks."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree the launch date and window with the consuming team"
                - "Build the go-live checklist from the operational checklist template"
                - "Rehearse the rollback in staging the day before launch"
                - "Write up the one-day and one-week post-launch checks"
            - name: Rollback and failover game day
              description: |-
                ## Purpose
                Rollback steps and failover settings decay quietly as infrastructure changes, and the first real test is usually a live incident. A planned game day each quarter, where the team breaks a model service in staging on purpose and recovers it against the clock, finds broken runbooks while the stakes are low.

                ## Milestones
                1. A scenario list: bad release, node loss, registry outage, dependency timeout.
                2. One scenario run each quarter in staging with a timekeeper.
                3. Recovery time and every runbook gap recorded.
                4. Fixes from each game day completed before the next.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Four game days held in a year, each recording recovery time and runbook gaps, with fixes done before the following session."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Write four failure scenarios for model services"
                - "Run a staged failure, time the recovery and note runbook gaps @recurring(quarterly)"
                - "Assign owners to each gap found and check them before the next session"
            - name: Peak traffic readiness for a model endpoint
              description: |-
                ## Purpose
                Seasonal sales, a marketing launch or a partner integration can multiply requests to a model overnight, and GPU capacity is not always available on demand. Preparing for a known peak with a traffic forecast, a load test above it, reserved capacity and a change freeze turns the busiest day into an ordinary one.

                ## Milestones
                1. A peak request forecast agreed with the team running the event.
                2. A load test passed at one and a half times the forecast.
                3. Capacity reserved or quotas raised where autoscaling cannot be trusted.
                4. A release freeze and an on-call plan for the peak window.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The endpoint passed a load test at one and a half times the forecast peak and served the event within its latency target."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Get a peak request forecast from the team running the event"
                - "Load test the endpoint at one and a half times that forecast"
                - "Raise quotas or reserve capacity where scaling is uncertain"
                - "Announce a release freeze and the on-call plan for the peak"
            - name: Framework and runtime major version upgrade
              description: |-
                ## Purpose
                Language runtimes and deep learning frameworks reach end of support, and models stuck on old versions eventually cannot be patched or even installed. Planning a major upgrade as a project, with an inventory of affected models, regression tests and a staged rollout, avoids being forced into it by a security finding.

                ## Milestones
                1. Every model listed with its runtime and framework versions and their end of support dates.
                2. The target versions chosen and tested on one model first.
                3. Regression tests passed for each model on the new versions.
                4. All models moved, with old images retired.

                ## Notes
                Re-export saved models in the new framework's format where it is supported. Old serialisation formats are a common blocker.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every production model runs on supported runtime and framework versions, with regression tests passed before each move."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List each model's runtime and framework versions with end of support dates"
                - "Upgrade one low-risk model first and run its regression tests"
                - "Schedule the remaining models in order of support end date"
                - "Check runtime and framework support dates for every model @recurring(yearly)"
            - name: Customer security review of the ML stack
              description: |-
                ## Purpose
                Enterprise customers increasingly send security questionnaires asking where model inputs are stored, who can see predictions and whether their data trains shared models. Answering from a prepared pack of diagrams, data flows and policies saves weeks of back and forth and keeps answers consistent between sales teams.

                ## Milestones
                1. A data flow diagram showing where inputs, predictions and logs go.
                2. Written answers on retention, access, encryption and training data use.
                3. A reusable answer bank reviewed by security and legal contacts.
                4. The pack refreshed after any significant architecture change.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A reviewed security pack with a data flow diagram and an answer bank is used for at least one customer questionnaire."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draw the data flow for inputs, predictions and logs"
                - "Ask the agent to draft answers to a past questionnaire from your architecture notes"
                - "Have security and legal contacts review the answer bank"
                - "Refresh the pack against the current architecture @recurring(yearly)"
            - name: Minimum viable MLOps for a solo ML engineer
              description: |-
                ## Purpose
                A lone ML engineer at a startup cannot build a platform, but can avoid the handful of mistakes that cause most pain later. A deliberately small stack, one registry, one packaged format, one container, a basic pipeline and a rollback that works, gets the first models live safely in weeks without months of infrastructure work.

                ## Milestones
                1. A one-page stack choice with no more than five tools.
                2. The first model packaged, registered and served from a container.
                3. A simple pipeline that tests and deploys on merge.
                4. Rollback and basic latency and error alerts in place.

                ## Notes
                Prefer managed services you do not have to run at night. The goal is boring, not impressive; add tools only when a real problem demands them.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The first model is served from a registered, containerised version through an automated deploy with working rollback and alerts."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Write a one-page stack choice limited to five tools"
                - "Package, register and containerise the first model"
                - "Set up a pipeline that tests and deploys on merge"
                - "Add a rollback command and alerts for errors and latency"
            - name: Data science to engineering model handoff pack
              description: |-
                ## Purpose
                Handoffs between the data scientist who built a model and the engineers who will run it often amount to a notebook link and a meeting, and the crucial details are lost. A standard handoff pack, with the package, its expected inputs, known weaknesses, evaluation results and who to ask, means engineering can deploy it without reverse-engineering it.

                ## Milestones
                1. A handoff pack template agreed by data science and engineering.
                2. The model's intended use, limitations and failure cases written plainly.
                3. Packaged artefact, sample payloads and evaluation results attached.
                4. A handoff session held and open questions closed within a week.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A completed handoff pack is accepted by engineering for the next model, with all open questions closed within a week."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the handoff pack sections with the engineering lead"
                - "Ask the agent to draft the limitations section from the evaluation notes"
                - "Attach the package, sample payloads and evaluation results"
                - "Hold the handoff session and record every open question"
            - name: Taking over an undocumented production model
              description: |-
                ## Purpose
                Inheriting a model whose author has left, with no tests, no registry entry and a training script that no longer runs, is one of the most common MLOps situations. Stabilising it first, by capturing the running artefact, its environment and its inputs, then fixing the worst gaps in order, avoids breaking something nobody fully understands.

                ## Milestones
                1. The running artefact, image and configuration copied and versioned.
                2. Inputs, outputs and consumers documented from logs and code.
                3. A ranked list of gaps against the readiness bar.
                4. The top three gaps closed and a rollback to the captured version tested.

                ## Notes
                Start from the **Remediation plan** template. Do not retrain or refactor until the current version is captured and can be restored.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The inherited model is captured, documented and restorable, with its three biggest readiness gaps closed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Copy the running model file, image and configuration into versioned storage"
                - "Document inputs, outputs and consumers from logs and calling code"
                - "Score the model against the readiness bar and rank the gaps"
                - "Close the three biggest gaps and test a restore of the captured version"
            - name: Internal ML platform roadmap
              description: |-
                ## Purpose
                Platform teams serving many data scientists can easily build what is interesting rather than what removes the most friction. A roadmap built from a survey of model teams, time from trained model to production and the top support requests, reviewed every quarter, keeps the platform pointed at real bottlenecks.

                ## Milestones
                1. Time from registered model to production measured for the last ten releases.
                2. A short survey of model teams on their biggest blockers.
                3. A ranked roadmap of no more than five themes for the next two quarters.
                4. Quarterly roadmap reviews held with the model teams.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A roadmap of five themes or fewer, grounded in release lead time and a team survey, is reviewed with model teams each quarter."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Measure lead time from registration to production for the last ten releases"
                - "Survey model teams on their three biggest deployment blockers"
                - "Rank roadmap themes by time saved across teams"
                - "Review the roadmap with model team leads @recurring(quarterly)"
            - name: First 90 days as an MLOps engineer
              description: |-
                ## Purpose
                Joining as the person responsible for model deployment means learning a stack, a set of models and several teams' expectations at once. A 30, 60 and 90 day plan that starts with listening and the model inventory, then ships one visible fix, then proposes a roadmap, earns trust before asking anyone to change how they work.

                ## Milestones
                1. By day 30, every production model and its owner met or understood.
                2. By day 60, one reliability fix shipped that teams noticed.
                3. By day 90, a written assessment and a proposed six-month plan.
                4. The plan reviewed with your manager and the main model teams.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written 90-day assessment and six-month plan are reviewed with your manager, with one shipped reliability fix behind them."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Set up a 30/60/90 plan from the onboarding template"
                - "Meet the owner of each production model in the first month"
                - "Pick one reliability fix you can ship by day 60"
                - "Write the day 90 assessment and proposed plan"
            - name: Deployment evidence for models in regulated settings
              description: |-
                ## Purpose
                In lending, insurance, healthcare and similar fields, regulators and internal model risk teams expect to see who approved a model, what it was tested on and what changed between versions. Keeping that evidence as a by-product of the release process, rather than assembling it before an audit, saves weeks and reduces findings.

                ## Milestones
                1. The evidence your compliance or model risk team requires listed per release.
                2. Each item produced automatically by the pipeline or registry where possible.
                3. A change record kept for every production model version.
                4. A quarterly check that evidence is complete for every release.

                ## Notes
                Start from the **Risk register** template. Ask your compliance or model risk team what they need; requirements differ by country and sector, so do not assume.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every production model release in the last two quarters has a complete evidence set agreed with the compliance or model risk team."
                cadence: rolling
              tasks:
                - "Ask the compliance or model risk team for their required release evidence"
                - "Map each evidence item to the pipeline step or registry field that produces it"
                - "Keep a change record for every production model version"
                - "Check evidence is complete for every release in the quarter @recurring(quarterly)"
            - name: Multi-model serving on shared infrastructure
              description: |-
                ## Purpose
                Once a team has dozens of small models, one container per model wastes memory and money while most sit idle. Hosting many models on shared servers with dynamic loading, per-model routing and isolation rules can cut serving cost sharply, as long as noisy neighbours and memory limits are handled.

                ## Milestones
                1. Candidate models grouped by framework, size and traffic.
                2. A shared server hosting a group of models with per-model routes.
                3. Memory limits, loading and eviction rules set and tested.
                4. Cost and latency compared with one container per model.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A group of models runs on shared serving with per-model routing, and cost and latency are compared against dedicated containers."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Group candidate models by framework, size and traffic"
                - "Deploy one group to a shared multi-model server"
                - "Set memory limits and test loading and eviction under load"
                - "Compare cost and latency with the dedicated container set-up"
            - name: Edge and on-device model deployment
              description: |-
                ## Purpose
                Models that run on phones, cameras, tills or factory equipment face limits a cloud endpoint never meets: small memory, intermittent connectivity and devices that update when they feel like it. Planning the conversion, size budget, staged update and on-device version reporting keeps a fleet of devices on known model versions.

                ## Milestones
                1. A size, memory and latency budget agreed for the target device.
                2. The model converted to an edge runtime and accuracy checked after conversion.
                3. Updates shipped in stages, with a way to hold or revert a bad version.
                4. Devices reporting which model version they run.

                ## Notes
                Devices that are offline for weeks will run old versions; design the server side to accept results from any version still in the field.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A model runs on the target device within its budget, updates roll out in stages, and fleet version reporting is live."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree the size, memory and latency budget for the device"
                - "Convert the model to an edge runtime and recheck accuracy"
                - "Design a staged update with hold and revert options"
                - "Add model version reporting from each device"
            - name: Self-hosting large language model inference
              description: |-
                ## Purpose
                Running an open-weight language model on your own GPUs brings new deployment problems: memory for long contexts, request batching, token streaming and very uneven request costs. Setting up a dedicated inference server with sensible batching, quantisation where acceptable and token-level metrics shows whether self-hosting beats an API on cost and latency for your traffic.

                ## Milestones
                1. A model size and GPU type chosen to fit expected context length and traffic.
                2. An inference server running with continuous batching and streaming responses.
                3. Tokens per second, time to first token and cost per million tokens measured.
                4. A self-host or API decision recorded with the figures.

                ## Notes
                Check the model's licence for commercial use before deploying. Measuring answer quality is a separate evaluation task; this project covers serving.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A self-hosted language model serves streaming responses with measured time to first token, throughput and cost, and a host or API decision is recorded."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Estimate GPU memory needed for the model at your context length"
                - "Deploy a dedicated inference server with batching and streaming"
                - "Measure time to first token, tokens per second and cost per million tokens"
                - "Compare the figures with an API provider and record the decision"
            - name: Model artefact supply chain security
              description: |-
                ## Purpose
                Pretrained weights can carry executable code, and many common serialisation formats run arbitrary code when loaded, so a downloaded pretrained model is as risky as an unknown binary. Scanning artefacts, preferring safe formats, signing what you build and recording provenance protects the serving stack from a poisoned or tampered model.

                ## Milestones
                1. Every external pretrained model recorded with its source, licence and checksum.
                2. Unsafe serialisation formats replaced by safer ones where possible.
                3. Built artefacts signed and signatures checked before deployment.
                4. A monthly scan of registry artefacts and their dependencies.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Deployments accept only signed artefacts, every external model has recorded provenance, and registry scans run each month."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every external pretrained model with source, licence and checksum"
                - "Convert models stored in unsafe formats to safer serialisation"
                - "Sign built artefacts and verify signatures in the deployment pipeline"
                - "Scan registry artefacts and their dependencies for known issues @recurring(monthly:17)"
---

# ML Model Deployment (MLOps)

This area is for the engineers and small teams who take machine learning models out of notebooks and keep them running in production: batch scoring jobs, online endpoints and the pipelines between them. It starts with foundations (a model inventory, a readiness bar, a registry, packaging, an API contract, environments and a rollback plan), moves through the operating routines that keep serving healthy, the skills worth learning properly and the improvements that make releases safer, then covers dated events such as a first go-live and a framework upgrade, team situations from the solo startup engineer to the platform team, and specialist work like edge deployment and self-hosted language model inference.

The rhythms are a daily serving health check, a weekly release review, on-call handover and batch delivery check, monthly patching, cost, logging, incident and retraining pipeline reviews, and quarterly access, registry clean-up, game day and roadmap reviews. The Operational checklist, Purchase decision, Remediation plan, Onboarding 30/60/90 and Risk register templates pair with individual projects. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
