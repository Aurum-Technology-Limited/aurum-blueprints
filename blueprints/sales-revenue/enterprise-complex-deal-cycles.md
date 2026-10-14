---
id: sales-revenue.enterprise-complex-deal-cycles
name: Enterprise Complex Deal Cycles
description: "A deal room, a cross-functional deal team, a risk register and weekly momentum checks that carry long enterprise deals through security, legal, procurement and executive sign-off with the champion intact."
category: business
version: 1.0.0
tags: [sales-revenue, enterprise-complex-deal-cycles, enterprise, team, manager, long-sales-cycle, security-review, legal-redlines]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - operational-checklist
    - metrics-log
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Enterprise Complex Deal Cycles
          description: "Steering long, multi-stakeholder enterprise deals through security reviews, legal redlines, procurement and executive sign-off without losing momentum or the champion."
          projects:
            - name: Enterprise pursuit go or no-go decision
              description: |-
                ## Purpose
                Long enterprise pursuits cost real money: months of a seller, a solutions engineer, a security lead and a lawyer, often before the buyer has committed a budget. Deciding deliberately whether a deal deserves that investment, against written criteria such as a funded problem, an accessible economic buyer and a realistic win path, stops the team pouring a quarter into a deal that was never going to sign.

                ## Milestones
                1. Six to eight pursuit criteria written, each with a pass, partial or fail definition.
                2. An estimate of internal hours and cost to reach signature for a typical deal.
                3. The current largest open deal scored against the criteria, with a recorded verdict.
                4. A named person who makes the final pursue or walk away call on each deal.

                ## Notes
                A no-go is not a lost deal. It is a decision to stay in light contact and revisit when the buyer funds the problem.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written set of pursuit criteria, with the largest open deal scored against it and a pursue or walk away decision recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what your last two lost enterprise deals were missing at the point you committed resources"
                - "Write six to eight pursuit criteria with a pass, partial and fail line for each"
                - "Estimate the internal hours a deal of this size usually takes to reach signature"
                - "Score your largest open deal and record the pursue or walk away decision"
            - name: Single deal room for every enterprise pursuit
              description: |-
                ## Purpose
                Nine months of email threads, three versions of the order form and two security questionnaires spread across five inboxes is how a contract gets signed on the wrong draft. One shared deal room per pursuit, with a fixed folder structure, a naming rule and an owner, means anyone on the deal team can find the current version in under a minute.

                ## Milestones
                1. A standard folder structure covering discovery, business case, security, legal, commercial and executive material.
                2. A file naming rule that puts the date and version in every document name.
                3. Every active enterprise deal moved into its own room with the current documents in place.
                4. Access granted to the whole deal team and removed for anyone who has left it.

                ## Notes
                Keep the buyer-facing room separate from the internal one. Pricing notes and risk discussions should never sit in a folder the buyer can see.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every open enterprise deal has its own internal deal room using the standard structure, with current versions of all live documents."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sketch the folder structure on one page and agree it with your solutions engineer"
                - "Write a naming rule that includes the date and version number"
                - "Move the documents for your largest open deal into a new room"
                - "Archive superseded document versions in each deal room @recurring(monthly:5)"
            - name: Cross-functional deal team charter
              description: |-
                ## Purpose
                Enterprise deals are lost in the gaps between people: the security answer that waited a fortnight for an engineer, the legal clause nobody owned. A one-page charter naming who covers solution design, security, legal, finance and executive sponsorship, with agreed response times, turns a loose group of helpers into a team that moves at the buyer's pace.

                ## Milestones
                1. Named owners for solution, security, legal, commercial and executive roles on enterprise deals.
                2. Response times agreed for each role, for example two working days for a security question.
                3. An escalation route written for when a response time is missed.
                4. The charter shared with every named person and their managers.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed off one-page deal team charter with named owners and response times for five roles, shared with each owner's manager."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every internal person who touched your last enterprise deal and what they did"
                - "Name an owner and a backup for each of the five deal team roles"
                - "Agree a response time with each owner face to face"
                - "Send the charter to the owners and copy their managers"
            - name: Mapping the buyer's purchase path
              description: |-
                ## Purpose
                Every large buyer has an internal route to a signed contract: a business case approval, an architecture board, a security review, legal, procurement, and a spending authority that may sit with a committee or the board. Asking for that route early, and writing it down step by step with owners and typical durations, shows how long the deal really takes before anyone commits to a close date.

                ## Milestones
                1. Every approval step the buyer requires listed in order, with the internal owner for each.
                2. The spending authority threshold that applies to this deal confirmed.
                3. Typical durations for each step, taken from the buyer rather than guessed.
                4. Steps that can run in parallel marked, with the earliest realistic signature date worked out.

                ## Notes
                Ask the champion how the last purchase of similar size went through. Real history beats the official policy.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written purchase path for the deal with every approval step, owner and duration, confirmed by the champion."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your champion how the last purchase of a similar size was approved"
                - "Write each approval step in order with its owner and usual duration"
                - "Confirm the spending threshold that decides who signs this deal"
                - "Mark which steps can run in parallel and work out the earliest signature date"
            - name: Enterprise deal risk register
              description: |-
                ## Purpose
                Risks in a long deal are rarely hidden; they are noticed in passing and then forgotten. A register listing each risk, its likelihood, its impact on the close date and the person handling it turns vague unease into a short list the deal team can work through every month.

                ## Milestones
                1. A register with columns for risk, likelihood, impact, owner, mitigation and status.
                2. At least eight risks captured for the largest open deal, from champion strength to legal exposure.
                3. Every high-impact risk paired with a named mitigation and a date.
                4. Closed risks kept with a one-line note on how they were resolved.

                ## Notes
                Start from the **Risk register** template. Write risks as events (the CFO rejects the business case) rather than topics (budget).
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A risk register for the largest open deal holding at least eight risks, each high-impact one with an owner and dated mitigation."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a risk register for your largest open deal from the template"
                - "Write eight risks as events that would delay or kill the deal"
                - "Assign an owner and a dated mitigation to each high-impact risk"
                - "Review and update the risk register with the deal team @recurring(monthly:12)"
            - name: Champion strength test
              description: |-
                ## Purpose
                Champions are often just friendly contacts who like the product but cannot move budget or win an argument with the CFO. Testing your champion against three questions, whether they have power, whether they gain personally from this succeeding, and whether they will act on your behalf when you are not in the room, tells you how much of the deal is resting on hope.

                ## Milestones
                1. The champion scored on power, personal stake and willingness to act, with evidence for each score.
                2. One specific request made that a real champion would agree to, such as an introduction to the economic buyer.
                3. The outcome of that request recorded as evidence.
                4. A decision written down: keep developing this champion, or build a second one.

                ## Notes
                Evidence means something they did, not something they said. A champion who shares the internal approval process unprompted has passed a real test.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The champion on the largest open deal scored on three criteria with evidence, one test request made and a keep or rebuild decision recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down three things your champion has done, not said, to help the deal"
                - "Score the champion on power, personal stake and willingness to act"
                - "Ask the champion for one introduction that only a real champion would make"
                - "Record whether to keep developing this champion or start building a second"
            - name: Buyer fiscal calendar and blackout dates
              description: |-
                ## Purpose
                Budgets are released, frozen and reallocated on the buyer's fiscal calendar, not yours, and a deal forecast to close in their year-end change freeze will slip regardless of enthusiasm. Recording the fiscal year end, budget-setting window, board dates, holiday periods and change freezes for each target account shows which close dates are realistic.

                ## Milestones
                1. The buyer's fiscal year end and budget-setting window confirmed.
                2. Board and investment committee meeting dates for the next twelve months noted.
                3. Holiday periods, quarter-end freezes and IT change freezes marked on one calendar.
                4. The forecast close date checked against the calendar and moved if it lands in a blackout.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page buyer calendar for each top deal showing fiscal year end, committee dates and blackouts, with the close date checked against it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the buyer's fiscal year end in their published annual report"
                - "Ask the champion when budgets are set and when committees meet"
                - "Mark holidays and change freezes on a calendar for the deal"
                - "Move the forecast close date if it falls inside a blackout"
            - name: Security review evidence pack
              description: |-
                ## Purpose
                Security reviews stall deals for weeks when the seller has to chase an engineer for each document after the request arrives. A ready pack holding your current audit reports, penetration test summary, key policies, data flow diagram, subprocessor list and insurance certificate means the first response goes back within days, and the deal team looks like a vendor that has done this before.

                ## Milestones
                1. Current versions of audit reports, penetration test summary and key policies gathered in one place.
                2. A data flow diagram and subprocessor list approved for sharing with buyers.
                3. A note on which items need a signed confidentiality agreement before release.
                4. An expiry date recorded against every certificate and report in the pack.

                ## Notes
                Ask your security lead what can be shared before an NDA and what cannot. Sending a full penetration test report without one is a common and avoidable mistake.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A security evidence pack with current reports, policies, diagram and insurance certificate, each item dated, approved by the security lead for buyer use."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your security lead for the list of documents buyers usually request"
                - "Gather the current version of each document into the pack folder"
                - "Mark which items require a confidentiality agreement before release"
                - "Check the pack for expired certificates and reports @recurring(quarterly)"
            - name: Pre-agreed legal fallback positions
              description: |-
                ## Purpose
                Legal redlines drag on when every buyer change to liability, indemnity or data protection needs a fresh conversation with your own counsel. Agreeing in advance with counsel a preferred position, an acceptable fallback and a walk-away line for the ten clauses buyers most often change, and who may approve each, lets the deal team answer most redlines the same week.

                ## Milestones
                1. The ten clauses most often redlined in past enterprise contracts identified.
                2. A preferred, fallback and walk-away position written by counsel for each clause.
                3. An approval level named for each position, from seller to general counsel.
                4. The playbook stored in the internal deal room template for every new pursuit.

                ## Notes
                This is your own counsel's work product. The deal team records and applies it; it does not draft legal positions itself.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A clause playbook covering ten common redlines with preferred, fallback and walk-away positions and approval levels, signed off by counsel."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the redlines from your last five enterprise contracts into one list"
                - "Rank the clauses by how often buyers changed them"
                - "Book a working session with counsel to set positions on the top ten"
                - "Review the fallback positions with counsel @recurring(yearly)"
            - name: Monday enterprise deal team stand-up
              description: |-
                ## Purpose
                Fifteen minutes each Monday for each strategic deal keeps solution, security, legal and commercial owners working from the same picture instead of discovering on Thursday what changed on Monday. Each owner states what moved, what is blocked and what they need, and the seller leaves with a list of actions dated before the next buyer meeting.

                ## Milestones
                1. A fixed Monday slot booked for each strategic deal with the deal team.
                2. A three-question format agreed: what moved, what is blocked, what is needed.
                3. Actions from each stand-up recorded in the deal room with an owner and date.
                4. Four consecutive stand-ups held with every owner attending or sending an update.

                ## Notes
                Cancel the stand-up when nothing has moved, but say so in writing. A silent week is information.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly deal team stand-up held for four consecutive weeks on each strategic deal, with actions recorded in the deal room."
                cadence: rolling
              tasks:
                - "Book a recurring fifteen-minute Monday slot with the deal team"
                - "Write the three stand-up questions at the top of the deal room notes"
                - "Run the deal team stand-up and record actions with owners and dates @recurring(weekly:mon)"
                - "Ask each owner after a month whether the format is worth keeping"
            - name: Weekly champion call rhythm
              description: |-
                ## Purpose
                Your champion is doing unpaid work for you inside their company, and a deal goes quiet the week they stop. A standing weekly call of twenty minutes, with an agenda covering internal reactions, upcoming approvals and what they need from you, keeps you informed about the politics you cannot see and gives them material to sell internally.

                ## Milestones
                1. A standing weekly call agreed with the champion at a time that suits them.
                2. A short agenda used every week: what they heard, what is next, what they need.
                3. Each call followed by a written note in the deal room within a day.
                4. At least one piece of internal intelligence captured per month that changed the plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly champion call held for eight weeks with notes in the deal room after each one."
                cadence: rolling
              tasks:
                - "Ask your champion for a standing twenty-minute weekly slot"
                - "Write a three-line agenda you can reuse every week"
                - "Hold the champion call and log what you learned in the deal room @recurring(weekly:thu)"
                - "Send the champion one useful item they can share internally after each call"
            - name: Deal momentum check on buyer actions
              description: |-
                ## Purpose
                Deals rarely die with a refusal; they fade as the gaps between buyer actions lengthen. Tracking the date of the last thing the buyer did, not the last email you sent, and flagging any strategic deal where the gap passes ten working days, catches drift while there is still time to reset the plan.

                ## Milestones
                1. A last buyer action date recorded for every strategic deal.
                2. A drift threshold agreed, such as ten working days without a buyer action.
                3. Every deal past the threshold given a specific reset action within two days.
                4. A month of weekly checks completed with drift cases and outcomes noted.

                ## Notes
                A buyer action is something they did: attended, sent, approved, introduced. Opening your email does not count.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every strategic deal shows a last buyer action date, and each one past the drift threshold has a dated reset action."
                cadence: rolling
              tasks:
                - "Add a last buyer action date field to each strategic deal"
                - "Agree the drift threshold with your manager"
                - "Check buyer action dates and flag deals past the threshold @recurring(weekly:fri)"
                - "Write a specific reset action for each drifting deal"
            - name: Multi-threading coverage review
              description: |-
                ## Purpose
                Single-threaded deals, with one relationship carrying everything, are the ones that collapse when that person goes on leave or loses an internal argument. A monthly review of how many active relationships you hold in each function on the buying side, against a target of at least four across business, technical, finance and procurement, shows where to build next.

                ## Milestones
                1. A coverage target agreed for strategic deals, for example four functions with an active contact.
                2. Current coverage counted for every strategic deal.
                3. A named plan to reach each missing function, with who on your side will make the approach.
                4. Coverage improved by at least one function on two deals within a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every strategic deal has a coverage count and a dated plan for each missing function, reviewed monthly."
                cadence: rolling
              tasks:
                - "Count the active buyer contacts by function on each strategic deal"
                - "Pick the missing function that matters most on each deal"
                - "Assign someone on your side to approach each missing function"
                - "Review multi-threading coverage across strategic deals @recurring(monthly:8)"
            - name: Executive sponsor pairing programme
              description: |-
                ## Purpose
                Senior buyers want to hear from someone at their level before they sign a multi-year commitment, and a seller cannot fill that role alone. Pairing each strategic deal with one of your executives, briefing them properly and scheduling a touch every month gives the buyer a peer to call when something goes wrong and gives your executive a reason to care about the outcome.

                ## Milestones
                1. An executive sponsor named and briefed for each strategic deal.
                2. A one-page sponsor brief written covering the buyer, the stakes and what to ask for.
                3. A first sponsor-to-executive conversation held and its outcome recorded.
                4. A monthly sponsor touch running for three months on each strategic deal.

                ## Notes
                Brief the sponsor with one specific ask per conversation. An executive call without an ask is a pleasant chat that moves nothing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each strategic deal has a briefed executive sponsor with three monthly buyer touches recorded."
                cadence: rolling
              tasks:
                - "Ask your manager which executives can sponsor strategic deals this half"
                - "Write a one-page sponsor brief for your largest deal"
                - "Arrange the first sponsor conversation with the buyer's executive"
                - "Brief the sponsor on one specific ask for their next buyer touch @recurring(monthly:15)"
            - name: Redline tracker and turnaround log
              description: |-
                ## Purpose
                Redlines that pass back and forth for weeks are rarely about one hard clause; they are about turnaround, with each side waiting days to respond. A tracker listing every open clause, who holds it, how long it has been with them and the next agreed step makes the delay visible and gives you something specific to escalate.

                ## Milestones
                1. Every open clause on the current contract listed with the party holding it.
                2. Days held recorded for each clause and updated weekly.
                3. Clauses held by your side for more than five working days escalated internally.
                4. Average turnaround per round recorded when the contract is signed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A redline tracker for each contract in negotiation shows every open clause, its holder and days held, updated weekly until signature."
                cadence: rolling
              tasks:
                - "List every open clause in the current draft with who holds it"
                - "Ask the agent to summarise what changed between the last two contract drafts"
                - "Update days held and chase any clause stuck on your side @recurring(weekly:wed)"
                - "Record the average turnaround per round once the contract is signed"
            - name: Security review status tracker
              description: |-
                ## Purpose
                Questionnaires, architecture calls, follow-up evidence requests and risk acceptance sign-offs can run for months in a regulated buyer, and sellers often learn the review has stalled only when the champion mentions it. A weekly status line for each strategic deal, showing the stage, open questions and who is waiting on whom, keeps security from becoming the silent reason a quarter slips.

                ## Milestones
                1. The buyer's security review stages written down for each strategic deal.
                2. Open questions and evidence requests listed with an owner on each side.
                3. A named contact in the buyer's security team who can confirm status.
                4. The final risk acceptance or approval recorded in the deal room.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each strategic deal has a weekly security status line with stage, open items and owners until the buyer's approval is recorded."
                cadence: rolling
              tasks:
                - "Ask the champion to name the person running the security review"
                - "Write down the stages the review will pass through"
                - "Update open security items and owners for each strategic deal @recurring(weekly:tue)"
                - "Save the buyer's final security approval in the deal room"
            - name: Monthly deal health review with your manager
              description: |-
                ## Purpose
                Once a month, a forty-five minute review of each strategic deal against the same five questions, covering champion strength, purchase path progress, open risks, momentum and close date confidence, catches the slow decay that weekly stand-ups miss. Doing it with your manager also gets their help on escalations while there is still time to use it.

                ## Milestones
                1. Five standing health questions agreed with your manager.
                2. A one-line health rating recorded for each strategic deal every month.
                3. At least one manager action agreed per review, such as an executive call.
                4. Three months of ratings kept so trends are visible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly health review held for three months with a rating and one manager action recorded for each strategic deal."
                cadence: rolling
              tasks:
                - "Agree the five health questions with your manager"
                - "Prepare a one-line health rating for each strategic deal"
                - "Run the deal health review with your manager @recurring(monthly:20)"
                - "Note the manager action agreed for each deal in the deal room"
            - name: Quarter-end slip prevention review
              description: |-
                ## Purpose
                Quarter-end is where enterprise forecasts break, because deals marked as closing in the final fortnight still have open legal, security or signature steps nobody has counted. Six weeks before quarter end, walking every committed deal through its remaining steps against the days left gives leadership an honest number and the deal team a chance to pull steps forward.

                ## Milestones
                1. Every committed deal listed with each remaining step to signature.
                2. Working days needed for those steps compared with days left in the quarter.
                3. Deals that cannot finish moved to the next quarter in the forecast.
                4. Steps that can be pulled forward assigned to an owner with a date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six weeks before each quarter end, every committed deal has its remaining steps counted against days left and the forecast adjusted."
                cadence: cyclic
              tasks:
                - "List every committed deal with its remaining steps to signature"
                - "Count the working days each remaining step needs"
                - "Run the slip review six weeks before quarter end @recurring(quarterly)"
                - "Move deals that cannot finish into next quarter's forecast"
            - name: Stalled deal reactivation routine
              description: |-
                ## Purpose
                Stalled enterprise deals are often still alive but waiting for a trigger, such as a new budget, a leadership change or a failed workaround. A monthly pass through deals with no buyer action for thirty days, choosing one specific reason to re-engage for each, recovers some of them and closes out the rest honestly.

                ## Milestones
                1. A list of deals with no buyer action in thirty days, refreshed monthly.
                2. One specific re-engagement reason written for each, tied to something in their world.
                3. Deals with no reply after two attempts closed out with a reason recorded.
                4. A count kept of how many stalled deals re-entered active stages.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month, every deal stalled for thirty days has a recorded re-engagement attempt or a close-out reason."
                cadence: rolling
              tasks:
                - "Pull a list of deals with no buyer action in the last thirty days"
                - "Write one specific reason to re-engage each stalled deal"
                - "Work through the stalled deal list and close out the dead ones @recurring(monthly:24)"
                - "Keep a running count of stalled deals that came back to life"
            - name: Reading a buyer's annual report and results
              description: |-
                ## Purpose
                Senior buyers notice quickly when a seller has not read what their company told shareholders. Learning to pull strategic priorities, cost pressures, named risks and investment plans from an annual report and results call in under an hour gives you the language for the business case and the questions that get executives talking.

                ## Milestones
                1. The sections of an annual report that matter for selling identified: strategy, risks, outlook.
                2. Three strategic priorities and two named risks extracted for one target account.
                3. Each priority linked to a problem your solution addresses, in the buyer's words.
                4. A one-page account brief written and used before the next executive meeting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page account brief with three strategic priorities and two risks quoted from the buyer's own reports, used before an executive meeting."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Download the latest annual report for your largest target account"
                - "Read the strategy, principal risks and outlook sections and note key phrases"
                - "Link each priority to a problem you solve using the buyer's own words"
                - "Read each strategic buyer's latest results announcement @recurring(quarterly)"
            - name: Contract basics for enterprise sellers
              description: |-
                ## Purpose
                Sellers who cannot explain what a liability cap or an indemnity does end up relaying messages between two legal teams and losing control of the timeline. Learning the purpose of the dozen clauses that come up in every enterprise contract, enough to understand why a buyer wants a change, keeps you useful in legal calls without pretending to be a lawyer.

                ## Milestones
                1. Plain-language notes on twelve common clauses, from limitation of liability to termination.
                2. For each clause, a line on why buyers typically push to change it.
                3. Your own counsel asked to check the notes for accuracy.
                4. One live legal call attended where you summarised the open issues for both sides.

                ## Notes
                Understanding a clause is different from agreeing a position on it. Positions come from your counsel and the fallback playbook.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Plain-language notes on twelve clauses, checked by counsel, and one legal call where you summarised open issues correctly."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the twelve clauses that appeared in every recent enterprise contract"
                - "Write a two-line plain-language note on what each clause does"
                - "Ask counsel to correct anything you have misunderstood"
                - "Summarise the open legal issues at the start of the next legal call"
            - name: Information security basics for sellers
              description: |-
                ## Purpose
                Questions about single sign-on, encryption at rest, audit reports and data residency arrive in the first meeting with a large buyer, long before a security engineer is on the call. Knowing what each term means and which answers you can give without help keeps early conversations moving and lets you route the hard ones accurately.

                ## Milestones
                1. A glossary of twenty security terms buyers use, each explained in one line.
                2. A list of the questions you can answer yourself and those that go to the security lead.
                3. Your answers to the common questions checked by the security lead.
                4. A practice session held where a colleague plays the buyer's security analyst.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A twenty-term security glossary and a checked list of answers you can give unaided, tested in one practice session."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect the security questions asked in your last three enterprise deals"
                - "Write a one-line definition for each term that came up"
                - "Ask the security lead which answers you may give without them"
                - "Run a practice call with a colleague playing a security analyst"
            - name: CFO-ready business case model
              description: |-
                ## Purpose
                Finance approvers reject enterprise purchases that rest on vague productivity claims, and they rarely meet the seller to hear the argument. Building a business case with the buyer's own baseline numbers, conservative assumptions, a payback period and a cost of doing nothing gives your champion a document finance will take seriously.

                ## Milestones
                1. Baseline figures gathered from the buyer, such as current cost, volume or error rates.
                2. Benefits modelled with low, expected and high assumptions, each sourced.
                3. Payback period, three-year cost and cost of delay calculated.
                4. The model reviewed with the champion and someone from the buyer's finance team.

                ## Notes
                Use the buyer's numbers wherever possible. A case built on your marketing averages is the first thing a finance reviewer discounts.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A business case using the buyer's baseline figures with payback and three-year cost, reviewed with someone in the buyer's finance team."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the champion for three baseline numbers finance will recognise"
                - "Model benefits with low, expected and high assumptions"
                - "Calculate payback, three-year cost and the monthly cost of delay"
                - "Walk through the model with someone from the buyer's finance team"
            - name: Consensus building across a buying committee
              description: |-
                ## Purpose
                Large purchases are now approved by committees of six to ten people with different worries, and a deal can stall because two of them disagree quietly. Learning how to surface each member's criteria, find the shared problem and help the champion run alignment conversations is the skill that separates enterprise sellers from good mid-market ones.

                ## Milestones
                1. The committee members for one live deal listed with their stated criteria.
                2. Points of disagreement between members written down.
                3. A shared problem statement drafted that each member could agree with.
                4. One alignment conversation held, run by the champion with your preparation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written map of committee criteria and disagreements on one live deal, with a shared problem statement used in an alignment conversation."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List each committee member on one live deal and what they care about"
                - "Write down where two or more members disagree"
                - "Draft a one-paragraph problem statement every member could sign"
                - "Help the champion plan a conversation to align the committee"
            - name: Running a joint steering committee
              description: |-
                ## Purpose
                When a deal reaches pilot or final evaluation, a fortnightly steering committee with senior people from both sides keeps decisions moving and exposes blockers early. Learning to set the agenda, present status in five minutes and leave every meeting with decisions recorded is a skill most sellers pick up by accident, usually after a bad meeting.

                ## Milestones
                1. A standing agenda covering status, decisions needed, risks and next steps.
                2. A five-minute status format agreed with the champion.
                3. Two steering meetings held with decisions and owners recorded.
                4. Minutes sent to every attendee within one working day of each meeting.

                ## Notes
                Start from the **Meeting notes** template for the minutes. Put decisions at the top, not buried under discussion.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two joint steering meetings run with a standing agenda, decisions recorded and minutes sent within one working day."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Propose a joint steering committee to the champion for your largest deal"
                - "Draft a standing agenda with decisions needed near the top"
                - "Run the first steering meeting and record decisions with owners"
                - "Send minutes to every attendee within one working day"
            - name: Writing for the decision maker you never meet
              description: |-
                ## Purpose
                Most enterprise deals are approved in a room the seller never enters, on the strength of a document the champion forwards. Learning to write a one-page summary that a busy executive can read cold, covering problem, cost of inaction, proposed solution, investment and risk, puts your best argument in front of the person who decides.

                ## Milestones
                1. A one-page format agreed: problem, cost of inaction, solution, investment, risks, ask.
                2. A first summary written for a live deal in under four hundred words.
                3. The summary tested on someone outside the deal who reads it cold.
                4. The champion confirms it was forwarded to the approver unchanged or lightly edited.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page approver summary under four hundred words for a live deal, tested on a cold reader and forwarded by the champion."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a one-page approver summary from your discovery notes"
                - "Cut the draft to under four hundred words"
                - "Ask a colleague outside the deal to read it cold and say what is unclear"
                - "Send the final summary to the champion to forward"
            - name: Proof of value with written success criteria
              description: |-
                ## Purpose
                Open-ended pilots are where enterprise deals go to wait: the buyer tests for months, nobody defines success, and the result is a polite request for more time. Scoping a proof of value with measurable success criteria, a fixed end date, named evaluators and an agreed commercial next step if the criteria are met turns the pilot into a decision point.

                ## Milestones
                1. Three to five measurable success criteria agreed in writing with the buyer.
                2. A fixed start and end date, with named evaluators on the buyer's side.
                3. A commercial next step agreed in advance if the criteria are met.
                4. A results review held on the end date with the outcome recorded.

                ## Notes
                Ask for the commercial commitment before the pilot starts. After a successful pilot, the buyer has less reason to commit quickly, not more.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed proof of value plan with measurable criteria, an end date and an agreed next step, followed by a results review on the end date."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Draft three to five measurable success criteria with the champion"
                - "Agree a fixed end date and name the buyer's evaluators"
                - "Write down the commercial next step if the criteria are met"
                - "Book the results review for the pilot end date"
            - name: Pilot to production conversion plan
              description: |-
                ## Purpose
                A successful pilot still has to cross procurement, a full security review and budget approval before it becomes a contract, and many teams treat pilot success as the finish line. Planning the conversion steps while the pilot is running, so the production paperwork is ready on the results day, removes the dead month that often follows a good pilot.

                ## Milestones
                1. Every step between pilot success and production contract listed with owners.
                2. Production security and legal work started during the pilot, not after.
                3. Order form and statement of work drafted before the results review.
                4. Signature achieved within an agreed number of weeks of the pilot end date.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A conversion plan with production paperwork drafted before the pilot results review and a signature date agreed with the buyer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every step between pilot success and a production contract"
                - "Start the production security review while the pilot runs"
                - "Draft the order form and statement of work before the results review"
                - "Agree a target signature date with the champion"
            - name: Reference calls and site visits for late-stage deals
              description: |-
                ## Purpose
                Buyers in the final stages of a large purchase want to talk to a peer who took the same risk and survived it. Matching each late-stage deal to a reference customer with a similar size, industry and use case, and preparing both sides properly, turns the reference call into evidence rather than a pleasant chat.

                ## Milestones
                1. A list of willing reference customers with industry, size and use case.
                2. A reference matched to each late-stage deal on at least two of those three.
                3. The reference briefed on the buyer's concerns before the call.
                4. Feedback from both sides recorded after each call.

                ## Notes
                Reference customers tire quickly. Limit each one to a set number of calls a quarter and thank them every time.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each late-stage deal has a matched, briefed reference customer and recorded feedback from the call."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask customer success for a list of customers willing to take reference calls"
                - "Match the reference closest in size and industry to your late-stage deal"
                - "Brief the reference on what the buyer is worried about"
                - "Record feedback from both sides after the call"
            - name: Multi-year and ramped deal structure options
              description: |-
                ## Purpose
                Large buyers often cannot fund the full deployment in year one, and a flat three-year price forces a smaller deal or a long wait for budget. Preparing two or three structures in advance, such as a ramp that grows with rollout, a phased commitment by business unit or a multi-year term with price protection, gives the buyer a way to say yes inside this year's budget.

                ## Milestones
                1. Two or three deal structures drafted for the largest open deal.
                2. Each structure checked with your finance team for revenue and cash impact.
                3. The structures presented to the champion as options, not concessions.
                4. The chosen structure recorded with the reason the buyer preferred it.

                ## Notes
                Agree with your deal desk which structures need approval before showing them. Offering a structure you cannot sign damages trust.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three finance-approved deal structures shown to the buyer, with the chosen one and the reason recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the champion how much budget is available this year and next"
                - "Draft a ramped, a phased and a flat multi-year option"
                - "Check each structure with finance before it goes to the buyer"
                - "Record which structure the buyer chose and why"
            - name: Shortening the gap from verbal yes to signature
              description: |-
                ## Purpose
                Many enterprise deals lose four to eight weeks after the buyer has already said yes, waiting on vendor setup, signatory availability, purchase orders and final legal tidying. Measuring that gap across your last ten wins and fixing the two biggest causes is one of the fastest ways to bring revenue forward without finding a single new customer.

                ## Milestones
                1. The verbal yes and signature dates found for the last ten won deals.
                2. The cause of delay recorded for each deal that took more than two weeks.
                3. The two most common causes chosen for a fix.
                4. A changed step in place and measured on the next three wins.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The verbal yes to signature gap measured on ten past wins, two causes fixed and the gap measured again on the next three wins."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the verbal yes and signature dates for your last ten wins"
                - "Note the main cause of delay on each deal that took over two weeks"
                - "Pick the two most common causes and agree a fix with the deal team"
                - "Measure the gap again after the next three wins"
            - name: Your paper or the buyer's paper decision
              description: |-
                ## Purpose
                Starting from the buyer's contract template can add months, because every clause is unfamiliar to your counsel, while insisting on your own can lose the deal with a buyer whose policy forbids it. Setting a clear rule on when to accept buyer paper, based on deal size, the buyer's sector and their procurement policy, saves the argument being had afresh on every deal.

                ## Milestones
                1. The last ten enterprise contracts sorted by whose template was used and how long legal took.
                2. A rule drafted for when to accept buyer paper, agreed with counsel.
                3. A short buyer-facing explanation written for asking to use your template.
                4. The rule applied on the next new enterprise deal and the result recorded.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule, agreed with counsel, on when to accept buyer contract templates, applied on the next enterprise deal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sort your last ten enterprise contracts by whose template was used"
                - "Compare how long legal took on each type"
                - "Draft a rule for accepting buyer paper and review it with counsel"
                - "Write a short note asking buyers to start from your template"
            - name: Systems integrator and partner role in the deal
              description: |-
                ## Purpose
                Many large buyers trust their existing systems integrator or reseller more than a new vendor, and some will only buy through an approved partner. Deciding early whether a partner should lead, support or stay out of the deal, and agreeing who owns the relationship, avoids two sales teams pitching different stories to the same executive.

                ## Milestones
                1. Partners already working with the buyer identified, with their influence noted.
                2. A decision recorded on whether a partner leads, supports or stays out.
                3. Roles, commercial terms and who speaks to whom agreed with the partner in writing.
                4. A joint account plan in place if the partner is involved.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded partner decision for each strategic deal, with written roles and terms where a partner is involved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the champion which integrators or resellers the buyer already uses"
                - "Decide with your partner manager whether a partner should lead or support"
                - "Agree in writing who owns each buyer relationship"
                - "Hold a joint planning call if a partner is involved"
            - name: Preparing your champion for the approval committee
              description: |-
                ## Purpose
                When the deal goes to an investment or capital approval committee, your champion presents it and you wait outside. Preparing them with a tight deck, the three hardest questions the committee will ask and rehearsed answers raises the odds that the meeting ends in approval rather than a request for more information.

                ## Milestones
                1. The committee's members, format and time allowed confirmed with the champion.
                2. A short deck or paper prepared in the format the committee expects.
                3. The three hardest likely questions written down with answers.
                4. A rehearsal held with the champion at least three days before the committee.

                ## Notes
                Ask what the committee rejected recently and why. That tells you which question will come first.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The champion has rehearsed with a committee-format paper and answers to three hard questions at least three days before the approval meeting."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the champion what the committee rejected recently and why"
                - "Prepare the paper in the format the committee expects"
                - "Write the three hardest questions with short answers"
                - "Rehearse with the champion at least three days before the meeting"
            - name: Live security architecture review session
              description: |-
                ## Purpose
                Regulated buyers often require a live session where their security architects question your engineers about data flows, access controls and incident response. Preparing that session with the right engineer, a rehearsed walk-through of the architecture and a list of likely questions turns a nervous interrogation into the moment the security team decides you are safe to approve.

                ## Milestones
                1. The buyer's agenda and attendees for the session confirmed.
                2. The engineer presenting briefed on the deal and the buyer's concerns.
                3. A rehearsed architecture walk-through under twenty minutes.
                4. Follow-up actions from the session sent in writing within two working days.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The architecture review held with a briefed engineer and a rehearsed walk-through, and written follow-ups sent within two working days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the buyer's security contact for the agenda and attendee list"
                - "Book the right engineer and brief them on the buyer's concerns"
                - "Rehearse the architecture walk-through with a time limit"
                - "Send written follow-up actions within two working days"
            - name: Executive briefing day at your offices
              description: |-
                ## Purpose
                Bringing the buyer's senior team to your offices for a half day, with your leadership, product team and a customer story, can compress weeks of email into one afternoon of trust. Planned badly, it becomes an expensive product tour; planned well, it ends with an agreed decision date.

                ## Milestones
                1. The objective of the day agreed with the champion, written as a decision or commitment.
                2. An agenda built around the buyer's priorities, not your product roadmap.
                3. Your executives briefed on each visitor and the one thing to ask for.
                4. A follow-up note sent within a day confirming what was agreed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A briefing day held with a written objective, briefed executives and a follow-up note confirming the agreed outcome within one day."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree with the champion what the visitors should decide by the end of the day"
                - "Build an agenda that starts with the buyer's priorities"
                - "Brief each of your executives on the visitors they will meet"
                - "Send a follow-up note confirming what was agreed"
            - name: Contract signature week runbook
              description: |-
                ## Purpose
                The final week before signature is where small things cost a quarter: the authorised signatory is travelling, the entity name on the order form is wrong, the purchase order needs a supplier number that takes ten days to issue. A runbook that checks every signature-week detail two weeks early means the deal signs on the date both sides agreed.

                ## Milestones
                1. Authorised signatories on both sides confirmed with their availability.
                2. Legal entity names, addresses and order form details checked against the contract.
                3. Supplier registration and purchase order requirements confirmed with the buyer.
                4. The signature route set up and tested in the e-signature tool.

                ## Notes
                Start from the **Operational checklist** template and keep it for every future deal.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signature week checklist completed two weeks before the target date, and the contract signed on or before that date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the champion who signs and whether they are available that week"
                - "Check entity names and addresses on the order form against the contract"
                - "Confirm the supplier registration and purchase order steps with the buyer"
                - "Set up and test the e-signature routing two weeks ahead"
            - name: Sales to delivery handover for enterprise wins
              description: |-
                ## Purpose
                After a long cycle, the seller holds months of context about what the buyer was promised, who matters and what nearly killed the deal, and most of it is lost at handover. A structured handover meeting and document passes that context to the delivery team so the first ninety days match what was sold.

                ## Milestones
                1. A handover document covering commitments, stakeholders, risks and success criteria.
                2. A handover meeting held between the deal team and delivery before the customer kick-off.
                3. The champion introduced personally to the delivery lead.
                4. Any promise made outside the contract written down and acknowledged by delivery.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A handover document and meeting completed before the customer kick-off, with every off-contract promise acknowledged by delivery."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every commitment made to the buyer, including verbal ones"
                - "Write the handover document with stakeholders, risks and success criteria"
                - "Hold the handover meeting before the customer kick-off"
                - "Introduce the champion to the delivery lead in person or on a call"
            - name: Full-cycle deal retrospective
              description: |-
                ## Purpose
                Win or lose, a nine-month deal holds lessons that disappear within weeks as the team moves on. A ninety-minute retrospective with the whole deal team, walking the timeline from first meeting to outcome and naming the moments that sped it up or slowed it down, feeds real changes back into how the next pursuit is run.

                ## Milestones
                1. A timeline of the deal drawn from the deal room, with key dates marked.
                2. A retrospective held with every deal team member invited.
                3. Three things to repeat and three things to change written down.
                4. One change adopted in the deal team charter or playbooks.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A retrospective held within three weeks of the outcome, with three repeats, three changes and one adopted change recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to build a dated timeline from the deal room notes"
                - "Invite every deal team member to a ninety-minute retrospective"
                - "Record three things to repeat and three to change"
                - "Update the deal team charter with one agreed change"
            - name: Champion leaves mid-deal recovery
              description: |-
                ## Purpose
                Champions change jobs, get promoted or go on long leave, and an enterprise deal six months in can lose its only internal advocate overnight. A recovery plan, run in the first fortnight, secures an introduction to a successor, re-establishes the business case with them and keeps the departing champion as an ally in their new role.

                ## Milestones
                1. A handover introduction secured from the departing champion to a named successor.
                2. The business case re-presented to the successor within two weeks.
                3. The successor tested on power, stake and willingness to act.
                4. Contact kept with the former champion, who may buy again at their new company.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Within two weeks of the champion leaving, a successor is introduced, briefed on the business case and assessed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the departing champion for a personal introduction to their successor"
                - "Re-present the business case to the successor within two weeks"
                - "Test the successor on power, stake and willingness to act"
                - "Connect with the former champion at their new company"
            - name: Reorganisation or new executive mid-cycle
              description: |-
                ## Purpose
                A buyer reorganisation or a new executive arriving in the sponsoring function resets priorities, and deals approved under the old leadership are often paused for review. Moving fast to understand the new structure, meet the new executive and reconnect the deal to their stated priorities is the difference between a pause and a quiet cancellation.

                ## Milestones
                1. The new organisation chart obtained and the deal's stakeholders re-mapped.
                2. The new executive's stated priorities gathered from announcements or their first all-hands.
                3. A meeting held with the new executive or their direct report.
                4. The business case reworded around the new priorities.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Within a month of the change, the new executive has been met and the business case updated to their stated priorities."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the champion for the new organisation chart"
                - "Find the new executive's stated priorities in their public statements"
                - "Request a meeting with the new executive or their direct report"
                - "Rewrite the business case opening around the new priorities"
            - name: Budget freeze or slip into next fiscal year
              description: |-
                ## Purpose
                Spending freezes and mid-year budget cuts push even approved enterprise deals into the next fiscal year. Responding with a plan, such as a smaller first phase inside discretionary limits, a signed agreement with a deferred start, or a dated re-engagement tied to the budget cycle, keeps the deal alive and the forecast honest.

                ## Milestones
                1. The cause and scope of the freeze confirmed with the champion.
                2. Two or three options drafted, from a smaller first phase to a deferred start.
                3. One option agreed with the buyer, or a dated re-engagement set.
                4. The forecast updated to reflect the new timing.

                ## Notes
                Ask whether the freeze covers operating or capital budgets. Some deals can be restructured to fit the one that is still open.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "An agreed option or dated re-engagement recorded with the buyer, and the forecast updated, within three weeks of a freeze being announced."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the champion what the freeze covers and how long it is expected to last"
                - "Draft a smaller first phase and a deferred start option"
                - "Agree an option or a dated re-engagement with the buyer"
                - "Update the forecast close date and amount"
            - name: Manager inspection of long-cycle deals
              description: |-
                ## Purpose
                For managers, inspecting a nine-month deal with the same weekly questions used for a thirty-day one either wastes the seller's time or misses the real risk. A monthly inspection focused on purchase path progress, champion evidence and next buyer commitment, rather than activity counts, gives coaching the seller can act on.

                ## Milestones
                1. A short inspection question set written for long-cycle deals.
                2. Each strategic deal inspected monthly with one coaching point recorded.
                3. Close date changes discussed with the evidence behind them.
                4. Sellers asked after a quarter whether the inspection helps them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every strategic deal inspected monthly for a quarter with one coaching point recorded, and seller feedback on the format gathered."
                cadence: rolling
              tasks:
                - "Write six inspection questions focused on evidence, not activity"
                - "Inspect each strategic deal and record one coaching point @recurring(monthly:3)"
                - "Ask for the evidence behind every close date change"
                - "Ask each seller after a quarter whether the inspection helps"
            - name: First enterprise deal for a mid-market seller
              description: |-
                ## Purpose
                Sellers moving up from mid-market deals know how to sell but not how to run a cycle with security reviews, procurement, legal and a buying committee of eight. A structured first pursuit, with a mentor, a purchase path map and weekly coaching, teaches the new rhythm before bad habits from shorter deals cost the first big opportunity.

                ## Milestones
                1. A mentor who has closed enterprise deals assigned for the first pursuit.
                2. The purchase path for the first enterprise deal mapped with the mentor.
                3. Weekly coaching sessions held for the first three months.
                4. A written list of differences from mid-market selling, kept for future hires.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A first enterprise pursuit run with an assigned mentor, a mapped purchase path and twelve weekly coaching sessions recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your manager to assign an enterprise mentor for your first pursuit"
                - "Map the purchase path for your first enterprise deal with the mentor"
                - "Book weekly coaching sessions for the next three months"
                - "Write down every way this deal differs from your mid-market deals"
            - name: Enterprise selling without a legal or security team
              description: |-
                ## Purpose
                Small vendors selling into large companies face the same security questionnaires and contract demands as global competitors, without in-house counsel or a security team. Building a minimum kit, with an outside counsel arrangement, a reusable answer library, a basic policy set and a realistic view of what you can commit to, lets a small team compete without signing terms it cannot meet.

                ## Milestones
                1. An outside counsel arrangement in place for contract review, with agreed fees.
                2. A library of answers to the most common security and compliance questions.
                3. The core written policies that buyers request in place and dated.
                4. A list of terms the business cannot accept, agreed with the owner or board.

                ## Notes
                Never claim a certification you do not hold. Say what you do instead and when you plan to be certified, if you do.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Outside counsel arranged, an answer library of the most common questions built, and a written list of unacceptable terms agreed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask two outside counsel firms for a fixed fee to review enterprise contracts"
                - "Collect every security question you have been asked into one answer library"
                - "List the contract terms the business cannot accept"
                - "Add new questions and answers to the library after each review @recurring(monthly:28)"
            - name: Global multi-entity deal coordination
              description: |-
                ## Purpose
                Global buyers often sign a master agreement in one country and then order through local entities with their own tax, currency, data residency and language requirements. Coordinating that structure early, with your finance, tax and legal teams, prevents a signed master agreement that nobody can actually order under.

                ## Milestones
                1. Every buyer entity that will order listed with country, currency and tax needs.
                2. The master agreement and local order structure agreed with both legal teams.
                3. Data residency and local language requirements confirmed for each country.
                4. Your finance team confirms it can invoice each entity correctly.

                ## Notes
                Bring your tax team in before pricing is agreed. Withholding tax and local sales taxes can change the net value of a deal.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written entity and ordering structure agreed with the buyer, with finance confirming it can invoice every ordering entity."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the buyer which of their entities will order and in which countries"
                - "Check data residency and language needs for each country"
                - "Agree the master and local order structure with your legal team"
                - "Confirm with finance that each entity can be invoiced correctly"
            - name: Governance for strategic mega-deals
              description: |-
                ## Purpose
                Mega-deals several times larger than your usual contract carry risks that no single seller should own: delivery capacity, concentration of revenue, unusual liability and board-level visibility. Setting up governance with an internal steering group, defined approval gates and a single accountable executive keeps the pursuit fast without anyone signing something the company cannot deliver.

                ## Milestones
                1. A size threshold agreed above which mega-deal governance applies.
                2. An internal steering group named with one accountable executive.
                3. Approval gates defined for pricing, terms and delivery commitments.
                4. Delivery capacity confirmed before final commercial terms are offered.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written mega-deal governance model with a size threshold, named steering group and approval gates, applied to the next qualifying deal."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree with leadership the deal size that triggers mega-deal governance"
                - "Name the accountable executive and steering group members"
                - "Define approval gates for pricing, terms and delivery commitments"
                - "Confirm delivery capacity with operations before final terms go out"
            - name: AI and data governance review readiness
              description: |-
                ## Purpose
                Buyers with mature risk teams increasingly run a separate review for any product using artificial intelligence, asking how models are trained, whether their data is used, how outputs are checked and who is accountable. Preparing a clear, accurate statement and evidence in advance stops that review from becoming a new three-month stage at the end of the cycle.

                ## Milestones
                1. A written statement on how your product uses AI, approved by product and legal.
                2. Answers prepared on training data, customer data use, human oversight and retention.
                3. The buyer's AI review requirements confirmed early in each strategic deal.
                4. The statement dated and owned, with a review date set.

                ## Notes
                Accuracy matters more than reassurance. An overstated claim found in due diligence can end the deal and the relationship.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved AI usage statement with answers on training, data use, oversight and retention, used in every strategic deal's review."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the AI questions buyers have asked in recent reviews"
                - "Draft the AI usage statement with product and legal"
                - "Ask each strategic buyer early whether they run a separate AI review"
                - "Refresh the AI usage statement with product and legal @recurring(quarterly)"
            - name: Enterprise cycle time and stage conversion analysis
              description: |-
                ## Purpose
                Without data, every long deal feels uniquely slow and nobody knows which stage really costs the time. Analysing the last twenty enterprise deals for time in each stage, conversion between stages and the step where most losses occur shows where the next process change will pay off.

                ## Milestones
                1. Stage dates extracted for the last twenty enterprise deals, won and lost.
                2. Median time in each stage and conversion between stages calculated.
                3. The stage with the longest time and the one with the most losses identified.
                4. One process change proposed for each, with a measure to track it.

                ## Notes
                Start from the **Metrics log** template to keep the quarterly figures in one place.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cycle time and conversion analysis of twenty enterprise deals, with one proposed change for the slowest and leakiest stages."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Export stage dates for the last twenty enterprise deals"
                - "Calculate median time in each stage and stage-to-stage conversion"
                - "Name the slowest stage and the stage with the most losses"
                - "Refresh the cycle time and conversion figures @recurring(quarterly)"
            - name: Displacing an entrenched incumbent vendor
              description: |-
                ## Purpose
                Replacing a vendor that has been inside the buyer for years means fighting switching costs, existing relationships and the fear of a failed migration, often while the incumbent is offering a heavy renewal discount. A displacement plan built around the cost of staying, a de-risked migration path and allies who are frustrated with the current vendor gives the buyer a safe reason to change.

                ## Milestones
                1. The incumbent's contract end date, notice period and renewal terms established.
                2. The cost of staying with the incumbent written down in the buyer's terms.
                3. A migration plan with phases, rollback options and a named delivery owner.
                4. At least two buyer stakeholders identified who want the change.

                ## Notes
                Expect a strong discount from the incumbent near the decision. Prepare the champion for it so it reads as a reaction, not a reason to stay.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A displacement plan with the incumbent's notice date, a cost of staying, a phased migration plan and two named internal allies."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find out the incumbent's contract end date and notice period"
                - "Write the cost of staying in terms the buyer's finance team uses"
                - "Draft a phased migration plan with rollback options"
                - "Prepare the champion for the incumbent's late discount offer"
---

# Enterprise Complex Deal Cycles

This area is for enterprise sellers, the deal teams around them and the managers who inspect their pipelines, when one deal runs six to eighteen months and passes through a dozen hands on the buyer's side. It starts with the foundations (a go or no-go decision, a deal room, a deal team charter, the buyer's purchase path, a risk register, a champion test, the fiscal calendar, a security evidence pack and pre-agreed legal fallbacks), then the operating rhythms that keep momentum, the skills a long cycle demands, the improvements and decisions that shorten it, the dated moments worth preparing for, the situations that knock deals sideways, and finally specialist work on global, strategic and incumbent-displacement deals.

What repeats is a Monday deal team stand-up, a Tuesday security status check, a Wednesday redline review, a Thursday champion call and a Friday momentum check, monthly multi-threading, sponsor, health and stalled-deal reviews spread across the month, and quarterly evidence, slip and cycle time reviews. The Risk register, Meeting notes, Operational checklist and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
