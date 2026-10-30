---
id: data-analytics.cloud-data-platform-selection
name: Cloud Data Platform Selection
description: "A charter and frozen scorecard, real workload evidence, a three-year cost model, a proof of concept on your own data and a tested exit plan, so the platform you sign for still fits in year three."
category: business
version: 1.0.0
tags: [data-analytics, cloud-data-platform-selection, engineer, manager, enterprise, vendor-selection, lakehouse, total-cost-of-ownership]
author: Aurum Technology
starter_structure:
  templates:
    - compliance-control
    - vendor
    - risk-register
    - metrics-log
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Cloud Data Platform Selection
          description: "Comparing and choosing warehouse, lakehouse and BI platforms on cost, performance, skills and lock-in before committing for years."
          projects:
            - name: Platform selection charter and decision owner
              description: |-
                ## Purpose
                Platform choices drift for months when nobody has written down what is being chosen, who decides and by when. A one-page charter naming the scope (warehouse, lakehouse, BI or all three), the single accountable decision owner, the budget envelope and the date a contract must be signed turns a vague tooling debate into a time-boxed programme with a finish line.

                ## Milestones
                1. A one-page charter stating which platform layers are in scope and which are explicitly out.
                2. One named decision owner and a small evaluation group of engineers, analysts and a finance contact.
                3. A budget envelope and a decision date tied to the earliest contract notice deadline.
                4. The charter approved by the sponsor and shared with everyone who will be asked for time.

                ## Notes
                Resist naming vendors in the charter. The moment a favourite appears on page one, every later step becomes a search for evidence that it was right.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sponsor-approved charter names the scope, one decision owner, a budget envelope and a decision date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write two sentences on why the current platform is being questioned now"
                - "Name the single person who will make the final platform call"
                - "Agree the budget envelope with finance before any vendor conversations"
                - "Circulate the one-page charter to the sponsor for approval"
            - name: Current data estate and tool inventory
              description: |-
                ## Purpose
                Every comparison needs a starting point: what you run today, what it holds and what depends on it. A complete inventory of sources, storage volumes, pipelines, BI tools and downstream consumers shows how much has to move, which integrations a new platform must support and where the undocumented dependencies sit.

                ## Milestones
                1. A list of every source system feeding analytics, with owner and connection method.
                2. Current storage volume per major schema and twelve months of growth noted.
                3. All BI, notebook and sync tools that read from the platform listed with active user counts.
                4. Downstream consumers such as finance exports, customer reports and models identified.
                5. The inventory checked by at least two engineers who run the current stack.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An inventory of sources, volumes, tools and consumers, reviewed by two engineers, is stored alongside the charter."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export the list of connections and service accounts from the current warehouse"
                - "Ask each BI tool admin for active user counts over the last ninety days"
                - "Record storage volume and monthly growth for each major schema"
                - "Interview two engineers about integrations that are not documented anywhere"
                - "Refresh the inventory before the annual platform fit review @recurring(yearly)"
            - name: Workload profile from twelve months of query history
              description: |-
                ## Purpose
                Vendors size and price against a workload, and if you cannot describe yours they will describe it for you. Mining the current platform's query history for data scanned, concurrency at peak, the spread of query durations and the split between dashboards, scheduled transforms and ad hoc work gives every sizing, benchmark and cost estimate the same honest base.

                ## Milestones
                1. Query history for twelve months extracted, or as much as the platform retains.
                2. Workloads grouped into scheduled transforms, BI refreshes, ad hoc analysis and data science.
                3. Peak concurrency, data scanned per day and the twenty slowest recurring queries recorded.
                4. A one-page workload profile ready to send to every shortlisted vendor in the same form.

                ## Notes
                Month-end, quarter-end and seasonal peaks matter more than the average day. Size for the busiest week, then price the ordinary one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written workload profile covering data scanned, peak concurrency and workload mix is ready to send to vendors."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check how many days of query history the current platform retains"
                - "Group last year's queries by user type and scheduling tool"
                - "Find the busiest hour of the busiest week and count concurrent queries"
                - "List the twenty slowest recurring queries with their run times"
                - "Re-run the workload profile queries to catch shifts in usage @recurring(quarterly)"
            - name: Contract and renewal date map for data tools
              description: |-
                ## Purpose
                Notice periods, not enthusiasm, usually set the real deadline for a platform decision, because many data contracts auto-renew unless cancelled 60 or 90 days ahead. Mapping every warehouse, ingestion, BI and catalogue contract with its end date, notice period and committed spend stops a renewal quietly locking you in for another year in the middle of an evaluation.

                ## Milestones
                1. Every data tool contract found, with end date, notice period and auto-renewal terms.
                2. Committed spend and remaining balance noted for each contract.
                3. The earliest notice deadline flagged to the decision owner and finance.
                4. Calendar reminders set 180 and 90 days before each notice date.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A contract map lists end date, notice period and committed spend for every data tool, with the earliest notice date in the calendar."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask procurement or finance for every current data tool contract"
                - "Note end date, notice period and auto-renewal clause for each contract"
                - "Flag the earliest notice deadline to the decision owner"
                - "Check the contract map for notice dates falling in the next 180 days @recurring(monthly:3)"
            - name: Weighted selection criteria agreed before demos
              description: |-
                ## Purpose
                Once the demos start, the most polished presenter tends to win unless the scoring rules already exist. Agreeing six to ten criteria (cost, performance, skills fit, lock-in, security, ecosystem, support), their weights and what a score of one versus five means, before seeing any vendor, keeps the decision defensible when someone asks why two years later.

                ## Milestones
                1. Six to ten criteria written, each with a one-line definition.
                2. Weights agreed by the evaluation group and totalling one hundred.
                3. A scoring guide describing what earns a one, a three and a five on each criterion.
                4. The criteria signed off by the decision owner and frozen for the evaluation.

                ## Notes
                Make lock-in and exit cost a weighted criterion of its own. When it is folded into cost it almost always loses to a first-year discount.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A frozen scorecard with weighted criteria and a written scoring guide is signed off before the first vendor demo."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a long list of possible criteria from the charter and inventory"
                - "Run a one-hour session where the evaluation group splits one hundred points across criteria"
                - "Write what a score of one, three and five means for each criterion"
                - "Ask the decision owner to sign off and freeze the scorecard"
            - name: Stakeholder requirement interviews across roles
              description: |-
                ## Purpose
                Analysts care about SQL dialect and query speed, engineers about orchestration and deployment, finance about predictable bills, security about access and audit, and data scientists about notebooks and Python. Thirty-minute interviews with each group, recorded as must-have, should-have and could-have, stop the evaluation from serving whoever is loudest in the room.

                ## Milestones
                1. At least eight interviews held across analysts, engineers, data science, finance and security.
                2. Requirements recorded in one list, each tagged must, should or could.
                3. Conflicting requirements identified and taken to the decision owner for a ruling.
                4. Every requirement mapped to a criterion on the weighted scorecard.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A single requirements list from at least eight interviews, each item tagged must, should or could and mapped to the scorecard."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book eight thirty-minute interviews across five roles"
                - "Ask each person what they would miss most if the current platform vanished tomorrow"
                - "Tag every requirement as must, should or could"
                - "Ask the agent to merge the interview notes into one deduplicated requirement list"
            - name: Security and compliance gate for candidate platforms
              description: |-
                ## Purpose
                Some requirements are pass or fail, and finding one out in month four wastes everyone's time. Writing the non-negotiables first (data residency regions, encryption with customer-managed keys, single sign-on, row and column access control, audit logs and the certifications your sector expects) lets you drop unsuitable platforms within a week.

                ## Milestones
                1. Your security team's non-negotiable controls written as a pass or fail checklist.
                2. Required data residency regions and certifications confirmed with security or compliance.
                3. Each long-listed platform checked against the list using its documentation and audit reports.
                4. Failures recorded with evidence, and the platform removed or an exception approved in writing.

                ## Notes
                Start from the **Compliance control** template. Ask for the vendor's independent audit reports under a confidentiality agreement rather than relying on a marketing page.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every long-listed platform has a completed pass or fail security checklist with evidence, signed off by the security lead."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the security lead for the controls any new data platform must meet"
                - "Confirm the data residency regions and certifications your sector requires"
                - "Request each vendor's latest independent audit report"
                - "Re-check certifications and audit report dates for the chosen platform @recurring(yearly)"
            - name: Team skills inventory for platform fit
              description: |-
                ## Purpose
                A platform that needs Spark tuning and cluster management is a poor fit for a team of SQL analysts and one engineer, however good its benchmarks look. Mapping who knows SQL, Python, Spark, infrastructure as code and cloud networking shows which platforms the team can run on day one, and what training or hiring each option quietly assumes.

                ## Milestones
                1. A skills grid of everyone who will build on and operate the platform.
                2. The day-one skills each candidate platform needs listed.
                3. The gap for each platform estimated in training days or hires.
                4. The skills gap carried into the scorecard and the cost model.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A skills grid and a per-platform gap estimate in training days or hires are recorded in the cost model."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List everyone who will build on or operate the new platform"
                - "Rate each person on SQL, Python, Spark, infrastructure code and cloud networking"
                - "Estimate the training days or hires each candidate platform would need"
                - "Update the skills grid as people join or leave the team @recurring(yearly)"
            - name: Warehouse, lakehouse or hybrid pattern decision
              description: |-
                ## Purpose
                Deciding the architecture pattern before meeting vendors narrows the field honestly. A managed warehouse suits mostly structured, SQL-first work; a lakehouse on open files suits large semi-structured data, machine learning and several engines; many organisations end up with both. Writing the pattern choice and its reasons first keeps vendors from redefining the problem to fit their product.

                ## Milestones
                1. The share of data that is structured, semi-structured and unstructured estimated.
                2. Machine learning, streaming and multi-engine needs for the next three years listed.
                3. A written pattern choice with three reasons and the conditions that would change it.
                4. The decision challenged by the evaluation group and recorded as a decision record.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded pattern decision states warehouse, lakehouse or hybrid, with reasons and the conditions that would reverse it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate how much of your data is tabular versus logs, documents and files"
                - "List the machine learning and streaming uses planned for the next three years"
                - "Write the pattern choice with three reasons and what would change it"
                - "Present the choice to the evaluation group for challenge"
            - name: Weekly evaluation checkpoint during selection
              description: |-
                ## Purpose
                Evaluations stall when vendor answers, test results and access requests sit in different inboxes. A thirty-minute weekly checkpoint with the evaluation group, one running action list and the scoring sheet open on screen keeps a twelve-week evaluation inside twelve weeks.

                ## Milestones
                1. A fixed weekly slot with the evaluation group and the decision owner.
                2. One action list with an owner and a due week for each item.
                3. The scoring sheet updated with new evidence every week.
                4. The evaluation finished within two weeks of its planned end date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly checkpoints held through the evaluation, with the action list and scoring sheet updated each week and the end date met within two weeks."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute slot for the evaluation group"
                - "Hold the evaluation checkpoint and update the action list @recurring(weekly:tue)"
                - "Add the week's test results and vendor answers to the scoring sheet @recurring(weekly:fri)"
                - "Escalate any action two weeks overdue to the decision owner"
            - name: Vendor record and claims log
              description: |-
                ## Purpose
                Sales calls produce verbal promises about features, discounts and roadmap dates that nobody can find three months later. Keeping one record per vendor, with contacts, every claim made, every quote received and the date of each, means negotiations and contract wording rest on what was actually said.

                ## Milestones
                1. One vendor record per shortlisted platform with account team contacts.
                2. Every roadmap or feature claim logged with the date and the person who made it.
                3. Quotes and their pricing assumptions attached to the record.
                4. The claims you rely on turned into written commitments or contract clauses.

                ## Notes
                Start from the **Vendor** template. Treat a roadmap date as a hope until it appears in the order form.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each shortlisted vendor has a record holding contacts, dated claims and every quote, with key claims confirmed in writing."
                cadence: rolling
              tasks:
                - "Create a vendor record for each shortlisted platform"
                - "Log every feature or roadmap claim within a day of the call"
                - "Chase vendor questions that have gone unanswered for a week @recurring(weekly:thu)"
                - "Ask each vendor to confirm in writing the three claims you rely on most"
            - name: Quarterly platform market watch
              description: |-
                ## Purpose
                Pricing, features and even product names in this market change several times a year, and a decision made on last year's facts can be wrong by the time it is signed. A quarterly scan of release notes, pricing pages and independent analyst commentary keeps the long list current and flags when an alternative to your incumbent has caught up.

                ## Milestones
                1. A watch list of five to eight platforms and the sources to check for each.
                2. A one-page note each quarter of material pricing and feature changes.
                3. Any change that affects a criterion score reflected in the scorecard.
                4. Four quarterly notes kept together for the annual fit review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly market notes exist, each listing material pricing and feature changes across the watch list."
                cadence: rolling
              tasks:
                - "Pick five to eight platforms for the watch list"
                - "Bookmark the release notes and pricing page for each platform"
                - "Scan release notes and pricing pages and write the quarterly change note @recurring(quarterly)"
            - name: Architecture decision records for platform choices
              description: |-
                ## Purpose
                Two years after selection, nobody remembers why the team chose one table format, region or BI tool, and the same arguments start again. Short architecture decision records, one per choice with context, options considered, the decision and its consequences, give new joiners and future reviews the reasoning in five minutes.

                ## Milestones
                1. A decision record format agreed and stored in the team's repository or wiki.
                2. Records written for the pattern, the platform, the cloud region and the BI tool.
                3. Each record stating the options rejected and why.
                4. Superseded records marked and linked rather than deleted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "At least five decision records exist for the main platform choices, each listing the options rejected and why."
                cadence: rolling
              tasks:
                - "Agree a one-page decision record format with context, options, decision and consequences"
                - "Write the first record for the warehouse, lakehouse or hybrid choice"
                - "Review open decisions and write records for any made this month @recurring(monthly:23)"
                - "Mark superseded records with a link to their replacement"
            - name: Lock-in exposure register
              description: |-
                ## Purpose
                Lock-in rarely arrives in one decision: it builds up as teams adopt a proprietary SQL extension here, a vendor-only file format there and a stored procedure language nobody else supports. A register of each proprietary feature in use, how hard it would be to replace and who approved it makes the cost of leaving visible before it becomes the reason to stay.

                ## Milestones
                1. Every proprietary feature, format and integration in use listed.
                2. Each one rated by the days of work it would take to replace.
                3. A rule agreed for when adopting a new proprietary feature needs approval.
                4. The register reviewed every quarter and the total exit effort tracked over time.

                ## Notes
                Start from the **Risk register** template. Some lock-in is a fair price for real value; the aim is to choose it knowingly, not to avoid it entirely.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A lock-in register lists each proprietary dependency with a replacement estimate and has been reviewed in each of the last four quarters."
                cadence: rolling
              tasks:
                - "List the proprietary SQL functions, file formats and connectors in current use"
                - "Estimate the days of work needed to replace each one"
                - "Agree who must approve adopting a new proprietary feature"
                - "Review the lock-in register and update the total exit estimate @recurring(quarterly)"
            - name: Quarterly vendor business review on your agenda
              description: |-
                ## Purpose
                Account teams offer quarterly business reviews to sell more, but you can run them for your own purposes: roadmap items you depend on, unresolved support tickets, pricing changes and the next renewal. A prepared agenda turns the meeting into evidence for the renewal rather than an upsell pitch.

                ## Milestones
                1. A standing agenda covering support, roadmap dependencies, usage and commercial items.
                2. Open support tickets and escalations reviewed before each meeting.
                3. Roadmap items you depend on tracked against the dates you were given.
                4. Notes from four quarterly reviews kept in the renewal file.
              priority: low
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Four quarterly vendor reviews held in a year, each with a prepared agenda and notes stored in the renewal file."
                cadence: cyclic
              tasks:
                - "Write a standing agenda for the vendor business review"
                - "Hold the quarterly review with the account team using your agenda @recurring(quarterly)"
                - "Check open support tickets and their escalation status @recurring(monthly:9)"
                - "File the review notes in the renewal folder"
            - name: Committed spend burn-down against the contract
              description: |-
                ## Purpose
                Capacity and credit commitments are priced on a forecast, and the gap between forecast and real consumption decides whether you pay for unused credits or face a mid-term true-up. A monthly look at consumed versus committed spend warns finance early and gives you facts for the renewal conversation. Tuning individual query costs is a separate job; this one is about the contract.

                ## Milestones
                1. The committed amount, term and rollover rules written down from the order form.
                2. Monthly consumption plotted against a straight-line burn of the commitment.
                3. An end-of-term forecast updated each month.
                4. Finance told within a month whenever the forecast moves by more than fifteen percent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly burn-down of consumed versus committed spend, with an end-of-term forecast, has been shared with finance for six months running."
                cadence: rolling
              tasks:
                - "Write down the commitment amount, term and rollover rules from the order form"
                - "Compare consumed with committed spend and update the end-of-term forecast @recurring(monthly:18)"
                - "Tell finance when the forecast moves by more than fifteen percent"
            - name: Renewal preparation cycle
              description: |-
                ## Purpose
                Renewals negotiated in the last two weeks before expiry go the vendor's way, because there is no time left to walk away. Starting 120 days out with a year of usage data, a fresh look at alternatives and a target price gives you a credible position and the time to act on it.

                ## Milestones
                1. A preparation start date set 120 days before each renewal.
                2. Twelve months of usage, spend and support history summarised on one page.
                3. At least one alternative priced, or a written reason why none is credible.
                4. A target price, term and must-have clauses agreed with finance before the first call.
                5. The renewal signed, or notice given, before the deadline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each renewal starts 120 days before expiry with a usage summary, a priced alternative and a target agreed with finance."
                cadence: cyclic
              tasks:
                - "Pull twelve months of usage and spend 120 days before renewal @recurring(yearly)"
                - "Ask one alternative vendor for an indicative quote"
                - "Agree target price, term and must-have clauses with finance"
                - "Record the renewal outcome in the vendor record"
            - name: Annual platform fit review
              description: |-
                ## Purpose
                A platform that fitted three years ago may not fit after the team doubled, a machine learning programme started or the vendor changed its pricing model. A yearly review that rescores the current platform against the original criteria, with a short user survey, tells you whether to stay, renegotiate or start a fresh evaluation.

                ## Milestones
                1. The current platform rescored on the original weighted criteria.
                2. A short survey of analysts and engineers on speed, reliability and missing features.
                3. Changes in workload, team and pricing since the last review summarised.
                4. A written stay, renegotiate or re-evaluate decision filed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly fit review rescores the platform, includes a user survey and ends in a recorded stay, renegotiate or re-evaluate decision."
                cadence: cyclic
              tasks:
                - "Book the annual platform fit review with the evaluation group @recurring(yearly)"
                - "Send a five-question survey to analysts and engineers"
                - "Rescore the platform on the original weighted criteria"
                - "Write and file the stay, renegotiate or re-evaluate decision"
            - name: How cloud warehouse pricing models work
              description: |-
                ## Purpose
                On-demand billing per terabyte scanned, reserved slots, credit-based virtual warehouses, serverless units and per-cluster hourly rates all turn the same workload into very different bills. Learning how each model charges for compute, storage and idle time lets you read a quote properly and see which model rewards or punishes the shape of your workload.

                ## Milestones
                1. Each pricing model on your long list summarised in a paragraph.
                2. What happens to cost when queries double, concurrency spikes or compute sits idle noted for each.
                3. Minimum charges, auto-suspend rules and billing increments listed.
                4. A one-page cheat sheet shared with the evaluation group.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page pricing cheat sheet explains how each long-listed platform bills compute, storage and idle time."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the pricing documentation for each long-listed platform"
                - "Note minimum billing increments and idle or auto-suspend rules"
                - "Work through what a doubled query volume would cost under each model"
                - "Write the one-page cheat sheet for the evaluation group"
            - name: Concurrency and workload isolation concepts
              description: |-
                ## Purpose
                Most platforms now separate storage from compute, but they differ in how they share compute among many users: queues, auto-scaling clusters, slot reservations or per-team compute pools. Understanding these mechanisms explains why a platform that flies on a single benchmark query can queue badly at nine on a Monday morning when two hundred dashboards refresh at once.

                ## Milestones
                1. Separation of storage and compute explained in your own words.
                2. How each shortlisted platform queues, scales and isolates workloads documented.
                3. The way to give BI, transforms and data science their own compute noted for each.
                4. Concurrency limits and scaling delays captured from the documentation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note per shortlisted platform documents concurrency limits, scaling behaviour and how workloads are isolated."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read how each shortlisted platform scales compute under concurrent load"
                - "Note default concurrency limits and how long scaling takes"
                - "Sketch how you would isolate BI, transforms and data science on each"
                - "Share the notes with the engineer running the proof of concept"
            - name: Open table formats and what they protect
              description: |-
                ## Purpose
                Open table formats such as Apache Iceberg, Delta Lake and Apache Hudi keep data in open files with a transaction layer that several engines can read, which is the strongest practical defence against lock-in. Understanding what they guarantee, and where catalogues and write support still tie you to one engine, lets you judge vendor claims of openness on the evidence.

                ## Milestones
                1. The roles of data files, table metadata and the catalogue explained.
                2. Which shortlisted engines can read and write each format checked.
                3. Catalogue options and how portable each one is noted.
                4. A paragraph on how much exit risk open formats remove in your case.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note on open table formats, engine read and write support and catalogue portability, applied to your shortlist."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the overview documentation for Iceberg, Delta Lake and Hudi"
                - "Check which shortlisted engines can write, not just read, each format"
                - "Find out where table metadata and the catalogue live on each platform"
                - "Write a paragraph on what open formats would and would not protect you from"
            - name: Reading vendor benchmarks critically
              description: |-
                ## Purpose
                Published benchmarks often use a standard query set at a scale and configuration the vendor chose, with warm caches and tuned settings you may never use. Learning what to check (data scale, cluster size, caching, concurrency, cost per run and who ran the test) stops a headline speed chart from carrying weight it has not earned.

                ## Milestones
                1. A checklist of ten questions to ask of any published benchmark.
                2. Two vendor benchmarks read against the checklist.
                3. The gaps between their test conditions and your workload profile written down.
                4. The checklist adopted for the evaluation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ten-question benchmark checklist exists and has been applied to two published vendor benchmarks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write ten questions to ask of any published benchmark"
                - "Pick two benchmarks the shortlisted vendors cite in their sales material"
                - "Score both against your checklist and note what they leave out"
                - "Compare their test conditions with your own workload profile"
            - name: Hidden costs in data platform pricing
              description: |-
                ## Purpose
                The list price per credit or terabyte is often half the real bill. Data egress between clouds and regions, premium support tiers, minimum commitments, separate charges for governance or serverless features, BI viewer seats and the engineering time to run it all are where three-year costs go wrong.

                ## Milestones
                1. A checklist of cost items beyond compute and storage.
                2. Each shortlisted platform checked for egress, support, add-on feature and minimum charges.
                3. Operations and engineering time estimated for each option.
                4. Every hidden cost item carried into the total cost model.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hidden costs checklist has been applied to each shortlisted platform and every item appears in the cost model."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List cost items beyond compute and storage, starting with egress and support"
                - "Check which governance or security features are charged separately"
                - "Estimate the engineering hours per month each option needs to run"
                - "Ask each vendor to confirm in writing what the quote does not include"
            - name: BI platform licensing models
              description: |-
                ## Purpose
                BI tools charge per creator, per viewer, per capacity unit or per embedded user, and the cheapest option for twenty analysts can become the most expensive at five hundred viewers. Understanding each model, and counting your real creators, explorers and readers, lets you compare BI quotes fairly and plan for growth.

                ## Milestones
                1. Your users counted as creators, explorers and view-only readers.
                2. Per-seat, capacity and embedded pricing explained for each shortlisted BI tool.
                3. Three-year licence cost modelled at today's user numbers and at double.
                4. Licensing traps such as minimum seat counts and guest access noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A three-year BI licence comparison at current and doubled user counts, built on a real count of creators and readers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count how many people build reports versus only read them"
                - "Read the licensing pages for each shortlisted BI tool"
                - "Model three-year licence cost at current and doubled user numbers"
                - "Note minimum seat counts and how external viewers are charged"
            - name: Semantic layer placement and BI coupling
              description: |-
                ## Purpose
                When metric definitions live inside one BI tool, changing that tool means rebuilding every definition by hand. Learning the options (metrics in the BI tool, in a standalone semantic layer, or in the warehouse as governed views) shows how the BI choice and the warehouse choice affect each other, and how much switching either would cost later.

                ## Milestones
                1. The three common places to define metrics described with their trade-offs.
                2. The number of metrics and calculated fields inside the current BI tool counted.
                3. Each shortlisted BI tool's support for an external semantic layer checked.
                4. A decision on where metrics should live recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A recorded decision on where metric definitions live, informed by a count of metrics currently held inside the BI tool."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count the calculated fields and metrics defined inside the current BI tool"
                - "Read how each shortlisted BI tool connects to an external semantic layer"
                - "List what switching BI tools would cost under each placement"
                - "Record a decision on where metrics should live"
            - name: Long list to shortlist of three platforms
              description: |-
                ## Purpose
                Evaluating eight platforms properly is impossible, and evaluating one is not an evaluation. Applying the security gate, the pattern decision and a desk review against the scorecard narrows a long list of six to ten options to three that deserve hands-on time, with a written reason for every exclusion.

                ## Milestones
                1. A long list of six to ten platforms that match the chosen pattern.
                2. Each one checked against the security gate and the must-have requirements.
                3. A desk score from documentation and analyst reports for those that pass.
                4. A shortlist of three, with a written reason for each platform dropped.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shortlist of three platforms is recorded, with a written reason for every platform excluded from the long list."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List six to ten platforms that fit the chosen architecture pattern"
                - "Drop any that fail the security gate or a must-have requirement"
                - "Desk-score the remainder on the frozen scorecard"
                - "Write one line on why each excluded platform was dropped"
            - name: Request for proposal pack for platform vendors
              description: |-
                ## Purpose
                Vendors answer the question they are asked, so if each one hears a different version you cannot compare the answers. A single request pack holding the workload profile, requirements, security checklist, a pricing template and the timeline makes every response line up against the scorecard.

                ## Milestones
                1. A request pack with background, workload profile, requirements and timeline.
                2. A pricing template every vendor must complete using the same volume and user assumptions.
                3. A response deadline and a single contact for questions.
                4. Responses received from all three shortlisted vendors and logged.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All three shortlisted vendors have returned the same request pack, with pricing on the common template."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Assemble the workload profile, requirements and security checklist into one pack"
                - "Build a pricing template with fixed volume and user assumptions"
                - "Ask the agent to draft the background section from the charter"
                - "Send the pack to all three vendors with the same deadline"
            - name: Three-year total cost of ownership model
              description: |-
                ## Purpose
                Year-one discounts make almost any platform look cheap; what matters is the cost in year three with your expected growth. A model covering compute, storage, egress, licences, support, migration effort, training and the people to run it, at low, expected and high growth, shows the real difference between options and where the uncertainty sits.

                ## Milestones
                1. One model using the same assumptions for every shortlisted platform.
                2. Compute, storage, egress, licence, support, migration and staffing costs included.
                3. Low, expected and high growth scenarios run for three years.
                4. The model checked by finance, with all assumptions on one sheet.
                5. The two assumptions that move the total most identified and flagged.

                ## Notes
                Price migration and dual running honestly. Running the old and new platforms side by side for three to six months is common and often left out.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A finance-reviewed three-year cost model compares all shortlisted platforms under three growth scenarios with one shared assumptions sheet."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Set up an assumptions sheet with volumes, users and growth rates"
                - "Enter each vendor's quoted prices into the same cost structure"
                - "Add migration, dual running, training and staffing costs"
                - "Ask finance to review the assumptions and the scenario totals"
            - name: Hands-on proof of concept with real workloads
              description: |-
                ## Purpose
                Demos run on the vendor's data; production runs on yours. A two to four week proof of concept that loads a representative slice of your own data, rebuilds a handful of real transforms and dashboards and has your engineers operate the platform shows how it behaves, what breaks and how good the support really is.

                ## Milestones
                1. Written success criteria for the proof of concept agreed with each vendor in advance.
                2. The same representative data slice, including at least one large fact table, loaded on each platform.
                3. Five real transforms and two real dashboards rebuilt and timed.
                4. Engineers' notes on setup, access control, deployment and support response.
                5. A results summary scored against the frozen scorecard.

                ## Notes
                Run the same test plan on each platform, with your own people at the keyboard. A vendor engineer doing the work only proves that the vendor engineer is good.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each shortlisted platform has completed the same proof of concept plan on your data, with results scored on the frozen scorecard."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Write the proof of concept test plan and success criteria"
                - "Agree sandbox accounts, trial credits and support contacts with each vendor"
                - "Load the same data slice and rebuild five transforms on each platform"
                - "Record setup time, failures and support response times in one sheet"
            - name: Benchmark suite built from your own queries
              description: |-
                ## Purpose
                The twenty slowest and twenty most frequent queries from your workload profile make a far better benchmark than any published one. Running them on each candidate at matched cost, cold and warm, alone and under concurrent load, gives speed and cost-per-run figures that reflect how your users will actually experience the platform.

                ## Milestones
                1. A suite of thirty to forty real queries chosen from the workload profile.
                2. Each query run cold and warm, alone and under concurrent load, on every platform.
                3. Results recorded as duration and cost per run at a matched compute budget.
                4. A one-page results table with caveats attached to the proof of concept summary.

                ## Notes
                Start from the **Metrics log** template. Compare at equal spend, not equal cluster size; size labels mean different things on different platforms.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Thirty or more of your own queries have been run cold, warm and concurrent on every shortlisted platform, with duration and cost per run recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick thirty to forty queries from the workload profile, slowest and most frequent"
                - "Translate dialect differences and check results match across platforms"
                - "Run each query cold, warm and under concurrent load"
                - "Re-run the benchmark suite on the chosen platform after major releases @recurring(quarterly)"
            - name: BI tool bake-off on three real dashboards
              description: |-
                ## Purpose
                BI tools look alike in demos and very different when an analyst builds a real dashboard against your warehouse. Having two analysts rebuild the same three dashboards in each candidate tool, then letting ten business users try them, shows build effort, speed, governance and how readers actually get on.

                ## Milestones
                1. Three representative dashboards chosen: one simple, one complex, one heavily used.
                2. Each dashboard rebuilt in every candidate BI tool by the same analysts.
                3. Build time, refresh speed and governance features recorded.
                4. Ratings from ten business users collected for each tool.
                5. A BI recommendation added to the scorecard.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three real dashboards rebuilt in every candidate BI tool, with build time, refresh speed and ten user ratings recorded per tool."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Choose one simple, one complex and one heavily used dashboard to rebuild"
                - "Ask two analysts to rebuild all three in each candidate tool"
                - "Time each build and each dashboard refresh against the warehouse"
                - "Collect ratings from ten business users who tried each version"
            - name: Exit plan and data portability test
              description: |-
                ## Purpose
                Every platform says your data is yours; few teams check what leaving would actually involve. Exporting a large table and its history in an open format, reading it in a second engine and estimating the cost of rewriting proprietary code turns lock-in from a feeling into a number before you sign.

                ## Milestones
                1. A written exit plan covering data, transformation code, permissions and BI content.
                2. One large table exported in an open format and read by a different engine.
                3. Egress charges and export time measured for that table.
                4. Exit effort estimated in engineer weeks and added to the scorecard.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An exit plan exists, one large table has been exported and read in another engine, and exit effort is estimated in engineer weeks."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List what would need to move on exit: data, code, permissions and BI content"
                - "Export one large table with its history in an open file format"
                - "Read the exported table in a second engine and check the row counts match"
                - "Repeat the export test on the chosen platform @recurring(yearly)"
            - name: Single cloud or multi-cloud stance
              description: |-
                ## Purpose
                Where your applications already run shapes platform cost through egress charges, network setup and existing committed spend with a cloud provider. Deciding whether the data platform must sit in your main cloud, may sit in another, or must span several settles which options are realistic and whether existing cloud commitments can help fund it.

                ## Milestones
                1. Source applications and data mapped by cloud provider and region.
                2. Egress costs for moving data between clouds estimated from the workload profile.
                3. Whether marketplace purchases count towards existing cloud commitments confirmed.
                4. A written cloud stance agreed by the decision owner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written cloud stance names the permitted clouds and regions, with egress estimates and the effect on existing commitments."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Map source systems by cloud provider and region"
                - "Estimate monthly egress if the platform sat in a different cloud"
                - "Ask your cloud account team whether a marketplace purchase draws down your commitment"
                - "Write the cloud stance and file it as a decision record"
            - name: Managed service versus self-hosted open source
              description: |-
                ## Purpose
                Running an open source engine on your own infrastructure can cut licence costs and reduce lock-in, but it moves upgrades, scaling, security patches and on-call onto your team. Comparing a managed option with a self-hosted one on full cost, including the engineers to run it, gives an honest answer for your team's size.

                ## Milestones
                1. One managed and one self-hosted option defined for the same workload.
                2. Operating duties for the self-hosted option listed with hours per month.
                3. Both options costed over three years including people.
                4. A decision recorded with the team size at which it would flip.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A three-year comparison of managed and self-hosted options, including staffing, ends in a recorded decision and the team size at which it would change."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick one managed and one self-hosted option for the same workload"
                - "List the upgrades, patching and on-call duties self-hosting would add"
                - "Cost both options over three years including engineer time"
                - "Record the decision and the team size that would reverse it"
            - name: Final platform recommendation and decision record
              description: |-
                ## Purpose
                The output of months of evaluation should fit on a few pages that a sponsor can read in fifteen minutes and an auditor can follow in three years. A recommendation pulling together scores, proof of concept results, the cost model, risks and the exit plan, with a clear recommended option and a runner-up, lets the decision be made once and stay made.

                ## Milestones
                1. Final scores for each platform, with the evidence behind every score.
                2. A recommended option, a runner-up and the reasons that separate them.
                3. The top five risks listed with owners and mitigations.
                4. The decision approved by the decision owner and filed as a decision record.

                ## Notes
                Start from the **Purchase decision** template. Name the runner-up explicitly; it is your fallback if negotiations fail.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed recommendation names the chosen platform and the runner-up, with scores, costs, risks and the exit plan attached."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Total the final weighted scores and attach evidence to each"
                - "Write the recommendation with a named runner-up"
                - "List the top five risks with owners and mitigations"
                - "Get the decision owner's approval and file the decision record"
            - name: Scripted vendor demo day
              description: |-
                ## Purpose
                Unscripted demos show each vendor's best features, so you end up comparing highlights rather than fit. Giving all three vendors the same script built from your requirements (load this file, mask this column, rebuild this report, show this bill) and scoring them live in one day makes the comparison fair and memorable.

                ## Milestones
                1. A demo script of six to eight scenarios drawn from the must-have requirements.
                2. All three vendors booked in the same week with equal time slots.
                3. Each scenario scored live by at least four evaluators.
                4. Scores and notes filed against the scorecard within two days.

                ## Notes
                Start from the **Meeting notes** template. Ask each vendor to show an anonymised real bill from a customer of similar size.
              priority: medium
              deadlineOffsetDays: 50
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All three shortlisted vendors have demonstrated the same scripted scenarios, each scored by at least four evaluators."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write six to eight demo scenarios from the must-have requirements"
                - "Send the same script to every vendor two weeks ahead"
                - "Brief the evaluators on how to score each scenario"
                - "File the scores and notes within two days of the demos"
            - name: Customer reference calls for the finalists
              description: |-
                ## Purpose
                References chosen by the vendor will be happy, but they still reveal a lot if you ask about bills, outages, support and what they wish they had known. Two calls per finalist with organisations of similar size and workload, plus one you find yourself, fill the gaps a proof of concept cannot.

                ## Milestones
                1. A question list covering cost surprises, outages, support, upgrades and regrets.
                2. Two vendor-supplied references per finalist contacted.
                3. One independent reference per finalist found through your own network.
                4. Call notes summarised and scored on the relevant criteria.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least three reference calls per finalist, one found independently, with notes scored on the relevant criteria."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write ten reference questions covering cost surprises, outages and regrets"
                - "Ask each finalist for two references of similar size and workload"
                - "Find one independent reference per finalist through your professional network"
                - "Summarise each call in five lines against the scorecard"
            - name: Steering committee decision meeting
              description: |-
                ## Purpose
                Large platform commitments usually need sign-off from a technology, finance or investment committee, and a meeting that relitigates the whole evaluation can push the contract past a notice deadline. Preparing a short paper, briefing members individually beforehand and asking for one specific decision gets a clear yes, no or condition in a single meeting.

                ## Milestones
                1. A decision paper of no more than four pages circulated a week ahead.
                2. Each committee member briefed individually and their questions answered.
                3. One explicit decision requested, with the runner-up offered as the alternative.
                4. The committee's decision and any conditions minuted.
              priority: medium
              deadlineOffsetDays: 115
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The committee has minuted a decision on the recommended platform, with any conditions recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book the committee slot at least four weeks before the notice deadline"
                - "Draft the four-page decision paper from the recommendation"
                - "Brief each committee member one to one before the meeting"
                - "Circulate the minuted decision and conditions to the evaluation group"
            - name: Contract negotiation and signature
              description: |-
                ## Purpose
                Most of the long-term value in a platform deal is set in the order form and terms, not the discount headline. Negotiating price protection at renewal, rollover of unused credits, a ramp that matches real adoption, data export rights, support levels and exit assistance, with procurement and legal involved, protects you for the whole term.

                ## Milestones
                1. Commercial and legal must-haves agreed with procurement, legal and finance.
                2. Price protection, credit rollover and ramp terms negotiated.
                3. Data export, exit assistance and support levels written into the contract.
                4. The contract signed before the existing contract's notice deadline.
                5. Key terms summarised on one page for the vendor record.

                ## Notes
                This project organises the negotiation; the legal terms must be reviewed by your own legal counsel. Keep the runner-up warm until the contract is signed.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A signed contract includes price protection, credit rollover, data export rights and support levels, summarised on one page."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree the must-have commercial and legal terms with procurement and legal"
                - "Ask the vendor for renewal price protection and rollover of unused credits"
                - "Send the redlined terms to your legal counsel for review"
                - "Write a one-page summary of the signed terms for the vendor record"
            - name: Selection to implementation handover
              description: |-
                ## Purpose
                Evaluation teams learn a great deal that the implementation team then rediscovers the hard way: vendor contacts, proof of concept workarounds, open risks and promises in the contract. A handover pack and a two-hour session close the selection phase cleanly and give the build team a running start.

                ## Milestones
                1. A handover pack with decision records, proof of concept notes, contacts and the contract summary.
                2. Open risks and unresolved vendor questions listed with owners.
                3. A two-hour handover session held with the implementation lead.
                4. The evaluation formally closed and every sandbox account shut or transferred.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A handover pack has been walked through with the implementation lead and every sandbox account is shut or transferred."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather decision records, proof of concept notes and the contract summary into one folder"
                - "List open risks and unanswered vendor questions with owners"
                - "Hold a two-hour handover session with the implementation lead"
                - "Shut down or transfer every evaluation sandbox account"
            - name: First data platform for a small team
              description: |-
                ## Purpose
                A team of one to three engineers or analysts choosing its first warehouse needs something it can run between other jobs, not the most capable platform on the market. Favouring serverless or auto-suspending options, managed connectors and a single BI tool, with a monthly spend cap, keeps the first platform cheap, simple and replaceable.

                ## Milestones
                1. A short list of two or three serverless or auto-suspending options.
                2. A monthly spend cap and billing alert agreed before sign-up.
                3. One week of real loading and querying tried on the preferred option.
                4. A decision recorded with the data size or workload at which you would revisit it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A first platform chosen after a one-week trial, with a monthly spend cap set and the revisit trigger written down."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Shortlist two or three serverless or auto-suspending warehouse options"
                - "Set a monthly spend cap and billing alert before creating the account"
                - "Load two real sources and run your common queries for a week"
                - "Write down the data size or team size at which you would revisit the choice"
            - name: Enterprise procurement and architecture board route
              description: |-
                ## Purpose
                In large organisations the platform the data team prefers still has to pass vendor risk assessment, an architecture review board, information security and procurement, each with its own forms and lead times. Mapping that route at the start, and feeding each gate the evidence it needs, stops a good choice stalling in month five.

                ## Milestones
                1. Every approval gate listed with its owner, forms and typical lead time.
                2. A timeline working back from the notice deadline through each gate.
                3. Vendor risk questionnaires sent to the finalists early.
                4. Each gate passed, with its approval reference recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A gate-by-gate approval timeline exists and every gate has a recorded approval reference before signature."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask procurement and architecture for every approval gate a new platform must pass"
                - "Note the owner, forms and usual lead time for each gate"
                - "Send vendor risk questionnaires to the finalists in the first month"
                - "Record each approval reference as gates are passed"
            - name: Consolidating data platforms after a merger
              description: |-
                ## Purpose
                After a merger or acquisition you often inherit two warehouses, two BI tools and two sets of contracts, and running both indefinitely doubles cost and confuses every report. Treating consolidation as a fresh selection between the two incumbents, plus any better outsider, on the same criteria avoids defaulting to whichever side is more senior.

                ## Milestones
                1. Both estates inventoried, with workload profiles in the same format.
                2. Contract end dates and notice periods for both sides mapped.
                3. Both incumbents and one outsider scored on the same criteria.
                4. A consolidation decision recorded with a target date for retiring the other platform.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded consolidation decision scores both inherited platforms on the same criteria and sets a retirement date for the other."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Run the same inventory and workload profile on both inherited platforms"
                - "Map contract end dates and notice periods for both sides"
                - "Score both incumbents and one outsider on the same criteria"
                - "Agree the retirement target date for the platform that loses"
            - name: Business case for finance approval
              description: |-
                ## Purpose
                Managers often have to win the budget before they can sign, and finance wants cost, benefit and risk in its own terms, not query speeds. A business case that sets the three-year cost against the status quo, names benefits in hours saved, tools retired and risks reduced, and states the payback assumptions plainly, makes the request easy to approve or challenge.

                ## Milestones
                1. Three years of status quo cost worked out as the baseline.
                2. Benefits quantified where they are real: engineering hours, retired tools, faster month-end reporting.
                3. Costs, benefits and payback period set out on one page.
                4. Assumptions and risks listed honestly, including slower adoption than planned.
                5. The case reviewed by a finance partner before submission.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A one-page business case with three-year costs against the status quo, quantified benefits and assumptions is reviewed by finance and submitted."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Work out three years of status quo cost as the baseline"
                - "Quantify the benefits you can actually count, such as retired tools"
                - "Ask the agent to draft the one-page business case from the cost model"
                - "Ask a finance partner to challenge the assumptions before submission"
            - name: Responding to a large incumbent price rise
              description: |-
                ## Purpose
                When a vendor changes its pricing model or raises rates at renewal, a third can be added to the bill overnight, and the first reaction is often a panicked migration. Quantifying the real impact on your workload, testing which usage changes would offset it and pricing one credible alternative gives you a calm choice between negotiating, adapting and moving.

                ## Milestones
                1. The new pricing applied to the last twelve months of real usage.
                2. Changes in usage or configuration that would reduce the impact estimated.
                3. One alternative platform priced against the same workload profile.
                4. A decision to negotiate, adapt or move recorded with the numbers behind it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The price change has been costed on real usage, one alternative priced and a negotiate, adapt or move decision recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Apply the new pricing to the last twelve months of actual usage"
                - "Estimate which configuration or usage changes would offset the rise"
                - "Ask one alternative vendor to price the same workload profile"
                - "Record the negotiate, adapt or move decision with its numbers"
            - name: Platform selection under data residency rules
              description: |-
                ## Purpose
                Organisations in health, financial services or the public sector, or with customers in several jurisdictions, often must keep certain data in specific regions or under specific control. Mapping which datasets carry residency or sovereignty conditions, and which platform regions and deployment options satisfy them, removes options early and shapes the rest of the architecture.

                ## Milestones
                1. Datasets carrying residency or sovereignty conditions identified with your compliance or legal team.
                2. Required regions and control conditions written down for each dataset.
                3. Each finalist's region availability and per-region feature gaps checked.
                4. A residency-compliant architecture option confirmed for each finalist.

                ## Notes
                Your compliance and legal teams decide what the rules require. This project gathers the facts they need and records their answer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every dataset with residency conditions is mapped to a compliant region and deployment option for each finalist, confirmed by compliance."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask compliance which datasets carry residency or sovereignty conditions"
                - "Write the required regions and control conditions for each dataset"
                - "Check each finalist's feature availability in the required regions"
                - "Get compliance to confirm the proposed region and deployment option"
            - name: Multi-engine lakehouse with a shared catalogue
              description: |-
                ## Purpose
                Experienced teams increasingly keep one copy of data in an open table format and let several engines (a SQL warehouse, a Spark engine, a Python engine) read it through a shared catalogue. Choosing that catalogue and confirming that writes, permissions and table maintenance behave across engines is where this design succeeds or fails.

                ## Milestones
                1. Two or three catalogue options compared on engine support and access control.
                2. One table written by one engine and read and updated by another in a test.
                3. Permission enforcement checked from each engine.
                4. A decision on the catalogue and on which engine owns writes recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A catalogue choice is recorded after a test in which two engines read and update the same open-format table with permissions enforced."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Shortlist two or three catalogues that all your engines can use"
                - "Write a table from one engine and update it from another"
                - "Check permissions hold when the same table is queried from each engine"
                - "Record which engine owns writes and table maintenance"
            - name: Workload placement rules across engines
              description: |-
                ## Purpose
                Once more than one engine is available, each workload can run where it is cheapest and fast enough: heavy batch transforms on one, interactive BI on another, notebooks on a third. A placement rule based on measured cost and latency per workload class stops placement being decided by habit and keeps a multi-engine design paying for itself.

                ## Milestones
                1. Four or five workload classes defined with their latency needs and volume.
                2. Cost and duration measured for each class on each available engine.
                3. A placement rule written and published to the team.
                4. A monthly check that new workloads follow the rule.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A published placement rule maps each workload class to an engine on measured cost and latency, checked every month."
                cadence: rolling
              tasks:
                - "Define four or five workload classes with their latency needs"
                - "Measure cost and duration of each class on each available engine"
                - "Publish the placement rule to everyone who schedules workloads"
                - "Review which workloads run on which engine and move misplaced ones @recurring(monthly:27)"
            - name: Enterprise commitment structure negotiation
              description: |-
                ## Purpose
                At enterprise scale the structure of the deal matters more than the discount: multi-year ramps, flexibility to move spend between products, marketplace purchasing against cloud commitments, renewal price caps and true-up terms. Modelling two or three structures against your growth scenarios shows which one you can live with if adoption runs slower or faster than planned.

                ## Milestones
                1. Two or three deal structures requested from the chosen vendor.
                2. Each structure modelled against low, expected and high growth.
                3. The wasted commitment or penalty under low growth stated for each.
                4. The preferred structure agreed with finance and procurement.

                ## Notes
                Commercial and legal terms should be checked with procurement and your legal counsel. The aim is to understand each structure, not to win every point.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three deal structures modelled under three growth scenarios, with the preferred structure agreed by finance and procurement."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the vendor for two alternative deal structures alongside the standard offer"
                - "Model each structure under low, expected and high growth"
                - "Note the wasted commitment each one leaves in the low growth case"
                - "Agree the preferred structure with finance and procurement"
            - name: Reusable platform evaluation playbook
              description: |-
                ## Purpose
                Teams that have run one good evaluation can run the next in half the time, whether the next choice is a catalogue, an orchestrator or an observability tool. Turning this selection's charter, scorecard, test plans and lessons learned into a playbook makes the method the organisation's standard instead of one person's memory.

                ## Milestones
                1. A lessons learned session held with the evaluation group.
                2. Charter, scorecard, request pack and test plan saved as reusable templates.
                3. A short playbook describing the stages and their typical durations.
                4. The playbook used or reviewed in at least one later tool decision.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A playbook with reusable charter, scorecard and test plan templates is published and used in at least one later tool decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Hold a one-hour lessons learned session with the evaluation group"
                - "Strip project specifics from the charter, scorecard and test plan"
                - "Write a two-page playbook with stages and typical durations"
                - "Share the playbook with the architecture or platform group"
---

# Cloud Data Platform Selection

This area is for engineers, data leaders and enterprise architecture teams about to commit to a warehouse, lakehouse or BI platform for the next three to five years. It starts with the foundations (a charter, an inventory, a workload profile, the contract map and a frozen scorecard), then the routines that keep an evaluation and a live contract honest, the knowledge needed to read pricing and benchmarks, the comparisons and tests that produce the decision, the meetings and signature that close it, the situations that change the route, and the multi-engine work of experienced platform teams.

What repeats is a weekly evaluation checkpoint while you are choosing, a monthly look at notice dates, committed spend and decision records, quarterly vendor reviews, market scans and lock-in checks, and a yearly fit review and renewal cycle. The Compliance control, Vendor, Risk register, Metrics log, Purchase decision and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
