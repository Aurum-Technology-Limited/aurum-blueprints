---
id: sales-revenue.rfp-response-management
name: RFP Response Management
description: "A bid or no-bid rubric, one intake route, a maintained answer library, compliance matrices and colour team reviews, plus the debriefs and win-rate numbers that make every RFP response sharper than the last."
category: business
version: 1.0.0
tags: [sales-revenue, rfp-response-management, enterprise, agency, team, rfp, bid-management, proposal-library, tenders]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - purchase-decision
    - metrics-log
    - meeting-notes
    - risk-register
    - skills-matrix
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: RFP Response Management
          description: "Deciding which requests for proposal to bid on, assembling answers from a reusable library, and submitting compliant, persuasive responses on deadline."
          projects:
            - name: Audit of the last twelve months of RFP bids
              description: |-
                ## Purpose
                Most teams have a feeling about their RFP win rate and no figure. Listing every request received in the last year, whether you bid, what it cost in hours and what happened, usually shows that a few kinds of bid win most of the revenue while the rest absorb weeks of effort for nothing.

                ## Milestones
                1. A spreadsheet of every RFP, RFI and RFQ received in the last twelve months, with buyer, value and due date.
                2. Each one marked bid, declined or missed, with the outcome where known.
                3. Approximate hours spent recorded for each submitted bid.
                4. Win rate by deal size, sector and whether you knew the buyer before the RFP arrived.
                5. Five findings shared with sales leadership.

                ## Notes
                Bids where you had no conversation with the buyer before the document landed are the ones to look at first. They are usually the bulk of the losses.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A twelve-month bid register with outcomes, hours and win rate by segment, and five written findings shared with sales leadership."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Search shared inboxes and the CRM for every RFP received in the last year"
                - "Record bid, declined or missed and the outcome for each request"
                - "Estimate the hours each submitted bid took with the people who wrote it"
                - "Work out win rate by sector, size and prior buyer contact"
                - "Ask the agent to draft five findings from the summary table"
            - name: Bid or no-bid scoring rubric
              description: |-
                ## Purpose
                Saying yes to every RFP feels safe and is the most expensive habit in bid work. A scored rubric covering relationship, fit to requirements, competitive position, value and the resources needed lets the team decline weak bids in an hour with a reason everyone accepts, and pour the saved time into the ones it can win.

                ## Milestones
                1. Eight to ten criteria agreed, each with a 1 to 5 scale and a description of what each score means.
                2. Weightings set and a threshold score below which the default answer is no.
                3. The rubric tested against ten past bids and its verdicts compared with what actually happened.
                4. The final rubric approved by the head of sales and published with the bid process.

                ## Notes
                Include one knockout question: did anyone here speak to this buyer before the RFP was issued? A no does not end the discussion, but it should have to be argued past.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A weighted bid or no-bid rubric with a threshold score, back-tested on ten past bids and approved by the head of sales."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the reasons past bids were won or lost in one page"
                - "Draft eight to ten scoring criteria with a 1 to 5 scale for each"
                - "Score ten past bids with the rubric and compare against outcomes"
                - "Agree the no-bid threshold with the head of sales"
                - "Recalibrate weightings against the latest bid outcomes @recurring(quarterly)"
            - name: Single intake route for incoming RFPs
              description: |-
                ## Purpose
                RFPs arrive through a seller's inbox, a procurement portal, a partner or a general contact address, and a surprising number are found a week late. One shared bid address, a rule that every invitation is logged within a day, and a named person who registers on buyer portals means the clock never starts without you knowing.

                ## Milestones
                1. A shared bid inbox created and announced to sales, partners and reception.
                2. An intake form capturing buyer, deadline, value, portal link and the seller who owns the relationship.
                3. Every live opportunity in the bid register within one working day of arrival.
                4. Portal log-ins held in the company password manager rather than personal accounts.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared bid inbox and intake form are live, and every RFP received in the following month was logged within one working day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create a shared bid inbox and add the bid manager and a deputy"
                - "Build a one-page intake form with buyer, deadline, value and owner"
                - "Email sales and partners asking them to forward every RFP to the bid inbox"
                - "Move buyer portal log-ins into the company password manager"
            - name: Bid roles and sign-off authority
              description: |-
                ## Purpose
                Bids go wrong at the seams: nobody owned the pricing, legal saw the contract terms on the last afternoon, the executive who signs the cover letter was on holiday. Naming the bid manager, solution lead, pricing owner, writers, reviewers and final approver for every bid, with the authority each one holds, removes most of the late-night surprises.

                ## Milestones
                1. A role chart naming who leads, writes, prices, reviews and approves a standard bid.
                2. A written limit on which bids the bid manager can approve alone and which need an executive.
                3. Legal and finance agreed as reviewers with a guaranteed turnaround in working days.
                4. Deputies named for each approver for holidays and absence.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A role and sign-off chart for bids, with named deputies and agreed review turnaround times, approved by sales, legal and finance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every person who touched the last three bids and what they did"
                - "Draft a role chart with lead, writers, pricing, reviewers and approver"
                - "Agree review turnaround times with legal and finance"
                - "Name a deputy for every approver on the chart"
            - name: Answer library structure and ownership
              description: |-
                ## Purpose
                Without a library, every RFP is answered by searching old submissions for something close and hoping it is still true. Deciding the categories, the format of one answer record and who owns each section is the scaffolding that makes reuse safe instead of risky, and it has to exist before anything is loaded into it.

                ## Milestones
                1. Fifteen to twenty top-level categories agreed, such as company, security, implementation, support and pricing approach.
                2. A standard answer record with question, short answer, long answer, owner, last reviewed and expiry date.
                3. An owner named for every category, with their agreement in writing.
                4. A rule that answers past their expiry date are flagged before reuse.

                ## Notes
                Store answers as short and long versions from the start. Word and character limits are the most common reason a library answer cannot be pasted straight in.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A library structure with named category owners and a standard answer record, documented and agreed by every owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the question headings from your last five RFPs into one list"
                - "Group the questions into fifteen to twenty categories"
                - "Write the standard answer record with owner and expiry fields"
                - "Ask each category owner to accept their section in writing"
            - name: First hundred approved library answers
              description: |-
                ## Purpose
                Ten answers in a library get ignored, while a hundred well-written answers to the questions that come up in every RFP starts saving days per bid. Mining recent winning submissions for the most frequent questions and getting each answer rewritten, checked and approved by its owner gives the team a library worth opening.

                ## Milestones
                1. The hundred most frequently asked questions identified from recent RFPs.
                2. A best existing answer found for each, preferably from a winning bid.
                3. Each answer rewritten to the house style with a short and long version.
                4. Every answer approved by its category owner and dated.
                5. The library used for at least one live bid.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One hundred answers in the library, each with an owner, an approval date and short and long versions, used on at least one live bid."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Count how often each question appeared across the last ten RFPs"
                - "Pick the best existing answer for the top hundred questions"
                - "Rewrite twenty answers a week to the house style"
                - "Send each batch to its category owner for approval"
            - name: Standard company documents pack for bids
              description: |-
                ## Purpose
                Almost every RFP asks for the same attachments: company registration, audited accounts, insurance certificates, accreditations, equality and environmental policies, a modern slavery or supplier code statement where required. Keeping the current version of each in one folder, with expiry dates, saves the panic of chasing finance for an insurance certificate on submission morning.

                ## Milestones
                1. A list of every standard attachment requested in the last ten RFPs.
                2. The current version of each document stored in one bid documents folder.
                3. An expiry or renewal date recorded for each certificate and policy.
                4. A named owner for each document who supplies the renewed version.

                ## Notes
                Only include accounts and certificates your finance or legal team has approved for external release, and check each RFP's specific wording before attaching.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bid documents folder holds every standard attachment, each current, with an owner and an expiry date recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the standard attachments requested in your last ten RFPs"
                - "Collect the current version of each from finance, legal and operations"
                - "Record expiry dates and owners in an index at the top of the folder"
                - "Check certificates and accreditations for anything expiring next month @recurring(monthly:16)"
            - name: Bid calendar and team capacity view
              description: |-
                ## Purpose
                Two large RFPs due the same week will each get half a team, and both will read that way. A shared calendar showing every live bid, its key internal dates and who is committed to it lets you see clashes early enough to decline, ask for an extension or bring in help.

                ## Milestones
                1. A calendar holding the submission date, clarification deadline and review dates of every live bid.
                2. Each contributor's committed days per bid shown alongside.
                3. A rule for how many concurrent bids the team can carry at once.
                4. Clashes raised at the weekly stand-up before they reach the final week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A shared bid calendar with every live bid's key dates and contributor load, updated weekly for at least three months."
                cadence: rolling
              tasks:
                - "Create a shared calendar for bid submission and review dates"
                - "Add every live bid with its internal draft and review milestones"
                - "Agree the maximum number of concurrent bids the team can carry"
                - "Update the bid calendar and contributor load for the coming fortnight @recurring(weekly:fri)"
            - name: Response template and house style
              description: |-
                ## Purpose
                Ten contributors writing in ten styles produce a response that reads like ten companies. A response template with the cover letter, executive summary, answer layout and branding set, plus a one-page style guide covering tone, terms, the company name and how to refer to the buyer, gives evaluators one coherent voice and saves formatting time on deadline day.

                ## Milestones
                1. A response template with cover page, cover letter, executive summary and answer sections.
                2. A one-page style guide covering tone, spelling, product names and buyer references.
                3. A version of the template for buyer-supplied answer forms.
                4. The template used for the next two submissions and adjusted afterwards.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A response template and one-page style guide, used on two consecutive submissions and revised from contributor feedback."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the three best-looking past submissions as reference"
                - "Build a response template with cover letter and answer layout"
                - "Write a one-page style guide for tone, terms and names"
                - "Gather contributor feedback after the next two submissions"
            - name: Weekly bid or no-bid decision call
              description: |-
                ## Purpose
                Rubrics only help if someone uses it while there is still time to act. A standing short call each week, where every new RFP is scored, a decision recorded and an owner named, stops opportunities drifting for days while people wait to see who will pick them up.

                ## Milestones
                1. A fixed weekly slot with the bid manager, sales lead and a solution expert.
                2. Every RFP received that week scored with the rubric.
                3. A decision, reason and owner recorded in the bid register for each.
                4. Declined bids answered with a polite no-bid note within two working days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months, every RFP received was scored and decided within seven days, with the reason recorded."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute slot with sales and solution leads"
                - "Score each new RFP with the rubric before the call"
                - "Hold the bid or no-bid call for every RFP received this week @recurring(weekly:tue)"
                - "Record the decision, reason and owner in the bid register"
            - name: Compliance matrix for every bid
              description: |-
                ## Purpose
                Evaluators often score compliance before quality, and a single missed mandatory requirement can disqualify a brilliant response. Breaking every RFP into a matrix of each requirement, its section reference, the answer location and its owner is the one document that guarantees nothing has been left unanswered.

                ## Milestones
                1. A matrix template with requirement, RFP reference, mandatory or scored, owner, answer location and status.
                2. Every shall, must and will statement from the RFP captured in the matrix.
                3. Each requirement assigned an owner within two days of the bid decision.
                4. The matrix checked line by line before submission with zero open rows.

                ## Notes
                Read the instructions to bidders as carefully as the requirements. Formatting rules, file naming and page limits are requirements too.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Three consecutive submissions each had a complete compliance matrix with every requirement answered and checked before sending."
                cadence: rolling
              tasks:
                - "Build a compliance matrix template with owner and status columns"
                - "Extract every mandatory statement from the current RFP into the matrix"
                - "Assign an owner to each row within two days of the bid decision"
                - "Check every row is closed before the final review"
            - name: Weekly live bid stand-up
              description: |-
                ## Purpose
                Live bids slip quietly: an expert has not started their section, legal has not seen the terms, a clarification answer changed the scope. Fifteen minutes each week walking every active bid against its plan surfaces blockers while there is still time to fix them.

                ## Milestones
                1. A weekly fifteen-minute stand-up with every active bid lead.
                2. Each bid reported as on track, at risk or blocked against its internal dates.
                3. Blockers given a named owner and a date before the call ends.
                4. Short notes kept so absent contributors can catch up.

                ## Notes
                Start from the **Meeting notes** template if you keep a record per stand-up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly stand-ups held, each with the status of every live bid and owners for every blocker recorded."
                cadence: rolling
              tasks:
                - "Invite every active bid lead to a recurring fifteen-minute stand-up"
                - "Run the stand-up with on track, at risk and blocked status per bid @recurring(weekly:mon)"
                - "Write blockers and owners into the bid register after each call"
            - name: Answer library freshness review
              description: |-
                ## Purpose
                Any library answer quoting last year's customer count or a retired product is worse than no answer, because it gets submitted with confidence. A monthly sweep of answers past their review date, and a quarterly confirmation from each category owner, keeps the library something people trust enough to use.

                ## Milestones
                1. A report listing every answer past its review or expiry date.
                2. Expired answers updated, re-approved or archived each month.
                3. Each category owner confirming their section every quarter.
                4. Fewer than five percent of library answers out of date at any time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fewer than five percent of library answers are past their review date across two consecutive quarters."
                cadence: rolling
              tasks:
                - "Set a review date on every library answer that lacks one"
                - "Review library answers past their review date and update or archive them @recurring(monthly:12)"
                - "Ask each category owner to confirm their section is current @recurring(quarterly)"
                - "Archive answers that have not been used in eighteen months"
            - name: Clarification questions and addenda log
              description: |-
                ## Purpose
                Buyers issue addenda, extend deadlines and publish answers to other bidders' questions through portals that send no reliable notification. A daily check and a single log of every question asked, every answer received and every change to the RFP keeps the response matched to the version that will be scored.

                ## Milestones
                1. A log per bid with question, date sent, answer received and impact on the response.
                2. Clarification questions submitted before the buyer's deadline.
                3. Each addendum read and its changes reflected in the compliance matrix.
                4. The final response checked against the latest addendum before submission.

                ## Notes
                Clarification answers are usually shared with every bidder, so word questions so they do not reveal your strategy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live bid has a clarification and addenda log, and no submission in a quarter missed a published addendum."
                cadence: rolling
              tasks:
                - "Create a clarification and addenda log for each live bid"
                - "Check the bid inbox and buyer portals for new addenda and answers @recurring(daily)"
                - "Submit open questions before the buyer's clarification deadline"
                - "Update the compliance matrix whenever an addendum changes a requirement"
            - name: Colour team reviews before submission
              description: |-
                ## Purpose
                Reviewing a bid only on the final afternoon means finding structural problems when nothing can change. Staged reviews, a storyboard check early, a full red team read as an evaluator would score it, and a final gold sign-off, catch weak answers when there is still time to rewrite them.

                ## Milestones
                1. Review stages and their timing written into the standard bid plan.
                2. Red team reviewers chosen from people who did not write the response.
                3. Reviewers scoring sections against the buyer's own evaluation criteria.
                4. Every red team comment resolved or consciously rejected before gold review.

                ## Notes
                A red team that only corrects grammar has not done its job. Ask reviewers for a score and the one change that would raise it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive bids each had a storyboard, red and gold review, with red team scores recorded against the buyer's criteria."
                cadence: rolling
              tasks:
                - "Add storyboard, red and gold review dates to the standard bid plan"
                - "Recruit a pool of red team reviewers from outside the bid team"
                - "Give reviewers a scoring sheet built from the buyer's evaluation criteria"
                - "Track every red team comment to resolved or rejected"
            - name: Submission day checklist
              description: |-
                ## Purpose
                Bids are lost on submission day to wrong file names, a portal that times out at the last minute, an unsigned form or a pricing file in the wrong format. A checklist run on every submission, with upload planned for a full day before the deadline, takes the luck out of the last step.

                ## Milestones
                1. A checklist covering file names, formats, signatures, page limits, pricing files and portal upload.
                2. An internal upload deadline set at least twenty-four hours before the buyer's.
                3. Confirmation of receipt saved to the bid folder for every submission.
                4. Every submission in a quarter made before the internal deadline.

                ## Notes
                Start from the **Operational checklist** template. Portals can reject uploads in the final hour when every bidder arrives at once.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every submission for two quarters followed the checklist, was uploaded before the internal deadline and has saved proof of receipt."
                cadence: rolling
              tasks:
                - "Write a submission checklist from the operational checklist template"
                - "Add a test upload to each buyer portal in the week before submission"
                - "Set the internal upload deadline a day before the buyer's"
                - "Save the portal receipt or confirmation email to the bid folder"
            - name: Debrief requests after every bid decision
              description: |-
                ## Purpose
                Buyers often offer feedback after an award and few bidders ask for it, which wastes the most honest assessment you will ever get. Requesting a debrief after every decision, win or loss, and recording the scores and comments in a consistent format, turns each result into evidence for the next bid.

                ## Milestones
                1. A standard debrief request email sent within a week of every award notice.
                2. A debrief question list covering scores, strengths, weaknesses and the winning price range where shareable.
                3. Debrief notes saved against each bid in the register.
                4. At least two thirds of decisions in a year followed by a debrief.

                ## Notes
                Start from the **Meeting notes** template for each debrief call. Ask about wins too: knowing why you won is as useful as knowing why you lost.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Debriefs were requested for every bid decision in six months and notes recorded for at least two thirds of them."
                cadence: rolling
              tasks:
                - "Write a standard debrief request email and question list"
                - "Send the debrief request within a week of each award notice"
                - "Chase outstanding debriefs for decisions announced this month @recurring(monthly:24)"
                - "Save scores and comments from each debrief to the bid register"
            - name: Monthly bid metrics report
              description: |-
                ## Purpose
                Leadership judges the bid function on anecdotes unless someone shows them the numbers. A monthly report of RFPs received, bid rate, submitted value, win rate by value and count, and average hours per bid shows whether the rubric is working and whether the team needs more people or fewer bids.

                ## Milestones
                1. A metrics log with RFPs received, bid, declined, won, lost and pending each month.
                2. Win rate reported by count and by value, separately.
                3. Average hours per submitted bid tracked alongside.
                4. A one-paragraph monthly commentary sent to the head of sales.

                ## Notes
                Start from the **Metrics log** template. Win rate by count and by value tell very different stories; report both.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly bid reports showing volume, win rate by count and value, and hours per bid, sent to the head of sales."
                cadence: rolling
              tasks:
                - "Set up a bid metrics log from the metrics log template"
                - "Update the bid metrics log with last month's volumes and outcomes @recurring(monthly:3)"
                - "Write a one-paragraph commentary for the head of sales"
            - name: Subject matter expert contribution rota
              description: |-
                ## Purpose
                The engineers, implementation leads and security staff who know the answers have day jobs, and bids that rely on goodwill get their input at midnight. A quarterly rota agreed with their managers, saying who is on bid duty when and for how many hours, makes expert time plannable rather than begged for.

                ## Milestones
                1. A list of the experts each type of bid needs, by topic.
                2. Hours per quarter agreed with each expert's manager.
                3. A rota published showing who covers bids in each month.
                4. Expert turnaround on bid questions tracked and reviewed each quarter.

                ## Notes
                Start from the **Skills matrix** template to map which expert covers which topic.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A quarterly expert rota agreed with managers is published, and expert turnaround on bid questions is recorded for two quarters."
                cadence: cyclic
              tasks:
                - "Map which experts cover which bid topics in a skills matrix"
                - "Agree quarterly bid hours with each expert's manager"
                - "Publish next quarter's expert rota to bid leads and experts @recurring(quarterly)"
                - "Record how long each expert takes to answer bid questions"
            - name: Shredding an RFP in the first two hours
              description: |-
                ## Purpose
                The first read of an RFP decides whether the team spends the next three weeks answering the right questions. Learning to break a fifty-page document into requirements, evaluation criteria, weightings, mandatory forms and key dates in two hours gives the bid decision real information and the compliance matrix a clean start.

                ## Milestones
                1. A personal method for the first read, covering instructions, criteria, requirements and forms in that order.
                2. Three past RFPs shredded as practice, timed.
                3. A one-page summary format covering scope, scoring, risks and dates.
                4. The summary produced within two hours of a live RFP's arrival.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three practice RFPs and one live RFP shredded into a one-page summary, the live one within two hours of arrival."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick three past RFPs of different sizes for practice"
                - "Shred the first RFP and time how long it takes"
                - "Design a one-page RFP summary with scope, scoring, risks and dates"
                - "Produce the summary for the next live RFP within two hours"
            - name: Writing win themes and discriminators
              description: |-
                ## Purpose
                Evaluators read several responses that all claim quality, experience and partnership. Win themes, three or four buyer-specific reasons to choose you, each backed by a discriminator a competitor cannot easily claim and a piece of proof, give every section a thread that makes your response memorable at scoring time.

                ## Milestones
                1. The difference between a feature, a benefit and a discriminator understood and written in your own words.
                2. Win themes drafted for two past bids and compared with what the buyer valued.
                3. A theme statement format: buyer need, your answer, proof.
                4. Themes agreed at kick-off and visible in every major section of a live bid.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Win themes with proof points drafted for two past bids and one live bid, with the live themes traceable in every major section."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a lost bid and list what you claimed that a rival could also claim"
                - "Rewrite three claims as discriminators with a piece of proof each"
                - "Draft win themes for the next bid using need, answer and proof"
                - "Check each major section of the draft carries at least one theme"
            - name: Answer writing that is compliant first
              description: |-
                ## Purpose
                Evaluators have a scoring sheet and limited patience, and answers that open with company history lose marks before reaching the point. Practising an answer structure that states compliance in the first sentence, then explains how, then proves it, makes answers easier to score and easier to reuse.

                ## Milestones
                1. An answer structure written down: direct answer, how it works, proof, benefit to the buyer.
                2. Ten library answers rewritten to the structure.
                3. Before and after versions reviewed by someone who has evaluated bids.
                4. The structure taught to the writers on the next live bid.

                ## Notes
                Mirror the buyer's own words in your first sentence. An evaluator searching for their requirement should find it at a glance.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten library answers rewritten to a direct answer, how, proof structure and reviewed by a former evaluator."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the four-part answer structure on one page"
                - "Rewrite ten frequently used library answers to that structure"
                - "Ask someone who has scored bids to compare the before and after versions"
                - "Run a thirty-minute session on the structure for the next bid's writers"
            - name: Writing to the evaluation criteria and weightings
              description: |-
                ## Purpose
                Many RFPs publish exactly how answers will be scored and what a top mark looks like, and many bidders never read that part. Learning to map each answer to its criterion, weighting and scoring descriptor, and to spend writing effort in proportion to the marks available, is the cheapest score improvement in bid work.

                ## Milestones
                1. Evaluation criteria, weightings and score descriptors located in three past RFPs.
                2. A habit of copying each score descriptor above the answer it applies to while drafting.
                3. Writing time allocated in proportion to available marks on one live bid.
                4. Debrief scores compared with the weightings to see where marks were lost.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "On one live bid, every answer is mapped to its criterion and weighting, and writing time was planned in proportion to marks."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the evaluation criteria and score descriptors in three past RFPs"
                - "Paste each score descriptor above its answer in the next draft"
                - "Allocate writing hours by the weighting of each section"
                - "Compare debrief scores with weightings once the result arrives"
            - name: RFP executive summary writing
              description: |-
                ## Purpose
                Senior buyers and evaluation chairs may read only the executive summary, and it is often written last, in a hurry, as a company introduction. Practising a summary that restates the buyer's goals, presents your win themes and proof, and states the price position in plain words gives the most-read page the most attention.

                ## Milestones
                1. Three executive summaries from past bids critiqued against the buyer's stated goals.
                2. A summary structure: their situation, their goals, your solution, why you, what happens next.
                3. A draft summary written at kick-off and revised at red team.
                4. A live summary that fits on two pages and names the buyer more often than your company.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-page executive summary for a live bid, drafted at kick-off and revised after red team review."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Count how often past summaries name the buyer versus your company"
                - "Write the five-part executive summary structure on one page"
                - "Draft the next bid's summary at kick-off, before the answers"
                - "Revise the summary after the red team review"
            - name: Accurate completion of buyer pricing schedules
              description: |-
                ## Purpose
                Buyer pricing schedules come with their own units, assumptions and locked formulas, and an error there can disqualify a bid or commit you to a price nobody approved. Learning to read the schedule's rules, reconcile it with the internal pricing model and get an independent check before upload protects both the bid and the margin.

                ## Milestones
                1. The pricing instructions of three past RFPs read and their common traps listed.
                2. A reconciliation step between the buyer's schedule and the internal pricing model.
                3. A second person checking every pricing file before submission.
                4. Zero pricing errors raised by buyers across the next three bids.

                ## Notes
                Never type over a buyer's locked cells or change their formulas. Ask a clarification question instead.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The next three pricing schedules were reconciled to the internal model and independently checked, with no errors raised by buyers."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the pricing traps found in three past RFP pricing schedules"
                - "Write a reconciliation check between the schedule and your model"
                - "Name a second checker for every pricing file"
                - "Record any pricing query a buyer raises after submission"
            - name: One voice editing across a large bid team
              description: |-
                ## Purpose
                Fifteen people writing one response need one editor with the authority to change anyone's words. Learning the editing passes, structure first, then compliance, then consistency of terms and tone, then proofreading, means the final document reads as if one confident supplier wrote it.

                ## Milestones
                1. Four editing passes defined and done in order rather than all at once.
                2. A consistency list of product names, buyer names and key terms for each bid.
                3. Final edit time protected in the bid plan, at least two days before gold review.
                4. Edited sections from one bid compared with the raw drafts to show the difference.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A live bid edited in four separate passes with a consistency list, and two days of editing protected in its plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the four editing passes and what each checks"
                - "Build a consistency list of names and terms for the current bid"
                - "Block two days for editing in the bid plan before gold review"
                - "Compare three raw and edited sections to show contributors what changed"
            - name: Spreadsheet and portal questionnaire RFPs
              description: |-
                ## Purpose
                Many RFPs now arrive as spreadsheets with hundreds of rows or as portal forms with character limits and no formatting, which punishes long library answers. Learning to bulk-match rows to the library, write to tight limits and keep an offline copy before pasting into a portal makes these bids faster and safer.

                ## Milestones
                1. A method for matching spreadsheet rows to library answers in bulk.
                2. Short answers under common character limits available for the top fifty questions.
                3. An offline working copy kept for every portal response before entry.
                4. One spreadsheet RFP completed in half the hours of the last comparable one.

                ## Notes
                Portals sometimes log users out and lose unsaved text. Paste from the offline copy, never draft inside the form.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One spreadsheet or portal RFP completed from an offline copy using bulk library matching, in fewer hours than the last comparable bid."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Record the hours spent on the last spreadsheet RFP as a baseline"
                - "Write sub-500-character versions of the fifty most common answers"
                - "Match the next spreadsheet's rows to library answers in one pass"
                - "Keep an offline copy of every portal answer before pasting it in"
            - name: Case study and reference customer bank
              description: |-
                ## Purpose
                Most RFPs ask for two or three case studies and named references in a similar sector, and finding customers willing to take a call at short notice is a recurring scramble. A bank of approved case studies by sector and size, with referees who have agreed in advance and a limit on how often each is called, turns that scramble into a lookup.

                ## Milestones
                1. Ten case studies written in a standard format with situation, solution, measurable result and permission status.
                2. Each case study tagged by sector, size, region and product.
                3. Six named referees who have agreed to be contacted, with preferred contact and frequency limits.
                4. A log of when each referee was used so nobody is called too often.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten approved case studies tagged by sector and size, and six referees who agreed in writing, held with a usage log."
                cadence: rolling
              tasks:
                - "List customers in each target sector who might act as a reference"
                - "Agree case study wording and permission with each customer in writing"
                - "Tag every case study by sector, size, region and product"
                - "Add one new approved case study to the bank @recurring(quarterly)"
            - name: Choosing RFP response software
              description: |-
                ## Purpose
                Once a team handles more than a couple of RFPs a month, shared drives and copy and paste start costing real hours and real mistakes. Comparing dedicated response tools on library search, AI-assisted matching, collaboration, CRM links and price, against a written list of your own needs, prevents buying a platform the team abandons in six months.

                ## Milestones
                1. A requirements list ranked must-have, nice-to-have and not needed.
                2. Three tools shortlisted and demonstrated with one of your own past RFPs.
                3. Total cost over three years compared, including seats and onboarding.
                4. A decision recorded with reasons and an owner for implementation.

                ## Notes
                Start from the **Purchase decision** template. Make each vendor run their demo on your RFP, not their sample one.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written tool decision comparing three shortlisted products on one of your own RFPs and three-year cost, signed off by the budget holder."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write a ranked requirements list for response software"
                - "Shortlist three tools and send each the same past RFP for their demo"
                - "Compare three-year cost including seats, onboarding and integrations"
                - "Record the decision and the implementation owner"
            - name: AI-assisted drafting policy for bids
              description: |-
                ## Purpose
                AI tools can produce a first draft of an RFP answer in seconds, and they can also invent a certification you do not hold. A short policy saying which tools are approved, what buyer information may be put into them, and that every generated answer is checked by a named owner lets the team go faster without submitting something untrue.

                ## Milestones
                1. Approved tools listed, with any confidentiality limits from the buyer's RFP terms noted.
                2. A rule on which buyer documents may and may not be uploaded to an AI tool.
                3. A required human check for facts, figures, certifications and commitments in every generated answer.
                4. A quarterly spot check of submitted AI-assisted answers against the library.

                ## Notes
                Some RFPs forbid sharing their contents with third parties. Read the confidentiality clause before uploading anything.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page AI drafting policy approved by legal and the head of sales, with the first quarterly spot check completed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the AI tools bid writers already use"
                - "Ask legal what buyer material may be shared with those tools"
                - "Write a one-page policy with approved tools and a human check rule"
                - "Spot check five submitted AI-assisted answers against the library @recurring(quarterly)"
            - name: Raising library reuse on every bid
              description: |-
                ## Purpose
                Writers who skip the library are the surest sign it is not paying for itself. Measuring how much of each submitted response came from the library, and finding the questions that keep being written from scratch, shows where to add answers and where writers need a nudge.

                ## Milestones
                1. Reuse measured on the last three submissions as a baseline percentage.
                2. The twenty questions most often written from scratch identified.
                3. Library answers added for those twenty questions.
                4. Reuse on the next three bids higher than the baseline.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Library reuse on three consecutive bids is measurably higher than the baseline from the three before."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Estimate the share of library content in the last three submissions"
                - "List the twenty questions most often written from scratch"
                - "Add approved library answers for those twenty questions"
                - "Measure reuse again after the next three submissions"
            - name: Teaming partner and subcontractor decisions
              description: |-
                ## Purpose
                Some RFPs ask for more than one company can deliver, and the choice is to partner, subcontract, decline the gap or decline the bid. A short decision method covering which partner fills which gap, who is prime, how liability and revenue split and how the joint response is written avoids teaming agreements signed in a rush that one side regrets.

                ## Milestones
                1. Capability gaps in the RFP listed against what you deliver yourselves.
                2. Possible partners assessed on fit, reputation and willingness to be named.
                3. Prime or subcontractor roles, revenue share and response ownership agreed in a term sheet.
                4. A teaming agreement reviewed by legal before the partner sees your pricing.

                ## Notes
                Get a non-disclosure agreement in place before sharing anything from a confidential RFP with a partner, and check whether the RFP permits it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "For one bid needing a partner, a recorded teaming decision with roles, revenue split and a legally reviewed agreement."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the RFP requirements you cannot deliver alone"
                - "Assess two or three possible partners against those gaps"
                - "Draft a teaming term sheet covering roles, share and response ownership"
                - "Send the teaming agreement to legal before sharing pricing"
            - name: Exceptions and assumptions table policy
              description: |-
                ## Purpose
                Most RFPs include draft contract terms and invite bidders to list exceptions, and heavy exceptions can sink an otherwise winning score. Agreeing with legal in advance which buyer terms you accept, which you always qualify and which are walk-away points, with standard wording for each, keeps the exceptions table short, consistent and quick to complete.

                ## Milestones
                1. The contract clauses that appeared in the last ten RFPs listed by frequency.
                2. Each common clause marked accept, qualify with standard wording or walk away.
                3. Standard assumption statements written for scope, dependencies and pricing validity.
                4. Legal sign-off on the policy and a named reviewer for anything outside it.

                ## Notes
                This sets the bid team's standard positions. Anything outside them goes to your legal team, not to a writer's judgement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A legally approved table of standard positions on common RFP contract clauses and assumptions, used on the next two bids."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the contract clauses that appeared in the last ten RFPs"
                - "Ask legal to mark each as accept, qualify or walk away"
                - "Write standard wording for qualifications and common assumptions"
                - "Use the policy on the next two bids and log any new clause"
            - name: Triage of RFIs, RFQs and full RFPs
              description: |-
                ## Purpose
                Requests for information, requests for quotation and full RFPs need very different effort, yet teams often answer all three as if they were the final round. A simple triage rule, light-touch for RFIs that shape a later RFP, price-led for RFQs and the full process for RFPs, puts effort where the decision is actually made.

                ## Milestones
                1. Definitions of RFI, RFQ and RFP written in plain words for sellers.
                2. A maximum effort level and approval route set for each type.
                3. A light RFI response format that positions you for the RFP that follows.
                4. Every request in the bid register tagged with its type.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written triage rule with effort limits for RFIs, RFQs and RFPs, applied to every request logged in the following quarter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one-line definitions of RFI, RFQ and RFP for sellers"
                - "Set an effort ceiling and approval route for each type"
                - "Draft a light RFI response format"
                - "Tag every request in the bid register with its type"
            - name: Declining a bid with a no-bid letter
              description: |-
                ## Purpose
                Silence after an invitation tells a buyer you were not interested, which makes the next invitation less likely. A short, courteous no-bid letter that thanks them, gives a brief honest reason and states what would make you bid next time keeps the door open and sometimes prompts a useful conversation about scope.

                ## Milestones
                1. A no-bid letter template with thanks, reason and a door-opening line.
                2. Three variants for common reasons: scope fit, timing and commercial terms.
                3. Every declined bid in the next quarter answered with a letter within two working days.
                4. Any buyer response recorded in the CRM.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A no-bid letter template with three variants exists, and every declined bid in the next quarter received one within two working days."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a short no-bid letter with thanks, reason and an open door"
                - "Write variants for scope, timing and commercial reasons"
                - "Send a letter for the next declined bid within two working days"
                - "Log any buyer reply against the account in the CRM"
            - name: Shortlist orals and clarification presentation
              description: |-
                ## Purpose
                Being shortlisted often means an oral presentation or clarification meeting where the panel tests the written response and meets the people who would deliver it. Preparing it from the submission itself, with the answers evaluators scored lowest addressed first and the delivery team present, keeps it consistent with what is already on the scoring sheet.

                ## Milestones
                1. The buyer's agenda, attendees, format and any scored elements confirmed in writing.
                2. The weakest-scoring areas of the written response identified from questions or feedback.
                3. Presenters chosen from the proposed delivery team, not only sales.
                4. Two timed rehearsals with a mock panel asking hard questions from the submission.
                5. Every commitment made in the session checked against the written response.

                ## Notes
                Panels often check that the people presenting are the people named in the response. Bring them.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An orals session delivered by the named delivery team after two timed rehearsals, with every commitment consistent with the written bid."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Confirm the panel, agenda, timing and any scoring with the buyer"
                - "List the parts of the submission the panel is likely to probe"
                - "Book two rehearsals with a mock panel of colleagues"
                - "Check every promise in the presentation against the written response"
            - name: Best and final offer round
              description: |-
                ## Purpose
                Receiving a request for a best and final offer usually means you are close and the buyer wants movement on price or terms. Preparing a planned response, knowing in advance what you can give, what you will ask for in return and what you will not move on, prevents a last-round panic that gives away margin the evaluation did not require.

                ## Milestones
                1. The buyer's BAFO instructions and deadline confirmed, including what may change.
                2. Concessions ranked by cost to you and value to the buyer.
                3. A revised offer approved through the normal pricing sign-off.
                4. A covering letter that restates the win themes alongside the revised terms.

                ## Notes
                A BAFO response that only cuts price throws away the quality marks you earned. Restate the value as well.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A BAFO submitted before the deadline with an approved, costed concession set and a covering letter restating win themes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the BAFO instructions and list exactly what may change"
                - "Rank possible concessions by cost to you and value to the buyer"
                - "Get the revised offer approved through normal pricing sign-off"
                - "Write a covering letter that restates the win themes"
            - name: Must-win strategic bid plan
              description: |-
                ## Purpose
                Once or twice a year a bid arrives that could change the company's year, and it deserves more than the standard process. A dedicated plan with an executive sponsor, a ring-fenced team, a risk register, extra review rounds and a decision gate halfway through gives it the attention the stakes demand.

                ## Milestones
                1. An executive sponsor and a ring-fenced core team named in writing.
                2. A bid plan with every internal milestone back from the submission date.
                3. A risk register covering delivery, pricing, competitor and resource risks.
                4. A halfway decision gate where the sponsor confirms continue or withdraw.
                5. The bid submitted early, with every planned review completed.

                ## Notes
                Start from the **Risk register** template.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A must-win bid submitted ahead of its deadline with a named sponsor, a maintained risk register and every planned review completed."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Ask the executive sponsor to confirm the ring-fenced team in writing"
                - "Build the bid plan backwards from the submission date"
                - "Open a risk register from the template and review it at each stand-up"
                - "Hold the halfway gate with the sponsor and record the decision"
            - name: Handover of won RFP commitments to delivery
              description: |-
                ## Purpose
                A won RFP is a list of promises written by people who will not deliver them. A formal handover of the response, the commitments register, pricing assumptions and clarification answers to the delivery team before kick-off means the customer gets what they scored, and you avoid the first-quarter complaint that the bid oversold.

                ## Milestones
                1. A commitments register listing every promise in the response with its page reference.
                2. A handover meeting with delivery, account management and the bid lead.
                3. Pricing assumptions and exclusions explained to the delivery lead.
                4. Commitments reviewed against delivery each quarter for the first year.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A commitments register handed to delivery at a recorded meeting before kick-off, with the first quarterly check completed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Extract every commitment in the winning response into a register"
                - "Hold a handover meeting with delivery and account management"
                - "Walk the delivery lead through pricing assumptions and exclusions"
                - "Check delivery against the committed RFP promises @recurring(quarterly)"
            - name: Annual bid process retrospective
              description: |-
                ## Purpose
                Bid teams improve one painful lesson at a time and forget most of them by the next busy season. A yearly retrospective using the metrics log, the debrief notes and a short survey of contributors produces three or four changes to the process, agreed and owned, instead of the same complaints next year.

                ## Milestones
                1. The year's bid metrics and debrief themes summarised on two pages.
                2. A short survey of contributors on what helped and what hurt.
                3. A half-day retrospective with bid, sales, legal and expert representatives.
                4. Three or four process changes agreed, each with an owner and date.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly retrospective held with all functions represented, producing three or four owned and dated process changes."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Summarise the year's bid metrics and debrief themes on two pages"
                - "Send a five-question survey to everyone who contributed to a bid"
                - "Book the half-day bid retrospective with all functions @recurring(yearly)"
                - "Publish the agreed changes with owners and dates"
            - name: Agency pitch RFPs and spec work policy
              description: |-
                ## Purpose
                Agencies receive procurement-led pitch RFPs that ask for credentials, rate cards and sometimes free creative work, with several rival agencies invited. A policy on when you will do speculative work, what pitch fee you ask for, how many agencies on the list you will accept and how you protect ideas you present lets the agency choose pitches it can win instead of giving away its best thinking.

                ## Milestones
                1. Pitch history from the last two years with win rate, cost and whether spec work was given.
                2. A written policy on spec work, pitch fees and list size.
                3. A standard credentials and rate card section kept in the library.
                4. An idea ownership statement included with every creative submission.

                ## Notes
                Industry bodies in several countries publish good-practice pitch guidelines for clients and agencies. They are useful to cite when asking for a pitch fee.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An agency pitch policy covering spec work, pitch fees and list size, approved by the partners and applied to the next three pitch invitations."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every pitch from the last two years with cost and outcome"
                - "Draft a policy on spec work, pitch fees and how many rivals you accept"
                - "Write the idea ownership statement for creative submissions"
                - "Apply the policy to the next three pitch invitations"
            - name: First RFP for a team with no bid manager
              description: |-
                ## Purpose
                A small sales team receiving its first serious RFP has no library, no process and a seller who has never done this. A cut-down plan, one owner, a compliance matrix, a borrowed reviewer and a submission a day early, gets a credible response out without pretending to be a bid office.

                ## Milestones
                1. One person named as bid owner with time cleared in their calendar.
                2. A simple compliance matrix built from the RFP.
                3. A plan with three dates: first draft, review and internal submission.
                4. One outside reviewer, such as an adviser or friendly customer, read the draft.
                5. The response submitted a day before the deadline.

                ## Notes
                Keep everything you write. Your first RFP response becomes your first library.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A first RFP submitted a day early with a compliance matrix and one outside review, and its answers saved as the start of a library."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Name one bid owner and clear two days in their calendar"
                - "Build a compliance matrix from the RFP's requirements"
                - "Set first draft, review and internal submission dates"
                - "Ask an adviser or friendly customer to read the draft"
                - "Save every answer into a shared folder as the start of a library"
            - name: Enterprise bid office across product lines
              description: |-
                ## Purpose
                In a large company, bids for different product lines compete for the same writers, reviewers and executive sign-off, and each division reinvents the process. A central bid office with shared standards, a joint library and a monthly review with product line heads balances capacity and lets divisions learn from each other's wins.

                ## Milestones
                1. A bid office charter covering scope, services and how divisions request help.
                2. Shared standards for the bid process, library and templates agreed across divisions.
                3. A capacity model showing writers and reviewers by division and month.
                4. A monthly review with product line heads on volume, win rate and resourcing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bid office charter agreed by all product line heads, with shared standards and three monthly review meetings held."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Interview each product line's bid lead about their current process"
                - "Draft a bid office charter and shared standards"
                - "Build a capacity model of writers and reviewers by division"
                - "Hold the monthly bid office review with product line heads @recurring(monthly:9)"
            - name: Bidding as a new vendor without references
              description: |-
                ## Purpose
                Young companies and teams launching a new product meet RFPs that ask for three similar customers and five years of accounts. Planning how to answer honestly, with pilot customers, the track record of the people involved, partner references, financial assurances and a lower-risk commercial offer, keeps you in the running instead of disqualifying yourself.

                ## Milestones
                1. Every reference, experience and financial requirement in the RFP marked as met, partly met or not met.
                2. Substitute evidence identified for each partly met item: pilots, team experience, partner references.
                3. A clarification question sent where a requirement looks like a blocker.
                4. A risk-reducing offer, such as a paid pilot or phased start, considered and costed.

                ## Notes
                Never stretch a reference or a figure. Evaluators check, and a disqualification for misrepresentation follows you to the next tender.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A gap list for one RFP with substitute evidence for each gap and a recorded decision on whether to bid and with what offer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark each reference and experience requirement as met, partly met or not met"
                - "List substitute evidence for every partly met requirement"
                - "Send a clarification question for any requirement that looks like a blocker"
                - "Cost a paid pilot or phased start as a lower-risk option"
            - name: Incumbent re-tender defence
              description: |-
                ## Purpose
                When your existing customer goes back out to tender, you hold the best knowledge and the biggest blind spot: evaluators score the document, not the relationship, and they remember every problem. Starting the defence months before the RFP, with an honest service review, fixes made visible and a response that proposes improvements rather than more of the same, protects revenue you cannot afford to lose.

                ## Milestones
                1. The contract end date and likely re-tender timing confirmed with the customer.
                2. An honest record of service issues over the contract and what was done about each.
                3. A list of improvements and innovation to offer in the new contract.
                4. A response that answers the RFP as written, with no assumption that the evaluators know you.

                ## Notes
                Incumbents lose re-tenders by writing short answers because the buyer knows them already. Write for an evaluator who has never met you.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A re-tender plan started at least six months before contract end, with a service issue record and an improvement list built into the response."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Confirm the contract end date and expected re-tender timing"
                - "List every service issue in the contract term and how it was resolved"
                - "Draft the improvements you will offer in the new contract"
                - "Brief writers to answer as if the evaluators have never met you"
            - name: Running bids across time zones and remote contributors
              description: |-
                ## Purpose
                Global teams can work a bid round the clock or lose a day on every handoff. A follow-the-sun plan with clear handover notes, one master document, set review windows in each region and a submission owner in the buyer's time zone turns distance into speed rather than confusion.

                ## Milestones
                1. Contributors mapped by time zone with their working hours.
                2. One master document with locked sections and a change log.
                3. A written end-of-day handover note format used by every region.
                4. The submission owner located in, or working the hours of, the buyer's time zone.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One multi-region bid run on a single master document with daily handover notes and a submission owner in the buyer's time zone."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Map every bid contributor by time zone and working hours"
                - "Set up one master document with a change log"
                - "Write a five-line handover note format for the end of each regional day"
                - "Name a submission owner working the buyer's hours"
            - name: Bid cost tracking and return on bid effort
              description: |-
                ## Purpose
                Spending two hundred hours to win a small contract may be a poor use of the team even when it succeeds. Logging hours and external costs per bid and comparing them with the value won shows which buyers, sizes and sectors pay back the effort, and gives the bid or no-bid rubric real economics.

                ## Milestones
                1. Hours per bid logged by role, plus external costs such as design, print or travel.
                2. Cost per bid compared with contract value won over a year.
                3. Return on bid effort calculated by sector and deal size.
                4. Rubric weightings adjusted where the numbers contradict them.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Twelve months of bid cost data analysed by sector and size, with at least one rubric change made from the findings."
                cadence: rolling
              tasks:
                - "Add hours by role and external cost columns to the bid register"
                - "Log bid hours and external costs for every active bid @recurring(monthly:28)"
                - "Compare a year of bid costs with contract value won"
                - "Propose rubric changes where return on effort contradicts the weightings"
            - name: Price to win analysis for major bids
              description: |-
                ## Purpose
                On large competitive bids, the price that wins is set by the competition and the buyer's budget, not by your cost plus margin. A structured estimate of the buyer's budget, likely rival pricing and the weight price carries in scoring tells leadership early whether the deal is winnable at an acceptable margin.

                ## Milestones
                1. Public information on the buyer's budget, previous contract values and spend gathered.
                2. Likely competitor price ranges estimated from debriefs, past awards and win-loss data.
                3. The price weighting and scoring formula modelled to show how many quality marks a price gap costs.
                4. A target price range presented to the pricing approver before the solution is fixed.

                ## Notes
                Use only legitimately available information such as published awards, debriefs and your own history. Never seek a competitor's confidential pricing.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A price to win estimate for one major bid, with a modelled price and quality trade-off, presented to the pricing approver before solution lock."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect published contract values and budgets for the buyer"
                - "Estimate competitor price ranges from debriefs and past awards"
                - "Model how the scoring formula converts a price gap into lost marks"
                - "Present a target price range to the pricing approver"
            - name: Mock evaluation panel for a draft response
              description: |-
                ## Purpose
                Red team reviews catch weak answers; a mock evaluation goes further by scoring the whole draft exactly as the buyer will, with independent scorers and a moderation meeting. It shows where the response would actually rank and which sections would move the total most if improved, which is worth the effort on bids above a set value.

                ## Milestones
                1. Three scorers from outside the bid team, briefed on the buyer's evaluation method.
                2. Independent scores recorded before any discussion, using the buyer's descriptors.
                3. A moderation meeting producing an agreed score per section.
                4. The three sections with the most marks to gain rewritten and rescored.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A draft scored independently by three outside reviewers and moderated, with the three highest-gain sections rewritten before submission."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Set the bid value above which a mock evaluation is required"
                - "Brief three outside scorers on the buyer's evaluation method"
                - "Collect independent scores before holding a moderation meeting"
                - "Rewrite the three sections with the most marks to gain"
            - name: Capture plans for strategic opportunities
              description: |-
                ## Purpose
                The best RFP responses are written before the RFP exists, through months of understanding the buyer, shaping their requirements and positioning against rivals. A capture plan for each strategic opportunity, reviewed monthly, means the bid team starts with a known buyer, a solution sketch and themes rather than a cold document.

                ## Milestones
                1. A shortlist of strategic opportunities expected to go to RFP in the next twelve months.
                2. A capture plan for each covering buyer goals, decision makers, competitors, solution and themes.
                3. Pre-RFP actions logged, such as briefings, RFI responses and site visits.
                4. A monthly capture review deciding which opportunities still merit investment.

                ## Notes
                Some buyers, especially in the public sector, restrict contact once a procurement starts. Check the rules and stop when the RFP is issued if required.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Capture plans exist for every strategic opportunity expected in the next twelve months and have been reviewed monthly for a quarter."
                cadence: rolling
              tasks:
                - "List opportunities likely to go to RFP in the next twelve months"
                - "Write a one-page capture plan for each strategic opportunity"
                - "Log pre-RFP actions against each capture plan"
                - "Review the capture list and drop opportunities that no longer merit effort @recurring(monthly:19)"
---

# RFP Response Management

This area is for anyone who answers formal requests for proposal: a bid manager in an enterprise bid office, an agency fielding procurement-led pitches, or a sales team that gets two RFPs a quarter and no one whose job it is. It starts with foundations (an audit of past bids, a bid or no-bid rubric, one intake route, named roles and a seeded answer library), moves through the weekly machinery of running live bids, then the writing skills evaluators reward, the decisions on tools, partners and AI drafting, dated moments such as orals and best and final offers, situations from a first RFP to an incumbent re-tender, and finally specialist work on capture planning, price to win and the return on bid effort.

What repeats is a daily check of the bid inbox and portals, a weekly bid or no-bid call, stand-up and calendar update, monthly library reviews, certificate checks, debrief chases and win-rate reporting, quarterly rubric calibration and expert rotas, and a yearly retrospective. The Operational checklist, Purchase decision, Metrics log, Meeting notes, Risk register and Skills matrix templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
