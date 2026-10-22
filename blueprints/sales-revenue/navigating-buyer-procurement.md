---
id: sales-revenue.navigating-buyer-procurement
name: Navigating Buyer Procurement
description: "A supplier document pack, a security answer bank, clear internal owners and a weekly blocker sweep that carry deals through vendor registration, security questionnaires, legal review and purchase orders without stalling."
category: business
version: 1.0.0
tags: [sales-revenue, navigating-buyer-procurement, team, enterprise, small-business, procurement, vendor-onboarding, security-questionnaires]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Navigating Buyer Procurement
          description: "Getting through the customer's vendor registration, security questionnaires, legal review and purchasing approvals without letting the deal stall."
          projects:
            - name: Audit of where recent deals stalled in procurement
              description: |-
                ## Purpose
                Most sellers can name the deal that sat in vendor onboarding for two months, but few know whether security, legal or purchase orders cost them more time last year. Pulling the last ten to fifteen deals that reached verbal agreement and dating each procurement step shows where the days really go, so the rest of this area fixes the right bottleneck first.

                ## Milestones
                1. A list of the last ten to fifteen deals that reached verbal agreement, won or lost.
                2. For each deal, the dates of vendor registration, security review, legal review and purchase order recorded where known.
                3. The median days spent in each step worked out across the list.
                4. The two steps that cost the most days named, with one example deal for each.
                5. A short note shared with the sales manager stating which bottleneck to fix first.

                ## Notes
                Email threads and calendar invites usually hold the dates the CRM never captured. Search for the buyer's procurement domain or the word questionnaire to rebuild the timeline.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written audit of at least ten recent deals showing median days per procurement step, with the top two bottlenecks named."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the last fifteen deals that reached verbal agreement"
                - "Search email for each buyer's onboarding, security and purchase order dates"
                - "Work out the median days spent in each procurement step"
                - "Write a one-page note naming the two slowest steps with examples"
            - name: Procurement discovery question set
              description: |-
                ## Purpose
                Procurement surprises are usually questions nobody asked in the first two meetings. A short set of questions about how this buyer registers suppliers, which purchases trigger a security review, whose contract paper is used and who approves spend at this value turns the hidden path into a dated plan while there is still time to run steps in parallel.

                ## Milestones
                1. Eight to ten procurement questions written in plain language a champion can answer or pass on.
                2. The questions added to the discovery call guide the team already uses.
                3. Answers captured on three live deals and stored on the deal record.
                4. At least one step started earlier than it would have been because of an answer.

                ## Notes
                Ask the champion who in procurement they would loop in, not whether procurement is involved. The second question invites a hopeful no.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A procurement question set sits in the discovery guide and has been used on at least three live deals with answers recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft ten questions on registration, security, legal paper and spend approval"
                - "Add the questions to the team's discovery call guide"
                - "Ask the questions on the next three discovery calls"
                - "Record each buyer's answers on the deal record"
            - name: Internal owners and turnaround times for buyer requests
              description: |-
                ## Purpose
                Tax forms, insurance certificates, security questionnaires and contract redlines from a buyer each land on a different desk inside your own company, and when nobody owns them they wait. Naming one owner and one backup for each request type, with a turnaround target, means the seller can promise a date to the buyer and keep it.

                ## Milestones
                1. Every common request type listed: supplier forms, tax and bank details, insurance, security, privacy, legal, finance references.
                2. An owner and a backup named for each type and agreed with their managers.
                3. A turnaround target set for each, such as two working days for forms and ten for a long questionnaire.
                4. The table published where every seller can find it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published table names an owner, a backup and a turnaround target for each buyer request type, agreed by each owner's manager."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every request type buyers sent in the last six months"
                - "Agree an owner and a backup for each type with their managers"
                - "Set a turnaround target for each request type"
                - "Publish the table in the sales team's shared space"
            - name: Supplier onboarding document pack
              description: |-
                ## Purpose
                Almost every new customer asks for the same dozen items to set you up as a supplier: company registration details, a tax form, a bank confirmation letter on letterhead, insurance certificates, a signed code of conduct and contacts for remittance. Keeping current copies in one folder turns a week of hunting into a same-day reply, which buyers notice.

                ## Milestones
                1. A folder holding the company registration extract, tax identification forms and a bank confirmation letter.
                2. Current insurance certificates and a list of standard policies such as anti-bribery, modern slavery and data protection.
                3. A one-page company fact sheet with legal name, registered address, tax numbers, remittance contact and accounts email.
                4. Each document labelled with its issue date and the date it next needs replacing.
                5. Access given to everyone named as an owner of buyer requests.

                ## Notes
                Start from the **Operational checklist** template. Keep bank details out of the shared fact sheet and send them only through the buyer's portal or a verified channel.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared folder holds every standard onboarding document with issue and replacement dates, and a new supplier form can be answered from it in one day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the last three supplier forms customers sent you"
                - "List every document and fact those forms asked for"
                - "Request a fresh bank confirmation letter from your bank"
                - "Write the one-page company fact sheet"
                - "Label each document with its issue and replacement dates"
            - name: Security documentation library with sharing rules
              description: |-
                ## Purpose
                Buyers' security teams ask for audit reports, certificates, penetration test summaries, policies and a list of sub-processors, and some of those can only be shared under a non-disclosure agreement. One library that records what each document is, who may send it and under what conditions stops sellers either stalling for days or emailing a confidential report to anyone who asks.

                ## Milestones
                1. Every security document the company holds listed with owner, date and period covered.
                2. Each document marked as public, shareable under NDA or internal only.
                3. A shareable summary of the latest penetration test agreed with whoever commissioned it.
                4. A written rule on how sellers request and send each class of document.
                5. Gaps the security owner plans to close, such as a missing business continuity summary, listed with dates.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A library lists every security document with its sharing class and owner, and a seller can send the right document under the right conditions within one working day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the security owner for every report, certificate and policy you hold"
                - "Mark each document public, NDA only or internal"
                - "Agree a shareable penetration test summary with the security owner"
                - "Write the rule for how sellers request and send each class"
            - name: Security questionnaire answer bank
              description: |-
                ## Purpose
                Long security questionnaires can run to three hundred rows, and most of the questions repeat across customers with different wording. An answer bank of approved answers, each tagged by topic and linked to its evidence, lets a seller or solutions engineer complete most of a new questionnaire in an afternoon and send only the genuinely new questions to the security owner.

                ## Milestones
                1. The last five completed questionnaires collected and their questions grouped by topic.
                2. At least one hundred approved answers written, each with an owner and a link to evidence.
                3. Each answer given a short form for yes or no columns and a long form for free text.
                4. A rule that any answer changed for one customer is reviewed before it goes back into the bank.
                5. A new questionnaire completed from the bank, with the share of answers reused recorded.

                ## Notes
                Write the short answer first, then the evidence. Reviewers score the first five words of each cell.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An answer bank of at least one hundred approved, evidence-linked answers exists and a new questionnaire has been completed with most answers drawn from it."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Collect the last five completed security questionnaires"
                - "Group their questions into topics such as access, encryption and incident response"
                - "Ask the agent to draft first answers from your security policies for each topic"
                - "Have the security owner approve each answer before it enters the bank"
                - "Complete the next questionnaire from the bank and record the reuse rate"
            - name: Standard data processing and privacy pack
              description: |-
                ## Purpose
                If your product touches a customer's personal data, their privacy team will want a data processing agreement, a list of sub-processors, where data is stored and how international transfers are covered. Having your own standard versions, reviewed by counsel, means you can offer your paper first and answer the privacy questionnaire without waiting for a lawyer every time.

                ## Milestones
                1. A standard data processing agreement reviewed and approved by your counsel.
                2. A current sub-processor list with each provider's purpose and data location.
                3. A one-page summary of data flows, storage locations and retention.
                4. A short list of positions counsel is willing to accept if a buyer sends their own agreement.

                ## Notes
                This pack organises what counsel has approved. It is not a substitute for their review of a buyer's own agreement.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A counsel-approved data processing agreement, sub-processor list and data flow summary are stored in the security library and sent on at least one deal."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask counsel whether a standard data processing agreement already exists"
                - "List every third party that processes customer data and where it is stored"
                - "Write the one-page data flow and retention summary"
                - "Check the sub-processor list against the vendors you actually pay @recurring(quarterly)"
            - name: Insurance cover check against buyer requirements
              description: |-
                ## Purpose
                Large buyers often ask for professional indemnity, cyber and general liability cover at set minimum amounts, and for a certificate naming them on it. Finding out during a contract review that your cover falls short can delay signature by weeks while a broker requotes. Checking your policies against what recent buyers asked for lets you raise cover, or flag the gap, before it matters.

                ## Milestones
                1. The insurance clauses from the last five customer contracts or supplier forms collected.
                2. Your current policies, limits and renewal dates listed beside them.
                3. Any gap discussed with your broker and a decision recorded to raise cover or explain the gap.
                4. A process agreed with the broker for issuing a certificate to a named customer within two days.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of your insurance limits against five recent buyer requirements, with a recorded broker decision on each gap."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the insurance clauses from five recent customer contracts"
                - "List your policies, limits and renewal dates beside them"
                - "Book a call with your broker to discuss any gaps"
                - "Agree how fast the broker can issue a certificate for a named customer"
                - "Ask the broker to confirm cover against buyer requirements before renewal @recurring(yearly)"
            - name: Procurement status fields on every deal record
              description: |-
                ## Purpose
                When procurement progress lives in a seller's head, the forecast call cannot tell a deal waiting on a purchase order from one that has not started vendor registration. Four simple status fields for registration, security, legal and purchase order, each with a date, let anyone see in seconds what is blocking signature.

                ## Milestones
                1. Four fields added to the deal record: vendor registration, security review, legal review and purchase order.
                2. Each field limited to a short pick list such as not started, in progress, waiting on buyer, waiting on us, done.
                3. A date field beside each status showing when it last changed.
                4. Every late-stage deal updated with current statuses.
                5. A saved view listing late-stage deals with any step waiting on us.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every late-stage deal carries current statuses for registration, security, legal and purchase order, visible in one saved view."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the four status fields and their pick list values with the CRM owner"
                - "Add the fields and a last-changed date to the deal record"
                - "Update every late-stage deal with its current procurement statuses"
                - "Build a saved view of steps waiting on your side"
            - name: Weekly procurement blocker sweep
              description: |-
                ## Purpose
                Deals rarely die in procurement; they drift, one unanswered email at a time. A fixed half hour each week to read every late-stage deal's procurement statuses, chase anything waiting on your side and nudge the buyer on anything waiting on theirs keeps each step moving and surfaces slips before the forecast call does.

                ## Milestones
                1. A weekly thirty-minute slot held in the seller's or team lead's calendar.
                2. Every late-stage deal checked against its four procurement statuses each week.
                3. Each item waiting on your side given an owner and a date before the sweep ends.
                4. A monthly note to the sales manager naming the three most common blockers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight consecutive weeks every late-stage deal has had its procurement statuses reviewed and every internal blocker assigned an owner and date."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute blocker sweep slot"
                - "Review every late-stage deal's procurement statuses and chase each blocker @recurring(weekly:tue)"
                - "Send the sales manager the three most common blockers of the month @recurring(monthly:28)"
                - "Retire any status that has not changed in three weeks by calling the buyer"
            - name: Security questionnaire intake and turnaround queue
              description: |-
                ## Purpose
                Questionnaires arrive by email, portal link and spreadsheet, often with a buyer deadline buried in the covering note. A single intake point that logs each one with its deal value, deadline and owner, reviewed weekly, lets the security owner work in priority order instead of whoever shouted last, and gives sellers an honest return date.

                ## Milestones
                1. One shared inbox or form where every incoming questionnaire is logged.
                2. Each entry recording buyer, deal value, format, question count, deadline and owner.
                3. A weekly queue review that orders work by deadline and deal value.
                4. Turnaround time per questionnaire recorded for a full quarter.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every questionnaire received in a quarter is logged with deadline and owner, and the median turnaround for the quarter is reported."
                cadence: rolling
              tasks:
                - "Set up a shared intake form or inbox for questionnaires"
                - "Log every open questionnaire with deadline, value and owner"
                - "Review the questionnaire queue and reorder it by deadline and value @recurring(weekly:thu)"
                - "Report median turnaround to sales and security at quarter end"
            - name: Quarterly answer bank freshness review
              description: |-
                ## Purpose
                An answer bank goes stale quietly: a new hosting region, a changed password policy or a retired tool, and the bank now says something untrue that ends up in a signed contract. A quarterly pass where each topic owner confirms or updates their answers keeps reuse safe and catches answers that drifted during customer edits.

                ## Milestones
                1. Each topic in the answer bank assigned to a named owner.
                2. A quarterly review date in every owner's calendar.
                3. Every answer marked with the date it was last confirmed.
                4. Answers not confirmed in two quarters flagged and withheld from reuse until checked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every answer in the bank carries a confirmation date less than six months old, with unconfirmed answers flagged."
                cadence: cyclic
              tasks:
                - "Assign every answer bank topic to a named owner"
                - "Ask each owner to confirm or update their answers @recurring(quarterly)"
                - "Add a last-confirmed date column to the answer bank"
                - "Flag answers that have gone two quarters without confirmation"
            - name: Certificate and document expiry calendar
              description: |-
                ## Purpose
                Insurance certificates expire, audit reports cover a fixed period, bank letters are often refused after three months and certifications have surveillance dates. One calendar of every document's expiry, checked monthly, means renewals are requested before a buyer's onboarding team spots the stale date and pauses the deal.

                ## Milestones
                1. Every document in the onboarding pack and security library listed with its expiry or refresh date.
                2. Reminders set sixty and thirty days before each date.
                3. A bridge letter process agreed with the security owner for gaps between audit periods.
                4. A full year passed with no document sent to a buyer after its expiry.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An expiry calendar covers every onboarding and security document, and no expired document is sent to a buyer over twelve months."
                cadence: rolling
              tasks:
                - "List every onboarding and security document with its expiry date"
                - "Set reminders sixty and thirty days before each expiry"
                - "Check the calendar and request renewals due in the next sixty days @recurring(monthly:3)"
                - "Agree how bridge letters are issued between audit periods"
            - name: Customer supplier portal register
              description: |-
                ## Purpose
                Each large customer keeps you in its own supplier portal, with your profile, certificates, bank details and invoices, and the account is often tied to one employee's email. A register of every portal, the role that owns it and what must be kept current stops profiles lapsing when someone leaves and invoices bouncing because a certificate expired inside the portal.

                ## Milestones
                1. Every customer supplier portal listed with the customer, URL and owning role.
                2. Each portal account moved to a shared role-based mailbox where the portal allows it.
                3. Access stored in the company password manager, not in personal notes.
                4. Each portal's profile, certificates and contacts checked monthly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register lists every customer supplier portal with a role owner and shared access, and each profile has been checked within the last month."
                cadence: rolling
              tasks:
                - "List every customer portal you have ever registered in"
                - "Move each portal account to a shared role mailbox where allowed"
                - "Store portal access in the company password manager"
                - "Check each portal profile, certificate and contact for expiry @recurring(monthly:20)"
            - name: Purchase order chase after signature
              description: |-
                ## Purpose
                A signed contract does not always mean the customer can pay you: many buyers' accounts payable teams reject any invoice without a valid purchase order number. A weekly chase of every signed deal still waiting for a PO, with the requisition owner named, stops revenue sitting unbilled for a month after the celebration.

                ## Milestones
                1. Every signed deal without a purchase order listed with the buyer's requisition owner.
                2. A standard chase email that asks for the PO number, value and billing contact.
                3. A weekly chase run for every open item.
                4. Average days from signature to purchase order recorded for a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No signed deal waits more than fifteen working days for a purchase order without an escalation recorded, over one quarter."
                cadence: rolling
              tasks:
                - "List every signed deal still waiting for a purchase order"
                - "Write the standard purchase order chase email"
                - "Chase every open purchase order and log the reply @recurring(weekly:fri)"
                - "Escalate to the champion any purchase order older than fifteen working days"
            - name: Annual supplier re-assessments from existing customers
              description: |-
                ## Purpose
                Existing customers re-run their vendor risk assessment every year or two, and a late or careless answer can block a renewal or flag you as high risk to their auditors. Planning for these as a yearly season, with the answer bank refreshed and owners warned, protects revenue you have already won.

                ## Milestones
                1. A list of customers known to re-assess suppliers, with the month each usually asks.
                2. Account owners warned a month before each expected request.
                3. Every re-assessment answered before its deadline.
                4. Any new question from a re-assessment added to the answer bank.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every customer re-assessment received in a year is answered before its deadline and logged with the date submitted."
                cadence: cyclic
              tasks:
                - "List customers that re-assessed you last year and the month they asked"
                - "Warn each account owner a month before the expected request"
                - "Plan the coming year's re-assessment season with the security owner @recurring(yearly)"
                - "Add new re-assessment questions to the answer bank"
            - name: Procurement cycle time log
              description: |-
                ## Purpose
                Without numbers, every complaint about procurement is an anecdote. A simple monthly log of days from verbal agreement to signature and to purchase order, split by step, shows whether the changes in this area are working and gives the forecast honest lead times for deals still in discovery.

                ## Milestones
                1. A log with deal, buyer type, deal size, and dates for each procurement step.
                2. Every deal that closed in the month added within a week of month end.
                3. Median days per step worked out each month.
                4. Six months of entries showing the trend per step.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A cycle time log holds six consecutive months of closed deals with dates per procurement step and a monthly median."
                cadence: rolling
              tasks:
                - "Create the cycle time log from the metrics log template"
                - "Back-fill the deals closed in the last three months"
                - "Add the month's closed deals and update the medians @recurring(monthly:25)"
                - "Share the six-month trend with the sales manager"
            - name: Monthly procurement review with finance and legal
              description: |-
                ## Purpose
                Sales, finance and legal each see a slice of the procurement load: finance fields bank and tax forms, legal fields redlines, and sales sees the deadlines. A monthly half hour together over the blocker list and cycle times is where recurring problems, such as a clause every bank buyer rejects, get fixed once instead of argued deal by deal.

                ## Milestones
                1. A monthly thirty-minute meeting with sales, finance and legal representatives.
                2. A standing agenda: open blockers, cycle time trend, repeated requests, decisions needed.
                3. Every decision recorded with an owner.
                4. At least one repeated blocker removed for good each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly reviews held with decisions recorded, and at least two repeated procurement blockers removed in that time."
                cadence: rolling
              tasks:
                - "Invite finance and legal to a monthly thirty-minute review"
                - "Write the standing agenda for the review"
                - "Run the review and record decisions with owners @recurring(monthly:9)"
                - "Track which repeated blockers each decision removed"
            - name: How corporate purchase approvals actually work
              description: |-
                ## Purpose
                Sellers often treat a signed contract as the finish line, but inside most companies money moves through a requisition, a budget holder's approval, approval limits by value, a purchase order and a three-way match of order, receipt and invoice. Learning that chain lets you ask the right person the right question and explain to your manager why a signed deal is not yet billable.

                ## Milestones
                1. The steps from requisition to payment written out in your own words.
                2. The terms requisition, approval limit, purchase order, goods receipt and three-way match explained in a sentence each.
                3. The approval chain for one current customer mapped with their help.
                4. One question added to your discovery set because of what you learned.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page explanation of the purchase-to-pay chain, with one real customer's approval chain mapped onto it."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read an introduction to the purchase-to-pay process for buyers"
                - "Write the requisition to payment steps in your own words"
                - "Ask a friendly customer to walk you through their approval chain"
                - "Add one new question to your procurement discovery set"
            - name: Vendor risk tiering and what triggers a full review
              description: |-
                ## Purpose
                Buyers sort suppliers into risk tiers, often from a short intake form, and the tier decides whether you face a ten-question check or a three-hundred-row questionnaire and an audit report request. Knowing what drives the tier, such as access to personal data, system integration or contract value, helps you describe the product accurately and avoid an unnecessary full review.

                ## Milestones
                1. The common tiering factors listed: data type, data volume, system access, criticality and spend.
                2. Your product described against each factor in plain words a buyer can reuse.
                3. One past deal identified where an inaccurate intake description raised the tier.
                4. A short intake answer guide shared with the sales team.

                ## Notes
                Never understate data access to get a lighter review. A tier set on a wrong answer gets reopened later, usually at renewal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A shared intake answer guide describes the product against five common tiering factors, accurately and in plain words."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the tiering factors from three buyers' vendor intake forms"
                - "Describe your product against each factor in plain words"
                - "Find one past deal where the intake answer raised the tier"
                - "Share the intake answer guide with the sales team"
            - name: Standard security questionnaire formats
              description: |-
                ## Purpose
                Many questionnaires are built on industry standards such as the Standardised Information Gathering questionnaire or the cloud controls questionnaire, while others are a buyer's own spreadsheet or a portal form. Recognising the format on arrival tells you how much of your answer bank maps across, how long it will take and whether a completed standard version could replace it altogether.

                ## Milestones
                1. The two or three standard questionnaire formats most common in your market identified.
                2. Your answer bank mapped to the sections of the most common standard.
                3. A completed copy of one standard questionnaire stored in the security library.
                4. A rule on when to offer the completed standard instead of a custom form.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed standard questionnaire is in the security library and the answer bank is mapped to its sections."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Sort the last ten questionnaires by format"
                - "Read the structure of the most common standard questionnaire"
                - "Map your answer bank to its sections"
                - "Complete one standard questionnaire and store it in the library"
            - name: Purchase order terms that can override your contract
              description: |-
                ## Purpose
                Many purchase orders arrive with the buyer's own terms printed on the back or linked in the footer, covering payment, liability and acceptance, and in some cases those terms can compete with the contract you negotiated. Learning to spot them, and having standard wording ready that says the signed agreement governs, means you can flag the issue to counsel rather than discover it during a dispute.

                ## Milestones
                1. Three recent customer purchase orders read for attached or linked terms.
                2. The clauses that touch payment, liability or acceptance listed for counsel.
                3. Counsel's guidance recorded on what wording your order forms and invoices should carry.
                4. A rule agreed for when a seller must send a purchase order to legal.

                ## Notes
                This is about recognising when to involve counsel. How terms interact depends on your contracts and jurisdiction, so the conclusion is theirs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Counsel's written guidance on purchase order terms is recorded, with a clear rule for when sellers send a purchase order to legal."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect three recent customer purchase orders with their attached terms"
                - "List clauses that touch payment, liability or acceptance"
                - "Ask counsel what wording your order forms should carry"
                - "Write the rule for when sellers send a purchase order to legal"
            - name: What the buyer's procurement team is measured on
              description: |-
                ## Purpose
                Procurement teams are rarely trying to kill your deal. They are usually measured on savings against budget, reducing the number of suppliers, compliance with policy and how quickly they process requests. Understanding that scorecard helps you hand them the documents and comparisons that let them approve you quickly, and explains why they ask what they ask.

                ## Milestones
                1. The usual goals of a procurement team listed in your own words.
                2. Two conversations held with buyers or category managers about how they judge suppliers.
                3. One thing you will send procurement at first contact because of what you learned.
                4. A note shared with the team on how to open the first procurement conversation.

                ## Notes
                Price negotiation with procurement belongs with your negotiation work. This project is about the process and what makes approval easy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team note on procurement teams' goals, based on at least two buyer conversations, names what to send at first contact."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read two articles written for procurement professionals about supplier selection"
                - "Ask two friendly buyers how they judge a new supplier"
                - "Decide what to send procurement at first contact"
                - "Write a short team note on opening the procurement conversation"
            - name: Writing questionnaire answers that end the follow-ups
              description: |-
                ## Purpose
                Vague answers such as we follow industry best practice generate a second round of questions and a week of delay. Answers that state yes or no first, describe the control in one sentence, name the evidence and explain any compensating control are scored faster and come back less often. This is a writing skill worth practising on real questions.

                ## Milestones
                1. Ten answers from the bank that drew follow-up questions identified.
                2. Each rewritten in the pattern of direct answer, control, evidence and exception.
                3. The rewrites approved by the security owner.
                4. Follow-up rounds on the next three questionnaires compared with the previous three.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten weak answers rewritten and approved, and follow-up rounds on three later questionnaires counted against three earlier ones."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find ten answers that drew follow-up questions from buyers"
                - "Rewrite each as direct answer, control, evidence and exception"
                - "Have the security owner approve the rewrites"
                - "Count follow-up rounds on the next three questionnaires"
            - name: Due diligence checks buyers run on suppliers
              description: |-
                ## Purpose
                Before adding you as a supplier, larger buyers may pull a credit report, screen your company and directors against sanctions lists, ask for beneficial ownership and request filed accounts. Knowing which checks are common, and what your own records show, means a thin credit file or an out-of-date company registry entry is fixed before it surprises a buyer.

                ## Milestones
                1. The common supplier checks listed: credit, sanctions, ownership, accounts, adverse media and conflicts of interest.
                2. Your company's public registry entry checked for accuracy.
                3. Your business credit report obtained and reviewed.
                4. Any issue, such as late filed accounts, given an owner and a fix date.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your registry entry and business credit report have been reviewed, with any issue a buyer would see assigned an owner and date."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check your company's entry on the public company registry"
                - "Obtain and read your business credit report"
                - "List what a buyer's due diligence would flag"
                - "Assign an owner and fix date to each issue found"
            - name: Public trust centre decision
              description: |-
                ## Purpose
                Publishing a trust centre page puts your certifications, policies and sub-processors in public view and lets buyers request confidential reports behind a short access form. For a company answering several questionnaires a month it can remove whole rounds of email; for a small supplier it may be more upkeep than it saves. Deciding on evidence, not fashion, is the point.

                ## Milestones
                1. The number of security document requests in the last six months counted.
                2. Options compared: a simple page on your own site, a trust centre tool, or no page.
                3. A decision recorded with cost, owner and what will be public.
                4. If built, the page live and linked from the sales email signature.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on whether to publish a trust centre, based on six months of request volume, with an owner if the answer is yes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count security document requests from the last six months"
                - "Compare a simple web page, a trust centre tool and no page"
                - "Record the decision with cost and owner"
                - "Review the trust centre access request log @recurring(monthly:14)"
            - name: Click-through NDA for security document requests
              description: |-
                ## Purpose
                Buyers routinely need your audit report before a contract exists, and negotiating a bespoke non-disclosure agreement just to share it can add a fortnight. A short standard NDA, approved by counsel and signable online, lets a buyer's security analyst accept terms and receive the report the same day.

                ## Milestones
                1. A short mutual NDA for security documents approved by counsel.
                2. An online signing flow set up using your e-signature tool.
                3. The flow linked from the security library and the seller's template replies.
                4. Days from report request to report sent recorded before and after.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A counsel-approved NDA can be signed online, and at least three buyers have received a confidential report through it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask counsel for a short NDA covering security documents"
                - "Set up an online signing flow for it"
                - "Link the flow from the seller's template reply for report requests"
                - "Compare request-to-send days before and after the change"
            - name: Procurement-friendly order form
              description: |-
                ## Purpose
                An order form that omits the buyer's legal entity, billing contact, purchase order number field or invoice delivery address creates a second round of paperwork after signature. Redesigning your order form around what accounts payable teams need makes the step from signature to first paid invoice shorter and cleaner.

                ## Milestones
                1. The fields buyers asked to add to your last ten order forms listed.
                2. A revised order form with legal entity, PO number, billing contact, invoice address and tax details.
                3. The revision approved by finance and counsel.
                4. The new form used on every deal from a set date.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A revised order form carrying every accounts payable field is approved by finance and counsel and used on all new deals."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the fields buyers added to your last ten order forms"
                - "Draft the revised order form with the missing fields"
                - "Get finance and counsel to approve the revision"
                - "Set the date from which every deal uses the new form"
            - name: Payment terms policy for long buyer terms
              description: |-
                ## Purpose
                Large buyers often require sixty, ninety or more days to pay, and some push suppliers towards an early payment programme that pays sooner for a fee. A written policy, agreed with finance, on which terms you accept, when you ask for a deposit and whether to join early payment schemes, stops each seller improvising with your cash flow.

                ## Milestones
                1. Payment terms on the last twenty contracts listed with deal size.
                2. Finance's view on the longest acceptable terms by deal size recorded.
                3. A position agreed on early payment programmes and their fees.
                4. The policy written in one page and shared with sellers.

                ## Notes
                This is a cash flow decision for your finance lead. The policy records their decision so sellers apply it consistently.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page payment terms policy, agreed with finance, covers acceptable terms by deal size and early payment programmes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List payment terms on the last twenty contracts"
                - "Ask finance for the longest acceptable terms by deal size"
                - "Agree a position on early payment programmes"
                - "Write and share the one-page payment terms policy"
            - name: Sole-source justification kit for champions
              description: |-
                ## Purpose
                Above a certain value, many buyers require three quotes unless the requester writes a justification for choosing one supplier. Champions who have never written one stall or give up and start a competitive process. A short kit with the usual headings and your facts already filled in, such as unique capability, integration with existing systems and switching cost, lets them finish it in an hour.

                ## Milestones
                1. The usual sections of a single-supplier justification identified from two buyers' forms.
                2. A kit drafted with your capabilities, integrations and references already written.
                3. The kit tested with one champion and revised from their feedback.
                4. The kit stored with the seller's late-stage materials.

                ## Notes
                The justification must be true and is the buyer's document. Give facts and a structure; let the champion write their own reasons.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A justification kit has been used by at least one champion to submit a single-supplier request."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask two champions for their company's single-supplier justification form"
                - "Draft the kit with your capabilities and integrations filled in"
                - "Test the kit with one champion and revise it"
                - "Store the kit with the late-stage deal materials"
            - name: Fitting first orders under the buyer's approval limits
              description: |-
                ## Purpose
                Inside many companies a manager can approve a purchase up to a set limit, or pay by company card, while anything above goes to a committee and full supplier onboarding. Where it genuinely suits the customer, a smaller first phase that fits under that limit can start work in days and let the full contract follow on proven value.

                ## Milestones
                1. Approval limits recorded for the buyers in the current pipeline where known.
                2. A small first-phase offer designed that delivers real value on its own.
                3. A rule agreed with the sales manager on when the smaller offer may be used.
                4. Conversion from first phase to full contract tracked for two quarters.

                ## Notes
                Never split one purchase to dodge a buyer's controls. A genuine first phase is fine; disguised instalments damage trust and can breach the buyer's policy.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A first-phase offer and a written rule for its use exist, with two quarters of conversion to full contracts tracked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Record known approval limits for buyers in the pipeline"
                - "Design a first-phase offer that stands on its own value"
                - "Agree the rule for using it with the sales manager"
                - "Track first-phase to full contract conversion each quarter"
            - name: Buying through marketplaces and existing resellers
              description: |-
                ## Purpose
                Some buyers can purchase through a cloud marketplace or a reseller already on their supplier list, which can skip new vendor registration and draw on budget already committed. Listing those routes, with their fees and what still needs a security review, gives sellers a real option when onboarding a new supplier would take a quarter.

                ## Milestones
                1. The marketplaces and resellers your buyers most often already use identified.
                2. Fees, contract terms and set-up effort for each route recorded.
                3. A decision on which routes to offer, agreed with finance.
                4. One deal completed or quoted through an alternative route.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on which marketplace or reseller routes to offer, with fees, and at least one deal quoted through one."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask five customers which marketplaces or resellers they already buy through"
                - "Record the fees and set-up effort for each route"
                - "Agree with finance which routes to offer"
                - "Quote one live deal through an alternative route"
            - name: Bank detail change verification procedure
              description: |-
                ## Purpose
                Fraudsters impersonate suppliers to redirect payments, so buyers' finance teams are rightly wary of any bank detail sent by email. A written procedure for how you will ever notify a change, which you share at onboarding, protects your customers and your cash, and makes their finance team trust you faster.

                ## Milestones
                1. A procedure stating that bank changes are only made through the buyer's portal or confirmed by phone to a known number.
                2. Finance and sales agreed that no one emails new bank details.
                3. The procedure added to the onboarding pack and sent with supplier forms.
                4. Every customer told the procedure at least once a year.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written bank change procedure is in the onboarding pack and has been sent to every active customer's finance contact."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the bank detail change procedure with finance"
                - "Agree with the sales team that nobody emails bank details"
                - "Add the procedure to the supplier onboarding pack"
                - "Remind every customer's finance contact of the procedure @recurring(yearly)"
            - name: Questionnaire response tool decision
              description: |-
                ## Purpose
                Once questionnaires arrive every week, a spreadsheet answer bank starts to creak: no version history, no search by meaning, no record of who approved what. Tools built for questionnaire response can help, but they cost money and need an owner. Comparing them against your actual volume and a strong spreadsheet set-up gives a decision you can defend.

                ## Milestones
                1. Questionnaire volume and hours spent in the last two quarters recorded.
                2. Two or three tools shortlisted and compared with an improved spreadsheet option.
                3. One trial run on a real questionnaire with time recorded.
                4. A decision recorded with cost, owner and the volume that would trigger a revisit.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A purchase decision on questionnaire tooling, based on two quarters of volume and one timed trial, is recorded with an owner."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Record questionnaire volume and hours from the last two quarters"
                - "Shortlist two or three tools and an improved spreadsheet option"
                - "Run one real questionnaire through a trial and time it"
                - "Record the decision and the volume that would trigger a revisit"
            - name: Procurement kickoff call with the buyer's purchasing team
              description: |-
                ## Purpose
                Once a champion says yes in principle, a thirty-minute call with their purchasing, security and legal contacts can replace weeks of serial emails. Agreeing every step, owner and date on one call, and sending the notes the same day, turns procurement from a black box into a shared checklist.

                ## Milestones
                1. The call booked with the champion and at least one procurement contact.
                2. An agenda covering registration, security, privacy, legal paper, approvals and purchase order.
                3. Each step given an owner on both sides and a target date during the call.
                4. Notes sent to all attendees within one working day.

                ## Notes
                Start from the **Meeting notes** template. Ask procurement what usually delays suppliers at this company; they will often tell you.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kickoff call held with procurement, with every step assigned an owner and date and notes sent within one working day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the champion to invite their procurement contact to a kickoff"
                - "Send an agenda covering every procurement step"
                - "Agree an owner and date for each step on the call"
                - "Send the notes to all attendees the same day"
            - name: Completing a supplier portal registration in one sitting
              description: |-
                ## Purpose
                Portal registrations often time out, ask for documents in odd formats and need an answer from finance halfway through. Booking a single two-hour sitting with the onboarding pack open and finance on call gets the registration submitted in one go, rather than half-finished for a week while the buyer waits.

                ## Milestones
                1. The portal's required fields and documents previewed before the sitting.
                2. A two-hour block booked with a finance contact available.
                3. The registration submitted with every required document.
                4. The confirmation, supplier number and portal owner added to the portal register.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A supplier portal registration submitted in one sitting, with the supplier number recorded in the portal register."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Preview the portal's required fields and documents"
                - "Book a two-hour block with finance on call"
                - "Submit the registration with every document attached"
                - "Record the supplier number in the portal register"
            - name: First invoice paid through a customer's procurement portal
              description: |-
                ## Purpose
                The first invoice to a large customer is where onboarding mistakes surface: a missing purchase order line, the wrong legal entity, a format the portal rejects. Treating that first invoice as a small event, checked by sales and finance together, gets cash in on time and sets up every later invoice to pass automatically.

                ## Milestones
                1. The customer's invoicing rules confirmed: PO reference, entity, format and submission route.
                2. The first invoice checked against those rules by sales and finance before submission.
                3. Submission confirmed and the approval status watched in the portal.
                4. Payment received and any lessons added to the account notes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first invoice to a new procurement-led customer is submitted correctly and paid within the agreed terms."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the customer's invoicing rules with their accounts payable team"
                - "Check the first invoice against those rules with finance"
                - "Submit the invoice and watch its status in the portal"
                - "Note any lessons in the account record once payment lands"
            - name: Customer audit or on-site supplier assessment
              description: |-
                ## Purpose
                Some customers, especially in regulated sectors, use their right to audit and send an assessor to review your controls on site or by video. A visit handled calmly, with evidence ready and the right people in the room, confirms the questionnaire answers; one handled badly can reopen the whole relationship.

                ## Milestones
                1. The audit scope, date, attendees and evidence list agreed with the customer in writing.
                2. Evidence gathered and checked against your questionnaire answers.
                3. Internal attendees briefed on scope and on answering only what is asked.
                4. Findings received and a response plan with dates sent back.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A customer audit completed with a written response plan sent for every finding within the agreed time."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Agree the audit scope, date and evidence list in writing"
                - "Check the evidence against your past questionnaire answers"
                - "Brief internal attendees on scope the day before"
                - "Send the customer a response plan for every finding"
            - name: Security exception request for an unmet control
              description: |-
                ## Purpose
                Sometimes the honest answer to a required control is no: you do not yet support single sign-on, or your audit report is still in progress. Rather than lose the deal, many buyers accept a documented exception with compensating controls and a date. Preparing that request well gives the buyer's risk team something they can approve.

                ## Milestones
                1. The unmet control and the buyer's exact requirement written down.
                2. Compensating controls and a realistic delivery date agreed with your security owner.
                3. A one-page exception request sent through the champion to the buyer's risk team.
                4. The outcome and any commitment made added to the commitments register.

                ## Notes
                Only commit to dates your product and security owners have agreed. An exception granted on a missed date is hard to win twice.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An exception request with compensating controls and an agreed date is submitted, and the buyer's decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the unmet control and the buyer's exact wording"
                - "Agree compensating controls and a date with your security owner"
                - "Send the one-page exception request through the champion"
                - "Record the decision and any commitment in the commitments register"
            - name: Re-registration after a customer changes procurement system
              description: |-
                ## Purpose
                When a customer moves to a new procurement platform, every supplier is asked to register again, often with a short deadline and a warning that invoices stop otherwise. Treating the migration notice as a dated event, owned by one person, keeps payments flowing through the switch.

                ## Milestones
                1. The migration notice logged with deadline and owner.
                2. The new portal registration completed with current documents.
                3. Open purchase orders and invoices checked to be visible in the new system.
                4. The portal register updated and the old portal entry closed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Re-registration completed before the customer's deadline, with no invoice rejected during the switch."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Log the migration notice with its deadline and an owner"
                - "Complete the new portal registration with current documents"
                - "Check open orders and invoices appear in the new system"
                - "Update the portal register and close the old entry"
            - name: Small supplier's first large-company onboarding
              description: |-
                ## Purpose
                For a business of five or fifteen people, a first large customer's onboarding can feel built for someone else: a policy library you do not have, insurance limits above your cover, a questionnaire written for a bank. Most of it is manageable with honest answers, a few short policies and help from your accountant and broker, and getting through it once makes every later customer easier.

                ## Milestones
                1. Every onboarding requirement listed and sorted into have, can produce this week, or cannot meet.
                2. Short, true policies written for the gaps that are about how you already work.
                3. Accountant and broker asked about financial and insurance items.
                4. Items you cannot meet raised honestly with the buyer, with what you offer instead.
                5. Onboarding completed and every new document added to the pack.

                ## Notes
                Ask the buyer whether a lighter supplier route exists for small or low-risk vendors. Many large companies have one and do not advertise it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The first large-company onboarding is completed, with each requirement met or openly addressed, and new documents saved to the pack."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every onboarding requirement and sort it into three groups"
                - "Ask the buyer whether a lighter route exists for small suppliers"
                - "Write short policies for gaps that describe how you already work"
                - "Ask your accountant and broker about the financial and insurance items"
                - "Raise any requirement you cannot meet with the buyer directly"
            - name: Selling to buyers with no procurement team
              description: |-
                ## Purpose
                Mid-sized companies often have no purchasing department: the owner or a finance manager signs, there is no portal and the invoice may go to a shared inbox nobody reads. Procurement here is simpler but less predictable, so confirming who approves, who pays and where invoices go prevents a signed deal from going unpaid.

                ## Milestones
                1. The person who approves spend and the person who pays invoices confirmed by name.
                2. Approval captured in writing, by signature or email, before work begins.
                3. Invoice address, any reference the payer needs and payment method agreed.
                4. First payment received on time.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "For each new customer without procurement, approver, payer and invoice route are recorded before work begins."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask who approves this spend and who pays the invoices"
                - "Get written approval before any work begins"
                - "Agree the invoice address and the reference the payer needs"
                - "Check the first payment arrives within terms"
            - name: Regulated-industry third-party risk reviews
              description: |-
                ## Purpose
                Banks, insurers, healthcare providers and utilities run formal third-party risk programmes, often driven by regulators' outsourcing rules, which add steps such as criticality assessments, exit plans, concentration risk and audit rights. Knowing those extra steps before the first meeting lets you prepare evidence early and set an honest timeline for your own forecast.

                ## Milestones
                1. The extra steps regulated buyers in your market typically add listed.
                2. An exit and transition summary written describing how a customer would leave your service.
                3. A business continuity and resilience summary approved by your security owner.
                4. A typical timeline for regulated buyers added to the sales playbook.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An exit summary, a resilience summary and a typical regulated-buyer timeline are written and stored for sellers."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask a regulated customer which steps their third-party risk process adds"
                - "Write the exit and transition summary"
                - "Get the resilience summary approved by the security owner"
                - "Add the regulated-buyer timeline to the sales playbook"
            - name: Cross-border supplier registration and tax forms
              description: |-
                ## Purpose
                Selling to a buyer in another country brings unfamiliar forms: a foreign supplier tax declaration, a certificate of tax residence to reduce withholding, an e-invoicing format or a local bank verification. Getting each one right first time, with your accountant's input, avoids payments delayed or reduced by tax withheld at source.

                ## Milestones
                1. The buyer's country-specific supplier forms identified at the start of procurement.
                2. Your accountant consulted on tax residence certificates and withholding.
                3. Forms completed and any certificate requested from your tax authority in good time.
                4. The completed forms saved in the onboarding pack by country.

                ## Notes
                Withholding and treaty questions are for your accountant or tax adviser. This project gets the right forms to them early.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Country-specific supplier and tax forms for a foreign buyer are completed with accountant input and filed in the pack."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the buyer for every country-specific supplier form"
                - "Send the forms to your accountant with the buyer's country"
                - "Request a tax residence certificate if the accountant advises"
                - "Save the completed forms in the onboarding pack by country"
            - name: New product or expansion that triggers a fresh review
              description: |-
                ## Purpose
                Selling a second product, a new module or a larger data scope to an existing customer can reopen their vendor risk tier, legal review and budget approval, even though they already know you. Checking which steps the expansion triggers at the start avoids an account manager promising a go-live date that procurement then pushes back by a quarter.

                ## Milestones
                1. The customer's original tier, contract terms and approvals found in the account record.
                2. Changes in data, integration or value from the expansion listed.
                3. The customer's procurement contact asked which steps the change triggers.
                4. A dated plan for any reopened step shared with the champion.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "For each expansion deal, the procurement steps it triggers are confirmed with the customer and dated before a go-live date is promised."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the customer's original vendor tier and approvals"
                - "List what changes in data, integration or value"
                - "Ask procurement which steps the change reopens"
                - "Share a dated plan for reopened steps with the champion"
            - name: New account executive's first procurement process
              description: |-
                ## Purpose
                A seller who joins from a smaller market may never have managed a security review or a purchase order chase, and will learn by losing a quarter. Walking a new account executive through one live procurement with a buddy, using the area's documents and owners, gets them to run the next one alone.

                ## Milestones
                1. A buddy named who has completed at least three procurement processes.
                2. The new seller introduced to every internal request owner.
                3. One live deal's procurement run together from kickoff to purchase order.
                4. A short reflection written on what the new seller would do differently next time.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A new account executive has completed one live procurement with a buddy and written a short reflection."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Name a buddy who has run at least three procurement processes"
                - "Introduce the new seller to every internal request owner"
                - "Run one live procurement together from kickoff to purchase order"
                - "Ask the new seller to write a short reflection"
            - name: Commitments register from questionnaires and addenda
              description: |-
                ## Purpose
                Answers in questionnaires and security addenda often become contractual promises: breach notification within a set number of hours, annual penetration tests, data kept in one region. When nobody tracks them, the company can breach a contract without knowing it. A register of every commitment by customer, with an owner, protects both renewals and reputation.

                ## Milestones
                1. Security addenda and attached questionnaires from active contracts collected.
                2. Every specific commitment extracted with customer, clause and owner.
                3. Commitments that differ from the standard answer flagged.
                4. A quarterly check that each commitment can still be evidenced.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A register lists every non-standard security commitment by customer with an owner, checked against evidence each quarter."
                cadence: rolling
              tasks:
                - "Collect security addenda from your ten largest contracts"
                - "Extract each specific commitment with customer, clause and owner"
                - "Flag commitments that differ from the standard answer"
                - "Check each commitment can still be evidenced @recurring(quarterly)"
            - name: Preferred supplier status with a strategic customer
              description: |-
                ## Purpose
                Being added to a large customer's preferred or approved supplier list means new departments can buy without a fresh onboarding, sometimes through a pre-agreed framework of terms. It usually takes a track record, a supplier scorecard and a relationship with the category manager, and it can shorten every later deal in that account by months.

                ## Milestones
                1. The customer's criteria for preferred supplier status obtained.
                2. Your current scorecard or performance data gathered.
                3. A meeting held with the category manager about the route to preferred status.
                4. An application or agreement submitted, or the gaps to close recorded with dates.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Preferred supplier status is granted, or the customer's written criteria and your gap plan are recorded with dates."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the category manager for the preferred supplier criteria"
                - "Gather your delivery and service performance data for the account"
                - "Meet the category manager about the route to preferred status"
                - "Review the supplier scorecard with the customer @recurring(quarterly)"
            - name: Shared assessment reuse across customers
              description: |-
                ## Purpose
                Several industries now run shared supplier assessment schemes or accept a completed standard assessment held in an exchange, so a supplier answers once and many buyers read it. For a company facing dozens of questionnaires a year, joining the right scheme can replace much of the custom work, though it has costs and annual upkeep.

                ## Milestones
                1. The shared assessment schemes or exchanges your buyers use identified.
                2. Cost, effort and the number of customers who would accept each estimated.
                3. A decision recorded with finance and the security owner.
                4. If joined, the first customer pointed to the shared assessment instead of a custom form.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on joining a shared assessment scheme, with cost and customer acceptance estimated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your ten largest customers which shared assessment schemes they accept"
                - "Estimate cost and effort for each scheme"
                - "Record the decision with finance and the security owner"
                - "Point the first customer to the shared assessment if you join"
            - name: Procurement cycle time analysis and fixes
              description: |-
                ## Purpose
                After six months of cycle time data, patterns appear: legal review takes twice as long with banks, purchase orders lag at quarter end, small buyers skip security entirely. Analysing the log by buyer type, deal size and step, and choosing two fixes with a measurable target, is how an experienced team cuts weeks from its sales cycle rather than hoping.

                ## Milestones
                1. Six months of cycle time data split by buyer type, deal size and step.
                2. The three slowest combinations of buyer type and step identified.
                3. Two fixes chosen, each with a target reduction in days.
                4. The forecast's lead time assumptions updated from the analysis.
                5. Results of the two fixes measured after a further quarter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An analysis of six months of procurement data names two fixes with day targets, and their results are measured a quarter later."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Split the cycle time log by buyer type, deal size and step"
                - "Identify the three slowest buyer type and step combinations"
                - "Choose two fixes with a target reduction in days"
                - "Recalculate cycle times by buyer type and step @recurring(quarterly)"
---

# Navigating Buyer Procurement

This area is for sellers and small suppliers who keep hearing yes from the buyer and then wait six weeks for vendor registration, a security questionnaire, legal review and a purchase order. It starts with the foundations (an audit of where deals stalled, discovery questions about procurement, internal owners, a supplier document pack, a security library and answer bank, privacy and insurance basics), then the weekly and monthly machinery that keeps every procurement step moving, the knowledge of how purchasing approvals and vendor risk reviews really work, decisions about trust centres, order forms, payment terms and buying routes, dated events from a kickoff call to a customer audit, situations for small suppliers, regulated buyers and new sellers, and finally the specialist work of commitment tracking, preferred supplier status and cycle time analysis.

What repeats is a Tuesday blocker sweep, a Thursday questionnaire queue, a Friday purchase order chase, monthly checks on document expiry, supplier portals, cycle times and a review with finance and legal, quarterly answer bank and sub-processor reviews, and yearly re-assessments, insurance and bank procedure reminders. The Operational checklist, Metrics log, Purchase decision and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
