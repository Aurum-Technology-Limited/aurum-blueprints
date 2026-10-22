---
id: sales-revenue.sales-tech-stack-selection
name: Sales Tech Stack Selection
description: "An inventory, renewal calendar, overlap map and requirements, then structured choices of CRM, dialer, sequencing and recording tools, with routines that keep seats, spend and integrations in check."
category: business
version: 1.0.0
tags: [sales-revenue, sales-tech-stack-selection, manager, small-business, founder, saas-procurement, integrations, software-renewals]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - operational-checklist
    - compliance-control
    - purchase-decision
    - onboarding-plan
    - risk-register
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales Tech Stack Selection
          description: "Choosing and connecting the tools a sales team runs on, from CRM and dialers to sequencing and call recording, without paying for overlapping software."
          projects:
            - name: Sales tool inventory and spend register
              description: |-
                ## Purpose
                Most sales teams cannot say, without a week of digging, how many tools they pay for, who owns each login and what the annual total is. A single register listing every tool, its owner, seat count, monthly cost and renewal date is the starting point for every later decision in this area, and it usually turns up at least one subscription nobody remembers buying.

                ## Milestones
                1. Every sales tool found through card statements, expense claims and the finance system listed in one register.
                2. Each tool's owner, seat count, price per seat and billing frequency recorded.
                3. The total annual cost of the sales stack calculated and shared with the budget holder.
                4. Tools with no known owner flagged for a keep or cancel decision.

                ## Notes
                Check personal cards and expense claims as well as invoices. Reps often expense a scheduling or contact data tool that never reaches the finance system.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A register lists every paid sales tool with owner, seats, annual cost and renewal date, and finance has agreed the stack total."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export twelve months of software charges from the finance system and company cards"
                - "Ask each rep and manager to list every sales tool they log into"
                - "Record owner, seats, price and renewal date for each tool in one register"
                - "Total the annual cost and send it to the budget holder"
            - name: Named owner for the sales tech stack
              description: |-
                ## Purpose
                Tools without an owner drift: seats stay assigned to people who left, integrations break silently and renewals roll over at last year's price or higher. Naming one person accountable for the whole stack, with a few hours a month protected for it and a deputy for holidays, gives vendors, finance and reps one place to go.

                ## Milestones
                1. One stack owner and one deputy named and announced to the sales team.
                2. The owner's monthly time allowance agreed with their manager.
                3. Admin logins for every tool held by the owner and deputy, not by a single rep.
                4. A half-page remit covering buying, renewals, access and integrations signed off by the sales leader.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named stack owner and deputy hold admin access to every sales tool and work to a written remit agreed by the sales leader."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree with the sales leader who will own the sales tool stack"
                - "Write a half-page remit covering buying, renewals, access and integrations"
                - "Move every tool's primary admin login to the owner and deputy"
                - "Hold a 30-minute stack review with sales leadership @recurring(quarterly)"
            - name: Seat and login utilisation audit
              description: |-
                ## Purpose
                Paid seats that nobody logs into are the quickest saving in most stacks, often 15 to 30 percent of licences once leavers, trial users and shared logins are counted. Pulling last-login data from each admin console and checking it against the current team shows exactly which seats to reclaim before the next invoice.

                ## Milestones
                1. Last-login or activity reports exported from every tool with more than two seats.
                2. Each seat matched to a current team member or marked as unassigned.
                3. Seats unused for 60 days listed with their monthly cost.
                4. Reclaimed or downgraded seats confirmed with each vendor in writing.

                ## Notes
                Some vendors only let you reduce seats at renewal. Note the rule for each contract so the saving is booked at the right date rather than assumed straight away.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A utilisation report covers every multi-seat tool, and each unused seat is removed or scheduled for removal at the next allowed date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export last-login reports from each tool's admin console"
                - "Match every seat to a name on the current team list"
                - "List seats unused for 60 days with their monthly cost"
                - "Ask each vendor in writing how and when seats can be reduced"
            - name: Overlap map of duplicated sales tool features
              description: |-
                ## Purpose
                Stacks grow one problem at a time, so a team ends up paying for calling inside the CRM, in the sequencing tool and in a separate dialer, or for three different places that record calls. Mapping each capability against the tools that provide it shows where the business pays twice and which tool should keep each job.

                ## Milestones
                1. A grid of capabilities such as calling, sequencing, recording, scheduling, enrichment and e-signature against every tool.
                2. Each overlap marked with the tool reps actually use for that job.
                3. A keep, drop or merge recommendation written for every overlap.
                4. The estimated annual saving from removing the duplicates totalled.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A capability grid shows every duplicated feature, with a keep or drop recommendation and an annual saving figure for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the capabilities the sales team relies on down one side of a grid"
                - "Tick which tools offer each capability, using vendor feature pages"
                - "Mark the tool reps actually use for each job and the ones they ignore"
                - "Refresh the overlap grid before the annual stack review @recurring(yearly)"
            - name: Sales process to tool requirements map
              description: |-
                ## Purpose
                Buying tools before writing down how the team sells leads to software shaped around a vendor's demo rather than your own process. Walking each stage, from first touch to signed contract, and noting what reps need at every step turns vague wishes into requirements you can test vendors against.

                ## Milestones
                1. Each sales stage written down with the main activities reps perform in it.
                2. The data, documents and handoffs each stage needs listed beside it.
                3. Today's pain points at each stage noted from at least three rep interviews.
                4. A requirements list grouped by stage, approved by the sales leader.

                ## Notes
                Keep this about tooling needs. If the stage definitions themselves are unclear, settle them in the sales playbook first, then come back.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A stage-by-stage requirements list, built from at least three rep interviews, is approved by the sales leader."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Interview three reps about where tools slow them down in a normal week"
                - "Write each sales stage with the activities, data and handoffs it involves"
                - "Turn every pain point into a requirement phrased as must or should"
                - "Ask the agent to group the requirements by stage and remove duplicates"
            - name: System of record for each sales data type
              description: |-
                ## Purpose
                When contacts live in the CRM, the sequencing tool and a data provider, each with slightly different details, nobody knows which version is right. Deciding which system owns accounts, contacts, activities, deals, quotes and contracts, and which way data flows between them, prevents most sync conflicts before they start.

                ## Milestones
                1. A list of the core data types the sales team creates and uses.
                2. One owning system named for each data type.
                3. Sync direction agreed for every connection, one way or two way.
                4. The decisions written into the stack runbook and shared with every tool admin.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written table names the owning system and sync direction for every core sales data type, agreed by the stack owner and sales leader."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every data type reps create, from contacts to signed contracts"
                - "Name the one system that owns each data type"
                - "Decide the sync direction for each connection between tools"
                - "Send the finished table to every tool admin and vendor contact"
            - name: Weighted requirements scorecard for tool choices
              description: |-
                ## Purpose
                Vendor demos are designed to impress, and without a scorecard written beforehand the most polished presenter tends to win. Weighting your requirements into must-haves, should-haves and nice-to-haves, with a scoring scale everyone uses, makes every later tool comparison quicker and easier to defend to finance.

                ## Milestones
                1. Requirements sorted into must, should and nice to have.
                2. A weight agreed for each group and a one to five scale defined.
                3. Deal-breakers listed separately, such as data location or a missing CRM integration.
                4. The scorecard saved as a reusable file for every future tool decision.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A weighted scorecard with deal-breakers listed is saved and has been used for at least one tool comparison."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sort the requirements list into must, should and nice to have"
                - "Agree the weight for each group with the sales leader"
                - "Write the deal-breakers that rule a vendor out immediately"
                - "Save the scorecard where every future buyer of a sales tool can find it"
            - name: Current integration and data flow diagram
              description: |-
                ## Purpose
                Nobody can safely remove or replace a tool without knowing what is plugged into it, and many connections were set up by someone who has since left. A one-page diagram of every tool, every connection, the data each one moves and the account that runs it shows the real dependencies.

                ## Milestones
                1. Every active integration found in each tool's admin settings.
                2. A one-page diagram showing tools, connections and the data each one moves.
                3. The user account or key running each connection recorded.
                4. Connections owned by former employees moved to the stack owner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A current one-page integration diagram records the owner of every connection, with none left on a former employee's account."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Open the integrations page in each tool and list active connections"
                - "Draw the tools and connections on one page with the data each moves"
                - "Record which user account or key runs each connection"
                - "Move any connection tied to someone who has left onto the stack owner"
            - name: Sales software contract and renewal calendar
              description: |-
                ## Purpose
                Most sales software renews automatically, cancelling or reducing seats often needs 30 to 90 days' notice, and prices can rise at renewal unless a cap was agreed. A calendar holding every renewal date, notice deadline and uplift clause means you negotiate on your timetable instead of discovering the invoice.

                ## Milestones
                1. Every signed order form or accepted online terms page saved in one folder.
                2. Renewal date, term length, notice period and price uplift clause recorded for each tool.
                3. A calendar reminder set 30 days before each notice deadline.
                4. Tools on monthly terms marked as cancellable at short notice.

                ## Notes
                Start from the **Vendor** template. Keep one record per supplier so contracts, quotes and call notes stay together.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every sales tool has its renewal date, notice deadline and uplift clause recorded, with a reminder set before each notice deadline."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect every order form and saved online terms into one folder"
                - "Record renewal date, notice period and uplift clause for each tool"
                - "Set a calendar reminder 30 days before each notice deadline"
                - "Create a vendor record for each supplier from the template"
            - name: Sales stack runbook and admin notes
              description: |-
                ## Purpose
                When the one person who knows how the dialer is configured goes on holiday, small problems turn into lost selling days. A short runbook page per tool, covering admin access, key settings, integrations, support contacts and common fixes, lets the deputy or a new owner pick up the stack without guesswork.

                ## Milestones
                1. A runbook page for each tool with admin access, key settings and support contacts.
                2. The three most common rep problems and their fixes written for each tool.
                3. Links to the integration diagram and renewal calendar added to every page.
                4. The deputy has fixed at least one issue using only the runbook.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A runbook page exists for every sales tool, and the deputy owner has resolved at least one issue using it."
                cadence: rolling
              tasks:
                - "Create one runbook page per tool with admin access and support contacts"
                - "Write the three most common rep problems and fixes for each tool"
                - "Link each page to the integration diagram and renewal calendar"
                - "Update runbook pages for any setting changed in the last month @recurring(monthly:25)"
            - name: Monthly sales software spend reconciliation
              description: |-
                ## Purpose
                Charges drift between renewals as reps add seats, usage-based add-ons tick up and a cancelled tool keeps billing. Checking each month's software charges against the register takes about half an hour and catches overcharges while they are still easy to dispute.

                ## Milestones
                1. A monthly slot in the stack owner's calendar for the reconciliation.
                2. Each charge matched to a register entry and its expected amount.
                3. Unexpected charges queried with the vendor within a week.
                4. Six consecutive months reconciled with every difference resolved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months of sales software charges are matched to the register, with every unexpected charge queried and resolved."
                cadence: rolling
              tasks:
                - "Ask finance for a monthly export of software charges by supplier"
                - "Match the month's charges to the register and flag differences @recurring(monthly:12)"
                - "Email the vendor about any charge that does not match the contract"
                - "Note usage-based add-ons whose cost rose more than 10 percent"
            - name: Ninety-day renewal decision routine
              description: |-
                ## Purpose
                A renewal reviewed in its last week can only be accepted, while one reviewed three months out can be renegotiated, downsized or replaced. Looking ahead each month at anything renewing in the next 90 days, with usage figures and rep feedback in hand, turns renewals into decisions rather than surprises.

                ## Milestones
                1. Each month, every renewal falling in the next 90 days listed.
                2. Usage, cost and rep feedback gathered for each upcoming renewal.
                3. A renew, renegotiate, reduce or cancel decision recorded before each notice deadline.
                4. Notice given in writing wherever the decision is to reduce or cancel.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every renewal across twelve months has a recorded decision made before its notice deadline."
                cadence: rolling
              tasks:
                - "List every tool renewing in the next 90 days @recurring(monthly:3)"
                - "Pull usage figures and two rep opinions for each upcoming renewal"
                - "Record a renew, renegotiate, reduce or cancel decision for each one"
                - "Send written notice before the deadline when reducing or cancelling"
            - name: Quarterly licence true-up and seat reclaim
              description: |-
                ## Purpose
                Seats leak between audits: a rep moves into account management and keeps a dialer licence, or a contractor finishes but still holds a sequencing seat. A short quarterly true-up against the current team list keeps the seat count matched to the people who actually need each tool.

                ## Milestones
                1. The team list compared with every tool's seat list each quarter.
                2. Seats for movers and leavers reclaimed or reassigned.
                3. Seats for planned hires held back until start dates are confirmed.
                4. The quarterly seat count and cost recorded in the register.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly true-ups are completed in a year, each leaving no paid seat assigned to someone outside the current team."
                cadence: rolling
              tasks:
                - "Compare the team list with each tool's seat list @recurring(quarterly)"
                - "Reassign or remove seats belonging to movers and leavers"
                - "Hold back seat purchases for planned hires until start dates are confirmed"
                - "Record the new seat count and monthly cost in the register"
            - name: New sales tool request and approval process
              description: |-
                ## Purpose
                Without a front door, new tools arrive on a rep's card after a good webinar, and the overlap map fills up again within a year. A simple request form asking what problem the tool solves, which existing tool already covers it and what it costs, answered within a week, lets good ideas through and stops duplicates.

                ## Milestones
                1. A short request form with problem, current workaround, cost and overlap questions.
                2. An approval rule agreed, such as owner sign-off under a set amount and leader sign-off above it.
                3. Every request answered within seven days.
                4. A log of requests with each decision and its reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A request form and approval rule are in use, with every request in the last quarter logged and answered within seven days."
                cadence: rolling
              tasks:
                - "Write a five-question request form for new sales tools"
                - "Agree the spending level above which the sales leader must approve"
                - "Announce to the team that new tools now go through the form"
                - "Decide on open tool requests and reply to each requester @recurring(weekly:wed)"
            - name: Starter and leaver access checklist for sales tools
              description: |-
                ## Purpose
                Leavers who keep live access to the CRM, the dialer and the contact data tool can export a customer list or keep sequences running from your domain. A checklist that adds and removes every sales tool on the day someone starts or leaves closes that gap and stops paying for empty seats.

                ## Milestones
                1. A checklist naming every sales tool, its admin and the steps to add or remove a user.
                2. The checklist linked to the company's starter and leaver process.
                3. Leaver access removed on the last working day.
                4. A monthly check comparing leavers with active accounts in each tool.

                ## Notes
                Start from the **Operational checklist** template. Pause a leaver's sequences and scheduled calls before deactivating them, so prospects do not receive emails from someone who has gone.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every leaver in the last six months lost access to all sales tools on their final working day, confirmed by the monthly check."
                cadence: rolling
              tasks:
                - "Build a starter and leaver checklist covering every sales tool"
                - "Ask HR to send the stack owner every start and leave date"
                - "Pause a leaver's sequences and scheduled calls before removing access"
                - "Compare the month's leavers with active accounts in each tool @recurring(monthly:20)"
            - name: Weekly integration sync health check
              description: |-
                ## Purpose
                Integrations fail quietly: an expired token or a renamed field can stop calls logging to the CRM for weeks before anyone notices the activity report looks thin. Ten minutes a week reading each connector's error log catches breaks while they cost days of data, not months.

                ## Milestones
                1. Error logs or sync status pages for every integration bookmarked in one place.
                2. A weekly ten-minute check booked in the stack owner's calendar.
                3. Each failure logged with its cause and fix.
                4. Repeated failures escalated to the vendor with examples.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly sync checks are recorded, with every failure logged and fixed or escalated."
                cadence: rolling
              tasks:
                - "Bookmark the sync status page for every integration in one folder"
                - "Read each integration's error log and note any failures @recurring(weekly:tue)"
                - "Raise a support ticket with examples for any failure seen twice"
                - "Switch on failure alert emails wherever a tool offers them"
            - name: Monthly tool adoption scorecard
              description: |-
                ## Purpose
                Half-used tools cost the full price and deliver a fraction of the benefit, and low adoption is usually a setup or training gap rather than stubbornness. A monthly scorecard of two or three usage measures per rep, such as calls placed through the dialer or meetings booked by link, shows exactly where help is needed.

                ## Milestones
                1. Two or three usage measures chosen for each core tool.
                2. A monthly scorecard per rep built from admin reports.
                3. Reps below the agreed level offered a short session or setup fix.
                4. The adoption trend reported to the sales leader each quarter.

                ## Notes
                Use the scorecard to find setup and training gaps, not to rank or discipline reps. A low score often means a broken login or a missing integration.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly adoption scorecards are completed, with each rep below the agreed level offered help within two weeks."
                cadence: rolling
              tasks:
                - "Choose two usage measures for each core sales tool"
                - "Build the adoption scorecard from each tool's admin reports @recurring(monthly:8)"
                - "Offer a 20-minute setup session to reps below the agreed level"
                - "Send the quarter's adoption trend to the sales leader"
            - name: Annual sales stack review and plan
              description: |-
                ## Purpose
                Once a year the whole stack deserves a fresh look: the team has changed, vendors have shipped features that make other tools redundant, and prices have moved. Reviewing cost, usage, overlap and rep satisfaction for every tool together, a few months before the busiest renewals, produces a single plan for the year ahead.

                ## Milestones
                1. Cost, seat use, adoption and rep satisfaction gathered for every tool.
                2. The overlap grid refreshed against current vendor features.
                3. A keep, change or drop decision recorded for every tool.
                4. A one-page stack plan for the year shared with finance and sales leadership.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly stack plan with a decision for every tool is shared with finance and the sales leader before the main renewal season."
                cadence: cyclic
              tasks:
                - "Book the annual stack review three months before the largest renewal @recurring(yearly)"
                - "Gather cost, usage and satisfaction figures for every tool"
                - "Record a keep, change or drop decision for each tool"
                - "Ask the agent to draft the one-page stack plan from the decisions"
            - name: Quarterly rep feedback pulse on sales tools
              description: |-
                ## Purpose
                Reps are the people who feel a slow dialer or a clumsy CRM screen every day, and they rarely complain to whoever bought it. A five-question pulse each quarter, asking what slows them down and what they have quietly stopped using, gives the stack owner evidence before renewals rather than corridor anecdotes.

                ## Milestones
                1. A five-question survey covering each core tool.
                2. The survey sent every quarter with a response rate above 70 percent.
                3. The top three frustrations from each pulse written up.
                4. One fix made from each pulse and reported back to the team.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly pulses are run in a year, each with at least 70 percent response and one fix reported back to the team."
                cadence: rolling
              tasks:
                - "Write five survey questions about speed, gaps and unused tools"
                - "Send the tool feedback pulse to every rep @recurring(quarterly)"
                - "Summarise the three biggest frustrations from the responses"
                - "Tell the team which fix was made because of their feedback"
            - name: Reading SaaS order forms and renewal clauses
              description: |-
                ## Purpose
                Software contracts put the terms that cost the most in plain sight: automatic renewal, notice periods, annual price uplifts, minimum seat commitments and data export rights. Learning to read an order form and its linked terms, and to spot the handful of clauses that matter, lets you push back before signing rather than after.

                ## Milestones
                1. A checklist of the clauses to find in any software order form.
                2. Two existing contracts read against the checklist with findings noted.
                3. Questions for the vendor written for any clause you could not interpret.
                4. Anything with legal effect checked with a lawyer or legal adviser before signing.

                ## Notes
                This is about knowing what to look for. Interpreting a specific contract belongs with a qualified adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A contract clause checklist exists and has been used to review two current sales tool contracts, with findings written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the clauses to find: renewal, notice, uplift, minimums, data export and liability"
                - "Read your largest sales tool contract against the list"
                - "Write every clause you could not interpret as a question for the vendor"
                - "Review a second contract the same way and compare the terms"
            - name: Integration basics for non-engineers
              description: |-
                ## Purpose
                Vendors promise that their tools integrate, but a one-way nightly sync and a live two-way connection are very different things. Understanding APIs, webhooks, sync direction, field mapping and rate limits well enough to ask sharp questions saves months of disappointment after purchase.

                ## Milestones
                1. Plain-language notes on APIs, webhooks, native connectors and middleware.
                2. The difference between one-way, two-way and scheduled syncs explained in your own words.
                3. A list of integration questions to ask every vendor.
                4. One existing integration examined and its sync type and limits recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written set of integration questions has been used with at least one vendor, and one existing integration is documented by sync type and limits."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read one vendor's integration documentation from start to finish"
                - "Write plain-language notes on APIs, webhooks and sync direction"
                - "Draft ten integration questions to ask in every vendor demo"
                - "Check how often the CRM's busiest integration syncs and record its limits"
            - name: Sales software pricing models compared
              description: |-
                ## Purpose
                Per-seat, tiered, usage-based credits, platform fees and bundles all behave differently as a team grows, and the cheapest quote for ten reps can be the dearest at forty. Learning how each model scales, and modelling your own hiring plan against them, prevents a pricing shock in year two.

                ## Milestones
                1. Notes on per-seat, tiered, usage, credit and platform pricing.
                2. Hidden costs listed, such as onboarding fees, premium support, API access and storage.
                3. Your two-year headcount plan modelled against two pricing structures.
                4. A rule of thumb written for which model suits your team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-year cost model compares at least two pricing structures for your planned headcount, with hidden costs included."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect pricing pages for three tools in one category"
                - "List hidden costs such as onboarding, premium support and API access"
                - "Model your two-year headcount plan against two pricing structures"
                - "Write down which pricing model suits your team and why"
            - name: Running scripted vendor demos
              description: |-
                ## Purpose
                Left to themselves, vendors demo their best features on perfect sample data. Sending a script of your own scenarios beforehand, such as logging a call from a phone or reassigning a territory, and scoring every vendor on the same tasks, shows how each tool handles your real work.

                ## Milestones
                1. Five scenarios from your real sales process written as a demo script.
                2. The script sent to each vendor at least a week before the demo.
                3. Every demo scored on the shared scorecard by at least two people.
                4. Scores and notes compared in one table the day after the last demo.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "At least two vendors have been demoed against the same written script and scored by two people on the shared scorecard."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write five demo scenarios from your own sales process"
                - "Send the script to each shortlisted vendor a week ahead"
                - "Ask two colleagues to score every demo on the shared scorecard"
                - "Compare scores in one table the day after the final demo"
            - name: Security and privacy screening of sales tools
              description: |-
                ## Purpose
                Sales tools hold customer contact details, call recordings and email content, so a careless vendor can expose personal data you are responsible for. Knowing the basic questions, such as where data is stored, who at the vendor can see it, whether a data processing agreement is offered and which independent security reports exist, lets you screen vendors before a customer or auditor asks.

                ## Milestones
                1. A short list of security and privacy questions for any sales tool.
                2. Each current tool's data location, security reports and data processing agreement recorded.
                3. Gaps raised with the vendor and your IT or data protection lead.
                4. Updated security reports requested from critical vendors each year.

                ## Notes
                This is screening, not certification. Bring in your IT, security or data protection lead for anything holding recordings or large contact databases.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every current sales tool has its data location, security report status and data processing agreement recorded, with gaps raised."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write ten security and privacy questions to ask any sales tool vendor"
                - "Record data location and processing agreement status for each current tool"
                - "Raise any gap with the vendor and your IT or data protection lead"
                - "Request updated security reports from critical vendors @recurring(yearly)"
            - name: Judging AI features in sales tools
              description: |-
                ## Purpose
                Nearly every sales vendor now sells AI note-taking, email drafting or deal scoring, often as a paid add-on that overlaps with something you already own. Learning to ask what data the feature uses, whether it trains on your content, how accuracy was measured and what it costs per seat separates useful features from demo theatre.

                ## Milestones
                1. A list of the AI features your current tools already include.
                2. Five evaluation questions covering data use, training, accuracy and cost.
                3. One AI feature tested on real calls or emails for two weeks.
                4. A written verdict on whether the feature earns its price.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One AI add-on has been tested for two weeks on real work, with a written verdict covering accuracy, data use and cost."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the AI features already included in tools you pay for"
                - "Write five questions on data use, training, accuracy and cost"
                - "Test one AI feature on a rep's real calls or emails for two weeks"
                - "Write a one-paragraph verdict on whether it is worth paying for"
            - name: Call recording consent rules where you sell
              description: |-
                ## Purpose
                Recording and transcribing calls is allowed in many places only with notice or the consent of everyone on the line, and the rules differ by country and sometimes by state or province. Collecting the rules for each place your reps call, and checking how the recording tool handles announcements, keeps the team from recording calls it should not.

                ## Milestones
                1. The countries and regions your reps call listed.
                2. Official guidance or legal advice on recording consent gathered for each.
                3. The recording tool's announcement and consent settings matched to the strictest rule that applies.
                4. A one-paragraph rule for reps on when and how to mention recording.

                ## Notes
                Start from the **Compliance control** template. Confirm the rules with a legal adviser; this project organises the requirements, it does not interpret the law.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written consent rule exists for each region the team calls, matched by settings in the recording tool and confirmed by a legal adviser."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every country and region your reps call into"
                - "Gather official guidance on call recording consent for each one"
                - "Set the recording tool's announcement to meet the strictest rule"
                - "Check for changes to recording consent rules with your adviser @recurring(yearly)"
            - name: CRM platform selection
              description: |-
                ## Purpose
                The CRM is the system most other sales tools plug into, so a poor choice makes every later decision harder and switching costs months. Running a structured selection, from requirements and scripted demos to a pilot and reference calls, gives you a choice you can defend for the next five years.

                ## Milestones
                1. A shortlist of three CRMs that meet every must-have requirement.
                2. Scripted demos scored on the shared scorecard.
                3. Two reference calls held with customers of a similar size for each finalist.
                4. A final choice recorded with its three-year cost and the reasons.

                ## Notes
                Start from the **Purchase decision** template. Setting up stages, fields and permissions after the choice belongs in CRM administration.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A CRM is chosen from a scored shortlist of three, with reference calls held and a three-year cost recorded in the decision."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Shortlist three CRMs that meet every must-have requirement"
                - "Book scripted demos with each shortlisted vendor"
                - "Ask each finalist for two customer references of a similar size"
                - "Record the final choice, three-year cost and reasons"
            - name: Dialer and calling platform choice
              description: |-
                ## Purpose
                Phone-heavy teams live in their dialer, and call quality, local number presence, CRM logging and power or parallel dialling modes vary widely between providers. Comparing two options on real call blocks, with connection rates and logging accuracy measured, is the only reliable test.

                ## Milestones
                1. Calling requirements written, including dialling modes, local numbers and CRM logging.
                2. Two dialers trialled by real reps on live call blocks.
                3. Connection rate, call quality and logging accuracy recorded for each.
                4. A choice made with number porting and contract terms confirmed.

                ## Notes
                Check whether your CRM's built-in calling already covers what reps need before buying a separate dialer.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two dialers have been trialled on live call blocks with measured connection rates, and one is chosen with number porting confirmed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Check whether the CRM's built-in calling meets the team's needs"
                - "Write the calling requirements, from dialling modes to CRM logging"
                - "Run a week of live call blocks on each trial dialer"
                - "Confirm number porting steps and timings before signing"
            - name: Sales engagement and sequencing platform choice
              description: |-
                ## Purpose
                Sequencing tools run multi-step email, call and social tasks, and once reps build their cadences in one, moving is painful. Choosing on CRM sync quality, sending controls, task views and reporting, rather than on the size of the template library, gets the decision right the first time.

                ## Milestones
                1. Requirements set for CRM sync, sending controls, task management and reporting.
                2. Two finalists tested with the same three sequences.
                3. CRM activity sync checked for duplicates and missing records.
                4. A choice recorded with seat cost and the effort to move existing sequences.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two sequencing platforms have been tested with identical sequences, and the recorded choice includes sync test results and seat cost."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write requirements for CRM sync, sending controls and task views"
                - "Build the same three test sequences in each finalist"
                - "Check the CRM for duplicate or missing activities after a week"
                - "Record the choice with seat cost and the work to move existing sequences"
            - name: Call recording and conversation intelligence choice
              description: |-
                ## Purpose
                Call recording tools now transcribe, summarise and score calls, and many teams end up recording in the dialer, the video meeting tool and a separate platform at once. Deciding which single tool records, where recordings are stored and who can search them avoids paying three times and leaves managers one library to coach from.

                ## Milestones
                1. Every tool currently recording calls or meetings listed.
                2. Requirements written for transcription, search, CRM sync and retention.
                3. One recording tool chosen and recording switched off in the others.
                4. A retention period for recordings agreed and set.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One tool is the only place calls are recorded, with recording disabled elsewhere and a retention period set."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every tool that currently records calls or meetings"
                - "Write requirements for transcription, search, CRM sync and retention"
                - "Switch off recording in the tools you are not keeping"
                - "Set the agreed retention period in the chosen recording tool"
            - name: Contact data and enrichment provider comparison
              description: |-
                ## Purpose
                Contact data providers differ most in coverage of your particular markets, and a provider strong in one country can be thin in the next. Testing two or three on the same list of 200 target accounts, and measuring bounce and phone connection rates, shows which data is worth the credits.

                ## Milestones
                1. A test list of 200 accounts from your real target market.
                2. The same list enriched by two or three providers.
                3. Email bounce rate, mobile number coverage and job title accuracy measured for each.
                4. A provider chosen with a credit allowance sized to the team's real usage.

                ## Notes
                Ask each provider how it sources data and how it handles opt-out requests, and record the answers with your privacy notes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or more data providers have been tested on the same 200 accounts, with measured bounce and coverage rates and a choice recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build a test list of 200 accounts from your target market"
                - "Ask two or three providers to enrich the same list during a trial"
                - "Measure bounce rate, phone coverage and title accuracy for each"
                - "Spot-check 50 enriched records against public sources @recurring(quarterly)"
            - name: Scheduling, e-signature and document tool standards
              description: |-
                ## Purpose
                Small tools like meeting links, e-signature and proposal viewers are cheap on their own, yet a team often pays for two of each because different reps chose differently. Picking one standard per job, ideally one already bundled with something you own, cuts cost and gives buyers a consistent experience.

                ## Milestones
                1. Every scheduling, e-signature and document sharing tool in use listed.
                2. Features bundled with your CRM or office suite checked.
                3. One standard chosen for each job and announced to the team.
                4. The duplicates cancelled at their next renewal date.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One standard tool each for scheduling, e-signature and document sharing is in use, with duplicates cancelled."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every scheduling, signing and document tool reps use"
                - "Check which of these jobs your CRM or office suite already covers"
                - "Choose one standard for each job and tell the team"
                - "Cancel the duplicates at their next renewal date"
            - name: CPQ buy or wait decision
              description: |-
                ## Purpose
                Configure, price, quote software earns its cost when products have many options, approvals are frequent and quote errors lose money, but for a simple price list it adds months of setup. Measuring quote volume, error rate and time per quote tells you whether to buy now, use the CRM's basic quoting or wait a year.

                ## Milestones
                1. Monthly quote volume and average time per quote measured.
                2. Quote errors and their cost over the last six months counted.
                3. The CRM's built-in quoting tested on your three most complex quotes.
                4. A buy, use built-in or revisit decision recorded with the threshold for revisiting.

                ## Notes
                Running CPQ once it is bought, from price books to templates, belongs in quotes and CPQ management.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A CPQ decision is recorded from measured quote volume, error rate and a test of built-in quoting, with a threshold for revisiting."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count last quarter's quotes and time how long three typical ones took"
                - "List quote errors from the last six months and what each cost"
                - "Build your three hardest quotes in the CRM's built-in quoting"
                - "Record the decision and the quote volume that would trigger a revisit"
            - name: Native connectors versus integration middleware
              description: |-
                ## Purpose
                Native connectors are free and simple but often limited to fixed field mappings, while integration platforms connect almost anything at a monthly cost and with another system to maintain. Deciding connection by connection, from the integration diagram, stops the team from buying a platform for one sync or building fragile workarounds.

                ## Milestones
                1. Each needed connection listed with whether a native connector exists.
                2. The gaps in each native connector noted.
                3. Middleware cost and maintenance effort estimated for connections that need it.
                4. A decision recorded per connection and the integration diagram updated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every needed connection has a recorded choice between native connector and middleware, with cost, reflected in the integration diagram."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark which needed connections have a native connector"
                - "Note the field mapping and sync gaps in each native connector"
                - "Price a middleware plan for the connections that need it"
                - "Update the integration diagram with the decision for each connection"
            - name: All-in-one suite or best-of-breed tools
              description: |-
                ## Purpose
                One vendor's suite gives a single login, one bill and fewer integrations, while separate specialist tools are usually better at each job but cost more to connect and administer. Scoring both approaches against your requirements and three-year cost turns a debate driven by preference into a decision.

                ## Milestones
                1. The suite option and the best-of-breed option each priced over three years.
                2. Both scored against the must-have requirements.
                3. Integration and admin effort estimated for each approach.
                4. A direction chosen and written into the stack plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of suite and best-of-breed options, with three-year costs and requirement scores, records the chosen direction."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Price a suite option and a best-of-breed option over three years"
                - "Score both approaches against the must-have requirements"
                - "Estimate the admin hours each approach would need every month"
                - "Write the chosen direction into the stack plan"
            - name: Time-boxed tool pilot with real reps
              description: |-
                ## Purpose
                Demos show what a tool can do; a pilot shows what your reps will actually do with it. Running a two-week trial with three to five reps, agreed success measures and live deals, and ending it with a clear yes or no, stops trials drifting into an unplanned paid rollout.

                ## Milestones
                1. Pilot reps, length and three success measures agreed with the vendor.
                2. Trial accounts set up with real data and the key integrations.
                3. Pilot results and rep feedback collected on the final day.
                4. A go or no-go decision recorded against the success measures.

                ## Notes
                Confirm in writing that the trial will not convert into a paid contract automatically.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pilot with three to five reps ends on time with results against three agreed measures and a recorded go or no-go."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree three success measures for the pilot with the vendor"
                - "Choose three to five reps with different selling styles for the trial"
                - "Confirm in writing that the trial does not convert to paid automatically"
                - "Record the go or no-go decision against the measures"
            - name: Renewal negotiation for the largest sales contract
              description: |-
                ## Purpose
                Your biggest sales software contract, usually the CRM or the engagement platform, is where the largest saving sits, and vendors tend to negotiate hardest near the end of their own quarter. Starting four months out with usage data, a credible alternative and a clear written ask gives you the strongest position.

                ## Milestones
                1. Usage, seat need and satisfaction gathered four months before renewal.
                2. A competing quote or credible alternative in hand.
                3. A written ask covering price, uplift cap, seat flexibility and term length.
                4. The renewed contract signed before the notice deadline on the agreed terms.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The largest sales tool contract is renewed or replaced before its notice deadline, with the agreed price, uplift cap and seat terms in writing."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pull seat usage and adoption data for the contract"
                - "Get one competing quote to use as a benchmark"
                - "Write the ask for price, uplift cap, seat flexibility and term"
                - "Book the first negotiation call with the account manager"
            - name: New sales tool go-live and rep training
              description: |-
                ## Purpose
                Most tool rollouts are decided in the first fortnight, when reps hit a missing field or a broken sync and drift back to the old way. A dated go-live with integrations tested, short role-based training and a week of daily office hours gets the team working in the new tool by the end of week two.

                ## Milestones
                1. Go-live date set and announced, with integrations tested in advance.
                2. A thirty-minute training session held for each role, with a recording saved.
                3. Daily office hours run through the first week.
                4. The old tool switched off on a date announced in advance.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new tool is live on the announced date, every rep has attended training and the old tool is switched off within 30 days."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Fix the go-live date and announce it to the team"
                - "Test every integration with real records a week before launch"
                - "Run a 30-minute training session for each role and record it"
                - "Hold a daily 15-minute office hour for the first week"
            - name: Next year's sales software budget submission
              description: |-
                ## Purpose
                Budgets are set months before tools are needed, and a stack line written as last year plus a bit hides both savings and coming costs. Building the submission from the register, known renewals, planned hires and the stack plan gives finance a number they can trust and gives you a mandate to spend it.

                ## Milestones
                1. Next year's renewals and contracted uplifts listed.
                2. Seat costs for planned hires added by month of start.
                3. New tools in the stack plan priced and savings from cancellations deducted.
                4. The budget submitted on time with a one-page explanation.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A sales software budget is submitted by the finance deadline, built from renewals, planned hires and the stack plan, with a one-page explanation."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask finance for the date next year's budget is due @recurring(yearly)"
                - "List next year's renewals with any contracted price uplift"
                - "Add seat costs for planned hires by expected start month"
                - "Write a one-page explanation of the changes from this year"
            - name: Cancelling a sales tool and exporting its data
              description: |-
                ## Purpose
                Cancelling a sales tool without a plan can lose years of call recordings, sequence history or enriched contacts, and some vendors delete data within days of the contract ending. Exporting what you need, checking it opens, and getting deletion confirmed in writing closes the account cleanly.

                ## Milestones
                1. The data to keep agreed with sales leadership and export formats checked.
                2. Exports taken and opened successfully before the contract ends.
                3. Integrations to the tool removed and the diagram updated.
                4. Written confirmation of cancellation and data deletion received from the vendor.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The cancelled tool's data is exported and verified, its integrations removed and the vendor's written deletion confirmation filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree which records, recordings and history must be kept"
                - "Ask the vendor how long data stays available after the end date"
                - "Export the data and open each file to confirm it is complete"
                - "Request written confirmation of cancellation and data deletion"
            - name: Responding to a vendor price increase
              description: |-
                ## Purpose
                Vendors sometimes announce price rises, move features into a higher tier or retire a plan with only a few weeks' notice. A calm response, checking the contract for what they can actually change, measuring the real cost and pricing an alternative, often wins a delay, a discount or a better tier.

                ## Milestones
                1. The contract checked for what the vendor may change and when.
                2. The real annual cost of the change calculated for your seat count.
                3. An alternative priced, even if you would prefer to stay.
                4. A written outcome agreed: new terms, a delayed increase or a plan to switch.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written response to the price change is sent within two weeks, with the outcome and new annual cost recorded in the register."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the contract for what the vendor can change mid-term"
                - "Calculate the annual cost of the increase for your seat count"
                - "Price one alternative tool as a fallback"
                - "Reply to the vendor in writing with your position within two weeks"
            - name: Founder's first sales stack on a tight budget
              description: |-
                ## Purpose
                A founder selling alone or with one hire needs a CRM, a way to send and track email, a scheduling link and perhaps e-signature, and very little else. Starting on free or starter tiers that can grow, and holding off on dialer, data and AI add-ons until there is a repeatable motion, keeps cash for the first hire.

                ## Milestones
                1. A starter stack of no more than four tools chosen.
                2. A monthly cap on sales software set and the current total recorded.
                3. Each tool checked for an upgrade path and a full data export.
                4. A list written of tools deliberately postponed until the first sales hire.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A founder's stack of four tools or fewer is in use, with its monthly cost recorded and a list of postponed tools written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the four jobs your sales process needs a tool for today"
                - "Choose a free or starter tier for each that can export your data"
                - "Set a monthly cap for sales software and record the current total"
                - "List the tools you will not buy until the first sales hire starts"
            - name: Owner-run stack for a small business
              description: |-
                ## Purpose
                In a small business the owner or office manager is the stack owner, buyer and help desk, usually in odd hours between customers. Keeping the stack to one main suite and a couple of add-ons, with a monthly half-hour check, keeps it working without becoming another job.

                ## Milestones
                1. The stack reduced to one main suite plus no more than three add-ons.
                2. Admin logins and billing contacts stored in the business's password manager.
                3. A monthly 30-minute check of charges, seats and sync logged.
                4. A support contact noted for each tool.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The business runs on one suite and three or fewer add-ons, with a monthly check logged for six months."
                cadence: rolling
              tasks:
                - "Write down the one suite most of your sales work happens in"
                - "Store every admin login and billing contact in the business password manager"
                - "Run a 30-minute check of charges, seats and sync @recurring(monthly:15)"
                - "Note a support contact and help page for each tool"
            - name: Inheriting a bloated stack as a new sales manager
              description: |-
                ## Purpose
                New sales managers often inherit a dozen tools, half-configured, with renewals coming up that they did not choose. Spending the first 90 days listening, measuring usage and making one or two visible fixes earns trust from reps and finance before anything is cut.

                ## Milestones
                1. The inventory and utilisation audit completed in the first month.
                2. Every rep asked which tools they would keep and which they ignore.
                3. One or two quick fixes made, such as removing a broken integration.
                4. A 90-day stack proposal presented to the sales leader and finance.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A 90-day stack proposal, based on usage data and every rep's input, is presented to the sales leader and finance."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your predecessor or the sales leader why each tool was bought"
                - "Ask every rep which tools they would keep and which they ignore"
                - "Fix one visible annoyance in the first month"
                - "Present a 90-day stack proposal to the sales leader and finance"
            - name: Scaling the stack from five to twenty-five reps
              description: |-
                ## Purpose
                Tools picked for five people strain at twenty-five: starter tiers cap users or automations, shared logins appear and manual exports stop working. Planning the step up before hiring, by checking tier limits, admin needs and pricing at the new headcount, avoids a forced mid-year migration.

                ## Milestones
                1. Tier limits checked for every tool against 25 users.
                2. Tools that will need replacing or upgrading at the new size listed.
                3. Admin time needed at 25 reps estimated and assigned.
                4. The upgrade sequence timed against the hiring plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scaling plan lists every tool's limit at 25 users, the upgrades needed and their timing against the hiring plan."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check every tool's tier limits for users, automations and storage"
                - "List tools that will break or need upgrading at 25 reps"
                - "Price each upgrade at the new headcount"
                - "Line the upgrades up with the hiring plan month by month"
            - name: Rationalising tools after a merger or acquisition
              description: |-
                ## Purpose
                Two sales teams joining usually bring two of everything, with contracts ending at different times and loyal users on both sides. Choosing a target stack early, then retiring the duplicates in renewal order, avoids both a rushed switch and years of paying twice.

                ## Milestones
                1. Both companies' tool registers combined into one.
                2. A target stack chosen with a keep or retire decision per tool.
                3. Retirement dates set by each contract's renewal.
                4. Users from both teams trained on the shared tools.

                ## Notes
                Merging the CRM records themselves is CRM administration work. This project covers the tools around it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A combined register and target stack exist, with a retirement date set for every duplicated tool."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Combine both teams' tool registers into one"
                - "Decide which tool to keep in each duplicated category"
                - "Set each retirement date to match the contract's renewal"
                - "Tell both teams which tools are staying and when changes happen"
            - name: Stack readiness for selling in a new region
              description: |-
                ## Purpose
                Selling into a new country or time zone can expose gaps: no local phone numbers, contact data that is thin in that market, data location rules or a tool that does not support the language. Checking each tool against the new region before reps start avoids handing them a stack that does not work there.

                ## Milestones
                1. Each tool checked for local numbers, data coverage, language and data location in the new region.
                2. Gaps listed with a fix or a regional add-on priced.
                3. Data location requirements confirmed with your privacy adviser.
                4. Regional reps' accounts ready before their first day.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every sales tool has been checked against the new region's needs, with gaps fixed or priced before the first regional rep starts."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check whether the dialer offers local numbers in the new country"
                - "Test contact data coverage on 50 accounts in the new region"
                - "Confirm data location requirements with your privacy adviser"
                - "Set up the regional reps' accounts before their start date"
            - name: Three-year total cost of ownership model
              description: |-
                ## Purpose
                Subscription price is often less than half the real cost of a sales tool once implementation, integrations, admin time, training and the switching cost at the end are counted. A three-year model that includes all of these turns two similar-looking quotes into a clear difference.

                ## Milestones
                1. A model with lines for licences, implementation, integrations, admin hours, training and exit cost.
                2. Admin and rep time valued at an agreed hourly rate.
                3. Two options compared over three years.
                4. The model reused for the next major purchase.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-year cost model covering six cost lines has been used to compare two options for a real purchase."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Build a model with lines for licences, setup, integrations, admin, training and exit"
                - "Agree an hourly rate for valuing admin and rep time"
                - "Compare two current options over three years"
                - "Ask the agent to summarise the model's result in three sentences for finance"
            - name: Build versus buy for internal sales tools
              description: |-
                ## Purpose
                Teams with an engineer nearby are tempted to build their own dashboard, quoting sheet or lead scoring script, and some of these are sensible. Weighing build and maintenance time, who supports it when the builder leaves, and the price of the nearest product gives a clear rule for when building makes sense.

                ## Milestones
                1. The proposed internal tool described with its users and inputs.
                2. Build hours and yearly maintenance hours estimated with the builder.
                3. The nearest commercial product priced for comparison.
                4. A decision recorded, with a named maintainer if building.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A build or buy decision is recorded for one proposed tool, with build and maintenance hours estimated and a named maintainer if built."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write one paragraph on what the proposed internal tool must do"
                - "Estimate build and yearly maintenance hours with the builder"
                - "Price the nearest commercial product for the same job"
                - "Name who maintains it if the decision is to build"
            - name: AI tool policy for the sales team
              description: |-
                ## Purpose
                Reps are already pasting call notes and customer emails into AI assistants, some approved and some not. A short policy listing approved AI tools, what data may go into them and who reviews new ones protects customer data without banning tools that save real time.

                ## Milestones
                1. Every AI tool reps currently use listed, approved or not.
                2. A one-page policy on approved tools and permitted data.
                3. Data protection and IT leads consulted on the policy.
                4. Approved tools reviewed each quarter as vendors change their terms.

                ## Notes
                Start from the **Risk register** template to record each AI tool's data risks and the controls agreed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page AI tool policy is agreed with data protection and IT leads, and approved tools are reviewed every quarter."
                cadence: rolling
              tasks:
                - "Ask reps anonymously which AI tools they use for sales work"
                - "Write a one-page policy on approved AI tools and permitted data"
                - "Review the policy with your data protection and IT leads"
                - "Review approved AI tools and their data terms @recurring(quarterly)"
---

# Sales Tech Stack Selection

This area is for the sales manager, founder or small-business owner who decides which sales tools the team pays for and how they connect. It starts with foundations (an inventory and spend register, a named owner, a utilisation audit, an overlap map, requirements, systems of record and a renewal calendar), then the operating routines, the buying skills worth learning, tool-by-tool selection decisions, dated events such as a major renewal or a go-live, situations from a founder's first stack to inheriting a bloated one, and finally specialist work on total cost, build versus buy and AI policy.

What repeats is a weekly integration check and tool request triage, a monthly spend reconciliation, renewal look-ahead, leaver check, adoption scorecard and runbook update, quarterly seat true-ups, rep pulses and AI tool reviews, and a yearly stack review and budget submission. The Vendor, Operational checklist, Compliance control, Purchase decision, Onboarding plan and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
