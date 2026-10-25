---
id: software-engineering.chaos-engineering-resilience
name: Chaos Engineering & Resilience
description: "Safe, hypothesis-driven failure experiments, from a first pod kill in staging to game days, failover drills and continuous chaos in production, with findings tracked until the fix is proven."
category: business
version: 1.0.0
tags: [software-engineering, chaos-engineering-resilience, engineer, enterprise, fault-injection, game-days, disaster-recovery, resilience-patterns]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - purchase-decision
    - remediation-plan
    - metrics-log
    - reading-queue
    - meeting-notes
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Chaos Engineering & Resilience
          description: "Deliberately injecting failures in controlled experiments to prove systems degrade gracefully and recover without human heroics."
          projects:
            - name: Resilience risk inventory for one critical service
              description: |-
                ## Purpose
                Chaos experiments chosen at random find random things, while experiments chosen from a list of known risks find the outages you were going to have anyway. Listing every way one critical service could fail, from a dependency timing out to a zone disappearing, and scoring each by likelihood and impact gives the whole programme a ranked starting point. Pick the service whose outage would hurt most and finish this before choosing any tool.

                ## Milestones
                1. At least fifteen failure scenarios listed for the service, covering infrastructure, dependencies, data and human error.
                2. Each scenario scored for likelihood, customer impact and current detection.
                3. The five highest-scoring scenarios marked as first experiment candidates.
                4. The inventory stored beside the service's runbooks with an owner and a review date.

                ## Notes
                Start from the **Risk register** template. Past incident reports and the on-call channel are the richest source of real scenarios.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A scored inventory of at least fifteen failure scenarios for one critical service, with five marked as experiment candidates, is stored with its runbooks."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the one service whose outage would cost the business most"
                - "Pull the last year of incident reports that touched this service"
                - "List failure scenarios by layer and score likelihood and impact"
                - "Mark the top five scenarios as first experiment candidates"
            - name: Steady-state metrics for the first experiment
              description: |-
                ## Purpose
                An experiment can only prove something if you know what normal looks like before you break anything. Choosing two or three business-level signals, such as orders per minute or successful sign-ins, plus their usual range by hour of day, gives every later experiment a clear pass or fail line. Without this, teams argue afterwards about whether a wobble on a dashboard mattered.

                ## Milestones
                1. Two or three steady-state signals chosen that reflect what users experience, not CPU or memory.
                2. A normal range recorded for each signal across a typical week, including the quiet and busy hours.
                3. A single dashboard showing all steady-state signals on one screen.
                4. A written threshold for each signal beyond which an experiment counts as failed.

                ## Notes
                Prefer throughput and success rate over latency percentiles for a first experiment; they are easier to read live.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A steady-state dashboard with two or three user-level signals and a written failure threshold for each is in place for the target service."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the product owner which number they would check first during an outage"
                - "Export a week of that signal and note its range by hour"
                - "Build one dashboard showing every steady-state signal together"
                - "Write the failure threshold for each signal on the dashboard itself"
            - name: Chaos experiment safety charter and stop rules
              description: |-
                ## Purpose
                Nothing ends a chaos programme faster than an experiment that causes a real outage nobody approved. A one-page charter stating who may run experiments, where, at what times, how they are announced and exactly when they are halted protects customers and the programme's reputation together. Write it before the first experiment, not after the first scare.

                ## Milestones
                1. A charter naming the environments, hours and services where experiments are allowed.
                2. Explicit stop rules tied to the steady-state thresholds, with a named person empowered to halt.
                3. A tested rollback or kill switch for every fault type the charter permits.
                4. The charter signed off by the service owner and the on-call lead.

                ## Notes
                Exclude change freezes, peak trading days and active incidents by default. A paused programme is better than a blamed one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed safety charter with environments, hours, stop rules and a tested kill switch for each fault type is published to the team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the allowed environments, hours and excluded dates on one page"
                - "Write stop rules that reference the steady-state thresholds"
                - "Test the halt mechanism for each fault type you plan to inject"
                - "Get sign-off from the service owner and the on-call lead"
            - name: Experiment hypothesis and record format
              description: |-
                ## Purpose
                Experiments written up in chat threads are forgotten within a month, and the same weakness gets rediscovered a year later. A fixed record format with a hypothesis, steady state, fault, blast radius, abort conditions, observations and findings makes every experiment comparable and searchable. Agree it once so the team stops reinventing the write-up.

                ## Milestones
                1. A record format with at least eight fields agreed by the team.
                2. A worked example filled in for a hypothetical dependency timeout.
                3. A single searchable place where every record will live.
                4. The format linked from the safety charter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An agreed experiment record format with a worked example is stored in a searchable location and linked from the safety charter."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the fields every experiment record must contain"
                - "Fill in a worked example for a slow downstream dependency"
                - "Choose the repository folder or wiki space for all records"
                - "Link the format from the safety charter"
            - name: Choosing a fault injection tool
              description: |-
                ## Purpose
                Fault injection tools range from a shell script that kills processes to managed platforms with scheduling, blast radius controls and audit logs, and the wrong choice either cannot reach your stack or is too heavy to adopt. Comparing three options against your platform, your safety needs and your budget leads to a tool the team will actually use. Decide before the experiment backlog grows, because the tool shapes what experiments are cheap.

                ## Milestones
                1. Requirements written: target platforms, fault types, halt controls, audit trail and cost ceiling.
                2. Three tools shortlisted, at least one open source and one managed.
                3. Each tool trialled on one harmless experiment in a sandbox.
                4. A decision recorded with the reasons and the rejected options.

                ## Notes
                Start from the **Purchase decision** template. A tool without a reliable stop button fails the requirements, whatever else it offers.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tool decision comparing three trialled options against written requirements, including halt controls and cost."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the requirements list including halt controls and audit logging"
                - "Shortlist one open source, one cloud native and one managed option"
                - "Run the same harmless process kill with each tool in a sandbox"
                - "Record the decision and the reasons the others were rejected"
            - name: Dependency failure mode map
              description: |-
                ## Purpose
                Most outages start in something you call rather than something you wrote: a database, a cache, an identity provider, a payment gateway. Mapping every dependency of the target service with what happens when it is slow, down or returning errors exposes the ones with no timeout, no fallback and no alert. The map becomes the backlog for half the experiments in this area.

                ## Milestones
                1. Every synchronous and asynchronous dependency of the service listed, including third parties.
                2. Configured timeout, retry policy and fallback recorded for each.
                3. Expected user impact written for slow, failing and unavailable modes.
                4. Dependencies with no timeout or no fallback flagged in red.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dependency map listing timeout, retry, fallback and expected impact for every dependency, with gaps flagged, is stored with the service."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the service's outbound calls from traces or configuration"
                - "Record the timeout and retry settings actually in the code for each"
                - "Write the expected user impact if each dependency is slow or down"
                - "Flag every dependency that has no timeout or no fallback"
            - name: Staging environment fit for chaos experiments
              description: |-
                ## Purpose
                Staging with one replica, no traffic and a shared database cannot tell you how production behaves when a node dies. Checking that staging has the same topology, realistic synthetic traffic and working dashboards turns early experiments from theatre into evidence. Where staging cannot match, write the gaps down so nobody over-trusts a staging pass.

                ## Milestones
                1. Staging compared with production on replica counts, zones, autoscaling and dependency versions.
                2. Synthetic traffic running in staging that exercises the critical user flows.
                3. Steady-state dashboards working against staging data.
                4. A written list of known differences and what each means for results.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Staging runs synthetic traffic with working steady-state dashboards, and a written gap list against production exists."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compare replica counts and zone spread between staging and production"
                - "Set up a synthetic traffic job covering the top three user flows"
                - "Point the steady-state dashboard at staging and confirm it moves"
                - "Write the list of staging differences that limit what results prove"
            - name: First pod termination experiment in staging
              description: |-
                ## Purpose
                Killing one instance of a service is the hello world of chaos engineering, and it still finds problems: missing readiness checks, sticky sessions, slow cold starts and alerts that never fire. Running it carefully in staging, with a hypothesis and a written record, proves the tool, the dashboards and the stop rules all work before anything harder is tried.

                ## Milestones
                1. A written hypothesis predicting how steady state behaves when one instance is terminated.
                2. The experiment run in staging with the halt mechanism ready.
                3. Observations recorded against the hypothesis, including recovery time.
                4. Any finding filed as a ticket with an owner.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A completed experiment record for a single-instance termination in staging, with recovery time measured and findings ticketed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the hypothesis for losing one instance in the record format"
                - "Announce the experiment window in the team channel"
                - "Terminate one instance and time how long steady state takes to recover"
                - "File each surprise as a ticket and link it from the record"
            - name: Stakeholder briefing before the first experiment
              description: |-
                ## Purpose
                Support, product and the on-call engineer from a neighbouring team will all notice if something wobbles, and finding out afterwards that it was deliberate feels like a betrayal. A short briefing explaining why the team is breaking things, what the safety rules are and how people will be told in advance earns permission instead of tolerance.

                ## Milestones
                1. A one-page explainer covering the purpose, the safety charter and the announcement process.
                2. A 20-minute briefing held with support, product and neighbouring on-call leads.
                3. Questions and objections captured with an answer for each.
                4. An announcement channel or calendar agreed for all future experiments.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A briefing has been held with support, product and neighbouring on-call leads, and an announcement channel for experiments is agreed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a one-page explainer from the safety charter"
                - "Invite support, product and neighbouring on-call leads to 20 minutes"
                - "Record each objection and the answer given"
                - "Create the shared experiment calendar or announcement channel"
            - name: Monthly game day rhythm
              description: |-
                ## Purpose
                Teams that only run game days after a bad quarter treat them as punishment, while teams that run them every month treat them as practice. A fixed monthly slot with a rotating facilitator, a pre-written scenario and a 30-minute debrief keeps resilience work visible and keeps response skills fresh. Two hours a month is enough to find something real most times.

                ## Milestones
                1. A recurring two-hour slot booked on the team calendar.
                2. A rota of facilitators so no single person owns every session.
                3. A scenario chosen at least a week ahead from the experiment backlog.
                4. Every session ending with findings filed and a short record written.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Game days run in at least ten of the next twelve months, each with a written record and filed findings."
                cadence: rolling
              tasks:
                - "Book the recurring game day slot for the next six months"
                - "Choose and circulate next month's scenario @recurring(monthly:5)"
                - "Run the game day and file findings the same afternoon @recurring(monthly:12)"
                - "Write the facilitator rota for the next six sessions"
            - name: Chaos experiment backlog grooming
              description: |-
                ## Purpose
                Experiment ideas pile up from incidents, architecture changes and the risk inventory, and an ungroomed backlog leads to the same easy experiments being run again and again. A monthly half hour to add new candidates, re-rank by risk and retire experiments that are now automated keeps effort pointed at the scariest unknowns.

                ## Milestones
                1. A single backlog of experiment candidates, each linked to a risk or incident.
                2. Every candidate ranked by risk score and estimated effort.
                3. Recent incidents and new architecture changes reviewed for new candidates each month.
                4. Experiments that now run automatically moved out of the backlog.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The experiment backlog is reviewed monthly, with every recent incident considered and the top five candidates ranked by risk."
                cadence: rolling
              tasks:
                - "Move all experiment ideas from chats and documents into one backlog"
                - "Review new incidents and design changes for candidates @recurring(monthly:20)"
                - "Re-rank the top ten candidates by risk score and effort"
                - "Archive candidates that are now covered by automated experiments"
            - name: Weekly experiment run slot
              description: |-
                ## Purpose
                Experiments that wait for a free afternoon never happen. A protected 90-minute weekly slot, announced in advance and staffed by two people, makes small experiments routine: one runs the fault, one watches steady state and holds the stop button. Over a year that is fifty experiments instead of five.

                ## Milestones
                1. A weekly 90-minute slot protected on two engineers' calendars.
                2. Each slot announced in the experiment channel at least a day before.
                3. A runner and an observer named for every run.
                4. At least three experiments a month completed and recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three recorded experiments a month for three consecutive months, each with a named runner and observer."
                cadence: rolling
              tasks:
                - "Book a weekly 90-minute slot for a runner and an observer"
                - "Announce the next experiment in the channel @recurring(weekly:tue)"
                - "Run the experiment and fill in its record @recurring(weekly:wed)"
                - "Swap runner and observer roles every fortnight"
            - name: Resilience findings follow-through
              description: |-
                ## Purpose
                An experiment that finds a weakness and files a ticket nobody fixes has only produced anxiety. Tracking every finding to a fix and then re-running the original experiment to prove the fix works is what separates chaos engineering from breaking things for sport. Review the open findings every month with the people who prioritise the work.

                ## Milestones
                1. Every finding from every experiment tracked in one list with an owner and severity.
                2. A target fix time agreed for each severity level.
                3. Each closed finding verified by re-running the experiment that found it.
                4. Overdue findings raised in the monthly planning meeting.

                ## Notes
                Start from the **Remediation plan** template. A finding is closed when the re-run passes, not when the pull request merges.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every resilience finding has an owner and severity, and each closed one has a passing re-run of the original experiment recorded."
                cadence: rolling
              tasks:
                - "Gather findings from all past experiment records into one list"
                - "Agree target fix times for each severity with the product owner"
                - "Review overdue findings with the team lead @recurring(monthly:8)"
                - "Re-run the original experiment for each fix marked done @recurring(monthly:22)"
            - name: Chaos experiments in the delivery pipeline
              description: |-
                ## Purpose
                Resilience regresses quietly: a new client library drops the timeout, a refactor removes the fallback, and nobody notices until production. Running a small set of fast, deterministic fault experiments as a pipeline stage, such as a dependency returning errors or responding slowly, catches those regressions on the pull request that caused them.

                ## Milestones
                1. Three or more fault experiments that finish in under ten minutes against an ephemeral environment.
                2. The experiments running as a required pipeline stage for the target service.
                3. Failures reported with the steady-state reading that breached.
                4. A monthly check that the experiments still exercise the real dependencies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least three fault experiments run on every merge to the main branch of the target service and block the merge on failure."
                cadence: rolling
              tasks:
                - "Choose three past findings that would make good automated checks"
                - "Script each as a fault experiment against an ephemeral environment"
                - "Add the experiments as a required stage in the pipeline"
                - "Check the pipeline experiments still match real dependencies @recurring(monthly:15)"
            - name: Quarterly disaster recovery failover drill
              description: |-
                ## Purpose
                A disaster recovery plan that has never been executed is a hope, not a plan, and the recovery time written in it is usually a guess. Failing the service over to its secondary site or region every quarter, timing each step against the runbook, measures the real recovery time and recovery point and keeps the runbook honest.

                ## Milestones
                1. A failover runbook with every step and the person who performs it.
                2. A drill completed each quarter with each step timed.
                3. Actual recovery time and data loss compared with the stated objectives.
                4. Runbook corrections made within a week of each drill.

                ## Notes
                Agree the recovery objectives with the business owner before the first drill; engineering should not set them alone.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four failover drills in a year, each with timed steps, measured recovery time and data loss, and a corrected runbook."
                cadence: cyclic
              tasks:
                - "Confirm the recovery time and recovery point objectives with the business owner"
                - "Walk through the failover runbook and name an owner for each step"
                - "Run the failover drill and time every step @recurring(quarterly)"
                - "Correct the runbook within a week of the drill"
            - name: Backup restore verification routine
              description: |-
                ## Purpose
                Backups that succeed every night but have never been restored fail at the worst moment: missing tables, expired encryption keys, a restore that takes nine hours. Restoring a recent backup into an isolated environment every month and checking the data proves the backup is real and tells you how long a restore actually takes.

                ## Milestones
                1. A restore procedure written for each critical data store.
                2. A monthly restore of a recent backup into an isolated environment.
                3. Row counts or checksums compared against the source at backup time.
                4. Restore duration recorded each month so trends are visible.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly restore tests in a year, each with a data integrity check and a recorded restore duration."
                cadence: rolling
              tasks:
                - "List every critical data store and where its backups live"
                - "Restore last night's backup into an isolated environment @recurring(monthly:3)"
                - "Compare row counts or checksums against the source"
                - "Record the restore duration and any problems in the log @recurring(monthly:4)"
            - name: Chaos results log and monthly digest
              description: |-
                ## Purpose
                Leadership funds what it can see, and a chaos programme that only produces tickets looks like cost. A simple log of experiments run, findings raised, findings fixed and recovery times measured, summarised in a five-line monthly digest, shows the programme paying for itself and shows which services are getting more resilient.

                ## Milestones
                1. A log with experiments run, findings opened and closed, and recovery times per month.
                2. A five-line digest sent to engineering leadership each month.
                3. One finding per digest explained in plain language with its likely customer impact.
                4. Six months of data showing the trend in findings closed.

                ## Notes
                Start from the **Metrics log** template. Count findings fixed, not experiments run, as the headline number.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly digests sent, each with experiment counts, findings closed and one plain-language finding."
                cadence: rolling
              tasks:
                - "Set up the log with the four monthly columns"
                - "Update the log from the month's experiment records @recurring(monthly:26)"
                - "Ask the agent to draft the five-line digest from the log"
                - "Send the digest to engineering leadership @recurring(monthly:27)"
            - name: Annual resilience posture review
              description: |-
                ## Purpose
                Systems change faster than resilience assumptions: new regions, new providers, new traffic patterns. Once a year, re-scoring the risk inventory, checking which top risks have been tested, and comparing recovery times with a year ago gives an honest picture of where the organisation stands and sets next year's priorities.

                ## Milestones
                1. The risk inventory re-scored for every critical service.
                2. Each top risk marked tested, partly tested or untested.
                3. Recovery times and finding counts compared with the previous year.
                4. Three priorities for the next year agreed with engineering leadership.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly review document with re-scored risks, test coverage of top risks and three agreed priorities for the next year."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Re-score the risk inventory for every critical service @recurring(yearly)"
                - "Mark each top risk as tested, partly tested or untested"
                - "Compare this year's recovery times with last year's"
                - "Agree three resilience priorities with engineering leadership"
            - name: Resilience patterns study, timeouts, retries and breakers
              description: |-
                ## Purpose
                Most chaos findings come back to a handful of patterns used badly: timeouts longer than the caller's, retries without backoff or jitter, circuit breakers that never open, bulkheads nobody configured. Studying each pattern properly, with a small code example in your own language, means experiments get fixed correctly instead of patched.

                ## Milestones
                1. Notes on timeouts, retries with backoff and jitter, circuit breakers, bulkheads and load shedding.
                2. A small working example of each pattern in the team's main language.
                3. Each pattern linked to a real finding or incident where it would have helped.
                4. A short team session where the examples are walked through.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Working examples of five resilience patterns in the team's language, each linked to a real finding, are presented to the team."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read about retries with exponential backoff and jitter"
                - "Write a small circuit breaker example in the team's main language"
                - "Link each pattern to an incident where it would have helped"
                - "Walk the team through the examples in a 45-minute session"
            - name: Chaos engineering reading list and case studies
              description: |-
                ## Purpose
                The discipline has a short canon: the published principles, a few books, and public write-ups from companies that run experiments at scale. Reading the core material and three or four public outage reports gives the team shared vocabulary and saves it repeating mistakes others already wrote down.

                ## Milestones
                1. A reading list of the core principles, one book and four public case studies.
                2. Each item read with three takeaways noted.
                3. One idea from the reading adopted in the team's practice.
                4. The list shared with anyone joining the programme.

                ## Notes
                Start from the **Reading queue** template. Public outage reports from large cloud providers are short and rich in failure modes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reading list of at least six items is completed with takeaways noted and one practice change adopted."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the published principles of chaos engineering in one sitting"
                - "Choose four public outage reports from different providers"
                - "Note three takeaways from each item"
                - "Propose one practice change to the team based on the reading"
            - name: Network fault injection practice
              description: |-
                ## Purpose
                Clean failures are rare; real networks get slow, drop a few percent of packets or reorder them, and that is where most services behave worst. Practising latency, packet loss and partial partition injection in a sandbox teaches what each fault looks like in traces and logs before you inject one anywhere that matters.

                ## Milestones
                1. Latency, jitter, packet loss and blackhole faults each injected in a sandbox.
                2. The trace and log signature of each fault captured as a screenshot or note.
                3. The service's behaviour at 100 ms, 500 ms and 2 s of added latency recorded.
                4. A one-page cheat sheet of commands and observed effects.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cheat sheet covering four network faults with commands and observed effects, built from sandbox runs."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set up a sandbox with two services and a dependency between them"
                - "Inject 100 ms, 500 ms and 2 s of latency and record the effects"
                - "Inject five percent packet loss and compare traces with a clean run"
                - "Write the one-page cheat sheet of commands and effects"
            - name: Writing falsifiable chaos hypotheses
              description: |-
                ## Purpose
                Hypotheses such as the system should be fine cannot fail, so they cannot teach anything. Practising hypotheses that name the fault, the expected steady-state change, the time to recover and the alert that should fire turns experiments into tests with clear outcomes. Rewrite five past experiments this way and the difference is obvious.

                ## Milestones
                1. A checklist for a good hypothesis: fault, scope, expected change, recovery time, expected alert.
                2. Five past or planned experiments rewritten against the checklist.
                3. Peer review of the rewritten hypotheses by another engineer.
                4. The checklist added to the experiment record format.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five hypotheses rewritten against an agreed checklist and peer reviewed, with the checklist added to the record format."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a five-point checklist for a falsifiable hypothesis"
                - "Rewrite five experiment hypotheses against the checklist"
                - "Ask another engineer to try to find one that cannot fail"
                - "Add the checklist to the experiment record format"
            - name: Blast radius and progressive scope expansion
              description: |-
                ## Purpose
                The safe way to run a scary experiment is to start tiny and widen only when each step passes: one instance, then one percent of traffic, then one zone. Learning to scope experiments by host, by request header, by customer cohort or by percentage lets you test real failures with almost no customer exposure.

                ## Milestones
                1. The scoping options your tool and platform support listed: host, zone, header, cohort, percentage.
                2. One experiment run at three increasing scopes with a pass recorded at each.
                3. A rule written for when it is safe to widen scope.
                4. The rule added to the safety charter.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One experiment completed at three increasing scopes with recorded passes, and a scope expansion rule added to the safety charter."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every scoping control the chosen tool supports"
                - "Run one experiment against a single instance first"
                - "Widen to a small traffic percentage once the first scope passes"
                - "Write the scope expansion rule into the safety charter"
            - name: Facilitating a game day as game master
              description: |-
                ## Purpose
                A game day lives or dies on its facilitator, who has to inject faults, watch safety, keep responders from cheating with prior knowledge and draw out lessons without blame. Practising the role with a written script, a co-facilitator and a debrief guide builds a second and third person able to run sessions, so game days survive one person's holiday.

                ## Milestones
                1. A facilitator script covering briefing, injection timeline, hints and stop conditions.
                2. One game day co-facilitated alongside an experienced facilitator.
                3. One game day run solo with feedback collected from participants.
                4. A debrief question set that keeps the conversation blameless.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One co-facilitated and one solo game day completed, with a facilitator script and participant feedback recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft a facilitator script for the next scheduled game day"
                - "Co-facilitate one session and note what the lead did differently"
                - "Run a session solo and collect feedback from three participants"
                - "Write six blameless debrief questions for future facilitators"
            - name: Live experiment observation and timeline
              description: |-
                ## Purpose
                During an experiment the observer has to tell, within seconds, whether a wobble is the expected effect or the start of something worse. A single observation view with steady state, fault status and key dependencies, plus a habit of keeping a timestamped timeline, makes halting decisions fast and debriefs factual.

                ## Milestones
                1. One observation dashboard combining steady state, fault annotations and dependency health.
                2. Fault start and stop events annotated automatically on the dashboard.
                3. A timeline template the observer fills in during each experiment.
                4. Three experiments observed using the new view and timeline.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An observation dashboard with automatic fault annotations exists and has been used with a timeline in three experiments."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Combine steady state and dependency panels into one observation view"
                - "Send fault start and stop events from the tool as dashboard annotations"
                - "Create a timeline template with timestamp, observation and decision columns"
                - "Use the view and timeline in the next three experiments"
            - name: Fault flags inside application code
              description: |-
                ## Purpose
                Infrastructure faults cannot reach some of the most interesting failures: a corrupt cache entry, a malformed response from a partner, a slow query in one code path. Adding a small number of fault flags in the application, switched on per request or per cohort and impossible to enable by accident, lets you test those paths precisely and safely.

                ## Milestones
                1. Three or more fault points added to the code, each behind a flag that is off by default.
                2. Flags limited to a header or cohort so only test traffic is affected.
                3. A guard that refuses to enable fault flags in production without the charter's approval.
                4. One experiment run using an application-level fault.

                ## Notes
                Keep fault code tiny and reviewed like any other change. A fault flag left on is an outage you scheduled.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least three default-off fault flags with a production guard are merged, and one experiment has used them."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose three code paths where infrastructure faults cannot reach"
                - "Add a default-off fault flag at each point scoped to a test header"
                - "Add a guard that blocks fault flags in production without approval"
                - "Run one experiment using an application-level fault"
            - name: Timeout and retry budget audit
              description: |-
                ## Purpose
                When a caller's timeout is longer than its own caller's, or three layers each retry three times, a single slow dependency turns into 27 requests and a cascading failure. Auditing timeouts and retries along each critical request path and fixing the ones that nest badly removes one of the most common causes of chaos findings before you even run an experiment.

                ## Milestones
                1. Timeouts and retry counts recorded at every hop of the three most critical request paths.
                2. Every path checked that inner timeouts are shorter than outer ones.
                3. Total retry amplification calculated for each path.
                4. Changes merged so no path amplifies a single failure more than an agreed limit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three critical request paths have documented timeouts and retries, nested correctly, with retry amplification under the agreed limit."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Trace one critical request and list the timeout at every hop"
                - "Calculate the worst-case retry amplification for that path"
                - "Fix any inner timeout longer than its caller's"
                - "Repeat for the next two critical request paths"
            - name: Circuit breaker on the riskiest dependency
              description: |-
                ## Purpose
                When the dependency map shows one service that every request touches and nothing protects, a circuit breaker is the single change most likely to stop the next cascade. Adding one, tuning its thresholds from real error rates and proving it opens and closes with an experiment turns the biggest red cell on the map green.

                ## Milestones
                1. The riskiest unprotected dependency chosen from the failure mode map.
                2. A circuit breaker added with thresholds based on observed error rates.
                3. A fallback defined for when the breaker is open.
                4. An experiment showing the breaker opens under failure and closes on recovery.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A circuit breaker with a fallback protects the riskiest dependency, and an experiment record shows it opening and closing as designed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the riskiest unprotected dependency from the failure mode map"
                - "Set breaker thresholds from a month of real error rates"
                - "Define what users see while the breaker is open"
                - "Inject errors on the dependency and record the breaker's behaviour"
            - name: Graceful degradation plan for non-critical features
              description: |-
                ## Purpose
                Recommendations, reviews and personalisation are pleasant, but a checkout that fails because the recommendation service is slow is a terrible trade. Classifying features as critical or optional and giving every optional one a degraded mode, such as a cached list or a hidden panel, keeps the core flow working when the edges fail.

                ## Milestones
                1. Every feature on the critical user flows classified as critical or optional.
                2. A degraded mode designed for each optional feature.
                3. Degraded modes switchable by a flag or triggered automatically on failure.
                4. An experiment showing the core flow succeeds with every optional feature failing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each optional feature on the critical flows has a tested degraded mode, proven by an experiment where all of them fail at once."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Classify features on the checkout or main flow as critical or optional"
                - "Agree a degraded mode for each optional feature with product"
                - "Implement the degraded modes behind flags"
                - "Fail every optional feature together and check the core flow passes"
            - name: Retry storm and thundering herd experiment
              description: |-
                ## Purpose
                Recovery is often more dangerous than failure: when a dependency comes back, every client retries at once and knocks it straight down again. Simulating a dependency outage followed by recovery, and watching request rates on the way back, shows whether backoff, jitter and rate limits actually spread the load.

                ## Milestones
                1. A hypothesis for request rates during and after a two-minute dependency outage.
                2. The experiment run with request rate to the dependency graphed throughout.
                3. Peak recovery traffic compared with normal traffic as a ratio.
                4. Backoff, jitter or rate limits changed if the ratio exceeds the agreed limit.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An experiment record shows peak recovery traffic to a dependency stayed under the agreed multiple of normal traffic."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the maximum acceptable recovery traffic multiple"
                - "Black-hole the dependency for two minutes in staging"
                - "Graph request rate to the dependency as it recovers"
                - "Add jitter or rate limits where the multiple was exceeded"
            - name: Single availability zone loss experiment
              description: |-
                ## Purpose
                Cloud providers lose whole zones more often than their marketing suggests, and many services that claim to be multi-zone quietly depend on one: a single database primary, a NAT gateway, a cache cluster. Removing one zone from service in a controlled way proves whether capacity, routing and data stores really survive it.

                ## Milestones
                1. Every component of the service mapped to the zones it runs in.
                2. Single-zone dependencies identified and either fixed or accepted in writing.
                3. A zone evacuation run in staging, then in production during a quiet window if the charter allows.
                4. Capacity in the remaining zones confirmed to carry peak load.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An experiment record shows the service kept steady state with one zone removed, with any single-zone dependencies fixed or formally accepted."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Map every component and data store to its zones"
                - "List single-zone dependencies and decide fix or accept for each"
                - "Run a zone evacuation in staging and record steady state"
                - "Check remaining zones can carry peak load without the lost one"
            - name: Database primary failover experiment
              description: |-
                ## Purpose
                Managed databases promise automatic failover in under a minute, but applications often hold stale connections, cache the old endpoint or fail writes for far longer. Forcing a primary failover and measuring how long the application really takes to write successfully again finds connection pool and DNS caching problems before an unplanned failover does.

                ## Milestones
                1. A hypothesis for write availability during a primary failover.
                2. A forced failover run with write success rate measured each second.
                3. Application recovery time compared with the database's own failover time.
                4. Connection pool or DNS settings fixed where the gap is large.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recorded failover experiment shows application write recovery within the agreed time of the database's own failover."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check how the application resolves and caches the database endpoint"
                - "Force a primary failover in staging during the experiment slot"
                - "Measure write success rate per second through the failover"
                - "Tune connection pool validation and DNS caching where needed"
            - name: DNS, certificate and secret expiry experiments
              description: |-
                ## Purpose
                Some of the most embarrassing outages are not crashes but expiries and lookups: a certificate nobody renewed, a rotated secret one service never picked up, a DNS resolver that went away. Simulating each of these in staging shows whether alerts fire early enough and whether services fail loudly or hang silently.

                ## Milestones
                1. An inventory of certificates and secrets with their expiry and rotation dates.
                2. An expired certificate presented to the service in staging and the behaviour recorded.
                3. A secret rotated mid-traffic and every consumer confirmed to pick it up.
                4. DNS resolution failure injected and the timeout behaviour recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Experiment records exist for an expired certificate, a mid-traffic secret rotation and a DNS failure, each with alert timing noted."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every certificate and secret the service uses with expiry dates"
                - "Present an expired certificate in staging and record what happens"
                - "Rotate one secret under traffic and check every consumer"
                - "Block DNS resolution for the service and time the failure"
            - name: Disk, memory and connection exhaustion experiments
              description: |-
                ## Purpose
                Resources run out slowly and then all at once: a log volume fills, a memory leak trips the limit, a connection pool drains under a slow query. Exhausting each resource deliberately in staging shows whether the service sheds load, restarts cleanly or corrupts data, and whether anyone is warned before it happens.

                ## Milestones
                1. Disk fill, memory pressure and connection pool exhaustion each run as an experiment.
                2. The warning alert time recorded for each, relative to the actual failure.
                3. Data integrity checked after each recovery.
                4. Limits, alerts or cleanup jobs added where warnings came too late.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three exhaustion experiments are recorded, each with alert lead time and a data integrity check after recovery."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Fill the service's log volume in staging and note when alerts fire"
                - "Apply memory pressure until the limit trips and watch the restart"
                - "Hold database connections with slow queries until the pool drains"
                - "Add alerts or cleanup jobs where warnings came too late"
            - name: Deciding when chaos moves to production
              description: |-
                ## Purpose
                Staging can only prove so much, but production experiments carry real customer risk, and the move should be a deliberate decision, not a drift. Setting clear entry criteria, such as a clean staging record, tested halt controls, alerting coverage and on-call agreement, and then deciding service by service, lets the programme earn production access.

                ## Milestones
                1. Written entry criteria for running experiments in production.
                2. Each candidate service assessed against the criteria.
                3. A go or not-yet decision recorded per service with the reasons.
                4. The first production experiment scoped at the smallest blast radius.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Production entry criteria are written and a recorded go or not-yet decision exists for each candidate service."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft production entry criteria with the on-call lead"
                - "Score each candidate service against the criteria"
                - "Record a go or not-yet decision per service"
                - "Plan the first production experiment at single-instance scope"
            - name: First cross-team game day
              description: |-
                ## Purpose
                Failures rarely stay inside one team's boundary, and the slowest part of a real incident is often working out whose problem it is. A half-day game day across two or three teams that share a critical flow, with a realistic multi-service scenario, tests handoffs, shared dashboards and escalation as well as the software.

                ## Milestones
                1. Two or three teams sharing a critical flow agreed to take part.
                2. A scenario that crosses team boundaries written and safety-checked.
                3. The game day run with each team's response timeline captured.
                4. Cross-team findings filed with an owner from the right team.

                ## Notes
                Start from the **Meeting notes** template for the debrief. Do not tell responders the scenario in advance; tell their managers.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A half-day cross-team game day is held, with each team's timeline captured and findings assigned across teams."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Invite the leads of two teams that share a critical flow"
                - "Write a cross-boundary scenario and check it against the charter"
                - "Run the game day and capture each team's response timeline"
                - "Hold the debrief and assign each finding to the right team"
            - name: Region evacuation exercise before peak season
              description: |-
                ## Purpose
                Peak trading is exactly when a region failure would cost most and exactly when nobody wants to touch production. Evacuating traffic from one region several weeks before the peak, with capacity pre-scaled and the business informed, proves the plan while there is still time to fix what breaks.

                ## Milestones
                1. A date chosen at least six weeks before the peak, agreed with the business.
                2. Capacity in the receiving region checked against forecast peak traffic.
                3. Traffic shifted out of one region and steady state held for an agreed period.
                4. Findings fixed and the evacuation repeated if the first run failed.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One region is fully evacuated at least six weeks before peak, with steady state held and findings closed before the peak begins."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Agree an evacuation date six weeks before peak with the business"
                - "Check receiving region capacity against forecast peak traffic"
                - "Shift traffic out of one region and hold steady state"
                - "Schedule a repeat run if any finding blocked the first one"
            - name: Third-party outage tabletop exercise
              description: |-
                ## Purpose
                You cannot inject faults into your payment provider or your identity platform, but you can rehearse what happens when they go down. A 90-minute tabletop walking through a two-hour outage of a key provider, minute by minute, exposes missing fallbacks, unclear customer messaging and contracts nobody has read.

                ## Milestones
                1. One critical third party chosen and its status page and support route recorded.
                2. A tabletop scenario written for a two-hour outage at a busy time.
                3. The exercise held with engineering, support and the business owner.
                4. Actions recorded for fallbacks, customer messaging and contract terms.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tabletop for a two-hour third-party outage is held with three functions present and actions recorded for each gap."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the third party whose outage would hurt most"
                - "Write a minute-by-minute scenario for a two-hour outage"
                - "Run the tabletop with engineering, support and the business owner"
                - "Record actions for fallbacks, messaging and contract terms"
            - name: Pre-launch resilience readiness review
              description: |-
                ## Purpose
                New services tend to launch with their happy path tested and their failure modes unknown. A short readiness review before launch, checking dependency timeouts, a single-instance kill, a dependency failure and a rollback, gives the launch a minimum resilience bar without delaying it by weeks.

                ## Milestones
                1. A four-experiment readiness checklist agreed for new services.
                2. Each experiment run against the new service in staging.
                3. Blocking findings fixed before launch, others ticketed.
                4. A readiness sign-off recorded with the launch decision.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A new service passes a four-experiment readiness checklist in staging, with sign-off recorded before launch."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the four readiness experiments with the launching team"
                - "Run each experiment against the new service in staging"
                - "Separate blocking findings from those that can follow launch"
                - "Record the readiness sign-off beside the launch decision"
            - name: Shared platform dependency blackout day
              description: |-
                ## Purpose
                Shared platforms such as the message broker, the service mesh or the internal authentication service are dependencies of dozens of teams, and few of those teams have ever seen them fail. A scheduled blackout day, where the platform team degrades one shared component in staging and every consuming team observes, finds the worst coupling in the organisation in a single afternoon.

                ## Milestones
                1. One shared component and a date agreed with the platform team.
                2. Every consuming team notified at least two weeks ahead with the scenario.
                3. The component degraded in staging while teams record their behaviour.
                4. A combined findings list published with an owner per team.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A staging blackout of one shared platform component is held, with findings from every consuming team combined and assigned."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree the shared component and date with the platform team"
                - "Notify every consuming team two weeks ahead"
                - "Degrade the component in staging while teams record behaviour"
                - "Publish the combined findings with an owner per team"
            - name: Chaos engineering for a small team without SRE
              description: |-
                ## Purpose
                Four engineers with no reliability specialist cannot run a full programme, but they can run one meaningful experiment a month for less than two hours. Choosing a minimal toolkit, one scenario per month from the riskiest dependencies and a lightweight record keeps resilience improving without a dedicated role.

                ## Milestones
                1. A minimal toolkit chosen that needs no new infrastructure.
                2. Three months of scenarios chosen from the dependency map.
                3. One experiment run each month by a rotating engineer.
                4. Findings fixed within the following sprint where possible.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One recorded experiment a month for six months by a team without a reliability specialist, with findings fixed in the next sprint."
                cadence: rolling
              tasks:
                - "Choose a fault tool that runs without new infrastructure"
                - "Pick three monthly scenarios from the riskiest dependencies"
                - "Run this month's experiment with a rotating engineer @recurring(monthly:17)"
                - "Add any finding to the next sprint backlog"
            - name: Enterprise chaos programme charter
              description: |-
                ## Purpose
                In a large organisation, chaos engineering spreads team by team with different tools, safety rules and reporting, until one bad experiment gets the whole practice banned. A programme charter covering shared safety standards, approved tools, a central experiment calendar and maturity levels lets dozens of teams experiment independently under one set of guard rails.

                ## Milestones
                1. A programme charter with shared safety standards approved by engineering leadership.
                2. A list of approved fault injection tools with their permitted environments.
                3. A central experiment calendar visible to all on-call teams.
                4. A maturity model with three or four levels and the criteria for each.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved enterprise chaos charter with safety standards, approved tools, a central calendar and a maturity model is published."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Collect the safety rules each team already uses"
                - "Draft shared safety standards and an approved tool list"
                - "Set up a central experiment calendar for all on-call teams"
                - "Review each team's maturity level against the model @recurring(quarterly)"
            - name: Operational resilience evidence for regulated firms
              description: |-
                ## Purpose
                Financial, health and critical infrastructure firms increasingly have to show regulators and auditors that important services can stay within impact tolerances during severe but plausible disruptions. Mapping chaos experiments, failover drills and restore tests to those obligations turns engineering practice into an evidence pack, without inventing new work. Confirm the exact obligations with your compliance team rather than reading the rules alone.

                ## Milestones
                1. The firm's important business services and their impact tolerances obtained from compliance.
                2. Each service mapped to the experiments and drills that test it.
                3. Gaps listed where no test exercises a severe but plausible scenario.
                4. An evidence pack with records, dates and outcomes assembled for review.

                ## Notes
                This is organisational preparation, not a legal reading. Compliance and legal decide what the rules require; engineering supplies the evidence.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An evidence pack maps each important business service to dated experiment and drill records, with gaps listed and reviewed by compliance."
                cadence: cyclic
                effort_hours_estimate: "20"
              tasks:
                - "Ask compliance for the list of important services and tolerances"
                - "Map each service to the experiments and drills that test it"
                - "List scenarios with no test and add them to the backlog"
                - "Refresh the evidence pack before the annual review @recurring(yearly)"
            - name: Resilience testing on a serverless stack
              description: |-
                ## Purpose
                On managed functions, queues and databases you cannot kill a host or cut a cable, and many classic chaos tools do not apply. Injecting faults through function wrappers, throttling limits, permission removal and dead-letter queues tests what a serverless system really depends on: concurrency limits, cold starts, retries and event redelivery.

                ## Milestones
                1. The serverless failure modes listed: throttling, cold starts, timeouts, permission errors and redelivery.
                2. A fault wrapper or layer that injects latency and errors into functions.
                3. Concurrency limits lowered in staging to trigger throttling.
                4. Dead-letter and redelivery behaviour verified with an experiment.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Experiment records cover throttling, injected function errors and event redelivery on the serverless stack, with dead-letter handling verified."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the managed services and limits the stack depends on"
                - "Add a fault wrapper that injects latency and errors into functions"
                - "Lower concurrency limits in staging to force throttling"
                - "Check that failed events reach the dead-letter queue and replay"
            - name: Introducing chaos to a sceptical organisation
              description: |-
                ## Purpose
                In many organisations the words chaos engineering alone make change managers nervous. Starting with tabletop exercises and restore tests, renaming the practice resilience testing if it helps, and sharing one early win in plain language builds the trust needed to inject real faults later.

                ## Milestones
                1. The main objections gathered from change management, support and leadership.
                2. A first low-risk activity chosen, such as a tabletop or restore test.
                3. One early win written up in plain language with the customer impact avoided.
                4. Agreement obtained for a first staging fault experiment.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "One low-risk resilience activity completed and written up, and written agreement obtained for a first staging fault experiment."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask change management and support what worries them about fault testing"
                - "Run a tabletop or restore test as the first visible activity"
                - "Write up the early win with the customer impact it avoided"
                - "Request agreement for a first staging fault experiment"
            - name: Chaos experiments on a legacy monolith
              description: |-
                ## Purpose
                Legacy monoliths often run on a few large hosts with hand-built failover and no staging copy that matches. Starting with experiments that touch the monolith's edges, such as a slow database, a full disk or a dead downstream integration, finds the single points of failure without risking the core application on day one.

                ## Milestones
                1. The monolith's single points of failure listed with the operations team.
                2. A staging or recovery copy that can safely host experiments identified.
                3. Three edge experiments run: slow database, full disk and a failed integration.
                4. A list of single points of failure handed to the migration or modernisation plan.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three edge experiments are recorded against the monolith, and its single points of failure are handed to the modernisation plan."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List the monolith's single points of failure with operations"
                - "Find a copy of the monolith that can safely host experiments"
                - "Run slow database, full disk and failed integration experiments"
                - "Hand the failure points list to the modernisation owners"
            - name: Continuous chaos in production with automatic abort
              description: |-
                ## Purpose
                Mature teams stop scheduling experiments and let a small set run continuously in production, at low blast radius, halting automatically if steady state slips. Building that safely needs automated abort tied to live metrics, business-hours limits and clear ownership, and it turns resilience from a quarterly check into a constant property.

                ## Milestones
                1. Two or three proven experiments chosen for continuous production running.
                2. Automatic abort wired to steady-state thresholds, tested by forcing a breach.
                3. Run windows limited to staffed hours with announcements automated.
                4. A weekly review of runs, aborts and findings.

                ## Notes
                Test the abort path more often than the experiment. An automated experiment with a broken abort is the most dangerous thing in this area.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Continuous production experiments run for three months with automatic abort tested monthly and every abort investigated."
                cadence: rolling
              tasks:
                - "Choose two experiments with clean records for continuous running"
                - "Wire automatic abort to steady-state thresholds and force a breach to test it"
                - "Limit runs to staffed hours with automatic announcements"
                - "Review runs, aborts and findings @recurring(weekly:fri)"
            - name: Clock skew and time-dependent failure experiments
              description: |-
                ## Purpose
                Clocks drift, leap seconds happen and certificate checks, token expiry, scheduled jobs and distributed locks all quietly assume time is correct. Skewing clocks on a subset of hosts in staging reveals rejected tokens, duplicated jobs and ordering bugs that almost never appear in normal testing.

                ## Milestones
                1. Every component that depends on wall-clock time listed.
                2. Clock skew of seconds, minutes and hours injected on one host each.
                3. Token validation, scheduled jobs and lock behaviour recorded under skew.
                4. Fixes or monitoring added for clock drift where behaviour was unsafe.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Experiment records show behaviour under three levels of clock skew, with fixes or drift monitoring added for unsafe cases."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every component that relies on wall-clock time"
                - "Skew one staging host's clock by seconds, then minutes, then hours"
                - "Record token, scheduled job and lock behaviour at each level"
                - "Add clock drift monitoring where behaviour was unsafe"
            - name: Metastable failure and overload recovery analysis
              description: |-
                ## Purpose
                Some systems stay broken after the trigger is gone: caches go cold, retries keep load high and the system never returns to normal without someone shedding traffic by hand. Reproducing a metastable state in staging and finding the load-shedding, admission control or cache-warming change that lets the system recover by itself removes one of the hardest failures to diagnose live.

                ## Milestones
                1. A candidate feedback loop identified, such as a retry or cold cache loop.
                2. A metastable state reproduced in staging with the trigger removed.
                3. The recovery lever identified, such as load shedding or admission control.
                4. An experiment showing the system recovers without manual intervention after the change.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A metastable failure is reproduced in staging and an experiment shows automatic recovery after a load-shedding or admission control change."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Review past incidents where recovery needed traffic shed by hand"
                - "Reproduce the feedback loop in staging and remove the trigger"
                - "Try load shedding or admission control as the recovery lever"
                - "Re-run to confirm the system recovers by itself"
            - name: Network partition testing with consistency checks
              description: |-
                ## Purpose
                Distributed databases and queues make careful promises about what happens during a partition, and those promises are often broken by configuration or client code. Partitioning nodes in staging while a workload records every operation, then checking the history for lost or duplicated writes, tests whether your data guarantees are real.

                ## Milestones
                1. The consistency guarantee your system claims written in one sentence.
                2. A workload that records every write and read with its result.
                3. Partitions injected between nodes during the workload in staging.
                4. The history checked for lost, duplicated or stale writes, with results recorded.

                ## Notes
                Run this only against staging copies with synthetic data. Partition tests are designed to find data loss.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A partition test with a recorded operation history is completed in staging, and any lost or duplicated writes are documented."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the consistency guarantee the data store claims in one sentence"
                - "Build a workload that logs every operation and its result"
                - "Partition nodes in staging while the workload runs"
                - "Check the history for lost, duplicated or stale writes"
---

# Chaos Engineering & Resilience

Chaos engineering is the habit of breaking your own systems on purpose, in small and controlled ways, so the first time a zone, a database or a payment provider fails is not in front of customers. These projects start with the foundations (a resilience risk inventory, steady-state metrics, a safety charter, a tool and a first experiment in staging), move through the operating rhythms that keep experiments running, the skills behind good hypotheses and safe blast radius, the experiments and fixes that matter most, the game days and drills worth holding, situations such as a small team, a regulated enterprise or a serverless stack, and finally specialist work like continuous chaos in production and metastable failure analysis.

What repeats is a weekly experiment slot, a monthly game day, monthly backlog grooming, findings follow-up, backup restore checks and a results digest, a quarterly disaster recovery drill and a yearly resilience posture review. The Risk register, Purchase decision, Remediation plan, Metrics log, Reading queue and Meeting notes templates pair with the projects that need a record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
