---
id: software-engineering.engineering-documentation-adrs
name: Engineering Documentation & ADRs
description: "An ADR habit, design document and README standards, runbooks people can follow, and the review rhythms that keep engineering knowledge current after people move on or forget."
category: business
version: 1.0.0
tags: [software-engineering, engineering-documentation-adrs, engineer, team, architecture-decision-records, design-docs, runbooks, docs-as-code]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - meeting-notes
    - course
    - purchase-decision
    - metrics-log
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Engineering Documentation & ADRs
          description: "Keeping design documents, architecture decision records, READMEs and runbooks current so knowledge survives people leaving or forgetting."
          projects:
            - name: Documentation inventory and ownership map
              description: |-
                ## Purpose
                Most teams have docs scattered across a wiki, repository READMEs, shared drives and chat threads, and nobody can say which ones are current. A single spreadsheet listing every significant document, where it lives, who owns it and when it was last touched shows where the real gaps are before anyone writes a new page.

                ## Milestones
                1. Every repository, wiki space and shared folder holding engineering docs listed in one sheet.
                2. Each significant document tagged with an owner, a type and a last-updated date.
                3. The ten most-used documents identified from page views or a quick team poll.
                4. Documents with no owner or no update in over a year flagged for a decision.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory sheet lists every significant engineering document with location, owner and last-updated date, and unowned pages are flagged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create an inventory sheet with columns for location, type, owner and last update"
                - "List every wiki space, repository and shared folder that holds engineering docs"
                - "Ask the team which five documents they open most often"
                - "Flag every page with no owner or no edit in the last twelve months"
            - name: Deciding where engineering docs live
              description: |-
                ## Purpose
                Engineers stop looking for documentation once they have been burned by finding three conflicting versions in three tools. Deciding which kinds of document live in the repository beside the code and which live in a wiki, and writing that rule down, ends the question for every future page.

                ## Milestones
                1. The document types the team writes listed: ADRs, design docs, READMEs, runbooks, how-to guides, meeting decisions.
                2. A home chosen for each type, with the reason in one sentence.
                3. The rule published on the team's main documentation landing page.
                4. Old locations given a pointer to the new home rather than left to drift.

                ## Notes
                A common default: ADRs, READMEs and runbooks in the repository so they are reviewed with code, longer design discussions and team process in the wiki.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published one-page rule states where each type of engineering document lives, agreed by the team and linked from the docs landing page."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the kinds of engineering document the team writes today"
                - "Propose a home for each type with a one-line reason"
                - "Agree the rule with the team in the next planning meeting"
                - "Add a pointer on each old location to the new home"
            - name: ADR template and numbering convention
              description: |-
                ## Purpose
                An architecture decision record is only useful if the next one looks like the last one, so readers know where to find the context, the decision and the consequences. Settling the template, file naming, numbering and status values once makes writing an ADR a fifteen-minute job instead of a formatting debate.

                ## Milestones
                1. A template chosen with sections for title, status, context, decision, consequences and alternatives.
                2. A numbering and file naming rule agreed, such as zero-padded numbers and a short slug.
                3. Status values defined: proposed, accepted, superseded, deprecated, rejected.
                4. The template committed to a decisions folder with a short how-to at the top.

                ## Notes
                The short Nygard format and MADR are both well known. Pick one and adapt it lightly rather than inventing a format.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An ADR template, numbering rule and status list are committed in a decisions folder and the first new ADR uses them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read two published ADR formats and note what each section is for"
                - "Draft the team's template with status, context, decision and consequences"
                - "Agree the file naming and numbering rule"
                - "Commit the template and a short how-to to the decisions folder"
            - name: Backfilling ADRs for decisions already made
              description: |-
                ## Purpose
                The decisions that confuse new readers most are the old ones: why this database, why this queue, why the monolith was kept. Writing short retrospective ADRs for the five to ten choices people still ask about turns repeated chat explanations into a link, while the people who made them are still around to check the facts.

                ## Milestones
                1. A list of past decisions people still ask about, gathered from chat and review comments.
                2. The original decision makers or the longest-serving engineers asked for the real context.
                3. Five or more retrospective ADRs written and marked accepted with their original date where known.
                4. Each backfilled ADR linked from the code or README it explains.

                ## Notes
                Write what was known at the time, not what is known now. Hindsight belongs in the consequences section or a later superseding ADR.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least five retrospective ADRs for past decisions are accepted in the decisions folder and linked from the code they explain."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Search chat and review threads for questions starting with why do we use"
                - "Pick the five past decisions people ask about most"
                - "Interview the engineer who knows each decision best for twenty minutes"
                - "Write and merge one retrospective ADR per decision"
            - name: README standard for every repository
              description: |-
                ## Purpose
                A README is the front door to a repository, and the usual one is either a generator's boilerplate or a wall of outdated setup steps. A short standard covering what the code does, how to run it locally, how to test and deploy it, who owns it and where the deeper docs are gives every repository the same reliable first page.

                ## Milestones
                1. A README checklist agreed with required sections and a target length.
                2. A README template committed to the shared templates repository.
                3. The five busiest repositories brought up to the standard.
                4. Each README's local setup steps tested by someone who did not write them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A README template exists and the five busiest repositories meet it, each with setup steps verified by a second engineer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the required README sections and keep the list under ten"
                - "Commit a README template to the shared templates repository"
                - "Rewrite the README of the busiest repository against the template"
                - "Ask a colleague to follow the setup steps on a clean machine"
            - name: Design document template with review states
              description: |-
                ## Purpose
                Big changes often start coding before anyone has written down the problem, the constraints or what was rejected, and the reasoning is lost by the second sprint. A design document template with a clear lifecycle from draft to in review to approved to implemented makes writing one feel normal, and makes it obvious which documents still describe reality.

                ## Milestones
                1. A template with sections for problem, goals and non-goals, proposal, alternatives, risks and rollout.
                2. A rule for which changes need a design doc, such as more than two weeks of work or a new dependency.
                3. Review states and who can move a document between them written down.
                4. The first real design doc written and reviewed using the template.

                ## Notes
                A good design doc is short enough to review in one sitting. Two to six pages covers most changes.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A design doc template and a written rule for when one is required are published, and one real design has gone through review with it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect two design docs the team thought were good and note their sections"
                - "Draft the template with goals, non-goals, alternatives and rollout"
                - "Write the rule for which changes need a design doc"
                - "Use the template for the next significant change on the roadmap"
            - name: Docs-as-code setup in the main repository
              description: |-
                ## Purpose
                Documentation kept in Markdown beside the code can be reviewed in the same pull request as the change it describes, which is the single best defence against drift. Setting up the folder structure, a local preview and a published site from the main branch makes writing docs as easy as writing code.

                ## Milestones
                1. A docs folder structure agreed and committed with an index page.
                2. A local preview command documented in the README.
                3. Docs published automatically from the main branch to an internal site.
                4. A Markdown linter running in CI on the docs folder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Docs in the main repository build, preview locally with one command and publish automatically when changes merge to main."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create a docs folder with an index page and three subfolders"
                - "Add a one-command local preview and note it in the README"
                - "Configure the pipeline to publish docs when main changes"
                - "Add a Markdown lint step for the docs folder"
            - name: Owner and review date on every page
              description: |-
                ## Purpose
                Pages without a named owner decay quietly, because everyone assumes someone else will fix them. Adding an owner and a next-review date to the top of each significant page, in frontmatter or a header block, gives every document a person to ask and a date by which it should be checked.

                ## Milestones
                1. A header format agreed with owner, last reviewed and next review fields.
                2. The header added to the twenty most-used pages.
                3. Owners named as teams or roles where people change often.
                4. A simple query or script that lists pages past their review date.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The twenty most-used engineering pages carry an owner and next-review date, and a report lists any page past its date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the owner and review date header format with the team"
                - "Add the header to the twenty most-used pages"
                - "Write a script or saved search that lists overdue pages"
                - "Tell each named owner which pages are now theirs"
            - name: Runbook template for operational tasks
              description: |-
                ## Purpose
                When a disk fills or a certificate expires, the engineer on duty needs the exact steps, not a paragraph of background. A runbook template with a trigger, impact, prerequisites, numbered steps, verification and rollback makes every runbook scannable under pressure and easy to review in calm.

                ## Milestones
                1. A runbook template committed with trigger, impact, access needed, steps, verification and rollback sections.
                2. The ten most common operational tasks listed from tickets and alert history.
                3. Runbooks written for the top three tasks using the template.
                4. Each runbook linked from the alert or dashboard that leads to it.

                ## Notes
                Start from the **Operational checklist** template. Write commands to copy and paste, and say what the output should look like when the step worked.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A runbook template exists and runbooks for the three most frequent operational tasks are written and linked from their alerts."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the ten operational tasks done most often from recent tickets"
                - "Commit a runbook template with verification and rollback sections"
                - "Write runbooks for the top three tasks"
                - "Link each runbook from its matching alert or dashboard"
            - name: Glossary of system and domain terms
              description: |-
                ## Purpose
                Every codebase grows its own vocabulary: a tenant in one service is an account in another, and internal service nicknames mean nothing to newer engineers. A maintained glossary of fifty or so terms, with the code name and the business meaning side by side, removes a constant low-level confusion from reviews and design docs.

                ## Milestones
                1. Terms collected from design docs, code identifiers and questions in chat.
                2. Each term defined in one or two sentences with its code name and synonyms.
                3. Conflicting uses of the same word flagged and a preferred term agreed.
                4. The glossary linked from the docs landing page and the main READMEs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A glossary of at least forty system and domain terms is published, with conflicting terms resolved and links from the main READMEs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Start a glossary page and add the ten terms questioned most often"
                - "Scan three design docs for undefined terms and add them"
                - "Flag words used with two meanings and agree a preferred term"
                - "Link the glossary from the landing page and main READMEs"
            - name: Definition of done that includes documentation
              description: |-
                ## Purpose
                Docs fall behind because updating them is nobody's step in the workflow. Adding one line to the team's definition of done, that any change to behaviour, configuration or operations updates the relevant README, runbook or ADR in the same pull request, makes documentation part of shipping rather than a separate chore.

                ## Milestones
                1. The definition of done updated with a specific documentation clause.
                2. Examples written of what counts as a doc-worthy change and what does not.
                3. The clause discussed in a retrospective after one sprint.
                4. A monthly spot-check of merged changes showing whether docs were updated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The team's definition of done names documentation updates, and a monthly spot-check of ten merged changes is recorded."
                cadence: rolling
              tasks:
                - "Add a documentation clause to the team's definition of done"
                - "Write three examples of changes that need a doc update"
                - "Spot-check ten merged pull requests for missing doc updates @recurring(monthly:26)"
                - "Raise the spot-check results at the next retrospective"
            - name: Weekly triage of proposed ADRs
              description: |-
                ## Purpose
                Proposed ADRs that sit for weeks without a decision teach people that writing one is pointless. A short weekly slot where proposed records are read, questions raised and each one either accepted, sent back or rejected keeps the decision log moving and gives authors a predictable answer.

                ## Milestones
                1. A fixed thirty-minute weekly slot booked with the people who can accept decisions.
                2. A saved view listing every ADR in proposed status with its age.
                3. No proposed ADR older than three weeks without a recorded outcome.
                4. Outcomes and reasons noted in the ADR itself, not only in the meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every proposed ADR receives an accepted, rejected or revise outcome within three weeks, recorded in the ADR's status."
                cadence: rolling
              tasks:
                - "Create a saved view of ADRs in proposed status sorted by age"
                - "Book a recurring thirty-minute triage slot with decision owners"
                - "Review proposed ADRs and record an outcome for each @recurring(weekly:wed)"
                - "Chase any author whose ADR has waited more than two weeks"
            - name: Monthly stale page sweep
              description: |-
                ## Purpose
                Stale documentation is worse than none, because readers trust it and act on it. A monthly half hour working through pages past their review date, confirming, fixing, merging or archiving each one, keeps the trusted set small and accurate instead of letting the whole wiki rot.

                ## Milestones
                1. A report of pages past their next-review date available on demand.
                2. Each overdue page given one of four outcomes: confirmed, updated, merged or archived.
                3. Owners of pages they cannot review asked to hand them over.
                4. The count of overdue pages tracked month to month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month every overdue page is confirmed, updated, merged or archived, and the overdue count is recorded."
                cadence: rolling
              tasks:
                - "Run the overdue pages report and pick the oldest ten"
                - "Confirm, update, merge or archive each overdue page @recurring(monthly:12)"
                - "Ask owners who cannot review their pages to reassign them"
                - "Record the overdue page count after each sweep"
            - name: Quarterly runbook walk-through
              description: |-
                ## Purpose
                A runbook that has never been followed by someone other than its author usually hides a missing permission, a renamed command or a step that only works from one laptop. Walking through two or three runbooks a quarter in a safe environment, with a fresh engineer at the keyboard, finds those gaps before an incident does.

                ## Milestones
                1. A rota of runbooks to walk through, oldest or riskiest first.
                2. Each walk-through done by an engineer who did not write the runbook.
                3. Every step that failed, confused or needed extra access fixed in the runbook.
                4. The walk-through date recorded on the runbook.

                ## Notes
                Run destructive steps only against staging or a sandbox, and agree any production walk-through in advance with whoever owns the service.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two runbooks a quarter are walked through by a non-author, with fixes merged and the walk-through date on each."
                cadence: cyclic
              tasks:
                - "Rank runbooks by risk and time since last walk-through"
                - "Walk through two runbooks with an engineer who did not write them @recurring(quarterly)"
                - "Fix every step that failed or confused the walker"
                - "Record the walk-through date at the top of each runbook"
            - name: Documentation prompt in the pull request template
              description: |-
                ## Purpose
                Reviewers rarely ask about docs unless something reminds them. A single question in the pull request template, asking which README, runbook or ADR the change affects, puts documentation in front of both author and reviewer at the exact moment the change is fresh.

                ## Milestones
                1. A documentation question added to the pull request template.
                2. Answer options kept short: updated, not needed, or a follow-up ticket link.
                3. Reviewers agreed to ask about docs when the answer looks wrong.
                4. The template change announced with two examples of good answers.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pull request template contains a documentation question and most merged changes answer it, judged on a sample of twenty."
                cadence: rolling
              tasks:
                - "Add a documentation question to the pull request template"
                - "Write two example answers and share them with the team"
                - "Sample twenty merged changes and count how many answered it"
                - "Adjust the wording if most answers are left blank"
            - name: Broken link and dead reference checks
              description: |-
                ## Purpose
                Broken links are the most visible sign of rot, and they multiply every time a repository is renamed or a wiki space is moved. A link checker in CI for docs-as-code, plus a monthly report for the wiki, catches dead links and references to deleted files or services before readers give up on the page.

                ## Milestones
                1. A link checker running on every docs change in CI.
                2. A scheduled report of broken links in the wiki or docs site.
                3. The existing backlog of broken links fixed or the pages archived.
                4. A rule for redirects when repositories or pages are renamed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Docs changes fail CI on broken internal links, and the monthly broken link report shows fewer than ten open items."
                cadence: rolling
              tasks:
                - "Add a link checking step to the docs pipeline"
                - "Schedule a broken link report for the wiki or docs site"
                - "Fix or archive pages from the broken link report @recurring(monthly:5)"
                - "Write a short rule for redirects when pages or repositories move"
            - name: Weekly design doc review slot
              description: |-
                ## Purpose
                Design documents get the best feedback when reviewers have a protected time to read them rather than skimming between meetings. A standing weekly slot, with the doc circulated two days ahead and silent reading in the first ten minutes, gives authors serious comments and a clear decision on whether to proceed.

                ## Milestones
                1. A weekly review slot booked with a rotating set of reviewers.
                2. A rule that docs are shared at least two working days before review.
                3. Each review ending with a recorded outcome: approved, approved with changes, or needs another pass.
                4. Review notes linked from the design doc.

                ## Notes
                Start from the **Meeting notes** template for the review record. Cancel the slot when nothing is ready rather than filling it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Design docs are reviewed in a weekly slot with a recorded outcome each time, and notes are linked from every reviewed document."
                cadence: rolling
              tasks:
                - "Book a recurring sixty-minute design review slot"
                - "Publish the two-day advance sharing rule for authors"
                - "Run the review and record the outcome in the doc @recurring(weekly:tue)"
                - "Link the review notes from each reviewed design doc"
            - name: Documentation debt backlog
              description: |-
                ## Purpose
                Gaps in documentation are noticed all the time, in incidents, in onboarding questions, in reviews, and then forgotten because there is nowhere to put them. A labelled backlog of documentation debt, triaged monthly and fed into sprint planning, turns those complaints into small tickets that actually get done.

                ## Milestones
                1. A documentation label created in the issue tracker.
                2. A quick way for anyone to file a doc gap from chat or a page footer.
                3. The backlog triaged monthly with each item sized and prioritised.
                4. At least two documentation tickets pulled into each sprint.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A labelled documentation backlog is triaged every month and at least two documentation tickets close each sprint."
                cadence: rolling
              tasks:
                - "Create a documentation label in the issue tracker"
                - "Add a file a doc gap link to the docs site footer"
                - "Triage and size the documentation backlog @recurring(monthly:20)"
                - "Bring two documentation tickets to each sprint planning"
            - name: Quarterly README audit across repositories
              description: |-
                ## Purpose
                Repositories multiply faster than anyone updates their READMEs, and a service with a three-line README is a liability the first time its author is on holiday. A quarterly scripted check against the README standard, with the worst five fixed each time, keeps the whole estate readable without a big clean-up project.

                ## Milestones
                1. A script that checks each repository's README for the required sections.
                2. A ranked list of repositories with the weakest READMEs.
                3. The five weakest READMEs fixed by their owning teams each quarter.
                4. Archived or dead repositories marked as such in their READMEs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter a scripted README audit runs and the five weakest READMEs are brought up to the standard."
                cadence: cyclic
              tasks:
                - "Write a script that checks READMEs for the required section headings"
                - "Run the README audit and rank repositories by gaps @recurring(quarterly)"
                - "Open tickets with owning teams for the five weakest READMEs"
                - "Mark dead repositories as archived at the top of their README"
            - name: Yearly documentation ownership refresh
              description: |-
                ## Purpose
                Reorganisations, departures and new services leave page owners pointing at people who no longer work on the system or no longer work here. A yearly pass over every owner field, reassigning orphans to current teams, keeps the stale page sweep and review dates meaningful.

                ## Milestones
                1. Every owner field compared against the current team and staff list.
                2. Pages owned by departed people or dissolved teams reassigned.
                3. Owners confirmed by the teams themselves, not assigned silently.
                4. The ownership map from the inventory updated.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Once a year every engineering page owner is checked against the current organisation and no page is owned by a departed person or team."
                cadence: cyclic
              tasks:
                - "Export all page owner fields to a sheet"
                - "Compare owners against the current team list and reassign orphans @recurring(yearly)"
                - "Ask each team lead to confirm their list of owned pages"
                - "Update the ownership map in the documentation inventory"
            - name: Writing ADR context and consequences well
              description: |-
                ## Purpose
                The context and consequences sections are what make an ADR useful five years later, and they are the ones most often left thin. Practising how to state the forces at play, the constraints, the options and the costs accepted, on real decisions, turns ADRs from announcements into explanations.

                ## Milestones
                1. Three good public ADRs studied and their context sections compared.
                2. One of your own past ADRs rewritten with a fuller context section.
                3. Consequences written to include the negative ones and what would trigger a revisit.
                4. Feedback from a colleague on whether a newcomer could follow the reasoning.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One rewritten ADR includes explicit constraints, at least two negative consequences and a revisit trigger, reviewed by a colleague."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find three published ADRs and copy their context sections side by side"
                - "Rewrite the context of one of your own ADRs with constraints and forces"
                - "Add the negative consequences and a revisit trigger"
                - "Ask a colleague whether a newcomer could follow the reasoning"
            - name: Plain technical writing for engineers
              description: |-
                ## Purpose
                Most engineers were never taught to write, and it shows in docs that bury the point in paragraph four. A short structured course on plain style, leading with the conclusion, short sentences, active voice and concrete examples, makes every later document faster to write and quicker to read.

                ## Milestones
                1. A short technical writing course or guide chosen and scheduled.
                2. Weekly practice on a real document from your own work.
                3. Before and after versions of one long page compared for length and clarity.
                4. A personal checklist of your three most common writing habits to fix.

                ## Notes
                Start from the **Course** template. Free technical writing courses aimed at engineers exist from several large software companies.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A technical writing course is completed and one long page is rewritten at least a quarter shorter with the main point in the first paragraph."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose a free technical writing course for engineers"
                - "Rewrite one paragraph of a real document using the week's lesson @recurring(weekly:thu)"
                - "Compare before and after word counts for one long page"
                - "Write a checklist of your three most common writing habits"
            - name: Diagrams as code with the C4 model
              description: |-
                ## Purpose
                Architecture diagrams drawn once in a drawing tool are wrong within months and nobody can edit them. Learning the C4 levels (context, containers, components, code) and producing them as text in the repository means diagrams are versioned, diffed and reviewed like everything else.

                ## Milestones
                1. The four C4 levels understood and the two most useful for the team chosen.
                2. A diagrams-as-code tool picked and rendering in the docs pipeline.
                3. A system context and a container diagram committed for the main system.
                4. Diagram sources reviewed in a pull request alongside a related change.

                ## Notes
                Most teams only maintain the context and container levels. Component diagrams go stale fast unless generated.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "System context and container diagrams for the main system exist as text in the repository and render in the published docs."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a short introduction to the four C4 diagram levels"
                - "Pick a text-based diagram tool that renders in the docs pipeline"
                - "Draw the system context diagram as code and commit it"
                - "Add the container diagram and ask for review in a pull request"
            - name: Writing runbook steps for the 3am reader
              description: |-
                ## Purpose
                At three in the morning the reader of a runbook is tired, stressed and possibly new to the service. Writing for that person means one action per step, exact commands, expected output, a clear stop point and a named escalation, and it is a skill worth practising on calm days.

                ## Milestones
                1. One existing runbook rewritten with one action and one expected result per step.
                2. Every command made copy-pasteable with placeholders clearly marked.
                3. A decision point added where the reader should stop and escalate.
                4. The rewrite tested by someone unfamiliar with the service.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One runbook is rewritten with exact commands, expected output for each step and an escalation point, and a non-expert completes it in staging."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick the runbook with the most questions in recent incidents"
                - "Split every step into one action with an expected result"
                - "Add a clear stop and escalate point with a named contact"
                - "Ask an engineer unfamiliar with the service to follow it in staging"
            - name: Structuring docs with the Diataxis framework
              description: |-
                ## Purpose
                Docs that mix tutorial, reference and explanation on one page serve none of those readers well. The Diataxis framework separates tutorials, how-to guides, reference and explanation, and sorting the team's existing pages into those four kinds shows exactly which ones are missing.

                ## Milestones
                1. The four Diataxis kinds understood with an example of each from the team's docs.
                2. The top twenty pages classified, with mixed pages flagged.
                3. Two mixed pages split into the right kinds.
                4. The docs navigation reorganised around the four kinds or a clear equivalent.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The top twenty pages are classified into the four Diataxis kinds, two mixed pages are split, and the navigation reflects the structure."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the Diataxis overview and note one example of each kind"
                - "Classify the twenty most-used pages and flag mixed ones"
                - "Split two mixed pages into separate how-to and reference pages"
                - "Propose a navigation structure based on the four kinds"
            - name: Writing alternatives considered honestly
              description: |-
                ## Purpose
                Alternatives sections are often a list of straw men knocked down to justify a choice already made, and reviewers learn to skip them. Writing each rejected option at its strongest, with the conditions under which it would win, makes the decision credible and tells future readers when to reopen it.

                ## Milestones
                1. At least two real alternatives described for your next design doc or ADR.
                2. Each alternative given its best case, cost and the reason it lost.
                3. A do-nothing option included with its real cost.
                4. A reviewer confirms the alternatives are fair, not straw men.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The next design doc or ADR lists at least two alternatives plus do nothing, each with its best case, and a reviewer confirms they are fair."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every option seriously discussed for your current decision"
                - "Write each alternative at its strongest with its cost"
                - "Add a do-nothing option and its real cost"
                - "Ask a reviewer who favoured another option to check the fairness"
            - name: Reviewing and editing a colleague's document
              description: |-
                ## Purpose
                Reviewing a design doc or runbook well is different from reviewing code: the questions are about clarity, missing reasoning and what the reader needs, not syntax. Learning to give structured feedback, starting with the main point, then gaps, then wording, makes doc reviews faster and kinder.

                ## Milestones
                1. A short checklist for document review written: purpose clear, audience right, gaps, length.
                2. Two colleagues' documents reviewed using it.
                3. Feedback split into must-fix and suggestions.
                4. Authors asked which comments helped most.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A document review checklist exists and has been used on two colleagues' documents, with feedback labelled must-fix or suggestion."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a five-point checklist for reviewing a document"
                - "Review one colleague's design doc using the checklist"
                - "Label each comment as must-fix or suggestion"
                - "Ask the author which comments were most useful"
            - name: Code comments versus external docs
              description: |-
                ## Purpose
                Code comments that restate the code are noise, while the reason for an odd workaround or a magic number is exactly what belongs there. Agreeing what goes in comments, what goes in a module README and what deserves an ADR stops both empty comments and missing explanations.

                ## Milestones
                1. A short guide on what belongs in comments, module docs and ADRs.
                2. Examples of good why comments from the team's own code collected.
                3. Five unexplained workarounds in the codebase given a why comment or ADR link.
                4. The guide referenced in the coding standards page.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide on comments versus docs is published and five unexplained workarounds in the code now carry a why comment or ADR link."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find five workarounds in the code with no explanation"
                - "Draft a one-page guide on comments, module docs and ADRs"
                - "Add a why comment or ADR link to each workaround"
                - "Link the guide from the coding standards page"
            - name: Choosing a docs site generator or wiki platform
              description: |-
                ## Purpose
                Picking a documentation platform because someone used it at a previous job often leads to a migration two years later. Comparing three options against the team's real needs, such as Markdown in the repository, search, access control, diagrams and cost, gives a decision that will last.

                ## Milestones
                1. Requirements listed and weighted: authoring format, search, permissions, diagrams, hosting, cost.
                2. Three candidates shortlisted, at least one static site generator and one hosted wiki.
                3. A one-day trial of the top two with real pages.
                4. A decision recorded as an ADR with the reasons and exit cost.

                ## Notes
                Start from the **Purchase decision** template. Check export formats before choosing: a platform you cannot leave is a hidden cost.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documentation platform is chosen after scoring three options against weighted requirements, recorded in an ADR."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List and weight the team's requirements for a docs platform"
                - "Shortlist three platforms including one static site generator"
                - "Trial the top two with five real pages each"
                - "Record the choice and its exit cost in an ADR"
            - name: Docs search that engineers actually use
              description: |-
                ## Purpose
                If search returns a three-year-old page above the current one, engineers fall back to asking in chat. Improving search ranking, titles and synonyms, and reviewing what people search for and fail to find, makes the docs the first place people look.

                ## Milestones
                1. Search analytics or logs enabled on the docs site.
                2. The twenty most common failed searches identified.
                3. Titles, synonyms or new pages added for the top ten failures.
                4. Archived pages excluded or ranked below current ones.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The ten most common failed searches each return a relevant page, and archived pages no longer outrank current ones."
                cadence: rolling
              tasks:
                - "Turn on search analytics for the docs site"
                - "List the twenty most common searches that found nothing useful"
                - "Fix titles or add pages for the top failed searches @recurring(monthly:8)"
                - "Exclude archived pages from default search results"
            - name: Superseding and revisiting old ADRs
              description: |-
                ## Purpose
                Decisions age: the library chosen in an ADR may now be unmaintained, or the scale assumption may be ten times wrong. A clear process for superseding an ADR, linking old and new, plus a quarterly look at records whose revisit triggers may have fired, keeps the decision log honest rather than a museum.

                ## Milestones
                1. A rule that ADRs are never edited after acceptance, only superseded.
                2. Superseded records linking forward and new records linking back.
                3. A list of ADRs with explicit revisit triggers or assumptions.
                4. At least one outdated decision superseded with a new ADR.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A supersede rule is written into the ADR how-to, and each quarter ADRs with revisit triggers are checked and the outcome noted."
                cadence: rolling
              tasks:
                - "Add the supersede, never edit rule to the ADR how-to"
                - "List ADRs that state assumptions or revisit triggers"
                - "Check ADR revisit triggers against current reality @recurring(quarterly)"
                - "Write a superseding ADR for the most outdated decision"
            - name: Which decisions deserve an ADR
              description: |-
                ## Purpose
                Not every choice needs a record, and a decision log full of trivia hides the decisions that matter. Agreeing a simple test, such as hard to reverse, affects more than one team, or adds a dependency, tells engineers when to write one and when a pull request description is enough.

                ## Milestones
                1. Three to five criteria agreed for when an ADR is required.
                2. Examples of decisions that do and do not qualify written beside the criteria.
                3. The criteria added to the ADR how-to and the design doc rule.
                4. A month later, recent decisions checked against the criteria.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written criteria for when an ADR is required are in the ADR how-to, with at least three examples on each side of the line."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft three to five criteria for requiring an ADR"
                - "Write three examples that qualify and three that do not"
                - "Agree the criteria with the team and add them to the how-to"
                - "Check last month's decisions against the criteria"
            - name: Migrating a legacy wiki into docs-as-code
              description: |-
                ## Purpose
                Old wikis collect thousands of pages, most of them dead, and migrating everything just moves the mess. A migration that first decides which pages are worth keeping, then converts and redirects only those, leaves a smaller, trusted set in the repository and a read-only archive for the rest.

                ## Milestones
                1. Every wiki page classified as migrate, merge, archive or delete from the inventory.
                2. A conversion script tested on fifty representative pages.
                3. Kept pages migrated with owners and review dates.
                4. The old wiki set to read-only with redirects or a clear banner.

                ## Notes
                Expect to keep a fifth or less of a long-lived wiki. Agree with the team before deleting anything, and keep an export of the whole wiki.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Kept wiki pages are in the repository with owners, the rest are archived, and the old wiki is read-only with a banner pointing to the new home."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Export a full backup of the current wiki"
                - "Classify each page as migrate, merge, archive or delete"
                - "Test a conversion script on fifty representative pages"
                - "Set the old wiki to read-only with a banner to the new docs"
            - name: Generated reference for config flags and CLI commands
              description: |-
                ## Purpose
                Hand-written lists of configuration options and command-line flags are out of date the week after someone adds a new one. Generating reference pages from the code or schema in the build means the reference is always exactly as current as the release it describes.

                ## Milestones
                1. The configuration and CLI surfaces that need reference docs identified.
                2. Descriptions moved into the code or schema as the single source.
                3. Reference pages generated during the docs build.
                4. A CI check that fails if a new option has no description.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Configuration and CLI reference pages are generated from source during the build, and CI fails when a new option lacks a description."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the config files and CLI tools that need reference pages"
                - "Move option descriptions into the code or schema"
                - "Generate the reference pages as part of the docs build"
                - "Add a CI check for options with no description"
            - name: Reader feedback on documentation pages
              description: |-
                ## Purpose
                Readers know immediately when a page is wrong, but they rarely tell anyone. A was this helpful control or a report a problem link on each page, routed to the owner and reviewed weekly, turns silent frustration into specific fixes.

                ## Milestones
                1. A feedback control or report link added to every docs page.
                2. Feedback routed to the page owner or the documentation backlog.
                3. A weekly look at new feedback with each item acknowledged.
                4. The pages with the most negative feedback fixed first.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every docs page has a feedback route, new feedback is reviewed weekly, and the five worst-rated pages have been fixed."
                cadence: rolling
              tasks:
                - "Add a report a problem link to the docs page footer"
                - "Route feedback to the documentation backlog with the page name"
                - "Review new documentation feedback and acknowledge each item @recurring(weekly:fri)"
                - "Fix the five pages with the most negative feedback"
            - name: Pruning and archiving obsolete documentation
              description: |-
                ## Purpose
                Out-of-date pages for retired services, abandoned designs and old processes clutter search and mislead readers. A yearly prune that archives pages for anything decommissioned, with a visible banner rather than silent deletion, keeps the live set small and the history available.

                ## Milestones
                1. Pages for retired services and abandoned projects listed.
                2. An archive location and banner format agreed.
                3. Obsolete pages moved to the archive with a banner and date.
                4. Archive excluded from default search.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every page about a decommissioned service or abandoned design is archived with a dated banner and excluded from default search."
                cadence: cyclic
              tasks:
                - "List services and projects retired in the last year"
                - "Agree an archive banner with date and replacement link"
                - "Archive obsolete pages with the banner @recurring(yearly)"
                - "Exclude the archive from default docs search"
            - name: One-page system overview for the codebase
              description: |-
                ## Purpose
                Nobody can find the single page that says what the system is, what its main parts are and how a request flows through it. A one-page overview with a context diagram, the main services and data stores, and links to the deeper docs gives every engineer a shared map to point at.

                ## Milestones
                1. The main services, data stores and external dependencies listed.
                2. A context diagram and a request flow summary on one page.
                3. Each component linked to its README, ADRs and runbooks.
                4. The overview reviewed by two engineers from different parts of the system.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page system overview with a diagram and links to each component's docs is published and reviewed by two engineers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the main services, data stores and external dependencies"
                - "Draw a context diagram and write a request flow summary"
                - "Link each component to its README, ADRs and runbooks"
                - "Ask two engineers from different teams to review the page"
            - name: Knowledge capture before a key engineer leaves
              description: |-
                ## Purpose
                Knowledge walks out the door on someone's last day, usually in the form of the undocumented scripts, quirks and history only they knew. A structured handover in their notice period, with recorded walkthroughs, ADRs for undocumented decisions and named successors for each area, saves months of archaeology.

                ## Milestones
                1. The departing engineer's areas of sole knowledge listed with them.
                2. A successor named for each area.
                3. Recorded walkthroughs or written notes for each area, reviewed by the successor.
                4. Undocumented decisions written up as ADRs before the last day.

                ## Notes
                Start in the first week of the notice period. The last week is always busier than planned.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Before the engineer's last day, every area of sole knowledge has a named successor and reviewed handover notes or recordings."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List with the departing engineer everything only they know"
                - "Name a successor for each area on the list"
                - "Schedule recorded walkthroughs for each area"
                - "Write ADRs for decisions that exist only in their head"
            - name: Team documentation day
              description: |-
                ## Purpose
                One focused day a quarter, with no feature work and a clear list of documentation debt, achieves more than months of good intentions. A docs day with pairs, a target list and a short show and tell at the end clears the worst gaps and reminds everyone what good docs look like.

                ## Milestones
                1. A date agreed and protected from feature work with the team's lead.
                2. A target list drawn from the documentation backlog and stale page report.
                3. Pairs assigned to items with a definition of done for each.
                4. A short demo at the end and the count of items closed recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A docs day runs with a prepared target list and closes at least one documentation item per participant."
                cadence: cyclic
              tasks:
                - "Agree and protect a date for the docs day"
                - "Build a target list from the backlog and stale page report"
                - "Run the docs day with pairs and an end-of-day demo @recurring(quarterly)"
                - "Record items closed and carry the rest to the backlog"
            - name: Documentation pack for an audit or due diligence
              description: |-
                ## Purpose
                Auditors, acquirers and enterprise customers ask for architecture overviews, decision history, operational procedures and change control evidence, often at two weeks' notice. Assembling a documentation pack from the ADRs, design docs and runbooks you already keep turns a scramble into a review.

                ## Milestones
                1. The requested documents listed against what already exists.
                2. Gaps filled with short, accurate documents rather than polished new ones.
                3. Sensitive details such as credentials and internal hostnames checked and removed.
                4. The pack delivered with an index and a named contact for questions.

                ## Notes
                Ask legal or compliance colleagues what may be shared and under what agreement before sending anything outside the company.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An indexed documentation pack covering every requested item is delivered with sensitive details removed and a named contact."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Map the request list against existing documents"
                - "Write short documents for each gap"
                - "Check every document for credentials and internal hostnames"
                - "Deliver the pack with an index and a named contact"
            - name: Documentation handover to another team
              description: |-
                ## Purpose
                Handing a service to another team usually comes with a call and a link to a repository, and the receiving team discovers the gaps during their first incident. A documented handover with an agreed checklist, runbooks walked through together and open ADRs explained makes ownership change cleanly.

                ## Milestones
                1. A handover checklist agreed between both teams.
                2. READMEs, runbooks and ADRs reviewed by the receiving team.
                3. Two runbooks walked through by the receiving team with the old owners present.
                4. Owner fields and the inventory updated to the new team.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The receiving team signs off a handover checklist after reviewing the docs and walking through two runbooks, and owner fields are updated."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree a handover checklist with the receiving team"
                - "Ask the receiving team to review READMEs, runbooks and ADRs"
                - "Walk through two runbooks together"
                - "Update every owner field to the receiving team"
            - name: Launch documentation pack for a new service
              description: |-
                ## Purpose
                Launching a new service without a README, runbooks and a recorded decision trail means the first incident is handled from memory. A short launch pack, required before go-live, covers what the service does, how to deploy and roll it back, its alerts and runbooks, and the ADRs behind its design.

                ## Milestones
                1. A launch documentation checklist agreed for new services.
                2. README, deployment and rollback steps written and tested.
                3. Runbooks linked from every alert the service raises.
                4. The service added to the system overview and the docs inventory.

                ## Notes
                Start from the **Operational checklist** template for the go-live list.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Before go-live the new service has a README, tested deploy and rollback steps, runbooks for every alert and its ADRs linked."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the launch documentation checklist for new services"
                - "Draft the README with deploy and rollback steps"
                - "Write a runbook for each alert the service raises"
                - "Add the service to the system overview and inventory"
            - name: Lightweight ADRs for a solo or two-person team
              description: |-
                ## Purpose
                Solo engineers and tiny teams assume they will remember why they chose something, and six months later they do not. A stripped-down ADR habit, a few lines per decision in a single file in the repository, costs minutes and saves re-litigating choices with yourself or a future hire.

                ## Milestones
                1. A single decisions file created in the repository.
                2. A three-line format: date, decision, why.
                3. The last five significant decisions recorded.
                4. A monthly note of any new decisions made.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A decisions file in the repository records at least five past decisions and gains an entry each month a decision is made."
                cadence: rolling
              tasks:
                - "Create a decisions file in the repository root"
                - "Record the last five significant decisions in three lines each"
                - "Add any new decisions from the month to the file @recurring(monthly:28)"
                - "Promote any decision a new hire questions into a full ADR"
            - name: Docs habits for a team with no technical writer
              description: |-
                ## Purpose
                Without a technical writer, documentation quality depends on whoever happens to care. Sharing the load through a rota of doc owners, monthly peer editing swaps and a short style guide spreads both the work and the standards across the team.

                ## Milestones
                1. A one-page team style guide covering tone, headings and code samples.
                2. A rota naming a docs champion for each month.
                3. A monthly peer edit swap where pairs review each other's pages.
                4. The style guide linked from the docs contribution page.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A team style guide exists, a monthly docs champion is named, and peer edit swaps happen each month."
                cadence: rolling
              tasks:
                - "Draft a one-page style guide for engineering docs"
                - "Set up a monthly docs champion rota"
                - "Pair up for a peer edit swap of one page each @recurring(monthly:14)"
                - "Link the style guide from the docs contribution page"
            - name: Async decision records for a distributed team
              description: |-
                ## Purpose
                Distributed teams across time zones lose decisions made in calls that half the team could not attend. Making written proposals and ADRs the default route for decisions, with a comment window and a weekly digest of what was decided, keeps everyone informed without more meetings.

                ## Milestones
                1. A rule that decisions affecting the team are proposed in writing with a comment window.
                2. A comment window length agreed that covers every time zone.
                3. A weekly digest of decisions made and proposals open.
                4. Call decisions written up as ADRs or notes within a day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Team decisions are proposed in writing with a comment window, and a weekly decisions digest is published every week."
                cadence: rolling
              tasks:
                - "Write the rule for written proposals and comment windows"
                - "Agree a comment window that covers every team time zone"
                - "Publish a digest of decisions made and proposals open @recurring(weekly:mon)"
                - "Write up any decision made in a call within one working day"
            - name: Documenting an inherited codebase with no docs
              description: |-
                ## Purpose
                Inheriting a codebase with no docs and departed authors is common for a new tech lead or a team absorbing another's work. Documenting it in order of risk, starting with how to deploy, roll back and recover, then the main flows, then the history, makes it safe to change long before it is fully understood.

                ## Milestones
                1. How to build, deploy and roll back written and tested.
                2. A list of the riskiest parts of the system and any known traps.
                3. A system overview and the main request flows documented.
                4. Retrospective ADRs written for the decisions that shape future work.

                ## Notes
                Write down what you find as you find it, even rough. Archaeology done twice is the most expensive kind.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Within sixty days the inherited codebase has tested deploy and rollback docs, a risk list, a system overview and its key decisions recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Start a running notes file for everything you discover"
                - "Write and test the build, deploy and rollback steps"
                - "List the riskiest modules and known traps"
                - "Write retrospective ADRs for the decisions that constrain future work"
            - name: Documentation freshness metrics
              description: |-
                ## Purpose
                Freshness and coverage are measurable, and a few numbers tracked monthly show whether the routines are working or whether docs are quietly decaying. Tracking pages past review, repositories meeting the README standard, ADRs proposed and accepted, and runbook coverage of alerts gives the team a trend instead of an impression.

                ## Milestones
                1. Four or five metrics chosen with clear definitions.
                2. A script or query that produces each one.
                3. A monthly record of the numbers kept for at least six months.
                4. One improvement chosen each quarter from the worst trend.

                ## Notes
                Start from the **Metrics log** template. Avoid counting pages written: it rewards volume over accuracy.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five documentation metrics are recorded monthly for six months and one improvement is chosen each quarter from the trend."
                cadence: rolling
              tasks:
                - "Choose and define five documentation freshness metrics"
                - "Write scripts or queries for each metric"
                - "Record the documentation metrics in the log @recurring(monthly:3)"
                - "Pick one improvement each quarter from the worst trend"
            - name: Prose linting with a docs style checker
              description: |-
                ## Purpose
                Prose linters catch the same issues a careful editor would, such as passive voice, weasel words, inconsistent product names and banned terms, on every docs change. Adding one to the docs pipeline with a small, agreed rule set raises the floor of quality without a human reviewing every sentence.

                ## Milestones
                1. A prose linter chosen and running locally.
                2. A starter rule set agreed, including the team's spelling and product names.
                3. The linter running in CI on docs changes, warnings only at first.
                4. Rules promoted to errors once the backlog is cleared.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A prose linter with an agreed rule set runs in CI on every docs change and fails the build on error-level rules."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Install a prose linter and run it on the docs folder"
                - "Agree a starter rule set with team spelling and product names"
                - "Add the linter to CI as warnings only"
                - "Promote agreed rules to errors once the backlog is cleared"
            - name: Cross-repository ADR index and decision search
              description: |-
                ## Purpose
                Large organisations end up with hundreds of ADRs spread across dozens of repositories, and nobody can find whether a decision about message queues already exists. A generated index that collects every ADR, with status, date, team and tags, makes decisions searchable across the organisation and surfaces conflicts.

                ## Milestones
                1. A common ADR metadata format agreed across teams.
                2. A job that collects ADRs from every repository into one index.
                3. The index searchable by tag, status, team and date.
                4. Conflicting accepted decisions on the same topic flagged for owners.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A generated index lists every ADR across repositories with status, team and tags, and conflicting decisions are flagged."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree common ADR metadata fields with other teams"
                - "Write a job that collects ADRs from every repository"
                - "Publish the index with search by tag, status and team"
                - "Flag conflicting accepted decisions to their owners"
            - name: AI-assisted doc drafting with human review rules
              description: |-
                ## Purpose
                Drafting tools can turn a pull request, a call transcript or a code module into a first draft of a README section or ADR in seconds, and they can also invent plausible nonsense. Agreeing where drafts help, what must be checked by a human and how drafted docs are marked keeps the speed without poisoning the trusted set.

                ## Milestones
                1. Uses agreed where drafting helps, such as summarising a design discussion into an ADR draft.
                2. A rule that every drafted command, number and claim is checked by a named engineer.
                3. A policy on what code or data may be sent to external tools.
                4. Two drafted documents reviewed and compared with hand-written ones.

                ## Notes
                Check your organisation's policy on sharing source code with external services before trying this on private code.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written rules state where AI drafting is allowed, what a human must verify and what may be shared, and two drafted documents have passed review."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check the organisation's policy on sharing code with external tools"
                - "Ask the agent to draft an ADR from a recent design discussion"
                - "Verify every command, number and claim in the draft"
                - "Write the team's rules for drafted documentation"
---

# Engineering Documentation & ADRs

Engineering knowledge lives in people's heads until the day it is needed and the person has left, and this area is about writing down the right things once and keeping them true. It starts with the foundations (an inventory of what exists, one home for docs, an ADR template, backfilled decisions, README and design document standards, runbooks and a glossary), then the routines that stop pages going stale, the writing skills that make docs worth reading, decisions about platforms, search and pruning, the events that force documentation such as a departure or a launch, situations for solo engineers, distributed teams and inherited codebases, and specialist work on docs metrics, prose linting and decision indexes.

What repeats is a Wednesday triage of proposed ADRs, a Tuesday design review slot, a Friday look at reader feedback, monthly sweeps of stale pages, broken links and documentation debt on different days, quarterly runbook walk-throughs and README audits, and a yearly ownership refresh. The Operational checklist, Meeting notes, Course, Purchase decision and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
