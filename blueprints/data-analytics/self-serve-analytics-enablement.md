---
id: data-analytics.self-serve-analytics-enablement
name: Self-Serve Analytics Enablement
description: "Governed datasets, user tiers and access rules, certified content, training, office hours and champions, and the adoption reviews that let non-analysts answer their own questions without queueing for the data team."
category: business
version: 1.0.0
tags: [data-analytics, self-serve-analytics-enablement, team, enterprise, manager, governed-datasets, bi-adoption, analytics-training]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - feedback-themes
    - course
    - onboarding-plan
    - risk-register
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Self-Serve Analytics Enablement
          description: "Giving non-analysts governed datasets, templates and training so they can answer their own questions without queueing for the data team."
          projects:
            - name: Self-serve demand audit of the data team queue
              description: |-
                ## Purpose
                Before building anything, it pays to know which questions business users actually send to the data team and how many of them a well-made dataset could have answered. Classifying three months of tickets and chat requests by subject and difficulty usually shows that a handful of subject areas, often sales, customers and orders, make up most of the repeat questions. That ranked list decides where self-serve starts.

                ## Milestones
                1. Three months of requests from the ticket system, chat channel and email gathered in one sheet.
                2. Each request tagged by subject area, requesting team and whether a curated dataset could have answered it.
                3. The share of requests judged self-servable worked out, with the top five subject areas ranked by volume.
                4. A one-page summary shared with the data lead and the heads of the two busiest requesting teams.

                ## Notes
                Tag a sample of fifty with a colleague first and compare labels. If you disagree on more than a few, tighten the definition of self-servable before tagging the rest.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A tagged list of at least three months of requests exists, with the self-servable share and the top five subject areas stated in a shared summary."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the last three months of data requests from every channel into one sheet"
                - "Tag each request by subject area, team and whether it was self-servable"
                - "Rank the subject areas by the number of self-servable requests"
                - "Ask the agent to summarise the tagged requests into a one-page findings note"
            - name: Self-serve charter and scope agreement
              description: |-
                ## Purpose
                Self-serve programmes stall when nobody has said what business users may build, what stays with analysts and who answers when a self-built number is wrong. A one-page charter, agreed by the data lead and two business sponsors, sets those lines before the first dataset ships and gives everyone something to point at when disputes arise.

                ## Milestones
                1. A charter draft covering scope, user tiers, support model and what counts as an official number.
                2. Named business sponsors from at least two departments who have read and accepted it.
                3. A clear statement of which questions remain analyst-only, with the reason for each.
                4. The charter published where every self-serve user can find it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page self-serve charter signed off by the data lead and two business sponsors is published on the self-serve front page."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the decisions the charter must settle, from scope to support hours"
                - "Draft the charter on one page using the findings of the demand audit"
                - "Walk two business sponsors through the draft and record their changes"
                - "Publish the agreed charter and link it from the self-serve help channel"
            - name: User tiers for viewers, explorers and builders
              description: |-
                ## Purpose
                Not everyone wants the same thing from self-serve: most people want to filter a finished report, a smaller group wants to drag fields into a new chart, and a few want to combine datasets and publish for others. Naming these tiers, with what each may do and what training each needs, keeps permissions and training proportionate instead of one size for all.

                ## Milestones
                1. Three or four tiers defined, each with a one-line description of what a person in it can do.
                2. Permissions in the BI tool mapped to each tier.
                3. The training required to move up each step written down.
                4. Every current BI user assigned to a tier.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tier definition document exists and every current BI tool user is assigned to exactly one tier in the user list."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull the current BI user list with each person's role and last login"
                - "Write a one-line definition for the viewer, explorer and builder tiers"
                - "Map each tier to the BI tool's permission roles"
                - "Assign every existing user to a tier and flag anyone unclear"
            - name: Self-serve tool fit test against real user tasks
              description: |-
                ## Purpose
                Most organisations already own a BI tool with an exploration mode, but whether non-analysts can actually use it is a different question from what the vendor demo showed. Giving five business users ten real questions from the demand audit and watching them try reveals whether to switch on existing features, add a dedicated exploration tool or fix the data first.

                ## Milestones
                1. Ten representative questions chosen from the demand audit, each with a known correct answer.
                2. Five business users from different teams observed attempting them in the current tool.
                3. Completion rate, time taken and points of confusion recorded for each question.
                4. A written decision on whether the current tool is enough, with the gaps that drove it.

                ## Notes
                Start from the **Purchase decision** template if the test points to buying something. Most failures in these tests turn out to be confusing field names rather than the tool itself.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the self-serve tool, backed by observed completion rates from five users on ten real questions."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick ten real questions from the demand audit and work out the correct answers"
                - "Recruit five business users from different teams for a 45-minute session each"
                - "Watch each user attempt the questions and note where they get stuck"
                - "Write up completion rates and the decision on tool changes"
            - name: First three governed datasets for business users
              description: |-
                ## Purpose
                A governed dataset is a curated, documented table or explore with business-friendly field names, tested joins and an owner, built so a non-analyst cannot easily get the wrong answer. Starting with the three subject areas that drive the most repeat requests gives users something genuinely useful within weeks and proves the model before scaling it.

                ## Milestones
                1. Three subject areas chosen from the top of the demand audit ranking.
                2. Each dataset published with plain-language field names, descriptions and a named owner.
                3. Totals in each dataset reconciled to the official reported figure for the last full month.
                4. Each dataset tested by two business users who answered a real question with it.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three governed datasets are live in the BI tool, each reconciled to an official monthly total and used by at least two business users."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose the three subject areas with the most self-servable requests"
                - "Hide technical columns in the first dataset and rename the rest in business language"
                - "Reconcile each dataset's monthly total with the official reported figure"
                - "Ask two business users to answer a live question with each dataset and note problems"
            - name: Role-based access and row-level security for self-serve
              description: |-
                ## Purpose
                Opening data to more people is only safe if each person sees what their role allows: a regional manager sees their region, HR data stays with HR. Setting up group-based permissions and row-level rules in the BI tool before broad rollout avoids the scramble of withdrawing access after something sensitive has already been seen.

                ## Milestones
                1. Groups in the BI tool linked to the organisation's directory groups rather than individual accounts.
                2. Row-level rules written and tested for any dataset split by region, team or client.
                3. Sensitive columns such as salary or personal contact details masked or excluded from self-serve datasets.
                4. A test log showing three users in different roles seeing only what they should.

                ## Notes
                Ask your data protection or security lead to review the rules for any dataset containing personal data. Test by logging in as a test user in each role, not by reading the configuration.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every self-serve dataset uses directory-linked groups, with row-level rules tested for three roles and the test results recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List each self-serve dataset with who should and should not see each part"
                - "Link BI tool groups to the matching directory groups"
                - "Write and test row-level rules for datasets split by region or team"
                - "Record a test log of what three users in different roles can see"
            - name: Certified content badge and criteria
              description: |-
                ## Purpose
                Once hundreds of people can build charts, viewers need a way to tell an official number from someone's experiment. A certified badge with written criteria (governed source, reviewed logic, a named owner, a review date) gives the organisation one visible signal of trust and gives builders a clear route to earning it.

                ## Milestones
                1. Written criteria for certification, no longer than half a page.
                2. A badge, tag or folder in the BI tool that only the data team can apply.
                3. The ten most-viewed official reports certified against the criteria.
                4. A short note on the self-serve front page explaining what the badge means.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Certification criteria are published and the ten most-viewed official reports carry the badge in the BI tool."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft half a page of certification criteria with the data lead"
                - "Set up a badge or tag in the BI tool that only the data team can apply"
                - "Certify the ten most-viewed official reports against the criteria"
                - "Explain the badge in two sentences on the self-serve front page"
            - name: Shared, team and personal workspace layout
              description: |-
                ## Purpose
                Without a deliberate folder structure, a BI tool fills up within months with copies called final, final v2 and test, and nobody can find the real version. Setting out certified, team and personal spaces with clear rules on who can save where keeps experimentation free while protecting the places people go for official numbers.

                ## Milestones
                1. A workspace structure with certified, team and personal areas set up in the BI tool.
                2. Save permissions for each area matching the user tiers.
                3. Existing content moved into the new structure, with orphaned items listed for owners to claim.
                4. Naming conventions for team folders written on one page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The BI tool has certified, team and personal spaces with permissions matching user tiers, and all existing content sits in one of them."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Sketch the folder structure with certified, team and personal spaces"
                - "Set save permissions for each space by user tier"
                - "Move existing content into the new spaces and list orphaned items"
                - "Write a one-page naming convention for team folders"
            - name: Self-serve adoption baseline
              description: |-
                ## Purpose
                Self-serve claims are easy to make and hard to prove, so measure the starting point before launch. Recording weekly active explorers, content created by non-analysts and the volume of routine requests to the data team gives a baseline that every later review compares against, and stops the programme being judged on anecdote.

                ## Milestones
                1. Three to five adoption measures chosen and defined in a sentence each.
                2. Current values recorded from the BI tool's usage statistics and the request queue.
                3. A tracking sheet set up with the baseline month as its first row.
                4. The baseline shared with the sponsors named in the charter.

                ## Notes
                Start from the **Metrics log** template. Weekly active explorers, meaning people who built or changed a query, tells you far more than total logins.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tracking sheet holds baseline values for at least three defined adoption measures and has been shared with the charter sponsors."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose three to five adoption measures and define each in a sentence"
                - "Pull current values from the BI tool's usage statistics"
                - "Count last month's routine requests to the data team"
                - "Set up the tracking sheet with the baseline month as row one"
            - name: Weekly self-serve office hours
              description: |-
                ## Purpose
                A standing half hour when anyone can bring a half-built chart or a confusing number catches problems while they are small and teaches far more than a manual. Run by a rota of analysts, office hours also show the data team which fields and datasets confuse people most.

                ## Milestones
                1. A weekly slot booked with a video link and a rota of at least two analysts.
                2. A running log of questions asked, with the dataset and the fix for each.
                3. Office hours advertised in the help channel and on the self-serve front page.
                4. Twelve consecutive sessions held, with recurring themes passed to the dataset owners.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Twelve consecutive weekly office hours held, with a question log and at least three recurring themes passed to dataset owners."
                cadence: rolling
              tasks:
                - "Book a recurring 30-minute slot and set up a rota of two analysts"
                - "Advertise office hours in the help channel and on the front page"
                - "Run office hours and log each question with its fix @recurring(weekly:wed)"
                - "Send the month's recurring themes to the relevant dataset owners"
            - name: Help channel triage rota
              description: |-
                ## Purpose
                Questions posted in a self-serve chat channel that sit unanswered for two days teach people to go back to emailing their favourite analyst. A named person each week who answers, redirects or turns repeat questions into documentation keeps the channel worth using.

                ## Milestones
                1. A weekly rota with one named responder from the data team or champion network.
                2. A target response time, such as one working day, agreed and pinned in the channel.
                3. Repeat questions turned into short help articles or dataset descriptions.
                4. Median response time measured monthly and kept within the target.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The help channel has a named weekly responder and a median first response within the agreed target for three consecutive months."
                cadence: rolling
              tasks:
                - "Set up a weekly responder rota covering the next quarter"
                - "Pin the response time target and channel rules at the top of the channel"
                - "Hand the help channel to the next responder with open threads listed @recurring(weekly:mon)"
                - "Turn any question asked three times into a help article"
            - name: Monthly self-serve adoption review
              description: |-
                ## Purpose
                Adoption measures only matter if someone looks at them and acts. A monthly 30-minute review of active explorers, new content and routine request volume against the baseline shows which teams are taking to self-serve, which have stalled and where to send training or a champion next.

                ## Milestones
                1. The adoption tracking sheet updated each month from the BI tool and request queue.
                2. One team showing growth and one team that has stalled named in each review.
                3. A single action agreed per review, with an owner.
                4. Six consecutive monthly reviews recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews recorded, each comparing adoption with the baseline and naming one action with an owner."
                cadence: rolling
              tasks:
                - "Update the adoption sheet with last month's figures @recurring(monthly:9)"
                - "Name one team that grew and one that stalled, with a likely reason"
                - "Agree one action from the review and assign an owner"
            - name: Quarterly governed dataset recertification
              description: |-
                ## Purpose
                Source systems change, fields get renamed and a dataset that was accurate at launch can quietly drift. Each quarter, the owner of every governed dataset confirms that totals still reconcile, descriptions still hold and the dataset is still used, or marks it for deprecation.

                ## Milestones
                1. A list of every governed dataset with its owner and last review date.
                2. Each dataset's monthly total reconciled to the official figure this quarter.
                3. Field descriptions checked against any source changes since the last review.
                4. Datasets with no use in ninety days flagged for deprecation.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every governed dataset has a recorded review within the last quarter, with reconciliation results and a keep or deprecate decision."
                cadence: cyclic
              tasks:
                - "Send each dataset owner their recertification checklist @recurring(quarterly)"
                - "Reconcile each dataset's monthly total with the official figure"
                - "Flag datasets with no queries in ninety days for deprecation"
                - "Record each review date and outcome in the dataset list"
            - name: Personal content clean-up cycle
              description: |-
                ## Purpose
                Personal spaces grow fast, and stale copies of old reports turn up in search results and get shared as if they were current. A quarterly sweep that warns owners of content untouched for six months, then archives what nobody claims, keeps search usable without policing anyone's experiments.

                ## Milestones
                1. A rule agreed for what counts as stale, such as no views or edits in six months.
                2. A regular report of stale personal content.
                3. Owners notified two weeks before archiving, with an easy way to keep items.
                4. Archived content recoverable for a set period before it is removed.

                ## Notes
                Archive rather than delete on the first pass. People forgive a tidy-up they can undo.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly sweep has run twice, each notifying owners and archiving unclaimed stale content, with archive recovery available."
                cadence: rolling
              tasks:
                - "Agree the staleness rule with the charter sponsors"
                - "Build a report of personal content with no views or edits in six months"
                - "Notify owners and archive unclaimed stale content after two weeks @recurring(quarterly)"
            - name: Self-serve access reviews and leavers check
              description: |-
                ## Purpose
                Access granted for a project often outlives the project, and leavers' accounts sometimes keep scheduled deliveries running. A monthly leavers check and a quarterly recertification by managers keep the user list matching reality, which auditors and security teams will ask about sooner or later.

                ## Milestones
                1. A monthly comparison of BI tool accounts with the HR leavers list.
                2. Leavers' accounts disabled and their scheduled deliveries reassigned.
                3. Managers asked each quarter to confirm their team members' access tiers.
                4. A record of each review kept for audit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly leaver checks and quarterly manager recertifications completed for two quarters, with records kept."
                cadence: rolling
              tasks:
                - "Compare BI tool accounts with the leavers list and disable matches @recurring(monthly:14)"
                - "Reassign scheduled reports owned by disabled accounts"
                - "Send managers their team's access list to confirm or change @recurring(quarterly)"
            - name: Monthly release notes for self-serve users
              description: |-
                ## Purpose
                New fields, renamed measures and retired datasets confuse users most when they discover them by accident. A short monthly note listing what changed, what is new and one tip keeps users informed, and reading rates show whether anyone is paying attention.

                ## Milestones
                1. A release notes format of no more than one screen.
                2. Changes collected from dataset owners in the week before each issue.
                3. Notes posted in the help channel and on the front page each month.
                4. Six consecutive issues published.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly release notes published, each listing dataset changes and one usage tip."
                cadence: rolling
              tasks:
                - "Set a one-screen format with sections for new, changed and retired items"
                - "Collect changes from dataset owners and publish the release notes @recurring(monthly:3)"
                - "Ask the agent to draft the tip of the month from recent office hours questions"
            - name: Field and dataset request backlog
              description: |-
                ## Purpose
                Once people use governed datasets, they ask for fields that are missing, and those requests vanish if they live in chat threads. A visible backlog, sorted monthly by how many people asked and how hard each is to add, turns user demand into the data team's roadmap for self-serve.

                ## Milestones
                1. One place where users submit requests for new fields or datasets.
                2. Each request recorded with requester, team, use case and number of supporters.
                3. A monthly sort that marks requests as next, later or declined with a reason.
                4. Requesters told the outcome of each decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A field request backlog exists with every request triaged monthly and requesters told the outcome."
                cadence: rolling
              tasks:
                - "Set up a simple request form for new fields or datasets"
                - "Sort the field request backlog into next, later or declined @recurring(monthly:17)"
                - "Tell each requester the decision and the reason"
            - name: Quarterly self-serve user pulse survey
              description: |-
                ## Purpose
                Usage statistics show what people do but not why they gave up halfway through building a chart. A five-question pulse each quarter, asking about confidence, trust in the numbers and the biggest blocker, catches frustration before it turns into a return to spreadsheets.

                ## Milestones
                1. Five questions written, including one open question on the biggest blocker.
                2. The survey sent to all explorer and builder tier users each quarter.
                3. Open answers grouped into themes.
                4. One change made each quarter in response, and announced.

                ## Notes
                Start from the **Feedback themes** template for grouping the open answers. Keep the same core questions each quarter so trends are comparable.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two quarterly pulse surveys completed, each with grouped themes and one announced change made in response."
                cadence: cyclic
              tasks:
                - "Write five pulse questions, keeping four of them fixed every quarter"
                - "Send the pulse survey to explorer and builder users @recurring(quarterly)"
                - "Group the open answers into themes"
                - "Announce the change you made in response to the last pulse"
            - name: Team self-serve champions network
              description: |-
                ## Purpose
                Colleagues in your own team who know the tool answer questions faster than any central team, and they know which numbers the team actually needs. Recruiting one champion per department, giving them builder access and a monthly sync, spreads support without growing the data team.

                ## Milestones
                1. One volunteer champion named in each of the main departments, with their manager's agreement.
                2. Champions given builder access and an early look at new datasets.
                3. A monthly 45-minute sync held where champions share questions from their teams.
                4. Champion time recognised in their objectives or reviews.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Champions are named in at least four departments, each with manager agreement, and six monthly syncs have been held."
                cadence: rolling
              tasks:
                - "List the departments that need a champion and ask their managers for a volunteer"
                - "Give champions builder access and preview rights on new datasets"
                - "Run the champions sync and collect questions from their teams @recurring(monthly:24)"
                - "Ask each champion's manager to note the role in their objectives"
            - name: Explorer training course on governed datasets
              description: |-
                ## Purpose
                Training that walks through every button of the BI tool is forgotten within a week. A 90-minute hands-on course built around real questions on the organisation's own governed datasets, finishing with each participant answering a question from their own work, produces explorers who actually come back.

                ## Milestones
                1. A course outline built around five real questions from the demand audit.
                2. Exercises using only governed datasets, with answer keys.
                3. A pilot session run with six to ten people and changes made from their feedback.
                4. Each participant finishing by answering one question from their own work.

                ## Notes
                Start from the **Course** template. Keep query languages out of this course; explorers should never need them.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A 90-minute explorer course has been piloted with at least six people, each of whom answered a question from their own work by the end."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose five real questions from the demand audit for the exercises"
                - "Write the exercises and answer keys on the governed datasets"
                - "Run a pilot session with six to ten people"
                - "Revise the course from the pilot feedback"
            - name: Writing plain-language dataset guides
              description: |-
                ## Purpose
                Analysts tend to document datasets for other analysts, with column names, grain and join keys, which leaves business users no wiser. Learning to write a one-page guide that says what questions the dataset answers, what it cannot answer and which measure to use for common needs is a skill the whole data team needs.

                ## Milestones
                1. A one-page guide format covering purpose, common questions, traps and the owner.
                2. Two guides written and tested on business users who had not seen the dataset.
                3. Feedback from the test readers used to refine the format.
                4. Guides published for all three of the first governed datasets.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page guide exists for each governed dataset, and two business users have answered a question using only the guide."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft a one-page guide format with purpose, common questions, traps and owner"
                - "Write a guide for the most used governed dataset"
                - "Ask two business users to answer a question using only the guide"
                - "Refine the format and write guides for the remaining datasets"
            - name: Common self-serve pitfalls clinic
              description: |-
                ## Purpose
                The same mistakes recur in self-built analysis: averaging averages, counting orders twice after joining to line items, filtering on the wrong date or comparing a part month with a full one. A short clinic that shows each pitfall on the organisation's own data, with the fix, prevents more wrong numbers than any amount of locking down.

                ## Milestones
                1. A list of the six or so mistakes most often seen at office hours.
                2. A worked example of each on a governed dataset, showing the wrong and the right answer.
                3. A 45-minute clinic delivered to explorers and builders.
                4. The examples saved as a reference page linked from the front page.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pitfalls reference page with at least five worked examples on real datasets is published and the clinic has been delivered once."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the mistakes seen most often at office hours and in the help channel"
                - "Build a wrong and a right example of each on a governed dataset"
                - "Deliver a 45-minute pitfalls clinic to explorers and builders"
                - "Publish the examples as a reference page linked from the front page"
            - name: Business-friendly field naming and curation
              description: |-
                ## Purpose
                Three hundred fields named like cust_acq_dt_utc in one dataset defeat a non-analyst before they start. Learning to curate the exploration layer, by hiding technical columns, grouping fields by topic, naming measures the way people say them and offering a small set of default measures, is the craft that makes self-serve work.

                ## Milestones
                1. Naming rules written: business words, units in names, no abbreviations, consistent wording.
                2. Fields in one governed dataset grouped into five to eight topics.
                3. Technical keys and duplicate fields hidden from explorers.
                4. The field count visible to explorers reduced, with before and after counts recorded.

                ## Notes
                Borrow measure names from the agreed metric dictionary where one exists, so self-serve and official reports use the same words.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One governed dataset has been curated under written naming rules, with the visible field count before and after recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write naming rules for fields and measures on one page"
                - "Group one dataset's fields into five to eight topics"
                - "Hide technical keys and duplicate fields from the explorer view"
                - "Record the visible field count before and after curation"
            - name: Train-the-trainer for team champions
              description: |-
                ## Purpose
                Champions get asked questions they were never trained to answer, such as why their chart disagrees with the finance report. A short programme that teaches them to run the explorer course, diagnose common mismatches and know when to escalate turns enthusiastic volunteers into reliable first-line support.

                ## Milestones
                1. A two-session programme covering how to teach the explorer course and diagnose mismatches.
                2. Each champion co-delivering one explorer session with an analyst.
                3. An escalation guide stating which problems go straight to the data team.
                4. At least four champions running sessions on their own.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least four champions have each delivered an explorer session on their own after co-delivering one with an analyst."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Plan two train-the-trainer sessions for champions"
                - "Pair each champion with an analyst to co-deliver an explorer session"
                - "Write an escalation guide listing problems that go to the data team"
                - "Observe each champion's first solo session and give feedback"
            - name: Two-minute how-to video library
              description: |-
                ## Purpose
                People look for help at the moment they are stuck, and a two-minute screen recording showing exactly how to add a filter or compare this year with last beats a forty-page manual. A small library of short videos on the real datasets, added to steadily, answers the questions office hours hear every week.

                ## Milestones
                1. A list of the twenty tasks users ask about most.
                2. Recording conventions agreed: under two minutes, real governed data, one task per video.
                3. The first ten videos recorded and linked from the front page.
                4. One new video added each month from office hours themes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least ten how-to videos under two minutes are linked from the front page, with one added each month for three months."
                cadence: rolling
              tasks:
                - "List the twenty how-to questions heard most at office hours"
                - "Agree recording conventions for length, data and naming"
                - "Record the first ten videos and link them from the front page"
                - "Record one new video from this month's office hours themes @recurring(monthly:11)"
            - name: Self-serve onboarding for new starters
              description: |-
                ## Purpose
                New joiners form their habits in the first month, and if nobody shows them governed datasets they will learn to ask a colleague for a spreadsheet. A standard onboarding step, with access granted on day one, a starter task on their team's dataset and an invitation to office hours, makes self-serve the default from the start.

                ## Milestones
                1. A self-serve step added to the standard onboarding checklist with people operations.
                2. Viewer access granted automatically for new starters on day one.
                3. A starter exercise for each main department using its own governed dataset.
                4. New starters' first-month usage checked against the rest of the organisation.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The self-serve step is in the standard onboarding checklist and new starters receive viewer access on their first day."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask people operations to add a self-serve step to the onboarding checklist"
                - "Arrange automatic viewer access for new starters on their first day"
                - "Write a starter exercise for each main department's dataset"
                - "Send this month's new starters an office hours invitation @recurring(monthly:2)"
            - name: Sanity checks before sharing a self-built number
              description: |-
                ## Purpose
                The risk in self-serve is not that people build things, but that a wrong figure reaches a leadership meeting with nobody having checked it. Teaching a five-step check (compare with the certified total, confirm the date range, look for duplicates, review filters, ask whether the size is plausible) gives builders a habit that catches most errors before they travel.

                ## Milestones
                1. A five-step sanity checklist written on one page.
                2. The checklist built into the explorer course and the pitfalls clinic.
                3. A note in the BI tool's sharing area reminding builders to check before publishing.
                4. Three self-built analyses reviewed against the checklist and the findings shared.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page sanity checklist is published, taught in the explorer course and has been applied to three real self-built analyses."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the five-step sanity checklist on one page"
                - "Add the checklist to the explorer course and the pitfalls clinic"
                - "Review three recent self-built analyses against the checklist"
                - "Share what the reviews found in the help channel"
            - name: Starter analysis template library
              description: |-
                ## Purpose
                Most business questions are variations on a few shapes: a weekly trend, a comparison with last year, a breakdown by region, a simple funnel. A library of starter templates built on governed datasets lets explorers clone a working analysis and change the filters, rather than starting from an empty canvas.

                ## Milestones
                1. The six most common question shapes identified from the demand audit.
                2. A template for each, built on a governed dataset and certified.
                3. A short note on each template saying when to use it and what to change.
                4. Template use tracked and the library reviewed each quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six certified starter templates are published with usage notes, and clone counts are reviewed each quarter."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Identify the six most common question shapes in the demand audit"
                - "Build and certify a starter template for each shape"
                - "Write a three-line usage note on each template"
                - "Review template clone counts and retire unused ones @recurring(quarterly)"
            - name: Deciding which data stays analyst-only
              description: |-
                ## Purpose
                Some data should not be in self-serve at all: individual salaries, health information, unreleased financial results, or measures so complex that a self-built version is almost certain to be wrong. Making these calls explicitly, with reasons and an alternative route for each, avoids both reckless openness and the quiet over-restriction that kills adoption.

                ## Milestones
                1. A list of candidate datasets and measures considered for exclusion.
                2. A decision recorded for each: open, open with restrictions or analyst-only.
                3. A reason and an alternative route, such as a certified report or request form, for every exclusion.
                4. The decisions reviewed by the data protection or security lead.

                ## Notes
                Restrict by role before excluding entirely. Much sensitive data can be shared safely at an aggregated level, but that call belongs with your data protection lead.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record lists every excluded dataset or measure with a reason and alternative route, reviewed by the data protection or security lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List datasets and measures that may be too sensitive or complex for self-serve"
                - "Decide for each whether it is open, restricted or analyst-only"
                - "Write the reason and alternative route for each exclusion"
                - "Ask the data protection or security lead to review the decisions"
            - name: Spreadsheet export policy and connected alternative
              description: |-
                ## Purpose
                Exports to spreadsheets are where governed numbers go to fork: once a file is emailed around, nobody knows which version is current or whether access rules still apply. Rather than banning exports, decide which datasets may be exported and at what level of detail, and offer a live spreadsheet connection for people who genuinely need to work in cells.

                ## Milestones
                1. Export volumes by dataset and user measured from the BI tool logs.
                2. A policy stating which datasets allow exports and at what level of detail.
                3. A live spreadsheet connection to governed data offered and tested with two finance or operations users.
                4. Export volume compared three months after the change.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written export policy is in force and export volume has been compared before and three months after the change."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pull export volumes by dataset and user from the BI tool logs"
                - "Draft the export policy with the charter sponsors"
                - "Test a live spreadsheet connection with two heavy spreadsheet users"
                - "Compare export volumes three months after the policy starts"
            - name: Query speed guardrails for explorers
              description: |-
                ## Purpose
                Nothing drives a business user back to emailing an analyst faster than a chart that spins for two minutes and times out. Pre-aggregated tables for common views, sensible default date ranges and row limits keep explorations fast, and checking the slowest queries each month shows where the next fix belongs.

                ## Milestones
                1. The twenty slowest self-serve queries of the last month identified.
                2. Default date ranges and row limits set on each governed dataset.
                3. Aggregate tables added for the three most common slow patterns.
                4. Median query time for explorers recorded before and after.

                ## Notes
                Agree any change that affects compute spend with whoever owns platform costs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Median explorer query time has been measured before and after guardrails, with aggregate tables in place for the three most common slow patterns."
                cadence: rolling
              tasks:
                - "List the twenty slowest self-serve queries from last month's logs"
                - "Set default date ranges and row limits on each governed dataset"
                - "Add aggregate tables for the three most common slow query patterns"
                - "Check the slowest explorer queries and pick one to fix @recurring(monthly:19)"
            - name: Self-serve front door page
              description: |-
                ## Purpose
                Users who cannot find where to start give up in the first five minutes. A single front page in the BI tool or intranet listing the governed datasets, starter templates, office hours, the help channel and what the certified badge means gives everyone one link to remember and one link to share.

                ## Milestones
                1. A front page with sections for datasets, templates, training, help and rules.
                2. The page set as the BI tool's home page or pinned for all users.
                3. Every training session and help article linking back to it.
                4. Page visits checked after a month and the layout adjusted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A front door page is live and set as the default landing page, with visits checked after one month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the front page sections for datasets, templates, training, help and rules"
                - "Set the page as the BI tool home page or pin it for all users"
                - "Link the page from every help article and training session"
                - "Check visits after a month and rearrange the least used sections"
            - name: Promotion path from personal to certified content
              description: |-
                ## Purpose
                Some of the most useful analyses in an organisation are built by business users in their personal folders and quietly copied by dozens of colleagues. A route for nominating popular personal content, reviewing its logic and republishing it as certified captures that work and rewards the builders who did it.

                ## Milestones
                1. A monthly report of personal content viewed by more than a set number of colleagues.
                2. A nomination route for builders or champions to propose content for certification.
                3. A review step where an analyst checks the logic against the certification criteria.
                4. At least three pieces of user-built content promoted, with their builders credited.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three pieces of user-built content have been reviewed and promoted to certified, each crediting its builder."
                cadence: rolling
              tasks:
                - "Set a view threshold for personal content worth reviewing"
                - "Review the most viewed personal content for promotion @recurring(monthly:27)"
                - "Check nominated content against the certification criteria"
                - "Credit the builder publicly when their content is promoted"
            - name: Natural language query feature pilot
              description: |-
                ## Purpose
                Many BI tools now offer a type-a-question feature that writes the query for you, and leadership will ask whether it can replace training. A bounded pilot on one governed dataset, scored against questions with known answers, tells you how often it is right, how it fails and whether users can tell the difference.

                ## Milestones
                1. A test set of thirty questions with known correct answers on one governed dataset.
                2. The feature's answer to every question scored as correct, wrong or unclear.
                3. Five business users observed using it, noting whether they spotted wrong answers.
                4. A recorded decision to enable, restrict or defer, with the evidence.

                ## Notes
                Wrong answers that look plausible are the main risk. Count those separately from obvious failures.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A thirty-question test set has been scored and a decision to enable, restrict or defer the feature is recorded with the accuracy figures."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Write thirty test questions with known answers on one governed dataset"
                - "Score the feature's answer to each question as correct, wrong or unclear"
                - "Observe five business users trying the feature on their own questions"
                - "Record the decision with the accuracy figures"
            - name: Self-serve launch for the first department
              description: |-
                ## Purpose
                Launching with a date, a sponsor's announcement and hands-on sessions in the first week creates momentum that a quiet go-live never does. Picking one department with a willing leader and a high request volume gives the programme a visible first success to point to.

                ## Milestones
                1. A launch department chosen with a sponsor who will announce it.
                2. Access, datasets and the front page checked a week before launch.
                3. Two hands-on sessions held in launch week.
                4. Request volume from the department compared for the four weeks before and after.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Launch week has happened with two hands-on sessions, and the department's request volume has been compared four weeks before and after."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose the launch department and confirm the sponsor"
                - "Check access, datasets and the front page a week before launch"
                - "Run two hands-on sessions in launch week"
                - "Compare the department's request volume before and after launch"
            - name: Self-serve showcase afternoon
              description: |-
                ## Purpose
                Seeing a colleague from sales show how they answered their own question in ten minutes persuades sceptics more than any statistic from the data team. A showcase where four or five business users present something they built celebrates builders and gives others ideas they can copy.

                ## Milestones
                1. Four or five presenters from different teams lined up, each with a ten-minute slot.
                2. Each presenter's analysis checked by an analyst beforehand.
                3. The session recorded and posted on the front page.
                4. Attendance and new explorer sign-ups in the following fortnight noted.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A showcase with at least four business presenters has been held and recorded, with sign-ups in the following fortnight noted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask champions to nominate colleagues who built something useful"
                - "Check each presenter's analysis with them before the session"
                - "Run and record the showcase afternoon"
                - "Post the recording on the front page and count new sign-ups"
            - name: Team build sprint on governed data
              description: |-
                ## Purpose
                Teams that have attended training but not built anything need a nudge from learning to doing. A half-day sprint where a team brings its own open questions, with analysts on hand, ends with each person having built and shared at least one working analysis on governed data.

                ## Milestones
                1. A team and date agreed, with three to five open questions gathered beforehand.
                2. Analysts and the team's champion available throughout.
                3. Each participant publishing one analysis to the team space.
                4. Follow-up use of those analyses checked a month later.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every participant in the sprint has published at least one analysis to the team space, with usage checked a month later."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree a team and date with the team's manager"
                - "Gather three to five open questions from the team beforehand"
                - "Run the half-day sprint with analysts and the champion on hand"
                - "Check a month later which sprint analyses are still being used"
            - name: Annual self-serve programme review
              description: |-
                ## Purpose
                Once a year the programme needs a step back: what adoption has done against the baseline, what users say, what it costs to run and what to change next year. A prepared review with the sponsors keeps funding and attention honest, and sets next year's priorities from evidence.

                ## Milestones
                1. Twelve months of adoption figures, pulse themes and support load summarised.
                2. The cost of running the programme, including analyst time, estimated.
                3. A review meeting held with the charter sponsors.
                4. Next year's three priorities agreed and the charter updated.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual review has been held with the charter sponsors, producing three agreed priorities and an updated charter."
                cadence: cyclic
              tasks:
                - "Book the annual review with the charter sponsors @recurring(yearly)"
                - "Summarise twelve months of adoption, pulse themes and support load"
                - "Estimate the analyst time spent running the programme"
                - "Update the charter with the three agreed priorities"
            - name: Manager's guide to team self-serve habits
              description: |-
                ## Purpose
                Managers set the tone: if they still email the data team for every number, their team will too. A short guide and a quarterly look at their team's usage help a manager ask for self-built answers in meetings, protect time for learning and spot when a question really needs an analyst.

                ## Milestones
                1. A one-page guide for managers on asking for self-built analysis and when to escalate.
                2. Each manager given a view of their team's self-serve usage.
                3. Thirty minutes of protected learning time agreed for each new explorer.
                4. A quarterly check where managers review their team's usage.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A manager guide is published and at least five managers have reviewed their team's usage view in a quarterly check."
                cadence: rolling
              tasks:
                - "Write a one-page guide for managers on self-serve expectations"
                - "Give each manager a view of their team's self-serve usage"
                - "Agree protected learning time for each new explorer with their manager"
                - "Look at your team's self-serve usage and discuss one example @recurring(quarterly)"
            - name: Enterprise rollout in business-unit waves
              description: |-
                ## Purpose
                In a large organisation, launching self-serve everywhere at once overwhelms support and exposes every dataset gap at the same time. Rolling out in waves of two or three business units, each with its own datasets, champions and launch, lets the team fix problems once and arrive at each new unit with a proven playbook.

                ## Milestones
                1. Business units grouped into waves by readiness, data availability and demand.
                2. A playbook covering datasets, access, champions, training and launch.
                3. The first wave completed with its lessons written into the playbook.
                4. Later waves scheduled with named sponsors in each unit.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Business units are grouped into scheduled waves, the first wave is complete and the playbook has been updated from its lessons."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Score each business unit on readiness, data availability and demand"
                - "Group the units into waves of two or three"
                - "Write the rollout playbook from the first department launch"
                - "Update the playbook after the first wave and schedule the next"
            - name: Self-serve with a data team of one or two
              description: |-
                ## Purpose
                Small central teams cannot run office hours, champions, release notes and recertification all at once. Choosing a minimum version, such as one governed dataset, a fortnightly drop-in, a help channel and a single front page, delivers most of the benefit and leaves time for the rest of the job.

                ## Milestones
                1. A shortlist of the three self-serve elements that matter most for your organisation.
                2. One governed dataset built for the busiest requesting team.
                3. A support routine that takes no more than two hours a week, written down.
                4. Request volume checked after three months to see whether the time spent has paid back.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written minimum self-serve plan exists, one governed dataset is live and support time has stayed under two hours a week for three months."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick the three self-serve elements that would save you the most time"
                - "Build one governed dataset for the busiest requesting team"
                - "Write down a support routine capped at two hours a week"
                - "Compare request volume three months later with the baseline"
            - name: Restricted self-serve for HR and finance data
              description: |-
                ## Purpose
                HR and finance teams often have the most repetitive reporting and the most sensitive data, so they are both the biggest winners and the biggest risk. A separate restricted space with tighter access, aggregated views by default and logged access lets these teams self-serve without exposing individual records more widely.

                ## Milestones
                1. A restricted space with access limited to named roles in HR and finance.
                2. Aggregated datasets as the default, with record-level detail only where a role requires it.
                3. Access logging switched on and reviewed by the data owner.
                4. Risks recorded and reviewed with the data protection or security lead.

                ## Notes
                Start from the **Risk register** template. Small groups in aggregated HR data can still identify individuals, so agree a minimum group size with the data protection lead.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A restricted self-serve space for HR and finance is live with role-limited access, logging switched on and a reviewed risk register."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List HR and finance reports that are run repeatedly by hand"
                - "Set up a restricted space limited to named HR and finance roles"
                - "Build aggregated datasets with an agreed minimum group size"
                - "Switch on access logging and review it with the data owner"
            - name: Onboarding a newly acquired business unit
              description: |-
                ## Purpose
                After an acquisition, the new unit arrives with its own tools, its own definitions and a habit of asking its own analyst. Mapping its recurring reports to existing governed datasets, filling gaps and training its people early stops a parallel reporting world from settling in.

                ## Milestones
                1. An inventory of the acquired unit's recurring reports and the tools behind them.
                2. Each report mapped to an existing governed dataset or flagged as a gap.
                3. Gap datasets added, or a timeline agreed with the unit's leadership.
                4. The unit's users trained and given access in the main BI tool.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every recurring report from the acquired unit is mapped to a governed dataset or a dated gap, and its users have access to the main BI tool."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Collect the acquired unit's recurring reports and the tools behind them"
                - "Map each report to an existing governed dataset or mark it as a gap"
                - "Agree a timeline for the gap datasets with the unit's leadership"
                - "Run explorer training for the unit's users"
            - name: Keeping self-serve habits through a BI tool migration
              description: |-
                ## Purpose
                Moving to a new BI tool resets every user's skills and bookmarks, and adoption usually dips sharply in the months after. Planning the move around users, with content mapped, champions trained first, how-to videos remade and a clear cut-off date, limits the dip and stops people retreating to spreadsheets.

                ## Milestones
                1. An inventory of self-serve content in the old tool with usage figures.
                2. Content with real use mapped to rebuilt equivalents, and the rest retired.
                3. Champions trained on the new tool before general users.
                4. A cut-off date announced with at least a month's notice and adoption tracked afterwards.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Used content has been rebuilt in the new tool, champions were trained first and adoption has been tracked for two months after cut-off."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Export the old tool's content list with usage for the last six months"
                - "Mark each item to rebuild or retire"
                - "Train champions on the new tool before general users"
                - "Announce the cut-off date at least a month ahead"
            - name: Builder sandbox for user-uploaded data
              description: |-
                ## Purpose
                Advanced builders often need to combine governed data with a target list, a budget file or survey results that live nowhere else. A sandbox where builders can upload small files and join them to governed datasets, with expiry dates and no route to certified status, meets that need without cluttering the warehouse.

                ## Milestones
                1. A sandbox schema or workspace with upload rights limited to the builder tier.
                2. Size limits and a ninety-day expiry rule on uploaded tables.
                3. Uploads that keep being renewed reviewed as candidates for proper datasets.
                4. Rules on personal data in uploads agreed with the data protection lead.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A builder sandbox with upload limits and a ninety-day expiry rule is live, and repeatedly renewed uploads have been reviewed."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Set up a sandbox schema with upload rights for builders only"
                - "Apply size limits and a ninety-day expiry rule to uploads"
                - "Agree the rules for personal data in uploads"
                - "List uploads renewed more than twice and review them as dataset candidates"
            - name: Change notices for self-serve content owners
              description: |-
                ## Purpose
                When a governed dataset loses a field or changes a definition, every chart built on it by business users can break or quietly change meaning. Using the BI tool's content dependencies to find affected items, and notifying their owners before the change ships, prevents a wave of confused help requests.

                ## Milestones
                1. A way to list every user-built item that uses a given dataset or field.
                2. A notice template stating what changes, when and what owners should do.
                3. Notices sent at least a week before each breaking change.
                4. Help requests after changes compared with a change made without notice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every breaking change to a governed dataset in the last quarter was preceded by a notice to affected content owners at least a week ahead."
                cadence: rolling
              tasks:
                - "Find how to list content using a given field in the BI tool's admin tools"
                - "Write a change notice template with what, when and the action needed"
                - "Send notices to affected owners a week before the next breaking change"
                - "Log help requests after each change to see whether notices worked"
            - name: Embedded self-serve for clients and partners
              description: |-
                ## Purpose
                Some organisations give clients, franchisees or partners their own analytics inside a portal, which raises the stakes on access rules and support. Designing tenant isolation, a limited exploration layer and a clear support route before the first external user logs in avoids one client ever seeing another's data.

                ## Milestones
                1. External user tiers defined, with what each can explore.
                2. Tenant isolation rules tested so each organisation sees only its own data.
                3. A curated dataset for external users with plain-language names and no internal fields.
                4. A support route and service level for external users agreed with the account teams.

                ## Notes
                Have the isolation tests reviewed by your security team before launch, and repeat them after every change to the access model.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Tenant isolation has passed a documented test with at least three external test accounts before any client gets access."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Define what each external user tier may explore"
                - "Build a curated external dataset with no internal fields"
                - "Test tenant isolation with three external test accounts"
                - "Agree the external support route with the account teams"
            - name: Self-serve value case for funding
              description: |-
                ## Purpose
                Sooner or later finance asks what self-serve is worth, and analyst time saved is only part of the answer. A careful estimate built from requests deflected, faster decisions and analyst hours redirected to deeper work, with the uncertainty stated plainly, gives leadership a figure they can trust and defend.

                ## Milestones
                1. Requests deflected estimated from the baseline and current request volume.
                2. Analyst hours freed and what they were spent on recorded.
                3. Three named decisions made faster with self-serve described with the people involved.
                4. A two-page value case using ranges rather than single figures.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A two-page value case with stated ranges and three named decision examples is presented to the sponsors each year."
                cadence: cyclic
              tasks:
                - "Estimate deflected requests from the baseline and current volume"
                - "Record analyst hours freed and where they went"
                - "Interview three people about decisions made faster with self-serve"
                - "Refresh the value case before the annual programme review @recurring(yearly)"
            - name: Self-serve usage model from BI audit logs
              description: |-
                ## Purpose
                Built-in usage screens in BI tools answer simple questions but rarely show who builds versus who views, which datasets lead to repeat use or where people abandon an exploration. Loading the tool's audit logs into the warehouse and modelling them properly gives the programme the same quality of evidence it asks of every other team.

                ## Milestones
                1. BI audit logs loaded into the warehouse on a daily schedule.
                2. A usage model distinguishing views, explorations, edits and publishes by user tier.
                3. Abandoned explorations, started and never saved, measured by dataset.
                4. The monthly adoption review switched to the new model.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "BI audit logs load daily into a usage model that the monthly adoption review now uses, including an abandonment rate by dataset."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Find where the BI tool exposes its audit logs and how far back they go"
                - "Set up a daily load of the audit logs into the warehouse"
                - "Model views, explorations, edits and publishes by user tier"
                - "Switch the monthly adoption review to the new usage model"
            - name: Self-serve maturity scoring by department
              description: |-
                ## Purpose
                Adoption totals hide the fact that some departments build their own analysis weekly while others never got past viewing reports. Scoring each department on access, datasets available, trained explorers, active builders and trust in the numbers shows where next year's effort should go and makes the gap visible to its leaders.

                ## Milestones
                1. Five scoring dimensions defined, with what each of four levels looks like.
                2. Every department scored using usage data and a short interview with its champion.
                3. Results shared with department heads alongside one recommended next step each.
                4. The scoring repeated a year later and the changes compared.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every department has a maturity score on five dimensions, shared with its head together with one recommended next step."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Define five scoring dimensions and four levels for each"
                - "Score each department from usage data and a champion interview"
                - "Share the scores with department heads with one next step each"
                - "Rescore departments a year later and compare with the first round"
---

# Self-Serve Analytics Enablement

This area is for data teams, the managers who sponsor them and the business teams who want answers without waiting in a queue. It starts with the foundations (a demand audit, a charter, user tiers, a tool fit test, the first governed datasets, access rules, certification and an adoption baseline), then the routines that keep self-serve healthy, the skills of curating and teaching, decisions on exports, sensitive data and AI query features, dated launches and showcases, situations from a one-person data team to an acquisition or a tool migration, and finally specialist work such as embedded client analytics and a usage model built from audit logs.

What repeats is weekly office hours and a help channel handover, monthly adoption reviews, release notes, leaver checks, field request triage and a champions sync, quarterly dataset recertification, access reviews, clean-ups and a user pulse, and a yearly programme review with its value case. The Purchase decision, Metrics log, Feedback themes, Course, Onboarding plan and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
