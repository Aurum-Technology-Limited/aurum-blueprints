---
id: software-engineering.application-security-testing
name: Application Security Testing
description: "Static analysis, dependency, secrets and dynamic scanning wired into your pipelines, with a triage policy, merge gates and review routines that keep findings actionable instead of ignored."
category: business
version: 1.0.0
tags: [software-engineering, application-security-testing, engineer, team, sast, dast, dependency-scanning, vulnerability-triage, devsecops]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - remediation-plan
    - metrics-log
    - compliance-control
    - vendor
    - operational-checklist
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Application Security Testing
          description: "Adding static analysis, dependency scanning and dynamic testing to development pipelines and triaging findings without drowning teams in noise."
          projects:
            - name: Application inventory and security testing risk tiers
              description: |-
                ## Purpose
                Scanners can only cover what someone has listed, and most teams discover forgotten repositories, internal tools and public APIs only after an incident. Listing every application with its owner, exposure and the data it handles, then sorting them into three risk tiers, decides where the expensive testing goes first and where a basic scan is enough.

                ## Milestones
                1. Every repository and deployed application listed with a named owning team.
                2. Each entry marked for internet exposure, authentication and the most sensitive data it touches.
                3. Three risk tiers defined in a sentence each, with every application assigned to one.
                4. The inventory stored where the team can update it, with a date of last review.

                ## Notes
                Pull the list from your source control organisation and your cloud accounts, not from memory. Anything nobody claims goes into tier one until someone does.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A shared inventory lists every repository and deployed application with an owner, an exposure note and one of three risk tiers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the list of repositories from your source control organisation"
                - "Match each repository to a deployed service and a named owning team"
                - "Mark internet exposure and the most sensitive data each application handles"
                - "Assign every application to tier one, two or three and share the list"
            - name: Baseline of security tests already running
              description: |-
                ## Purpose
                Before buying or adding anything, find out what is already switched on: a dependency bot someone enabled years ago, a linter with a few security rules, a scan nobody reads. A one-page baseline of tools, coverage and where their output goes stops duplicate purchases and shows the real gaps.

                ## Milestones
                1. Every security-relevant tool in the pipelines named, with the repositories it covers.
                2. For each tool, where its findings land and whether anyone acts on them.
                3. Gaps marked against static, dependency, secrets, container and dynamic testing.
                4. The baseline shared with the team and dated.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated one-page baseline lists each security testing tool in use, its coverage, where its output goes and the gaps by testing type."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search pipeline configuration files for security scanning steps"
                - "Check repository settings for dependency and secrets alerts already enabled"
                - "Ask each team lead which scanner reports they actually read"
                - "Write the baseline table with coverage and gaps by testing type"
            - name: Static analysis tool selection
              description: |-
                ## Purpose
                Static application security testing tools differ far more in false positive rate and language support than their feature lists admit. Running two or three candidates on the same three repositories, one per main language, and counting true findings against noise gives a choice the team will actually keep using.

                ## Milestones
                1. Two or three candidate tools chosen, covering open source and commercial options.
                2. Each candidate run on the same three representative repositories.
                3. A sample of findings from each tool marked true or false positive by an engineer.
                4. A tool chosen, with licence cost, language coverage and pipeline fit written down.

                ## Notes
                Start from the **Purchase decision** template. Precision matters more than the total number of findings: a tool that flags 400 issues of which 20 are real will be muted within a month.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of at least two static analysis tools on the same three repositories, with sampled precision, is recorded alongside the final choice."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick three repositories that represent your main languages and frameworks"
                - "Run each candidate tool on all three with default rules"
                - "Mark thirty sampled findings per tool as true or false positive"
                - "Record the chosen tool and the reasons in a short decision note"
            - name: First static analysis scan and accepted baseline
              description: |-
                ## Purpose
                Turning a static analyser on across an old codebase usually produces hundreds of findings at once, and if every pull request then fails, the team will switch it off. Scanning once, recording the existing findings as a baseline, and only flagging new ones on pull requests lets the tool start helping on day one.

                ## Milestones
                1. The chosen static analyser running on the default branch of tier one repositories.
                2. Existing findings stored as a baseline with a count by severity.
                3. Pull request scans configured to report only findings introduced by the change.
                4. The baseline count recorded as the starting point for later burn-down.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Tier one repositories have a stored static analysis baseline, and pull request scans comment only on newly introduced findings."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Add the static analysis step to the pipeline of one tier one repository"
                - "Run a full scan of the default branch and save the results as the baseline"
                - "Configure pull request scans to show only new findings"
                - "Repeat the set-up for the remaining tier one repositories"
            - name: Dependency scanning switched on for every repository
              description: |-
                ## Purpose
                Most of the code you ship was written by someone else, and software composition analysis is the cheapest test with the highest hit rate. Enabling dependency scanning on every repository, including lockfiles for every package manager in use, tells you which known-vulnerable components you carry before an attacker does.

                ## Milestones
                1. Dependency scanning enabled on all repositories in the inventory.
                2. Every package manager and lockfile in use confirmed as parsed by the scanner.
                3. Findings routed to the owning team rather than one shared inbox.
                4. A count of critical and high advisories by tier recorded as the starting point.

                ## Notes
                Scanning finds the problem; upgrading the library is a separate piece of work. Keep this project about coverage and routing, and hand fixes to whoever owns dependency upgrades.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every inventoried repository has dependency scanning enabled, with findings routed to its owning team and a starting count recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every package manager and lockfile format used across your repositories"
                - "Enable dependency scanning on the tier one repositories first"
                - "Confirm each lockfile type appears in the scanner's results"
                - "Check the dependency dashboard for new critical advisories @recurring(monthly:17)"
            - name: Secrets scanning on new commits and full history
              description: |-
                ## Purpose
                A leaked cloud key or database password in a repository can be found and used by automated crawlers within minutes of a push. Scanning new commits blocks the next leak, and one scan of the full history finds the old ones that are still valid and need rotating today.

                ## Milestones
                1. Push protection or a pre-receive secrets check enabled on all repositories.
                2. A full history scan completed for every repository.
                3. Each historical secret marked as revoked, rotated or confirmed harmless.
                4. A written rule for what to do in the first hour after a secret is pushed.

                ## Notes
                Deleting the commit does not make the secret safe: anyone who cloned or forked the repository still has it. Revoke and rotate first, clean history second.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Secrets scanning blocks new pushes on every repository and every secret found in history is recorded as revoked, rotated or harmless."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Enable push protection for secrets on the source control organisation"
                - "Run a full history secrets scan on every repository"
                - "Revoke and rotate every live credential the history scan finds"
                - "Review open secrets scanning alerts with their owners @recurring(monthly:3)"
            - name: Severity and triage policy for scanner findings
              description: |-
                ## Purpose
                Five tools will produce five severity scales, and without one policy every finding becomes an argument. A short written policy that maps tool severities to yours, adjusts them for the application's risk tier and sets a fix deadline for each level turns triage into a quick, repeatable call.

                ## Milestones
                1. One internal severity scale of four levels defined in plain language.
                2. Each tool's severities mapped to the internal scale.
                3. A fix deadline set for each level, adjusted by application tier.
                4. Rules written for false positives, accepted risk and who can approve each.
                5. The policy agreed by engineering leads and stored with the other team policies.

                ## Notes
                Start from the **Remediation plan** template. Keep accepted risk time-limited: an exception without an expiry date is a permanent hole.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agreed triage policy maps every tool's severities to one internal scale, with fix deadlines per level and named approvers for exceptions."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a four-level severity scale with one example finding for each"
                - "Map the severity labels of every scanner in use to the scale"
                - "Set fix deadlines per level for each application tier"
                - "Circulate the policy to engineering leads and record their agreement"
            - name: Single findings tracker across all scanners
              description: |-
                ## Purpose
                When static analysis results live in one dashboard, dependency alerts in another and penetration test reports in a shared drive, nobody can say how many serious problems are open. Sending every tool's output to one tracker, with duplicates merged and an owner on each item, makes the backlog countable and the deadlines enforceable.

                ## Milestones
                1. One tracker chosen, whether the issue tracker or a dedicated findings platform.
                2. Every scanner exporting findings into it automatically, in a common format such as SARIF where supported.
                3. Duplicate findings from overlapping tools merged into one item.
                4. Each open item carrying an owner, a severity and a due date from the policy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Findings from every scanner arrive automatically in one tracker, deduplicated, each with an owner, severity and due date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Decide whether findings live in the issue tracker or a dedicated platform"
                - "Connect the static analysis and dependency scanners to the tracker"
                - "Write the deduplication rule for findings reported by two tools"
                - "Import the open items from the last penetration test report"
            - name: Merge gate policy for security findings
              description: |-
                ## Purpose
                Gates fail in two ways: block every finding and delivery stops, block nothing and the gate is decoration. Deciding exactly which findings fail a pull request (for example new critical or high issues in tier one services, and any committed secret) and how an engineer can override with a recorded reason gives the pipeline teeth without stalling releases.

                ## Milestones
                1. The blocking conditions written down by severity, tool and application tier.
                2. An override path defined, with who can approve and where the reason is logged.
                3. The gate running in warning mode for two weeks with the would-be blocks counted.
                4. The gate switched to blocking for tier one, with the start date announced.

                ## Notes
                Run in warning mode first. If the warnings show the gate would have blocked a quarter of pull requests, tune the rules before turning it on.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written merge gate policy is in force for tier one repositories, with a logged override path and two weeks of warning-mode data behind it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write which findings should fail a pull request in each tier"
                - "Turn the gate on in warning mode and count would-be blocks for two weeks"
                - "Agree who can approve an override and where the reason is recorded"
                - "Revisit the gate rules against the override log @recurring(quarterly)"
            - name: Weekly triage of new security findings
              description: |-
                ## Purpose
                Findings that sit untouched for a month are effectively accepted risk that nobody approved. A thirty-minute weekly triage, run by a rotating engineer against the severity policy, confirms or dismisses each new item, assigns an owner and keeps the queue short enough that people still read it.

                ## Milestones
                1. A rota of engineers who run triage, one per week.
                2. Every new high and critical finding confirmed, dismissed or reassigned within seven days.
                3. Dismissals carrying a written reason in the tracker.
                4. The untriaged count reported at the end of each session.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No high or critical finding stays untriaged for more than seven days, measured over any eight-week period."
                cadence: rolling
              tasks:
                - "Set up a triage rota with one engineer per week"
                - "Save a tracker filter for untriaged findings by severity"
                - "Run the weekly triage of new high and critical findings @recurring(weekly:tue)"
                - "Post the untriaged count in the team channel after each session"
            - name: False positive and suppression review
              description: |-
                ## Purpose
                Suppressions pile up quietly: an inline ignore comment added under deadline pressure, a rule disabled for one noisy file and never re-enabled. Reviewing them monthly, with the reason and approver for each, catches the ones hiding real problems and feeds genuine false positives back into rule tuning.

                ## Milestones
                1. A list of all suppressions and inline ignores across repositories, generated automatically.
                2. Every suppression carrying a reason and an approver.
                3. Suppressions without a reason either justified or removed.
                4. Repeated false positives from the same rule passed to rule tuning.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month the full suppression list is reviewed and every suppression has a reason, an approver or has been removed."
                cadence: rolling
              tasks:
                - "Write a script that lists inline ignores and suppressed findings across repositories"
                - "Review the suppression list and remove any without a reason @recurring(monthly:12)"
                - "Group repeated false positives by rule for the tuning backlog"
                - "Add an approver field to the suppression template in the tracker"
            - name: Remediation deadline tracking by severity
              description: |-
                ## Purpose
                Fix deadlines in a severity policy mean nothing unless someone counts how many items are past them. A monthly report of overdue findings by team and severity, sent to the people who can move priorities, turns the policy from a document into a commitment.

                ## Milestones
                1. A tracker query showing open findings past their policy deadline.
                2. A monthly report of overdue items by team and severity.
                3. Each team with overdue criticals agreeing a fix date or a time-limited exception.
                4. The trend in overdue items visible over at least three months.

                ## Notes
                Start from the **Remediation plan** template for any team with more than a handful of overdue items.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly overdue findings report by team and severity is sent for at least three consecutive months, with a fix date or exception for every overdue critical."
                cadence: rolling
              tasks:
                - "Build a tracker query for findings past their policy deadline"
                - "Send the overdue findings report to engineering leads @recurring(monthly:20)"
                - "Ask each team with overdue criticals for a fix date or exception"
                - "Chart overdue counts month by month in the shared report"
            - name: Scheduled full scans of default branches
              description: |-
                ## Purpose
                Pull request scans only see changed code, while new rules and new advisories apply to code that has not changed in years. A weekly full scan of every default branch, with a check that each one actually ran, catches the old code that today's rules newly flag.

                ## Milestones
                1. A weekly scheduled full scan configured for every inventoried repository.
                2. A report listing repositories whose scheduled scan failed or was skipped.
                3. Failed scans fixed or explained within a week.
                4. Archived repositories removed from the schedule and from the inventory.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active repository receives a successful full scan each week, with failures fixed or explained within seven days."
                cadence: rolling
              tasks:
                - "Add a weekly scheduled full scan to each repository's pipeline"
                - "Build a report of repositories whose last full scan failed or was skipped"
                - "Check the full-scan report for failed or skipped repositories @recurring(weekly:mon)"
                - "Remove archived repositories from the scan schedule"
            - name: Scanner rule set tuning cycle
              description: |-
                ## Purpose
                Default rule sets are written for every codebase, so they are tuned for none. Each quarter, disabling or narrowing the rules with the worst false positive record and enabling rules for frameworks you have adopted keeps precision high enough that engineers trust a red build.

                ## Milestones
                1. False positive rate per rule calculated from the last quarter's triage decisions.
                2. The five noisiest rules narrowed, reconfigured or disabled with a reason.
                3. Rules for any newly adopted framework or language enabled.
                4. The rule set configuration kept in version control with a change note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter the five noisiest rules are adjusted with a recorded reason, and the rule configuration change is committed to version control."
                cadence: cyclic
              tasks:
                - "Export triage decisions to calculate false positive rate per rule"
                - "Tune the five noisiest static analysis rules @recurring(quarterly)"
                - "Enable rule packs for frameworks adopted since the last review"
                - "Commit the rule configuration with a note explaining each change"
            - name: Security testing metrics log
              description: |-
                ## Purpose
                Without numbers, the security testing programme is judged on the last scary finding or the last blocked release. A monthly log of a handful of measures (open findings by severity, median time to fix, scan coverage, false positive rate and gate overrides) shows whether things are improving and where to spend the next month.

                ## Milestones
                1. Five measures chosen and each defined in one sentence.
                2. A monthly entry recorded for each measure.
                3. Three months of data showing a trend for each.
                4. A short note each quarter on what the trend says and what changes next.

                ## Notes
                Start from the **Metrics log** template. Median time to fix tells you more than the open count, which grows whenever you add a scanner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log holds at least three consecutive monthly entries for five defined security testing measures."
                cadence: rolling
              tasks:
                - "Define five security testing measures in one sentence each"
                - "Record this month's values for the five measures @recurring(monthly:8)"
                - "Write a quarterly note on the trend and the next change"
                - "Share the log with engineering leads"
            - name: Container image scanning in the registry
              description: |-
                ## Purpose
                Clean application scans say nothing about the operating system packages in the base images underneath them, and images that are not rebuilt quietly collect new vulnerabilities. Scanning images at build time and again in the registry, with each finding traced to the base image or the application layer, shows who has to fix what.

                ## Milestones
                1. Image scanning running in the build pipeline for every service image.
                2. Registry rescans of deployed images on a schedule.
                3. Findings split between base image packages and application layers.
                4. A list of approved base images with an owner for each.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every deployed image is scanned at build and rescanned in the registry, with findings attributed to base image or application layer."
                cadence: rolling
              tasks:
                - "Add an image scan step after the build in each service pipeline"
                - "Turn on scheduled rescans of images in the registry"
                - "Write the list of approved base images and their owners"
                - "Review critical findings in deployed images by layer @recurring(monthly:15)"
            - name: Infrastructure as code security scanning in pull requests
              description: |-
                ## Purpose
                Public storage buckets and open security groups are configuration lines in a Terraform or Kubernetes file long before they become a breach. Running a misconfiguration scanner on infrastructure code in pull requests catches those lines while they are still cheap to change and before they reach a cloud account.

                ## Milestones
                1. A misconfiguration scanner running on pull requests that touch infrastructure code.
                2. Policies for public exposure, encryption and broad permissions enabled first.
                3. Existing findings in infrastructure repositories baselined.
                4. Findings reported as pull request comments next to the line at fault.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Pull requests touching infrastructure code are scanned for misconfiguration, with findings commented inline and the existing backlog baselined."
                cadence: rolling
              tasks:
                - "List the repositories that hold Terraform, Kubernetes or similar files"
                - "Add an infrastructure code scanner to their pull request pipelines"
                - "Enable public exposure, encryption and permission policies first"
                - "Review infrastructure scan findings with the platform owners @recurring(monthly:24)"
            - name: Quarterly scanner coverage audit
              description: |-
                ## Purpose
                Coverage decays: a team creates a new repository from a template without the scan step, a pipeline is rewritten and the security job is dropped. A quarterly comparison of the inventory against what each scanner actually saw finds the blind spots before someone assumes they were covered.

                ## Milestones
                1. Each scanner's list of scanned repositories exported.
                2. The lists compared against the current application inventory.
                3. Every uncovered repository either onboarded or recorded as out of scope with a reason.
                4. Coverage percentage per scanner recorded in the metrics log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, coverage per scanner is measured against the inventory and every gap is closed or recorded with a reason."
                cadence: cyclic
              tasks:
                - "Export the list of repositories each scanner reported on this quarter"
                - "Compare scanner coverage against the application inventory @recurring(quarterly)"
                - "Open a ticket for each repository missing a required scan"
                - "Add the scan steps to the repository template so new projects start covered"
            - name: Security champions findings clinic
              description: |-
                ## Purpose
                Product engineers fix findings faster when they can ask someone who knows the tools rather than guessing from a terse rule description. A monthly clinic run by the security champions, where people bring confusing findings, turns triage knowledge into team knowledge and spreads the load beyond one specialist.

                ## Milestones
                1. One champion named in each product team.
                2. A monthly thirty-minute clinic held with an open agenda of brought findings.
                3. Common questions written up as short answers in the team wiki.
                4. Attendance and questions answered noted after each session.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A monthly findings clinic runs for at least three months with champions from each product team and a growing page of written answers."
                cadence: rolling
              tasks:
                - "Ask each product team lead to name a security champion"
                - "Hold the monthly findings clinic for brought questions @recurring(monthly:5)"
                - "Write each new question and answer on the team wiki page"
                - "Invite the champions to the weekly triage once a month"
            - name: Reading a static analysis finding from source to sink
              description: |-
                ## Purpose
                Most static analysis findings are taint traces: untrusted input enters at a source, passes through some functions and reaches a dangerous sink. Engineers who can follow that path, and spot where a sanitiser breaks it, triage in minutes instead of guessing, and know when the tool has simply lost track.

                ## Milestones
                1. The terms source, sink, sanitiser and taint propagation explained in your own words.
                2. Ten real findings from your codebase traced by hand from source to sink.
                3. At least two traces identified where a sanitiser or framework protection breaks the path.
                4. A short guide for the team on reading the tool's trace view.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten real findings have been traced by hand with notes, and a one-page guide to reading the tool's trace view is shared with the team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the static analysis tool's documentation on data flow and taint"
                - "Pick ten findings from your codebase with full trace views"
                - "Trace each from source to sink and note where protections apply"
                - "Write a one-page guide to reading traces for the team"
            - name: OWASP Top 10 mapped to your scanner coverage
              description: |-
                ## Purpose
                The OWASP Top 10 is the list auditors, customers and penetration testers will ask about, yet few teams know which categories their tools actually test. Mapping each category to the scanner, rule or manual test that covers it shows exactly which risks rely on testing and which rely on hope.

                ## Milestones
                1. Each OWASP Top 10 category summarised with one example from your stack.
                2. Every category mapped to the tools and rules that test for it.
                3. Categories with no automated coverage marked, such as broken access control logic.
                4. A plan for each uncovered category, whether manual testing, design review or a new tool.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table maps all ten OWASP Top 10 categories to the tools or tests covering them, with a plan for each uncovered category."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the current OWASP Top 10 and note one example per category for your stack"
                - "Map each category to the scanner rules that test for it"
                - "Mark the categories no tool covers today"
                - "Agree a plan for each uncovered category with the team"
            - name: Manual testing with an intercepting proxy
              description: |-
                ## Purpose
                Automated scanners miss the bugs that need context, such as changing an order ID in a request to see someone else's order. Learning to drive an intercepting proxy like OWASP ZAP or Burp Suite against your own staging environment lets an engineer test those cases in an afternoon and confirm scanner findings properly.

                ## Milestones
                1. An intercepting proxy installed and trusted by a test browser profile.
                2. A full login and checkout flow captured and replayed in the proxy.
                3. Requests tampered with to test object IDs, roles and hidden parameters.
                4. Any issue found written up with the exact request and response.

                ## Notes
                Only test systems you own or have written permission to test, and use a staging environment with test accounts rather than production.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One complete user flow in staging has been captured, replayed and tampered with in an intercepting proxy, with findings written up."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Install an intercepting proxy and set up a separate test browser profile"
                - "Capture the staging login flow and replay one request"
                - "Change object IDs and role parameters in replayed requests"
                - "Write up anything unexpected with the request and response"
            - name: Writing custom static analysis rules
              description: |-
                ## Purpose
                Generic rules cannot know that your codebase has its own unsafe query helper or a home-grown templating function that skips escaping. Writing a few custom rules in a pattern-based tool such as Semgrep or a query language such as CodeQL turns lessons from past bugs into checks that run on every pull request.

                ## Milestones
                1. The rule syntax of your chosen tool learned on two tutorial examples.
                2. Three patterns specific to your codebase written as custom rules.
                3. Each rule tested against code that should and should not match.
                4. The rules committed to a shared rule repository and running in the pipeline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three custom rules, each with passing positive and negative test cases, run in the pipeline from a shared rule repository."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Work through two tutorial rules in your static analysis tool"
                - "List three unsafe patterns specific to your codebase"
                - "Write each pattern as a rule with matching and non-matching test cases"
                - "Add the custom rules to the pipeline and announce them to the team"
            - name: Prioritising findings with CVSS, EPSS and reachability
              description: |-
                ## Purpose
                CVSS scores describe how bad a vulnerability could be, not how likely it is to be exploited in your system. Learning to combine the base score with exploit prediction data, known-exploited lists and whether your code even calls the vulnerable function makes a dependency backlog of hundreds shrink to the dozen that matter.

                ## Milestones
                1. The meaning of CVSS base, EPSS and a known-exploited vulnerabilities list explained in a paragraph each.
                2. Twenty open dependency findings scored with all three signals.
                3. Reachability checked for the top ten by calling path or import.
                4. A ranking rule proposed for the triage policy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty real dependency findings are ranked using CVSS, EPSS, known-exploited status and reachability, and a ranking rule is proposed for the policy."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read how CVSS base scores and EPSS probabilities are calculated"
                - "Score twenty open dependency findings with CVSS, EPSS and known-exploited status"
                - "Check whether your code reaches the vulnerable function for the top ten"
                - "Propose a ranking rule to add to the triage policy"
            - name: Practice on a deliberately vulnerable application
              description: |-
                ## Purpose
                Learning to find vulnerabilities on production code is slow and risky. Running a deliberately vulnerable training application such as OWASP Juice Shop locally, and scanning it with your own tools before attacking it by hand, shows quickly what your scanners catch, what they miss and what a real exploit looks like.

                ## Milestones
                1. The training application running locally in a container.
                2. Your static, dependency and dynamic scanners run against it.
                3. Ten challenges solved by hand, covering at least five vulnerability classes.
                4. A note on which solved vulnerabilities your scanners found and which they missed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten challenges are solved on a local vulnerable application, with a written comparison of what the team's scanners detected and missed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Start the training application locally in a container"
                - "Run your existing scanners against it and save the results"
                - "Solve ten challenges across at least five vulnerability classes"
                - "Compare the solved issues against the scanner results"
            - name: API security testing against the OWASP API Top 10
              description: |-
                ## Purpose
                APIs fail differently from web pages: broken object-level authorisation, excessive data in responses and missing rate limits rarely show up in a page crawler. Working through the OWASP API Security Top 10 against one of your own APIs, with its OpenAPI definition as the map, builds the habit of testing what each endpoint lets each role do.

                ## Milestones
                1. One API chosen, with its OpenAPI definition current.
                2. Two test accounts with different roles and tenants set up in staging.
                3. Each API Top 10 category tested by hand or with a scanner against that API.
                4. Findings logged in the tracker with the request used to reproduce them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One API has been tested against every OWASP API Top 10 category using two roles, with reproducible findings logged in the tracker."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose one API and confirm its OpenAPI definition matches the live endpoints"
                - "Create two staging accounts in different roles and tenants"
                - "Test each endpoint with the other account's object IDs"
                - "Log each finding with the exact request that reproduces it"
            - name: Authenticated dynamic scanning of staging
              description: |-
                ## Purpose
                A dynamic scanner that cannot log in tests only the login page and the marketing site. Configuring authenticated DAST against staging, with test accounts, a stable session and the API definition loaded, lets it reach the screens and endpoints where the real data lives.

                ## Milestones
                1. Dedicated scanner test accounts created for each main role in staging.
                2. The scanner logging in reliably and staying logged in for a full scan.
                3. API definitions imported so endpoints without links are tested.
                4. A weekly scheduled scan with results feeding the findings tracker.

                ## Notes
                Point dynamic scanners at staging, never production, and exclude actions that send email, take payments or delete data.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An authenticated dynamic scan of staging runs weekly, covers the main roles and imported API endpoints, and feeds the findings tracker."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Create scanner test accounts for each main role in staging"
                - "Record the login sequence and confirm the session survives a full scan"
                - "Import the API definitions and exclude destructive endpoints"
                - "Review the weekly staging dynamic scan report @recurring(weekly:thu)"
            - name: Reachability analysis to cut dependency alert noise
              description: |-
                ## Purpose
                Most vulnerable dependencies are never called in the vulnerable way, yet every alert looks equally urgent. Adding reachability analysis, which checks whether your code actually calls the affected function, lets teams sort the dependency backlog into must-fix-now and fix-on-the-next-upgrade.

                ## Milestones
                1. Reachability support confirmed for each main language in use.
                2. Reachability enabled on the tier one repositories.
                3. Findings tagged as reachable, unreachable or unknown in the tracker.
                4. The triage policy updated so unreachable findings get a longer deadline.

                ## Notes
                Unreachable is not the same as safe: code paths change. Keep unreachable findings in the backlog with a longer deadline rather than closing them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Dependency findings in tier one repositories are tagged by reachability, and the triage policy sets different deadlines for reachable and unreachable items."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check which of your languages the scanner supports for reachability"
                - "Enable reachability analysis on the tier one repositories"
                - "Count how many open findings move to unreachable"
                - "Update the triage policy with separate deadlines by reachability"
            - name: SBOM generated for every release
              description: |-
                ## Purpose
                When the next widely exploited library flaw is announced, the question is which of your releases contain it, and answering by grepping repositories takes days. Generating a software bill of materials in a standard format such as CycloneDX or SPDX for every release, and storing it with the release, turns that question into a search.

                ## Milestones
                1. An SBOM format chosen and a generator added to the release pipeline.
                2. An SBOM attached to every release of tier one services.
                3. SBOMs stored where they can be searched by component and version.
                4. A test search run for one library across all stored SBOMs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tier one release has an attached SBOM in a standard format, and a single search across them returns every release containing a named component."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose CycloneDX or SPDX and a generator for your build tools"
                - "Add SBOM generation to the release pipeline of one service"
                - "Store SBOMs in a searchable location alongside each release"
                - "Spot-check that the latest releases have an attached SBOM @recurring(monthly:27)"
            - name: Fast feedback scans in the editor and pre-commit
              description: |-
                ## Purpose
                Engineers fix a finding underlined in the editor in seconds, and the same finding buried in a pipeline log twenty minutes after a push only reluctantly. Offering the same rules as the pipeline in an editor plugin and a quick pre-commit hook moves most fixes before review without adding a new rule set to maintain.

                ## Milestones
                1. An editor plugin configured to use the same rule configuration as the pipeline.
                2. A pre-commit hook running secrets and fast static checks in under ten seconds.
                3. Set-up steps added to the repository README.
                4. Feedback from five engineers on speed and noise collected after a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An editor plugin and a pre-commit hook using the pipeline's rule configuration are documented, and the hook runs in under ten seconds on a typical commit."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Install the scanner's editor plugin and point it at the shared rule file"
                - "Write a pre-commit hook for secrets and fast static checks"
                - "Time the hook on a typical commit and trim it under ten seconds"
                - "Add the set-up steps to the repository README"
            - name: Open source toolchain versus commercial platform
              description: |-
                ## Purpose
                Stitching together open source scanners is cheap to start and costly to run at fifty repositories, while a commercial application security platform is the reverse. Costing both honestly, including the engineer hours spent maintaining integrations and deduplicating results, gives a decision that will still look sensible in two years.

                ## Milestones
                1. Current tooling costs listed, including engineer hours per month spent on maintenance.
                2. Two commercial platforms and the open source option compared on the same criteria.
                3. A trial of the leading commercial option run on three repositories.
                4. A recommendation with three-year cost, coverage and lock-in risk written up.

                ## Notes
                Start from the **Vendor** template for each platform you trial. Ask for findings export in an open format before signing, so leaving is possible.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written recommendation compares the open source toolchain with two commercial platforms on three-year cost, coverage and lock-in risk."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Estimate the engineer hours spent each month maintaining current scanners"
                - "Shortlist two commercial platforms against the same criteria"
                - "Run a trial of the leading option on three repositories"
                - "Write the recommendation with three-year cost and exit plan"
            - name: Automated fix suggestions trial
              description: |-
                ## Purpose
                Several scanners and AI coding tools now open pull requests that propose fixes for findings, which can clear simple items quickly or introduce subtle breakage. A four-week trial on two repositories, measuring how many suggested fixes merge unchanged and how many break tests, shows whether they save time for your codebase.

                ## Milestones
                1. Automated fix suggestions enabled on two repositories with good test coverage.
                2. Every suggested fix over four weeks recorded as merged, edited or rejected.
                3. Any fix that broke tests or behaviour noted with the cause.
                4. A decision on wider rollout recorded with the numbers.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A four-week trial records the outcome of every automated fix suggestion on two repositories and ends with a recorded rollout decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick two repositories with reliable test suites for the trial"
                - "Enable automated fix suggestions for static and dependency findings"
                - "Record each suggestion as merged, edited or rejected for four weeks"
                - "Write up the rollout decision with the merge and breakage rates"
            - name: Licence compliance policy in dependency scanning
              description: |-
                ## Purpose
                Dependency scanners report licences as well as vulnerabilities, but the results are useless without a policy saying which licences are allowed. Agreeing allowed, review-needed and blocked licence lists with whoever handles legal questions, and setting the scanner to match, catches a copyleft surprise before it ships in a product.

                ## Milestones
                1. Licences found across current dependencies listed with counts.
                2. Allowed, review-needed and blocked lists agreed with your legal contact.
                3. The scanner configured to warn or block according to the lists.
                4. Existing blocked or review-needed dependencies each given a decision.

                ## Notes
                This is a record of the policy your legal adviser sets, not a legal judgement. Distribution model matters: the same licence can be fine for an internal service and a problem in a shipped app.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Licence policy lists are agreed with a legal contact, configured in the scanner, and every existing flagged dependency has a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the licences found across all current dependencies"
                - "Ask your legal contact to sort them into allowed, review and blocked"
                - "Configure the dependency scanner to warn or block by list"
                - "Re-export licences and flag any newly introduced ones @recurring(quarterly)"
            - name: Security test plan for a new service before launch
              description: |-
                ## Purpose
                New internet-facing services are cheapest to test before customers depend on them and hardest to fix after. A dated pre-launch test, covering scanner onboarding, an authenticated dynamic scan, a manual check of access control and a sign-off on open findings, means launch day carries no unknown critical issues.

                ## Milestones
                1. The new service added to the inventory and all standard scanners.
                2. An authenticated dynamic scan and a manual access control test completed in staging.
                3. Every critical and high finding fixed or carrying an approved exception.
                4. A launch sign-off recorded by the service owner and a security reviewer.

                ## Notes
                Start from the **Operational checklist** template so the same steps apply to every new service.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new service launches with all standard scans passing and a recorded sign-off showing no open critical or high findings without an approved exception."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Add the new service to the inventory and enable all standard scanners"
                - "Book a manual access control test in staging two weeks before launch"
                - "Run an authenticated dynamic scan of the staging deployment"
                - "Record the launch sign-off with the open findings list attached"
            - name: External penetration test scoping and follow-through
              description: |-
                ## Purpose
                An external penetration test is expensive and often wasted: unclear scope, testers stuck at login for two days, and a PDF of findings that nobody imports. Scoping it tightly, preparing accounts and environments in advance, and tracking every finding to closure makes the report worth what it cost.

                ## Milestones
                1. Scope written with in-scope applications, environments, roles and excluded actions.
                2. Test accounts, data and access ready before the start date.
                3. Rules of engagement and emergency contacts agreed in writing.
                4. Every reported finding imported into the tracker with an owner and due date.
                5. A retest completed for all critical and high findings.

                ## Notes
                Start from the **Vendor** template for the testing firm. Ask for findings in a machine-readable export as well as the report.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The penetration test runs to an agreed scope, every finding is in the tracker with an owner, and all critical and high findings pass a retest."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the scope with applications, roles and excluded actions"
                - "Prepare test accounts and staging data a week before the start date"
                - "Import every reported finding into the tracker with an owner"
                - "Book the next external penetration test @recurring(yearly)"
            - name: Vulnerability disclosure programme launch
              description: |-
                ## Purpose
                Outside researchers will find issues your scanners missed, and without a published route they either give up or post them publicly. Publishing a disclosure policy and a security.txt file, with a monitored inbox and a response target, gives those reports a safe way in before considering a paid bug bounty.

                ## Milestones
                1. A disclosure policy written with scope, safe harbour wording and response times.
                2. A security.txt file published on each main domain.
                3. A monitored security inbox with a named weekly owner.
                4. First reports acknowledged within the stated response time.

                ## Notes
                Have the safe harbour wording reviewed by your legal contact. A paid bug bounty only makes sense once your own scans and triage are in good shape; otherwise you pay for findings a scanner would have caught.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A disclosure policy and security.txt are published, and every report in the first three months is acknowledged within the stated response time."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the disclosure policy with scope and response times"
                - "Publish a security.txt file on each main domain"
                - "Name a weekly owner for the security inbox"
                - "Check the security inbox and acknowledge new reports @recurring(weekly:mon)"
            - name: Audit evidence pack for security testing controls
              description: |-
                ## Purpose
                Customers' security questionnaires and audits such as SOC 2 or ISO 27001 ask for proof that code is tested before release, not a description of intentions. Collecting scan configurations, gate policies, triage records and remediation times into one evidence pack makes the next audit a matter of exporting rather than scrambling.

                ## Milestones
                1. The audit or questionnaire controls related to security testing listed.
                2. Each control matched to a specific piece of evidence such as a pipeline config or report.
                3. Evidence collected for the audit period and stored in one folder.
                4. Gaps between the controls and the evidence noted with a fix plan.

                ## Notes
                Start from the **Compliance control** template, one control per record.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every security testing control in scope for the audit has linked evidence covering the audit period, with any gaps recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the audit controls that mention testing, scanning or vulnerability management"
                - "Match each control to a pipeline config, report or tracker export"
                - "Collect the evidence for the audit period into one folder"
                - "Write down each gap and who will close it"
            - name: Annual security testing programme review
              description: |-
                ## Purpose
                Tools, languages and threats change faster than a programme set up once and left alone. An annual review of the year's metrics, penetration test themes, incidents and team feedback decides which scanners stay, what to add and which policies need rewriting for the year ahead.

                ## Milestones
                1. Twelve months of metrics, pen test results and incident links summarised.
                2. Each tool rated on findings fixed, false positive rate and cost.
                3. Engineer feedback on noise and speed gathered from a short survey.
                4. Next year's three priorities agreed and written into the plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An annual review document rates every tool, summarises the year's results and records three agreed priorities for the next year."
                cadence: cyclic
              tasks:
                - "Collect the year's metrics log, pen test reports and incident links"
                - "Rate each scanner on findings fixed, noise and cost"
                - "Send a five-question survey on scanner noise to engineers"
                - "Hold the annual security testing programme review @recurring(yearly)"
            - name: Free-tier security testing for a small team
              description: |-
                ## Purpose
                Teams of two to five engineers do not need a platform or a policy document, but they do need the handful of checks that catch most real problems. Switching on free dependency alerts, secrets push protection and one open source static analyser, with one person checking results monthly, covers the basics in a day.

                ## Milestones
                1. Dependency alerts and secrets push protection enabled on every repository.
                2. One open source static analyser running in the pipeline with default security rules.
                3. A shared note saying who checks findings and when.
                4. The first monthly check completed and any critical issues fixed.

                ## Notes
                Resist adding a second tool until the first one's findings are being acted on.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every repository has dependency alerts, secrets push protection and one static analyser, and a named person has completed the first monthly check."
                cadence: rolling
              tasks:
                - "Enable dependency alerts and secrets push protection on every repository"
                - "Add one open source static analyser to the main pipeline"
                - "Write down who checks findings and on which day"
                - "Check open security findings across all repositories @recurring(monthly:10)"
            - name: Rolling scanners out across many repositories
              description: |-
                ## Purpose
                Adding scanning to forty or four hundred repositories one pull request at a time stalls after the first dozen. A rollout using shared pipeline templates, a tracking sheet and waves ordered by risk tier gets every repository covered without each team having to work out the set-up alone.

                ## Milestones
                1. A shared pipeline template or reusable workflow containing all standard scans.
                2. Repositories grouped into rollout waves by risk tier.
                3. Each wave announced a week ahead with the expected first-scan noise.
                4. Coverage tracked per wave until every repository is onboarded.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All inventoried repositories use the shared scanning template, tracked wave by wave to full coverage."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Build a reusable pipeline template with all standard security scans"
                - "Group repositories into rollout waves by risk tier"
                - "Announce each wave to the owning teams a week before it starts"
                - "Track onboarding per wave in a shared coverage sheet"
            - name: Burning down an inherited backlog of old findings
              description: |-
                ## Purpose
                Inheriting a scanner with three thousand open findings nobody has looked at is common, and trying to triage them in order is hopeless. Sorting by severity, reachability and risk tier, bulk-closing what is plainly stale, and working a fixed weekly quota turns the backlog into a falling line instead of a wall.

                ## Milestones
                1. The backlog grouped by severity, rule, repository and age.
                2. Findings in archived code and deleted files bulk-closed with a note.
                3. The top fifty by severity and tier triaged and assigned.
                4. A weekly quota agreed and the remaining count charted each week.

                ## Notes
                Start from the **Remediation plan** template. Fix one rule across the whole codebase at a time where you can: twenty fixes of the same pattern go faster than twenty different ones.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The inherited backlog has been grouped and stale items closed, and the open count falls for eight consecutive weeks under a weekly quota."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Export the full backlog and group it by rule, repository and age"
                - "Bulk-close findings in archived repositories and deleted files"
                - "Triage the fifty highest severity items in tier one services"
                - "Close or re-triage twenty backlog findings @recurring(weekly:fri)"
            - name: Mobile app security testing
              description: |-
                ## Purpose
                Mobile apps add risks a web scanner never sees: keys embedded in the binary, insecure local storage, disabled certificate checks and debug flags left on in release builds. Scanning the built app package and testing it against the OWASP Mobile Application Security guidance covers what lives on the user's phone, not just the API behind it.

                ## Milestones
                1. Release builds of each app scanned with a mobile application security tool.
                2. The app package checked for embedded secrets and debug settings.
                3. Local storage and network traffic inspected on a test device.
                4. Findings logged in the shared tracker against the mobile app entry.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each mobile app's release build has been scanned and tested for storage, transport and embedded secrets, with findings in the shared tracker."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Add a mobile security scan of the release build to the app pipeline"
                - "Search the built app package for keys and debug flags"
                - "Inspect local storage and traffic on a test device"
                - "Log each finding in the tracker against the mobile app"
            - name: Security testing walkthrough for new engineers
              description: |-
                ## Purpose
                New engineers meet the scanners at the worst moment, when a pull request goes red on day three and nobody explains why. A forty-five minute walkthrough of the tools, the gate, the triage policy and how to ask for help, given in the first week, prevents both blind suppressions and quiet panic.

                ## Milestones
                1. A short walkthrough deck or page covering each tool, the gate and the policy.
                2. A sample pull request with a seeded finding for new starters to fix.
                3. The walkthrough added to the standard first-week onboarding plan.
                4. Feedback from the first three new starters used to revise it.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A security testing walkthrough with a seeded practice pull request is part of first-week onboarding and has been revised after three new starters."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-page walkthrough of the scanners, gate and triage policy"
                - "Prepare a practice pull request with a seeded finding to fix"
                - "Ask the onboarding owner to add the walkthrough to week one"
                - "Collect feedback from the next three new starters"
            - name: Security testing for a payments or regulated application
              description: |-
                ## Purpose
                Applications that handle card data, health records or similar regulated data often carry explicit testing duties, such as scanning frequencies, penetration tests after significant change and documented remediation. Mapping those duties for your regulated scope, with PCI DSS as one common example, into the existing scan schedule avoids building a parallel programme.

                ## Milestones
                1. The regulated applications and their applicable standard named, with the compliance owner.
                2. Each testing duty listed with its required frequency, checked against the current standard.
                3. Each duty mapped to an existing scan, test or record, with gaps marked.
                4. Evidence of each duty stored for the assessor.

                ## Notes
                Confirm the exact requirements with your compliance lead or assessor; standards are revised and the wording matters.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A mapping table links every regulated testing duty to an existing scan or test with stored evidence, and each gap has an owner."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the compliance lead which applications and standards are in scope"
                - "List each testing duty and its frequency from the current standard"
                - "Map each duty to an existing scan or test and mark the gaps"
                - "Set up a folder for testing evidence for the assessor"
            - name: Security regression tests from past findings
              description: |-
                ## Purpose
                A vulnerability fixed once has a habit of coming back in a refactor two years later. Turning each confirmed high or critical finding into an automated test, a unit or integration test that fails if the flaw returns, makes the fix permanent and builds a suite that reflects your real weaknesses.

                ## Milestones
                1. A convention for naming and locating security regression tests.
                2. Regression tests written for the last ten confirmed high or critical findings.
                3. The tests running in the normal pipeline and failing on the original flaw.
                4. A rule added to the triage policy that closing a high finding needs a test.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten past high or critical findings each have an automated regression test in the pipeline, and the policy requires a test to close new ones."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Agree a folder and naming convention for security regression tests"
                - "Pick the last ten confirmed high or critical findings"
                - "Write a failing test for each against the vulnerable version"
                - "Add the test requirement to the triage policy"
            - name: Variant analysis after a confirmed vulnerability
              description: |-
                ## Purpose
                When a penetration tester or researcher finds one injection or authorisation bug, the same mistake is usually repeated elsewhere. Writing a query or rule for the root pattern and running it across every repository finds the siblings before someone else does, and is often the most valuable hour after a report.

                ## Milestones
                1. The root cause of the confirmed vulnerability described as a code pattern.
                2. A custom rule or query written for that pattern.
                3. The rule run across all repositories and every hit triaged.
                4. The rule kept in the pipeline so new variants are blocked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "After a confirmed vulnerability, a custom rule for its pattern has been run across all repositories, every hit triaged and the rule added to the pipeline."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the root cause of the confirmed vulnerability as a code pattern"
                - "Turn the pattern into a custom static analysis rule or query"
                - "Run the rule across every repository and triage each hit"
                - "Add the rule to the shared rule set for future pull requests"
            - name: Coverage-guided fuzzing of parsers and input handlers
              description: |-
                ## Purpose
                File parsers, protocol handlers and anything that decodes untrusted bytes fail in ways no scanner or human reviewer predicts. Coverage-guided fuzzing, with a harness for each parser and a short fuzz run in CI plus longer scheduled runs, finds the crashes and hangs that become denial of service or memory safety bugs.

                ## Milestones
                1. The functions that parse untrusted input listed and ranked by exposure.
                2. Fuzz harnesses written for the top three, with a seed corpus each.
                3. Short fuzz runs in CI and longer scheduled runs configured.
                4. Every crash triaged, fixed and its input added to the regression corpus.

                ## Notes
                Languages with native fuzzing support make the first harness quick. Start with the parser that handles uploads or inbound messages from the internet.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three parsers of untrusted input have fuzz harnesses running in CI and on a schedule, with every crash found triaged and kept in the corpus."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List every function that parses untrusted input and rank by exposure"
                - "Write a fuzz harness and seed corpus for the top-ranked parser"
                - "Add a short fuzz run to CI and a longer scheduled run"
                - "Triage each crash and keep its input in the regression corpus"
            - name: Automated authorisation tests for every role
              description: |-
                ## Purpose
                Broken access control tops the vulnerability lists precisely because scanners cannot know who should see what. A test suite that calls every endpoint as every role and tenant, and checks the response against an expected permission matrix, catches the missing check the moment someone adds an endpoint.

                ## Milestones
                1. A permission matrix of endpoints by role written as data.
                2. Test accounts for each role and two separate tenants.
                3. A test suite that calls each endpoint as each role and compares to the matrix.
                4. The suite running in CI and failing when a new endpoint is missing from the matrix.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A CI test suite checks every endpoint against a role and tenant permission matrix, and fails when an endpoint is unlisted or returns the wrong result."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Write the endpoint and role permission matrix as a data file"
                - "Create test accounts for each role in two tenants"
                - "Build a test that calls each endpoint as each role and checks the matrix"
                - "Make the suite fail when an endpoint is missing from the matrix"
            - name: Seeded vulnerability benchmark for your scanners
              description: |-
                ## Purpose
                Vendors quote detection rates on their own benchmarks, which tells you little about your languages and frameworks. Planting a set of known vulnerabilities in a branch of a real service and seeing which tools catch them gives an honest detection rate to compare tools and to track after every rule change.

                ## Milestones
                1. Twenty realistic vulnerabilities written into an isolated branch, covering ten classes.
                2. Every scanner run against the seeded branch.
                3. Detection recorded per tool and per vulnerability class.
                4. The branch kept so the benchmark can be rerun after tool or rule changes.

                ## Notes
                Keep the seeded branch out of any deployment pipeline and label it clearly in the repository.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A seeded branch with twenty known vulnerabilities produces a recorded detection rate for each scanner and vulnerability class."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose ten vulnerability classes relevant to your stack"
                - "Write two realistic instances of each into an isolated branch"
                - "Run every scanner against the branch and record what each detects"
                - "Rerun the seeded benchmark against current scanner versions @recurring(yearly)"
            - name: Software supply chain checks on the build pipeline
              description: |-
                ## Purpose
                Attackers increasingly go after the build rather than the code: a compromised pipeline plugin, a typosquatted package or an unpinned third-party action. Scanning pipeline definitions for unpinned actions and excessive token permissions, and checking new dependencies for typosquats, tests the path code takes to production.

                ## Milestones
                1. Pipeline definitions scanned for unpinned third-party actions and broad token permissions.
                2. Third-party pipeline steps pinned to a fixed version or commit.
                3. New dependency additions checked for typosquatting and very recent publication.
                4. Build provenance attestations generated for tier one releases.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All tier one pipelines pass a scan for unpinned steps and broad permissions, and their releases carry build provenance attestations."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Scan pipeline definitions for unpinned actions and broad permissions"
                - "Pin every third-party pipeline step to a fixed version"
                - "Add a check that flags newly added packages with lookalike names"
                - "Generate build provenance attestations for tier one releases"
---

# Application Security Testing

This area is for engineers and teams adding security testing to the way they already build software, and for whoever ends up owning the findings it produces. It starts with foundations (an inventory of what you ship, a baseline of what runs today, choosing and switching on static, dependency and secrets scanning, a triage policy and a merge gate), moves into the routines that keep findings flowing to the right people, then the skills worth practising, from reading a data-flow trace to manual testing with an intercepting proxy. After that come improvements such as authenticated dynamic scans, reachability and SBOMs, dated events like penetration tests and launch reviews, situations from a two-person startup to a backlog of thousands of old findings, and specialist work on fuzzing, custom rules and variant analysis.

What repeats is a weekly triage of new findings and a weekly look at dynamic scan results, monthly reviews of suppressions, remediation deadlines, secrets alerts and the metrics log, and a quarterly pass over rule tuning, scanner coverage and the gate policy. The Purchase decision, Remediation plan, Metrics log, Compliance control, Vendor and Operational checklist templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
